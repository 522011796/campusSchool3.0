exports.ids = [72];
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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6a31cf35", content, true, context)
};

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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/dialog/DrawerRight.vue?vue&type=template&id=5cbdbb54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('el-drawer',{staticStyle:{"margin-top":"60px"},attrs:{"tabindex":"0","custom-class":"drawer-normal-drawer","visible":_vm.drawer_,"direction":_vm.direction,"wrapperClosable":true,"show-close":false,"modal-append-to-body":false,"size":_vm.size},on:{"update:visible":function($event){_vm.drawer_=$event}}},[_c('div',{staticClass:"drawer-normal-title",attrs:{"slot":"title"},slot:"title"},[_c('span',{attrs:{"tabindex":"1"}}),_vm._v(" "),(!_vm.header)?_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"drawer-normal-header"},[_c('span',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"drawer-normal-close text-right color-disabeld font-size-14"},[_c('i',{staticClass:"fa fa-close",on:{"click":_vm.handleClose}})])])],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"drawer-normal-body",style:(_vm.hideFooter == false ? _vm.drawHeight : '')},[_c('div',[_c('el-button',{attrs:{"type":"primary","size":"small","plain":""},on:{"click":_vm.download}},[_c('i',{staticClass:"fa fa-download"}),_vm._v("\n          "+_vm._s(_vm.$t("下载模版"))+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v("("+_vm._s(_vm.$t("支持Excel2003或者Excel2007"))+")")])],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('div',{staticClass:"padding-tb-5 color-muted"},[_c('span',[_vm._v(_vm._s(_vm.$t("文件上传")))])]),_vm._v(" "),_c('div',[_c('el-upload',{staticClass:"custom-upload",attrs:{"drag":"","action":_vm.action,"accept":_vm.accept,"data":_vm.data,"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"on-error":_vm.handleAvatarError,"before-upload":_vm.handleAvatarBefore}},[_c('i',{staticClass:"el-icon-upload"}),_vm._v(" "),_c('div',{staticClass:"el-upload__text"},[_vm._v(_vm._s(_vm.$t("将文件拖到此处，或"))),_c('em',[_vm._v(_vm._s(_vm.$t("点击上传")))])])])],1),_vm._v(" "),_c('div',{staticClass:"padding-tb-5 color-muted"},[_c('span',[_vm._v(_vm._s(_vm.$t("上传结果")))])]),_vm._v(" "),_c('div',[_c('el-timeline',[_c('el-timeline-item',[_c('div',{staticClass:"color-muted font-size-12"},[_c('span',[_vm._v(_vm._s(_vm.$t("上传进度")))])]),_vm._v(" "),_c('div',{staticClass:"color-disabeld font-size-12 margin-top-5"},[(_vm.process != '')?_c('span',[_vm._v(_vm._s(_vm.process))]):_c('span',[_vm._v(_vm._s(_vm.$t("文件未上传")))])])]),_vm._v(" "),_c('el-timeline-item',[_c('div',{staticClass:"color-muted font-size-12"},[_c('span',[_vm._v(_vm._s(_vm.$t("上传结果")))])]),_vm._v(" "),_c('div',{staticClass:"color-disabeld font-size-12 margin-top-5"},[(Object.keys(_vm.result).length > 0)?_c('div',_vm._l((_vm.result),function(item,index){return _c('div',{key:index},[_c('span',[_vm._v(_vm._s(item))])])}),0):_c('span',[_vm._v(_vm._s(_vm.$t("暂无数据")))])])])],1)],1)])]),_vm._v(" "),(_vm.hideFooter == false)?_c('div',{staticClass:"drawer-normal-footer",attrs:{"hide-footer":_vm.hideFooter}},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.handleCancel}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.loading == false ? _vm.handleOk() : ''}}},[(_vm.loading)?_c('i',{staticClass:"el-icon-loading"}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.$t("确定"))+"\n      ")])],1):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/dialog/DrawerRight.vue?vue&type=template&id=5cbdbb54&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/dialog/DrawerRight.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var DrawerRightvue_type_script_lang_js_ = ({
  mixins: [mixins["a" /* default */]],
  props: {
    title: {
      default: '信息',
      type: String
    },
    visible: {
      default: false,
      type: Boolean
    },
    direction: {
      default: 'rtl',
      type: String
    },
    hideFooter: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    size: {
      defalult: '30%',
      type: String
    },
    action: {
      default: '',
      type: String
    },
    downloadFile: {
      default: '',
      type: String
    },
    accept: {
      default: '',
      type: String
    },
    data: {
      default: function () {
        return {};
      },
      type: Object
    },
    process: {
      default: '',
      type: String
    },
    result: {
      default: function () {
        return {} || [];
      },
      type: [Object, Array]
    },
    setBefore: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    drawer_: {
      get() {
        return this.visible;
      },

      set(v) {
        this.$emit("changeDrawer", v);
      }

    }
  },

  data() {
    return {
      drawer: false,
      dialogNormalVisible: false,
      footer: false,
      header: false,
      drawerLoading: false
    };
  },

  mounted() {
    this.dialogNormalVisible = this.visible;
    this.footer = this.$slots.footer !== undefined;
    this.header = this.$slots.title !== undefined;
  },

  created() {},

  methods: {
    handleClose(data) {
      if (!this.footer) {
        this.$emit("right-close", data);
      } else {
        this.handleCancel();
      }
    },

    handleOk(data) {
      this.$emit("ok", data);
    },

    handleCancel(data) {
      this.$emit("cancel", data);
    },

    download(event) {
      window.open(this.downloadFile, '_self');
    },

    handleAvatarSuccess(res, file) {
      this.$emit('success', res, file);
    },

    handleAvatarError(res, file) {
      this.$emit('error', res, file);
    },

    handleAvatarBefore(file) {
      if (this.setBefore) {
        this.data['fileName'] = file.name;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/utils/dialog/DrawerRight.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialog_DrawerRightvue_type_script_lang_js_ = (DrawerRightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/dialog/DrawerRight.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialog_DrawerRightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5cbdbb54",
  "36450fa2"
  
)

/* harmony default export */ var DrawerRight = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerRight_vue_vue_type_style_index_0_id_5cbdbb54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerRight_vue_vue_type_style_index_0_id_5cbdbb54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerRight_vue_vue_type_style_index_0_id_5cbdbb54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerRight_vue_vue_type_style_index_0_id_5cbdbb54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerRight_vue_vue_type_style_index_0_id_5cbdbb54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerRight_vue_vue_type_style_index_0_id_5cbdbb54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowType.vue?vue&type=template&id=3d516578&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._ssrNode(((_vm.status == 'PunishmentApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("奖惩流程")))+"</span>"):"<!---->")+" "+((_vm.status == 'ScoreApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("素质学分流程")))+"</span>"):"<!---->")+" "+((_vm.status == 'LeaveApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("学生请假流程")))+"</span>"):"<!---->")+" "+((_vm.status == 'TeacherLeaveApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("教师请假流程")))+"</span>"):"<!---->")+" "+((_vm.status == 'TeacherBusiTripApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("出差申请流程")))+"</span>"):"<!---->")+" "+((_vm.status == 'TeacherAmendSignApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("补卡申请流程")))+"</span>"):"<!---->")+" "+((_vm.status == 'DoorOpenApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("学生门禁申请")))+"</span>"):"<!---->")+" "+((_vm.status == 'TeacherDoorOpenApply')?("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("教师门禁申请")))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/status/MyFlowType.vue?vue&type=template&id=3d516578&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowType.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyFlowTypevue_type_script_lang_js_ = ({
  name: 'myFlowCenter',
  props: {
    status: {
      default: 0,
      type: [String, Number]
    },
    handler: {
      default: '',
      type: String,
      Number
    }
  },
  computed: {
    selectModel() {}

  },

  data() {
    return {
      value: ''
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/utils/status/MyFlowType.vue?vue&type=script&lang=js&
 /* harmony default export */ var status_MyFlowTypevue_type_script_lang_js_ = (MyFlowTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/status/MyFlowType.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  status_MyFlowTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c11957a"
  
)

/* harmony default export */ var MyFlowType = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowCondition.vue?vue&type=template&id=ae246e58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode((_vm._ssrList((_vm.condition),function(item,index){return ("<span>"+((item.type == 'leaveType')?("<span>"+((_vm.conditionTypeCode == 'TeacherAmendSignApply')?("<span><label class=\"color-warning\">"+_vm._ssrEscape(_vm._s(item.value1))+"</label></span>"):"<!---->")+" "+((_vm.conditionTypeCode != 'TeacherAmendSignApply')?("<span><label class=\"color-warning\">"+_vm._ssrEscape(_vm._s(item.value1))+"</label></span>"):"<!---->")+"</span>"):"<!---->")+" "+((item.type == 'leaveDay')?("<span>"+((_vm.conditionTypeCode == 'TeacherDoorOpenApply' || _vm.conditionTypeCode == 'DoorOpenApply')?("<span>"+((item.value2 == 0)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t("当日授权")))+"</label>"):"<!---->")+"</span>"):"<!---->")+" "+((_vm.conditionTypeCode == 'LeaveApply' || _vm.conditionTypeCode == 'TeacherLeaveApply')?("<span>"+((item.value2 == 0)?("<label>"+_vm._ssrEscape(_vm._s(_vm.$t("当日假")))+"</label>"):"<!---->")+"</span>"):"<!---->")+" "+((item.value2 != 0)?("<span><span>"+((item.value1)?("<label>"+_vm._ssrEscape(_vm._s(item.value1)+_vm._s(_vm.$t("天")))+"</label>"):("<label>--</label>"))+"</span>\n        -\n        <span>"+((item.value2)?("<label>"+_vm._ssrEscape(_vm._s(item.value2)+_vm._s(_vm.$t("天")))+"</label>"):("<label>--</label>"))+"</span></span>"):"<!---->")+"</span>"):"<!---->")+" "+((item.type == 'proLevel')?("<span>"+((item.value1)?("<span><label>"+_vm._ssrEscape(_vm._s(item.value1))+"</label></span>"):("<span>--</span>"))+"</span>"):"<!---->")+" "+((item.type == 'scoreType')?("<span>"+((item.value1)?("<span><label>"+_vm._ssrEscape(_vm._s(item.value1))+"</label></span>"):("<span>--</span>"))+"</span>"):"<!---->")+"</span>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/status/MyFlowCondition.vue?vue&type=template&id=ae246e58&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowCondition.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyFlowConditionvue_type_script_lang_js_ = ({
  name: 'myFlowCenter',
  props: {
    condition: {
      default: function () {
        return [];
      },
      type: Array
    },
    conditionTypeCode: {
      default: '',
      type: [String, Number]
    },
    status: {
      default: 0,
      type: [String, Number]
    },
    handler: {
      default: '',
      type: String,
      Number
    }
  },
  computed: {
    selectModel() {}

  },

  data() {
    return {
      value: ''
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/utils/status/MyFlowCondition.vue?vue&type=script&lang=js&
 /* harmony default export */ var status_MyFlowConditionvue_type_script_lang_js_ = (MyFlowConditionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/status/MyFlowCondition.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  status_MyFlowConditionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5a4d9862"
  
)

/* harmony default export */ var MyFlowCondition = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowProcess.vue?vue&type=template&id=36c884e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.process),function(item,index){return (index < 2)?_vm._ssrNode("<span>","</span>",[_vm._ssrNode(((item.htype == 'NullUser')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("不需要审批")))+"</span>"):"<!---->")+" "),(item.htype == 'AnyUser')?_vm._ssrNode("<span>","</span>",[_vm._ssrNode("<i class=\"fa fa-arrow-right margin-right-5\"></i> "),_c('el-tooltip',{attrs:{"placement":"top"}},[_c('span',{attrs:{"slot":"content"},slot:"content"},[_vm._v("\n          "+_vm._s(_vm.splitName(item.hname))+"\n        ")]),_vm._v(" "),_c('label',{staticClass:"color-grand"},[_vm._v("\n          "+_vm._s(_vm.$t("固定教师"))+"\n        ")])])],2):_vm._e(),_vm._ssrNode(" "+((item.htype == 'MasterTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("班主任")))+"</span>"):"<!---->")+" "+((item.htype == 'CoachTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("辅导员")))+"</span>"):"<!---->")+" "+((item.htype == 'DirectorTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("系主任")))+"</span>"):"<!---->")+" "+((item.htype == 'DormitorTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("宿管员")))+"</span>"):"<!---->")+" "+((item.htype == 'DeputyDirectorTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("系副主任")))+"</span>"):"<!---->")+" "+((item.htype == 'StudentManageTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("学管主任")))+"</span>"):"<!---->")+" "+((item.htype == 'SecretaryTeacher')?("<span><i class=\"fa fa-arrow-right margin-right-5\"></i>"+_vm._ssrEscape(_vm._s(_vm.$t("系部主任")))+"</span>"):"<!---->"))],2):_vm._e()}),_vm._ssrNode(" "),(_vm.process.length > 3)?_vm._ssrNode("<span>","</span>",[_c('el-popover',{attrs:{"placement":"right","trigger":"hover"}},[_c('div',_vm._l((_vm.process),function(item,index){return _c('span',{key:index},[(item.htype == 'NullUser')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("不需要审批")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'AnyUser')?_c('div',{staticClass:"margin-top-5"},[_c('el-tooltip',{attrs:{"placement":"top"}},[_c('span',{attrs:{"slot":"content"},slot:"content"},[_vm._v("\n                "+_vm._s(_vm.splitName(item.hname))+"\n              ")]),_vm._v(" "),_c('label',{staticClass:"color-grand"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("固定教师")))])],1)])],1):_vm._e(),_vm._v(" "),(item.htype == 'MasterTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("班主任")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'CoachTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("辅导员")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'DirectorTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("系主任")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'DormitorTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("宿管员")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'DeputyDirectorTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("系副主任")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'StudentManageTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("学管主任")))])],1):_vm._e(),_vm._v(" "),(item.htype == 'SecretaryTeacher')?_c('div',{staticClass:"margin-top-5"},[_c('el-tag',[_c('i',{staticClass:"fa fa-arrow-right margin-right-5"}),_vm._v(_vm._s(_vm.$t("系部主任")))])],1):_vm._e()])}),0),_vm._v(" "),_c('i',{staticClass:"fa fa-ellipsis-v color-warning",attrs:{"slot":"reference"},slot:"reference"})])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/status/MyFlowProcess.vue?vue&type=template&id=36c884e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowProcess.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyFlowProcessvue_type_script_lang_js_ = ({
  name: 'myFlowCenter',
  props: {
    process: {
      default: function () {
        return [];
      },
      type: Array
    }
  },
  computed: {
    selectModel() {}

  },

  data() {
    return {
      value: ''
    };
  },

  methods: {
    splitName(value) {
      let arr = value.split(",");
      let html = "";

      for (let i = 0; i < arr.length; i++) {
        let arrObj = arr[i].split("@*@");
        html += arrObj[1];

        if (i != arr.length - 1) {
          html += ",";
        }
      }

      return html;
    }

  }
});
// CONCATENATED MODULE: ./components/utils/status/MyFlowProcess.vue?vue&type=script&lang=js&
 /* harmony default export */ var status_MyFlowProcessvue_type_script_lang_js_ = (MyFlowProcessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/status/MyFlowProcess.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  status_MyFlowProcessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d2f8114"
  
)

