<template>
  <div v-show="visible" :visible.sync="visible">
    <ul class="hamburger-list" v-bind="$attrs">
      <li><span>🍠</span></li>
      <li><span>🥯</span></li>
      <li><span>🥗</span></li>
      <li>
        <span>{{ $attrs.menu1 }}</span>
      </li>
      <li>
        <span>{{ $attrs.menu3 }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "hamburgerComp",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
    createMenu(val) {
      this.menu4 = val;
    },
  },
};
</script>

<style scoped></style>
