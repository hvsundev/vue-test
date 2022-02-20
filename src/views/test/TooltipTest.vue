<template>
  <div id="tooltip-test">
    <div class="inner">
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
  </div>
</template>

<script>
export default {
  name: "tooltip",
  data() {
    return {
      isShowTooltip: true,
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
  },
};
</script>
