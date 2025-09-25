<template>
    <!-- 客户案例 -->
    <section class="case-section">
        <h2>客户案例</h2>
        <div class="case-item">
            <div class="case-image" style="position: relative;">
                <div style="position: absolute; top: 16px; left: 0; width: 100%; text-align: center; z-index: 2;">
                    <span
                        style="color: #fff; font-size: 2rem; font-weight: bold; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">无人机气囊回收</span>
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

</template>
<script setup>

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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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