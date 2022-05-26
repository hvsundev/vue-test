<template>
  <div class="inner">
    <p class="test-title">
      <button type="button" @click="showToast">토스트 띄우기</button>
      <input type="text" v-model="toastMsg">
    </p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      toastMsg: '이건 토스트 입니다.'
    }
  },
  methods: {
    showToast() {
      this.$_toast(this.toastMsg)
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    width: 120px;
    height: 50px;
    background-color: #7a72dd;
    border-radius: 10px;
    color: white;
    margin-right: 20px;
  }

  input {
    width: 400px;
    height: 40px;
    padding: 0 10px;
  }
</style>