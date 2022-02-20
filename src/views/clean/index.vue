<template>
  <section class="clean-main-wrap">
    <div class="inner">
      <h1 class="logo">
        <img :src="require('@/assets/clean/logo.png')" alt="로고" />
      </h1>
      <p class="title">
        사무실 정기청소 서비스<br>
        <span style="color: #9e9e9e">상쾌한 업무의 시작을 위해</span>
      </p>
      <div class="login-info-wrap">
        <input type="text" placeholder="사번" />
        <input type="text" style="margin-top: 8px;" placeholder="비밀번호" />
        <div class="login-btn-wrap row space-between">
          <div>
            <input type="checkbox" />자동로그인
          </div>
          <p>비밀번호 초기화</p>
        </div>
      </div>
      <div>
        <clean-button>로그인</clean-button>
        <clean-button style="margin-top: 24px;">사용자 등록</clean-button>
      </div>
    </div>
  </section>
</template>

<script>
import CleanButton from "@/components/page/clean/cleanButton";

const pizza = {
  name: '페퍼로니'
}

export default {
  name: "index",
  components: { CleanButton },
  data() {
    return {
      pizza: {
        name: '치즈'
      }
    };
  },
  created() {
    this.printFunction()
    this.printArrow()
  },
  methods: {
    printFunction() {
      setTimeout(function() {
        console.log(this.pizza)
      }, 1000);
    },
    printArrow() {
      setTimeout(() => {
        console.log(this.pizza);
      }, 1000)
    }
  }
};
</script>

<style scoped>

</style>