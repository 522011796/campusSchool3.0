exports.ids = [19];
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/dialog/MyNormalDialog.vue?vue&type=template&id=31650e60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-dialog',{staticClass:"custom-dialog",attrs:{"visible":_vm.openCardDialog,"close-on-click-modal":false,"loading":_vm.loading},on:{"update:visible":function($event){_vm.openCardDialog=$event},"close":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"dialog-title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_c('div',{staticStyle:{"height":"1px","background":"#EBEEF5","margin":"0px 0px"}})]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('div',[_c('i',{staticClass:"fa fa-info-circle",staticStyle:{"font-size":"18px"}}),_vm._v("\n        "+_vm._s(_vm.content)+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"color-muted font-size-12 margin-top-5"},[_vm._v("\n        "+_vm._s(_vm.detail)+"\n      ")])]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticStyle:{"height":"1px","background":"#EBEEF5","margin":"0px 0px"}}),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('div',{staticStyle:{"background":"#ffffff","width":"100%","height":"100%","cursor":"default"},on:{"click":_vm.handleCancelChange}},[_vm._v(_vm._s(_vm.$t("取消")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('div',{staticStyle:{"background":"#f5f5f5","width":"100%","height":"100%","cursor":"default"},on:{"click":function($event){_vm.loading == false ? _vm.handleOkChange() : ''}}},[_c('span',{class:{'color-muted': _vm.loading}},[(_vm.loading)?_c('i',{staticClass:"el-icon-loading"}):_vm._e(),_vm._v("\n              "+_vm._s(_vm.$t("确定"))+"\n            ")])])])],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/dialog/MyNormalDialog.vue?vue&type=template&id=31650e60&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/dialog/MyNormalDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MyNormalDialogvue_type_script_lang_js_ = ({
  name: 'myNormalDialog',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '30%'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    openCardDialog: {
      get() {
        return this.visible;
      },

      set(val) {
        this.$emit('update:visible', val); // openCardDialog改变的时候通知父组件
      }

    },
    setLoading: {
      get() {
        return this.loading;
      },

      set(val) {}

    }
  },

  data() {
    return {
      showLoading: false
    };
  },

  methods: {
    handleOkChange(data) {
      this.$emit('ok-click', data);
    },

    handleCancelChange(data) {
      this.$emit('cancel-click', data);
    },

    closeDialog(data) {
      this.$emit('close', data);
    }

  }
});
// CONCATENATED MODULE: ./components/utils/dialog/MyNormalDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialog_MyNormalDialogvue_type_script_lang_js_ = (MyNormalDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/dialog/MyNormalDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialog_MyNormalDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d0fe6b4"
  
)

