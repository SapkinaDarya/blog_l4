<template>
  <div class="nav-menu">
    <div class="nav-menu__logo">
      <span class="nav-menu__logo--large">Doge</span><br>Pets for Best
    </div>
    <nav class="nav-menu__list">
      <RouterLink to="/PetWebsiteHomePage">
        <div class="nav-menu__items">Home</div>
      </RouterLink>
      <RouterLink to="#">
        <div class="nav-menu__items">Category</div>
      </RouterLink>
      <RouterLink to="#">
        <div class="nav-menu__items">About</div>
      </RouterLink>
      <RouterLink to="/PetWebsiteCreatePage">
        <div class="nav-menu__items">Create</div>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style lang="less" scoped>
.nav-menu {
  display: flex;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: left;
  grid-gap: 100px;
  padding-left: 20px;

  &__logo {
    text-align: center;
    color: #FFA171;
    font-weight: 600;
    font-size: 10px;

    &--large {
      font-family: "Lato";
      font-weight: 600;
      font-size: 25px;
    }
  }

  &__list {
    width: 400px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  &__items {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: .5s all;

    &:hover {
      color: #FFA171;
    }
  }
}
</style>
