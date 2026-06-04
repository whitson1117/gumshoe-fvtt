import { o as e } from "./chunk-BQCxAhux.js";
import { H as t, L as n, St as r, T as i, Tt as a, it as o, u as s, v as c, vt as l, x as u, xt as d, y as f } from "./AsyncTextInput-DMwutQQ3.js";
import { A as p, C as m, j as h, k as g } from "./ImagePickle-CJmXJxfo.js";
import { t as _ } from "./react-Cajsgul7.js";
import { t as v } from "./assertApplicationV2-BCfhKtnc.js";
import { c as y } from "./CheckButtons-jyaVJQGW.js";
//#region src/components/cards/functions.ts
function b(e) {
	if (e.length === 0) return u("Uncategorized");
	let t = i.cardCategories.get();
	return e.map((e) => {
		let r = n(t, e.categoryId)?.singleName;
		if (!r) return "";
		let i = e.nonlethal ? u("Nonlethal") : "", a = e.worth === 1 ? "" : `${e.worth}`;
		return `${r}${a && i ? ` (${a} ${i})` : a ? ` (${a})` : i ? ` (${i})` : ""}`;
	}).filter((e) => !!e).join(", ");
}
function x(e, t) {
	return e.reduce((e, n) => n.system.active ? e + (n.system.cardCategoryMemberships.find((e) => e.categoryId === t)?.worth ?? 0) : e, 0);
}
function S(e, t) {
	if (t === null) return [
		e.length.toString(),
		!1,
		!1
	];
	let n = x(e, t.id), r = e.map((e) => e.system.cardCategoryMemberships.find((e) => e.categoryId === t.id)?.nonlethal ?? !1).lastIndexOf(!1), i = x(e.slice(0, r + 1), t.id), a = "", o = !1, s = !1;
	return t.thresholdType === "limit" ? (a = `${i}/${t.threshold}`, s = i >= t.threshold) : t.thresholdType === "goal" ? (a = `${n}/${t.threshold}`, o = n >= t.threshold) : a = n.toString(), [
		a,
		o,
		s
	];
}
function C(e, t) {
	let n = Object.fromEntries(t.map((t) => [t.id, e.filter((e) => e.system.cardCategoryMemberships.some((e) => e.categoryId === t.id))])), r = t.map((e) => e.id);
	return [n, e.filter((e) => !e.system.cardCategoryMemberships.some((e) => r.includes(e.categoryId)))];
}
//#endregion
//#region src/components/cards/CardDisplay.tsx
var w = /* @__PURE__ */ e(_(), 1), T = ({ card: e, className: n, viewMode: r, draggable: a, onDragStart: o }) => {
	let l = (0, w.useContext)(s), [d, p] = (0, w.useState)(""), [m, h] = (0, w.useState)(""), g = b(e.system.cardCategoryMemberships), _ = e.sheet;
	v(_);
	let x = (0, w.useCallback)(() => {
		_.render({ force: !0 });
	}, [_]), S = r === "full";
	(0, w.useEffect)(() => {
		y(e.system.description).then(p);
	}, [e.system.description]), (0, w.useEffect)(() => {
		y(e.system.effects).then(h);
	}, [e.system.effects]);
	let C = i.cardCategories.get().find((t) => t.id === e.system.styleKeyCategoryId)?.styleKey, T = C ? l.cards.categories[C] : null, E = [
		g,
		e.system.active ? null : u("Inactive"),
		e.system.continuity ? u("Continuity") : null,
		t(e.system.supertitle) ? null : e.system.supertitle
	].filter(Boolean).join(" / ");
	return /* @__PURE__ */ f("div", {
		draggable: a,
		onDragStart: o,
		"data-item-id": e.id,
		tabIndex: 0,
		onClick: x,
		className: `investigator-card-display ${n} ${C}`,
		css: {
			...l.cards.base.backdropStyle,
			...T?.backdropStyle
		},
		children: [
			E && /* @__PURE__ */ c("p", {
				className: "supertitle",
				css: {
					...l.cards.base.supertitleStyle,
					...T?.supertitleStyle
				},
				children: E
			}),
			/* @__PURE__ */ c("h2", {
				className: "title",
				css: {
					...l.cards.base.titleStyle,
					...T?.titleStyle
				},
				children: e.name
			}),
			!t(e.system.subtitle) && /* @__PURE__ */ c("p", {
				className: "subtitle",
				css: {
					...l.cards.base.subtitleStyle,
					...T?.subtitleStyle
				},
				children: e.system.subtitle
			}),
			S && !t(d) && /* @__PURE__ */ c("p", {
				className: "description",
				css: {
					...l.cards.base.descriptionStyle,
					...T?.descriptionStyle
				},
				dangerouslySetInnerHTML: { __html: d }
			}),
			S && !t(m) && /* @__PURE__ */ c("p", {
				className: "effects",
				css: {
					...l.cards.base.effectStyle,
					...T?.effectStyle
				},
				dangerouslySetInnerHTML: { __html: m }
			})
		]
	});
};
T.displayName = "CardDisplay";
//#endregion
//#region src/module/items/equipment.ts
var E = {
	notes: new r({
		nullable: !1,
		required: !0
	}),
	categoryId: new r({
		nullable: !1,
		required: !0
	}),
	fields: g({
		nullable: !1,
		required: !0,
		initial: {}
	})
}, D = class extends a {
	constructor(...e) {
		super(...e), this.setCategoryId = async (e) => {
			let t = {
				categoryId: e,
				fields: {}
			}, n = i.equipmentCategories.get()[e]?.fields ?? {};
			for (let e in n) t.fields[e] = this.fields[e] ?? n[e].default;
			await this.parent.update({ system: t });
		}, this.setField = async (e, t) => {
			await this.parent.update({ system: { fields: { [e]: t } } });
		}, this.deleteField = async (e) => {
			await this.parent.update({ [`system.fields.-=${e}`]: null });
		}, this.setNotes = async (e) => {
			await this.parent.update({ system: { notes: e } });
		};
	}
	static defineSchema() {
		return E;
	}
	static migrateData(e) {
		return p(e, "notes", h), super.migrateData(e);
	}
};
function O(e) {
	return e instanceof m && e.type === "equipment";
}
function k(e) {
	if (!O(e)) throw Error("Expected an equipment item");
}
//#endregion
//#region src/module/items/weapon.ts
var A = {
	ability: new r({
		nullable: !1,
		required: !0,
		initial: "Scuffling"
	}),
	ammo: new d({
		min: new l({
			nullable: !1,
			required: !0,
			initial: 0
		}),
		max: new l({
			nullable: !1,
			required: !0,
			initial: 10
		}),
		value: new l({
			nullable: !1,
			required: !0,
			initial: 0
		})
	}, {
		nullable: !1,
		required: !0
	}),
	ammoPerShot: new l({
		nullable: !1,
		required: !0,
		initial: 1
	}),
	closeRangeDamage: new l({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	cost: new l({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	damage: new l({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	isCloseRange: new o({
		nullable: !1,
		required: !0
	}),
	isLongRange: new o({
		nullable: !1,
		required: !1
	}),
	isNearRange: new o({
		nullable: !1,
		required: !0
	}),
	isPointBlank: new o({
		nullable: !1,
		required: !0
	}),
	longRangeDamage: new l({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	nearRangeDamage: new l({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	notes: new r({
		nullable: !1,
		required: !0
	}),
	pointBlankDamage: new l({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	usesAmmo: new o({
		nullable: !1,
		required: !0,
		initial: !0
	})
}, j = class extends a {
	constructor(...e) {
		super(...e), this.setCost = (e) => this.parent.update({ system: { cost: e } }), this.setAmmoMax = (e) => this.parent.update({ system: { ammo: { max: e } } }), this.setAmmo = (e) => this.parent.update({ system: { ammo: { value: e } } }), this.reload = async () => {
			await this.parent.update({ system: { ammo: { value: this.ammo.max } } });
		}, this.setAmmoPerShot = async (e) => {
			await this.parent.update({ system: { ammoPerShot: e } });
		}, this.setUsesAmmo = async (e) => {
			await this.parent.update({ system: { usesAmmo: e } });
		}, this.setNotes = async (e) => {
			await this.parent.update({ system: { notes: e } });
		}, this.setAbility = async (e) => {
			await this.parent.update({ system: { ability: e } });
		}, this.setDamage = async (e) => {
			await this.parent.update({ system: { damage: e } });
		}, this.setPointBlankDamage = async (e) => {
			await this.parent.update({ system: { pointBlankDamage: e } });
		}, this.setCloseRangeDamage = async (e) => {
			await this.parent.update({ system: { closeRangeDamage: e } });
		}, this.setNearRangeDamage = async (e) => {
			await this.parent.update({ system: { nearRangeDamage: e } });
		}, this.setLongRangeDamage = async (e) => {
			await this.parent.update({ system: { longRangeDamage: e } });
		}, this.setIsPointBlank = async (e) => {
			await this.parent.update({ system: { isPointBlank: e } });
		}, this.setIsCloseRange = async (e) => {
			await this.parent.update({ system: { isCloseRange: e } });
		}, this.setIsNearRange = async (e) => {
			await this.parent.update({ system: { isNearRange: e } });
		}, this.setIsLongRange = async (e) => {
			await this.parent.update({ system: { isLongRange: e } });
		};
	}
	static defineSchema() {
		return A;
	}
	static migrateData(e) {
		return p(e, "notes", h), super.migrateData(e);
	}
};
function M(e) {
	return e instanceof m && e.type === "weapon";
}
function N(e) {
	if (!M(e)) throw Error("Item is not a weapon");
}
//#endregion
export { k as a, C as c, D as i, S as l, N as n, O as o, M as r, T as s, j as t, b as u };
