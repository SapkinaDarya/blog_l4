<template>
  <div class="card">
    <div class="card__content">
      <RouterLink :to="{ name: 'PETWEBSITENEWSPAGE', params: { id: news.id } }">
        <img
          class="card__image"
          :src="news.image"
          :alt="news.name"
        />
        <div class="card__text">
          <div class="card__label">
            <p class="card__label-text">Pet knowledge</p>
          </div>
          <h2 class="card__name">{{ news.name }}</h2>
          <div class="card__description-box">
            <span class="card__description">{{ news.text }}</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>

export default {
  name: "NewsCard",
  props: {
    news: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>

<style scoped lang="less">
.card {

  &__content {
    display: flex;
    flex-direction: column;
    width: 373px;
    height: 420px;
    background-color: white;
    border-radius: 25px;
    margin-top: 15px;
    cursor: pointer;
    margin-right: 30px;

    &:hover {
      opacity: 0.8;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__image {
    width: 358px;
    height: 240px;
    margin: 8px;
    border-radius: 20px;
  }

  &__label {
    margin-bottom: 8px;
    width: 94px;
    height: 20px;
    border-radius: 50px;
    background-color: rgb(252, 162, 118);
    border: none;
    color: white;
    font-weight: 600;
    font-size: 10px;
  }

  &__label-text {
    text-align: center;
    padding-top: 3px;
  }

  &__text {
    margin-left: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-style: normal;
    line-height: 17px;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 7px;
    line-height: 24px;
  }

  &__description-box {
    margin-bottom: 5px;
    padding-right: 5px;
    height: 55px;
    overflow: hidden;
  }

  &__description {
    font-size: 12px;
    font-weight: 400;
    color: black;
  }
}
</style>
