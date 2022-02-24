"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["tasks"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Filelist.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Filelist.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadFiles_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadFiles.vue */ "./resources/js/components/UploadFiles.vue");
/* harmony import */ var _SideBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue */ "./resources/js/components/SideBar.vue");
//
//
//
//
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
  name: "Filelist",
  components: {
    UploadFiles: _UploadFiles_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideBar: _SideBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SideBar.vue */ "./resources/js/components/SideBar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Formcontact",
  components: {
    SideBar: _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var defaultForm = Object.freeze({
      first: "",
      last: "",
      object: "",
      bio: "",
      favoriteAnimal: "",
      age: null,
      terms: false
    });
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [function (val) {
          return (val || "").length > 0 || "This field is required";
        }]
      },
      conditions: false,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      terms: false,
      defaultForm: defaultForm
    };
  },
  computed: {
    formIsValid: function formIsValid() {
      return this.form.first && this.form.last && this.form.object && this.form.terms;
    }
  },
  methods: {
    resetForm: function resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit: function submit() {
      this.snackbar = true;
      this.resetForm();
    }
  }
});

/***/ }),

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideBar",
  data: function data() {
    return {
      right: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex-map-fields */ "./node_modules/vuex-map-fields/dist/index.esm.js");
/* harmony import */ var _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBar.vue */ "./resources/js/components/SideBar.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import AddTasksModal from "../components/AddTaskModal.vue";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tasks",
  components: {
    SideBar: _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var _this = this;

    var tokenConnexion = localStorage.getItem("tokenConnexion"); //recup des tâches

    axios.get("http://127.0.0.1:8004/api/v1/tasks", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenConnexion
      }
    }).then(function (response) {
      var todoList = response.data.data;
      console.log("task", response.data.data);

      _this.$store.dispatch("updateTodoList", todoList);
    });
  },
  mounted: function mounted() {
    this.getAllTask();
  },
  data: function data() {
    return {
      isDark: true,
      show: true,
      newTodo: "",
      todos: [// {
        //     title: "oklm",
        //     done: false,
        // },
      ],
      day: this.todoDay(),
      date: new Date().getDate(),
      ord: this.nth(new Date().getDate()),
      year: new Date().getFullYear()
    };
  },
  methods: {
    getAllTask: function getAllTask() {
      var _this2 = this;

      var tokenConnexion = localStorage.getItem("tokenConnexion"); //recup des tâches

      axios.get("http://127.0.0.1:8004/api/v1/tasks", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          Authorization: "Bearer " + tokenConnexion
        }
      }).then(function (response) {
        _this2.todoList = response.data.data;
        console.log("task", response.data.data); // this.$store.dispatch("updateTodoList", todoList);

        console.log("mounted", _this2.todoList);

        _this2.todoList.forEach(function (elt) {
          _this2.todos.push({
            id: elt.id,
            title: elt.title,
            done: elt.status == "done",
            status: elt.status
          });
        });
      });
    },
    updateStatus: function updateStatus(id, status) {
      var tokenReq = localStorage.getItem("tokenConnexion");
      axios.put("http://127.0.0.1:8004/api/v1/task/status", {
        id: id,
        status: status
      }, {
        headers: {
          Authorization: "Bearer " + tokenReq
        }
      });
    },
    addTodo: function addTodo() {
      var value = this.newTodo && this.newTodo.trim();

      if (!value) {
        return;
      }

      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = "";
    },
    removeTodo: function removeTodo(index) {
      this.todos.splice(index, 1);
    },
    todoDay: function todoDay() {
      var d = new Date();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[d.getDay()];
    },
    nth: function nth(d) {
      if (d > 3 && d < 21) return "th";

      switch (d % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    }
  },
  computed: _objectSpread({}, (0,vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__.mapFields)(["todoList"])),
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UploadFiles.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UploadFiles.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_UploadFilesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/UploadFilesService */ "./resources/js/services/UploadFilesService.js");
/* harmony import */ var _modal_DocumentDemand_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/DocumentDemand.vue */ "./resources/js/components/modal/DocumentDemand.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import axios from "axios";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "upload-files",
  data: function data() {
    return {
      currentFile: null,
      progress: 0,
      message: "",
      fileInfos: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var tokenReq = localStorage.getItem("tokenConnexion");
    _services_UploadFilesService__WEBPACK_IMPORTED_MODULE_0__["default"].getFiles(tokenReq).then(function (response) {
      console.log("getFiles", response.data);
      _this.fileInfos = response.data.data;
    });
  },
  methods: {
    selectFile: function selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },
    upload: function upload() {
      var _this2 = this;

      if (!this.currentFile) {
        this.message = "Please select a file!";
        return;
      }

      var tokenReq = localStorage.getItem("tokenConnexion");
      this.message = "";
      console.log("token", tokenReq);
      _services_UploadFilesService__WEBPACK_IMPORTED_MODULE_0__["default"].upload(this.currentFile, tokenReq, function (event) {
        _this2.progress = Math.round(100 * event.loaded / event.total);
      }).then(function (response) {
        var tokenReq = localStorage.getItem("tokenConnexion");
        _this2.message = response.data.message;
        return _services_UploadFilesService__WEBPACK_IMPORTED_MODULE_0__["default"].getFiles(tokenReq).then(function (response) {
          console.log("getFiles", response.data);
          _this2.fileInfos = response.data.data;
        });
      }).then(function (files) {
        _this2.fileInfos = files.data;
      })["catch"](function () {
        _this2.progress = 0;
        _this2.message = "Could not upload the file!";
        _this2.currentFile = undefined;
      });
    }
  },
  components: {
    DocumentDemand: _modal_DocumentDemand_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal/DocumentDemand.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal/DocumentDemand.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex-map-fields */ "./node_modules/vuex-map-fields/dist/index.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      dialog: false,
      document_title: null,
      description: null
    };
  },
  methods: {
    submit: function submit() {
      axios.post("http://127.0.0.1:8004/api/v1/files/ask", {
        document_title: this.document_title,
        description: this.description
      }, {
        headers: {
          Authorization: "Bearer " + this.token
        }
      }).then(function (response) {
        console.log("demande de doc", response);
      });
    }
  },
  computed: _objectSpread({}, (0,vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__.mapFields)(["token"]))
});

