exports.ids = [14];
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/BarChart.vue?vue&type=template&id=39634f9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"},attrs:{"id":_vm.chartId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/charts/BarChart.vue?vue&type=template&id=39634f9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/BarChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BarChartvue_type_script_lang_js_ = ({
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function () {
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function () {
        return [];
      },
      type: Array
    },
    data: {
      default: function () {
        return [];
      },
      type: Array
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.lineChart();
  },

  created() {},

  methods: {
    lineChart() {
      let _self = this;

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs

      let myChart = this.$echarts.init(lineId); //初始化

      myChart.setOption({
        //官网例子
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        legend: {
          show: true,
          data: this.dataLegned
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.dataKey,
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              let str = value;

              if (value && value.length >= 5) {
                str = str.substr(0, 4) + "...";
              }

              return str;
            }
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        dataZoom: [//y轴内置滑动
        {
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'empty',
          // 当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
          startValue: 0,
          endValue: 9,
          borderColor: 'transparent',
          handleSize: 0,
          showDetail: false,
          // 是否显示detail，即拖拽时候显示详细数值信息。type: 'slider',
          zoomLock: false
        }],
        series: this.data
      }, true);
    }

  },
  watch: {
    data: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
});
// CONCATENATED MODULE: ./components/charts/BarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_BarChartvue_type_script_lang_js_ = (BarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/charts/BarChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_BarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39634f9f",
  "6b7f8495"
  
)

/* harmony default export */ var BarChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 194:
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
          message: this.$t("请输入名称"),
          trigger: 'blur'
        }]
      }
    };
  }

});

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5ca75e66", content, true, context)
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/HBarChart.vue?vue&type=template&id=3fdd64c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"100%"},attrs:{"id":_vm.chartId}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/charts/HBarChart.vue?vue&type=template&id=3fdd64c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/HBarChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var HBarChartvue_type_script_lang_js_ = ({
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function () {
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function () {
        return [];
      },
      type: Array
    },
    data: {
      default: function () {
        return [];
      },
      type: Array
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.lineChart();
  },

  created() {},

  methods: {
    lineChart() {
      let _self = this;

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs

      let myChart = this.$echarts.init(lineId); //初始化

      myChart.setOption({
        //官网例子
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        legend: {
          show: true,
          data: this.dataLegned
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          data: this.dataKey,
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              let str = value;

              if (value && value.length >= 5) {
                str = str.substr(0, 4) + "...";
              }

              return str;
            }
          }
        },
        xAxis: {
          type: 'value',
          minInterval: 1
        },
        dataZoom: [//y轴内置滑动
        {
          type: 'slider',
          yAxisIndex: 0,
          orient: 'vertical',
          // 竖直。
          filterMode: 'empty',
          // 当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
          startValue: 0,
          endValue: this.dataKey.length - 6,
          borderColor: 'transparent',
          handleSize: 0,
          showDetail: false // 是否显示detail，即拖拽时候显示详细数值信息。

        }],
        series: this.data
      }, true);
    }

  },
  watch: {
    data: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
});
// CONCATENATED MODULE: ./components/charts/HBarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_HBarChartvue_type_script_lang_js_ = (HBarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/charts/HBarChart.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_HBarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3fdd64c8",
  "ecd3490e"
  
)

