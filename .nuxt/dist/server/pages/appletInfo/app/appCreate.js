exports.ids = [1];
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyEnable.vue?vue&type=template&id=2608d006&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._ssrNode(((_vm.status == true)?("<label class=\"color-success\">"+_vm._ssrEscape(_vm._s(_vm.$t("启用")))+"</label>"):"<!---->")+" "+((_vm.status == false)?("<label class=\"color-danger\">"+_vm._ssrEscape(_vm._s(_vm.$t("禁用")))+"</label>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/status/MyEnable.vue?vue&type=template&id=2608d006&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/status/MyEnable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var MyEnablevue_type_script_lang_js_ = ({
  name: 'myEnable',
  props: {
    status: {
      default: '',
      type: [String, Number, Boolean]
    }
  },
  computed: {},

  data() {
    return {
      value: ''
    };
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/utils/status/MyEnable.vue?vue&type=script&lang=js&
 /* harmony default export */ var status_MyEnablevue_type_script_lang_js_ = (MyEnablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/status/MyEnable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  status_MyEnablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "55b0147e"
  
)

/* harmony default export */ var MyEnable = __webpack_exports__["default"] = (component.exports);

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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/StudentTreeAndListNoPage.vue?vue&type=template&id=2dda5697&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commTeacherList"},[_vm._ssrNode("<div class=\"layout-inline\">","</div>",[_c('my-cascader',{ref:"SelectorDept",staticClass:"layout-item",attrs:{"size":"small","width-style":"160","sel-value":_vm.searchCommDeptData,"type":"1","sub-type":"4"},on:{"change":function($event){return _vm._handleCascaderChange($event)}}}),_vm._ssrNode(" "),_c('my-input-button',{staticClass:"layout-item",attrs:{"size":"small","clearable":true,"type":"success","plain":""},on:{"click":_vm._handleSearch}})],2),_vm._ssrNode(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.commLoading),expression:"commLoading"}],ref:"commTableRef",attrs:{"data":_vm.tableTeacherCommData,"max-height":_vm.maxHeight,"size":"mini"}},[(_vm.setType == 'select')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.bed_no == null)?_c('a',{staticClass:"color-grand",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm._selectBedno(scope.row)}}},[_vm._v(_vm._s(_vm.$t("分配")))]):_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("已分配")))])]}}],null,false,3111910370)}):_vm._e(),_vm._v(" "),(_vm.setType == 'check')?_c('el-table-column',{attrs:{"align":"center","width":"55"},scopedSlots:_vm._u([{key:"header",fn:function(scope){return [_c('el-checkbox',{on:{"change":_vm._handleSelectionAllSelect},model:{value:(_vm.commAllCheck),callback:function ($$v) {_vm.commAllCheck=$$v},expression:"commAllCheck"}})]}},{key:"default",fn:function(scope){return [_c('el-checkbox',{on:{"change":function($event){return _vm._handleSelectionSelect($event, scope.row)}},model:{value:(scope.row._checked),callback:function ($$v) {_vm.$set(scope.row, "_checked", $$v)},expression:"scope.row._checked"}})]}}],null,false,1304403255)}):_vm._e(),_vm._v(" "),(_vm.setType == 'radio')?_c('el-table-column',{attrs:{"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('my-radio',_vm._b({attrs:{"sel-value":_vm.commSelUserVal,"label":scope.row.user_id},on:{"change":function($event){return _vm._handleChange(scope.row)}}},'my-radio',_vm._selValue,false),[_c('span')])]}}],null,false,4043958644)}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"property":"real_name","align":"center","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"student_id","align":"center","label":"学号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"","align":"center","label":"班级"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.class_name ? scope.row.class_name : '--'))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.class_name ? scope.row.class_name : '--')+"\n          ")])])]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-right margin-top-10\">","</div>",[_c('el-pagination',{attrs:{"current-page":_vm.commPage,"page-sizes":[10, 20, 30, 50, 100],"page-size":_vm.commNum,"layout":"total, sizes, prev, pager, next","total":_vm.commTotalTotal},on:{"size-change":_vm._handleSizeChange,"current-change":_vm._handleCurrentChange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/treeAndList/StudentTreeAndListNoPage.vue?vue&type=template&id=2dda5697&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utils/treeAndList/StudentTreeAndListNoPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var StudentTreeAndListNoPagevue_type_script_lang_js_ = ({
  name: 'studentTreeAndListNoPage',
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
      commSex: '',
      commSearchKey: '',
      commSearchDept: '',
      commSearchCollege: '',
      commSearchMajor: '',
      commSearchGrade: '',
      commSearchClass: '',
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
        deleted: 0,
        sex: this.commSex.sex,
        collegeId: this.commSearchCollege,
        majorId: this.commSearchMajor,
        grade: this.commSearchGrade,
        clasz: this.commSearchClass,
        groupId: this.groupId
      };
      this.commLoading = true;
      params['realName'] = this.commSearchKey['input']; //this.commSelUserArr = [];
      //this.commSelUserNameArr = [];
      //params = this.$qs.stringify(params);

      this.$axios.get(url["a" /* common */].dormaccess_student_select_status_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          //this.$refs.commTableRef.clearSelection();
          for (let i = 0; i < res.data.data.list.length; i++) {
            let sel = Object(utils["u" /* inArray */])(res.data.data.list[i], this.commSelUserArr, 'user_id');

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

    _handleOpen(params) {
      this.commPage = 1;
      this.commNum = 20;
      this.commSex = params ? params : '';
      this.commSelUserArr = this.selArr;

      this._initTeacher();
    },

    _handleChange(data, index) {
      this.commSelUserVal = data.user_id;
      this.commSelUserValObj = data;
      this.$emit("change", data);
    },

    _handleCascaderChange(data) {
      //this.commSearchDept = data[data.length-1];
      this.commSearchCollege = "";
      this.commSearchMajor = "";
      this.commSearchGrade = "";
      this.commSearchClass = "";

      if (data.length == 1) {
        this.commSearchCollege = data[0];
      } else if (data.length == 2) {
        this.commSearchCollege = data[0];
        this.commSearchMajor = data[1];
      } else if (data.length == 3) {
        this.commSearchCollege = data[0];
        this.commSearchMajor = data[1];
        this.commSearchGrade = data[2];
      } else if (data.length == 4) {
        this.commSearchCollege = data[0];
        this.commSearchMajor = data[1];
        this.commSearchGrade = data[2];
        this.commSearchClass = data[3];
      }

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

    _selectBedno(row) {
      let params = {
        bedNo: this.commSex.bedNo,
        dromId: this.commSex.dormId,
        studentId: row.user_id,
        majorClassId: row.clasz
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
    }

  }
});
// CONCATENATED MODULE: ./components/utils/treeAndList/StudentTreeAndListNoPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeAndList_StudentTreeAndListNoPagevue_type_script_lang_js_ = (StudentTreeAndListNoPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/utils/treeAndList/StudentTreeAndListNoPage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  treeAndList_StudentTreeAndListNoPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b57d9c3c"
  
)

/* harmony default export */ var StudentTreeAndListNoPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyCascader: __webpack_require__(151).default,MyInputButton: __webpack_require__(146).default,MyRadio: __webpack_require__(154).default})


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

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(566);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("58235c35", content, true, context)
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(568);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("9c60826e", content, true, context)
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(570);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2d7aa22d", content, true, context)
};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(572);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e8d85618", content, true, context)
};

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(574);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("277ef63d", content, true, context)
};

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormSet.vue?vue&type=template&id=9973bee0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"form-set-main\""+(_vm._ssrStyle(null,_vm.drawHeight3, null))+" data-v-9973bee0>","</div>",[_vm._ssrNode("<div class=\"pull-left form-set-left\" data-v-9973bee0><div"+(_vm._ssrClass("form-set-menu-item",_vm.activeSetMenu == 1 ? 'form-set-menu-item-active' : ''))+" data-v-9973bee0><span data-v-9973bee0>"+_vm._ssrEscape(_vm._s(_vm.$t("基础设置")))+"</span></div> <div"+(_vm._ssrClass("form-set-menu-item",_vm.activeSetMenu == 2 ? 'form-set-menu-item-active' : ''))+" data-v-9973bee0><span data-v-9973bee0>"+_vm._ssrEscape(_vm._s(_vm.$t("消息推送")))+"</span></div></div> "),_vm._ssrNode("<div class=\"form-set-right\" data-v-9973bee0>","</div>",[(_vm.activeSetMenu == 1)?_vm._ssrNode("<div data-v-9973bee0>","</div>",[_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10\" data-v-9973bee0>","</div>",[_vm._ssrNode("<div class=\"color-muted\" data-v-9973bee0><span data-v-9973bee0><label class=\"title-block-tag\" data-v-9973bee0></label> <label class=\"title-block-text color-warning\" data-v-9973bee0>"+_vm._ssrEscape(_vm._s(_vm.$t("基础设置")))+"</label></span></div> "),_vm._ssrNode("<div class=\"font-size-12\" style=\"position: relative\" data-v-9973bee0>","</div>",[_c('el-form',{ref:"formBasic",staticStyle:{"display":"inline-block"},attrs:{"model":_vm.formBasic,"rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('表单名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},model:{value:(_vm.formBasic.name),callback:function ($$v) {_vm.$set(_vm.formBasic, "name", $$v)},expression:"formBasic.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('数据标题'),"prop":"title"}},[_c('el-checkbox',{attrs:{"disabled":""},model:{value:(_vm.formBasic.title),callback:function ($$v) {_vm.$set(_vm.formBasic, "title", $$v)},expression:"formBasic.title"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v("["+_vm._s(_vm.$t('发起人'))+"]")]),_vm._v(" "),_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t('提交的')))]),_vm._v(" "),_c('span',{staticClass:"color-muted font-size-12"},[_vm._v("["+_vm._s(_vm.$t('表单名称'))+"]")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('提交规则'),"prop":"subRule"}},[_c('el-checkbox',{model:{value:(_vm.formBasic.subRule),callback:function ($$v) {_vm.$set(_vm.formBasic, "subRule", $$v)},expression:"formBasic.subRule"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v("["+_vm._s(_vm.$t('同账号只允许提交一次'))+"]")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('提交按钮'),"prop":"subBtn"}},[_c('el-radio-group',{model:{value:(_vm.formBasic.subBtn),callback:function ($$v) {_vm.$set(_vm.formBasic, "subBtn", $$v)},expression:"formBasic.subBtn"}},[_c('el-radio',{attrs:{"label":true}},[_vm._v(_vm._s(_vm.$t('开启')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":false}},[_vm._v(_vm._s(_vm.$t('关闭')))])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('按钮文字'),"prop":"subBtnText"}},[_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},model:{value:(_vm.formBasic.subBtnText),callback:function ($$v) {_vm.$set(_vm.formBasic, "subBtnText", $$v)},expression:"formBasic.subBtnText"}})],1),_vm._v(" "),(_vm.formId.form_type != 0 && _vm.formId.form_type != 2)?_c('el-form-item',{attrs:{"label":_vm.$t('选择流程'),"prop":"flow"}},[_c('my-select',{attrs:{"size":"small","width-style":300,"clearable":true,"sel-value":_vm.formBasic.flow,"options":_vm.flowList},on:{"change":_vm.handleFlowChange}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('选择权限'),"prop":"role"}},[_c('el-select',{staticClass:"width-300",attrs:{"multiple":"","size":"small","placeholder":"请选择"},on:{"change":_vm.handleRoleChange},model:{value:(_vm.formBasic.role),callback:function ($$v) {_vm.$set(_vm.formBasic, "role", $$v)},expression:"formBasic.role"}},_vm._l((_vm.roleList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"text-center"},[_c('el-button',{attrs:{"type":"primary","size":"mini","loading":_vm.btnLoading},on:{"click":_vm.onSubmitBasic}},[_vm._v(_vm._s(_vm.$t('保存')))])],1)],1)],1)],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.activeSetMenu == 2)?_vm._ssrNode("<div data-v-9973bee0>","</div>",[_c('my-form-set-notice',{attrs:{"formId":_vm.formId,"data":_vm.noticeTableData},on:{"init":_vm.initNoticeGroup}})],1):_vm._e(),_vm._ssrNode(" "),(_vm.activeSetMenu == 4)?_vm._ssrNode("<div data-v-9973bee0>","</div>",[_c('my-form-set-role',{attrs:{"formId":_vm.formId,"data":_vm.roleTableData},on:{"init":_vm.initRoleGroup}})],1):_vm._e()],2),_vm._ssrNode(" <div class=\"moon-clearfix\" data-v-9973bee0></div>")],2),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"top":"10vh","width-style":"800px","append-to-body":true,"visible":_vm.dialogRule,"title":_vm.$t('规则设置')},on:{"close":_vm.closeDialog,"right-close":_vm.cancelDialog}},[_c('div',[_c('el-form',{ref:"formRule",staticStyle:{"display":"inline-block"},attrs:{"model":_vm.formRule,"rules":_vm.rulesRule,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},model:{value:(_vm.formRule.name),callback:function ($$v) {_vm.$set(_vm.formRule, "name", $$v)},expression:"formRule.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('满足')}},[_c('div',{staticClass:"layout-inline"},[_c('my-select',{staticClass:"width-100 layout-item margin-left-5 margin-right-5",attrs:{"size":"mini","sel-value":_vm.formRule.conditional,"options":_vm.conditionalList},on:{"change":_vm.handleConditionChange}}),_vm._v(" "),_c('span',{staticClass:"layout-item"},[_vm._v(_vm._s(_vm.$t('条件时')))]),_vm._v(" "),_c('span',{staticClass:"fa fa-plus-circle color-success",on:{"click":_vm.addRuleItem}})],1),_vm._v(" "),_c('div',_vm._l((_vm.conditionalChildList),function(item,index){return _c('div',{key:item.id,staticClass:"layout-inline"},[_c('el-select',{staticClass:"width-150 layout-item",attrs:{"size":"mini","placeholder":_vm.$t('本表单字段')},model:{value:(_vm.conditionalChildList[index].conditional1),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional1", $$v)},expression:"conditionalChildList[index].conditional1"}},_vm._l((_vm.conditionalItemList1),function(itemChild,indexChild){return _c('el-option',{key:indexChild,attrs:{"label":itemChild.label,"value":itemChild.value},nativeOn:{"click":function($event){return _vm.handleCondition1Change($event, itemChild, indexChild, index)}}})}),1),_vm._v(" "),_c('el-select',{staticClass:"width-100 layout-item",attrs:{"size":"mini"},model:{value:(_vm.conditionalChildList[index].conditional2),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional2", $$v)},expression:"conditionalChildList[index].conditional2"}},_vm._l((_vm.filterAppServerConditionnalAllType),function(itemChild,indexChild){return _c('el-option',{key:indexChild,attrs:{"label":itemChild.label,"value":itemChild.value},nativeOn:{"click":function($event){return _vm.handleCondition2Change($event, itemChild, indexChild, index)}}})}),1),_vm._v(" "),(_vm.conditionalChildList[index].conditional2 == 'between')?[(_vm.conditionalChildList[index].conditional1Type == 'datePicker')?_c('div',{staticClass:"layout-item"},[_c('el-date-picker',{staticStyle:{"width":"140px"},attrs:{"size":"mini","type":_vm.conditionalChildList[index].conditional1Props.type,"value-format":_vm.conditionalChildList[index].conditional1Props.format,"placeholder":"选择日期"},model:{value:(_vm.conditionalChildList[index].conditional3),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional3", $$v)},expression:"conditionalChildList[index].conditional3"}}),_vm._v("\n                    -\n                    "),_c('el-date-picker',{staticStyle:{"width":"140px"},attrs:{"size":"mini","type":_vm.conditionalChildList[index].conditional1Props.type,"value-format":_vm.conditionalChildList[index].conditional1Props.format,"placeholder":"选择日期"},model:{value:(_vm.conditionalChildList[index].conditional4),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional4", $$v)},expression:"conditionalChildList[index].conditional4"}})],1):(_vm.conditionalChildList[index].conditional1Type == 'timePicker')?_c('div',{staticClass:"layout-item"},[_c('el-time-picker',{staticStyle:{"width":"140px"},attrs:{"size":"mini","picker-options":{
                        format:'HH:mm'
                      },"value-format":"HH:mm:ss","placeholder":"选择时间"},model:{value:(_vm.conditionalChildList[index].conditional3),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional3", $$v)},expression:"conditionalChildList[index].conditional3"}}),_vm._v("\n                    -\n                    "),_c('el-time-picker',{staticStyle:{"width":"140px"},attrs:{"size":"mini","picker-options":{
                        format:'HH:mm'
                      },"value-format":"HH:mm:ss","placeholder":"选择时间"},model:{value:(_vm.conditionalChildList[index].conditional4),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional4", $$v)},expression:"conditionalChildList[index].conditional4"}})],1):_c('div',{staticClass:"layout-item"},[_c('el-input',{staticStyle:{"width":"50px"},attrs:{"size":"mini"},model:{value:(_vm.conditionalChildList[index].conditional3),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional3", $$v)},expression:"conditionalChildList[index].conditional3"}}),_vm._v("\n                    -\n                    "),_c('el-input',{staticStyle:{"width":"50px"},attrs:{"size":"mini"},model:{value:(_vm.conditionalChildList[index].conditional4),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional4", $$v)},expression:"conditionalChildList[index].conditional4"}})],1)]:[(_vm.conditionalChildList[index].conditional1Type == 'datePicker')?[_c('el-date-picker',{staticStyle:{"width":"150px"},attrs:{"size":"mini","type":_vm.conditionalChildList[index].conditional1Props.type,"value-format":_vm.conditionalChildList[index].conditional1Props.format,"placeholder":"选择日期"},model:{value:(_vm.conditionalChildList[index].conditional3),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional3", $$v)},expression:"conditionalChildList[index].conditional3"}})]:(_vm.conditionalChildList[index].conditional1Type == 'timePicker')?[_c('el-time-picker',{staticStyle:{"width":"150px"},attrs:{"size":"mini","picker-options":{
                        format:'HH:mm'
                      },"value-format":"HH:mm:ss","placeholder":"选择时间"},model:{value:(_vm.conditionalChildList[index].conditional3),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional3", $$v)},expression:"conditionalChildList[index].conditional3"}})]:[_c('el-input',{staticClass:"width-150",attrs:{"size":"mini"},model:{value:(_vm.conditionalChildList[index].conditional3),callback:function ($$v) {_vm.$set(_vm.conditionalChildList[index], "conditional3", $$v)},expression:"conditionalChildList[index].conditional3"}})]],_vm._v(" "),_c('span',{staticClass:"fa fa-plus-circle color-success",on:{"click":function($event){return _vm.insertRuleItem($event, index)}}}),_vm._v(" "),_c('span',{staticClass:"fa fa-minus-circle color-danger",on:{"click":function($event){return _vm.minxRuleItem($event, index)}}})],2)}),0)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('显示字段'),"prop":"result"}},[_c('my-select',{staticClass:"width-150 layout-item",attrs:{"size":"mini","sel-value":_vm.formRule.result,"options":_vm.resultList},on:{"change":_vm.handleResultChange}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary","loading":_vm.btnDialogLoading},on:{"click":function($event){return _vm.okDialog()}}},[_vm._v("\n          "+_vm._s(_vm.$t("确定"))+"\n        ")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/MyFormSet.vue?vue&type=template&id=9973bee0&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/form/MyFormSetRole.vue + 4 modules
var MyFormSetRole = __webpack_require__(452);

// EXTERNAL MODULE: ./utils/api/url.js
var url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/validater/rules.js
var rules = __webpack_require__(11);

// CONCATENATED MODULE: ./utils/validater/appCreateBasicValidater.js

/* harmony default export */ var appCreateBasicValidater = ({
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
// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/form/MyFormSetNotice.vue + 4 modules
var MyFormSetNotice = __webpack_require__(453);

// CONCATENATED MODULE: ./utils/validater/appFormBasicRuleValidater.js

/* harmony default export */ var appFormBasicRuleValidater = ({
  data() {
    return {
      rulesRule: {
        name: [{
          required: true,
          message: this.$t("请输入名称"),
          trigger: 'blur'
        }],
        result: [{
          required: true,
          message: this.$t("请选择信息"),
          trigger: 'change'
        }]
      }
    };
  }

});
// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormSet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var MyFormSetvue_type_script_lang_js_ = ({
  name: 'myFormSet',
  components: {
    DialogNormal: DialogNormal["default"],
    MySelect: MySelect["default"],
    MyFormSetNotice: MyFormSetNotice["default"],
    MyFormSetRole: MyFormSetRole["default"]
  },
  mixins: [mixins["a" /* default */], appCreateBasicValidater, appFormBasicRuleValidater],
  props: {
    formId: Object
  },
  computed: {},

  data() {
    return {
      activeSetMenu: 1,
      roleTableData: [],
      noticeTableData: [],
      ruleList: [],
      conditionalList: [{
        label: this.$t("所有"),
        value: true,
        text: this.$t("所有")
      }, {
        label: this.$t("任一"),
        value: false,
        text: this.$t("任一")
      }],
      conditionalItemList1: [],
      conditionalItemList2: [],
      conditionalItemList3: [],
      resultList: [],
      conditionalChildList: [],
      flowList: [],
      roleList: [],
      btnLoading: false,
      btnDialogLoading: false,
      dialogRule: false,
      formContent: "",
      formBasic: {
        name: '',
        title: true,
        subRule: false,
        subBtn: true,
        subBtnText: '提交',
        rules: [],
        flow: '',
        role: []
      },
      formRule: {
        id: '',
        name: '',
        conditional: true,
        conditional1: '',
        conditional2: '',
        conditional3: '',
        conditionalList: [],
        result: ''
      }
    };
  },

  created() {
    this.initBasicInfo();
    this.initFlow();
    this.initRole();
  },

  methods: {
    initBasicInfo() {
      this.formBasic = {
        name: this.formId.form_name,
        title: true,
        subRule: this.formId.submit_only,
        subBtn: this.formId.submit_button,
        subBtnText: this.formId.button_name,
        rules: [],
        flow: this.formId.form_process_id ? this.formId.form_process_id + '' : '',
        role: this.formId.form_permission_id != null && this.formId.form_permission_id != '' ? this.formId.form_permission_id.split(",") : []
      };
      this.initRuleList();
    },

    initNoticeGroup() {
      let params = {
        page: this.page,
        num: 9999,
        searchKey: this.searchKey,
        formId: this.formId.id
      };
      this.$axios.get(url["a" /* common */].server_form_template_notice_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.noticeTableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },

    initRoleGroup() {
      let params = {
        page: this.page,
        num: 9999,
        formId: this.formId.id,
        searchKey: this.searchKey
      };
      this.$axios.get(url["a" /* common */].server_form_template_permission_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.roleTableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },

    initRuleList() {
      let params = {
        formId: this.formId.id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(url["a" /* common */].server_form_template_form_rule_search, params).then(res => {
        if (res.data.data) {
          this.ruleList = res.data.data;
        }
      });
    },

    initFlow() {
      let params = {};
      this.$axios.get(url["a" /* common */].server_form_template_form_process_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.length; i++) {
            array.push({
              label: res.data.data[i].processName,
              value: res.data.data[i].id + ""
            });
          }

          this.flowList = array;
        }
      });
    },

    initRole() {
      let params = {};
      this.$axios.get(url["a" /* common */].server_form_template_permission_list_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.length; i++) {
            array.push({
              label: res.data.data[i].permissionName,
              value: res.data.data[i].id + ""
            });
          }

          this.roleList = array;
        }
      });
    },

    selSetMenu(index) {
      this.activeSetMenu = index;

      if (index == 1) {
        this.initBasicInfo();
      } else if (index == 2) {
        this.initNoticeGroup();
      } else if (index == 4) {
        this.initRoleGroup();
      }
    },

    initParent() {
      this.$emit('init');
    },

    delRuleList(item) {
      let params = {
        "id": item.id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(url["a" /* common */].server_form_template_form_rule_del, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
          this.initRuleList();
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }
      });
    },

    onSubmitBasic() {
      this.$refs['formBasic'].validate(valid => {
        if (valid) {
          let params = {
            "formId": this.formId.id,
            "formName": this.formBasic.name,
            "submitOnly": this.formBasic.subRule,
            "submitButton": this.formBasic.subBtn,
            "buttonName": this.formBasic.subBtnText,
            "hideIds": this.formBasic.rules.join()
          };

          if (this.formBasic.role.length > 0) {
            params['formPermissionId'] = this.formBasic.role.join();
          }

          if (this.formBasic.flow != "") {
            params['formProcessId'] = this.formBasic.flow;
          }

          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url["a" /* common */].server_form_template_basic_set, params, {
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              Object(utils["b" /* MessageSuccess */])(res.data.desc);
              this.initParent();
              this.formId.form_name = this.formBasic.name;
              this.formId.submit_only = this.formBasic.subRule;
              this.formId.submit_button = this.formBasic.subBtn;
              this.formId.button_name = this.formBasic.subBtnText;
              this.formId.hideIds = this.formBasic.rules.join();
              this.formId.form_permission_id = this.formBasic.role.length > 0 ? this.formBasic.role.join() : '';
              this.formId.form_process_id = this.formBasic.flow + '';
            } else {
              Object(utils["a" /* MessageError */])(res.data.desc);
            }

            this.btnLoading = false;
          });
        }
      });
    },

    editRuleList(item) {
      this.addRule();
      this.initRuleList();
      let conditionalChildList = JSON.parse(item.conditions);
      let conditionalChildArr = [];
      this.formRule = {
        id: item.id,
        name: item.hideName,
        conditional: item.andor,
        conditional1: '',
        conditional2: '',
        conditional3: '',
        conditionalList: [],
        result: JSON.parse(item.hideKey)[0]
      };

      for (let i = 0; i < conditionalChildList.length; i++) {
        conditionalChildArr.push({
          id: i + 1,
          conditional1: conditionalChildList[i].k,
          conditional1Type: conditionalChildList[i].t1,
          conditional1Props: '',
          conditional2: conditionalChildList[i].c,
          conditional3: '',
          conditional4: ''
        });

        if (conditionalChildList[i].t2 != '') {
          conditionalChildArr[i]['conditional1Props'] = conditionalChildList[i].t2;
        }

        if (conditionalChildList[i].v.indexOf("~") > -1) {
          conditionalChildArr[i]['conditional3'] = conditionalChildList[i].v.split("~")[0];
          conditionalChildArr[i]['conditional4'] = conditionalChildList[i].v.split("~")[1];
        } else {
          conditionalChildArr[i]['conditional3'] = conditionalChildList[i].v;
        }
      }

      this.conditionalChildList = conditionalChildArr;
    },

    addRule() {
      this.formContent = "";
      let rule = "";
      let ruleList = [];
      let ruleCodList = [];

      if (this.formId.form_content != "") {
        rule = JSON.parse(this.formId.form_content);
        this.conditionalItemList1 = [];
        this.resultList = [];
        this.resultList = this.setRuleChild(rule.rule, ruleList);
        this.conditionalItemList1 = this.setRuleChild(rule.rule, ruleCodList); // for (let i = 0; i < rule.rule.length; i++){
        //   this.conditionalItemList1.push({
        //     label: rule.rule[i].title,
        //     value: rule.rule[i].field,
        //     text: rule.rule[i].title,
        //     type: rule.rule[i].type,
        //     props: rule.rule[i].props,
        //   });
        // }
      }

      this.formContent = rule;
      this.dialogRule = true;
    },

    addRuleItem() {
      this.conditionalChildList.push({
        id: this.conditionalChildList.length + 1,
        conditional1: '',
        conditional1Type: '',
        conditional1Props: '',
        conditional2: '',
        conditional3: '',
        conditional4: ''
      });
    },

    insertRuleItem(event, index) {
      let conditional = {
        conditional1: '',
        conditional1Type: '',
        conditional1Props: '',
        conditional2: '',
        conditional3: '',
        conditional4: ''
      };
      this.conditionalChildList.splice(index + 1, 0, conditional);
      this.conditionalChildList[index + 1]['id'] = this.conditionalChildList.length + 1;
    },

    minxRuleItem(event, index) {
      this.conditionalChildList.splice(index, 1);
    },

    closeDialog() {
      this.formRule = {
        id: '',
        name: '',
        conditional: true,
        conditional1: '',
        conditional2: '',
        conditional3: '',
        conditionalList: [],
        result: ''
      };

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      ;

      if (this.$refs['formRule']) {
        this.$refs['formRule'].resetFields();
      }

      ;
      this.conditionalChildList = [];
      this.dialogRule = false;
    },

    cancelDialog() {
      this.dialogRule = false;
    },

    okDialog() {
      this.$refs['formRule'].validate(valid => {
        if (valid) {
          if (this.conditionalChildList.length == 0) {
            Object(utils["c" /* MessageWarning */])(this.$t("请设置规则！"));
            return;
          }

          let params = {
            "formId": this.formId.id,
            "hideName": this.formRule.name,
            "andor": this.formRule.conditional,
            "hideKeys": this.formRule.result
          };

          if (this.formRule.id != '') {
            params['id'] = this.formRule.id;
          }

          let conditionalChildList = [];

          for (let i = 0; i < this.conditionalChildList.length; i++) {
            conditionalChildList.push({
              k: this.conditionalChildList[i].conditional1,
              c: this.conditionalChildList[i].conditional2,
              v: this.conditionalChildList[i].conditional3,
              t1: this.conditionalChildList[i].conditional1Type,
              t2: ''
            });

            if (this.conditionalChildList[i].conditional2 == 'between') {
              conditionalChildList[i]['v'] = this.conditionalChildList[i].conditional3 + '~' + this.conditionalChildList[i].conditional4;
            }

            if (this.conditionalChildList[i].conditional1Props) {
              conditionalChildList[i]['t2'] = this.conditionalChildList[i].conditional1Props;
            }
          }

          params['conditions'] = JSON.stringify(conditionalChildList);
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url["a" /* common */].server_form_template_form_set_rule_save, params, {
            loading: false
          }).then(res => {
            if (res.data.code == 200) {
              Object(utils["b" /* MessageSuccess */])(res.data.desc);
              this.initRuleList();
              this.dialogRule = false;
            } else {
              Object(utils["a" /* MessageError */])(res.data.desc);
            }

            this.btnLoading = false;
          });
        }
      });
    },

    handleConditionChange(data) {
      this.formRule.conditional = data;
    },

    handleCondition1Change(event, item, index, pIndex) {
      this.conditionalChildList[pIndex].conditional1 = item.value;
      this.conditionalChildList[pIndex].conditional1Type = item.type;

      if (item.props) {
        this.conditionalChildList[pIndex].conditional1Props = item.props;
      }

      this.conditionalChildList[pIndex].conditional3 = '';
      this.conditionalChildList[pIndex].conditional4 = '';
    },

    handleCondition2Change(event, item, index, pIndex) {
      this.conditionalChildList[pIndex].conditional2 = item.value;
    },

    handleCondition3Change(event, item) {
      this.conditionalChildList[item.index - 1].conditional3 = item.field;
    },

    handleResultChange(data) {
      this.formRule.result = data;
    },

    handleFlowChange(data) {
      this.formBasic.flow = data;
    },

    handleRoleChange(data) {
      this.formBasic.role = data;
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
              label: rule[i].title,
              field: rule[i].field,
              title: rule[i].title,
              type: rule[i].type,
              value: rule[i].field,
              text: rule[i].title,
              props: rule[i].props
            };
            ruleList.push(obj);
          }
        }
      }

      return ruleList;
    }

  }
});
// CONCATENATED MODULE: ./components/form/MyFormSet.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_MyFormSetvue_type_script_lang_js_ = (MyFormSetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/MyFormSet.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(569)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_MyFormSetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9973bee0",
  "4e834472"
  
)

