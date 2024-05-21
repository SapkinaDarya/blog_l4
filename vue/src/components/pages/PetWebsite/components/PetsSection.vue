<template>
  <div class="first-block">
    <div class="first-block__wrapper">
      <div class="first-block__text-box">
        <h3 class="first-block__text">Whats new?</h3>
        <h2 class="first-block__name">Take A Look At Some Of Our Pets</h2>
      </div>
      <CustomSearch placeholderText="Search..."/>
    </div>
    <div class="first-block__cards">
      <PetCard
        v-for='pet in getFirstType'
        :key="pet.id"
        :pet="pet"
      />
    </div>
  </div>
</template>

<script>
import PetCard from "./PetCard";
import CustomSearch from "./CustomSearch";
import { mapGetters } from "vuex";

export default {
  name: 'PetsSection',
  components: {
    PetCard,
    CustomSearch,
  },
  computed: {
    ...mapGetters('PetWebsiteStore', [
      'getFirstType'
    ]),
  },
};
</script>

<style scoped lang="less">
.first-block {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgba(249, 236, 217, 1);

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 1200px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__text-box {
    font-style: normal;
    font-weight: 600;
    margin-left: -3%;
  }

  &__text {
    font-size: 15px;
  }

  &__name {
    margin-top: 8px;
    font-size: 20px;
    color: #053459;
  }
}
</style>
