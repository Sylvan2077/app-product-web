<script setup lang="ts">
</script>

<template>
            <!-- 头部导航 -->
    <header class="header">
      <div class="logo">
        <!-- <el-image src="@/assets/logo.png" fit="fill" /> -->
        <img src="@/assets/logo.png" />
    </div>
      <nav class="nav">
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
    </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: white;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #0066cc;
}

.nav .el-dropdown-link {
  margin-right: 2rem;
  cursor: pointer;
}

</style>
