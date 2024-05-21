<template>
  <div class="header">
    <NavMenu class="header__menu"/>
    <SquareDecor 
      class="header__decor-square header__decor-square--first"
      size="large"
      color="beige"
    />
    <SquareDecor 
      class="header__decor-square header__decor-square--second"
      size="large"
      color="orange"
    />
    <SquareDecor 
      class="header__decor-square header__decor-square--third"
      size="large"
      color="yellow"
    />
    <SquareDecor 
      class="header__decor-square header__decor-square--fourth"
      size="medium"
      color="yellow"
    />
    <SquareDecor 
      class="header__decor-square header__decor-square--fifth"
      size="little"
      color="yellow"
    />
    <div class="header__content-box">
      <h1 class="header__title">Love Your<br>Pet More</h1>
      <p class="header__text">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
      <button class="header__btn header__btn--first">View Intro</button>
      <button class="header__btn header__btn--second">Explore Now</button>
    </div>
    <img 
      src="/PetWebsite/mainDog.png" 
      alt="dog" 
      class="header__img" 
    >
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue"
import SquareDecor from "./SquareDecor.vue"

export default {
  name: "CustomHeader",
  components: {
    NavMenu,
    SquareDecor,
  },
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  overflow: hidden;
  background-color: #FEE6B8;
  padding: 40px 130px;
  height: 735px;

  &__menu {
    position: relative;
    z-index: 100;
    margin-bottom: 110px;
  }

  &__content-box {
    width: 475px;
  }

  &__title {
    font-family: 'Times New Roman';
    font-size: 60px;
    font-weight: 600;
    color: #003459;
    margin-bottom: 40px;
  }

  &__text {
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 40px;
  }

  &__btn {
    height: 45px;
    width: 170px;
    border-radius: 30px;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }

    &--first {
      background-color: transparent;
      border: 2px solid black;
      transition: 0.5s all;
      margin-right: 10px;

      &:hover {
        border-color: #FFA276;
        color: #FFA276;
      }
    }

    &--second {
      background-color: #FFA276;
      color: white;
      transition: 0.5s all;

      &:hover {
        background-color: white;
        color: #FFA276;
      }
    }
  }

  &__img {
    position: absolute;
    bottom: 0;
    right: 100px;
    z-index: 20;
    width: 750px;
    height: 750px;
  }

  &__decor-square {
    position: absolute;

    &--first {
      top: -600px;
      left: -250px;
      transform: rotate(25deg);
      z-index: 1;
    }

    &--second {
      top: 30px;
      right: 150px;
      transform: rotate(10deg);
      z-index: 1;
    }

    &--third {
      top: 20px;
      right: 60px;
      transform: rotate(30deg);
      z-index: 2;
    }

    &--fourth {
      top: 220px;
      right: 740px;
      transform: rotate(70deg);
      z-index: 10;
    }

    &--fifth {
      top: 160px;
      right: 720px;
      transform: rotate(50deg);
      z-index: 10;
    }
  }
}
</style>
