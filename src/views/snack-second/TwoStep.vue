<template>
  <section class="two-step">
    <div class="inner">
      <div class="input-wrap">
        <span>이용기간</span>
        <div class="radio-list" v-for="item in defaultData.period">
          <input :id="item" name="period" type="radio" v-model="form.period" :value="item">
          <label :for="item" :class="{ active: form.period === item }">{{ item }}개월</label>
        </div>
      </div>
      <div class="input-wrap">
        <span>1회 예산</span>
        <select v-model="form.budget">
          <option :value="item" v-for="item in defaultData.budget">{{ item }}만원</option>
        </select>
      </div>
      <div class="input-wrap">
        <span>배송주기</span>
        <div class="radio-list" v-for="item in defaultData.cycle">
          <input :id="item" name="period" type="radio" v-model="form.cycle" :value="item">
          <label :for="item" :class="{ active: form.cycle === item }">{{ item }}주</label>
        </div>
      </div>
      <div class="input-wrap">
        <span>구성선택</span>
        <div class="radio-list" v-for="item in defaultData.category">
          <input :id="item" name="period" type="checkbox" v-model="form.category" :value="item">
          <label :for="item" :class="{ active: form.category.includes(item) }">{{ item }}</label>
        </div>
      </div>
      <div class="prod-list">
        <prod-item v-for="item in prodList"
                   :item="item"
                   :selected-item="form.selectedItem"
                   @updateSelectedItem="updateSelectedItem"
        >
        </prod-item>
      </div>
      <div class="button-wrap">
        <button @click="handleMove('pre')">이전단계</button>
        <button @click="handleMove('next')">다음단계</button>
      </div>
    </div>
  </section>
</template>

<script>
import ProdItem from "@/components/page/snack-second/ProdItem";
import ProdList from "@/assets/product.json"

export default {
  name: "TwoStep",
  components: { ProdItem },
  mounted() {
    this.prodList = ProdList
  },
  data() {
    return {
      prodList: [],

      // default
      defaultData: {
        period: [6, 12, 24],
        budget: [5, 10, 50],
        cycle: [1, 2],
        category: ['스낵', '생수', '음료', '간편식']
      },

      form: {
        period: 6,
        budget: 5,
        cycle: 1,
        category: [],
        selectedItem: [],
      }
    }
  },
  methods: {
    updateSelectedItem(no) {
      if(this.form.selectedItem.includes(no)) {
        this.form.selectedItem.splice(this.form.selectedItem.indexOf(no), 1)
      } else {
        this.form.selectedItem.push(no)
      }
    },
    handleMove(type) {
      let path = type === 'pre' ? '/snackSecond/oneStep' : '/snackSecond/result'
      if(type === 'next') {
        if(this.form.category.length === 0 || this.form.selectedItem.length === 0) {
          alert('1개 이상 선택해야합니다.')
          return
        }
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.two-step {
  .prod-list {
    width: 100%;
    background-color: #f7f7f7;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 300px;
    padding: 16px;
    margin-bottom: 17px;
  }

  /* 스크롤바 설정*/
  .prod-list::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 설정*/
  .prod-list::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #7a72dd;
  }

  /* 스크롤바 뒷 배경 설정*/
  .prod-list::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  .input-wrap {
    display: flex;
    height: 60px;
    align-items: center;
    padding-bottom: 15px;

    span {
      display: inline-block;
      width: 70px;
    }

    select {
      width: 137px;
      height: 30px;
      padding: 0 10px;
      border: 1px solid darkgray;
      border-radius: 3px;
    }

    label {
      margin-left: -7px;
      margin-right: 7px;
      padding: 10px 15px;
      background-color: #f1f1f1;
      cursor: pointer;
      border-radius: 4px;

      &.active {
        color: #fff;
        background-color: #7a72dd;
      }
    }
  }

  .button-wrap {
    display: flex;
    justify-content: space-between;

    button {
      border: 1px solid #d3d3d3;
      height: 40px;
      padding: 0 20px;
      border-radius: 8px;
    }
  }
}
</style>