/***/ }),

/***/ "./resources/js/services/UploadFilesService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/UploadFilesService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-common */ "./resources/js/services/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var UploadFilesService = /*#__PURE__*/function () {
  function UploadFilesService() {
    _classCallCheck(this, UploadFilesService);
  }

  _createClass(UploadFilesService, [{
    key: "upload",
    value: function upload(file, tokenReq, onUploadProgress) {
      console.log(tokenReq);
      var formData = new FormData();
      formData.append("file", file);
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/v1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + tokenReq
        },
        onUploadProgress: onUploadProgress
      });
    }
  }, {
    key: "getFiles",
    value: function getFiles(tokenReq) {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/v1/files", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + tokenReq
        }
      });
    }
  }]);

  return UploadFilesService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UploadFilesService());

/***/ }),

/***/ "./resources/js/services/http-common.js":
/*!**********************************************!*\
  !*** ./resources/js/services/http-common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:8004/",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.title[data-v-269e1fc1] {\r\n  font-size: 30px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.done[data-v-43ab059a] {\r\n    text-decoration: line-through;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_style_index_0_id_269e1fc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_style_index_0_id_269e1fc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_style_index_0_id_269e1fc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_43ab059a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_43ab059a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_43ab059a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Filelist.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Filelist.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filelist_vue_vue_type_template_id_1af50085___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filelist.vue?vue&type=template&id=1af50085& */ "./resources/js/components/Filelist.vue?vue&type=template&id=1af50085&");
