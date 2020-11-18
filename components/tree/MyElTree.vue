<template>
  <div>
    <div class="padding-tb-5 padding-lr-10">
      <el-input
        size="medium"
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
    </div>
    <div v-if="slotDefault" class="padding-tb-5 padding-lr-10">
      <slot ref="slotDefault"></slot>
    </div>
    <div class="tree-container custom-el-tree margin-top-5">
      <el-tree
        class="filter-tree"
        :data="data"
        :filter-node-method="filterNode"
        ref="tree"
        @node-click="handleNodeClick"
        @check-change="handleCheckChange">
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
      opr: {
        default: false,
        type: Boolean
      },
      type: {
        default: '',
        type: String
      },
      subType: {
        default: 1,
        type: String
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
        slotDefault: false
      }
    },
    mounted() {
      this.slotDefault = this.$slots.default !== undefined;
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        if(this.type == 1){
          await this.getCollegeInfo(this.subType);
          this.data = this.dataCollege;
        }else if(this.type == 2){
          await this.getDormBuildInfo(this.subType);
          this.data = this.dataDormBuild;
        }else if(this.type == 3){
          await this.getSchoolBuildInfo(this.subType);
          this.data = this.dataSchoolBuild;
        }
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data) {
        this.$emit('node-click', data);
      },
      handleCheckChange(data, checked, indeterminate){
        this.$emit('check-change', data, checked, indeterminate);
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    }
  }
</script>

<style scoped>

</style>
