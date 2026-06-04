import { o as e } from "./chunk-BQCxAhux.js";
import { a as t, o as n, s as r, v as i, y as a } from "./AsyncTextInput-DMwutQQ3.js";
import { t as o } from "./react-Cajsgul7.js";
//#region src/components/inputs/GridField.tsx
var s = /* @__PURE__ */ e(o(), 1), c = ({ label: e, className: o, children: c, noLabel: l = !1, noTranslate: u = !1, labelTitle: d, onDragOver: f, onDragEnd: p, onDrop: m, labelStyle: h }) => {
	let g = (0, s.useMemo)(() => r(), []);
	return /* @__PURE__ */ a(n.Provider, {
		value: g,
		children: [/* @__PURE__ */ i("label", {
			title: d,
			htmlFor: l ? void 0 : g,
			css: {
				gridColumn: "label",
				paddingTop: "0.3em",
				paddingRight: "0.5em",
				alignSelf: "start",
				textAlign: "end",
				overflowWrap: "anywhere",
				...h
			},
			onDragOver: f,
			onDragLeave: p,
			onDragEnd: p,
			onDrop: m,
			children: e && (u || typeof e != "string" ? e : /* @__PURE__ */ i(t, {
				title: d,
				children: e
			}))
		}), /* @__PURE__ */ i("div", {
			className: o,
			css: {
				gridColumn: "control",
				alignSelf: "center"
			},
			onDragOver: f,
			onDragLeave: p,
			onDragEnd: p,
			onDrop: m,
			children: c
		})]
	});
};
//#endregion
export { c as t };
