<template>
  <!-- <div class="module-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div class="h-40 bg-gray-200 flex items-center justify-center">
      <img :src="imageUrl" alt="模块图" class="h-full w-full object-cover" />
    </div>
    <div class="p-4">
      <h3 class="font-bold text-gray-800">{{ title }}</h3>
      <p class="text-gray-600 text-sm mt-1">{{ description }}</p>
    </div>
  </div> -->
      <!-- 这里以航空模块为例，其他模块类似 -->
      <div class="module-group">
        <el-card shadow="hover" class="module-card">
          <template #title>基于平台 结构强度模块</template>
          <div class="card-content">这是结构强度模块相关内容...</div>
        </el-card>
        <el-card shadow="hover" class="module-card">
          <template #title>基于平台 动力仿真模块</template>
          <div class="card-content">这是动力仿真模块相关内容...</div>
        </el-card>
        <!-- 更多航空模块卡片 -->
      </div>
      <!-- 航天、兵器、船舶模块内容类似，可通过组件复用或条件渲染实现 -->
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    imageUrl: {
      type: String,
      default: 'https://via.placeholder.com/300x200'
    }
  }
}
</script>

<style scoped>
.module-card {
  border: 1px solid #ebeef5;
  transition: all 0.3s ease;
}

.module-card:hover {
  border-color: #409eff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.module-card .h-40 {
  background-color: #f3f4f6;
}

.module-card h3 {
  color: #303133;
}

.module-card p {
  line-height: 1.4;
}
</style>