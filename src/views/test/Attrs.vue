<template>
  <div class="inner">
    <p class="test-title">attrs</p>
    <c-hamburger
      :visible="true"
      class="hamburget-attrs"
      menu1="메뉴1"
      menu2="메뉴2"
      :menu3="createMenu('메뉴3')"
    ></c-hamburger>
  </div>
</template>

<script>
import CHamburger from "@/components/page/test/hamburger";

export default {
  name: "Attrs",
  data() {
    return {
      menu4: "",
    };
  },
  components: { CHamburger },
  methods: {
    createMenu(val) {
      return (this.menu3 = val);
    },
  },
};
</script>

<style scoped></style>
