import Page404 from '@/views/error-pages/404'

const errorPages: IMenubarRaw[] = [
  {
    path: '/:pathMatch(.*)',
    sort: Infinity,
    meta: {
      title: '404'
    },
    hidden: true,
    name: '*',
    component: Page404
  }
]

export default errorPages
