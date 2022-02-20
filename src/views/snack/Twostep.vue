<template>
  <div class="wrap">
    <header-vue></header-vue>
    <status-bar-vue></status-bar-vue>
    <div class="inner">
      <div class="select">
        <span>이용기간</span>
        <div>
          <input
            type="radio"
            name="g_period"
            v-model="period"
            value="6"
            id="period_6"
          />
          <label for="period_6">6개월</label>
          <input
            type="radio"
            name="g_period"
            v-model="period"
            value="12"
            id="period_12"
          />
          <label for="period_12">12개월</label>
          <input
            type="radio"
            name="g_period"
            v-model="period"
            value="24"
            id="period_24"
          />
          <label for="period_24">24개월</label>
        </div>
      </div>
      <div class="select">
        <span>1회 예산</span>
        <div>
          <select name="budget" v-model="budget">
            <option value="5">5만원</option>
            <option value="10">10만원</option>
            <option value="50">50만원</option>
          </select>
        </div>
      </div>
      <div class="select">
        <span>배송주기</span>
        <div>
          <input
            type="radio"
            name="g_delivery_cycle"
            v-model="delivery_cycle"
            value="1"
            id="cycle_1"
          />
          <label for="cycle_1">1주</label>
          <input
            type="radio"
            name="g_delivery_cycle"
            v-model="delivery_cycle"
            value="2"
            id="cycle_2"
          />
          <label for="cycle_2">2주</label>
        </div>
      </div>
      <div class="select">
        <span>구성선택</span>
        <div>
          <input
            type="checkbox"
            name="g_type"
            v-model="subArr"
            value="스낵"
            id="type_1"
          />
          <label for="type_1">스낵</label>
          <input
            type="checkbox"
            name="g_type"
            v-model="subArr"
            value="생수"
            id="type_2"
          />
          <label for="type_2">생수</label>
          <input
            type="checkbox"
            name="g_type"
            v-model="subArr"
            value="음료"
            id="type_3"
          />
          <label for="type_3">음료</label>

          <input
            type="checkbox"
            name="g_type"
            v-model="subArr"
            value="간편식"
            id="type_4"
          />
          <label for="type_4">간편식</label>
        </div>
      </div>
      <div>
        <span>선호 상품 선택</span>
        <prod-list-vue v-on:getProdArr="getProdArrUpdate"></prod-list-vue>
      </div>
      <button class="prevBtn" @click="prevStep()">이전단계</button>
      <button class="nextBtn" @click="nextStep()">다음단계</button>
    </div>
  </div>
</template>

<script>
import ProdListVue from "@/components/page/snack/Prodlist.vue";
import HeaderVue from "@/components/page/snack/Header.vue";
import StatusBarVue from "@/components/slot/StatusBar.vue";

export default {
  data() {
    return {
      // lacalStorage에 저장된 데이터
      userInfo: JSON.parse(localStorage.getItem("userinfo")) || "",
      totalinfo: JSON.parse(localStorage.getItem("totalinfo")) || "",

      // 각 항목의 기본값 설정
      default: {
        period: 6,
        budget: 5,
        delivery_cycle: 1,
      },

      // 선택정보
      period: this.period, // 이용기간
      budget: this.budget, // 1회 예산
      delivery_cycle: this.delivery_cycle, // 배송주기
      subArr: [], // 선택한 구성선택 리스트
      prodArr: [], // 선택한 선호상품 리스트
    };
  },
  mounted() {
    this.period = this.totalinfo.period || this.default.period;
    this.budget = this.totalinfo.budget || this.default.budget;
    this.delivery_cycle =
      this.totalinfo.delivery_cycle || this.default.delivery_cycle;
    this.subArr = this.totalinfo.type || [];
  },
  methods: {
    prevStep() {
      return this.$router.push("/onestep");
    },
    nextStep() {
      if (this.subArr.length === 0 || this.prodArr.length === 0) {
        alert("모든 항목은 1개 이상 선택해야합니다.");
      } else {
        // lacalStorage에 저장할 Object 변수 생성
        let totalinfo = Object.assign({}, this.userInfo);
        totalinfo.period = this.period;
        totalinfo.budget = this.budget;
        totalinfo.delivery_cycle = this.delivery_cycle;
        totalinfo.type = this.subArr;
        totalinfo.product_list = this.prodArr;

        localStorage.setItem("totalinfo", JSON.stringify(totalinfo));
        return this.$router.push("/result");
      }
    },
    // 자식컴포넌트인 ProdList에서 prodArr 받기
    getProdArrUpdate(data) {
      this.prodArr = data;
    },
  },
  components: {
    ProdListVue,
    HeaderVue,
    StatusBarVue,
  },
};
</script>

<style scoped>
input[type="radio"],
input[type="checkbox"] {
  margin-right: 5px;
}
label {
  margin-right: 10px;
}

select {
  width: 200px;
  height: 35px;
  padding: 0 5px;
}

.select:after {
  display: block;
  content: "";
  height: 1px;
  background-color: rgb(221, 221, 221);
  margin-bottom: 20px;
}

.select > div {
  margin-bottom: 20px;
  margin-top: 5px;
}

.select > span:before {
  content: "";
  display: inline-block;
  background-color: #c3c0a5;
  width: 6px;
  margin-right: 7px;
  height: 6px;
  vertical-align: middle;
}

.prevBtn,
.nextBtn {
  width: 130px;
  height: 50px;
  border: 2px solid rgb(255, 242, 65);
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: rgb(255 174 0);
  float: left;
  margin-bottom: 50px;
}
.prevBtn:hover,
.nextBtn:hover {
  border: 0;
  background-color: rgb(255, 242, 65);
  color: rgb(138, 55, 1);
}

.nextBtn {
  float: right;
}
</style>
