<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { getStaticsDataApi } from '@/api/index'

const props = { multiple: true }
const router = useRouter()
const mobileMenuOpen = ref(false)

const emit = defineEmits(['industryChange', 'subjectChange'])

const client_options = ref<any>([
  // {
  //   value: "所有",
  //   label: '所有',
  //   children: []
  // }
])

const app_options = ref<any>([
  // {
  //   value: 1,
  //   label: '所有',
  //   children: []
  // }
])

/** 点击dropdownitem筛选不同行业 */
const handleIndustryClick = (industry: any) => {
  console.log('Selected industry:', industry)
  const industries = [{ title: industry }]
  // 触发父组件事件，传递选中的行业
  emit('industryChange', industries)
}

const handleSubjectChange = (subject: any) => {
  // 触发父组件事件，传递选中的学科
  emit('subjectChange', subject)
}


onMounted(() => {
  getStaticsDataApi().then(res => {
    const industries = res.data.industries || []
    const subjects = res.data.subjects || []
    for (const item of industries) {
      client_options.value.push({
        value: item,
        label: item,
        children: []
      })
    }
    for (const item of subjects) {
      app_options.value.push({
        value: item,
        label: item,
        children: []
      })
    }
  })
})
</script>

<template>
  <!-- 头部导航 -->
  <header class="header">
    <div class="logo">
      <!-- <el-image src="@/assets/logo.png" fit="fill" /> -->
      <img src="@/assets/logo.png" />
    </div>

    <!-- 移动端菜单按钮 -->
    <div class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
      <svg width="28" height="28" viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="2" rx="1" fill="#333" />
        <rect x="4" y="11" width="16" height="2" rx="1" fill="#333" />
        <rect x="4" y="16" width="16" height="2" rx="1" fill="#333" />
      </svg>
    </div>

    <!-- 桌面端导航 -->
    <div class="nav desktop-nav">
      <el-dropdown>
        <el-button type="" text class="el-dropdown-link">
          首页
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home" @click="router.push({ path: '/' })">首页</el-dropdown-item>
            <el-dropdown-item command="about" @click="router.push({ path: '/about' })">关于我们</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown>
        <el-button type="" text class="el-dropdown-link">
          行业
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i of client_options" :key="i.value" @click="handleIndustryClick(i.value)">{{ i.label
              }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <el-button type="" text class="el-dropdown-link">
          学科
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i of app_options" :key="i.value" @click="handleSubjectChange(i.value)">{{ i.label
              }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-input placeholder="搜索" clearable style="width: 200px; margin: 0 20px;" :suffix-icon="Search" />
    </div>
    <!-- 桌面端导航 -->
    <!-- 移动端导航 -->
    <nav class="nav mobile-nav" v-if="mobileMenuOpen">
      <el-dropdown>
        <el-button type="" text class="el-dropdown-link">
          首页
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home" @click="router.push({ path: '/' })">首页</el-dropdown-item>
            <el-dropdown-item command="about" @click="router.push({ path: '/about' })">关于我们</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <el-button type="" text class="el-dropdown-link">
          行业
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i of client_options" :key="i.value" @click="handleIndustryClick(i.value)">{{
              i.label }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <el-button type="" text class="el-dropdown-link">
          学科
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="i of app_options" :key="i.value" @click="handleSubjectChange(i.value)">{{ i.label
              }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-input placeholder="搜索" clearable style="width: 100%; margin: 10px 0;" :suffix-icon="Search" />
    </nav>
    <!-- 移动端导航 -->
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #0066cc;
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.logo img {
  height: 40px;
}

.nav .el-dropdown-link {
  margin-right: 2rem;
  cursor: pointer;
  font-size: 16px;
}

.el-dropdown-link.el-tooltip__trigger:focus-visible {
  outline: unset;
}

.desktop-nav {
  display: flex;
  align-items: center;
}

.mobile-menu-btn {
  display: none;
  cursor: pointer;
  margin-left: 1rem;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100vw;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 1rem 0;
  z-index: 999;
}

.mobile-nav .el-dropdown-link {
  margin: 1rem 0;
  font-size: 18px;
}

/* 响应式：手机端适配 */
@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-nav {
    display: flex;
  }

  .header {
    padding: 0.5rem 0.5rem;
  }

  .logo img {
    height: 32px;
  }
}
</style>
