<template>
  <section class="one-step">
    <div class="inner">
      <article class="snack-form">
        <div class="input-wrap">
          <span>고객사명(회사명)</span>
          <input type="text" v-model="formData.company_name">
        </div>
        <div class="input-wrap">
          <span>신청자명</span>
          <input type="text" v-model="formData.name">
        </div>
        <div class="input-wrap email">
          <span>이메일</span>
          <input type="text" v-model="formData.email">
          <span class="at">@</span>
          <input type="text" v-model="formData.at">
          <select>
            <option>직접입력</option>
            <option>kakao.com</option>
            <option>naver.com</option>
            <option>google.com</option>
          </select>
        </div>
        <div class="input-wrap">
          <span>핸드폰번호</span>
          <input type="number" v-model="formData.phone" maxlength="13">
        </div>
        <div class="input-wrap address">
          <span>주소</span>
          <input type="text" v-model="formData.address" readonly>
          <button @click="showModal">주소찾기</button>
        </div>
        <div class="input-wrap">
          <span>주소상세</span>
          <input type="text" v-model="formData.address_detail">
        </div>
      </article>
      <div class="button-wrap">
        <button @click="handleMove">다음단계</button>
      </div>
    </div>

    <!-- 주소찾기 모달 -->
    <div class="modal" v-show="isShowModal" @click.self="closeModal">
      <div class="modal__contents">
        <div ref="embed"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OneStep",
  data() {
    return {
      isShowModal: false,

      formData: {
        company_name: '',
        name: '',
        email: '',
        at: '',
        phone: '',
        address: '',
        address_detail: ''
      },
    }
  },
  mounted() {
    this.modalSetting()
  },
  methods: {
    handleMove() {
      this.$router.push('/snackSecond/twoStep')
    },
    showModal() {
      this.isShowModal = true
    },
    closeModal() {
      this.isShowModal = false
    },
    modalSetting() {
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

          this.formData.address = fullRoadAddr;

          this.isShowModal = false; // 모달 종료
          this.modalSetting()
        },
      }).embed(this.$refs.embed);
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 100%;

  &__contents {
    height: 455px;
    padding-top: 5px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 5px 10px 10px 1px rgba(143, 143, 143, 0.1);
  }
}

.one-step {
  letter-spacing: -0.5px;

  .input-wrap {
    display: flex;
    align-items: center;
    padding-bottom: 15px;

    input {
      width: 327px;
      outline: none;
      border: 0;
      border-bottom: 1px solid darkgray;
      height: 25px;
      padding: 0 5px;
    }

    span {
      display: inline-block;
      width: 120px;
    }

    &.email {
      input {
        width: 100px;
      }

      select {
        margin-left: 8px;
        width: 80px;
        height: 27px;
        padding: 0 10px;
        border: 1px solid darkgray;
        border-radius: 3px;
      }

      .at {
        width: 15px;
        margin: 0 7px;
      }
    }

    &.address {
      input {
        width: 245px;
      }

      button {
        margin-left: 8px;
        height: 27px;
        padding: 0 13px;
        border: 1px solid darkgray;
        border-radius: 3px;
      }
    }
  }

  .button-wrap {
    display: flex;
    justify-content: flex-end;

    button {
      border: 1px solid  #d3d3d3;
      height: 40px;
      padding: 0 20px;
      border-radius: 8px;
    }
  }
}
</style>
