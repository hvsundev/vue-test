<template>
  <div class="test-result">
    <header-vue></header-vue>
    <status-bar-vue></status-bar-vue>
    <div class="inner">
      <h2>신청 정보</h2>
      <div class="info">
        <div>
          <span class="title">고객사명(회사명)</span>
          <span class="contents">{{ this.totalinfo.company_name }}</span>
        </div>
        <div>
          <span class="title">신청자</span>
          <span class="contents">{{ this.totalinfo.name }}</span>
        </div>
        <div>
          <span class="title">연락처</span>
          <span class="contents">{{ this.totalinfo.phone }}</span>
        </div>
        <div>
          <span class="title">주소</span>
          <span class="contents">{{ this.totalinfo.address }}</span>
        </div>
        <div>
          <span class="title">상세주소</span>
          <span class="contents">{{ this.totalinfo.address_detail }}</span>
        </div>
        <div>
          <span class="title">이용기간</span>
          <span class="contents">{{ this.totalinfo.period }}개월</span>
        </div>
        <div>
          <span class="title">예산(1회)</span>
          <span class="contents">{{ this.totalinfo.budget }}만원</span>
        </div>
        <div>
          <span class="title">배송주기</span>
          <span class="contents">{{ this.totalinfo.delivery_cycle }}주</span>
        </div>
        <div>
          <span class="title">구성선택</span>
          <span class="contents">{{ this.totalinfo.type }}</span>
        </div>
        <div>
          <span class="title exclude">선호 상품</span>
          <span class="contents">{{ this.totalinfo.product_list }}</span>
        </div>
      </div>
      <button class="prevBtn" @click="prevStep()">이전단계</button>
      <button class="submitBtn" @click="submit()">제출</button>
    </div>
  </div>
</template>

<script>
import HeaderVue from "@/components/page/snack/Header.vue";
import StatusBarVue from "@/components/slot/StatusBar.vue";

export default {
  components: { HeaderVue, StatusBarVue },
  data() {
    return {
      totalinfo: JSON.parse(localStorage.getItem("totalinfo")) || null,
    };
  },
  mounted() {
    this.totalinfo.type = this.totalinfo.type.join(", ");
    this.totalinfo.product_list = this.totalinfo.product_list.join(", ");
  },
  methods: {
    prevStep() {
      return this.$router.push("/twostep");
    },
    submit() {
      console.log(JSON.stringify(this.totalinfo));
    },
  },
};
</script>

<style scoped>
.submitBtn {
  width: 130px;
  height: 50px;
  margin-bottom: 50px;
  background-color: rgb(255, 242, 65);
  border: 0;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  float: right;
}
.submitBtn:hover {
  background-color: rgb(252, 188, 50);
}
.prevBtn {
  width: 130px;
  height: 50px;
  border: 2px solid rgb(255, 242, 65);
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: rgb(255 174 0);
}

.prevBtn:hover {
  border: 0;
  background-color: rgb(255, 242, 65);
  color: rgb(138, 55, 1);
}

.title {
  width: 150px;
  display: inline-block;
  margin-bottom: 3px;
}

.title:before {
  content: "";
  display: inline-block;
  background-color: #c3c0a5;
  width: 6px;
  margin-right: 7px;
  height: 6px;
  vertical-align: middle;
}

.contents {
  font-weight: normal;
}

.info {
  margin: 15px 0 30px 0;
}

.info > div {
  margin-bottom: 13px;
}

.exclude {
  display: block;
}
</style>
