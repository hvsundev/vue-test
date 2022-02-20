<template>
  <div class="kakao-menu">
    <ul>
      <li :class="this.$route.path === '/newprod' ? 'active' : ''">
        <router-link :to="`/newprod`">신규</router-link>
      </li>
      <li :class="this.$route.path === '/popular' ? 'active' : ''">
        <router-link :to="`/popular`">인기</router-link>
      </li>
      <li :class="this.$route.path.indexOf('mypage') > 0 ? 'active' : ''">
        <router-link :to="`/mypage`">마이</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menu",
};
</script>

<style scoped></style>
