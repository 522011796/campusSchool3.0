exports.ids = [47];
exports.modules = {

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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rules__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      rules: {
        no: [{
          required: true,
          message: this.$t("请输入建筑楼编号"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validatesn1_10Reg,
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: this.$t("请输入建筑楼名称"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validatenall1_20Reg,
          trigger: 'blur'
        }],
        floorTotal: [{
          required: true,
          message: this.$t("请输入总楼层"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validateNumber,
          trigger: 'blur'
        }],
        startFloor: [{
          required: true,
          message: this.$t("请输入起始楼层"),
          trigger: 'blur'
        }, {
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validateNumber,
          trigger: 'blur'
        }],
        phone: [{
          required: false,
          validator: _rules__WEBPACK_IMPORTED_MODULE_0___default.a.FormValidate.Form().validatePhone,
          trigger: 'blur'
        }]
      }
    };
  }

});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(468);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2146b46b", content, true, context)
};

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_build_vue_vue_type_style_index_0_id_114f9814_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_build_vue_vue_type_style_index_0_id_114f9814_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_build_vue_vue_type_style_index_0_id_114f9814_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_build_vue_vue_type_style_index_0_id_114f9814_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_build_vue_vue_type_style_index_0_id_114f9814_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_build_vue_vue_type_style_index_0_id_114f9814_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-114f9814]{padding:10px 15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/basicInfo/build.vue?vue&type=template&id=114f9814&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('layout-tb',[_c('template',{slot:"tag"},[_vm._v("建筑楼")]),_vm._v(" "),_c('div',{attrs:{"slot":"tab"},slot:"tab"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-button',{attrs:{"size":"small","type":"primary","icon":"el-icon-plus"},on:{"click":function($event){return _vm.addInfo($event)}}},[_vm._v(_vm._s(_vm.$t("添加建筑楼")))])],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('el-table',{ref:"refTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"header-cell-class-name":"custom-table-cell-bg","size":"medium","max-height":_vm.tableHeight.height}},[_c('el-table-column',{attrs:{"align":"center","prop":"building_no","label":_vm.$t('编号')}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"building_name","label":_vm.$t('名称')}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"storey","label":_vm.$t('总楼层数')}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"start_storey","label":_vm.$t('起始楼层')}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('负责人')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.person ? scope.row.person : '--'))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":_vm.$t('联系电话')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.phone ? scope.row.phone : '--'))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","fixed":"right","label":"操作","width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"fa fa-edit margin-right-5 color-grand",on:{"click":function($event){return _vm.editInfo(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-trash color-danger",on:{"click":function($event){return _vm.deleteInfo(scope.row)}}})]}}])})],1),_vm._v(" "),_c('div',{staticClass:"layout-right-footer text-right"},[_c('span',{staticClass:"margin-right-10"},[_vm._v(_vm._s(_vm.$t("共"))+" "+_vm._s(_vm.tableData.length)+" "+_vm._s(_vm.$t("条")))])])],1)],2),_vm._ssrNode(" "),_c('dialog-normal',{attrs:{"visible":_vm.modalVisible,"title":_vm.$t('建筑楼设置')},on:{"close":_vm.closeDialog,"right-close":_vm.cancelDialog}},[_c('div',{staticClass:"margin-top-10"},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"140px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('建筑楼编号'),"prop":"no"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.no),callback:function ($$v) {_vm.$set(_vm.form, "no", $$v)},expression:"form.no"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('建筑楼名称'),"prop":"name"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('总楼层数'),"prop":"floorTotal"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.floorTotal),callback:function ($$v) {_vm.$set(_vm.form, "floorTotal", $$v)},expression:"form.floorTotal"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('起始楼层'),"prop":"startFloor"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.startFloor),callback:function ($$v) {_vm.$set(_vm.form, "startFloor", $$v)},expression:"form.startFloor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('负责人')}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.person),callback:function ($$v) {_vm.$set(_vm.form, "person", $$v)},expression:"form.person"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('联系电话'),"prop":"phone"}},[_c('el-input',{staticClass:"width-260",model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.cancelDialog}},[_vm._v(_vm._s(_vm.$t("取消")))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.dialogLoading == false ? _vm.okDialog() : ''}}},[(_vm.dialogLoading)?_c('i',{staticClass:"el-icon-loading"}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.$t("确定"))+"\n      ")])],1)]),_vm._ssrNode(" "),_c('my-normal-dialog',{attrs:{"visible":_vm.visibleConfim,"loading":_vm.dialogLoading,"title":"提示","detail":_vm.subTitle,"content":"确认需要删除该信息？"},on:{"update:visible":function($event){_vm.visibleConfim=$event},"ok-click":_vm.handleOkChange,"cancel-click":_vm.handleCancelChange,"close":_vm.closeDialog}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/basicInfo/build.vue?vue&type=template&id=114f9814&scoped=true&

// EXTERNAL MODULE: ./utils/api/url.js
var api_url = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/mixins.js + 1 modules
var mixins = __webpack_require__(9);

// EXTERNAL MODULE: ./components/utils/dialog/MyNormalDialog.vue + 4 modules
var MyNormalDialog = __webpack_require__(150);

// EXTERNAL MODULE: ./components/utils/dialog/DialogNormal.vue + 4 modules
var DialogNormal = __webpack_require__(28);

// EXTERNAL MODULE: ./utils/utils.js
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/validater/buildValidater.js
var buildValidater = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/basicInfo/build.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var buildvue_type_script_lang_js_ = ({
  mixins: [mixins["a" /* default */], buildValidater["a" /* default */]],
  components: {
    MyNormalDialog: MyNormalDialog["default"],
    DialogNormal: DialogNormal["default"]
  },

  data() {
    return {
      tableData: [],
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      subTitle: '',
      form: {
        id: '',
        no: '',
        name: '',
        areaTotal: '0',
        insterest: '1',
        createTime: '',
        person: '',
        floorTotal: '',
        startFloor: '',
        phone: ''
      }
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      let params = {
        buildingType: 0
      };
      this.$axios(api_url["a" /* common */].build_list, {
        params: params
      }).then(res => {
        if (res.data.data) {
          this.tableData = res.data.data;
        }
      });
    },

    addInfo() {
      this.modalVisible = true;
    },

    editInfo(row) {
      this.form = {
        id: row.id,
        no: row.building_no,
        name: row.building_name,
        areaTotal: '0',
        insterest: '1',
        createTime: this.$moment().format("YYYY-MM"),
        person: row.person,
        floorTotal: row.storey,
        startFloor: row.start_storey,
        phone: row.phone
      };
      this.modalVisible = true;
    },

    deleteInfo(row) {
      this.form.id = row.id;
      this.subTitle = row.building_name;
      this.visibleConfim = true;
    },

    insterestInfo(val) {
      return Object(utils["v" /* insterestText */])(val);
    },

    okDialog(event) {
      let url = "";
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            buildingNo: this.form.no,
            buildingName: this.form.name,
            area: this.form.areaTotal,
            propertyRight: this.form.insterest,
            createTime: this.$moment().format("YYYY-MM"),
            storey: this.form.floorTotal,
            person: this.form.person,
            phone: this.form.phone,
            status: 1,
            startStorey: this.form.startFloor,
            type: 0
          };

          if (this.form.id != "") {
            url = api_url["a" /* common */].build_update;
            params['buildingId'] = this.form.id;
          } else {
            url = api_url["a" /* common */].build_add;
          }

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

    closeDialog(event) {
      this.form = {
        id: '',
        no: '',
        name: '',
        areaTotal: 0,
        insterest: '1',
        createTime: '',
        person: '',
        floorTotal: '',
        startFloor: '',
        phone: ''
      };
      this.subTitle = "";

      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }
    },

    cancelDialog() {
      this.modalVisible = false;
    },

    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        buildingId: this.form.id
      };
      url = api_url["a" /* common */].build_delete;
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
    }

  }
});
// CONCATENATED MODULE: ./pages/basicInfo/build.vue?vue&type=script&lang=js&
 /* harmony default export */ var basicInfo_buildvue_type_script_lang_js_ = (buildvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/basicInfo/build.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(467)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basicInfo_buildvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "114f9814",
  "751aef77"
  
)

/* harmony default export */ var build = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LayoutTb: __webpack_require__(152).default,DialogNormal: __webpack_require__(28).default,MyNormalDialog: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=build.js.map