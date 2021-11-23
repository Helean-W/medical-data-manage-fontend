<template>
  <div
    v-loading="diagLoading"
    element-loading-text="算法运行中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-table
      ref="multipleTable"
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
      <el-table-column label="部位" prop="position"> </el-table-column>
      <el-table-column label="影像" prop="url"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input
            v-model="search"
            size="small"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            style="margin-right: 15px"
            @click="handleImg(scope.$index, scope.row)"
            >查看影像</el-button
          >
          <el-dialog :visible.sync="dialogVisible" width="35%">
            <el-image :src="'data:image/jpeg;base64,' + img_base64"></el-image>
          </el-dialog>
          <el-button
            size="mini"
            type="primary"
            style="margin-right: 15px"
            @click="handleDiagnosis(scope.$index, scope.row)"
            >自动诊断</el-button
          >
          <el-dialog :visible.sync="dialogVisible2" width="30%" center>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-size: 25px">诊断结果</span>
              </div>
              <div class="text item" style="font-size: 23px; font-weight: bold">
                糖网病等级为: {{ diagnosticResult }}
              </div>
            </el-card>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible2 = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
const baseUrl = "http://122.144.180.37:8001/";
const getAllData = baseUrl + "queryall/";
const viewImg = baseUrl + "viewjpg/";
const diagImg = baseUrl + "gradexist/";
export default {
  inject: ["reload"],
  name: "SelectEye",
  data() {
    return {
      diagLoading: false,
      tableHeight: null,
      tableData: [],
      search: "",
      loading: true,
      img_base64: "",
      dialogVisible: false,
      dialogVisible2: false,
      diagnosticResult: "",
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
            this.tableData.push(temp);
          }
          this.tableData = this.tableData.filter((data) => {
            return data.position === "眼底";
          });
        }
        this.loading = false;
      },
      (error) => {
        console.log("获取失败", error.message);
      }
    );
    console.log(this.tableData);
  },
  beforeMount() {
    // console.log(window.innerHeight);
    this.tableHeight = window.innerHeight - 250; //表格自适应高度
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
    handleDiagnosis(index, row) {
      this.diagLoading = true;
      axios
        .get(diagImg, {
          params: {
            id: row.id,
          },
        })
        .then(
          (response) => {
            console.log("结果", response.data);
            switch (response.data.data) {
              case "0":
                this.diagnosticResult = "等级0-无病";
                break;
              case "1":
                this.diagnosticResult = "等级1-轻度糖网病";
                break;
              case "2":
                this.diagnosticResult = "等级2-中度糖网病";
                break;
              case "3":
                this.diagnosticResult = "等级3-重度糖网病";
                break;
              case "4":
                this.diagnosticResult = "等级4-增殖期糖网病";
                break;
            }
            this.diagLoading = false;
            this.dialogVisible2 = true;
          },
          (error) => {
            console.log("失败", error.message);
            this.diagLoading = false;
          }
        );
      console.log(index, row);
    },
  },
};
</script>