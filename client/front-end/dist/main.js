(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+CTO":
/*!****************************************************!*\
  !*** ./src/app/graphical/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const head_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](head_r2);
} }
function TableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5);
} }
function TableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_tr_6_td_1_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r3);
} }
class TableComponent {
    constructor() {
        this.series = [];
        this.labels = [];
        this.loaded = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this.chart = new ChartComponent();
        this.loaded = true;
    }
    ngOnChanges(changes) {
        let series = [];
        let labels = [];
        this.values.forEach(item => {
            let arrSeries = [];
            let label = new Set();
            this.widgetData.seriesChart.forEach(el => {
                if (item[el.seriesKey]) {
                    if (item[el.seriesKey] !== 'dateTime') {
                        arrSeries.push(item[el.seriesKey].value);
                    }
                    else {
                        arrSeries.push(item[el.seriesKey]);
                    }
                    label.add(el.seriesLabel);
                }
            });
            series.push(arrSeries);
            labels = [...label];
        });
        this.series = series;
        this.labels = labels;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { widgetData: "widgetData", values: "values", nodeId: "nodeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 2, consts: [[1, "scroller"], [1, "table"], [1, "thead-dark"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_th_4_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_tr_6_Template, 2, 1, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.series);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".scroller[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxlcntcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return []; }, { widgetData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nodeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Manjunath\Downloads\Coding\Coding\opcua-assessment\client\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3g2F":
/*!**********************************************************!*\
  !*** ./src/app/create-widget/create-widget.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWidgetComponent", function() { return CreateWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CreateWidgetComponent_div_24_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.label);
} }
function CreateWidgetComponent_div_24_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.label);
} }
function CreateWidgetComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select X-Axis Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateWidgetComponent_div_24_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeXAxisKey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateWidgetComponent_div_24_option_6_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "X-Axis Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select Y-Axis Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateWidgetComponent_div_24_Template_select_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeYAxisKey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateWidgetComponent_div_24_option_20_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Y-Axis Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Enter Series Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.xAxisOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.yAxisOption);
} }
function CreateWidgetComponent_ng_container_25_ng_container_2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r13.label);
} }
function CreateWidgetComponent_ng_container_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateWidgetComponent_ng_container_25_ng_container_2_option_6_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateWidgetComponent_ng_container_25_ng_container_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r11 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.removeRow(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const seriesControl_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", seriesControl_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r9.widgetForm.get("widgetType").value == "TABLE" ? "Data Key" : "Series Key", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.seriesKeyOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.widgetForm.get("widgetType").value == "TABLE" ? "Column Label" : "Series Label");
} }
function CreateWidgetComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateWidgetComponent_ng_container_25_ng_container_2_Template, 16, 4, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateWidgetComponent_ng_container_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.addRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add a Row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.seriesArray.controls);
} }
class CreateWidgetComponent {
    constructor(fb) {
        this.fb = fb;
        this.createWidget = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.O5D100YOptions = [{ label: 'distance', unit: 'cm' }];
        this.O5D100XOptions = [{ label: 'switchState', unit: '' }, { label: 'dateTime', unit: '' }];
        this.VVB001YOptions = [{ label: 'fatigue', unit: 'm/s' },
            { label: 'impact', unit: 'm/s^2' },
            { label: 'friction', unit: 'm/s^2' },
            { label: 'temperature', unit: '°C' },
            { label: 'crest', unit: '' },
            { label: 'impact', unit: '' }];
        this.VVB001XOptions = [{ label: 'status', unit: '' }, { label: 'out1', unit: '' }, { label: 'out2', unit: '' }, { label: 'dateTime', unit: '' }];
        this.xAxisOption = [];
        this.yAxisOption = [];
        this.seriesKeyOption = [];
        this.seriesKeyO5D100 = [{ label: 'distance', unit: 'cm' }];
        this.seriesKeyVVB001 = [{ label: 'fatigue', unit: 'm/s' },
            { label: 'impact', unit: 'm/s^2' },
            { label: 'friction', unit: 'm/s^2' },
            { label: 'temperature', unit: '°C' },
            { label: 'crest', unit: '' },
            { label: 'impact', unit: '' }];
        this.widgetForm = this.fb.group({
            widgetName: [''],
            widgetType: [''],
            chartTitle: [''],
            xAxisLabel: [''],
            xAxisKey: [''],
            xAxisUnit: [''],
            yAxisLabel: [''],
            yAxisKey: [''],
            yAxisUnit: [''],
            seriesName: [''],
            seriesChart: this.fb.array([])
        });
    }
    ngOnInit() {
    }
    // Getter for easier access to FormArray
    get seriesArray() {
        return this.widgetForm.get('seriesChart');
    }
    // Method to add a new email FormControl
    addRow() {
        this.seriesArray.push(this.fb.group({
            seriesKey: [''],
            seriesLabel: ['']
        }));
    }
    // Method to remove an email FormControl
    removeRow(index) {
        this.seriesArray.removeAt(index);
    }
    ngOnChanges(changes) {
        this.seriesArray.clear();
        if (this.nodeId == 'ns=1;s=O5D100') {
            this.xAxisOption = this.O5D100XOptions;
            this.yAxisOption = this.O5D100YOptions;
        }
        if (this.nodeId == 'ns=1;s=VVB001') {
            this.xAxisOption = this.VVB001XOptions;
            this.yAxisOption = this.VVB001YOptions;
        }
    }
    chartTypeChange() {
        this.seriesArray.clear();
        if (this.nodeId == 'ns=1;s=O5D100') {
            if (this.widgetForm.get('widgetType').value == 'TABLE') {
                this.seriesKeyOption = [...this.O5D100XOptions, ...this.O5D100YOptions];
            }
            else {
                this.seriesKeyOption = this.seriesKeyO5D100;
            }
        }
        if (this.nodeId == 'ns=1;s=VVB001') {
            if (this.widgetForm.get('widgetType').value == 'TABLE') {
                this.seriesKeyOption = [...this.VVB001XOptions, ...this.VVB001YOptions];
            }
            else {
                this.seriesKeyOption = this.seriesKeyVVB001;
            }
        }
    }
    changeXAxisKey(evt) {
        let val = evt.target.value;
        let filtered = this.xAxisOption.filter(el => el.label == val)[0];
        this.widgetForm.get('xAxisUnit').setValue(filtered.unit);
    }
    changeYAxisKey(evt) {
        let val = evt.target.value;
        let filtered = this.yAxisOption.filter(el => el.label == val)[0];
        this.widgetForm.get('yAxisUnit').setValue(filtered.unit);
    }
    create() {
        if (this.widgetForm.valid) {
            this.createWidget.emit(this.widgetForm.value);
            this.widgetForm.patchValue({ widgetName: '', widgetType: '', chartTitle: '', xAxisLabel: '', xAxisKey: '', xAxisUnit: '', yAxisLabel: '', yAxisKey: '', yAxisUnit: '', seriesName: '' });
        }
        else {
        }
    }
}
CreateWidgetComponent.ɵfac = function CreateWidgetComponent_Factory(t) { return new (t || CreateWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateWidgetComponent, selectors: [["app-create-widget"]], inputs: { nodeId: "nodeId", hideNode: "hideNode" }, outputs: { createWidget: "createWidget" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 4, consts: [[1, "add-widget-box"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "widgetName", 1, "text-dark"], ["type", "text", "formControlName", "widgetName", "id", "widgetName", "aria-describedby", "emailHelp", 1, "form-control", "form-control-sm"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "widgetType", 1, "text-dark"], ["id", "widgetType", "formControlName", "widgetType", 1, "form-control", "form-control-sm", 3, "change"], ["value", "BAR"], ["value", "LINE"], ["value", "PIE"], ["value", "TABLE"], ["for", "chartTitle", 1, "text-dark"], ["type", "text", "id", "chartTitle", "formControlName", "chartTitle", "aria-describedby", "emailHelp", 1, "form-control", "form-control-sm"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "xAxisKey", 1, "text-dark"], ["id", "xAxisKey", "formControlName", "xAxisKey", 1, "form-control", "form-control-sm", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "xAxisLabel", 1, "text-dark"], ["type", "text", "id", "xAxisLabel", "formControlName", "xAxisLabel", 1, "form-control", "form-control-sm"], ["for", "xAxisUnit", 1, "text-dark"], ["type", "text", "id", "xAxisUnit", "formControlName", "xAxisUnit", 1, "form-control", "form-control-sm"], ["for", "yAxisKey", 1, "text-dark"], ["id", "yAxisKey", "formControlName", "yAxisKey", 1, "form-control", "form-control-sm", 3, "change"], ["for", "yAxisLabel", 1, "text-dark"], ["type", "text", "id", "yAxisLabel", "formControlName", "yAxisLabel", 1, "form-control", "form-control-sm"], ["for", "yAxisUnit", 1, "text-dark"], ["type", "email", "id", "yAxisUnit", "formControlName", "yAxisUnit", 1, "form-control", "form-control-sm"], ["for", "seriesName", 1, "text-dark"], ["type", "text", "id", "seriesName", "aria-describedby", "emailHelp", "formControlName", "seriesName", 1, "form-control", "form-control-sm"], [3, "value"], ["formArrayName", "seriesChart"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "float-right", 3, "click"], [1, "fa", "fa-plus"], [1, "row", 3, "formGroup"], [1, "form-group", "col-md-6"], ["for", "seriesKey", 1, "text-dark"], ["id", "seriesKey", "formControlName", "seriesKey", 1, "form-control", "form-control-sm"], ["for", "seriesLabel", 1, "text-dark"], ["type", "text", "id", "seriesLabel", "formControlName", "seriesLabel", 1, "form-control", "form-control-sm"], [1, "form-group", "col-md-2"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-trash"]], template: function CreateWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateWidgetComponent_Template_form_ngSubmit_1_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Widget Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Widget Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateWidgetComponent_Template_select_change_10_listener() { return ctx.chartTypeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter Chart Title :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateWidgetComponent_div_24_Template, 34, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateWidgetComponent_ng_container_25_Template, 7, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.widgetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgetForm.get("widgetType").value == "BAR" || ctx.widgetForm.get("widgetType").value == "LINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgetForm.get("widgetType").value == "PIE" || ctx.widgetForm.get("widgetType").value == "TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.hideNode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"]], styles: [".add-widget-box[_ngcontent-%COMP%] {\n  border: 1px solid #533a7129;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC13aWRnZXQtYm94e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUzM2E3MTI5O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-widget',
                templateUrl: './create-widget.component.html',
                styleUrls: ['./create-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { nodeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], createWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9SoF":
/*!************************************************!*\
  !*** ./src/app/graphical/pie/pie.component.ts ***!
  \************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class PieComponent {
    constructor() { this.loaded = false; }
    ngOnInit() {
        this.chartOptions = {
            series: [],
            chart: {
                width: "80%",
                type: "pie"
            }, title: {
                text: this.widgetData.chartTitle,
                align: "left",
                offsetX: 30,
                offsetY: -1.5
            },
            labels: [],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
    }
    ngAfterViewInit() {
        // this.chart = new ChartComponent();
        this.loaded = true;
    }
    ngOnChanges(changes) {
        let series = [];
        let labels = [];
        this.values.forEach(item => {
            this.widgetData.seriesChart.forEach(el => {
                if (item[el.seriesKey]) {
                    labels.push(el.seriesLabel);
                    series.push(Math.round(item[el.seriesKey].value));
                }
            });
        });
        this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), { series: series, labels: labels });
    }
}
PieComponent.ɵfac = function PieComponent_Factory(t) { return new (t || PieComponent)(); };
PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieComponent, selectors: [["app-pie"]], viewQuery: function PieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { widgetData: "widgetData", values: "values", nodeId: "nodeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 5, consts: [[3, "series", "chart", "labels", "responsive", "title"]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("labels", ctx.chartOptions.labels)("responsive", ctx.chartOptions.responsive)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pie',
                templateUrl: './pie.component.html',
                styleUrls: ['./pie.component.scss']
            }]
    }], function () { return []; }, { widgetData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nodeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    socketIOUrl: 'http://localhost:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _create_widget_create_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-widget/create-widget.component */ "3g2F");
