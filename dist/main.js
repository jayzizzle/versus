/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var artists = __webpack_require__(/*! ../../../../src/scripts/data */ \"./src/scripts/data.js\");\n\nvar PlayerSelect = __webpack_require__(/*! ../../../../src/scripts/player_select */ \"./src/scripts/player_select.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log('DOM is now fully loaded.');\n  var ulPlayerSelect = document.getElementById(\"ul-player-select\");\n  var playerSelect = new PlayerSelect(ulPlayerSelect, artists);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLDJEQUFELENBQXZCOztBQUNBLElBQU1DLFlBQVksR0FBR0QsbUJBQU8sQ0FBQyw2RUFBRCxDQUE1Qjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQSxNQUFNQyxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixrQkFBeEIsQ0FBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsSUFBSVAsWUFBSixDQUFpQkssY0FBakIsRUFBaUNQLE9BQWpDLENBQXJCO0FBRUgsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlcnN1cy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFydGlzdHMgPSByZXF1aXJlKCcvc3JjL3NjcmlwdHMvZGF0YScpO1xuY29uc3QgUGxheWVyU2VsZWN0ID0gcmVxdWlyZSgnL3NyYy9zY3JpcHRzL3BsYXllcl9zZWxlY3QnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdET00gaXMgbm93IGZ1bGx5IGxvYWRlZC4nKTtcbiAgICBjb25zdCB1bFBsYXllclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWwtcGxheWVyLXNlbGVjdFwiKTtcbiAgICBjb25zdCBwbGF5ZXJTZWxlY3QgPSBuZXcgUGxheWVyU2VsZWN0KHVsUGxheWVyU2VsZWN0LCBhcnRpc3RzKVxuXG59KTsiXSwibmFtZXMiOlsiYXJ0aXN0cyIsInJlcXVpcmUiLCJQbGF5ZXJTZWxlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwidWxQbGF5ZXJTZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllclNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(module) {

eval("var artists = [{\n  id: 0,\n  alias: '2Pac',\n  fullName: 'Tupac Shakur'\n}, {\n  id: 1,\n  alias: 'BIG',\n  fullName: 'Christopher Wallace'\n}, {\n  id: 2,\n  alias: 'Drake',\n  fullName: 'Aubrey Graham'\n}, {\n  id: 3,\n  alias: 'Eminem',\n  fullName: 'Marshall Mathers'\n}, {\n  id: 4,\n  alias: 'Jay-Z',\n  fullName: 'Shawn Carter'\n}, {\n  id: 5,\n  alias: 'Kanye',\n  fullName: 'Kanye West'\n}, {\n  id: 6,\n  alias: 'Lil Wayne',\n  fullName: 'Dwayne Carter'\n}, {\n  id: 7,\n  alias: 'Nas',\n  fullName: 'Nasir Jones'\n}];\nmodule.exports = artists;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXJzdXMvLi9zcmMvc2NyaXB0cy9kYXRhLmpzP2ZiZDEiXSwibmFtZXMiOlsiYXJ0aXN0cyIsImlkIiwiYWxpYXMiLCJmdWxsTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLEVBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxNQUZYO0FBR0lDLEVBQUFBLFFBQVEsRUFBRTtBQUhkLENBRFksRUFNWjtBQUNJRixFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsS0FGWDtBQUdJQyxFQUFBQSxRQUFRLEVBQUU7QUFIZCxDQU5ZLEVBV1o7QUFDSUYsRUFBQUEsRUFBRSxFQUFFLENBRFI7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLE9BRlg7QUFHSUMsRUFBQUEsUUFBUSxFQUFFO0FBSGQsQ0FYWSxFQWdCWjtBQUNJRixFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsUUFGWDtBQUdJQyxFQUFBQSxRQUFRLEVBQUU7QUFIZCxDQWhCWSxFQXFCWjtBQUNJRixFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsT0FGWDtBQUdJQyxFQUFBQSxRQUFRLEVBQUU7QUFIZCxDQXJCWSxFQTBCWjtBQUNJRixFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsT0FGWDtBQUdJQyxFQUFBQSxRQUFRLEVBQUU7QUFIZCxDQTFCWSxFQStCWjtBQUNJRixFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsV0FGWDtBQUdJQyxFQUFBQSxRQUFRLEVBQUU7QUFIZCxDQS9CWSxFQW9DWjtBQUNJRixFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxLQUFLLEVBQUUsS0FGWDtBQUdJQyxFQUFBQSxRQUFRLEVBQUU7QUFIZCxDQXBDWSxDQUFoQjtBQTJDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxPQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFydGlzdHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgYWxpYXM6ICcyUGFjJyxcbiAgICAgICAgZnVsbE5hbWU6ICdUdXBhYyBTaGFrdXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBhbGlhczogJ0JJRycsXG4gICAgICAgIGZ1bGxOYW1lOiAnQ2hyaXN0b3BoZXIgV2FsbGFjZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGFsaWFzOiAnRHJha2UnLFxuICAgICAgICBmdWxsTmFtZTogJ0F1YnJleSBHcmFoYW0nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBhbGlhczogJ0VtaW5lbScsXG4gICAgICAgIGZ1bGxOYW1lOiAnTWFyc2hhbGwgTWF0aGVycydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGFsaWFzOiAnSmF5LVonLFxuICAgICAgICBmdWxsTmFtZTogJ1NoYXduIENhcnRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGFsaWFzOiAnS2FueWUnLFxuICAgICAgICBmdWxsTmFtZTogJ0thbnllIFdlc3QnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBhbGlhczogJ0xpbCBXYXluZScsXG4gICAgICAgIGZ1bGxOYW1lOiAnRHdheW5lIENhcnRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGFsaWFzOiAnTmFzJyxcbiAgICAgICAgZnVsbE5hbWU6ICdOYXNpciBKb25lcydcbiAgICB9XG5dXG5cbm1vZHVsZS5leHBvcnRzID0gYXJ0aXN0czsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvZGF0YS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

/***/ }),

