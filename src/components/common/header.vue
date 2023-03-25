<template>
  <ul v-if="!isHidden" id="common-header" :class="!isHidden && 'is-hidden'">
    <li class="home-btn" @click="moveTo('/')">
      <p><span>🏠</span>Home</p>
    </li>
    <li class="home-btn" @click="moveTo('/test')">
      <p><span>🥞</span>Function</p>
    </li>
    <li class="home-btn" @click="moveTo('/kakao')">
      <p><span>🧸</span>Clone Coding</p>
    </li>
    <li class="home-btn" @click="moveTo('/snack24')">
      <p><span>🧀</span>Test</p>
    </li>
  </ul>
</template>

<script>
import common from "@/utils/common";

export default {
  name: "header",
  props: {
    isHidden: {
      type: Boolean,
    },
  },
  mixins: [common],
};
</script>
