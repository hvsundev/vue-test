<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" v-model="checkValue" @change="handleChange" />
      <span class="checkbox-label">
        <slot name="label"></slot>
      </span>
    </label>
  </div>
</template>

<script>
import dispatch from "@/utils/dispatch";

export default {
  name: 'CCheckbox',
  mixins: [dispatch],
  data() {
    return {
      checkValue: false,
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'CCheckboxGroup') {
          parent = parent.$parent;
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this._checkboxGroup = parent;
          console.log("this._checkboxGroup: ", this._checkboxGroup.value)
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    getCheckbox() {
      return this.$refs.checkbox
    },
    handleChange(event) {
      this.$emit('change', event.target.checked, event);
      this.$nextTick(() => {
        if (this.isGroup) {
          console.log("방금 클릭한 것은 그룹!");
          console.log(this._checkboxGroup.value);
          this.dispatch('CCheckboxGroup', 'change', [
            this._checkboxGroup.value,
          ]);
        }
      });
    },
  },
};
</script>

<style scoped></style>
