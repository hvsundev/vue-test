export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      // 모두 조회해서 해당하는 componentName이 있는지 찾는다.
      // 부모가 존재햐고 현재의 name이 받아온 componentName과 다른 경우
      while (parent && name !== componentName) {
        parent = parent.$parent;

        // 부모가 있으면 조회하고 아니면 나옴
        // 부모가 없다 == 더 이상 조회할 부모가 없다
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      // 이게 끝나면 name에는 찾은 컴포넌트의 이름이 들어있음.
      // parent에도 해당 parent가 들어있음.

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
  },
};
