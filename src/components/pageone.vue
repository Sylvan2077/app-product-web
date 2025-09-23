<template>
  <div class="impact-dynamics-page">
    <!-- 头部导航 -->
    <header class="header">
      <div class="logo">CH</div>
      <nav class="nav">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            首页<i class="el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="about">关于我们</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            行业<i class="el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="aerospace">航空航天</el-dropdown-item>
              <el-dropdown-item command="military">兵器</el-dropdown-item>
              <el-dropdown-item command="ship">船舶</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            学科<i class="el-icon--right"></i>
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

    <!-- 主题区 -->
    <section class="hero">
      <div class="hero-content">
        <h1>茉莉平台 冲击动力学模块</h1>
        <p>冲击动力学模块服务于战略装备XXXXXXXXXXXXXXX</p>
        <el-button type="primary" round @click="watchVideo">观看视频</el-button>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/800x500?text=飞机模拟图" alt="飞机模拟图" />
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
        <div class="case-image">
          <img src="https://via.placeholder.com/400x600?text=无人机气囊回收" alt="无人机气囊回收" />
        </div>
        <div class="case-info">
          <h3>无人机气囊回收</h3>
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
        <img src="https://via.placeholder.com/300x200?text=模拟1" alt="模拟1" />
        <img src="https://via.placeholder.com/300x200?text=模拟2" alt="模拟2" />
        <img src="https://via.placeholder.com/300x200?text=模拟3" alt="模拟3" />
      </div>
    </section>

    <!-- 半穿甲战斗部模拟 -->
    <section class="case-section">
      <div class="case-item reverse">
        <div class="case-image">
          <img src="https://via.placeholder.com/400x600?text=半穿甲战斗部" alt="半穿甲战斗部" />
        </div>
        <div class="case-info">
          <h3>半穿甲战斗部侵彻模拟</h3>
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
        <img src="https://via.placeholder.com/300x200?text=飞机1" alt="飞机1" />
        <img src="https://via.placeholder.com/300x200?text=飞机2" alt="飞机2" />
        <img src="https://via.placeholder.com/300x200?text=飞机3" alt="飞机3" />
      </div>
    </section>

    <!-- 材料模型、约束模型等 -->
    <section class="model-section">
      <h2>16种工程仿真材料模型</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <div class="model-card">
              <img src="https://via.placeholder.com/300x200?text=飞机模型" alt="模型" />
              <h4>线性静力分析</h4>
              <p>简短介绍简短介绍简短介绍简短介绍</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="model-section">
      <h2>12种约束模型</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <div class="model-card">
              <img src="https://via.placeholder.com/300x200?text=飞机模型" alt="模型" />
              <h4>线性静力分析</h4>
              <p>简短介绍简短介绍简短介绍简短介绍</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="model-section">
      <h2>11种接触模型</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <div class="model-card">
              <img src="https://via.placeholder.com/300x200?text=飞机模型" alt="模型" />
              <h4>节点集强制运动</h4>
              <p>简短介绍简短介绍简短介绍简短介绍</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <section class="model-section">
      <h2>载荷</h2>
      <div class="carousel-container">
        <el-carousel :interval="4000" arrow="always">
          <el-carousel-item v-for="i in 3" :key="i">
            <div class="model-card">
              <img src="https://via.placeholder.com/300x200?text=飞机模型" alt="模型" />
              <h4>线性静力分析</h4>
              <p>简短介绍简短介绍简短介绍简短介绍</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>关于我们</h4>
          <ul>
            <li>中心介绍</li>
            <li>中心文化</li>
            <li>XXXXX</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>行业</h4>
          <ul>
            <li>航空</li>
            <li>航天</li>
            <li>兵器</li>
            <li>船舶</li>
            <li>XXXXX</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>学科</h4>
          <ul>
            <li>结构仿真模块</li>
            <li>流体仿真模块</li>
            <li>电磁仿真模块</li>
            <li>辐射仿真模块</li>
            <li>多物理场仿真模块</li>
          </ul>
        </div>
        <div class="footer-col contact">
          <h4>联系我们</h4>
          <p><strong>010-8XXXXXXXX</strong></p>
          <p>邮编：111110</p>
          <p>地址：北京市海淀区某某路一号</p>
          <img src="https://via.placeholder.com/120x120?text=二维码" alt="二维码" />
          <p>软件中心公众号</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const watchVideo = () => {
  alert('正在播放视频...')
}

const handleCommand = (command) => {
  console.log('点击了:', command)
}
</script>

<style scoped>

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
  background: url('https://via.placeholder.com/1920x800?text=背景图') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: left;
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
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
  /* width: 100vw;
  min-width: 100vw;
  box-sizing: border-box; */
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

.carousel-container {
  display: flex;
  justify-content: center;
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