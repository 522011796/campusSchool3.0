exports.ids = [8];
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/TeacherTreeAndListNoPage.vue?vue&type=template&id=00dd4d34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commTeacherList"},[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"size":"small","width-style":"160","sel-value":_vm.searchCommDeptData,"type":"4","sub-type":""},on:{"change":function($event){return _vm._handleCascaderChange($event)}}}),_vm._ssrNode(" "),_c('my-input-button',{staticClass:"layout-item",attrs:{"size":"small","clearable":true,"type":"success","plain":""},on:{"click":_vm._handleSearch}})],2),_vm._ssrNode(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.commLoading),expression:"commLoading"}],ref:"commTableRef",attrs:{"data":_vm.tableTeacherCommData,"max-height":_vm.maxHeight,"size":"mini"}},[(_vm.setType == 'check')?_c('el-table-column',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.commTalbeLoading),expression:"commTalbeLoading"}],attrs:{"align":"center","width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}],null,false,1304403255)}):_vm._e(),_vm._v(" "),(_vm.setType == 'radio')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-radio',_vm._b({attrs:{"sel-value":_vm.commSelUserVal,"label":scope.row.user_id},on:{"change":function($event){return _vm._handleChange(scope.row)}}},'my-radio',_vm._selValue,false),[_c('span')])]}}],null,false,4043958644)}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"property":"real_name","align":"center","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"job_num","align":"center","label":"工号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"","align":"center","label":"部门"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.department_name ? scope.row.department_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.department_name ? scope.row.department_name : '--')+"\n          ")])])]}}])})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndListNoPage.vue?vue&type=template&id=00dd4d34&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/TeacherTreeAndListNoPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TeacherTreeAndListNoPagevue_type_script_lang_js_ = ({
  name: 'teacherTreeAndList',
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

  created() {//this._initTeacher();
  },

  methods: {
    _initTeacher() {
      this.checkboxCount = 0;
      let params = {
        page: 1,
        num: 99999,
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
    }

  }
});
// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndListNoPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeAndList_TeacherTreeAndListNoPagevue_type_script_lang_js_ = (TeacherTreeAndListNoPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/treeAndList/TeacherTreeAndListNoPage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  treeAndList_TeacherTreeAndListNoPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "473b72ca"
  
)

