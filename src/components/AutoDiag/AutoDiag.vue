<template>
  <el-container>
    <el-header style="padding: 5px">
      <el-menu
        router
        :default-active="
          this.$route.path.split('/')[2] == 'gradeye'
            ? '/autodiag/gradeye/upload'
            : '/autodiag/segcov19/upload'
        "
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item style="padding-left: 40px; padding-right: 40px" index="/"
          >首页</el-menu-item
        >
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/autodiag/gradeye/upload"
          >糖尿病视网膜病变检测</el-menu-item
        >
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/autodiag/segcov19/upload"
          >COVID-19病灶分割
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="height: 83vh; padding: 5px">
      <router-view></router-view>
    </el-main>
    <el-footer style="text-align: center; background-color: #dcdfe6">
      <h1>AI诊断系统</h1>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "AutoDiag",
  data() {
    return {};
  },
  methods: {},
};
</script>