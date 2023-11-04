<template>
  <div>
    <div v-if="slotTop" class="padding-tb-5 padding-lr-10">
      <slot name="top" ref="slotTop"></slot>
    </div>
    <div class="padding-tb-5 padding-lr-10" v-if="showFilter == true">
      <el-input
        size="medium"
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
    </div>
    <div v-if="slotDefault" class="padding-tb-5 padding-lr-10">
      <slot name="middle" ref="slotDefault"></slot>
    </div>
    <div class="tree-container custom-el-tree margin-top-5">
      <el-tooltip v-if="showCampus" effect="dark" :content="campusName" placement="top">
        <div class="moon-content-text-ellipsis-class" :class="selectCampusAll == true ? 'tree-el-tree-all' : 'tree-el-tree-all-no'" @click="nodeClickCampusAll">
          {{campusName}}
        </div>
      </el-tooltip>

      <el-tree
        class="filter-tree"
        :data="data"
        :show-checkbox="showCheckbox"
        :filter-node-method="filterNode"
        :default-checked-keys="defaultCheckedKeys"
        :default-expanded-keys="defaultExpandedKeys"
        :currentNodeKey="currentNodeKey"
        ref="tree"
        node-key="id"
        :highlight-current="selectCampusAll == true ? false : true"
        @node-click="handleNodeClick"
        @check-change="handleCheckChange">

        <el-tooltip effect="dark" :content="node.label" placement="right" slot-scope="{ node, data }" >
          <span class="tree-text">{{node.label}}</span>
        </el-tooltip>
      </el-tree>
    </div>
  </div>
</template>

<script>
  import {oneOf} from "../../utils/utils";
  import mixins from "../../utils/mixins";
  export default {
    name: 'myElTree',
    mixins: [mixins],
    components: {},
    props: {
      showFilter: {
        default: true,
        type: Boolean
      },
      selValue: {
        default: false,
        type: [Boolean, Array, Number, String]
      },
      size: {
        defalult: 'small',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      defaultCheckedKeys: {
        default: function () {
          return [];
        },
        type: Array
      },
      defaultExpandedKeys: {
        default: function () {
          return [];
        },
        type: Array
      },
      currentNodeKey: {
        default: '',
        type: [String, Number]
      },
      width: {
        default: '',
        type: [String, Number]
      },
      iconExtra: {
        default: '',
        type: String
      },
      iconPrefix: {
        default: '',
        type: String
      },
      showCheckbox: {
        default: false,
        type: Boolean
      },
      opr: {
        default: false,
        type: Boolean
      },
      type: {
        default: '',
        type: String
      },
      subType: {
        default: '1',
        type: String
      },
      extraType: {
        default: '',
        type: String
      },
      showCampus: {
        default: true,
        type: Boolean
      }
    },
    computed: {
      selectModel(){
        this.dataCollege = this.setData(this.data);
      },
      setClass(){
        return [

        ]
      }
    },
    data() {
      return {
        data : [],
        filterText: '',
        slotDefault: false,
        slotTop: false,
        nodeTreeCurrentId: '7',
        selectCampusAll: true
      }
    },
    mounted() {
      this.slotDefault = this.$slots.middle !== undefined;
      this.slotTop = this.$slots.top !== undefined;
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        if(this.type == 1){
          await this.getCollegeInfoNew(this.subType);
          this.data = this.dataCollege;
        }else if(this.type == 2){
          await this.getDormBuildInfo(this.subType);
          this.data = this.dataDormBuild;
        }else if(this.type == 3){
          await this.getSchoolBuildInfo(this.subType);
          this.data = this.dataSchoolBuild;
        }else if(this.type == 4){
          await this.getDeptInfo(this.subType);
          this.data = this.dataDept;
        }else if(this.type == 100){
          await this.getAppletInfo(this.extraType);
          this.data = this.dataApplet;
        }else if(this.type == 110){//应用默认选择用，不显示学校和默认选中第一个
          await this.getAppletServerInfo(this.extraType);
          this.data = this.dataAppletServer;
          this.selectCampusAll = false;
          this.$nextTick(() => {
            if (this.$refs.tree){
              this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
            }
          });
        }else if(this.type == 130){//系统服务应用选择用，不显示学校和默认选中第一个
          await this.getAppletSystemServerInfo(this.extraType);
          this.data = this.dataAppletSystemServer;
          this.selectCampusAll = false;
          this.$nextTick(() => {
            if (this.$refs.tree){
              this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
            }
          });
        }else if(this.type == 140){//管理财务应用选择用，不显示学校和默认选中第一个
          await this.getAppletFDServerInfo(this.extraType);
          this.data = this.dataAppletFDServer;
          this.selectCampusAll = false;
          this.$nextTick(() => {
            if (this.$refs.tree){
              this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
            }
          });
        }else if(this.type == 150){//角色选择用，不显示学校和默认选中第一个
          await this.getRoleTreeInfo(this.extraType);
          this.data = this.dataRoleTreeList;
        }else if(this.type == 111){
          await this.getAppletServerInfo(this.extraType);
          this.data = this.dataAppletServer;
        }else if(this.type == 120){//只查询流程
          await this.getLinkProcessInfo();
          this.data = this.dataProcessServer;
          this.selectCampusAll = false;
          this.$nextTick(() => {
            if (this.$refs.tree){
              this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
            }
          });
        }else if(this.type == 121){ //自定义环节
          await this.getLinkProcessLinkInfo(this.subType);
          this.data = this.dataProcessLinkServer;
          this.selectCampusAll = false;
          this.$nextTick(() => {
            if (this.$refs.tree){
              this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
            }
          });
        }
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data) {
        this.selectCampusAll = false;
        this.$emit('node-click', data);
      },
      handleCheckChange(data, checked, indeterminate){
        this.$emit('check-change', data, checked, indeterminate);
      },
      nodeClickCampusAll(data){
        this.selectCampusAll = true;
        this.$emit('all-click', data);
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      },
      type(val){
        this.initInfo();
      },
      subType(val){
        this.initInfo();
      }
    }
  }
</script>

<style scoped>
.tree-el-tree-all{
  height: 25px;
  line-height: 25px;
  background: #f0f7ff;
  padding: 3px 10px;
  text-align: left;
  font-size: 14px;
  color: #606266;
}
.tree-el-tree-all-no{
  height: 25px;
  line-height: 25px;
  padding: 3px 10px;
  text-align: left;
  font-size: 14px;
  color: #606266;
}
.tree-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
</style>
