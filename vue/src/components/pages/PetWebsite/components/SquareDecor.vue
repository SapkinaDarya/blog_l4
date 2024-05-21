<template>
  <div class="square" :class="className"></div>
</template>

<script>
export default {
  name: "SquareDecor",
  props: {
    size: {
      type: String,
      default: "large"
    },
    color: {
      type: String,
      default: "beige"
    }
  },
  computed: {
    className () {
      return `square--${this.size} square--${this.color}`
    }
  }
}
</script>

<style lang="less" scoped>
.square {

  &--large {
    height: 630px;
    width: 640px;
    border-radius: 100px;
  }

  &--little {
    height: 15px;
    width: 15px;
    border-radius: 3px;
  }

  &--medium {
    height: 25px;
    width: 25px;
    border-radius: 5px;
  }

  &--beige {
    background-color: #FEF2DA;
  }

  &--orange {
    background-color: #FFA276;
  }

  &--yellow {
    background-color: #F7DCA7;
  }
}
</style>
