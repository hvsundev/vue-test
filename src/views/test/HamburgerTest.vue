<template>
  <div class="inner">
    <p class="test-title">Hamburger</p>
    <a class="menu-open-button" @click.prevent="showCategory">🍔</a>
    <div>
      <transition name="modal-fade">
        <div class="cover" v-show="visible" @click="close" />
      </transition>
      <transition name="trans-category">
        <div
          class="category-wrap"
          v-if="visible"
          :class="visible === true ? 'active' : ''"
        >
          <div class="category">
            <div class="user-info">
              <p>로그인이 필요해요!</p>
              <button>비회원 주문조회 ></button>
            </div>
            <div class="menu-wrap">
              <div class="menu">장바구니 내역</div>
              <div class="menu item-line">주문·배송 내역</div>
              <c-accordian>
                <c-accordian-item :header="`캐릭터`" />
                <c-accordian-item class="item-line" :header="`카테고리`" />
              </c-accordian>
              <div class="menu">공지사항</div>
              <div class="menu item-line">고객센터</div>
              <div class="menu">기프트카드 조회·환불</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CAccordian from "@/components/page/kakao/Accordian";
import CAccordianItem from "@/components/page/kakao/AccordianItem";

export default {
  name: "Hamburger",
  components: { CAccordianItem, CAccordian },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showCategory() {
      this.visible = true;
      if (this.visible) {
        document.body.classList.add("not-scroll");
      }
    },
    close() {
      this.visible = false;
      document.body.classList.remove("not-scroll");
    },
  },
};
</script>

<style lang="scss">
.cover {
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.category-wrap {
  position: fixed;
  width: 400px;
  inset: 0px;
  z-index: 1000;

  .category {
    height: 100%;
    width: 400px;
    background-color: #fff;
    position: fixed;

    .user-info {
      display: flex;
      padding: 32px 24px 24px;
      align-items: center;
      justify-content: space-between;

      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .banner-wrap {
      display: block;
      overflow: hidden;
      margin: 0 16px;
      border-radius: 8px;

      img {
        width: 100%;
      }
    }

    .menu-wrap {
      padding-top: 16px;

      .menu {
        padding: 0 24px;
        font-size: 16px;
        line-height: 48px;
        cursor: pointer;
      }

      .item-line {
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #eff0f2;
      }
    }
  }
}

$icon-url: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20220106/192724/ico_friends.png") 0 0 no-repeat;
.c-accordian-item-wrap {
  cursor: pointer;

  .header-wrap {
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header {
      font-size: 16px;
      line-height: 48px;
      cursor: pointer;
    }

    .slide-btn {
      width: 16px;
      height: 15px;
      background: $icon-url;
      background-position: -360px 0;
      background-size: 700px 600px;

      &.active {
        background-position: -340px 0;
      }
    }
  }

  .sub-menu-wrap {

    .sub-menu {
      padding: 16px 12px 14px;

      li {
        width: 20%;
        display: inline-block;
        text-align: center;
        padding: 0 12px 22px;

        span {
          font-size: 12px;
          color: #747475;
          line-height: 25px;
          padding: 8px 2px 0;
        }

        img {
          width: 100%;
          border-radius: 100%;
        }
      }
    }
  }
}

</style>
