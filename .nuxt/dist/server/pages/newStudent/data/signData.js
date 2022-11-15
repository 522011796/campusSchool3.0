exports.ids = [118];
exports.modules = {

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/search/MyInputButton.vue?vue&type=template&id=24852372&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('el-input',{style:(_vm.widthClass),attrs:{"size":_vm.size,"placeholder":_vm.placeholder,"clearable":_vm.clearable},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}},[(_vm.showSelect)?_c('el-select',{style:(_vm.selectWidthClass),attrs:{"slot":"prepend","clearable":_vm.clearable,"placeholder":_vm.$t('请选择')},on:{"change":_vm.selectChange},slot:"prepend",model:{value:(_vm.selectValue),callback:function ($$v) {_vm.selectValue=$$v},expression:"selectValue"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value,"disabled":item.disabled}})}),1):_vm._e()],1),_vm._ssrNode(" "),_c('el-button',{attrs:{"size":_vm.size,"type":_vm.type,"plain":_vm.plain},on:{"click":_vm.handleClick}},[(_vm.showIcon)?_c('i',{class:_vm.iconStyle}):_vm._e(),_vm._v("\n    "+_vm._s(_vm.$t("搜索"))+"\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/search/MyInputButton.vue?vue&type=template&id=24852372&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/search/MyInputButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MyInputButtonvue_type_script_lang_js_ = ({
  name: 'myInputButton',
  props: {
    placeholder: {
      default: '请输入内容',
      type: String
    },
    widthClass: {
      default: 'width: 150px',
      type: String
    },
    selectWidthClass: {
      default: 'width: 100px',
      type: String
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    type: {
      defalult: '',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['success', 'info', 'warning', 'danger', 'primary']);
      }
    },
    plain: {
      default: false,
      type: Boolean
    },
    iconStyle: {
      default: '',
      type: String
    },
    showSelect: {
      default: false,
      type: Boolean
    },
    clearable: {
      default: false,
      type: Boolean
    },
    options: {
      default: function () {
        return [];
      },
      type: Array
    }
  },
  computed: {},

  mounted() {
    this.showIcon = this.iconStyle !== '';
  },

  data() {
    return {
      inputValue: '',
      selectValue: '',
      showIcon: false
    };
  },

  methods: {
    handleClick(data) {
      let obj = {};

      if (!!this.selectValue) {
        obj = {
          select: this.selectValue,
          input: this.inputValue
        };
      } else if (!this.selectValue) {
        obj = {
          input: this.inputValue
        };
      }

      this.$emit('click', obj);
    },

    selectChange(data) {
      this.selectValue = data;
    }

  }
});
// CONCATENATED MODULE: ./components/search/MyInputButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_MyInputButtonvue_type_script_lang_js_ = (MyInputButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/search/MyInputButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_MyInputButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a160526e"
  
)

/* harmony default export */ var MyInputButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySelect.vue?vue&type=template&id=6f874b25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-select',_vm._b({style:(_vm.width),attrs:{"setPlaceholder":_vm.setPlaceholder,"placeholder":_vm.selectPlaceholder,"size":_vm.size,"clearable":_vm.clearable,"disabled":_vm.disabled,"filterable":_vm.filterable,"loading":_vm.loading,"remote":_vm.remote,"remote-method":_vm.remoteMethod,"setWidth":_vm.setWidth},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-select',_vm.selectModel,false),[(_vm.group == false)?_vm._l((_vm.options),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value,"disabled":item.disabled}})}):_vm._e(),_vm._v(" "),(_vm.group == true)?_vm._l((_vm.options),function(itemGroup){return _c('el-option-group',{key:itemGroup.label,attrs:{"label":itemGroup.label}},_vm._l((itemGroup.options),function(itemChild){return _c('el-option',{key:itemChild.value,attrs:{"label":itemChild.label,"value":itemChild.value}})}),1)}):_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MySelect.vue?vue&type=template&id=6f874b25&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MySelectvue_type_script_lang_js_ = ({
  name: 'mySelect',
  props: {
    placeholder: {
      default: '',
      type: String
    },
    selValue: {
      default: '',
      type: [String, Number, Boolean]
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
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
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
    },
    widthStyle: {
      default: '',
      type: [String, Number]
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    },

    setPlaceholder() {
      this.selectPlaceholder = this.placeholder ? this.placeholder : this.$t("请选择");
    },

    setWidth() {
      if (!!this.widthStyle) {
        this.width = {
          'width': this.widthStyle + "px"
        };
      }
    }

  },

  data() {
    return {
      selectPlaceholder: '',
      value: '',
      width: ''
    };
  },

  methods: {
    handleChange(data) {
      this.$emit('change', data);
    }

  }
});
// CONCATENATED MODULE: ./components/MySelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MySelectvue_type_script_lang_js_ = (MySelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MySelect.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MySelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15d91728"
  
)

