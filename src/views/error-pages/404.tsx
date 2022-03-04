import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ElEmpty, ElButton } from 'element-plus'

export default defineComponent({
  setup() {
    const router = useRouter()

    const handleBack = () => {
      router.back()
    }
    const handleLogout = () => {
      console.log('logout')
    }
    return () => (
      <div class="page-404">
        <ElEmpty image-size={360} description="404">
          <ElButton type="primary" onClick={handleBack}>
            返回
          </ElButton>
          <ElButton onClick={handleLogout}> 退出</ElButton>
        </ElEmpty>
      </div>
    )
  }
})
