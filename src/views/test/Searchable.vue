<template>
  <div class="inner">
    <p class="test-title">Searchable Selectbox</p>
    <div class="sample-wrap">
      <div class="wms-search-wrap">
        <div class="search-bar">
          <w-input v-model="searchKeyword" placeholder="브랜드, 상품명 입력" />
        </div>
        <div class="search-category">
          <p>카테고리</p>
          <div class="select-input-wrap">
            <input
              v-model="lastKeyword"
              class="select-input"
              readonly
              @click="setFocusedSearchInput"
              @focus="setFocusedSearchInput"
              @blur="removeFocusedSearchInput"
            />
          </div>
          <div class="category-li-wrap" v-show="isFocusedSearchInput">
            <div class="search-input-wrap">
              <input
                v-show="true"
                ref="categotyInput"
                v-model="categoryKeyword"
                class="search-input"
                type="text"
                autocomplete="off"
                @input="submitAutoComplete"
                @focus="setFocusedSearchInput"
                @mousedown="handleMouseDown"
                @blur="removeFocusedSearchInput"
              />
            </div>
            <ul class="category-list">
              <li v-for="(item, index) in activeCategory" :key="index">
                <summary @mousedown="handleMouseDown">
                  <strong>{{ item.title }}</strong>
                </summary>
                <ul>
                  <li
                    v-for="(listItem, idx) in item.list"
                    :key="idx"
                    class="option"
                    @mousedown="handleMouseDown"
                    @click="setKeyword(listItem)"
                  >
                    - {{ listItem }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="button-wrap">
            <button class="reset-btn" @click="resetSearchKeyword">초기화</button>
            <button class="search-btn">조회하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {
      categoryKeyword: '',
      isFocusedSearchInput: false,
      searchKeyword: '',
      activeCategory: [],
      lastKeyword: '',
      category: [
        {
          title: '카테고리1',
          list: ['쿠키', '파이', '초콜릿류', '캔디류', '비스켓류', '젤리류', '견과류'],
        },
        {
          title: '카테고리2',
          list: ['생수', '스파클링'],
        },
        {
          title: '카테고리3',
          list: ['청량/탄산음료', '과즙음료', '에너지음료', '이온음료', '유산균음료', '건강음료'],
        },
      ],
    }
  },
  created() {
    this.resetDataForSearch()
  },
  methods: {
    // ========= 검색 페이지 시작
    async submitAutoComplete(e) {
      // 한국어는 커서를 변경하기 전에는 바로 반영되지않아서 이렇게 바인딩해야함
      this.categoryKeyword = e.target.value

      let tempList = []
      this.activeCategory = this.category
      await this.activeCategory.forEach((items, index) => {
        tempList.push({
          title: items.title,
          list: [],
        })
        items.list.forEach((item) => {
          if (item.indexOf(this.categoryKeyword) != -1) {
            tempList[index].list.push(item)
          }
        })
      })
      this.activeCategory = tempList
    },
    // [검색] 초기데이터 세팅
    resetDataForSearch() {
      this.activeCategory = this.category
    },
    // [검색] <li>에서 클릭한 요소 카테고리 검색어에 바인딩
    setKeyword(val) {
      this.lastKeyword = val
      this.categoryKeyword = ''
      this.isFocusedSearchInput = false
    },
    // [검색] 검색어, 카테고리 초기화
    resetSearchKeyword() {
      this.lastKeyword = ''
      this.searchKeyword = ''
    },
    setFocusedSearchInput() {
      this.activeCategory = this.category
      this.isFocusedSearchInput = true
      this.categoryKeyword = ''
      this.$refs.categotyInput.focus()
    },
    removeFocusedSearchInput() {
      this.isFocusedSearchInput = false
    },
    // [검색] @blur가 실행되는 것을 막음
    handleMouseDown(e) {
      e.preventDefault()
    },
    handleHistoryBack() {
      this.$router.go(-1)
    },
    // ======== 검색 페이지 끝
  },
}
</script>

<style lang="scss">
$wms-primary: #3285f4;
$wms-primary-dark: #2d78dc;

.sample-wrap {
  font-family: AppleSDGothicNeo;
  background-color: #565656;
  height: 100%;
  font-size: 15px;
  width: 400px;

  // 공통 시작
    .search-bar {
      display: flex;
      justify-content: space-between;

      .input {
        width: calc(100% - 50px);
        padding: 0;

        input {
          padding: 12px 0;
          width: 100%;
          border: 0;
        }
      }
    }

    .search-category {
      position: relative;
      height: 160px;
      background-color: #f3f4fa;

      p {
        font-size: 14px;
        color: #616161;
      }

      input {
        border-radius: 4px;
        height: 40px;
        width: 100%;

        &:focus {
          outline: none;
        }
      }

      .search-input-wrap {
        background-color: #fff;
        padding: 10px 12px;

        &.search-input {
          position: absolute;
          top: 63px;
          z-index: 999;
          margin: 5px;
        }

        input {
          border: 1px solid #dbdbdb;
          padding: 0 15px;
          max-width: calc(100% - 30px);
        }
      }

      .select-input-wrap {
        padding-top: 12px;
        width: 100%;

        input {
          border: 1px solid #bebebe;
          box-sizing: border-box;
          padding: 0 15px;
        }
      }

      .category-li-wrap {
        background-color: #fff;
        position: absolute;
        border: 1px solid #e1e1e1;
        font-size: 14px;
        width: 100%;

        ul.category-list {
          overflow-y: scroll;
          max-height: 300px;
        }

        summary {
          height: 35px;
          line-height: 35px;
          padding: 5px 15px;
        }

        .option {
          line-height: 35px;
          height: 35px;
          padding: 0 30px;
        }

        .option:hover {
          background-color: #72acea;
        }
      }

      .button-wrap {
        padding-top: 12px;

        button {
          border-radius: 4px;
          height: 40px;
          color: white;

          &.reset-btn {
            width: 27.5%;
            background-color: #949da9;
            margin-right: 2.5%;
          }

          &.search-btn {
            width: 70%;
            background-color: #ada3e9;
          }
        }
      }
    }
}
</style>