/* harmony default export */ var MyNormalDialog = __webpack_exports__["default"] = (component.exports);

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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/LayoutTb.vue?vue&type=template&id=57dd53c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"color-muted font-size-12 padding-top-5 animated fadeInUp\">","</div>",[(_vm.showTag)?_vm._ssrNode("<span class=\"layout-menu-title\">","</span>",[_vm._t("tag")],2):_vm._e()]),_vm._ssrNode(" "),(_vm.showTab)?_vm._ssrNode("<div class=\"layout-top-tab margin-top-5\">","</div>",[_vm._t("tab")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"layout-bottom-tab margin-top-10\">","</div>",[_vm._t("content")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Layout/LayoutTb.vue?vue&type=template&id=57dd53c9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/LayoutTb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LayoutTbvue_type_script_lang_js_ = ({
  name: 'LayoutTb',

  data() {
    return {
      showTab: true,
      showTag: false
    };
  },

  mounted() {
    this.showTab = this.$slots.tab !== undefined;
  },

  created() {},

  methods: {}
});
// CONCATENATED MODULE: ./components/Layout/LayoutTb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_LayoutTbvue_type_script_lang_js_ = (LayoutTbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Layout/LayoutTb.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Layout_LayoutTbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e303ced"
  
)

/* harmony default export */ var LayoutTb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyRadio.vue?vue&type=template&id=438da822&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[(!_vm.group)?_c('el-radio',_vm._b({attrs:{"label":_vm.label,"disabled":_vm.disabled,"border":_vm.border,"size":_vm.size},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-radio',_vm.selectModel,false),[_vm._t("default")],2):_vm._e(),_vm._ssrNode(" "),(_vm.group)?_c('el-radio-group',_vm._b({attrs:{"disabled":_vm.disabled,"size":_vm.size,"text-color":_vm.textColor,"fill":_vm.fill},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-radio-group',_vm.selectModel,false),[_vm._l((_vm.options),function(item){return (!_vm.button)?_c('el-radio',{key:item.value,attrs:{"label":item.value,"disabled":item.disabled,"border":_vm.border}},[_vm._v(_vm._s(item.label))]):_vm._e()}),_vm._v(" "),_vm._l((_vm.options),function(item){return (_vm.button)?_c('el-radio-button',{key:item.value,attrs:{"label":item.value,"disabled":item.disabled,"border":_vm.border}},[_vm._v(_vm._s(item.label))]):_vm._e()})],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MyRadio.vue?vue&type=template&id=438da822&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyRadio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MyRadiovue_type_script_lang_js_ = ({
  name: 'myRadio',
  props: {
    selValue: {
      default: '',
      type: [Boolean, String]
    },
    label: {
      default: '',
      type: [Boolean, String]
    },
    group: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    border: {
      default: false,
      type: Boolean
    },
    button: {
      default: false,
      type: Boolean
    },
    textColor: {
      default: '',
      type: String
    },
    fill: {
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
        return Object(utils["D" /* oneOf */])(val, ['large', 'medium', 'small', 'mini']);
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

  methods: {
    handleChange(data) {
      this.$emit('change', data);
    }

  }
});
// CONCATENATED MODULE: ./components/MyRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MyRadiovue_type_script_lang_js_ = (MyRadiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MyRadio.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MyRadiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8d0b7e02"
  
)

/* harmony default export */ var MyRadio = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/MyUserType.vue?vue&type=template&id=2f979c1b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._b({},'span',_vm.selectModel,false),[_vm._ssrNode(((_vm.type == 1)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('超级管理')))+"</label>"):"<!---->")+" "+((_vm.type == 2)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('学校管理')))+"</label>"):"<!---->")+" "+((_vm.type == 3)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('运维管理')))+"</label>"):"<!---->")+" "+((_vm.type == 4)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('教师')))+"</label>"):"<!---->")+" "+((_vm.type == 5)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('学生')))+"</label>"):"<!---->")+" "+((_vm.type == 6)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('游客')))+"</label>"):"<!---->")+" "+((_vm.type == 7)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t('商家')))+"</label>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/MyUserType.vue?vue&type=template&id=2f979c1b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/MyUserType.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyUserTypevue_type_script_lang_js_ = ({
  name: 'mySex',
  props: {
    type: {
      default: 0,
      type: [String, Number]
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
// CONCATENATED MODULE: ./components/utils/MyUserType.vue?vue&type=script&lang=js&
 /* harmony default export */ var utils_MyUserTypevue_type_script_lang_js_ = (MyUserTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/MyUserType.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  utils_MyUserTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74cbc522"
  
)

/* harmony default export */ var MyUserType = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/TeacherTreeAndList.vue?vue&type=template&id=0b6ebbdc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commTeacherList"},[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"clearable":true,"size":"small","width-style":"160","sel-value":_vm.searchCommDeptData,"type":"4","sub-type":""},on:{"change":function($event){return _vm._handleCascaderChange($event)}}}),_vm._ssrNode(" "),_c('my-input-button',{ref:"commSearchInput",staticClass:"layout-item",attrs:{"size":"small","clearable":true,"type":"success","plain":""},on:{"click":_vm._handleSearch}})],2),_vm._ssrNode(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.commLoading),expression:"commLoading"}],ref:"commTableRef",attrs:{"data":_vm.tableTeacherCommData,"max-height":_vm.maxHeight,"size":"mini"}},[(_vm.setType == 'check')?_c('el-table-column',{attrs:{"align":"center","width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}],null,false,1304403255)}):_vm._e(),_vm._v(" "),(_vm.setType == 'radio')?_c('el-table-column',{attrs:{"align":"center","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-radio',_vm._b({attrs:{"sel-value":_vm.commSelUserVal,"label":scope.row.user_id},on:{"change":function($event){return _vm._handleChange(scope.row)}}},'my-radio',_vm._selValue,false),[_c('span')])]}}],null,false,4043958644)}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"property":"real_name","align":"center","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"job_num","align":"center","label":"工号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"","align":"center","label":"部门"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.department_name ? scope.row.department_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.department_name ? scope.row.department_name : '--')+"\n          ")])])]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-right margin-top-10\">","</div>",[_c('el-pagination',{attrs:{"current-page":_vm.commPage,"page-sizes":[10, 20, 30, 50, 100],"page-size":_vm.commNum,"layout":"total, sizes, prev, pager, next","total":_vm.commTotalTotal},on:{"size-change":_vm._handleSizeChange,"current-change":_vm._handleCurrentChange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndList.vue?vue&type=template&id=0b6ebbdc&

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./components/MyRadio.vue + 4 modules
var MyRadio = __webpack_require__(154);

// EXTERNAL MODULE: ./components/search/MyInputButton.vue + 4 modules
var MyInputButton = __webpack_require__(146);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/TeacherTreeAndList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TeacherTreeAndListvue_type_script_lang_js_ = ({
  name: 'teacherTreeAndList',
  components: {
    MyRadio: MyRadio["default"],
    MyCascader: MyCascader["default"],
    MyInputButton: MyInputButton["default"]
  },
  props: {
    selValue: {
      default: '',
      type: [String, Array]
    },
    selArr: {
      default: function () {
        return [];
      },
      type: Array
    },
    setType: {
      default: 'radio',
      type: [String, Number]
    },
    maxHeight: {
      default: '300',
      type: [String, Number]
    }
  },
  computed: {
    _selValue() {
      this.commSelUserVal = this.selValue;
    },

    _selArr() {
      /*let arr = [];
      for (let i = 0; i < this.selArr.length; i++){
        arr.push(this.selArr[i].user_id);
      }*/
      //this.commSelUserArr = this.selArr;
    }

  },

  data() {
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      value: '',
      commPage: 1,
      commNum: 20,
      commTotalTotal: 0,
      tableTeacherCommData: [],
      searchCommDeptData: [],
      commSearchKey: '',
      commSearchDept: '',
      commSelUserVal: '',
      commSelUserArr: [],
      commSelUserNameArr: [],
      commSelUserTempArr: [],
      commSelUserValObj: {},
      commSelUserValArr: [],
      commLoading: false,
      commFlag: false,
      commMultipleSelection: [],
      commRow: '',

      commGetRowKeys(row) {
        return row.user_id;
      }

    };
  },

  created() {//this._initTeacher();
  },

  methods: {
    _initTeacher() {
      this.checkboxCount = 0;
      let params = {
        page: this.commPage,
        num: this.commNum,
        departPath: this.commSearchDept,
        deleted: 0
      };
      this.commLoading = true;
      params['realName'] = this.commSearchKey['input']; //this.commSelUserArr = [];
      //this.commSelUserNameArr = [];

      this.$axios.get(url["a" /* common */].teacher_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.$refs.commTableRef.clearSelection();
          for (let i = 0; i < res.data.data.page.list.length; i++) {
            let sel = Object(utils["u" /* inArray */])(res.data.data.page.list[i], this.commSelUserArr, 'user_id');

            if (sel > -1) {
              this.commFlag = true;
              res.data.data.page.list[i]['_checked'] = true;
              this.checkboxCount++;
            } else {
              res.data.data.page.list[i]['_checked'] = false;
            }
          }

          if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length) {
            this.commAllCheck = true;
          } else {
            this.commAllCheck = false;
          }

          this.commFlag = false;
          this.tableTeacherCommData = res.data.data.page.list;
          this.commTotalTotal = res.data.data.page.totalCount;
          this.commNum = res.data.data.page.num;
          this.commPage = res.data.data.page.currentPage; //this._handleSelect();
        }

        this.commLoading = false;
      });
    },

    _handleOpen() {
      this.commPage = 1;
      this.commNum = 20;
      this.commSelUserArr = this.selArr;

      this._initTeacher();
    },

    _handleChange(data, index) {
      this.commSelUserVal = data.user_id;
      this.commSelUserValObj = data;
      this.$emit("change", data);
    },

    _handleCascaderChange(data) {
      this.commSearchDept = data[data.length - 1];
      this.commPage = 1;

      this._initTeacher();
    },

    _handleSelectionSelect(event, row) {
      if (event) {
        //选中
        this.commSelUserArr.push(row);
        row._checked = true;
        this.checkboxCount++;
      } else {
        //取消选中
        let checked = Object(utils["u" /* inArray */])(row, this.commSelUserArr, 'user_id');
        this.commSelUserArr.splice(checked, 1);
        row._checked = false;
        this.checkboxCount--;
      }

      if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length) {
        this.commAllCheck = true;
      } else {
        this.commAllCheck = false;
      }

      this.$emit("select", this.commSelUserArr);
    },

    _handleSelectionAllSelect(selection) {
      this.commAllCheck = selection;

      for (let i = 0; i < this.tableTeacherCommData.length; i++) {
        if (selection == true) {
          this.tableTeacherCommData[i]._checked = true;
          let checked = Object(utils["u" /* inArray */])(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');

          if (checked == -1) {
            this.commSelUserArr.push(this.tableTeacherCommData[i]);
          }

          this.checkboxCount++;
        } else {
          this.tableTeacherCommData[i]._checked = false;
          let checked = Object(utils["u" /* inArray */])(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');

          if (checked > -1) {
            this.commSelUserArr.splice(checked, 1);
          }

          this.checkboxCount--;
        }
      }

      this.$emit("select", this.commSelUserArr);
    },

    _handleSelectionChange(data) {},

    _handleSizeChange(data) {
      this.commPage = 1;
      this.commNum = data;

      this._initTeacher();
    },

    _handleCurrentChange(data) {
      this.commPage = data;

      this._initTeacher();
    },

    _handleResetChange() {
      this.value = '';
      this.commNum = 20;
      this.commPage = 1;
      this.searchCommDeptData = [];
      this.commSearchKey = '';
      this.commSearchDept = '';
      this.commSelUserVal = '';
      this.commSelUserValObj = {};
      this.commSelUserValArr = [];
      this.commSelUserArr = [];
      this.commSearchDept = '';

      if (this.$refs['commSearchInput']) {
        this.$refs.commSearchInput.inputValue = "";
      }

      if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.activePath = [];
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      }

      if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.activePath = [];
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      } //this.$refs.commTableRef.clearSelection();

    },

    _handleSelect() {
      this.commFlag = true;
      let selArr = [];
      let arr = [].concat(this.tableTeacherCommData);
      let arrTempUser = [].concat(this.selArr);

      for (let i = 0; i < arr.length; i++) {
        let sel = Object(utils["u" /* inArray */])(arr[i], arrTempUser, 'user_id');

        if (sel > -1) {
          selArr.push(arr[i]);
          this.$refs.commTableRef.toggleRowSelection(arr[i], true);
        }
      }

      this.commSelUserTempArr = selArr;
      this.commFlag = false;
    },

    _handleSearch(data) {
      this.commSearchKey = data;
      this.commPage = 1;

      this._initTeacher();
    },

    _getSelectData() {
      this.$emit("select", this.commSelUserArr);
    }

  }
});
// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndList.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeAndList_TeacherTreeAndListvue_type_script_lang_js_ = (TeacherTreeAndListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  treeAndList_TeacherTreeAndListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09b778cb"
  
)

/* harmony default export */ var TeacherTreeAndList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyInputButton: __webpack_require__(146).default,MyRadio: __webpack_require__(154).default})


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyCheck.vue?vue&type=template&id=765e8652&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[(!_vm.group)?_c('el-checkbox',_vm._b({attrs:{"true-label":_vm.trueLabel,"false-label":_vm.falseLabel,"indeterminate":_vm.indeterminate,"disabled":_vm.disabled,"border":_vm.border,"size":_vm.size},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-checkbox',_vm.selectModel,false),[_vm._t("default")],2):_vm._e(),_vm._ssrNode(" "),(_vm.group)?_c('el-checkbox-group',_vm._b({attrs:{"size":_vm.size,"text-color":_vm.textColor,"fill":_vm.fill,"min":_vm.min,"max":_vm.max},on:{"change":_vm.handleChange},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},'el-checkbox-group',_vm.selectModel,false),[_vm._l((_vm.options),function(item){return (!_vm.button)?_c('el-checkbox',{key:item.value,attrs:{"label":item.value,"disabled":item.disabled,"border":_vm.border,"size":_vm.size}},[_vm._v(_vm._s(item.label))]):_vm._e()}),_vm._v(" "),_vm._l((_vm.options),function(item){return (_vm.button)?_c('el-checkbox-button',{key:item.value,attrs:{"label":item.value,"disabled":item.disabled,"border":_vm.border}},[_vm._t("default",[_vm._v(_vm._s(item.label))])],2):_vm._e()})],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MyCheck.vue?vue&type=template&id=765e8652&

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyCheck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MyCheckvue_type_script_lang_js_ = ({
  name: 'myCheck',
  props: {
    selValue: {
      default: false,
      type: [Boolean, Array, Number, String]
    },
    trueLabel: {
      type: [String, Number]
    },
    falseLabel: {
      type: [String, Number]
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    indeterminate: {
      default: false,
      type: Boolean
    },
    group: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    border: {
      default: false,
      type: Boolean
    },
    button: {
      default: false,
      type: Boolean
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
    textColor: {
      default: '',
      type: String
    },
    fill: {
      default: '',
      type: String
    }
  },
  computed: {
    selectModel() {
      this.value = this.selValue;
    }

  },

  data() {
    return {
      value: '',
      valueGroup: []
    };
  },

  methods: {
    handleChange(data) {
      this.$emit('change', data);
    }

  }
});
// CONCATENATED MODULE: ./components/MyCheck.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MyCheckvue_type_script_lang_js_ = (MyCheckvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MyCheck.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MyCheckvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b10c38c"
  
)

/* harmony default export */ var MyCheck = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/ClassroomTreeAndList.vue?vue&type=template&id=55a68195&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commTeacherList"},[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('my-cascader',{ref:"SelectorClassroom",staticClass:"layout-item",attrs:{"size":"small","width-style":"160","sel-value":_vm.searchCommClassRoomData,"type":"3","sub-type":"2"},on:{"change":function($event){return _vm._handleCascaderChange($event)}}})],1),_vm._ssrNode(" "),_c('el-table',{ref:"commTableRef",attrs:{"data":_vm.tableTeacherCommData,"max-height":_vm.maxHeight,"size":"mini","loading":_vm.commLoading}},[(_vm.setType == 'check')?_c('el-table-column',{attrs:{"align":"center","width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}],null,false,1304403255)}):_vm._e(),_vm._v(" "),(_vm.setType == 'radio')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-radio',_vm._b({attrs:{"sel-value":_vm.commSelUserVal,"label":scope.row.id},on:{"change":function($event){return _vm._handleChange(scope.row)}}},'my-radio',_vm._selValue,false),[_c('span')])]}}],null,false,3064290874)}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"property":"floor_num","align":"center","label":"楼层"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"classroom_no","align":"center","label":"房间号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"","align":"center","label":"容纳人数"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.people_num ? scope.row.people_num : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.people_num ? scope.row.people_num : '--')+"\n          ")])])]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-right margin-top-10\">","</div>",[_c('el-pagination',{attrs:{"current-page":_vm.commPage,"page-sizes":[10, 20, 30, 50, 100],"page-size":_vm.commNum,"layout":"total, sizes, prev, pager, next","total":_vm.commTotalTotal},on:{"size-change":_vm._handleSizeChange,"current-change":_vm._handleCurrentChange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/treeAndList/ClassroomTreeAndList.vue?vue&type=template&id=55a68195&

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./components/MyRadio.vue + 4 modules
var MyRadio = __webpack_require__(154);

