import KakaoLayout from "@/layout/kakaoPcLayout";

export default [
  {
    path: "/kakao",
    component: KakaoLayout,
    children: [
      {
        path: "/",
        redirect: "/newprod",
      },
      {
        path: "/newprod",
        component: () => import("@/views/kakao/NewProd"),
      },
      {
        path: "/popular",
        component: () => import("@/views/kakao/Popular"),
      },
      {
        path: "/mypage",
        component: () => import("@/views/kakao/Mypage"),
        redirect: "/mypage/basket",
        children: [
          {
            path: "/mypage/seen",
            component: () => import("@/views/kakao/Seen"),
          },
          {
            path: "/mypage/activity",
            component: () => import("@/views/kakao/Activity"),
          },
          {
            path: "/mypage/basket",
            component: () => import("@/views/kakao/Basket"),
          },
          {
            path: "/mypage/order",
            component: () => import("@/views/kakao/Order"),
          },
        ],
      },
    ],
  },
];
