(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Barlow:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Bellefair&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n:root {\n  --main-font-color: #FFFFFF;\n  --black-color: #0B0D17;\n  --secondary-color: #D0D6F9;\n  --barlow-font: \"Barlow\", \"sans-serif\";\n  --barlow-condensed-font: \"Barlow Condensed\", \"sans-serif\";\n  --bellefair-font: \"Bellefair\", \"sans-serif\";\n  --tablet-breakpoint: 676px;\n  --desktop-breakpoint: 992px;\n  font-size: 15px;\n}\n@media only screen and (min-width: 992px) {\n  :root {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 767px) {\n  :root {\n    font-size: 16px;\n  }\n}\nh1, h6, h5, h4, h3, h2 {\n  color: var(--main-font-color);\n  font-family: var(--bellefair-font);\n  font-weight: lighter;\n  text-transform: uppercase;\n  font-size: 80px;\n}\nh1, h6, h5, h4, h3, h2,\np {\n  margin: 0;\n}\nh2 {\n  font-size: 56px;\n}\nh3 {\n  font-size: 3.5rem;\n}\nh4 {\n  font-size: 16px;\n}\nh5 {\n  font-size: 16px;\n  letter-spacing: 4.75px;\n}\nh6 {\n  font-size: 28px;\n}\n.subheading-2 {\n  font-family: var(--barlow-condensed-font);\n  color: var(--main-font-color);\n  font-size: 14px;\n  letter-spacing: 2.35px;\n}\n.nav-text {\n  font-family: var(--barlow-condensed-font);\n  color: var(--main-font-color);\n  font-size: 0.875rem;\n  letter-spacing: 2.35px;\n}\n.secondary-color-text {\n  color: var(--secondary-color) !important;\n}\np {\n  font-family: var(--barlow-font);\n  color: var(--main-font-color);\n  letter-spacing: 0;\n  line-height: 1.5;\n}\n@media only screen and (min-width: 767px) {\n  body {\n    background: url('background-home-tablet.jpg') no-repeat !important;\n  }\n  body.destination {\n    background: url('background-destination-tablet.jpg') no-repeat !important;\n    background-size: cover !important;\n    background-position: center;\n  }\n  body.crew {\n    background: url('background-crew-tablet.jpg') no-repeat !important;\n    background-size: cover !important;\n    background-position: center;\n  }\n  body.technology {\n    background: url('background-technology-tablet.jpg') no-repeat !important;\n    background-size: cover !important;\n    background-position: center;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: 9.375rem;\n  }\n\n  h2 {\n    font-size: 4.75rem;\n  }\n\n  h3 {\n    font-size: 3.5rem;\n  }\n\n  h4 {\n    font-size: 2rem;\n  }\n\n  h5 {\n    font-size: 1.75rem;\n  }\n\n  h6 {\n    font-size: 1.75rem;\n  }\n\n  .subheading-2 {\n    font-size: 0.875rem;\n  }\n}\n@media only screen and (min-width: 992px) {\n  body {\n    background: url('background-home-desktop.jpg') no-repeat !important;\n  }\n  body.destination {\n    background: url('background-destination-desktop.jpg') no-repeat !important;\n  }\n  body.crew {\n    background: url('background-crew-desktop.jpg') no-repeat !important;\n  }\n  body.technology {\n    background: url('background-technology-desktop.jpg') no-repeat !important;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: 9.375rem;\n  }\n\n  h2 {\n    font-size: 6.25rem;\n  }\n\n  h3 {\n    font-size: 3.5rem;\n  }\n\n  h4 {\n    font-size: 2rem;\n  }\n\n  h5 {\n    font-size: 1.75rem;\n  }\n\n  h6 {\n    font-size: 1.75rem;\n  }\n\n  .subheading-2 {\n    font-size: 0.875rem;\n  }\n}\nbody {\n  background: url('background-home-mobile.jpg') no-repeat;\n  margin: 0;\n  background-size: cover !important;\n}\nbody.destination {\n  background: url('background-destination-mobile.jpg') no-repeat;\n}\nbody.crew {\n  background: url('background-crew-mobile.jpg') no-repeat;\n}\nbody.technology {\n  background: url('background-technology-mobile.jpg') no-repeat;\n}\n.description {\n  color: var(--secondary-color) !important;\n  text-align: center;\n}\n.text-center {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":";AAAA,8EAAA;AAIA;EACE,0BAAA;EACA,sBAAA;EACA,0BAAA;EACA,qCAAA;EACA,yDAAA;EACA,2CAAA;EACA,0BAAA;EACA,2BAAA;EACA,eAAA;AAAF;AACE;EAVF;IAYI,eAAA;EACF;AACF;AAAE;EAdF;IAeI,eAAA;EAGF;AACF;AAAA;EACE,6BAAA;EACA,kCAAA;EACA,oBAAA;EACA,yBAAA;EACA,eAAA;AAGF;AAAA;;EAEE,SAAA;AAGF;AAAA;EAEE,eAAA;AAEF;AACA;EAEE,iBAAA;AACF;AAEA;EAEE,eAAA;AAAF;AAGA;EAEE,eAAA;EACA,sBAAA;AADF;AAIA;EAEE,eAAA;AAFF;AAKA;EACE,yCAAA;EACA,6BAAA;EACA,eAAA;EACA,sBAAA;AAFF;AAKA;EACE,yCAAA;EACA,6BAAA;EACA,mBAAA;EACA,sBAAA;AAFF;AAKA;EACE,wCAAA;AAFF;AAKA;EACE,+BAAA;EACA,6BAAA;EACA,iBAAA;EACA,gBAAA;AAFF;AAKA;EACE;IACE,kEAAA;EAFF;EAGE;IACE,yEAAA;IACA,iCAAA;IACA,2BAAA;EADJ;EAGE;IACE,kEAAA;IACA,iCAAA;IACA,2BAAA;EADJ;EAGE;IACE,wEAAA;IACA,iCAAA;IACA,2BAAA;EADJ;;EAKA;IACE,mBAAA;EAFF;;EAKA;IACE,kBAAA;EAFF;;EAKA;IACE,iBAAA;EAFF;;EAKA;IACE,eAAA;EAFF;;EAKA;IACE,kBAAA;EAFF;;EAKA;IACE,kBAAA;EAFF;;EAKA;IACE,mBAAA;EAFF;AACF;AAKA;EACE;IACE,mEAAA;EAHF;EAIE;IACE,0EAAA;EAFJ;EAIE;IACE,mEAAA;EAFJ;EAIE;IACE,yEAAA;EAFJ;;EAMA;IACE,mBAAA;EAHF;;EAMA;IACE,kBAAA;EAHF;;EAMA;IACE,iBAAA;EAHF;;EAMA;IACE,eAAA;EAHF;;EAMA;IACE,kBAAA;EAHF;;EAMA;IACE,kBAAA;EAHF;;EAMA;IACE,mBAAA;EAHF;AACF;AAMA;EACE,uDAAA;EAUA,SAAA;EACA,iCAAA;AAbF;AAGE;EACE,8DAAA;AADJ;AAGE;EACE,uDAAA;AADJ;AAGE;EACE,6DAAA;AADJ;AAOA;EACE,wCAAA;EACA,kBAAA;AAJF;AAOA;EACE,kBAAA;AAJF","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Barlow:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');\n\n:root {\n  --main-font-color: #FFFFFF;\n  --black-color: #0B0D17;\n  --secondary-color: #D0D6F9;\n  --barlow-font: 'Barlow', 'sans-serif';\n  --barlow-condensed-font: 'Barlow Condensed', 'sans-serif';\n  --bellefair-font: 'Bellefair', 'sans-serif';\n  --tablet-breakpoint: 676px;\n  --desktop-breakpoint: 992px;\n  font-size: 15px;\n  @media only screen and (min-width: 992px) {\n\n    font-size: 18px;\n  }\n  @media only screen and (min-width: 767px) {\n    font-size: 16px;\n  }\n}\n\nh1 {\n  color: var(--main-font-color);\n  font-family: var(--bellefair-font);\n  font-weight: lighter;\n  text-transform: uppercase;\n  font-size: 80px;\n}\n\nh1,\np {\n  margin: 0;\n}\n\nh2 {\n  @extend h1;\n  font-size: 56px;\n}\n\nh3 {\n  @extend h1;\n  font-size: 3.5rem;\n}\n\nh4 {\n  @extend h1;\n  font-size: 16px;\n}\n\nh5 {\n  @extend h1;\n  font-size: 16px;\n  letter-spacing: 4.75px;\n}\n\nh6 {\n  @extend h1;\n  font-size: 28px;\n}\n\n.subheading-2 {\n  font-family: var(--barlow-condensed-font);\n  color: var(--main-font-color);\n  font-size: 14px;\n  letter-spacing: 2.35px;\n}\n\n.nav-text {\n  font-family: var(--barlow-condensed-font);\n  color: var(--main-font-color);\n  font-size: 0.875rem;\n  letter-spacing: 2.35px;\n}\n\n.secondary-color-text {\n  color: var(--secondary-color) !important;\n}\n\np {\n  font-family: var(--barlow-font);\n  color: var(--main-font-color);\n  letter-spacing: 0;\n  line-height: 1.5;\n}\n\n@media only screen and (min-width: 767px) {\n  body {\n    background: url(\"assets/img/home/background-home-tablet.jpg\") no-repeat !important;\n    &.destination {\n      background: url(\"assets/img/destination/background-destination-tablet.jpg\") no-repeat !important;\n      background-size: cover !important;\n      background-position: center;\n    }\n    &.crew {\n      background: url(\"assets/img/crew/background-crew-tablet.jpg\") no-repeat !important;\n      background-size: cover !important;\n      background-position: center;\n    }\n    &.technology {\n      background: url(\"assets/img/technology/background-technology-tablet.jpg\") no-repeat !important;\n      background-size: cover !important;\n      background-position: center;\n    }\n  }\n\n  h1 {\n    font-size: 9.375rem;\n  }\n\n  h2 {\n    font-size: 4.75rem;\n  }\n\n  h3 {\n    font-size: 3.5rem;\n  }\n\n  h4 {\n    font-size: 2rem;\n  }\n\n  h5 {\n    font-size: 1.75rem;\n  }\n\n  h6 {\n    font-size: 1.75rem;\n  }\n\n  .subheading-2 {\n    font-size: 0.875rem;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  body {\n    background: url(\"assets/img/home/background-home-desktop.jpg\") no-repeat !important;\n    &.destination {\n      background: url(\"assets/img/destination/background-destination-desktop.jpg\") no-repeat !important;\n    }\n    &.crew {\n      background: url(\"assets/img/crew/background-crew-desktop.jpg\") no-repeat !important;\n    }\n    &.technology {\n      background: url(\"assets/img/technology/background-technology-desktop.jpg\") no-repeat !important;\n    }\n  }\n\n  h1 {\n    font-size: 9.375rem;\n  }\n\n  h2 {\n    font-size: 6.25rem;\n  }\n\n  h3 {\n    font-size: 3.5rem;\n  }\n\n  h4 {\n    font-size: 2rem;\n  }\n\n  h5 {\n    font-size: 1.75rem;\n  }\n\n  h6 {\n    font-size: 1.75rem;\n  }\n\n  .subheading-2 {\n    font-size: 0.875rem;\n  }\n}\n\nbody {\n  background: url(\"assets/img/home/background-home-mobile.jpg\") no-repeat;\n  &.destination {\n    background: url(\"assets/img/destination/background-destination-mobile.jpg\") no-repeat;\n  }\n  &.crew {\n    background: url(\"assets/img/crew/background-crew-mobile.jpg\") no-repeat;\n  }\n  &.technology {\n    background: url(\"assets/img/technology/background-technology-mobile.jpg\") no-repeat;\n  }\n  margin: 0;\n  background-size: cover !important;\n}\n\n.description {\n  color: var(--secondary-color) !important;\n  text-align: center;\n}\n\n.text-center {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Workspace\FrontEndMentor\SpaceTourism\space-tourism-website\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map