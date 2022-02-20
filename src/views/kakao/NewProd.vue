<template>
  <article class="newprod-wrap">
    <c-banner></c-banner>
    <c-prodlist :isInfinite="false" :prodlist="rcmnProdlist">
      <div slot="title" class="title">
        <p class="subtitle">추천 신규 테마</p>
        <h3 class="maintitle">달력/다이어리</h3>
      </div>
      <button slot="more-btn" class="more-btn">더 보기</button>
    </c-prodlist>
    <c-prodlist :isInfinite="true" :prodlist="newProdlist">
      <div slot="title" class="title">
        <p class="subtitle">오늘 업데이트 했어요</p>
        <h3 class="maintitle">새로나온 친구들</h3>
      </div>
    </c-prodlist>
  </article>
</template>

<script>
import CProdlist from "@/components/page/kakao/prodlist";
import CBanner from "@/components/page/kakao/banner";

import testdata from "@/store/testdata/prod-testdata";

export default {
  name: "NewProd.vue",
  components: { CProdlist, CBanner },
  mixins: [testdata],
};
</script>

<style scoped></style>
