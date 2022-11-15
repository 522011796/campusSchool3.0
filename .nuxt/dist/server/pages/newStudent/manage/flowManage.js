exports.ids = [122];
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

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6c30d5b0", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormAuditType.vue?vue&type=template&id=129ebc32&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-popover',{attrs:{"placement":"right","width":"100","trigger":"hover"},on:{"show":_vm.showPop},model:{value:(_vm.popVisible),callback:function ($$v) {_vm.popVisible=$$v},expression:"popVisible"}},[_c('div',{staticClass:"font-size-12"},[_c('div',{},[_c('div',{staticClass:"color-muted"},[_c('span',[_vm._v(_vm._s(_vm.$t("审批节点")))])]),_vm._v(" "),_c('div',{staticClass:"margin-left-5"},[_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 1, 'audit')}}},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("固定人审批")))])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 2, 'audit')}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("系统角色审批")))])]),_vm._v(" "),(_vm.customUserStatus == false)?_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 3, 'audit')}}},[_c('i',{staticClass:"fa fa-flag"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("发起人自选审批")))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('div',{staticClass:"color-muted"},[_c('span',[_vm._v(_vm._s(_vm.$t("抄送节点")))])]),_vm._v(" "),_c('div',{staticClass:"margin-left-5"},[_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 4, 'send')}}},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("抄送给固定人")))])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 5, 'send')}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("抄送给系统角色")))])])])])]),_vm._v(" "),_c('span',{staticClass:"flow-item-line-block",attrs:{"slot":"reference"},slot:"reference"},[_c('i',{staticClass:"fa fa-plus-circle color-muted",staticStyle:{"font-size":"25px"},on:{"click":_vm.addPop}})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/MyFormAuditType.vue?vue&type=template&id=129ebc32&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormAuditType.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyFormAuditTypevue_type_script_lang_js_ = ({
  name: 'myFormAuditType',
  props: {
    itemIndex: {
      type: [Number, String],
      default: 0
    },
    customUserStatus: {
      type: Boolean,
      default: false
    }
  },
  computed: {},

  data() {
    return {
      popVisible: false,
      value: ''
    };
  },

  methods: {
    addPop() {
      this.popVisible = true;
    },

    selAuditType(event, type, extra) {
      this.popVisible = false;
      this.$emit("click", type, extra, parseInt(this.itemIndex));
    },

    showPop() {
      this.$emit("showPop");
    }

  }
});
// CONCATENATED MODULE: ./components/form/MyFormAuditType.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_MyFormAuditTypevue_type_script_lang_js_ = (MyFormAuditTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/MyFormAuditType.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(212)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_MyFormAuditTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "129ebc32",
  "b917a84c"
  
)