// EXTERNAL MODULE: ./components/search/MyInputButton.vue + 4 modules
var MyInputButton = __webpack_require__(146);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/ClassroomTreeAndList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ClassroomTreeAndListvue_type_script_lang_js_ = ({
  name: 'classroomTreeAndList',
  components: {
    MyRadio: MyRadio["default"],
    MyCascader: MyCascader["default"],
    MyRadio: MyRadio["default"],
    MyInputButton: MyInputButton["default"]
  },
  props: {
    selValue: {
      default: '',
      type: [String, Array]
    },
    selArr: {
      default: function () {
        return [];
      },
      type: Array
    },
    setType: {
      default: 'radio',
      type: [String, Number]
    },
    maxHeight: {
      default: '300',
      type: [String, Number]
    }
  },
  computed: {
    _selValue() {
      this.commSelUserVal = this.selValue;
    },

    _selArr() {
      /*let arr = [];
      for (let i = 0; i < this.selArr.length; i++){
        arr.push(this.selArr[i].user_id);
      }*/
      //this.commSelUserArr = this.selArr;
    }

  },

  data() {
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      value: '',
      commPage: 1,
      commNum: 20,
      commTotalTotal: 0,
      tableTeacherCommData: [],
      searchCommClassRoomData: [],
      commSearchKey: '',
      commSearchDept: '',
      commSelUserVal: '',
      commSelUserArr: [],
      commSelUserNameArr: [],
      commSelUserTempArr: [],
      commSelUserValObj: {},
      commSelUserValArr: [],
      commLoading: false,
      commFlag: false,
      commMultipleSelection: [],
      commRow: '',
      commSearchBuild: '',
      commSearchFloor: '',

      commGetRowKeys(row) {
        return row.id;
      }

    };
  },

  created() {//this._initTeacher();
  },

  methods: {
    _initTeacher() {
      this.checkboxCount = 0;
      let params = {
        page: this.commPage,
        num: this.commNum,
        buildId: this.searchCommClassRoomData[0],
        floorNum: this.searchCommClassRoomData[1]
      };
      this.commLoading = true;
      params['realName'] = this.commSearchKey['input']; //this.commSelUserArr = [];
      //this.commSelUserNameArr = [];

      this.$axios.get(url["a" /* common */].classroom_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.$refs.commTableRef.clearSelection();
          for (let i = 0; i < res.data.data.list.length; i++) {
            let sel = Object(utils["u" /* inArray */])(res.data.data.list[i], this.commSelUserArr, 'id');

            if (sel > -1) {
              this.commFlag = true;
              res.data.data.list[i]['_checked'] = true;
              this.checkboxCount++;
            } else {
              res.data.data.list[i]['_checked'] = false;
            }
          }

          if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length) {
            this.commAllCheck = true;
          } else {
            this.commAllCheck = false;
          }

          this.commFlag = false;
          this.tableTeacherCommData = res.data.data.list;
          this.commTotalTotal = res.data.data.totalCount;
          this.commNum = res.data.data.num;
          this.commPage = res.data.data.currentPage; //this._handleSelect();
        }

        this.commLoading = false;
      });
    },

    _handleOpen() {
      this.commPage = 1;
      this.commNum = 20;
      this.commSelUserArr = this.selArr;

      this._initTeacher();
    },

    _handleChange(data, index) {
      this.commSelUserVal = data.id;
      this.commSelUserValObj = data;
      this.$emit("change", data);
    },

    _handleCascaderChange(data) {
      this.searchCommClassRoomData = data;

      this._initTeacher();
    },

    _handleSelectionSelect(event, row) {
      if (event) {
        //选中
        this.commSelUserArr.push(row);
        row._checked = true;
        this.checkboxCount++;
      } else {
        //取消选中
        let checked = Object(utils["u" /* inArray */])(row, this.commSelUserArr, 'id');
        this.commSelUserArr.splice(checked, 1);
        row._checked = false;
        this.checkboxCount--;
      }

      if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommData.length) {
        this.commAllCheck = true;
      } else {
        this.commAllCheck = false;
      }

      this.$emit("select", this.commSelUserArr);
    },

    _handleSelectionAllSelect(selection) {
      this.commAllCheck = selection;

      for (let i = 0; i < this.tableTeacherCommData.length; i++) {
        if (selection == true) {
          this.tableTeacherCommData[i]._checked = true;
          let checked = Object(utils["u" /* inArray */])(this.tableTeacherCommData[i], this.commSelUserArr, 'id');

          if (checked == -1) {
            this.commSelUserArr.push(this.tableTeacherCommData[i]);
          }

          this.checkboxCount++;
        } else {
          this.tableTeacherCommData[i]._checked = false;
          this.checkboxCount--;
        }
      }
    },

    _handleSelectionChange(data) {},

    _handleSizeChange(data) {
      this.commPage = 1;
      this.commNum = data;

      this._initTeacher();
    },

    _handleCurrentChange(data) {
      this.commPage = data;

      this._initTeacher();
    },

    _handleResetChange() {
      this.value = '';
      this.commNum = 20;
      this.commPage = 1;
      this.searchCommClassRoomData = [];
      this.commSearchKey = '';
      this.commSearchDept = '';
      this.commSelUserVal = '';
      this.commSelUserValObj = {};
      this.commSelUserValArr = [];
      this.commSelUserArr = [];

      if (this.$refs.SelectorClassroom && this.$refs.SelectorClassroom.$refs.cascaderSelector) {
        this.$refs.SelectorClassroom.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      }

      if (this.$refs.SelectorClassroom && this.$refs.SelectorClassroom.$refs.cascaderSelector) {
        this.$refs.SelectorClassroom.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      } //this.$refs.commTableRef.clearSelection();

    },

    _handleSelect() {
      this.commFlag = true;
      let selArr = [];
      let arr = [].concat(this.tableTeacherCommData);
      let arrTempUser = [].concat(this.selArr);

      for (let i = 0; i < arr.length; i++) {
        let sel = Object(utils["u" /* inArray */])(arr[i], arrTempUser, 'id');

        if (sel > -1) {
          selArr.push(arr[i]);
          this.$refs.commTableRef.toggleRowSelection(arr[i], true);
        }
      }

      this.commSelUserTempArr = selArr;
      this.commFlag = false;
    },

    _handleSearch(data) {
      this.commSearchKey = data;

      this._initTeacher();
    },

    _getSelectData() {
      this.$emit("select", this.commSelUserArr);
    }

  }
});
// CONCATENATED MODULE: ./components/utils/treeAndList/ClassroomTreeAndList.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeAndList_ClassroomTreeAndListvue_type_script_lang_js_ = (ClassroomTreeAndListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/treeAndList/ClassroomTreeAndList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  treeAndList_ClassroomTreeAndListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13d8a6ba"
  
)

/* harmony default export */ var ClassroomTreeAndList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyRadio: __webpack_require__(154).default})


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/DormBuildTreeAndList.vue?vue&type=template&id=2d612ac5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commTeacherList",staticStyle:{"height":"370px"}},[(!_vm.commDrawer)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"clearable":true,"size":"small","width-style":"160","sel-value":_vm.searchCommDeptData,"type":"2","sub-type":"2"},on:{"change":function($event){return _vm._handleCascaderChange($event)}}})],1),_vm._ssrNode(" "),_c('el-table',{ref:"commTableRef",attrs:{"data":_vm.tableTeacherCommDormData,"max-height":_vm.maxHeight,"size":"mini","loading":_vm.commLoading}},[(_vm.setType == 'select')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{staticClass:"color-grand",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm._selectDorm(scope.row)}}},[_vm._v(_vm._s(_vm.$t("分配")))])]}}],null,false,1415248470)}):_vm._e(),_vm._v(" "),(_vm.setType == 'check')?_c('el-table-column',{attrs:{"align":"center","width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}],null,false,1304403255)}):_vm._e(),_vm._v(" "),(_vm.setType == 'radio')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-radio',_vm._b({attrs:{"sel-value":_vm.commSelUserVal,"label":scope.row.user_id},on:{"change":function($event){return _vm._handleChange(scope.row)}}},'my-radio',_vm._selValue,false),[_c('span')])]}}],null,false,4043958644)}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"property":"dormitory_no","align":"center","label":"宿舍编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"宿舍类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('label',[_vm._v(_vm._s(_vm.dormTypeTextInfo(scope.row.type)))])]}}],null,false,2193574826)}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"student_id","align":"center","label":"容纳人数"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('label',[_vm._v(_vm._s(scope.row.has_people_num))]),_vm._v("\n          /\n          "),_c('label',[_vm._v(_vm._s(scope.row.people_num))])]}}],null,false,834077690)})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-right margin-top-10\">","</div>",[_c('el-pagination',{attrs:{"current-page":_vm.commPage,"page-sizes":[10, 20, 30, 50, 100],"page-size":_vm.commNum,"layout":"total, sizes, prev, pager, next","total":_vm.commTotalTotal},on:{"size-change":_vm._handleSizeChange,"current-change":_vm._handleCurrentChange}})],1)],2):_vm._e(),_vm._ssrNode(" "),(_vm.commDrawer)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('el-button',{attrs:{"size":"small","type":"success","plain":""}},[_c('i',{staticClass:"fa fa-arrow-left"}),_vm._v("\n        "+_vm._s(_vm.$t("返回"))+"\n      ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\">","</div>",[_c('el-table',{ref:"commTableRef",attrs:{"data":_vm.tableDormCommDormData,"max-height":_vm.maxHeight,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"床号","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.bed_no)+"号床")])]}}],null,false,3006094509)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.student_id != null)?_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("已分配")))]):_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("未分配")))])]}}],null,false,3214118545)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.student_id == null)?_c('a',{staticClass:"color-grand",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm._selectBedno(scope.row)}}},[_vm._v(_vm._s(_vm.$t("选择")))]):_c('span',[_vm._v("--")])]}}],null,false,107598844)})],1)],1)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/treeAndList/DormBuildTreeAndList.vue?vue&type=template&id=2d612ac5&

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./components/MyRadio.vue + 4 modules
var MyRadio = __webpack_require__(154);

