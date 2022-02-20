<template>
  <div>
    <div class="legend-wrap">
      <div class="comp"></div>
      <div>완성</div>
      <div class="incomp"></div>
      <div>미완성</div>
    </div>
    <div class="btn-wrap">
      <button
        class="menu-btn"
        :class="item.isCompleted ? 'completed' : ''"
        v-for="(item, index) in testlist"
        :key="index"
        @click="moveTo(item.router)"
      >
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<script>
import common from "@/utils/common";

export default {
  name: "test",
  mixins: [common],
};
</script>
