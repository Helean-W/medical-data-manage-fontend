<template>
  <el-container>
    <el-header style="padding: 5px">
      <el-menu
        router
        :default-active="
          this.$route.path.split('/')[2] == 'datacollection'
            ? '/lungs/datacollection/singleupload'
            : this.$route.path.split('/')[2] == 'datastatic'
            ? '/lungs/datastatic/lungschart'
            : this.$route.path
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
          index="/lungs/datacollection/singleupload"
          >数据录入与下载
        </el-menu-item>
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/lungs/datamanage"
          >数据管理</el-menu-item
        >
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/lungs/datastatic/lungschart"
          >数据统计</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main style="height: 83vh; padding: 5px">
      <router-view></router-view>
    </el-main>
    <el-footer style="text-align: center; background-color: #dcdfe6">
      <h1>肺部数据管理系统</h1>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "LungsData",
  data() {
    return {};
  },
  methods: {},
};
</script>