/* harmony default export */ var HBarChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/PCStaticTemplate.vue?vue&type=template&id=b9b4353a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"form-set-main\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div class=\"pull-right form-set-right padding-tb-10 padding-lr-10\""+(_vm._ssrStyle({"overflow-y":"auto"},_vm.drawHeight6, null))+" data-v-b9b4353a>","</div>",[(_vm.settingType == '')?[_vm._ssrNode("<div class=\"text-center\" style=\"margin-top: 20%;\" data-v-b9b4353a><span class=\"color-muted font-size-15\" data-v-b9b4353a><i class=\"fa fa-info-circle\" data-v-b9b4353a></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$t("请选择需要设置的模块"))+"\n            ")+"</span></div>")]:[_vm._ssrNode("<div class=\"color-sub-grand font-size-12 font-bold\" data-v-b9b4353a><span data-v-b9b4353a><i class=\"fa fa-info-circle color-muted margin-right-5\" data-v-b9b4353a></i>"+_vm._ssrEscape(_vm._s(_vm.$t("字段名称")))+"</span></div> <div class=\"line-height\" data-v-b9b4353a></div> "),(_vm.settingType != 'table')?_vm._ssrNode("<div class=\"color-muted font-size-12\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div class=\"color-sub-grand\" data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("字段别名")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[(_vm.settingType == 'card')?_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},on:{"input":function($event){return _vm.inputCard($event, _vm.settingColValue)}},model:{value:(_vm.form.cardTitle),callback:function ($$v) {_vm.$set(_vm.form, "cardTitle", $$v)},expression:"form.cardTitle"}}):_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'search')?_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},on:{"input":function($event){return _vm.inputCard($event)}},model:{value:(_vm.form.searchStaticTitle),callback:function ($$v) {_vm.$set(_vm.form, "searchStaticTitle", $$v)},expression:"form.searchStaticTitle"}}):_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'bar')?_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},on:{"input":function($event){return _vm.inputCard($event)}},model:{value:(_vm.form.chartParam),callback:function ($$v) {_vm.$set(_vm.form, "chartParam", $$v)},expression:"form.chartParam"}}):_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'circle')?_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},on:{"input":function($event){return _vm.inputCard($event)}},model:{value:(_vm.form.circleParams),callback:function ($$v) {_vm.$set(_vm.form, "circleParams", $$v)},expression:"form.circleParams"}}):_vm._e()],2)],2):_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'search')?_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("筛选类型")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div class=\"layout-inline\" data-v-b9b4353a>","</div>",[_c('my-select',{staticClass:"layout-item",attrs:{"width-style":300,"size":"small","placeholder":_vm.$t('筛选条件'),"sel-value":_vm.searchSetStaticForm,"options":_vm.searchStaticFormOptions2,"clearable":false},on:{"change":function($event){return _vm.handleSearchChange($event,1)}}})],1)])],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'table')?[_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("聚合规则")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-select',{staticClass:"width-300",attrs:{"size":"small","placeholder":"请选择"},on:{"change":_vm.handleJoinTableChange},model:{value:(_vm.form.tableJoin),callback:function ($$v) {_vm.$set(_vm.form, "tableJoin", $$v)},expression:"form.tableJoin"}},_vm._l((_vm.joinTableJoinOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.settingType != 'search')?_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("选择关联表单")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-select',{staticClass:"width-300",attrs:{"size":"small","placeholder":"请选择"},on:{"change":_vm.handleJoinFormValue},model:{value:(_vm.form.joinFormValue),callback:function ($$v) {_vm.$set(_vm.form, "joinFormValue", $$v)},expression:"form.joinFormValue"}},_vm._l((_vm.joinFormOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],2):_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'table')?[_vm._ssrNode("<div class=\"margin-top-5 font-size-12\" data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("过滤条件")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('my-cascader',{ref:"SelectorCollege",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择院系'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterTableCollegeOption,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleSelectCollege($event, 'college')}}}),_vm._ssrNode(" "),_c('my-cascader',{ref:"SelectorDept",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择部门'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterTableDeptOption,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleSelectDept($event, 'dept')}}}),_vm._ssrNode(" "),_c('el-select',{staticClass:"width-300 margin-top-5",attrs:{"multiple":"","size":"small","filterable":"","placeholder":_vm.$t('请选择审批状态')},on:{"change":function($event){return _vm.handleSelectStatus($event, 'status')}},model:{value:(_vm.form.fliterTableStatusOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterTableStatusOption", $$v)},expression:"form.fliterTableStatusOption"}},_vm._l((_vm.searchStatusFormOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._ssrNode(" "),_c('el-date-picker',{staticClass:"margin-top-5",staticStyle:{"width":"300px"},attrs:{"size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","format":"yyyy-MM-dd","value-format":"yyyy-MM-dd","clearable":true},on:{"change":function($event){return _vm.handleSelectFliter($event, 'time')}},model:{value:(_vm.form.fliterTableTimeOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterTableTimeOption", $$v)},expression:"form.fliterTableTimeOption"}})],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.settingType == 'circle' && _vm.settingType != 'search')?[_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("分子字段")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"请选择字段"},model:{value:(_vm.form.joinFormMoleculeParamsValue),callback:function ($$v) {_vm.$set(_vm.form, "joinFormMoleculeParamsValue", $$v)},expression:"form.joinFormMoleculeParamsValue"}},_vm._l((_vm.joinFormParamsOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleJoinFormParamsChange(item, index, 'Molecule')}}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"聚合规则"},on:{"change":function($event){return _vm.handleJoinFormChange($event, 'Molecule')}},model:{value:(_vm.form.circleMoleculeJoinOption),callback:function ($$v) {_vm.$set(_vm.form, "circleMoleculeJoinOption", $$v)},expression:"form.circleMoleculeJoinOption"}},_vm._l((_vm.joinFormJoinOptions),function(item){return (item.value != -1)?_c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}}):_vm._e()}),1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-input',{attrs:{"size":"small","placeholder":_vm.$t('请输入别名')},on:{"input":_vm.handleCircleInput},model:{value:(_vm.form.circleRealName),callback:function ($$v) {_vm.$set(_vm.form, "circleRealName", $$v)},expression:"form.circleRealName"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('my-cascader',{ref:"SelectorCollege",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择院系'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterMoleculeCollegeOption,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleSelectCollege($event, 'college', 'Molecule')}}}),_vm._ssrNode(" "),_c('my-cascader',{ref:"SelectorDept",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择部门'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterMoleculeDeptOption,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleSelectDept($event, 'dept', 'Molecule')}}}),_vm._ssrNode(" "),_c('el-select',{staticClass:"width-300 margin-top-5",attrs:{"multiple":"","size":"small","filterable":"","placeholder":_vm.$t('请选择审批状态')},on:{"change":function($event){return _vm.handleSelectStatus($event, 'status', 'Molecule')}},model:{value:(_vm.form.fliterMoleculeStatusOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterMoleculeStatusOption", $$v)},expression:"form.fliterMoleculeStatusOption"}},_vm._l((_vm.searchStatusFormOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._ssrNode(" "),_c('el-date-picker',{staticClass:"margin-top-5",staticStyle:{"width":"300px"},attrs:{"size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","format":"yyyy-MM-dd","value-format":"yyyy-MM-dd","clearable":true},on:{"change":function($event){return _vm.handleSelectFliter($event, 'time', 'Molecule')}},model:{value:(_vm.form.fliterMoleculeTimeOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterMoleculeTimeOption", $$v)},expression:"form.fliterMoleculeTimeOption"}})],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("分母字段")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"请选择字段"},model:{value:(_vm.form.joinFormDenominatorParamsValue),callback:function ($$v) {_vm.$set(_vm.form, "joinFormDenominatorParamsValue", $$v)},expression:"form.joinFormDenominatorParamsValue"}},_vm._l((_vm.joinFormParamsOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleJoinFormParamsChange(item, index, 'Denominator')}}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"聚合规则"},on:{"change":function($event){return _vm.handleJoinFormChange($event, 'Denominator')}},model:{value:(_vm.form.circleDenominatorJoinOption),callback:function ($$v) {_vm.$set(_vm.form, "circleDenominatorJoinOption", $$v)},expression:"form.circleDenominatorJoinOption"}},_vm._l((_vm.joinFormJoinOptions),function(item){return (item.value != -1)?_c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}}):_vm._e()}),1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('my-cascader',{ref:"SelectorCollege",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择院系'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterDenominatorCollegeOption,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleSelectCollege($event, 'college', 'Denominator')}}}),_vm._ssrNode(" "),_c('my-cascader',{ref:"SelectorDept",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择部门'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterDenominatorDeptOption,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleSelectDept($event, 'dept', 'Denominator')}}}),_vm._ssrNode(" "),_c('el-select',{staticClass:"width-300 margin-top-5",attrs:{"multiple":"","size":"small","filterable":"","placeholder":_vm.$t('请选择审批状态')},on:{"change":function($event){return _vm.handleSelectStatus($event, 'status', 'Denominator')}},model:{value:(_vm.form.fliterDenominatorStatusOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterDenominatorStatusOption", $$v)},expression:"form.fliterDenominatorStatusOption"}},_vm._l((_vm.searchStatusFormOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._ssrNode(" "),_c('el-date-picker',{staticClass:"margin-top-5",staticStyle:{"width":"300px"},attrs:{"size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","format":"yyyy-MM-dd","value-format":"yyyy-MM-dd","clearable":true},on:{"change":function($event){return _vm.handleSelectFliter($event, 'time', 'Denominator')}},model:{value:(_vm.form.fliterDenominatorTimeOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterDenominatorTimeOption", $$v)},expression:"form.fliterDenominatorTimeOption"}})],2)],2)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.settingType != 'bar' && _vm.settingType != 'table' && _vm.settingType != 'search' && _vm.settingType != 'circle')?[_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("选择该表单字段")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-select',{staticClass:"width-300",attrs:{"size":"small","placeholder":"请选择"},model:{value:(_vm.form.joinFormParamsValue),callback:function ($$v) {_vm.$set(_vm.form, "joinFormParamsValue", $$v)},expression:"form.joinFormParamsValue"}},_vm._l((_vm.joinFormParamsOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleJoinFormParamsChange(item, index)}}})}),1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("该字段值的聚合规则")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"请选择"},on:{"change":function($event){return _vm.handleJoinFormChange($event)}},model:{value:(_vm.form.joinFormJoinValue),callback:function ($$v) {_vm.$set(_vm.form, "joinFormJoinValue", $$v)},expression:"form.joinFormJoinValue"}},_vm._l((_vm.joinFormJoinOptions),function(item){return (item.value != -1)?_c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}}):_vm._e()}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"small","placeholder":_vm.$t('字符后缀')},on:{"input":_vm.handleJoinFormFiextChange},model:{value:(_vm.form.joinFormJoinFixed),callback:function ($$v) {_vm.$set(_vm.form, "joinFormJoinFixed", $$v)},expression:"form.joinFormJoinFixed"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"小数位数"},on:{"change":function($event){return _vm.handleJoinFormPointChange($event)}},model:{value:(_vm.form.joinFormJoinPoint),callback:function ($$v) {_vm.$set(_vm.form, "joinFormJoinPoint", $$v)},expression:"form.joinFormJoinPoint"}},_vm._l((_vm.joinFormJoinPointOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"千分位"},on:{"change":function($event){return _vm.handleJoinFormFormatChange($event)}},model:{value:(_vm.form.joinFormJoinFormat),callback:function ($$v) {_vm.$set(_vm.form, "joinFormJoinFormat", $$v)},expression:"form.joinFormJoinFormat"}},_vm._l((_vm.joinFormJoinFormatOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],1)],1)],2)],2)]:_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,null, { display: (_vm.settingType == 'bar' && _vm.settingType != 'search') ? '' : 'none' }))+" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("横轴(单选)")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('el-select',{staticClass:"width-300",attrs:{"size":"small","placeholder":"请选择"},model:{value:(_vm.form.joinFormXValue),callback:function ($$v) {_vm.$set(_vm.form, "joinFormXValue", $$v)},expression:"form.joinFormXValue"}},_vm._l((_vm.joinFormParamsOptions),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleXChange(item, index)}}})}),1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('my-cascader',{ref:"SelectorCollege",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择院系'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterChartCollegeOption,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleSelectCollege($event, 'college')}}}),_vm._ssrNode(" "),_c('my-cascader',{ref:"SelectorDept",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择部门'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterChartDeptOption,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleSelectDept($event, 'dept')}}}),_vm._ssrNode(" "),_c('el-select',{staticClass:"width-300 margin-top-5",attrs:{"multiple":"","size":"small","filterable":"","placeholder":_vm.$t('请选择审批状态')},on:{"change":function($event){return _vm.handleSelectStatus($event, 'status')}},model:{value:(_vm.form.fliterChartStatusOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterChartStatusOption", $$v)},expression:"form.fliterChartStatusOption"}},_vm._l((_vm.searchStatusFormOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._ssrNode(" "),_c('el-date-picker',{staticClass:"margin-top-5",staticStyle:{"width":"300px"},attrs:{"size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","format":"yyyy-MM-dd","value-format":"yyyy-MM-dd","clearable":true},on:{"change":function($event){return _vm.handleSelectFliter($event, 'time')}},model:{value:(_vm.form.fliterChartTimeOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterChartTimeOption", $$v)},expression:"form.fliterChartTimeOption"}})],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("纵轴")))+"</span> <span class=\"fa fa-plus-circle color-grand margin-left-5\" style=\"font-size: 14px\" data-v-b9b4353a></span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",_vm._l((_vm.form.chartYdataArray),function(item,indexMain){return _vm._ssrNode("<div class=\"margin-bottom-5 padding-lr-5 padding-tb-5\" style=\"background: #e5e5e5;position: relative\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<span style=\"position: absolute;right: 0px;top: -10px;z-index: 9999;\" data-v-b9b4353a><i class=\"fa fa-times-circle color-danger\" style=\"font-size: 18px\" data-v-b9b4353a></i></span> "),_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{ref:"mutiSelY",refInFor:true,attrs:{"size":"small","placeholder":"请选择字段"},model:{value:(item.f),callback:function ($$v) {_vm.$set(item, "f", $$v)},expression:"item.f"}},_vm._l((_vm.joinFormParamsOptions),function(itemChild,indexChild){return _c('el-option',{key:indexChild,attrs:{"label":itemChild.label,"value":itemChild.value},nativeOn:{"click":function($event){return _vm.handleYChange(itemChild, indexMain)}}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"聚合规则"},model:{value:(item.g),callback:function ($$v) {_vm.$set(item, "g", $$v)},expression:"item.g"}},_vm._l((_vm.joinFormJoinOptions),function(itemChild,indexChild){return (itemChild.value != -1)?_c('el-option',{key:itemChild.value,attrs:{"label":itemChild.label,"value":itemChild.value},nativeOn:{"click":function($event){return _vm.handleYJoinChange(itemChild, indexMain)}}}):_vm._e()}),1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-input',{attrs:{"size":"small","placeholder":_vm.$t('请输入别名')},on:{"input":function($event){return _vm.handleBarInput($event, item, indexMain)}},model:{value:(item.n),callback:function ($$v) {_vm.$set(item, "n", $$v)},expression:"item.n"}})],1)],2)}),0)],2)],2),_vm._ssrNode(" "),(_vm.settingType == 'table' && _vm.settingType != 'search')?[_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("选择该表单字段")))+"</span> <span class=\"fa fa-plus-circle color-grand margin-left-5\" data-v-b9b4353a></span></div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",_vm._l((_vm.tableTitleColData),function(itemMain,indexMain){return _vm._ssrNode("<div class=\"margin-bottom-10 padding-lr-5 padding-tb-5\" style=\"background: #e5e5e5;position: relative\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a>","</div>",[_c('el-row',{staticClass:"margin-bottom-5",attrs:{"gutter":4}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{ref:"mutiSelY",refInFor:true,attrs:{"size":"small","placeholder":"表单字段"},model:{value:(itemMain.param),callback:function ($$v) {_vm.$set(itemMain, "param", $$v)},expression:"itemMain.param"}},_vm._l((_vm.joinFormParamsOptions),function(item,indexItem){return _c('el-option',{key:indexItem,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleSelectLabel(item, indexItem, indexMain)}}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"small","placeholder":"请输入别名"},on:{"input":function($event){return _vm.handleChangeLabel($event, itemMain, indexMain, indexMain)}},model:{value:(itemMain.label),callback:function ($$v) {_vm.$set(itemMain, "label", $$v)},expression:"itemMain.label"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-row',{staticClass:"margin-bottom-5",attrs:{"gutter":4}},[_c('el-col',{attrs:{"span":12}},[_c('my-select',{attrs:{"sel-value":itemMain.value,"options":_vm.joinFormJoinOptions,"placeholder":_vm.$t('聚合规则'),"size":"small"},on:{"change":function($event){return _vm.handleSelectValue($event, itemMain, indexMain)}}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"small","placeholder":"请输入后缀"},on:{"input":function($event){return _vm.handleChangeFixed($event, itemMain, indexMain, indexMain)}},model:{value:(itemMain.fixed),callback:function ($$v) {_vm.$set(itemMain, "fixed", $$v)},expression:"itemMain.fixed"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"小数位数"},model:{value:(itemMain.point),callback:function ($$v) {_vm.$set(itemMain, "point", $$v)},expression:"itemMain.point"}},_vm._l((_vm.joinFormJoinPointOptions),function(item,indexItem){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleJoinFormTablePointChange(item, indexItem, indexMain)}}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-select',{attrs:{"size":"small","placeholder":"千分位"},model:{value:(itemMain.format),callback:function ($$v) {_vm.$set(itemMain, "format", $$v)},expression:"itemMain.format"}},_vm._l((_vm.joinFormJoinFormatOptions),function(item,indexItem){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value},nativeOn:{"click":function($event){return _vm.handleJoinFormTableFormatChange(item, indexItem, indexMain)}}})}),1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 text-right\" data-v-b9b4353a>","</div>",[_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){return _vm.addTableCol($event, indexMain)}}},[_vm._v(_vm._s(_vm.$t("插入下一行")))]),_vm._ssrNode(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){return _vm.minsTableCol($event, indexMain)}}},[_vm._v(_vm._s(_vm.$t("删除")))])],2)],2)}),0)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.settingType != 'search' && _vm.settingType != 'table' && _vm.settingType != 'circle' && _vm.settingType != 'bar')?_vm._ssrNode("<div class=\"color-sub-grand font-size-12 margin-top-10\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div data-v-b9b4353a><span data-v-b9b4353a>"+_vm._ssrEscape(_vm._s(_vm.$t("过滤条件")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-b9b4353a>","</div>",[_c('my-cascader',{ref:"SelectorCollege",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择院系'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterCollegeOption,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleSelectCollege($event, 'college')}}}),_vm._ssrNode(" "),_c('my-cascader',{ref:"SelectorDept",staticClass:"margin-top-5",attrs:{"placeholder":_vm.$t('请选择部门'),"size":"small","width-style":"300","props":{multiple: true},"collapse-tags":true,"sel-value":_vm.form.fliterDeptOption,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleSelectDept($event, 'dept')}}}),_vm._ssrNode(" "),_c('el-select',{staticClass:"width-300 margin-top-5",attrs:{"multiple":"","size":"small","filterable":"","placeholder":_vm.$t('请选择审批状态')},on:{"change":function($event){return _vm.handleSelectStatus($event, 'status')}},model:{value:(_vm.form.fliterStatusOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterStatusOption", $$v)},expression:"form.fliterStatusOption"}},_vm._l((_vm.searchStatusFormOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._ssrNode(" "),_c('el-date-picker',{staticClass:"margin-top-5",staticStyle:{"width":"300px"},attrs:{"size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","format":"yyyy-MM-dd","value-format":"yyyy-MM-dd","clearable":true},on:{"change":function($event){return _vm.handleSelectFliter($event, 'time')}},model:{value:(_vm.form.fliterTimeOption),callback:function ($$v) {_vm.$set(_vm.form, "fliterTimeOption", $$v)},expression:"form.fliterTimeOption"}})],2)],2):_vm._e()]],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-set-left detail-card font-size-12 padding-lr-10 padding-tb-10\""+(_vm._ssrStyle({"overflow-y":"auto"},_vm.drawHeight6, null))+" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div class=\"margin-bottom-5 layout-inline\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<span class=\"layout-item\" data-v-b9b4353a>","</span>",[_c('my-select',{staticClass:"layout-item width-120",attrs:{"disabled":"","size":"small","placeholder":_vm.form.searchStaticTitle,"sel-value":_vm.searchStaticForm,"options":_vm.searchStaticFormOptions,"clearable":false},on:{"change":function($event){return _vm.handleSearchChange($event, 2)}}}),_vm._ssrNode(" <span class=\"layout-item\" data-v-b9b4353a><i class=\"fa fa-cog color-grand\" style=\"font-size: 14px\" data-v-b9b4353a></i></span> "),_c('el-date-picker',{staticStyle:{"width":"240px"},attrs:{"disabled":"","size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.searchSetStaticTimeForm),callback:function ($$v) {_vm.searchSetStaticTimeForm=$$v},expression:"searchSetStaticTimeForm"}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"height: 140px\" data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":6}},[_c('el-card',{class:_vm.settingType == 'card' && _vm.settingColValue == 1 ? 'sel-card-active' : '',staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}},nativeOn:{"click":function($event){return _vm.settingCardDataInfo($event,1)}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.form.cardParam1))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                    "+_vm._s(_vm.form.cardValue1 == '' ? '显示内容' : _vm.form.cardValue1.n)+"\n                  ")])])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{class:_vm.settingType == 'card' && _vm.settingColValue == 2 ? 'sel-card-active' : '',staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}},nativeOn:{"click":function($event){return _vm.settingCardDataInfo($event,2)}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.form.cardParam2))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                    "+_vm._s(_vm.form.cardValue2 == '' ? '显示内容' : _vm.form.cardValue2.n)+"\n                  ")])])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{class:_vm.settingType == 'card' && _vm.settingColValue == 3 ? 'sel-card-active' : '',staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}},nativeOn:{"click":function($event){return _vm.settingCardDataInfo($event,3)}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.form.cardParam3))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                    "+_vm._s(_vm.form.cardValue3 == '' ? '显示内容' : _vm.form.cardValue3.n)+"\n                  ")])])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{class:_vm.settingType == 'card' && _vm.settingColValue == 4 ? 'sel-card-active' : '',staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}},nativeOn:{"click":function($event){return _vm.settingCardDataInfo($event,4)}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.form.cardParam4))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                    "+_vm._s(_vm.form.cardValue4 == '' ? '显示内容' : _vm.form.cardValue4.n)+"\n                  ")])])])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-b9b4353a>","</div>",[_vm._ssrNode("<div style=\"height: 300px\" data-v-b9b4353a>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":18}},[_c('el-card',{class:_vm.settingType == 'bar' ? 'sel-card-active' : '',staticStyle:{"height":"300px"},attrs:{"body-style":{padding: '10px'}},nativeOn:{"click":function($event){return _vm.settingBarDataInfo($event)}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-bar-chart"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.form.chartParam))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative","height":"260px"}},[_c('bar-chart',{attrs:{"chart-id":"barId","data-legned":_vm.barDataLegned,"data-key":_vm.barDataKey,"data":_vm.barData}})],1)])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{class:_vm.settingType == 'circle' ? 'sel-card-active' : '',staticStyle:{"height":"300px"},attrs:{"body-style":{padding: '10px'}},nativeOn:{"click":function($event){return _vm.settingCircleDataInfo($event)}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-pie-chart"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.form.circleParams))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"text-center"},[_c('el-progress',{attrs:{"type":"dashboard","show-text":false,"width":160,"percentage":_vm.percentage}})],1),_vm._v(" "),_c('div',{staticClass:"text-center font-size-12 font-bold",staticStyle:{"position":"relative","top":"-90px"}},[_c('span',[_vm._v("显示数据")])]),_vm._v(" "),_c('div',{staticClass:"text-center color-muted",staticStyle:{"position":"relative","top":"-10px"}},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.percentageValue))])])])])])])],1)],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("margin-top-20",_vm.settingType == 'table' ? 'sel-card-active' : ''))+" data-v-b9b4353a>","</div>",[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","row-key":"id"},nativeOn:{"click":function($event){return _vm.settingTableDataInfo($event)}}},_vm._l((_vm.tableTitleColData),function(item,index){return _c('el-table-column',{key:index,attrs:{"align":"center","label":item.title == '' ? '字段' : item.title},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(item.value == '' ? '内容' : item.value))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(item.valueText == '' ? '内容' : item.valueText))])])])]}}],null,true)})}),1)],1)],2),_vm._ssrNode(" <div class=\"moon-clearfix\" data-v-b9b4353a></div>")],2),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"top":"5vh","visible":_vm.h5Dialog,"show-footer":false,"append-to-body":true,"width-style":"450px","title":_vm.$t('移动端模版预览(仅展示)')},on:{"close":_vm.closeDialog,"right-close":_vm.closeDialog}},[_c('div',[_c('div',[_c('div',{staticStyle:{"height":"35px"}},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-button',{staticClass:"layout-item",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","type":"warning","plain":"","native-type":"button"}},[_vm._v(_vm._s(_vm.$t('选择表单')))])],1),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":16}},[_c('el-button',{staticClass:"layout-item",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","type":"warning","plain":"","native-type":"button"}},[_vm._v(_vm._s(_vm.$t('选择部门/院系')))]),_vm._v(" "),_c('el-button',{staticClass:"layout-item",staticStyle:{"margin-top":"5px"},attrs:{"size":"small","type":"default","plain":"","native-type":"button"}},[_vm._v(_vm._s(_vm.$t('选择时间')))])],1)],1)],1)]),_vm._v(" "),_c('el-card',{staticClass:"margin-top-5",staticStyle:{"height":"150px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticStyle:{"height":"75px","width":"100%"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-left padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.form.cardValue1 == '' ? '字段内容' : _vm.form.cardValue1.n))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v("显示内容")])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-right padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.form.cardValue2 == '' ? '字段内容' : _vm.form.cardValue2.n))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v("显示内容")])])])])],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"75px","width":"100%"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-left padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.form.cardValue3 == '' ? '字段内容' : _vm.form.cardValue3.n))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v("显示内容")])])])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-right padding-lr-5"},[_c('div',[_c('span',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.form.cardValue4 == '' ? '字段内容' : _vm.form.cardValue4.n))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('span',{staticClass:"font-size-12 color-muted"},[_vm._v("显示内容")])])])])],1)],1)]),_vm._v(" "),_c('el-card',{staticClass:"margin-top-10",staticStyle:{"height":"180px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',[_c('div',{staticClass:"text-center"},[_c('el-progress',{attrs:{"type":"dashboard","show-text":false,"width":160,"percentage":_vm.percentage}})],1),_vm._v(" "),_c('div',{staticClass:"text-center font-size-12 font-bold",staticStyle:{"position":"relative","top":"-90px"}},[_c('span',[_vm._v("显示数据")])]),_vm._v(" "),_c('div',{staticClass:"text-center color-muted font-size-12",staticStyle:{"position":"relative","top":"-30px"}},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.percentageValue))])])])])])]),_vm._v(" "),_c('el-card',{staticClass:"margin-top-10",staticStyle:{"height":"350px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"text-center;",staticStyle:{"height":"350px","width":"100%"}},[_c('h-bar-chart',{attrs:{"chart-id":"hbarId","data-legned":_vm.barDataLegned,"data-key":_vm.barDataKey,"data":_vm.barData}})],1)])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/PCStaticTemplate.vue?vue&type=template&id=b9b4353a&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/charts/BarChart.vue + 4 modules
var BarChart = __webpack_require__(184);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/PCStaticTemplate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var PCStaticTemplatevue_type_script_lang_js_ = ({
  name: 'pcStaticTemplate',
  components: {
    DialogNormal: DialogNormal["default"],
    MyCascader: MyCascader["default"],
    BarChart: BarChart["default"]
  },
  mixins: [mixins["a" /* default */]],
  props: {
    staticId: String,
    staticPcFormData: Array
  },
  computed: {},

  data() {
    return {
      h5Dialog: false,
      staticPcFormList: [{
        filterType: '',
        unitName: '',
        statId: '',
        unitType: '4'
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }],
      settingType: '',
      settingColValue: '',
      searchStaticTitle: this.$t("筛选条件"),
      searchStaticForm: '',
      searchSetStaticForm: '',
      searchSetStaticFormOption: '',
      searchSetStaticTimeForm: [],
      searchStaticFormOptions: [{
        label: this.$t("时间"),
        value: 'time'
      }, {
        label: this.$t("部门"),
        value: 'dept'
      }, {
        label: this.$t("院系"),
        value: 'college'
      }, {
        label: this.$t("表单状态"),
        value: 'status'
      }],
      searchStatusFormOptions: [{
        label: this.$t("撤销"),
        value: '-1'
      }, {
        label: this.$t("待审核"),
        value: '0'
      }, {
        label: this.$t("通过"),
        value: '3'
      }, {
        label: this.$t("未通过"),
        value: '4'
      }],
      searchStaticFormOptions2: [{
        label: this.$t("部门"),
        value: 'dept'
      }, {
        label: this.$t("院系"),
        value: 'college'
      }],
      form: {
        searchStaticTitle: '筛选条件',
        cardParam1: '字段名称',
        cardParam2: '字段名称',
        cardParam3: '字段名称',
        cardParam4: '字段名称',
        cardValue1: '',
        cardValue1Text: '',
        cardValue2: '',
        cardValue2Text: '',
        cardValue3: '',
        cardValue3Text: '',
        cardValue4: '',
        cardValue4Text: '',
        cardForm1: '',
        cardForm2: '',
        cardForm3: '',
        cardForm4: '',
        cardJoin1: '0',
        cardJoinFixed1: '',
        cardJoinPoint1: '0',
        cardJoinFormat1: false,
        cardJoin2: '0',
        cardJoinFixed2: '',
        cardJoinPoint: '0',
        cardJoinFormat2: false,
        cardJoin3: '0',
        cardJoinFixed3: '',
        cardJoinPoint3: '0',
        cardJoinFormat3: false,
        cardJoin4: '0',
        cardJoinFixed4: '',
        cardJoinPoint4: '0',
        cardJoinFormat4: false,
        cardFliter1: '',
        cardFliter2: '',
        cardFliter3: '',
        cardFliter4: '',
        cardFliterOption1: '',
        cardFliterCollegeOption1: '',
        cardFliterDeptOption1: '',
        cardFliterStatusOption1: '',
        cardFliterTimeOption1: '',
        cardFliterOption2: '',
        cardFliterCollegeOption2: '',
        cardFliterDeptOption2: '',
        cardFliterStatusOption2: '',
        cardFliterTimeOption2: '',
        cardFliterOption3: '',
        cardFliterCollegeOption3: '',
        cardFliterDeptOption3: '',
        cardFliterStatusOption3: '',
        cardFliterTimeOption3: '',
        cardFliterOption4: '',
        cardFliterCollegeOption4: '',
        cardFliterDeptOption4: '',
        cardFliterStatusOption4: '',
        cardFliterTimeOption4: '',
        cardFliterStartTime1: '',
        cardFliterEndTime1: '',
        cardFliterStartTime2: '',
        cardFliterEndTime2: '',
        cardFliterStartTime3: '',
        cardFliterEndTime3: '',
        cardFliterStartTime4: '',
        cardFliterEndTime4: '',
        chartParam: '字段名称',
        chartValue: '',
        chartValueText: '',
        chartJoin: '',
        chartForm: '',
        chartFliter: '',
        chartFliterOption: '',
        chartXdata: '',
        chartXdataObj: '',
        chartXFliterCollege: [],
        chartXFliterDept: [],
        chartXFliterStatus: [],
        chartXFliterTime: [],
        chartYdata: '',
        chartYdataObj: '',
        chartYdataArray: [],
        cardTitle: '',
        cardValue: '',
        circleParams: '字段名称',
        circleValue: 0,
        circleValueText: '',
        circleMoleculeValue: '',
        circleMoleculeValueText: '',
        circleDenominatorValue: '',
        circleDenominatorValueText: '',
        circleForm: '',
        circleFliter: '',
        circleFliterOption: '',
        circleFliterMoleculeCollegeOption: [],
        circleFliterMoleculeDeptOption: [],
        circleFliterMoleculeStatusOption: [],
        circleFliterMoleculeTimeOption: [],
        circleFliterMoleculeStartTime: '',
        circleFliterMoleculeEndTime: '',
        circleFliterDenominatorCollegeOption: [],
        circleFliterDenominatorDeptOption: [],
        circleFliterDenominatorStatusOption: [],
        circleFliterDenominatorTimeOption: [],
        circleFliterDenominatorStartTime: '',
        circleFliterDenominatorEndTime: '',
        circleFliterStartTime: '',
        circleFliterEndTime: '',
        circleJoin: '-1',
        circleRealName: '',
        circleMoleculeJoin: '5',
        circleDenominatorJoin: '5',
        circleDenominatorJoinOption: '5',
        circleMoleculeJoinOption: '5',
        tableForm: '',
        tableValue: '',
        tableValueText: '',
        tableFliter: '',
        tableFliterOption: '',
        tableFliterStartTime: '',
        tableFliterEndTime: '',
        tableJoin: '',
        joinFormValue: '',
        joinFormParamsValue: '',
        joinFormParamsValueObj: {},
        joinFormFliterValue: '',
        joinFormJoinValue: '',
        joinFormJoinFixed: '',
        joinFormJoinPoint: '0',
        joinFormJoinFormat: '0',
        joinFormXValue: '',
        joinFormYValue: [],
        fliterOption: [],
        fliterCollegeOption: [],
        fliterDeptOption: [],
        fliterStatusOption: [],
        fliterTimeOption: [],
        fliterOptionStartTime: '',
        fliterOptionEndTime: '',
        joinTableJoinValue: [],
        joinTableCollege: [],
        joinTableDept: [],
        joinTableStatus: [],
        joinTableTime: [],
        joinFormMoleculeParamsValue: '',
        joinFormMoleculeParamsValueObj: {},
        joinFormDenominatorParamsValue: '',
        joinFormDenominatorParamsValueObj: {},
        fliterMoleculeCollegeOption: [],
        fliterMoleculeDeptOption: [],
        fliterMoleculeStatusOption: [],
        fliterMoleculeTimeOption: [],
        fliterDenominatorCollegeOption: [],
        fliterDenominatorDeptOption: [],
        fliterDenominatorStatusOption: [],
        fliterDenominatorTimeOption: [],
        fliterChartCollegeOption: [],
        fliterChartDeptOption: [],
        fliterChartStatusOption: [],
        fliterChartTimeOption: [],
        fliterTableCollegeOption: [],
        fliterTableDeptOption: [],
        fliterTableStatusOption: [],
        fliterTableTimeOption: []
      },
      joinFormValueOptions: [],
      joinFormParamsOptions: [],
      joinFormParamsMutiOptions: [],
      joinFormParamsOptionsArray: [],
      joinFormFliterOptions: [],
      joinFormXOptions: [],
      joinFormYOptions: [],
      joinFormOptions: [],
      formTableData: [{
        label: '',
        value: '0'
      }],
      formTableParamsOptions: [],
      joinFormJoinFormatOptions: [{
        value: false,
        label: this.$t("禁用千分位")
      }, {
        value: true,
        label: this.$t("启用千分位")
      }],
      joinFormJoinPointOptions: [{
        value: '0',
        label: this.$t("无小数位")
      }, {
        value: '1',
        label: this.$t("1位小数")
      }, {
        value: '2',
        label: this.$t("2位小数")
      }, {
        value: '3',
        label: this.$t("3位小数")
      }, {
        value: '4',
        label: this.$t("4位小数")
      }, {
        value: '5',
        label: this.$t("5位小数")
      }],
      joinFormJoinOptions: [{
        value: '-1',
        label: this.$t("不聚合")
      }, {
        value: '0',
        label: this.$t("求和")
      }, {
        value: '1',
        label: this.$t("平均值")
      }, {
        value: '2',
        label: this.$t("最大值")
      }, {
        value: '3',
        label: this.$t("最小值")
      }, {
        value: '4',
        label: this.$t("计数")
      }, {
        value: '5',
        label: this.$t("计数(去重复)")
      }],
      joinTableJoinOptions: [{
        value: '0',
        label: this.$t("按人员聚合")
      }, {
        value: '1',
        label: this.$t("按部门聚合")
      }, {
        value: '2',
        label: this.$t("按院系聚合")
      }],
      tableData: ["1"],
      tableTitleColData: [{
        title: '',
        label: '',
        value: '',
        param: '',
        valueText: "",
        fixed: '',
        point: '',
        format: '',
        obj: {
          d: '',
          f: '',
          n: '',
          g: '-1',
          zwf: false,
          hz: '',
          jd: '0'
        }
      }],
      percentage: 0,
      percentageText: '内容',
      percentageValue: '表单字段',
      barDataLegned: ['类型1', '类型2', '类型3'],
      barDataKey: ['字段1', '字段2', '字段3'],
      barData: [{
        name: '类型1',
        type: 'bar',
        barWidth: 15,
        data: [10, 10, 10]
      }, {
        name: '类型2',
        type: 'bar',
        barWidth: 15,
        data: [10, 10, 10]
      }, {
        name: '类型3',
        type: 'bar',
        barWidth: 15,
        data: [10, 10, 10]
      }]
    };
  },

  created() {
    this.initAsync();
  },

  methods: {
    async initAsync() {
      await this.init();
      await this.initData();
    },

    initData() {
      if (this.staticPcFormData.length > 0) {
        this.staticPcFormList = this.staticPcFormData;
        this.searchStaticTitle = this.staticPcFormData[0].unitName;
        this.searchSetStaticForm = this.getTitleFliterText(this.staticPcFormData[0].filterType);
        this.setFliterParamDataFormat(1);
        this.form.cardFliterTimeOption1 = this.setFliterTimeFormat(1);
        this.form.cardFliterDeptOption1 = this.setFliterDeptFormat(1);
        this.form.cardFliterCollegeOption1 = this.setFliterCollegeFormat(1);
        this.form.cardFliterStatusOption1 = this.setFliterStatusFormat(1);
        this.setFliterParamDataFormat(2);
        this.form.cardFliterTimeOption2 = this.setFliterTimeFormat(2);
        this.form.cardFliterDeptOption2 = this.setFliterDeptFormat(2);
        this.form.cardFliterCollegeOption2 = this.setFliterCollegeFormat(2);
        this.form.cardFliterStatusOption2 = this.setFliterStatusFormat(2);
        this.setFliterParamDataFormat(3);
        this.form.cardFliterTimeOption3 = this.setFliterTimeFormat(3);
        this.form.cardFliterDeptOption3 = this.setFliterDeptFormat(3);
        this.form.cardFliterCollegeOption3 = this.setFliterCollegeFormat(3);
        this.form.cardFliterStatusOption3 = this.setFliterStatusFormat(3);
        this.setFliterParamDataFormat(4);
        this.form.cardFliterTimeOption4 = this.setFliterTimeFormat(4);
        this.form.cardFliterDeptOption4 = this.setFliterDeptFormat(4);
        this.form.cardFliterCollegeOption4 = this.setFliterCollegeFormat(4);
        this.form.cardFliterStatusOption4 = this.setFliterStatusFormat(4);
        this.setFliterBarParamDataFormat(5);
        this.form.chartXFliterTime = this.setFliterTimeFormat(5);
        this.form.chartXFliterDept = this.setFliterDeptFormat(5);
        this.form.chartXFliterCollege = this.setFliterCollegeFormat(5);
        this.form.chartXFliterStatus = this.setFliterStatusFormat(5);
        this.setFliterCircleParamDataFormat(6);
        this.form.circleFliterMoleculeTimeOption = this.setFliterTimeFormat(6, "Molecule");
        this.form.circleFliterMoleculeDeptOption = this.setFliterDeptFormat(6, "Molecule");
        this.form.circleFliterMoleculeCollegeOption = this.setFliterCollegeFormat(6, "Molecule");
        this.form.circleFliterMoleculeStatusOption = this.setFliterStatusFormat(6, "Molecule");
        this.form.circleFliterDenominatorTimeOption = this.setFliterTimeFormat(6, "Denominator");
        this.form.circleFliterDenominatorDeptOption = this.setFliterDeptFormat(6, "Denominator");
        this.form.circleFliterDenominatorCollegeOption = this.setFliterCollegeFormat(6, "Denominator");
        this.form.circleFliterDenominatorStatusOption = this.setFliterStatusFormat(6, "Denominator");
        this.form.tableForm = this.staticPcFormData[7].relaFormId;
        let tabletTitleData = this.staticPcFormData[7].relaFromField1 != "" ? this.staticPcFormData[7].relaFromField1 : [];
        let tableColArray = [];

        for (let i = 0; i < tabletTitleData.length; i++) {
          tableColArray.push({
            title: tabletTitleData[i].n,
            label: tabletTitleData[i].n,
            value: tabletTitleData[i].g + "",
            param: tabletTitleData[i].f,
            valueText: "",
            fixed: tabletTitleData[i]['hz'] ? tabletTitleData[i]['hz'] : '',
            point: tabletTitleData[i]['jd'] ? tabletTitleData[i]['jd'] + "" : '0',
            format: tabletTitleData[i]['zwf'] ? tabletTitleData[i]['zwf'] : false,
            obj: {
              d: tabletTitleData[i].d,
              f: tabletTitleData[i].f,
              n: tabletTitleData[i].n,
              g: tabletTitleData[i].g + "",
              zwf: tabletTitleData[i].zwf ? tabletTitleData[i].zwf : false,
              hz: tabletTitleData[i].hz,
              jd: tabletTitleData[i].jd + ""
            }
          });
        }

        this.tableTitleColData = tableColArray;
        this.form.tableJoin = this.staticPcFormData[7].groupType + "";
        this.staticPcFormData[7].relaFromField1 = this.staticPcFormData[7].relaFromField1;
        this.form.joinTableTime = this.setFliterTimeFormat(7);
        this.form.joinTableDept = this.setFliterDeptFormat(7);
        this.form.joinTableCollege = this.setFliterCollegeFormat(7);
        this.form.joinTableStatus = this.setFliterStatusFormat(7);
      }
    },

    setFliterParamDataFormat(index) {
      this.form["cardParam" + index] = this.staticPcFormData[index].unitName;
      this.form["cardValue" + index + "Text"] = this.staticPcFormData[index].relaFromField1[0]['f'];
      this.form["cardForm" + index] = this.staticPcFormData[index].relaFormId;
      this.form["cardValue" + index] = this.staticPcFormData[index].relaFromField1[0];
      this.form["cardFliter" + index] = this.getTitleFliterText(this.staticPcFormData[index].filterType);
      this.form["cardJoin" + index] = this.staticPcFormData[index].relaFromField1[0]['g'] + "";
      this.form["cardJoinFormat" + index] = this.staticPcFormData[index].relaFromField1[0]['zwf'];
      this.form["cardJoinFixed" + index] = this.staticPcFormData[index].relaFromField1[0]['hz'];
      this.form["cardJoinPoint" + index] = this.staticPcFormData[index].relaFromField1[0]['jd'];
    },

    setFliterBarParamDataFormat(index) {
      this.form.chartParam = this.staticPcFormData[index].unitName;
      this.form.chartForm = this.staticPcFormData[index].relaFormId;
      this.form.chartXdata = this.staticPcFormData[index].relaFromField1[0]['f'];
      this.form.chartXdataObj = this.staticPcFormData[index].relaFromField1[0];
      this.form.chartFliter = this.getTitleFliterText(this.staticPcFormData[index].filterType); //this.form.chartFliterOption = [];

      let yData = this.staticPcFormData[index].relaFromField2 != undefined ? this.staticPcFormData[index].relaFromField2 : [];
      let yDataArray = [];

      for (let i = 0; i < yData.length; i++) {
        yData[i]['g'] = yData[i]['g'] || yData[i]['g'] === 0 ? yData[i]['g'] + "" : "5";
        yDataArray.push(yData[i].f);
      }

      this.form.chartYdata = yDataArray;
      this.form.chartYdataObj = this.staticPcFormData[index].relaFromField2;
      this.form.chartYdataArray = this.staticPcFormData[index].relaFromField2 != undefined ? this.staticPcFormData[index].relaFromField2 : [];
    },

    setFliterCircleParamDataFormat(index) {
      this.staticPcFormData[index].relaFromField1 = this.staticPcFormData[index].relaFromField1;
      this.form.circleParams = this.staticPcFormData[index].unitName;
      this.form.circleValueText = this.staticPcFormData[index].relaFromField1[0]['f'];
      this.form.circleForm = this.staticPcFormData[index].relaFormId;
      this.form.circleValue = this.staticPcFormData[index].relaFromField1[0];
      this.form.circleFliter = this.getTitleFliterText(this.staticPcFormData[index].filterType);
      this.form.circleJoin = this.staticPcFormData[index].groupRule + "";
      this.percentageValue = this.staticPcFormData[index].relaFromField1[0]['n'];
      this.form.circleMoleculeValueText = this.staticPcFormData[index].relaFromField1[0]['f'];
      this.form.circleMoleculeJoinOption = this.staticPcFormData[index].relaFromField1[0]['g'] + "";
      this.form.circleMoleculeJoin = this.staticPcFormData[index].relaFromField1[0]['g'] + "";
      this.form.circleMoleculeValue = this.staticPcFormData[index].relaFromField1[0];
      this.form.joinFormMoleculeParamsValue = this.staticPcFormData[index].relaFromField1[0]['f'];
      this.form.circleRealName = this.staticPcFormData[index].relaFromField1[0]['n'];
      this.form.circleDenominatorValueText = this.staticPcFormData[index].relaFromField2[0]['f'];
      this.form.circleDenominatorJoinOption = this.staticPcFormData[index].relaFromField2[0]['g'] + "";
      this.form.circleDenominatorJoin = this.staticPcFormData[index].relaFromField2[0]['g'] + "";
      this.form.circleDenominatorValue = this.staticPcFormData[index].relaFromField2[0];
      this.form.joinFormDenominatorParamsValue = this.staticPcFormData[index].relaFromField2[0]['f'];
    },

    setFliterTimeFormat(index, type) {
      let time = "";

      if (type == "Molecule") {
        time = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      } else if (type == "Denominator") {
        time = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
      } else {
        time = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      }

      if (time['date1'] && time['date2']) {
        let start = time['date1'] != "" ? time.date1 : "";
        let end = time['date2'] != "" > 0 ? time.date2 : "";
        return [start, end];
      } else {
        return [];
      }
    },

    setFliterDeptFormat(index, type) {
      let deptId = "";

      if (type == "Molecule") {
        deptId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      } else if (type == "Denominator") {
        deptId = this.staticPcFormData[index].filterRules2 = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
      } else {
        deptId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      } //let deptId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";


      return deptId['deptId'] == "" ? [] : JSON.parse(deptId.deptId);
    },

    setFliterCollegeFormat(index, type) {
      let collegeId = "";

      if (type == "Molecule") {
        collegeId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      } else if (type == "Denominator") {
        collegeId = this.staticPcFormData[index].filterRules2 = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
      } else {
        collegeId = this.staticPcFormData[index].filterRules = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      } //let collegeId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";


      return collegeId['collegeId'] == "" ? [] : JSON.parse(collegeId.collegeId);
    },

    setFliterStatusFormat(index, type) {
      let statusId = "";

      if (type == "Molecule") {
        statusId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      } else if (type == "Denominator") {
        statusId = this.staticPcFormData[index].filterRules2 != "" ? this.staticPcFormData[index].filterRules2 : "";
      } else {
        statusId = this.staticPcFormData[index].filterRules != "" ? this.staticPcFormData[index].filterRules : "";
      }

      return statusId['applyStatus'] == "" ? [] : JSON.parse(statusId.applyStatus);
    },

    async init() {
      //server_list_list2
      let params = {};
      await this.$axios.get(url["a" /* common */].server_list_list2, {
        params: params
      }).then(res => {
        if (res.data.code == 200) {
          let array = [];

          for (let i = 0; i < res.data.data.length; i++) {
            array.push({
              value: res.data.data[i].id,
              label: res.data.data[i].form_name
            });
          }

          this.joinFormOptions = array;
        }
      });
    },

    async getFiledInfo(formId) {
      //server_list_list2
      let params = {
        formId: formId
      };
      await this.$axios.get(url["a" /* common */].server_list_field, {
        params: params
      }).then(res => {
        if (res.data.code == 200) {
          let array = [];

          for (let i = 0; i < res.data.data.length; i++) {
            array.push({
              id: i,
              value: res.data.data[i].f,
              label: res.data.data[i].n,
              extra: res.data.data[i].d
            });
          }

          this.joinFormParamsOptions = array;
          this.joinFormParamsOptionsArray = res.data.data;
        }
      });
    },

    async settingCardDataInfo(event, value) {
      this.settingType = 'card';
      this.form.fliterOption = [];
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('SelectorDept');

      if (value == 1) {
        await this.getFiledInfo(this.form.cardForm1);
        this.form.cardTitle = this.form.cardParam1;
        this.form.joinFormParamsValue = this.form.cardValue1Text == '' ? '' : this.form.cardValue1Text;
        this.form.joinFormValue = this.form.cardForm1;
        this.form.joinFormJoinValue = this.form.cardJoin1 != "undefined" && this.form.cardJoin1 != '' ? this.form.cardJoin1 : '5';
        this.form.joinFormJoinFixed = this.form.cardJoinFixed1;
        this.form.joinFormJoinPoint = this.form.cardJoinPoint1 != undefined && this.form.cardJoinPoint1 != '' ? this.form.cardJoinPoint1 : '0';
        this.form.joinFormJoinFormat = this.form.cardJoinFormat1;
        this.form.joinFormFliterValue = this.form.cardFliter1;
        this.form.fliterCollegeOption = this.form.cardFliterCollegeOption1 == "" ? [] : this.form.cardFliterCollegeOption1;
        this.form.fliterDeptOption = this.form.cardFliterDeptOption1 == "" ? [] : this.form.cardFliterDeptOption1;
        this.form.fliterStatusOption = this.form.cardFliterStatusOption1 == "" ? [] : this.form.cardFliterStatusOption1;
        this.form.fliterTimeOption = this.form.cardFliterTimeOption1 == "" ? [] : this.form.cardFliterTimeOption1;
        this.staticPcFormList[1] = this.setStatucFormListObj(this.form.cardFliter1, this.form.cardParam1, this.form.cardForm1, this.form.cardValue1, this.form.cardJoin1, this.staticId, 0); //this.staticPcFormList[1]['groupRule'] = this.form.cardJoin1;

        this.staticPcFormList[1]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[1]['filterRules'], this.form.cardFliterCollegeOption1);
        this.staticPcFormList[1]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[1]['filterRules'], this.form.cardFliterDeptOption1);
        this.staticPcFormList[1]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[1]['filterRules'], this.form.cardFliterStatusOption1);
        let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[1]['filterRules'], this.form.cardFliterTimeOption1);
        this.staticPcFormList[1]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[1]['filterRules']['date2'] = date['date2'];
      } else if (value == 2) {
        await this.getFiledInfo(this.form.cardForm2);
        this.form.cardTitle = this.form.cardParam2;
        this.form.joinFormParamsValue = this.form.cardValue2Text == '' ? '' : this.form.cardValue2Text;
        this.form.joinFormValue = this.form.cardForm2;
        this.form.joinFormJoinValue = this.form.cardJoin2 != "undefined" && this.form.cardJoin2 != '' ? this.form.cardJoin2 : '5';
        this.form.joinFormJoinFixed = this.form.cardJoinFixed2;
        this.form.joinFormJoinPoint = this.form.cardJoinPoint2 != undefined && this.form.cardJoinPoint2 != '' ? this.form.cardJoinPoint2 : '0';
        this.form.joinFormJoinFormat = this.form.cardJoinFormat2;
        this.form.joinFormFliterValue = this.form.cardFliter2;
        this.form.fliterCollegeOption = this.form.cardFliterCollegeOption2 == "" ? [] : this.form.cardFliterCollegeOption2;
        this.form.fliterDeptOption = this.form.cardFliterDeptOption2 == "" ? [] : this.form.cardFliterDeptOption2;
        this.form.fliterStatusOption = this.form.cardFliterStatusOption2 == "" ? [] : this.form.cardFliterStatusOption2;
        this.form.fliterTimeOption = this.form.cardFliterTimeOption2 == "" ? [] : this.form.cardFliterTimeOption2;
        this.staticPcFormList[2] = this.setStatucFormListObj(this.form.cardFliter2, this.form.cardParam2, this.form.cardForm2, this.form.cardValue2, this.form.cardJoin2, this.staticId, 0); //this.staticPcFormList[2]['groupRule'] = this.form.cardJoin2;

        this.staticPcFormList[2]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[2]['filterRules'], this.form.cardFliterCollegeOption2);
        this.staticPcFormList[2]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[2]['filterRules'], this.form.cardFliterDeptOption2);
        this.staticPcFormList[2]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[2]['filterRules'], this.form.cardFliterStatusOption2);
        let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[2]['filterRules'], this.form.cardFliterTimeOption2);
        this.staticPcFormList[2]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[2]['filterRules']['date2'] = date['date2'];
      } else if (value == 3) {
        await this.getFiledInfo(this.form.cardForm3);
        this.form.cardTitle = this.form.cardParam3;
        this.form.joinFormParamsValue = this.form.cardValue3Text == '' ? '' : this.form.cardValue3Text;
        this.form.joinFormValue = this.form.cardForm3;
        this.form.joinFormJoinValue = this.form.cardJoin3 != "undefined" && this.form.cardJoin3 != '' ? this.form.cardJoin3 : '5';
        this.form.joinFormJoinFixed = this.form.cardJoinFixed3;
        this.form.joinFormJoinPoint = this.form.cardJoinPoint3 != undefined && this.form.cardJoinPoint3 != '' ? this.form.cardJoinPoint3 : '0';
        this.form.joinFormJoinFormat = this.form.cardJoinFormat3;
        this.form.joinFormFliterValue = this.form.cardFliter3;
        this.form.fliterCollegeOption = this.form.cardFliterCollegeOption3 == "" ? [] : this.form.cardFliterCollegeOption3;
        this.form.fliterDeptOption = this.form.cardFliterDeptOption3 == "" ? [] : this.form.cardFliterDeptOption3;
        this.form.fliterStatusOption = this.form.cardFliterStatusOption3 == "" ? [] : this.form.cardFliterStatusOption3;
        this.form.fliterTimeOption = this.form.cardFliterTimeOption3 == "" ? [] : this.form.cardFliterTimeOption3;
        this.staticPcFormList[3] = this.setStatucFormListObj(this.form.cardFliter3, this.form.cardParam3, this.form.cardForm3, this.form.cardValue3, this.form.cardJoin3, this.staticId, 0); //this.staticPcFormList[3]['groupRule'] = this.form.cardJoin3;

        this.staticPcFormList[3]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[3]['filterRules'], this.form.cardFliterCollegeOption3);
        this.staticPcFormList[3]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[3]['filterRules'], this.form.cardFliterDeptOption3);
        this.staticPcFormList[3]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[3]['filterRules'], this.form.cardFliterStatusOption3);
        let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[3]['filterRules'], this.form.cardFliterTimeOption3);
        this.staticPcFormList[3]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[3]['filterRules']['date2'] = date['date2'];
      } else if (value == 4) {
        await this.getFiledInfo(this.form.cardForm4);
        this.form.cardTitle = this.form.cardParam4;
        this.form.joinFormParamsValue = this.form.cardValue4Text == '' ? '' : this.form.cardValue4Text;
        this.form.joinFormValue = this.form.cardForm4;
        this.form.joinFormJoinValue = this.form.cardJoin4 != "undefined" && this.form.cardJoin4 != '' ? this.form.cardJoin4 : '5';
        this.form.joinFormJoinFixed = this.form.cardJoinFixed4;
        this.form.joinFormJoinPoint = this.form.cardJoinPoint4 != undefined && this.form.cardJoinPoint4 != '' ? this.form.cardJoinPoint4 : '0';
        this.form.joinFormJoinFormat = this.form.cardJoinFormat4;
        this.form.joinFormFliterValue = this.form.cardFliter4;
        this.form.fliterCollegeOption = this.form.cardFliterCollegeOption4 == "" ? [] : this.form.cardFliterCollegeOption4;
        this.form.fliterDeptOption = this.form.cardFliterDeptOption4 == "" ? [] : this.form.cardFliterDeptOption4;
        this.form.fliterStatusOption = this.form.cardFliterStatusOption4 == "" ? [] : this.form.cardFliterStatusOption4;
        this.form.fliterTimeOption = this.form.cardFliterTimeOption4 == "" ? [] : this.form.cardFliterTimeOption4;
        this.staticPcFormList[4] = this.setStatucFormListObj(this.form.cardFliter4, this.form.cardParam4, this.form.cardForm4, this.form.cardValue4, this.form.cardJoin4, this.staticId, 0); //this.staticPcFormList[4]['groupRule'] = this.form.cardJoin4;

        this.staticPcFormList[4]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[4]['filterRules'], this.form.cardFliterCollegeOption4);
        this.staticPcFormList[4]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[4]['filterRules'], this.form.cardFliterDeptOption4);
        this.staticPcFormList[4]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[4]['filterRules'], this.form.cardFliterStatusOption4);
        let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[4]['filterRules'], this.form.cardFliterTimeOption4);
        this.staticPcFormList[4]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[4]['filterRules']['date2'] = date['date2'];
      }

      this.settingColValue = value;
    },

    async settingBarDataInfo(event) {
      this.settingType = 'bar';
      this.settingColValue = '';
      await this.getFiledInfo(this.form.chartForm);
      this.form.joinFormXValue = "";
      this.form.joinFormYValue = [];
      this.form.joinFormValue = this.form.chartForm;
      this.form.joinFormFliterValue = this.form.chartFliter;
      this.form.joinFormXValue = this.form.chartXdata;
      this.form.joinFormYValue = this.form.chartYdata;
      this.form.fliterOption = this.form.chartFliterOption;
      this.form.fliterChartCollegeOption = this.form.chartXFliterCollege;
      this.form.fliterChartDeptOption = this.form.chartXFliterDept;
      this.form.fliterChartStatusOption = this.form.chartXFliterStatus;
      this.form.fliterChartTimeOption = this.form.chartXFliterTime;
      this.staticPcFormList[5] = this.setStatucFormListObj2(this.form.chartFliter, this.form.chartParam, this.form.chartForm, this.form.chartXdataObj, this.form.chartYdataObj, this.form.chartJoin, this.staticId, 1); //this.staticPcFormList[5]['filterRules'] = this.setFliterOptionValue(this.form.chartFliter, this.staticPcFormList[5]['filterRules'], this.form.chartFliterOption);

      this.staticPcFormList[5]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterCollege);
      this.staticPcFormList[5]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterDept);
      this.staticPcFormList[5]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterStatus);
      let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[5]['filterRules'], this.form.chartXFliterTime);
      this.staticPcFormList[5]['filterRules']['date1'] = date['date1'];
      this.staticPcFormList[5]['filterRules']['date2'] = date['date2'];
      this.setBarChartData();
    },

    async settingCircleDataInfo(event) {
      this.settingType = 'circle';
      this.settingColValue = '';
      await this.getFiledInfo(this.form.circleForm);
      this.form.circleParams = this.form.circleParams;
      this.form.joinFormParamsValue = this.form.circleValueText == '' ? '' : this.form.circleValueText;
      this.form.joinFormValue = this.form.circleForm;
      this.form.joinFormJoinValue = this.form.circleJoin;
      this.form.joinFormFliterValue = this.form.circleFliter;
      this.form.joinFormMoleculeParamsValue = this.form.circleMoleculeValueText;
      this.circleRealName = this.circleRealName;
      this.form.circleMoleculeJoinOption = this.form.circleMoleculeJoin ? this.form.circleMoleculeJoin : '5';
      this.form.fliterMoleculeCollegeOption = this.form.circleFliterMoleculeCollegeOption;
      this.form.fliterMoleculeDeptOption = this.form.circleFliterMoleculeDeptOption;
      this.form.fliterMoleculeStatusOption = this.form.circleFliterMoleculeStatusOption;
      this.form.fliterMoleculeTimeOption = this.form.circleFliterMoleculeTimeOption;
      this.form.joinFormDenominatorParamsValue = this.form.circleDenominatorValueText;
      this.form.circleDenominatorJoinOption = this.form.circleDenominatorJoin ? this.form.circleDenominatorJoin : '5';
      this.form.fliterDenominatorCollegeOption = this.form.circleFliterDenominatorCollegeOption;
      this.form.fliterDenominatorDeptOption = this.form.circleFliterDenominatorDeptOption;
      this.form.fliterDenominatorStatusOption = this.form.circleFliterDenominatorStatusOption;
      this.form.fliterDenominatorTimeOption = this.form.circleFliterDenominatorTimeOption;
      this.percentage = 0;
      this.percentageValue = this.percentageValue == '表单字段' ? '表单字段' : this.percentageValue;
      this.form.fliterMoleculeOption = this.form.circleFliterOption;
      this.staticPcFormList[6] = this.setStatucFormListObj3(this.form.circleParams, this.form.circleForm, this.form.circleMoleculeValue, this.form.circleDenominatorValue, this.staticId, 5); //this.staticPcFormList[6]['filterRules'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6]['filterRules'], this.form.circleFliterOption);

      this.staticPcFormList[6]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeCollegeOption);
      this.staticPcFormList[6]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeDeptOption);
      this.staticPcFormList[6]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeStatusOption);
      let date = this.setFliterOnlyOptionValue('time', this.staticPcFormList[6]['filterRules'], this.form.circleFliterMoleculeTimeOption);
      this.staticPcFormList[6]['filterRules']['date1'] = date['date1'];
      this.staticPcFormList[6]['filterRules']['date2'] = date['date2'];
      this.staticPcFormList[6]['filterRules2']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorCollegeOption);
      this.staticPcFormList[6]['filterRules2']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorDeptOption);
      this.staticPcFormList[6]['filterRules2']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorStatusOption);
      let date2 = this.setFliterOnlyOptionValue('time', this.staticPcFormList[6]['filterRules2'], this.form.circleFliterDenominatorTimeOption);
      this.staticPcFormList[6]['filterRules2']['date1'] = date2['date1'];
      this.staticPcFormList[6]['filterRules2']['date2'] = date2['date2'];
    },

    async settingTableDataInfo(event) {
      this.settingType = 'table';
      this.settingColValue = '';
      await this.getFiledInfo(this.form.circleForm);
      this.form.joinFormValue = this.form.tableForm;
      this.form.joinFormFliterValue = this.form.tableFliter;
      let array = this.setTableInfoData();
      this.staticPcFormList[7] = this.setStatucTableListObj(this.form.tableJoin, '', this.form.tableForm, array, this.form.tableJoin, this.staticId, 3);
      this.form.fliterTableCollegeOption = this.form.joinTableCollege;
      this.form.fliterTableDeptOption = this.form.joinTableDept;
      this.form.fliterTableStatusOption = this.form.joinTableStatus;
      this.form.fliterTableTimeOption = this.form.joinTableTime;
      this.staticPcFormList[7]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue('college', this.staticPcFormList[7]['filterRules'], this.form.fliterTableCollegeOption);
      this.staticPcFormList[7]['filterRules']['deptId'] = this.setFliterOnlyOptionValue('dept', this.staticPcFormList[7]['filterRules'], this.form.fliterTableDeptOption);
      this.staticPcFormList[7]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue('status', this.staticPcFormList[7]['filterRules'], this.form.fliterTableStatusOption);
      let date2 = this.setFliterOnlyOptionValue('time', this.staticPcFormList[7]['filterRules'], this.form.fliterTableTimeOption);
      this.staticPcFormList[7]['filterRules']['date1'] = date2['date1'];
      this.staticPcFormList[7]['filterRules']['date2'] = date2['date2']; //this.staticPcFormList[7]['groupType'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6]['filterRules'], this.form.circleFliterOption);
    },

    settingSearchDataInfo(event) {
      this.settingType = 'search';
      this.settingColValue = ''; //console.log(this.searchSetStaticForm, this.form.searchStaticTitle);

      let filterType = this.getTilterType(this.searchSetStaticForm);
      this.staticPcFormList[0] = {
        filterType: filterType,
        unitName: this.form.searchStaticTitle,
        statId: this.staticId,
        unitType: 4
      };
    },

    getTitleFliterText(data) {
      let filterType = "";

      if (data == 0) {
        filterType = "time";
      } else if (data == 1) {
        filterType = "dept";
      } else if (data == 2) {
        filterType = "college";
      } else if (data == 3) {
        filterType = "status";
      }

      return filterType;
    },

    getTilterType(type) {
      let filterType = "";

      if (type == "time") {
        filterType = 0;
      } else if (type == "college") {
        filterType = 2;
      } else if (type == "dept") {
        filterType = 1;
      } else if (type == "status") {
        filterType = 3;
      }

      return filterType;
    },

    setFliterOptionValue(type, staticPcForm1, data) {
      let staticPcForm = {};

      if (type == 'time') {
        staticPcForm['date1'] = data && data.length > 0 ? data[0] : '';
        staticPcForm['date2'] = data && data.length > 0 ? data[1] : '';
      } else if (type == 'dept') {
        staticPcForm['deptId'] = JSON.stringify(data);
      } else if (type == 'college') {
        staticPcForm['collegeId'] = JSON.stringify(data);
      } else if (type == 'status') {
        staticPcForm['applyStatus'] = parseInt(data);
      }

      return staticPcForm;
    },

    setFliterOnlyOptionValue(type, staticPcForm1, data) {
      let staticPcForm = {};

      if (type == 'time') {
        staticPcForm['date1'] = data && data.length > 0 ? data[0] : '';
        staticPcForm['date2'] = data && data.length > 0 ? data[1] : '';
      } else if (type == 'dept') {
        staticPcForm = data ? JSON.stringify(data) : "";
      } else if (type == 'college') {
        staticPcForm = data ? JSON.stringify(data) : "";
      } else if (type == 'status') {
        staticPcForm = data ? JSON.stringify(data) : "";
      }

      return staticPcForm;
    },

    setStatucFormListObj(cardFliter, cardParam, cardForm, relaFromField, cardJoin, staticId, unitType) {
      let obj = {
        filterType: this.getTilterType(cardFliter),
        unitName: cardParam,
        filterRules: {},
        relaFormId: cardForm,
        relaFromField1: [relaFromField != '' ? relaFromField : {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        }],
        relaFromField2: [],
        groupRule: cardJoin,
        unitType: unitType,
        statId: staticId
      };
      return obj;
    },

    setStatucFormListObj2(cardFliter, cardParam, cardForm, relaFromField1, relaFromField2, cardJoin, staticId, unitType) {
      let obj = {
        filterType: this.getTilterType(cardFliter),
        unitName: cardParam,
        filterRules: {},
        relaFormId: cardForm,
        relaFromField1: [relaFromField1 != '' ? relaFromField1 : {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        }],
        relaFromField2: relaFromField2,
        groupRule: cardJoin,
        unitType: unitType,
        statId: staticId
      };
      return obj;
    },

    setStatucFormListObj3(unitName, cardForm, relaFromField1, relaFromField2, staticId, unitType) {
      let obj = {
        filterType: '',
        unitName: unitName,
        filterRules: {},
        filterRules2: {},
        relaFormId: cardForm,
        relaFromField1: [relaFromField1 != '' ? relaFromField1 : {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        }],
        relaFromField2: [relaFromField2 != '' ? relaFromField2 : {
          d: true,
          f: "",
          g: 5,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        }],
        groupRule: '',
        unitType: unitType,
        statId: staticId
      };
      return obj;
    },

    setStatucTableListObj(cardFliter, cardParam, cardForm, relaFromField, cardJoin, staticId, unitType) {
      let obj = {
        //filterType: cardFliter,
        unitName: cardParam,
        filterRules: {},
        relaFormId: cardForm,
        relaFromField1: relaFromField,
        groupRule: cardJoin,
        unitType: unitType,
        statId: staticId,
        groupType: cardFliter
      };
      return obj;
    },

    setTableInfoData() {
      let tableCol = this.tableTitleColData;
      let array = [];

      for (let i = 0; i < tableCol.length; i++) {
        //tableCol[i].obj
        array.push({
          d: tableCol[i].obj['d'],
          n: tableCol[i].obj['n'],
          f: tableCol[i].obj['f'],
          g: tableCol[i].obj['g'],
          jd: tableCol[i].obj['jd'] ? tableCol[i].obj['jd'] : '0',
          hz: tableCol[i].obj['hz'] ? tableCol[i].obj['hz'] : '',
          zwf: tableCol[i].obj['zwf']
        });
      }

      return array;
    },

    setBarChartData() {
      let array = this.form.chartYdataArray;
      let legned = [];
      let yData = [];
      let arrayObj = [];
      let yDataNum = [];
      let key = [];

      for (let i = 0; i < array.length; i++) {
        yDataNum.push(10);
      }

      for (let i = 0; i < array.length; i++) {
        legned.push(array[i]['n']);
        arrayObj.push(array[i]);
        yData.push({
          name: array[i]['n'],
          type: 'bar',
          barWidth: 15,
          data: yDataNum
        });
      }

      for (let i = 0; i < 3; i++) {
        key.push(this.form.chartXdataObj['n'] + i);
      }

      this.barDataLegned = legned;
      this.barData = yData;
      this.barDataKey = key;
      this.staticPcFormList[5]['relaFromField2'] = arrayObj;
    },

    addTableRow() {
      let obj = {
        title: '',
        label: '',
        value: '-1',
        fixed: '',
        point: '0',
        format: false,
        relaName: '',
        obj: {
          d: '',
          f: '',
          n: '',
          g: '-1',
          jd: '0',
          zwf: false,
          hz: ''
        }
      };
      this.tableTitleColData.splice(this.tableTitleColData.length, 0, obj);
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    addTableCol(event, index) {
      let obj = {
        title: '',
        label: '',
        value: '-1',
        fixed: '',
        point: '0',
        format: false,
        relaName: '',
        obj: {
          d: '',
          f: '',
          n: '',
          g: '-1',
          jd: '0',
          zwf: false,
          hz: ''
        }
      };
      this.tableTitleColData.splice(index + 1, 0, obj);
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    minsTableCol(event, index) {
      this.tableTitleColData.splice(index, 1);
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    inputCard(event, value) {
      if (value) {
        if (value == 1) {
          this.form.cardParam1 = this.form.cardTitle;
          this.staticPcFormList[1]['unitName'] = this.form.cardTitle;
        } else if (value == 2) {
          this.form.cardParam2 = this.form.cardTitle;
          this.staticPcFormList[2]['unitName'] = this.form.cardTitle;
        } else if (value == 3) {
          this.form.cardParam3 = this.form.cardTitle;
          this.staticPcFormList[3]['unitName'] = this.form.cardTitle;
        } else if (value == 4) {
          this.form.cardParam4 = this.form.cardTitle;
          this.staticPcFormList[4]['unitName'] = this.form.cardTitle;
        }
      } else {
        if (this.settingType == 'search') {
          this.staticPcFormList[0]['unitName'] = this.form.searchStaticTitle;
        } else if (this.settingType == 'bar') {
          this.staticPcFormList[5]['unitName'] = this.form.chartParam;
        } else if (this.settingType == 'circle') {
          this.staticPcFormList[6]['unitName'] = this.form.circleParams;
        } else if (this.settingType == 'table') {
          this.staticPcFormList[7]['unitName'] = "";
        }
      }
    },

    handleSearchChange(data, type) {
      if (type == 1) {
        this.searchSetStaticFormOption = [];
        this.searchSetStaticForm = data;
        this.searchStaticForm = data;
        let filterType = "";

        if (data == "time") {
          filterType = 0;
        } else if (data == "college") {
          filterType = 2;
        } else if (data == "dept") {
          filterType = 1;
        }

        this.staticPcFormList[0]['filterType'] = filterType;
      } else if (type == 2) {
        this.searchStaticForm = data;
      } else if (type == 2) {
        this.searchSetStaticTimeForm = data;
      }
    },

    handleSelect(event, index) {},

    handleSearchSelect(data, type) {
      if (type == 1) {
        this.searchSetStaticFormOption = data;
      } else if (type == 2) {
        this.searchSetStaticFormOption = data;
      }
    },

    handleSelectLabel(item, indexItem, index) {
      item.label = item.label;
      let obj = this.joinFormParamsOptionsArray[indexItem];
      this.tableTitleColData[index]['obj']['n'] = obj.n;
      this.tableTitleColData[index]['obj']['f'] = obj.f;
      this.tableTitleColData[index]['obj']['d'] = obj.d;
      this.tableTitleColData[index]['obj']['hz'] = obj['hz'] ? obj['hz'] : '';
      this.tableTitleColData[index]['obj']['jd'] = obj['jd'] ? obj['jd'] : '0';
      this.tableTitleColData[index]['obj']['zwf'] = obj['zwf'];
      this.$set(this.tableTitleColData[index], 'title', obj.n);
      this.$set(this.tableTitleColData[index], 'label', obj.n);
      let tableCol = this.tableTitleColData;
      let array = [];

      for (let i = 0; i < tableCol.length; i++) {
        array.push(tableCol[i].obj);
      }

      this.staticPcFormList[7]['relaFromField1'] = array;
    },

    handleChangeLabel(data, item, indexItem, index) {
      this.tableTitleColData[index]['obj']['n'] = data;
      this.tableTitleColData[index]['title'] = data;
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    handleChangeFixed(data, item, indexItem, index) {
      this.tableTitleColData[index]['obj']['hz'] = data;
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    handleJoinFormParamsChange(item, data, type) {
      let obj = {};
      obj['d'] = this.joinFormParamsOptionsArray[parseInt(data)]['d'];
      obj['f'] = this.joinFormParamsOptionsArray[parseInt(data)]['f'];
      obj['n'] = this.joinFormParamsOptionsArray[parseInt(data)]['n'];
      this.form.joinFormParamsValue = item.value;
      this.form.joinFormParamsValueObj = obj;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          obj['g'] = parseInt(this.form.cardJoin1);
          obj['zwf'] = this.form.cardJoinFormat1;
          obj['jd'] = parseInt(this.form.cardJoinPoint1);
          obj['hz'] = this.form.cardJoinFixed1;
          this.form.cardValue1 = obj;
          this.form.cardValue1Text = item.value;
          this.staticPcFormList[1]['relaFromField1'] = [obj];
        } else if (this.settingColValue == 2) {
          obj['g'] = parseInt(this.form.cardJoin2);
          obj['zwf'] = this.form.cardJoinFormat2;
          obj['jd'] = parseInt(this.form.cardJoinPoint2);
          obj['hz'] = this.form.cardJoinFixed2;
          this.form.cardValue2 = obj;
          this.form.cardValue2Text = item.value;
          this.staticPcFormList[2]['relaFromField1'] = [obj];
        } else if (this.settingColValue == 3) {
          obj['g'] = parseInt(this.form.cardJoin3);
          obj['zwf'] = this.form.cardJoinFormat3;
          obj['jd'] = parseInt(this.form.cardJoinPoint3);
          obj['hz'] = this.form.cardJoinFixed3;
          this.form.cardValue3 = obj;
          this.form.cardValue3Text = item.value;
          this.staticPcFormList[3]['relaFromField1'] = [obj];
        } else if (this.settingColValue == 4) {
          obj['g'] = parseInt(this.form.cardJoin4);
          obj['zwf'] = this.form.cardJoinFormat4;
          obj['jd'] = parseInt(this.form.cardJoinPoint4);
          obj['hz'] = this.form.cardJoinFixed4;
          this.form.cardValue4 = obj;
          this.form.cardValue4Text = item.value;
          this.staticPcFormList[4]['relaFromField1'] = [obj];
        }
      } else if (this.settingType == 'circle') {
        if (type == 'Molecule') {
          this.form.joinFormMoleculeParamsValue = item.value;
          this.form.joinFormMoleculeParamsValueObj = obj;
          this.form.circleMoleculeValue = obj;
          this.form.circleMoleculeValueText = item.value;
          obj['g'] = parseInt(this.form.circleMoleculeJoinOption);
          this.staticPcFormList[6]['relaFromField1'] = [obj];
          this.percentageValue = this.form.circleRealName != "" ? this.form.circleRealName : obj.n;
        } else if (type == 'Denominator') {
          this.form.joinFormDenominatorParamsValue = item.value;
          this.form.joinFormDenominatorParamsValueObj = obj;
          this.form.circleDenominatorValue = obj;
          this.form.circleDenominatorValueText = item.value;
          obj['g'] = parseInt(this.form.circleMoleculeJoinOption);
          this.staticPcFormList[6]['relaFromField2'] = [obj];
        }

        this.percentage = 0;
      }
    },

    handleJoinFormValue(data) {
      this.form.joinFormValue = data;
      this.form.joinFormParamsValue = "";
      this.form.joinFormParamsValueObj = {};

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardForm1 = data;
          this.staticPcFormList[1]['relaFormId'] = data;
          this.form.cardValue1 = "";
          this.form.cardValue1Text = "";
        } else if (this.settingColValue == 2) {
          this.form.cardForm2 = data;
          this.staticPcFormList[2]['relaFormId'] = data;
          this.form.cardValue2 = "";
          this.form.cardValue2Text = "";
        } else if (this.settingColValue == 3) {
          this.form.cardForm3 = data;
          this.staticPcFormList[3]['relaFormId'] = data;
          this.form.cardValue3 = "";
          this.form.cardValue3Text = "";
        } else if (this.settingColValue == 4) {
          this.form.cardForm4 = data;
          this.staticPcFormList[4]['relaFormId'] = data;
          this.form.cardValue4 = "";
          this.form.cardValue4Text = "";
        }
      } else if (this.settingType == 'circle') {
        this.form.circleForm = data;
        this.staticPcFormList[6]['relaFormId'] = data;
        this.form.circleValue = "";
        this.form.circleValueText = "";
      } else if (this.settingType == 'table') {
        this.form.tableForm = data;
        this.staticPcFormList[7]['relaFormId'] = data;
        this.form.tableValue = "";
        this.form.tableValueText = "";
      } else if (this.settingType == 'bar') {
        this.form.chartForm = data;
        this.staticPcFormList[5]['relaFormId'] = data;
        this.form.chartValue = "";
        this.form.chartValueText = "";
      }

      this.getFiledInfo(data);
    },

    handleXChange(item, data) {
      let obj = {};
      obj['d'] = this.joinFormParamsOptionsArray[data]['d'];
      obj['f'] = this.joinFormParamsOptionsArray[data]['f'];
      obj['n'] = this.joinFormParamsOptionsArray[data]['n'];
      this.form.chartXdata = item.value;
      this.form.chartXdataObj = obj;
      this.staticPcFormList[5]['relaFromField1'] = [obj];
    },

    handleYJoinChange(item, index) {
      this.$set(this.form.chartYdataArray[index], 'g', item['value']);
    },

    handleYChange(item, index) {
      let array = [];
      let arrayObj = [];
      let yData = [];
      let yDataNum = [];
      let arrayF = [];
      let tempData = {
        d: item['extra'],
        n: item['label'],
        f: item['value']
      }; // let sel = inArray(tempData, this.form.chartYdataArray, 'f');
      // if (sel > -1){
      //   this.form.chartYdataArray.splice(sel,1);
      // }else {
      //   this.form.chartYdataArray.push(tempData);
      // }

      this.$set(this.form.chartYdataArray[index], 'd', item['extra']);
      this.$set(this.form.chartYdataArray[index], 'n', item['label']);
      this.$set(this.form.chartYdataArray[index], 'f', item['value']);
      this.setBarChartData();
    },

    handleSelectValue(event, item, index) {
      this.tableTitleColData[index]['obj']['g'] = event;
      item.value = event;
      item.valueText = '';
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    handleFliterChange(data) {
      this.form.joinFormFliterValue = data;
      this.form.fliterOption = [];
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('SelectorDept');

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardFliter1 = data;
          this.staticPcFormList[1]['filterRules'] = {};
          this.staticPcFormList[1]['filterType'] = this.getTilterType(data);
        } else if (this.settingColValue == 2) {
          this.form.cardFliter2 = data;
          this.staticPcFormList[2]['filterRules'] = {};
          this.staticPcFormList[2]['filterType'] = this.getTilterType(data);
        } else if (this.settingColValue == 3) {
          this.form.cardFliter3 = data;
          this.staticPcFormList[3]['filterRules'] = {};
          this.staticPcFormList[3]['filterType'] = this.getTilterType(data);
        } else if (this.settingColValue == 4) {
          this.form.cardFliter4 = data;
          this.staticPcFormList[4]['filterRules'] = {};
          this.staticPcFormList[4]['filterType'] = this.getTilterType(data);
        }
      } else if (this.settingType == 'circle') {
        this.form.circleFliter = data;
        this.staticPcFormList[6]['filterType'] = this.getTilterType(data);
      } else if (this.settingType == 'bar') {
        this.form.chartFliter = data;
        this.staticPcFormList[5]['filterType'] = this.getTilterType(data);

        if (data == 'time') {
          this.barDataKey = ['时间1', '时间2', '更多'];
        } else if (data == 'dept') {
          this.barDataKey = ['部门1', '部门2', '更多'];
        } else if (data == 'college') {
          this.barDataKey = ['学院1', '学院2', '更多'];
        }

        let barData = [];
        let array = [];

        for (let i = 0; i < this.barDataLegned.length; i++) {
          barData.push({
            name: this.barDataLegned[i],
            type: 'bar',
            barWidth: 15,
            data: [10, 10, 10]
          });
        }

        this.barData = barData;
      } else if (this.settingType == 'table') {
        this.form.tableFliter = data;
      }
    },

    handleJoinFormChange(data, type) {
      this.form.joinFormJoinValue = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardJoin1 = data;
          this.staticPcFormList[1]['relaFromField1'][0]['g'] = parseInt(data);
        } else if (this.settingColValue == 2) {
          this.form.cardJoin2 = data;
          this.staticPcFormList[2]['relaFromField1'][0]['g'] = parseInt(data);
        } else if (this.settingColValue == 3) {
          this.form.cardJoin3 = data;
          this.staticPcFormList[3]['relaFromField1'][0]['g'] = parseInt(data);
        } else if (this.settingColValue == 4) {
          this.form.cardJoin4 = data;
          this.staticPcFormList[4]['relaFromField1'][0]['g'] = parseInt(data);
        }
      } else if (this.settingType == 'circle') {
        if (type == 'Molecule') {
          this.form.circleMoleculeJoin = data;
          this.form.circleMoleculeJoinOption = data;
          this.staticPcFormList[6]['relaFromField1'][0]['g'] = parseInt(data);
        } else if (type == 'Denominator') {
          this.form.circleDenominatorJoin = data;
          this.form.circleDenominatorJoinOption = data;
          this.staticPcFormList[6]['relaFromField2'][0]['g'] = parseInt(data);
        }
      } else if (this.settingType == 'table') {
        this.form.tableJoin = data;
        this.staticPcFormList[7]['groupRule'] = data;
      } else if (this.settingType == 'bar') {
        this.form.chartJoin = data;
        this.staticPcFormList[5]['groupRule'] = data;
      }
    },

    handleJoinFormFiextChange(data) {
      this.form.joinFormJoinFixed = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardJoinFixed1 = data;
          this.staticPcFormList[1]['relaFromField1'][0]['hz'] = data;
        } else if (this.settingColValue == 2) {
          this.form.cardJoinFixed2 = data;
          this.staticPcFormList[2]['relaFromField1'][0]['hz'] = data;
        } else if (this.settingColValue == 3) {
          this.form.cardJoinFixed3 = data;
          this.staticPcFormList[3]['relaFromField1'][0]['hz'] = data;
        } else if (this.settingColValue == 4) {
          this.form.cardJoinFixed4 = data;
          this.staticPcFormList[4]['relaFromField1'][0]['hz'] = data;
        }
      }
    },

    handleJoinFormTablePointChange(data, indexItem, index) {
      this.tableTitleColData[index]['obj']['jd'] = data.value;
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    handleJoinFormPointChange(data) {
      this.form.joinFormJoinPoint = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardJoinPoint1 = data;
          this.staticPcFormList[1]['relaFromField1'][0]['jd'] = data;
        } else if (this.settingColValue == 2) {
          this.form.cardJoinPoint2 = data;
          this.staticPcFormList[2]['relaFromField1'][0]['jd'] = data;
        } else if (this.settingColValue == 3) {
          this.form.cardJoinPoint3 = data;
          this.staticPcFormList[3]['relaFromField1'][0]['jd'] = data;
        } else if (this.settingColValue == 4) {
          this.form.cardJoinPoint4 = data;
          this.staticPcFormList[4]['relaFromField1'][0]['jd'] = data;
        }
      }
    },

    handleJoinFormTableFormatChange(data, indexItem, index) {
      this.tableTitleColData[index]['obj']['zwf'] = data.value;
      this.staticPcFormList[7]['relaFromField1'] = this.setTableInfoData();
    },

    handleJoinFormFormatChange(data) {
      this.form.joinFormJoinFormat = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardJoinFormat1 = data;
          this.staticPcFormList[1]['relaFromField1'][0]['zwf'] = data;
        } else if (this.settingColValue == 2) {
          this.form.cardJoinFormat2 = data;
          this.staticPcFormList[2]['relaFromField1'][0]['zwf'] = data;
        } else if (this.settingColValue == 3) {
          this.form.cardJoinFormat3 = data;
          this.staticPcFormList[3]['relaFromField1'][0]['zwf'] = data;
        } else if (this.settingColValue == 4) {
          this.form.cardJoinFormat4 = data;
          this.staticPcFormList[4]['relaFromField1'][0]['zwf'] = data;
        }
      }
    },

    handleJoinTableChange(data) {
      this.form.tableJoin = data;
      this.staticPcFormList[7]['groupType'] = data;
    },

    handleCircleInput(data) {
      this.form.circleRealName = data;
      this.percentageValue = data;
      this.staticPcFormList[6]['relaFromField1'][0]['n'] = data;
    },

    handleBarInput(data, item, index) {
      this.$set(this.form.chartYdataArray[index], 'n', data);
      this.setBarChartData();
    },

    handleSelectCollege(data, type, type2) {
      this.form.fliterCollegeOption = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardFliterCollegeOption1 = data;
          this.staticPcFormList[1]['filterRules']['collegeId'] = "";
          this.staticPcFormList[1]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[1], data);
        } else if (this.settingColValue == 2) {
          this.form.cardFliterCollegeOption2 = data;
          this.staticPcFormList[2]['filterRules']['collegeId'] = "";
          this.staticPcFormList[2]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[2], data);
        } else if (this.settingColValue == 3) {
          this.form.cardFliterCollegeOption3 = data;
          this.staticPcFormList[3]['filterRules']['collegeId'] = "";
          this.staticPcFormList[3]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[3], data);
        } else if (this.settingColValue == 4) {
          this.form.cardFliterCollegeOption4 = data;
          this.staticPcFormList[4]['filterRules']['collegeId'] = "";
          this.staticPcFormList[4]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[4], data);
        }
      } else if (this.settingType == 'circle') {
        if (type2 == 'Molecule') {
          this.form.circleFliterMoleculeCollegeOption = data;
          this.form.fliterMoleculeCollegeOption = data;
          this.staticPcFormList[6]['filterRules']['collegeId'] = "";
          this.staticPcFormList[6]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6], data);
        } else if (type2 == 'Denominator') {
          this.form.circleFliterDenominatorCollegeOption = data;
          this.form.fliterDenominatorCollegeOption = data;
          this.staticPcFormList[6]['filterRules2']['collegeId'] = "";
          this.staticPcFormList[6]['filterRules2']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6], data);
        }
      } else if (this.settingType == 'bar') {
        this.form.fliterChartCollegeOption = data;
        this.form.chartXFliterCollege = data;
        this.staticPcFormList[5]['filterRules']['collegeId'] = "";
        this.staticPcFormList[5]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[5], data);
      } else if (this.settingType == 'table') {
        this.form.fliterTableCollegeOption = data;
        this.form.joinTableCollege = data;
        this.staticPcFormList[7]['filterRules']['collegeId'] = "";
        this.staticPcFormList[7]['filterRules']['collegeId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[7], data);
      }
    },

    handleSelectDept(data, type, type2) {
      this.form.fliterDeptOption = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardFliterDeptOption1 = data;
          this.staticPcFormList[1]['filterRules']['deptId'] = "";
          this.staticPcFormList[1]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[1], data);
        } else if (this.settingColValue == 2) {
          this.form.cardFliterDeptOption2 = data;
          this.staticPcFormList[2]['filterRules']['deptId'] = "";
          this.staticPcFormList[2]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[2], data);
        } else if (this.settingColValue == 3) {
          this.form.cardFliterDeptOption3 = data;
          this.staticPcFormList[3]['filterRules']['deptId'] = "";
          this.staticPcFormList[3]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[3], data);
        } else if (this.settingColValue == 4) {
          this.form.cardFliterDeptOption4 = data;
          this.staticPcFormList[4]['filterRules']['deptId'] = "";
          this.staticPcFormList[4]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[4], data);
        }
      } else if (this.settingType == 'circle') {
        if (type2 == 'Molecule') {
          this.form.circleFliterMoleculeDeptOption = data;
          this.form.fliterMoleculeDeptOption = data;
          this.staticPcFormList[6]['filterRules']['deptId'] = "";
          this.staticPcFormList[6]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6], data);
        } else if (type2 == 'Denominator') {
          this.form.circleFliterDenominatorDeptOption = data;
          this.form.fliterDenominatorDeptOption = data;
          this.staticPcFormList[6]['filterRules2']['deptId'] = "";
          this.staticPcFormList[6]['filterRules2']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6], data);
        }
      } else if (this.settingType == 'bar') {
        this.form.fliterChartDeptOption = data;
        this.form.chartXFliterDept = data;
        this.staticPcFormList[5]['filterRules']['deptId'] = "";
        this.staticPcFormList[5]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[5], data);
      } else if (this.settingType == 'table') {
        this.form.fliterTableDeptOption = data;
        this.form.joinTableDept = data;
        this.staticPcFormList[7]['filterRules']['deptId'] = "";
        this.staticPcFormList[7]['filterRules']['deptId'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[7], data);
      }
    },

    handleSelectStatus(data, type, type2) {
      this.form.fliterStatusOption = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardFliterStatusOption1 = data;
          this.staticPcFormList[1]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[1]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[1], data);
        } else if (this.settingColValue == 2) {
          this.form.cardFliterStatusOption2 = data;
          this.staticPcFormList[2]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[2]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[2], data);
        } else if (this.settingColValue == 3) {
          this.form.cardFliterStatusOption3 = data;
          this.staticPcFormList[3]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[3]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[3], data);
        } else if (this.settingColValue == 4) {
          this.form.cardFliterStatusOption4 = data;
          this.staticPcFormList[4]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[4]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[4], data);
        }
      } else if (this.settingType == 'circle') {
        if (type2 == 'Molecule') {
          this.form.circleFliterMoleculeStatusOption = data;
          this.form.fliterMoleculeStatusOption = data;
          this.staticPcFormList[6]['filterRules']['applyStatus'] = "";
          this.staticPcFormList[6]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6], data);
        } else if (type2 == 'Denominator') {
          this.form.circleFliterDenominatorStatusOption = data;
          this.form.fliterDenominatorStatusOption = data;
          this.staticPcFormList[6]['filterRules2']['applyStatus'] = "";
          this.staticPcFormList[6]['filterRules2']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[6], data);
        }
      } else if (this.settingType == 'bar') {
        this.form.fliterChartStatusOption = data;
        this.form.chartXFliterStatus = data;
        this.staticPcFormList[5]['filterRules']['applyStatus'] = "";
        this.staticPcFormList[5]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[5], data);
      } else if (this.settingType == 'table') {
        this.form.fliterTableStatusOption = data;
        this.form.joinTableStatus = data;
        this.staticPcFormList[7]['filterRules']['applyStatus'] = "";
        this.staticPcFormList[7]['filterRules']['applyStatus'] = this.setFliterOnlyOptionValue(type, this.staticPcFormList[7], data);
      }
    },

    handleSelectFliter(data, type, type2) {
      this.form.fliterTimeOption = data ? data : [];

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardFliterTimeOption1 = data ? data : [];
          this.staticPcFormList[1]['filterRules']['date1'] = "";
          this.staticPcFormList[1]['filterRules']['date2'] = "";
          let date = this.setFliterOptionValue(type, this.staticPcFormList[1], data);
          this.staticPcFormList[1]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[1]['filterRules']['date2'] = date['date2'];
        } else if (this.settingColValue == 2) {
          this.form.cardFliterTimeOption2 = data ? data : [];
          this.staticPcFormList[2]['filterRules']['date1'] = "";
          this.staticPcFormList[2]['filterRules']['date2'] = "";
          let date = this.setFliterOptionValue(type, this.staticPcFormList[1], data);
          this.staticPcFormList[2]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[2]['filterRules']['date2'] = date['date2'];
        } else if (this.settingColValue == 3) {
          this.form.cardFliterTimeOption3 = data ? data : [];
          this.staticPcFormList[3]['filterRules']['date1'] = "";
          this.staticPcFormList[3]['filterRules']['date2'] = "";
          let date = this.setFliterOptionValue(type, this.staticPcFormList[1], data);
          this.staticPcFormList[3]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[3]['filterRules']['date2'] = date['date2'];
        } else if (this.settingColValue == 4) {
          this.form.cardFliterTimeOption4 = data ? data : [];
          this.staticPcFormList[4]['filterRules']['date1'] = "";
          this.staticPcFormList[4]['filterRules']['date2'] = "";
          let date = this.setFliterOptionValue(type, this.staticPcFormList[1], data);
          this.staticPcFormList[4]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[4]['filterRules']['date2'] = date['date2'];
        }
      } else if (this.settingType == 'circle') {
        if (type2 == 'Molecule') {
          this.form.circleFliterMoleculeTimeOption = data ? data : [];
          this.form.fliterMoleculeTimeOption = data ? data : [];
          let date = this.setFliterOptionValue(type, this.staticPcFormList[6], data);
          this.staticPcFormList[6]['filterRules']['date1'] = date['date1'];
          this.staticPcFormList[6]['filterRules']['date2'] = date['date2'];
        } else if (type2 == 'Denominator') {
          this.form.circleFliterDenominatorTimeOption = data ? data : [];
          this.form.fliterDenominatorTimeOption = data ? data : [];
          let date = this.setFliterOptionValue(type, this.staticPcFormList[6], data);
          this.staticPcFormList[6]['filterRules2']['date1'] = date['date1'];
          this.staticPcFormList[6]['filterRules2']['date2'] = date['date2'];
        }
      } else if (this.settingType == 'bar') {
        this.form.fliterChartTimeOption = data ? data : [];
        this.form.chartXFliterTime = data ? data : [];
        let date = this.setFliterOptionValue(type, this.staticPcFormList[5], data);
        this.staticPcFormList[5]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[5]['filterRules']['date2'] = date['date2'];
      } else if (this.settingType == 'table') {
        this.form.fliterTableTimeOption = data ? data : [];
        this.form.joinTableTime = data ? data : [];
        let date = this.setFliterOptionValue(type, this.staticPcFormList[7], data);
        this.staticPcFormList[7]['filterRules']['date1'] = date['date1'];
        this.staticPcFormList[7]['filterRules']['date2'] = date['date2'];
      }
    },

    handleSelectTime(data) {
      this.form.fliterOption = data;

      if (this.settingType == 'card') {
        if (this.settingColValue == 1) {
          this.form.cardFliterOption1 = data;
          this.staticPcFormList[1]['filterRules'] = {};
          this.staticPcFormList[1]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter1, this.staticPcFormList[1], data);
        } else if (this.settingColValue == 2) {
          this.form.cardFliterOption2 = data;
          this.staticPcFormList[2]['filterRules'] = {};
          this.staticPcFormList[2]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter2, this.staticPcFormList[2], data);
        } else if (this.settingColValue == 3) {
          this.form.cardFliterOption3 = data;
          this.staticPcFormList[3]['filterRules'] = {};
          this.staticPcFormList[3]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter3, this.staticPcFormList[3], data);
        } else if (this.settingColValue == 4) {
          this.form.cardFliterOption4 = data;
          this.staticPcFormList[4]['filterRules'] = {};
          this.staticPcFormList[4]['filterRules'] = this.setFliterOptionValue(this.form.cardFliter4, this.staticPcFormList[4], data);
        }
      } else if (this.settingType == 'circle') {
        this.form.circleFliterOption = data;
        this.staticPcFormList[6]['filterRules'] = {};
        this.staticPcFormList[6]['filterRules'] = this.setFliterOptionValue(this.form.circleFliter, this.staticPcFormList[6], data);
      } else if (this.settingType == 'bar') {
        this.form.chartFliterOption = data;
        this.staticPcFormList[5]['filterRules'] = {};
        this.staticPcFormList[5]['filterRules'] = this.setFliterOptionValue(this.form.chartFliter, this.staticPcFormList[5], data);
      } else if (this.settingType == 'table') {
        this.form.tableFliterOption = data;
        this.staticPcFormList[7]['filterRules'] = {};
        this.staticPcFormList[7]['filterRules'] = this.setFliterOptionValue(this.form.tableFliter, this.staticPcFormList[7], data);
      }
    },

    closeYdata(event, index) {
      this.form.chartYdataArray.splice(index, 1);
      this.setBarChartData();
    },

    addYdata() {
      let obj = {
        d: '',
        n: '',
        f: '',
        g: '5'
      };
      this.form.chartYdataArray.splice(this.form.chartYdataArray.length, 0, obj);
      this.setBarChartData();
    },

    closeDialog() {
      this.h5Dialog = false;
    },

    closePcDialog() {
      this.settingColValue = '';
      this.settingType = '';
      this.searchSetStaticForm = "";
      this.percentage = 0;
      this.percentageText = '内容';
      this.percentageValue = '表单字段';
      this.barDataLegned = ['类型1', '类型2', '类型3'], this.barDataKey = ['字段1', '字段2', '字段3'];
      this.tableTitleColData = [{
        title: '',
        label: '',
        value: '',
        param: '',
        valueText: "",
        fixed: '',
        point: '',
        format: '',
        obj: {
          d: '',
          f: '',
          n: '',
          g: '-1',
          zwf: false,
          hz: '',
          jd: '0'
        }
      }];
      this.barData = [{
        name: '类型1',
        type: 'bar',
        barWidth: 15,
        data: [10, 10, 10]
      }, {
        name: '类型2',
        type: 'bar',
        barWidth: 15,
        data: [10, 10, 10]
      }, {
        name: '类型3',
        type: 'bar',
        barWidth: 15,
        data: [10, 10, 10]
      }];
      this.staticPcFormList = [{
        filterType: '',
        unitName: '',
        statId: '',
        unitType: '4'
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }, {
        filterType: '',
        unitName: '',
        filterRules: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        filterRules2: {
          applyStatus: "",
          collegeId: "",
          date1: "",
          date2: "",
          deptId: ""
        },
        relaFormId: '',
        relaFromField1: {
          d: true,
          f: "",
          g: 0,
          n: "",
          hz: "",
          jd: 0,
          zwf: false
        },
        groupRule: '-1',
        unitType: '0',
        statId: ''
      }];
      this.form = {
        searchStaticTitle: '筛选条件',
        cardParam1: '字段名称',
        cardParam2: '字段名称',
        cardParam3: '字段名称',
        cardParam4: '字段名称',
        cardValue1: '',
        cardValue1Text: '',
        cardValue2: '',
        cardValue2Text: '',
        cardValue3: '',
        cardValue3Text: '',
        cardValue4: '',
        cardValue4Text: '',
        cardForm1: '',
        cardForm2: '',
        cardForm3: '',
        cardForm4: '',
        cardJoin1: '0',
        cardJoinFixed1: '',
        cardJoinPoint1: '0',
        cardJoinFormat1: false,
        cardJoin2: '0',
        cardJoinFixed2: '',
        cardJoinPoint: '0',
        cardJoinFormat2: false,
        cardJoin3: '0',
        cardJoinFixed3: '',
        cardJoinPoint3: '0',
        cardJoinFormat3: false,
        cardJoin4: '0',
        cardJoinFixed4: '',
        cardJoinPoint4: '0',
        cardJoinFormat4: false,
        cardFliter1: '',
        cardFliter2: '',
        cardFliter3: '',
        cardFliter4: '',
        cardFliterOption1: '',
        cardFliterCollegeOption1: '',
        cardFliterDeptOption1: '',
        cardFliterStatusOption1: '',
        cardFliterTimeOption1: '',
        cardFliterOption2: '',
        cardFliterCollegeOption2: '',
        cardFliterDeptOption2: '',
        cardFliterStatusOption2: '',
        cardFliterTimeOption2: '',
        cardFliterOption3: '',
        cardFliterCollegeOption3: '',
        cardFliterDeptOption3: '',
        cardFliterStatusOption3: '',
        cardFliterTimeOption3: '',
        cardFliterOption4: '',
        cardFliterCollegeOption4: '',
        cardFliterDeptOption4: '',
        cardFliterStatusOption4: '',
        cardFliterTimeOption4: '',
        cardFliterStartTime1: '',
        cardFliterEndTime1: '',
        cardFliterStartTime2: '',
        cardFliterEndTime2: '',
        cardFliterStartTime3: '',
        cardFliterEndTime3: '',
        cardFliterStartTime4: '',
        cardFliterEndTime4: '',
        chartParam: '字段名称',
        chartValue: '',
        chartValueText: '',
        chartJoin: '',
        chartForm: '',
        chartFliter: '',
        chartFliterOption: '',
        chartXdata: '',
        chartXdataObj: '',
        chartXFliterCollege: [],
        chartXFliterDept: [],
        chartXFliterStatus: [],
        chartXFliterTime: [],
        chartYdata: '',
        chartYdataObj: '',
        chartYdataArray: [],
        cardTitle: '',
        cardValue: '',
        circleParams: '字段名称',
        circleValue: 0,
        circleValueText: '',
        circleMoleculeValue: '',
        circleMoleculeValueText: '',
        circleDenominatorValue: '',
        circleDenominatorValueText: '',
        circleForm: '',
        circleFliter: '',
        circleFliterOption: '',
        circleFliterMoleculeCollegeOption: [],
        circleFliterMoleculeDeptOption: [],
        circleFliterMoleculeStatusOption: [],
        circleFliterMoleculeTimeOption: [],
        circleFliterMoleculeStartTime: '',
        circleFliterMoleculeEndTime: '',
        circleFliterDenominatorCollegeOption: [],
        circleFliterDenominatorDeptOption: [],
        circleFliterDenominatorStatusOption: [],
        circleFliterDenominatorTimeOption: [],
        circleFliterDenominatorStartTime: '',
        circleFliterDenominatorEndTime: '',
        circleFliterStartTime: '',
        circleFliterEndTime: '',
        circleJoin: '-1',
        circleRealName: '',
        circleMoleculeJoin: '5',
        circleDenominatorJoin: '5',
        circleDenominatorJoinOption: '5',
        circleMoleculeJoinOption: '5',
        tableForm: '',
        tableValue: '',
        tableValueText: '',
        tableFliter: '',
        tableFliterOption: '',
        tableFliterStartTime: '',
        tableFliterEndTime: '',
        tableJoin: '',
        joinFormValue: '',
        joinFormParamsValue: '',
        joinFormParamsValueObj: {},
        joinFormFliterValue: '',
        joinFormJoinValue: '',
        joinFormJoinFixed: '',
        joinFormJoinPoint: '0',
        joinFormJoinFormat: '0',
        joinFormXValue: '',
        joinFormYValue: [],
        fliterOption: [],
        fliterCollegeOption: [],
        fliterDeptOption: [],
        fliterStatusOption: [],
        fliterTimeOption: [],
        fliterOptionStartTime: '',
        fliterOptionEndTime: '',
        joinTableJoinValue: [],
        joinTableCollege: [],
        joinTableDept: [],
        joinTableStatus: [],
        joinTableTime: [],
        joinFormMoleculeParamsValue: '',
        joinFormMoleculeParamsValueObj: {},
        joinFormDenominatorParamsValue: '',
        joinFormDenominatorParamsValueObj: {},
        fliterMoleculeCollegeOption: [],
        fliterMoleculeDeptOption: [],
        fliterMoleculeStatusOption: [],
        fliterMoleculeTimeOption: [],
        fliterDenominatorCollegeOption: [],
        fliterDenominatorDeptOption: [],
        fliterDenominatorStatusOption: [],
        fliterDenominatorTimeOption: [],
        fliterChartCollegeOption: [],
        fliterChartDeptOption: [],
        fliterChartStatusOption: [],
        fliterChartTimeOption: [],
        fliterTableCollegeOption: [],
        fliterTableDeptOption: [],
        fliterTableStatusOption: [],
        fliterTableTimeOption: []
      };
    }

  }
});
// CONCATENATED MODULE: ./components/form/PCStaticTemplate.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_PCStaticTemplatevue_type_script_lang_js_ = (PCStaticTemplatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/PCStaticTemplate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(291)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_PCStaticTemplatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b9b4353a",
  "25e071b6"
  
)

