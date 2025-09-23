<!-- Home.vue -->
<template>
  <div class="home-page">
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
        <h1>铸软件基石 擎装备重器</h1>
        <p>致力于成为xxxxxxxxxx</p>
        <el-button type="primary" round @click="watchVideo">观看视频</el-button>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/800x500?text=芯片+云" alt="芯片" />
      </div>
    </section>

    <!-- 产品网格 -->
    <section class="products">
      <div class="filter">
        <el-select v-model="selectedIndustry" placeholder="选择行业" @change="filterProducts">
          <el-option label="所有" value="all"></el-option>
          <el-option label="航空" value="aerospace"></el-option>
          <el-option label="航天" value="space"></el-option>
          <el-option label="兵器" value="military"></el-option>
          <el-option label="船舶" value="ship"></el-option>
        </el-select>

        <el-select v-model="selectedModule" placeholder="选择模块" @change="filterProducts">
          <el-option label="所有" value="all"></el-option>
          <el-option label="结构仿真模块" value="structural"></el-option>
          <el-option label="流体仿真模块" value="fluid"></el-option>
          <el-option label="电磁仿真模块" value="electromagnetic"></el-option>
          <el-option label="辐射仿真模块" value="radiation"></el-option>
          <el-option label="多物理场仿真模块" value="multiphysics"></el-option>
        </el-select>
      </div>

      <div class="product-grid">
        <div
          v-for="(item, index) in filteredProducts"
          :key="index"
          class="product-card"
        >
          <div class="product-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="product-title">{{ item.title }}</div>
          <div class="product-desc">{{ item.desc }}</div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="partners">
      <h2>合作伙伴</h2>
      <p>正与众多客户一起创造更多价值</p>
      <div class="partner-logos">
        <div v-for="i in 15" :key="i" class="logo-item">
          <img v-if="i <= 6" src="https://via.placeholder.com/150x60?text=HUAWEI" alt="华为" />
          <img v-else-if="i <= 12" src="https://via.placeholder.com/150x60?text=中国移动" alt="中国移动" />
          <img v-else src="https://via.placeholder.com/150x60?text=中国电信" alt="中国电信" />
        </div>
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

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Search } from '@element-plus/icons-vue';

const selectedIndustry = ref('all');
const selectedCategory = ref('all');

const industries = [
  { name: '航空' },
  { name: '航天' },
  { name: '兵器' },
  { name: '船舶' },
  { name: '民用' },
];

const categories = [
  { name: '结构仿真模块' },
  { name: '流体仿真模块' },
  { name: '电磁仿真模块' },
  { name: '辐射仿真模块' },
  { name: '多物理场仿真模块' },
];

const products = [
  { name: '茉莉平台 结构振动仿真模块', description: '用于结构振动特性的精确分析', industry: '航空', category: '结构仿真模块' },
  { name: '茉莉平台 结构静力学仿真模块', description: '评估结构在静态载荷下的性能', industry: '航天', category: '结构仿真模块' },
  { name: '茉莉平台 冲击动力学模块', description: '模拟冲击载荷下的动态响应', industry: '兵器', category: '结构仿真模块' },
  { name: '茉莉平台 多物理场仿真模块', description: '综合考虑多种物理场的耦合效应', industry: '船舶', category: '多物理场仿真模块' },
  { name: '茉莉平台 高温高压仿真模块', description: '适用于极端环境条件的仿真', industry: '民用', category: '结构仿真模块' },
  { name: '茉莉平台 流体动力学模块', description: '流体流动和传热过程的模拟', industry: '航空', category: '流体仿真模块' },
];

const filteredProducts = computed(() => {
  return products.filter(product => {
    const industryMatch = selectedIndustry.value === 'all' || product.industry === selectedIndustry.value;
    const categoryMatch = selectedCategory.value === 'all' || product.category === selectedCategory.value;
    return industryMatch && categoryMatch;
  });
});

const partners = [
  'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
  'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
  'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
  'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
  'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
  'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
  'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
];

