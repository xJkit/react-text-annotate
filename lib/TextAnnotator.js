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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Mark_1 = __importDefault(require("./Mark"));
var utils_1 = require("./utils");
var Split = function (props) {
    if (props.mark)
        return react_1["default"].createElement(Mark_1["default"], __assign({}, props));
    return (react_1["default"].createElement("span", { "data-start": props.start, "data-end": props.end, onClick: function () { return props.onClick({ start: props.start, end: props.end }); } }, props.content));
};
var TextAnnotator = function (props) {
    var getSpan = function (span) {
        // TODO: Better typings here.
        if (props.getSpan)
            return props.getSpan(span);
        return { start: span.start, end: span.end };
    };
    var handleMouseUp = function () {
        var _a;
        if (!props.onChange)
            return;
        var selection = window.getSelection();
        if (utils_1.selectionIsEmpty(selection))
            return;
        var start = parseInt(selection.anchorNode.parentElement.getAttribute('data-start'), 10) +
            selection.anchorOffset;
        var end = parseInt(selection.focusNode.parentElement.getAttribute('data-start'), 10) +
            selection.focusOffset;
        if (utils_1.selectionIsBackwards(selection)) {
            ;
            _a = [end, start], start = _a[0], end = _a[1];
        }
        props.onChange(__spreadArrays(props.value, [getSpan({ start: start, end: end, text: content.slice(start, end) })]));
        window.getSelection().empty();
    };
    var handleSplitClick = function (_a) {
        var start = _a.start, end = _a.end;
        // Find and remove the matching split.
        var splitIndex = props.value.findIndex(function (s) { return s.start === start && s.end === end; });
        if (splitIndex >= 0) {
            props.onChange(__spreadArrays(props.value.slice(0, splitIndex), props.value.slice(splitIndex + 1)));
        }
    };
    var content = props.content, value = props.value, style = props.style, tagStyle = props.tagStyle;
    var splits = utils_1.splitWithOffsets(content, value);
    return (react_1["default"].createElement("div", { style: style, onMouseUp: handleMouseUp }, splits.map(function (split) { return (react_1["default"].createElement(Split, __assign({ key: split.start + "-" + split.end }, split, { tagStyle: tagStyle, onClick: handleSplitClick }))); })));
};
exports["default"] = TextAnnotator;
//# sourceMappingURL=TextAnnotator.js.map