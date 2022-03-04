<template>
  <div class="login">
    <div class="login-container">
      <!-- 标题 -->
      <h1 class="login-title">login</h1>

      <el-form
        ref="loginFormInstance"
        :model="loginForm"
        :rules="rules"
        label-width="0"
        class="login-form"
        label-position="left"
      >
        <!-- 账号 -->
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" placeholder="账号" clearable />
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
            placeholder="密码"
            clearable
            @keyup.enter="submitForm"
          />
        </el-form-item>

        <!-- 提交 -->
        <el-button class="submit-btn" type="primary" :loading="loading" @click="submitForm">
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { ElForm } from 'element-plus'
import type { ILoginState } from './type'

const router = useRouter()

const loginFormInstance = ref<InstanceType<typeof ElForm>>()

const state = reactive<ILoginState>({
  loading: false,
  loginForm: {
    userName: '',
    password: ''
  },
  rules: computed(() => ({
    userName: [{ required: true, message: '请输入用户名称' }],
    password: [{ required: true, message: '请输入密码' }]
  }))
})
// 登录
const submitForm = async () => {
  try {
    router.push('/home')
  } catch (error) {
    console.log(error, 'e')
  }
  state.loading = false
}
const { loading, loginForm, rules } = toRefs(state)
</script>

<style scoped lang="scss">
$primary-text-color: #333;

.login {
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
  .login-container {
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    height: 580px;
    padding: 48px 40px;
    position: relative;
    width: 460px;

    ::v-deep(.el-form-item--small.el-form-item) {
      margin-bottom: 22px;
    }
    ::v-deep(.el-form-item--small .el-form-item__content) {
      line-height: 48px;
    }
    ::v-deep(.el-input__inner) {
      height: 48px;
      line-height: 48px;
      padding-left: 38px;
    }
    ::v-deep(.el-input--small .el-input__icon) {
      line-height: 48px;
    }
    ::v-deep(.el-input__prefix) {
      top: 7px;
      left: 10px;
      color: #333;
      .iconfont {
        font-size: 18px;
      }
    }

    .logo {
      text-align: center;
      .img {
        height: 50px;
        object-fit: contain;
        width: 200px;
      }
    }

    .login-title {
      color: #333;
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 48px;
      padding-top: 50px;
      text-align: center;
    }
    .set-language {
      position: absolute;
      top: 10px;
      right: 10px;
      color: $primary-text-color;
      padding: 5px;

      ::v-deep(.text) {
        color: $primary-text-color;
      }
      ::v-deep(.language-icon) {
        color: $primary-text-color;
      }
    }
    .login-form {
      box-sizing: border-box;
      width: 100%;
      .submit-btn {
        align-items: center;
        background: linear-gradient(90deg, #4e96f0 0%, #296cf4 100%);
        border: 0;
        border-radius: 4px;
        display: flex;
        height: 48px;
        justify-content: center;
        margin-top: 61px;
        width: 100%;
      }
    }

    .copyright {
      position: absolute;
      bottom: 17px;
      left: 50%;
      color: #1a1a1a;
      font-size: 12px;
      font-weight: 400;
      transform: translateX(-50%);
    }
  }
}
</style>