/* harmony default export */ var MyFormAuditType = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormAuditType_vue_vue_type_style_index_0_id_129ebc32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormAuditType_vue_vue_type_style_index_0_id_129ebc32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormAuditType_vue_vue_type_style_index_0_id_129ebc32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormAuditType_vue_vue_type_style_index_0_id_129ebc32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormAuditType_vue_vue_type_style_index_0_id_129ebc32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormAuditType_vue_vue_type_style_index_0_id_129ebc32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flow-item-line-block[data-v-129ebc32]{position:relative}.flow-item-line-block[data-v-129ebc32]:after{top:-24px}.flow-item-line-block[data-v-129ebc32]:after,.flow-item-line-block[data-v-129ebc32]:before{content:\"\";width:1px;height:15px;position:absolute;left:10px;background:#dcdfe6}.flow-item-line-block[data-v-129ebc32]:before{top:19px}.flow-item-child-block[data-v-129ebc32]:hover{background:#eee}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(730);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3b4354ba", content, true, context)
};

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(732);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5287110e", content, true, context)
};

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(734);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3fd78e46", content, true, context)
};

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/flow/MyNewStudentFlow.vue?vue&type=template&id=b0a3553c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"form-set-main\""+(_vm._ssrStyle(null,_vm.drawHeight3, null))+" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"pull-right form-set-right\" style=\"overflow-y: auto\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"header-block padding-lr-10 border-bottom-1\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":24}},[_c('span',{staticClass:"tab-class font-bold",class:_vm.activeName == 'only' ? 'color-warning' : '',on:{"click":function($event){return _vm.handleClick('only')}}},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n                "+_vm._s(_vm.$t('节点属性'))+"\n              ")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 padding-lr-10 font-size-12\" data-v-b0a3553c>","</div>",[[_vm._ssrNode("<div data-v-b0a3553c><div class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("节点类型")))+"</div> "+((_vm.flowDetailData.type === 1)?("<div class=\"margin-top-10\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("线上流程")))+"</div>"):"<!---->")+" "+((_vm.flowDetailData.type === 0)?("<div class=\"margin-top-10\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("线下流程")))+"</div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("节点名称")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b0a3553c>","</div>",[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"size":"mini"},model:{value:(_vm.flowDetailData.name),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "name", $$v)},expression:"flowDetailData.name"}})],1)],2),_vm._ssrNode(" "),(_vm.flowDetailData.subType == 5)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("学生端显示名称")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b0a3553c>","</div>",[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"size":"mini","row":5},model:{value:(_vm.flowDetailData.checkinSheetName),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "checkinSheetName", $$v)},expression:"flowDetailData.checkinSheetName"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("报到须知")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5 custom-textarea-inner\" data-v-b0a3553c>","</div>",[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"type":"textarea","autosize":{ minRows: 10},"row":10,"maxlength":"500","show-word-limit":""},model:{value:(_vm.flowDetailData.checkinSheetTips),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "checkinSheetTips", $$v)},expression:"flowDetailData.checkinSheetTips"}})],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType != 5)?_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[[_vm._ssrNode("<div class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("管理员")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b0a3553c>","</div>",[_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"left","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-role-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","sel-arr":_vm.flowDetailData.users,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)},"selectType":_vm.selType,"selectRange":_vm.selRange}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                      "+_vm._s(_vm.$t("管理员"))+"("+_vm._s(_vm.$t("人数"))+":"+_vm._s(_vm.approverUsers.length)+")\n                    ")])],1)],1)]],2):_vm._e()],_vm._ssrNode(" "),(_vm.flowDetailData.subType != 5)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c><div data-v-b0a3553c><span class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("依赖环节")))+"</span></div></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},_vm._l((_vm.flowData),function(item,index){return (_vm.flowDetailData != '')?_c('div',{key:index,staticStyle:{"height":"19px","line-height":"19px"}},[_c('span',[_vm._v(_vm._s(item.name))])]):_vm._e()}),0),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[(_vm.flowDetailData != '')?_c('el-checkbox-group',{on:{"change":_vm.handleChangeBox},model:{value:(_vm.flowDetailData.items),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "items", $$v)},expression:"flowDetailData.items"}},_vm._l((_vm.flowData),function(item,index){return _c('div',{key:index,staticClass:"text-right"},[_c('el-checkbox',{attrs:{"label":index,"disabled":index === _vm.flowDetailIndex}},[_vm._v(" ")])],1)}),0):_vm._e()],1)],1)],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType == 1)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c><div data-v-b0a3553c><span class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("分班权限")))+"</span></div></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('div',{staticStyle:{"height":"19px","line-height":"19px"}},[_c('span',[_vm._v(_vm._s(_vm.$t("允许老师分班")))])])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('el-checkbox',{on:{"change":_vm.changeUpdateClass},model:{value:(_vm.flowDetailData.updateClass),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "updateClass", $$v)},expression:"flowDetailData.updateClass"}},[_vm._v(" ")])],1)],1)],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType != 5)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c><div data-v-b0a3553c><span class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("设置办理有效期")))+"</span></div></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-date-picker',{staticStyle:{"width":"100%"},attrs:{"unlink-panels":true,"size":"mini","format":"yyyy-MM-dd HH:mm","type":"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{"change":function($event){return _vm.handleFormChange($event)}},model:{value:(_vm.flowDetailData.datetimerange),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "datetimerange", $$v)},expression:"flowDetailData.datetimerange"}})],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType == 3)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("缴费链接")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b0a3553c>","</div>",[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"size":"mini"},model:{value:(_vm.flowDetailData.enrollPayUrl),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "enrollPayUrl", $$v)},expression:"flowDetailData.enrollPayUrl"}})],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType != 5)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c><div data-v-b0a3553c><span class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("办理权限")))+"</span></div></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v("可重复提交")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.allowRepeat),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "allowRepeat", $$v)},expression:"flowDetailData.allowRepeat"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v("允许撤销")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.allowBack),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "allowBack", $$v)},expression:"flowDetailData.allowBack"}})],1)],1)],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType != 5 && _vm.flowDetailData.report == true)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c><div data-v-b0a3553c><span class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("报到核验方式")))+"</span></div></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v("人工手动")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.custom),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "custom", $$v)},expression:"flowDetailData.custom"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v("二维码(主扫)")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.qrcode),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "qrcode", $$v)},expression:"flowDetailData.qrcode"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v("人脸识别")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.face),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "face", $$v)},expression:"flowDetailData.face"}})],1)],1)],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.subType != 5 && _vm.flowDetailData.report == false)?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c><div data-v-b0a3553c><span class=\"font-bold\" data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("成功报到设置")))+"</span></div></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b0a3553c>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v("设为报到成功")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.reportSuccess),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "reportSuccess", $$v)},expression:"flowDetailData.reportSuccess"}})],1)],1)],1)],2)]:_vm._e()],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-set-left\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"text-center flow-main-block\""+(_vm._ssrStyle({"overflow-y":"auto","position":"relative"},_vm.drawHeight5, null))+" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"flow-fixed-block font-size-12 font-bold margin-bottom-20 bg-success\" data-v-b0a3553c><span data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("开始")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-bottom-20 margin-top-20\" data-v-b0a3553c>","</div>",[_c('my-new-student-flow-type',{attrs:{"item-index":0,"pop-visible":_vm.popVisible},on:{"click":_vm.selAuditType}})],1),_vm._ssrNode(" "),_vm._l((_vm.flowData),function(item,index){return (_vm.flowData.length > 0)?_vm._ssrNode("<div data-v-b0a3553c>","</div>",[_vm._ssrNode("<div class=\"flow-item-block\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("flow-item-title-block",item.subType == '1' ? 'bg-warning' : 'bg-success'))+" data-v-b0a3553c>","</div>",[_vm._ssrNode("<i class=\"fa fa-times-circle flow-item-close-block color-danger\" data-v-b0a3553c></i> "),_vm._ssrNode("<span class=\"font-bold font-size-12\" data-v-b0a3553c>","</span>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('i',{staticClass:"fa fa-tag"}),_vm._v(" "),_c('label',[_vm._v(_vm._s(item.name))]),_vm._v(" "),(item.type == 1 && item.subType == 9)?_c('label',[_vm._v("("+_vm._s(_vm.$t("线上"))+")")]):_vm._e(),_vm._v(" "),(item.type == 0 && item.subType == 9)?_c('label',[_vm._v("("+_vm._s(_vm.$t("线下"))+")")]):_vm._e()]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('i',{staticClass:"fa fa-cog"})])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10 text-left font-size-12\" data-v-b0a3553c>","</div>",[(item.subType != 5)?_vm._ssrNode("<div data-v-b0a3553c>","</div>",[_vm._ssrNode("<div data-v-b0a3553c>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-b0a3553c><i class=\"fa fa-users\" data-v-b0a3553c></i> <label data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("人员"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-b0a3553c>","</span>",[[_vm._l((item.hName),function(itemUser,indexUser){return (indexUser < 4)?_c('el-tag',{key:indexUser,staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(itemUser))])])],1):_vm._e()}),_vm._ssrNode(" "+((item.users.length >= 4)?("<label class=\"flow-user-count-tag margin-left-5\" data-v-b0a3553c>4+</label>"):"<!---->"))]],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-b0a3553c><i class=\"fa fa-cog\" data-v-b0a3553c></i> <label data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("权限"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-b0a3553c>","</span>",[(item.allowBack)?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"80px"},attrs:{"size":"mini","type":"success"}},[_vm._v("\n                        "+_vm._s(_vm.$t("允许撤销"))+"\n                      ")]):_vm._e(),_vm._ssrNode(" "),(item.allowRepeat)?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"80px"},attrs:{"size":"mini","type":"warning"}},[_vm._v("\n                        "+_vm._s(_vm.$t("可重复提交"))+"\n                      ")]):_vm._e()],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b0a3553c>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-b0a3553c><i class=\"fa fa-history\" data-v-b0a3553c></i> <label data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("时间"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-b0a3553c>","</span>",[[_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"240px"},attrs:{"size":"mini","type":"success"}},[_vm._v("\n                          "+_vm._s(_vm.$moment(item.datetimerange[0]).format("YYYY-MM-DD HH:mm"))+"\n                          -\n                          "+_vm._s(_vm.$moment(item.datetimerange[1]).format("YYYY-MM-DD HH:mm"))+"\n                        ")])]],2)],2)],2):_vm._e()])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-bottom-20 margin-top-20\" data-v-b0a3553c>","</div>",[_c('my-new-student-flow-type',{attrs:{"item-index":index+1,"pop-visible":_vm.popVisible},on:{"click":_vm.selAuditType}})],1)],2):_vm._e()}),_vm._ssrNode(" <div class=\"flow-fixed-block font-size-12 font-bold bg-danger\" data-v-b0a3553c><span data-v-b0a3553c>"+_vm._ssrEscape(_vm._s(_vm.$t("结束")))+"</span></div>")],2)]),_vm._ssrNode(" <div class=\"moon-clearfix\" data-v-b0a3553c></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/flow/MyNewStudentFlow.vue?vue&type=template&id=b0a3553c&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/form/MyFormAuditType.vue + 4 modules
var MyFormAuditType = __webpack_require__(205);

// EXTERNAL MODULE: ./components/flow/MyNewStudentFlowType.vue + 4 modules
var MyNewStudentFlowType = __webpack_require__(454);

