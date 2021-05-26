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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var Token = function (props) {
    return react_1["default"].createElement("span", { "data-i": props.i },
        props.content,
        " ");
};
var TokenAnnotator = function (props) {
    var renderMark = props.renderMark || (function (props) { return react_1["default"].createElement(Mark_1["default"], __assign({}, props)); });
    var getSpan = function (span) {
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
        if (!selection.anchorNode.parentElement.hasAttribute('data-i') ||
            !selection.focusNode.parentElement.hasAttribute('data-i')) {
            window.getSelection().empty();
            return false;
        }
        var start = parseInt(selection.anchorNode.parentElement.getAttribute('data-i'), 10);
        var end = parseInt(selection.focusNode.parentElement.getAttribute('data-i'), 10);
        if (utils_1.selectionIsBackwards(selection)) {
            ;
            _a = [end, start], start = _a[0], end = _a[1];
        }
        end += 1;
        props.onChange(__spreadArrays(props.value, [getSpan({ start: start, end: end, tokens: props.tokens.slice(start, end) })]));
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
    var tokens = props.tokens, value = props.value, onChange = props.onChange, _ = props.getSpan, divProps = __rest(props, ["tokens", "value", "onChange", "getSpan"]);
    var splits = utils_1.splitTokensWithOffsets(tokens, value);
    return (react_1["default"].createElement("div", __assign({}, divProps, { onMouseUp: handleMouseUp }), splits.map(function (split, i) {
        return split.mark ? (renderMark(__assign(__assign({ key: split.start + "-" + split.end }, split), { onClick: handleSplitClick }))) : (react_1["default"].createElement(Token, __assign({ key: split.i }, split)));
    })));
};
exports["default"] = TokenAnnotator;
//# sourceMappingURL=TokenAnnotator.js.map