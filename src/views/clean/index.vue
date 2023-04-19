<template>
  <section class="clean-main-wrap">
    <div class="inner">
      <p class="title">
        사무실 정기청소 서비스<br>
        <span style="color: #9e9e9e">상쾌한 업무의 시작을 위해</span>
      </p>
      <div class="login-info-wrap">
        <div>
          <input type="text" placeholder="사번" />
          <input type="text" style="margin-top: 8px;" placeholder="비밀번호" />
          <div class="login-btn-wrap row space-between">
            <c-checkbox v-model="isAutoLoginSelected">
              <template slot="label">자동 로그인 {{ isAutoLoginSelected }}</template>
            </c-checkbox>
            <p>비밀번호 초기화</p>
          </div>
          <div>
            <c-button>로그인</c-button>
            <c-button style="margin-top: 24px;">사용자 등록</c-button>
          </div>
        </div>
        <div class="main-background-wrap">
          <div class="main-background" />
          <div class="logo-ci" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CButton from "@/components/page/clean/cleanButton";
import CCheckbox from "@/components/page/clean/CleanCheckbox";

export default {
  name: "index",
  components: { CButton, CCheckbox },
  data() {
    return {
      isAutoLoginSelected: false
    };
  },
  methods: {
  }
};
</script>

<style scoped>

</style>
