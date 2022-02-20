<template>
<div class="inner">
  <p class="test-title">Crawling</p>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      comments: {
        list: []
      }
    }
  },
  name: "Crawling",
  mounted() {
    this.crawling()
  },
  methods: {
    async crawling() {
      axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

      await axios.get("https://www.lotteglogis.com/home/reservation/tracking/linkView?InvNo=240037085890", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      })
      .then(res => {
        console.log(res);
      })
    }
  }
};
</script>

<style scoped>

</style>