<template>
  <div class="debounce-test">
    <div class="inner">
      <p class="test-title">Debounce</p>
      <div class="search-wrap">
        <input
          v-model="keyword"
          @input="debounceInput"
          placeholder="검색어를 입력하세요."
        />
        <span class="reset" @click="resetKeyword">✖️️</span>
      </div>
      <p>
        <b>검색어: </b>
        {{ this.lastedKeyword === "" ? "검색 전입니다." : this.lastedKeyword }}
      </p>
    </div>
  </div>
</template>

<script>
import { debounce } from "vue-debounce";

export default {
  name: "Debounce",
  data() {
    return {
      keyword: "",
      lastedKeyword: "",
    };
  },
  methods: {
    resetKeyword() {
      this.keyword = "";
      this.lastedKeyword = "";
    },
    debounceInput: debounce(function (e) {
      this.keyword = e.target.value;
      this.lastedKeyword = this.keyword;
    }, 300),
  },
};
</script>