// EXTERNAL MODULE: ./components/search/MyInputButton.vue + 4 modules
var MyInputButton = __webpack_require__(146);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/DormBuildTreeAndList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var DormBuildTreeAndListvue_type_script_lang_js_ = ({
  name: 'dormBuildTreeAndList',
  components: {
    MyRadio: MyRadio["default"],
    MyCascader: MyCascader["default"],
    MyRadio: MyRadio["default"],
    MyInputButton: MyInputButton["default"]
  },
  props: {
    selValue: {
      default: '',
      type: [String, Array]
    },
    selArr: {
      default: function () {
        return [];
      },
      type: Array
    },
    setType: {
      default: 'radio',
      type: [String, Number]
    },
    maxHeight: {
      default: '300',
      type: [String, Number]
    }
  },
  computed: {
    _selValue() {
      this.commSelUserVal = this.selValue;
    },

    _selArr() {
      /*let arr = [];
      for (let i = 0; i < this.selArr.length; i++){
        arr.push(this.selArr[i].user_id);
      }*/
      //this.commSelUserArr = this.selArr;
    }

  },

  data() {
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      value: '',
      commPage: 1,
      commNum: 20,
      commTotalTotal: 0,
      tableTeacherCommDormData: [],
      searchCommDeptData: [],
      tableDormCommDormData: [],
      commSex: '',
      commSearchKey: '',
      commSearchBuild: '',
      commSearchFloor: '',
      commSelUserVal: '',
      commSelUserArr: [],
      commSelUserNameArr: [],
      commSelUserTempArr: [],
      commSelUserValObj: {},
      commSelUserValArr: [],
      commLoading: false,
      commFlag: false,
      commMultipleSelection: [],
      commRow: '',
      commDrawer: false,
      commUserId: '',

      commGetRowKeys(row) {
        return row.user_id;
      }

    };
  },

  created() {//this._initTeacher();
  },

  methods: {
    _initTeacher() {
      this.checkboxCount = 0;
      let params = {
        page: this.commPage,
        num: this.commNum,
        deleted: 0,
        type: this.commSex.type,
        buildId: this.commSearchBuild,
        floorNum: this.commSearchFloor
      };
      this.commLoading = true;
      params['realName'] = this.commSearchKey['input']; //this.commSelUserArr = [];
      //this.commSelUserNameArr = [];

      this.$axios.get(url["a" /* common */].dormroom_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.$refs.commTableRef.clearSelection();
          for (let i = 0; i < res.data.data.list.length; i++) {
            let sel = Object(utils["u" /* inArray */])(res.data.data.list[i], this.commSelUserArr, 'id');

            if (sel > -1) {
              this.commFlag = true;
              res.data.data.list[i]['_checked'] = true;
              this.checkboxCount++;
            } else {
              res.data.data.list[i]['_checked'] = false;
            }
          }

          if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommDormData.length) {
            this.commAllCheck = true;
          } else {
            this.commAllCheck = false;
          }

          this.commFlag = false;
          this.tableTeacherCommDormData = res.data.data.list;
          this.commTotalTotal = res.data.data.totalCount;
          this.commNum = res.data.data.num;
          this.commPage = res.data.data.currentPage; //this._handleSelect();
        }

        this.commLoading = false;
      });
    },

    _handleOpen(params) {
      this.commPage = 1;
      this.commNum = 20;
      this.commSex = params ? params : '';
      this.commSelUserArr = this.selArr;

      this._initTeacher();
    },

    _handleChange(data, index) {
      this.commSelUserVal = data.id;
      this.commSelUserValObj = data;
      this.$emit("change", data);
    },

    _handleCascaderChange(data) {
      //this.commSearchDept = data[data.length-1];
      this.commSearchBuild = "";
      this.commSearchFloor = "";

      if (data.length == 1) {
        this.commSearchBuild = data[0];
      } else if (data.length == 2) {
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }

      this._initTeacher();
    },

    _handleSelectionSelect(event, row) {
      if (event) {
        //选中
        this.commSelUserArr.push(row);
        row._checked = true;
        this.checkboxCount++;
      } else {
        //取消选中
        let checked = Object(utils["u" /* inArray */])(row, this.commSelUserArr, 'id');
        this.commSelUserArr.splice(checked, 1);
        row._checked = false;
        this.checkboxCount--;
      }

      if (this.checkboxCount != 0 && this.checkboxCount == this.tableTeacherCommDormData.length) {
        this.commAllCheck = true;
      } else {
        this.commAllCheck = false;
      }

      this.$emit("select", this.commSelUserArr);
    },

    _handleSelectionAllSelect(selection) {
      this.commAllCheck = selection;

      for (let i = 0; i < this.tableTeacherCommDormData.length; i++) {
        if (selection == true) {
          this.tableTeacherCommDormData[i]._checked = true;
          let checked = Object(utils["u" /* inArray */])(this.tableTeacherCommDormData[i], this.commSelUserArr, 'id');

          if (checked == -1) {
            this.commSelUserArr.push(this.tableTeacherCommDormData[i]);
          }

          this.checkboxCount++;
        } else {
          this.tableTeacherCommDormData[i]._checked = false;
          this.checkboxCount--;
        }
      }
    },

    _handleSelectionChange(data) {},

    _handleSizeChange(data) {
      this.commPage = 1;
      this.commNum = data;

      this._initTeacher();
    },

    _handleCurrentChange(data) {
      this.commPage = data;

      this._initTeacher();
    },

    _handleResetChange() {
      this.value = '';
      this.commNum = 20;
      this.commPage = 1;
      this.searchCommDeptData = [];
      this.commSearchKey = '';
      this.commSearchDept = '';
      this.commSelUserVal = '';
      this.commSelUserValObj = {};
      this.commSelUserValArr = [];
      this.commSelUserArr = [];
      this.commDrawer = false;
      this.tableDormCommDormData = [];
      this.commSearchBuild = "";
      this.commSearchFloor = "";

      if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.activePath = [];
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      }

      if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.activePath = [];
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      } //this.$refs.commTableRef.clearSelection();

    },

    _handleSelect() {
      this.commFlag = true;
      let selArr = [];
      let arr = [].concat(this.tableTeacherCommDormData);
      let arrTempUser = [].concat(this.selArr);

      for (let i = 0; i < arr.length; i++) {
        let sel = Object(utils["u" /* inArray */])(arr[i], arrTempUser, 'id');

        if (sel > -1) {
          selArr.push(arr[i]);
          this.$refs.commTableRef.toggleRowSelection(arr[i], true);
        }
      }

      this.commSelUserTempArr = selArr;
      this.commFlag = false;
    },

    _handleSearch(data) {
      this.commSearchKey = data;

      this._initTeacher();
    },

    _getSelectData() {
      this.$emit("select", this.commSelUserArr);
    },

    _selectDorm(row) {
      let params = {
        page: 1,
        num: 9999,
        dormitoryId: row.id
      };
      this.$axios.get(url["a" /* common */].dorm_user_class_bed_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.tableDormCommDormData = res.data.data;
        }
      });
      this.commDrawer = true;
    },

    _selectBedno(row) {
      let params = {
        bedNo: row.bed_no,
        dromId: row.drom_id,
        studentId: this.commSex.userId,
        majorClassId: this.commSex.majorId
      };
      params = this.$qs.stringify(params);
      this.$axios.post(url["a" /* common */].dorm_user_class_bed_distribute, params).then(res => {
        if (res.data.data) {
          this._initTeacher();

          Object(utils["b" /* MessageSuccess */])(res.data.desc);
          this.$emit("distribute", res.data.data);
        } else {
          Object(utils["c" /* MessageWarning */])(res.data.desc);
        }
      });
    },

    dormTypeTextInfo(val) {
      return Object(utils["n" /* dormTypeText */])(val);
    }

  }
});
// CONCATENATED MODULE: ./components/utils/treeAndList/DormBuildTreeAndList.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeAndList_DormBuildTreeAndListvue_type_script_lang_js_ = (DormBuildTreeAndListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/treeAndList/DormBuildTreeAndList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  treeAndList_DormBuildTreeAndListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "29360e65"
  
)