/* harmony import */ var _Filelist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filelist.vue?vue&type=script&lang=js& */ "./resources/js/components/Filelist.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Filelist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Filelist_vue_vue_type_template_id_1af50085___WEBPACK_IMPORTED_MODULE_0__.render,
  _Filelist_vue_vue_type_template_id_1af50085___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Filelist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Formcontact.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Formcontact.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Formcontact_vue_vue_type_template_id_269e1fc1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true& */ "./resources/js/components/Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true&");
/* harmony import */ var _Formcontact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formcontact.vue?vue&type=script&lang=js& */ "./resources/js/components/Formcontact.vue?vue&type=script&lang=js&");
/* harmony import */ var _Formcontact_vue_vue_type_style_index_0_id_269e1fc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css& */ "./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Formcontact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Formcontact_vue_vue_type_template_id_269e1fc1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Formcontact_vue_vue_type_template_id_269e1fc1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "269e1fc1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Formcontact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/Tasks.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Tasks.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tasks_vue_vue_type_template_id_43ab059a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=43ab059a&scoped=true& */ "./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&scoped=true&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/components/Tasks.vue?vue&type=script&lang=js&");
/* harmony import */ var _Tasks_vue_vue_type_style_index_0_id_43ab059a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css& */ "./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_43ab059a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tasks_vue_vue_type_template_id_43ab059a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "43ab059a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tasks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UploadFiles.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/UploadFiles.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadFiles_vue_vue_type_template_id_78ce364a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadFiles.vue?vue&type=template&id=78ce364a& */ "./resources/js/components/UploadFiles.vue?vue&type=template&id=78ce364a&");
/* harmony import */ var _UploadFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadFiles.vue?vue&type=script&lang=js& */ "./resources/js/components/UploadFiles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadFiles_vue_vue_type_template_id_78ce364a___WEBPACK_IMPORTED_MODULE_0__.render,
  _UploadFiles_vue_vue_type_template_id_78ce364a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UploadFiles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modal/DocumentDemand.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/modal/DocumentDemand.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentDemand_vue_vue_type_template_id_2ff2b3d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentDemand.vue?vue&type=template&id=2ff2b3d3& */ "./resources/js/components/modal/DocumentDemand.vue?vue&type=template&id=2ff2b3d3&");
/* harmony import */ var _DocumentDemand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentDemand.vue?vue&type=script&lang=js& */ "./resources/js/components/modal/DocumentDemand.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentDemand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentDemand_vue_vue_type_template_id_2ff2b3d3___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentDemand_vue_vue_type_template_id_2ff2b3d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modal/DocumentDemand.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Filelist.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Filelist.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filelist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Filelist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Filelist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filelist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Formcontact.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Formcontact.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Formcontact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Tasks.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Tasks.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UploadFiles.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/UploadFiles.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UploadFiles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modal/DocumentDemand.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/modal/DocumentDemand.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentDemand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentDemand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal/DocumentDemand.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentDemand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_style_index_0_id_269e1fc1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=style&index=0&id=269e1fc1&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_43ab059a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=style&index=0&id=43ab059a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Filelist.vue?vue&type=template&id=1af50085&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Filelist.vue?vue&type=template&id=1af50085& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filelist_vue_vue_type_template_id_1af50085___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filelist_vue_vue_type_template_id_1af50085___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filelist_vue_vue_type_template_id_1af50085___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Filelist.vue?vue&type=template&id=1af50085& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Filelist.vue?vue&type=template&id=1af50085&");


/***/ }),

/***/ "./resources/js/components/Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_template_id_269e1fc1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_template_id_269e1fc1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formcontact_vue_vue_type_template_id_269e1fc1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true&");


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

/***/ "./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_43ab059a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_43ab059a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_43ab059a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=template&id=43ab059a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UploadFiles.vue?vue&type=template&id=78ce364a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UploadFiles.vue?vue&type=template&id=78ce364a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFiles_vue_vue_type_template_id_78ce364a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFiles_vue_vue_type_template_id_78ce364a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadFiles_vue_vue_type_template_id_78ce364a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadFiles.vue?vue&type=template&id=78ce364a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UploadFiles.vue?vue&type=template&id=78ce364a&");


