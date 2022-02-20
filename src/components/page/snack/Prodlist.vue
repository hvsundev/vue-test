<template>
  <ul class="prod_list">
    <li class="prod" v-for="item in prods" :key="item.no">
      <div class="prod_img">
        <input
          type="checkbox"
          :id="item.no"
          v-model="prodArr"
          :value="item.name"
          :class="checked(item.name)"
        />
        <label :for="item.no">
          <img :src="item.image_url" />
        </label>
        <p class="name">{{ item.name }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import product from "@/assets/product.json";

export default {
  data() {
    return {
      prodArr: [], // 선택한 선호상품 리스트

      // lacalStorage에 저장된 데이터
      totalinfo: JSON.parse(localStorage.getItem("totalinfo")) || "",
    };
  },
  mounted() {
    this.prodArr = this.totalinfo.product_list || [];
  },
  computed: {
    prods() {
      return product.map((items) => {
        return items;
      });
    },
  },
  watch: {
    // 상품을 선택할 때 마다 부모에게 prodArr 전달
    prodArr() {
      this.$emit("getProdArr", this.prodArr);
    },
  },
  methods: {
    // 선택된 상품에 checked 클래스 부여
    checked(target) {
      let index = this.prodArr.indexOf(target);
      return index >= 0 ? { checked: true } : { checked: false };
    },
  },
};
</script>

<style scoped>
.prod {
  position: relative;
  width: 150px;
  height: 200px;
  padding: 5px 10px 20px 0px;
  display: inline-grid;
}
.prod p {
  font-size: 14px;
  height: 40px;
  text-align: center;
}
.prod img {
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}
.prod input {
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 10px;
  transform: scale(1.5);
  cursor: pointer;
}

.prod_img {
  height: 150px;
  position: relative;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #c3c0a5;
}

input.checked {
  background-color: rgb(255, 242, 65);
}

input.checked + label > img {
  border: 4px solid rgb(255, 242, 65);
  box-sizing: border-box;
}
</style>
