<template>
  <div class="footer">
    <div class="footer__register">
      <div class="footer__text"><span>Register Now So You Don't Miss Our Programs</span></div>
      <div class="footer__input-box">
        <input
          type="text"
          class="footer__input"
          placeholder="Enter your Email"
        >
        <button class="footer__btn">Subcribe Now</button>
      </div>
    </div>
    <div class="footer__nav-box">
      <nav class="footer__nav">
        <div class="footer__list">
          <RouterLink to="/PetWebsiteHomePage">
            <div class="footer__item">Home</div>
          </RouterLink>
          <RouterLink to="#">
            <div class="footer__item">Category</div>
          </RouterLink>
          <RouterLink to="#">
            <div class="footer__item">About</div>
          </RouterLink>
          <RouterLink to="/PetWebsiteCreatePage">
            <div class="footer__item">Create</div>
          </RouterLink>
        </div>
      </nav>
      <div class="footer__icons">
        <RouterLink to="#" class="footer__icon">
          <img src="/PetWebsite/facebook.svg" alt="facebook">
        </RouterLink>
        <RouterLink to="#" class="footer__icon">
          <img src="/PetWebsite/twitter.svg" alt="twitter">
        </RouterLink>
        <RouterLink to="#" class="footer__icon">
          <img src="/PetWebsite/instagram.svg" alt="instagram">
        </RouterLink>
        <RouterLink to="#" class="footer__icon">
          <img src="/PetWebsite/youtube.svg" alt="youtube">
        </RouterLink>
      </div>
    </div>
    <hr class="footer__line">
    <div class="footer__last">
      <div class="footer__c">
        <span>Ⓒ 2022 Monito. All rights reserved.</span>
      </div>
      <div class="footer__serv-and-privacy">
        <div class="footer__list-last">
          <RouterLink to="#">
            <div class="footer__items-last">Terms of Service</div>
          </RouterLink>
          <RouterLink to="#">
            <div class="footer__items-last">Privacy Policy</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomFooter",
}
</script>

<style lang="less" scoped>
.footer {
  height: 450px; 
  background-color: #FDEFD5;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 76px 121px 100px;

  &__register {
    background-color: #FFA276;
    width: 100%;
    border-radius: 20px;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  &__text {
    color: white;
    font-size: 30px;
    font-weight: 600;
    width: 500px;
    line-height: 1.5;
  }

  &__input-box {
    width: 711px;
    height: 70px;
    background-color: white;
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
  }

  &__input {
    width: 509px;
    height: 45px;
    background-color: transparent;
    border-radius: 15px;
    border: 1px solid #FFA276;
    padding-left: 20px;
    outline: none;
  }

  &__btn {
    height: 45px;
    width: 162px;
    border-radius: 15px;
    background-color: #FFA276;
    border: none;
    color: white;
    transition: 0.5s all;

    &:hover {
      background-color: #ff905d;
      cursor: pointer;
    }
  }

  &__nav-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  &__list {
    list-style: none;
    width: 425px;
    display: flex;
    justify-content: space-between;
  }

  &__item {
    font-weight: 600;
    text-decoration: none;
    color: black;
    transition: 0.5s all;

    &:hover {
      color: #ff905d;
    }
  }

  &__icon {
    margin-right: 50px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__line {
    color: grey;
    margin-bottom: 40px;
  }

  &__last {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__c {
    color: gray;
    font-weight: 600;
  }

  &__list-last {
    list-style: none;
    width: 300px;
    display: flex;
    justify-content: space-between;
  }

  &__items-last {
    text-decoration: none;
    color: gray;
    font-weight: 600;
    transition: 0.5s all;

    &:hover {
      color: #ff905d;
    }
  }
}
</style>
