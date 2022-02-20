<template>
  <div class="container-kakao-mobile">
    <KakaoHeader></KakaoHeader>
    <KakaoMenu></KakaoMenu>
    <router-view></router-view>
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
