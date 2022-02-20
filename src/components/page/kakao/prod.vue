<template>
  <div class="c-prod-wrap" :class="col === 3 ? 'three' : ''">
    <div class="img">
      <img :src="this.prod.imageUrl" />
      <div class="soldout" v-if="this.prod.isSoldout"></div>
    </div>
    <div class="info-wrap">
      <p class="title">{{ this.prod.title }}</p>
      <p class="discount" v-if="this.prod.isDiscount">
        {{ this.prod.rate }}% {{ Number(this.prod.lowPrice).toLocaleString() }}원
      </p>
      <p class="price" :class="this.prod.isDiscount ? 'active' : ''">
        {{ Number(this.prod.price).toLocaleString() }}원
      </p>
    </div>
    <button class="basket" />
  </div>
</template>

<script>
export default {
  name: "CProd",
  props: {
    prod: {
      type: Object,
      default: null,
    },
    col: {
      type: Number,
      default: 2,
    },
  },
};
</script>
