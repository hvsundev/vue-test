import snackSecondLayout from "@/layout/snack/snackSecondLayout";

export default [
  {
    path: '/snackSecond',
    component: snackSecondLayout,
    children: [
      {
        path: '/',
        redirect: '/snackSecond/oneStep',
      },
      {
        name: 'oneStep',
        path: '/snackSecond/oneStep',
        component: () => import('@/views/snack-second/OneStep')
      },
      {
        name: 'twoStep',
        path: '/snackSecond/twoStep',
        component: () => import('@/views/snack-second/TwoStep')
      },
      {
        name: 'result',
        path: '/snackSecond/result',
        component: () => import('@/views/snack-second/Result')
      }
    ]
  }
]
