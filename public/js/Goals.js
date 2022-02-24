"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Goals"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideBar",
  data: function data() {
    return {
      right: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Goals.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Goals.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SideBar.vue */ "./resources/js/components/SideBar.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Goals",
  data: function data() {
    return {
      goals: null,
      settings: []
    };
  },
  components: {
    SideBar: _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    getStartupGoals: function getStartupGoals() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/v1/goals', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenConnexion')
        }
      }).then(function (res) {
        console.log(res);
        _this.goals = res.data.data.goals;
      });
    },
    validateTask: function validateTask(task) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/v1/goals/tasks/' + task.id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenConnexion')
        }
      }).then(function (res) {
        console.log(res);
        res.status == 200;
        task.status == 'done';
      });
    }
  },
  mounted: function mounted() {
    this.getStartupGoals();
  }
});

/***/ }),

/***/ "./resources/js/components/SideBar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/SideBar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=223abea1& */ "./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/SideBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Goals.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/Goals.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Goals_vue_vue_type_template_id_8a9093cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Goals.vue?vue&type=template&id=8a9093cc& */ "./resources/js/components/pages/Goals.vue?vue&type=template&id=8a9093cc&");
/* harmony import */ var _Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Goals.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Goals.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Goals_vue_vue_type_template_id_8a9093cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Goals_vue_vue_type_template_id_8a9093cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Goals.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Goals.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Goals.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Goals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Goals.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=template&id=223abea1& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=template&id=223abea1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&");


/***/ }),

/***/ "./resources/js/components/pages/Goals.vue?vue&type=template&id=8a9093cc&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/Goals.vue?vue&type=template&id=8a9093cc& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_template_id_8a9093cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_template_id_8a9093cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_template_id_8a9093cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Goals.vue?vue&type=template&id=8a9093cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Goals.vue?vue&type=template&id=8a9093cc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { height: "900", width: "256" } },
    [
      _c(
        "v-navigation-drawer",
        { attrs: { permanent: "" } },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    { staticClass: "text-h6" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _vm._v("Home"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                { attrs: { to: "/dashboard/profil" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-information-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Profile")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { to: "/dashboard/formcontact" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-face-agent")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Service client")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { to: "/dashboard/goals" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-clipboard-list-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Goals")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { to: "/dashboard/tasks" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-clipboard-edit-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Tâches")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { to: "/dashboard/filelist" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-file-multiple")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Documents")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { to: "/dashboard/help" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-account-question-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Help")])],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Goals.vue?vue&type=template&id=8a9093cc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Goals.vue?vue&type=template&id=8a9093cc& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "flex" },
      [
        _c("SideBar"),
        _vm._v(" "),
        _c(
          "v-container",
          [
            _c(
              "v-row",
              [
                _c("v-col", [
                  _c("h1", { staticClass: "text-h4" }, [_vm._v("Goals")]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  [
                    [
                      _c(
                        "v-expansion-panels",
                        _vm._l(_vm.goals, function (item) {
                          return _c(
                            "v-expansion-panel",
                            { key: "goalId-" + item.id },
                            [
                              _c("v-expansion-panel-header", [
                                _c("p", [_vm._v(_vm._s(item.name))]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-expansion-panel-content",
                                [
                                  _c("p", [_vm._v(_vm._s(item.description))]),
                                  _vm._v(" "),
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            [
                                              _c(
                                                "v-list",
                                                {
                                                  attrs: {
                                                    subheader: "",
                                                    "two-line": "",
                                                    flat: "",
                                                  },
                                                },
                                                [
                                                  _c("v-subheader", [
                                                    _vm._v("Tasks"),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: { multiple: "" },
                                                      model: {
                                                        value: _vm.settings,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.settings = $$v
                                                        },
                                                        expression: "settings",
                                                      },
                                                    },
                                                    _vm._l(
                                                      item.tasks,
                                                      function (task) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key:
                                                              "goalId-" +
                                                              item.id +
                                                              "-taskId-" +
                                                              task.id,
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function () {
                                                                    return [
                                                                      _c(
                                                                        "v-list-item-action",
                                                                        [
                                                                          _c(
                                                                            "v-checkbox",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  "input-value":
                                                                                    task.status ==
                                                                                    "done"
                                                                                      ? true
                                                                                      : false,
                                                                                  disabled:
                                                                                    task.status ==
                                                                                    "done",
                                                                                  color:
                                                                                    "primary",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  function (
                                                                                    $event
                                                                                  ) {
                                                                                    return _vm.validateTask(
                                                                                      task
                                                                                    )
                                                                                  },
                                                                              },
                                                                            }
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-list-item-content",
                                                                        [
                                                                          _c(
                                                                            "v-list-item-title",
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  task.name
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ]
                                                                  },
                                                                  proxy: true,
                                                                },
                                                              ],
                                                              null,
                                                              true
                                                            ),
                                                          }
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        }),
                        1
                      ),
                    ],
                  ],
                  2
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);