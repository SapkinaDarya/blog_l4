<template>
  <div class="pet-card">
    <div class="pet-card__content">
      <img 
        class="pet-card__image" 
        :src="pet.image"
        :alt="pet.name"
      />
      <div class="pet-card__text">
        <h2 class="pet-card__name">{{ pet.name }}</h2>
        <div class="pet-card__description">
          <span class="pet-card__sex">Gene:<strong>{{ pet.gender }}</strong></span>
          <span class="pet-card__age">Age:<strong>{{ pet.age }}</strong></span>
        </div>
        <span class="pet-card__price">{{ pet.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCard",
  props: {
    pet: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>

<style scoped lang="less">
.pet-card {

  &__content {
    display: flex;
    flex-direction: column;
    width: 262px;
    background-color: white;
    border-radius: 25px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__image {
    width: 246px;
    height: 240px;
    margin: 8px;
    border-radius: 25px;
  }

  &__text {
    margin-left: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-style: normal;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 7px;
  }

  &__description {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  &__sex {
    color: rgba(103, 116, 121, 1);
    margin-right: 10px;
  }

  &__age {
    color: rgba(103, 116, 121, 1);

    &:before {
      content: "•";
      color: rgba(103, 116, 121, 1);
      padding-right: 10px;
    }
  }

  &__price {
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
