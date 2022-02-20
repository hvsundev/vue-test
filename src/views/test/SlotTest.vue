<template>
  <div class="inner">
    <p class="test-title">Slot Test</p>
    <s-button>
      <button slot="left">왼쪽버튼</button>
      <button slot="right">오른쪽버튼</button>
    </s-button>
  </div>
</template>

<script>
import SButton from "@/components/slot/SButton.vue";
export default {
  name: "SlotTest",
  components() {
    SButton;
  },
};
</script>
