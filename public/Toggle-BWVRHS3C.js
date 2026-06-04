import { o as e } from "./chunk-BQCxAhux.js";
import { $ as t, a as n, n as r, o as i, r as a, s as o, u as s, v as c, y as l } from "./AsyncTextInput-DMwutQQ3.js";
import { n as u, t as d } from "./react-Cajsgul7.js";
import { a as f, t as p } from "./Button-wjG7vDMi.js";
//#region src/components/TabContainer.tsx
var m = /* @__PURE__ */ e(d(), 1), h = ({ tabs: e, defaultTab: t }) => {
	let [r, i] = (0, m.useState)(t), [a, u] = (0, m.useState)(t), [d, f] = (0, m.useTransition)(), p = (0, m.useMemo)(() => e.filter((e) => !!e), [e]), h = (0, m.useMemo)(() => p.find((e) => e.id === r), [r, p]), g = (0, m.useCallback)((e) => {
		u(e.currentTarget.value), f(() => {
			i(e.currentTarget.value);
		});
	}, []), _ = (0, m.useContext)(s), v = (0, m.useMemo)(() => o(), []);
	return /* @__PURE__ */ l("div", {
		className: "tab-container-outer",
		css: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: "flex",
			flexDirection: "column",
			".tab-strip": {
				display: "flex",
				flexDirection: "row"
			},
			"input[type=radio]": {
				display: "none",
				"+label": _.tabStyle,
				"&:checked+label": _.tabActiveStyle,
				"&[disabled]+label": {
					opacity: .3,
					":hover": { textShadow: "none" }
				}
			}
		},
		children: [/* @__PURE__ */ c("div", {
			className: "tab-strip",
			children: p.map(({ id: e, label: t, translate: i = !0 }, s) => {
				let u = o();
				return /* @__PURE__ */ l(m.Fragment, { children: [
					/* @__PURE__ */ c("input", {
						name: v,
						id: u,
						type: "radio",
						value: e,
						checked: e === r,
						onChange: g
					}),
					/* @__PURE__ */ c("label", {
						htmlFor: u,
						tabIndex: 0,
						className: _.tabClass,
						css: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							opacity: d && e === a ? .5 : 1,
							font: _.displayFont
						},
						children: typeof t == "string" && i ? /* @__PURE__ */ c(n, { children: t }) : t
					}),
					s < p.length - 1 && /* @__PURE__ */ c("div", { css: _.tabSpacerStyle })
				] }, e);
			})
		}), /* @__PURE__ */ c("div", {
			className: `tab-content ${_.panelClass ?? ""}`,
			css: {
				flex: 1,
				position: "relative",
				overflow: "auto",
				padding: "0.5em",
				..._.tabContentStyle
			},
			children: h?.content
		})]
	}, r);
}, g = (e, t, n, r) => {
	let i = Number(e) + t;
	return Number.isNaN(i) && (i = 0), r !== void 0 && (i = Math.min(r, i)), n !== void 0 && (i = Math.max(n, i)), i.toString();
}, _ = /* @__PURE__ */ m.memo(({ value: e, onChange: t, className: n, min: i, max: o, disabled: s, noPlusMinus: u = !1, smallButtons: d = !1 }) => {
	let f = (0, m.useCallback)((e) => {
		let t = Number(e);
		return Number.isNaN(t) ? {
			state: "failed",
			reasons: ["Not a number"]
		} : i !== void 0 && t < i ? {
			state: "failed",
			reasons: ["Too low"]
		} : o !== void 0 && t > o ? {
			state: "failed",
			reasons: ["Too high"]
		} : {
			state: "succeeded",
			value: t
		};
	}, [o, i]), h = (0, m.useCallback)((e) => {
		let n = f(e);
		n.state === "succeeded" && t(n.value);
	}, [t, f]), { display: _, onBlur: v, onChange: y, onFocus: b } = a((e || 0).toString(), h), x = (0, m.useCallback)(() => {
		y(g(_, 1, i, o));
	}, [
		_,
		o,
		i,
		y
	]), S = (0, m.useCallback)(() => {
		y(g(_, -1, i, o));
	}, [
		_,
		o,
		i,
		y
	]), C = f(_);
	return /* @__PURE__ */ l("div", {
		css: {
			display: "flex",
			flexDirection: "row",
			button: {
				lineHeight: "inherit",
				flexBasis: "min-content",
				flex: 0,
				padding: "0 0.25em",
				fontSize: d ? "0.6em" : void 0
			}
		},
		className: n,
		children: [
			(u === void 0 || !u) && /* @__PURE__ */ c(p, {
				onClick: S,
				disabled: s,
				children: /* @__PURE__ */ c("i", { className: "fa fa-minus" })
			}),
			(u === void 0 || !u) && /* @__PURE__ */ c(p, {
				onClick: x,
				disabled: s,
				children: /* @__PURE__ */ c("i", { className: "fa fa-plus" })
			}),
			/* @__PURE__ */ c(r, {
				validation: C,
				css: {
					flex: 1,
					flexBasis: "min-content",
					userSelect: "text"
				},
				value: _,
				onChange: y,
				onFocus: b,
				onBlur: v,
				disabled: s
			})
		]
	});
});
_.displayName = "AsyncNumberInput", typeof window < "u" && window.document && window.document.createElement;
function v(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function y(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function b(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = y(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : y(e[t], null);
			}
		};
	};
}
function x(...e) {
	return m.useCallback(b(...e), e);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-context/dist/index.mjs
var S = /* @__PURE__ */ e(u(), 1);
function C(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = m.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = m.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, S.jsx)(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = m.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => m.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return m.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, w(i, ...t)];
}
function w(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return m.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var T = globalThis?.document ? m.useLayoutEffect : () => {}, E = m.useInsertionEffect || T;
function D({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = O({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = m.useRef(e !== void 0);
		m.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, m.useCallback((t) => {
		if (s) {
			let n = k(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function O({ defaultProp: e, onChange: t }) {
	let [n, r] = m.useState(e), i = m.useRef(n), a = m.useRef(t);
	return E(() => {
		a.current = t;
	}, [t]), m.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function k(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-previous/dist/index.mjs
function A(e) {
	let t = m.useRef({
		value: e,
		previous: e
	});
	return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-size/dist/index.mjs
function j(e) {
	let [t, n] = m.useState(void 0);
	return T(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function M(e) {
	let t = /* @__PURE__ */ N(e), n = m.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = m.Children.toArray(r), o = a.find(F);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? m.Children.count(e) > 1 ? m.Children.only(null) : m.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ (0, S.jsx)(t, {
				...i,
				ref: n,
				children: m.isValidElement(e) ? m.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ (0, S.jsx)(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function N(e) {
	let t = m.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (m.isValidElement(n)) {
			let e = L(n), i = I(r, n.props);
			return n.type !== m.Fragment && (i.ref = t ? b(t, e) : e), m.cloneElement(n, i);
		}
		return m.Children.count(n) > 1 ? m.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var P = Symbol("radix.slottable");
function F(e) {
	return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === P;
}
function I(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function L(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_1181ea5061ec9212248424669240e4ec/node_modules/@radix-ui/react-primitive/dist/index.mjs
var R = /* @__PURE__ */ e(f(), 1), z = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ M(`Primitive.${t}`), r = m.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, S.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function B(e, t) {
	e && R.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.2.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_e3738c514c10df2ef7e24af5ee461853/node_modules/@radix-ui/react-switch/dist/index.mjs
var V = "Switch", [H, ee] = C(V), [U, W] = H(V), G = m.forwardRef((e, t) => {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c = "on", onCheckedChange: l, form: u, ...d } = e, [f, p] = m.useState(null), h = x(t, (e) => p(e)), g = m.useRef(!1), _ = f ? u || !!f.closest("form") : !0, [y, b] = D({
		prop: i,
		defaultProp: a ?? !1,
		onChange: l,
		caller: V
	});
	return /* @__PURE__ */ (0, S.jsxs)(U, {
		scope: n,
		checked: y,
		disabled: s,
		children: [/* @__PURE__ */ (0, S.jsx)(z.button, {
			type: "button",
			role: "switch",
			"aria-checked": y,
			"aria-required": o,
			"data-state": X(y),
			"data-disabled": s ? "" : void 0,
			disabled: s,
			value: c,
			...d,
			ref: h,
			onClick: v(e.onClick, (e) => {
				b((e) => !e), _ && (g.current = e.isPropagationStopped(), g.current || e.stopPropagation());
			})
		}), _ && /* @__PURE__ */ (0, S.jsx)(Y, {
			control: f,
			bubbles: !g.current,
			name: r,
			value: c,
			checked: y,
			required: o,
			disabled: s,
			form: u,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
G.displayName = V;
var K = "SwitchThumb", q = m.forwardRef((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = W(K, n);
	return /* @__PURE__ */ (0, S.jsx)(z.span, {
		"data-state": X(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
q.displayName = K;
var J = "SwitchBubbleInput", Y = m.forwardRef(({ __scopeSwitch: e, control: t, checked: n, bubbles: r = !0, ...i }, a) => {
	let o = m.useRef(null), s = x(o, a), c = A(n), l = j(t);
	return m.useEffect(() => {
		let e = o.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (c !== n && i) {
			let t = new Event("click", { bubbles: r });
			i.call(e, n), e.dispatchEvent(t);
		}
	}, [
		c,
		n,
		r
	]), /* @__PURE__ */ (0, S.jsx)("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: n,
		...i,
		tabIndex: -1,
		ref: s,
		style: {
			...i.style,
			...l,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
Y.displayName = J;
function X(e) {
	return e ? "checked" : "unchecked";
}
var Z = G, Q = q, $ = /* @__PURE__ */ (0, m.memo)(({ checked: e, onChange: n, className: r }) => {
	let a = (0, m.useContext)(i), o = (0, m.useContext)(s);
	return /* @__PURE__ */ c(Z, {
		id: a,
		className: r,
		css: {
			fontSize: "0.9em",
			width: "3em",
			height: "1.5em",
			padding: 0,
			margin: 0,
			backgroundColor: o.colors.backgroundButton,
			borderRadius: "9999px",
			position: "relative",
			top: "0.1em",
			boxShadow: `0 0 2px 0 ${o.colors.text}`,
			"&:focus": { boxShadow: `0 0 4px 0 ${o.colors.text}` },
			"&[data-state='checked']": { backgroundColor: o.colors.accent },
			"&&": {
				borderColor: o.colors.controlBorder,
				boxShadow: "none"
			}
		},
		checked: e,
		onCheckedChange: (e) => {
			t.log("checked", e), n(e);
		},
		children: /* @__PURE__ */ c(Q, { css: {
			display: "block",
			width: "1em",
			height: "1em",
			backgroundColor: o.colors.text,
			borderRadius: "9999px",
			boxShadow: `0 0 2px 0 ${o.colors.text} inset`,
			transition: "transform 100ms",
			transform: "translateX(2px)",
			willChange: "transform",
			"&[data-state='checked']": {
				transform: "translateX(calc(2em - 5px))",
				backgroundColor: o.colors.accentContrast
			}
		} })
	});
});
$.displayName = "Toggle";
//#endregion
export { j as a, C as c, v as d, _ as f, M as i, b as l, z as n, D as o, h as p, B as r, T as s, $ as t, x as u };
