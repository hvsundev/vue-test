<template>
  <div class="prod-item"
       @click="$emit('updateSelectedItem', item.no)"
       :class="{ 'prod-item--active': selectedItem.includes(item.no) }"
  >
    <div class="prod-item__img">
      <img :src="item.image_url">
    </div>
    <div class="prod-item__text">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdItem",
  props: {
    item: {
      type: Object,
    },
    selectedItem: {
      type: Array
    }
  },
}
</script>

<style lang="scss" scoped>
.prod-item {
  width: 100px;
  margin-right: 5px;
  height: 140px;
  cursor: pointer;

  &--active {
    .prod-item__img {
      border: 3px solid #d3d3ff;
      box-sizing: border-box;
    }

    .prod-item__text {
      color: #7a72dd;
      font-weight: bold;
    }
  }

  &__img {
    padding: 5px;
    background-color: #fff;
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
    border-radius: 5px;

    img {
      width: 100%;
    }
  }

  &__text {
    overflow: hidden;
    letter-spacing: -0.5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 13px;
    -webkit-line-clamp: 1;
    color: #4f4f4f;
    max-height: 30px;
    text-align: center;
  }
}
</style>
