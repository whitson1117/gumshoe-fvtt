import { o as e, t } from "./chunk-BQCxAhux.js";
import { $ as n, Ct as r, D as i, F as a, Pt as o, T as s, _ as c, _n as l, b as u, c as d, ft as f, h as p, i as m, o as h, r as g, t as _, u as v, v as y, y as b } from "./AsyncTextInput-DMwutQQ3.js";
import { t as x } from "./react-Cajsgul7.js";
import { t as S } from "./InvestigatorJournalSheet-7O-HVKoe.js";
import { i as C, r as w, t as T } from "./Button-wjG7vDMi.js";
import { a as E, r as D, t as O } from "./assertApplicationV2-BCfhKtnc.js";
import { i as ee, n as k, o as te, s as A } from "./fa6-VbZIMIgt.js";
import { t as ne } from "./GridFieldStacked-CBtoiXE4.js";
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/md/index.mjs
var j = /* @__PURE__ */ e(x(), 1);
function re(e) {
	return A({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0z"
			},
			child: []
		}, {
			tag: "path",
			attr: { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" },
			child: []
		}]
	})(e);
}
function ie(e) {
	return A({
		tag: "svg",
		attr: { viewBox: "0 0 24 24" },
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				d: "M0 0h24v24H0V0z"
			},
			child: []
		}, {
			tag: "path",
			attr: { d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z" },
			child: []
		}]
	})(e);
}
//#endregion
//#region src/components/journalEditorSheet/magicToolbar/contexts.ts
var ae = (0, j.createContext)({}), oe = (0, j.createContext)({
	register: () => {},
	unregister: () => {}
});
//#endregion
//#region src/components/journalEditorSheet/magicToolbar/MagicToolbar.tsx
function se(e) {
	return e.toLowerCase().replace(/\W+/g, "-");
}
var ce = ({ children: e, categories: t, childrenCategory: n }) => {
	let r = Object.values((0, j.useContext)(ae)), i = { [n]: [e] };
	for (let e of r) e.content !== null && (i[e.category] === void 0 && (i[e.category] = []), i[e.category].push(/* @__PURE__ */ y(j.Fragment, { children: e.content }, i[e.category].length)));
	let a = (0, j.useMemo)(() => t.map(se), [t]);
	return /* @__PURE__ */ y("div", {
		css: {
			display: "grid",
			gridTemplateRows: "auto 1fr",
			justifyContent: "start",
			columnGap: "1em",
			rowGap: "0.5em"
		},
		children: Object.keys(i).sort((e, t) => a.indexOf(se(e)) - a.indexOf(se(t))).map((e, t) => /* @__PURE__ */ b(j.Fragment, { children: [/* @__PURE__ */ y("div", {
			css: {
				gridRow: 1,
				gridColumn: t + 1,
				borderBottom: "1px solid"
			},
			children: e
		}), /* @__PURE__ */ y("div", {
			css: {
				gridRow: 2,
				gridColumn: t + 1,
				display: "flex",
				flexDirection: "row",
				gap: "0.5em"
			},
			children: i[e]
		})] }, e))
	});
};
ce.displayName = "MagicToolbar";
//#endregion
//#region src/components/journalEditorSheet/magicToolbar/MagicToolbarProvider.tsx
var le = /* @__PURE__ */ j.memo(({ children: e }) => {
	let [t, n] = (0, j.useState)({}), r = (0, j.useCallback)((e, t) => {
		n((n) => ({
			...n,
			[e]: t
		}));
	}, []), i = (0, j.useCallback)((e) => {
		n((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, []);
	return /* @__PURE__ */ y(oe.Provider, {
		value: {
			register: r,
			unregister: i
		},
		children: /* @__PURE__ */ y(ae.Provider, {
			value: t,
			children: e
		})
	});
});
le.displayName = "MagicToolbarProvider";
//#endregion
//#region src/components/journalEditorSheet/magicToolbar/ToolbarButton.tsx
var M = ({ onClick: e, text: t, icon: n, disabled: r = !1 }) => {
	let i = (0, j.useContext)(v), a = (0, j.useCallback)(() => {
		e();
	}, [e]);
	return /* @__PURE__ */ b(T, {
		disabled: r,
		css: {
			padding: "0.3em",
			lineHeight: "1em",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			flexBasis: "max-content",
			minWidth: "4em",
			color: i.colors.text,
			":hover": { transform: r ? void 0 : "scale(1.1)" },
			transition: "transform 0.1s ease"
		},
		onClick: a,
		children: [n && /* @__PURE__ */ y("div", {
			css: { fontSize: "2em" },
			children: /* @__PURE__ */ y(n, {})
		}), /* @__PURE__ */ y("div", {
			css: {},
			children: t
		})]
	});
}, ue = () => /* @__PURE__ */ b("div", {
	css: {
		...p,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "1.5em"
	},
	children: [/* @__PURE__ */ y(k, {}), "\xA0 Select a page to edit"]
});
ue.displayName = "NoPageSelected";
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/ai/index.mjs
function de(e) {
	return A({
		tag: "svg",
		attr: { viewBox: "0 0 1024 1024" },
		child: [{
			tag: "path",
			attr: { d: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" },
			child: []
		}]
	})(e);
}
function fe(e) {
	return A({
		tag: "svg",
		attr: {
			t: "1569683552617",
			viewBox: "0 0 1024 1024",
			version: "1.1"
		},
		child: [{
			tag: "path",
			attr: { d: "M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 0.6 0.1 1.3 0.2 1.9-0.1 2-0.2 4.1-0.2 6.1 0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-0.1-4.1-0.2-6.1 0.1-0.6 0.2-1.2 0.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z" },
			child: []
		}]
	})(e);
}
function pe(e) {
	return A({
		tag: "svg",
		attr: {
			viewBox: "0 0 1024 1024",
			fill: "currentColor",
			fillRule: "evenodd"
		},
		child: [{
			tag: "path",
			attr: { d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" },
			child: []
		}]
	})(e);
}
function me(e) {
	return A({
		tag: "svg",
		attr: { viewBox: "0 0 1024 1024" },
		child: [{
			tag: "path",
			attr: { d: "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" },
			child: []
		}]
	})(e);
}
function he(e) {
	return A({
		tag: "svg",
		attr: { viewBox: "0 0 1024 1024" },
		child: [{
			tag: "path",
			attr: { d: "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" },
			child: []
		}]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/bs/index.mjs
function ge(e) {
	return A({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				d: "M13 8a.5.5 0 0 0-.5-.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H12.5A.5.5 0 0 0 13 8"
			},
			child: []
		}, {
			tag: "path",
			attr: {
				fillRule: "evenodd",
				d: "M3.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5"
			},
			child: []
		}]
	})(e);
}
function _e(e) {
	return A({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" },
			child: []
		}, {
			tag: "path",
			attr: { d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" },
			child: []
		}]
	})(e);
}
function ve(e) {
	return A({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [
			{
				tag: "path",
				attr: { d: "M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" },
				child: []
			},
			{
				tag: "path",
				attr: {
					fillRule: "evenodd",
					d: "M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"
				},
				child: []
			},
			{
				tag: "path",
				attr: { d: "M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z" },
				child: []
			}
		]
	})(e);
}
function ye(e) {
	return A({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				d: "M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8"
			},
			child: []
		}, {
			tag: "path",
			attr: {
				fillRule: "evenodd",
				d: "M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5"
			},
			child: []
		}]
	})(e);
}
function be(e) {
	return A({
		tag: "svg",
		attr: {
			fill: "currentColor",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" },
			child: []
		}, {
			tag: "path",
			attr: { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" },
			child: []
		}]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function xe(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Se(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ce(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Se(Object(n), !0).forEach(function(t) {
			xe(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function we(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Te(e, t) {
	if (e == null) return {};
	var n = we(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Ee(e, t) {
	return De(e) || Oe(e, t) || ke(e, t) || je();
}
function De(e) {
	if (Array.isArray(e)) return e;
}
function Oe(e, t) {
	if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
		var n = [], r = !0, i = !1, a = void 0;
		try {
			for (var o = e[Symbol.iterator](), s; !(r = (s = o.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0);
		} catch (e) {
			i = !0, a = e;
		} finally {
			try {
				!r && o.return != null && o.return();
			} finally {
				if (i) throw a;
			}
		}
		return n;
	}
}
function ke(e, t) {
	if (e) {
		if (typeof e == "string") return Ae(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ae(e, t);
	}
}
function Ae(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function je() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/es/state-local.js
function Me(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ne(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Pe(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ne(Object(n), !0).forEach(function(t) {
			Me(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Fe() {
	var e = [...arguments];
	return function(t) {
		return e.reduceRight(function(e, t) {
			return t(e);
		}, t);
	};
}
function Ie(e) {
	return function t() {
		var n = this, r = [...arguments];
		return r.length >= e.length ? e.apply(this, r) : function() {
			var e = [...arguments];
			return t.apply(n, [].concat(r, e));
		};
	};
}
function Le(e) {
	return {}.toString.call(e).includes("Object");
}
function Re(e) {
	return !Object.keys(e).length;
}
function ze(e) {
	return typeof e == "function";
}
function Be(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function Ve(e, t) {
	return Le(t) || Ke("changeType"), Object.keys(t).some(function(t) {
		return !Be(e, t);
	}) && Ke("changeField"), t;
}
function He(e) {
	ze(e) || Ke("selectorType");
}
function Ue(e) {
	ze(e) || Le(e) || Ke("handlerType"), Le(e) && Object.values(e).some(function(e) {
		return !ze(e);
	}) && Ke("handlersType");
}
function We(e) {
	e || Ke("initialIsRequired"), Le(e) || Ke("initialType"), Re(e) && Ke("initialContent");
}
function Ge(e, t) {
	throw Error(e[t] || e.default);
}
var Ke = Ie(Ge)({
	initialIsRequired: "initial state is required",
	initialType: "initial state should be an object",
	initialContent: "initial state shouldn't be an empty object",
	handlerType: "handler should be an object or a function",
	handlersType: "all handlers should be a functions",
	selectorType: "selector should be a function",
	changeType: "provided value of changes should be an object",
	changeField: "it seams you want to change a field in the state which is not specified in the \"initial\" state",
	default: "an unknown error accured in `state-local` package"
}), qe = {
	changes: Ve,
	selector: He,
	handler: Ue,
	initial: We
};
function Je(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	qe.initial(e), qe.handler(t);
	var n = { current: e }, r = Ie(Ze)(n, t), i = Ie(Xe)(n), a = Ie(qe.changes)(e), o = Ie(Ye)(n);
	function s() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(e) {
			return e;
		};
		return qe.selector(e), e(n.current);
	}
	function c(e) {
		Fe(r, i, a, o)(e);
	}
	return [s, c];
}
function Ye(e, t) {
	return ze(t) ? t(e.current) : t;
}
function Xe(e, t) {
	return e.current = Pe(Pe({}, e.current), t), t;
}
function Ze(e, t, n) {
	return ze(t) ? t(e.current) : Object.keys(n).forEach(function(n) {
		return t[n]?.call(t, e.current[n]);
	}), n;
}
var Qe = { create: Je }, $e = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" } };
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function et(e) {
	return function t() {
		var n = this, r = [...arguments];
		return r.length >= e.length ? e.apply(this, r) : function() {
			var e = [...arguments];
			return t.apply(n, [].concat(r, e));
		};
	};
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function tt(e) {
	return {}.toString.call(e).includes("Object");
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/validators/index.js
function nt(e) {
	return e || ot("configIsRequired"), tt(e) || ot("configType"), e.urls ? (rt(), { paths: { vs: e.urls.monacoBase } }) : e;
}
function rt() {
	console.warn(at.deprecation);
}
function it(e, t) {
	throw Error(e[t] || e.default);
}
var at = {
	configIsRequired: "the configuration object is required",
	configType: "the configuration object should be an object",
	default: "an unknown error accured in `@monaco-editor/loader` package",
	deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
}, ot = et(it)(at), st = { config: nt }, ct = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduceRight(function(e, t) {
			return t(e);
		}, t);
	};
};
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function lt(e, t) {
	return Object.keys(t).forEach(function(n) {
		t[n] instanceof Object && e[n] && Object.assign(t[n], lt(e[n], t[n]));
	}), Ce(Ce({}, e), t);
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var ut = {
	type: "cancelation",
	msg: "operation is manually canceled"
};
function dt(e) {
	var t = !1, n = new Promise(function(n, r) {
		e.then(function(e) {
			return t ? r(ut) : n(e);
		}), e.catch(r);
	});
	return n.cancel = function() {
		return t = !0;
	}, n;
}
//#endregion
//#region node_modules/.pnpm/@monaco-editor+loader@1.5.0/node_modules/@monaco-editor/loader/lib/es/loader/index.js
var ft = Ee(Qe.create({
	config: $e,
	isInitialized: !1,
	resolve: null,
	reject: null,
	monaco: null
}), 2), pt = ft[0], mt = ft[1];
function ht(e) {
	var t = st.config(e), n = t.monaco, r = Te(t, ["monaco"]);
	mt(function(e) {
		return {
			config: lt(e.config, r),
			monaco: n
		};
	});
}
function gt() {
	var e = pt(function(e) {
		return {
			monaco: e.monaco,
			isInitialized: e.isInitialized,
			resolve: e.resolve
		};
	});
	if (!e.isInitialized) {
		if (mt({ isInitialized: !0 }), e.monaco) return e.resolve(e.monaco), dt(Ct);
		if (window.monaco && window.monaco.editor) return xt(window.monaco), e.resolve(window.monaco), dt(Ct);
		ct(_t, yt)(bt);
	}
	return dt(Ct);
}
function _t(e) {
	return document.body.appendChild(e);
}
function vt(e) {
	var t = document.createElement("script");
	return e && (t.src = e), t;
}
function yt(e) {
	var t = pt(function(e) {
		return {
			config: e.config,
			reject: e.reject
		};
	}), n = vt(`${t.config.paths.vs}/loader.js`);
	return n.onload = function() {
		return e();
	}, n.onerror = t.reject, n;
}
function bt() {
	var e = pt(function(e) {
		return {
			config: e.config,
			resolve: e.resolve,
			reject: e.reject
		};
	}), t = window.require;
	t.config(e.config), t(["vs/editor/editor.main"], function(t) {
		xt(t), e.resolve(t);
	}, function(t) {
		e.reject(t);
	});
}
function xt(e) {
	pt().monaco || mt({ monaco: e });
}
function St() {
	return pt(function(e) {
		return e.monaco;
	});
}
var Ct = new Promise(function(e, t) {
	return mt({
		resolve: e,
		reject: t
	});
}), wt = {
	config: ht,
	init: gt,
	__getMonacoInstance: St
}, Tt = {
	wrapper: {
		display: "flex",
		position: "relative",
		textAlign: "initial"
	},
	fullWidth: { width: "100%" },
	hide: { display: "none" }
}, Et = { container: {
	display: "flex",
	height: "100%",
	width: "100%",
	justifyContent: "center",
	alignItems: "center"
} };
function Dt({ children: e }) {
	return j.createElement("div", { style: Et.container }, e);
}
var Ot = Dt;
function kt({ width: e, height: t, isEditorReady: n, loading: r, _ref: i, className: a, wrapperProps: o }) {
	return j.createElement("section", {
		style: {
			...Tt.wrapper,
			width: e,
			height: t
		},
		...o
	}, !n && j.createElement(Ot, null, r), j.createElement("div", {
		ref: i,
		style: {
			...Tt.fullWidth,
			...!n && Tt.hide
		},
		className: a
	}));
}
var At = (0, j.memo)(kt);
function jt(e) {
	(0, j.useEffect)(e, []);
}
var Mt = jt;
function Nt(e, t, n = !0) {
	let r = (0, j.useRef)(!0);
	(0, j.useEffect)(r.current || !n ? () => {
		r.current = !1;
	} : e, t);
}
var N = Nt;
function Pt() {}
function Ft(e, t, n, r) {
	return It(e, r) || Lt(e, t, n, r);
}
function It(e, t) {
	return e.editor.getModel(Rt(e, t));
}
function Lt(e, t, n, r) {
	return e.editor.createModel(t, n, r ? Rt(e, r) : void 0);
}
function Rt(e, t) {
	return e.Uri.parse(t);
}
function zt({ original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: i, originalModelPath: a, modifiedModelPath: o, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: c = !1, theme: l = "light", loading: u = "Loading...", options: d = {}, height: f = "100%", width: p = "100%", className: m, wrapperProps: h = {}, beforeMount: g = Pt, onMount: _ = Pt }) {
	let [v, y] = (0, j.useState)(!1), [b, x] = (0, j.useState)(!0), S = (0, j.useRef)(null), C = (0, j.useRef)(null), w = (0, j.useRef)(null), T = (0, j.useRef)(_), E = (0, j.useRef)(g), D = (0, j.useRef)(!1);
	Mt(() => {
		let e = wt.init();
		return e.then((e) => (C.current = e) && x(!1)).catch((e) => e?.type !== "cancelation" && console.error("Monaco initialization: error:", e)), () => S.current ? k() : e.cancel();
	}), N(() => {
		if (S.current && C.current) {
			let t = S.current.getOriginalEditor(), i = Ft(C.current, e || "", r || n || "text", a || "");
			i !== t.getModel() && t.setModel(i);
		}
	}, [a], v), N(() => {
		if (S.current && C.current) {
			let e = S.current.getModifiedEditor(), r = Ft(C.current, t || "", i || n || "text", o || "");
			r !== e.getModel() && e.setModel(r);
		}
	}, [o], v), N(() => {
		let e = S.current.getModifiedEditor();
		e.getOption(C.current.editor.EditorOption.readOnly) ? e.setValue(t || "") : t !== e.getValue() && (e.executeEdits("", [{
			range: e.getModel().getFullModelRange(),
			text: t || "",
			forceMoveMarkers: !0
		}]), e.pushUndoStop());
	}, [t], v), N(() => {
		S.current?.getModel()?.original.setValue(e || "");
	}, [e], v), N(() => {
		let { original: e, modified: t } = S.current.getModel();
		C.current.editor.setModelLanguage(e, r || n || "text"), C.current.editor.setModelLanguage(t, i || n || "text");
	}, [
		n,
		r,
		i
	], v), N(() => {
		C.current?.editor.setTheme(l);
	}, [l], v), N(() => {
		S.current?.updateOptions(d);
	}, [d], v);
	let O = (0, j.useCallback)(() => {
		if (!C.current) return;
		E.current(C.current);
		let s = Ft(C.current, e || "", r || n || "text", a || ""), c = Ft(C.current, t || "", i || n || "text", o || "");
		S.current?.setModel({
			original: s,
			modified: c
		});
	}, [
		n,
		t,
		i,
		e,
		r,
		a,
		o
	]), ee = (0, j.useCallback)(() => {
		!D.current && w.current && (S.current = C.current.editor.createDiffEditor(w.current, {
			automaticLayout: !0,
			...d
		}), O(), C.current?.editor.setTheme(l), y(!0), D.current = !0);
	}, [
		d,
		l,
		O
	]);
	(0, j.useEffect)(() => {
		v && T.current(S.current, C.current);
	}, [v]), (0, j.useEffect)(() => {
		!b && !v && ee();
	}, [
		b,
		v,
		ee
	]);
	function k() {
		let e = S.current?.getModel();
		s || e?.original?.dispose(), c || e?.modified?.dispose(), S.current?.dispose();
	}
	return j.createElement(At, {
		width: p,
		height: f,
		isEditorReady: v,
		loading: u,
		_ref: w,
		className: m,
		wrapperProps: h
	});
}
var Bt = (0, j.memo)(zt);
function Vt(e) {
	let t = (0, j.useRef)();
	return (0, j.useEffect)(() => {
		t.current = e;
	}, [e]), t.current;
}
var Ht = Vt, Ut = /* @__PURE__ */ new Map();
function Wt({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: i, path: a, theme: o = "light", line: s, loading: c = "Loading...", options: l = {}, overrideServices: u = {}, saveViewState: d = !0, keepCurrentModel: f = !1, width: p = "100%", height: m = "100%", className: h, wrapperProps: g = {}, beforeMount: _ = Pt, onMount: v = Pt, onChange: y, onValidate: b = Pt }) {
	let [x, S] = (0, j.useState)(!1), [C, w] = (0, j.useState)(!0), T = (0, j.useRef)(null), E = (0, j.useRef)(null), D = (0, j.useRef)(null), O = (0, j.useRef)(v), ee = (0, j.useRef)(_), k = (0, j.useRef)(), te = (0, j.useRef)(r), A = Ht(a), ne = (0, j.useRef)(!1), re = (0, j.useRef)(!1);
	Mt(() => {
		let e = wt.init();
		return e.then((e) => (T.current = e) && w(!1)).catch((e) => e?.type !== "cancelation" && console.error("Monaco initialization: error:", e)), () => E.current ? ae() : e.cancel();
	}), N(() => {
		let o = Ft(T.current, e || r || "", t || i || "", a || n || "");
		o !== E.current?.getModel() && (d && Ut.set(A, E.current?.saveViewState()), E.current?.setModel(o), d && E.current?.restoreViewState(Ut.get(a)));
	}, [a], x), N(() => {
		E.current?.updateOptions(l);
	}, [l], x), N(() => {
		!E.current || r === void 0 || (E.current.getOption(T.current.editor.EditorOption.readOnly) ? E.current.setValue(r) : r !== E.current.getValue() && (re.current = !0, E.current.executeEdits("", [{
			range: E.current.getModel().getFullModelRange(),
			text: r,
			forceMoveMarkers: !0
		}]), E.current.pushUndoStop(), re.current = !1));
	}, [r], x), N(() => {
		let e = E.current?.getModel();
		e && i && T.current?.editor.setModelLanguage(e, i);
	}, [i], x), N(() => {
		s !== void 0 && E.current?.revealLine(s);
	}, [s], x), N(() => {
		T.current?.editor.setTheme(o);
	}, [o], x);
	let ie = (0, j.useCallback)(() => {
		if (!(!D.current || !T.current) && !ne.current) {
			ee.current(T.current);
			let c = a || n, f = Ft(T.current, r || e || "", t || i || "", c || "");
			E.current = T.current?.editor.create(D.current, {
				model: f,
				automaticLayout: !0,
				...l
			}, u), d && E.current.restoreViewState(Ut.get(c)), T.current.editor.setTheme(o), s !== void 0 && E.current.revealLine(s), S(!0), ne.current = !0;
		}
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		l,
		u,
		d,
		o,
		s
	]);
	(0, j.useEffect)(() => {
		x && O.current(E.current, T.current);
	}, [x]), (0, j.useEffect)(() => {
		!C && !x && ie();
	}, [
		C,
		x,
		ie
	]), te.current = r, (0, j.useEffect)(() => {
		x && y && (k.current?.dispose(), k.current = E.current?.onDidChangeModelContent((e) => {
			re.current || y(E.current.getValue(), e);
		}));
	}, [x, y]), (0, j.useEffect)(() => {
		if (x) {
			let e = T.current.editor.onDidChangeMarkers((e) => {
				let t = E.current.getModel()?.uri;
				if (t && e.find((e) => e.path === t.path)) {
					let e = T.current.editor.getModelMarkers({ resource: t });
					b?.(e);
				}
			});
			return () => {
				e?.dispose();
			};
		}
		return () => {};
	}, [x, b]);
	function ae() {
		k.current?.dispose(), f ? d && Ut.set(a, E.current.saveViewState()) : E.current.getModel()?.dispose(), E.current.dispose();
	}
	return j.createElement(At, {
		width: p,
		height: m,
		isEditorReady: x,
		loading: c,
		_ref: D,
		className: h,
		wrapperProps: g
	});
}
var Gt = (0, j.memo)(Wt), Kt = Object.defineProperty, qt = (e) => {
	throw TypeError(e);
}, Jt = (e, t, n) => t in e ? Kt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Yt = (e, t) => {
	for (var n in t) Kt(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Xt = (e, t, n) => Jt(e, typeof t == "symbol" ? t : t + "", n), Zt = (e, t, n) => t.has(e) || qt("Cannot " + n), Qt = (e, t, n) => (Zt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $t = (e, t, n) => t.has(e) ? qt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), en = {};
Yt(en, {
	languages: () => Dc,
	options: () => Ac,
	parsers: () => jc,
	printers: () => Cl
});
var tn = (e, t) => (n, r, ...i) => n | 1 && r == null ? void 0 : (t.call(r) ?? r[e]).apply(r, i), nn = String.prototype.replaceAll ?? function(e, t) {
	return e.global ? this.replace(e, t) : this.split(e).join(t);
}, P = tn("replaceAll", function() {
	if (typeof this == "string") return nn;
});
function rn(e) {
	return this[e < 0 ? this.length + e : e];
}
var an = tn("at", function() {
	if (Array.isArray(this) || typeof this == "string") return rn;
}), on = () => {}, sn = "string", cn = "array", ln = "cursor", un = "indent", dn = "align", fn = "trim", pn = "group", mn = "fill", hn = "if-break", gn = "indent-if-break", _n = "line-suffix", vn = "line-suffix-boundary", yn = "line", bn = "label", xn = "break-parent", Sn = new Set([
	ln,
	un,
	dn,
	fn,
	pn,
	mn,
	hn,
	gn,
	_n,
	vn,
	yn,
	bn,
	xn
]);
function Cn(e) {
	if (typeof e == "string") return sn;
	if (Array.isArray(e)) return cn;
	if (!e) return;
	let { type: t } = e;
	if (Sn.has(t)) return t;
}
var wn = Cn, Tn = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function En(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (wn(e)) throw Error("doc is valid.");
	let n = Object.prototype.toString.call(e);
	if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
	let r = Tn([...Sn].map((e) => `'${e}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var Dn = class extends Error {
	name = "InvalidDocError";
	constructor(e) {
		super(En(e)), this.doc = e;
	}
};
function On(e, t) {
	if (typeof e == "string") return t(e);
	let n = /* @__PURE__ */ new Map();
	return r(e);
	function r(e) {
		if (n.has(e)) return n.get(e);
		let t = i(e);
		return n.set(e, t), t;
	}
	function i(e) {
		switch (wn(e)) {
			case cn: return t(e.map(r));
			case mn: return t({
				...e,
				parts: e.parts.map(r)
			});
			case hn: return t({
				...e,
				breakContents: r(e.breakContents),
				flatContents: r(e.flatContents)
			});
			case pn: {
				let { expandedStates: n, contents: i } = e;
				return n ? (n = n.map(r), i = n[0]) : i = r(i), t({
					...e,
					contents: i,
					expandedStates: n
				});
			}
			case dn:
			case un:
			case gn:
			case bn:
			case _n: return t({
				...e,
				contents: r(e.contents)
			});
			case sn:
			case ln:
			case fn:
			case vn:
			case yn:
			case xn: return t(e);
			default: throw new Dn(e);
		}
	}
}
function kn(e, t = Hn) {
	return On(e, (e) => typeof e == "string" ? Vn(t, e.split("\n")) : e);
}
var An = on, jn = on, Mn = on, Nn = on;
function Pn(e) {
	return An(e), {
		type: un,
		contents: e
	};
}
function Fn(e, t) {
	return Nn(e), An(t), {
		type: dn,
		contents: t,
		n: e
	};
}
function In(e) {
	return Fn(-Infinity, e);
}
var Ln = { type: xn };
function Rn(e) {
	return Mn(e), {
		type: mn,
		parts: e
	};
}
function F(e, t = {}) {
	return An(e), jn(t.expandedStates, !0), {
		type: pn,
		id: t.id,
		contents: e,
		break: !!t.shouldBreak,
		expandedStates: t.expandedStates
	};
}
function zn(e, t = "", n = {}) {
	return An(e), t !== "" && An(t), {
		type: hn,
		breakContents: e,
		flatContents: t,
		groupId: n.groupId
	};
}
function Bn(e, t) {
	return An(e), {
		type: gn,
		contents: e,
		groupId: t.groupId,
		negate: t.negate
	};
}
function Vn(e, t) {
	An(e), jn(t);
	let n = [];
	for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
	return n;
}
var I = { type: yn }, L = {
	type: yn,
	soft: !0
}, R = [{
	type: yn,
	hard: !0
}, Ln], Hn = [{
	type: yn,
	hard: !0,
	literal: !0
}, Ln], Un = Object.freeze({
	character: "'",
	codePoint: 39
}), Wn = Object.freeze({
	character: "\"",
	codePoint: 34
}), Gn = Object.freeze({
	preferred: Un,
	alternate: Wn
}), Kn = Object.freeze({
	preferred: Wn,
	alternate: Un
});
function qn(e, t) {
	let { preferred: n, alternate: r } = t === !0 || t === "'" ? Gn : Kn, { length: i } = e, a = 0, o = 0;
	for (let t = 0; t < i; t++) {
		let i = e.charCodeAt(t);
		i === n.codePoint ? a++ : i === r.codePoint && o++;
	}
	return (a > o ? r : n).character;
}
var Jn = qn;
function Yn(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var z = new class {
	#e;
	constructor(e) {
		this.#e = new Set(e);
	}
	getLeadingWhitespaceCount(e) {
		let t = this.#e, n = 0;
		for (let r = 0; r < e.length && t.has(e.charAt(r)); r++) n++;
		return n;
	}
	getTrailingWhitespaceCount(e) {
		let t = this.#e, n = 0;
		for (let r = e.length - 1; r >= 0 && t.has(e.charAt(r)); r--) n++;
		return n;
	}
	getLeadingWhitespace(e) {
		let t = this.getLeadingWhitespaceCount(e);
		return e.slice(0, t);
	}
	getTrailingWhitespace(e) {
		let t = this.getTrailingWhitespaceCount(e);
		return e.slice(e.length - t);
	}
	hasLeadingWhitespace(e) {
		return this.#e.has(e.charAt(0));
	}
	hasTrailingWhitespace(e) {
		return this.#e.has(an(0, e, -1));
	}
	trimStart(e) {
		let t = this.getLeadingWhitespaceCount(e);
		return e.slice(t);
	}
	trimEnd(e) {
		let t = this.getTrailingWhitespaceCount(e);
		return e.slice(0, e.length - t);
	}
	trim(e) {
		return this.trimEnd(this.trimStart(e));
	}
	split(e, t = !1) {
		let n = `[${Yn([...this.#e].join(""))}]+`, r = new RegExp(t ? `(${n})` : n, "u");
		return e.split(r);
	}
	hasWhitespaceCharacter(e) {
		let t = this.#e;
		return Array.prototype.some.call(e, (e) => t.has(e));
	}
	hasNonWhitespaceCharacter(e) {
		let t = this.#e;
		return Array.prototype.some.call(e, (e) => !t.has(e));
	}
	isWhitespaceOnly(e) {
		let t = this.#e;
		return Array.prototype.every.call(e, (e) => t.has(e));
	}
	#t(e) {
		let t = Infinity;
		for (let n of e.split("\n")) {
			if (n.length === 0) continue;
			let e = this.getLeadingWhitespaceCount(n);
			if (e === 0) return 0;
			n.length !== e && e < t && (t = e);
		}
		return t === Infinity ? 0 : t;
	}
	dedentString(e) {
		let t = this.#t(e);
		return t === 0 ? e : e.split("\n").map((e) => e.slice(t)).join("\n");
	}
}([
	"	",
	"\n",
	"\f",
	"\r",
	" "
]), Xn = class extends Error {
	name = "UnexpectedNodeError";
	constructor(e, t, n = "type") {
		super(`Unexpected ${t} node ${n}: ${JSON.stringify(e[n])}.`), this.node = e;
	}
}, Zn = new Set([
	"sourceSpan",
	"startSourceSpan",
	"endSourceSpan",
	"nameSpan",
	"valueSpan",
	"keySpan",
	"tagDefinition",
	"tokens",
	"valueTokens",
	"switchValueSourceSpan",
	"expSourceSpan",
	"valueSourceSpan"
]), Qn = new Set([
	"if",
	"else if",
	"for",
	"switch",
	"case"
]);
function $n(e, t, n) {
	if (e.kind === "text" || e.kind === "comment") return null;
	if (e.kind === "yaml" && delete t.value, e.kind === "attribute") {
		let { fullName: r, value: i } = e;
		r === "style" || r === "class" || r === "srcset" && (n.fullName === "img" || n.fullName === "source") || r === "allow" && n.fullName === "iframe" || r.startsWith("on") || r.startsWith("@") || r.startsWith(":") || r.startsWith(".") || r.startsWith("#") || r.startsWith("v-") || r === "vars" && n.fullName === "style" || (r === "setup" || r === "generic") && n.fullName === "script" || r === "slot-scope" || r.startsWith("(") || r.startsWith("[") || r.startsWith("*") || r.startsWith("bind") || r.startsWith("i18n") || r.startsWith("on-") || r.startsWith("ng-") || i?.includes("{{") ? delete t.value : i && (t.value = P(0, i, /'|&quot;|&apos;/gu, "\""));
	}
	if (e.kind === "docType" && (t.value = P(0, e.value.toLowerCase(), /\s+/gu, " ")), e.kind === "angularControlFlowBlock" && e.parameters?.children) for (let n of t.parameters.children) Qn.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
	e.kind === "angularIcuExpression" && (t.switchValue = e.switchValue.trim()), e.kind === "angularLetDeclarationInitializer" && delete t.value, e.kind === "element" && e.isVoid && !e.isSelfClosing && (t.isSelfClosing = !0);
}
$n.ignoredProperties = Zn;
var er = $n;
function tr(e, t = !0) {
	return [Pn([L, e]), t ? L : ""];
}
function nr(e, t) {
	let n = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
	return n && (n.type === "ObjectExpression" || n.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression" || t.parser === "__ng_binding" || t.parser === "__ng_directive") && (n.type === "TemplateLiteral" || n.type === "StringLiteral"));
}
async function B(e, t, n, r) {
	n = {
		__isInHtmlAttribute: !0,
		__embeddedInHtml: !0,
		...n
	};
	let i = !0;
	r && (n.__onHtmlBindingRoot = (e, t) => {
		i = r(e, t);
	});
	let a = await t(e, n, t);
	return i ? F(a) : tr(a);
}
function rr(e, t, n, r) {
	let { node: i } = n, a = r.originalText.slice(i.sourceSpan.start.offset, i.sourceSpan.end.offset);
	return /^\s*$/u.test(a) ? "" : B(a, e, {
		parser: "__ng_directive",
		__isInHtmlAttribute: !1
	}, nr);
}
var ir = rr, ar = Array.prototype.toReversed ?? function() {
	return [...this].reverse();
}, or = tn("toReversed", function() {
	if (Array.isArray(this)) return ar;
});
function sr() {
	let e = globalThis, t = e.Deno?.build?.os;
	return typeof t == "string" ? t === "windows" : e.navigator?.platform?.startsWith("Win") ?? e.process?.platform?.startsWith("win") ?? !1;
}
var cr = sr();
function lr(e) {
	if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw TypeError(`URL must be a file URL: received "${e.protocol}"`);
	return e;
}
function ur(e) {
	return e = lr(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function dr(e) {
	e = lr(e);
	let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
	return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function fr(e) {
	return cr ? dr(e) : ur(e);
}
var pr = (e) => String(e).split(/[/\\]/u).pop(), mr = (e) => String(e).startsWith("file:");
function hr(e) {
	return Array.isArray(e) && e.length > 0;
}
var gr = hr;
function _r(e, t) {
	if (!t) return;
	let n = pr(t).toLowerCase();
	return e.find(({ filenames: e }) => e?.some((e) => e.toLowerCase() === n)) ?? e.find(({ extensions: e }) => e?.some((e) => n.endsWith(e)));
}
function vr(e, t) {
	if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => e?.includes(t)) ?? e.find(({ extensions: e }) => e?.includes(`.${t}`));
}
var yr = void 0;
function br(e, t) {
	if (t) {
		if (mr(t)) try {
			t = fr(t);
		} catch {
			return;
		}
		if (typeof t == "string") return e.find(({ isSupported: e }) => e?.({ filepath: t }));
	}
}
function xr(e, t) {
	let n = or(0, e.plugins).flatMap((e) => e.languages ?? []);
	return (vr(n, t.language) ?? _r(n, t.physicalFile) ?? _r(n, t.file) ?? br(n, t.physicalFile) ?? br(n, t.file) ?? yr?.(n, t.physicalFile))?.parsers[0];
}
var Sr = xr, Cr = Symbol.for("PRETTIER_IS_FRONT_MATTER");
function wr(e) {
	return !!e?.[Cr];
}
var Tr = wr, Er = 3;
function Dr(e) {
	let t = e.slice(0, Er);
	if (t !== "---" && t !== "+++") return;
	let n = e.indexOf("\n", Er);
	if (n === -1) return;
	let r = e.slice(Er, n).trim(), i = e.indexOf(`
${t}`, n), a = r;
	if (a ||= t === "+++" ? "toml" : "yaml", i === -1 && t === "---" && a === "yaml" && (i = e.indexOf("\n...", n)), i === -1) return;
	let o = i + 1 + Er, s = e.charAt(o + 1);
	if (!/\s?/u.test(s)) return;
	let c = e.slice(0, o), l;
	return {
		language: a,
		explicitLanguage: r || null,
		value: e.slice(n + 1, i),
		startDelimiter: t,
		endDelimiter: c.slice(-Er),
		raw: c,
		start: {
			line: 1,
			column: 0,
			index: 0
		},
		end: {
			index: c.length,
			get line() {
				return l ??= c.split("\n"), l.length;
			},
			get column() {
				return l ??= c.split("\n"), an(0, l, -1).length;
			}
		},
		[Cr]: !0
	};
}
function Or(e) {
	let t = Dr(e);
	return t ? {
		frontMatter: t,
		get content() {
			let { raw: n } = t;
			return P(0, n, /[^\n]/gu, " ") + e.slice(n.length);
		}
	} : { content: e };
}
var kr = Or, Ar = "inline", jr = {
	area: "none",
	base: "none",
	basefont: "none",
	datalist: "none",
	head: "none",
	link: "none",
	meta: "none",
	noembed: "none",
	noframes: "none",
	param: "block",
	rp: "none",
	script: "block",
	style: "none",
	template: "inline",
	title: "none",
	html: "block",
	body: "block",
	address: "block",
	blockquote: "block",
	center: "block",
	dialog: "block",
	div: "block",
	figure: "block",
	figcaption: "block",
	footer: "block",
	form: "block",
	header: "block",
	hr: "block",
	legend: "block",
	listing: "block",
	main: "block",
	p: "block",
	plaintext: "block",
	pre: "block",
	search: "block",
	xmp: "block",
	slot: "contents",
	ruby: "ruby",
	rt: "ruby-text",
	article: "block",
	aside: "block",
	h1: "block",
	h2: "block",
	h3: "block",
	h4: "block",
	h5: "block",
	h6: "block",
	hgroup: "block",
	nav: "block",
	section: "block",
	dir: "block",
	dd: "block",
	dl: "block",
	dt: "block",
	menu: "block",
	ol: "block",
	ul: "block",
	li: "list-item",
	table: "table",
	caption: "table-caption",
	colgroup: "table-column-group",
	col: "table-column",
	thead: "table-header-group",
	tbody: "table-row-group",
	tfoot: "table-footer-group",
	tr: "table-row",
	td: "table-cell",
	th: "table-cell",
	input: "inline-block",
	button: "inline-block",
	fieldset: "block",
	details: "block",
	summary: "block",
	marquee: "inline-block",
	select: "inline-block",
	source: "block",
	track: "block",
	meter: "inline-block",
	progress: "inline-block",
	object: "inline-block",
	video: "inline-block",
	audio: "inline-block",
	option: "block",
	optgroup: "block"
}, Mr = "normal", Nr = {
	listing: "pre",
	plaintext: "pre",
	pre: "pre",
	xmp: "pre",
	nobr: "nowrap",
	table: "initial",
	textarea: "pre-wrap"
};
function Pr(e) {
	return e.kind === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
var Fr = Pr, Ir = (e) => P(0, e, /^[\t\f\r ]*\n/gu, ""), Lr = (e) => Ir(z.trimEnd(e)), Rr = (e) => {
	let t = e, n = z.getLeadingWhitespace(t);
	n && (t = t.slice(n.length));
	let r = z.getTrailingWhitespace(t);
	return r && (t = t.slice(0, -r.length)), {
		leadingWhitespace: n,
		trailingWhitespace: r,
		text: t
	};
};
function zr(e, t) {
	return !!(e.kind === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.kind === "ieConditionalComment" && !e.complete || yi(e) && e.children.some((e) => e.kind !== "text" && e.kind !== "interpolation") || Di(e, t) && !Ur(e, t) && e.kind !== "interpolation");
}
function Br(e) {
	return e.kind === "attribute" || !e.parent || !e.prev ? !1 : Vr(e.prev);
}
function Vr(e) {
	return e.kind === "comment" && e.value.trim() === "prettier-ignore";
}
function Hr(e) {
	return e.kind === "text" || e.kind === "comment";
}
function Ur(e, t) {
	return e.kind === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || e.fullName === "mj-style" && t.parser === "mjml" || Fr(e) && (e.name === "script" || e.name === "style"));
}
function Wr(e, t) {
	return e.children && !Ur(e, t);
}
function Gr(e, t) {
	return Ur(e, t) || e.kind === "interpolation" || Kr(e);
}
function Kr(e) {
	return Si(e).startsWith("pre");
}
function qr(e, t) {
	let n = r();
	if (n && !e.prev && e.parent?.tagDefinition?.ignoreFirstLf) return e.kind === "interpolation";
	return n;
	function r() {
		return Tr(e) || e.kind === "angularControlFlowBlock" ? !1 : (e.kind === "text" || e.kind === "interpolation") && e.prev && (e.prev.kind === "text" || e.prev.kind === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : yi(e.parent) ? !0 : !(!e.prev && (e.parent.kind === "root" || yi(e) && e.parent || Ur(e.parent, t) || Ti(e.parent, t) || !mi(e.parent.cssDisplay)) || e.prev && !_i(e.prev.cssDisplay));
	}
}
function Jr(e, t) {
	return Tr(e) || e.kind === "angularControlFlowBlock" ? !1 : (e.kind === "text" || e.kind === "interpolation") && e.next && (e.next.kind === "text" || e.next.kind === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : yi(e.parent) ? !0 : !(!e.next && (e.parent.kind === "root" || yi(e) && e.parent || Ur(e.parent, t) || Ti(e.parent, t) || !hi(e.parent.cssDisplay)) || e.next && !gi(e.next.cssDisplay));
}
function Yr(e, t) {
	return vi(e.cssDisplay) && !Ur(e, t);
}
function Xr(e) {
	return Tr(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function Zr(e) {
	return Qr(e) || e.kind === "element" && e.children.length > 0 && ([
		"body",
		"script",
		"style"
	].includes(e.name) || e.children.some((e) => oi(e))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.kind !== "text" && ni(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || ri(e.lastChild));
}
function Qr(e) {
	return e.kind === "element" && e.children.length > 0 && ([
		"html",
		"head",
		"ul",
		"ol",
		"select"
	].includes(e.name) || e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell");
}
function $r(e) {
	return ii(e) || e.prev && ei(e.prev) || ti(e);
}
function ei(e) {
	return ii(e) || e.kind === "element" && e.fullName === "br" || ti(e);
}
function ti(e) {
	return ni(e) && ri(e);
}
function ni(e) {
	return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.kind === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function ri(e) {
	return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.kind === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function ii(e) {
	switch (e.kind) {
		case "ieConditionalComment":
		case "comment":
		case "directive": return !0;
		case "element": return ["script", "select"].includes(e.name);
	}
	return !1;
}
function ai(e) {
	return e.lastChild ? ai(e.lastChild) : e;
}
function oi(e) {
	return e.children?.some((e) => e.kind !== "text");
}
function si(e) {
	if (e) switch (e) {
		case "module":
		case "text/javascript":
		case "text/babel":
		case "text/jsx":
		case "application/javascript": return "babel";
		case "application/x-typescript": return "typescript";
		case "text/markdown": return "markdown";
		case "text/html": return "html";
		case "text/x-handlebars-template": return "glimmer";
		default: if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules") return "json";
	}
}
function ci(e, t) {
	let { name: n, attrMap: r } = e;
	if (n !== "script" || Object.prototype.hasOwnProperty.call(r, "src")) return;
	let { type: i, lang: a } = e.attrMap;
	return !a && !i ? "babel" : Sr(t, { language: a }) ?? si(i);
}
function li(e, t) {
	if (!Di(e, t)) return;
	let { attrMap: n } = e;
	if (Object.prototype.hasOwnProperty.call(n, "src")) return;
	let { type: r, lang: i } = n;
	return Sr(t, { language: i }) ?? si(r);
}
function di(e, t) {
	if (e.name === "style") {
		let { lang: n } = e.attrMap;
		return n ? Sr(t, { language: n }) : "css";
	}
	if (e.name === "mj-style" && t.parser === "mjml") return "css";
}
function fi(e, t) {
	return ci(e, t) ?? di(e, t) ?? li(e, t);
}
function pi(e) {
	return e === "block" || e === "list-item" || e.startsWith("table");
}
function mi(e) {
	return !pi(e) && e !== "inline-block";
}
function hi(e) {
	return !pi(e) && e !== "inline-block";
}
function gi(e) {
	return !pi(e);
}
function _i(e) {
	return !pi(e);
}
function vi(e) {
	return !pi(e) && e !== "inline-block";
}
function yi(e) {
	return Si(e).startsWith("pre");
}
function bi(e, t) {
	let n = e;
	for (; n;) {
		if (t(n)) return !0;
		n = n.parent;
	}
	return !1;
}
function xi(e, t) {
	if (Ei(e, t)) return "block";
	if (e.prev?.kind === "comment") {
		let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
		if (t) return t[1];
	}
	let n = !1;
	if (e.kind === "element" && e.namespace === "svg") if (bi(e, (e) => e.fullName === "svg:foreignObject")) n = !0;
	else return e.name === "svg" ? "inline-block" : "block";
	switch (t.htmlWhitespaceSensitivity) {
		case "strict": return "inline";
		case "ignore": return "block";
		default: if (e.kind === "element" && (!e.namespace || n || Fr(e)) && Object.prototype.hasOwnProperty.call(jr, e.name)) return jr[e.name];
	}
	return Ar;
}
function Si(e) {
	return e.kind === "element" && (!e.namespace || Fr(e)) && Object.prototype.hasOwnProperty.call(Nr, e.name) ? Nr[e.name] : Mr;
}
function Ci(e) {
	return P(0, P(0, e, "&apos;", "'"), "&quot;", "\"");
}
function V(e) {
	return Ci(e.value);
}
var wi = new Set([
	"template",
	"style",
	"script"
]);
function Ti(e, t) {
	return Ei(e, t) && !wi.has(e.fullName);
}
function Ei(e, t) {
	return t.parser === "vue" && e.kind === "element" && e.parent.kind === "root" && e.fullName.toLowerCase() !== "html";
}
function Di(e, t) {
	return Ei(e, t) && (Ti(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function Oi(e) {
	let t = e.fullName;
	return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function ki(e, t) {
	let n = e.parent;
	if (!Ei(n, t)) return !1;
	let r = n.fullName, i = e.fullName;
	return r === "script" && i === "setup" || r === "style" && i === "vars";
}
function Ai(e, t = e.value) {
	return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? kn(t) : kn(z.dedentString(Lr(t)), R) : Vn(I, z.split(t));
}
function ji(e, t) {
	return Ei(e, t) && e.name === "script";
}
function Mi(e) {
	let { valueSpan: t, value: n } = e;
	return t.end.offset - t.start.offset === n.length + 2;
}
function Ni(e, t) {
	if (Mi(e)) return !1;
	let { value: n } = e;
	return /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(n) || t.parser === "lwc" && n.startsWith("{") && n.endsWith("}");
}
var Pi = /\{\{(.+?)\}\}/su, Fi = ({ node: { value: e } }) => Pi.test(e);
async function Ii(e, t, n) {
	let r = V(n.node), i = [];
	for (let [t, n] of r.split(Pi).entries()) if (t % 2 == 0) i.push(kn(n));
	else try {
		i.push(F([
			"{{",
			Pn([I, await B(n, e, {
				parser: "__ng_interpolation",
				__isInHtmlInterpolation: !0
			})]),
			I,
			"}}"
		]));
	} catch {
		i.push("{{", kn(n), "}}");
	}
	return i;
}
var Li = (e) => (t, n, r) => B(V(r.node), t, { parser: e }, nr), Ri = [
	{
		test(e) {
			let t = e.node.fullName;
			return t.startsWith("(") && t.endsWith(")") || t.startsWith("on-");
		},
		print: Li("__ng_action")
	},
	{
		test(e) {
			let t = e.node.fullName;
			return t.startsWith("[") && t.endsWith("]") || /^bind(?:on)?-/u.test(t) || /^ng-(?:if|show|hide|class|style)$/u.test(t);
		},
		print: Li("__ng_binding")
	},
	{
		test: (e) => e.node.fullName.startsWith("*"),
		print: Li("__ng_directive")
	},
	{
		test: (e) => /^i18n(?:-.+)?$/u.test(e.node.fullName),
		print: zi
	},
	{
		test: Fi,
		print: Ii
	}
].map(({ test: e, print: t }) => ({
	test: (t, n) => n.parser === "angular" && e(t),
	print: t
}));
function zi(e, t, { node: n }) {
	let r = V(n);
	return tr(Rn(Ai(n, r.trim())), !r.includes("@@"));
}
var Bi = Ri, Vi = ({ node: e }, t) => !t.parentParser && e.fullName === "class" && !e.value.includes("{{"), Hi = (e, t, n) => V(n.node).trim().split(/\s+/u).join(" "), Ui = new Set(/* @__PURE__ */ "onabort.onafterprint.onauxclick.onbeforeinput.onbeforematch.onbeforeprint.onbeforetoggle.onbeforeunload.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncommand.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onformdata.onhashchange.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onlanguagechange.onload.onloadeddata.onloadedmetadata.onloadstart.onmessage.onmessageerror.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onoffline.ononline.onpagehide.onpagereveal.onpageshow.onpageswap.onpaste.onpause.onplay.onplaying.onpopstate.onprogress.onratechange.onrejectionhandled.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onslotchange.onstalled.onstorage.onsubmit.onsuspend.ontimeupdate.ontoggle.onunhandledrejection.onunload.onvolumechange.onwaiting.onwheel".split(".")), Wi = ({ node: e }, t) => Ui.has(e.fullName) && !t.parentParser && !e.value.includes("{{"), Gi = (e, t, n) => B(V(n.node), e, {
	parser: "babel",
	__isHtmlInlineEventHandler: !0
}, () => !1);
function Ki(e) {
	let t = [];
	for (let n of e.split(";")) {
		if (n = z.trim(n), !n) continue;
		let [e, ...r] = z.split(n);
		t.push({
			name: e,
			value: r
		});
	}
	return t;
}
var qi = Ki, Ji = ({ node: e }, t) => e.fullName === "allow" && !t.parentParser && e.parent.fullName === "iframe" && !e.value.includes("{{");
function Yi(e, t, n) {
	let { node: r } = n, i = qi(V(r));
	return i.length === 0 ? [""] : tr(i.map(({ name: e, value: t }, n) => [[e, ...t].join(" "), n === i.length - 1 ? zn(";") : [";", I]]));
}
function Xi(e) {
	return e === "	" || e === "\n" || e === "\f" || e === "\r" || e === " ";
}
var Zi = /^[ \t\n\r\u000c]+/, Qi = /^[, \t\n\r\u000c]+/, $i = /^[^ \t\n\r\u000c]+/, ea = /[,]+$/, ta = /^\d+$/, na = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function ra(e) {
	let t = e.length, n, r, i, a, o, s = 0, c;
	function l(t) {
		let n, r = t.exec(e.substring(s));
		if (r) return [n] = r, s += n.length, n;
	}
	let u = [];
	for (;;) {
		if (l(Qi), s >= t) {
			if (u.length === 0) throw Error("Must contain one or more image candidate strings.");
			return u;
		}
		c = s, n = l($i), r = [], n.slice(-1) === "," ? (n = n.replace(ea, ""), f()) : d();
	}
	function d() {
		for (l(Zi), i = "", a = "in descriptor";;) {
			if (o = e.charAt(s), a === "in descriptor") if (Xi(o)) i && (r.push(i), i = "", a = "after descriptor");
			else if (o === ",") {
				s += 1, i && r.push(i), f();
				return;
			} else if (o === "(") i += o, a = "in parens";
			else if (o === "") {
				i && r.push(i), f();
				return;
			} else i += o;
			else if (a === "in parens") if (o === ")") i += o, a = "in descriptor";
			else if (o === "") {
				r.push(i), f();
				return;
			} else i += o;
			else if (a === "after descriptor" && !Xi(o)) if (o === "") {
				f();
				return;
			} else a = "in descriptor", --s;
			s += 1;
		}
	}
	function f() {
		let t = !1, i, a, o, s, l = {}, d, f, p, m, h;
		for (s = 0; s < r.length; s++) d = r[s], f = d[d.length - 1], p = d.substring(0, d.length - 1), m = parseInt(p, 10), h = parseFloat(p), ta.test(p) && f === "w" ? ((i || a) && (t = !0), m === 0 ? t = !0 : i = m) : na.test(p) && f === "x" ? ((i || a || o) && (t = !0), h < 0 ? t = !0 : a = h) : ta.test(p) && f === "h" ? ((o || a) && (t = !0), m === 0 ? t = !0 : o = m) : t = !0;
		if (!t) l.source = {
			value: n,
			startOffset: c
		}, i && (l.width = { value: i }), a && (l.density = { value: a }), o && (l.height = { value: o }), u.push(l);
		else throw Error(`Invalid srcset descriptor found in "${e}" at "${d}".`);
	}
}
var ia = ra, aa = (e) => e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source"), oa = {
	width: "w",
	height: "h",
	density: "x"
}, sa = Object.keys(oa);
function ca(e, t, n) {
	let r = ia(V(n.node)), i = sa.filter((e) => r.some((t) => Object.prototype.hasOwnProperty.call(t, e)));
	if (i.length > 1) throw Error("Mixed descriptor in srcset is not supported");
	let [a] = i, o = oa[a], s = r.map((e) => e.source.value), c = Math.max(...s.map((e) => e.length)), l = r.map((e) => e[a] ? String(e[a].value) : ""), u = l.map((e) => {
		let t = e.indexOf(".");
		return t === -1 ? e.length : t;
	}), d = Math.max(...u);
	return tr(Vn([",", I], s.map((e, t) => {
		let n = [e], r = l[t];
		if (r) {
			let i = c - e.length + 1, a = d - u[t], s = " ".repeat(i + a);
			n.push(zn(s, " "), r + o);
		}
		return n;
	})));
}
var la = ({ node: e }, t) => e.fullName === "style" && !t.parentParser && !e.value.includes("{{"), ua = async (e, t, n) => tr(await e(V(n.node), {
	parser: "css",
	__isHTMLStyleAttribute: !0
})), da = /* @__PURE__ */ new WeakMap();
function fa(e, t) {
	let { root: n } = e;
	return da.has(n) || da.set(n, n.children.some((e) => ji(e, t) && ["ts", "typescript"].includes(e.attrMap.lang))), da.get(n);
}
var pa = fa;
function ma(e, t, n) {
	return B(`type T<${V(n.node)}> = any`, e, {
		parser: "babel-ts",
		__isEmbeddedTypescriptGenericParameters: !0
	}, nr);
}
function ha(e, t, n, r) {
	let i = V(n.node), a = pa(n, r) ? "babel-ts" : "babel";
	return B(`function _(${i}) {}`, e, {
		parser: a,
		__isVueBindings: !0
	});
}
async function ga(e, t, n, r) {
	let { left: i, operator: a, right: o } = _a(V(n.node)), s = pa(n, r);
	return [
		F(await B(`function _(${i}) {}`, e, {
			parser: s ? "babel-ts" : "babel",
			__isVueForBindingLeft: !0
		})),
		" ",
		a,
		" ",
		await B(o, e, { parser: s ? "__ts_expression" : "__js_expression" })
	];
}
function _a(e) {
	let t = /(.*?)\s+(in|of)\s+(.*)/su, n = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, r = /^\(|\)$/gu, i = e.match(t);
	if (!i) return;
	let a = { for: i[3].trim() };
	if (!a.for) return;
	let o = P(0, i[1].trim(), r, ""), s = o.match(n);
	s ? (a.alias = o.replace(n, ""), a.iterator1 = s[1].trim(), s[2] && (a.iterator2 = s[2].trim())) : a.alias = o;
	let c = [
		a.alias,
		a.iterator1,
		a.iterator2
	];
	if (!c.some((e, t) => !e && (t === 0 || c.slice(t + 1).some(Boolean)))) return {
		left: c.filter(Boolean).join(","),
		operator: i[2],
		right: a.for
	};
}
var va = [
	{
		test: (e) => e.node.fullName === "v-for",
		print: ga
	},
	{
		test: (e, t) => e.node.fullName === "generic" && ji(e.parent, t),
		print: ma
	},
	{
		test: ({ node: e }, t) => Oi(e) || ki(e, t),
		print: ha
	},
	{
		test(e) {
			let t = e.node.fullName;
			return t.startsWith("@") || t.startsWith("v-on:");
		},
		print: ya
	},
	{
		test(e) {
			let t = e.node.fullName;
			return t.startsWith(":") || t.startsWith(".") || t.startsWith("v-bind:");
		},
		print: ba
	},
	{
		test: (e) => e.node.fullName.startsWith("v-"),
		print: xa
	}
].map(({ test: e, print: t }) => ({
	test: (t, n) => n.parser === "vue" && e(t, n),
	print: t
}));
async function ya(e, t, n, r) {
	try {
		return await xa(e, t, n, r);
	} catch (e) {
		if (e.cause?.code !== "BABEL_PARSER_SYNTAX_ERROR") throw e;
	}
	return B(V(n.node), e, { parser: pa(n, r) ? "__vue_ts_event_binding" : "__vue_event_binding" }, nr);
}
function ba(e, t, n, r) {
	return B(V(n.node), e, { parser: pa(n, r) ? "__vue_ts_expression" : "__vue_expression" }, nr);
}
function xa(e, t, n, r) {
	return B(V(n.node), e, { parser: pa(n, r) ? "__ts_expression" : "__js_expression" }, nr);
}
var Sa = [
	{
		test: aa,
		print: ca
	},
	{
		test: la,
		print: ua
	},
	{
		test: Wi,
		print: Gi
	},
	{
		test: Vi,
		print: Hi
	},
	{
		test: Ji,
		print: Yi
	},
	...va,
	...Bi
].map(({ test: e, print: t }) => ({
	test: e,
	print: wa(t)
}));
function Ca(e, t) {
	let { node: n } = e, { value: r } = n;
	if (r) return Ni(n, t) ? [
		n.rawName,
		"=",
		r
	] : Sa.find(({ test: n }) => n(e, t))?.print;
}
function wa(e) {
	return async (t, n, r, i) => {
		let a = await e(t, n, r, i);
		if (a) return a = On(a, (e) => typeof e == "string" ? P(0, e, "\"", "&quot;") : e), [
			r.node.rawName,
			"=\"",
			F(a),
			"\""
		];
	};
}
var Ta = Ca, Ea = (e) => e.sourceSpan.start.offset, Da = (e) => e.sourceSpan.end.offset;
function Oa(e, t) {
	return [e.isSelfClosing ? "" : ka(e, t), Aa(e, t)];
}
function ka(e, t) {
	return e.lastChild && Ra(e.lastChild) ? "" : [ja(e, t), Na(e, t)];
}
function Aa(e, t) {
	return (e.next ? Ia(e.next) : La(e.parent)) ? "" : [Pa(e, t), Ma(e, t)];
}
function ja(e, t) {
	return La(e) ? Pa(e.lastChild, t) : "";
}
function Ma(e, t) {
	return Ra(e) ? Na(e.parent, t) : za(e) ? Ja(e.next, t) : "";
}
function Na(e, t) {
	if (Fa(e, t)) return "";
	switch (e.kind) {
		case "ieConditionalComment": return "<!";
		case "element": if (e.hasHtmComponentClosingTag) return "<//";
		default: return `</${e.rawName}`;
	}
}
function Pa(e, t) {
	if (Fa(e, t)) return "";
	switch (e.kind) {
		case "ieConditionalComment":
		case "ieConditionalEndComment": return "[endif]-->";
		case "ieConditionalStartComment": return "]><!-->";
		case "interpolation": return "}}";
		case "angularIcuExpression": return "}";
		case "element": if (e.isSelfClosing) return "/>";
		default: return ">";
	}
}
function Fa(e, t) {
	return !e.isSelfClosing && !e.endSourceSpan && (Br(e) || zr(e.parent, t));
}
function Ia(e) {
	return e.prev && e.prev.kind !== "docType" && e.kind !== "angularControlFlowBlock" && !Hr(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function La(e) {
	return e.lastChild?.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !Hr(ai(e.lastChild)) && !yi(e);
}
function Ra(e) {
	return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Hr(ai(e));
}
function za(e) {
	return e.next && !Hr(e.next) && Hr(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function Ba(e) {
	let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
	return t ? t[1] ? t[1].split(/\s+/u) : !0 : !1;
}
function Va(e) {
	return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Ha(e, t, n) {
	let { node: r } = e;
	if (!gr(r.attrs)) return r.isSelfClosing ? " " : "";
	let i = r.prev?.kind === "comment" && Ba(r.prev.value), a = typeof i == "boolean" ? () => i : Array.isArray(i) ? (e) => i.includes(e.rawName) : () => !1, o = e.map(({ node: e }) => a(e) ? kn(t.originalText.slice(Ea(e), Da(e))) : n(), "attrs"), s = r.kind === "element" && r.fullName === "script" && r.attrs.length === 1 && r.attrs[0].fullName === "src" && r.children.length === 0, c = t.singleAttributePerLine && r.attrs.length > 1 && !Ei(r, t) ? R : I, l = [Pn([s ? " " : I, Vn(c, o)])];
	return r.firstChild && Va(r.firstChild) || r.isSelfClosing && La(r.parent) || s ? l.push(r.isSelfClosing ? " " : "") : l.push(t.bracketSameLine ? r.isSelfClosing ? " " : "" : r.isSelfClosing ? I : L), l;
}
function Ua(e) {
	return e.firstChild && Va(e.firstChild) ? "" : Ya(e);
}
function Wa(e, t, n) {
	let { node: r } = e;
	return [
		Ga(r, t),
		Ha(e, t, n),
		r.isSelfClosing ? "" : Ua(r)
	];
}
function Ga(e, t) {
	return e.prev && za(e.prev) ? "" : [Ka(e, t), Ja(e, t)];
}
function Ka(e, t) {
	return Va(e) ? Ya(e.parent) : Ia(e) ? Pa(e.prev, t) : "";
}
var qa = "<!doctype";
function Ja(e, t) {
	switch (e.kind) {
		case "ieConditionalComment":
		case "ieConditionalStartComment": return `<!--[if ${e.condition}`;
		case "ieConditionalEndComment": return "<!--<!";
		case "interpolation": return "{{";
		case "docType": {
			if (e.value === "html") {
				let { filepath: e } = t;
				if (e && /\.html?$/u.test(e)) return qa;
			}
			let n = Ea(e);
			return t.originalText.slice(n, n + qa.length);
		}
		case "angularIcuExpression": return "{";
		case "element": if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
		default: return `<${e.rawName}`;
	}
}
function Ya(e) {
	switch (e.kind) {
		case "ieConditionalComment": return "]>";
		case "element": if (e.condition) return "><!--<![endif]-->";
		default: return ">";
	}
}
function Xa(e, t) {
	if (!e.endSourceSpan) return "";
	let n = e.startSourceSpan.end.offset;
	e.firstChild && Va(e.firstChild) && (n -= Ya(e).length);
	let r = e.endSourceSpan.start.offset;
	return e.lastChild && Ra(e.lastChild) ? r += Na(e, t).length : La(e) && (r -= Pa(e.lastChild, t).length), t.originalText.slice(n, r);
}
var Za = Xa, Qa = new Set([
	"if",
	"else if",
	"for",
	"switch",
	"case"
]);
function $a(e, t) {
	let { node: n } = e;
	switch (n.kind) {
		case "element":
			if (Ur(n, t) || n.kind === "interpolation") return;
			if (!n.isSelfClosing && Di(n, t)) {
				let r = fi(n, t);
				return r ? async (i, a) => {
					let o = Za(n, t), s = /^\s*$/u.test(o), c = "";
					return s ||= (c = await i(Lr(o), {
						parser: r,
						__embeddedInHtml: !0
					}), c === ""), [
						Ka(n, t),
						F(Wa(e, t, a)),
						s ? "" : R,
						c,
						s ? "" : R,
						Oa(n, t),
						Ma(n, t)
					];
				} : void 0;
			}
			break;
		case "text":
			if (Ur(n.parent, t)) {
				let e = fi(n.parent, t);
				if (e) return async (r) => {
					let i = e === "markdown" ? z.dedentString(n.value.replace(/^[^\S\n]*\n/u, "")) : n.value, a = {
						parser: e,
						__embeddedInHtml: !0
					};
					if (t.parser === "html" && e === "babel") {
						let e = "script", { attrMap: t } = n.parent;
						t && (t.type === "module" || (t.type === "text/babel" || t.type === "text/jsx") && t["data-type"] === "module") && (e = "module"), a.__babelSourceType = e;
					}
					return [
						Ln,
						Ka(n, t),
						await r(i, a),
						Ma(n, t)
					];
				};
			} else if (n.parent.kind === "interpolation") return async (r) => {
				let i = {
					__isInHtmlInterpolation: !0,
					__embeddedInHtml: !0
				};
				return t.parser === "angular" ? i.parser = "__ng_interpolation" : t.parser === "vue" ? i.parser = pa(e, t) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression", [Pn([I, await r(n.value, i)]), n.parent.next && Ia(n.parent.next) ? " " : I];
			};
			break;
		case "attribute": return Ta(e, t);
		case "angularControlFlowBlockParameters": return Qa.has(e.parent.name) ? ir : void 0;
		case "angularLetDeclarationInitializer": return (e) => B(n.value, e, {
			parser: "__ng_binding",
			__isInHtmlAttribute: !1
		});
	}
}
var eo = $a, to = null;
function no(e) {
	if (to !== null && typeof to.property) {
		let e = to;
		return to = no.prototype = null, e;
	}
	return to = no.prototype = e ?? Object.create(null), new no();
}
var ro = 10;
for (let e = 0; e <= ro; e++) no();
function io(e) {
	return no(e);
}
function ao(e, t = "type") {
	io(e);
	function n(n) {
		let r = n[t], i = e[r];
		if (!Array.isArray(i)) throw Object.assign(/* @__PURE__ */ Error(`Missing visitor keys for '${r}'.`), { node: n });
		return i;
	}
	return n;
}
var oo = ao, H = [["children"], []], so = oo({
	root: H[0],
	element: ["attrs", "children"],
	ieConditionalComment: H[0],
	ieConditionalStartComment: H[1],
	ieConditionalEndComment: H[1],
	interpolation: H[0],
	text: H[0],
	docType: H[1],
	comment: H[1],
	attribute: H[1],
	cdata: H[1],
	angularControlFlowBlock: ["children", "parameters"],
	angularControlFlowBlockParameters: H[0],
	angularControlFlowBlockParameter: H[1],
	angularLetDeclaration: ["init"],
	angularLetDeclarationInitializer: H[1],
	angularIcuExpression: ["cases"],
	angularIcuCase: ["expression"]
}, "kind"), co = "format", lo = /^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u, uo = /^\s*<!--\s*@(?:format|prettier)\s*-->/u, fo = (e) => uo.test(e), po = (e) => lo.test(e), mo = (e) => `<!-- @${co} -->

${e}`, ho = new Map([
	["if", new Set(["else if", "else"])],
	["else if", new Set(["else if", "else"])],
	["for", new Set(["empty"])],
	["defer", new Set([
		"placeholder",
		"error",
		"loading"
	])],
	["placeholder", new Set([
		"placeholder",
		"error",
		"loading"
	])],
	["error", new Set([
		"placeholder",
		"error",
		"loading"
	])],
	["loading", new Set([
		"placeholder",
		"error",
		"loading"
	])]
]);
function go(e) {
	let t = Da(e);
	return e.kind === "element" && !e.endSourceSpan && gr(e.children) ? Math.max(t, go(an(0, e.children, -1))) : t;
}
function _o(e, t, n) {
	let r = e.node;
	if (Br(r)) {
		let e = go(r);
		return [
			Ka(r, t),
			kn(z.trimEnd(t.originalText.slice(Ea(r) + (r.prev && za(r.prev) ? Ja(r).length : 0), e - (r.next && Ia(r.next) ? Pa(r, t).length : 0)))),
			Ma(r, t)
		];
	}
	return n();
}
function vo(e, t) {
	return Hr(e) && Hr(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? $r(t) ? R : I : "" : $r(t) ? R : L : za(e) && (Br(t) || t.firstChild || t.isSelfClosing || t.kind === "element" && t.attrs.length > 0) || e.kind === "element" && e.isSelfClosing && Ia(t) ? "" : !t.isLeadingSpaceSensitive || $r(t) || Ia(t) && e.lastChild && Ra(e.lastChild) && e.lastChild.lastChild && Ra(e.lastChild.lastChild) ? R : t.hasLeadingSpaces ? I : L;
}
function yo(e, t, n) {
	let { node: r } = e;
	if (Qr(r)) return [Ln, ...e.map(() => {
		let r = e.node, i = r.prev ? vo(r.prev, r) : "";
		return [i ? [i, Xr(r.prev) ? R : ""] : "", _o(e, t, n)];
	}, "children")];
	let i = r.children.map(() => Symbol(""));
	return e.map(({ node: r, index: a }) => {
		if (Hr(r)) {
			if (r.prev && Hr(r.prev)) {
				let i = vo(r.prev, r);
				if (i) return Xr(r.prev) ? [
					R,
					R,
					_o(e, t, n)
				] : [i, _o(e, t, n)];
			}
			return _o(e, t, n);
		}
		let o = [], s = [], c = [], l = [], u = r.prev ? vo(r.prev, r) : "", d = r.next ? vo(r, r.next) : "";
		return u && (Xr(r.prev) ? o.push(R, R) : u === R ? o.push(R) : Hr(r.prev) ? s.push(u) : s.push(zn("", L, { groupId: i[a - 1] }))), d && (Xr(r) ? Hr(r.next) && l.push(R, R) : d === R ? Hr(r.next) && l.push(R) : c.push(d)), [
			...o,
			F([...s, F([_o(e, t, n), ...c], { id: i[a] })]),
			...l
		];
	}, "children");
}
function bo(e, t, n) {
	let { node: r } = e, i = [];
	if (wo(e) && i.push("} "), i.push("@", r.name), r.parameters && i.push(" (", F(n("parameters")), ")"), !Co(r)) {
		i.push(" {");
		let a = xo(r);
		r.children.length > 0 ? (r.firstChild.hasLeadingSpaces = !0, r.lastChild.hasTrailingSpaces = !0, i.push(Pn([R, yo(e, t, n)])), a && i.push(R, "}")) : a && i.push("}");
	}
	return F(i, { shouldBreak: !0 });
}
function xo(e) {
	return !(e.next?.kind === "angularControlFlowBlock" && ho.get(e.name)?.has(e.next.name));
}
var So = (e) => e?.kind === "angularControlFlowBlock" && (e.name === "case" || e.name === "default");
function Co(e) {
	return So(e) && e.endSourceSpan && e.endSourceSpan.start.offset === e.endSourceSpan.end.offset;
}
function wo(e) {
	let { previous: t } = e;
	return t?.kind === "angularControlFlowBlock" && !Br(t) && !xo(t);
}
function To(e, t, n) {
	return [Pn([L, Vn([";", I], e.map(n, "children"))]), L];
}
function Eo(e, t, n) {
	let { node: r } = e;
	return [
		Ga(r, t),
		F([
			r.switchValue.trim(),
			", ",
			r.type,
			r.cases.length > 0 ? [",", Pn([I, Vn(I, e.map(n, "cases"))])] : "",
			L
		]),
		Aa(r, t)
	];
}
function Do(e, t, n) {
	let { node: r } = e;
	return [
		r.value,
		" {",
		F([Pn([L, e.map(({ node: e, isLast: t }) => {
			let r = [n()];
			return e.kind === "text" && (e.hasLeadingSpaces && r.unshift(I), e.hasTrailingSpaces && !t && r.push(I)), r;
		}, "expression")]), L]),
		"}"
	];
}
function Oo(e, t, n) {
	let { node: r } = e;
	if (zr(r, t)) return [
		Ka(r, t),
		F(Wa(e, t, n)),
		kn(Za(r, t)),
		...Oa(r, t),
		Ma(r, t)
	];
	let i = r.children.length === 1 && (r.firstChild.kind === "interpolation" || r.firstChild.kind === "angularIcuExpression") && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces, a = Symbol("element-attr-group-id"), o = (i) => F([
		F(Wa(e, t, n), { id: a }),
		i,
		Oa(r, t)
	]);
	return r.children.length === 0 ? o(r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? I : "") : o([
		Zr(r) ? Ln : "",
		((e) => i ? Bn(e, { groupId: a }) : (Ur(r, t) || Ti(r, t)) && r.parent.kind === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? e : Pn(e))([i ? zn(L, "", { groupId: a }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? I : r.firstChild.kind === "text" && r.isWhitespaceSensitive && r.isIndentationSensitive ? In(L) : L, yo(e, t, n)]),
		(r.next ? Ia(r.next) : La(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : i ? zn(L, "", { groupId: a }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? I : (r.lastChild.kind === "comment" || r.lastChild.kind === "text" && r.isWhitespaceSensitive && r.isIndentationSensitive) && RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, "u").test(r.lastChild.value) ? "" : L
	]);
}
var ko = (function(e) {
	return e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA", e;
})({});
function Ao(e, t = !0) {
	if (e[0] != ":") return [null, e];
	let n = e.indexOf(":", 1);
	if (n === -1) {
		if (t) throw Error(`Unsupported format "${e}" expecting ":namespace:name"`);
		return [null, e];
	}
	return [e.slice(1, n), e.slice(n + 1)];
}
function jo(e) {
	return Ao(e)[1] === "ng-container";
}
function Mo(e) {
	return Ao(e)[1] === "ng-content";
}
function No(e) {
	return e === null ? null : Ao(e)[0];
}
function Po(e, t) {
	return e ? `:${e}:${t}` : t;
}
var Fo = { name: "custom-elements" }, Io = { name: "no-errors-schema" }, Lo = (function(e) {
	return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e;
})({}), Ro = /-+([a-z0-9])/g;
function zo(e) {
	return e.replace(Ro, (...e) => e[1].toUpperCase());
}
var Bo;
function Vo() {
	return Bo || (Bo = {}, Ho(Lo.HTML, [
		"iframe|srcdoc",
		"*|innerHTML",
		"*|outerHTML"
	]), Ho(Lo.STYLE, ["*|style"]), Ho(Lo.URL, /* @__PURE__ */ "*|formAction.area|href.a|href.a|xlink:href.form|action.annotation|href.annotation|xlink:href.annotation-xml|href.annotation-xml|xlink:href.maction|href.maction|xlink:href.malignmark|href.malignmark|xlink:href.math|href.math|xlink:href.mroot|href.mroot|xlink:href.msqrt|href.msqrt|xlink:href.merror|href.merror|xlink:href.mfrac|href.mfrac|xlink:href.mglyph|href.mglyph|xlink:href.msub|href.msub|xlink:href.msup|href.msup|xlink:href.msubsup|href.msubsup|xlink:href.mmultiscripts|href.mmultiscripts|xlink:href.mprescripts|href.mprescripts|xlink:href.mi|href.mi|xlink:href.mn|href.mn|xlink:href.mo|href.mo|xlink:href.mpadded|href.mpadded|xlink:href.mphantom|href.mphantom|xlink:href.mrow|href.mrow|xlink:href.ms|href.ms|xlink:href.mspace|href.mspace|xlink:href.mstyle|href.mstyle|xlink:href.mtable|href.mtable|xlink:href.mtd|href.mtd|xlink:href.mtr|href.mtr|xlink:href.mtext|href.mtext|xlink:href.mover|href.mover|xlink:href.munder|href.munder|xlink:href.munderover|href.munderover|xlink:href.semantics|href.semantics|xlink:href.none|href.none|xlink:href.img|src.video|src".split(".")), Ho(Lo.RESOURCE_URL, [
		"base|href",
		"embed|src",
		"frame|src",
		"iframe|src",
		"link|href",
		"object|codebase",
		"object|data",
		"script|src",
		"script|href",
		"script|xlink:href"
	]), Ho(Lo.ATTRIBUTE_NO_BINDING, [
		"animate|attributeName",
		"set|attributeName",
		"animateMotion|attributeName",
		"animateTransform|attributeName",
		"unknown|attributeName",
		"iframe|sandbox",
		"iframe|allow",
		"iframe|allowFullscreen",
		"iframe|referrerPolicy",
		"iframe|csp",
		"iframe|fetchPriority",
		"unknown|sandbox",
		"unknown|allow",
		"unknown|allowFullscreen",
		"unknown|referrerPolicy",
		"unknown|csp",
		"unknown|fetchPriority"
	])), Bo;
}
function Ho(e, t) {
	for (let n of t) Bo[n.toLowerCase()] = e;
}
var Uo = class {}, Wo = "boolean", Go = "number", Ko = "string", qo = "object", Jo = /* @__PURE__ */ "[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored.[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy.abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy.media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume.:svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex.:svg:graphics^:svg:|.:svg:animation^:svg:|*begin,*end,*repeat.:svg:geometry^:svg:|.:svg:componentTransferFunction^:svg:|.:svg:gradient^:svg:|.:svg:textContent^:svg:graphics|.:svg:textPositioning^:svg:textContent|.a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username.area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username.audio^media|.br^[HTMLElement]|clear.base^[HTMLElement]|href,target.body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink.button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value.canvas^[HTMLElement]|#height,#width.content^[HTMLElement]|select.dl^[HTMLElement]|!compact.data^[HTMLElement]|value.datalist^[HTMLElement]|.details^[HTMLElement]|!open.dialog^[HTMLElement]|!open,returnValue.dir^[HTMLElement]|!compact.div^[HTMLElement]|align.embed^[HTMLElement]|align,height,name,src,type,width.fieldset^[HTMLElement]|!disabled,name.font^[HTMLElement]|color,face,size.form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target.frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src.frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows.hr^[HTMLElement]|align,color,!noShade,size,width.head^[HTMLElement]|.h1,h2,h3,h4,h5,h6^[HTMLElement]|align.html^[HTMLElement]|version.iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width.img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width.input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width.li^[HTMLElement]|type,#value.label^[HTMLElement]|htmlFor.legend^[HTMLElement]|align.link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type.map^[HTMLElement]|name.marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width.menu^[HTMLElement]|!compact.meta^[HTMLElement]|content,httpEquiv,media,name,scheme.meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value.ins,del^[HTMLElement]|cite,dateTime.ol^[HTMLElement]|!compact,!reversed,#start,type.object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width.optgroup^[HTMLElement]|!disabled,label.option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value.output^[HTMLElement]|defaultValue,%htmlFor,name,value.p^[HTMLElement]|align.param^[HTMLElement]|name,type,value,valueType.picture^[HTMLElement]|.pre^[HTMLElement]|#width.progress^[HTMLElement]|#max,#value.q,blockquote,cite^[HTMLElement]|.script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type.select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value.selectedcontent^[HTMLElement]|.slot^[HTMLElement]|name.source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width.span^[HTMLElement]|.style^[HTMLElement]|!disabled,media,type.search^[HTMLELement]|.caption^[HTMLElement]|align.th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width.col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width.table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width.tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign.tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign.template^[HTMLElement]|.textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap.time^[HTMLElement]|dateTime.title^[HTMLElement]|text.track^[HTMLElement]|!default,kind,label,src,srclang.ul^[HTMLElement]|!compact,type.unknown^[HTMLElement]|.video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width.:svg:a^:svg:graphics|.:svg:animate^:svg:animation|.:svg:animateMotion^:svg:animation|.:svg:animateTransform^:svg:animation|.:svg:circle^:svg:geometry|.:svg:clipPath^:svg:graphics|.:svg:defs^:svg:graphics|.:svg:desc^:svg:|.:svg:discard^:svg:|.:svg:ellipse^:svg:geometry|.:svg:feBlend^:svg:|.:svg:feColorMatrix^:svg:|.:svg:feComponentTransfer^:svg:|.:svg:feComposite^:svg:|.:svg:feConvolveMatrix^:svg:|.:svg:feDiffuseLighting^:svg:|.:svg:feDisplacementMap^:svg:|.:svg:feDistantLight^:svg:|.:svg:feDropShadow^:svg:|.:svg:feFlood^:svg:|.:svg:feFuncA^:svg:componentTransferFunction|.:svg:feFuncB^:svg:componentTransferFunction|.:svg:feFuncG^:svg:componentTransferFunction|.:svg:feFuncR^:svg:componentTransferFunction|.:svg:feGaussianBlur^:svg:|.:svg:feImage^:svg:|.:svg:feMerge^:svg:|.:svg:feMergeNode^:svg:|.:svg:feMorphology^:svg:|.:svg:feOffset^:svg:|.:svg:fePointLight^:svg:|.:svg:feSpecularLighting^:svg:|.:svg:feSpotLight^:svg:|.:svg:feTile^:svg:|.:svg:feTurbulence^:svg:|.:svg:filter^:svg:|.:svg:foreignObject^:svg:graphics|.:svg:g^:svg:graphics|.:svg:image^:svg:graphics|decoding.:svg:line^:svg:geometry|.:svg:linearGradient^:svg:gradient|.:svg:mpath^:svg:|.:svg:marker^:svg:|.:svg:mask^:svg:|.:svg:metadata^:svg:|.:svg:path^:svg:geometry|.:svg:pattern^:svg:|.:svg:polygon^:svg:geometry|.:svg:polyline^:svg:geometry|.:svg:radialGradient^:svg:gradient|.:svg:rect^:svg:geometry|.:svg:svg^:svg:graphics|#currentScale,#zoomAndPan.:svg:script^:svg:|type.:svg:set^:svg:animation|.:svg:stop^:svg:|.:svg:style^:svg:|!disabled,media,title,type.:svg:switch^:svg:graphics|.:svg:symbol^:svg:|.:svg:tspan^:svg:textPositioning|.:svg:text^:svg:textPositioning|.:svg:textPath^:svg:textContent|.:svg:title^:svg:|.:svg:use^:svg:graphics|.:svg:view^:svg:|#zoomAndPan.data^[HTMLElement]|value.keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name.menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default.summary^[HTMLElement]|.time^[HTMLElement]|dateTime.:svg:cursor^:svg:|.:math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex.:math:math^:math:|.:math:maction^:math:|.:math:menclose^:math:|.:math:merror^:math:|.:math:mfenced^:math:|.:math:mfrac^:math:|.:math:mi^:math:|.:math:mmultiscripts^:math:|.:math:mn^:math:|.:math:mo^:math:|.:math:mover^:math:|.:math:mpadded^:math:|.:math:mphantom^:math:|.:math:mroot^:math:|.:math:mrow^:math:|.:math:ms^:math:|.:math:mspace^:math:|.:math:msqrt^:math:|.:math:mstyle^:math:|.:math:msub^:math:|.:math:msubsup^:math:|.:math:msup^:math:|.:math:mtable^:math:|.:math:mtd^:math:|.:math:mtext^:math:|.:math:mtr^:math:|.:math:munder^:math:|.:math:munderover^:math:|.:math:semantics^:math:|".split("."), Yo = new Map(Object.entries({
	class: "className",
	for: "htmlFor",
	formaction: "formAction",
	innerHtml: "innerHTML",
	readonly: "readOnly",
	tabindex: "tabIndex",
	"aria-activedescendant": "ariaActiveDescendantElement",
	"aria-atomic": "ariaAtomic",
	"aria-autocomplete": "ariaAutoComplete",
	"aria-busy": "ariaBusy",
	"aria-checked": "ariaChecked",
	"aria-colcount": "ariaColCount",
	"aria-colindex": "ariaColIndex",
	"aria-colindextext": "ariaColIndexText",
	"aria-colspan": "ariaColSpan",
	"aria-controls": "ariaControlsElements",
	"aria-current": "ariaCurrent",
	"aria-describedby": "ariaDescribedByElements",
	"aria-description": "ariaDescription",
	"aria-details": "ariaDetailsElements",
	"aria-disabled": "ariaDisabled",
	"aria-errormessage": "ariaErrorMessageElements",
	"aria-expanded": "ariaExpanded",
	"aria-flowto": "ariaFlowToElements",
	"aria-haspopup": "ariaHasPopup",
	"aria-hidden": "ariaHidden",
	"aria-invalid": "ariaInvalid",
	"aria-keyshortcuts": "ariaKeyShortcuts",
	"aria-label": "ariaLabel",
	"aria-labelledby": "ariaLabelledByElements",
	"aria-level": "ariaLevel",
	"aria-live": "ariaLive",
	"aria-modal": "ariaModal",
	"aria-multiline": "ariaMultiLine",
	"aria-multiselectable": "ariaMultiSelectable",
	"aria-orientation": "ariaOrientation",
	"aria-owns": "ariaOwnsElements",
	"aria-placeholder": "ariaPlaceholder",
	"aria-posinset": "ariaPosInSet",
	"aria-pressed": "ariaPressed",
	"aria-readonly": "ariaReadOnly",
	"aria-required": "ariaRequired",
	"aria-roledescription": "ariaRoleDescription",
	"aria-rowcount": "ariaRowCount",
	"aria-rowindex": "ariaRowIndex",
	"aria-rowindextext": "ariaRowIndexText",
	"aria-rowspan": "ariaRowSpan",
	"aria-selected": "ariaSelected",
	"aria-setsize": "ariaSetSize",
	"aria-sort": "ariaSort",
	"aria-valuemax": "ariaValueMax",
	"aria-valuemin": "ariaValueMin",
	"aria-valuenow": "ariaValueNow",
	"aria-valuetext": "ariaValueText"
})), Xo = Array.from(Yo).reduce((e, [t, n]) => (e.set(t, n), e), /* @__PURE__ */ new Map()), Zo = class extends Uo {
	constructor() {
		super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Jo.forEach((e) => {
			let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), [r, i] = e.split("|"), a = i.split(","), [o, s] = r.split("^");
			o.split(",").forEach((e) => {
				this._schema.set(e.toLowerCase(), t), this._eventSchema.set(e.toLowerCase(), n);
			});
			let c = s && this._schema.get(s.toLowerCase());
			if (c) {
				for (let [e, n] of c) t.set(e, n);
				for (let e of this._eventSchema.get(s.toLowerCase())) n.add(e);
			}
			a.forEach((e) => {
				if (e.length > 0) switch (e[0]) {
					case "*":
						n.add(e.substring(1));
						break;
					case "!":
						t.set(e.substring(1), Wo);
						break;
					case "#":
						t.set(e.substring(1), Go);
						break;
					case "%":
						t.set(e.substring(1), qo);
						break;
					default: t.set(e, Ko);
				}
			});
		});
	}
	hasProperty(e, t, n) {
		if (n.some((e) => e.name === Io.name)) return !0;
		if (e.indexOf("-") > -1) {
			if (jo(e) || Mo(e)) return !1;
			if (n.some((e) => e.name === Fo.name)) return !0;
		}
		return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
	}
	hasElement(e, t) {
		return t.some((e) => e.name === Io.name) || e.indexOf("-") > -1 && (jo(e) || Mo(e) || t.some((e) => e.name === Fo.name)) ? !0 : this._schema.has(e.toLowerCase());
	}
	securityContext(e, t, n) {
		n && (t = this.getMappedPropName(t)), e = e.toLowerCase(), t = t.toLowerCase();
		let r = Vo()[e + "|" + t];
		return r || (r = Vo()["*|" + t], r || Lo.NONE);
	}
	getMappedPropName(e) {
		return Yo.get(e) ?? e;
	}
	getDefaultComponentElementName() {
		return "ng-component";
	}
	validateProperty(e) {
		return e.toLowerCase().startsWith("on") ? {
			error: !0,
			msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`
		} : { error: !1 };
	}
	validateAttribute(e) {
		return e.toLowerCase().startsWith("on") ? {
			error: !0,
			msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`
		} : { error: !1 };
	}
	allKnownElementNames() {
		return Array.from(this._schema.keys());
	}
	allKnownAttributesOfElement(e) {
		let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
		return Array.from(t.keys()).map((e) => Xo.get(e) ?? e);
	}
	allKnownEventsOfElement(e) {
		return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
	}
	normalizeAnimationStyleProperty(e) {
		return zo(e);
	}
	normalizeAnimationStyleValue(e, t, n) {
		let r = "", i = n.toString().trim(), a = null;
		if (Qo(e) && n !== 0 && n !== "0") if (typeof n == "number") r = "px";
		else {
			let e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
			e && e[1].length == 0 && (a = `Please provide a CSS unit value for ${t}:${n}`);
		}
		return {
			error: a,
			value: i + r
		};
	}
};
function Qo(e) {
	switch (e) {
		case "width":
		case "height":
		case "minWidth":
		case "minHeight":
		case "maxWidth":
		case "maxHeight":
		case "left":
		case "top":
		case "bottom":
		case "right":
		case "fontSize":
		case "outlineWidth":
		case "outlineOffset":
		case "paddingTop":
		case "paddingLeft":
		case "paddingBottom":
		case "paddingRight":
		case "marginTop":
		case "marginLeft":
		case "marginBottom":
		case "marginRight":
		case "borderRadius":
		case "borderWidth":
		case "borderTopWidth":
		case "borderLeftWidth":
		case "borderRightWidth":
		case "borderBottomWidth":
		case "textIndent": return !0;
		default: return !1;
	}
}
var U = class {
	constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: n = ko.PARSABLE_DATA, closedByParent: r = !1, isVoid: i = !1, ignoreFirstLf: a = !1, preventNamespaceInheritance: o = !1, canSelfClose: s = !1 } = {}) {
		this.closedByChildren = {}, this.closedByParent = !1, e && e.length > 0 && e.forEach((e) => this.closedByChildren[e] = !0), this.isVoid = i, this.closedByParent = r || i, this.implicitNamespacePrefix = t || null, this.contentType = n, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = s ?? i;
	}
	isClosedByChild(e) {
		return this.isVoid || e.toLowerCase() in this.closedByChildren;
	}
	getContentType(e) {
		return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
	}
}, $o, es;
function ts(e) {
	return es || ($o = new U({ canSelfClose: !0 }), es = Object.assign(Object.create(null), {
		base: new U({ isVoid: !0 }),
		meta: new U({ isVoid: !0 }),
		area: new U({ isVoid: !0 }),
		embed: new U({ isVoid: !0 }),
		link: new U({ isVoid: !0 }),
		img: new U({ isVoid: !0 }),
		input: new U({ isVoid: !0 }),
		param: new U({ isVoid: !0 }),
		hr: new U({ isVoid: !0 }),
		br: new U({ isVoid: !0 }),
		source: new U({ isVoid: !0 }),
		track: new U({ isVoid: !0 }),
		wbr: new U({ isVoid: !0 }),
		p: new U({
			closedByChildren: /* @__PURE__ */ "address.article.aside.blockquote.div.dl.fieldset.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.main.nav.ol.p.pre.section.table.ul".split("."),
			closedByParent: !0
		}),
		thead: new U({ closedByChildren: ["tbody", "tfoot"] }),
		tbody: new U({
			closedByChildren: ["tbody", "tfoot"],
			closedByParent: !0
		}),
		tfoot: new U({
			closedByChildren: ["tbody"],
			closedByParent: !0
		}),
		tr: new U({
			closedByChildren: ["tr"],
			closedByParent: !0
		}),
		td: new U({
			closedByChildren: ["td", "th"],
			closedByParent: !0
		}),
		th: new U({
			closedByChildren: ["td", "th"],
			closedByParent: !0
		}),
		col: new U({ isVoid: !0 }),
		svg: new U({ implicitNamespacePrefix: "svg" }),
		foreignObject: new U({
			implicitNamespacePrefix: "svg",
			preventNamespaceInheritance: !0
		}),
		math: new U({ implicitNamespacePrefix: "math" }),
		li: new U({
			closedByChildren: ["li"],
			closedByParent: !0
		}),
		dt: new U({ closedByChildren: ["dt", "dd"] }),
		dd: new U({
			closedByChildren: ["dt", "dd"],
			closedByParent: !0
		}),
		rb: new U({
			closedByChildren: [
				"rb",
				"rt",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		rt: new U({
			closedByChildren: [
				"rb",
				"rt",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		rtc: new U({
			closedByChildren: [
				"rb",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		rp: new U({
			closedByChildren: [
				"rb",
				"rt",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		optgroup: new U({
			closedByChildren: ["optgroup"],
			closedByParent: !0
		}),
		option: new U({
			closedByChildren: ["option", "optgroup"],
			closedByParent: !0
		}),
		pre: new U({ ignoreFirstLf: !0 }),
		listing: new U({ ignoreFirstLf: !0 }),
		style: new U({ contentType: ko.RAW_TEXT }),
		script: new U({ contentType: ko.RAW_TEXT }),
		title: new U({ contentType: {
			default: ko.ESCAPABLE_RAW_TEXT,
			svg: ko.PARSABLE_DATA
		} }),
		textarea: new U({
			contentType: ko.ESCAPABLE_RAW_TEXT,
			ignoreFirstLf: !0
		})
	}), new Zo().allKnownElementNames().forEach((e) => {
		!es[e] && No(e) === null && (es[e] = new U({ canSelfClose: !1 }));
	})), es[e] ?? $o;
}
function ns(e) {
	return e >= 9 && e <= 32 || e == 160;
}
function rs(e) {
	return 48 <= e && e <= 57;
}
function is(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function as(e) {
	return e >= 97 && e <= 102 || e >= 65 && e <= 70 || rs(e);
}
function os(e) {
	return e === 10 || e === 13;
}
function ss(e) {
	return 48 <= e && e <= 55;
}
function cs(e) {
	return e === 39 || e === 34 || e === 96;
}
var ls = class e {
	constructor(e, t, n, r) {
		this.file = e, this.offset = t, this.line = n, this.col = r;
	}
	toString() {
		return this.offset == null ? this.file.url : `${this.file.url}@${this.line}:${this.col}`;
	}
	moveBy(t) {
		let n = this.file.content, r = n.length, i = this.offset, a = this.line, o = this.col;
		for (; i > 0 && t < 0;) if (i--, t++, n.charCodeAt(i) == 10) {
			a--;
			let e = n.substring(0, i - 1).lastIndexOf("\n");
			o = e > 0 ? i - e : i;
		} else o--;
		for (; i < r && t > 0;) {
			let e = n.charCodeAt(i);
			i++, t--, e == 10 ? (a++, o = 0) : o++;
		}
		return new e(this.file, i, a, o);
	}
	getContext(e, t) {
		let n = this.file.content, r = this.offset;
		if (r != null) {
			r > n.length - 1 && (r = n.length - 1);
			let i = r, a = 0, o = 0;
			for (; a < e && r > 0 && (r--, a++, !(n[r] == "\n" && ++o == t)););
			for (a = 0, o = 0; a < e && i < n.length - 1 && (i++, a++, !(n[i] == "\n" && ++o == t)););
			return {
				before: n.substring(r, this.offset),
				after: n.substring(this.offset, i + 1)
			};
		}
		return null;
	}
}, us = class {
	constructor(e, t) {
		this.content = e, this.url = t;
	}
}, W = class {
	constructor(e, t, n = e, r = null) {
		this.start = e, this.end = t, this.fullStart = n, this.details = r;
	}
	toString() {
		return this.start.file.content.substring(this.start.offset, this.end.offset);
	}
}, ds = (function(e) {
	return e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR", e;
})({}), fs = class extends Error {
	constructor(e, t, n = ds.ERROR, r) {
		super(t), this.span = e, this.msg = t, this.level = n, this.relatedError = r, Object.setPrototypeOf(this, new.target.prototype);
	}
	contextualMessage() {
		let e = this.span.start.getContext(100, 3);
		return e ? `${this.msg} ("${e.before}[${ds[this.level]} ->]${e.after}")` : this.msg;
	}
	toString() {
		let e = this.span.details ? `, ${this.span.details}` : "";
		return `${this.contextualMessage()}: ${this.span.start}${e}`;
	}
}, ps = class {
	constructor(e, t) {
		this.sourceSpan = e, this.i18n = t;
	}
}, ms = class extends ps {
	constructor(e, t, n, r) {
		super(t, r), this.value = e, this.tokens = n, this.kind = "text";
	}
	visit(e, t) {
		return e.visitText(this, t);
	}
}, hs = class extends ps {
	constructor(e, t, n, r) {
		super(t, r), this.value = e, this.tokens = n, this.kind = "cdata";
	}
	visit(e, t) {
		return e.visitCdata(this, t);
	}
}, gs = class extends ps {
	constructor(e, t, n, r, i, a) {
		super(r, a), this.switchValue = e, this.type = t, this.cases = n, this.switchValueSourceSpan = i, this.kind = "expansion";
	}
	visit(e, t) {
		return e.visitExpansion(this, t);
	}
}, _s = class {
	constructor(e, t, n, r, i) {
		this.value = e, this.expression = t, this.sourceSpan = n, this.valueSourceSpan = r, this.expSourceSpan = i, this.kind = "expansionCase";
	}
	visit(e, t) {
		return e.visitExpansionCase(this, t);
	}
}, vs = class extends ps {
	constructor(e, t, n, r, i, a, o) {
		super(n, o), this.name = e, this.value = t, this.keySpan = r, this.valueSpan = i, this.valueTokens = a, this.kind = "attribute";
	}
	visit(e, t) {
		return e.visitAttribute(this, t);
	}
	get nameSpan() {
		return this.keySpan;
	}
}, ys = class extends ps {
	constructor(e, t, n, r, i, a, o, s = null, c = null, l, u) {
		super(a, u), this.name = e, this.attrs = t, this.directives = n, this.children = r, this.isSelfClosing = i, this.startSourceSpan = o, this.endSourceSpan = s, this.nameSpan = c, this.isVoid = l, this.kind = "element";
	}
	visit(e, t) {
		return e.visitElement(this, t);
	}
}, bs = class {
	constructor(e, t) {
		this.value = e, this.sourceSpan = t, this.kind = "comment";
	}
	visit(e, t) {
		return e.visitComment(this, t);
	}
}, xs = class {
	constructor(e, t) {
		this.value = e, this.sourceSpan = t, this.kind = "docType";
	}
	visit(e, t) {
		return e.visitDocType(this, t);
	}
}, Ss = class extends ps {
	constructor(e, t, n, r, i, a, o = null, s) {
		super(r, s), this.name = e, this.parameters = t, this.children = n, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.kind = "block";
	}
	visit(e, t) {
		return e.visitBlock(this, t);
	}
}, Cs = class extends ps {
	constructor(e, t, n, r, i, a, o, s, c, l = null, u) {
		super(s, u), this.componentName = e, this.tagName = t, this.fullName = n, this.attrs = r, this.directives = i, this.children = a, this.isSelfClosing = o, this.startSourceSpan = c, this.endSourceSpan = l, this.kind = "component";
	}
	visit(e, t) {
		return e.visitComponent(this, t);
	}
}, ws = class {
	constructor(e, t, n, r, i = null) {
		this.name = e, this.attrs = t, this.sourceSpan = n, this.startSourceSpan = r, this.endSourceSpan = i, this.kind = "directive";
	}
	visit(e, t) {
		return e.visitDirective(this, t);
	}
}, Ts = class {
	constructor(e, t) {
		this.expression = e, this.sourceSpan = t, this.kind = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
	}
	visit(e, t) {
		return e.visitBlockParameter(this, t);
	}
}, Es = class {
	constructor(e, t, n, r, i) {
		this.name = e, this.value = t, this.sourceSpan = n, this.nameSpan = r, this.valueSpan = i, this.kind = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
	}
	visit(e, t) {
		return e.visitLetDeclaration(this, t);
	}
};
function Ds(e, t, n = null) {
	let r = [], i = e.visit ? (t) => e.visit(t, n) || t.visit(e, n) : (t) => t.visit(e, n);
	return t.forEach((e) => {
		let t = i(e);
		t && r.push(t);
	}), r;
}
var Os = class {
	constructor() {}
	visitElement(e, t) {
		this.visitChildren(t, (t) => {
			t(e.attrs), t(e.directives), t(e.children);
		});
	}
	visitAttribute(e, t) {}
	visitText(e, t) {}
	visitCdata(e, t) {}
	visitComment(e, t) {}
	visitDocType(e, t) {}
	visitExpansion(e, t) {
		return this.visitChildren(t, (t) => {
			t(e.cases);
		});
	}
	visitExpansionCase(e, t) {}
	visitBlock(e, t) {
		this.visitChildren(t, (t) => {
			t(e.parameters), t(e.children);
		});
	}
	visitBlockParameter(e, t) {}
	visitLetDeclaration(e, t) {}
	visitComponent(e, t) {
		this.visitChildren(t, (t) => {
			t(e.attrs), t(e.children);
		});
	}
	visitDirective(e, t) {
		this.visitChildren(t, (t) => {
			t(e.attrs);
		});
	}
	visitChildren(e, t) {
		let n = [], r = this;
		function i(t) {
			t && n.push(Ds(r, t, e));
		}
		return t(i), Array.prototype.concat.apply([], n);
	}
}, ks = {
	AElig: "Æ",
	AMP: "&",
	amp: "&",
	Aacute: "Á",
	Abreve: "Ă",
	Acirc: "Â",
	Acy: "А",
	Afr: "𝔄",
	Agrave: "À",
	Alpha: "Α",
	Amacr: "Ā",
	And: "⩓",
	Aogon: "Ą",
	Aopf: "𝔸",
	ApplyFunction: "⁡",
	af: "⁡",
	Aring: "Å",
	angst: "Å",
	Ascr: "𝒜",
	Assign: "≔",
	colone: "≔",
	coloneq: "≔",
	Atilde: "Ã",
	Auml: "Ä",
	Backslash: "∖",
	setminus: "∖",
	setmn: "∖",
	smallsetminus: "∖",
	ssetmn: "∖",
	Barv: "⫧",
	Barwed: "⌆",
	doublebarwedge: "⌆",
	Bcy: "Б",
	Because: "∵",
	becaus: "∵",
	because: "∵",
	Bernoullis: "ℬ",
	Bscr: "ℬ",
	bernou: "ℬ",
	Beta: "Β",
	Bfr: "𝔅",
	Bopf: "𝔹",
	Breve: "˘",
	breve: "˘",
	Bumpeq: "≎",
	HumpDownHump: "≎",
	bump: "≎",
	CHcy: "Ч",
	COPY: "©",
	copy: "©",
	Cacute: "Ć",
	Cap: "⋒",
	CapitalDifferentialD: "ⅅ",
	DD: "ⅅ",
	Cayleys: "ℭ",
	Cfr: "ℭ",
	Ccaron: "Č",
	Ccedil: "Ç",
	Ccirc: "Ĉ",
	Cconint: "∰",
	Cdot: "Ċ",
	Cedilla: "¸",
	cedil: "¸",
	CenterDot: "·",
	centerdot: "·",
	middot: "·",
	Chi: "Χ",
	CircleDot: "⊙",
	odot: "⊙",
	CircleMinus: "⊖",
	ominus: "⊖",
	CirclePlus: "⊕",
	oplus: "⊕",
	CircleTimes: "⊗",
	otimes: "⊗",
	ClockwiseContourIntegral: "∲",
	cwconint: "∲",
	CloseCurlyDoubleQuote: "”",
	rdquo: "”",
	rdquor: "”",
	CloseCurlyQuote: "’",
	rsquo: "’",
	rsquor: "’",
	Colon: "∷",
	Proportion: "∷",
	Colone: "⩴",
	Congruent: "≡",
	equiv: "≡",
	Conint: "∯",
	DoubleContourIntegral: "∯",
	ContourIntegral: "∮",
	conint: "∮",
	oint: "∮",
	Copf: "ℂ",
	complexes: "ℂ",
	Coproduct: "∐",
	coprod: "∐",
	CounterClockwiseContourIntegral: "∳",
	awconint: "∳",
	Cross: "⨯",
	Cscr: "𝒞",
	Cup: "⋓",
	CupCap: "≍",
	asympeq: "≍",
	DDotrahd: "⤑",
	DJcy: "Ђ",
	DScy: "Ѕ",
	DZcy: "Џ",
	Dagger: "‡",
	ddagger: "‡",
	Darr: "↡",
	Dashv: "⫤",
	DoubleLeftTee: "⫤",
	Dcaron: "Ď",
	Dcy: "Д",
	Del: "∇",
	nabla: "∇",
	Delta: "Δ",
	Dfr: "𝔇",
	DiacriticalAcute: "´",
	acute: "´",
	DiacriticalDot: "˙",
	dot: "˙",
	DiacriticalDoubleAcute: "˝",
	dblac: "˝",
	DiacriticalGrave: "`",
	grave: "`",
	DiacriticalTilde: "˜",
	tilde: "˜",
	Diamond: "⋄",
	diam: "⋄",
	diamond: "⋄",
	DifferentialD: "ⅆ",
	dd: "ⅆ",
	Dopf: "𝔻",
	Dot: "¨",
	DoubleDot: "¨",
	die: "¨",
	uml: "¨",
	DotDot: "⃜",
	DotEqual: "≐",
	doteq: "≐",
	esdot: "≐",
	DoubleDownArrow: "⇓",
	Downarrow: "⇓",
	dArr: "⇓",
	DoubleLeftArrow: "⇐",
	Leftarrow: "⇐",
	lArr: "⇐",
	DoubleLeftRightArrow: "⇔",
	Leftrightarrow: "⇔",
	hArr: "⇔",
	iff: "⇔",
	DoubleLongLeftArrow: "⟸",
	Longleftarrow: "⟸",
	xlArr: "⟸",
	DoubleLongLeftRightArrow: "⟺",
	Longleftrightarrow: "⟺",
	xhArr: "⟺",
	DoubleLongRightArrow: "⟹",
	Longrightarrow: "⟹",
	xrArr: "⟹",
	DoubleRightArrow: "⇒",
	Implies: "⇒",
	Rightarrow: "⇒",
	rArr: "⇒",
	DoubleRightTee: "⊨",
	vDash: "⊨",
	DoubleUpArrow: "⇑",
	Uparrow: "⇑",
	uArr: "⇑",
	DoubleUpDownArrow: "⇕",
	Updownarrow: "⇕",
	vArr: "⇕",
	DoubleVerticalBar: "∥",
	par: "∥",
	parallel: "∥",
	shortparallel: "∥",
	spar: "∥",
	DownArrow: "↓",
	ShortDownArrow: "↓",
	darr: "↓",
	downarrow: "↓",
	DownArrowBar: "⤓",
	DownArrowUpArrow: "⇵",
	duarr: "⇵",
	DownBreve: "̑",
	DownLeftRightVector: "⥐",
	DownLeftTeeVector: "⥞",
	DownLeftVector: "↽",
	leftharpoondown: "↽",
	lhard: "↽",
	DownLeftVectorBar: "⥖",
	DownRightTeeVector: "⥟",
	DownRightVector: "⇁",
	rhard: "⇁",
	rightharpoondown: "⇁",
	DownRightVectorBar: "⥗",
	DownTee: "⊤",
	top: "⊤",
	DownTeeArrow: "↧",
	mapstodown: "↧",
	Dscr: "𝒟",
	Dstrok: "Đ",
	ENG: "Ŋ",
	ETH: "Ð",
	Eacute: "É",
	Ecaron: "Ě",
	Ecirc: "Ê",
	Ecy: "Э",
	Edot: "Ė",
	Efr: "𝔈",
	Egrave: "È",
	Element: "∈",
	in: "∈",
	isin: "∈",
	isinv: "∈",
	Emacr: "Ē",
	EmptySmallSquare: "◻",
	EmptyVerySmallSquare: "▫",
	Eogon: "Ę",
	Eopf: "𝔼",
	Epsilon: "Ε",
	Equal: "⩵",
	EqualTilde: "≂",
	eqsim: "≂",
	esim: "≂",
	Equilibrium: "⇌",
	rightleftharpoons: "⇌",
	rlhar: "⇌",
	Escr: "ℰ",
	expectation: "ℰ",
	Esim: "⩳",
	Eta: "Η",
	Euml: "Ë",
	Exists: "∃",
	exist: "∃",
	ExponentialE: "ⅇ",
	ee: "ⅇ",
	exponentiale: "ⅇ",
	Fcy: "Ф",
	Ffr: "𝔉",
	FilledSmallSquare: "◼",
	FilledVerySmallSquare: "▪",
	blacksquare: "▪",
	squarf: "▪",
	squf: "▪",
	Fopf: "𝔽",
	ForAll: "∀",
	forall: "∀",
	Fouriertrf: "ℱ",
	Fscr: "ℱ",
	GJcy: "Ѓ",
	GT: ">",
	gt: ">",
	Gamma: "Γ",
	Gammad: "Ϝ",
	Gbreve: "Ğ",
	Gcedil: "Ģ",
	Gcirc: "Ĝ",
	Gcy: "Г",
	Gdot: "Ġ",
	Gfr: "𝔊",
	Gg: "⋙",
	ggg: "⋙",
	Gopf: "𝔾",
	GreaterEqual: "≥",
	ge: "≥",
	geq: "≥",
	GreaterEqualLess: "⋛",
	gel: "⋛",
	gtreqless: "⋛",
	GreaterFullEqual: "≧",
	gE: "≧",
	geqq: "≧",
	GreaterGreater: "⪢",
	GreaterLess: "≷",
	gl: "≷",
	gtrless: "≷",
	GreaterSlantEqual: "⩾",
	geqslant: "⩾",
	ges: "⩾",
	GreaterTilde: "≳",
	gsim: "≳",
	gtrsim: "≳",
	Gscr: "𝒢",
	Gt: "≫",
	NestedGreaterGreater: "≫",
	gg: "≫",
	HARDcy: "Ъ",
	Hacek: "ˇ",
	caron: "ˇ",
	Hat: "^",
	Hcirc: "Ĥ",
	Hfr: "ℌ",
	Poincareplane: "ℌ",
	HilbertSpace: "ℋ",
	Hscr: "ℋ",
	hamilt: "ℋ",
	Hopf: "ℍ",
	quaternions: "ℍ",
	HorizontalLine: "─",
	boxh: "─",
	Hstrok: "Ħ",
	HumpEqual: "≏",
	bumpe: "≏",
	bumpeq: "≏",
	IEcy: "Е",
	IJlig: "Ĳ",
	IOcy: "Ё",
	Iacute: "Í",
	Icirc: "Î",
	Icy: "И",
	Idot: "İ",
	Ifr: "ℑ",
	Im: "ℑ",
	image: "ℑ",
	imagpart: "ℑ",
	Igrave: "Ì",
	Imacr: "Ī",
	ImaginaryI: "ⅈ",
	ii: "ⅈ",
	Int: "∬",
	Integral: "∫",
	int: "∫",
	Intersection: "⋂",
	bigcap: "⋂",
	xcap: "⋂",
	InvisibleComma: "⁣",
	ic: "⁣",
	InvisibleTimes: "⁢",
	it: "⁢",
	Iogon: "Į",
	Iopf: "𝕀",
	Iota: "Ι",
	Iscr: "ℐ",
	imagline: "ℐ",
	Itilde: "Ĩ",
	Iukcy: "І",
	Iuml: "Ï",
	Jcirc: "Ĵ",
	Jcy: "Й",
	Jfr: "𝔍",
	Jopf: "𝕁",
	Jscr: "𝒥",
	Jsercy: "Ј",
	Jukcy: "Є",
	KHcy: "Х",
	KJcy: "Ќ",
	Kappa: "Κ",
	Kcedil: "Ķ",
	Kcy: "К",
	Kfr: "𝔎",
	Kopf: "𝕂",
	Kscr: "𝒦",
	LJcy: "Љ",
	LT: "<",
	lt: "<",
	Lacute: "Ĺ",
	Lambda: "Λ",
	Lang: "⟪",
	Laplacetrf: "ℒ",
	Lscr: "ℒ",
	lagran: "ℒ",
	Larr: "↞",
	twoheadleftarrow: "↞",
	Lcaron: "Ľ",
	Lcedil: "Ļ",
	Lcy: "Л",
	LeftAngleBracket: "⟨",
	lang: "⟨",
	langle: "⟨",
	LeftArrow: "←",
	ShortLeftArrow: "←",
	larr: "←",
	leftarrow: "←",
	slarr: "←",
	LeftArrowBar: "⇤",
	larrb: "⇤",
	LeftArrowRightArrow: "⇆",
	leftrightarrows: "⇆",
	lrarr: "⇆",
	LeftCeiling: "⌈",
	lceil: "⌈",
	LeftDoubleBracket: "⟦",
	lobrk: "⟦",
	LeftDownTeeVector: "⥡",
	LeftDownVector: "⇃",
	dharl: "⇃",
	downharpoonleft: "⇃",
	LeftDownVectorBar: "⥙",
	LeftFloor: "⌊",
	lfloor: "⌊",
	LeftRightArrow: "↔",
	harr: "↔",
	leftrightarrow: "↔",
	LeftRightVector: "⥎",
	LeftTee: "⊣",
	dashv: "⊣",
	LeftTeeArrow: "↤",
	mapstoleft: "↤",
	LeftTeeVector: "⥚",
	LeftTriangle: "⊲",
	vartriangleleft: "⊲",
	vltri: "⊲",
	LeftTriangleBar: "⧏",
	LeftTriangleEqual: "⊴",
	ltrie: "⊴",
	trianglelefteq: "⊴",
	LeftUpDownVector: "⥑",
	LeftUpTeeVector: "⥠",
	LeftUpVector: "↿",
	uharl: "↿",
	upharpoonleft: "↿",
	LeftUpVectorBar: "⥘",
	LeftVector: "↼",
	leftharpoonup: "↼",
	lharu: "↼",
	LeftVectorBar: "⥒",
	LessEqualGreater: "⋚",
	leg: "⋚",
	lesseqgtr: "⋚",
	LessFullEqual: "≦",
	lE: "≦",
	leqq: "≦",
	LessGreater: "≶",
	lessgtr: "≶",
	lg: "≶",
	LessLess: "⪡",
	LessSlantEqual: "⩽",
	leqslant: "⩽",
	les: "⩽",
	LessTilde: "≲",
	lesssim: "≲",
	lsim: "≲",
	Lfr: "𝔏",
	Ll: "⋘",
	Lleftarrow: "⇚",
	lAarr: "⇚",
	Lmidot: "Ŀ",
	LongLeftArrow: "⟵",
	longleftarrow: "⟵",
	xlarr: "⟵",
	LongLeftRightArrow: "⟷",
	longleftrightarrow: "⟷",
	xharr: "⟷",
	LongRightArrow: "⟶",
	longrightarrow: "⟶",
	xrarr: "⟶",
	Lopf: "𝕃",
	LowerLeftArrow: "↙",
	swarr: "↙",
	swarrow: "↙",
	LowerRightArrow: "↘",
	searr: "↘",
	searrow: "↘",
	Lsh: "↰",
	lsh: "↰",
	Lstrok: "Ł",
	Lt: "≪",
	NestedLessLess: "≪",
	ll: "≪",
	Map: "⤅",
	Mcy: "М",
	MediumSpace: " ",
	Mellintrf: "ℳ",
	Mscr: "ℳ",
	phmmat: "ℳ",
	Mfr: "𝔐",
	MinusPlus: "∓",
	mnplus: "∓",
	mp: "∓",
	Mopf: "𝕄",
	Mu: "Μ",
	NJcy: "Њ",
	Nacute: "Ń",
	Ncaron: "Ň",
	Ncedil: "Ņ",
	Ncy: "Н",
	NegativeMediumSpace: "​",
	NegativeThickSpace: "​",
	NegativeThinSpace: "​",
	NegativeVeryThinSpace: "​",
	ZeroWidthSpace: "​",
	NewLine: "\n",
	Nfr: "𝔑",
	NoBreak: "⁠",
	NonBreakingSpace: "\xA0",
	nbsp: "\xA0",
	Nopf: "ℕ",
	naturals: "ℕ",
	Not: "⫬",
	NotCongruent: "≢",
	nequiv: "≢",
	NotCupCap: "≭",
	NotDoubleVerticalBar: "∦",
	npar: "∦",
	nparallel: "∦",
	nshortparallel: "∦",
	nspar: "∦",
	NotElement: "∉",
	notin: "∉",
	notinva: "∉",
	NotEqual: "≠",
	ne: "≠",
	NotEqualTilde: "≂̸",
	nesim: "≂̸",
	NotExists: "∄",
	nexist: "∄",
	nexists: "∄",
	NotGreater: "≯",
	ngt: "≯",
	ngtr: "≯",
	NotGreaterEqual: "≱",
	nge: "≱",
	ngeq: "≱",
	NotGreaterFullEqual: "≧̸",
	ngE: "≧̸",
	ngeqq: "≧̸",
	NotGreaterGreater: "≫̸",
	nGtv: "≫̸",
	NotGreaterLess: "≹",
	ntgl: "≹",
	NotGreaterSlantEqual: "⩾̸",
	ngeqslant: "⩾̸",
	nges: "⩾̸",
	NotGreaterTilde: "≵",
	ngsim: "≵",
	NotHumpDownHump: "≎̸",
	nbump: "≎̸",
	NotHumpEqual: "≏̸",
	nbumpe: "≏̸",
	NotLeftTriangle: "⋪",
	nltri: "⋪",
	ntriangleleft: "⋪",
	NotLeftTriangleBar: "⧏̸",
	NotLeftTriangleEqual: "⋬",
	nltrie: "⋬",
	ntrianglelefteq: "⋬",
	NotLess: "≮",
	nless: "≮",
	nlt: "≮",
	NotLessEqual: "≰",
	nle: "≰",
	nleq: "≰",
	NotLessGreater: "≸",
	ntlg: "≸",
	NotLessLess: "≪̸",
	nLtv: "≪̸",
	NotLessSlantEqual: "⩽̸",
	nleqslant: "⩽̸",
	nles: "⩽̸",
	NotLessTilde: "≴",
	nlsim: "≴",
	NotNestedGreaterGreater: "⪢̸",
	NotNestedLessLess: "⪡̸",
	NotPrecedes: "⊀",
	npr: "⊀",
	nprec: "⊀",
	NotPrecedesEqual: "⪯̸",
	npre: "⪯̸",
	npreceq: "⪯̸",
	NotPrecedesSlantEqual: "⋠",
	nprcue: "⋠",
	NotReverseElement: "∌",
	notni: "∌",
	notniva: "∌",
	NotRightTriangle: "⋫",
	nrtri: "⋫",
	ntriangleright: "⋫",
	NotRightTriangleBar: "⧐̸",
	NotRightTriangleEqual: "⋭",
	nrtrie: "⋭",
	ntrianglerighteq: "⋭",
	NotSquareSubset: "⊏̸",
	NotSquareSubsetEqual: "⋢",
	nsqsube: "⋢",
	NotSquareSuperset: "⊐̸",
	NotSquareSupersetEqual: "⋣",
	nsqsupe: "⋣",
	NotSubset: "⊂⃒",
	nsubset: "⊂⃒",
	vnsub: "⊂⃒",
	NotSubsetEqual: "⊈",
	nsube: "⊈",
	nsubseteq: "⊈",
	NotSucceeds: "⊁",
	nsc: "⊁",
	nsucc: "⊁",
	NotSucceedsEqual: "⪰̸",
	nsce: "⪰̸",
	nsucceq: "⪰̸",
	NotSucceedsSlantEqual: "⋡",
	nsccue: "⋡",
	NotSucceedsTilde: "≿̸",
	NotSuperset: "⊃⃒",
	nsupset: "⊃⃒",
	vnsup: "⊃⃒",
	NotSupersetEqual: "⊉",
	nsupe: "⊉",
	nsupseteq: "⊉",
	NotTilde: "≁",
	nsim: "≁",
	NotTildeEqual: "≄",
	nsime: "≄",
	nsimeq: "≄",
	NotTildeFullEqual: "≇",
	ncong: "≇",
	NotTildeTilde: "≉",
	nap: "≉",
	napprox: "≉",
	NotVerticalBar: "∤",
	nmid: "∤",
	nshortmid: "∤",
	nsmid: "∤",
	Nscr: "𝒩",
	Ntilde: "Ñ",
	Nu: "Ν",
	OElig: "Œ",
	Oacute: "Ó",
	Ocirc: "Ô",
	Ocy: "О",
	Odblac: "Ő",
	Ofr: "𝔒",
	Ograve: "Ò",
	Omacr: "Ō",
	Omega: "Ω",
	ohm: "Ω",
	Omicron: "Ο",
	Oopf: "𝕆",
	OpenCurlyDoubleQuote: "“",
	ldquo: "“",
	OpenCurlyQuote: "‘",
	lsquo: "‘",
	Or: "⩔",
	Oscr: "𝒪",
	Oslash: "Ø",
	Otilde: "Õ",
	Otimes: "⨷",
	Ouml: "Ö",
	OverBar: "‾",
	oline: "‾",
	OverBrace: "⏞",
	OverBracket: "⎴",
	tbrk: "⎴",
	OverParenthesis: "⏜",
	PartialD: "∂",
	part: "∂",
	Pcy: "П",
	Pfr: "𝔓",
	Phi: "Φ",
	Pi: "Π",
	PlusMinus: "±",
	plusmn: "±",
	pm: "±",
	Popf: "ℙ",
	primes: "ℙ",
	Pr: "⪻",
	Precedes: "≺",
	pr: "≺",
	prec: "≺",
	PrecedesEqual: "⪯",
	pre: "⪯",
	preceq: "⪯",
	PrecedesSlantEqual: "≼",
	prcue: "≼",
	preccurlyeq: "≼",
	PrecedesTilde: "≾",
	precsim: "≾",
	prsim: "≾",
	Prime: "″",
	Product: "∏",
	prod: "∏",
	Proportional: "∝",
	prop: "∝",
	propto: "∝",
	varpropto: "∝",
	vprop: "∝",
	Pscr: "𝒫",
	Psi: "Ψ",
	QUOT: "\"",
	quot: "\"",
	Qfr: "𝔔",
	Qopf: "ℚ",
	rationals: "ℚ",
	Qscr: "𝒬",
	RBarr: "⤐",
	drbkarow: "⤐",
	REG: "®",
	circledR: "®",
	reg: "®",
	Racute: "Ŕ",
	Rang: "⟫",
	Rarr: "↠",
	twoheadrightarrow: "↠",
	Rarrtl: "⤖",
	Rcaron: "Ř",
	Rcedil: "Ŗ",
	Rcy: "Р",
	Re: "ℜ",
	Rfr: "ℜ",
	real: "ℜ",
	realpart: "ℜ",
	ReverseElement: "∋",
	SuchThat: "∋",
	ni: "∋",
	niv: "∋",
	ReverseEquilibrium: "⇋",
	leftrightharpoons: "⇋",
	lrhar: "⇋",
	ReverseUpEquilibrium: "⥯",
	duhar: "⥯",
	Rho: "Ρ",
	RightAngleBracket: "⟩",
	rang: "⟩",
	rangle: "⟩",
	RightArrow: "→",
	ShortRightArrow: "→",
	rarr: "→",
	rightarrow: "→",
	srarr: "→",
	RightArrowBar: "⇥",
	rarrb: "⇥",
	RightArrowLeftArrow: "⇄",
	rightleftarrows: "⇄",
	rlarr: "⇄",
	RightCeiling: "⌉",
	rceil: "⌉",
	RightDoubleBracket: "⟧",
	robrk: "⟧",
	RightDownTeeVector: "⥝",
	RightDownVector: "⇂",
	dharr: "⇂",
	downharpoonright: "⇂",
	RightDownVectorBar: "⥕",
	RightFloor: "⌋",
	rfloor: "⌋",
	RightTee: "⊢",
	vdash: "⊢",
	RightTeeArrow: "↦",
	map: "↦",
	mapsto: "↦",
	RightTeeVector: "⥛",
	RightTriangle: "⊳",
	vartriangleright: "⊳",
	vrtri: "⊳",
	RightTriangleBar: "⧐",
	RightTriangleEqual: "⊵",
	rtrie: "⊵",
	trianglerighteq: "⊵",
	RightUpDownVector: "⥏",
	RightUpTeeVector: "⥜",
	RightUpVector: "↾",
	uharr: "↾",
	upharpoonright: "↾",
	RightUpVectorBar: "⥔",
	RightVector: "⇀",
	rharu: "⇀",
	rightharpoonup: "⇀",
	RightVectorBar: "⥓",
	Ropf: "ℝ",
	reals: "ℝ",
	RoundImplies: "⥰",
	Rrightarrow: "⇛",
	rAarr: "⇛",
	Rscr: "ℛ",
	realine: "ℛ",
	Rsh: "↱",
	rsh: "↱",
	RuleDelayed: "⧴",
	SHCHcy: "Щ",
	SHcy: "Ш",
	SOFTcy: "Ь",
	Sacute: "Ś",
	Sc: "⪼",
	Scaron: "Š",
	Scedil: "Ş",
	Scirc: "Ŝ",
	Scy: "С",
	Sfr: "𝔖",
	ShortUpArrow: "↑",
	UpArrow: "↑",
	uarr: "↑",
	uparrow: "↑",
	Sigma: "Σ",
	SmallCircle: "∘",
	compfn: "∘",
	Sopf: "𝕊",
	Sqrt: "√",
	radic: "√",
	Square: "□",
	squ: "□",
	square: "□",
	SquareIntersection: "⊓",
	sqcap: "⊓",
	SquareSubset: "⊏",
	sqsub: "⊏",
	sqsubset: "⊏",
	SquareSubsetEqual: "⊑",
	sqsube: "⊑",
	sqsubseteq: "⊑",
	SquareSuperset: "⊐",
	sqsup: "⊐",
	sqsupset: "⊐",
	SquareSupersetEqual: "⊒",
	sqsupe: "⊒",
	sqsupseteq: "⊒",
	SquareUnion: "⊔",
	sqcup: "⊔",
	Sscr: "𝒮",
	Star: "⋆",
	sstarf: "⋆",
	Sub: "⋐",
	Subset: "⋐",
	SubsetEqual: "⊆",
	sube: "⊆",
	subseteq: "⊆",
	Succeeds: "≻",
	sc: "≻",
	succ: "≻",
	SucceedsEqual: "⪰",
	sce: "⪰",
	succeq: "⪰",
	SucceedsSlantEqual: "≽",
	sccue: "≽",
	succcurlyeq: "≽",
	SucceedsTilde: "≿",
	scsim: "≿",
	succsim: "≿",
	Sum: "∑",
	sum: "∑",
	Sup: "⋑",
	Supset: "⋑",
	Superset: "⊃",
	sup: "⊃",
	supset: "⊃",
	SupersetEqual: "⊇",
	supe: "⊇",
	supseteq: "⊇",
	THORN: "Þ",
	TRADE: "™",
	trade: "™",
	TSHcy: "Ћ",
	TScy: "Ц",
	Tab: "	",
	Tau: "Τ",
	Tcaron: "Ť",
	Tcedil: "Ţ",
	Tcy: "Т",
	Tfr: "𝔗",
	Therefore: "∴",
	there4: "∴",
	therefore: "∴",
	Theta: "Θ",
	ThickSpace: "  ",
	ThinSpace: " ",
	thinsp: " ",
	Tilde: "∼",
	sim: "∼",
	thicksim: "∼",
	thksim: "∼",
	TildeEqual: "≃",
	sime: "≃",
	simeq: "≃",
	TildeFullEqual: "≅",
	cong: "≅",
	TildeTilde: "≈",
	ap: "≈",
	approx: "≈",
	asymp: "≈",
	thickapprox: "≈",
	thkap: "≈",
	Topf: "𝕋",
	TripleDot: "⃛",
	tdot: "⃛",
	Tscr: "𝒯",
	Tstrok: "Ŧ",
	Uacute: "Ú",
	Uarr: "↟",
	Uarrocir: "⥉",
	Ubrcy: "Ў",
	Ubreve: "Ŭ",
	Ucirc: "Û",
	Ucy: "У",
	Udblac: "Ű",
	Ufr: "𝔘",
	Ugrave: "Ù",
	Umacr: "Ū",
	UnderBar: "_",
	lowbar: "_",
	UnderBrace: "⏟",
	UnderBracket: "⎵",
	bbrk: "⎵",
	UnderParenthesis: "⏝",
	Union: "⋃",
	bigcup: "⋃",
	xcup: "⋃",
	UnionPlus: "⊎",
	uplus: "⊎",
	Uogon: "Ų",
	Uopf: "𝕌",
	UpArrowBar: "⤒",
	UpArrowDownArrow: "⇅",
	udarr: "⇅",
	UpDownArrow: "↕",
	updownarrow: "↕",
	varr: "↕",
	UpEquilibrium: "⥮",
	udhar: "⥮",
	UpTee: "⊥",
	bot: "⊥",
	bottom: "⊥",
	perp: "⊥",
	UpTeeArrow: "↥",
	mapstoup: "↥",
	UpperLeftArrow: "↖",
	nwarr: "↖",
	nwarrow: "↖",
	UpperRightArrow: "↗",
	nearr: "↗",
	nearrow: "↗",
	Upsi: "ϒ",
	upsih: "ϒ",
	Upsilon: "Υ",
	Uring: "Ů",
	Uscr: "𝒰",
	Utilde: "Ũ",
	Uuml: "Ü",
	VDash: "⊫",
	Vbar: "⫫",
	Vcy: "В",
	Vdash: "⊩",
	Vdashl: "⫦",
	Vee: "⋁",
	bigvee: "⋁",
	xvee: "⋁",
	Verbar: "‖",
	Vert: "‖",
	VerticalBar: "∣",
	mid: "∣",
	shortmid: "∣",
	smid: "∣",
	VerticalLine: "|",
	verbar: "|",
	vert: "|",
	VerticalSeparator: "❘",
	VerticalTilde: "≀",
	wr: "≀",
	wreath: "≀",
	VeryThinSpace: " ",
	hairsp: " ",
	Vfr: "𝔙",
	Vopf: "𝕍",
	Vscr: "𝒱",
	Vvdash: "⊪",
	Wcirc: "Ŵ",
	Wedge: "⋀",
	bigwedge: "⋀",
	xwedge: "⋀",
	Wfr: "𝔚",
	Wopf: "𝕎",
	Wscr: "𝒲",
	Xfr: "𝔛",
	Xi: "Ξ",
	Xopf: "𝕏",
	Xscr: "𝒳",
	YAcy: "Я",
	YIcy: "Ї",
	YUcy: "Ю",
	Yacute: "Ý",
	Ycirc: "Ŷ",
	Ycy: "Ы",
	Yfr: "𝔜",
	Yopf: "𝕐",
	Yscr: "𝒴",
	Yuml: "Ÿ",
	ZHcy: "Ж",
	Zacute: "Ź",
	Zcaron: "Ž",
	Zcy: "З",
	Zdot: "Ż",
	Zeta: "Ζ",
	Zfr: "ℨ",
	zeetrf: "ℨ",
	Zopf: "ℤ",
	integers: "ℤ",
	Zscr: "𝒵",
	aacute: "á",
	abreve: "ă",
	ac: "∾",
	mstpos: "∾",
	acE: "∾̳",
	acd: "∿",
	acirc: "â",
	acy: "а",
	aelig: "æ",
	afr: "𝔞",
	agrave: "à",
	alefsym: "ℵ",
	aleph: "ℵ",
	alpha: "α",
	amacr: "ā",
	amalg: "⨿",
	and: "∧",
	wedge: "∧",
	andand: "⩕",
	andd: "⩜",
	andslope: "⩘",
	andv: "⩚",
	ang: "∠",
	angle: "∠",
	ange: "⦤",
	angmsd: "∡",
	measuredangle: "∡",
	angmsdaa: "⦨",
	angmsdab: "⦩",
	angmsdac: "⦪",
	angmsdad: "⦫",
	angmsdae: "⦬",
	angmsdaf: "⦭",
	angmsdag: "⦮",
	angmsdah: "⦯",
	angrt: "∟",
	angrtvb: "⊾",
	angrtvbd: "⦝",
	angsph: "∢",
	angzarr: "⍼",
	aogon: "ą",
	aopf: "𝕒",
	apE: "⩰",
	apacir: "⩯",
	ape: "≊",
	approxeq: "≊",
	apid: "≋",
	apos: "'",
	aring: "å",
	ascr: "𝒶",
	ast: "*",
	midast: "*",
	atilde: "ã",
	auml: "ä",
	awint: "⨑",
	bNot: "⫭",
	backcong: "≌",
	bcong: "≌",
	backepsilon: "϶",
	bepsi: "϶",
	backprime: "‵",
	bprime: "‵",
	backsim: "∽",
	bsim: "∽",
	backsimeq: "⋍",
	bsime: "⋍",
	barvee: "⊽",
	barwed: "⌅",
	barwedge: "⌅",
	bbrktbrk: "⎶",
	bcy: "б",
	bdquo: "„",
	ldquor: "„",
	bemptyv: "⦰",
	beta: "β",
	beth: "ℶ",
	between: "≬",
	twixt: "≬",
	bfr: "𝔟",
	bigcirc: "◯",
	xcirc: "◯",
	bigodot: "⨀",
	xodot: "⨀",
	bigoplus: "⨁",
	xoplus: "⨁",
	bigotimes: "⨂",
	xotime: "⨂",
	bigsqcup: "⨆",
	xsqcup: "⨆",
	bigstar: "★",
	starf: "★",
	bigtriangledown: "▽",
	xdtri: "▽",
	bigtriangleup: "△",
	xutri: "△",
	biguplus: "⨄",
	xuplus: "⨄",
	bkarow: "⤍",
	rbarr: "⤍",
	blacklozenge: "⧫",
	lozf: "⧫",
	blacktriangle: "▴",
	utrif: "▴",
	blacktriangledown: "▾",
	dtrif: "▾",
	blacktriangleleft: "◂",
	ltrif: "◂",
	blacktriangleright: "▸",
	rtrif: "▸",
	blank: "␣",
	blk12: "▒",
	blk14: "░",
	blk34: "▓",
	block: "█",
	bne: "=⃥",
	bnequiv: "≡⃥",
	bnot: "⌐",
	bopf: "𝕓",
	bowtie: "⋈",
	boxDL: "╗",
	boxDR: "╔",
	boxDl: "╖",
	boxDr: "╓",
	boxH: "═",
	boxHD: "╦",
	boxHU: "╩",
	boxHd: "╤",
	boxHu: "╧",
	boxUL: "╝",
	boxUR: "╚",
	boxUl: "╜",
	boxUr: "╙",
	boxV: "║",
	boxVH: "╬",
	boxVL: "╣",
	boxVR: "╠",
	boxVh: "╫",
	boxVl: "╢",
	boxVr: "╟",
	boxbox: "⧉",
	boxdL: "╕",
	boxdR: "╒",
	boxdl: "┐",
	boxdr: "┌",
	boxhD: "╥",
	boxhU: "╨",
	boxhd: "┬",
	boxhu: "┴",
	boxminus: "⊟",
	minusb: "⊟",
	boxplus: "⊞",
	plusb: "⊞",
	boxtimes: "⊠",
	timesb: "⊠",
	boxuL: "╛",
	boxuR: "╘",
	boxul: "┘",
	boxur: "└",
	boxv: "│",
	boxvH: "╪",
	boxvL: "╡",
	boxvR: "╞",
	boxvh: "┼",
	boxvl: "┤",
	boxvr: "├",
	brvbar: "¦",
	bscr: "𝒷",
	bsemi: "⁏",
	bsol: "\\",
	bsolb: "⧅",
	bsolhsub: "⟈",
	bull: "•",
	bullet: "•",
	bumpE: "⪮",
	cacute: "ć",
	cap: "∩",
	capand: "⩄",
	capbrcup: "⩉",
	capcap: "⩋",
	capcup: "⩇",
	capdot: "⩀",
	caps: "∩︀",
	caret: "⁁",
	ccaps: "⩍",
	ccaron: "č",
	ccedil: "ç",
	ccirc: "ĉ",
	ccups: "⩌",
	ccupssm: "⩐",
	cdot: "ċ",
	cemptyv: "⦲",
	cent: "¢",
	cfr: "𝔠",
	chcy: "ч",
	check: "✓",
	checkmark: "✓",
	chi: "χ",
	cir: "○",
	cirE: "⧃",
	circ: "ˆ",
	circeq: "≗",
	cire: "≗",
	circlearrowleft: "↺",
	olarr: "↺",
	circlearrowright: "↻",
	orarr: "↻",
	circledS: "Ⓢ",
	oS: "Ⓢ",
	circledast: "⊛",
	oast: "⊛",
	circledcirc: "⊚",
	ocir: "⊚",
	circleddash: "⊝",
	odash: "⊝",
	cirfnint: "⨐",
	cirmid: "⫯",
	cirscir: "⧂",
	clubs: "♣",
	clubsuit: "♣",
	colon: ":",
	comma: ",",
	commat: "@",
	comp: "∁",
	complement: "∁",
	congdot: "⩭",
	copf: "𝕔",
	copysr: "℗",
	crarr: "↵",
	cross: "✗",
	cscr: "𝒸",
	csub: "⫏",
	csube: "⫑",
	csup: "⫐",
	csupe: "⫒",
	ctdot: "⋯",
	cudarrl: "⤸",
	cudarrr: "⤵",
	cuepr: "⋞",
	curlyeqprec: "⋞",
	cuesc: "⋟",
	curlyeqsucc: "⋟",
	cularr: "↶",
	curvearrowleft: "↶",
	cularrp: "⤽",
	cup: "∪",
	cupbrcap: "⩈",
	cupcap: "⩆",
	cupcup: "⩊",
	cupdot: "⊍",
	cupor: "⩅",
	cups: "∪︀",
	curarr: "↷",
	curvearrowright: "↷",
	curarrm: "⤼",
	curlyvee: "⋎",
	cuvee: "⋎",
	curlywedge: "⋏",
	cuwed: "⋏",
	curren: "¤",
	cwint: "∱",
	cylcty: "⌭",
	dHar: "⥥",
	dagger: "†",
	daleth: "ℸ",
	dash: "‐",
	hyphen: "‐",
	dbkarow: "⤏",
	rBarr: "⤏",
	dcaron: "ď",
	dcy: "д",
	ddarr: "⇊",
	downdownarrows: "⇊",
	ddotseq: "⩷",
	eDDot: "⩷",
	deg: "°",
	delta: "δ",
	demptyv: "⦱",
	dfisht: "⥿",
	dfr: "𝔡",
	diamondsuit: "♦",
	diams: "♦",
	digamma: "ϝ",
	gammad: "ϝ",
	disin: "⋲",
	div: "÷",
	divide: "÷",
	divideontimes: "⋇",
	divonx: "⋇",
	djcy: "ђ",
	dlcorn: "⌞",
	llcorner: "⌞",
	dlcrop: "⌍",
	dollar: "$",
	dopf: "𝕕",
	doteqdot: "≑",
	eDot: "≑",
	dotminus: "∸",
	minusd: "∸",
	dotplus: "∔",
	plusdo: "∔",
	dotsquare: "⊡",
	sdotb: "⊡",
	drcorn: "⌟",
	lrcorner: "⌟",
	drcrop: "⌌",
	dscr: "𝒹",
	dscy: "ѕ",
	dsol: "⧶",
	dstrok: "đ",
	dtdot: "⋱",
	dtri: "▿",
	triangledown: "▿",
	dwangle: "⦦",
	dzcy: "џ",
	dzigrarr: "⟿",
	eacute: "é",
	easter: "⩮",
	ecaron: "ě",
	ecir: "≖",
	eqcirc: "≖",
	ecirc: "ê",
	ecolon: "≕",
	eqcolon: "≕",
	ecy: "э",
	edot: "ė",
	efDot: "≒",
	fallingdotseq: "≒",
	efr: "𝔢",
	eg: "⪚",
	egrave: "è",
	egs: "⪖",
	eqslantgtr: "⪖",
	egsdot: "⪘",
	el: "⪙",
	elinters: "⏧",
	ell: "ℓ",
	els: "⪕",
	eqslantless: "⪕",
	elsdot: "⪗",
	emacr: "ē",
	empty: "∅",
	emptyset: "∅",
	emptyv: "∅",
	varnothing: "∅",
	emsp13: " ",
	emsp14: " ",
	emsp: " ",
	eng: "ŋ",
	ensp: " ",
	eogon: "ę",
	eopf: "𝕖",
	epar: "⋕",
	eparsl: "⧣",
	eplus: "⩱",
	epsi: "ε",
	epsilon: "ε",
	epsiv: "ϵ",
	straightepsilon: "ϵ",
	varepsilon: "ϵ",
	equals: "=",
	equest: "≟",
	questeq: "≟",
	equivDD: "⩸",
	eqvparsl: "⧥",
	erDot: "≓",
	risingdotseq: "≓",
	erarr: "⥱",
	escr: "ℯ",
	eta: "η",
	eth: "ð",
	euml: "ë",
	euro: "€",
	excl: "!",
	fcy: "ф",
	female: "♀",
	ffilig: "ﬃ",
	fflig: "ﬀ",
	ffllig: "ﬄ",
	ffr: "𝔣",
	filig: "ﬁ",
	fjlig: "fj",
	flat: "♭",
	fllig: "ﬂ",
	fltns: "▱",
	fnof: "ƒ",
	fopf: "𝕗",
	fork: "⋔",
	pitchfork: "⋔",
	forkv: "⫙",
	fpartint: "⨍",
	frac12: "½",
	half: "½",
	frac13: "⅓",
	frac14: "¼",
	frac15: "⅕",
	frac16: "⅙",
	frac18: "⅛",
	frac23: "⅔",
	frac25: "⅖",
	frac34: "¾",
	frac35: "⅗",
	frac38: "⅜",
	frac45: "⅘",
	frac56: "⅚",
	frac58: "⅝",
	frac78: "⅞",
	frasl: "⁄",
	frown: "⌢",
	sfrown: "⌢",
	fscr: "𝒻",
	gEl: "⪌",
	gtreqqless: "⪌",
	gacute: "ǵ",
	gamma: "γ",
	gap: "⪆",
	gtrapprox: "⪆",
	gbreve: "ğ",
	gcirc: "ĝ",
	gcy: "г",
	gdot: "ġ",
	gescc: "⪩",
	gesdot: "⪀",
	gesdoto: "⪂",
	gesdotol: "⪄",
	gesl: "⋛︀",
	gesles: "⪔",
	gfr: "𝔤",
	gimel: "ℷ",
	gjcy: "ѓ",
	glE: "⪒",
	gla: "⪥",
	glj: "⪤",
	gnE: "≩",
	gneqq: "≩",
	gnap: "⪊",
	gnapprox: "⪊",
	gne: "⪈",
	gneq: "⪈",
	gnsim: "⋧",
	gopf: "𝕘",
	gscr: "ℊ",
	gsime: "⪎",
	gsiml: "⪐",
	gtcc: "⪧",
	gtcir: "⩺",
	gtdot: "⋗",
	gtrdot: "⋗",
	gtlPar: "⦕",
	gtquest: "⩼",
	gtrarr: "⥸",
	gvertneqq: "≩︀",
	gvnE: "≩︀",
	hardcy: "ъ",
	harrcir: "⥈",
	harrw: "↭",
	leftrightsquigarrow: "↭",
	hbar: "ℏ",
	hslash: "ℏ",
	planck: "ℏ",
	plankv: "ℏ",
	hcirc: "ĥ",
	hearts: "♥",
	heartsuit: "♥",
	hellip: "…",
	mldr: "…",
	hercon: "⊹",
	hfr: "𝔥",
	hksearow: "⤥",
	searhk: "⤥",
	hkswarow: "⤦",
	swarhk: "⤦",
	hoarr: "⇿",
	homtht: "∻",
	hookleftarrow: "↩",
	larrhk: "↩",
	hookrightarrow: "↪",
	rarrhk: "↪",
	hopf: "𝕙",
	horbar: "―",
	hscr: "𝒽",
	hstrok: "ħ",
	hybull: "⁃",
	iacute: "í",
	icirc: "î",
	icy: "и",
	iecy: "е",
	iexcl: "¡",
	ifr: "𝔦",
	igrave: "ì",
	iiiint: "⨌",
	qint: "⨌",
	iiint: "∭",
	tint: "∭",
	iinfin: "⧜",
	iiota: "℩",
	ijlig: "ĳ",
	imacr: "ī",
	imath: "ı",
	inodot: "ı",
	imof: "⊷",
	imped: "Ƶ",
	incare: "℅",
	infin: "∞",
	infintie: "⧝",
	intcal: "⊺",
	intercal: "⊺",
	intlarhk: "⨗",
	intprod: "⨼",
	iprod: "⨼",
	iocy: "ё",
	iogon: "į",
	iopf: "𝕚",
	iota: "ι",
	iquest: "¿",
	iscr: "𝒾",
	isinE: "⋹",
	isindot: "⋵",
	isins: "⋴",
	isinsv: "⋳",
	itilde: "ĩ",
	iukcy: "і",
	iuml: "ï",
	jcirc: "ĵ",
	jcy: "й",
	jfr: "𝔧",
	jmath: "ȷ",
	jopf: "𝕛",
	jscr: "𝒿",
	jsercy: "ј",
	jukcy: "є",
	kappa: "κ",
	kappav: "ϰ",
	varkappa: "ϰ",
	kcedil: "ķ",
	kcy: "к",
	kfr: "𝔨",
	kgreen: "ĸ",
	khcy: "х",
	kjcy: "ќ",
	kopf: "𝕜",
	kscr: "𝓀",
	lAtail: "⤛",
	lBarr: "⤎",
	lEg: "⪋",
	lesseqqgtr: "⪋",
	lHar: "⥢",
	lacute: "ĺ",
	laemptyv: "⦴",
	lambda: "λ",
	langd: "⦑",
	lap: "⪅",
	lessapprox: "⪅",
	laquo: "«",
	larrbfs: "⤟",
	larrfs: "⤝",
	larrlp: "↫",
	looparrowleft: "↫",
	larrpl: "⤹",
	larrsim: "⥳",
	larrtl: "↢",
	leftarrowtail: "↢",
	lat: "⪫",
	latail: "⤙",
	late: "⪭",
	lates: "⪭︀",
	lbarr: "⤌",
	lbbrk: "❲",
	lbrace: "{",
	lcub: "{",
	lbrack: "[",
	lsqb: "[",
	lbrke: "⦋",
	lbrksld: "⦏",
	lbrkslu: "⦍",
	lcaron: "ľ",
	lcedil: "ļ",
	lcy: "л",
	ldca: "⤶",
	ldrdhar: "⥧",
	ldrushar: "⥋",
	ldsh: "↲",
	le: "≤",
	leq: "≤",
	leftleftarrows: "⇇",
	llarr: "⇇",
	leftthreetimes: "⋋",
	lthree: "⋋",
	lescc: "⪨",
	lesdot: "⩿",
	lesdoto: "⪁",
	lesdotor: "⪃",
	lesg: "⋚︀",
	lesges: "⪓",
	lessdot: "⋖",
	ltdot: "⋖",
	lfisht: "⥼",
	lfr: "𝔩",
	lgE: "⪑",
	lharul: "⥪",
	lhblk: "▄",
	ljcy: "љ",
	llhard: "⥫",
	lltri: "◺",
	lmidot: "ŀ",
	lmoust: "⎰",
	lmoustache: "⎰",
	lnE: "≨",
	lneqq: "≨",
	lnap: "⪉",
	lnapprox: "⪉",
	lne: "⪇",
	lneq: "⪇",
	lnsim: "⋦",
	loang: "⟬",
	loarr: "⇽",
	longmapsto: "⟼",
	xmap: "⟼",
	looparrowright: "↬",
	rarrlp: "↬",
	lopar: "⦅",
	lopf: "𝕝",
	loplus: "⨭",
	lotimes: "⨴",
	lowast: "∗",
	loz: "◊",
	lozenge: "◊",
	lpar: "(",
	lparlt: "⦓",
	lrhard: "⥭",
	lrm: "‎",
	lrtri: "⊿",
	lsaquo: "‹",
	lscr: "𝓁",
	lsime: "⪍",
	lsimg: "⪏",
	lsquor: "‚",
	sbquo: "‚",
	lstrok: "ł",
	ltcc: "⪦",
	ltcir: "⩹",
	ltimes: "⋉",
	ltlarr: "⥶",
	ltquest: "⩻",
	ltrPar: "⦖",
	ltri: "◃",
	triangleleft: "◃",
	lurdshar: "⥊",
	luruhar: "⥦",
	lvertneqq: "≨︀",
	lvnE: "≨︀",
	mDDot: "∺",
	macr: "¯",
	strns: "¯",
	male: "♂",
	malt: "✠",
	maltese: "✠",
	marker: "▮",
	mcomma: "⨩",
	mcy: "м",
	mdash: "—",
	mfr: "𝔪",
	mho: "℧",
	micro: "µ",
	midcir: "⫰",
	minus: "−",
	minusdu: "⨪",
	mlcp: "⫛",
	models: "⊧",
	mopf: "𝕞",
	mscr: "𝓂",
	mu: "μ",
	multimap: "⊸",
	mumap: "⊸",
	nGg: "⋙̸",
	nGt: "≫⃒",
	nLeftarrow: "⇍",
	nlArr: "⇍",
	nLeftrightarrow: "⇎",
	nhArr: "⇎",
	nLl: "⋘̸",
	nLt: "≪⃒",
	nRightarrow: "⇏",
	nrArr: "⇏",
	nVDash: "⊯",
	nVdash: "⊮",
	nacute: "ń",
	nang: "∠⃒",
	napE: "⩰̸",
	napid: "≋̸",
	napos: "ŉ",
	natur: "♮",
	natural: "♮",
	ncap: "⩃",
	ncaron: "ň",
	ncedil: "ņ",
	ncongdot: "⩭̸",
	ncup: "⩂",
	ncy: "н",
	ndash: "–",
	neArr: "⇗",
	nearhk: "⤤",
	nedot: "≐̸",
	nesear: "⤨",
	toea: "⤨",
	nfr: "𝔫",
	nharr: "↮",
	nleftrightarrow: "↮",
	nhpar: "⫲",
	nis: "⋼",
	nisd: "⋺",
	njcy: "њ",
	nlE: "≦̸",
	nleqq: "≦̸",
	nlarr: "↚",
	nleftarrow: "↚",
	nldr: "‥",
	nopf: "𝕟",
	not: "¬",
	notinE: "⋹̸",
	notindot: "⋵̸",
	notinvb: "⋷",
	notinvc: "⋶",
	notnivb: "⋾",
	notnivc: "⋽",
	nparsl: "⫽⃥",
	npart: "∂̸",
	npolint: "⨔",
	nrarr: "↛",
	nrightarrow: "↛",
	nrarrc: "⤳̸",
	nrarrw: "↝̸",
	nscr: "𝓃",
	nsub: "⊄",
	nsubE: "⫅̸",
	nsubseteqq: "⫅̸",
	nsup: "⊅",
	nsupE: "⫆̸",
	nsupseteqq: "⫆̸",
	ntilde: "ñ",
	nu: "ν",
	num: "#",
	numero: "№",
	numsp: " ",
	nvDash: "⊭",
	nvHarr: "⤄",
	nvap: "≍⃒",
	nvdash: "⊬",
	nvge: "≥⃒",
	nvgt: ">⃒",
	nvinfin: "⧞",
	nvlArr: "⤂",
	nvle: "≤⃒",
	nvlt: "<⃒",
	nvltrie: "⊴⃒",
	nvrArr: "⤃",
	nvrtrie: "⊵⃒",
	nvsim: "∼⃒",
	nwArr: "⇖",
	nwarhk: "⤣",
	nwnear: "⤧",
	oacute: "ó",
	ocirc: "ô",
	ocy: "о",
	odblac: "ő",
	odiv: "⨸",
	odsold: "⦼",
	oelig: "œ",
	ofcir: "⦿",
	ofr: "𝔬",
	ogon: "˛",
	ograve: "ò",
	ogt: "⧁",
	ohbar: "⦵",
	olcir: "⦾",
	olcross: "⦻",
	olt: "⧀",
	omacr: "ō",
	omega: "ω",
	omicron: "ο",
	omid: "⦶",
	oopf: "𝕠",
	opar: "⦷",
	operp: "⦹",
	or: "∨",
	vee: "∨",
	ord: "⩝",
	order: "ℴ",
	orderof: "ℴ",
	oscr: "ℴ",
	ordf: "ª",
	ordm: "º",
	origof: "⊶",
	oror: "⩖",
	orslope: "⩗",
	orv: "⩛",
	oslash: "ø",
	osol: "⊘",
	otilde: "õ",
	otimesas: "⨶",
	ouml: "ö",
	ovbar: "⌽",
	para: "¶",
	parsim: "⫳",
	parsl: "⫽",
	pcy: "п",
	percnt: "%",
	period: ".",
	permil: "‰",
	pertenk: "‱",
	pfr: "𝔭",
	phi: "φ",
	phiv: "ϕ",
	straightphi: "ϕ",
	varphi: "ϕ",
	phone: "☎",
	pi: "π",
	piv: "ϖ",
	varpi: "ϖ",
	planckh: "ℎ",
	plus: "+",
	plusacir: "⨣",
	pluscir: "⨢",
	plusdu: "⨥",
	pluse: "⩲",
	plussim: "⨦",
	plustwo: "⨧",
	pointint: "⨕",
	popf: "𝕡",
	pound: "£",
	prE: "⪳",
	prap: "⪷",
	precapprox: "⪷",
	precnapprox: "⪹",
	prnap: "⪹",
	precneqq: "⪵",
	prnE: "⪵",
	precnsim: "⋨",
	prnsim: "⋨",
	prime: "′",
	profalar: "⌮",
	profline: "⌒",
	profsurf: "⌓",
	prurel: "⊰",
	pscr: "𝓅",
	psi: "ψ",
	puncsp: " ",
	qfr: "𝔮",
	qopf: "𝕢",
	qprime: "⁗",
	qscr: "𝓆",
	quatint: "⨖",
	quest: "?",
	rAtail: "⤜",
	rHar: "⥤",
	race: "∽̱",
	racute: "ŕ",
	raemptyv: "⦳",
	rangd: "⦒",
	range: "⦥",
	raquo: "»",
	rarrap: "⥵",
	rarrbfs: "⤠",
	rarrc: "⤳",
	rarrfs: "⤞",
	rarrpl: "⥅",
	rarrsim: "⥴",
	rarrtl: "↣",
	rightarrowtail: "↣",
	rarrw: "↝",
	rightsquigarrow: "↝",
	ratail: "⤚",
	ratio: "∶",
	rbbrk: "❳",
	rbrace: "}",
	rcub: "}",
	rbrack: "]",
	rsqb: "]",
	rbrke: "⦌",
	rbrksld: "⦎",
	rbrkslu: "⦐",
	rcaron: "ř",
	rcedil: "ŗ",
	rcy: "р",
	rdca: "⤷",
	rdldhar: "⥩",
	rdsh: "↳",
	rect: "▭",
	rfisht: "⥽",
	rfr: "𝔯",
	rharul: "⥬",
	rho: "ρ",
	rhov: "ϱ",
	varrho: "ϱ",
	rightrightarrows: "⇉",
	rrarr: "⇉",
	rightthreetimes: "⋌",
	rthree: "⋌",
	ring: "˚",
	rlm: "‏",
	rmoust: "⎱",
	rmoustache: "⎱",
	rnmid: "⫮",
	roang: "⟭",
	roarr: "⇾",
	ropar: "⦆",
	ropf: "𝕣",
	roplus: "⨮",
	rotimes: "⨵",
	rpar: ")",
	rpargt: "⦔",
	rppolint: "⨒",
	rsaquo: "›",
	rscr: "𝓇",
	rtimes: "⋊",
	rtri: "▹",
	triangleright: "▹",
	rtriltri: "⧎",
	ruluhar: "⥨",
	rx: "℞",
	sacute: "ś",
	scE: "⪴",
	scap: "⪸",
	succapprox: "⪸",
	scaron: "š",
	scedil: "ş",
	scirc: "ŝ",
	scnE: "⪶",
	succneqq: "⪶",
	scnap: "⪺",
	succnapprox: "⪺",
	scnsim: "⋩",
	succnsim: "⋩",
	scpolint: "⨓",
	scy: "с",
	sdot: "⋅",
	sdote: "⩦",
	seArr: "⇘",
	sect: "§",
	semi: ";",
	seswar: "⤩",
	tosa: "⤩",
	sext: "✶",
	sfr: "𝔰",
	sharp: "♯",
	shchcy: "щ",
	shcy: "ш",
	shy: "­",
	sigma: "σ",
	sigmaf: "ς",
	sigmav: "ς",
	varsigma: "ς",
	simdot: "⩪",
	simg: "⪞",
	simgE: "⪠",
	siml: "⪝",
	simlE: "⪟",
	simne: "≆",
	simplus: "⨤",
	simrarr: "⥲",
	smashp: "⨳",
	smeparsl: "⧤",
	smile: "⌣",
	ssmile: "⌣",
	smt: "⪪",
	smte: "⪬",
	smtes: "⪬︀",
	softcy: "ь",
	sol: "/",
	solb: "⧄",
	solbar: "⌿",
	sopf: "𝕤",
	spades: "♠",
	spadesuit: "♠",
	sqcaps: "⊓︀",
	sqcups: "⊔︀",
	sscr: "𝓈",
	star: "☆",
	sub: "⊂",
	subset: "⊂",
	subE: "⫅",
	subseteqq: "⫅",
	subdot: "⪽",
	subedot: "⫃",
	submult: "⫁",
	subnE: "⫋",
	subsetneqq: "⫋",
	subne: "⊊",
	subsetneq: "⊊",
	subplus: "⪿",
	subrarr: "⥹",
	subsim: "⫇",
	subsub: "⫕",
	subsup: "⫓",
	sung: "♪",
	sup1: "¹",
	sup2: "²",
	sup3: "³",
	supE: "⫆",
	supseteqq: "⫆",
	supdot: "⪾",
	supdsub: "⫘",
	supedot: "⫄",
	suphsol: "⟉",
	suphsub: "⫗",
	suplarr: "⥻",
	supmult: "⫂",
	supnE: "⫌",
	supsetneqq: "⫌",
	supne: "⊋",
	supsetneq: "⊋",
	supplus: "⫀",
	supsim: "⫈",
	supsub: "⫔",
	supsup: "⫖",
	swArr: "⇙",
	swnwar: "⤪",
	szlig: "ß",
	target: "⌖",
	tau: "τ",
	tcaron: "ť",
	tcedil: "ţ",
	tcy: "т",
	telrec: "⌕",
	tfr: "𝔱",
	theta: "θ",
	thetasym: "ϑ",
	thetav: "ϑ",
	vartheta: "ϑ",
	thorn: "þ",
	times: "×",
	timesbar: "⨱",
	timesd: "⨰",
	topbot: "⌶",
	topcir: "⫱",
	topf: "𝕥",
	topfork: "⫚",
	tprime: "‴",
	triangle: "▵",
	utri: "▵",
	triangleq: "≜",
	trie: "≜",
	tridot: "◬",
	triminus: "⨺",
	triplus: "⨹",
	trisb: "⧍",
	tritime: "⨻",
	trpezium: "⏢",
	tscr: "𝓉",
	tscy: "ц",
	tshcy: "ћ",
	tstrok: "ŧ",
	uHar: "⥣",
	uacute: "ú",
	ubrcy: "ў",
	ubreve: "ŭ",
	ucirc: "û",
	ucy: "у",
	udblac: "ű",
	ufisht: "⥾",
	ufr: "𝔲",
	ugrave: "ù",
	uhblk: "▀",
	ulcorn: "⌜",
	ulcorner: "⌜",
	ulcrop: "⌏",
	ultri: "◸",
	umacr: "ū",
	uogon: "ų",
	uopf: "𝕦",
	upsi: "υ",
	upsilon: "υ",
	upuparrows: "⇈",
	uuarr: "⇈",
	urcorn: "⌝",
	urcorner: "⌝",
	urcrop: "⌎",
	uring: "ů",
	urtri: "◹",
	uscr: "𝓊",
	utdot: "⋰",
	utilde: "ũ",
	uuml: "ü",
	uwangle: "⦧",
	vBar: "⫨",
	vBarv: "⫩",
	vangrt: "⦜",
	varsubsetneq: "⊊︀",
	vsubne: "⊊︀",
	varsubsetneqq: "⫋︀",
	vsubnE: "⫋︀",
	varsupsetneq: "⊋︀",
	vsupne: "⊋︀",
	varsupsetneqq: "⫌︀",
	vsupnE: "⫌︀",
	vcy: "в",
	veebar: "⊻",
	veeeq: "≚",
	vellip: "⋮",
	vfr: "𝔳",
	vopf: "𝕧",
	vscr: "𝓋",
	vzigzag: "⦚",
	wcirc: "ŵ",
	wedbar: "⩟",
	wedgeq: "≙",
	weierp: "℘",
	wp: "℘",
	wfr: "𝔴",
	wopf: "𝕨",
	wscr: "𝓌",
	xfr: "𝔵",
	xi: "ξ",
	xnis: "⋻",
	xopf: "𝕩",
	xscr: "𝓍",
	yacute: "ý",
	yacy: "я",
	ycirc: "ŷ",
	ycy: "ы",
	yen: "¥",
	yfr: "𝔶",
	yicy: "ї",
	yopf: "𝕪",
	yscr: "𝓎",
	yucy: "ю",
	yuml: "ÿ",
	zacute: "ź",
	zcaron: "ž",
	zcy: "з",
	zdot: "ż",
	zeta: "ζ",
	zfr: "𝔷",
	zhcy: "ж",
	zigrarr: "⇝",
	zopf: "𝕫",
	zscr: "𝓏",
	zwj: "‍",
	zwnj: "‌"
};
ks.ngsp = "";
var G = (function(e) {
	return e[e.TAG_OPEN_START = 0] = "TAG_OPEN_START", e[e.TAG_OPEN_END = 1] = "TAG_OPEN_END", e[e.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e[e.TAG_CLOSE = 3] = "TAG_CLOSE", e[e.INCOMPLETE_TAG_OPEN = 4] = "INCOMPLETE_TAG_OPEN", e[e.TEXT = 5] = "TEXT", e[e.ESCAPABLE_RAW_TEXT = 6] = "ESCAPABLE_RAW_TEXT", e[e.RAW_TEXT = 7] = "RAW_TEXT", e[e.INTERPOLATION = 8] = "INTERPOLATION", e[e.ENCODED_ENTITY = 9] = "ENCODED_ENTITY", e[e.COMMENT_START = 10] = "COMMENT_START", e[e.COMMENT_END = 11] = "COMMENT_END", e[e.CDATA_START = 12] = "CDATA_START", e[e.CDATA_END = 13] = "CDATA_END", e[e.ATTR_NAME = 14] = "ATTR_NAME", e[e.ATTR_QUOTE = 15] = "ATTR_QUOTE", e[e.ATTR_VALUE_TEXT = 16] = "ATTR_VALUE_TEXT", e[e.ATTR_VALUE_INTERPOLATION = 17] = "ATTR_VALUE_INTERPOLATION", e[e.DOC_TYPE_START = 18] = "DOC_TYPE_START", e[e.DOC_TYPE_END = 19] = "DOC_TYPE_END", e[e.EXPANSION_FORM_START = 20] = "EXPANSION_FORM_START", e[e.EXPANSION_CASE_VALUE = 21] = "EXPANSION_CASE_VALUE", e[e.EXPANSION_CASE_EXP_START = 22] = "EXPANSION_CASE_EXP_START", e[e.EXPANSION_CASE_EXP_END = 23] = "EXPANSION_CASE_EXP_END", e[e.EXPANSION_FORM_END = 24] = "EXPANSION_FORM_END", e[e.BLOCK_OPEN_START = 25] = "BLOCK_OPEN_START", e[e.BLOCK_OPEN_END = 26] = "BLOCK_OPEN_END", e[e.BLOCK_CLOSE = 27] = "BLOCK_CLOSE", e[e.BLOCK_PARAMETER = 28] = "BLOCK_PARAMETER", e[e.INCOMPLETE_BLOCK_OPEN = 29] = "INCOMPLETE_BLOCK_OPEN", e[e.LET_START = 30] = "LET_START", e[e.LET_VALUE = 31] = "LET_VALUE", e[e.LET_END = 32] = "LET_END", e[e.INCOMPLETE_LET = 33] = "INCOMPLETE_LET", e[e.COMPONENT_OPEN_START = 34] = "COMPONENT_OPEN_START", e[e.COMPONENT_OPEN_END = 35] = "COMPONENT_OPEN_END", e[e.COMPONENT_OPEN_END_VOID = 36] = "COMPONENT_OPEN_END_VOID", e[e.COMPONENT_CLOSE = 37] = "COMPONENT_CLOSE", e[e.INCOMPLETE_COMPONENT_OPEN = 38] = "INCOMPLETE_COMPONENT_OPEN", e[e.DIRECTIVE_NAME = 39] = "DIRECTIVE_NAME", e[e.DIRECTIVE_OPEN = 40] = "DIRECTIVE_OPEN", e[e.DIRECTIVE_CLOSE = 41] = "DIRECTIVE_CLOSE", e[e.EOF = 42] = "EOF", e;
})({}), As = class {
	constructor(e, t, n) {
		this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = n;
	}
};
function js(e, t, n, r = {}) {
	let i = new zs(new us(e, t), n, r);
	return i.tokenize(), new As(Qs(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
}
var Ms = /\r\n?/g;
function Ns(e) {
	return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function Ps(e) {
	return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function Fs(e, t) {
	return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
var Is = (function(e) {
	return e.HEX = "hexadecimal", e.DEC = "decimal", e;
})(Is || {}), Ls = [
	"@if",
	"@else",
	"@for",
	"@switch",
	"@case",
	"@default",
	"@empty",
	"@defer",
	"@placeholder",
	"@loading",
	"@error"
], Rs = {
	start: "{{",
	end: "}}"
}, zs = class {
	constructor(e, t, n) {
		this._getTagContentType = t, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._openDirectiveCount = 0, this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || !1, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((e) => e.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || !1, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || !1;
		let r = n.range || {
			endPos: e.content.length,
			startPos: 0,
			startLine: 0,
			startCol: 0
		};
		this._cursor = n.escapedString ? new ec(e, r) : new $s(e, r), this._preserveLineEndings = n.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = n.tokenizeBlocks ?? !0, this._tokenizeLet = n.tokenizeLet ?? !0, this._selectorlessEnabled = n.selectorlessEnabled ?? !1;
		try {
			this._cursor.init();
		} catch (e) {
			this.handleError(e);
		}
	}
	_processCarriageReturns(e) {
		return this._preserveLineEndings ? e : e.replace(Ms, "\n");
	}
	tokenize() {
		for (; this._cursor.peek() !== 0;) {
			let e = this._cursor.clone();
			try {
				if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
				else if (this._attemptCharCode(47)) this._consumeTagClose(e);
				else {
					let t = this._cursor.clone();
					this._attemptCharCode(63) ? (this._cursor = t, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
				}
				else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(G.TEXT, G.INTERPOLATION, () => this._isTextEnd(), () => this._isTagStart());
			} catch (e) {
				this.handleError(e);
			}
		}
		this._beginToken(G.EOF), this._endToken([]);
	}
	_getBlockName() {
		let e = !1, t = this._cursor.clone();
		return this._attemptCharCodeUntilFn((t) => ns(t) ? !e : qs(t) ? (e = !0, !1) : !0), this._cursor.getChars(t).trim();
	}
	_consumeBlockStart(e) {
		this._requireCharCode(64), this._beginToken(G.BLOCK_OPEN_START, e);
		let t = this._endToken([this._getBlockName()]);
		if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(K), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(K);
		else {
			t.type = G.INCOMPLETE_BLOCK_OPEN;
			return;
		}
		this._attemptCharCode(123) ? (this._beginToken(G.BLOCK_OPEN_END), this._endToken([])) : this._isBlockStart() && (t.parts[0] === "case" || t.parts[0] === "default") ? (this._beginToken(G.BLOCK_OPEN_END), this._endToken([]), this._beginToken(G.BLOCK_CLOSE), this._endToken([])) : t.type = G.INCOMPLETE_BLOCK_OPEN;
	}
	_consumeBlockEnd(e) {
		this._beginToken(G.BLOCK_CLOSE, e), this._endToken([]);
	}
	_consumeBlockParameters() {
		for (this._attemptCharCodeUntilFn(Js); this._cursor.peek() !== 41 && this._cursor.peek() !== 0;) {
			this._beginToken(G.BLOCK_PARAMETER);
			let e = this._cursor.clone(), t = null, n = 0;
			for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t !== null;) {
				let e = this._cursor.peek();
				if (e === 92) this._cursor.advance();
				else if (e === t) t = null;
				else if (t === null && cs(e)) t = e;
				else if (e === 40 && t === null) n++;
				else if (e === 41 && t === null) {
					if (n === 0) break;
					n > 0 && n--;
				}
				this._cursor.advance();
			}
			this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Js);
		}
	}
	_consumeLetDeclaration(e) {
		if (this._requireStr("@let"), this._beginToken(G.LET_START, e), ns(this._cursor.peek())) this._attemptCharCodeUntilFn(K);
		else {
			let t = this._endToken([this._cursor.getChars(e)]);
			t.type = G.INCOMPLETE_LET;
			return;
		}
		let t = this._endToken([this._getLetDeclarationName()]);
		if (this._attemptCharCodeUntilFn(K), !this._attemptCharCode(61)) {
			t.type = G.INCOMPLETE_LET;
			return;
		}
		this._attemptCharCodeUntilFn((e) => K(e) && !os(e)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(G.LET_END), this._endToken([]), this._cursor.advance()) : (t.type = G.INCOMPLETE_LET, t.sourceSpan = this._cursor.getSpan(e));
	}
	_getLetDeclarationName() {
		let e = this._cursor.clone(), t = !1;
		return this._attemptCharCodeUntilFn((e) => is(e) || e === 36 || e === 95 || t && rs(e) ? (t = !0, !1) : !0), this._cursor.getChars(e).trim();
	}
	_consumeLetDeclarationValue() {
		let e = this._cursor.clone();
		for (this._beginToken(G.LET_VALUE, e); this._cursor.peek() !== 0;) {
			let e = this._cursor.peek();
			if (e === 59) break;
			cs(e) && (this._cursor.advance(), this._attemptCharCodeUntilFn((t) => t === 92 ? (this._cursor.advance(), !1) : t === e)), this._cursor.advance();
		}
		this._endToken([this._cursor.getChars(e)]);
	}
	_tokenizeExpansionForm() {
		if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), !0;
		if (Ws(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), !0;
		if (this._cursor.peek() === 125) {
			if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
			if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0;
		}
		return !1;
	}
	_beginToken(e, t = this._cursor.clone()) {
		this._currentTokenStart = t, this._currentTokenType = e;
	}
	_endToken(e, t) {
		if (this._currentTokenStart === null) throw new fs(this._cursor.getSpan(t), "Programming error - attempted to end a token when there was no start to the token");
		if (this._currentTokenType === null) throw new fs(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type");
		let n = {
			type: this._currentTokenType,
			parts: e,
			sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints)
		};
		return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
	}
	_createError(e, t) {
		this._isInExpansionForm() && (e += " (Do you have an unescaped \"{\" in your template? Use \"{{ '{' }}\") to escape it.)");
		let n = new fs(t, e);
		return this._currentTokenStart = null, this._currentTokenType = null, n;
	}
	handleError(e) {
		if (e instanceof tc && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof fs) this.errors.push(e);
		else throw e;
	}
	_attemptCharCode(e) {
		return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
	}
	_attemptCharCodeCaseInsensitive(e) {
		return Gs(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
	}
	_requireCharCode(e) {
		let t = this._cursor.clone();
		if (!this._attemptCharCode(e)) throw this._createError(Ns(this._cursor.peek()), this._cursor.getSpan(t));
	}
	_attemptStr(e) {
		let t = e.length;
		if (this._cursor.charsLeft() < t) return !1;
		let n = this._cursor.clone();
		for (let r = 0; r < t; r++) if (!this._attemptCharCode(e.charCodeAt(r))) return this._cursor = n, !1;
		return !0;
	}
	_attemptStrCaseInsensitive(e) {
		for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
		return !0;
	}
	_requireStr(e) {
		let t = this._cursor.clone();
		if (!this._attemptStr(e)) throw this._createError(Ns(this._cursor.peek()), this._cursor.getSpan(t));
	}
	_requireStrCaseInsensitive(e) {
		let t = this._cursor.clone();
		if (!this._attemptStrCaseInsensitive(e)) throw this._createError(Ns(this._cursor.peek()), this._cursor.getSpan(t));
	}
	_attemptCharCodeUntilFn(e) {
		for (; !e(this._cursor.peek());) this._cursor.advance();
	}
	_requireCharCodeUntilFn(e, t) {
		let n = this._cursor.clone();
		if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < t) throw this._createError(Ns(this._cursor.peek()), this._cursor.getSpan(n));
	}
	_attemptUntilChar(e) {
		for (; this._cursor.peek() !== e;) this._cursor.advance();
	}
	_readChar() {
		let e = String.fromCodePoint(this._cursor.peek());
		return this._cursor.advance(), e;
	}
	_peekStr(e) {
		let t = e.length;
		if (this._cursor.charsLeft() < t) return !1;
		let n = this._cursor.clone();
		for (let r = 0; r < t; r++) {
			if (n.peek() !== e.charCodeAt(r)) return !1;
			n.advance();
		}
		return !0;
	}
	_isBlockStart() {
		return this._cursor.peek() === 64 && Ls.some((e) => this._peekStr(e));
	}
	_isLetStart() {
		return this._cursor.peek() === 64 && this._peekStr("@let");
	}
	_consumeEntity(e) {
		this._beginToken(G.ENCODED_ENTITY);
		let t = this._cursor.clone();
		if (this._cursor.advance(), this._attemptCharCode(35)) {
			let e = this._attemptCharCode(120) || this._attemptCharCode(88), n = this._cursor.clone();
			if (this._attemptCharCodeUntilFn(Hs), this._cursor.peek() != 59) {
				this._cursor.advance();
				let n = e ? Is.HEX : Is.DEC;
				throw this._createError(Fs(n, this._cursor.getChars(t)), this._cursor.getSpan());
			}
			let r = this._cursor.getChars(n);
			this._cursor.advance();
			try {
				let n = parseInt(r, e ? 16 : 10);
				this._endToken([String.fromCodePoint(n), this._cursor.getChars(t)]);
			} catch {
				throw this._createError(Ps(this._cursor.getChars(t)), this._cursor.getSpan());
			}
		} else {
			let n = this._cursor.clone();
			if (this._attemptCharCodeUntilFn(Us), this._cursor.peek() != 59) this._beginToken(e, t), this._cursor = n, this._endToken(["&"]);
			else {
				let e = this._cursor.getChars(n);
				this._cursor.advance();
				let r = ks.hasOwnProperty(e) && ks[e];
				if (!r) throw this._createError(Ps(e), this._cursor.getSpan(t));
				this._endToken([r, `&${e};`]);
			}
		}
	}
	_consumeRawText(e, t) {
		this._beginToken(e ? G.ESCAPABLE_RAW_TEXT : G.RAW_TEXT);
		let n = [];
		for (;;) {
			let r = this._cursor.clone(), i = t();
			if (this._cursor = r, i) break;
			e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(n.join(""))]), n.length = 0, this._consumeEntity(G.ESCAPABLE_RAW_TEXT), this._beginToken(G.ESCAPABLE_RAW_TEXT)) : n.push(this._readChar());
		}
		this._endToken([this._processCarriageReturns(n.join(""))]);
	}
	_consumeComment(e) {
		this._beginToken(G.COMMENT_START, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(G.COMMENT_END), this._requireStr("-->"), this._endToken([]);
	}
	_consumeBogusComment(e) {
		this._beginToken(G.COMMENT_START, e), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === 62), this._beginToken(G.COMMENT_END), this._cursor.advance(), this._endToken([]);
	}
	_consumeCdata(e) {
		this._beginToken(G.CDATA_START, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(G.CDATA_END), this._requireStr("]]>"), this._endToken([]);
	}
	_consumeDocType(e) {
		this._beginToken(G.DOC_TYPE_START, e), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === 62), this._beginToken(G.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
	}
	_consumePrefixAndName(e) {
		let t = this._cursor.clone(), n = "";
		for (; this._cursor.peek() !== 58 && !Vs(this._cursor.peek());) this._cursor.advance();
		let r;
		this._cursor.peek() === 58 ? (n = this._cursor.getChars(t), this._cursor.advance(), r = this._cursor.clone()) : r = t, this._requireCharCodeUntilFn(e, n === "" ? 0 : 1);
		let i = this._cursor.getChars(r);
		return [n, i];
	}
	_consumeTagOpen(e) {
		let t, n, r, i, a = [];
		try {
			if (this._selectorlessEnabled && Ys(this._cursor.peek())) i = this._consumeComponentOpenStart(e), [r, n, t] = i.parts, n && (r += `:${n}`), t && (r += `:${t}`), this._attemptCharCodeUntilFn(K);
			else {
				if (!is(this._cursor.peek())) throw this._createError(Ns(this._cursor.peek()), this._cursor.getSpan(e));
				i = this._consumeTagOpenStart(e), n = i.parts[0], t = r = i.parts[1], this._attemptCharCodeUntilFn(K);
			}
			for (; !Zs(this._cursor.peek());) if (this._selectorlessEnabled && this._cursor.peek() === 64) {
				let e = this._cursor.clone(), t = e.clone();
				t.advance(), Ys(t.peek()) && this._consumeDirective(e, t);
			} else {
				let e = this._consumeAttribute();
				a.push(e);
			}
			i.type === G.COMPONENT_OPEN_START ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
		} catch (t) {
			if (t instanceof fs) {
				i ? i.type = i.type === G.COMPONENT_OPEN_START ? G.INCOMPLETE_COMPONENT_OPEN : G.INCOMPLETE_TAG_OPEN : (this._beginToken(G.TEXT, e), this._endToken(["<"]));
				return;
			}
			throw t;
		}
		if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === G.TAG_OPEN_END_VOID) return;
		let o = this._getTagContentType(t, n, this._fullNameStack.length > 0, a);
		this._handleFullNameStackForTagOpen(n, t), o === ko.RAW_TEXT ? this._consumeRawTextWithTagClose(n, i, r, !1) : o === ko.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, i, r, !0);
	}
	_consumeRawTextWithTagClose(e, t, n, r) {
		this._consumeRawText(r, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(K), !this._attemptStrCaseInsensitive(e && t.type !== G.COMPONENT_OPEN_START ? `${e}:${n}` : n)) ? !1 : (this._attemptCharCodeUntilFn(K), this._attemptCharCode(62))), this._beginToken(t.type === G.COMPONENT_OPEN_START ? G.COMPONENT_CLOSE : G.TAG_CLOSE), this._requireCharCodeUntilFn((e) => e === 62, 3), this._cursor.advance(), this._endToken(t.parts), this._handleFullNameStackForTagClose(e, n);
	}
	_consumeTagOpenStart(e) {
		this._beginToken(G.TAG_OPEN_START, e);
		let t = this._consumePrefixAndName(Bs);
		return this._endToken(t);
	}
	_consumeComponentOpenStart(e) {
		this._beginToken(G.COMPONENT_OPEN_START, e);
		let t = this._consumeComponentName();
		return this._endToken(t);
	}
	_consumeComponentName() {
		let e = this._cursor.clone();
		for (; Xs(this._cursor.peek());) this._cursor.advance();
		let t = this._cursor.getChars(e), n = "", r = "";
		return this._cursor.peek() === 58 && (this._cursor.advance(), [n, r] = this._consumePrefixAndName(Bs)), [
			t,
			n,
			r
		];
	}
	_consumeAttribute() {
		let [e, t] = this._consumeAttributeName(), n;
		return this._attemptCharCodeUntilFn(K), this._attemptCharCode(61) && (this._attemptCharCodeUntilFn(K), n = this._consumeAttributeValue()), this._attemptCharCodeUntilFn(K), {
			prefix: e,
			name: t,
			value: n
		};
	}
	_consumeAttributeName() {
		let e = this._cursor.peek();
		if (e === 39 || e === 34) throw this._createError(Ns(e), this._cursor.getSpan());
		this._beginToken(G.ATTR_NAME);
		let t;
		if (this._openDirectiveCount > 0) {
			let e = 0;
			t = (t) => {
				if (this._openDirectiveCount > 0) {
					if (t === 40) e++;
					else if (t === 41) {
						if (e === 0) return !0;
						e--;
					}
				}
				return Bs(t);
			};
		} else if (e === 91) {
			let e = 0;
			t = (t) => (t === 91 ? e++ : t === 93 && e--, e <= 0 ? Bs(t) : os(t));
		} else t = Bs;
		let n = this._consumePrefixAndName(t);
		return this._endToken(n), n;
	}
	_consumeAttributeValue() {
		let e;
		if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
			let t = this._cursor.peek();
			this._consumeQuote(t);
			let n = () => this._cursor.peek() === t;
			e = this._consumeWithInterpolation(G.ATTR_VALUE_TEXT, G.ATTR_VALUE_INTERPOLATION, n, n), this._consumeQuote(t);
		} else {
			let t = () => Bs(this._cursor.peek());
			e = this._consumeWithInterpolation(G.ATTR_VALUE_TEXT, G.ATTR_VALUE_INTERPOLATION, t, t);
		}
		return e;
	}
	_consumeQuote(e) {
		this._beginToken(G.ATTR_QUOTE), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
	}
	_consumeTagOpenEnd() {
		let e = this._attemptCharCode(47) ? G.TAG_OPEN_END_VOID : G.TAG_OPEN_END;
		this._beginToken(e), this._requireCharCode(62), this._endToken([]);
	}
	_consumeComponentOpenEnd() {
		let e = this._attemptCharCode(47) ? G.COMPONENT_OPEN_END_VOID : G.COMPONENT_OPEN_END;
		this._beginToken(e), this._requireCharCode(62), this._endToken([]);
	}
	_consumeTagClose(e) {
		if (this._selectorlessEnabled) {
			let t = e.clone();
			for (; t.peek() !== 62 && !Ys(t.peek());) t.advance();
			if (Ys(t.peek())) {
				this._beginToken(G.COMPONENT_CLOSE, e);
				let t = this._consumeComponentName();
				this._attemptCharCodeUntilFn(K), this._requireCharCode(62), this._endToken(t);
				return;
			}
		}
		if (this._beginToken(G.TAG_CLOSE, e), this._attemptCharCodeUntilFn(K), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(K), this._requireCharCode(62), this._endToken([]);
		else {
			let [e, t] = this._consumePrefixAndName(Bs);
			this._attemptCharCodeUntilFn(K), this._requireCharCode(62), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t);
		}
	}
	_consumeExpansionFormStart() {
		this._beginToken(G.EXPANSION_FORM_START), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(G.EXPANSION_FORM_START), this._beginToken(G.RAW_TEXT);
		let e = this._readUntil(44), t = this._processCarriageReturns(e);
		if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
		else {
			let n = this._endToken([e]);
			t !== e && this.nonNormalizedIcuExpressions.push(n);
		}
		this._requireCharCode(44), this._attemptCharCodeUntilFn(K), this._beginToken(G.RAW_TEXT);
		let n = this._readUntil(44);
		this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(K);
	}
	_consumeExpansionCaseStart() {
		this._beginToken(G.EXPANSION_CASE_VALUE);
		let e = this._readUntil(123).trim();
		this._endToken([e]), this._attemptCharCodeUntilFn(K), this._beginToken(G.EXPANSION_CASE_EXP_START), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(K), this._expansionCaseStack.push(G.EXPANSION_CASE_EXP_START);
	}
	_consumeExpansionCaseEnd() {
		this._beginToken(G.EXPANSION_CASE_EXP_END), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(K), this._expansionCaseStack.pop();
	}
	_consumeExpansionFormEnd() {
		this._beginToken(G.EXPANSION_FORM_END), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
	}
	_consumeWithInterpolation(e, t, n, r) {
		this._beginToken(e);
		let i = [];
		for (; !n();) {
			let n = this._cursor.clone();
			this._attemptStr(Rs.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], n), i.length = 0, this._consumeInterpolation(t, n, r), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
		}
		this._inInterpolation = !1;
		let a = this._processCarriageReturns(i.join(""));
		return this._endToken([a]), a;
	}
	_consumeInterpolation(e, t, n) {
		let r = [];
		this._beginToken(e, t), r.push(Rs.start);
		let i = this._cursor.clone(), a = null, o = !1;
		for (; this._cursor.peek() !== 0 && (n === null || !n());) {
			let e = this._cursor.clone();
			if (this._isTagStart()) {
				this._cursor = e, r.push(this._getProcessedChars(i, e)), this._endToken(r);
				return;
			}
			if (a === null) if (this._attemptStr(Rs.end)) {
				r.push(this._getProcessedChars(i, e)), r.push(Rs.end), this._endToken(r);
				return;
			} else this._attemptStr("//") && (o = !0);
			let t = this._cursor.peek();
			this._cursor.advance(), t === 92 ? this._cursor.advance() : t === a ? a = null : !o && a === null && cs(t) && (a = t);
		}
		r.push(this._getProcessedChars(i, this._cursor)), this._endToken(r);
	}
	_consumeDirective(e, t) {
		for (this._requireCharCode(64), this._cursor.advance(); Xs(this._cursor.peek());) this._cursor.advance();
		this._beginToken(G.DIRECTIVE_NAME, e);
		let n = this._cursor.getChars(t);
		if (this._endToken([n]), this._attemptCharCodeUntilFn(K), this._cursor.peek() === 40) {
			for (this._openDirectiveCount++, this._beginToken(G.DIRECTIVE_OPEN), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(K); !Zs(this._cursor.peek()) && this._cursor.peek() !== 41;) this._consumeAttribute();
			if (this._attemptCharCodeUntilFn(K), this._openDirectiveCount--, this._cursor.peek() !== 41) {
				if (this._cursor.peek() === 62 || this._cursor.peek() === 47) return;
				throw this._createError(Ns(this._cursor.peek()), this._cursor.getSpan(e));
			}
			this._beginToken(G.DIRECTIVE_CLOSE), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(K);
		}
	}
	_getProcessedChars(e, t) {
		return this._processCarriageReturns(t.getChars(e));
	}
	_isTextEnd() {
		return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || this._cursor.peek() === 125));
	}
	_isTagStart() {
		if (this._cursor.peek() === 60) {
			let e = this._cursor.clone();
			e.advance();
			let t = e.peek();
			if (97 <= t && t <= 122 || 65 <= t && t <= 90 || t === 47 || t === 33) return !0;
		}
		return !1;
	}
	_readUntil(e) {
		let t = this._cursor.clone();
		return this._attemptUntilChar(e), this._cursor.getChars(t);
	}
	_isInExpansion() {
		return this._isInExpansionCase() || this._isInExpansionForm();
	}
	_isInExpansionCase() {
		return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === G.EXPANSION_CASE_EXP_START;
	}
	_isInExpansionForm() {
		return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === G.EXPANSION_FORM_START;
	}
	isExpansionFormStart() {
		if (this._cursor.peek() !== 123) return !1;
		let e = this._cursor.clone(), t = this._attemptStr(Rs.start);
		return this._cursor = e, !t;
	}
	_handleFullNameStackForTagOpen(e, t) {
		let n = Po(e, t);
		(this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
	}
	_handleFullNameStackForTagClose(e, t) {
		let n = Po(e, t);
		this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
	}
};
function K(e) {
	return !ns(e) || e === 0;
}
function Bs(e) {
	return ns(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function Vs(e) {
	return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function Hs(e) {
	return e === 59 || e === 0 || !as(e);
}
function Us(e) {
	return e === 59 || e === 0 || !is(e);
}
function Ws(e) {
	return e !== 125;
}
function Gs(e, t) {
	return Ks(e) === Ks(t);
}
function Ks(e) {
	return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function qs(e) {
	return is(e) || rs(e) || e === 95;
}
function Js(e) {
	return e !== 59 && K(e);
}
function Ys(e) {
	return e === 95 || e >= 65 && e <= 90;
}
function Xs(e) {
	return is(e) || rs(e) || e === 95;
}
function Zs(e) {
	return e === 47 || e === 62 || e === 60 || e === 0;
}
function Qs(e) {
	let t = [], n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n && n.type === G.TEXT && i.type === G.TEXT || n && n.type === G.ATTR_VALUE_TEXT && i.type === G.ATTR_VALUE_TEXT ? (n.parts[0] += i.parts[0], n.sourceSpan.end = i.sourceSpan.end) : (n = i, t.push(n));
	}
	return t;
}
var $s = class e {
	constructor(t, n) {
		if (t instanceof e) {
			this.file = t.file, this.input = t.input, this.end = t.end;
			let e = t.state;
			this.state = {
				peek: e.peek,
				offset: e.offset,
				line: e.line,
				column: e.column
			};
		} else {
			if (!n) throw Error("Programming error: the range argument must be provided with a file argument.");
			this.file = t, this.input = t.content, this.end = n.endPos, this.state = {
				peek: -1,
				offset: n.startPos,
				line: n.startLine,
				column: n.startCol
			};
		}
	}
	clone() {
		return new e(this);
	}
	peek() {
		return this.state.peek;
	}
	charsLeft() {
		return this.end - this.state.offset;
	}
	diff(e) {
		return this.state.offset - e.state.offset;
	}
	advance() {
		this.advanceState(this.state);
	}
	init() {
		this.updatePeek(this.state);
	}
	getSpan(e, t) {
		e ||= this;
		let n = e;
		if (t) for (; this.diff(e) > 0 && t.indexOf(e.peek()) !== -1;) n === e && (e = e.clone()), e.advance();
		let r = this.locationFromCursor(e);
		return new W(r, this.locationFromCursor(this), n === e ? r : this.locationFromCursor(n));
	}
	getChars(e) {
		return this.input.substring(e.state.offset, this.state.offset);
	}
	charAt(e) {
		return this.input.charCodeAt(e);
	}
	advanceState(e) {
		if (e.offset >= this.end) throw this.state = e, new tc("Unexpected character \"EOF\"", this);
		let t = this.charAt(e.offset);
		t === 10 ? (e.line++, e.column = 0) : os(t) || e.column++, e.offset++, this.updatePeek(e);
	}
	updatePeek(e) {
		e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
	}
	locationFromCursor(e) {
		return new ls(e.file, e.state.offset, e.state.line, e.state.column);
	}
}, ec = class e extends $s {
	constructor(t, n) {
		t instanceof e ? (super(t), this.internalState = { ...t.internalState }) : (super(t, n), this.internalState = this.state);
	}
	advance() {
		this.state = this.internalState, super.advance(), this.processEscapeSequence();
	}
	init() {
		super.init(), this.processEscapeSequence();
	}
	clone() {
		return new e(this);
	}
	getChars(e) {
		let t = e.clone(), n = "";
		for (; t.internalState.offset < this.internalState.offset;) n += String.fromCodePoint(t.peek()), t.advance();
		return n;
	}
	processEscapeSequence() {
		let e = () => this.internalState.peek;
		if (e() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), e() === 110) this.state.peek = 10;
		else if (e() === 114) this.state.peek = 13;
		else if (e() === 118) this.state.peek = 11;
		else if (e() === 116) this.state.peek = 9;
		else if (e() === 98) this.state.peek = 8;
		else if (e() === 102) this.state.peek = 12;
		else if (e() === 117) if (this.advanceState(this.internalState), e() === 123) {
			this.advanceState(this.internalState);
			let t = this.clone(), n = 0;
			for (; e() !== 125;) this.advanceState(this.internalState), n++;
			this.state.peek = this.decodeHexDigits(t, n);
		} else {
			let e = this.clone();
			this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(e, 4);
		}
		else if (e() === 120) {
			this.advanceState(this.internalState);
			let e = this.clone();
			this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(e, 2);
		} else if (ss(e())) {
			let t = "", n = 0, r = this.clone();
			for (; ss(e()) && n < 3;) r = this.clone(), t += String.fromCodePoint(e()), this.advanceState(this.internalState), n++;
			this.state.peek = parseInt(t, 8), this.internalState = r.internalState;
		} else os(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
	}
	decodeHexDigits(e, t) {
		let n = this.input.slice(e.internalState.offset, e.internalState.offset + t), r = parseInt(n, 16);
		if (isNaN(r)) throw e.state = e.internalState, new tc("Invalid hexadecimal escape sequence", e);
		return r;
	}
}, tc = class extends Error {
	constructor(e, t) {
		super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype);
	}
}, q = class e extends fs {
	static create(t, n, r) {
		return new e(t, n, r);
	}
	constructor(e, t, n) {
		super(t, n), this.elementName = e;
	}
}, nc = class {
	constructor(e, t) {
		this.rootNodes = e, this.errors = t;
	}
}, rc = class {
	constructor(e) {
		this.getTagDefinition = e;
	}
	parse(e, t, n, r = !1, i) {
		let a = (e) => (t, ...n) => e(t.toLowerCase(), ...n), o = r ? this.getTagDefinition : a(this.getTagDefinition), s = (e) => o(e).getContentType(), c = r ? i : a(i), l = js(e, t, i ? (e, t, n, r) => {
			let i = c(e, t, n, r);
			return i === void 0 ? s(e) : i;
		} : s, n), u = n && n.canSelfClose || !1, d = n && n.allowHtmComponentClosingTags || !1, f = new ic(l.tokens, o, u, d, r);
		return f.build(), new nc(f.rootNodes, [...l.errors, ...f.errors]);
	}
}, ic = class e {
	constructor(e, t, n, r, i) {
		this.tokens = e, this.tagDefinitionResolver = t, this.canSelfClose = n, this.allowHtmComponentClosingTags = r, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
	}
	build() {
		for (; this._peek.type !== G.EOF;) this._peek.type === G.TAG_OPEN_START || this._peek.type === G.INCOMPLETE_TAG_OPEN ? this._consumeElementStartTag(this._advance()) : this._peek.type === G.TAG_CLOSE ? (this._closeVoidElement(), this._consumeElementEndTag(this._advance())) : this._peek.type === G.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === G.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === G.TEXT || this._peek.type === G.RAW_TEXT || this._peek.type === G.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === G.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === G.BLOCK_OPEN_START ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === G.BLOCK_CLOSE ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === G.INCOMPLETE_BLOCK_OPEN ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === G.LET_START ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === G.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._peek.type === G.INCOMPLETE_LET ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === G.COMPONENT_OPEN_START || this._peek.type === G.INCOMPLETE_COMPONENT_OPEN ? this._consumeComponentStartTag(this._advance()) : this._peek.type === G.COMPONENT_CLOSE ? this._consumeComponentEndTag(this._advance()) : this._advance();
		for (let e of this._containerStack) e instanceof Ss && this.errors.push(q.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
	}
	_advance() {
		let e = this._peek;
		return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e;
	}
	_advanceIf(e) {
		return this._peek.type === e ? this._advance() : null;
	}
	_consumeCdata(e) {
		let t = this._advance(), n = this._getText(t), r = this._advanceIf(G.CDATA_END);
		this._addToParent(new hs(n, new W(e.sourceSpan.start, (r || t).sourceSpan.end), [t]));
	}
	_consumeComment(e) {
		let t = this._advanceIf(G.RAW_TEXT), n = this._advanceIf(G.COMMENT_END), r = t == null ? null : t.parts[0].trim(), i = n == null ? e.sourceSpan : new W(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart);
		this._addToParent(new bs(r, i));
	}
	_consumeDocType(e) {
		let t = this._advanceIf(G.RAW_TEXT), n = this._advanceIf(G.DOC_TYPE_END), r = t == null ? null : t.parts[0].trim(), i = new W(e.sourceSpan.start, (n || t || e).sourceSpan.end);
		this._addToParent(new xs(r, i));
	}
	_consumeExpansion(e) {
		let t = this._advance(), n = this._advance(), r = [];
		for (; this._peek.type === G.EXPANSION_CASE_VALUE;) {
			let e = this._parseExpansionCase();
			if (!e) return;
			r.push(e);
		}
		if (this._peek.type !== G.EXPANSION_FORM_END) {
			this.errors.push(q.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
			return;
		}
		let i = new W(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
		this._addToParent(new gs(t.parts[0], n.parts[0], r, i, t.sourceSpan)), this._advance();
	}
	_parseExpansionCase() {
		let t = this._advance();
		if (this._peek.type !== G.EXPANSION_CASE_EXP_START) return this.errors.push(q.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
		let n = this._advance(), r = this._collectExpansionExpTokens(n);
		if (!r) return null;
		let i = this._advance();
		r.push({
			type: G.EOF,
			parts: [],
			sourceSpan: i.sourceSpan
		});
		let a = new e(r, this.tagDefinitionResolver, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
		if (a.build(), a.errors.length > 0) return this.errors = this.errors.concat(a.errors), null;
		let o = new W(t.sourceSpan.start, i.sourceSpan.end, t.sourceSpan.fullStart), s = new W(n.sourceSpan.start, i.sourceSpan.end, n.sourceSpan.fullStart);
		return new _s(t.parts[0], a.rootNodes, o, t.sourceSpan, s);
	}
	_collectExpansionExpTokens(e) {
		let t = [], n = [G.EXPANSION_CASE_EXP_START];
		for (;;) {
			if ((this._peek.type === G.EXPANSION_FORM_START || this._peek.type === G.EXPANSION_CASE_EXP_START) && n.push(this._peek.type), this._peek.type === G.EXPANSION_CASE_EXP_END) if (ac(n, G.EXPANSION_CASE_EXP_START)) {
				if (n.pop(), n.length === 0) return t;
			} else return this.errors.push(q.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
			if (this._peek.type === G.EXPANSION_FORM_END) if (ac(n, G.EXPANSION_FORM_START)) n.pop();
			else return this.errors.push(q.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
			if (this._peek.type === G.EOF) return this.errors.push(q.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
			t.push(this._advance());
		}
	}
	_getText(e) {
		let t = e.parts[0];
		if (t.length > 0 && t[0] == "\n") {
			var n;
			let e = this._getClosestElementLikeParent();
			e != null && e.children.length == 0 && (n = this._getTagDefinition(e)) != null && n.ignoreFirstLf && (t = t.substring(1));
		}
		return t;
	}
	_consumeText(e) {
		let t = [e], n = e.sourceSpan, r = e.parts[0];
		if (r.length > 0 && r[0] === "\n") {
			var i;
			let n = this._getContainer();
			n != null && n.children.length === 0 && (i = this._getTagDefinition(n)) != null && i.ignoreFirstLf && (r = r.substring(1), t[0] = {
				type: e.type,
				sourceSpan: e.sourceSpan,
				parts: [r]
			});
		}
		for (; this._peek.type === G.INTERPOLATION || this._peek.type === G.TEXT || this._peek.type === G.ENCODED_ENTITY;) e = this._advance(), t.push(e), e.type === G.INTERPOLATION ? r += e.parts.join("").replace(/&([^;]+);/g, oc) : e.type === G.ENCODED_ENTITY ? r += e.parts[0] : r += e.parts.join("");
		if (r.length > 0) {
			let i = e.sourceSpan;
			this._addToParent(new ms(r, new W(n.start, i.end, n.fullStart, n.details), t));
		}
	}
	_closeVoidElement() {
		var e;
		let t = this._getContainer();
		t !== null && (e = this._getTagDefinition(t)) != null && e.isVoid && this._containerStack.pop();
	}
	_consumeElementStartTag(e) {
		var t;
		let n = [], r = [];
		this._consumeAttributesAndDirectives(n, r);
		let i = this._getElementFullName(e, this._getClosestElementLikeParent()), a = this._getTagDefinition(i), o = !1;
		if (this._peek.type === G.TAG_OPEN_END_VOID) {
			this._advance(), o = !0;
			let t = this._getTagDefinition(i);
			this.canSelfClose || t?.canSelfClose || No(i) !== null || t?.isVoid || this.errors.push(q.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
		} else this._peek.type === G.TAG_OPEN_END && (this._advance(), o = !1);
		let s = this._peek.sourceSpan.fullStart, c = new W(e.sourceSpan.start, s, e.sourceSpan.fullStart), l = new W(e.sourceSpan.start, s, e.sourceSpan.fullStart), u = new W(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), d = new ys(i, n, r, [], o, c, l, void 0, u, a?.isVoid ?? !1), f = this._getContainer(), p = f !== null && !!((t = this._getTagDefinition(f)) != null && t.isClosedByChild(d.name));
		this._pushContainer(d, p), o ? this._popContainer(i, ys, c) : e.type === G.INCOMPLETE_TAG_OPEN && (this._popContainer(i, ys, null), this.errors.push(q.create(i, c, `Opening tag "${i}" not terminated.`)));
	}
	_consumeComponentStartTag(e) {
		var t;
		let n = e.parts[0], r = [], i = [];
		this._consumeAttributesAndDirectives(r, i);
		let a = this._getClosestElementLikeParent(), o = this._getComponentTagName(e, a), s = this._getComponentFullName(e, a), c = this._peek.type === G.COMPONENT_OPEN_END_VOID;
		this._advance();
		let l = this._peek.sourceSpan.fullStart, u = new W(e.sourceSpan.start, l, e.sourceSpan.fullStart), d = new Cs(n, o, s, r, i, [], c, u, new W(e.sourceSpan.start, l, e.sourceSpan.fullStart), void 0), f = this._getContainer(), p = f !== null && d.tagName !== null && !!((t = this._getTagDefinition(f)) != null && t.isClosedByChild(d.tagName));
		this._pushContainer(d, p), c ? this._popContainer(s, Cs, u) : e.type === G.INCOMPLETE_COMPONENT_OPEN && (this._popContainer(s, Cs, null), this.errors.push(q.create(s, u, `Opening tag "${s}" not terminated.`)));
	}
	_consumeAttributesAndDirectives(e, t) {
		for (; this._peek.type === G.ATTR_NAME || this._peek.type === G.DIRECTIVE_NAME;) this._peek.type === G.DIRECTIVE_NAME ? t.push(this._consumeDirective(this._peek)) : e.push(this._consumeAttr(this._advance()));
	}
	_consumeComponentEndTag(e) {
		let t = this._getComponentFullName(e, this._getClosestElementLikeParent());
		if (!this._popContainer(t, Cs, e.sourceSpan)) {
			let n = this._containerStack[this._containerStack.length - 1], r;
			r = n instanceof Cs && n.componentName === e.parts[0] ? `, did you mean "${n.fullName}"?` : ". It may happen when the tag has already been closed by another tag.";
			let i = `Unexpected closing tag "${t}"${r}`;
			this.errors.push(q.create(t, e.sourceSpan, i));
		}
	}
	_getTagDefinition(e) {
		return typeof e == "string" ? this.tagDefinitionResolver(e) : e instanceof ys ? this.tagDefinitionResolver(e.name) : e instanceof Cs && e.tagName !== null ? this.tagDefinitionResolver(e.tagName) : null;
	}
	_pushContainer(e, t) {
		t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
	}
	_consumeElementEndTag(e) {
		var t;
		let n = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e, this._getClosestElementLikeParent());
		if (n && (t = this._getTagDefinition(n)) != null && t.isVoid) this.errors.push(q.create(n, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
		else if (!this._popContainer(n, ys, e.sourceSpan)) {
			let t = `Unexpected closing tag "${n}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
			this.errors.push(q.create(n, e.sourceSpan, t));
		}
	}
	_popContainer(e, t, n) {
		let r = !1;
		for (let a = this._containerStack.length - 1; a >= 0; a--) {
			var i;
			let o = this._containerStack[a], s = o instanceof Cs ? o.fullName : o.name;
			if (No(s) ? s === e : (s === e || e === null) && o instanceof t) return o.endSourceSpan = n, o.sourceSpan.end = n === null ? o.sourceSpan.end : n.end, this._containerStack.splice(a, this._containerStack.length - a), !r;
			(o instanceof Ss || !((i = this._getTagDefinition(o)) != null && i.closedByParent)) && (r = !0);
		}
		return !1;
	}
	_consumeAttr(e) {
		let t = Po(e.parts[0], e.parts[1]), n = e.sourceSpan.end, r;
		this._peek.type === G.ATTR_QUOTE && (r = this._advance());
		let i = "", a = [], o, s;
		if (this._peek.type === G.ATTR_VALUE_TEXT) for (o = this._peek.sourceSpan, s = this._peek.sourceSpan.end; this._peek.type === G.ATTR_VALUE_TEXT || this._peek.type === G.ATTR_VALUE_INTERPOLATION || this._peek.type === G.ENCODED_ENTITY;) {
			let e = this._advance();
			a.push(e), e.type === G.ATTR_VALUE_INTERPOLATION ? i += e.parts.join("").replace(/&([^;]+);/g, oc) : e.type === G.ENCODED_ENTITY ? i += e.parts[0] : i += e.parts.join(""), s = n = e.sourceSpan.end;
		}
		this._peek.type === G.ATTR_QUOTE && (s = n = this._advance().sourceSpan.end);
		let c = o && s && new W(r?.sourceSpan.start ?? o.start, s, r?.sourceSpan.fullStart ?? o.fullStart);
		return new vs(t, i, new W(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, c, a.length > 0 ? a : void 0, void 0);
	}
	_consumeDirective(e) {
		let t = [], n = e.sourceSpan.end, r = null;
		if (this._advance(), this._peek.type === G.DIRECTIVE_OPEN) {
			for (n = this._peek.sourceSpan.end, this._advance(); this._peek.type === G.ATTR_NAME;) t.push(this._consumeAttr(this._advance()));
			this._peek.type === G.DIRECTIVE_CLOSE ? (r = this._peek.sourceSpan, this._advance()) : this.errors.push(q.create(null, e.sourceSpan, "Unterminated directive definition"));
		}
		let i = new W(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new W(i.start, r === null ? e.sourceSpan.end : r.end, i.fullStart);
		return new ws(e.parts[0], t, a, i, r);
	}
	_consumeBlockOpen(e) {
		let t = [];
		for (; this._peek.type === G.BLOCK_PARAMETER;) {
			let e = this._advance();
			t.push(new Ts(e.parts[0], e.sourceSpan));
		}
		this._peek.type === G.BLOCK_OPEN_END && this._advance();
		let n = this._peek.sourceSpan.fullStart, r = new W(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new W(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new Ss(e.parts[0], t, [], r, e.sourceSpan, i);
		this._pushContainer(a, !1);
	}
	_consumeBlockClose(e) {
		this._popContainer(null, Ss, e.sourceSpan) || this.errors.push(q.create(null, e.sourceSpan, "Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the \"&#125;\" HTML entity instead."));
	}
	_consumeIncompleteBlock(e) {
		let t = [];
		for (; this._peek.type === G.BLOCK_PARAMETER;) {
			let e = this._advance();
			t.push(new Ts(e.parts[0], e.sourceSpan));
		}
		let n = this._peek.sourceSpan.fullStart, r = new W(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new W(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new Ss(e.parts[0], t, [], r, e.sourceSpan, i);
		this._pushContainer(a, !1), this._popContainer(null, Ss, null), this.errors.push(q.create(e.parts[0], r, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
	}
	_consumeLet(e) {
		let t = e.parts[0], n, r;
		if (this._peek.type !== G.LET_VALUE) {
			this.errors.push(q.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${t}". Declaration must have a value.`));
			return;
		} else n = this._advance();
		if (this._peek.type !== G.LET_END) {
			this.errors.push(q.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${t}". Declaration must be terminated with a semicolon.`));
			return;
		} else r = this._advance();
		let i = r.sourceSpan.fullStart, a = new W(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(t), s = new W(e.sourceSpan.start.moveBy(o), e.sourceSpan.end), c = new Es(t, n.parts[0], a, s, n.sourceSpan);
		this._addToParent(c);
	}
	_consumeIncompleteLet(e) {
		let t = e.parts[0] ?? "", n = t ? ` "${t}"` : "";
		if (t.length > 0) {
			let n = e.sourceSpan.toString().lastIndexOf(t), r = new W(e.sourceSpan.start.moveBy(n), e.sourceSpan.end), i = new W(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), a = new Es(t, "", e.sourceSpan, r, i);
			this._addToParent(a);
		}
		this.errors.push(q.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
	}
	_getContainer() {
		return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
	}
	_getClosestElementLikeParent() {
		for (let e = this._containerStack.length - 1; e > -1; e--) {
			let t = this._containerStack[e];
			if (t instanceof ys || t instanceof Cs) return t;
		}
		return null;
	}
	_addToParent(e) {
		let t = this._getContainer();
		t === null ? this.rootNodes.push(e) : t.children.push(e);
	}
	_getElementFullName(e, t) {
		return Po(this._getPrefix(e, t), e.parts[1]);
	}
	_getComponentFullName(e, t) {
		let n = e.parts[0], r = this._getComponentTagName(e, t);
		return r === null ? n : r.startsWith(":") ? n + r : `${n}:${r}`;
	}
	_getComponentTagName(e, t) {
		let n = this._getPrefix(e, t), r = e.parts[2];
		return !n && !r ? null : !n && r ? r : Po(n, r || "ng-component");
	}
	_getPrefix(e, t) {
		let n, r;
		if (e.type === G.COMPONENT_OPEN_START || e.type === G.INCOMPLETE_COMPONENT_OPEN || e.type === G.COMPONENT_CLOSE ? (n = e.parts[1], r = e.parts[2]) : (n = e.parts[0], r = e.parts[1]), n = n || this._getTagDefinition(r)?.implicitNamespacePrefix || "", !n && t) {
			let e = t instanceof ys ? t.name : t.tagName;
			if (e !== null) {
				let t = Ao(e)[1], r = this._getTagDefinition(t);
				r !== null && !r.preventNamespaceInheritance && (n = No(e));
			}
		}
		return n;
	}
};
function ac(e, t) {
	return e.length > 0 && e[e.length - 1] === t;
}
function oc(e, t) {
	return ks[t] === void 0 ? /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e : ks[t] || e;
}
var sc = class extends rc {
	constructor() {
		super(ts);
	}
	parse(e, t, n, r = !1, i) {
		return super.parse(e, t, n, r, i);
	}
}, cc = null, lc = () => (cc ||= new sc(), cc);
function uc(e, t = {}) {
	let { canSelfClose: n = !1, allowHtmComponentClosingTags: r = !1, isTagNameCaseSensitive: i = !1, getTagContentType: a, tokenizeAngularBlocks: o = !1, tokenizeAngularLetDeclaration: s = !1, enableAngularSelectorlessSyntax: c = !1 } = t;
	return lc().parse(e, "angular-html-parser", {
		tokenizeExpansionForms: o,
		canSelfClose: n,
		allowHtmComponentClosingTags: r,
		tokenizeBlocks: o,
		tokenizeLet: s,
		selectorlessEnabled: c
	}, i, a);
}
var dc = [
	pc,
	mc,
	gc,
	vc,
	yc,
	Sc,
	bc,
	xc,
	Cc,
	_c
];
function fc(e, t) {
	for (let n of dc) n(e, t);
	return e;
}
function pc(e) {
	e.walk((e) => {
		if (e.kind === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].kind === "text" && e.children[0].value[0] === "\n") {
			let t = e.children[0];
			t.value.length === 1 ? e.removeChild(t) : t.value = t.value.slice(1);
		}
	});
}
function mc(e) {
	let t = (e) => e.kind === "element" && e.prev?.kind === "ieConditionalStartComment" && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild?.kind === "ieConditionalEndComment" && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
	e.walk((e) => {
		if (e.children) for (let n = 0; n < e.children.length; n++) {
			let r = e.children[n];
			if (!t(r)) continue;
			let i = r.prev, a = r.firstChild;
			e.removeChild(i), n--;
			let o = new W(i.sourceSpan.start, a.sourceSpan.end), s = new W(o.start, r.sourceSpan.end);
			r.condition = i.condition, r.sourceSpan = s, r.startSourceSpan = o, r.removeChild(a);
		}
	});
}
function hc(e, t, n) {
	e.walk((e) => {
		if (e.children) for (let r = 0; r < e.children.length; r++) {
			let i = e.children[r];
			if (i.kind !== "text" && !t(i)) continue;
			i.kind !== "text" && (i.kind = "text", i.value = n(i));
			let a = i.prev;
			!a || a.kind !== "text" || (a.value += i.value, a.sourceSpan = new W(a.sourceSpan.start, i.sourceSpan.end), e.removeChild(i), r--);
		}
	});
}
function gc(e) {
	return hc(e, (e) => e.kind === "cdata", (e) => `<![CDATA[${e.value}]]>`);
}
function _c(e) {
	let t = (e) => e.kind === "element" && e.attrs.length === 0 && e.children.length === 1 && e.firstChild.kind === "text" && !z.hasWhitespaceCharacter(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev?.kind === "text" && e.next?.kind === "text";
	e.walk((e) => {
		if (e.children) for (let n = 0; n < e.children.length; n++) {
			let r = e.children[n];
			if (!t(r)) continue;
			let i = r.prev, a = r.next;
			i.value += `<${r.rawName}>` + r.firstChild.value + `</${r.rawName}>` + a.value, i.sourceSpan = new W(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, e.removeChild(r), n--, e.removeChild(a);
		}
	});
}
function vc(e, t) {
	if (t.parser === "html") return;
	let n = /\{\{(.+?)\}\}/su;
	e.walk((e) => {
		if (Wr(e, t)) for (let t of e.children) {
			if (t.kind !== "text") continue;
			let r = t.sourceSpan.start, i = null, a = t.value.split(n);
			for (let n = 0; n < a.length; n++, r = i) {
				let o = a[n];
				if (n % 2 == 0) {
					i = r.moveBy(o.length), o.length > 0 && e.insertChildBefore(t, {
						kind: "text",
						value: o,
						sourceSpan: new W(r, i)
					});
					continue;
				}
				i = r.moveBy(o.length + 4), e.insertChildBefore(t, {
					kind: "interpolation",
					sourceSpan: new W(r, i),
					children: o.length === 0 ? [] : [{
						kind: "text",
						value: o,
						sourceSpan: new W(r.moveBy(2), i.moveBy(-2))
					}]
				});
			}
			e.removeChild(t);
		}
	});
}
function yc(e, t) {
	e.walk((e) => {
		let n = e.$children;
		if (!n) return;
		if (n.length === 0 || n.length === 1 && n[0].kind === "text" && z.trim(n[0].value).length === 0) {
			e.hasDanglingSpaces = n.length > 0, e.$children = [];
			return;
		}
		let r = Gr(e, t), i = Kr(e);
		if (!r) for (let t = 0; t < n.length; t++) {
			let r = n[t];
			if (r.kind !== "text") continue;
			let { leadingWhitespace: i, text: a, trailingWhitespace: o } = Rr(r.value), s = r.prev, c = r.next;
			a ? (r.value = a, r.sourceSpan = new W(r.sourceSpan.start.moveBy(i.length), r.sourceSpan.end.moveBy(-o.length)), i && (s && (s.hasTrailingSpaces = !0), r.hasLeadingSpaces = !0), o && (r.hasTrailingSpaces = !0, c && (c.hasLeadingSpaces = !0))) : (e.removeChild(r), t--, (i || o) && (s && (s.hasTrailingSpaces = !0), c && (c.hasLeadingSpaces = !0)));
		}
		e.isWhitespaceSensitive = r, e.isIndentationSensitive = i;
	});
}
function bc(e) {
	e.walk((e) => {
		e.isSelfClosing = !e.children || e.kind === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
	});
}
function xc(e, t) {
	e.walk((e) => {
		e.kind === "element" && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)));
	});
}
function Sc(e, t) {
	e.walk((e) => {
		e.cssDisplay = xi(e, t);
	});
}
function Cc(e, t) {
	e.walk((e) => {
		let { children: n } = e;
		if (n) {
			if (n.length === 0) {
				e.isDanglingSpaceSensitive = Yr(e, t);
				return;
			}
			for (let e of n) e.isLeadingSpaceSensitive = qr(e, t), e.isTrailingSpaceSensitive = Jr(e, t);
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				t.isLeadingSpaceSensitive = (e === 0 || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive, t.isTrailingSpaceSensitive = (e === n.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive;
			}
		}
	});
}
var wc = fc;
function Tc(e, t, n) {
	let { node: r } = e;
	switch (r.kind) {
		case "root": return t.__onHtmlRoot && t.__onHtmlRoot(r), [F(yo(e, t, n)), R];
		case "element":
		case "ieConditionalComment": return Oo(e, t, n);
		case "angularControlFlowBlock": return bo(e, t, n);
		case "angularControlFlowBlockParameters": return To(e, t, n);
		case "angularControlFlowBlockParameter": return z.trim(r.expression);
		case "angularLetDeclaration": return F([
			"@let ",
			F([
				r.id,
				" =",
				F(Pn([I, n("init")]))
			]),
			";"
		]);
		case "angularLetDeclarationInitializer": return r.value;
		case "angularIcuExpression": return Eo(e, t, n);
		case "angularIcuCase": return Do(e, t, n);
		case "ieConditionalStartComment":
		case "ieConditionalEndComment": return [Ga(r), Aa(r)];
		case "interpolation": return [
			Ga(r, t),
			...e.map(n, "children"),
			Aa(r, t)
		];
		case "text": {
			if (r.parent.kind === "interpolation") {
				let e = /\n[^\S\n]*$/u, t = e.test(r.value);
				return [kn(t ? r.value.replace(e, "") : r.value), t ? R : ""];
			}
			let e = Ka(r, t), n = Ai(r), i = Ma(r, t);
			return n[0] = [e, n[0]], n.push([n.pop(), i]), Rn(n);
		}
		case "docType": return [F([
			Ga(r, t),
			" ",
			P(0, r.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")
		]), Aa(r, t)];
		case "comment": return [
			Ka(r, t),
			kn(t.originalText.slice(Ea(r), Da(r))),
			Ma(r, t)
		];
		case "attribute": {
			if (r.value === null) return r.rawName;
			let e = Ci(r.value), n = Ni(r, t) ? "" : Jn(e, "\"");
			return [
				r.rawName,
				"=",
				n,
				kn(n === "\"" ? P(0, e, "\"", "&quot;") : P(0, e, "'", "&apos;")),
				n
			];
		}
		default: throw new Xn(r, "HTML");
	}
}
var Ec = {
	features: { experimental_frontMatterSupport: {
		massageAstNode: !0,
		embed: !0,
		print: !0
	} },
	preprocess: wc,
	print: Tc,
	insertPragma: mo,
	massageAstNode: er,
	embed: eo,
	getVisitorKeys: so
}, Dc = [
	{
		name: "Angular",
		type: "markup",
		aceMode: "html",
		extensions: [".component.html"],
		tmScope: "text.html.basic",
		aliases: ["xhtml"],
		codemirrorMode: "htmlmixed",
		codemirrorMimeType: "text/html",
		parsers: ["angular"],
		vscodeLanguageIds: ["html"],
		filenames: [],
		linguistLanguageId: 146
	},
	{
		name: "HTML",
		type: "markup",
		aceMode: "html",
		extensions: [
			".html",
			".hta",
			".htm",
			".html.hl",
			".inc",
			".xht",
			".xhtml"
		],
		tmScope: "text.html.basic",
		aliases: ["xhtml"],
		codemirrorMode: "htmlmixed",
		codemirrorMimeType: "text/html",
		parsers: ["html"],
		vscodeLanguageIds: ["html"],
		linguistLanguageId: 146
	},
	{
		name: "Lightning Web Components",
		type: "markup",
		aceMode: "html",
		extensions: [],
		tmScope: "text.html.basic",
		aliases: ["xhtml"],
		codemirrorMode: "htmlmixed",
		codemirrorMimeType: "text/html",
		parsers: ["lwc"],
		vscodeLanguageIds: ["html"],
		filenames: [],
		linguistLanguageId: 146
	},
	{
		name: "MJML",
		type: "markup",
		aceMode: "html",
		extensions: [".mjml"],
		tmScope: "text.mjml.basic",
		aliases: ["MJML", "mjml"],
		codemirrorMode: "htmlmixed",
		codemirrorMimeType: "text/html",
		parsers: ["mjml"],
		filenames: [],
		vscodeLanguageIds: ["mjml"],
		linguistLanguageId: 146
	},
	{
		name: "Vue",
		type: "markup",
		aceMode: "vue",
		extensions: [".vue"],
		tmScope: "source.vue",
		codemirrorMode: "vue",
		codemirrorMimeType: "text/x-vue",
		parsers: ["vue"],
		vscodeLanguageIds: ["vue"],
		linguistLanguageId: 391
	}
], Oc = {
	bracketSpacing: {
		category: "Common",
		type: "boolean",
		default: !0,
		description: "Print spaces between brackets.",
		oppositeDescription: "Do not print spaces between brackets."
	},
	objectWrap: {
		category: "Common",
		type: "choice",
		default: "preserve",
		description: "How to wrap object literals.",
		choices: [{
			value: "preserve",
			description: "Keep as multi-line, if there is a newline between the opening brace and first property."
		}, {
			value: "collapse",
			description: "Fit to a single line when possible."
		}]
	},
	singleQuote: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Use single quotes instead of double quotes."
	},
	proseWrap: {
		category: "Common",
		type: "choice",
		default: "preserve",
		description: "How to wrap prose.",
		choices: [
			{
				value: "always",
				description: "Wrap prose if it exceeds the print width."
			},
			{
				value: "never",
				description: "Do not wrap prose."
			},
			{
				value: "preserve",
				description: "Wrap prose as-is."
			}
		]
	},
	bracketSameLine: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Put > of opening tags on the last line instead of on a new line."
	},
	singleAttributePerLine: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Enforce single attribute per line in HTML, Vue and JSX."
	}
}, kc = "HTML", Ac = {
	bracketSameLine: Oc.bracketSameLine,
	htmlWhitespaceSensitivity: {
		category: kc,
		type: "choice",
		default: "css",
		description: "How to handle whitespaces in HTML.",
		choices: [
			{
				value: "css",
				description: "Respect the default value of CSS display property."
			},
			{
				value: "strict",
				description: "Whitespaces are considered sensitive."
			},
			{
				value: "ignore",
				description: "Whitespaces are considered insensitive."
			}
		]
	},
	singleAttributePerLine: Oc.singleAttributePerLine,
	vueIndentScriptAndStyle: {
		category: kc,
		type: "boolean",
		default: !1,
		description: "Indent script and style tags in Vue files."
	}
}, jc = {};
Yt(jc, {
	angular: () => bl,
	html: () => _l,
	lwc: () => Sl,
	mjml: () => yl,
	vue: () => xl
});
function Mc(e, t) {
	let n = /* @__PURE__ */ SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
	return Object.assign(n, t);
}
var Nc = Mc, Pc = {
	canSelfClose: !0,
	normalizeTagName: !1,
	normalizeAttributeName: !1,
	allowHtmComponentClosingTags: !1,
	isTagNameCaseSensitive: !1,
	shouldParseFrontMatter: !0
};
function Fc(e) {
	return {
		...Pc,
		...e
	};
}
function Ic(e) {
	let { canSelfClose: t, allowHtmComponentClosingTags: n, isTagNameCaseSensitive: r, shouldParseAsRawText: i, tokenizeAngularBlocks: a, tokenizeAngularLetDeclaration: o } = e;
	return {
		canSelfClose: t,
		allowHtmComponentClosingTags: n,
		isTagNameCaseSensitive: r,
		getTagContentType: i ? (...e) => i(...e) ? ko.RAW_TEXT : void 0 : void 0,
		tokenizeAngularBlocks: a,
		tokenizeAngularLetDeclaration: o
	};
}
var Lc = new Map([
	["*", new Set(/* @__PURE__ */ "accesskey.autocapitalize.autocorrect.autofocus.class.contenteditable.dir.draggable.enterkeyhint.exportparts.hidden.id.inert.inputmode.is.itemid.itemprop.itemref.itemscope.itemtype.lang.nonce.part.popover.slot.spellcheck.style.tabindex.title.translate.writingsuggestions".split("."))],
	["a", new Set([
		"charset",
		"coords",
		"download",
		"href",
		"hreflang",
		"name",
		"ping",
		"referrerpolicy",
		"rel",
		"rev",
		"shape",
		"target",
		"type"
	])],
	["applet", new Set([
		"align",
		"alt",
		"archive",
		"code",
		"codebase",
		"height",
		"hspace",
		"name",
		"object",
		"vspace",
		"width"
	])],
	["area", new Set([
		"alt",
		"coords",
		"download",
		"href",
		"hreflang",
		"nohref",
		"ping",
		"referrerpolicy",
		"rel",
		"shape",
		"target",
		"type"
	])],
	["audio", new Set([
		"autoplay",
		"controls",
		"crossorigin",
		"loop",
		"muted",
		"preload",
		"src"
	])],
	["base", new Set(["href", "target"])],
	["basefont", new Set([
		"color",
		"face",
		"size"
	])],
	["blockquote", new Set(["cite"])],
	["body", new Set([
		"alink",
		"background",
		"bgcolor",
		"link",
		"text",
		"vlink"
	])],
	["br", new Set(["clear"])],
	["button", new Set([
		"command",
		"commandfor",
		"disabled",
		"form",
		"formaction",
		"formenctype",
		"formmethod",
		"formnovalidate",
		"formtarget",
		"name",
		"popovertarget",
		"popovertargetaction",
		"type",
		"value"
	])],
	["canvas", new Set(["height", "width"])],
	["caption", new Set(["align"])],
	["col", new Set([
		"align",
		"char",
		"charoff",
		"span",
		"valign",
		"width"
	])],
	["colgroup", new Set([
		"align",
		"char",
		"charoff",
		"span",
		"valign",
		"width"
	])],
	["data", new Set(["value"])],
	["del", new Set(["cite", "datetime"])],
	["details", new Set(["name", "open"])],
	["dialog", new Set(["closedby", "open"])],
	["dir", new Set(["compact"])],
	["div", new Set(["align"])],
	["dl", new Set(["compact"])],
	["embed", new Set([
		"height",
		"src",
		"type",
		"width"
	])],
	["fieldset", new Set([
		"disabled",
		"form",
		"name"
	])],
	["font", new Set([
		"color",
		"face",
		"size"
	])],
	["form", new Set([
		"accept",
		"accept-charset",
		"action",
		"autocomplete",
		"enctype",
		"method",
		"name",
		"novalidate",
		"target"
	])],
	["frame", new Set([
		"frameborder",
		"longdesc",
		"marginheight",
		"marginwidth",
		"name",
		"noresize",
		"scrolling",
		"src"
	])],
	["frameset", new Set(["cols", "rows"])],
	["h1", new Set(["align"])],
	["h2", new Set(["align"])],
	["h3", new Set(["align"])],
	["h4", new Set(["align"])],
	["h5", new Set(["align"])],
	["h6", new Set(["align"])],
	["head", new Set(["profile"])],
	["hr", new Set([
		"align",
		"noshade",
		"size",
		"width"
	])],
	["html", new Set(["manifest", "version"])],
	["iframe", new Set([
		"align",
		"allow",
		"allowfullscreen",
		"allowpaymentrequest",
		"allowusermedia",
		"frameborder",
		"height",
		"loading",
		"longdesc",
		"marginheight",
		"marginwidth",
		"name",
		"referrerpolicy",
		"sandbox",
		"scrolling",
		"src",
		"srcdoc",
		"width"
	])],
	["img", new Set([
		"align",
		"alt",
		"border",
		"crossorigin",
		"decoding",
		"fetchpriority",
		"height",
		"hspace",
		"ismap",
		"loading",
		"longdesc",
		"name",
		"referrerpolicy",
		"sizes",
		"src",
		"srcset",
		"usemap",
		"vspace",
		"width"
	])],
	["input", new Set(/* @__PURE__ */ "accept.align.alpha.alt.autocomplete.checked.colorspace.dirname.disabled.form.formaction.formenctype.formmethod.formnovalidate.formtarget.height.ismap.list.max.maxlength.min.minlength.multiple.name.pattern.placeholder.popovertarget.popovertargetaction.readonly.required.size.src.step.type.usemap.value.width".split("."))],
	["ins", new Set(["cite", "datetime"])],
	["isindex", new Set(["prompt"])],
	["label", new Set(["for", "form"])],
	["legend", new Set(["align"])],
	["li", new Set(["type", "value"])],
	["link", new Set([
		"as",
		"blocking",
		"charset",
		"color",
		"crossorigin",
		"disabled",
		"fetchpriority",
		"href",
		"hreflang",
		"imagesizes",
		"imagesrcset",
		"integrity",
		"media",
		"referrerpolicy",
		"rel",
		"rev",
		"sizes",
		"target",
		"type"
	])],
	["map", new Set(["name"])],
	["menu", new Set(["compact"])],
	["meta", new Set([
		"charset",
		"content",
		"http-equiv",
		"media",
		"name",
		"scheme"
	])],
	["meter", new Set([
		"high",
		"low",
		"max",
		"min",
		"optimum",
		"value"
	])],
	["object", new Set([
		"align",
		"archive",
		"border",
		"classid",
		"codebase",
		"codetype",
		"data",
		"declare",
		"form",
		"height",
		"hspace",
		"name",
		"standby",
		"type",
		"typemustmatch",
		"usemap",
		"vspace",
		"width"
	])],
	["ol", new Set([
		"compact",
		"reversed",
		"start",
		"type"
	])],
	["optgroup", new Set(["disabled", "label"])],
	["option", new Set([
		"disabled",
		"label",
		"selected",
		"value"
	])],
	["output", new Set([
		"for",
		"form",
		"name"
	])],
	["p", new Set(["align"])],
	["param", new Set([
		"name",
		"type",
		"value",
		"valuetype"
	])],
	["pre", new Set(["width"])],
	["progress", new Set(["max", "value"])],
	["q", new Set(["cite"])],
	["script", new Set([
		"async",
		"blocking",
		"charset",
		"crossorigin",
		"defer",
		"fetchpriority",
		"integrity",
		"language",
		"nomodule",
		"referrerpolicy",
		"src",
		"type"
	])],
	["select", new Set([
		"autocomplete",
		"disabled",
		"form",
		"multiple",
		"name",
		"required",
		"size"
	])],
	["slot", new Set(["name"])],
	["source", new Set([
		"height",
		"media",
		"sizes",
		"src",
		"srcset",
		"type",
		"width"
	])],
	["style", new Set([
		"blocking",
		"media",
		"type"
	])],
	["table", new Set([
		"align",
		"bgcolor",
		"border",
		"cellpadding",
		"cellspacing",
		"frame",
		"rules",
		"summary",
		"width"
	])],
	["tbody", new Set([
		"align",
		"char",
		"charoff",
		"valign"
	])],
	["td", new Set([
		"abbr",
		"align",
		"axis",
		"bgcolor",
		"char",
		"charoff",
		"colspan",
		"headers",
		"height",
		"nowrap",
		"rowspan",
		"scope",
		"valign",
		"width"
	])],
	["template", new Set([
		"shadowrootclonable",
		"shadowrootcustomelementregistry",
		"shadowrootdelegatesfocus",
		"shadowrootmode",
		"shadowrootserializable"
	])],
	["textarea", new Set([
		"autocomplete",
		"cols",
		"dirname",
		"disabled",
		"form",
		"maxlength",
		"minlength",
		"name",
		"placeholder",
		"readonly",
		"required",
		"rows",
		"wrap"
	])],
	["tfoot", new Set([
		"align",
		"char",
		"charoff",
		"valign"
	])],
	["th", new Set([
		"abbr",
		"align",
		"axis",
		"bgcolor",
		"char",
		"charoff",
		"colspan",
		"headers",
		"height",
		"nowrap",
		"rowspan",
		"scope",
		"valign",
		"width"
	])],
	["thead", new Set([
		"align",
		"char",
		"charoff",
		"valign"
	])],
	["time", new Set(["datetime"])],
	["tr", new Set([
		"align",
		"bgcolor",
		"char",
		"charoff",
		"valign"
	])],
	["track", new Set([
		"default",
		"kind",
		"label",
		"src",
		"srclang"
	])],
	["ul", new Set(["compact", "type"])],
	["video", new Set([
		"autoplay",
		"controls",
		"crossorigin",
		"height",
		"loop",
		"muted",
		"playsinline",
		"poster",
		"preload",
		"src",
		"width"
	])]
]), Rc = new Set(/* @__PURE__ */ "a.abbr.acronym.address.applet.area.article.aside.audio.b.base.basefont.bdi.bdo.bgsound.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.command.content.data.datalist.dd.del.details.dfn.dialog.dir.div.dl.dt.em.embed.fencedframe.fieldset.figcaption.figure.font.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.image.img.input.ins.isindex.kbd.keygen.label.legend.li.link.listing.main.map.mark.marquee.math.menu.menuitem.meta.meter.multicol.nav.nextid.nobr.noembed.noframes.noscript.object.ol.optgroup.option.output.p.param.picture.plaintext.pre.progress.q.rb.rbc.rp.rt.rtc.ruby.s.samp.script.search.section.select.selectedcontent.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.svg.table.tbody.td.template.textarea.tfoot.th.thead.time.title.tr.track.tt.u.ul.var.video.wbr.xmp".split(".")), zc = {
	attrs: !0,
	children: !0,
	cases: !0,
	expression: !0
}, Bc = new Set(["parent"]), Vc, Hc, Uc, Wc = class e {
	constructor(e = {}) {
		$t(this, Vc), Xt(this, "kind"), Xt(this, "parent");
		for (let t of new Set([...Bc, ...Object.keys(e)])) this.setProperty(t, e[t]);
		if (Tr(e)) for (let t of Object.getOwnPropertySymbols(e)) this.setProperty(t, e[t]);
	}
	setProperty(e, t) {
		if (this[e] !== t) {
			if (e in zc && (t = t.map((e) => this.createChild(e))), !Bc.has(e)) {
				this[e] = t;
				return;
			}
			Object.defineProperty(this, e, {
				value: t,
				enumerable: !1,
				configurable: !0
			});
		}
	}
	map(t) {
		let n;
		for (let r in zc) {
			let i = this[r];
			if (i) {
				let a = Kc(i, (e) => e.map(t));
				n !== i && (n ||= new e({ parent: this.parent }), n.setProperty(r, a));
			}
		}
		if (n) for (let e in this) e in zc || (n[e] = this[e]);
		return t(n || this);
	}
	walk(e) {
		for (let t in zc) {
			let n = this[t];
			if (n) for (let t = 0; t < n.length; t++) n[t].walk(e);
		}
		e(this);
	}
	createChild(t) {
		let n = t instanceof e ? t.clone() : new e(t);
		return n.setProperty("parent", this), n;
	}
	insertChildBefore(e, t) {
		let n = this.$children;
		n.splice(n.indexOf(e), 0, this.createChild(t));
	}
	removeChild(e) {
		let t = this.$children;
		t.splice(t.indexOf(e), 1);
	}
	replaceChild(e, t) {
		let n = this.$children;
		n[n.indexOf(e)] = this.createChild(t);
	}
	clone() {
		return new e(this);
	}
	get $children() {
		return this[Qt(this, Vc, Hc)];
	}
	set $children(e) {
		this[Qt(this, Vc, Hc)] = e;
	}
	get firstChild() {
		return this.$children?.[0];
	}
	get lastChild() {
		return an(1, this.$children, -1);
	}
	get prev() {
		let e = Qt(this, Vc, Uc);
		return e[e.indexOf(this) - 1];
	}
	get next() {
		let e = Qt(this, Vc, Uc);
		return e[e.indexOf(this) + 1];
	}
	get rawName() {
		return this.hasExplicitNamespace ? this.fullName : this.name;
	}
	get fullName() {
		return this.namespace ? this.namespace + ":" + this.name : this.name;
	}
	get attrMap() {
		return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
	}
};
Vc = /* @__PURE__ */ new WeakSet(), Hc = function() {
	return this.kind === "angularIcuCase" ? "expression" : this.kind === "angularIcuExpression" ? "cases" : "children";
}, Uc = function() {
	return this.parent?.$children ?? [];
};
var Gc = Wc;
function Kc(e, t) {
	let n = e.map(t);
	return n.some((t, n) => t !== e[n]) ? n : e;
}
var qc = [
	{
		regex: /^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/su,
		parse: Yc
	},
	{
		regex: /^\[if(?<condition>[^\]]*)\]><!$/u,
		parse: Xc
	},
	{
		regex: /^<!\s*\[endif\]$/u,
		parse: Zc
	}
];
function Jc(e, t) {
	if (e.value) for (let { regex: n, parse: r } of qc) {
		let i = e.value.match(n);
		if (i) return r(e, i, t);
	}
	return null;
}
function Yc(e, t, n) {
	let { openingTagSuffix: r, condition: i, data: a } = t.groups, o = 4 + r.length, s = e.sourceSpan.start.moveBy(o), c = s.moveBy(a.length), [l, u] = (() => {
		try {
			return [!0, n(a, s).children];
		} catch {
			return [!1, [{
				kind: "text",
				value: a,
				sourceSpan: new W(s, c)
			}]];
		}
	})();
	return {
		kind: "ieConditionalComment",
		complete: l,
		children: u,
		condition: P(0, i.trim(), /\s+/gu, " "),
		sourceSpan: e.sourceSpan,
		startSourceSpan: new W(e.sourceSpan.start, s),
		endSourceSpan: new W(c, e.sourceSpan.end)
	};
}
function Xc(e, t) {
	let { condition: n } = t.groups;
	return {
		kind: "ieConditionalStartComment",
		condition: P(0, n.trim(), /\s+/gu, " "),
		sourceSpan: e.sourceSpan
	};
}
function Zc(e) {
	return {
		kind: "ieConditionalEndComment",
		sourceSpan: e.sourceSpan
	};
}
var Qc = class extends Os {
	visitExpansionCase(e, t) {
		t.parseOptions.name === "angular" && this.visitChildren(t, (t) => {
			t(e.expression);
		});
	}
	visit(e, { parseOptions: t }) {
		al(e), ol(e, t), cl(e, t), sl(e);
	}
};
function $c(e, t, n, r) {
	Ds(new Qc(), e.children, { parseOptions: n }), t && e.children.unshift(t);
	let i = new Gc(e);
	return i.walk((e) => {
		if (e.kind === "comment") {
			let t = Jc(e, r);
			t && e.parent.replaceChild(e, t);
		}
		el(e), tl(e), nl(e);
	}), i;
}
function el(e) {
	if (e.kind === "block") {
		if (e.name = P(0, e.name.toLowerCase(), /\s+/gu, " ").trim(), e.kind = "angularControlFlowBlock", !gr(e.parameters)) {
			delete e.parameters;
			return;
		}
		for (let t of e.parameters) t.kind = "angularControlFlowBlockParameter";
		e.parameters = {
			kind: "angularControlFlowBlockParameters",
			children: e.parameters,
			sourceSpan: new W(e.parameters[0].sourceSpan.start, an(0, e.parameters, -1).sourceSpan.end)
		};
	}
}
function tl(e) {
	e.kind === "letDeclaration" && (e.kind = "angularLetDeclaration", e.id = e.name, e.init = {
		kind: "angularLetDeclarationInitializer",
		sourceSpan: new W(e.valueSpan.start, e.valueSpan.end),
		value: e.value
	}, delete e.name, delete e.value);
}
function nl(e) {
	e.kind === "expansion" && (e.kind = "angularIcuExpression"), e.kind === "expansionCase" && (e.kind = "angularIcuCase");
}
function rl(e, t) {
	let n = e.toLowerCase();
	return t(n) ? n : e;
}
function il(e) {
	let t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null, n = e.nameSpan.toString(), r = t !== null && n.startsWith(`${t}:`);
	e.name = r ? n.slice(t.length + 1) : n, e.namespace = t, e.hasExplicitNamespace = r;
}
function al(e) {
	switch (e.kind) {
		case "element":
			il(e);
			for (let t of e.attrs) il(t), t.valueSpan ? (t.value = t.valueSpan.toString(), /["']/u.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : t.value = null;
			break;
		case "comment":
			e.value = e.sourceSpan.toString().slice(4, -3);
			break;
		case "text":
			e.value = e.sourceSpan.toString();
			break;
	}
}
function ol(e, t) {
	if (e.kind === "element") {
		let n = ts(t.isTagNameCaseSensitive ? e.name : e.name.toLowerCase());
		!e.namespace || e.namespace === n.implicitNamespacePrefix || Fr(e) ? e.tagDefinition = n : e.tagDefinition = ts("");
	}
}
function sl(e) {
	e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new W(e.sourceSpan.start, e.endSourceSpan.end));
}
function cl(e, t) {
	if (e.kind === "element" && (t.normalizeTagName && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || Fr(e)) && (e.name = rl(e.name, (e) => Rc.has(e))), t.normalizeAttributeName)) for (let t of e.attrs) t.namespace || (t.name = rl(t.name, (t) => Lc.has(e.name) && (Lc.get("*").has(t) || Lc.get(e.name).has(t))));
}
function ll(e, t) {
	let { rootNodes: n, errors: r } = uc(e, Ic(t));
	return r.length > 0 && fl(r[0]), {
		parseOptions: t,
		rootNodes: n
	};
}
function ul(e, t) {
	let n = Ic(t), { rootNodes: r, errors: i } = uc(e, n);
	if (r.some((e) => e.kind === "docType" && e.value === "html" || e.kind === "element" && e.name.toLowerCase() === "html")) return ll(e, hl);
	let a, o = () => a ??= uc(e, {
		...n,
		getTagContentType: void 0
	}), s = (e) => {
		let { offset: t } = e.startSourceSpan.start;
		return o().rootNodes.find((e) => e.kind === "element" && e.startSourceSpan.start.offset === t) ?? e;
	};
	for (let [e, t] of r.entries()) if (t.kind === "element") {
		if (t.isVoid) i = o().errors, r[e] = s(t);
		else if (dl(t)) {
			let { endSourceSpan: n, startSourceSpan: i } = t, a = o().errors.find((e) => e.span.start.offset > i.start.offset && e.span.start.offset < n.end.offset);
			a && fl(a), r[e] = s(t);
		}
	}
	return i.length > 0 && fl(i[0]), {
		parseOptions: t,
		rootNodes: r
	};
}
function dl(e) {
	if (e.kind !== "element" || e.name !== "template") return !1;
	let t = e.attrs.find((e) => e.name === "lang")?.value;
	return !t || t === "html";
}
function fl(e) {
	let { msg: t, span: { start: n, end: r } } = e;
	throw Nc(t, {
		loc: {
			start: {
				line: n.line + 1,
				column: n.col + 1
			},
			end: {
				line: r.line + 1,
				column: r.col + 1
			}
		},
		cause: e
	});
}
function pl(e, t, n, r, i, a) {
	let { offset: o } = r, s = ml(P(0, t.slice(0, o), /[^\n]/gu, " ") + n, e, {
		...i,
		shouldParseFrontMatter: !1
	}, a);
	s.sourceSpan = new W(r, an(0, s.children, -1).sourceSpan.end);
	let c = s.children[0];
	return c.length === o ? s.children.shift() : (c.sourceSpan = new W(c.sourceSpan.start.moveBy(o), c.sourceSpan.end), c.value = c.value.slice(o)), s;
}
function ml(e, t, n, r = {}) {
	let { frontMatter: i, content: a } = n.shouldParseFrontMatter ? kr(e) : { content: e }, o = new us(e, r.filepath), s = new ls(o, 0, 0, 0), c = s.moveBy(e.length), { parseOptions: l, rootNodes: u } = t(a, n), d = {
		kind: "root",
		sourceSpan: new W(s, c),
		children: u
	}, f;
	if (i) {
		let [e, t] = [i.start, i.end].map((e) => new ls(o, e.index, e.line - 1, e.column));
		f = {
			...i,
			kind: "frontMatter",
			sourceSpan: new W(e, t)
		};
	}
	return $c(d, f, l, (n, i) => pl(t, e, n, i, l, r));
}
var hl = Fc({
	name: "html",
	normalizeTagName: !0,
	normalizeAttributeName: !0,
	allowHtmComponentClosingTags: !0
});
function gl(e) {
	let t = Fc(e), n = t.name === "vue" ? ul : ll;
	return {
		parse: (e, r) => ml(e, n, t, r),
		hasPragma: fo,
		hasIgnorePragma: po,
		astFormat: "html",
		locStart: Ea,
		locEnd: Da
	};
}
var _l = gl(hl), vl = new Set(["mj-style", "mj-raw"]), yl = gl({
	...hl,
	name: "mjml",
	shouldParseAsRawText: (e) => vl.has(e)
}), bl = gl({
	name: "angular",
	tokenizeAngularBlocks: !0,
	tokenizeAngularLetDeclaration: !0
}), xl = gl({
	name: "vue",
	isTagNameCaseSensitive: !0,
	shouldParseAsRawText(e, t, n, r) {
		return e.toLowerCase() !== "html" && !n && (e !== "template" || r.some(({ name: e, value: t }) => e === "lang" && t !== "html" && t !== "" && t !== void 0));
	}
}), Sl = gl({
	name: "lwc",
	canSelfClose: !1
}), Cl = { html: Ec }, wl = Object.create, Tl = Object.defineProperty, El = Object.getOwnPropertyDescriptor, Dl = Object.getOwnPropertyNames, Ol = Object.getPrototypeOf, kl = Object.prototype.hasOwnProperty, Al = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), jl = (e, t) => {
	for (var n in t) Tl(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Ml = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of Dl(t)) !kl.call(e, i) && i !== n && Tl(e, i, {
		get: () => t[i],
		enumerable: !(r = El(t, i)) || r.enumerable
	});
	return e;
}, Nl = (e, t, n) => (n = e == null ? {} : wl(Ol(e)), Ml(t || !e || !e.__esModule ? Tl(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Pl = Al((e, t) => {
	var n, r, i, a, o, s, c, l, u, d, f, p, m = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/uy, h, g, _, v, y, b;
	p = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, n = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/uy, g = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y, f = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, _ = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y, b = /[\t\v\f\ufeff\p{Zs}]+/uy, l = /\r?\n|[\r\u2028\u2029]/y, u = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y, h = /\/\/.*/y, i = /[<>.:={}]|\/(?![\/*])/y, r = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/uy, a = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y, o = /[^<>{}]+/y, y = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, v = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, s = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, c = /^(?:return|throw|yield)$/, d = RegExp(l.source), t.exports = function* (e, { jsx: t = !1 } = {}) {
		var x, S, C, w, T, E, D, O, ee, k, te, A, ne, j;
		for ({length: E} = e, w = 0, T = "", j = [{ tag: "JS" }], x = [], te = 0, A = !1; w < E;) {
			switch (O = j[j.length - 1], O.tag) {
				case "JS":
				case "JSNonExpressionParen":
				case "InterpolationInTemplate":
				case "InterpolationInJSX":
					if (e[w] === "/" && (y.test(T) || s.test(T)) && (m.lastIndex = w, D = m.exec(e))) {
						w = m.lastIndex, T = D[0], A = !0, yield {
							type: "RegularExpressionLiteral",
							value: D[0],
							closed: D[1] !== void 0 && D[1] !== "\\"
						};
						continue;
					}
					if (p.lastIndex = w, D = p.exec(e)) {
						switch (ne = D[0], ee = p.lastIndex, k = ne, ne) {
							case "(":
								T === "?NonExpressionParenKeyword" && j.push({
									tag: "JSNonExpressionParen",
									nesting: te
								}), te++, A = !1;
								break;
							case ")":
								te--, A = !0, O.tag === "JSNonExpressionParen" && te === O.nesting && (j.pop(), k = "?NonExpressionParenEnd", A = !1);
								break;
							case "{":
								p.lastIndex = 0, C = !v.test(T) && (y.test(T) || s.test(T)), x.push(C), A = !1;
								break;
							case "}":
								switch (O.tag) {
									case "InterpolationInTemplate":
										if (x.length === O.nesting) {
											_.lastIndex = w, D = _.exec(e), w = _.lastIndex, T = D[0], D[1] === "${" ? (T = "?InterpolationInTemplate", A = !1, yield {
												type: "TemplateMiddle",
												value: D[0]
											}) : (j.pop(), A = !0, yield {
												type: "TemplateTail",
												value: D[0],
												closed: D[1] === "`"
											});
											continue;
										}
										break;
									case "InterpolationInJSX": if (x.length === O.nesting) {
										j.pop(), w += 1, T = "}", yield {
											type: "JSXPunctuator",
											value: "}"
										};
										continue;
									}
								}
								A = x.pop(), k = A ? "?ExpressionBraceEnd" : "}";
								break;
							case "]":
								A = !0;
								break;
							case "++":
							case "--":
								k = A ? "?PostfixIncDec" : "?UnaryIncDec";
								break;
							case "<":
								if (t && (y.test(T) || s.test(T))) {
									j.push({ tag: "JSXTag" }), w += 1, T = "<", yield {
										type: "JSXPunctuator",
										value: ne
									};
									continue;
								}
								A = !1;
								break;
							default: A = !1;
						}
						w = ee, T = k, yield {
							type: "Punctuator",
							value: ne
						};
						continue;
					}
					if (n.lastIndex = w, D = n.exec(e)) {
						switch (w = n.lastIndex, k = D[0], D[0]) {
							case "for":
							case "if":
							case "while":
							case "with": T !== "." && T !== "?." && (k = "?NonExpressionParenKeyword");
						}
						T = k, A = !s.test(D[0]), yield {
							type: D[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
							value: D[0]
						};
						continue;
					}
					if (g.lastIndex = w, D = g.exec(e)) {
						w = g.lastIndex, T = D[0], A = !0, yield {
							type: "StringLiteral",
							value: D[0],
							closed: D[2] !== void 0
						};
						continue;
					}
					if (f.lastIndex = w, D = f.exec(e)) {
						w = f.lastIndex, T = D[0], A = !0, yield {
							type: "NumericLiteral",
							value: D[0]
						};
						continue;
					}
					if (_.lastIndex = w, D = _.exec(e)) {
						w = _.lastIndex, T = D[0], D[1] === "${" ? (T = "?InterpolationInTemplate", j.push({
							tag: "InterpolationInTemplate",
							nesting: x.length
						}), A = !1, yield {
							type: "TemplateHead",
							value: D[0]
						}) : (A = !0, yield {
							type: "NoSubstitutionTemplate",
							value: D[0],
							closed: D[1] === "`"
						});
						continue;
					}
					break;
				case "JSXTag":
				case "JSXTagEnd":
					if (i.lastIndex = w, D = i.exec(e)) {
						switch (w = i.lastIndex, k = D[0], D[0]) {
							case "<":
								j.push({ tag: "JSXTag" });
								break;
							case ">":
								j.pop(), T === "/" || O.tag === "JSXTagEnd" ? (k = "?JSX", A = !0) : j.push({ tag: "JSXChildren" });
								break;
							case "{":
								j.push({
									tag: "InterpolationInJSX",
									nesting: x.length
								}), k = "?InterpolationInJSX", A = !1;
								break;
							case "/": T === "<" && (j.pop(), j[j.length - 1].tag === "JSXChildren" && j.pop(), j.push({ tag: "JSXTagEnd" }));
						}
						T = k, yield {
							type: "JSXPunctuator",
							value: D[0]
						};
						continue;
					}
					if (r.lastIndex = w, D = r.exec(e)) {
						w = r.lastIndex, T = D[0], yield {
							type: "JSXIdentifier",
							value: D[0]
						};
						continue;
					}
					if (a.lastIndex = w, D = a.exec(e)) {
						w = a.lastIndex, T = D[0], yield {
							type: "JSXString",
							value: D[0],
							closed: D[2] !== void 0
						};
						continue;
					}
					break;
				case "JSXChildren":
					if (o.lastIndex = w, D = o.exec(e)) {
						w = o.lastIndex, T = D[0], yield {
							type: "JSXText",
							value: D[0]
						};
						continue;
					}
					switch (e[w]) {
						case "<":
							j.push({ tag: "JSXTag" }), w++, T = "<", yield {
								type: "JSXPunctuator",
								value: "<"
							};
							continue;
						case "{":
							j.push({
								tag: "InterpolationInJSX",
								nesting: x.length
							}), w++, T = "?InterpolationInJSX", A = !1, yield {
								type: "JSXPunctuator",
								value: "{"
							};
							continue;
					}
			}
			if (b.lastIndex = w, D = b.exec(e)) {
				w = b.lastIndex, yield {
					type: "WhiteSpace",
					value: D[0]
				};
				continue;
			}
			if (l.lastIndex = w, D = l.exec(e)) {
				w = l.lastIndex, A = !1, c.test(T) && (T = "?NoLineTerminatorHere"), yield {
					type: "LineTerminatorSequence",
					value: D[0]
				};
				continue;
			}
			if (u.lastIndex = w, D = u.exec(e)) {
				w = u.lastIndex, d.test(D[0]) && (A = !1, c.test(T) && (T = "?NoLineTerminatorHere")), yield {
					type: "MultiLineComment",
					value: D[0],
					closed: D[1] !== void 0
				};
				continue;
			}
			if (h.lastIndex = w, D = h.exec(e)) {
				w = h.lastIndex, A = !1, yield {
					type: "SingleLineComment",
					value: D[0]
				};
				continue;
			}
			S = String.fromCodePoint(e.codePointAt(w)), w += S.length, T = S, A = !1, yield {
				type: O.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
				value: S
			};
		}
	};
}), Fl = {};
jl(Fl, {
	__debug: () => pg,
	check: () => dg,
	doc: () => wh,
	format: () => ug,
	formatWithCursor: () => lg,
	getSupportInfo: () => fg,
	util: () => kh,
	version: () => Oh
});
var Il = (e, t) => (n, r, ...i) => n | 1 && r == null ? void 0 : (t.call(r) ?? r[e]).apply(r, i), Ll = String.prototype.replaceAll ?? function(e, t) {
	return e.global ? this.replace(e, t) : this.split(e).join(t);
}, Rl = Il("replaceAll", function() {
	if (typeof this == "string") return Ll;
}), zl = class {
	diff(e, t, n = {}) {
		let r;
		typeof n == "function" ? (r = n, n = {}) : "callback" in n && (r = n.callback);
		let i = this.castInput(e, n), a = this.castInput(t, n), o = this.removeEmpty(this.tokenize(i, n)), s = this.removeEmpty(this.tokenize(a, n));
		return this.diffWithOptionsObj(o, s, n, r);
	}
	diffWithOptionsObj(e, t, n, r) {
		let i = (e) => {
			if (e = this.postProcess(e, n), r) {
				setTimeout(function() {
					r(e);
				}, 0);
				return;
			} else return e;
		}, a = t.length, o = e.length, s = 1, c = a + o;
		n.maxEditLength != null && (c = Math.min(c, n.maxEditLength));
		let l = n.timeout ?? Infinity, u = Date.now() + l, d = [{
			oldPos: -1,
			lastComponent: void 0
		}], f = this.extractCommon(d[0], t, e, 0, n);
		if (d[0].oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(d[0].lastComponent, t, e));
		let p = -Infinity, m = Infinity, h = () => {
			for (let r = Math.max(p, -s); r <= Math.min(m, s); r += 2) {
				let s, c = d[r - 1], l = d[r + 1];
				c && (d[r - 1] = void 0);
				let u = !1;
				if (l) {
					let e = l.oldPos - r;
					u = l && 0 <= e && e < a;
				}
				let h = c && c.oldPos + 1 < o;
				if (!u && !h) {
					d[r] = void 0;
					continue;
				}
				if (s = !h || u && c.oldPos < l.oldPos ? this.addToPath(l, !0, !1, 0, n) : this.addToPath(c, !1, !0, 1, n), f = this.extractCommon(s, t, e, r, n), s.oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(s.lastComponent, t, e)) || !0;
				d[r] = s, s.oldPos + 1 >= o && (m = Math.min(m, r - 1)), f + 1 >= a && (p = Math.max(p, r + 1));
			}
			s++;
		};
		if (r) (function e() {
			setTimeout(function() {
				if (s > c || Date.now() > u) return r(void 0);
				h() || e();
			}, 0);
		})();
		else for (; s <= c && Date.now() <= u;) {
			let e = h();
			if (e) return e;
		}
	}
	addToPath(e, t, n, r, i) {
		let a = e.lastComponent;
		return a && !i.oneChangePerToken && a.added === t && a.removed === n ? {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: a.count + 1,
				added: t,
				removed: n,
				previousComponent: a.previousComponent
			}
		} : {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: 1,
				added: t,
				removed: n,
				previousComponent: a
			}
		};
	}
	extractCommon(e, t, n, r, i) {
		let a = t.length, o = n.length, s = e.oldPos, c = s - r, l = 0;
		for (; c + 1 < a && s + 1 < o && this.equals(n[s + 1], t[c + 1], i);) c++, s++, l++, i.oneChangePerToken && (e.lastComponent = {
			count: 1,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		});
		return l && !i.oneChangePerToken && (e.lastComponent = {
			count: l,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		}), e.oldPos = s, c;
	}
	equals(e, t, n) {
		return n.comparator ? n.comparator(e, t) : e === t || !!n.ignoreCase && e.toLowerCase() === t.toLowerCase();
	}
	removeEmpty(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) e[n] && t.push(e[n]);
		return t;
	}
	castInput(e, t) {
		return e;
	}
	tokenize(e, t) {
		return Array.from(e);
	}
	join(e) {
		return e.join("");
	}
	postProcess(e, t) {
		return e;
	}
	get useLongestToken() {
		return !1;
	}
	buildValues(e, t, n) {
		let r = [], i;
		for (; e;) r.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
		r.reverse();
		let a = r.length, o = 0, s = 0, c = 0;
		for (; o < a; o++) {
			let e = r[o];
			if (e.removed) e.value = this.join(n.slice(c, c + e.count)), c += e.count;
			else {
				if (!e.added && this.useLongestToken) {
					let r = t.slice(s, s + e.count);
					r = r.map(function(e, t) {
						let r = n[c + t];
						return r.length > e.length ? r : e;
					}), e.value = this.join(r);
				} else e.value = this.join(t.slice(s, s + e.count));
				s += e.count, e.added || (c += e.count);
			}
		}
		return r;
	}
}, Bl = new class extends zl {
	tokenize(e) {
		return e.slice();
	}
	join(e) {
		return e;
	}
	removeEmpty(e) {
		return e;
	}
}();
function Vl(e, t, n) {
	return Bl.diff(e, t, n);
}
var Hl = () => {}, Ul = "cr", Wl = "crlf", Gl = "lf", Kl = "\r", ql = "\r\n", Jl = "\n", Yl = Jl;
function Xl(e) {
	let t = e.indexOf(Kl);
	return t === -1 ? Gl : e.charAt(t + 1) === Jl ? Wl : Ul;
}
function Zl(e) {
	return e === Ul ? Kl : e === Wl ? ql : Yl;
}
var Ql = new Map([
	[Jl, /\n/gu],
	[Kl, /\r/gu],
	[ql, /\r\n/gu]
]);
function $l(e, t) {
	let n = Ql.get(t);
	return e.match(n)?.length ?? 0;
}
var eu = /\r\n?/gu;
function tu(e) {
	return Rl(0, e, eu, Jl);
}
function nu(e) {
	return this[e < 0 ? this.length + e : e];
}
var J = Il("at", function() {
	if (Array.isArray(this) || typeof this == "string") return nu;
}), ru = "string", iu = "array", au = "cursor", ou = "indent", su = "align", cu = "trim", Y = "group", lu = "fill", X = "if-break", uu = "indent-if-break", du = "line-suffix", fu = "line-suffix-boundary", Z = "line", pu = "label", Q = "break-parent", mu = new Set([
	au,
	ou,
	su,
	cu,
	Y,
	lu,
	X,
	uu,
	du,
	fu,
	Z,
	pu,
	Q
]);
function hu(e) {
	let t = e.length;
	for (; t > 0 && (e[t - 1] === "\r" || e[t - 1] === "\n");) t--;
	return t < e.length ? e.slice(0, t) : e;
}
function gu(e) {
	if (typeof e == "string") return ru;
	if (Array.isArray(e)) return iu;
	if (!e) return;
	let { type: t } = e;
	if (mu.has(t)) return t;
}
var _u = gu, vu = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function yu(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (_u(e)) throw Error("doc is valid.");
	let n = Object.prototype.toString.call(e);
	if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
	let r = vu([...mu].map((e) => `'${e}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var bu = class extends Error {
	name = "InvalidDocError";
	constructor(e) {
		super(yu(e)), this.doc = e;
	}
}, xu = {};
function Su(e, t, n, r) {
	let i = [e];
	for (; i.length > 0;) {
		let e = i.pop();
		if (e === xu) {
			n(i.pop());
			continue;
		}
		n && i.push(e, xu);
		let a = _u(e);
		if (!a) throw new bu(e);
		if (t?.(e) !== !1) switch (a) {
			case iu:
			case lu: {
				let t = a === iu ? e : e.parts;
				for (let e = t.length - 1; e >= 0; --e) i.push(t[e]);
				break;
			}
			case X:
				i.push(e.flatContents, e.breakContents);
				break;
			case Y:
				if (r && e.expandedStates) for (let t = e.expandedStates.length, n = t - 1; n >= 0; --n) i.push(e.expandedStates[n]);
				else i.push(e.contents);
				break;
			case su:
			case ou:
			case uu:
			case pu:
			case du:
				i.push(e.contents);
				break;
			case ru:
			case au:
			case cu:
			case fu:
			case Z:
			case Q: break;
			default: throw new bu(e);
		}
	}
}
var Cu = Su;
function wu(e, t) {
	if (typeof e == "string") return t(e);
	let n = /* @__PURE__ */ new Map();
	return r(e);
	function r(e) {
		if (n.has(e)) return n.get(e);
		let t = i(e);
		return n.set(e, t), t;
	}
	function i(e) {
		switch (_u(e)) {
			case iu: return t(e.map(r));
			case lu: return t({
				...e,
				parts: e.parts.map(r)
			});
			case X: return t({
				...e,
				breakContents: r(e.breakContents),
				flatContents: r(e.flatContents)
			});
			case Y: {
				let { expandedStates: n, contents: i } = e;
				return n ? (n = n.map(r), i = n[0]) : i = r(i), t({
					...e,
					contents: i,
					expandedStates: n
				});
			}
			case su:
			case ou:
			case uu:
			case pu:
			case du: return t({
				...e,
				contents: r(e.contents)
			});
			case ru:
			case au:
			case cu:
			case fu:
			case Z:
			case Q: return t(e);
			default: throw new bu(e);
		}
	}
}
function Tu(e, t, n) {
	let r = n, i = !1;
	function a(e) {
		if (i) return !1;
		let n = t(e);
		n !== void 0 && (i = !0, r = n);
	}
	return Cu(e, a), r;
}
function Eu(e) {
	if (e.type === Y && e.break || e.type === Z && e.hard || e.type === Q) return !0;
}
function Du(e) {
	return Tu(e, Eu, !1);
}
function Ou(e) {
	if (e.length > 0) {
		let t = J(0, e, -1);
		!t.expandedStates && !t.break && (t.break = "propagated");
	}
	return null;
}
function ku(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	function r(e) {
		if (e.type === Q && Ou(n), e.type === Y) {
			if (n.push(e), t.has(e)) return !1;
			t.add(e);
		}
	}
	function i(e) {
		e.type === Y && n.pop().break && Ou(n);
	}
	Cu(e, r, i, !0);
}
function Au(e) {
	return e.type === Z && !e.hard ? e.soft ? "" : " " : e.type === X ? e.flatContents : e;
}
function ju(e) {
	return wu(e, Au);
}
function Mu(e) {
	for (e = [...e]; e.length >= 2 && J(0, e, -2).type === Z && J(0, e, -1).type === Q;) e.length -= 2;
	if (e.length > 0) {
		let t = Nu(J(0, e, -1));
		e[e.length - 1] = t;
	}
	return e;
}
function Nu(e) {
	switch (_u(e)) {
		case ou:
		case uu:
		case Y:
		case du:
		case pu: {
			let t = Nu(e.contents);
			return {
				...e,
				contents: t
			};
		}
		case X: return {
			...e,
			breakContents: Nu(e.breakContents),
			flatContents: Nu(e.flatContents)
		};
		case lu: return {
			...e,
			parts: Mu(e.parts)
		};
		case iu: return Mu(e);
		case ru: return hu(e);
		case su:
		case au:
		case cu:
		case fu:
		case Z:
		case Q: break;
		default: throw new bu(e);
	}
	return e;
}
function Pu(e) {
	return Nu(Iu(e));
}
function Fu(e) {
	switch (_u(e)) {
		case lu:
			if (e.parts.every((e) => e === "")) return "";
			break;
		case Y:
			if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
			if (e.contents.type === Y && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
			break;
		case su:
		case ou:
		case uu:
		case du:
			if (!e.contents) return "";
			break;
		case X:
			if (!e.flatContents && !e.breakContents) return "";
			break;
		case iu: {
			let t = [];
			for (let n of e) {
				if (!n) continue;
				let [e, ...r] = Array.isArray(n) ? n : [n];
				typeof e == "string" && typeof J(0, t, -1) == "string" ? t[t.length - 1] += e : t.push(e), t.push(...r);
			}
			return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
		}
		case ru:
		case au:
		case cu:
		case fu:
		case Z:
		case pu:
		case Q: break;
		default: throw new bu(e);
	}
	return e;
}
function Iu(e) {
	return wu(e, (e) => Fu(e));
}
function Lu(e, t = dd) {
	return wu(e, (e) => typeof e == "string" ? id(t, e.split("\n")) : e);
}
function Ru(e) {
	if (e.type === Z) return !0;
}
function zu(e) {
	return Tu(e, Ru, !1);
}
function Bu(e, t) {
	return e.type === pu ? {
		...e,
		contents: t(e.contents)
	} : t(e);
}
var Vu = Hl, Hu = Hl, Uu = Hl, Wu = Hl;
function Gu(e) {
	return Vu(e), {
		type: ou,
		contents: e
	};
}
function Ku(e, t) {
	return Wu(e), Vu(t), {
		type: su,
		contents: t,
		n: e
	};
}
function qu(e) {
	return Ku(-Infinity, e);
}
function Ju(e) {
	return Ku({ type: "root" }, e);
}
function Yu(e) {
	return Ku(-1, e);
}
function Xu(e, t, n) {
	Vu(e);
	let r = e;
	if (t > 0) {
		for (let e = 0; e < Math.floor(t / n); ++e) r = Gu(r);
		r = Ku(t % n, r), r = Ku(-Infinity, r);
	}
	return r;
}
var Zu = { type: Q }, Qu = { type: au };
function $u(e) {
	return Uu(e), {
		type: lu,
		parts: e
	};
}
function ed(e, t = {}) {
	return Vu(e), Hu(t.expandedStates, !0), {
		type: Y,
		id: t.id,
		contents: e,
		break: !!t.shouldBreak,
		expandedStates: t.expandedStates
	};
}
function td(e, t) {
	return ed(e[0], {
		...t,
		expandedStates: e
	});
}
function nd(e, t = "", n = {}) {
	return Vu(e), t !== "" && Vu(t), {
		type: X,
		breakContents: e,
		flatContents: t,
		groupId: n.groupId
	};
}
function rd(e, t) {
	return Vu(e), {
		type: uu,
		contents: e,
		groupId: t.groupId,
		negate: t.negate
	};
}
function id(e, t) {
	Vu(e), Hu(t);
	let n = [];
	for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
	return n;
}
function ad(e, t) {
	return Vu(t), e ? {
		type: pu,
		label: e,
		contents: t
	} : t;
}
var od = { type: Z }, sd = {
	type: Z,
	soft: !0
}, cd = {
	type: Z,
	hard: !0
}, ld = [cd, Zu], ud = {
	type: Z,
	hard: !0,
	literal: !0
}, dd = [ud, Zu];
function fd(e) {
	return Vu(e), {
		type: du,
		contents: e
	};
}
var pd = { type: fu }, md = { type: cu };
function hd(e) {
	if (!e) return "";
	if (Array.isArray(e)) {
		let t = [];
		for (let n of e) if (Array.isArray(n)) t.push(...hd(n));
		else {
			let e = hd(n);
			e !== "" && t.push(e);
		}
		return t;
	}
	return e.type === X ? {
		...e,
		breakContents: hd(e.breakContents),
		flatContents: hd(e.flatContents)
	} : e.type === Y ? {
		...e,
		contents: hd(e.contents),
		expandedStates: e.expandedStates?.map(hd)
	} : e.type === lu ? {
		type: "fill",
		parts: e.parts.map(hd)
	} : e.contents ? {
		...e,
		contents: hd(e.contents)
	} : e;
}
function gd(e) {
	let t = Object.create(null), n = /* @__PURE__ */ new Set();
	return r(hd(e));
	function r(e, t, n) {
		if (typeof e == "string") return JSON.stringify(e);
		if (Array.isArray(e)) {
			let t = e.map(r).filter(Boolean);
			return t.length === 1 ? t[0] : `[${t.join(", ")}]`;
		}
		if (e.type === Z) {
			let r = n?.[t + 1]?.type === Q;
			return e.literal ? r ? "literalline" : "literallineWithoutBreakParent" : e.hard ? r ? "hardline" : "hardlineWithoutBreakParent" : e.soft ? "softline" : "line";
		}
		if (e.type === Q) return n?.[t - 1]?.type === Z && n[t - 1].hard ? void 0 : "breakParent";
		if (e.type === cu) return "trim";
		if (e.type === ou) return "indent(" + r(e.contents) + ")";
		if (e.type === su) return e.n === -Infinity ? "dedentToRoot(" + r(e.contents) + ")" : e.n < 0 ? "dedent(" + r(e.contents) + ")" : e.n.type === "root" ? "markAsRoot(" + r(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + r(e.contents) + ")";
		if (e.type === X) return "ifBreak(" + r(e.breakContents) + (e.flatContents ? ", " + r(e.flatContents) : "") + (e.groupId ? (e.flatContents ? "" : ", \"\"") + `, { groupId: ${i(e.groupId)} }` : "") + ")";
		if (e.type === uu) {
			let t = [];
			e.negate && t.push("negate: true"), e.groupId && t.push(`groupId: ${i(e.groupId)}`);
			let n = t.length > 0 ? `, { ${t.join(", ")} }` : "";
			return `indentIfBreak(${r(e.contents)}${n})`;
		}
		if (e.type === Y) {
			let t = [];
			e.break && e.break !== "propagated" && t.push("shouldBreak: true"), e.id && t.push(`id: ${i(e.id)}`);
			let n = t.length > 0 ? `, { ${t.join(", ")} }` : "";
			return e.expandedStates ? `conditionalGroup([${e.expandedStates.map((e) => r(e)).join(",")}]${n})` : `group(${r(e.contents)}${n})`;
		}
		if (e.type === lu) return `fill([${e.parts.map((e) => r(e)).join(", ")}])`;
		if (e.type === du) return "lineSuffix(" + r(e.contents) + ")";
		if (e.type === fu) return "lineSuffixBoundary";
		if (e.type === pu) return `label(${JSON.stringify(e.label)}, ${r(e.contents)})`;
		if (e.type === au) return "cursor";
		throw Error("Unknown doc type " + e.type);
	}
	function i(e) {
		if (typeof e != "symbol") return JSON.stringify(String(e));
		if (e in t) return t[e];
		let r = e.description || "symbol";
		for (let i = 0;; i++) {
			let a = r + (i > 0 ? ` #${i}` : "");
			if (!n.has(a)) return n.add(a), t[e] = `Symbol.for(${JSON.stringify(a)})`;
		}
	}
}
var _d = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function vd(e) {
	return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function yd(e) {
	return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e >= 94192 && e <= 94198 || e >= 94208 && e <= 101589 || e >= 101631 && e <= 101662 || e >= 101760 && e <= 101874 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128728 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129674 || e >= 129678 && e <= 129734 || e === 129736 || e >= 129741 && e <= 129756 || e >= 129759 && e <= 129770 || e >= 129775 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var bd = "©®‼⁉™ℹ↔↕↖↗↘↙↩↪⌨⏏⏱⏲⏸⏹⏺▪▫▶◀◻◼☀☁☂☃☄☎☑☘☝☠☢☣☦☪☮☯☸☹☺♀♂♟♠♣♥♦♨♻♾⚒⚔⚕⚖⚗⚙⚛⚜⚠⚧⚰⚱⛈⛏⛑⛓⛩⛱⛷⛸⛹✂✈✉✌✍✏✒✔✖✝✡✳✴❄❇❣❤➡⤴⤵⬅⬆⬇", xd = /[^\x20-\x7F]/u, Sd = new Set(bd);
function Cd(e) {
	if (!e) return 0;
	if (!xd.test(e)) return e.length;
	e = e.replace(_d(), (e) => Sd.has(e) ? " " : "  ");
	let t = 0;
	for (let n of e) {
		let e = n.codePointAt(0);
		e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || e >= 65024 && e <= 65039 || (t += vd(e) || yd(e) ? 2 : 1);
	}
	return t;
}
var wd = Cd, Td = { type: 0 }, Ed = { type: 1 }, Dd = {
	value: "",
	length: 0,
	queue: [],
	get root() {
		return Dd;
	}
};
function Od(e, t, n) {
	let r = t.type === 1 ? e.queue.slice(0, -1) : [...e.queue, t], i = "", a = 0, o = 0, s = 0;
	for (let e of r) switch (e.type) {
		case 0:
			u(), n.useTabs ? c(1) : l(n.tabWidth);
			break;
		case 3: {
			let { string: t } = e;
			u(), i += t, a += t.length;
			break;
		}
		case 2: {
			let { width: t } = e;
			o += 1, s += t;
			break;
		}
		default: throw Error(`Unexpected indent comment '${e.type}'.`);
	}
	return f(), {
		...e,
		value: i,
		length: a,
		queue: r
	};
	function c(e) {
		i += "	".repeat(e), a += n.tabWidth * e;
	}
	function l(e) {
		i += " ".repeat(e), a += e;
	}
	function u() {
		n.useTabs ? d() : f();
	}
	function d() {
		o > 0 && c(o), p();
	}
	function f() {
		s > 0 && l(s), p();
	}
	function p() {
		o = 0, s = 0;
	}
}
function kd(e, t, n) {
	if (!t) return e;
	if (t.type === "root") return {
		...e,
		root: e
	};
	if (t === -Infinity) return e.root;
	let r;
	return r = typeof t == "number" ? t < 0 ? Ed : {
		type: 2,
		width: t
	} : {
		type: 3,
		string: t
	}, Od(e, r, n);
}
function Ad(e, t) {
	return Od(e, Td, t);
}
function jd(e) {
	let t = 0;
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (r === " " || r === "	") t++;
		else break;
	}
	return t;
}
function Md(e) {
	let t = jd(e);
	return {
		text: t === 0 ? e : e.slice(0, e.length - t),
		count: t
	};
}
var $ = Symbol("MODE_BREAK"), Nd = Symbol("MODE_FLAT"), Pd = Symbol("DOC_FILL_PRINTED_LENGTH");
function Fd(e, t, n, r, i, a) {
	if (n === Infinity) return !0;
	let o = t.length, s = !1, c = [e], l = "";
	for (; n >= 0;) {
		if (c.length === 0) {
			if (o === 0) return !0;
			c.push(t[--o]);
			continue;
		}
		let { mode: e, doc: u } = c.pop(), d = _u(u);
		switch (d) {
			case ru:
				u && (s &&= (l += " ", --n, !1), l += u, n -= wd(u));
				break;
			case iu:
			case lu: {
				let t = d === iu ? u : u.parts, n = u[Pd] ?? 0;
				for (let r = t.length - 1; r >= n; r--) c.push({
					mode: e,
					doc: t[r]
				});
				break;
			}
			case ou:
			case su:
			case uu:
			case pu:
				c.push({
					mode: e,
					doc: u.contents
				});
				break;
			case cu: {
				let { text: e, count: t } = Md(l);
				l = e, n += t;
				break;
			}
			case Y: {
				if (a && u.break) return !1;
				let t = u.break ? $ : e, n = u.expandedStates && t === $ ? J(0, u.expandedStates, -1) : u.contents;
				c.push({
					mode: t,
					doc: n
				});
				break;
			}
			case X: {
				let t = (u.groupId ? i[u.groupId] || Nd : e) === $ ? u.breakContents : u.flatContents;
				t && c.push({
					mode: e,
					doc: t
				});
				break;
			}
			case Z:
				if (e === $ || u.hard) return !0;
				u.soft || (s = !0);
				break;
			case du:
				r = !0;
				break;
			case fu:
				if (r) return !1;
				break;
		}
	}
	return !1;
}
function Id(e, t) {
	let n = Object.create(null), r = t.printWidth, i = Zl(t.endOfLine), a = 0, o = [{
		indent: Dd,
		mode: $,
		doc: e
	}], s = "", c = !1, l = [], u = [], d = [], f = [], p = 0;
	for (ku(e); o.length > 0;) {
		let { indent: e, mode: d, doc: f } = o.pop();
		switch (_u(f)) {
			case ru: {
				let e = i === "\n" ? f : Rl(0, f, "\n", i);
				e && (s += e, o.length > 0 && (a += wd(e)));
				break;
			}
			case iu:
				for (let t = f.length - 1; t >= 0; t--) o.push({
					indent: e,
					mode: d,
					doc: f[t]
				});
				break;
			case au:
				if (u.length >= 2) throw Error("There are too many 'cursor' in doc.");
				u.push(p + s.length);
				break;
			case ou:
				o.push({
					indent: Ad(e, t),
					mode: d,
					doc: f.contents
				});
				break;
			case su:
				o.push({
					indent: kd(e, f.n, t),
					mode: d,
					doc: f.contents
				});
				break;
			case cu:
				_();
				break;
			case Y:
				switch (d) {
					case Nd: if (!c) {
						o.push({
							indent: e,
							mode: f.break ? $ : Nd,
							doc: f.contents
						});
						break;
					}
					case $: {
						c = !1;
						let t = {
							indent: e,
							mode: Nd,
							doc: f.contents
						}, i = r - a, s = l.length > 0;
						if (!f.break && Fd(t, o, i, s, n)) o.push(t);
						else if (f.expandedStates) {
							let t = J(0, f.expandedStates, -1);
							if (f.break) {
								o.push({
									indent: e,
									mode: $,
									doc: t
								});
								break;
							} else for (let r = 1; r < f.expandedStates.length + 1; r++) if (r >= f.expandedStates.length) {
								o.push({
									indent: e,
									mode: $,
									doc: t
								});
								break;
							} else {
								let t = {
									indent: e,
									mode: Nd,
									doc: f.expandedStates[r]
								};
								if (Fd(t, o, i, s, n)) {
									o.push(t);
									break;
								}
							}
						} else o.push({
							indent: e,
							mode: $,
							doc: f.contents
						});
						break;
					}
				}
				f.id && (n[f.id] = J(0, o, -1).mode);
				break;
			case lu: {
				let t = r - a, i = f[Pd] ?? 0, { parts: s } = f, c = s.length - i;
				if (c === 0) break;
				let u = s[i + 0], p = s[i + 1], m = {
					indent: e,
					mode: Nd,
					doc: u
				}, h = {
					indent: e,
					mode: $,
					doc: u
				}, g = Fd(m, [], t, l.length > 0, n, !0);
				if (c === 1) {
					g ? o.push(m) : o.push(h);
					break;
				}
				let _ = {
					indent: e,
					mode: Nd,
					doc: p
				}, v = {
					indent: e,
					mode: $,
					doc: p
				};
				if (c === 2) {
					g ? o.push(_, m) : o.push(v, h);
					break;
				}
				let y = s[i + 2], b = {
					indent: e,
					mode: d,
					doc: {
						...f,
						[Pd]: i + 2
					}
				}, x = Fd({
					indent: e,
					mode: Nd,
					doc: [
						u,
						p,
						y
					]
				}, [], t, l.length > 0, n, !0);
				o.push(b), x ? o.push(_, m) : g ? o.push(v, m) : o.push(v, h);
				break;
			}
			case X:
			case uu: {
				let t = f.groupId ? n[f.groupId] : d;
				if (t === $) {
					let t = f.type === X ? f.breakContents : f.negate ? f.contents : Gu(f.contents);
					t && o.push({
						indent: e,
						mode: d,
						doc: t
					});
				}
				if (t === Nd) {
					let t = f.type === X ? f.flatContents : f.negate ? Gu(f.contents) : f.contents;
					t && o.push({
						indent: e,
						mode: d,
						doc: t
					});
				}
				break;
			}
			case du:
				l.push({
					indent: e,
					mode: d,
					doc: f.contents
				});
				break;
			case fu:
				l.length > 0 && o.push({
					indent: e,
					mode: d,
					doc: cd
				});
				break;
			case Z:
				switch (d) {
					case Nd: if (f.hard) c = !0;
					else {
						f.soft || (s += " ", a += 1);
						break;
					}
					case $:
						if (l.length > 0) {
							o.push({
								indent: e,
								mode: d,
								doc: f
							}, ...l.reverse()), l.length = 0;
							break;
						}
						f.literal ? (s += i, a = 0, e.root && (e.root.value && (s += e.root.value), a = e.root.length)) : (_(), s += i + e.value, a = e.length);
						break;
				}
				break;
			case pu:
				o.push({
					indent: e,
					mode: d,
					doc: f.contents
				});
				break;
			case Q: break;
			default: throw new bu(f);
		}
		o.length === 0 && l.length > 0 && (o.push(...l.reverse()), l.length = 0);
	}
	let m = d.join("") + s, h = [...f, ...u];
	if (h.length !== 2) return { formatted: m };
	let g = h[0];
	return {
		formatted: m,
		cursorNodeStart: g,
		cursorNodeText: m.slice(g, J(0, h, -1))
	};
	function _() {
		let { text: e, count: t } = Md(s);
		e && (d.push(e), p += e.length), s = "", a -= t, u.length > 0 && (f.push(...u.map((e) => Math.min(e, p))), u.length = 0);
	}
}
function Ld(e, t, n = 0) {
	let r = 0;
	for (let i = n; i < e.length; ++i) e[i] === "	" ? r = r + t - r % t : r++;
	return r;
}
var Rd = Ld, zd = class {
	constructor(e) {
		this.stack = [e];
	}
	get key() {
		let { stack: e, siblings: t } = this;
		return J(0, e, t === null ? -2 : -4) ?? null;
	}
	get index() {
		return this.siblings === null ? null : J(0, this.stack, -2);
	}
	get node() {
		return J(0, this.stack, -1);
	}
	get parent() {
		return this.getNode(1);
	}
	get grandparent() {
		return this.getNode(2);
	}
	get isInArray() {
		return this.siblings !== null;
	}
	get siblings() {
		let { stack: e } = this, t = J(0, e, -3);
		return Array.isArray(t) ? t : null;
	}
	get next() {
		let { siblings: e } = this;
		return e === null ? null : e[this.index + 1];
	}
	get previous() {
		let { siblings: e } = this;
		return e === null ? null : e[this.index - 1];
	}
	get isFirst() {
		return this.index === 0;
	}
	get isLast() {
		let { siblings: e, index: t } = this;
		return e !== null && t === e.length - 1;
	}
	get isRoot() {
		return this.stack.length === 1;
	}
	get root() {
		return this.stack[0];
	}
	get ancestors() {
		return [...this.#t()];
	}
	getName() {
		let { stack: e } = this, { length: t } = e;
		return t > 1 ? J(0, e, -2) : null;
	}
	getValue() {
		return J(0, this.stack, -1);
	}
	getNode(e = 0) {
		let t = this.#e(e);
		return t === -1 ? null : this.stack[t];
	}
	getParentNode(e = 0) {
		return this.getNode(e + 1);
	}
	#e(e) {
		let { stack: t } = this;
		for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
		return -1;
	}
	call(e, ...t) {
		let { stack: n } = this, { length: r } = n, i = J(0, n, -1);
		for (let e of t) i = i?.[e], n.push(e, i);
		try {
			return e(this);
		} finally {
			n.length = r;
		}
	}
	callParent(e, t = 0) {
		let n = this.#e(t + 1), r = this.stack.splice(n + 1);
		try {
			return e(this);
		} finally {
			this.stack.push(...r);
		}
	}
	each(e, ...t) {
		let { stack: n } = this, { length: r } = n, i = J(0, n, -1);
		for (let e of t) i = i[e], n.push(e, i);
		try {
			for (let t = 0; t < i.length; ++t) n.push(t, i[t]), e(this, t, i), n.length -= 2;
		} finally {
			n.length = r;
		}
	}
	map(e, ...t) {
		let n = [];
		return this.each((t, r, i) => {
			n[r] = e(t, r, i);
		}, ...t), n;
	}
	match(...e) {
		let t = this.stack.length - 1, n = null, r = this.stack[t--];
		for (let i of e) {
			if (r === void 0) return !1;
			let e = null;
			if (typeof n == "number" && (e = n, n = this.stack[t--], r = this.stack[t--]), i && !i(r, n, e)) return !1;
			n = this.stack[t--], r = this.stack[t--];
		}
		return !0;
	}
	findAncestor(e) {
		for (let t of this.#t()) if (e(t)) return t;
	}
	hasAncestor(e) {
		for (let t of this.#t()) if (e(t)) return !0;
		return !1;
	}
	*#t() {
		let { stack: e } = this;
		for (let t = e.length - 3; t >= 0; t -= 2) {
			let n = e[t];
			Array.isArray(n) || (yield n);
		}
	}
};
function Bd(e) {
	return typeof e == "object" && !!e;
}
var Vd = Bd;
function Hd(e) {
	return (t, n, r) => {
		let i = !!r?.backwards;
		if (n === !1) return !1;
		let { length: a } = t, o = n;
		for (; o >= 0 && o < a;) {
			let n = t.charAt(o);
			if (e instanceof RegExp) {
				if (!e.test(n)) return o;
			} else if (!e.includes(n)) return o;
			i ? o-- : o++;
		}
		return o === -1 || o === a ? o : !1;
	};
}
var Ud = Hd(/\s/u), Wd = Hd(" 	"), Gd = Hd(",; 	"), Kd = Hd(/[^\n\r]/u), qd = (e) => e === "\n" || e === "\r" || e === "\u2028" || e === "\u2029";
function Jd(e, t, n) {
	let r = !!n?.backwards;
	if (t === !1) return !1;
	let i = e.charAt(t);
	if (r) {
		if (e.charAt(t - 1) === "\r" && i === "\n") return t - 2;
		if (qd(i)) return t - 1;
	} else {
		if (i === "\r" && e.charAt(t + 1) === "\n") return t + 2;
		if (qd(i)) return t + 1;
	}
	return t;
}
var Yd = Jd;
function Xd(e, t, n = {}) {
	let r = Wd(e, n.backwards ? t - 1 : t, n);
	return r !== Yd(e, r, n);
}
var Zd = Xd;
function Qd(e) {
	return Array.isArray(e) && e.length > 0;
}
var $d = Qd;
function* ef(e, t) {
	let { getVisitorKeys: n, filter: r = () => !0 } = t, i = (e) => Vd(e) && r(e);
	for (let t of n(e)) {
		let n = e[t];
		if (Array.isArray(n)) for (let e of n) i(e) && (yield e);
		else i(n) && (yield n);
	}
}
function* tf(e, t) {
	let n = [e];
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		for (let e of ef(r, t)) yield e, n.push(e);
	}
}
function nf(e, t) {
	return ef(e, t).next().done;
}
function rf(e, t, n) {
	let { cache: r } = n;
	if (r.has(e)) return r.get(e);
	let { filter: i } = n;
	if (!i) return [];
	let a, o = (n.getChildren?.(e, n) ?? [...ef(e, { getVisitorKeys: n.getVisitorKeys })]).flatMap((r) => (a ??= [e, ...t], i(r, a) ? [r] : rf(r, a, n))), { locStart: s, locEnd: c } = n;
	return o.sort((e, t) => s(e) - s(t) || c(e) - c(t)), r.set(e, o), o;
}
var af = rf;
function of(e) {
	let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
	return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
}
function sf(e, t) {
	(e.comments ??= []).push(t), t.printed = !1, t.nodeDescription = of(e);
}
function cf(e, t) {
	t.leading = !0, t.trailing = !1, sf(e, t);
}
function lf(e, t, n) {
	t.leading = !1, t.trailing = !1, n && (t.marker = n), sf(e, t);
}
function uf(e, t) {
	t.leading = !1, t.trailing = !0, sf(e, t);
}
var df = /* @__PURE__ */ new WeakMap();
function ff(e, t, n, r, i = []) {
	let { locStart: a, locEnd: o } = n, s = a(t), c = o(t), l = af(e, i, {
		cache: df,
		locStart: a,
		locEnd: o,
		getVisitorKeys: n.getVisitorKeys,
		filter: n.printer.canAttachComment,
		getChildren: n.printer.getCommentChildNodes
	}), u, d, f = 0, p = l.length;
	for (; f < p;) {
		let e = f + p >> 1, r = l[e], m = a(r), h = o(r);
		if (m <= s && c <= h) return ff(r, t, n, r, [r, ...i]);
		if (h <= s) {
			u = r, f = e + 1;
			continue;
		}
		if (c <= m) {
			d = r, p = e;
			continue;
		}
		throw Error("Comment location overlaps with node location");
	}
	if (r?.type === "TemplateLiteral") {
		let { quasis: e } = r, i = yf(e, t, n);
		u && yf(e, u, n) !== i && (u = null), d && yf(e, d, n) !== i && (d = null);
	}
	return {
		enclosingNode: r,
		precedingNode: u,
		followingNode: d
	};
}
var pf = () => !1;
function mf(e, t) {
	let { comments: n } = e;
	if (delete e.comments, !$d(n) || !t.printer.canAttachComment) return;
	let r = [], { printer: { features: { experimental_avoidAstMutation: i }, handleComments: a = {} }, originalText: o } = t, { ownLine: s = pf, endOfLine: c = pf, remaining: l = pf } = a, u = n.map((r, i) => ({
		...ff(e, r, t),
		comment: r,
		text: o,
		options: t,
		ast: e,
		isLastComment: n.length - 1 === i
	}));
	for (let [e, t] of u.entries()) {
		let { comment: n, precedingNode: a, enclosingNode: o, followingNode: d, text: f, options: p, ast: m, isLastComment: h } = t, g;
		if (i ? g = [t] : (n.enclosingNode = o, n.precedingNode = a, n.followingNode = d, g = [
			n,
			f,
			p,
			m,
			h
		]), gf(f, p, u, e)) n.placement = "ownLine", s(...g) || (d ? cf(d, n) : a ? uf(a, n) : lf(o || m, n));
		else if (_f(f, p, u, e)) n.placement = "endOfLine", c(...g) || (a ? uf(a, n) : d ? cf(d, n) : lf(o || m, n));
		else if (n.placement = "remaining", !l(...g)) if (a && d) {
			let e = r.length;
			e > 0 && r[e - 1].followingNode !== d && vf(r, p), r.push(t);
		} else a ? uf(a, n) : d ? cf(d, n) : lf(o || m, n);
	}
	if (vf(r, t), !i) for (let e of n) delete e.precedingNode, delete e.enclosingNode, delete e.followingNode;
}
var hf = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function gf(e, t, n, r) {
	let { comment: i, precedingNode: a } = n[r], { locStart: o, locEnd: s } = t, c = o(i);
	if (a) for (let t = r - 1; t >= 0; t--) {
		let { comment: r, precedingNode: i } = n[t];
		if (i !== a || !hf(e.slice(s(r), c))) break;
		c = o(r);
	}
	return Zd(e, c, { backwards: !0 });
}
function _f(e, t, n, r) {
	let { comment: i, followingNode: a } = n[r], { locStart: o, locEnd: s } = t, c = s(i);
	if (a) for (let t = r + 1; t < n.length; t++) {
		let { comment: r, followingNode: i } = n[t];
		if (i !== a || !hf(e.slice(c, o(r)))) break;
		c = s(r);
	}
	return Zd(e, c);
}
function vf(e, t) {
	let n = e.length;
	if (n === 0) return;
	let { precedingNode: r, followingNode: i } = e[0], a = t.locStart(i), o;
	for (o = n; o > 0; --o) {
		let { comment: n, precedingNode: r, followingNode: i } = e[o - 1], s = t.originalText.slice(t.locEnd(n), a);
		if (t.printer.isGap?.(s, t) ?? /^[\s(]*$/u.test(s)) a = t.locStart(n);
		else break;
	}
	for (let [t, { comment: n }] of e.entries()) t < o ? uf(r, n) : cf(i, n);
	for (let e of [r, i]) e.comments && e.comments.length > 1 && e.comments.sort((e, n) => t.locStart(e) - t.locStart(n));
	e.length = 0;
}
function yf(e, t, n) {
	let r = n.locStart(t) - 1;
	for (let t = 1; t < e.length; ++t) if (r < n.locStart(e[t])) return t - 1;
	return 0;
}
function bf(e, t) {
	let n = t - 1;
	n = Wd(e, n, { backwards: !0 }), n = Yd(e, n, { backwards: !0 }), n = Wd(e, n, { backwards: !0 });
	let r = Yd(e, n, { backwards: !0 });
	return n !== r;
}
var xf = bf;
function Sf(e, t) {
	let n = e.node;
	return n.printed = !0, t.printer.printComment(e, t);
}
function Cf(e, t) {
	let n = e.node, r = [Sf(e, t)], { printer: i, originalText: a, locStart: o, locEnd: s } = t;
	if (i.isBlockComment?.(n)) {
		let e = Zd(a, s(n)) ? Zd(a, o(n), { backwards: !0 }) ? ld : od : " ";
		r.push(e);
	} else r.push(ld);
	let c = Yd(a, Wd(a, s(n)));
	return c !== !1 && Zd(a, c) && r.push(ld), r;
}
function wf(e, t, n) {
	let r = e.node, i = Sf(e, t), { printer: a, originalText: o, locStart: s } = t, c = a.isBlockComment?.(r);
	return n?.hasLineSuffix && !n?.isBlock || Zd(o, s(r), { backwards: !0 }) ? {
		doc: fd([
			ld,
			xf(o, s(r)) ? ld : "",
			i
		]),
		isBlock: c,
		hasLineSuffix: !0
	} : !c || n?.hasLineSuffix ? {
		doc: [fd([" ", i]), Zu],
		isBlock: c,
		hasLineSuffix: !0
	} : {
		doc: [" ", i],
		isBlock: c,
		hasLineSuffix: !1
	};
}
function Tf(e, t) {
	let n = e.node;
	if (!n) return {};
	let r = t[Symbol.for("printedComments")];
	if ((n.comments || []).filter((e) => !r.has(e)).length === 0) return {
		leading: "",
		trailing: ""
	};
	let i = [], a = [], o;
	return e.each(() => {
		let n = e.node;
		if (r?.has(n)) return;
		let { leading: s, trailing: c } = n;
		s ? i.push(Cf(e, t)) : c && (o = wf(e, t, o), a.push(o.doc));
	}, "comments"), {
		leading: i,
		trailing: a
	};
}
function Ef(e, t, n) {
	let { leading: r, trailing: i } = Tf(e, n);
	return !r && !i ? t : Bu(t, (e) => [
		r,
		e,
		i
	]);
}
function Df(e) {
	let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
	for (let e of t) {
		if (!e.printed && !n.has(e)) throw Error("Comment \"" + e.value.trim() + "\" was not printed. Please report this error!");
		delete e.printed;
	}
}
var Of = () => Hl, kf = class extends Error {
	name = "ConfigError";
}, Af = class extends Error {
	name = "UndefinedParserError";
}, jf = {
	checkIgnorePragma: {
		category: "Special",
		type: "boolean",
		default: !1,
		description: "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.",
		cliCategory: "Other"
	},
	cursorOffset: {
		category: "Special",
		type: "int",
		default: -1,
		range: {
			start: -1,
			end: Infinity,
			step: 1
		},
		description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
		cliCategory: "Editor"
	},
	endOfLine: {
		category: "Global",
		type: "choice",
		default: "lf",
		description: "Which end of line characters to apply.",
		choices: [
			{
				value: "lf",
				description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
			},
			{
				value: "crlf",
				description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
			},
			{
				value: "cr",
				description: "Carriage Return character only (\\r), used very rarely"
			},
			{
				value: "auto",
				description: "Maintain existing\n(mixed values within one file are normalised by looking at what's used after the first line)"
			}
		]
	},
	filepath: {
		category: "Special",
		type: "path",
		description: "Specify the input filepath. This will be used to do parser inference.",
		cliName: "stdin-filepath",
		cliCategory: "Other",
		cliDescription: "Path to the file to pretend that stdin comes from."
	},
	insertPragma: {
		category: "Special",
		type: "boolean",
		default: !1,
		description: "Insert @format pragma into file's first docblock comment.",
		cliCategory: "Other"
	},
	parser: {
		category: "Global",
		type: "choice",
		default: void 0,
		description: "Which parser to use.",
		exception: (e) => typeof e == "string" || typeof e == "function",
		choices: [
			{
				value: "flow",
				description: "Flow"
			},
			{
				value: "babel",
				description: "JavaScript"
			},
			{
				value: "babel-flow",
				description: "Flow"
			},
			{
				value: "babel-ts",
				description: "TypeScript"
			},
			{
				value: "typescript",
				description: "TypeScript"
			},
			{
				value: "acorn",
				description: "JavaScript"
			},
			{
				value: "espree",
				description: "JavaScript"
			},
			{
				value: "meriyah",
				description: "JavaScript"
			},
			{
				value: "css",
				description: "CSS"
			},
			{
				value: "less",
				description: "Less"
			},
			{
				value: "scss",
				description: "SCSS"
			},
			{
				value: "json",
				description: "JSON"
			},
			{
				value: "json5",
				description: "JSON5"
			},
			{
				value: "jsonc",
				description: "JSON with Comments"
			},
			{
				value: "json-stringify",
				description: "JSON.stringify"
			},
			{
				value: "graphql",
				description: "GraphQL"
			},
			{
				value: "markdown",
				description: "Markdown"
			},
			{
				value: "mdx",
				description: "MDX"
			},
			{
				value: "vue",
				description: "Vue"
			},
			{
				value: "yaml",
				description: "YAML"
			},
			{
				value: "glimmer",
				description: "Ember / Handlebars"
			},
			{
				value: "html",
				description: "HTML"
			},
			{
				value: "angular",
				description: "Angular"
			},
			{
				value: "lwc",
				description: "Lightning Web Components"
			},
			{
				value: "mjml",
				description: "MJML"
			}
		]
	},
	plugins: {
		type: "path",
		array: !0,
		default: [{ value: [] }],
		category: "Global",
		description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
		exception: (e) => typeof e == "string" || typeof e == "object",
		cliName: "plugin",
		cliCategory: "Config"
	},
	printWidth: {
		category: "Global",
		type: "int",
		default: 80,
		description: "The line length where Prettier will try wrap.",
		range: {
			start: 0,
			end: Infinity,
			step: 1
		}
	},
	rangeEnd: {
		category: "Special",
		type: "int",
		default: Infinity,
		range: {
			start: 0,
			end: Infinity,
			step: 1
		},
		description: "Format code ending at a given character offset (exclusive).\nThe range will extend forwards to the end of the selected statement.",
		cliCategory: "Editor"
	},
	rangeStart: {
		category: "Special",
		type: "int",
		default: 0,
		range: {
			start: 0,
			end: Infinity,
			step: 1
		},
		description: "Format code starting at a given character offset.\nThe range will extend backwards to the start of the first line containing the selected statement.",
		cliCategory: "Editor"
	},
	requirePragma: {
		category: "Special",
		type: "boolean",
		default: !1,
		description: "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.",
		cliCategory: "Other"
	},
	tabWidth: {
		type: "int",
		category: "Global",
		default: 2,
		description: "Number of spaces per indentation level.",
		range: {
			start: 0,
			end: Infinity,
			step: 1
		}
	},
	useTabs: {
		category: "Global",
		type: "boolean",
		default: !1,
		description: "Indent with tabs instead of spaces."
	},
	embeddedLanguageFormatting: {
		category: "Global",
		type: "choice",
		default: "auto",
		description: "Control how Prettier formats quoted code embedded in the file.",
		choices: [{
			value: "auto",
			description: "Format embedded code if Prettier can automatically identify it."
		}, {
			value: "off",
			description: "Never automatically format embedded code."
		}]
	}
};
function Mf({ plugins: e = [], showDeprecated: t = !1 } = {}) {
	let n = e.flatMap((e) => e.languages ?? []), r = [];
	for (let i of Pf(Object.assign({}, ...e.map(({ options: e }) => e), jf))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter((e) => !e.deprecated)), i.name === "parser" && (i.choices = [...i.choices, ...Nf(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(e.filter((e) => e.defaultOptions?.[i.name] !== void 0).map((e) => [e.name, e.defaultOptions[i.name]])), r.push(i));
	return {
		languages: n,
		options: r
	};
}
function* Nf(e, t, n) {
	let r = new Set(e.map((e) => e.value));
	for (let e of t) if (e.parsers) {
		for (let t of e.parsers) if (!r.has(t)) {
			r.add(t);
			let i = n.find((e) => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t)), a = e.name;
			i?.name && (a += ` (plugin: ${i.name})`), yield {
				value: t,
				description: a
			};
		}
	}
}
function Pf(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) {
		let e = {
			name: n,
			...r
		};
		Array.isArray(e.default) && (e.default = J(0, e.default, -1).value), t.push(e);
	}
	return t;
}
var Ff = Array.prototype.toReversed ?? function() {
	return [...this].reverse();
}, If = Il("toReversed", function() {
	if (Array.isArray(this)) return Ff;
});
function Lf() {
	let e = globalThis, t = e.Deno?.build?.os;
	return typeof t == "string" ? t === "windows" : e.navigator?.platform?.startsWith("Win") ?? e.process?.platform?.startsWith("win") ?? !1;
}
var Rf = Lf();
function zf(e) {
	if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw TypeError(`URL must be a file URL: received "${e.protocol}"`);
	return e;
}
function Bf(e) {
	return e = zf(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function Vf(e) {
	e = zf(e);
	let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
	return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function Hf(e) {
	return Rf ? Vf(e) : Bf(e);
}
var Uf = (e) => String(e).split(/[/\\]/u).pop(), Wf = (e) => String(e).startsWith("file:");
function Gf(e, t) {
	if (!t) return;
	let n = Uf(t).toLowerCase();
	return e.find(({ filenames: e }) => e?.some((e) => e.toLowerCase() === n)) ?? e.find(({ extensions: e }) => e?.some((e) => n.endsWith(e)));
}
function Kf(e, t) {
	if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => e?.includes(t)) ?? e.find(({ extensions: e }) => e?.includes(`.${t}`));
}
var qf = void 0;
function Jf(e, t) {
	if (t) {
		if (Wf(t)) try {
			t = Hf(t);
		} catch {
			return;
		}
		if (typeof t == "string") return e.find(({ isSupported: e }) => e?.({ filepath: t }));
	}
}
function Yf(e, t) {
	let n = If(0, e.plugins).flatMap((e) => e.languages ?? []);
	return (Kf(n, t.language) ?? Gf(n, t.physicalFile) ?? Gf(n, t.file) ?? Jf(n, t.physicalFile) ?? Jf(n, t.file) ?? qf?.(n, t.physicalFile))?.parsers[0];
}
var Xf = Yf, Zf = {
	key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
	value(e) {
		if (typeof e != "object" || !e) return JSON.stringify(e);
		if (Array.isArray(e)) return `[${e.map((e) => Zf.value(e)).join(", ")}]`;
		let t = Object.keys(e);
		return t.length === 0 ? "{}" : `{ ${t.map((t) => `${Zf.key(t)}: ${Zf.value(e[t])}`).join(", ")} }`;
	},
	pair: ({ key: e, value: t }) => Zf.value({ [e]: t })
}, Qf = new Proxy(String, { get: () => Qf }), $f = Qf, ep = () => Qf, tp = (e, t, { descriptor: n }) => {
	let r = [`${$f.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
	return t && r.push(`we now treat it as ${$f.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
}, np = Symbol.for("vnopts.VALUE_NOT_EXIST"), rp = Symbol.for("vnopts.VALUE_UNCHANGED"), ip = " ".repeat(2), ap = (e, t, n) => {
	let { text: r, list: i } = n.normalizeExpectedResult(n.schemas[e].expected(n)), a = [];
	return r && a.push(op(e, t, r, n.descriptor)), i && a.push([op(e, t, i.title, n.descriptor)].concat(i.values.map((e) => sp(e, n.loggerPrintWidth))).join("\n")), cp(a, n.loggerPrintWidth);
};
function op(e, t, n, r) {
	return [
		`Invalid ${$f.red(r.key(e))} value.`,
		`Expected ${$f.blue(n)},`,
		`but received ${t === np ? $f.gray("nothing") : $f.red(r.value(t))}.`
	].join(" ");
}
function sp({ text: e, list: t }, n) {
	let r = [];
	return e && r.push(`- ${$f.blue(e)}`), t && r.push([`- ${$f.blue(t.title)}:`].concat(t.values.map((e) => sp(e, n - ip.length).replace(/^|\n/g, `$&${ip}`))).join("\n")), cp(r, n);
}
function cp(e, t) {
	if (e.length === 1) return e[0];
	let [n, r] = e, [i, a] = e.map((e) => e.split("\n", 1)[0].length);
	return i > t && i > a ? r : n;
}
var lp = [], up = [];
function dp(e, t, n) {
	if (e === t) return 0;
	let r = n?.maxDistance, i = e;
	e.length > t.length && (e = t, t = i);
	let a = e.length, o = t.length;
	for (; a > 0 && e.charCodeAt(~-a) === t.charCodeAt(~-o);) a--, o--;
	let s = 0;
	for (; s < a && e.charCodeAt(s) === t.charCodeAt(s);) s++;
	if (a -= s, o -= s, r !== void 0 && o - a > r) return r;
	if (a === 0) return r !== void 0 && o > r ? r : o;
	let c, l, u, d, f = 0, p = 0;
	for (; f < a;) up[f] = e.charCodeAt(s + f), lp[f] = ++f;
	for (; p < o;) {
		for (c = t.charCodeAt(s + p), u = p++, l = p, f = 0; f < a; f++) d = c === up[f] ? u : u + 1, u = lp[f], l = lp[f] = u > l ? d > l ? l + 1 : d : d > u ? u + 1 : d;
		if (r !== void 0) {
			let e = l;
			for (f = 0; f < a; f++) lp[f] < e && (e = lp[f]);
			if (e > r) return r;
		}
	}
	return lp.length = a, up.length = a, r !== void 0 && l > r ? r : l;
}
function fp(e, t, n) {
	if (!Array.isArray(t) || t.length === 0) return;
	let r = n?.maxDistance, i = e.length;
	for (let n of t) if (n === e) return n;
	if (r === 0) return;
	let a, o = Infinity, s = /* @__PURE__ */ new Set();
	for (let n of t) {
		if (s.has(n)) continue;
		s.add(n);
		let t = Math.abs(n.length - i);
		if (t >= o || r !== void 0 && t > r) continue;
		let c = Number.isFinite(o) ? r === void 0 ? o : Math.min(o, r) : r, l = c === void 0 ? dp(e, n) : dp(e, n, { maxDistance: c });
		if (r !== void 0 && l > r) continue;
		let u = l;
		if (c !== void 0 && l === c && c === r && (u = dp(e, n)), u < o && (o = u, a = n, o === 0)) break;
	}
	if (!(r !== void 0 && o > r)) return a;
}
var pp = (e, t, { descriptor: n, logger: r, schemas: i }) => {
	let a = [`Ignored unknown option ${$f.yellow(n.pair({
		key: e,
		value: t
	}))}.`], o = fp(e, Object.keys(i), { maxDistance: 3 });
	o && a.push(`Did you mean ${$f.blue(n.key(o))}?`), r.warn(a.join(" "));
}, mp = [
	"default",
	"expected",
	"validate",
	"deprecated",
	"forward",
	"redirect",
	"overlap",
	"preprocess",
	"postprocess"
];
function hp(e, t) {
	let n = new e(t), r = Object.create(n);
	for (let e of mp) e in t && (r[e] = _p(t[e], n, gp.prototype[e].length));
	return r;
}
var gp = class {
	static create(e) {
		return hp(this, e);
	}
	constructor(e) {
		this.name = e.name;
	}
	default(e) {}
	expected(e) {
		return "nothing";
	}
	validate(e, t) {
		return !1;
	}
	deprecated(e, t) {
		return !1;
	}
	forward(e, t) {}
	redirect(e, t) {}
	overlap(e, t, n) {
		return e;
	}
	preprocess(e, t) {
		return e;
	}
	postprocess(e, t) {
		return rp;
	}
};
function _p(e, t, n) {
	return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
}
var vp = class extends gp {
	constructor(e) {
		super(e), this._sourceName = e.sourceName;
	}
	expected(e) {
		return e.schemas[this._sourceName].expected(e);
	}
	validate(e, t) {
		return t.schemas[this._sourceName].validate(e, t);
	}
	redirect(e, t) {
		return this._sourceName;
	}
}, yp = class extends gp {
	expected() {
		return "anything";
	}
	validate() {
		return !0;
	}
}, bp = class extends gp {
	constructor({ valueSchema: e, name: t = e.name, ...n }) {
		super({
			...n,
			name: t
		}), this._valueSchema = e;
	}
	expected(e) {
		let { text: t, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e));
		return {
			text: t && `an array of ${t}`,
			list: n && {
				title: "an array of the following values",
				values: [{ list: n }]
			}
		};
	}
	validate(e, t) {
		if (!Array.isArray(e)) return !1;
		let n = [];
		for (let r of e) {
			let e = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);
			e !== !0 && n.push(e.value);
		}
		return n.length === 0 ? !0 : { value: n };
	}
	deprecated(e, t) {
		let n = [];
		for (let r of e) {
			let e = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);
			e !== !1 && n.push(...e.map(({ value: e }) => ({ value: [e] })));
		}
		return n;
	}
	forward(e, t) {
		let n = [];
		for (let r of e) {
			let e = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
			n.push(...e.map(xp));
		}
		return n;
	}
	redirect(e, t) {
		let n = [], r = [];
		for (let i of e) {
			let e = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i);
			"remain" in e && n.push(e.remain), r.push(...e.redirect.map(xp));
		}
		return n.length === 0 ? { redirect: r } : {
			redirect: r,
			remain: n
		};
	}
	overlap(e, t) {
		return e.concat(t);
	}
};
function xp({ from: e, to: t }) {
	return {
		from: [e],
		to: t
	};
}
var Sp = class extends gp {
	expected() {
		return "true or false";
	}
	validate(e) {
		return typeof e == "boolean";
	}
};
function Cp(e, t) {
	let n = Object.create(null);
	for (let r of e) {
		let e = r[t];
		if (n[e]) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
		n[e] = r;
	}
	return n;
}
function wp(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r[t];
		if (n.has(e)) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
		n.set(e, r);
	}
	return n;
}
function Tp() {
	let e = Object.create(null);
	return (t) => {
		let n = JSON.stringify(t);
		return e[n] ? !0 : (e[n] = !0, !1);
	};
}
function Ep(e, t) {
	let n = [], r = [];
	for (let i of e) t(i) ? n.push(i) : r.push(i);
	return [n, r];
}
function Dp(e) {
	return e === Math.floor(e);
}
function Op(e, t) {
	if (e === t) return 0;
	let n = typeof e, r = typeof t, i = [
		"undefined",
		"object",
		"boolean",
		"number",
		"string"
	];
	return n === r ? n === "string" ? e.localeCompare(t) : Number(e) - Number(t) : i.indexOf(n) - i.indexOf(r);
}
function kp(e) {
	return (...t) => {
		let n = e(...t);
		return typeof n == "string" ? Error(n) : n;
	};
}
function Ap(e) {
	return e === void 0 ? {} : e;
}
function jp(e) {
	if (typeof e == "string") return { text: e };
	let { text: t, list: n } = e;
	return Lp((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? {
		text: t,
		list: {
			title: n.title,
			values: n.values.map(jp)
		}
	} : { text: t };
}
function Mp(e, t) {
	return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Np(e, t, n = !1) {
	return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function Pp(e, t) {
	return typeof e == "string" || "key" in e ? {
		from: t,
		to: e
	} : "from" in e ? {
		from: e.from,
		to: e.to
	} : {
		from: t,
		to: e.to
	};
}
function Fp(e, t) {
	return e === void 0 ? [] : Array.isArray(e) ? e.map((e) => Pp(e, t)) : [Pp(e, t)];
}
function Ip(e, t) {
	let n = Fp(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
	return n.length === 0 ? {
		remain: t,
		redirect: n
	} : typeof e == "object" && "remain" in e ? {
		remain: e.remain,
		redirect: n
	} : { redirect: n };
}
function Lp(e, t) {
	if (!e) throw Error(t);
}
var Rp = class extends gp {
	constructor(e) {
		super(e), this._choices = wp(e.choices.map((e) => e && typeof e == "object" ? e : { value: e }), "value");
	}
	expected({ descriptor: e }) {
		let t = Array.from(this._choices.keys()).map((e) => this._choices.get(e)).filter(({ hidden: e }) => !e).map((e) => e.value).sort(Op).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
		return {
			text: n.concat(r.join(" or ")).join(", "),
			list: {
				title: "one of the following values",
				values: t
			}
		};
	}
	validate(e) {
		return this._choices.has(e);
	}
	deprecated(e) {
		let t = this._choices.get(e);
		return t && t.deprecated ? { value: e } : !1;
	}
	forward(e) {
		let t = this._choices.get(e);
		return t ? t.forward : void 0;
	}
	redirect(e) {
		let t = this._choices.get(e);
		return t ? t.redirect : void 0;
	}
}, zp = class extends gp {
	expected() {
		return "a number";
	}
	validate(e, t) {
		return typeof e == "number";
	}
}, Bp = class extends zp {
	expected() {
		return "an integer";
	}
	validate(e, t) {
		return t.normalizeValidateResult(super.validate(e, t), e) === !0 && Dp(e);
	}
}, Vp = class extends gp {
	expected() {
		return "a string";
	}
	validate(e) {
		return typeof e == "string";
	}
}, Hp = Zf, Up = pp, Wp = ap, Gp = tp, Kp = class {
	constructor(e, t) {
		let { logger: n = console, loggerPrintWidth: r = 80, descriptor: i = Hp, unknown: a = Up, invalid: o = Wp, deprecated: s = Gp, missing: c = () => !1, required: l = () => !1, preprocess: u = (e) => e, postprocess: d = () => rp } = t || {};
		this._utils = {
			descriptor: i,
			logger: n || { warn: () => {} },
			loggerPrintWidth: r,
			schemas: Cp(e, "name"),
			normalizeDefaultResult: Ap,
			normalizeExpectedResult: jp,
			normalizeDeprecatedResult: Np,
			normalizeForwardResult: Fp,
			normalizeRedirectResult: Ip,
			normalizeValidateResult: Mp
		}, this._unknownHandler = a, this._invalidHandler = kp(o), this._deprecatedHandler = s, this._identifyMissing = (e, t) => !(e in t) || c(e, t), this._identifyRequired = l, this._preprocess = u, this._postprocess = d, this.cleanHistory();
	}
	cleanHistory() {
		this._hasDeprecationWarned = Tp();
	}
	normalize(e) {
		let t = {}, n = [this._preprocess(e, this._utils)], r = () => {
			for (; n.length !== 0;) {
				let e = n.shift(), r = this._applyNormalization(e, t);
				n.push(...r);
			}
		};
		r();
		for (let e of Object.keys(this._utils.schemas)) {
			let r = this._utils.schemas[e];
			if (!(e in t)) {
				let t = Ap(r.default(this._utils));
				"value" in t && n.push({ [e]: t.value });
			}
		}
		r();
		for (let e of Object.keys(this._utils.schemas)) {
			if (!(e in t)) continue;
			let n = this._utils.schemas[e], r = t[e], i = n.postprocess(r, this._utils);
			i !== rp && (this._applyValidation(i, e, n), t[e] = i);
		}
		return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
	}
	_applyNormalization(e, t) {
		let n = [], { knownKeys: r, unknownKeys: i } = this._partitionOptionKeys(e);
		for (let i of r) {
			let r = this._utils.schemas[i], a = r.preprocess(e[i], this._utils);
			this._applyValidation(a, i, r);
			let o = ({ from: e, to: t }) => {
				n.push(typeof t == "string" ? { [t]: e } : { [t.key]: t.value });
			}, s = ({ value: e, redirectTo: t }) => {
				let n = Np(r.deprecated(e, this._utils), a, !0);
				if (n !== !1) if (n === !0) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, t, this._utils));
				else for (let { value: e } of n) {
					let n = {
						key: i,
						value: e
					};
					if (!this._hasDeprecationWarned(n)) {
						let r = typeof t == "string" ? {
							key: t,
							value: e
						} : t;
						this._utils.logger.warn(this._deprecatedHandler(n, r, this._utils));
					}
				}
			};
			Fp(r.forward(a, this._utils), a).forEach(o);
			let c = Ip(r.redirect(a, this._utils), a);
			if (c.redirect.forEach(o), "remain" in c) {
				let e = c.remain;
				t[i] = i in t ? r.overlap(t[i], e, this._utils) : e, s({ value: e });
			}
			for (let { from: e, to: t } of c.redirect) s({
				value: e,
				redirectTo: t
			});
		}
		for (let r of i) {
			let i = e[r];
			this._applyUnknownHandler(r, i, t, (e, t) => {
				n.push({ [e]: t });
			});
		}
		return n;
	}
	_applyRequiredCheck(e) {
		for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, np, this._utils);
	}
	_partitionOptionKeys(e) {
		let [t, n] = Ep(Object.keys(e).filter((t) => !this._identifyMissing(t, e)), (e) => e in this._utils.schemas);
		return {
			knownKeys: t,
			unknownKeys: n
		};
	}
	_applyValidation(e, t, n) {
		let r = Mp(n.validate(e, this._utils), e);
		if (r !== !0) throw this._invalidHandler(t, r.value, this._utils);
	}
	_applyUnknownHandler(e, t, n, r) {
		let i = this._unknownHandler(e, t, this._utils);
		if (i) for (let e of Object.keys(i)) {
			if (this._identifyMissing(e, i)) continue;
			let t = i[e];
			e in this._utils.schemas ? r(e, t) : n[e] = t;
		}
	}
	_applyPostprocess(e) {
		let t = this._postprocess(e, this._utils);
		if (t !== rp) {
			if (t.delete) for (let n of t.delete) delete e[n];
			if (t.override) {
				let { knownKeys: n, unknownKeys: r } = this._partitionOptionKeys(t.override);
				for (let r of n) {
					let n = t.override[r];
					this._applyValidation(n, r, this._utils.schemas[r]), e[r] = n;
				}
				for (let n of r) {
					let r = t.override[n];
					this._applyUnknownHandler(n, r, e, (t, n) => {
						let r = this._utils.schemas[t];
						this._applyValidation(n, t, r), e[t] = n;
					});
				}
			}
		}
	}
}, qp;
function Jp(e, t, { logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: a, descriptor: o } = {}) {
	if (r) {
		if (!a) throw Error("'FlagSchema' option is required.");
		if (!o) throw Error("'descriptor' option is required.");
	} else o = Zf;
	let s = i ? Array.isArray(i) ? (e, t) => i.includes(e) ? { [e]: t } : void 0 : (e, t) => ({ [e]: t }) : (e, t, n) => {
		let { _: r, ...i } = n.schemas;
		return pp(e, t, {
			...n,
			schemas: i
		});
	}, c = new Kp(Yp(t, {
		isCLI: r,
		FlagSchema: a
	}), {
		logger: n,
		unknown: s,
		descriptor: o
	}), l = n !== !1;
	l && qp && (c._hasDeprecationWarned = qp);
	let u = c.normalize(e);
	return l && (qp = c._hasDeprecationWarned), u;
}
function Yp(e, { isCLI: t, FlagSchema: n }) {
	let r = [];
	t && r.push(yp.create({ name: "_" }));
	for (let i of e) r.push(Xp(i, {
		isCLI: t,
		optionInfos: e,
		FlagSchema: n
	})), i.alias && t && r.push(vp.create({
		name: i.alias,
		sourceName: i.name
	}));
	return r;
}
function Xp(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
	let { name: i } = e, a = { name: i }, o, s = {};
	switch (e.type) {
		case "int":
			o = Bp, t && (a.preprocess = Number);
			break;
		case "string":
			o = Vp;
			break;
		case "choice":
			o = Rp, a.choices = e.choices.map((t) => t?.redirect ? {
				...t,
				redirect: { to: {
					key: e.name,
					value: t.redirect
				} }
			} : t);
			break;
		case "boolean":
			o = Sp;
			break;
		case "flag":
			o = r, a.flags = n.flatMap((e) => [
				e.alias,
				e.description && e.name,
				e.oppositeDescription && `no-${e.name}`
			].filter(Boolean));
			break;
		case "path":
			o = Vp;
			break;
		default: throw Error(`Unexpected type ${e.type}`);
	}
	if (e.exception ? a.validate = (t, n, r) => e.exception(t) || n.validate(t, r) : a.validate = (e, t, n) => e === void 0 || t.validate(e, n), e.redirect && (s.redirect = (t) => t ? { to: typeof e.redirect == "string" ? e.redirect : {
		key: e.redirect.option,
		value: e.redirect.value
	} } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
		let e = a.preprocess || ((e) => e);
		a.preprocess = (t, n, r) => n.preprocess(e(Array.isArray(t) ? J(0, t, -1) : t), r);
	}
	return e.array ? bp.create({
		...t ? { preprocess: (e) => Array.isArray(e) ? e : [e] } : {},
		...s,
		valueSchema: o.create(a)
	}) : o.create({
		...a,
		...s
	});
}
var Zp = Jp, Qp = Array.prototype.findLast ?? function(e) {
	for (let t = this.length - 1; t >= 0; t--) {
		let n = this[t];
		if (e(n, t, this)) return n;
	}
}, $p = Il("findLast", function() {
	if (Array.isArray(this)) return Qp;
}), em = Symbol.for("PRETTIER_IS_FRONT_MATTER"), tm = [];
function nm(e) {
	return !!e?.[em];
}
var rm = nm, im = new Set(["yaml", "toml"]), am = ({ node: e }) => rm(e) && im.has(e.language);
async function om(e, t, n, r) {
	let { node: i } = n, { language: a } = i;
	if (!im.has(a)) return;
	let o = i.value.trim(), s;
	if (o) {
		let t = a === "yaml" ? a : Xf(r, { language: a });
		if (!t) return;
		s = o ? await e(o, { parser: t }) : "";
	} else s = o;
	return Ju([
		i.startDelimiter,
		i.explicitLanguage ?? "",
		ld,
		s,
		s ? ld : "",
		i.endDelimiter
	]);
}
function sm(e, t) {
	return am({ node: e }) && (delete t.end, delete t.raw, delete t.value), t;
}
var cm = sm;
function lm({ node: e }) {
	return e.raw;
}
var um = lm, dm = new Set([
	"tokens",
	"comments",
	"parent",
	"enclosingNode",
	"precedingNode",
	"followingNode"
]), fm = (e) => Object.keys(e).filter((e) => !dm.has(e));
function pm(e, t) {
	let n = e ? (t) => e(t, dm) : fm;
	return t ? new Proxy(n, { apply: (e, t, n) => rm(n[0]) ? tm : Reflect.apply(e, t, n) }) : n;
}
var mm = pm;
function hm(e, t) {
	if (!t) throw Error("parserName is required.");
	let n = $p(0, e, (e) => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t));
	if (n) return n;
	let r = `Couldn't resolve parser "${t}".`;
	throw r += " Plugins must be explicitly added to the standalone bundle.", new kf(r);
}
function gm(e, t) {
	if (!t) throw Error("astFormat is required.");
	let n = $p(0, e, (e) => e.printers && Object.prototype.hasOwnProperty.call(e.printers, t));
	if (n) return n;
	let r = `Couldn't find plugin for AST format "${t}".`;
	throw r += " Plugins must be explicitly added to the standalone bundle.", new kf(r);
}
function _m({ plugins: e, parser: t }) {
	return vm(hm(e, t), t);
}
function vm(e, t) {
	let n = e.parsers[t];
	return typeof n == "function" ? n() : n;
}
async function ym(e, t) {
	let n = e.printers[t];
	return xm(typeof n == "function" ? await n() : n);
}
var bm = /* @__PURE__ */ new WeakMap();
function xm(e) {
	if (bm.has(e)) return bm.get(e);
	let { features: t, getVisitorKeys: n, embed: r, massageAstNode: i, print: a, ...o } = e;
	t = wm(t);
	let s = t.experimental_frontMatterSupport;
	n = mm(n, s.massageAstNode || s.embed || s.print);
	let c = i;
	i && s.massageAstNode && (c = new Proxy(i, { apply(e, t, n) {
		return cm(...n), Reflect.apply(e, t, n);
	} }));
	let l = r;
	if (r) {
		let e;
		l = new Proxy(r, {
			get(t, i, a) {
				return i === "getVisitorKeys" ? (e ??= r.getVisitorKeys ? mm(r.getVisitorKeys, s.massageAstNode || s.embed) : n, e) : Reflect.get(t, i, a);
			},
			apply: (e, t, n) => s.embed && am(...n) ? om : Reflect.apply(e, t, n)
		});
	}
	let u = a;
	s.print && (u = new Proxy(a, { apply(e, t, n) {
		let [r] = n;
		return rm(r.node) ? um(r) : Reflect.apply(e, t, n);
	} }));
	let d = {
		features: t,
		getVisitorKeys: n,
		embed: l,
		massageAstNode: c,
		print: u,
		...o
	};
	return bm.set(e, d), d;
}
var Sm = Object.fromEntries([
	"clean",
	"embed",
	"print"
].map((e) => [e, !1]));
function Cm(e) {
	return {
		...Sm,
		...e
	};
}
function wm(e) {
	return {
		experimental_avoidAstMutation: !1,
		...e,
		experimental_frontMatterSupport: Cm(e?.experimental_frontMatterSupport)
	};
}
var Tm = {
	astFormat: "estree",
	printer: {},
	originalText: void 0,
	locStart: null,
	locEnd: null,
	getVisitorKeys: null
};
async function Em(e, t = {}) {
	let n = { ...e };
	if (!n.parser) if (n.filepath) {
		if (n.parser = Xf(n, { physicalFile: n.filepath }), !n.parser) throw new Af(`No parser could be inferred for file "${n.filepath}".`);
	} else throw new Af("No parser and no file path given, couldn't infer a parser.");
	let r = Mf({
		plugins: e.plugins,
		showDeprecated: !0
	}).options, i = {
		...Tm,
		...Object.fromEntries(r.filter((e) => e.default !== void 0).map((e) => [e.name, e.default]))
	}, a = hm(n.plugins, n.parser), o = await vm(a, n.parser);
	n.astFormat = o.astFormat, n.locEnd = o.locEnd, n.locStart = o.locStart;
	let s = a.printers?.[o.astFormat] ? a : gm(n.plugins, o.astFormat), c = await ym(s, o.astFormat);
	n.printer = c, n.getVisitorKeys = c.getVisitorKeys;
	let l = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, e]) => e !== void 0)) : {}, u = {
		...i,
		...l
	};
	for (let [e, t] of Object.entries(u)) (n[e] === null || n[e] === void 0) && (n[e] = t);
	return n.parser === "json" && (n.trailingComma = "none"), Zp(n, r, {
		passThrough: Object.keys(Tm),
		...t
	});
}
var Dm = Em;
Nl(Pl(), 1);
var Om = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", km = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
RegExp("[" + Om + "]"), RegExp("[" + Om + km + "]"), Om = km = null;
var Am = {
	keyword: /* @__PURE__ */ "break.case.catch.continue.debugger.default.do.else.finally.for.function.if.return.switch.throw.try.var.const.while.with.new.this.super.class.extends.export.import.null.true.false.in.instanceof.typeof.void.delete".split("."),
	strict: [
		"implements",
		"interface",
		"let",
		"package",
		"private",
		"protected",
		"public",
		"static",
		"yield"
	],
	strictBind: ["eval", "arguments"]
};
new Set(Am.keyword), new Set(Am.strict), new Set(Am.strictBind);
var jm = (e, t) => (n) => e(t(n));
function Mm(e) {
	return {
		keyword: e.cyan,
		capitalized: e.yellow,
		jsxIdentifier: e.yellow,
		punctuator: e.yellow,
		number: e.magenta,
		string: e.green,
		regex: e.magenta,
		comment: e.gray,
		invalid: jm(jm(e.white, e.bgRed), e.bold),
		gutter: e.gray,
		marker: jm(e.red, e.bold),
		message: jm(e.red, e.bold),
		reset: e.reset
	};
}
Mm(ep(!0)), Mm(ep(!1));
function Nm() {
	return new Proxy({}, { get: () => (e) => e });
}
var Pm = /\r\n|[\n\r\u2028\u2029]/;
function Fm(e, t, n) {
	let r = Object.assign({
		column: 0,
		line: -1
	}, e.start), i = Object.assign({}, r, e.end), { linesAbove: a = 2, linesBelow: o = 3 } = n || {}, s = r.line, c = r.column, l = i.line, u = i.column, d = Math.max(s - (a + 1), 0), f = Math.min(t.length, l + o);
	s === -1 && (d = 0), l === -1 && (f = t.length);
	let p = l - s, m = {};
	if (p) for (let e = 0; e <= p; e++) {
		let n = e + s;
		c ? e === 0 ? m[n] = [c, t[n - 1].length - c + 1] : e === p ? m[n] = [0, u] : m[n] = [0, t[n - e].length] : m[n] = !0;
	}
	else c === u ? c ? m[s] = [c, 0] : m[s] = !0 : m[s] = [c, u - c];
	return {
		start: d,
		end: f,
		markerLines: m
	};
}
function Im(e, t, n = {}) {
	let r = Nm(!1), { start: i, end: a, markerLines: o } = Fm(t, e.split(Pm), n), s = t.start && typeof t.start.column == "number", c = String(a).length, l = e.split(Pm, a).slice(i, a).map((e, t) => {
		let a = i + 1 + t, s = ` ${` ${a}`.slice(-c)} |`, l = o[a], u = !o[a + 1];
		if (l) {
			let t = "";
			if (Array.isArray(l)) {
				let i = e.slice(0, Math.max(l[0] - 1, 0)).replace(/[^\t]/g, " "), a = l[1] || 1;
				t = [
					"\n ",
					r.gutter(s.replace(/\d/g, " ")),
					" ",
					i,
					r.marker("^").repeat(a)
				].join(""), u && n.message && (t += " " + r.message(n.message));
			}
			return [
				r.marker(">"),
				r.gutter(s),
				e.length > 0 ? ` ${e}` : "",
				t
			].join("");
		} else return ` ${r.gutter(s)}${e.length > 0 ? ` ${e}` : ""}`;
	}).join("\n");
	return n.message && !s && (l = `${" ".repeat(c + 1)}${n.message}
${l}`), l;
}
async function Lm(e, t) {
	let n = await _m(t), r = n.preprocess ? await n.preprocess(e, t) : e;
	t.originalText = r;
	let i;
	try {
		i = await n.parse(r, t, t);
	} catch (t) {
		Rm(t, e);
	}
	return {
		text: r,
		ast: i
	};
}
function Rm(e, t) {
	let { loc: n } = e;
	if (n) {
		let r = Im(t, n, { highlightCode: !0 });
		throw e.message += "\n" + r, e.codeFrame = r, e;
	}
	throw e;
}
var zm = Lm;
async function Bm(e, t, n, r, i) {
	if (n.embeddedLanguageFormatting !== "auto") return;
	let { printer: a } = n, { embed: o } = a;
	if (!o) return;
	if (o.length > 2) throw Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
	let { hasPrettierIgnore: s } = a, { getVisitorKeys: c } = o, l = [];
	f();
	let u = e.stack;
	for (let { print: r, node: a, pathStack: o } of l) try {
		e.stack = o;
		let s = await r(d, t, e, n);
		s && i.set(a, s);
	} catch (e) {
		if (globalThis.PRETTIER_DEBUG) throw e;
	}
	e.stack = u;
	function d(e, t) {
		return Vm(e, t, n, r);
	}
	function f() {
		let { node: t } = e;
		if (typeof t != "object" || !t || s?.(e)) return;
		for (let n of c(t)) Array.isArray(t[n]) ? e.each(f, n) : e.call(f, n);
		let r = o(e, n);
		if (r) {
			if (typeof r == "function") {
				l.push({
					print: r,
					node: t,
					pathStack: [...e.stack]
				});
				return;
			}
			i.set(t, r);
		}
	}
}
async function Vm(e, t, n, r) {
	let i = await Dm({
		...n,
		...t,
		parentParser: n.parser,
		originalText: e,
		cursorOffset: void 0,
		rangeStart: void 0,
		rangeEnd: void 0
	}, { passThrough: !0 }), { ast: a } = await zm(e, i);
	return Pu(await r(a, i));
}
function Hm(e, t, n, r) {
	let { originalText: i, [Symbol.for("comments")]: a, locStart: o, locEnd: s, [Symbol.for("printedComments")]: c } = t, { node: l } = e, u = o(l), d = s(l);
	for (let e of a) o(e) >= u && s(e) <= d && c.add(e);
	let { printPrettierIgnored: f } = t.printer;
	return f ? f(e, t, n, r) : i.slice(u, d);
}
var Um = Hm;
async function Wm(e, t) {
	({ast: e} = await Km(e, t));
	let n = /* @__PURE__ */ new Map(), r = new zd(e), i = Of(t), a = /* @__PURE__ */ new Map();
	await Bm(r, s, t, Wm, a);
	let o = await Gm(r, t, s, void 0, a);
	if (Df(t), t.cursorOffset >= 0) {
		if (t.nodeAfterCursor && !t.nodeBeforeCursor) return [Qu, o];
		if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [o, Qu];
	}
	return o;
	function s(e, t) {
		return e === void 0 || e === r ? c(t) : Array.isArray(e) ? r.call(() => c(t), ...e) : r.call(() => c(t), e);
	}
	function c(e) {
		i(r);
		let o = r.node;
		if (o == null) return "";
		let c = Vd(o) && e === void 0;
		if (c && n.has(o)) return n.get(o);
		let l = Gm(r, t, s, e, a);
		return c && n.set(o, l), l;
	}
}
function Gm(e, t, n, r, i) {
	let { node: a } = e, { printer: o } = t, s;
	switch (s = o.hasPrettierIgnore?.(e) ? Um(e, t, n, r) : i.has(a) ? i.get(a) : o.print(e, t, n, r), a) {
		case t.cursorNode:
			s = Bu(s, (e) => [
				Qu,
				e,
				Qu
			]);
			break;
		case t.nodeBeforeCursor:
			s = Bu(s, (e) => [e, Qu]);
			break;
		case t.nodeAfterCursor:
			s = Bu(s, (e) => [Qu, e]);
			break;
	}
	return o.printComment && !o.willPrintOwnComments?.(e, t) && (s = Ef(e, s, t)), s;
}
async function Km(e, t) {
	let n = e.comments ?? [];
	t[Symbol.for("comments")] = n, t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), mf(e, t);
	let { printer: { preprocess: r } } = t;
	return e = r ? await r(e, t) : e, {
		ast: e,
		comments: n
	};
}
function qm(e, t) {
	let { cursorOffset: n, locStart: r, locEnd: i, getVisitorKeys: a } = t, o = (e) => r(e) <= n && i(e) >= n, s = e, c = [e];
	for (let t of tf(e, {
		getVisitorKeys: a,
		filter: o
	})) c.push(t), s = t;
	if (nf(s, { getVisitorKeys: a })) return { cursorNode: s };
	let l, u, d = -1, f = Infinity;
	for (; c.length > 0 && (l === void 0 || u === void 0);) {
		s = c.pop();
		let e = l !== void 0, t = u !== void 0;
		for (let o of ef(s, { getVisitorKeys: a })) {
			if (!e) {
				let e = i(o);
				e <= n && e > d && (l = o, d = e);
			}
			if (!t) {
				let e = r(o);
				e >= n && e < f && (u = o, f = e);
			}
		}
	}
	return {
		nodeBeforeCursor: l,
		nodeAfterCursor: u
	};
}
var Jm = qm;
function Ym(e, t) {
	let { printer: n } = t, r = n.massageAstNode;
	if (!r) return e;
	let { getVisitorKeys: i } = n, { ignoredProperties: a } = r;
	return o(e);
	function o(e, t) {
		if (!Vd(e)) return e;
		if (Array.isArray(e)) return e.map((e) => o(e, t)).filter(Boolean);
		let n = {}, s = new Set(i(e));
		for (let t in e) !Object.prototype.hasOwnProperty.call(e, t) || a?.has(t) || (s.has(t) ? n[t] = o(e[t], e) : n[t] = e[t]);
		let c = r(e, n, t);
		if (c !== null) return c ?? n;
	}
}
var Xm = Ym, Zm = Array.prototype.findLastIndex ?? function(e) {
	for (let t = this.length - 1; t >= 0; t--) {
		let n = this[t];
		if (e(n, t, this)) return t;
	}
	return -1;
}, Qm = Il("findLastIndex", function() {
	if (Array.isArray(this)) return Zm;
}), $m = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function eh(e, t) {
	return t = new Set(t), e.find((e) => ah.has(e.type) && t.has(e));
}
function th(e) {
	let t = Qm(0, e, (e) => e.type !== "Program" && e.type !== "File");
	return t === -1 ? e : e.slice(0, t + 1);
}
function nh(e, t, { locStart: n, locEnd: r }) {
	let [i, ...a] = e, [o, ...s] = t;
	if (i === o) return [i, o];
	let c = n(i);
	for (let e of th(s)) if (n(e) >= c) o = e;
	else break;
	let l = r(o);
	for (let e of th(a)) {
		if (r(e) <= l) i = e;
		else break;
		if (i === o) break;
	}
	return [i, o];
}
function rh(e, t, n, r, i = [], a) {
	let { locStart: o, locEnd: s } = n, c = o(e), l = s(e);
	if (t > l || t < c || a === "rangeEnd" && t === c || a === "rangeStart" && t === l) return;
	let u = [e, ...i], d = af(e, u, {
		cache: df,
		locStart: o,
		locEnd: s,
		getVisitorKeys: n.getVisitorKeys,
		filter: n.printer.canAttachComment,
		getChildren: n.printer.getCommentChildNodes
	});
	for (let e of d) {
		let i = rh(e, t, n, r, u, a);
		if (i) return i;
	}
	if (r(e, i[0])) return u;
}
function ih(e, t) {
	return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var ah = new Set([
	"JsonRoot",
	"ObjectExpression",
	"ArrayExpression",
	"StringLiteral",
	"NumericLiteral",
	"BooleanLiteral",
	"NullLiteral",
	"UnaryExpression",
	"TemplateLiteral"
]), oh = new Set([
	"OperationDefinition",
	"FragmentDefinition",
	"VariableDefinition",
	"TypeExtensionDefinition",
	"ObjectTypeDefinition",
	"FieldDefinition",
	"DirectiveDefinition",
	"EnumTypeDefinition",
	"EnumValueDefinition",
	"InputValueDefinition",
	"InputObjectTypeDefinition",
	"SchemaDefinition",
	"OperationTypeDefinition",
	"InterfaceTypeDefinition",
	"UnionTypeDefinition",
	"ScalarTypeDefinition"
]);
function sh(e, t, n) {
	if (!t) return !1;
	switch (e.parser) {
		case "flow":
		case "hermes":
		case "babel":
		case "babel-flow":
		case "babel-ts":
		case "typescript":
		case "acorn":
		case "espree":
		case "meriyah":
		case "oxc":
		case "oxc-ts":
		case "__babel_estree": return ih(t.type, n?.type);
		case "json":
		case "json5":
		case "jsonc":
		case "json-stringify": return ah.has(t.type);
		case "graphql": return oh.has(t.kind);
		case "vue": return t.tag !== "root";
	}
	return !1;
}
function ch(e, t, n) {
	let { rangeStart: r, rangeEnd: i, locStart: a, locEnd: o } = t, s = e.slice(r, i).search(/\S/u), c = s === -1;
	if (!c) for (r += s; i > r && !/\S/u.test(e[i - 1]); --i);
	let l = rh(n, r, t, (e, n) => sh(t, e, n), [], "rangeStart");
	if (!l) return;
	let u = c ? l : rh(n, i, t, (e) => sh(t, e), [], "rangeEnd");
	if (!u) return;
	let d, f;
	if ($m(t)) {
		let e = eh(l, u);
		d = e, f = e;
	} else [d, f] = nh(l, u, t);
	return [Math.min(a(d), a(f)), Math.max(o(d), o(f))];
}
var lh = "﻿", uh = Symbol("cursor");
async function dh(e, t, n = 0) {
	if (!e || e.trim().length === 0) return {
		formatted: "",
		cursorOffset: -1,
		comments: []
	};
	let { ast: r, text: i } = await zm(e, t);
	t.cursorOffset >= 0 && (t = {
		...t,
		...Jm(r, t)
	});
	let a = await Wm(r, t, n);
	n > 0 && (a = Xu([ld, a], n, t.tabWidth));
	let o = Id(a, t);
	if (n > 0) {
		let e = o.formatted.trim();
		o.cursorNodeStart !== void 0 && (o.cursorNodeStart -= o.formatted.indexOf(e), o.cursorNodeStart < 0 && (o.cursorNodeStart = 0, o.cursorNodeText = o.cursorNodeText.trimStart()), o.cursorNodeStart + o.cursorNodeText.length > e.length && (o.cursorNodeText = o.cursorNodeText.trimEnd())), o.formatted = e + Zl(t.endOfLine);
	}
	let s = t[Symbol.for("comments")];
	if (t.cursorOffset >= 0) {
		let e, n, r, a;
		if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && o.cursorNodeText) if (r = o.cursorNodeStart, a = o.cursorNodeText, t.cursorNode) e = t.locStart(t.cursorNode), n = i.slice(e, t.locEnd(t.cursorNode));
		else {
			if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
			e = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
			let r = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : i.length;
			n = i.slice(e, r);
		}
		else e = 0, n = i, r = 0, a = o.formatted;
		let c = t.cursorOffset - e;
		if (n === a) return {
			formatted: o.formatted,
			cursorOffset: r + c,
			comments: s
		};
		let l = n.split("");
		l.splice(c, 0, uh);
		let u = Vl(l, a.split("")), d = r;
		for (let e of u) if (e.removed) {
			if (e.value.includes(uh)) break;
		} else d += e.count;
		return {
			formatted: o.formatted,
			cursorOffset: d,
			comments: s
		};
	}
	return {
		formatted: o.formatted,
		cursorOffset: -1,
		comments: s
	};
}
async function fh(e, t) {
	let { ast: n, text: r } = await zm(e, t), [i, a] = ch(r, t, n) ?? [0, 0], o = r.slice(i, a), s = Math.min(i, r.lastIndexOf("\n", i) + 1), c = r.slice(s, i).match(/^\s*/u)[0], l = Rd(c, t.tabWidth), u = await dh(o, {
		...t,
		rangeStart: 0,
		rangeEnd: Infinity,
		cursorOffset: t.cursorOffset > i && t.cursorOffset <= a ? t.cursorOffset - i : -1,
		endOfLine: "lf"
	}, l), d = u.formatted.trimEnd(), { cursorOffset: f } = t;
	f > a ? f += d.length - o.length : u.cursorOffset >= 0 && (f = u.cursorOffset + i);
	let p = r.slice(0, i) + d + r.slice(a);
	if (t.endOfLine !== "lf") {
		let e = Zl(t.endOfLine);
		f >= 0 && e === "\r\n" && (f += $l(p.slice(0, f), "\n")), p = Rl(0, p, "\n", e);
	}
	return {
		formatted: p,
		cursorOffset: f,
		comments: u.comments
	};
}
function ph(e, t, n) {
	return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function mh(e, t) {
	let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t;
	return n = ph(e, n, -1), r = ph(e, r, 0), i = ph(e, i, e.length), {
		...t,
		cursorOffset: n,
		rangeStart: r,
		rangeEnd: i
	};
}
function hh(e, t) {
	let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a } = mh(e, t), o = e.charAt(0) === lh;
	if (o && (e = e.slice(1), n--, r--, i--), a === "auto" && (a = Xl(e)), e.includes("\r")) {
		let t = (t) => $l(e.slice(0, Math.max(t, 0)), "\r\n");
		n -= t(n), r -= t(r), i -= t(i), e = tu(e);
	}
	return {
		hasBOM: o,
		text: e,
		options: mh(e, {
			...t,
			cursorOffset: n,
			rangeStart: r,
			rangeEnd: i,
			endOfLine: a
		})
	};
}
async function gh(e, t) {
	let n = await _m(t);
	return !n.hasPragma || n.hasPragma(e);
}
async function _h(e, t) {
	return (await _m(t)).hasIgnorePragma?.(e);
}
async function vh(e, t) {
	let { hasBOM: n, text: r, options: i } = hh(e, await Dm(t));
	if (i.rangeStart >= i.rangeEnd && r !== "" || i.requirePragma && !await gh(r, i) || i.checkIgnorePragma && await _h(r, i)) return {
		formatted: e,
		cursorOffset: t.cursorOffset,
		comments: []
	};
	let a;
	return i.rangeStart > 0 || i.rangeEnd < r.length ? a = await fh(r, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !await gh(r, i) && (r = i.printer.insertPragma(r)), a = await dh(r, i)), n && (a.formatted = lh + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
}
async function yh(e, t, n) {
	let { text: r, options: i } = hh(e, await Dm(t)), a = await zm(r, i);
	return n && (n.preprocessForPrint && (a.ast = await Km(a.ast, i)), n.massage && (a.ast = Xm(a.ast, i))), a;
}
async function bh(e, t) {
	return t = await Dm(t), Id(await Wm(e, t), t);
}
async function xh(e, t) {
	let { formatted: n } = await vh(gd(e), {
		...t,
		parser: "__js_expression"
	});
	return n;
}
async function Sh(e, t) {
	t = await Dm(t);
	let { ast: n } = await zm(e, t);
	return t.cursorOffset >= 0 && (t = {
		...t,
		...Jm(n, t)
	}), Wm(n, t);
}
async function Ch(e, t) {
	return Id(e, await Dm(t));
}
var wh = {};
jl(wh, {
	builders: () => Th,
	printer: () => Eh,
	utils: () => Dh
});
var Th = {
	join: id,
	line: od,
	softline: sd,
	hardline: ld,
	literalline: dd,
	group: ed,
	conditionalGroup: td,
	fill: $u,
	lineSuffix: fd,
	lineSuffixBoundary: pd,
	cursor: Qu,
	breakParent: Zu,
	ifBreak: nd,
	trim: md,
	indent: Gu,
	indentIfBreak: rd,
	align: Ku,
	addAlignmentToDoc: Xu,
	markAsRoot: Ju,
	dedentToRoot: qu,
	dedent: Yu,
	hardlineWithoutBreakParent: cd,
	literallineWithoutBreakParent: ud,
	label: ad,
	concat: (e) => e
}, Eh = { printDocToString: Id }, Dh = {
	willBreak: Du,
	traverseDoc: Cu,
	findInDoc: Tu,
	mapDoc: wu,
	removeLines: ju,
	stripTrailingHardline: Pu,
	replaceEndOfLine: Lu,
	canBreak: zu
}, Oh = "3.8.1", kh = {};
jl(kh, {
	addDanglingComment: () => lf,
	addLeadingComment: () => cf,
	addTrailingComment: () => uf,
	getAlignmentSize: () => Rd,
	getIndentSize: () => zh,
	getMaxContinuousCount: () => Hh,
	getNextNonSpaceNonCommentCharacter: () => Wh,
	getNextNonSpaceNonCommentCharacterIndex: () => ng,
	getPreferredQuote: () => Xh,
	getStringWidth: () => wd,
	hasNewline: () => Zd,
	hasNewlineInRange: () => Qh,
	hasSpaces: () => eg,
	isNextLineEmpty: () => sg,
	isNextLineEmptyAfterIndex: () => Lh,
	isPreviousLineEmpty: () => ig,
	makeString: () => og,
	skip: () => Hd,
	skipEverythingButNewLine: () => Kd,
	skipInlineComment: () => jh,
	skipNewline: () => Yd,
	skipSpaces: () => Wd,
	skipToLineEnd: () => Gd,
	skipTrailingComment: () => Nh,
	skipWhitespace: () => Ud
});
function Ah(e, t) {
	if (t === !1) return !1;
	if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
		for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
	}
	return t;
}
var jh = Ah;
function Mh(e, t) {
	return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? Kd(e, t) : t;
}
var Nh = Mh;
function Ph(e, t) {
	let n = null, r = t;
	for (; r !== n;) n = r, r = Wd(e, r), r = jh(e, r), r = Nh(e, r), r = Yd(e, r);
	return r;
}
var Fh = Ph;
function Ih(e, t) {
	let n = null, r = t;
	for (; r !== n;) n = r, r = Gd(e, r), r = jh(e, r), r = Wd(e, r);
	return r = Nh(e, r), r = Yd(e, r), r !== !1 && Zd(e, r);
}
var Lh = Ih;
function Rh(e, t) {
	let n = e.lastIndexOf("\n");
	return n === -1 ? 0 : Rd(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
}
var zh = Rh;
function Bh(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Vh(e, t) {
	let n = e.matchAll(RegExp(`(?:${Bh(t)})+`, "gu"));
	return n.reduce || (n = [...n]), n.reduce((e, [t]) => Math.max(e, t.length), 0) / t.length;
}
var Hh = Vh;
function Uh(e, t) {
	let n = Fh(e, t);
	return n === !1 ? "" : e.charAt(n);
}
var Wh = Uh, Gh = Object.freeze({
	character: "'",
	codePoint: 39
}), Kh = Object.freeze({
	character: "\"",
	codePoint: 34
}), qh = Object.freeze({
	preferred: Gh,
	alternate: Kh
}), Jh = Object.freeze({
	preferred: Kh,
	alternate: Gh
});
function Yh(e, t) {
	let { preferred: n, alternate: r } = t === !0 || t === "'" ? qh : Jh, { length: i } = e, a = 0, o = 0;
	for (let t = 0; t < i; t++) {
		let i = e.charCodeAt(t);
		i === n.codePoint ? a++ : i === r.codePoint && o++;
	}
	return (a > o ? r : n).character;
}
var Xh = Yh;
function Zh(e, t, n) {
	for (let r = t; r < n; ++r) if (e.charAt(r) === "\n") return !0;
	return !1;
}
var Qh = Zh;
function $h(e, t, n = {}) {
	return Wd(e, n.backwards ? t - 1 : t, n) !== t;
}
var eg = $h;
function tg(e, t, n) {
	return Fh(e, n(t));
}
function ng(e, t) {
	return arguments.length === 2 || typeof t == "number" ? Fh(e, t) : tg(...arguments);
}
function rg(e, t, n) {
	return xf(e, n(t));
}
function ig(e, t) {
	return arguments.length === 2 || typeof t == "number" ? xf(e, t) : rg(...arguments);
}
function ag(e, t, n) {
	return Lh(e, n(t));
}
function og(e, t, n) {
	let r = t === "\"" ? "'" : "\"";
	return t + Rl(0, e, /\\(.)|(["'])/gsu, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(i) ? i : "\\" + i)) + t;
}
function sg(e, t) {
	return arguments.length === 2 || typeof t == "number" ? Lh(e, t) : ag(...arguments);
}
function cg(e, t = 1) {
	return async (...n) => {
		let r = n[t] ?? {}, i = r.plugins ?? [];
		return n[t] = {
			...r,
			plugins: Array.isArray(i) ? i : Object.values(i)
		}, e(...n);
	};
}
var lg = cg(vh);
async function ug(e, t) {
	let { formatted: n } = await lg(e, {
		...t,
		cursorOffset: -1
	});
	return n;
}
async function dg(e, t) {
	return await ug(e, t) === e;
}
var fg = cg(Mf, 0), pg = {
	parse: cg(yh),
	formatAST: cg(bh),
	formatDoc: cg(xh),
	printToDoc: cg(Sh),
	printDocToString: cg(Ch)
};
//#endregion
//#region src/components/journalEditorSheet/magicToolbar/useToolbarContent.ts
function mg(e, t) {
	let n = (0, j.useId)(), { register: r, unregister: i } = (0, j.useContext)(oe), a = (0, j.useMemo)(() => ({
		category: e,
		content: t
	}), [e, t]);
	(0, j.useEffect)(() => (r(n, a), () => {
		i(n);
	}), [
		t,
		a,
		n,
		r,
		i
	]);
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/createStack.ts
function hg() {
	return {
		edits: [],
		bombBay: [],
		next: null
	};
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/createDocumentMemory.ts
function gg(e, t = null) {
	return {
		stack: hg(),
		serial: 0,
		period: e,
		maxDepth: t,
		state: "",
		snapshots: [""]
	};
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/dehydrate.ts
function _g(e) {
	return {
		stack: e.stack,
		serial: e.serial,
		period: e.period,
		maxDepth: e.maxDepth
	};
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/getStacks.ts
var vg = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	t.exports = function(e, t) {
		let n = "", r = 0;
		for (let i = 0; i < t.length; i++) {
			let a = t[i], o = a[0], s = a[1];
			o == -1 ? r += s : o == 0 ? n += e.slice(r, r += s) : n += s;
		}
		return n;
	};
})))(), 1);
function yg(e) {
	let t = [];
	for (let n = e.stack; n; n = n.next) t.push(n);
	return t;
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/rehydrate.ts
function bg(e) {
	let [t, ...n] = yg(e).reduceRight((e, t) => {
		let n = e[0];
		return [[...t.bombBay, ...t.edits].reduce((e, t) => (0, vg.default)(e, t.changes), n), ...e];
	}, [""]);
	return {
		stack: e.stack,
		serial: e.serial,
		period: e.period,
		maxDepth: e.maxDepth,
		state: t,
		snapshots: n
	};
}
//#endregion
//#region node_modules/.pnpm/fast-diff@1.3.0/node_modules/fast-diff/diff.js
var xg = /* @__PURE__ */ t(((e, t) => {
	var n = -1, r = 1, i = 0;
	function a(e, t, n, r, a) {
		if (e === t) return e ? [[i, e]] : [];
		if (n != null) {
			var s = D(e, t, n);
			if (s) return s;
		}
		var c = l(e, t), u = e.substring(0, c);
		e = e.substring(c), t = t.substring(c), c = d(e, t);
		var f = e.substring(e.length - c);
		e = e.substring(0, e.length - c), t = t.substring(0, t.length - c);
		var m = o(e, t);
		return u && m.unshift([i, u]), f && m.push([i, f]), b(m, a), r && p(m), m;
	}
	function o(e, t) {
		var o;
		if (!e) return [[r, t]];
		if (!t) return [[n, e]];
		var c = e.length > t.length ? e : t, l = e.length > t.length ? t : e, u = c.indexOf(l);
		if (u !== -1) return o = [
			[r, c.substring(0, u)],
			[i, l],
			[r, c.substring(u + l.length)]
		], e.length > t.length && (o[0][0] = o[2][0] = n), o;
		if (l.length === 1) return [[n, e], [r, t]];
		var d = f(e, t);
		if (d) {
			var p = d[0], m = d[1], h = d[2], g = d[3], _ = d[4], v = a(p, h), y = a(m, g);
			return v.concat([[i, _]], y);
		}
		return s(e, t);
	}
	function s(e, t) {
		for (var i = e.length, a = t.length, o = Math.ceil((i + a) / 2), s = o, l = 2 * o, u = Array(l), d = Array(l), f = 0; f < l; f++) u[f] = -1, d[f] = -1;
		u[s + 1] = 0, d[s + 1] = 0;
		for (var p = i - a, m = p % 2 != 0, h = 0, g = 0, _ = 0, v = 0, y = 0; y < o; y++) {
			for (var b = -y + h; b <= y - g; b += 2) {
				for (var x = s + b, S = b === -y || b !== y && u[x - 1] < u[x + 1] ? u[x + 1] : u[x - 1] + 1, C = S - b; S < i && C < a && e.charAt(S) === t.charAt(C);) S++, C++;
				if (u[x] = S, S > i) g += 2;
				else if (C > a) h += 2;
				else if (m) {
					var w = s + p - b;
					if (w >= 0 && w < l && d[w] !== -1) {
						var T = i - d[w];
						if (S >= T) return c(e, t, S, C);
					}
				}
			}
			for (var E = -y + _; E <= y - v; E += 2) {
				for (var w = s + E, T = E === -y || E !== y && d[w - 1] < d[w + 1] ? d[w + 1] : d[w - 1] + 1, D = T - E; T < i && D < a && e.charAt(i - T - 1) === t.charAt(a - D - 1);) T++, D++;
				if (d[w] = T, T > i) v += 2;
				else if (D > a) _ += 2;
				else if (!m) {
					var x = s + p - E;
					if (x >= 0 && x < l && u[x] !== -1) {
						var S = u[x], C = s + S - x;
						if (T = i - T, S >= T) return c(e, t, S, C);
					}
				}
			}
		}
		return [[n, e], [r, t]];
	}
	function c(e, t, n, r) {
		var i = e.substring(0, n), o = t.substring(0, r), s = e.substring(n), c = t.substring(r), l = a(i, o), u = a(s, c);
		return l.concat(u);
	}
	function l(e, t) {
		if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(a, i) == t.substring(a, i) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return x(e.charCodeAt(i - 1)) && i--, i;
	}
	function u(e, t) {
		var n = e.length, r = t.length;
		if (n == 0 || r == 0) return 0;
		n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
		var i = Math.min(n, r);
		if (e == t) return i;
		for (var a = 0, o = 1;;) {
			var s = e.substring(i - o), c = t.indexOf(s);
			if (c == -1) return a;
			o += c, (c == 0 || e.substring(i - o) == t.substring(0, o)) && (a = o, o++);
		}
	}
	function d(e, t) {
		if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
		for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;) e.substring(e.length - i, e.length - a) == t.substring(t.length - i, t.length - a) ? (n = i, a = n) : r = i, i = Math.floor((r - n) / 2 + n);
		return S(e.charCodeAt(e.length - i)) && i--, i;
	}
	function f(e, t) {
		var n = e.length > t.length ? e : t, r = e.length > t.length ? t : e;
		if (n.length < 4 || r.length * 2 < n.length) return null;
		function i(e, t, n) {
			for (var r = e.substring(n, n + Math.floor(e.length / 4)), i = -1, a = "", o, s, c, u; (i = t.indexOf(r, i + 1)) !== -1;) {
				var f = l(e.substring(n), t.substring(i)), p = d(e.substring(0, n), t.substring(0, i));
				a.length < p + f && (a = t.substring(i - p, i) + t.substring(i, i + f), o = e.substring(0, n - p), s = e.substring(n + f), c = t.substring(0, i - p), u = t.substring(i + f));
			}
			return a.length * 2 >= e.length ? [
				o,
				s,
				c,
				u,
				a
			] : null;
		}
		var a = i(n, r, Math.ceil(n.length / 4)), o = i(n, r, Math.ceil(n.length / 2)), s;
		if (!a && !o) return null;
		s = o ? a && a[4].length > o[4].length ? a : o : a;
		var c, u, f, p;
		e.length > t.length ? (c = s[0], u = s[1], f = s[2], p = s[3]) : (f = s[0], p = s[1], c = s[2], u = s[3]);
		var m = s[4];
		return [
			c,
			u,
			f,
			p,
			m
		];
	}
	function p(e) {
		for (var t = !1, a = [], o = 0, s = null, c = 0, l = 0, d = 0, f = 0, p = 0; c < e.length;) e[c][0] == i ? (a[o++] = c, l = f, d = p, f = 0, p = 0, s = e[c][1]) : (e[c][0] == r ? f += e[c][1].length : p += e[c][1].length, s && s.length <= Math.max(l, d) && s.length <= Math.max(f, p) && (e.splice(a[o - 1], 0, [n, s]), e[a[o - 1] + 1][0] = r, o--, o--, c = o > 0 ? a[o - 1] : -1, l = 0, d = 0, f = 0, p = 0, s = null, t = !0)), c++;
		for (t && b(e), y(e), c = 1; c < e.length;) {
			if (e[c - 1][0] == n && e[c][0] == r) {
				var m = e[c - 1][1], h = e[c][1], g = u(m, h), _ = u(h, m);
				g >= _ ? (g >= m.length / 2 || g >= h.length / 2) && (e.splice(c, 0, [i, h.substring(0, g)]), e[c - 1][1] = m.substring(0, m.length - g), e[c + 1][1] = h.substring(g), c++) : (_ >= m.length / 2 || _ >= h.length / 2) && (e.splice(c, 0, [i, m.substring(0, _)]), e[c - 1][0] = r, e[c - 1][1] = h.substring(0, h.length - _), e[c + 1][0] = n, e[c + 1][1] = m.substring(_), c++), c++;
			}
			c++;
		}
	}
	var m = /[^a-zA-Z0-9]/, h = /\s/, g = /[\r\n]/, _ = /\n\r?\n$/, v = /^\r?\n\r?\n/;
	function y(e) {
		function t(e, t) {
			if (!e || !t) return 6;
			var n = e.charAt(e.length - 1), r = t.charAt(0), i = n.match(m), a = r.match(m), o = i && n.match(h), s = a && r.match(h), c = o && n.match(g), l = s && r.match(g), u = c && e.match(_), d = l && t.match(v);
			return u || d ? 5 : c || l ? 4 : i && !o && s ? 3 : o || s ? 2 : i || a ? 1 : 0;
		}
		for (var n = 1; n < e.length - 1;) {
			if (e[n - 1][0] == i && e[n + 1][0] == i) {
				var r = e[n - 1][1], a = e[n][1], o = e[n + 1][1], s = d(r, a);
				if (s) {
					var c = a.substring(a.length - s);
					r = r.substring(0, r.length - s), a = c + a.substring(0, a.length - s), o = c + o;
				}
				for (var l = r, u = a, f = o, p = t(r, a) + t(a, o); a.charAt(0) === o.charAt(0);) {
					r += a.charAt(0), a = a.substring(1) + o.charAt(0), o = o.substring(1);
					var y = t(r, a) + t(a, o);
					y >= p && (p = y, l = r, u = a, f = o);
				}
				e[n - 1][1] != l && (l ? e[n - 1][1] = l : (e.splice(n - 1, 1), n--), e[n][1] = u, f ? e[n + 1][1] = f : (e.splice(n + 1, 1), n--));
			}
			n++;
		}
	}
	function b(e, t) {
		e.push([i, ""]);
		for (var a = 0, o = 0, s = 0, c = "", u = "", f; a < e.length;) {
			if (a < e.length - 1 && !e[a][1]) {
				e.splice(a, 1);
				continue;
			}
			switch (e[a][0]) {
				case r:
					s++, u += e[a][1], a++;
					break;
				case n:
					o++, c += e[a][1], a++;
					break;
				case i:
					var p = a - s - o - 1;
					if (t) {
						if (p >= 0 && w(e[p][1])) {
							var m = e[p][1].slice(-1);
							if (e[p][1] = e[p][1].slice(0, -1), c = m + c, u = m + u, !e[p][1]) {
								e.splice(p, 1), a--;
								var h = p - 1;
								e[h] && e[h][0] === r && (s++, u = e[h][1] + u, h--), e[h] && e[h][0] === n && (o++, c = e[h][1] + c, h--), p = h;
							}
						}
						if (C(e[a][1])) {
							var m = e[a][1].charAt(0);
							e[a][1] = e[a][1].slice(1), c += m, u += m;
						}
					}
					if (a < e.length - 1 && !e[a][1]) {
						e.splice(a, 1);
						break;
					}
					if (c.length > 0 || u.length > 0) {
						c.length > 0 && u.length > 0 && (f = l(u, c), f !== 0 && (p >= 0 ? e[p][1] += u.substring(0, f) : (e.splice(0, 0, [i, u.substring(0, f)]), a++), u = u.substring(f), c = c.substring(f)), f = d(u, c), f !== 0 && (e[a][1] = u.substring(u.length - f) + e[a][1], u = u.substring(0, u.length - f), c = c.substring(0, c.length - f)));
						var g = s + o;
						c.length === 0 && u.length === 0 ? (e.splice(a - g, g), a -= g) : c.length === 0 ? (e.splice(a - g, g, [r, u]), a = a - g + 1) : u.length === 0 ? (e.splice(a - g, g, [n, c]), a = a - g + 1) : (e.splice(a - g, g, [n, c], [r, u]), a = a - g + 2);
					}
					a !== 0 && e[a - 1][0] === i ? (e[a - 1][1] += e[a][1], e.splice(a, 1)) : a++, s = 0, o = 0, c = "", u = "";
					break;
			}
		}
		e[e.length - 1][1] === "" && e.pop();
		var _ = !1;
		for (a = 1; a < e.length - 1;) e[a - 1][0] === i && e[a + 1][0] === i && (e[a][1].substring(e[a][1].length - e[a - 1][1].length) === e[a - 1][1] ? (e[a][1] = e[a - 1][1] + e[a][1].substring(0, e[a][1].length - e[a - 1][1].length), e[a + 1][1] = e[a - 1][1] + e[a + 1][1], e.splice(a - 1, 1), _ = !0) : e[a][1].substring(0, e[a + 1][1].length) == e[a + 1][1] && (e[a - 1][1] += e[a + 1][1], e[a][1] = e[a][1].substring(e[a + 1][1].length) + e[a + 1][1], e.splice(a + 1, 1), _ = !0)), a++;
		_ && b(e, t);
	}
	function x(e) {
		return e >= 55296 && e <= 56319;
	}
	function S(e) {
		return e >= 56320 && e <= 57343;
	}
	function C(e) {
		return S(e.charCodeAt(0));
	}
	function w(e) {
		return x(e.charCodeAt(e.length - 1));
	}
	function T(e) {
		for (var t = [], n = 0; n < e.length; n++) e[n][1].length > 0 && t.push(e[n]);
		return t;
	}
	function E(e, t, a, o) {
		return w(e) || C(o) ? null : T([
			[i, e],
			[n, t],
			[r, a],
			[i, o]
		]);
	}
	function D(e, t, n) {
		var r = typeof n == "number" ? {
			index: n,
			length: 0
		} : n.oldRange, i = typeof n == "number" ? null : n.newRange, a = e.length, o = t.length;
		if (r.length === 0 && (i === null || i.length === 0)) {
			var s = r.index, c = e.slice(0, s), l = e.slice(s), u = i ? i.index : null;
			editBefore: {
				var d = s + o - a;
				if (u !== null && u !== d || d < 0 || d > o) break editBefore;
				var f = t.slice(0, d), p = t.slice(d);
				if (p !== l) break editBefore;
				var m = Math.min(s, d), h = c.slice(0, m), g = f.slice(0, m);
				if (h !== g) break editBefore;
				var _ = c.slice(m), v = f.slice(m);
				return E(h, _, v, l);
			}
			editAfter: {
				if (u !== null && u !== s) break editAfter;
				var y = s, f = t.slice(0, y), p = t.slice(y);
				if (f !== c) break editAfter;
				var b = Math.min(a - y, o - y), x = l.slice(l.length - b), S = p.slice(p.length - b);
				if (x !== S) break editAfter;
				var _ = l.slice(0, l.length - b), v = p.slice(0, p.length - b);
				return E(c, _, v, x);
			}
		}
		if (r.length > 0 && i && i.length === 0) replaceRange: {
			var h = e.slice(0, r.index), x = e.slice(r.index + r.length), m = h.length, b = x.length;
			if (o < m + b) break replaceRange;
			var g = t.slice(0, m), S = t.slice(o - b);
			if (h !== g || x !== S) break replaceRange;
			var _ = e.slice(m, a - b), v = t.slice(m, o - b);
			return E(h, _, v, x);
		}
		return null;
	}
	function O(e, t, n, r) {
		return a(e, t, n, r, !0);
	}
	O.INSERT = r, O.DELETE = n, O.EQUAL = i, t.exports = O;
})), Sg = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	var n = xg();
	t.exports = function(e, t) {
		let r = n(e, t);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			t[0] < 1 && (t[1] = t[1].length);
		}
		return r;
	};
})))(), 1);
function Cg(e, t, n) {
	let r = e ** +t;
	for (let n = t - 1; n > 0; n--) r += e ** +n;
	return n > r && (n - r) % e ** t === 0;
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/save.ts
function wg(e, t, n, r, i, a, o) {
	let s = e.next, c = [...e.bombBay];
	e.edits.length >= r && c.push(e.edits[0]);
	let l = [...e.edits.slice(e.edits.length === r ? 1 : 0), t], u = o;
	if (Cg(r, i, n) && (a === null || i < a)) {
		let [e = "", ...t] = o, l = e;
		for (let e of c) l = (0, vg.default)(l, e.changes);
		let d = {
			changes: (0, Sg.default)(e, l),
			timestamp: c[c.length - 1].timestamp,
			serial: c[c.length - 1].serial
		};
		c = [];
		let f = [];
		[s, f] = wg(s || hg(), d, n, r, i + 1, a, t.length > 0 ? t : [""]), u = [l, ...f];
	}
	return [{
		bombBay: c,
		edits: l,
		next: s
	}, u];
}
function Tg(e, t) {
	if (t === e.state) return e;
	let n = e.serial + 1, r = {
		changes: (0, Sg.default)(e.state, t),
		timestamp: Math.floor(Date.now() / 1e3),
		serial: n
	}, [i, a] = wg(e.stack, r, n, e.period, 1, e.maxDepth, e.snapshots);
	return {
		stack: i,
		serial: n,
		period: e.period,
		maxDepth: e.maxDepth,
		state: t,
		snapshots: a
	};
}
//#endregion
//#region src/components/journalEditorSheet/getMemoryId.ts
function Eg(e) {
	return `${e.parent.pack}$$${e.parent.id}$$${e.id}`;
}
//#endregion
//#region src/components/journalEditorSheet/savePage.ts
var Dg = 10;
async function Og(e, t, n) {
	let r = Eg(e);
	if (n === void 0) {
		let e = s.journalMemories.get()?.[r];
		n = e ? bg(e) : gg(Dg);
	}
	await e.parent.updateEmbeddedDocuments("JournalEntryPage", [{
		_id: e.id,
		text: { content: t }
	}]), n = Tg(n, t);
	let i = {
		...s.journalMemories.get(),
		[r]: _g(n)
	};
	return await s.journalMemories.set(i), n;
}
//#endregion
//#region src/components/journalEditorSheet/HTMLEditor.tsx
var kg = 600;
function Ag(e) {
	if (!("dataTransfer" in e) || e.dataTransfer === null) throw Error("Incorrectly attempted to process drag event data.");
	try {
		return JSON.parse(e.dataTransfer.getData("text/plain"));
	} catch {
		return null;
	}
}
var jg = ({ page: e }) => {
	let t = (0, j.useRef)(null), i = (0, j.useRef)(null), s = (0, j.useCallback)(async () => {
		try {
			await i.current?.getAction("editor.action.formatDocument")?.run();
		} catch (e) {
			ui.notifications?.error(`<pre>${e.message}<pre>`);
		}
	}, []), c = (0, j.useRef)(void 0), u = (0, j.useMemo)(() => a(async (t) => {
		c.current = await Og(e, t, c.current);
	}, kg), [e]), d = (0, j.useCallback)((e) => {
		e !== void 0 && u(e);
	}, [u]), f = (0, j.useCallback)((a, o) => {
		t.current = o, i.current = a, a.onDropIntoEditor(async ({ position: t, event: i }) => {
			i.preventDefault(), n.log("onDropIntoEditor", i);
			let s = Ag(i);
			n.log("dragData", s);
			let c = { relativeTo: e }, l = s === null ? "" : await r.getContentLink(s, c);
			if (l) throw a.executeEdits("", [{
				range: new o.Range(t.lineNumber, t.column, t.lineNumber, t.column),
				text: l,
				forceMoveMarkers: !0
			}]), a.focus(), Error("foo");
		}), o.languages.html.htmlDefaults.setModeConfiguration({
			...o.languages.html.htmlDefaults.modeConfiguration,
			documentFormattingEdits: !1,
			documentRangeFormattingEdits: !1
		}), o.languages.registerDocumentFormattingEditProvider("html", { async provideDocumentFormattingEdits(e) {
			try {
				let t = await Fl.format(e.getValue(), {
					parser: "html",
					htmlWhitespaceSensitivity: "css",
					plugins: [en]
				});
				return [{
					range: e.getFullModelRange(),
					text: t
				}];
			} catch (e) {
				ui.notifications?.error(e.message);
			}
		} });
	}, [e]), p = (0, j.useCallback)(async () => {
		await s();
	}, [s]);
	mg("HTML", (0, j.useMemo)(() => /* @__PURE__ */ y(M, {
		onClick: p,
		text: "Format",
		icon: fe
	}), [p]));
	let m = e.flags.investigator?.extraCssClasses ?? "", h = (0, j.useCallback)((t) => {
		e.setFlag(l, o, t);
	}, [e]);
	return /* @__PURE__ */ b("div", {
		"data-testid": "html-editor",
		css: {
			position: "relative",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "0.5em"
		},
		children: [/* @__PURE__ */ y("div", {
			"data-testid": "html-classes",
			children: /* @__PURE__ */ y(_, {
				value: m,
				onChange: h,
				placeholder: "Page CSS Classes"
			})
		}), /* @__PURE__ */ y("div", {
			css: {
				position: "relative",
				flex: 1
			},
			children: /* @__PURE__ */ y(Gt, {
				height: "100%",
				width: "100%",
				defaultLanguage: "html",
				defaultValue: e.text.content,
				theme: "vs-dark",
				onMount: f,
				onChange: d,
				options: {
					dropIntoEditor: {
						enabled: !0,
						showDropSelector: "afterDrop"
					},
					language: "html",
					automaticLayout: !0,
					scrollbar: { horizontal: "visible" },
					wordWrap: "off",
					rulers: [80],
					unicodeHighlight: { ambiguousCharacters: !1 }
				}
			}, e.id)
		})]
	});
};
jg.displayName = "MonacoWrapper";
//#endregion
//#region src/components/journalEditorSheet/documentMemory/getAccessibleEdits.ts
function Mg(e) {
	return yg(e).reverse().flatMap((e) => e.edits);
}
//#endregion
//#region src/components/journalEditorSheet/documentMemory/restoreVersion.ts
function Ng(e, t) {
	let n = yg(e), r = n.findIndex((e) => e.edits.some((e) => e.serial === t));
	if (r < 0) throw Error(`Could not find stack with serial ${t}`);
	let i = e.snapshots[r];
	for (let e of n[r].bombBay) i = (0, vg.default)(i, e.changes);
	let a = n[r].edits.findIndex((e) => e.serial === t);
	for (let e = 0; e <= a; e++) i = (0, vg.default)(i, n[r].edits[e].changes);
	return i;
}
//#endregion
//#region src/components/journalEditorSheet/HTMLHistory.tsx
var Pg = ({ page: e, saveDocument: t, cancelHistoryMode: n }) => {
	let r = (0, j.useMemo)(() => Eg(e), [e]), i = (0, j.useMemo)(() => {
		let e = s.journalMemories.get()?.[r];
		return e ? bg(e) : gg(30);
	}, [r]), a = (0, j.useMemo)(() => Mg(i).toReversed(), [i]), [o, l] = (0, j.useState)(0), [d, f] = (0, j.useMemo)(() => a.length === 0 ? ["", ""] : [o === a.length - 1 ? "" : Ng(i, a[o + 1].serial), Ng(i, a[o].serial)], [
		o,
		i,
		a
	]), p = (0, j.useCallback)(async () => {
		await u({
			message: "Are you sure you want to restore this revision?",
			confirmText: "Restore",
			cancelText: "Cancel",
			confirmIconClass: "fa fa-heart",
			resolveFalseOnCancel: !0,
			translate: !1
		}) && (await Og(e, Ng(i, a[o].serial), i), n());
	}, [
		o,
		n,
		i,
		e,
		a
	]);
	return mg("History", (0, j.useMemo)(() => /* @__PURE__ */ y(c, { children: /* @__PURE__ */ y(M, {
		onClick: p,
		text: "Restore",
		icon: de,
		disabled: o === 0
	}) }), [o, p])), /* @__PURE__ */ b("div", {
		css: {
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			display: "flex",
			flexDirection: "row"
		},
		children: [/* @__PURE__ */ b("div", {
			css: {
				width: "15em",
				overflow: "auto"
			},
			children: [/* @__PURE__ */ y("h3", { children: "Revisions" }), a.map((e, t) => /* @__PURE__ */ y("div", {
				css: { textDecoration: o === t ? "underline" : "none" },
				children: /* @__PURE__ */ b("a", {
					onClick: () => l(t),
					children: [
						e.serial,
						": ",
						(/* @__PURE__ */ new Date(e.timestamp * 1e3)).toLocaleString()
					]
				})
			}, e.serial))]
		}), /* @__PURE__ */ y("div", {
			css: { flex: 1 },
			children: /* @__PURE__ */ y(Bt, {
				height: "100%",
				width: "100%",
				original: d,
				modified: f,
				theme: "vs-dark",
				language: "html",
				options: {
					automaticLayout: !0,
					scrollbar: { horizontal: "visible" },
					wordWrap: "off",
					rulers: [80],
					unicodeHighlight: { ambiguousCharacters: !1 },
					renderSideBySide: !1,
					smoothScrolling: !0
				}
			}, e.id)
		})]
	});
};
Pg.displayName = "HTMLHistory";
//#endregion
//#region src/components/journalEditorSheet/HTMLPage.tsx
var Fg = ({ page: e }) => {
	let [t, n] = (0, j.useState)("edit"), r = (0, j.useCallback)(() => n("edit"), []), i = (0, j.useCallback)(() => n("history"), []), a = (0, j.useMemo)(() => /* @__PURE__ */ y(M, {
		onClick: i,
		text: "History",
		icon: ie,
		disabled: t === "history"
	}), [t, i]), o = (0, j.useMemo)(() => /* @__PURE__ */ y(M, {
		onClick: r,
		text: "Cancel",
		icon: pe,
		disabled: t === "edit"
	}), [t, r]), s = (0, j.useCallback)((t) => {
		e.update({ content: t });
	}, [e]);
	return mg("HTML", a), mg("History", t === "history" ? o : null), t === "edit" ? /* @__PURE__ */ y(jg, { page: e }, e.id) : /* @__PURE__ */ y(Pg, {
		page: e,
		cancelHistoryMode: r,
		saveDocument: s
	}, e.id);
};
Fg.displayName = "HTMLPage";
//#endregion
//#region src/components/inputs/TextArea.tsx
function Ig(e, t) {
	if (t === null) return "";
	let n = t.value;
	t.setRangeText(e);
	let r = t.value;
	return t.value = n, r;
}
var Lg = ({ className: e, value: t, defaultValue: n, onChange: r, onFocus: a, onBlur: o, disabled: s, placeholder: c, index: l }) => {
	let u = (0, j.useContext)(h), d = (0, j.useCallback)((e) => {
		r?.(e.currentTarget.value, l);
	}, [l, r]), f = (0, j.useRef)(null), p = async (e) => {
		e.preventDefault();
		let t = JSON.parse(e.dataTransfer.getData("text/plain"));
		if (t?.id) {
			if (t.pack) {
				i(game);
				let e = game.packs.get(t.pack);
				if (!e) return;
				let n = await e.getDocument(t.id), a = `@Compendium[${t.pack}.${t.id}]{${n?.name}}`;
				r?.(Ig(a, f.current), l);
			} else if (t.type) {
				let e = CONFIG[t.type];
				if (!e) return !1;
				let n = e.collection.instance.get(t.id);
				if (!n) return !1;
				let i = `@${t.type}[${n.data._id}]{${n.name}}`;
				r?.(Ig(i, f.current), l);
			}
		}
	};
	return /* @__PURE__ */ y("textarea", {
		ref: f,
		id: u,
		css: {
			flex: 1,
			width: "100%",
			height: "100%"
		},
		className: e,
		"data-lpignore": "true",
		value: t,
		defaultValue: n,
		onChange: d,
		onFocus: a,
		onBlur: o,
		disabled: s,
		placeholder: c,
		onDrop: (e) => p(e)
	});
}, Rg = ({ className: e, value: t, onChange: n, disabled: r, index: i }) => {
	let { onChange: a, onFocus: o, onBlur: s, display: c } = g(t, n);
	return /* @__PURE__ */ y(Lg, {
		className: e,
		value: c || "",
		onChange: a,
		onFocus: o,
		onBlur: s,
		disabled: r
	});
}, zg = (e) => /* @__PURE__ */ y("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 200,
	height: 200,
	viewBox: "0 0 52.917 52.917",
	...e,
	children: /* @__PURE__ */ y("path", {
		d: "M.132.132h52.652v52.652H.132zM.132 52.784 52.784.132M52.784 52.784.132.132",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: ".264583px",
		strokeLinecap: "butt",
		strokeLinejoin: "miter",
		strokeOpacity: 1
	})
}), Bg = ({ page: e }) => {
	let t = (0, j.useContext)(v), { app: n } = D(), r = (0, j.useCallback)((t) => (t.preventDefault(), t.stopPropagation(), new f({
		type: "image",
		current: e.src ?? void 0,
		callback: (t) => {
			e.update({ src: t });
		},
		position: {
			top: (n.position.top ?? 0) + 40,
			left: (n.position.left ?? 0) + 10
		}
	}).browse(e.src ?? "")), [
		n.position.left,
		n.position.top,
		e
	]);
	return /* @__PURE__ */ y("div", {
		"data-testid": "image-container",
		css: {
			position: "relative",
			textAlign: "center"
		},
		children: /* @__PURE__ */ y("a", {
			css: {
				margin: "auto",
				...p
			},
			onClick: r,
			children: e.src ? /* @__PURE__ */ y("img", {
				css: {
					cursor: "pointer",
					":hover": { opacity: .5 },
					maxWidth: "100%",
					maxHeight: "100%"
				},
				src: e.src
			}) : /* @__PURE__ */ b("div", {
				css: {
					...p,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					":hover": { backgroundColor: t.colors.backgroundButton }
				},
				children: [/* @__PURE__ */ y("div", {
					css: {
						fontSize: "1.5em",
						color: t.colors.text,
						padding: "1em",
						background: t.colors.backgroundButton,
						borderRadius: "0.5em"
					},
					children: "Click to add image"
				}), /* @__PURE__ */ y(zg, {
					preserveAspectRatio: "none",
					style: {
						color: "#0003",
						position: "absolute",
						top: "0%",
						left: "0%",
						width: "100%",
						height: "100%"
					}
				})]
			})
		})
	});
};
Bg.displayName = "ImageArea";
//#endregion
//#region src/components/journalEditorSheet/ImageEditor.tsx
var Vg = ({ page: e }) => {
	let t = (0, j.useCallback)(async (t) => {
		await e.update({ image: { caption: t } });
	}, [e]);
	return /* @__PURE__ */ b("div", {
		css: {
			...p,
			display: "grid",
			gridTemplateColumns: "1fr 1fr ",
			gridTemplateRows: "1fr"
		},
		children: [/* @__PURE__ */ y(Bg, { page: e }), /* @__PURE__ */ y(m, {
			css: {
				padding: "0.5em",
				gridTemplateRows: "1fr 1fr"
			},
			children: /* @__PURE__ */ y(ne, {
				label: "Caption",
				noTranslate: !0,
				children: /* @__PURE__ */ y(Rg, {
					value: e.image.caption,
					onChange: t,
					css: { flex: 1 }
				})
			})
		})]
	});
};
Vg.displayName = "ImageEditor";
//#endregion
//#region src/components/journalEditorSheet/UnknownPageTypeEditor.tsx
var Hg = ({ page: e }) => {
	let t = e.sheet;
	return O(t), /* @__PURE__ */ y("div", {
		css: {
			...p,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "1.5em"
		},
		children: /* @__PURE__ */ b(T, {
			css: { width: "auto" },
			onClick: () => t.render({ force: !0 }),
			children: [
				"Open ",
				e.type,
				" page"
			]
		})
	});
};
Hg.displayName = "UnknownPageTypeEditor";
//#endregion
//#region src/components/journalEditorSheet/PageEditor.tsx
var Ug = 3, Wg = 1, Gg = ({ page: e }) => {
	let t = C(e), r = (0, j.useCallback)(async () => {
		let e = t.current;
		await u({
			message: `Delete page ${e.name}?`,
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa fa-trash",
			resolveFalseOnCancel: !0,
			translate: !1
		}) && await e.parent.deleteEmbeddedDocuments("JournalEntryPage", [e.id]);
	}, [t]), i = (0, j.useCallback)(async () => {
		let e = t.current, r = e.parent.pages.contents.toSorted((e, t) => e.sort - t.sort), i = r.findIndex((t) => t._id === e._id);
		if (i < 1) return;
		let a = r[i - 1], o = [{
			_id: e.id,
			sort: a.sort
		}, {
			_id: a.id,
			sort: e.sort
		}];
		n.log("move up", o), await e.parent.updateEmbeddedDocuments("JournalEntryPage", o);
	}, [t]), a = (0, j.useCallback)(async () => {
		let e = t.current, r = e.parent.pages.contents.toSorted((e, t) => e.sort - t.sort), i = r.findIndex((t) => t._id === e._id);
		if (i >= r.length - 1) return;
		let a = r[i + 1], o = [{
			_id: e.id,
			sort: a.sort
		}, {
			_id: a.id,
			sort: e.sort
		}];
		n.log("move up", o), await e.parent.updateEmbeddedDocuments("JournalEntryPage", o);
	}, [t]), o = (0, j.useCallback)(async () => {
		let e = t.current;
		e.title.level >= Ug || await e.parent.updateEmbeddedDocuments("JournalEntryPage", [{
			_id: e.id,
			title: {
				...e.title,
				level: e.title.level + 1
			}
		}]);
	}, [t]), s = (0, j.useCallback)(() => {
		let e = t.current;
		e.title.level <= Wg || e.parent.updateEmbeddedDocuments("JournalEntryPage", [{
			_id: e.id,
			title: {
				...e.title,
				level: e.title.level - 1
			}
		}]);
	}, [t]), l = e.parent.pages.contents.sort((e, t) => e.sort - t.sort), d = l.findIndex((t) => t._id === e._id), f = d > 0, p = d < l.length - 1, m = e.title.level < Ug, h = e.title.level > Wg;
	mg("Page", (0, j.useMemo)(() => /* @__PURE__ */ b(c, { children: [
		/* @__PURE__ */ y(M, {
			onClick: i,
			text: "Up",
			icon: me,
			disabled: !f
		}),
		/* @__PURE__ */ y(M, {
			onClick: a,
			text: "Down",
			icon: he,
			disabled: !p
		}),
		/* @__PURE__ */ y(M, {
			onClick: o,
			text: "Indent",
			icon: ye,
			disabled: !m
		}),
		/* @__PURE__ */ y(M, {
			onClick: s,
			text: "Outdent",
			icon: ge,
			disabled: !h
		}),
		/* @__PURE__ */ y(M, {
			onClick: r,
			text: "Delete",
			icon: _e
		})
	] }), [
		m,
		p,
		f,
		h,
		r,
		o,
		a,
		i,
		s
	]));
	let g = (0, j.useCallback)(async (t) => {
		await e.parent.updateEmbeddedDocuments("JournalEntryPage", [{
			_id: e.id,
			name: t
		}]);
	}, [e.id, e.parent]);
	return /* @__PURE__ */ b("div", {
		"data-testid": "editor",
		css: {
			position: "relative",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			gap: "0.5em"
		},
		children: [/* @__PURE__ */ y("div", {
			"data-testid": "name",
			children: /* @__PURE__ */ y(_, {
				value: e.name,
				onChange: g
			})
		}), /* @__PURE__ */ y("div", {
			"data-testid": "main-area",
			css: {
				flex: 1,
				position: "relative"
			},
			children: e.type === "image" ? /* @__PURE__ */ y(Vg, { page: e }, e.id) : e.type === "text" ? /* @__PURE__ */ y(Fg, { page: e }, e.id) : /* @__PURE__ */ y(Hg, { page: e }, e.id)
		})]
	});
};
Gg.displayName = "PageEditor";
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/vsc/index.mjs
function Kg(e) {
	return A({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "currentColor"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M19.5 0v1.5L21 3v19.5L19.5 24h-15L3 22.5V3l1.5-1.5V0H6v1.5h3V0h1.5v1.5h3V0H15v1.5h3V0h1.5zm-15 22.5h15V3h-15v19.5zM7.5 6h9v1.5h-9V6zm9 6h-9v1.5h9V12zm-9 6h9v1.5h-9V18z"
			},
			child: []
		}]
	})(e);
}
//#endregion
//#region src/components/journalEditorSheet/PageNavigation.tsx
var qg = "data-page-id", Jg = "pageId";
async function Yg(e, t, n) {
	let r = Math.max(0, ...e.pages.contents.map((e) => e.sort)) + CONST.SORT_INTEGER_DENSITY, i = RegExp(`^${n}\\s+(\\d+)$`, "i"), a = e.pages.contents.map((e) => i.exec(e.name)?.[1]).filter((e) => e && e.length > 0).map(Number), o = a.length ? Math.max(...a) + 1 : 1;
	return await e.createEmbeddedDocuments("JournalEntryPage", [{
		type: t,
		name: `${n} ${o}`,
		sort: r
	}], { renderSheet: !1 });
}
var Xg = ({ journalEntry: e, onNavigate: t, activePageId: n }) => {
	let { app: r } = D(), i = w(), a = Array.from(e.pages.values()).sort((e, t) => e.sort - t.sort), o = (0, j.useCallback)((e) => {
		e.preventDefault();
		let n = e.currentTarget.dataset[Jg];
		n !== void 0 && t(n);
	}, [t]), s = (0, j.useCallback)((e) => {
		r !== null && r._onDragStart(e);
	}, [r]), l = (0, j.useCallback)(async () => {
		let n = await Yg(e, "text", "New page");
		n && n[0].id && t(n[0].id);
	}, [e, t]), u = (0, j.useCallback)(async () => {
		let n = await Yg(e, "image", "New image");
		n && n[0].id && t(n[0].id);
	}, [e, t]), d = (0, j.useCallback)(async () => {
		let t = e.pages.contents.toSorted((e, t) => e.sort - t.sort), n = t.map((e, t) => ({
			_id: e.id,
			sort: (t + 1) * 1e3
		}));
		await e.updateEmbeddedDocuments("JournalEntryPage", n), ui.notifications?.info(`Renumbered ${t.length} pages`);
	}, [e]);
	return mg("Create new", (0, j.useMemo)(() => /* @__PURE__ */ b(c, { children: [/* @__PURE__ */ y(M, {
		onClick: l,
		icon: Kg,
		text: "Text"
	}), /* @__PURE__ */ y(M, {
		onClick: u,
		icon: be,
		text: "Image"
	})] }), [u, l])), mg("Core", (0, j.useMemo)(() => /* @__PURE__ */ y(c, { children: /* @__PURE__ */ y(M, {
		onClick: d,
		icon: ve,
		text: "Renumber"
	}) }), [d])), /* @__PURE__ */ y("div", {
		css: {
			...p,
			padding: "1px",
			overflowY: "auto",
			flex: 1,
			backgroundColor: i.colors.backgroundPrimary,
			border: `1px solid ${i.colors.accent}`
		},
		children: a.map((e) => /* @__PURE__ */ y(j.Fragment, { children: /* @__PURE__ */ b("a", {
			[qg]: e.id,
			onClick: o,
			onDragStart: s,
			draggable: !0,
			css: {
				textAlign: "left",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
				display: "block",
				padding: "0.5em",
				cursor: "pointer",
				textDecoration: "none",
				color: "inherit",
				backgroundColor: e.id === n ? i.colors.backgroundButton : "transparent",
				border: "1px solid transparent",
				marginLeft: `${(e.title.level - 1) * 1.5}em`,
				"&:hover": { border: `1px solid ${i.colors.accent}` }
			},
			children: [/* @__PURE__ */ y("span", {
				css: {
					display: "inline-block",
					width: "2em",
					verticalAlign: "baseline"
				},
				children: e.type === "text" ? /* @__PURE__ */ y(ee, {}) : /* @__PURE__ */ y(te, {})
			}), e.name]
		}) }, e.id))
	});
};
Xg.displayName = "PageNavigation";
//#endregion
//#region src/components/journalEditorSheet/JournalEditorSheet.tsx
var Zg = 3e4, Qg = () => {
	let { journalEntry: e } = E();
	(0, j.useEffect)(() => {
		let t = setInterval(() => {
			e.update({});
		}, Zg);
		return () => clearInterval(t);
	}, [e]);
	let t = w(), [n, r] = (0, j.useState)(null), i = (0, j.useCallback)((e) => {
		r(e);
	}, [r]), a = (0, j.useCallback)(() => {
		new S({ document: e }).render({ force: !0 });
	}, [e]), s = (0, j.useMemo)(() => /* @__PURE__ */ y(M, {
		onClick: a,
		icon: re,
		text: "Preview"
	}), [a]), c = (0, j.useCallback)((t) => {
		e.update({ name: t });
	}, [e]), u = e.flags.investigator?.extraCssClasses ?? "", f = (0, j.useCallback)((t) => {
		e.setFlag(l, o, t);
	}, [e]);
	return /* @__PURE__ */ y(le, { children: /* @__PURE__ */ b(d, {
		theme: t,
		mode: "large",
		css: {
			...p,
			display: "flex",
			gap: "0.5em",
			flexDirection: "column"
		},
		children: [
			/* @__PURE__ */ y(ce, {
				categories: [
					"Core",
					"Create new",
					"Page",
					"HTML",
					"History"
				],
				childrenCategory: "Core",
				children: s
			}),
			/* @__PURE__ */ b("div", {
				css: {
					display: "flex",
					flexDirection: "row",
					gap: "0.5em"
				},
				children: [/* @__PURE__ */ y(_, {
					value: e.name ?? "",
					onChange: c
				}), /* @__PURE__ */ y(_, {
					placeholder: "Journal CSS Classes",
					value: u,
					onChange: f
				})]
			}),
			/* @__PURE__ */ b("div", {
				css: {
					display: "flex",
					flexDirection: "row",
					gap: "0.5em",
					flex: 1
				},
				children: [/* @__PURE__ */ y("div", {
					"data-testid": "page-navigation",
					css: {
						flexBasis: "20em",
						minWidth: "20em",
						position: "relative"
					},
					children: /* @__PURE__ */ y(Xg, {
						journalEntry: e,
						onNavigate: i,
						activePageId: n
					})
				}), /* @__PURE__ */ y("div", {
					"data-testid": "page-editor",
					css: {
						flex: 1,
						overflow: "hidden",
						position: "relative"
					},
					children: n !== null && e.pages.has(n) ? /* @__PURE__ */ y(Gg, { page: e.pages.get(n) }) : /* @__PURE__ */ y(ue, {})
				})]
			})
		]
	}) });
};
Qg.displayName = "JournalEditorSheet";
//#endregion
export { Qg as JournalEditorSheet };
