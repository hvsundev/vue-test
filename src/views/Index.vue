<template>
  <div class="btn-wrap" style="width: 100%;">
    <button class="menu-btn completed" @click="moveTo('/snack24')">신청페이지</button>
    <button class="menu-btn completed" @click="moveTo('/kakao')">클론코딩</button>
    <button class="menu-btn completed" @click="moveTo('/test')">테스트</button>
  </div>
</template>

<script>
import common from "@/utils/common";

export default {
  name: "index",
  mixins: [common],
};
</script>