/* harmony default export */ var MyFormSet = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MySelect: __webpack_require__(147).default,MyFormSetNotice: __webpack_require__(453).default,MyFormSetRole: __webpack_require__(452).default,DialogNormal: __webpack_require__(28).default})


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormFlow.vue?vue&type=template&id=859dda9e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"form-set-main\""+(_vm._ssrStyle(null,_vm.drawHeight3, null))+" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"pull-right form-set-right\" style=\"overflow-y: auto\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"header-block padding-lr-10 border-bottom-1\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('span',{staticClass:"tab-class font-bold",class:_vm.activeName == 'only' ? 'color-warning' : '',on:{"click":function($event){return _vm.handleClick('only')}}},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n                "+_vm._s(_vm.$t('节点属性'))+"\n              ")])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('span',{staticClass:"tab-class font-bold margin-left-5",class:_vm.activeName == 'flow' ? 'color-warning' : '',on:{"click":function($event){return _vm.handleClick('flow')}}},[_c('i',{staticClass:"fa fa-line-chart"}),_vm._v("\n                "+_vm._s(_vm.$t('流程属性'))+"\n              ")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 padding-lr-10 font-size-12\" data-v-859dda9e>","</div>",[(_vm.activeName == 'only')?[_vm._ssrNode("<div data-v-859dda9e><div class=\"font-bold\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("节点类型")))+"</div> "+((_vm.flowDetailData.extra == 'audit')?("<div class=\"margin-top-10\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("审批节点")))+"</div>"):"<!---->")+" "+((_vm.flowDetailData.extra == 'send')?("<div class=\"margin-top-10\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("抄送节点")))+"</div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("节点名称")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-859dda9e>","</div>",[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"size":"mini"},model:{value:(_vm.flowDetailData.name),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "name", $$v)},expression:"flowDetailData.name"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[(_vm.flowDetailData.extra == 'send')?[_vm._ssrNode("<div class=\"font-bold\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("抄送人")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-859dda9e>","</div>",[(_vm.flowDetailData.type == 4 || _vm.flowDetailData.type == 6)?_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"left","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","sel-arr":_vm.flowDetailData.users,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                      "+_vm._s(_vm.$t("抄送人"))+"("+_vm._s(_vm.$t("人数"))+":"+_vm._s(_vm.approverUsers.length)+")\n                    ")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.type == 5)?_c('my-select',{attrs:{"size":"mini","sel-value":_vm.flowDetailData.hType,"options":_vm.fiterTeacherRoleType},on:{"change":_vm.handleUserType}}):_vm._e()],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.extra == 'audit')?[_vm._ssrNode("<div class=\"font-bold\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("审批人")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-5\" data-v-859dda9e>","</div>",[(_vm.flowDetailData.type == 1 || _vm.flowDetailData.type == 3)?_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"left","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","sel-arr":_vm.flowDetailData.users,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                      "+_vm._s(_vm.$t("审批人"))+"("+_vm._s(_vm.$t("人数"))+":"+_vm._s(_vm.approverUsers.length)+")\n                    ")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.flowDetailData.type == 2)?_c('my-select',{attrs:{"size":"mini","sel-value":_vm.flowDetailData.hType,"options":_vm.fiterTeacherRoleType},on:{"change":_vm.handleUserType}}):_vm._e()],2)]:_vm._e()],2),_vm._ssrNode(" "),(_vm.flowDetailData.extra != 'send')?[_vm._ssrNode("<div class=\"margin-top-10 border-bottom-1 padding-bottom-5\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("多人审批规则")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("会签")))]),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v("("+_vm._s(_vm.$t("所有审批人同意"))+")")])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('el-radio',{attrs:{"label":"and"},model:{value:(_vm.flowDetailData.andor),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "andor", $$v)},expression:"flowDetailData.andor"}},[_vm._v(" ")])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("或签")))]),_vm._v(" "),_c('span',{staticClass:"color-muted"},[_vm._v("("+_vm._s(_vm.$t("其中一人审批同意"))+")")])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('el-radio',{attrs:{"label":"or"},model:{value:(_vm.flowDetailData.andor),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "andor", $$v)},expression:"flowDetailData.andor"}},[_vm._v(" ")])],1)],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10 border-bottom-1 padding-bottom-5\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"font-bold\" data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("按钮权限")))+"</div> "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":16}},[_vm._v("\n                       \n                    ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_vm._v("\n                           \n                        ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.$t("显示")))])])],1)],1)],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":16}},[_c('span',[_vm._v(_vm._s(_vm.$t("同意")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_vm._v("\n                           \n                        ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.allowShow),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "allowShow", $$v)},expression:"flowDetailData.allowShow"}})],1)],1)],1)],1),_vm._ssrNode(" "),_c('el-row',{staticClass:"margin-top-5"},[_c('el-col',{attrs:{"span":16}},[_c('span',[_vm._v(_vm._s(_vm.$t("驳回")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":8}},[_c('el-row',[_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_vm._v("\n                           \n                        ")]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":12}},[_c('el-checkbox',{model:{value:(_vm.flowDetailData.rejectShow),callback:function ($$v) {_vm.$set(_vm.flowDetailData, "rejectShow", $$v)},expression:"flowDetailData.rejectShow"}})],1)],1)],1)],1)],2)],2)]:_vm._e()]:_vm._e(),_vm._ssrNode(" "),(_vm.activeName == 'flow')?[_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div data-v-859dda9e>","</div>",[_vm._ssrNode("<div data-v-859dda9e><span data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("流程名称")))+"</span></div> "),_c('el-row',{staticClass:"margin-top-10"},[_c('el-col',{attrs:{"span":24}},[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"size":"mini"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("流程发起后允许撤回")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.form.allowBack),callback:function ($$v) {_vm.$set(_vm.form, "allowBack", $$v)},expression:"form.allowBack"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("审批人为发起人时自动审批")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.form.autoAudit),callback:function ($$v) {_vm.$set(_vm.form, "autoAudit", $$v)},expression:"form.autoAudit"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-top-10\" data-v-859dda9e>","</div>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.$t("相邻节点审批人合并审批")))])]),_vm._v(" "),_c('el-col',{staticClass:"text-center",attrs:{"span":4}},[_c('el-checkbox',{model:{value:(_vm.form.merge),callback:function ($$v) {_vm.$set(_vm.form, "merge", $$v)},expression:"form.merge"}})],1)],1)],1)],2)]:_vm._e()],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-set-left\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10 text-right border-bottom-1\" data-v-859dda9e>","</div>",[_vm._ssrNode(((_vm.form.name != '')?("<span class=\"color-muted margin-right-10 font-size-12\" data-v-859dda9e>"+_vm._ssrEscape("\n            "+_vm._s(_vm.$t("当前版本"))+": "+_vm._s(_vm.form.name)+"\n          ")+"</span>"):"<!---->")+" "),_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.versionList}},[_vm._v(_vm._s(_vm.$t("版本管理")))])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center flow-main-block\""+(_vm._ssrStyle({"overflow-y":"auto","position":"relative"},_vm.drawHeight5, null))+" data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"flow-fixed-block font-size-12 font-bold margin-bottom-20 bg-success\" data-v-859dda9e><span data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("开始")))+"</span></div> "),_vm._ssrNode("<div class=\"margin-bottom-20 margin-top-20\" data-v-859dda9e>","</div>",[_c('my-form-audit-type',{attrs:{"item-index":"0","custom-user-status":_vm.flowCustonUserStatus},on:{"click":_vm.selAuditType,"showPop":_vm.showPop}})],1),_vm._ssrNode(" "),_vm._l((_vm.flowData),function(item,index){return (_vm.flowData.length > 0)?_vm._ssrNode("<div data-v-859dda9e>","</div>",[_vm._ssrNode("<div class=\"flow-item-block\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("flow-item-title-block",item.extra == 'audit' ? 'bg-warning' : 'bg-success'))+" data-v-859dda9e>","</div>",[_vm._ssrNode("<i class=\"fa fa-times-circle flow-item-close-block color-danger\" data-v-859dda9e></i> "),_vm._ssrNode("<span class=\"font-bold font-size-12\" data-v-859dda9e>","</span>",[_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('i',{staticClass:"fa fa-tag"}),_vm._v(" "),_c('label',[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":4}},[_c('i',{staticClass:"fa fa-cog"})])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10 text-left font-size-12\" data-v-859dda9e>","</div>",[_vm._ssrNode("<div data-v-859dda9e>","</div>",[_vm._ssrNode("<div data-v-859dda9e>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-859dda9e><i class=\"fa fa-users\" data-v-859dda9e></i> <label data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("人员"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-859dda9e>","</span>",[(item.type == 1 || item.type == 3 || item.type == 4 || item.type == 6)?[_vm._l((item.hName),function(itemUser,indexUser){return (indexUser < 4)?_c('el-tag',{key:indexUser,staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":itemUser,"placement":"top-start"}},[_c('span',[_vm._v(_vm._s(itemUser))])])],1):_vm._e()}),_vm._ssrNode(" "+((item.users.length >= 4)?("<label class=\"flow-user-count-tag margin-left-5\" data-v-859dda9e>4+</label>"):"<!---->"))]:_vm._e(),_vm._ssrNode(" "),(item.type == 2 || item.type == 5)?[_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini"}},[(item.hType == 'MasterTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("班主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'CoachTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("辅导员")))]):_vm._e(),_vm._v(" "),(item.hType == 'DirectorTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("系主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'DormitorTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("宿管员")))]):_vm._e(),_vm._v(" "),(item.hType == 'DeputyDirectorTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("系副主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'StudentManageTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("学管主任")))]):_vm._e(),_vm._v(" "),(item.hType == 'SecretaryTeacher')?_c('label',[_vm._v(_vm._s(_vm.$t("系部主任")))]):_vm._e()])]:_vm._e()],2)],2),_vm._ssrNode(" "),(item.extra != 'send')?_vm._ssrNode("<div class=\"margin-top-5\" data-v-859dda9e>","</div>",[_vm._ssrNode("<span style=\"position: relative; top: -5px\" data-v-859dda9e><i class=\"fa fa-cog\" data-v-859dda9e></i> <label data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("权限"))+": ")+"</label></span> "),_vm._ssrNode("<span data-v-859dda9e>","</span>",[(item.allowShow || item.allowMuti)?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini","type":"success"}},[_vm._v("\n                        "+_vm._s(_vm.$t("提交"))+"\n                      ")]):_vm._e(),_vm._ssrNode(" "),(item.rejectShow || item.rejectMuti)?_c('el-tag',{staticClass:"margin-left-5 moon-content-text-ellipsis-class",staticStyle:{"width":"50px"},attrs:{"size":"mini","type":"success"}},[_vm._v("\n                        "+_vm._s(_vm.$t("驳回"))+"\n                      ")]):_vm._e()],2)],2):_vm._e()],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"margin-bottom-20 margin-top-20\" data-v-859dda9e>","</div>",[_c('my-form-audit-type',{attrs:{"item-index":index+1,"pop-visible":_vm.popVisible},on:{"click":_vm.selAuditType}})],1)],2):_vm._e()}),_vm._ssrNode(" <div class=\"flow-fixed-block font-size-12 font-bold bg-danger\" data-v-859dda9e><span data-v-859dda9e>"+_vm._ssrEscape(_vm._s(_vm.$t("结束")))+"</span></div>")],2)],2),_vm._ssrNode(" <div class=\"moon-clearfix\" data-v-859dda9e></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/MyFormFlow.vue?vue&type=template&id=859dda9e&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormFlow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var MyFormFlowvue_type_script_lang_js_ = ({
  name: 'myFormFlow',
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
    selAuditType(type, extra, index) {
      let obj = {
        type: type,
        extra: extra,
        name: this.auditFlowTypeItemInfo(type, 'set'),
        users: [],
        hType: '',
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
// CONCATENATED MODULE: ./components/form/MyFormFlow.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_MyFormFlowvue_type_script_lang_js_ = (MyFormFlowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/MyFormFlow.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(571)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_MyFormFlowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "859dda9e",
  "66457699"
  
)

/* harmony default export */ var MyFormFlow = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeacherTreeAndListNoPage: __webpack_require__(187).default,MySelect: __webpack_require__(147).default,MyFormAuditType: __webpack_require__(205).default})


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormSetRole.vue?vue&type=template&id=313a5c80&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10\" data-v-313a5c80>","</div>",[_c('el-button',{attrs:{"size":"mini","type":"primary","icon":"el-icon-plus"},on:{"click":_vm.addRole}},[_vm._v("\n        "+_vm._s(_vm.$t("创建权限组"))+"\n      ")])],1),_vm._ssrNode(" "),_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.data,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight15.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.permission_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n              "+_vm._s(scope.row.permission_name)+"\n            ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('描述')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.des))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n              "+_vm._s(scope.row.des)+"\n            ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('类型')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.permission_type === 0)?_c('label',[_vm._v(_vm._s(_vm.$t("表单使用")))]):_vm._e(),_vm._v(" "),(scope.row.permission_type === 1)?_c('label',[_vm._v(_vm._s(_vm.$t("数据统计")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.permission_type === 0)?_c('label',[_vm._v(_vm._s(_vm.$t("表单使用")))]):_vm._e(),_vm._v(" "),(scope.row.permission_type === 1)?_c('label',[_vm._v(_vm._s(_vm.$t("数据统计")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('权限')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.permission_type === 0)?_c('div',[_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("查看"))+"\n                ")]),_vm._v(" "),_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("删除"))+"\n                ")])],1):_c('div',[(scope.row.permission_condition1)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("查看"))+"\n                ")]):_vm._e(),_vm._v(" "),(scope.row.permission_condition2)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("删除"))+"\n                ")]):_vm._e(),_vm._v(" "),(scope.row.permission_condition3)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("导入导出"))+"\n                ")]):_vm._e()],1)]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.permission_type === 0)?_c('div',[_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("查看"))+"\n                ")]),_vm._v(" "),_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("删除"))+"\n                ")])],1):_c('div',[(scope.row.permission_condition1)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                "+_vm._s(_vm.$t("查看"))+"\n                ")]):_vm._e(),_vm._v(" "),(scope.row.permission_condition2)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("删除"))+"\n                ")]):_vm._e(),_vm._v(" "),(scope.row.permission_condition3)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                  "+_vm._s(_vm.$t("导入导出"))+"\n                ")]):_vm._e()],1)])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('范围')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.permission_student_switch)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                "+_vm._s(_vm.$t("所有学生"))+"\n              ")]):_vm._e(),_vm._v(" "),(scope.row.permission_teacher_switch)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                "+_vm._s(_vm.$t("所有老师"))+"\n              ")]):_vm._e(),_vm._v(" "),(scope.row.permission_content != '')?_c('el-tag',{attrs:{"size":"mini"}},[_c('span',[_vm._v(_vm._s(_vm.$t("人数"))+": "+_vm._s(scope.row.permission_content.split(",").length))])]):_vm._e(),_vm._v(" "),(!scope.row.permission_student_switch && !scope.row.permission_teacher_switch && scope.row.permission_content == '')?_c('span',[_vm._v("--")]):_vm._e()],1),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.permission_student_switch)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                "+_vm._s(_vm.$t("所有学生"))+"\n              ")]):_vm._e(),_vm._v(" "),(scope.row.permission_teacher_switch)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v("\n                "+_vm._s(_vm.$t("所有老师"))+"\n              ")]):_vm._e(),_vm._v(" "),(scope.row.permission_content != '')?_c('el-tag',{attrs:{"size":"mini"}},[_c('span',[_vm._v(_vm._s(_vm.$t("人数"))+": "+_vm._s(scope.row.permission_content.split(",").length))])]):_vm._e(),_vm._v(" "),(!scope.row.permission_student_switch && !scope.row.permission_teacher_switch && scope.row.permission_content == '')?_c('span',[_vm._v("--")]):_vm._e()],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('状态')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('my-enable',{attrs:{"status":scope.row.enable}})],1),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('my-enable',{attrs:{"status":scope.row.enable}})],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"120","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-edit color-success margin-right-5",on:{"click":function($event){return _vm.editForm($event, scope.row)}}}),_vm._v(" "),(scope.row.enable)?_c('i',{staticClass:"fa fa-stop-circle color-grand margin-right-5",on:{"click":function($event){return _vm.enableForm($event, scope.row, false)}}}):_vm._e(),_vm._v(" "),(!scope.row.enable)?_c('i',{staticClass:"fa fa-play-circle color-success margin-right-5",on:{"click":function($event){return _vm.enableForm($event, scope.row, true)}}}):_vm._e(),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteForm($event, scope.row)}}})]}}])})],1),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"1","append-to-body":true,"visible":_vm.drawerRole,"size":"500px"},on:{"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n            "+_vm._s(_vm.$t('创建权限组'))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("基础信息")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg"},[_c('el-form',{ref:"formRole",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"60px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('描述')}},[_c('el-input',{staticClass:"width-300",attrs:{"type":"textarea","row":"3","size":"small"},model:{value:(_vm.form.des),callback:function ($$v) {_vm.$set(_vm.form, "des", $$v)},expression:"form.des"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("权限类型")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('div',[_c('el-radio-group',{on:{"change":_vm.changeFormType},model:{value:(_vm.form.roleType),callback:function ($$v) {_vm.$set(_vm.form, "roleType", $$v)},expression:"form.roleType"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v(_vm._s(_vm.$t("表单使用")))]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v(_vm._s(_vm.$t("数据统计")))])],1)],1)])]),_vm._v(" "),(_vm.form.roleType === 1)?_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("操作权限")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('div',[_c('el-checkbox',{on:{"change":_vm.changeFormOprLook},model:{value:(_vm.form.roleOprLook),callback:function ($$v) {_vm.$set(_vm.form, "roleOprLook", $$v)},expression:"form.roleOprLook"}},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(_vm.$t("查看")))])]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.changeFormOprDel},model:{value:(_vm.form.roleOprDel),callback:function ($$v) {_vm.$set(_vm.form, "roleOprDel", $$v)},expression:"form.roleOprDel"}},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(_vm.$t("删除")))])]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.changeFormOprSubmit},model:{value:(_vm.form.roleOprImOrEx),callback:function ($$v) {_vm.$set(_vm.form, "roleOprImOrEx", $$v)},expression:"form.roleOprImOrEx"}},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(_vm.$t("导入导出")))])])],1)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("权限成员")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('div',[_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t("成员范围"))+": ")])]),_vm._v(" "),_c('div',[_c('el-checkbox',{on:{"change":_vm.changeFormStudent},model:{value:(_vm.form.roleStudents),callback:function ($$v) {_vm.$set(_vm.form, "roleStudents", $$v)},expression:"form.roleStudents"}},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(_vm.$t("所有学生")))])]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.changeFormTeacher},model:{value:(_vm.form.roleTeachers),callback:function ($$v) {_vm.$set(_vm.form, "roleTeachers", $$v)},expression:"form.roleTeachers"}},[_c('span',{staticClass:"font-size-12"},[_vm._v(_vm._s(_vm.$t("所有老师")))])])],1)]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t("组织范围"))+": ")])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"top","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","group-id":_vm.form.id,"sel-arr":_vm.form.permissionContentArray,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                    "+_vm._s(_vm.$t("教师"))+"\n                  ")])],1),_vm._v(" "),_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"top","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(2)}}},[_c('div',[_c('student-tree-and-list-no-page',{ref:"popverStudentRef",attrs:{"group-id":_vm.form.id,"sel-arr":_vm.form.permissionContentArray,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 2)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(2)}},slot:"reference"},[(_vm.refreshStudentStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                    "+_vm._s(_vm.$t("学生"))+"\n                  ")])],1),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t("人数"))+": "+_vm._s(_vm.approverUsers.length))])],1)])])])]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"success","loading":_vm.btnLoading},on:{"click":_vm.okFormDrawDialog}},[_vm._v(_vm._s(_vm.$t("保存")))])],1)])],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/MyFormSetRole.vue?vue&type=template&id=313a5c80&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/validater/appFormSetValidater.js
var appFormSetValidater = __webpack_require__(194);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/status/MyEnable.vue + 4 modules
var MyEnable = __webpack_require__(192);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormSetRole.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var MyFormSetRolevue_type_script_lang_js_ = ({
  name: 'myFormSetRole',
  components: {
    MyEnable: MyEnable["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"]
  },
  mixins: [mixins["a" /* default */], appFormSetValidater["a" /* default */]],
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    formId: Object
  },
  computed: {},

  data() {
    return {
      drawerRole: false,
      subTitle: '',
      btnLoading: false,
      refreshTeacherStatus: false,
      refreshStudentStatus: false,
      approverUsers: [],
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
        approverStudentId: []
      }
    };
  },

  methods: {
    addRole() {
      this.drawerRole = true;
    },

    changeFormType(data) {
      this.approverUsers = [];
      this.form.permissionContentArray = [];
      this.form.roleType = data;
    },

    changeFormOprLook(data) {
      this.form.roleOprLook = data;
    },

    changeFormOprDel(data) {
      this.form.roleOprDel = data;
    },

    changeFormOprSubmit(data) {
      this.form.roleOprSubmit = data;
    },

    changeFormTeacher(data) {
      this.form.roleTeachers = data;
    },

    changeFormStudent(data) {
      this.form.roleStudents = data;
    },

    closeDialog() {
      this.form = {
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
        approverStudentId: []
      };
      this.subTitle = "";
      this.approverUsers = [];

      if (this.$refs['formRole']) {
        this.$refs['formRole'].resetFields();
      }

      this.drawerRole = false;
    },

    cancelDrawDialog() {
      this.drawerRole = false;
    },

    okFormDrawDialog() {
      let url = '';
      this.$refs['formRole'].validate(valid => {
        if (valid) {
          let params = {
            formId: this.formId.id,
            permissionType: this.form.roleType,
            permissionCondition1: this.form.roleOprLook,
            permissionCondition2: this.form.roleOprDel,
            permissionCondition3: this.form.roleOprImOrEx,
            permissionStudentSwitch: this.form.roleStudents,
            permissionTeacherSwitch: this.form.roleTeachers,
            permissionName: this.form.name,
            enable: this.form.enable,
            des: this.form.des
          };
          let contentArray = [];

          for (let i = 0; i < this.form.permissionContentArray.length; i++) {
            contentArray.push(this.form.permissionContentArray[i].user_id);
          }

          params['permissionContent'] = contentArray.join();

          if (this.form.id != "") {
            params['id'] = this.form.id;
          }

          url = api_url["a" /* common */].server_form_template_permission_save;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200) {
              this.drawerRole = false;
              this.initParent();
              Object(utils["b" /* MessageSuccess */])(res.data.desc);
            } else {
              Object(utils["a" /* MessageError */])(res.data.desc);
            }

            this.btnLoading = false;
          });
        }
      });
    },

    initParent() {
      this.$emit('init');
    },

    editForm($event, data) {
      this.form = {
        id: data.id,
        name: data.permission_name,
        des: data.des,
        roleType: data.permission_type,
        roleOprLook: data.permission_condition1,
        roleOprDel: data.permission_condition2,
        roleOprSubmit: false,
        roleOprImOrEx: data.permission_condition3,
        roleTeachers: data.permission_teacher_switch,
        roleStudents: data.permission_student_switch,
        roleUsers: [],
        roleUserGroup: [],
        enable: true,
        permissionContent: data.permission_content
      };
      let permissionUserIds = [];
      this.form.permissionContentArray = [];

      if (data.permission_content != "") {
        this.approverUsers = data.permission_content.split(",");
        permissionUserIds = data.permission_content.split(",");

        for (let i = 0; i < permissionUserIds.length; i++) {
          this.form.permissionContentArray.push({
            user_id: permissionUserIds[i]
          });
        }
      } //console.log(this.approverUsers,this.form.permissionContentArray);


      this.drawerRole = true;
    },

    deleteForm($event, data) {
      let params = {
        id: data.id
      };
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(api_url["a" /* common */].server_form_template_permission_del, params).then(res => {
        if (res.data.code == 200) {
          this.drawerRole = false;
          this.initParent();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    copyForm($event, data) {},

    enableForm($event, data, type) {
      let params = {
        id: data.id,
        enable: type
      };
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(api_url["a" /* common */].server_form_template_permission_enable, params).then(res => {
        if (res.data.code == 200) {
          this.drawerRole = false;
          this.initParent();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
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

        case 2:
          this.refreshStudentStatus = true;
          timer = setTimeout(() => {
            this.refreshStudentStatus = false;
            clearTimeout(timer);
          }, 1000);
          break;
      }
    },

    handleShowTeacher(type) {
      setTimeout(() => {
        if (type == 1) {
          this.$refs.popverTeacherRef._handleOpen();
        } else if (type == 2) {
          this.$refs.popverStudentRef._handleOpen();
        }
      }, 800);
    },

    handleSelUser(data, type) {
      if (type == 1) {
        this.form.approverTeacherId = data;
        let studentArr = this.form.approverStudentId ? this.form.approverStudentId : [];
        this.form.roleUsers = studentArr.concat(this.form.approverTeacherId);
      } else if (type == 2) {
        this.form.approverStudentId = data;
        let tesacherArr = this.form.approverTeacherId ? this.form.approverTeacherId : [];
        this.form.roleUsers = tesacherArr.concat(this.form.approverStudentId);
      }

      this.form.roleUsers = [...new Set(this.form.roleUsers)]; //console.log(this.form.roleUsers);

      this.approverUsers = this.form.roleUsers;
    }

  }
});
// CONCATENATED MODULE: ./components/form/MyFormSetRole.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_MyFormSetRolevue_type_script_lang_js_ = (MyFormSetRolevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/MyFormSetRole.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(565)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_MyFormSetRolevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "313a5c80",
  "e5543046"
  
)

/* harmony default export */ var MyFormSetRole = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyEnable: __webpack_require__(192).default,TeacherTreeAndListNoPage: __webpack_require__(187).default,StudentTreeAndListNoPage: __webpack_require__(203).default,DrawerLayoutRight: __webpack_require__(29).default})


