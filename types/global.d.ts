import { RouteRecordRaw } from 'vue-router'

declare global {
  /**
   * 菜单栏类型
   *
   */
  interface IMenubarRaw {
    /**
     *  组件名称建议大驼峰命名， 和页面的name保持一致。
     *  名称用于页面缓存，必须保证每个路由的名称唯一
     */
    name: string
    /**
     * 页面路径
     */
    path: string
    /**
     * 排序，默认为0
     */
    sort?: number
    /**
     * 路径对于的组件
     */
    component?: RouteRecordRaw['component'] | string | (() => Promise<typeof import('*.vue')>)

    /**
     * 路由别称
     */
    alias?: string
    /**
     * 重定向
     */
    redirect?: string | { name: string }
    /**
     * 是否隐藏路由，默认false 不隐藏
     */
    hidden?: boolean
    /**
     * 页面信息
     */
    meta?: {
      /**
       * 页面标题
       */
      title: string
      /**
       * 是否隐藏面包屑,默认true显示
       */
      breadcrumb?: boolean
      /**
       *  el-icon 图标,第一优先级展示
       */
      icon?: string
      /**
       * svg图标，icon不存在才展示
       */
      svgIcon?: string
      /**
       * 控制keep-alive缓存，默认false 不缓存
       */
      cache?: boolean
      /**
       * 控制tagView，默认true显示
       */
      tagView?: boolean

      /**
       * 权限
       */
      permission?: string[] | number[]
    }
    /**
     * 子路由
     */
    children?: IMenubarRaw[]
  }
}
