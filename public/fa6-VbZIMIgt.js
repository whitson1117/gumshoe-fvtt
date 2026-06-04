import { o as e } from "./chunk-BQCxAhux.js";
import { t } from "./react-Cajsgul7.js";
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/lib/iconContext.mjs
var n = /* @__PURE__ */ e(t(), 1), r = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
}, i = n.createContext && /* @__PURE__ */ n.createContext(r), a = [
	"attr",
	"size",
	"title"
];
function o(e, t) {
	if (e == null) return {};
	var n, r, i = s(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function s(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function c() {
	return c = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, c.apply(null, arguments);
}
function l(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function u(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? l(Object(n), !0).forEach(function(t) {
			d(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function d(e, t, n) {
	return (t = f(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function f(e) {
	var t = p(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function p(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function m(e) {
	return e && e.map((e, t) => /* @__PURE__ */ n.createElement(e.tag, u({ key: t }, e.attr), m(e.child)));
}
function h(e) {
	return (t) => /* @__PURE__ */ n.createElement(g, c({ attr: u({}, e.attr) }, t), m(e.child));
}
function g(e) {
	var t = (t) => {
		var { attr: r, size: i, title: s } = e, l = o(e, a), d = i || t.size || "1em", f;
		return t.className && (f = t.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ n.createElement("svg", c({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, t.attr, r, l, {
			className: f,
			style: u(u({ color: e.color || t.color }, t.style), e.style),
			height: d,
			width: d,
			xmlns: "http://www.w3.org/2000/svg"
		}), s && /* @__PURE__ */ n.createElement("title", null, s), e.children);
	};
	return i === void 0 ? t(r) : /* @__PURE__ */ n.createElement(i.Consumer, null, (e) => t(e));
}
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/fa6/index.mjs
function _(e) {
	return h({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" },
			child: []
		}]
	})(e);
}
function v(e) {
	return h({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" },
			child: []
		}]
	})(e);
}
function y(e) {
	return h({
		tag: "svg",
		attr: { viewBox: "0 0 512 512" },
		child: [{
			tag: "path",
			attr: { d: "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" },
			child: []
		}]
	})(e);
}
function b(e) {
	return h({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" },
			child: []
		}]
	})(e);
}
function x(e) {
	return h({
		tag: "svg",
		attr: { viewBox: "0 0 448 512" },
		child: [{
			tag: "path",
			attr: { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" },
			child: []
		}]
	})(e);
}
function S(e) {
	return h({
		tag: "svg",
		attr: { viewBox: "0 0 576 512" },
		child: [{
			tag: "path",
			attr: { d: "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z" },
			child: []
		}]
	})(e);
}
//#endregion
export { v as a, y as i, x as n, _ as o, b as r, h as s, S as t };