/* harmony default export */ var PCStaticTemplate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySelect: __webpack_require__(147).default,MyCascader: __webpack_require__(151).default,BarChart: __webpack_require__(184).default,HBarChart: __webpack_require__(216).default,DialogNormal: __webpack_require__(28).default})


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplate_vue_vue_type_style_index_0_id_b9b4353a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplate_vue_vue_type_style_index_0_id_b9b4353a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplate_vue_vue_type_style_index_0_id_b9b4353a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplate_vue_vue_type_style_index_0_id_b9b4353a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplate_vue_vue_type_style_index_0_id_b9b4353a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplate_vue_vue_type_style_index_0_id_b9b4353a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-b9b4353a]{box-shadow:0 0 4px #dcdfe6;border-right:1px solid #dcdfe6}.form-set-left[data-v-b9b4353a]{margin-right:330px}.form-set-left[data-v-b9b4353a],.form-set-right[data-v-b9b4353a]{background:#f8f8f8;height:100%;box-shadow:0 0 4px #dcdfe6}.form-set-right[data-v-b9b4353a]{width:300px}.form-card-content[data-v-b9b4353a]{position:relative;margin-top:15%}.sel-card-active[data-v-b9b4353a]{box-shadow:0 0 4px #909399}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      staticRules: {
        name: [{
          required: true,
          message: this.$t("请输入名称"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validatenall1_20Reg,
          trigger: 'blur'
        }],
        type: [{
          required: true,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }],
        collegeAndDeptType: [{
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

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(596);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3a4f81a0", content, true, context)
};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(598);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("333b99f6", content, true, context)
};

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/PCStaticTemplateShow.vue?vue&type=template&id=caf375f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dialogLoading),expression:"dialogLoading"}]},[_vm._ssrNode("<div class=\"form-set-main\" data-v-caf375f6>","</div>",[_vm._ssrNode("<div class=\"margin-bottom-5 layout-inline padding-lr-10 margin-top-5\" data-v-caf375f6>","</div>",[_vm._ssrNode("<span class=\"layout-item\" data-v-caf375f6>","</span>",[(this.fliterType == 2)?_c('my-cascader',{ref:"SelectorCollege",staticClass:"layout-item",attrs:{"collapse-tags":true,"size":"small","width-style":"300","props":{multiple: true},"sel-value":_vm.fliterOption,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm.handleSelectTime($event)}}}):_vm._e(),_vm._ssrNode(" "),(this.fliterType == 1)?_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"collapse-tags":true,"size":"small","width-style":"300","props":{multiple: true},"sel-value":_vm.fliterOption,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleSelectTime($event)}}}):_vm._e(),_vm._ssrNode(" "),_c('el-date-picker',{staticStyle:{"width":"240px"},attrs:{"size":"small","type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},on:{"change":_vm.handleTime},model:{value:(_vm.searchData),callback:function ($$v) {_vm.searchData=$$v},expression:"searchData"}}),_vm._ssrNode(" "),_c('el-button',{attrs:{"size":"small","type":"success"},on:{"click":_vm.search}},[_vm._v(_vm._s(_vm.$t("搜索")))])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"detail-card font-size-12 padding-lr-10 padding-tb-10\""+(_vm._ssrStyle({"overflow-y":"auto"},_vm.drawHeight6, null))+" data-v-caf375f6>","</div>",[_vm._ssrNode("<div style=\"height: 140px\" data-v-caf375f6>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.cardLabel1 != '' ? _vm.cardLabel1 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                  "+_vm._s(_vm.cardValue1 !== '' ? _vm.cardValue1 : '--')+"\n                ")])])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.cardLabel2 != '' ? _vm.cardLabel2 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                  "+_vm._s(_vm.cardValue2 !== '' ? _vm.cardValue2 : '--')+"\n                ")])])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.cardLabel3 != '' ? _vm.cardLabel3 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                  "+_vm._s(_vm.cardValue3 !== '' ? _vm.cardValue3 : '--')+"\n                ")])])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticStyle:{"height":"140px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-desktop"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.cardLabel4 != '' ? _vm.cardLabel4 : '--'))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"form-card-content"},[_vm._v("\n                  "+_vm._s(_vm.cardValue4 !== '' ? _vm.cardValue4 : '--')+"\n                ")])])])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-caf375f6>","</div>",[_vm._ssrNode("<div style=\"height: 300px\" data-v-caf375f6>","</div>",[_c('el-row',{attrs:{"gutter":8}},[_c('el-col',{attrs:{"span":18}},[_c('el-card',{staticStyle:{"height":"300px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-bar-chart"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.chartParam))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative","height":"260px"}},[_c('bar-chart',{attrs:{"chart-id":"barId","data-legned":_vm.barDataLegned,"data-key":_vm.barDataKey,"data":_vm.barData}})],1)])],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticStyle:{"height":"300px"},attrs:{"body-style":{padding: '10px'}}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"header"},slot:"header"},[_c('span',[_c('i',{staticClass:"fa fa-pie-chart"})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.circleParams))])]),_vm._v(" "),_c('div',{staticClass:"color-muted text-center",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"text-center"},[_c('el-progress',{attrs:{"type":"dashboard","show-text":false,"width":160,"percentage":_vm.circleValue}})],1),_vm._v(" "),_c('div',{staticClass:"text-center font-size-12 font-bold",staticStyle:{"position":"relative","top":"-90px"}},[_c('span',[_vm._v(_vm._s(_vm.circleValueText != "" ? _vm.circleValueText : '--'))])]),_vm._v(" "),_c('div',{staticClass:"text-center color-muted",staticStyle:{"position":"relative","top":"-10px"}},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.circleLabel != "" ? _vm.circleLabel : '--'))])])])])])])],1)],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-20\" data-v-caf375f6>","</div>",[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},_vm._l((_vm.tableFData),function(item,index){return _c('el-table-column',{key:index,attrs:{"align":"center","label":item.n},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row[item.f+"DateResult"]))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row[item.f+"DateResult"]))])])])]}}],null,true)})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"layout-right-footer text-right\" data-v-caf375f6>","</div>",[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],2)],2),_vm._ssrNode(" <div class=\"moon-clearfix\" data-v-caf375f6></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/PCStaticTemplateShow.vue?vue&type=template&id=caf375f6&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/charts/BarChart.vue + 4 modules
var BarChart = __webpack_require__(184);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/PCStaticTemplateShow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var PCStaticTemplateShowvue_type_script_lang_js_ = ({
  name: 'pcStaticTemplateShow',
  components: {
    DialogNormal: DialogNormal["default"],
    MyCascader: MyCascader["default"],
    BarChart: BarChart["default"]
  },
  mixins: [mixins["a" /* default */]],
  props: {
    staticId: String,
    staticPcFormData: Array
  },
  computed: {},

  data() {
    return {
      dialogLoading: false,
      searchDataFliter: [],
      searchTime: [],
      searchData: [],
      formList: [],
      formValue: '',
      fliterType: '',
      cardLabel1: '',
      cardValue1: '',
      cardLabel2: '',
      cardValue2: '',
      cardLabel3: '',
      cardValue3: '',
      cardLabel4: '',
      cardValue4: '',
      circleParams: '',
      circleLabel: '',
      circleValue: 0,
      circleValueText: '',
      chartParam: '',
      tableParams: '',
      barLabel: '',
      barValue: '',
      barDataLegned: [],
      barDataKey: [],
      barData: [],
      tableData: [],
      tableTitleColData: [],
      tableFData: [],
      fliterOption: []
    };
  },

  created() {
    this.getDeptInfo(2);
    this.getCollegeInfo(4); //this.initForm();
  },

  methods: {
    initAsync() {
      this.initFormDetail(this.staticId);
    },

    initForm() {
      let params = {
        page: 1,
        num: 9999
      };
      this.$axios.get(url["a" /* common */].static_appinfo_form_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.list.length; i++) {
            array.push({
              label: res.data.data.list[i].stat_name,
              value: res.data.data.list[i].id + ""
            });
          }

          if (array.length > 0) {
            this.formValue = res.data.data.list[0].id + "";
            this.initFormDetail(res.data.data.list[0].id);
          }

          this.formList = array;
        }
      });
    },

    initFormDetail(id) {
      let params = {
        id: id
      };
      this.dialogLoading = true;
      this.$axios.get(url["a" /* common */].static_appinfo_form_detail, {
        params: params,
        loading: false
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.unitList.length; i++) {
            array.push({
              id: res.data.data.unitList[i].id,
              relaFromField1: res.data.data.unitList[i].relaFromField1,
              relaFromField2: res.data.data.unitList[i].relaFromField2,
              filterType: res.data.data.unitList[i].filterType,
              filterRules: res.data.data.unitList[i].filterRules,
              unitName: res.data.data.unitList[i].unitName
            });
          }

          this.fliterType = res.data.data.unitList[0].filterType;
          this.initData(array[1].id, 1, array);
          this.initData(array[2].id, 2, array);
          this.initData(array[3].id, 3, array);
          this.initData(array[4].id, 4, array);
          this.initData(array[6].id, 5, array);
          this.initData(array[5].id, 6, array);
          this.initData(array[7].id, 7, array);
          this.dialogLoading = false;
        }
      });
    },

    initData(id, type, array) {
      let params = {
        unitId: id
      };

      if (type == 7) {
        params['page'] = this.page;
        params['num'] = this.num;
      }

      if (this.searchData && this.searchData.length > 0) {
        params['date1'] = this.searchData[0];
        params['date2'] = this.searchData[1];
      }

      if (this.fliterType == 1 && this.fliterOption.length > 0) {
        params['deptId'] = this.fliterOption.length > 0 ? JSON.stringify(this.fliterOption) : "";
      } else if (this.fliterType == 2 && this.fliterOption.length > 0) {
        params['collegeId'] = this.fliterOption.length > 0 ? JSON.stringify(this.fliterOption) : "";
      }

      this.$axios.get(url["a" /* common */].static_appinfo_form_get, {
        params: params,
        loading: false
      }).then(res => {
        if (res.data.data) {
          switch (type) {
            case 1:
              {
                let obj = JSON.parse(array[1].relaFromField1);
                let filed = array[1].unitName;
                this.cardLabel1 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue1 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 2:
              {
                let obj = JSON.parse(array[2].relaFromField1);
                let filed = array[2].unitName;
                this.cardLabel2 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue2 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 3:
              {
                let obj = JSON.parse(array[3].relaFromField1);
                let filed = array[3].unitName;
                this.cardLabel3 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue3 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 4:
              {
                let obj = JSON.parse(array[4].relaFromField1);
                let filed = array[4].unitName;
                this.cardLabel4 = filed.length > 15 ? filed.substr(0, 14) + "..." : filed;
                this.cardValue4 = res.data.data.dataResult != null ? res.data.data.dataResult : "--";
                break;
              }

            case 5:
              {
                let obj = JSON.parse(array[6].relaFromField1);
                let filed = obj[0].n;
                let rate = res.data.data.rate != null ? parseInt(res.data.data.rate) : 0;
                this.circleLabel = filed.length > 6 ? filed.substr(0, 5) + "..." : filed;
                this.circleValue = rate;
                this.circleValueText = res.data.data.rate != null ? res.data.data.rate + "%" : "--";
                this.circleParams = array[6].unitName;
                break;
              }

            case 6:
              {
                let data = res.data.data;
                let legned = array[5].relaFromField2 ? JSON.parse(array[5].relaFromField2) : [];
                let filterType = array[5].filterType;
                let legnedArray = [];
                let key = [];
                let dataF = [];
                let dataValue = [];

                for (let i = 0; i < legned.length; i++) {
                  legnedArray.push(legned[i].n);
                  dataF.push({
                    n: legned[i].n,
                    f: legned[i].f
                  });
                }

                for (let i = 0; i < data.length; i++) {
                  key.push(data[i]._name);
                  let yData = [];
                  let yDataObj = [];
                  let dataObj = {};

                  for (let item in data[i]) {
                    for (let z = 0; z < dataF.length; z++) {
                      if (dataF[z].f + "DateResult" == item) {
                        let value = data[i][item];
                        let name = dataF[z].n;
                        yData.push(value);
                        dataObj = {
                          name: name,
                          type: 'bar',
                          barWidth: 15,
                          data: []
                        };
                        yDataObj.push(dataObj);
                      }
                    }
                  }

                  dataObj['data'] = yData;

                  for (let k = 0; k < yDataObj.length; k++) {
                    yDataObj[k]['data'] = yData;
                  }

                  dataValue = yDataObj;
                }

                this.barData = dataValue;
                this.barDataKey = key;
                this.barDataLegned = legnedArray;
                this.chartParam = array[5].unitName;
                break;
              }

            case 7:
              {
                let data = res.data.data.list;
                let relaFromField = array[7].relaFromField1 ? JSON.parse(array[7].relaFromField1) : [];
                let dataF = [];
                let dataArray = [];

                for (let i = 0; i < relaFromField.length; i++) {
                  dataF.push({
                    n: relaFromField[i].n,
                    f: relaFromField[i].f
                  });
                }

                this.tableFData = dataF;

                for (let j = 0; j < data.length; j++) {
                  for (let item in data[j]) {
                    for (let i = 0; i < dataF.length; i++) {
                      if (dataF[i]['f'] + "DateResult" == item) {
                        data[j]['_label'] = dataF[i]['n'];
                        data[j]['value'] = data[j][item];
                        break;
                      }
                    }
                  }
                }

                this.tableParams = array[7].unitName;
                this.tableData = data;
                this.tableTitleColData = data;
                this.total = res.data.data.total;
                this.num = res.data.data.num;
                this.page = res.data.data.currentPage;
                break;
              }

            default:
              break;
          }
        }
      });
    },

    sizeChange(event) {
      this.page = 1;
      this.num = event;
      this.initFormDetail(this.staticId);
    },

    currentPage(event) {
      this.page = event;
      this.initFormDetail(this.staticId);
    },

    jumpPage(data) {
      this.page = data;
      this.initFormDetail(this.staticId);
    },

    dropdownItem(event) {
      this.formValue = event;
    },

    handleSelectTime(data) {
      this.fliterOption = data;
    },

    handleTime(data) {
      this.searchData = data;
    },

    search() {
      this.page = 1;
      this.initFormDetail(this.staticId);
    },

    closeDialog() {
      this.dialogLoading = false;
      this.fliterType = '';
      this.cardLabel1 = '';
      this.cardValue1 = '';
      this.cardLabel2 = '';
      this.cardValue2 = '';
      this.cardLabel3 = '';
      this.cardValue3 = '';
      this.cardLabel4 = '';
      this.cardValue4 = '';
      this.circleParams = '';
      this.circleLabel = '';
      this.circleValue = 0;
      this.circleValueText = '';
      this.chartParam = '';
      this.tableParams = '';
      this.barLabel = '';
      this.barValue = '';
      this.barDataLegned = [];
      this.barDataKey = [];
      this.barData = [];
      this.page = 1;
      this.num = 20;
      this.total = 0;
      this.tableData = [];
      this.tableTitleColData = [];
      this.tableFData = [];
      this.fliterOption = [];
    }

  }
});
// CONCATENATED MODULE: ./components/form/PCStaticTemplateShow.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_PCStaticTemplateShowvue_type_script_lang_js_ = (PCStaticTemplateShowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/PCStaticTemplateShow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(595)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_PCStaticTemplateShowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "caf375f6",
  "e3dfa95a"
  
)

