<template>
  <el-container>
    <el-header style="padding: 5px">
      <el-menu
        router
        :default-active="
          this.$route.path.split('/')[2] == 'datacollection'
            ? '/pancreas/datacollection/singleupload'
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
          index="/pancreas/datacollection/singleupload"
          >数据录入与下载
        </el-menu-item>
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/pancreas/datamanage"
          >数据管理</el-menu-item
        >
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/datastatic"
          >数据统计</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main style="padding: 5px">
      <router-view></router-view>
    </el-main>
    <el-footer
      style="
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 0;
        background-color: #dcdfe6;
      "
    >
      <h1>胰腺数据管理系统</h1>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "PancreasData",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>