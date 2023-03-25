<template>
  <section class="dashboard">
    <article class="board">
      <div ref="box1" class="board__box">1</div>
      <div ref="box2" class="board__box">2</div>
    </article>
    <div class="container">
      <ul class="drag-sort-enable">
        <li class="menu">Application</li>
        <li class="menu">Blank</li>
        <li class="menu">Class</li>
        <li class="menu">Data</li>
        <li class="menu">Element</li>
      </ul>
    </div>
  </section>
</template>

<script>
// const googleSpreadsheet = require('google-spreadsheet')
// const gs_creds = require('')
// const doc = new googleSpreadsheet('')

export default {
  name: "KpiDashboard",
  data() {
    return {
      docWidth: document.body.offsetWidth
    }
  },

  mounted() {
    document.body.addEventListener('mousedown', function () {
      //현제 포인터 x y 좌표 저장
    })

    document.body.addEventListener('mousemove', function () {
      // 이동 하는 마우스 좌표 확인
      // 이동하는 좌표 - 최초 저장 된 포인터 좌표 > 길이/12 보다 클 때 이동
    })
    // document.body.addEventListener('resize', this.calculator)
    // this.docWidth = document.body.offsetWidth
    // const target = this.$refs.box1
    // target.style.width = (this.docWidth / 12) + 'px'
    //
    // this.enableDragSort('drag-sort-enable')
    //
    // // document.getElementsByClassName('menu').
    //
    // let list = []
    // const div1 = {
    //   width: 100,
    //   height: 100,
    //   x: 70,
    //   y: 80
    // }
    // const div2 = {
    //   width: 100,
    //   height: 100,
    //   x: 140,
    //   y: 160
    // }
    // list.push(div1)
    // list.push(div2)
    //
    // document.body.ondragstart = function() {
    //   return false;
    // };
  },
  methods: {
    calculator() {
      this.docWidth = document.body.offsetWidth
      this.$refs.box1.style.width = (this.docWidth / 12) + 'px'
    },
    enableDragSort(listClass) {
      const sortableLists = document.getElementsByClassName(listClass);
      Array.prototype.map.call(sortableLists, (list) => {
        this.enableDragList(list)
      });
    },
    enableDragList(list) {
      Array.prototype.map.call(list.children, (item) => {
        this.enableDragItem(item)
      });
    },
    enableDragItem(item) {
      item.setAttribute('draggable', true)
      item.ondrag = this.handleDrag;
      item.ondragend = this.handleDrop;
    },
    handleDrag(item) {
      const selectedItem = item.target,
          list = selectedItem.parentNode,
          x = event.clientX,
          y = event.clientY;

      selectedItem.classList.add('drag-sort-active');
      let swapItem = document.elementFromPoint(x, y) === null
          ? selectedItem
          : document.elementFromPoint(x, y);

      if (list === swapItem.parentNode) {
        swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
      }
    },
    handleDrop(item) {
      item.target.classList.remove('drag-sort-active');
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding-top: 100px;

  .board {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;

    &__box {
      display: inline-block;
      border: 1px solid #fd7f7f;
      box-sizing: border-box;
      resize: both;
      overflow: auto;
    }
  }
}

html,
body {
  height: 100%;
}

.container {
  margin: 20px auto 0;
  max-width: 500px;
  word-wrap:break-word
}

* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  margin: 5px 0;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  background-color: red;
  background: -webkit-linear-gradient(to right, #267871, #136a8a);
  background: linear-gradient(to right, #267871, #136a8a);
  color: #fff;
  list-style: none;
}

li.drag-sort-active {
  background: red;
  color: red;
  border: 1px solid #4ca1af;
}

span.drag-sort-active {
  background-color: red;
  color: transparent;
}
</style>
