<template>
  <div>
    <div>
      <el-input
        v-if="showFilter"
        :size="fliterSize"
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
    </div>
    <div class="margin-top-10">
      <el-tree ref="tree" :data="data" :props="props"
               :show-checkbox="showCheckbox"
               :filter-node-method="filterNode"
               @node-click="handleNodeClick"
               @check-change="handleCheckChange">
      </el-tree>
    </div>
  </div>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'myTree',
    props: {
      showFilter: {
        default: false,
        type: Boolean
      },
      props: {
        default: function () {
          return {
            children: 'children',
            label: 'label'
          }
        },
        type: Object
      },
      showCheckbox: {
        default: false,
        type: Boolean
      },
      showType: {
        /**
         * 1: 学院(到班级)
         * 2: 教学楼(到楼层)
         * 3: 宿舍楼(到楼层)
         */
        default: '',
        validate: function (val) {
          return oneOf(val, ['1', '2', '3']);
        }
      },
      showChildType: {
        /**
         * 1: 学院/教学楼/宿舍楼
         * 2: 学院/教学楼/宿舍楼(到专业/楼)
         * 3: 学院/教学楼/宿舍楼(到年级/教学楼房间/到宿舍房间)
         * 4: 教学楼/宿舍楼(到教学楼房间/到宿舍房间)
         */
        default: '',
        validate: function (val) {
          return oneOf(val, ['1','2','3','4']);
        }
      },
      fliterSize: {
        default: 'small',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      }
    },
    computed: {

    },
    data() {
      return {
        value: [],
        data: [],
        filterText: '',
        dataDorm: [{
          label: '宿舍楼1',
          id: '1',
          children: [{
            label: '楼1',
            id: '2',
            unit: 1,
            children: [{
              label: '1层',
              id: '3',
              unit: 2,
              children: [{
                label: '1001',
                id: 4,
                unit: 3
              },{
                label: '1002',
                id: 5,
                unit: 3
              }]
            },{
              label: '2层',
              id: '6',
              unit: 2,
              children: [{
                label: '2001',
                id: 7,
                unit: 3
              },{
                label: '2002',
                id: 8,
                unit: 3
              }]
            }]
          }]
        },{
          label: '宿舍楼2',
          id: '11',
          children: [{
            label: '楼1',
            id: '12',
            unit: 1,
            children: [{
              label: '1层',
              id: '13',
              unit: 2,
              children: [{
                label: '1001',
                id: 14,
                unit: 3
              },{
                label: '1002',
                id: 15,
                unit: 3
              }]
            },{
              label: '2层',
              id: '16',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            }]
          }]
        }],
        dataCollege: [{
          label: '学院1',
          id: '1',
          children: [{
            label: '专业1',
            id: '11',
            unit: 1,
            children: [{
              label: '一年级',
              id: '1',
              unit: 2,
              children: [{
                label: '班级1',
                id: '1',
                unit: 3,
              },{
                label: '班级2',
                id: '2',
                unit: 3,
                disabled: true
              }]
            },{
              label: '二年级',
              id: '2',
              unit: 2,
            }]
          }]
        },{
          label: '学院2',
          id: '1',
          children: [{
            label: '专业2',
            id: '11',
            unit: 1,
            children: [{
              label: '一年级',
              id: '1',
              unit: 2,
              children: [{
                label: '班级1',
                id: '1',
                unit: 3,
              },{
                label: '班级2',
                id: '2',
                unit: 3,
                disabled: true
              }]
            },{
              label: '二年级',
              id: '2',
              unit: 2,
            }]
          }]
        }],
        dataClassBuild: [{
          label: '教学楼1',
          id: '1',
          children: [{
            label: '楼1',
            id: '11',
            unit: 1,
            children: [{
              label: '1层',
              id: '1',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            },{
              label: '2层',
              id: '2',
              unit: 2,
            }]
          }]
        },{
          label: '教学楼2',
          id: '1',
          children: [{
            label: '楼1',
            id: '11',
            unit: 1,
            children: [{
              label: '1层',
              id: '1',
              unit: 2,
            },{
              label: '2层',
              id: '2',
              unit: 2,
              children: [{
                label: '2001',
                id: 17,
                unit: 3
              },{
                label: '2002',
                id: 18,
                unit: 3
              }]
            }]
          }]
        }]
      }
    },
    created() {
      if (this.showType == '1'){
        this.getCollegeData();
      }else if (this.showType == '2'){
        this.getClassBuildData();
      }else if (this.showType == '3'){
        this.getDormBuildData();
      }
    },
    methods: {
      getCollegeData(){
        let dataArr = [];
        this.data = this.setChildData(this.dataCollege, dataArr);
      },
      getClassBuildData(){
        let dataArr = [];
        this.data = this.setChildData(this.dataClassBuild, dataArr);
      },
      getDormBuildData(){
        let dataArr = [];
        this.data = this.setChildData(this.dataDorm, dataArr);
      },
      setChildData(data, dataArr){
        data.map((item, index) => {
          if (this.showChildType == "1"){
            dataArr.push({
              label: item.label,
              id: item.id
            });
          }else if (this.showChildType == "2"){
            if (!item.unit || item.unit == 1){
              dataArr.push({
                label: item.label,
                id: item.id
              });
              if (item.children && item.children.length > 0){
                dataArr[index]['children'] = [];
                this.setChildData(item.children, dataArr[index].children);
              }
            }
          }else if (this.showChildType == "3"){
            if (!item.unit || item.unit == 1 || item.unit == 2){
              dataArr.push({
                label: item.label,
                id: item.id
              });
              if (item.children && item.children.length > 0){
                dataArr[index]['children'] = [];
                this.setChildData(item.children, dataArr[index].children);
              }
            }
          }else if (this.showChildType == "4"){
            if (!item.unit || item.unit == 1 || item.unit == 2 || item.unit == 3){
              dataArr.push({
                label: item.label,
                id: item.id
              });
              if (item.children && item.children.length > 0){
                dataArr[index]['children'] = [];
                this.setChildData(item.children, dataArr[index].children);
              }
            }
          }else {
            dataArr.push(item);
          }
        });
        return dataArr;
      },
      handleNodeClick(data) {
        this.$emit('node-click', data);
      },
      handleCheckChange(data, checked, indeterminate){
        this.$emit('check-change', data, checked, indeterminate);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    }
  }
</script>
