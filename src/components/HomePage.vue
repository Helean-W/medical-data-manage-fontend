<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="8"
            ><div>
              <img
                src="../assets/imgs/logo.jpg"
                alt=""
                style="width: 130px; height: 45px"
              /></div
          ></el-col>
          <el-col :span="8"
            ><div style="text-align: center">
              <h1 style="font-size: 27px">医疗影像大数据平台</h1>
            </div></el-col
          >
          <el-col :span="8"></el-col>
          <!-- <el-col :span="4" class="login">
            <nav style="position: absolute; right: 3%">
              <a href="">注册</a> |
              <router-link :to="{ name: 'login' }">登陆</router-link>
            </nav>
          </el-col> -->
        </el-row>
      </el-header>
      <el-main>
        <div>
          <el-carousel
            class="mainInfo"
            style="width: 85%; margin: 10px auto 20px; height: 500px"
          >
            <el-carousel-item style="height: 500px">
              <div style="height: 100%; width: 100%; cursor: pointer">
                <img
                  src="../assets/imgs/1.jpg"
                  alt=""
                  style="height: 100%; width: 100%; margin: 0"
                />
              </div>
            </el-carousel-item>
            <el-carousel-item style="height: 500px">
              <div style="height: 100%; width: 100%; cursor: pointer">
                <img
                  src="../assets/imgs/2.jpg"
                  alt=""
                  style="height: 100%; width: 100%; margin: 0"
                />
              </div>
            </el-carousel-item>
            <el-carousel-item style="height: 500px">
              <div style="height: 100%; width: 100%; cursor: pointer">
                <img
                  src="../assets/imgs/3.jpg"
                  alt=""
                  style="height: 100%; width: 100%; margin: 0"
                />
              </div>
            </el-carousel-item>
            <el-carousel-item style="height: 500px">
              <div style="height: 100%; width: 100%; cursor: pointer">
                <img
                  src="../assets/imgs/4.jpg"
                  alt=""
                  style="height: 100%; width: 100%; margin: 0"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <hr color="#808080" />
        <div class="item">
          <ul style="margin-top: 40px">
            <li v-for="(data, index) in tumorType" :key="index">
              <router-link :to="{ path: data.linkPath }">
                <img :src="data.img" :alt="data.type" />
                <br />
                <br />
                <span class="tumorType">{{ data.type }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <hr color="#808080" />

        <div class="item">
          <ul style="margin-top: 40px; font-size: 1.25rem">
            <li>
              <router-link :to="{ path: '/autodiag/gradeye/upload' }">
                <img src="../assets/imgs/server.png" alt="AI诊断系统" />
                <br />
                <br />
                <span class="tumorType">AI诊断系统</span>
              </router-link>
            </li>
          </ul>
        </div>

        <hr color="#808080" />

        <div class="footer" style="color: white">
          <ul>
            <li>
              Copyright fudan university all rights reserved 版权所有:复旦大学
            </li>
          </ul>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      tumorType: [
        {
          type: "肺部",
          linkPath: "/lungs/datacollection/singleupload",
          img: require("../assets/imgs/lung.jpg"),
        },
        {
          type: "眼底",
          linkPath: "/eyes/datacollection/singleupload",
          img: require("../assets/imgs/eye.png"),
        },
        {
          type: "胰腺",
          linkPath: "/pancreas/datacollection/singleupload",
          img: require("../assets/imgs/pancre.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}

/* .el-carousel__item h2 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.el-header {
  background-color: white;
  color: #333;
  line-height: 75px;
}
.el-main {
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  background: #6ba2d6;
  text-align: center;
}
* {
  margin: 0;
}
.header {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 90px;
  background-color: darkorange;
  color: black;
  width: 100%;
  font-size: 25px;
  text-align: center;
  line-height: 60px;
}
.item {
  position: relative;
  width: 100%;
  margin: 20px 0 20px 0;
}
.item li {
  display: inline-block;
  width: 300px;
  height: 300px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 15px;
  padding-top: 30px;
}
.item li:hover {
  background-color: #b3c0d1;
  border-radius: 25px;
  box-shadow: #000000;
}
.mainInfo li {
  display: inline-block;
  color: black;
  text-align: left;
  height: 650px;
  background-size: 100% 100%;
  width: 84%;
  position: relative;
  margin: 50px 0 50px 0;
  text-align: left;
}

.footer li,
.mainInfo li,
.login li {
  list-style: none;
}
.login li {
  display: inline-block;
  line-height: 30px;
  margin-left: 10px;
  padding-left: 10px;
  position: absolute;
  right: 20%;
  height: 30px;
}
img {
  margin: 4px;
  width: 200px;
  height: 200px;
}

/*  注册登陆按钮*/
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.tumorType {
  font-size: 1.25rem;
}

.alldata-analy {
  height: 50px;
  line-height: 50px;
  width: 86%;
  background-color: white;
  margin: 20px auto;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}
</style>
