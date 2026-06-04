import { o as e } from "./chunk-BQCxAhux.js";
import { a as t, o as n, s as r, v as i, y as a } from "./AsyncTextInput-DMwutQQ3.js";
import { t as o } from "./react-Cajsgul7.js";
//#region src/components/inputs/GridFieldStacked.tsx
var s = /* @__PURE__ */ e(o(), 1), c = ({ label: e, className: o, children: c, noTranslate: l = !1 }) => {
	let u = (0, s.useMemo)(() => r(), []);
	return /* @__PURE__ */ i(n.Provider, {
		value: u,
		children: /* @__PURE__ */ a("div", {
			css: {
				gridColumn: "label / end",
				position: "relative",
				display: "flex",
				flexDirection: "column"
			},
			children: [/* @__PURE__ */ i("label", {
				htmlFor: u,
				css: {},
				children: e && (l || typeof e != "string" ? e : /* @__PURE__ */ i(t, { children: e }))
			}), /* @__PURE__ */ i("div", {
				css: {
					position: "relative",
					flex: 1
				},
				className: o,
				children: c
			})]
		})
	});
};
//#endregion
export { c as t };
