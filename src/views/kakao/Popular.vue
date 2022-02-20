<template>
  <article class="popular-wrap">
    <div class="notice">
      <p>인기 상품 기준</p>
      <span></span>
    </div>
    <div class="box-wrap">
      <c-box></c-box>
      <c-box></c-box>
      <c-box></c-box>
      <c-box></c-box>
      <c-box></c-box>
      <c-box></c-box>
    </div>
    <div class="box-wrap">
      <c-box class="big"></c-box>
      <c-box></c-box>
      <c-box></c-box>
    </div>
  </article>
</template>

<script>
import CBox from "@/components/page/kakao/box";

export default {
  name: "Popular",
  components: { CBox },
};
</script>

<style scoped></style>
