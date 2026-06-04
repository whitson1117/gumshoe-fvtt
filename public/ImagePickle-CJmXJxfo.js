import { o as e } from "./chunk-BQCxAhux.js";
import { Bt as t, D as n, Dt as r, Et as i, Gt as a, Ht as o, I as s, Jt as c, Kt as l, L as u, Lt as d, Mt as ee, Ot as te, Qt as f, Rt as p, St as m, T as h, Tt as g, Ut as ne, Wt as re, Xt as _, Yt as ie, Zt as ae, _ as oe, b as v, dn as se, en as y, ft as ce, it as b, pt as le, qt as ue, rt as x, s as S, u as C, v as w, vt as T, x as E, xt as D, y as O, yt as de, zt as k } from "./AsyncTextInput-DMwutQQ3.js";
import { t as fe } from "./immer-DHo-sOgH.js";
import { t as pe } from "./react-Cajsgul7.js";
import { r as A } from "./assertApplicationV2-BCfhKtnc.js";
//#region src/module/actors/InvestigatorActor.ts
var j = class extends Actor {
	constructor(...e) {
		super(...e), this.setName = (e) => this.update({ name: e }), this._currentCombatantEffectsData = this._getCombatantEffectsData(), this._combatantEffectsHandlers = /* @__PURE__ */ new Set(), this._currentImmutableData = this.toJSON(), this._immutableDataUpdateHandlers = /* @__PURE__ */ new Set();
	}
	_getCombatantEffectsData() {
		return this.temporaryEffects.filter((e) => !e.statuses.has(CONFIG.specialStatusEffects.DEFEATED)).map((e) => e.toJSON());
	}
	registerCombatantEffectsHandler(e) {
		return this._combatantEffectsHandlers.add(e), e(this._currentCombatantEffectsData), () => this._combatantEffectsHandlers.delete(e);
	}
	_updateCombatantEffectsData() {
		let e = this._getCombatantEffectsData();
		if (!(e.length === this._currentCombatantEffectsData.length && e.every((e, t) => e._id === this._currentCombatantEffectsData[t]._id))) {
			this._currentCombatantEffectsData = e;
			for (let e of this._combatantEffectsHandlers.values()) e(this._currentCombatantEffectsData);
		}
	}
	_onEmbeddedDocumentChange() {
		super._onEmbeddedDocumentChange(), this._updateCombatantEffectsData();
	}
	registerImmutableDataUpdateHandler(e) {
		return this._immutableDataUpdateHandlers.add(e), e(this._currentImmutableData), () => this._immutableDataUpdateHandlers.delete(e);
	}
	_updateImmutableData(e) {
		let t = fe(this._currentImmutableData, (t) => {
			foundry.utils.mergeObject(t, e);
		});
		if (t !== this._currentImmutableData) {
			this._currentImmutableData = t;
			for (let e of this._immutableDataUpdateHandlers.values()) e(this._currentImmutableData);
		}
	}
	_onUpdate(e, t, n) {
		super._onUpdate(e, t, n), this._updateImmutableData(e);
	}
}, M = (e) => typeof e == "string" ? e : e?.html ?? "", me = foundry.utils.hasProperty, he = foundry.utils.getProperty, ge = foundry.utils.setProperty;
function N(e, t, n) {
	if (!me(e, t)) return;
	let r = e, i = t;
	if (i.includes(".")) {
		let t = i.split(".");
		r = he(e, t.slice(0, -1).join(".")), i = t.at(-1);
	}
	let a = r[i], o = Object.getOwnPropertyDescriptor(r, i);
	o && !o.writable || ge(r, i, n(a));
}
//#endregion
//#region src/module/schemaFields.ts
var _e = () => new i(new D({
	min: new T({
		nullable: !0,
		required: !1,
		initial: 0
	}),
	max: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	value: new T({
		nullable: !1,
		required: !0,
		initial: 0
	})
}), {
	nullable: !1,
	required: !0,
	validateKey: (e) => typeof e == "string"
}), ve = () => new i(new T({
	nullable: !1,
	required: !0,
	initial: 0
}), {
	nullable: !1,
	required: !0,
	initial: { hitThreshold: 3 },
	validateKey: (e) => typeof e == "string"
}), ye = (e) => new de(e), P = () => ({
	initiativeAbility: new m({
		nullable: !1,
		required: !0,
		initial: ""
	}),
	initiativePassingTurns: new T({
		nullable: !1,
		required: !0,
		initial: 1,
		min: 0
	}),
	mwInjuryStatus: new m({
		nullable: !1,
		required: !0,
		choices: [
			"uninjured",
			"hurt",
			"down",
			"unconscious",
			"dead"
		],
		initial: "uninjured"
	}),
	resources: _e(),
	stats: ve()
});
//#endregion
//#region src/module/actors/ActiveCharacterModel.ts
function F(e) {
	return e instanceof Item && (e.type === "investigativeAbility" || e.type === "generalAbility");
}
function I(e) {
	return e instanceof Item && e.type === "generalAbility";
}
function L(e) {
	return e instanceof Item && e.type === "investigativeAbility";
}
function be(e) {
	return e instanceof Item && e.type === "equipment";
}
function xe(e) {
	return e instanceof Item && e.type === "weapon";
}
var R = class extends g {
	constructor(...e) {
		super(...e), this.broadcastUserMessage = async (e, t = {}) => {
			n(game);
			let r = {
				user: game.user.id,
				speaker: ChatMessage.getSpeaker({ alias: game.user.name ?? "" }),
				content: E(e, {
					ActorName: this.parent.name ?? "",
					UserName: game.user.name ?? "",
					...t
				})
			};
			await ChatMessage.create(r, {});
		}, this.refresh = async () => {
			let e = Array.from(this.parent.items).flatMap((e) => F(e) && e.system.rating !== e.system.pool && !e.system.excludeFromGeneralRefresh ? [{
				_id: e.id,
				system: { pool: e.system.rating }
			}] : []);
			this.shouldBroadcastRefreshes() && await this.broadcastUserMessage("RefreshedAllOfActorNamesAbilities"), await this.parent.updateEmbeddedDocuments("Item", e);
		}, this.confirmRefresh = async () => {
			await v({
				message: "Refresh all of (actor name)'s abilities?",
				confirmText: "Refresh",
				cancelText: "Cancel",
				confirmIconClass: "fa-sync",
				values: { ActorName: this.parent.name ?? "" }
			}) && await this.refresh();
		}, this.setPassingTurns = async (e) => {
			await this.parent.update({ system: { initiativePassingTurns: e } });
		}, this.setInitiativeAbility = async (e) => {
			await this.parent.update({ system: { initiativeAbility: e } }), this.parent.token?.combatant && await this.parent.rollInitiative({ rerollInitiative: !0 });
		}, this.setMwInjuryStatus = async (e) => {
			await this.parent.update({ system: { mwInjuryStatus: e } });
		};
	}
	getAbilities() {
		return this.parent.items.filter((e) => F(e));
	}
	getGeneralAbilities() {
		return this.getAbilities().filter(I);
	}
	getGeneralAbilityNames() {
		return this.getGeneralAbilities().map((e) => e.name).filter((e) => e !== null);
	}
	getEquipment() {
		return this.parent.items.filter(be);
	}
	getWeapons() {
		return this.parent.items.filter((e) => xe(e));
	}
	getTrackerAbilities() {
		return this.getAbilities().filter((e) => F(e) && e.system.showTracker);
	}
	shouldBroadcastRefreshes() {
		return n(game), !game.user.isGM;
	}
	getCategorizedAbilities(e, t) {
		let n = {}, r = {}, i = h.investigativeAbilityCategories.get(), a = h.generalAbilityCategories.get();
		for (let e of i) n[e] = [];
		for (let e of a) r[e] = [];
		for (let i of this.parent.items.values()) if (F(i) && !(e && i.system.hideIfZeroRated && i.system.rating === 0)) {
			if (L(i)) {
				let e = i.system.categoryId || "Uncategorised";
				n[e] === void 0 && (n[e] = []), n[e].push(i);
			} else if (I(i)) {
				if (t && i.system.isPushPool) continue;
				let e = i.system.categoryId || "Uncategorised";
				r[e] === void 0 && (r[e] = []), r[e].push(i);
			}
		}
		return {
			investigativeAbilities: n,
			generalAbilities: r
		};
	}
	getPushPool() {
		return this.parent.items.find((e) => I(e) && e.system.isPushPool);
	}
	getPushPoolWarnings() {
		let e = [], t = this.parent.items.filter((e) => I(e) && e.system.isPushPool), n = this.parent.items.filter((e) => L(e) && e.system.isQuickShock);
		return t.length > 1 && e.push(E("TooManyPushPools")), n.length > 1 && t.length < 1 && e.push(E("QuickShockAbilityWithoutPushPool")), n.length === 0 && t.length > 0 && e.push(E("PushPoolWithoutQuickShockAbility")), e;
	}
}, Se = {
	...P(),
	combatBonus: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	damageBonus: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	gmNotes: new m({
		nullable: !1,
		required: !0
	}),
	notes: new m({
		nullable: !1,
		required: !0
	}),
	sheetTheme: new m({ nullable: !0 })
}, Ce = class extends R {
	constructor(...e) {
		super(...e), this.setNotes = (e) => this.parent.update({ system: { notes: e } }), this.setGMNotes = (e) => this.parent.update({ system: { gmNotes: e } }), this.setCombatBonus = async (e) => {
			await this.parent.update({ system: { combatBonus: e } });
		}, this.setDamageBonus = async (e) => {
			await this.parent.update({ system: { damageBonus: e } });
		};
	}
	static defineSchema() {
		return Se;
	}
	static migrateData(e) {
		return N(e, "notes", M), N(e, "gmNotes", M), super.migrateData(e);
	}
	getSheetThemeName() {
		return this.sheetTheme || h.defaultThemeName.get();
	}
};
function z(e) {
	return e instanceof j && e.type === "npc";
}
function we(e) {
	if (!z(e)) throw Error("Expected an NPC actor");
}
//#endregion
//#region src/module/actors/types.ts
function B(e) {
	return Z(e) || z(e);
}
function Te(e) {
	if (!B(e)) throw Error("Expected a PC or NPC actor");
}
//#endregion
//#region src/module/items/InvestigatorItem.ts
var V = class extends Item {
	constructor(...e) {
		super(...e), this.setName = (e) => this.update({ name: e });
	}
	getThemeName() {
		let e = h.defaultThemeName.get(), t = this.actor;
		return this.isOwned && t && B(t) && t.system.getSheetThemeName() || e;
	}
}, Ee = {
	active: new b({
		nullable: !1,
		required: !0,
		initial: !0
	}),
	cardCategoryMemberships: new x(new D({
		categoryId: new m({
			nullable: !1,
			required: !0
		}),
		nonlethal: new b({
			nullable: !1,
			required: !0
		}),
		worth: new T({
			nullable: !1,
			required: !0
		})
	}, {
		nullable: !1,
		required: !0
	})),
	continuity: new b({
		nullable: !1,
		required: !0
	}),
	description: new m({
		nullable: !1,
		required: !0
	}),
	effects: new m({
		nullable: !1,
		required: !0
	}),
	flags: new x(new m({
		nullable: !1,
		required: !0
	}), {
		nullable: !1,
		required: !0
	}),
	styleKeyCategoryId: new m({
		nullable: !0,
		required: !0
	}),
	subtitle: new m({
		nullable: !1,
		required: !0
	}),
	supertitle: new m({
		nullable: !1,
		required: !0
	}),
	title: new m({
		nullable: !1,
		required: !0
	}),
	type: new m({
		nullable: !1,
		required: !0
	})
}, De = class extends g {
	constructor(...e) {
		super(...e), this.setActive = async (e) => {
			await this.parent.update({ system: { active: e } });
		}, this.setContinuity = async (e) => {
			await this.parent.update({ system: { continuity: e } });
		}, this.setSupertitle = (e) => this.parent.update({ system: { supertitle: e } }), this.setSubtitle = (e) => this.parent.update({ system: { subtitle: e } }), this.setDescription = (e) => this.parent.update({ system: { description: e } }), this.setEffects = (e) => this.parent.update({ system: { effects: e } }), this.addCardCategoryMembership = async (e) => {
			if (this.cardCategoryMemberships.some((t) => t.categoryId === e)) return;
			let t = this.styleKeyCategoryId, n = t === null ? null : u(h.cardCategories.get(), t), r = this.cardCategoryMemberships.find((e) => e.categoryId === t), i = t === null || !n || !r ? e : t, a = {
				cardCategoryMemberships: [...this.cardCategoryMemberships, {
					categoryId: e,
					nonlethal: !1,
					worth: 1
				}],
				styleKeyCategoryId: i
			};
			await this.parent.update({ system: a });
		}, this.removeCardCategoryMembership = async (e) => {
			let t = {
				cardCategoryMemberships: this.cardCategoryMemberships.filter((t) => t.categoryId !== e),
				styleKeyCategoryId: this.styleKeyCategoryId
			};
			if (this.styleKeyCategoryId === e) {
				let e = h.cardCategories.get().filter((e) => t.cardCategoryMemberships.some((t) => t.categoryId === e.id));
				t.styleKeyCategoryId = e.length > 0 ? e[0].id : null;
			}
			await this.parent.update({ system: t });
		}, this.setCardCategoryMembershipNonlethal = async (e, t) => {
			let n = { cardCategoryMemberships: this.cardCategoryMemberships.map((n) => n.categoryId === e ? {
				...n,
				nonlethal: t
			} : n) };
			await this.parent.update({ system: n });
		}, this.setCardCategoryMembershipWorth = async (e, t) => {
			let n = { cardCategoryMemberships: this.cardCategoryMemberships.map((n) => n.categoryId === e ? {
				...n,
				worth: t
			} : n) };
			await this.parent.update({ system: n });
		}, this.setCardStyleKeyCategoryId = async (e) => {
			let t = { styleKeyCategoryId: e };
			await this.parent.update({ system: t });
		}, this.unsetCardStyleKeyCategoryId = async () => {
			await this.parent.update({ system: { styleKeyCategoryId: null } });
		};
	}
	static defineSchema() {
		return Ee;
	}
	static migrateData(e) {
		return N(e, "description", M), N(e, "effects", M), super.migrateData(e);
	}
};
function H(e) {
	return e instanceof V && e.type === "card";
}
function Oe(e) {
	if (!H(e)) throw Error("Item is not a card");
}
//#endregion
//#region src/module/items/AbilityModel.ts
var U = class extends g {
	constructor(...e) {
		super(...e), this.activeSituationalModifiers = [], this.setCategoryId = async (e) => {
			let t = {
				categoryId: e,
				fields: {}
			};
			await this.parent.update({ system: t });
		}, this.setMin = async (e) => {
			await this.parent.update({ system: { min: e } });
		}, this.setMax = async (e) => {
			await this.parent.update({ system: { max: e } });
		}, this.setOccupational = async (e) => {
			await this.parent.update({ system: { occupational: e } });
		}, this.setShowTracker = async (e) => {
			await this.parent.update({ system: { showTracker: e } });
		}, this.setExcludeFromGeneralRefresh = async (e) => {
			await this.parent.update({ system: { excludeFromGeneralRefresh: e } });
		}, this.setRefreshesDaily = async (e) => {
			await this.parent.update({ system: { refreshesDaily: e } });
		}, this.getSpecialities = () => s(this.specialities, this.getSpecialitesCount(), ""), this.getSpecialitesCount = () => {
			if (!this.hasSpecialities) return 0;
			if (this.specialitiesMode === "twoThreeFour") switch (this.rating) {
				case 0: return 0;
				case 1: return 2;
				case 2: return 5;
				default: return Math.max(0, (this.rating - 2) * 4 + 5);
			}
			else return this.rating;
		}, this.setSpecialities = async (e) => {
			await this.parent.update({ system: { specialities: s(e, this.getSpecialitesCount(), "") } });
		}, this.setRating = async (e) => {
			await this.parent.update({ system: {
				rating: e,
				specialities: s(this.specialities, e, "")
			} });
		}, this.setRatingAndRefreshPool = async (e) => {
			await this.parent.update({ system: {
				rating: e,
				pool: e,
				specialities: s(this.specialities, e, "")
			} });
		}, this.setHasSpecialities = async (e) => {
			await this.parent.update({ system: { hasSpecialities: e } });
		}, this.setNotes = async (e) => {
			await this.parent.update({ system: { notes: e } });
		}, this.setPool = (e) => this.parent.update({ system: { pool: e } }), this.setBoost = (e) => this.parent.update({ system: { boost: e } }), this.setHideIfZeroRated = async (e) => {
			await this.parent.update({ system: { hideIfZeroRated: e } });
		}, this.getActiveUnlocks = () => this.unlocks.filter(({ rating: e, description: t }) => this.rating >= e && t !== ""), this.getVisibleSituationalModifiers = () => this.situationalModifiers.filter(({ situation: e }) => e !== ""), this.toggleSituationalModifier = (e) => {
			if (this.isSituationalModifierActive(e)) {
				let t = this.activeSituationalModifiers.indexOf(e);
				t !== -1 && this.activeSituationalModifiers.splice(t, 1);
			} else this.activeSituationalModifiers.includes(e) || this.activeSituationalModifiers.push(e);
			this.parent.sheet?.render(), this.parent.parent?.sheet?.render();
		}, this.isSituationalModifierActive = (e) => this.activeSituationalModifiers.includes(e), this.setUnlockDescription = async (e, t) => {
			let n = [...this.unlocks];
			n[e] = {
				...n[e],
				description: t
			}, await this.parent.update({ system: { unlocks: n } });
		}, this.setUnlockRating = async (e, t) => {
			let n = [...this.unlocks];
			n[e] = {
				...n[e],
				rating: t
			}, await this.parent.update({ system: { unlocks: n } });
		}, this.deleteUnlock = async (e) => {
			let t = [...this.unlocks];
			t.splice(e, 1), await this.parent.update({ system: { unlocks: t } });
		}, this.addUnlock = async () => {
			let e = [...this.unlocks, {
				description: "",
				rating: 0,
				id: S()
			}];
			await this.parent.update({ system: { unlocks: e } });
		}, this.setSituationalModifierSituation = async (e, t) => {
			let n = [...this.situationalModifiers];
			n[e] = {
				...n[e],
				situation: t
			}, await this.parent.update({ system: { situationalModifiers: n } });
		}, this.setSituationalModifierModifier = async (e, t) => {
			let n = [...this.situationalModifiers];
			n[e] = {
				...n[e],
				modifier: t
			}, await this.parent.update({ system: { situationalModifiers: n } });
		}, this.deleteSituationalModifier = async (e) => {
			let t = [...this.situationalModifiers];
			t.splice(e, 1), await this.parent.update({ system: { situationalModifiers: t } });
		}, this.addSituationalModifier = async () => {
			let e = [...this.situationalModifiers, {
				situation: "",
				modifier: 0,
				id: S()
			}];
			await this.parent.update({ system: { situationalModifiers: e } });
		}, this.setSpecialitiesMode = async (e) => {
			await this.parent.update({ system: { specialitiesMode: e } });
		}, this.setAllowPoolToExceedRating = async (e) => {
			await this.parent.update({ system: { allowPoolToExceedRating: e } });
		};
	}
	static migrateData(e) {
		return e.notes = M(e.notes), super.migrateData(e);
	}
	async testAbility(e) {
		if (this.parent.parent === null) return;
		let n = h.useBoost.get() && this.boost, i = n ? 1 : 0, a = this.activeSituationalModifiers.map((e) => this.situationalModifiers.find((t) => t?.id === e)), o = "1d6 + @spend", s = { spend: e };
		n && (o += " + @boost", s.boost = i);
		for (let e of a) e !== void 0 && (o += ` + @${e.id}`, s[e.id] = e.modifier);
		let c = new Roll(o, s);
		await c.evaluate(), await c.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this.parent.parent }),
			content: `
          <div
            class="${r}"
            ${k}="${this.parent.id}"
            ${d}="${this.parent.parent?.id ?? ""}"
            ${t}="${ue}"
            ${f}="${this.parent.name}"
            ${p}="${this.parent.img}"
            ${y}="${this.parent.parent?.token?.id ?? ""}"
          />
        `
		});
		let l = this.pool - (Number(e) || 0);
		await this.parent.update({ system: { pool: l } });
	}
	async spendAbility(e) {
		if (this.parent.parent === null) return;
		let n = new Roll("@spend", { spend: e });
		await n.evaluate(), await n.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this.parent.parent }),
			content: `
          <div
            class="${r}"
            ${k}="${this.parent.id}"
            ${d}="${this.parent.parent?.id ?? ""}"
            ${t}="${l}"
            ${f}="${this.parent.name}"
            ${p}="${this.parent.img}"
            ${y}="${this.parent.parent?.token?.id ?? ""}"
          />
        `
		});
		let i = h.useBoost.get() && this.boost ? 1 : 0, a = this.pool - (Number(e) || 0) + i;
		await this.parent.update({ system: { pool: a } });
	}
	async mwTestAbility(e, n, i = null) {
		if (this.parent.parent === null) return;
		let a = e === "easy" ? 0 : e, o = a < 0 ? "-" : "+", s = a === 0 ? new Roll("1d6") : new Roll(`1d6 ${o} @diffMod`, { diffMod: Math.abs(a) });
		await s.evaluate();
		let l = (i === 1 ? 4 : i === null ? 0 : 1) - n;
		if (l > this.pool) {
			ui.notifications?.error(`Attempted to ${i ? `re-roll a ${i} with` : "roll"} ${this.parent.name} with a levy of ${n} but pool is currently at ${this.pool}`);
			return;
		}
		let u = Math.max(0, this.pool - l);
		await s.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this.parent.parent }),
			content: `
          <div
            class="${r}"
            ${k}="${this.parent.id}"
            ${d}="${this.parent.parent?.id ?? ""}"
            ${t}="${ne}"
            ${ie} = ${e}
            ${c} = ${n}
            ${ae} = ${i === null ? "\"\"" : i}
            ${_} = ${u}
            ${y}="${this.parent.parent?.token?.id ?? ""}"
          />
        `
		}), await this.parent.update({ system: { pool: u } });
	}
	async mWNegateIllustrious() {
		let e = Math.max(0, this.pool - 3);
		await ChatMessage.create({ content: `
          <div
            class="${r}"
            ${k}="${this.parent.id}"
            ${d}="${this.parent.parent?.id ?? ""}"
            ${t}="${o}"
            ${_} = ${e}
          />
        ` }), await this.parent.update({ system: { pool: e } });
	}
	async mWWallop() {
		let e = Math.max(0, this.pool - 5);
		await ChatMessage.create({ content: `
          <div
            class="${r}"
            ${k}="${this.parent.id}"
            ${d}="${this.parent.parent?.id ?? ""}"
            ${t}="${re}"
            ${_} = ${e}
          />
        ` }), await this.parent.update({ system: { pool: e } });
	}
	async refreshPool() {
		await this.parent.update({ system: { pool: this.rating ?? 0 } });
	}
}, W = () => ({
	allowPoolToExceedRating: new b({
		nullable: !1,
		required: !0
	}),
	boost: new b({
		nullable: !1,
		required: !0
	}),
	categoryId: new m({
		nullable: !1,
		required: !0
	}),
	excludeFromGeneralRefresh: new b({
		nullable: !1,
		required: !0
	}),
	hasSpecialities: new b({
		nullable: !1,
		required: !0
	}),
	max: new T({
		nullable: !1,
		required: !0,
		initial: 8
	}),
	min: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	notes: new m({
		nullable: !1,
		required: !0
	}),
	occupational: new b({
		nullable: !1,
		required: !0
	}),
	pool: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	rating: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	refreshesDaily: new b({
		nullable: !1,
		required: !0
	}),
	showTracker: new b({
		nullable: !1,
		required: !0
	}),
	situationalModifiers: new x(new D({
		id: new m({
			nullable: !1,
			required: !0
		}),
		situation: new m({
			nullable: !1,
			required: !0
		}),
		modifier: new T({
			nullable: !1,
			required: !0
		})
	}), {
		nullable: !1,
		required: !0,
		initial: []
	}),
	specialities: new x(new m({
		nullable: !1,
		required: !0
	}), {
		nullable: !1,
		required: !0
	}),
	specialitiesMode: new m({
		nullable: !1,
		required: !0,
		choices: ["one", "twoThreeFour"],
		initial: "one"
	}),
	unlocks: new x(new D({
		id: new m({
			nullable: !1,
			required: !0
		}),
		rating: new T({
			nullable: !1,
			required: !0
		}),
		description: new m({
			nullable: !1,
			required: !0
		})
	}, {
		nullable: !1,
		required: !0
	}), {
		nullable: !1,
		required: !0
	})
}), ke = {
	...W(),
	canBeInvestigative: new b({
		nullable: !1,
		required: !0
	}),
	goesFirstInCombat: new b({
		nullable: !1,
		required: !0
	}),
	mwTrumps: new m({
		nullable: !1,
		required: !0
	}),
	mwTrumpedBy: new m({
		nullable: !1,
		required: !0
	}),
	mwRefreshGroup: new T({
		nullable: !1,
		required: !0,
		choices: [
			2,
			4,
			8
		],
		initial: 2
	}),
	combatBonus: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	damageBonus: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	isPushPool: new b({
		nullable: !1,
		required: !0
	}),
	linkToResource: new b({
		nullable: !1,
		required: !0
	}),
	resourceId: new m({
		nullable: !1,
		required: !0
	}),
	hideIfZeroRated: new b({
		nullable: !1,
		required: !0,
		initial: !1
	})
}, Ae = class extends U {
	constructor(...e) {
		super(...e), this.setMwTrumps = (e) => this.parent.update({ system: { mwTrumps: e } }), this.setMwTrumpedBy = (e) => this.parent.update({ system: { mwTrumpedBy: e } }), this.setMwRefreshGroup = async (e) => {
			await this.parent.update({ system: { mwRefreshGroup: e } });
		}, this.setCombatBonus = async (e) => {
			await this.parent.update({ system: { combatBonus: e } });
		}, this.setDamageBonus = async (e) => {
			await this.parent.update({ system: { damageBonus: e } });
		}, this.setIsPushPool = async (e) => {
			await this.parent.update({ system: { isPushPool: e } });
		}, this.setResourceId = async (e) => {
			await this.parent.update({ system: { resourceId: e } });
		}, this.setLinkToResource = async (e) => {
			await this.parent.update({ system: { linkToResource: e } });
		}, this.setCanBeInvestigative = async (e) => {
			await this.parent.update({ system: { canBeInvestigative: e } });
		}, this.setGoesFirstInCombat = async (e) => {
			await this.parent.update({ system: { goesFirstInCombat: e } });
		};
	}
	static defineSchema() {
		return ke;
	}
	async push() {
		await this.pushPool();
	}
	async pushPool(e) {
		if (!this.isPushPool) throw Error(`This ability ${this.parent.name} is not a push pool`);
		if (this.parent?.actor === null || this.pool === 0) return;
		let n = new Roll("1");
		await n.evaluate(), await n.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this.parent.actor }),
			content: `
        <div
          class="${r}"
          ${k}="${e?.id ?? this.parent.id}"
          ${d}="${this.parent?.id ?? ""}"
          ${t}="${a}"
          ${f}="${e?.name ?? this.parent.name}"
          ${p}="${this.parent.img}"
          ${y}="${this.parent?.actor.token?.id ?? ""}"
        />
      `
		});
		let i = this.pool - 1;
		await this.parent.update({ system: { pool: i } });
	}
};
function G(e) {
	return e instanceof V && e.type === "generalAbility";
}
function je(e) {
	if (!G(e)) throw Error("Not a general ability item");
}
//#endregion
//#region src/module/items/investigativeAbility.ts
var Me = {
	...W(),
	isQuickShock: new b({
		nullable: !1,
		required: !0
	}),
	hideIfZeroRated: new b({
		nullable: !1,
		required: !0,
		initial: !0
	})
}, Ne = class extends U {
	constructor(...e) {
		super(...e), this.setIsQuickShock = async (e) => {
			await this.parent.update({ system: { isQuickShock: e } });
		};
	}
	static defineSchema() {
		return Me;
	}
	async push() {
		await this.pushInvestigative();
	}
	async pushInvestigative() {
		let e = this.parent.parent;
		if (He(e), !this.isQuickShock) throw Error(`The ability ${this.parent.name} is not a quick shock`);
		if (this.parent.actor === null) throw Error(`The ability ${this.parent.name} is not owned`);
		let t = e.system.getPushPool();
		if (t === void 0) throw Error(`The actor ${this.parent.actor.name} has no push pool`);
		await t.system.pushPool(this.parent);
	}
};
function K(e) {
	return e instanceof V && e.type === "investigativeAbility";
}
//#endregion
//#region src/module/items/exports.ts
function q(e) {
	return G(e) || K(e);
}
function Pe(e) {
	if (!q(e)) throw Error("Expected an ability item");
}
//#endregion
//#region src/module/items/mwItem.ts
var Fe = {
	charges: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	mwType: new m({
		nullable: !1,
		required: !0,
		choices: [
			"tweak",
			"spell",
			"cantrap",
			"enchantedItem",
			"meleeWeapon",
			"missileWeapon",
			"manse",
			"sandestin",
			"retainer"
		],
		initial: "tweak"
	}),
	notes: new m({
		nullable: !1,
		required: !0
	}),
	ranges: new x(new T({
		nullable: !1,
		required: !0
	}), {
		nullable: !1,
		required: !0,
		initial: [
			0,
			0,
			0,
			0
		]
	})
}, Ie = class extends g {
	constructor(...e) {
		super(...e), this.setNotes = async (e) => {
			await this.parent.update({ system: { notes: e } });
		}, this.setMwType = async (e) => {
			await this.parent.update({ system: { mwType: e } });
		}, this.setCharges = async (e) => {
			await this.parent.update({ system: { charges: e } });
		}, this.getRange = (e) => this.ranges[e], this.setRanges = async (e) => {
			await this.parent.update({ system: { ranges: e } });
		}, this.setRange = (e) => async (t) => {
			let n = [...this.ranges];
			n[e] = t, await this.parent.update({ system: { ranges: n } });
		};
	}
	static defineSchema() {
		return Fe;
	}
	static migrateData(e) {
		return N(e, "notes", M), super.migrateData(e);
	}
};
function J(e) {
	return e instanceof V && e.type === "mwItem";
}
function Y(e) {
	if (!J(e)) throw Error("Item is not a mwItem");
}
//#endregion
//#region src/module/items/personalDetail.ts
var Le = {
	notes: new m({
		nullable: !1,
		required: !0
	}),
	slotIndex: new T({
		nullable: !1,
		required: !0,
		initial: 0
	}),
	compendiumPackId: new m({
		nullable: !0,
		required: !0
	})
}, Re = class extends g {
	constructor(...e) {
		super(...e), this.setNotes = async (e) => {
			await this.parent.update({ system: { notes: e } });
		}, this.setSlotIndex = async (e) => {
			await this.parent.update({ system: { slotIndex: e } });
		}, this.setCompendiumPack = async (e) => {
			await this.parent.update({ system: { compendiumPackId: e } });
		};
	}
	static defineSchema() {
		return Le;
	}
	static migrateData(e) {
		return N(e, "notes", M), super.migrateData(e);
	}
};
function X(e) {
	return e instanceof V && e.type === "personalDetail";
}
function ze(e) {
	if (!X(e)) throw Error("Item is not a personalDetail");
}
//#endregion
//#region src/module/actors/pc.ts
var Be = {
	...P(),
	buildPoints: new T({
		nullable: !1,
		required: !0,
		initial: 28,
		min: 0
	}),
	cardsAreaSettings: new D({
		category: new m({
			nullable: !1,
			required: !0,
			initial: "all",
			choices: ["all", "categorized"]
		}),
		columnWidth: new m({
			nullable: !1,
			required: !0,
			initial: "narrow",
			choices: [
				"narrow",
				"wide",
				"full"
			]
		}),
		sortOrder: new m({
			nullable: !1,
			required: !0,
			initial: "newest",
			choices: [
				"atoz",
				"ztoa",
				"newest",
				"oldest"
			]
		}),
		viewMode: new m({
			nullable: !1,
			required: !0,
			initial: "short",
			choices: ["short", "full"]
		})
	}),
	hiddenShortNotes: new x(new m(), {
		nullable: !1,
		initial: [],
		required: !0
	}),
	longNotes: new x(new m({
		nullable: !1,
		required: !0
	})),
	sheetTheme: new m({
		nullable: !0,
		required: !0,
		initial: null
	}),
	shortNotes: new x(new m(), {
		nullable: !1,
		required: !0
	})
}, Ve = class extends R {
	constructor(...e) {
		super(...e), this.confirm24hRefresh = async () => {
			await v({
				message: "Refresh all of (actor name)'s abilities which refresh every 24h?",
				confirmText: "Refresh",
				cancelText: "Cancel",
				confirmIconClass: "fa-sync",
				values: { ActorName: this.parent.name ?? "" },
				resolveFalseOnCancel: !0
			}) && await this.refresh24h();
		}, this.confirmMw2Refresh = this.confirmMwRefresh(2), this.confirmMw4Refresh = this.confirmMwRefresh(4), this.confirmMw8Refresh = this.confirmMwRefresh(8), this.refresh24h = async () => {
			let e = Array.from(this.parent.items).flatMap((e) => q(e) && e.system.rating !== e.system.pool && e.system.refreshesDaily ? [{
				_id: e.id,
				system: { pool: e.system.rating }
			}] : []);
			this.shouldBroadcastRefreshes() && await this.broadcastUserMessage("RefreshedAllOfActorNames24hRefreshAbilities"), await this.parent.updateEmbeddedDocuments("Item", e);
		}, this.confirmNuke = async () => {
			await v({
				message: "NukeAllOfActorNamesAbilitiesAndEquipment",
				confirmText: "Nuke it from orbit",
				cancelText: "Whoops no!",
				confirmIconClass: "fa-radiation",
				resolveFalseOnCancel: !0,
				values: { ActorName: this.parent.name ?? "" }
			}) && await this.nuke();
		}, this.nuke = async () => {
			await this.parent.deleteEmbeddedDocuments("Item", this.parent.items.map((e) => e.id).filter((e) => e !== null)), ui.notifications?.info(`Nuked ${this.parent.name}.`);
		}, this.getOccupations = () => this.getPersonalDetailsInSlotIndex(-1), this.getPersonalDetailsInSlotIndex = (e) => this.getPersonalDetails().filter((t) => t.system.slotIndex === e), this.setSheetTheme = async (e) => {
			await this.parent.update({ system: { sheetTheme: e } });
		}, this.getLongNote = (e) => this.longNotes?.[e] ?? "", this.setLongNote = (e, t) => {
			let n = [...this.longNotes || []];
			return n[e] = t, this.parent.update({ system: { longNotes: n } });
		}, this.getShortNote = (e) => this.shortNotes?.[e] ?? "", this.setShortNote = (e, t) => {
			let n = [...this.shortNotes || []];
			return n[e] = t, this.parent.update({ system: { shortNotes: n } });
		}, this.setMwHiddenShortNote = (e, t) => {
			let n = [...this.hiddenShortNotes || []];
			return n[e] = t, this.parent.update({ system: { hiddenShortNotes: n } });
		}, this.createEquipment = async (e) => {
			await this.parent.createEmbeddedDocuments("Item", [{
				type: ee,
				name: "New item",
				system: { category: e }
			}], { renderSheet: !0 });
		}, this.createCard = async () => {
			await this.parent.createEmbeddedDocuments("Item", [{
				type: te,
				name: "New card"
			}], { renderSheet: !0 });
		}, this.setCardsAreaSettings = async (e) => {
			await this.parent.update({ system: { cardsAreaSettings: e } });
		}, this.getNonContinuityCards = () => this.parent.items.filter((e) => H(e) && !e.system.continuity), this.endScenario = async () => {
			let e = this.getNonContinuityCards().map((e) => e.id).filter((e) => e !== null);
			await this.parent.deleteEmbeddedDocuments("Item", e);
		}, this.createPersonalDetail = async (e, t = !0) => {
			let n = e === -1 ? h.genericOccupation.get() : `New ${h.personalDetails.get()[e]?.name ?? "detail"}`;
			await this.parent.createEmbeddedDocuments("Item", [{
				type: se,
				name: n,
				system: { slotIndex: e }
			}], { renderSheet: t });
		};
	}
	static defineSchema() {
		return Be;
	}
	static migrateData(e) {
		return N(e, "longNotes", (e) => e?.map(M)), super.migrateData(e);
	}
	getSheetThemeName() {
		return this.sheetTheme || h.defaultThemeName.get();
	}
	confirmMwRefresh(e) {
		return async () => {
			await v({
				message: "Refresh all of {ActorName}'s abilities which refresh every {Hours} Hours?",
				confirmText: "Refresh",
				cancelText: "Cancel",
				confirmIconClass: "fa-sync",
				values: {
					ActorName: this.parent.name ?? "",
					Hours: e.toString()
				}
			}) && await this.mWrefresh(e);
		};
	}
	async mWrefresh(e) {
		let t = Array.from(this.parent.items).flatMap((t) => G(t) && t.system.rating > t.system.pool && t.system.mwRefreshGroup === e ? [{
			_id: t.id,
			system: { pool: t.system.rating }
		}] : []);
		this.shouldBroadcastRefreshes() && await this.broadcastUserMessage("RefreshedAllOfActorNamesHoursHoursRefreshAbilities", { Hours: e.toString() }), await this.parent.updateEmbeddedDocuments("Item", t);
	}
	getAbilityByName(e, t) {
		return this.parent.items.find((n) => q(n) && (t ? n.type === t : !0) && n.name === e);
	}
	getPersonalDetails() {
		return this.parent.items.filter((e) => X(e));
	}
	getMwItems() {
		let e = this.parent.items.filter(J), t = {
			tweak: [],
			spell: [],
			cantrap: [],
			enchantedItem: [],
			meleeWeapon: [],
			missileWeapon: [],
			manse: [],
			retainer: [],
			sandestin: []
		};
		for (let n of e) Y(n), t[n.system.mwType].push(n);
		return t;
	}
};
function Z(e) {
	return e instanceof j && e.type === "pc";
}
function He(e) {
	if (!Z(e)) throw Error("Expected a PC actor");
}
//#endregion
//#region src/functions/getTokenizer.ts
function Ue() {
	n(game);
	let e = game.modules.get("vtta-tokenizer");
	return {
		tokenizerIsActive: e?.active ?? !1,
		tokenizerApi: e?.api
	};
}
//#endregion
//#region src/hooks/useIsDocumentOwner.ts
var Q = /* @__PURE__ */ e(pe(), 1);
function We() {
	n(game);
	let { doc: e } = A();
	return (0, Q.useMemo)(() => e.testUserPermission(game.user, CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER), [e]);
}
//#endregion
//#region src/components/ImagePickerLink.tsx
var Ge = ({ onClick: e, children: t }) => {
	let n = (0, Q.useContext)(C);
	return /* @__PURE__ */ w("a", {
		onClick: (0, Q.useCallback)((t) => {
			t.stopPropagation(), e();
		}, [e]),
		css: {
			backgroundColor: n.colors.bgOpaquePrimary,
			padding: "0 0.5em",
			borderRadius: "0.5em",
			font: n.displayFont,
			transition: "background-color 0.2s",
			":hover": { backgroundColor: n.colors.backgroundPrimary }
		},
		children: t
	});
}, $ = {
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0
}, Ke = "0.3s", qe = ({ className: e }) => {
	let { doc: t, app: r } = A();
	if (!(t instanceof Actor || t instanceof Item)) throw Error("ImagePickle must be used within an Actor or Item");
	let [i, a] = (0, Q.useState)(!1), o = (0, Q.useContext)(C);
	n(game);
	let s = We(), c = (0, Q.useCallback)(() => {
		a(!1), n(game);
		let { tokenizerIsActive: e, tokenizerApi: i } = Ue(), o = t instanceof Actor;
		if (e && i !== void 0 && o) i.tokenizeActor(t);
		else return new ce.implementation({
			type: "image",
			current: t.img ?? void 0,
			callback: (e) => {
				t.update({ img: e });
			},
			position: {
				top: (r.position.top ?? 0) + 40,
				left: (r.position.left ?? 0) + 10
			},
			window: {}
		}).browse(t.img ?? "");
	}, [
		r.position.left,
		r.position.top,
		t
	]), l = (0, Q.useCallback)(() => {
		new le({
			window: { title: t.img ?? "" },
			src: t.img ?? ""
		}).render({ force: !0 });
	}, [t.img]), u = (0, Q.useCallback)(() => {
		a(!1), l();
	}, [l]), d = (0, Q.useCallback)((e) => {
		if (e.stopPropagation(), s) {
			a(!0);
			let e = () => {
				a(!1);
			};
			return document.addEventListener("click", e), () => {
				document.removeEventListener("click", e);
			};
		} else l();
	}, [s, l]);
	return /* @__PURE__ */ O("div", {
		className: e,
		css: {
			borderRadius: "0.2em",
			boxShadow: "0em 0em 0.5em 0.1em rgba(0,0,0,0.5)",
			position: "relative"
		},
		onClick: (e) => d(e),
		children: [/* @__PURE__ */ w("div", {
			css: {
				...$,
				overflow: "hidden"
			},
			children: /* @__PURE__ */ w("div", { css: {
				...$,
				backgroundImage: `url("${t.img}")`,
				backgroundSize: "cover",
				backgroundPosition: "center top",
				filter: i ? "blur(0.7em)" : void 0,
				transition: `filter ${Ke} ease-in`
			} })
		}), /* @__PURE__ */ w("div", {
			css: {
				...$,
				opacity: i ? 1 : 0,
				transition: `opacity ${Ke} ease-in`,
				background: o.colors.backgroundSecondary,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "center"
			},
			children: i && /* @__PURE__ */ O(oe, { children: [/* @__PURE__ */ w(Ge, {
				onClick: u,
				children: "Show"
			}), /* @__PURE__ */ w(Ge, {
				onClick: c,
				children: "Edit"
			})] })
		})]
	});
};
//#endregion
export { N as A, V as C, we as D, Ce as E, j as M, z as O, H as S, B as T, Ae as _, He as a, De as b, ze as c, Y as d, J as f, K as g, Ne as h, Ve as i, M as j, ye as k, X as l, q as m, We as n, Z as o, Pe as p, Ue as r, Re as s, qe as t, Ie as u, je as v, Te as w, Oe as x, G as y };