/* harmony default export */ var DormBuildTreeAndList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyRadio: __webpack_require__(154).default})


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7096bc8c", content, true, context)
};

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_b4bf2556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_b4bf2556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_b4bf2556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_b4bf2556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_b4bf2556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_b4bf2556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-b4bf2556]{padding:10px 15px}.setting-td[data-v-b4bf2556]{height:100%;width:100%;font-size:12px;position:relative}.setting-icon[data-v-b4bf2556]{height:25px;width:25px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/attendanceInfo/administration/setting.vue?vue&type=template&id=b4bf2556&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('layout-tb',[_c('template',{slot:"tag"},[_vm._v("考勤设置")]),_vm._v(" "),_c('div',{attrs:{"slot":"tab"},slot:"tab"},[_c('el-row',[_c('el-col',{attrs:{"span":18}},[_c('el-button',{attrs:{"size":"small","type":"primary","icon":"el-icon-plus"},on:{"click":function($event){return _vm.addInfo($event)}}},[_vm._v(_vm._s(_vm.$t("添加考勤组")))])],1),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":6}})],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","row-key":"id","max-height":_vm.tableHeight.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.group_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.group_name))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('人数')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.user_size))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.user_size))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('考勤时间')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-left"},_vm._l((JSON.parse(scope.row.work_day_setting)),function(item,index){return (scope.row.work_day_setting)?_c('div',{key:index},[_c('div',[(JSON.parse(scope.row.work_day_setting)[index].weekSwitch == true)?_c('span',[_vm._v("\n                      "+_vm._s(_vm.weekNoText2Info(index))+":"+_vm._s(JSON.parse(scope.row.work_day_setting)[index].startTime)+"-"+_vm._s(JSON.parse(scope.row.work_day_setting)[index].endTime)+"\n                    ")]):_vm._e()])]):_vm._e()}),0),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.upper_time)?_c('span',{staticClass:"color-grand"},[_vm._v(_vm._s(scope.row.upper_time)+"-"+_vm._s(scope.row.lower_time))]):_vm._e()])]),_vm._v(" "),_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-left"},_vm._l((JSON.parse(scope.row.work_day_setting2)),function(item,index){return (scope.row.work_day_setting2)?_c('div',{key:index},[_c('div',[(JSON.parse(scope.row.work_day_setting2)[index].weekSwitch == true)?_c('span',[_vm._v("\n                      "+_vm._s(_vm.weekNoText2Info(index))+":"+_vm._s(JSON.parse(scope.row.work_day_setting2)[index].startTime)+"-"+_vm._s(JSON.parse(scope.row.work_day_setting2)[index].endTime)+"\n                    ")]):_vm._e()])]):_vm._e()}),0),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.upper_time2)?_c('span',{staticClass:"color-grand"},[_vm._v(_vm._s(scope.row.upper_time2)+"-"+_vm._s(scope.row.lower_time2))]):_vm._e()])]),_vm._v(" "),_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-left"},_vm._l((JSON.parse(scope.row.work_day_setting3)),function(item,index){return (scope.row.work_day_setting3)?_c('div',{key:index},[_c('div',[(JSON.parse(scope.row.work_day_setting3)[index].weekSwitch == true)?_c('span',[_vm._v("\n                      "+_vm._s(_vm.weekNoText2Info(index))+":"+_vm._s(JSON.parse(scope.row.work_day_setting3)[index].startTime)+"-"+_vm._s(JSON.parse(scope.row.work_day_setting3)[index].endTime)+"\n                    ")]):_vm._e()])]):_vm._e()}),0),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.upper_time3)?_c('span',{staticClass:"color-grand"},[_vm._v(_vm._s(scope.row.upper_time3)+"-"+_vm._s(scope.row.lower_time3))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('监督员')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},_vm._l((JSON.parse(scope.row.supervisors)),function(item,index){return _c('el-tag',{key:index,staticClass:"margin-right-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(item.name))])}),1),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},_vm._l((JSON.parse(scope.row.supervisors)),function(item,index){return _c('el-tag',{key:index,staticClass:"margin-right-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(item.name))])}),1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('考勤方式')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.rull_type == 0)?_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("全校")))]):_vm._e(),_vm._v(" "),(scope.row.rull_type != 0)?_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.sign_type == 0)?_c('span',[_vm._v(_vm._s(_vm.$t("LBS地图定位考勤")))]):_vm._e(),_vm._v(" "),(scope.row.sign_type == 0)?_c('span',[_vm._v(_vm._s(_vm.$t("人脸识别考勤机")))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.sign_type == 0)?_c('span',[_vm._v(_vm._s(_vm.$t("LBS地图定位考勤")))]):_vm._e(),_vm._v(" "),(scope.row.sign_type == 1)?_c('span',[_vm._v(_vm._s(_vm.$t("人脸识别考勤机")))]):_vm._e()])]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('考勤地点')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._l((JSON.parse(scope.row.area_range)),function(item,index){return (scope.row.sign_type == 0)?_c('el-tag',{key:index,staticClass:"margin-right-5 margin-bottom-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(item.name))]):_vm._e()}),_vm._v(" "),_vm._l((JSON.parse(scope.row.device_sns)),function(item,index){return (scope.row.sign_type == 1)?_c('el-tag',{key:index,staticClass:"margin-right-5 margin-bottom-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(item))]):_vm._e()})],2),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._l((JSON.parse(scope.row.area_range)),function(item,index){return (scope.row.sign_type == 0)?_c('el-tag',{key:index,staticClass:"margin-right-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(item.name))]):_vm._e()}),_vm._v(" "),_vm._l((JSON.parse(scope.row.device_sns)),function(item,index){return (scope.row.sign_type == 1)?_c('el-tag',{key:index,staticClass:"margin-right-5",attrs:{"size":"mini","type":"success"}},[_vm._v(_vm._s(item))]):_vm._e()})],2)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","fixed":"right","label":"操作","width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-edit color-grand margin-right-5",on:{"click":function($event){return _vm.editInfo(scope.row)}}}),_vm._v(" "),(scope.row.rull_type != 0)?_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteInfo(scope.row)}}}):_vm._e()]}}])})],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],1)],2),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"width-style":"1200px","visible":_vm.modalVisible,"title":_vm.$t('设置分组')},on:{"close":_vm.closeDialog,"right-close":_vm.cancelDialog}},[_c('div',{staticClass:"margin-top-10"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('组名'),"prop":"name"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('参与考勤'),"prop":"partUserIds"}},[_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"right","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)},"hide":_vm.handleHideeacher}},[_c('div',[_c('teacher-tree-and-list',{ref:"popverPartRef",attrs:{"sel-arr":_vm.form.partUserIds,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event,1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},slot:"reference"},[_vm._v(_vm._s(_vm.$t("添加")))])],1),_vm._v(" "),_c('span',{staticClass:"color-warning margin-left-10"},[_c('i',{staticClass:"fa fa-user"}),_vm._v("\n            "+_vm._s(_vm.$t("已选择"))+_vm._s(_vm.form.partUserIds.length)+_vm._s(_vm.$t("人员"))+"\n          ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('监督员'),"prop":"auditUserIds"}},[_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"right","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(2)},"hide":_vm.handleHideeacher}},[_c('div',[_c('teacher-tree-and-list',{ref:"popverAuditRef",attrs:{"sel-arr":_vm.form.auditUserIds,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event,2)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},slot:"reference"},[_vm._v(_vm._s(_vm.$t("添加")))])],1),_vm._v(" "),_c('span',{staticClass:"color-warning margin-left-10"},[_c('i',{staticClass:"fa fa-user"}),_vm._v("\n            "+_vm._s(_vm.$t("已选择"))+_vm._s(_vm.form.auditUserIds.length)+_vm._s(_vm.$t("人员"))+"\n          ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('时间设置')}},[_c('div',{staticClass:"margin-bottom-5"},[_c('el-button-group',[_c('el-button',{attrs:{"size":"mini","type":_vm.form.workTimes == 1 ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange($event, 1)}}},[_vm._v(_vm._s(_vm.$t('一天1次上下班')))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":_vm.form.workTimes == 2 ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange($event, 2)}}},[_vm._v(_vm._s(_vm.$t('一天2次上下班')))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":_vm.form.workTimes == 3 ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange($event, 3)}}},[_vm._v(_vm._s(_vm.$t('一天3次上下班')))])],1),_vm._v(" "),_c('span',[_c('my-check',{attrs:{"sel-value":_vm.form.workTimesSwitch},on:{"change":function($event){return _vm.handleChange($event, 4)}}},[_c('span',[_vm._v(_vm._s(_vm.$t('打卡时间段设置')))])])],1)],1),_vm._v(" "),_vm._l((_vm.form.timeTimes),function(item,index){return _c('div',{key:index},[_c('span',{staticClass:"font-size-12 color-muted margin-right-5"},[_vm._v(_vm._s(_vm.$t("第"))+_vm._s(index+1)+_vm._s(_vm.$t("次"))+_vm._s(_vm.$t("默认班次时间")))]),_vm._v(" "),_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 1)}},model:{value:(item.startTime),callback:function ($$v) {_vm.$set(item, "startTime", $$v)},expression:"item.startTime"}}),_vm._v("\n            -\n            "),_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 2)}},model:{value:(item.endTime),callback:function ($$v) {_vm.$set(item, "endTime", $$v)},expression:"item.endTime"}}),_vm._v(" "),(_vm.form.workTimesSwitch == true)?_c('span',[_c('label',{staticClass:"font-size-12 color-muted"},[_vm._v("\n              "+_vm._s(_vm.$t("上班前"))+"\n                "),_c('el-input',{staticStyle:{"width":"50px"},attrs:{"size":"mini"},model:{value:(item.upBefore),callback:function ($$v) {_vm.$set(item, "upBefore", $$v)},expression:"item.upBefore"}}),_vm._v("\n                "+_vm._s(_vm.$t("分钟"))+"\n              ")],1),_vm._v(" "),_c('label',{staticClass:"font-size-12 color-muted"},[_vm._v("\n                "+_vm._s(_vm.$t("下班后"))+"\n                "),_c('el-input',{staticStyle:{"width":"50px"},attrs:{"size":"mini"},model:{value:(item.downAfter),callback:function ($$v) {_vm.$set(item, "downAfter", $$v)},expression:"item.downAfter"}}),_vm._v("\n                "+_vm._s(_vm.$t("分钟"))+"\n              ")],1)]):_vm._e()],1)})],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('工作日设置')}},[_c('el-row',{staticStyle:{"margin-left":"0px !important","margin-right":"0px !important"},attrs:{"gutter":4}},[(_vm.form.workTimes == 1 || _vm.form.workTimes == 2 || _vm.form.workTimes == 3)?_c('el-col',{attrs:{"span":8}},[_c('el-card',{attrs:{"body-style":{padding: '0px 5px'}}},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("第一次上下班")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('ul',_vm._l((_vm.form.workTimeWeek1),function(item,index){return _c('li',{key:index,staticClass:"font-size-12 color-muted"},[_c('my-check',{attrs:{"sel-value":item.weekSwitch},on:{"change":function($event){return _vm.handleWeekSwitch($event, item, index)}}},[_c('span',{staticClass:"font-size-12 color-muted",staticStyle:{"font-weight":"normal"}},[_vm._v(_vm._s(_vm.weekNoText2Info(index+1)))])]),_vm._v(" "),_c('span',[_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 3)}},model:{value:(item.startTime),callback:function ($$v) {_vm.$set(item, "startTime", $$v)},expression:"item.startTime"}}),_vm._v("\n                        -\n                        "),_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 4)}},model:{value:(item.endTime),callback:function ($$v) {_vm.$set(item, "endTime", $$v)},expression:"item.endTime"}})],1)],1)}),0)])])],1):_vm._e(),_vm._v(" "),(_vm.form.workTimes == 2 || _vm.form.workTimes == 3)?_c('el-col',{attrs:{"span":8}},[_c('el-card',{attrs:{"body-style":{padding: '0px 5px'}}},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("第二次上下班")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('ul',_vm._l((_vm.form.workTimeWeek2),function(item,index){return _c('li',{key:index,staticClass:"font-size-12 color-muted"},[_c('my-check',{attrs:{"sel-value":item.weekSwitch},on:{"change":function($event){return _vm.handleWeekSwitch($event, item, index)}}},[_c('span',{staticClass:"font-size-12 color-muted",staticStyle:{"font-weight":"normal"}},[_vm._v(_vm._s(_vm.weekNoText2Info(index+1)))])]),_vm._v(" "),_c('span',[_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 5)}},model:{value:(item.startTime),callback:function ($$v) {_vm.$set(item, "startTime", $$v)},expression:"item.startTime"}}),_vm._v("\n                        -\n                        "),_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 6)}},model:{value:(item.endTime),callback:function ($$v) {_vm.$set(item, "endTime", $$v)},expression:"item.endTime"}})],1)],1)}),0)])])],1):_vm._e(),_vm._v(" "),(_vm.form.workTimes == 3)?_c('el-col',{attrs:{"span":8}},[_c('el-card',{attrs:{"body-style":{padding: '0px 5px'}}},[_c('div',[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v(_vm._s(_vm.$t("第三次上下班")))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('ul',_vm._l((_vm.form.workTimeWeek3),function(item,index){return _c('li',{key:index,staticClass:"font-size-12 color-muted"},[_c('my-check',{attrs:{"sel-value":item.weekSwitch},on:{"change":function($event){return _vm.handleWeekSwitch($event, item, index)}}},[_c('span',{staticClass:"font-size-12 color-muted",staticStyle:{"font-weight":"normal"}},[_vm._v(_vm._s(_vm.weekNoText2Info(index+1)))])]),_vm._v(" "),_c('span',[_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 7)}},model:{value:(item.startTime),callback:function ($$v) {_vm.$set(item, "startTime", $$v)},expression:"item.startTime"}}),_vm._v("\n                        -\n                        "),_c('el-time-picker',{staticClass:"layout-item",staticStyle:{"width":"95px"},attrs:{"size":"mini","clearable":false,"value-format":"HH:mm","format":"HH:mm","placeholder":_vm.$t('选择时间')},on:{"change":function($event){return _vm.handleChangeTime($event, item, index, 8)}},model:{value:(item.endTime),callback:function ($$v) {_vm.$set(item, "endTime", $$v)},expression:"item.endTime"}})],1)],1)}),0)])])],1):_vm._e()],1),_vm._v(" "),_c('div',[_c('span',[_c('my-check',{attrs:{"sel-value":_vm.form.autoSwitch},on:{"change":function($event){return _vm.handleChange($event, 5)}}},[_vm._v("\n                "+_vm._s(_vm.$t("法定节假日自动调休"))+"\n              ")])],1)])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('特殊日期')}},[_c('div',[_c('el-date-picker',{staticStyle:{"width":"400px"},attrs:{"type":"dates","value-format":"yyyy-MM-dd","placeholder":_vm.$t('选择一个或多个日期')},model:{value:(_vm.form.mustTimes),callback:function ($$v) {_vm.$set(_vm.form, "mustTimes", $$v)},expression:"form.mustTimes"}}),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("必须打卡日期")))])],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('el-date-picker',{staticStyle:{"width":"400px"},attrs:{"type":"dates","value-format":"yyyy-MM-dd","placeholder":_vm.$t('选择一个或多个日期')},model:{value:(_vm.form.noMustTimes),callback:function ($$v) {_vm.$set(_vm.form, "noMustTimes", $$v)},expression:"form.noMustTimes"}}),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("不用打卡日期")))])],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('旷工设置')}},[_c('div',[_c('my-radio',{attrs:{"sel-value":_vm.form.unSignRule,"label":"1"},on:{"change":function($event){return _vm.changeStatus($event,1)}}},[_vm._v(_vm._s(_vm.$t("旷工半天规则1")))]),_vm._v(" "),_c('span',{staticClass:"color-muted font-size-12"},[_vm._v("\n              "+_vm._s(_vm.$t("上班时间未满"))+"\n              "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small"},model:{value:(_vm.form.unSignRuleTime1),callback:function ($$v) {_vm.$set(_vm.form, "unSignRuleTime1", $$v)},expression:"form.unSignRuleTime1"}}),_vm._v("\n              "+_vm._s(_vm.$t("小时/天"))+"\n            ")],1)],1),_vm._v(" "),_c('div',[_c('my-radio',{attrs:{"sel-value":_vm.form.unSignRule,"label":"2"},on:{"change":function($event){return _vm.changeStatus($event,2)}}},[_vm._v(_vm._s(_vm.$t("旷工半天规则2")))]),_vm._v(" "),_c('span',{staticClass:"color-muted font-size-12"},[_vm._v("\n              "+_vm._s(_vm.$t("迟到+早退累计"))+"\n              "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small"},model:{value:(_vm.form.unSignRuleTime2),callback:function ($$v) {_vm.$set(_vm.form, "unSignRuleTime2", $$v)},expression:"form.unSignRuleTime2"}}),_vm._v("\n              "+_vm._s(_vm.$t("小时/天"))+"\n            ")],1)],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"color-muted font-size-12"},[_c('label',{staticClass:"color-grand font-size-14",staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(_vm.$t("旷工1天规则")))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("打卡次数<=")))]),_vm._v(" "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small"},model:{value:(_vm.form.unSignRuleTime3),callback:function ($$v) {_vm.$set(_vm.form, "unSignRuleTime3", $$v)},expression:"form.unSignRuleTime3"}}),_vm._v("\n              "+_vm._s(_vm.$t("次/天"))+"\n            ")],1)])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('旷工月统计规则')}},[_c('div',[_c('label',{staticClass:"color-grand font-size-14",staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(_vm.$t("旷工半天统计规则")))]),_vm._v(" "),_c('span',{staticClass:"color-muted font-size-12"},[_vm._v("\n              "+_vm._s(_vm.$t("迟到+早退累计"))+"\n              "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small"},model:{value:(_vm.form.unSignStaticRuleTime1),callback:function ($$v) {_vm.$set(_vm.form, "unSignStaticRuleTime1", $$v)},expression:"form.unSignStaticRuleTime1"}}),_vm._v("\n              "+_vm._s(_vm.$t("次/月"))+"\n            ")],1)]),_vm._v(" "),_c('div',[_c('div',{staticClass:"layout-inline"},[_c('label',{staticClass:"color-grand font-size-14 layout-item",staticStyle:{"font-weight":"bold","position":"relative","top":"-40px"}},[_vm._v(_vm._s(_vm.$t("旷工1天统计规则")))]),_vm._v(" "),_c('div',{staticClass:"color-muted font-size-12 layout-item"},[_c('div',[_vm._v("\n                  "+_vm._s(_vm.$t("迟到+早退累计<="))+"\n                  "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small"},model:{value:(_vm.form.unSignStaticRuleTime2),callback:function ($$v) {_vm.$set(_vm.form, "unSignStaticRuleTime2", $$v)},expression:"form.unSignStaticRuleTime2"}}),_vm._v("\n                  "+_vm._s(_vm.$t("次/月"))+"\n                ")],1),_vm._v(" "),_c('div',[_vm._v("\n                  "+_vm._s(_vm.$t("迟到+早退累计"))+"\n                  "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small"},model:{value:(_vm.form.unSignStaticRuleTime3),callback:function ($$v) {_vm.$set(_vm.form, "unSignStaticRuleTime3", $$v)},expression:"form.unSignStaticRuleTime3"}}),_vm._v("\n                  "+_vm._s(_vm.$t("小时/月"))+"\n                ")],1)])])])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('考勤地点'),"prop":"deviceList"}},[_c('div',[_c('my-radio',{attrs:{"sel-value":_vm.form.addrSwitch,"label":"0","disabled":true},on:{"change":function($event){return _vm.changeStatus($event,3)}}},[_vm._v(_vm._s(_vm.$t("LBS地图定位考勤"))),_c('span',{staticClass:"color-danger"},[_vm._v("("+_vm._s(_vm.$t("暂未开放"))+")")])])],1),_vm._v(" "),_c('div',[_c('my-radio',{attrs:{"sel-value":_vm.form.addrSwitch,"label":"1"},on:{"change":function($event){return _vm.changeStatus($event,4)}}},[_vm._v(_vm._s(_vm.$t("人脸识别机考勤")))]),_vm._v(" "),_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"margin-bottom-5"},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("一体机设备")))])]),_vm._v(" "),_c('el-card',{staticStyle:{"width":"240px","max-height":"200px","overflow":"auto"},attrs:{"body-style":{padding: '5px 5px'}}},[(_vm.tableDeviceList.length == 0)?_c('span',{staticClass:"color-disabeld"},[_vm._v(_vm._s(_vm.$t("暂无数据")))]):_c('ul',[_c('el-checkbox-group',{model:{value:(_vm.form.deviceList),callback:function ($$v) {_vm.$set(_vm.form, "deviceList", $$v)},expression:"form.deviceList"}},_vm._l((_vm.tableDeviceList),function(item,index){return _c('li',{key:index},[_c('el-checkbox',{key:index,attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])],1)}),0)],1)])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"margin-bottom-5"},[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("二维码/刷卡设备")))])]),_vm._v(" "),_c('el-card',{staticStyle:{"width":"240px","max-height":"200px","overflow":"auto"},attrs:{"body-style":{padding: '5px 5px'}}},[(_vm.tableDeviceList.length == 0)?_c('span',{staticClass:"color-disabeld"},[_vm._v(_vm._s(_vm.$t("暂无数据")))]):_c('ul',[_c('el-checkbox-group',{model:{value:(_vm.form.deviceList),callback:function ($$v) {_vm.$set(_vm.form, "deviceList", $$v)},expression:"form.deviceList"}},_vm._l((_vm.tableDeviceDoorList),function(item,index){return _c('li',{key:index},[_c('el-checkbox',{key:index,attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])],1)}),0)],1)])],1)],1)],1)])],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.dialogLoading == false ? _vm.okDialog() : ''}}},[(_vm.dialogLoading)?_c('i',{staticClass:"el-icon-loading"}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.$t("确定"))+"\n      ")])],1)]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","detail":_vm.subTitle,"content":_vm.tips},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/attendanceInfo/administration/setting.vue?vue&type=template&id=b4bf2556&scoped=true&

// EXTERNAL MODULE: ./components/MyPagination.vue + 4 modules
var MyPagination = __webpack_require__(27);

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/Layout/LayoutTb.vue + 4 modules
var LayoutTb = __webpack_require__(152);

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/utils/MyUserType.vue + 4 modules
var MyUserType = __webpack_require__(163);

// EXTERNAL MODULE: ./components/MyDatePicker.vue + 4 modules
var MyDatePicker = __webpack_require__(148);

// EXTERNAL MODULE: ./components/search/MyInputButton.vue + 4 modules
var MyInputButton = __webpack_require__(146);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(28);

// EXTERNAL MODULE: ./components/utils/treeAndList/ClassroomTreeAndList.vue + 4 modules
var ClassroomTreeAndList = __webpack_require__(195);

// EXTERNAL MODULE: ./components/MyCheck.vue + 4 modules
var MyCheck = __webpack_require__(169);

// EXTERNAL MODULE: ./components/utils/treeAndList/DormBuildTreeAndList.vue + 4 modules
var DormBuildTreeAndList = __webpack_require__(196);

// EXTERNAL MODULE: ./components/MyRadio.vue + 4 modules
var MyRadio = __webpack_require__(154);

// EXTERNAL MODULE: ./utils/validater/rules.js
var rules = __webpack_require__(11);
var rules_default = /*#__PURE__*/__webpack_require__.n(rules);

// CONCATENATED MODULE: ./utils/validater/adminSettingValidater.js

/* harmony default export */ var adminSettingValidater = ({
  data() {
    return {
      rules: {
        name: [{
          required: true,
          message: this.$t("请输入名称"),
          trigger: 'blur'
        }, {
          validator: rules_default.a.FormValidate.Form().validatenall1_20Reg,
          trigger: 'blur'
        }],
        deviceList: [{
          required: true,
          type: 'array',
          min: 1,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }],
        partUserIds: [{
          required: true,
          type: 'array',
          min: 1,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }],
        auditUserIds: [{
          required: true,
          type: 'array',
          min: 1,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }]
      }
    };
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/attendanceInfo/administration/setting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  mixins: [mixins["a" /* default */], adminSettingValidater],
  components: {
    MyRadio: MyRadio["default"],
    DormBuildTreeAndList: DormBuildTreeAndList["default"],
    MyCheck: MyCheck["default"],
    MyPagination: MyPagination["default"],
    LayoutTb: LayoutTb["default"],
    MySelect: MySelect["default"],
    MyUserType: MyUserType["default"],
    MyDatePicker: MyDatePicker["default"],
    MyInputButton: MyInputButton["default"],
    DialogNormal: DialogNormal["default"],
    ClassroomTreeAndList: ClassroomTreeAndList["default"],
    MyCheck: MyCheck["default"],
    MySelect: MySelect["default"],
    DormBuildTreeAndList: DormBuildTreeAndList["default"]
  },

  data() {
    return {
      tableData: [],
      tableSettingData: [],
      searchDate: [],
      typeList: [],
      sectionList: [],
      tableDayInfo: [],
      searchKey: '',
      visible: false,
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      modalOtherVisible: false,
      clearTime: '',
      action: '',
      subTitle: '',
      errorTips: '',
      tips: '',
      tableDeviceList: [],
      tableDeviceDoorList: [],
      form: {
        id: '',
        name: '',
        workTimes: 1,
        workTimesSwitch: false,
        timeTimes: [{
          startTime: '00:00',
          endTime: '00:00',
          upBefore: '',
          downAfter: ''
        }],
        workTimeWeek1: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        workTimeWeek2: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        workTimeWeek3: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        autoSwitch: false,
        mustTimes: [],
        noMustTimes: [],
        unSignRule: "1",
        unSignRule1: false,
        unSignRule2: false,
        unSignRuleTime1: '',
        unSignRuleTime2: '',
        unSignRuleTime3: '',
        unSignStaticRule1: false,
        unSignStaticRule2: false,
        unSignStaticRuleTime1: '',
        unSignStaticRuleTime2: '',
        unSignStaticRuleTime3: '',
        addrSwitch: "1",
        deviceList: [],
        partUserIds: [],
        auditUserIds: []
      }
    };
  },

  created() {
    this.init();
    this.initDevice("1,2,4", "3,4", 1);
    this.initDevice("4", "6", 2);
  },

  methods: {
    async init() {
      //await this.getSessionInfo();
      this.initPage();
    },

    initPage() {
      let params = {
        page: this.page,
        num: this.num
      };
      this.$axios.get(api_url["a" /* common */].attend_admin_setting_page, {
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

    initDevice(sceneType, deviceType, type) {
      let arr = [];
      let params = {
        page: 1,
        num: 999,
        sceneType: sceneType,
        deviceType: deviceType
      };
      this.$axios.get(api_url["a" /* common */].device_join_in_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.list.length; i++) {
            res.data.data.list[i]['label'] = res.data.data.list[i].name ? res.data.data.list[i].name : res.data.data.list[i].sn;
            res.data.data.list[i]['value'] = res.data.data.list[i].sn;
          }

          if (type == 1) {
            this.tableDeviceList = res.data.data.list;
          }

          if (type == 2) {
            this.tableDeviceDoorList = res.data.data.list;
          }
        }
      });
    },

    initSetting(row) {
      let params = {};

      if (row) {
        params = {
          checkbedRuleId: row.id
        };
      }

      this.$axios.get(api_url["a" /* common */].attend_dorm_setting_info, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.tableDayInfo = res.data.data;
        }
      });
    },

    addInfo() {
      this.initSetting();
      this.modalVisible = true;
    },

    syncInfo() {
      this.oprType = "sync";
      this.tips = this.$t("当天已考勤数据会被全部删除，是否确认？");
      this.visibleConfim = true;
    },

    otherInfo() {
      this.modalOtherVisible = true;
    },

    editInfo(row) {
      console.log(row);
      let parts = row.add_teachers ? JSON.parse(row.add_teachers) : [];
      let audtis = row.supervisors ? JSON.parse(row.supervisors) : [];
      let arr = [];
      let arrAudit = [];
      let arrTimes = [];
      let weekSetting1 = row.work_day_setting ? JSON.parse(row.work_day_setting) : '';
      let weekSetting2 = row.work_day_setting2 ? JSON.parse(row.work_day_setting2) : '';
      let weekSetting3 = row.work_day_setting3 ? JSON.parse(row.work_day_setting3) : '';
      let mustTimes = row.must_attend_days ? JSON.parse(row.must_attend_days) : [];
      let notMustTimes = row.not_attend_days ? JSON.parse(row.not_attend_days) : [];
      let deviceList = row.device_sns ? JSON.parse(row.device_sns) : [];
      this.form = {
        id: row.id,
        name: row.group_name,
        workTimes: row.day_times,
        workTimesSwitch: row.sign_time_setting,
        timeTimes: [],
        workTimeWeek1: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        workTimeWeek2: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        workTimeWeek3: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        autoSwitch: row.auto_holiday,
        mustTimes: [],
        noMustTimes: [],
        unSignRule: '' + row.absent_half_rule_type,
        unSignRule1: false,
        unSignRule2: false,
        unSignRuleTime1: row.absent_half_rule_type == 1 ? row.absent_half_rule_hours : 0,
        unSignRuleTime2: row.absent_half_rule_type == 2 ? row.absent_half_rule_hours : 0,
        unSignRuleTime3: row.absent_full_rule_sign_times,
        unSignStaticRule1: false,
        unSignStaticRule2: false,
        unSignStaticRuleTime1: row.absent_half_rule_times,
        unSignStaticRuleTime2: row.absent_full_rule_times,
        unSignStaticRuleTime3: row.absent_full_rule_hours,
        addrSwitch: '' + row.sign_type,
        deviceList: [],
        partUserIds: [],
        auditUserIds: []
      };

      for (let i in weekSetting1) {
        //this.form.workTimeWeek1[i-1] = {weekSwitch: true, startTime: weekSetting1[i].startTime, endTime: weekSetting1[i].endTime};
        this.$set(this.form.workTimeWeek1, i - 1, {
          weekSwitch: true,
          startTime: weekSetting1[i].startTime,
          endTime: weekSetting1[i].endTime
        });
      }

      for (let i in weekSetting2) {
        //this.form.workTimeWeek2[i-1] = {weekSwitch: true, startTime: weekSetting2[i].startTime, endTime: weekSetting2[i].endTime};
        this.$set(this.form.workTimeWeek2, i - 1, {
          weekSwitch: true,
          startTime: weekSetting2[i].startTime,
          endTime: weekSetting2[i].endTime
        });
      }

      for (let i in weekSetting3) {
        //this.form.workTimeWeek3[i-1] = {weekSwitch: true, startTime: weekSetting3[i].startTime, endTime: weekSetting3[i].endTime};
        this.$set(this.form.workTimeWeek3, i - 1, {
          weekSwitch: true,
          startTime: weekSetting3[i].startTime,
          endTime: weekSetting3[i].endTime
        });
      }

      for (let i = 0; i < row.day_times; i++) {
        if (i == 0) {
          arrTimes[0] = {
            startTime: row.upper_time,
            endTime: row.lower_time,
            upBefore: row.before_stimer,
            downAfter: row.after_stimer
          };
        }

        if (i == 1) {
          arrTimes[1] = {
            startTime: row.upper_time2,
            endTime: row.lower_time2,
            upBefore: row.before_stimer2,
            downAfter: row.after_stimer2
          };
        }

        if (i == 2) {
          arrTimes[2] = {
            startTime: row.upper_time3,
            endTime: row.lower_time3,
            upBefore: row.before_stimer3,
            downAfter: row.after_stimer3
          };
        }
      }

      for (let i = 0; i < parts.length; i++) {
        arr.push({
          user_id: parts[i]
        });
      }

      for (let i = 0; i < audtis.length; i++) {
        arrAudit.push({
          user_id: audtis[i].userId,
          name: audtis[i].name,
          real_name: audtis[i].name
        });
      }

      this.$set(this.form, 'deviceList', deviceList);
      this.$set(this.form, 'mustTimes', mustTimes);
      this.$set(this.form, 'noMustTimes', notMustTimes);
      this.$set(this.form, 'timeTimes', arrTimes);
      this.$set(this.form, 'partUserIds', arr);
      this.$set(this.form, 'auditUserIds', arrAudit);
      this.initSetting(row);
      this.modalVisible = true;
    },

    resetInfo(row) {
      this.oprType = "reset";
      this.form.id = row.id;
      this.subTitle = row.name;
      this.tips = this.$t("确认需要重置时间吗？");
      this.visibleConfim = true;
    },

    search(data) {
      this.searchKey = data.input;
      this.page = 1;
      this.init();
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

    handleSelect(data) {
      this.form.type = data;
    },

    deleteInfo(row) {
      this.oprType = "del";
      this.form.id = row.id;
      this.subTitle = row.name;
      this.tips = "确认需要删除该信息？";
      this.visibleConfim = true;
    },

    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        groupId: this.form.id
      };
      url = api_url["a" /* common */].attend_admin_setting_delete;
      params = this.$qs.stringify(params);
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.visibleConfim = false;
        this.dialogLoading = false;
      });
    },

    handleCancelChange(data) {
      this.visibleConfim = false;
    },

    cancelDialog() {
      this.modalVisible = false;
    },

    closeDialog(event) {
      this.form = {
        id: '',
        name: '',
        workTimes: 1,
        workTimesSwitch: false,
        timeTimes: [{
          startTime: '00:00',
          endTime: '00:00',
          upBefore: '',
          downAfter: ''
        }],
        workTimeWeek1: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        workTimeWeek2: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        workTimeWeek3: [{
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }, {
          weekSwitch: false,
          startTime: '00:00',
          endTime: '00:00'
        }],
        autoSwitch: false,
        mustTimes: [],
        noMustTimes: [],
        unSignRule: "1",
        unSignRule1: false,
        unSignRule2: false,
        unSignRuleTime1: '',
        unSignRuleTime2: '',
        unSignRuleTime3: '',
        unSignStaticRule1: false,
        unSignStaticRule2: false,
        unSignStaticRuleTime1: '',
        unSignStaticRuleTime2: '',
        unSignStaticRuleTime3: '',
        addrSwitch: "1",
        deviceList: [],
        partUserIds: [],
        auditUserIds: []
      };
      this.subTitle = "";
      this.oprType == "";

      if (this.$refs['popverPartRef']) {
        this.$refs.popverPartRef._handleResetChange();
      }

      if (this.$refs['popverAuditRef']) {
        this.$refs.popverAuditRef._handleResetChange();
      }

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }
    },

    okDialog(event) {
      let url = "";

      let _self = this;

      let errNum = 0;
      let errTimeNum = 0;
      let errWeekNum1 = 0;
      let errWeekNum2 = 0;
      let errWeekNum3 = 0; //let regNum = /^[1-9]*$/;

      let regNum = /^\+?[1-9]\d*$/;
      let userIds = [];
      let auditIds = [];
      let weekDay1 = {};
      let weekDay2 = {};
      let weekDay3 = {};
      this.errorTips = "";
      this.$refs['form'].validate(valid => {
        if (valid) {
          let params = {
            groupName: this.form.name,
            departIds: [],
            dayTimes: this.form.workTimes,
            signTimeSetting: this.form.workTimesSwitch,
            autoHoliday: this.form.autoSwitch,
            mustAttendDays: this.form.mustTimes && this.form.mustTimes.length > 0 ? JSON.stringify(this.form.mustTimes) : [],
            notAttendDays: this.form.noMustTimes && this.form.noMustTimes.length > 0 ? JSON.stringify(this.form.noMustTimes) : [],
            absentHalfRuleType: this.form.unSignRule,
            absentHalfRuleHours: this.form.unSignRule == 1 ? this.form.unSignRuleTime1 : this.form.unSignRuleTime2,
            absentFullRuleSignTimes: this.form.unSignRuleTime3,
            absentHalfRuleTimes: this.form.unSignStaticRuleTime1,
            absentFullRuleTimes: this.form.unSignStaticRuleTime2,
            absentFullRuleHours: this.form.unSignStaticRuleTime3,
            signType: this.form.addrSwitch,
            deviceSns: this.form.deviceList && this.form.deviceList.length > 0 ? JSON.stringify(this.form.deviceList) : []
          };

          for (let i = 0; i < this.form.timeTimes.length; i++) {
            if (this.form.workTimesSwitch == true) {
              if (this.form.timeTimes[i].upBefore == "" || regNum.test(this.form.timeTimes[i].upBefore) == false) {
                errTimeNum++;
              } else if (this.form.timeTimes[i].downAfter == "" || regNum.test(this.form.timeTimes[i].downAfter) == false) {
                errTimeNum++;
              }
            }

            if (i == 0) {
              params['upperTime'] = this.form.timeTimes[0].startTime;
              params['lowerTime'] = this.form.timeTimes[0].endTime;
              params['beforeStimer'] = this.form.timeTimes[0].upBefore;
              params['afterStimer'] = this.form.timeTimes[0].downAfter;
            }

            if (i == 1) {
              params['upperTime2'] = this.form.timeTimes[1].startTime;
              params['lowerTime2'] = this.form.timeTimes[1].endTime;
              params['beforeStimer2'] = this.form.timeTimes[1].upBefore;
              params['afterStimer2'] = this.form.timeTimes[1].downAfter;
            }

            if (i == 2) {
              params['upperTime3'] = this.form.timeTimes[2].startTime;
              params['lowerTime3'] = this.form.timeTimes[2].endTime;
              params['beforeStimer3'] = this.form.timeTimes[2].upBefore;
              params['afterStimer3'] = this.form.timeTimes[2].downAfter;
            }
          }

          for (let i = 0; i < this.form.workTimeWeek1.length; i++) {
            if (i == 0 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['one'] = this.form.workTimeWeek1[i];
            } else if (i == 1 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['two'] = this.form.workTimeWeek1[i];
            } else if (i == 2 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['three'] = this.form.workTimeWeek1[i];
            } else if (i == 3 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['four'] = this.form.workTimeWeek1[i];
            } else if (i == 4 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['five'] = this.form.workTimeWeek1[i];
            } else if (i == 5 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['six'] = this.form.workTimeWeek1[i];
            } else if (i == 6 && this.form.workTimeWeek1[i].weekSwitch == true) {
              weekDay1['seven'] = this.form.workTimeWeek1[i];
            }
          }

          params['workDaySetting'] = JSON.stringify(weekDay1);

          for (let i = 0; i < this.form.workTimeWeek2.length; i++) {
            if (i == 0 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['one'] = this.form.workTimeWeek2[i];
            } else if (i == 1 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['two'] = this.form.workTimeWeek2[i];
            } else if (i == 2 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['three'] = this.form.workTimeWeek2[i];
            } else if (i == 3 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['four'] = this.form.workTimeWeek2[i];
            } else if (i == 4 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['five'] = this.form.workTimeWeek2[i];
            } else if (i == 5 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['six'] = this.form.workTimeWeek2[i];
            } else if (i == 6 && this.form.workTimeWeek2[i].weekSwitch == true) {
              weekDay2['seven'] = this.form.workTimeWeek2[i];
            }
          }

          params['workDaySetting2'] = JSON.stringify(weekDay2);

          for (let i = 0; i < this.form.workTimeWeek3.length; i++) {
            if (i == 0 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['one'] = this.form.workTimeWeek3[i];
            } else if (i == 1 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['two'] = this.form.workTimeWeek3[i];
            } else if (i == 2 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['three'] = this.form.workTimeWeek3[i];
            } else if (i == 3 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['four'] = this.form.workTimeWeek3[i];
            } else if (i == 4 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['five'] = this.form.workTimeWeek3[i];
            } else if (i == 5 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['six'] = this.form.workTimeWeek3[i];
            } else if (i == 6 && this.form.workTimeWeek3[i].weekSwitch == true) {
              weekDay3['seven'] = this.form.workTimeWeek3[i];
            }
          }

          params['workDaySetting3'] = JSON.stringify(weekDay3);

          if (this.form.partUserIds.length > 0) {
            for (let i = 0; i < this.form.partUserIds.length; i++) {
              userIds.push(this.form.partUserIds[i].user_id);
            }

            params['addTeachers'] = userIds.length > 0 ? JSON.stringify(userIds) : [];
          }

          if (this.form.auditUserIds.length > 0) {
            for (let i = 0; i < this.form.auditUserIds.length; i++) {
              auditIds.push({
                userId: this.form.auditUserIds[i].user_id,
                name: this.form.auditUserIds[i].name ? this.form.auditUserIds[i].name : this.form.auditUserIds[i].real_name
              });
            }

            params['supervisors'] = auditIds.length > 0 ? JSON.stringify(auditIds) : [];
          }

          if (this.form.unSignRule == 1) {
            /*if (this.form.unSignRuleTime1 == ""){
              errNum++;
            }else */
            if (!!this.form.unSignRuleTime1 != "" && regNum.test(this.form.unSignRuleTime1) == false) {
              errNum++;
            }
          }

          if (this.form.unSignRule == 2) {
            /*if (this.form.unSignRuleTime2 == ""){
              errNum++;
            }else */
            if (!!this.form.unSignRuleTime2 && regNum.test(this.form.unSignRuleTime2) == false) {
              errNum++;
            }
          }

          if (!!this.form.unSignRuleTime3 && regNum.test(this.form.unSignRuleTime3) == false) {
            errNum++;
          }

          if (!!this.form.unSignStaticRuleTime1 && regNum.test(this.form.unSignStaticRuleTime1) == false || !!this.form.unSignStaticRuleTime2 && regNum.test(this.form.unSignStaticRuleTime2) == false || !!this.form.unSignStaticRuleTime3 && regNum.test(this.form.unSignStaticRuleTime3) == false) {
            errNum++;
          }

          if (errTimeNum > 0) {
            Object(utils["c" /* MessageWarning */])(this.$t("时间段不能为空且必须为整数，请检查"));
            return;
          }

          if (errNum > 0) {
            Object(utils["c" /* MessageWarning */])(this.$t("内容存在空值或存在零的数据，请检查"));
            return;
          }

          if (this.form.workTimes == 1 || this.form.workTimes == 2 || this.form.workTimes == 3) {
            for (let i in weekDay1) {
              if (weekDay1[i].weekSwitch == true) {
                errWeekNum1++;
              }
            }

            if (errWeekNum1 == 0) {
              Object(utils["c" /* MessageWarning */])(this.$t("请选择第一次上下班周数"));
              return;
            }
          }

          if (this.form.workTimes == 2 || this.form.workTimes == 3) {
            for (let i in weekDay2) {
              if (weekDay2[i].weekSwitch == true) {
                errWeekNum2++;
              }
            }

            if (errWeekNum2 == 0) {
              Object(utils["c" /* MessageWarning */])(this.$t("请选择第二次上下班周数"));
              return;
            }
          }

          if (this.form.workTimes == 3) {
            for (let i in weekDay3) {
              if (weekDay3[i].weekSwitch == true) {
                errWeekNum3++;
              }
            }

            if (errWeekNum3 == 0) {
              Object(utils["c" /* MessageWarning */])(this.$t("请选择第三次上下班周数"));
              return;
            }
          }

          if (this.form.id != "") {
            params['groupId'] = this.form.id;
            url = api_url["a" /* common */].attend_admin_setting_edit;
          } else {
            url = api_url["a" /* common */].attend_admin_setting_add;
          }

          this.dialogLoading = true;
          params = this.$qs.stringify(params);
          this.$axios.post(url, params, {
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              this.modalVisible = false;
              this.init();
              Object(utils["b" /* MessageSuccess */])(res.data.desc);
            } else {
              Object(utils["a" /* MessageError */])(res.data.desc);
            }

            this.dialogLoading = false;
          });
        }
      });
    },

    handleShowTeacher(type) {
      if (type == 1) {
        this.$refs.popverPartRef._handleOpen();
      } else if (type == 2) {
        this.$refs.popverAuditRef._handleOpen();
      }
    },

    handleHideeacher() {
      if (this.$refs['popverPartRef']) {
        this.$refs.popverPartRef._handleResetChange();
      }

      if (this.$refs['popverAuditRef']) {
        this.$refs.popverAuditRef._handleResetChange();
      }
    },

    handleSelUser(data, type) {
      if (type == 1) {
        this.form.partUserIds = data;
      } else if (type == 2) {
        this.form.auditUserIds = data;
      }
    },

    handleChange(data, type) {
      let timeArr = [];

      if (type == 4) {
        this.form.workTimesSwitch = data;
      } else if (type == 5) {
        this.form.autoSwitch = data;
      } else {
        this.form.workTimes = type;
        let timeTimes = [].concat(this.form.timeTimes);

        for (let i = 0; i < type; i++) {
          timeArr.push({
            startTime: timeTimes[i] ? timeTimes[i].startTime : '00:00',
            endTime: timeTimes[i] ? timeTimes[i].endTime : '00:00',
            upBefore: timeTimes[i] ? timeTimes[i].upBefore : '',
            downAfter: timeTimes[i] ? timeTimes[i].downAfter : ''
          });
          this.form.timeTimes = timeArr;
          /*this.form.timeTimes[i] = {
            startTime: this.form.timeTimes[i].startTime ? this.form.timeTimes[i].startTime : '00:00',
            endTime: this.form.timeTimes[i].endTime ? this.form.timeTimes[i].endTime : '00:00',
            upBefore: this.form.timeTimes[i].upBefore ? this.form.timeTimes[i].upBefore : '00:00',
            downAfter: this.form.timeTimes[i].downAfter ? this.form.timeTimes[i].downAfter : '00:00'
          }*/
        }
      }
    },

    handleChangeTime(data, item, index, type) {
      if (type == 1) {
        this.$set(this.form.timeTimes[index], 'startTime', data);
        this.setAllWeekTimes(data, index, type);
      } else if (type == 2) {
        this.$set(this.form.timeTimes[index], 'endTime', data);
        this.setAllWeekTimes(data, index, type);
      } else if (type == 3) {
        this.$set(this.form.workTimeWeek1[index], 'startTime', data);
      } else if (type == 4) {
        this.$set(this.form.workTimeWeek1[index], 'endTime', data);
      } else if (type == 5) {
        this.$set(this.form.workTimeWeek2[index], 'startTime', data);
      } else if (type == 6) {
        this.$set(this.form.workTimeWeek2[index], 'endTime', data);
      } else if (type == 7) {
        this.$set(this.form.workTimeWeek3[index], 'startTime', data);
      } else if (type == 8) {
        this.$set(this.form.workTimeWeek3[index], 'endTime', data);
      }
    },

    changeStatus(data, type) {
      if (type == 1) {
        this.form.unSignRule = data;
      } else if (type == 2) {
        this.form.unSignRule = data;
      } else if (type == 3) {
        this.form.addrSwitch = data;
      } else if (type == 4) {
        this.form.addrSwitch = data;
      }
    },

    changeRollCall(item) {
      item.rollCall = !item.rollCall;
    },

    handleWeek(data, week) {
      let _self = this;

      _self.tableDayInfo.map(function (item, index) {
        item.days.map(function (itemDay, index) {
          if (itemDay && itemDay.weekNo == week) {
            itemDay.rollCall = data;
          }
        });
      });
    },

    weekNoText2Info(val) {
      return Object(utils["Y" /* weekNoText2 */])(val);
    },

    handleWeekSwitch(data, item, index) {
      item.weekSwitch = data;
    },

    setAllWeekTimes(data, index, type) {
      let workTimeWeek = 'workTimeWeek' + (index + 1);

      for (let i = 0; i < 7; i++) {
        if (type == 1) {
          this.$set(this.form[workTimeWeek][i], 'startTime', data);
        } else if (type == 2) {
          this.$set(this.form[workTimeWeek][i], 'endTime', data);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/attendanceInfo/administration/setting.vue?vue&type=script&lang=js&
 /* harmony default export */ var administration_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/attendanceInfo/administration/setting.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(607)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  administration_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b4bf2556",
  "5bbfd55a"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyPagination: __webpack_require__(27).default,LayoutTb: __webpack_require__(152).default,TeacherTreeAndList: __webpack_require__(167).default,MyCheck: __webpack_require__(169).default,MyRadio: __webpack_require__(154).default,DialogNormal: __webpack_require__(28).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=setting.js.map