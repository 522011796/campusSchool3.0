exports.ids = [112];
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

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("45febb56", content, true, context)
};

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dormData_vue_vue_type_style_index_0_id_5123fe46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dormData_vue_vue_type_style_index_0_id_5123fe46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dormData_vue_vue_type_style_index_0_id_5123fe46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dormData_vue_vue_type_style_index_0_id_5123fe46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dormData_vue_vue_type_style_index_0_id_5123fe46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dormData_vue_vue_type_style_index_0_id_5123fe46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-block[data-v-5123fe46]{height:40px;line-height:40px}.block-table-main[data-v-5123fe46]{border:1px solid #dcdfe6}.block-table-main .item[data-v-5123fe46]{height:40px;line-height:40px}.title-block-tag[data-v-5123fe46]{display:inline-block;height:20px;width:3px;background:#e6a23c;font-weight:700;border-radius:3px}.title-block-text[data-v-5123fe46]{font-weight:700;position:relative;top:-5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/data/dormData.vue?vue&type=template&id=5123fe46&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div data-v-5123fe46>","</div>",[_c('layout-lr',[_c('div',{attrs:{"slot":"left"},slot:"left"},[_c('div',{staticClass:"color-muted font-size-12 padding-tb-5 margin-top-10"},[_c('span',{staticClass:"layout-left-menu-title"},[_vm._v("选寝数据")])]),_vm._v(" "),_c('my-el-tree',{attrs:{"type":"1","sub-type":"4"},on:{"node-click":_vm.nodeClick,"all-click":_vm.nodeClick}})],1),_vm._v(" "),_c('div',{attrs:{"slot":"right"},slot:"right"},[_c('div',{staticClass:"layout-top-tab margin-top-5"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"layout-inline"},[_c('el-button',{staticClass:"layout-item",attrs:{"size":"small","type":"warning","icon":"el-icon-download"},on:{"click":function($event){return _vm.expandInfo($event)}}},[_vm._v(_vm._s(_vm.$t("导出")))]),_vm._v(" "),_c('el-button-group',{staticClass:"layout-item",staticStyle:{"position":"relative","top":"-1px"}},[_c('el-button',{attrs:{"size":"small","type":"text"}},[_c('label',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("总人数"))+_vm._s(_vm.total)+" | ")])]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"text"}},[_c('label',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("已入住"))+_vm._s(_vm.signNum)+" | ")])]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"text"}},[_c('label',{staticClass:"color-muted"},[_vm._v(_vm._s(_vm.$t("未入住"))+_vm._s(_vm.unSignNum))])])],1),_vm._v(" "),_c('my-select',{staticClass:"layout-item width-100",attrs:{"size":"small","placeholder":_vm.$t('流程名称'),"sel-value":_vm.processId,"options":_vm.flowOptions,"clearable":true},on:{"change":function($event){return _vm.handleSearchChange($event, 2)}}})],1)]),_vm._v(" "),_c('el-col',{staticClass:"text-right",attrs:{"span":12}},[_c('my-input-button',{ref:"teacher width-150",attrs:{"size":"small","plain":"","width-class":"width: 140px","type":"success","clearable":true,"placeholder":_vm.$t('姓名/录取号')},on:{"click":_vm.search}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight2.height},on:{"filter-change":_vm.fliterTable}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('姓名')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.real_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.real_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('性别'),"width":"120","column-key":"sexType","filter-multiple":false,"filters":_vm.filtersSexType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_c('my-sex',{attrs:{"tag":"text","sex":scope.row.sex}})],1),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_c('my-sex',{attrs:{"tag":"text","sex":scope.row.sex}})],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('院系')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.college_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.college_name)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('专业')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.major_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.major_name)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('班级')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.class_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                    "+_vm._s(scope.row.class_name)+"\n                  ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('入住状态'),"width":"120","column-key":"infoType","filter-multiple":false,"filters":_vm.filtersInfoStatus},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.room_status == 1)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已入住")))]):_vm._e(),_vm._v(" "),(scope.row.room_status == 0)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未入住")))]):_vm._e(),_vm._v(" "),(!scope.row.room_status && scope.row.room_status !== 0)?_c('label',[_vm._v("--")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.room_status == 1)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已入住")))]):_vm._e(),_vm._v(" "),(scope.row.room_status == 0)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未入住")))]):_vm._e(),_vm._v(" "),(!scope.row.room_status && scope.row.room_status !== 0)?_c('label',[_vm._v("--")]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('缴费状态'),"width":"120","column-key":"payStatus","filter-multiple":false,"filters":_vm.filtersPayStatus},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.payment_status == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未缴费")))]):_vm._e(),_vm._v(" "),(scope.row.payment_status == 2)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("部分缴费")))]):_vm._e(),_vm._v(" "),(scope.row.payment_status == 3)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已缴费")))]):_vm._e(),_vm._v(" "),(!scope.row.payment_status)?_c('label',[_vm._v("--")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.payment_status == 1)?_c('label',{staticClass:"color-danger"},[_vm._v(_vm._s(_vm.$t("未缴费")))]):_vm._e(),_vm._v(" "),(scope.row.payment_status == 2)?_c('label',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("部分缴费")))]):_vm._e(),_vm._v(" "),(scope.row.payment_status == 3)?_c('label',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("已缴费")))]):_vm._e(),_vm._v(" "),(!scope.row.payment_status)?_c('label',[_vm._v("--")]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('选寝类型')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.rule_type == 0)?_c('label',[_vm._v(_vm._s(_vm.$t('宿舍')))]):(scope.row.rule_type == 1)?_c('label',[_vm._v(_vm._s(_vm.$t('套餐')))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.rule_type == 0)?_c('label',[_vm._v(_vm._s(_vm.$t('宿舍')))]):(scope.row.rule_type == 1)?_c('label',[_vm._v(_vm._s(_vm.$t('套餐')))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('宿舍区域')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.pac_region)?_c('label',[_vm._v(_vm._s(scope.row.pac_region))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.pac_region)?_c('label',[_vm._v(_vm._s(scope.row.pac_region))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('套餐名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.pac_name)?_c('label',[_vm._v(_vm._s(scope.row.pac_name))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.pac_name)?_c('label',[_vm._v(_vm._s(scope.row.pac_name))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('套餐价格')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.pac_price)?_c('label',[_vm._v(_vm._s(scope.row.pac_price))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.pac_price)?_c('label',[_vm._v(_vm._s(scope.row.pac_price))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('楼栋')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.build_name)?_c('label',[_vm._v(_vm._s(scope.row.build_name))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.build_name)?_c('label',[_vm._v(_vm._s(scope.row.build_name))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('楼层')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.floor_num)?_c('label',[_vm._v(_vm._s(scope.row.floor_num))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.floor_num)?_c('label',[_vm._v(_vm._s(scope.row.floor_num))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('房间号')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.dormitory_no)?_c('label',[_vm._v(_vm._s(scope.row.dormitory_no))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.dormitory_no)?_c('label',[_vm._v(_vm._s(scope.row.dormitory_no))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('床位号')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.bed_no)?_c('label',[_vm._v(_vm._s(scope.row.bed_no))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.bed_no)?_c('label',[_vm._v(_vm._s(scope.row.bed_no))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('宿舍类型'),"width":"120","column-key":"dormType","filter-multiple":false,"filters":_vm.filtersDormType},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.type == 1)?_c('label',[_vm._v(_vm._s(_vm.$t("男生宿舍")))]):_vm._e(),_vm._v(" "),(scope.row.type == 0)?_c('label',[_vm._v(_vm._s(_vm.$t("女生宿舍")))]):_vm._e(),_vm._v(" "),(!scope.row.type && scope.row.type !==0)?_c('label',[_vm._v("--")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.type == 1)?_c('label',[_vm._v(_vm._s(_vm.$t("男生宿舍")))]):_vm._e(),_vm._v(" "),(scope.row.type == 0)?_c('label',[_vm._v(_vm._s(_vm.$t("女生宿舍")))]):_vm._e(),_vm._v(" "),(!scope.row.type && scope.row.type !==0)?_c('label',[_vm._v("--")]):_vm._e()])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('价格')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.room_price)?_c('label',[_vm._v(_vm._s(scope.row.room_price))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.room_price)?_c('label',[_vm._v(_vm._s(scope.row.room_price))]):_c('label',[_vm._v("--")])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","width":"260","fixed":"right","label":_vm.$t('操作')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){return _vm.detailInfo(scope.row)}}},[_vm._v(_vm._s(_vm.$t("入住")))]),_vm._v(" "),(scope.row.bed_no || scope.row.pac_name)?_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){return _vm.deleteInfo(scope.row, -1)}}},[_vm._v(_vm._s(_vm.$t("移除")))]):_vm._e(),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){return _vm.signInfo(scope.row)}}},[_vm._v(_vm._s(_vm.$t("详细")))])]}}])})],1)],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.total,"current-page":_vm.page,"page-size":_vm.num},on:{"currentPage":_vm.currentPage,"sizeChange":_vm.sizeChange,"jumpChange":_vm.jumpPage}})],1)])])],1),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","show-close":true,"visible":_vm.dialogVisible,"size":"680px"},on:{"changeDrawer":_vm.closeDialog}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"header-block padding-lr-10"},[_c('span',{staticClass:"tab-class font-bold"},[_c('i',{staticClass:"fa fa-file"}),_vm._v("\n          "+_vm._s(_vm.$t('报到单'))+"\n        ")])])]),_vm._v(" "),_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[_c('div',[_c('div',{staticClass:"padding-tb-10 padding-lr-10"},[_c('span',{staticClass:"title-block-tag"}),_vm._v(" "),_c('span',{staticClass:"title-block-text"},[_vm._v(_vm._s(_vm.$t("基本信息")))]),_vm._v(" "),_c('div',{staticClass:"pull-right"},[_c('el-image',{staticStyle:{"width":"120px","height":"30px"},attrs:{"src":_vm.g_BarCode}})],1)]),_vm._v(" "),_c('table',{staticClass:"custom-table"},[_c('tr',[_c('td',{staticStyle:{"width":"20%"},attrs:{"rowspan":"2"}},[(_vm.detailData.photo_simple)?_c('img',{staticStyle:{"width":"80px","height":"80px","margin-top":"5px"},attrs:{"src":_vm.detailData.photo_simple}}):_vm._e()]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold",staticStyle:{"width":"10%"}},[_vm._v(_vm._s(_vm.$t("姓名")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",staticStyle:{"width":"20%"}},[_vm._v(_vm._s(_vm.detailData.real_name))]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold",staticStyle:{"width":"10%"}},[_vm._v(_vm._s(_vm.$t("性别")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",staticStyle:{"width":"10%"}},[_c('my-sex',{attrs:{"tag":"text","sex":_vm.detailData.sex}})],1),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold",staticStyle:{"width":"10%"}},[_vm._v(_vm._s(_vm.$t("录取号")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",staticStyle:{"width":"20%"}},[_vm._v(_vm._s(_vm.detailData.student_id))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("学院")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.detailData.college_name))]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("专业")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.detailData.major_name))]),_vm._v(" "),_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("班级")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12"},[_vm._v(_vm._s(_vm.detailData.class_name))])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"font-size-12 font-bold"},[_vm._v(_vm._s(_vm.$t("宿舍信息")))]),_vm._v(" "),_c('td',{staticClass:"color-muted font-size-12",attrs:{"colspan":"6"}},[(_vm.detailData.build_name)?_c('span',[_vm._v("\n                "+_vm._s(_vm.detailData.build_name)+_vm._s(_vm.detailData.floor_num)+_vm._s(_vm.$t("层"))+_vm._s(_vm.detailData.dormitory_no)+"\n              ")]):_vm._e(),_vm._v(" "),(_vm.detailData.pac_name && !_vm.detailData.build_name)?_c('span',[_vm._v("\n                "+_vm._s(_vm.detailData.pac_name)+"\n                "),_c('label',{staticClass:"font-size-12 color-muted"},[_vm._v("\n                  (¥"+_vm._s(_vm.detailData.pac_price)+" -- "+_vm._s(_vm.detailData.pac_region)+")\n                ")])]):_vm._e()])])])]),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('div',{staticClass:"padding-tb-10 padding-lr-10"},[_c('span',{staticClass:"title-block-tag"}),_vm._v(" "),_c('span',{staticClass:"title-block-text"},[_vm._v(_vm._s(_vm.$t("缴费信息")))])]),_vm._v(" "),_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.tableSignData,"header-cell-class-name":"custom-table-cell-bg","size":"medium"}},[_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('费用名称')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.item_name))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.item_name)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('缓缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.delay_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.delay_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('贷款')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.loan_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.loan_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('减免')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.deduction_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.deduction_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('实缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.should_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.should_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('已缴')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.paid_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.paid_amount)+"\n                ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('未缴金额')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[_vm._v(_vm._s(scope.row.wait_amount))]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                  "+_vm._s(scope.row.wait_amount)+"\n                ")])])]}}])})],1)],1),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('el-image',{staticStyle:{"width":"80px","height":"80px"},attrs:{"src":_vm.g_QrCode}})],1)])]),_vm._ssrNode(" "),_c('drawer-layout-right',{attrs:{"tabindex":"0","show-close":false,"visible":_vm.dialogDetail,"size":"680px"},on:{"changeDrawer":_vm.closeDialog,"right-close":_vm.cancelDrawDialog}},[_c('div',{staticClass:"color-muted",attrs:{"slot":"content"},slot:"content"},[(!_vm.commDrawer)?_c('div',{staticClass:"layout-inline"},[_c('my-cascader',{ref:"SelectorDormDept",staticClass:"layout-item",attrs:{"placeholder":_vm.$t('请选择宿舍楼'),"clearable":true,"size":"small","width-style":"160","sel-value":_vm.searchCommDeptBedData,"type":"2","sub-type":"2"},on:{"change":function($event){return _vm.handleCascaderBedChange($event)}}})],1):_vm._e(),_vm._v(" "),(!_vm.commDrawer)?_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableDormLoading),expression:"tableDormLoading"}],ref:"dormTableRef",staticClass:"margin-top-10",attrs:{"data":_vm.tableDormData,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{staticClass:"color-grand",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.selectDorm(scope.row)}}},[_vm._v(_vm._s(_vm.$t("分配")))])]}}],null,false,366502153)}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"dormitory_no","align":"center","label":"宿舍编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"宿舍类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('label',[_vm._v(_vm._s(_vm.dormTypeTextInfo(scope.row.type)))])]}}],null,false,2193574826)}),_vm._v(" "),_c('el-table-column',{attrs:{"property":"student_id","align":"center","label":"容纳人数"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('label',[_vm._v(_vm._s(scope.row.has_people_num))]),_vm._v("\n            /\n            "),_c('label',[_vm._v(_vm._s(scope.row.people_num))])]}}],null,false,1806831354)})],1):_vm._e(),_vm._v(" "),(_vm.commDrawer)?_c('div',[_c('div',{staticClass:"layout-inline"},[_c('el-button',{attrs:{"size":"small","type":"success","plain":""},on:{"click":_vm.returnDormList}},[_c('i',{staticClass:"fa fa-arrow-left"}),_vm._v("\n            "+_vm._s(_vm.$t("返回"))+"\n          ")])],1),_vm._v(" "),_c('div',{staticClass:"margin-top-10"},[_c('el-table',{ref:"commTableRef",attrs:{"data":_vm.tableDormCommDormData,"size":"mini"}},[_c('el-table-column',{attrs:{"label":"床号","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.bed_no))])]}}],null,false,2014101915)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"学生","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.real_name)?_c('label',[_vm._v(_vm._s(scope.row.real_name))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.real_name)?_c('label',[_vm._v(_vm._s(scope.row.real_name))]):_c('label',[_vm._v("--")])])])]}}],null,false,1913489328)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"学号","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.student_id)?_c('label',[_vm._v(_vm._s(scope.row.student_id))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.student_id)?_c('label',[_vm._v(_vm._s(scope.row.student_id))]):_c('label',[_vm._v("--")])])])]}}],null,false,840410224)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"手机","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.phone)?_c('label',[_vm._v(_vm._s(scope.row.phone))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.phone)?_c('label',[_vm._v(_vm._s(scope.row.phone))]):_c('label',[_vm._v("--")])])])]}}],null,false,1981022576)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"班级","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","popper-class":"custom-table-popover"}},[_c('div',{staticClass:"text-center"},[(scope.row.class_name)?_c('label',[_vm._v(_vm._s(scope.row.class_name))]):_c('label',[_vm._v("--")])]),_vm._v(" "),_c('span',{staticClass:"name-wrapper moon-content-text-ellipsis-class",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.class_name)?_c('label',[_vm._v(_vm._s(scope.row.class_name))]):_c('label',[_vm._v("--")])])])]}}],null,false,3226318960)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.student_id != null)?_c('span',{staticClass:"color-warning"},[_vm._v(_vm._s(_vm.$t("已分配")))]):_c('span',{staticClass:"color-success"},[_vm._v(_vm._s(_vm.$t("未分配")))])]}}],null,false,3214118545)}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.student_id == null)?_c('a',{staticClass:"color-grand",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.selectDormBedno(scope.row)}}},[_vm._v(_vm._s(_vm.$t("选择")))]):_c('span',[_vm._v("--")])]}}],null,false,4165021815)})],1)],1)]):_vm._e()],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"text-right padding-lr-10"},[(!_vm.commDrawer)?_c('my-pagination',{staticClass:"layout-pagination",attrs:{"total":_vm.commTotal,"current-page":_vm.commPage,"page-size":_vm.commNum},on:{"currentPage":_vm.currentDormPage,"sizeChange":_vm.sizeDormChange,"jumpChange":_vm.jumpDormPage}}):_vm._e(),_vm._v(" "),(_vm.commDrawer)?_c('span',{staticClass:"margin-right-10"},[_vm._v(_vm._s(_vm.$t("共"))+" "+_vm._s(_vm.tableDormCommDormData.length)+" "+_vm._s(_vm.$t("条")))]):_vm._e()],1)])]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","detail":_vm.subTitle,"content":_vm.messageTips},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newStudent/data/dormData.vue?vue&type=template&id=5123fe46&scoped=true&

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/utils/dialog/DrawerLayoutRight.vue + 4 modules
var DrawerLayoutRight = __webpack_require__(29);

// EXTERNAL MODULE: ./components/MySex.vue + 4 modules
var MySex = __webpack_require__(162);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/newStudent/data/dormData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var dormDatavue_type_script_lang_js_ = ({
  components: {
    MySex: MySex["default"],
    DrawerLayoutRight: DrawerLayoutRight["default"]
  },
  mixins: [mixins["a" /* default */]],

  data() {
    return {
      searchCollege: '',
      searchMajor: '',
      searchGrade: '',
      searchClass: '',
      detailData: {},
      tableData: [],
      tableSignData: [],
      tableDormData: [],
      tableBedData: [],
      countNum: 0,
      signNum: 0,
      unSignNum: 0,
      collegeList: [],
      categorys: [],
      types: [],
      studentTotal: 0,
      studentNum: 20,
      studentPage: 1,
      commPage: 1,
      commNum: 20,
      commTotal: 0,
      tableDormCommDormData: [],
      tableStudentData: [],
      searchCommDeptData: [],
      searchCommDeptBedData: [],
      flowOptions: [],
      subTitle: '',
      collegeData: '',
      searchKey: '',
      searchType: '',
      searchStatus: '',
      processId: '',
      messageTips: '',
      dialogLoading: false,
      dialogVisible: false,
      dialogDetail: false,
      visibleConfim: false,
      footerHidden: false,
      btnLoading: false,
      searchCascader: [],
      yearOptions: [],
      bathOptions: [],
      subjectOptions: [],
      filtersAuditType: [],
      searchTimeData: [],
      commSearchBuild: '',
      commSearchFloor: '',
      listId: '',
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
      filtersInfoStatus: [{
        value: 1,
        text: this.$t("已入住")
      }, {
        value: 0,
        text: this.$t("未入住")
      }],
      filtersPayStatus: [{
        value: 1,
        text: this.$t("未缴费")
      }, {
        value: 2,
        text: this.$t("部分缴费")
      }, {
        value: 3,
        text: this.$t("已缴费")
      }],
      filtersDormType: [{
        text: '男生宿舍',
        value: "0"
      }, {
        text: '女生宿舍',
        value: "1"
      }],
      searchAuditType: '',
      searchSexType: '',
      searchSignTimeStatus: '',
      searchInterface: '',
      searchInfoStatus: '',
      searchPayStatus: '',
      searchDormType: '',
      searchInDormType: '',
      tableStudentLoading: false,
      tableDormLoading: false,
      commDrawer: false
    };
  },

  created() {
    this.initProcess();
    this.init();
    this.initStatic();
  },

  methods: {
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

          this.flowOptions = process;
        }
      });
    },

    init() {
      let params = {
        page: this.page,
        num: this.num,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        sex: this.searchSexType,
        roomType: this.searchDormType,
        paymentStatus: this.searchPayStatus,
        roomStatus: this.searchInDormType,
        searchKey: this.searchKey,
        processId: this.processId
      };
      this.$axios.get(api_url["a" /* common */].enroll_room_student_page, {
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

    initDorm() {
      let params = {
        page: this.commPage,
        num: this.commNum,
        roomType: this.commSex.sex == 1 ? 0 : 1,
        buildId: this.commSearchBuild,
        floorNum: this.commSearchFloor,
        userId: this.commSex.user_id
      };
      this.tableDormLoading = true;
      this.$axios.get(api_url["a" /* common */].enroll_room_student_selectable_room_page, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.tableDormData = res.data.data.list;
          this.commTotal = res.data.data.totalCount;
          this.commNum = res.data.data.num;
          this.commPage = res.data.data.currentPage;
        }

        this.tableDormLoading = false;
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

    initStatic() {
      let params = {
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        roomId: '',
        searchKey: this.searchKey,
        processId: this.processId
      };
      this.$axios.get(api_url["a" /* common */].enroll_room_student_static, {
        params: params,
        loading: false
      }).then(res => {
        if (res.data.data) {
          this.signNum = res.data.data.checked;
          this.unSignNum = res.data.data.uncheck;
          this.countNum = res.data.data.checked + res.data.data.uncheck;
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

    jumpDormPage(data) {
      this.commPage = data;
      this.studentPage();
    },

    sizeDormChange(event) {
      this.commPage = 1;
      this.commNum = event;
      this.initDorm();
    },

    currentDormPage(event) {
      this.commPage = event;
      this.initDorm();
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
      this.initStatic();
    },

    handleSearch(data) {
      this.commSearchKey = data;
      this.studentPage = 1;
      this.initStudent();
    },

    handleCascaderChange(data) {
      this.searchCascader = data;
    },

    handleChangeTime(data) {
      this.searchTimeData = data;
    },

    handleCascaderBedChange(data) {
      //this.commSearchDept = data[data.length-1];
      this.commSearchBuild = "";
      this.commSearchFloor = "";

      if (data.length == 1) {
        this.commSearchBuild = data[0];
      } else if (data.length == 2) {
        this.commSearchBuild = data[0];
        this.commSearchFloor = data[1];
      }

      this.commPage = 1;
      this.initDorm();
    },

    search(data) {
      this.searchKey = data.input;
      this.page = 1;
      this.init();
      this.initStatic();
    },

    expandInfo() {
      let url = api_url["a" /* common */].enroll_room_student_export;
      let params = {
        page: 1,
        num: 86400,
        collegeId: this.searchCollege,
        majorId: this.searchMajor,
        grade: this.searchGrade,
        classId: this.searchClass,
        sex: this.searchSexType,
        roomType: this.searchDormType,
        paymentStatus: this.searchPayStatus,
        roomStatus: this.searchInDormType,
        searchKey: this.searchKey,
        processId: this.processId
      };
      params = this.$qs.stringify(params);
      window.open(url + "?" + params, "_self");
    },

    changeStatus(type) {
      this.searchType = type.value;
      this.page = 1;
      this.init();
    },

    statusInfo(item, type) {},

    deleteInfo(item, type) {
      this.listId = item.user_id;
      this.messageTips = "确定移除该数据？";
      this.visibleConfim = true;
    },

    detailInfo(item, type) {
      this.studentPage = 1;
      this.studentNum = 20;
      this.commSex = item;
      setTimeout(() => {
        this.initDorm();
      }, 800);
      this.dialogDetail = true;
    },

    signInfo(item) {
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

    dormTypeTextInfo(val) {
      return Object(utils["n" /* dormTypeText */])(val);
    },

    handleSearchChange(event, type) {
      if (type == 2) {
        this.processId = event;
      }
    },

    fliterTable(value, row, column) {
      for (let item in value) {
        if (item == 'sexType') {
          this.searchSexType = value[item][0];
        } else if (item == 'infoStatus') {
          this.searchInfoStatus = value[item][0];
        } else if (item == 'payStatus') {
          this.searchPayStatus = value[item][0];
        } else if (item == 'dormType') {
          this.searchDormType = value[item][0];
        } else if (item == 'infoType') {
          this.searchInDormType = value[item][0];
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
        arr[i]['value'] = arr[i].country_code;
      }

      return arr;
    },

    educationInfoText() {
      let arr = Object(utils["o" /* educationInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].value;
      }

      return arr;
    },

    provinceInfoText() {
      let arr = Object(utils["G" /* provinceInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].ProID;
      }

      return arr;
    },

    cityInfoText() {
      let arr = Object(utils["g" /* cityInfo */])();

      for (let i = 0; i < arr.length; i++) {
        arr[i]['label'] = arr[i].name;
        arr[i]['value'] = arr[i].CityID;
      }

      return arr;
    },

    selectDormBedno(row) {
      let params = {
        bedNo: row.bed_no,
        roomId: row.drom_id,
        userId: this.commSex.user_id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].enroll_room_handle, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.initDorm();
          this.init();
          this.initStatic();
          this.drawerDormVisible = false;
          this.commDrawer = false;
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["c" /* MessageWarning */])(res.data.desc);
        }
      });
    },

    selectDorm(row) {
      let params = {
        roomId: row.id
      };
      this.$axios.get(api_url["a" /* common */].enroll_room_bed_list_by_room_id, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.tableDormCommDormData = res.data.data;
        }
      });
      this.commDrawer = true;
    },

    returnDormList() {
      this.commDrawer = false;
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
        otherMsg: ''
      };
      this.subTitle = "";
      this.versionStatus = '';
      this.detailData = {};
      this.tableSignData = [];
      this.resetCasadeSelector('SelectorCollege');
      this.resetCasadeSelector('selectorDept');

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }

      this.uploadProcess = '';
      this.uploadResult = [];
      clearTimeout(this.loopTimer);
      this.loopTimer = null;
      this.teacherArray = [];
      this.approverUsers = [];
      this.btnLoading = false;
      this.dialogVisible = false;
      this.dialogDetail = false;
      this.commDrawer = false;
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
    },

    cancelDrawDialog() {
      this.dialogDetail = false;
    },

    handleCancelChange(data) {
      this.visibleConfim = false;
    },

    handleOkChange(data) {
      this.dialogLoading = true;
      let params = {
        userId: this.listId
      };
      params = this.$qs.stringify(params);
      this.$axios.post(api_url["a" /* common */].enroll_room_revoke, params, {
        loading: false
      }).then(res => {
        if (res.data.code == 200) {
          this.init();
          this.listId = "";
          Object(utils["b" /* MessageSuccess */])(res.data.desc);
        } else {
          Object(utils["a" /* MessageError */])(res.data.desc);
        }

        this.visibleConfim = false;
        this.dialogLoading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/newStudent/data/dormData.vue?vue&type=script&lang=js&
 /* harmony default export */ var data_dormDatavue_type_script_lang_js_ = (dormDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/newStudent/data/dormData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(706)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  data_dormDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5123fe46",
  "64c70856"
  
)

/* harmony default export */ var dormData = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyElTree: __webpack_require__(155).default,MySelect: __webpack_require__(147).default,MyInputButton: __webpack_require__(146).default,MySex: __webpack_require__(162).default,MyPagination: __webpack_require__(27).default,LayoutLr: __webpack_require__(156).default,DrawerLayoutRight: __webpack_require__(29).default,MyCascader: __webpack_require__(151).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=dormData.js.map