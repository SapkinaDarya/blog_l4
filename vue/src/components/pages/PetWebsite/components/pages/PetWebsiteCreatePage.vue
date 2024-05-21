<template>
  <div class="create">
    <div class="create__container">
      <NavMenu class="create__nav"/>
      <div class="create__section">
        <div class="create__form">
          <label for="name" class="create__label">Name:</label>
          <input 
            v-model="formData.name"
            type="text"
            placeholder="Name"
            id="name"
            class="create__input"
          >
        </div>
        <div class="create__form">
          <label for="id" class="create__label">Id:</label>
          <input 
            v-model="formData.id"
            type="text"
            placeholder="Id"
            id="id"
            class="create__input"
          >
        </div>
        <div class="create__form">
          <label for="img" class="create__label">Image:</label>
          <input
            v-model="formData.image"
            type="url"
            placeholder="URL of image"
            id="img"
            class="create__input"
          >
        </div>
        <div class="create__form">
          <label for="gender" class="create__label">Gender:</label>
          <input 
            v-model="formData.gender" 
            type="text" 
            placeholder="Gender" 
            id="gender" 
            class="create__input"
          >
        </div>
        <div class="create__form">
          <label for="age" class="create__label">Age:</label>
          <input 
            v-model="formData.age" 
            type="text" 
            placeholder="Age" 
            id="age" 
            class="create__input"
          >
        </div>
        <div class="create__form">
          <label for="price" class="create__label">Price:</label>
          <input 
            v-model="formData.price" 
            type="text" 
            placeholder="Price" 
            id="price" 
            class="create__input"
          >
        </div>
        <button class="create__btn" @click="() => createPet()">Create</button>
      </div>
      <CustomFooter />
    </div>
  </div>
</template>

<script>
import NavMenu from "../NavMenu.vue"
import CustomFooter from "../CustomFooter.vue"
import { mapActions } from "vuex";

export default {
  name: "PetWebsiteCreatePage",
  components: {
    NavMenu,
    CustomFooter
  },
  data () {
    return {
      formData: {
        name: '',
        id: '',
        image: '',
        gender: '',
        age: '',
        price: '',
      }
    };
  },
  methods: {
    ...mapActions('PetWebsiteStore', [
      'addPet'
    ]),
    createPet () {
      const newPet = {
        name: this.formData.name,
        id: this.formData.id,
        image: this.formData.image,
        gender: this.formData.gender,
        age: this.formData.age,
        price: this.formData.price,
      };
      this.addPet(newPet);
      this.formData.name = '';
      this.formData.id = '';
      this.formData.image = '';
      this.formData.gender = '';
      this.formData.age = '';
      this.formData.price = '';
    }
  }
}
</script>

<style lang="less" scoped>
.create {
  background-color: #ffdea2;
  padding: 40px 130px 0;
  font-family: "Montserrat";

  &__container {
    max-width: 1520px;
    margin: 0 auto;
  }

  &__nav {
    margin-bottom: 50px;
  }

  &__section {
    border: 2px solid white;
    padding: 20px 0;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 50px;
  }

  &__label {
    margin-right: 10px;
    font-size: 14px;
  }

  &__input {
    margin-bottom: 20px;
    border: none;
    outline: none;
    border-radius: 20px;
    width: 515px;
    height: 40px;
    padding-left: 20px;
  }

  &__btn {
    height: 45px;
    width: 170px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #FFA276;
    color: white;
    transition: 0.5s all;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: #FFA276;
    }
  }
}
</style>
