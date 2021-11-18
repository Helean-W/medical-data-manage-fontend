<template>
  <v-chart class="chart" :option="option"></v-chart>
</template>

<script>
import axios from "axios";
const baseUrl = "http://localhost:8001/";
const getAllData = baseUrl + "queryall/";
export default {
  name: "LungsChart",
  data() {
    return {
      allData: [],
      genderDis: [],

      option: {
        title: {
          text: "肺部病例分布",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
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
            data: [
              { value: null, name: "男" },
              { value: null, name: "女" },
              { value: null, name: "不详" },
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
    };
  },
  created() {
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
  },
};
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>