/***/ "./src/scripts/player_select.js":
/*!**************************************!*\
  !*** ./src/scripts/player_select.js ***!
  \**************************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PlayerSelect = /*#__PURE__*/function () {\n  function PlayerSelect(ul, artists) {\n    _classCallCheck(this, PlayerSelect);\n\n    this.ele = ul;\n    this.artists = artists;\n    this.leftSelection = artists[0];\n    this.rightSelection = artists[1];\n\n    for (var i = 0; i < artists.length; i++) {\n      var box = document.createElement('li');\n      box.setAttribute('class', 'li-player-select');\n      box.setAttribute('data-id', i);\n      ul.append(box);\n    }\n\n    ul.addEventListener('mouseover', this.handleHover.bind(this));\n  }\n\n  _createClass(PlayerSelect, [{\n    key: \"defaultLoad\",\n    value: function defaultLoad() {}\n  }, {\n    key: \"handleHover\",\n    value: function handleHover(e) {\n      var ele = e.target;\n      e.stopPropagation();\n      this.hoverChain(ele);\n    }\n  }, {\n    key: \"hoverChain\",\n    value: function hoverChain(ele) {\n      var artist = this.artists[ele.dataset.id];\n      var displayName = document.getElementById('left-player-name');\n      if (artist) displayName.innerHTML = artist.alias;\n    }\n  }]);\n\n  return PlayerSelect;\n}();\n\nmodule.exports = PlayerSelect;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXJzdXMvLi9zcmMvc2NyaXB0cy9wbGF5ZXJfc2VsZWN0LmpzPzJiNTAiXSwibmFtZXMiOlsiUGxheWVyU2VsZWN0IiwidWwiLCJhcnRpc3RzIiwiZWxlIiwibGVmdFNlbGVjdGlvbiIsInJpZ2h0U2VsZWN0aW9uIiwiaSIsImxlbmd0aCIsImJveCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVIb3ZlciIsImJpbmQiLCJlIiwidGFyZ2V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaG92ZXJDaGFpbiIsImFydGlzdCIsImRhdGFzZXQiLCJpZCIsImRpc3BsYXlOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJhbGlhcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxZO0FBQ0Ysd0JBQWFDLEVBQWIsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQUE7O0FBQ3RCLFNBQUtDLEdBQUwsR0FBV0YsRUFBWDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLGFBQUwsR0FBcUJGLE9BQU8sQ0FBQyxDQUFELENBQTVCO0FBQ0EsU0FBS0csY0FBTCxHQUFzQkgsT0FBTyxDQUFDLENBQUQsQ0FBN0I7O0FBRUEsU0FBSSxJQUFJSSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdKLE9BQU8sQ0FBQ0ssTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsVUFBSUUsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBRixNQUFBQSxHQUFHLENBQUNHLFlBQUosQ0FBaUIsT0FBakIsRUFBeUIsa0JBQXpCO0FBQ0FILE1BQUFBLEdBQUcsQ0FBQ0csWUFBSixDQUFpQixTQUFqQixFQUE0QkwsQ0FBNUI7QUFDQUwsTUFBQUEsRUFBRSxDQUFDVyxNQUFILENBQVVKLEdBQVY7QUFDSDs7QUFDRFAsSUFBQUEsRUFBRSxDQUFDWSxnQkFBSCxDQUFvQixXQUFwQixFQUFpQyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFqQztBQUNIOzs7O1dBQ0QsdUJBQWMsQ0FFYjs7O1dBRUQscUJBQVlDLENBQVosRUFBZTtBQUNYLFVBQUliLEdBQUcsR0FBR2EsQ0FBQyxDQUFDQyxNQUFaO0FBQ0FELE1BQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0JoQixHQUFoQjtBQUNIOzs7V0FFRCxvQkFBV0EsR0FBWCxFQUFnQjtBQUNaLFVBQU1pQixNQUFNLEdBQUcsS0FBS2xCLE9BQUwsQ0FBYUMsR0FBRyxDQUFDa0IsT0FBSixDQUFZQyxFQUF6QixDQUFmO0FBQ0EsVUFBTUMsV0FBVyxHQUFHZCxRQUFRLENBQUNlLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXBCO0FBQ0EsVUFBSUosTUFBSixFQUFZRyxXQUFXLENBQUNFLFNBQVosR0FBd0JMLE1BQU0sQ0FBQ00sS0FBL0I7QUFDZjs7Ozs7O0FBR0xDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAodWwsIGFydGlzdHMpIHtcbiAgICAgICAgdGhpcy5lbGUgPSB1bDtcbiAgICAgICAgdGhpcy5hcnRpc3RzID0gYXJ0aXN0cztcbiAgICAgICAgdGhpcy5sZWZ0U2VsZWN0aW9uID0gYXJ0aXN0c1swXTtcbiAgICAgICAgdGhpcy5yaWdodFNlbGVjdGlvbiA9IGFydGlzdHNbMV07XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFydGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaS1wbGF5ZXItc2VsZWN0JylcbiAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZChib3gpO1xuICAgICAgICB9XG4gICAgICAgIHVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuaGFuZGxlSG92ZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRlZmF1bHRMb2FkKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVIb3ZlcihlKSB7XG4gICAgICAgIGxldCBlbGUgPSBlLnRhcmdldDtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5ob3ZlckNoYWluKGVsZSk7XG4gICAgfVxuXG4gICAgaG92ZXJDaGFpbihlbGUpIHtcbiAgICAgICAgY29uc3QgYXJ0aXN0ID0gdGhpcy5hcnRpc3RzW2VsZS5kYXRhc2V0LmlkXTtcbiAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1wbGF5ZXItbmFtZScpO1xuICAgICAgICBpZiAoYXJ0aXN0KSBkaXNwbGF5TmFtZS5pbm5lckhUTUwgPSBhcnRpc3QuYWxpYXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclNlbGVjdDsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcGxheWVyX3NlbGVjdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player_select.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXJzdXMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;