import { o as e } from "./chunk-BQCxAhux.js";
import { $ as t, $t as n, Bt as r, D as i, Dt as a, G as o, Lt as s, Qt as c, Rt as l, T as u, Vt as d, a as f, bt as p, s as m, t as h, tn as g, u as _, v, x as y, y as b, zt as x } from "./AsyncTextInput-DMwutQQ3.js";
import { O as S, p as C, y as w } from "./ImagePickle-CJmXJxfo.js";
import { t as T } from "./react-Cajsgul7.js";
import { r as E } from "./assertApplicationV2-BCfhKtnc.js";
//#region src/functions/textFunctions.ts
var D = window.foundry?.applications?.ux?.TextEditor?.implementation, O = o(async () => {
	let { FilterXSS: t, whiteList: n, escapeAttrValue: r } = await import("./lib-MTlaJRTY.js").then((t) => /* @__PURE__ */ e(t.default, 1));
	return new t({
		whiteList: Object.fromEntries(Object.entries(n).map(([e, t = []]) => [e, [
			...t,
			"style",
			"class"
		]])),
		onTagAttr: function(e, t, n) {
			let i = e === "img" && t === "src", a = t.startsWith("data-");
			if (i || a) return t + "=\"" + r(n) + "\"";
		}
	});
});
async function k(e) {
	if (D !== void 0) {
		let t = await D.enrichHTML(e, { secrets: !0 }), n = document.createElement("div");
		return n.innerHTML = t, n.querySelectorAll("secret-block").forEach((e) => {
			e.replaceWith(...Array.from(e.childNodes));
		}), n.innerHTML;
	} else return e;
}
var A = async (e) => (await O()).process(e), j = async (e) => await A(await k(e)), M = /* @__PURE__ */ e(T(), 1), N = ({ situationalModifier: { situation: e, modifier: t, id: n }, ability: r }) => {
	let i = (0, M.useContext)(_), a = r.system.isSituationalModifierActive(n);
	return /* @__PURE__ */ b("a", {
		onClick: () => {
			r.system.toggleSituationalModifier(n);
		},
		css: {
			display: "inline-block",
			position: "relative",
			background: i.colors.accentContrast,
			color: i.colors.accent,
			border: `1px solid ${i.colors.accent}`,
			fontSize: "0.9em",
			lineHeight: "1",
			borderRadius: "0.5em",
			padding: "0 0.5em",
			margin: "0 0.25em",
			boxShadow: a ? `0 0 0.7em 0.2em ${i.colors.glow}` : "none",
			opacity: a ? 1 : .5
		},
		children: [/* @__PURE__ */ b("span", {
			css: {
				display: "inline-block",
				position: "relative"
			},
			children: [
				e,
				": ",
				t >= 0 && "+",
				t
			]
		}), /* @__PURE__ */ v("span", {
			css: {
				display: "inline-block",
				position: "relative",
				paddingLeft: "0.25em",
				width: "1em",
				fontWeight: "bold"
			},
			children: a ? "✓" : "✗"
		})]
	});
};
N.displayName = "SituationalModifierBadge";
//#endregion
//#region src/components/abilities/AbilityBadges.tsx
var P = ({ ability: e, className: t }) => {
	C(e);
	let n = e.system.getVisibleSituationalModifiers(), r = e.system.getActiveUnlocks(), i = (0, M.useContext)(_);
	return /* @__PURE__ */ b("div", {
		className: t,
		css: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "end",
			flexWrap: "wrap",
			gap: "0.1em",
			marginBottom: r.length > 0 ? "0.25em" : void 0
		},
		children: [
			e.system.boost && /* @__PURE__ */ v(f, {
				css: {
					background: i.colors.accentContrast,
					color: i.colors.accent,
					outline: `1px solid ${i.colors.accent}`,
					fontSize: "0.9em",
					lineHeight: "1",
					borderRadius: "0.5em",
					padding: "0 0.5em",
					margin: "0 0.24em"
				},
				children: "Boosted"
			}),
			w(e) && e.system.isPushPool && /* @__PURE__ */ v(f, {
				css: {
					background: i.colors.accentContrast,
					color: i.colors.accent,
					outline: `1px solid ${i.colors.accent}`,
					fontSize: "0.9em",
					lineHeight: "1",
					borderRadius: "0.5em",
					padding: "0 0.5em",
					margin: "0 0.24em"
				},
				children: "Push Pool"
			}),
			r.map(({ description: e }, t) => /* @__PURE__ */ v("span", {
				css: {
					background: i.colors.accent,
					color: i.colors.accentContrast,
					fontSize: "0.9em",
					lineHeight: "1",
					borderRadius: "0.5em",
					padding: "0 0.5em",
					margin: "0 0.2em"
				},
				children: e
			}, t)),
			n.map((t) => /* @__PURE__ */ v(N, {
				situationalModifier: t,
				ability: e
			}, t.id))
		]
	});
};
P.displayName = "AbilityBadges";
//#endregion
//#region src/components/abilities/SpecListItem.tsx
var F = ({ onChange: e, index: t, value: n, disabled: r = !1 }) => /* @__PURE__ */ v(h, {
	value: n,
	onChange: (0, M.useCallback)((n) => {
		e(n, t);
	}, [t, e]),
	disabled: r
}), I = ({ ability: e }) => {
	C(e);
	let t = (0, M.useCallback)((t, n) => {
		let r = [...e.system.getSpecialities()];
		r[n] = t, e.system.setSpecialities(r);
	}, [e]);
	return /* @__PURE__ */ b("div", {
		css: {
			flex: 1,
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(6em, 1fr))",
			gridAutoColumns: "minMax(6em, 1fr)",
			gridAutoRows: "auto",
			gap: "0.5em",
			flexWrap: "wrap"
		},
		children: [e.system.getSpecialities().map((n, r) => /* @__PURE__ */ v(F, {
			value: n,
			onChange: t,
			index: r,
			disabled: !e.system.hasSpecialities
		}, r)), e.system.getSpecialitesCount() === 0 && /* @__PURE__ */ v("i", { children: "Rating must be at least 1 to add specialities" })]
	});
}, L = "CUSTOM_VALUE_TOKEN_DwSXJ76sDgTvXQwVCp8He", R = ({ value: e, onChange: t, pickerValues: n, validValues: r }) => {
	let [i, a] = (0, M.useState)(!n.includes(e));
	return {
		effectiveValue: i ? L : e,
		handleChange: (0, M.useCallback)((e) => {
			e.currentTarget.value === L ? a(!0) : (a(!1), t(e.currentTarget.value));
		}, [t]),
		showCustomValue: i,
		customValueToken: L,
		notFound: r?.includes(e) === !1
	};
}, z = ({ value: e, onChange: t, className: n, pickerValues: r, validValues: i }) => {
	let a = (0, M.useContext)(_), { customValueToken: o, effectiveValue: s, handleChange: c, showCustomValue: l, notFound: u } = R({
		value: e,
		onChange: t,
		pickerValues: r,
		validValues: i
	});
	return /* @__PURE__ */ b("div", {
		css: {
			display: "flex",
			flexDirection: "column",
			gap: "0.2em"
		},
		className: n,
		children: [
			/* @__PURE__ */ b("select", {
				value: s,
				onChange: c,
				children: [r.map((e) => /* @__PURE__ */ v("option", { children: e }, e)), /* @__PURE__ */ v("option", {
					value: o,
					children: y("Other")
				})]
			}),
			l && /* @__PURE__ */ v(h, {
				value: e,
				onChange: t
			}),
			u && /* @__PURE__ */ v("span", {
				css: {
					background: a.colors.danger,
					color: a.colors.accentContrast,
					display: "inline-block",
					padding: "0 0.2em",
					borderRadius: "0.2em"
				},
				children: /* @__PURE__ */ v(f, { children: "NotFound!" })
			})
		]
	});
};
z.displayName = "OtherableDropDown";
//#endregion
//#region src/components/inputs/RichTextEditor.tsx
var B = ({ className: e = "", html: n, onSave: r, name: i }) => {
	let { doc: a } = E(), o = (0, M.useRef)(null), s = (0, M.useContext)(_), [c, l] = (0, M.useState)(""), u = (0, M.useRef)(c);
	return (0, M.useEffect)(() => {
		j(n).then((e) => {
			l(e), u.current = e;
		});
	}, [n]), (0, M.useEffect)(() => {
		let e = o.current?.getElementsByTagName("prose-mirror").item(0);
		if (e instanceof foundry.applications.elements.HTMLProseMirrorElement && e.open) {
			t.log("editor still present, not creating a new one");
			return;
		} else e?.remove();
		let s = foundry.applications.elements.HTMLProseMirrorElement.create({
			toggled: !0,
			collaborate: !0,
			documentUUID: a.uuid,
			enriched: c,
			name: i,
			value: n
		});
		s.addEventListener("save", () => {
			r(s.value), setTimeout(() => {
				let e = s.getElementsByClassName("editor-content").item(0);
				e && (t.log("updating editor content", u.current), e.innerHTML = u.current);
			}, 0);
		}), o.current?.appendChild(s);
		let l = o.current;
		return () => {
			s.open ? t.log("editor open, not removing") : (t.log("removing editor"), s.remove(), l && (l.innerHTML = ""));
		};
	}, [
		a.uuid,
		c,
		n,
		i,
		r
	]), /* @__PURE__ */ v("div", {
		ref: o,
		css: {
			backgroundColor: s.colors.backgroundPrimary,
			border: `1px solid ${s.colors.controlBorder}`,
			position: "absolute",
			inset: "0px",
			".prosemirror": {
				position: "absolute",
				inset: "0.5em",
				"button.icon.toggle": {
					position: "absolute",
					top: "0px",
					right: "0px",
					width: "2em",
					height: "2em"
				},
				".menu-container": {
					flexBasis: "min-content",
					menu: {
						position: "static",
						backgroundColor: "transparent",
						padding: 0
					}
				}
			}
		},
		className: `${e} `
	});
}, V = (0, M.createContext)(null), H = ({ spend: e, ability: t, weapon: o, bonusPool: f, setSpend: m, setBonusPool: h }) => async ({ rangeName: _, rangeDamage: v }) => {
	if (i(game), C(t), o.actor === null) return;
	let y = o.system.damage, b = u.useBoost.get() && t !== void 0 && t.system.boost, T = b ? 1 : 0, E = "1d6 + @spend", D = { spend: e };
	b && (E += " + @boost", D.boost = T);
	let O = u.useNpcCombatBonuses.get() && t?.isOwned && t.parent && S(t.parent) && w(t), k = t.parent;
	O && (E += " + @npcCombatBonus", S(k) && (D.npcCombatBonus = k.system.combatBonus), E += " + @abilityCombatBonus", D.abilityCombatBonus = t.system.combatBonus);
	let A = new Roll(E, D);
	await A.evaluate(), A.dice[0].options = { rollOrder: 1 }, A.dice[0].options.rollOrder = 1;
	let j = "1d6 + @damage + @rangeDamage", M = {
		damage: y,
		rangeDamage: v
	};
	O && (j += " + @npcDamageBonus", S(k) && (M.npcDamageBonus = k.system.damageBonus), j += " + @abilityDamageBonus", M.abilityDamageBonus = t.system.damageBonus);
	let N = new Roll(j, M);
	await N.evaluate(), N.dice[0].options.rollOrder = 2;
	let P = p.fromRolls([A, N]), F = Roll.fromTerms([P]), I = t?._id ?? "", L = o.actor?._id ?? "", R = o._id;
	F.toMessage({
		speaker: ChatMessage.getSpeaker({ actor: o.actor }),
		content: `
    <div
      class="${a}"
      ${x}="${I}"
      ${s}="${L}"
      ${r}="${d}"
      ${n}="${_}"
      ${g}="${R}"
      ${c}="${o.name}"
      ${l}="${o.img}"
    />
  `
	});
	let z = t?.system.pool ?? 0, B = Math.max(0, Number(e) - f), V = Math.max(0, z - B), H = Math.max(0, f - Number(e));
	await t?.system.setPool(V), h(H), m(0), await o.system.setAmmo(Math.max(0, o.system.ammo.value - o.system.ammoPerShot));
}, U = ({ options: e, selected: t, size: n = 1.4, onChange: r }) => {
	let i = (0, M.useContext)(_), a = (0, M.useCallback)((e) => {
		r(Number(e.currentTarget.value));
	}, [r]), o = (0, M.useMemo)(() => m(), []);
	return /* @__PURE__ */ v("div", {
		css: {
			display: "flex",
			flexDirection: "row",
			gap: "0.3em",
			lineHeight: n,
			"input[type=radio]": {
				display: "none",
				"+label": {
					padding: "0",
					flex: 1,
					textAlign: "center",
					fontSize: n.toString() + "em",
					fontWeight: "bold",
					border: "2px groove white",
					backgroundColor: i.colors.backgroundPrimary,
					paddingBottom: "0.3em",
					borderRadius: "0.2em",
					":hover": { textShadow: `0 0 0.3em ${i.colors.glow}` }
				},
				"&:checked+label": {
					border: "2px inset white",
					backgroundColor: i.colors.accent,
					color: i.colors.accentContrast,
					textShadow: `0 0 0.3em ${i.colors.glow}`
				},
				"&[disabled]+label": {
					opacity: .3,
					":hover": { textShadow: "none" }
				}
			}
		},
		children: e.map(({ label: e, value: n, enabled: r, hover: i }) => {
			let s = m();
			return /* @__PURE__ */ b(M.Fragment, { children: [/* @__PURE__ */ v("input", {
				name: o,
				id: s,
				type: "radio",
				value: n,
				checked: n === t,
				onChange: a,
				disabled: !r
			}), /* @__PURE__ */ v("label", {
				htmlFor: s,
				tabIndex: 0,
				title: i,
				children: e
			})] }, n);
		})
	});
};
//#endregion
export { z as a, j as c, B as i, H as n, I as o, V as r, P as s, U as t };
