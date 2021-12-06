<template>
  <el-container>
    <el-header style="padding: 5px">
      <el-menu
        router
        :default-active="
          this.$route.path.split('/')[2] == 'datacollection'
            ? '/eyes/datacollection/singleupload'
            : this.$route.path.split('/')[2] == 'datastatic'
            ? '/eyes/datastatic/eyeschart'
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
          index="/eyes/datacollection/singleupload"
          >数据录入与下载
        </el-menu-item>
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/eyes/manualannotation"
          >手工标注
        </el-menu-item>
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/eyes/datamanage"
          >数据管理</el-menu-item
        >
        <el-menu-item
          style="padding-left: 40px; padding-right: 40px"
          index="/eyes/datastatic/eyeschart"
          >数据统计</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-main style="height: 83vh; padding: 5px">
      <router-view></router-view>
    </el-main>
    <el-footer style="text-align: center; background-color: #dcdfe6">
      <h1>眼底数据管理系统</h1>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "EyesData",
  data() {
    return {};
  },
  methods: {},
};
</script>