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
var TextAnnotator_1 = __importDefault(require("../TextAnnotator"));
var react_2 = require("@testing-library/react");
test('renders without getSpan', function () {
    react_2.render(react_1["default"].createElement(TextAnnotator_1["default"], { content: "Foo bar baz", value: [{ start: 0, end: 5, tag: 'PERSON', text: 'foo', extra: 1 }], onChange: function () { } }));
});
test('renders when value and getSpan return match', function () {
    react_2.render(react_1["default"].createElement(TextAnnotator_1["default"], { content: "Foo bar baz", value: [{ start: 0, end: 5, tag: 'PERSON', text: 'foo', extra: 1 }], onChange: function () { }, getSpan: function (span) { return (__assign(__assign({}, span), { tag: 'FOO', text: 'foo', extra: 1 })); } }));
});
//# sourceMappingURL=TextAnnotator.test.js.map