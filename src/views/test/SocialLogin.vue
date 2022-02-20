<template>
  <div class="inner">
    <p class="test-title">Social Login</p>
    <div>
      URL: <a href="https://yoyostudy.tistory.com/m/43" target="_blank">
        구글로그인
      </a>
      <p>현재 로그인한 사람: {{ username }}</p>
    </div>
    <div class="button-wrap">
      <div class="g-signin2" data-onsuccess="onSignIn">구글</div>
      <div>카카오</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialLogin",
  data() {
    return {
      username: '없음',
    }
  }
};
</script>

<style lang="scss">
.button-wrap {
  padding-top: 10px;
  display: flex;
}
</style>