/* harmony default export */ var MySelect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyDatePicker.vue?vue&type=template&id=3333b316&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('el-date-picker',_vm._b({style:(_vm.width),attrs:{"type":_vm.type,"placeholder":_vm.placeholder,"size":_vm.size,"disabled":_vm.disabled,"readonly":_vm.readonly,"range-separator":_vm.rangeSeparator,"start-placeholder":_vm.startPlaceholder,"end-placeholder":_vm.endPlaceholder,"unlink-panels":_vm.unlinkPanels,"format":_vm.format,"value-format":_vm.valueFormat,"picker-options":_vm.pickerOptions,"setWidth":_vm.setWidth,"clearable":_vm.clearable},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-date-picker',_vm.selectModel,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MyDatePicker.vue?vue&type=template&id=3333b316&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyDatePicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MyDatePickervue_type_script_lang_js_ = ({
  name: 'myDatePicker',
  props: {
    selValue: {
      default: '',
      type: [Array, String]
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    type: {
      defalult: 'date',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange']);
      }
    },
    placeholder: {
      default: '选择日期',
      type: String
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    widthStyle: {
      default: '',
      type: [String, Number]
    },
    disabled: {
      default: false,
      type: Boolean
    },
    readonly: {
      default: false,
      type: Boolean
    },
    rangeSeparator: {
      default: '至',
      type: String
    },
    startPlaceholder: {
      default: '开始时间',
      type: String
    },
    endPlaceholder: {
      default: '结束时间',
      type: String
    },
    format: {
      default: 'yyyy-MM-dd',
      type: String
    },
    valueFormat: {
      default: 'yyyy-MM-dd',
      type: String
    },
    unlinkPanels: {
      default: true,
      type: Boolean
    },
    clearable: {
      default: false,
      type: Boolean
    },
    editable: {
      default: false,
      type: Boolean
    },
    pickerOptions: {
      default: function () {
        return {};
      },
      type: Object
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    },

    setWidth() {
      if (!!this.widthStyle) {
        this.width = {
          'width': this.widthStyle + "px"
        };
      }
    }

  },

  mounted() {},

  data() {
    return {
      value: '',
      width: ''
    };
  },

  methods: {
    handleChange(data) {
      this.$emit('change', data);
    }

  }
});
// CONCATENATED MODULE: ./components/MyDatePicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MyDatePickervue_type_script_lang_js_ = (MyDatePickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MyDatePicker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MyDatePickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9ffd1bf0"
  
)

/* harmony default export */ var MyDatePicker = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ca81b0e2", content, true, context)
};

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/select/MyCascader.vue?vue&type=template&id=39aac623&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-cascader',_vm._b({ref:"cascaderSelector",style:(_vm.width),attrs:{"options":_vm.data,"setWidth":_vm.setWidth,"disabled":_vm.disabled,"clearable":_vm.clearable,"size":_vm.size,"props":_vm.props,"placeholder":_vm.placeholder,"collapse-tags":_vm.collapseTags},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-cascader',_vm.selectModel,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/select/MyCascader.vue?vue&type=template&id=39aac623&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/select/MyCascader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MyCascadervue_type_script_lang_js_ = ({
  name: 'myCascader',
  mixins: [mixins["a" /* default */]],
  props: {
    selValue: {
      default: function () {
        return [];
      },
      type: Array
    },
    props: {
      default: function () {
        return {};
      },
      type: Object
    },
    placeholder: {
      default: '请选择',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    clearable: {
      default: false,
      type: Boolean
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    type: {
      default: '',
      type: String
    },
    subType: {
      default: 1,
      type: String
    },
    widthStyle: {
      default: '',
      type: [String, Number]
    },
    collapseTags: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    },

    setWidth() {
      if (!!this.widthStyle) {
        this.width = {
          'width': this.widthStyle + "px"
        };
      }
    }

  },

  data() {
    return {
      value: '',
      options: [],
      width: '',
      data: []
    };
  },

  created() {
    this.initInfo();
  },

  methods: {
    async initInfo() {
      if (this.type == 1) {
        await this.getCollegeInfo(this.subType);
        this.data = this.dataCollege;
      } else if (this.type == 2) {
        await this.getDormBuildInfo(this.subType);
        this.data = this.dataDormBuild;
      } else if (this.type == 3) {
        await this.getSchoolBuildInfo(this.subType);
        this.data = this.dataSchoolBuild;
      } else if (this.type == 4) {
        await this.getDeptInfo(this.subType);
        this.data = this.dataDept;
      } else if (this.type == 5) {
        await this.getRoleTreeInfo();
        this.data = this.dataRoleTreeList;
      }
    },

    handleChange(data) {
      this.$emit('change', data);
    }

  },
  watch: {
    type(val) {
      this.initInfo();
    },

    subType(val) {
      this.initInfo();
    }

  }
});
// CONCATENATED MODULE: ./components/utils/select/MyCascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_MyCascadervue_type_script_lang_js_ = (MyCascadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/select/MyCascader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  select_MyCascadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7344a2af"
  
)

