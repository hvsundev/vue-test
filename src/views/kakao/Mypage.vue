<template>
  <article class="mypage-wrap">
    <div class="sub-menu-wrap">
      <ul class="sub-menu">
        <li>
          <router-link :to="`/mypage/seen`">최근 본</router-link>
        </li>
        <li>
          <router-link :to="`/mypage/activity`">내 활동</router-link>
        </li>
        <li>
          <router-link :to="`/mypage/basket`">장바구니</router-link>
        </li>
        <li>
          <router-link :to="`/mypage/order`">주문내역</router-link>
        </li>
      </ul>
    </div>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <c-prodlist :isInfinite="false" :prodlist="newProdlist" :col="3">
      <div slot="title" class="title">
        <h3 class="maintitle">잠깐만, 이 제품은 어때요?</h3>
      </div>
    </c-prodlist>
  </article>
</template>

<script>
import CProdlist from "@/components/page/kakao/prodlist";
import testdata from "@/store/testdata/prod-testdata";

export default {
  name: "mypage",
  components: { CProdlist },
  mixins: [testdata],
};
</script>

<style scoped></style>
