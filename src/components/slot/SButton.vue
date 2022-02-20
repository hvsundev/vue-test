<template>
  <div>
    <p>top</p>
    <!-- 부모에서 정의한 '버튼'이 존재한다. -->
    <slot name="left"></slot>
    <slot name="right"></slot>
    <p>bottom</p>
  </div>
</template>

<script>
export default {
  name: "SButton",
};
</script>

<style scoped>
button[type="submit"] {
  width: 200px;
  background-color: #7b71b7;
}
</style>