const contacts = [
  { title: '关于我们', items: ['中心介绍', '中心文化', '发展历程'] },
  { title: '行业', items: ['航空', '航天', '兵器', '船舶', '民用'] },
  { title: '学科', items: ['结构仿真模块', '流体仿真模块', '电磁仿真模块', '辐射仿真模块', '多物理场仿真模块'] },
  { title: '联系我们', items: ['电话：010-8xxxxxxxx', '邮箱：info@xxxx.com', '地址：北京市海淀区XX路一号'], qrCode: 'https://placehold.co/120x120/1e88e5/ffffff?text=QR+Code' },
];

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [selectedIndustry, setSelectedIndustry] = useState('all');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Mock data for the first page
//   const features = [
//     {
//       title: '丰富的仿真功能',
//       description: '高保真仿真功能，支持多种复杂场景的模拟与分析，满足不同用户需求。',
//       icon: '📊'
//     },
//     {
//       title: '精确的仿真结果',
//       description: '采用先进的算法和模型，确保仿真结果的高度准确性和可靠性。',
//       icon: '🎯'
//     },
//     {
//       title: '多元的专业化定制',
//       description: '提供个性化定制服务，满足不同行业和应用场景的特定需求。',
//       icon: '🔧'
//     }
//   ];

//   const cases = [
//     {
//       title: '无人机气囊回收',
//       image: 'https://placehold.co/400x500/1e88e5/ffffff?text=Drone+Recovery',
//       details: [
//         { label: '装备价值', content: '提升回收成功率，降低设备损耗' },
//         { label: '痛点问题', content: '传统回收方式效率低，风险高' },
//         { label: '解决方案', content: '智能气囊回收系统，精准控制' },
//         { label: '应用成效', content: '回收成功率提升至98%' },
//         { label: '替代效果', content: '减少人工干预，提高安全性' }
//       ]
//     },
//     {
//       title: '半穿甲战斗部侵彻模拟',
//       image: 'https://placehold.co/400x500/2196f3/ffffff?text=Penetration+Simulation',
//       details: [
//         { label: '装备价值', content: '优化弹药设计，提高作战效能' },
//         { label: '痛点问题', content: '传统试验成本高，周期长' },
//         { label: '解决方案', content: '高精度数值模拟，快速迭代' },
//         { label: '应用成效', content: '研发周期缩短40%' },
//         { label: '替代效果', content: '减少实弹试验次数，降低成本' }
//       ]
//     }
//   ];

//   const simulationModels = [
//     { title: '线性静力分析', description: '结构在静态载荷下的响应分析' },
//     { title: '非线性分析', description: '考虑材料非线性和几何非线性' },
//     { title: '动力学分析', description: '结构在动态载荷下的响应分析' }
//   ];

//   const constraints = [
//     { title: '固定约束', description: '节点完全固定' },
//     { title: '滑动约束', description: '允许沿特定方向移动' },
//     { title: '旋转约束', description: '限制旋转自由度' }
//   ];

//   const contacts = [
//     { title: '关于我们', items: ['中心介绍', '中心文化', '发展历程'] },
//     { title: '行业', items: ['航空', '航天', '兵器', '船舶', '民用'] },
//     { title: '学科', items: ['结构仿真模块', '流体仿真模块', '电磁仿真模块', '辐射仿真模块', '多物理场仿真模块'] },
//     { title: '联系我们', items: ['电话：010-8xxxxxxxx', '邮箱：info@xxxx.com', '地址：北京市海淀区XX路一号'], qrCode: 'https://placehold.co/120x120/1e88e5/ffffff?text=QR+Code' }
//   ];

//   // Mock data for the second page
//   const industries = [
//     { name: '航空', selected: true },
//     { name: '航天', selected: false },
//     { name: '兵器', selected: false },
//     { name: '船舶', selected: false },
//     { name: '民用', selected: false }
//   ];

//   const categories = [
//     { name: '所有', selected: true },
//     { name: '结构仿真模块', selected: false },
//     { name: '流体仿真模块', selected: false },
//     { name: '电磁仿真模块', selected: false },
//     { name: '辐射仿真模块', selected: false },
//     { name: '多物理场仿真模块', selected: false }
//   ];

//   const products = [
//     { name: '茉莉平台 结构振动仿真模块', description: '用于结构振动特性的精确分析' },
//     { name: '茉莉平台 结构静力学仿真模块', description: '评估结构在静态载荷下的性能' },
//     { name: '茉莉平台 冲击动力学模块', description: '模拟冲击载荷下的动态响应' },
//     { name: '茉莉平台 多物理场仿真模块', description: '综合考虑多种物理场的耦合效应' },
//     { name: '茉莉平台 高温高压仿真模块', description: '适用于极端环境条件的仿真' },
//     { name: '茉莉平台 流体动力学模块', description: '流体流动和传热过程的模拟' }
//   ];

//   const partners = [
//     'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=HUAWEI',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Mobile',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom',
//     'https://placehold.co/120x60/1e88e5/ffffff?text=China+Telecom'
//   ];

</script>
