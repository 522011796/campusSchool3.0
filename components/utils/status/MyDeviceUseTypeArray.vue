<template>
  <span>
    <div v-if="type && type != ''">
      <template v-if="type.split(',').length == 1">
        <el-tag type="success" size="small" v-for="(item, index) in type.split(',')" :key="index" style="margin-right: 2px">
          <label v-if="item == 0">{{$t("未定义类型")}}</label>
          <label v-if="item == 1">{{$t("归寝签到")}}</label>
          <label v-if="item == 2">{{$t("课堂签到")}}</label>
          <label v-if="item == 3">{{$t("门禁直连用")}}</label>
          <label v-if="item == 4">{{$t("门禁控制器用")}}</label>
          <label v-if="item == 5">{{$t("智慧迎新用")}}</label>
        </el-tag>
      </template>
      <template v-if="type.split(',').length > 1">
        <el-popover
          placement="right"
          trigger="click">
          <template>
            <div v-for="(item, index) in type.split(',')" :key="index" style="margin-bottom: 2px">
              <el-tag size="small">
                <label v-if="item == 0">{{$t("未定义类型")}}</label>
                <label v-if="item == 1">{{$t("归寝签到")}}</label>
                <label v-if="item == 2">{{$t("课堂签到")}}</label>
                <label v-if="item == 3">{{$t("门禁直连用")}}</label>
                <label v-if="item == 4">{{$t("门禁控制器用")}}</label>
                <label v-if="item == 5">{{$t("智慧迎新用")}}</label>
              </el-tag>
            </div>
          </template>

          <template  slot="reference">
            <el-tag type="success" size="small" v-for="(item, index) in type.split(',')" :key="index" v-if="index == 0" style="margin-right: 2px">
              <label v-if="item == 0">{{$t("未定义类型")}}</label>
              <label v-if="item == 1">{{$t("归寝签到")}}</label>
              <label v-if="item == 2">{{$t("课堂签到")}}</label>
              <label v-if="item == 3">{{$t("门禁直连用")}}</label>
              <label v-if="item == 4">{{$t("门禁控制器用")}}</label>
              <label v-if="item == 5">{{$t("智慧迎新用")}}</label>
            </el-tag>

            <span class="fa fa-ellipsis-v"></span>
          </template>
        </el-popover>
      </template>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'myDeviceUseTypeArray',
    props: {
      type: {
        default: '',
        type: [String, Number]
      }
    },
    computed: {

    },
    data() {
      return {
        value: ''
      }
    },
    methods: {

    }
  }
</script>
