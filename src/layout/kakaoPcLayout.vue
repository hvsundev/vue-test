<template>
  <div class="kakao-pc">
    <div class="container-kakao-pc">
      <KakaoHeader></KakaoHeader>
      <KakaoMenu></KakaoMenu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import KakaoHeader from "@/layout/kakao/header";
import KakaoMenu from "@/layout/kakao/menu";

export default {
  name: "kakaoLayout",
  components: { KakaoHeader, KakaoMenu },
};
</script>

<style scoped></style>
