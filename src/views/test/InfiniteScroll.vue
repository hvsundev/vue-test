<template>
  <div class="inner">
    <div class="iamtop row">
      <p class="active">청소 일정/현황</p>
      <p>점검 사항 / 추가 요청 내역</p>
    </div>
    <div class="manager-list-wrap row">
      <div class="datepicker">
        <ul class="row">
          <li v-for="(item, idx) in showList" :key="idx">
            <button @click="scrollTo(idx)">
              {{ idx }}
            </button>
          </li>
        </ul>
      </div>
      <div class="manager-list" id="manager-list">
        <ul>
          <ol v-for="(item, idx) in showList" :key="idx" :id="`scroll-${idx}`">
            <div class="date">{{ item.date }} | {{ idx }}</div>
            <div class="manager-info">{{ item.info.name }}</div>
          </ol>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollTo",
  data() {
    return {
      showList: [],
      lists: [
        {
          date: '2022.02.21',
          complete: 'P',
          info: {
            name: '선희빈',
            time: ['10:30', '12:30', '15:00', '20:00'],
          }
        },
        {
          date: '2022.02.20',
          complete: 'Y',
          info: {
            name: '선희빈',
            time: ['10:30', '12:30', '15:00', '20:00'],
          }
        },
        {
          date: '2022.02.19',
          complete: 'N',
          info: {
            name: '선희빈',
            time: ['10:30', '12:30', '15:00', '20:00'],
          }
        },
        {
          date: '2022.02.18',
          complete: 'Y',
          info: {
            name: '선희빈',
            time: ['10:30', '12:30', '15:00', '20:00'],
          }
        },
        {
          date: '2022.02.17',
          complete: 'Y',
          info: {
            name: '선희빈',
            time: ['10:30', '12:30', '15:00', '20:00'],
          }
        },
        {
          date: '2022.02.16',
          complete: 'Y',
          info: {
            name: '선희빈',
            time: ['10:30', '12:30', '15:00', '20:00'],
          }
        },
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.addListItem)
  },
  mounted() {
    this.showList = Object.assign([], this.lists)
  },
  methods: {
    scrollTo(idx) {
      let location = document.getElementById('scroll-' + idx).offsetTop;
      let menuHeight = document.querySelector(".datepicker").offsetTop;
      window.scrollTo( { top: location - menuHeight, behavior: 'smooth' })
    },
    addListItem() {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight
      && this.showList.length < 20) {
        console.log("바닥이다옹");
        this.showList.push(...this.lists)
        console.log(this.showList);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.inner {
  margin: 0 70px;
  padding-top: 100px;
}

::-webkit-scrollbar {
  display: none;
}

.iamtop {
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: #f5f5f5;

  p {
    width: 195px;
    font-size: 16px;
    letter-spacing: -0.5px;
    border-bottom: 2px solid black;
    text-align: center;
    height: 39px;
    color: #333333;

    &.active {
      border-bottom: 4px solid black;
      color: black;
    }
  }
}

.manager-list-wrap {
  padding-top: 100px;

  &.row {
    align-items: flex-start;
  }

  .datepicker {
    border-radius: 10px;
    width: 250px;
    height: 300px;
    position: fixed;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px 2px rgb(182 192 211 / 20%);

    .row {
      flex-wrap: wrap;
    }

    li {
      line-height: 30px;
      font-size: 20px;
      width: 30px;
      height: 30px;
      text-align: center;
    }
  }

  .manager-list {
    margin-left: 300px;
    width: 600px;

    ol {
      margin-bottom: 20px;
      box-shadow: 0 2px 4px 2px rgb(182 192 211 / 20%);

      .date {
        color: #fff;
        line-height: 50px;
        height: 50px;
        padding-left: 20px;
        background-color: #7b71b7;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        font-weight: bold;
      }

      .manager-info {
        padding: 20px 20px;
        height: 200px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #fff;
      }
    }
  }
}
</style>