import cleanLayout from "@/layout/cleanLayout";

export default [
  {
    path: "/clean/:*",
    component: cleanLayout,
    children: [
      {
        path: "/clean",
        component: () => import("@/views/clean/index.vue"),
      },
    ],
  },
];
