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
var lodash_sortby_1 = __importDefault(require("lodash.sortby"));
exports.splitWithOffsets = function (text, offsets) {
    var lastEnd = 0;
    var splits = [];
    for (var _i = 0, _a = lodash_sortby_1["default"](offsets, function (o) { return o.start; }); _i < _a.length; _i++) {
        var offset = _a[_i];
        var start = offset.start, end = offset.end;
        if (lastEnd < start) {
            splits.push({
                start: lastEnd,
                end: start,
                content: text.slice(lastEnd, start)
            });
        }
        splits.push(__assign(__assign({}, offset), { mark: true, content: text.slice(start, end) }));
        lastEnd = end;
    }
    if (lastEnd < text.length) {
        splits.push({
            start: lastEnd,
            end: text.length,
            content: text.slice(lastEnd, text.length)
        });
    }
    return splits;
};
exports.splitTokensWithOffsets = function (text, offsets) {
    var lastEnd = 0;
    var splits = [];
    for (var _i = 0, _a = lodash_sortby_1["default"](offsets, function (o) { return o.start; }); _i < _a.length; _i++) {
        var offset = _a[_i];
        var start = offset.start, end = offset.end;
        if (lastEnd < start) {
            for (var i = lastEnd; i < start; i++) {
                splits.push({
                    i: i,
                    content: text[i]
                });
            }
        }
        splits.push(__assign(__assign({}, offset), { mark: true, content: text.slice(start, end).join(' ') }));
        lastEnd = end;
    }
    for (var i = lastEnd; i < text.length; i++) {
        splits.push({
            i: i,
            content: text[i]
        });
    }
    return splits;
};
exports.selectionIsEmpty = function (selection) {
    var position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
    return position === 0 && selection.focusOffset === selection.anchorOffset;
};
exports.selectionIsBackwards = function (selection) {
    if (exports.selectionIsEmpty(selection))
        return false;
    var position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
    var backward = false;
    if ((!position && selection.anchorOffset > selection.focusOffset) ||
        position === Node.DOCUMENT_POSITION_PRECEDING)
        backward = true;
    return backward;
};
//# sourceMappingURL=utils.js.map