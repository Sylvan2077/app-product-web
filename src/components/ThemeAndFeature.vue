<template>
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
        <div class="features-box">
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
        </div>

    </section>
</template>
<script setup>

const watchVideo = () => {
    alert('正在播放视频...')
}

const handleCommand = (command) => {
    console.log('点击了:', command)
}

const cards = [
    {
        title: '丰富的仿真功能',
        icon: 'https://via.placeholder.com/50?text=⚙️',
        desc: '支持多物理场耦合、非线性分析、动态响应等复杂仿真场景。'
    },
    {
        title: '精确的仿真结果',
        icon: 'https://via.placeholder.com/50?text=📊',
        desc: '采用高阶数值算法，误差控制在0.5%以内，满足工程验证要求。'
    },
    {
        title: '多元的专业化定制',
        icon: 'https://via.placeholder.com/50?text=🛠️',
        desc: '提供API接口、脚本扩展、UI定制服务，适配不同行业需求。'
    }
]
</script>

<style scoped>
.feature-section {
    position: relative;
    overflow: hidden;
}

.bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.feature-cards-container {
    z-index: 10;
    padding-bottom: 40px;
}

.feature-cards-container::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
    z-index: -1;
}

@media (max-width: 768px) {
    .feature-cards-container {
        transform: translateY(30%);
        padding-bottom: 20px;
    }
}

.image-gallery {
    display: flex;
    justify-content: space-around;
}

.transparent-btn {
    background-color: transparent !important;
    border-color: transparent !important;
    color: inherit;
    /* 或自定义颜色 */
    border-color: white !important;
}

.transparent-btn:hover,
.transparent-btn:focus {
    background-color: rgba(0, 0, 0, 0.05) !important;
    /* 悬停效果 */
    border-color: transparent !important;
}

.impact-dynamics-page {
    /* padding: 0 20px; */
    font-family: 'Microsoft YaHei', sans-serif;
    color: #333;
    background: linear-gradient(to bottom, #e6f7ff, #fff);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0;
    background: url('@/assets/飞机模拟图.png') no-repeat center center;
    background-size: cover;
    color: white;
    text-align: left;
    height: 800px;
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
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.features {
    position: relative;
    height: 150px;
    background-color: #f5f9ff;
}

.features-box {
    position: absolute;
    top: -110px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 4rem 0;
    gap: 2rem;
    z-index: 999;
}

.feature-item {
    height: 180px;
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.info-box h4 {
    margin: 0 0 0.5rem 0;
    color: #0066cc;
}

.model-section {
    padding: 4rem 0;
    background: #f0f8ff;
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

/* 新增：移动端适配 */
@media (max-width: 900px) {
    .hero {
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 1rem;
        height: auto;
        background-size: cover;
    }

    .hero-content {
        margin-left: 0;
        margin-bottom: 2rem;
    }

    .features {
        position: static;
        height: auto;
        /* margin-bottom: 1rem; */
        /* 新增：给功能特性区加下边距，避免后续内容顶上来 */
    }

    .features-box {
        flex-direction: column;
        position: static;
        gap: 1rem;
        padding: 1rem 0;
        align-items: center;
    }

    .feature-item {
        max-width: 95vw;
        width: 100%;
        padding: 1rem;
    }

    .case-item,
    .case-item.reverse {
        flex-direction: column !important;
        align-items: center;
        gap: 1rem;
    }

    .case-image img {
        width: 90vw;
        height: auto;
        max-width: 400px;
        max-height: 300px;
    }

    .case-info {
        min-width: 0;
        width: 100%;
    }

    .image-gallery {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .model-section {
        padding: 2rem 0;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        text-align: center;
    }

    .footer-col {
        margin-bottom: 1rem;
    }
}

/* 针对超小屏幕进一步优化 */
@media (max-width: 500px) {
    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .case-section h2,
    .model-section h2 {
        font-size: 1.2rem;
    }
}
</style>