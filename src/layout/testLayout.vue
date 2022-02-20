<template>
  <div class="test-layout">
    <TestHeader />
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
};
</script>
