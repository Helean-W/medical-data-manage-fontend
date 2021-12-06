<template>
  <div style="height: 80%">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            String(data['id']).includes(search) ||
            String(data['gender']).includes(search) ||
            String(data['age']).includes(search) ||
            String(data['position']).includes(search)
        )
      "
      stripe
      v-loading="loading"
      :max-height="tableHeight"
      style="width: 100%"
    >
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="性别" prop="gender"> </el-table-column>
      <el-table-column label="年龄" prop="age"> </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="{}">
          <el-input
            v-model="search"
            size="small"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleImg(scope.$index, scope.row)"
            style="margin-right: 50px"
            >查看影像</el-button
          >
          <el-dialog :visible.sync="dialogVisible" width="40%">
            <el-image :src="'data:image/jpeg;base64,' + img_base64"></el-image>
          </el-dialog>
          <el-select
            v-model="annotation[scope.$index]"
            placeholder="请选择眼病类别"
            @change="handleChange($event, scope.row)"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
const baseUrl = "http://122.144.180.37:8001/";
const getAllData = baseUrl + "queryall/";
const getAllAnnotation = baseUrl + "queryallannotation/";
const manualAnnotation = baseUrl + "manualannotation/";
const viewImg = baseUrl + "viewjpg/";
export default {
  inject: ["reload"], //删除表项的时候可以刷新此组件
  name: "ManualAnnotation",
  data() {
    return {
      tableHeight: null,
      tableData: [],
      search: "",
      loading: true,
      img_base64: "",
      dialogVisible: false,
      allAnnotation: [],
      options: [
        {
          value: "0-无糖网病",
          label: "0-无糖网病",
        },
        {
          value: "1-轻度非增殖期糖网病",
          label: "1-轻度非增殖期糖网病",
        },
        {
          value: "2-中度非增殖期糖网病",
          label: "2-中度非增殖期糖网病",
        },
        {
          value: "3-重度非增殖期糖网病",
          label: "3-重度非增殖期糖网病",
        },
        {
          value: "4-增殖期糖网病",
          label: "4-增殖期糖网病",
        },
        {
          value: "",
          label: "(未标注)",
        },
      ],
      annotation: [],
    };
  },
  created() {
    axios.get(getAllAnnotation).then(
      async (response) => {
        console.log("获取结果", response.data);
        if (response.data.ret.length != "undefined") {
          for (let i = 0; i < response.data.ret.length; i++) {
            let temp = {};
            temp["id"] = response.data.ret[i][0];
            temp["auto_annotation"] = response.data.ret[i][1];
            temp["manual_annotation"] = response.data.ret[i][2];
            this.allAnnotation.push(temp);
          }
        }
        await axios.get(getAllData).then(
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
                this.tableData.push(temp);
              }
              this.tableData = this.tableData.filter((data) => {
                return data.position === "眼底";
              });
              for (let i = 0; i < this.tableData.length; i++) {
                this.annotation[i] = "";
                for (let j = 0; j < this.allAnnotation.length; j++) {
                  if (
                    this.allAnnotation[j].id == this.tableData[i].id &&
                    this.allAnnotation[j].manual_annotation !== null
                  ) {
                    this.annotation[i] =
                      this.allAnnotation[j].manual_annotation;
                    break;
                  }
                }
              }
            }
            this.loading = false;
          },
          (error) => {
            console.log("获取失败", error.message);
            this.loading = false;
          }
        );
      },
      (error) => {
        console.log("获取失败", error.message);
      }
    );
  },
  beforeMount() {
    // console.log(window.innerHeight);
    this.tableHeight = window.innerHeight - 150; //表格自适应高度
  },
  methods: {
    handleImg(index, row) {
      axios
        .get(viewImg, {
          params: {
            url: row.url,
          },
        })
        .then(
          (response) => {
            this.img_base64 = response.data;
            this.dialogVisible = true;
          },
          (error) => {
            console.log("失败", error.message);
          }
        );
      console.log(index, row);
    },
    handleChange(annotation, row) {
      console.log(annotation, row);

      axios
        .get(manualAnnotation, {
          params: {
            id: row.id,
            annotation: annotation,
          },
        })
        .then(
          (response) => {
            console.log("结果", response.data);
            // this.reload();
          },
          (error) => {
            console.log("失败", error.message);
          }
        );
    },
  },
};
</script>