/* harmony default export */ var TeacherTreeAndListNoPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyInputButton: __webpack_require__(146).default,MyRadio: __webpack_require__(154).default})


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

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(588);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e273c436", content, true, context)
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(590);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6637976d", content, true, context)
};

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyProcessFlow.vue?vue&type=template&id=402c0f10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"form-set-main\""+(_vm._ssrStyle(null,_vm.drawHeight3, null))+" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"pull-right form-set-right\" style=\"overflow-y: auto\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"header-block padding-lr-10 border-bottom-1\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('span',{staticClass:"tab-class font-bold",class:_vm.activeName == 'only' ? 'color-warning' : '',on:{"click":function($event){return _vm.handleClick('only')}}},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n                "+_vm._s(_vm.$t('节点属性'))+"\n              ")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('span',{staticClass:"tab-class font-bold margin-left-5",class:_vm.activeName == 'flow' ? 'color-warning' : '',on:{"click":function($event){return _vm.handleClick('flow')}}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v("\n                "+_vm._s(_vm.$t('流程属性'))+"\n              ")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 padding-lr-10 font-size-12\" data-v-402c0f10>","</div>",[(_vm.activeName == 'only')?[_vm._ssrNode("<div data-v-402c0f10><div class=\"font-bold\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("节点类型")))+"</div> "+((_vm.flowDetailData.extra == 'audit')?("<div class=\"margin-top-10\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("审批节点")))+"</div>"):"<!---->")+" "+((_vm.flowDetailData.extra == 'send')?("<div class=\"margin-top-10\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("抄送节点")))+"</div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("节点名称")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-402c0f10>","</div>",[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"size":"mini"},model:{value:(_vm.flowDetailData.name),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "name", $$v)},expression:"flowDetailData.name"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[(_vm.flowDetailData.extra == 'send')?[_vm._ssrNode("<div class=\"font-bold\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("抄送人")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-402c0f10>","</div>",[(_vm.flowDetailData.type == 4 || _vm.flowDetailData.type == 6)?_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"left","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","sel-arr":_vm.flowDetailData.users,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                      "+_vm._s(_vm.$t("抄送人"))+"("+_vm._s(_vm.$t("人数"))+":"+_vm._s(_vm.approverUsers.length)+")\n                    ")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.type == 5)?_c('my-select',{attrs:{"size":"mini","sel-value":_vm.flowDetailData.hType,"options":_vm.fiterTeacherRoleType},on:{"change":_vm.handleUserType}}):_vm._e()],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.extra == 'audit')?[_vm._ssrNode("<div class=\"font-bold\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("审批人")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-402c0f10>","</div>",[(_vm.flowDetailData.type == 1 || _vm.flowDetailData.type == 3)?_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"left","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","sel-arr":_vm.flowDetailData.users,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                      "+_vm._s(_vm.$t("审批人"))+"("+_vm._s(_vm.$t("人数"))+":"+_vm._s(_vm.approverUsers.length)+")\n                    ")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.type == 2)?_c('my-select',{attrs:{"size":"mini","clearable":true,"sel-value":_vm.flowDetailData.hType,"options":_vm.fiterTeacherRoleType},on:{"change":_vm.handleUserType}}):_vm._e()],2)]:_vm._e(),_vm._ssrNode(" "),[_vm._ssrNode("<div class=\"font-bold margin-top-10\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("审批人(部门角色)")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-402c0f10>","</div>",[_c('my-cascader',{ref:"SelectorDept",attrs:{"size":"mini","clearable":true,"props":{multiple: true},"sel-value":_vm.flowDetailData.hrole,"type":"5","sub-type":""},on:{"change":function($event){return _vm.handleCascaderChange($event)}}})],1)]],2),_vm._ssrNode(" "),(_vm.flowDetailData.extra != 'send')?[_vm._ssrNode("<div class=\"margin-top-10 border-bottom-1 padding-bottom-5\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("多人审批规则")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("会签")))]),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v("("+_vm._s(_vm.$t("所有审批人同意"))+")")])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('el-radio',{attrs:{"label":"and"},model:{value:(_vm.flowDetailData.andor),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "andor", $$v)},expression:"flowDetailData.andor"}},[_vm._v(" ")])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("或签")))]),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v("("+_vm._s(_vm.$t("其中一人审批同意"))+")")])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('el-radio',{attrs:{"label":"or"},model:{value:(_vm.flowDetailData.andor),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "andor", $$v)},expression:"flowDetailData.andor"}},[_vm._v(" ")])],1)],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 border-bottom-1 padding-bottom-5\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("按钮权限")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":16}},[_vm._v("\n                       \n                    ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_vm._v("\n                           \n                        ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("显示")))])])],1)],1)],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":16}},[_c('span',[_vm._v(_vm._s(_vm.$t("同意")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_vm._v("\n                           \n                        ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.allowShow),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "allowShow", $$v)},expression:"flowDetailData.allowShow"}})],1)],1)],1)],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":16}},[_c('span',[_vm._v(_vm._s(_vm.$t("驳回")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_vm._v("\n                           \n                        ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.rejectShow),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "rejectShow", $$v)},expression:"flowDetailData.rejectShow"}})],1)],1)],1)],1)],2)],2)]:_vm._e()]:_vm._e(),_vm._ssrNode(" "),(_vm.activeName == 'flow')?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("流程发起后允许撤回")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.form.allowBack),callback:function ($$v) {_vm.$set(_vm.form, "allowBack", $$v)},expression:"form.allowBack"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("审批人为发起人时自动审批")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.form.autoAudit),callback:function ($$v) {_vm.$set(_vm.form, "autoAudit", $$v)},expression:"form.autoAudit"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-402c0f10>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("相邻节点审批人合并审批")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.form.merge),callback:function ($$v) {_vm.$set(_vm.form, "merge", $$v)},expression:"form.merge"}})],1)],1)],1)],2)]:_vm._e()],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-set-left\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"text-center flow-main-block\""+(_vm._ssrStyle({"overflow-y":"auto","position":"relative"},_vm.drawHeight5, null))+" data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"flow-fixed-block font-size-12 font-bold margin-bottom-20 bg-success\" data-v-402c0f10><span data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("开始")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-bottom-20 margin-top-20\" data-v-402c0f10>","</div>",[_c('my-form-audit-type',{attrs:{"item-index":"0","custom-user-status":_vm.flowCustonUserStatus},on:{"click":_vm.selAuditType,"showPop":_vm.showPop}})],1),_vm._ssrNode(" "),_vm._l((_vm.flowData),function(item,index){return (_vm.flowData.length > 0)?_vm._ssrNode("<div data-v-402c0f10>","</div>",[_vm._ssrNode("<div class=\"flow-item-block\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("flow-item-title-block",item.extra == 'audit' ? 'bg-warning' : 'bg-success'))+" data-v-402c0f10>","</div>",[_vm._ssrNode("<i class=\"fa fa-times-circle flow-item-close-block color-danger\" data-v-402c0f10></i> "),_vm._ssrNode("<span class=\"font-bold font-size-12\" data-v-402c0f10>","</span>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('i',{staticClass:"fa fa-tag"}),_vm._v(" "),_c('label',[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('i',{staticClass:"fa fa-cog"})])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10 text-left font-size-12\" data-v-402c0f10>","</div>",[_vm._ssrNode("<div data-v-402c0f10>","</div>",[_vm._ssrNode("<div data-v-402c0f10>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-402c0f10><i class=\"fa fa-users\" data-v-402c0f10></i> <label data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("审批人"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-402c0f10>","</span>",[(item.type == 1 || item.type == 3 || item.type == 4 || item.type == 6)?[(item.hName.length > 0)?_vm._ssrNode("<span data-v-402c0f10>","</span>",[_vm._l((item.hName),function(itemUser,indexUser){return (indexUser < 4)?_c('el-tag',{key:indexUser,staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(itemUser))])])],1):_vm._e()}),_vm._ssrNode(" "+((item.users.length >= 4)?("<label class=\"flow-user-count-tag margin-left-5\" data-v-402c0f10>4+</label>"):"<!---->"))],2):_vm._ssrNode(("<span class=\"color-muted\" style=\"position: relative; top:-5px;\" data-v-402c0f10>\n                          无\n                        </span>"))]:_vm._e(),_vm._ssrNode(" "),(item.type == 2 || item.type == 5)?[(item.hType != '')?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini"}},[(item.hType == 'MasterTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("班主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'CoachTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("辅导员")))]):_vm._e(),_vm._v(" "),(item.hType == 'DirectorTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("系主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'DormitorTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("宿管员")))]):_vm._e(),_vm._v(" "),(item.hType == 'DeputyDirectorTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("系副主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'StudentManageTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("学管主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'SecretaryTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("系部主任")))]):_vm._e()]):_c('span',{staticClass:"color-muted",staticStyle:{"position":"relative","top":"-5px"}},[_vm._v("无")])]:_vm._e()],2)],2),_vm._ssrNode(" "),(item.hrole && item.hrole.length > 0)?_vm._ssrNode("<div data-v-402c0f10>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-402c0f10><i class=\"fa fa-users\" data-v-402c0f10></i> <label data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("部门角色"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-402c0f10>","</span>",[[_vm._l((item.hrole),function(itemUser,indexUser){return (indexUser < 4)?_c('el-tag',{key:indexUser,staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":_vm.roleGroup[itemUser[1]],"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(_vm.roleGroup[itemUser[1]]))])])],1):_vm._e()}),_vm._ssrNode(" "+((item.hrole.length >= 4)?("<label class=\"flow-user-count-tag margin-left-5\" data-v-402c0f10>4+</label>"):"<!---->"))]],2)],2):_vm._e(),_vm._ssrNode(" "),(item.extra != 'send')?_vm._ssrNode("<div class=\"margin-top-5\" data-v-402c0f10>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-402c0f10><i class=\"fa fa-cog\" data-v-402c0f10></i> <label data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("权限"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-402c0f10>","</span>",[(item.allowShow || item.allowMuti)?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini","type":"success"}},[_vm._v("\n                        "+_vm._s(_vm.$t("提交"))+"\n                      ")]):_vm._e(),_vm._ssrNode(" "),(item.rejectShow || item.rejectMuti)?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini","type":"success"}},[_vm._v("\n                        "+_vm._s(_vm.$t("驳回"))+"\n                      ")]):_vm._e()],2)],2):_vm._e()],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-bottom-20 margin-top-20\" data-v-402c0f10>","</div>",[_c('my-form-audit-type',{attrs:{"item-index":index+1,"pop-visible":_vm.popVisible},on:{"click":_vm.selAuditType}})],1)],2):_vm._e()}),_vm._ssrNode(" <div class=\"flow-fixed-block font-size-12 font-bold bg-danger\" data-v-402c0f10><span data-v-402c0f10>"+_vm._ssrEscape(_vm._s(_vm.$t("结束")))+"</span></div>")],2)]),_vm._ssrNode(" <div class=\"moon-clearfix\" data-v-402c0f10></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/MyProcessFlow.vue?vue&type=template&id=402c0f10&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyProcessFlow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var MyProcessFlowvue_type_script_lang_js_ = ({
  name: 'myProcessFlow',
  components: {
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
          allowBack: false,
          urge: false,
          autoAudit: false,
          merge: false
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
      flowDetailData: {},
      approverUsers: [],
      formFieldList: [],
      roleGroup: {},
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

  created() {//this.initAsync();
  },

  methods: {
    async initAsync() {
      this.roleGroup = {};
      await this.getRoleTreeInfo(5);
      let data = this.dataRoleTreeList;
      let array = [];
      let obj = {};

      for (let i = 0; i < data.length; i++) {
        if (data[i]['children']) {
          for (let j = 0; j < data[i]['children'].length; j++) {
            array.push({
              id: data[i]['children'][j].id,
              name: data[i]['children'][j].label
            });
            obj[data[i]['children'][j].id] = data[i]['children'][j].label;
          }
        }
      }

      this.roleGroup = obj;
    },

    selAuditType(type, extra, index) {
      let obj = {
        type: type,
        extra: extra,
        name: this.auditFlowTypeItemInfo(type, 'set'),
        users: [],
        hType: '',
        hrole: [],
        hName: '',
        andor: 'or',
        waitName: false,
        allowShow: false,
        allowMuti: false,
        rejectShow: false,
        rejectMuti: false,
        transferShow: false,
        transferMuti: false,
        allShow: false,
        allEdit: false,
        applicantShow: false,
        applicantEdit: false,
        right1: [],
        right2: []
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
      return Object(utils["q" /* flowAuditItemType */])(value, type);
    },

    selFlowItemBlock(event, data, index) {
      this.flowDetailData = data;
      this.approverUsers = data.users;
      this.flowDetailIndex = index;
      let ruleList = [];

      if (this.formId.form_content) {
        let form_content = JSON.parse(this.formId.form_content); //this.formFieldList = form_content.rule;

        this.formFieldList = this.setRuleChild(form_content.rule, ruleList);

        if (this.formFieldList.length == this.flowDetailData.right1.length) {
          this.checkRight1All = true;
        } else {
          this.checkRight1All = false;
        }

        if (this.formFieldList.length == this.flowDetailData.right2.length) {
          this.checkRight2All = true;
        } else {
          this.checkRight2All = false;
        }
      }
    },

    setRuleChild(rule, ruleList) {
      let obj = {};

      for (let i = 0; i < rule.length; i++) {
        if (rule[i]['children'] && rule[i]['children'].length > 0) {
          this.setRuleChild(rule[i]['children'], ruleList);
          continue;
        } else {
          if (rule[i].field) {
            obj = {
              field: rule[i].field,
              title: rule[i].title,
              type: rule[i].type,
              value: rule[i].value
            };
            ruleList.push(obj);
          }
        }
      }

      return ruleList;
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
          }, 1000);
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

    versionList() {
      this.$emit("versionClick");
    },

    handleCheckedRight1Change(data) {
      this.flowDetailData.right1 = data;

      if (this.formFieldList.length == this.flowDetailData.right1.length) {
        this.checkRight1All = true;
      } else {
        this.checkRight1All = false;
      }
    },

    handleCheckedRight2Change(data) {
      this.flowDetailData.right2 = data;

      if (this.formFieldList.length == this.flowDetailData.right2.length) {
        this.checkRight2All = true;
      } else {
        this.checkRight2All = false;
      }
    },

    handleCheckAllChangeRight1(data) {
      if (data == true) {
        if (this.formId.form_content) {
          let arr = [];

          for (let i = 0; i < this.formFieldList.length; i++) {
            arr.push(this.formFieldList[i].field);
          }

          this.flowDetailData.right1 = arr;
        }
      } else {
        this.flowDetailData.right1 = [];
      }
    },

    handleCheckAllChangeRight2(data) {
      if (data == true) {
        if (this.formId.form_content) {
          let arr = [];

          for (let i = 0; i < this.formFieldList.length; i++) {
            arr.push(this.formFieldList[i].field);
          }

          this.flowDetailData.right2 = arr;
        }
      } else {
        this.flowDetailData.right2 = [];
      }
    },

    handleCascaderChange(data) {
      this.flowDetailData.hrole = data;
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
// CONCATENATED MODULE: ./components/form/MyProcessFlow.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_MyProcessFlowvue_type_script_lang_js_ = (MyProcessFlowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/MyProcessFlow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(587)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_MyProcessFlowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "402c0f10",
  "65b79906"
  
)

/* harmony default export */ var MyProcessFlow = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeacherTreeAndListNoPage: __webpack_require__(187).default,MySelect: __webpack_require__(147).default,MyCascader: __webpack_require__(151).default,MyFormAuditType: __webpack_require__(205).default})


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProcessFlow_vue_vue_type_style_index_0_id_402c0f10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProcessFlow_vue_vue_type_style_index_0_id_402c0f10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProcessFlow_vue_vue_type_style_index_0_id_402c0f10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProcessFlow_vue_vue_type_style_index_0_id_402c0f10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProcessFlow_vue_vue_type_style_index_0_id_402c0f10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProcessFlow_vue_vue_type_style_index_0_id_402c0f10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-402c0f10]{box-shadow:0 0 4px #dcdfe6;border-right:1px solid #dcdfe6}.form-set-left[data-v-402c0f10]{margin-right:310px}.form-set-left[data-v-402c0f10],.form-set-right[data-v-402c0f10]{background:#f8f8f8;height:100%;box-shadow:0 0 4px #dcdfe6}.form-set-right[data-v-402c0f10]{width:300px}.form-set-menu-item[data-v-402c0f10]{font-size:12px;text-align:center;height:40px;line-height:40px}.form-set-menu-item-active[data-v-402c0f10]{background:#3e8db8;color:#fff}.title-block-tag[data-v-402c0f10]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-402c0f10]{font-weight:700;position:relative;top:-5px}.item-tag-block[data-v-402c0f10]{height:25px;line-height:25px;background:#8cc5ff;border-radius:5px;padding:0 10px;color:#909399}.flow-fixed-block[data-v-402c0f10]{width:40px;height:40px;line-height:40px;border-radius:100%;margin:20px auto 0;color:#fff}.flow-item-block[data-v-402c0f10]{border-radius:5px;background:#fff;min-height:50px;width:350px;margin:20px auto;box-shadow:0 0 4px #dcdfe6}.flow-item-title-block[data-v-402c0f10]{position:relative;height:30px;line-height:30px;padding:0 10px;color:#fff;text-align:left;border-top-left-radius:5px;border-top-right-radius:5px}.flow-item-close-block[data-v-402c0f10]{position:absolute;right:-10px;top:-10px}.flow-user-count-tag[data-v-402c0f10]{position:relative;display:inline-block;width:20px;height:20px;line-height:20px;border-radius:100%;background:#f56c6c;text-align:center;font-size:12px;color:#fff;top:-5px}.header-block[data-v-402c0f10]{height:40px;line-height:40px}.tab-class[data-v-402c0f10]{cursor:default;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_75665b9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_75665b9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_75665b9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_75665b9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_75665b9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowManage_vue_vue_type_style_index_0_id_75665b9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-75665b9d]{padding:10px 15px}.header-block[data-v-75665b9d]{height:40px;line-height:40px}.tab-class[data-v-75665b9d]{cursor:default;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/appletInfo/flow/flowManage.vue?vue&type=template&id=75665b9d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('layout-tb',[_c('template',{slot:"tag"},[_vm._v("流程管理")]),_vm._v(" "),_c('div',{attrs:{"slot":"tab"},slot:"tab"},[_c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('el-button',{attrs:{"size":"small","type":"primary","icon":"el-icon-plus"},on:{"click":function($event){return _vm.addInfo($event)}}},[_vm._v(_vm._s(_vm.$t("添加流程")))])],1),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":18}},[_c('my-input-button',{ref:"teacher width-150",attrs:{"size":"small","plain":"","width-class":"width: 180px","type":"success","clearable":true,"placeholder":_vm.$t('名称')},on:{"click":_vm.search}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","row-key":"id","max-height":_vm.tableHeight.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('编号')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.id))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.process_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.process_name))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('创建时间')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm.$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('描述')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.des ? scope.row.des : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.des ? scope.row.des : '--'))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('被引用表单')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.form_name ? scope.row.form_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.form_name ? scope.row.form_name : '--'))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"操作","width":"140"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-cog color-success margin-right-5",on:{"click":function($event){return _vm.settingInfo(scope.row, scope.$index)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-edit color-grand margin-right-5",on:{"click":function($event){return _vm.editInfo(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteInfo(scope.row)}}})]}}])})],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],1)],2),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"top":"10vh","visible":_vm.dialogVisible,"title":_vm.$t('流程设置')},on:{"close":_vm.closeDialog,"right-close":_vm.cancelDialog}},[_c('div',{staticClass:"margin-top-10"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"140px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('流程名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('描述')}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.desc),callback:function ($$v) {_vm.$set(_vm.form, "desc", $$v)},expression:"form.desc"}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.dialogLoading == false ? _vm.okDialog() : ''}}},[(_vm.dialogLoading)?_c('i',{staticClass:"el-icon-loading"}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.$t("确定"))+"\n      ")])],1)]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","title":_vm.$t('流程设计'),"show-close":true,"visible":_vm.drawerForm,"size":"85%"},on:{"opened":_vm.openForm,"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v("\n          "+_vm._s(_vm.$t('流程设计'))+"\n        ")])])]),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('div',{staticStyle:{"position":"relative"}},[_c('my-process-flow',{ref:"flow",attrs:{"formId":_vm.serverDataItem,"flow-data":_vm.flowListData,"form":_vm.flowFormData}})],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"success","loading":_vm.btnLoading},on:{"click":function($event){return _vm.okFormDrawDialog()}}},[_vm._v(_vm._s(_vm.$t("保存")))])],1)])]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","detail":_vm.subTitle,"content":"确认需要删除该信息？"},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/appletInfo/flow/flowManage.vue?vue&type=template&id=75665b9d&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/validater/rules.js
var validater_rules = __webpack_require__(11);
var rules_default = /*#__PURE__*/__webpack_require__.n(validater_rules);

// CONCATENATED MODULE: ./utils/validater/flowSettingValidater.js

/* harmony default export */ var flowSettingValidater = ({
  data() {
    return {
      rules: {
        name: [{
          required: true,
          message: this.$t("请输入名称"),
          trigger: 'blur'
        }, {
          validator: rules_default.a.FormValidate.Form().validatenallOther1_20Reg,
          trigger: 'blur'
        }]
      }
    };
  }

});
// EXTERNAL MODULE: ./components/form/MyProcessFlow.vue + 4 modules
var MyProcessFlow = __webpack_require__(438);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/appletInfo/flow/flowManage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MyProcessFlow: MyProcessFlow["default"]
  },
  mixins: [mixins["a" /* default */], flowSettingValidater],

  data() {
    return {
      subTitle: '',
      tableData: [],
      visibleConfim: false,
      dialogLoading: false,
      dialogVisible: false,
      drawerForm: false,
      btnLoading: false,
      searchKey: '',
      flowListData: [],
      formFieldList: [],
      flowFormData: {},
      serverDataItem: '',
      form: {
        id: '',
        name: '',
        desc: ''
      },
      formOption: {
        "form": {
          "inline": false,
          "labelPosition": "right",
          "size": "mini",
          "labelWidth": "125px",
          "hideRequiredAsterisk": false,
          "showMessage": true,
          "inlineMessage": false
        }
      }
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      let params = {
        page: this.page,
        num: this.num,
        searchKey: this.searchKey
      };
      this.$axios.get(api_url["a" /* common */].server_form_template_form_process_page, {
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

    initProcess(item) {
      let formProcess = item.form_process ? JSON.parse(item.form_process) : [];
      let ntype = '';
      this.flowListData = [];

      for (let j = 0; j < formProcess.length; j++) {
        let users = [];

        if (formProcess[j].ntype == 'handle') {
          ntype = 'audit';
        } else if (formProcess[j].ntype == 'cc') {
          ntype = 'send';
        }

        let obj = {
          type: formProcess[j].nChildType,
          extra: ntype,
          name: formProcess[j].nname,
          hType: formProcess[j].htype,
          hrole: formProcess[j].hrole,
          hName: formProcess[j].hname,
          andor: formProcess[j].andor,
          waitName: formProcess[j].sign,
          allowShow: formProcess[j].agreed1,
          allowMuti: formProcess[j].agreed2,
          rejectShow: formProcess[j].notagreed1,
          rejectMuti: formProcess[j].notagreed2,
          transferShow: formProcess[j].trans1,
          transferMuti: formProcess[j].trans2,
          right1: formProcess[j].right1 ? formProcess[j].right1 : [],
          right2: formProcess[j].right2 ? formProcess[j].right2 : []
        };

        for (let k = 0; k < formProcess[j].hid.length; k++) {
          users.push({
            user_id: formProcess[j].hid[k],
            real_name: formProcess[j].hname[k]
          });
        }

        obj['users'] = users;
        this.flowListData.push(obj);
      }

      let formObj = {
        id: item.id,
        auditType: '',
        name: item.version_name,
        allowBack: item.allow_revoke ? item.allow_revoke : false,
        urge: item.allow_urge ? item.allow_urge : false,
        autoAudit: item.allow_auto ? item.allow_auto : false,
        merge: item.allow_merge ? item.allow_merge : false
      };
      this.flowFormData = formObj;
    },

    addInfo() {
      this.dialogVisible = true;
    },

    editInfo(item) {
      this.form = {
        id: item.id,
        name: item.process_name,
        desc: item.des
      };
      this.dialogVisible = true;
    },

    deleteInfo(item) {
      this.form.id = item.id;
      this.visibleConfim = true;
    },

    settingInfo(item, index) {
      this.serverDataItem = item;
      this.serverDataIndex = index;
      this.initProcess(item);
      this.drawerForm = true;
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

    openedForm() {
      this.formLoading = true;
      setTimeout(() => {
        if (this.serverDataItem.form_content) {
          let form_content = JSON.parse(this.serverDataItem.form_content);
          this.$refs.designer.setRule(form_content.rule);
          this.$refs.designer.setOption(form_content.option);
        } else {
          this.$refs.designer.setRule([]);
          this.$refs.designer.setOption(this.formOption);
        }

        this.$refs.designer.removeMenuItem('span');
        this.formLoading = false;
      }, 800);
    },

    openForm() {
      if (this.$refs['flow']) {
        this.$refs['flow'].initAsync();
      }
    },

    closeDialog(event) {
      this.form = {
        id: '',
        name: '',
        desc: ''
      };
      this.flowListData = [];
      this.flowFormData = {
        auditType: '',
        name: '',
        allowBack: false,
        urge: false,
        autoAudit: false,
        merge: false
      };
      this.subTitle = "";
      this.versionStatus = '';
      this.serverDataItem = {};
      this.serverDataIndex = '';

      if (this.$refs['flow']) {
        this.$refs.flow.flowDetailData = {};
        this.$refs.flow.approverUsers = [];
        this.$refs.flow.formFieldList = [];
      }

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      this.btnLoading = false;
      this.drawerForm = false;
    },

    cancelDialog() {
      this.dialogVisible = false;
    },

    okDialog() {
      let url = '';
      this.$refs['form'].validate(valid => {
        if (valid) {
          let params = {
            processName: this.form.name,
            des: this.form.desc
          };

          if (this.form.id != '') {
            params['id'] = this.form.id;
          }

          url = api_url["a" /* common */].server_form_template_form_process_save;
          params = this.$qs.stringify(params);
          this.dialogLoading = true;
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200) {
              this.dialogVisible = false;
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

    handleCancelChange(data) {
      this.visibleConfim = false;
    },

    handleOkChange(data) {
      let url = "";
      let params = {
        id: this.form.id
      };
      url = api_url["a" /* common */].server_form_template_form_process_del;
      params = this.$qs.stringify(params);
      this.dialogLoading = true;
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

    cancelDrawDialog() {
      this.detailData = '';
      this.drawerVisible = false;
      this.drawerForm = false;
    },

    okFormDrawDialog(type) {
      let url = '';
      let rules = {};
      let flowData = this.$refs.flow.flowData;
      let flowForm = this.$refs.flow.form;
      let ntype = '';
      let htype = '';
      let hrole = [];
      let hid = [];
      let hname = [];
      let flowDataArray = [];
      let flowDataOjb = {};

      if (flowData.length == 0) {
        Object(utils["c" /* MessageWarning */])(this.$t("请设置流程信息！"));
        return;
      }

      if (flowForm.name == '') {
        Object(utils["c" /* MessageWarning */])(this.$t("流程属性中未设置流程名称！"));
        return;
      }

      for (let i = 0; i < flowData.length; i++) {
        hid = [];
        hname = [];

        if (flowData[i].extra == 'audit') {
          ntype = 'handle';
        } else if (flowData[i].extra == 'send') {
          ntype = 'cc';
        }

        if (flowData[i].type == 1 || flowData[i].type == 4) {
          htype = 'AnyUser';
          let flowDataUsers = flowData[i].users;

          for (let j = 0; j < flowDataUsers.length; j++) {
            hid.push(flowDataUsers[j].user_id);
            hname.push(flowDataUsers[j].real_name);
          }
        } else if (flowData[i].type == 2 || flowData[i].type == 5) {
          htype = flowData[i].hType;
        } else if (flowData[i].type == 3 || flowData[i].type == 6) {
          htype = 'CustomUser';
          let flowDataUsers = flowData[i].users;

          for (let j = 0; j < flowDataUsers.length; j++) {
            hid.push(flowDataUsers[j].user_id);
            hname.push(flowDataUsers[j].real_name);
          }
        }

        let obj = {
          ntype: ntype,
          nChildType: flowData[i].type,
          nname: flowData[i].name,
          horder: i + 1,
          htype: htype,
          hrole: flowData[i].hrole,
          hid: hid,
          hname: hname,
          andor: flowData[i].andor,
          sign: flowData[i].waitName,
          agreed1: flowData[i].allowShow,
          agreed2: flowData[i].allowMuti,
          notagreed1: flowData[i].rejectShow,
          notagreed2: flowData[i].rejectMuti,
          trans1: flowData[i].transferShow,
          trans2: flowData[i].transferMuti,
          right1: flowData[i].right1,
          right2: flowData[i].right2
        };
        flowDataArray.push(obj);
      }

      flowDataOjb = {
        versionName: flowForm.name,
        id: this.serverDataItem.id,
        formProcess: JSON.stringify(flowDataArray),
        allowRevoke: flowForm.allowBack,
        allowUrge: flowForm.urge,
        allowAuto: flowForm.autoAudit,
        allowMerge: flowForm.merge
      };

      if (flowForm.id != '' && type != 'new') {
        flowDataOjb['id'] = flowForm.id;
      }

      flowDataOjb = this.$qs.stringify(flowDataOjb);
      this.btnLoading = true;
      this.$axios.post(api_url["a" /* common */].server_form_template_form_process_set, flowDataOjb, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.drawerForm = false;
          this.init();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/appletInfo/flow/flowManage.vue?vue&type=script&lang=js&
 /* harmony default export */ var flow_flowManagevue_type_script_lang_js_ = (flowManagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/appletInfo/flow/flowManage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(589)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  flow_flowManagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75665b9d",
  "b7af68be"
  
)

/* harmony default export */ var flowManage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyInputButton: __webpack_require__(146).default,MyPagination: __webpack_require__(27).default,LayoutTb: __webpack_require__(152).default,DialogNormal: __webpack_require__(28).default,MyProcessFlow: __webpack_require__(438).default,DrawerLayoutRight: __webpack_require__(29).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=flowManage.js.map