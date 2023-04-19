<template>
  <div id="test-area">
    <div class="inner">
      <div>
        <p class="test-title">Tooltip</p>
        <button class="tooltip-box" @click="showTooltip">
          <p>툴팁띄우기</p>
        </button>
        <div v-show="isShowTooltip" class="tooltip test-pos">
          <div class="close" @click="closeTooltip">✕</div>
          <p>
            이렇게 사용하면 됩니다!<br />
            또는 이렇게 사용하면 됩니다 :)
          </p>
        </div>
      </div>
      <div>
        <p class="test-title">Toast</p>
        <button class="tooltip-box" @click="showToast">
          토스트 띄우기
        </button>
        <div class="toast" v-show="isShowToast">
          <i>
            <img :src="require('@/assets/check-mark.png')">
          </i>
          <p class="toast__text">토스트 문구입니다. 두 줄 짜리 토스트 문구입니다. 토스트 문구입니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tooltip",
  data() {
    return {
      isShowTooltip: true,
      isShowToast: true,
    };
  },
  methods: {
    closeTooltip() {
      this.isShowTooltip = false;
    },
    showTooltip() {
      if (!this.isShowTooltip) {
        this.isShowTooltip = true;
      } else {
        this.isShowTooltip = false;
      }
    },
    showToast() {
      this.isShowToast = !this.isShowToast
    }
  },
};
</script>

<style lang="scss" scoped>
#test-area {
  .toast {
    position: fixed;
    display: flex;
    align-items: center;
    left: 10px;
    right: 10px;
    top: 350px;
    padding: 20px 24px;
    background-color: #2f2f2f;
    border-radius: 16px;

    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      line-height: 28px;

      > img {
        width: 100%;
        height: 100%;
      }
    }

    &__text {
      width: calc(100% - 30px);
      display: inline;
      color: #fff;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: -0.2px;
    }
  }
}
</style>
