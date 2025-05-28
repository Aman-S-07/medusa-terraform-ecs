/**
 * @medusajs/icons v2.8.3 - MIT
 */

import * as React from 'react';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const VerifiedBadge = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#3B82F6",
          fillRule: "evenodd",
          d: "M4.887 1.192A3.45 3.45 0 0 1 7.5 0a3.45 3.45 0 0 1 2.613 1.192 3.45 3.45 0 0 1 2.69 1.005 3.46 3.46 0 0 1 1.006 2.69 3.455 3.455 0 0 1 .88 4.05c-.206.45-.506.851-.88 1.176a3.46 3.46 0 0 1-1.006 2.69 3.45 3.45 0 0 1-2.69 1.005 3.455 3.455 0 0 1-4.05.88 3.45 3.45 0 0 1-1.176-.88 3.45 3.45 0 0 1-2.69-1.004 3.45 3.45 0 0 1-1.006-2.69A3.45 3.45 0 0 1 0 7.5a3.45 3.45 0 0 1 1.192-2.613 3.45 3.45 0 0 1 1.005-2.69 3.45 3.45 0 0 1 2.69-1.005",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "url(#a)",
          fillOpacity: 0.2,
          fillRule: "evenodd",
          d: "M4.887 1.192A3.45 3.45 0 0 1 7.5 0a3.45 3.45 0 0 1 2.613 1.192 3.45 3.45 0 0 1 2.69 1.005 3.46 3.46 0 0 1 1.006 2.69 3.455 3.455 0 0 1 .88 4.05c-.206.45-.506.851-.88 1.176a3.46 3.46 0 0 1-1.006 2.69 3.45 3.45 0 0 1-2.69 1.005 3.455 3.455 0 0 1-4.05.88 3.45 3.45 0 0 1-1.176-.88 3.45 3.45 0 0 1-2.69-1.004 3.45 3.45 0 0 1-1.006-2.69A3.45 3.45 0 0 1 0 7.5a3.45 3.45 0 0 1 1.192-2.613 3.45 3.45 0 0 1 1.005-2.69 3.45 3.45 0 0 1 2.69-1.005",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          stroke: color,
          strokeOpacity: 0.24,
          strokeWidth: 0.6,
          d: "m4.866 1.49.15.011.098-.113A3.15 3.15 0 0 1 7.5.3a3.15 3.15 0 0 1 2.387 1.088l.098.113.15-.01a3.15 3.15 0 0 1 2.457.918 3.16 3.16 0 0 1 .918 2.457l-.01.15.113.098A3.16 3.16 0 0 1 14.7 7.5a3.15 3.15 0 0 1-1.088 2.386l-.113.099.01.15a3.16 3.16 0 0 1-.918 2.456 3.15 3.15 0 0 1-2.457.918l-.15-.01-.098.113A3.15 3.15 0 0 1 7.5 14.7a3.15 3.15 0 0 1-2.386-1.088l-.099-.114-.15.011a3.15 3.15 0 0 1-2.457-.917 3.15 3.15 0 0 1-.918-2.458l.01-.15-.113-.098A3.15 3.15 0 0 1 .3 7.5a3.15 3.15 0 0 1 1.088-2.387l.113-.098-.01-.15a3.15 3.15 0 0 1 .918-2.456 3.15 3.15 0 0 1 2.457-.918Z"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.584 7.792 2.333 2.333 3.5-5.25"
        }
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 0,
          y2: 15,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ))
    );
  }
);
VerifiedBadge.displayName = "VerifiedBadge";

export { VerifiedBadge as default };
//# sourceMappingURL=verified-badge.js.map
