<template>
  <div class="snack-second-container">
    <Progress></Progress>
    <router-view></router-view>
  </div>
</template>

<script>
import Progress from "@/components/page/snack-second/Progress";
export default {
  name: "snackSecondLayout",
  components: { Progress }
}
</script>

<style lang="scss" scoped>
.snack-second-container {
  background-color: white;
  width: 500px;
  height: 700px;
  border: 1px solid #d3d3d3;
  margin: 100px auto 0;
}
</style>
