<template>
  <div class="home">
    <div class="home__container">
      <CustomHeader />
      <PetsSection />
      <NewsSection />
      <CustomFooter />
    </div>
  </div>
</template>

<script>
import CustomHeader from '../CustomHeader.vue'
import PetsSection from '../PetsSection.vue'
import NewsSection from '../NewsSection.vue'
import CustomFooter from '../CustomFooter.vue'
import { mapActions } from "vuex";

export default {
  name: 'HomePage',
  components: {
    CustomHeader,
    CustomFooter,
    PetsSection,
    NewsSection
  },
  methods: {
    ...mapActions('PetWebsiteStore', [
      'loadFirstList', 'loadSecondList'
    ])
  },
  created () {
    this.loadFirstList();
    this.loadSecondList();
  }
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.home {
  background-color: #FEE6B8;
  font-family: "Montserrat";

  &__container {
    max-width: 1520px;
    margin: 0 auto;
  }
}
</style>
