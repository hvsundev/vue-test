<template>
  <div class="inner">
    <h1 class="test-title">Filter</h1>
    <div class="test-sub-wrap">
      <p class="test-sub-title">Component Option</p>
      <div>{{ date | dateFormatFilter }}</div>
    </div>
    <div class="test-sub-wrap">
      <p class="test-sub-title">Global</p>
      <div>{{ date | globalDateFormatFilter }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      date: new Date()
    };
  },
  filters: {
    dateFormatFilter(value) {
      let year = value.getFullYear();
      let month = (value.getMonth() + 1).toString().padStart(2, "0");
      let date = value.getDate().toString().padStart(2, "0");
      let hour = value.getHours().toString().padStart(2, "0");
      let minute = value.getMinutes().toString().padStart(2, "0");
      let seconds = value.getSeconds().toString().padStart(2, "0");

      let dateArr = [year, month, date]
      let timeArr = [hour, minute, seconds]

      return dateArr.join('-') + " " + timeArr.join(':')
    },
  }
};
</script>