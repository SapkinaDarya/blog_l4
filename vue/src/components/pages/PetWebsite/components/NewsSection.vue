<template>
  <div class="news-section">
    <h3 class="news-section__text">You already know?</h3>
    <h1 class="news-section__name">Useful Pet Knowledge</h1>
    <div class="news-section__cards">
      <div v-for="(news, index) in visibleNews" :key="index">
        <NewsCard :news="news"/>
      </div>
    </div>
    <div class="news-section__btn-box">
      <button class="news-section__btn news-section__btn-prev" @click="() => scroll(-1)">❮</button>
      <button class="news-section__btn news-section__btn-next" @click="() => scroll(1)">❯</button>	
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue"
import { mapGetters } from "vuex";

export default {
  name: "NewsSection",
  components: {
    NewsCard,
  },
  data() {
    return {
      currentPage: 0
    };
  },
  computed: {
    ...mapGetters('PetWebsiteStore', [
      'getSecondType'
    ]),
    pageCount () {
      return Math.ceil(this.getSecondType.length / 3);
    },
    containerWidth () {
      return `${100 * this.pageCount}%`;
    },
    containerOffset () {
      return `-${this.currentPage * (100 / this.pageCount)}%`;
    },
    visibleNews () {
      const start = this.currentPage * 3;
      const end = start + 3;
      return this.getSecondType.slice(start, end);
    }
  },
  methods: {
    scroll (direction) {
      this.currentPage = (this.currentPage + direction + this.pageCount) % this.pageCount;
    }
  },
};
</script>

<style scoped lang="less">
.news-section {
  font-weight: 600;
  padding: 50px 130px;

  &__text {
    font-size: 15px;
  }

  &__name {
    margin-top: 8px;
    font-size: 20px;
    color: #053459;
  }

  &__cards {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  &__btn-box {
    text-align: center;
  }

  &__btn {
    margin-right: 10px;
    width: 60px;
    background-color: transparent;
    border-radius: 10px;
    color: white;
    border: 1px solid white;
    transition: 0.5s all;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      background-color: #ff905d;
    }
  }
}
</style>
