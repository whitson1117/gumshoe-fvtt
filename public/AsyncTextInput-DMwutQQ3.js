import { o as e, t } from "./chunk-BQCxAhux.js";
import { n, t as r } from "./react-Cajsgul7.js";
var i = {
	id: "investigator",
	title: "GUMSHOE",
	description: "Official GUMSHOE support for FoundryVTT. Ships with compatibility for several settings, and can be customized to work with any other setting.",
	version: "10.115",
	authors: [{ name: "Neil de Carteret" }],
	scripts: [],
	esmodules: ["investigator.js"],
	styles: [{
		src: "investigator.css",
		layer: null
	}, "fonts/fonts.css"],
	socket: !0,
	packFolders: [{
		name: "GUMSHOE",
		sorting: "m",
		packs: ["missingAbilitiesNote"],
		color: "#7a150a",
		folders: [
			{
				name: "PC Abilities",
				sorting: "a",
				color: "#460c06",
				packs: [
					"pathOfCthulhuAbilities",
					"niceBlackAgentsAbilities",
					"nothingToFearAbilities",
					"pallidStarsAbilities",
					"srdAbilities",
					"castingTheRunesAbilities",
					"esoterroristsAbilities",
					"moribundWorldAbilities",
					"mutantCityBluesAbilities",
					"mutantCityBluesPowers"
				]
			},
			{
				name: "NPC Abilities",
				color: "#460c06",
				sorting: "a",
				packs: ["opponentAbilities", "niceBlackAgentsNPCAbilities"]
			},
			{
				name: "Equipment",
				color: "#460c06",
				sorting: "a",
				packs: ["srdWeapons"]
			},
			{
				name: "Cards",
				color: "#460c06",
				sorting: "a",
				packs: ["mutantCityBluesStressCards", "mutantCityBluesGeneticRiskFactors"]
			}
		]
	}],
	packs: [
		{
			name: "pathOfCthulhuAbilities",
			label: "Trail of Cthulhu Abilities",
			system: "investigator",
			path: "./packs/pathOfCthulhuAbilities.db",
			type: "Item"
		},
		{
			name: "niceBlackAgentsAbilities",
			label: "Night's Black Agents Abilities",
			system: "investigator",
			path: "./packs/niceBlackAgentsAbilities.db",
			type: "Item"
		},
		{
			name: "nothingToFearAbilities",
			label: "Fear Itself Abilities",
			system: "investigator",
			path: "./packs/nothingToFearAbilities.db",
			type: "Item"
		},
		{
			name: "pallidStarsAbilities",
			label: "Ashen Stars Abilities",
			system: "investigator",
			path: "./packs/pallidStarsAbilities.db",
			type: "Item"
		},
		{
			name: "missingAbilitiesNote",
			label: "WE NOW HAVE FULL ABILITY COMPENDIUMS!",
			system: "investigator",
			path: "./packs/fullCompendiumsNote.db",
			type: "JournalEntry"
		},
		{
			name: "opponentAbilities",
			label: "Opponent Abilities",
			system: "investigator",
			path: "./packs/opponentAbilities.db",
			type: "Item"
		},
		{
			name: "srdWeapons",
			label: "SRD Weapons",
			system: "investigator",
			path: "./packs/srdWeapons.db",
			type: "Item"
		},
		{
			name: "srdAbilities",
			label: "SRD Abilities",
			system: "investigator",
			path: "./packs/srdAbilities.db",
			type: "Item"
		},
		{
			name: "castingTheRunesAbilities",
			label: "Casting the Runes Abilities",
			system: "investigator",
			path: "./packs/castingTheRunesAbilities.db",
			type: "Item"
		},
		{
			name: "esoterroristsAbilities",
			label: "Esoterrorists Abilities",
			system: "investigator",
			path: "./packs/esoterroristsAbilities.db",
			type: "Item"
		},
		{
			name: "moribundWorldAbilities",
			label: "Dying Earth Abilities",
			system: "investigator",
			path: "./packs/moribundWorldAbilities.db",
			type: "Item"
		},
		{
			name: "niceBlackAgentsNPCAbilities",
			label: "Night's Black Agents NPC Abilities",
			system: "investigator",
			path: "./packs/niceBlackAgentsNPCAbilities",
			type: "Item"
		},
		{
			name: "mutantCityBluesAbilities",
			label: "Mutant City Blues Abilities",
			system: "investigator",
			path: "./packs/mutantCityBluesAbilities",
			type: "Item"
		},
		{
			name: "mutantCityBluesPowers",
			label: "Mutant City Blues Mutant Powers",
			system: "investigator",
			path: "./packs/mutantCityBluesPowers",
			type: "Item"
		},
		{
			name: "mutantCityBluesStressCards",
			label: "Mutant City Blues Stress Cards",
			system: "investigator",
			path: "./packs/mutantCityBluesStressCards",
			type: "Item"
		},
		{
			name: "mutantCityBluesGeneticRiskFactors",
			label: "Mutant City Blues Genetic Risk Factors",
			system: "investigator",
			path: "./packs/mutantCityBluesGeneticRiskFactors",
			type: "Item"
		}
	],
	languages: [
		{
			lang: "en",
			name: "English",
			path: "lang/en.json"
		},
		{
			lang: "en",
			name: "English",
			path: "lang/moribundWorld/en.json"
		},
		{
			lang: "es",
			name: "Español",
			path: "lang/es.json"
		},
		{
			lang: "ca",
			name: "Català",
			path: "lang/ca.json"
		},
		{
			lang: "fr",
			name: "Français",
			path: "lang/fr.json"
		},
		{
			lang: "pt-BR",
			name: "Português do Brasil",
			path: "lang/pt-BR.json"
		},
		{
			lang: "pt-BR",
			name: "Português do Brasil",
			path: "lang/moribundWorld/pt-BR.json"
		},
		{
			lang: "de",
			name: "Deutsch",
			path: "lang/de.json"
		},
		{
			lang: "ja",
			name: "日本語",
			path: "lang/ja-JP.json"
		},
		{
			lang: "pl",
			name: "Polski",
			path: "lang/pl.json"
		},
		{
			lang: "pl",
			name: "Polski",
			path: "lang/moribundWorld/pl.json"
		},
		{
			lang: "it",
			name: "Italiano",
			path: "lang/it_IT.json"
		}
	],
	compatibility: {
		minimum: "14",
		verified: "14"
	},
	initiative: "1d6",
	url: "https://github.com/lumphammer/gumshoe-fvtt",
	manifest: "https://github.com/lumphammer/gumshoe-fvtt/releases/latest/download/system.json",
	download: "https://github.com/lumphammer/gumshoe-fvtt/releases/download/v10.115/investigator.zip",
	license: "MIT",
	readme: "https://github.com/lumphammer/gumshoe-fvtt/blob/main/README.md",
	bugs: "https://github.com/lumphammer/gumshoe-fvtt/issues",
	changelog: "https://github.com/lumphammer/gumshoe-fvtt/blob/main/CHANGELOG.md",
	media: [{
		type: "cover",
		url: "https://raw.githubusercontent.com/lumphammer/gumshoe-fvtt/main/assets/cover.webp"
	}, {
		type: "setup",
		url: "https://raw.githubusercontent.com/lumphammer/gumshoe-fvtt/main/assets/cover.webp"
	}],
	documentTypes: {
		Actor: {
			pc: {},
			npc: {},
			party: {}
		},
		Item: {
			investigativeAbility: {},
			generalAbility: {},
			equipment: {},
			weapon: {},
			mwItem: {},
			personalDetail: {},
			card: {}
		},
		Combat: {
			turnPassing: {},
			classic: {}
		},
		Combatant: {
			turnPassing: {},
			classic: {}
		}
	}
}, a = "investigator";
i.version;
var o = "0.0.0";
`${a}`;
var s = "customSystem", c = "investigativeAbility", l = "generalAbility", u = "equipment", d = "weapon", f = "party", p = "mwItem", m = "personalDetail", h = "card", ee = `/systems/${a}/assets/icons/magnifying-glass.webp`, g = `/systems/${a}/assets/icons/fist.webp`, _ = `/systems/${a}/assets/icons/trench-knife.webp`, te = `/systems/${a}/assets/icons/shopping-bag.webp`, v = `/systems/${a}/assets/icons/sherlock-holmes.webp`, y = `/systems/${a}/assets/icons/cowled.webp`, b = `/systems/${a}/assets/icons/dark-squad.webp`, x = `/systems/${a}/assets/icons/notebook.webp`, ne = `/systems/${a}/assets/icons/card.webp`, S = {
	niceBlackAgentsAbilities: "niceBlackAgentsAbilities",
	nothingToFearAbilities: "nothingToFearAbilities",
	pallidStarsAbilities: "pallidStarsAbilities",
	pathOfCthulhuAbilities: "pathOfCthulhuAbilities",
	srdAbilities: "srdAbilities",
	castingTheRunesAbilities: "castingTheRunesAbilities",
	moribundWorldAbilities: "moribundWorldAbilities",
	esoterroristsAbilities: "esoterroristsAbilities",
	niceBlackAgentsNPCAbilities: "niceBlackAgentsNPCAbilities",
	mutantCityBluesAbilities: "mutantCityBluesAbilities",
	mutantCityBluesNPCAbilities: "mutantCityBluesNPCAbilities",
	mutantCityBluesPowers: "mutantCityBluesPowers"
}, re = "opponentAbilities", ie = `${a}.newPCPacksUpdated`, ae = `${a}.newNPCPacksUpdated`, oe = `${a}.settingsSaved`, se = `${a}.requestTurnPass`, ce = `system.${a}`, le = `${a}.settingsCloseAttempted`, ue = `${a}:themeHMR`, de = `${a}.nextTurn`, fe = "investigator-ability-test", pe = "data-item-id", me = "data-actor-id", he = "data-mode", ge = "test", _e = "spend", ve = "attack", ye = "mw-test", be = "mw-wallop", xe = "mw-negate", Se = "push", Ce = "data-range", we = "data-weapon-id", Te = "data-name", Ee = "data-image-url", De = "data-mw-difficulty", Oe = "data-mw-boon-levy", ke = "data-mw-re-roll", Ae = "data-mw-pool", je = "data-token-id", Me = "investigator_themes", Ne = "extraCssClasses", Pe = "journalMemories", Fe = foundry.applications.sheets.ActorSheetV2, Ie = foundry.appv1.api.Application, Le = foundry.applications.api.ApplicationV2, Re = foundry.data.fields.ArrayField;
foundry.helpers.ClientSettings;
var ze = foundry.applications.sheets.CombatantConfig, Be = foundry.applications.sidebar.tabs.CombatTracker, Ve = foundry.applications.apps.CombatTrackerConfig, He = foundry.documents.collections.CompendiumCollection;
foundry.data.fields.DataField;
var Ue = foundry.applications.api.DialogV2;
foundry.dice.terms.DiceTerm;
var We = foundry.abstract.Document, Ge = foundry.applications.api.DocumentSheetV2, Ke = foundry.applications.apps.FilePicker;
foundry.Game;
var qe = foundry.applications.apps.ImagePopout, Je = foundry.applications.sheets.ItemSheetV2, Ye = foundry.applications.sheets.journal.JournalEntrySheet, Xe = foundry.data.fields.NumberField;
foundry.dice.terms.NumericTerm;
var Ze = foundry.data.fields.ObjectField;
foundry.dice.terms.OperatorTerm;
var Qe = foundry.dice.terms.PoolTerm;
foundry.dice.terms.RollTerm;
var $e = foundry.data.fields.SchemaField, et = foundry.data.fields.StringField, tt = foundry.applications.ux.TextEditor.implementation, nt = foundry.canvas.placeables.Token, rt = foundry.abstract.TypeDataModel;
foundry.abstract.DataModel;
var it = foundry.data.fields.TypedObjectField, at = foundry.data.fields.BooleanField, ot = foundry.documents.collections.Journal, st = foundry.documents.collections.Actors, ct = foundry.documents.collections.Items;
Object.freeze({ status: "aborted" });
function C(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
var lt = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, ut = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
}, dt = {};
function ft(e) {
	return e && Object.assign(dt, e), dt;
}
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/util.js
function pt(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function mt(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function ht(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function gt(e) {
	return e == null;
}
function _t(e) {
	let t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function vt(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = t.toString(), i = (r.split(".")[1] || "").length;
	if (i === 0 && /\d?e-\d?/.test(r)) {
		let e = r.match(/\d?e-(\d?)/);
		e?.[1] && (i = Number.parseInt(e[1]));
	}
	let a = n > i ? n : i;
	return Number.parseInt(e.toFixed(a).replace(".", "")) % Number.parseInt(t.toFixed(a).replace(".", "")) / 10 ** a;
}
var yt = Symbol("evaluating");
function w(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== yt) return r === void 0 && (r = yt, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function bt(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function xt(...e) {
	let t = {};
	for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
	return Object.defineProperties({}, t);
}
function St(e) {
	return JSON.stringify(e);
}
function Ct(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var wt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Tt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Et = ht(() => {
	if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function Dt(e) {
	if (Tt(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(Tt(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Ot(e) {
	return Dt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var kt = new Set([
	"string",
	"number",
	"symbol"
]);
function At(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function jt(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function T(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function Mt(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
var Nt = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Pt(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return jt(e, xt(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return bt(this, "shape", e), e;
		},
		checks: []
	}));
}
function Ft(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return jt(e, xt(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return bt(this, "shape", r), r;
		},
		checks: []
	}));
}
function It(e, t) {
	if (!Dt(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return jt(e, xt(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return bt(this, "shape", n), n;
	} }));
}
function Lt(e, t) {
	if (!Dt(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return jt(e, xt(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return bt(this, "shape", n), n;
	} }));
}
function Rt(e, t) {
	return jt(e, xt(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return bt(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: []
	}));
}
function zt(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return jt(t, xt(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t in n) {
				if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t in r) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return bt(this, "shape", i), i;
		},
		checks: []
	}));
}
function Bt(e, t, n) {
	return jt(t, xt(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t in n) {
			if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t in r) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return bt(this, "shape", i), i;
	} }));
}
function Vt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Ht(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Ut(e) {
	return typeof e == "string" ? e : e?.message;
}
function Wt(e, t, n) {
	let r = {
		...e,
		path: e.path ?? []
	};
	return e.message || (r.message = Ut(e.inst?._zod.def?.error?.(e)) ?? Ut(t?.error?.(e)) ?? Ut(n.customError?.(e)) ?? Ut(n.localeError?.(e)) ?? "Invalid input"), delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function Gt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Kt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/errors.js
var qt = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, mt, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Jt = C("$ZodError", qt), Yt = C("$ZodError", qt, { Parent: Error });
function Xt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Zt(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e) => {
		for (let i of e.issues) if (i.code === "invalid_union" && i.errors.length) i.errors.map((e) => r({ issues: e }));
		else if (i.code === "invalid_key") r({ issues: i.issues });
		else if (i.code === "invalid_element") r({ issues: i.issues });
		else if (i.path.length === 0) n._errors.push(t(i));
		else {
			let e = n, r = 0;
			for (; r < i.path.length;) {
				let n = i.path[r];
				r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/parse.js
var Qt = (e) => (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !1 }) : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new lt();
	if (o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => Wt(e, a, ft())));
		throw wt(t, i?.callee), t;
	}
	return o.value;
}, $t = (e) => async (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !0 }) : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => Wt(e, a, ft())));
		throw wt(t, i?.callee), t;
	}
	return o.value;
}, en = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new lt();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? Jt)(a.issues.map((e) => Wt(e, i, ft())))
	} : {
		success: !0,
		data: a.value
	};
}, tn = /* @__PURE__ */ en(Yt), nn = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { async: !0 }) : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => Wt(e, i, ft())))
	} : {
		success: !0,
		data: a.value
	};
}, rn = /* @__PURE__ */ nn(Yt), an = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return Qt(e)(t, n, i);
}, on = (e) => (t, n, r) => Qt(e)(t, n, r), sn = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return $t(e)(t, n, i);
}, cn = (e) => async (t, n, r) => $t(e)(t, n, r), ln = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return en(e)(t, n, i);
}, un = (e) => (t, n, r) => en(e)(t, n, r), dn = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return nn(e)(t, n, i);
}, fn = (e) => async (t, n, r) => nn(e)(t, n, r), pn = /^[cC][^\s-]{8,}$/, mn = /^[0-9a-z]+$/, hn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, gn = /^[0-9a-vA-V]{20}$/, _n = /^[A-Za-z0-9]{27}$/, vn = /^[a-zA-Z0-9_-]{21}$/, yn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, bn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, xn = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Sn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Cn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function wn() {
	return new RegExp(Cn, "u");
}
var Tn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, En = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Dn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, On = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, kn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, An = /^[A-Za-z0-9_-]*$/, jn = /^\+[1-9]\d{6,14}$/, Mn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Nn = /* @__PURE__ */ RegExp(`^${Mn}$`);
function Pn(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Fn(e) {
	return RegExp(`^${Pn(e)}$`);
}
function In(e) {
	let t = Pn({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${Mn}T(?:${r})$`);
}
var Ln = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, Rn = /^-?\d+$/, zn = /^-?\d+(?:\.\d+)?$/, Bn = /^(?:true|false)$/i, Vn = /^[^A-Z]*$/, Hn = /^[^a-z]*$/, E = /* @__PURE__ */ C("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Un = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Wn = /* @__PURE__ */ C("$ZodCheckLessThan", (e, t) => {
	E.init(e, t);
	let n = Un[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
		t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Gn = /* @__PURE__ */ C("$ZodCheckGreaterThan", (e, t) => {
	E.init(e, t);
	let n = Un[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
		t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Kn = /* @__PURE__ */ C("$ZodCheckMultipleOf", (e, t) => {
	E.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : vt(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), qn = /* @__PURE__ */ C("$ZodCheckNumberFormat", (e, t) => {
	E.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Nt[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = Rn);
	}), e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Jn = /* @__PURE__ */ C("$ZodCheckMaxLength", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !gt(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = Gt(r);
		n.issues.push({
			origin: i,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Yn = /* @__PURE__ */ C("$ZodCheckMinLength", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !gt(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = Gt(r);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Xn = /* @__PURE__ */ C("$ZodCheckLengthEquals", (e, t) => {
	var n;
	E.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !gt(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = Gt(r), o = i > t.length;
		n.issues.push({
			origin: a,
			...o ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zn = /* @__PURE__ */ C("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	E.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), Qn = /* @__PURE__ */ C("$ZodCheckRegex", (e, t) => {
	Zn.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), $n = /* @__PURE__ */ C("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= Vn, Zn.init(e, t);
}), er = /* @__PURE__ */ C("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Hn, Zn.init(e, t);
}), tr = /* @__PURE__ */ C("$ZodCheckIncludes", (e, t) => {
	E.init(e, t);
	let n = At(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nr = /* @__PURE__ */ C("$ZodCheckStartsWith", (e, t) => {
	E.init(e, t);
	let n = RegExp(`^${At(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), rr = /* @__PURE__ */ C("$ZodCheckEndsWith", (e, t) => {
	E.init(e, t);
	let n = RegExp(`.*${At(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ir = /* @__PURE__ */ C("$ZodCheckOverwrite", (e, t) => {
	E.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), ar = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.args, n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
		return new e(...t, n.join("\n"));
	}
}, or = {
	major: 4,
	minor: 3,
	patch: 6
}, D = /* @__PURE__ */ C("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = or;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = Vt(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (!a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new lt();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= Vt(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= Vt(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (Vt(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new lt();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (i, a) => {
			if (a.skipChecks) return e._zod.parse(i, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
			}
			let o = e._zod.parse(i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new lt();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	w(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = tn(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return rn(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), sr = /* @__PURE__ */ C("$ZodString", (e, t) => {
	D.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Ln(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), O = /* @__PURE__ */ C("$ZodStringFormat", (e, t) => {
	Zn.init(e, t), sr.init(e, t);
}), cr = /* @__PURE__ */ C("$ZodGUID", (e, t) => {
	t.pattern ??= bn, O.init(e, t);
}), lr = /* @__PURE__ */ C("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= xn(e);
	} else t.pattern ??= xn();
	O.init(e, t);
}), ur = /* @__PURE__ */ C("$ZodEmail", (e, t) => {
	t.pattern ??= Sn, O.init(e, t);
}), dr = /* @__PURE__ */ C("$ZodURL", (e, t) => {
	O.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = new URL(r);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = i.href : n.value = r;
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), fr = /* @__PURE__ */ C("$ZodEmoji", (e, t) => {
	t.pattern ??= wn(), O.init(e, t);
}), pr = /* @__PURE__ */ C("$ZodNanoID", (e, t) => {
	t.pattern ??= vn, O.init(e, t);
}), mr = /* @__PURE__ */ C("$ZodCUID", (e, t) => {
	t.pattern ??= pn, O.init(e, t);
}), hr = /* @__PURE__ */ C("$ZodCUID2", (e, t) => {
	t.pattern ??= mn, O.init(e, t);
}), gr = /* @__PURE__ */ C("$ZodULID", (e, t) => {
	t.pattern ??= hn, O.init(e, t);
}), _r = /* @__PURE__ */ C("$ZodXID", (e, t) => {
	t.pattern ??= gn, O.init(e, t);
}), vr = /* @__PURE__ */ C("$ZodKSUID", (e, t) => {
	t.pattern ??= _n, O.init(e, t);
}), yr = /* @__PURE__ */ C("$ZodISODateTime", (e, t) => {
	t.pattern ??= In(t), O.init(e, t);
}), br = /* @__PURE__ */ C("$ZodISODate", (e, t) => {
	t.pattern ??= Nn, O.init(e, t);
}), xr = /* @__PURE__ */ C("$ZodISOTime", (e, t) => {
	t.pattern ??= Fn(t), O.init(e, t);
}), Sr = /* @__PURE__ */ C("$ZodISODuration", (e, t) => {
	t.pattern ??= yn, O.init(e, t);
}), Cr = /* @__PURE__ */ C("$ZodIPv4", (e, t) => {
	t.pattern ??= Tn, O.init(e, t), e._zod.bag.format = "ipv4";
}), wr = /* @__PURE__ */ C("$ZodIPv6", (e, t) => {
	t.pattern ??= En, O.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Tr = /* @__PURE__ */ C("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Dn, O.init(e, t);
}), Er = /* @__PURE__ */ C("$ZodCIDRv6", (e, t) => {
	t.pattern ??= On, O.init(e, t), e._zod.check = (n) => {
		let r = n.value.split("/");
		try {
			if (r.length !== 2) throw Error();
			let [e, t] = r;
			if (!t) throw Error();
			let n = Number(t);
			if (`${n}` !== t || n < 0 || n > 128) throw Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function Dr(e) {
	if (e === "") return !0;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Or = /* @__PURE__ */ C("$ZodBase64", (e, t) => {
	t.pattern ??= kn, O.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Dr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function kr(e) {
	if (!An.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Dr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Ar = /* @__PURE__ */ C("$ZodBase64URL", (e, t) => {
	t.pattern ??= An, O.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		kr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), jr = /* @__PURE__ */ C("$ZodE164", (e, t) => {
	t.pattern ??= jn, O.init(e, t);
});
function Mr(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Nr = /* @__PURE__ */ C("$ZodJWT", (e, t) => {
	O.init(e, t), e._zod.check = (n) => {
		Mr(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Pr = /* @__PURE__ */ C("$ZodNumber", (e, t) => {
	D.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? zn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), Fr = /* @__PURE__ */ C("$ZodNumberFormat", (e, t) => {
	qn.init(e, t), Pr.init(e, t);
}), Ir = /* @__PURE__ */ C("$ZodBoolean", (e, t) => {
	D.init(e, t), e._zod.pattern = Bn, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), Lr = /* @__PURE__ */ C("$ZodUnknown", (e, t) => {
	D.init(e, t), e._zod.parse = (e) => e;
}), Rr = /* @__PURE__ */ C("$ZodNever", (e, t) => {
	D.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function zr(e, t, n) {
	e.issues.length && t.issues.push(...Ht(n, e.issues)), t.value[n] = e.value;
}
var Br = /* @__PURE__ */ C("$ZodArray", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		let a = [];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = t.element._zod.run({
				value: o,
				issues: []
			}, r);
			s instanceof Promise ? a.push(s.then((t) => zr(t, n, e))) : zr(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function Vr(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...Ht(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Hr(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = Mt(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function Ur(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optout === "optional";
	for (let i in t) {
		if (s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Vr(e, n, i, t, u))) : Vr(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var Wr = /* @__PURE__ */ C("$ZodObject", (e, t) => {
	if (D.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = ht(() => Hr(t));
	w(e._zod, "propValues", () => {
		let e = t.shape, n = {};
		for (let t in e) {
			let r = e[t]._zod;
			if (r.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (let e of r.values) n[t].add(e);
			}
		}
		return n;
	});
	let r = Tt, i = t.catchall, a;
	e._zod.parse = (t, o) => {
		a ??= n.value;
		let s = t.value;
		if (!r(s)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: s,
			inst: e
		}), t;
		t.value = {};
		let c = [], l = a.shape;
		for (let e of a.keys) {
			let n = l[e], r = n._zod.optout === "optional", i = n._zod.run({
				value: s[e],
				issues: []
			}, o);
			i instanceof Promise ? c.push(i.then((n) => Vr(n, t, e, s, r))) : Vr(i, t, e, s, r);
		}
		return i ? Ur(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), Gr = /* @__PURE__ */ C("$ZodObjectJIT", (e, t) => {
	Wr.init(e, t);
	let n = e._zod.parse, r = ht(() => Hr(t)), i = (e) => {
		let t = new ar([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = St(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = St(r), s = e[r]?._zod?.optout === "optional";
			t.write(`const ${n} = ${i(r)};`), s ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `);
		}
		t.write("payload.value = newResult;"), t.write("return payload;");
		let s = t.compile();
		return (t, n) => s(e, t, n);
	}, a, o = Tt, s = !dt.jitless, c = s && Et.value, l = t.catchall, u;
	e._zod.parse = (d, f) => {
		u ??= r.value;
		let p = d.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), d = a(d, f), l ? Ur([], p, d, f, u, e) : d) : n(d, f) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), d);
	};
});
function Kr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !Vt(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Wt(e, r, ft())))
	}), t);
}
var qr = /* @__PURE__ */ C("$ZodUnion", (e, t) => {
	D.init(e, t), w(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), w(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), w(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), w(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => _t(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1, r = t.options[0]._zod.run;
	e._zod.parse = (i, a) => {
		if (n) return r(i, a);
		let o = !1, s = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: i.value,
				issues: []
			}, a);
			if (t instanceof Promise) s.push(t), o = !0;
			else {
				if (t.issues.length === 0) return t;
				s.push(t);
			}
		}
		return o ? Promise.all(s).then((t) => Kr(t, i, e, a)) : Kr(s, i, e, a);
	};
}), Jr = /* @__PURE__ */ C("$ZodDiscriminatedUnion", (e, t) => {
	t.inclusive = !1, qr.init(e, t);
	let n = e._zod.parse;
	w(e._zod, "propValues", () => {
		let e = {};
		for (let n of t.options) {
			let r = n._zod.propValues;
			if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
			for (let [t, n] of Object.entries(r)) {
				e[t] || (e[t] = /* @__PURE__ */ new Set());
				for (let r of n) e[t].add(r);
			}
		}
		return e;
	});
	let r = ht(() => {
		let e = t.options, n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r._zod.propValues?.[t.discriminator];
			if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
			for (let t of e) {
				if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
				n.set(t, r);
			}
		}
		return n;
	});
	e._zod.parse = (i, a) => {
		let o = i.value;
		if (!Tt(o)) return i.issues.push({
			code: "invalid_type",
			expected: "object",
			input: o,
			inst: e
		}), i;
		let s = r.value.get(o?.[t.discriminator]);
		return s ? s._zod.run(i, a) : t.unionFallback ? n(i, a) : (i.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: t.discriminator,
			input: o,
			path: [t.discriminator],
			inst: e
		}), i);
	};
}), Yr = /* @__PURE__ */ C("$ZodIntersection", (e, t) => {
	D.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Zr(e, t, n)) : Zr(e, i, a);
	};
});
function Xr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Dt(e) && Dt(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = Xr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Xr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Zr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i;
	for (let n of t.issues) if (n.code === "unrecognized_keys") {
		i ??= n;
		for (let e of n.keys) r.has(e) || r.set(e, {}), r.get(e).l = !0;
	} else e.issues.push(n);
	for (let t of n.issues) if (t.code === "unrecognized_keys") for (let e of t.keys) r.has(e) || r.set(e, {}), r.get(e).r = !0;
	else e.issues.push(t);
	let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (a.length && i && e.issues.push({
		...i,
		keys: a
	}), Vt(e)) return e;
	let o = Xr(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var Qr = /* @__PURE__ */ C("$ZodRecord", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Dt(i)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		let a = [], o = t.keyType._zod.values;
		if (o) {
			n.value = {};
			let s = /* @__PURE__ */ new Set();
			for (let e of o) if (typeof e == "string" || typeof e == "number" || typeof e == "symbol") {
				s.add(typeof e == "number" ? e.toString() : e);
				let o = t.valueType._zod.run({
					value: i[e],
					issues: []
				}, r);
				o instanceof Promise ? a.push(o.then((t) => {
					t.issues.length && n.issues.push(...Ht(e, t.issues)), n.value[e] = t.value;
				})) : (o.issues.length && n.issues.push(...Ht(e, o.issues)), n.value[e] = o.value);
			}
			let c;
			for (let e in i) s.has(e) || (c ??= [], c.push(e));
			c && c.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: i,
				inst: e,
				keys: c
			});
		} else {
			n.value = {};
			for (let o of Reflect.ownKeys(i)) {
				if (o === "__proto__") continue;
				let s = t.keyType._zod.run({
					value: o,
					issues: []
				}, r);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof o == "string" && zn.test(o) && s.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(o),
						issues: []
					}, r);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (s = e);
				}
				if (s.issues.length) {
					t.mode === "loose" ? n.value[o] = i[o] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => Wt(e, r, ft())),
						input: o,
						path: [o],
						inst: e
					});
					continue;
				}
				let c = t.valueType._zod.run({
					value: i[o],
					issues: []
				}, r);
				c instanceof Promise ? a.push(c.then((e) => {
					e.issues.length && n.issues.push(...Ht(o, e.issues)), n.value[s.value] = e.value;
				})) : (c.issues.length && n.issues.push(...Ht(o, c.issues)), n.value[s.value] = c.value);
			}
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
}), $r = /* @__PURE__ */ C("$ZodEnum", (e, t) => {
	D.init(e, t);
	let n = pt(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => kt.has(typeof e)).map((e) => typeof e == "string" ? At(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), ei = /* @__PURE__ */ C("$ZodLiteral", (e, t) => {
	if (D.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? At(e) : e ? At(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), ti = /* @__PURE__ */ C("$ZodTransform", (e, t) => {
	D.init(e, t), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new ut(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new lt();
		return n.value = i, n;
	};
});
function ni(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
var ri = /* @__PURE__ */ C("$ZodOptional", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", w(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), w(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${_t(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((t) => ni(t, e.value)) : ni(r, e.value);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), ii = /* @__PURE__ */ C("$ZodExactOptional", (e, t) => {
	ri.init(e, t), w(e._zod, "values", () => t.innerType._zod.values), w(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), ai = /* @__PURE__ */ C("$ZodNullable", (e, t) => {
	D.init(e, t), w(e._zod, "optin", () => t.innerType._zod.optin), w(e._zod, "optout", () => t.innerType._zod.optout), w(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${_t(e.source)}|null)$`) : void 0;
	}), w(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), oi = /* @__PURE__ */ C("$ZodDefault", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", w(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => si(e, t)) : si(r, t);
	};
});
function si(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var ci = /* @__PURE__ */ C("$ZodPrefault", (e, t) => {
	D.init(e, t), e._zod.optin = "optional", w(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), li = /* @__PURE__ */ C("$ZodNonOptional", (e, t) => {
	D.init(e, t), w(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => ui(t, e)) : ui(i, e);
	};
});
function ui(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var di = /* @__PURE__ */ C("$ZodCatch", (e, t) => {
	D.init(e, t), w(e._zod, "optin", () => t.innerType._zod.optin), w(e._zod, "optout", () => t.innerType._zod.optout), w(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => Wt(e, n, ft())) },
			input: e.value
		}), e.issues = []), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => Wt(e, n, ft())) },
			input: e.value
		}), e.issues = []), e);
	};
}), fi = /* @__PURE__ */ C("$ZodPipe", (e, t) => {
	D.init(e, t), w(e._zod, "values", () => t.in._zod.values), w(e._zod, "optin", () => t.in._zod.optin), w(e._zod, "optout", () => t.out._zod.optout), w(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => pi(e, t.in, n)) : pi(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => pi(e, t.out, n)) : pi(r, t.out, n);
	};
});
function pi(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var mi = /* @__PURE__ */ C("$ZodReadonly", (e, t) => {
	D.init(e, t), w(e._zod, "propValues", () => t.innerType._zod.propValues), w(e._zod, "values", () => t.innerType._zod.values), w(e._zod, "optin", () => t.innerType?._zod?.optin), w(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(hi) : hi(r);
	};
});
function hi(e) {
	return e.value = Object.freeze(e.value), e;
}
var gi = /* @__PURE__ */ C("$ZodCustom", (e, t) => {
	E.init(e, t), D.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => _i(t, n, r, e));
		_i(i, n, r, e);
	};
});
function _i(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(Kt(e));
	}
}
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/registries.js
var vi, yi = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function bi() {
	return new yi();
}
(vi = globalThis).__zod_globalRegistry ?? (vi.__zod_globalRegistry = bi());
var xi = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function Si(e, t) {
	return new e({
		type: "string",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ci(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function wi(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ti(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ei(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Di(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Oi(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ki(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ai(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ji(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Mi(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ni(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Pi(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fi(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ii(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Li(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ri(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zi(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bi(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vi(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Hi(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ui(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Wi(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Gi(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ki(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qi(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ji(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Yi(e, t) {
	return new e({
		type: "number",
		checks: [],
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xi(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zi(e, t) {
	return new e({
		type: "boolean",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Qi(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function $i(e, t) {
	return new e({
		type: "never",
		...T(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ea(e, t) {
	return new Wn({
		check: "less_than",
		...T(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ta(e, t) {
	return new Wn({
		check: "less_than",
		...T(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function na(e, t) {
	return new Gn({
		check: "greater_than",
		...T(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ra(e, t) {
	return new Gn({
		check: "greater_than",
		...T(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ia(e, t) {
	return new Kn({
		check: "multiple_of",
		...T(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function aa(e, t) {
	return new Jn({
		check: "max_length",
		...T(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function oa(e, t) {
	return new Yn({
		check: "min_length",
		...T(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function sa(e, t) {
	return new Xn({
		check: "length_equals",
		...T(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ca(e, t) {
	return new Qn({
		check: "string_format",
		format: "regex",
		...T(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function la(e) {
	return new $n({
		check: "string_format",
		format: "lowercase",
		...T(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ua(e) {
	return new er({
		check: "string_format",
		format: "uppercase",
		...T(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function da(e, t) {
	return new tr({
		check: "string_format",
		format: "includes",
		...T(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fa(e, t) {
	return new nr({
		check: "string_format",
		format: "starts_with",
		...T(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pa(e, t) {
	return new rr({
		check: "string_format",
		format: "ends_with",
		...T(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ma(e) {
	return new ir({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ha(e) {
	return /* @__PURE__ */ ma((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function ga() {
	return /* @__PURE__ */ ma((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _a() {
	return /* @__PURE__ */ ma((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function va() {
	return /* @__PURE__ */ ma((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function ya() {
	return /* @__PURE__ */ ma((e) => Ct(e));
}
/* @__NO_SIDE_EFFECTS__ */
function ba(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...T(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xa(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...T(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Sa(e) {
	let t = /* @__PURE__ */ Ca((n) => (n.addIssue = (e) => {
		if (typeof e == "string") n.issues.push(Kt(e, n.value, t._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= n.value, r.inst ??= t, r.continue ??= !t._zod.def.abort, n.issues.push(Kt(r));
		}
	}, e(n.value, n)));
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function Ca(e, t) {
	let n = new E({
		check: "custom",
		...T(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/to-json-schema.js
function wa(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? xi,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function k(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o);
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, k(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && A(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Ta(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${a}`
			};
		}
		if (t[1] === n) return { ref: "#" };
		let i = `#/${r}/`, a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + a
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
}
function Ea(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Object.assign(i, s), Object.assign(i, a), t._zod.parent === o) for (let e in i) e === "$ref" || e === "allOf" || e in a || delete i[e];
			if (s.$ref && n.def) for (let e in i) e === "$ref" || e === "allOf" || e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e === "$ref" || e === "allOf" || e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (let t of [...e.seen.entries()].reverse()) r(t[0]);
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	let a = e.external?.defs ?? {};
	for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (a[e.defId] = e.def);
	}
	e.external || Object.keys(a).length > 0 && (e.target === "draft-2020-12" ? i.$defs = a : i.definitions = a);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Oa(t, "input", e.processors),
					output: Oa(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function A(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return A(r.element, n);
	if (r.type === "set") return A(r.valueType, n);
	if (r.type === "lazy") return A(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return A(r.innerType, n);
	if (r.type === "intersection") return A(r.left, n) || A(r.right, n);
	if (r.type === "record" || r.type === "map") return A(r.keyType, n) || A(r.valueType, n);
	if (r.type === "pipe") return A(r.in, n) || A(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (A(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (A(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (A(e, n)) return !0;
		return !!(r.rest && A(r.rest, n));
	}
	return !1;
}
var Da = (e, t = {}) => (n) => {
	let r = wa({
		...n,
		processors: t
	});
	return k(e, r), Ta(r, e), Ea(r, e);
}, Oa = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = wa({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return k(e, o), Ta(o, e), Ea(o, e);
}, ka = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Aa = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = ka[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, ja = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	typeof s == "string" && s.includes("int") ? i.type = "integer" : i.type = "number", typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u), typeof a == "number" && (i.minimum = a, typeof u == "number" && t.target !== "draft-04" && (u >= a ? delete i.minimum : delete i.exclusiveMinimum)), typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l), typeof o == "number" && (i.maximum = o, typeof l == "number" && t.target !== "draft-04" && (l <= o ? delete i.maximum : delete i.exclusiveMaximum)), typeof c == "number" && (i.multipleOf = c);
}, Ma = (e, t, n, r) => {
	n.type = "boolean";
}, Na = (e, t, n, r) => {
	n.not = {};
}, Pa = (e, t, n, r) => {
	let i = e._zod.def, a = pt(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Fa = (e, t, n, r) => {
	let i = e._zod.def, a = [];
	for (let e of i.values) if (e === void 0) {
		if (t.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof e == "bigint") {
		if (t.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
		a.push(Number(e));
	} else a.push(e);
	if (a.length !== 0) if (a.length === 1) {
		let e = a[0];
		n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
	} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
}, Ia = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, La = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, Ra = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = k(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, za = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = k(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	});
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e]._zod;
		return t.io === "input" ? n.optin === void 0 : n.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = k(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Ba = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => k(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Va = (e, t, n, r) => {
	let i = e._zod.def, a = k(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = k(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, Ha = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = o._zod.bag?.patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = k(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) i.patternProperties[t.source] = e;
	} else (t.target === "draft-07" || t.target === "draft-2020-12") && (i.propertyNames = k(a.keyType, t, {
		...r,
		path: [...r.path, "propertyNames"]
	})), i.additionalProperties = k(a.valueType, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	});
	let c = o._zod.values;
	if (c) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e);
	}
}, Ua = (e, t, n, r) => {
	let i = e._zod.def, a = k(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Wa = (e, t, n, r) => {
	let i = e._zod.def;
	k(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ga = (e, t, n, r) => {
	let i = e._zod.def;
	k(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, Ka = (e, t, n, r) => {
	let i = e._zod.def;
	k(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, qa = (e, t, n, r) => {
	let i = e._zod.def;
	k(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, Ja = (e, t, n, r) => {
	let i = e._zod.def, a = t.io === "input" ? i.in._zod.def.type === "transform" ? i.out : i.in : i.out;
	k(a, t, r);
	let o = t.seen.get(e);
	o.ref = a;
}, Ya = (e, t, n, r) => {
	let i = e._zod.def;
	k(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Xa = (e, t, n, r) => {
	let i = e._zod.def;
	k(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Za = /* @__PURE__ */ C("ZodISODateTime", (e, t) => {
	yr.init(e, t), P.init(e, t);
});
function Qa(e) {
	return /* @__PURE__ */ Gi(Za, e);
}
var $a = /* @__PURE__ */ C("ZodISODate", (e, t) => {
	br.init(e, t), P.init(e, t);
});
function eo(e) {
	return /* @__PURE__ */ Ki($a, e);
}
var to = /* @__PURE__ */ C("ZodISOTime", (e, t) => {
	xr.init(e, t), P.init(e, t);
});
function no(e) {
	return /* @__PURE__ */ qi(to, e);
}
var ro = /* @__PURE__ */ C("ZodISODuration", (e, t) => {
	Sr.init(e, t), P.init(e, t);
});
function io(e) {
	return /* @__PURE__ */ Ji(ro, e);
}
//#endregion
//#region node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/classic/errors.js
var ao = (e, t) => {
	Jt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => Zt(e, t) },
		flatten: { value: (t) => Xt(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, mt, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, mt, 2);
		} },
		isEmpty: { get() {
			return e.issues.length === 0;
		} }
	});
};
C("ZodError", ao);
var j = C("ZodError", ao, { Parent: Error }), oo = /* @__PURE__ */ Qt(j), so = /* @__PURE__ */ $t(j), co = /* @__PURE__ */ en(j), lo = /* @__PURE__ */ nn(j), uo = /* @__PURE__ */ an(j), fo = /* @__PURE__ */ on(j), po = /* @__PURE__ */ sn(j), mo = /* @__PURE__ */ cn(j), ho = /* @__PURE__ */ ln(j), go = /* @__PURE__ */ un(j), _o = /* @__PURE__ */ dn(j), vo = /* @__PURE__ */ fn(j), M = /* @__PURE__ */ C("ZodType", (e, t) => (D.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Oa(e, "input"),
	output: Oa(e, "output")
} }), e.toJSONSchema = Da(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(xt(t, { checks: [...t.checks ?? [], ...n.map((e) => typeof e == "function" ? { _zod: {
	check: e,
	def: { check: "custom" },
	onattach: []
} } : e)] }), { parent: !0 }), e.with = e.check, e.clone = (t, n) => jt(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.parse = (t, n) => oo(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => co(e, t, n), e.parseAsync = async (t, n) => so(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => lo(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => uo(e, t, n), e.decode = (t, n) => fo(e, t, n), e.encodeAsync = async (t, n) => po(e, t, n), e.decodeAsync = async (t, n) => mo(e, t, n), e.safeEncode = (t, n) => ho(e, t, n), e.safeDecode = (t, n) => go(e, t, n), e.safeEncodeAsync = async (t, n) => _o(e, t, n), e.safeDecodeAsync = async (t, n) => vo(e, t, n), e.refine = (t, n) => e.check(Ns(t, n)), e.superRefine = (t) => e.check(Ps(t)), e.overwrite = (t) => e.check(/* @__PURE__ */ ma(t)), e.optional = () => hs(e), e.exactOptional = () => _s(e), e.nullable = () => ys(e), e.nullish = () => hs(ys(e)), e.nonoptional = (t) => Ts(e, t), e.array = () => Zo(e), e.or = (t) => ts([e, t]), e.and = (t) => as(e, t), e.transform = (t) => ks(e, ps(t)), e.default = (t) => xs(e, t), e.prefault = (t) => Cs(e, t), e.catch = (t) => Ds(e, t), e.pipe = (t) => ks(e, t), e.readonly = () => js(e), e.describe = (t) => {
	let n = e.clone();
	return xi.add(n, { description: t }), n;
}, Object.defineProperty(e, "description", {
	get() {
		return xi.get(e)?.description;
	},
	configurable: !0
}), e.meta = (...t) => {
	if (t.length === 0) return xi.get(e);
	let n = e.clone();
	return xi.add(n, t[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (t) => t(e), e)), yo = /* @__PURE__ */ C("_ZodString", (e, t) => {
	sr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Aa(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...t) => e.check(/* @__PURE__ */ ca(...t)), e.includes = (...t) => e.check(/* @__PURE__ */ da(...t)), e.startsWith = (...t) => e.check(/* @__PURE__ */ fa(...t)), e.endsWith = (...t) => e.check(/* @__PURE__ */ pa(...t)), e.min = (...t) => e.check(/* @__PURE__ */ oa(...t)), e.max = (...t) => e.check(/* @__PURE__ */ aa(...t)), e.length = (...t) => e.check(/* @__PURE__ */ sa(...t)), e.nonempty = (...t) => e.check(/* @__PURE__ */ oa(1, ...t)), e.lowercase = (t) => e.check(/* @__PURE__ */ la(t)), e.uppercase = (t) => e.check(/* @__PURE__ */ ua(t)), e.trim = () => e.check(/* @__PURE__ */ ga()), e.normalize = (...t) => e.check(/* @__PURE__ */ ha(...t)), e.toLowerCase = () => e.check(/* @__PURE__ */ _a()), e.toUpperCase = () => e.check(/* @__PURE__ */ va()), e.slugify = () => e.check(/* @__PURE__ */ ya());
}), bo = /* @__PURE__ */ C("ZodString", (e, t) => {
	sr.init(e, t), yo.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ Ci(xo, t)), e.url = (t) => e.check(/* @__PURE__ */ ki(wo, t)), e.jwt = (t) => e.check(/* @__PURE__ */ Wi(zo, t)), e.emoji = (t) => e.check(/* @__PURE__ */ Ai(To, t)), e.guid = (t) => e.check(/* @__PURE__ */ wi(So, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Ti(Co, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ Ei(Co, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Di(Co, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Oi(Co, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ ji(Eo, t)), e.guid = (t) => e.check(/* @__PURE__ */ wi(So, t)), e.cuid = (t) => e.check(/* @__PURE__ */ Mi(Do, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ Ni(Oo, t)), e.ulid = (t) => e.check(/* @__PURE__ */ Pi(ko, t)), e.base64 = (t) => e.check(/* @__PURE__ */ Vi(Io, t)), e.base64url = (t) => e.check(/* @__PURE__ */ Hi(Lo, t)), e.xid = (t) => e.check(/* @__PURE__ */ Fi(Ao, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ Ii(jo, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ Li(Mo, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ Ri(No, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ zi(Po, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ Bi(Fo, t)), e.e164 = (t) => e.check(/* @__PURE__ */ Ui(Ro, t)), e.datetime = (t) => e.check(Qa(t)), e.date = (t) => e.check(eo(t)), e.time = (t) => e.check(no(t)), e.duration = (t) => e.check(io(t));
});
function N(e) {
	return /* @__PURE__ */ Si(bo, e);
}
var P = /* @__PURE__ */ C("ZodStringFormat", (e, t) => {
	O.init(e, t), yo.init(e, t);
}), xo = /* @__PURE__ */ C("ZodEmail", (e, t) => {
	ur.init(e, t), P.init(e, t);
}), So = /* @__PURE__ */ C("ZodGUID", (e, t) => {
	cr.init(e, t), P.init(e, t);
}), Co = /* @__PURE__ */ C("ZodUUID", (e, t) => {
	lr.init(e, t), P.init(e, t);
}), wo = /* @__PURE__ */ C("ZodURL", (e, t) => {
	dr.init(e, t), P.init(e, t);
}), To = /* @__PURE__ */ C("ZodEmoji", (e, t) => {
	fr.init(e, t), P.init(e, t);
}), Eo = /* @__PURE__ */ C("ZodNanoID", (e, t) => {
	pr.init(e, t), P.init(e, t);
}), Do = /* @__PURE__ */ C("ZodCUID", (e, t) => {
	mr.init(e, t), P.init(e, t);
}), Oo = /* @__PURE__ */ C("ZodCUID2", (e, t) => {
	hr.init(e, t), P.init(e, t);
}), ko = /* @__PURE__ */ C("ZodULID", (e, t) => {
	gr.init(e, t), P.init(e, t);
}), Ao = /* @__PURE__ */ C("ZodXID", (e, t) => {
	_r.init(e, t), P.init(e, t);
}), jo = /* @__PURE__ */ C("ZodKSUID", (e, t) => {
	vr.init(e, t), P.init(e, t);
}), Mo = /* @__PURE__ */ C("ZodIPv4", (e, t) => {
	Cr.init(e, t), P.init(e, t);
}), No = /* @__PURE__ */ C("ZodIPv6", (e, t) => {
	wr.init(e, t), P.init(e, t);
}), Po = /* @__PURE__ */ C("ZodCIDRv4", (e, t) => {
	Tr.init(e, t), P.init(e, t);
}), Fo = /* @__PURE__ */ C("ZodCIDRv6", (e, t) => {
	Er.init(e, t), P.init(e, t);
}), Io = /* @__PURE__ */ C("ZodBase64", (e, t) => {
	Or.init(e, t), P.init(e, t);
}), Lo = /* @__PURE__ */ C("ZodBase64URL", (e, t) => {
	Ar.init(e, t), P.init(e, t);
}), Ro = /* @__PURE__ */ C("ZodE164", (e, t) => {
	jr.init(e, t), P.init(e, t);
}), zo = /* @__PURE__ */ C("ZodJWT", (e, t) => {
	Nr.init(e, t), P.init(e, t);
}), Bo = /* @__PURE__ */ C("ZodNumber", (e, t) => {
	Pr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => ja(e, t, n, r), e.gt = (t, n) => e.check(/* @__PURE__ */ na(t, n)), e.gte = (t, n) => e.check(/* @__PURE__ */ ra(t, n)), e.min = (t, n) => e.check(/* @__PURE__ */ ra(t, n)), e.lt = (t, n) => e.check(/* @__PURE__ */ ea(t, n)), e.lte = (t, n) => e.check(/* @__PURE__ */ ta(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ ta(t, n)), e.int = (t) => e.check(Uo(t)), e.safe = (t) => e.check(Uo(t)), e.positive = (t) => e.check(/* @__PURE__ */ na(0, t)), e.nonnegative = (t) => e.check(/* @__PURE__ */ ra(0, t)), e.negative = (t) => e.check(/* @__PURE__ */ ea(0, t)), e.nonpositive = (t) => e.check(/* @__PURE__ */ ta(0, t)), e.multipleOf = (t, n) => e.check(/* @__PURE__ */ ia(t, n)), e.step = (t, n) => e.check(/* @__PURE__ */ ia(t, n)), e.finite = () => e;
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function Vo(e) {
	return /* @__PURE__ */ Yi(Bo, e);
}
var Ho = /* @__PURE__ */ C("ZodNumberFormat", (e, t) => {
	Fr.init(e, t), Bo.init(e, t);
});
function Uo(e) {
	return /* @__PURE__ */ Xi(Ho, e);
}
var Wo = /* @__PURE__ */ C("ZodBoolean", (e, t) => {
	Ir.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ma(e, t, n, r);
});
function Go(e) {
	return /* @__PURE__ */ Zi(Wo, e);
}
var Ko = /* @__PURE__ */ C("ZodUnknown", (e, t) => {
	Lr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function qo() {
	return /* @__PURE__ */ Qi(Ko);
}
var Jo = /* @__PURE__ */ C("ZodNever", (e, t) => {
	Rr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Na(e, t, n, r);
});
function Yo(e) {
	return /* @__PURE__ */ $i(Jo, e);
}
var Xo = /* @__PURE__ */ C("ZodArray", (e, t) => {
	Br.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ra(e, t, n, r), e.element = t.element, e.min = (t, n) => e.check(/* @__PURE__ */ oa(t, n)), e.nonempty = (t) => e.check(/* @__PURE__ */ oa(1, t)), e.max = (t, n) => e.check(/* @__PURE__ */ aa(t, n)), e.length = (t, n) => e.check(/* @__PURE__ */ sa(t, n)), e.unwrap = () => e.element;
});
function Zo(e, t) {
	return /* @__PURE__ */ ba(Xo, e, t);
}
var Qo = /* @__PURE__ */ C("ZodObject", (e, t) => {
	Gr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => za(e, t, n, r), w(e, "shape", () => t.shape), e.keyof = () => ls(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({
		...e._zod.def,
		catchall: t
	}), e.passthrough = () => e.clone({
		...e._zod.def,
		catchall: qo()
	}), e.loose = () => e.clone({
		...e._zod.def,
		catchall: qo()
	}), e.strict = () => e.clone({
		...e._zod.def,
		catchall: Yo()
	}), e.strip = () => e.clone({
		...e._zod.def,
		catchall: void 0
	}), e.extend = (t) => It(e, t), e.safeExtend = (t) => Lt(e, t), e.merge = (t) => Rt(e, t), e.pick = (t) => Pt(e, t), e.omit = (t) => Ft(e, t), e.partial = (...t) => zt(ms, e, t[0]), e.required = (...t) => Bt(ws, e, t[0]);
});
function $o(e, t) {
	return new Qo({
		type: "object",
		shape: e ?? {},
		...T(t)
	});
}
var es = /* @__PURE__ */ C("ZodUnion", (e, t) => {
	qr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ba(e, t, n, r), e.options = t.options;
});
function ts(e, t) {
	return new es({
		type: "union",
		options: e,
		...T(t)
	});
}
var ns = /* @__PURE__ */ C("ZodDiscriminatedUnion", (e, t) => {
	es.init(e, t), Jr.init(e, t);
});
function rs(e, t, n) {
	return new ns({
		type: "union",
		options: t,
		discriminator: e,
		...T(n)
	});
}
var is = /* @__PURE__ */ C("ZodIntersection", (e, t) => {
	Yr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Va(e, t, n, r);
});
function as(e, t) {
	return new is({
		type: "intersection",
		left: e,
		right: t
	});
}
var os = /* @__PURE__ */ C("ZodRecord", (e, t) => {
	Qr.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ha(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ss(e, t, n) {
	return new os({
		type: "record",
		keyType: e,
		valueType: t,
		...T(n)
	});
}
var cs = /* @__PURE__ */ C("ZodEnum", (e, t) => {
	$r.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pa(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new cs({
			...t,
			checks: [],
			...T(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new cs({
			...t,
			checks: [],
			...T(r),
			entries: i
		});
	};
});
function ls(e, t) {
	return new cs({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...T(t)
	});
}
var us = /* @__PURE__ */ C("ZodLiteral", (e, t) => {
	ei.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fa(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function ds(e, t) {
	return new us({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...T(t)
	});
}
var fs = /* @__PURE__ */ C("ZodTransform", (e, t) => {
	ti.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => La(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new ut(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(Kt(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(Kt(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function ps(e) {
	return new fs({
		type: "transform",
		transform: e
	});
}
var ms = /* @__PURE__ */ C("ZodOptional", (e, t) => {
	ri.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function hs(e) {
	return new ms({
		type: "optional",
		innerType: e
	});
}
var gs = /* @__PURE__ */ C("ZodExactOptional", (e, t) => {
	ii.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function _s(e) {
	return new gs({
		type: "optional",
		innerType: e
	});
}
var vs = /* @__PURE__ */ C("ZodNullable", (e, t) => {
	ai.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ua(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ys(e) {
	return new vs({
		type: "nullable",
		innerType: e
	});
}
var bs = /* @__PURE__ */ C("ZodDefault", (e, t) => {
	oi.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ga(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function xs(e, t) {
	return new bs({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ot(t);
		}
	});
}
var Ss = /* @__PURE__ */ C("ZodPrefault", (e, t) => {
	ci.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ka(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Cs(e, t) {
	return new Ss({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ot(t);
		}
	});
}
var ws = /* @__PURE__ */ C("ZodNonOptional", (e, t) => {
	li.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Wa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ts(e, t) {
	return new ws({
		type: "nonoptional",
		innerType: e,
		...T(t)
	});
}
var Es = /* @__PURE__ */ C("ZodCatch", (e, t) => {
	di.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => qa(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ds(e, t) {
	return new Es({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var Os = /* @__PURE__ */ C("ZodPipe", (e, t) => {
	fi.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ja(e, t, n, r), e.in = t.in, e.out = t.out;
});
function ks(e, t) {
	return new Os({
		type: "pipe",
		in: e,
		out: t
	});
}
var As = /* @__PURE__ */ C("ZodReadonly", (e, t) => {
	mi.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ya(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function js(e) {
	return new As({
		type: "readonly",
		innerType: e
	});
}
var Ms = /* @__PURE__ */ C("ZodCustom", (e, t) => {
	gi.init(e, t), M.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ia(e, t, n, r);
});
function Ns(e, t = {}) {
	return /* @__PURE__ */ xa(Ms, e, t);
}
function Ps(e) {
	return /* @__PURE__ */ Sa(e);
}
//#endregion
//#region src/functions/utilities.ts
function Fs(e) {
	return e.replace(/^[\s\p{P}]+/gu, "");
}
var Is = (e) => e.toSorted((e, t) => {
	let n = Fs(e.name || ""), r = Fs(t.name || "");
	return n.localeCompare(r);
});
function Ls(e) {
	return typeof e == "function";
}
var Rs = (e, t, n) => {
	let r = e?.length ?? 0, i = Math.max(0, t - r), a = Ls(n) ? Array(i).fill(0).map((e, t) => n(t + r)) : Array(i).fill(n);
	return [...e || [], ...a];
}, zs = (e, t, n) => Rs(e, t, n).slice(0, t), Bs = (e, t) => {
	let n = {}, r = 0;
	for (let i in t) n[i] = e(t[i], i, r), r += 1;
	return n;
}, Vs = (e) => e == null || e === "", Hs = (e) => [...e.children.flatMap(Hs), ...e.content], Us = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function Ws() {
	return !!game?.modules?.get("_dev-mode")?.api?.getPackageDebugValue(a);
}
function Gs(e) {
	if (e === void 0) throw Error("t was undefined");
}
function Ks(e, t, n) {
	let r = {};
	for (let i in n) i === e ? r[t] = n[e] : r[i] = n[i];
	return r;
}
function qs(e, t) {
	let n = {
		hook: e,
		payload: t
	};
	game.socket?.emit(ce, n), Hooks.call(e, ...t);
}
function Js(e) {
	e && qs(se, [{ combatantId: e }]);
}
function Ys() {
	qs(de, []);
}
async function Xs(e) {
	let t = document.createElement("input");
	t.type = "file", t.accept = e;
	let n = await new Promise((e, n) => {
		t.onchange = () => {
			let r = t.files?.[0];
			r ? e(r) : n(/* @__PURE__ */ Error("Aborted"));
		}, t.oncancel = () => {
			n(/* @__PURE__ */ Error("Aborted"));
		}, t.click();
	}), r = new FileReader(), i = new Promise((e, t) => {
		r.addEventListener("loadend", () => {
			e(r.result === null ? "" : typeof r.result == "string" ? r.result : new TextDecoder("utf-8").decode(new Uint8Array(r.result)));
		});
	});
	return r.readAsText(n), i;
}
var Zs = (e) => (t) => Object.fromEntries(Object.entries(t).map(([t, n], r) => [t, e(n, t, r)]));
function Qs(e, t) {
	let n = Object.entries(e), r = n.findIndex(([e]) => e === t);
	if (r === 0) throw Error(`Cannot move up from index ${r}`);
	if (r >= n.length || r < 0) throw Error(`Index ${r} out of range`);
	let i = n[r];
	return n.splice(r, 1), n.splice(r - 1, 0, i), Object.fromEntries(n);
}
function $s(e, t) {
	let n = Object.entries(e), r = n.findIndex(([e]) => e === t);
	if (r === n.length - 1) throw Error("Cannot move down from last index");
	if (r >= n.length || r < 0) throw Error(`Index ${r} out of range`);
	let i = n[r];
	return n.splice(r, 1), n.splice(r + 1, 0, i), Object.fromEntries(n);
}
function ec(e) {
	return e.bind(null, `%c${a}`, "\n      color: white;\n      background: #1d5d5d;\n      padding: 0px 0.5em;\n      border-radius: 1em;\n      border: 1px solid oklch(0.7 0.0633 195.09);\n      background-image: linear-gradient(\n        90deg,\n        oklch(0.4387 0.0633 195.09) 0%,\n        oklch(0.6068 0.0633 195.09) 100%\n      );\n      ");
}
var tc = {
	log: ec(console.log),
	info: ec(console.info),
	warn: ec(console.warn),
	error: ec(console.error),
	debug: ec(console.debug)
};
function nc(e) {
	let t = [!1];
	return () => (t[0] || (t = [!0, e()]), t[1]);
}
function rc(e, t) {
	let n = null;
	return (...r) => {
		n && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
function ic(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		a - n > t && (n = a);
		let o = n + t - a;
		r && clearTimeout(r), r = setTimeout(() => {
			e(...i), r = null, n = Date.now();
		}, o);
	};
}
function ac(e, t) {
	return e.find((e) => e.id === t);
}
//#endregion
//#region src/presets.ts
var F = {
	schemaVersion: "v1",
	displayName: "Trail of Cthulhu (built-in)",
	defaultThemeName: "tealTheme",
	investigativeAbilityCategories: [
		"Academic",
		"Interpersonal",
		"Technical"
	],
	generalAbilityCategories: ["General"],
	combatAbilities: [
		"Scuffling",
		"Weapons",
		"Firearms",
		"Athletics"
	],
	occupationLabel: "Occupation",
	personalDetails: [{
		name: "Drive",
		type: "item"
	}],
	longNotes: [
		"Notes, Contacts etc.",
		"Occupational Benefits",
		"Pillars of Sanity",
		"Sources of Stability"
	],
	newPCPacks: [`${a}.${S.pathOfCthulhuAbilities}`],
	newNPCPacks: [`${a}.${re}`],
	useBoost: !1,
	useMwStyleAbilities: !1,
	mwUseAlternativeItemTypes: !1,
	useMwInjuryStatus: !1,
	genericOccupation: "Investigator",
	mwHiddenShortNotes: [],
	showEmptyInvestigativeCategories: !1,
	pcStats: { hitThreshold: {
		name: "Hit threshold",
		default: 3
	} },
	npcStats: {
		hitThreshold: {
			name: "Hit threshold",
			default: 3
		},
		armor: {
			name: "Armor",
			default: 0
		},
		alertness: {
			name: "Alertness",
			default: 0
		},
		stealth: {
			name: "Stealth",
			default: 0
		},
		stabilityLoss: {
			name: "Stability Loss",
			default: 0
		}
	},
	useNpcCombatBonuses: !1,
	useTurnPassingInitiative: !1,
	equipmentCategories: { general: {
		name: "General",
		fields: {}
	} },
	useCards: !1,
	cardCategories: []
}, oc = {
	pathOfCthulhuPreset: F,
	niceBlackAgentsPreset: {
		schemaVersion: "v1",
		displayName: "Night's Black Agents (built-in)",
		defaultThemeName: "niceTheme",
		investigativeAbilityCategories: [
			"Academic",
			"Interpersonal",
			"Technical"
		],
		generalAbilityCategories: ["General"],
		combatAbilities: [
			"Hand-to-Hand",
			"Weapons",
			"Shooting",
			"Athletics"
		],
		occupationLabel: "Background",
		personalDetails: [{
			name: "Drive",
			type: "item"
		}, {
			name: "Previous Patron",
			type: "item"
		}],
		longNotes: [
			"Covers",
			"Network Contacts",
			"Trust"
		],
		newPCPacks: [`${a}.${S.niceBlackAgentsAbilities}`],
		newNPCPacks: [`${a}.${S.niceBlackAgentsNPCAbilities}`],
		useBoost: !1,
		useMwStyleAbilities: !1,
		mwUseAlternativeItemTypes: !1,
		useMwInjuryStatus: !1,
		genericOccupation: "Investigator",
		pcStats: F.pcStats,
		npcStats: F.npcStats,
		equipmentCategories: { general: {
			name: "General",
			fields: {}
		} }
	},
	nothingToFearPreset: {
		schemaVersion: "v1",
		displayName: "Fear Itself (built-in)",
		defaultThemeName: "fearTheme",
		investigativeAbilityCategories: [
			"Academic",
			"Interpersonal",
			"Technical",
			"Psychic Powers"
		],
		generalAbilityCategories: ["General"],
		combatAbilities: [
			"Scuffling",
			"Shooting",
			"Athletics"
		],
		occupationLabel: "Concept",
		personalDetails: [],
		longNotes: [
			"Risk Factors",
			"Sources of Stability",
			"Notes"
		],
		newPCPacks: [`${a}.${S.nothingToFearAbilities}`],
		newNPCPacks: [`${a}.${re}`],
		useBoost: !1,
		useMwStyleAbilities: !1,
		mwUseAlternativeItemTypes: !1,
		useMwInjuryStatus: !1,
		genericOccupation: "Investigator",
		pcStats: F.pcStats,
		npcStats: F.npcStats,
		equipmentCategories: { general: {
			name: "General",
			fields: {}
		} }
	},
	pallidStarsPreset: {
		schemaVersion: "v1",
		displayName: "Ashen Stars (built-in)",
		defaultThemeName: "pallidTheme",
		investigativeAbilityCategories: [
			"Academic",
			"Interpersonal",
			"Technical",
			"Special"
		],
		generalAbilityCategories: ["General"],
		combatAbilities: ["Scuffling", "Shooting"],
		occupationLabel: "Species",
		personalDetails: [
			{
				name: "Drive",
				type: "item"
			},
			{
				name: "Groundside Post",
				type: "item"
			},
			{
				name: "Warpside Post",
				type: "item"
			}
		],
		longNotes: [
			"Personal Arc",
			"Cybernetic Enhancements",
			"Viroware Enhancements",
			"What You Did During The War"
		],
		newPCPacks: [`${a}.${S.pallidStarsAbilities}`],
		newNPCPacks: [`${a}.${re}`],
		useBoost: !0,
		useMwStyleAbilities: !1,
		mwUseAlternativeItemTypes: !1,
		useMwInjuryStatus: !1,
		genericOccupation: "Investigator",
		pcStats: F.pcStats,
		npcStats: F.npcStats,
		equipmentCategories: {
			general: {
				name: "Gear",
				fields: {}
			},
			I5ujOaf_930T5m6XF59w0: {
				name: "Cybernetics",
				fields: { achu_d$31aq461l3pn1zs: {
					name: "Upkeep",
					type: "number",
					default: 0,
					min: 0
				} }
			},
			omvQkNoORdSNhVgI42hYi: {
				name: "Virusware",
				fields: { YdjIcb6lTZpa07DynCO1C: {
					name: "Upkeep",
					type: "number",
					default: 0,
					min: 0
				} }
			}
		}
	},
	castingTheRunesPreset: {
		schemaVersion: "v1",
		displayName: "Casting the Runes (built-in)",
		defaultThemeName: "antiquarianTheme",
		investigativeAbilityCategories: [
			"Academic",
			"Interpersonal",
			"Technical"
		],
		generalAbilityCategories: ["General"],
		combatAbilities: ["Scuffling", "Weapons"],
		occupationLabel: "Occupation",
		personalDetails: [{
			name: "Drive",
			type: "item"
		}],
		longNotes: [
			"Income",
			"Contacts",
			"Magic",
			"Sources of Stability",
			"Things Encountered"
		],
		newPCPacks: [`${a}.${S.castingTheRunesAbilities}`],
		newNPCPacks: [`${a}.${re}`],
		useBoost: !1,
		useMwStyleAbilities: !1,
		mwUseAlternativeItemTypes: !1,
		useMwInjuryStatus: !1,
		genericOccupation: "Investigator",
		pcStats: F.pcStats,
		npcStats: F.npcStats,
		equipmentCategories: { general: {
			name: "General",
			fields: {}
		} }
	},
	moribundWorldPreset: {
		schemaVersion: "v1",
		displayName: "Dying Earth (built-in)",
		defaultThemeName: "olderThanMemoryTheme",
		investigativeAbilityCategories: [],
		generalAbilityCategories: [
			"Persuade",
			"Rebuff",
			"Attack",
			"Defense",
			"Resist",
			"Magic",
			"Health",
			"General"
		],
		combatAbilities: [
			"Strength",
			"Speed",
			"Finesse",
			"Cunning",
			"Ferocity",
			"Caution"
		],
		occupationLabel: "Précis",
		personalDetails: [{
			name: "Series level",
			type: "item"
		}],
		longNotes: [
			"General",
			"Facial Features",
			"Hair",
			"Notable Mannerisms",
			"Costume"
		],
		newPCPacks: [`${a}.${S.moribundWorldAbilities}`],
		newNPCPacks: [`${a}.${S.moribundWorldAbilities}`],
		useBoost: !1,
		useMwStyleAbilities: !0,
		mwUseAlternativeItemTypes: !0,
		mwHiddenShortNotes: ["Sympathy points"],
		useMwInjuryStatus: !0,
		genericOccupation: "Character",
		pcStats: F.pcStats,
		npcStats: F.npcStats
	},
	esoterroristsPreset: {
		schemaVersion: "v1",
		displayName: "The Esoterrorists (built-in)",
		defaultThemeName: "unsafeRealityTheme",
		investigativeAbilityCategories: [
			"Academic",
			"Interpersonal",
			"Technical"
		],
		generalAbilityCategories: ["General"],
		combatAbilities: [
			"Scuffling",
			"Shooting",
			"Athletics"
		],
		occupationLabel: "Off-duty Occupation",
		personalDetails: [],
		longNotes: ["Notes"],
		newPCPacks: [`${a}.${S.esoterroristsAbilities}`],
		newNPCPacks: [`${a}.${re}`],
		useBoost: !1,
		useMwStyleAbilities: !1,
		mwUseAlternativeItemTypes: !1,
		useMwInjuryStatus: !1,
		genericOccupation: "Investigator",
		pcStats: F.pcStats,
		npcStats: F.npcStats,
		equipmentCategories: { general: {
			name: "General",
			fields: {}
		} }
	},
	mutantCityBluesPreset: {
		schemaVersion: "v1",
		displayName: "Mutant City Blues (built-in)",
		defaultThemeName: "mutantCityBlueTheme",
		investigativeAbilityCategories: [
			"Academic",
			"Interpersonal",
			"Technical",
			"Investigative Powers"
		],
		generalAbilityCategories: [
			"Focus",
			"Physical",
			"Presence",
			"Focus Powers",
			"Physical Powers",
			"Presence Powers"
		],
		combatAbilities: ["Scuffling", "Shooting"],
		occupationLabel: "Concept",
		personalDetails: [],
		longNotes: ["Notes"],
		newPCPacks: [`${a}.${S.mutantCityBluesAbilities}`, `${a}.${S.mutantCityBluesPowers}`],
		newNPCPacks: [`${a}.${re}`],
		useBoost: !1,
		useMwStyleAbilities: !1,
		mwUseAlternativeItemTypes: !1,
		useMwInjuryStatus: !1,
		genericOccupation: "Detective",
		pcStats: { hitThreshold: {
			name: "Hit threshold",
			default: 3
		} },
		npcStats: { hitThreshold: {
			name: "Hit threshold",
			default: 3
		} },
		equipmentCategories: { general: {
			name: "General",
			fields: {}
		} },
		useCards: !0,
		cardCategories: [{
			id: "stress",
			singleName: "Stress",
			pluralName: "Stresses",
			styleKey: "stress",
			threshold: 3,
			thresholdType: "none"
		}, {
			id: "grf",
			singleName: "Genetic Risk Factor",
			pluralName: "Genetic Risk Factors",
			styleKey: "grf",
			threshold: 3,
			thresholdType: "none"
		}]
	}
}, I = {
	importStatement: "@import url('https://fonts.googleapis.com/css2?family=Averia+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');",
	fontFamily: "16px 'Averia Libre', sans-serif"
};
//#endregion
//#region src/irid/conversion-functions.ts
function sc(e) {
	let t = e.s, n = e.l, r = n <= .5 ? n * (1 + t) : n + t - n * t, i = e.h % 1, a, o, s, c, l, u, d, f, p, m;
	if (i < 0 && (i += 1), a = o = s = n, r > 0) switch (c = n + n - r, l = (r - c) / r, i *= 6, u = Math.floor(i), d = i - u, f = r * l * d, p = c + f, m = r - f, u) {
		case 0:
			a = r, o = p, s = c;
			break;
		case 1:
			a = m, o = r, s = c;
			break;
		case 2:
			a = c, o = r, s = p;
			break;
		case 3:
			a = c, o = m, s = r;
			break;
		case 4:
			a = p, o = c, s = r;
			break;
		case 5:
			a = r, o = c, s = m;
			break;
	}
	return {
		type: "rgba",
		r: Math.floor(a * 255),
		g: Math.floor(o * 255),
		b: Math.floor(s * 255),
		a: e.a
	};
}
function cc(e) {
	let t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.max(t, n, r), a = Math.min(t, n, r), o, s, c, l, u = 0, d = 0, f = 0;
	return f = (a + i) / 2, f > 0 && (o = i - a, d = o, d > 0 && (d /= f <= .5 ? i + a : 2 - i - a, s = (i - t) / o, c = (i - n) / o, l = (i - r) / o, u = t === i ? n === a ? 5 + l : 1 - c : n === i ? r === a ? 1 + s : 3 - l : t === a ? 3 + c : 5 - s, u /= 6)), {
		type: "hsla",
		h: u % 1,
		s: d,
		l: f,
		a: e.a
	};
}
//#endregion
//#region src/irid/formatting-functions.ts
function lc(e) {
	return "hsl" + (e.a ? "a" : "") + "(" + Math.round(e.h * 360) + ", " + Math.round(e.s * 100) + "%, " + Math.round(e.l * 100) + "%" + (e.a ? ", " + e.a.toFixed(2) : "") + ")";
}
function uc(e) {
	return "rgb" + (e.a ? "a" : "") + "(" + Math.round(e.r) + ", " + Math.round(e.g) + ", " + Math.round(e.b) + (e.a ? ", " + e.a.toFixed(2) : "") + ")";
}
function dc(e) {
	let t = "#" + (e.r < 16 ? "0" : "") + e.r.toString(16) + (e.g < 16 ? "0" : "") + e.g.toString(16) + (e.b < 16 ? "0" : "") + e.b.toString(16);
	if (e.a !== void 0) {
		let n = Math.floor(e.a * 255);
		t += (n < 16 ? "0" : "") + n.toString(16);
	}
	return t;
}
//#endregion
//#region src/irid/parsing-functions.ts
function fc(e) {
	return e.length === 1 && (e += e), Math.max(0, Math.min(255, parseInt(e, 16)));
}
function pc(e) {
	return e ? Math.max(0, Math.min(1, parseFloat(e))) : void 0;
}
function mc(e) {
	let t = parseInt(e, 10) % 360;
	return t < 0 && (t += 360), t / 360;
}
function hc(e) {
	let t = e.charAt(e.length - 1) === "%";
	return t && (e = e.slice(0, e.length - 1)), Math.max(0, Math.min(255, Math.round(parseInt(e, 10) * (t ? 2.55 : 1))));
}
function gc(e) {
	return Math.max(0, Math.min(100, parseInt(e, 10))) / 100;
}
function _c(e) {
	let t = /^hsla?\(\s*(-?\d+)\s*,\s*(-?\d+%)\s*,\s*(-?\d+%)\s*(?:,\s*(-?\d*(?:\.\d+)?)?)?\s*\)$/.exec(e);
	return t ? {
		type: "hsla",
		h: mc(t[1]),
		s: gc(t[2]),
		l: gc(t[3]),
		a: pc(t[4])
	} : void 0;
}
function vc(e) {
	let t = /^rgba?\(\s*(-?\d+%?)\s*,\s*(-?\d+%?)\s*,\s*(-?\d+%?)\s*(?:,\s*(-?\d*(?:\.\d+)?)?)?\s*\)$/.exec(e);
	return t ? {
		type: "rgba",
		r: hc(t[1]),
		g: hc(t[2]),
		b: hc(t[3]),
		a: pc(t[4])
	} : void 0;
}
function yc(e) {
	let t = /^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i.exec(e) || /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i.exec(e);
	return t ? {
		type: "rgba",
		r: fc(t[1]),
		g: fc(t[2]),
		b: fc(t[3]),
		a: t[4] === void 0 || t[4] === "" ? void 0 : fc(t[4]) / 255
	} : void 0;
}
//#endregion
//#region src/irid/swatches.ts
var bc = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	gold: "#ffd700",
	goldenrod: "#daa520",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavender: "#e6e6fa",
	lavenderblush: "#fff0f5",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	transparent: "rgb(0,0,0,0)",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32"
};
//#endregion
//#region src/irid/types.ts
function xc(e) {
	return e.type === "rgba";
}
function Sc(e) {
	return e.type === "hsla";
}
//#endregion
//#region src/irid/irid.ts
var Cc = "Invalid color specification", wc = "Invalid internal state", L = class e {
	constructor(e) {
		this._rgb = void 0, this._hsl = void 0, xc(e) ? this._rgb = e : this._hsl = e;
	}
	static {
		this.swatches = bc;
	}
	static create(t) {
		if (t instanceof e) return t;
		if (typeof t == "string") {
			let n = yc(t) || vc(t) || yc(bc[t.toLowerCase()]);
			if (n) return new e(n);
			let r = _c(t);
			if (!r) throw Error(Cc);
			return new e(r);
		}
		if (xc(t) || Sc(t)) return new e(t);
		throw Error(Cc);
	}
	get rgb() {
		if (!this._rgb) {
			if (!this._hsl) throw Error(wc);
			this._rgb = sc(this._hsl);
		}
		return this._rgb;
	}
	get hsl() {
		if (!this._hsl) {
			if (!this._rgb) throw Error(wc);
			this._hsl = cc(this._rgb);
		}
		return this._hsl;
	}
	luma() {
		let e = this.rgb;
		return (.3 * e.r + .59 * e.g + .11 * e.b) / 255;
	}
	relativeLuminance() {
		function e(e) {
			let t = e / 255;
			return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
		}
		return .2126 * e(this.rgb.r) + .7152 * e(this.rgb.g) + .0722 * e(this.rgb.b);
	}
	contrastRatio(t) {
		t = e.create(t);
		let n = t.relativeLuminance(), r = this.relativeLuminance(), i = Math.max(n, r), a = Math.min(n, r);
		return (i + .05) / (a + .05);
	}
	red(t) {
		return t === void 0 ? this.rgb.r : new e({
			type: "rgba",
			r: t,
			g: this.rgb.g,
			b: this.rgb.b,
			a: this.rgb.a
		});
	}
	green(t) {
		return t === void 0 ? this.rgb.g : new e({
			type: "rgba",
			r: this.rgb.r,
			g: t,
			b: this.rgb.b,
			a: this.rgb.a
		});
	}
	blue(t) {
		return t === void 0 ? this.rgb.b : new e({
			type: "rgba",
			r: this.rgb.r,
			g: this.rgb.g,
			b: t,
			a: this.rgb.a
		});
	}
	hue(t) {
		return t === void 0 ? this.hsl.h : new e({
			type: "hsla",
			h: t,
			s: this.hsl.s,
			l: this.hsl.l,
			a: this.hsl.a
		});
	}
	saturation(t) {
		return t === void 0 ? this.hsl.s : new e({
			type: "hsla",
			h: this.hsl.h,
			s: t,
			l: this.hsl.l,
			a: this.hsl.a
		});
	}
	lightness(t) {
		return t === void 0 ? this.hsl.l : new e({
			type: "hsla",
			h: this.hsl.h,
			s: this.hsl.s,
			l: t,
			a: this.hsl.a
		});
	}
	alpha(t) {
		return arguments.length === 0 ? (this._hsl || this._rgb)?.a : this._hsl ? new e({
			type: "hsla",
			h: this.hsl.h,
			s: this.hsl.s,
			l: this.hsl.l,
			a: t ?? void 0
		}) : new e({
			type: "rgba",
			r: this.rgb.r,
			g: this.rgb.g,
			b: this.rgb.b,
			a: t ?? void 0
		});
	}
	opacity(e) {
		return arguments.length === 0 ? this.alpha() : this.alpha(e);
	}
	lighten(t) {
		return new e({
			type: "hsla",
			h: this.hsl.h,
			s: this.hsl.s,
			l: this.hsl.l + (1 - this.hsl.l) * t,
			a: this.hsl.a
		});
	}
	darken(t) {
		return new e({
			type: "hsla",
			h: this.hsl.h,
			s: this.hsl.s,
			l: this.hsl.l - this.hsl.l * t,
			a: this.hsl.a
		});
	}
	invert() {
		return new e({
			type: "rgba",
			r: 255 - this.rgb.r,
			g: 255 - this.rgb.g,
			b: 255 - this.rgb.b,
			a: this.rgb.a
		});
	}
	complement() {
		return new e({
			type: "hsla",
			h: (this.hsl.h + .5) % 1,
			s: this.hsl.s,
			l: this.hsl.l,
			a: this.hsl.a
		});
	}
	desaturate() {
		return new e({
			type: "hsla",
			h: this.hsl.h,
			s: 0,
			l: this.hsl.l,
			a: this.hsl.a
		});
	}
	contrast(t, n) {
		return t = e.create(t || "#000"), n = e.create(n || "#fff"), Math.abs(t.luma() - this.luma()) > Math.abs(n.luma() - this.luma()) ? t : n;
	}
	analagous() {
		return [
			this,
			this.hue(this.hue() - 1 / 12),
			this.hue(this.hue() + 1 / 12)
		];
	}
	tetrad() {
		let e = this.hue();
		return [
			this,
			this.hue(e + 1 / 4),
			this.hue(e + 2 / 4),
			this.hue(e + 3 / 4)
		];
	}
	rectTetrad() {
		return [
			this,
			this.hue(this.hue() + 1 / 6),
			this.hue(this.hue() + 3 / 6),
			this.hue(this.hue() + 4 / 6)
		];
	}
	triad() {
		return [
			this,
			this.hue(this.hue() - 1 / 3),
			this.hue(this.hue() + 1 / 3)
		];
	}
	splitComplementary() {
		return [
			this,
			this.hue(this.hue() - 5 / 12),
			this.hue(this.hue() + 5 / 12)
		];
	}
	blend(t, n) {
		n === void 0 && (n = .5);
		let r = 1 - n;
		return t = e.create(t), new e({
			type: "rgba",
			r: Math.floor(this.red() * r + t.red() * n),
			g: Math.floor(this.green() * r + t.green() * n),
			b: Math.floor(this.blue() * r + t.blue() * n)
		});
	}
	toString() {
		return this.toHexString();
	}
	toHexString() {
		return dc(this.rgb);
	}
	toRGBString() {
		return uc(this.rgb);
	}
	toHSLString() {
		return lc(this.hsl);
	}
}.create, Tc = 14, Ec = (e, t) => {
	let n = L(t), r = n.opacity(), i = n.opacity(1);
	return L(e).blend(i, r).toRGBString();
};
function Dc(e) {
	return {
		flex: 1,
		padding: "0.3em",
		display: "inline-block",
		textAlign: "center",
		fontSize: "1.4em",
		background: e.backgroundSecondary,
		borderRadius: "0.2em 0.2em 0 0",
		color: e.accent,
		":hover": { textShadow: `0 0 0.3em ${e.glow}` }
	};
}
var R = (e) => {
	let t = Ec(e.colors.wallpaper, e.colors.backgroundPrimary), n = Ec(e.colors.wallpaper, e.colors.backgroundSecondary), r = L(e.colors.backgroundPrimary), i = L(e.colors.backgroundSecondary), a = L(e.colors.danger ?? "red"), o = L(e.colors.success ?? "green"), s = r.blend(a, .5).opacity(r.opacity()).toRGBString(), c = i.blend(a, .5).opacity(i.opacity()).toRGBString(), l = Ec(e.colors.wallpaper, s), u = Ec(e.colors.wallpaper, c), d = e.colors.controlBorder ?? e.colors.text, f = {
		backdropStyle: {
			border: `1px solid ${d}`,
			padding: "0.5em",
			transformOrigin: "top",
			backgroundColor: t
		},
		supertitleStyle: { fontSize: "0.9em" },
		titleStyle: {},
		subtitleStyle: { fontWeight: "bold" },
		descriptionStyle: {},
		effectStyle: { fontStyle: "italic" },
		hoverStyle: { boxShadow: `0 0 0.3em 0.2em ${e.colors.glow}` },
		...e.cards?.base
	};
	return {
		...e,
		largeSheetRootStyle: {
			backgroundSize: "cover",
			backgroundPosition: "center",
			...e.largeSheetRootStyle
		},
		smallSheetRootStyle: e.smallSheetRootStyle ?? e.largeSheetRootStyle,
		tabActiveStyle: e.tabActiveStyle || {
			background: e.colors.backgroundPrimary,
			":hover": { textShadow: "none" }
		},
		tabStyle: e.tabStyle || Dc(e.colors),
		tabSpacerStyle: e.tabSpacerStyle ?? { width: "0.5em" },
		panelStylePrimary: e.panelStylePrimary || { backgroundColor: e.colors.backgroundPrimary },
		tabContentStyle: e.tabContentStyle || { backgroundColor: e.colors.backgroundPrimary },
		panelStyleSecondary: e.panelStyleSecondary || e.panelStylePrimary || { backgroundColor: e.colors.backgroundSecondary },
		colors: {
			...e.colors,
			bgOpaquePrimary: t,
			bgOpaqueSecondary: n,
			bgTransDangerPrimary: s,
			bgTransDangerSecondary: c,
			bgOpaqueDangerPrimary: l,
			bgOpaqueDangerSecondary: u,
			controlBorder: d,
			danger: a.toString(),
			success: o.toString()
		},
		logo: {
			...e.logo,
			fontScaleFactor: e.logo.fontScaleFactor ?? Tc
		},
		cards: {
			base: f,
			area: {
				horizontalSpacing: "0.5em",
				verticalSpacing: "0.5em",
				...e.cards?.area
			},
			categories: { ...e.cards?.categories }
		}
	};
}, Oc = (e, t, n, r) => {
	let i = 360 / (t * e.length);
	return `repeating-conic-gradient(from 0deg at ${n} ${r}, ${e.map((e, t) => `${e} ${i * t}deg ${i * (t + 1)}deg`).join(", ")})`;
}, kc = R({
	schemaVersion: "v1",
	displayName: "Antiquarian",
	global: `
    ${I.importStatement}
    @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap');
  `,
	largeSheetRootStyle: {
		backgroundImage: `url(systems/${a}/assets/wallpaper/scott-webb-UjupleczBOY-unsplash.webp)`,
		backgroundPosition: "center",
		backgroundSize: "cover"
	},
	bodyFont: I.fontFamily,
	displayFont: "normal small-caps normal 1.1em 'IM Fell English', serif",
	logo: {
		fontScaleFactor: 24,
		frontTextElementStyle: {
			color: "#000",
			maskImage: `url(systems/${a}/assets/wallpaper/stonelike-mask.webp)`,
			maskRepeat: "repeat",
			maskSize: "contain",
			textShadow: ["0.03em 0.03em 0px #fff", "-0.03em -0.03em 0px #fff"].join(", ")
		},
		rearTextElementStyle: { display: "none" },
		textElementsStyle: {
			transform: "scale(0.7)",
			fontWeight: "bold"
		},
		backdropStyle: {
			backgroundImage: `url(systems/${a}/assets/wallpaper/tailpiece9-768.webp), url(systems/${a}/assets/wallpaper/tailpiece9-768.webp)`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "bottom, top",
			backgroundSize: "19%",
			maskImage: `url(systems/${a}/assets/wallpaper/stonelike-mask.webp)`,
			maskRepeat: "repeat",
			maskSize: "contain",
			opacity: .7
		}
	},
	colors: {
		accent: "#236",
		accentContrast: "#fff",
		glow: "#cfffc2",
		wallpaper: "#eee",
		backgroundSecondary: "#fff6",
		backgroundPrimary: "#fff9",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#222",
		controlBorder: "#766"
	}
}), Ac = [
	"#a06f18",
	"#b78d6c",
	"#cc7171",
	"#ebaa4b",
	"#e47005",
	"#ed9907"
], jc = Oc(Ac, 5, "50%", "50%"), Mc = Oc(Ac, 10, "10%", "10%"), Nc = R({
	schemaVersion: "v1",
	displayName: "Delta Groovy",
	global: `
    ${I.importStatement}
    @import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
  `,
	smallSheetRootStyle: {
		":before": {
			backgroundImage: Mc,
			maskImage: "linear-gradient(rgba(0, 0, 0, 0.5), transparent)",
			content: "\" \"",
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		"&>*": { position: "relative" },
		backgroundImage: `url(systems/${a}/assets/wallpaper/pulpy_paper.webp)`,
		position: "relative"
	},
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/pulpy_paper.webp)` },
	bodyFont: I.fontFamily,
	displayFont: "normal normal normal 1.1em 'Spicy Rice', serif",
	logo: {
		frontTextElementStyle: {
			background: "#fff",
			backgroundClip: "text"
		},
		rearTextElementStyle: {
			color: "#fff",
			textShadow: "-0.01em -0.01em 0 #000, 0.01em 0.01em 0 #000, 0.1em  0.1em  0 #d22fe5ff, 0.11em 0.11em 0 #000, 0.2em 0.2em 0 #e5762fff, 0.21em 0.21em 0 #000 "
		},
		textElementsStyle: { transform: "translateY(-0.1em)" },
		backdropStyle: {
			backgroundColor: "#293417",
			backgroundImage: jc,
			maskImage: "linear-gradient(rgba(0, 0, 0, 1.0), transparent)",
			margin: "-50em"
		}
	},
	colors: {
		accent: "#801d8c",
		accentContrast: "white",
		glow: "#fff",
		wallpaper: "#b6b3b3",
		backgroundSecondary: "rgba(255,255,255,0.2)",
		backgroundPrimary: "rgba(255,255,255,0.5)",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#444",
		controlBorder: "#774"
	}
}), Pc = R({
	schemaVersion: "v1",
	displayName: "Nothing To Fear",
	global: `
    ${I.importStatement}
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
  `,
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/annie-spratt-xvU-X0GV9-o-unsplash.webp)` },
	bodyFont: I.fontFamily,
	displayFont: "normal normal normal 1.1em 'Special Elite', serif",
	logo: {
		frontTextElementStyle: {
			background: "linear-gradient(90deg, rgba(73, 61, 51, 1.0) 0%, rgba(97, 81, 68, 0.7) 100%)",
			backgroundClip: "text"
		},
		rearTextElementStyle: { textShadow: "0px 0px 10px white" },
		textElementsStyle: { transform: "scale(0.8)" },
		backdropStyle: {}
	},
	colors: {
		accent: "#615144",
		accentContrast: "white",
		glow: "#fff",
		wallpaper: "#b6b3b3",
		backgroundSecondary: "rgba(255,255,255,0.2)",
		backgroundPrimary: "rgba(255,255,255,0.5)",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#444",
		controlBorder: "#766"
	}
}), Fc = R({
	schemaVersion: "v1",
	displayName: "Green triangle",
	global: `
    ${I.importStatement}
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@900&family=Big+Shoulders+Stencil+Text:wght@100;200;300;400;500;600;700;800;900&display=swap');
  `,
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/annie-spratt-xTaOPMa6wAE-unsplash.webp)` },
	smallSheetRootStyle: { backgroundImage: `linear-gradient( to right, #fff9,#fff9), url(systems/${a}/assets/wallpaper/annie-spratt-xTaOPMa6wAE-unsplash.webp)` },
	bodyFont: I.fontFamily,
	displayFont: "900 small-caps normal 1.1em 'Big Shoulders Stencil Text', serif",
	logo: {
		frontTextElementStyle: { color: "#fff" },
		rearTextElementStyle: { textShadow: "0 0 0.2em #cfffc2" },
		textElementsStyle: {
			transform: "scale(1.0, 0.8) rotate(-1.5deg)",
			maskImage: `url(systems/${a}/assets/wallpaper/textured-mask.webp)`,
			maskSize: "10em 0.2em",
			maskOrigin: "border-box"
		},
		backdropStyle: {}
	},
	colors: {
		accent: "#150",
		accentContrast: "#fff",
		glow: "#cfffc2",
		wallpaper: "#b6b3b3",
		backgroundSecondary: "#fff6",
		backgroundPrimary: "#fff9",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#000",
		controlBorder: "#766"
	}
}), Ic = L("white"), Lc = L("black"), Rc = R({
	schemaVersion: "v1",
	displayName: "High Contrast",
	global: "",
	largeSheetRootStyle: {},
	bodyFont: "1.1em sans-serif",
	displayFont: "1.1em sans-serif",
	logo: {
		frontTextElementStyle: { color: "#000" },
		rearTextElementStyle: { display: "none" },
		textElementsStyle: { transform: "none" },
		backdropStyle: { background: "white" }
	},
	colors: {
		accent: "#005",
		accentContrast: "white",
		glow: "#bbf",
		wallpaper: "#666",
		backgroundSecondary: Ic.opacity(.7).toString(),
		backgroundPrimary: Ic.opacity(.9).toString(),
		backgroundButton: Lc.opacity(.1).toString(),
		text: "#000"
	}
}), zc = R({
	schemaVersion: "v1",
	displayName: "Teal of Cthulhu",
	global: `
    @import url("https://fonts.googleapis.com/css2?family=Federo&display=swap");
    ${I.importStatement}
  `,
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/marjanblan-5Ft4NWTmeJE-unsplash.webp)` },
	bodyFont: I.fontFamily,
	displayFont: "normal small-caps normal 1em 'Federo', serif",
	logo: {
		frontTextElementStyle: {
			background: "linear-gradient(135deg, #efb183 0%,#222 30%,#efb183 90%)",
			backgroundClip: "text"
		},
		rearTextElementStyle: { textShadow: "2px 0px 1px black, 6px 0px 4px rgba(0,0,0,0.5), -1px 0px 0px rgba(255,255,255,0.5)" },
		textElementsStyle: { transform: "rotateY(-30deg) rotateZ(-1deg) translateX(-5%)" },
		backdropStyle: {
			perspective: "500px",
			perspectiveOrigin: "50% 50%",
			backgroundImage: "radial-gradient(closest-side, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)"
		}
	},
	colors: {
		accent: "#1d5d5d",
		accentContrast: "white",
		glow: "#5effff",
		wallpaper: "#ddd",
		backgroundSecondary: "rgba(255,255,255,0.2)",
		backgroundPrimary: "rgba(255,255,255,0.5)",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#433",
		controlBorder: "#766"
	}
}), Bc = "#e2e3e9", Vc = "#ececed", Hc = "#000000", Uc = `${Hc}17`, Wc = `${Hc}00`, z = {
	accent: "#005d89",
	accentContrast: "white",
	glow: "#5effff",
	wallpaper: "#ddd",
	backgroundSecondary: "#9992",
	backgroundPrimary: "#fff7",
	backgroundButton: "rgba(0,0,0,0.1)",
	text: "#433",
	controlBorder: "#766"
}, Gc = `${z.accent}77`, Kc = R({
	schemaVersion: "v1",
	displayName: "Mutant City Blue",
	global: `
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    ${I.importStatement}
  `,
	largeSheetRootStyle: {
		fontSize: "1.1em",
		backgroundImage: `
      radial-gradient(
        farthest-corner,
        #fffb 0%,
        #fffb 50%,
        #fff0 100%
      ),
      repeating-linear-gradient(45deg, ${Bc} 0px, ${Bc} 20px, ${Vc} 20px, ${Vc} 40px)
    `
	},
	bodyFont: I.fontFamily,
	displayFont: "normal normal normal 1em 'Russo One', serif",
	logo: {
		frontTextElementStyle: {
			background: `repeating-linear-gradient(180deg, ${Gc} 0,${Gc} 2px, ${z.accent} 2px, ${z.accent} 4px)`,
			backgroundClip: "text"
		},
		rearTextElementStyle: { textShadow: "2px 0px 1px white, 6px 0px 4px #fff7, -1px 0px 0px #fff7" },
		textElementsStyle: { font: "normal normal normal 1em 'Russo One', serif" },
		backdropStyle: {
			perspective: "500px",
			perspectiveOrigin: "50% 50%",
			backgroundImage: "radial-gradient(closest-side, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)"
		}
	},
	tabStyle: {
		...Dc(z),
		fontSize: "1.2em",
		color: z.accent,
		border: `1px solid ${z.accent}`,
		backgroundColor: z.backgroundSecondary,
		backgroundImage: `linear-gradient(to top, ${Uc} 0%, ${Uc} 10%, ${Wc} 10%)`
	},
	tabActiveStyle: {
		...zc.tabActiveStyle,
		borderBottomStyle: "none"
	},
	tabSpacerStyle: {
		...zc.tabSpacerStyle,
		borderBottom: `1px solid ${z.accent}`
	},
	panelStylePrimary: {
		...zc.panelStylePrimary,
		border: `1px solid ${z.accent}`
	},
	tabContentStyle: {
		...zc.panelStylePrimary,
		border: `1px solid ${z.accent}`,
		borderStyle: "none solid solid solid"
	},
	colors: z,
	cards: {
		base: {
			backdropStyle: {
				border: "3px solid #999",
				padding: "0.5em",
				position: "relative",
				borderRadius: "1em 0 1em 0",
				transformStyle: "preserve-3d",
				marginBottom: "4em",
				"--stripe1": Bc,
				"--stripe2": Vc,
				"--shine": "#fffb",
				background: "\n          radial-gradient(\n            circle at 50% 10%,\n            var(--shine) 0%,\n            #fff0 100%\n          ),\n          repeating-linear-gradient(\n            45deg,\n            var(--stripe1) 0px,\n            var(--stripe1) 20px,\n            var(--stripe2) 20px,\n            var(--stripe2) 40px\n          ),\n          linear-gradient(\n            to bottom,\n            #fff 0%,\n            #fff 100%\n          )\n        ",
				"--shadow-rotate": "5deg",
				"@container (width > 200px)": { "--shadow-rotate": "4deg" },
				"@container (width > 400px)": { "--shadow-rotate": "3deg" },
				"@container (width > 600px)": { "--shadow-rotate": "2deg" },
				"@container (width > 800px)": { "--shadow-rotate": "1deg" },
				"@container (width > 1200px)": { "--shadow-rotate": "0.6deg" },
				"@container (width > 1600px)": { "--shadow-rotate": "0.3deg" },
				":before, :after": {
					content: "\"\"",
					display: "block",
					boxShadow: "0 2em 0.5em -1em #0004",
					position: "absolute",
					height: "6em",
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "transparent",
					zIndex: -1
				},
				":after": {
					borderBottomRightRadius: "2em",
					transform: "rotate(var(--shadow-rotate)) translateY(-0.8em) translateX(1em) translateZ(-10px)"
				},
				":before": { transform: "rotate(calc(var(--shadow-rotate) * -1)) translateY(-0.8em) translateX(-1em) translateZ(-10px)" }
			},
			hoverStyle: {
				"--shine": "#ffff",
				border: "3px solid #666",
				":before, :after": { boxShadow: "0 2em 0.5em -1em #0008" }
			}
		},
		categories: {
			grf: {
				backdropStyle: {
					"--stripe1": "#f002",
					"--stripe2": "#f001",
					borderColor: "#633"
				},
				hoverStyle: {}
			},
			stress: {
				backdropStyle: {
					"--stripe1": "#04b2",
					"--stripe2": "#04b1",
					borderColor: "#057"
				},
				hoverStyle: { borderColor: "#068" }
			}
		},
		area: {
			horizontalSpacing: "0.5em",
			verticalSpacing: "1em"
		}
	}
}), qc = R({
	schemaVersion: "v1",
	displayName: "Nice Light Agents",
	global: `
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap');
    ${I.importStatement}
  `,
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/marjanblan-5Ft4NWTmeJE-unsplash.webp)` },
	bodyFont: I.fontFamily,
	displayFont: "normal normal 400 1.2em 'Big Shoulders Text', serif",
	logo: {
		fontScaleFactor: 18,
		frontTextElementStyle: { color: "#fff" },
		rearTextElementStyle: { textShadow: "2px 0px 1px black, -1px 0px 0px rgba(255,255,255,0.5)" },
		textElementsStyle: { font: "normal normal 300 1.2em 'Big Shoulders Display', serif" },
		backdropStyle: {
			background: `#4a0d00 url(systems/${a}/assets/wallpaper/nice_red_agents.webp)`,
			backgroundSize: "cover",
			transform: "scaleY(0.9) scaleX(1.2) translateY(0.1em)",
			zIndex: -1,
			borderStyle: "solid",
			borderThickness: "2px 0",
			borderColor: "#433"
		}
	},
	colors: {
		accent: "#962121",
		accentContrast: "white",
		glow: "#ff0000",
		wallpaper: "#ddd",
		backgroundSecondary: "rgba(255,255,255,0.2)",
		backgroundPrimary: "rgba(255,255,255,0.5)",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#433",
		controlBorder: "#766"
	}
}), Jc = R({
	schemaVersion: "v1",
	displayName: "Nice Dark Red Agents",
	global: `
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap');
    ${I.importStatement}
  `,
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/nice_red_agents.webp)` },
	smallSheetRootStyle: { backgroundImage: `linear-gradient( to right, #0002,#0002), url(systems/${a}/assets/wallpaper/nice_red_agents.webp)` },
	appWindowStyle: {
		boxShadow: "0 0 20px #f00",
		border: "1px solid red",
		borderRadius: "0.5em",
		overflow: "hidden"
	},
	bodyFont: I.fontFamily,
	displayFont: "normal normal 400 1.2em 'Big Shoulders Text', serif",
	logo: {
		fontScaleFactor: 18,
		frontTextElementStyle: {
			background: "linear-gradient(135deg, #fff 0%, #fff 90%)",
			backgroundClip: "text"
		},
		rearTextElementStyle: { textShadow: "2px 0px 1px black, -1px 0px 0px rgba(255,255,255,0.5)" },
		textElementsStyle: { font: "normal normal 300 1.2em 'Big Shoulders Display', serif" },
		backdropStyle: {
			backgroundColor: "rgba(0,0,0,0.4)",
			transform: "scaleY(0.9) scaleX(1.2) translateY(0.1em)",
			zIndex: -1
		}
	},
	colors: {
		accent: "#fff",
		accentContrast: "#600",
		glow: "#f33",
		wallpaper: "#4a0d00",
		danger: "yellow",
		backgroundSecondary: "#0004",
		backgroundPrimary: "#0007",
		backgroundButton: "rgba(255,255,255,0.1)",
		text: "#ccc"
	}
}), B = "#fda994", Yc = R({
	schemaVersion: "v1",
	displayName: "Older Than Memory",
	global: "\n    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital@0;1&display=swap');\n    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;500;600;700&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Fira+Sans+Condensed:ital@0;1&display=swap');\n  ",
	largeSheetRootStyle: {
		backgroundImage: `url(systems/${a}/assets/wallpaper/red_sands.jpg)`,
		backgroundPosition: "top",
		backgroundSize: "cover"
	},
	smallSheetRootStyle: {
		backgroundImage: `linear-gradient( to right, #0009,#0009), url(systems/${a}/assets/wallpaper/red_sands.jpg)`,
		backgroundPosition: "center",
		backgroundSize: "cover"
	},
	appWindowStyle: { boxShadow: `0 0 20px ${B}` },
	bodyFont: "normal 16px 'Signika', sans-serif",
	displayFont: "bold normal normal 1.1em 'Cormorant Unicase', serif",
	logo: {
		fontScaleFactor: 24,
		frontTextElementStyle: {
			color: "#fff",
			textShadow: [
				`0 0 0.5em ${B}`,
				`0 0 0.2em ${B}`,
				`0 0 1em ${B}`,
				`0 0 2em ${B}`
			].join(", ")
		},
		rearTextElementStyle: {},
		rearTextElementWrapperStyle: {
			border: `2px solid ${B}`,
			borderRadius: "3em",
			boxShadow: [`0 0 0.5em 0 inset ${B}`, `0 0 0.5em 0 ${B}`].join(","),
			backgroundImage: [`radial-gradient(closest-side, ${B}77 0%, ${B}00 100%)`, "linear-gradient(to bottom, #6667, #0007)"].join(", "),
			padding: "0.1em"
		},
		textElementsStyle: {
			font: "normal small-caps normal 1.1em 'Longdon Decorative Regular', serif",
			transform: "scale(0.6)",
			fontWeight: "bold"
		},
		backdropStyle: {}
	},
	colors: {
		accent: "#fdbd8e",
		accentContrast: "#333",
		glow: B,
		wallpaper: "#333",
		backgroundPrimary: "#211616cc",
		backgroundSecondary: "#21161699",
		backgroundButton: "rgba(0,0,0,0.1)",
		text: "#ccc",
		controlBorder: "#825050"
	}
}), Xc = "5px", Zc = "3px", Qc = (e) => e.replace("\n", ""), $c = L("#282c34"), el = L("#aff2f2"), tl = R({
	schemaVersion: "v1",
	displayName: "Aching Stars",
	global: "\n    @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');\n    @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');\n  ",
	largeSheetRootStyle: { backgroundImage: `url(systems/${a}/assets/wallpaper/guille-pozzi-sbcIAn4Mn14-unsplash.webp)` },
	bodyFont: "16px 'Roboto Flex', sans-serif",
	displayFont: "normal small-caps normal 1.1em 'Nova Square', serif",
	logo: {
		frontTextElementStyle: {
			background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(108,108,108,1) 24%, rgba(148,148,148,1) 34%, rgba(106,106,106,1) 44%, rgba(0,0,0,1) 87%, rgba(143,143,143,1) 100%)",
			backgroundClip: "text"
		},
		rearTextElementStyle: { textShadow: Qc(`
        -${Zc} -${Zc} ${Xc} #cdf6ff,
        -${Zc} ${Zc} ${Xc} #cdf6ff,
        ${Zc} -${Zc} ${Xc} #cdf6ff,
        ${Zc} ${Zc} ${Xc} #cdf6ff`) },
		textElementsStyle: { transform: "rotateY(21deg) rotateZ(0deg) translateX(4%) scale(0.8)" },
		backdropStyle: {
			perspective: "500px",
			perspectiveOrigin: "50% 50%",
			background: `url(systems/${a}/assets/wallpaper/philipp-trubchenko-jObj_p885Gg-unsplash.webp)`,
			backgroundSize: "cover",
			transform: "scaleY(1.1) scaleX(1.1) translateY(0%) rotate(0deg)",
			height: "400%",
			width: "150%",
			zIndex: -1,
			borderStyle: "none",
			maskImage: "linear-gradient(rgba(0, 0, 0, 1.0), transparent)"
		}
	},
	colors: {
		wallpaper: "#152938",
		accent: el.toString(),
		accentContrast: "#333",
		glow: el.lightness(.7).toString(),
		backgroundSecondary: $c.lightness(.3).opacity(.5).toString(),
		backgroundPrimary: $c.lightness(.1).opacity(.5).toString(),
		backgroundButton: "rgba(255,255,255,0.1)",
		text: "#ddd"
	}
}), nl = "#af2211", rl = "#b63017", il = "#ed6a26", al = "#ffef78", ol = "#84432a", sl = {
	themes: {
		tealTheme: zc,
		niceTheme: qc,
		niceThemeDark: Jc,
		highContrastTheme: Rc,
		fearTheme: Pc,
		pallidTheme: tl,
		deltaGroovyTheme: Nc,
		greenTriangleTheme: Fc,
		antiquarianTheme: kc,
		olderThanMemoryTheme: Yc,
		unsafeRealityTheme: R({
			schemaVersion: "v1",
			displayName: "Unsafe Reality",
			global: `
    @import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
    ${I.importStatement}
  `,
			largeSheetRootStyle: {
				backgroundImage: `
    linear-gradient(
      to bottom,
      ${ol} 0%,
      ${ol} 100%
    ),
    linear-gradient(
      to bottom,
      #000a 0%,
      #000a 100%
    ),
      url(systems/${a}/assets/wallpaper/monochrome-unreality-cropped.webp)
    `,
				backgroundSize: "cover, cover, cover",
				backgroundPosition: "center, center, center",
				backgroundBlendMode: "color, normal, normal"
			},
			bodyFont: I.fontFamily,
			displayFont: "normal normal normal 1.1em 'Averia Serif Libre', serif",
			logo: {
				frontTextElementStyle: {
					color: al,
					maskImage: `url(systems/${a}/assets/wallpaper/grunge-gradient.webp)`,
					maskRepeat: "no-repeat",
					maskSize: "100% 100%",
					maskOrigin: "border-box"
				},
				rearTextElementStyle: {
					color: nl,
					textShadow: `
      -5px -5px 10px ${il},
      5px 5px 10px ${il}
      `
				},
				textElementsStyle: {
					transform: "rotateY(15deg) rotateZ(-2deg) translateX(-0%)",
					fontVariant: "small-caps"
				},
				backdropStyle: {
					background: `
        linear-gradient(to bottom, ${rl} 0%, ${nl} 100%)
      `,
					maskImage: `url(systems/${a}/assets/wallpaper/esoterica.webp)`,
					maskRepeat: "no-repeat",
					maskSize: "contain",
					maskPosition: "50% 10%",
					maskOrigin: "border-box",
					margin: "-2em -0em -3em"
				}
			},
			colors: {
				accent: "#df9d4f",
				accentContrast: "black",
				glow: "#f4bcf0",
				wallpaper: ol,
				backgroundSecondary: "#5677",
				backgroundPrimary: "#5447",
				backgroundButton: "#7702",
				text: "#ccc",
				controlBorder: "#aaa9"
			}
		}),
		mutantCityBlueTheme: Kc
	},
	presets: { ...oc }
};
//#endregion
//#region src/functions/isGame.ts
function cl(e) {
	return e instanceof foundry.Game;
}
function V(e) {
	if (!cl(e)) throw Error("game used before init hook");
}
//#endregion
//#region src/settings/createSettings.ts
var ll = (e) => () => (V(game), game.settings.get(a, e)), ul = (e) => (t) => (V(game), game.settings.set(a, e, t)), H = () => (e, t) => ({ default: n, key: r, name: i, config: o = !1, scope: s = "world", choices: c, onChange: l, exportable: u = !0 }) => (Hooks.once("init", () => {
	V(game), game.settings.register(a, r, {
		name: i,
		scope: s,
		config: o,
		default: n,
		type: e,
		choices: c,
		onChange: l
	});
}), {
	key: r,
	get: ll(r),
	set: ul(r),
	exportable: u,
	validator: t
}), dl = H()(String, N()), fl = H()(Array, Zo(N())), U = H()(Boolean, Go()), pl = Zo($o({
	id: N(),
	singleName: N(),
	pluralName: N(),
	styleKey: N().optional(),
	threshold: Vo(),
	thresholdType: ls([
		"goal",
		"limit",
		"none"
	])
})).optional(), ml = ss(N(), $o({
	name: N(),
	fields: ss(N(), $o({ name: N() }).and(rs("type", [
		$o({
			type: ds("string"),
			default: N()
		}),
		$o({
			type: ds("number"),
			default: Vo(),
			min: Vo().optional(),
			max: Vo().optional()
		}),
		$o({
			type: ds("checkbox"),
			default: Go()
		})
	])))
})).optional(), hl = Zo($o({
	name: N(),
	type: ls(["text", "item"])
})).optional(), gl = ss(N(), $o({
	name: N(),
	default: Vo()
})), _l = {
	combatAbilities: fl({
		key: "combatAbilities",
		name: "Combat abilities",
		default: F.combatAbilities
	}),
	customThemePath: dl({
		key: "customThemePath",
		name: "Custom theme path",
		default: Me,
		exportable: !1
	}),
	debugTranslations: U({
		key: "debugTranslations",
		name: "Debug translations?",
		default: !1,
		exportable: !1
	}),
	defaultThemeName: dl({
		key: "defaultThemeName",
		name: "Default sheet theme",
		default: F.defaultThemeName,
		choices: Bs((e) => e.displayName, sl.themes)
	}),
	generalAbilityCategories: fl({
		key: "generalAbilityCategories",
		name: "General ability categories",
		default: F.generalAbilityCategories
	}),
	genericOccupation: dl({
		key: "genericOccupation",
		name: "Generic occupation",
		default: F.genericOccupation
	}),
	investigativeAbilityCategories: fl({
		key: "investigativeAbilityCategories",
		name: "Investigative ability categories",
		default: F.investigativeAbilityCategories
	}),
	longNotes: fl({
		key: "longNotes",
		name: "Long Notes",
		default: F.longNotes
	}),
	mwHiddenShortNotes: fl({
		key: "mwHiddenShortNotes",
		name: "Hidden short notes",
		default: []
	}),
	mwUseAlternativeItemTypes: U({
		key: "mwUseAlternativeItemTypes",
		name: "Use alternative item types",
		default: !1
	}),
	newNPCPacks: fl({
		key: "newNPCPacks",
		name: "Compendium packs for new NPCs",
		default: F.newNPCPacks,
		onChange: (e) => {
			Hooks.call(ae, e);
		}
	}),
	newPCPacks: fl({
		key: "newPCPacks",
		name: "Compendium packs for new PCs",
		default: F.newPCPacks,
		onChange: (e) => {
			Hooks.call(ie, e);
		}
	}),
	occupationLabel: dl({
		key: "occupationLabel",
		name: "What do we call \"Occupation\"?",
		default: F.occupationLabel
	}),
	shortNotes: fl({
		key: "shortNotes",
		name: "Short Notes",
		default: [""],
		exportable: !1
	}),
	showEmptyInvestigativeCategories: U({
		key: "showEmptyInvestigativeCategories",
		name: "Show empty investigative categories?",
		default: !0
	}),
	systemMigrationVersion: dl({
		key: "systemMigrationVersion",
		name: "System migration version",
		default: o,
		exportable: !1
	}),
	systemPreset: dl({
		key: "systemPreset",
		name: "System preset",
		default: "pathOfCthulhuPreset"
	}),
	useBoost: U({
		key: "useBoost",
		name: "Use Boost",
		default: F.useBoost
	}),
	useMwInjuryStatus: U({
		key: "useMwInjuryStatus",
		name: "Use injury status",
		default: !1
	}),
	useMwStyleAbilities: U({
		key: "useMwStyleAbilities",
		name: "Use Moribund World-style abilities",
		default: !1
	}),
	useNpcCombatBonuses: U({
		key: "useNpcCombatBonuses",
		name: "Use NPC Combat Bonuses?",
		default: F.useNpcCombatBonuses
	}),
	useTurnPassingInitiative: U({
		key: "useTurnPassingInitiative",
		name: "Use turn-passing initiative?",
		default: F.useNpcCombatBonuses
	}),
	personalDetails: H()(Object, hl)({
		key: "personalDetails",
		name: "Personal details",
		default: F.personalDetails
	}),
	pcStats: H()(Object, gl)({
		key: "pcStats",
		name: "What stats should PCs have?",
		default: F.pcStats
	}),
	npcStats: H()(Object, gl)({
		key: "npcStats",
		name: "What stats should NPCs have?",
		default: F.npcStats
	}),
	equipmentCategories: H()(Object, ml)({
		key: "equipmentCategories",
		name: "Equipment categories",
		default: F.equipmentCategories
	}),
	migrationFlags: H()(Object)({
		key: "migrationFlags",
		name: "Migration flags",
		default: {
			actor: {},
			item: {},
			compendium: {},
			journal: {},
			macro: {},
			scene: {},
			rollTable: {},
			playlist: {},
			world: {}
		},
		exportable: !1
	}),
	firstRun: U({
		key: "firstRun",
		name: "First run?",
		default: !0,
		exportable: !1
	}),
	journalMemories: H()(Object)({
		key: Pe,
		name: "Journal memories",
		default: {},
		exportable: !1
	}),
	useCards: U({
		key: "useCards",
		name: "Use cards?",
		default: !1
	}),
	cardCategories: H()(Object, pl)({
		key: "cardCategories",
		name: "What stats should PCs have?",
		default: F.cardCategories
	}),
	notifyItemAddedToActor: U({
		key: "notifyItemAddedToActor",
		name: "Notify when an item is added to an actor",
		default: !1
	})
}, vl = () => {
	let e = _l.generalAbilityCategories.get()[0];
	if (!e) throw Error("No general ability categories found in system settings");
	return e;
}, yl = () => {
	let e = _l.investigativeAbilityCategories.get()[0];
	if (!e) throw Error("No investigative ability categories found in system settings");
	return e;
}, bl = () => Bs((e) => e.get(), _l), xl = $o(Object.fromEntries(Object.entries(_l).filter(([e, t]) => !!t.validator && t.exportable).map(([e, t]) => [e, t.validator?.optional()]))).strict(), Sl = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	(function() {
		var e = function(e, t) {
			return t ||= "", e.replace(/(^|-)/g, "$1\\u" + t).replace(/,/g, "\\u" + t);
		}, n = e("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), r = "a-z" + e("DF-F6,F8-FF", "00"), i = "A-Z" + e("C0-D6,D8-DE", "00"), a = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", o = function(e, t, o, s) {
			return e ||= n, t ||= r, o ||= i, s ||= a, {
				capitalize: RegExp("(^|[" + e + "])([" + t + "])", "g"),
				pascal: RegExp("(^|[" + e + "])+([" + t + o + "])", "g"),
				fill: RegExp("[" + e + "]+(.|$)", "g"),
				sentence: RegExp("(^\\s*|[\\?\\!\\.]+\"?\\s+\"?|,\\s+\")([" + t + "])", "g"),
				improper: RegExp("\\b(" + s + ")\\b", "g"),
				relax: RegExp("([^" + o + "])([" + o + "]*)([" + o + "])(?=[^" + o + "]|$)", "g"),
				upper: RegExp("^[^" + t + "]+$"),
				hole: /[^\s]\s[^\s]/,
				apostrophe: /'/g,
				room: RegExp("[" + e + "]")
			};
		}, s = o(), c = {
			re: s,
			unicodes: e,
			regexps: o,
			types: [],
			up: String.prototype.toUpperCase,
			low: String.prototype.toLowerCase,
			cap: function(e) {
				return c.up.call(e.charAt(0)) + e.slice(1);
			},
			decap: function(e) {
				return c.low.call(e.charAt(0)) + e.slice(1);
			},
			deapostrophe: function(e) {
				return e.replace(s.apostrophe, "");
			},
			fill: function(e, t, n) {
				return t != null && (e = e.replace(s.fill, function(e, n) {
					return n ? t + n : "";
				})), n && (e = c.deapostrophe(e)), e;
			},
			prep: function(e, t, n, r) {
				if (e = e == null ? "" : e + "", !r && s.upper.test(e) && (e = c.low.call(e)), !t && !s.hole.test(e)) {
					var i = c.fill(e, " ");
					s.hole.test(i) && (e = i);
				}
				return !n && !s.room.test(e) && (e = e.replace(s.relax, c.relax)), e;
			},
			relax: function(e, t, n, r) {
				return t + " " + (n ? n + " " : "") + r;
			}
		}, l = {
			_: c,
			of: function(e) {
				for (var t = 0, n = c.types.length; t < n; t++) if (l[c.types[t]].apply(l, arguments) === e) return c.types[t];
			},
			flip: function(e) {
				return e.replace(/\w/g, function(e) {
					return (e == c.up.call(e) ? c.low : c.up).call(e);
				});
			},
			random: function(e) {
				return e.replace(/\w/g, function(e) {
					return (Math.round(Math.random()) ? c.up : c.low).call(e);
				});
			},
			type: function(e, t) {
				l[e] = t, c.types.push(e);
			}
		}, u = {
			lower: function(e, t, n) {
				return c.fill(c.low.call(c.prep(e, t)), t, n);
			},
			snake: function(e) {
				return l.lower(e, "_", !0);
			},
			constant: function(e) {
				return l.upper(e, "_", !0);
			},
			camel: function(e) {
				return c.decap(l.pascal(e));
			},
			kebab: function(e) {
				return l.lower(e, "-", !0);
			},
			upper: function(e, t, n) {
				return c.fill(c.up.call(c.prep(e, t, !1, !0)), t, n);
			},
			capital: function(e, t, n) {
				return c.fill(c.prep(e).replace(s.capitalize, function(e, t, n) {
					return t + c.up.call(n);
				}), t, n);
			},
			header: function(e) {
				return l.capital(e, "-", !0);
			},
			pascal: function(e) {
				return c.fill(c.prep(e, !1, !0).replace(s.pascal, function(e, t, n) {
					return c.up.call(n);
				}), "", !0);
			},
			title: function(e) {
				return l.capital(e).replace(s.improper, function(e, t, n, r) {
					return n > 0 && n < r.lastIndexOf(" ") ? c.low.call(e) : e;
				});
			},
			sentence: function(e, t, n) {
				return e = l.lower(e).replace(s.sentence, function(e, t, n) {
					return t + c.up.call(n);
				}), t && t.forEach(function(t) {
					e = e.replace(RegExp("\\b" + l.lower(t) + "\\b", "g"), c.cap);
				}), n && n.forEach(function(t) {
					e = e.replace(RegExp("(\\b" + l.lower(t) + "\\. +)(\\w)"), function(e, t, n) {
						return t + c.low.call(n);
					});
				}), e;
			}
		};
		for (var d in u.squish = u.pascal, l.default = l, u) l.type(d, u[d]);
		var f = typeof f == "function" ? f : function() {};
		f(typeof t == "object" && t.exports ? t.exports = l : this.Case = l);
	}).call(e);
})))(), 1);
function Cl(e, t = {}) {
	V(game);
	let n = _l.debugTranslations.get() && Ws(), r = `${a}.${Sl.default.pascal(e)}`, i = game.i18n.format(r, t), o = game.i18n.has(r, !1);
	return `${n ? o ? "✔ " : "❌ " : ""}${i}`;
}
//#endregion
//#region src/functions/confirmADoodleDo.ts
var wl = ({ message: e, confirmText: t, cancelText: n, confirmIconClass: r, values: i = {}, resolveFalseOnCancel: a = !1, translate: o = !0 }) => {
	V(game);
	let s = o ? Cl(e, i) : e, c = o ? Cl(t, i) : t, l = o ? Cl(n, i) : n;
	return new Promise((e) => {
		new Ue({
			window: { title: "Confirm" },
			content: `<p>${s}</p>`,
			buttons: [{
				label: l,
				callback: () => {
					a && e(!1);
				},
				icon: "fas fa-ban",
				action: "cancel",
				default: !0
			}, {
				label: c,
				callback: () => {
					e(!0);
				},
				icon: `fas ${r}`,
				action: "confirm"
			}]
		}).render({ force: !0 });
	});
}, Tl = !1;
function El(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Dl(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ol = /* @__PURE__ */ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 ? !Tl : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(Dl(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = El(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), W = "-ms-", kl = "-moz-", G = "-webkit-", Al = "comm", jl = "rule", Ml = "decl", Nl = "@import", Pl = "@keyframes", Fl = "@layer", Il = Math.abs, Ll = String.fromCharCode, Rl = Object.assign;
function zl(e, t) {
	return q(e, 0) ^ 45 ? (((t << 2 ^ q(e, 0)) << 2 ^ q(e, 1)) << 2 ^ q(e, 2)) << 2 ^ q(e, 3) : 0;
}
function Bl(e) {
	return e.trim();
}
function Vl(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
	return e.replace(t, n);
}
function Hl(e, t) {
	return e.indexOf(t);
}
function q(e, t) {
	return e.charCodeAt(t) | 0;
}
function Ul(e, t, n) {
	return e.slice(t, n);
}
function J(e) {
	return e.length;
}
function Wl(e) {
	return e.length;
}
function Gl(e, t) {
	return t.push(e), e;
}
function Kl(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var ql = 1, Jl = 1, Yl = 0, Y = 0, X = 0, Xl = "";
function Zl(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: ql,
		column: Jl,
		length: o,
		return: ""
	};
}
function Ql(e, t) {
	return Rl(Zl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $l() {
	return X;
}
function eu() {
	return X = Y > 0 ? q(Xl, --Y) : 0, Jl--, X === 10 && (Jl = 1, ql--), X;
}
function Z() {
	return X = Y < Yl ? q(Xl, Y++) : 0, Jl++, X === 10 && (Jl = 1, ql++), X;
}
function tu() {
	return q(Xl, Y);
}
function nu() {
	return Y;
}
function ru(e, t) {
	return Ul(Xl, e, t);
}
function iu(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function au(e) {
	return ql = Jl = 1, Yl = J(Xl = e), Y = 0, [];
}
function ou(e) {
	return Xl = "", e;
}
function su(e) {
	return Bl(ru(Y - 1, uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cu(e) {
	for (; (X = tu()) && X < 33;) Z();
	return iu(e) > 2 || iu(X) > 3 ? "" : " ";
}
function lu(e, t) {
	for (; --t && Z() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97););
	return ru(e, nu() + (t < 6 && tu() == 32 && Z() == 32));
}
function uu(e) {
	for (; Z();) switch (X) {
		case e: return Y;
		case 34:
		case 39:
			e !== 34 && e !== 39 && uu(X);
			break;
		case 40:
			e === 41 && uu(e);
			break;
		case 92:
			Z();
			break;
	}
	return Y;
}
function du(e, t) {
	for (; Z() && e + X !== 57 && !(e + X === 84 && tu() === 47););
	return "/*" + ru(t, Y - 1) + "*" + Ll(e === 47 ? e : Z());
}
function fu(e) {
	for (; !iu(tu());) Z();
	return ru(e, Y);
}
//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
function pu(e) {
	return ou(mu("", null, null, null, [""], e = au(e), 0, [0], e));
}
function mu(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, ee = 1, g = 1, _ = 0, te = "", v = i, y = a, b = r, x = te; ee;) switch (m = _, _ = Z()) {
		case 40: if (m != 108 && q(x, d - 1) == 58) {
			Hl(x += K(su(_), "&", "&\f"), "&\f") != -1 && (g = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			x += su(_);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			x += cu(m);
			break;
		case 92:
			x += lu(nu() - 1, 7);
			continue;
		case 47:
			switch (tu()) {
				case 42:
				case 47:
					Gl(gu(du(Z(), nu()), t, n), c);
					break;
				default: x += "/";
			}
			break;
		case 123 * h: s[l++] = J(x) * g;
		case 125 * h:
		case 59:
		case 0:
			switch (_) {
				case 0:
				case 125: ee = 0;
				case 59 + u:
					g == -1 && (x = K(x, /\f/g, "")), p > 0 && J(x) - d && Gl(p > 32 ? _u(x + ";", r, n, d - 1) : _u(K(x, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: x += ";";
				default: if (Gl(b = hu(x, t, n, l, u, i, s, te, v = [], y = [], d), a), _ === 123) if (u === 0) mu(x, t, b, b, v, a, d, s, y);
				else switch (f === 99 && q(x, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						mu(e, b, b, r && Gl(hu(e, b, b, 0, 0, i, s, te, i, v = [], d), y), i, y, d, s, r ? v : y);
						break;
					default: mu(x, b, b, b, [""], y, 0, s, y);
				}
			}
			l = u = p = 0, h = g = 1, te = x = "", d = o;
			break;
		case 58: d = 1 + J(x), p = m;
		default:
			if (h < 1) {
				if (_ == 123) --h;
				else if (_ == 125 && h++ == 0 && eu() == 125) continue;
			}
			switch (x += Ll(_), _ * h) {
				case 38:
					g = u > 0 ? 1 : (x += "\f", -1);
					break;
				case 44:
					s[l++] = (J(x) - 1) * g, g = 1;
					break;
				case 64:
					tu() === 45 && (x += su(Z())), f = tu(), u = d = J(te = x += fu(nu())), _++;
					break;
				case 45: m === 45 && J(x) == 2 && (h = 0);
			}
	}
	return a;
}
function hu(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = Wl(f), m = 0, h = 0, ee = 0; m < r; ++m) for (var g = 0, _ = Ul(e, d + 1, d = Il(h = o[m])), te = e; g < p; ++g) (te = Bl(h > 0 ? f[g] + " " + _ : K(_, /&\f/g, f[g]))) && (c[ee++] = te);
	return Zl(e, t, n, i === 0 ? jl : s, c, l, u);
}
function gu(e, t, n) {
	return Zl(e, t, n, Al, Ll($l()), Ul(e, 2, -2), 0);
}
function _u(e, t, n, r) {
	return Zl(e, t, n, Ml, Ul(e, 0, r), Ul(e, r + 1, -1), r);
}
//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
function vu(e, t) {
	for (var n = "", r = Wl(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function yu(e, t, n, r) {
	switch (e.type) {
		case Fl: if (e.children.length) break;
		case Nl:
		case Ml: return e.return = e.return || e.value;
		case Al: return "";
		case Pl: return e.return = e.value + "{" + vu(e.children, r) + "}";
		case jl: e.value = e.props.join(",");
	}
	return J(n = vu(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
function bu(e) {
	var t = Wl(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function xu(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Su(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var Cu = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = tu(), r === 38 && i === 12 && (t[n] = 1), !iu(i);) Z();
	return ru(e, Y);
}, wu = function(e, t) {
	var n = -1, r = 44;
	do
		switch (iu(r)) {
			case 0:
				r === 38 && tu() === 12 && (t[n] = 1), e[n] += Cu(Y - 1, t, n);
				break;
			case 2:
				e[n] += su(r);
				break;
			case 4: if (r === 44) {
				e[++n] = tu() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += Ll(r);
		}
	while (r = Z());
	return e;
}, Tu = function(e, t) {
	return ou(wu(au(e), t));
}, Eu = /* @__PURE__ */ new WeakMap(), Du = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Eu.get(n)) && !r) {
			Eu.set(e, !0);
			for (var i = [], a = Tu(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, Ou = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function ku(e, t) {
	switch (zl(e, t)) {
		case 5103: return G + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return G + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return G + e + kl + e + W + e + e;
		case 6828:
		case 4268: return G + e + W + e + e;
		case 6165: return G + e + W + "flex-" + e + e;
		case 5187: return G + e + K(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + W + "flex-$1$2") + e;
		case 5443: return G + e + W + "flex-item-" + K(e, /flex-|-self/, "") + e;
		case 4675: return G + e + W + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
		case 5548: return G + e + W + K(e, "shrink", "negative") + e;
		case 5292: return G + e + W + K(e, "basis", "preferred-size") + e;
		case 6060: return G + "box-" + K(e, "-grow", "") + G + e + W + K(e, "grow", "positive") + e;
		case 4554: return G + K(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
		case 6187: return K(K(K(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
		case 5495:
		case 3959: return K(e, /(image-set\([^]*)/, G + "$1$`$1");
		case 4968: return K(K(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + W + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return K(e, /(.+)-inline(.+)/, G + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (J(e) - 1 - t > 6) switch (q(e, t + 1)) {
				case 109: if (q(e, t + 4) !== 45) break;
				case 102: return K(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + kl + (q(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~Hl(e, "stretch") ? ku(K(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (q(e, t + 1) !== 115) break;
		case 6444:
			switch (q(e, J(e) - 3 - (~Hl(e, "!important") && 10))) {
				case 107: return K(e, ":", ":" + G) + e;
				case 101: return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (q(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + W + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (q(e, t + 11)) {
				case 114: return G + e + W + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return G + e + W + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return G + e + W + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return G + e + W + e + e;
	}
	return e;
}
var Au = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case Ml:
			e.return = ku(e.value, e.length);
			break;
		case Pl: return vu([Ql(e, { value: K(e.value, "@", "@" + G) })], r);
		case jl: if (e.length) return Kl(e.props, function(t) {
			switch (Vl(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return vu([Ql(e, { props: [K(t, /:(read-\w+)/, ":" + kl + "$1")] })], r);
				case "::placeholder": return vu([
					Ql(e, { props: [K(t, /:(plac\w+)/, ":" + G + "input-$1")] }),
					Ql(e, { props: [K(t, /:(plac\w+)/, ":" + kl + "$1")] }),
					Ql(e, { props: [K(t, /:(plac\w+)/, W + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], ju = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || Au, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [Du, Ou], l, u = [yu, xu(function(e) {
		l.insert(e);
	})], d = bu(c.concat(r, u)), f = function(e) {
		return vu(pu(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new Ol({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
}, Mu = /* @__PURE__ */ t(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, ee = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, te = t ? Symbol.for("react.scope") : 60119;
	function v(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function y(e) {
		return v(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return y(e) || v(e) === l;
	}, e.isConcurrentMode = y, e.isContextConsumer = function(e) {
		return v(e) === c;
	}, e.isContextProvider = function(e) {
		return v(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return v(e) === d;
	}, e.isFragment = function(e) {
		return v(e) === i;
	}, e.isLazy = function(e) {
		return v(e) === h;
	}, e.isMemo = function(e) {
		return v(e) === m;
	}, e.isPortal = function(e) {
		return v(e) === r;
	}, e.isProfiler = function(e) {
		return v(e) === o;
	}, e.isStrictMode = function(e) {
		return v(e) === a;
	}, e.isSuspense = function(e) {
		return v(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === g || e.$$typeof === _ || e.$$typeof === te || e.$$typeof === ee);
	}, e.typeOf = v;
})), Nu = /* @__PURE__ */ t(((e, t) => {
	t.exports = Mu();
})), Pu = /* @__PURE__ */ t(((e, t) => {
	var n = Nu(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), ee = 0; ee < a.length; ++ee) {
				var g = a[ee];
				if (!i[g] && !(n && n[g]) && !(s && s[g]) && !(o && o[g])) {
					var _ = f(t, g);
					try {
						l(e, g, _);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})), Fu = !0;
function Iu(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var Lu = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || Fu === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, Ru = function(e, t, n) {
	Lu(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function zu(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var Bu = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, Vu = !1, Hu = /[A-Z]|^ms/g, Uu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wu = function(e) {
	return e.charCodeAt(1) === 45;
}, Gu = function(e) {
	return e != null && typeof e != "boolean";
}, Ku = /* @__PURE__ */ Su(function(e) {
	return Wu(e) ? e : e.replace(Hu, "-$&").toLowerCase();
}), qu = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(Uu, function(e, t, n) {
			return Qu = {
				name: t,
				styles: n,
				next: Qu
			}, t;
		});
	}
	return Bu[e] !== 1 && !Wu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Ju = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Yu(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return Qu = {
				name: i.name,
				styles: i.styles,
				next: Qu
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) Qu = {
					name: o.name,
					styles: o.styles,
					next: Qu
				}, o = o.next;
				return a.styles + ";";
			}
			return Xu(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = Qu, c = n(e);
				return Qu = s, Yu(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function Xu(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Yu(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : Gu(s) && (r += Ku(a) + ":" + qu(a, s) + ";");
		} else {
			if (a === "NO_COMPONENT_SELECTOR" && Vu) throw Error(Ju);
			if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) Gu(o[c]) && (r += Ku(a) + ":" + qu(a, o[c]) + ";");
			else {
				var l = Yu(e, t, o);
				switch (a) {
					case "animation":
					case "animationName":
						r += Ku(a) + ":" + l + ";";
						break;
					default: r += a + "{" + l + "}";
				}
			}
		}
	}
	return r;
}
var Zu = /label:\s*([^\s;{]+)\s*(;|$)/g, Qu;
function $u(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	Qu = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += Yu(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += Yu(n, t, e[o]), r && (i += a[o]);
	Zu.lastIndex = 0;
	for (var s = "", c; (c = Zu.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: zu(i) + s,
		styles: i,
		next: Qu
	};
}
//#endregion
//#region node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.2.4/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var Q = /* @__PURE__ */ e(r()), ed = function(e) {
	return e();
}, td = Q.useInsertionEffect ? Q.useInsertionEffect : !1, nd = td || ed, rd = td || Q.useLayoutEffect, id = /* @__PURE__ */ Q.createContext(typeof HTMLElement < "u" ? /* @__PURE__ */ ju({ key: "css" }) : null), ad = id.Provider, od = function(e) {
	return /* @__PURE__ */ (0, Q.forwardRef)(function(t, n) {
		return e(t, (0, Q.useContext)(id), n);
	});
}, sd = /* @__PURE__ */ Q.createContext({}), cd = {}.hasOwnProperty, ld = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ud = function(e, t) {
	var n = {};
	for (var r in t) cd.call(t, r) && (n[r] = t[r]);
	return n[ld] = e, n;
}, dd = function(e) {
	var t = e.cache, n = e.serialized, r = e.isStringTag;
	return Lu(t, n, r), nd(function() {
		return Ru(t, n, r);
	}), null;
}, fd = /* @__PURE__ */ od(function(e, t, n) {
	var r = e.css;
	typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
	var i = e[ld], a = [r], o = "";
	typeof e.className == "string" ? o = Iu(t.registered, a, e.className) : e.className != null && (o = e.className + " ");
	var s = $u(a, void 0, Q.useContext(sd));
	o += t.key + "-" + s.name;
	var c = {};
	for (var l in e) cd.call(e, l) && l !== "css" && l !== ld && (c[l] = e[l]);
	return c.className = o, n && (c.ref = n), /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(dd, {
		cache: t,
		serialized: s,
		isStringTag: typeof i == "string"
	}), /* @__PURE__ */ Q.createElement(i, c));
}), pd = /* @__PURE__ */ e(n());
Pu();
var md = pd.Fragment, $ = function(e, t, n) {
	return cd.call(t, "css") ? pd.jsx(fd, ud(e, t), n) : pd.jsx(e, t, n);
}, hd = function(e, t, n) {
	return cd.call(t, "css") ? pd.jsxs(fd, ud(e, t), n) : pd.jsxs(e, t, n);
}, gd = Q.createContext(null), _d = {
	position: "absolute",
	inset: 0
};
//#endregion
//#region node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function vd(e, t) {
	if (e.inserted[t.name] === void 0) return e.insert("", t, e.sheet, !0);
}
function yd(e, t, n) {
	var r = [], i = Iu(e, r, n);
	return r.length < 2 ? n : i + t(r);
}
var bd = function(e) {
	var t = ju(e);
	t.sheet.speedy = function(e) {
		this.isSpeedy = e;
	}, t.compat = !0;
	var n = function() {
		var e = $u([...arguments], t.registered, void 0);
		return Ru(t, e, !1), t.key + "-" + e.name;
	};
	return {
		css: n,
		cx: function() {
			var e = [...arguments];
			return yd(t.registered, n, xd(e));
		},
		injectGlobal: function() {
			vd(t, $u([...arguments], t.registered));
		},
		keyframes: function() {
			var e = $u([...arguments], t.registered), n = "animation-" + e.name;
			return vd(t, {
				name: e.name,
				styles: "@keyframes " + n + "{" + e.styles + "}"
			}), n;
		},
		hydrate: function(e) {
			e.forEach(function(e) {
				t.inserted[e] = !0;
			});
		},
		flush: function() {
			t.registered = {}, t.inserted = {}, t.sheet.flush();
		},
		sheet: t.sheet,
		cache: t,
		getRegisteredStyles: Iu.bind(null, t.registered),
		merge: yd.bind(null, t.registered, n)
	};
}, xd = function e(t) {
	for (var n = "", r = 0; r < t.length; r++) {
		var i = t[r];
		if (i != null) {
			var a = void 0;
			switch (typeof i) {
				case "boolean": break;
				case "object":
					if (Array.isArray(i)) a = e(i);
					else for (var o in a = "", i) i[o] && o && (a && (a += " "), a += o);
					break;
				default: a = i;
			}
			a && (n && (n += " "), n += a);
		}
	}
	return n;
}, Sd = bd({ key: "css" });
Sd.flush, Sd.hydrate;
//#endregion
//#region node_modules/.pnpm/@emotion+css@11.13.5/node_modules/@emotion/css/dist/emotion-css.esm.js
var Cd = Sd.cx;
Sd.merge, Sd.getRegisteredStyles, Sd.injectGlobal;
var wd = Sd.keyframes, Td = Sd.css;
Sd.sheet, Sd.cache;
//#endregion
//#region node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.2.14_react@19.2.4/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var Ed = function(e, t) {
	var n = arguments;
	if (t == null || !cd.call(t, "css")) return Q.createElement.apply(void 0, n);
	var r = n.length, i = Array(r);
	i[0] = fd, i[1] = ud(e, t);
	for (var a = 2; a < r; a++) i[a] = n[a];
	return Q.createElement.apply(null, i);
};
(function(e) {
	var t;
	(function(e) {})(t ||= e.JSX ||= {});
})(Ed ||= {});
var Dd = /* @__PURE__ */ od(function(e, t) {
	var n = e.styles, r = $u([n], void 0, Q.useContext(sd)), i = Q.useRef();
	return rd(function() {
		var e = t.key + "-global", n = new t.sheet.constructor({
			key: e,
			nonce: t.sheet.nonce,
			container: t.sheet.container,
			speedy: t.sheet.isSpeedy
		}), a = !1, o = document.querySelector("style[data-emotion=\"" + e + " " + r.name + "\"]");
		return t.sheet.tags.length && (n.before = t.sheet.tags[0]), o !== null && (a = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), i.current = [n, a], function() {
			n.flush();
		};
	}, [t]), rd(function() {
		var e = i.current, n = e[0];
		if (e[1]) {
			e[1] = !1;
			return;
		}
		r.next !== void 0 && Ru(t, r.next, !0), n.tags.length && (n.before = n.tags[n.tags.length - 1].nextElementSibling, n.flush()), t.insert("", r, n, !1);
	}, [t, r.name]), null;
});
function Od() {
	return $u([...arguments]);
}
function kd() {
	var e = Od.apply(void 0, arguments), t = "animation-" + e.name;
	return {
		name: t,
		styles: "@keyframes " + t + "{" + e.styles + "}",
		anim: 1,
		toString: function() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
//#endregion
//#region src/themes/ThemeContext.ts
var Ad = Q.createContext(zc), jd = class extends Q.Component {
	constructor(e) {
		super(e), this.state = { error: void 0 };
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {
		tc.error(e, t.componentStack);
	}
	render() {
		return this.state.error ? /* @__PURE__ */ hd("div", {
			css: {
				..._d,
				padding: "1em",
				backgroundColor: "#222",
				color: "#eee",
				overflow: "auto"
			},
			children: [
				/* @__PURE__ */ $("h1", { children: "Alas! Something went wrong 😔" }),
				/* @__PURE__ */ hd("p", { children: [
					"If this continues to happen, please drop into the",
					" ",
					/* @__PURE__ */ $("a", {
						href: "https://discord.com/channels/692113540210753568/720741108937916518",
						children: "virtual_tabletops channel on the Pelgrane Press Discord server"
					}),
					" ",
					"and let us know."
				] }),
				/* @__PURE__ */ hd("p", { children: [
					"Alternatively, you can",
					" ",
					/* @__PURE__ */ $("a", {
						href: "https://github.com/n3dst4/investigator-fvtt/issues",
						children: "log an issue on GitHub"
					}),
					" ",
					"."
				] }),
				/* @__PURE__ */ $("h2", { children: "Details" }),
				/* @__PURE__ */ $("pre", { children: /* @__PURE__ */ $("code", { children: this.state.error.message }) })
			]
		}) : this.props.children;
	}
};
//#endregion
//#region src/components/CSSReset.tsx
function Md(e) {
	if (e instanceof Ie) return e.appId.toString();
	if (e instanceof Le) return e.id;
}
function Nd(e) {
	if (e instanceof Ie) return e?.element.get(0);
	if (e instanceof Le) return e.element;
}
var Pd = ({ className: e, children: t, theme: n, mode: r, noStyleAppWindow: i = !1 }) => {
	let a = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = /* @__PURE__ */ Td(n.appWindowStyle, "label:className");
		if (a.current !== null && !i) {
			let t = jQuery(a.current).closest(".window-app");
			return t.addClass(e), function() {
				t.removeClass(e);
			};
		}
	}, [i, n.appWindowStyle]);
	let o = (0, Q.useContext)(gd), [s, c] = (0, Q.useState)(Nd(o)?.closest("head"));
	(0, Q.useEffect)(() => {
		let e = (e, t) => {
			Md(e) === Md(o) && c(t.document.head);
		}, t = (e, t) => {
			Md(e) === Md(o) && c(t.window.document.head);
		};
		return Hooks.on("PopOut:popout", e), Hooks.on("PopOut:dialog", t), () => {
			Hooks.off("PopOut:popout", e), Hooks.off("PopOut:dialog", t);
		};
	}, [o]);
	let l = (0, Q.useMemo)(() => ju({
		key: "investigator",
		container: s ?? void 0
	}), [s]), u = (0, Q.useMemo)(() => {
		let e = r === "large" ? n.largeSheetRootStyle : r === "small" ? n.smallSheetRootStyle : {}, t = L(n.colors.controlBorder), i = t.contrast(), [a, o] = t.luma() < i.luma() ? [t.toString(), i.toString()] : [i.toString(), t.toString()];
		return {
			font: n.bodyFont,
			padding: r === "none" ? "0" : "0.5em",
			color: n.colors.text,
			backgroundColor: r === "none" ? "transparent" : n.colors.wallpaper,
			height: "100%",
			accentColor: n.colors.accent,
			"button, input[type=button]": {
				borderStyle: "solid",
				borderWidth: "1px",
				borderColor: `${a} ${o} ${o} ${a}`,
				background: n.colors.backgroundButton,
				boxShadow: ` -1px -1px 0 0 ${a} inset, 1px 1px 0 0 ${o} inset`
			},
			",:where(&) ": {
				"*": {
					scrollbarWidth: "thin",
					userSelect: "auto",
					boxSizing: "border-box",
					scrollbarColor: `${n.colors.accent} ${n.colors.backgroundButton}`,
					"&:focus": { textDecoration: "underline" }
				},
				"h1, h2, h3, h4": {
					border: "none",
					margin: "0.3em 0 0 0",
					marginBottom: "0.3em",
					padding: 0,
					fontWeight: "inherit",
					font: n.displayFont
				},
				h1: { fontSize: "1.5em" },
				h2: { fontSize: "1.3em" },
				h3: { fontSize: "1.1em" },
				h4: { fontSize: "1em" },
				"button, input[type=button]": {
					font: n.displayFont,
					color: n.colors.accent,
					borderRadius: "5px",
					width: "99%",
					"&[disabled]": {
						opacity: .5,
						color: n.colors.text,
						"&:hover": {
							boxShadow: "none",
							textShadow: "none"
						}
					},
					"&:hover": {
						boxShadow: `0 0 0.5em ${n.colors.glow}`,
						textShadow: `0 0 0.5em ${n.colors.glow}`
					},
					"&:focus": { boxShadow: "none" }
				},
				label: { fontWeight: "bold" },
				"a, label.parp": { color: n.colors.accent },
				"a:hover, a.hover, .hover a, label.parp:hover, label.parp.hover, .hover label.parp": {
					textDecoration: "underline",
					textShadow: `0 0 0.5em ${n.colors.glow}`
				},
				"input, input[type=text], textarea, select, option": {
					font: n.bodyFont,
					fontVariantLigatures: "none",
					color: n.colors.accent,
					padding: "0.1em 0.3em",
					borderStyle: "solid",
					borderWidth: "1px",
					borderColor: n.colors.controlBorder,
					background: n.colors.backgroundPrimary,
					resize: "vertical",
					":focus": {
						borderColor: n.colors.accent,
						outline: "none",
						boxShadow: `0 0 0.5em ${n.colors.glow}`
					},
					"&:hover": {
						borderStyle: "solid",
						borderWidth: "1px",
						borderColor: n.colors.controlBorder
					}
				},
				select: {
					color: n.colors.text,
					background: n.colors.bgOpaqueSecondary,
					option: {
						background: n.colors.bgOpaquePrimary,
						color: n.colors.text
					},
					":focus": {
						borderColor: n.colors.accent,
						outline: "none",
						boxShadow: `0 0 0.5em ${n.colors.glow}`
					}
				},
				textarea: { lineHeight: 1 },
				hr: {
					borderColor: n.colors.controlBorder,
					width: "calc(100% - 2em)",
					borderWidth: 0,
					height: "2px",
					backgroundImage: `linear-gradient(
              90deg,
              oklch(from ${n.colors.controlBorder} l c h / 0%) 0%,
              oklch(from ${n.colors.controlBorder} l c h / 50%) 50%,
              oklch(from ${n.colors.controlBorder} l c h / 0%) 100%)`
				},
				"i.fa:last-child": { margin: 0 }
			},
			...e
		};
	}, [r, n]), d = (0, Q.useMemo)(() => (V(game), foundry.utils.isNewerVersion(game.version, "13.0") ? { "@layer system": u } : u), [u]);
	return /* @__PURE__ */ $(jd, { children: /* @__PURE__ */ $(ad, {
		value: l,
		children: /* @__PURE__ */ hd(Ad.Provider, {
			value: n,
			children: [/* @__PURE__ */ $(Dd, { styles: [n.global] }), /* @__PURE__ */ $("div", {
				ref: a,
				className: e,
				css: d,
				children: t
			})]
		})
	}) });
};
Pd.displayName = "CSSReset";
//#endregion
//#region node_modules/.pnpm/nanoid@5.1.7/node_modules/nanoid/url-alphabet/index.js
var Fd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Id = (e = 21) => {
	let t = "", n = crypto.getRandomValues(new Uint8Array(e |= 0));
	for (; e--;) t += Fd[n[e] & 63];
	return t;
}, Ld = (0, Q.createContext)(void 0), Rd = /* @__PURE__ */ Q.memo(({ children: e, values: t, title: n, className: r }) => {
	V(game);
	let i = _l.debugTranslations.get() && Ws(), o = `${a}.${(0, Q.useMemo)(() => Sl.default.pascal(e), [e])}`, s = (0, Q.useMemo)(() => (V(game), game.i18n.format(o, t)), [o, t]), c = (0, Q.useMemo)(() => (V(game), game.i18n.has(o, !1)), [o]);
	return /* @__PURE__ */ $("span", {
		className: r,
		title: n ?? (i ? o : s),
		style: { background: i ? c ? "lightgreen" : "red" : "none" },
		children: s
	});
});
Rd.displayName = "Translate";
//#endregion
//#region src/components/inputs/InputGrid.tsx
var zd = ({ children: e, className: t }) => /* @__PURE__ */ $("div", {
	css: {
		display: "grid",
		gridTemplateRows: "auto",
		gridTemplateColumns: "[label] fit-content(50%) [control] 1fr [end]",
		gridAutoRows: "auto",
		rowGap: "0.2em"
	},
	className: t,
	children: e
}), Bd = (e, t) => {
	let [n, r] = (0, Q.useState)(e || ""), i = (0, Q.useRef)(!1), a = (0, Q.useCallback)(() => {
		i.current = !0;
	}, []), o = (0, Q.useCallback)(() => {
		i.current = !1;
	}, []), s = (0, Q.useMemo)(() => ic(t, 500), [t]), c = (0, Q.useCallback)((e) => {
		r(e), s(e);
	}, [s]), l = (0, Q.useRef)(null), u = (0, Q.useCallback)((e) => {
		let t = e.currentTarget.innerText;
		c(t);
	}, [c]);
	return (0, Q.useEffect)(() => {
		i.current || (r(e), l.current && (l.current.innerText = e));
	}, [e]), {
		onChange: c,
		onFocus: a,
		onBlur: o,
		display: n,
		contentEditableRef: l,
		onInput: u
	};
}, Vd = ({ className: e, value: t, defaultValue: n, onChange: r, onFocus: i, onBlur: a, disabled: o, placeholder: s, validation: c }) => {
	let l = (0, Q.useContext)(Ld), u = (0, Q.useCallback)((e) => {
		r?.(e.currentTarget.value);
	}, [r]), d = (0, Q.useContext)(Ad).colors.bgTransDangerPrimary;
	return /* @__PURE__ */ $("input", {
		role: "text-input",
		size: 3,
		id: l,
		css: {
			flex: 1,
			width: "100%",
			"::placeholder": {
				opacity: .5,
				fontStyle: "italic"
			}
		},
		style: { backgroundColor: c?.state === "failed" ? d : void 0 },
		className: Cd(e, c?.state === "failed" && "error"),
		"data-lpignore": "true",
		value: t,
		defaultValue: n,
		onChange: u,
		onFocus: i,
		onBlur: a,
		disabled: o,
		placeholder: s
	});
}, Hd = ({ value: e = "", onChange: t, className: n, disabled: r, placeholder: i, index: a }) => {
	let { onChange: o, onFocus: s, onBlur: c, display: l } = Bd(e, t);
	return /* @__PURE__ */ $(Vd, {
		className: n,
		value: l,
		onChange: o,
		onFocus: s,
		onBlur: c,
		disabled: r,
		placeholder: i
	});
};
//#endregion
export { tc as $, Ce as $t, Rc as A, s as At, Xs as B, he as Bt, yl as C, tt as Ct, V as D, fe as Dt, xl as E, it as Et, rc as F, l as Ft, nc as G, Se as Gt, Vs as H, xe as Ht, zs as I, g as It, Rs as J, Oe as Jt, $s as K, _e as Kt, ac as L, me as Lt, L as M, u as Mt, F as N, te as Nt, sl as O, h as Ot, Gs as P, Ne as Pt, Is as Q, Te as Qt, Ws as R, Ee as Rt, vl as S, et as St, _l as T, rt as Tt, Zs as U, ye as Ut, Us as V, ve as Vt, Bs as W, be as Wt, Ys as X, Ae as Xt, Ks as Y, De as Yt, Js as Z, ke as Zt, md as _, a as _n, Ye as _t, Rd as a, ie as an, Be as at, wl as b, _ as bn, Qe as bt, Pd as c, f as cn, He as ct, kd as d, m as dn, Ge as dt, je as en, Fe as et, Td as f, x as fn, Ke as ft, gd as g, ce as gn, ot as gt, _d as h, oe as hn, ct as ht, zd as i, p as in, at as it, R as j, Me as jt, zc as k, ne as kt, jd as l, b as ln, Ue as lt, wd as m, le as mn, Je as mt, Vd as n, c as nn, Le as nt, Ld as o, de as on, Ve as ot, Cd as p, se as pn, qe as pt, Qs as q, ge as qt, Bd as r, ee as rn, Re as rt, Id as s, y as sn, ze as st, Hd as t, we as tn, st as tt, Ad as u, v as un, We as ut, $ as v, ue as vn, Xe as vt, bl as w, nt as wt, Cl as x, i as xn, $e as xt, hd as y, d as yn, Ze as yt, Hs as z, pe as zt };
