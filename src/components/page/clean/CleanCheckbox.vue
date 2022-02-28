<template>
  <div class="comp-clean-checkbox row">
    <input type="checkbox" v-model="checkValue">
    <span class="icon-checkbox" />
    <slot name="label">
    </slot>
  </div>
</template>

<script>
export default {
  name: "CCheckbox",
  value: {
    type: [Boolean],
    default: false
  },
  computed: {
    checkValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  }
}
</script>