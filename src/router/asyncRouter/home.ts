const asyncRouter: IMenubarRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: 'home'
    }
  }
]

export default asyncRouter
