<template>
  <div class="statusBar">
    <div class="inner">
      <div class="progress">
        <span :class="{ active: this.$route.path === '/onestep' }">1단계</span>
        <span> > </span>
        <span :class="{ active: this.$route.path === '/twostep' }">2단계</span>
        <span> > </span>
        <span :class="{ active: this.$route.path === '/result' }"
          >신청완료</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.statusBar {
  height: 40px;
  background-color: rgb(247 247 247);
  margin-bottom: 20px;
}

span {
  font-weight: 400;
  color: #b0b0b0;
  margin-right: 5px;
}

.active {
  color: rgb(255 184 8);
  font-weight: 600;
}

.progress {
  padding-top: 7px;
}
</style>
