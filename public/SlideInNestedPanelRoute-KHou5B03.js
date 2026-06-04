import { o as e } from "./chunk-BQCxAhux.js";
import { _ as t, h as n, s as r, u as i, v as a, y as o } from "./AsyncTextInput-DMwutQQ3.js";
import { t as s } from "./react-Cajsgul7.js";
import { n as c, r as l } from "./fa6-VbZIMIgt.js";
import { l as u, r as d, u as f } from "./es-D2wyEWyQ.js";
//#region packages/minirouter/src/NavigationContext.tsx
var p = /* @__PURE__ */ e(s(), 1), m = /* @__PURE__ */ p.createContext(null);
//#endregion
//#region packages/minirouter/src/useNavigationContext.ts
function h() {
	let e = (0, p.useContext)(m);
	if (e === null) throw Error("useNavigationContext must be used within a Router");
	return e;
}
//#endregion
//#region packages/minirouter/src/components/Link.tsx
function g(e) {
	return typeof e != "string";
}
var _ = /* @__PURE__ */ (0, p.forwardRef)(({ children: e, from: t = "here", to: n = [], ...r }, i) => {
	let { navigate: o, parentSteps: s, currentStep: c } = h();
	if (g(t) && c?.direction !== t && !s.some((e) => e.direction === t)) throw Error(`Link has "from" set to ${t.description} but the current step is not a descendant of that step`);
	let l = (0, p.useCallback)(() => o(t, n), [
		t,
		o,
		n
	]), u = (0, p.useCallback)((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), l());
	}, [l]);
	return /* @__PURE__ */ a("a", {
		tabIndex: 0,
		onClick: (0, p.useCallback)((e) => {
			e.preventDefault(), l();
		}, [l]),
		onKeyDown: u,
		ref: i,
		...r,
		children: e
	});
});
_.displayName = "Link";
//#endregion
//#region packages/minirouter/src/outlets/OutletContext.ts
var v = (0, p.createContext)(null), y = (e) => {
	let t = (0, p.useId)(), n = (0, p.useContext)(v), { currentStep: r } = h(), i = r?.id ?? "", a = (0, p.useMemo)(() => `${i}-${t}`, [t, i]);
	return (0, p.useEffect)(() => {
		if (n) return n.register(a, e), () => {
			n.unregister(a);
		};
	}, [
		e,
		n,
		a
	]), n ? null : e;
};
//#endregion
//#region packages/minirouter/src/useRoute.tsx
function b({ direction: e, children: n }) {
	let r = h(), i = (0, p.useMemo)(() => ({
		navigate: (e, t) => {
			let n = t === "up", i = n ? [] : Array.isArray(t) ? t : [t], a;
			if (e === "root") a = i;
			else if (e === "here") a = [
				...r.parentSteps,
				...r.currentStep ? [r.currentStep] : [],
				...i
			];
			else if (e.match(r.currentStep)) a = [
				...r.parentSteps,
				r.currentStep,
				...i
			];
			else {
				let t = r.parentSteps.findLastIndex((t) => t.direction === e);
				if (t === -1) throw Error(`Cannot navigate from ${e.description}`);
				a = [...r.parentSteps.slice(0, t + 1), ...i];
			}
			if (n) {
				if (a.length === 0) throw Error("Cannot navigate up from root (from useRoute)");
				a = a.slice(0, -1);
			}
			r.navigate("root", a);
		},
		currentStep: r.childSteps[0],
		parentSteps: r.currentStep ? [...r.parentSteps, r.currentStep] : [],
		childSteps: r.childSteps.slice(1)
	}), [r]);
	return y(r.currentStep?.direction === e ? /* @__PURE__ */ a(t, { children: /* @__PURE__ */ a(m.Provider, {
		value: i,
		children: /* @__PURE__ */ a(v.Provider, {
			value: null,
			children: n
		})
	}) }) : null);
}
//#endregion
//#region packages/minirouter/src/components/Route.tsx
var x = ({ direction: e, children: t }) => b({
	direction: e,
	children: t
});
//#endregion
//#region packages/minirouter/src/components/Router.tsx
function S(e, t) {
	return JSON.stringify(e) === JSON.stringify(t);
}
var C = ({ children: e }) => {
	let [t, n] = (0, p.useState)([]), r = (0, p.useMemo)(() => ({
		navigate: (e, t) => {
			let r = t === "up" ? [] : Array.isArray(t) ? t : [t];
			n((n) => {
				let i;
				if (e === "root" || e === "here") i = r;
				else {
					let t = n.findLastIndex((t) => t.direction === e);
					if (t === -1) throw Error(`Cannot navigate from ${e.description}`);
					return [...n.slice(0, t + 1), ...r];
				}
				if (t === "up") {
					if (i.length === 0) throw Error("Cannot navigate up from root (says Router)");
					i = n.slice(0, n.length - 1);
				}
				return i = i.map((e, t) => n[t] && e.direction === n[t].direction && (e.params === n[t].params || S(e.params, n[t].params)) ? n[t] : e), i;
			});
		},
		currentStep: t[0],
		parentSteps: [],
		childSteps: t.slice(1)
	}), [t]);
	return /* @__PURE__ */ a(m.Provider, {
		value: r,
		children: e
	});
}, w = function(e) {
	let t = (e) => ({
		direction: t,
		params: e,
		id: r()
	});
	return t.description = e, t.match = (e) => e?.direction === t, t;
};
//#endregion
//#region packages/minirouter/src/useParams.ts
function T(e) {
	let { currentStep: t, parentSteps: n } = h(), r = [...n, ...t ? [t] : []].find((t) => t.direction === e)?.params;
	if (r === void 0) throw Error(`Could not find step for ${e.description}`);
	return r;
}
//#endregion
//#region src/components/nestedPanels/ArrowLink.tsx
var E = ({ back: e = !1, danger: t = !1, children: n, ...r }) => {
	let s = (0, p.useContext)(i);
	return /* @__PURE__ */ o(_, {
		...r,
		css: { "&&": { color: t ? s.colors.danger : void 0 } },
		children: [
			e && /* @__PURE__ */ a(c, { css: {
				marginRight: "0.3em",
				transform: "translateY(0.2em)"
			} }),
			/* @__PURE__ */ a("span", {
				css: { verticalAlign: "baseline" },
				children: n
			}),
			!e && /* @__PURE__ */ a(l, { css: {
				marginLeft: "0.3em",
				transform: "translateY(0.2em)"
			} })
		]
	});
};
E.displayName = "ArrowLink";
//#endregion
//#region packages/minirouter/src/absoluteCover.ts
var D = {
	position: "absolute",
	inset: 0
}, O = (e) => {
	let [n, r] = (0, p.useState)({}), i = (0, p.useCallback)((e, t) => {
		r((n) => ({
			...n,
			[e]: t
		}));
	}, [r]), o = (0, p.useCallback)((e) => {
		r((t) => {
			let n = { ...t };
			return delete n[e], n;
		});
	}, [r]), s = (0, p.useMemo)(() => ({
		register: i,
		unregister: o
	}), [i, o]);
	return {
		content: /* @__PURE__ */ a(t, { children: /* @__PURE__ */ a(v.Provider, {
			value: s,
			children: e
		}) }),
		registry: n
	};
}, k = .3, A = () => import("./es-D5hAaInq.js").then((e) => e.domAnimation), j = ({ children: e }) => /* @__PURE__ */ a(u, {
	strict: !0,
	features: A,
	children: e
});
//#endregion
//#region packages/minirouter/src/animated/easings.ts
function M(e) {
	return e * e * e;
}
function N(e) {
	return 1 - (1 - e) ** 3;
}
//#endregion
//#region packages/minirouter/src/animated/SlideInOutlet.tsx
var P = /* @__PURE__ */ (0, p.memo)(({ children: e, after: t = !1 }) => {
	let { content: n, registry: r } = O(e), i = /* @__PURE__ */ a("div", {
		css: {
			...D,
			pointerEvents: "none"
		},
		children: n
	});
	return /* @__PURE__ */ a(j, { children: /* @__PURE__ */ o("div", {
		css: {
			...D,
			pointerEvents: "none",
			overflow: "hidden"
		},
		children: [
			t && i,
			/* @__PURE__ */ a(f, {
				mode: "wait",
				children: Object.entries(r).filter(([e, t]) => t !== null).map(([e, t]) => /* @__PURE__ */ a(d.div, {
					className: `slide-in-outlet-slider-${e}`,
					css: {
						...D,
						width: "100%",
						zIndex: 2,
						pointerEvents: "none"
					},
					initial: { x: "100%" },
					animate: {
						x: 0,
						transition: {
							duration: k,
							ease: N
						}
					},
					exit: {
						x: "100%",
						zIndex: 1,
						transition: {
							duration: k,
							ease: M
						}
					},
					children: t
				}, e))
			}),
			t || i
		]
	}) });
});
P.displayName = "SlideinOutlet";
//#endregion
//#region packages/minirouter/src/animated/SlideInRoute.tsx
var F = {
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}, I = /* @__PURE__ */ (0, p.memo)(({ children: e, direction: n, backdropContent: r }) => {
	let i = b({
		direction: n,
		children: e
	}), s = b({
		direction: n,
		children: r
	}), { currentStep: c } = h();
	return /* @__PURE__ */ a(j, { children: /* @__PURE__ */ a("div", {
		css: {
			...F,
			overflow: "hidden",
			pointerEvents: "none"
		},
		children: /* @__PURE__ */ a(f, {
			mode: "wait",
			children: s && c && /* @__PURE__ */ o(t, { children: [s, /* @__PURE__ */ a(d.div, {
				css: {
					...F,
					width: "100%",
					zIndex: 2
				},
				initial: { x: "100%" },
				animate: {
					x: 0,
					transition: {
						duration: .3,
						ease: N
					}
				},
				exit: {
					x: "100%",
					zIndex: 1,
					transition: {
						duration: .3,
						ease: M
					}
				},
				children: i
			}, c.id)] })
		})
	}) });
});
I.displayName = "SlideInRoute";
//#endregion
//#region node_modules/.pnpm/focusable-selectors@0.8.4/node_modules/focusable-selectors/index.js
var L = {
	inert: ":not([inert]):not([inert] *)",
	negTabIndex: ":not([tabindex^=\"-\"])",
	disabled: ":not(:disabled)"
}, R = [
	`a[href]${L.inert}${L.negTabIndex}`,
	`area[href]${L.inert}${L.negTabIndex}`,
	`input:not([type="hidden"]):not([type="radio"])${L.inert}${L.negTabIndex}${L.disabled}`,
	`input[type="radio"]${L.inert}${L.negTabIndex}${L.disabled}`,
	`select${L.inert}${L.negTabIndex}${L.disabled}`,
	`textarea${L.inert}${L.negTabIndex}${L.disabled}`,
	`button${L.inert}${L.negTabIndex}${L.disabled}`,
	`details${L.inert} > summary:first-of-type${L.negTabIndex}`,
	`iframe${L.inert}${L.negTabIndex}`,
	`audio[controls]${L.inert}${L.negTabIndex}`,
	`video[controls]${L.inert}${L.negTabIndex}`,
	`[contenteditable]${L.inert}${L.negTabIndex}`,
	`[tabindex]${L.inert}${L.negTabIndex}`
].join(","), z = "3em", B = /* @__PURE__ */ (0, p.memo)(({ children: e, className: n, margin: r = z }) => {
	let s = (0, p.useContext)(i), { navigate: c, currentStep: l } = h(), u = (0, p.useRef)(null), d = (0, p.useRef)(null), f = (0, p.useCallback)((e) => {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), c("here", "up"));
	}, [c]);
	return (0, p.useEffect)(() => {
		l || (u.current?.querySelectorAll(R)[0])?.focus({ preventScroll: !0 });
	}, [l]), /* @__PURE__ */ a(t, { children: /* @__PURE__ */ o("section", {
		ref: d,
		className: n,
		onKeyDown: f,
		css: {
			position: "absolute",
			top: 0,
			left: r,
			right: 0,
			bottom: 0,
			padding: "1em",
			backgroundColor: s.colors.bgOpaquePrimary,
			boxShadow: `0 0 min(${r}, ${z}) 0 #0007`,
			overflow: "auto",
			borderLeft: `1px solid ${s.colors.controlBorder}`,
			display: "flex",
			flexDirection: "column",
			pointerEvents: "all"
		},
		children: [/* @__PURE__ */ a("div", {
			className: "nav-bar",
			children: /* @__PURE__ */ a(E, {
				back: !0,
				to: "up",
				children: "Back"
			})
		}), /* @__PURE__ */ a("div", {
			ref: u,
			className: "children-box",
			css: {
				flex: 1,
				paddingTop: "1em"
			},
			children: e
		})]
	}) });
});
B.displayName = "NestedPanel";
//#endregion
//#region src/components/nestedPanels/SlideInNestedPanelRoute.tsx
var V = () => {
	let { navigate: e } = h();
	return /* @__PURE__ */ a("div", {
		onClick: (t) => {
			t.preventDefault(), t.stopPropagation(), e("here", "up");
		},
		css: {
			...n,
			pointerEvents: "all"
		}
	});
}, H = /* @__PURE__ */ p.memo(({ children: e, direction: t, className: n, margin: r, closeOnClickOutside: i }) => /* @__PURE__ */ a(I, {
	direction: t,
	backdropContent: i ? /* @__PURE__ */ a(V, {}) : void 0,
	children: /* @__PURE__ */ a(B, {
		className: n,
		margin: r,
		children: e
	})
}));
H.displayName = "SlideInNestedPanelRoute";
//#endregion
export { T as a, x as c, E as i, _ as l, B as n, w as o, P as r, C as s, H as t, h as u };
