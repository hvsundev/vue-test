<template>
  <section class="dashboard">
    <article class="dashboard__box" ref="board">
      <Card
          ref="card1"
          :doc-width.sync="docWidth"
          :doc-height.sync="docHeight"
          :vertical="0"
          :horizontal="0"
          :width-size="4"
          :height-size="3"
          :idx="1"
          :is-active="active === 1"
          :is-resizable="resizable === 1"
          @resize="resizing"
          @mouseover="activeResizer"
          @mouseleave="deactiveResizer"
          @click="setActiveBox"
      ></Card>
      <Card
          ref="card2"
          :doc-width.sync="docWidth"
          :doc-height.sync="docHeight"
          :vertical="3"
          :horizontal="2"
          :width-size="2"
          :height-size="2"
          :idx="2"
          :is-active="active === 2"
          :is-resizable="resizable === 2"
          @mouseover="activeResizer"
          @mouseleave="deactiveResizer"
          @click="setActiveBox"
      ></Card>
      <Card
          ref="card3"
          :doc-width.sync="docWidth"
          :doc-height.sync="docHeight"
          :vertical="10"
          :horizontal="11"
          :width-size="1"
          :height-size="2"
          :idx="3"
          :is-active="active === 3"
          :is-resizable="resizable === 3"
          @mouseover="activeResizer"
          @mouseleave="deactiveResizer"
          @click="setActiveBox"
      ></Card>
    </article>

<!--    :is-active="active === 3"-->
<!--    :is-resizable="resizable === 3"-->
    <!--    <div id="ball" />-->
<!--    <img-->
<!--        src="https://en.js.cx/clipart/soccer-gate.svg"-->
<!--        id="gate"-->
<!--        class="droppable"-->
<!--    />-->
  </section>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "DragAndDrop",
  components: {Card},
  data() {
    return {
      active: 0,
      resizable: 0,
      docWidth: 0,
      docHeight: 0,
    }
  },
  created() {
    this.docWidth = (document.body.offsetWidth) * 0.7
    this.docHeight = (this.docWidth / 16) * 9
  },
  mounted() {
    const board = this.$refs.board
    board.style.width = this.docWidth + 'px'
    board.style.height = this.docHeight + 'px'

    window.addEventListener('resize', this.calculator)
  },
  methods: {
    setActiveBox(idx) {
      console.log(idx);
      this.active = idx
    },
    calculator() {

      this.docWidth = (this.docHeight / 9) * 16
      this.docHeight = (this.docWidth / 16) * 9

      const board = this.$refs.board
      board.style.width = this.docWidth + 'px'
      board.style.height = this.docHeight + 'px'
    },
    activeResizer(idx) {
      this.resizable = idx
    },
    deactiveResizer(idx) {
      this.resizable = 0
    },
    resizing(position) {
      console.log(position);
    },
    testDrag($event) {
      console.log($event);
    },
    init() {
      let ball = document.getElementById("ball");
      let currentDroppable = null;
      ball.onmousedown = function (event) {
        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;

        ball.style.position = "absolute";
        ball.style.zIndex = 1000;
        document.body.append(ball);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
          // ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
          // ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
          ball.style.left = pageX - shiftX + "px";
          ball.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);

          ball.hidden = true;
          let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
          ball.hidden = false;

          if (!elemBelow) return;

          let droppableBelow = elemBelow.closest(".droppable");
          console.log(droppableBelow);
          if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
              leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
              enterDroppable(currentDroppable);
            }
          }
        }

        document.addEventListener("mousemove", onMouseMove);
        ball.onmouseup = function () {
          document.removeEventListener("mousemove", onMouseMove);
          ball.onmouseup = null;
        };
      };

      function enterDroppable(elem) {
        elem.style.background = "pink";
      }

      function leaveDroppable(elem) {
        elem.style.background = "";
      }

      ball.ondragstart = function () {
        return false;
      };
    }
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding-top: 120px;

  &__box {
    border: 10px solid #3c404b;
    margin: 0 auto;
    position: relative;
    background-color: #3c404b;
    box-sizing: content-box;
    border-radius: 5px;
  }
}

#gate {
  cursor: pointer;
  margin-top: 121px;
  width: 83px;
  height: 46px;
  margin-left: 100px;
}

#ball {
  resize: both;
  width: 300px;
  height: 300px;
  overflow: auto;
  background-color: lightseagreen;
}

#ball2 {
  resize: both;
  width: 300px;
  height: 300px;
  overflow: auto;
  background-color: lightseagreen;
}

</style>
