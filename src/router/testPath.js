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
        path: "interaction",
        component: () => import("@/views/test/Interaction.vue"),
        meta: {
          header: false
        }
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
        path: "highchart",
        component: () => import("@/views/test/Highchart"),
      },
      {
        path: "attrs",
        component: () => import("@/views/test/Attrs"),
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
      {
        path: "pdfpreview",
        component: () => import("@/views/test/PDFPreview"),
      },
      {
        path: "infinitescroll",
        component: () => import("@/views/test/InfiniteScroll"),
      },
      {
        path: "loading",
        component: () => import("@/views/test/Loading"),
      },
      {
        path: "toast",
        component: () => import("@/views/test/Toast"),
      },
      {
        path: "kpidashboard",
        component: () => import("@/views/test/KpiDashboard")
      },
      {
        path: "draganddrop",
        component: () => import("@/views/test/DragAndDrop")
      }
    ],
  },
];
