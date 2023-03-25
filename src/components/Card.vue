<template>
  <div class="card"
       :class="[{ 'card--active': isActive }, { 'card--resize': isResizable }]"
       ref="card"
       @resize="resizing(position)"
       @click="handleClick(idx)"
       @mouseover="activeResizer(idx)"
       @mouseleave="deactiveResizer(idx)"
  >
    <div class='resizers' v-if="isResizable">
      <div class='resizer top-left' @mouseover="setResizeValue('top-right')"></div>
      <div class='resizer top-right' @mouseover="setResizeValue('top-right')"></div>
      <div class='resizer bottom-left' @mouseover="setResizeValue('bottom-left')"></div>
      <div class='resizer bottom-right' @mouseover="setResizeValue('bottom-right')"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    idx: {
      type: Number
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isResizable: {
      type: Boolean,
      default: false,
    },
    vertical: { // 가로위치
      type: Number
    },
    horizontal: { // 세로위치
      type: Number
    },
    widthSize: {
      type: Number
    },
    heightSize: {
      type: Number
    },
    docWidth: {
      type: Number
    },
    docHeight: {
      type: Number
    }
  },
  data() {
    return {
      position: ''
    }
  },
  watch: {
    width(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
    height(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
  },
  mounted() {
    this.width = ((this.docWidth / 12) * this.widthSize - 16) + 'px'
    this.height = ((this.docHeight / 12) * this.heightSize - 16) + 'px'

    const target = this.$refs.card
    target.style.top = (this.docHeight / 12) * this.vertical + 'px'
    target.style.left = (this.docWidth / 12) * this.horizontal + 'px'
    target.style.width = this.width
    target.style.height = this.height
  },
  methods: {
    handleClick(idx) {
      this.$emit('click', idx)
    },
    activeResizer(idx) {
      this.$emit('mouseover', idx)
    },
    deactiveResizer(idx) {
      this.$emit('mouseleave', idx)
    },
    resizing(value) {
      console.log("resizing");
      this.$emit('resize', value)
    },
    setResizeValue(value) {
      // TODO: 여기 value는 object로 만들기
      this.position = value
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: absolute;
  background-color: white;
  margin: 8px;
  border: 3px solid #3c404b;
  border-radius: 10px;

  &--active {
    border-color: #1F9FFF;
  }

  &--resize {
    border-color: red;
  }

  .resizers {
    width: 100%;
    height: 100%;

    .resizer {
      width: 10px;
      height: 10px;
      background: white;
      border: 1px solid black;
      position: absolute;

      &.top-left {
        left: -5px;
        top: -5px;
        cursor: nwse-resize;
      }

      &.top-right {
        right: -5px;
        top: -5px;
        cursor: nesw-resize;
      }

      &.bottom-left {
        left: -5px;
        bottom: -5px;
        cursor: nesw-resize;
      }

      &.bottom-right {
        right: -5px;
        bottom: -5px;
        cursor: nwse-resize;
      }
    }
  }
}
</style>
