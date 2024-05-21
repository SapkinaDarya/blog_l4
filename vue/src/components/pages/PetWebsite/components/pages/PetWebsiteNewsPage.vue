<template>
  <div class="news-page">
    <div class="news-page__container">
      <NavMenu class="news-page__menu"/>
      <div class="news-page__card">
        <img
          :src="getSecondType.image"
          :alt="getSecondType.id"
          class="news-page__image"
        >
        <h1 class="news-page__name">{{ getSecondType.name }}</h1>
        <p class="news-page__text">{{ getSecondType.text }}</p>
      </div>
    </div>
    <CustomFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavMenu from "../NavMenu.vue"
import CustomFooter from "../CustomFooter.vue"

export default {
  name: "PetWebsiteNewsPage",
  components: {
    NavMenu,
    CustomFooter,
  },
  computed: {
    ...mapGetters('PetWebsiteStore', [
      'getSecondType'
    ]),
  },
  methods: {
    ...mapActions('PetWebsiteStore', [
      'loadDataById'
    ])
  },
  created () {
    this.loadDataById(this.$route.params.id);
  }
}
</script>

<style lang="less" scoped>
.news-page {
  background-color: #FEE6B8;
  font-family: "Montserrat";

  &__container {
    padding: 40px;
  }

  &__menu {
    margin-bottom: 50px;
  }

  &__card {
    border: 2px solid white;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    border-radius: 20px;
    width: 70%
  }

  &__image {
    width: 500px;
    margin-bottom: 30px;
  }

  &__name {
    width: 500px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  &__text {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
