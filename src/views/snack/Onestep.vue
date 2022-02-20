<template>
  <div class="wrap">
    <header-vue></header-vue>
    <status-bar-vue></status-bar-vue>
    <div class="inner">
      <div class="customer_info">
        <div>
          <span>고객사명(회사명)</span>
          <input v-model="company_name" type="text" />
          <span class="warning">{{ this.message.company_name }}</span>
        </div>
        <div>
          <span>신청자 명</span>
          <input v-model="name" type="text" />
          <span class="warning">{{ this.message.name }}</span>
        </div>
        <div>
          <span>핸드폰 번호</span>
          <input v-model="phone" type="text" />
          <span class="warning">{{ this.message.phone }}</span>
        </div>
        <div>
          <span>주소</span>
          <input id="address" type="text" :value="`${this.address}`" readonly />
          <span class="addressBtn" @click="showModal()">주소찾기</span>
          <span class="warning">{{ this.message.address }}</span>
        </div>
        <div>
          <span>주소상세</span>
          <input v-model="address_detail" type="text" />
          <span class="warning">{{ this.message.address_detail }}</span>
        </div>
        <button class="nextBtn" @click="nextStep()">다음단계</button>
      </div>
    </div>

    <!-- 주소찾기 모달 -->
    <div class="modal" v-show="is_show">
      <div class="modal_contents">
        <div class="model_cancel" @click="hiddenModal">×</div>
        <div ref="embed"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { validateCharByte, validateTel } from "@/utils/validation";

import HeaderVue from "@/components/page/snack/Header.vue";
import StatusBarVue from "@/components/slot/StatusBar.vue";

export default {
  data() {
    return {
      // 입력정보
      company_name: this.company_name,
      name: this.name,
      phone: this.phone,
      address: this.address,
      address_detail: this.address_detail,

      // 경고메세지
      message: {
        company_name: "",
        name: "",
        phone: "",
        address_detail: "",
      },

      // 유효성 체크 통과 여부
      validation: {
        company_name: false,
        name: false,
        phone: false,
        address: false,
        address_detail: false,
      },

      // lacalStorage에 저장된 데이터
      userInfo: JSON.parse(localStorage.getItem("userinfo")) || "",

      is_show: false, // 모달창 show 여부
    };
  },
  watch: {
    company_name(newVal) {
      if (this.isValidChar(newVal)) {
        this.message.company_name = "";
        this.validation.company_name = true;
      } else {
        this.validation.company_name = false;
      }
    },
    name(newVal) {
      if (this.isValidChar(newVal)) {
        this.message.name = "";
        this.validation.name = true;
      } else {
        this.validation.name = false;
      }
    },
    phone(newVal) {
      if (this.isValidTel(newVal)) {
        this.message.phone = "";
        this.validation.phone = true;
      } else {
        this.validation.phone = false;
      }
    },
    address(newVal) {
      if (this.isValidChar(newVal)) {
        this.message.address = "";
        this.validation.address = true;
      } else {
        this.validation.address = false;
      }
    },
    address_detail(newVal) {
      if (this.isValidChar(newVal)) {
        this.message.address_detail = "";
        this.validation.address_detail = true;
      } else {
        this.validation.address_detail = false;
      }
    },
  },
  methods: {
    nextStep() {
      let valid = this.validation;

      // 유효성 체크 후 경고메세지 띄우기
      if (!this.isValidChar(this.company_name)) {
        this.message.company_name = "2글자 이상 입력해주세요.";
      }
      if (!this.isValidChar(this.name)) {
        this.message.name = "2글자 이상 입력해주세요.";
      }
      if (!this.isValidTel(this.phone)) {
        this.message.phone = "010-1234-5678 형식으로 입력해주세요.";
      }
      if (!this.isValidChar(this.address)) {
        this.message.address = "주소를 입력해주세요.";
      }
      if (!this.isValidChar(this.address_detail)) {
        this.message.address_detail = "2글자 이상 입력해주세요.";
      }

      if (
        valid.company_name &&
        valid.name &&
        valid.phone &&
        valid.address &&
        valid.address_detail
      ) {
        // lacalStorage에 저장할 Object 변수 생성
        let userinfo = {};
        userinfo.company_name = this.company_name;
        userinfo.name = this.name;
        userinfo.phone = this.phone;
        userinfo.address = this.address;
        userinfo.address_detail = this.address_detail;

        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        return this.$router.push("/twostep");
      }
    },
    // 문자열 개수 검사
    isValidChar(char) {
      char = char == undefined ? "" : char;
      return validateCharByte(char);
    },
    // 핸드폰 번호 정규식 검사
    isValidTel(char) {
      return validateTel(char);
    },
    // 모달 관련
    showModal() {
      this.is_show = true;
    },
    hiddenModal() {
      this.is_show = false;
    },
    showApi() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = "";

          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }

          if (data.buildingName !== "" && data.apartment === "Y") {
            extraRoadAddr +=
              extraRoadAddr !== ""
                ? ", " + data.buildingName
                : data.buildingName;
          }

          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }

          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }

          this.zip = data.zonecode;
          this.address = fullRoadAddr;

          this.is_show = false; // 모달 종료
          this.showApi();
        },
      }).embed(this.$refs.embed);
    },
  },
  mounted() {
    this.showApi();
    this.company_name = this.userInfo.company_name || "";
    this.name = this.userInfo.name || "";
    this.phone = this.userInfo.phone || "";
    this.address = this.userInfo.address || "";
    this.address_detail = this.userInfo.address_detail || "";
  },
  components: {
    HeaderVue,
    StatusBarVue,
  },
};
</script>

<style scoped>
.warning {
  font-size: 12px;
  color: red;
  margin-left: 10px;
}

input:focus {
  outline: none;
}

input[type="text"] {
  height: 26px;
  border: 0;
  border-bottom: 1px solid #cccccc;
  padding-left: 5px;
  margin-left: 10px;
  width: 250px;
  vertical-align: middle;
}

.customer_info > div > span:nth-child(1) {
  width: 135px;
  display: inline-block;
  vertical-align: middle;
}

.customer_info > div > span:nth-child(1):before {
  content: "";
  display: inline-block;
  background-color: #c3c0a5;
  width: 6px;
  margin-right: 7px;
  height: 6px;
  vertical-align: middle;
}

.customer_info > div {
  height: 30px;
  margin-bottom: 10px;
}

.nextBtn {
  margin-top: 20px;
  height: 50px;
  width: 130px;
  border: 2px solid rgb(255, 242, 65);
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: rgb(255 174 0);
}

.nextBtn:hover {
  border: 0;
  background-color: rgb(255, 242, 65);
  color: rgb(138, 55, 1);
}

.modal {
  width: 300px;
  height: 400px;
}

.addressBtn {
  font-size: 12px;
  padding: 4px 10px;
  margin-left: 10px;
  border-radius: 2px;
  cursor: pointer;
  vertical-align: middle;
  background-color: rgb(255, 242, 65);
  font-weight: 500;
}

.addressBtn:hover {
  background-color: rgb(255 208 77);
}

.modal {
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  display: flex;
  padding: 15px;
  width: 100%;
  height: 100%;
}

.modal_contents {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 5px 10px 10px 1px rgba(143, 143, 143, 0.1);
}

.model_cancel {
  cursor: pointer;
  text-align: right;
  padding: 13px 15px 7px 0px;
}

.popup-wrap {
  border: 1px solid #333;
}
</style>
