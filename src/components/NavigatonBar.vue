<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
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
    <nav class="nav desktop-nav">
      <el-dropdown>
        <span class="el-dropdown-link">
          <RouterLink to="/">首页</RouterLink>
          <i class="el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="about">关于我们</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <RouterLink to="/about">行业</RouterLink>
          <i class="el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="aerospace">航空航天</el-dropdown-item>
            <el-dropdown-item command="military">兵器</el-dropdown-item>
            <el-dropdown-item command="ship">船舶</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <RouterLink to="/about">学科</RouterLink>
          <i class="el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="structural">结构仿真</el-dropdown-item>
            <el-dropdown-item command="fluid">流体仿真</el-dropdown-item>
            <el-dropdown-item command="electromagnetic">电磁仿真</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-input placeholder="搜索" clearable style="width: 200px; margin-left: 20px;" />
    </nav>
    <!-- 移动端导航 -->
    <nav class="nav mobile-nav" v-if="mobileMenuOpen">
      <el-dropdown>
        <span class="el-dropdown-link">
          <RouterLink to="/">首页</RouterLink>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="about">关于我们</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <RouterLink to="/about">行业</RouterLink>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="aerospace">航空航天</el-dropdown-item>
            <el-dropdown-item command="military">兵器</el-dropdown-item>
            <el-dropdown-item command="ship">船舶</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <RouterLink to="/about">学科</RouterLink>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="structural">结构仿真</el-dropdown-item>
            <el-dropdown-item command="fluid">流体仿真</el-dropdown-item>
            <el-dropdown-item command="electromagnetic">电磁仿真</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-input placeholder="搜索" clearable style="width: 100%; margin: 10px 0;" />
    </nav>
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
