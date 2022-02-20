<template>
  <div class="inner">
    <p class="test-title">Hidden Text</p>
    <div class="row">
      <div class="hidden-text-wrap">
        <textarea v-model="koTargetText" />
        <div>
          <p class="title">✌🏻2줄로 줄여보자!</p>
          <p class="hidden-text-target row2">
            {{ koTargetText }}
          </p>
        </div>
        <div>
          <p class="title">🤟🏻3줄로 줄여보자!</p>
          <p class="hidden-text-target row3">
            {{ koTargetText }}
          </p>
        </div>
      </div>
      <div class="hidden-text-wrap" style="margin-left: 10px">
        <textarea v-model="enTargetText" />
        <div>
          <p class="title">✌🏻2줄로 줄여보자!</p>
          <p class="hidden-text-target row2">
            {{ enTargetText }}
          </p>
        </div>
        <div>
          <p class="title">🤟🏻3줄로 줄여보자!</p>
          <p class="hidden-text-target row3">
            {{ enTargetText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HiddenText',
  data() {
    return {
      koTargetText: '국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다.',
      enTargetText: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  }
}
</script>

<style lang="scss">
.hidden-text-wrap {
  width: 400px;
  letter-spacing: -0.5px;
  font-size: 16px;

  textarea {
    width: calc(100% - 20px);
    height: 100px;
    font-size: 16px;
    padding: 10px;
    resize: none;
  }

  div {
    padding: 20px 2px;
    border-bottom: 1px solid #e2e2e2;
    height: 100%;

    .title {
      font-weight: bold;
      padding-bottom: 3px;
    }
  }

  .hidden-text-target {
    width: 200px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    &.row2{
      -webkit-line-clamp: 2;
      max-height: 50px;
    }

    &.row3{
      -webkit-line-clamp: 3;
      max-height: 90px;
    }
  }
}
</style>