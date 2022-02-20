import TestLayout from "@/layout/testLayout";
import TestIndex from "@/views/TestIndex";

export default [
  {
    path: "/test",
    component: TestLayout,
    children: [
      {
        path: "/",
        // 랜딩페이지는 함수형으로 선언하지 않는다.
        component: TestIndex,
      },
      {
        path: "slot",
        component: () => import("@/views/test/SlotTest.vue"),
      },
      {
        path: "flexgrid",
        component: () => import("@/views/test/FlexGridTest.vue"),
      },
      {
        path: "star",
        component: () => import("@/views/test/StarTest.vue"),
      },
      {
        path: "tooltip",
        component: () => import("@/views/test/TooltipTest.vue"),
      },
      {
        path: "toggle",
        component: () => import("@/views/test/ToggleTest.vue"),
      },
      {
        path: "hamburger",
        component: () => import("@/views/test/HamburgerTest.vue"),
      },
      {
        path: "debounce",
        component: () => import("@/views/test/DebounceTest.vue"),
      },
      {
        path: "copybutton",
        component: () => import("@/views/test/CopyButtonTest.vue"),
      },
      {
        path: "excel",
        component: () => import("@/views/test/ExcelTest.vue"),
      },
      {
        path: "move",
        component: () => import("@/views/test/MoveTest.vue"),
      },
      {
        path: "fileupload",
        component: () => import("@/views/test/Fileupload"),
      },
      {
        path: "waypoint",
        component: () => import("@/views/test/Waypoint"),
      },
      {
        path: "highchart",
        component: () => import("@/views/test/Highchart"),
      },
      {
        path: "attrs",
        component: () => import("@/views/test/Attrs"),
      },
      {
        path: "checkbox",
        component: () => import("@/views/test/Checkbox"),
      },
      {
        path: "searchable",
        component: () => import("@/views/test/Searchable"),
      },
      {
        path: "comment",
        component: () => import("@/views/test/Comment"),
      },
      {
        path: "crawling",
        component: () => import("@/views/test/Crawling"),
      },
      {
        path: "sociallogin",
        component: () => import("@/views/test/SocialLogin"),
      },
      {
        path: "texteditor",
        component: () => import("@/views/test/TextEditor"),
      },
      {
        path: "hiddentext",
        component: () => import("@/views/test/HiddenText"),
      },
      {
        path: "filter",
        component: () => import("@/views/test/Filter"),
      },
    ],
  },
];
