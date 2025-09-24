<template>
  <div class="filter-container my-6">
    <div class="flex gap-6">
      <!-- 行业选择 -->
      <div class="w-48">
        <el-select v-model="selectedIndustry" placeholder="行业" @change="onIndustryChange">
          <el-option label="所有" value="all" />
          <el-option label="航空" value="aviation" />
          <el-option label="航天" value="space" />
          <el-option label="兵器" value="weaponry" />
          <el-option label="船舶" value="ship" />
          <el-option label="民用" value="civil" />
        </el-select>
      </div>

      <!-- 学科选择 -->
      <div class="w-48">
        <el-select v-model="selectedSubject" placeholder="学科" @change="onSubjectChange">
          <el-option label="所有" value="all" />
          <el-option label="结构仿真模块" value="structure" />
          <el-option label="流体仿真模块" value="fluid" />
          <el-option label="电磁仿真模块" value="electromagnetic" />
          <el-option label="辐射仿真模块" value="radiation" />
          <el-option label="多物理仿真模块" value="multiphysics" />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndustry: 'all',
      selectedSubject: 'all'
    }
  },
  methods: {
    onIndustryChange(val) {
      this.$emit('industry-change', val)
    },
    onSubjectChange(val) {
      this.$emit('subject-change', val)
    }
  }
}
</script>
<style scoped>
.filter-container {
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.el-select {
  border-radius: 8px;
  font-size: 14px;
}

.el-select .el-input__inner {
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.el-select .el-input__inner:focus {
  border-color: #409eff;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.1);
}
</style>