import Vue from "vue";

Vue.filter("globalDateFormatFilter", (value) => {
  let year = value.getFullYear();
  let month = (value.getMonth() + 1).toString().padStart(2, "0");
  let date = value.getDate().toString().padStart(2, "0");
  let hour = value.getHours().toString().padStart(2, "0");
  let minute = value.getMinutes().toString().padStart(2, "0");
  let seconds = value.getSeconds().toString().padStart(2, "0");

  let dateArr = [year, month, date];
  let timeArr = [hour, minute, seconds];

  return dateArr.join("-") + " " + timeArr.join(":");
});
