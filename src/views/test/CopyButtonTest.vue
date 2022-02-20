<template>
  <div class="copybutton-test">
    <div class="inner">
      <p class="test-title">Copy Button</p>
      <div class="search-wrap">
        <div class="search-box">
          <input
            ref="target"
            v-model="keyword"
            placeholder="복사할 텍스트를 입력하세요."
          />
          <span class="copy" @click="copyKeyword">📋️️</span>
        </div>
        <div class="search-box">
          <input
            ref="pasteTarget"
            v-model="pastedKeyword"
            placeholder="오른쪽 버튼으로 붙여넣어보세요."
          />
          <span class="copy" @click="pasteKeyword">📋️️</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Debounce",
  data() {
    return {
      keyword: "버튼을 눌러보세요.",
      pastedKeyword: "",
    };
  },
  methods: {
    // 복사하기
    copyKeyword() {
      this.$refs.target.select();
      document.execCommand("copy");
    },
    // 붙여넣기
    pasteKeyword() {
      navigator.clipboard.readText().then((text) => {
        navigator.clipboard.writeText(text);
        this.pastedKeyword = text;
      });
    },
  },
};
</script>
