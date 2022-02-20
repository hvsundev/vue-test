<template>
  <div class="mypage-basket-wrap">
    <div class="basket-wrap" v-if="basketList.length > 0">
      <div class="progress-info-wrap">
        <div class="price-info">
          <strong> <span>{{ Number(13000).toLocaleString() }}</span>원 추가시 무료배송 </strong>
          <button>배송비 절약하기 ></button>
        </div>
        <div class="progress-bar">
          <progress :value="totalPrice" max="30000"></progress>
        </div>
      </div>
      <div class="basket-list-wrap">
        <div class="basket-delete-wrap">
          <div class="check-wrap">
            <input type="checkbox" id="all" />
            <label for="all">
              <span class="check-btn"></span>
            </label>
          </div>
          <div>선택삭제</div>
        </div>
        <ul class="basket-prodlist">
          <li class="prod">
            <input type="checkbox" />
            <label>
              <span class="check-btn"></span>
            </label>
            <img
              :src="`https://t1.daumcdn.net/friends/prod/product/20211209161253009_8809814920571_8809814920571_AW_00.jpg`"
            />
            <div class="prod-info">
              <p class="title">조르디 에어팟3 케이스</p>
              <p class="price">{{ Number(17000).toLocaleString() }}원</p>
              <div class="quantity">
                <button class="ico_friend minus"></button>
                <input type="number" value="2" @blur="focusBlur" />
                <button class="ico_friend plus"></button>
              </div>
            </div>
            <div class="delete-btn">
              <span class="ico_friend"></span>
            </div>
          </li>
          <li class="prod">
            <input type="checkbox" />
            <label>
              <span class="check-btn"></span>
            </label>
            <img
              :src="`https://t1.daumcdn.net/friends/prod/product/20211209161253009_8809814920571_8809814920571_AW_00.jpg`"
            />
            <div class="prod-info">
              <p class="title">조르디 에어팟3 케이스</p>
              <p class="price">{{ Number(17000).toLocaleString() }}원</p>
              <div class="quantity">
                <button class="ico_friend minus"></button>
                <input type="number" value="2" @blur="focusBlur" />
                <button class="ico_friend plus"></button>
              </div>
            </div>
            <div class="delete-btn">
              <span class="ico_friend"></span>
            </div>
          </li>
        </ul>
        <ul class="total-info">
          <li>
            <div>상품금액</div>
            <div>{{ Number(17000).toLocaleString() }}원</div>
          </li>
          <li>
            <div>배송비</div>
            <div>{{ Number(3000).toLocaleString() }}원</div>
          </li>
          <li class="total-price">
            <div>총 결제금액</div>
            <div>{{ Number(20000).toLocaleString() }}원</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- empty -->
    <div v-else class="basket-wrap-empty">
      <div class="contents">
        <img
          :src="`https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20220106/192724/assets/images/m960/ico_cart_empty.png`"
        />
        <p>
          아직 관심 상품이 없네요!<br />
          귀여운 프렌즈 상품을 추천드릴게요
        </p>
        <button>인기 상품 보기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basket",
  data() {
    return {
      basketList: ["1"],
      totalPrice: 13000,
    };
  },
  methods: {
    focusBlur() {
      console.log("포커스 아웃");
    },
  },
};
</script>

<style scoped></style>
