<template>
  <div class="hero-banner">
    <el-carousel height="700px" indicator-position="outside" class="hero-carousel" :autoplay="true">
      <el-carousel-item v-for="(item, idx) in banners" :key="idx">
        <div class="carousel-bg" :style="`background-image: url('${getImageUrl(item.img)}');`">
          <div class="hero-content">
            <h1>{{ item.title }}</h1>
            <p>{{ item.subtitle }}</p>
            <el-button class="transparent-btn" type="primary" round size="large" @click="handleVideoClick">
              观看视频 →
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getHomeBannerDataApi } from "@/api/index"
import { getImageUrl } from '@/utils/utils'

const banners = ref([])


onMounted(() => {
  getHomeBannerDataApi().then(res => {
    console.log(res)
    banners.value = res.data.banners
  })
})

const handleVideoClick = () => {
  window.open('https://www.youtube.com', '_blank')
}
</script>

<style scoped>
.transparent-btn {
  background-color: transparent !important;
  border-color: transparent !important;
  color: #409EFF;
  /* 或自定义颜色 */
  border-color: #409EFF !important;
}

.transparent-btn:hover,
.transparent-btn:focus {
  background-color: rgba(0, 0, 0, 0.05) !important;
  /* 悬停效果 */
  border-color: transparent !important;
}

.hero-banner {
  width: 100%;
  min-height: 500px;
  position: relative;
  overflow: hidden;
}

.hero-carousel {
  width: 100%;
}

.carousel-bg {
  width: 100%;
  height: 80vh;
  min-height: 400px;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.carousel-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.18);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 700px;
  margin-left: 5vw;
  /* 靠左显示 */
  margin-right: auto;
  padding: 2rem 0 2rem 0;
  background: transparent;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 2.5rem;
}

@media (max-width: 900px) {

  .carousel-bg,
  .hero-carousel {
    min-height: 350px;
    height: 60vh;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>