<template>
  <v-chart class="chart" :option="option"></v-chart>
</template>

<script>
import axios from "axios";
const baseUrl = "http://122.144.180.37:8001/";
const getAllData = baseUrl + "queryall/";
export default {
  name: "AllChart",
  data() {
    return {
      allData: [],
      positionDis: [],

      option: {
        title: {
          text: "所有病例影像部位分布",
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
          data: ["胰腺", "肺部", "眼底", "不详"],
        },
        series: [
          {
            name: "影像部位",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "60%"],
            data: [
              { value: null, name: "胰腺" },
              { value: null, name: "肺部" },
              { value: null, name: "眼底" },
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

        this.positionDis[0] = this.allData.filter((data) => {
          return data.position === "胰腺";
        }).length;
        this.positionDis[1] = this.allData.filter((data) => {
          return data.position === "肺部";
        }).length;
        this.positionDis[2] = this.allData.filter((data) => {
          return data.position === "眼底";
        }).length;
        this.positionDis[3] =
          this.allData.length -
          this.positionDis[0] -
          this.positionDis[1] -
          this.positionDis[2];

        this.option.series[0].data[0]["value"] = this.positionDis[0];
        this.option.series[0].data[1]["value"] = this.positionDis[1];
        this.option.series[0].data[2]["value"] = this.positionDis[2];
        this.option.series[0].data[3]["value"] = this.positionDis[3];
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