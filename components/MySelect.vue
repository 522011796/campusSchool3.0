<template>
  <div>
    <el-select
      v-model="value"
      v-bind="selectModel"
      :setPlaceholder="setPlaceholder"
      :placeholder="selectPlaceholder"
      :size="size"
      :clearable="clearable"
      :disabled="disabled"
      :filterable="filterable"
      :loading="loading"
      :remote="remote"
      :remote-method="remoteMethod"
      @change="handleChange">

      <template v-if="group == false">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </template>

      <template v-if="group == true">
        <el-option-group
          v-for="itemGroup in options"
          :key="itemGroup.label"
          :label="itemGroup.label">
          <el-option
            v-for="itemChild in itemGroup.options"
            :key="itemChild.value"
            :label="itemChild.label"
            :value="itemChild.value">
          </el-option>
        </el-option-group>
      </template>
    </el-select>
  </div>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'mySelect',
    props: {
      placeholder: {
        default: '',
        type: String
      },
      selValue: {
        default: '',
        type: String
      },
      options: {
        default: function () {
          return [];
        },
        type: Array
      },
      size: {
        defalult: 'medium',
        validate: function (val) {
          return oneOf(val, ['large', 'medium', 'small', 'mini']);
        }
      },
      clearable: {
        default: false,
        type: Boolean
      },
      disabled: {
        default: false,
        type: Boolean
      },
      filterable: {
        default: false,
        type: Boolean
      },
      remote: {
        default: false,
        type: Boolean
      },
      loading: {
        default: false,
        type: Boolean
      },
      group: {
        default: false,
        type: Boolean
      },
      remoteMethod: {
        default: function (data) {
          return data;
        },
        type: Function
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      },
      setPlaceholder(){
        this.selectPlaceholder = this.placeholder ? this.placeholder : this.$t("请选择")
      }
    },
    data() {
      return {
        selectPlaceholder: '',
        value: ''
      }
    },
    methods: {
      handleChange(data) {
        this.$emit('change', data);
      }
    }
  }
</script>
