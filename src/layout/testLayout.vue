<template>
  <div class="test-layout" :class="!$route.meta.header && 'is-hidden'">
    <TestHeader :is-hidden="!$route.meta.header" />
    <router-view></router-view>
  </div>
</template>

<script>
import TestHeader from "@/components/common/header";
import Header from "@/components/common/header";

export default {
  name: "testLayout",
  components: {
    Header,
    TestHeader,
  },
  methods: {
    init() {
      // console.log();
    }
  },
  mounted() {
    this.init()
  }
};
</script>
