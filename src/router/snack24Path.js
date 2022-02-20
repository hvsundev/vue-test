import SnackLayout from "@/layout/snackLayout";

export default [
  {
    path: "/snack24",
    component: SnackLayout,
    children: [
      {
        name: "onestep",
        path: "/",
        component: () => import("@/views/snack/Onestep"),
      },
      {
        name: "twostep",
        path: "/twostep",
        component: () => import("@/views/snack/Twostep"),
      },
      {
        name: "result",
        path: "/result",
        component: () => import("@/views/snack/Result"),
      },
    ],
  },
];
