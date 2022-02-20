<template>
  <div class="inner">
    <p class="test-title">flex</p>
    <div class="box-wrap">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>

    <p class="test-title">Grid</p>
    <div class="box-wrap-grid">
      <div class="box big"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "text",
};
</script>

<style lang="scss" scoped>
.box-wrap-grid {
  background-color: white;
  border: 1px solid #b9b9b9;
  height: 300px;
  width: 450px;
  display: grid;
  padding: 3px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  div {
    background-color: #e5e0ff;
    border: 1px solid #beb7e9;
    box-sizing: border-box;
    margin: 2px;

    &.big {
      grid-area: 1 / 1 / 3 / 3;
    }
  }
}

.box-wrap {
  border: 1px solid #b9b9b9;
  height: 100%;
  width: 600px;
  display: flex;
  margin: 15px 0 30px 0;
  padding: 3px;
  flex-wrap: wrap;
  background-color: white;

  .box {
    width: 100px;
    height: 100px;
    background-color: #e5e0ff;
    border: 1px solid #beb7e9;
    box-sizing: border-box;
    margin: 2px;
  }
}
</style>
