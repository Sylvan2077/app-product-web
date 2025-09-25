<template>
      <!-- 这里以航空模块为例，其他模块类似 -->
      <div class="module-group">
          <el-card class="module-card" shadow="hover">
    <!-- 图片区域 -->
    <div class="card-image">
      <img :src="imageUrl" alt="模块图" class="w-full h-full object-cover" />
    </div>

    <!-- 文字区域 -->
    <div class="card-content">
      <h3 class="card-title">{{ props.title }}</h3>
      <p class="card-desc">{{ props.description }}</p>
    </div>
  </el-card>
        <!-- 更多航空模块卡片 -->
      </div>
      <!-- 航天、兵器、船舶模块内容类似，可通过组件复用或条件渲染实现 -->
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: 'https://via.placeholder.com/300x180?text=模块图'
    }
})
</script>

<style scoped>
.module-card {
  border: 1px solid #ebeef5;
  transition: all 0.3s ease;
  height: 300px;
  min-width: 30px;
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

.module-card {
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
}

.card-image {
  height: 180px;
  width: 100%;
  background-color: #f5f5f5;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-desc {
  font-size: 14px;
  color: #909399;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}
</style>