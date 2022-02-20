<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import dispatch from "@/utils/dispatch";

export default {
  name: "CCheckboxGroup",
  componentName: 'CCheckboxGroup',
  mixins: [dispatch],
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      required: true,
    },
  },
  watch: {
    value(val) {
      console.log("value가 뭐야? >>> ", val);
      this.$emit("change", val);
    },
  },
};
</script>

<style scoped></style>
