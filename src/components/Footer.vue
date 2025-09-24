<template>
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
  <!-- <footer class="bg-blue-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-lg font-bold mb-4">关于我们</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-blue-300">中心介绍</a></li>
          <li><a href="#" class="hover:text-blue-300">中心文化</a></li>
          <li><a href="#" class="hover:text-blue-300">xxxxx</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-4">行业</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-blue-300">航空</a></li>
          <li><a href="#" class="hover:text-blue-300">航天</a></li>
          <li><a href="#" class="hover:text-blue-300">兵器</a></li>
          <li><a href="#" class="hover:text-blue-300">船舶</a></li>
          <li><a href="#" class="hover:text-blue-300">xxxxx</a></li>
          <li><a href="#" class="hover:text-blue-300">xxxxx</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-4">学科</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-blue-300">结构仿真模块</a></li>
          <li><a href="#" class="hover:text-blue-300">流体仿真模块</a></li>
          <li><a href="#" class="hover:text-blue-300">电磁仿真模块</a></li>
          <li><a href="#" class="hover:text-blue-300">辐射仿真模块</a></li>
          <li><a href="#" class="hover:text-blue-300">多物理仿真模块</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-4">联系我们</h3>
        <p class="text-lg font-semibold">010-8xxxxxxxx</p>
        <p class="text-sm mt-2">邮编：111111</p>
        <p class="text-sm">地址：北京市海淀区某某路一号</p>
        <div class="mt-4">
          <img src="https://via.placeholder.com/120x120" alt="二维码" class="w-20 h-20" />
          <p class="text-xs mt-2">软件中心公众号</p>
        </div>
      </div>
    </div>
  </footer> -->
</template>
<style>
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
  margin-left: 50px;
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