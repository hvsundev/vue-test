<template>
  <div class="c-prodlist-wrap" :class="col === 3 ? 'three' : ''">
    <slot name="title"></slot>
    <div class="prodlist">
      <c-prod
        v-for="item in prodlist"
        :key="item.prodcode"
        :prod="item"
        :col="col"
      ></c-prod>
    </div>
    <slot name="more-btn"></slot>
  </div>
</template>

<script>
import CProd from "@/components/page/kakao/prod";

export default {
  name: "CProdlist",
  components: { CProd },
  props: {
    prodlist: {
      type: Array,
      default: null,
    },
    col: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style scoped></style>
