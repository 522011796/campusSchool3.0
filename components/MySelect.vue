<template>
  <div>
    <el-select v-model="value" v-bind="selectModel" :placeholder="placeholder" :size="size" :clearable="clearable" :disabled="disabled" :filterable="filterable" @change="handleChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import {oneOf} from "../utils/utils";
  export default {
    name: 'mySelect',
    props: {
      placeholder: {
        default: '请选择',
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
      }
    },
    computed: {
      selectModel(){
        this.value = this.selValue;
      }
    },
    data() {
      return {
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
