<template>
  <div class="inner">
    <p class="test-title">Checkbox</p>
    <p class="test-title">무슨 말인지 모르겠다 ^_^</p>
    <c-checkbox v-model="clickedAllWeekInfo" @change="handleWeekAllClick">
      <template slot="label">주중</template>
    </c-checkbox>
    <c-checkbox-group v-model="clickedWeekInfo" @change="handleWeekClick">
      <c-checkbox v-for="item in weekInfo" :key="item">
        <template slot="label">{{ item }}요일</template>
      </c-checkbox>
    </c-checkbox-group>
  </div>
</template>

<script>
import CCheckbox from '@/components/page/test/checkbox';
import CCheckboxGroup from '@/components/page/test/checkboxGroup';

export default {
  name: 'Checkbox',
  components: { CCheckbox, CCheckboxGroup },
  data() {
    return {
      weekInfo: ['월', '화', '수', '목', '금'],
      weekendInfo: ['토', '일'],
      clickedWeekInfo: [],
      clickedAllWeekInfo: true,
    };
  },
  methods: {
    handleWeekAllClick(val) {
      console.log('3 >>> ', val);
    },
    handleWeekClick(val) {
      console.log('1 >>> ', val);
    },
  },
};
</script>

<style scoped></style>
