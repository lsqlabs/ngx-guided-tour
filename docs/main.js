(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.component.scss":
/*!*********************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngx-guided-tour .guided-tour-user-input-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: block;\n  height: 100%;\n  width: 100%;\n  max-height: 100vh;\n  text-align: center;\n  opacity: 0; }\n\nngx-guided-tour .guided-tour-spotlight-overlay {\n  position: fixed;\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7), 0 0 1.5rem rgba(0, 0, 0, 0.5); }\n\nngx-guided-tour .tour-orb {\n  position: fixed;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%; }\n\nngx-guided-tour .tour-orb .tour-orb-ring {\n    width: 35px;\n    height: 35px;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-animation: pulse 2s linear infinite;\n            animation: pulse 2s linear infinite; }\n\nngx-guided-tour .tour-orb .tour-orb-ring:after {\n      content: '';\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      border-radius: 50%; }\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: translate(-50%, -50%) scale(0.45);\n            transform: translate(-50%, -50%) scale(0.45);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: translate(-50%, -50%) scale(1);\n            transform: translate(-50%, -50%) scale(1);\n    opacity: 0.0; } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: translate(-50%, -50%) scale(0.45);\n            transform: translate(-50%, -50%) scale(0.45);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: translate(-50%, -50%) scale(1);\n            transform: translate(-50%, -50%) scale(1);\n    opacity: 0.0; } }\n\nngx-guided-tour .tour-step {\n  position: fixed; }\n\nngx-guided-tour .tour-step.page-tour-step {\n    max-width: 400px;\n    width: 50%;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\nngx-guided-tour .tour-step.tour-bottom .tour-arrow::before, ngx-guided-tour .tour-step.tour-bottom-right .tour-arrow::before, ngx-guided-tour .tour-step.tour-bottom-left .tour-arrow::before {\n    position: absolute; }\n\nngx-guided-tour .tour-step.tour-bottom .tour-block, ngx-guided-tour .tour-step.tour-bottom-right .tour-block, ngx-guided-tour .tour-step.tour-bottom-left .tour-block {\n    margin-top: 10px; }\n\nngx-guided-tour .tour-step.tour-top, ngx-guided-tour .tour-step.tour-top-right, ngx-guided-tour .tour-step.tour-top-left {\n    margin-bottom: 10px; }\n\nngx-guided-tour .tour-step.tour-top .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-right .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-left .tour-arrow::before {\n      position: absolute;\n      bottom: 0; }\n\nngx-guided-tour .tour-step.tour-top .tour-block, ngx-guided-tour .tour-step.tour-top-right .tour-block, ngx-guided-tour .tour-step.tour-top-left .tour-block {\n      margin-bottom: 10px; }\n\nngx-guided-tour .tour-step.tour-bottom .tour-arrow::before, ngx-guided-tour .tour-step.tour-top .tour-arrow::before {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%; }\n\nngx-guided-tour .tour-step.tour-bottom-right .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-right .tour-arrow::before {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    left: calc(100% - 5px); }\n\nngx-guided-tour .tour-step.tour-bottom-left .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-left .tour-arrow::before {\n    left: 5px; }\n\nngx-guided-tour .tour-step.tour-left .tour-arrow::before {\n    position: absolute;\n    left: 100%;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    top: 5px; }\n\nngx-guided-tour .tour-step.tour-left .tour-block {\n    margin-right: 10px; }\n\nngx-guided-tour .tour-step.tour-right .tour-arrow::before {\n    position: absolute;\n    left: 0;\n    top: 5px; }\n\nngx-guided-tour .tour-step.tour-right .tour-block {\n    margin-left: 10px; }\n\nngx-guided-tour .tour-step .tour-block {\n    padding: 15px 25px; }\n\nngx-guided-tour .tour-step .tour-title {\n    font-weight: bold !important;\n    padding-bottom: 20px; }\n\nngx-guided-tour .tour-step h3.tour-title {\n    font-size: 20px; }\n\nngx-guided-tour .tour-step h2.tour-title {\n    font-size: 30px; }\n\nngx-guided-tour .tour-step .tour-content {\n    min-height: 80px;\n    padding-bottom: 30px;\n    font-size: 15px; }\n\nngx-guided-tour .tour-step .tour-buttons {\n    overflow: hidden; }\n\nngx-guided-tour .tour-step .tour-buttons button.link-button {\n      padding-left: 0;\n      font-size: 15px;\n      font-weight: bold;\n      max-width: none !important;\n      cursor: pointer;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      border: 1px solid transparent;\n      line-height: 1.5;\n      background-color: transparent;\n      position: relative;\n      outline: none;\n      padding: 0 15px;\n      -webkit-appearance: button; }\n\nngx-guided-tour .tour-step .tour-buttons button.skip-button.link-button {\n      padding-left: 0;\n      border-left: 0; }\n\nngx-guided-tour .tour-step .tour-buttons .back-button {\n      float: right; }\n\nngx-guided-tour .tour-step .tour-buttons .next-button {\n      cursor: pointer;\n      border-radius: 1px;\n      float: right;\n      font-size: 14px;\n      border: none;\n      outline: none;\n      padding-left: 10px;\n      padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY29sb24vY29kZS9uZ3gtZ3VpZGVkLXRvdXIvcHJvamVjdHMvbmd4LWd1aWRlZC10b3VyL3NyYy9saWIvZ3VpZGVkLXRvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFWaEI7RUFjTSxlQUFlO0VBQ2YsMEVBQWtFLEVBQUE7O0FBZnhFO0VBbUJNLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQXRCeEI7SUF5QlUsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLDJDQUFtQztZQUFuQyxtQ0FBbUMsRUFBQTs7QUEvQjdDO01Ba0NjLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSTtJQUNJLG9EQUE0QztZQUE1Qyw0Q0FBNEM7SUFDNUMsWUFBWSxFQUFBO0VBRWhCO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QyxZQUFZLEVBQUEsRUFBQTs7QUFQcEI7RUFDSTtJQUNJLG9EQUE0QztZQUE1Qyw0Q0FBNEM7SUFDNUMsWUFBWSxFQUFBO0VBRWhCO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QyxZQUFZLEVBQUEsRUFBQTs7QUFqRDFCO0VBdURNLGVBQWUsRUFBQTs7QUF2RHJCO0lBeURVLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUix3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUE7O0FBN0QxQztJQWlFYyxrQkFBa0IsRUFBQTs7QUFqRWhDO0lBb0VjLGdCQUFnQixFQUFBOztBQXBFOUI7SUF5RVUsbUJBQW1CLEVBQUE7O0FBekU3QjtNQTRFYyxrQkFBa0I7TUFDbEIsU0FBUyxFQUFBOztBQTdFdkI7TUFnRmMsbUJBQW1CLEVBQUE7O0FBaEZqQztJQXNGYyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFNBQVMsRUFBQTs7QUF2RnZCO0lBNkZjLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCLEVBQUE7O0FBOUZwQztJQW9HYyxTQUFVLEVBQUE7O0FBcEd4QjtJQTBHYyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsUUFBUSxFQUFBOztBQTdHdEI7SUFnSGMsa0JBQWtCLEVBQUE7O0FBaEhoQztJQXNIYyxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVEsRUFBQTs7QUF4SHRCO0lBMkhjLGlCQUFpQixFQUFBOztBQTNIL0I7SUFnSVUsa0JBQWtCLEVBQUE7O0FBaEk1QjtJQW9JVSw0QkFBNEI7SUFDNUIsb0JBQW9CLEVBQUE7O0FBckk5QjtJQXlJVSxlQUFlLEVBQUE7O0FBekl6QjtJQTRJVSxlQUFlLEVBQUE7O0FBNUl6QjtJQWdKVSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGVBQWUsRUFBQTs7QUFsSnpCO0lBc0pVLGdCQUFnQixFQUFBOztBQXRKMUI7TUF5SmMsZUFBZTtNQUNmLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsMEJBQTBCO01BQzFCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHNCQUFzQjtNQUN0Qiw2QkFBNkI7TUFDN0IsZ0JBQWdCO01BQ2hCLDZCQUE2QjtNQUM3QixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGVBQWU7TUFDZiwwQkFBMEIsRUFBQTs7QUF2S3hDO01BMktjLGVBQWU7TUFDZixjQUFjLEVBQUE7O0FBNUs1QjtNQWdMYyxZQUFZLEVBQUE7O0FBaEwxQjtNQW9MYyxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixlQUFlO01BQ2YsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LWd1aWRlZC10b3VyL3NyYy9saWIvZ3VpZGVkLXRvdXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3gtZ3VpZGVkLXRvdXIge1xuICAuZ3VpZGVkLXRvdXItdXNlci1pbnB1dC1tYXNrIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmd1aWRlZC10b3VyLXNwb3RsaWdodC1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDk5OTlweCByZ2JhKDAsMCwwLC43KSwgMCAwIDEuNXJlbSByZ2JhKDAsMCwwLC41KTtcbiAgfVxuXG4gIC50b3VyLW9yYiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgLnRvdXItb3JiLXJpbmcge1xuICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgbGluZWFyIGluZmluaXRlO1xuXG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnRvdXItc3RlcCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAmLnBhZ2UtdG91ci1zdGVwIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG4gICAgICB9XG4gICAgICAmLnRvdXItYm90dG9tLCAmLnRvdXItYm90dG9tLXJpZ2h0LCAmLnRvdXItYm90dG9tLWxlZnQge1xuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3VyLWJsb2NrIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudG91ci10b3AsICYudG91ci10b3AtcmlnaHQsICYudG91ci10b3AtbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvdXItYmxvY2sge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi50b3VyLWJvdHRvbSAsICYudG91ci10b3Age1xuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudG91ci1ib3R0b20tcmlnaHQsICYudG91ci10b3AtcmlnaHQge1xuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi50b3VyLWJvdHRvbS1sZWZ0LCAmLnRvdXItdG9wLWxlZnQge1xuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICBsZWZ0OiAgNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi50b3VyLWxlZnQge1xuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG91ci1ibG9jayB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudG91ci1yaWdodCB7XG4gICAgICAgICAgLnRvdXItYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3VyLWJsb2NrIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudG91ci1ibG9jayB7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgICAgfVxuXG4gICAgICAudG91ci10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgaDMudG91ci10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgaDIudG91ci10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICAudG91ci1jb250ZW50IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnRvdXItYnV0dG9ucyB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLy8gY2xlYXJmaXhcblxuICAgICAgICAgIGJ1dHRvbi5saW5rLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24uc2tpcC1idXR0b24ubGluay1idXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmV4dC1idXR0b24ge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.component.ts":
/*!*******************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.component.ts ***!
  \*******************************************************************/
/*! exports provided: GuidedTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidedTourComponent", function() { return GuidedTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guided-tour.constants */ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts");
/* harmony import */ var _guided_tour_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guided-tour.service */ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts");





var GuidedTourComponent = /** @class */ (function () {
    function GuidedTourComponent(guidedTourService) {
        this.guidedTourService = guidedTourService;
        this.topOfPageAdjustment = 0;
        this.tourStepWidth = 300;
        this.highlightPadding = 4;
        this.currentTourStep = null;
        this.selectedElementRect = null;
        this.isOrbShowing = false;
        this._announcementsCount = 0;
    }
    GuidedTourComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.guidedTourService.guidedTourCurrentStepStream.subscribe(function (step) {
            _this.currentTourStep = step;
            if (step && step.selector) {
                var selectedElement = document.querySelector(step.selector);
                if (selectedElement) {
                    _this.scrollToAndSetElement();
                }
                else {
                    _this.selectedElementRect = null;
                }
            }
            else {
                _this.selectedElementRect = null;
            }
        });
        this.guidedTourService.guidedTourOrbShowingStream.subscribe(function (value) {
            _this.isOrbShowing = value;
        });
        this.resizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').subscribe(function () {
            _this.updateStepLocation();
        });
        this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').subscribe(function () {
            _this.updateStepLocation();
        });
    };
    GuidedTourComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
        this.scrollSubscription.unsubscribe();
    };
    GuidedTourComponent.prototype.scrollToAndSetElement = function () {
        var _this = this;
        this.updateStepLocation();
        // Allow things to render to scroll to the correct location
        setTimeout(function () {
            if (!_this.isOrbShowing && !_this.isTourOnScreen()) {
                if (_this.selectedElementRect && _this.isBottom()) {
                    // Scroll so the element is on the top of the screen.
                    var topPos = ((window.scrollY + _this.selectedElementRect.top) - _this.topOfPageAdjustment)
                        - (_this.currentTourStep.scrollAdjustment ? _this.currentTourStep.scrollAdjustment : 0)
                        + _this.getStepScreenAdjustment();
                    try {
                        window.scrollTo({
                            left: null,
                            top: topPos,
                            behavior: 'smooth'
                        });
                    }
                    catch (err) {
                        if (err instanceof TypeError) {
                            window.scroll(0, topPos);
                        }
                        else {
                            throw err;
                        }
                    }
                }
                else {
                    // Scroll so the element is on the bottom of the screen.
                    var topPos = (window.scrollY + _this.selectedElementRect.top + _this.selectedElementRect.height)
                        - window.innerHeight
                        + (_this.currentTourStep.scrollAdjustment ? _this.currentTourStep.scrollAdjustment : 0)
                        - _this.getStepScreenAdjustment();
                    try {
                        window.scrollTo({
                            left: null,
                            top: topPos,
                            behavior: 'smooth'
                        });
                    }
                    catch (err) {
                        if (err instanceof TypeError) {
                            window.scroll(0, topPos);
                        }
                        else {
                            throw err;
                        }
                    }
                }
            }
        });
    };
    GuidedTourComponent.prototype.handleOrb = function () {
        this.guidedTourService.activateOrb();
        if (this.currentTourStep && this.currentTourStep.selector) {
            this.scrollToAndSetElement();
        }
    };
    GuidedTourComponent.prototype.isTourOnScreen = function () {
        return this.tourStep
            && this.elementInViewport(document.querySelector(this.currentTourStep.selector))
            && this.elementInViewport(this.tourStep.nativeElement);
    };
    // Modified from https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    GuidedTourComponent.prototype.elementInViewport = function (element) {
        var top = element.offsetTop;
        var height = element.offsetHeight;
        while (element.offsetParent) {
            element = element.offsetParent;
            top += element.offsetTop;
        }
        if (this.isBottom()) {
            return (top >= (window.pageYOffset
                + this.topOfPageAdjustment
                + (this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0)
                + this.getStepScreenAdjustment())
                && (top + height) <= (window.pageYOffset + window.innerHeight));
        }
        else {
            return (top >= (window.pageYOffset + this.topOfPageAdjustment - this.getStepScreenAdjustment())
                && (top + height + (this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0)) <= (window.pageYOffset + window.innerHeight));
        }
    };
    GuidedTourComponent.prototype.backdropClick = function (event) {
        if (this.guidedTourService.preventBackdropFromAdvancing) {
            event.stopPropagation();
        }
        else {
            this.guidedTourService.nextStep();
        }
    };
    GuidedTourComponent.prototype.updateStepLocation = function () {
        if (this.currentTourStep && this.currentTourStep.selector) {
            var selectedElement = document.querySelector(this.currentTourStep.selector);
            if (selectedElement) {
                this.selectedElementRect = selectedElement.getBoundingClientRect();
            }
            else {
                this.selectedElementRect = null;
            }
        }
        else {
            this.selectedElementRect = null;
        }
    };
    GuidedTourComponent.prototype.isBottom = function () {
        return this.currentTourStep.orientation
            && (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Bottom
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomRight);
    };
    Object.defineProperty(GuidedTourComponent.prototype, "topPosition", {
        get: function () {
            var paddingAdjustment = this.getHighlightPadding();
            if (this.isBottom()) {
                return this.selectedElementRect.top + this.selectedElementRect.height + paddingAdjustment;
            }
            return this.selectedElementRect.top - this.getHighlightPadding();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "orbTopPosition", {
        get: function () {
            if (this.isBottom()) {
                return this.selectedElementRect.top + this.selectedElementRect.height;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Right
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Left) {
                return (this.selectedElementRect.top + (this.selectedElementRect.height / 2));
            }
            return this.selectedElementRect.top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "leftPosition", {
        get: function () {
            var paddingAdjustment = this.getHighlightPadding();
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomRight) {
                return (this.selectedElementRect.right - this.tourStepWidth);
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomLeft) {
                return (this.selectedElementRect.left);
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Left) {
                return (this.selectedElementRect.left - this.tourStepWidth - paddingAdjustment);
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Right) {
                return (this.selectedElementRect.left + this.selectedElementRect.width + paddingAdjustment);
            }
            return (this.selectedElementRect.right - (this.selectedElementRect.width / 2) - (this.tourStepWidth / 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "orbLeftPosition", {
        get: function () {
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomRight) {
                return this.selectedElementRect.right;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomLeft) {
                return this.selectedElementRect.left;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Left) {
                return this.selectedElementRect.left;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Right) {
                return (this.selectedElementRect.left + this.selectedElementRect.width);
            }
            return (this.selectedElementRect.right - (this.selectedElementRect.width / 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "transform", {
        get: function () {
            if (!this.currentTourStep.orientation
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Top
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopLeft) {
                return 'translateY(-100%)';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "orbTransform", {
        get: function () {
            if (!this.currentTourStep.orientation
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Top
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Bottom
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomLeft) {
                return 'translateY(-50%)';
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].BottomRight) {
                return 'translate(-100%, -50%)';
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Right
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Left) {
                return 'translate(-50%, -50%)';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayTop", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.top - this.getHighlightPadding();
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayLeft", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.left - this.getHighlightPadding();
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayHeight", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.height + (this.getHighlightPadding() * 2);
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayWidth", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.width + (this.getHighlightPadding() * 2);
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    GuidedTourComponent.prototype.getHighlightPadding = function () {
        var paddingAdjustment = this.currentTourStep.useHighlightPadding ? this.highlightPadding : 0;
        if (this.currentTourStep.highlightPadding) {
            paddingAdjustment = this.currentTourStep.highlightPadding;
        }
        return paddingAdjustment;
    };
    // This calculates a value to add or subtract so the step should not be off screen.
    GuidedTourComponent.prototype.getStepScreenAdjustment = function () {
        if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Left
            || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_3__["Orientation"].Right) {
            return 0;
        }
        var elementHeight = this.selectedElementRect.height
            + (this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0)
            + this.tourStep.nativeElement.getBoundingClientRect().height;
        if ((window.innerHeight - this.topOfPageAdjustment) < elementHeight) {
            return elementHeight - (window.innerHeight - this.topOfPageAdjustment);
        }
        return 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "topOfPageAdjustment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "tourStepWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tourStep'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GuidedTourComponent.prototype, "tourStep", void 0);
    GuidedTourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-guided-tour',
            template: "\n        <div *ngIf=\"currentTourStep && selectedElementRect && isOrbShowing\"\n                (mouseenter)=\"handleOrb()\"\n                class=\"tour-orb tour-{{ currentTourStep.orientation }}\"\n                [style.top.px]=\"orbTopPosition\"\n                [style.left.px]=\"orbLeftPosition\"\n                [style.transform]=\"orbTransform\">\n                <div class=\"tour-orb-ring\"></div>\n        </div>\n        <div *ngIf=\"currentTourStep && !isOrbShowing\">\n            <div class=\"guided-tour-user-input-mask\" (click)=\"backdropClick($event)\"></div>\n            <div class=\"guided-tour-spotlight-overlay\"\n                [style.top.px]=\"overlayTop\"\n                [style.left.px]=\"overlayLeft\"\n                [style.height.px]=\"overlayHeight\"\n                [style.width.px]=\"overlayWidth\">\n            </div>\n        </div>\n        <div *ngIf=\"currentTourStep && !isOrbShowing\">\n            <div #tourStep *ngIf=\"currentTourStep\"\n                class=\"tour-step tour-{{ currentTourStep.orientation }}\"\n                [ngClass]=\"{\n                    'page-tour-step': !currentTourStep.selector\n                }\"\n                [style.top.px]=\"(currentTourStep.selector && selectedElementRect ? topPosition : null)\"\n                [style.left.px]=\"(currentTourStep.selector && selectedElementRect ? leftPosition : null)\"\n                [style.width.px]=\"(currentTourStep.selector && selectedElementRect ? tourStepWidth : null)\"\n                [style.transform]=\"(currentTourStep.selector && selectedElementRect ? transform : null)\">\n                <div *ngIf=\"currentTourStep.selector\" class=\"tour-arrow\"></div>\n                <div class=\"tour-block\">\n                    <h3 class=\"tour-title\" *ngIf=\"currentTourStep.title && currentTourStep.selector\">\n                        {{ currentTourStep.title }}\n                    </h3>\n                    <h2 class=\"tour-title\" *ngIf=\"currentTourStep.title && !currentTourStep.selector\">\n                        {{ currentTourStep.title }}\n                    </h2>\n                    <div class=\"tour-content\" [innerHTML]=\"currentTourStep.content\"></div>\n                    <div class=\"tour-buttons\">\n                        <button *ngIf=\"!guidedTourService.onResizeMessage\"\n                            (click)=\"guidedTourService.skipTour()\"\n                            class=\"skip-button link-button\">\n                            Skip\n                        </button>\n                        <button *ngIf=\"!guidedTourService.onLastStep && !guidedTourService.onResizeMessage\"\n                            class=\"next-button\"\n                            (click)=\"guidedTourService.nextStep()\">\n                            Next&nbsp;&nbsp;{{ guidedTourService.currentTourStepDisplay }}/{{ guidedTourService.currentTourStepCount }}\n                        </button>\n                        <button *ngIf=\"guidedTourService.onLastStep\"\n                            class=\"next-button\"\n                            (click)=\"guidedTourService.nextStep()\">\n                            Done\n                        </button>\n\n                        <button *ngIf=\"guidedTourService.onResizeMessage\"\n                            class=\"next-button\"\n                            (click)=\"guidedTourService.resetTour()\">\n                            Close\n                        </button>\n                        <button *ngIf=\"!guidedTourService.onFirstStep && !guidedTourService.onResizeMessage\"\n                            class=\"back-button link-button\"\n                            (click)=\"guidedTourService.backStep()\">\n                            Back\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./guided-tour.component.scss */ "./projects/ngx-guided-tour/src/lib/guided-tour.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_guided_tour_service__WEBPACK_IMPORTED_MODULE_4__["GuidedTourService"]])
    ], GuidedTourComponent);
    return GuidedTourComponent;
}());



/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts":
/*!*******************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts ***!
  \*******************************************************************/
/*! exports provided: Orientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return Orientation; });
var Orientation = /** @class */ (function () {
    function Orientation() {
    }
    Orientation.Bottom = 'bottom';
    Orientation.BottomLeft = 'bottom-left';
    Orientation.BottomRight = 'bottom-right';
    Orientation.Center = 'center';
    Orientation.Left = 'left';
    Orientation.Right = 'right';
    Orientation.Top = 'top';
    Orientation.TopLeft = 'top-left';
    Orientation.TopRight = 'top-right';
    return Orientation;
}());



/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.module.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.module.ts ***!
  \****************************************************************/
/*! exports provided: GuidedTourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidedTourModule", function() { return GuidedTourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guided_tour_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guided-tour.service */ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts");
/* harmony import */ var _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guided-tour.component */ "./projects/ngx-guided-tour/src/lib/guided-tour.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var GuidedTourModule = /** @class */ (function () {
    function GuidedTourModule() {
    }
    GuidedTourModule_1 = GuidedTourModule;
    GuidedTourModule.forRoot = function () {
        return {
            ngModule: GuidedTourModule_1,
            providers: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"],
                _guided_tour_service__WEBPACK_IMPORTED_MODULE_1__["GuidedTourService"]
            ]
        };
    };
    var GuidedTourModule_1;
    GuidedTourModule = GuidedTourModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__["GuidedTourComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            exports: [
                _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__["GuidedTourComponent"]
            ],
            entryComponents: [
                _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__["GuidedTourComponent"]
            ]
        })
    ], GuidedTourModule);
    return GuidedTourModule;
}());



/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.service.ts ***!
  \*****************************************************************/
/*! exports provided: GuidedTourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidedTourService", function() { return GuidedTourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guided-tour.constants */ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var GuidedTourService = /** @class */ (function () {
    function GuidedTourService(errorHandler) {
        var _this = this;
        this.errorHandler = errorHandler;
        this._guidedTourCurrentStepSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._guidedTourOrbShowingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._currentTourStepIndex = 0;
        this._currentTour = null;
        this._onFirstStep = true;
        this._onLastStep = true;
        this._onResizeMessage = false;
        this.guidedTourCurrentStepStream = this._guidedTourCurrentStepSubject.asObservable();
        this.guidedTourOrbShowingStream = this._guidedTourOrbShowingSubject.asObservable();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200)).subscribe(function () {
            if (_this._currentTour && _this._currentTourStepIndex > -1) {
                if (_this._currentTour.minimumScreenSize && _this._currentTour.minimumScreenSize >= window.innerWidth) {
                    _this._onResizeMessage = true;
                    _this._guidedTourCurrentStepSubject.next({
                        title: 'Please resize',
                        content: 'You have resized the tour to a size that is too small to continue. Please resize the browser to a larger size to continue the tour or close the tour.'
                    });
                }
                else {
                    _this._onResizeMessage = false;
                    _this._guidedTourCurrentStepSubject.next(_this.getPreparedTourStep(_this._currentTourStepIndex));
                }
            }
        });
    }
    GuidedTourService.prototype.nextStep = function () {
        var _this = this;
        if (this._currentTour.steps[this._currentTourStepIndex].closeAction) {
            this._currentTour.steps[this._currentTourStepIndex].closeAction();
        }
        if (this._currentTour.steps[this._currentTourStepIndex + 1]) {
            this._currentTourStepIndex++;
            this._setFirstAndLast();
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
                // Usually an action is opening something so we need to give it time to render.
                setTimeout(function () {
                    if (_this._checkSelectorValidity()) {
                        _this._guidedTourCurrentStepSubject.next(_this.getPreparedTourStep(_this._currentTourStepIndex));
                    }
                    else {
                        _this.nextStep();
                    }
                });
            }
            else {
                if (this._checkSelectorValidity()) {
                    this._guidedTourCurrentStepSubject.next(this.getPreparedTourStep(this._currentTourStepIndex));
                }
                else {
                    this.nextStep();
                }
            }
        }
        else {
            if (this._currentTour.completeCallback) {
                this._currentTour.completeCallback();
            }
            this.resetTour();
        }
    };
    GuidedTourService.prototype.backStep = function () {
        var _this = this;
        if (this._currentTour.steps[this._currentTourStepIndex].closeAction) {
            this._currentTour.steps[this._currentTourStepIndex].closeAction();
        }
        if (this._currentTour.steps[this._currentTourStepIndex - 1]) {
            this._currentTourStepIndex--;
            this._setFirstAndLast();
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
                setTimeout(function () {
                    if (_this._checkSelectorValidity()) {
                        _this._guidedTourCurrentStepSubject.next(_this.getPreparedTourStep(_this._currentTourStepIndex));
                    }
                    else {
                        _this.backStep();
                    }
                });
            }
            else {
                if (this._checkSelectorValidity()) {
                    this._guidedTourCurrentStepSubject.next(this.getPreparedTourStep(this._currentTourStepIndex));
                }
                else {
                    this.backStep();
                }
            }
        }
        else {
            this.resetTour();
        }
    };
    GuidedTourService.prototype.skipTour = function () {
        if (this._currentTour.skipCallback) {
            this._currentTour.skipCallback(this._currentTourStepIndex);
        }
        this.resetTour();
    };
    GuidedTourService.prototype.resetTour = function () {
        document.body.classList.remove('tour-open');
        this._currentTour = null;
        this._currentTourStepIndex = 0;
        this._guidedTourCurrentStepSubject.next(null);
    };
    GuidedTourService.prototype.startTour = function (tour) {
        this._currentTour = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(tour);
        this._currentTour.steps = this._currentTour.steps.filter(function (step) { return !step.skipStep; });
        this._currentTourStepIndex = 0;
        this._setFirstAndLast();
        this._guidedTourOrbShowingSubject.next(this._currentTour.useOrb);
        if (this._currentTour.steps.length > 0
            && (!this._currentTour.minimumScreenSize
                || (window.innerWidth >= this._currentTour.minimumScreenSize))) {
            if (!this._currentTour.useOrb) {
                document.body.classList.add('tour-open');
            }
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
            }
            if (this._checkSelectorValidity()) {
                this._guidedTourCurrentStepSubject.next(this.getPreparedTourStep(this._currentTourStepIndex));
            }
            else {
                this.nextStep();
            }
        }
    };
    GuidedTourService.prototype.activateOrb = function () {
        this._guidedTourOrbShowingSubject.next(false);
        document.body.classList.add('tour-open');
    };
    GuidedTourService.prototype._setFirstAndLast = function () {
        this._onLastStep = (this._currentTour.steps.length - 1) === this._currentTourStepIndex;
        this._onFirstStep = this._currentTourStepIndex === 0;
    };
    GuidedTourService.prototype._checkSelectorValidity = function () {
        if (this._currentTour.steps[this._currentTourStepIndex].selector) {
            var selectedElement = document.querySelector(this._currentTour.steps[this._currentTourStepIndex].selector);
            if (!selectedElement) {
                this.errorHandler.handleError(
                // If error handler is configured this should not block the browser.
                new Error("Error finding selector " + this._currentTour.steps[this._currentTourStepIndex].selector + " on step " + (this._currentTourStepIndex + 1) + " during guided tour: " + this._currentTour.tourId));
                return false;
            }
        }
        return true;
    };
    Object.defineProperty(GuidedTourService.prototype, "onLastStep", {
        get: function () {
            return this._onLastStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "onFirstStep", {
        get: function () {
            return this._onFirstStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "onResizeMessage", {
        get: function () {
            return this._onResizeMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "currentTourStepDisplay", {
        get: function () {
            return this._currentTourStepIndex + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "currentTourStepCount", {
        get: function () {
            return this._currentTour && this._currentTour.steps ? this._currentTour.steps.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "preventBackdropFromAdvancing", {
        get: function () {
            return this._currentTour && this._currentTour.preventBackdropFromAdvancing;
        },
        enumerable: true,
        configurable: true
    });
    GuidedTourService.prototype.getPreparedTourStep = function (index) {
        return this.setTourOrientation(this._currentTour.steps[index]);
    };
    GuidedTourService.prototype.setTourOrientation = function (step) {
        var convertedStep = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(step);
        if (convertedStep.orientation
            && !(typeof convertedStep.orientation === 'string')
            && convertedStep.orientation.length) {
            convertedStep.orientation.sort(function (a, b) {
                if (!b.maximumSize) {
                    return 1;
                }
                if (!a.maximumSize) {
                    return -1;
                }
                return b.maximumSize - a.maximumSize;
            });
            var currentOrientation_1 = _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Top;
            convertedStep.orientation.forEach(function (orientationConfig) {
                if (!orientationConfig.maximumSize || window.innerWidth <= orientationConfig.maximumSize) {
                    currentOrientation_1 = orientationConfig.orientationDirection;
                }
            });
            convertedStep.orientation = currentOrientation_1;
        }
        return convertedStep;
    };
    GuidedTourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], GuidedTourService);
    return GuidedTourService;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron img {\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n\n.center-content {\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n.center-content img {\n  margin: 30px;\n  cursor: pointer;\n}\n\np {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24gaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci1jb250ZW50IGltZyB7XG4gIG1hcmdpbjogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"height: 120vh;\">\n  <div class=\"jumbotron text-center\">\n      <h1>\n          <span class=\"demo-title\">ngx-guided-tour Demo</span>\n      </h1>\n  </div>\n\n  <div height=\"400\" class=\"center-content\">\n      <div>\n          Guided tour is a great way to introduce your users to new features or remind them how to use exisiting features. Hover your mouse over the orb above to start the tour.\n          <br/>\n          <br/>\n          Orbs are optional, If not set or set to false the tour will just start.\n      </div>\n  </div>\n\n  <br/>\n  <br/>\n\n  <div class=\"center-content\">\n      <button (click)=\"restartTour()\">\n          Restart Tour\n      </button>\n  </div>\n\n  <br/>\n  <br/>\n\n  <div class=\"center-content\">\n      <span class=\"tour-middle-content\">\n          Click restart to start the tour again.\n          <br/>\n          <br/>\n          There are multiple features to correctly position and caclulate scrolling on your tours.\n      </span>\n  </div>\n\n  <br/><br/>\n  <div class=\"center-content\">\n\n  </div>\n\n  <br/><br/>\n</div>\n\n<div class=\"center-content\">\n  <span class=\"tour-scroll\">\n      This content is on the bottom of the page so that the tour is forced to scroll to it.\n  </span>\n</div>\n\n<ngx-guided-tour></ngx-guided-tour>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ngx-guided-tour/src/lib/guided-tour.constants */ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts");
/* harmony import */ var projects_ngx_guided_tour_src_lib_guided_tour_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-guided-tour/src/lib/guided-tour.service */ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(guidedTourService) {
        var _this = this;
        this.guidedTourService = guidedTourService;
        this.title = 'ngx-guided-tour-demo';
        this.dashboardTour = {
            tourId: 'purchases-tour',
            useOrb: true,
            steps: [
                {
                    title: 'Welcome to the Guided Tour Demo',
                    selector: '.demo-title',
                    content: 'Step 1',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Bottom
                },
                {
                    title: 'General page step',
                    content: 'We have the concept of general page steps so that a you can introuce a user to a page or non specific instructions',
                },
                {
                    title: 'Positioning',
                    selector: '.tour-middle-content',
                    content: 'Step position can be set so that steps are always in view. This step is on the left.',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Left
                },
                {
                    title: 'Positioning 2',
                    selector: '.tour-middle-content',
                    content: 'This step is on the right.',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Right
                },
                {
                    title: 'Scroll to content',
                    selector: '.tour-scroll',
                    content: 'Automatically scroll to elements so they are in view',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Top
                }
            ]
        };
        setTimeout(function () {
            _this.guidedTourService.startTour(_this.dashboardTour);
        }, 1000);
    }
    AppComponent.prototype.restartTour = function () {
        this.guidedTourService.startTour(this.dashboardTour);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_ngx_guided_tour_src_lib_guided_tour_service__WEBPACK_IMPORTED_MODULE_3__["GuidedTourService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_ngx_guided_tour_src_lib_guided_tour_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-guided-tour/src/lib/guided-tour.module */ "./projects/ngx-guided-tour/src/lib/guided-tour.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                projects_ngx_guided_tour_src_lib_guided_tour_module__WEBPACK_IMPORTED_MODULE_1__["GuidedTourModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jcolon/code/ngx-guided-tour/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map