/* harmony import */ var _graphical_line_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphical/line/line.component */ "tHbY");
/* harmony import */ var _graphical_bar_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphical/bar/bar.component */ "ieNL");
/* harmony import */ var _graphical_pie_pie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graphical/pie/pie.component */ "9SoF");
/* harmony import */ var _graphical_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphical/table/table.component */ "+CTO");













function AppComponent_ng_container_10_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Connecting ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_10_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed to Connect, retrying the connection...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_ng_container_10_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.connectToOpcua(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter the Endpoint :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "opc.tcp://<host>:<port>/Simulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Connect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_ng_container_10_span_12_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ng_container_10_span_13_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.connectForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isConnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.retryConnect);
} }
function AppComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Connected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.disconnectFromOpcua(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Disconnect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Endpoint : ", ctx_r1.serverUrl, "");
} }
function AppComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_ng_container_15_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.readDataFromNode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter the Node ID :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ns=1;s=O5D100 / ns=1;s=VVB001 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.readFromNodeForm);
} }
function AppComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reading the values. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_16_Template_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.lastValues = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Latest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last 5 values");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last 10 Values");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last 15 Values");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last 25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last 35");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last 50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_16_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.disconnectTheSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Stop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Node Id : ", ctx_r3.nodeId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Display : ", ctx_r3.lastValues, " values");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.lastValues);
} }
function AppComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, log_r18.time, "dd/MM/yyyy hh:mm:ss a"), " ", log_r18.msg, "");
} }
function AppComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, log_r19.time, "dd/MM/yyyy hh:mm:ss a"), " ", log_r19.msg, "");
} }
function AppComponent_div_46_app_line_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-line", 59);
} if (rf & 2) {
    const widget_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetData", widget_r20)("values", ctx_r22.values);
} }
function AppComponent_div_46_app_bar_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bar", 59);
} if (rf & 2) {
    const widget_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetData", widget_r20)("values", ctx_r23.values);
} }
function AppComponent_div_46_app_pie_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pie", 59);
} if (rf & 2) {
    const widget_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetData", widget_r20)("values", ctx_r24.values);
} }
function AppComponent_div_46_app_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table", 59);
} if (rf & 2) {
    const widget_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetData", widget_r20)("values", ctx_r25.values);
} }
function AppComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_46_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r21 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.deleteWidget(i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_46_app_line_10_Template, 1, 2, "app-line", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_46_app_bar_11_Template, 1, 2, "app-bar", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_46_app_pie_12_Template, 1, 2, "app-pie", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_46_app_table_13_Template, 1, 2, "app-table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](widget_r20.widgetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.widgetType == "LINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.widgetType == "BAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.widgetType == "PIE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r20.widgetType == "TABLE");
} }
class AppComponent {
    constructor(socket, fb) {
        this.socket = socket;
        this.fb = fb;
        this.title = 'frontend';
        this.values = [];
        this.serverUrl = '';
        this.isConnect = false;
        this.retryConnect = false;
        this.hideConn = false;
        this.connectionLogs = [];
        this.dataLogs = [];
        this.hideNode = false;
        this.widgets = [];
        this.lastValues = -1;
        this.connectForm = this.fb.group({
            connectionStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.readFromNodeForm = this.fb.group({
            nodeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getMessage() {
        return this.socket.fromEvent('values').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500));
    }
    ngOnInit() {
        this.getMessage().subscribe((data) => {
            this.dataLogs.push({ msg: JSON.stringify(data), time: new Date() });
            this.values.push(data.decodedData);
            this.dataLogs = this.dataLogs.slice(this.lastValues);
            this.values = this.values.slice(this.lastValues);
            // Handle data
        }, (err) => {
            console.log(err);
        });
        this.socket.fromEvent('connection-success').subscribe((data) => {
            this.serverUrl = data;
            this.isConnect = false;
            this.retryConnect = false;
            this.connectionLogs.push({ msg: "connection is successful.", time: new Date() });
            this.hideConn = true;
        });
        this.socket.fromEvent('connection-retry').subscribe((data) => {
            this.retryConnect = true;
            this.connectionLogs.push({ msg: "Trying to re-connect", time: new Date() });
        });
        this.socket.fromEvent('connection-failed').subscribe((data) => {
            this.hideConn = false;
            this.connectionLogs.push({ msg: "Failed to establish the connection, " + data, time: new Date() });
        });
        this.socket.fromEvent('disconnected').subscribe((data) => {
            this.hideConn = false;
            this.hideNode = false;
            this.connectionLogs.push({ msg: "Disconnected", time: new Date() });
        });
        this.socket.fromEvent('disconnect-error').subscribe((data) => {
            this.hideConn = false;
            this.connectionLogs.push({ msg: "Error while disconnecting " + data, time: new Date() });
        });
        this.socket.fromEvent('session-create-error').subscribe((data) => {
            this.hideNode = false;
            this.connectionLogs.push({ msg: "Error while creating a session " + data, time: new Date() });
        });
        this.socket.fromEvent('session-read-error').subscribe((data) => {
            this.hideNode = false;
            this.dataLogs.push({ msg: "Error while Reading the data " + data, time: new Date() });
        });
        this.socket.fromEvent('session-disconnect').subscribe((data) => {
            this.hideNode = false;
            this.connectionLogs.push({ msg: "Session disconnected from the node", time: new Date() });
        });
        this.socket.fromEvent('session-disconnect-error').subscribe((data) => {
            this.connectionLogs.push({ msg: "Error While disconnecting the current session" + data, time: new Date() });
        });
        this.socket.fromEvent('session-created').subscribe((data) => {
            this.hideNode = true;
            this.nodeId = data;
            this.connectionLogs.push({ msg: "Session created for " + data, time: new Date() });
        });
    }
    connectToOpcua() {
        if (this.connectForm.valid) {
            this.isConnect = true;
            this.connectionLogs.push({ msg: "Trying to establish an connection to opc ua server.", time: new Date() });
            // Form is valid, handle submission
            console.log(this.connectForm.value);
            this.socket.emit('connect-to-opcua', this.connectForm.value.connectionStr);
        }
        else {
            // Form is invalid, display error messages
        }
    }
    readDataFromNode() {
        if (this.readFromNodeForm.valid) {
            console.log(this.readFromNodeForm.value);
            this.socket.emit('create-session-read-data', this.readFromNodeForm.value.nodeId);
            this.connectionLogs.push({ msg: "Trying to create a session to read data from a node.", time: new Date() });
        }
        else {
        }
    }
    disconnectFromOpcua() {
        this.connectForm.patchValue({ connectionStr: '' });
        this.socket.emit('disconnect-from-opcua');
        this.connectionLogs.push({ msg: "Trying to disconnect the existing connection to opc ua server.", time: new Date() });
        this.hideConn = false;
    }
    disconnectTheSession() {
        this.readFromNodeForm.patchValue({ nodeId: '' });
        this.socket.emit('disconnect-from-session');
        this.connectionLogs.push({ msg: "Trying to disconnect the session of the existing node", time: new Date() });
    }
    addWidget(evt) {
        this.widgets.push(evt);
        console.log(evt);
    }
    deleteWidget(i) {
        this.widgets.splice(i, 1);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 47, vars: 10, consts: [[1, "navbar", "navbar-light", "header", "shadow-sm"], [1, "navbar-brand", "font-weight-bold"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "connection", "shadow-sm"], [4, "ngIf"], [1, "col-md-9"], [1, "logs", "shadow-sm"], [3, "isAnimated"], ["accordion-heading", "", "type", "button", 1, "btn", "btn-link", "btn-block", "justify-content-between", "d-flex", "w-100", "shadow-none"], [1, "pull-left", "float-left"], [1, "float-right", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], [1, "logs-section"], ["class", "lin", 4, "ngFor", "ngForOf"], [1, "widget-creation", "shadow-sm"], [1, "col-md-6"], [3, "nodeId", "hideNode", "createWidget"], [1, "widget-display", "shadow-sm"], ["class", "col-md-6 mar", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "endpoint", 1, "text-dark"], ["type", "text", "formControlName", "connectionStr", "id", "endpoint", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted", "text-wrap"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-handshake-o"], ["class", "badge badge-pill badge-info", 4, "ngIf"], ["class", "badge badge-pill badge-danger text-wrap", 4, "ngIf"], [1, "badge", "badge-pill", "badge-info"], ["aria-hidden", "true", 1, "fa", "fa-cog", "fa-spin"], [1, "badge", "badge-pill", "badge-danger", "text-wrap"], [1, "text-dark"], [1, "badge", "badge-pill", "badge-success"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["type", "text", "formControlName", "nodeId", "id", "endpoint", "aria-describedby", "emailHelp", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"], ["id", "widgetType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "-1"], ["value", "-5"], ["value", "-10"], ["value", "-15"], ["value", "-25"], ["value", "-45"], ["value", "-50"], [1, "lin"], [1, "col-md-6", "mar"], [1, "widget"], [1, "toolbar"], [1, "row", "justify-content-between"], [1, "col-auto", "mr-auto"], [1, "col-auto"], [1, "fa", "fa-close", 2, "cursor", "pointer", 3, "click"], [1, "graph"], [3, "widgetData", "values", 4, "ngIf"], [3, "widgetData", "values"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " OPC UA Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Establish a Connection to the OPC UA server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_container_10_Template, 14, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_ng_container_11_Template, 11, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Read data from a Node :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ng_container_15_Template, 10, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_ng_container_16_Template, 30, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "accordion-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Connection Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_p_27_Template, 3, 5, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "accordion-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Data Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_p_35_Template, 3, 5, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Widget Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-create-widget", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("createWidget", function AppComponent_Template_app_create_widget_createWidget_42_listener($event) { return ctx.addWidget($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppComponent_div_46_Template, 14, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideConn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideConn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connectionLogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataLogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeId", ctx.nodeId)("hideNode", ctx.hideNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.widgets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionPanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _create_widget_create_widget_component__WEBPACK_IMPORTED_MODULE_6__["CreateWidgetComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _graphical_line_line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"], _graphical_bar_bar_component__WEBPACK_IMPORTED_MODULE_8__["BarComponent"], _graphical_pie_pie_component__WEBPACK_IMPORTED_MODULE_9__["PieComponent"], _graphical_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #F9DC5C;\n}\n\n.connection[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  background-color: #ffff;\n  border-right: 2px solid #F9DC5C;\n  padding: 25px;\n}\n\n.logs[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  background-color: #ffff;\n  border-top: 2px solid #F9DC5C;\n  padding: 15px;\n}\n\n.widget-creation[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  background-color: #ffff;\n  border-top: 2px solid #F9DC5C;\n  padding: 15px;\n}\n\n.widget-display[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  background-color: #ffff;\n  border-top: 2px solid #F9DC5C;\n  padding: 15px;\n}\n\n.logs-section[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n}\n\n.logs-section[_ngcontent-%COMP%]   .lin[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #533a7129;\n}\n\n.widget[_ngcontent-%COMP%] {\n  border: 1px solid #533a7129;\n}\n\n.widget[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  background-color: #587D71;\n  color: #F4FFFD;\n  padding: 10px;\n}\n\n.widget[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.mar[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx5QkNFTTtBREpWOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBR0k7RUFDSSxrQ0FBQTtBQURSOztBQUtBO0VBQ0ksMkJBQUE7QUFGSjs7QUFJSTtFQUNJLHlCQ2pESTtFRGtESixjQzdDQTtFRDhDQSxhQUFBO0FBRlI7O0FBS0k7RUFDSSxZQUFBO0FBSFI7O0FBT0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBSkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgXCIuLy4uL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdhcm5pbmc7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR3YXJuaW5nO1xyXG4gICAgcGFkZGluZzoyNXB4O1xyXG59XHJcblxyXG4ubG9nc3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJHdhcm5pbmc7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuXHJcbi53aWRnZXQtY3JlYXRpb257XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR3YXJuaW5nO1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG59XHJcblxyXG4ud2lkZ2V0LWRpc3BsYXl7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR3YXJuaW5nO1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG59XHJcblxyXG4ubG9ncy1zZWN0aW9ue1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAubGlue1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTMzYTcxMjk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53aWRnZXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTMzYTcxMjk7XHJcbiAgXHJcbiAgICAudG9vbGJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JhcGh7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iLCIkZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogdHJ1ZTtcclxuJHByaW1hcnk6ICMwMTE5MzY7XHJcbiRzZWNvbmRhcnk6ICM1ODdENzE7XHJcbiRzdWNjZXNzOiAjNERBQTU3O1xyXG4kZGFuZ2VyOiAjZWQ2YjUyO1xyXG4kaW5mbzogIzM5QTJBRTtcclxuJHdhcm5pbmc6ICNGOURDNUM7XHJcbiRsaWdodDogI0Y0RkZGRDtcclxuJGRhcms6ICM1MzNBNzE7XHJcbiRncmV5OiByZ2JhKDAsIDAsIDAsIDAuMjUpOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _graphical_line_line_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphical/line/line.component */ "tHbY");
/* harmony import */ var _graphical_bar_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graphical/bar/bar.component */ "ieNL");
/* harmony import */ var _create_widget_create_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-widget/create-widget.component */ "3g2F");
/* harmony import */ var _graphical_pie_pie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphical/pie/pie.component */ "9SoF");
/* harmony import */ var _graphical_table_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphical/table/table.component */ "+CTO");



















const config = { url: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].socketIOUrl, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(), ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _graphical_line_line_component__WEBPACK_IMPORTED_MODULE_10__["LineComponent"], _graphical_bar_bar_component__WEBPACK_IMPORTED_MODULE_11__["BarComponent"], _create_widget_create_widget_component__WEBPACK_IMPORTED_MODULE_12__["CreateWidgetComponent"], _graphical_pie_pie_component__WEBPACK_IMPORTED_MODULE_13__["PieComponent"], _graphical_table_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _graphical_line_line_component__WEBPACK_IMPORTED_MODULE_10__["LineComponent"], _graphical_bar_bar_component__WEBPACK_IMPORTED_MODULE_11__["BarComponent"], _create_widget_create_widget_component__WEBPACK_IMPORTED_MODULE_12__["CreateWidgetComponent"], _graphical_pie_pie_component__WEBPACK_IMPORTED_MODULE_13__["PieComponent"], _graphical_table_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(), ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["NgApexchartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ieNL":
/*!************************************************!*\
  !*** ./src/app/graphical/bar/bar.component.ts ***!
  \************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class BarComponent {
    constructor() {
        this.loaded = false;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: "bar",
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: this.widgetData.chartTitle,
                align: "left"
            },
            xaxis: {
                categories: [
                    "South Korea",
                    "Canada",
                    "United Kingdom",
                    "Netherlands",
                    "Italy",
                    "France",
                    "Japan",
                    "United States",
                    "China",
                    "Germany"
                ], title: { text: this.widgetData.xAxisLabel }
            }, yaxis: {
                title: {
                    text: this.widgetData.yAxisLabel
                },
            },
            series: [
                {
                    name: "basic",
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }
            ],
        };
    }
    ngAfterViewInit() {
        // this.chart = new ChartComponent();
        this.loaded = true;
    }
    ngOnChanges(changes) {
        let xAxisData = [];
        let seriesData = [];
        this.values.forEach(item => {
            if (this.widgetData.xAxisKey !== 'dateTime') {
                xAxisData.push(item[this.widgetData.xAxisKey].value);
            }
            else {
                xAxisData.push(item[this.widgetData.xAxisKey]);
            }
            seriesData.push(item[this.widgetData.yAxisKey].value);
        });
        this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), { xaxis: { categories: xAxisData }, series: [{
                    name: this.widgetData.seriesName,
                    data: seriesData
                }] });
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(); };
BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["app-bar"]], viewQuery: function BarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { widgetData: "widgetData", values: "values", nodeId: "nodeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 6, consts: [[3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "title"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("xaxis", ctx.chartOptions.xaxis)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar',
                templateUrl: './bar.component.html',
                styleUrls: ['./bar.component.scss']
            }]
    }], function () { return []; }, { widgetData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nodeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "tHbY":
/*!**************************************************!*\
  !*** ./src/app/graphical/line/line.component.ts ***!
  \**************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class LineComponent {
    constructor() {
        this.loaded = false;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false
                }, toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            title: {
                text: this.widgetData.chartTitle,
                align: "left"
            },
            grid: {
            // row: {
            //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            //   opacity: 0.5
            // }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ], title: { text: this.widgetData.xAxisLabel }
            },
            yaxis: {
                title: {
                    text: this.widgetData.yAxisLabel
                },
            },
            series: [
                {
                    name: this.widgetData.seriesName,
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
        };
        console.log(this.chartOptions);
    }
    ngAfterViewInit() {
        // this.chart = new ChartComponent();
        this.loaded = true;
    }
    ngOnChanges(changes) {
        let xAxisData = [];
        let seriesData = [];
        this.values.forEach(item => {
            if (this.widgetData.xAxisKey !== 'dateTime') {
                xAxisData.push(item[this.widgetData.xAxisKey].value);
            }
            else {
                xAxisData.push(item[this.widgetData.xAxisKey]);
            }
            seriesData.push(item[this.widgetData.yAxisKey].value);
        });
        this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), { xaxis: { categories: xAxisData }, series: [{
                    name: this.widgetData.seriesName,
                    data: seriesData
                }] });
    }
}
LineComponent.ɵfac = function LineComponent_Factory(t) { return new (t || LineComponent)(); };
LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineComponent, selectors: [["app-line"]], viewQuery: function LineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { widgetData: "widgetData", values: "values", nodeId: "nodeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 7, consts: [[3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line',
                templateUrl: './line.component.html',
                styleUrls: ['./line.component.scss']
            }]
    }], function () { return []; }, { widgetData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nodeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart", { static: false }]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map