/* harmony default export */ var MyFlowProcess = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowProcessList.vue?vue&type=template&id=4edd3394&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({},'div',_vm._getProcessData,false),_vm._l((_vm.conditionProcessList),function(item,index){return _vm._ssrNode("<div class=\"layout-inline margin-bottom-10\">","</div>",[_c('el-select',{style:({width: _vm.widthStyle}),on:{"change":function($event){return _vm.handleChangeSlect($event, item)}},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},[(_vm.conditionProcessList.length-1 == index)?_c('el-option',{attrs:{"label":_vm.options[0].label,"value":_vm.options[0].value}}):_vm._e(),_vm._v(" "),_c('el-option',{attrs:{"label":_vm.options[1].label,"value":_vm.options[1].value}}),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[2].label,"value":_vm.options[2].value}}):_vm._e(),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[3].label,"value":_vm.options[3].value}}):_vm._e(),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[4].label,"value":_vm.options[4].value}}):_vm._e(),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[5].label,"value":_vm.options[5].value}}):_vm._e(),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[6].label,"value":_vm.options[6].value}}):_vm._e(),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[7].label,"value":_vm.options[7].value}}):_vm._e(),_vm._v(" "),(_vm.userType != 'teacher')?_c('el-option',{attrs:{"label":_vm.options[8].label,"value":_vm.options[8].value}}):_vm._e()],1),_vm._ssrNode(" <span class=\"layout-item\"><i class=\"fa fa-plus-circle color-grand\" style=\"font-size: 20px\"></i> "+((index != 0 || (index == 0 && _vm.conditionProcessList.length > 1))?("<i class=\"fa fa-minus-circle color-muted margin-left-5\" style=\"font-size: 20px\"></i>"):"<!---->")+"</span> "),(item.type != 'NullUser')?_vm._ssrNode("<span class=\"layout-item margin-left-5\">","</span>",[(item.type == 'AnyUser')?_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"top","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1, index)}}},[_c('div',[_c('teacher-tree-and-list',{ref:("popverAuditRef" + index),refInFor:true,attrs:{"sel-arr":item.audit,"set-type":"check"},on:{"select":function($event){return _vm.handleSelAuditUser($event, item, index)}}})],1),_vm._v(" "),_c('el-tag',{attrs:{"slot":"reference","type":"success"},slot:"reference"},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),(item.audit.length > 0)?_c('label',[_vm._v(_vm._s(_vm.$t("人数"))+":"+_vm._s(item.audit.length))]):_vm._e()])],1):_vm._e(),_vm._ssrNode(" "),_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"top","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(2, index)}}},[_c('div',[_c('teacher-tree-and-list',{ref:("popverShareRef" + index),refInFor:true,attrs:{"sel-arr":item.share,"set-type":"check"},on:{"select":function($event){return _vm.handleSelShareUser($event, item, index)}}})],1),_vm._v(" "),_c('el-tag',{attrs:{"slot":"reference","type":"success"},slot:"reference"},[_c('i',{staticClass:"fa fa-share"}),_vm._v(" "),(item.share.length > 0)?_c('label',[_vm._v(_vm._s(_vm.$t("人数"))+":"+_vm._s(item.share.length))]):_vm._e()])],1)],2):_vm._e(),_vm._ssrNode(" "),(item.type != 'NullUser')?_vm._ssrNode("<span class=\"layout-item margin-left-5\">","</span>",[_c('el-button-group',[_c('el-button',{attrs:{"size":"small","type":item.notice == 'and' ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange('and', item)}}},[_vm._v(_vm._s(_vm.$t("会签")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":item.notice == 'or' ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange('or', item)}}},[_vm._v(_vm._s(_vm.$t("或签")))])],1)],1):_vm._e()],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/status/MyFlowProcessList.vue?vue&type=template&id=4edd3394&

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/utils/treeAndList/TeacherTreeAndList.vue + 4 modules
var TeacherTreeAndList = __webpack_require__(167);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyFlowProcessList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var MyFlowProcessListvue_type_script_lang_js_ = ({
  name: 'myFlowProcessList',
  components: {
    MySelect: MySelect["default"],
    TeacherTreeAndList: TeacherTreeAndList["default"]
  },
  props: {
    status: {
      default: 0,
      type: [String, Number]
    },
    handler: {
      default: '',
      type: String,
      Number
    },
    widthStyle: {
      default: '',
      type: [String, Number]
    },
    processData: {
      default: function () {
        return [];
      },
      type: Array
    },
    userType: {
      default: '',
      type: String
    }
  },
  computed: {
    _getProcessData() {
      this.conditionProcessList = [];
      let arr = [];

      if (this.processData.length > 0) {
        for (let i = 0; i < this.processData.length; i++) {
          let audtiArr = [];
          let shareArr = [];

          for (let j = 0; j < this.processData[i].audit.length; j++) {
            audtiArr.push({
              user_id: this.processData[i].audit[j].user_id,
              real_name: this.processData[i].audit[j].real_name
            });
          }

          for (let j = 0; j < this.processData[i].share.length; j++) {
            shareArr.push({
              user_id: this.processData[i].share[j]
            });
          }

          arr.push({
            type: this.processData[i].type,
            audit: audtiArr,
            auditName: this.processData[i].auditName,
            share: shareArr,
            notice: this.processData[i].notice
          });
        }
      } else {
        arr = [{
          type: 'NullUser',
          audit: [],
          auditName: [],
          share: [],
          notice: 'or'
        }];
      }

      this.conditionProcessList = arr; //return this.conditionProcessList;
    }

  },

  data() {
    return {
      value: '',
      width: '',
      conditionUserType: 'or',
      conditionProcessList: [{
        type: 'NullUser',
        audit: [],
        auditName: [],
        share: [],
        notice: 'or'
      }],
      options: [{
        label: this.$t("不需要审批"),
        value: 'NullUser'
      }, {
        label: this.$t("固定教师审批"),
        value: 'AnyUser'
      }, {
        label: this.$t("班主任审批"),
        value: 'MasterTeacher'
      }, {
        label: this.$t("辅导员审批"),
        value: 'CoachTeacher'
      }, {
        label: this.$t("系主任审批"),
        value: 'DirectorTeacher'
      }, {
        label: this.$t("系副主任审批"),
        value: 'DeputyDirectorTeacher'
      }, {
        label: this.$t("学管主任审批"),
        value: 'StudentManageTeacher'
      }, {
        label: this.$t("系部干事审批"),
        value: 'SecretaryTeacher'
      }, {
        label: this.$t("宿管员审批"),
        value: 'DormitoryTeacher'
      }]
    };
  },

  created() {},

  methods: {
    handleChange(type, item) {
      item.notice = type;
    },

    handleChangeSlect(data, item) {
      item.type = data;
    },

    addProcess(item, index) {
      if (item.type == "NullUser") {
        Object(utils["c" /* MessageWarning */])(this.$t("你已经选择不需要审核，不能添加下一步流程"));
        return;
      }

      if (item.type == "AnyUser" && item.audit.length == 0) {
        Object(utils["c" /* MessageWarning */])(this.$t("请先设置审批人，再进行下一步流程"));
        return;
      }

      let obj = {
        type: 'NullUser',
        audit: [],
        auditName: [],
        share: [],
        notice: 'or'
      };

      if (index != this.conditionProcessList.length - 1) {
        obj['type'] = 'AnyUser';
      }

      this.conditionProcessList.splice(index + 1, 0, obj);
    },

    minusProcess(index) {
      this.conditionProcessList.splice(index, 1);
    },

    handleShowTeacher(type, index) {
      if (type == 1) {
        this.$refs['popverAuditRef' + index][0]._handleOpen();
      } else if (type == 2) {
        this.$refs['popverShareRef' + index][0]._handleOpen();
      }
    },

    handleSelAuditUser(data, item, index) {
      let arr = [];
      let arrName = [];

      for (let i = 0; i < data.length; i++) {
        arr.push({
          user_id: data[i].user_id
        });
        arrName.push(data[i].user_id + "@*@" + data[i].real_name);
      }

      item.audit = arr;
      item.auditName = arrName;
    },

    handleSelShareUser(data, item) {
      let arr = [];

      for (let i = 0; i < data.length; i++) {
        arr.push({
          user_id: data[i].user_id
        });
      }

      item.share = arr;
    },

    _handleResetChange() {
      this.conditionProcessList = [{
        type: 'NullUser',
        audit: [],
        auditName: [],
        share: [],
        notice: 'or'
      }];
    },

    _getFlowProcessData() {
      return this.conditionProcessList;
    }

  }
});
// CONCATENATED MODULE: ./components/utils/status/MyFlowProcessList.vue?vue&type=script&lang=js&
 /* harmony default export */ var status_MyFlowProcessListvue_type_script_lang_js_ = (MyFlowProcessListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/status/MyFlowProcessList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  status_MyFlowProcessListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "543b9398"
  
)

/* harmony default export */ var MyFlowProcessList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeacherTreeAndList: __webpack_require__(167).default})


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      rules: {
        name: [{
          required: true,
          message: this.$t("请输入信息"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validatenallOther1_20Reg,
          trigger: 'blur'
        }],
        conditionType: [{
          required: true,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }],
        conditionStatus: [{
          required: true,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }],
        conditionDay1: [{
          required: true,
          message: this.$t("请输入信息"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validaten1_10Reg,
          trigger: 'blur'
        }],
        conditionDay2: [{
          required: true,
          message: this.$t("请输入信息"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validaten1_10Reg,
          trigger: 'blur'
        }]
      }
    };
  }

});

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(520);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0d22975d", content, true, context)
};

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stuDoorAccess_vue_vue_type_style_index_0_id_c012e59a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stuDoorAccess_vue_vue_type_style_index_0_id_c012e59a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stuDoorAccess_vue_vue_type_style_index_0_id_c012e59a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stuDoorAccess_vue_vue_type_style_index_0_id_c012e59a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stuDoorAccess_vue_vue_type_style_index_0_id_c012e59a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stuDoorAccess_vue_vue_type_style_index_0_id_c012e59a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-c012e59a]{padding:10px 15px}.news-img[data-v-c012e59a]{height:50px;width:50px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/basicInfo/stuDoorAccess.vue?vue&type=template&id=c012e59a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('layout-tb',[_c('template',{slot:"tag"},[_vm._v("学生门禁申请")]),_vm._v(" "),_c('div',{attrs:{"slot":"tab"},slot:"tab"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-button',{attrs:{"size":"small","type":"primary","icon":"el-icon-plus"},on:{"click":function($event){return _vm.addInfo($event)}}},[_vm._v(_vm._s(_vm.$t("添加流程")))])],1),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('my-input-button',{attrs:{"size":"small","plain":"","width-class":"width: 150px","type":"success","clearable":true,"placeholder":_vm.$t('名称')},on:{"click":_vm.search}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('日期')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm")))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                "+_vm._s(_vm.$moment(scope.row.add_time).format("YYYY-MM-DD HH:mm"))+"\n              ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('流程名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.name ? scope.row.name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                "+_vm._s(scope.row.name ? scope.row.name : '--')+"\n              ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"department_no","label":_vm.$t('申请类型')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('my-flow-type',{attrs:{"status":scope.row.apply_type_code}})],1),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('my-flow-type',{attrs:{"status":scope.row.apply_type_code}})],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"department_no","label":_vm.$t('条件')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('my-flow-condition',{attrs:{"condition":scope.row.handle_condition,"condition-type-code":scope.row.apply_type_code}})],1),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('my-flow-condition',{attrs:{"condition":scope.row.handle_condition,"condition-type-code":scope.row.apply_type_code}})],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"department_no","label":_vm.$t('流程'),"width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-flow-process',{attrs:{"process":scope.row.handle_process}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"department_no","label":_vm.$t('备注')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('span',[_vm._v(_vm._s(scope.row.des ? scope.row.des : '--'))])]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.des ? scope.row.des : '--'))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"department_no","label":_vm.$t('状态')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.enable)?_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("启用")))]):_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("禁用")))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","fixed":"right","label":"操作","width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-edit color-grand margin-right-5",on:{"click":function($event){return _vm.editInfo(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteInfo(scope.row)}}})]}}])})],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],1)],2),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","hide-footer":false,"visible":_vm.drawerVisible,"size":"650px","title":_vm.$t('流程设置')},on:{"changeDrawer":_vm.closeDrawerDialog,"right-close":_vm.cancelDrawDialog}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('span',{attrs:{"tabindex":"1"}}),_vm._v(" "),_c('el-form',{ref:"form",attrs:{"rules":_vm.rules,"model":_vm.form,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"申请类型"}},[_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("学生门禁申请")))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"名称","prop":"name"}},[_c('el-input',{staticClass:"width-300",model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注"}},[_c('el-input',{staticClass:"width-300",model:{value:(_vm.form.content),callback:function ($$v) {_vm.$set(_vm.form, "content", $$v)},expression:"form.content"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"条件"}},[_c('el-button-group',[_c('el-button',{attrs:{"size":"small","type":_vm.form.conditionType == '1' ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange(1)}}},[_vm._v(_vm._s(_vm.$t("当日假")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":_vm.form.conditionType == '2' ? 'primary' : 'default'},on:{"click":function($event){return _vm.handleChange(2)}}},[_vm._v(_vm._s(_vm.$t("自定义时长")))])],1),_vm._v(" "),(_vm.form.conditionType == 2)?_c('span',[_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small","placeholder":_vm.$t('天数')},model:{value:(_vm.form.conditionDay1),callback:function ($$v) {_vm.$set(_vm.form, "conditionDay1", $$v)},expression:"form.conditionDay1"}}),_vm._v("\n            -\n            "),_c('el-input',{staticStyle:{"width":"80px"},attrs:{"size":"small","placeholder":_vm.$t('天数')},model:{value:(_vm.form.conditionDay2),callback:function ($$v) {_vm.$set(_vm.form, "conditionDay2", $$v)},expression:"form.conditionDay2"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"line-height":"20px"}},[_c('span',{staticClass:"color-danger font-size-12"},[_vm._v(_vm._s(_vm.errorTips))])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('my-radio',{attrs:{"sel-value":_vm.form.status,"label":true},on:{"change":function($event){return _vm.changeStatus($event, true)}}},[_vm._v(_vm._s(_vm.$t("启用")))]),_vm._v(" "),_c('my-radio',{attrs:{"sel-value":_vm.form.status,"label":false},on:{"change":function($event){return _vm.changeStatus($event, false)}}},[_vm._v(_vm._s(_vm.$t("禁用")))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"流程"}},[_c('my-flow-process-list',{ref:"flowProcessRef",attrs:{"process-data":_vm.form.handleProcess,"width-style":"200"}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary","loading":_vm.drawerLoading},on:{"click":_vm.okDrawDialog}},[_vm._v(_vm._s(_vm.$t("发布")))])],1)])]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","content":"确认需要删除该信息？","detail":_vm.subTitle},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/basicInfo/stuDoorAccess.vue?vue&type=template&id=c012e59a&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Layout/LayoutTb.vue + 4 modules
var LayoutTb = __webpack_require__(152);

// EXTERNAL MODULE: ./components/search/MyInputButton.vue + 4 modules
var MyInputButton = __webpack_require__(146);

// EXTERNAL MODULE: ./components/MyPagination.vue + 4 modules
var MyPagination = __webpack_require__(27);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(28);

// EXTERNAL MODULE: ./components/utils/dialog/MyNormalDialog.vue + 4 modules
var MyNormalDialog = __webpack_require__(150);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerRight.vue + 4 modules
var DrawerRight = __webpack_require__(159);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/status/MyFlowType.vue + 4 modules
var MyFlowType = __webpack_require__(178);

// EXTERNAL MODULE: ./components/utils/status/MyFlowCondition.vue + 4 modules
var MyFlowCondition = __webpack_require__(179);

// EXTERNAL MODULE: ./components/utils/status/MyFlowProcess.vue + 4 modules
var MyFlowProcess = __webpack_require__(180);

// EXTERNAL MODULE: ./components/MyRadio.vue + 4 modules
var MyRadio = __webpack_require__(154);

// EXTERNAL MODULE: ./components/utils/status/MyFlowProcessList.vue + 4 modules
var MyFlowProcessList = __webpack_require__(181);

// EXTERNAL MODULE: ./utils/validater/flowProcessValidater.js
var flowProcessValidater = __webpack_require__(185);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/basicInfo/stuDoorAccess.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















/* harmony default export */ var stuDoorAccessvue_type_script_lang_js_ = ({
  mixins: [mixins["a" /* default */], flowProcessValidater["a" /* default */]],
  components: {
    MyRadio: MyRadio["default"],
    LayoutTb: LayoutTb["default"],
    MyInputButton: MyInputButton["default"],
    MyPagination: MyPagination["default"],
    DialogNormal: DialogNormal["default"],
    MyNormalDialog: MyNormalDialog["default"],
    DrawerRight: DrawerRight["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"],
    MyFlowType: MyFlowType["default"],
    MyFlowCondition: MyFlowCondition["default"],
    MyFlowProcess: MyFlowProcess["default"],
    MyFlowProcessList: MyFlowProcessList["default"]
  },

  data() {
    return {
      modalVisible: false,
      drawerVisible: false,
      visibleConfim: false,
      dialogLoading: false,
      loading: false,
      drawerLoading: false,
      subTitle: '',
      uploadFile: api_url["a" /* common */].upload_file,
      uploadResult: {},
      uploadProcess: '',
      g_superId: '',
      searchKey: '',
      tableData: [],
      errorTips: '',
      addStatus: '',
      form: {
        id: '',
        name: '',
        content: '',
        conditionType: '1',
        conditionDay1: '',
        conditionDay2: '',
        status: true,
        handleProcess: []
      }
    };
  },

  created() {
    this.initInfo();
  },

  methods: {
    async initInfo() {
      await this.getSessionInfo();
      this.init();
    },

    init() {
      let params = {
        page: this.page,
        num: this.num,
        applyTypeCode: 'DoorOpenApply',
        name: this.searchKey
      };
      this.$axios.get(api_url["a" /* common */].flow_center_page, {
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

    addInfo() {
      if (this.addStatus == 'edit') {
        this.clearDrawerDialog();
      }

      this.drawerVisible = true;
    },

    editInfo(row) {
      this.addStatus = 'edit';
      this.form = {
        id: row.id,
        name: row.name,
        content: row.des,
        conditionType: '1',
        conditionDay1: '',
        conditionDay2: '',
        status: row.enable,
        handleProcess: []
      };
      let handleCondition = row.handle_condition;

      for (let i = 0; i < handleCondition.length; i++) {
        if (handleCondition[i].type == 'leaveDay' || handleCondition[i].type == 'DoorOpenApply') {
          if (handleCondition[i].value1 == 0 && handleCondition[i].value2 == 0) {
            this.form.conditionType = '1';
          } else {
            this.form.conditionType = '2';
            this.form.conditionDay1 = handleCondition[i].value1;
            this.form.conditionDay2 = handleCondition[i].value2;
          }
        }
      }

      let handleProcess = row.handle_process;

      for (let i = 0; i < handleProcess.length; i++) {
        let auditNameArr = handleProcess[i].hname ? handleProcess[i].hname.split(",") : [];
        let shareArr = handleProcess[i].nid ? handleProcess[i].nid.split(",") : [];
        let auditArr = [];
        let auditNameSplit = [];

        for (let j = 0; j < auditNameArr.length; j++) {
          //auditNameSplit = auditNameArr[j].split("@*@")[1];
          auditArr.push({
            user_id: auditNameArr[j].split("@*@")[0],
            real_name: auditNameArr[j].split("@*@")[1]
          });
        }

        this.form.handleProcess.push({
          type: handleProcess[i].htype,
          audit: auditArr,
          auditName: auditNameArr,
          share: shareArr,
          notice: handleProcess[i].andor
        });
      }

      this.drawerVisible = true;
    },

    deleteInfo(row) {
      this.form.id = row.id;
      this.subTitle = row.name;
      this.visibleConfim = true;
    },

    cancelDialog() {
      this.modalVisible = false;
    },

    cancelDrawDialog() {
      this.clearDrawerDialog();
      this.drawerVisible = false;
    },

    closeDialog(event) {},

    clearDrawerDialog() {
      this.form = {
        id: '',
        name: '',
        content: '',
        conditionType: '1',
        conditionDay1: '',
        conditionDay2: '',
        status: true,
        handleProcess: []
      };

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      if (this.$refs['flowProcessRef']) {
        this.$refs.flowProcessRef._handleResetChange();
      }

      this.errorTips = "";
      this.addStatus = '';
    },

    closeDrawerDialog(event) {
      this.drawerVisible = event;
    },

    handleCloseDrawer() {
      this.form = {
        id: '',
        name: '',
        content: '',
        conditionType: '1',
        conditionDay1: '',
        conditionDay2: '',
        status: true,
        handleProcess: []
      };

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      if (this.$refs['flowProcessRef']) {
        this.$refs.flowProcessRef._handleResetChange();
      }
    },

    closeDrawDialog(event) {
      this.drawerVisible = false;
    },

    okDrawDialog(event) {
      let url = "";
      this.errorTips = "";
      let errNum = 0;
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.conditionType == 2 && (this.form.conditionDay1 == "" || this.form.conditionDay2 == "")) {
            this.errorTips = "请输入信息";
            return;
          }

          let params = {
            applyTypeCode: 'DoorOpenApply',
            des: this.form.content,
            enable: this.form.status,
            name: this.form.name
          };

          if (this.form.conditionType == 1) {
            params['handleConditions'] = [{
              type: 'leaveDay',
              value1: 0,
              value2: 0
            }];
          } else if (this.form.conditionType == 2) {
            params['handleConditions'] = [{
              type: 'leaveDay',
              value1: this.form.conditionDay1,
              value2: this.form.conditionDay2
            }];
          }

          let processList = this.$refs.flowProcessRef._getFlowProcessData();

          let processData = [];

          for (let i = 0; i < processList.length; i++) {
            let auditArr = [];
            let shareArr = [];
            let auditNameArr = [];

            for (let j = 0; j < processList[i].audit.length; j++) {
              auditArr.push(processList[i].audit[j].user_id);
            }

            for (let j = 0; j < processList[i].auditName.length; j++) {
              auditNameArr.push(processList[i].auditName[j]);
            }

            for (let j = 0; j < processList[i].share.length; j++) {
              shareArr.push(processList[i].share[j].user_id);
            }

            processData.push({
              horder: i,
              htype: processList[i].type,
              hid: auditArr.join(),
              hname: auditNameArr.join(),
              nid: shareArr.join(),
              andor: processList[i].notice
            });

            if (processList[i].type == 'AnyUser' && auditArr.length == 0) {
              errNum++;
            }
          }

          if (errNum > 0) {
            Object(utils["c" /* MessageWarning */])("请设置固定教师中的审批教师");
            return;
          }

          params['handleProcess'] = processData;

          if (this.form.id != '') {
            params['id'] = this.form.id;
          }

          url = api_url["a" /* common */].flow_center_update; //params = this.$qs.stringify(params);

          this.drawerLoading = true;
          this.$axios.post(url, params, {
            dataType: 'stringfy'
          }).then(res => {
            if (res.data.code == 200) {
              this.drawerVisible = false;
              this.init();
              this.clearDrawerDialog();
              Object(utils["b" /* MessageSuccess */])(res.data.desc);
            } else {
              Object(utils["a" /* MessageError */])(res.data.desc);
            }

            this.drawerLoading = false;
          });
        }
      });
    },

    handleOkChange(data) {
      this.dialogLoading = true;
      let params = {
        id: this.form.id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].flow_center_del, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          this.form.id = "";
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

    search(event) {
      this.page = 1;
      this.searchKey = event.input;
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

    handleChange(type) {
      this.form.conditionType = type;
    },

    changeStatus(event, data) {
      this.form.status = data;
    }

  }
});
// CONCATENATED MODULE: ./pages/basicInfo/stuDoorAccess.vue?vue&type=script&lang=js&
 /* harmony default export */ var basicInfo_stuDoorAccessvue_type_script_lang_js_ = (stuDoorAccessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/basicInfo/stuDoorAccess.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(519)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basicInfo_stuDoorAccessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c012e59a",
  "43aa5fe2"
  
)

/* harmony default export */ var stuDoorAccess = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyInputButton: __webpack_require__(146).default,MyFlowType: __webpack_require__(178).default,MyFlowCondition: __webpack_require__(179).default,MyFlowProcess: __webpack_require__(180).default,MyPagination: __webpack_require__(27).default,LayoutTb: __webpack_require__(152).default,MyRadio: __webpack_require__(154).default,MyFlowProcessList: __webpack_require__(181).default,DrawerLayoutRight: __webpack_require__(29).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=stuDoorAccess.js.map