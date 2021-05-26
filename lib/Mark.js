"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Mark = function (props) { return (react_1["default"].createElement("mark", { style: { backgroundColor: props.color || '#84d2ff', padding: '0 4px' }, "data-start": props.start, "data-end": props.end, onClick: function () { return props.onClick({ start: props.start, end: props.end }); } },
    props.content,
    props.tag && (react_1["default"].createElement("span", { style: __assign({ fontSize: '0.7em', fontWeight: 500, marginLeft: 6 }, (props.tagStyle || {})) },
        "[",
        props.tag,
        "]")))); };
exports["default"] = Mark;
//# sourceMappingURL=Mark.js.map