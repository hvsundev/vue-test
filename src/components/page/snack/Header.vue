<template>
  <div class="snack-header">
    <div class="inner" style="margin-top: 0px">
      <img class="logo" :src="require(`@/assets/logo.png`)" />
      <h1>
        {{ this.title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  created() {
    if (this.$route.path === "/snack24" || this.$route.path === "/twostep") {
      this.title = "신청서 작성";
    } else {
      this.title = "신청완료";
    }
  },
};
</script>

<style>
.snack-header {
  padding-top: 5px;
  height: 80px;
  background-color: rgb(255, 242, 65);
}

.logo {
  width: 45px;
  height: 45px;
  float: left;
  margin-right: 13px;
  border-radius: 7px;
  padding-top: 2px;
}
</style>
