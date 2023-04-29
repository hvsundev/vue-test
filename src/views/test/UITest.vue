<template>
  <div id="test-area">
    <div class="inner">
      <div class="test-content">
        <p class="test-title">Tooltip</p>
        <button @click="showTooltip">
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
      <div class="test-content">
        <p class="test-title">Toast</p>
        <button @click="showToast">
          토스트 띄우기
        </button>
        <div class="toast" :class="isShowToast && 'isShow'">
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
  name: "ui",
  data() {
    return {
      isShowTooltip: false,
      isShowToast: false,
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
  padding: 50px;

  .test {
    &-content {
      margin-bottom: 20px;
    }
  }

  button {
    background-color: #7a72dd;
    border-radius: 10px;
    color: white;
    width: 100px;
    height: 50px;
  }

  .tooltip {
      position: absolute;
      padding: 15px 20px;
      background-color: #71718a;
      color: #fff;
      font-size: 13px;
      line-height: 23px;
      border-radius: 8px;
      top: 19px;
      left: 240px;

      &.test-pos {
        width: 230px;

        &::after {
          position: absolute;
          content: '';
          width: 10px;
          height: 10px;
          background-color: #71718a;
          top: 50%;
          left: -5px;
        }
      }

      .close {
        position: absolute;
        width: 10px;
        height: 10px;
        right: 12px;
        top: 6px;
        cursor: pointer;

      }
    }

  .toast {
    position: fixed;
    display: flex;
    align-items: center;
    width: 300px;
    top: 350px;
    padding: 20px 24px;
    background-color: #2f2f2f;
    border-radius: 16px;
    opacity: 0;
    transition: opacity .3s;

    &.isShow {
      opacity: 1;
    }

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
