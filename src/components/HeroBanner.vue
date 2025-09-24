<template>
  <div class="hero-banner relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-100 overflow-hidden">
    <!-- 背景图 -->
    <div class="absolute inset-0 opacity-20">
      <img src="@/assets/banner-bg.png" alt="背景" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold text-gray-800 mb-4 leading-tight">
        铸软件基石 擎装备重器
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        致力于成为行业领先的仿真软件中心
      </p>
      <el-button type="primary" round size="large" @click="handleVideoClick" class="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform transition hover:scale-105">
        观看视频 →
      </el-button>
    </div>

    <!-- 右侧图标 -->
    <!-- <div class="absolute right-10 top-1/2 transform -translate-y-1/2 animate-bounce">
      <img src="@/assets/icon-cloud.png" alt="云" class="w-64 h-64 object-contain" />
    </div> -->
  </div>
</template>

<script setup>
const handleVideoClick = () => {
  window.open('https://www.youtube.com', '_blank')
}
</script>

<style scoped>
.hero-banner {
  background: linear-gradient(135deg, #e0f2fe 0%, #b7f1ff 50%, #93d9ff 100%);
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%);
  z-index: 0;
}

.animate-bounce {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 20%, 40%, 60%, 80%, 100% { transform: translateY(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateY(-20px); }
}
</style>