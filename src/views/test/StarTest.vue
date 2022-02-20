<template>
  <div class="inner">
    <p class="test-title">Star Check</p>
    <div class="star-rating">
      <div
        class="star"
        v-for="index in 5"
        :key="index"
        @click="getActiveStar(index)"
      >
        <span v-if="index < score">🍎</span>
        <span v-if="index >= score">🍏</span>
      </div>
    </div>
    <hr />
    <p class="test-title">Checked</p>
    <div class="star-rating">
      <div class="star" v-for="index in 5" :key="index">
        <span v-if="index < score">🍎</span>
        <span v-if="index >= score">🍏</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarTest",
  data() {
    return {
      score: 0,
    };
  },
  methods: {
    getActiveStar(index) {
      this.score = index + 1;
      console.log("%s점", index);
    },
  },
};
</script>
