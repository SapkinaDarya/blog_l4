<template>
  <div class="custom-search">
    <label class="custom-search__label" for="input">
			<button class="custom-search__btn" @click="() => handleSearch()">
				<img
					src="/PetWebsite/search.svg"
					alt="search"
					class="custom-search__icon"
				>
			</button>
    </label>
    <input
      v-model="searchText"
      type="text"
      :placeholder="placeholderText"
      id="input"
      class="custom-search__input"
      @input="() => setSearchText(searchText)"
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CustomSearch",
  props: {
    placeholderText: {
      type: String,
      default: "Search"
    },
  },
  computed: {
    ...mapGetters('PetWebsiteStore', [
      'getSerchText'
    ])
  },
  methods: {
    ...mapActions('PetWebsiteStore', [
      'setSearchText', 
			'loadFirstList',
    ]),
    handleSearch () {
      this.loadFirstList(this.getSerchText);
    },
  },
}
</script>

<style lang="less" scoped>
.custom-search {
  width: 515px;
  height: 40px;
  display:flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  background-color: white;
  border-radius: 20px;

  &__btn {
    border: none;
    outline: none;
    background-color: transparent;
  }

  &__icon {
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  &__input {
    border: none;
    outline: none;
    border-radius: 20px;
  }
}
</style>