// EXTERNAL MODULE: ./components/utils/treeAndList/TeacherTreeAndListRoleNoPage.vue + 4 modules
var TeacherTreeAndListRoleNoPage = __webpack_require__(455);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/flow/MyNewStudentFlow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var MyNewStudentFlowvue_type_script_lang_js_ = ({
  name: 'MyNewStudentFlow',
  components: {
    TeacherTreeAndListRoleNoPage: TeacherTreeAndListRoleNoPage["default"],
    MyNewStudentFlowType: MyNewStudentFlowType["default"],
    MyFormAuditType: MyFormAuditType["default"],
    MySelect: MySelect["default"]
  },
  mixins: [mixins["a" /* default */]],
  props: {
    formId: Object,
    flowData: {
      default: function () {
        return [];
      },
      type: Array
    },
    form: {
      default: function () {
        return {
          auditType: '',
          name: '',
          allowRepeat: false,
          allowBack: false,
          reportSuccess: false,
          face: false,
          qrcode: false,
          custom: false,
          report: '',
          datetimerange: [],
          items: [],
          hType: '',
          hName: '',
          subType: '',
          enrollPayUrl: '',
          checkinSheetName: '',
          updateClass: false,
          checkinSheetTips: ''
        };
      },
      type: Object
    }
  },
  computed: {},

  data() {
    return {
      checkRight1All: false,
      checkRight2All: false,
      popVisible: false,
      refreshTeacherStatus: false,
      activeName: 'only',
      flowCustonUserStatus: false,
      flowDetailIndex: '',
      flowDetailData: '',
      approverUsers: [],
      formFieldList: [],
      auditFlowType: [{
        label: this.$t("固定人审批"),
        text: this.$t("固定人审批"),
        value: 1
      }, {
        label: this.$t("系统角色审批"),
        text: this.$t("系统角色审批"),
        value: 2
      }, {
        label: this.$t("发起人自选审批"),
        text: this.$t("发起人自选审批"),
        value: 3
      }, {
        label: this.$t("抄送给固定人"),
        text: this.$t("抄送给固定人"),
        value: 4
      }, {
        label: this.$t("抄送给系统角色"),
        text: this.$t("抄送给系统角色"),
        value: 5
      }, {
        label: this.$t("自选抄送人"),
        text: this.$t("自选抄送人"),
        value: 6
      }]
    };
  },

  created() {},

  methods: {
    selType(data, userId) {
      for (let i = 0; i < this.flowDetailData.users.length; i++) {
        if (userId == this.flowDetailData.users[i].user_id) {
          this.flowDetailData.users[i]['right_type'] = data;
        }
      }
    },

    selRange(data, userId) {
      for (let i = 0; i < this.flowDetailData.users.length; i++) {
        if (userId == this.flowDetailData.users[i].user_id) {
          this.flowDetailData.users[i]['right_range'] = data;
        }
      }
    },

    selAuditType(subType, extra, index, type) {
      let obj = {
        type: type,
        extra: extra,
        name: this.auditFlowTypeItemInfo(subType, 'set'),
        users: [],
        allowRepeat: false,
        allowBack: false,
        reportSuccess: false,
        face: false,
        qrcode: false,
        custom: false,
        report: subType == 1 ? true : false,
        datetimerange: [],
        items: [],
        hType: '',
        hName: '',
        subType: subType,
        enrollPayUrl: '',
        checkinSheetName: '',
        updateClass: false,
        checkinSheetTips: ''
      };
      this.flowData.splice(index, 0, obj);
      this.selFlowItemBlock(null, obj, index);
    },

    delAuditType(event, data, index) {
      this.flowData.splice(index, 1);
    },

    handleClick(type) {
      this.activeName = type;
    },

    handleAuditTypeChange(data) {
      this.form.auditType = data;
    },

    handleUserType(data) {
      this.flowDetailData.htype = data;
      this.flowDetailData.hType = data;
    },

    auditFlowTypeItemInfo(value, type) {
      return Object(utils["C" /* newStudentFlowAuditItemType */])(value, type);
    },

    selFlowItemBlock(event, data, index) {
      this.flowDetailData = data;
      this.approverUsers = data.users;
      this.flowDetailIndex = index;
    },

    loadingShow(type) {
      let timer = null;
      clearTimeout(timer);

      switch (type) {
        case 1:
          this.refreshTeacherStatus = true;
          timer = setTimeout(() => {
            this.refreshTeacherStatus = false;
            clearTimeout(timer);
          }, 1500);
          break;
      }
    },

    handleShowTeacher(type) {
      setTimeout(() => {
        if (type == 1) {
          this.$refs.popverTeacherRef._handleOpen();
        }
      }, 800);
    },

    handleSelUser(data, type) {
      if (type == 1) {
        this.flowDetailData.users = data;
        this.flowDetailData.hName = [];

        for (let i = 0; i < data.length; i++) {
          this.flowDetailData.hName.push(data[i].real_name);
        }
      }

      this.approverUsers = this.flowDetailData.users;
    },

    handleFormChange(event, type) {
      this.flowData[this.flowDetailIndex]['datetimerange'] = [this.$moment(event[0]).format("YYYY-MM-DD HH:mm"), this.$moment(event[1]).format("YYYY-MM-DD HH:mm")];
    },

    versionList() {
      this.$emit("versionClick");
    },

    handleChangeBox(data) {
      this.flowData[this.flowDetailIndex].items = data;
    },

    changeUpdateClass(data) {
      //this.$emit("updateClass", data);
      this.flowData[this.flowDetailIndex]['updateClass'] = data;
    },

    showPop() {
      this.flowCustonUserStatus = false;

      for (let i = 0; i < this.flowData.length; i++) {
        if (this.flowData[i].hType == 'CustomUser') {
          this.flowCustonUserStatus = true;
          break;
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/flow/MyNewStudentFlow.vue?vue&type=script&lang=js&
 /* harmony default export */ var flow_MyNewStudentFlowvue_type_script_lang_js_ = (MyNewStudentFlowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/flow/MyNewStudentFlow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(731)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  flow_MyNewStudentFlowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b0a3553c",
  "edc17c34"
  
)

/* harmony default export */ var MyNewStudentFlow = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeacherTreeAndListRoleNoPage: __webpack_require__(455).default,MyNewStudentFlowType: __webpack_require__(454).default})


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/flow/MyNewStudentFlowType.vue?vue&type=template&id=0626a07a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-popover',{attrs:{"placement":"right","width":"100","trigger":"hover"},on:{"show":_vm.showPop},model:{value:(_vm.popVisible),callback:function ($$v) {_vm.popVisible=$$v},expression:"popVisible"}},[_c('div',{staticClass:"font-size-12"},[_c('div',{},[_c('div',{staticClass:"color-muted"},[_c('span',[_vm._v(_vm._s(_vm.$t("线下流程")))])]),_vm._v(" "),_c('div',{staticClass:"margin-left-5"},[_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 1, 'audit', 0)}}},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("现场报到"))+" ("+_vm._s(_vm.$t("系统"))+")")])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 3, 'audit', 0)}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("现场缴费"))+" ("+_vm._s(_vm.$t("系统"))+")")])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 5, 'audit', 0)}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("打印报到单"))+" ("+_vm._s(_vm.$t("系统"))+")")])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 9, 'send', 0)}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("自定义环节")))])])])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('div',{staticClass:"color-muted"},[_c('span',[_vm._v(_vm._s(_vm.$t("线上流程")))])]),_vm._v(" "),_c('div',{staticClass:"margin-left-5"},[_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 4, 'send', 1)}}},[_c('i',{staticClass:"fa fa-user"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("信息采集"))+" ("+_vm._s(_vm.$t("系统"))+")")])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 0, 'send', 1)}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("接站登记"))+" ("+_vm._s(_vm.$t("系统"))+")")])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 2, 'send', 1)}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("线上选寝"))+" ("+_vm._s(_vm.$t("系统"))+")")])]),_vm._v(" "),_c('div',{staticClass:"flow-item-child-block padding-tb-5",on:{"click":function($event){return _vm.selAuditType($event, 9, 'send', 1)}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("自定义环节")))])])])])]),_vm._v(" "),_c('span',{staticClass:"flow-item-line-block",attrs:{"slot":"reference"},slot:"reference"},[_c('i',{staticClass:"fa fa-plus-circle color-muted",staticStyle:{"font-size":"25px"},on:{"click":_vm.addPop}})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/flow/MyNewStudentFlowType.vue?vue&type=template&id=0626a07a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/flow/MyNewStudentFlowType.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MyNewStudentFlowTypevue_type_script_lang_js_ = ({
  name: 'MyNewStudentFlowType',
  props: {
    itemIndex: {
      type: [Number, String],
      default: 0
    },
    customUserStatus: {
      type: Boolean,
      default: false
    }
  },
  computed: {},

  data() {
    return {
      popVisible: false,
      value: ''
    };
  },

  methods: {
    addPop() {
      this.popVisible = true;
    },

    selAuditType(event, type, extra, subType) {
      this.popVisible = false;
      this.$emit("click", type, extra, parseInt(this.itemIndex), subType);
    },

    showPop() {
      this.$emit("showPop");
    }

  }
});
// CONCATENATED MODULE: ./components/flow/MyNewStudentFlowType.vue?vue&type=script&lang=js&
 /* harmony default export */ var flow_MyNewStudentFlowTypevue_type_script_lang_js_ = (MyNewStudentFlowTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/flow/MyNewStudentFlowType.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(729)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  flow_MyNewStudentFlowTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0626a07a",
  "f8249d80"
  
)

/* harmony default export */ var MyNewStudentFlowType = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/TeacherTreeAndListRoleNoPage.vue?vue&type=template&id=8334c41a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commTeacherList"},[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"size":"small","width-style":"160","sel-value":_vm.searchCommDeptData,"type":"4","sub-type":""},on:{"change":function($event){return _vm._handleCascaderChange($event)}}}),_vm._ssrNode(" "),_c('my-input-button',{staticClass:"layout-item",attrs:{"size":"small","clearable":true,"type":"success","plain":""},on:{"click":_vm._handleSearch}})],2),_vm._ssrNode(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.commLoading),expression:"commLoading"}],ref:"commTableRef",attrs:{"data":_vm.tableTeacherCommData,"max-height":_vm.maxHeight,"size":"mini"}},[(_vm.setType == 'check')?_c('el-table-column',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.commTalbeLoading),expression:"commTalbeLoading"}],attrs:{"align":"center","width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}],null,false,1304403255)}):_vm._e(),_vm._v(" "),(_vm.setType == 'radio')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-radio',_vm._b({attrs:{"sel-value":_vm.commSelUserVal,"label":scope.row.user_id},on:{"change":function($event){return _vm._handleChange(scope.row)}}},'my-radio',_vm._selValue,false),[_c('span')])]}}],null,false,4043958644)}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"property":"real_name","align":"center","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"job_num","align":"center","label":"工号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"","align":"center","label":"部门","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.department_name ? scope.row.department_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.department_name ? scope.row.department_name : '--')+"\n          ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"权限类型","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-select',{staticStyle:{"width":"80px"},attrs:{"size":"mini","placeholder":_vm.$t('请选择'),"sel-value":scope.row.right_type,"options":_vm.filterRoleType},on:{"change":function($event){return _vm._handleSearchChange($event, 1, scope.$index, scope.row)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center custom-select-tag","label":"院系范围","width":"160"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-select',{staticStyle:{"width":"150px"},attrs:{"size":"mini","multiple":"","collapse-tags":"","placeholder":"请选择"},on:{"change":function($event){return _vm._handleSearchChange($event, 2, scope.$index, scope.row)}},model:{value:(scope.row.right_range),callback:function ($$v) {_vm.$set(scope.row, "right_range", $$v)},expression:"scope.row.right_range"}},_vm._l((_vm.filterCollType),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":''+item.value}})}),1)]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-right margin-top-10\">","</div>",[_c('el-pagination',{attrs:{"current-page":_vm.commPage,"page-sizes":[10, 20, 30, 50, 100],"page-size":_vm.commNum,"layout":"total, sizes, prev, pager, next","total":_vm.commTotalTotal},on:{"size-change":_vm._handleSizeChange,"current-change":_vm._handleCurrentChange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndListRoleNoPage.vue?vue&type=template&id=8334c41a&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/TeacherTreeAndListRoleNoPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TeacherTreeAndListRoleNoPagevue_type_script_lang_js_ = ({
  name: 'teacherTreeAndListRoleNoPage',
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
    userType: {
      default: '',
      type: String
    },
    groupId: {
      default: '',
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
      filterRoleType: [{
        label: this.$t("查看"),
        value: 0,
        text: this.$t("查看")
      }, {
        label: this.$t("操作"),
        value: 1,
        text: this.$t("操作")
      }],
      filterCollType: [],
      searchRoleType: '',
      searchCollType: '',
      commLoading: false,
      commTalbeLoading: false,
      commFlag: false,
      commMultipleSelection: [],
      commRow: '',

      commGetRowKeys(row) {
        return row.user_id;
      }

    };
  },

  created() {
    //this._initTeacher();
    this._initAsync();
  },

  methods: {
    async _initAsync() {
      await this._getCollegeInfo(1);
      this.filterCollType = this._collegeData;
    },

    async _getCollegeInfo(type) {
      let arr = [];
      await this.$axios.get(url["a" /* common */].hierarchical_college).then(res => {
        if (res.data.data) {
          //this.dataCollege = setCollegeChildren(res.data.data.tree, type);
          for (let i = 0; i < res.data.data.tree.length; i++) {
            arr.push({
              value: res.data.data.tree[i].id,
              id: res.data.data.tree[i].id,
              label: res.data.data.tree[i].name,
              text: res.data.data.tree[i].name,
              unit: res.data.data.tree[i].unit
            });
          }

          this._collegeData = arr;
        }
      });
    },

    _initTeacher() {
      this.checkboxCount = 0;
      let params = {
        page: this.commPage,
        num: this.commNum,
        departPath: this.commSearchDept,
        userType: 'checkDepart',
        type: this.userType,
        groupId: this.groupId
      };
      this.commTalbeLoading = true;
      params['realName'] = this.commSearchKey['input']; //this.commSelUserArr = [];
      //this.commSelUserNameArr = [];

      this.commLoading = true;
      this.$axios.get(url["a" /* common */].dormaccess_teacher_select_status_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.$refs.commTableRef.clearSelection();
          for (let i = 0; i < res.data.data.page.list.length; i++) {
            res.data.data.page.list[i]['right_range'] = [];
            res.data.data.page.list[i]['right_type'] = 0;
            let sel = Object(utils["u" /* inArray */])(res.data.data.page.list[i], this.commSelUserArr, 'user_id');

            if (sel > -1) {
              this.commFlag = true;
              res.data.data.page.list[i]['_checked'] = true;

              for (let j = 0; j < this.commSelUserArr.length; j++) {
                if (this.commSelUserArr[j].user_id == res.data.data.page.list[i].user_id) {
                  let range = this.commSelUserArr[j].right_range;
                  res.data.data.page.list[i]['right_range'] = range;
                  res.data.data.page.list[i]['right_type'] = this.commSelUserArr[j].right_type;
                }
              }

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

        this.commTalbeLoading = false;
        this.commLoading = false;
      });
    },

    _handleOpen() {
      this.commPage = 1;
      this.commNum = 20;
      this.commSelUserArr = this.selArr;
      setTimeout(() => {
        this._initTeacher();
      }, 800);
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
          let checked = Object(utils["u" /* inArray */])(this.tableTeacherCommData[i], this.commSelUserArr, 'user_id');
          this.commSelUserArr.splice(checked, 1);
          this.tableTeacherCommData[i]._checked = false;
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

      if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
        this.$refs.SelectorDept.$refs.cascaderSelector.$refs.panel.calculateCheckedNodePaths();
      }

      if (this.$refs.SelectorDept && this.$refs.SelectorDept.$refs.cascaderSelector) {
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
    },

    _handleSearchChange(event, type, index, row) {
      if (type == 1) {
        this.tableTeacherCommData[index]['right_type'] = event;
        this.$emit("selectType", event, row.user_id);
      } else if (type == 2) {
        this.tableTeacherCommData[index]['right_range'] = event;
        this.$emit("selectRange", event, row.user_id);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndListRoleNoPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeAndList_TeacherTreeAndListRoleNoPagevue_type_script_lang_js_ = (TeacherTreeAndListRoleNoPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndListRoleNoPage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  treeAndList_TeacherTreeAndListRoleNoPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "84f0739e"
  
)

/* harmony default export */ var TeacherTreeAndListRoleNoPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyInputButton: __webpack_require__(146).default,MyRadio: __webpack_require__(154).default,MySelect: __webpack_require__(147).default})


/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlowType_vue_vue_type_style_index_0_id_0626a07a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(364);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlowType_vue_vue_type_style_index_0_id_0626a07a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlowType_vue_vue_type_style_index_0_id_0626a07a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlowType_vue_vue_type_style_index_0_id_0626a07a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlowType_vue_vue_type_style_index_0_id_0626a07a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlowType_vue_vue_type_style_index_0_id_0626a07a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flow-item-line-block[data-v-0626a07a]{position:relative}.flow-item-line-block[data-v-0626a07a]:after{top:-24px}.flow-item-line-block[data-v-0626a07a]:after,.flow-item-line-block[data-v-0626a07a]:before{content:\"\";width:1px;height:15px;position:absolute;left:10px;background:#dcdfe6}.flow-item-line-block[data-v-0626a07a]:before{top:19px}.flow-item-child-block[data-v-0626a07a]:hover{background:#eee}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlow_vue_vue_type_style_index_0_id_b0a3553c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(365);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlow_vue_vue_type_style_index_0_id_b0a3553c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlow_vue_vue_type_style_index_0_id_b0a3553c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlow_vue_vue_type_style_index_0_id_b0a3553c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlow_vue_vue_type_style_index_0_id_b0a3553c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNewStudentFlow_vue_vue_type_style_index_0_id_b0a3553c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-b0a3553c]{box-shadow:0 0 4px #dcdfe6;border-right:1px solid #dcdfe6}.form-set-left[data-v-b0a3553c]{margin-right:310px}.form-set-left[data-v-b0a3553c],.form-set-right[data-v-b0a3553c]{background:#f8f8f8;height:100%;box-shadow:0 0 4px #dcdfe6}.form-set-right[data-v-b0a3553c]{width:300px}.form-set-menu-item[data-v-b0a3553c]{font-size:12px;text-align:center;height:40px;line-height:40px}.form-set-menu-item-active[data-v-b0a3553c]{background:#3e8db8;color:#fff}.title-block-tag[data-v-b0a3553c]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-b0a3553c]{font-weight:700;position:relative;top:-5px}.item-tag-block[data-v-b0a3553c]{height:25px;line-height:25px;background:#8cc5ff;border-radius:5px;padding:0 10px;color:#909399}.flow-fixed-block[data-v-b0a3553c]{width:40px;height:40px;line-height:40px;border-radius:100%;margin:20px auto 0;color:#fff}.flow-item-block[data-v-b0a3553c]{border-radius:5px;background:#fff;min-height:50px;width:350px;margin:20px auto;box-shadow:0 0 4px #dcdfe6}.flow-item-title-block[data-v-b0a3553c]{position:relative;height:30px;line-height:30px;padding:0 10px;color:#fff;text-align:left;border-top-left-radius:5px;border-top-right-radius:5px}.flow-item-close-block[data-v-b0a3553c]{position:absolute;right:-10px;top:-10px}.flow-user-count-tag[data-v-b0a3553c]{position:relative;display:inline-block;width:20px;height:20px;line-height:20px;border-radius:100%;background:#f56c6c;text-align:center;font-size:12px;color:#fff;top:-5px}.header-block[data-v-b0a3553c]{height:40px;line-height:40px}.tab-class[data-v-b0a3553c]{cursor:default;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_f8f4fe14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(366);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_f8f4fe14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_f8f4fe14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_f8f4fe14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_f8f4fe14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_f8f4fe14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-f8f4fe14]{padding:10px 15px}.header-block[data-v-f8f4fe14]{height:40px;line-height:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/manage/flowManage.vue?vue&type=template&id=f8f4fe14&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('layout-tb',[_c('template',{slot:"tag"},[_vm._v("流程管理")]),_vm._v(" "),_c('div',{attrs:{"slot":"tab"},slot:"tab"},[_c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('el-button',{attrs:{"size":"small","type":"primary","icon":"el-icon-plus"},on:{"click":function($event){return _vm.addInfo($event)}}},[_vm._v(_vm._s(_vm.$t("创建流程")))])],1),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":18}},[_c('div',{staticClass:"layout-inline"},[_c('my-select',{staticClass:"layout-item width-150",attrs:{"size":"small","placeholder":_vm.$t('状态'),"options":_vm.filterAppManageStatus,"clearable":true},on:{"change":function($event){return _vm.handleSearchChange($event, 1)}}}),_vm._v(" "),_c('my-input-button',{ref:"teacher width-150",attrs:{"size":"small","plain":"","width-class":"width: 180px","type":"success","clearable":true,"placeholder":_vm.$t('名称/编号')},on:{"click":_vm.search}})],1)])],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","row-key":"id","max-height":_vm.tableHeight.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('创建时间')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm.$moment(scope.row.createTime).format("YYYY-MM-DD HH:mm")))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('流程名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.processName))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.processName))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('环节数量')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.linkSize))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.linkSize))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('学生数量')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.studentSize))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.studentSize))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('状态')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.enable)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已发布")))]):_vm._e(),_vm._v(" "),(!scope.row.enable)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待发布")))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('div',{staticClass:"text-center"},[(scope.row.enable)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已发布")))]):_vm._e(),_vm._v(" "),(!scope.row.enable)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待发布")))]):_vm._e()])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","fixed":"right","label":"操作","width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.enable)?_c('i',{staticClass:"fa fa-stop-circle color-warning margin-right-5",on:{"click":function($event){return _vm.statusInfo(scope.row, false)}}}):_vm._e(),_vm._v(" "),(!scope.row.enable)?_c('i',{staticClass:"fa fa-play-circle color-success margin-right-5",on:{"click":function($event){return _vm.statusInfo(scope.row, true)}}}):_vm._e(),_vm._v(" "),_c('i',{staticClass:"fa fa-edit color-grand margin-right-5",on:{"click":function($event){return _vm.editInfo(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteInfo(scope.row)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","fixed":"right","label":"流程设计","width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-cog color-success",on:{"click":function($event){return _vm.settingInfo(scope.row)}}})]}}])})],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],1)],2),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"top":"10vh","visible":_vm.dialogSetting,"title":_vm.$t('流程设置')},on:{"close":_vm.closeDialog,"right-close":_vm.cancelDialog}},[_c('div',{staticClass:"margin-top-10"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"140px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('流程名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('学生范围')}},[_c('el-button',{attrs:{"size":"mini","type":"warning"},on:{"click":_vm.studentManage}},[_vm._v(_vm._s(_vm.$t('添加学生')))]),_vm._v(" "),_c('span',{staticClass:"color-muted margin-left-10"},[_vm._v(_vm._s(_vm.$t('学生人数')))]),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.selDataOk.length))]),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t('人')))])],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary","loading":_vm.btnFlowLoading},on:{"click":_vm.okDialog}},[_vm._v(_vm._s(_vm.$t("确定"))+"\n        ")])],1)]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"1","append-to-body":true,"visible":_vm.drawerVisible,"size":"850px"},on:{"close":_vm.closeDrawDialog,"right-close":_vm.cancelDrawDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-user"}),_vm._v("\n                "+_vm._s(_vm.$t('管理学生'))+"\n              ")])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"tab-class font-bold"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary","loading":_vm.drawerLoading},on:{"click":_vm.okDrawDialog}},[_vm._v(_vm._s(_vm.$t("保存")))])],1)])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"text-left layout-inline"},[_c('el-col',{attrs:{"span":18}},[_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"size":"small","clearable":true,"width-style":"140","sel-value":_vm.searchCommDeptData,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleCascaderChange($event)}}}),_vm._v(" "),_c('my-select',{staticClass:"layout-item ",attrs:{"size":"small","placeholder":_vm.$t('选择性别'),"clearable":true,"sel-value":_vm.searchSex,"options":_vm.g_sex,"width-style":"100"},on:{"change":function($event){return _vm.handleSearchChange($event, 3)}}}),_vm._v(" "),_c('my-select',{staticClass:"layout-item ",attrs:{"size":"small","placeholder":_vm.$t('选择批次'),"clearable":true,"sel-value":_vm.searchStudentPC,"options":_vm.fliterPCs,"width-style":"100"},on:{"change":function($event){return _vm.handleSearchChange($event, 5)}}}),_vm._v(" "),_c('el-date-picker',{staticStyle:{"width":"215px"},attrs:{"size":"small","unlink-panels":"","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{"change":_vm.handleChangeTime},model:{value:(_vm.searchStudentTime),callback:function ($$v) {_vm.searchStudentTime=$$v},expression:"searchStudentTime"}})],1),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":6}},[_c('my-input-button',{ref:"studentRef",attrs:{"size":"small","plain":"","width-class":"width: 120px","type":"success","clearable":true,"placeholder":_vm.$t('名称')},on:{"click":_vm.searchStudent}})],1)],1),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"}),_vm._v(" "),_c('div',{staticClass:"padding-tb-10"},[_c('el-table',{ref:"tableStudentRef",staticStyle:{"width":"100%"},attrs:{"row-key":_vm.getRowKeys,"data":_vm.tableStudentData,"header-cell-class-name":"custom-table-cell-bg","max-height":_vm.tableHeight16.height,"loading":_vm.tableStudentLoading},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionStudentAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionStudentSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('录取日期')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$moment(scope.row.regist_date).format("YYYY-MM-DD")))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(_vm.$moment(scope.row.regist_date).format("YYYY-MM-DD"))+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('录取号')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.enroll_no))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.enroll_no)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('姓名')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.real_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.real_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('性别')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('my-sex',{attrs:{"sex":scope.row.sex,"tag":"text"}})],1),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('my-sex',{attrs:{"sex":scope.row.sex,"tag":"text"}})],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('专业')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.major_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.major_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('班级')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.class_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.class_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('招生老师')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('label',[_vm._v(_vm._s(scope.row.enroll_teacher ? scope.row.enroll_teacher : '--'))])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('label',[_vm._v(_vm._s(scope.row.enroll_teacher ? scope.row.enroll_teacher : '--'))])])])]}}])})],1)],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-pagination',{attrs:{"background":"","page-sizes":[10, 20, 50, 100],"layout":"total, sizes, prev, pager, next","total":_vm.totalStudent,"current-page":_vm.pageStudent,"page-size":_vm.numStudent},on:{"size-change":_vm.sizeStudentChange,"current-change":_vm.currentStudentPage}})],1)])],1)],1)]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"1","append-to-body":true,"visible":_vm.dialogFlowSetting,"size":"80%"},on:{"close":_vm.closeDialog,"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-user"}),_vm._v("\n            "+_vm._s(_vm.$t('流程设计'))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',[_c('my-new-student-flow',{ref:"flow",attrs:{"formId":_vm.serverDataItem,"flow-data":_vm.flowListData,"form":_vm.flowFormData}})],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelFlowDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary","loading":_vm.btnLoading},on:{"click":_vm.okFlowDrawDialog}},[_vm._v(_vm._s(_vm.$t("保存")))])],1)])],1)],1)]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","detail":_vm.subTitle,"content":"确认需要删除该信息？"},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/manage/flowManage.vue?vue&type=template&id=f8f4fe14&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/validater/rules.js
var rules = __webpack_require__(11);
var rules_default = /*#__PURE__*/__webpack_require__.n(rules);

