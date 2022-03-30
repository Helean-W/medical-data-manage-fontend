<template>
  <el-row>
    <el-col :span="12"
      ><div><v-chart class="chart" :option="option"></v-chart></div
    ></el-col>
    <el-col :span="12"
      ><div><v-chart class="chart" :option="option2"></v-chart></div
    ></el-col>
  </el-row>
</template>

<script>
// import axios from "axios";
// const baseUrl = "http://122.144.180.37:8001/";
// const getAllData = baseUrl + "queryall/";
export default {
  name: "LungsChart",
  data() {
    return {
      allData: [],
      genderDis: [],

      option: {
        title: {
          text: "肺部影像性别分布",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%",
        },
        legend: {
          orient: "vertical",
          left: "left",
          top: "10%",
          data: ["男", "女", "不详"],
        },
        series: [
          {
            name: "病人性别",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "60%"],
            label: {
              normal: {
                show: true,
                formatter: "{b} - {d}%",
              },
            },
            data: [
              { value: 677, name: "男" },
              { value: 311, name: "女" },
              { value: 1077, name: "不详" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      option2: {
        title: {
          text: "肺部影像年龄分布",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: [
            "10岁以下",
            "11-20岁",
            "21-30岁",
            "31-40岁",
            "41-50岁",
            "51-60岁",
            "60岁以上",
          ],
        },
        yAxis: {
          name: "百分比(%)",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            type: "bar",
            name: "男",
            data: [1.93, 3.28, 6.04, 7.52, 11.23, 17.19, 52.81],
          },
          {
            type: "bar",
            name: "女",
            data: [1.31, 2.66, 3.79, 5.26, 14.07, 16.14, 56.77],
          },
        ],
      },
    };
  },
  /* created() {
    axios.get(getAllData).then(
      (response) => {
        console.log("获取结果", response.data);
        if (response.data.ret.length != "undefined") {
          for (let i = 0; i < response.data.ret.length; i++) {
            let temp = {};
            temp["id"] = response.data.ret[i][0];
            temp["gender"] = response.data.ret[i][1];
            temp["age"] = response.data.ret[i][2];
            temp["position"] = response.data.ret[i][3];
            temp["url"] = response.data.ret[i][4];
            this.allData.push(temp);
          }
        }
        this.loading = false;

        this.genderDis[0] = this.allData.filter((data) => {
          return data.position === "肺部" && data.gender === "男";
        }).length;
        this.genderDis[1] = this.allData.filter((data) => {
          return data.position === "肺部" && data.gender === "女";
        }).length;
        this.genderDis[2] =
          this.allData.filter((data) => {
            return data.position === "肺部";
          }).length -
          this.genderDis[0] -
          this.genderDis[1];
        this.option.series[0].data[0]["value"] = this.genderDis[0];
        this.option.series[0].data[1]["value"] = this.genderDis[1];
        this.option.series[0].data[2]["value"] = this.genderDis[2];
      },
      (error) => {
        console.log("获取失败", error.message);
      }
    );
  }, */
};
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>