<template>
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>关于我们</h4>
          <ul v-if="about && about.length>0" >
            <li v-for="item in about" :key="item.id">{{ item.title }}</li> 
          </ul>
          <ul v-else>
            <li>公司介绍</li>
            <li>组织架构</li>
            <li>领导职务</li>
            <li>荣誉资质</li>
            <li>人才招聘</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>行业</h4>
          <ul v-if="industries && industries.length>0" >
            <li v-for="item in industries" :key="item">{{ item }}</li> 
          </ul>
          <ul v-else>
            <li>航空</li>
            <li>航天</li>
            <li>兵器</li>
            <li>船舶</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>学科</h4>
          <ul v-if="subjects && subjects.length>0" >
            <li v-for="item in subjects" :key="item">{{ item }}</li> 
          </ul>
          <ul v-else>
            <li>结构仿真模块</li>
            <li>流体仿真模块</li>
            <li>电磁仿真模块</li>
            <li>辐射仿真模块</li>
            <li>多物理场仿真模块</li>
          </ul>
        </div>
        <div class="footer-col contact">
          <h4>联系我们</h4>
          <div v-if="contact && contact.length>0" v-for="item in contact" :key="item.id">
            <img v-if="item.title=='软件中心公众号'" :src="getImageUrl(item.url)" alt="二维码" />
            <p >{{ item.title }}</p>
          </div >
          <div v-else>
            <p><strong>010-8XXXXXXXX</strong></p>
            <p>邮编：111110</p>
            <p>地址：北京市海淀区某某路一号</p>
            <img src="@/assets/wxewm.jpg" alt="二维码" />
            <p>软件中心公众号</p>
          </div>
        </div>
      </div>
    </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAboutUsDataApi , getStaticsDataApi } from '@/api/index';
import { getImageUrl } from '@/utils/utils'

const about = ref()
const contact = ref()
const industries = ref()
const subjects = ref()

onMounted(() => {
   getAboutUsDataApi().then(res => {
    about.value = res.data.about
    contact.value = res.data.contact
   })
  getStaticsDataApi().then(res => {
    console.log(res)
    industries.value  = res.data.industries || []
    subjects.value = res.data.subjects || []
  })
});
</script>
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
  justify-content: center;      /* 新增：让网格内容居中 */
  max-width: 2000px;            /* 新增：限制最大宽度 */
  margin: 0 auto;               /* 新增：居中整个网格 */
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

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.2rem;    /* 新增：移动端左右边距 */
    text-align: center;
  }
  .footer-col {
    margin-bottom: 1.5rem;
  }
}
</style>