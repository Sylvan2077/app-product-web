<template>
  <div class="impact-dynamics-page">
    <NavigatonBar />

    <!-- 主题区 -->
    <section class="hero">
      <div class="hero-content">
        <h1>茉莉平台 冲击动力学模块</h1>
        <p>冲击动力学模块服务于战略装备XXXXXXXXXXXXXXX</p>
          <el-button round class="transparent-btn">观看视频</el-button>
      </div>
    </section>

    <!-- 功能特性 -->
    <section class="features">
      <div class="feature-item">
        <div class="icon"><i class="el-icon-s-custom"></i></div>
        <h3>丰富的仿真功能</h3>
        <p>支持多种复杂工况下的动态响应分析，具备高精度建模能力。</p>
      </div>
      <div class="feature-item">
        <div class="icon"><i class="el-icon-data-analysis"></i></div>
        <h3>精确的仿真结果</h3>
        <p>基于先进算法，提供高度可靠的数值解，误差控制在±1%以内。</p>
      </div>
      <div class="feature-item">
        <div class="icon"><i class="el-icon-setting"></i></div>
        <h3>多元的专业化定制</h3>
        <p>可按客户具体需求进行参数调整与模型扩展，满足多样化应用场景。</p>
      </div>
    </section>

    <!-- 客户案例 -->
    <section class="case-section">
      <h2>客户案例</h2>
      <div class="case-item">
      <div class="case-image" style="position: relative;">
        <div style="position: absolute; top: 16px; left: 0; width: 100%; text-align: center; z-index: 2;">
        <span style="color: #fff; font-size: 2rem; font-weight: bold; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">无人机气囊回收</span>
        </div>
        <img src="@/assets/无人机气囊回收.png" alt="无人机气囊回收" style="display: block; width: 100%;" />
      </div>
      <div class="case-info">
        <div class="info-box">
        <h4><i class="el-icon-s-check"></i> 装备价值</h4>
        <p>文本输入文本输入文本输入...</p>
        </div>
        <div class="info-box">
        <h4><i class="el-icon-warning"></i> 痛点问题</h4>
        <p>文本输入文本输入文本输入...</p>
        </div>
        <div class="info-box">
        <h4><i class="el-icon-solution"></i> 解决方案</h4>
        <p>文本输入文本输入文本输入...</p>
        </div>
        <div class="info-box">
        <h4><i class="el-icon-success"></i> 应用成效</h4>
        <p>文本输入文本输入文本输入...</p>
        </div>
        <div class="info-box">
        <h4><i class="el-icon-refresh"></i> 替代效果</h4>
        <p>文本输入文本输入文本输入...</p>
        </div>
      </div>
      </div>
      <div class="image-gallery">
      <img src="@/assets/模拟.png" alt="模拟1" />
      <img src="@/assets/模拟.png" alt="模拟2" />
      <img src="@/assets/模拟.png" alt="模拟3" />
      </div>
    </section>

    <!-- 半穿甲战斗部模拟 -->
    <section class="case-section">
      <div class="case-item reverse">
              <div class="case-image" style="position: relative;">
        <div style="position: absolute; top: 16px; left: 0; width: 100%; text-align: center; z-index: 2;">
        <span style="color: #fff; font-size: 2rem; font-weight: bold; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">半穿甲战斗部</span>
        </div>
        <img src="@/assets/无人机气囊回收.png" alt="半穿甲战斗部" style="display: block; width: 100%;" />
      </div>
        <!-- <div class="case-image">
          <img src="@/assets/无人机气囊回收.png" alt="半穿甲战斗部" />
        </div> -->
        <div class="case-info">
          <!-- <h3>半穿甲战斗部侵彻模拟</h3> -->
          <div class="info-box">
            <h4><i class="el-icon-s-check"></i> 装备价值</h4>
            <p>文本输入文本输入文本输入...</p>
          </div>
          <div class="info-box">
            <h4><i class="el-icon-warning"></i> 痛点问题</h4>
            <p>文本输入文本输入文本输入...</p>
          </div>
          <div class="info-box">
            <h4><i class="el-icon-solution"></i> 解决方案</h4>
            <p>文本输入文本输入文本输入...</p>
          </div>
          <div class="info-box">
            <h4><i class="el-icon-success"></i> 应用成效</h4>
            <p>文本输入文本输入文本输入...</p>
          </div>
          <div class="info-box">
            <h4><i class="el-icon-refresh"></i> 替代效果</h4>
            <p>文本输入文本输入文本输入...</p>
          </div>
        </div>
      </div>
      <div class="image-gallery">
        <img src="@/assets/飞机.png" alt="飞机1" />
        <img src="@/assets/飞机.png" alt="飞机2" />
        <img src="@/assets/飞机.png" alt="飞机3" />
      </div>
    </section>

    <!-- 材料模型、约束模型等 -->
    <section class="model-section">
      <h2>16种工程仿真材料模型</h2>
      <div>
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <CarouselCard msg="线性静力分析"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="model-section">
      <h2>12种约束模型</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <CarouselCard msg="线性静力分析"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="model-section">
      <h2>11种接触模型</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <CarouselCard msg="节点集强制运动"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="model-section">
      <h2>载荷</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <CarouselCard msg="线性静力分析"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavigatonBar from './NavigatonBar.vue'
import Footer from '@/components/Footer.vue'
import CarouselCard from './CarouselCard.vue'

const watchVideo = () => {
  alert('正在播放视频...')
}

const handleCommand = (command) => {
  console.log('点击了:', command)
}
</script>

<style scoped>

.image-gallery {
  display: flex;
  justify-content: space-around;
}

.transparent-btn {
  background-color: transparent !important;
  border-color: transparent !important;
  color: inherit; /* 或自定义颜色 */
  border-color: white !important;
}

.transparent-btn:hover,
.transparent-btn:focus {
  background-color: rgba(0, 0, 0, 0.05) !important; /* 悬停效果 */
  border-color: transparent !important;
}

.impact-dynamics-page {
  /* padding: 0 20px; */
  font-family: 'Microsoft YaHei', sans-serif;
  color: #333;
  background: linear-gradient(to bottom, #e6f7ff, #fff);
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
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

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;
  background: url('@/assets/飞机模拟图.png') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: left;
  height: 500px;
}

.hero-content {
  margin-left: 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-image img {
  width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.features {
  display: flex;
  justify-content: space-around;
  padding: 4rem 0;
  gap: 2rem;
  z-index: 999;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 300px;
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item .icon {
  font-size: 2rem;
  color: #0066cc;
  margin-bottom: 1rem;
}

.case-section {
  padding: 4rem 0;
  background: #f5f9ff;
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
}

.case-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.case-item {
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.case-item.reverse {
  flex-direction: row-reverse;
}

.case-image img {
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
}

.case-info {
  flex: 1;
  min-width: 300px;
}

.info-box {
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
}

.info-box h4 {
  margin: 0 0 0.5rem 0;
  color: #0066cc;
}

.model-section {
  padding: 4rem 0;
  background: #f0f8ff;
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
}

.model-section h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.model-card {
  width: 300px;
  text-align: center;
  margin: 0 1rem;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.model-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.footer {
  background: #003366;
  color: white;
  padding: 3rem 0;
  text-align: center;
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: left;
}

.footer-col h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: 0.5rem;
}

.contact img {
  width: 120px;
  height: 120px;
  margin: 1rem 0;
}
</style>