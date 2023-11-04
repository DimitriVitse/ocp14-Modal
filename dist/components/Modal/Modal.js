"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Modal = _ref => {
  let {
    children,
    shown,
    close
  } = _ref;
  return shown ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop",
    onClick: () => {
      // close modal when outside of modal is clicked
      close();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: e => {
      // do not close modal if anything inside modal content is clicked
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: close
  }, "X"), children)) : null;
};
var _default = exports.default = Modal;