const state = {
  isCategoryOpen: true,
};

const mutations = {
  SET_IS_CATEGORY_OREN: (state, isCategoryOpen) => {
    state.isCategoryOpen = isCategoryOpen;
  },
};

const actions = {
  isShowCategoryOpen({ commit }, isCategoryOpen) {
    commit("SET_IS_CATEGORY_OREN", isCategoryOpen);
  },
};

export default {
  state,
  mutations,
  actions,
};
