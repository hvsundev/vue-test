<template>
  <div class="inner">
    <p class="test-title">Draggable</p>
    <div class="playground">
      <div v-for="(item, idx) in lists" :key="item.id">
        <div class="col"
             @drop.prevent="onDrop($event, idx)"
             @dragenter.prevent="onDragEnter($event, idx)"
             @dragover.prevent="onDragOver($event, idx)"
        >
          <div v-for="(numItem, idx) in item.numberList" :key="idx"
               class="box"
               @dragstart="startDrag($event, numItem, item.id)"
               draggable="true"
          >
            <p>{{ numItem.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "vue-debounce";

export default {
  name: "MoveTest",
  data() {
    return {
      lists: [
        {
          id: 1,
          numberList: [ { content: 1 }, { content: 2 } ]
        },
        {
          id: 2,
          numberList: [ {content: 3}, {content: 4}, {content: 5}, {content: 6} ]
        },
        {
          id: 3,
          numberList: [ {content: 7}, {content: 8}, {content: 9} ]
        }
      ],
      selectedCard: null
    };
  },
  methods: {
    startDrag(event, item) {
      console.log('startDrag');
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      this.selectedCard = item.content
      console.log(this.selectedCard);
    },
    onDrop(event, colNum) {
      console.log('onDrop');
      const selectedItem = this.selectedCard

      let targetIdx
      let targetItem
      this.lists.forEach((obj, index) => {
        obj.numberList.forEach((ob) => {
          if(ob.content === selectedItem) {
            targetIdx = index
            targetItem = ob
          }
        })
      })

      this.lists[colNum].numberList.push(targetItem)
      this.lists[targetIdx].numberList.splice(this.lists[targetIdx].numberList.indexOf(targetItem), 1)
    },
    onDragEnter: debounce(function (event, colNum) {
      console.log('onDragEnter: ', colNum);
      const selectedItem = this.selectedCard
      this.lists[colNum].numberList.push(selectedItem)
      console.log("enter: %d", selectedItem);
    }, 100),
    onDragOver: debounce(function (event) {
      console.log('onDragOver');
      const selectedItem = this.selectedCard
      console.log("over: %d", selectedItem);
    }, 100),
  },
};
</script>

<style lang="scss">
.playground {
  display: flex;

  .col {
    display: flex;
    height: 500px;
    width: 150px;
    background-color: #fff;
    border: 1px solid lightgrey;
    margin-left: 5px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    .box {
      width: 130px;
      height: 50px;
      background-color: #7b71b7;
      margin-top: 10px;
      border-radius: 5px;

      p {
        text-align: center;
        line-height: 50px;
        color: white;
      }
    }
  }
}
</style>
