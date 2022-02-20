<template>
  <div class="container-snack">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/common/header";
export default {
  name: "snackLayout",
  components: { Header },
};
</script>

<style scoped></style>
