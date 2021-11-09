<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2"
            ><div>
              <img
                src="../assets/imgs/logo.png"
                alt=""
                style="
                  width: 150px;
                  height: 55px;
                  position: absolute;
                  top: 5px;
                  left: 0;
                  z-index: 9999;
                "
              /></div
          ></el-col>
          <el-col :span="20"
            ><h1 style="position: absolute; left: 40%">
              多维医疗影像数据管理系统
            </h1></el-col
          >
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
            style="width: 85%; margin: 10px auto 20px; height: 400px"
          >
            <el-carousel-item style="height: 400px">
              <div style="height: 100%; width: 100%; cursor: pointer">
                <img
                  src="../assets/imgs/bg.png"
                  alt=""
                  style="height: 100%; width: 100%; margin: 0"
                />
              </div>
            </el-carousel-item>
            <el-carousel-item style="height: 400px">
              <div style="height: 100%; width: 100%; cursor: pointer">
                <img
                  src="../assets/imgs/a.png"
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
            <li @click="toAICompute">
              <img src="../assets/imgs/server.png" alt="平台服务" /><br />{{
                AI
              }}
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
        // {
        //   type: "乳腺肿瘤",
        //   linkPath: "/data/breast/datacollection",
        //   img: require("../assets/imgs/breast.png"),
        // },
        {
          type: "肺癌",
          linkPath: "/data/lung/datacollection",
          img: require("../assets/imgs/lung.jpg"),
        },
        {
          type: "肝癌",
          linkPath: "/data/liver/datacollection",
          img: require("../assets/imgs/liver.jpg"),
        },
        {
          type: "胰腺肿瘤",
          linkPath: "/pancreas/datacollection/singleupload",
          img: require("../assets/imgs/pancre.png"),
        },
      ],
      AI: "AI诊断系统",
    };
  },
  methods: {
    toAICompute() {
      this.$router.push({ path: "/AICompute" });
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}

.el-carousel__item h2 {
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
}
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
  background-image: url(../assets/imgs/bg.png);
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