/***/ }),

/***/ "./resources/js/components/modal/DocumentDemand.vue?vue&type=template&id=2ff2b3d3&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/modal/DocumentDemand.vue?vue&type=template&id=2ff2b3d3& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentDemand_vue_vue_type_template_id_2ff2b3d3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentDemand_vue_vue_type_template_id_2ff2b3d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentDemand_vue_vue_type_template_id_2ff2b3d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentDemand.vue?vue&type=template&id=2ff2b3d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal/DocumentDemand.vue?vue&type=template&id=2ff2b3d3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Filelist.vue?vue&type=template&id=1af50085&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Filelist.vue?vue&type=template&id=1af50085& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "flex" },
    [
      _c("SideBar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticStyle: { width: "600px" }, attrs: { fluid: "" } },
        [
          _c("div", { staticClass: "mb-5" }, [
            _c("h1", [_vm._v("bezkoder.com")]),
            _vm._v(" "),
            _c("h2", [_vm._v("Vuetify File Upload")]),
          ]),
          _vm._v(" "),
          _c("upload-files"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Formcontact.vue?vue&type=template&id=269e1fc1&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "flex" },
    [
      _c("SideBar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("h2", { staticClass: "text-center title" }, [
            _vm._v("Contact US"),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-snackbar",
                {
                  attrs: { absolute: "", top: "", right: "", color: "success" },
                  model: {
                    value: _vm.snackbar,
                    callback: function ($$v) {
                      _vm.snackbar = $$v
                    },
                    expression: "snackbar",
                  },
                },
                [
                  _c("span", [_vm._v("Registration successful!")]),
                  _vm._v(" "),
                  _c("v-icon", { attrs: { dark: "" } }, [
                    _vm._v(" mdi-checkbox-marked-circle "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  ref: "form",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.rules.name,
                                  color: "purple darken-2",
                                  label: "Name",
                                  required: "",
                                },
                                model: {
                                  value: _vm.form.first,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "first", $$v)
                                  },
                                  expression: "form.first",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.rules.name,
                                  color: "blue darken-2",
                                  label: "Email",
                                  required: "",
                                },
                                model: {
                                  value: _vm.form.last,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "last", $$v)
                                  },
                                  expression: "form.last",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.rules.name,
                                  color: "blue darken-2",
                                  label: "Object",
                                  required: "",
                                },
                                model: {
                                  value: _vm.form.object,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "object", $$v)
                                  },
                                  expression: "form.object",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: { color: "teal" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [_c("div", [_vm._v("Message")])]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.form.bio,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "bio", $$v)
                                  },
                                  expression: "form.bio",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { color: "green" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "div",
                                          {
                                            on: {
                                              click: function ($event) {
                                                $event.stopPropagation()
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Do you accept the\n                    "
                                            ),
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function ($event) {
                                                    $event.preventDefault()
                                                    _vm.terms = true
                                                  },
                                                },
                                              },
                                              [_vm._v("terms")]
                                            ),
                                            _vm._v(
                                              "\n                    and\n                    "
                                            ),
                                            _c(
                                              "a",
                                              {
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function ($event) {
                                                    $event.preventDefault()
                                                    _vm.conditions = true
                                                  },
                                                },
                                              },
                                              [_vm._v("conditions?")]
                                            ),
                                          ]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.form.terms,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "terms", $$v)
                                  },
                                  expression: "form.terms",
                                },
                              }),
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
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        { attrs: { text: "" }, on: { click: _vm.resetForm } },
                        [_vm._v(" Reset ")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            disabled: !_vm.formIsValid,
                            text: "",
                            color: "primary",
                            type: "submit",
                          },
                        },
                        [_vm._v("\n            Submit\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { width: "70%" },
                  model: {
                    value: _vm.terms,
                    callback: function ($$v) {
                      _vm.terms = $$v
                    },
                    expression: "terms",
                  },
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "text-h6" }, [
                        _vm._v(" Terms "),
                      ]),
                      _vm._v(" "),
                      _vm._l(5, function (n) {
                        return _c("v-card-text", { key: n }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.content) +
                              "\n          "
                          ),
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "purple" },
                              on: {
                                click: function ($event) {
                                  _vm.terms = false
                                },
                              },
                            },
                            [_vm._v(" Ok ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { width: "70%" },
                  model: {
                    value: _vm.conditions,
                    callback: function ($$v) {
                      _vm.conditions = $$v
                    },
                    expression: "conditions",
                  },
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "text-h6" }, [
                        _vm._v(" Conditions "),
                      ]),
                      _vm._v(" "),
                      _vm._l(5, function (n) {
                        return _c("v-card-text", { key: n }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.content) +
                              "\n          "
                          ),
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "purple" },
                              on: {
                                click: function ($event) {
                                  _vm.conditions = false
                                },
                              },
                            },
                            [_vm._v("\n              Ok\n            ")]
                          ),
                        ],
                        1
                      ),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
                        _vm._v(" Home"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          "v-main",
          [
            _c(
              "v-theme-provider",
              { attrs: { root: "", dark: _vm.isDark } },
              [
                _c(
                  "v-container",
                  [
                    _c(
                      "v-row",
                      { staticClass: "ma-5", attrs: { justify: "center" } },
                      [
                        _c(
                          "v-col",
                          { attrs: { xs: "12", sm: "8" } },
                          [
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-toolbar",
                                  {
                                    attrs: { color: "blue darken-4", dark: "" },
                                  },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      { staticClass: "headline" },
                                      [_vm._v("Todo list")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "" } },
                                      [_c("v-icon", [_vm._v("mdi-magnify")])],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-tooltip",
                                      {
                                        attrs: { bottom: "" },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function (ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    {
                                                      attrs: { icon: "" },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          _vm.isDark =
                                                            !_vm.isDark
                                                        },
                                                      },
                                                    },
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        model: {
                                                          value: _vm.isDark,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.isDark = $$v
                                                          },
                                                          expression: "isDark",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            !_vm.isDark
                                                              ? "mdi-weather-night"
                                                              : "mdi-weather-cloudy"
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            },
                                          },
                                        ]),
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.isDark
                                                  ? "light mode"
                                                  : "dark mode"
                                              ) +
                                              "\n                                        "
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  { attrs: { "two-line": "", subheader: "" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "headline" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.day) +
                                            ", " +
                                            _vm._s(_vm.date) +
                                            _vm._s(_vm.ord) +
                                            "\n                                        " +
                                            _vm._s(_vm.year)
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "mx-12 text-right" },
                                      [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.todos.length)),
                                        ]),
                                        _vm._v(
                                          " Tasks\n                                    "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
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
                                    _vm.todos.length == 0
                                      ? _c(
                                          "v-subheader",
                                          { staticClass: "subheading" },
                                          [
                                            _vm._v(
                                              "You have 0 Tasks, add\n                                        some"
                                            ),
                                          ]
                                        )
                                      : _c(
                                          "v-subheader",
                                          { staticClass: "subheading" },
                                          [_vm._v("Your Tasks")]
                                        ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-group",
                                      _vm._l(_vm.todoList, function (todo, i) {
                                        return _c("v-list-item", {
                                          key: i,
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function (ref) {
                                                  var active = ref.active
                                                  return [
                                                    _c(
                                                      "v-list-item-action",
                                                      [
                                                        _c("v-checkbox", {
                                                          attrs: {
                                                            active: todo.done,
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.updateStatus(
                                                                todo.id,
                                                                "done"
                                                              )
                                                            },
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-list-item-content",
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          {
                                                            class: {
                                                              done: todo.done
                                                                ? true
                                                                : active,
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm._f(
                                                                  "capitalize"
                                                                )(todo.title)
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-subtitle",
                                                          [
                                                            _vm._v(
                                                              "Added on: " +
                                                                _vm._s(
                                                                  _vm.date
                                                                ) +
                                                                _vm._s(
                                                                  _vm.ord
                                                                ) +
                                                                "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.day
                                                                ) +
                                                                "\n                                                        " +
                                                                _vm._s(_vm.year)
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    active
                                                      ? _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              fab: "",
                                                              ripple: "",
                                                              small: "",
                                                              color: "red",
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.removeTodo(
                                                                  i
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                staticClass:
                                                                  "white--text",
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-close"
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : _vm._e(),
                                                  ]
                                                },
                                              },
                                            ],
                                            null,
                                            true
                                          ),
                                        })
                                      }),
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UploadFiles.vue?vue&type=template&id=78ce364a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UploadFiles.vue?vue&type=template&id=78ce364a& ***!
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
  return _c(
    "div",
    [
      _vm.currentFile
        ? _c("div", [
            _c(
              "div",
              [
                _c(
                  "v-progress-linear",
                  {
                    attrs: { color: "light-blue", height: "25", reactive: "" },
                    model: {
                      value: _vm.progress,
                      callback: function ($$v) {
                        _vm.progress = $$v
                      },
                      expression: "progress",
                    },
                  },
                  [_c("strong", [_vm._v(_vm._s(_vm.progress) + " %")])]
                ),
              ],
              1
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { "no-gutters": "", justify: "center", align: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "8" } },
            [
              _c("v-file-input", {
                attrs: { "show-size": "", label: "File input" },
                on: { change: _vm.selectFile },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pl-2", attrs: { cols: "4" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "success", dark: "", small: "" },
                  on: { click: _vm.upload },
                },
                [
                  _vm._v("\n                Upload\n                "),
                  _c("v-icon", { attrs: { right: "", dark: "" } }, [
                    _vm._v("mdi-cloud-upload"),
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
      _vm.message
        ? _c(
            "v-alert",
            { attrs: { border: "left", color: "blue-grey", dark: "" } },
            [_vm._v(_vm._s(_vm.message))]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c(
            "v-list",
            { staticClass: "bg-red" },
            [
              _c("v-subheader", [_vm._v("List of Files")]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                { attrs: { color: "primary" } },
                _vm._l(_vm.fileInfos, function (file, index) {
                  return _c(
                    "v-list-item",
                    { key: index },
                    [
                      _c("v-list-item-content", [
                        _c("a", { attrs: { href: file.filepath } }, [
                          _vm._v(_vm._s(file.filepath)),
                        ]),
                      ]),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("DocumentDemand", { staticClass: "mt-5" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal/DocumentDemand.vue?vue&type=template&id=2ff2b3d3&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal/DocumentDemand.vue?vue&type=template&id=2ff2b3d3& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      staticClass: "mt-5",
      attrs: { persistent: "", "max-width": "600px" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function (ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _c(
                "v-btn",
                _vm._g(
                  _vm._b(
                    {
                      staticClass: "mt-5",
                      attrs: { color: "primary", dark: "" },
                    },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [_vm._v("Demander un document")]
              ),
            ]
          },
        },
      ]),
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "text-h5" }, [
              _vm._v("Formulaire demande de document"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Titre du document*",
                              required: "",
                            },
                            model: {
                              value: _vm.document_title,
                              callback: function ($$v) {
                                _vm.document_title = $$v
                              },
                              expression: "document_title",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            staticClass: "p-2",
                            attrs: {
                              autocomplete: "Description(optionnel)",
                              label: "Description",
                            },
                            model: {
                              value: _vm.description,
                              callback: function ($$v) {
                                _vm.description = $$v
                              },
                              expression: "description",
                            },
                          }),
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
              _c("small", [_vm._v("*indicates required field")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: {
                    click: function ($event) {
                      _vm.dialog = false
                    },
                  },
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: {
                    click: function () {
                      _vm.submit()
                      _vm.dialog = false
                    },
                  },
                },
                [_vm._v("Submit")]
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



/***/ })

}]);