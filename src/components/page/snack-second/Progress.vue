<template>
  <section class="progress">
    <div class="progress-box">
      <ul>
        <li v-for="item in stepList"
            :key="item.pathNm"
        >
          <p :class="{ active : item.pathNm === crtPage }">
            {{ item.label }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      stepList: [
        {
          label: '신청정보',
          pathNm: 'oneStep'
        },
        {
          label: '큐레이션 설정',
          pathNm: 'twoStep'
        },
        {
          label: '완료',
          pathNm: 'result'
        }
      ],
      crtPage: this.$route.name
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.setProgress()
    },
    setProgress() {
      console.log(this.$route.name);
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  border-bottom: 1px solid #d3d3d3;

  .progress-box {
    margin: 8px 0;
    padding: 15px 20px;
    letter-spacing: -0.5px;

    ul {
      display: flex;

      li {
        font-size: 15px;
        line-height: 17px;
        list-style: none;
        padding-right: 10px;
        color: #3c404b;

        p {
          display: inline;

          &.active {
            color: black;
            color: #7a72dd;
            font-weight: bold;
          }
        }

        &:after {
          content: '→';
          display: inline-block;
          padding-left: 5px;
          color: black;
        }
      }
    }
  }
}

</style>
