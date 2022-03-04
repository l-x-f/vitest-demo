import { ComputedRef } from 'vue'
import { RuleItem } from 'async-validator'
/**
 * 登录表单数据类型
 */
export type LoginFrom = {
  userName: string
  password: string
}

export interface ILoginState {
  loading: boolean
  loginForm: LoginFrom
  rules: ComputedRef<{
    userName: RuleItem[]
    password: RuleItem[]
  }>
}