/* harmony default export */ var PCStaticTemplateShow = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,BarChart: __webpack_require__(184).default,MyPagination: __webpack_require__(27).default})


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplateShow_vue_vue_type_style_index_0_id_caf375f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplateShow_vue_vue_type_style_index_0_id_caf375f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplateShow_vue_vue_type_style_index_0_id_caf375f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplateShow_vue_vue_type_style_index_0_id_caf375f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplateShow_vue_vue_type_style_index_0_id_caf375f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCStaticTemplateShow_vue_vue_type_style_index_0_id_caf375f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-caf375f6]{box-shadow:0 0 4px #dcdfe6;border-right:1px solid #dcdfe6}.form-set-left[data-v-caf375f6]{margin-right:330px}.form-set-left[data-v-caf375f6],.form-set-right[data-v-caf375f6]{background:#f8f8f8;height:100%;box-shadow:0 0 4px #dcdfe6}.form-set-right[data-v-caf375f6]{width:300px}.form-card-content[data-v-caf375f6]{position:relative;margin-top:12%;font-size:14px;font-weight:700}.sel-card-active[data-v-caf375f6]{box-shadow:0 0 4px #909399}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myFormStatic_vue_vue_type_style_index_0_id_0e9e50f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myFormStatic_vue_vue_type_style_index_0_id_0e9e50f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myFormStatic_vue_vue_type_style_index_0_id_0e9e50f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myFormStatic_vue_vue_type_style_index_0_id_0e9e50f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myFormStatic_vue_vue_type_style_index_0_id_0e9e50f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myFormStatic_vue_vue_type_style_index_0_id_0e9e50f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-0e9e50f8]{padding:10px 15px}.header-block[data-v-0e9e50f8]{height:40px;line-height:40px}.title-block-tag[data-v-0e9e50f8]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-0e9e50f8]{font-weight:700;position:relative;top:-5px}.block-item-bg[data-v-0e9e50f8]{border-radius:5px;background:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/appletInfo/staticCenter/myFormStatic.vue?vue&type=template&id=0e9e50f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('layout-tb',[_c('template',{slot:"tag"},[_vm._v("我的统计")]),_vm._v(" "),_c('div',{attrs:{"slot":"tab"},slot:"tab"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"layout-inline"},[_c('my-cascader',{ref:"SelectorDeptSearch",staticClass:"layout-item",attrs:{"props":{ checkStrictly: true },"size":"small","width-style":"200","clearable":true,"sel-value":_vm.searchCommDeptData,"type":"4","sub-type":""},on:{"change":function($event){return _vm.handleCascaderChange($event)}}})],1)]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('MyInputButton',{attrs:{"size":"small","plain":"","width-class":"width: 150px","type":"success","clearable":true,"placeholder":_vm.$t('名称')},on:{"click":_vm.search}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight.height}},[_c('el-table-column',{attrs:{"align":"center","prop":"permission_name","label":_vm.$t('名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.stat_name))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.stat_name))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('创建时间')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm.$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('部门/院系')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"left"}},[_c('div',{staticClass:"text-center"},[(scope.row.department_names != '' && scope.row.department_names != null)?_c('div',{staticStyle:{"max-height":"200px","overflow-y":"auto"}},_vm._l((scope.row.department_names.split(',')),function(item,index){return _c('div',{key:index},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(item))])])}),0):_c('div',[_vm._v("--")])]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.department_names ? scope.row.department_names : '--'))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('模版类型')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.form_name ? scope.row.form_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('span',[_vm._v(_vm._s(scope.row.web_type ? _vm.$t("PC模版") : _vm.$t("H5模版")))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"操作","width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-file margin-right-5 color-grand",on:{"click":function($event){return _vm.settingInfo(scope.row)}}})]}}])})],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)],1)],2),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"hide-footer":true,"visible":_vm.drawerVisible,"size":"85%","title":_vm.title},on:{"changeDrawer":_vm.closeDrawerDialog,"opened":_vm.openedForm,"right-close":_vm.closeDrawerDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"layout-inline"},[_c('span',{staticClass:"tab-class font-bold layout-item"},[_vm._v("\n                "+_vm._s(_vm.$t("我的模版数据"))+"\n              ")])])])],1)],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[[_c('pc-static-template-show',{ref:"pcRef",attrs:{"static-id":_vm.staticId,"static-pc-form-data":_vm.staticPcFormData}})]],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/appletInfo/staticCenter/myFormStatic.vue?vue&type=template&id=0e9e50f8&scoped=true&

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

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/validater/appFormSetValidater.js
var appFormSetValidater = __webpack_require__(194);

// EXTERNAL MODULE: ./components/utils/select/MyCascader.vue + 4 modules
var MyCascader = __webpack_require__(151);

// EXTERNAL MODULE: ./components/form/PCStaticTemplate.vue + 4 modules
var PCStaticTemplate = __webpack_require__(219);

// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./utils/validater/formStaticValidater.js
var formStaticValidater = __webpack_require__(293);

// EXTERNAL MODULE: ./components/form/PCStaticTemplateShow.vue + 4 modules
var PCStaticTemplateShow = __webpack_require__(439);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/appletInfo/staticCenter/myFormStatic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















/* harmony default export */ var myFormStaticvue_type_script_lang_js_ = ({
  mixins: [mixins["a" /* default */], formStaticValidater["a" /* default */]],
  components: {
    PcStaticTemplateShow: PCStaticTemplateShow["default"],
    MySelect: MySelect["default"],
    PcStaticTemplate: PCStaticTemplate["default"],
    MyCascader: MyCascader["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"],
    LayoutTb: LayoutTb["default"],
    MyInputButton: MyInputButton["default"],
    MyPagination: MyPagination["default"],
    DialogNormal: DialogNormal["default"],
    MyNormalDialog: MyNormalDialog["default"],
    DrawerRight: DrawerRight["default"]
  },

  data() {
    return {
      drawerAddInfo: false,
      drawerVisible: false,
      drawerLoading: false,
      visibleConfim: false,
      dialogLoading: false,
      btnLoading: false,
      refreshTeacherStatus: false,
      refreshStudentStatus: false,
      tableData: [],
      searchKey: '',
      departmentPath: '',
      teacherArray: [],
      approverUsers: [],
      roleList: [],
      errorTeacher: '',
      roleOptions: [],
      title: '',
      titleType: '',
      searchCommDeptData: [],
      staticFormList: [],
      searchStaticForm: '',
      staticPcFormList: [],
      staticPcFormData: [],
      formId: '',
      staticId: '',
      typeList: [{
        "label": 'PC端模板',
        value: true
      } // {"label": 'H5端模板', value: false}
      ],
      form: {
        id: '',
        name: '',
        des: '',
        roleType: 0,
        roleOprLook: false,
        roleOprDel: false,
        roleOprSubmit: false,
        roleOprImOrEx: false,
        roleTeachers: false,
        roleStudents: false,
        roleUsers: [],
        roleUserGroup: [],
        enable: true,
        permissionContent: '',
        permissionContentArray: [],
        approverTeacherId: [],
        approverStudentId: [],
        roleList: []
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
        searchKey: this.searchKey,
        departmentPath: this.departmentPath
      };
      this.$axios.get(url["a" /* common */].static_appinfo_form_page, {
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

    search(data) {
      this.searchKey = data.input;
      this.page = 1;
      this.init();
    },

    handleCascaderChange(data) {
      this.departmentPath = data[data.length - 1];
      this.page = 1;
      this.init();
    },

    openedForm() {
      if (this.$refs['pcRef']) {
        this.$refs['pcRef'].initAsync();
      }
    },

    settingInfo(data) {
      this.staticId = data.id + "";
      this.drawerVisible = true;
    },

    closeDrawerDialog() {
      if (this.$refs['pcRef']) {
        this.$refs['pcRef'].closeDialog();
      }

      this.drawerVisible = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/appletInfo/staticCenter/myFormStatic.vue?vue&type=script&lang=js&
 /* harmony default export */ var staticCenter_myFormStaticvue_type_script_lang_js_ = (myFormStaticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/appletInfo/staticCenter/myFormStatic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(597)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  staticCenter_myFormStaticvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e9e50f8",
  "40723012"
  
)

/* harmony default export */ var myFormStatic = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyInputButton: __webpack_require__(146).default,MyPagination: __webpack_require__(27).default,LayoutTb: __webpack_require__(152).default,PcStaticTemplateShow: __webpack_require__(439).default,DrawerLayoutRight: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=myFormStatic.js.map