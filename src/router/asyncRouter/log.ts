const asyncRouter: IMenubarRaw[] = [
  {
    path: '/log',
    name: 'log',
    component: () => import('@/views/log/index.vue'),
    meta: {
      title: 'log'
    }
  }
]

export default asyncRouter
