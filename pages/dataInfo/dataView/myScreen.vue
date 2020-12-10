<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">大屏管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="24">
            <div>
              <el-button-group>
                <el-button size="small" :type="expire == '' ? 'primary' : 'default'" @click="handleChange('')">{{$t("全部")}}</el-button>
                <el-button size="small" :type="expire == true ? 'primary' : 'default'" @click="handleChange(true)">{{$t("到期大屏")}}</el-button>
              </el-button-group>
              <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('大屏名称')" @click="search"></my-input-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5 custom-card-layout" :style="divHeight3">
          <div v-for="(item, index) in tableData" :key="index">
            <div class="screen-title">
              <span class="screen-title-tag"></span>
              <span style="position: relative; top: -5px;" class="color-warning">{{item.name}}</span>
            </div>
            <el-row :gutter="16" class="margin-top-5">
              <el-col :span="8" v-for="(itemChild, indexChild) in item.list" :key="indexChild" class="margin-bottom-20">
                <el-card :body-style="{padding: '0px'}" style="position: relative">
                  <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
                  <span class="color-grand" style="font-weight: bold">
                    <i class="fa fa-television"></i>
                    {{$t("全校课堂考勤专用")}}
                  </span>
                    <div class="pull-right">
                      <i class="fa fa-plus-circle color-grand margin-right-5" style="font-size: 16px" @click="addInfo()"></i>
                      <i class="fa fa-eye color-warning" style="font-size: 16px"></i>
                    </div>
                  </div>
                  <div class="padding-tb-5 padding-lr-5">
                    <div class="screen-item">
                      <img src="~static/img/screen-all-class.png" class="img-class">
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </layout-tb>
  </div>
</template>

<script>
  import MyPagination from "../../../components/MyPagination";
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import {deviceType, MessageError, MessageSuccess, setDormBuildChildren} from "../../../utils/utils";
  import LayoutTb from "../../../components/Layout/LayoutTb";
  import MySelect from "../../../components/MySelect";
  import MyUserType from "../../../components/utils/MyUserType";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import screenManageValidater from "../../../utils/validater/screenManageValidater";
  export default {
    mixins: [mixins, screenManageValidater],
    components: {MyPagination,LayoutTb,MySelect,MyUserType,MyDatePicker,MyInputButton,DialogNormal,DrawerLayoutRight},
    data(){
      return {
        tableData: [],
        tableStudentData: [],
        searchDate: [],
        typeList: [],
        searchKey: '',
        visible: false,
        modalVisible: false,
        drawerVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        expire: '',
        clearTime: '',
        action: '',
        subTitle: '',
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          screenName: this.searchKey,
          expire: this.expire
        };
        this.$axios.get(common.screen_my_page, {params: params}).then(res => {
          console.log(res);
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      addInfo(){

      },
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
      },
      handleChange(type){
        this.page = 1;
        this.expire = type;
        this.init();
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .screen-title-tag{
    height: 20px;
    width: 5px;
    border-radius: 5px;
    display: inline-block;
    background: #409EFF;
  }
  .screen-item{
    height: 180px;
  }
  .screen-title{
    background: #eeeeee;
    padding: 5px 5px;
  }
</style>
