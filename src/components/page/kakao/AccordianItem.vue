<template>
  <div class="c-accordian-item-wrap">
    <div class="header-wrap" @click="isExpand">
      <div class="header">{{ header }}</div>
      <div class="slide-btn" :class="isAccordianShow ? 'active' : ''"></div>
    </div>

    <div class="sub-menu-wrap">
      <transition
        name="accordion-slide"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <ul v-show="isAccordianShow" class="sub-menu">
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209162852_4.jpg`"
            />
            <span>라이언</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209163143_18.jpg`"
            />
            <span>죠르디</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209162913_14.jpg`"
            />
            <span>어피치</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209162852_4.jpg`"
            />
            <span>라이언</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209163143_18.jpg`"
            />
            <span>죠르디</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209162913_14.jpg`"
            />
            <span>어피치</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209162852_4.jpg`"
            />
            <span>라이언</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209163143_18.jpg`"
            />
            <span>죠르디</span>
          </li>
          <li>
            <img
              :src="`https://t1.kakaocdn.net/friends/prod/character/character_20220209162913_14.jpg`"
            />
            <span>어피치</span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAccordianItem",
  data() {
    return {
      isAccordianShow: false,
    };
  },
  props: {
    header: {
      type: String,
      default: "",
    },
  },
  methods: {
    isExpand() {
      this.isAccordianShow = this.isAccordianShow ? false : true;
    },

    // 트랜지션 설정
    enter(element) {
      element.style.width = getComputedStyle(element).width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const height = getComputedStyle(element).height;
      element.style.width = "";
      element.style.position = "";
      element.style.visibility = "";
      element.style.height = 0;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    leave(element) {
      element.style.height = getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  },
};
</script>

<style scoped></style>
