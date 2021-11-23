<template>
  <div>
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
      <!-- <el-table-column label="姓名" prop="name"> </el-table-column> -->
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
            @click="handleImg(scope.$index, scope.row)"
            style="margin-right: 15px"
            >查看影像</el-button
          >
          <el-dialog :visible.sync="dialogVisible" width="40%">
            <el-image :src="'data:image/jpeg;base64,' + img_base64"></el-image>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
const baseUrl = "http://122.144.180.37:8001/";
const getAllData = baseUrl + "queryall/";
const deleteData = baseUrl + "deleteitem/";
const viewImg = baseUrl + "viewjpg/";
export default {
  inject: ["reload"], //删除表项的时候可以刷新此组件
  name: "LungsDataManage",
  data() {
    return {
      tableHeight: null,
      tableData: [],
      search: "",
      loading: true,
      img_base64: "",
      dialogVisible: false,
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
            return data.position === "肺部";
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
    handleDelete(index, row) {
      axios
        .get(deleteData, {
          params: {
            id: row.id,
          },
        })
        .then(
          (response) => {
            console.log("结果", response.data);
            this.reload();
          },
          (error) => {
            console.log("失败", error.message);
          }
        );
    },
  },
};
</script>