/* harmony default export */ var MyCascader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tree/MyElTree.vue?vue&type=template&id=3c5e5d0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.slotTop)?_vm._ssrNode("<div class=\"padding-tb-5 padding-lr-10\" data-v-3c5e5d0c>","</div>",[_vm._t("top")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"padding-tb-5 padding-lr-10\" data-v-3c5e5d0c>","</div>",[_c('el-input',{attrs:{"size":"medium","placeholder":"输入关键字进行过滤"},model:{value:(_vm.filterText),callback:function ($$v) {_vm.filterText=$$v},expression:"filterText"}})],1),_vm._ssrNode(" "),(_vm.slotDefault)?_vm._ssrNode("<div class=\"padding-tb-5 padding-lr-10\" data-v-3c5e5d0c>","</div>",[_vm._t("middle")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tree-container custom-el-tree margin-top-5\" data-v-3c5e5d0c>","</div>",[(_vm.showCampus)?_c('el-tooltip',{attrs:{"effect":"dark","content":_vm.campusName,"placement":"top"}},[_c('div',{staticClass:"moon-content-text-ellipsis-class",class:_vm.selectCampusAll == true ? 'tree-el-tree-all' : 'tree-el-tree-all-no',on:{"click":_vm.nodeClickCampusAll}},[_vm._v("\n        "+_vm._s(_vm.campusName)+"\n      ")])]):_vm._e(),_vm._ssrNode(" "),_c('el-tree',{ref:"tree",staticClass:"filter-tree",attrs:{"data":_vm.data,"show-checkbox":_vm.showCheckbox,"filter-node-method":_vm.filterNode,"default-checked-keys":_vm.defaultCheckedKeys,"default-expanded-keys":_vm.defaultExpandedKeys,"currentNodeKey":_vm.currentNodeKey,"node-key":"id","highlight-current":_vm.selectCampusAll == true ? false : true},on:{"node-click":_vm.handleNodeClick,"check-change":_vm.handleCheckChange}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/tree/MyElTree.vue?vue&type=template&id=3c5e5d0c&scoped=true&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tree/MyElTree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MyElTreevue_type_script_lang_js_ = ({
  name: 'myElTree',
  mixins: [mixins["a" /* default */]],
  components: {},
  props: {
    selValue: {
      default: false,
      type: [Boolean, Array, Number, String]
    },
    size: {
      defalult: 'small',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
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
    selectModel() {
      this.dataCollege = this.setData(this.data);
    },

    setClass() {
      return [];
    }

  },

  data() {
    return {
      data: [],
      filterText: '',
      slotDefault: false,
      slotTop: false,
      nodeTreeCurrentId: '7',
      selectCampusAll: true
    };
  },

  mounted() {
    this.slotDefault = this.$slots.middle !== undefined;
    this.slotTop = this.$slots.top !== undefined;
  },

  created() {
    this.initInfo();
  },

  methods: {
    async initInfo() {
      await this.getSessionInfo();

      if (this.type == 1) {
        await this.getCollegeInfo(this.subType);
        this.data = this.dataCollege;
      } else if (this.type == 2) {
        await this.getDormBuildInfo(this.subType);
        this.data = this.dataDormBuild;
      } else if (this.type == 3) {
        await this.getSchoolBuildInfo(this.subType);
        this.data = this.dataSchoolBuild;
      } else if (this.type == 4) {
        await this.getDeptInfo(this.subType);
        this.data = this.dataDept;
      } else if (this.type == 100) {
        await this.getAppletInfo(this.extraType);
        this.data = this.dataApplet;
      } else if (this.type == 110) {
        //应用默认选择用，不显示学校和默认选中第一个
        await this.getAppletServerInfo(this.extraType);
        this.data = this.dataAppletServer;
        this.selectCampusAll = false;
        this.$nextTick(() => {
          if (this.$refs.tree) {
            this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
          }
        });
      } else if (this.type == 111) {
        await this.getAppletServerInfo(this.extraType);
        this.data = this.dataAppletServer;
      } else if (this.type == 120) {
        //只查询流程
        await this.getLinkProcessInfo();
        this.data = this.dataProcessServer;
        this.selectCampusAll = false;
        this.$nextTick(() => {
          if (this.$refs.tree) {
            this.$refs.tree.setCurrentKey(this.currentNodeKey); //一定要加这个选中了否则样式没有出来
          }
        });
      } else if (this.type == 121) {
        //自定义环节
        await this.getLinkProcessLinkInfo(this.subType);
        this.data = this.dataProcessLinkServer;
        this.selectCampusAll = false;
        this.$nextTick(() => {
          if (this.$refs.tree) {
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

    handleCheckChange(data, checked, indeterminate) {
      this.$emit('check-change', data, checked, indeterminate);
    },

    nodeClickCampusAll(data) {
      this.selectCampusAll = true;
      this.$emit('all-click', data);
    }

  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },

    type(val) {
      this.initInfo();
    },

    subType(val) {
      this.initInfo();
    }

  }
});
// CONCATENATED MODULE: ./components/tree/MyElTree.vue?vue&type=script&lang=js&
 /* harmony default export */ var tree_MyElTreevue_type_script_lang_js_ = (MyElTreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/tree/MyElTree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tree_MyElTreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c5e5d0c",
  "f48bcddc"
  
)

/* harmony default export */ var MyElTree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/LayoutLr.vue?vue&type=template&id=42aaf4c3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"layout-left-menu animated fadeInLeft\" data-v-42aaf4c3>","</div>",[_vm._t("left")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"layout-right-menu\" data-v-42aaf4c3>","</div>",[_vm._t("right")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Layout/LayoutLr.vue?vue&type=template&id=42aaf4c3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/LayoutLr.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LayoutLrvue_type_script_lang_js_ = ({
  name: 'LayoutLr'
});
// CONCATENATED MODULE: ./components/Layout/LayoutLr.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_LayoutLrvue_type_script_lang_js_ = (LayoutLrvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Layout/LayoutLr.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Layout_LayoutLrvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "42aaf4c3",
  "216af005"
  
)

/* harmony default export */ var LayoutLr = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyElTree_vue_vue_type_style_index_0_id_3c5e5d0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyElTree_vue_vue_type_style_index_0_id_3c5e5d0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyElTree_vue_vue_type_style_index_0_id_3c5e5d0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyElTree_vue_vue_type_style_index_0_id_3c5e5d0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyElTree_vue_vue_type_style_index_0_id_3c5e5d0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyElTree_vue_vue_type_style_index_0_id_3c5e5d0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tree-el-tree-all[data-v-3c5e5d0c]{background:#f0f7ff}.tree-el-tree-all[data-v-3c5e5d0c],.tree-el-tree-all-no[data-v-3c5e5d0c]{height:25px;line-height:25px;padding:3px 10px;text-align:left;font-size:14px;color:#606266}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySex.vue?vue&type=template&id=516185f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._b({},'span',_vm.selectModel,false),[_vm._ssrNode(((_vm.tag == 'text')?(((_vm.sex == 1)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('男')))+"</label>"):"<!---->")+" "+((_vm.sex == 2)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('女')))+"</label>"):"<!---->")+" "+((_vm.sex == 3)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('未知')))+"</label>"):"<!---->")):"<!---->")+" "),(_vm.tag == 'tag')?[(_vm.sex == 1)?_c('el-tag',{attrs:{"size":_vm.size,"type":_vm.type,"effect":_vm.effect}},[_vm._v(_vm._s(_vm.$t('男')))]):_vm._e(),_vm._ssrNode(" "),(_vm.sex == 2)?_c('el-tag',{attrs:{"size":_vm.size,"type":_vm.type,"effect":_vm.effect}},[_vm._v(_vm._s(_vm.$t('女')))]):_vm._e(),_vm._ssrNode(" "),(_vm.sex == 3)?_c('el-tag',{attrs:{"size":_vm.size,"type":_vm.type,"effect":_vm.effect}},[_vm._v(_vm._s(_vm.$t('未知')))]):_vm._e()]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MySex.vue?vue&type=template&id=516185f2&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MySex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MySexvue_type_script_lang_js_ = ({
  name: 'mySex',
  props: {
    sex: {
      default: 0,
      type: [String, Number]
    },
    tag: {
      default: 'tag',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['tag', 'text']);
      }
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    size: {
      defalult: 'medium',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
      }
    },
    type: {
      defalult: '',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['success', 'info', 'warning', 'danger']);
      }
    },
    effect: {
      defalult: 'light',
      validate: function (val) {
        return Object(utils["D" /* oneOf */])(val, ['dark', 'light', 'plain']);
      }
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    }

  },

  data() {
    return {
      value: ''
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/MySex.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MySexvue_type_script_lang_js_ = (MySexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MySex.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MySexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aaaa722c"
  
)

/* harmony default export */ var MySex = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(719);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("75017fc4", content, true, context)
};

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signData_vue_vue_type_style_index_0_id_456daad3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signData_vue_vue_type_style_index_0_id_456daad3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signData_vue_vue_type_style_index_0_id_456daad3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signData_vue_vue_type_style_index_0_id_456daad3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signData_vue_vue_type_style_index_0_id_456daad3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signData_vue_vue_type_style_index_0_id_456daad3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-block[data-v-456daad3]{height:40px;line-height:40px}.block-table-main[data-v-456daad3]{border:1px solid #dcdfe6}.block-table-main .item[data-v-456daad3]{height:40px;line-height:40px}.title-block-tag[data-v-456daad3]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-456daad3]{font-weight:700;position:relative;top:-5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/data/signData.vue?vue&type=template&id=456daad3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div data-v-456daad3>","</div>",[_c('layout-lr',[_c('div',{attrs:{"slot":"left"},slot:"left"},[_c('div',{staticClass:"color-muted font-size-12 padding-tb-5 margin-top-10"},[_c('span',{staticClass:"layout-left-menu-title"},[_vm._v("报到数据")])]),_vm._v(" "),_c('my-el-tree',{attrs:{"type":"1","sub-type":"4"},on:{"node-click":_vm.nodeClick,"all-click":_vm.nodeClick}})],1),_vm._v(" "),_c('div',{attrs:{"slot":"right"},slot:"right"},[_c('div',{staticClass:"layout-top-tab margin-top-5 custom-button-search"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"layout-inline"},[_c('el-button',{staticClass:"layout-item",attrs:{"size":"small","type":"warning","icon":"el-icon-download"},on:{"click":function($event){return _vm.expandInfo($event)}}},[_vm._v(_vm._s(_vm.$t("导出")))]),_vm._v(" "),_c('el-button-group',{staticClass:"layout-item",staticStyle:{"position":"relative","top":"-1px"}},[_c('el-button',{attrs:{"size":"small","type":"text"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t("总人数"))+" "+_vm._s(_vm.countNum)+" | ")])]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"text"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t("已报到"))+" "+_vm._s(_vm.signNum)+" | ")])]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"text"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t("未报到"))+" "+_vm._s(_vm.unSignNum))])])],1),_vm._v(" "),_c('my-select',{staticClass:"layout-item width-100",attrs:{"size":"small","clearable":true,"placeholder":_vm.$t('流程名称'),"sel-value":_vm.searchProcess,"options":_vm.processData},on:{"change":function($event){return _vm.handleChangeSelect($event)}}})],1)]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('div',{staticClass:"layout-inline"},[_c('el-date-picker',{staticStyle:{"width":"220px"},attrs:{"size":"small","unlink-panels":"","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{"change":_vm.handleChangeTime},model:{value:(_vm.searchTimeData),callback:function ($$v) {_vm.searchTimeData=$$v},expression:"searchTimeData"}}),_vm._v(" "),_c('my-input-button',{ref:"teacher width-150",attrs:{"size":"small","plain":"","width-class":"width: 120px","type":"success","clearable":true,"placeholder":_vm.$t('姓名/录取号')},on:{"click":_vm.search}})],1)])],1)],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight2.height},on:{"filter-change":_vm.fliterTable}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('姓名')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.real_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('a',{staticClass:"color-grand",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.detailInfo(scope.row)}}},[_vm._v(_vm._s(scope.row.real_name))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('录取号')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.student_id))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.student_id)+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('性别'),"column-key":"sexType","filter-multiple":false,"filters":_vm.filtersSexType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('my-sex',{attrs:{"tag":"text","sex":scope.row.sex}})],1),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('my-sex',{attrs:{"tag":"text","sex":scope.row.sex}})],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('学院')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.college_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.college_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('专业')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.major_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.major_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('班级')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.class_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.class_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('招生老师')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.enroll_teacher))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.enroll_teacher)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('状态'),"column-key":"statusType","filter-multiple":false,"filters":_vm.filtersStutasType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_status)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已报到")))]):_vm._e(),_vm._v(" "),(!scope.row.check_status)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未报到")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_status)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已报到")))]):_vm._e(),_vm._v(" "),(!scope.row.check_status)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未报到")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('缴费状态'),"column-key":"payType","filter-multiple":false,"filters":_vm.filtersPayStatusType,"width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.payment_status == 3)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已缴费")))]):(scope.row.payment_status == 2)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("部分缴费")))]):(scope.row.payment_status == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未缴费")))]):(scope.row.payment_status == 4)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("待核实")))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.payment_status == 3)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已缴费")))]):(scope.row.payment_status == 2)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("部分缴费")))]):(scope.row.payment_status == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未缴费")))]):(scope.row.payment_status == 4)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("待核实")))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"120","label":_vm.$t('核验方式'),"column-key":"auditType","filter-multiple":false,"filters":_vm.filtersAuditType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_type == 0)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("人工")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("二维码")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 2)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("人脸识别")))]):_vm._e(),_vm._v(" "),(scope.row.check_user_name)?_c('label',[_vm._v("("+_vm._s(scope.row.check_user_name)+")")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_type == 0)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("人工")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("二维码")))]):_vm._e(),_vm._v(" "),(scope.row.check_type == 2)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("人脸识别")))]):_vm._e(),_vm._v(" "),(scope.row.check_user_name)?_c('label',[_vm._v("("+_vm._s(scope.row.check_user_name)+")")]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('报到时间')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_time)?_c('label',[_vm._v(_vm._s(_vm.$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_time)?_c('label',[_vm._v(_vm._s(_vm.$moment(scope.row.check_time).format("YYYY-MM-DD HH:mm:ss")))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('准时报到'),"width":"120","column-key":"signType","filter-multiple":false,"filters":_vm.filtersSignType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.check_on_time)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("是")))]):_vm._e(),_vm._v(" "),(!scope.row.check_on_time)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("否")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.check_on_time)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("是")))]):_vm._e(),_vm._v(" "),(!scope.row.check_on_time)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("否")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('是否接站'),"width":"120","column-key":"interfaceType","filter-multiple":false,"filters":_vm.filtersSignType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.need_receive)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("是")))]):_vm._e(),_vm._v(" "),(!scope.row.need_receive)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("否")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.need_receive)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("是")))]):_vm._e(),_vm._v(" "),(!scope.row.need_receive)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("否")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('陪同人员')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.escorts_num))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.escorts_num)+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('到达站')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.arrive_station)+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"160","fixed":"right","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(!scope.row.check_status)?_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){return _vm.statusOkInfo(scope.row, 1)}}},[_vm._v(_vm._s(_vm.$t("已到")))]):_vm._e(),_vm._v(" "),(scope.row.check_status != null && scope.row.check_status)?_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){return _vm.statusCancelInfo(scope.row, -1)}}},[_vm._v(_vm._s(_vm.$t("撤销")))]):_vm._e(),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){return _vm.signInfo($event, scope.row)}}},[_vm._v(_vm._s(_vm.$t("报到单")))])]}}])})],1)],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)])])],1),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","show-close":true,"visible":_vm.dialogVisible,"size":"680px"},on:{"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n            "+_vm._s(_vm.$t('报到单'))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',[_c('div',{staticClass:"padding-tb-10 padding-lr-10"},[_c('span',{staticClass:"title-block-tag"}),_vm._v(" "),_c('span',{staticClass:"title-block-text"},[_vm._v(_vm._s(_vm.$t("基本信息")))]),_vm._v(" "),_c('div',{staticClass:"pull-right"},[_c('el-image',{staticStyle:{"width":"120px","height":"30px"},attrs:{"src":_vm.g_BarCode}})],1)]),_vm._v(" "),_c('table',{staticClass:"custom-table"},[_c('tr',[_c('td',{staticStyle:{"width":"20%"},attrs:{"rowspan":"2"}},[(_vm.detailData.photo_simple)?_c('img',{staticStyle:{"width":"80px","height":"80px","margin-top":"5px"},attrs:{"src":_vm.detailData.photo_simple}}):_vm._e()]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold",staticStyle:{"width":"10%"}},[_vm._v(_vm._s(_vm.$t("姓名")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",staticStyle:{"width":"20%"}},[_vm._v(_vm._s(_vm.detailData.real_name))]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold",staticStyle:{"width":"10%"}},[_vm._v(_vm._s(_vm.$t("性别")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",staticStyle:{"width":"10%"}},[_c('my-sex',{attrs:{"tag":"text","sex":_vm.detailData.sex}})],1),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold",staticStyle:{"width":"10%"}},[_vm._v(_vm._s(_vm.$t("录取号")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",staticStyle:{"width":"20%"}},[_vm._v(_vm._s(_vm.detailData.student_id))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("学院")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.detailData.college_name))]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("专业")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.detailData.major_name))]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("班级")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.detailData.class_name))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("宿舍信息")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",attrs:{"colspan":"6"}},[(_vm.detailData.build_name)?_c('span',[_vm._v("\n                  "+_vm._s(_vm.detailData.build_name)+_vm._s(_vm.detailData.floor_num)+_vm._s(_vm.$t("层"))+_vm._s(_vm.detailData.dormitory_no)+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.detailData.pac_name && !_vm.detailData.build_name)?_c('span',[_vm._v("\n                  "+_vm._s(_vm.detailData.pac_name)+"\n                  "),_c('label',{staticClass:"font-size-12 color-muted"},[_vm._v("\n                    (¥"+_vm._s(_vm.detailData.pac_price)+" -- "+_vm._s(_vm.detailData.pac_region)+")\n                  ")])]):_vm._e()])])])]),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"padding-tb-10 padding-lr-10"},[_c('span',{staticClass:"title-block-tag"}),_vm._v(" "),_c('span',{staticClass:"title-block-text"},[_vm._v(_vm._s(_vm.$t("缴费信息")))])]),_vm._v(" "),_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.tableSignData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('费用名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.item_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.item_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('缓缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.delay_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.delay_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('贷款')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.loan_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.loan_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('减免')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.deduction_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.deduction_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('实缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.should_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.should_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('已缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.paid_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.paid_amount)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('未缴金额')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.wait_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.wait_amount)+"\n                  ")])])]}}])})],1)],1),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('el-image',{staticStyle:{"width":"80px","height":"80px"},attrs:{"src":_vm.g_QrCode}})],1)])]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","show-close":true,"visible":_vm.dialogDetail,"size":"680px"},on:{"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-user"}),_vm._v("\n            "+_vm._s(_vm.$t('学生信息'))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"120px"}},[(_vm.form.id != '' && _vm.oprType == 'detail')?[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("照片信息")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12"},[(_vm.form.photo_simple)?_c('el-image',{staticStyle:{"width":"80px","height":"80px","margin-right":"10px"},attrs:{"src":_vm.form.photo_simple}},[_c('div',{staticClass:"image-slot",attrs:{"slot":"error"},slot:"error"},[_c('i',{staticClass:"el-icon-picture-outline"})])]):_vm._e()],1)]:_vm._e(),_vm._v(" "),[_c('div',{class:_vm.form.id != '' && _vm.oprType == 'detail' ? 'margin-top-20' : 'margin-top-5'},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("基础信息")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12"},[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('迎新年度'),"prop":"year"}},[_c('my-select',{staticClass:"layout-item",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small","placeholder":_vm.$t('请选择'),"sel-value":_vm.form.year,"options":_vm.years,"width-style":"220","clearable":false},on:{"change":function($event){return _vm.handleSelectChange($event, 1)}}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('姓名'),"prop":"name"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('学号'),"prop":"stuNo"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.stuNo),callback:function ($$v) {_vm.$set(_vm.form, "stuNo", $$v)},expression:"form.stuNo"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('身份证'),"prop":"idCardNo"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.idCardNo),callback:function ($$v) {_vm.$set(_vm.form, "idCardNo", $$v)},expression:"form.idCardNo"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('性别'),"prop":"sex"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.sex,"options":_vm.g_sex,"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 2)}}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('出生日期'),"prop":"birthday"}},[_c('my-date-picker',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.birthday,"width-style":"220"},on:{"change":function($event){return _vm.handleChangeTime($event,1)}}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('国籍'),"prop":"nationality"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.nationality,"options":_vm.nationalityInfoText(),"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 3)}}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('民族'),"prop":"nation"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.nation,"options":_vm.nationInfoText(),"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 4)}}})],1)],1)],1)],1)],_vm._v(" "),[_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("联系方式")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12"},[_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.tableSelColData),function(item,index){return (item == '手机号')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('手机号'),"prop":"phone"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == 'QQ')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('QQ'),"prop":"qq"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.qq),callback:function ($$v) {_vm.$set(_vm.form, "qq", $$v)},expression:"form.qq"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '邮箱')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('邮箱'),"prop":"email"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '微信号')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('微信号'),"prop":"wechat"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.wechat),callback:function ($$v) {_vm.$set(_vm.form, "wechat", $$v)},expression:"form.wechat"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '父亲姓名')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('父亲姓名'),"prop":"fatherName"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.fatherName),callback:function ($$v) {_vm.$set(_vm.form, "fatherName", $$v)},expression:"form.fatherName"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '父亲电话')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('父亲电话'),"prop":"fatherPhone"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.fatherPhone),callback:function ($$v) {_vm.$set(_vm.form, "fatherPhone", $$v)},expression:"form.fatherPhone"}})],1)],1):_vm._e()}),_vm._v(" "),_c('el-col',{attrs:{"span":12}},_vm._l((_vm.tableSelColData),function(item,index){return (item == '母亲姓名')?_c('el-form-item',{key:index,attrs:{"label":_vm.$t('母亲姓名'),"prop":"motherName"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.motherName),callback:function ($$v) {_vm.$set(_vm.form, "motherName", $$v)},expression:"form.motherName"}})],1):_vm._e()}),1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},_vm._l((_vm.tableSelColData),function(item,index){return (item == '母亲电话')?_c('el-form-item',{key:index,attrs:{"label":_vm.$t('母亲电话'),"prop":"motherPhone"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.motherPhone),callback:function ($$v) {_vm.$set(_vm.form, "motherPhone", $$v)},expression:"form.motherPhone"}})],1):_vm._e()}),1)],2),_vm._v(" "),_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":24}},_vm._l((_vm.tableSelColData),function(item,index){return (item == '详细地址')?_c('el-form-item',{key:index,attrs:{"label":_vm.$t('详细地址'),"prop":"address"}},[_c('el-input',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.address),callback:function ($$v) {_vm.$set(_vm.form, "address", $$v)},expression:"form.address"}})],1):_vm._e()}),1)],1)],1)])],_vm._v(" "),[_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("入学信息")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12"},[_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.tableSelColData),function(item,index){return (item == '学历')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('学历'),"prop":"education"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.education,"options":_vm.educationInfoText(),"width-style":"220"}})],1)],1):_vm._e()}),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('学院/专业/(班级)'),"prop":"college"}},[_c('my-cascader',{ref:"SelectorCollege",attrs:{"disabled":!_vm.form.updateClass,"width-style":"220","sel-value":_vm.form.college,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleCascaderChange($event, 1)}}})],1)],1),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '学制')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('学制'),"prop":"eduSystem"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.eduSystem),callback:function ($$v) {_vm.$set(_vm.form, "eduSystem", $$v)},expression:"form.eduSystem"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '招生老师')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('招生老师'),"prop":"recruitingTeacher"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.recruitingTeacher),callback:function ($$v) {_vm.$set(_vm.form, "recruitingTeacher", $$v)},expression:"form.recruitingTeacher"}})],1)],1):_vm._e()})],2)],1)])],_vm._v(" "),[_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("学历信息")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12"},[_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.tableSelColData),function(item,index){return (item == '录取批次')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('录取批次'),"prop":"adBath"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.adBath),callback:function ($$v) {_vm.$set(_vm.form, "adBath", $$v)},expression:"form.adBath"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '科目')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('科目'),"prop":"type"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.subject),callback:function ($$v) {_vm.$set(_vm.form, "subject", $$v)},expression:"form.subject"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '录取省份')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('录取省份'),"prop":"adProvince"}},[_c('el-cascader',{ref:"selectorProvince",refInFor:true,staticStyle:{"width":"220px"},attrs:{"size":"small","disabled":_vm.form.id != '' && _vm.oprType == 'detail',"options":_vm.provinceInfoText()},on:{"change":function($event){return _vm.handleSelectChange($event, 9)}},model:{value:(_vm.form.adProvince),callback:function ($$v) {_vm.$set(_vm.form, "adProvince", $$v)},expression:"form.adProvince"}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '高考成绩')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('高考成绩'),"prop":"examScore"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.examScore),callback:function ($$v) {_vm.$set(_vm.form, "examScore", $$v)},expression:"form.examScore"}})],1)],1):_vm._e()})],2),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '毕业学校')?_c('el-row',{key:index,attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('毕业学校'),"prop":"graduationSchool"}},[_c('el-input',{staticClass:"width-220",attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"size":"small"},model:{value:(_vm.form.graduationSchool),callback:function ($$v) {_vm.$set(_vm.form, "graduationSchool", $$v)},expression:"form.graduationSchool"}})],1)],1)],1):_vm._e()})],2)])],_vm._v(" "),[_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("其他信息")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12 custom-textarea-inner"},[_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.tableSelColData),function(item,index){return (item == '毕业类型')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('毕业类型'),"prop":"graduation"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.graduation,"options":_vm.filterGraduationType,"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 11)}}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '政治面貌')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('政治面貌'),"prop":"politics"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.politics,"options":_vm.filterPoliticsType,"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 12)}}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '退役士兵')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('退役士兵'),"prop":"retire"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.retire,"options":_vm.filterRetireType,"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 13)}}})],1)],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.tableSelColData),function(item,index){return (item == '困难类型')?_c('el-col',{key:index,attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.$t('困难类型'),"prop":"hard"}},[_c('my-select',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"sel-value":_vm.form.hard,"options":_vm.filterHardType,"width-style":"220"},on:{"change":function($event){return _vm.handleSelectChange($event, 14)}}})],1)],1):_vm._e()})],2),_vm._v(" "),_c('el-row',_vm._l((_vm.tableSelColData),function(item,index){return (item == '其他信息')?_c('el-col',{key:index,attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('其他信息'),"prop":"otherMsg"}},[_c('el-input',{attrs:{"disabled":_vm.form.id != '' && _vm.oprType == 'detail',"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.form.otherMsg),callback:function ($$v) {_vm.$set(_vm.form, "otherMsg", $$v)},expression:"form.otherMsg"}})],1)],1):_vm._e()}),1)],1)])]],2)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelFormDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),(!_vm.form.checkStatus)?_c('el-button',{attrs:{"loading":_vm.btnLoading,"size":"mini","type":"success"},on:{"click":function($event){return _vm.statusOkInfo(_vm.form, 1)}}},[_vm._v(_vm._s(_vm.$t("已到")))]):_vm._e(),_vm._v(" "),(_vm.form.checkStatus != null && _vm.form.checkStatus)?_c('el-button',{attrs:{"loading":_vm.btnLoading,"size":"mini","type":"danger"},on:{"click":function($event){return _vm.statusCancelInfo(_vm.form, -1)}}},[_vm._v(_vm._s(_vm.$t("撤销")))]):_vm._e(),_vm._v(" "),(_vm.form.updateClass)?_c('el-button',{attrs:{"loading":_vm.btnUpdateLoading,"size":"mini","type":"warning"},on:{"click":function($event){return _vm.updateInfo(_vm.form, -2)}}},[_vm._v(_vm._s(_vm.$t("修改")))]):_vm._e()],1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/data/signData.vue?vue&type=template&id=456daad3&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/data/signData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var signDatavue_type_script_lang_js_ = ({
  components: {
    MySelect: MySelect["default"]
  },
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      tableData: [],
      tableSignData: [],
      processData: [],
      years: [],
      countNum: 0,
      signNum: 0,
      unSignNum: 0,
      collegeList: [],
      categorys: [],
      types: [],
      subTitle: '',
      collegeData: '',
      searchProcess: '',
      searchKey: '',
      searchType: '',
      searchStatus: '',
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
      dialogLoading: false,
      dialogVisible: false,
      dialogDetail: false,
      visibleConfim: false,
      footerHidden: false,
      btnLoading: false,
      btnUpdateLoading: false,
      searchCascader: [],
      yearOptions: [],
      bathOptions: [],
      subjectOptions: [],
      tableSelColData: [],
      detailData: {},
      filtersAuditType: [{
        value: 0,
        text: this.$t("人工")
      }, {
        value: 1,
        text: this.$t("二维码")
      }, {
        value: 2,
        text: this.$t("人脸识别")
      }],
      searchTimeData: [],
      filtersSexType: [{
        value: 3,
        text: this.$t("未知")
      }, {
        value: 1,
        text: this.$t("男")
      }, {
        value: 2,
        text: this.$t("女")
      }],
      filtersSignType: [{
        value: true,
        text: this.$t("是")
      }, {
        value: false,
        text: this.$t("否")
      }],
      filtersStutasType: [{
        value: true,
        text: this.$t("已报到")
      }, {
        value: false,
        text: this.$t("未报到")
      }],
      filtersPayStatusType: [{
        value: 3,
        text: this.$t("已缴清")
      }, {
        value: 1,
        text: this.$t("未缴清")
      }, {
        value: 4,
        text: this.$t("待核实")
      }],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      searchPayStatus: '',
      oprType: '',
      userId: '',
      form: {
        id: '',
        year: '',
        name: '',
        adNo: '',
        oneCardNo: '',
        stuNo: '',
        examNo: '',
        sex: '',
        idCardNo: '',
        birthday: '',
        nationality: '',
        nation: '',
        phone: '',
        qq: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        address: '',
        education: '',
        college: [],
        major: '',
        class: [],
        eduSystem: '',
        headmaster: '',
        recruitingTeacher: '',
        adBath: '',
        subject: '',
        adProvince: '',
        adCity: '',
        graduationSchool: '',
        examScore: '',
        otherMsg: '',
        check_status: '',
        checkStatus: '',
        checkinId: '',
        checkin_id: '',
        facePhotos: [],
        graduation: '',
        politics: '',
        retire: '',
        hard: '',
        photo_simple: '',
        updateClass: false
      }
    };
  },

  created() {
    this.initProcess();
    this.init();
    this.getYearInfo();
    this.initCountStatic();
  },

  methods: {
    getYearInfo() {
      let params = {
        page: 1,
        num: 9999
      };
      this.$axios.get(api_url["a" /* common */].enroll_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let years = [];

          for (let i = 0; i < res.data.data.list.length; i++) {
            years.push({
              label: res.data.data.list[i].enrollName,
              text: res.data.data.list[i].enrollName,
              value: res.data.data.list[i].id
            });
          }

          this.years = years;
        }
      });
    },

    initCountStatic() {
      let params = {
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        processId: this.searchProcess
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_num, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.countNum = res.data.data.all;
          this.signNum = res.data.data.checkin;
          this.unSignNum = res.data.data.notCheckin;
        }
      });
    },

    init() {
      let params = {
        page: this.page,
        num: this.num,
        checkinStartTime: this.searchTimeData && this.searchTimeData.length > 0 ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
        checkinEndTime: this.searchTimeData && this.searchTimeData.length > 0 ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        sex: this.searchSexType,
        checkinOnTime: this.searchSignTimeStatus,
        needReceive: this.searchInterface,
        searchKey: this.searchKey,
        processId: this.searchProcess,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        checkStatus: this.searchStatus,
        checkType: this.searchAuditType,
        paymentStatus: this.searchPayStatus
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },

    initPay(item) {
      let params = {
        userId: item.user_id
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_pay_list_by_user, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i]['wait_amount'] = res.data.data[i].should_amount - res.data.data[i].paid_amount;
          }

          this.tableSignData = res.data.data;
        }
      });
    },

    initProcess() {
      let params = {
        page: 1,
        num: 99999
      };
      this.$axios.get(api_url["a" /* common */].enroll_process_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let process = [];

          for (let i = 0; i < res.data.data.list.length; i++) {
            process.push({
              label: res.data.data.list[i].processName,
              value: res.data.data.list[i].id,
              text: res.data.data.list[i].processName
            });
          }

          this.processData = process;
        }
      });
    },

    sizeChange(event) {
      this.page = 1;
      this.num = event;
      this.init();
    },

    currentPage(event) {
      this.page = event;
      this.init();
    },

    jumpPage(data) {
      this.page = data;
      this.init();
    },

    nodeClick(data) {
      this.searchCollege = "";
      this.searchMajor = "";
      this.searchGrade = "";
      this.searchClass = "";

      if (data.unit == 1) {
        this.searchCollege = data.id;
      } else if (data.unit == 2) {
        this.searchCollege = data.college_id;
        this.searchMajor = data.id;
      } else if (data.unit == 3) {
        this.searchMajor = data.major_id;
        this.searchGrade = data.grade;
      } else if (data.unit == 4) {
        this.searchClass = data.id;
      }

      this.page = 1;
      this.init();
      this.initCountStatic();
    },

    handleCascaderChange(data, type) {
      this.searchCascader = data;

      switch (type) {
        case 1:
          this.form.college = data;
          break;
      }
    },

    handleChangeSelect(data) {
      this.searchProcess = data;
    },

    handleChangeTime(data) {
      this.searchTimeData = data ? data : [];
    },

    search(data) {
      this.searchKey = data.input;
      this.page = 1;
      this.initCountStatic();
      this.init();
    },

    expandInfo() {
      let url = api_url["a" /* common */].enroll_checkin_export;
      let params = {
        page: 1,
        num: 99999,
        checkinStartTime: this.searchTimeData && this.searchTimeData.length > 0 ? this.$moment(this.searchTimeData[0]).format("YYYY-MM-DD") : '',
        checkinEndTime: this.searchTimeData && this.searchTimeData.length > 0 ? this.$moment(this.searchTimeData[1]).format("YYYY-MM-DD") : '',
        sex: this.searchSexType,
        checkinOnTime: this.searchSignTimeStatus,
        needReceive: this.searchInterface,
        searchKey: this.searchKey,
        processId: this.searchProcess,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass
      };
      params = this.$qs.stringify(params);
      window.open(url + "?" + params, "_self");
    },

    changeStatus(type) {
      this.searchType = type.value;
      this.page = 1;
      this.init();
    },

    statusOkInfo(item, type) {
      let params = {
        userId: item.user_id
      };
      let url = api_url["a" /* common */].enroll_checkin_handle;
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          this.dialogDetail = false;
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    statusCancelInfo(item, type) {
      let params = {
        checkinId: item.checkin_id
      };
      let url = api_url["a" /* common */].enroll_checkin_revoke;
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          this.dialogDetail = false;
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    updateInfo() {
      if (this.form.college.length < 4) {
        Object(utils["c" /* MessageWarning */])(this.$t("请设置学院/专业(班级)信息！"));
        return;
      }

      let params = {
        userId: this.userId,
        classId: this.form.college[3]
      };
      let url = api_url["a" /* common */].enroll_student_update_class;
      params = this.$qs.stringify(params);
      this.btnUpdateLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          this.dialogDetail = false;
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnUpdateLoading = false;
      });
    },

    async detailInfo(item, type) {
      let params = {
        userId: item.user_id
      };
      this.userId = item.user_id;
      this.oprType = 'detail';
      await this.$axios.get(api_url["a" /* common */].enroll_checkin_student_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let photos = res.data.data.face_photos ? res.data.data.face_photos.split("|") : [];
          this.form = {
            id: res.data.data.id,
            user_id: res.data.data.user_id,
            year: res.data.data.enroll_id,
            name: res.data.data.real_name,
            adNo: res.data.data.enroll_no,
            oneCardNo: res.data.data.school_car_no,
            stuNo: res.data.data.student_id,
            examNo: res.data.data.exam_no,
            sex: res.data.data.sex + '',
            idCardNo: res.data.data.certificate_num,
            birthday: res.data.data.birthday ? this.$moment(res.data.data.birthday).format("YYYY-MM-DD") : '',
            nationality: '' + res.data.data.nationality,
            nation: res.data.data.nation,
            phone: res.data.data.phone,
            qq: res.data.data.qq,
            email: res.data.data.email,
            wechat: res.data.data.wechat,
            fatherName: res.data.data.father_name,
            fatherPhone: res.data.data.father_phone,
            motherName: res.data.data.mather_name,
            motherPhone: res.data.data.mather_phone,
            address: res.data.data.native_place,
            education: res.data.data.edu_level,
            //college: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
            major: '',
            class: [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id],
            eduSystem: res.data.data.edu_year,
            headmaster: res.data.data.master_teacher_name,
            recruitingTeacher: res.data.data.enroll_teacher,
            adBath: res.data.data.enroll_batch,
            subject: res.data.data.enroll_type,
            adProvince: [res.data.data.enroll_province, res.data.data.enroll_city],
            adCity: res.data.data.enroll_city + '',
            graduationSchool: res.data.data.high_school,
            examScore: res.data.data.gaokao_score,
            otherMsg: res.data.data.des,
            checkStatus: res.data.data.check_status,
            checkinId: res.data.data.checkin_id,
            checkin_id: res.data.data.checkin_id,
            facePhotos: photos,
            graduation: res.data.data.graduation_type,
            politics: res.data.data.political_type,
            retire: res.data.data.soldier,
            hard: res.data.data.difficulty_type,
            photo_simple: res.data.data.photo_simple,
            updateClass: res.data.data.otherSetting.updateClass
          };
        }

        if (!res.data.data.class_id) {
          this.$set(this.form, 'college', [res.data.data.college_id, res.data.data.major_id]);
        }

        if (res.data.data.class_id) {
          this.$set(this.form, 'college', [res.data.data.college_id, res.data.data.major_id, res.data.data.grade, res.data.data.class_id]);
        }
      });
      await this.$axios.get(api_url["a" /* common */].enroll_admin_get).then(res => {
        this.tableSelColData = res.data.data.displayField;
      });
      this.dialogDetail = true;
    },

    signInfo(event, item) {
      let params = {
        userId: item.user_id
      };
      this.$axios.get(api_url["a" /* common */].enroll_checkin_student_detail, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.detailData = res.data.data;
        }
      });
      this.initPay(item);
      this.getUserQrcode(item.user_id);
      this.getUserBarcode(item.user_id);
      this.dialogVisible = true;
    },

    fliterTable(value, row, column) {
      for (let item in value) {
        if (item == 'auditType') {
          this.searchAuditType = value[item][0];
        } else if (item == 'sexType') {
          this.searchSexType = value[item][0];
        } else if (item == 'signType') {
          this.searchSignTimeStatus = value[item][0];
        } else if (item == 'interfaceType') {
          this.searchInterface = value[item][0];
        } else if (item == 'statusType') {
          this.searchStatus = value[item][0];
        } else if (item == 'payType') {
          this.searchPayStatus = value[item][0];
        }
      }

      this.init();
    },

    nationInfoText() {
      let arr = Object(utils["A" /* nationInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].code;
      }

      return arr;
    },

    nationalityInfoText() {
      let arr = Object(utils["B" /* nationalityInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].country_name_cn;
        arr[i]['value'] = "" + arr[i].country_code;
        arr[i]['text'] = arr[i].country_name_cn;
      }

      return arr;
    },

    educationInfoText() {
      let arr = Object(utils["o" /* educationInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = "" + arr[i].value;
        arr[i]['text'] = arr[i].name;
      }

      return arr;
    },

    provinceInfoText() {
      let arr = Object(utils["F" /* provinceArrayInfo */])();
      let province = [];

      for (let i = 0; i < arr.length; i++) {
        province.push({
          label: arr[i].label,
          value: arr[i].label
        });

        if (arr[i]['children']) {
          province[i]['children'] = [];

          for (let j = 0; j < arr[i].children.length; j++) {
            province[i]['children'].push({
              label: arr[i].children[j],
              value: arr[i].children[j]
            });
          }
        }
      }

      return province;
    },

    cityInfoText() {
      let arr = Object(utils["g" /* cityInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = "" + arr[i].CityID;
        arr[i]['text'] = arr[i].name;
      }

      return arr;
    },

    closeDialog(event) {
      this.form = {
        id: '',
        year: '',
        name: '',
        adNo: '',
        oneCardNo: '',
        stuNo: '',
        examNo: '',
        sex: '',
        idCardNo: '',
        birthday: '',
        nationality: '',
        nation: '',
        phone: '',
        qq: '',
        wechat: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        motherPhone: '',
        address: '',
        education: '',
        college: [],
        major: '',
        class: [],
        eduSystem: '',
        headmaster: '',
        recruitingTeacher: '',
        adBath: '',
        subject: '',
        adProvince: '',
        adCity: '',
        graduationSchool: '',
        examScore: '',
        otherMsg: '',
        checkStatus: '',
        checkinId: '',
        checkin_id: '',
        facePhotos: [],
        photo_simple: ''
      };
      this.subTitle = "";
      this.versionStatus = '';
      this.detailData = {};
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('selectorDept');

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      this.loopTimer = null;
      this.teacherArray = [];
      this.approverUsers = [];
      this.tableSelColData = [];
      this.btnLoading = false;
      this.dialogVisible = false;
      this.dialogDetail = false;
    },

    cancelFormDrawDialog() {
      this.closeDialog();
      this.drawerForm = false;
    },

    okFormDrawDialog(event, type) {
      let params = {};
      let url = api_url["a" /* common */].circular_add; //params = this.$qs.stringify(params);

      this.btnLoading = true;
      this.$axios.post(url, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.drawerManage = false;
          this.init();
          this.closeDialog();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/data/signData.vue?vue&type=script&lang=js&
 /* harmony default export */ var data_signDatavue_type_script_lang_js_ = (signDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/data/signData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(718)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  data_signDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "456daad3",
  "4e74e2e8"
  
)

/* harmony default export */ var signData = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyElTree: __webpack_require__(155).default,MySelect: __webpack_require__(147).default,MyInputButton: __webpack_require__(146).default,MySex: __webpack_require__(162).default,MyPagination: __webpack_require__(27).default,LayoutLr: __webpack_require__(156).default,DrawerLayoutRight: __webpack_require__(29).default,MyDatePicker: __webpack_require__(148).default,MyCascader: __webpack_require__(151).default})


/***/ })

};;
//# sourceMappingURL=signData.js.map