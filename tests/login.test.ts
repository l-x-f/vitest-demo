import { describe, it, expect } from 'vitest'
import ElementPlus from 'element-plus'
import { mount } from '@vue/test-utils'
import login from '@/views/login/index.vue'

describe('login', () => {
  it('renders properly', () => {
    const wrapper = mount(login, {
      global: {
        plugins: [ElementPlus]
      }
    })
    expect(wrapper.get('.login-title')).toContain('login')
  })
})