// CONCATENATED MODULE: ./utils/validater/flowManageValidater.js

/* harmony default export */ var flowManageValidater = ({
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
        }]
      }
    };
  }

});
// EXTERNAL MODULE: ./components/utils/dialog/MyNormalDialog.vue + 4 modules
var MyNormalDialog = __webpack_require__(150);

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/flow/MyNewStudentFlow.vue + 4 modules
var MyNewStudentFlow = __webpack_require__(448);

// EXTERNAL MODULE: ./components/MySex.vue + 4 modules
var MySex = __webpack_require__(162);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/manage/flowManage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var flowManagevue_type_script_lang_js_ = ({
  components: {
    DrawerLayoutRight: DrawerLayoutRight["default"],
    MySex: MySex["default"],
    MyNewStudentFlow: MyNewStudentFlow["default"],
    MySelect: MySelect["default"],
    MyNormalDialog: MyNormalDialog["default"]
  },
  mixins: [mixins["a" /* default */], flowManageValidater],

  data() {
    return {
      commAllCheck: false,
      commAllCheckCount: 0,
      checkboxCount: 0,
      pageStudent: 1,
      totalStudent: 0,
      numStudent: 20,
      subTitle: '',
      visibleConfim: false,
      tableData: [],
      tableStudentData: [],
      dialogSetting: false,
      drawerVisible: false,
      dialogLoading: false,
      drawerLoading: false,
      dialogFlowSetting: false,
      tableStudentLoading: false,
      btnLoading: false,
      btnFlowLoading: false,
      updateClassBool: false,
      listId: '',
      yearOptions: [],
      searchKey: '',
      searchEnable: '',
      searchStatus: '',
      statusOptions: [],
      typeOptions: [],
      studentSelArray: [],
      searchYear: '',
      searchSex: '',
      searchStudnetKey: '',
      searchStudentCollege: '',
      searchStudentMajor: '',
      searchStudentGrade: '',
      searchStudentClass: '',
      searchCommDeptData: [],
      versionStatus: '',
      serverDataItem: {},
      serverDataIndex: '',
      flowListData: [],
      formFieldList: [],
      flowFormData: {},
      fliterTimes: [],
      fliterPCs: [],
      searchStudnetCollege: '',
      searchStudnetMajor: '',
      searchStudnetGrade: '',
      searchStudnetClass: '',
      searchStudentKey: '',
      searchStudentTime: [],
      searchStudentPC: '',
      selData: [],
      selDataOk: [],
      selDataBakOk: [],
      form: {
        id: '',
        year: '',
        name: '',
        type: '',
        time: ''
      }
    };
  },

  created() {
    this.init();
    this.initBatchList();
    this.getYearInfo();
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

          this.yearOptions = years;
        }
      });
    },

    getRowKeys(row) {
      return row.user_id;
    },

    handleSelectionChange(data) {
      this.selData = data;
    },

    _handleSelectionStudentSelect(event, row) {
      if (event) {
        //选中
        this.selData.push(row);
        row._checked = true;
        this.checkboxCount++;
      } else {
        //取消选中
        let checked = Object(utils["u" /* inArray */])(row, this.selData, 'user_id');
        this.selData.splice(checked, 1);
        row._checked = false;
        this.checkboxCount--;
      }

      if (this.checkboxCount != 0 && this.checkboxCount == this.tableStudentData.length) {
        this.commAllCheck = true;
      } else {
        this.commAllCheck = false;
      }
    },

    _handleSelectionStudentAllSelect(selection) {
      this.commAllCheck = selection;

      for (let i = 0; i < this.tableStudentData.length; i++) {
        if (selection == true) {
          this.tableStudentData[i]._checked = true;
          let checked = Object(utils["u" /* inArray */])(this.tableStudentData[i], this.selData, 'user_id');

          if (checked == -1) {
            this.selData.push(this.tableStudentData[i]);
          }

          this.checkboxCount++;
        } else {
          this.tableStudentData[i]._checked = false;
          let checked = Object(utils["u" /* inArray */])(this.tableStudentData[i], this.selData, 'user_id');

          if (checked > -1) {
            this.selData.splice(checked, 1);
            i = i - 1;
          }

          this.checkboxCount--;
        }
      }
    },

    init() {
      let params = {
        page: this.page,
        num: this.num,
        enable: this.searchStatus,
        searchKey: this.searchKey
      };
      this.$axios.get(api_url["a" /* common */].enroll_process_page, {
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

    initStudent() {
      let params = {
        page: this.pageStudent,
        num: this.numStudent,
        sex: this.searchSex,
        collegeId: this.searchStudnetCollege,
        majorId: this.searchStudnetMajor,
        grade: this.searchStudnetGrade,
        classId: this.searchStudnetClass,
        searchKey: this.searchStudnetKey,
        enrollBatch: this.searchStudentPC
      };

      if (this.searchStudentTime && this.searchStudentTime.length > 0) {
        params['beginTime'] = this.$moment(this.searchStudentTime[0]).format("YYYY-MM-DD");
        params['beginTime'] = this.$moment(this.searchStudentTime[1]).format("YYYY-MM-DD");
      }

      this.tableStudentLoading = true;
      this.$axios.get(api_url["a" /* common */].enroll_student_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let intersection = [];

          if (this.selData.length == 0) {
            intersection = this.selDataOk;
            this.selData = this.selDataOk;
          } else {
            this.selDataOk.forEach(x => {
              this.selData.forEach(y => {
                if (x.user_id == y.user_id) {
                  //找到相同的就push进新的数组
                  intersection.push(x);
                }
              });
            });
          }

          for (let i = 0; i < res.data.data.list.length; i++) {
            let sel = Object(utils["u" /* inArray */])(res.data.data.list[i], intersection, 'user_id');

            if (sel > -1) {
              res.data.data.list[i]['_checked'] = true;
              this.checkboxCount++;
            } else {
              res.data.data.list[i]['_checked'] = false;
            }
          }

          if (this.checkboxCount != 0 && this.checkboxCount == this.tableStudentData.length) {
            this.commAllCheck = true;
          } else {
            this.commAllCheck = false;
          }

          this.tableStudentData = res.data.data.list;
          this.totalStudent = res.data.data.totalCount;
          this.numStudent = res.data.data.num;
          this.pageStudent = res.data.data.currentPage; // let selArr = [];
          // let arr = [].concat(res.data.data.list);
          // let arrTempUser = [].concat(this.selDataOk);
          //
          // for (let i = 0; i < arr.length; i++){
          //   let sel = inArray(arr[i], arrTempUser, 'user_id');
          //   if (sel > -1){
          //     this.$refs.tableStudentRef.toggleRowSelection(arr[i], true);
          //   }
          // }

          this.tableStudentLoading = false;
        }
      });
    },

    initBatchList() {
      let params = {};
      this.tableStudentLoading = true;
      this.$axios.get(api_url["a" /* common */].enroll_batch_list, {
        params: params,
        loading: false
      }).then(res => {
        if (res.data.data) {
          let arr = [];

          for (let i = 0; i < res.data.data.length; i++) {
            arr.push({
              label: res.data.data[i].enroll_batch,
              value: res.data.data[i].enroll_batch,
              text: res.data.data[i].enroll_batch
            });
          }

          this.fliterPCs = arr;
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

    sizeStudentChange(event) {
      this.pageStudent = 1;
      this.numStudent = event;
      this.initStudent();
    },

    currentStudentPage(event) {
      this.pageStudent = event;
      this.initStudent();
    },

    closeDialog(event) {
      this.form = {
        id: '',
        name: '',
        enable: true
      };
      this.subTitle = "";
      this.studentSelArray = [];
      this.searchSex = '';
      this.searchClass = '';
      this.searchYear = '';
      this.searchStudnetKey = '';
      this.searchStudnetCollege = '';
      this.searchStudnetMajor = '';
      this.searchStudnetGrade = '';
      this.searchStudnetClass = '';
      this.searchStudentKey = '';
      this.listId = '';
      this.flowListData = [];
      this.serverDataIndex = '';
      this.flowFormData = {
        auditType: '',
        name: '',
        allowRepeat: false,
        allowBack: false,
        reportSuccess: false,
        face: false,
        qrcode: false,
        custom: false,
        report: '',
        datetimerange: [],
        items: [],
        hType: '',
        hName: '',
        subType: ''
      };

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      if (this.$refs.tableStudentRef) {
        this.$refs.tableStudentRef.clearSelection();
      }

      if (this.$refs.flow) {
        this.$refs.flow.flowDetailData = '';
        this.$refs.flow.approverUsers = [];
      }

      this.selDataOk = [];
      this.selDataBakOk = [];
      this.selData = [];
      this.flowListData = [];
      this.drawerVisible = false;
      this.dialogFlowSetting = false;
      this.btnFlowLoading = false;
      this.resetCasadeSelector('selectorDept');
    },

    closeDrawDialog(event) {
      if (this.$refs.tableStudentRef) {
        this.$refs.tableStudentRef.clearSelection();
      }

      if (this.$refs.studentRef) {
        this.$refs.studentRef.inputValue = "";
      }

      this.selDataOk = this.selDataBakOk;
      this.selData = [];
      this.pageStudent = 1;
      this.numStudent = 20;
      this.drawerVisible = false;
    },

    handleCancelChange(data) {
      this.visibleConfim = false;
    },

    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id
      };
      url = api_url["a" /* common */].enroll_process_del;
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

    studentManage() {
      if (this.$refs.tableStudentRef) {
        this.$refs.tableStudentRef.clearSelection();
      }

      this.initStudent();
      this.drawerVisible = true;
    },

    addInfo() {
      this.dialogSetting = true;
    },

    editInfo(item) {
      this.form = {
        id: item.id,
        name: item.processName,
        enable: item.enable
      };
      let params = {
        id: item.id
      };
      this.$axios.get(api_url["a" /* common */].enroll_process_user_ids, {
        params: params,
        loading: false
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.length; i++) {
            array.push({
              user_id: res.data.data[i]
            });
          }

          this.selData = [].concat(array);
          this.selDataOk = [].concat(array);
          this.selDataBakOk = [].concat(array);
        }
      });
      this.dialogSetting = true;
    },

    settingInfo(item) {
      this.listId = item.id; //this.serverDataIndex = index;

      let flowFormData = [];
      let params = {
        processId: item.id
      };
      this.$axios.get(api_url["a" /* common */].enroll_process_link_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          for (let i = 0; i < res.data.data.length; i++) {
            let users = [];
            let hname = [];
            let formObj = {
              id: res.data.data[i].id,
              auditType: '',
              name: res.data.data[i].linkName,
              allowRepeat: res.data.data[i].checkRepeat,
              allowBack: res.data.data[i].checkCancel,
              datetimerange: res.data.data[i].beginTime ? [this.$moment(res.data.data[i].beginTime).format("YYYY-MM-DD HH:mm"), this.$moment(res.data.data[i].endTime).format("YYYY-MM-DD HH:mm")] : [],
              items: res.data.data[i].dependLinkId ? JSON.parse(res.data.data[i].dependLinkId) : [],
              hType: '',
              type: res.data.data[i].linkType,
              subType: res.data.data[i].linkSubType
            };

            if (res.data.data[i].linkSubType == 1) {
              let otherObj = JSON.parse(res.data.data[i].otherSetting);
              formObj['face'] = otherObj.face;
              formObj['qrcode'] = otherObj.qrcode;
              formObj['custom'] = otherObj.custom;
              formObj['updateClass'] = otherObj.updateClass;
              formObj['report'] = true;
            } else if (res.data.data[i].linkSubType == 3) {
              let otherObj = JSON.parse(res.data.data[i].otherSetting);
              formObj['face'] = otherObj.face;
              formObj['qrcode'] = otherObj.qrcode;
              formObj['custom'] = otherObj.custom;
              formObj['enrollPayUrl'] = otherObj.enrollPayUrl;
              formObj['report'] = true;
            } else if (res.data.data[i].linkSubType == 5) {
              if (res.data.data[i].otherSetting && res.data.data[i].otherSetting != '') {
                let otherObj = JSON.parse(res.data.data[i].otherSetting);
                formObj['checkinSheetName'] = otherObj.checkinSheetName;
                formObj['checkinSheetTips'] = otherObj.checkinSheetTips;
              }
            } else {
              let otherObj = JSON.parse(res.data.data[i].otherSetting);

              if (otherObj) {
                formObj['reportSuccess'] = otherObj.linkReport;
              }

              if (otherObj) {
                formObj['report'] = false;
              }
            }

            for (let k = 0; k < res.data.data[i].adminList.length; k++) {
              let right_range = res.data.data[i].adminList[k].right_range ? res.data.data[i].adminList[k].right_range : '';
              let right_type = res.data.data[i].adminList[k].right_type != '' ? res.data.data[i].adminList[k].right_type : 0;
              res.data.data[i].adminList[k]['right_range'] = right_range != '' ? right_range.split(",") : [];
              res.data.data[i].adminList[k]['right_type'] = right_type;
              users.push(res.data.data[i].adminList[k]);
              hname.push(res.data.data[i].adminList[k].real_name);
            }

            formObj['users'] = users;
            formObj['hName'] = hname;
            flowFormData.push(formObj);
          }

          this.flowListData = flowFormData;
          this.serverDataItem = item;
        }
      });
      this.dialogFlowSetting = true;
    },

    deleteInfo(item) {
      this.form.id = item.id;
      this.visibleConfim = true;
    },

    statusInfo(item, status) {
      let params = {
        id: item.id,
        enable: status
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].enroll_process_publish, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }
      });
    },

    handleChangeTime(data) {
      this.searchStudentTime = data;
    },

    handleSearchChange(event, type) {
      if (type == 1) {
        this.searchStatus = event;
      } else if (type == 2) {
        this.searchYear = event;
      } else if (type == 3) {
        this.searchSex = event;
      } else if (type == 4) {
        this.searchStudentTime = event;
      } else if (type == 5) {
        this.searchStudentPC = event;
      }
    },

    handleCascaderChange(data) {
      this.searchStudnetCollege = "";
      this.searchStudnetMajor = "";
      this.searchStudnetGrade = "";
      this.searchStudnetClass = "";

      if (data.length == 1) {
        this.searchStudnetCollege = data[0];
      } else if (data.length == 2) {
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
      } else if (data.length == 3) {
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
      } else if (data.length == 4) {
        this.searchStudnetCollege = data[0];
        this.searchStudnetMajor = data[1];
        this.searchStudnetGrade = data[2];
        this.searchStudnetClass = data[3];
      } //this.pageStudent = 1;
      //this.initStudent();

    },

    search(data) {
      this.searchKey = data.input;
      this.page = 1;
      this.init(data);
    },

    searchStudent(data) {
      this.searchStudnetKey = data.input;
      this.pageStudent = 1;
      this.initStudent();
    },

    cancelDrawDialog() {
      this.selData = [];
      this.selDataOk = [];
      this.drawerVisible = false;
    },

    okDrawDialog(event) {
      let url = "";
      let studnetArray = []; // if (this.selData.length == 0){
      //   MessageWarning(this.$t("请选择学生"));
      //   return;
      // }

      this.selDataOk = JSON.parse(JSON.stringify(this.selData));
      this.selDataBakOk = JSON.parse(JSON.stringify(this.selData));
      this.drawerVisible = false;
    },

    cancelFlowDrawDialog() {
      this.dialogFlowSetting = false;
    },

    okFlowDrawDialog(event) {
      let flowData = this.$refs.flow.flowData;
      let flowForm = this.$refs.flow.form;
      let hid = [];
      let hname = [];
      let hRightType = '';
      let hRightRange = [];
      let adminArr = [];
      let flowDataArray = [];
      let flowDataOjb = {};
      let errorNum = 0;

      if (flowData.length == 0) {
        Object(utils["c" /* MessageWarning */])(this.$t("请设置环节数据！"));
        return;
      }

      for (let i = 0; i < flowData.length; i++) {
        hid = [];
        hname = [];
        hRightType = '';
        adminArr = [];
        let flowDataUsers = flowData[i].users;

        if (flowData[i].subType != 5 && flowDataUsers.length == 0) {
          errorNum++;
        }

        for (let j = 0; j < flowDataUsers.length; j++) {
          hid.push(flowDataUsers[j].user_id);
          hname.push(flowDataUsers[j].real_name);
          let rightType = flowDataUsers[j].right_type;
          adminArr.push({
            adminUserId: flowDataUsers[j].user_id,
            rightRange: flowDataUsers[j].right_range.length > 0 ? flowDataUsers[j].right_range.join() : '',
            rightType: flowDataUsers[j].right_type
          });
        }

        let flowDataDatetimerange = flowData[i].datetimerange;

        if (flowData[i].subType != 5 && flowDataDatetimerange.length == 0) {
          errorNum++;
        }

        if (errorNum > 0) {
          Object(utils["c" /* MessageWarning */])(this.$t("请检查管理员或者时间是否设置！"));
          return;
        }

        let obj = {
          adminUser: adminArr,
          //hname: hname,
          //andor: flowData[i].andor,
          beginTime: flowData[i].datetimerange[0],
          endTime: flowData[i].datetimerange[1],
          checkCancel: flowData[i].allowBack,
          checkRepeat: flowData[i].allowRepeat,
          dependLinkId: flowData[i].items,
          linkName: flowData[i].name,
          linkType: flowData[i].type,
          linkSubType: flowData[i].subType
        };

        if (flowData[i].type == 1) {
          obj['otherSetting'] = {
            linkReport: flowData[i].reportSuccess
          };
        } else {
          obj['otherSetting'] = {
            face: flowData[i].face,
            qrcode: flowData[i].qrcode,
            custom: flowData[i].custom
          };

          if (flowData[i].subType == 1) {
            obj['otherSetting']['updateClass'] = flowData[i].updateClass;
          }

          if (flowData[i].subType == 3) {
            obj['otherSetting']['enrollPayUrl'] = flowData[i].enrollPayUrl;
          }

          if (flowData[i].subType == 5) {
            obj['otherSetting']['checkinSheetName'] = flowData[i].checkinSheetName;
            obj['otherSetting']['checkinSheetTips'] = flowData[i].checkinSheetTips;
          }
        }

        if (flowData[i].id) {
          obj['id'] = flowData[i].id;
        }

        flowDataArray.push(obj);
      }

      flowDataOjb = {
        list: flowDataArray,
        processId: this.listId
      };

      if (flowForm.id != '') {
        flowDataOjb['id'] = flowForm.id;
      } //flowDataOjb = this.$qs.stringify(flowDataOjb);


      this.btnLoading = true;
      this.$axios.post(api_url["a" /* common */].enroll_process_link_save, JSON.stringify(flowDataOjb), {
        dataType: 'stringfy',
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.dialogFlowSetting = false;
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    cancelDialog() {
      this.dialogSetting = false;
    },

    okDialog() {
      let url = api_url["a" /* common */].enroll_process_add;
      this.$refs['form'].validate(valid => {
        if (valid) {
          let userIds = [];

          for (let i = 0; i < this.selDataOk.length; i++) {
            userIds.push(this.selDataOk[i].user_id);
          }

          let params = {
            processName: this.form.name,
            userIds: userIds.join()
          };

          if (this.form.id != '') {
            params['id'] = this.form.id;
            url = api_url["a" /* common */].enroll_process_edit;
          }

          this.btnFlowLoading = true;
          params = this.$qs.stringify(params);
          this.$axios.post(url, params, {
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              this.dialogSetting = false;
              this.init();
              Object(utils["b" /* MessageSuccess */])(res.data.desc);
            } else {
              Object(utils["a" /* MessageError */])(res.data.desc);
            }

            this.btnFlowLoading = false;
          });
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/manage/flowManage.vue?vue&type=script&lang=js&
 /* harmony default export */ var manage_flowManagevue_type_script_lang_js_ = (flowManagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/manage/flowManage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(733)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  manage_flowManagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f8f4fe14",
  "03e3615d"
  
)

/* harmony default export */ var flowManage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySelect: __webpack_require__(147).default,MyInputButton: __webpack_require__(146).default,MyPagination: __webpack_require__(27).default,LayoutTb: __webpack_require__(152).default,DialogNormal: __webpack_require__(28).default,MyCascader: __webpack_require__(151).default,MySex: __webpack_require__(162).default,DrawerLayoutRight: __webpack_require__(29).default,MyNewStudentFlow: __webpack_require__(448).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=flowManage.js.map