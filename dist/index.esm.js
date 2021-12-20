import * as React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function Add(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm5-10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" })));
}

function AddressBook(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 0H8a5 5 0 0 0-4.576 3H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1.424A5 5 0 0 0 8 24h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Zm-8-7a3 3 0 0 0 0-6 3 3 0 0 0 0 6Zm5 6a1 1 0 0 1-2 0 3 3 0 0 0-6 0 1 1 0 0 1-2 0c.211-6.608 9.791-6.606 10 0Z" })));
}

function AlarmClock(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 2.051V1a1 1 0 0 0-2 0v1.051a10.98 10.98 0 0 0-7.319 18.125A3.024 3.024 0 0 0 2 23a1 1 0 0 0 2 0 1.2 1.2 0 0 1 1.11-1.229.932.932 0 0 0 .2-.062 10.924 10.924 0 0 0 13.39 0 1.033 1.033 0 0 0 .182.064A1.2 1.2 0 0 1 20 23a1 1 0 0 0 2 0 3.024 3.024 0 0 0-1.681-2.824A10.98 10.98 0 0 0 13 2.051ZM3 13a9 9 0 1 1 9 9 9.011 9.011 0 0 1-9-9ZM19.215 0a1 1 0 0 0 0 2A2.59 2.59 0 0 1 22 4.5a1 1 0 0 0 2 0A4.6 4.6 0 0 0 19.215 0ZM2 4.5A2.59 2.59 0 0 1 4.785 2a1 1 0 0 0 0-2A4.6 4.6 0 0 0 0 4.5a1 1 0 0 0 2 0Z" }),
        React.createElement("path", { d: "M13 11.586V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414Z" })));
}

function AlignCenter(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM5 9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM19 19H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AlignJustify(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AlignLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM1 11h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM15 19H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AlignRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 19H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function Ambulance(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.052 11.654-1.819-4.091A6 6 0 0 0 15.75 4H14.4l-.66-2.642a1.794 1.794 0 0 0-3.48 0L9.6 4H5a5.006 5.006 0 0 0-5 5v8a2.994 2.994 0 0 0 2.071 2.838A3.4 3.4 0 0 0 2 20.5a3.5 3.5 0 0 0 7 0 3.465 3.465 0 0 0-.041-.5h6.082a3.465 3.465 0 0 0-.041.5 3.5 3.5 0 0 0 7 0 3.4 3.4 0 0 0-.071-.662A2.994 2.994 0 0 0 24 17v-.878a10.93 10.93 0 0 0-.948-4.468Zm-3.646-3.278L20.573 11H17a1 1 0 0 1-1-1V6.018a4 4 0 0 1 3.406 2.358ZM7 20.5a1.5 1.5 0 0 1-3 0 1.418 1.418 0 0 1 .093-.5h2.814a1.418 1.418 0 0 1 .093.5ZM18.5 22a1.5 1.5 0 0 1-1.5-1.5 1.418 1.418 0 0 1 .093-.5h2.814a1.418 1.418 0 0 1 .093.5 1.5 1.5 0 0 1-1.5 1.5Zm3.5-5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a3 3 0 0 1 3-3h9v4a3 3 0 0 0 3 3h4.429A8.916 8.916 0 0 1 22 16.122Zm-11-5a1 1 0 0 1-1 1H9v1a1 1 0 0 1-2 0v-1H6a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Z" })));
}

function AngleDoubleLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a1 1 0 0 1-.71-.29l-8.17-8.17a5 5 0 0 1 0-7.08L11.29.29a1 1 0 1 1 1.42 1.42L4.54 9.88a3 3 0 0 0 0 4.24l8.17 8.17a1 1 0 0 1 0 1.42A1 1 0 0 1 12 24Z" }),
        React.createElement("path", { d: "M22 24a1 1 0 0 1-.71-.29l-9.58-9.59a3 3 0 0 1 0-4.24L21.29.29a1 1 0 1 1 1.42 1.42l-9.59 9.58a1 1 0 0 0 0 1.42l9.59 9.58a1 1 0 0 1 0 1.42A1 1 0 0 1 22 24Z" })));
}

function AngleDoubleRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.83 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.17-8.17a3 3 0 0 0 0-4.24l-8.17-8.17A1 1 0 1 1 12.54.29l8.17 8.17a5 5 0 0 1 0 7.08l-8.17 8.17a1 1 0 0 1-.71.29Z" }),
        React.createElement("path", { d: "M1.83 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l9.59-9.58a1 1 0 0 0 0-1.42L1.12 1.71A1 1 0 0 1 2.54.29l9.58 9.59a3 3 0 0 1 0 4.24l-9.58 9.59a1 1 0 0 1-.71.29Z" })));
}

function AngleDoubleSmallLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.48 19a1 1 0 0 1-.7-.29l-4.59-4.59a3 3 0 0 1 0-4.24l4.59-4.59a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L6.6 11.29a1 1 0 0 0 0 1.42l4.59 4.58a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" }),
        React.createElement("path", { d: "M17.48 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L12.9 12l5.29 5.29a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" })));
}

function AngleDoubleSmallRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.1 19a1 1 0 0 1-.7-1.71l4.6-4.58a1 1 0 0 0 0-1.42l-4.6-4.58a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4.59 4.59a3 3 0 0 1 0 4.24l-4.59 4.59a1 1 0 0 1-.71.29Z" }),
        React.createElement("path", { d: "M6.1 19a1 1 0 0 1-.7-1.71L10.69 12 5.4 6.71a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l6 6a1 1 0 0 1 0 1.42l-6 6a1 1 0 0 1-.71.29Z" })));
}

function AngleDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 17.17a5 5 0 0 1-3.54-1.46L.29 7.54a1 1 0 0 1 1.42-1.42l8.17 8.17a3 3 0 0 0 4.24 0l8.17-8.17a1 1 0 1 1 1.42 1.42l-8.17 8.17A5 5 0 0 1 12 17.17Z" })));
}

function AngleLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.17 24a1 1 0 0 1-.71-.29l-8.17-8.17a5 5 0 0 1 0-7.08L16.46.29a1 1 0 1 1 1.42 1.42L9.71 9.88a3 3 0 0 0 0 4.24l8.17 8.17a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" })));
}

function AngleRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 24a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.17-8.17a3 3 0 0 0 0-4.24L6.29 1.71A1 1 0 0 1 7.71.29l8.17 8.17a5 5 0 0 1 0 7.08l-8.17 8.17A1 1 0 0 1 7 24Z" })));
}

function AngleSmallDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.71 8.21a1 1 0 0 0-1.42 0l-4.58 4.58a1 1 0 0 1-1.42 0L6.71 8.21a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.59 4.59a3 3 0 0 0 4.24 0l4.59-4.59a1 1 0 0 0 0-1.41Z" })));
}

function AngleSmallLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.6 12.71a1 1 0 0 1 0-1.42l4.59-4.58a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0L9.19 9.88a3 3 0 0 0 0 4.24l4.59 4.59a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42Z" })));
}

function AngleSmallRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m15.4 9.88-4.59-4.59a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.6 4.58a1 1 0 0 1 0 1.42l-4.6 4.58a1 1 0 0 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z" })));
}

function AngleSmallUp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 15.5a1 1 0 0 1-.71-.29l-4.58-4.59a1 1 0 0 0-1.42 0l-4.58 4.59a1 1 0 0 1-1.42-1.42l4.59-4.58a3.06 3.06 0 0 1 4.24 0l4.59 4.58a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z" })));
}

function AngleUp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.71 16.29-8.17-8.17a5 5 0 0 0-7.08 0L.29 16.29a1 1 0 0 0 1.42 1.42l8.17-8.17a3 3 0 0 1 4.24 0l8.17 8.17a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" })));
}

function Apple(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.246 6.193a6.744 6.744 0 0 0 1.737-3.94A2 2 0 0 0 16.749.016 6.318 6.318 0 0 0 12.133 2.6 8.162 8.162 0 0 0 10.711.271a1 1 0 0 0-1.428 1.4A7.583 7.583 0 0 1 10.942 6H8.5A8.771 8.771 0 0 0 0 15c-.161 5.6 5.644 10.773 10.75 8.385a2.4 2.4 0 0 1 2.605.019A4.444 4.444 0 0 0 15.5 24c10.264-.284 11.566-15.418 1.746-17.807Zm-3.023-3.025A4.783 4.783 0 0 1 17 2a4.8 4.8 0 0 1-1.167 2.772 4.793 4.793 0 0 1-2.778 1.168 4.785 4.785 0 0 1 1.168-2.772ZM15.5 22a2.542 2.542 0 0 1-1.244-.381A4.62 4.62 0 0 0 12 21a4.527 4.527 0 0 0-2.137.593C6.005 23.261 1.9 19.141 2 15a6.772 6.772 0 0 1 6.5-7h7c8.6.321 8.6 13.682 0 14Z" })));
}

function AppsAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM20 13h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM14 7h3v3a1 1 0 0 0 2 0V7h3a1 1 0 0 0 0-2h-3V2a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2Z" })));
}

function AppsDelete(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM20 13h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM14 7h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2Z" })));
}

function AppsSort(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM22.293 19.049 20 21.339V2.633l2.293 2.29a1 1 0 1 0 1.414-1.415L21.12.925a3 3 0 0 0-4.24 0l-2.587 2.583a1 1 0 1 0 1.414 1.415L18 2.633v18.706l-2.293-2.29a1 1 0 1 0-1.414 1.415l2.587 2.583a3 3 0 0 0 4.24 0l2.587-2.583a1 1 0 1 0-1.414-1.415Z" })));
}

function Apps(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 0H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM20 0h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM7 13H4a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2ZM20 13h-3a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm2 7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Z" })));
}

function Archive(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 2h10a3 3 0 0 1 3 3v6H4V5a3 3 0 0 1 3-3Zm10 20H7a3 3 0 0 1-3-3v-6h16v6a3 3 0 0 1-3 3Z" }),
        React.createElement("path", { d: "M11 7h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2ZM13 17h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" })));
}

function ArrowDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.05 17.79a1 1 0 0 0-1.42 0L13 21.42V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v20.41l-3.62-3.62A1 1 0 1 0 6 19.2l3.92 3.92a3 3 0 0 0 4.24 0l3.92-3.92a1 1 0 0 0-.03-1.41Z" })));
}

function ArrowFromBottom(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 22h-5V2.823l4.3 4.3a1 1 0 0 0 1.414-1.414L13.768.763a2.5 2.5 0 0 0-3.536 0l-4.95 4.95A1 1 0 0 0 6.7 7.127l4.3-4.3V22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z" })));
}

function ArrowLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M.88 14.09 4.75 18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L2.61 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24Z" })));
}

function ArrowRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.12 9.91 19.25 6a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L21.39 11H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h20.45l-3.62 3.61a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.87-3.88a3 3 0 0 0 0-4.24Z" })));
}

function ArrowSmallDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.71 12.71a1 1 0 0 0-1.42 0L13 16V6a1 1 0 0 0-2 0v10l-3.29-3.29a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.3 4.29A2 2 0 0 0 12 19a2 2 0 0 0 1.4-.59l4.3-4.29a1 1 0 0 0 .01-1.41Z" })));
}

function ArrowSmallLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 11H9l3.29-3.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-4.29 4.3A2 2 0 0 0 6 12a2 2 0 0 0 .59 1.4l4.29 4.3a1 1 0 1 0 1.41-1.42L9 13h10a1 1 0 0 0 0-2Z" })));
}

function ArrowSmallRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z" })));
}

function ArrowSmallUp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m17.71 9.88-4.3-4.29a2 2 0 0 0-2.82 0l-4.3 4.29a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L11 8v11a1 1 0 0 0 2 0V8l3.29 3.29a1 1 0 1 0 1.42-1.41Z" })));
}

function ArrowUp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6 6.21a1 1 0 0 0 1.41 0L11 2.58V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1V2.59l3.62 3.62a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41L14.13.88a3 3 0 0 0-4.24 0L6 4.8a1 1 0 0 0 0 1.41Z" })));
}

function Asterik(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.537 12.7-1.13-.7 1.131-.7a4.126 4.126 0 0 0 1.729-2.031 3.919 3.919 0 0 0-3.28-5.272 4.124 4.124 0 0 0-2.586.654L16 4.9v-.728A4.116 4.116 0 0 0 12.393.019 4 4 0 0 0 8 4v.9l-.4-.25a4.122 4.122 0 0 0-2.587-.657 3.918 3.918 0 0 0-3.283 5.27 4.123 4.123 0 0 0 1.73 2.031L4.593 12l-1.131.7a4.126 4.126 0 0 0-1.729 2.031 3.918 3.918 0 0 0 3.286 5.272 4.124 4.124 0 0 0 2.581-.651L8 19.1v.9a4 4 0 0 0 8 0v-.9l.4.251a4.126 4.126 0 0 0 2.58.653 3.918 3.918 0 0 0 3.284-5.272 4.128 4.128 0 0 0-1.727-2.032zm-.311 4.418a1.916 1.916 0 0 1-2.639.613l-2.059-1.282A1 1 0 0 0 14 17.3V20a2 2 0 0 1-4 0v-2.7a1 1 0 0 0-1.528-.849l-2.059 1.284a1.915 1.915 0 1 1-2.025-3.252l2.625-1.634a1 1 0 0 0 0-1.7L4.388 9.516a1.915 1.915 0 0 1 2.025-3.252l2.059 1.282A1 1 0 0 0 10 6.7V4.107a2.075 2.075 0 0 1 1.664-2.08A2 2 0 0 1 14 4v2.7a1 1 0 0 0 1.528.848l2.059-1.281a1.915 1.915 0 1 1 2.025 3.252l-2.625 1.634a1 1 0 0 0 0 1.7l2.625 1.634a1.914 1.914 0 0 1 .614 2.638z" })));
}

function At(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0A12.013 12.013 0 0 0 0 12c-.126 9.573 11.159 15.429 18.9 9.817a1 1 0 1 0-1.152-1.634C11.3 24.856 1.9 19.978 2 12c.549-13.266 19.453-13.263 20 0v2a2 2 0 0 1-4 0v-2c-.252-7.929-11.749-7.928-12 0a6.017 6.017 0 0 0 10.52 3.933A4 4 0 0 0 24 14v-2A12.013 12.013 0 0 0 12 0Zm0 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Z" })));
}

function Backpack(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 11a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Zm15 7v1a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-1a5.009 5.009 0 0 1 4-4.9V12a8 8 0 0 1 4.015-6.927C8.013 5.048 8 5.026 8 5V4a4 4 0 0 1 8 0v1c0 .026-.013.048-.015.073A8 8 0 0 1 20 12v1.1a5.009 5.009 0 0 1 4 4.9ZM10 4.263a7.736 7.736 0 0 1 4 0V4a2 2 0 0 0-4 0ZM6 16.535a8.368 8.368 0 0 1 12 0V12a6 6 0 0 0-12 0ZM5 22h.026A4.948 4.948 0 0 1 4 19v-3.816A3 3 0 0 0 2 18v1a3 3 0 0 0 3 3Zm10 0a3 3 0 0 0 2.874-2.188 6.432 6.432 0 0 0-11.748 0A3 3 0 0 0 9 22Zm7-4a3 3 0 0 0-2-2.816V19a4.948 4.948 0 0 1-1.026 3H19a3 3 0 0 0 3-3Z" })));
}

function Badge(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 8a8 8 0 1 0-14 5.274V21.5a2.5 2.5 0 0 0 4.062 1.952l1.626-1.3a.5.5 0 0 1 .624 0l1.626 1.3A2.5 2.5 0 0 0 18 21.5v-8.226A7.957 7.957 0 0 0 20 8zm-8-6a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6zm3.717 19.948a.491.491 0 0 1-.529-.06l-1.626-1.3a2.49 2.49 0 0 0-3.124 0l-1.625 1.3A.5.5 0 0 1 8 21.5v-6.582a7.935 7.935 0 0 0 8 0V21.5a.487.487 0 0 1-.283.448z" })));
}

function Balloons(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.848 11.53A7.674 7.674 0 0 0 19.977 8a1 1 0 0 0-2 0 5.712 5.712 0 0 1-.825 2.47 1 1 0 0 0 1.7 1.06ZM8.977 7a1 1 0 0 0-1 1 5.712 5.712 0 0 1-.825 2.47 1 1 0 0 0 1.7 1.06A7.674 7.674 0 0 0 9.977 8a1 1 0 0 0-1-1Z" }),
        React.createElement("path", { d: "M19.5 18.589c-.682-.362-1.386-.737-1.484-1.162-.046-.193-.025-.628.515-1.473C21.7 15.5 24 11.025 24 7a5.8 5.8 0 0 0-6-6 5.862 5.862 0 0 0-4.955 2.487A6.994 6.994 0 0 0 0 7c0 3.971 2.257 8.485 5.39 9.685A2.822 2.822 0 0 0 5 17.87c0 1.571 1.489 2.267 2.576 2.776.6.28 1.424.665 1.424.963a2.291 2.291 0 0 1-.428.851 1 1 0 0 0 1.684 1.08A3.745 3.745 0 0 0 11 21.609c0-1.571-1.489-2.267-2.576-2.775-.6-.281-1.424-.666-1.433-.865a5.379 5.379 0 0 1 .568-1.016c2.352-.306 4.331-2.5 5.452-5.2a7.37 7.37 0 0 0 3.413 3.892 3.381 3.381 0 0 0-.356 2.238c.306 1.31 1.519 1.955 2.494 2.474.616.328 1.313.7 1.419 1.068a1.627 1.627 0 0 1-.315 1.078 1 1 0 1 0 1.732 1 3.329 3.329 0 0 0 .506-2.627 4.166 4.166 0 0 0-2.404-2.287ZM7 15c-2.646 0-5-4.474-5-8a5 5 0 0 1 10 0c0 3.526-2.354 8-5 8Zm7-8a3.792 3.792 0 0 1 4-4 3.792 3.792 0 0 1 4 4c0 3.4-2.056 7-4 7s-4-3.6-4-7Z" })));
}

function Ban(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 2a9.949 9.949 0 0 1 6.324 2.262L4.262 18.324A9.992 9.992 0 0 1 12 2Zm0 20a9.949 9.949 0 0 1-6.324-2.262L19.738 5.676A9.992 9.992 0 0 1 12 22Z" })));
}

function BandAid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 10a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5 1a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm10-5v4a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zM7 7v10h10V7zM5 17V7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zm17-7a3 3 0 0 0-3-3v10a3 3 0 0 0 3-3z" })));
}

function Bank(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1zM.291 8.552a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5L9.613.582a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566A2.713 2.713 0 0 1 21.292 10H21v8h1a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h1v-8h-.292A2.713 2.713 0 0 1 .291 8.552zM5 18h3v-8H5zm5-8v8h4v-8zm9 0h-3v8h3zM2.063 7.625A.717.717 0 0 0 2.708 8h18.584a.717.717 0 0 0 .645-.375.452.452 0 0 0-.024-.5 2.7 2.7 0 0 0-.949-.864l-7.5-3.907a3.176 3.176 0 0 0-2.926 0l-7.5 3.907a2.712 2.712 0 0 0-.949.865.452.452 0 0 0-.026.499z" })));
}

function BarberShop(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.828 16.462a53.471 53.471 0 0 1-3.685-5.776C9.665 7.709 11 4.189 11 1a1 1 0 0 0-2 0 18.683 18.683 0 0 1-1.995 7.431A18.694 18.694 0 0 1 5 1a1 1 0 0 0-2 0c0 3.174 1.342 6.7 2.868 9.685a50.636 50.636 0 0 1-3.695 5.777A3.986 3.986 0 1 0 7 22.618a3.985 3.985 0 1 0 4.828-6.156ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm.883-5.895a50.253 50.253 0 0 0 2.122-3.342c.784 1.35 1.534 2.5 2.117 3.341A3.984 3.984 0 0 0 7 17.382a3.989 3.989 0 0 0-2.117-1.277ZM10 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8-16v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2h-2a3 3 0 0 0-2.816 2H23a1 1 0 0 1 0 2Z" })));
}

function Baseball(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm7.879 18.136a7.984 7.984 0 0 1-2.041-2.594l1.533-.613a1 1 0 1 0-.742-1.858l-1.445.578a7.481 7.481 0 0 1 0-3.3l1.445.578a1 1 0 1 0 .742-1.858l-1.533-.613a7.984 7.984 0 0 1 2.041-2.594 9.936 9.936 0 0 1 0 12.272zM4.121 5.864a7.984 7.984 0 0 1 2.041 2.594l-1.533.613a1 1 0 0 0 .742 1.858l1.445-.578A8 8 0 0 1 7 12a8 8 0 0 1-.184 1.649l-1.445-.578a1 1 0 1 0-.742 1.858l1.533.613a7.984 7.984 0 0 1-2.041 2.594 9.936 9.936 0 0 1 0-12.272zM5.507 19.59a9.955 9.955 0 0 0 2.511-3.306l1.611.645a1 1 0 1 0 .742-1.858l-1.666-.666A10.031 10.031 0 0 0 9 12a10.031 10.031 0 0 0-.295-2.4l1.666-.666a1 1 0 1 0-.742-1.858l-1.611.645A9.955 9.955 0 0 0 5.507 4.41a9.952 9.952 0 0 1 12.986 0 9.955 9.955 0 0 0-2.511 3.306l-1.611-.645a1 1 0 1 0-.742 1.858L15.3 9.6a9.951 9.951 0 0 0 0 4.81l-1.666.666a1 1 0 0 0 .742 1.858l1.611-.645a9.955 9.955 0 0 0 2.511 3.306 9.952 9.952 0 0 1-12.986 0z" })));
}

function Basketball(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256.07-.047C114.467-.047-.326 114.746-.326 256.349S114.467 512.744 256.07 512.744s256.395-114.792 256.395-256.395S397.673-.047 256.07-.047zm212.047 233.476-.107-.085a211.947 211.947 0 0 1-112.533-46.933l65.493-65.493a212.274 212.274 0 0 1 47.147 112.511zM390.72 90.731l-65.408 65.6a211.772 211.772 0 0 1-46.933-112.533A212.28 212.28 0 0 1 390.72 90.731zm-154.923-47.04a254.578 254.578 0 0 0 59.371 142.976L256 225.835 121.088 90.923a212.39 212.39 0 0 1 114.709-47.232zM90.913 121.1l-.097-.097.107.085-.01.012L225.835 256l-39.189 39.189a254.319 254.319 0 0 0-142.933-59.392 212.38 212.38 0 0 1 47.2-114.697zm-47.03 157.471v-.085a211.772 211.772 0 0 1 112.533 46.933l-65.493 65.493a212.29 212.29 0 0 1-47.04-112.341zm77.29 142.506 65.408-65.493a211.772 211.772 0 0 1 46.933 112.533 212.29 212.29 0 0 1-112.341-47.04zm155.03 47.232a254.316 254.316 0 0 0-59.392-142.955L256 286.165l134.912 134.912a212.22 212.22 0 0 1-114.709 47.232zm144.832-77.397L286.165 256l39.168-39.168a254.57 254.57 0 0 0 142.933 59.371 212.388 212.388 0 0 1-47.231 114.709z" })));
}

function Bed(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 6h-6a4.987 4.987 0 0 0-4.416 2.705A3.464 3.464 0 0 0 6.5 8 3.5 3.5 0 0 0 3 11.5a3.464 3.464 0 0 0 .351 1.5H2V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h20v2a1 1 0 0 0 2 0V11a5.006 5.006 0 0 0-5-5Zm-9 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2H10Zm-5 .5A1.5 1.5 0 1 1 6.5 13 1.5 1.5 0 0 1 5 11.5ZM2 17v-2h20v2Z" })));
}

function Beer(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.5 9H19V7a1 1 0 0 0-1-1 3.9 3.9 0 0 0-2.016-3.485 4.093 4.093 0 0 0-2.359-.5.593.593 0 0 1-.54-.223 4.509 4.509 0 0 0-7.332.229A3.993 3.993 0 0 0 2 6a1 1 0 0 0-1 1v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5h.5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 19.5 9ZM6 4a.963.963 0 0 1 .171.021 1 1 0 0 0 1.068-.567A2.5 2.5 0 0 1 11.486 3a2.576 2.576 0 0 0 2.332 1.012 2.157 2.157 0 0 1 1.228.271A1.938 1.938 0 0 1 16 6h-4a3 3 0 0 0-3 3v3a1 1 0 0 1-2 0V9a3 3 0 0 0-3-3 2 2 0 0 1 2-2Zm11 15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8h1a1 1 0 0 1 1 1v3a3 3 0 0 0 6 0V9a1 1 0 0 1 1-1h5Zm4-3.5a1.5 1.5 0 0 1-1.5 1.5H19v-6h.5a1.5 1.5 0 0 1 1.5 1.5Z" })));
}

function BellRing(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.859 15.331-3.772 6.155a5.235 5.235 0 0 1-3.87 2.477 5.315 5.315 0 0 1-.628.037 5.212 5.212 0 0 1-3-.955A4.741 4.741 0 0 1 2.9 16.479l-1.315-1.313a5.264 5.264 0 0 1 .955-8.2L8.307 3.4a8.859 8.859 0 0 1 10.327.551l1.659-1.659a1 1 0 1 1 1.414 1.414L20.05 5.364a8.951 8.951 0 0 1 .809 9.967zM8.065 21.647l-3.719-3.72a2.721 2.721 0 0 0 .463 3.264 2.827 2.827 0 0 0 3.256.456zm9.921-15.6A6.887 6.887 0 0 0 9.369 5.1L3.592 8.666A3.265 3.265 0 0 0 3 13.752l7.29 7.291a3.265 3.265 0 0 0 5.093-.6l3.755-6.125a6.937 6.937 0 0 0-1.152-8.276zM19.265 24a1 1 0 0 1-.591-1.808 8.633 8.633 0 0 0 3.315-5.407 1 1 0 1 1 1.953.43 10.7 10.7 0 0 1-4.088 6.593 1 1 0 0 1-.589.192zM1 5.739a1 1 0 0 1-.8-1.594A10.692 10.692 0 0 1 6.913.02a1 1 0 1 1 .4 1.96A8.636 8.636 0 0 0 1.8 5.334a1 1 0 0 1-.8.405z" })));
}

function BellSchool(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 8a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm14 2a14.27 14.27 0 0 1-11.484 13.952 2.95 2.95 0 0 1-2.431-.646A3.013 3.013 0 0 1 9 20.99v-1.041a10 10 0 1 1 9.382-15.394A1 1 0 1 1 16.7 5.646a8 8 0 1 0 0 8.708 1 1 0 1 1 1.677 1.091A9.959 9.959 0 0 1 11 19.937v1.053a1.016 1.016 0 0 0 .367.781.948.948 0 0 0 .791.213 12.192 12.192 0 0 0 9.47-9.053A2.955 2.955 0 0 1 21 13a3 3 0 1 1 3-3zm-2 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1z" })));
}

function Bell(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.555 13.662-1.9-6.836A9.321 9.321 0 0 0 2.576 7.3l-1.471 6.615A5 5 0 0 0 5.986 20H7.1a5 5 0 0 0 9.8 0h.838a5 5 0 0 0 4.818-6.338ZM12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22Zm8.126-5.185A2.977 2.977 0 0 1 17.737 18H5.986a3 3 0 0 1-2.928-3.651l1.47-6.616a7.321 7.321 0 0 1 14.2-.372l1.9 6.836a2.977 2.977 0 0 1-.502 2.618Z" })));
}

function Bike(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.783 12.079a73.63 73.63 0 0 0-.555-1.873A23.043 23.043 0 0 1 18 5a1 1 0 0 1 2 0 1 1 0 0 0 2 0 3 3 0 0 0-6 0 10.641 10.641 0 0 0 .319 2.263L11.519 11 5.971 7H9a1 1 0 0 0 0-2H5.971a1.969 1.969 0 0 0-1.162 3.559l5.071 3.712-1.438 1.119a4.954 4.954 0 1 0 1.15 1.638l7.289-5.669c.141.476.727 2.384.856 2.823a4.994 4.994 0 1 0 2.046-.1ZM5 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" })));
}

function Billiard(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm-.143 9.515 3-5A1 1 0 0 0 14 9h-4a1 1 0 0 0 0 2h2.234l-2.091 3.485a1 1 0 1 0 1.714 1.03z" })));
}

function Bold(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.954 10.663A6.986 6.986 0 0 0 12 0H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10a6.994 6.994 0 0 0 2.954-13.337ZM7 4h5a3 3 0 0 1 0 6H7Zm8 16H7v-6h8a3 3 0 0 1 0 6Z" })));
}

function BookAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.2 2.163a4.992 4.992 0 0 0-4.1-1.081l-3.822.694A4 4 0 0 0 12 3.065a4 4 0 0 0-2.284-1.289L5.9 1.082A5 5 0 0 0 0 6v10.793a5 5 0 0 0 4.105 4.919l6.286 1.143a9 9 0 0 0 3.218 0l6.291-1.143a5 5 0 0 0 4.1-4.919V6a4.983 4.983 0 0 0-1.8-3.837ZM11 20.928a7.339 7.339 0 0 1-.252-.041l-6.285-1.142A3 3 0 0 1 2 16.793V6a3 3 0 0 1 3-3 3.081 3.081 0 0 1 .54.049l3.82.7A2 2 0 0 1 11 5.712Zm11-4.135a3 3 0 0 1-2.463 2.952l-6.285 1.142a7.339 7.339 0 0 1-.252.041V5.712a2 2 0 0 1 1.642-1.968l3.821-.7A3 3 0 0 1 22 6Z" })));
}

function Book(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 0H7a5.006 5.006 0 0 0-5 5v15a4 4 0 0 0 4 4h11a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 5v11H8V2h9a3 3 0 0 1 3 3ZM6 2.172V16a3.98 3.98 0 0 0-2 .537V5a3 3 0 0 1 2-2.828ZM17 22H6a2 2 0 0 1 0-4h14v1a3 3 0 0 1-3 3Z" })));
}

function Bookmark(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.137 24a2.8 2.8 0 0 1-1.987-.835L12 17.051l-6.15 6.118a2.8 2.8 0 0 1-3.095.609A2.8 2.8 0 0 1 1 21.154V5a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v16.154a2.8 2.8 0 0 1-1.751 2.624 2.867 2.867 0 0 1-1.112.222ZM6 2a3 3 0 0 0-3 3v16.154a.843.843 0 0 0 1.437.6l6.863-6.821a1 1 0 0 1 1.41 0l6.855 6.819a.843.843 0 0 0 1.437-.6V5a3 3 0 0 0-3-3Z" })));
}

function Bowling(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 16a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm3-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-2-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm7 4a7.99 7.99 0 0 1-13.194 6.073A4.005 4.005 0 0 1 7.39 24H4.61a4 4 0 0 1-3.624-2.3A11.08 11.08 0 0 1 0 17a11.781 11.781 0 0 1 1.736-5.463A8.441 8.441 0 0 0 3 8a11.618 11.618 0 0 0-.554-2.175A7.168 7.168 0 0 1 2 4a4 4 0 0 1 8 0 7.168 7.168 0 0 1-.446 1.825A11.618 11.618 0 0 0 9 8a6.7 6.7 0 0 0 .907 2.839A7.987 7.987 0 0 1 24 16ZM4 4c.016.15.211.772.354 1.226A10.708 10.708 0 0 1 5 8h2a10.708 10.708 0 0 1 .646-2.774A12 12 0 0 0 8 3.973 2 2 0 0 0 4 4Zm5.2 16.856A9.084 9.084 0 0 0 10 17a10.1 10.1 0 0 0-1.512-4.542A18.393 18.393 0 0 1 7.368 10H4.632a18.393 18.393 0 0 1-1.12 2.458A10.1 10.1 0 0 0 2 17a9.092 9.092 0 0 0 .8 3.857A2 2 0 0 0 4.61 22h2.78a2 2 0 0 0 1.81-1.144ZM22 16a5.991 5.991 0 0 0-11.084-3.163A9.656 9.656 0 0 1 12 17a11.654 11.654 0 0 1-.408 3.059A5.993 5.993 0 0 0 22 16Z" })));
}

function BoxAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 5h-7V2h4a3 3 0 0 1 3 3zM11 2h2v5a1 1 0 0 1-2 0zM5 2h4v3H2a3 3 0 0 1 3-3zm14 20H5a3 3 0 0 1-3-3V7h7a3 3 0 0 0 6 0h7v12a3 3 0 0 1-3 3zm1-3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" })));
}

function Box(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 14h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Z" }),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v1a3 3 0 0 0 1 2.234V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V8.234A3 3 0 0 0 24 6V5a5.006 5.006 0 0 0-5-5ZM2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm19 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9h18Z" })));
}

function BreadSlice(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 23H7a5.006 5.006 0 0 1-5-5v-7.554a1.119 1.119 0 0 0-.391-.792A4.989 4.989 0 0 1 .066 5.179C.482 2.6 2.85 1 6.242 1h12.606a5.122 5.122 0 0 1 5.086 4.179 4.99 4.99 0 0 1-1.546 4.478 1.115 1.115 0 0 0-.388.789V18a5.006 5.006 0 0 1-5 5ZM6.242 3c-2.414 0-3.945.911-4.2 2.5a2.951 2.951 0 0 0 .924 2.685A3.072 3.072 0 0 1 4 10.446V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7.554a3.061 3.061 0 0 1 1.034-2.261 2.952 2.952 0 0 0 .925-2.685A3.106 3.106 0 0 0 18.848 3ZM8 12a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm4 4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm-4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z" })));
}

function Briefcase(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4h-1.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5Zm-8-2h2a3 3 0 0 1 2.816 2H8.184A3 3 0 0 1 11 2ZM5 6h14a3 3 0 0 1 3 3v3H2V9a3 3 0 0 1 3-3Zm14 16H5a3 3 0 0 1-3-3v-5h9v1a1 1 0 0 0 2 0v-1h9v5a3 3 0 0 1-3 3Z" })));
}

function Broom(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.715 2.285a1.013 1.013 0 0 0-1.43 0l-4.764 4.764-.32-.313a5.008 5.008 0 0 0-6.429-.479 16.618 16.618 0 0 1-4.548 2.428l-2.074.608a5.036 5.036 0 0 0-3.113 2.635A4.973 4.973 0 0 0 .9 15.947a12.95 12.95 0 0 0 12.112 8.064h.924a1.011 1.011 0 0 0 .578-.182 15.288 15.288 0 0 0 6.71-10.209 5.029 5.029 0 0 0-1.453-4.374l-.8-.784 4.747-4.747a1.013 1.013 0 0 0-.003-1.43Zm-10.107 19.7h-.6a11.3 11.3 0 0 1-4.308-.847l.011-.006a11.546 11.546 0 0 0 4.351-3.8l.518-.761a1.01 1.01 0 0 0-1.67-1.138l-.518.761A9.535 9.535 0 0 1 7.8 19.327l-1.251.63a10.757 10.757 0 0 1-2.583-2.57 11.625 11.625 0 0 0 4.377-2.664 1.011 1.011 0 0 0-1.414-1.446 9.617 9.617 0 0 1-3.98 2.32c-.061-.135-.127-.267-.182-.406a2.906 2.906 0 0 1 .085-2.381 3.023 3.023 0 0 1 1.864-1.578l2.073-.608a15.364 15.364 0 0 0 3.426-1.588l7.915 7.712a14.192 14.192 0 0 1-4.522 5.241Zm5.62-8.683a12.421 12.421 0 0 1-.309 1.387L11.948 7.9a3.011 3.011 0 0 1 1.755-.566 2.973 2.973 0 0 1 2.084.849l2.569 2.509a3.01 3.01 0 0 1 .872 2.614Z" })));
}

function Browser(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zM5 3h14a3 3 0 0 1 3 3v1H2V6a3 3 0 0 1 3-3zm14 18H5a3 3 0 0 1-3-3V9h20v9a3 3 0 0 1-3 3zm0-8a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1zm-4 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM3 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1z" })));
}

function Brush(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v5a7.009 7.009 0 0 0 7 7h2v4a3 3 0 0 0 6 0v-4h2a7.009 7.009 0 0 0 7-7V5a5.006 5.006 0 0 0-5-5zM2 5a3 3 0 0 1 3-3h5v1a1 1 0 0 0 2 0V2h2v3a1 1 0 0 0 2 0V2h2v5a1 1 0 0 0 2 0V2.184A3 3 0 0 1 22 5v5H2zm15 10h-3a1 1 0 0 0-1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 0-1-1H7a5 5 0 0 1-4.576-3h19.152A5 5 0 0 1 17 15z" })));
}

function Bug(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 7a2 2 0 0 0 2-2V1a1 1 0 0 0-2 0v4h-4c-.018 0-.032.009-.05.01a6.411 6.411 0 0 0-11.89 0C6.039 5.011 6.021 5 6 5H2V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h3.485l-1.013 4H1a1 1 0 0 0 0 2h2.965l-.145.573-.02.127a8.37 8.37 0 0 0-.07 1.032A8.2 8.2 0 0 0 4.053 17H2a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0v-4h2.93a8.248 8.248 0 0 0 14.14 0H22v4a1 1 0 0 0 2 0v-4a2 2 0 0 0-2-2h-2.053a8.2 8.2 0 0 0 .325-2.273A8.37 8.37 0 0 0 20.2 13.7l-.175-.7H23a1 1 0 0 0 0-2h-3.478l-1.009-4ZM12 21a6.279 6.279 0 0 1-6.272-6.273A6.188 6.188 0 0 1 5.775 14l2.03-8.03a4.448 4.448 0 0 1 8.376-.041L18.225 14a6.188 6.188 0 0 1 .047.725A6.279 6.279 0 0 1 12 21Z" })));
}

function Building(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 14a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1zm4-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm-5 4H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM6 5H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM6 9H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm13 1v9a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5h3a5.006 5.006 0 0 1 5 5zM5 22h9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3zm17-12a3 3 0 0 0-3-3h-3v15h3a3 3 0 0 0 3-3zm-3 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" })));
}

function Bulb(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.994 2.286A9 9 0 0 0 3.075 7.822a8.938 8.938 0 0 0 2.793 7.761A6.263 6.263 0 0 1 8 20.149v.161A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zM12.31 22h-.62A1.692 1.692 0 0 1 10 20.31s-.007-.26-.008-.31H14v.31A1.692 1.692 0 0 1 12.31 22zm4.3-7.741A7.667 7.667 0 0 0 14.246 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816V18H9.678a8.634 8.634 0 0 0-2.448-3.881 7 7 0 0 1 3.951-12.073A7.452 7.452 0 0 1 12.009 2a6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1-.048 10.481z" })));
}

function Butterfly(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 12.932A8.184 8.184 0 0 0 24 7.284c0-5.654-2.767-6.264-3.956-6.264-2.968 0-5.884 2.9-8.041 5.521C9.862 3.942 6.937 1.02 3.961 1.02-.188.76-1.706 9.091 2.506 12.933c.176.174.359.337.544.49a6.554 6.554 0 0 0-1.72 6.687 4.02 4.02 0 0 0 2.3 2.574 3.914 3.914 0 0 0 3.355-.131A16.382 16.382 0 0 0 11 19.621V22a1 1 0 0 0 2 0v-2.379a16.351 16.351 0 0 0 4.018 2.931 3.911 3.911 0 0 0 3.355.132 4.021 4.021 0 0 0 2.3-2.573A6.567 6.567 0 0 0 21 13.384c.171-.142.338-.292.5-.452ZM11 15.636c0 1.478-2.08 3.642-4.947 5.146a1.891 1.891 0 0 1-1.647.06 2.027 2.027 0 0 1-1.158-1.3 4.6 4.6 0 0 1 1.566-5.038A6.25 6.25 0 0 0 7.206 15 9.811 9.811 0 0 0 11 14.293Zm0-3.651A6.3 6.3 0 0 1 7.18 13a4.559 4.559 0 0 1-3.27-1.49 6.234 6.234 0 0 1-1.9-4.225c0-2.71.713-4.264 1.955-4.264C5.746 3.02 8.106 4.858 11 8.491ZM13 8.5c2.88-3.63 5.252-5.48 7.044-5.48C21.287 3.02 22 4.574 22 7.284a6.236 6.236 0 0 1-1.9 4.225A4.691 4.691 0 0 1 16.87 13 6.435 6.435 0 0 1 13 11.98Zm7.752 11.048a2.025 2.025 0 0 1-1.158 1.3 1.892 1.892 0 0 1-1.647-.061C15.08 19.278 13 17.114 13 15.636v-1.345a9.812 9.812 0 0 0 3.8.709 6.094 6.094 0 0 0 2.424-.51 4.535 4.535 0 0 1 1.528 5.054ZM10 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Z" })));
}

function CakeBirthday(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 22h-1v-8a5.006 5.006 0 0 0-5-5h-4V6.039a2.5 2.5 0 0 0 1.5-2.289A7.293 7.293 0 0 0 12.738.327a1 1 0 0 0-1.476 0A7.293 7.293 0 0 0 9.5 3.75 2.5 2.5 0 0 0 11 6.039V9H7a5.006 5.006 0 0 0-5 5v8H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM7 11h10a3 3 0 0 1 3 3v1.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 0 0-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .315-.579.888-1.5.981V14a3 3 0 0 1 3-3Zm-3 6.979A4.156 4.156 0 0 0 6.5 17a4.309 4.309 0 0 0 5.5.015A4.309 4.309 0 0 0 17.5 17a4.156 4.156 0 0 0 2.5.978V22H4Z" })));
}

function CakeWedding(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 22.01h-1V17a5 5 0 0 0-3-4.576V12a4.98 4.98 0 0 0-2-3.975L16.161 3.8a1 1 0 0 0-.981-.8h-.36a1 1 0 0 0-.981.8L13.2 7h-2.95L11 4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1l.873 3.493A4.993 4.993 0 0 0 5 12v.424A5 5 0 0 0 2 17v5.01H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM10 9h4a3 3 0 0 1 3 3H7a3 3 0 0 1 3-3Zm-3 5h10a3 3 0 0 1 3 3v.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 0 0-2 0c0 .344-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .344-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .316-.579.888-1.5.981V17a3 3 0 0 1 3-3Zm-3 5.979A4.156 4.156 0 0 0 6.5 19a4.309 4.309 0 0 0 5.5.015A4.309 4.309 0 0 0 17.5 19a4.156 4.156 0 0 0 2.5.978v2.032H4Z" }),
        React.createElement("circle", { cx: 9, cy: 1, r: 1 }),
        React.createElement("circle", { cx: 15, cy: 1, r: 1 })));
}

function Calculator(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 24H6a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5zM6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm10 8H8a3 3 0 0 1 0-6h8a3 3 0 0 1 0 6zM8 6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-2 7a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm-8 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm8-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm1 5a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z" })));
}

function Calendar(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5ZM2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2Zm17 15H5a3 3 0 0 1-3-3v-9h20v9a3 3 0 0 1-3 3Z" }),
        React.createElement("circle", { cx: 12, cy: 15, r: 1.5 }),
        React.createElement("circle", { cx: 7, cy: 15, r: 1.5 }),
        React.createElement("circle", { cx: 17, cy: 15, r: 1.5 })));
}

function CallHistory(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.762 24C9.631 24.275-5.017 9.745 1.784 1.867l1.15-1A3.08 3.08 0 0 1 7.26.911a1 1 0 0 1 .086.1l1.8 2.339a3.108 3.108 0 0 1-.01 4.28L7.978 9.086a12.789 12.789 0 0 0 6.931 6.946l1.464-1.165a3.17 3.17 0 0 1 4.282-.006l2.34 1.8a1.126 1.126 0 0 1 .1.085 3.11 3.11 0 0 1 0 4.378l-.911 1.05A6.154 6.154 0 0 1 17.762 24ZM5.071 2a1.094 1.094 0 0 0-.774.32l-1.151 1C-2.5 10.108 14.777 26.423 20.72 20.808l.912-1.051a1.1 1.1 0 0 0 .085-1.559l-2.327-1.787a.811.811 0 0 1-.1-.087 1.122 1.122 0 0 0-1.548 0 1.01 1.01 0 0 1-.084.076L15.7 17.96a1 1 0 0 1-.979.152A15.011 15.011 0 0 1 5.9 9.3a1 1 0 0 1 .146-1L7.6 6.344a.849.849 0 0 1 .075-.084 1.1 1.1 0 0 0 0-1.549.866.866 0 0 1-.086-.1L5.806 2.287a1.093 1.093 0 0 0-.735-.282Zm11.965 13.618Zm5.528-3.042c4.99-7.345-3.8-16.126-11.137-11.137a1 1 0 1 0 1.144 1.64c5.474-3.759 12.11 2.884 8.353 8.354a1 1 0 1 0 1.64 1.143Zm-3.858-1.865a1 1 0 0 0 0-1.414L17 7.59V5a1 1 0 0 0-2 0v3a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414 0Z" })));
}

function CallIncoming(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.98 7.023v-4a1 1 0 0 1 2 0v2.611C17.61 5 21.681.908 22.273.316a1 1 0 1 1 1.414 1.414c-.592.592-4.642 4.665-5.268 5.293h2.561a1 1 0 0 1 0 2h-4a2 2 0 0 1-2-2Zm8.095 9.739a3.1 3.1 0 0 1 0 4.378l-.912 1.05c-8.191 7.838-28.119-12.084-20.4-20.3l1.15-1A3.081 3.081 0 0 1 7.24.929c.031.03 1.883 2.438 1.883 2.438a3.109 3.109 0 0 1-.006 4.282L7.959 9.105a12.784 12.784 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.28-.006s2.409 1.853 2.44 1.883ZM21.7 18.216s-2.393-1.842-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.026-2.044 1.634-2.044 1.634a1 1 0 0 1-.979.152 15.009 15.009 0 0 1-8.825-8.811 1 1 0 0 1 .145-1s1.608-2.014 1.635-2.04a1.1 1.1 0 0 0 0-1.549c-.03-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1c-5.642 6.783 11.63 23.097 17.573 17.483l.912-1.051a1.12 1.12 0 0 0 .088-1.56Z" })));
}

function CallMissed(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M3 7V3a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H6.439l5.906 5.926a.22.22 0 0 0 .157.065.218.218 0 0 0 .156-.064l6.884-6.884a1 1 0 0 1 1.414 1.414l-6.884 6.884a2.2 2.2 0 0 1-1.57.65 2.206 2.206 0 0 1-1.572-.653L5 4.389V7a1 1 0 0 1-2 0Zm21 13.107-.085 1.264a2.707 2.707 0 0 1-2.715 2.651c-.044 0-2.522-.322-2.522-.322a2.726 2.726 0 0 1-2.649-2.654l-.155-1.292A11.11 11.11 0 0 0 12 19a10.68 10.68 0 0 0-3.863.744l-.157 1.3A2.726 2.726 0 0 1 5.326 23.7s-2.478.322-2.522.322A2.724 2.724 0 0 1 .083 21.3L0 20.176A5.249 5.249 0 0 1 1.556 16.4c4.491-4.488 16.4-4.487 20.887 0A5.216 5.216 0 0 1 24 20.107Zm-2-.07a3.2 3.2 0 0 0-.974-2.22c-3.982-3.985-14.627-3.429-18.057 0A3.225 3.225 0 0 0 2 20.105l.081 1.127a.747.747 0 0 0 .671.789s2.458-.32 2.5-.32a.724.724 0 0 0 .722-.722c0-.04.239-2.05.239-2.05a1 1 0 0 1 .585-.794A12.532 12.532 0 0 1 11.942 17h.063a13.354 13.354 0 0 1 5.18 1.128 1 1 0 0 1 .6.8s.239 2.01.239 2.05a.724.724 0 0 0 .722.722c.044 0 2.5.32 2.5.32a.722.722 0 0 0 .669-.719Z" })));
}

function CallOutgoing(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.98 2.023v4a1 1 0 0 1-2 0V3.46l-5.3 5.272a1 1 0 0 1-1.41-1.418l5.32-5.291h-2.61a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2Zm-.905 14.739a3.1 3.1 0 0 1 0 4.378l-.912 1.05c-8.191 7.838-28.12-12.085-20.4-20.3l1.149-1a3.085 3.085 0 0 1 4.329.038c.03.031 1.883 2.439 1.883 2.439a3.1 3.1 0 0 1-.006 4.281L7.959 9.105a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.28-.006s2.409 1.853 2.44 1.883ZM21.7 18.216s-2.393-1.842-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.026-2.044 1.634-2.044 1.634a1 1 0 0 1-.979.152A15 15 0 0 1 5.88 9.318a1 1 0 0 1 .145-.995s1.607-2.017 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.03-.03-1.872-2.424-1.872-2.424a1.1 1.1 0 0 0-1.51.038l-1.149 1C-2.516 10.126 14.757 26.442 20.7 20.826l.912-1.05a1.12 1.12 0 0 0 .088-1.56Z" })));
}

function Camera(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4h-.508l-2.184-2.832A3.023 3.023 0 0 0 13.932 0h-3.864a3.023 3.023 0 0 0-2.376 1.168L5.508 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM9.276 2.39a1.006 1.006 0 0 1 .792-.39h3.864a1.008 1.008 0 0 1 .792.39L15.966 4H8.034ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M12 8a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" })));
}

function Camping(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5.005 24H19a5 5 0 0 0 4.522-7.132L16.535 2.9a5 5 0 0 0-9.057-.026l-7 14-.008.026A5 5 0 0 0 5.005 24Zm3.4-2 2.717-5.438A.958.958 0 0 1 12 16a.973.973 0 0 1 .893.588L15.6 22Zm-6.127-4.252 7-14.012a3 3 0 0 1 5.454.027l6.988 13.973A3 3 0 0 1 19 22h-1.164L14.7 15.72a2.971 2.971 0 0 0-5.377-.027L6.168 22H5.005a3 3 0 0 1-2.727-4.252Z" })));
}

function Car(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.9 4.291A5.011 5.011 0 0 0 16.2 1H7.8a5.011 5.011 0 0 0-4.7 3.291L.4 11.718A6.664 6.664 0 0 0 0 14v1a4.979 4.979 0 0 0 2 3.978V21a3 3 0 0 0 6 0v-1h8v1a3 3 0 0 0 6 0v-2.022A4.979 4.979 0 0 0 24 15v-1a6.654 6.654 0 0 0-.4-2.281Zm-15.918.684A3.009 3.009 0 0 1 7.8 3h8.4a3.009 3.009 0 0 1 2.82 1.975L21.208 11H2.791ZM6 21a1 1 0 0 1-2 0v-1.1a5 5 0 0 0 1 .1h1Zm14 0a1 1 0 0 1-2 0v-1h1a5 5 0 0 0 1-.1Zm2-6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1a4.659 4.659 0 0 1 .121-1H4v1a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1h1.879A4.652 4.652 0 0 1 22 14Z" })));
}

function CaretDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.41 9h11.18a1 1 0 0 1 .7 1.71l-5.58 5.58a1 1 0 0 1-1.42 0l-5.58-5.58A1 1 0 0 1 6.41 9Z" })));
}

function CaretLeft(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.29 18.59 7.71 13a1 1 0 0 1 0-1.41L13.29 6a1 1 0 0 1 1.71.71v11.17a1 1 0 0 1-1.71.71Z" })));
}

function CaretRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 17.88V6.71A1 1 0 0 1 10.71 6l5.58 5.59a1 1 0 0 1 0 1.41l-5.58 5.59A1 1 0 0 1 9 17.88Z" })));
}

function CaretUp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.41 16h11.18a1 1 0 0 0 .7-1.71l-5.58-5.58a1 1 0 0 0-1.42 0l-5.58 5.58a1 1 0 0 0 .7 1.71Z" })));
}

function Carrot(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 5h-2.586l2.293-2.293a1 1 0 0 0-1.414-1.414L19 3.586V1a1 1 0 0 0-2 0v4.456a10.139 10.139 0 0 0-2.854-2.126 3.765 3.765 0 0 0-4.423 1.048C7.965 6.136 3.065 15.121.3 20.319A2.511 2.511 0 0 0 3.681 23.7c5.2-2.764 14.183-7.665 15.941-9.423a3.766 3.766 0 0 0 1.049-4.422A10.167 10.167 0 0 0 18.544 7H23a1 1 0 0 0 0-2Zm-4.792 7.863a16.072 16.072 0 0 1-2.293 1.637l-2.208-2.207a1 1 0 0 0-1.414 1.414l1.87 1.869c-2.746 1.643-6.689 3.842-11.421 6.358a.5.5 0 0 1-.676-.676 359.744 359.744 0 0 1 4.16-7.618l2.067 2.067a1 1 0 0 0 1.414-1.414l-2.456-2.456c1.09-1.889 2.006-3.4 2.709-4.463l2.333 2.333a1 1 0 0 0 1.414-1.414L11.174 5.76c.847-.789 1.366-.922 2.183-.592a11.623 11.623 0 0 1 3.008 2.466 11.628 11.628 0 0 1 2.467 3.009c.249.58.346 1.251-.624 2.22Z" })));
}

function ChartConnected(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.983a3.994 3.994 0 0 0-2.607-3.735l-.038-.091a10.07 10.07 0 0 0-5.294-5.419l-.329-.144a3.981 3.981 0 0 0-7.462 0l-.418.188a10.19 10.19 0 0 0-5.235 5.463 3.98 3.98 0 0 0-.03 7.468l.128.3a10.1 10.1 0 0 0 5.162 5.228l.393.176a3.982 3.982 0 0 0 7.46 0l.367-.163a10.193 10.193 0 0 0 5.309-5.534A4 4 0 0 0 24 11.983ZM12 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM3.988 9.985l.082.031.01-.025a1.912 1.912 0 1 1-.092-.006ZM12 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm3.893-2.886a3.991 3.991 0 0 0-7.787 0 8.093 8.093 0 0 1-3.231-3.234A3.991 3.991 0 0 0 4.9 8.1a8.19 8.19 0 0 1 3.206-3.2 3.991 3.991 0 0 0 7.785 0A8.225 8.225 0 0 1 19.1 8.093a3.991 3.991 0 0 0 .015 7.785 8.207 8.207 0 0 1-3.222 3.236ZM20 13.983a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function ChartHistogram(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 22H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "M6 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM10 10v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0ZM15 13v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM20 9v10a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0ZM6 9a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586A1 1 0 0 0 22.293.293l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.171a3 3 0 0 0-4.242 0L5.293 7.293A1 1 0 0 0 6 9Z" })));
}

function ChartNetwork(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 12a3.994 3.994 0 0 0-3.172 1.566l-.07-.03a5 5 0 0 0-6.009-6.377l-.091-.172a3.995 3.995 0 1 0-1.779.913l.073.137a4.992 4.992 0 0 0-1.134 6.7L5.933 16.5a4 4 0 1 0 1.455 1.377l1.838-1.718a4.993 4.993 0 0 0 6.539-.871l.279.119A4 4 0 1 0 20 12ZM6 4a2 2 0 1 1 2 2 2 2 0 0 1-2-2ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8-7a3 3 0 0 1-1.6-5.534l.407-.217A3 3 0 1 1 12 15Zm8 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function ChartPieAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.713 12H14a2 2 0 0 1-2-2V5.274a3 3 0 0 0-1.166-2.383 2.871 2.871 0 0 0-2.481-.534 10.969 10.969 0 0 0 .553 21.414 11 11 0 0 0 12.734-8.114 2.876 2.876 0 0 0-.533-2.485A3.055 3.055 0 0 0 18.713 12Zm.988 3.168A8.969 8.969 0 1 1 8.842 4.3a.871.871 0 0 1 .764.172 1.016 1.016 0 0 1 .4.806V10a4 4 0 0 0 4 4h4.712a1.041 1.041 0 0 1 .816.4.884.884 0 0 1 .166.768Z" }),
        React.createElement("path", { d: "M23.651 7.446A10.073 10.073 0 0 0 16.582.372 2.1 2.1 0 0 0 16.038.3a2 2 0 0 0-2.019 2V7a3 3 0 0 0 3 3h4.719a2.008 2.008 0 0 0 1.913-2.554ZM21.153 8h-4.138a1 1 0 0 1-1-1l-.008-4.693a.048.048 0 0 1 .025-.009h.026A8.072 8.072 0 0 1 21.734 8Z" })));
}

function ChartPie(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm9.573 9.12-8.908 1.732a4.941 4.941 0 0 1-.368-.679l-3.34-7.7A9.987 9.987 0 0 1 21.573 9.12ZM12 22A9.995 9.995 0 0 1 7.124 3.278l3.338 7.691a7.011 7.011 0 0 0 2.167 2.772l6.653 5.092A9.966 9.966 0 0 1 12 22Zm8.5-4.755-6.125-4.688 7.581-1.473c.027.3.046.607.046.916a9.925 9.925 0 0 1-1.502 5.245Z" })));
}

function ChartPyramid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.413 18.24-7.82-15.965a4 4 0 0 0-7.185 0L.587 18.24A4 4 0 0 0 4.179 24H19.82a4 4 0 0 0 3.593-5.76ZM19.6 15H4.4l2.45-5h10.3ZM10.2 3.155a2 2 0 0 1 3.592 0L16.169 8H7.83Zm11.314 17.9a1.964 1.964 0 0 1-1.7.942H4.179a2 2 0 0 1-1.8-2.88L3.421 17h17.157l1.038 2.12a1.961 1.961 0 0 1-.098 1.938Z" })));
}

function ChartSetTheory(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M424.802 182.898v-1.54c0-93.189-75.545-168.734-168.734-168.734S87.334 88.169 87.334 181.358v1.54C5.755 227.943-23.862 330.592 21.183 412.171s147.694 111.196 229.273 66.152a169.027 169.027 0 0 0 5.613-3.241c79.789 48.144 183.5 22.491 231.644-57.298 48.144-79.789 22.491-183.5-57.298-231.644a168.31 168.31 0 0 0-5.613-3.242zM256.068 423.344a126.418 126.418 0 0 1-41.171-78.229 169.286 169.286 0 0 0 82.258 0 126.422 126.422 0 0 1-41.087 78.124v.105zm0-115.435a126.243 126.243 0 0 1-39.21-6.222 126.74 126.74 0 0 1 39.21-66.924 126.74 126.74 0 0 1 39.21 66.924 126.243 126.243 0 0 1-39.21 6.222zm-77.491-26.576a126.742 126.742 0 0 1-46.085-72.555 126.55 126.55 0 0 1 86.75 3.058 168.907 168.907 0 0 0-40.665 69.497zm114.317-69.603a126.55 126.55 0 0 1 86.75-3.058 126.746 126.746 0 0 1-46.085 72.661 168.908 168.908 0 0 0-40.665-69.603zM256.068 54.808c63.672.082 117.4 47.391 125.538 110.542a168.737 168.737 0 0 0-125.538 17.569A168.732 168.732 0 0 0 130.53 165.35c8.138-63.15 61.866-110.46 125.538-110.542zM45.151 329a126.425 126.425 0 0 1 49.059-99.975 169.474 169.474 0 0 0 77.491 98.435V329a168.187 168.187 0 0 0 47.541 117.27c-64.773 26.256-138.566-4.968-164.822-69.74A126.55 126.55 0 0 1 45.151 329zm295.284 126.551a125.97 125.97 0 0 1-47.541-9.28 168.187 168.187 0 0 0 47.541-117.27v-1.54a169.475 169.475 0 0 0 77.512-98.435c55.215 42.851 65.237 122.349 22.386 177.564a126.555 126.555 0 0 1-99.898 48.961z" })));
}

function ChartTree(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.736 16.4A5.009 5.009 0 0 0 17 13h-4v-1.084a6 6 0 1 0-2 0V13H7a5.009 5.009 0 0 0-4.736 3.4 4 4 0 1 0 2.447-.334A3 3 0 0 1 7 15h4v1.127a4 4 0 1 0 2 0V15h4a3 3 0 0 1 2.289 1.063 4 4 0 1 0 2.447.334ZM8 6a4 4 0 1 1 4 4 4 4 0 0 1-4-4ZM6 20a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm8 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm6 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function ChatArrowDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.293 12.7-1.086 1.086-3.585-3.586a3.073 3.073 0 0 0-4.242 0l-.173.173a1.023 1.023 0 0 1-1.414 0L6.72 5.294a1 1 0 1 0-1.414 1.414l5.072 5.073a3.072 3.072 0 0 0 4.242 0l.173-.173a1.023 1.023 0 0 1 1.414 0l3.586 3.592-1.086 1.086a1 1 0 0 0 .707 1.707H22.5a1.5 1.5 0 0 0 1.5-1.5V13.4a1 1 0 0 0-1.707-.7Z" }),
        React.createElement("path", { d: "M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" })));
}

function ChatArrowGrow(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.5 3.976h-3.086a1 1 0 0 0-.707 1.707l1.086 1.086-3.586 3.585a1.024 1.024 0 0 1-1.415 0l-.17-.171a3.071 3.071 0 0 0-4.243 0l-5.1 5.1A1 1 0 1 0 6.7 16.7l5.1-5.1a1.023 1.023 0 0 1 1.415 0l.17.171a3.073 3.073 0 0 0 4.243 0l3.586-3.586L22.3 9.271a1 1 0 0 0 1.7-.709V5.476a1.5 1.5 0 0 0-1.5-1.5Z" }),
        React.createElement("path", { d: "M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" })));
}

function Check(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.417 0 1 1 0 0 0 0 1.417l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0 0-1.416 1 1 0 0 0-1.417 0Z" })));
}

function Checkbox(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M9.333 15.919 5.414 12A1 1 0 0 0 4 12a1 1 0 0 0 0 1.414l3.919 3.919a2 2 0 0 0 2.829 0L20 8.081a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0Z" })));
}

function Cheese(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 14a2 2 0 0 0 0 4 2 2 0 0 0 0-4ZM8 11a4 4 0 0 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z" }),
        React.createElement("path", { d: "M21.589 6.7 13.751.849A4.959 4.959 0 0 0 8.043.96 19.887 19.887 0 0 0 1.1 10.569a1.08 1.08 0 0 0-.032.156 5.083 5.083 0 0 0-.283.669 13.86 13.86 0 0 0 0 9.213A5 5 0 0 0 5.525 24h3.624a2.039 2.039 0 0 0 1.922-1.457 1.509 1.509 0 0 1 2.858 0A2.039 2.039 0 0 0 15.851 24H19a5.006 5.006 0 0 0 5-5v-7.493A6.026 6.026 0 0 0 21.589 6.7ZM9.24 2.562a2.941 2.941 0 0 1 3.359-.08L19.989 8H5.526a4.975 4.975 0 0 0-1.156.135 18.189 18.189 0 0 1 4.87-5.573ZM22 19a3 3 0 0 1-3 3l-3.166-.066A3.511 3.511 0 0 0 9.149 22H5.525a3 3 0 0 1-2.843-2.038 11.869 11.869 0 0 1 0-7.923A3.006 3.006 0 0 1 5.526 10H21.7a4 4 0 0 1 .3 1.507Z" })));
}

function ChessPiece(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.025 22.026h-1v-1.655A4.014 4.014 0 0 0 17.8 17.5c-1.924-1.859-2.709-3.989-2.766-7.476h.988a1 1 0 0 0 0-2h-.556a3.949 3.949 0 0 0 .556-2c0-1.375-1.162-3.717-1.893-4.87a2.5 2.5 0 0 0-4.212 0c-.732 1.154-1.894 3.5-1.894 4.871a3.959 3.959 0 0 0 .556 2h-.553a1 1 0 0 0 0 2h.989c-.058 3.487-.844 5.616-2.766 7.475a4.019 4.019 0 0 0-1.223 2.87v1.655h-1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zm-8.417-19.8a.5.5 0 0 1 .835 0 10.752 10.752 0 0 1 1.582 3.8 2 2 0 1 1-4 0 10.763 10.763 0 0 1 1.583-3.799zm1.43 7.8c.054 3.516.8 5.951 2.522 8H8.491c1.72-2.049 2.468-4.485 2.523-8zM7.026 20.371a1.905 1.905 0 0 1 .036-.345h9.928a2 2 0 0 1 .035.345v1.655h-10z" })));
}

function ChildHead(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.5a3.5 3.5 0 0 0-2.149-3.226 10 10 0 0 0-19.7 0 3.5 3.5 0 0 0 1.119 6.718 10.607 10.607 0 0 0 2.071 2.955 8.908 8.908 0 0 0-2.272 4.928 1 1 0 0 0 .868 1.117 1.093 1.093 0 0 0 .124.008 1 1 0 0 0 .991-.875 6.924 6.924 0 0 1 1.815-3.872A8.948 8.948 0 0 0 12 21a8.94 8.94 0 0 0 5.119-1.74 6.922 6.922 0 0 1 1.808 3.862 1 1 0 0 0 .991.876 1.063 1.063 0 0 0 .125-.008 1 1 0 0 0 .868-1.116 8.9 8.9 0 0 0-2.261-4.918 10.622 10.622 0 0 0 2.082-2.966A3.5 3.5 0 0 0 24 11.5Zm-3.752 1.473a.993.993 0 0 0-1.117.651C18.215 16.222 15.13 19 12 19s-6.215-2.78-7.131-5.378a.994.994 0 0 0-1.117-.651A1.606 1.606 0 0 1 3.5 13a1.5 1.5 0 0 1-.27-2.972 1 1 0 0 0 .816-.878A7.961 7.961 0 0 1 8.13 3a4.075 4.075 0 0 0-.022 1.942 4 4 0 0 0 7.688.318.977.977 0 0 0-.945-1.26H14.7a.867.867 0 0 0-.806.631A2 2 0 1 1 12 2a7.978 7.978 0 0 1 7.954 7.15 1 1 0 0 0 .816.878A1.5 1.5 0 0 1 20.5 13a1.606 1.606 0 0 1-.252-.027Z" }),
        React.createElement("circle", { cx: 9.5, cy: 11.5, r: 1.5 }),
        React.createElement("circle", { cx: 14.5, cy: 11.5, r: 1.5 })));
}

function CircleSmall(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 5a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z" })));
}

function Circle(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z" })));
}

function Clip(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.95 9.6a1 1 0 0 0-1.414 0L10.644 20.539a5 5 0 1 1-7.072-7.071L14.121 2.876a3 3 0 0 1 4.243 4.242L7.815 17.71a1.022 1.022 0 0 1-1.414 0 1 1 0 0 1 0-1.414l9.392-9.435a1 1 0 0 0-1.414-1.414l-9.392 9.435a3 3 0 0 0 0 4.243 3.073 3.073 0 0 0 4.243 0L19.778 8.532a5 5 0 0 0-7.071-7.07L2.158 12.054a7 7 0 0 0 9.9 9.9L22.95 11.018a1 1 0 0 0 0-1.418Z" })));
}

function Clock(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v4.325l-3.371 2.112a1 1 0 0 0 1.062 1.7l3.84-2.4a1 1 0 0 0 .469-.858V7a1 1 0 0 0-1-1Z" })));
}

function CloudCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.692 23a2.98 2.98 0 0 1-2.121-.879L6.184 18.7A1 1 0 1 1 7.6 17.3l3.384 3.414a1.025 1.025 0 0 0 1.411 0l5.414-5.414a1 1 0 0 1 1.415 1.414l-5.415 5.414a2.976 2.976 0 0 1-2.117.872zM7 22a1 1 0 0 0-1-1h-.317a3.81 3.81 0 0 1-3.646-2.982 3.468 3.468 0 0 1 1.835-3.6 1.994 1.994 0 0 0 .792-2.686 6 6 0 1 1 11.06-4.513 3.1 3.1 0 0 0 2.044 2.053 5.971 5.971 0 0 1 4.213 6.211 5.845 5.845 0 0 1-4.293 5.076 1 1 0 0 0 .624 1.9 7.858 7.858 0 0 0 .044-15.1 1.09 1.09 0 0 1-.722-.735 8 8 0 0 0-15.49.842 7.652 7.652 0 0 0 .8 5.18A5.443 5.443 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23H6a1 1 0 0 0 1-1z" })));
}

function CloudDisabled(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.781 20.367a7.494 7.494 0 0 0 2.2-4.729 7.96 7.96 0 0 0-5.621-8.277 1.089 1.089 0 0 1-.721-.734 7.96 7.96 0 0 0-13.07-3.473L1.707.293A1 1 0 0 0 .293 1.707l22 22a1 1 0 0 0 1.414-1.414zM9.1 3.065a5.992 5.992 0 0 1 6.624 4.155 3.1 3.1 0 0 0 2.044 2.052 5.971 5.971 0 0 1 4.213 6.21 5.406 5.406 0 0 1-1.627 3.458L5.982 4.568A5.952 5.952 0 0 1 9.1 3.065zm7.893 18.763a1 1 0 0 1-.887 1.1 12.216 12.216 0 0 1-1.321.07h-9.1A5.843 5.843 0 0 1 .057 18.3a5.446 5.446 0 0 1 2.881-5.65 7.646 7.646 0 0 1-.858-4.789 1 1 0 0 1 1.981.278 5.968 5.968 0 0 0 .6 3.585 2 2 0 0 1-.791 2.7 3.467 3.467 0 0 0-1.832 3.6A3.809 3.809 0 0 0 5.683 21h9.1a10.245 10.245 0 0 0 1.107-.059 1.008 1.008 0 0 1 1.104.887z" })));
}

function CloudDownload(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.746 20.334a1 1 0 0 1-.081 1.413l-1.586 1.414a2.9 2.9 0 0 1-2.064.839 3.013 3.013 0 0 1-2.136-.882l-1.544-1.374a1 1 0 0 1 1.33-1.494L14 21.444V14a1 1 0 0 1 2 0v7.445l1.335-1.192a1 1 0 0 1 1.411.081zm-.39-12.973a1.088 1.088 0 0 1-.722-.735 8 8 0 0 0-15.489.842 7.657 7.657 0 0 0 .8 5.18A5.448 5.448 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23H8a1 1 0 0 0 0-2H5.683a3.81 3.81 0 0 1-3.646-2.982 3.469 3.469 0 0 1 1.834-3.6 1.993 1.993 0 0 0 .793-2.685 6 6 0 1 1 11.06-4.513 3.1 3.1 0 0 0 2.045 2.052 5.971 5.971 0 0 1 4.212 6.21 5.377 5.377 0 0 1-1.111 2.909 1 1 0 0 0 1.586 1.219 7.466 7.466 0 0 0 1.52-3.972 7.96 7.96 0 0 0-5.62-8.277z" })));
}

function CloudShare(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 18a2.986 2.986 0 0 0-2.077.844l-2.96-1.481A2.9 2.9 0 0 0 16 17a2.9 2.9 0 0 0-.037-.363l2.96-1.481A2.994 2.994 0 1 0 18 13a2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481A2.9 2.9 0 0 0 18 21a3 3 0 1 0 3-3zm0-6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-8 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-9 0a1 1 0 0 1-1 1H5.679a5.841 5.841 0 0 1-5.622-4.7 5.443 5.443 0 0 1 2.885-5.651 7.652 7.652 0 0 1-.8-5.18 8 8 0 0 1 15.49-.842 1.09 1.09 0 0 0 .722.735 1 1 0 1 1-.588 1.911 3.1 3.1 0 0 1-2.044-2.053 6 6 0 1 0-11.06 4.513 1.994 1.994 0 0 1-.792 2.686 3.468 3.468 0 0 0-1.835 3.6A3.807 3.807 0 0 0 5.679 21H11a1 1 0 0 1 1 1z" })));
}

function CloudUpload(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.4 7.379a1.128 1.128 0 0 1-.769-.754 8 8 0 1 0-15.1 5.237 1.046 1.046 0 0 1-.308 1.238 5.5 5.5 0 0 0-2.166 5.2A5.622 5.622 0 0 0 5.683 23H11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H5.683a3.614 3.614 0 0 1-3.646-2.981 3.456 3.456 0 0 1 1.376-3.313 3.021 3.021 0 0 0 .987-3.565 6.113 6.113 0 0 1-.073-4.126A5.956 5.956 0 0 1 9.215 3.05 6.109 6.109 0 0 1 9.987 3a5.984 5.984 0 0 1 5.756 4.28 2.977 2.977 0 0 0 2.01 1.99 5.934 5.934 0 0 1 .778 11.09.976.976 0 0 0-.531.888.988.988 0 0 0 1.388.915c4.134-1.987 6.38-7.214 2.88-12.264a6.935 6.935 0 0 0-3.868-2.52Z" }),
        React.createElement("path", { d: "M18.707 16.707a1 1 0 0 0 0-1.414l-1.586-1.586a3 3 0 0 0-4.242 0l-1.586 1.586a1 1 0 0 0 1.414 1.414L14 15.414V23a1 1 0 0 0 2 0v-7.586l1.293 1.293a1 1 0 0 0 1.414 0Z" })));
}

function Cloud(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.792 7.212A8 8 0 0 0 2 9a7.915 7.915 0 0 0 .9 3.671A5.49 5.49 0 0 0 5.5 23H16a8 8 0 0 0 1.792-15.788ZM16 21H5.5a3.491 3.491 0 0 1-.872-6.874 1 1 0 0 0 .554-1.564A5.936 5.936 0 0 1 4 9a6 6 0 0 1 11.94-.8 1 1 0 0 0 .858.86A6 6 0 0 1 16 21Z" })));
}

function Clouds(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M3 21.123a1 1 0 0 1-.567-.177 5.37 5.37 0 0 1 .51-9.3 7.648 7.648 0 0 1-.8-5.179 8 8 0 0 1 15.49-.841 1.085 1.085 0 0 0 .722.733 7.982 7.982 0 0 1 5.312 5.354 1 1 0 0 1-1.916.572 5.988 5.988 0 0 0-3.983-4.014 3.1 3.1 0 0 1-2.044-2.051 6 6 0 1 0-11.06 4.512 1.994 1.994 0 0 1-.792 2.687 3.37 3.37 0 0 0-.3 5.881A1 1 0 0 1 3 21.123ZM19.1 24a5.322 5.322 0 0 0 1.062-.158 4.946 4.946 0 0 0 3.7-3.7 5.012 5.012 0 0 0-3.557-6s-.629-.145-.766-.471a6 6 0 0 0-11.367.856 6.38 6.38 0 0 0-.057 2.732 3.5 3.5 0 0 0 .451 6.589A3.8 3.8 0 0 0 9.4 24Zm-1.4-9.556a2.647 2.647 0 0 0 2.088 1.633 3.02 3.02 0 0 1 2.132 3.62 2.978 2.978 0 0 1-2.2 2.194 3.27 3.27 0 0 1-.655.082c-1.665.033-8.271.038-9.6 0a1.709 1.709 0 0 1-.379-.055A1.471 1.471 0 0 1 8.057 20.9a1.493 1.493 0 0 1 .85-1.795 2.017 2.017 0 0 0 1.18-2.305 3.991 3.991 0 0 1 .031-1.792 4 4 0 0 1 7.577-.562Z" })));
}

function Cocktail(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.517 2.087A4.01 4.01 0 0 0 20 0H4A4.01 4.01 0 0 0 .483 2.087a3.912 3.912 0 0 0 .132 4.04A13.555 13.555 0 0 0 11 11.965V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4V11.965a13.555 13.555 0 0 0 10.385-5.838 3.912 3.912 0 0 0 .132-4.04ZM4 2h16a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2Zm8 8a12.006 12.006 0 0 1-8.989-4h17.978A12 12 0 0 1 12 10Z" })));
}

function Coffee(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 5a3 3 0 0 0-3-3h-.171A3.006 3.006 0 0 0 17 0H7a3.006 3.006 0 0 0-2.829 2H4a3 3 0 0 0-1.978 5.238L3.57 19.62A5.007 5.007 0 0 0 8.531 24h6.938a5.008 5.008 0 0 0 4.961-4.38l1.548-12.382A2.981 2.981 0 0 0 23 5Zm-3.883 9h-3.2c-.892-5.287-6.947-5.284-7.838 0h-3.2l-.75-6h15.738ZM14 15c-.105 3.954-3.895 3.953-4 0 .105-3.954 3.9-3.953 4 0ZM4 4h1a1 1 0 0 0 1-1 1 1 0 0 1 1-1h10a1 1 0 0 1 1 1 1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm14.445 15.372A3 3 0 0 1 15.469 22H8.531a3 3 0 0 1-2.977-2.628L5.133 16h2.948c.892 5.287 6.948 5.284 7.838 0h2.948Z" })));
}

function CommentAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2.9l4.451 3.763a1 1 0 0 0 1.292 0L17.1 20H20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 16a2 2 0 0 1-2 2h-2.9a2 2 0 0 0-1.291.473L12 21.69l-3.807-3.217A2 2 0 0 0 6.9 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" }),
        React.createElement("path", { d: "M7 7h5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM17 9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2ZM17 13H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" })));
}

function CommentCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.5 17a2 2 0 0 1-1.416-.586L5.3 12.715a1 1 0 0 1 1.4-1.43l3.793 3.707 6.806-6.7a1 1 0 0 1 1.4 1.424l-6.793 6.707A1.983 1.983 0 0 1 10.5 17ZM24 19v-6.66A12.209 12.209 0 0 0 12.836.028 12 12 0 0 0 .029 12.854C.471 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5ZM12.7 2.024A10.2 10.2 0 0 1 22 12.34V19a3 3 0 0 1-3 3h-5.917C7.049 22 2.4 18.1 2.025 12.716A10 10 0 0 1 12.016 2c.227 0 .456.009.684.024Z" })));
}

function CommentHeart(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.5 7a3.514 3.514 0 0 0-2.5.99 3.567 3.567 0 0 0-6 2.71c0 3.256 4.874 6.736 5.43 7.121a1 1 0 0 0 1.14 0c.556-.385 5.43-3.865 5.43-7.121A3.608 3.608 0 0 0 14.5 7ZM12 15.762c-1.741-1.33-4-3.56-4-5.062-.076-2.006 2.913-2.4 3-.246V11a1 1 0 0 0 2 0v-.546c.087-2.152 3.076-1.76 3 .246 0 1.5-2.259 3.732-4 5.062ZM12.836.028A12 12 0 0 0 .03 12.854C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5v-6.66A12.21 12.21 0 0 0 12.836.028ZM22 19a3 3 0 0 1-3 3h-5.917C7.049 22 2.4 18.1 2.025 12.716A10 10 0 0 1 12.7 2.024 10.2 10.2 0 0 1 22 12.34Z" })));
}

function CommentInfo(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.5 6.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0ZM24 19v-6.66A12.209 12.209 0 0 0 12.836.028 12 12 0 0 0 .029 12.854C.471 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5ZM12.7 2.024A10.2 10.2 0 0 1 22 12.34V19a3 3 0 0 1-3 3h-5.917C7.049 22 2.4 18.1 2.025 12.716A10 10 0 0 1 12.016 2c.227 0 .456.009.684.024ZM14 18v-6a2 2 0 0 0-2-2h-1a1 1 0 0 0 0 2h1v6a1 1 0 0 0 2 0Z" })));
}

function CommentUser(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 10a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm-3.032 5.249a3.183 3.183 0 0 1 6.063 0 1 1 0 0 0 1.938-.5c-1.311-4.947-8.63-4.945-9.937 0a1 1 0 1 0 1.936.5Zm3.041 8.416a2.01 2.01 0 0 1-1.338-.509L6.923 20H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-2.853L13.3 23.18a1.94 1.94 0 0 1-1.291.485ZM4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.289a1 1 0 0 1 .644.235l4.046 3.41 4.172-3.416a1 1 0 0 1 .637-.229H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" })));
}

function Comment(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.247A12.012 12.012 0 1 0 12.017 24H19a5.005 5.005 0 0 0 5-5v-7.753ZM22 19a3 3 0 0 1-3 3h-6.983a10.041 10.041 0 0 1-7.476-3.343 9.917 9.917 0 0 1-2.476-7.814 10.043 10.043 0 0 1 8.656-8.761 10.564 10.564 0 0 1 1.3-.082A9.921 9.921 0 0 1 18.4 4.3a10.041 10.041 0 0 1 3.6 7.042Z" }),
        React.createElement("path", { d: "M8 9h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2ZM16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2ZM16 15H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" })));
}

function Comments(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 16v5a3 3 0 0 1-3 3h-5a8 8 0 0 1-6.92-4 10.968 10.968 0 0 0 2.242-.248A5.988 5.988 0 0 0 16 22h5a1 1 0 0 0 1-1v-5a5.988 5.988 0 0 0-2.252-4.678A10.968 10.968 0 0 0 20 9.08 8 8 0 0 1 24 16Zm-6.023-6.349A9 9 0 0 0 8.349.023 9.418 9.418 0 0 0 0 9.294v5.04C0 16.866 1.507 18 3 18h5.7a9.419 9.419 0 0 0 9.277-8.349Zm-4.027-5.6a7.018 7.018 0 0 1 2.032 5.46A7.364 7.364 0 0 1 8.7 16H3c-.928 0-1-1.275-1-1.666v-5.04a7.362 7.362 0 0 1 6.49-7.276Q8.739 2 8.988 2a7.012 7.012 0 0 1 4.962 2.051Z" })));
}

function CompressAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.293 2.091 5.4 3.985 1.707.293A1 1 0 0 0 .293 1.707L3.985 5.4 2.091 7.293A1 1 0 0 0 2.8 9h4.764A1.436 1.436 0 0 0 9 7.564V2.8a1 1 0 0 0-1.707-.709ZM20.015 18.6l1.894-1.894A1 1 0 0 0 21.2 15h-4.764A1.436 1.436 0 0 0 15 16.436V21.2a1 1 0 0 0 1.707.708l1.893-1.893 3.692 3.692a1 1 0 0 0 1.414-1.414ZM16.436 9H21.2a1 1 0 0 0 .708-1.707L20.015 5.4l3.692-3.692A1 1 0 0 0 22.293.293L18.6 3.985l-1.893-1.894A1 1 0 0 0 15 2.8v4.764A1.436 1.436 0 0 0 16.436 9ZM7.564 15H2.8a1 1 0 0 0-.708 1.707L3.985 18.6.293 22.293a1 1 0 1 0 1.414 1.414L5.4 20.015l1.894 1.894A1 1 0 0 0 9 21.2v-4.764A1.436 1.436 0 0 0 7.564 15Z" })));
}

function Compress(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 0a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3H1a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5V1a1 1 0 0 0-1-1ZM23 16h-2a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2ZM21 8h2a1 1 0 0 0 0-2h-2a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5ZM3 16H1a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5Z" })));
}

function Computer(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5ZM5 3h14a3 3 0 0 1 3 3v7H2V6a3 3 0 0 1 3-3Zm14 14H5a3 3 0 0 1-2.816-2h19.632A3 3 0 0 1 19 17Z" })));
}

function Confetti(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 5, cy: 13, r: 1 }),
        React.createElement("circle", { cx: 1, cy: 9, r: 1 }),
        React.createElement("circle", { cx: 5, cy: 5, r: 1 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1 }),
        React.createElement("circle", { cx: 23, cy: 13, r: 1 }),
        React.createElement("circle", { cx: 19, cy: 9, r: 1 }),
        React.createElement("circle", { cx: 23, cy: 5, r: 1 }),
        React.createElement("circle", { cx: 19, cy: 1, r: 1 }),
        React.createElement("circle", { cx: 14, cy: 23, r: 1 }),
        React.createElement("circle", { cx: 10, cy: 19, r: 1 }),
        React.createElement("circle", { cx: 14, cy: 15, r: 1 }),
        React.createElement("circle", { cx: 10, cy: 11, r: 1 }),
        React.createElement("path", { d: "M15 3a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM7 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM23 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2Z" })));
}

function Cookie(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 9.5, cy: 9.5, r: 1.5 }),
        React.createElement("circle", { cx: 18.5, cy: 1.5, r: 1.5 }),
        React.createElement("circle", { cx: 21.5, cy: 6.5, r: 1.5 }),
        React.createElement("circle", { cx: 9.5, cy: 14.5, r: 1.5 }),
        React.createElement("circle", { cx: 14.5, cy: 14.5, r: 1.5 }),
        React.createElement("path", { d: "M23.943 10.854a1 1 0 0 0-.9-.9A10 10 0 0 1 14.048.958a1 1 0 0 0-.9-.9A11.797 11.797 0 0 0 12 0a12 12 0 1 0 12 12c0-.387-.021-.769-.057-1.146ZM12 22a10 10 0 0 1 0-20h.17A12.006 12.006 0 0 0 22 11.83V12a10.011 10.011 0 0 1-10 10Z" })));
}

function CopyAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 20a5.006 5.006 0 0 0 5-5V6.243a3.972 3.972 0 0 0-1.172-2.829l-2.242-2.242A3.972 3.972 0 0 0 11.757 0H7a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5zm-9-5V5a3 3 0 0 1 3-3s4.919.014 5 .024V4a2 2 0 0 0 2 2h1.976c.01.081.024 9 .024 9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm18-7v11a5.006 5.006 0 0 1-5 5H8a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3V8a1 1 0 0 1 2 0z" })));
}

function Copy(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 20H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h10a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm19 17V6a1 1 0 0 0-2 0v13a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h13a5.006 5.006 0 0 0 5-5z" })));
}

function Copyright(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" }),
        React.createElement("path", { d: "M15.536 8.464A1 1 0 0 0 16.95 7.05a7 7 0 1 0 0 9.9 1 1 0 0 0-1.414-1.414 5 5 0 1 1 0-7.072Z" })));
}

function Cow(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.63 3.845A2.024 2.024 0 0 0 21.988 3h-3.544c.519-.847 1.1-2.892-.444-3a1 1 0 0 0-1 1 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 1 1 0 0 0-1-1c-1.548.109-.962 2.152-.444 3H2.012A2.008 2.008 0 0 0 .1 5.614a6.9 6.9 0 0 0 2.919 3.525c0 .035 3 12.065 3 12.065A2.994 2.994 0 0 0 9 24h6a2.994 2.994 0 0 0 2.979-2.8s3-12.03 3-12.065a6.9 6.9 0 0 0 2.921-3.52 1.937 1.937 0 0 0-.27-1.77Zm-5.25 4.117A5.108 5.108 0 0 0 13 13v5h-2v-5a5.108 5.108 0 0 0-5.38-5.038A9.858 9.858 0 0 1 8.342 4.99l7.3.01a9.812 9.812 0 0 1 2.738 2.962ZM2.012 5h3.321a12.177 12.177 0 0 0-1.6 2.221A4.709 4.709 0 0 1 2.012 5ZM6 10a2.974 2.974 0 0 1 1.032.194 1.507 1.507 0 0 0 1.774 1.774A2.974 2.974 0 0 1 9 13v5a2.974 2.974 0 0 0-1.6.472L5.263 9.929A5.427 5.427 0 0 0 6 10Zm9 12H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm1.6-3.528A2.974 2.974 0 0 0 15 18v-5a2.974 2.974 0 0 1 .194-1.032 1.507 1.507 0 0 0 1.774-1.774 7.779 7.779 0 0 1 1.769-.265Zm3.664-11.257a12.087 12.087 0 0 0-1.615-2.24L22 4.97a4.779 4.779 0 0 1-1.736 2.245Z" })));
}

function Cream(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 12.184V11a3 3 0 0 0-2-2.816A14.458 14.458 0 0 0 18.15.809a1.948 1.948 0 0 0-1.717-.818 2.035 2.035 0 0 0-1.664 1.074C14 2.476 13.24 3 11.962 3H10a5.676 5.676 0 0 0-5.939 5.165A3 3 0 0 0 2 11v1.184A3 3 0 0 0 0 15v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a3 3 0 0 0-2-2.816ZM10 5h1.962a4.952 4.952 0 0 0 4.566-3.022A12.409 12.409 0 0 1 18 8H6.131A3.658 3.658 0 0 1 10 5Zm-6 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4Zm18 8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z" })));
}

function CreditCard(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 5.5, cy: 15.5, r: 1.5 }),
        React.createElement("path", { d: "M19 3H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5ZM5 5h14a3 3 0 0 1 3 3H2a3 3 0 0 1 3-3Zm14 14H5a3 3 0 0 1-3-3v-6h20v6a3 3 0 0 1-3 3Z" })));
}

function Croissant(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.375 3.785a13.448 13.448 0 0 0-4.847-1.639A4.013 4.013 0 0 0 16.473.862a3.966 3.966 0 0 0-3.391-.753A17.955 17.955 0 0 0 9.463 1.45a4.666 4.666 0 0 0-5.063.691c-.367.315-.736.644-1.1.983-.382.359-.771.767-1.159 1.21a4.655 4.655 0 0 0-1.03 4.12 4.753 4.753 0 0 0 .341.984A18.173 18.173 0 0 0 .1 13.082a3.958 3.958 0 0 0 .753 3.391 4 4 0 0 0 1.3 1.062 13.45 13.45 0 0 0 1.638 4.84 3.168 3.168 0 0 0 3.431 1.557 3.259 3.259 0 0 0 2.61-2.876A16.488 16.488 0 0 1 10.84 17.3s.545-.336.794-.539a3.717 3.717 0 0 0 1.216-1.941 3.141 3.141 0 0 0 1.228-.755 3.176 3.176 0 0 0 .744-1.211 3.715 3.715 0 0 0 1.934-1.215c.2-.249.54-.795.54-.795a15.346 15.346 0 0 1 3.76-1.013 3.259 3.259 0 0 0 2.876-2.61 3.161 3.161 0 0 0-1.557-3.436ZM7.839 20.833a1.274 1.274 0 0 1-1.027 1.14 1.169 1.169 0 0 1-1.291-.59A11.5 11.5 0 0 1 4.244 18h3.9c.109 0 .215-.022.323-.028-.286.883-.628 2.857-.628 2.861Zm2.53-5.626A3.525 3.525 0 0 1 8.146 16H4a2 2 0 0 1-1.579-.767 1.973 1.973 0 0 1-.377-1.689 14.866 14.866 0 0 1 .8-2.359 4.652 4.652 0 0 0 1.006.6l6.677 2.924c.062.029.128.04.191.064a1.567 1.567 0 0 1-.349.434Zm2.285-2.552a1.151 1.151 0 0 1-1.308.234L4.653 9.958a2.75 2.75 0 0 1-1.585-1.941 2.675 2.675 0 0 1 .586-2.368c.346-.394.688-.754 1.023-1.069s.682-.625 1.027-.92a2.685 2.685 0 0 1 4.226.957l2.964 6.69a1.222 1.222 0 0 1-.24 1.348ZM16 8.146a3.524 3.524 0 0 1-.792 2.223 1.585 1.585 0 0 1-.411.339c-.026-.07-.045-.142-.075-.211l-2.963-6.689a4.811 4.811 0 0 0-.562-.957 14.914 14.914 0 0 1 2.347-.8 1.971 1.971 0 0 1 1.689.377A2 2 0 0 1 16 4.011Zm5.973-1.334a1.274 1.274 0 0 1-1.14 1.027s-1.978.342-2.861.63c.007-.108.028-.214.028-.323v-3.9a11.5 11.5 0 0 1 3.383 1.277 1.172 1.172 0 0 1 .59 1.289Z" })));
}

function CrossCircle(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 8a1 1 0 0 0-1.414 0L12 10.586 9.414 8A1 1 0 0 0 8 9.414L10.586 12 8 14.586A1 1 0 0 0 9.414 16L12 13.414 14.586 16A1 1 0 0 0 16 14.586L13.414 12 16 9.414A1 1 0 0 0 16 8Z" }),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" })));
}

function CrossSmall(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 6a1 1 0 0 0 0 1.414L10.586 12 6 16.586A1 1 0 0 0 6 18a1 1 0 0 0 1.414 0L12 13.414 16.586 18A1 1 0 0 0 18 18a1 1 0 0 0 0-1.414L13.414 12 18 7.414A1 1 0 0 0 18 6Z" })));
}

function Cross(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z" })));
}

function Crown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.766 4.566a1.994 1.994 0 0 0-2.18.434L18 7.586 13.414 3a2 2 0 0 0-2.828 0L6 7.586 3.414 5A2 2 0 0 0 0 6.414V17a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6.414a2 2 0 0 0-1.234-1.848ZM22 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.414l3.293 3.293a1 1 0 0 0 1.414 0L12 4.414l5.293 5.293a1 1 0 0 0 1.414 0L22 6.414Z" })));
}

function Cube(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.527 4.217 14.5.737a5.015 5.015 0 0 0-5 0l-6.027 3.48a5.014 5.014 0 0 0-2.5 4.33v6.96a5.016 5.016 0 0 0 2.5 4.331L9.5 23.317a5.012 5.012 0 0 0 5 0l6.027-3.479a5.016 5.016 0 0 0 2.5-4.331v-6.96a5.014 5.014 0 0 0-2.5-4.33ZM10.5 2.47a3 3 0 0 1 3 0l6.027 3.479a2.945 2.945 0 0 1 .429.33l-6.193 3.575a3.53 3.53 0 0 1-3.526 0L4.044 6.279a2.945 2.945 0 0 1 .429-.33ZM4.473 18.105a3.008 3.008 0 0 1-1.5-2.6V8.547a2.893 2.893 0 0 1 .071-.535l6.193 3.575a5.491 5.491 0 0 0 1.763.635v9.569a2.892 2.892 0 0 1-.5-.206Zm16.554-2.6a3.008 3.008 0 0 1-1.5 2.6l-6.027 3.48a2.892 2.892 0 0 1-.5.206v-9.569a5.491 5.491 0 0 0 1.763-.635l6.193-3.575a2.893 2.893 0 0 1 .071.535Z" })));
}

function Cupcake(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.679 11.408a12.057 12.057 0 0 0-8.968-7.144 2.994 2.994 0 1 0-5.422 0 12.058 12.058 0 0 0-8.965 7.144 4.04 4.04 0 0 0 .353 3.811 3.989 3.989 0 0 0 1.4 1.284l.6 3.372A4.993 4.993 0 0 0 7.6 24h8.8a4.991 4.991 0 0 0 4.922-4.125l.6-3.371a3.975 3.975 0 0 0 1.4-1.284 4.043 4.043 0 0 0 .357-3.812ZM12 2a1 1 0 0 1 0 2 1 1 0 0 1 0-2Zm7.357 17.525A3 3 0 0 1 16.4 22H7.6a3 3 0 0 1-2.954-2.475l-.371-2.08A3 3 0 0 0 8 17.22a2.99 2.99 0 0 0 4 0 2.99 2.99 0 0 0 4 0 3 3 0 0 0 3.728.225Zm2.3-5.413A1.956 1.956 0 0 1 20 15a1.645 1.645 0 0 0-1.22.625 1.01 1.01 0 0 1-1.56 0 1.529 1.529 0 0 0-2.44 0 1.01 1.01 0 0 1-1.56 0 1.529 1.529 0 0 0-2.44 0 1.01 1.01 0 0 1-1.56 0 1.529 1.529 0 0 0-2.44 0 1.01 1.01 0 0 1-1.56 0A1.643 1.643 0 0 0 4 15a1.955 1.955 0 0 1-1.656-.888 2.016 2.016 0 0 1-.177-1.928c3.267-8.2 16.4-8.2 19.668 0a2.016 2.016 0 0 1-.177 1.928Z" })));
}

function CursorFinger(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.98 9.376 12 8.18V3.107A3.081 3.081 0 0 0 9.5.041 3 3 0 0 0 6 3v6.661L3.211 13.3a5.021 5.021 0 0 0 .249 6.794l2.4 2.425A5.036 5.036 0 0 0 9.414 24H17a5.006 5.006 0 0 0 5-5v-4.721a5.013 5.013 0 0 0-4.02-4.903ZM20 19a3 3 0 0 1-3 3H9.414a3.022 3.022 0 0 1-2.134-.891l-2.4-2.428a3.03 3.03 0 0 1-.116-4.123L6 12.945V17a1 1 0 0 0 2 0V3a1 1 0 0 1 1.176-.985A1.082 1.082 0 0 1 10 3.107V9a1 1 0 0 0 .8.98l6.784 1.357A3.01 3.01 0 0 1 20 14.279Z" })));
}

function CursorPlus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm4-6a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zM12 4.981a1 1 0 0 0-.586-.891L2.739.146a.893.893 0 0 0-.09-.037A1.99 1.99 0 0 0 .588.588a2.011 2.011 0 0 0-.442 2.151l3.944 8.675a1 1 0 0 0 .891.586H5a1 1 0 0 0 .895-.553l1.85-3.7 3.7-1.85A1 1 0 0 0 12 4.981zM6.553 6.105a1 1 0 0 0-.448.448L5.041 8.681 2 2.005l6.679 3.038z" })));
}

function CursorTextAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 17.351V6.649A3.492 3.492 0 1 0 17.351 2H6.649A3.492 3.492 0 1 0 2 6.649v10.7A3.492 3.492 0 1 0 6.649 22h10.7A3.492 3.492 0 1 0 22 17.351ZM17.051 20H6.949A3.485 3.485 0 0 0 4 17.051V6.949A3.485 3.485 0 0 0 6.949 4h10.1A3.485 3.485 0 0 0 20 6.949v10.1A3.485 3.485 0 0 0 17.051 20ZM20.5 2A1.5 1.5 0 1 1 19 3.5 1.5 1.5 0 0 1 20.5 2Zm-17 0A1.5 1.5 0 1 1 2 3.5 1.5 1.5 0 0 1 3.5 2Zm0 20A1.5 1.5 0 1 1 5 20.5 1.5 1.5 0 0 1 3.5 22Zm17 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM13 9v3h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 0 1 1 1 1 0 0 1 0 2 2.981 2.981 0 0 1-2-.78 2.981 2.981 0 0 1-2 .78 1 1 0 0 1 0-2 1 1 0 0 0 1-1v-1h-1a1 1 0 0 1 0-2h1V9a1 1 0 0 0-1-1 1 1 0 0 1 0-2 2.981 2.981 0 0 1 2 .78A2.981 2.981 0 0 1 14 6a1 1 0 0 1 0 2 1 1 0 0 0-1 1Z" })));
}

function CursorText(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 22h-2a3 3 0 0 1-3-3v-3h3a1 1 0 0 0 0-2h-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2h-2a4.982 4.982 0 0 0-4 2.031A4.982 4.982 0 0 0 8 0H6a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v9H8a1 1 0 0 0 0 2h3v3a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h2a4.982 4.982 0 0 0 4-2.031A4.982 4.982 0 0 0 16 24h2a1 1 0 0 0 0-2Z" })));
}

function Cursor(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.008 24a3.007 3.007 0 0 1-2.681-1.636L9.2 15.66l-3.542 3.093A1 1 0 0 1 4 18V2.98A3 3 0 0 1 8.989.734l10.7 10.238a1 1 0 0 1-.6 1.719l-4.468.407 3.065 6.569A3 3 0 0 1 15.008 24zM9.543 13.032a1.039 1.039 0 0 1 .207.021 1 1 0 0 1 .7.556l3.675 7.876a1 1 0 0 0 1.767-.94l-3.682-7.891a1 1 0 0 1 .815-1.419l3.7-.337-9.091-8.692a.972.972 0 0 0-1.045-.138A.986.986 0 0 0 6 2.98V15.8l2.885-2.52a1 1 0 0 1 .658-.248z" })));
}

function Dart(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0h-1.757a3.975 3.975 0 0 0-2.829 1.172l-3.242 3.242A4.022 4.022 0 0 0 11 7.242v3.463c-3.266 2.415-7.581 5.633-8.121 6.174a2.993 2.993 0 0 0-.577 3.4L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L3.714 21.7a2.965 2.965 0 0 0 3.407-.579C7.662 20.58 10.88 16.266 13.3 13h3.462a3.975 3.975 0 0 0 2.829-1.172l3.242-3.242A4.022 4.022 0 0 0 24 5.758V4a4 4 0 0 0-4-4zM5.707 19.707a1.021 1.021 0 0 1-1.414 0 1 1 0 0 1 0-1.414c.339-.336 3-2.343 5.948-4.534-2.192 2.947-4.199 5.61-4.534 5.948zM22 5.758a2.011 2.011 0 0 1-.586 1.414l-3.242 3.242a1.99 1.99 0 0 1-1.415.586h-1.986l.991-1.348 3.945-3.945a1 1 0 1 0-1.414-1.414l-3.944 3.944L13 9.229V7.242a2.011 2.011 0 0 1 .586-1.414l3.242-3.242A1.99 1.99 0 0 1 18.243 2H20a2 2 0 0 1 2 2z" })));
}

function Dashboard(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.9 11.437A12 12 0 0 0 0 13a11.878 11.878 0 0 0 3.759 8.712A4.84 4.84 0 0 0 7.113 23h9.767a4.994 4.994 0 0 0 3.509-1.429A11.944 11.944 0 0 0 23.9 11.437Zm-4.909 8.7A3 3 0 0 1 16.88 21H7.113a2.862 2.862 0 0 1-1.981-.741A9.9 9.9 0 0 1 2 13a10.014 10.014 0 0 1 3.338-7.457A9.881 9.881 0 0 1 11.986 3a10.553 10.553 0 0 1 1.174.066 9.994 9.994 0 0 1 5.831 17.076ZM7.807 17.285a1 1 0 0 1-1.4 1.43A8 8 0 0 1 12 5a8.072 8.072 0 0 1 1.143.081 1 1 0 0 1 .847 1.133.989.989 0 0 1-1.133.848 6 6 0 0 0-5.05 10.223Zm12.112-5.428A8.072 8.072 0 0 1 20 13a7.931 7.931 0 0 1-2.408 5.716 1 1 0 0 1-1.4-1.432 5.98 5.98 0 0 0 1.744-5.141 1 1 0 0 1 1.981-.286Zm-5.993.631a2.033 2.033 0 1 1-1.414-1.414l3.781-3.781a1 1 0 1 1 1.414 1.414Z" })));
}

function DataTransfer(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M8 0H4a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1v2H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H7V9h1a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm2 5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm10 6h-2a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4zm2 9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM14 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1zm-2 16a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1zm8 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" })));
}

function Database(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.5A4.476 4.476 0 0 0 22.294 8 4.481 4.481 0 0 0 19.5 0h-15a4.481 4.481 0 0 0-2.794 8 4.443 4.443 0 0 0 0 7A4.481 4.481 0 0 0 4.5 23h15a4.481 4.481 0 0 0 2.794-8A4.476 4.476 0 0 0 24 11.5zm-22-7A2.5 2.5 0 0 1 4.5 2H5v1a1 1 0 0 0 2 0V2h2v1a1 1 0 0 0 2 0V2h8.5a2.5 2.5 0 0 1 0 5h-15A2.5 2.5 0 0 1 2 4.5zm20 14a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1 0-5H5v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h8.5a2.5 2.5 0 0 1 2.5 2.5zM4.5 14a2.5 2.5 0 0 1 0-5H5v1a1 1 0 0 0 2 0V9h2v1a1 1 0 0 0 2 0V9h8.5a2.5 2.5 0 0 1 0 5z" })));
}

function Delete(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 2H9.956A4.966 4.966 0 0 0 6.01 3.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455A4.966 4.966 0 0 0 9.956 22H19a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5zm3 15a3 3 0 0 1-3 3H9.956a2.979 2.979 0 0 1-2.368-1.158L2.267 12l5.321-6.842A2.979 2.979 0 0 1 9.956 4H19a3 3 0 0 1 3 3zm-4.793-6.793L15.414 12l1.793 1.793a1 1 0 1 1-1.414 1.414L14 13.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L12.586 12l-1.793-1.793a1 1 0 0 1 1.414-1.414L14 10.586l1.793-1.793a1 1 0 0 1 1.414 1.414z" })));
}

function Diamond(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.22 5.743-3.011-4.068A4.005 4.005 0 0 0 16.955 0h-9.91A4 4 0 0 0 3.8 1.656L.735 5.753a3.993 3.993 0 0 0 .123 4.784L9.65 22.865A2.985 2.985 0 0 0 12 24a3.006 3.006 0 0 0 2.378-1.175L23.1 10.634a4 4 0 0 0 .12-4.891zm-4.628-2.892 3.018 4.078c.016.022.02.048.036.071h-4.892l-1.428-5h1.629a2.012 2.012 0 0 1 1.637.851zM12 19.118 9.3 9h5.4zM9.326 7l1.428-5h2.492l1.428 5zM5.417 2.837A2.007 2.007 0 0 1 7.045 2h1.629L7.246 7H2.318c.014-.022.018-.049.034-.07zM2.448 9.325A1.9 1.9 0 0 1 2.263 9h4.969l2.994 11.23zM13.771 20.24l3-11.24h4.986a2.1 2.1 0 0 1-.243.421z" })));
}

function Dice(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm6 10a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM6 7a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM6 17a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1z" })));
}

function Diploma(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm6-3a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zM8 6h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1-1.231.51L18 23.019l-.769.768a.721.721 0 0 1-1.231-.51v-3.833A3.987 3.987 0 0 1 18 12a3.939 3.939 0 0 1 1 .142V5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1-1 6.062zM20 16a2 2 0 1 0-2 2 2 2 0 0 0 2-2z" })));
}

function DiscoBall(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 4.051V2h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h2v2.051a10 10 0 1 0 2 0Zm3 11.619v-3.34c2.634.468 4 1.308 4 1.67s-1.366 1.2-4 1.67ZM4 14c0-.362 1.366-1.2 4-1.67v3.34C5.366 15.2 4 14.362 4 14Zm6-1.922a25.354 25.354 0 0 1 4 0v3.844a25.354 25.354 0 0 1-4 0ZM12 6a7.953 7.953 0 0 1 2 .263v3.812c-.664-.049-1.335-.075-2-.075s-1.336.026-2 .075V6.263A7.953 7.953 0 0 1 12 6Zm7.5 5.236A14.946 14.946 0 0 0 16 10.3V7.082a8.042 8.042 0 0 1 3.5 4.154ZM8 7.082V10.3a14.946 14.946 0 0 0-3.5.933A8.042 8.042 0 0 1 8 7.082Zm-3.5 9.682A14.946 14.946 0 0 0 8 17.7v3.221a8.042 8.042 0 0 1-3.5-4.157Zm5.5 4.973v-3.812c.664.049 1.335.075 2 .075s1.336-.026 2-.075v3.812a7.736 7.736 0 0 1-4 0Zm6-.819V17.7a14.946 14.946 0 0 0 3.5-.933 8.042 8.042 0 0 1-3.5 4.151Z" })));
}

function Disk(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 10a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" }),
        React.createElement("path", { d: "m22.536 4.122-2.658-2.658A4.966 4.966 0 0 0 16.343 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7.657a4.966 4.966 0 0 0-1.464-3.535ZM17 2.08V3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V2h9.343a2.953 2.953 0 0 1 .657.08ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3v1a5.006 5.006 0 0 0 5 5h4a4.991 4.991 0 0 0 4.962-4.624l2.16 2.16A3.02 3.02 0 0 1 22 7.657Z" })));
}

function Doctor(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 5h-3V4a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0-5-5zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm12 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-6-4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z" })));
}

function DocumentSigned(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m19.535 3.122-1.656-1.658A4.968 4.968 0 0 0 14.343 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V6.657a4.968 4.968 0 0 0-1.465-3.535zm-1.414 1.414A2.932 2.932 0 0 1 18.5 5H16V2.5a3.1 3.1 0 0 1 .465.38zM19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6v3a2 2 0 0 0 2 2h3zM16 9a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm1 5a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-.192 3.413a1 1 0 0 1-.217 1.394A6.464 6.464 0 0 1 13.135 20a3.252 3.252 0 0 1-2-.7c-.328-.225-.453-.3-.7-.3a3.951 3.951 0 0 0-1.832.794 1 1 0 0 1-1.214-1.588A5.861 5.861 0 0 1 10.439 17a3.025 3.025 0 0 1 1.832.655 1.347 1.347 0 0 0 .864.345 4.586 4.586 0 0 0 2.277-.809 1 1 0 0 1 1.396.222z" })));
}

function Document(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 14a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486A6.951 6.951 0 0 1 22 10.485zm-6.949-7.021A5.01 5.01 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0-.781-1.05zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" })));
}

function Dollar(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.932 4A3.071 3.071 0 0 1 17 7.068a1 1 0 0 0 2 0v-.123A5.073 5.073 0 0 0 13.932 2H13V1a1 1 0 0 0-2 0v1h-.932a5.068 5.068 0 0 0-1.6 9.875L11 12.72V20h-.932A3.071 3.071 0 0 1 7 16.932a1 1 0 0 0-2 0v.123A5.073 5.073 0 0 0 10.068 22H11v1a1 1 0 0 0 2 0v-1h.932a5.068 5.068 0 0 0 1.6-9.875L13 11.28V4Zm.97 10.021a3.068 3.068 0 0 1-.97 5.979H13v-6.613ZM11 10.613l-1.9-.634A3.068 3.068 0 0 1 10.068 4H11Z" })));
}

function Download(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9.878 18.122a3 3 0 0 0 4.244 0l3.211-3.211a1 1 0 0 0-1.414-1.411l-2.926 2.927L13 1a1 1 0 0 0-1-1 1 1 0 0 0-1 1l-.009 15.408-2.91-2.908a1 1 0 0 0-1.414 1.415Z" }),
        React.createElement("path", { d: "M23 16a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z" })));
}

function DrinkAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.341 5.125A2.985 2.985 0 0 0 19 4h-4.327l.127-1.11a1 1 0 0 1 .99-.89H20a1 1 0 0 0 0-2h-4.21a3 3 0 0 0-2.981 2.669L12.661 4H5a3.02 3.02 0 0 0-2.944 3.556l1.512 12.066A5.008 5.008 0 0 0 8.529 24h6.941a5.01 5.01 0 0 0 4.962-4.379l1.5-11.968a2.982 2.982 0 0 0-.591-2.528ZM19 6a1 1 0 0 1 .781.375 1.068 1.068 0 0 1 .179.937L19.622 10h-5.616l.445-4Zm-14.779.374A1 1 0 0 1 5 6h7.437l-.445 4H4.374l-.35-2.784a.993.993 0 0 1 .197-.842Zm14.226 13A3.005 3.005 0 0 1 15.47 22H8.529a3 3 0 0 1-2.976-2.626L4.626 12h14.745Zm-5.009-4.264-.444 4a1 1 0 1 1-1.988-.22l.444-4a1.014 1.014 0 0 1 1.105-.884 1 1 0 0 1 .883 1.104Z" })));
}

function Drumstick(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 2.5a8.578 8.578 0 0 0-12.075 0c-2.377 2.377-3.157 7.909-3.41 11a4.164 4.164 0 0 0 .585 2.483l-3.8 3.8a1.5 1.5 0 1 0-.649 2.063 1.5 1.5 0 1 0 2.063-.649l3.8-3.8a4.136 4.136 0 0 0 2.484.592c3.086-.253 8.617-1.032 11-3.41A8.577 8.577 0 0 0 21.5 2.5Zm-1.415 10.662c-1.387 1.385-5.029 2.444-9.744 2.831a2.156 2.156 0 0 1-2.334-2.334c.387-4.715 1.446-8.359 2.831-9.744a6.539 6.539 0 1 1 9.247 9.247Z" })));
}

function Duplicate(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.155 3.272 18.871.913A3.02 3.02 0 0 0 16.715 0H12a5.009 5.009 0 0 0-4.9 4H7a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-.1a5.009 5.009 0 0 0 4-4.9V5.36a2.988 2.988 0 0 0-.845-2.088ZM13 22H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3v8a5.006 5.006 0 0 0 5 5h4a3 3 0 0 1-3 3Zm4-5h-5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4v2a2 2 0 0 0 2 2h2v8a3 3 0 0 1-3 3Z" })));
}

function ELearning(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.9 3.091a4 4 0 0 0-5-2.938l-1.724.493A2.981 2.981 0 0 0 12 1.3a2.981 2.981 0 0 0-1.176-.654L9.1.153a4 4 0 0 0-4.995 2.938A5 5 0 0 0 0 8v7a5.006 5.006 0 0 0 5 5h6v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h6a5.006 5.006 0 0 0 5-5V8a5 5 0 0 0-4.1-4.909Zm-6.9.44a1 1 0 0 1 .725-.961l1.725-.493A2 2 0 0 1 18 4v3.938a2.006 2.006 0 0 1-1.45 1.921L13 10.873ZM6.8 2.4a1.993 1.993 0 0 1 1.75-.323l1.725.493a1 1 0 0 1 .725.961v7.342L7.45 9.859A2.006 2.006 0 0 1 6 7.938V4a1.987 1.987 0 0 1 .8-1.6ZM22 15a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 2-2.816v2.754a4.014 4.014 0 0 0 2.9 3.845l3.451.987a6.019 6.019 0 0 0 3.3 0l3.451-.987A4.014 4.014 0 0 0 20 7.938V5.184A3 3 0 0 1 22 8Z" })));
}

function Earnings(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0h-5a1 1 0 0 0 0 2h5a2.951 2.951 0 0 1 1.285.3L.293 22.293a1 1 0 1 0 1.414 1.414L21.7 3.715A2.951 2.951 0 0 1 22 5v5a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" }),
        React.createElement("path", { d: "M6 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM18 14a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function EditAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9.288 13.067c-2.317.446-3.465 3.026-3.963 4.634A1 1 0 0 0 6.281 19H10a3 3 0 0 0 2.988-3.274 3.107 3.107 0 0 0-3.7-2.659Z" }),
        React.createElement("path", { d: "M23 8.979a1 1 0 0 0-1 1V15h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h11.042a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.966 4.966 0 0 0 3.535-1.464l2.658-2.658A4.966 4.966 0 0 0 24 16.343V9.979a1 1 0 0 0-1-1Zm-4.536 12.143a3.022 3.022 0 0 1-1.464.8V18a1 1 0 0 1 1-1h3.925a3.022 3.022 0 0 1-.8 1.464Z" }),
        React.createElement("path", { d: "M14.566 14.17a1 1 0 0 1-.707-1.707l7.853-7.853a.943.943 0 0 0 0-1.335.9.9 0 0 0-.694-.275.933.933 0 0 0-.678.314l-7.6 8.407a1 1 0 0 1-1.484-1.341l7.6-8.4A2.949 2.949 0 0 1 20.963 1a2.985 2.985 0 0 1 2.163.862 2.947 2.947 0 0 1 0 4.163l-7.853 7.853a.993.993 0 0 1-.707.292Z" })));
}

function Edit(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.656.93 6.464 13.122A4.966 4.966 0 0 0 5 16.657V18a1 1 0 0 0 1 1h1.343a4.966 4.966 0 0 0 3.535-1.464L23.07 5.344a3.125 3.125 0 0 0 0-4.414 3.194 3.194 0 0 0-4.414 0Zm3 3L9.464 16.122A3.02 3.02 0 0 1 7.343 17H7v-.343a3.02 3.02 0 0 1 .878-2.121L20.07 2.344a1.148 1.148 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586Z" }),
        React.createElement("path", { d: "M23 8.979a1 1 0 0 0-1 1V15h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9.042a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.968 4.968 0 0 0 24 16.343V9.979a1 1 0 0 0-1-1Zm-4.535 12.143a2.975 2.975 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464Z" })));
}

function EnvelopeBan(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 10a5 5 0 1 0-3.536-1.462A4.99 4.99 0 0 0 19 10Zm2.122-2.876a3 3 0 0 1-3.406.576L21.7 3.716a3 3 0 0 1-.578 3.406Zm-4.244-4.246a3 3 0 0 1 3.406-.578L16.3 6.284a3 3 0 0 1 .578-3.406ZM24 12v7a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8a5.006 5.006 0 0 1 5-5h6a1 1 0 0 1 0 2H5a2.99 2.99 0 0 0-2.639 1.6l7.517 7.518a3.008 3.008 0 0 0 4.244 0l1.87-1.836a1 1 0 0 1 1.4 1.428l-1.864 1.828a5 5 0 0 1-7.065-.006L2 9.071V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a1 1 0 0 1 2 0Z" })));
}

function EnvelopeDownload(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.73 7.7a1 1 0 1 1 1.43-1.4L18 8.181V1a1 1 0 0 1 2 0v7.181L21.84 6.3a1 1 0 0 1 1.43 1.4l-2.515 2.57a2.478 2.478 0 0 1-1.743.73.04.04 0 0 1-.019 0 2.456 2.456 0 0 1-1.74-.722ZM23 11a1 1 0 0 0-1 1v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.071l6.465 6.465a5.025 5.025 0 0 0 7.06.01l1.882-1.829a1 1 0 1 0-1.394-1.434l-1.892 1.839a3.074 3.074 0 0 1-4.242 0L2.361 6.6A2.99 2.99 0 0 1 5 5h7a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-7a1 1 0 0 0-1-1Z" })));
}

function EnvelopeMarker(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 0h-5a2 2 0 0 0-2 2v6.948a2.051 2.051 0 0 0 3.331 1.6l1.169-.935 1.169.936A2.051 2.051 0 0 0 24 8.948V2a2 2 0 0 0-2-2Zm-.081 8.987-1.794-1.435a1 1 0 0 0-1.25 0L17 8.948V2h5ZM24 14v5a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8a5.006 5.006 0 0 1 5-5h7a1 1 0 0 1 0 2H5a2.99 2.99 0 0 0-2.639 1.6l7.517 7.518a3.075 3.075 0 0 0 4.243 0l.858-.837a1 1 0 1 1 1.4 1.43l-.849.829a5.025 5.025 0 0 1-7.062-.008L2 9.071V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5a1 1 0 0 1 2 0Z" })));
}

function EnvelopeOpen(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.459 8.1-6.924-6.636a5.026 5.026 0 0 0-7.055-.015L1.54 8.1A5.028 5.028 0 0 0 0 11.708V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-7.292A5.025 5.025 0 0 0 22.459 8.1ZM9.879 2.878a3.013 3.013 0 0 1 4.258.016l6.747 6.464-6.763 6.764a3.074 3.074 0 0 1-4.242 0L3.115 9.358ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7.292a3.014 3.014 0 0 1 .059-.578l6.406 6.406a5.024 5.024 0 0 0 7.07 0l6.406-6.406a3.014 3.014 0 0 1 .059.578Z" })));
}

function EnvelopePlus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 10v9a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8a5.006 5.006 0 0 1 5-5h8a1 1 0 0 1 0 2H5a2.99 2.99 0 0 0-2.639 1.6l7.517 7.518a3.008 3.008 0 0 0 4.244 0l3.821-3.818a1 1 0 0 1 1.414 1.414l-3.821 3.822a5.008 5.008 0 0 1-7.072 0L2 9.071V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a1 1 0 0 1 2 0Zm-7-5h2v2a1 1 0 0 0 2 0V5h2a1 1 0 0 0 0-2h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2Z" })));
}

function Envelope(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5ZM5 3h14a3 3 0 0 1 2.78 1.887l-7.658 7.659a3.007 3.007 0 0 1-4.244 0L2.22 4.887A3 3 0 0 1 5 3Zm14 18H5a3 3 0 0 1-3-3V7.5l6.464 6.46a5.007 5.007 0 0 0 7.072 0L22 7.5V18a3 3 0 0 1-3 3Z" })));
}

function Euro(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.715 18.363A10 10 0 0 1 4.461 15H15a1 1 0 0 0 0-2H4.051a9.829 9.829 0 0 1 0-2H15a1 1 0 0 0 0-2H4.461a10 10 0 0 1 17.254-3.363 1 1 0 0 0 1.542-1.274A11.989 11.989 0 0 0 2.4 9H1a1 1 0 0 0 0 2h1.051c-.028.331-.051.662-.051 1s.023.669.051 1H1a1 1 0 0 0 0 2h1.4a11.989 11.989 0 0 0 20.862 4.637 1 1 0 0 0-1.542-1.274z" })));
}

function Exclamation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" }),
        React.createElement("path", { d: "M12 5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Z" }),
        React.createElement("rect", { x: 11, y: 17, width: 2, height: 2, rx: 1 })));
}

function Expand(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24h-2a1 1 0 0 1 0-2h2a3 3 0 0 0 3-3v-2a1 1 0 0 1 2 0v2a5.006 5.006 0 0 1-5 5ZM1 8a1 1 0 0 1-1-1V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2H5a3 3 0 0 0-3 3v2a1 1 0 0 1-1 1ZM7 24H5a5.006 5.006 0 0 1-5-5v-2a1 1 0 0 1 2 0v2a3 3 0 0 0 3 3h2a1 1 0 0 1 0 2ZM23 8a1 1 0 0 1-1-1V5a3 3 0 0 0-3-3h-2a1 1 0 0 1 0-2h2a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1Z" })));
}

function EyeCrossed(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.271 9.419A15.866 15.866 0 0 0 19.9 5.51l2.8-2.8a1 1 0 0 0-1.414-1.414l-3.045 3.049A12.054 12.054 0 0 0 12 2.655c-6.191 0-9.719 4.238-11.271 6.764a4.908 4.908 0 0 0 0 5.162A15.866 15.866 0 0 0 4.1 18.49l-2.8 2.8a1 1 0 1 0 1.414 1.414l3.052-3.052A12.054 12.054 0 0 0 12 21.345c6.191 0 9.719-4.238 11.271-6.764a4.908 4.908 0 0 0 0-5.162ZM2.433 13.534a2.918 2.918 0 0 1 0-3.068C3.767 8.3 6.782 4.655 12 4.655a10.1 10.1 0 0 1 4.766 1.165l-2.013 2.013a4.992 4.992 0 0 0-6.92 6.92l-2.31 2.31a13.723 13.723 0 0 1-3.09-3.529ZM15 12a3 3 0 0 1-3 3 2.951 2.951 0 0 1-1.285-.3l3.985-3.985A2.951 2.951 0 0 1 15 12Zm-6 0a3 3 0 0 1 3-3 2.951 2.951 0 0 1 1.285.3L9.3 13.285A2.951 2.951 0 0 1 9 12Zm12.567 1.534C20.233 15.7 17.218 19.345 12 19.345a10.1 10.1 0 0 1-4.766-1.165l2.013-2.013a4.992 4.992 0 0 0 6.92-6.92l2.31-2.31a13.723 13.723 0 0 1 3.09 3.529 2.918 2.918 0 0 1 0 3.068Z" })));
}

function EyeDropper(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.112 5.165a3.025 3.025 0 0 0 0-4.279 3.094 3.094 0 0 0-4.276 0L16.4 3.324c-1.012 1.013-3.123.789-4.579-.013a2.6 2.6 0 0 0-3.057 4.144l1.416 1.416-8.155 8.154a3.455 3.455 0 0 0-.593 4.129L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l1.139-1.139a3.455 3.455 0 0 0 4.129-.593l8.154-8.155 1.416 1.416a2.6 2.6 0 0 0 4.144-3.057c-.8-1.456-1.025-3.568-.013-4.58zM5.56 20.561a1.536 1.536 0 0 1-2.121 0 1.5 1.5 0 0 1 0-2.121l8.155-8.154 2.121 2.121zm13.7-14.376c-1.759 1.759-1.5 4.832-.325 6.958a.578.578 0 0 1-.119.679.621.621 0 0 1-.859 0l-7.779-7.781A.612.612 0 0 1 10.606 5a.522.522 0 0 1 .251.063c2.126 1.17 5.2 1.434 6.958-.325L20.254 2.3a1.045 1.045 0 0 1 1.446 0 1.024 1.024 0 0 1 0 1.449z" })));
}

function Eye(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.271 9.419C21.72 6.893 18.192 2.655 12 2.655S2.28 6.893.729 9.419a4.908 4.908 0 0 0 0 5.162C2.28 17.107 5.808 21.345 12 21.345s9.72-4.238 11.271-6.764a4.908 4.908 0 0 0 0-5.162Zm-1.705 4.115C20.234 15.7 17.219 19.345 12 19.345S3.766 15.7 2.434 13.534a2.918 2.918 0 0 1 0-3.068C3.766 8.3 6.781 4.655 12 4.655s8.234 3.641 9.566 5.811a2.918 2.918 0 0 1 0 3.068Z" }),
        React.createElement("path", { d: "M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" })));
}

function Feather(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.827 1.174A3.968 3.968 0 0 0 19.04.119a31.29 31.29 0 0 0-13.784 7.75A7.757 7.757 0 0 0 3.009 13.7 7.646 7.646 0 0 0 4.578 18L.293 22.293a1 1 0 1 0 1.414 1.414l4.284-4.284A7.446 7.446 0 0 0 10.589 21a8.394 8.394 0 0 0 5.9-2.545c4.4-4.4 6.883-11.446 7.394-13.525a3.931 3.931 0 0 0-1.056-3.756zM5.007 13.608a5.756 5.756 0 0 1 1.665-4.327C7.1 8.856 7.545 8.457 8 8.067v6.519l-1.99 1.99a5.671 5.671 0 0 1-1.003-2.968zm10.038 3.459a5.908 5.908 0 0 1-7.618.92l2.279-2.279L12.414 13h5.762a25.778 25.778 0 0 1-3.131 4.067zm6.9-12.62a29.628 29.628 0 0 1-2.6 6.553h-4.931l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5L10 12.586V6.512a30.354 30.354 0 0 1 9.522-4.451A2.017 2.017 0 0 1 20.006 2a1.99 1.99 0 0 1 1.409.589 1.925 1.925 0 0 1 .526 1.858z" })));
}

function FerrisWheel(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11a3 3 0 0 0-2.841-2.984 9.918 9.918 0 0 0-5.175-5.175A3 3 0 0 0 13 0h-2a3 3 0 0 0-2.984 2.841 9.921 9.921 0 0 0-5.175 5.175 2.985 2.985 0 0 0-.659 5.856 9.964 9.964 0 0 0 5.332 7.069l-.48 1.8a1 1 0 0 0 .708 1.224A1.011 1.011 0 0 0 8 24a1 1 0 0 0 .966-.742l.434-1.606a9.928 9.928 0 0 0 5.211 0l.428 1.606a1 1 0 0 0 1.932-.516l-.48-1.8a9.974 9.974 0 0 0 5.333-7.07A2.994 2.994 0 0 0 24 11ZM11 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm-8 8h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 10a8.021 8.021 0 0 1-2.09-.28l1.7-6.364a.407.407 0 0 1 .787 0l1.7 6.364A8.034 8.034 0 0 1 12 20Zm3.955-1.049-1.63-6.11A2.38 2.38 0 0 0 12 11.054a2.38 2.38 0 0 0-2.326 1.787l-1.629 6.11A7.962 7.962 0 0 1 4.26 14H5a3 3 0 0 0 .081-5.992 8.1 8.1 0 0 1 3.507-3.241A2.989 2.989 0 0 0 11 6h2a2.988 2.988 0 0 0 2.412-1.233 8.094 8.094 0 0 1 3.506 3.241A3 3 0 0 0 19 14h.74a7.968 7.968 0 0 1-3.785 4.951ZM21 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" })));
}

function FileAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 16a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zm6-5.515V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486A6.951 6.951 0 0 1 22 10.485zm-6.949-7.021A5.01 5.01 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0-.781-1.05zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" })));
}

function FileAi(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.515 5.008a.744.744 0 0 0-.687-.464.748.748 0 0 0-.695.477l-1.977 5.187a.625.625 0 0 0 .362.807.64.64 0 0 0 .222.041.626.626 0 0 0 .584-.4l.339-.889h2.311l.335.887a.625.625 0 1 0 1.17-.441ZM6.139 8.514l.684-1.8.679 1.8ZM11.232 4.544a.626.626 0 0 0-.625.625v5.262a.625.625 0 0 0 1.25 0V5.169a.625.625 0 0 0-.625-.625Z" }),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.968 4.968 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.122a2.975 2.975 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464Z" })));
}

function FileCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.95 5.536 16.464 2.05A6.954 6.954 0 0 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515a6.954 6.954 0 0 0-2.05-4.949zM18.536 6.95A5.018 5.018 0 0 1 19.317 8H15a1 1 0 0 1-1-1V2.683a5.018 5.018 0 0 1 1.05.781zM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4.515c.165 0 .323.032.485.047V7a3 3 0 0 0 3 3h4.953c.015.162.047.32.047.485zm-3.276-5.689a1 1 0 0 1-.035 1.413L13.1 18.138a3 3 0 0 1-4.226-.017l-1.54-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 0 1 1.417.035z" })));
}

function FileDelete(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.207 14.207 13.414 16l1.793 1.793a1 1 0 1 1-1.414 1.414L12 17.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L10.586 16l-1.793-1.793a1 1 0 0 1 1.414-1.414L12 14.586l1.793-1.793a1 1 0 0 1 1.414 1.414ZM22 10.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486A6.951 6.951 0 0 1 22 10.485Zm-6.949-7.021A5.01 5.01 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0-.781-1.05ZM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z" })));
}

function FileEps(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M148.523 124.117c7.364 0 13.333-5.97 13.333-13.333s-5.97-13.333-13.333-13.333H101.59c-7.364 0-13.333 5.97-13.333 13.333v111.232c0 7.364 5.97 13.333 13.333 13.333h46.933c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333h-33.515v-28.949h30.059c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333h-30.059v-28.949h33.515zM188.821 110.272v112.256c0 7.364 5.97 13.333 13.333 13.333 7.364 0 13.333-5.97 13.333-13.333v-35.477h17.899c24.86 0 45.013-20.153 45.013-45.013s-20.153-45.013-45.013-45.013l-.021-.085h-31.232c-.775-.021-6.198-.076-10.095 4.32-3.281 3.7-3.248 8.038-3.217 9.012zm44.544 50.027h-17.749V123.52h17.856c10.133 0 18.347 8.214 18.347 18.347 0 10.133-8.214 18.347-18.347 18.347l-.107.085z" }),
        React.createElement("path", { d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h241.984a105.982 105.982 0 0 0 75.435-31.232l56.661-56.704A105.982 105.982 0 0 0 512 348.651V106.667C511.93 47.786 464.214.071 405.333 0zM42.667 405.333V106.667c0-35.346 28.654-64 64-64h298.667c35.346 0 64 28.654 64 64V320H384c-35.346 0-64 28.654-64 64v85.333H106.667c-35.347 0-64-28.653-64-64zm351.253 45.27a63.467 63.467 0 0 1-31.253 17.067V384c0-11.782 9.551-21.333 21.333-21.333h83.733a64.338 64.338 0 0 1-17.067 31.232l-56.746 56.704z" }),
        React.createElement("path", { d: "M359.616 154.773c-5.824-1.984-11.861-3.072-17.813-4.629a26.75 26.75 0 0 1-12.672-6.4 12.567 12.567 0 0 1-3.243-13.184 12.8 12.8 0 0 1 10.475-6.997 31.724 31.724 0 0 1 12.949 1.899 159.35 159.35 0 0 1 17.472 6.592c6.293 2.752 13.675 4.395 18.752-1.579a13.014 13.014 0 0 0 .683-15.723 23.224 23.224 0 0 0-8.683-7.573 67.82 67.82 0 0 0-51.755-7.061 38.722 38.722 0 0 0-21.888 17.621 36.678 36.678 0 0 0-4.416 12.907 34.581 34.581 0 0 0 4.992 23.467 41.196 41.196 0 0 0 20.501 15.68c8.725 3.584 17.429 7.061 26.283 10.304a27.73 27.73 0 0 1 10.283 5.888 12.032 12.032 0 0 1 3.2 12.352 15.423 15.423 0 0 1-9.749 8.704 32.69 32.69 0 0 1-20.779.747 56.928 56.928 0 0 1-18.091-10.667c-.555-.448-2.368-1.813-2.709-2.133a12.8 12.8 0 0 0-16.213 1.088c-5.455 4.947-5.867 13.379-.921 18.834l.003.004a66.837 66.837 0 0 0 49.067 21.013c22.001.967 41.551-13.924 46.464-35.392a37.696 37.696 0 0 0-12.8-34.645 56.814 56.814 0 0 0-19.392-11.117z" })));
}

function FileGif(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.969 4.969 0 0 0 3.536-1.465l2.656-2.656A4.969 4.969 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.121a2.98 2.98 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.922a2.98 2.98 0 0 1-.8 1.465ZM8 8.75v.334a2 2 0 0 1-2 1.984 1.991 1.991 0 0 1-2-1.984v-2.1A1.991 1.991 0 0 1 6 5a2.022 2.022 0 0 1 1.772 1.079.626.626 0 1 1-1.11.58A.779.779 0 0 0 6 6.25a.742.742 0 0 0-.749.75v2.068A.742.742 0 0 0 6 9.819a.759.759 0 0 0 .75-.735V9H6.5a.5.5 0 0 1 0-1h.75a.75.75 0 0 1 .75.75Zm6-.112v1.8a.625.625 0 0 1-1.25 0V5.625A.625.625 0 0 1 13.375 5h2.013a.625.625 0 0 1 0 1.25H14v1.138h1.239a.625.625 0 0 1 0 1.25Zm-3-3.013v4.819a.625.625 0 1 1-1.25 0V5.625a.625.625 0 0 1 1.25 0Z" })));
}

function FileMusic(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 12a1 1 0 0 1-1 1h-1v4.5a2.5 2.5 0 1 1-2.5-2.5 2.577 2.577 0 0 1 .5.05V13a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1zm7-1.515V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.955 6.955 0 0 1 4.95 2.051l3.484 3.484A6.955 6.955 0 0 1 22 10.485zm-6.949-7.02A4.989 4.989 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.989 4.989 0 0 0-.781-1.051zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.32-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" })));
}

function FilePsd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M319.083 220.907c.024 7.347 5.986 13.291 13.333 13.291 0 0 22.869 0 31.701-.256 32.683-.555 56.149-28.971 56.149-67.541 0-40.533-23.04-67.797-57.301-67.797h-30.784c-7.371.024-13.333 6.005-13.333 13.376l.235 108.927zm43.968-95.638c22.592 0 30.635 21.333 30.635 41.131s-9.259 40.533-29.973 40.875c-4.267 0-11.477.149-18.005.192l-.107-82.197 17.45-.001zM258.603 154.773c-5.824-1.984-11.861-3.072-17.813-4.629a26.75 26.75 0 0 1-12.672-6.4 12.567 12.567 0 0 1-3.243-13.184 12.8 12.8 0 0 1 10.475-6.997 31.724 31.724 0 0 1 12.949 1.899 161.651 161.651 0 0 1 17.493 6.592c6.272 2.752 13.675 4.395 18.731-1.579a12.971 12.971 0 0 0 .683-15.723 23.084 23.084 0 0 0-8.683-7.573 67.82 67.82 0 0 0-51.755-7.061 38.722 38.722 0 0 0-21.888 17.621 36.678 36.678 0 0 0-4.416 12.907 34.581 34.581 0 0 0 4.992 23.467 41.196 41.196 0 0 0 20.501 15.68c8.725 3.584 17.451 7.061 26.304 10.304a28.084 28.084 0 0 1 10.283 5.888 12.074 12.074 0 0 1 3.179 12.352 15.423 15.423 0 0 1-9.749 8.704 32.69 32.69 0 0 1-20.779.747 56.928 56.928 0 0 1-18.091-10.667c-.555-.448-2.368-1.813-2.709-2.133a12.8 12.8 0 0 0-16.213 1.088c-5.455 4.947-5.867 13.379-.921 18.834l.003.004a66.837 66.837 0 0 0 49.067 21.013c22.001.967 41.551-13.924 46.464-35.392a37.696 37.696 0 0 0-12.8-34.645 56.814 56.814 0 0 0-19.392-11.117zM87.915 110.272v112.256c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v-35.477h17.92c24.86 0 45.013-20.153 45.013-45.013s-20.153-45.013-45.013-45.013l-.128-.085H101.12c-.905.016-5.677.191-9.45 4.105-3.609 3.744-3.748 8.262-3.755 9.227zm44.458 50.027h-17.749l-.128-36.693h17.877c10.133-.005 18.351 8.205 18.356 18.338.005 10.133-8.205 18.351-18.338 18.356l-.018-.001z" }),
        React.createElement("path", { d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h241.984a105.982 105.982 0 0 0 75.435-31.232l56.661-56.704A105.982 105.982 0 0 0 512 348.651V106.667C511.93 47.786 464.214.071 405.333 0zM42.667 405.333V106.667c0-35.346 28.654-64 64-64h298.667c35.346 0 64 28.654 64 64V320H384c-35.346 0-64 28.654-64 64v85.333H106.667c-35.347 0-64-28.653-64-64zm351.253 45.27a63.467 63.467 0 0 1-31.253 17.067V384c0-11.782 9.551-21.333 21.333-21.333h83.733a64.338 64.338 0 0 1-17.067 31.232l-56.746 56.704z" })));
}

function File(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.949 5.536 16.465 2.05A6.958 6.958 0 0 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515a6.951 6.951 0 0 0-2.051-4.949ZM18.535 6.95A4.983 4.983 0 0 1 19.316 8H15a1 1 0 0 1-1-1V2.684a5.01 5.01 0 0 1 1.051.78ZM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4.515c.164 0 .323.032.485.047V7a3 3 0 0 0 3 3h4.953c.015.162.047.32.047.485Z" })));
}

function Fill(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.327 18.422C23.055 19.456 24 20.651 24 21.5a2.5 2.5 0 0 1-5 0c0-.775.961-2.008 1.692-3.069a1 1 0 0 1 1.635-.009zm-.877-4.558-8.672 8.672a5.006 5.006 0 0 1-7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.709-5.71-2.856-2.89A1 1 0 0 1 5.74 1.216L8.588 4.1l1.548-1.55-.843-.843A1 1 0 0 1 10.707.293l13 13a1 1 0 1 1-1.414 1.414zm-1.414-1.414L11.55 3.964 9.993 5.522l4.718 4.778a1 1 0 1 1-1.422 1.4L8.58 6.935l-5.7 5.7a3 3 0 0 0 0 4.243l4.242 4.243a3.005 3.005 0 0 0 4.243 0z" })));
}

function Film(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm1 11h2v2h-2zm0-2V7h2v2zm-2 2H6V2h12zM4 13H2v-2h2zm0-4H2V7h2zm-2 6h2v2H2zm4-2h12v9H6zm14 2h2v2h-2zm2-10h-2V2.184A3 3 0 0 1 22 5zM4 2.184V5H2a3 3 0 0 1 2-2.816zM2 19h2v2.816A3 3 0 0 1 2 19zm18 2.816V19h2a3 3 0 0 1-2 2.816z" })));
}

function Filter(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 24a1 1 0 0 1-.6-.2l-4-3A1 1 0 0 1 9 20v-5.62L1.984 6.487A3.9 3.9 0 0 1 4.9 0h14.2a3.9 3.9 0 0 1 2.913 6.488L15 14.38V23a1 1 0 0 1-1 1zm-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177A1.9 1.9 0 0 0 19.1 2H4.9a1.9 1.9 0 0 0-1.421 3.158l7.269 8.178A1 1 0 0 1 11 14z" })));
}

function Fingerprint(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5.972 22.285a1 1 0 0 1-.515-1.857C9 18.3 9 13.73 9 11a3 3 0 0 1 6 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0c0 2.947 0 8.434-4.514 11.143a1 1 0 0 1-.514.142Zm4.963 1.421c2.282-2.3 3.615-5.534 3.961-9.621A1 1 0 0 0 13.985 13a.983.983 0 0 0-1.081.911c-.311 3.657-1.419 6.4-3.388 8.381a1 1 0 0 0 1.419 1.41Zm5.2-.186a17.793 17.793 0 0 0 1.508-3.181 1 1 0 0 0-1.881-.678 15.854 15.854 0 0 1-1.338 2.821 1 1 0 0 0 1.711 1.038Zm2.365-6.329A31.459 31.459 0 0 0 19 11 7 7 0 0 0 6.787 6.333a1 1 0 1 0 1.489 1.334A5 5 0 0 1 17 11a29.686 29.686 0 0 1-.462 5.809 1 1 0 0 0 .79 1.172.979.979 0 0 0 .193.019 1 1 0 0 0 .979-.809ZM7 11a5 5 0 0 1 .069-.833A1 1 0 1 0 5.1 9.833 6.971 6.971 0 0 0 5 11c0 4.645-1.346 7-4 7a1 1 0 0 0 0 2c3.869 0 6-3.2 6-9Zm13.7 12.414A29.76 29.76 0 0 0 23 11a10.865 10.865 0 0 0-1.1-4.794 1 1 0 1 0-1.8.875A8.9 8.9 0 0 1 21 11a27.91 27.91 0 0 1-2.119 11.586 1 1 0 0 0 .5 1.324.984.984 0 0 0 .413.09 1 1 0 0 0 .906-.586ZM3 14v-3a9.01 9.01 0 0 1 9-9 8.911 8.911 0 0 1 5.4 1.8 1 1 0 0 0 1.2-1.6A10.9 10.9 0 0 0 12 0 11.013 11.013 0 0 0 1 11v3a1 1 0 0 0 2 0Z" })));
}

function Fish(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6 19a1 1 0 0 1-2 0 1 1 0 0 1 2 0ZM23.73 7.625A2.482 2.482 0 0 1 21.5 9h-4.519a41.471 41.471 0 0 1-.149 3h.368a2.746 2.746 0 0 1 2.765 3.188A3.288 3.288 0 0 1 16.729 18H15.4c-1.8 3.889-7.4 6-11.413 6a4 4 0 0 1-3.978-4.257A16.833 16.833 0 0 1 2 12.133V11.6a7.708 7.708 0 0 1 6.317-7.554 3.115 3.115 0 0 1 2.537.693A3.213 3.213 0 0 1 12 7.168c.93-.086 1.941-.129 3-.149V2.5a2.5 2.5 0 0 1 4-2 4.861 4.861 0 0 1 1.833 2.663A4.861 4.861 0 0 1 23.5 5a2.5 2.5 0 0 1 .23 2.625ZM4.385 9.541A13.235 13.235 0 0 1 10 7.432V7.2a1.218 1.218 0 0 0-.435-.933 1.085 1.085 0 0 0-.9-.253 5.615 5.615 0 0 0-4.28 3.527ZM8.783 21.2A8.037 8.037 0 0 0 2.8 15.222 20.059 20.059 0 0 0 2 19.88 2 2 0 0 0 4.12 22a20.03 20.03 0 0 0 4.663-.8Zm6.209-12.192c-6.239.107-9.639 1.264-11.4 4.362a10.045 10.045 0 0 1 7.04 7.039c3.096-1.763 4.253-5.162 4.36-11.401ZM16.568 14a18.72 18.72 0 0 1-.445 2h.606a1.281 1.281 0 0 0 1.261-1.094.754.754 0 0 0-.79-.906ZM21.9 6.189a2.99 2.99 0 0 0-2.06-1.2 1 1 0 0 1-.821-.821 2.988 2.988 0 0 0-1.2-2.06.5.5 0 0 0-.537-.049A.477.477 0 0 0 17 2.5V7h4.5a.477.477 0 0 0 .445-.273.5.5 0 0 0-.045-.538Z" })));
}

function Flag(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 4h-5a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v19a1 1 0 0 0 2 0V13h8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM2 11V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2zm20 2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-.142A4 4 0 0 0 15 9V6h5a2 2 0 0 1 2 2z" })));
}

function Flame(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M354.773 61.867c-16.789-14.229-34.389-29.184-52.309-45.483A62.975 62.975 0 0 0 251.733.555a60.692 60.692 0 0 0-43.349 27.733 434.61 434.61 0 0 0-53.163 137.579 130.674 130.674 0 0 1-10.155-17.387c-10.104-21.288-35.552-30.355-56.84-20.251a42.661 42.661 0 0 0-13.56 10.16A193.408 193.408 0 0 0 19.498 275.37c-1.017 107.532 71.314 201.943 175.403 228.95a248.569 248.569 0 0 0 59.221 7.509c.64 0 7.445-.064 10.197-.256 127.36-4.125 228.426-108.648 228.267-236.075-.085-96.639-63.914-150.826-137.813-213.631zM253.589 469.013c-15.877-1.208-31.567-7.639-43.413-17.195-18.55-13.126-30.825-32.374-33.749-54.549-3.627-34.603 17.707-79.851 61.291-130.965a23.916 23.916 0 0 1 18.283-8.363 23.233 23.233 0 0 1 17.984 8.32c39.936 47.403 61.867 91.136 61.867 123.157-.123 42.07-33.006 75.35-74.88 79.403-1.839.178-4.972.448-7.383.192zm121.366-40.576c-1.259.981-2.645 1.771-3.925 2.709a121.74 121.74 0 0 0 7.488-41.771c0-53.909-39.147-111.68-71.957-150.656a66.132 66.132 0 0 0-50.475-23.467H256a66.497 66.497 0 0 0-50.688 23.317c-52.16 61.099-76.117 115.989-71.211 163.157a110.364 110.364 0 0 0 8.299 31.787 194.008 194.008 0 0 1-80.171-158.144 150.657 150.657 0 0 1 44.437-108.373 174.238 174.238 0 0 0 17.643 29.035 39.402 39.402 0 0 0 40.661 14.933 40.534 40.534 0 0 0 30.955-31.445A397.96 397.96 0 0 1 244.33 51.05a17.96 17.96 0 0 1 12.992-8.192 20.333 20.333 0 0 1 16.427 5.141c18.304 16.64 36.267 32 53.333 46.443 71.211 60.48 122.688 104.171 122.688 181.056a192.704 192.704 0 0 1-74.752 152.981l-.063-.042z" })));
}

function FlipHorizontal(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.207.068H10.2a1 1 0 0 0-1.13.56L.375 19.759A3 3 0 0 0 3.106 24H10a1 1 0 0 0 1-1V1.046a1.01 1.01 0 0 0-.793-.978ZM9 22H3.106a1 1 0 0 1-.911-1.414L9 5.616ZM23.625 19.759 14.93.628a1.022 1.022 0 0 0-1.152-.557 1 1 0 0 0-.778.975V23a1 1 0 0 0 1 1h6.894a3 3 0 0 0 2.731-4.241Z" })));
}

function FlowerBouquet(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.1a3.044 3.044 0 0 0-2.664-3.055c.3-.545.736-1.813.654-5a2.094 2.094 0 0 0-.849-1.645 2 2 0 0 0-1.733-.322A12.054 12.054 0 0 0 15.3 3.139a21.337 21.337 0 0 0-1.624-2.33 2.206 2.206 0 0 0-3.351 0 21.342 21.342 0 0 0-1.618 2.325 12.239 12.239 0 0 0-4.121-2.06 1.981 1.981 0 0 0-1.727.326 2.091 2.091 0 0 0-.849 1.642c-.082 3.188.357 4.455.652 5A3.045 3.045 0 0 0 0 11.1c0 4.29 6.387 7.185 9.478 8.335a6.443 6.443 0 0 0-1.192 1.433 2.027 2.027 0 0 0-.012 2.06A2.128 2.128 0 0 0 10.118 24h3.764a2.128 2.128 0 0 0 1.844-1.076 2.027 2.027 0 0 0-.011-2.059 5.722 5.722 0 0 0-.648-.865H16a2 2 0 0 1 2 2 1 1 0 0 0 2 0 3.992 3.992 0 0 0-2.683-3.759C20.415 16.74 24 14.31 24 11.1Zm-7.628-6.216A8.753 8.753 0 0 1 19.943 3s.046.019.048.093c.063 2.434-.214 3.72-.47 4.083a1.893 1.893 0 0 1-1.28.806 1.79 1.79 0 0 1-1.385-.388 1.9 1.9 0 0 1-.484-2.71Zm-4.48-2.832a.138.138 0 0 1 .217 0 14.5 14.5 0 0 1 1.928 2.977.858.858 0 0 0 .069.1 3.757 3.757 0 0 0-.039 1.493 2.24 2.24 0 0 1-4.078.123 1.071 1.071 0 0 0-.071-.092A3.748 3.748 0 0 0 9.9 5.162a.188.188 0 0 0 .014-.024 13.779 13.779 0 0 1 1.978-3.086Zm-7.883 1.04A.123.123 0 0 1 4.047 3a8.849 8.849 0 0 1 3.6 1.882A1.929 1.929 0 0 1 7.122 7.6a1.77 1.77 0 0 1-1.372.387 1.871 1.871 0 0 1-1.272-.805c-.256-.368-.532-1.655-.469-4.09ZM13.882 22h-3.764c-.062 0-.1-.046-.112-.116a5.836 5.836 0 0 1 1.963-1.843 5.647 5.647 0 0 1 2.019 1.894.124.124 0 0 1-.106.065Zm.794-4.791a8.491 8.491 0 0 0 1.311-3.046 1 1 0 1 0-1.974-.326 9.2 9.2 0 0 1-2 3.637 10.373 10.373 0 0 1-2.036-3.693 1 1 0 1 0-1.952.438 9.881 9.881 0 0 0 1.359 3.014C6.3 15.965 2 13.64 2 11.1A1.067 1.067 0 0 1 3.082 10h17.836A1.067 1.067 0 0 1 22 11.1c0 2.523-4.245 4.835-7.324 6.109Z" })));
}

function FlowerTulip(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.535 14.725a1.99 1.99 0 0 0-1.726-.716A11.993 11.993 0 0 0 13 18.987V13.91A6.006 6.006 0 0 0 18 8c0-2.793-1.943-5.152-3.844-7.091a3.085 3.085 0 0 0-4.312 0C7.943 2.848 6 5.207 6 8a6.006 6.006 0 0 0 5 5.91v5.077a11.993 11.993 0 0 0-8.809-4.978 1.992 1.992 0 0 0-1.726.716 1.971 1.971 0 0 0-.393 1.792C2.111 23.855 11.591 24 11.994 24h.012c.4 0 9.884-.145 11.923-7.483a1.975 1.975 0 0 0-.394-1.792ZM8 8c0-2.654 3.318-5.719 3.338-5.736C10.973 3.2 8.693 8.9 11 9a1 1 0 0 0 1-1 13.472 13.472 0 0 1 1.257-5.137C14.688 4.393 16 6.154 16 8a4 4 0 0 1-8 0Zm-5.994 8a10.268 10.268 0 0 1 8.462 5.863C7.971 21.517 3.2 20.3 2.006 16Zm11.539 5.861A10.379 10.379 0 0 1 22 15.981c-1.194 4.302-5.954 5.53-8.455 5.88Z" })));
}

function Flower(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 0 0 0 4 2 2 0 0 0 0-4Zm0 14a5.007 5.007 0 0 1-4.815-3.652 5.074 5.074 0 0 1-4.819-8.4c-3.4-3.511.009-9.6 4.834-8.349a5.014 5.014 0 0 1 9.6 0c4.9-1.216 8.2 4.813 4.829 8.392 3.408 3.538.011 9.442-4.814 8.357A5.007 5.007 0 0 1 12 24Zm-4-6a1 1 0 0 1 1 1 3 3 0 0 0 6 0 1 1 0 0 1 1.506-.863c3.466 1.675 6.4-3.182 3.016-5.259a1.006 1.006 0 0 1 0-1.756c3.313-2.009.522-7.219-3.019-5.254A1 1 0 0 1 15 5a3 3 0 0 0-6 0 1 1 0 0 1-1.5.868C4 3.908 1.138 9.08 4.478 11.07a1.007 1.007 0 0 1 0 1.757c-3.348 2.113-.514 6.973 3.016 5.31A1 1 0 0 1 8 18Z" })));
}

function FolderAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 15a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zm8-7v10a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V6a5.006 5.006 0 0 1 5-5h2.528a3.014 3.014 0 0 1 1.341.316L12.025 2.9a1.016 1.016 0 0 0 .447.1H19a5.006 5.006 0 0 1 5 5zM2 6v1h19.816A3 3 0 0 0 19 5h-6.528a3.014 3.014 0 0 1-1.341-.316L7.975 3.105A1.016 1.016 0 0 0 7.528 3H5a3 3 0 0 0-3 3zm20 12V9H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z" })));
}

function Folder(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3h-6.528a1.019 1.019 0 0 1-.447-.1L8.869 1.316A3.014 3.014 0 0 0 7.528 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5ZM5 3h2.528a1.019 1.019 0 0 1 .447.1l3.156 1.579A3.014 3.014 0 0 0 12.472 5H19a3 3 0 0 1 2.779 1.882L2 6.994V6a3 3 0 0 1 3-3Zm14 18H5a3 3 0 0 1-3-3V8.994l20-.113V18a3 3 0 0 1-3 3Z" })));
}

function Following(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6ZM9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM9 14a9.011 9.011 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.011 9.011 0 0 0-9-9ZM22 7.875a2.107 2.107 0 0 0-2 2.2 2.107 2.107 0 0 0-2-2.2 2.107 2.107 0 0 0-2 2.2c0 1.73 2.256 3.757 3.38 4.659a.992.992 0 0 0 1.24 0c1.124-.9 3.38-2.929 3.38-4.659a2.107 2.107 0 0 0-2-2.2Z" })));
}

function Football(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256.07-.047C114.467-.047-.326 114.746-.326 256.349S114.467 512.744 256.07 512.744s256.395-114.792 256.395-256.395S397.673-.047 256.07-.047zm158.906 188.591 16.555-53.525a212.063 212.063 0 0 1 37.227 109.461l-45.696-32.192a21.333 21.333 0 0 1-8.086-23.744zM311.467 50.197h-.171l-42.667 31.061a21.333 21.333 0 0 1-25.088 0l-42.667-31.061a206.8 206.8 0 0 1 110.593 0zM80.469 135.04l16.555 53.504a21.334 21.334 0 0 1-8.085 23.744L43.243 244.48a211.996 211.996 0 0 1 37.226-109.44zm5.014 248.619 58.603.192a21.334 21.334 0 0 1 20.267 14.805l18.432 57.451a214.022 214.022 0 0 1-97.302-72.448zm243.754 72.448 18.411-57.451a21.332 21.332 0 0 1 20.245-14.805l58.624-.192a213.845 213.845 0 0 1-97.28 72.448zm122.368-115.2-83.84.277c-27.759.036-52.312 18.009-60.736 44.459l-26.347 82.133a196.326 196.326 0 0 1-49.365 0l-26.347-82.155c-8.434-26.449-32.996-44.413-60.757-44.437l-83.819-.256a211.521 211.521 0 0 1-14.059-46.421l67.179-47.339c22.708-15.938 32.521-44.72 24.277-71.211l-24.213-78.336a213.186 213.186 0 0 1 40.192-28.779l64.597 46.933c22.422 16.358 52.842 16.358 75.264 0l64.597-46.933a213.817 213.817 0 0 1 40.192 28.779l-24.213 78.336c-8.243 26.49 1.569 55.272 24.277 71.211l67.179 47.339a211.112 211.112 0 0 1-14.058 46.4z" }),
        React.createElement("path", { d: "m328.235 196.779-40.896-29.696c-18.669-13.632-44.009-13.632-62.677 0l-40.896 29.696c-18.777 13.567-26.612 37.728-19.371 59.733l15.616 48.064c7.137 21.957 27.621 36.805 50.709 36.757h50.56c23.111.002 43.594-14.882 50.731-36.864l15.595-48.064c7.196-21.973-.635-46.078-19.371-59.626zm-21.206 46.442-15.595 48.064a10.666 10.666 0 0 1-10.155 7.381h-50.56a10.666 10.666 0 0 1-10.133-7.381L204.971 243.2a10.666 10.666 0 0 1 3.883-11.947l40.875-29.653a10.668 10.668 0 0 1 12.544 0l40.896 29.696a10.667 10.667 0 0 1 3.86 11.925z" })));
}

function Form(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 10a3 3 0 0 0 0 6h4a3 3 0 0 0 0-6zm5 3a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm2 6a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm2.536-15.879-1.658-1.656A4.968 4.968 0 0 0 14.343 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V6.657a4.968 4.968 0 0 0-1.464-3.536zm-1.414 1.414A3.1 3.1 0 0 1 18.5 5H16V2.5a2.932 2.932 0 0 1 .464.377zM19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6v3a2 2 0 0 0 2 2h3z" })));
}

function Forward(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M3.787 20.656A3.789 3.789 0 0 1 0 16.87V7.13a3.783 3.783 0 0 1 6.021-3.051L9.8 6.853a3.783 3.783 0 0 1 6.01-2.774l6.641 4.87a3.784 3.784 0 0 1 0 6.1l-6.641 4.87a3.783 3.783 0 0 1-6.01-2.772l-3.779 2.774a3.775 3.775 0 0 1-2.234.735Zm7.006-6.475a1 1 0 0 1 1 1v1.689a1.784 1.784 0 0 0 2.838 1.438l6.64-4.87a1.783 1.783 0 0 0 0-2.876l-6.64-4.87a1.784 1.784 0 0 0-2.838 1.438v1.689a1 1 0 0 1-1.591.806L4.838 5.692A1.784 1.784 0 0 0 2 7.13v9.74a1.784 1.784 0 0 0 2.838 1.438l5.362-3.933a1 1 0 0 1 .593-.194Z" })));
}

function Fox(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.241.435a1.983 1.983 0 0 0-1.7-.383 6.132 6.132 0 0 0-4.141 3.73A21.876 21.876 0 0 0 12 3a21.876 21.876 0 0 0-5.4.782A6.133 6.133 0 0 0 2.456.052a1.982 1.982 0 0 0-1.7.383A2 2 0 0 0 0 2.006v7.852a10.927 10.927 0 0 0 3.222 7.778l4.657 4.657a5.862 5.862 0 0 0 8.242 0l4.657-4.657A10.931 10.931 0 0 0 24 9.858V2.006a1.994 1.994 0 0 0-.759-1.571ZM5.051 5.316a1 1 0 0 0 1.264.633A20.924 20.924 0 0 1 12 5a20.934 20.934 0 0 1 5.685.949 1 1 0 0 0 1.263-.633c.617-1.849 1.671-2.995 3.052-3.31v6.167c-2.428.559-9 2.811-9 10.827v.184a2.868 2.868 0 0 0-2 0V19c0-8.015-6.571-10.268-9-10.827V2c1.381.321 2.435 1.468 3.051 3.316Zm-.415 10.906a8.929 8.929 0 0 1-2.618-6A11.431 11.431 0 0 1 4 10.945V11a3.781 3.781 0 0 0 3.6 2.978A8.852 8.852 0 0 1 9 19v1.586Zm14.728 0L15 20.586V19a8.852 8.852 0 0 1 1.4-5.022A3.783 3.783 0 0 0 20 11v-.055a11.431 11.431 0 0 1 1.982-.722 8.929 8.929 0 0 1-2.618 5.999Z" })));
}

function Frown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.01 16a1.021 1.021 0 0 0 .963-1.285A5.469 5.469 0 0 0 12.007 13a5.5 5.5 0 0 0-4.966 3.715A1 1 0 0 0 8 18ZM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" })));
}

function Ftp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 20h-8.184A3 3 0 0 0 13 18.184V15h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-4.379a1 1 0 0 1-.565-.175L10.17.528A2.992 2.992 0 0 0 8.47 0H7a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h4v3.184A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2ZM7 2h1.47a1 1 0 0 1 .567.176l1.884 1.3a2.983 2.983 0 0 0 1.7.529H17a2 2 0 0 1 2 2H5V4a2 2 0 0 1 2-2Zm-2 9V8h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm7 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" })));
}

function Gallery(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0h-6a5.006 5.006 0 0 0-5 5v.1A5.009 5.009 0 0 0 4 10v.1A5.009 5.009 0 0 0 0 15v4a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-.1a5.009 5.009 0 0 0 4-4.9v-.1A5.009 5.009 0 0 0 24 9V5a5.006 5.006 0 0 0-5-5zM2 15a3 3 0 0 1 3-3h6a2.988 2.988 0 0 1 2.638 1.6l-3.455 3.463-.475-.479A1.992 1.992 0 0 0 7 16.473l-4.621 3.96A2.96 2.96 0 0 1 2 19zm12 4a3 3 0 0 1-3 3H5a2.971 2.971 0 0 1-1.118-.221L8.288 18l.476.481a2 2 0 0 0 2.828 0L14 16.068zm4-5a3 3 0 0 1-2 2.816V15a5.006 5.006 0 0 0-5-5H6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zm4-5a3 3 0 0 1-2 2.816V10a5.006 5.006 0 0 0-5-5h-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zM4 15a1 1 0 1 1 1 1 1 1 0 0 1-1-1z" })));
}

function Gamepad(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M473.759 107.286c-19.12-31.867-53.112-53.112-91.353-53.112H127.469c-38.241 0-72.232 21.245-91.353 53.112C12.747 149.776 0 196.515 0 245.378c0 116.846 46.739 212.448 106.224 212.448 31.867 0 57.361-29.743 76.481-91.353 2.124-8.498 10.622-14.871 21.245-14.871h104.1c8.498 0 16.996 6.373 21.245 14.871 19.12 61.61 44.614 91.353 76.481 91.353 59.485 0 106.224-95.602 106.224-212.448-2.124-48.863-14.871-95.602-38.241-138.092zm-70.108 308.05c-6.373 0-21.245-16.996-36.116-61.61-8.498-27.618-33.992-44.614-61.61-44.614H203.95c-27.618 0-53.112 19.12-61.61 44.614-14.871 44.614-29.743 61.61-36.116 61.61-21.245 0-63.734-65.859-63.734-169.958 0-40.365 10.622-80.73 29.743-116.846 12.747-19.12 33.992-31.867 55.237-31.867h254.938c21.245 0 42.49 12.747 55.237 31.867 19.12 36.116 29.743 76.481 29.743 116.846-.002 104.099-42.492 169.958-63.737 169.958z" }),
        React.createElement("path", { d: "M192 192h-21.333v-21.333c0-12.8-8.533-21.333-21.333-21.333-12.8 0-21.333 8.533-21.333 21.333V192h-21.333c-12.8 0-21.333 8.533-21.333 21.333 0 12.8 8.533 21.333 21.333 21.333H128V256c0 12.8 8.533 21.333 21.333 21.333 12.8 0 21.333-8.533 21.333-21.333v-21.333H192c12.8 0 21.333-8.533 21.333-21.333C213.333 200.533 204.8 192 192 192z" }),
        React.createElement("circle", { cx: 394.667, cy: 181.333, r: 32 }),
        React.createElement("circle", { cx: 330.667, cy: 245.333, r: 32 })));
}

function GasPump(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.681 3.267a1 1 0 0 0-1.414 0L19.293 6.24a1 1 0 0 0-.293.707V18a1 1 0 0 1-1 1h-2V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a5 5 0 0 0 4.576-3H18a3 3 0 0 0 3-3V7.361l2.681-2.68a1 1 0 0 0 0-1.414ZM5 2h6a3 3 0 0 1 3 3v4h-2a3.967 3.967 0 0 0-.985-2.6l.692-.693a1 1 0 1 0-1.414-1.414l-.954.954A3.962 3.962 0 0 0 4 9H2V5a3 3 0 0 1 3-3Zm1 7a2 2 0 0 1 4 0Zm5 13H5a3 3 0 0 1-3-3v-8h12v8a3 3 0 0 1-3 3Z" })));
}

function Gem(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.147 9.471 22.36 8.4A5.885 5.885 0 0 0 17.632 6H6.383a5.892 5.892 0 0 0-4.662 2.309L.9 9.383a4.418 4.418 0 0 0 .548 5.937l7.99 7.707a3.82 3.82 0 0 0 2.55.969 3.9 3.9 0 0 0 2.6-1l7.936-7.633a4.39 4.39 0 0 0 .623-5.892Zm-2.4.107.787 1.074a2.388 2.388 0 0 1 .208.348h-4.791a6.616 6.616 0 0 0-.372-1.4l-.64-1.6h1.693a3.878 3.878 0 0 1 3.115 1.578Zm-8.757 10.51-2.769-6.27A4.642 4.642 0 0 1 8.995 13h5.952a4.354 4.354 0 0 1-.176.647ZM9.1 11a4.652 4.652 0 0 1 .157-.529L10.241 8h3.544l.937 2.343a4.8 4.8 0 0 1 .2.657ZM3.311 9.521A3.884 3.884 0 0 1 6.383 8h1.7L7.4 9.729A6.57 6.57 0 0 0 7.033 11H2.245a2.322 2.322 0 0 1 .247-.4Zm-.5 4.333a2.374 2.374 0 0 1-.6-.854h4.772a6.874 6.874 0 0 0 .387 1.576l2.827 6.4Zm10.96 7.16 2.854-6.614a6.573 6.573 0 0 0 .344-1.4H21.8a2.5 2.5 0 0 1-.633.9ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM16.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347ZM6.105 3.447A1 1 0 0 0 7.9 2.553l-1-2a1 1 0 1 0-1.79.894Z" })));
}

function Gift(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 7h-1.738A5.137 5.137 0 0 0 20 3a1 1 0 0 0-2 0c0 2.622-2.371 3.53-4.174 3.841A9.332 9.332 0 0 0 15 3a3 3 0 0 0-6 0 9.332 9.332 0 0 0 1.174 3.841C8.371 6.53 6 5.622 6 3a1 1 0 0 0-2 0 5.137 5.137 0 0 0 1.738 4H4a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2v5a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-5a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4Zm-8-5a1 1 0 0 1 1 1 7.71 7.71 0 0 1-1 3.013A7.71 7.71 0 0 1 11 3a1 1 0 0 1 1-1ZM2 11a2 2 0 0 1 2-2h7v3H2Zm2 8v-5h7v8H7a3 3 0 0 1-3-3Zm16 0a3 3 0 0 1-3 3h-4v-8h7Zm-7-7V9h7a2 2 0 0 1 2 2v1Z" })));
}

function GlassCheers(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.955 21.319a1 1 0 0 0-1.252-.658l-1.3.4-.931-2.737a4.953 4.953 0 0 0 2.328-5.717l-1.843-5.475A3.023 3.023 0 0 0 17.28 5.11l-3.852 1.074A2.966 2.966 0 0 0 12 7.078a2.966 2.966 0 0 0-1.428-.894L6.719 5.11A3.008 3.008 0 0 0 3.052 7.1l-1.867 5.557a4.956 4.956 0 0 0 2.364 5.682l-.944 2.728-1.305-.406a1 1 0 1 0-.6 1.91l2.16.671c.015 0 .024.017.039.023s.052.006.078.013l2.181.677a1 1 0 0 0 .594-1.91l-1.236-.385.935-2.7a4.982 4.982 0 0 0 .559.04 5 5 0 0 0 4.79-3.608l1.2-3.556 1.183 3.5A5 5 0 0 0 17.99 19a4.917 4.917 0 0 0 .581-.04l.918 2.7-1.244.386a1 1 0 0 0 .594 1.91l2.175-.675c.026-.007.053 0 .079-.013s.026-.019.042-.025l2.162-.671a1 1 0 0 0 .658-1.253ZM13.357 8.592a.989.989 0 0 1 .608-.482l3.851-1.073A1 1 0 0 1 18.08 7a1.023 1.023 0 0 1 .972.739L19.813 10H13.49l-.215-.637a1 1 0 0 1 .082-.771ZM5.918 7a1.007 1.007 0 0 1 .265.036l3.852 1.074a1 1 0 0 1 .7 1.223L10.51 10H4.187l.77-2.29A1.008 1.008 0 0 1 5.918 7Zm2.974 7.8a3 3 0 0 1-5.5.669 2.949 2.949 0 0 1-.292-2.224L3.514 12h6.322Zm7.632 1.808a3.022 3.022 0 0 1-1.431-1.859L14.164 12h6.323l.4 1.194a3 3 0 0 1-4.366 3.418ZM15.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347ZM7.105 3.447A1 1 0 1 0 8.9 2.553l-1-2a1 1 0 0 0-1.79.894ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z" })));
}

function Glasses(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0a4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026A4.948 4.948 0 0 0 19 14a5 5 0 0 0-4.145 2.207 3.98 3.98 0 0 0-5.71 0A5 5 0 0 0 5 14a4.948 4.948 0 0 0-3 1.026V4a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0V4a4 4 0 0 0-4-4zM5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" })));
}

function GlobeAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 16a8 8 0 1 0-8-8 8.009 8.009 0 0 0 8 8zm0-14a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6zm9.907 12.773A11.992 11.992 0 0 1 14 19.939V22h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4v-2.051A11.994 11.994 0 0 1 3.743.363a1 1 0 0 1 1.542 1.274 10 10 0 1 0 15.971 12.006 1 1 0 0 1 1.651 1.13z" })));
}

function Globe(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm8.647 7h-3.221a19.676 19.676 0 0 0-2.821-4.644A10.031 10.031 0 0 1 20.647 7ZM16.5 12a10.211 10.211 0 0 1-.476 3H7.976a10.211 10.211 0 0 1-.476-3 10.211 10.211 0 0 1 .476-3h8.048a10.211 10.211 0 0 1 .476 3Zm-7.722 5h6.444A19.614 19.614 0 0 1 12 21.588 19.57 19.57 0 0 1 8.778 17Zm0-10A19.614 19.614 0 0 1 12 2.412 19.57 19.57 0 0 1 15.222 7ZM9.4 2.356A19.676 19.676 0 0 0 6.574 7H3.353A10.031 10.031 0 0 1 9.4 2.356ZM2.461 9H5.9a12.016 12.016 0 0 0-.4 3 12.016 12.016 0 0 0 .4 3H2.461a9.992 9.992 0 0 1 0-6Zm.892 8h3.221A19.676 19.676 0 0 0 9.4 21.644 10.031 10.031 0 0 1 3.353 17Zm11.252 4.644A19.676 19.676 0 0 0 17.426 17h3.221a10.031 10.031 0 0 1-6.042 4.644ZM21.539 15H18.1a12.016 12.016 0 0 0 .4-3 12.016 12.016 0 0 0-.4-3h3.437a9.992 9.992 0 0 1 0 6Z" })));
}

function Golf(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 10a20.294 20.294 0 0 0-4.016.4l-.006-2.285 5.009-2.076a2 2 0 0 0 .271-3.4.838.838 0 0 0-.1-.065L8.9.212A2 2 0 0 0 6 2v8.914C2.391 12.109 0 14.36 0 17c0 3.925 5.271 7 12 7s12-3.075 12-7-5.271-7-12-7zm.073-5.745-4.1 1.7-.01-3.971zM12 22c-5.42 0-10-2.29-10-5 0-1.594 1.591-3.039 4-3.962V17a1 1 0 0 0 2 0l-.011-4.56A18.243 18.243 0 0 1 12 12c5.42 0 10 2.29 10 5s-4.58 5-10 5zm5-5a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" })));
}

function GraduationCap(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M470.549 111.573 313.237 36.629c-34.628-20.684-77.728-21.051-112.704-.96L41.451 111.573c-.597.299-1.216.619-1.792.96-37.752 21.586-50.858 69.689-29.272 107.441a78.736 78.736 0 0 0 31.064 30.266l43.883 20.907V375.68c.026 46.743 30.441 88.039 75.072 101.931a331.883 331.883 0 0 0 95.595 13.056 331.9 331.9 0 0 0 95.595-12.949c44.631-13.891 75.046-55.188 75.072-101.931V271.104l42.667-20.395v175.957c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-256c.142-25.051-19.638-48.193-41.452-59.093zM384 375.787c.011 27.959-18.129 52.69-44.8 61.077A289.962 289.962 0 0 1 256 448a289.962 289.962 0 0 1-83.2-11.136c-26.671-8.388-44.811-33.118-44.8-61.077v-84.309l70.763 33.707a112.47 112.47 0 0 0 57.707 15.765 106.666 106.666 0 0 0 54.976-14.805L384 291.477v84.31zm68.267-164.054-160.896 76.8a70.272 70.272 0 0 1-72.32-.96l-157.419-74.88c-17.547-9.462-24.101-31.357-14.639-48.903a36.105 36.105 0 0 1 13.85-14.201l159.893-76.373a70.4 70.4 0 0 1 72.32.96l157.312 74.944a36.861 36.861 0 0 1 18.965 31.787 36.266 36.266 0 0 1-17.066 30.826z" })));
}

function GraphicTablet(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4H7a5.006 5.006 0 0 0-5 5v2H1a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM4 15v-2a1 1 0 0 0 0-2V9a3 3 0 0 1 3-3v12a3 3 0 0 1-3-3Zm18 0a3 3 0 0 1-3 3H9V6h10a3 3 0 0 1 3 3Z" })));
}

function GridAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm-3 11h-3V8h3zm2-3h4v3h-4zm-5-2V2h3v4zm-2 0H8V2h3zm0 2v3H8V8zm-5 3H2V8h4zm-4 2h4v3H2zm6 0h3v3H8zm3 5v4H8v-4zm2 0h3v4h-3zm0-2v-3h3v3zm5-3h4v3h-4zm4-8v1h-4V2h1a3 3 0 0 1 3 3zM5 2h1v4H2V5a3 3 0 0 1 3-3zM2 19v-1h4v4H5a3 3 0 0 1-3-3zm17 3h-1v-4h4v1a3 3 0 0 1-3 3z" })));
}

function Grid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M4.5 17.5H2a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5H2v-2.5h2.5ZM22 17.5h-2.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5H22ZM4.5 8.75H2a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5H2v-2.5h2.5ZM22 8.75h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5H22ZM4.5 0H2a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5H2V2h2.5ZM13.25 17.5h-2.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5h2.5ZM13.25 8.75h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5h2.5ZM13.25 0h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5h-2.5V2h2.5ZM22 0h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5h-2.5V2H22Z" })));
}

function Guitar(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 10, cy: 14, r: 2 }),
        React.createElement("path", { d: "M5.707 16.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 1 0 1.414-1.414Z" }),
        React.createElement("path", { d: "M23.482.518a1.767 1.767 0 0 0-2.5 0l-.214.214a6.035 6.035 0 0 0-1.534 2.62l-2.975 2.975a5.894 5.894 0 0 0-7.7.232 4.933 4.933 0 0 0-.445.508 2.283 2.283 0 0 1-1.554.959 7.055 7.055 0 0 0-4.5 2.038c-2.956 2.957-2.7 8.025.575 11.3A8.8 8.8 0 0 0 8.814 24a7.164 7.164 0 0 0 5.122-2.059 7.055 7.055 0 0 0 2.038-4.5 2.283 2.283 0 0 1 .959-1.554 4.933 4.933 0 0 0 .508-.445 5.9 5.9 0 0 0 .232-7.7l2.975-2.975a6.035 6.035 0 0 0 2.62-1.534l.214-.214a1.767 1.767 0 0 0 0-2.501Zm-7.455 13.509a2.888 2.888 0 0 1-.3.265 4.192 4.192 0 0 0-1.745 2.99 5.072 5.072 0 0 1-1.458 3.239c-2.175 2.175-5.975 1.92-8.468-.574s-2.756-6.292-.577-8.468a5.072 5.072 0 0 1 3.239-1.458 4.192 4.192 0 0 0 2.99-1.745 2.888 2.888 0 0 1 .265-.3A3.41 3.41 0 0 1 12.419 7a4.435 4.435 0 0 1 2.415.752l-1.541 1.541a1 1 0 1 0 1.414 1.414l1.538-1.538a3.858 3.858 0 0 1-.218 4.858Z" })));
}

function Gym(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.942 6.837 20.76 4.654l.947-.947a1 1 0 1 0-1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105L9.76 15.655l5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105zM11 20.39a1.6 1.6 0 0 1-.472 1.138 1.647 1.647 0 0 1-2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779A1.6 1.6 0 0 1 11 20.39zm10.528-9.862a1.647 1.647 0 0 1-2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779a1.609 1.609 0 0 1 0 2.277z" })));
}

function Hamburger(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 14.006a2.981 2.981 0 0 0-1-2.219V10A10.011 10.011 0 0 0 13 0h-2A10.011 10.011 0 0 0 1 10v1.837A3.137 3.137 0 0 0 1 16.4v.6a7.008 7.008 0 0 0 7 7h8a7.008 7.008 0 0 0 7-7v-.774a2.981 2.981 0 0 0 1-2.22ZM2.812 15.158a1.1 1.1 0 0 1 .282-2.152H21a1 1 0 0 1 0 2h-4c-1.956 0-3.979.788-6.364 2.481a2.867 2.867 0 0 1-3.271 0c-.228-.162-.447-.331-.667-.5a7.5 7.5 0 0 0-3.886-1.829ZM3 10a8.009 8.009 0 0 1 8-8h2a8.009 8.009 0 0 1 8 8v1.006l-18 .01Zm13 12H8a4.994 4.994 0 0 1-4.975-4.755 6.24 6.24 0 0 1 2.454 1.327c.239.185.479.369.729.546a4.893 4.893 0 0 0 5.584 0A9.385 9.385 0 0 1 17 17.006h4A5 5 0 0 1 16 22ZM9 5a1 1 0 0 1 2 0 1 1 0 0 1-2 0ZM6 8a1 1 0 0 1 2 0 1 1 0 0 1-2 0Z" })));
}

function HandHoldingHeart(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8.965 24H4a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h8.857a3.144 3.144 0 0 1 2.69 1.519l3.217-3.535a3.01 3.01 0 0 1 4.254-.2 3.022 3.022 0 0 1 .217 4.23l-6.8 7.637A10.012 10.012 0 0 1 8.965 24ZM4 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4.965a8.005 8.005 0 0 0 5.972-2.678l6.805-7.638a1.015 1.015 0 0 0-.072-1.421 1.029 1.029 0 0 0-.728-.263 1 1 0 0 0-.7.329L15.816 15.2a3.158 3.158 0 0 1-2.516 2.052l-5.161.738a1 1 0 0 1-.284-1.98l5.162-.737a1.142 1.142 0 0 0-.16-2.273Zm7-3.926a1.986 1.986 0 0 1-1.247-.436C8.041 7.264 6 5.2 6 3.2A3.109 3.109 0 0 1 9 0a2.884 2.884 0 0 1 2 .817A2.884 2.884 0 0 1 13 0a3.109 3.109 0 0 1 3 3.2c0 2-2.041 4.064-3.754 5.439A1.986 1.986 0 0 1 11 9.074ZM9 2a1.115 1.115 0 0 0-1 1.2c0 .9 1.151 2.39 3.006 3.879C12.849 5.59 14 4.1 14 3.2A1.115 1.115 0 0 0 13 2a1.115 1.115 0 0 0-1 1.2 1 1 0 0 1-2 0A1.115 1.115 0 0 0 9 2Z" })));
}

function Hastag(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 7h-4.809l.8-5.865a1 1 0 1 0-1.982-.27L16.173 7H9.191l.8-5.865a1 1 0 1 0-1.982-.27L7.173 7H2a1 1 0 0 0 0 2h4.9l-.818 6H1a1 1 0 0 0 0 2h4.809l-.8 5.865a1 1 0 0 0 1.982.27L7.827 17h6.982l-.8 5.865a1 1 0 0 0 1.982.27L16.827 17H22a1 1 0 0 0 0-2h-4.9l.818-6H23a1 1 0 0 0 0-2Zm-7.918 8H8.1l.818-6H15.9Z" })));
}

function HatBirthday(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M472.299 379.264 289.963 118.059c29.959-18.757 39.04-58.249 20.283-88.208-18.757-29.959-58.249-39.04-88.208-20.282s-39.04 58.249-20.282 88.208a64 64 0 0 0 20.282 20.282L39.701 379.264c-19.843 25.985-23.631 60.833-9.835 90.475 16.27 28.103 47.114 44.498 79.51 42.261h293.248c32.396 2.237 63.24-14.158 79.509-42.261 13.796-29.642 10.008-64.49-9.834-90.475zm-222.038 90.069 116.437-166.805 30.101 43.243-86.165 123.563h-60.373zm-110.762 0 171.819-246.144 29.355 42.069-142.444 204.075h-58.73zm-71.872-19.328a45.824 45.824 0 0 1 7.04-46.336L256 143.936l29.461 42.197c-.299.384-.725.576-1.003.96L89.6 466.325a34.937 34.937 0 0 1-21.973-16.32zm376.746 0a43.817 43.817 0 0 1-41.749 19.328h-39.957l60.203-86.272 14.4 20.608a45.824 45.824 0 0 1 7.103 46.336z" })));
}

function HeadSideThinking(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.8 4.419A10.9 10.9 0 0 0 9.453.106 11 11 0 0 0 2.26 17.674 3.886 3.886 0 0 1 3 20.029V21a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3h.494a5.014 5.014 0 0 0 4.957-4.345L21.67 15H22a1.959 1.959 0 0 0 2-2c0-1.42-2.932-7.015-4.2-8.581ZM20.793 13a1 1 0 0 0-.991.869l-.334 2.525A3.008 3.008 0 0 1 16.494 19H15a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.971a5.9 5.9 0 0 0-1.151-3.571 9 9 0 0 1 5.876-14.37A9.265 9.265 0 0 1 11.005 2a8.941 8.941 0 0 1 7.218 3.648A31.212 31.212 0 0 1 22 13ZM16.2 8.011a1 1 0 0 0-1.366-.369l-.982.564A3.994 3.994 0 0 0 12 7.142V6a1 1 0 0 0-2 0v1.142a3.994 3.994 0 0 0-1.855 1.064l-.982-.564a1 1 0 1 0-1 1.734l.993.571A3.938 3.938 0 0 0 7 11a3.938 3.938 0 0 0 .159 1.053l-.993.571a1 1 0 0 0 1 1.734l.982-.564A3.994 3.994 0 0 0 10 14.858V16a1 1 0 0 0 2 0v-1.142a3.994 3.994 0 0 0 1.855-1.064l.982.564a1 1 0 1 0 1-1.734l-.993-.571A3.938 3.938 0 0 0 15 11a3.938 3.938 0 0 0-.159-1.053l.993-.571a1 1 0 0 0 .366-1.365ZM11 13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function Headphones(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 5 5 0 0 0 2-9.576ZM5 20a3 3 0 0 1 0-6Zm14 0v-6a3 3 0 0 1 0 6Z" })));
}

function Headset(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6h-3a1 1 0 0 0 0 2h5a5 5 0 0 0 2-9.576ZM5 20a3 3 0 0 1 0-6Zm14 0v-6a3 3 0 0 1 0 6Z" })));
}

function HeartArrow(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 17a1 1 0 0 0-1 1v2.586l-2.994-2.994C21.2 15.25 23 12.547 23 9.987a5.745 5.745 0 0 0-5.5-5.949A5.39 5.39 0 0 0 13 6.57a5.39 5.39 0 0 0-4.5-2.532 5.13 5.13 0 0 0-2.428.619L1.707.293A1 1 0 0 0 .293 1.707L4.5 5.915A6.188 6.188 0 0 0 3 9.987c0 3.791 3.951 7.9 7.265 10.676a4.248 4.248 0 0 0 5.47 0 42.092 42.092 0 0 0 1.861-1.654L20.586 22H18a1 1 0 0 0 0 2h4a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1Zm-8.55 2.132a2.311 2.311 0 0 1-2.9 0C7.387 15.643 5 12.31 5 9.987a3.749 3.749 0 0 1 3.5-3.949A3.749 3.749 0 0 1 12 9.987a1 1 0 1 0 2 0 3.749 3.749 0 0 1 3.5-3.949A3.749 3.749 0 0 1 21 9.987c0 2.322-2.388 5.655-6.55 9.145Z" })));
}

function Heart(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z" })));
}

function HomeLocationAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 9.724V19a5.006 5.006 0 0 1-5 5h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3V9.724a3 3 0 0 0-1.322-2.487l-7-4.723a2.979 2.979 0 0 0-3.356 0l-7 4.723A3 3 0 0 0 2 9.724V19a3 3 0 0 0 3 3h1a1 1 0 0 1 0 2H5a5.006 5.006 0 0 1-5-5V9.724a4.993 4.993 0 0 1 2.2-4.145l7-4.724a4.981 4.981 0 0 1 5.594 0l7 4.724A5 5 0 0 1 24 9.724Zm-5 5.283a6.952 6.952 0 0 1-2.05 4.949l-3.515 3.438a2.063 2.063 0 0 1-2.87 0l-3.507-3.43A7 7 0 1 1 19 15.007Zm-2 0a5 5 0 1 0-8.536 3.535l3.5 3.422 3.58-3.43A4.958 4.958 0 0 0 17 15.007ZM15 15a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z" })));
}

function HomeLocation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m21.8 5.579-7-4.724a4.979 4.979 0 0 0-5.6 0l-7 4.724A5 5 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.724a3 3 0 0 1 1.322-2.487l7-4.724a2.986 2.986 0 0 1 3.356 0l7 4.724A3 3 0 0 1 22 9.724ZM12 7.006a6 6 0 0 0-4.235 10.251l1.824 1.784a3.465 3.465 0 0 0 4.821 0l1.833-1.792A6 6 0 0 0 12 7.006Zm2.836 8.821-1.825 1.785a1.454 1.454 0 0 1-2.023 0l-1.817-1.777a4 4 0 1 1 5.665-.008ZM13 13a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" })));
}

function Home(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.121 9.069-7.585-7.586a5.008 5.008 0 0 0-7.072 0L.879 9.069A2.978 2.978 0 0 0 0 11.19v9.817a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11.19a2.978 2.978 0 0 0-.879-2.121ZM15 22.007H9v-3.934a3 3 0 0 1 6 0Zm7-1a1 1 0 0 1-1 1h-4v-3.934a5 5 0 0 0-10 0v3.934H3a1 1 0 0 1-1-1V11.19a1.008 1.008 0 0 1 .293-.707L9.878 2.9a3.008 3.008 0 0 1 4.244 0l7.585 7.586a1.008 1.008 0 0 1 .293.704Z" })));
}

function HourglassEnd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 24H7.005a4.014 4.014 0 0 1-3.044-1.4 3.94 3.94 0 0 1-.917-3.158A12.522 12.522 0 0 1 7.445 12a12.522 12.522 0 0 1-4.4-7.444A3.94 3.94 0 0 1 3.961 1.4 4.014 4.014 0 0 1 7.005 0H17a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155A12.556 12.556 0 0 1 16.551 12a12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1-.918 3.156A4.017 4.017 0 0 1 17 24Zm0-22H7.005a2.015 2.015 0 0 0-1.528.7 1.921 1.921 0 0 0-.456 1.556c.376 2.5 1.924 4.84 4.6 6.957a1 1 0 0 1 0 1.568c-2.676 2.119-4.221 4.461-4.6 6.96a1.921 1.921 0 0 0 .456 1.559 2.015 2.015 0 0 0 1.528.7H17a2.014 2.014 0 0 0 1.528-.7 1.917 1.917 0 0 0 .456-1.554c-.373-2.487-1.92-4.829-4.6-6.962a1 1 0 0 1 0-1.564c2.681-2.133 4.228-4.475 4.6-6.963a1.916 1.916 0 0 0-.461-1.557A2.014 2.014 0 0 0 17 2Zm-1.319 18H8.318a1 1 0 0 1-.927-1.374 11.185 11.185 0 0 1 3.471-4.272l.518-.412a1 1 0 0 1 1.245 0l.509.406a11.3 11.3 0 0 1 3.473 4.276A1 1 0 0 1 15.681 20Zm-5.647-2h3.928A11.57 11.57 0 0 0 12 16a11.3 11.3 0 0 0-1.966 2Z" })));
}

function Hourglass(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 24H7.005a4.02 4.02 0 0 1-3.045-1.4 3.945 3.945 0 0 1-.916-3.158A12.517 12.517 0 0 1 7.445 12a12.517 12.517 0 0 1-4.4-7.444A3.945 3.945 0 0 1 3.96 1.4 4.02 4.02 0 0 1 7.005 0H17a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155A12.556 12.556 0 0 1 16.551 12a12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1-.918 3.156A4.017 4.017 0 0 1 17 24zm0-22H7.005a2.014 2.014 0 0 0-1.528.7 1.917 1.917 0 0 0-.455 1.556c.375 2.5 1.922 4.84 4.6 6.957a1 1 0 0 1 0 1.568c-2.678 2.119-4.222 4.461-4.6 6.96a1.917 1.917 0 0 0 .455 1.559 2.014 2.014 0 0 0 1.528.7H17a2.014 2.014 0 0 0 1.528-.7 1.917 1.917 0 0 0 .456-1.554c-.373-2.487-1.92-4.829-4.6-6.962a1 1 0 0 1 0-1.564c2.681-2.133 4.228-4.475 4.6-6.963a1.916 1.916 0 0 0-.461-1.557A2.014 2.014 0 0 0 17 2z" })));
}

function IceCream(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.9 4.02a5.008 5.008 0 0 0-9.8 0 5.506 5.506 0 0 0-4.325 8.257l6.244 10.056a3.521 3.521 0 0 0 5.96 0l6.261-10.08A5.507 5.507 0 0 0 16.9 4.02ZM20 9.5a3.331 3.331 0 0 1-.056.573 34.663 34.663 0 0 1-6.624.884C11.329 5.647 19.593 3.842 20 9.5ZM12 2a3 3 0 0 1 2.893 2.249A5.52 5.52 0 0 0 12 6.341a5.52 5.52 0 0 0-2.893-2.092A3 3 0 0 1 12 2ZM7.5 6a3.517 3.517 0 0 1 3.181 4.955 35.968 35.968 0 0 1-6.624-.88A3.5 3.5 0 0 1 7.5 6Zm5.778 15.286a1.54 1.54 0 0 1-2.558 0l-5.55-8.94a37.938 37.938 0 0 0 13.656 0Z" })));
}

function IceSkate(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 19a1 1 0 0 0-1 1 2 2 0 0 1-2 2h-4v-4h2.1a3.905 3.905 0 0 0 3.9-3.9 6.014 6.014 0 0 0-4.823-5.883L13.3 7.44a2 2 0 0 1-1.592-1.7L11.3 2.576A3 3 0 0 0 7.619.086L2.91 1.42A4.015 4.015 0 0 0 0 5.269V14a4 4 0 0 0 4 4h1v4H1a1 1 0 0 0 0 2h19a4 4 0 0 0 4-4 1 1 0 0 0-1-1ZM2 14V5.269a2.01 2.01 0 0 1 1.455-1.925l4.652-1.32A1.053 1.053 0 0 1 8.328 2a1 1 0 0 1 .986.848L9.466 4H7a1 1 0 0 0 0 2h2.729a3.958 3.958 0 0 0 .245.915L7.635 8.338a1 1 0 0 0 1.039 1.709l2.466-1.5a3.95 3.95 0 0 0 .866.544l-1.375 2.413a1 1 0 0 0 1.738.99l1.638-2.874 2.777.556A4.011 4.011 0 0 1 20 14.1a1.9 1.9 0 0 1-1.9 1.9H4a2 2 0 0 1-2-2Zm5 4h7v4H7Z" })));
}

function IdBadge(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4h-4V3a3 3 0 0 0-6 0v1H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5zm-8-1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm11 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.184a2.982 2.982 0 0 0 5.632 0H19a3 3 0 0 1 3 3zm-12-9H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8H6v-6h3zm11-3a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1zm-2 8a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" })));
}

function Inbox(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 12h-3a2 2 0 0 0-2 2 2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2 2 2 0 0 0-2-2H3a3 3 0 0 0-3 3v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a3 3 0 0 0-3-3Zm1 7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1h3a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h3a1 1 0 0 1 1 1ZM3 10h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2ZM3 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Z" })));
}

function Incognito(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.5 17a3.5 3.5 0 0 0-3.235 2.174 4.685 4.685 0 0 0-2.53 0 3.494 3.494 0 1 0 .193 2.033A3.52 3.52 0 0 1 12 21a3.514 3.514 0 0 1 1.072.207A3.5 3.5 0 1 0 16.5 17Zm-9 5A1.5 1.5 0 1 1 9 20.5 1.5 1.5 0 0 1 7.5 22Zm9 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm3.475-13.325C19.709.612 15.3.026 15.105.006A.924.924 0 0 0 15 0a4.509 4.509 0 0 0-2.416.818 1.018 1.018 0 0 1-1.167 0A4.514 4.514 0 0 0 9 0a.924.924 0 0 0-.1.006c-.194.02-4.6.606-4.87 8.669C2.693 9.122 0 10.243 0 12c0 3.69 6.194 4 12 4s12-.31 12-4c0-1.757-2.693-2.878-4.025-3.325Zm-10.92-6.67a2.632 2.632 0 0 1 1.215.452 3.026 3.026 0 0 0 3.461 0 2.64 2.64 0 0 1 1.206-.452c.445.106 2.909.964 3.056 6.858A13.207 13.207 0 0 1 12 10a13.217 13.217 0 0 1-5.993-1.136C6.155 2.92 8.658 2.1 9.055 2.005ZM12 14c-8.265 0-10-1.088-10.012-1.918a6.04 6.04 0 0 1 2.86-1.574A14.557 14.557 0 0 0 12 12a14.557 14.557 0 0 0 7.152-1.492A6.829 6.829 0 0 1 22 12c0 .912-1.735 2-10 2Z" })));
}

function Indent(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM1.707 16.245l2.974-2.974a1.092 1.092 0 0 0 0-1.542L1.707 8.755A1 1 0 0 0 0 9.463v6.074a1 1 0 0 0 1.707.708Z" })));
}

function Infinity(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 6c-2.972 0-4.943 2.227-6 3.882C10.943 8.227 8.972 6 6 6a6 6 0 0 0 0 12c2.972 0 4.943-2.227 6-3.882C13.057 15.773 15.028 18 18 18a6 6 0 0 0 0-12zM6 16a4 4 0 0 1 0-8c2.693 0 4.382 2.945 4.9 4-.514 1.06-2.192 4-4.9 4zm12 0c-2.693 0-4.382-2.945-4.9-4 .515-1.058 2.193-4 4.9-4a4 4 0 0 1 0 8z" })));
}

function Info(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" }),
        React.createElement("path", { d: "M12 10h-1a1 1 0 0 0 0 2h1v6a1 1 0 0 0 2 0v-6a2 2 0 0 0-2-2Z" }),
        React.createElement("circle", { cx: 12, cy: 6.5, r: 1.5 })));
}

function Interactive(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 22.293-1.077-1.077-1.73-1.727 2.789-2.789a1 1 0 0 0-.365-1.646L14.355 11.8a2 2 0 0 0-2.561 2.56l3.263 8.969a1 1 0 0 0 .722.635 1.007 1.007 0 0 0 .217.023 1 1 0 0 0 .707-.293l2.786-2.794 1.727 1.727 1.077 1.077a1 1 0 0 0 1.414-1.414ZM16.4 21.165l-2.724-7.49 7.49 2.724Z" }),
        React.createElement("path", { d: "M10 20a10 10 0 1 1 10-10 1 1 0 0 1-2 0 8 8 0 1 0-8 8 1 1 0 0 1 0 2Z" }),
        React.createElement("path", { d: "M8.084 15.62a1 1 0 0 1-.383-.076 6 6 0 1 1 7.846-7.834 1 1 0 1 1-1.848.764A4 4 0 1 0 8.468 13.7a1 1 0 0 1-.384 1.924Z" })));
}

function Interlining(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 6h13a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2ZM23 11H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM23 18H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM6.087 6a.5.5 0 0 0 .353-.854L4 2.707a1 1 0 0 0-1.414 0L.147 5.146A.5.5 0 0 0 .5 6h1.794v12H.5a.5.5 0 0 0-.354.854l2.44 2.439a1 1 0 0 0 1.414 0l2.44-2.439A.5.5 0 0 0 6.087 18H4.294V6Z" })));
}

function Interrogation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" }),
        React.createElement("path", { d: "M12.717 5.063A4 4 0 0 0 8 9a1 1 0 0 0 2 0 2 2 0 0 1 2.371-1.967 2.024 2.024 0 0 1 1.6 1.595 2 2 0 0 1-1 2.125A3.954 3.954 0 0 0 11 14.257V15a1 1 0 0 0 2 0v-.743a1.982 1.982 0 0 1 .93-1.752 4 4 0 0 0-1.213-7.442Z" }),
        React.createElement("rect", { x: 11, y: 17, width: 2, height: 2, rx: 1 })));
}

function Italic(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0H7a1 1 0 0 0 0 2h5.354L9.627 22H4a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2h-5.354l2.727-20H20a1 1 0 0 0 0-2Z" })));
}

function Jpg(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.535-1.465l2.658-2.656A4.968 4.968 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5zM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3zm16.464 2.121a3.02 3.02 0 0 1-1.464.8V18a1 1 0 0 1 1-1h3.922a2.978 2.978 0 0 1-.8 1.465zM14 9.084v-2.1A1.991 1.991 0 0 1 16 5a2.022 2.022 0 0 1 1.772 1.078.626.626 0 1 1-1.11.58A.779.779 0 0 0 16 6.25a.742.742 0 0 0-.749.75v2.068a.742.742 0 0 0 .749.751.759.759 0 0 0 .75-.735V9h-.25a.5.5 0 0 1 0-1h.75a.75.75 0 0 1 .75.75v.334a2 2 0 0 1-2 1.984 1.991 1.991 0 0 1-2-1.984zM8 5.65v3.356a2.069 2.069 0 0 1-2.079 2.063A2.109 2.109 0 0 1 4.072 9.9a.651.651 0 1 1 1.162-.587.818.818 0 0 0 .687.459.771.771 0 0 0 .779-.783v-3.34a.65.65 0 0 1 1.3 0zM11.09 5H10a1 1 0 0 0-1 1v4.444a.625.625 0 1 0 1.25 0V9.223h.84a2.11 2.11 0 1 0 0-4.223zm0 2.969h-.832l-.006-1.719h.838a.86.86 0 1 1 0 1.719z" })));
}

function Key(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.505 24A7.5 7.5 0 0 1 5.469 9.283a7.368 7.368 0 0 1 3.881-.048l7.908-7.906A4.5 4.5 0 0 1 20.464 0 3.539 3.539 0 0 1 24 3.536a4.508 4.508 0 0 1-1.328 3.207L22 7.415A2.014 2.014 0 0 1 20.586 8H19v1a2 2 0 0 1-2 2h-1v1.586A1.986 1.986 0 0 1 15.414 14l-.65.65a7.334 7.334 0 0 1-.047 3.88 7.529 7.529 0 0 1-6.428 5.429 7.654 7.654 0 0 1-.784.041Zm0-13a5.5 5.5 0 1 0 5.289 6.99 5.4 5.4 0 0 0-.1-3.3 1 1 0 0 1 .238-1.035L14 12.586V11a2 2 0 0 1 2-2h1V8a2 2 0 0 1 2-2h1.586l.672-.672A2.519 2.519 0 0 0 22 3.536 1.537 1.537 0 0 0 20.465 2a2.52 2.52 0 0 0-1.793.743l-8.331 8.33a1 1 0 0 1-1.036.237A5.462 5.462 0 0 0 7.5 11ZM5 18a1 1 0 1 0 1-1 1 1 0 0 0-1 1Z" })));
}

function Keyboard(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 6h-6V3a1 1 0 0 0-2 0v3H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5Zm3 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2ZM10 12h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM19 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2ZM6 10H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z" }),
        React.createElement("circle", { cx: 5, cy: 15, r: 1 }),
        React.createElement("circle", { cx: 19, cy: 15, r: 1 })));
}

function Kite(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.76 16a5.207 5.207 0 0 0-3.707 1.535A15.143 15.143 0 0 1 4.274 22H3.123a1.121 1.121 0 0 1-.793-1.914L5.52 16.9l11.768-3.138A5.005 5.005 0 0 0 21 8.927V5a5.006 5.006 0 0 0-5-5h-3.927a5.005 5.005 0 0 0-4.831 3.712L4.1 15.485.916 18.672A3.121 3.121 0 0 0 3.123 24h1.151a17.127 17.127 0 0 0 12.193-5.051A3.243 3.243 0 0 1 22 21.242V23a1 1 0 0 0 2 0v-1.758A5.249 5.249 0 0 0 18.76 16Zm-1.988-4.174-8.43 2.248L14.5 7.915l3.356 3.356a2.981 2.981 0 0 1-1.084.555ZM19 5v3.927a2.984 2.984 0 0 1-.066.593L15.915 6.5 18.7 3.716A2.963 2.963 0 0 1 19 5Zm-6.927-3H16a2.977 2.977 0 0 1 1.287.3L14.5 5.087l-3.02-3.021A2.984 2.984 0 0 1 12.073 2Zm-2.9 2.228a2.981 2.981 0 0 1 .555-1.085L13.087 6.5l-6.162 6.163Z" })));
}

function Label(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.457 4.555 12.486.126a1 1 0 0 0-.972 0L3.543 4.555A3 3 0 0 0 2 7.177V19a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V7.177a3 3 0 0 0-1.543-2.622ZM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.177a1 1 0 0 1 .515-.877L12 2.144 19.486 6.3a1 1 0 0 1 .514.877Z" }),
        React.createElement("circle", { cx: 12, cy: 7, r: 1.5 })));
}

function Laptop(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 15.184V8a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v7.184A2.993 2.993 0 0 0 3 21h18a2.993 2.993 0 0 0 1-5.816ZM7 5h10a3 3 0 0 1 3 3v7h-4.151a2 2 0 0 0-1.528.708l-.247.292H9.925l-.246-.292A2 2 0 0 0 8.151 15H4V8a3 3 0 0 1 3-3Zm14 14H3a1 1 0 0 1 0-2h5.152l.246.292A2 2 0 0 0 9.925 18h4.149a2 2 0 0 0 1.528-.708l.247-.292H21a1 1 0 0 1 0 2Z" })));
}

function Lasso(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 0C6.935 0 2 4.037 2 9a7.544 7.544 0 0 0 .685 3.107 2.939 2.939 0 0 0-.435 3.072A6.976 6.976 0 0 0 0 20a3.888 3.888 0 0 0 4 4 1 1 0 0 0 .008-2A1.885 1.885 0 0 1 2 20a5.04 5.04 0 0 1 1.683-3.426 10.823 10.823 0 0 0 3.43.435c.3 0 .577-.007.843-.016A13.048 13.048 0 0 0 13 18c6.065 0 11-4.037 11-9s-4.935-9-11-9zM4.29 14.688a.986.986 0 0 1 0-1.4.985.985 0 0 1 1.4 0A8.432 8.432 0 0 1 6.737 15a7.448 7.448 0 0 1-2.447-.312zM13 16a11.119 11.119 0 0 1-3.907-.712A14.454 14.454 0 0 0 7.1 11.876a3.042 3.042 0 0 0-2.691-.795A5.535 5.535 0 0 1 4 9c0-3.859 4.037-7 9-7s9 3.141 9 7-4.037 7-9 7z" })));
}

function Laugh(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2ZM8 14a1 1 0 0 0-.963 1.285A5.5 5.5 0 0 0 12.007 19a5.469 5.469 0 0 0 4.966-3.715A1.021 1.021 0 0 0 16.01 14Zm-2-4c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" })));
}

function Layers(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.485 10.975 12 17.267 1.515 10.975A1 1 0 1 0 .486 12.69l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715Z" }),
        React.createElement("path", { d: "M22.485 15.543 12 21.834 1.515 15.543a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715ZM12 14.773a2.976 2.976 0 0 1-1.531-.425L.485 8.357a1 1 0 0 1 0-1.714L10.469.652a2.973 2.973 0 0 1 3.062 0l9.984 5.991a1 1 0 0 1 0 1.714l-9.984 5.991a2.976 2.976 0 0 1-1.531.425ZM2.944 7.5l8.556 5.133a.974.974 0 0 0 1 0L21.056 7.5 12.5 2.367a.974.974 0 0 0-1 0Z" })));
}

function LayoutFluid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2 11h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Zm0-9h11v7H2ZM22 0h-3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 9h-3V2h3ZM5 13H2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm0 9H2v-7h3ZM22 13H11a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm0 9H11v-7h11Z" })));
}

function Leaf(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.119.872a2.985 2.985 0 0 0-2.405-.857C17.921.285 8.528 1.448 4.9 5.072a9.931 9.931 0 0 0-.671 13.281l-3.94 3.94a1 1 0 0 0 1.414 1.414l3.94-3.94a9.929 9.929 0 0 0 13.285-.667c3.676-3.677 4.8-13.041 5.059-15.823a2.987 2.987 0 0 0-.868-2.405Zm-5.6 16.81a7.925 7.925 0 0 1-10.439.657l9.632-9.632a1 1 0 0 0-1.414-1.414l-9.637 9.632a7.924 7.924 0 0 1 .657-10.439C8.827 3.978 15.745 2.5 20.907 2.005A1 1 0 0 1 22 3.088c-.5 5.387-1.941 12.049-4.486 14.594Z" })));
}

function LetterCase(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.4 5.553a1.041 1.041 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 14h5.764l1.724 3.447a1 1 0 1 0 1.789-.894ZM4.619 12 6.5 8.236 8.383 12ZM23 8a1 1 0 0 0-1 1v.026A4.948 4.948 0 0 0 19 8a5 5 0 0 0 0 10 4.948 4.948 0 0 0 3-1.026V17a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm-4 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" })));
}

function LifeRing(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.155 19.741a11.954 11.954 0 0 0 0-15.482l.86-.86A1 1 0 0 0 20.6 1.985l-.86.86a11.954 11.954 0 0 0-15.482 0l-.86-.86A1 1 0 0 0 1.985 3.4l.86.86a11.954 11.954 0 0 0 0 15.482l-.86.86A1 1 0 1 0 3.4 22.015l.86-.86a11.954 11.954 0 0 0 15.482 0l.86.86a1 1 0 0 0 1.413-1.415ZM22 12a9.949 9.949 0 0 1-2.262 6.324l-3.571-3.571a4.966 4.966 0 0 0 0-5.506l3.571-3.571A9.949 9.949 0 0 1 22 12ZM9 12a3 3 0 1 1 3 3 3 3 0 0 1-3-3Zm3-10a9.949 9.949 0 0 1 6.324 2.262l-3.571 3.571a4.966 4.966 0 0 0-5.506 0L5.676 4.262A9.949 9.949 0 0 1 12 2ZM2 12a9.949 9.949 0 0 1 2.262-6.324l3.571 3.571a4.966 4.966 0 0 0 0 5.506l-3.571 3.571A9.949 9.949 0 0 1 2 12Zm10 10a9.949 9.949 0 0 1-6.324-2.262l3.571-3.571a4.966 4.966 0 0 0 5.506 0l3.571 3.571A9.949 9.949 0 0 1 12 22Z" })));
}

function LineWidth(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 24h-19A2.5 2.5 0 0 1 0 21.5 2.5 2.5 0 0 1 2.5 19h19a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5zM24 14a2 2 0 0 0-2-2H2a2 2 0 0 0 0 4h20a2 2 0 0 0 2-2zm0-6.5A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5 1.5 1.5 0 0 0 1.5 9h21A1.5 1.5 0 0 0 24 7.5zM24 2a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h22a1 1 0 0 0 1-1z" })));
}

function Link(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m13.845 17.267-3.262 3.262a5.028 5.028 0 0 1-7.111-7.109l3.262-3.265a1 1 0 0 0-1.415-1.414l-3.261 3.265A7.027 7.027 0 0 0 12 21.943l3.262-3.262a1 1 0 0 0-1.414-1.414ZM21.944 2.061A6.979 6.979 0 0 0 16.975 0a6.983 6.983 0 0 0-4.968 2.057L8.74 5.32a1 1 0 0 0 1.414 1.415l3.265-3.262A4.993 4.993 0 0 1 16.973 2a5.028 5.028 0 0 1 3.554 8.583l-3.262 3.262a1 1 0 1 0 1.415 1.415L21.942 12a7.037 7.037 0 0 0 .002-9.939Z" }),
        React.createElement("path", { d: "m14.293 8.293-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0-1.414-1.414Z" })));
}

function Lipstick(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 13.184V10a1 1 0 0 0-1-1V2.414A2.412 2.412 0 0 0 12.508.257l-2.622 1.31A3.4 3.4 0 0 0 8 4.62V9a1 1 0 0 0-1 1v3.184A3 3 0 0 0 5 16v3a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-3a3 3 0 0 0-2-2.816zM9 13v-2h6v2zm1-8.38a1.407 1.407 0 0 1 .781-1.264l2.619-1.31a.411.411 0 0 1 .6.368V9h-4zM17 19a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z" })));
}

function ListCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M4 6a2.982 2.982 0 0 1-2.122-.879L.334 3.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04L8.311.276a1 1 0 0 1 1.378 1.448L6.1 5.138A2.964 2.964 0 0 1 4 6zm20-2a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zM6.1 13.138l3.589-3.414a1 1 0 1 0-1.378-1.448l-3.6 3.431a1.023 1.023 0 0 1-1.414 0l-1.59-1.585a1 1 0 0 0-1.414 1.414l1.585 1.585a3 3 0 0 0 4.226.017zM24 12a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zM6.1 21.138l3.585-3.414a1 1 0 1 0-1.378-1.448l-3.6 3.431a1 1 0 0 1-1.456-.04l-1.585-1.414a1 1 0 0 0-1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017zM24 20a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1z" })));
}

function List(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" }),
        React.createElement("circle", { cx: 2, cy: 5, r: 2 }),
        React.createElement("circle", { cx: 2, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 2, cy: 19, r: 2 })));
}

function LocationAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 341.333a63.994 63.994 0 0 0 28.629-6.699l42.667-21.333A63.702 63.702 0 0 0 362.667 256v-63.296a63.679 63.679 0 0 0-35.371-57.237l-42.667-21.333a64.299 64.299 0 0 0-57.237 0l-42.667 21.333a63.68 63.68 0 0 0-35.392 57.237V256a63.701 63.701 0 0 0 35.371 57.259l42.667 21.333A64 64 0 0 0 256 341.333zM192 256v-63.296a21.333 21.333 0 0 1 1.088-6.4l46.507 23.253a36.695 36.695 0 0 0 32.811 0l46.507-23.253a21.333 21.333 0 0 1 1.088 6.4V256a21.205 21.205 0 0 1-11.797 19.093l-42.667 21.333a21.525 21.525 0 0 1-19.093 0l-42.667-21.333A21.203 21.203 0 0 1 192 256zm213.333 213.333h-57.792l74.389-68.736c91.645-91.642 91.647-240.224.005-331.869s-240.223-91.646-331.868-.005-91.647 240.225-.005 331.869c.201.201 74.397 68.741 74.397 68.741h-57.792c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333h298.667c11.782 0 21.333-9.551 21.333-21.333 0-11.781-9.552-21.333-21.334-21.333zM120.235 98.901c74.816-75.152 196.389-75.424 271.541-.608s75.424 196.389.608 271.541l-85.013 78.528c-29.016 27.349-74.366 27.19-103.189-.363l-83.947-77.568c-74.865-75.029-74.864-196.5 0-271.53z" })));
}

function LockAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-15a2.993 2.993 0 0 0-1 5.816V16a1 1 0 0 0 2 0v-3.184A2.993 2.993 0 0 0 12 7zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" })));
}

function Lock(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 8.424V7A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5 5 0 0 0-3-4.576ZM7 7a5 5 0 0 1 10 0v1H7Zm13 12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M12 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z" })));
}

function LuggageRolling(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 8h-2V5A5 5 0 0 0 7 5v3H5a5.006 5.006 0 0 0-5 5v4a5 5 0 0 0 3 4.576V23a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 17v-4a5.006 5.006 0 0 0-5-5ZM9 5a3 3 0 0 1 6 0v3H9Zm13 12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-5-4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z" })));
}

function MagicWand(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 9.064a3.049 3.049 0 0 0-.9-2.164 3.139 3.139 0 0 0-4.334 0L.9 18.769A3.064 3.064 0 0 0 5.23 23.1L17.1 11.231a3.047 3.047 0 0 0 .9-2.167zM3.816 21.688a1.087 1.087 0 0 1-1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505zM15.688 9.816 13 12.505 11.5 11l2.689-2.688a1.063 1.063 0 1 1 1.5 1.5zM4.863 2.855l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29zM17.755 2.5l1.356-.387L19.5.755a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1-2 0l-.387-1.355-1.358-.389a1.042 1.042 0 0 1 0-2z" })));
}

function MakeupBrush(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.229.771a2.637 2.637 0 0 0-3.591-.12L5.472 13.133C3.137 13.573 0 14.874 0 17.6A6.407 6.407 0 0 0 6.4 24c2.725 0 4.027-3.136 4.467-5.471L23.352 4.358a2.634 2.634 0 0 0-.123-3.587zM10.141 16.327l-2.468-2.468 2.005-1.767 2.23 2.23zM6.4 22A4.405 4.405 0 0 1 2 17.6c0-1.508 2.639-2.287 4.049-2.537l2.888 2.887C8.686 19.361 7.908 22 6.4 22zM21.849 3.04l-8.616 9.778-2.052-2.051 9.775-8.613a.631.631 0 0 1 .893.886z" })));
}

function ManHead(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.5 13a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm7.351-4.726A9.975 9.975 0 0 0 12 0C5.1 0 3.124 4.674 1.819 7.767A6.372 6.372 0 0 1 .5 10.136a1 1 0 0 0 .379 1.856 15.806 15.806 0 0 0 7.257-1.1 1.5 1.5 0 1 0 1.724-.84 15.09 15.09 0 0 0 4.956-4.467 1 1 0 1 0-1.626-1.162A13.357 13.357 0 0 1 3 10.027c.227-.453.438-.956.662-1.483C4.892 5.628 6.423 2 12 2a7.978 7.978 0 0 1 7.954 7.15 1 1 0 0 0 .816.878A1.5 1.5 0 0 1 20.5 13a1.606 1.606 0 0 1-.252-.027.994.994 0 0 0-1.117.651C18.215 16.221 15.132 19 12 19c-2.9 0-5.6-2.283-6.766-4.539a1 1 0 1 0-1.776.92A11.264 11.264 0 0 0 8 19.953V23a1 1 0 0 0 2 0v-2.262a7.708 7.708 0 0 0 4 0V23a1 1 0 0 0 2 0v-3.046a11.037 11.037 0 0 0 4.732-4.962 3.5 3.5 0 0 0 1.119-6.718Z" })));
}

function MapMarkerCross(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "m177.854 284.209 48.776-48.776-48.776-48.776c-8.45-8.161-8.685-21.628-.523-30.078 8.161-8.45 21.628-8.685 30.078-.523.177.171.352.346.523.523l48.776 48.776 48.776-48.776c8.162-8.45 21.628-8.684 30.078-.522 8.45 8.162 8.684 21.628.522 30.078a21.41 21.41 0 0 1-.522.522l-48.776 48.776 48.776 48.776c8.45 8.162 8.684 21.628.522 30.078-8.162 8.45-21.628 8.684-30.078.522a21.41 21.41 0 0 1-.522-.522l-48.776-48.776-48.776 48.776c-8.45 8.162-21.916 7.928-30.078-.522-7.962-8.243-7.962-21.312 0-29.556zM91.853 401.458C-.62 311.19-2.408 163.048 87.861 70.574s238.411-94.261 330.884-3.992a237.916 237.916 0 0 1 3.413 3.401c91.373 91.377 91.373 239.524 0 330.901l-84.916 78.471c-45.059 43.64-116.675 43.461-161.515-.404l-83.874-77.493zM65.264 235.434a190.19 190.19 0 0 0 56.072 135.372l83.704 77.343c28.737 27.463 73.939 27.641 102.891.404l84.746-78.322c74.605-74.929 74.344-196.15-.585-270.755s-196.15-74.344-270.755.585a190.186 190.186 0 0 0-56.073 135.373z" })));
}

function MapMarkerHome(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a11 11 0 0 0-7.75 18.806l3.943 3.641a5.442 5.442 0 0 0 7.593.02l3.992-3.689A11 11 0 0 0 12 0Zm6.392 17.337-3.984 3.681A3.513 3.513 0 0 1 9.571 21l-3.935-3.636A9 9 0 1 1 21 11a8.922 8.922 0 0 1-2.608 6.337ZM16.71 7.663l-3-2.081a3.008 3.008 0 0 0-3.42 0l-3 2.081A3 3 0 0 0 6 10.128V13.5A2.5 2.5 0 0 0 8.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-3.372a3 3 0 0 0-1.29-2.465ZM16 13.5a.5.5 0 0 1-.5.5H14v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2H8.5a.5.5 0 0 1-.5-.5v-3.372a1 1 0 0 1 .43-.822l3-2.081a1.006 1.006 0 0 1 1.14 0l3 2.081a1 1 0 0 1 .43.822Z" })));
}

function MapMarkerMinus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M174.376 479.018c44.884 43.908 116.571 44.088 161.674.405l85-78.548c92.079-90.853 93.072-239.148 2.22-331.227s-239.148-93.073-331.227-2.22a232.33 232.33 0 0 0-2.22 2.22c-91.46 91.475-91.448 239.774.027 331.234.19.19.379.379.57.567l83.956 77.569zM119.931 99.755c74.673-75.008 196.014-75.28 271.022-.607s75.28 196.014.607 271.022l-84.851 78.399c-28.975 27.269-74.221 27.101-102.992-.383l-83.786-77.42c-74.838-74.837-74.838-196.172-.002-271.01l.002-.001zm29.043 135.506c0-11.76 9.533-21.293 21.293-21.293h170.34c11.76 0 21.293 9.533 21.293 21.293s-9.533 21.293-21.293 21.293h-170.34c-11.76-.001-21.293-9.534-21.293-21.293z" })));
}

function MapMarkerPlus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M174.394 478.877c44.856 43.881 116.497 44.06 161.572.404l84.946-78.499c92.021-90.795 93.014-238.997 2.218-331.017S184.133-23.249 92.113 67.547c-.744.734-1.484 1.474-2.218 2.218-91.403 91.417-91.391 239.622.026 331.025l.569.567 83.904 77.52zM119.983 99.854c74.626-74.955 195.885-75.222 270.84-.596s75.222 195.885.596 270.84l-84.776 78.35c-28.956 27.252-74.174 27.084-102.927-.383l-83.733-77.371c-74.79-74.79-74.791-196.048-.002-270.839l.002-.001zm29.025 135.42c0-11.752 9.527-21.279 21.279-21.279h63.837v-63.837c0-11.752 9.527-21.279 21.279-21.279s21.279 9.527 21.279 21.279v63.837h63.837c11.752 0 21.279 9.527 21.279 21.279s-9.527 21.279-21.279 21.279h-63.837v63.837c0 11.752-9.527 21.279-21.279 21.279s-21.279-9.527-21.279-21.279v-63.837h-63.837c-11.752 0-21.279-9.527-21.279-21.279z" })));
}

function MapMarker(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm8.66 3.157-.719-.239A8 8 0 0 0 12 0a7.993 7.993 0 0 0-7.914 9.092 5.045 5.045 0 0 0-2.548 1.3A4.946 4.946 0 0 0 0 14v4.075a5.013 5.013 0 0 0 3.6 4.8l2.87.9A4.981 4.981 0 0 0 7.959 24a5.076 5.076 0 0 0 1.355-.186l5.78-1.71a2.987 2.987 0 0 1 1.573 0l2.387.8A4 4 0 0 0 24 19.021v-5.149a5.015 5.015 0 0 0-3.34-4.716ZM7.758 3.762a5.987 5.987 0 0 1 8.484 0 6.037 6.037 0 0 1 .011 8.5L12.7 15.717a.992.992 0 0 1-1.389 0l-3.553-3.44a6.04 6.04 0 0 1 0-8.515ZM22 19.021a1.991 1.991 0 0 1-.764 1.572 1.969 1.969 0 0 1-1.626.395l-2.345-.788a5.023 5.023 0 0 0-2.717-.016l-5.784 1.708a3 3 0 0 1-1.694-.029l-2.894-.9A3.013 3.013 0 0 1 2 18.075V14a2.964 2.964 0 0 1 .92-2.163 3.024 3.024 0 0 1 1.669-.806A8.021 8.021 0 0 0 6.354 13.7l3.567 3.453a2.983 2.983 0 0 0 4.174 0l3.563-3.463a7.962 7.962 0 0 0 1.813-2.821l.537.178A3.006 3.006 0 0 1 22 13.872Z" })));
}

function Map(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.68 1.167-.021-.007-2.715-.9a5.017 5.017 0 0 0-2.9-.079L9.468 1.8a3.025 3.025 0 0 1-2.048-.18l-.5-.232A5 5 0 0 0 0 6v12.075a5.013 5.013 0 0 0 3.6 4.8l2.869.9A4.991 4.991 0 0 0 7.964 24a4.592 4.592 0 0 0 1.336-.181l5.8-1.6a3 3 0 0 1 1.617.013l2.343.676A4 4 0 0 0 24 19.021V5.876a5.01 5.01 0 0 0-3.32-4.709ZM4.176 20.959A3.013 3.013 0 0 1 2 18.075V6a2.953 2.953 0 0 1 1.336-2.5A3 3 0 0 1 5 3a2.9 2.9 0 0 1 1.112.222s.745.319.887.37v18.25ZM9 21.827V3.879a5.105 5.105 0 0 0 1.006-.155L15 2.273V20.2Zm13-2.806a2 2 0 0 1-2.433 1.954L17 20.252V2.075l3.018.979A3.006 3.006 0 0 1 22 5.876Z" })));
}

function MarkerTime(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a5.419 5.419 0 0 1-3.808-1.552L4.25 18.805A11 11 0 1 1 19.777 3.222a11 11 0 0 1 0 15.556l-3.991 3.689A5.39 5.39 0 0 1 12 24zm0-22a9 9 0 0 0-6.364 15.364L9.57 21a3.516 3.516 0 0 0 4.838.019l3.984-3.682a9 9 0 0 0-.029-12.7A8.94 8.94 0 0 0 12 2zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm1.707 6.707a1 1 0 0 0 0-1.414L13 10.586V9a1 1 0 0 0-2 0v2a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414 0z" })));
}

function Marker(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" }),
        React.createElement("path", { d: "M12 24a5.271 5.271 0 0 1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055 10.055 0 0 1 20.11 0c0 2.538-1.933 6.49-5.744 11.747A5.271 5.271 0 0 1 12 24Zm0-21.819a7.883 7.883 0 0 0-7.874 7.874c0 2.01 1.893 5.727 5.329 10.466a3.145 3.145 0 0 0 5.09 0c3.436-4.739 5.329-8.456 5.329-10.466A7.883 7.883 0 0 0 12 2.181Z" })));
}

function MarsDouble(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 6h-3a1 1 0 0 0 0 2h1.586l-3.4 3.4a6.946 6.946 0 0 0-3.253-1.333A6.946 6.946 0 0 0 12.6 6.816l3.4-3.4V5a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2h-3a1 1 0 0 0 0 2h1.586l-3.4 3.4a6.993 6.993 0 1 0-5.117 12.531A7 7 0 1 0 18.6 12.816l3.4-3.4V11a1 1 0 0 0 2 0V8a2 2 0 0 0-2-2ZM2 11a5 5 0 1 1 5 5 5.006 5.006 0 0 1-5-5Zm11 11a5 5 0 0 1-4.908-4.094 7.005 7.005 0 0 0 5.814-5.814A4.995 4.995 0 0 1 13 22Z" })));
}

function Mars(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M448.249 0h-106.25c-11.736 0-21.25 9.53-21.25 21.285s9.514 21.285 21.25 21.285h97.453L294.271 187.991c-78.572-62.08-192.511-48.605-254.488 30.097S-8.742 410.916 69.83 472.996s192.511 48.605 254.488-30.097c51.91-65.917 51.91-158.893 0-224.81L469.5 72.668v97.614c0 11.756 9.514 21.285 21.25 21.285s21.25-9.53 21.25-21.285V63.856C512 28.589 483.458 0 448.249 0zM182.622 468.275c-76.285 0-138.126-61.943-138.126-138.354s61.841-138.354 138.126-138.354 138.126 61.943 138.126 138.354c-.093 76.372-61.88 138.26-138.126 138.354z" })));
}

function MaskCarnival(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.514 10.972a3.825 3.825 0 0 0-3.028-.944 35.867 35.867 0 0 0-6.447 1.39C13.359 8.913 15.75 8 18 8a3 3 0 0 0 0-6 6.973 6.973 0 0 0-5 2.111V1a1 1 0 0 0-2 0v3.11A6.977 6.977 0 0 0 6 2a3 3 0 0 0 0 6c2.25 0 4.641.913 4.961 3.418a35.887 35.887 0 0 0-6.447-1.39 3.831 3.831 0 0 0-3.028.944 4.528 4.528 0 0 0-1.469 3.4C.017 23.062 4.852 24 6.931 24a5.38 5.38 0 0 0 3.09-1.185A3.667 3.667 0 0 1 12 21.967a3.667 3.667 0 0 1 1.979.848A5.383 5.383 0 0 0 17.069 24c2.079 0 6.914-.938 6.914-9.625a4.532 4.532 0 0 0-1.469-3.403ZM18 4a1 1 0 0 1 0 2 7.9 7.9 0 0 0-4.732 1.386A5.006 5.006 0 0 1 18 4ZM6 6a1 1 0 0 1 0-2 5.009 5.009 0 0 1 4.733 3.386A7.9 7.9 0 0 0 6 6Zm11.069 16a3.667 3.667 0 0 1-1.979-.848A5.387 5.387 0 0 0 12 19.967a5.387 5.387 0 0 0-3.09 1.185A3.667 3.667 0 0 1 6.931 22c-3.169 0-4.914-2.708-4.914-7.625a2.565 2.565 0 0 1 .8-1.907 1.8 1.8 0 0 1 1.462-.453 32.493 32.493 0 0 1 7.352 1.75 1 1 0 0 0 .744 0 32.308 32.308 0 0 1 7.352-1.75 1.807 1.807 0 0 1 1.462.453 2.561 2.561 0 0 1 .8 1.907C21.983 19.292 20.238 22 17.069 22Z" }),
        React.createElement("path", { d: "M17.83 15.023C15.309 15.6 12 16.648 12 16.648c2.009.213 4.056 2.051 5.114 2.345 1.109.308 1.527-.844 1.867-2.725a1.02 1.02 0 0 0-1.151-1.245ZM5.019 16.268c.34 1.881.758 3.033 1.867 2.725 1.058-.294 3.1-2.132 5.114-2.345 0 0-3.309-1.052-5.83-1.625a1.02 1.02 0 0 0-1.151 1.245Z" })));
}

function Medicine(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m16 7-.023-1.177A2.992 2.992 0 0 0 15 0H9a2.993 2.993 0 0 0-1 5.816V7a5.006 5.006 0 0 0-5 5v7a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-7a5.006 5.006 0 0 0-5-5zM9 2h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm10 17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1a1 1 0 0 0 1-1V6h3.973L14 8.014A1 1 0 0 0 15 9h1a3 3 0 0 1 3 3zm-3-4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z" })));
}

function Megaphone(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 0a1 1 0 0 0-1 1c0 2.949-2.583 4-5 4H4a4 4 0 0 0-4 4v2a3.979 3.979 0 0 0 1.514 3.109l3.572 7.972A3.233 3.233 0 0 0 8.039 24a2.982 2.982 0 0 0 2.72-4.2l-2.2-4.8H11c2.417 0 5 1.051 5 4a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1zM8.937 20.619A.983.983 0 0 1 8.039 22a1.232 1.232 0 0 1-1.126-.734L4.105 15h2.254zM16 14.6a7.723 7.723 0 0 0-5-1.6H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7a7.723 7.723 0 0 0 5-1.595zm7.9.852a1 1 0 0 1-1.342.448l-2-1a1 1 0 0 1 .894-1.79l2 1a1 1 0 0 1 .448 1.337zm-3.79-9a1 1 0 0 1 .448-1.342l2-1a1 1 0 1 1 .894 1.79l-2 1a1 1 0 0 1-1.342-.448zM20 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z" })));
}

function Meh(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5 14a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1ZM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" })));
}

function MenuBurger(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("rect", { y: 11, width: 24, height: 2, rx: 1 }),
        React.createElement("rect", { y: 4, width: 24, height: 2, rx: 1 }),
        React.createElement("rect", { y: 18, width: 24, height: 2, rx: 1 })));
}

function MenuDotsVertical(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 12, cy: 2, r: 2 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 12, cy: 22, r: 2 })));
}

function MenuDots(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 2, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 22, cy: 12, r: 2 })));
}

function MicrophoneAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.757 16a5.214 5.214 0 0 0-3.707 1.535A15.14 15.14 0 0 1 4.272 22h-1.15a1.121 1.121 0 0 1-.794-1.914l.693-.693a7.768 7.768 0 0 0 5.1-2.272l4.326-4.321a6.01 6.01 0 0 0 1.292.2H14a6.018 6.018 0 0 0 4.246-1.758l1-1a6.01 6.01 0 0 0 1.751-4.5A5.946 5.946 0 0 0 18.848 1.4a6.179 6.179 0 0 0-8.274.544l-.633.634a6.33 6.33 0 0 0-1.694 5.933l-4.368 4.368a7.759 7.759 0 0 0-2.272 5.1l-.693.693A3.121 3.121 0 0 0 3.122 24h1.15a17.13 17.13 0 0 0 12.192-5.05A3.243 3.243 0 0 1 22 21.242V23a1 1 0 0 0 2 0v-1.758A5.249 5.249 0 0 0 18.757 16Zm-7.4-12.012.633-.634a4.413 4.413 0 0 1 3.1-1.3 3.815 3.815 0 0 1 2.471.877A3.971 3.971 0 0 1 19 5.826a4.013 4.013 0 0 1-1.167 3l-1 1a4 4 0 0 1-5.9-.266 4.169 4.169 0 0 1 .422-5.572ZM5.293 14.293l3.836-3.837c.091.13.164.27.267.393a6.119 6.119 0 0 0 1.131 1.038l-3.82 3.82a5.789 5.789 0 0 1-3.018 1.6 5.789 5.789 0 0 1 1.604-3.014Z" })));
}

function Microphone(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 20a8.009 8.009 0 0 0 8-8V8A8 8 0 0 0 4 8v4a8.009 8.009 0 0 0 8 8Zm0-18a6.006 6.006 0 0 1 5.91 5H15a1 1 0 0 0 0 2h3v2h-3a1 1 0 0 0 0 2h2.91a5.993 5.993 0 0 1-11.82 0H9a1 1 0 0 0 0-2H6V9h3a1 1 0 0 0 0-2H6.09A6.006 6.006 0 0 1 12 2Z" }),
        React.createElement("path", { d: "M23 12a1 1 0 0 0-1 1 9.01 9.01 0 0 1-9 9h-2a9.011 9.011 0 0 1-9-9 1 1 0 0 0-2 0 11.013 11.013 0 0 0 11 11h2a11.013 11.013 0 0 0 11-11 1 1 0 0 0-1-1Z" })));
}

function MinusSmall(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("rect", { x: 6, y: 11, width: 12, height: 2, rx: 1 })));
}

function Minus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("rect", { y: 11, width: 24, height: 2, rx: 1 })));
}

function Mobile(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 19a3 3 0 0 1-3 3h-3v-1a1 1 0 0 0-2 0v1H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-3-3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-6-3a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 2 0V8a3 3 0 0 0-6 0v4a1 1 0 0 0 1 1zm2-6a1 1 0 0 1 1 1v1h-2V8a1 1 0 0 1 1-1z" })));
}

function ModeLandscape(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 19a1 1 0 0 0 .707-1.707l-6.172-6.171a5 5 0 0 0-7.07 0l-2.172 2.171a1 1 0 0 0 1.414 1.414l2.172-2.171a3.07 3.07 0 0 1 4.242 0l6.172 6.171A1 1 0 0 0 18 19ZM16 10.5A3.5 3.5 0 1 0 12.5 7a3.5 3.5 0 0 0 3.5 3.5Zm0-5A1.5 1.5 0 1 1 14.5 7 1.5 1.5 0 0 1 16 5.5ZM23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM1 8a1 1 0 0 0 1-1V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" })));
}

function ModePortrait(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM1 8a1 1 0 0 0 1-1V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5ZM12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z" }),
        React.createElement("path", { d: "M18 20a1 1 0 0 0 1-1 6.006 6.006 0 0 0-6-6h-2a6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0 4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 1 1 0 0 0 1 1Z" })));
}

function Money(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 20H5a5.006 5.006 0 0 1-5-5V9a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v6a5.006 5.006 0 0 1-5 5zM5 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm7 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM5 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM5 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0-1 1z" })));
}

function Moon(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 24a12.021 12.021 0 0 1-8.914-3.966 11.9 11.9 0 0 1-3.02-9.309A12.122 12.122 0 0 1 13.085.152a13.061 13.061 0 0 1 5.031.205 2.5 2.5 0 0 1 1.108 4.226c-4.56 4.166-4.164 10.644.807 14.41a2.5 2.5 0 0 1-.7 4.32A13.894 13.894 0 0 1 15 24Zm.076-22a10.793 10.793 0 0 0-1.677.127 10.093 10.093 0 0 0-8.344 8.8A9.927 9.927 0 0 0 7.572 18.7a10.476 10.476 0 0 0 11.092 2.73.5.5 0 0 0 .139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459 0 0 0 .128-.466.49.49 0 0 0-.356-.361A10.657 10.657 0 0 0 15.076 2Z" })));
}

function Mountains(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 8a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 0 0 0 4 2 2 0 0 0 0-4Zm1.452 22h-8.863a2.548 2.548 0 0 1-2.221-1.26 2.463 2.463 0 0 1-.029-2.471l4.436-7.959a2.6 2.6 0 0 1 4.5 0l4.425 7.953a2.468 2.468 0 0 1-.028 2.475A2.551 2.551 0 0 1 21.452 24Zm-4.429-11a.56.56 0 0 0-.5.283l-4.436 7.959a.473.473 0 0 0 .006.485.559.559 0 0 0 .5.273h8.863a.562.562 0 0 0 .5-.275.479.479 0 0 0 0-.489l-4.432-7.952a.558.558 0 0 0-.501-.284ZM8 23a1 1 0 0 0-1-1H3.35a1.349 1.349 0 0 1-1.184-1.994l6.652-12.3A1.329 1.329 0 0 1 10 7a1.326 1.326 0 0 1 1.183.706l1.227 2.267a1 1 0 1 0 1.76-.952l-1.226-2.266a3.344 3.344 0 0 0-5.885 0l-6.653 12.3A3.351 3.351 0 0 0 3.35 24H7a1 1 0 0 0 1-1Z" })));
}

function Mouse(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 3V1a1 1 0 0 0-2 0v2a7.008 7.008 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.008 7.008 0 0 0-7-7Zm5 13a6 6 0 0 1-12 0v-6a5.006 5.006 0 0 1 5-5h2a5.006 5.006 0 0 1 5 5Z" }),
        React.createElement("path", { d: "M12 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z" })));
}

function MugAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h17a1 1 0 0 1 1 1Zm5-15c0 2.774-2.185 6-5 6h-1.612l-.3 1.821A4.984 4.984 0 0 1 12.152 20h-5.3a4.984 4.984 0 0 1-4.932-4.179L.056 4.657A4 4 0 0 1 4 0h11a3.968 3.968 0 0 1 3.983 4H19c3.131 0 5 1.5 5 4Zm-7.028-3.671A2 2 0 0 0 15 2H4a2 2 0 0 0-1.972 2.328l1.861 11.165A2.991 2.991 0 0 0 6.848 18h5.3a2.991 2.991 0 0 0 2.959-2.507ZM22 8c0-.5 0-2-3-2h-.279l-1 6H19c1.545 0 3-2.254 3-4Z" })));
}

function MusicAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.554.923A3.978 3.978 0 0 0 19.263.07l-9.184 1.722A5 5 0 0 0 6 6.706v9.85A3.959 3.959 0 0 0 4 16a4 4 0 1 0 4 4v-9.124A2 2 0 0 1 9.632 8.91l11.183-2.1A1 1 0 0 1 22 7.8v5.76a3.959 3.959 0 0 0-2-.56 4 4 0 1 0 4 4V4A3.987 3.987 0 0 0 22.554.923ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM20.447 4.848 9.263 6.944A4 4 0 0 0 8 7.416v-.71a3 3 0 0 1 2.447-2.949l9.185-1.722A2 2 0 0 1 22 4v.984a2.955 2.955 0 0 0-1.553-.136ZM20 19a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function Music(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 1h-6a5.006 5.006 0 0 0-5 5v8.026A4.948 4.948 0 0 0 5 13a5 5 0 1 0 5 5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8.026A4.948 4.948 0 0 0 19 13a5 5 0 1 0 5 5V6a5.006 5.006 0 0 0-5-5ZM5 21a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" })));
}

function Navigation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.987 6.108c-.039.011-7.228 2.864-7.228 2.864a2.76 2.76 0 0 0 .2 5.212l2.346.587.773 2.524A2.739 2.739 0 0 0 12.617 19h.044a2.738 2.738 0 0 0 2.532-1.786s2.693-7.165 2.7-7.2a3.2 3.2 0 0 0-3.908-3.907Zm1.983 3.359-2.648 7.043a.738.738 0 0 1-.692.49c-.1-.012-.525-.026-.675-.378l-.908-2.976a1 1 0 0 0-.713-.679l-2.818-.7a.762.762 0 0 1-.027-1.433l7.06-2.8a1.149 1.149 0 0 1 1.094.32 1.19 1.19 0 0 1 .327 1.113ZM12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" })));
}

function NetworkCloud(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M490.667 426.667H316.075a63.999 63.999 0 0 0-38.741-38.741v-88.789c28.672 0 53.76-.256 66.027-.491a110.913 110.913 0 0 0 22.741-2.795c39.201-9.122 69.811-39.732 78.933-78.933 13.398-56.167-20.211-112.828-75.925-128l-3.669-.811c-6.4-1.429-9.621-2.133-12.544-9.152-27.074-65.303-101.96-96.295-167.263-69.222A127.999 127.999 0 0 0 110.4 97.237a135.818 135.818 0 0 0-1.216 58.283c-37.88 16.299-55.374 60.219-39.076 98.098a74.668 74.668 0 0 0 48.654 42.446 78.771 78.771 0 0 0 17.771 2.603c13.973.384 54.059.555 95.872.555h2.261v88.725a63.998 63.998 0 0 0-38.741 38.72H21.333C9.551 426.667 0 436.218 0 448c0 11.782 9.551 21.333 21.333 21.333h174.592c11.559 33.178 47.826 50.704 81.004 39.146a63.613 63.613 0 0 0 39.145-39.146h174.592c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.55-21.333-21.332-21.333zM137.728 256a36.32 36.32 0 0 1-8.107-1.216 31.425 31.425 0 0 1-21.76-21.739c-4.54-15.55 3.256-32.04 18.155-38.4 19.159-8.109 29.761-28.774 25.173-49.067-9.726-46.114 19.773-91.381 65.887-101.106a84.994 84.994 0 0 1 4.641-.846 89.43 89.43 0 0 1 12.565-.96c34.665-.12 65.98 20.676 79.317 52.672a56.404 56.404 0 0 0 44.459 34.795c33.514 9.281 53.635 43.463 45.483 77.269a63.445 63.445 0 0 1-46.933 46.763 66.642 66.642 0 0 1-14.037 1.749c-14.784.278-188.736.513-204.843.086zM256 469.333c-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333 0 11.782-9.551 21.333-21.333 21.333z" })));
}

function Network(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 20h-8.184A3 3 0 0 0 13 18.184V14h6a2.989 2.989 0 0 0 2-5.22V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v4.78A2.989 2.989 0 0 0 5 14h6v4.184A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2ZM5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4h-3.586A1.986 1.986 0 0 0 14 8.586L13.586 9h-3.172L10 8.586A1.986 1.986 0 0 0 8.586 8H5Zm-1 7a1 1 0 0 1 1-1h3.586l.414.414a1.986 1.986 0 0 0 1.414.586h3.172A1.986 1.986 0 0 0 15 10.414l.414-.414H19a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Zm8 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" })));
}

function Notebook(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3.022V1a1 1 0 0 0-2 0v1.1a5 5 0 0 0-1-.1h-1V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H8a5 5 0 0 0-1 .1V1a1 1 0 0 0-2 0v2.022A4.979 4.979 0 0 0 3 7v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7a4.979 4.979 0 0 0-2-3.978zM19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zM17 8a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 4a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z" })));
}

function Opacity(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2.886 6.836a1 1 0 0 0 .829-.436 10.015 10.015 0 0 1 2.809-2.77 1 1 0 1 0-1.1-1.672A12 12 0 0 0 2.06 5.275a1 1 0 0 0 .826 1.561ZM2 12a10.112 10.112 0 0 1 .193-1.969 1 1 0 1 0-1.961-.392 12.135 12.135 0 0 0 0 4.728 1 1 0 0 0 .98.8 1.019 1.019 0 0 0 .2-.019 1 1 0 0 0 .784-1.177A10.1 10.1 0 0 1 2 12ZM6.528 20.372a10 10 0 0 1-2.81-2.766 1 1 0 0 0-1.656 1.123 11.993 11.993 0 0 0 3.37 3.315 1 1 0 0 0 1.1-1.672ZM12 0a12.107 12.107 0 0 0-2.171.2 1 1 0 0 0 .179 1.984 1.126 1.126 0 0 0 .181-.016A10.033 10.033 0 0 1 12 2v20a10.033 10.033 0 0 1-1.811-.164 1 1 0 0 0-.36 1.968A12.01 12.01 0 0 0 24 12 12.013 12.013 0 0 0 12 0Z" })));
}

function Package(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 8h-4a3 3 0 0 0-3 3v5h-2v-4a6 6 0 0 0-3.107-5.253 4 4 0 1 0-5.786 0A6 6 0 0 0 0 12v11a1 1 0 0 0 2 0v-5h20v5a1 1 0 0 0 2 0V11a3 3 0 0 0-3-3zM4 4a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm2 4a4 4 0 0 1 4 4v4H2v-4a4 4 0 0 1 4-4zm10 8v-5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v5z" })));
}

function PaintBrush(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.1.9a3.139 3.139 0 0 0-4.33 0L7.563 12.1a5.548 5.548 0 0 0-1.058-.1 5.457 5.457 0 0 0-3.885 1.609C1.268 14.962.314 18.592.031 20.563A3 3 0 0 0 3 24a3.1 3.1 0 0 0 .439-.031c1.971-.283 5.6-1.237 6.954-2.589a5.494 5.494 0 0 0 1.5-4.941L23.1 5.23a3.068 3.068 0 0 0 0-4.33zM8.977 19.966c-.725.725-3.5 1.689-5.824 2.023a1.015 1.015 0 0 1-.859-.283 1 1 0 0 1-.282-.859c.333-2.323 1.3-5.1 2.022-5.824a3.5 3.5 0 0 1 4.943 4.943zm12.711-16.15L11.067 14.438a5.378 5.378 0 0 0-1.5-1.508L20.184 2.312a1.086 1.086 0 0 1 1.5 0 1.062 1.062 0 0 1 .004 1.504z" })));
}

function Palette(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.115 8.05a1.5 1.5 0 1 0 1.835 1.065 1.5 1.5 0 0 0-1.835-1.065ZM12.115 5.05a1.5 1.5 0 1 0 1.835 1.065 1.5 1.5 0 0 0-1.835-1.065ZM7.115 8.05A1.5 1.5 0 1 0 8.95 9.115 1.5 1.5 0 0 0 7.115 8.05ZM7.115 14.05a1.5 1.5 0 1 0 1.835 1.065 1.5 1.5 0 0 0-1.835-1.065Z" }),
        React.createElement("path", { d: "M12.5.007A12 12 0 0 0 .083 12a12.014 12.014 0 0 0 12 12c.338 0 .67-.022 1-.05a1 1 0 0 0 .916-1l-.032-3.588a3.567 3.567 0 0 1 6.09-2.562l.1.1a1.912 1.912 0 0 0 1.769.521 1.888 1.888 0 0 0 1.377-1.177 11.924 11.924 0 0 0 .777-4.544A12.155 12.155 0 0 0 12.5.007Zm8.982 15.4-.014-.014a5.567 5.567 0 0 0-9.5 3.985L11.992 22a10 10 0 0 1 .09-20c.117 0 .235 0 .353.006a10.127 10.127 0 0 1 9.645 9.743 9.892 9.892 0 0 1-.595 3.651Z" })));
}

function PaperPlane(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.119.882a2.966 2.966 0 0 0-2.8-.8l-16 3.37a4.995 4.995 0 0 0-2.853 8.481l1.718 1.717a1 1 0 0 1 .293.708v3.168a2.965 2.965 0 0 0 .3 1.285l-.008.007.026.026A3 3 0 0 0 5.157 20.2l.026.026.007-.008a2.965 2.965 0 0 0 1.285.3h3.168a1 1 0 0 1 .707.292l1.717 1.717A4.963 4.963 0 0 0 15.587 24a5.049 5.049 0 0 0 1.605-.264 4.933 4.933 0 0 0 3.344-3.986l3.375-16.035a2.975 2.975 0 0 0-.792-2.833ZM4.6 12.238l-1.719-1.717a2.94 2.94 0 0 1-.722-3.074 2.978 2.978 0 0 1 2.5-2.026L20.5 2.086 5.475 17.113v-2.755a2.978 2.978 0 0 0-.875-2.12Zm13.971 7.17a3 3 0 0 1-5.089 1.712l-1.72-1.72a2.978 2.978 0 0 0-2.119-.878H6.888L21.915 3.5Z" })));
}

function Password(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 17a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-.293-9.707a1 1 0 0 0-1.414 0L12 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0 0-1.414zM22 16h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-.586-6 1.293-1.293a1 1 0 1 0-1.414-1.414L20 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L18.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L20 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414zM6 16H2a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm.707-8.707a1 1 0 0 0-1.414 0L4 8.586 2.707 7.293a1 1 0 1 0-1.414 1.414L2.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L4 11.414l1.293 1.293a1 1 0 1 0 1.414-1.414L5.414 10l1.293-1.293a1 1 0 0 0 0-1.414z" })));
}

function Pause(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.5 0A3.5 3.5 0 0 0 3 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 6.5 0ZM8 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0ZM17.5 0A3.5 3.5 0 0 0 14 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 17.5 0ZM19 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0Z" })));
}

function Paw(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8.164 8a2.5 2.5 0 0 1-1.579-.594 4.833 4.833 0 0 1-1.557-3.261C4.785 1.652 6.145.181 7.614.017A2.655 2.655 0 0 1 9.6.611a4.179 4.179 0 0 1 1.376 2.9C11.2 5.835 10.128 8 8.164 8Zm-.328-6c-.577.064-.921.883-.817 1.946a2.868 2.868 0 0 0 .826 1.9A.539.539 0 0 0 8.2 6c.351-.039.916-.941.783-2.3C8.641 1.834 7.861 2 7.836 2.005ZM3.164 14a2.5 2.5 0 0 1-1.579-.594 4.833 4.833 0 0 1-1.557-3.261c-.243-2.493 1.117-3.964 2.586-4.128a2.663 2.663 0 0 1 1.986.594 4.179 4.179 0 0 1 1.376 2.9C6.2 11.835 5.077 14 3.164 14Zm-.328-6c-.577.064-.921.883-.817 1.946a2.868 2.868 0 0 0 .826 1.9A.557.557 0 0 0 3.2 12c.351-.039.916-.941.783-2.3C3.718 7.872 2.861 8 2.836 8.005Zm13 0c-1.708.012-3.034-2.166-2.807-4.492a4.179 4.179 0 0 1 1.376-2.9 2.659 2.659 0 0 1 1.981-.591c1.469.164 2.829 1.635 2.586 4.128a4.833 4.833 0 0 1-1.557 3.262A2.5 2.5 0 0 1 15.836 8Zm-.816-4.3c-.133 1.355.432 2.257.783 2.3a.553.553 0 0 0 .352-.145 2.868 2.868 0 0 0 .826-1.9c.21-2.621-1.781-2.45-1.961-.255ZM20.836 14c-1.862 0-3.034-2.166-2.807-4.492a4.179 4.179 0 0 1 1.376-2.9 2.653 2.653 0 0 1 1.981-.594c1.469.164 2.829 1.635 2.586 4.128a4.833 4.833 0 0 1-1.557 3.262 2.5 2.5 0 0 1-1.579.596Zm-.816-4.3c-.133 1.355.432 2.257.783 2.3a.574.574 0 0 0 .352-.145 2.868 2.868 0 0 0 .826-1.9c.1-1.063-.24-1.882-.817-1.946C21.139 8 20.115 7.911 20.02 9.7ZM16 24a4.853 4.853 0 0 1-2.447-.606 3.332 3.332 0 0 0-3.106 0C7.434 25.083 3.922 23.227 4 19c0-4.635 4.507-9 8-9s8 4.364 8 9c0 2.944-1.645 5-4 5Zm-4-3a4.865 4.865 0 0 1 2.447.605C16.684 22.823 18.035 21.172 18 19c0-3.38-3.521-7-6-7s-6 3.62-6 7c-.032 2.169 1.308 3.823 3.553 2.605A4.865 4.865 0 0 1 12 21Z" })));
}

function Pencil(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.853 1.148a3.626 3.626 0 0 0-5.124 0L1.465 17.412A4.968 4.968 0 0 0 0 20.947V23a1 1 0 0 0 1 1h2.053a4.966 4.966 0 0 0 3.535-1.464L22.853 6.271a3.626 3.626 0 0 0 0-5.123ZM5.174 21.122A3.022 3.022 0 0 1 3.053 22H2v-1.053a2.98 2.98 0 0 1 .879-2.121L15.222 6.483l2.3 2.3ZM21.438 4.857l-2.506 2.507-2.3-2.295 2.507-2.507a1.623 1.623 0 1 1 2.295 2.3Z" })));
}

function Pharmacy(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a4 4 0 0 1-4-4v-4H4a4 4 0 0 1 0-8h4V4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1-4 4zM4 10a2 2 0 0 0 0 4h5a1 1 0 0 1 1 1v5a2 2 0 0 0 4 0v-5a1 1 0 0 1 1-1h5a2 2 0 0 0 0-4h-5a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1z" })));
}

function PhoneCall(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 1a1 1 0 0 1 1-1 10.011 10.011 0 0 1 10 10 1 1 0 0 1-2 0 8.009 8.009 0 0 0-8-8 1 1 0 0 1-1-1Zm1 5a4 4 0 0 1 4 4 1 1 0 0 0 2 0 6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2Zm9.093 10.739a3.1 3.1 0 0 1 0 4.378l-.91 1.049c-8.19 7.841-28.12-12.084-20.4-20.3l1.15-1a3.081 3.081 0 0 1 4.327.04c.031.031 1.884 2.438 1.884 2.438a3.1 3.1 0 0 1-.007 4.282L7.979 9.082a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.281-.006s2.406 1.852 2.437 1.883Zm-1.376 1.454s-2.393-1.841-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 0 1-.979.152A15.009 15.009 0 0 1 5.9 9.3a1 1 0 0 1 .145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1C-2.495 10.105 14.776 26.418 20.721 20.8l.911-1.05a1.121 1.121 0 0 0 .085-1.557Z" })));
}

function PhoneCross(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23 16.653-2.34-1.8a3.1 3.1 0 0 0-4.281.006l-1.469 1.168a12.781 12.781 0 0 1-6.931-6.945l1.158-1.456a3.1 3.1 0 0 0 .007-4.282L7.346 1A.989.989 0 0 0 7.26.9 3.081 3.081 0 0 0 2.934.859l-1.15 1c-7.719 8.21 12.2 28.145 20.4 20.3l.91-1.049a3.1 3.1 0 0 0 0-4.378 1.125 1.125 0 0 0-.094-.079Zm-1.364 3.1-.911 1.05C14.788 26.418-2.5 10.114 3.147 3.325l1.15-1a1.1 1.1 0 0 1 1.51-.039l1.786 2.323a.9.9 0 0 0 .086.1 1.1 1.1 0 0 1 0 1.549.849.849 0 0 0-.079.082L6.044 8.3a1 1 0 0 0-.145 1 15.009 15.009 0 0 0 8.822 8.811 1 1 0 0 0 .979-.152l1.96-1.559a.994.994 0 0 0 .084-.076 1.128 1.128 0 0 1 1.647.086l2.326 1.787a1.121 1.121 0 0 1-.085 1.557Zm2.071-13.46a1 1 0 0 1-1.414 1.414L20 5.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L18.586 4l-2.293-2.293A1 1 0 0 1 17.707.293L20 2.586 22.293.293a1 1 0 0 1 1.414 1.414L21.414 4Z" })));
}

function PhonePause(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.981 7.023v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0Zm-3 1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm6.095 13.116-.912 1.05c-8.19 7.84-28.12-12.084-20.4-20.3l1.15-1A3.08 3.08 0 0 1 7.242.93c.031.03 1.882 2.437 1.882 2.437a3.1 3.1 0 0 1-.005 4.281L7.959 9.1a12.783 12.783 0 0 0 6.932 6.947l1.464-1.165a3.1 3.1 0 0 1 4.282-.007s2.407 1.853 2.438 1.884a3.1 3.1 0 0 1 .001 4.38ZM21.7 18.216s-2.4-1.842-2.425-1.872a1.121 1.121 0 0 0-1.549 0 471.44 471.44 0 0 1-2.044 1.635 1 1 0 0 1-.979.151A15 15 0 0 1 5.88 9.318a1 1 0 0 1 .146-.995s1.607-2.017 1.635-2.044a1.1 1.1 0 0 0 0-1.55C7.629 4.7 5.788 2.306 5.788 2.306a1.1 1.1 0 0 0-1.51.038L3.127 3.349c-5.64 6.779 11.631 23.093 17.573 17.477l.912-1.05a1.122 1.122 0 0 0 .088-1.56Z" })));
}

function PhoneSlash(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.7.307a1 1 0 0 0-1.413 0L10.093 12.494a14.192 14.192 0 0 1-2.112-3.409l1.158-1.454a3.1 3.1 0 0 0 .007-4.277S7.294.95 7.264.92A3.08 3.08 0 0 0 2.94.873l-1.149 1c-4.016 4.448-.638 10.714 3.549 15.371L.3 22.28a1 1 0 0 0 1.413 1.413L23.7 1.72a1 1 0 0 0 0-1.413ZM2.007 6.245a4.116 4.116 0 0 1 1.146-2.909l1.149-1a1.1 1.1 0 0 1 1.509-.039s1.841 2.389 1.871 2.419a1.094 1.094 0 0 1 0 1.547C7.656 6.289 6.048 8.3 6.048 8.3a1 1 0 0 0-.148 1 16.393 16.393 0 0 0 2.766 4.618l-1.914 1.915c-2.943-3.159-4.745-6.746-4.745-9.588Zm21.078 10.488a3.1 3.1 0 0 1 0 4.373l-.91 1.048C18.3 25.681 13.6 23.618 9.2 20.645a1 1 0 0 1 1.2-1.6c3.509 2.315 7.332 4.342 10.32 1.749l.911-1.049a1.118 1.118 0 0 0 .085-1.558s-2.392-1.84-2.422-1.87a1.1 1.1 0 0 0-1.548 0c-.027.027-2.043 1.633-2.043 1.633a.994.994 0 0 1-.964.157 15.425 15.425 0 0 1-1.912-.881 1 1 0 0 1 .932-1.763c.371.2.756.391 1.156.561l1.462-1.163a3.1 3.1 0 0 1 4.278-.006s2.399 1.845 2.43 1.878Z" })));
}

function Physics(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.563 1.437C20.189-.937 16.644-.358 12 3.137 7.357-.358 3.813-.938 1.437 1.437S-.358 7.356 3.137 12c-3.495 4.643-4.075 8.188-1.7 10.563A4.7 4.7 0 0 0 4.879 24C6.85 24 9.23 22.948 12 20.864 14.769 22.948 17.149 24 19.121 24a4.7 4.7 0 0 0 3.442-1.437c2.375-2.375 1.8-5.919-1.7-10.563 3.495-4.644 4.075-8.188 1.7-10.563zm-3.478.591a2.806 2.806 0 0 1 2.067.819c1.746 1.747.456 4.713-1.588 7.539-.838-.988-1.782-2.015-2.858-3.092s-2.106-2.021-3.094-2.86c1.898-1.373 3.86-2.406 5.473-2.406zM18.311 12c-1.011 1.22-2.082 2.361-3.016 3.3s-2.075 2-3.295 3.011C10.78 17.3 9.639 16.229 8.705 15.3S6.7 13.22 5.689 12C6.7 10.78 7.771 9.638 8.705 8.705S10.78 6.7 12 5.688A49.844 49.844 0 0 1 18.311 12zM2.848 2.848a2.8 2.8 0 0 1 2.067-.82c1.613 0 3.575 1.033 5.473 2.406-.988.839-2.016 1.783-3.094 2.86s-2.02 2.1-2.859 3.092C2.392 7.56 1.1 4.594 2.848 2.848zm0 18.3c-1.746-1.746-.456-4.713 1.587-7.538.839.988 1.783 2.015 2.859 3.092s2.1 2.023 3.089 2.861c-2.825 2.046-5.791 3.337-7.535 1.589zm18.3 0c-1.745 1.744-4.71.457-7.535-1.585.986-.838 2.014-1.787 3.089-2.861s2.02-2.1 2.858-3.092c2.048 2.83 3.34 5.796 1.592 7.542z" }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2 })));
}

function Picture(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM5 2h14a3 3 0 0 1 3 3v14a2.951 2.951 0 0 1-.3 1.285l-9.163-9.163a5 5 0 0 0-7.072 0L2 14.586V5a3 3 0 0 1 3-3Zm0 20a3 3 0 0 1-3-3v-1.586l4.878-4.878a3 3 0 0 1 4.244 0l9.163 9.164A2.951 2.951 0 0 1 19 22Z" }),
        React.createElement("path", { d: "M16 10.5A3.5 3.5 0 1 0 12.5 7a3.5 3.5 0 0 0 3.5 3.5Zm0-5A1.5 1.5 0 1 1 14.5 7 1.5 1.5 0 0 1 16 5.5Z" })));
}

function PingPong(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.261 2.739A9.836 9.836 0 0 0 8.3 2.114a4.489 4.489 0 1 0-4.166 6.849 9.415 9.415 0 0 0 .842 5.668.5.5 0 0 1-.07.564L2 16.945A3.743 3.743 0 0 0 3.735 24a3.891 3.891 0 0 0 .457-.027 3.705 3.705 0 0 0 2.725-1.735l2.068-3.127a.5.5 0 0 1 .575-.089 9.663 9.663 0 0 0 11.315-2.147A10.5 10.5 0 0 0 24 9.758a9.409 9.409 0 0 0-2.739-7.019ZM2 4.5A2.5 2.5 0 1 1 4.5 7 2.5 2.5 0 0 1 2 4.5Zm8.44 12.726a2.494 2.494 0 0 0-3.017.632 1.166 1.166 0 0 0-.067.09l-2.127 3.218A1.742 1.742 0 0 1 2.02 20a1.76 1.76 0 0 1 .961-1.312l3.041-1.831a.956.956 0 0 0 .126-.09 2.49 2.49 0 0 0 .623-3.016 7.331 7.331 0 0 1-.693-4.259l8.433 8.433a7.31 7.31 0 0 1-4.071-.699Zm9.021-1.765a8.871 8.871 0 0 1-2.732 1.865c-.009-.01-.012-.023-.022-.033L7.36 7.945A4.473 4.473 0 0 0 9 4.5c0-.119-.026-.231-.035-.347a8.01 8.01 0 0 1 10.882 0A7.423 7.423 0 0 1 22 9.7a8.506 8.506 0 0 1-2.539 5.761Z" })));
}

function PizzaSlice(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.2.8a2.716 2.716 0 0 0-2.9-.624L3.155 6.929a4.976 4.976 0 0 0-3 5.824 15.855 15.855 0 0 0 11.094 11.1 4.983 4.983 0 0 0 5.825-3.009l6.758-17.172A2.71 2.71 0 0 0 23.2.8ZM11.746 21.911a13.8 13.8 0 0 1-9.656-9.657 2.949 2.949 0 0 1 1.265-3.18 11.987 11.987 0 0 0 11.569 11.572 2.947 2.947 0 0 1-3.178 1.265Zm4.027-3.227c-6.191-.1-10.355-4.265-10.456-10.457l15.693-6.18a.717.717 0 0 1 .771.17.7.7 0 0 1 .181.747L21.3 4.645c-5.758-1.98-8.942 6.209-3.413 8.668Zm2.847-7.232a2.654 2.654 0 0 1 1.943-4.935Z" }),
        React.createElement("path", { d: "M11 9a2 2 0 0 0 0 4 2 2 0 0 0 0-4Z" })));
}

function Plane(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 10h-3.307l-4.247-8.437A3 3 0 0 0 10.812 0h-.182A2.63 2.63 0 0 0 8.1 3.361L10.028 10H7.644a2.982 2.982 0 0 1-2.122-.879L4.105 7.7a2.409 2.409 0 0 0-2.814-.433A2.319 2.319 0 0 0 .125 8.689a2.525 2.525 0 0 0 .228 1.966l1.614 2.825A5.012 5.012 0 0 0 6.308 16h3.711l-1.668 4.447A2.629 2.629 0 0 0 10.812 24a2.972 2.972 0 0 0 2.605-1.513L17.464 16H21a3 3 0 0 0 0-6ZM10.025 2.805A.63.63 0 0 1 10.63 2h.182a.989.989 0 0 1 .863.491L15.455 10H12.11ZM21 14h-4.091a1 1 0 0 0-.848.471l-4.371 7.008a1 1 0 0 1-.878.521.628.628 0 0 1-.588-.85l2.174-5.8a1 1 0 0 0-.937-1.35H6.308a3 3 0 0 1-2.6-1.512L2.089 9.662a.523.523 0 0 1-.047-.4.323.323 0 0 1 .158-.211A.437.437 0 0 1 2.4 9a.415.415 0 0 1 .287.118l1.417 1.417A4.972 4.972 0 0 0 7.644 12H21a1 1 0 0 1 0 2Z" })));
}

function PlayAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm4.342 15.005a2.368 2.368 0 0 1-1.186-.323 2.313 2.313 0 0 1-1.164-2.021V9.339a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1-1.101.289zm-.025-8a.314.314 0 0 0-.157.042.327.327 0 0 0-.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0-.169-.292L9.545 9.073a.462.462 0 0 0-.228-.068z" })));
}

function Play(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.494 7.968-9.54-7A5 5 0 0 0 3 5v14a5 5 0 0 0 7.957 4.031l9.54-7a5 5 0 0 0 0-8.064Zm-1.184 6.45-9.54 7A3 3 0 0 1 5 19V5a2.948 2.948 0 0 1 1.641-2.672A3.018 3.018 0 0 1 8.006 2a2.97 2.97 0 0 1 1.764.589l9.54 7a3 3 0 0 1 0 4.836Z" })));
}

function PlayingCards(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.466 1.967 14.78.221a5.011 5.011 0 0 0-6.224 3.24L8.368 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a4.975 4.975 0 0 0 3.92-1.934 5.029 5.029 0 0 0 .689.052 4.976 4.976 0 0 0 4.775-3.563L23.8 8.156a5.021 5.021 0 0 0-3.334-6.189ZM11 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3ZM21.887 7.563l-3.412 10.4a2.992 2.992 0 0 1-2.6 2.134A4.992 4.992 0 0 0 16 19V9a5.006 5.006 0 0 0-5-5h-.507a3 3 0 0 1 3.7-1.867l5.686 1.746a3.006 3.006 0 0 1 2.008 3.684ZM12 13c0 1.45-1.544 3.391-2.714 4.378a1.991 1.991 0 0 1-2.572 0C5.544 16.391 4 14.45 4 13a2 2 0 0 1 4 0 2 2 0 0 1 4 0Z" })));
}

function PlusSmall(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" })));
}

function Plus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11H13V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v10H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h10v10a1 1 0 0 0 1 1 1 1 0 0 0 1-1V13h10a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" })));
}

function PokerChip(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm10 12a10 10 0 0 1-.186 1.9l-1.932-.58a7.442 7.442 0 0 0 0-2.64l1.932-.58A10 10 0 0 1 22 12zm-.76-3.816-1.93.579a8.048 8.048 0 0 0-4.073-4.073l.579-1.93a10.058 10.058 0 0 1 5.424 5.424zM12 18a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm1.9-15.814-.58 1.932a7.442 7.442 0 0 0-2.64 0l-.58-1.932a9.8 9.8 0 0 1 3.8 0zm-5.716.574.579 1.93A8.048 8.048 0 0 0 4.69 8.763l-1.93-.579A10.058 10.058 0 0 1 8.184 2.76zM2 12a10 10 0 0 1 .186-1.9l1.932.58a7.442 7.442 0 0 0 0 2.64l-1.932.58A10 10 0 0 1 2 12zm.76 3.816 1.93-.579a8.048 8.048 0 0 0 4.073 4.073l-.579 1.93a10.058 10.058 0 0 1-5.424-5.424zm7.34 6 .58-1.932a7.442 7.442 0 0 0 2.64 0l.58 1.932a9.8 9.8 0 0 1-3.8 0zm5.716-.575-.579-1.929a8.048 8.048 0 0 0 4.073-4.073l1.93.579a10.053 10.053 0 0 1-5.424 5.421zm-1.185-10.349a1.848 1.848 0 0 1 0 2.216l-1.893 2.523a.922.922 0 0 1-1.476 0l-1.893-2.523a1.848 1.848 0 0 1 0-2.216l1.893-2.523a.922.922 0 0 1 1.476 0z" })));
}

function Portrait(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 22v-1a5 5 0 0 1 10 0v1Zm15-3a3 3 0 0 1-3 3v-1a7 7 0 0 0-14 0v1a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M12 4a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function Pound(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 22H6.884A6.934 6.934 0 0 0 8 18v-4h7a1 1 0 0 0 0-2H8V8a6 6 0 0 1 12 0 1 1 0 0 0 2 0A8 8 0 0 0 6 8v4H4a1 1 0 0 0 0 2h2v4c0 1.2-.292 4-3 4a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z" })));
}

function Power(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 3.849a1.02 1.02 0 0 0 .629.926A9 9 0 0 1 21 13.292 9 9 0 0 1 3 13a9 9 0 0 1 5.371-8.224A1.023 1.023 0 0 0 9 3.848a1 1 0 0 0-1.374-.929 11 11 0 1 0 8.751 0 1 1 0 0 0-1.377.93Z" }),
        React.createElement("rect", { x: 11, width: 2, height: 8, rx: 1 })));
}

function Presentation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 14h-1V5a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v9H1a1 1 0 0 0 0 2h10v4H9a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2v-4h10a1 1 0 0 0 0-2zM4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9H4z" })));
}

function Print(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 6V4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5 3 3 0 0 0 3 3h8a3 3 0 0 0 3-3 5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5ZM7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H7Zm10 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm5-5a3 3 0 0 1-3 3v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M18 10h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" })));
}

function Protractor(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.977 11.264C21.613 5.724 16.474 1.041 10.731 1A2 2 0 0 0 9 0H7a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h2a2 2 0 0 0 1.731-1H11a11.041 11.041 0 0 0 8.028-3.481 10.915 10.915 0 0 0 2.949-8.255Zm-4.409 6.887A8.911 8.911 0 0 1 11 21h-1a1 1 0 0 0-1 1H7a2 2 0 0 1-2-2v-1h1a1 1 0 0 0 0-2H5v-2h1a1 1 0 0 0 0-2H5v-2h1a1 1 0 0 0 0-2H5V7h1a1 1 0 0 0 0-2H5V4a2 2 0 0 1 2-2h2a1 1 0 0 0 1 1h.656c4.757 0 9.027 3.844 9.324 8.394a8.925 8.925 0 0 1-2.412 6.757ZM11 7a2 2 0 0 0-2 2v6a2.013 2.013 0 0 0 1.976 1.989 5.09 5.09 0 0 0 5-4.5A5 5 0 0 0 11 7Zm0 8V9a3 3 0 0 1 2.986 3.3A3.089 3.089 0 0 1 11 15Z" })));
}

function Pulse(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zm3 13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-2-4a1 1 0 0 1-1 1h-2.965l-1.7 2.555A1 1 0 0 1 13.5 14h-.062a1 1 0 0 1-.833-.551l-2.229-4.461-1.044 1.567A1 1 0 0 1 8.5 11H5a1 1 0 0 1 0-2h2.965l1.7-2.555A.987.987 0 0 1 10.562 6a1 1 0 0 1 .833.551l2.229 4.459 1.044-1.567A1 1 0 0 1 15.5 9H19a1 1 0 0 1 1 1z" })));
}

function Pyramid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.036 24H3.964a3.955 3.955 0 0 1-3.542-5.733L8.459 2.189A3.932 3.932 0 0 1 11.736.008a3.977 3.977 0 0 1 3.805 2.181l8.037 16.078A3.961 3.961 0 0 1 20.036 24ZM2 20.043A1.973 1.973 0 0 0 3.964 22h16.072A1.973 1.973 0 0 0 22 20.043a1.95 1.95 0 0 0-.212-.881L13.753 3.083a1.959 1.959 0 0 0-3.506 0L2.21 19.162a1.95 1.95 0 0 0-.21.881Z" })));
}

function QuoteRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8 4H4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 2 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2ZM22 4h-4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 16 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2Z" })));
}

function Rainbow(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 21a1 1 0 0 1-1-1v-5C21.449 1.73 2.546 1.741 2 15v5a1 1 0 0 1-2 0v-5C.661-.924 23.345-.911 24 15v5a1 1 0 0 1-1 1Zm-3-1v-5C19.6 4.4 4.4 4.407 4 15v5a1 1 0 0 0 2 0v-5c.253-7.932 11.75-7.926 12 0v5a1 1 0 0 0 2 0Zm-4 0v-5a4 4 0 0 0-8 0v5a1 1 0 0 0 2 0v-5a2 2 0 0 1 4 0v5a1 1 0 0 0 2 0Z" })));
}

function Raindrops(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 24a6.006 6.006 0 0 1-6-6c0-1.56 1.2-4.045 3.552-7.388a3.016 3.016 0 0 1 4.9 0C17.805 13.955 19 16.44 19 18a6.006 6.006 0 0 1-6 6Zm0-12.657a.98.98 0 0 0-.813.422C9.311 15.844 9 17.484 9 18a4 4 0 0 0 8 0c0-.516-.311-2.156-3.187-6.235a.98.98 0 0 0-.813-.422ZM5 11a5.006 5.006 0 0 1-5-5c0-1.26.842-2.855 2.574-4.877a3.2 3.2 0 0 1 4.852 0C9.158 3.143 10 4.738 10 6a5.006 5.006 0 0 1-5 5Zm0-9a1.173 1.173 0 0 0-.906.421C2.151 4.689 2 5.732 2 6a3 3 0 0 0 6 0c0-.266-.151-1.309-2.094-3.576A1.171 1.171 0 0 0 5 2ZM19.5 9.964a4.505 4.505 0 0 1-4.5-4.5c0-1.091.7-2.506 2.146-4.326a3.02 3.02 0 0 1 4.708 0C23.3 2.958 24 4.373 24 5.464a4.505 4.505 0 0 1-4.5 4.5ZM19.5 2a1 1 0 0 0-.787.381C17.123 4.385 17 5.247 17 5.464a2.5 2.5 0 0 0 5 0c0-.217-.123-1.079-1.713-3.082A1 1 0 0 0 19.5 2Z" })));
}

function Rec(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" })));
}

function Receipt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 0H8a5.006 5.006 0 0 0-5 5v18a1 1 0 0 0 1.564.825l2.106-1.439 2.106 1.439a1 1 0 0 0 1.13 0l2.1-1.439 2.1 1.439a1 1 0 0 0 1.131 0l2.1-1.438 2.1 1.437A1 1 0 0 0 21 23V5a5.006 5.006 0 0 0-5-5Zm3 21.1-1.1-.752a1 1 0 0 0-1.132 0l-2.1 1.439-2.1-1.439a1 1 0 0 0-1.131 0l-2.1 1.439-2.1-1.439a1 1 0 0 0-1.129 0L5 21.1V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z" }),
        React.createElement("rect", { x: 7, y: 8, width: 10, height: 2, rx: 1 }),
        React.createElement("rect", { x: 7, y: 12, width: 8, height: 2, rx: 1 })));
}

function RecordVinyl(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" }),
        React.createElement("path", { d: "M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" }),
        React.createElement("circle", { cx: 12, cy: 12, r: 1 })));
}

function RectabgleVertical(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 0H8a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z" })));
}

function RectangleHorizontal(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3H5a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm3 13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" })));
}

function RectanglePanoramic(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 5H5a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-4a5 5 0 0 0-5-5Zm3 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" })));
}

function Recycle(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m10.357 2.921-1.416 2.3a1 1 0 0 1-1.7-1.048l1.416-2.3a3.948 3.948 0 0 1 6.692 0l4.2 6.834.441-2.365a1 1 0 0 1 1.967.366l-.5 2.67a3 3 0 0 1-2.942 2.451c-.195 0-3.217-.576-3.217-.576a1 1 0 0 1 .386-1.962l2.133.421-4.174-6.791a1.934 1.934 0 0 0-3.286 0ZM23.409 14.98l-.968-1.572a1 1 0 1 0-1.7 1.048l.968 1.572a1.934 1.934 0 0 1 .041 1.98 1.91 1.91 0 0 1-1.688.992h-7.386l1.271-1.269a1 1 0 0 0-1.412-1.416L10.843 18A2.86 2.86 0 0 0 10 19.98s0 .01 0 .014v.02a2.884 2.884 0 0 0 .855 2.071l1.682 1.652a1 1 0 1 0 1.4-1.427L12.609 21h7.453a3.948 3.948 0 0 0 3.347-6.02ZM6.78 7.213a2.984 2.984 0 0 0-2.263-.46l-2.629.518a1 1 0 1 0 .386 1.962l2.108-.415L.591 14.98A3.948 3.948 0 0 0 3.937 21H7.08a1 1 0 0 0 0-2H3.937a1.91 1.91 0 0 1-1.684-.992 1.934 1.934 0 0 1 .041-1.98L6.132 9.79l.446 2.394a1 1 0 0 0 1.967-.368l-.5-2.67A2.985 2.985 0 0 0 6.78 7.213Z" })));
}

function RedoAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.9 14.723a1 1 0 0 0 1.414 0l4.949-4.95a2.5 2.5 0 0 0 0-3.536l-4.95-4.949A1 1 0 0 0 16.9 2.7L21.2 7H5a5 5 0 0 0-5 5v7a5.006 5.006 0 0 0 5 5h14a1 1 0 0 0 0-2H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h16.212L16.9 13.309a1 1 0 0 0 0 1.414Z" })));
}

function Redo(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 23v-7a9.01 9.01 0 0 1 9-9h4.83V5.414A2 2 0 0 1 17.244 4l5.88 5.879a3 3 0 0 1 0 4.242L17.244 20a2 2 0 0 1-3.414-1.414V17H8a6.006 6.006 0 0 0-6 6 1 1 0 0 1-2 0ZM15.83 8a1 1 0 0 1-1 1H9a7.008 7.008 0 0 0-7 7v1.714A7.984 7.984 0 0 1 8 15h6.83a1 1 0 0 1 1 1v2.586l5.879-5.879a1 1 0 0 0 0-1.414L15.83 5.414Z" })));
}

function Reflect(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 13H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2Zm-4.066-5.874a2.427 2.427 0 0 0-1.284-2.731L9.668.428A3.3 3.3 0 0 0 6.4.433 2.809 2.809 0 0 0 5 2.914V6a3 3 0 0 0 3 3h8.318a2.538 2.538 0 0 0 2.616-1.874ZM8.737 2.2l8.012 3.98a.421.421 0 0 1 .24.477c-.074.308-.494.341-.671.341H8A1 1 0 0 1 7 6V2.914a.825.825 0 0 1 .418-.758A1.168 1.168 0 0 1 8.011 2a1.5 1.5 0 0 1 .726.2Zm.891 21.394 8.033-3.994a2.425 2.425 0 0 0 1.273-2.726A2.538 2.538 0 0 0 16.318 15H8a3 3 0 0 0-3 3v3.085a2.808 2.808 0 0 0 1.4 2.481A3.212 3.212 0 0 0 8.032 24a3.287 3.287 0 0 0 1.596-.408ZM16.318 17c.177 0 .6.033.671.341a.417.417 0 0 1-.229.472L8.7 21.822a1.313 1.313 0 0 1-1.279.02.824.824 0 0 1-.421-.758V18a1 1 0 0 1 1-1Z" })));
}

function Refresh(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 2a10.032 10.032 0 0 1 7.122 3H16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4.143A1.858 1.858 0 0 0 22 5.143V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.078A11.981 11.981 0 0 0 .05 10.9a1.007 1.007 0 0 0 1 1.1.982.982 0 0 0 .989-.878A10.014 10.014 0 0 1 12 2ZM22.951 12a.982.982 0 0 0-.989.878A9.986 9.986 0 0 1 4.878 19H8a1 1 0 0 0 1-1 1 1 0 0 0-1-1H3.857A1.856 1.856 0 0 0 2 18.857V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-2.078A11.981 11.981 0 0 0 23.95 13.1a1.007 1.007 0 0 0-1-1.1Z" })));
}

function Resize(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0h-8a5.006 5.006 0 0 0-5 5v6H5a5.006 5.006 0 0 0-5 5v3a5.006 5.006 0 0 0 5 5h3a5.006 5.006 0 0 0 5-5v-1h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm-8 16a3 3 0 0 1-3-3 3 3 0 0 1 3 3zm0 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1a5.006 5.006 0 0 0 5 5zm11-6a3 3 0 0 1-3 3h-6a4.969 4.969 0 0 0-.833-2.753L18 7.414V10a1 1 0 0 0 2 0V7a3 3 0 0 0-3-3h-3a1 1 0 0 0 0 2h2.586l-5.833 5.833A4.969 4.969 0 0 0 8 11V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3z" })));
}

function Resources(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 3H13a1 1 0 0 0-1 1v3.27L9.6 3.11a2 2 0 0 0-3.47 0l-6 10.39a1 1 0 0 0 0 1A1 1 0 0 0 1 15h4.29A6.91 6.91 0 0 0 5 17a7 7 0 0 0 14 0 6.91 6.91 0 0 0-.29-2H23a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2.73 13l5.13-8.89L11.29 10a7 7 0 0 0-5 3ZM12 22a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm10-9h-4.26A7.07 7.07 0 0 0 14 10.29V5h8Z" })));
}

function Rewind(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.42 20.656a3.77 3.77 0 0 1-2.233-.735l-6.641-4.87a3.784 3.784 0 0 1 0-6.1l6.641-4.87A3.783 3.783 0 0 1 14.2 6.853l3.782-2.774A3.784 3.784 0 0 1 24 7.13v9.74a3.784 3.784 0 0 1-6.021 3.051L14.2 17.147a3.79 3.79 0 0 1-3.777 3.509Zm2.787-6.475a1 1 0 0 1 .592.194l5.363 3.933A1.784 1.784 0 0 0 22 16.87V7.13a1.785 1.785 0 0 0-2.839-1.438L13.8 9.625a1 1 0 0 1-1.592-.806V7.13a1.784 1.784 0 0 0-2.839-1.438l-6.64 4.87a1.783 1.783 0 0 0 0 2.876l6.64 4.87a1.784 1.784 0 0 0 2.838-1.438v-1.689a1 1 0 0 1 1-1Z" })));
}

function Rhombus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 23.928a4.99 4.99 0 0 1-3.536-1.462l-6.93-6.931a5 5 0 0 1 0-7.07l6.93-6.931a5.008 5.008 0 0 1 7.072 0l6.93 6.931a5 5 0 0 1 0 7.07l-6.93 6.931A4.99 4.99 0 0 1 12 23.928Zm0-21.857a2.992 2.992 0 0 0-2.122.877l-6.93 6.931a3 3 0 0 0 0 4.242l6.93 6.931a3 3 0 0 0 4.244 0l6.93-6.931a3 3 0 0 0 0-4.242l-6.93-6.931A2.992 2.992 0 0 0 12 2.071Z" })));
}

function RingsWedding(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 8a7.974 7.974 0 0 0-5.974 2.7 6.882 6.882 0 0 0-1.495-.524L9.9 7.447a1 1 0 0 0-.043-.971A3.4 3.4 0 0 0 7 5a3.4 3.4 0 0 0-2.852 1.476 1 1 0 0 0-.043.971l1.364 2.727a7 7 0 1 0 5.866 12.312A8 8 0 1 0 16 8Zm-4.766 11.63a5.946 5.946 0 0 1-.678-6.137 4.946 4.946 0 0 1 .678 6.137ZM2 17a4.987 4.987 0 0 1 6.879-4.627 7.957 7.957 0 0 0 .966 8.73A4.99 4.99 0 0 1 2 17Zm14 5a5.961 5.961 0 0 1-3.278-.981 6.963 6.963 0 0 0-1.022-9.193A6 6 0 1 1 16 22ZM10.553 4.895a1 1 0 0 0 1.347-.448l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.342ZM2.105 4.447A1 1 0 1 0 3.9 3.553l-1-2a1 1 0 0 0-1.79.894ZM7 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z" })));
}

function Road(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.46 4.134A4.992 4.992 0 0 0 16.536 0H7.451a4.992 4.992 0 0 0-4.926 4.138l-2.449 14A5 5 0 0 0 5 24h14a5 5 0 0 0 4.925-5.866Zm-.16 16.795A3 3 0 0 1 19 22H5a3 3 0 0 1-2.955-3.518l2.449-14A3 3 0 0 1 7.451 2h9.085a3 3 0 0 1 2.954 2.48l2.463 14a3 3 0 0 1-.653 2.449ZM13 5v2a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z" })));
}

function Rocket(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 7a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12.866-9.042-.075.211C22.289 7.337 20.848 11.3 18 14.82V15a11.02 11.02 0 0 1-3.6 8.135 3.264 3.264 0 0 1-2.2.865A3.21 3.21 0 0 1 9 20.794v-1.151a4.951 4.951 0 0 1-1.961-1.191L7 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L5.586 17l-.039-.038A4.98 4.98 0 0 1 4.353 15h-.99A3.366 3.366 0 0 1 0 11.638 3.4 3.4 0 0 1 .938 9.3 10.922 10.922 0 0 1 9 6h.18C12.7 3.153 16.66 1.712 20.826.211l.216-.077a2.2 2.2 0 0 1 2.824 2.824ZM3.363 13H4.1a5 5 0 0 1 .891-2.45A25.362 25.362 0 0 1 6.8 8.244a8.507 8.507 0 0 0-4.4 2.426 1.407 1.407 0 0 0-.4.968A1.364 1.364 0 0 0 3.363 13ZM15.7 17.252a25.552 25.552 0 0 1-2.252 1.759 4.983 4.983 0 0 1-2.448.876v.907A1.208 1.208 0 0 0 12.207 22a1.271 1.271 0 0 0 .852-.345 9 9 0 0 0 2.641-4.403Zm6.237-15.189a.191.191 0 0 0-.217-.048l-.215.078c-4.844 1.745-9.027 3.253-12.629 6.854A20.867 20.867 0 0 0 6.628 11.7a3 3 0 0 0 .333 3.851l1.492 1.49a3 3 0 0 0 3.849.334 20.817 20.817 0 0 0 2.751-2.248c3.6-3.6 5.11-7.787 6.856-12.633l.076-.211a.192.192 0 0 0-.048-.22Z" })));
}

function RoomService(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 19v-2A11.01 11.01 0 0 0 13 6.051V4.723a2 2 0 1 0-2 0v1.328A11.01 11.01 0 0 0 1 17v2a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM3 17c.473-11.934 17.531-11.925 18 0v2H3Z" })));
}

function RotateRight(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.962 12.875A10.03 10.03 0 1 1 19.122 5H16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4.143A1.858 1.858 0 0 0 22 5.143V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.078A11.985 11.985 0 1 0 23.95 13.1a1.007 1.007 0 0 0-1-1.1.982.982 0 0 0-.988.875Z" })));
}

function Rugby(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.1 1.9C18.664-1.531 9.372-.067 4.652 4.652S-1.531 18.664 1.9 22.1a8.106 8.106 0 0 0 5.767 1.88 17.434 17.434 0 0 0 11.681-4.632C24.066 14.629 25.531 5.336 22.1 1.9zm-5.767.1a6.232 6.232 0 0 1 4.351 1.314C21.7 4.331 22.111 6.3 21.959 8.545l-6.5-6.5c.295-.019.591-.045.874-.045zM3.316 20.684C2.3 19.669 1.889 17.7 2.041 15.455l6.5 6.5c-2.241.155-4.21-.255-5.225-1.271zm14.618-2.75a14.685 14.685 0 0 1-6.929 3.657l-8.6-8.6a14.674 14.674 0 0 1 3.661-6.925 14.645 14.645 0 0 1 6.94-3.646l8.586 8.586a14.674 14.674 0 0 1-3.658 6.928zm-.227-6.227a1 1 0 0 1-1.414 0L15 10.414 13.414 12l1.293 1.293a1 1 0 1 1-1.414 1.414L12 13.414 10.414 15l1.293 1.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 1.414-1.414L9 13.586 10.586 12l-1.293-1.293a1 1 0 0 1 1.414-1.414L12 10.586 13.586 9l-1.293-1.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" })));
}

function Sad(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.746 15.667a1 1 0 0 0-.08-1.413A9.454 9.454 0 0 0 12 14a9.454 9.454 0 0 0-5.666 2.254 1 1 0 0 0 1.33 1.494A7.508 7.508 0 0 1 12 16a7.51 7.51 0 0 1 4.336 1.748 1 1 0 0 0 1.41-.081ZM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" })));
}

function Salad(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.194 11.6a3.942 3.942 0 0 0-2.143-1.447 21.606 21.606 0 0 0 .922-3.731 3.008 3.008 0 0 0-3.4-3.392c-.126.017-.5.072-1.011.171A4.979 4.979 0 0 0 18 .968a1 1 0 1 0-2 .064 3.021 3.021 0 0 1-.289 1.4 3.894 3.894 0 0 0-.611-1.08A4.006 4.006 0 0 0 11.5.034 3.8 3.8 0 0 0 9.5.8 3.939 3.939 0 0 0 7.233.01a3.949 3.949 0 0 0-2.885.877A4.028 4.028 0 0 0 3 3.782a4.1 4.1 0 0 0 .73 2.466 4.951 4.951 0 0 0-1.7 4.288A3.967 3.967 0 0 0 .164 15.15a14.749 14.749 0 0 0 3.707 6.316A8.922 8.922 0 0 0 10.139 24h3.722a8.918 8.918 0 0 0 6.267-2.534 14.741 14.741 0 0 0 3.708-6.316 4 4 0 0 0-.642-3.55Zm-4.343-6.59a1.013 1.013 0 0 1 1.139 1.142A20.024 20.024 0 0 1 18.975 10h-2.561l1.293-1.293a1 1 0 0 0-1.414-1.414L13.586 10h-1.549a3.428 3.428 0 0 1 .976-2.9c.427-.431 2.064-1.6 5.838-2.09ZM5 3.849a2.026 2.026 0 0 1 .665-1.457A2.035 2.035 0 0 1 7.1 2.006a1.748 1.748 0 0 1 1.328.531 1.438 1.438 0 0 0 1.072.479 1.44 1.44 0 0 0 1.068-.482 1.64 1.64 0 0 1 1.156-.513 2.031 2.031 0 0 1 1.828.6A2.118 2.118 0 0 1 14 3.985v.207a6.446 6.446 0 0 0-3.228 2.563 4.916 4.916 0 0 0-5.284-1.5A2.064 2.064 0 0 1 5 3.849ZM4 10a3 3 0 0 1 6 0H4Zm17.916 4.589a12.919 12.919 0 0 1-3.2 5.46A6.9 6.9 0 0 1 13.861 22h-3.722a6.909 6.909 0 0 1-4.857-1.951 12.917 12.917 0 0 1-3.2-5.46 2.019 2.019 0 0 1 .324-1.789A1.978 1.978 0 0 1 4 12h16a1.978 1.978 0 0 1 1.6.8 2.019 2.019 0 0 1 .316 1.789Z" })));
}

function Scale(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 2h-2.539A5.905 5.905 0 0 0 10.8.117 5.757 5.757 0 0 0 7.589 2H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5Zm-7 0a4 4 0 0 1 4 4 1 1 0 0 1-1 1h-2.132l.964-1.445a1 1 0 0 0-1.664-1.11L10.465 7H9a1 1 0 0 1-1-1 4 4 0 0 1 4-4Zm10 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.393A6.482 6.482 0 0 0 6 6.215 2.788 2.788 0 0 0 8.785 9h6.43A2.762 2.762 0 0 0 18 6.353 7.568 7.568 0 0 0 17.656 4H19a3 3 0 0 1 3 3Z" })));
}

function SchoolBus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 11h-1V5a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v11a2.994 2.994 0 0 0 2.071 2.838A3.4 3.4 0 0 0 2 19.5a3.5 3.5 0 0 0 7 0 3.465 3.465 0 0 0-.041-.5h6.082a3.465 3.465 0 0 0-.041.5 3.5 3.5 0 0 0 7 0 3.4 3.4 0 0 0-.071-.662A2.994 2.994 0 0 0 24 16v-1a4 4 0 0 0-4-4zM2 11V7h2v4zm4-4h2v4H6zm4 0h3v10h-3zm5 0h2v4h-2zM4 3h11a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2zM2 13h6v4H3a1 1 0 0 1-1-1zm5 6.5a1.5 1.5 0 0 1-3 0 1.41 1.41 0 0 1 .093-.5h2.814a1.41 1.41 0 0 1 .093.5zM18.5 21a1.5 1.5 0 0 1-1.5-1.5 1.41 1.41 0 0 1 .093-.5h2.814a1.41 1.41 0 0 1 .093.5 1.5 1.5 0 0 1-1.5 1.5zm3.5-5a1 1 0 0 1-1 1h-6v-4h5a2 2 0 0 1 2 2z" })));
}

function School(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 6h-4.679A3.95 3.95 0 0 0 13 5.388V5l3.53-1.652a1 1 0 0 0 0-1.7l-3.2-1.5A1.637 1.637 0 0 0 11 1.636v3.752A3.937 3.937 0 0 0 9.68 6H5a5.006 5.006 0 0 0-5 5v10a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11a5.006 5.006 0 0 0-5-5Zm2.816 4h-2.159a3.017 3.017 0 0 1-2.121-.879L16.414 8H19a3 3 0 0 1 2.816 2ZM5 8h2.586L6.464 9.121A3.017 3.017 0 0 1 4.343 10H2.184A3 3 0 0 1 5 8Zm8 14h-2v-3a1 1 0 0 1 2 0Zm8 0h-6v-3a3 3 0 0 0-6 0v3H3a1 1 0 0 1-1-1v-9h2.343a4.968 4.968 0 0 0 3.535-1.465l2.708-2.707a2 2 0 0 1 2.828 0l2.708 2.707A4.968 4.968 0 0 0 19.657 12H22v9a1 1 0 0 1-1 1ZM7 15a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm13-4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm0 4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm-6-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2Z" })));
}

function Scissors(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 14a4.929 4.929 0 0 0-2.352.615L13.3 10.6l7.467-8.96A1 1 0 0 0 19.231.36L12 9.038 4.768.36a1 1 0 0 0-1.536 1.28L10.7 10.6l-3.348 4.015A4.941 4.941 0 0 0 5 14a5 5 0 1 0 5 5 4.947 4.947 0 0 0-1.112-3.1L12 12.162l3.111 3.738A4.955 4.955 0 0 0 14 19a5 5 0 1 0 5-5zM5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" })));
}

function Screen(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h6v1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-1h6a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5Zm3 11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" })));
}

function SearchAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1-1.414 0L19.886 21.3a4.457 4.457 0 0 1-2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1-.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zM17.5 20a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zM13 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0V3a3 3 0 0 0-3-3H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z" })));
}

function SearchHeart(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M506.02 475.743 378.865 348.588c74.591-91.227 61.105-225.649-30.122-300.239S123.095-12.757 48.504 78.47s-61.105 225.649 30.122 300.24c78.578 64.249 191.54 64.249 270.118 0l127.155 127.155c8.463 8.173 21.949 7.939 30.122-.524 7.972-8.255 7.972-21.343-.001-29.598zM43.604 213.87c0-94.121 76.3-170.421 170.421-170.421s170.421 76.3 170.421 170.421-76.3 170.421-170.421 170.421c-94.077-.106-170.315-76.344-170.421-170.421zm213.027-85.211a61.584 61.584 0 0 0-42.605 17.383 61.588 61.588 0 0 0-42.605-17.383c-36.433 1.262-64.997 31.73-63.908 68.168 0 42.605 43.479 86.553 79.97 115.886 15.533 12.371 37.553 12.371 53.086 0 36.491-29.334 79.97-73.281 79.97-115.886 1.088-36.438-27.475-66.906-63.908-68.168zm-42.478 150.823c-39.495-31.741-64.036-63.482-64.036-82.654-1.063-12.906 8.416-24.282 21.303-25.563 12.886 1.281 22.366 12.657 21.303 25.563 0 11.765 9.537 21.303 21.303 21.303 11.765 0 21.303-9.537 21.303-21.303-1.063-12.906 8.416-24.282 21.303-25.563 12.886 1.281 22.366 12.657 21.303 25.563-.002 19.172-24.542 50.913-63.782 82.654z" })));
}

function Search(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" })));
}

function SettingsSliders(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 4.75h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 0 0 0-2H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2ZM7.333 2a1.75 1.75 0 1 1-1.75 1.75A1.752 1.752 0 0 1 7.333 2ZM23 11h-2.736a3.727 3.727 0 0 0-7.194 0H1a1 1 0 0 0 0 2h12.07a3.727 3.727 0 0 0 7.194 0H23a1 1 0 0 0 0-2Zm-6.333 2.75a1.75 1.75 0 1 1 1.75-1.75 1.752 1.752 0 0 1-1.75 1.75ZM23 19.25H10.931a3.728 3.728 0 0 0-7.195 0H1a1 1 0 0 0 0 2h2.736a3.728 3.728 0 0 0 7.195 0H23a1 1 0 0 0 0-2ZM7.333 22a1.75 1.75 0 1 1 1.75-1.75A1.753 1.753 0 0 1 7.333 22Z" })));
}

function Settings(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" }),
        React.createElement("path", { d: "m21.294 13.9-.444-.256a9.1 9.1 0 0 0 0-3.29l.444-.256a3 3 0 1 0-3-5.2l-.445.257A8.977 8.977 0 0 0 15 3.513V3a3 3 0 0 0-6 0v.513a8.977 8.977 0 0 0-2.848 1.646L5.705 4.9a3 3 0 0 0-3 5.2l.444.256a9.1 9.1 0 0 0 0 3.29l-.444.256a3 3 0 1 0 3 5.2l.445-.257A8.977 8.977 0 0 0 9 20.487V21a3 3 0 0 0 6 0v-.513a8.977 8.977 0 0 0 2.848-1.646l.447.258a3 3 0 0 0 3-5.2Zm-2.548-3.776a7.048 7.048 0 0 1 0 3.75 1 1 0 0 0 .464 1.133l1.084.626a1 1 0 0 1-1 1.733l-1.086-.628a1 1 0 0 0-1.215.165 6.984 6.984 0 0 1-3.243 1.875 1 1 0 0 0-.751.969V21a1 1 0 0 1-2 0v-1.252a1 1 0 0 0-.751-.969A6.984 6.984 0 0 1 7.006 16.9a1 1 0 0 0-1.215-.165l-1.084.627a1 1 0 1 1-1-1.732l1.084-.626a1 1 0 0 0 .464-1.133 7.048 7.048 0 0 1 0-3.75 1 1 0 0 0-.465-1.129l-1.084-.626a1 1 0 0 1 1-1.733l1.086.628A1 1 0 0 0 7.006 7.1a6.984 6.984 0 0 1 3.243-1.875A1 1 0 0 0 11 4.252V3a1 1 0 0 1 2 0v1.252a1 1 0 0 0 .751.969A6.984 6.984 0 0 1 16.994 7.1a1 1 0 0 0 1.215.165l1.084-.627a1 1 0 1 1 1 1.732l-1.084.626a1 1 0 0 0-.463 1.129Z" })));
}

function Share(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.333 14.667a4.66 4.66 0 0 0-3.839 2.024l-6.509-2.939a4.574 4.574 0 0 0 .005-3.488l6.5-2.954a4.66 4.66 0 1 0-.827-2.643 4.633 4.633 0 0 0 .08.786l-6.91 3.14a4.668 4.668 0 1 0-.015 6.827l6.928 3.128a4.736 4.736 0 0 0-.079.785 4.667 4.667 0 1 0 4.666-4.666Zm0-12.667a2.667 2.667 0 1 1-2.666 2.667A2.669 2.669 0 0 1 19.333 2ZM4.667 14.667A2.667 2.667 0 1 1 7.333 12a2.67 2.67 0 0 1-2.666 2.667ZM19.333 22A2.667 2.667 0 1 1 22 19.333 2.669 2.669 0 0 1 19.333 22Z" })));
}

function ShieldCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.419 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM20 12c0 5.455-6.319 9.033-8 9.889-1.683-.853-8-4.42-8-9.889V6.883a3 3 0 0 1 2.052-2.846L12 2.054l5.948 1.983A3 3 0 0 1 20 6.883Z" }),
        React.createElement("path", { d: "m15.3 8.3-4.188 4.2-2.244-2.34a1 1 0 1 0-1.441 1.386l2.306 2.4a1.872 1.872 0 0 0 1.345.6h.033a1.873 1.873 0 0 0 1.335-.553l4.272-4.272A1 1 0 0 0 15.3 8.3Z" })));
}

function ShieldExclamation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 15a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm.793 8.76C14.953 22.892 22 19.479 22 12.043V6.872a4.993 4.993 0 0 0-3.426-4.746L12.315.051a.985.985 0 0 0-.63 0L5.426 2.126A4.993 4.993 0 0 0 2 6.872v5.171c0 6.562 7.005 10.576 9.153 11.65A4.628 4.628 0 0 0 12 24a4.5 4.5 0 0 0 .793-.24zm5.151-19.736A3 3 0 0 1 20 6.872v5.171c0 6.183-6.087 9.111-7.953 9.861C10.159 20.96 4 17.459 4 12.043V6.872a3 3 0 0 1 2.056-2.848L12 2.054zM12 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" })));
}

function ShieldInterrogation(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 15a1 1 0 0 1-1-1 3.953 3.953 0 0 1 1.963-3.195 1.994 1.994 0 0 0 1-2.124 2.024 2.024 0 0 0-1.6-1.6A2 2 0 0 0 10 9.052a1 1 0 0 1-2 0 4 4 0 0 1 1.429-3.065 4 4 0 1 1 4.5 6.57A1.987 1.987 0 0 0 13 14a1 1 0 0 1-1 1zm.793 8.76C14.953 22.892 22 19.479 22 12.043V6.872a4.993 4.993 0 0 0-3.426-4.746L12.315.051a.985.985 0 0 0-.63 0L5.426 2.126A4.993 4.993 0 0 0 2 6.872v5.171c0 6.562 7.005 10.576 9.153 11.65A2.331 2.331 0 0 0 12 24a2.242 2.242 0 0 0 .793-.24zm5.151-19.736A3 3 0 0 1 20 6.872v5.171c0 6.183-6.087 9.111-7.953 9.861C10.159 20.96 4 17.459 4 12.043V6.872a3 3 0 0 1 2.056-2.848L12 2.054zM12 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" })));
}

function ShieldPlus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.419 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM20 12c0 5.455-6.319 9.033-8 9.889-1.683-.853-8-4.42-8-9.889V6.883a3 3 0 0 1 2.052-2.846L12 2.054l5.948 1.983A3 3 0 0 1 20 6.883Z" }),
        React.createElement("path", { d: "M15 10h-2V8a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" })));
}

function Shield(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM20 12c0 5.455-6.319 9.033-8 9.889-1.683-.853-8-4.42-8-9.889V6.883a3 3 0 0 1 2.051-2.846L12 2.054l5.948 1.983A3 3 0 0 1 20 6.883Z" })));
}

function ShipSide(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.989 12h-1.336a15.71 15.71 0 0 0-4.328-5.864A5.03 5.03 0 0 0 11.146 5H8.818L8.11 2.315A3.105 3.105 0 1 0 2.1 3.9L2.394 5H1a1 1 0 0 0 0 2h10.146a3.029 3.029 0 0 1 1.913.687 13.411 13.411 0 0 1 3.386 4.318h-.82a3.037 3.037 0 0 0-1.692.5l-1.984 1.322A.994.994 0 0 1 11.4 14H1a1 1 0 0 0 0 2h10.4a2.992 2.992 0 0 0 1.664-.5l1.983-1.322a.948.948 0 0 1 .574-.168h4.369a2 2 0 0 1 1.7.935 1.949 1.949 0 0 1 .123 1.912A9.03 9.03 0 0 1 13.668 22H1a1 1 0 0 0 0 2h12.668a11.04 11.04 0 0 0 9.948-6.3 4 4 0 0 0-3.627-5.7ZM4.037 3.388a1.107 1.107 0 0 1 2.14-.564L6.75 5H4.462ZM0 10a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm4 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" })));
}

function Ship(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 20a1 1 0 0 0-1 1c0 .344-.682 1-1.75 1a2.023 2.023 0 0 1-1.593-.689 1.932 1.932 0 0 1 .128-.184 12.152 12.152 0 0 0 3.156-6.183A3 3 0 0 0 20 11.584V9a4 4 0 0 0-4-4V4a4 4 0 0 0-8 0v1a4 4 0 0 0-4 4v2.571a3 3 0 0 0-1.972 3.373 12.188 12.188 0 0 0 3.187 6.183 1.973 1.973 0 0 1 .133.189A2.005 2.005 0 0 1 3.75 22C2.661 22 2 21.306 2 21a1 1 0 0 0-2 0c0 1.626 1.718 3 3.75 3a4.212 4.212 0 0 0 2.763-1 4.295 4.295 0 0 0 5.487.016A4.317 4.317 0 0 0 17.5 23a4.208 4.208 0 0 0 2.746 1C22.282 24 24 22.626 24 21a1 1 0 0 0-1-1ZM10 4a2 2 0 0 1 4 0v1h-4ZM8 7h8a2 2 0 0 1 2 2v1.92l-5.052-1.658a3.026 3.026 0 0 0-1.891 0L6 10.913V9a2 2 0 0 1 2-2Zm1.25 15a1.938 1.938 0 0 1-1.711-.849 5.113 5.113 0 0 0-.848-1.372A10.253 10.253 0 0 1 4 14.607a1.018 1.018 0 0 1 .662-1.153L11 11.383V21c0 .344-.682 1-1.75 1Zm5.5 0c-1.089 0-1.75-.694-1.75-1v-9.616l6.305 2.069a1.021 1.021 0 0 1 .666 1.155 10.2 10.2 0 0 1-2.662 5.171 4.991 4.991 0 0 0-.848 1.378A1.929 1.929 0 0 1 14.75 22Z" })));
}

function Shop(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 10a.988.988 0 0 0-.024-.217l-1.3-5.868A4.968 4.968 0 0 0 17.792 0H6.208a4.968 4.968 0 0 0-4.88 3.915L.024 9.783A.988.988 0 0 0 0 10v1a3.984 3.984 0 0 0 1 2.643V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5v-5.357A3.984 3.984 0 0 0 24 11Zm-22 .109 1.28-5.76A2.982 2.982 0 0 1 6.208 2H7v3a1 1 0 0 0 2 0V2h6v3a1 1 0 0 0 2 0V2h.792a2.982 2.982 0 0 1 2.928 2.349l1.28 5.76V11a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2ZM18 22H6a3 3 0 0 1-3-3v-4.127A3.978 3.978 0 0 0 4 15h1a3.99 3.99 0 0 0 3-1.357A3.99 3.99 0 0 0 11 15h2a3.99 3.99 0 0 0 3-1.357A3.99 3.99 0 0 0 19 15h1a3.978 3.978 0 0 0 1-.127V19a3 3 0 0 1-3 3Z" })));
}

function ShoppingBagAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 19h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "M21 6h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h9a1 1 0 0 0 0-2H5a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h3v2a1 1 0 0 0 2 0V8h8v2a1 1 0 0 0 2 0V8h3a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0V9a3 3 0 0 0-3-3ZM8 6a4 4 0 0 1 8 0Z" })));
}

function ShoppingBag(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 6h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a3 3 0 0 0-3-3Zm-9-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4Zm10 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h3v2a1 1 0 0 0 2 0V8h8v2a1 1 0 0 0 2 0V8h3a1 1 0 0 1 1 1Z" })));
}

function ShoppingCartAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 7, cy: 22, r: 2 }),
        React.createElement("circle", { cx: 17, cy: 22, r: 2 }),
        React.createElement("path", { d: "M23 3h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "M21.771 9.726a.994.994 0 0 0-1.162.806A3 3 0 0 1 17.657 13H5.418l-.94-8H13a1 1 0 0 0 0-2H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.829-2h11.929a5 5 0 0 0 4.921-4.112 1 1 0 0 0-.807-1.162Z" })));
}

function ShoppingCartCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 7, cy: 22, r: 2 }),
        React.createElement("circle", { cx: 17, cy: 22, r: 2 }),
        React.createElement("path", { d: "M23.685 1.336a1 1 0 0 0-1.414 0L17.112 6.5l-1.551-1.619a1 1 0 0 0-1.442 1.386l1.614 1.679a1.872 1.872 0 0 0 1.345.6h.033a1.873 1.873 0 0 0 1.335-.553l5.239-5.243a1 1 0 0 0 0-1.414Z" }),
        React.createElement("path", { d: "M21.9 9.016a1 1 0 0 0-1.162.807l-.128.709A3 3 0 0 1 17.657 13H5.418l-.94-8H11a1 1 0 0 0 0-2H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.829-2h11.929a5 5 0 0 0 4.921-4.113l.128-.71a1 1 0 0 0-.806-1.161Z" })));
}

function ShoppingCart(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.713 4.077A2.993 2.993 0 0 0 20.41 3H4.242L4.2 2.649A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.82-2h11.92a5 5 0 0 0 4.921-4.113l.785-4.354a2.994 2.994 0 0 0-.65-2.456ZM21.4 6.178l-.786 4.354A3 3 0 0 1 17.657 13H5.419l-.941-8H20.41a1 1 0 0 1 .99 1.178Z" }),
        React.createElement("circle", { cx: 7, cy: 22, r: 2 }),
        React.createElement("circle", { cx: 17, cy: 22, r: 2 })));
}

function Shuffle(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.421 16.583-3.291-3.291a1 1 0 1 0-1.413 1.414L21.007 17a9.332 9.332 0 0 1-6.686-2.8.982.982 0 0 0-1.408.08l-.013.02a1 1 0 0 0 .075 1.382A11.177 11.177 0 0 0 21.01 19l-2.293 2.293A1 1 0 1 0 20.13 22.7l3.291-3.291a2 2 0 0 0 0-2.826Z" }),
        React.createElement("path", { d: "m21.007 7-2.29 2.29a.892.892 0 0 0-.054.082.992.992 0 0 0 1.467 1.332L21.836 9l1.586-1.585a2 2 0 0 0 .457-2.1 1.969 1.969 0 0 0-.458-.728L20.13 1.3a1 1 0 1 0-1.413 1.413l2.293 2.292c-4.933.012-7.637 2.674-10.089 5.474C8.669 7.937 6 5.4 1.487 5.046L1.006 5a1 1 0 0 0-1 1 1.02 1.02 0 0 0 1 1c.072 0 .287.033.287.033C5.189 7.328 7.425 9.522 9.6 12c-2.162 2.466-4.383 4.7-8.247 4.96l-.4.021a.994.994 0 1 0 .124 1.985c.156-.007.41-.013.535-.023 5.02-.387 7.743-3.6 10.171-6.409C14.235 9.7 16.551 7.018 21.007 7Z" })));
}

function SignInAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.9 0H5.1A5.055 5.055 0 0 0 0 5v3a1 1 0 0 0 2 0V5a3.054 3.054 0 0 1 3.1-3h13.8A3.054 3.054 0 0 1 22 5v14a3.054 3.054 0 0 1-3.1 3H5.1A3.054 3.054 0 0 1 2 19v-3a1 1 0 0 0-2 0v3a5.055 5.055 0 0 0 5.1 5h13.8a5.055 5.055 0 0 0 5.1-5V5a5.055 5.055 0 0 0-5.1-5Z" }),
        React.createElement("path", { d: "M3 12a1 1 0 0 0 1 1l13.188-.03-4.323 4.323a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 0-4.242l-4.584-4.586a1 1 0 0 0-1.414 1.414l4.262 4.263L4 11a1 1 0 0 0-1 1Z" })));
}

function SignIn(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "m23 11-15.777.032a2.018 2.018 0 0 1 .326-.446l3.879-3.879a1 1 0 1 0-1.414-1.414L6.133 9.172a4 4 0 0 0 0 5.656l3.879 3.879a1 1 0 1 0 1.414-1.414l-3.879-3.879a2.01 2.01 0 0 1-.291-.382L23 13a1 1 0 0 0 0-2Z" })));
}

function SignOutAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.476 15a1 1 0 0 0-1 1v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2.476a3 3 0 0 1 3 3v3a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2.476a5.006 5.006 0 0 0 5-5v-3a1 1 0 0 0-1-1Z" }),
        React.createElement("path", { d: "m22.867 9.879-4.586-4.586a1 1 0 1 0-1.414 1.414l4.262 4.263L6 11a1 1 0 0 0 0 2l15.188-.031-4.323 4.324a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 .002-4.242Z" })));
}

function SignOut(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.829 9.172 18.95 5.293a1 1 0 0 0-1.414 1.414l3.879 3.879a2.057 2.057 0 0 1 .3.39c-.015 0-.027-.008-.042-.008L5.989 11a1 1 0 0 0 0 2l15.678-.032c.028 0 .051-.014.078-.016a2 2 0 0 1-.334.462l-3.879 3.879a1 1 0 1 0 1.414 1.414l3.879-3.879a4 4 0 0 0 0-5.656Z" }),
        React.createElement("path", { d: "M7 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2Z" })));
}

function SignalAlt1(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3Zm1 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" })));
}

function SignalAlt2(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" })));
}

function SignalAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3Zm1 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" })));
}

function Skateboard(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.835 2.165a7.389 7.389 0 0 0-10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zM20.421 11.2 11.2 20.421A5.39 5.39 0 1 1 3.579 12.8L12.8 3.579a5.39 5.39 0 1 1 7.621 7.621zm-.714-2.909a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l.793-.793L13.5 7.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793L17.5 9.086l.793-.793a1 1 0 0 1 1.414 0zm-7 7a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l.793-.793L6.5 14.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 0z" })));
}

function Smartphone(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 0H9a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM9 2h6a3 3 0 0 1 3 3v11H6V5a3 3 0 0 1 3-3Zm6 20H9a3 3 0 0 1-3-3v-1h12v1a3 3 0 0 1-3 3Z" }),
        React.createElement("circle", { cx: 12, cy: 20, r: 1 })));
}

function SmileWink(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.666 13.746a1 1 0 0 0-1.33-1.494A7.508 7.508 0 0 1 12 16a7.509 7.509 0 0 1-4.334-1.746 1 1 0 0 0-1.332 1.492A9.454 9.454 0 0 0 12 18a9.454 9.454 0 0 0 5.666-2.254ZM14 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm-3 0a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Z" })));
}

function Smile(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.666 13.746a1 1 0 0 0-1.33-1.494A7.508 7.508 0 0 1 12 16a7.509 7.509 0 0 1-4.334-1.746 1 1 0 0 0-1.332 1.492A9.454 9.454 0 0 0 12 18a9.454 9.454 0 0 0 5.666-2.254ZM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" })));
}

function Snowflake(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.761 13.971-2.445.646a2.707 2.707 0 0 0-.981.492l-2.617-1.522a4.7 4.7 0 0 0 0-3.174l2.617-1.522a2.707 2.707 0 0 0 .981.492s2.617.679 2.7.679a1 1 0 0 0 .256-1.962l-2.444-.647a.715.715 0 0 1-.508-.873l.647-2.444a1 1 0 1 0-1.934-.512l-.646 2.444a2.687 2.687 0 0 0-.058 1.1l-2.616 1.516A4.978 4.978 0 0 0 13 7.1v-3a2.677 2.677 0 0 0 .919-.6l1.788-1.788A1 1 0 0 0 14.293.293l-1.788 1.788a.718.718 0 0 1-1.01 0L9.707.293a1 1 0 0 0-1.414 1.414L10.081 3.5a2.677 2.677 0 0 0 .919.6v3a4.978 4.978 0 0 0-2.713 1.584L5.671 7.162a2.687 2.687 0 0 0-.058-1.1L4.967 3.62a1 1 0 1 0-1.934.512l.647 2.444a.715.715 0 0 1-.508.873L.728 8.1a1 1 0 0 0 .254 1.966c.085 0 2.7-.679 2.7-.679a2.707 2.707 0 0 0 .981-.492l2.617 1.522a4.7 4.7 0 0 0 0 3.174l-2.615 1.518a2.707 2.707 0 0 0-.981-.492l-2.445-.646A1 1 0 0 0 .728 15.9l2.444.647a.715.715 0 0 1 .508.873l-.647 2.444a1 1 0 1 0 1.934.512l.646-2.444a2.687 2.687 0 0 0 .058-1.1l2.616-1.522A4.978 4.978 0 0 0 11 16.9v3a2.691 2.691 0 0 0-.919.6l-1.788 1.793a1 1 0 0 0 1.414 1.414l1.793-1.788a.718.718 0 0 1 1.01 0l1.788 1.788a1 1 0 0 0 1.414-1.414l-1.788-1.788A2.691 2.691 0 0 0 13 19.9v-3a4.978 4.978 0 0 0 2.713-1.583l2.616 1.522a2.687 2.687 0 0 0 .058 1.1l.646 2.444a1 1 0 0 0 1.934-.512l-.647-2.444a.715.715 0 0 1 .508-.873l2.444-.647a1 1 0 1 0-.511-1.933ZM12 15a3 3 0 0 1 0-6 3 3 0 0 1 0 6Z" })));
}

function Soap(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 7.964V7a3 3 0 0 0-2-2.816V2h4a1 1 0 0 0 0-2h-7a3 3 0 0 0-3 3v1.184A3 3 0 0 0 7 7v.964A8.943 8.943 0 0 0 2 16v2a6.006 6.006 0 0 0 6 6h8a6.006 6.006 0 0 0 6-6v-2a8.943 8.943 0 0 0-5-8.036zM11 3a1 1 0 0 1 1-1h1v2h-2zM9 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm11 11a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2a6.968 6.968 0 0 1 3.394-6h9.212A6.968 6.968 0 0 1 20 16zm-5-4H9a3 3 0 0 0 0 6h6a3 3 0 0 0 0-6zm0 4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" })));
}

function Soup(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.861 24h-3.722a8.922 8.922 0 0 1-6.268-2.534A14.759 14.759 0 0 1 .164 15.15 4.011 4.011 0 0 1 4 10h16a4.012 4.012 0 0 1 3.838 5.15 14.741 14.741 0 0 1-3.708 6.316A8.918 8.918 0 0 1 13.861 24ZM4 12a1.981 1.981 0 0 0-1.6.8 2.019 2.019 0 0 0-.322 1.791 12.933 12.933 0 0 0 3.2 5.46A6.907 6.907 0 0 0 10.139 22h3.722a6.9 6.9 0 0 0 4.856-1.951 12.919 12.919 0 0 0 3.2-5.46 2.019 2.019 0 0 0-.322-1.791A1.978 1.978 0 0 0 20 12Zm12-6a4.381 4.381 0 0 0-1.293-3.121A2.4 2.4 0 0 1 14 1.168V1a1 1 0 1 0-2 0v.168a4.385 4.385 0 0 0 1.293 3.122A2.4 2.4 0 0 1 14 6a1 1 0 0 0 2 0Zm-4 1v-.308a4.387 4.387 0 0 0-1.292-3.121A2.4 2.4 0 0 1 10 1.864V1a1 1 0 0 0-2 0v.864a4.386 4.386 0 0 0 1.293 3.121A2.4 2.4 0 0 1 10 6.692V7a1 1 0 0 0 2 0Z" })));
}

function Spa(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.367 14.727A4.149 4.149 0 0 0 22 11c0-2.622-2.5-4.354-6.8-4.849A3.267 3.267 0 0 0 16 4c0-2.43-2.355-4-6-4S4 1.57 4 4a3.464 3.464 0 0 0 1.9 3.051C3.624 8.052 3 9.606 3 11a4 4 0 0 0 2.229 3.614C1.793 15.38 0 16.857 0 19c0 3.271 4.149 5 12 5 7.963 0 12-1.682 12-5 0-2.057-1.555-3.484-4.633-4.273zM10 2c1.991 0 4 .619 4 2s-2.009 2-4 2-4-.619-4-2 2.009-2 4-2zm2.5 6c3.46 0 7.5.786 7.5 3s-4.04 3-7.5 3c-2.255 0-7.5-.292-7.5-3s5.245-3 7.5-3zM12 22c-6.075 0-10-1.178-10-3s3.925-3 10-3c6.262 0 10 1.122 10 3s-3.738 3-10 3z" })));
}

function Speaker(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z" }),
        React.createElement("circle", { cx: 12, cy: 6, r: 1.5 }),
        React.createElement("path", { d: "M12 10a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" }),
        React.createElement("circle", { cx: 12, cy: 15, r: 1 })));
}

function Sphere(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 16c-5.724 0-10-2.111-10-4s4.276-4 10-4 10 2.111 10 4-4.276 4-10 4Zm0-14a10.013 10.013 0 0 1 9.189 6.062A18.635 18.635 0 0 0 12 6a18.635 18.635 0 0 0-9.189 2.062A10.013 10.013 0 0 1 12 2Zm0 20a10.013 10.013 0 0 1-9.189-6.062A18.635 18.635 0 0 0 12 18a18.635 18.635 0 0 0 9.189-2.062A10.013 10.013 0 0 1 12 22Z" })));
}

function SpinnerAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0zm-1 19a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm-8-8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm19-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-4.982-9.382a1 1 0 0 0-1.367.364l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.5l1-1.731a1 1 0 0 0-.364-1.365zM7.987 18.921a1 1 0 0 0-1.366.364l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.5l1-1.731a1 1 0 0 0-.365-1.365zm-3.272-12.3-1.731-1a1 1 0 0 0-1 1.731l1.731 1a1 1 0 0 0 1-1.731zm17.3 10.03-1.731-1a1 1 0 0 0-1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .5-1.866zM7.349 1.982a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.135 1 1 0 0 0 .365-1.366zm10.03 17.3a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 1.731-1zm2.408-10.8a1 1 0 0 0 .5-.134l1.731-1a1 1 0 0 0-1-1.731l-1.731 1a1 1 0 0 0 .5 1.865zM3.713 15.648l-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .5-.135l1.731-1a1 1 0 0 0-1-1.731z" })));
}

function Spinner(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24A12 12 0 1 1 22.714 6.59a1 1 0 1 1-1.785.9 10 10 0 1 0-.011 9.038 1 1 0 0 1 1.781.908A11.955 11.955 0 0 1 12 24Z" })));
}

function SquareRoot(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.04 4a3.009 3.009 0 0 0-2.891 2.2L9.1 20.768A1.678 1.678 0 0 1 7.5 22a1.747 1.747 0 0 1-1.622-1.159l-2.793-7.68a3.461 3.461 0 0 0-2.312-2.189 1 1 0 0 1 .471-1.944 5.434 5.434 0 0 1 3.721 3.45l2.474 6.8 3.784-13.616A5.015 5.015 0 0 1 16.04 2H23a1 1 0 0 1 0 2zm7.56 8.2a1 1 0 0 0-1.4.2L20 15.333 17.8 12.4a1 1 0 0 0-1.6 1.2l2.55 3.4-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2-2.933 2.2 2.933a1 1 0 1 0 1.6-1.2L21.25 17l2.55-3.4a1 1 0 0 0-.2-1.4z" })));
}

function Square(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" })));
}

function StarOctogram(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.77 8.948a1.238 1.238 0 0 1-.7-1.7 3.239 3.239 0 0 0-4.315-4.316 1.239 1.239 0 0 1-1.7-.7 3.239 3.239 0 0 0-6.1 0 1.238 1.238 0 0 1-1.7.7 3.239 3.239 0 0 0-4.321 4.317 1.237 1.237 0 0 1-.7 1.7 3.24 3.24 0 0 0 0 6.1 1.238 1.238 0 0 1 .705 1.7 3.238 3.238 0 0 0 4.311 4.317 1.238 1.238 0 0 1 1.7.7 3.239 3.239 0 0 0 6.1 0 1.238 1.238 0 0 1 1.7-.7 3.239 3.239 0 0 0 4.316-4.315 1.239 1.239 0 0 1 .7-1.7 3.239 3.239 0 0 0 0-6.1Zm-.67 4.219a3.239 3.239 0 0 0-1.84 4.442 1.239 1.239 0 0 1-1.652 1.651 3.238 3.238 0 0 0-4.441 1.84 1.238 1.238 0 0 1-2.334 0 3.24 3.24 0 0 0-4.442-1.84 1.239 1.239 0 0 1-1.65-1.652A3.238 3.238 0 0 0 2.9 13.167a1.239 1.239 0 0 1 0-2.334 3.237 3.237 0 0 0 1.84-4.442A1.239 1.239 0 0 1 6.391 4.74a3.239 3.239 0 0 0 4.442-1.84 1.238 1.238 0 0 1 2.334 0 3.239 3.239 0 0 0 4.442 1.84 1.239 1.239 0 0 1 1.651 1.652 3.238 3.238 0 0 0 1.84 4.441 1.238 1.238 0 0 1 0 2.334Z" })));
}

function Star(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.836 8.794a3.179 3.179 0 0 0-3.067-2.226H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.231a3.227 3.227 0 0 0-1.9 5.832L4.887 15l-1.352 4.187A3.178 3.178 0 0 0 4.719 22.8a3.177 3.177 0 0 0 3.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 0 0 4.983-3.591L19.113 15l3.56-2.6a3.177 3.177 0 0 0 1.163-3.606Zm-2.343 1.991-4.144 3.029a1 1 0 0 0-.362 1.116l1.575 4.87a1.227 1.227 0 0 1-1.895 1.365l-4.075-3a1 1 0 0 0-1.184 0l-4.075 3a1.227 1.227 0 0 1-1.9-1.365l1.58-4.87a1 1 0 0 0-.362-1.116l-4.144-3.029a1.227 1.227 0 0 1 .724-2.217h5.1a1 1 0 0 0 .952-.694l1.55-4.831a1.227 1.227 0 0 1 2.336 0l1.55 4.831a1 1 0 0 0 .952.694h5.1a1.227 1.227 0 0 1 .724 2.217Z" })));
}

function Stats(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 22H3a1 1 0 0 1-1-1V1a1 1 0 0 0-2 0v20a3 3 0 0 0 3 3h20a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "M15 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM7 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM19 20a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1ZM11 20a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1Z" })));
}

function Stethoscope(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 9a3 3 0 1 0-4 2.816V16a6 6 0 0 1-12 0v-.08A7.006 7.006 0 0 0 14 9V5a5.006 5.006 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3v4A5 5 0 0 1 2 9V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v4a7.006 7.006 0 0 0 6 6.92V16a8 8 0 0 0 16 0v-4.184A3 3 0 0 0 24 9zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" })));
}

function Sticker(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.967 10.417a12.04 12.04 0 1 0-13.55 13.55 3.812 3.812 0 0 0 .489.032 3.993 3.993 0 0 0 2.805-1.184l9.1-9.1a3.962 3.962 0 0 0 1.156-3.298zm-21.9.474a10.034 10.034 0 0 1 19.8-.884 12.006 12.006 0 0 0-11.86 11.852 9.988 9.988 0 0 1-7.944-10.968zM12.3 21.4a2.121 2.121 0 0 1-.278.225 10 10 0 0 1 9.606-9.607 2.043 2.043 0 0 1-.224.279z" })));
}

function Stop(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" })));
}

function Stopwatch(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 13a2 2 0 1 1-3-1.723V7a1 1 0 0 1 2 0v4.277A1.994 1.994 0 0 1 14 13zm6.06-7.461a11 11 0 1 1-16.12 0l-.672-.747A3.672 3.672 0 0 1 2 5a1 1 0 0 1 0-2c.785 0 1-.215 1-1a1 1 0 0 1 2 0 3.513 3.513 0 0 1-.28 1.417l.706.784A10.923 10.923 0 0 1 11 2.051V1a1 1 0 0 1 2 0v1.051A10.923 10.923 0 0 1 18.574 4.2l.706-.784A3.513 3.513 0 0 1 19 2a1 1 0 0 1 2 0c0 .785.215 1 1 1a1 1 0 0 1 0 2 3.672 3.672 0 0 1-1.268-.208zM21 13a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9z" })));
}

function Subtitles(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 22H5a5.006 5.006 0 0 1-5-5V7a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5ZM5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" }),
        React.createElement("path", { d: "M19 13h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2ZM7 13H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM13 18H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2ZM19 18h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" })));
}

function Sun(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11h-4.08a6.924 6.924 0 0 0-.429-1.607l3.527-2.044a1 1 0 1 0-1-1.731l-3.53 2.047a7.062 7.062 0 0 0-1.149-1.15l2.046-3.531a1 1 0 0 0-1.731-1l-2.047 3.525A6.9 6.9 0 0 0 13 5.08V1a1 1 0 0 0-2 0v4.08a6.9 6.9 0 0 0-1.607.429L7.349 1.982a1 1 0 0 0-1.731 1l2.046 3.533a7.062 7.062 0 0 0-1.149 1.15l-3.53-2.047a1 1 0 1 0-1 1.731l3.524 2.044A6.924 6.924 0 0 0 5.08 11H1a1 1 0 0 0 0 2h4.08a6.924 6.924 0 0 0 .429 1.607l-3.527 2.044a1 1 0 1 0 1 1.731l3.53-2.047a7.062 7.062 0 0 0 1.149 1.15l-2.043 3.531a1 1 0 0 0 1.731 1l2.044-3.527A6.947 6.947 0 0 0 11 18.92V23a1 1 0 0 0 2 0v-4.08a6.947 6.947 0 0 0 1.607-.429l2.044 3.527a1 1 0 0 0 1.731-1l-2.046-3.531a7.062 7.062 0 0 0 1.149-1.15l3.53 2.047a1 1 0 1 0 1-1.731l-3.527-2.044A6.924 6.924 0 0 0 18.92 13H23a1 1 0 0 0 0-2Zm-11 6c-6.608-.21-6.606-9.791 0-10 6.608.21 6.606 9.791 0 10Z" })));
}

function Sunrise(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 12a1 1 0 0 1 1-1h4.079a6.819 6.819 0 0 1 .434-1.6L1.982 7.349a1 1 0 1 1 1-1.731l3.535 2.048a7.083 7.083 0 0 1 1.151-1.145l-2.05-3.537a1 1 0 0 1 1.731-1L9.4 5.513A6.9 6.9 0 0 1 11 5.08V1a1 1 0 0 1 2 0v4.08a6.9 6.9 0 0 1 1.6.433l2.047-3.532a1 1 0 0 1 1.731 1l-2.05 3.536a7.164 7.164 0 0 1 1.152 1.144l3.531-2.047a1 1 0 0 1 1 1.731L18.49 9.394a6.947 6.947 0 0 1 .441 1.614L23 11a1 1 0 0 1 0 2h-4.078a2 2 0 0 1-1.972-1.711 5.009 5.009 0 0 0-9.9 0A2 2 0 0 1 5.079 13H1a1 1 0 0 1-1-1Zm23.744 4.565a1 1 0 0 0-1.412-.076 2.214 2.214 0 0 1-3.4-.817.978.978 0 0 0-.6-.614 1 1 0 0 0-1.275.609 2.287 2.287 0 0 1-4.129.005.982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.287 2.287 0 0 1-4.128.005.982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.327 1.489A4.174 4.174 0 0 0 6 17.765a4.313 4.313 0 0 0 6 0 4.312 4.312 0 0 0 6 0 4.174 4.174 0 0 0 5.668.214 1 1 0 0 0 .076-1.414Zm0 5a1 1 0 0 0-1.412-.076 2.214 2.214 0 0 1-3.4-.817.978.978 0 0 0-.6-.614 1 1 0 0 0-1.275.609 2.287 2.287 0 0 1-4.129 0 .982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.287 2.287 0 0 1-4.128 0 .982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.327 1.499A4.174 4.174 0 0 0 6 22.765a4.313 4.313 0 0 0 6 0 4.312 4.312 0 0 0 6 0 4.174 4.174 0 0 0 5.668.214 1 1 0 0 0 .076-1.414Z" })));
}

function Surfing(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 .01c-3.812 0-8.125 2.038-11.539 5.451A38.467 38.467 0 0 0 .323 17.312a3.984 3.984 0 0 0 .851 4.409l1.106 1.105a3.981 3.981 0 0 0 4.4.852 38.333 38.333 0 0 0 11.854-8.139C21.952 12.126 23.99 7.813 23.99 4A3.632 3.632 0 0 0 20 .01zm-2.875 14.115A36.348 36.348 0 0 1 5.9 21.84a2.006 2.006 0 0 1-2.026-.3L16.707 8.707a1 1 0 1 0-1.414-1.414L2.457 20.129a2.007 2.007 0 0 1-.3-2.028A36.44 36.44 0 0 1 9.875 6.875C13.463 3.288 17.458 2.01 20 2.01c1.451 0 1.99.539 1.99 1.99 0 2.543-1.278 6.538-4.865 10.125z" })));
}

function Sword(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.414.587a2.022 2.022 0 0 0-1.941-.513 16.461 16.461 0 0 0-6.479 3.983l-9.476 9.475a14.58 14.58 0 0 0-4.376-1.522 1 1 0 0 0-.286 1.979 12.632 12.632 0 0 1 5.353 2.387L2.5 20.086l-.793-.793a1 1 0 1 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414l-.793-.793 3.709-3.71a12.609 12.609 0 0 1 2.387 5.354A1 1 0 0 0 11 24a.881.881 0 0 0 .144-.011 1 1 0 0 0 .847-1.13 14.515 14.515 0 0 0-1.522-4.376l9.475-9.476a16.52 16.52 0 0 0 4.01-6.574 1.994 1.994 0 0 0-.54-1.846zm-4.885 7.005L9.362 16.76a11.15 11.15 0 0 0-.988-1.134 11.36 11.36 0 0 0-1.133-.988l9.167-9.167a14.384 14.384 0 0 1 5.584-3.464 14.453 14.453 0 0 1-3.463 5.585z" })));
}

function Syringe(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 5.293-5-5a1 1 0 0 0-1.414 1.414L19.086 3.5 17.6 4.983a5 5 0 0 0-6.481.481L5.05 11.536A6.954 6.954 0 0 0 3 16.485v3.1L.293 22.293a1 1 0 1 0 1.414 1.414L4.414 21h3.1a6.954 6.954 0 0 0 4.949-2.05l6.072-6.072a4.993 4.993 0 0 0 .482-6.478L20.5 4.914l1.793 1.793a1 1 0 0 0 1.414-1.414zm-6.585 6.171-6.072 6.072A4.967 4.967 0 0 1 7.515 19H5v-2.515a5.11 5.11 0 0 1 .095-.976l1.2 1.2a1 1 0 1 0 1.414-1.414l-1.741-1.741a4.989 4.989 0 0 1 .5-.6l1.032-1.04 1.793 1.793a1 1 0 0 0 1.414-1.414L8.914 10.5 10.5 8.914l1.793 1.793a1 1 0 0 0 1.414-1.414L11.914 7.5l.622-.622a3.073 3.073 0 0 1 4.242 0l.344.344a3 3 0 0 1 0 4.242z" })));
}

function Tablet(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 2h10a3 3 0 0 1 3 3v12H4V5a3 3 0 0 1 3-3Zm10 20H7a3 3 0 0 1-3-3h7v1a1 1 0 0 0 2 0v-1h7a3 3 0 0 1-3 3Z" })));
}

function Target(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm1 21.949V20a1 1 0 0 0-2 0v1.949A10.015 10.015 0 0 1 2.051 13H4a1 1 0 0 0 0-2H2.051A10.015 10.015 0 0 1 11 2.051V4a1 1 0 0 0 2 0V2.051A10.015 10.015 0 0 1 21.949 11H20a1 1 0 0 0 0 2h1.949A10.015 10.015 0 0 1 13 21.949zM16 12a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z" })));
}

function Taxi(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11a1 1 0 0 0 0-2h-1.4l-.77-2.481a4.964 4.964 0 0 0-4.13-3.467A4.982 4.982 0 0 0 12.117 0h-.234A4.982 4.982 0 0 0 7.3 3.052a4.964 4.964 0 0 0-4.128 3.466L2.4 9H1a1 1 0 0 0 0 2h.781l-.715 2.3A3.958 3.958 0 0 0 2 19.444V21a3 3 0 0 0 6 0v-1h8v1a3 3 0 0 0 6 0v-1.556a3.958 3.958 0 0 0 .934-6.142L22.219 11ZM11.883 2h.234a2.991 2.991 0 0 1 2.226 1H9.657a2.988 2.988 0 0 1 2.226-1Zm-6.8 5.11A2.986 2.986 0 0 1 7.947 5h8.106a2.986 2.986 0 0 1 2.865 2.111l1.532 4.934A3.941 3.941 0 0 0 20 12H4a3.941 3.941 0 0 0-.45.045ZM6 21a1 1 0 0 1-2 0v-1h2Zm14 0a1 1 0 0 1-2 0v-1h2Zm0-3H4a2 2 0 0 1 0-4v1a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1a2 2 0 0 1 0 4Z" })));
}

function Tennis(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.485 3.515a11.994 11.994 0 1 0 0 16.97 12.013 12.013 0 0 0 0-16.97zm1.449 7.417a7.964 7.964 0 0 1-8.865-8.866 9.961 9.961 0 0 1 8.865 8.866zM2.066 13.068a7.964 7.964 0 0 1 8.865 8.866 9.961 9.961 0 0 1-8.865-8.866zm17.005 6a9.947 9.947 0 0 1-6.127 2.879 9.971 9.971 0 0 0-10.9-10.894 9.979 9.979 0 0 1 9.012-9.003A9.986 9.986 0 0 0 21 13c.317 0 .635-.016.953-.046a9.951 9.951 0 0 1-2.882 6.117z" })));
}

function Terrace(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.122 13A2.881 2.881 0 0 0 24 10.122a5.13 5.13 0 0 0-2.106-4.137L15.009.979a5.1 5.1 0 0 0-6.018 0L2.106 5.985A5.13 5.13 0 0 0 0 10.122 2.881 2.881 0 0 0 2.878 13H11v10a1 1 0 0 0 2 0V13ZM15.5 8.075a2.986 2.986 0 0 1 .5 1.659V11h-3V4.313Zm5.218-.475A3.124 3.124 0 0 1 22 10.122a.879.879 0 0 1-.878.878H18V9.734a4.983 4.983 0 0 0-.835-2.766l-2.5-3.77ZM2 10.122A3.124 3.124 0 0 1 3.282 7.6l6.057-4.4-2.5 3.77A4.983 4.983 0 0 0 6 9.734V11H2.878A.879.879 0 0 1 2 10.122ZM8 11V9.734a2.986 2.986 0 0 1 .5-1.659L11 4.313V11ZM4 19H2v-3a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0v-2h2a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0-3-3ZM23 15a1 1 0 0 0-1 1v3h-2a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1h2v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Z" })));
}

function TestTube(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 0H6a1 1 0 0 0 0 2h1v17a5 5 0 0 0 10 0V2h1a1 1 0 0 0 0-2zm-6 22a3 3 0 0 1-3-3V9h6v10a3 3 0 0 1-3 3zm3-15H9V2h6z" })));
}

function Test(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 17a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zm-2-2a1 1 0 0 1-1-1v-1h-2v1a1 1 0 0 1-2 0v-4a3 3 0 0 1 6 0v4a1 1 0 0 1-1 1zm-1-4v-1a1 1 0 0 0-2 0v1zm-1.711 5.3-1.612 1.63a.25.25 0 0 1-.344.01l-.616-.64a1 1 0 0 0-1.434 1.4l.626.644a2.255 2.255 0 0 0 3.186 0l1.616-1.644a1 1 0 0 0-1.422-1.4zM21 6.657V19a5.006 5.006 0 0 1-5 5H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6.343a4.969 4.969 0 0 1 3.536 1.465l1.656 1.656A4.969 4.969 0 0 1 21 6.657zm-4.535-3.778A3.042 3.042 0 0 0 16 2.5V5h2.5a3.042 3.042 0 0 0-.38-.465zM19 7h-3a2 2 0 0 1-2-2V2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" })));
}

function TextCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.107 14.447a1 1 0 1 0 1.789-.894l-5.5-11a1 1 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 11h5.764ZM4.619 9 6.5 5.236 8.383 9Z" }),
        React.createElement("path", { d: "M23.707 11.293a1 1 0 0 0-1.414 0L13 20.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l10-10a1 1 0 0 0 0-1.414Z" })));
}

function Text(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1h-2v8h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V8H9a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3z" })));
}

function ThermometerHalf(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 14.184V8a1 1 0 0 0-2 0v6.184a2.994 2.994 0 1 0 2 0Zm4-2.073V5c-.211-6.609-9.791-6.6-10 0v7.111a7 7 0 1 0 10 0ZM12 22a5.018 5.018 0 0 1-3.332-8.719A1 1 0 0 0 9 12.537V5a3 3 0 0 1 6 0v7.537a1 1 0 0 0 .332.744A5.018 5.018 0 0 1 12 22Z" })));
}

function ThumbsDown(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.951 12.3-.705-5A5.024 5.024 0 0 0 18.3 3H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h2.712l1.914 3.878a3.037 3.037 0 0 0 5.721-1.837L15.011 18H19a5 5 0 0 0 4.951-5.7ZM5 5h2v11H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm16.264 9.968A3 3 0 0 1 19 16h-5.167a1 1 0 0 0-.987 1.162l.528 3.2a1.024 1.024 0 0 1-.233.84 1.07 1.07 0 0 1-1.722-.212L9.23 16.558a1 1 0 0 0-.23-.292V5h9.3a3.012 3.012 0 0 1 2.97 2.581l.706 5a3 3 0 0 1-.712 2.387Z" })));
}

function ThumbsUp(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.773 7.721A4.994 4.994 0 0 0 19 6h-3.989l.336-2.041a3.037 3.037 0 0 0-5.721-1.837L7.712 6H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h13.3a5.024 5.024 0 0 0 4.951-4.3l.705-5a5 5 0 0 0-1.183-3.979ZM2 16v-5a3 3 0 0 1 3-3h2v11H5a3 3 0 0 1-3-3Zm19.971-4.581-.706 5A3.012 3.012 0 0 1 18.3 19H9V7.734a1 1 0 0 0 .23-.292l2.189-4.435a1.07 1.07 0 0 1 1.722-.207 1.024 1.024 0 0 1 .233.84l-.528 3.2A1 1 0 0 0 13.833 8H19a3 3 0 0 1 2.971 3.419Z" })));
}

function Thumbtack(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 24a1 1 0 0 0 .707-.293l6.619-6.619 1.248 1.292a5.169 5.169 0 0 0 3.605 1.614 3.991 3.991 0 0 0 1.339-.227 3.63 3.63 0 0 0 2.435-3.122 8.486 8.486 0 0 0-.222-3.027l-.214-1.042a1 1 0 0 1 .264-.943l1.587-1.588a.34.34 0 0 1 .236-.1.17.17 0 0 1 .167.065 3.077 3.077 0 0 0 3.971.432 3 3 0 0 0 .379-4.565L18.2.954a3.085 3.085 0 0 0-3.938-.4 3 3 0 0 0-.38 4.565l.076.076a.308.308 0 0 1 0 .434l-1.6 1.6a1 1 0 0 1-.954.261l-.817-.209a8.632 8.632 0 0 0-3.082-.233A3.863 3.863 0 0 0 4.25 9.634a4 4 0 0 0 .928 4.2l1.758 1.82-6.643 6.639A1 1 0 0 0 1 24Zm5.135-13.7a1.856 1.856 0 0 1 1.578-1.264A6.7 6.7 0 0 1 8.406 9a6.622 6.622 0 0 1 1.681.217l.823.21a3.01 3.01 0 0 0 2.862-.785l1.6-1.6a2.31 2.31 0 0 0 0-3.262l-.076-.076a1 1 0 0 1 .134-1.528 1.084 1.084 0 0 1 1.356.19L21.71 7.29a1 1 0 0 1-.134 1.528 1.085 1.085 0 0 1-1.368-.2 2.212 2.212 0 0 0-1.584-.672 2.4 2.4 0 0 0-1.667.684l-1.586 1.587a3 3 0 0 0-.8 2.8l.219 1.058a6.646 6.646 0 0 1 .181 2.366 1.655 1.655 0 0 1-1.115 1.444 2.8 2.8 0 0 1-2.85-.9l-4.4-4.55a2.027 2.027 0 0 1-.471-2.135Z" })));
}

function Ticket(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 0h-.13a2.02 2.02 0 0 0-1.941 1.532 2 2 0 0 1-3.858 0A2.02 2.02 0 0 0 8.13 0H8a5.006 5.006 0 0 0-5 5v16a3 3 0 0 0 3 3h2.13a2.02 2.02 0 0 0 1.941-1.532 2 2 0 0 1 3.858 0A2.02 2.02 0 0 0 15.87 24H18a3 3 0 0 0 3-3V5a5.006 5.006 0 0 0-5-5Zm2 22-2.143-.063A4 4 0 0 0 8.13 22H6a1 1 0 0 1-1-1v-4h2a1 1 0 0 0 0-2H5V5a3 3 0 0 1 3-3l.143.063A4.01 4.01 0 0 0 12 5a4.071 4.071 0 0 0 3.893-3H16a3 3 0 0 1 3 3v10h-2a1 1 0 0 0 0 2h2v4a1 1 0 0 1-1 1Z" }),
        React.createElement("path", { d: "M13 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" })));
}

function TimeAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 18h-3v-3a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM11 7v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-2 0z" }),
        React.createElement("path", { d: "M14.728 21.624a9.985 9.985 0 1 1 6.9-6.895 1 1 0 1 0 1.924.542 11.989 11.989 0 1 0-8.276 8.277 1 1 0 1 0-.544-1.924z" })));
}

function TimeCheck(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.707 16.325a1 1 0 0 0-1.414 0l-5.627 5.628-2.688-2.653a1 1 0 0 0-1.435 1.4l2.744 2.7a1.876 1.876 0 0 0 1.345.6h.033A1.873 1.873 0 0 0 18 23.447l5.707-5.708a1 1 0 0 0 0-1.414z" }),
        React.createElement("path", { d: "M11.09 21.959A10 10 0 1 1 22 12c0 .307-.015.611-.041.911A1 1 0 0 0 22.866 14a.989.989 0 0 0 1.085-.907c.032-.363.049-.726.049-1.093a12 12 0 1 0-13.09 11.951h.091a1 1 0 0 0 .089-2z" }),
        React.createElement("path", { d: "M11 7v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-2 0z" })));
}

function TimeDelete(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.707 15.293a1 1 0 0 0-1.414 0L19.5 18.086l-2.793-2.793a1 1 0 0 0-1.414 1.414l2.793 2.793-2.793 2.793a1 1 0 1 0 1.414 1.414l2.793-2.793 2.793 2.793a1 1 0 0 0 1.414-1.414L20.914 19.5l2.793-2.793a1 1 0 0 0 0-1.414z" }),
        React.createElement("path", { d: "M12 22a10 10 0 1 1 10-10 1 1 0 0 0 2 0 12 12 0 1 0-12 12 1 1 0 0 0 0-2z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1z" })));
}

function TimeFast(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 24H1a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM7 20H1a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM5 16H1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" }),
        React.createElement("path", { d: "M13 23.955a1 1 0 0 1-.089-2A10 10 0 1 0 2.041 11.09a1 1 0 0 1-1.992-.18A12 12 0 0 1 24 12a11.934 11.934 0 0 1-10.91 11.951.917.917 0 0 1-.09.004z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1z" })));
}

function TimeForwardSixty(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 18a3.009 3.009 0 0 0-1 .171V18a1 1 0 0 1 1-1 .985.985 0 0 1 .75.339 1 1 0 1 0 1.5-1.322A3 3 0 0 0 11 18v3a3 3 0 0 0 5.544 1.589 3.054 3.054 0 0 0 .121-3.009A2.942 2.942 0 0 0 14 18Zm.849 3.529A1 1 0 1 1 14 20a.954.954 0 0 1 .866.455 1.068 1.068 0 0 1-.017 1.074ZM21 15a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3Zm1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0Zm-10-8H8a1 1 0 0 1 0-2h3V7a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1ZM24 3v3a3 3 0 0 1-3 3h-3a1 1 0 0 1 0-2h2.637A9.991 9.991 0 1 0 8.364 21.318a1 1 0 0 1-.728 1.864A12 12 0 1 1 22 5.374V3a1 1 0 0 1 2 0Z" })));
}

function TimeForwardTen(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 15a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3zm1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zM13 12V7a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z" }),
        React.createElement("path", { d: "M23 2a1 1 0 0 0-1 1v2.374A12 12 0 1 0 7.636 23.182 1.015 1.015 0 0 0 8 23.25a1 1 0 0 0 .364-1.932A10 10 0 1 1 20.636 7H18a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z" }),
        React.createElement("path", { d: "M15.383 15.076a1 1 0 0 0-1.09.217l-3 3a1 1 0 0 0 1.414 1.414L14 18.414V23a1 1 0 0 0 2 0v-7a1 1 0 0 0-.617-.924z" })));
}

function TimeForward(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11a1 1 0 0 0-1 1 10.034 10.034 0 1 1-2.9-7.021A.862.862 0 0 1 19 5h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V1a1 1 0 0 0-2 0v2.065A11.994 11.994 0 1 0 24 12a1 1 0 0 0-1-1z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1z" })));
}

function TimeHalfPast(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 13.723a1.984 1.984 0 0 1 0-3.446V7a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446V16a1 1 0 0 1-2 0zM12 0a1 1 0 0 0 0 2 10 10 0 0 1 0 20 1 1 0 0 0 0 2 12 12 0 0 0 0-24zM1.827 6.784a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM2 12a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2.221-8.793a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM7.779.841a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM1.827 15.216a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" })));
}

function TimeOclock(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm2-10a2 2 0 1 1-3-1.723V7a1 1 0 0 1 2 0v3.277A1.994 1.994 0 0 1 14 12z" })));
}

function TimePast(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a11.972 11.972 0 0 0-8 3.073V1a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2H5a.854.854 0 0 1-.1-.021A9.987 9.987 0 1 1 2 12a1 1 0 0 0-2 0A12 12 0 1 0 12 0Z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Z" })));
}

function TimeQuarterPast(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 12a1 1 0 0 1-2 0A10.011 10.011 0 0 0 12 2a1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-8 1a1 1 0 0 0 0-2h-2.277a2 2 0 0 0-.723-.723V7a1 1 0 0 0-2 0v3.277A1.994 1.994 0 1 0 13.723 13zM1.827 6.784a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM2 12a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm10 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM4.221 3.207a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM7.779.841a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM1.827 15.216a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm14.394-5.943a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm-2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm-3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" })));
}

function TimeQuarterTo(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 12a12 12 0 0 1-24 0 1 1 0 0 1 2 0A10 10 0 1 0 12 2a1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-13.723-1H8a1 1 0 0 0 0 2h2.277A1.994 1.994 0 1 0 13 10.277V7a1 1 0 0 0-2 0v3.277a2 2 0 0 0-.723.723zm-8.45-2.216a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm2.394-3.577a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm3.558-2.366a1 1 0 1 0-1-1 1 1 0 0 0 1 1z" })));
}

function TimeTwentyFour(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.6 21.3c-.3.226-.619.464-.89.7H16a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-1.5 1.275-2.456 2.4-3.3.75-.562 1.6-1.2 1.6-1.7a1 1 0 0 0-2 0 1 1 0 0 1-2 0 3 3 0 0 1 6 0c0 1.5-1.275 2.456-2.4 3.3zM23 15a1 1 0 0 0-1 1v3h-1a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h1v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1zm-10-3V7a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zM23 2a1 1 0 0 0-1 1v2.374A12 12 0 1 0 7.636 23.182 1.015 1.015 0 0 0 8 23.25a1 1 0 0 0 .364-1.932A10 10 0 1 1 20.636 7H18a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z" })));
}

function ToolCrop(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 18h-3V9a5.006 5.006 0 0 0-5-5H6V1a1 1 0 0 0-2 0v3H1a1 1 0 0 0 0 2h3v9a5.006 5.006 0 0 0 5 5h9v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2ZM9 18a3 3 0 0 1-3-3V6h9a3 3 0 0 1 3 3v9Z" })));
}

function ToolMarquee(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 18v1a5.006 5.006 0 0 1-5 5h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0zM19 0h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5zm4 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zM6 22H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 0-2zM6 0H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2zM1 15a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zm9-13h3.932a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2zm4 20h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" })));
}

function Tooth(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.909 24A2.912 2.912 0 0 1 13 21.091V15a1 1 0 0 0-2 0v6.091a2.91 2.91 0 0 1-5.418 1.476C3.186 18.463 0 12.279 0 6a5.785 5.785 0 0 1 6-6 12.8 12.8 0 0 1 3.915.615A7.037 7.037 0 0 0 12 1a7.037 7.037 0 0 0 2.085-.385A12.792 12.792 0 0 1 18 0a5.785 5.785 0 0 1 6 6c0 6.278-3.186 12.462-5.582 16.567A2.911 2.911 0 0 1 15.909 24ZM12 12a3 3 0 0 1 3 3v6.091a.911.911 0 0 0 1.691.469C18.97 17.654 22 11.793 22 6a3.85 3.85 0 0 0-4-4 10.752 10.752 0 0 0-3.358.536A8.959 8.959 0 0 1 12 3a8.953 8.953 0 0 1-2.642-.464A10.758 10.758 0 0 0 6 2C2.045 2 2 5.837 2 6c0 5.794 3.03 11.655 5.31 15.56A.91.91 0 0 0 9 21.091V15a3 3 0 0 1 3-3Z" })));
}

function Tornado(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-4a3 3 0 0 1 0-6h7a1 1 0 0 0 0-2H6C-1.932 11.747-1.926.25 6 0h14a4 4 0 0 1 0 8H6a1 1 0 0 1 0-2h14a2 2 0 0 0 0-4H6a4 4 0 0 0 0 8h13a3 3 0 0 1 0 6h-7a1 1 0 0 0 0 2h4a3 3 0 0 1 0 6Z" })));
}

function TrainSide(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.99 15H1a1 1 0 0 0 0 2h18.99a4 4 0 0 0 3.825-5.193A13.939 13.939 0 0 0 10.455 2H1a1 1 0 0 0 0 2h3v3H1a1 1 0 0 0 0 2h19.213a12.048 12.048 0 0 1 1.694 3.406 1.969 1.969 0 0 1-.3 1.773A1.992 1.992 0 0 1 19.99 15ZM9 7H6V4h3Zm2 0V4.022A11.952 11.952 0 0 1 18.407 7ZM23 20H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function Train(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 5a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1Zm6 .72v10.457a5 5 0 0 1-1.326 3.39l1.25 3.054a1 1 0 1 1-1.852.757L18 20.745A13.573 13.573 0 0 1 12 22a13.583 13.583 0 0 1-6-1.255l-1.073 2.633a1 1 0 1 1-1.851-.757l1.249-3.054A5 5 0 0 1 3 16.177V5.72A4.982 4.982 0 0 1 6.475.956 18.367 18.367 0 0 1 12 0a18.329 18.329 0 0 1 5.525.957A4.979 4.979 0 0 1 21 5.72Zm-2 6.017C17.447 14.065 15.05 16 12 16s-5.447-1.935-7-4.263v4.44a2.958 2.958 0 0 0 1.512 2.607A11.331 11.331 0 0 0 12 20a11.321 11.321 0 0 0 5.487-1.216A2.957 2.957 0 0 0 19 16.177ZM19 6v-.28a2.988 2.988 0 0 0-2.083-2.858A16.364 16.364 0 0 0 12 2a16.4 16.4 0 0 0-4.917.861A2.99 2.99 0 0 0 5 5.72V6c0 2.443 2.645 8 7 8s7-5.557 7-8Zm-7 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" })));
}

function Transform(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0v1a5.006 5.006 0 0 1-5 5zm5-18V5a5.006 5.006 0 0 0-5-5h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0zM7 23a1 1 0 0 0-1-1H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 1-1zM2 6V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0zm14 6a4 4 0 1 0-4 4 4 4 0 0 0 4-4zm-2 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" })));
}

function Trash(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 4h-3.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2ZM11 2h2a3.006 3.006 0 0 1 2.829 2H8.171A3.006 3.006 0 0 1 11 2Zm7 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6h12Z" }),
        React.createElement("path", { d: "M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM14 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" })));
}

function Treatment(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 9a1 1 0 0 1 1-1h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1-1-1zm7 5H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-4 4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm9-11v12a5.006 5.006 0 0 1-5 5H8a5.006 5.006 0 0 1-5-5V7a5.006 5.006 0 0 1 5-5h.171A3.006 3.006 0 0 1 11 0h2a3.006 3.006 0 0 1 2.829 2H16a5.006 5.006 0 0 1 5 5zm-2 0a3 3 0 0 0-3-3h-1a1 1 0 0 1-1-1 1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1 1 1 0 0 1-1 1H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" })));
}

function TreeChristmas(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.44 16.855-1.481-2.221a2.214 2.214 0 0 0 .619-3.072l-2.091-3.135a2.234 2.234 0 0 0 .456-.58 2.21 2.21 0 0 0-.084-2.256 1.23 1.23 0 0 0-.081-.109L13.678.7a2.38 2.38 0 0 0-3.4.051L6.206 5.478a.912.912 0 0 0-.081.107 2.212 2.212 0 0 0 .38 2.853l-2.083 3.124a2.214 2.214 0 0 0 .619 3.072L3.56 16.855A3.309 3.309 0 0 0 6.312 22H11v1a1 1 0 0 0 2 0v-1h4.687a3.309 3.309 0 0 0 2.753-5.145Zm-1.6 2.454a1.292 1.292 0 0 1-1.153.691H6.312a1.309 1.309 0 0 1-1.088-2.035l2.276-3.41A1 1 0 0 0 6.666 13h-.405a.2.2 0 0 1-.186-.111.2.2 0 0 1 .011-.217l2.745-4.117a1 1 0 0 0 .04-1.027A1.017 1.017 0 0 0 7.979 7a.2.2 0 0 1-.186-.11.2.2 0 0 1-.011-.178l3.962-4.6a.327.327 0 0 1 .464-.052L16.2 6.713a.2.2 0 0 1-.011.178A.2.2 0 0 1 16 7a1 1 0 0 0-.832 1.555l2.745 4.117a.2.2 0 0 1 .011.217.2.2 0 0 1-.186.111h-.405a1 1 0 0 0-.832 1.555l2.274 3.41a1.289 1.289 0 0 1 .066 1.344Z" }),
        React.createElement("circle", { cx: 9, cy: 17, r: 1 }),
        React.createElement("circle", { cx: 14, cy: 17, r: 1 }),
        React.createElement("circle", { cx: 11, cy: 13, r: 1 }),
        React.createElement("circle", { cx: 13, cy: 10, r: 1 }),
        React.createElement("circle", { cx: 11, cy: 7, r: 1 })));
}

function Tree(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.467 17.3a530.27 530.27 0 0 0-1.557-1.815 2.67 2.67 0 0 0 .616-3.663 477.15 477.15 0 0 0-1.885-2.091 2.475 2.475 0 0 0 1.084-1.073 2.428 2.428 0 0 0-.176-2.526C18.528 6.1 13.886.846 13.886.846a2.608 2.608 0 0 0-3.771 0S5.472 6.1 5.451 6.13a2.428 2.428 0 0 0-.176 2.526 2.475 2.475 0 0 0 1.084 1.073S4.5 11.784 4.474 11.82a2.67 2.67 0 0 0 .616 3.663S3.554 17.268 3.533 17.3A3 3 0 0 0 6 22h5v1a1 1 0 0 0 2 0v-1h5a3 3 0 0 0 2.471-4.7Zm-1.585 2.167A.985.985 0 0 1 18 20H6a1 1 0 0 1-.85-1.529L7.285 16H13a1 1 0 0 0 0-2H6.67a.667.667 0 0 1-.578-1l2.722-3H12a1 1 0 0 0 0-2H7.5a.488.488 0 0 1-.451-.264.416.416 0 0 1 .01-.418l4.552-5.149a.508.508 0 0 1 .773 0l4.55 5.148a.415.415 0 0 1 .011.418A.488.488 0 0 1 16.5 8h-.868a1.006 1.006 0 0 0-.74 1.672L17.908 13a.667.667 0 0 1-.578 1h-.157a1.007 1.007 0 0 0-.757 1.653l2.43 2.818a.979.979 0 0 1 .036.994Z" })));
}

function Triangle(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.948 24H4.052A4.03 4.03 0 0 1 .6 22.088a3.947 3.947 0 0 1-.182-3.86L8.38 4.212a4.068 4.068 0 0 1 7.253.026l7.922 13.941a3.967 3.967 0 0 1-.156 3.909A4.03 4.03 0 0 1 19.948 24ZM12 4a2.013 2.013 0 0 0-1.842 1.129l-.026.049-7.948 13.989a1.919 1.919 0 0 0 .116 1.867A2.044 2.044 0 0 0 4.052 22h15.9a2.044 2.044 0 0 0 1.752-.966 1.937 1.937 0 0 0 .09-1.916l-7.926-13.94A2.039 2.039 0 0 0 12 4Z" })));
}

function Trophy(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.091 16C21.661 15.964 24 12.484 24 9.5a3.5 3.5 0 0 0-2.764-3.419c.136-.387.254-.742.333-1.011a3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458c.079.269.2.624.333 1.011A3.5 3.5 0 0 0 0 9.5c0 2.984 2.339 6.464 8.909 6.5a5.06 5.06 0 0 1 .091.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-.992A1.885 1.885 0 0 1 15 20v-3.08a5.058 5.058 0 0 1 .091-.92ZM20.5 8A1.5 1.5 0 0 1 22 9.5c0 2.034-1.609 4.2-6.036 4.47a4.847 4.847 0 0 1 .762-.821 15.132 15.132 0 0 0 3.727-5.159c.016.001.03.01.047.01ZM2 9.5A1.5 1.5 0 0 1 3.5 8c.017 0 .031-.009.047-.01a15.132 15.132 0 0 0 3.727 5.159 4.847 4.847 0 0 1 .762.821C3.609 13.7 2 11.534 2 9.5ZM10.513 22A4.08 4.08 0 0 0 11 20v-3.079a6.93 6.93 0 0 0-2.431-5.295A15.338 15.338 0 0 1 4.349 4.5a1.9 1.9 0 0 1 .31-1.694A1.994 1.994 0 0 1 6.271 2h11.458a1.994 1.994 0 0 1 1.612.81 1.9 1.9 0 0 1 .31 1.694 15.338 15.338 0 0 1-4.22 7.122A6.928 6.928 0 0 0 13 16.92V20a4.08 4.08 0 0 0 .487 2Z" })));
}

function TruckSide(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 5h-2.1A5.009 5.009 0 0 0 12 1H5a5.006 5.006 0 0 0-5 5v9a4 4 0 0 0 3.061 3.877 3.5 3.5 0 1 0 6.9.123h4.082a3.465 3.465 0 0 0-.041.5 3.5 3.5 0 0 0 7 0 3.4 3.4 0 0 0-.061-.623A4 4 0 0 0 24 15v-5a5.006 5.006 0 0 0-5-5Zm3 5v1h-5V7h2a3 3 0 0 1 3 3ZM2 15V6a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v11H4a2 2 0 0 1-2-2Zm6 4.5a1.5 1.5 0 0 1-3 0 1.418 1.418 0 0 1 .093-.5h2.814a1.418 1.418 0 0 1 .093.5Zm9.5 1.5a1.5 1.5 0 0 1-1.5-1.5 1.41 1.41 0 0 1 .093-.5h2.814a1.41 1.41 0 0 1 .093.5 1.5 1.5 0 0 1-1.5 1.5Zm2.5-4h-3v-4h5v2a2 2 0 0 1-2 2Z" })));
}

function Umbrella(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.717 9.549A12.834 12.834 0 0 0 13 2.043V1a1 1 0 0 0-2 0v1.043A12.843 12.843 0 0 0 .267 9.549a3.945 3.945 0 0 0 .405 3.682A4.015 4.015 0 0 0 4 15h7v6a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0v-6h6.983a4.017 4.017 0 0 0 3.329-1.769 3.948 3.948 0 0 0 .405-3.682zm-2.061 2.561a1.993 1.993 0 0 1-1.673.89H4a1.992 1.992 0 0 1-1.673-.891 1.927 1.927 0 0 1-.2-1.818C3.581 6.646 7.734 4 12 4a10.809 10.809 0 0 1 9.859 6.291 1.923 1.923 0 0 1-.203 1.819z" })));
}

function Underline(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 20a8.009 8.009 0 0 0 8-8V1a1 1 0 0 0-2 0v11a6 6 0 0 1-12 0V1a1 1 0 0 0-2 0v11a8.009 8.009 0 0 0 8 8ZM23 22H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function UndoAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.535 8.46A4.965 4.965 0 0 0 19 7H2.8l4.3-4.3a1 1 0 0 0-1.418-1.412L.732 6.237a2.5 2.5 0 0 0 0 3.535l4.95 4.951A1 1 0 1 0 7.1 13.309L2.788 9H19a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a1 1 0 0 0 0 2h14a5.006 5.006 0 0 0 5-5v-7a4.969 4.969 0 0 0-1.465-3.54Z" })));
}

function Undo(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 24a1 1 0 0 1-1-1 6.006 6.006 0 0 0-6-6h-5.83v1.586A2 2 0 0 1 6.756 20L.877 14.121a3 3 0 0 1 0-4.242L6.756 4a2 2 0 0 1 3.414 1.414V7H15a9.01 9.01 0 0 1 9 9v7a1 1 0 0 1-1 1ZM8.17 5.414l-5.879 5.879a1 1 0 0 0 0 1.414l5.879 5.879V16a1 1 0 0 1 1-1H16a7.984 7.984 0 0 1 6 2.714V16a7.008 7.008 0 0 0-7-7H9.17a1 1 0 0 1-1-1Z" })));
}

function Unlock(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 8H7V7a5 5 0 0 1 9.375-2.422 1 1 0 0 0 1.749-.971A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5.006 5.006 0 0 0-5-5Zm3 11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" }),
        React.createElement("path", { d: "M12 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z" })));
}

function Upload(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.007 2.578 11 18.016a1 1 0 0 0 1 1 1 1 0 0 0 1-1l.007-15.421 2.912 2.913a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L14.122.879a3 3 0 0 0-4.244 0L6.667 4.091a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0Z" }),
        React.createElement("path", { d: "M22 17v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1Z" })));
}

function UsbPendrive(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 9.026V4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v5.026A4.977 4.977 0 0 0 3 13v2a9 9 0 0 0 18 0v-2a4.977 4.977 0 0 0-2-3.974ZM7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4H7Zm12 7a7 7 0 0 1-14 0v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z" }),
        React.createElement("circle", { cx: 10, cy: 5, r: 1 }),
        React.createElement("circle", { cx: 14, cy: 5, r: 1 })));
}

function UserAdd(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11h-2V9a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2ZM9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6ZM9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM9 14a9.01 9.01 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9Z" })));
}

function UserDelete(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 24a1 1 0 0 1-1-1 7 7 0 0 0-14 0 1 1 0 0 1-2 0 9 9 0 0 1 18 0 1 1 0 0 1-1 1zm6-11h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 12a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zM9 2a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" })));
}

function UserRemove(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6zM9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm9 21a1 1 0 0 1-2 0 7 7 0 0 0-14 0 1 1 0 0 1-2 0 9 9 0 0 1 18 0zm5.707-8.707a1 1 0 1 1-1.414 1.414L20.5 13.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L21.914 12.5z" })));
}

function UserTime(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 24a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm1.707 6.707a1 1 0 0 0 0-1.414L18 16.586V15a1 1 0 0 0-2 0v2a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414 0zM2 23a8.3 8.3 0 0 1 6.221-8.024 1 1 0 0 0-.442-1.952A10.213 10.213 0 0 0 0 23a1 1 0 0 0 2 0zm6.474-12a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5zm0-9a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5z" })));
}

function User(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6Zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM12 14a9.01 9.01 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9Z" })));
}

function Utensils(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 1v6a5.009 5.009 0 0 1-4 4.9V23a1 1 0 0 1-2 0V11.9A5.009 5.009 0 0 1 2 7V1a1 1 0 0 1 2 0v6a3 3 0 0 0 2 2.816V1a1 1 0 0 1 2 0v8.816A3 3 0 0 0 10 7V1a1 1 0 0 1 2 0Zm10 9a12.64 12.64 0 0 1-5 9.775V23a1 1 0 0 1-2 0V2A1.9 1.9 0 0 1 16.131.217a2.194 2.194 0 0 1 2.356.459A13.474 13.474 0 0 1 22 10Zm-2 0a11.7 11.7 0 0 0-3-7.937V17.07A10.3 10.3 0 0 0 20 10Z" })));
}

function VectorAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 16v-4a8.983 8.983 0 0 0-3.356-7h2.633a1.991 1.991 0 1 0-.009-2h-4.41a3.981 3.981 0 0 0-7.716 0H3.723a1.991 1.991 0 1 0 .009 2h2.624A8.983 8.983 0 0 0 3 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3v-4a7 7 0 0 1 3.521-6.065 3.963 3.963 0 0 0 6.958 0A7 7 0 0 1 19 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3ZM6 19v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm6-13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm10 15a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" })));
}

function Vector(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.007 3 8 2.986A3 3 0 0 0 5 0H3a3 3 0 0 0-3 3v2a3 3 0 0 0 2.993 3l-.014 1.993A1 1 0 0 0 3.973 11h.006a1 1 0 0 0 1-.993L4.993 8H5a3 3 0 0 0 3-3v-.014L9.993 5H10a1 1 0 0 0 .007-2ZM6 5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM21 0h-2a3 3 0 0 0-3 2.993l-1.994-.014H14a1 1 0 0 0-.007 2L16 4.993V5a3 3 0 0 0 3 3h.014L19 9.993A1 1 0 0 0 19.993 11H20a1 1 0 0 0 1-.993L21.014 8A3 3 0 0 0 24 5V3a3 3 0 0 0-3-3Zm1 5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM21.007 16l.014-1.994A1 1 0 0 0 20.027 13h-.006a1 1 0 0 0-1 .993L19.007 16H19a3 3 0 0 0-3 3v.014L14.007 19H14a1 1 0 0 0-.007 2l2.007.014A3 3 0 0 0 19 24h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-2.993-3ZM22 21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM10.007 19.021 8 19.007V19a3 3 0 0 0-3-3h-.014L5 14.007A1 1 0 0 0 4.007 13H4a1 1 0 0 0-1 .993L2.986 16A3 3 0 0 0 0 19v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-2.993l1.994.014H10a1 1 0 0 0 .007-2ZM6 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" })));
}

function VenusDouble(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 7.5a7.486 7.486 0 0 0-11.995-5.99A7.5 7.5 0 1 0 6 14.849V19H4a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2H8v-4.024a7.442 7.442 0 0 0 4.005-1.486A7.456 7.456 0 0 0 16 14.975V19h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-4.151A7.513 7.513 0 0 0 24 7.5Zm-2 0A5.5 5.5 0 1 1 16.5 2 5.506 5.506 0 0 1 22 7.5Zm-20 0a5.49 5.49 0 0 1 8.56-4.561 7.448 7.448 0 0 0 0 9.122A5.49 5.49 0 0 1 2 7.5Z" })));
}

function VenusMars(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 0h-4a1 1 0 0 0 0 2h2.586l-2.4 2.4a6.941 6.941 0 0 0-7.693-.449A6.989 6.989 0 1 0 6 16.92V19H4a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2H8v-2.073a6.934 6.934 0 0 0 2.491-.88A6.986 6.986 0 0 0 19.6 5.816l2.4-2.4V6a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2ZM2 10a4.971 4.971 0 0 1 6.788-4.656 6.956 6.956 0 0 0 0 9.312A4.971 4.971 0 0 1 2 10Zm12 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" })));
}

function Venus(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 8a8 8 0 1 0-9 7.931V19H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-3.069A8.008 8.008 0 0 0 20 8ZM6 8a6 6 0 1 1 6 6 6.006 6.006 0 0 1-6-6Z" })));
}

function VideoCamera(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M488.533 191.04a42.39 42.39 0 0 0-44.629 3.925L404.8 224c-5.544-54.472-51.38-95.931-106.133-96h-1.813l-87.936-87.915a63.489 63.489 0 0 0-45.248-18.752H21.333C9.551 21.333 0 30.885 0 42.667S9.551 64 21.333 64h142.336a21.458 21.458 0 0 1 15.083 6.251L236.501 128H106.667C47.786 128.071.071 175.786 0 234.667v170.667C.071 464.214 47.786 511.93 106.667 512h192c54.754-.069 100.589-41.528 106.133-96l39.04 29.099c18.851 14.138 45.595 10.318 59.733-8.533a42.665 42.665 0 0 0 8.533-25.6V229.184a42.41 42.41 0 0 0-23.573-38.144zM362.667 405.333c0 35.346-28.654 64-64 64h-192c-35.346 0-64-28.654-64-64V234.667c0-35.346 28.654-64 64-64h192c35.346 0 64 28.654 64 64v170.666zm106.666 5.483-64-47.701v-86.229l64-47.701v181.631z" })));
}

function Volleyball(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256.07-.047C114.467-.047-.326 114.746-.326 256.349S114.467 512.744 256.07 512.744s256.395-114.792 256.395-256.395S397.673-.047 256.07-.047zM466.667 224v.064a213.087 213.087 0 0 1-62.677 26.261 388.272 388.272 0 0 0-65.472-191.019C406.956 88.198 455.48 150.56 466.667 224zM256 42.667c5.397 0 10.667.405 15.979.811a346.174 346.174 0 0 1 89.6 212.245 212.675 212.675 0 0 1-85.333-14.72 256.663 256.663 0 0 0-94.912-184.555A211.637 211.637 0 0 1 256 42.667zm-117.611 35.52a213.73 213.73 0 0 1 52.373 48.341A389.399 389.399 0 0 0 47.659 301.461c-18.991-86.039 17.107-174.87 90.73-223.274zM71.595 362.773A346.896 346.896 0 0 1 212.822 163.2a212.361 212.361 0 0 1 21.184 83.008 256.706 256.706 0 0 0-100.587 184.107 214.537 214.537 0 0 1-61.824-67.542zM256 469.333a212.222 212.222 0 0 1-80.469-15.872 212.958 212.958 0 0 1 14.336-80.533 381.867 381.867 0 0 0 223.467 26.645A212.547 212.547 0 0 1 256 469.333zM209.067 334.72a212.492 212.492 0 0 1 50.539-54.4 255.407 255.407 0 0 0 94.891 18.624 257.504 257.504 0 0 0 114.091-26.667 211.324 211.324 0 0 1-20.117 75.136 346.795 346.795 0 0 1-239.404-12.693z" })));
}

function Volume(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.807 4.29a1 1 0 0 0-1.415 1.415 8.913 8.913 0 0 1 0 12.59 1 1 0 0 0 1.415 1.415 10.916 10.916 0 0 0 0-15.42Z" }),
        React.createElement("path", { d: "M18.1 7.291a1 1 0 0 0-1.42 1.415 4.662 4.662 0 0 1 0 6.588 1 1 0 0 0 1.42 1.415 6.666 6.666 0 0 0 0-9.418ZM13.82.2A12.054 12.054 0 0 0 6.266 5H5a5.008 5.008 0 0 0-5 5v4a5.008 5.008 0 0 0 5 5h1.266a12.059 12.059 0 0 0 7.554 4.8.917.917 0 0 0 .181.017 1 1 0 0 0 1-1V1.186A1 1 0 0 0 13.82.2ZM13 21.535a10.083 10.083 0 0 1-5.371-4.08A1 1 0 0 0 6.792 17H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.8a1 1 0 0 0 .837-.453A10.079 10.079 0 0 1 13 2.465Z" })));
}

function Wheelchair(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 21h-1.279L20.4 17.051A3 3 0 0 0 17.559 15H14a2 2 0 0 1-2-2h6a1 1 0 0 0 0-2h-6V8a1.026 1.026 0 0 0-.027-.134 4 4 0 1 0-1.946 0A1.026 1.026 0 0 0 10 8v5a4 4 0 0 0 3.911 3.991 6 6 0 1 1-6.769-6.929 1 1 0 0 0-.284-1.981A8 8 0 1 0 15.931 17h1.628a1 1 0 0 1 .949.684l1.544 4.632A1 1 0 0 0 21 23h2a1 1 0 0 0 0-2ZM9 4a2 2 0 1 1 2 2 2 2 0 0 1-2-2Z" })));
}

function WifiAlt(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 23a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm4.535-2.122a1 1 0 0 0 0-1.414 5 5 0 0 0-7.07 0 1 1 0 0 0 1.414 1.414 3.074 3.074 0 0 1 4.242 0 1 1 0 0 0 1.414 0zm2.829-2.828a1 1 0 0 0 0-1.414 9.01 9.01 0 0 0-12.728 0A1 1 0 0 0 7.05 18.05a7.011 7.011 0 0 1 9.9 0 1 1 0 0 0 1.414 0zM5.987 22.161a1 1 0 0 0-.826-1.148 3.809 3.809 0 0 1-3.124-2.939A3.473 3.473 0 0 1 3.86 14.48a2 2 0 0 0 .805-2.69 6 6 0 1 1 11.059-4.514 3.1 3.1 0 0 0 2.045 2.052 5.972 5.972 0 0 1 4.212 6.211 5.687 5.687 0 0 1-3.41 4.725 1 1 0 0 0 .858 1.806 7.638 7.638 0 0 0 4.547-6.376 7.96 7.96 0 0 0-5.62-8.277 1.089 1.089 0 0 1-.722-.734 8 8 0 0 0-15.489.841 7.78 7.78 0 0 0 .778 5.19 5.453 5.453 0 0 0-2.866 5.641 5.826 5.826 0 0 0 4.782 4.632 1 1 0 0 0 1.148-.826z" })));
}

function Wind(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 12a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm20.886-.893A4.99 4.99 0 1 0 12 8a1 1 0 0 0 2 0 3 3 0 1 1 3 3h-6a1 1 0 0 0 0 2h9a2 2 0 0 1 2 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 0 0-1.886.666C17.615 20.415 23.952 19.579 24 15a4 4 0 0 0-3.114-3.893ZM11 16H1a1 1 0 0 0 0 2h10a2 2 0 0 1 2 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 1 0-1.886.666C8.615 25.415 14.952 24.579 15 20a4 4 0 0 0-4-4ZM1 8h6a4 4 0 0 0 4-4c-.048-4.581-6.387-5.414-7.943-1.333a1 1 0 0 0 1.886.666C5.72 1.351 8.991 1.663 9 4a2 2 0 0 1-2 2H1a1 1 0 0 0 0 2Z" })));
}

function WomanHead(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.5 13a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm9.425 5.144A5 5 0 0 1 19 24h-4a1 1 0 0 1-1-1v-2.263A7.959 7.959 0 0 1 12 21a7.84 7.84 0 0 1-2-.27V23a1 1 0 0 1-1 1H5a5 5 0 0 1-4.925-5.856l.3-1.74a2.939 2.939 0 0 1 5.337-1.138C6.976 17.124 9.409 19 12 19c3.13 0 6.214-2.779 7.13-5.376a1.03 1.03 0 0 1 .959-.667l.432.007A1.461 1.461 0 0 0 22 11.5a1.5 1.5 0 0 0-1.23-1.474 1 1 0 0 1-.816-.879A7.977 7.977 0 0 0 12 2C6.423 2 4.892 5.628 3.662 8.544c-.224.527-.435 1.03-.662 1.483a13.354 13.354 0 0 0 10.186-5.608 1 1 0 0 1 1.628 1.162 15.089 15.089 0 0 1-4.956 4.467 1.5 1.5 0 1 1-1.725.84 15.807 15.807 0 0 1-7.257 1.1A1 1 0 0 1 .5 10.136a6.372 6.372 0 0 0 1.319-2.369C3.124 4.674 5.1 0 12 0a9.972 9.972 0 0 1 9.85 8.274A3.5 3.5 0 0 1 24 11.5a3.428 3.428 0 0 1-.854 2.257c.007.026.025.047.03.075ZM8 19.94a11.088 11.088 0 0 1-3.941-3.552.946.946 0 0 0-.783-.424h-.017a.945.945 0 0 0-.911.782l-.3 1.739A3 3 0 0 0 5 22h3Zm13.955-1.455-.628-3.613a3.384 3.384 0 0 1-.579.086A11.033 11.033 0 0 1 16 19.952V22h3a3 3 0 0 0 2.955-3.514Z" })));
}

function World(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm10 12a9.938 9.938 0 0 1-1.662 5.508l-1.192-1.193a.5.5 0 0 1-.146-.353V15a3 3 0 0 0-3-3h-3a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5A2.5 2.5 0 0 0 15 7.5v-1a.5.5 0 0 1 .5-.5h1.379a2.516 2.516 0 0 0 1.767-.732l.377-.377A9.969 9.969 0 0 1 22 12Zm-19.951.963 3.158 3.158A2.978 2.978 0 0 0 7.329 17H10a1 1 0 0 1 1 1v3.949a10.016 10.016 0 0 1-8.951-8.986ZM13 21.949V18a3 3 0 0 0-3-3H7.329a1 1 0 0 1-.708-.293l-4.458-4.458A9.978 9.978 0 0 1 17.456 3.63l-.224.224a.507.507 0 0 1-.353.146H15.5A2.5 2.5 0 0 0 13 6.5v1a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0-2.5 2.5v.5a3 3 0 0 0 3 3h3a1 1 0 0 1 1 1v.962a2.516 2.516 0 0 0 .732 1.767l1.337 1.337A9.971 9.971 0 0 1 13 21.949Z" })));
}

function Yen(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.61.208a1 1 0 0 0-1.4.182L12 12.36 2.792.39a1 1 0 0 0-1.584 1.22L10.738 14H6a1 1 0 0 0 0 2h5v2H6a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h5a1 1 0 0 0 0-2h-5v-2h5a1 1 0 0 0 0-2h-4.738l9.53-12.39A1 1 0 0 0 22.61.208z" })));
}

function ZoomIn(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" }),
        React.createElement("path", { d: "M13 9h-2V7a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" })));
}

function ZoomOut(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z" }),
        React.createElement("path", { d: "M13 9H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z" })));
}

function AddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm4 13h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z" })));
}

function AddressBookSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 9a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm11-4v14a5.006 5.006 0 0 1-5 5H8a5 5 0 0 1-4.576-3H2a1 1 0 0 1 0-2h1v-2H2a1 1 0 0 1 0-2h1v-2H2a1 1 0 0 1 0-2h1V9H2a1 1 0 0 1 0-2h1V5H2a1 1 0 0 1 0-2h1.424A5 5 0 0 1 8 0h10a5.006 5.006 0 0 1 5 5ZM10 9a3 3 0 0 0 6 0 3 3 0 0 0-6 0Zm8 9c-.211-6.608-9.791-6.606-10 0a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0Z" })));
}

function AlarmClockSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 4.5a1 1 0 0 1-2 0A2.59 2.59 0 0 0 19.215 2a1 1 0 0 1 0-2A4.6 4.6 0 0 1 24 4.5zM2 4.5A2.59 2.59 0 0 1 4.785 2a1 1 0 0 0 0-2A4.6 4.6 0 0 0 0 4.5a1 1 0 0 0 2 0zM20.319 20.176A10.98 10.98 0 0 0 13 2.051V1a1 1 0 0 0-2 0v1.051a10.98 10.98 0 0 0-7.319 18.125A3.024 3.024 0 0 0 2 23a1 1 0 0 0 2 0 1.2 1.2 0 0 1 1.11-1.229.932.932 0 0 0 .2-.062 10.924 10.924 0 0 0 13.39 0 1.033 1.033 0 0 0 .182.064A1.2 1.2 0 0 1 20 23a1 1 0 0 0 2 0 3.024 3.024 0 0 0-1.681-2.824zm-4.612-4.469a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.586l2.707 2.707a1 1 0 0 1 0 1.414z" })));
}

function AlignCenterSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM5 9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM19 19H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AlignJustifySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AlignLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM1 11h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM15 19H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AlignRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 19H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function AmbulanceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 4.018a6 6 0 0 1 5.233 3.545L22.761 11H17a1 1 0 0 1-1-1zM8.942 21a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zm11 0a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zM24 16.122A2.852 2.852 0 0 1 21 19H3a3 3 0 0 1-3-3V9a5.006 5.006 0 0 1 5-5h4.2l.66-2.642a1.794 1.794 0 0 1 3.48 0L14 4v6a3 3 0 0 0 3 3h6.537A16.113 16.113 0 0 1 24 16.122zM10 12a1 1 0 0 0-1-1H8v-1a1 1 0 0 0-2 0v1H5a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 1-1z" })));
}

function AngleDoubleLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a1.493 1.493 0 0 1-1.06-.439l-7.676-7.672a5.5 5.5 0 0 1 0-7.778L10.936.439a1.5 1.5 0 1 1 2.121 2.122l-7.672 7.671a2.5 2.5 0 0 0 0 3.536l7.672 7.671A1.5 1.5 0 0 1 12 24Z" }),
        React.createElement("path", { d: "M21.542 24a1.5 1.5 0 0 1-1.061-.439L11.4 14.475a3.505 3.505 0 0 1 0-4.95L20.481.439A1.5 1.5 0 0 1 22.6 2.561l-9.086 9.085a.5.5 0 0 0 0 .708l9.086 9.085A1.5 1.5 0 0 1 21.542 24Z" })));
}

function AngleDoubleRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.832 24a1.5 1.5 0 0 1-1.061-2.561l7.672-7.671a2.5 2.5 0 0 0 0-3.536l-7.672-7.671A1.5 1.5 0 0 1 12.893.439l7.671 7.672a5.5 5.5 0 0 1 0 7.778l-7.671 7.672a1.5 1.5 0 0 1-1.061.439Z" }),
        React.createElement("path", { d: "M2.287 24a1.5 1.5 0 0 1-1.06-2.561l9.085-9.085a.5.5 0 0 0 0-.708L1.227 2.561A1.5 1.5 0 0 1 3.348.439l9.086 9.086a3.507 3.507 0 0 1 0 4.949l-9.086 9.087A1.5 1.5 0 0 1 2.287 24Z" })));
}

function AngleDoubleSmallLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.482 19.5a1.5 1.5 0 0 1-1.06-.439l-4.586-4.586a3.505 3.505 0 0 1 0-4.95l4.586-4.586a1.5 1.5 0 0 1 2.121 2.122l-4.586 4.585a.5.5 0 0 0 0 .708l4.586 4.585a1.5 1.5 0 0 1-1.061 2.561Z" }),
        React.createElement("path", { d: "M17.482 19.5a1.5 1.5 0 0 1-1.06-.439l-6-6a1.5 1.5 0 0 1 0-2.122l6-6a1.5 1.5 0 1 1 2.121 2.122L13.6 12l4.939 4.939a1.5 1.5 0 0 1-1.057 2.561Z" })));
}

function AngleDoubleSmallRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.1 19.5a1.5 1.5 0 0 1-1.061-2.561l4.586-4.585a.5.5 0 0 0 0-.708l-4.582-4.585a1.5 1.5 0 0 1 2.121-2.122l4.586 4.586a3.505 3.505 0 0 1 0 4.95l-4.586 4.586a1.5 1.5 0 0 1-1.064.439Z" }),
        React.createElement("path", { d: "M6.1 19.5a1.5 1.5 0 0 1-1.061-2.561L9.982 12 5.043 7.061a1.5 1.5 0 0 1 2.121-2.122l6 6a1.5 1.5 0 0 1 0 2.122l-6 6A1.5 1.5 0 0 1 6.1 19.5Z" })));
}

function AngleDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1.51 6.079a1.492 1.492 0 0 1 1.06.44l7.673 7.672a2.5 2.5 0 0 0 3.536 0l7.661-7.662a1.5 1.5 0 1 1 2.121 2.121L15.9 16.312a5.505 5.505 0 0 1-7.778 0L.449 8.64A1.5 1.5 0 0 1 1.51 6.079Z" })));
}

function AngleLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.921 1.505a1.5 1.5 0 0 1-.44 1.06l-7.672 7.672a2.5 2.5 0 0 0 0 3.536l7.662 7.662a1.5 1.5 0 0 1-2.121 2.121L7.688 15.9a5.506 5.506 0 0 1 0-7.779L15.36.444a1.5 1.5 0 0 1 2.561 1.061Z" })));
}

function AngleRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.079 22.5a1.5 1.5 0 0 1 .44-1.06l7.672-7.672a2.5 2.5 0 0 0 0-3.536L6.529 2.565A1.5 1.5 0 0 1 8.65.444l7.662 7.661a5.506 5.506 0 0 1 0 7.779L8.64 23.556A1.5 1.5 0 0 1 6.079 22.5Z" })));
}

function AngleSmallDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.061 7.854a1.5 1.5 0 0 0-2.122 0l-4.586 4.585a.5.5 0 0 1-.707 0L7.061 7.854a1.5 1.5 0 0 0-2.122 2.121l4.586 4.586a3.5 3.5 0 0 0 4.95 0l4.586-4.586a1.5 1.5 0 0 0 0-2.121Z" })));
}

function AngleSmallLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.957 12.354a.5.5 0 0 1 0-.708l4.586-4.585a1.5 1.5 0 0 0-2.121-2.122L8.836 9.525a3.505 3.505 0 0 0 0 4.95l4.586 4.586a1.5 1.5 0 0 0 2.121-2.122Z" })));
}

function AngleSmallRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m15.75 9.525-4.586-4.586a1.5 1.5 0 0 0-2.121 2.122l4.586 4.585a.5.5 0 0 1 0 .708l-4.586 4.585a1.5 1.5 0 0 0 2.121 2.122l4.586-4.586a3.505 3.505 0 0 0 0-4.95Z" })));
}

function AngleSmallUpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m19.061 13.439-4.586-4.585a3.583 3.583 0 0 0-4.95 0l-4.586 4.585a1.5 1.5 0 0 0 2.122 2.122l4.586-4.586a.5.5 0 0 1 .707 0l4.585 4.586a1.5 1.5 0 0 0 2.122-2.122Z" })));
}

function AngleUpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.5 18a1.5 1.5 0 0 1-1.061-.44l-7.671-7.671a2.5 2.5 0 0 0-3.536 0L2.57 17.551A1.5 1.5 0 0 1 .449 15.43l7.662-7.662a5.505 5.505 0 0 1 7.778 0l7.672 7.672A1.5 1.5 0 0 1 22.5 18Z" })));
}

function AppleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.923 7.284a1.549 1.549 0 0 0-1.949.152 8.172 8.172 0 0 1-4 1.559A1 1 0 0 1 13 8V6.965a5.978 5.978 0 0 0 5.991-5.648A1.173 1.173 0 0 0 17.683.009c-1.855.077-4.583 1.52-5.151 3.7A8.714 8.714 0 0 0 10.711.271a1 1 0 0 0-1.428 1.4A7.542 7.542 0 0 1 10.949 6H8.5A8.771 8.771 0 0 0 0 15c-.161 5.6 5.644 10.773 10.75 8.385a2.4 2.4 0 0 1 2.605.019A4.444 4.444 0 0 0 15.5 24c8.713-.078 11.564-12.126 4.423-16.716Z" })));
}

function AppsAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M85.333 0h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 234.667 0 196.462 0 149.333v-64C0 38.205 38.205 0 85.333 0zM85.333 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 512 0 473.795 0 426.667v-64c0-47.129 38.205-85.334 85.333-85.334zM362.667 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64C512 473.795 473.795 512 426.667 512h-64c-47.128 0-85.333-38.205-85.333-85.333v-64c-.001-47.129 38.204-85.334 85.333-85.334zM298.667 149.333h64v64c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-64h64c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333h-64v-64c0-11.782-9.551-21.333-21.333-21.333-11.782 0-21.333 9.551-21.333 21.333v64h-64c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333z" })));
}

function AppsDeleteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M85.333 0h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 234.667 0 196.462 0 149.333v-64C0 38.205 38.205 0 85.333 0zM85.333 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 512 0 473.795 0 426.667v-64c0-47.129 38.205-85.334 85.333-85.334zM362.667 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64C512 473.795 473.795 512 426.667 512h-64c-47.128 0-85.333-38.205-85.333-85.333v-64c-.001-47.129 38.204-85.334 85.333-85.334zM298.667 149.333h170.667c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333H298.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333z" })));
}

function AppsSortSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.029 512.029",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M85.342.029h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64c-47.128 0-85.333-38.205-85.333-85.333v-64C.009 38.234 38.214.029 85.342.029zM85.342 277.362h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64c-47.128 0-85.333-38.205-85.333-85.333v-64c0-47.128 38.205-85.333 85.333-85.333zM475.593 408.05l-48.917 48.853V55.154l48.917 48.853c8.336 8.33 21.846 8.325 30.176-.011s8.325-21.846-.011-30.176l-55.189-55.104c-24.987-24.956-65.466-24.956-90.453 0L304.927 73.82c-8.336 8.33-8.341 21.84-.011 30.176 8.33 8.336 21.84 8.341 30.176.011l48.917-48.853v401.749l-48.917-48.853c-8.342-8.33-21.857-8.32-30.187.021-8.33 8.342-8.32 21.857.021 30.187l55.189 55.104c25.016 24.886 65.437 24.886 90.453 0l55.189-55.104c8.342-8.33 8.351-21.845.021-30.187-8.329-8.341-21.844-8.351-30.185-.021z" })));
}

function AppsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M85.333 0h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 234.667 0 196.462 0 149.333v-64C0 38.205 38.205 0 85.333 0zM362.667 0h64C473.795 0 512 38.205 512 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64c-47.128 0-85.333-38.205-85.333-85.333v-64C277.333 38.205 315.538 0 362.667 0zM85.333 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 512 0 473.795 0 426.667v-64c0-47.129 38.205-85.334 85.333-85.334zM362.667 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64C512 473.795 473.795 512 426.667 512h-64c-47.128 0-85.333-38.205-85.333-85.333v-64c-.001-47.129 38.204-85.334 85.333-85.334z" })));
}

function ArchiveSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M362.667 0H149.333C90.423 0 42.667 47.756 42.667 106.667v128h426.667v-128C469.333 47.756 421.577 0 362.667 0zm-85.334 149.333h-42.667c-11.782 0-21.333-9.551-21.333-21.333s9.551-21.333 21.333-21.333h42.667c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333zM42.667 405.333C42.667 464.244 90.423 512 149.333 512h213.333c58.91 0 106.667-47.756 106.667-106.667v-128H42.667v128zm192-42.666h42.667c11.782 0 21.333 9.551 21.333 21.333 0 11.782-9.551 21.333-21.333 21.333h-42.667c-11.782 0-21.333-9.551-21.333-21.333-.001-11.782 9.551-21.333 21.333-21.333z" })));
}

function ArrowDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.427 16.935a1.5 1.5 0 0 0-2.121 0l-2.781 2.779L13.5 1.5A1.5 1.5 0 0 0 12 0a1.5 1.5 0 0 0-1.5 1.5l.023 18.2-2.763-2.765a1.5 1.5 0 0 0-2.121 2.121l3.919 3.919a3.5 3.5 0 0 0 4.949 0l3.92-3.919a1.5 1.5 0 0 0 0-2.121Z" })));
}

function ArrowFromBottomSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 22h-5V2.823l4.3 4.3a1 1 0 0 0 1.414-1.414L13.768.763a2.5 2.5 0 0 0-3.536 0l-4.95 4.95A1 1 0 0 0 6.7 7.127l4.3-4.3V22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Z" })));
}

function ArrowLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M4.943 5.606 1.024 9.525a3.585 3.585 0 0 0 0 4.95l3.919 3.919a1.5 1.5 0 1 0 2.121-2.121l-2.779-2.781 18.25-.023a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5L4.3 10.492l2.764-2.765a1.5 1.5 0 0 0-2.121-2.121Z" })));
}

function ArrowRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m19.122 18.394 3.919-3.919a3.585 3.585 0 0 0 0-4.95l-3.919-3.919A1.5 1.5 0 0 0 17 7.727l2.78 2.781-18.25.023a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5l18.231-.023L17 16.273a1.5 1.5 0 0 0 2.121 2.121Z" })));
}

function ArrowSmallDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.061 12.354a1.5 1.5 0 0 0-2.122 0L13.5 14.793V6a1.5 1.5 0 0 0-3 0v8.793l-2.439-2.439a1.5 1.5 0 0 0-2.122 2.121l3.586 3.586a3.5 3.5 0 0 0 4.95 0l3.586-3.586a1.5 1.5 0 0 0 0-2.121Z" })));
}

function ArrowSmallLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 10.5h-8.793l2.439-2.439a1.5 1.5 0 0 0-2.121-2.122L6.939 9.525a3.505 3.505 0 0 0 0 4.95l3.586 3.586a1.5 1.5 0 0 0 2.121-2.122L10.207 13.5H19a1.5 1.5 0 0 0 0-3Z" })));
}

function ArrowSmallRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m17.061 9.525-3.586-3.586a1.5 1.5 0 0 0-2.121 2.122l2.439 2.439H5a1.5 1.5 0 0 0 0 3h8.793l-2.439 2.439a1.5 1.5 0 0 0 2.121 2.122l3.586-3.586a3.505 3.505 0 0 0 0-4.95Z" })));
}

function ArrowSmallUpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m18.061 9.525-3.586-3.586a3.585 3.585 0 0 0-4.95 0L5.939 9.525a1.5 1.5 0 0 0 2.122 2.121L10.5 9.207V19a1.5 1.5 0 0 0 3 0V9.207l2.439 2.439a1.5 1.5 0 0 0 2.122-2.121Z" })));
}

function ArrowUpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.427 4.911 14.508.992a3.583 3.583 0 0 0-4.95 0L5.639 4.911A1.5 1.5 0 0 0 7.76 7.032l2.78-2.78.023 18.25a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5L13.54 4.266l2.766 2.766a1.5 1.5 0 1 0 2.121-2.121Z" })));
}

function AsterikSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 14.119 18.017 12 21.5 9.881a3.181 3.181 0 1 0-3.362-5.4L15 6.49V3a3 3 0 0 0-6 0v3.588L5.862 4.481a3.181 3.181 0 0 0-3.362 5.4L5.983 12 2.5 14.119a3.181 3.181 0 0 0 3.362 5.4L9 17.481V21a3 3 0 0 0 6 0v-3.58l3.138 2.1a3.181 3.181 0 0 0 3.362-5.4z" })));
}

function AtSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0A12.013 12.013 0 0 0 0 12c-.126 9.573 11.159 15.429 18.9 9.817a1 1 0 1 0-1.152-1.634C11.3 24.856 1.9 19.978 2 12c.549-13.266 19.453-13.263 20 0v2a2 2 0 0 1-4 0v-2c-.252-7.929-11.749-7.928-12 0a6.017 6.017 0 0 0 10.52 3.933A4 4 0 0 0 24 14v-2A12.013 12.013 0 0 0 12 0Zm0 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Z" })));
}

function BackpackSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 24H8a3 3 0 0 1-2.886-2.225 6.993 6.993 0 0 1 13.772 0A3 3 0 0 1 16 24ZM3 21v-7.576A5 5 0 0 0 0 18v1a5 5 0 0 0 3.924 4.876A4.953 4.953 0 0 1 3 21Zm18-7.576V21a4.953 4.953 0 0 1-.924 2.876A5 5 0 0 0 24 19v-1a5 5 0 0 0-3-4.576ZM19 11v6.356a8.978 8.978 0 0 0-14 0V11a6.992 6.992 0 0 1 3-5.736V4a4 4 0 0 1 8 0v1.264A6.992 6.992 0 0 1 19 11Zm-9-6.7a6.927 6.927 0 0 1 4 0V4a2 2 0 0 0-4 0Zm5 5.7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z" })));
}

function BadgeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm0 2a9.938 9.938 0 0 1-6-2.019V21.5a2.5 2.5 0 0 0 4.062 1.952l1.626-1.3a.5.5 0 0 1 .624 0l1.626 1.3A2.5 2.5 0 0 0 18 21.5v-5.519A9.94 9.94 0 0 1 12 18z" })));
}

function BalloonsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7A7 7 0 0 0 0 7c0 3.971 2.257 8.485 5.39 9.685A2.822 2.822 0 0 0 5 17.87c0 1.571 1.489 2.267 2.576 2.776.6.28 1.424.665 1.424.963a2.291 2.291 0 0 1-.428.851 1 1 0 0 0 1.684 1.08A3.745 3.745 0 0 0 11 21.609c0-1.571-1.489-2.267-2.576-2.775-.6-.281-1.424-.666-1.433-.865a5.379 5.379 0 0 1 .568-1.016C11.227 16.475 14 11.4 14 7Zm-4.824 3.47A5.723 5.723 0 0 0 10 8a1 1 0 0 1 2 0 7.662 7.662 0 0 1-1.129 3.53 1 1 0 1 1-1.7-1.06ZM19.5 18.589c-.682-.362-1.386-.737-1.484-1.162-.046-.193-.025-.628.515-1.473C21.7 15.5 24 11.025 24 7a5.8 5.8 0 0 0-6-6 6.151 6.151 0 0 0-3.5 1.036A8.942 8.942 0 0 1 16 7a15.088 15.088 0 0 1-1.784 6.812 5.928 5.928 0 0 0 2.2 1.84 3.381 3.381 0 0 0-.352 2.229c.306 1.31 1.519 1.955 2.494 2.474.616.328 1.313.7 1.419 1.068a1.627 1.627 0 0 1-.315 1.078 1 1 0 1 0 1.732 1 3.329 3.329 0 0 0 .506-2.627 4.166 4.166 0 0 0-2.4-2.285Zm-.325-8.119A5.723 5.723 0 0 0 20 8a1 1 0 0 1 2 0 7.662 7.662 0 0 1-1.129 3.53 1 1 0 1 1-1.7-1.06Z" })));
}

function BanSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256c.153 141.322 114.678 255.847 256 256zm213.333-256c.1 117.726-95.256 213.243-212.982 213.343a213.162 213.162 0 0 1-135.263-48.266l299.989-299.989A212.238 212.238 0 0 1 469.333 256zM256 42.667a212.249 212.249 0 0 1 134.912 48.256L90.923 390.912c-74.604-91.07-61.256-225.375 29.814-299.98A213.161 213.161 0 0 1 256 42.667z" })));
}

function BandAidSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M5 19a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5zM7 5h10v14H7zm4 9a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2-4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm0 4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm-4-4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10-5v14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5z" })));
}

function BankSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M.291 8.552a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5L9.613.582a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566A2.713 2.713 0 0 1 21.292 10H2.708A2.713 2.713 0 0 1 .291 8.552zM23 22a2 2 0 0 0-2-2v-8h-2v8h-3v-8h-2v8h-4v-8H8v8H5v-8H3v8a2 2 0 0 0-2 2 1 1 0 0 0 0 2h22a1 1 0 0 0 0-2z" })));
}

function BarberShopSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.828 16.462a53.471 53.471 0 0 1-3.685-5.776C9.665 7.709 11 4.189 11 1a1 1 0 0 0-2 0 18.683 18.683 0 0 1-1.995 7.431A18.694 18.694 0 0 1 5 1a1 1 0 0 0-2 0c0 3.174 1.342 6.7 2.868 9.685a50.636 50.636 0 0 1-3.695 5.777A3.986 3.986 0 1 0 7 22.618a3.985 3.985 0 1 0 4.828-6.156ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm.883-5.895a50.253 50.253 0 0 0 2.122-3.342c.784 1.35 1.534 2.5 2.117 3.341A3.984 3.984 0 0 0 7 17.382a3.989 3.989 0 0 0-2.117-1.277ZM10 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8-16v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2h-2a3 3 0 0 0-2.816 2H23a1 1 0 0 1 0 2Z" })));
}

function BaseballSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 12a11.94 11.94 0 0 1-2.9 7.805 9.508 9.508 0 0 1-3.383-4.213l1.658-.663a1 1 0 1 0-.742-1.858l-1.466.587A9.421 9.421 0 0 1 17 12a9.421 9.421 0 0 1 .163-1.658l1.466.587a1 1 0 1 0 .742-1.858l-1.658-.663A9.508 9.508 0 0 1 21.1 4.2 11.94 11.94 0 0 1 24 12zm-8.143 4.334-1.486.595a1 1 0 1 1-.742-1.858l1.644-.657A11.545 11.545 0 0 1 15 12a11.545 11.545 0 0 1 .273-2.414l-1.644-.657a1 1 0 1 1 .742-1.858l1.486.6a11.466 11.466 0 0 1 3.808-4.889 11.97 11.97 0 0 0-15.313-.021 11.544 11.544 0 0 1 3.8 4.9l1.481-.593a1 1 0 1 1 .742 1.858l-1.643.657A11.6 11.6 0 0 1 9 12a11.6 11.6 0 0 1-.272 2.414l1.643.657a1 1 0 0 1-.742 1.858l-1.481-.593a11.544 11.544 0 0 1-3.8 4.9 11.97 11.97 0 0 0 15.313-.016 11.466 11.466 0 0 1-3.804-4.886zm-9.566-.74-1.662-.665a1 1 0 1 1 .742-1.858l1.467.587A9.516 9.516 0 0 0 7 12a9.516 9.516 0 0 0-.162-1.658l-1.467.587a1 1 0 1 1-.742-1.858l1.662-.665a9.547 9.547 0 0 0-3.372-4.227 11.937 11.937 0 0 0 0 15.642 9.547 9.547 0 0 0 3.372-4.227z" })));
}

function BasketballSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M4.259 2.845A11.943 11.943 0 0 1 11 .051v1.3a11.938 11.938 0 0 0 2.28 6.689 1.09 1.09 0 0 1-.137 1.4l-.367.367a1.1 1.1 0 0 1-1.552 0zM17.59 7.824a1.1 1.1 0 0 0 .186 1.711A9.939 9.939 0 0 0 22.706 11h1.243a11.943 11.943 0 0 0-2.794-6.741zM13 .051v1.272a9.9 9.9 0 0 0 1.465 4.9 1.1 1.1 0 0 0 1.71.186l3.566-3.566A11.941 11.941 0 0 0 13 .051zm1.557 10.806-.367.367a1.1 1.1 0 0 0 0 1.552l6.965 6.965A11.941 11.941 0 0 0 23.949 13h-1.272a11.966 11.966 0 0 1-6.717-2.28 1.092 1.092 0 0 0-1.403.137zm-5.114 2.286.367-.367a1.1 1.1 0 0 0 0-1.552L2.845 4.259A11.941 11.941 0 0 0 .051 11h1.272a11.964 11.964 0 0 1 6.717 2.28 1.092 1.092 0 0 0 1.403-.137zm1.781 1.047-.367.367a1.092 1.092 0 0 0-.137 1.4A11.929 11.929 0 0 1 13 22.648v1.3a11.941 11.941 0 0 0 6.741-2.794l-6.965-6.964a1.1 1.1 0 0 0-1.552 0zM11 22.677a9.9 9.9 0 0 0-1.465-4.9 1.1 1.1 0 0 0-1.71-.185l-3.566 3.563A11.941 11.941 0 0 0 11 23.949zM1.294 13H.051a11.943 11.943 0 0 0 2.794 6.741l3.565-3.565a1.1 1.1 0 0 0-.186-1.711A9.939 9.939 0 0 0 1.294 13z" })));
}

function BedSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 9.5A2.5 2.5 0 1 1 6.5 7 2.5 2.5 0 0 1 9 9.5ZM24 12v-2a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v2ZM2 14V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h20v2a1 1 0 0 0 2 0v-7Z" })));
}

function BeerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M4 6H2a4 4 0 0 1 3.765-3.993 4.509 4.509 0 0 1 7.32-.211.593.593 0 0 0 .54.223 4.093 4.093 0 0 1 2.359.5A3.9 3.9 0 0 1 18 6h-6a3 3 0 0 0-3 3v4a1 1 0 0 1-2 0V9a3 3 0 0 0-3-3Zm19 7.5v3a3.5 3.5 0 0 1-3.5 3.5h-.6a5.009 5.009 0 0 1-4.9 4H6a5.006 5.006 0 0 1-5-5V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a3 3 0 0 0 6 0V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h.5a3.5 3.5 0 0 1 3.5 3.5Zm-2 0a1.5 1.5 0 0 0-1.5-1.5H19v6h.5a1.5 1.5 0 0 0 1.5-1.5Z" })));
}

function BellRingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m2.31 17.192 5.5 5.5a4.22 4.22 0 0 1-5.5-5.5zM7.327 1.98a1 1 0 0 0-.4-1.96A10.689 10.689 0 0 0 .213 4.145 1 1 0 0 0 1.82 5.334 8.641 8.641 0 0 1 7.327 1.98zM23.2 16.023a1 1 0 0 0-1.191.762 8.638 8.638 0 0 1-3.317 5.407 1 1 0 0 0 1.18 1.616 10.7 10.7 0 0 0 4.09-6.593 1 1 0 0 0-.762-1.192zM20.167 5.247l1.54-1.54a1 1 0 1 0-1.414-1.414l-1.542 1.542a8.456 8.456 0 0 0-9.822-.5l-5.5 3.4a5.026 5.026 0 0 0-.912 7.829l6.959 6.959a5.026 5.026 0 0 0 7.839-.926l3.6-5.876a8.543 8.543 0 0 0-.748-9.474z" })));
}

function BellSchoolSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 7a3 3 0 0 0 0 6 2.955 2.955 0 0 0 .628-.069 12.192 12.192 0 0 1-9.47 9.053.948.948 0 0 1-.791-.213A1.016 1.016 0 0 1 11 20.99v-1.061a10 10 0 0 0 7.905-5.4 4.978 4.978 0 0 1 0-9.052A10 10 0 1 0 9 19.949v1.041a3.013 3.013 0 0 0 1.085 2.316 2.95 2.95 0 0 0 2.431.646A14.27 14.27 0 0 0 24 10a3 3 0 0 0-3-3zM10 8a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" })));
}

function BellSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.424 21a4.99 4.99 0 0 0 9.152 0ZM22.392 12.549l-1.736-5.723A9.321 9.321 0 0 0 2.58 7.28l-1.348 5.537A5 5 0 0 0 6.09 19h11.517a5 5 0 0 0 4.785-6.451Z" })));
}

function BikeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.783 12.079a73.63 73.63 0 0 0-.555-1.873A23.043 23.043 0 0 1 18 5a1 1 0 0 1 2 0 1 1 0 0 0 2 0 3 3 0 0 0-6 0 10.641 10.641 0 0 0 .319 2.263L11.519 11 5.971 7H9a1 1 0 0 0 0-2H5.971a1.969 1.969 0 0 0-1.162 3.559l5.071 3.712-1.438 1.119a4.954 4.954 0 1 0 1.15 1.638l7.289-5.669c.141.476.727 2.384.856 2.823a4.994 4.994 0 1 0 2.046-.1Z" })));
}

function BilliardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm2.857 4.515-3 5a1 1 0 1 1-1.714-1.03L12.234 11H10a1 1 0 0 1 0-2h4a1 1 0 0 1 .857 1.515zM12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 20a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" })));
}

function BoldSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 17a7 7 0 0 0-4.046-6.337A6.986 6.986 0 0 0 12 0H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10a7.008 7.008 0 0 0 7-7ZM7 4h5a3 3 0 0 1 0 6H7Zm8 16H7v-6h8a3 3 0 0 1 0 6Z" })));
}

function BookAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.2 2.163a5 5 0 0 0-4.157-1.069l-1.764.432A4 4 0 0 0 13 5.461v15.467a6.909 6.909 0 0 1-2 0V5.461a3.981 3.981 0 0 0-3.226-3.923L5.9 1.082A5 5 0 0 0 0 6v10.793a5 5 0 0 0 4.105 4.919l6.286 1.143a9 9 0 0 0 3.218 0l6.291-1.143a5 5 0 0 0 4.1-4.919V6a4.983 4.983 0 0 0-1.8-3.837z" })));
}

function BookSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 0H8v16h14V5a5 5 0 0 0-5-5ZM4.395 16.061A3.013 3.013 0 0 1 5 16h1V.1A5 5 0 0 0 2 5v12.025a4.952 4.952 0 0 1 2.395-.964ZM22 18H5a3 3 0 0 0 0 6h12a5 5 0 0 0 5-5Z" })));
}

function BookmarkSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2.849 23.55a2.954 2.954 0 0 0 3.266-.644L12 17.053l5.885 5.853a2.956 2.956 0 0 0 2.1.881 3.05 3.05 0 0 0 1.17-.237A2.953 2.953 0 0 0 23 20.779V5a5.006 5.006 0 0 0-5-5H6a5.006 5.006 0 0 0-5 5v15.779a2.953 2.953 0 0 0 1.849 2.771Z" })));
}

function BowlingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2.446 5.825A7.168 7.168 0 0 1 2 4a4 4 0 0 1 8 0 7.168 7.168 0 0 1-.446 1.825A11.618 11.618 0 0 0 9 8H3a11.618 11.618 0 0 0-.554-2.175ZM9.511 10H2.489c-.217.5-.48 1.012-.753 1.537A11.781 11.781 0 0 0 0 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 4.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 12 17a11.781 11.781 0 0 0-1.736-5.463A24.85 24.85 0 0 1 9.511 10ZM24 16a8.006 8.006 0 0 1-11.529 7.183 5.979 5.979 0 0 0 .357-.642A13.05 13.05 0 0 0 14 17a13.58 13.58 0 0 0-1.961-6.385c-.209-.4-.407-.795-.585-1.181A7.981 7.981 0 0 1 24 16Zm-6-1a1 1 0 1 0-1 1 1 1 0 0 0 1-1Zm2-3a1 1 0 1 0-1 1 1 1 0 0 0 1-1Zm2 3a1 1 0 1 0-1 1 1 1 0 0 0 1-1Z" })));
}

function BoxAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 6V0h4v6a2 2 0 0 1-4 0zm6-1h8a5.006 5.006 0 0 0-5-5h-3zM8 0H5a5.006 5.006 0 0 0-5 5h8zm16 7v12a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V7h8.142a3.981 3.981 0 0 0 7.716 0zm-4 12a1 1 0 0 0-1-1h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1z" })));
}

function BoxSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5 5 0 0 0-5 5 3 3 0 0 0 3 3h18a2.97 2.97 0 0 0 3-2.777A5.005 5.005 0 0 0 19 0ZM22 10H2a1 1 0 0 0-1 1v8a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5v-8a1 1 0 0 0-1-1Zm-7 5H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" })));
}

function BreadSliceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.934 5.179A5.122 5.122 0 0 0 18.848 1H6.242C2.85 1 .482 2.6.066 5.179a4.989 4.989 0 0 0 1.543 4.475 1.119 1.119 0 0 1 .391.792V18a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-7.554a1.115 1.115 0 0 1 .388-.789 4.99 4.99 0 0 0 1.546-4.478ZM8 18a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm4 4a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z" })));
}

function BriefcaseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4h-1.1A5.009 5.009 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v3h24V9a5.006 5.006 0 0 0-5-5ZM8.184 4A3 3 0 0 1 11 2h2a3 3 0 0 1 2.816 2ZM13 15a1 1 0 0 1-2 0v-1H0v5a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-5H13Z" })));
}

function BroomSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 500.696 500.696",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m121.232 158.288-44.245 12.971a107.438 107.438 0 0 0-66.411 56.213 106.095 106.095 0 0 0-2.923 85.739c.149.384.341.747.491 1.131l36.693-5.995a204.793 204.793 0 0 0 91.733-51.925c8.424-8.247 21.939-8.104 30.187.32 8.247 8.424 8.104 21.939-.32 30.187a248.514 248.514 0 0 1-112.96 63.168l-25.003 4.139a272.556 272.556 0 0 0 52.907 62.507l43.797-16.256 29.867-14.933a203.613 203.613 0 0 0 76.608-66.944l11.072-16.235c6.366-9.914 19.563-12.791 29.478-6.426 9.914 6.366 12.791 19.563 6.426 29.478-.211.329-.432.652-.661.969l-11.051 16.235a246.085 246.085 0 0 1-92.736 81.067l-33.067 16.491-17.984 6.656a282.152 282.152 0 0 0 142.805 38.4h19.712a21.566 21.566 0 0 0 12.331-3.883 352.134 352.134 0 0 0 109.291-119.168L174.906 134.053a270.07 270.07 0 0 1-53.674 24.235zM494.373 21.755c-8.433-8.403-22.074-8.403-30.507 0L362.234 123.387l-6.827-6.677c-37.156-36.291-95.028-40.603-137.152-10.219-1.963 1.408-3.904 2.581-5.888 3.947l213.909 210.005a303.48 303.48 0 0 0 14.933-56.875 107.286 107.286 0 0 0-30.997-93.312l-17.067-16.725 101.271-101.27c8.391-8.444 8.372-22.085-.043-30.506z" })));
}

function BrowserSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 9v9a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9zm14 10H6a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm4-4H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm6-8V6a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v1zM10 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM7 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM4 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" })));
}

function BrushSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 10H0V5a5.006 5.006 0 0 1 5-5h5v3a1 1 0 0 0 2 0V0h2v5a1 1 0 0 0 2 0V0h2v7a1 1 0 0 0 2 0V.1A5.009 5.009 0 0 1 24 5zM.3 12A7.011 7.011 0 0 0 7 17h2v4a3 3 0 0 0 6 0v-4h2a7.011 7.011 0 0 0 6.7-5z" })));
}

function BugSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 19v4a1 1 0 0 0 2 0v-4h2.93a8.248 8.248 0 0 0 14.14 0H22v4a1 1 0 0 0 2 0v-4a2 2 0 0 0-2-2h-2.053a8.2 8.2 0 0 0 .325-2.273A8.37 8.37 0 0 0 20.2 13.7l-.175-.7H23a1 1 0 0 0 0-2h-3.478l-1.009-4H22a2 2 0 0 0 2-2V1a1 1 0 0 0-2 0v4h-4c-.018 0-.032.009-.05.01a6.411 6.411 0 0 0-11.89 0C6.039 5.011 6.021 5 6 5H2V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h3.485l-1.013 4H1a1 1 0 0 0 0 2h2.965l-.145.573-.02.127a8.37 8.37 0 0 0-.07 1.032A8.2 8.2 0 0 0 4.053 17H2a2 2 0 0 0-2 2Z" })));
}

function BuildingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h9V5a5 5 0 0 0-5-5zM5 19H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H4a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm5 12H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm9-2h-3v19h3a5.006 5.006 0 0 0 5-5v-9a5.006 5.006 0 0 0-5-5zm1 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" })));
}

function BulbSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M5.868 15.583a8.938 8.938 0 0 1-2.793-7.761 9 9 0 1 1 14.857 7.941A5.741 5.741 0 0 0 16.338 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816V18H7.563a6.839 6.839 0 0 0-1.695-2.417zM8 20v.31A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31V20z" })));
}

function ButterflySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.044 1.02C24.2.761 25.71 9.091 21.5 12.932A6.708 6.708 0 0 1 16.8 15a9.816 9.816 0 0 1-3.8-.7V5.38c2.018-2.246 4.512-4.36 7.044-4.36ZM12 4a2 2 0 0 0 0-4 2 2 0 0 0 0 4Zm4.791 13A11.685 11.685 0 0 1 12 16c-2.1 1.11-7.2 1.783-10.213-1.025a6.606 6.606 0 0 0-.454 5.136 4.021 4.021 0 0 0 2.3 2.573 3.911 3.911 0 0 0 3.355-.132A16.366 16.366 0 0 0 11 19.622V22a1 1 0 0 0 2 0v-2.378a16.366 16.366 0 0 0 4.018 2.93 3.911 3.911 0 0 0 3.355.132 4.021 4.021 0 0 0 2.3-2.573 6.606 6.606 0 0 0-.454-5.136A8.571 8.571 0 0 1 16.791 17Zm-9.585-2A9.842 9.842 0 0 0 11 14.3V5.373C7.52 1.116.239-2.567.006 7.284a8.183 8.183 0 0 0 2.5 5.649A6.819 6.819 0 0 0 7.206 15Z" })));
}

function CakeBirthdaySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM3.75 15c1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1S22 14.306 22 14a5.006 5.006 0 0 0-5-5h-4V6.816A3 3 0 0 0 15 4 6.683 6.683 0 0 0 13.332.59a1.856 1.856 0 0 0-2.663 0A6.676 6.676 0 0 0 9 4a3 3 0 0 0 2 2.816V9H7a5.006 5.006 0 0 0-5 5c0 .306.661 1 1.75 1ZM3 20h18a1 1 0 0 0 1-1v-2.375a4.359 4.359 0 0 1-1.75.375 4.194 4.194 0 0 1-2.75-1 4.309 4.309 0 0 1-5.5.015A4.309 4.309 0 0 1 6.5 16a4.194 4.194 0 0 1-2.75 1A4.359 4.359 0 0 1 2 16.625V19a1 1 0 0 0 1 1Z" })));
}

function CakeWeddingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 23.01a.991.991 0 0 1-1 .99H1a1 1 0 1 1 0-1.99h1v-2.385A4.359 4.359 0 0 0 3.75 20a4.194 4.194 0 0 0 2.75-1 4.309 4.309 0 0 0 5.5.015A4.309 4.309 0 0 0 17.5 19a4.194 4.194 0 0 0 2.75 1 4.359 4.359 0 0 0 1.75-.375v2.385h1a1 1 0 0 1 1 1ZM9 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm6 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM3.75 18c1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1S22 17.306 22 17a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5c0 .306.661 1 1.75 1ZM17 10a6.956 6.956 0 0 1 2 .295V10a2.991 2.991 0 0 0-2.179-2.872l-.66-3.328a1 1 0 0 0-.981-.8h-.36a1 1 0 0 0-.981.8L13.2 7h-2.95L11 4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1l.756 3.025A2.99 2.99 0 0 0 5 10v.3a6.956 6.956 0 0 1 2-.3Z" })));
}

function CalculatorSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 7a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm6-2v14a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5zM7 18a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm0-4a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm4 4a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm0-4a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm8 4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zm-5-3a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm5-1a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm0-7a3 3 0 0 0-3-3H8a3 3 0 0 0 0 6h8a3 3 0 0 0 3-3z" })));
}

function CalendarSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-9H0Zm17-4.5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm-5 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm-5 0A1.5 1.5 0 1 1 5.5 16 1.5 1.5 0 0 1 7 14.5ZM19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5a5.006 5.006 0 0 0-5 5v1h24V7a5.006 5.006 0 0 0-5-5Z" })));
}

function CallHistorySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.657 14.858a3.1 3.1 0 0 0-4.282.007l-1.906 1.606a12.786 12.786 0 0 1-6.932-6.945l1.6-1.9a3.1 3.1 0 0 0 .006-4.281S7.292.942 7.261.911A3.081 3.081 0 0 0 2.934.865l-1.15 1c-7.72 8.208 12.2 28.138 20.4 20.3l.912-1.05a3.1 3.1 0 0 0 0-4.376 924.096 924.096 0 0 0-2.439-1.881Zm1.908-2.283c4.991-7.346-3.8-16.123-11.138-11.136a1 1 0 1 0 1.145 1.64c5.472-3.758 12.11 2.883 8.353 8.352a1 1 0 1 0 1.64 1.144Zm-3.858-1.865a1 1 0 0 0 0-1.414L17 7.589V5a1 1 0 0 0-2 0v3a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414 0Z" })));
}

function CallIncomingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 7V3a1 1 0 0 1 2 0v2.613C17.63 4.981 21.7.887 22.293.3a1 1 0 0 1 1.414 1.414C23.115 2.3 19.064 6.373 18.439 7H21a1 1 0 0 1 0 2h-4a2 2 0 0 1-2-2Zm5.655 7.855a3.1 3.1 0 0 0-4.28.006l-1.906 1.606a12.784 12.784 0 0 1-6.932-6.943l1.6-1.9a3.109 3.109 0 0 0 .006-4.282S7.291.939 7.26.908A3.082 3.082 0 0 0 2.934.862l-1.15 1c-7.719 8.21 12.2 28.138 20.4 20.3l.912-1.05a3.1 3.1 0 0 0 0-4.377c-.033-.027-2.441-1.879-2.441-1.879Z" })));
}

function CallMissedSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M64.004 133.44V44.565C63.504 20.486 82.592.548 106.671 0h85.333c12.306 0 22.283 9.976 22.283 22.283s-9.976 22.283-22.283 22.283h-54.635l125.995 131.797a4.549 4.549 0 0 0 3.349 1.451 4.457 4.457 0 0 0 3.328-1.429L416.943 23.232c20.523-20.693 49.579 11.563 30.165 31.467l-146.88 153.088a46.12 46.12 0 0 1-33.493 14.464 46.186 46.186 0 0 1-33.536-14.528L106.671 75.371v58.069c0 11.782-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333zm414.827 209.067c-95.765-99.797-349.867-99.819-445.632 0A119.204 119.204 0 0 0 .004 426.432l1.728 25.045C1.1 484.183 27.034 511.242 59.737 512c.939 0 53.824-7.168 53.824-7.168 31.523-1.541 56.336-27.469 56.491-59.029l3.371-40.064a219.73 219.73 0 0 1 82.581-16.555 228.465 228.465 0 0 1 82.667 16.768l3.328 39.851c.155 31.561 24.967 57.488 56.491 59.029 0 0 52.885 7.168 53.824 7.168 32.19-.524 58.01-26.771 58.005-58.965l1.685-28.096a118.396 118.396 0 0 0-33.195-82.368l.022-.064z" })));
}

function CallOutgoingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 2v4a1 1 0 0 1-2 0V3.439L16.7 8.71a1 1 0 1 1-1.4-1.418L20.61 2H18a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2Zm-3.345 12.856a3.1 3.1 0 0 0-4.28.006l-1.906 1.606a12.781 12.781 0 0 1-6.932-6.944l1.6-1.9a3.1 3.1 0 0 0 .006-4.28S7.291.939 7.261.907A3.085 3.085 0 0 0 2.933.861l-1.149 1c-7.72 8.209 12.2 28.138 20.4 20.3l.912-1.049a3.1 3.1 0 0 0 0-4.378l-2.441-1.878Z" })));
}

function CameraSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m17.721 3-1.413-1.832A3.023 3.023 0 0 0 13.932 0h-3.864a3.023 3.023 0 0 0-2.376 1.168L6.279 3Z" }),
        React.createElement("circle", { cx: 12, cy: 14, r: 4 }),
        React.createElement("path", { d: "M19 5H5a5.006 5.006 0 0 0-5 5v9a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-9a5.006 5.006 0 0 0-5-5Zm-7 15a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Z" })));
}

function CampingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12.887 16.573 16.451 24H7.188l3.933-7.438a.971.971 0 0 1 1.766.011Zm10.635.295L16.535 2.9a5 5 0 0 0-9.057-.026L.47 16.9A4.995 4.995 0 0 0 4.929 24l4.4-8.322a2.97 2.97 0 0 1 5.366.047L18.669 24H19a5 5 0 0 0 4.522-7.132Z" })));
}

function CarSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M.327 12c.029-.093.042-.19.075-.282L3.1 4.291A5.012 5.012 0 0 1 7.8 1h8.4a5.011 5.011 0 0 1 4.7 3.292l2.7 7.426c.033.092.046.189.075.282ZM20 14v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2H0v2a5 5 0 0 0 3 4.576V22a2 2 0 0 0 4 0v-1h10v1a2 2 0 0 0 4 0v-1.424A5 5 0 0 0 24 16v-2Z" })));
}

function CaretDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.414 9h11.172a1 1 0 0 1 .707 1.707l-5.586 5.586a1 1 0 0 1-1.414 0l-5.586-5.586A1 1 0 0 1 6.414 9Z" })));
}

function CaretLeftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.293 18.586 7.707 13a1 1 0 0 1 0-1.414L13.293 6A1 1 0 0 1 15 6.707v11.172a1 1 0 0 1-1.707.707Z" })));
}

function CaretRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 17.879V6.707A1 1 0 0 1 10.707 6l5.586 5.586a1 1 0 0 1 0 1.414l-5.586 5.586A1 1 0 0 1 9 17.879Z" })));
}

function CaretUpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.414 15.586h11.172a1 1 0 0 0 .707-1.707l-5.586-5.586a1 1 0 0 0-1.414 0l-5.586 5.586a1 1 0 0 0 .707 1.707Z" })));
}

function CarrotSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 5h-2.586l2.293-2.293a1 1 0 0 0-1.414-1.414L19 3.586V1a1 1 0 0 0-2 0v4.456a10.139 10.139 0 0 0-2.854-2.126 3.754 3.754 0 0 0-4.387 1.015l2.948 2.948a1 1 0 0 1-1.414 1.414L8.521 5.936C7.384 7.605 5.86 10.2 4.334 12.92l2.373 2.373a1 1 0 0 1-1.414 1.414l-1.971-1.971A434.779 434.779 0 0 0 .3 20.319 2.511 2.511 0 0 0 3.681 23.7c2.825-1.5 6.762-3.633 10.055-5.55l-2.443-2.443a1 1 0 0 1 1.414-1.414l2.805 2.807a27.061 27.061 0 0 0 4.11-2.821 3.766 3.766 0 0 0 1.049-4.422A10.167 10.167 0 0 0 18.544 7H23a1 1 0 0 0 0-2Z" })));
}

function ChartConnectedSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.983a3.994 3.994 0 0 0-2.607-3.735l-.038-.091a10.07 10.07 0 0 0-5.294-5.419l-.329-.144a3.981 3.981 0 0 0-7.462 0l-.418.188a10.19 10.19 0 0 0-5.235 5.463 3.98 3.98 0 0 0-.03 7.468l.128.3a10.1 10.1 0 0 0 5.162 5.228l.393.176a3.982 3.982 0 0 0 7.46 0l.367-.163a10.193 10.193 0 0 0 5.309-5.534A4 4 0 0 0 24 11.983Zm-8.107 7.131a3.991 3.991 0 0 0-7.787 0 8.093 8.093 0 0 1-3.231-3.234A3.991 3.991 0 0 0 4.9 8.1a8.19 8.19 0 0 1 3.206-3.2 3.991 3.991 0 0 0 7.785 0A8.225 8.225 0 0 1 19.1 8.093a3.991 3.991 0 0 0 .015 7.785 8.207 8.207 0 0 1-3.222 3.236Z" })));
}

function ChartHistogramSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 22H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "M6 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM10 10v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0ZM15 13v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM20 9v10a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0ZM6 9a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586A1 1 0 0 0 22.293.293l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.171a3 3 0 0 0-4.242 0L5.293 7.293A1 1 0 0 0 6 9Z" })));
}

function ChartNetworkSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M448.383 286.442a63.278 63.278 0 0 0-44.065 17.876l-25.107-12.554c20.494-67.214-17.38-138.315-84.594-158.809a127.244 127.244 0 0 0-75.38.361l-14.717-26.571c23.622-25.866 21.803-65.984-4.063-89.605-25.866-23.622-65.983-21.803-89.605 4.063s-21.803 65.983 4.063 89.605a63.424 63.424 0 0 0 42.953 16.591c3.05-.087 6.09-.392 9.097-.912l14.589 26.358c-55.259 41.007-67.66 118.636-27.928 174.818l-61.793 59.375c-32.782-14.681-71.258-.008-85.939 32.774s-.008 71.258 32.774 85.939c32.782 14.681 71.258.008 85.939-32.774a65.04 65.04 0 0 0-1.856-56.973l60.563-58.209c56.591 40.988 135.691 28.375 176.727-28.182l25.447 12.723a61.803 61.803 0 0 0-.721 7.719c0 35.134 28.482 63.617 63.617 63.617S512 385.193 512 350.059s-28.482-63.617-63.617-63.617z" })));
}

function ChartPieAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M399.211 256H298.667C275.103 256 256 236.897 256 213.333V112.512a63.999 63.999 0 0 0-24.875-50.837 61.248 61.248 0 0 0-52.928-11.392C52.767 81.419-23.674 208.342 7.463 333.773c21.937 88.372 93.145 155.995 182.532 173.342 122.11 23.373 241.257-52.547 271.659-173.099a61.354 61.354 0 0 0-11.371-53.013A65.173 65.173 0 0 0 399.211 256z" }),
        React.createElement("path", { d: "M504.555 158.848a211.704 211.704 0 0 0-21.568-51.669A215.258 215.258 0 0 0 353.75 7.936c-3.585-.967-11.606-1.536-11.606-1.536-2.866.001-15.21 0-24.981 7.915-14.361 11.301-16.619 24.149-16.832 25.152a42.813 42.813 0 0 0-1.152 9.6v100.267c0 35.346 28.654 64 64 64h100.672a41.836 41.836 0 0 0 33.835-17.067 43.475 43.475 0 0 0 8.533-27.328 45.05 45.05 0 0 0-1.664-10.091z" })));
}

function ChartPieSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12.3 10.178a4.989 4.989 0 0 0 .363.671l10.862-2.161A11.962 11.962 0 0 0 8.216.621Z" }),
        React.createElement("path", { d: "M12.631 13.742a7.008 7.008 0 0 1-2.169-2.773L6.377 1.406a11.991 11.991 0 1 0 14.512 18.626Z" }),
        React.createElement("path", { d: "m14.365 12.549 7.741 5.9A11.916 11.916 0 0 0 24 12a12.055 12.055 0 0 0-.081-1.351Z" })));
}

function ChartPyramidSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M.587 18.24A4 4 0 0 0 4.179 24H19.82a4 4 0 0 0 3.593-5.76L22.806 17H1.194ZM19.377 10H4.623l-2.449 5h19.652l-2.449-5zM15.593 2.275a4 4 0 0 0-7.185 0L5.6 8h12.8Z" })));
}

function ChartSetTheorySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M255.302 207.587a173.766 173.766 0 0 1 150.277-29.028c.361-4.247.764-8.281.764-12.507.01-83.653-67.796-151.474-151.448-151.484-83.653-.01-151.474 67.796-151.485 151.448v.036c0 4.247.404 8.494.786 12.741a174.4 174.4 0 0 1 151.106 28.794zM239.334 295.158a129.57 129.57 0 0 0 31.852-.127 131.635 131.635 0 0 0-15.947-27.902 132.28 132.28 0 0 0-15.905 28.029zM448.953 223.411a151.266 151.266 0 0 0-26.577-15.315 173.507 173.507 0 0 1-99.59 116.514 168.638 168.638 0 0 1 1.401 20.789 171.532 171.532 0 0 1-52.046 123.415c67.766 48.825 162.282 33.471 211.108-34.296 48.826-67.765 33.471-162.281-34.296-211.107zM422.376 208.097zM186.46 345.399c.027-6.816.474-13.624 1.338-20.385A173.146 173.146 0 0 1 87.401 208.903C11.617 244.075-21.305 334.021 13.867 409.804c35.171 75.783 125.118 108.705 200.901 73.534a151.297 151.297 0 0 0 24.184-14.077 171.531 171.531 0 0 1-52.492-123.862zM281.4 336.693a173.184 173.184 0 0 1-52.152.149 115.883 115.883 0 0 0-.319 8.494 129.186 129.186 0 0 0 26.395 78.568 129.154 129.154 0 0 0 26.395-78.568 120.514 120.514 0 0 0-.319-8.643zM198.075 283.31a172.668 172.668 0 0 1 26.352-45.952 130.548 130.548 0 0 0-90.332-21.659 131.023 131.023 0 0 0 63.98 67.611zM286.199 237.358a171.79 171.79 0 0 1 26.203 45.591 131.27 131.27 0 0 0 63.088-67.271 129.909 129.909 0 0 0-89.291 21.68z" })));
}

function ChartTreeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 18.184V18a5.006 5.006 0 0 0-5-5h-4v-1.09a6 6 0 1 0-2 0V13H7a5.006 5.006 0 0 0-5 5v.184a3 3 0 1 0 2 0V18a3 3 0 0 1 3-3h4v3.184a3 3 0 1 0 2 0V15h4a3 3 0 0 1 3 3v.184a3 3 0 1 0 2 0Z" })));
}

function ChatArrowDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.293 12.7-1.086 1.086-3.585-3.586a3.073 3.073 0 0 0-4.242 0l-.173.173a1.023 1.023 0 0 1-1.414 0L6.72 5.294a1 1 0 1 0-1.414 1.414l5.072 5.073a3.072 3.072 0 0 0 4.242 0l.173-.173a1.023 1.023 0 0 1 1.414 0l3.586 3.592-1.086 1.086a1 1 0 0 0 .707 1.707H22.5a1.5 1.5 0 0 0 1.5-1.5V13.4a1 1 0 0 0-1.707-.7Z" }),
        React.createElement("path", { d: "M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" })));
}

function ChatArrowGrowSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.5 3.976h-3.086a1 1 0 0 0-.707 1.707l1.086 1.086-3.586 3.585a1.024 1.024 0 0 1-1.415 0l-.17-.171a3.071 3.071 0 0 0-4.243 0l-5.1 5.1A1 1 0 1 0 6.7 16.7l5.1-5.1a1.023 1.023 0 0 1 1.415 0l.17.171a3.073 3.073 0 0 0 4.243 0l3.586-3.586L22.3 9.271a1 1 0 0 0 1.7-.709V5.476a1.5 1.5 0 0 0-1.5-1.5Z" }),
        React.createElement("path", { d: "M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" })));
}

function CheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 465.822 465.822",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m5.988 289.981 88.875 88.875c24.992 24.984 65.504 24.984 90.496 0l274.475-274.475c8.185-8.475 7.95-21.98-.525-30.165-8.267-7.985-21.374-7.985-29.641 0L155.194 348.691c-8.331 8.328-21.835 8.328-30.165 0l-88.875-88.875c-8.475-8.185-21.98-7.95-30.165.525-7.985 8.267-7.985 21.373-.001 29.64z" })));
}

function CheckboxSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h298.667c58.88-.07 106.596-47.786 106.666-106.667V106.667C511.93 47.786 464.214.071 405.333 0zm21.334 172.352L229.248 369.771c-16.659 16.666-43.674 16.671-60.34.012l-.012-.012-83.563-83.541c-8.348-8.348-8.348-21.882 0-30.229s21.882-8.348 30.229 0l83.541 83.541 197.44-197.419c8.348-8.318 21.858-8.294 30.176.053 8.319 8.348 8.295 21.858-.052 30.176z" })));
}

function CheeseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.507A5.951 5.951 0 0 0 23.8 10H2.673a1.977 1.977 0 0 0-1.789 1.13C-.647 14.839-.531 23.92 4.833 24h2.93a1.5 1.5 0 0 0 1.412-1.01 3.014 3.014 0 0 1 5.65 0A1.5 1.5 0 0 0 16.237 24H18.8a5.048 5.048 0 0 0 5.2-5ZM7 17a2 2 0 0 1 0-4 2 2 0 0 1 0 4Zm11 2a2 2 0 0 1 0-4 2 2 0 0 1 0 4Zm4.853-11H2.673a4.031 4.031 0 0 0-.53.039A20.209 20.209 0 0 1 8.043.96a4.961 4.961 0 0 1 5.708-.112l4.2 3.132 3.638 2.72A5.968 5.968 0 0 1 22.853 8Z" })));
}

function ChessPieceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 5.026a3 3 0 0 1-6 0A11.2 11.2 0 0 1 10.739.691a1.5 1.5 0 0 1 2.522 0A11.2 11.2 0 0 1 15 5.026zM5.8 18h12.4a3.906 3.906 0 0 0-.421-.5c-1.923-1.859-2.708-4.015-2.766-7.5H16a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h.989c-.058 3.487-.843 5.643-2.766 7.5a4.073 4.073 0 0 0-.423.5zM20 22h-1v-1.629c0-.125-.026-.247-.038-.371H5.038c-.012.124-.038.246-.038.371V22H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z" })));
}

function ChildHeadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.5a3.5 3.5 0 0 0-2.149-3.226 10 10 0 0 0-19.7 0 3.5 3.5 0 0 0 1.119 6.718 10.607 10.607 0 0 0 2.071 2.955 8.908 8.908 0 0 0-2.272 4.928A1 1 0 0 0 4.06 24h15.859a1 1 0 0 0 .992-1.124 8.9 8.9 0 0 0-2.261-4.918 10.622 10.622 0 0 0 2.082-2.966A3.5 3.5 0 0 0 24 11.5Zm-3.752 1.473a.993.993 0 0 0-1.117.651C18.215 16.222 15.13 19 12 19s-6.215-2.78-7.131-5.378a.994.994 0 0 0-1.117-.651A1.606 1.606 0 0 1 3.5 13a1.5 1.5 0 0 1-.27-2.972 1 1 0 0 0 .816-.878 7.966 7.966 0 0 1 4.665-6.44 3.534 3.534 0 1 0 6.578 0 7.966 7.966 0 0 1 4.665 6.44 1 1 0 0 0 .816.878A1.5 1.5 0 0 1 20.5 13a1.606 1.606 0 0 1-.252-.027Z" }),
        React.createElement("circle", { cx: 9.5, cy: 11.5, r: 1.5 }),
        React.createElement("circle", { cx: 14.5, cy: 11.5, r: 1.5 })));
}

function CircleSmallSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 4.5a7.5 7.5 0 1 0 7.5 7.5A7.508 7.508 0 0 0 12 4.5Zm0 12a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1-4.5 4.5Z" })));
}

function CircleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9Z" })));
}

function ClipSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 511.201 511.201",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M496.108 203.908c-8.331-8.328-21.835-8.328-30.165 0L233.58 437.274c-41.656 41.661-109.197 41.666-150.859.011s-41.666-109.197-.011-150.859L307.756 60.463c25.193-24.792 65.715-24.467 90.507.726 24.507 24.904 24.512 64.86.011 89.77L173.228 376.922c-8.433 8.078-21.733 8.078-30.165 0-8.328-8.331-8.328-21.835 0-30.165l200.363-201.28c8.185-8.475 7.951-21.98-.524-30.165-8.267-7.985-21.374-7.985-29.641 0l-200.363 201.28c-24.996 24.991-24.999 65.514-.008 90.51l.008.008c25.331 24.172 65.186 24.172 90.517 0l225.024-225.984c41.122-42.183 40.261-109.715-1.922-150.837-41.43-40.389-107.503-40.384-148.926.009L52.545 256.26c-58.321 58.321-58.321 152.879 0 211.2s152.879 58.321 211.2 0l232.363-233.301c8.353-8.309 8.39-21.816.081-30.17l-.081-.081z" })));
}

function ClockSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm1 11.879a1 1 0 0 1-.469.848l-3.84 2.4a1 1 0 1 1-1.062-1.7L11 11.325V7a1 1 0 0 1 2 0Z" })));
}

function CloudCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.356 7.36a1.085 1.085 0 0 1-.721-.732 8 8 0 0 0-15.49.841 7.652 7.652 0 0 0 .8 5.18A5.446 5.446 0 0 0 .057 18.3 5.844 5.844 0 0 0 5.683 23h9.1c5.073 0 8.852-3.028 9.19-7.362a7.962 7.962 0 0 0-5.617-8.278zm.872 7.347-5.415 5.414a3 3 0 0 1-4.242 0L6.184 16.7A1 1 0 1 1 7.6 15.3l3.384 3.414a1.025 1.025 0 0 0 1.411 0l5.414-5.414a1 1 0 0 1 1.415 1.414z" })));
}

function CloudDisabledSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.707 22.293a1 1 0 1 1-1.414 1.414l-22-22A1 1 0 0 1 1.707.293l2.87 2.87a7.871 7.871 0 0 1 4.237-2.078 7.985 7.985 0 0 1 8.82 5.541 1.088 1.088 0 0 0 .722.735 7.96 7.96 0 0 1 5.62 8.277 7.379 7.379 0 0 1-2.2 4.729zM3.441 7.663a.811.811 0 0 0-1.379.464A7.286 7.286 0 0 0 2 9.039a7.422 7.422 0 0 0 .941 3.609A5.443 5.443 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23h9.1a11.87 11.87 0 0 0 1.952-.158.839.839 0 0 0 .462-1.42z" })));
}

function CloudDownloadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.357 7.361a1.087 1.087 0 0 1-.722-.733 8 8 0 0 0-15.49.842 7.648 7.648 0 0 0 .8 5.179A5.448 5.448 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23h9.1c5.073 0 8.851-3.027 9.189-7.362a7.96 7.96 0 0 0-5.615-8.277zm.308 11.386-1.586 1.414a2.9 2.9 0 0 1-2.064.839 3.013 3.013 0 0 1-2.136-.882l-1.544-1.374a1 1 0 0 1 1.33-1.494L14 18.444V11a1 1 0 0 1 2 0v7.445l1.335-1.192a1 1 0 0 1 1.33 1.494z" })));
}

function CloudShareSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 22H5.683a5.844 5.844 0 0 1-5.626-4.7 5.446 5.446 0 0 1 2.885-5.651 7.652 7.652 0 0 1-.8-5.18 8 8 0 0 1 15.49-.841 1.085 1.085 0 0 0 .721.732 8.024 8.024 0 0 1 2.98 1.674C21.223 8.026 21.115 8 21 8a5.009 5.009 0 0 0-4.92 4.105l-.847.424A4.953 4.953 0 0 0 13 12a5 5 0 0 0 0 10zm8-6a3 3 0 1 0-3-3 2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481A2.9 2.9 0 0 0 18 21a3.015 3.015 0 1 0 .923-2.156l-2.96-1.481A2.9 2.9 0 0 0 16 17a2.9 2.9 0 0 0-.037-.363l2.96-1.481A2.986 2.986 0 0 0 21 16z" })));
}

function CloudUploadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.385 7.373a1.128 1.128 0 0 1-.751-.748 8 8 0 1 0-15.1 5.237 1.046 1.046 0 0 1-.311 1.238 5.5 5.5 0 0 0-2.166 5.2A5.622 5.622 0 0 0 5.683 23H14v-7.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l1.586-1.586a3 3 0 0 1 4.242 0l1.586 1.586a1 1 0 1 1-1.414 1.414L16 15.414v7.573a8.181 8.181 0 0 0 7.971-7.309 7.964 7.964 0 0 0-5.586-8.305Z" })));
}

function CloudSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.792 7.212A8 8 0 0 0 2 9a7.915 7.915 0 0 0 .9 3.671A5.49 5.49 0 0 0 5.5 23H16a8 8 0 0 0 1.792-15.788Z" })));
}

function CloudsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9.4 24a3.8 3.8 0 0 1-.832-.146 3.5 3.5 0 0 1-.451-6.589 6.38 6.38 0 0 1 .057-2.732 6 6 0 0 1 11.367-.856 1 1 0 0 0 .766.471 5.012 5.012 0 0 1 3.557 6 4.946 4.946 0 0 1-3.7 3.7A5.322 5.322 0 0 1 19.1 24ZM6 16.23a8.262 8.262 0 0 1 .23-2.169A8 8 0 0 1 21.106 12.3 7.043 7.043 0 0 1 24 14.081a7.954 7.954 0 0 0-5.644-7.721 1.087 1.087 0 0 1-.722-.733 8 8 0 0 0-15.49.842 7.648 7.648 0 0 0 .8 5.179A5.448 5.448 0 0 0 .056 17.3a5.8 5.8 0 0 0 4.1 4.472A5.5 5.5 0 0 1 6 16.23Z" })));
}

function CocktailSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24.009 4H-.009A4.012 4.012 0 0 1 4 0h16a4.012 4.012 0 0 1 4.009 4Zm-.555 2H.534A13.814 13.814 0 0 0 11 11.965V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4V11.965A13.8 13.8 0 0 0 23.454 6Z" })));
}

function CoffeeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 4a2 2 0 0 1-2 2H3a2 2 0 0 1 0-4h1.184A3 3 0 0 1 7 0h10a3 3 0 0 1 2.816 2H21a2 2 0 0 1 2 2ZM10 16c.105 3.954 3.895 3.953 4 0-.1-3.954-3.895-3.953-4 0Zm-1.919-1c.892-5.287 6.948-5.284 7.838 0h5.088l.735-5.876A1 1 0 0 0 20.75 8H3.25a1 1 0 0 0-.992 1.124L2.992 15Zm7.838 2c-.892 5.287-6.947 5.284-7.838 0H3.242l.328 2.62A5.008 5.008 0 0 0 8.531 24h6.938a5.008 5.008 0 0 0 4.961-4.38l.327-2.62Z" })));
}

function CommentAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2.9l4.451 3.763a1 1 0 0 0 1.292 0L17.1 20H20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4ZM7 5h5a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10 10H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z" })));
}

function CommentCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12.836.028A12 12 0 0 0 .029 12.855C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5v-6.66A12.209 12.209 0 0 0 12.836.028ZM18.7 9.712l-6.793 6.707a2 2 0 0 1-2.823 0L5.3 12.715a1 1 0 0 1 1.4-1.43l3.793 3.707 6.806-6.7a1 1 0 0 1 1.4 1.424Z" })));
}

function CommentHeartSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 10.7c0 1.5-2.259 3.732-4 5.062-1.741-1.33-4-3.56-4-5.062-.076-2.006 2.913-2.4 3-.246V11a1 1 0 0 0 2 0v-.546c.087-2.154 3.076-1.76 3 .246Zm8 1.64V19a5.007 5.007 0 0 1-5 5h-5.916C6.082 24 .47 19.208.029 12.855A12 12 0 0 1 12.836.028 12.209 12.209 0 0 1 24 12.34Zm-6-1.64a3.567 3.567 0 0 0-6-2.71 3.567 3.567 0 0 0-6 2.71c0 3.256 4.874 6.736 5.43 7.122a1 1 0 0 0 1.14 0c.556-.386 5.43-3.866 5.43-7.122Z" })));
}

function CommentInfoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12.836.028A12 12 0 0 0 .029 12.855C.47 19.208 6.082 24 13.083 24H19a5.006 5.006 0 0 0 5-5v-6.66A12.209 12.209 0 0 0 12.836.028ZM12 5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Zm2 13a1 1 0 0 1-2 0v-6h-1a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2Z" })));
}

function CommentUserSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 169.515c17.944 0 32.491-14.547 32.491-32.491S273.944 104.533 256 104.533s-32.491 14.547-32.491 32.491 14.547 32.491 32.491 32.491z" }),
        React.createElement("path", { d: "M426.667.016H85.333C37.894.391-.284 39.104 0 86.544V346.17c-.284 47.443 37.891 86.162 85.333 86.549h62.357l79.957 68.267c15.838 14.474 40.039 14.686 56.128.491l82.027-68.779h60.864c47.442-.387 85.617-39.106 85.333-86.549V86.544c.285-47.44-37.893-86.153-85.332-86.528zM256 64.912c98.453 2.603 98.432 148.843 0 151.467-98.453-2.625-98.432-148.801 0-151.467zm90.645 302.208c-11.416 2.913-23.032-3.981-25.945-15.397l-.039-.155c-10.919-35.717-48.726-55.82-84.443-44.901a67.628 67.628 0 0 0-44.901 44.901c-2.981 11.405-14.643 18.234-26.048 15.253-11.405-2.981-18.234-14.643-15.253-26.048 16.496-58.539 77.324-92.622 135.863-76.126a110.123 110.123 0 0 1 76.126 76.126c2.97 11.508-3.882 23.261-15.36 26.347z" })));
}

function CommentSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.675 2.758A11.936 11.936 0 0 0 10.474.1 12 12 0 0 0 12.018 24H19a5.006 5.006 0 0 0 5-5v-7.754a12.044 12.044 0 0 0-4.325-8.488ZM8 7h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm8 10H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z" })));
}

function CommentsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8.7 18H3c-1.493 0-3-1.134-3-3.666v-5.04A9.418 9.418 0 0 1 8.349.023a9 9 0 0 1 9.628 9.628A9.419 9.419 0 0 1 8.7 18ZM20 9.08h-.012c0 .237 0 .474-.012.712-.386 5.408-5.329 9.986-10.892 10.189v.015A8 8 0 0 0 16 24h5a3 3 0 0 0 3-3v-5a8 8 0 0 0-4-6.92Z" })));
}

function CompressAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.293 2.091 5.4 3.985 1.707.293A1 1 0 0 0 .293 1.707L3.985 5.4 2.091 7.293A1 1 0 0 0 2.8 9h4.764A1.436 1.436 0 0 0 9 7.564V2.8a1 1 0 0 0-1.707-.709ZM20.015 18.6l1.894-1.894A1 1 0 0 0 21.2 15h-4.764A1.436 1.436 0 0 0 15 16.436V21.2a1 1 0 0 0 1.707.708l1.893-1.893 3.692 3.692a1 1 0 0 0 1.414-1.414ZM16.436 9H21.2a1 1 0 0 0 .708-1.707L20.015 5.4l3.692-3.692A1 1 0 0 0 22.293.293L18.6 3.985l-1.893-1.894A1 1 0 0 0 15 2.8v4.764A1.436 1.436 0 0 0 16.436 9ZM7.564 15H2.8a1 1 0 0 0-.708 1.707L3.985 18.6.293 22.293a1 1 0 1 0 1.414 1.414L5.4 20.015l1.894 1.894A1 1 0 0 0 9 21.2v-4.764A1.436 1.436 0 0 0 7.564 15Z" })));
}

function CompressSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 0a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3H1a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5V1a1 1 0 0 0-1-1ZM23 16h-2a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2ZM21 8h2a1 1 0 0 0 0-2h-2a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5ZM3 16H1a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5Z" })));
}

function ComputerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5 19h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.009 5.009 0 0 0 4.9-4H.1A5.009 5.009 0 0 0 5 19ZM19 1H5a5.006 5.006 0 0 0-5 5v7h24V6a5.006 5.006 0 0 0-5-5Z" })));
}

function ConfettiSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 5, cy: 13, r: 1 }),
        React.createElement("circle", { cx: 1, cy: 9, r: 1 }),
        React.createElement("circle", { cx: 5, cy: 5, r: 1 }),
        React.createElement("circle", { cx: 1, cy: 1, r: 1 }),
        React.createElement("circle", { cx: 23, cy: 13, r: 1 }),
        React.createElement("circle", { cx: 19, cy: 9, r: 1 }),
        React.createElement("circle", { cx: 23, cy: 5, r: 1 }),
        React.createElement("circle", { cx: 19, cy: 1, r: 1 }),
        React.createElement("circle", { cx: 14, cy: 23, r: 1 }),
        React.createElement("circle", { cx: 10, cy: 19, r: 1 }),
        React.createElement("circle", { cx: 14, cy: 15, r: 1 }),
        React.createElement("circle", { cx: 10, cy: 11, r: 1 }),
        React.createElement("path", { d: "M15 3a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM7 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM23 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2Z" })));
}

function CookieSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("circle", { cx: 394.667, cy: 32, r: 32 }),
        React.createElement("circle", { cx: 458.667, cy: 138.667, r: 32 }),
        React.createElement("path", { d: "M510.784 231.552c-.975-10.173-9.027-18.225-19.2-19.2-101.655-9.794-182.111-90.258-191.893-191.915-.975-10.173-9.027-18.225-19.2-19.2C272.405.448 264.256 0 256 0 114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256c0-8.256-.448-16.405-1.216-24.448zM309.333 341.333c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zM202.667 234.667c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm32 74.666c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32c17.673 0 32 14.327 32 32z" })));
}

function CopyAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 4a1 1 0 0 0 1 1h3.966a2.981 2.981 0 0 0-.811-1.728L14.871.913A3.011 3.011 0 0 0 13 .029zm-2 0V0H7a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V7h-4a3 3 0 0 1-3-3zm6 20H8a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3V8a1 1 0 0 1 2 0v11a5.006 5.006 0 0 1-5 5z" })));
}

function CopySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 20H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h10a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5zm9-1V6a1 1 0 0 0-2 0v13a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h13a5.006 5.006 0 0 0 5-5z" })));
}

function CopyrightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12ZM7.05 7.05a7.009 7.009 0 0 1 9.9 0 1 1 0 0 1-1.414 1.414 5 5 0 1 0 0 7.072 1 1 0 0 1 1.414 1.414 7 7 0 0 1-9.9-9.9Z" })));
}

function CowSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.63 3.845A2.024 2.024 0 0 0 21.988 3h-3.525c.508-.848 1.076-2.9-.463-3a1 1 0 0 0-1 1 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 1 1 0 0 0-1-1c-1.54.105-.97 2.151-.463 3H2.013A2.007 2.007 0 0 0 .106 5.615 6.6 6.6 0 0 0 1.594 8c.525-.509 1.687-1.6 3.106-2.772a1 1 0 0 1 1.272 1.544c-.518.426-1 .846-1.434 1.228H6a5.006 5.006 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a2.984 2.984 0 0 0-.184-1.034 1.5 1.5 0 0 1-1.781-1.781A2.984 2.984 0 0 0 6 10H3.221L6 21.135A3 3 0 0 0 9 24h6a3 3 0 0 0 3-2.865L20.78 10H18a2.984 2.984 0 0 0-1.034.184 1.5 1.5 0 0 1-1.781 1.781A2.984 2.984 0 0 0 15 13v4a1 1 0 0 1-2 0v-4a5.006 5.006 0 0 1 5-5h1.463c-.43-.382-.916-.8-1.434-1.228A1 1 0 0 1 19.3 5.228 54.897 54.897 0 0 1 22.407 8 6.615 6.615 0 0 0 23.9 5.615a1.937 1.937 0 0 0-.27-1.77ZM15 20a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z" })));
}

function CreamSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24H5a5.006 5.006 0 0 1-5-5v-2a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1-5 5zm3-12v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2zm-3.039-6A12.664 12.664 0 0 0 17.339.406a.994.994 0 0 0-1.692.15 3.938 3.938 0 0 1-3.685 2.457H10A4.506 4.506 0 0 0 5.412 6z" })));
}

function CreditCardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3H5a5.006 5.006 0 0 0-5 5h24a5.006 5.006 0 0 0-5-5ZM0 16a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-6H0Zm7-.5A1.5 1.5 0 1 1 5.5 14 1.5 1.5 0 0 1 7 15.5" })));
}

function CroissantSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.94 6.573a2.849 2.849 0 0 1-2.516 2.284s-1.051.165-1.51.284A7.5 7.5 0 0 0 20 8.146V4.011a6.052 6.052 0 0 0-.217-1.578 11.8 11.8 0 0 1 2.795 1.138 2.765 2.765 0 0 1 1.362 3.002Zm-9.793 7.556a3 3 0 0 0 .6-3.308l-3.756-7.214A4.351 4.351 0 0 0 4.16 2.06c-.342.292-.684.6-1.018.912-.355.334-.717.712-1.077 1.124a4.323 4.323 0 0 0-.957 3.826 4.453 4.453 0 0 0 2.539 3.1l7.2 3.717a2.9 2.9 0 0 0 1.212.261 2.936 2.936 0 0 0 2.088-.871ZM16.473.862a3.966 3.966 0 0 0-3.391-.753 16.852 16.852 0 0 0-1.814.543 6.4 6.4 0 0 1 1.524 2.083l3.78 7.271a4.963 4.963 0 0 1 .174.492l.01-.01A5.525 5.525 0 0 0 18 7V4.011A3.993 3.993 0 0 0 16.473.862Zm-9.9 23.077a2.849 2.849 0 0 0 2.283-2.516s.165-1.051.284-1.51a7.489 7.489 0 0 1-.994.087H4.01a6.058 6.058 0 0 1-1.578-.217 11.779 11.779 0 0 0 1.138 2.8 2.766 2.766 0 0 0 3.003 1.356ZM4.01 18H7a5.525 5.525 0 0 0 3.488-1.244l.01-.009a5.123 5.123 0 0 1-.491-.175l-7.271-3.78a6.4 6.4 0 0 1-2.085-1.525 16.622 16.622 0 0 0-.542 1.814 3.959 3.959 0 0 0 .753 3.391A3.991 3.991 0 0 0 4.01 18Z" })));
}

function CrossCircleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256C511.847 114.678 397.322.153 256 0zm85.333 311.189c8.669 7.979 9.229 21.475 1.25 30.144-7.979 8.669-21.475 9.229-30.144 1.25-.434-.399-.85-.816-1.25-1.25L256 286.165l-55.168 55.168c-8.475 8.185-21.98 7.95-30.165-.525-7.984-8.267-7.984-21.373 0-29.64L225.835 256l-55.168-55.168c-8.185-8.475-7.95-21.98.525-30.165 8.267-7.984 21.373-7.984 29.64 0L256 225.835l55.189-55.168c7.979-8.669 21.475-9.229 30.144-1.25 8.669 7.979 9.229 21.475 1.25 30.144-.399.434-.816.85-1.25 1.25L286.165 256l55.168 55.189z" })));
}

function CrossSmallSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 6a1 1 0 0 0 0 1.414L10.586 12 6 16.586A1 1 0 0 0 6 18a1 1 0 0 0 1.414 0L12 13.414 16.586 18A1 1 0 0 0 18 18a1 1 0 0 0 0-1.414L13.414 12 18 7.414A1 1 0 0 0 18 6Z" })));
}

function CrossSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 511.991 511.991",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M286.161 255.867 505.745 36.283c8.185-8.474 7.951-21.98-.523-30.165-8.267-7.985-21.375-7.985-29.642 0L255.995 225.702 36.411 6.118c-8.475-8.185-21.98-7.95-30.165.524-7.985 8.267-7.985 21.374 0 29.641L225.83 255.867 6.246 475.451c-8.328 8.331-8.328 21.835 0 30.165 8.331 8.328 21.835 8.328 30.165 0l219.584-219.584 219.584 219.584c8.331 8.328 21.835 8.328 30.165 0 8.328-8.331 8.328-21.835 0-30.165L286.161 255.867z" })));
}

function CrownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.766 4.566a1.994 1.994 0 0 0-2.18.434L18 7.586 13.414 3a2 2 0 0 0-2.828 0L6 7.586 3.414 5A2 2 0 0 0 0 6.414V17a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6.414a2 2 0 0 0-1.234-1.848Z" })));
}

function CubeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.762 11.587a5.5 5.5 0 0 1-1.762.636v11.651a4.922 4.922 0 0 0 1.5-.557l6.027-3.479a5.016 5.016 0 0 0 2.5-4.331v-6.96a4.959 4.959 0 0 0-.265-1.57ZM10.242 9.857a3.531 3.531 0 0 0 3.521 0l8-4.61a4.983 4.983 0 0 0-1.238-1.027L14.5.737a5.015 5.015 0 0 0-5 0l-6.027 3.48a4.974 4.974 0 0 0-1.2.983ZM11 12.223a5.493 5.493 0 0 1-1.763-.636l-7.98-4.664a4.956 4.956 0 0 0-.284 1.624v6.96a5.016 5.016 0 0 0 2.5 4.331L9.5 23.317a4.922 4.922 0 0 0 1.5.557Z" })));
}

function CupcakeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 2a2 2 0 0 1-4 0 2 2 0 0 1 4 0Zm5.848 16.636A4.984 4.984 0 0 1 16 18.575a5 5 0 0 1-4 0 5 5 0 0 1-4 0 4.993 4.993 0 0 1-3.851.061 5.305 5.305 0 0 1-1.632.357l.157.882A4.993 4.993 0 0 0 7.6 24h8.8a4.991 4.991 0 0 0 4.922-4.125l.157-.882a5.274 5.274 0 0 1-1.631-.357Zm3.676-7.224A11.888 11.888 0 0 0 15.2 4.383a4.012 4.012 0 0 1-6.393 0 11.891 11.891 0 0 0-8.33 7.03A9.12 9.12 0 0 0 0 14.462 2.406 2.406 0 0 0 2.385 17c.454 0 1.563-.308 1.685-.723A2.982 2.982 0 0 0 8 16.22a2.99 2.99 0 0 0 4 0 2.989 2.989 0 0 0 4 0 2.982 2.982 0 0 0 3.93.057c.122.415 1.232.723 1.685.723A2.408 2.408 0 0 0 24 14.462a9.121 9.121 0 0 0-.476-3.05Z" })));
}

function CursorFingerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.981 9.376 13 8.18v-5.6A2.564 2.564 0 0 0 10.913.034 2.5 2.5 0 0 0 8 2.5V17a1 1 0 0 1-2 0V9.66L3.211 13.3a5.021 5.021 0 0 0 .249 6.794l2.4 2.425A5.036 5.036 0 0 0 9.414 24H17a5 5 0 0 0 5-5v-4.721a5 5 0 0 0-4.019-4.903z" })));
}

function CursorPlusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm3 9h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zM5 12h-.019a1 1 0 0 1-.891-.586L.146 2.739A2.011 2.011 0 0 1 .588.588 1.99 1.99 0 0 1 2.649.109a.893.893 0 0 1 .09.037l8.675 3.944a1 1 0 0 1 .033 1.8l-3.7 1.85-1.85 3.7A1 1 0 0 1 5 12z" })));
}

function CursorTextAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 9v3h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 0 1 1 1 1 0 0 1 0 2 2.981 2.981 0 0 1-2-.78 2.981 2.981 0 0 1-2 .78 1 1 0 0 1 0-2 1 1 0 0 0 1-1v-1h-1a1 1 0 0 1 0-2h1V9a1 1 0 0 0-1-1 1 1 0 0 1 0-2 2.981 2.981 0 0 1 2 .78A2.981 2.981 0 0 1 14 6a1 1 0 0 1 0 2 1 1 0 0 0-1 1Zm11 12a2.993 2.993 0 0 1-5.816 1H5.816A2.993 2.993 0 1 1 2 18.184V5.816A2.993 2.993 0 1 1 5.816 2h12.368A2.993 2.993 0 1 1 22 5.816v12.368A2.99 2.99 0 0 1 24 21Zm-4-2.816V5.816A2.987 2.987 0 0 1 18.184 4H5.816A2.987 2.987 0 0 1 4 5.816v12.368A2.987 2.987 0 0 1 5.816 20h12.368A2.987 2.987 0 0 1 20 18.184Z" })));
}

function CursorTextSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 22h-2a3 3 0 0 1-3-3v-3h3a1 1 0 0 0 0-2h-3V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2h-2a4.982 4.982 0 0 0-4 2.031A4.982 4.982 0 0 0 8 0H6a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v9H8a1 1 0 0 0 0 2h3v3a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h2a4.982 4.982 0 0 0 4-2.031A4.982 4.982 0 0 0 16 24h2a1 1 0 0 0 0-2Z" })));
}

function CursorSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.008 24a3.007 3.007 0 0 1-2.681-1.636L9.2 15.66l-3.542 3.093A1 1 0 0 1 4 18V2.98A3 3 0 0 1 8.989.734l10.7 10.238a1 1 0 0 1-.6 1.719l-4.468.407 3.065 6.569A3 3 0 0 1 15.008 24z" })));
}

function DartSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0h-1.757a3.975 3.975 0 0 0-2.829 1.172l-3.242 3.242A4.022 4.022 0 0 0 11 7.242v3.748c-2.855 1.986-7.509 5.276-8.121 5.889a2.993 2.993 0 0 0-.577 3.4L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L3.714 21.7a2.965 2.965 0 0 0 3.407-.579c.613-.612 3.9-5.266 5.889-8.121h3.747a3.975 3.975 0 0 0 2.829-1.172l3.242-3.242A4.022 4.022 0 0 0 24 5.758V4a4 4 0 0 0-4-4zm-.293 5.707-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 1 1 1.414 1.414z" })));
}

function DashboardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.9 11.437A12 12 0 0 0 0 13a11.878 11.878 0 0 0 3.759 8.712A4.84 4.84 0 0 0 7.113 23h9.767a4.994 4.994 0 0 0 3.509-1.429A11.944 11.944 0 0 0 23.9 11.437zM7.472 19.661a1 1 0 0 1-1.412.09A8.993 8.993 0 0 1 12 4a9.1 9.1 0 0 1 2.249.283 1 1 0 1 1-.5 1.938 6.994 6.994 0 0 0-6.367 12.028 1 1 0 0 1 .09 1.412zM12 15a2 2 0 1 1 .512-3.926l3.781-3.781a1 1 0 1 1 1.414 1.414l-3.781 3.781A1.976 1.976 0 0 1 12 15zm5.94 4.751a1 1 0 0 1-1.322-1.5 6.992 6.992 0 0 0 2.161-7 1 1 0 1 1 1.938-.5A9.094 9.094 0 0 1 21 13a9 9 0 0 1-3.06 6.751z" })));
}

function DataTransferSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 4v1a4 4 0 0 1-4 4H7v2h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h2V9H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4zm3 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0V6a3 3 0 0 0-3-3h-2a1 1 0 0 0 0 2zm-4 14H8a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2zm13-4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4zm-4 5a1 1 0 1 0-1 1 1 1 0 0 0 1-1z" })));
}

function DatabaseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 17H10v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6zM21 9H10v2a1 1 0 0 1-2 0V9H6v2a1 1 0 0 1-2 0V9H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6zM21 1H10v2a1 1 0 0 1-2 0V1H6v2a1 1 0 0 1-2 0V1H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6z" })));
}

function DeleteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 2H9.956A4.966 4.966 0 0 0 6.01 3.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455A4.966 4.966 0 0 0 9.956 22H19a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5zm-1.293 12.293a1 1 0 1 1-1.414 1.414L14 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L14 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414L15.414 12z" })));
}

function DiamondSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 9a5 5 0 0 1-.845 2.016l-8.783 11.82a3 3 0 0 1-4.722.029L.824 10.8A5.045 5.045 0 0 1 .045 9h6.268l4.753 12.359a1 1 0 0 0 1.868 0L17.687 9zm-6.3-2h6.257a4.974 4.974 0 0 0-.857-1.871l-2.558-3.454A4.006 4.006 0 0 0 17.287 0h-2.2zm-6.592-7L8.449 7h7.112l-2.606-7zM6.31 7l2.658-7H6.646a3.99 3.99 0 0 0-3.235 1.649L.938 4.891A4.99 4.99 0 0 0 0 7zm9.234 2H8.456L12 18.214z" })));
}

function DiceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zM7 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM7 8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" })));
}

function DiplomaSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 13a3.987 3.987 0 0 0-2 7.444v2.833a.721.721 0 0 0 1.231.51l.769-.768.769.768a.721.721 0 0 0 1.231-.51v-2.833A3.987 3.987 0 0 0 18 13z" }),
        React.createElement("path", { d: "M12 17a5.993 5.993 0 0 1 9-5.191V5a5.006 5.006 0 0 0-5-5H8a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h6v-.54A5.975 5.975 0 0 1 12 17zM8 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm3 6H8a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" })));
}

function DiscoBallSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 0h6a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2v2.056a9.948 9.948 0 0 1 2 .405v4.69C14.017 9.053 13.008 9 12 9s-2.017.053-3 .151v-4.69a9.948 9.948 0 0 1 2-.405V2H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM2 14c0 .82 1.879 1.927 5 2.541v-5.082C3.879 12.073 2 13.18 2 14Zm15-8.647v4.072a15.949 15.949 0 0 1 4.473 1.4A10.033 10.033 0 0 0 17 5.353ZM9 11.16v5.68a27.78 27.78 0 0 0 3 .16 27.78 27.78 0 0 0 3-.16v-5.68a28.2 28.2 0 0 0-6 0Zm8 .3v5.082c3.121-.614 5-1.721 5-2.541s-1.879-1.928-5-2.542Zm-8 7.39v4.69a9.992 9.992 0 0 0 6 0v-4.69a29.758 29.758 0 0 1-6-.001Zm8 3.8a10.033 10.033 0 0 0 4.473-5.468A15.949 15.949 0 0 1 17 18.575Zm-10 0v-4.075a15.949 15.949 0 0 1-4.473-1.4A10.033 10.033 0 0 0 7 22.647ZM2.527 10.821A15.949 15.949 0 0 1 7 9.425V5.353a10.033 10.033 0 0 0-4.473 5.468Z" })));
}

function DiskSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 12, cy: 14, r: 2 }),
        React.createElement("path", { d: "m22.536 4.122-2.658-2.658A4.99 4.99 0 0 0 19 .775V3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V0a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7.657a4.966 4.966 0 0 0-1.464-3.535ZM12 18a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" }),
        React.createElement("path", { d: "M10 6h4a3 3 0 0 0 3-3V.064A5.128 5.128 0 0 0 16.343 0H7v3a3 3 0 0 0 3 3Z" })));
}

function DoctorSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 5h-3V4a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0-5-5zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm5 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" })));
}

function DocumentSignedSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5H16zM21 7v12a5.006 5.006 0 0 1-5 5H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6v5a2 2 0 0 0 2 2zm-4.192 10.413a1 1 0 0 0-1.4-.222 4.586 4.586 0 0 1-2.273.809 1.347 1.347 0 0 1-.864-.345A3.025 3.025 0 0 0 10.439 17a5.861 5.861 0 0 0-3.046 1.206 1 1 0 1 0 1.214 1.588A3.951 3.951 0 0 1 10.439 19c.246 0 .371.078.7.3a3.252 3.252 0 0 0 2 .7 6.464 6.464 0 0 0 3.456-1.193 1 1 0 0 0 .213-1.394zM17 14a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z" })));
}

function DocumentSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm8 3.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024V7a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zM14 19a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1zm3-4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z" })));
}

function DollarSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.068 20A3.071 3.071 0 0 1 7 16.932a1 1 0 0 0-2 0v.123A5.073 5.073 0 0 0 10.068 22H11v1a1 1 0 0 0 2 0v-1h.932a5.068 5.068 0 0 0 1.6-9.875L13 11.28V4h.932A3.071 3.071 0 0 1 17 7.068a1 1 0 0 0 2 0v-.123A5.073 5.073 0 0 0 13.932 2H13V1a1 1 0 0 0-2 0v1h-.932a5.068 5.068 0 0 0-1.6 9.875L11 12.72V20ZM13 13.387l1.9.634A3.068 3.068 0 0 1 13.932 20H13ZM9.1 9.979A3.068 3.068 0 0 1 10.068 4H11v6.613Z" })));
}

function DownloadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M210.731 386.603c24.986 25.002 65.508 25.015 90.51.029l.029-.029 68.501-68.501c7.902-8.739 7.223-22.23-1.516-30.132-8.137-7.357-20.527-7.344-28.649.03l-62.421 62.443.149-329.109C277.333 9.551 267.782 0 256 0s-21.333 9.551-21.333 21.333l-.192 328.704L172.395 288c-8.336-8.33-21.846-8.325-30.176.011-8.33 8.336-8.325 21.846.011 30.176l68.501 68.416z" }),
        React.createElement("path", { d: "M490.667 341.333c-11.782 0-21.333 9.551-21.333 21.333V448c0 11.782-9.551 21.333-21.333 21.333H64c-11.782 0-21.333-9.551-21.333-21.333v-85.333c0-11.782-9.551-21.333-21.333-21.333C9.551 341.333 0 350.885 0 362.667V448c0 35.346 28.654 64 64 64h384c35.346 0 64-28.654 64-64v-85.333c0-11.782-9.551-21.334-21.333-21.334z" })));
}

function DrinkAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.994 10H2.362l-.306-2.444A3.021 3.021 0 0 1 5 4h7.66Zm1 9.11a1 1 0 1 1-1.988-.22l.766-6.89H2.613l.955 7.622A5.008 5.008 0 0 0 8.529 24h6.941a5.01 5.01 0 0 0 4.962-4.379L21.384 12h-7.6Zm8.64-9.11.293-2.347A3 3 0 0 0 19 4h-4.327l-.666 6ZM14.8 2.89a1 1 0 0 1 .99-.89H20a1 1 0 0 0 0-2h-4.21a3 3 0 0 0-2.981 2.669L12.661 4h2.012Z" })));
}

function DrumstickSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 2.5a8.578 8.578 0 0 0-12.075 0c-2.377 2.377-3.157 7.909-3.41 11a4.164 4.164 0 0 0 .585 2.483l-3.8 3.8a1.5 1.5 0 1 0-.649 2.063 1.5 1.5 0 1 0 2.063-.649l3.8-3.8a4.136 4.136 0 0 0 2.484.592c3.086-.253 8.617-1.032 11-3.41A8.577 8.577 0 0 0 21.5 2.5Z" })));
}

function DuplicateSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 448c-82.436-.094-149.239-66.898-149.333-149.333v-192c0-4.267.277-8.533.64-12.629-39.168 16.826-64.576 55.333-64.64 97.962v213.333C42.737 464.214 90.452 511.93 149.333 512h128c42.629-.064 81.136-25.473 97.963-64.64-4.267.363-8.363.64-12.629.64H256zM451.307 69.803l-48.725-50.325A64.01 64.01 0 0 0 384 6.4v78.933h78.08a63.723 63.723 0 0 0-10.773-15.53z" }),
        React.createElement("path", { d: "M362.667 85.333c0 11.782 9.551 21.333 21.333 21.333h84.608a63.6 63.6 0 0 0-17.301-36.864l-48.725-50.325A64.24 64.24 0 0 0 362.667.618v84.715z" }),
        React.createElement("path", { d: "M320 85.333V0h-64c-58.881.071-106.596 47.786-106.667 106.667v192c.071 58.881 47.786 106.596 106.667 106.667h106.667c58.881-.071 106.596-47.786 106.667-106.667V149.333H384c-35.346 0-64-28.653-64-64z" })));
}

function ELearningSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M4 7.938V3.173c0-1.2.634-3.167 3.673-3.167A8.613 8.613 0 0 1 8.856.1 2.975 2.975 0 0 1 11 2.948v7.925a4 4 0 0 0 2 0V2.948A2.975 2.975 0 0 1 15.144.1a8.613 8.613 0 0 1 1.183-.09C19.366.006 20 1.973 20 3.173v4.765a4.014 4.014 0 0 1-2.9 3.845l-3.451.987a6.019 6.019 0 0 1-3.3 0L6.9 11.783A4.014 4.014 0 0 1 4 7.938zm18-3.912v3.912a6.022 6.022 0 0 1-4.353 5.768l-3.449.986a8 8 0 0 1-4.394 0l-3.452-.987A6.023 6.023 0 0 1 2 7.938V4.026A4.977 4.977 0 0 0 0 8v7a5.006 5.006 0 0 0 5 5h6v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h6a5.006 5.006 0 0 0 5-5V8a4.977 4.977 0 0 0-2-3.974z" })));
}

function EarningsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0h-5a1 1 0 0 0 0 2h5a2.951 2.951 0 0 1 1.285.3L.293 22.293a1 1 0 1 0 1.414 1.414L21.7 3.715A2.951 2.951 0 0 1 22 5v5a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" }),
        React.createElement("path", { d: "M6 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM18 14a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" })));
}

function EditAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M304.661 287.061 499.605 92.117c16.2-16.175 18.966-47.974-9.067-65.344-23.989-11.806-42.541-1.743-51.179 8.341l-187.05 207.169a106.793 106.793 0 0 1 52.352 44.778zM106.667 405.333h106.667c35.346 0 64-28.654 64-64s-28.654-64-64-64c-85.334 0-106.667 128-106.667 128z" }),
        React.createElement("path", { d: "M341.333 405.333c0-35.346 28.654-64 64-64H512v-201.28L319.147 332.907c.235 2.837.853 5.547.853 8.427-.071 58.88-47.786 106.596-106.667 106.666H106.667c-23.564.003-42.669-19.097-42.672-42.661 0-2.353.194-4.703.581-7.024 9.685-58.069 49.237-154.325 136.384-162.816L407.573 6.677a82.171 82.171 0 0 1 6.4-5.803C411.072.64 408.299 0 405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h234.667V405.333z" }),
        React.createElement("path", { d: "M405.333 384C393.551 384 384 393.551 384 405.333V505.6a105.894 105.894 0 0 0 40.064-24.832l56.704-56.704A105.894 105.894 0 0 0 505.6 384H405.333z" })));
}

function EditSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 19v4.7a4.968 4.968 0 0 0 1.879-1.164l2.656-2.658A4.954 4.954 0 0 0 23.7 18H19a1 1 0 0 0-1 1ZM7.172 13.828A4 4 0 0 0 6 16.657V18h1.343a4 4 0 0 0 2.829-1.172L21.5 5.5a2.121 2.121 0 0 0-3-3Z" }),
        React.createElement("path", { d: "M24 4.952a4.087 4.087 0 0 1-1.08 1.962L11.586 18.243A5.961 5.961 0 0 1 7.343 20H6a2 2 0 0 1-2-2v-1.343a5.957 5.957 0 0 1 1.758-4.242L17.086 1.086A4.078 4.078 0 0 1 19.037 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11v-5a3 3 0 0 1 3-3h5V4.952Z" })));
}

function EnvelopeBanSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.5 11c7.269-.231 7.267-10.77 0-11-7.269.231-7.267 10.77 0 11Zm0-2a3.449 3.449 0 0 1-1.652-.434l4.718-4.718A3.5 3.5 0 0 1 18.5 9Zm0-7a3.449 3.449 0 0 1 1.652.434l-4.718 4.718A3.5 3.5 0 0 1 18.5 2Zm0 11a7.474 7.474 0 0 0 5.5-2.413V19a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8c0-.157.032-.3.046-.458l8.418 8.418a5.008 5.008 0 0 0 7.072 0L18.5 13Zm-8.622 1.546L.744 5.411A4.986 4.986 0 0 1 5 3h6.436a7.532 7.532 0 0 0 4.64 9.592l-1.954 1.954a3.008 3.008 0 0 1-4.244 0Z" })));
}

function EnvelopeDownloadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.746 6.285a1 1 0 0 1 1.414.015L18 8.181V1a1 1 0 0 1 2 0v7.181L21.84 6.3a1 1 0 0 1 1.43 1.4l-2.515 2.57a2.478 2.478 0 0 1-1.743.73.04.04 0 0 1-.019 0 2.456 2.456 0 0 1-1.74-.722L14.73 7.7a1 1 0 0 1 .016-1.415ZM12 15.422a3 3 0 0 0 2.122-.876l2.341-2.341a4.493 4.493 0 0 1-.625-.514L13.3 9.1a3 3 0 0 1 .046-4.242C13.82 4.394 14.792 3.543 15.42 3H5A4.986 4.986 0 0 0 .744 5.411l9.134 9.135a3 3 0 0 0 2.122.876Zm10.185-3.754a4.348 4.348 0 0 1-3.644 1.287l-3.005 3.005a5.008 5.008 0 0 1-7.072 0L.046 7.542C.032 7.7 0 7.843 0 8v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.812Z" })));
}

function EnvelopeMarkerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.946 11a2.031 2.031 0 0 1-1.277-.451L19.5 9.613l-1.169.936A2.051 2.051 0 0 1 15 8.948V2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v6.948A2.057 2.057 0 0 1 21.946 11ZM12 15.422a3 3 0 0 0 2.122-.876l1.747-1.746A3.857 3.857 0 0 1 13 8.948V3H5A4.986 4.986 0 0 0 .744 5.411l9.134 9.135a3 3 0 0 0 2.122.876ZM23.7 12.6a4.048 4.048 0 0 1-4.2-.425.923.923 0 0 0-.123-.054l-3.841 3.839a5.008 5.008 0 0 1-7.072 0L.046 7.542C.032 7.7 0 7.843 0 8v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-6.57c-.1.057-.192.118-.3.17Z" })));
}

function EnvelopeOpenSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1.225 8.467c.106-.123 7.255-7.018 7.255-7.018a5.026 5.026 0 0 1 7.055.015s7.134 6.88 7.239 7l-8.653 8.654a3.074 3.074 0 0 1-4.242 0Zm14.31 10.069a5.024 5.024 0 0 1-7.07 0L.229 10.3A4.962 4.962 0 0 0 0 11.708V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-7.292a4.962 4.962 0 0 0-.229-1.408Z" })));
}

function EnvelopePlusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9.878 14.546.744 5.411A4.986 4.986 0 0 1 5 3h7.294a7.037 7.037 0 0 0 4.675 8.7l-2.847 2.848a3.007 3.007 0 0 1-4.244-.002Zm5.658 1.414a5.008 5.008 0 0 1-7.072 0L.046 7.542C.032 7.7 0 7.843 0 8v11a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.894a6.972 6.972 0 0 1-4.478 2.08ZM15 6h3v3a1 1 0 0 0 2 0V6h3a1 1 0 0 0 0-2h-3V1a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2Z" })));
}

function EnvelopeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.954 5.542-8.418 8.418a5.007 5.007 0 0 1-7.072 0L.046 5.542C.032 5.7 0 5.843 0 6v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6c0-.157-.032-.3-.046-.458Z" }),
        React.createElement("path", { d: "m14.122 12.546 9.134-9.135A4.986 4.986 0 0 0 19 1H5A4.986 4.986 0 0 0 .744 3.411l9.134 9.135a3.007 3.007 0 0 0 4.244 0Z" })));
}

function EuroSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.715 18.363A10 10 0 0 1 4.461 15H15a1 1 0 0 0 0-2H4.051a9.829 9.829 0 0 1 0-2H15a1 1 0 0 0 0-2H4.461a10 10 0 0 1 17.254-3.363 1 1 0 0 0 1.542-1.274A11.989 11.989 0 0 0 2.4 9H1a1 1 0 0 0 0 2h1.051c-.028.331-.051.662-.051 1s.023.669.051 1H1a1 1 0 0 0 0 2h1.4a11.989 11.989 0 0 0 20.862 4.637 1 1 0 0 0-1.542-1.274z" })));
}

function ExclamationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256c.153 141.322 114.678 255.847 256 256zm-21.333-384c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v170.667c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333V128zM256 384c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333c-11.782 0-21.333-9.551-21.333-21.333S244.218 384 256 384z" })));
}

function ExpandSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM7 0H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" })));
}

function EyeCrossedSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.19 512.19",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M496.543 200.771a338.461 338.461 0 0 0-71.915-83.392l59.733-59.733c8.185-8.475 7.95-21.98-.525-30.165-8.267-7.985-21.374-7.985-29.641 0l-64.96 65.045a257.151 257.151 0 0 0-133.141-36.053c-132.075 0-207.339 90.411-240.448 144.299-20.862 33.743-20.862 76.379 0 110.123a338.461 338.461 0 0 0 71.915 83.392L27.828 454.02c-8.475 8.185-8.71 21.691-.525 30.165 8.185 8.475 21.691 8.71 30.165.525.178-.172.353-.347.525-.525l65.109-65.109a257.147 257.147 0 0 0 132.992 36.117c132.075 0 207.339-90.411 240.448-144.299 20.863-33.743 20.863-76.379.001-110.123zm-368.448 55.062c-.121-70.575 56.992-127.885 127.567-128.006a127.787 127.787 0 0 1 74.481 23.793l-30.976 30.976a84.202 84.202 0 0 0-43.072-12.096c-47.128 0-85.333 38.205-85.333 85.333a84.202 84.202 0 0 0 12.096 43.072l-30.976 30.976a127.163 127.163 0 0 1-23.787-74.048zm128 128a127.163 127.163 0 0 1-74.048-23.787l30.976-30.976a84.202 84.202 0 0 0 43.072 12.096c47.128 0 85.333-38.205 85.333-85.333a84.202 84.202 0 0 0-12.096-43.072l30.976-30.976c41.013 57.434 27.702 137.242-29.732 178.255a127.787 127.787 0 0 1-74.481 23.793z" })));
}

function EyeDropperSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.678 7.393c-.916.916-.707 2.838.025 4.167a2.489 2.489 0 0 1-3.961 2.924L9.516 7.258A2.489 2.489 0 0 1 12.44 3.3c1.329.731 3.251.941 4.167.025L19.086.843a2.947 2.947 0 0 1 4.071 0 2.88 2.88 0 0 1 0 4.075zM1.969 17.347a3.307 3.307 0 0 0-.585 3.853L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L2.8 22.616a3.264 3.264 0 0 0 3.855-.586l7.4-7.4-4.682-4.686z" })));
}

function EyeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 12, cy: 12, r: 4 }),
        React.createElement("path", { d: "M23.271 9.419C21.72 6.893 18.192 2.655 12 2.655S2.28 6.893.729 9.419a4.908 4.908 0 0 0 0 5.162C2.28 17.107 5.808 21.345 12 21.345s9.72-4.238 11.271-6.764a4.908 4.908 0 0 0 0-5.162ZM12 18a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Z" })));
}

function FeatherSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M5.82 19.306c.054.044.116.074.171.117l-4.284 4.284a1 1 0 0 1-1.414-1.414l4.285-4.285a7.841 7.841 0 0 0 1.242 1.298zm4.18-6.72 6.293-6.293a1 1 0 1 1 1.414 1.414L14.414 11H21.6a30.726 30.726 0 0 0 2.28-6.075A3.992 3.992 0 0 0 19.04.119 31.838 31.838 0 0 0 10 4.107zm2.5.414c-.025 0-.047-.013-.072-.014l-6.437 6.437A7.446 7.446 0 0 0 10.589 21a8.184 8.184 0 0 0 5.9-2.545A28.716 28.716 0 0 0 20.533 13zM8 14.5V5.507a26.454 26.454 0 0 0-2.744 2.362A7.757 7.757 0 0 0 3.009 13.7 7.646 7.646 0 0 0 4.578 18l3.436-3.437C8.013 14.547 8 14.525 8 14.5z" })));
}

function FerrisWheelSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11a3 3 0 0 0-2.841-2.984 9.918 9.918 0 0 0-5.175-5.175A3 3 0 0 0 13 0h-2a3 3 0 0 0-2.984 2.841 9.921 9.921 0 0 0-5.175 5.175 2.985 2.985 0 0 0-.659 5.856 9.964 9.964 0 0 0 5.332 7.069l-.48 1.8a1 1 0 0 0 .708 1.224A1.011 1.011 0 0 0 8 24a1 1 0 0 0 .966-.742l.434-1.606a9.928 9.928 0 0 0 5.211 0l.428 1.606a1 1 0 0 0 1.932-.516l-.48-1.8a9.974 9.974 0 0 0 5.333-7.07A2.994 2.994 0 0 0 24 11Zm-12 9a8.021 8.021 0 0 1-2.09-.28l1.7-6.364a.407.407 0 0 1 .787 0l1.7 6.364A8.034 8.034 0 0 1 12 20Zm3.955-1.049-1.63-6.11A2.38 2.38 0 0 0 12 11.054a2.38 2.38 0 0 0-2.326 1.787l-1.629 6.11A7.962 7.962 0 0 1 4.26 14H5a3 3 0 0 0 .081-5.992 8.1 8.1 0 0 1 3.507-3.241A2.989 2.989 0 0 0 11 6h2a2.988 2.988 0 0 0 2.412-1.233 8.094 8.094 0 0 1 3.506 3.241A3 3 0 0 0 19 14h.74a7.968 7.968 0 0 1-3.785 4.951Z" })));
}

function FileAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm8 3.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024V7a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zM16 17a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 1-1z" })));
}

function FileAiSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M130.965 181.632h29.078l-14.486-38.379z" }),
        React.createElement("path", { d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h224.32c3.477 0 6.912-.277 10.347-.512V405.333c0-35.346 28.654-64 64-64h106.155c.235-3.435.512-6.869.512-10.347v-224.32C511.93 47.786 464.214.071 405.333 0zM194.432 235.008c-6.892 2.579-14.572-.903-17.173-7.787l-7.147-18.923h-49.301l-7.232 18.965a13.354 13.354 0 0 1-12.459 8.533 13.658 13.658 0 0 1-4.736-.875c-6.884-2.615-10.344-10.316-7.729-17.199l.006-.017 42.133-110.592a15.957 15.957 0 0 1 14.827-10.176 15.872 15.872 0 0 1 14.656 9.899l41.899 110.933c2.624 6.893-.837 14.608-7.73 17.232a.091.091 0 0 1-.014.007zm58.517-12.48c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333V110.272c0-7.364 5.97-13.333 13.333-13.333s13.333 5.97 13.333 13.333v112.256z" }),
        React.createElement("path", { d: "M384 405.333v96.853a148.845 148.845 0 0 0 52.587-33.92l31.659-31.68a148.414 148.414 0 0 0 33.941-52.587h-96.853C393.551 384 384 393.551 384 405.333z" })));
}

function FileCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm8 3.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024V7a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zm-5.276 3.826a1 1 0 0 0-1.413-.035l-3.6 3.431a1 1 0 0 1-1.456-.04l-1.589-1.414a1 1 0 0 0-1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017l3.585-3.414a1 1 0 0 0 .035-1.413z" })));
}

function FileDeleteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm8 3.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515c.163 0 .324.013.485.024V7a3 3 0 0 0 3 3h6.976c.011.161.024.322.024.485zM13.414 17l1.793-1.793a1 1 0 0 0-1.414-1.414L12 15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414L10.586 17l-1.793 1.793a1 1 0 1 0 1.414 1.414L12 18.414l1.793 1.793a1 1 0 0 0 1.414-1.414z" })));
}

function FileEpsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.001 512.001",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h224.32c3.477 0 6.912-.277 10.347-.512V405.333c0-35.346 28.654-64 64-64h106.155c.235-3.435.512-6.869.512-10.347v-224.32C511.93 47.786 464.214.071 405.333 0zM145.067 153.067c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333h-30.059v28.949h33.515c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333H101.59c-7.364 0-13.333-5.97-13.333-13.333V110.784c0-7.364 5.97-13.333 13.333-13.333h46.933c7.364 0 13.333 5.97 13.333 13.333s-5.97 13.333-13.333 13.333h-33.515v28.949h30.059v.001zm57.088-56.128h31.232c24.86 0 45.013 20.153 45.013 45.013s-20.153 45.013-45.013 45.013h-17.92v35.477c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333v-112.17c.039-.99.33-5.699 4.227-9.459 3.679-3.549 8.066-3.835 9.127-3.874zm189.653 103.594c-4.945 21.475-24.536 36.343-46.549 35.328a66.84 66.84 0 0 1-49.067-21.013c-4.949-5.453-4.539-13.885.914-18.834l.004-.003a12.8 12.8 0 0 1 16.213-1.088c.341.235 2.133 1.643 2.709 2.133a56.917 56.917 0 0 0 18.091 10.667 32.685 32.685 0 0 0 20.864-.789 15.424 15.424 0 0 0 9.813-8.533 12.032 12.032 0 0 0-3.2-12.352 27.723 27.723 0 0 0-10.283-5.888c-8.853-3.243-17.557-6.72-26.283-10.304a41.192 41.192 0 0 1-20.501-15.68 34.58 34.58 0 0 1-4.992-23.467 36.685 36.685 0 0 1 4.416-12.907 38.718 38.718 0 0 1 21.888-17.621 67.82 67.82 0 0 1 51.755 7.061 23.24 23.24 0 0 1 8.683 7.573 13.014 13.014 0 0 1-.683 15.723c-5.077 5.973-12.459 4.267-18.752 1.579a159.35 159.35 0 0 0-17.472-6.592 31.727 31.727 0 0 0-12.949-1.899 12.8 12.8 0 0 0-10.475 6.997 12.564 12.564 0 0 0 3.243 13.184 26.558 26.558 0 0 0 12.672 6.4c5.952 1.557 11.989 2.645 17.813 4.629a56.829 56.829 0 0 1 19.328 11.115 37.697 37.697 0 0 1 12.8 34.581z" }),
        React.createElement("path", { d: "M405.333 384C393.551 384 384 393.551 384 405.333v96.853a148.845 148.845 0 0 0 52.587-33.92l31.659-31.68a148.414 148.414 0 0 0 33.941-52.587h-96.854V384zM233.365 123.605h-17.899v36.779h17.749c10.133.005 18.351-8.205 18.356-18.338s-8.205-18.351-18.338-18.356h-.018l.15-.085z" })));
}

function FileGifSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 18h4.54a6.957 6.957 0 0 1-1.591 2.465l-1.484 1.485A6.977 6.977 0 0 1 18 23.54V19a1 1 0 0 1 1-1Zm5-13v10.515c0 .163-.013.324-.024.485H19a3 3 0 0 0-3 3v4.976c-.161.011-.322.024-.485.024H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5ZM7 7.75A.75.75 0 0 0 6.25 7H5.5a.5.5 0 0 0 0 1h.249v.084A.759.759 0 0 1 5 8.819a.742.742 0 0 1-.749-.751V6A.742.742 0 0 1 5 5.25a.779.779 0 0 1 .662.409.626.626 0 1 0 1.11-.58A2.022 2.022 0 0 0 5 4a1.991 1.991 0 0 0-2 1.985v2.1a1.991 1.991 0 0 0 2 1.985 2 2 0 0 0 2-1.986Zm3-3.125a.625.625 0 0 0-1.25 0v4.819a.625.625 0 1 0 1.25 0Zm3 1.763V5.25h1.388a.625.625 0 0 0 0-1.25h-2.013a.625.625 0 0 0-.625.625v4.811a.625.625 0 0 0 1.25 0v-1.8h1.239a.625.625 0 0 0 0-1.25Z" })));
}

function FileMusicSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15a1 1 0 0 1-1-1zm7.976 3H15a3 3 0 0 1-3-3V.024C11.839.013 11.678 0 11.515 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515c0-.163-.013-.324-.024-.485zM14 14h-1v4.5a2.5 2.5 0 1 1-2.5-2.5 2.577 2.577 0 0 1 .5.05V14a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2z" })));
}

function FilePsdSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.001 512.001",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M132.373 123.605h-17.877l.128 36.779h17.749c10.133.005 18.351-8.205 18.356-18.338s-8.205-18.351-18.338-18.356h-.018v-.085zM363.051 125.269H345.6v82.197c6.528 0 13.845 0 18.005-.192 20.715-.341 29.973-20.779 29.973-40.875s-7.935-41.13-30.527-41.13zM384 405.333v96.853a148.845 148.845 0 0 0 52.587-33.92l31.659-31.68a148.414 148.414 0 0 0 33.941-52.587h-96.853C393.551 384 384 393.551 384 405.333z" }),
        React.createElement("path", { d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h224.32c3.477 0 6.912-.277 10.347-.512V405.333c0-35.346 28.654-64 64-64h106.155c.235-3.435.512-6.869.512-10.347v-224.32C511.93 47.786 464.214.071 405.333 0zM100.992 96.939h31.381c24.86 0 45.013 20.153 45.013 45.013s-20.153 45.013-45.013 45.013h-17.92v35.477c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333v-112.17c-.039-.769-.207-5.839 3.818-9.756 3.828-3.725 8.579-3.61 9.387-3.577zm189.803 103.594c-4.945 21.475-24.536 36.343-46.549 35.328a66.84 66.84 0 0 1-49.067-21.013c-4.902-5.495-4.421-13.924 1.075-18.826l.013-.012a12.8 12.8 0 0 1 16.213-1.088c.341.235 2.133 1.643 2.709 2.133a56.917 56.917 0 0 0 18.091 10.667 32.683 32.683 0 0 0 20.779-.747 15.423 15.423 0 0 0 9.749-8.704 12.074 12.074 0 0 0-3.179-12.352 28.076 28.076 0 0 0-10.283-5.888c-8.853-3.243-17.579-6.72-26.304-10.304a41.192 41.192 0 0 1-20.501-15.68 34.58 34.58 0 0 1-4.992-23.467 36.678 36.678 0 0 1 4.416-12.907 38.718 38.718 0 0 1 21.888-17.621 67.802 67.802 0 0 1 51.755 7.061 23.092 23.092 0 0 1 8.683 7.573 12.972 12.972 0 0 1-.683 15.723c-5.056 5.973-12.459 4.267-18.731 1.579a161.651 161.651 0 0 0-17.493-6.592 31.727 31.727 0 0 0-12.949-1.899 12.8 12.8 0 0 0-10.453 6.997 12.524 12.524 0 0 0 3.221 13.184 26.558 26.558 0 0 0 12.672 6.4c5.952 1.557 11.989 2.645 17.813 4.629a56.829 56.829 0 0 1 19.328 11.115 37.701 37.701 0 0 1 12.779 34.711zm73.365 33.408c-8.832.171-31.701.256-31.701.256-7.347 0-13.31-5.944-13.333-13.291l-.235-108.927c0-7.371 5.963-13.352 13.333-13.376h30.869c34.219 0 57.173 27.264 57.173 67.797.001 38.571-23.466 66.987-56.106 67.541z" })));
}

function FileSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M320 170.667h139.52a148.346 148.346 0 0 0-33.941-52.565l-74.325-74.368a148.836 148.836 0 0 0-52.587-33.92v139.52c0 11.781 9.551 21.333 21.333 21.333z" }),
        React.createElement("path", { d: "M468.821 213.333H320c-35.346 0-64-28.654-64-64V.512C252.565.277 249.131 0 245.653 0h-96.32C90.452.071 42.737 47.786 42.667 106.667v298.667c.07 58.88 47.785 106.596 106.666 106.666h213.333c58.881-.07 106.596-47.786 106.667-106.667V223.68c0-3.477-.277-6.912-.512-10.347z" })));
}

function FillSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m21.45 13.864-8.672 8.672a5.006 5.006 0 0 1-7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.9-5.9-2.854-2.893a1 1 0 1 1 1.422-1.4l8.97 9.081.009.013a.995.995 0 0 0 1.376-1.436l-7.21-7.3A1 1 0 0 1 10.707.293l13 13a1 1 0 1 1-1.414 1.414zm-.758 4.567C19.961 19.492 19 20.725 19 21.5a2.5 2.5 0 0 0 5 0c0-.849-.945-2.044-1.673-3.078a1 1 0 0 0-1.635.009z" })));
}

function FilmSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.051 0h-14a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm1 11h2v2h-2zm0-2V7h2v2zm-16 4h-2v-2h2zM6 13v-2h12v2zM4.051 9h-2V7h2zm-2 6h2v2h-2zm18 0h2v2h-2zm2-10h-2V2.184a3 3 0 0 1 2 2.816zm-18-2.816V5h-2a3 3 0 0 1 2-2.816zM2.051 19h2v2.816a3 3 0 0 1-2-2.816zm18 2.816V19h2a3 3 0 0 1-2 2.816z" })));
}

function FilterSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 24a1 1 0 0 1-.6-.2l-4-3A1 1 0 0 1 9 20v-5.62L1.984 6.487A3.9 3.9 0 0 1 4.9 0h14.2a3.9 3.9 0 0 1 2.913 6.488L15 14.38V23a1 1 0 0 1-1 1z" })));
}

function FingerprintSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5.972 22.285a1 1 0 0 1-.515-1.857C9 18.3 9 13.73 9 11a3 3 0 0 1 6 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0c0 2.947 0 8.434-4.514 11.143a1 1 0 0 1-.514.142Zm4.963 1.421c2.282-2.3 3.615-5.534 3.961-9.621A1 1 0 0 0 13.985 13a.983.983 0 0 0-1.081.911c-.311 3.657-1.419 6.4-3.388 8.381a1 1 0 0 0 1.419 1.41Zm5.2-.186a17.793 17.793 0 0 0 1.508-3.181 1 1 0 0 0-1.881-.678 15.854 15.854 0 0 1-1.338 2.821 1 1 0 0 0 1.711 1.038Zm2.365-6.329A31.459 31.459 0 0 0 19 11 7 7 0 0 0 6.787 6.333a1 1 0 1 0 1.489 1.334A5 5 0 0 1 17 11a29.686 29.686 0 0 1-.462 5.809 1 1 0 0 0 .79 1.172.979.979 0 0 0 .193.019 1 1 0 0 0 .979-.809ZM7 11a5 5 0 0 1 .069-.833A1 1 0 1 0 5.1 9.833 6.971 6.971 0 0 0 5 11c0 4.645-1.346 7-4 7a1 1 0 0 0 0 2c3.869 0 6-3.2 6-9Zm13.7 12.414A29.76 29.76 0 0 0 23 11a10.865 10.865 0 0 0-1.1-4.794 1 1 0 1 0-1.8.875A8.9 8.9 0 0 1 21 11a27.91 27.91 0 0 1-2.119 11.586 1 1 0 0 0 .5 1.324.984.984 0 0 0 .413.09 1 1 0 0 0 .906-.586ZM3 14v-3a9.01 9.01 0 0 1 9-9 8.911 8.911 0 0 1 5.4 1.8 1 1 0 0 0 1.2-1.6A10.9 10.9 0 0 0 12 0 11.013 11.013 0 0 0 1 11v3a1 1 0 0 0 2 0Z" })));
}

function FishSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 5.272a16.493 16.493 0 0 0-7.755 2.62 6.55 6.55 0 0 1 5.122-4.839A2.2 2.2 0 0 1 11 5.272Zm12.654-.023a4.529 4.529 0 0 0-3.083-1.82 4.529 4.529 0 0 0-1.82-3.083A1.718 1.718 0 0 0 16 1.715V7C8.483 7 4.194 8.437 1.963 12.194a13.756 13.756 0 0 1 9.837 9.849C15.561 19.813 17 15.523 17 8h5.285a1.718 1.718 0 0 0 1.369-2.751ZM19.2 13h-.475a22.8 22.8 0 0 1-.813 4h.814c2.487.077 3.286-3.876.474-4Zm-9.249 9.911c-2.4.688-6.537 2.143-8.78-.082a3.983 3.983 0 0 1-1.162-3.086 20.836 20.836 0 0 1 1.081-5.7 11.724 11.724 0 0 1 8.861 8.868ZM5 20a1 1 0 0 0-2 0 1 1 0 0 0 2 0Z" })));
}

function FlagSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 24a1 1 0 0 1-1-1V4a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H2v10a1 1 0 0 1-1 1zM20 4h-3v5a6.006 6.006 0 0 1-6 6h-.444A3.987 3.987 0 0 0 14 17h6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z" })));
}

function FlameSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.746 18.254c0-1.5-1.031-3.55-2.9-5.773a1.088 1.088 0 0 0-.846-.389 1.117 1.117 0 0 0-.854.391C9.1 14.88 8.1 17 8.273 18.625a3.668 3.668 0 0 0 1.582 2.557A3.622 3.622 0 0 0 12 22a3.75 3.75 0 0 0 3.746-3.746Z" }),
        React.createElement("path", { d: "M16.629 2.9c-.786-.668-1.611-1.368-2.451-2.132A2.952 2.952 0 0 0 11.8.028a2.847 2.847 0 0 0-2.032 1.3 20.39 20.39 0 0 0-2.492 6.448 6.233 6.233 0 0 1-.476-.815 2 2 0 0 0-3.3-.473 9.069 9.069 0 0 0-2.585 6.421A10.979 10.979 0 0 0 9.136 23.64a11.651 11.651 0 0 0 2.776.352 5.552 5.552 0 0 1-3.278-1.226 5.631 5.631 0 0 1-2.35-3.934c-.23-2.21.893-4.783 3.338-7.647A3.114 3.114 0 0 1 12 10.092h.01a3.1 3.1 0 0 1 2.366 1.1c1.538 1.827 3.373 4.535 3.373 7.061a5.749 5.749 0 0 1-5.359 5.727 11.056 11.056 0 0 0 10.7-11.065c-.005-4.53-2.997-7.07-6.461-10.015Z" })));
}

function FlipHorizontalSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.207.068H10.2a1 1 0 0 0-1.13.56L.375 19.759A3 3 0 0 0 3.106 24H10a1 1 0 0 0 1-1V1.046a1.01 1.01 0 0 0-.793-.978ZM9 22H3.106a1 1 0 0 1-.911-1.414L9 5.616ZM23.625 19.759 14.93.628a1.022 1.022 0 0 0-1.152-.557 1 1 0 0 0-.778.975V23a1 1 0 0 0 1 1h6.894a3 3 0 0 0 2.731-4.241Z" })));
}

function FlowerBouquetSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.339 2.975c.636-.859 2.623-1.536 4.044-1.928A1.272 1.272 0 0 1 22 2.252c.028 1.493-.056 3.629-.7 4.492a3.076 3.076 0 0 1-4.341.628 3.169 3.169 0 0 1-.62-4.397Zm.181 16.078A3.992 3.992 0 0 1 20 23a1 1 0 0 1-2 0 2 2 0 0 0-2-2h-1.7a4.246 4.246 0 0 1 .487.649 1.517 1.517 0 0 1 .008 1.544 1.594 1.594 0 0 1-1.384.807h-2.822a1.594 1.594 0 0 1-1.382-.807 1.517 1.517 0 0 1 .008-1.544 4.826 4.826 0 0 1 .991-1.16C6.635 19.278 0 16.12 0 12.077A3.04 3.04 0 0 1 3.082 9h17.836A3.04 3.04 0 0 1 24 12.077c0 3.259-4.079 5.623-7.48 6.976Zm-.288-6.024a1 1 0 0 0-1.2.739A11.727 11.727 0 0 1 12 18.622a11.727 11.727 0 0 1-3.027-4.854 1 1 0 0 0-1.947.461c.029.123.5 2.892 4.168 6.385A1.307 1.307 0 0 0 12 21c.41 0 1.325-.871 1.325-.871a16.179 16.179 0 0 0 3.649-5.9 1 1 0 0 0-.742-1.2ZM12 8a3.283 3.283 0 0 0 3.283-3.283c0-1.129-1.272-2.972-2.232-4.2a1.333 1.333 0 0 0-2.1 0c-.96 1.232-2.232 3.075-2.232 4.2A3.283 3.283 0 0 0 12 8Zm-4.959-.628a3.169 3.169 0 0 0 .62-4.4c-.636-.859-2.623-1.536-4.044-1.928a1.272 1.272 0 0 0-1.612 1.2c-.028 1.493.056 3.629.7 4.492a3.076 3.076 0 0 0 4.336.636Z" })));
}

function FlowerTulipSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.535 14.725a1.99 1.99 0 0 0-1.726-.716A10.422 10.422 0 0 0 13 19.951v-6.035A6.009 6.009 0 0 0 18 8c0-2.793-1.943-5.152-3.844-7.091A2.865 2.865 0 0 0 13.8.6 16.955 16.955 0 0 0 12 7.966a1 1 0 1 1-2 .068 18.566 18.566 0 0 1 1.846-8 3 3 0 0 0-2 .874C7.943 2.848 6 5.207 6 8a6.009 6.009 0 0 0 5 5.916v6.036a10.421 10.421 0 0 0-8.809-5.943 1.992 1.992 0 0 0-1.726.716 1.971 1.971 0 0 0-.393 1.792C2.111 23.855 11.591 24 11.994 24h.012c.4 0 9.884-.145 11.923-7.483a1.975 1.975 0 0 0-.394-1.792Z" })));
}

function FlowerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.8 12c4.939-2.989.773-10.453-4.4-7.632-.173-5.774-8.629-5.771-8.8 0-5.133-2.817-9.362 4.618-4.4 7.576-4.949 3.035-.8 10.211 4.4 7.692.18 5.77 8.622 5.765 8.8 0C21.562 22.153 25.772 15 20.8 12ZM12 16a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm2-4a2 2 0 0 1-4 0 2 2 0 0 1 4 0Z" })));
}

function FolderAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.863 6.88 0 6.991V6a5.006 5.006 0 0 1 5-5h2.528a3.014 3.014 0 0 1 1.341.316L12.025 2.9a1.019 1.019 0 0 0 .447.1H19a5 5 0 0 1 4.863 3.88zm.137 2V18a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8.991zM16 16a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 1-1z" })));
}

function FolderSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 191.808V384c.071 58.881 47.786 106.596 106.667 106.667h298.667C464.214 490.596 511.93 442.881 512 384V189.44L0 191.808zM405.333 64H266.069a21.746 21.746 0 0 1-9.536-2.133l-67.328-33.792a64.291 64.291 0 0 0-28.608-6.741h-53.931C47.786 21.404.071 69.119 0 128v21.141l509.077-2.368C497.961 98.408 454.959 64.099 405.333 64z" })));
}

function FollowingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.047 512.047",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 192, cy: 128.024, r: 128 }),
        React.createElement("path", { d: "M192 298.69c-105.985.13-191.871 86.015-192 192 0 11.782 9.551 21.333 21.333 21.333h341.333c11.782 0 21.333-9.551 21.333-21.333-.128-105.985-86.014-191.87-191.999-192zM469.333 168.024c-24.717 1.231-43.79 22.211-42.667 46.933 1.123-24.722-17.949-45.702-42.667-46.933-24.717 1.231-43.79 22.211-42.667 46.933 0 36.907 48.128 80.149 72.107 99.392a21.162 21.162 0 0 0 26.453 0c23.979-19.2 72.107-62.485 72.107-99.392 1.124-24.723-17.948-45.702-42.666-46.933z" })));
}

function FootballSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M.024 11.523a11.943 11.943 0 0 1 2.731-7.164l1.106 3.6a1 1 0 0 1-.382 1.114zm11.39-8.712a1 1 0 0 0 1.174 0L15.627.563a11.948 11.948 0 0 0-7.28.01zm9.1 6.256 3.457 2.456a11.943 11.943 0 0 0-2.731-7.164l-1.1 3.594a1 1 0 0 0 .379 1.114zM6.7 18.683a1 1 0 0 0-.949-.69l-4.139-.007a12.052 12.052 0 0 0 6.567 5.381zm11.541-.69a1 1 0 0 0-.948.694l-1.525 4.7a12.056 12.056 0 0 0 6.615-5.4zm-4.583-4.339.731-2.253a.5.5 0 0 0-.181-.559L12.294 9.45a.5.5 0 0 0-.588 0L9.79 10.842a.5.5 0 0 0-.182.56l.732 2.252a.5.5 0 0 0 .475.346h2.37a.5.5 0 0 0 .476-.346zM13.5 23.9a11.842 11.842 0 0 1-1.5.1 11.934 11.934 0 0 1-1.556-.113l-1.836-5.811a2.992 2.992 0 0 0-2.849-2.083l-5.065-.009a11.919 11.919 0 0 1-.532-2.106L4.634 10.7a2.991 2.991 0 0 0 1.138-3.335L4.356 2.758a12.007 12.007 0 0 1 1.859-1.265l4.021 2.934a3 3 0 0 0 3.534 0l3.987-2.946a12.029 12.029 0 0 1 1.887 1.282l-1.416 4.601a2.991 2.991 0 0 0 1.135 3.336l4.475 3.178a11.886 11.886 0 0 1-.532 2.105l-5.067.01a2.991 2.991 0 0 0-2.846 2.08zm-.315-7.9a2.5 2.5 0 0 0 2.378-1.728l.731-2.253a2.492 2.492 0 0 0-.908-2.795l-1.917-1.392a2.491 2.491 0 0 0-2.938 0L8.614 9.224a2.493 2.493 0 0 0-.908 2.8l.732 2.253A2.494 2.494 0 0 0 10.815 16z" })));
}

function FormSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5H16zM14 12h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm2-5a2 2 0 0 1-2-2V0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7zm0 13H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm-2-4h-4a3 3 0 0 1 0-6h4a3 3 0 0 1 0 6z" })));
}

function ForwardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M3.787 20.656A3.789 3.789 0 0 1 0 16.87V7.13a3.783 3.783 0 0 1 6.021-3.051L9.8 6.853a3.783 3.783 0 0 1 6.01-2.774l6.641 4.87a3.784 3.784 0 0 1 0 6.1l-6.641 4.87a3.783 3.783 0 0 1-6.01-2.772l-3.779 2.774a3.775 3.775 0 0 1-2.234.735Z" })));
}

function FoxSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 8.008v-6A2 2 0 0 1 .759.435a1.982 1.982 0 0 1 1.7-.383A6.133 6.133 0 0 1 6.6 3.782 21.876 21.876 0 0 1 12 3a21.876 21.876 0 0 1 5.4.782 6.132 6.132 0 0 1 4.144-3.73A2.005 2.005 0 0 1 24 2.006v6a12.216 12.216 0 0 0-4.774 1.1A10.256 10.256 0 0 0 13 19a1 1 0 0 1-2 0 10.259 10.259 0 0 0-6.226-9.9A12.233 12.233 0 0 0 0 8.008ZM20 11a3.778 3.778 0 0 1-3.642 2.989A8.938 8.938 0 0 0 15 19a3 3 0 0 1-6 0 8.938 8.938 0 0 0-1.358-5.011A3.778 3.778 0 0 1 4 11a10.155 10.155 0 0 0-4-.99 10.925 10.925 0 0 0 3.22 7.626l4.657 4.657a5.862 5.862 0 0 0 8.242 0l4.657-4.657A10.925 10.925 0 0 0 24 10.01a10.155 10.155 0 0 0-4 .99Z" })));
}

function FrownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM6 10a2 2 0 0 1 4 0c0 1-.895 1-2 1s-2 0-2-1Zm10.01 8H8a1 1 0 0 1-.963-1.285A5.5 5.5 0 0 1 12.007 13a5.469 5.469 0 0 1 4.966 3.715A1.02 1.02 0 0 1 16.01 18ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" })));
}

function FtpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M3 5V4a4 4 0 0 1 4-4h1.47a2.992 2.992 0 0 1 1.7.528l1.885 1.3a1 1 0 0 0 .566.172H17a4 4 0 0 1 3.858 3zm20 15h-8.184A3 3 0 0 0 13 18.184V15h4a4 4 0 0 0 4-4V7H3v4a4 4 0 0 0 4 4h4v3.184A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2z" })));
}

function GallerySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 10v4a4.977 4.977 0 0 1-2 3.974V15a7.009 7.009 0 0 0-7-7H5c-.2 0-.4.013-.592.03A5.006 5.006 0 0 1 9 5h6a5.006 5.006 0 0 1 5 5zm-8.406 8.577a2 2 0 0 1-2.83 0l-.476-.48-5.909 5.128A4.956 4.956 0 0 0 5.026 24h6a5.006 5.006 0 0 0 5-5v-4a4.983 4.983 0 0 0-.081-.8zm3.551-6.4-4.962 4.994-.475-.479A1.993 1.993 0 0 0 7 16.578L.922 21.843A4.962 4.962 0 0 1 .026 19v-4a5.006 5.006 0 0 1 5-5h6a5 5 0 0 1 4.119 2.175zM5 14.1a1 1 0 1 0-1 1 1 1 0 0 0 1-1zM19 0h-6a4.994 4.994 0 0 0-4.579 3.029C8.612 3.014 8.805 3 9 3h6a7.009 7.009 0 0 1 7 7v2.974A4.977 4.977 0 0 0 24 9V5a5.006 5.006 0 0 0-5-5z" })));
}

function GamepadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M471.486 107.389c-19.107-33.968-53.075-53.075-91.29-53.075H127.557c-38.214 0-72.183 19.107-91.29 53.075C12.914 149.849.176 196.556.176 245.385c0 116.766 46.706 212.302 106.151 212.302 31.845 0 57.322-29.722 76.429-91.29 2.123-8.492 10.615-14.861 21.23-14.861h104.028c8.492 0 16.984 6.369 21.23 14.861 19.107 61.568 44.583 91.29 76.429 91.29 59.445 0 106.151-95.536 106.151-212.302-4.246-48.83-16.984-95.536-40.338-137.996zM191.248 224.155h-21.23v21.23c0 12.738-8.492 21.23-21.23 21.23s-21.23-8.492-21.23-21.23v-21.23h-21.23c-12.738 0-21.23-8.492-21.23-21.23s8.492-21.23 21.23-21.23h21.23v-21.23c0-12.738 8.492-21.23 21.23-21.23s21.23 8.492 21.23 21.23v21.23h21.23c12.738 0 21.23 8.492 21.23 21.23s-8.492 21.23-21.23 21.23zm140.119 42.46c-16.984 0-31.845-14.861-31.845-31.845s14.861-31.845 31.845-31.845c16.984 0 31.845 14.861 31.845 31.845s-16.984 31.845-31.845 31.845zm61.568-63.69c-14.861 0-31.845-14.861-31.845-31.845s16.984-31.845 31.845-31.845 31.845 14.861 31.845 31.845-14.861 31.845-31.845 31.845z" })));
}

function GasPumpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6 9h4a2 2 0 0 0-4 0Z" }),
        React.createElement("path", { d: "M8 5a3.971 3.971 0 0 1 1.339.247l1.954-1.954a1 1 0 1 1 1.414 1.414L11.014 6.4A3.963 3.963 0 0 1 12 9h4V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v4h4a4 4 0 0 1 4-4Z" }),
        React.createElement("path", { d: "M23.681 3.267a1 1 0 0 0-1.414 0L19.293 6.24a1 1 0 0 0-.293.707V18a1 1 0 0 1-1 1h-2v-8H0v8a5.006 5.006 0 0 0 5 5h6a5 5 0 0 0 4.576-3H18a3 3 0 0 0 3-3V7.361l2.681-2.68a1 1 0 0 0 0-1.414Z" })));
}

function GemSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.585 9.616 15.21 6h2.422a5.885 5.885 0 0 1 4.728 2.4l.787 1.075a4.431 4.431 0 0 1 .72 1.525h-6.915a6.5 6.5 0 0 0-.367-1.384ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm2.722 6.343L13.071 6h-2.133L9.26 10.452A4.709 4.709 0 0 0 9.1 11h5.821a4.623 4.623 0 0 0-.199-.657ZM16.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347Zm-4.565 14.987 2.786-5.253a4.591 4.591 0 0 0 .167-.634H9a4.585 4.585 0 0 0 .2.757ZM7.4 9.729 8.8 6H6.383a5.892 5.892 0 0 0-4.662 2.309L.9 9.383A4.366 4.366 0 0 0 .141 11h6.9A6.6 6.6 0 0 1 7.4 9.729ZM16.969 13a6.573 6.573 0 0 1-.344 1.4c-.015.04-3.756 7.074-3.759 7.075a.973.973 0 0 1-1.726.008s-3.774-6.912-3.79-6.955A6.586 6.586 0 0 1 6.994 13H.121a4.3 4.3 0 0 0 1.328 2.32l7.99 7.707a3.82 3.82 0 0 0 2.55.969 3.9 3.9 0 0 0 2.6-1l7.936-7.633A4.373 4.373 0 0 0 23.89 13ZM6.105 3.447A1 1 0 0 0 7.9 2.553l-1-2a1 1 0 1 0-1.79.894Z" })));
}

function GiftSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2 15h9v9H7a5 5 0 0 1-5-5Zm22-4a2 2 0 0 1-2 2h-9V8.957c-.336.026-.671.043-1 .043s-.664-.017-1-.043V13H2a2 2 0 0 1-2-2 4 4 0 0 1 4-4h1.738A5.137 5.137 0 0 1 4 3a1 1 0 0 1 2 0c0 2.622 2.371 3.53 4.174 3.841A9.332 9.332 0 0 1 9 3a3 3 0 0 1 6 0 9.332 9.332 0 0 1-1.174 3.841C15.629 6.53 18 5.622 18 3a1 1 0 0 1 2 0 5.137 5.137 0 0 1-1.738 4H20a4 4 0 0 1 4 4ZM11 3a7.71 7.71 0 0 0 1 3.013A7.71 7.71 0 0 0 13 3a1 1 0 0 0-2 0Zm2 21h4a5 5 0 0 0 5-5v-4h-9Z" })));
}

function GlassCheersSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.3 22.571-4.458 1.384a1 1 0 0 1-.594-1.91l1.244-.386-.918-2.7a4.917 4.917 0 0 1-.581.04 5 5 0 0 1-4.807-3.661l-.127-.375 1-2.965H22.6l.2.607a4.953 4.953 0 0 1-2.333 5.721l.931 2.737 1.3-.4a1 1 0 0 1 .594 1.91ZM14.656 10h7.267l-.966-2.868A3.023 3.023 0 0 0 17.28 5.11l-3.524.982a5.139 5.139 0 0 1 .391.571A4.936 4.936 0 0 1 14.656 10Zm-4.084-3.816L6.719 5.11A3.008 3.008 0 0 0 3.052 7.1L2.078 10h10.541l.02-.059a3 3 0 0 0-2.067-3.757Zm-9.387 6.473a4.956 4.956 0 0 0 2.364 5.682l-.944 2.728-1.305-.406a1 1 0 1 0-.6 1.91l4.458 1.384a1 1 0 0 0 .594-1.91l-1.236-.385.935-2.7a4.982 4.982 0 0 0 .559.04 5 5 0 0 0 4.79-3.608L11.945 12H1.406ZM15.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347Zm-8.448-.453A1 1 0 1 0 8.9 2.553l-1-2a1 1 0 0 0-1.79.894ZM12 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" })));
}

function GlassesSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0a4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 4 0v11.026A4.948 4.948 0 0 0 19 14a5 5 0 0 0-4.145 2.207 3.98 3.98 0 0 0-5.71 0A5 5 0 0 0 5 14a4.948 4.948 0 0 0-3 1.026V4a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v15a5 5 0 0 0 10 0 2 2 0 0 1 4 0 5 5 0 0 0 10 0V4a4 4 0 0 0-4-4z" })));
}

function GlobeAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M5 8a8 8 0 1 1 8 8 8.009 8.009 0 0 1-8-8zm17.646 5.383a1 1 0 0 0-1.39.26A10 10 0 1 1 5.285 1.637 1 1 0 0 0 3.743.363 11.994 11.994 0 0 0 12 19.949V22H8a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2.061a11.992 11.992 0 0 0 8.907-5.166 1 1 0 0 0-.261-1.39z" })));
}

function GlobeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm3.222 7H8.778A19.614 19.614 0 0 1 12 2.412 19.57 19.57 0 0 1 15.222 7Zm.8 2a10.211 10.211 0 0 1 .476 3 10.211 10.211 0 0 1-.476 3H7.976a10.211 10.211 0 0 1-.476-3 10.211 10.211 0 0 1 .476-3ZM9.4 2.356A19.676 19.676 0 0 0 6.574 7H3.353A10.031 10.031 0 0 1 9.4 2.356ZM2 12a9.986 9.986 0 0 1 .461-3H5.9a12.016 12.016 0 0 0-.4 3 12.016 12.016 0 0 0 .4 3H2.461A9.986 9.986 0 0 1 2 12Zm1.353 5h3.221A19.676 19.676 0 0 0 9.4 21.644 10.031 10.031 0 0 1 3.353 17Zm5.425 0h6.444A19.614 19.614 0 0 1 12 21.588 19.57 19.57 0 0 1 8.778 17Zm5.827 4.644A19.676 19.676 0 0 0 17.426 17h3.221a10.031 10.031 0 0 1-6.042 4.644ZM22 12a9.986 9.986 0 0 1-.461 3H18.1a12.016 12.016 0 0 0 .4-3 12.016 12.016 0 0 0-.4-3h3.437A9.986 9.986 0 0 1 22 12Zm-4.574-5a19.676 19.676 0 0 0-2.821-4.644A10.031 10.031 0 0 1 20.647 7Z" })));
}

function GolfSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 10a21.7 21.7 0 0 0-2 .1V17a1 1 0 0 1-2 0l-.022-8.885 5.009-2.076a2 2 0 0 0 .271-3.4C13.226 2.61 8.9.212 8.9.212A2 2 0 0 0 6 2v8.922C2.392 12.115 0 14.361 0 17c0 3.925 5.271 7 12 7s12-3.075 12-7-5.271-7-12-7zm4 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" })));
}

function GraduationCapSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 8.48V20a1 1 0 0 1-2 0v-8.248l-7.4 3.536a5 5 0 0 1-2.577.694 5.272 5.272 0 0 1-2.7-.739l-7.38-3.513a3.691 3.691 0 0 1-.084-6.455c.027-.016.056-.031.084-.045L9.4 1.672a5.226 5.226 0 0 1 5.282.045l7.375 3.513A3.767 3.767 0 0 1 24 8.48zm-11.978 9.5a7.26 7.26 0 0 1-3.645-.972L4 14.919v2.7a5.007 5.007 0 0 0 3.519 4.778A15.557 15.557 0 0 0 12 23a15.557 15.557 0 0 0 4.481-.607A5.007 5.007 0 0 0 20 17.615v-2.691l-4.459 2.13a6.983 6.983 0 0 1-3.519.928z" })));
}

function GraphicTabletSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4H9v16h10a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM2 9v2H1a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0 5 5V4a5.006 5.006 0 0 0-5 5Z" })));
}

function GridAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 7h5v4H0zm5 6H0v4h5zm6 0H7v4h4zm0-2V7H7v4zm2 0h4V7h-4zm6 0h5V7h-5zM7 5h4V0H7zm6-5v5h4V0zm-2 24v-5H7v5zM5 0a5.006 5.006 0 0 0-5 5h5zm12 19h-4v5h4zm2 5a5.006 5.006 0 0 0 5-5h-5zM5 19H0a5.006 5.006 0 0 0 5 5zm8-6v4h4v-4zm6-8h5a5.006 5.006 0 0 0-5-5zm5 8h-5v4h5z" })));
}

function GridSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M42.667 373.333H96c23.564 0 42.667 19.102 42.667 42.667v53.333C138.667 492.898 119.564 512 96 512H42.667C19.103 512 0 492.898 0 469.333V416c0-23.564 19.103-42.667 42.667-42.667zM493.184 380.629a42.405 42.405 0 0 0-23.851-7.296H416c-23.564 0-42.667 19.102-42.667 42.667v53.333C373.333 492.898 392.436 512 416 512h53.333C492.898 512 512 492.898 512 469.333V416a42.666 42.666 0 0 0-18.816-35.371zM42.667 186.667H96c23.564 0 42.667 19.103 42.667 42.667v53.333c0 23.564-19.103 42.667-42.667 42.667H42.667C19.103 325.333 0 306.231 0 282.667v-53.333c0-23.565 19.103-42.667 42.667-42.667zM493.184 193.963a42.405 42.405 0 0 0-23.851-7.296H416c-23.564 0-42.667 19.103-42.667 42.667v53.333c0 23.564 19.103 42.667 42.667 42.667h53.333c23.564 0 42.667-19.103 42.667-42.667v-53.333a42.664 42.664 0 0 0-18.816-35.371zM42.667 0H96c23.564 0 42.667 19.103 42.667 42.667V96c0 23.564-19.103 42.667-42.667 42.667H42.667C19.103 138.667 0 119.564 0 96V42.667C0 19.103 19.103 0 42.667 0zM306.517 380.629a42.405 42.405 0 0 0-23.851-7.296h-53.333c-23.564 0-42.667 19.102-42.667 42.667v53.333c0 23.564 19.103 42.667 42.667 42.667h53.333c23.564 0 42.667-19.102 42.667-42.667V416a42.666 42.666 0 0 0-18.816-35.371zM306.517 193.963a42.405 42.405 0 0 0-23.851-7.296h-53.333c-23.564 0-42.667 19.103-42.667 42.667v53.333c0 23.564 19.103 42.667 42.667 42.667h53.333c23.564 0 42.667-19.103 42.667-42.667v-53.333a42.664 42.664 0 0 0-18.816-35.371zM306.517 7.296A42.405 42.405 0 0 0 282.666 0h-53.333c-23.564 0-42.667 19.103-42.667 42.667V96c0 23.564 19.103 42.667 42.667 42.667h53.333c23.564 0 42.667-19.103 42.667-42.667V42.667a42.665 42.665 0 0 0-18.816-35.371zM504.704 18.816A42.665 42.665 0 0 0 469.333 0H416c-23.564 0-42.667 19.103-42.667 42.667V96c0 23.564 19.103 42.667 42.667 42.667h53.333C492.898 138.667 512 119.564 512 96V42.667a42.405 42.405 0 0 0-7.296-23.851z" })));
}

function GuitarSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 11a1 1 0 0 1-.707-1.707l2.966-2.966a5.894 5.894 0 0 0-7.7.232 4.933 4.933 0 0 0-.445.508 2.283 2.283 0 0 1-1.554.959 7.055 7.055 0 0 0-4.5 2.038c-2.956 2.957-2.7 8.025.575 11.3A8.8 8.8 0 0 0 8.814 24a7.164 7.164 0 0 0 5.122-2.059 7.055 7.055 0 0 0 2.038-4.5 2.283 2.283 0 0 1 .959-1.554 4.933 4.933 0 0 0 .508-.445 5.9 5.9 0 0 0 .232-7.7l-2.966 2.966A1 1 0 0 1 14 11Zm-6.293 8.707a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414ZM10 17a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm1-3a1 1 0 1 1-1-1 1 1 0 0 1 1 1ZM23.482 3.018l-.214.214a6.035 6.035 0 0 1-2.62 1.534l-2.975 2.975a6.737 6.737 0 0 0-.642-.772 6.737 6.737 0 0 0-.772-.642l2.975-2.975a6.035 6.035 0 0 1 1.534-2.62l.214-.214a1.768 1.768 0 0 1 2.5 2.5Z" })));
}

function GymSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.942 6.837 20.76 4.654l.947-.947a1 1 0 1 0-1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105L9.76 15.655l5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105z" })));
}

function HamburgerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.938 17.884A7.007 7.007 0 0 1 16 24H8a7 7 0 0 1-6.912-5.949c.089.022.172.055.264.071a8 8 0 0 1 3.894 1.844 4.17 4.17 0 0 0 5.508 0A8 8 0 0 1 16 18.006h6a3.971 3.971 0 0 0 .938-.122ZM0 14.1a2.067 2.067 0 0 0 1.69 2.05 10 10 0 0 1 4.866 2.306 2.189 2.189 0 0 0 2.888 0A10 10 0 0 1 16 16.006h6a2 2 0 0 0 0-4H2.094A2.094 2.094 0 0 0 0 14.1ZM23 10v.148a3.984 3.984 0 0 0-1-.142H2.094A4.033 4.033 0 0 0 1 10.174V10A10.011 10.011 0 0 1 11 0h2a10.011 10.011 0 0 1 10 10ZM7 7a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm3-3a1 1 0 0 0-2 0 1 1 0 0 0 2 0Z" })));
}

function HandHoldingHeartSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 2.75c0 2.163-2.82 4.851-4.225 5.978a1.239 1.239 0 0 1-1.55 0C8.82 7.6 6 4.913 6 2.75A2.634 2.634 0 0 1 8.5 0 2.634 2.634 0 0 1 11 2.75 2.634 2.634 0 0 1 13.5 0 2.634 2.634 0 0 1 16 2.75Zm7.338 9.6-7.7 8.409A10 10 0 0 1 8.262 24H4a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h7.787a2.218 2.218 0 0 1 2.164 2.685 2.28 2.28 0 0 1-1.94 1.732L7.848 16A1 1 0 0 0 7 17.131a1 1 0 0 0 1.131.849l4.252-.6A4.234 4.234 0 0 0 16 13.213a4.081 4.081 0 0 0-.065-.638l3.542-3.737a2.606 2.606 0 0 1 3.671-.157 2.616 2.616 0 0 1 .19 3.664Z" })));
}

function HastagSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 7h-4.809l.8-5.865a1 1 0 1 0-1.982-.27L16.173 7H9.191l.8-5.865a1 1 0 1 0-1.982-.27L7.173 7H2a1 1 0 0 0 0 2h4.9l-.818 6H1a1 1 0 0 0 0 2h4.809l-.8 5.865a1 1 0 0 0 1.982.27L7.827 17h6.982l-.8 5.865a1 1 0 0 0 1.982.27L16.827 17H22a1 1 0 0 0 0-2h-4.9l.818-6H23a1 1 0 0 0 0-2Zm-7.918 8H8.1l.818-6H15.9Z" })));
}

function HatBirthdaySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.43 15.33 14.319 24h-3.914l8.071-11.47Zm-5.165-7.4L4.046 23.89a5.432 5.432 0 0 0 1.081.11h2.834l9.3-13.214Zm6.382 9.144L16.766 24h2.107a3.989 3.989 0 0 0 3.727-1.981 4.122 4.122 0 0 0-.465-4.241ZM15 3a3 3 0 1 0-4.592 2.534L1.861 17.778a4.122 4.122 0 0 0-.461 4.241 3.38 3.38 0 0 0 .813 1.006L14.046 6.184l-.454-.65A2.989 2.989 0 0 0 15 3Z" })));
}

function HeadSideThinkingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 11a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm11 2a1.959 1.959 0 0 1-2 2h-.33l-.219 1.655A5.014 5.014 0 0 1 16.494 21H16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-.971a3.886 3.886 0 0 0-.74-2.355A10.993 10.993 0 1 1 19.8 4.419C21.068 5.985 24 11.58 24 13Zm-9.159-3.053.993-.571a1 1 0 1 0-1-1.734l-.982.564A3.994 3.994 0 0 0 12 7.142V6a1 1 0 0 0-2 0v1.142a3.994 3.994 0 0 0-1.855 1.064l-.982-.564a1 1 0 1 0-1 1.734l.993.571A3.938 3.938 0 0 0 7 11a3.938 3.938 0 0 0 .159 1.053l-.993.571a1 1 0 0 0 1 1.734l.982-.564A3.994 3.994 0 0 0 10 14.858V16a1 1 0 0 0 2 0v-1.142a3.994 3.994 0 0 0 1.855-1.064l.982.564a1 1 0 1 0 1-1.734l-.993-.571A3.938 3.938 0 0 0 15 11a3.938 3.938 0 0 0-.159-1.053Z" })));
}

function HeadphonesSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 5 5 0 0 0 2-9.576Z" })));
}

function HeadsetSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6h-3a1 1 0 0 0 0 2h5a5 5 0 0 0 2-9.576V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22Z" })));
}

function HeartArrowSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 17a1 1 0 0 0-1 1v2.586l-2.994-2.994C21.2 15.25 23 12.547 23 9.987a5.745 5.745 0 0 0-5.5-5.949A5.39 5.39 0 0 0 13 6.57a5.39 5.39 0 0 0-4.5-2.532 5.13 5.13 0 0 0-2.428.619L1.707.293A1 1 0 0 0 .293 1.707L4.5 5.915A6.188 6.188 0 0 0 3 9.987c0 3.791 3.951 7.9 7.265 10.676a4.248 4.248 0 0 0 5.47 0 42.092 42.092 0 0 0 1.861-1.654L20.586 22H18a1 1 0 0 0 0 2h4a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1Z" })));
}

function HeartSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Z" })));
}

function HomeLocationAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.243 10.764a6 6 0 0 0-8.486 8.485l3.507 3.43a1.053 1.053 0 0 0 1.472 0l3.507-3.43a6 6 0 0 0 0-8.485ZM12 16.994a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" }),
        React.createElement("path", { d: "m21.8 5.579-7-4.724a4.981 4.981 0 0 0-5.6 0l-7 4.724A4.993 4.993 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5h4.754l-3.395-3.321A8 8 0 1 1 17.657 9.35a8 8 0 0 1 0 11.313L14.245 24H19a5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145Z" })));
}

function HomeLocationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 9a4 4 0 0 0-2.829 6.829l2.287 2.236a.78.78 0 0 0 1.083 0l2.3-2.244A4 4 0 0 0 12 9Zm0 4.992a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm9.8-8.413-7-4.724a4.979 4.979 0 0 0-5.6 0l-7 4.724A5 5 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145Zm-5.557 11.664L13.94 19.5a2.79 2.79 0 0 1-3.88 0l-2.3-2.245a6 6 0 1 1 8.478-8.493 6.008 6.008 0 0 1 .005 8.481Z" })));
}

function HomeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M256 319.841c-35.346 0-64 28.654-64 64v128h128v-128c0-35.346-28.654-64-64-64z" }),
        React.createElement("path", { d: "M362.667 383.841v128H448c35.346 0 64-28.654 64-64V253.26a42.665 42.665 0 0 0-12.011-29.696l-181.29-195.99c-31.988-34.61-85.976-36.735-120.586-4.747a85.355 85.355 0 0 0-4.747 4.747L12.395 223.5A42.669 42.669 0 0 0 0 253.58v194.261c0 35.346 28.654 64 64 64h85.333v-128c.399-58.172 47.366-105.676 104.073-107.044 58.604-1.414 108.814 46.899 109.261 107.044z" }),
        React.createElement("path", { d: "M256 319.841c-35.346 0-64 28.654-64 64v128h128v-128c0-35.346-28.654-64-64-64z" })));
}

function HourglassEndSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.551 12a12.556 12.556 0 0 0 4.406-7.449 3.943 3.943 0 0 0-.918-3.151A4.017 4.017 0 0 0 17 0H7.005a4.014 4.014 0 0 0-3.044 1.4 3.94 3.94 0 0 0-.917 3.158A12.522 12.522 0 0 0 7.445 12a12.522 12.522 0 0 0-4.4 7.444 3.94 3.94 0 0 0 .916 3.156A4.014 4.014 0 0 0 7.005 24H17a4.017 4.017 0 0 0 3.044-1.4 3.944 3.944 0 0 0 .918-3.156A12.557 12.557 0 0 0 16.551 12zm1.277 8.559A1 1 0 0 1 17 21H7a1 1 0 0 1-.928-1.374 14.856 14.856 0 0 1 4.6-5.656l.7-.559a1 1 0 0 1 1.245 0l.69.551a15.013 15.013 0 0 1 4.61 5.662 1 1 0 0 1-.089.935zM15.349 19h-6.7a14.962 14.962 0 0 1 3.271-3.462l.08-.066.071.055A15.3 15.3 0 0 1 15.349 19z" })));
}

function HourglassSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 24H7.005a4.02 4.02 0 0 1-3.045-1.4 3.945 3.945 0 0 1-.916-3.158A12.517 12.517 0 0 1 7.445 12a12.517 12.517 0 0 1-4.4-7.444A3.945 3.945 0 0 1 3.96 1.4 4.02 4.02 0 0 1 7.005 0H17a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155A12.556 12.556 0 0 1 16.551 12a12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1-.918 3.156A4.017 4.017 0 0 1 17 24z" })));
}

function IceCreamSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.39 3.068a5.023 5.023 0 0 1 9.22 0A6.5 6.5 0 0 0 12 6.051a6.515 6.515 0 0 0-4.61-2.983ZM11 9.5c-.246-6.289-9.467-5.743-8.965.524a53.989 53.989 0 0 0 8.706.937A4.427 4.427 0 0 0 11 9.5ZM17.5 5a4.5 4.5 0 0 0-4.24 5.964 52.563 52.563 0 0 0 8.705-.934A4.506 4.506 0 0 0 17.5 5ZM2.736 12.19c.014.029 6.283 10.143 6.283 10.143a3.521 3.521 0 0 0 5.96 0s6.269-10.109 6.282-10.133A54.989 54.989 0 0 1 12 13a55.474 55.474 0 0 1-9.264-.81Z" })));
}

function IceSkateSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 19a1 1 0 0 0-1 1 2 2 0 0 1-2 2h-4v-4h2.1a3.905 3.905 0 0 0 3.9-3.9 6.014 6.014 0 0 0-4.823-5.883l-1.741-.349-2.067 3.632a1 1 0 0 1-1.738-.99l1.738-3.051-.069-.019a1.967 1.967 0 0 1-.605-.231L9.674 9.047a1 1 0 0 1-1.039-1.709l3.043-1.849L11.614 5H8a1 1 0 0 1 0-2h3.352l-.052-.424A3 3 0 0 0 7.619.086L2.91 1.42A4.015 4.015 0 0 0 0 5.269V14a4 4 0 0 0 4 4h1v4H1a1 1 0 0 0 0 2h19a4 4 0 0 0 4-4 1 1 0 0 0-1-1zM7 18h7v4H7z" })));
}

function IdBadgeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4h-4V3a3 3 0 0 0-6 0v1H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5zm-9 14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm2-12a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm6 13h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm2-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM5 11h3v6H5z" })));
}

function InboxSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M448 213.333h-64c-23.564 0-42.667 19.103-42.667 42.667s-19.103 42.667-42.667 42.667h-85.333c-23.564 0-42.667-19.103-42.667-42.667S151.564 213.333 128 213.333H64c-35.346 0-64 28.654-64 64v85.333c.071 58.881 47.786 106.596 106.667 106.667h298.667c58.88-.07 106.596-47.785 106.666-106.666v-85.333c0-35.347-28.654-64.001-64-64.001zM64 170.667h384c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333H64c-11.782 0-21.333 9.551-21.333 21.333 0 11.781 9.551 21.333 21.333 21.333zM64 85.333h384c11.782 0 21.333-9.551 21.333-21.333S459.782 42.667 448 42.667H64c-11.782 0-21.333 9.551-21.333 21.333S52.218 85.333 64 85.333z" })));
}

function IncognitoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M4.043 8.071C4.5.566 8.706.026 8.9.006A.924.924 0 0 1 9 0a4.511 4.511 0 0 1 2.415.817 1.015 1.015 0 0 0 1.171 0A4.507 4.507 0 0 1 15 0a.924.924 0 0 1 .105.006c.189.02 4.4.56 4.852 8.065a.734.734 0 0 1-.457.729A20.312 20.312 0 0 1 12 10a20.316 20.316 0 0 1-7.5-1.2.734.734 0 0 1-.457-.729Zm18.65 1.918a.942.942 0 0 0-1.028-.035C20.564 10.6 17.538 12 12 12s-8.563-1.4-9.665-2.046a.942.942 0 0 0-1.028.035A2.632 2.632 0 0 0 0 12c0 3.69 6.194 4 12 4s12-.31 12-4a2.632 2.632 0 0 0-1.307-2.011ZM16.5 17a3.5 3.5 0 0 0-3.235 2.174 4.685 4.685 0 0 0-2.53 0 3.494 3.494 0 1 0 .193 2.033A3.52 3.52 0 0 1 12 21a3.514 3.514 0 0 1 1.072.207A3.5 3.5 0 1 0 16.5 17Z" })));
}

function IndentSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM1.707 16.245l2.974-2.974a1.092 1.092 0 0 0 0-1.542L1.707 8.755A1 1 0 0 0 0 9.463v6.074a1 1 0 0 0 1.707.708Z" })));
}

function InfinitySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 6c-2.972 0-4.943 2.227-6 3.882C10.943 8.227 8.972 6 6 6a6 6 0 0 0 0 12c2.972 0 4.943-2.227 6-3.882C13.057 15.773 15.028 18 18 18a6 6 0 0 0 0-12zM6 16a4 4 0 0 1 0-8c2.693 0 4.382 2.945 4.9 4-.514 1.06-2.192 4-4.9 4zm12 0c-2.693 0-4.382-2.945-4.9-4 .515-1.058 2.193-4 4.9-4a4 4 0 0 1 0 8z" })));
}

function InfoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12Zm0-19a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 5Zm-1 5h1a2 2 0 0 1 2 2v6a1 1 0 0 1-2 0v-6h-1a1 1 0 0 1 0-2Z" })));
}

function InteractiveSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 511.738 511.738",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m505.749 475.591-22.976-22.976-36.907-36.843 59.499-59.499c8.325-8.338 8.314-21.845-.024-30.17a21.34 21.34 0 0 0-7.763-4.945L306.24 251.741c-22.161-8.01-46.619 3.462-54.629 25.623a42.673 42.673 0 0 0-.006 28.99l69.611 191.339a21.333 21.333 0 0 0 15.403 13.547c1.521.331 3.073.495 4.629.491a21.333 21.333 0 0 0 15.083-6.251l59.435-59.605 36.843 36.843 22.976 22.976c8.475 8.185 21.98 7.95 30.165-.525 7.984-8.267 7.984-21.373 0-29.641l-.001.063z" }),
        React.createElement("path", { d: "M213.333 426.674C95.513 426.674 0 331.161 0 213.341S95.513.007 213.333.007 426.667 95.52 426.667 213.341c0 11.782-9.551 21.333-21.333 21.333S384 225.123 384 213.341c0-94.257-76.41-170.667-170.667-170.667S42.667 119.084 42.667 213.341s76.41 170.667 170.667 170.667c11.782 0 21.333 9.551 21.333 21.333s-9.552 21.333-21.334 21.333z" }),
        React.createElement("path", { d: "M172.459 333.234a21.331 21.331 0 0 1-8.171-1.621C99.003 304.497 68.06 229.592 95.175 164.306s102.021-96.228 167.306-69.113a128.004 128.004 0 0 1 69.188 69.294c4.689 10.809-.272 23.372-11.08 28.061-10.809 4.689-23.372-.272-28.061-11.08a21.262 21.262 0 0 1-.282-.682c-18.06-43.531-67.989-64.179-111.519-46.119s-64.179 67.989-46.119 111.519a85.335 85.335 0 0 0 46.044 46.088c10.887 4.505 16.06 16.983 11.554 27.87a21.333 21.333 0 0 1-19.746 13.176l-.001-.086z" })));
}

function InterliningSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 6h13a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2ZM23 11H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM23 18H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM6.087 6a.5.5 0 0 0 .353-.854L4 2.707a1 1 0 0 0-1.414 0L.147 5.146A.5.5 0 0 0 .5 6h1.794v12H.5a.5.5 0 0 0-.354.854l2.44 2.439a1 1 0 0 0 1.414 0l2.44-2.439A.5.5 0 0 0 6.087 18H4.294V6Z" })));
}

function InterrogationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1.93-7.494a1.982 1.982 0 0 0-.93 1.751V15a1 1 0 0 1-2 0v-.743a3.954 3.954 0 0 1 1.964-3.5 2 2 0 0 0 1-2.125 2.024 2.024 0 0 0-1.6-1.595A2 2 0 0 0 10 9a1 1 0 0 1-2 0 4 4 0 1 1 5.93 3.505Z" })));
}

function ItalicSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 0H7a1 1 0 0 0 0 2h5.354L9.627 22H4a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2h-5.354l2.727-20H20a1 1 0 0 0 0-2Z" })));
}

function JpgSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 18h4.54a6.957 6.957 0 0 1-1.591 2.465l-1.484 1.485A6.977 6.977 0 0 1 18 23.54V19a1 1 0 0 1 1-1ZM10.09 5.181h-.838L9.258 6.9h.832a.86.86 0 1 0 0-1.719ZM24 5v10.515c0 .163-.013.324-.024.485H19a3 3 0 0 0-3 3v4.976c-.161.011-.322.024-.485.024H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5ZM7 4.581a.65.65 0 1 0-1.3 0V7.92a.771.771 0 0 1-.778.781.818.818 0 0 1-.687-.459.651.651 0 1 0-1.162.587A2.109 2.109 0 0 0 4.921 10 2.069 2.069 0 0 0 7 7.937Zm5.229 1.46a2.126 2.126 0 0 0-2.139-2.11H9a1 1 0 0 0-1 1v4.444a.625.625 0 0 0 1.25 0V8.154h.84a2.126 2.126 0 0 0 2.139-2.113ZM17 7.681a.75.75 0 0 0-.75-.75h-.75a.5.5 0 0 0 0 1h.249v.084A.759.759 0 0 1 15 8.75a.742.742 0 0 1-.749-.75V5.932A.742.742 0 0 1 15 5.181a.778.778 0 0 1 .662.41.635.635 0 0 0 .555.34.628.628 0 0 0 .555-.921A2.022 2.022 0 0 0 15 3.932a1.991 1.991 0 0 0-2 1.985v2.1A1.991 1.991 0 0 0 15 10a2 2 0 0 0 2-1.984Z" })));
}

function KeySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.989 12.7V10a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h2.685a1.016 1.016 0 0 0 .922-.6 4.522 4.522 0 0 0 .376-2.377A3.491 3.491 0 0 0 20.466 0a4.537 4.537 0 0 0-3.208 1.329L9.35 9.235a7.368 7.368 0 0 0-3.881.048A7.5 7.5 0 0 0 7.505 24a7.654 7.654 0 0 0 .784-.041 7.529 7.529 0 0 0 6.428-5.429 7.334 7.334 0 0 0 .047-3.88l.65-.65a1.984 1.984 0 0 0 .575-1.3zM5.5 20A1.5 1.5 0 1 1 7 18.5 1.5 1.5 0 0 1 5.5 20z" })));
}

function KeyboardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 6h-6V3a1 1 0 0 0-2 0v3H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5Zm-9 4h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2Zm-5 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1-4H5a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm9 4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z" })));
}

function KiteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12.587 7 4.1 15.485 7.242 3.712a4.98 4.98 0 0 1 .636-1.42Zm4.7 6.757a4.98 4.98 0 0 0 1.42-.636L14 8.415 5.52 16.9Zm2.842-2.042A4.976 4.976 0 0 0 21 8.927V5a4.973 4.973 0 0 0-.832-2.752L15.415 7ZM16 0h-3.927a4.976 4.976 0 0 0-2.789.87L14 5.587 18.754.834A4.962 4.962 0 0 0 16 0Zm8 21.5V23a1 1 0 0 1-2 0v-1.6a3.347 3.347 0 0 0-2.88-3.379 3.228 3.228 0 0 0-2.7.973A15.143 15.143 0 0 1 5.613 24H3.627a3.423 3.423 0 0 1-3.3-1.743 3.081 3.081 0 0 1 .594-3.585l2.377-2.379a1 1 0 0 1 1.416 0 1 1 0 0 1 0 1.412L2.33 20.086A1.121 1.121 0 0 0 3.123 22h1.151a15.923 15.923 0 0 0 10.888-4.571A5.207 5.207 0 0 1 18.9 16a5.507 5.507 0 0 1 5.1 5.5Z" })));
}

function LabelSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2 7.177V19a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V7.177a3 3 0 0 0-1.543-2.622L12.486.126a1 1 0 0 0-.972 0L3.543 4.555A3 3 0 0 0 2 7.177ZM12 5.5A1.5 1.5 0 1 1 10.5 7 1.5 1.5 0 0 1 12 5.5Z" })));
}

function LaptopSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.848 16a2 2 0 0 0-1.527.708l-.247.292H9.925l-.246-.292A2 2 0 0 0 8.151 16H2.5A2.5 2.5 0 0 0 0 18.5 2.5 2.5 0 0 0 2.5 21h19a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5ZM3 14h5.151a3.993 3.993 0 0 1 2.649 1h2.4a4 4 0 0 1 2.647-1H21a4.909 4.909 0 0 1 1 .11V8a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v6.11A4.909 4.909 0 0 1 3 14Z" })));
}

function LassoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 0C6.935 0 2 4.037 2 9a7.544 7.544 0 0 0 .685 3.107 2.939 2.939 0 0 0-.435 3.072A6.976 6.976 0 0 0 0 20a3.888 3.888 0 0 0 4 4 1 1 0 0 0 .008-2A1.885 1.885 0 0 1 2 20a5.04 5.04 0 0 1 1.683-3.426 10.823 10.823 0 0 0 3.43.435c.3 0 .577-.007.843-.016A13.048 13.048 0 0 0 13 18c6.065 0 11-4.037 11-9s-4.935-9-11-9zm0 16a11.119 11.119 0 0 1-3.907-.712A14.454 14.454 0 0 0 7.1 11.876a3.042 3.042 0 0 0-2.691-.795A5.535 5.535 0 0 1 4 9c0-3.859 4.037-7 9-7s9 3.141 9 7-4.037 7-9 7z" })));
}

function LaughSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM6 10a2 2 0 0 1 4 0c0 1-.895 1-2 1s-2 0-2-1Zm10.973 5.285A5.469 5.469 0 0 1 12.007 19a5.5 5.5 0 0 1-4.966-3.715A1 1 0 0 1 8 14h8.01a1.02 1.02 0 0 1 .963 1.285ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" })));
}

function LayersSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.485 10.975 12 17.267 1.515 10.975A1 1 0 1 0 .486 12.69l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715Z" }),
        React.createElement("path", { d: "M22.485 15.543 12 21.834 1.515 15.543a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715ZM.485 8.357l9.984 5.991a2.97 2.97 0 0 0 3.062 0l9.984-5.991a1 1 0 0 0 0-1.714L13.531.652a2.973 2.973 0 0 0-3.062 0L.485 6.643a1 1 0 0 0 0 1.714Z" })));
}

function LayoutFluidSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M42.667 234.667h234.667C300.897 234.667 320 215.564 320 192V42.667C320 19.103 300.897 0 277.333 0H42.667C19.103 0 0 19.103 0 42.667V192c0 23.564 19.103 42.667 42.667 42.667zM504.704 18.816A42.665 42.665 0 0 0 469.333 0h-64c-23.564 0-42.667 19.103-42.667 42.667V192c0 23.564 19.102 42.667 42.667 42.667h64C492.898 234.667 512 215.564 512 192V42.667a42.405 42.405 0 0 0-7.296-23.851zM130.517 284.629a42.405 42.405 0 0 0-23.851-7.296h-64C19.103 277.333 0 296.436 0 320v149.333C0 492.898 19.103 512 42.667 512h64c23.564 0 42.667-19.103 42.667-42.667V320a42.67 42.67 0 0 0-18.817-35.371zM493.184 284.629a42.405 42.405 0 0 0-23.851-7.296H234.667C211.103 277.333 192 296.436 192 320v149.333C192 492.898 211.103 512 234.667 512h234.667C492.898 512 512 492.898 512 469.333V320a42.666 42.666 0 0 0-18.816-35.371z" })));
}

function LeafSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.119.872a2.985 2.985 0 0 0-2.405-.857C17.921.285 8.528 1.448 4.9 5.072a9.931 9.931 0 0 0-.671 13.281l11.06-11.06a1 1 0 0 1 1.414 1.414L5.647 19.767a9.929 9.929 0 0 0 13.281-.667c3.676-3.677 4.8-13.041 5.059-15.823a2.987 2.987 0 0 0-.868-2.405ZM4.9 19.1q.358.357.743.671l-3.94 3.94a1 1 0 0 1-1.41-1.418l3.94-3.94q.314.384.667.747Z" })));
}

function LetterCaseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7.4 5.553a1.041 1.041 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 14h5.764l1.724 3.447a1 1 0 1 0 1.789-.894ZM4.619 12 6.5 8.236 8.383 12ZM23 8a1 1 0 0 0-1 1v.026A4.948 4.948 0 0 0 19 8a5 5 0 0 0 0 10 4.948 4.948 0 0 0 3-1.026V17a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm-4 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" })));
}

function LifeRingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 12a4.969 4.969 0 0 1 .833-2.753L2.845 4.259a11.954 11.954 0 0 0 0 15.482l4.988-4.988A4.969 4.969 0 0 1 7 12ZM21.155 4.259l-4.988 4.988a4.966 4.966 0 0 1 0 5.506l4.988 4.988a11.954 11.954 0 0 0 0-15.482ZM12 17a4.969 4.969 0 0 1-2.753-.833l-4.988 4.988a11.954 11.954 0 0 0 15.482 0l-4.988-4.988A4.969 4.969 0 0 1 12 17ZM12 7a4.969 4.969 0 0 1 2.753.833l4.988-4.988a11.954 11.954 0 0 0-15.482 0l4.988 4.988A4.969 4.969 0 0 1 12 7Z" })));
}

function LineWidthSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 24h-19A2.5 2.5 0 0 1 0 21.5 2.5 2.5 0 0 1 2.5 19h19a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5zM24 14a2 2 0 0 0-2-2H2a2 2 0 0 0 0 4h20a2 2 0 0 0 2-2zm0-6.5A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5 1.5 1.5 0 0 0 1.5 9h21A1.5 1.5 0 0 0 24 7.5zM24 2a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h22a1 1 0 0 0 1-1z" })));
}

function LinkSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.06 512.06",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m295.407 368.363-69.589 69.589c-42.453 41.318-110.362 40.398-151.68-2.054-40.521-41.633-40.53-107.959-.021-149.604l69.589-69.653c8.33-8.336 8.325-21.846-.011-30.176-8.336-8.33-21.846-8.325-30.176.011l-69.568 69.653c-58.539 58.569-58.515 153.503.053 212.043s153.503 58.515 212.043-.053l69.589-69.589c8.185-8.475 7.95-21.98-.524-30.165-8.267-7.985-21.374-7.985-29.641 0h-.064zM468.186 43.969A148.882 148.882 0 0 0 362.18.001a148.97 148.97 0 0 0-105.984 43.883l-69.696 69.61c-8.336 8.33-8.341 21.84-.011 30.176 8.33 8.336 21.84 8.341 30.176.011l69.653-69.589a106.517 106.517 0 0 1 75.819-31.424c59.24.02 107.248 48.059 107.228 107.299a107.264 107.264 0 0 1-31.41 75.805l-69.589 69.589c-8.336 8.336-8.336 21.851 0 30.187 8.336 8.336 21.851 8.336 30.187 0l69.589-69.547c58.457-58.584 58.476-153.426.044-212.032z" }),
        React.createElement("path", { d: "m304.964 176.918-128 128c-8.475 8.185-8.709 21.691-.524 30.165s21.691 8.709 30.165.524c.178-.172.352-.346.524-.524l128-128c8.185-8.475 7.95-21.98-.525-30.165-8.266-7.984-21.372-7.984-29.64 0z" })));
}

function LipstickSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 24h-4a5.006 5.006 0 0 1-5-5v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a5.006 5.006 0 0 1-5 5zm3-12v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2zm-2-5V1.414A1.412 1.412 0 0 0 12.956.151l-2.622 1.311A2.412 2.412 0 0 0 9 3.62V7z" })));
}

function ListCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M4 22a2.982 2.982 0 0 1-2.122-.879L.334 19.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 1 1 1.378 1.448L6.1 21.138A2.964 2.964 0 0 1 4 22zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM4 14a2.982 2.982 0 0 1-2.122-.879L.293 11.536a1 1 0 0 1 1.414-1.414l1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.6-3.431a1 1 0 1 1 1.382 1.448L6.1 13.138A2.964 2.964 0 0 1 4 14zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM4 6a2.982 2.982 0 0 1-2.122-.879L.334 3.747a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04L8.311.276a1 1 0 0 1 1.378 1.448L6.1 5.138A2.964 2.964 0 0 1 4 6zm19-1H13a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z" })));
}

function ListSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" }),
        React.createElement("circle", { cx: 2, cy: 5, r: 2 }),
        React.createElement("circle", { cx: 2, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 2, cy: 19, r: 2 })));
}

function LocationAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.071 17.213a10.141 10.141 0 0 0 0-14.259 9.94 9.94 0 0 0-14.142 0 10.14 10.14 0 0 0 .026 14.284l3.584 3.339a4.92 4.92 0 0 0 6.9.018zm-5.729-2.564a3.023 3.023 0 0 1-2.683 0l-2-1A2.986 2.986 0 0 1 7 10.965V8a2.986 2.986 0 0 1 1.658-2.685l2-1a3.014 3.014 0 0 1 2.683 0l2 1A2.986 2.986 0 0 1 17 8v2.966a2.986 2.986 0 0 1-1.658 2.684zm1.607-6.955A1 1 0 0 1 15 8v2.966a.994.994 0 0 1-.553.895l-2 1a1.006 1.006 0 0 1-.895 0l-2-1A.994.994 0 0 1 9 10.965V8a1 1 0 0 1 .051-.3l2.18 1.09a1.72 1.72 0 0 0 1.538 0zM20 23a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1z" })));
}

function LockAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 10a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm11 2A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12zm-9-2a3 3 0 1 0-4 2.816V16a1 1 0 0 0 2 0v-3.184A3 3 0 0 0 15 10z" })));
}

function LockSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 8.424V7A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5 5 0 0 0-3-4.576ZM13 17a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm4-9H7V7a5 5 0 0 1 10 0Z" })));
}

function LuggageRollingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 8h-2V5A5 5 0 0 0 7 5v3H5a5.006 5.006 0 0 0-5 5v4a5 5 0 0 0 3 4.576V23a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 17v-4a5.006 5.006 0 0 0-5-5ZM9 5a3 3 0 0 1 6 0v3H9Zm7 8H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z" })));
}

function MagicWandSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m12.883 15.216-7.935 7.935a2.9 2.9 0 1 1-4.1-4.1l7.935-7.935zM17.1 6.9a2.967 2.967 0 0 0-4.1 0l-2.8 2.8 4.1 4.1 2.8-2.8a2.9 2.9 0 0 0 0-4.1zM4.863 5.145l1.55.442.442 1.55a1.191 1.191 0 0 0 2.29 0l.442-1.55 1.55-.442a1.191 1.191 0 0 0 0-2.29l-1.55-.442-.442-1.55a1.191 1.191 0 0 0-2.29 0l-.442 1.55-1.55.442a1.191 1.191 0 0 0 0 2.29zm12 12 1.55.442.442 1.55a1.191 1.191 0 0 0 2.29 0l.442-1.55 1.55-.442a1.191 1.191 0 0 0 0-2.29l-1.55-.442-.442-1.55a1.191 1.191 0 0 0-2.29 0l-.442 1.55-1.55.442a1.191 1.191 0 0 0 0 2.29zM17.756 4.5l1.355.387.389 1.357a1.042 1.042 0 0 0 2 0l.387-1.355 1.357-.389a1.042 1.042 0 0 0 0-2l-1.355-.387L21.5.756a1.042 1.042 0 0 0-2 0l-.387 1.355-1.357.389a1.042 1.042 0 0 0 0 2z" })));
}

function MakeupBrushSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.4 24A6.407 6.407 0 0 1 0 17.6c0-3.059 3.952-4.327 6.286-4.593a.989.989 0 0 1 .821.286l3.6 3.6a1 1 0 0 1 .287.82C10.727 20.048 9.458 24 6.4 24zm3.76-14.772-2.28 2.009 4.883 4.883 2.009-2.28zM23.284.716a2.452 2.452 0 0 0-3.337-.111L11.664 7.9l4.436 4.436 7.3-8.286a2.45 2.45 0 0 0-.116-3.334z" })));
}

function ManHeadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11.5a3.5 3.5 0 0 1-3.268 3.492A11.037 11.037 0 0 1 16 19.954V23a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3.047a11.264 11.264 0 0 1-4.542-4.572 1 1 0 1 1 1.776-.92C6.4 16.717 9.1 19 12 19c3.129 0 6.212-2.779 7.128-5.376a.994.994 0 0 1 1.117-.651A1.606 1.606 0 0 0 20.5 13a1.5 1.5 0 0 0 .27-2.972 1 1 0 0 1-.816-.878 7.962 7.962 0 0 0-4.013-6.11 12.8 12.8 0 0 1-1.128 2.541 15.09 15.09 0 0 1-4.956 4.467 1.5 1.5 0 1 1-1.724.84 15.806 15.806 0 0 1-7.257 1.1A1 1 0 0 1 .5 10.136a6.372 6.372 0 0 0 1.319-2.369C3.124 4.674 5.1 0 12 0a9.975 9.975 0 0 1 9.851 8.274A3.5 3.5 0 0 1 24 11.5Zm-8 0a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5Z" })));
}

function MapMarkerCrossSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M422.194 69.944C331.58-22.229 183.401-23.493 91.228 67.121s-93.437 238.793-2.823 330.966a228.137 228.137 0 0 0 3.414 3.402l83.892 77.509c44.849 43.874 116.481 44.054 161.549.404l84.934-78.487c91.392-91.397 91.392-239.575 0-330.971zm-86.615 214.271c8.452 8.163 8.686 21.633.522 30.084s-21.633 8.686-30.084.522a21.41 21.41 0 0 1-.522-.522l-48.786-48.786-48.787 48.787c-8.452 8.163-21.921 7.93-30.084-.522-7.964-8.245-7.964-21.317 0-29.562l48.786-48.786-48.786-48.786c-8.452-8.163-8.686-21.632-.523-30.084s21.632-8.686 30.084-.523c.177.171.352.346.523.523l48.786 48.786 48.786-48.786c8.163-8.452 21.633-8.686 30.084-.522s8.686 21.633.522 30.084a21.41 21.41 0 0 1-.522.522l-48.786 48.786 48.787 48.785z" })));
}

function MapMarkerHomeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M422.049 69.426c-91.066-91.918-239.404-92.609-331.322-1.542s-92.609 239.404-1.542 331.322c.71.716 1.424 1.428 2.143 2.135l83.98 77.548c44.886 43.938 116.602 44.127 161.719.426l85.023-78.57c91.488-91.492 91.488-239.826-.001-331.319zm-37.868 218.906c0 29.407-23.839 53.246-53.246 53.246H181.846c-29.407 0-53.246-23.839-53.246-53.246v-71.818a63.897 63.897 0 0 1 27.475-52.501l63.895-44.322c21.918-15.146 50.922-15.146 72.841 0l63.895 44.322a63.897 63.897 0 0 1 27.475 52.501v71.818zm-42.597-71.819v71.818c0 5.881-4.768 10.649-10.649 10.649h-31.948v-42.597c0-11.763-9.536-21.298-21.298-21.298h-42.597c-11.763 0-21.298 9.536-21.298 21.298v42.597h-31.948c-5.881 0-10.649-4.768-10.649-10.649v-71.818a21.301 21.301 0 0 1 9.158-17.507l63.895-44.322a21.427 21.427 0 0 1 24.28 0l63.895 44.322a21.3 21.3 0 0 1 9.159 17.507z" })));
}

function MapMarkerMinusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M422.147 69.996c-90.589-92.147-238.726-93.411-330.873-2.822S-2.137 305.9 88.452 398.047a237.916 237.916 0 0 0 3.413 3.401l83.868 77.487c44.837 43.862 116.448 44.041 161.504.404l84.91-78.465c91.366-91.371 91.366-239.507 0-330.878zm-80.358 186.709H171.628c-11.747 0-21.27-9.523-21.27-21.27s9.523-21.27 21.27-21.27h170.161c11.747 0 21.27 9.523 21.27 21.27s-9.523 21.27-21.27 21.27z" })));
}

function MapMarkerPlusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M422.194 69.944C331.58-22.229 183.401-23.493 91.228 67.121s-93.437 238.793-2.823 330.966a228.137 228.137 0 0 0 3.414 3.402l83.892 77.509c44.849 43.874 116.481 44.054 161.549.404l84.934-78.487c91.392-91.397 91.392-239.575 0-330.971zm-80.381 186.761h-63.828v63.828c0 11.75-9.526 21.276-21.276 21.276s-21.276-9.526-21.276-21.276v-63.828h-63.828c-11.75 0-21.276-9.526-21.276-21.276s9.526-21.276 21.276-21.276h63.828v-63.828c0-11.75 9.526-21.276 21.276-21.276s21.276 9.526 21.276 21.276v63.828h63.828c11.75 0 21.276 9.526 21.276 21.276s-9.526 21.276-21.276 21.276z" })));
}

function MapMarkerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 7a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm2.958 5.184L13.9 15.215a2.669 2.669 0 0 1-3.79 0L7.054 12.2a7.262 7.262 0 0 1-.012-10.1 6.9 6.9 0 0 1 9.916 0 7.257 7.257 0 0 1 0 10.084ZM16 7a4 4 0 1 0-4 4 4 4 0 0 0 4-4Zm4.753 2.2a9.1 9.1 0 0 1-2.364 4.384l-3.078 3.053a4.667 4.667 0 0 1-3.3 1.371 4.665 4.665 0 0 1-3.3-1.366l-3.063-3.023a9.2 9.2 0 0 1-2.365-4.311 5.066 5.066 0 0 0-1.745 1.083A4.946 4.946 0 0 0 0 14v4.075a5.013 5.013 0 0 0 3.6 4.8l2.87.9A4.981 4.981 0 0 0 7.959 24a5.076 5.076 0 0 0 1.355-.186l5.78-1.71a2.976 2.976 0 0 1 1.573 0l2.387.8A4 4 0 0 0 24 19.021v-5.149A5.009 5.009 0 0 0 20.753 9.2Z" })));
}

function MapSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 23.894a4.57 4.57 0 0 1-.527-.122l-2.869-.9a5.013 5.013 0 0 1-3.6-4.8V6A5 5 0 0 1 6.92 1.388l.08.037ZM20.68 1.167l-.021-.007-2.715-.9A4.951 4.951 0 0 0 17 .053v22.262l2.054.592A4 4 0 0 0 24 19.021V5.876a5.01 5.01 0 0 0-3.32-4.709ZM15 .19S9.157 1.863 9 1.88v22c.1-.021 6-1.636 6-1.636Z" })));
}

function MarkerTimeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm1.707 6.707a1 1 0 0 1-1.414 0l-1-1A1 1 0 0 1 11 11V9a1 1 0 0 1 2 0v1.586l.707.707a1 1 0 0 1 0 1.414zm6.07-9.485A11 11 0 1 0 4.25 18.805l3.942 3.643a5.445 5.445 0 0 0 7.594.019l3.991-3.689a11 11 0 0 0 0-15.556zM12 18a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" })));
}

function MarkerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 .042a9.992 9.992 0 0 0-9.981 9.98c0 2.57 1.99 6.592 5.915 11.954a5.034 5.034 0 0 0 8.132 0c3.925-5.362 5.915-9.384 5.915-11.954A9.992 9.992 0 0 0 12 .042ZM12 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" })));
}

function MarsDoubleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 11a6.953 6.953 0 0 0-1.4-4.184l3.4-3.4V5a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2h-3a1 1 0 0 0 0 2h1.586l-3.4 3.4A6.991 6.991 0 1 0 14 11Z" }),
        React.createElement("path", { d: "M22 6h-3a1 1 0 0 0 0 2h1.586l-3.413 3.413a6.975 6.975 0 0 0-1.189-.736c0 .108.016.214.016.323a9.01 9.01 0 0 1-9 9c-.109 0-.215-.013-.323-.016A6.994 6.994 0 0 0 20 17a6.923 6.923 0 0 0-1.411-4.175L22 9.414V11a1 1 0 0 0 2 0V8a2 2 0 0 0-2-2Z" })));
}

function MarsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M447.987 0H341.561c-11.755 0-21.285 9.53-21.285 21.285s9.53 21.285 21.285 21.285h97.614L293.754 187.991c-78.702-62.08-192.828-48.605-254.908 30.097S-9.758 410.916 68.944 472.996s192.828 48.605 254.908-30.097c51.995-65.917 51.995-158.893 0-224.81l145.42-145.421v97.614c0 11.756 9.53 21.285 21.285 21.285s21.285-9.53 21.285-21.285V63.856C511.842 28.589 483.253 0 447.987 0z" })));
}

function MaskCarnivalSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.514 10.972a3.825 3.825 0 0 0-3.028-.944 35.867 35.867 0 0 0-6.447 1.39C13.359 8.913 15.75 8 18 8a3 3 0 0 0 0-6 6.973 6.973 0 0 0-5 2.111V1a1 1 0 0 0-2 0v3.11A6.977 6.977 0 0 0 6 2a3 3 0 0 0 0 6c2.25 0 4.641.913 4.961 3.418a35.887 35.887 0 0 0-6.447-1.39 3.831 3.831 0 0 0-3.028.944 4.528 4.528 0 0 0-1.469 3.4C.017 23.062 4.852 24 6.931 24a5.38 5.38 0 0 0 3.09-1.185A3.667 3.667 0 0 1 12 21.967a3.667 3.667 0 0 1 1.979.848A5.383 5.383 0 0 0 17.069 24c2.079 0 6.914-.938 6.914-9.625a4.532 4.532 0 0 0-1.469-3.403Zm-16.358 8.3c-1.268.352-1.746-.964-2.135-3.114a1.167 1.167 0 0 1 1.316-1.423A37.247 37.247 0 0 1 11 16.6c-2.3.239-3.636 2.339-4.844 2.674Zm13.823-3.112c-.389 2.15-.867 3.466-2.135 3.114C16.636 18.939 15.3 16.839 13 16.6a37.247 37.247 0 0 1 5.663-1.858 1.167 1.167 0 0 1 1.316 1.418Z" })));
}

function MedicineSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 9V7H8v2a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5zm-1 8h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2zm.5-12h-7a2.5 2.5 0 0 1 0-5h7a2.5 2.5 0 0 1 0 5z" })));
}

function MegaphoneSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 16a1 1 0 0 1-.446-.105l-2-1a1 1 0 0 1 .894-1.79l2 1A1 1 0 0 1 23 16zm-1.553-9.1 2-1a1 1 0 1 0-.894-1.79l-2 1a1 1 0 0 0 .894 1.79zM24 10a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm-6 9V1a1 1 0 0 0-2 0c0 2.949-2.583 4-5 4H4a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h7c2.417 0 5 1.051 5 4a1 1 0 0 0 2 0zm-9.814-2H4a6 6 0 0 1-1.382-.167l2.5 5.582A2.671 2.671 0 0 0 7.558 24 2.462 2.462 0 0 0 9.8 20.528z" })));
}

function MehSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM6 10a2 2 0 0 1 4 0c0 1-.895 1-2 1s-2 0-2-1Zm10 7H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-6c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" })));
}

function MenuBurgerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 490.667 490.667",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M469.333 224h-448C9.551 224 0 233.551 0 245.333c0 11.782 9.551 21.333 21.333 21.333h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.333-21.333-21.333zM21.333 117.333h448c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551 74.667 0 84.218 0 96s9.551 21.333 21.333 21.333zM469.333 373.333h-448C9.551 373.333 0 382.885 0 394.667S9.551 416 21.333 416h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.334-21.333-21.334z" })));
}

function MenuDotsVerticalSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("circle", { cx: 256, cy: 42.667, r: 42.667 }),
        React.createElement("circle", { cx: 256, cy: 256, r: 42.667 }),
        React.createElement("circle", { cx: 256, cy: 469.333, r: 42.667 })));
}

function MenuDotsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 2, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2 }),
        React.createElement("circle", { cx: 22, cy: 12, r: 2 })));
}

function MicrophoneAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M9.34 10.793a6.179 6.179 0 0 1 .545-8.275l.633-.634a6.179 6.179 0 0 1 8.274-.544 5.946 5.946 0 0 1 2.146 4.343 6.01 6.01 0 0 1-1.751 4.5l-1 1a6.018 6.018 0 0 1-4.246 1.758q-.129 0-.258-.006a5.95 5.95 0 0 1-4.343-2.142ZM18.757 16a5.214 5.214 0 0 0-3.707 1.535A15.14 15.14 0 0 1 4.272 22h-1.15a1.121 1.121 0 0 1-.794-1.914l.7-.7a7.176 7.176 0 0 0 4.6-2.092l3.054-3.054a8 8 0 0 1-2.873-2.16 7.568 7.568 0 0 1-1.082-1.725L3.7 13.379a7.171 7.171 0 0 0-2.092 4.6l-.7.7A3.121 3.121 0 0 0 3.122 24h1.15a17.13 17.13 0 0 0 12.192-5.05A3.243 3.243 0 0 1 22 21.242V23a1 1 0 0 0 2 0v-1.758A5.249 5.249 0 0 0 18.757 16Z" })));
}

function MicrophoneSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 12a1 1 0 0 1-1 1H4.069a7.993 7.993 0 0 0 15.862 0H15a1 1 0 0 1 0-2h5V9h-5a1 1 0 0 1 0-2h4.931A7.993 7.993 0 0 0 4.069 7H9a1 1 0 0 1 0 2H4v2h5a1 1 0 0 1 1 1Z" }),
        React.createElement("path", { d: "M23 12a1 1 0 0 0-1 1 9.01 9.01 0 0 1-9 9h-2a9.011 9.011 0 0 1-9-9 1 1 0 0 0-2 0 11.013 11.013 0 0 0 11 11h2a11.013 11.013 0 0 0 11-11 1 1 0 0 0-1-1Z" })));
}

function MinusSmallSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" })));
}

function MinusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function MobileSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zM9 8a3 3 0 0 1 6 0v4a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0zm3 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-5H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-4-8V8a1 1 0 0 1 2 0v1z" })));
}

function ModeLandscapeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 16, cy: 8.011, r: 2.5 }),
        React.createElement("path", { d: "M23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM1 8a1 1 0 0 0 1-1V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5ZM18.707 17.293l-7.586-7.586a3 3 0 0 0-4.242 0L4.586 12A2 2 0 0 0 4 13.414V16a3 3 0 0 0 3 3h11a1 1 0 0 0 .707-1.707Z" })));
}

function ModePortraitSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM1 8a1 1 0 0 0 1-1V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" }),
        React.createElement("circle", { cx: 12, cy: 7, r: 4 }),
        React.createElement("path", { d: "M11 13a6.006 6.006 0 0 0-6 6 1 1 0 0 0 1 1h12a1 1 0 0 0 1-1 6.006 6.006 0 0 0-6-6Z" })));
}

function MoneySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5zM4 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 7a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm8 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-6 3a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" })));
}

function MoonSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 24a12.021 12.021 0 0 1-8.914-3.966 11.9 11.9 0 0 1-3.02-9.309A12.122 12.122 0 0 1 13.085.152a13.061 13.061 0 0 1 5.031.205 2.5 2.5 0 0 1 1.108 4.226c-4.56 4.166-4.164 10.644.807 14.41a2.5 2.5 0 0 1-.7 4.32A13.894 13.894 0 0 1 15 24Z" })));
}

function MountainsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 8a4 4 0 0 1 0-8 4 4 0 0 1 0 8Zm1.452 16h-8.863a2.548 2.548 0 0 1-2.221-1.26 2.463 2.463 0 0 1-.029-2.471l4.436-7.959a2.6 2.6 0 0 1 4.5 0l4.425 7.953a2.468 2.468 0 0 1-.028 2.475A2.551 2.551 0 0 1 21.452 24Zm-12.808-.246a4.45 4.45 0 0 1-.053-4.454l4.437-7.96a4.519 4.519 0 0 1 1.507-1.605l-1.591-2.98a3.344 3.344 0 0 0-5.885 0l-6.653 12.3A3.351 3.351 0 0 0 3.35 24H8.8a3.925 3.925 0 0 1-.156-.246Z" })));
}

function MouseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 3V1a1 1 0 0 0-2 0v2a7.008 7.008 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.008 7.008 0 0 0-7-7Zm0 7a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Z" })));
}

function MugAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h17a1 1 0 0 1 1 1Zm5-15c0 2.774-2.185 6-5 6h-1.612l-.3 1.821A4.984 4.984 0 0 1 12.152 20h-5.3a4.984 4.984 0 0 1-4.932-4.179L.056 4.657A4 4 0 0 1 4 0h11a3.968 3.968 0 0 1 3.983 4H19c3.131 0 5 1.5 5 4Zm-2 0c0-.5 0-2-3-2h-.279l-1 6H19c1.545 0 3-2.254 3-4Z" })));
}

function MusicAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.554.923A3.978 3.978 0 0 0 19.263.07l-9.184 1.722A5 5 0 0 0 6 6.706v9.85A3.959 3.959 0 0 0 4 16a4 4 0 1 0 4 4v-9.124A2 2 0 0 1 9.632 8.91l11.183-2.1A1 1 0 0 1 22 7.8v5.76a3.959 3.959 0 0 0-2-.56 4 4 0 1 0 4 4V4A3.987 3.987 0 0 0 22.554.923z" })));
}

function MusicSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5 23a5.006 5.006 0 0 0 5-5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8.026A4.948 4.948 0 0 0 19 13a5 5 0 1 0 5 5V6a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v8.026A4.948 4.948 0 0 0 5 13a5 5 0 0 0 0 10Z" })));
}

function NavigationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.643 8.35a1.19 1.19 0 0 1 .327 1.117l-2.648 7.043a.738.738 0 0 1-.692.49.747.747 0 0 1-.675-.378l-.908-2.976a1 1 0 0 0-.713-.679l-2.818-.7a.762.762 0 0 1-.027-1.433l7.06-2.8a1.156 1.156 0 0 1 1.094.316ZM24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12Zm-6.947-5.068a3.163 3.163 0 0 0-3.066-.824c-.039.011-7.228 2.864-7.228 2.864a2.76 2.76 0 0 0 .2 5.212l2.346.587.773 2.524A2.739 2.739 0 0 0 12.617 19h.044a2.738 2.738 0 0 0 2.532-1.786s2.693-7.165 2.7-7.2a3.18 3.18 0 0 0-.84-3.082Z" })));
}

function NetworkCloudSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 20h-8.184A3 3 0 0 0 13 18.184V14.02c1.344 0 2.52-.012 3.1-.023a5.23 5.23 0 0 0 1.065-.131 4.952 4.952 0 0 0 3.7-3.7 5.012 5.012 0 0 0-3.56-6l-.176-.043c-.3-.067-.452-.1-.588-.428a6 6 0 0 0-11.367.855 6.369 6.369 0 0 0-.056 2.733 3.5 3.5 0 0 0 .448 6.588A3.684 3.684 0 0 0 6.4 14c.653.018 2.549.026 4.521.026H11v4.161A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2z" })));
}

function NetworkSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 21a1 1 0 0 1-1 1h-8.184a2.982 2.982 0 0 1-5.632 0H1a1 1 0 0 1 0-2h8.184A3 3 0 0 1 11 18.184V14H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.586l.414.414a1.986 1.986 0 0 0 1.414.586h3.172A1.986 1.986 0 0 0 15 10.414l.414-.414H21a1 1 0 0 1 1 1 3 3 0 0 1-3 3h-6v4.184A3 3 0 0 1 14.816 20H23a1 1 0 0 1 1 1zM10 8.586l.414.414h3.172L14 8.586A1.986 1.986 0 0 1 15.414 8H21V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v4h5.586A1.986 1.986 0 0 1 10 8.586z" })));
}

function NotebookSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3.022V1a1 1 0 0 0-2 0v1.1a5 5 0 0 0-1-.1h-1V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H8a5 5 0 0 0-1 .1V1a1 1 0 0 0-2 0v2.022A4.979 4.979 0 0 0 3 7v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7a4.979 4.979 0 0 0-2-3.978zM12 17H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm4-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" })));
}

function OpacitySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M2.886 6.836a1 1 0 0 0 .829-.436 10.015 10.015 0 0 1 2.809-2.77 1 1 0 1 0-1.1-1.672A12 12 0 0 0 2.06 5.275a1 1 0 0 0 .826 1.561ZM2 12a10.112 10.112 0 0 1 .193-1.969 1 1 0 1 0-1.961-.392 12.135 12.135 0 0 0 0 4.728 1 1 0 0 0 .98.8 1.019 1.019 0 0 0 .2-.019 1 1 0 0 0 .784-1.177A10.1 10.1 0 0 1 2 12ZM6.528 20.372a10 10 0 0 1-2.81-2.766 1 1 0 0 0-1.656 1.123 11.993 11.993 0 0 0 3.37 3.315 1 1 0 0 0 1.1-1.672ZM12 0a12.107 12.107 0 0 0-2.171.2 1 1 0 0 0 .179 1.984 1.126 1.126 0 0 0 .181-.016A10.033 10.033 0 0 1 12 2v20a10.033 10.033 0 0 1-1.811-.164 1 1 0 0 0-.36 1.968A12.01 12.01 0 0 0 24 12 12.013 12.013 0 0 0 12 0Z" })));
}

function PackageSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 11v12a1 1 0 0 1-2 0v-5H2v5a1 1 0 0 1-2 0V12.5a5.5 5.5 0 0 1 11 0V16h3v-5a3 3 0 0 1 3-3h1v2a1 1 0 0 0 2 0V8h1a3 3 0 0 1 3 3zM9 3.5A3.5 3.5 0 1 0 5.5 7 3.5 3.5 0 0 0 9 3.5z" })));
}

function PaintBrushSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M2.748 24a2.755 2.755 0 0 1-2.719-3.151c.259-1.806 1.133-5.134 2.373-6.374A5.037 5.037 0 0 1 9.525 21.6c-1.239 1.239-4.567 2.113-6.374 2.372a2.741 2.741 0 0 1-.403.028zM23.1.9a3.139 3.139 0 0 0-4.33 0L8.27 11.4a6.976 6.976 0 0 1 4.33 4.338L23.1 5.23a3.068 3.068 0 0 0 0-4.33z" })));
}

function PaletteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.057 16.8.1.1a1.912 1.912 0 0 0 1.769.521 1.888 1.888 0 0 0 1.377-1.177 11.924 11.924 0 0 0 .777-4.544A12.155 12.155 0 0 0 12.5.007 12 12 0 0 0 .083 12a12.014 12.014 0 0 0 12 12c.338 0 .67-.022 1-.05a1 1 0 0 0 .916-1l-.032-3.588a3.567 3.567 0 0 1 6.09-2.562Zm-2.942-8.75a1.5 1.5 0 1 1-1.065 1.835 1.5 1.5 0 0 1 1.065-1.835Zm-9.23 8.9a1.5 1.5 0 1 1 1.065-1.835 1.5 1.5 0 0 1-1.065 1.835Zm0-6A1.5 1.5 0 1 1 8.95 9.115a1.5 1.5 0 0 1-1.065 1.835Zm5-3a1.5 1.5 0 1 1 1.065-1.835 1.5 1.5 0 0 1-1.065 1.835Z" })));
}

function PaperPlaneSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.308 512.308",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M505.878 36.682 110.763 431.69a63.318 63.318 0 0 0 27.413 6.4h67.669a21.187 21.187 0 0 1 15.083 6.251l36.672 36.651a106.043 106.043 0 0 0 75.157 31.317 107.276 107.276 0 0 0 34.261-5.653c38.05-12.475 65.726-45.46 71.403-85.099l72.085-342.4a63.12 63.12 0 0 0-4.628-42.475zM433.771 1.652 92.203 73.61C33.841 81.628-6.971 135.44 1.047 193.802a106.67 106.67 0 0 0 30.228 60.885l36.651 36.651a21.336 21.336 0 0 1 6.251 15.104v67.669a63.315 63.315 0 0 0 6.4 27.413L475.627 6.41a62.525 62.525 0 0 0-41.856-4.758z" })));
}

function PasswordSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 17a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-.293-9.707a1 1 0 0 0-1.414 0L12 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0 0-1.414zM22 16h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-.586-6 1.293-1.293a1 1 0 1 0-1.414-1.414L20 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L18.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L20 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414zM6 16H2a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm.707-8.707a1 1 0 0 0-1.414 0L4 8.586 2.707 7.293a1 1 0 1 0-1.414 1.414L2.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L4 11.414l1.293 1.293a1 1 0 1 0 1.414-1.414L5.414 10l1.293-1.293a1 1 0 0 0 0-1.414z" })));
}

function PauseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6.5 0A3.5 3.5 0 0 0 3 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 6.5 0ZM17.5 0A3.5 3.5 0 0 0 14 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 17.5 0Z" })));
}

function PawSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8.164 8a2.49 2.49 0 0 1-1.579-.594 4.832 4.832 0 0 1-1.557-3.261C4.785 1.651 6.145.181 7.614.017A2.651 2.651 0 0 1 9.6.611a4.177 4.177 0 0 1 1.376 2.9C11.2 5.834 9.962 8 8.164 8Zm-5.311 6a2.118 2.118 0 0 1-1.423-.594 5.041 5.041 0 0 1-1.4-3.261c-.22-2.494 1.006-3.964 2.331-4.128a2.234 2.234 0 0 1 1.786.594 4.364 4.364 0 0 1 1.241 2.9C5.589 11.834 4.359 14 2.853 14Zm12.983-6c-1.81 0-3.034-2.166-2.807-4.492a4.177 4.177 0 0 1 1.376-2.9 2.654 2.654 0 0 1 1.981-.591c1.469.164 2.829 1.634 2.586 4.128a4.835 4.835 0 0 1-1.557 3.262A2.494 2.494 0 0 1 15.836 8Zm5.217 6c-1.886 0-2.827-2.166-2.615-4.492a4.3 4.3 0 0 1 1.281-2.9 2.35 2.35 0 0 1 1.846-.594c1.368.164 2.635 1.634 2.409 4.128a4.976 4.976 0 0 1-1.451 3.262 2.23 2.23 0 0 1-1.47.596ZM16 24a4.865 4.865 0 0 1-2.447-.605 3.332 3.332 0 0 0-3.106 0C7.434 25.082 3.922 23.227 4 19c0-4.636 4.507-9 8-9s8 4.364 8 9c0 2.944-1.645 5-4 5Z" })));
}

function PencilSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1.172 19.119A4 4 0 0 0 0 21.947V24h2.053a4 4 0 0 0 2.828-1.172L18.224 9.485l-3.709-3.709ZM23.145.855a2.622 2.622 0 0 0-3.71 0l-3.506 3.507 3.709 3.709 3.507-3.506a2.622 2.622 0 0 0 0-3.71Z" })));
}

function PharmacySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24a4 4 0 0 1-4-4v-4H4a4 4 0 0 1 0-8h4V4a4 4 0 0 1 8 0v4h4a4 4 0 0 1 0 8h-4v4a4 4 0 0 1-4 4z" })));
}

function PhoneCallSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11a1 1 0 0 1-1-1 8.008 8.008 0 0 0-8-8 1 1 0 0 1 0-2 10.011 10.011 0 0 1 10 10 1 1 0 0 1-1 1Zm-3-1a6 6 0 0 0-6-6 1 1 0 1 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0Zm2.183 12.164.91-1.049a3.1 3.1 0 0 0 0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1 3.1 0 0 0-4.281.006l-1.906 1.606a12.784 12.784 0 0 1-6.932-6.944l1.6-1.9a3.1 3.1 0 0 0 .007-4.282S7.291.939 7.26.908A3.082 3.082 0 0 0 2.934.862l-1.15 1C-5.01 9.744 9.62 24.261 17.762 24a6.155 6.155 0 0 0 4.421-1.836Z" })));
}

function PhoneCrossSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.709 7.3a1 1 0 0 1-1.418 1.41L19.5 5.915l-2.8 2.8a1 1 0 1 1-1.4-1.423L18.086 4.5l-2.795-2.793A1 1 0 1 1 16.709.3L19.5 3.088 22.3.293a1 1 0 0 1 1.406 1.417L20.914 4.5Zm-3.054 7.56a3.1 3.1 0 0 0-4.28.006l-1.906 1.606a12.781 12.781 0 0 1-6.932-6.948l1.6-1.9a3.1 3.1 0 0 0 .006-4.28S7.291.939 7.261.907A3.085 3.085 0 0 0 2.933.861l-1.149 1c-7.72 8.209 12.2 28.138 20.4 20.3l.912-1.049a3.1 3.1 0 0 0 0-4.378l-2.441-1.878Z" })));
}

function PhonePauseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 7V1a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0Zm-3 1a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm6.094 8.738a510.87 510.87 0 0 0-2.437-1.883 3.1 3.1 0 0 0-4.283.007l-1.9 1.606a12.781 12.781 0 0 1-6.937-6.945l1.6-1.9a3.1 3.1 0 0 0 .005-4.28S7.292.94 7.26.909A3.08 3.08 0 0 0 2.933.862l-1.149 1c-7.721 8.209 12.2 28.139 20.4 20.3l.912-1.05a3.1 3.1 0 0 0-.002-4.373Z" })));
}

function PhoneSlashSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 1.711-22 22a1 1 0 0 1-1.414-1.418l5.043-5.041C1.147 12.594-2.236 6.317 1.784 1.868l1.15-1A3.081 3.081 0 0 1 7.26.911c.031.03 1.884 2.437 1.884 2.437a3.1 3.1 0 0 1-.007 4.281l-1.6 1.9a14.2 14.2 0 0 0 2.113 3.409L22.293.3a1 1 0 0 1 1.414 1.411Zm-3.051 13.147a3.1 3.1 0 0 0-4.281.006l-1.906 1.606c-.4-.17-.785-.359-1.157-.562a.983.983 0 0 0-1.162.178l-3.061 3.061a1 1 0 0 0 .1 1.509c4.408 2.976 9.111 5.042 12.99 1.51l.91-1.048a3.1 3.1 0 0 0 0-4.377 359.274 359.274 0 0 0-2.433-1.883Z" })));
}

function PhysicsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.563 1.437C20.189-.937 16.644-.358 12 3.137 7.357-.358 3.813-.938 1.437 1.437S-.358 7.356 3.137 12c-3.495 4.643-4.075 8.188-1.7 10.563A4.7 4.7 0 0 0 4.879 24C6.85 24 9.23 22.948 12 20.864 14.769 22.948 17.149 24 19.121 24a4.7 4.7 0 0 0 3.442-1.437c2.375-2.375 1.8-5.919-1.7-10.563 3.495-4.644 4.075-8.188 1.7-10.563zm-3.478.591a2.806 2.806 0 0 1 2.067.819c1.746 1.747.456 4.713-1.588 7.539-.838-.988-1.782-2.015-2.858-3.092s-2.106-2.021-3.094-2.86c1.898-1.373 3.86-2.406 5.473-2.406zM18.311 12c-1.011 1.22-2.082 2.361-3.016 3.3s-2.075 2-3.295 3.011C10.78 17.3 9.639 16.229 8.705 15.3S6.7 13.22 5.689 12C6.7 10.78 7.771 9.638 8.705 8.705S10.78 6.7 12 5.688A49.844 49.844 0 0 1 18.311 12zM2.848 2.848a2.8 2.8 0 0 1 2.067-.82c1.613 0 3.575 1.033 5.473 2.406-.988.839-2.016 1.783-3.094 2.86s-2.02 2.1-2.859 3.092C2.392 7.56 1.1 4.594 2.848 2.848zm0 18.3c-1.746-1.746-.456-4.713 1.587-7.538.839.988 1.783 2.015 2.859 3.092s2.1 2.023 3.089 2.861c-2.825 2.046-5.791 3.337-7.535 1.589zm18.3 0c-1.745 1.744-4.71.457-7.535-1.585.986-.838 2.014-1.787 3.089-2.861s2.02-2.1 2.858-3.092c2.048 2.83 3.34 5.796 1.592 7.542z" }),
        React.createElement("circle", { cx: 12, cy: 12, r: 2 })));
}

function PictureSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.122 12.536a3 3 0 0 0-4.244 0l-6.84 6.84A4.991 4.991 0 0 0 5 24h14a4.969 4.969 0 0 0 2.753-.833Z" }),
        React.createElement("circle", { cx: 18, cy: 6, r: 2 }),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v11.586l5.464-5.464a5 5 0 0 1 7.072 0l10.631 10.631A4.969 4.969 0 0 0 24 19V5a5.006 5.006 0 0 0-5-5Zm-1 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" })));
}

function PingPongSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 4.5a6.449 6.449 0 0 0-.995-3.44 9.7 9.7 0 0 1 11.256 1.679A9.409 9.409 0 0 1 24 9.758a10.5 10.5 0 0 1-3.121 7.117 11.212 11.212 0 0 1-2.623 1.963L8.787 9.373A6.481 6.481 0 0 0 11 4.5zm-2 0A4.5 4.5 0 1 0 4.5 9 4.505 4.505 0 0 0 9 4.5zm-1.941 5.973A6.463 6.463 0 0 1 4.5 11c-.158 0-.314-.013-.469-.024a9.44 9.44 0 0 0 .5 2.546A9.838 9.838 0 0 0 5.081 15a.483.483 0 0 1-.081.578l-3.814 2.664v.014a3.238 3.238 0 1 0 4.634 4.459l.01.006L8.4 19a.5.5 0 0 1 .6-.119 10.082 10.082 0 0 0 4.514 1.112 9.33 9.33 0 0 0 2.725-.34z" })));
}

function PizzaSliceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.424 21.974a4.943 4.943 0 0 1-5.176 1.874A15.857 15.857 0 0 1 .153 12.753a4.937 4.937 0 0 1 1.874-5.169 14.429 14.429 0 0 0 14.397 14.39Zm7.408-18.3L17.4 20H17A12.574 12.574 0 0 1 4 7v-.4L20.3.178a2.749 2.749 0 0 1 3.532 3.495ZM12 10a2 2 0 0 0-4 0 2 2 0 0 0 4 0Zm6.122 2.716 2.554-6.486c-4.26-1.492-6.618 4.676-2.554 6.486Z" })));
}

function PlaneSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 13.5a2.5 2.5 0 0 1-2.5 2.5h-4.036l-4.226 6.487A2.973 2.973 0 0 1 10.633 24a2.629 2.629 0 0 1-2.462-3.553L10.019 16H6a4 4 0 0 1-3.473-2.015L.2 10.16a1.443 1.443 0 0 1 .525-2 1.412 1.412 0 0 1 1.652.25l1.417 1.418A4 4 0 0 0 6.622 11H21.5a2.5 2.5 0 0 1 2.5 2.5ZM17.731 9l-4.5-7.487A2.972 2.972 0 0 0 10.629 0a2.63 2.63 0 0 0-2.462 3.553L10.285 9Z" })));
}

function PlayAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.823 11.708a.325.325 0 0 1 .169.292.314.314 0 0 1-.12.266L9.5 14.954a.337.337 0 0 1-.5-.293V9.339a.327.327 0 0 1 .168-.292.314.314 0 0 1 .157-.042.462.462 0 0 1 .228.068zM24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-7.008 7a2.332 2.332 0 0 0-1.226-2.055L10.488 7.31a2.337 2.337 0 0 0-3.5 2.029v5.322a2.313 2.313 0 0 0 1.164 2.021 2.368 2.368 0 0 0 1.186.323 2.2 2.2 0 0 0 1.1-.289l5.376-2.687A2.313 2.313 0 0 0 16.992 12z" })));
}

function PlaySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.492 7.969 10.954.975A5 5 0 0 0 3 5.005V19a4.994 4.994 0 0 0 7.954 4.03l9.538-6.994a5 5 0 0 0 0-8.062Z" })));
}

function PlayingCardsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.8 8.156-3.413 10.4a4.945 4.945 0 0 1-2.952 3.2A6.969 6.969 0 0 0 18 19V9a7.008 7.008 0 0 0-7-7H9.335A5.016 5.016 0 0 1 14.78.221l5.686 1.746A5.021 5.021 0 0 1 23.8 8.156zM16 9v10a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V9a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5zm-4 4a2 2 0 0 0-4 0 2 2 0 0 0-4 0c0 1.45 1.544 3.391 2.714 4.378a1.991 1.991 0 0 0 2.572 0C10.456 16.391 12 14.45 12 13z" })));
}

function PlusSmallSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 11h-4V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" })));
}

function PlusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M490.667 234.667H277.333V21.333C277.333 9.551 267.782 0 256 0c-11.782 0-21.333 9.551-21.333 21.333v213.333H21.333C9.551 234.667 0 244.218 0 256s9.551 21.333 21.333 21.333h213.333v213.333c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333V277.333h213.333c11.782 0 21.333-9.551 21.333-21.333.002-11.782-9.549-21.333-21.331-21.333z" })));
}

function PokerChipSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 12a6 6 0 1 0-6 6 6.006 6.006 0 0 0 6-6zm-3.369 1.108-1.893 2.523a.922.922 0 0 1-1.476 0l-1.893-2.523a1.848 1.848 0 0 1 0-2.216l1.893-2.523a.922.922 0 0 1 1.476 0l1.893 2.523a1.848 1.848 0 0 1 0 2.216zM9.565.249a12.031 12.031 0 0 1 4.87 0l-.888 3.057a.98.98 0 0 1-1.007.715C12.362 4.008 12.182 4 12 4s-.362.008-.54.021a.981.981 0 0 1-1.007-.715zm5.894 3.644.89-3.065a12.048 12.048 0 0 1 6.823 6.823l-3.065.89a.984.984 0 0 1-1.133-.447 8.044 8.044 0 0 0-3.068-3.068.984.984 0 0 1-.447-1.133zm4.52 7.567a.98.98 0 0 1 .715-1.007l3.057-.888a12.031 12.031 0 0 1 0 4.87l-3.057-.888a.98.98 0 0 1-.715-1.007c.013-.178.021-.358.021-.54s-.008-.362-.021-.54zM3.894 8.487l-3.017-.97A12.052 12.052 0 0 1 7.651.828l.89 3.065a.985.985 0 0 1-.448 1.134A8.046 8.046 0 0 0 5.052 8.05a.986.986 0 0 1-1.158.437zm10.678 15.228a11.748 11.748 0 0 1-5.144 0l.98-3.051a.978.978 0 0 1 1-.689 7.343 7.343 0 0 0 1.184 0 .978.978 0 0 1 1 .689zM4.025 12.592a.978.978 0 0 1-.689 1l-3.051.98a11.748 11.748 0 0 1 0-5.144l3.051.98a.978.978 0 0 1 .689 1 7.172 7.172 0 0 0 0 1.184zm16.082 2.867 3.065.89a12.052 12.052 0 0 1-6.689 6.774l-.97-3.017a.983.983 0 0 1 .437-1.158 8.049 8.049 0 0 0 3.024-3.041.983.983 0 0 1 1.133-.448zm-11.62 4.647-.97 3.017a12.058 12.058 0 0 1-6.64-6.64l3.017-.97a.983.983 0 0 1 1.158.438 8.052 8.052 0 0 0 3 3 .985.985 0 0 1 .435 1.155z" })));
}

function PortraitSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5v-3a7 7 0 0 1 14 0v3a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-7 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" }),
        React.createElement("circle", { cx: 12, cy: 8, r: 2 }),
        React.createElement("path", { d: "M12 16a5.006 5.006 0 0 0-5 5v3h10v-3a5.006 5.006 0 0 0-5-5Z" })));
}

function PoundSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 22H6.884A6.934 6.934 0 0 0 8 18v-4h7a1 1 0 0 0 0-2H8V8a6 6 0 0 1 12 0 1 1 0 0 0 2 0A8 8 0 0 0 6 8v4H4a1 1 0 0 0 0 2h2v4c0 1.2-.292 4-3 4a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z" })));
}

function PowerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.301 512.301",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M320.119 82.112a21.76 21.76 0 0 0 13.419 19.755c71.67 31.535 117.01 103.433 114.581 181.696-1.72 106.039-89.076 190.605-195.115 188.885-106.039-1.72-190.606-89.076-188.885-195.115.101-76.006 45.028-144.798 114.581-175.445a21.824 21.824 0 0 0 13.419-19.797c.019-11.782-9.518-21.348-21.3-21.367a21.335 21.335 0 0 0-8.012 1.548C43.898 113.824-10.705 252.01 40.848 370.919S230.586 544.43 349.495 492.878c118.909-51.552 173.511-189.738 121.959-308.647A234.67 234.67 0 0 0 349.495 62.272c-10.913-4.442-23.36.804-27.802 11.716a21.325 21.325 0 0 0-1.574 8.124z" }),
        React.createElement("path", { d: "M256.119 0c11.782 0 21.333 9.551 21.333 21.333v128c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333v-128C234.785 9.551 244.337 0 256.119 0z" })));
}

function PresentationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 12V5a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v7zM23 14H1a1 1 0 0 0 0 2h10v4H9a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2v-4h10a1 1 0 0 0 0-2z" })));
}

function PrintSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v1h14Z" }),
        React.createElement("rect", { x: 5, y: 15, width: 14, height: 9, rx: 3 }),
        React.createElement("path", { d: "M19 7H5a5.006 5.006 0 0 0-5 5v4a5 5 0 0 0 3 4.576V18a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v2.576A5 5 0 0 0 24 16v-4a5.006 5.006 0 0 0-5-5Zm-1 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" })));
}

function ProtractorSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.977 11.264C21.613 5.724 16.474 1.041 10.731 1A2 2 0 0 0 9 0H7a4 4 0 0 0-4 4v1h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v2h2a1 1 0 0 1 0 2H3v1a4 4 0 0 0 4 4h2a2 2 0 0 0 1.731-1H11a11.041 11.041 0 0 0 8.028-3.481 10.915 10.915 0 0 0 2.949-8.255zm-11.03 4.725A1 1 0 0 1 10 15V9a1 1 0 0 1 1-1 4 4 0 0 1 3.981 4.393 4.1 4.1 0 0 1-4.034 3.596z" })));
}

function PulseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zm0 10h-2.965l-1.7 2.555A1 1 0 0 1 13.5 14h-.062a1 1 0 0 1-.833-.551l-2.229-4.461-1.044 1.567A1 1 0 0 1 8.5 11H5a1 1 0 0 1 0-2h2.965l1.7-2.555A.987.987 0 0 1 10.562 6a1 1 0 0 1 .833.551l2.229 4.459 1.044-1.567A1 1 0 0 1 15.5 9H19a1 1 0 0 1 0 2z" })));
}

function PyramidSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.036 24H3.964a3.955 3.955 0 0 1-3.542-5.733L8.459 2.189A3.932 3.932 0 0 1 11.736.008a3.977 3.977 0 0 1 3.805 2.181l8.037 16.078A3.961 3.961 0 0 1 20.036 24Z", "data-name": "Capa 13" })));
}

function QuoteRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8 4H4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 2 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2ZM22 4h-4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 16 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2Z" })));
}

function RainbowSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 21a1 1 0 0 1-1-1v-5C21.449 1.73 2.546 1.741 2 15v5a1 1 0 0 1-2 0v-5C.661-.924 23.345-.911 24 15v5a1 1 0 0 1-1 1Zm-3-1v-5C19.6 4.4 4.4 4.407 4 15v5a1 1 0 0 0 2 0v-5c.253-7.932 11.75-7.926 12 0v5a1 1 0 0 0 2 0Zm-4 0v-5a4 4 0 0 0-8 0v5a1 1 0 0 0 2 0v-5a2 2 0 0 1 4 0v5a1 1 0 0 0 2 0Z" })));
}

function RaindropsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 24a6.006 6.006 0 0 1-6-6c0-1.56 1.2-4.045 3.552-7.388a3.016 3.016 0 0 1 4.9 0C17.805 13.955 19 16.44 19 18a6.006 6.006 0 0 1-6 6ZM5 11a5.006 5.006 0 0 1-5-5c0-1.26.842-2.855 2.574-4.877a3.2 3.2 0 0 1 4.852 0C9.158 3.143 10 4.738 10 6a5.006 5.006 0 0 1-5 5ZM19.5 9.964a4.505 4.505 0 0 1-4.5-4.5c0-1.091.7-2.506 2.146-4.326a3.02 3.02 0 0 1 4.708 0C23.3 2.958 24 4.373 24 5.464a4.505 4.505 0 0 1-4.5 4.5Z" })));
}

function RecSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("circle", { cx: 12, cy: 12, r: 12 })));
}

function ReceiptSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8 0a5.006 5.006 0 0 0-5 5v18a1 1 0 0 0 1.564.825l2.106-1.439 2.106 1.439a1 1 0 0 0 1.13 0l2.1-1.439 2.1 1.439a1 1 0 0 0 1.131 0l2.1-1.438 2.1 1.437A1 1 0 0 0 21 23V5a5.006 5.006 0 0 0-5-5Zm6 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm3-5a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z" })));
}

function RecordVinylSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm1-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" })));
}

function RectabgleVerticalSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.5 0h-7A5.506 5.506 0 0 0 3 5.5v13A5.506 5.506 0 0 0 8.5 24h7a5.506 5.506 0 0 0 5.5-5.5v-13A5.506 5.506 0 0 0 15.5 0ZM18 18.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 18.5v-13A2.5 2.5 0 0 1 8.5 3h7A2.5 2.5 0 0 1 18 5.5Z" })));
}

function RectangleHorizontalSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.5 3h-13A5.506 5.506 0 0 0 0 8.5v7A5.506 5.506 0 0 0 5.5 21h13a5.506 5.506 0 0 0 5.5-5.5v-7A5.506 5.506 0 0 0 18.5 3ZM21 15.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-7A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5Z" })));
}

function RectanglePanoramicSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.5 5h-13A5.506 5.506 0 0 0 0 10.5v3A5.506 5.506 0 0 0 5.5 19h13a5.506 5.506 0 0 0 5.5-5.5v-3A5.506 5.506 0 0 0 18.5 5Zm2.5 8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 13.5v-3A2.5 2.5 0 0 1 5.5 8h13a2.5 2.5 0 0 1 2.5 2.5Z" })));
}

function RecycleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m10.357 2.921-1.416 2.3a1 1 0 0 1-1.7-1.048l1.416-2.3a3.948 3.948 0 0 1 6.692 0l4.2 6.834.441-2.365a1 1 0 0 1 1.967.366l-.5 2.67a3 3 0 0 1-3.529 2.393l-2.63-.518a1 1 0 0 1 .386-1.962l2.133.421-4.174-6.791a1.934 1.934 0 0 0-3.286 0ZM23.409 14.98l-.968-1.572a1 1 0 1 0-1.7 1.048l.968 1.572a1.934 1.934 0 0 1 .041 1.98 1.91 1.91 0 0 1-1.688.992h-7.386l1.271-1.269a1 1 0 0 0-1.412-1.416L10.843 18A2.862 2.862 0 0 0 10 19.945v.062a2.885 2.885 0 0 0 .858 2.078l1.682 1.652a1 1 0 1 0 1.4-1.427L12.609 21h7.453a3.948 3.948 0 0 0 3.347-6.02ZM8.047 9.146a3 3 0 0 0-3.53-2.393l-2.629.518a1 1 0 1 0 .386 1.962l2.108-.415L.591 14.98A3.948 3.948 0 0 0 3.937 21H7.08a1 1 0 0 0 0-2H3.937a1.91 1.91 0 0 1-1.684-.992 1.934 1.934 0 0 1 .041-1.98L6.132 9.79l.446 2.394a1 1 0 0 0 1.967-.368Z" })));
}

function RedoAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.9 14.723a1 1 0 0 0 1.414 0l4.949-4.95a2.5 2.5 0 0 0 0-3.536l-4.95-4.949A1 1 0 0 0 16.9 2.7L21.2 7H5a5 5 0 0 0-5 5v7a5.006 5.006 0 0 0 5 5h14a1 1 0 0 0 0-2H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h16.212L16.9 13.309a1 1 0 0 0 0 1.414Z" })));
}

function RedoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17.244 4a2 2 0 0 0-3.414 1.414V7H9a9.01 9.01 0 0 0-9 9v7a1 1 0 0 0 2 0 6.006 6.006 0 0 1 6-6h5.83v1.586A2 2 0 0 0 17.244 20l5.879-5.879a3 3 0 0 0 0-4.242Z" })));
}

function ReflectSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 13H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2zm-4.066-5.874a2.427 2.427 0 0 0-1.284-2.731L9.668.428A3.3 3.3 0 0 0 6.4.433 2.809 2.809 0 0 0 5 2.914V6a3 3 0 0 0 3 3h8.318a2.538 2.538 0 0 0 2.616-1.874zM9.628 23.592l8.033-3.992a2.425 2.425 0 0 0 1.273-2.726A2.538 2.538 0 0 0 16.318 15H8a3 3 0 0 0-3 3v3.085a2.808 2.808 0 0 0 1.4 2.481A3.212 3.212 0 0 0 8.032 24a3.287 3.287 0 0 0 1.596-.408z" })));
}

function RefreshSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.016 512.016",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M256.008 42.675a214.017 214.017 0 0 1 151.936 64h-66.603c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333h88.384c21.874-.012 39.604-17.742 39.616-39.616V21.341c0-11.782-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333v44.331C321.782-28.795 160.169-20.343 65.702 84.55A255.597 255.597 0 0 0 1.075 232.541c-1.096 11.814 7.593 22.279 19.407 23.375.64.059 1.283.09 1.927.092 10.813.138 19.954-7.977 21.099-18.731C53.35 127.213 145.505 42.82 256.008 42.675zM489.629 256.008c-10.813-.138-19.954 7.977-21.099 18.731-10.18 117.214-113.454 203.982-230.669 193.801a213.037 213.037 0 0 1-133.789-63.199h66.603c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333H82.291c-21.868-.012-39.604 17.706-39.616 39.573v88.427c0 11.782 9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333v-44.331c104.893 94.467 266.505 86.015 360.972-18.878a255.592 255.592 0 0 0 64.628-147.992c1.096-11.814-7.593-22.279-19.407-23.375a21.63 21.63 0 0 0-1.905-.091z" })));
}

function ResizeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 18h2v1a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-3a5.006 5.006 0 0 1 5-5h1v2a5.006 5.006 0 0 0 5 5zm-3-5a3 3 0 0 0 3 3 3 3 0 0 0-3-3zM19 0h-8a5.006 5.006 0 0 0-5 5v6h2a4.969 4.969 0 0 1 2.753.833L16.586 6H14a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-2 0V7.414l-5.833 5.833A4.969 4.969 0 0 1 13 16v2h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5z" })));
}

function ResourcesSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.5 2h-8A2.5 2.5 0 0 0 11 4.5v.3L9.735 2.606a2.536 2.536 0 0 0-1.522-1.228 2.5 2.5 0 0 0-2.846 1.163L.375 11.187a2.538 2.538 0 0 0-.3 1.931A2.5 2.5 0 0 0 2.5 15h2.7a7.074 7.074 0 1 0 13.6 0h2.7a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 21.5 2ZM3.37 12l4.162-7.209L10.542 10a7.052 7.052 0 0 0-3.613 2ZM12 21a4.074 4.074 0 1 1 4.074-4.074A4.079 4.079 0 0 1 12 21Zm9-9h-3.929A7.473 7.473 0 0 0 14 10.138V5h7Z" })));
}

function RewindSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.42 20.656a3.77 3.77 0 0 1-2.233-.735l-6.641-4.87a3.784 3.784 0 0 1 0-6.1l6.641-4.87A3.783 3.783 0 0 1 14.2 6.853l3.782-2.774A3.784 3.784 0 0 1 24 7.13v9.74a3.784 3.784 0 0 1-6.021 3.051L14.2 17.147a3.79 3.79 0 0 1-3.777 3.509Z" })));
}

function RhombusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.466 8.465-6.93-6.931a5.008 5.008 0 0 0-7.072 0l-6.93 6.931a5 5 0 0 0 0 7.07l6.93 6.931a5.007 5.007 0 0 0 7.072 0l6.93-6.931a5 5 0 0 0 0-7.07Z" })));
}

function RingsWeddingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 8a7.974 7.974 0 0 0-5.974 2.7 6.882 6.882 0 0 0-1.495-.524L9.9 7.447a1 1 0 0 0-.043-.971A3.4 3.4 0 0 0 7 5a3.4 3.4 0 0 0-2.852 1.476 1 1 0 0 0-.043.971l1.364 2.727a7 7 0 1 0 5.866 12.312A8 8 0 1 0 16 8Zm-4.766 11.63a5.946 5.946 0 0 1-.678-6.137 4.946 4.946 0 0 1 .678 6.137ZM2 17a4.987 4.987 0 0 1 6.879-4.627 7.957 7.957 0 0 0 .966 8.73A4.99 4.99 0 0 1 2 17Zm14 5a5.961 5.961 0 0 1-3.278-.981 6.963 6.963 0 0 0-1.022-9.193A6 6 0 1 1 16 22ZM10.105 3.553l1-2a1 1 0 1 1 1.79.894l-1 2a1 1 0 0 1-1.79-.894Zm-9-1.106A1 1 0 0 1 2.9 1.553l1 2a1 1 0 0 1-1.79.894ZM6 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z" })));
}

function RoadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.924 18.134-2.464-14A4.992 4.992 0 0 0 16.536 0H7.451a4.992 4.992 0 0 0-4.926 4.138l-2.449 14A5 5 0 0 0 5 24h14a5 5 0 0 0 4.925-5.866ZM13 20a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0-7a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0-7a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z" })));
}

function RocketSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.351.649a2.188 2.188 0 0 0-2.31-.515l-.216.077A32.72 32.72 0 0 0 7.964 8.036a22.707 22.707 0 0 0-2.471 3.016c-1.4 2-1.666 4.189.054 5.91l.039.038-2.293 2.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L7 18.414l.038.039c1.721 1.72 3.915 1.452 5.91.054a22.707 22.707 0 0 0 3.016-2.471 32.72 32.72 0 0 0 7.825-12.862l.077-.216a2.186 2.186 0 0 0-.515-2.309zM11 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM2.363 13.038A2.362 2.362 0 0 1 0 10.676a2.413 2.413 0 0 1 .665-1.654 9.776 9.776 0 0 1 6.46-2.944c-.191.182-.386.355-.575.544A24.8 24.8 0 0 0 3.855 9.9a8.2 8.2 0 0 0-1.38 3.133zM11 21.525a8.185 8.185 0 0 0 3.133-1.38 24.739 24.739 0 0 0 3.283-2.695c.19-.189.362-.384.545-.575a9.782 9.782 0 0 1-2.945 6.46 2.41 2.41 0 0 1-1.653.665A2.363 2.363 0 0 1 11 21.637z" })));
}

function RoomServiceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 22a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM2 19h20a1 1 0 0 0 1-1v-1A11.01 11.01 0 0 0 13 6.051V4.723a2 2 0 1 0-2 0v1.328A11.01 11.01 0 0 0 1 17v1a1 1 0 0 0 1 1Z" })));
}

function RotateRightSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M489.797 256c-10.791-.141-19.924 7.939-21.099 18.667-9.959 117.754-113.491 205.138-231.245 195.179S32.315 356.354 42.275 238.6 155.766 33.462 273.52 43.421a213.972 213.972 0 0 1 134.592 63.245h-66.603c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333h88.384c21.874-.012 39.604-17.742 39.616-39.616V21.333C469.509 9.551 459.958 0 448.176 0c-11.782 0-21.333 9.551-21.333 21.333v44.331C321.548-28.425 159.915-19.341 65.826 85.954s-85.005 266.927 20.29 361.016 266.927 85.005 361.016-20.29a255.681 255.681 0 0 0 63.977-147.214c1.096-11.814-7.593-22.279-19.407-23.375a21.612 21.612 0 0 0-1.905-.091z" })));
}

function RugbySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M9 23.912c-.449.04-.9.068-1.331.068A8.106 8.106 0 0 1 1.9 22.1C.382 20.578-.174 17.909.083 15zM23.945 8.531c.155-2.725-.41-5.192-1.845-6.631s-3.9-2-6.629-1.847zm-.336 2.492a16.888 16.888 0 0 1-4.261 8.325 16.742 16.742 0 0 1-7.923 4.163L.475 12.561a16.771 16.771 0 0 1 4.177-7.909A16.888 16.888 0 0 1 12.977.391zm-5.9-.73-4-4a1 1 0 0 0-1.414 1.414L13.586 9 12 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L10.586 12 9 13.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 15 12 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 12 15 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414z" })));
}

function SadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM8 8a2 2 0 0 1 2 2c0 1-.895 1-2 1s-2 0-2-1a2 2 0 0 1 2-2Zm9.746 9.667a1 1 0 0 1-1.41.081A7.51 7.51 0 0 0 12 16a7.508 7.508 0 0 0-4.336 1.748 1 1 0 0 1-1.33-1.494A9.454 9.454 0 0 1 12 14a9.454 9.454 0 0 1 5.666 2.254 1 1 0 0 1 .08 1.413ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" })));
}

function SaladSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 15c0 5.077-7 9-9 9H9c-2 0-9-3.923-9-9a3.032 3.032 0 0 1 3.028-3h17.944A3.034 3.034 0 0 1 24 15ZM19.714 3.02c-.348.048-.727.116-1.115.193.295-.876 1-3.1-.6-3.213a1 1 0 0 0-1 1 3.978 3.978 0 0 1-1.311 3.034 6.983 6.983 0 0 0-2.383 1.355A4.459 4.459 0 0 0 12.244 10h1.342l2.707-2.707a1 1 0 0 1 1.414 1.414L16.414 10h4.251a21.019 21.019 0 0 0 1.316-4.713 2.007 2.007 0 0 0-2.267-2.267ZM10 10c-.134-5.277-7.867-5.273-8 0h8Zm.5-3.932a6.666 6.666 0 0 1 4.055-3.735 1.936 1.936 0 0 0 .432-1.105A4.017 4.017 0 0 0 11.5.034 3.8 3.8 0 0 0 9.5.8 3.938 3.938 0 0 0 7.234.01a3.954 3.954 0 0 0-2.886.877A3.96 3.96 0 0 0 3.1 4.75a6 6 0 0 1 7.4 1.318Z" })));
}

function ScaleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 5a5 5 0 0 1 10 0 2 2 0 0 1-2 2h-2.8l1.63-2.445a1 1 0 0 0-1.664-1.11L9.8 7H9a2 2 0 0 1-2-2zm12-3h-.674A6.987 6.987 0 0 1 19 5a4 4 0 0 1-4 4H8.466l.008-.013A3.79 3.79 0 0 1 5 5.215 7.432 7.432 0 0 1 5.747 2H5a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" })));
}

function SchoolBusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M.142 4A4 4 0 0 1 4 1h11a4 4 0 0 1 3.858 3zm8.8 16a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zm11 0a2.424 2.424 0 0 1 .058.5 2.5 2.5 0 0 1-5 0 2.424 2.424 0 0 1 .058-.5zM10 18h3V6h-3zm9-8V6h-4v4zM8 10V6H5v4zm12 2h-5v6h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4zM3 10V6H0v4zm5 2H0v3a3 3 0 0 0 3 3h5z" })));
}

function SchoolSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M4.343 11H0a5.006 5.006 0 0 1 5-5h6V1.636A1.637 1.637 0 0 1 13.33.154l3.2 1.5a1 1 0 0 1 0 1.7L13 5v1h6a5.006 5.006 0 0 1 5 5h-4.343a3 3 0 0 1-2.092-.849l-2.736-2.979a4.074 4.074 0 0 0-5.687.03l-2.678 2.919A3.017 3.017 0 0 1 4.343 11zM12 19a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1zm7.657-6H24v8a3 3 0 0 1-3 3h-6v-4a3 3 0 0 0-6 0v4H3a3 3 0 0 1-3-3v-8h4.343a4.994 4.994 0 0 0 3.565-1.495l2.678-2.919a2.07 2.07 0 0 1 2.8-.03l2.738 2.979A4.968 4.968 0 0 0 19.657 13zM6 21a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm8-4a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm7 8a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1zm-1-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z" })));
}

function ScissorsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 14a4.929 4.929 0 0 0-2.352.615L13.3 10.6l7.467-8.96A1 1 0 0 0 19.231.36L12 9.038 4.768.36a1 1 0 0 0-1.536 1.28L10.7 10.6l-3.348 4.015A4.941 4.941 0 0 0 5 14a5 5 0 1 0 5 5 4.947 4.947 0 0 0-1.112-3.1L12 12.162l3.111 3.738A4.955 4.955 0 0 0 14 19a5 5 0 1 0 5-5zM5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" })));
}

function ScreenSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 3H5a5.006 5.006 0 0 0-5 5v6a5.006 5.006 0 0 0 5 5h6v1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-1h6a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5Z" })));
}

function SearchAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 17.5a6.5 6.5 0 0 1 11-4.684V3a3 3 0 0 0-3-3H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10.5a6.5 6.5 0 0 1-6.5-6.5zM7 7a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1zm16.707 16.707a1 1 0 0 1-1.414 0L19.886 21.3a4.457 4.457 0 0 1-2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1-.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414z" })));
}

function SearchHeartSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M506.02 475.898 378.865 348.743c74.591-91.227 61.105-225.648-30.122-300.239S123.095-12.601 48.504 78.626s-61.105 225.649 30.122 300.239c78.578 64.249 191.54 64.249 270.118 0L475.898 506.02c8.463 8.173 21.949 7.939 30.122-.524 7.973-8.255 7.973-21.342 0-29.598zm-265.452-163.05c-15.533 12.371-37.553 12.371-53.086 0-36.491-29.312-79.97-73.26-79.97-115.865-1.089-36.439 27.475-66.907 63.908-68.168a61.584 61.584 0 0 1 42.605 17.383 61.588 61.588 0 0 1 42.605-17.383c36.433 1.262 64.997 31.73 63.908 68.168 0 42.605-43.478 86.553-79.97 115.865zm37.365-115.865c0 19.172-24.541 50.913-63.78 82.654-39.495-31.741-64.036-63.482-64.036-82.654-1.063-12.906 8.416-24.282 21.303-25.563 12.886 1.281 22.366 12.657 21.303 25.563 0 11.765 9.537 21.303 21.303 21.303 11.765 0 21.303-9.537 21.303-21.303-1.063-12.906 8.416-24.282 21.303-25.563 12.885 1.281 22.364 12.657 21.301 25.563z" })));
}

function SearchSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 511.786 511.786",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M213.382 426.694a212.415 212.415 0 0 0 134.976-48.171l127.275 127.253c8.475 8.185 21.98 7.95 30.165-.525 7.984-8.267 7.984-21.373 0-29.641L378.545 348.337c74.545-91.24 61.011-225.636-30.229-300.181S122.68-12.855 48.135 78.385-12.876 304.02 78.364 378.566a213.331 213.331 0 0 0 135.018 48.128z" })));
}

function SettingsSlidersSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.051 512.051",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.359 101.359h58.368c11.52 42.386 55.219 67.408 97.605 55.888a79.531 79.531 0 0 0 55.888-55.888h257.472c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333H233.22C221.7 16.306 178.001-8.716 135.615 2.804a79.531 79.531 0 0 0-55.888 55.888H21.359C9.577 58.692.026 68.243.026 80.025s9.551 21.334 21.333 21.334zM490.692 234.692h-58.368c-11.497-42.38-55.172-67.416-97.552-55.92a79.51 79.51 0 0 0-55.92 55.92H21.359c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333h257.493c11.497 42.38 55.172 67.416 97.552 55.92a79.51 79.51 0 0 0 55.92-55.92h58.368c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333zM490.692 410.692H233.22c-11.52-42.386-55.219-67.408-97.605-55.888a79.531 79.531 0 0 0-55.888 55.888H21.359c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333h58.368c11.52 42.386 55.219 67.408 97.605 55.888a79.531 79.531 0 0 0 55.888-55.888h257.472c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333z" })));
}

function SettingsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M1.607 18a3 3 0 0 0 4.1 1.1l.445-.257A8.977 8.977 0 0 0 9 20.487V21a3 3 0 0 0 6 0v-.513a8.977 8.977 0 0 0 2.848-1.646l.447.258a3 3 0 0 0 3-5.2l-.444-.256a9.1 9.1 0 0 0 0-3.29l.444-.256a3 3 0 1 0-3-5.2l-.445.257A8.977 8.977 0 0 0 15 3.513V3a3 3 0 0 0-6 0v.513a8.977 8.977 0 0 0-2.848 1.646L5.705 4.9a3 3 0 0 0-3 5.2l.444.256a9.1 9.1 0 0 0 0 3.29l-.444.256A3.006 3.006 0 0 0 1.607 18ZM12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z" })));
}

function ShareSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.629 512.629",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M.006 256.014c-.218 54.774 44.009 99.354 98.784 99.572a99.179 99.179 0 0 0 68-26.612l147.797 66.731a100.988 100.988 0 0 0-1.685 16.747c-.174 55.152 44.393 100.002 99.545 100.177s100.002-44.393 100.177-99.545-44.393-100.002-99.545-100.177a99.862 99.862 0 0 0-82.534 43.182L191.686 293.39a97.58 97.58 0 0 0 .107-74.411L330.46 155.96c31.225 45.161 93.148 56.457 138.309 25.232S525.225 88.045 494 42.884s-93.148-56.457-138.309-25.232a99.412 99.412 0 0 0-42.875 81.925 98.726 98.726 0 0 0 1.707 16.768L167.11 183.331c-39.939-37.503-102.718-35.528-140.221 4.411A99.203 99.203 0 0 0 .006 256.014z" })));
}

function ShieldCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.419 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743Zm-1.863 7.577-4.272 4.272a1.873 1.873 0 0 1-1.335.553h-.033a1.872 1.872 0 0 1-1.345-.6l-2.306-2.4a1 1 0 1 1 1.441-1.382l2.244 2.34L15.3 8.3a1 1 0 0 1 1.414 1.414Z" })));
}

function ShieldExclamationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743zM12 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0z" })));
}

function ShieldInterrogationSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM12 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm1.928-6.443A1.987 1.987 0 0 0 13 14a1 1 0 0 1-2 0 3.953 3.953 0 0 1 1.963-3.195 1.994 1.994 0 0 0 1-2.124 2.024 2.024 0 0 0-1.6-1.6A2 2 0 0 0 10 9.052a1 1 0 0 1-2 0 4 4 0 0 1 1.429-3.065 4 4 0 1 1 4.5 6.57Z" })));
}

function ShieldPlusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.419 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM15 12h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2Z" })));
}

function ShieldSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743Z" })));
}

function ShipSideSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.976 12h-5.352a3.091 3.091 0 0 0-1.716.52l-1.959 1.306a1 1 0 0 1-.555.168H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11.537a11.97 11.97 0 0 0 11.309-8.112A2.984 2.984 0 0 0 20.976 12ZM4 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM1 12a2.962 2.962 0 0 0-1 .184V9h10a1 1 0 0 0 0-2H0V4.861a1 1 0 0 1 1-1h2.392l-.321-1.218A2.106 2.106 0 0 1 5.107 0a2.107 2.107 0 0 1 2.037 1.569l.6 2.292H10A5.04 5.04 0 0 1 13.179 5a25.492 25.492 0 0 1 4.44 5h-1.974a5.224 5.224 0 0 0-2.822.84L11.092 12Z" })));
}

function ShipSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 21c0 1.626-1.718 3-3.75 3a4.208 4.208 0 0 1-2.75-1 4.317 4.317 0 0 1-5.5.014A4.295 4.295 0 0 1 6.513 23a4.212 4.212 0 0 1-2.763 1C1.718 24 0 22.626 0 21a1 1 0 0 1 2 0c0 .306.661 1 1.75 1a2.005 2.005 0 0 0 1.6-.684 1.973 1.973 0 0 0-.133-.189 12.188 12.188 0 0 1-3.187-6.183 3 3 0 0 1 2.006-3.388L11 9.279V19a1 1 0 0 0 2 0V9.279l6.931 2.275a3.006 3.006 0 0 1 2 3.388 12.152 12.152 0 0 1-3.156 6.183 1.932 1.932 0 0 0-.128.184A2.023 2.023 0 0 0 20.25 22c1.068 0 1.75-.656 1.75-1a1 1 0 0 1 2 0ZM12 7a5.839 5.839 0 0 1 1.624.378L20 9.471V7.4A3.4 3.4 0 0 0 16.6 4H15V3a3 3 0 0 0-6 0v1H7.4A3.4 3.4 0 0 0 4 7.4v2.063l6.379-2.085A5.753 5.753 0 0 1 12 7Z" })));
}

function ShopSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 13a5 5 0 0 1-8 0 4.956 4.956 0 0 1-7 .977V19a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5v-5.026A4.956 4.956 0 0 1 16 13Z" }),
        React.createElement("path", { d: "M21.7 3.131A3.975 3.975 0 0 0 17.792 0H17v3a1 1 0 0 1-2 0V0H9v3a1 1 0 0 1-2 0V0h-.792A3.975 3.975 0 0 0 2.3 3.132L1.022 8.9 1 10.02A3 3 0 0 0 7 10a1 1 0 0 1 2 0 3 3 0 1 0 6 0 1 1 0 0 1 2 0 3 3 0 1 0 6 0v-.893Z" })));
}

function ShoppingBagAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 6h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h11.686A6 6 0 1 1 24 14.537V9a3 3 0 0 0-3-3ZM8 6a4 4 0 0 1 8 0Z" }),
        React.createElement("path", { d: "M23 18h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" })));
}

function ShoppingBagSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 9a3 3 0 0 0-3-3h-3A6 6 0 0 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5ZM8 6a4 4 0 0 1 8 0Z" })));
}

function ShoppingCartAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 12a5.993 5.993 0 0 1-5.191-9H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.821-2h11.921a5 5 0 0 0 4.921-4.113l.238-1.319A5.984 5.984 0 0 1 18 12Z" }),
        React.createElement("circle", { cx: 7, cy: 22, r: 2 }),
        React.createElement("circle", { cx: 17, cy: 22, r: 2 }),
        React.createElement("path", { d: "M15 7h2v2a1 1 0 0 0 2 0V7h2a1 1 0 0 0 0-2h-2V3a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2Z" })));
}

function ShoppingCartCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 12a5.993 5.993 0 0 1-5.191-9H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.821-2h11.921a5 5 0 0 0 4.921-4.113l.238-1.319A5.984 5.984 0 0 1 18 12Z" }),
        React.createElement("circle", { cx: 7, cy: 22, r: 2 }),
        React.createElement("circle", { cx: 17, cy: 22, r: 2 }),
        React.createElement("path", { d: "M15.733 8.946a1.872 1.872 0 0 0 1.345.6h.033a1.873 1.873 0 0 0 1.335-.553l4.272-4.272A1 1 0 1 0 21.3 3.3l-4.187 4.194-1.234-1.324a1 1 0 0 0-1.463 1.366Z" })));
}

function ShoppingCartSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.713 4.077A2.993 2.993 0 0 0 20.41 3H4.242L4.2 2.649A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.82-2h11.92a5 5 0 0 0 4.921-4.113l.785-4.354a2.994 2.994 0 0 0-.65-2.456Z" }),
        React.createElement("circle", { cx: 7, cy: 22, r: 2 }),
        React.createElement("circle", { cx: 17, cy: 22, r: 2 })));
}

function ShuffleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.421 16.583-3.291-3.291a1 1 0 1 0-1.413 1.414L21.007 17a9.332 9.332 0 0 1-6.686-2.8.982.982 0 0 0-1.408.08l-.013.02a1 1 0 0 0 .075 1.382A11.177 11.177 0 0 0 21.01 19l-2.293 2.293A1 1 0 1 0 20.13 22.7l3.291-3.291a2 2 0 0 0 0-2.826Z" }),
        React.createElement("path", { d: "m21.007 7-2.29 2.29a.892.892 0 0 0-.054.082.992.992 0 0 0 1.467 1.332L21.836 9l1.586-1.585a2 2 0 0 0 .457-2.1 1.969 1.969 0 0 0-.458-.728L20.13 1.3a1 1 0 1 0-1.413 1.413l2.293 2.292c-4.933.012-7.637 2.674-10.089 5.474C8.669 7.937 6 5.4 1.487 5.046L1.006 5a1 1 0 0 0-1 1 1.02 1.02 0 0 0 1 1c.072 0 .287.033.287.033C5.189 7.328 7.425 9.522 9.6 12c-2.162 2.466-4.383 4.7-8.247 4.96l-.4.021a.994.994 0 1 0 .124 1.985c.156-.007.41-.013.535-.023 5.02-.387 7.743-3.6 10.171-6.409C14.235 9.7 16.551 7.018 21.007 7Z" })));
}

function SignInAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.9 0H5.1A5.055 5.055 0 0 0 0 5v3a1 1 0 0 0 2 0V5a3.054 3.054 0 0 1 3.1-3h13.8A3.054 3.054 0 0 1 22 5v14a3.054 3.054 0 0 1-3.1 3H5.1A3.054 3.054 0 0 1 2 19v-3a1 1 0 0 0-2 0v3a5.055 5.055 0 0 0 5.1 5h13.8a5.055 5.055 0 0 0 5.1-5V5a5.055 5.055 0 0 0-5.1-5Z" }),
        React.createElement("path", { d: "M3 12a1 1 0 0 0 1 1l13.188-.03-4.323 4.323a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 0-4.242l-4.584-4.586a1 1 0 0 0-1.414 1.414l4.262 4.263L4 11a1 1 0 0 0-1 1Z" })));
}

function SignInSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M149.333 469.333h-42.667c-35.346 0-64-28.654-64-64V106.667c0-35.346 28.654-64 64-64h42.667c11.782 0 21.333-9.551 21.333-21.333S161.115 0 149.333 0h-42.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h42.667c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.552-21.334-21.334-21.334z" }),
        React.createElement("path", { d: "m490.667 234.667-336.576.683a43.048 43.048 0 0 1 6.955-9.515l82.752-82.752c8.475-8.185 8.71-21.691.525-30.165-8.185-8.475-21.691-8.71-30.165-.525-.178.172-.353.347-.525.525l-82.795 82.752c-33.313 33.323-33.313 87.339 0 120.661l82.752 82.752c8.185 8.475 21.691 8.709 30.165.524 8.475-8.185 8.709-21.691.524-30.165a19.915 19.915 0 0 0-.524-.524l-82.752-82.752a42.887 42.887 0 0 1-6.208-8.149l335.872-.683c11.782 0 21.333-9.551 21.333-21.333 0-11.783-9.551-21.334-21.333-21.334z" })));
}

function SignOutAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.476 15a1 1 0 0 0-1 1v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2.476a3 3 0 0 1 3 3v3a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h2.476a5.006 5.006 0 0 0 5-5v-3a1 1 0 0 0-1-1Z" }),
        React.createElement("path", { d: "m22.867 9.879-4.586-4.586a1 1 0 1 0-1.414 1.414l4.263 4.263L6 11a1 1 0 0 0 0 2l15.188-.03-4.323 4.323a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 .002-4.242Z" })));
}

function SignOutSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "m487.06 195.669-82.752-82.752c-8.475-8.185-21.98-7.95-30.165.525-7.985 8.267-7.985 21.374 0 29.641l82.752 82.752a43.878 43.878 0 0 1 6.4 8.32c-.32 0-.576-.171-.896-.171l-334.592.683c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333l334.464-.683c.597 0 1.088-.299 1.664-.341a42.662 42.662 0 0 1-7.125 9.856l-82.752 82.752c-8.475 8.185-8.71 21.69-.525 30.165 8.185 8.475 21.69 8.71 30.165.525.178-.172.353-.347.525-.525l82.752-82.752c33.313-33.323 33.313-87.339 0-120.661h.085z" }),
        React.createElement("path", { d: "M149.374 469.333h-42.667c-35.346 0-64-28.654-64-64V106.667c0-35.346 28.654-64 64-64h42.667c11.782 0 21.333-9.551 21.333-21.333S161.157 0 149.374 0h-42.667C47.827.071.112 47.786.041 106.667v298.667C.112 464.214 47.827 511.93 106.708 512h42.667c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.334-21.334-21.334z" })));
}

function SignalAlt1Solid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3Zm1 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" })));
}

function SignalAlt2Solid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" })));
}

function SignalAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3Zm1 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" })));
}

function SkateboardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.835 2.165a7.389 7.389 0 0 0-10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zm-9.128 14.542-3 3a1 1 0 0 1-1.414-1.414l.793-.793L6.5 14.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 1.414zm7-7-3 3a1 1 0 0 1-1.414-1.414l.793-.793L13.5 7.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793L17.5 9.086l.793-.793a1 1 0 0 1 1.414 1.414z" })));
}

function SmartphoneSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 0H9a5.006 5.006 0 0 0-5 5v11h16V5a5.006 5.006 0 0 0-5-5ZM4 19a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-1H4Zm8 1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" })));
}

function SmileWinkSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM7 9h3a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10.666 6.746A9.454 9.454 0 0 1 12 18a9.454 9.454 0 0 1-5.666-2.254 1 1 0 0 1 1.332-1.492A7.509 7.509 0 0 0 12 16a7.508 7.508 0 0 0 4.336-1.748 1 1 0 0 1 1.33 1.494ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" })));
}

function SmileSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0ZM8 8a2 2 0 0 1 2 2c0 1-.895 1-2 1s-2 0-2-1a2 2 0 0 1 2-2Zm9.666 7.746A9.454 9.454 0 0 1 12 18a9.454 9.454 0 0 1-5.666-2.254 1 1 0 0 1 1.332-1.492A7.509 7.509 0 0 0 12 16a7.508 7.508 0 0 0 4.336-1.748 1 1 0 0 1 1.33 1.494ZM16 11c-1.105 0-2 0-2-1a2 2 0 0 1 4 0c0 1-.895 1-2 1Z" })));
}

function SnowflakeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m22.761 13.971-2.445.646a2.7 2.7 0 0 0-.984.491L16.738 13.6a5.042 5.042 0 0 0 0-3.2l2.594-1.509a2.7 2.7 0 0 0 .984.491s2.617.679 2.7.679a1 1 0 0 0 .256-1.961l-2.444-.647a.715.715 0 0 1-.508-.873l.647-2.444a1 1 0 1 0-1.934-.512l-.646 2.444a2.7 2.7 0 0 0-.061 1.1l-2.6 1.51A5 5 0 0 0 13 7.1v-3a2.707 2.707 0 0 0 .919-.6l1.788-1.788A1 1 0 0 0 14.293.293l-1.788 1.788a.718.718 0 0 1-1.01 0L9.707.293a1 1 0 0 0-1.414 1.414L10.081 3.5a2.707 2.707 0 0 0 .919.6v3a5 5 0 0 0-2.73 1.574l-2.6-1.51a2.7 2.7 0 0 0-.061-1.1L4.967 3.62a1 1 0 1 0-1.934.512l.647 2.444a.715.715 0 0 1-.508.873L.728 8.1a1 1 0 0 0 .254 1.966c.085 0 2.7-.679 2.7-.679a2.7 2.7 0 0 0 .984-.491L7.262 10.4a5.042 5.042 0 0 0 0 3.2l-2.594 1.508a2.7 2.7 0 0 0-.984-.491l-2.445-.646A1 1 0 0 0 .728 15.9l2.444.647a.715.715 0 0 1 .508.873l-.647 2.444a1 1 0 1 0 1.934.512l.646-2.444a2.7 2.7 0 0 0 .061-1.1l2.6-1.51A5 5 0 0 0 11 16.9v3a2.707 2.707 0 0 0-.919.6l-1.788 1.793a1 1 0 0 0 1.414 1.414l1.793-1.788a.718.718 0 0 1 1.01 0l1.788 1.788a1 1 0 0 0 1.414-1.414l-1.788-1.788A2.707 2.707 0 0 0 13 19.9v-3a5 5 0 0 0 2.73-1.573l2.6 1.51a2.7 2.7 0 0 0 .061 1.1l.646 2.444a1 1 0 0 0 1.934-.512l-.647-2.444a.715.715 0 0 1 .508-.873l2.444-.647a1 1 0 1 0-.511-1.933Z" })));
}

function SoapSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 17a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm6 0v1a6.006 6.006 0 0 1-6 6H8a6.006 6.006 0 0 1-6-6v-1a8.942 8.942 0 0 1 4.928-8h10.144A8.942 8.942 0 0 1 22 17zm-4 0a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 0 3-3zM17 6a2 2 0 0 0-2-2V2h4a1 1 0 0 0 0-2h-7a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v1h10z" })));
}

function SoupSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.861 24h-3.722a8.922 8.922 0 0 1-6.268-2.534A14.759 14.759 0 0 1 .164 15.15 4.011 4.011 0 0 1 4 10h16a4.012 4.012 0 0 1 3.838 5.15 14.741 14.741 0 0 1-3.708 6.316A8.918 8.918 0 0 1 13.861 24ZM16 6a4.381 4.381 0 0 0-1.293-3.121A2.4 2.4 0 0 1 14 1.168V1a1 1 0 1 0-2 0v.168a4.385 4.385 0 0 0 1.293 3.122A2.4 2.4 0 0 1 14 6a1 1 0 0 0 2 0Zm-4 1v-.308a4.387 4.387 0 0 0-1.292-3.121A2.4 2.4 0 0 1 10 1.864V1a1 1 0 0 0-2 0v.864a4.386 4.386 0 0 0 1.293 3.121A2.4 2.4 0 0 1 10 6.692V7a1 1 0 0 0 2 0Z" })));
}

function SpaSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 24c-7.851 0-12-1.383-12-4s4.149-4 12-4c7.963 0 12 1.346 12 4s-4.037 4-12 4zm.5-9C4.648 15 3 12.825 3 11s1.648-4 9.5-4c5.948 0 9.5 1.495 9.5 4s-3.552 4-9.5 4zM10 6C6.355 6 4 4.822 4 3s2.355-3 6-3 6 1.178 6 3-2.355 3-6 3z" })));
}

function SpeakerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" }),
        React.createElement("path", { d: "M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-4 4.5A1.5 1.5 0 1 1 10.5 6 1.5 1.5 0 0 1 12 4.5ZM12 20a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" })));
}

function SphereSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 6c6.841 0 12 2.579 12 6a12 12 0 0 0-24 0c0-3.421 5.159-6 12-6Z" }),
        React.createElement("ellipse", { cx: 12, cy: 12, rx: 10, ry: 4 }),
        React.createElement("path", { d: "M12 18c-6.841 0-12-2.579-12-6a12 12 0 0 0 24 0c0 3.421-5.159 6-12 6Z" })));
}

function SpinnerAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm1 19v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM4 12a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm20 0a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm-6.621-7.285 1-1.731a1 1 0 0 0-1.731-1l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.501zm-10.03 17.3 1-1.731a1 1 0 0 0-1.731-1l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.498zM5.079 7.987a1 1 0 0 0-.364-1.366l-1.731-1a1 1 0 0 0-1 1.731l1.731 1a1 1 0 0 0 1.366-.365zm17.3 10.031a1 1 0 0 0-.364-1.367l-1.731-1a1 1 0 0 0-1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .867-.499zM7.987 5.079a1 1 0 0 0 .365-1.366l-1-1.731a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.134zm10.031 17.3a1 1 0 0 0 .364-1.366l-1-1.731a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 1.367.364zm2.269-14.03 1.731-1a1 1 0 0 0-1-1.731l-1.731 1a1 1 0 0 0 1 1.731zm-17.3 10.03 1.731-1a1 1 0 0 0-1-1.731l-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .497-.132z" })));
}

function SpinnerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.056 512.056",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M268.437 512.055c96.436.246 184.764-53.923 228.267-139.989 5.035-10.652.482-23.369-10.17-28.404-10.204-4.824-22.4-.864-27.825 9.034-53.371 105.039-181.788 146.925-286.827 93.553-105.04-53.371-146.925-181.788-93.554-286.828S260.116 12.497 365.155 65.868a213.336 213.336 0 0 1 93.788 94.017c4.979 10.678 17.671 15.299 28.35 10.32s15.299-17.671 10.32-28.35a21.335 21.335 0 0 0-.59-1.17C433.306 14.471 279.337-36.191 153.124 27.526s-176.876 217.687-113.159 343.9c43.529 86.224 131.883 140.608 228.472 140.629z" })));
}

function SquareRootSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16.04 4a3.009 3.009 0 0 0-2.891 2.2L9.1 20.768A1.678 1.678 0 0 1 7.5 22a1.747 1.747 0 0 1-1.622-1.159l-2.793-7.68a3.461 3.461 0 0 0-2.312-2.189 1 1 0 0 1 .471-1.944 5.434 5.434 0 0 1 3.721 3.45l2.474 6.8 3.784-13.616A5.015 5.015 0 0 1 16.04 2H23a1 1 0 0 1 0 2zm7.56 8.2a1 1 0 0 0-1.4.2L20 15.333 17.8 12.4a1 1 0 0 0-1.6 1.2l2.55 3.4-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2-2.933 2.2 2.933a1 1 0 1 0 1.6-1.2L21.25 17l2.55-3.4a1 1 0 0 0-.2-1.4z" })));
}

function SquareSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.5 0h-13A5.506 5.506 0 0 0 0 5.5v13A5.506 5.506 0 0 0 5.5 24h13a5.506 5.506 0 0 0 5.5-5.5v-13A5.506 5.506 0 0 0 18.5 0ZM21 18.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5Z" })));
}

function StarOctogramSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21.77 8.948a1.238 1.238 0 0 1-.7-1.7 3.239 3.239 0 0 0-4.315-4.316 1.239 1.239 0 0 1-1.7-.7 3.239 3.239 0 0 0-6.1 0 1.238 1.238 0 0 1-1.7.7 3.239 3.239 0 0 0-4.321 4.317 1.237 1.237 0 0 1-.7 1.7 3.24 3.24 0 0 0 0 6.1 1.238 1.238 0 0 1 .705 1.7 3.238 3.238 0 0 0 4.311 4.317 1.238 1.238 0 0 1 1.7.7 3.239 3.239 0 0 0 6.1 0 1.238 1.238 0 0 1 1.7-.7 3.239 3.239 0 0 0 4.316-4.315 1.239 1.239 0 0 1 .7-1.7 3.239 3.239 0 0 0 0-6.1Z" })));
}

function StarSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m1.327 12.4 3.56 2.6-1.352 4.187A3.178 3.178 0 0 0 4.719 22.8a3.177 3.177 0 0 0 3.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 0 0 4.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 0 0-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.231a3.227 3.227 0 0 0-1.9 5.832Z" })));
}

function StatsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M5.5 21A2.5 2.5 0 0 1 3 18.5v-17A1.5 1.5 0 0 0 1.5 0 1.5 1.5 0 0 0 0 1.5v17A5.5 5.5 0 0 0 5.5 24h17a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z" }),
        React.createElement("path", { d: "M19.5 18a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-3 0v6a1.5 1.5 0 0 0 1.5 1.5ZM7.5 18A1.5 1.5 0 0 0 9 16.5v-6a1.5 1.5 0 0 0-3 0v6A1.5 1.5 0 0 0 7.5 18ZM13.5 18a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11a1.5 1.5 0 0 0 1.5 1.5Z" })));
}

function StethoscopeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 9a3 3 0 1 0-4 2.816V16a6 6 0 0 1-12 0v-.08A7.006 7.006 0 0 0 14 9V5a5.006 5.006 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3v4A5 5 0 0 1 2 9V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v4a7.006 7.006 0 0 0 6 6.92V16a8 8 0 0 0 16 0v-4.184A3 3 0 0 0 24 9z" })));
}

function StickerSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.782 12.173a4.08 4.08 0 0 1-.966 1.539l-9.1 9.1a4.026 4.026 0 0 1-1.539.95 10.3 10.3 0 0 1-.084-2.851 10.05 10.05 0 0 1 8.827-8.826 10.256 10.256 0 0 1 2.862.088zM10.1 20.7a12.063 12.063 0 0 1 10.6-10.6 12.357 12.357 0 0 1 3.228.078 12.034 12.034 0 1 0-13.752 13.744A12.306 12.306 0 0 1 10.1 20.7z" })));
}

function StopSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M106.667 0h298.667C464.244 0 512 47.756 512 106.667v298.667C512 464.244 464.244 512 405.333 512H106.667C47.756 512 0 464.244 0 405.333V106.667C0 47.756 47.756 0 106.667 0z" })));
}

function StopwatchSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.732 4.792A3.672 3.672 0 0 0 22 5a1 1 0 0 0 0-2c-.785 0-1-.215-1-1a1 1 0 0 0-2 0 3.513 3.513 0 0 0 .28 1.417l-.706.784A10.923 10.923 0 0 0 13 2.051V1a1 1 0 0 0-2 0v1.051A10.923 10.923 0 0 0 5.426 4.2l-.706-.783A3.513 3.513 0 0 0 5 2a1 1 0 0 0-2 0c0 .785-.215 1-1 1a1 1 0 0 0 0 2 3.672 3.672 0 0 0 1.268-.208l.672.747a11 11 0 1 0 16.12 0ZM12 15a1.994 1.994 0 0 1-1-3.723V7a1 1 0 0 1 2 0v4.277A1.994 1.994 0 0 1 12 15Z" })));
}

function SubtitlesSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 2H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5ZM5 11h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm8 7H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-5h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z" })));
}

function SunSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11h-4.08a6.924 6.924 0 0 0-.429-1.607l3.527-2.044a1 1 0 1 0-1-1.731l-3.53 2.047a7.062 7.062 0 0 0-1.149-1.15l2.046-3.531a1 1 0 0 0-1.731-1l-2.047 3.525A6.9 6.9 0 0 0 13 5.08V1a1 1 0 0 0-2 0v4.08a6.9 6.9 0 0 0-1.607.429L7.349 1.982a1 1 0 0 0-1.731 1l2.046 3.533a7.062 7.062 0 0 0-1.149 1.15l-3.53-2.047a1 1 0 1 0-1 1.731l3.524 2.044A6.924 6.924 0 0 0 5.08 11H1a1 1 0 0 0 0 2h4.08a6.924 6.924 0 0 0 .429 1.607l-3.527 2.044a1 1 0 1 0 1 1.731l3.53-2.047a7.062 7.062 0 0 0 1.149 1.15l-2.043 3.531a1 1 0 0 0 1.731 1l2.044-3.527A6.947 6.947 0 0 0 11 18.92V23a1 1 0 0 0 2 0v-4.08a6.947 6.947 0 0 0 1.607-.429l2.044 3.527a1 1 0 0 0 1.731-1l-2.046-3.531a7.062 7.062 0 0 0 1.149-1.15l3.53 2.047a1 1 0 1 0 1-1.731l-3.527-2.044A6.924 6.924 0 0 0 18.92 13H23a1 1 0 0 0 0-2Z" })));
}

function SunriseSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 12a1 1 0 0 1 1-1h4.071a6.948 6.948 0 0 1 .434-1.609L1.982 7.349a1 1 0 1 1 1-1.731L6.51 7.662A7.053 7.053 0 0 1 7.662 6.51L5.618 2.984a1 1 0 0 1 1.731-1L9.39 5.505A6.943 6.943 0 0 1 11 5.071V1a1 1 0 0 1 2 0v4.071a6.948 6.948 0 0 1 1.609.434l2.042-3.524a1 1 0 0 1 1.731 1L16.338 6.51a7.053 7.053 0 0 1 1.152 1.152l3.525-2.044a1 1 0 0 1 1 1.731L18.5 9.391A6.948 6.948 0 0 1 18.929 11H23a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm22.332 9.489a2.2 2.2 0 0 1-3.385-.811 1 1 0 0 0-1.889-.011 2.275 2.275 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.274 2.274 0 0 1-4.114 0 1 1 0 0 0-1.885 0 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.338 1.489A4.185 4.185 0 0 0 6 22.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.489Zm0-5a2.2 2.2 0 0 1-3.385-.811 1 1 0 0 0-1.889-.011 2.275 2.275 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.274 2.274 0 0 1-4.114 0 1 1 0 0 0-1.885 0 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.338 1.489A4.185 4.185 0 0 0 6 17.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.489Z" })));
}

function SurfingSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 .01c-3.812 0-8.125 2.038-11.539 5.451A38.467 38.467 0 0 0 .323 17.312a3.975 3.975 0 0 0 .708 4.243L15.293 7.293a1 1 0 1 1 1.414 1.414L2.449 22.965a3.941 3.941 0 0 0 4.236.713 38.333 38.333 0 0 0 11.854-8.139C21.952 12.126 23.99 7.813 23.99 4A3.632 3.632 0 0 0 20 .01z" })));
}

function SwordSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.414.587a2.022 2.022 0 0 0-1.941-.513 16.461 16.461 0 0 0-6.479 3.983l-9.476 9.475a14.58 14.58 0 0 0-4.376-1.522 1 1 0 0 0-.286 1.979 12.632 12.632 0 0 1 5.353 2.387L2.5 20.086l-.793-.793a1 1 0 1 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414l-.793-.793 3.709-3.71a12.609 12.609 0 0 1 2.387 5.354A1 1 0 0 0 11 24a.881.881 0 0 0 .144-.011 1 1 0 0 0 .847-1.13 14.515 14.515 0 0 0-1.522-4.376l9.475-9.476a16.52 16.52 0 0 0 4.01-6.574 1.994 1.994 0 0 0-.54-1.846z" })));
}

function SyringeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 5.293-5-5a1 1 0 0 0-1.414 1.414L19.086 3.5l-2.475 2.475a5 5 0 0 0-5.487-.265l2.583 2.583a1 1 0 1 1-1.414 1.414L9.586 7 8 8.586l2.707 2.707a1 1 0 1 1-1.414 1.414L6.586 10 5 11.588l2.705 2.705a1 1 0 1 1-1.414 1.414L3.806 13.22A6.963 6.963 0 0 0 3 16.485v3.1L.293 22.293a1 1 0 1 0 1.414 1.414L4.414 21h3.1a6.954 6.954 0 0 0 4.949-2.05l5.072-5.072a4.993 4.993 0 0 0 .482-6.478L20.5 4.914l1.793 1.793a1 1 0 0 0 1.414-1.414z" })));
}

function TabletSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M13 20a1 1 0 0 1-2 0v-1H2a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5h-9ZM17 0H7a5.006 5.006 0 0 0-5 5v12h20V5a5.006 5.006 0 0 0-5-5Z" })));
}

function TargetSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 13a1 1 0 0 1 0-2h2.949A12.006 12.006 0 0 0 13 .051v2.988a1 1 0 0 1-2 0V.051A12.006 12.006 0 0 0 .051 11H3a1 1 0 0 1 0 2H.051A12.006 12.006 0 0 0 11 23.949V21a1 1 0 0 1 2 0v2.949A12.006 12.006 0 0 0 23.949 13zm-6 0h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z" })));
}

function TaxiSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15.57 2H8.43a3.993 3.993 0 0 1 3.453-2h.234a3.993 3.993 0 0 1 3.453 2Zm4.93 12H20v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2h-.5a3.492 3.492 0 0 0-.5 6.949V22a2 2 0 0 0 4 0v-1h10v1a2 2 0 0 0 4 0v-1.049a3.458 3.458 0 0 0 3-3.421v-.03a3.5 3.5 0 0 0-3.5-3.5ZM1.628 12.491A5.96 5.96 0 0 1 4 12h16a5.96 5.96 0 0 1 2.372.491l-1.544-4.972A4.974 4.974 0 0 0 16.053 4H7.947a4.974 4.974 0 0 0-4.775 3.518Z" })));
}

function TennisSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M13.118.059a11.972 11.972 0 0 1 10.823 10.823A9.536 9.536 0 0 1 15.8 8.2 9.532 9.532 0 0 1 13.118.059zM22.552 13A11.529 11.529 0 0 1 11.106.048 11.941 11.941 0 0 0 .047 11.124a11.373 11.373 0 0 1 12.829 12.828 11.938 11.938 0 0 0 11.075-11.046 11.563 11.563 0 0 1-1.399.094zM8.239 15.761A9.413 9.413 0 0 0 .06 13.136a11.975 11.975 0 0 0 10.8 10.8 9.408 9.408 0 0 0-2.621-8.175z" })));
}

function TerraceSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M7 22v1a1 1 0 0 1-2 0v-1a1 1 0 0 0-1-1H2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0v3h2a3 3 0 0 1 3 3Zm16-7a1 1 0 0 0-1 1v3h-2a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1h2v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm-1.106-9.015L14.869.979a4.979 4.979 0 0 0-2.823-.97.981.981 0 0 1 .74.4c.009.005 5.32 6.479 5.32 6.479A5.024 5.024 0 0 1 19 9.734V10a1 1 0 0 1-2 0v-.266a2.986 2.986 0 0 0-.5-1.659L13 3.8V10a1 1 0 0 1-2 0V3.8L7.442 8.154A2.974 2.974 0 0 0 7 9.734V10a1 1 0 0 1-2 0v-.266a4.983 4.983 0 0 1 .835-2.766S11.2.414 11.217.406A.981.981 0 0 1 12 0a5.083 5.083 0 0 0-2.921.963L2.106 5.985A5.13 5.13 0 0 0 0 10.122 2.881 2.881 0 0 0 2.878 13H11v10a1 1 0 0 0 2 0V13h8.122A2.881 2.881 0 0 0 24 10.122a5.13 5.13 0 0 0-2.106-4.137Z" })));
}

function TestTubeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M5 1a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2h-1v5H7V2H6a1 1 0 0 1-1-1zm2 8v10a5 5 0 0 0 10 0V9z" })));
}

function TestSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 7a2 2 0 0 1-2-2V0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7zm-4.289 12.7L10.1 21.339a2.255 2.255 0 0 1-3.186 0l-.631-.639a1 1 0 0 1 1.434-1.394l.616.633a.249.249 0 0 0 .344-.009l1.612-1.63a1 1 0 1 1 1.422 1.4zM13 15v-1h-2v1a1 1 0 1 1-2 0v-4a3 3 0 0 1 6 0v4a1 1 0 1 1-2 0zm4 6h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm-4-10v1h-2v-1a1 1 0 0 1 2 0zm7.7-6H16V.3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5z" })));
}

function TextCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11.107 14.447a1 1 0 1 0 1.789-.894l-5.5-11a1 1 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 11h5.764ZM4.619 9 6.5 5.236 8.383 9Z" }),
        React.createElement("path", { d: "M23.707 11.293a1 1 0 0 0-1.414 0L13 20.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l10-10a1 1 0 0 0 0-1.414Z" })));
}

function TextSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm-2 10a1 1 0 0 1-1-1 1 1 0 0 0-1-1h-2v8h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V8H9a1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 1 1 0 0 1-1 1z" })));
}

function ThermometerHalfSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 17a7 7 0 1 1-12-4.889V5c.211-6.609 9.791-6.6 10 0v7.111A7.007 7.007 0 0 1 19 17Zm-4 0a3 3 0 0 0-2-2.828V8a1 1 0 0 0-2 0v6.172A3 3 0 1 0 15 17Z" })));
}

function ThumbsDownSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.951 12.3-.705-5A5.024 5.024 0 0 0 18.3 3H8v15.584l1.626 3.3a3.038 3.038 0 0 0 5.721-1.838L15.011 18H19a5 5 0 0 0 4.951-5.7ZM0 8v5a5.006 5.006 0 0 0 5 5h1V3H5a5.006 5.006 0 0 0-5 5Z" })));
}

function ThumbsUpSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.773 7.721A4.994 4.994 0 0 0 19 6h-3.989l.336-2.041a3.037 3.037 0 0 0-5.721-1.837L8 5.417V21h10.3a5.024 5.024 0 0 0 4.951-4.3l.705-5a4.994 4.994 0 0 0-1.183-3.979ZM0 11v5a5.006 5.006 0 0 0 5 5h1V6H5a5.006 5.006 0 0 0-5 5Z" })));
}

function ThumbtackSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.274 6.743 17.328.8a2.58 2.58 0 0 0-3.293-.349 2.5 2.5 0 0 0-.318 3.806l.592.591a.81.81 0 0 1 0 1.142l-2.1 2.1a1.506 1.506 0 0 1-1.431.393l-.82-.21a8.124 8.124 0 0 0-2.9-.219 3.368 3.368 0 0 0-2.837 2.256 3.509 3.509 0 0 0 .817 3.682L6.784 15.8.293 22.293a1 1 0 1 0 1.414 1.414l6.467-6.467 1.25 1.294A4.675 4.675 0 0 0 12.675 20a3.51 3.51 0 0 0 1.172-.2 3.143 3.143 0 0 0 2.106-2.7 8.093 8.093 0 0 0-.214-2.874l-.212-1.026a1.508 1.508 0 0 1 .4-1.414L18.016 9.7a.93.93 0 0 1 .593-.244.728.728 0 0 1 .52.217l.506.506a2.575 2.575 0 0 0 3.32.374 2.5 2.5 0 0 0 .319-3.806Z" })));
}

function TicketSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M6 24h2.13a2.02 2.02 0 0 0 1.941-1.532 2 2 0 0 1 3.858 0A2.02 2.02 0 0 0 15.87 24H18a3 3 0 0 0 3-3v-4h-4a1 1 0 0 1 0-2h4V5a5.006 5.006 0 0 0-5-5h-.13a2.02 2.02 0 0 0-1.941 1.532 2 2 0 0 1-3.858 0A2.02 2.02 0 0 0 8.13 0H8a5.006 5.006 0 0 0-5 5v10h4a1 1 0 0 1 0 2H3v4a3 3 0 0 0 3 3Zm5-9h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Z" })));
}

function TimeAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 20a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z" }),
        React.createElement("path", { d: "M14.035 20.015a5.97 5.97 0 0 1 9.524-4.803c1.773-6.385-1.966-12.998-8.35-14.771S2.213 2.406.44 8.791 2.406 21.79 8.79 23.563c2.1.583 4.319.583 6.419 0a5.951 5.951 0 0 1-1.174-3.548zM13 12.022a1 1 0 0 1-.294.708l-3.005 3.006a1.001 1.001 0 0 1-1.416-1.417l2.712-2.712V7.013a1.002 1.002 0 1 1 2.003 0z" })));
}

function TimeCheckSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18.951 23h-.033a1.872 1.872 0 0 1-1.344-.6l-1.918-1.881a1 1 0 0 1 .022-1.414l.003-.003a1 1 0 0 1 1.41.024l1.861 1.823 3.341-3.341a1 1 0 0 1 1.414 1.414l-3.421 3.421a1.87 1.87 0 0 1-1.335.557z" }),
        React.createElement("path", { d: "M14.035 20.015a5.97 5.97 0 0 1 9.524-4.803c1.773-6.385-1.966-12.998-8.35-14.771S2.213 2.406.44 8.791 2.406 21.79 8.79 23.563c2.1.583 4.319.583 6.419 0a5.951 5.951 0 0 1-1.174-3.548zM13 12.022a1 1 0 0 1-.294.708l-3.005 3.006a1.001 1.001 0 0 1-1.416-1.417l2.712-2.712V7.013a1.002 1.002 0 1 1 2.003 0z" })));
}

function TimeDeleteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.707 22.707a1 1 0 0 1-1.414 0l-1.414-1.414-1.415 1.414a1 1 0 0 1-1.439-1.389l.025-.025 1.414-1.414-1.414-1.415a1 1 0 0 1 1.389-1.439l.025.025 1.415 1.414 1.414-1.414a1 1 0 0 1 1.439 1.389l-.025.025-1.414 1.415 1.414 1.414a.996.996 0 0 1 .008 1.411c-.002.002-.003.004-.008.003z" }),
        React.createElement("path", { d: "M14.035 20.015a5.97 5.97 0 0 1 9.524-4.803c1.773-6.385-1.966-12.998-8.35-14.771S2.213 2.406.44 8.791 2.406 21.79 8.79 23.563c2.1.583 4.319.583 6.419 0a5.951 5.951 0 0 1-1.174-3.548zM13 12.022a1 1 0 0 1-.294.708l-3.005 3.006a1.001 1.001 0 0 1-1.416-1.417l2.712-2.712V7.013a1.002 1.002 0 1 1 2.003 0z" })));
}

function TimeFastSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM1 20h6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM1 16h4a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z" }),
        React.createElement("path", { d: "M12 0A12 12 0 0 0 0 12c0 .061.008.12.009.181A2.966 2.966 0 0 1 1 12h4a2.99 2.99 0 0 1 2.78 4.116 2.975 2.975 0 0 1 2 4 2.949 2.949 0 0 1 2.039 3.875c.061 0 .12.009.181.009a12 12 0 0 0 0-24zm3.707 15.707a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.586l2.707 2.707a1 1 0 0 1 0 1.414z" })));
}

function TimeForwardSixtySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14 18a3.009 3.009 0 0 0-1 .171V18a1 1 0 0 1 1-1 .985.985 0 0 1 .75.339 1 1 0 1 0 1.5-1.322A3 3 0 0 0 11 18v3a3 3 0 0 0 5.544 1.589 3.054 3.054 0 0 0 .121-3.009A2.942 2.942 0 0 0 14 18Zm.849 3.529A1 1 0 1 1 14 20a.954.954 0 0 1 .866.455 1.068 1.068 0 0 1-.017 1.074ZM21 15a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3Zm1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0Zm-10-8H8a1 1 0 0 1 0-2h3V7a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1ZM24 3v3a3 3 0 0 1-3 3h-3a1 1 0 0 1 0-2h2.637A9.991 9.991 0 1 0 8.364 21.318a1 1 0 0 1-.728 1.864A12 12 0 1 1 22 5.374V3a1 1 0 0 1 2 0Z" })));
}

function TimeForwardTenSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 15a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3zm1 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zM13 12V7a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z" }),
        React.createElement("path", { d: "M23 2a1 1 0 0 0-1 1v2.374A12 12 0 1 0 7.636 23.182 1.015 1.015 0 0 0 8 23.25a1 1 0 0 0 .364-1.932A10 10 0 1 1 20.636 7H18a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z" }),
        React.createElement("path", { d: "M15.383 15.076a1 1 0 0 0-1.09.217l-3 3a1 1 0 0 0 1.414 1.414L14 18.414V23a1 1 0 0 0 2 0v-7a1 1 0 0 0-.617-.924z" })));
}

function TimeForwardSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 11a1 1 0 0 0-1 1 10.034 10.034 0 1 1-2.9-7.021A.862.862 0 0 1 19 5h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V1a1 1 0 0 0-2 0v2.065A11.994 11.994 0 1 0 24 12a1 1 0 0 0-1-1z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1z" })));
}

function TimeHalfPastSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.181.207A1 1 0 0 0 13 1.19v2.879a8 8 0 1 0 0 15.862v2.879a1 1 0 0 0 1.181.983 11.991 11.991 0 0 0 0-23.586zM13 13.723V16a1 1 0 0 1-2 0v-2.277a1.984 1.984 0 0 1 0-3.446V7a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446zM2.986 4.968a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zm-1.6 3.987a1 1 0 1 1-1.17.8 1 1 0 0 1 1.167-.8zm8.742 12.868a1 1 0 1 1-1.17.794 1 1 0 0 1 1.167-.794zM6.008 1.9a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zM10.182.209A1 1 0 1 1 9 .98a1 1 0 0 1 1.182-.771zM.234 14.046a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zm1.681 3.963a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zM4.967 21a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17z" })));
}

function TimeOclockSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 14a1.994 1.994 0 0 1-1-3.723V7a1 1 0 0 1 2 0v3.277A1.994 1.994 0 0 1 12 14z" })));
}

function TimePastSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 0a11.972 11.972 0 0 0-8 3.073V1a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2H5a.854.854 0 0 1-.1-.021A9.987 9.987 0 1 1 2 12a1 1 0 0 0-2 0A12 12 0 1 0 12 0Z" }),
        React.createElement("path", { d: "M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Z" })));
}

function TimeQuarterPastSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.181.207A1 1 0 0 0 13 1.19v2.879A8.053 8.053 0 1 0 19.931 11h2.886a1 1 0 0 0 .983-1.181A12.047 12.047 0 0 0 14.181.207zM16 13h-2.277A1.994 1.994 0 1 1 11 10.277V7a1 1 0 0 1 2 0v3.277a2 2 0 0 1 .723.723H16a1 1 0 0 1 0 2zM2.986 4.968a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zm-1.6 3.987a1 1 0 1 1-1.17.8 1 1 0 0 1 1.167-.8zm8.742 12.868a1 1 0 1 1-1.17.794 1 1 0 0 1 1.167-.794zM6.008 1.9a1 1 0 1 1-1.17.8 1 1 0 0 1 1.17-.8zM10.182.209A1 1 0 1 1 9 .98a1 1 0 0 1 1.182-.771zM.234 14.046a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zm1.681 3.963a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zM4.967 21a1 1 0 1 1 .8 1.17 1 1 0 0 1-.8-1.17zm16.047-1.967a1 1 0 1 1 1.17-.8 1 1 0 0 1-1.17.799zM17.992 22.1a1 1 0 1 1 1.17-.8 1 1 0 0 1-1.17.8zm-3.939 1.656a1 1 0 1 1 1.17-.795 1 1 0 0 1-1.17.791zM23.712 14a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" })));
}

function TimeQuarterToSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.181.207A1 1 0 0 0 13 1.19v2.879A7.954 7.954 0 0 0 4.069 13H1.19a1 1 0 0 0-.983 1.181A12 12 0 1 0 14.181.207zM12 14a1.994 1.994 0 0 1-1.723-1H8a1 1 0 0 1 0-2h2.277a2 2 0 0 1 .723-.723V7a1 1 0 0 1 2 0v3.277A1.994 1.994 0 0 1 12 14zM9.972.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4.1 1.756a1 1 0 1 1-1 1 1 1 0 0 1 .997-1.002zM2.779 4.841a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-1.6 4.167a1 1 0 1 1-1 1 1 1 0 0 1 .998-1z" })));
}

function TimeTwentyFourSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.6 21.3c-.3.226-.619.464-.89.7H16a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1c0-1.5 1.275-2.456 2.4-3.3.75-.562 1.6-1.2 1.6-1.7a1 1 0 0 0-2 0 1 1 0 0 1-2 0 3 3 0 0 1 6 0c0 1.5-1.275 2.456-2.4 3.3zM23 15a1 1 0 0 0-1 1v3h-1a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h1v2a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1zm-10-3V7a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zM23 2a1 1 0 0 0-1 1v2.374A12 12 0 1 0 7.636 23.182 1.015 1.015 0 0 0 8 23.25a1 1 0 0 0 .364-1.932A10 10 0 1 1 20.636 7H18a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z" })));
}

function ToolCropSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 18h-3V9a5.006 5.006 0 0 0-5-5H6V1a1 1 0 0 0-2 0v3H1a1 1 0 0 0 0 2h3v9a5.006 5.006 0 0 0 5 5h9v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2Zm-5 0H9a3 3 0 0 1-3-3V6h9a3 3 0 0 1 3 3Z" })));
}

function ToolMarqueeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0v1a5.006 5.006 0 0 1-5 5zm5-18V5a5.006 5.006 0 0 0-5-5h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0zm0 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM7 23a1 1 0 0 0-1-1H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 1-1zM2 6V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0zm0 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM14.932 1a1 1 0 0 0-1-1H10a1 1 0 0 0 0 2h3.932a1 1 0 0 0 1-1zM15 23a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zm5-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" })));
}

function ToothSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M18 0a12.792 12.792 0 0 0-3.915.615A7.037 7.037 0 0 1 12 1 7.037 7.037 0 0 1 9.915.615 12.8 12.8 0 0 0 6 0a5.785 5.785 0 0 0-6 6c0 6.443 3.355 12.786 5.768 16.885A2.275 2.275 0 0 0 10 21.726v-6.619a2.075 2.075 0 0 1 1.664-2.08A2 2 0 0 1 14 15v6.726a2.275 2.275 0 0 0 4.232 1.159C20.646 18.785 24 12.442 24 6a5.785 5.785 0 0 0-6-6z" })));
}

function TornadoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-4a3 3 0 0 1 0-6h7a1 1 0 0 0 0-2H6C-1.932 11.747-1.926.25 6 0h14a4 4 0 0 1 0 8H6a1 1 0 0 1 0-2h14a2 2 0 0 0 0-4H6a4 4 0 0 0 0 8h13a3 3 0 0 1 0 6h-7a1 1 0 0 0 0 2h4a3 3 0 0 1 0 6Z" })));
}

function TrainSideSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23 22H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2ZM12 2.094V6h8.267A13.926 13.926 0 0 0 12 2.094ZM6 2v4h4V2Zm15.949 6H0v8a1 1 0 0 0 1 1h18.99a4 4 0 0 0 3.825-5.193A14.05 14.05 0 0 0 21.949 8ZM4 6V2H1a1 1 0 0 0-1 1v3Z" })));
}

function TrainSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 14c4.276 0 7.634-6.292 8.665-10.055a4.966 4.966 0 0 0-3.14-2.988A18.329 18.329 0 0 0 12 0a18.367 18.367 0 0 0-5.525.956 4.97 4.97 0 0 0-3.14 2.989C4.366 7.708 7.724 14 12 14ZM10 3h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm11 5.585C19.109 12.323 15.971 16 12 16s-7.109-3.677-9-7.415v7.592a5 5 0 0 0 1.325 3.39l-1.249 3.054a1 1 0 1 0 1.851.757L6 20.745A13.583 13.583 0 0 0 12 22a13.573 13.573 0 0 0 6-1.255l1.077 2.633a1 1 0 1 0 1.852-.757l-1.25-3.054A5 5 0 0 0 21 16.177ZM12 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" })));
}

function TransformSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M19 24h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0v1a5.006 5.006 0 0 1-5 5zm5-18V5a5.006 5.006 0 0 0-5-5h-1a1 1 0 0 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 0 0 2 0zM7 23a1 1 0 0 0-1-1H5a3 3 0 0 1-3-3v-1a1 1 0 0 0-2 0v1a5.006 5.006 0 0 0 5 5h1a1 1 0 0 0 1-1zM2 6V5a3 3 0 0 1 3-3h1a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v1a1 1 0 0 0 2 0zm14 6a4 4 0 1 0-4 4 4 4 0 0 0 4-4z" })));
}

function TrashSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M448 85.333h-66.133C371.66 35.703 328.002.064 277.333 0h-42.667c-50.669.064-94.327 35.703-104.533 85.333H64c-11.782 0-21.333 9.551-21.333 21.333S52.218 128 64 128h21.333v277.333C85.404 464.214 133.119 511.93 192 512h128c58.881-.07 106.596-47.786 106.667-106.667V128H448c11.782 0 21.333-9.551 21.333-21.333S459.782 85.333 448 85.333zM234.667 362.667c0 11.782-9.551 21.333-21.333 21.333-11.783 0-21.334-9.551-21.334-21.333v-128c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v128zm85.333 0c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333v-128c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v128zM174.315 85.333c9.074-25.551 33.238-42.634 60.352-42.667h42.667c27.114.033 51.278 17.116 60.352 42.667H174.315z" })));
}

function TreatmentSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 2h-.171A3.006 3.006 0 0 0 13 0h-2a3.006 3.006 0 0 0-2.829 2H8a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5zM9 7h2V5a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V9H9a1 1 0 0 1 0-2zm3 13H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm4-4H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" })));
}

function TreeChristmasSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m20.44 16.855-1.481-2.221a2.214 2.214 0 0 0 .619-3.072l-2.091-3.135a2.234 2.234 0 0 0 .456-.58 2.21 2.21 0 0 0-.084-2.256C17.834 5.553 13.678.7 13.678.7a2.38 2.38 0 0 0-3.4.051s-4.126 4.8-4.15 4.832a2.212 2.212 0 0 0 .38 2.853l-2.086 3.126a2.214 2.214 0 0 0 .619 3.072L3.56 16.855A3.309 3.309 0 0 0 6.312 22H11v1a1 1 0 0 0 2 0v-1h4.687a3.309 3.309 0 0 0 2.753-5.145ZM12 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM8 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-4-2a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" })));
}

function TreeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.467 17.3a530.27 530.27 0 0 0-1.557-1.815 2.67 2.67 0 0 0 .616-3.663 477.15 477.15 0 0 0-1.885-2.091 2.475 2.475 0 0 0 1.084-1.073 2.428 2.428 0 0 0-.176-2.526C18.528 6.1 13.886.846 13.886.846a2.608 2.608 0 0 0-3.771 0S5.473 6.1 5.451 6.13A2.3 2.3 0 0 0 5 7.6 1.409 1.409 0 0 0 6.41 9H12a1 1 0 0 1 0 2H5.206s-.707.784-.732.82A2.936 2.936 0 0 0 4 13.385a1.28 1.28 0 0 0 .091.522A1.84 1.84 0 0 0 5.834 15H13a1 1 0 0 1 0 2H3.782s-.228.268-.249.3a3.018 3.018 0 0 0 .6 4.058A2.881 2.881 0 0 0 5.99 22H11v1a1 1 0 0 0 2 0v-1h5.01a2.883 2.883 0 0 0 1.862-.644 3.019 3.019 0 0 0 .595-4.056Z" })));
}

function TriangleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M19.948 23H4.052A4.03 4.03 0 0 1 .6 21.088a3.947 3.947 0 0 1-.182-3.86L8.38 3.212a4.068 4.068 0 0 1 7.253.026l7.922 13.941a3.967 3.967 0 0 1-.156 3.909A4.03 4.03 0 0 1 19.948 23Z", "data-name": "Capa 13" })));
}

function TrophySolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.09 16H15c6.643 0 9-3.5 9-6.5a3.5 3.5 0 0 0-2.84-3.433 7.564 7.564 0 0 0 .409-1 3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458 7.564 7.564 0 0 0 .409 1A3.5 3.5 0 0 0 0 9.5c0 3 2.357 6.5 9 6.5h.91a5.027 5.027 0 0 1 .09.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-1.994A1.885 1.885 0 0 1 14 20v-3.08a5.025 5.025 0 0 1 .09-.92zm1.636-2.851a23.486 23.486 0 0 0 4.4-5.225A1 1 0 0 0 20.5 8 1.5 1.5 0 0 1 22 9.5c0 2.176-1.839 4.5-7 4.5h-.056a4.805 4.805 0 0 1 .782-.851zM9 14c-5.161 0-7-2.324-7-4.5A1.5 1.5 0 0 1 3.5 8a1 1 0 0 0 .375-.076 23.486 23.486 0 0 0 4.4 5.225 4.805 4.805 0 0 1 .781.851z" })));
}

function TruckSideSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 18H4a4 4 0 0 1-4-4V6a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5Zm9-7v-1a5 5 0 0 0-5-5h-2v6Zm-7 2v5h3a4 4 0 0 0 4-4v-1ZM4.058 20a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0-.058-.5Zm11 0a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0-.058-.5Z" })));
}

function UmbrellaSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.717 9.549A12.834 12.834 0 0 0 13 2.043V1a1 1 0 0 0-2 0v1.043A12.843 12.843 0 0 0 .267 9.549a3.945 3.945 0 0 0 .405 3.682A4.015 4.015 0 0 0 4 15h7v6a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0v-6h6.983a4.017 4.017 0 0 0 3.329-1.769 3.948 3.948 0 0 0 .405-3.682z" })));
}

function UnderlineSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M12 20a8.009 8.009 0 0 0 8-8V1a1 1 0 0 0-2 0v11a6 6 0 0 1-12 0V1a1 1 0 0 0-2 0v11a8.009 8.009 0 0 0 8 8ZM23 22H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" })));
}

function UndoAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.535 8.46A4.965 4.965 0 0 0 19 7H2.8l4.3-4.3a1 1 0 0 0-1.418-1.412L.732 6.237a2.5 2.5 0 0 0 0 3.535l4.95 4.951A1 1 0 1 0 7.1 13.309L2.788 9H19a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a1 1 0 0 0 0 2h14a5.006 5.006 0 0 0 5-5v-7a4.969 4.969 0 0 0-1.465-3.54Z" })));
}

function UndoSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M15 7h-4.83V5.414A2 2 0 0 0 6.756 4L.876 9.879a3 3 0 0 0 0 4.242L6.756 20a2 2 0 0 0 3.414-1.414V17H16a6.006 6.006 0 0 1 6 6 1 1 0 0 0 2 0v-7a9.01 9.01 0 0 0-9-9Z" })));
}

function UnlockSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 8H7V7a5 5 0 0 1 9.375-2.422 1 1 0 0 0 1.749-.971A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5.006 5.006 0 0 0-5-5Zm-4 9a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z" })));
}

function UploadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: {
            enableBackground: "new 0 0 512.008 512.008",
        }, xmlSpace: "preserve", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m172.399 117.448 62.421-62.443-.149 329.344c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333l.149-328.981 62.123 62.144c8.475 8.185 21.98 7.951 30.165-.524 7.985-8.267 7.985-21.374 0-29.641L301.273 18.76c-24.986-25.002-65.508-25.015-90.51-.029l-.029.029-68.501 68.523c-8.185 8.475-7.951 21.98.524 30.165 8.267 7.985 21.374 7.985 29.642 0z" }),
        React.createElement("path", { d: "M490.671 341.341c-11.782 0-21.333 9.551-21.333 21.333v85.333c0 11.782-9.551 21.333-21.333 21.333h-384c-11.782 0-21.333-9.551-21.333-21.333v-85.333c0-11.782-9.551-21.333-21.333-21.333-11.782 0-21.333 9.551-21.333 21.333v85.333c0 35.346 28.654 64 64 64h384c35.346 0 64-28.654 64-64v-85.333c-.002-11.782-9.553-21.333-21.335-21.333z" })));
}

function UsbPendriveSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 14a5.006 5.006 0 0 0-5-5H8a5.006 5.006 0 0 0-5 5v1a9 9 0 0 0 18 0ZM15 0H9a4 4 0 0 0-4 4v3.685A6.952 6.952 0 0 1 8 7h8a6.952 6.952 0 0 1 3 .685V4a4 4 0 0 0-4-4Zm-5 5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" })));
}

function UserAddSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("path", { d: "M490.667 234.667H448V192c0-11.782-9.551-21.333-21.333-21.333-11.782 0-21.333 9.551-21.333 21.333v42.667h-42.667c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333h42.667V320c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-42.667h42.667c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.551-21.333-21.333-21.333z" }),
        React.createElement("circle", { cx: 192, cy: 128, r: 128 }),
        React.createElement("path", { d: "M192 298.667c-105.99.118-191.882 86.01-192 192C0 502.449 9.551 512 21.333 512h341.333c11.782 0 21.333-9.551 21.333-21.333-.117-105.99-86.009-191.883-191.999-192z" })));
}

function UserDeleteSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M24 12a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zM9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6zm0 2a9.01 9.01 0 0 0-9 9 1 1 0 0 0 1 1h16a1 1 0 0 0 1-1 9.01 9.01 0 0 0-9-9z" })));
}

function UserRemoveSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M3 6a6 6 0 1 1 6 6 6.006 6.006 0 0 1-6-6zm6 8a9.01 9.01 0 0 0-9 9 1 1 0 0 0 1 1h16a1 1 0 0 0 1-1 9.01 9.01 0 0 0-9-9zm12.414-2 2.293-2.293a1 1 0 0 0-1.414-1.414L20 10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L18.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L20 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414z" })));
}

function UserTimeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M17 10a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7zm2.707 9.707a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 16 17v-3a1 1 0 0 1 2 0v2.586l1.707 1.707a1 1 0 0 1 0 1.414zM8.474 11a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5zm2.882 13H1a1 1 0 0 1-1-1.011 10.275 10.275 0 0 1 6.553-9.6 6.685 6.685 0 0 1 2.394-.384 9.087 9.087 0 0 0-.424.995A8.853 8.853 0 0 0 8 17a8.983 8.983 0 0 0 3.356 7z" })));
}

function UserSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", style: {
            enableBackground: "new 0 0 512 512",
        }, xmlSpace: "preserve", width: size, height: size, viewBox: "0 0 512 512", fill: "currentColor" }, props),
        React.createElement("circle", { cx: 256, cy: 128, r: 128 }),
        React.createElement("path", { d: "M256 298.667c-105.99.118-191.882 86.01-192 192C64 502.449 73.551 512 85.333 512h341.333c11.782 0 21.333-9.551 21.333-21.333-.117-105.99-86.009-191.883-191.999-192z" })));
}

function UtensilsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M22 10a12.64 12.64 0 0 1-5 9.775V23a1 1 0 0 1-2 0V2A1.9 1.9 0 0 1 16.131.217a2.194 2.194 0 0 1 2.356.459A13.474 13.474 0 0 1 22 10ZM11 0a1 1 0 0 0-1 1v6a3 3 0 0 1-2 2.816V1a1 1 0 0 0-2 0v8.816A3 3 0 0 1 4 7V1a1 1 0 0 0-2 0v6a5.009 5.009 0 0 0 4 4.9V23a1 1 0 0 0 2 0V11.9A5.009 5.009 0 0 0 12 7V1a1 1 0 0 0-1-1Z" })));
}

function VectorAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M21 16v-4a8.983 8.983 0 0 0-3.356-7h2.633a1.991 1.991 0 1 0-.009-2h-4.41a3.981 3.981 0 0 0-7.716 0H3.723a1.991 1.991 0 1 0 .009 2h2.624A8.983 8.983 0 0 0 3 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3v-4a7 7 0 0 1 3.521-6.065 3.963 3.963 0 0 0 6.958 0A7 7 0 0 1 19 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" })));
}

function VectorSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10.007 3 8 2.986A3 3 0 0 0 5 0H3a3 3 0 0 0-3 3v2a3 3 0 0 0 2.993 3l-.014 1.993A1 1 0 0 0 3.973 11h.006a1 1 0 0 0 1-.993L4.993 8H5a3 3 0 0 0 3-3v-.014L9.993 5H10a1 1 0 0 0 .007-2ZM21 0h-2a3 3 0 0 0-3 2.993l-1.994-.014H14a1 1 0 0 0-.007 2L16 4.993V5a3 3 0 0 0 3 3h.014L19 9.993A1 1 0 0 0 19.993 11H20a1 1 0 0 0 1-.993L21.014 8A3 3 0 0 0 24 5V3a3 3 0 0 0-3-3ZM21.007 16l.014-1.994A1 1 0 0 0 20.027 13h-.006a1 1 0 0 0-1 .993L19.007 16H19a3 3 0 0 0-3 3v.014L14.007 19H14a1 1 0 0 0-.007 2l2.007.014A3 3 0 0 0 19 24h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-2.993-3ZM10.007 19.021 8 19.007V19a3 3 0 0 0-3-3h-.014L5 14.007A1 1 0 0 0 4.007 13H4a1 1 0 0 0-1 .993L2.986 16A3 3 0 0 0 0 19v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-2.993l1.994.014H10a1 1 0 0 0 .007-2Z" })));
}

function VenusDoubleSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M11 20a1 1 0 0 1-1 1H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 0 1 0-2h2v-4.151A7.5 7.5 0 1 1 10.124.478a9.454 9.454 0 0 0 0 14.044A7.521 7.521 0 0 1 8 14.977V19h2a1 1 0 0 1 1 1ZM24 7.5a7.5 7.5 0 1 0-8 7.475V19h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-4.151A7.513 7.513 0 0 0 24 7.5Z" })));
}

function VenusMarsSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 19H8v-2.317a8.961 8.961 0 0 1 .214-13.566A7.014 7.014 0 0 0 7 3a7 7 0 0 0-1 13.92V19H4a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" }),
        React.createElement("path", { d: "M22 0h-4a1 1 0 0 0 0 2h2.586l-2.4 2.4A7.028 7.028 0 1 0 19.6 5.816l2.4-2.4V6a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2Z" })));
}

function VenusSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20 8a8 8 0 1 0-9 7.931V19H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-3.069A8.008 8.008 0 0 0 20 8Z" })));
}

function VideoCameraSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M14.021 6.106 9.793 1.879A2.976 2.976 0 0 0 7.672 1H1a1 1 0 0 0 0 2h6.672a1.006 1.006 0 0 1 .707.293L11.086 6H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-8a5.008 5.008 0 0 0-3.979-4.894ZM22.9 8.955a1.987 1.987 0 0 0-2.092.184l-.8.6v10.522l.8.6a2 2 0 0 0 3.2-1.6v-8.518A1.988 1.988 0 0 0 22.9 8.955Z" })));
}

function VolleyballSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.992 12.16a11.9 11.9 0 0 1-1.2 5.048.959.959 0 0 0-.219.023 18.977 18.977 0 0 1-5.6.769 19.1 19.1 0 0 1-6.029-.8 1.478 1.478 0 0 1-.619-2.394 11.959 11.959 0 0 1 1.078-1.057 1.462 1.462 0 0 1 1.422-.233 12.57 12.57 0 0 0 3.965.646 14.493 14.493 0 0 0 7.202-2.002zm-8.744-.136a1.488 1.488 0 0 0 1.717-1.635A17.118 17.118 0 0 0 12.106.394a.981.981 0 0 1-.22-.388 11.908 11.908 0 0 0-4.6.961 13.914 13.914 0 0 1 5.5 9.542 1.483 1.483 0 0 0 1.094 1.226 10.588 10.588 0 0 0 1.368.289zm5.674-.643a13.621 13.621 0 0 0 2.884-1.468 12.018 12.018 0 0 0-9.114-9.6 19 19 0 0 1 4.255 9.864 1.474 1.474 0 0 0 1.975 1.204zM16.8 20a20.992 20.992 0 0 1-7.241-1.161 1.44 1.44 0 0 0-1.884.975 11.823 11.823 0 0 0-.359 3.231 11.984 11.984 0 0 0 13.936-3.407A21.072 21.072 0 0 1 16.8 20zm-6-9.169a11.779 11.779 0 0 0-.323-1.748 1.466 1.466 0 0 0-2.368-.724 19.134 19.134 0 0 0-5.9 9.583 6.65 6.65 0 0 0-.093.842 12.08 12.08 0 0 0 3.2 3.171 13.914 13.914 0 0 1 4.939-9.868 1.458 1.458 0 0 0 .545-1.256zM7.767 4.109A11.759 11.759 0 0 0 5.3 2.048 11.937 11.937 0 0 0 .7 16.019a21.14 21.14 0 0 1 6.876-9.825 1.442 1.442 0 0 0 .191-2.085z" })));
}

function VolumeSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M20.8 4.293a1 1 0 0 0-1.41 1.414 8.911 8.911 0 0 1 0 12.586 1 1 0 1 0 1.41 1.414 10.911 10.911 0 0 0 0-15.414Z" }),
        React.createElement("path", { d: "M18.093 7.293a1 1 0 1 0-1.414 1.414 4.664 4.664 0 0 1 0 6.586 1 1 0 1 0 1.414 1.414 6.665 6.665 0 0 0 0-9.414ZM13.819.207A12.055 12.055 0 0 0 6.268 5H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h1.269a12.051 12.051 0 0 0 7.55 4.793A1 1 0 0 0 15 22.81V1.19a1 1 0 0 0-1.181-.983Z" })));
}

function WheelchairSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M8 3a3 3 0 1 1 3 3 3 3 0 0 1-3-3Zm15 18h-1.279L20.4 17.051A3 3 0 0 0 17.559 15H14a2 2 0 0 1-2-2h6a1 1 0 0 0 0-2h-6V8a1 1 0 0 0-2 0v5a4 4 0 0 0 4 4h3.559a1 1 0 0 1 .949.684l1.544 4.632A1 1 0 0 0 21 23h2a1 1 0 0 0 0-2Zm-9.214-2.012A5.973 5.973 0 0 1 8 13V9.071a1 1 0 0 0-1.142-.99A8.005 8.005 0 0 0 7.87 24H8a7.993 7.993 0 0 0 6.573-3.442 1 1 0 0 0-.786-1.57Z" })));
}

function WifiAltSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M16 23a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm4.535-2.122a1 1 0 0 0 0-1.414 5 5 0 0 0-7.07 0 1 1 0 0 0 1.414 1.414 3.074 3.074 0 0 1 4.242 0 1 1 0 0 0 1.414 0zm2.829-2.828a1 1 0 0 0 0-1.414 9.01 9.01 0 0 0-12.728 0 1 1 0 0 0 1.414 1.414 7.011 7.011 0 0 1 9.9 0 1 1 0 0 0 1.414 0zM9.222 19.464a3 3 0 0 1 0-4.243 11.014 11.014 0 0 1 14.757-.721 7.945 7.945 0 0 0-5.622-7.14 1.087 1.087 0 0 1-.722-.733 8 8 0 0 0-15.49.842 7.648 7.648 0 0 0 .8 5.179A5.448 5.448 0 0 0 .057 18.3 5.844 5.844 0 0 0 5.683 23h7.1a2598.303 2598.303 0 0 1-3.561-3.536z" })));
}

function WindSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M0 12a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm20.915-.894A5 5 0 1 0 12 8a1 1 0 0 0 2 0 3 3 0 1 1 3 3h-6a1 1 0 0 0 0 2h9a2 2 0 0 1 2 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 0 0-1.886.666C17.615 20.415 23.952 19.579 24 15a4.007 4.007 0 0 0-3.085-3.894ZM11 16H1a1 1 0 0 0 0 2h10a2 2 0 0 1 2 2c-.009 2.337-3.281 2.648-4.057.667a1 1 0 1 0-1.886.666C8.615 25.415 14.952 24.579 15 20a4 4 0 0 0-4-4ZM1 8h6a4 4 0 0 0 4-4c-.048-4.581-6.387-5.414-7.943-1.333a1 1 0 0 0 1.886.666C5.72 1.351 8.991 1.663 9 4a2 2 0 0 1-2 2H1a1 1 0 0 0 0 2Z" })));
}

function WomanHeadSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M23.925 18.144A5 5 0 0 1 19 24h-3a1 1 0 0 1-1-1v-2.59a8.218 8.218 0 0 1-3 .59 8.222 8.222 0 0 1-3-.6V23a1 1 0 0 1-1 1H5a5 5 0 0 1-4.925-5.856l.3-1.74a2.939 2.939 0 0 1 5.337-1.138C6.976 17.124 9.409 19 12 19c3.13 0 6.214-2.779 7.13-5.376a1.03 1.03 0 0 1 .959-.667l.432.007A1.461 1.461 0 0 0 22 11.5a1.5 1.5 0 0 0-1.23-1.474 1 1 0 0 1-.816-.879 7.961 7.961 0 0 0-4.013-6.107 12.87 12.87 0 0 1-1.127 2.541 15.089 15.089 0 0 1-4.956 4.467 1.5 1.5 0 1 1-1.725.84 15.807 15.807 0 0 1-7.257 1.1A1 1 0 0 1 .5 10.136a6.372 6.372 0 0 0 1.319-2.369C3.124 4.674 5.1 0 12 0a9.972 9.972 0 0 1 9.85 8.274A3.5 3.5 0 0 1 24 11.5a3.428 3.428 0 0 1-.854 2.257c.007.026.025.047.03.075ZM16 11.5a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5Z" })));
}

function WorldSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 17H7.329a2.978 2.978 0 0 1-2.122-.879L.052 10.966C.023 11.308 0 11.651 0 12a12.009 12.009 0 0 0 11 11.949V18a1 1 0 0 0-1-1ZM20.436 3.478l-1.79 1.79A2.516 2.516 0 0 1 16.879 6H15.5a.5.5 0 0 0-.5.5v1a2.5 2.5 0 0 1-2.5 2.5.5.5 0 0 0-.5.5v.5a1 1 0 0 0 1 1h3a3 3 0 0 1 3 3v.962a.5.5 0 0 0 .146.353l2.625 2.626a11.949 11.949 0 0 0-1.335-15.463Z" }),
        React.createElement("path", { d: "M17 15.962V15a1 1 0 0 0-1-1h-3a3 3 0 0 1-3-3v-.5A2.5 2.5 0 0 1 12.5 8a.5.5 0 0 0 .5-.5v-1A2.5 2.5 0 0 1 15.5 4h1.379a.507.507 0 0 0 .353-.146l1.661-1.661A11.974 11.974 0 0 0 .5 8.587l6.12 6.12a1 1 0 0 0 .709.293H10a3 3 0 0 1 3 3v5.949a11.962 11.962 0 0 0 7.483-3.469l-2.751-2.751A2.516 2.516 0 0 1 17 15.962Z" })));
}

function YenSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ height: size, viewBox: "0 0 512 512", width: size, xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", fill: "currentColor" }, props),
        React.createElement("path", { d: "M22.792 1.61 13.262 14H18a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v3a1 1 0 0 1-2 0v-3H6a1 1 0 0 1 0-2h5v-2H6a1 1 0 0 1 0-2h4.738L1.208 1.61A1 1 0 0 1 2.792.39L12 12.36 21.208.39a1 1 0 1 1 1.584 1.22z" })));
}

function ZoomInSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "M10 20a9.959 9.959 0 0 0 6.327-2.258l5.966 5.965a1 1 0 0 0 1.414-1.414l-5.966-5.965A10 10 0 1 0 10 20ZM7 9h2V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H7a1 1 0 0 1 0-2Z" })));
}

function ZoomOutSolid(props) {
    var _a = props.size, size = _a === void 0 ? "1em" : _a;
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size, fill: "currentColor" }, props),
        React.createElement("path", { d: "m23.707 22.293-5.966-5.965a10 10 0 1 0-1.414 1.414l5.966 5.965a1 1 0 0 0 1.414-1.414ZM13 11H7a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" })));
}

export { Add, AddSolid, AddressBook, AddressBookSolid, AlarmClock, AlarmClockSolid, AlignCenter, AlignCenterSolid, AlignJustify, AlignJustifySolid, AlignLeft, AlignLeftSolid, AlignRight, AlignRightSolid, Ambulance, AmbulanceSolid, AngleDoubleLeft, AngleDoubleLeftSolid, AngleDoubleRight, AngleDoubleRightSolid, AngleDoubleSmallLeft, AngleDoubleSmallLeftSolid, AngleDoubleSmallRight, AngleDoubleSmallRightSolid, AngleDown, AngleDownSolid, AngleLeft, AngleLeftSolid, AngleRight, AngleRightSolid, AngleSmallDown, AngleSmallDownSolid, AngleSmallLeft, AngleSmallLeftSolid, AngleSmallRight, AngleSmallRightSolid, AngleSmallUp, AngleSmallUpSolid, AngleUp, AngleUpSolid, Apple, AppleSolid, Apps, AppsAdd, AppsAddSolid, AppsDelete, AppsDeleteSolid, AppsSolid, AppsSort, AppsSortSolid, Archive, ArchiveSolid, ArrowDown, ArrowDownSolid, ArrowFromBottom, ArrowFromBottomSolid, ArrowLeft, ArrowLeftSolid, ArrowRight, ArrowRightSolid, ArrowSmallDown, ArrowSmallDownSolid, ArrowSmallLeft, ArrowSmallLeftSolid, ArrowSmallRight, ArrowSmallRightSolid, ArrowSmallUp, ArrowSmallUpSolid, ArrowUp, ArrowUpSolid, Asterik, AsterikSolid, At, AtSolid, Backpack, BackpackSolid, Badge, BadgeSolid, Balloons, BalloonsSolid, Ban, BanSolid, BandAid, BandAidSolid, Bank, BankSolid, BarberShop, BarberShopSolid, Baseball, BaseballSolid, Basketball, BasketballSolid, Bed, BedSolid, Beer, BeerSolid, Bell, BellRing, BellRingSolid, BellSchool, BellSchoolSolid, BellSolid, Bike, BikeSolid, Billiard, BilliardSolid, Bold, BoldSolid, Book, BookAlt, BookAltSolid, BookSolid, Bookmark, BookmarkSolid, Bowling, BowlingSolid, Box, BoxAlt, BoxAltSolid, BoxSolid, BreadSlice, BreadSliceSolid, Briefcase, BriefcaseSolid, Broom, BroomSolid, Browser, BrowserSolid, Brush, BrushSolid, Bug, BugSolid, Building, BuildingSolid, Bulb, BulbSolid, Butterfly, ButterflySolid, CakeBirthday, CakeBirthdaySolid, CakeWedding, CakeWeddingSolid, Calculator, CalculatorSolid, Calendar, CalendarSolid, CallHistory, CallHistorySolid, CallIncoming, CallIncomingSolid, CallMissed, CallMissedSolid, CallOutgoing, CallOutgoingSolid, Camera, CameraSolid, Camping, CampingSolid, Car, CarSolid, CaretDown, CaretDownSolid, CaretLeft, CaretLeftSolid, CaretRight, CaretRightSolid, CaretUp, CaretUpSolid, Carrot, CarrotSolid, ChartConnected, ChartConnectedSolid, ChartHistogram, ChartHistogramSolid, ChartNetwork, ChartNetworkSolid, ChartPie, ChartPieAlt, ChartPieAltSolid, ChartPieSolid, ChartPyramid, ChartPyramidSolid, ChartSetTheory, ChartSetTheorySolid, ChartTree, ChartTreeSolid, ChatArrowDown, ChatArrowDownSolid, ChatArrowGrow, ChatArrowGrowSolid, Check, CheckSolid, Checkbox, CheckboxSolid, Cheese, CheeseSolid, ChessPiece, ChessPieceSolid, ChildHead, ChildHeadSolid, Circle, CircleSmall, CircleSmallSolid, CircleSolid, Clip, ClipSolid, Clock, ClockSolid, Cloud, CloudCheck, CloudCheckSolid, CloudDisabled, CloudDisabledSolid, CloudDownload, CloudDownloadSolid, CloudShare, CloudShareSolid, CloudSolid, CloudUpload, CloudUploadSolid, Clouds, CloudsSolid, Cocktail, CocktailSolid, Coffee, CoffeeSolid, Comment, CommentAlt, CommentAltSolid, CommentCheck, CommentCheckSolid, CommentHeart, CommentHeartSolid, CommentInfo, CommentInfoSolid, CommentSolid, CommentUser, CommentUserSolid, Comments, CommentsSolid, Compress, CompressAlt, CompressAltSolid, CompressSolid, Computer, ComputerSolid, Confetti, ConfettiSolid, Cookie, CookieSolid, Copy, CopyAlt, CopyAltSolid, CopySolid, Copyright, CopyrightSolid, Cow, CowSolid, Cream, CreamSolid, CreditCard, CreditCardSolid, Croissant, CroissantSolid, Cross, CrossCircle, CrossCircleSolid, CrossSmall, CrossSmallSolid, CrossSolid, Crown, CrownSolid, Cube, CubeSolid, Cupcake, CupcakeSolid, Cursor, CursorFinger, CursorFingerSolid, CursorPlus, CursorPlusSolid, CursorSolid, CursorText, CursorTextAlt, CursorTextAltSolid, CursorTextSolid, Dart, DartSolid, Dashboard, DashboardSolid, DataTransfer, DataTransferSolid, Database, DatabaseSolid, Delete, DeleteSolid, Diamond, DiamondSolid, Dice, DiceSolid, Diploma, DiplomaSolid, DiscoBall, DiscoBallSolid, Disk, DiskSolid, Doctor, DoctorSolid, Document, DocumentSigned, DocumentSignedSolid, DocumentSolid, Dollar, DollarSolid, Download, DownloadSolid, DrinkAlt, DrinkAltSolid, Drumstick, DrumstickSolid, Duplicate, DuplicateSolid, ELearning, ELearningSolid, Earnings, EarningsSolid, Edit, EditAlt, EditAltSolid, EditSolid, Envelope, EnvelopeBan, EnvelopeBanSolid, EnvelopeDownload, EnvelopeDownloadSolid, EnvelopeMarker, EnvelopeMarkerSolid, EnvelopeOpen, EnvelopeOpenSolid, EnvelopePlus, EnvelopePlusSolid, EnvelopeSolid, Euro, EuroSolid, Exclamation, ExclamationSolid, Expand, ExpandSolid, Eye, EyeCrossed, EyeCrossedSolid, EyeDropper, EyeDropperSolid, EyeSolid, Feather, FeatherSolid, FerrisWheel, FerrisWheelSolid, File, FileAdd, FileAddSolid, FileAi, FileAiSolid, FileCheck, FileCheckSolid, FileDelete, FileDeleteSolid, FileEps, FileEpsSolid, FileGif, FileGifSolid, FileMusic, FileMusicSolid, FilePsd, FilePsdSolid, FileSolid, Fill, FillSolid, Film, FilmSolid, Filter, FilterSolid, Fingerprint, FingerprintSolid, Fish, FishSolid, Flag, FlagSolid, Flame, FlameSolid, FlipHorizontal, FlipHorizontalSolid, Flower, FlowerBouquet, FlowerBouquetSolid, FlowerSolid, FlowerTulip, FlowerTulipSolid, Folder, FolderAdd, FolderAddSolid, FolderSolid, Following, FollowingSolid, Football, FootballSolid, Form, FormSolid, Forward, ForwardSolid, Fox, FoxSolid, Frown, FrownSolid, Ftp, FtpSolid, Gallery, GallerySolid, Gamepad, GamepadSolid, GasPump, GasPumpSolid, Gem, GemSolid, Gift, GiftSolid, GlassCheers, GlassCheersSolid, Glasses, GlassesSolid, Globe, GlobeAlt, GlobeAltSolid, GlobeSolid, Golf, GolfSolid, GraduationCap, GraduationCapSolid, GraphicTablet, GraphicTabletSolid, Grid, GridAlt, GridAltSolid, GridSolid, Guitar, GuitarSolid, Gym, GymSolid, Hamburger, HamburgerSolid, HandHoldingHeart, HandHoldingHeartSolid, Hastag, HastagSolid, HatBirthday, HatBirthdaySolid, HeadSideThinking, HeadSideThinkingSolid, Headphones, HeadphonesSolid, Headset, HeadsetSolid, Heart, HeartArrow, HeartArrowSolid, HeartSolid, Home, HomeLocation, HomeLocationAlt, HomeLocationAltSolid, HomeLocationSolid, HomeSolid, Hourglass, HourglassEnd, HourglassEndSolid, HourglassSolid, IceCream, IceCreamSolid, IceSkate, IceSkateSolid, IdBadge, IdBadgeSolid, Inbox, InboxSolid, Incognito, IncognitoSolid, Indent, IndentSolid, Infinity, InfinitySolid, Info, InfoSolid, Interactive, InteractiveSolid, Interlining, InterliningSolid, Interrogation, InterrogationSolid, Italic, ItalicSolid, Jpg, JpgSolid, Key, KeySolid, Keyboard, KeyboardSolid, Kite, KiteSolid, Label, LabelSolid, Laptop, LaptopSolid, Lasso, LassoSolid, Laugh, LaughSolid, Layers, LayersSolid, LayoutFluid, LayoutFluidSolid, Leaf, LeafSolid, LetterCase, LetterCaseSolid, LifeRing, LifeRingSolid, LineWidth, LineWidthSolid, Link, LinkSolid, Lipstick, LipstickSolid, List, ListCheck, ListCheckSolid, ListSolid, LocationAlt, LocationAltSolid, Lock, LockAlt, LockAltSolid, LockSolid, LuggageRolling, LuggageRollingSolid, MagicWand, MagicWandSolid, MakeupBrush, MakeupBrushSolid, ManHead, ManHeadSolid, Map, MapMarker, MapMarkerCross, MapMarkerCrossSolid, MapMarkerHome, MapMarkerHomeSolid, MapMarkerMinus, MapMarkerMinusSolid, MapMarkerPlus, MapMarkerPlusSolid, MapMarkerSolid, MapSolid, Marker, MarkerSolid, MarkerTime, MarkerTimeSolid, Mars, MarsDouble, MarsDoubleSolid, MarsSolid, MaskCarnival, MaskCarnivalSolid, Medicine, MedicineSolid, Megaphone, MegaphoneSolid, Meh, MehSolid, MenuBurger, MenuBurgerSolid, MenuDots, MenuDotsSolid, MenuDotsVertical, MenuDotsVerticalSolid, Microphone, MicrophoneAlt, MicrophoneAltSolid, MicrophoneSolid, Minus, MinusSmall, MinusSmallSolid, MinusSolid, Mobile, MobileSolid, ModeLandscape, ModeLandscapeSolid, ModePortrait, ModePortraitSolid, Money, MoneySolid, Moon, MoonSolid, Mountains, MountainsSolid, Mouse, MouseSolid, MugAlt, MugAltSolid, Music, MusicAlt, MusicAltSolid, MusicSolid, Navigation, NavigationSolid, Network, NetworkCloud, NetworkCloudSolid, NetworkSolid, Notebook, NotebookSolid, Opacity, OpacitySolid, Package, PackageSolid, PaintBrush, PaintBrushSolid, Palette, PaletteSolid, PaperPlane, PaperPlaneSolid, Password, PasswordSolid, Pause, PauseSolid, Paw, PawSolid, Pencil, PencilSolid, Pharmacy, PharmacySolid, PhoneCall, PhoneCallSolid, PhoneCross, PhoneCrossSolid, PhonePause, PhonePauseSolid, PhoneSlash, PhoneSlashSolid, Physics, PhysicsSolid, Picture, PictureSolid, PingPong, PingPongSolid, PizzaSlice, PizzaSliceSolid, Plane, PlaneSolid, Play, PlayAlt, PlayAltSolid, PlaySolid, PlayingCards, PlayingCardsSolid, Plus, PlusSmall, PlusSmallSolid, PlusSolid, PokerChip, PokerChipSolid, Portrait, PortraitSolid, Pound, PoundSolid, Power, PowerSolid, Presentation, PresentationSolid, Print, PrintSolid, Protractor, ProtractorSolid, Pulse, PulseSolid, Pyramid, PyramidSolid, QuoteRight, QuoteRightSolid, Rainbow, RainbowSolid, Raindrops, RaindropsSolid, Rec, RecSolid, Receipt, ReceiptSolid, RecordVinyl, RecordVinylSolid, RectabgleVertical, RectabgleVerticalSolid, RectangleHorizontal, RectangleHorizontalSolid, RectanglePanoramic, RectanglePanoramicSolid, Recycle, RecycleSolid, Redo, RedoAlt, RedoAltSolid, RedoSolid, Reflect, ReflectSolid, Refresh, RefreshSolid, Resize, ResizeSolid, Resources, ResourcesSolid, Rewind, RewindSolid, Rhombus, RhombusSolid, RingsWedding, RingsWeddingSolid, Road, RoadSolid, Rocket, RocketSolid, RoomService, RoomServiceSolid, RotateRight, RotateRightSolid, Rugby, RugbySolid, Sad, SadSolid, Salad, SaladSolid, Scale, ScaleSolid, School, SchoolBus, SchoolBusSolid, SchoolSolid, Scissors, ScissorsSolid, Screen, ScreenSolid, Search, SearchAlt, SearchAltSolid, SearchHeart, SearchHeartSolid, SearchSolid, Settings, SettingsSliders, SettingsSlidersSolid, SettingsSolid, Share, ShareSolid, Shield, ShieldCheck, ShieldCheckSolid, ShieldExclamation, ShieldExclamationSolid, ShieldInterrogation, ShieldInterrogationSolid, ShieldPlus, ShieldPlusSolid, ShieldSolid, Ship, ShipSide, ShipSideSolid, ShipSolid, Shop, ShopSolid, ShoppingBag, ShoppingBagAdd, ShoppingBagAddSolid, ShoppingBagSolid, ShoppingCart, ShoppingCartAdd, ShoppingCartAddSolid, ShoppingCartCheck, ShoppingCartCheckSolid, ShoppingCartSolid, Shuffle, ShuffleSolid, SignIn, SignInAlt, SignInAltSolid, SignInSolid, SignOut, SignOutAlt, SignOutAltSolid, SignOutSolid, SignalAlt, SignalAlt1, SignalAlt1Solid, SignalAlt2, SignalAlt2Solid, SignalAltSolid, Skateboard, SkateboardSolid, Smartphone, SmartphoneSolid, Smile, SmileSolid, SmileWink, SmileWinkSolid, Snowflake, SnowflakeSolid, Soap, SoapSolid, Soup, SoupSolid, Spa, SpaSolid, Speaker, SpeakerSolid, Sphere, SphereSolid, Spinner, SpinnerAlt, SpinnerAltSolid, SpinnerSolid, Square, SquareRoot, SquareRootSolid, SquareSolid, Star, StarOctogram, StarOctogramSolid, StarSolid, Stats, StatsSolid, Stethoscope, StethoscopeSolid, Sticker, StickerSolid, Stop, StopSolid, Stopwatch, StopwatchSolid, Subtitles, SubtitlesSolid, Sun, SunSolid, Sunrise, SunriseSolid, Surfing, SurfingSolid, Sword, SwordSolid, Syringe, SyringeSolid, Tablet, TabletSolid, Target, TargetSolid, Taxi, TaxiSolid, Tennis, TennisSolid, Terrace, TerraceSolid, Test, TestSolid, TestTube, TestTubeSolid, Text, TextCheck, TextCheckSolid, TextSolid, ThermometerHalf, ThermometerHalfSolid, ThumbsDown, ThumbsDownSolid, ThumbsUp, ThumbsUpSolid, Thumbtack, ThumbtackSolid, Ticket, TicketSolid, TimeAdd, TimeAddSolid, TimeCheck, TimeCheckSolid, TimeDelete, TimeDeleteSolid, TimeFast, TimeFastSolid, TimeForward, TimeForwardSixty, TimeForwardSixtySolid, TimeForwardSolid, TimeForwardTen, TimeForwardTenSolid, TimeHalfPast, TimeHalfPastSolid, TimeOclock, TimeOclockSolid, TimePast, TimePastSolid, TimeQuarterPast, TimeQuarterPastSolid, TimeQuarterTo, TimeQuarterToSolid, TimeTwentyFour, TimeTwentyFourSolid, ToolCrop, ToolCropSolid, ToolMarquee, ToolMarqueeSolid, Tooth, ToothSolid, Tornado, TornadoSolid, Train, TrainSide, TrainSideSolid, TrainSolid, Transform, TransformSolid, Trash, TrashSolid, Treatment, TreatmentSolid, Tree, TreeChristmas, TreeChristmasSolid, TreeSolid, Triangle, TriangleSolid, Trophy, TrophySolid, TruckSide, TruckSideSolid, Umbrella, UmbrellaSolid, Underline, UnderlineSolid, Undo, UndoAlt, UndoAltSolid, UndoSolid, Unlock, UnlockSolid, Upload, UploadSolid, UsbPendrive, UsbPendriveSolid, User, UserAdd, UserAddSolid, UserDelete, UserDeleteSolid, UserRemove, UserRemoveSolid, UserSolid, UserTime, UserTimeSolid, Utensils, UtensilsSolid, Vector, VectorAlt, VectorAltSolid, VectorSolid, Venus, VenusDouble, VenusDoubleSolid, VenusMars, VenusMarsSolid, VenusSolid, VideoCamera, VideoCameraSolid, Volleyball, VolleyballSolid, Volume, VolumeSolid, Wheelchair, WheelchairSolid, WifiAlt, WifiAltSolid, Wind, WindSolid, WomanHead, WomanHeadSolid, World, WorldSolid, Yen, YenSolid, ZoomIn, ZoomInSolid, ZoomOut, ZoomOutSolid };
//# sourceMappingURL=index.esm.js.map
