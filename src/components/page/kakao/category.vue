<template>
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
            <accordian>
              <accordian-item :header="`캐릭터`" />
              <accordian-item class="item-line" :header="`카테고리`" />
            </accordian>
            <div class="menu">공지사항</div>
            <div class="menu item-line">고객센터</div>
            <div class="menu">기프트카드 조회·환불</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Accordian from "@/components/page/kakao/Accordian";
import AccordianItem from "@/components/page/kakao/AccordianItem";

export default {
  name: "category",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: { Accordian, AccordianItem },
  methods: {
    close() {
        document.body.classList.remove("not-scroll");
        this.$emit("update", false);
    },
  },
};
</script>