/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormSetNotice.vue?vue&type=template&id=9aa1cd6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"padding-lr-10 padding-tb-10\" data-v-9aa1cd6c>","</div>",[_c('el-button',{attrs:{"size":"mini","type":"primary","icon":"el-icon-plus"},on:{"click":_vm.addRole}},[_vm._v("\n      "+_vm._s(_vm.$t("创建消息"))+"\n    ")])],1),_vm._ssrNode(" "),_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.data,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight15.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('创建日期')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(_vm.$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm"))+"\n          ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('触发条件')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.notice_condition1)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t("提交")))]):_vm._e(),_vm._v(" "),(scope.row.notice_condition2)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t("通过")))]):_vm._e(),_vm._v(" "),(scope.row.notice_condition3)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t("驳回")))]):_vm._e()],1),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.notice_condition1)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t("提交")))]):_vm._e(),_vm._v(" "),(scope.row.notice_condition2)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t("通过")))]):_vm._e(),_vm._v(" "),(scope.row.notice_condition3)?_c('el-tag',{attrs:{"size":"mini"}},[_vm._v(_vm._s(_vm.$t("驳回")))]):_vm._e()],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('推送人数')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.notice_user_id != '')?_c('span',[_vm._v(_vm._s(scope.row.notice_user_id.split(",").length))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.notice_user_id != '')?_c('span',[_vm._v(_vm._s(scope.row.notice_user_id.split(",").length))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"120","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-edit color-success margin-right-5",on:{"click":function($event){return _vm.editForm($event, scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteForm($event, scope.row)}}})]}}])})],1),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"1","append-to-body":true,"visible":_vm.drawerRole,"size":"500px"},on:{"close":_vm.closeDialog,"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n          "+_vm._s(_vm.$t('创建推送'))+"\n        ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("触发条件")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg"},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t('表单'))+": ")]),_vm._v(" "),_c('label',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t('当前表单')))])]),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('span',[_vm._v(_vm._s(_vm.$t('条件'))+": ")]),_vm._v(" "),_c('span',[_c('el-checkbox',{model:{value:(_vm.form.noticeCondition1),callback:function ($$v) {_vm.$set(_vm.form, "noticeCondition1", $$v)},expression:"form.noticeCondition1"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t("提交")))])]),_vm._v(" "),_c('el-checkbox',{model:{value:(_vm.form.noticeCondition2),callback:function ($$v) {_vm.$set(_vm.form, "noticeCondition2", $$v)},expression:"form.noticeCondition2"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t("通过")))])]),_vm._v(" "),_c('el-checkbox',{model:{value:(_vm.form.noticeCondition3),callback:function ($$v) {_vm.$set(_vm.form, "noticeCondition3", $$v)},expression:"form.noticeCondition3"}},[_c('span',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.$t("驳回")))])])],1)])]),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("推送人")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('div',[_c('span',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("选择范围"))+": ")]),_vm._v(" "),_c('span',[_c('el-popover',{attrs:{"popper-class":"custom-popper-class-form","placement":"left","width":"700","trigger":"click"},on:{"show":function($event){return _vm.handleShowTeacher(1)}}},[_c('div',[_c('teacher-tree-and-list-no-page',{ref:"popverTeacherRef",attrs:{"user-type":"user","group-id":_vm.form.id,"sel-arr":_vm.form.noticeUserIdArr,"set-type":"check"},on:{"select":function($event){return _vm.handleSelUser($event, 1)}}})],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","type":"success","plain":"","size":"small"},on:{"click":function($event){return _vm.loadingShow(1)}},slot:"reference"},[(_vm.refreshTeacherStatus == true)?_c('i',{staticClass:"fa fa-refresh fa-spin"}):_vm._e(),_vm._v("\n                  "+_vm._s(_vm.$t("选择"))+"\n                  "),_c('span',{staticClass:"color-muted"},[_vm._v("("+_vm._s(_vm.$t("人数"))+": "+_vm._s(_vm.approverUsers.length)+")")])])],1)],1)])])]),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("内容设置")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('div',[_c('div',{staticClass:"font-size-12"},[_c('div',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("消息标题")))]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('el-input',{model:{value:(_vm.form.noticeTitle),callback:function ($$v) {_vm.$set(_vm.form, "noticeTitle", $$v)},expression:"form.noticeTitle"}})],1)]),_vm._v(" "),_c('div',{staticClass:"font-size-12 margin-top-20"},[_c('div',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("消息内容")))]),_vm._v(" "),_c('div',{staticClass:"margin-top-5"},[_c('el-input',{attrs:{"type":"textarea","rows":10},model:{value:(_vm.form.noticeContent),callback:function ($$v) {_vm.$set(_vm.form, "noticeContent", $$v)},expression:"form.noticeContent"}})],1)])])])])]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"success","loading":_vm.btnLoading},on:{"click":_vm.okFormDrawDialog}},[_vm._v(_vm._s(_vm.$t("保存")))])],1)])],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/MyFormSetNotice.vue?vue&type=template&id=9aa1cd6c&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/validater/appFormSetValidater.js
var appFormSetValidater = __webpack_require__(194);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/status/MyEnable.vue + 4 modules
var MyEnable = __webpack_require__(192);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/MyFormSetNotice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var MyFormSetNoticevue_type_script_lang_js_ = ({
  name: 'myFormSetNotice',
  components: {
    MyEnable: MyEnable["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"]
  },
  mixins: [mixins["a" /* default */], appFormSetValidater["a" /* default */]],
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    formId: Object
  },
  computed: {},

  data() {
    return {
      drawerRole: false,
      subTitle: '',
      btnLoading: false,
      refreshTeacherStatus: false,
      refreshStudentStatus: false,
      approverUsers: [],
      form: {
        id: '',
        formId: '',
        noticeCondition1: false,
        noticeCondition2: false,
        noticeCondition3: false,
        noticeUserId: '',
        noticeUserIdArr: [],
        noticeTitle: '',
        noticeContent: ''
      }
    };
  },

  methods: {
    addRole() {
      this.drawerRole = true;
    },

    changeFormType(data) {
      this.form.roleType = data;
    },

    changeFormOprLook(data) {
      this.form.roleOprLook = data;
    },

    changeFormOprDel(data) {
      this.form.roleOprDel = data;
    },

    changeFormOprSubmit(data) {
      this.form.roleOprSubmit = data;
    },

    changeFormTeacher(data) {
      this.form.roleTeachers = data;
    },

    changeFormStudent(data) {
      this.form.roleStudents = data;
    },

    closeDialog() {
      this.form = {
        id: '',
        formId: '',
        noticeCondition1: false,
        noticeCondition2: false,
        noticeCondition3: false,
        noticeUserId: '',
        noticeUserIdArr: [],
        noticeTitle: '',
        noticeContent: ''
      };
      this.subTitle = "";
      this.approverUsers = [];
      this.drawerRole = false;
    },

    cancelDrawDialog() {
      this.drawerRole = false;
    },

    okFormDrawDialog() {
      let url = '';

      if (!this.form.noticeCondition1 && !this.form.noticeCondition2 && !this.form.noticeCondition3) {
        Object(utils["c" /* MessageWarning */])(this.$t("请设置触发条件"));
        return;
      } else if (this.form.noticeTitle == "" && this.form.noticeContent == "") {
        Object(utils["c" /* MessageWarning */])(this.$t("请设置内容信息"));
        return;
      } else if (this.form.noticeUserIdArr.length == 0) {
        Object(utils["c" /* MessageWarning */])(this.$t("请设置推送人"));
        return;
      }

      let params = {
        formId: this.formId.id,
        noticeCondition1: this.form.noticeCondition1,
        noticeCondition2: this.form.noticeCondition2,
        noticeCondition3: this.form.noticeCondition3,
        noticeTitle: this.form.noticeTitle,
        noticeContent: this.form.noticeContent
      };
      let contentArray = [];

      for (let i = 0; i < this.form.noticeUserIdArr.length; i++) {
        contentArray.push(this.form.noticeUserIdArr[i].user_id);
      }

      params['noticeUserId'] = contentArray.join();

      if (this.form.id != "") {
        params['id'] = this.form.id;
      }

      url = api_url["a" /* common */].server_form_template_notice_save;
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.drawerRole = false;
          this.initParent();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    initParent() {
      this.$emit('init');
    },

    editForm($event, data) {
      this.form = {
        id: data.id,
        formId: '',
        noticeCondition1: data.notice_condition1,
        noticeCondition2: data.notice_condition2,
        noticeCondition3: data.notice_condition3,
        noticeTitle: data.notice_title,
        noticeContent: data.notice_content
      };
      let permissionUserIds = [];

      if (data.notice_user_id != "") {
        let tempIds = JSON.parse(data.notice_user_id);

        for (let i = 0; i < tempIds.length; i++) {
          permissionUserIds.push({
            user_id: tempIds[i]
          });
        }

        this.form.noticeUserIdArr = permissionUserIds;
        this.approverUsers = permissionUserIds;
      }

      this.drawerRole = true;
    },

    deleteForm($event, data) {
      let params = {
        id: data.id
      };
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(api_url["a" /* common */].server_form_template_notice_del, params).then(res => {
        if (res.data.code == 200) {
          this.drawerRole = false;
          this.initParent();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    copyForm($event, data) {},

    enableForm($event, data, type) {
      let params = {
        id: data.id,
        enable: type
      };
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(api_url["a" /* common */].server_form_template_permission_enable, params).then(res => {
        if (res.data.code == 200) {
          this.drawerRole = false;
          this.initParent();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
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

        case 2:
          this.refreshStudentStatus = true;
          timer = setTimeout(() => {
            this.refreshStudentStatus = false;
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
      this.$set(this.form, 'noticeUserIdArr', data);
      this.approverUsers = data;
    }

  }
});
// CONCATENATED MODULE: ./components/form/MyFormSetNotice.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_MyFormSetNoticevue_type_script_lang_js_ = (MyFormSetNoticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/form/MyFormSetNotice.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(567)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_MyFormSetNoticevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9aa1cd6c",
  "2a59457f"
  
)

/* harmony default export */ var MyFormSetNotice = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeacherTreeAndListNoPage: __webpack_require__(187).default,DrawerLayoutRight: __webpack_require__(29).default})


/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetRole_vue_vue_type_style_index_0_id_313a5c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetRole_vue_vue_type_style_index_0_id_313a5c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetRole_vue_vue_type_style_index_0_id_313a5c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetRole_vue_vue_type_style_index_0_id_313a5c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetRole_vue_vue_type_style_index_0_id_313a5c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetRole_vue_vue_type_style_index_0_id_313a5c80_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-313a5c80]{box-shadow:0 0 4px #dcdfe6;padding:0}.form-set-left[data-v-313a5c80],.form-set-main[data-v-313a5c80]{border-right:1px solid #dcdfe6}.form-set-left[data-v-313a5c80]{width:200px;height:100%;background:#f8f8f8}.form-set-right[data-v-313a5c80]{margin-left:200px;height:100%}.form-set-menu-item[data-v-313a5c80]{font-size:12px;text-align:center;height:40px;line-height:40px}.form-set-menu-item-active[data-v-313a5c80]{background:#3e8db8;color:#fff}.header-block[data-v-313a5c80]{height:40px;line-height:40px}.tab-class[data-v-313a5c80]{cursor:default;padding:10px}.title-block-tag[data-v-313a5c80]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-313a5c80]{font-weight:700;position:relative;top:-5px}.block-item-bg[data-v-313a5c80]{border-radius:5px;background:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetNotice_vue_vue_type_style_index_0_id_9aa1cd6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetNotice_vue_vue_type_style_index_0_id_9aa1cd6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetNotice_vue_vue_type_style_index_0_id_9aa1cd6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetNotice_vue_vue_type_style_index_0_id_9aa1cd6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetNotice_vue_vue_type_style_index_0_id_9aa1cd6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSetNotice_vue_vue_type_style_index_0_id_9aa1cd6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-9aa1cd6c]{box-shadow:0 0 4px #dcdfe6;padding:0}.form-set-left[data-v-9aa1cd6c],.form-set-main[data-v-9aa1cd6c]{border-right:1px solid #dcdfe6}.form-set-left[data-v-9aa1cd6c]{width:200px;height:100%;background:#f8f8f8}.form-set-right[data-v-9aa1cd6c]{margin-left:200px;height:100%}.form-set-menu-item[data-v-9aa1cd6c]{font-size:12px;text-align:center;height:40px;line-height:40px}.form-set-menu-item-active[data-v-9aa1cd6c]{background:#3e8db8;color:#fff}.header-block[data-v-9aa1cd6c]{height:40px;line-height:40px}.tab-class[data-v-9aa1cd6c]{cursor:default;padding:10px}.title-block-tag[data-v-9aa1cd6c]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-9aa1cd6c]{font-weight:700;position:relative;top:-5px}.block-item-bg[data-v-9aa1cd6c]{border-radius:5px;background:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSet_vue_vue_type_style_index_0_id_9973bee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSet_vue_vue_type_style_index_0_id_9973bee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSet_vue_vue_type_style_index_0_id_9973bee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSet_vue_vue_type_style_index_0_id_9973bee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSet_vue_vue_type_style_index_0_id_9973bee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormSet_vue_vue_type_style_index_0_id_9973bee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-9973bee0]{box-shadow:0 0 4px #dcdfe6}.form-set-left[data-v-9973bee0],.form-set-main[data-v-9973bee0]{border-right:1px solid #dcdfe6}.form-set-left[data-v-9973bee0]{width:200px;height:100%;background:#f8f8f8}.form-set-right[data-v-9973bee0]{margin-left:201px}.form-set-menu-item[data-v-9973bee0]{font-size:12px;text-align:center;height:40px;line-height:40px}.form-set-menu-item-active[data-v-9973bee0]{background:#3e8db8;color:#fff}.title-block-tag[data-v-9973bee0]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-9973bee0]{font-weight:700;position:relative;top:-5px}.item-tag-block[data-v-9973bee0]{height:25px;line-height:25px;background:#8cc5ff;border-radius:5px;padding:0 10px;color:#909399}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormFlow_vue_vue_type_style_index_0_id_859dda9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormFlow_vue_vue_type_style_index_0_id_859dda9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormFlow_vue_vue_type_style_index_0_id_859dda9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormFlow_vue_vue_type_style_index_0_id_859dda9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormFlow_vue_vue_type_style_index_0_id_859dda9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyFormFlow_vue_vue_type_style_index_0_id_859dda9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-set-main[data-v-859dda9e]{box-shadow:0 0 4px #dcdfe6;border-right:1px solid #dcdfe6}.form-set-left[data-v-859dda9e]{margin-right:310px}.form-set-left[data-v-859dda9e],.form-set-right[data-v-859dda9e]{background:#f8f8f8;height:100%;box-shadow:0 0 4px #dcdfe6}.form-set-right[data-v-859dda9e]{width:300px}.form-set-menu-item[data-v-859dda9e]{font-size:12px;text-align:center;height:40px;line-height:40px}.form-set-menu-item-active[data-v-859dda9e]{background:#3e8db8;color:#fff}.title-block-tag[data-v-859dda9e]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-859dda9e]{font-weight:700;position:relative;top:-5px}.item-tag-block[data-v-859dda9e]{height:25px;line-height:25px;background:#8cc5ff;border-radius:5px;padding:0 10px;color:#909399}.flow-fixed-block[data-v-859dda9e]{width:40px;height:40px;line-height:40px;border-radius:100%;margin:20px auto 0;color:#fff}.flow-item-block[data-v-859dda9e]{border-radius:5px;background:#fff;min-height:50px;width:350px;margin:20px auto;box-shadow:0 0 4px #dcdfe6}.flow-item-title-block[data-v-859dda9e]{position:relative;height:30px;line-height:30px;padding:0 10px;color:#fff;text-align:left;border-top-left-radius:5px;border-top-right-radius:5px}.flow-item-close-block[data-v-859dda9e]{position:absolute;right:-10px;top:-10px}.flow-user-count-tag[data-v-859dda9e]{position:relative;display:inline-block;width:20px;height:20px;line-height:20px;border-radius:100%;background:#f56c6c;text-align:center;font-size:12px;color:#fff;top:-5px}.header-block[data-v-859dda9e]{height:40px;line-height:40px}.tab-class[data-v-859dda9e]{cursor:default;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appCreate_vue_vue_type_style_index_0_id_07e46af2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appCreate_vue_vue_type_style_index_0_id_07e46af2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appCreate_vue_vue_type_style_index_0_id_07e46af2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appCreate_vue_vue_type_style_index_0_id_07e46af2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appCreate_vue_vue_type_style_index_0_id_07e46af2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appCreate_vue_vue_type_style_index_0_id_07e46af2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title-block-tag[data-v-07e46af2]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-07e46af2]{font-weight:700;position:relative;top:-5px}.block-item-bg[data-v-07e46af2]{border-radius:5px;background:#fff;padding:10px}.upload-block-class[data-v-07e46af2]{text-align:center;font-size:12px;background:#000;width:100px;padding:5px 0;color:#fff}.item-img-class[data-v-07e46af2]{height:50px;width:50px}.item-img-set-class[data-v-07e46af2]{height:100px;width:100px}.header-block[data-v-07e46af2]{height:40px;line-height:40px}.tab-class[data-v-07e46af2]{cursor:default;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/appletInfo/app/appCreate.vue?vue&type=template&id=07e46af2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div data-v-07e46af2>","</div>",[_c('layout-lr',[_c('div',{attrs:{"slot":"left"},slot:"left"},[_c('div',{staticClass:"color-muted font-size-12 padding-tb-5 margin-top-10"},[_c('span',{staticClass:"layout-left-menu-title"},[_vm._v("应用设计")])]),_vm._v(" "),_c('my-el-tree',{ref:"myElTree",attrs:{"type":"100","extra-type":_vm.$route.query.appName},on:{"node-click":_vm.nodeClick,"all-click":_vm.nodeClick}})],1),_vm._v(" "),_c('div',{attrs:{"slot":"right"},slot:"right"},[_c('div',{staticClass:"layout-top-tab margin-top-5"},[_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('div',[_c('el-button',{attrs:{"size":"small","type":"primary","icon":"el-icon-plus"},on:{"click":function($event){return _vm.addInfo($event)}}},[_vm._v(_vm._s(_vm.$t("创建服务")))]),_vm._v(" "),(_vm.$route.query.id)?[_c('span',[_vm._v(_vm._s(_vm.$route.query.appName))])]:_vm._e()],2)]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":16}},[_c('div',{staticClass:"layout-inline"},[_c('my-select',{staticClass:"layout-item width-150",attrs:{"size":"small","placeholder":_vm.$t('类型'),"options":_vm.filterAppServerType,"clearable":true},on:{"change":function($event){return _vm.handleTypeChange($event, 1)}}}),_vm._v(" "),_c('my-select',{staticClass:"layout-item width-150",attrs:{"size":"small","placeholder":_vm.$t('状态'),"options":_vm.filterAppManageStatus,"clearable":true},on:{"change":function($event){return _vm.handleTypeChange($event, 2)}}}),_vm._v(" "),_c('my-input-button',{ref:"teacher width-150",attrs:{"size":"small","plain":"","width-class":"width: 180px","type":"success","clearable":true,"placeholder":_vm.$t('名称')},on:{"click":_vm.search}})],1)])],1)],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight2.height}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('创建日期')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$moment(scope.row.create_time).format("YYYY-MM-DD")))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(_vm.$moment(scope.row.create_time).format("YYYY-MM-DD"))+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('所属应用')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.applet_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(scope.row.applet_name)+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"form_name","label":_vm.$t('名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.form_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(scope.row.form_name)+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"appName","label":_vm.$t('类型')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.serverFormTypeInfo(scope.row.form_type, 'set')))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                        "+_vm._s(_vm.serverFormTypeInfo(scope.row.form_type, 'set'))+"\n                      ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"appName","label":_vm.$t('图标')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-image',{staticClass:"table-cell-image-slot",attrs:{"src":scope.row.form_logo}},[_c('div',{staticClass:"table-cell-image-slot",attrs:{"slot":"error"},slot:"error"},[_c('i',{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"14px"}})])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"appName","label":_vm.$t('状态')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.enable)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已发布")))]):_vm._e(),_vm._v(" "),(!scope.row.enable)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待发布")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.enable)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已发布")))]):_vm._e(),_vm._v(" "),(!scope.row.enable)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("待发布")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"120","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.enable == true)?_c('i',{staticClass:"fa fa-stop-circle margin-right-5 color-warning",on:{"click":function($event){return _vm.statusInfo(scope.row, false)}}}):_vm._e(),_vm._v(" "),(scope.row.enable == false)?_c('i',{staticClass:"fa fa-play-circle margin-right-5 color-success",on:{"click":function($event){return _vm.statusInfo(scope.row, true)}}}):_vm._e(),_vm._v(" "),_c('i',{staticClass:"fa fa-edit margin-right-5 color-grand",on:{"click":function($event){return _vm.setInfo(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteInfo(scope.row)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"60","label":_vm.$t('表单')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-cogs margin-right-5 color-grand",on:{"click":function($event){return _vm.formInfo(scope.row, scope.$index)}}})]}}])})],1)],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)])])],1),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","visible":_vm.drawerVisible,"size":"600px","title":_vm.$t('服务设置')},on:{"changeDrawer":_vm.closeDialog,"right-close":_vm.cancelDrawDialog}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("服务设置")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"60px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-300",attrs:{"size":"small"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('类型'),"prop":"type"}},[_c('my-select',{staticClass:"layout-item",attrs:{"size":"small","placeholder":_vm.$t('类型'),"sel-value":_vm.form.type,"options":_vm.filterAppServerType,"width-style":"300","clearable":true},on:{"change":function($event){return _vm.handleTypeChange($event, 3)}}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('应用'),"prop":"app"}},[_c('my-select',{staticClass:"layout-item width-300",attrs:{"size":"small","placeholder":_vm.$t('应用'),"sel-value":_vm.form.app,"options":_vm.apps,"width-style":"300","clearable":true},on:{"change":function($event){return _vm.handleTypeChange($event, 4)}}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('简介'),"prop":"dept"}},[_c('el-input',{staticClass:"custom-textarea-inner",staticStyle:{"width":"500px","resize":"none"},attrs:{"type":"textarea","autosize":{ minRows: 5},"maxlength":"150","show-word-limit":""},model:{value:(_vm.form.remarks),callback:function ($$v) {_vm.$set(_vm.form, "remarks", $$v)},expression:"form.remarks"}})],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("服务图标")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('div',[_c('el-image',{staticClass:"item-img-set-class",attrs:{"src":_vm.form.icon}},[_c('div',{staticClass:"margin-top-10 text-center",attrs:{"slot":"error"},slot:"error"},[_c('i',{staticClass:"el-icon-picture-outline",staticStyle:{"font-size":"60px"}})])])],1),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","left":"10px","bottom":"12px"}},[_c('upload-square',{attrs:{"action":_vm.uploadFileUrl,"max-size":"8","data":{path: 'applet'},"accept":".png,.jpg,.jpeg"},on:{"success":_vm.uploadFileSuccess}},[_c('div',{staticClass:"upload-block-class"},[_c('span',[_vm._v(_vm._s(_vm.$t("更换图标")))])])])],1),_vm._v(" "),_c('div',{staticClass:"moon-clearfix"})])]),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"color-muted margin-top-5"},[_c('span',[_c('label',{staticClass:"title-block-tag"}),_vm._v(" "),_c('label',{staticClass:"title-block-text color-warning"},[_vm._v(_vm._s(_vm.$t("其他操作")))])])]),_vm._v(" "),_c('div',{staticClass:"block-item-bg font-size-12",staticStyle:{"position":"relative"}},[_c('span',[_c('label',[_vm._v(_vm._s(_vm.$t("允许评价"))+":")]),_vm._v(" "),_c('el-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:(_vm.form.evaluate),callback:function ($$v) {_vm.$set(_vm.form, "evaluate", $$v)},expression:"form.evaluate"}})],1),_vm._v(" "),_c('span',{staticClass:"margin-left-10"},[_c('label',[_vm._v(_vm._s(_vm.$t("允许评分"))+":")]),_vm._v(" "),_c('el-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:(_vm.form.scope),callback:function ($$v) {_vm.$set(_vm.form, "scope", $$v)},expression:"form.scope"}})],1),_vm._v(" "),_c('span',{staticClass:"margin-left-10"},[_c('label',[_vm._v(_vm._s(_vm.$t("首页推荐"))+":")]),_vm._v(" "),_c('el-switch',{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:(_vm.form.recommend),callback:function ($$v) {_vm.$set(_vm.form, "recommend", $$v)},expression:"form.recommend"}})],1)])])]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":_vm.okAppDrawDialog}},[_vm._v(_vm._s(_vm.$t("应用")))])],1)])]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","show-close":true,"hide-footer":!_vm.showFooter,"visible":_vm.drawerForm,"size":"85%"},on:{"changeDrawer":_vm.closeDialog,"opened":_vm.openedForm}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold",class:_vm.activeName == 'form' ? 'color-grand' : '',on:{"click":function($event){return _vm.handleClick('form')}}},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n            "+_vm._s(_vm.$t('表单设计'))+"\n          ")]),_vm._v(" "),_c('span',{staticClass:"tab-class font-bold margin-left-5",class:_vm.activeName == 'set' ? 'color-grand' : '',on:{"click":function($event){return _vm.handleClick('set')}}},[_c('i',{staticClass:"fa fa-cog"}),_vm._v("\n            "+_vm._s(_vm.$t('表单设置'))+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[(_vm.activeName == 'form')?_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.formLoading),expression:"formLoading"}],attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.01)"}},[_c('fc-designer',{ref:"designer",style:(_vm.drawHeight4)})],1):_vm._e(),_vm._v(" "),(_vm.activeName == 'flow')?_c('div',{staticStyle:{"position":"relative"}},[_c('my-form-flow',{ref:"flow",attrs:{"formId":_vm.serverDataItem,"flow-data":_vm.flowListData,"form":_vm.flowFormData},on:{"versionClick":_vm.versionClick}})],1):_vm._e(),_vm._v(" "),(_vm.activeName == 'set')?_c('div',[_c('my-form-set',{attrs:{"formId":_vm.serverDataItem}})],1):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-row',[_c('el-col',{staticClass:"text-left padding-lr-10",attrs:{"span":12}},[(_vm.activeName == 'form')?_c('el-button',{attrs:{"size":"mini","type":"warning","loading":_vm.btnLoading},on:{"click":_vm.sendTempShop}},[_c('i',{staticClass:"fa fa-send"}),_vm._v("\n              "+_vm._s(_vm.$t("发布到模版中心"))+"\n            ")]):_c('span',[_vm._v(" ")])],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"text-right padding-lr-10"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.cancelDrawDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"success","loading":_vm.btnLoading},on:{"click":function($event){return _vm.okFormDrawDialog()}}},[_vm._v(_vm._s(_vm.$t("保存")))]),_vm._v(" "),(_vm.activeName == 'flow')?_c('el-button',{attrs:{"size":"mini","type":"warning","loading":_vm.btnNewLoading},on:{"click":function($event){return _vm.okFormDrawDialog('new')}}},[_vm._v(_vm._s(_vm.$t("保存为新版本")))]):_vm._e()],1)])],1)],1)]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","hideFooter":true,"visible":_vm.drawerVersion,"size":"600px","title":_vm.$t('版本管理')},on:{"changeDrawer":_vm.closeVersionDialog,"right-close":_vm.cancelVersionDrawDialog}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.flowVersionData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('版本名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.version_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                      "+_vm._s(scope.row.version_name)+"\n                    ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('状态')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(_vm.serverDataItem.form_process_id == scope.row.id && _vm.versionStatus == '')?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("当前版本")))]):_vm._e(),_vm._v(" "),(_vm.serverDataItem.form_process_id != scope.row.id && _vm.versionStatus == '')?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未启用")))]):_vm._e(),_vm._v(" "),(_vm.serverDataItem.form_process_id != scope.row.id && _vm.versionStatus == 'edit')?_c('label',{staticClass:"color-danger"},[_vm._v("--")]):_vm._e(),_vm._v(" "),(_vm.serverDataItem.form_process_id == scope.row.id && _vm.versionStatus == 'edit')?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("编辑中")))]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(_vm.serverDataItem.form_process_id == scope.row.id && _vm.versionStatus == '')?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("当前版本")))]):_vm._e(),_vm._v(" "),(_vm.serverDataItem.form_process_id != scope.row.id && _vm.versionStatus == '')?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未启用")))]):_vm._e(),_vm._v(" "),(_vm.serverDataItem.form_process_id != scope.row.id && _vm.versionStatus == 'edit')?_c('label',{staticClass:"color-danger"},[_vm._v("--")]):_vm._e(),_vm._v(" "),(_vm.serverDataItem.form_process_id == scope.row.id && _vm.versionStatus == 'edit')?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("编辑中")))]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"width":"100","align":"center","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-edit margin-right-5 color-success",on:{"click":function($event){return _vm.editFlowInfo(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash margin-right-5 color-danger",on:{"click":function($event){return _vm.delFlowInfo(scope.row)}}}),_vm._v(" "),(_vm.serverDataItem.form_process_id != scope.row.id)?_c('i',{staticClass:"fa fa-cog margin-right-5 color-grand",on:{"click":function($event){return _vm.currentFlowInfo(scope.row)}}}):_vm._e()]}}])})],1)],1)]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","detail":_vm.subTitle,"content":"确认需要删除该信息？"},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/appletInfo/app/appCreate.vue?vue&type=template&id=07e46af2&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/validater/rules.js
var validater_rules = __webpack_require__(11);

// CONCATENATED MODULE: ./utils/validater/appCreateValidater.js

/* harmony default export */ var appCreateValidater = ({
  data() {
    return {
      rules: {
        name: [{
          required: true,
          message: this.$t("请输入名称"),
          trigger: 'blur'
        }],
        app: [{
          required: true,
          message: this.$t("请选择应用"),
          trigger: 'change'
        }],
        type: [{
          required: true,
          message: this.$t("请选择类型"),
          trigger: 'change'
        }]
      }
    };
  }

});
// EXTERNAL MODULE: ./components/MySelect.vue + 4 modules
var MySelect = __webpack_require__(147);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./components/utils/upload/UploadSquare.vue + 4 modules
var UploadSquare = __webpack_require__(30);

// EXTERNAL MODULE: ./components/tree/MyElTree.vue + 4 modules
var MyElTree = __webpack_require__(155);

// CONCATENATED MODULE: ./formJs/form/TestForm.js
const label = '按钮';
const TestForm_name = 'el-button';
/* harmony default export */ var TestForm = ({
  icon: 'icon-button',
  label,
  name: TestForm_name,
  mask: false,

  rule() {
    return {
      type: TestForm_name,
      props: {},
      children: ['按钮']
    };
  },

  props() {
    return [{
      type: 'input',
      field: 'formCreateChild',
      title: '内容'
    }, {
      type: 'select',
      field: 'size',
      title: '尺寸',
      options: [{
        label: 'medium',
        value: 'medium'
      }, {
        label: 'small',
        value: 'small'
      }, {
        label: 'mini',
        value: 'mini'
      }]
    }, {
      type: 'select',
      field: 'type',
      title: '类型',
      options: [{
        label: 'primary',
        value: 'primary'
      }, {
        label: 'success',
        value: 'success'
      }, {
        label: 'warning',
        value: 'warning'
      }, {
        label: 'danger',
        value: 'danger'
      }, {
        label: 'info',
        value: 'info'
      }, {
        label: 'text',
        value: 'text'
      }]
    }, {
      type: 'switch',
      field: 'plain',
      title: '是否朴素按钮'
    }, {
      type: 'switch',
      field: 'round',
      title: '是否圆角按钮'
    }, {
      type: 'switch',
      field: 'circle',
      title: '是否圆形按钮'
    }, {
      type: 'switch',
      field: 'loading',
      title: '是否加载中状态'
    }, {
      type: 'switch',
      field: 'disabled',
      title: '是否禁用状态'
    }, {
      type: 'input',
      field: 'icon',
      title: '图标类名'
    }];
  }

});
// EXTERNAL MODULE: ./components/form/MyFormSet.vue + 6 modules
var MyFormSet = __webpack_require__(429);

// EXTERNAL MODULE: ./components/form/MyFormFlow.vue + 4 modules
var MyFormFlow = __webpack_require__(437);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/appletInfo/app/appCreate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var appCreatevue_type_script_lang_js_ = ({
  components: {
    MyFormFlow: MyFormFlow["default"],
    MyFormSet: MyFormSet["default"],
    MyElTree: MyElTree["default"],
    UploadSquare: UploadSquare["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"],
    MySelect: MySelect["default"]
  },
  mixins: [mixins["a" /* default */], appCreateValidater],

  data() {
    return {
      tableData: [],
      collegeList: [],
      flowVersionData: [],
      apps: [],
      types: [],
      flowListData: [],
      formFieldList: [],
      flowFormData: {},
      subTitle: '',
      collegeData: '',
      searchAppId: '',
      searchKey: '',
      searchType: '',
      searchStatus: '',
      detailData: '',
      serverImg: '',
      uploadFileUrl: api_url["a" /* common */].upload_file,
      activeName: 'form',
      dialogLoading: false,
      formLoading: false,
      dialogApp: false,
      visibleConfim: false,
      drawerVisible: false,
      drawerForm: false,
      btnLoading: false,
      btnNewLoading: false,
      showFooter: true,
      drawerVersion: false,
      versionStatus: '',
      serverDataItem: '',
      serverDataIndex: '',
      form: {
        id: '',
        name: '',
        type: '',
        app: '',
        icon: '',
        remarks: '',
        scope: true,
        evaluate: true,
        recommend: false
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
    this.initApp();
  },

  methods: {
    init() {
      let params = {
        page: this.page,
        num: this.num,
        appletId: this.$route.query.id ? this.$route.query.id : this.searchAppId,
        formType: this.searchType,
        enable: this.searchStatus,
        searchKey: this.searchKey
      };
      this.$axios.get(api_url["a" /* common */].server_list_page, {
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

    initApp() {
      let params = {};
      this.$axios.get(api_url["a" /* common */].server_applet_all_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          let array = [];

          for (let i = 0; i < res.data.data.length; i++) {
            array.push({
              text: res.data.data[i].appletName,
              value: res.data.data[i].id + '',
              label: res.data.data[i].appletName,
              enable: res.data.data[i].enable
            });
          }

          this.apps = array;
        }
      });
    },

    initVersion(type) {
      let params = {
        page: 1,
        num: 9999,
        formId: this.serverDataItem.id
      };
      this.$axios.get(api_url["a" /* common */].server_form_template_form_process_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          if (type == 'current') {
            for (let i = 0; i < res.data.data.list.length; i++) {
              let processId = res.data.data.list[i].id;

              if (processId == this.serverDataItem.form_process_id) {
                let formProcess = JSON.parse(res.data.data.list[i].form_process);
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
                  id: res.data.data.list[i].id,
                  auditType: '',
                  name: res.data.data.list[i].version_name,
                  allowBack: res.data.data.list[i].allow_revoke,
                  urge: res.data.data.list[i].allow_urge,
                  autoAudit: res.data.data.list[i].allow_auto,
                  merge: res.data.data.list[i].allow_merge
                };
                this.flowFormData = formObj;
              }
            }
          }

          this.flowVersionData = res.data.data.list; // this.total = res.data.data.totalCount;
          // this.num = res.data.data.num;
          // this.page = res.data.data.currentPage;
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
      this.searchAppId = data.id;
      this.page = 1;
      this.init();
    },

    search(data) {
      this.searchKey = data.input;
      this.page = 1;
      this.init(data);
    },

    addInfo() {
      this.activeName = 'form';
      this.drawerVisible = true;
    },

    handleTypeChange(event, type) {
      if (type == 1) {
        this.searchType = event;
      } else if (type == 2) {
        this.searchStatus = event;
      } else if (type == 3) {
        this.form.type = event;
      } else if (type == 4) {
        this.form.app = event;
      }
    },

    handleClick(tab) {
      this.activeName = tab;

      if (tab == 'set') {
        this.showFooter = false;
      } else if (tab == 'form') {
        this.openedForm();
        this.showFooter = true;
      } else {
        this.showFooter = true;
      }
    },

    deleteInfo(item) {
      this.form.id = item.id;
      this.visibleConfim = true;
    },

    setInfo(item) {
      this.detailData = item;
      this.form = {
        id: item.id,
        name: item.form_name,
        type: item.form_type + '',
        app: item.applet_id + '',
        icon: item.form_logo,
        remarks: item.des,
        scope: item.allow_score,
        evaluate: item.allow_appraise,
        recommend: item.recommend
      };
      this.drawerVisible = true;
    },

    statusInfo(item, type) {
      let params = {
        id: item.id,
        enable: type
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].server_list_enable, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }
      });
    },

    formInfo(item, index) {
      this.serverDataItem = item;
      this.serverDataIndex = index;
      this.initVersion('current');
      this.drawerForm = true;
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

    closeVersionDialog(event) {
      this.flowVersionData = [];
      this.drawerVersion = event;
    },

    closeDialog(event) {
      this.form = {
        id: '',
        name: '',
        type: '',
        app: '',
        icon: '',
        remarks: '',
        scope: true,
        evaluate: true,
        recommend: false
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
      this.resetCasadeSelector('SelectorCollege');

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      if (this.$refs.designer) {
        this.$refs.designer.setRule([]);
        this.$refs.designer.setOption(this.formOption);
      }

      this.drawerVisible = event;
      this.serverDataItem = '';
      this.serverDataIndex = '';
      this.activeName = 'form';
      this.showFooter = true;
      this.init();
      this.btnLoading = false;
      this.drawerForm = false;
    },

    cancelVersionDrawDialog() {
      this.drawerVersion = false;
    },

    cancelDrawDialog() {
      this.detailData = '';
      this.drawerVisible = false;
      this.drawerForm = false;
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
      url = api_url["a" /* common */].server_list_del;
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

    uploadFileSuccess(res, file) {
      if (res.code == 200) {
        this.form.icon = res.data.url;
      } else {}
    },

    versionClick() {
      this.initVersion(); //this.versionStatus = '';

      this.drawerVersion = true;
    },

    okAppDrawDialog() {
      let url = '';
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.icon == "") {
            Object(utils["c" /* MessageWarning */])(this.$t("请设置图标"));
            return;
          }

          this.dialogLoading = true;
          let params = {
            formName: this.form.name,
            appletId: this.form.app,
            formType: this.form.type,
            formLogo: this.form.icon,
            allowAppraise: this.form.evaluate,
            allowScore: this.form.scope,
            recommend: this.form.recommend,
            des: this.form.remarks
          };

          if (this.form.id != "") {
            params['id'] = this.form.id;
          }

          url = api_url["a" /* common */].server_list_save;
          params = this.$qs.stringify(params);
          this.$axios.post(url, params).then(res => {
            if (res.data.code == 200) {
              this.drawerVisible = false;
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

    sendTempShop() {
      let url = '';
      let params = {
        id: this.serverDataItem.id,
        content: JSON.stringify(this.$refs.designer.getRule())
      };
      url = api_url["a" /* common */].server_form_template_shop;
      params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params).then(res => {
        if (res.data.code == 200) {
          this.init();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.btnLoading = false;
      });
    },

    okFormDrawDialog(type) {
      let url = '';
      let rules = {};

      if (this.activeName == 'form') {
        rules = {
          rule: this.$refs.designer.getRule(),
          option: this.$refs.designer.getOption()
        };
        let params = {
          id: this.serverDataItem.id,
          content: JSON.stringify(rules)
        };
        url = api_url["a" /* common */].server_form_template_update;
        params = this.$qs.stringify(params);
        this.btnLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200) {
            this.init();
            this.$set(this.serverDataItem, 'form_content', JSON.stringify(rules));
            Object(utils["b" /* MessageSuccess */])(res.data.desc);
          } else {
            Object(utils["a" /* MessageError */])(res.data.desc);
          }

          this.btnLoading = false;
        });
      } else if (this.activeName == 'flow') {
        let flowData = this.$refs.flow.flowData;
        let flowForm = this.$refs.flow.form;
        let ntype = '';
        let htype = '';
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
          formId: this.serverDataItem.id,
          formProcess: JSON.stringify(flowDataArray),
          allowRevoke: flowForm.allowBack,
          allowUrge: flowForm.urge,
          allowAuto: flowForm.autoAudit,
          allowMerge: flowForm.merge
        };

        if (flowForm.id != '' && type != 'new') {
          flowDataOjb['id'] = flowForm.id;
        }

        if (type == 'new' || this.versionStatus == "edit") {
          flowDataOjb['current'] = false;
        } else {
          flowDataOjb['current'] = true;
        }

        flowDataOjb = this.$qs.stringify(flowDataOjb);
        this.btnLoading = true;
        this.$axios.post(api_url["a" /* common */].server_form_template_form_process_save, flowDataOjb, {
          loading: false
        }).then(res => {
          if (res.data.code == 200) {
            Object(utils["b" /* MessageSuccess */])(res.data.desc);
          } else {
            Object(utils["a" /* MessageError */])(res.data.desc);
          }

          this.btnLoading = false;
        });
      }

      if (this.activeName == 'set') {}
    },

    editFlowInfo(data) {
      this.drawerVersion = false;
      this.versionStatus = 'edit';
      this.serverDataItem.form_process_id = data.id;
      this.initVersion('current');
    },

    delFlowInfo(data) {
      let params = {
        id: data.id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].server_form_template_form_process_del, params).then(res => {
        if (res.data.code == 200) {
          this.initVersion();
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }
      });
    },

    currentFlowInfo(data) {
      let params = {
        id: this.serverDataItem.id,
        processId: data.id
      };
      this.versionStatus = '';
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].server_form_template_form_process_current, params).then(res => {
        if (res.data.code == 200) {
          this.tableData[this.serverDataIndex].form_process_id = data.id;
          this.serverDataItem.form_process_id = data.id;
          this.initVersion('current');
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }
      });
    }

  },
  watch: {
    '$route': function (to, from) {
      //监听路由变化
      this.$nextTick(() => {
        this.searchKey = '';
        this.searchAppId = '';
        this.page = 1;
        this.$refs.myElTree.initInfo();
        this.init();
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/appletInfo/app/appCreate.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_appCreatevue_type_script_lang_js_ = (appCreatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/appletInfo/app/appCreate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(573)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_appCreatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "07e46af2",
  "e2d7d888"
  
)

/* harmony default export */ var appCreate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyElTree: __webpack_require__(155).default,MySelect: __webpack_require__(147).default,MyInputButton: __webpack_require__(146).default,MyPagination: __webpack_require__(27).default,LayoutLr: __webpack_require__(156).default,UploadSquare: __webpack_require__(30).default,DrawerLayoutRight: __webpack_require__(29).default,MyFormFlow: __webpack_require__(437).default,MyFormSet: __webpack_require__(429).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=appCreate.js.map