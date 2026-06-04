import { o as e } from "./chunk-BQCxAhux.js";
import { $ as t, B as n, D as r, E as i, K as a, M as o, N as s, O as c, R as l, T as u, Y as d, _ as f, a as p, b as m, c as h, g, h as _, hn as v, i as y, mn as b, n as ee, o as te, q as ne, s as x, t as S, u as C, v as w, w as T, x as E, y as D } from "./AsyncTextInput-DMwutQQ3.js";
import { t as re } from "./immer-DHo-sOgH.js";
import { t as ie } from "./react-Cajsgul7.js";
import { a as ae, i as O, r as oe, t as k } from "./Button-wjG7vDMi.js";
import { a as se, c as ce, i as le, l as ue, n as de, o as fe, r as pe, s as me, t as he, u as ge } from "./SlideInNestedPanelRoute-KHou5B03.js";
import { a as _e } from "./fa6-VbZIMIgt.js";
import { t as A } from "./GridField-CzF2zV4m.js";
import { f as j, p as M, t as N } from "./Toggle-BWVRHS3C.js";
import { C as P, E as F, I, S as L, T as ve, _ as ye, a as be, b as xe, c as Se, d as Ce, f as we, h as Te, i as Ee, k as R, l as De, m as Oe, o as ke, p as Ae, r as je, t as Me, u as Ne, v as Pe, x as Fe, y as z } from "./typeAssertions-C9iS0jPm.js";
import { t as Ie } from "./GridFieldStacked-CBtoiXE4.js";
//#region src/components/inputs/ListEdit.tsx
var B = /* @__PURE__ */ e(ie(), 1), V = ({ value: e, onChange: t, nonempty: n = !1 }) => {
	let r = (0, B.useCallback)((n) => {
		if (!n.currentTarget.dataset.index) return;
		let r = [...e];
		r[Number(n.currentTarget.dataset.index)] = n.currentTarget.value, t(r);
	}, [t, e]), i = (0, B.useCallback)((n) => {
		if (n.preventDefault(), !n.currentTarget.dataset.index) return;
		let r = [...e];
		r.splice(Number(n.currentTarget.dataset.index), 1), t(r);
	}, [t, e]), a = (0, B.useCallback)(() => {
		t([...e, ""]);
	}, [t, e]);
	return /* @__PURE__ */ D("div", { children: [
		e.length === 0 && /* @__PURE__ */ w("i", { children: /* @__PURE__ */ w(p, { children: "Empty List" }) }),
		e.map((t, a) => /* @__PURE__ */ D("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ w("div", {
				css: {
					width: "12em",
					position: "relative"
				},
				children: /* @__PURE__ */ w("input", {
					css: { width: "12em" },
					"data-index": a,
					type: "text",
					value: t,
					onChange: r
				})
			}), /* @__PURE__ */ w("div", {
				css: {
					width: "6em",
					position: "relative"
				},
				children: /* @__PURE__ */ w("button", {
					"data-index": a,
					onClick: i,
					disabled: e.length < 2 && n,
					children: /* @__PURE__ */ w("i", { className: "fas fa-trash" })
				})
			})]
		}, a)),
		/* @__PURE__ */ w("div", {
			css: {
				display: "flex",
				flexDirection: "row",
				width: "18em"
			},
			children: /* @__PURE__ */ D(k, {
				onClick: a,
				children: [
					/* @__PURE__ */ w("i", { className: "fas fa-plus" }),
					" ",
					/* @__PURE__ */ w(p, { children: "Add item" })
				]
			})
		})
	] });
}, H = (0, B.createContext)(() => {
	t.warn("DispatchContext used without a provider");
}), U = (0, B.createContext)({ settings: T() }), Le = (0, B.createContext)(() => (t.warn("DirtyContext used without a provider"), !1)), Re = (0, B.createContext)(() => {
	t.warn("ModifyContext used without a provider");
}), W = ({ index: e = 0, ...t }) => {
	let n = e % 2 == 0, r = (0, B.useContext)(C);
	return /* @__PURE__ */ w(A, {
		...t,
		css: {
			padding: "0.5em",
			background: n ? r.colors.backgroundSecondary : "none"
		}
	});
};
W.displayName = "SettingsGridField";
var ze = ({ index: e = 0, ...t }) => {
	let n = e % 2 == 0, r = (0, B.useContext)(C);
	return /* @__PURE__ */ w(Ie, {
		...t,
		css: {
			padding: "0.5em",
			background: n ? r.colors.backgroundSecondary : "none"
		}
	});
};
ze.displayName = "SettingsGridFieldStacked";
//#endregion
//#region src/components/settings/AbilitySettings.tsx
var Be = ({ setters: e }) => {
	r(game);
	let { settings: t } = (0, B.useContext)(U), n = (0, B.useContext)(C), i = 0;
	return /* @__PURE__ */ D(y, {
		css: {
			flex: 1,
			overflow: "auto"
		},
		children: [
			/* @__PURE__ */ w(ze, {
				label: "Compendium packs for new characters",
				index: i++,
				noLabel: !0,
				children: /* @__PURE__ */ D("div", {
					css: {
						display: "grid",
						gridTemplateColumns: "max-content 1fr max-content",
						gridAutoRows: "min-content",
						columnGap: "0.5em",
						whiteSpace: "nowrap",
						".header": { fontWeight: "bold" }
					},
					children: [
						/* @__PURE__ */ w("div", {
							css: {
								gridColumn: 1,
								gridRow: 1
							},
							children: /* @__PURE__ */ D("label", { children: [
								" ",
								/* @__PURE__ */ w(p, { children: "PCs" }),
								" "
							] })
						}),
						/* @__PURE__ */ w("div", {
							css: {
								gridColumn: 3,
								gridRow: 1
							},
							children: /* @__PURE__ */ D("label", { children: [
								" ",
								/* @__PURE__ */ w(p, { children: "NPCs" }),
								" "
							] })
						}),
						game.packs.filter((e) => e.metadata.type === "Item").map((r, i) => {
							let a = t.newPCPacks.includes(r.collection), o = t.newNPCPacks.includes(r.collection), s = x(), c = i + 2;
							return /* @__PURE__ */ D(te.Provider, {
								value: s,
								children: [
									c % 2 == 0 && /* @__PURE__ */ w("div", { css: {
										gridRow: c,
										gridColumn: "1/4",
										background: n.colors.backgroundButton
									} }),
									/* @__PURE__ */ w(N, {
										checked: a,
										css: {
											gridColumn: 1,
											gridRow: c
										},
										onChange: (n) => {
											n ? e.newPCPacks([...t.newPCPacks, r.collection]) : e.newPCPacks(t.newPCPacks.filter((e) => e !== r.collection));
										}
									}),
									/* @__PURE__ */ w(N, {
										css: {
											gridColumn: 3,
											gridRow: c,
											top: 0
										},
										checked: o,
										onChange: (n) => {
											n ? e.newNPCPacks([...t.newNPCPacks, r.collection]) : e.newNPCPacks(t.newNPCPacks.filter((e) => e !== r.collection));
										}
									}),
									/* @__PURE__ */ w("label", {
										className: "parp",
										title: r.collection,
										htmlFor: s,
										css: {
											display: "block",
											paddingTop: "0.3em",
											gridColumn: 2,
											gridRow: c,
											textAlign: "center"
										},
										children: r.metadata.label
									}, r.collection)
								]
							}, r.metadata.name);
						})
					]
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Investigative Ability Categories",
				index: i++,
				children: /* @__PURE__ */ w(V, {
					value: t.investigativeAbilityCategories,
					onChange: e.investigativeAbilityCategories,
					nonempty: !0
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "General Ability Categories",
				index: i++,
				children: /* @__PURE__ */ w(V, {
					value: t.generalAbilityCategories,
					onChange: e.generalAbilityCategories,
					nonempty: !0
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Combat Abilities",
				index: i++,
				children: /* @__PURE__ */ w(V, {
					value: t.combatAbilities,
					onChange: e.combatAbilities,
					nonempty: !0
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Can Abilities be Boosted?",
				index: i++,
				children: /* @__PURE__ */ w(N, {
					checked: t.useBoost,
					onChange: e.useBoost
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Show empty Investigative categories?",
				index: i++,
				children: /* @__PURE__ */ w(N, {
					checked: t.showEmptyInvestigativeCategories,
					onChange: e.showEmptyInvestigativeCategories
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Use NPC Combat bonuses?",
				index: i++,
				children: /* @__PURE__ */ w(N, {
					checked: t.useNpcCombatBonuses,
					onChange: e.useNpcCombatBonuses
				})
			})
		]
	});
};
Be.displayName = "AbilitySettings";
//#endregion
//#region src/components/sortableTable/ActiveIdContext.ts
var Ve = /* @__PURE__ */ e(ae(), 1), He = B.createContext(null), Ue = ({ setActivatorNodeRef: e, listeners: t }) => {
	let n = (0, B.useContext)(C);
	return /* @__PURE__ */ w("div", {
		tabIndex: 0,
		css: {
			height: "100%",
			width: "3em",
			cursor: "n-resize",
			borderRadius: "0.35em",
			color: (0, B.useMemo)(() => o(n.colors.accent).blend(n.colors.bgOpaquePrimary, .4).toString(), [n.colors.accent, n.colors.bgOpaquePrimary]),
			textAlign: "center",
			backgroundColor: n.colors.bgOpaquePrimary,
			opacity: .7,
			gridColumn: "1",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			":hover": {
				opacity: 1,
				transform: "scale(1.1)",
				color: n.colors.accent
			}
		},
		ref: e,
		...t,
		children: /* @__PURE__ */ w(_e, {})
	});
}, We = ({ children: e, id: t }) => {
	let { attributes: n, listeners: r, setNodeRef: i, transform: a, transition: o, setActivatorNodeRef: s } = De({ id: t });
	return /* @__PURE__ */ D("div", {
		css: {
			display: "grid",
			gridTemplateColumns: "subgrid",
			gridColumn: "1/-1",
			opacity: (0, B.useContext)(He) === t ? .5 : 1
		},
		...n,
		tabIndex: void 0,
		ref: i,
		style: {
			transform: Fe.Transform.toString(a),
			transition: o
		},
		children: [/* @__PURE__ */ w(Ue, {
			setActivatorNodeRef: s,
			listeners: r
		}), /* @__PURE__ */ w("div", {
			css: {
				display: "grid",
				gridTemplateColumns: "subgrid",
				gridColumn: "2/-1"
			},
			children: e
		})]
	});
}, Ge = ({ items: e, setItems: t, renderItem: n, headers: r, gridTemplateColumns: i = "1fr", className: a, emptyMessage: o }) => {
	let s = xe(z(ye), z(Te, { coordinateGetter: Se })), [c, l] = (0, B.useState)(null), u = (0, B.useCallback)((e) => {
		l(e.active.id.toString());
	}, [l]), d = (0, B.useCallback)((n) => {
		let { active: r, over: i } = n;
		!r || !i || (l(null), r.id !== i.id && t(ke(e, e.indexOf(r.id.toString()), e.indexOf(i.id.toString()))));
	}, [e, t]), { colors: { controlBorder: f } } = (0, B.useContext)(C);
	return e.length === 0 && o ? o : /* @__PURE__ */ w("div", {
		className: `sortable-table ${a}`,
		css: {
			..._,
			padding: "1em"
		},
		children: /* @__PURE__ */ w(He.Provider, {
			value: c,
			children: /* @__PURE__ */ w(Ae, {
				sensors: s,
				collisionDetection: Pe,
				onDragEnd: d,
				onDragStart: u,
				modifiers: [we, Ce],
				children: /* @__PURE__ */ D(be, {
					items: e,
					strategy: Ne,
					children: [/* @__PURE__ */ (0, Ve.createPortal)(/* @__PURE__ */ w(Oe, {}), document.body), /* @__PURE__ */ D("div", {
						css: {
							display: "grid",
							gridTemplateColumns: `max-content ${i}`,
							gap: "0.5em"
						},
						children: [/* @__PURE__ */ D("div", {
							css: {
								gridColumn: "1/-1",
								display: "grid",
								gridTemplateColumns: "subgrid",
								borderBottom: `1px solid ${f}`
							},
							children: [/* @__PURE__ */ w("div", {}), r.map((e) => /* @__PURE__ */ w("div", { children: e.label }, e.label))]
						}), e.map((e) => /* @__PURE__ */ w(We, {
							id: e,
							children: n(e)
						}, e))]
					})]
				})
			})
		})
	});
};
Ge.displayName = "SortableTable";
//#endregion
//#region src/components/settings/functions.ts
function Ke(e, t, n) {
	if (e === void 0) throw Error(`No field with id ${t}`);
	if (e.type !== "number") throw Error(`Cannot set min/max on field type ${e.type}`);
	if (typeof n != "number" && n !== void 0) throw Error(`Invalid value ${JSON.stringify(n)} for field ${e.name} (must be a number)`);
}
//#endregion
//#region src/components/settings/reducerTools.ts
function qe(e, t) {
	let n = (t) => ({
		type: e,
		payload: t
	}), r = (t) => t.type === e;
	return {
		create: n,
		apply: (e, n) => r(n) && t ? t(e, n.payload) : e
	};
}
var Je = (e = {}) => (t) => {
	let n = Object.entries(t).map(([e, t]) => [e, qe(e, t)]);
	return {
		creators: Object.fromEntries(n.map(([e, t]) => [e, t.create])),
		reducer: (t, r) => {
			try {
				let i = re(t, (e) => {
					for (let [, t] of n) t.apply(e, r);
				});
				return e.log && e.log(r, t, i), i;
			} catch (n) {
				return e.onError && e.onError(n), t;
			}
		}
	};
}, Ye = (e) => (t) => {
	let n = (0, B.useContext)(e), [r, i] = (0, B.useState)(t(n)), a = (0, B.useRef)(!1);
	return (0, B.useEffect)(() => {
		a.current || i(t(n));
	}, [t, n]), {
		value: r,
		freeze: (0, B.useCallback)(() => {
			a.current = !0;
		}, [])
	};
}, G = ((e) => Je(e)({
	setSome: (e, t) => {
		Object.assign(e.settings, t.newSettings);
	},
	addCategory: (e) => {
		e.settings.equipmentCategories[x()] = {
			name: "New category",
			fields: {}
		};
	},
	deleteCategory: ({ settings: { equipmentCategories: e } }, { id: t }) => {
		delete e[t];
	},
	renameCategory: ({ settings: { equipmentCategories: e } }, t) => {
		e[t.id].name = t.newName;
	},
	changeCategoryId: ({ settings: e }, t) => {
		let n = {};
		if (e.equipmentCategories[t.newCategoryId]) throw Error(`Cannot change category id to "${t.newCategoryId}" - already exists`);
		for (let [r, i] of Object.entries(e.equipmentCategories)) r === t.oldCategoryId ? n[t.newCategoryId] = i : n[r] = i;
		e.equipmentCategories = n;
	},
	moveCategoryUp: ({ settings: e }, { categoryId: t }) => {
		e.equipmentCategories = ne(e.equipmentCategories, t);
	},
	moveCategoryDown: ({ settings: e }, { categoryId: t }) => {
		e.equipmentCategories = a(e.equipmentCategories, t);
	},
	addField: ({ settings: { equipmentCategories: e } }, t) => {
		e[t.categoryId].fields[x()] = {
			name: "New Field",
			type: "string",
			default: ""
		};
	},
	deleteField: ({ settings: { equipmentCategories: e } }, t) => {
		delete e[t.categoryId].fields[t.fieldId];
	},
	renameField: ({ settings: e }, t) => {
		e.equipmentCategories[t.categoryId].fields[t.fieldId].name = t.newName;
	},
	changeFieldId: ({ settings: { equipmentCategories: e } }, t) => {
		let n = {};
		if (e[t.categoryId].fields[t.newFieldId]) throw Error(`Cannot change field id to "${t.newFieldId}" - already exists`);
		for (let [r, i] of Object.entries(e[t.categoryId].fields)) r === t.fieldId ? n[t.newFieldId] = i : n[t.fieldId] = i;
		e[t.categoryId].fields = n;
	},
	setFieldType: ({ settings: { equipmentCategories: e } }, t) => {
		let n = e[t.categoryId].fields[t.fieldId];
		n.type = t.newType, t.newType === "number" ? n.default = 0 : t.newType === "checkbox" ? n.default = !1 : t.newType === "string" && (n.default = "");
	},
	setFieldDefault: ({ settings: { equipmentCategories: e } }, t) => {
		let n = e[t.categoryId].fields[t.fieldId];
		if (n.type === "string" && typeof t.newDefault != "string" || n.type === "number" && typeof t.newDefault != "number" || n.type === "checkbox" && typeof t.newDefault != "boolean") throw Error(`Invalid default value ${t.newDefault} for field type ${n.type}`);
		n.default = t.newDefault;
	},
	setFieldMin: ({ settings: { equipmentCategories: e } }, t) => {
		let n = e[t.categoryId].fields[t.fieldId];
		if (Ke(n, t.fieldId, t.newMin), n.max !== void 0 && t.newMin !== void 0 && t.newMin > n.max) throw Error("Min cannot be greater than max");
		n.min = t.newMin;
	},
	setFieldMax: ({ settings: { equipmentCategories: e } }, t) => {
		let n = e[t.categoryId].fields[t.fieldId];
		if (Ke(n, t.fieldId, t.newMax), n.min !== void 0 && t.newMax !== void 0 && t.newMax < n.min) throw Error("Max cannot be less than min");
		n.max = t.newMax;
	},
	moveFieldUp: ({ settings: { equipmentCategories: e } }, { categoryId: t, fieldId: n }) => {
		e[t].fields = ne(e[t].fields, n);
	},
	moveFieldDown: ({ settings: { equipmentCategories: e } }, { categoryId: t, fieldId: n }) => {
		e[t].fields = a(e[t].fields, n);
	},
	applyPreset: (e, t) => {
		e.settings = {
			...e.settings,
			...s,
			...t.preset,
			systemPreset: t.presetId
		};
	},
	addStat: (e, { which: t }) => {
		let n = `stat${Object.keys(e.settings[t]).length}`;
		e.settings[t][n] = {
			name: "",
			default: 0
		};
	},
	setStatMin: (e, { which: t, statId: n, newMin: r }) => {
		let i = e.settings[t][n].max;
		if (i !== void 0 && r !== void 0 && r > i) throw Error("Min cannot be greater than max");
		e.settings[t][n].min = r;
	},
	setStatMax: (e, { which: t, statId: n, newMax: r }) => {
		let i = e.settings[t][n].min;
		if (i !== void 0 && r !== void 0 && r < i) throw Error("Max cannot be less than min");
		e.settings[t][n].max = r;
	},
	setStatDefault: (e, { which: t, statId: n, newDefault: r }) => {
		e.settings[t][n].default = r;
	},
	setStatName: (e, { which: t, statId: n, newName: r }) => {
		e.settings[t][n].name = r;
	},
	deleteStat: (e, { which: t, statId: n }) => {
		delete e.settings[t][n];
	},
	setStatId: (e, { which: t, oldStatId: n, newStatId: r }) => {
		e.settings[t] = d(n, r, e.settings[t]);
	},
	throwError: (e, { message: t }) => {
		throw Error(t);
	},
	addCardCategory: (e, t) => {
		e.settings.cardCategories.push({
			id: t.id,
			singleName: "New category",
			pluralName: "New category",
			threshold: 3,
			thresholdType: "none"
		});
	},
	renameCardCategory: (e, { id: t, newName: n }) => {
		e.settings.cardCategories.find((e) => e.id === t).singleName = n;
	},
	deleteCardCategory: (e, { id: t }) => {
		e.settings.cardCategories = e.settings.cardCategories.filter((e) => e.id !== t);
	},
	setCardCategoryId: (e, { id: t, newId: n }) => {
		e.settings.cardCategories.find((e) => e.id === t).id = n;
	},
	setCardCategories: (e, { newCardCategories: t }) => {
		e.settings.cardCategories = t;
	}
}))({
	log(...e) {
		l() && t.log(...e);
	},
	onError(e) {
		t.error("Reducer error", e), ui && e instanceof Error && ui.notifications?.error(`Settings error: ${e.toString()}`, { permanent: !0 });
	}
}), Xe = () => {
	let e = (0, B.useMemo)(() => ({ settings: T() }), []), [t, n] = (0, B.useReducer)(G.reducer, e), r = O(t), i = (0, B.useMemo)(() => {
		let t = {};
		for (let r of Object.keys(e.settings)) t[r] = (e) => {
			n(G.creators.setSome({ newSettings: { [r]: e } }));
		};
		return t;
	}, [e]), a = (0, B.useCallback)(() => JSON.stringify(r.current) !== JSON.stringify(e), [e, r]);
	function o(e) {
		let t = re(r.current.settings, (t) => {
			e(t);
		});
		n(G.creators.setSome({ newSettings: t }));
	}
	return {
		tempState: t,
		tempStateRef: r,
		setters: i,
		dispatch: n,
		isDirty: a,
		modify: o
	};
}, Ze = Ye(U), K = fe("cardCategory"), q = fe("categoryDangerZone"), Qe = ({ id: e }) => {
	let t = (0, B.useContext)(H), { navigate: n } = ge(), { value: r, freeze: i } = Ze((t) => t.settings.cardCategories.find((t) => t.id === e)), a = (0, B.useCallback)(() => {
		if (r === void 0) return;
		let e = prompt(`Change ID string for "${r?.singleName}"\n\n⚠️ Careful! This will break the link with anything that references this ID.`, r.id);
		e && (i(), t(G.creators.setCardCategoryId({
			id: r?.id,
			newId: e
		})), n("root", [K(e), q()]));
	}, [
		r,
		t,
		i,
		n
	]), o = (0, B.useCallback)(async () => {
		await m({
			message: "Delete category",
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			resolveFalseOnCancel: !0,
			values: { ActorName: r?.singleName ?? "" }
		}) && (i(), n("root", []), t(G.creators.deleteCardCategory({ id: e })));
	}, [
		r?.singleName,
		t,
		i,
		e,
		n
	]);
	return /* @__PURE__ */ D(f, { children: [/* @__PURE__ */ D("h2", { children: [
		/* @__PURE__ */ w(p, { children: "Danger Zone" }),
		" (",
		r?.singleName,
		")"
	] }), /* @__PURE__ */ D(y, { children: [/* @__PURE__ */ D(A, {
		label: "Unique Id",
		children: [
			/* @__PURE__ */ w("code", { children: e }),
			" ",
			/* @__PURE__ */ w(k, {
				onClick: a,
				children: /* @__PURE__ */ w(p, { children: "Edit" })
			})
		]
	}), /* @__PURE__ */ w(A, {
		label: "Delete",
		children: /* @__PURE__ */ w(k, {
			onClick: o,
			children: /* @__PURE__ */ w(p, { children: "Delete" })
		})
	})] })] });
}, $e = () => {
	let e = se(K), { value: t } = Ze((t) => t.settings.cardCategories.find((t) => t.id === e)), n = (0, B.useContext)(Re), r = (0, B.useContext)(C), i = (t) => {
		n((n) => {
			let r = n.cardCategories.find((t) => t.id === e);
			r && (r.singleName = t);
		});
	}, a = (t) => {
		n((n) => {
			let r = n.cardCategories.find((t) => t.id === e);
			r && (r.pluralName = t);
		});
	}, o = (t) => {
		n((n) => {
			let r = n.cardCategories.find((t) => t.id === e);
			r && (r.styleKey = t);
		});
	}, s = (t) => {
		n((n) => {
			let r = n.cardCategories.find((t) => t.id === e);
			r && (r.threshold = t);
		});
	}, c = (t) => {
		let r = t.currentTarget.value;
		n((t) => {
			let n = t.cardCategories.find((t) => t.id === e);
			n && (n.thresholdType = r);
		});
	}, l = "#f002", u = "#f001", d = t?.thresholdType ?? "none";
	return /* @__PURE__ */ D(f, { children: [
		/* @__PURE__ */ w("h2", { children: "Card category" }),
		/* @__PURE__ */ D(y, { children: [
			/* @__PURE__ */ w(A, {
				label: "ItemNameSingle",
				children: /* @__PURE__ */ w(S, {
					value: t?.singleName,
					onChange: i
				})
			}),
			/* @__PURE__ */ w(A, {
				label: "ItemNamePlural",
				children: /* @__PURE__ */ w(S, {
					value: t?.pluralName,
					onChange: a
				})
			}),
			/* @__PURE__ */ w(A, {
				label: "StyleKey",
				children: /* @__PURE__ */ w(S, {
					value: t?.styleKey ?? "",
					onChange: o
				})
			}),
			/* @__PURE__ */ w(A, {
				label: "GoalOrLimit",
				children: /* @__PURE__ */ D("select", {
					value: t?.thresholdType ?? "none",
					onChange: c,
					children: [
						/* @__PURE__ */ w("option", {
							value: "none",
							children: /* @__PURE__ */ w(p, { children: "None" })
						}),
						/* @__PURE__ */ w("option", {
							value: "goal",
							children: /* @__PURE__ */ w(p, { children: "Goal" })
						}),
						/* @__PURE__ */ w("option", {
							value: "limit",
							children: /* @__PURE__ */ w(p, { children: "Limit" })
						})
					]
				})
			}),
			d !== "none" && /* @__PURE__ */ w(A, {
				label: d === "goal" ? "Goal" : "Limit",
				children: /* @__PURE__ */ w(j, {
					value: t?.threshold ?? 3,
					onChange: s
				})
			})
		] }),
		/* @__PURE__ */ w("p", {
			css: { textAlign: "right" },
			children: /* @__PURE__ */ w(le, {
				danger: !0,
				to: q(),
				children: "Danger Zone"
			})
		}),
		/* @__PURE__ */ w(he, {
			direction: q,
			css: { background: `
          repeating-linear-gradient(135deg, ${l}, ${l} 30px, ${u} 10px, ${u} 60px),
          linear-gradient(135deg, ${r.colors.bgOpaquePrimary}, ${r.colors.bgOpaquePrimary} )
          ` },
			children: /* @__PURE__ */ w(Qe, { id: e })
		})
	] });
};
$e.displayName = "Category";
//#endregion
//#region src/components/settings/Cards/Categories.tsx
var et = () => {
	let { settings: e } = (0, B.useContext)(U), t = (0, B.useContext)(H), { navigate: n, currentStep: r } = ge(), i = (0, B.useContext)(C), a = K.match(r) ? r.params : null, s = () => {
		let e = x();
		t(G.creators.addCardCategory({ id: e })), n("here", K(e));
	}, c = (0, B.useCallback)((n) => {
		let r = e.cardCategories.toSorted((e, t) => n.indexOf(e.id) - n.indexOf(t.id));
		t(G.creators.setCardCategories({ newCardCategories: r }));
	}, [t, e.cardCategories]), { hoverBg: l, selectedBg: u, selectedHoverBg: d } = (0, B.useMemo)(() => ({
		hoverBg: i.colors.bgOpaquePrimary,
		selectedBg: o(i.colors.glow).blend(i.colors.bgOpaquePrimary, .8).toString(),
		selectedHoverBg: o(i.colors.glow).blend(i.colors.bgOpaquePrimary, .9).toString()
	}), [i]), f = (0, B.useCallback)((t) => {
		let n = e.cardCategories.find((e) => e.id === t);
		return n === void 0 ? null : /* @__PURE__ */ D(ue, {
			to: K(t),
			css: {
				gridColumn: "1/-1",
				display: "grid",
				gridTemplateColumns: "subgrid",
				"&:hover": { backgroundColor: l },
				...a === t ? {
					backgroundColor: u,
					"&:hover": { backgroundColor: d }
				} : {}
			},
			children: [/* @__PURE__ */ w("div", {
				css: {
					gridColumn: "1",
					padding: "0.3em",
					textShadow: "none",
					overflow: "hidden",
					whiteSpace: "nowrap",
					textOverflow: "ellipsis"
				},
				children: n.singleName
			}), /* @__PURE__ */ w("div", {
				css: {
					gridColumn: "2",
					padding: "0.3em",
					textShadow: "none",
					color: i.colors.text,
					fontStyle: "italic",
					opacity: .7
				},
				children: n.styleKey
			})]
		}, t);
	}, [
		a,
		l,
		u,
		d,
		e.cardCategories,
		i.colors.text
	]);
	return /* @__PURE__ */ D("div", {
		css: {
			..._,
			display: "flex",
			flexDirection: "column",
			backgroundColor: i.colors.backgroundPrimary,
			border: `1px solid ${i.colors.controlBorder}`,
			padding: "0.5em",
			marginTop: "0.5em"
		},
		children: [
			/* @__PURE__ */ w("h2", { children: /* @__PURE__ */ w(p, { children: "Card categories" }) }),
			/* @__PURE__ */ w("p", { children: /* @__PURE__ */ w(k, {
				css: { width: "auto" },
				onClick: s,
				children: "Add category"
			}) }),
			/* @__PURE__ */ w(Ge, {
				css: {
					flex: 1,
					overflow: "auto",
					gridAutoRows: "2em",
					position: "relative"
				},
				items: e.cardCategories.map((e) => e.id),
				setItems: c,
				renderItem: f,
				gridTemplateColumns: "1fr 1fr 1fr",
				headers: [{
					label: "Category",
					id: "category"
				}, {
					label: "Style Key",
					id: "styleKey"
				}],
				emptyMessage: /* @__PURE__ */ w("p", { children: /* @__PURE__ */ w(p, { children: "No card categories have been added yet." }) })
			}),
			/* @__PURE__ */ w(ce, {
				direction: K,
				children: /* @__PURE__ */ w(de, {
					margin: "15em",
					children: /* @__PURE__ */ w($e, {})
				})
			})
		]
	});
};
et.displayName = "Categories";
//#endregion
//#region src/components/settings/Cards/CardsSettings.tsx
var tt = ({ setters: e }) => {
	let { settings: t } = (0, B.useContext)(U), n = (0, B.useCallback)((t) => {
		e.useCards(t);
	}, [e]);
	return /* @__PURE__ */ w(me, { children: /* @__PURE__ */ w(pe, {
		after: !0,
		children: /* @__PURE__ */ D("div", {
			"data-testid": "cards-settings",
			css: {
				..._,
				display: "flex",
				flexDirection: "column",
				padding: "0.5em",
				pointerEvents: "auto"
			},
			children: [/* @__PURE__ */ w("div", { children: /* @__PURE__ */ w(y, {
				css: {},
				children: /* @__PURE__ */ w(A, {
					label: "Use cards?",
					children: /* @__PURE__ */ w(N, {
						checked: t.useCards,
						onChange: n
					})
				})
			}) }), t.useCards && /* @__PURE__ */ w(f, { children: /* @__PURE__ */ w("div", {
				css: {
					flex: 1,
					position: "relative"
				},
				children: /* @__PURE__ */ w(et, {})
			}) })]
		})
	}) });
};
tt.displayName = "CardsSettings";
//#endregion
//#region src/components/inputs/PersonalDetailsListEdit.tsx
var nt = ({ personalDetails: e, onChange: t }) => {
	let n = (0, B.useCallback)((n) => {
		if (!n.currentTarget.dataset.index) return;
		let r = [...e];
		r[Number(n.currentTarget.dataset.index)] = {
			...r[Number(n.currentTarget.dataset.index)],
			name: n.currentTarget.value
		}, t(r);
	}, [t, e]), r = (0, B.useCallback)((n) => {
		if (!n.currentTarget.dataset.index) return;
		let r = [...e];
		r[Number(n.currentTarget.dataset.index)] = {
			...r[Number(n.currentTarget.dataset.index)],
			type: n.currentTarget.value
		}, t(r);
	}, [t, e]), i = (0, B.useCallback)((n) => {
		if (n.preventDefault(), !n.currentTarget.dataset.index) return;
		let r = [...e];
		r.splice(Number(n.currentTarget.dataset.index), 1), t(r);
	}, [t, e]), a = (0, B.useCallback)(() => {
		t([...e, {
			name: "",
			type: "item"
		}]);
	}, [t, e]);
	return /* @__PURE__ */ D("div", { children: [
		e.length === 0 && /* @__PURE__ */ w("i", { children: /* @__PURE__ */ w(p, { children: "Empty List" }) }),
		e.map((t, a) => /* @__PURE__ */ D("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [
				/* @__PURE__ */ w("div", {
					css: {
						width: "14em",
						position: "relative"
					},
					children: /* @__PURE__ */ w("input", {
						"data-index": a,
						type: "text",
						value: t.name,
						onChange: n
					})
				}),
				/* @__PURE__ */ w("div", {
					css: { position: "relative" },
					children: /* @__PURE__ */ D("select", {
						"data-index": a,
						value: e[a].type,
						onChange: r,
						children: [/* @__PURE__ */ w("option", {
							value: "text",
							children: "Text"
						}), /* @__PURE__ */ w("option", {
							value: "item",
							children: "Item"
						})]
					})
				}),
				/* @__PURE__ */ w("div", {
					css: {
						width: "6em",
						position: "relative"
					},
					children: /* @__PURE__ */ w("button", {
						"data-index": a,
						onClick: i,
						children: /* @__PURE__ */ w("i", { className: "fas fa-trash" })
					})
				})
			]
		}, a)),
		/* @__PURE__ */ w("div", {
			css: {
				display: "flex",
				flexDirection: "row",
				width: "18em"
			},
			children: /* @__PURE__ */ D(k, {
				onClick: a,
				children: [
					/* @__PURE__ */ w("i", { className: "fas fa-plus" }),
					" ",
					/* @__PURE__ */ w(p, { children: "Add item" })
				]
			})
		})
	] });
}, rt = ({ setters: e }) => {
	let t = c.presets, { settings: n } = (0, B.useContext)(U), i = (0, B.useContext)(H), a = (0, B.useCallback)((n) => {
		r(game);
		let a = n.currentTarget.value;
		if (a === "customSystem") {
			e.systemPreset(a);
			return;
		}
		let o = t[a];
		if (!o) throw Error("Somehow ended up picking a preset which doesnae exist");
		i(G.creators.applyPreset({
			preset: o,
			presetId: a
		}));
	}, [
		i,
		t,
		e
	]), o = 0;
	return /* @__PURE__ */ D(y, {
		css: {
			flex: 1,
			overflow: "auto"
		},
		children: [
			/* @__PURE__ */ w(W, {
				label: "System Preset",
				children: /* @__PURE__ */ D("select", {
					value: n.systemPreset,
					onChange: a,
					children: [Object.keys(t).map((e) => /* @__PURE__ */ w("option", {
						value: e,
						children: t[e].displayName
					}, e)), n.systemPreset === "customSystem" && /* @__PURE__ */ w("option", {
						value: "customSystem",
						children: "Custom"
					})]
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Visual Theme",
				index: o++,
				children: /* @__PURE__ */ w("select", {
					value: n.defaultThemeName,
					onChange: (t) => {
						e.defaultThemeName(t.currentTarget.value);
					},
					children: Object.keys(c.themes).map((e) => /* @__PURE__ */ w("option", {
						value: e,
						children: c.themes[e].displayName
					}, e))
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Occupation Label",
				index: o++,
				children: /* @__PURE__ */ w(S, {
					value: n.occupationLabel,
					onChange: e.occupationLabel
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Personal details",
				index: o++,
				children: /* @__PURE__ */ w(nt, {
					personalDetails: n.personalDetails,
					onChange: e.personalDetails
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Notes Fields",
				index: o++,
				children: /* @__PURE__ */ w(V, {
					value: n.longNotes,
					onChange: e.longNotes
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Generic Occupation",
				index: o++,
				children: /* @__PURE__ */ w(S, {
					onChange: e.genericOccupation,
					value: n.genericOccupation
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "ItemAddedNotifications",
				index: o++,
				children: /* @__PURE__ */ w(N, {
					checked: n.notifyItemAddedToActor,
					onChange: e.notifyItemAddedToActor
				})
			})
		]
	});
};
rt.displayName = "CoreSettings";
//#endregion
//#region src/components/inputs/Dropdown.tsx
var it = /* @__PURE__ */ B.createContext(null), at = /* @__PURE__ */ B.createContext(() => {
	t.warn("CloseContext used without a provider");
}), ot = 200, st = ({ children: e, label: t, showArrow: n = !0, style: r, role: i, className: a }) => {
	let [o, s] = (0, B.useState)(!1), c = (0, B.useCallback)(() => s(!1), []), l = (0, B.useRef)(null), u = (0, B.useRef)(null), d = (0, B.useCallback)((e) => {
		let t = e.currentTarget === l.current, n = l.current && l.current.contains(e.target), r = u.current?.contains(e.target);
		t || n || r || c();
	}, [c]), p = (0, B.useContext)(it)?.current ?? document.body, [[m, h], g] = (0, B.useState)([0, 0]), _ = (0, B.useCallback)(() => {
		let e = u.current?.getBoundingClientRect(), t = p.getBoundingClientRect();
		g([(e?.bottom ?? 0) - t.top, t.right - (e?.right ?? 0)]), s((e) => !e);
	}, [p]), v = (0, B.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []);
	(0, B.useEffect)(() => (p.addEventListener("click", d), () => {
		p.removeEventListener("click", d);
	}), [p, d]);
	let { shouldMount: y, isShowing: b } = je(o, ot);
	return /* @__PURE__ */ D(f, { children: [/* @__PURE__ */ D(k, {
		role: i,
		ref: u,
		onClick: _,
		onDoubleClick: v,
		style: r,
		className: a,
		css: { cursor: "pointer" },
		children: [t, n ? /* @__PURE__ */ w(ve, { style: { verticalAlign: "middle" } }) : null]
	}), y && /* @__PURE__ */ Ve.createPortal(/* @__PURE__ */ w(at.Provider, {
		value: c,
		children: /* @__PURE__ */ w("div", {
			style: {
				position: "absolute",
				top: m,
				right: h,
				transitionProperty: "opacity",
				transitionDuration: `${ot}ms`,
				zIndex: 1e4,
				boxSizing: "border-box",
				opacity: b ? 1 : 0
			},
			ref: l,
			children: e
		})
	}), p)] });
}, ct = ({ children: e, className: t }) => /* @__PURE__ */ w("div", {
	className: `menu-outer ${t}`,
	css: {
		background: "#123",
		color: "#abc",
		padding: "0",
		border: "1px solid currentColor",
		boxShadow: "0 0.5em 0.5em 0.2em #0007"
	},
	children: e
}), J = ({ icon: e, children: t, onClick: n }) => {
	let r = (0, B.useContext)(at);
	return /* @__PURE__ */ D("a", {
		onClick: (e) => {
			r(), e.preventDefault(), e.stopPropagation(), n(e);
		},
		css: {
			display: "flex",
			flexDirection: "row",
			minHeight: "2em",
			maxHeight: "max-content",
			borderBottom: "1px solid currentColor",
			transition: "background-color 300ms ease-out",
			cursor: "pointer",
			":hover": {
				backgroundColor: "#345",
				color: "#def",
				transition: "background-color 0ms ",
				textShadow: "0 0 0.25em currentColor"
			}
		},
		children: [/* @__PURE__ */ w("div", {
			css: {
				width: "3em",
				borderRight: "1px solid currentColor",
				position: "relative"
			},
			children: /* @__PURE__ */ w("div", {
				css: {
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)"
				},
				children: e
			})
		}), /* @__PURE__ */ w("div", {
			css: { padding: "0.5em" },
			children: t
		})]
	});
}, lt = ({ field: e, categoryId: t, fieldId: n }) => {
	let r = (0, B.useContext)(H), i = (0, B.useCallback)((e) => {
		r(G.creators.setFieldDefault({
			categoryId: t,
			fieldId: n,
			newDefault: e
		}));
	}, [
		t,
		r,
		n
	]);
	return /* @__PURE__ */ D("div", {
		css: { display: "flex" },
		children: [/* @__PURE__ */ w("div", {
			css: {
				flex: 0,
				paddingRight: "1em"
			},
			children: /* @__PURE__ */ w(p, { children: "Default" })
		}), /* @__PURE__ */ w(N, {
			checked: e.default,
			onChange: i
		})]
	});
};
lt.displayName = "CheckboxFieldSettings";
//#endregion
//#region src/components/settings/Equipment/NumberFieldSettings.tsx
var ut = ({ field: e, categoryId: t, fieldId: n }) => {
	let r = (0, B.useContext)(H), i = O(e), a = (0, B.useCallback)((e) => {
		r(G.creators.setFieldDefault({
			categoryId: t,
			fieldId: n,
			newDefault: e
		}));
	}, [
		t,
		r,
		n
	]), o = (0, B.useCallback)((e) => {
		r(G.creators.setFieldMin({
			categoryId: t,
			fieldId: n,
			newMin: e
		}));
	}, [
		t,
		r,
		n
	]), s = (0, B.useCallback)((e) => {
		r(G.creators.setFieldMax({
			categoryId: t,
			fieldId: n,
			newMax: e
		}));
	}, [
		t,
		r,
		n
	]), c = (0, B.useCallback)((e) => {
		let a = e ? Math.min(i.current.default, i.current.max ?? 0) : void 0;
		r(G.creators.setFieldMin({
			categoryId: t,
			fieldId: n,
			newMin: a
		}));
	}, [
		t,
		r,
		n,
		i
	]), l = (0, B.useCallback)((e) => {
		let a = e ? Math.max(i.current.default, i.current.min ?? 0) : void 0;
		r(G.creators.setFieldMax({
			categoryId: t,
			fieldId: n,
			newMax: a
		}));
	}, [
		t,
		r,
		n,
		i
	]);
	return /* @__PURE__ */ D("div", {
		css: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr 1fr",
			gridGap: "0.5rem",
			gridTemplateAreas: "\n            \"defaultLbl minLbl maxLbl\"\n            \"default    min    max\"\n          "
		},
		children: [
			/* @__PURE__ */ w("div", {
				css: { gridArea: "defaultLbl" },
				children: /* @__PURE__ */ w(p, { children: "Default" })
			}),
			/* @__PURE__ */ w(j, {
				css: { gridArea: "default" },
				value: e.default,
				onChange: a
			}),
			/* @__PURE__ */ w("div", {
				css: { gridArea: "minLbl" },
				children: /* @__PURE__ */ D("label", { children: [
					/* @__PURE__ */ w(p, { children: "Min" }),
					" ",
					/* @__PURE__ */ w(N, {
						checked: e.min !== void 0,
						onChange: c
					})
				] })
			}),
			e.min !== void 0 && /* @__PURE__ */ w(j, {
				css: { gridArea: "min" },
				value: e.min,
				onChange: o
			}),
			/* @__PURE__ */ w("div", {
				css: { gridArea: "maxLbl" },
				children: /* @__PURE__ */ D("label", { children: [
					/* @__PURE__ */ w(p, { children: "Max" }),
					" ",
					/* @__PURE__ */ w(N, {
						checked: e.max !== void 0,
						onChange: l
					})
				] })
			}),
			e.max !== void 0 && /* @__PURE__ */ w(j, {
				css: { gridArea: "max" },
				value: e.max,
				onChange: s
			})
		]
	});
};
ut.displayName = "NumberFieldSettings";
//#endregion
//#region src/components/settings/Equipment/StringFieldSettings.tsx
var dt = ({ field: e, categoryId: t, fieldId: n }) => {
	let r = (0, B.useContext)(H), i = (0, B.useCallback)((e) => {
		r(G.creators.setFieldDefault({
			categoryId: t,
			fieldId: n,
			newDefault: e
		}));
	}, [
		t,
		r,
		n
	]);
	return /* @__PURE__ */ D("div", {
		css: { display: "flex" },
		children: [/* @__PURE__ */ w("div", {
			css: {
				flex: 0,
				paddingRight: "1em"
			},
			children: /* @__PURE__ */ w(p, { children: "Default" })
		}), /* @__PURE__ */ w(S, {
			css: { flex: 1 },
			value: e.default,
			onChange: i
		})]
	});
};
dt.displayName = "StringFieldSettings";
//#endregion
//#region src/components/settings/Equipment/Field.tsx
var ft = ({ field: e, categoryId: t, fieldId: n, idx: r }) => {
	let i = (0, B.useContext)(C), a = (0, B.useContext)(H), { settings: { equipmentCategories: o } } = (0, B.useContext)(U), s = Object.keys(o[t].fields).length, c = (0, B.useCallback)((e) => {
		a(G.creators.renameField({
			categoryId: t,
			fieldId: n,
			newName: e
		}));
	}, [
		a,
		t,
		n
	]), l = (0, B.useCallback)((e) => {
		e.preventDefault();
		let r = e.currentTarget.value;
		Me(r), a(G.creators.setFieldType({
			categoryId: t,
			fieldId: n,
			newType: r
		}));
	}, [
		a,
		t,
		n
	]), u = (0, B.useCallback)(() => {
		a(G.creators.moveFieldUp({
			categoryId: t,
			fieldId: n
		}));
	}, [
		a,
		t,
		n
	]), d = (0, B.useCallback)(() => {
		a(G.creators.moveFieldDown({
			categoryId: t,
			fieldId: n
		}));
	}, [
		a,
		t,
		n
	]), f = (0, B.useCallback)(() => {
		E("Delete Field") && a(G.creators.deleteField({
			categoryId: t,
			fieldId: n
		}));
	}, [
		a,
		t,
		n
	]), m = (0, B.useCallback)(() => {
		let r = prompt(`Change ID string for "${e.name}"\n\n⚠️ Careful! This will remove field information from any equipment using the current ID.`, n);
		r && a(G.creators.changeFieldId({
			categoryId: t,
			fieldId: n,
			newFieldId: r
		}));
	}, [
		t,
		a,
		e.name,
		n
	]);
	return /* @__PURE__ */ D("div", {
		css: {
			padding: "0.5em",
			borderWidth: "1px",
			margin: "0.5em 0 0.5em 0",
			borderStyle: "solid",
			borderColor: i.colors.controlBorder,
			backgroundColor: i.colors.backgroundPrimary
		},
		children: [
			/* @__PURE__ */ D("div", {
				css: {
					display: "flex",
					gap: "1em",
					marginBottom: "0.5em"
				},
				children: [
					/* @__PURE__ */ w(S, {
						placeholder: "Enter field name",
						value: e.name,
						css: { flex: 1 },
						onChange: c
					}),
					/* @__PURE__ */ D("select", {
						value: e.type,
						css: { flex: 1 },
						onChange: l,
						children: [
							/* @__PURE__ */ w("option", {
								value: "string",
								children: E("Text")
							}),
							/* @__PURE__ */ w("option", {
								value: "number",
								children: E("Number")
							}),
							/* @__PURE__ */ w("option", {
								value: "checkbox",
								children: E("Toggle")
							})
						]
					}),
					/* @__PURE__ */ w(st, {
						showArrow: !1,
						label: /* @__PURE__ */ w(R, {}),
						css: {
							flex: 0,
							paddingRight: "1em",
							paddingLeft: "1em"
						},
						children: /* @__PURE__ */ D(ct, { children: [
							r > 0 && /* @__PURE__ */ w(J, {
								icon: /* @__PURE__ */ w(P, {}),
								onClick: u,
								children: E("Move up")
							}),
							r < s - 1 && /* @__PURE__ */ w(J, {
								icon: /* @__PURE__ */ w(L, {}),
								onClick: d,
								children: E("Move down")
							}),
							/* @__PURE__ */ w(J, {
								icon: /* @__PURE__ */ w(F, {}),
								onClick: m,
								children: /* @__PURE__ */ w(p, { children: "View/change ID" })
							}),
							/* @__PURE__ */ w(J, {
								icon: /* @__PURE__ */ w(I, {}),
								onClick: f,
								children: E("Delete")
							})
						] })
					})
				]
			}),
			e.type === "number" && /* @__PURE__ */ w(ut, {
				field: e,
				categoryId: t,
				fieldId: n
			}),
			e.type === "string" && /* @__PURE__ */ w(dt, {
				field: e,
				categoryId: t,
				fieldId: n
			}),
			e.type === "checkbox" && /* @__PURE__ */ w(lt, {
				field: e,
				categoryId: t,
				fieldId: n
			})
		]
	});
};
ft.displayName = "Field";
//#endregion
//#region src/components/settings/Equipment/Category.tsx
var pt = ({ id: e, idx: t }) => {
	let n = (0, B.useContext)(H), { settings: r } = (0, B.useContext)(U), i = (0, B.useCallback)((t) => {
		n(G.creators.renameCategory({
			id: e,
			newName: t
		}));
	}, [n, e]), a = (0, B.useCallback)(() => {
		n(G.creators.addField({ categoryId: e }));
	}, [n, e]), o = (0, B.useCallback)(() => {
		n(G.creators.moveCategoryUp({ categoryId: e }));
	}, [n, e]), s = (0, B.useCallback)(() => {
		n(G.creators.moveCategoryDown({ categoryId: e }));
	}, [n, e]), c = (0, B.useCallback)(async () => {
		await m({
			message: "Delete Category",
			confirmText: "Delete",
			cancelText: "Whoops, No!",
			confirmIconClass: "fas fa-trash",
			resolveFalseOnCancel: !0
		}) && n(G.creators.deleteCategory({ id: e }));
	}, [n, e]), l = (0, B.useCallback)(() => {
		let t = prompt(`Change ID string for "${r.equipmentCategories[e].name}"\n\n⚠️ Careful! This will remove category information from any equipment using the current ID.`, e);
		t && n(G.creators.changeCategoryId({
			oldCategoryId: e,
			newCategoryId: t
		}));
	}, [
		n,
		e,
		r.equipmentCategories
	]);
	return /* @__PURE__ */ D(f, { children: [/* @__PURE__ */ D(y, {
		css: { paddingTop: "0.5em" },
		children: [/* @__PURE__ */ D(A, {
			label: "Category Name",
			css: {
				display: "flex",
				gap: "1em",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ w(S, {
				css: { flex: 1 },
				value: r.equipmentCategories[e].name,
				onChange: i
			}), /* @__PURE__ */ w(st, {
				showArrow: !1,
				label: /* @__PURE__ */ w(R, {}),
				css: {
					flex: 0,
					paddingLeft: "1em",
					paddingRight: "1em"
				},
				children: /* @__PURE__ */ D(ct, { children: [
					t > 0 && /* @__PURE__ */ w(J, {
						icon: /* @__PURE__ */ w(P, {}),
						onClick: o,
						children: E("Move up")
					}),
					t < Object.keys(r.equipmentCategories).length - 1 && /* @__PURE__ */ w(J, {
						icon: /* @__PURE__ */ w(L, {}),
						onClick: s,
						children: E("Move down")
					}),
					/* @__PURE__ */ w(J, {
						icon: /* @__PURE__ */ w(F, {}),
						onClick: l,
						children: /* @__PURE__ */ w(p, { children: "View/change ID" })
					}),
					/* @__PURE__ */ w(J, {
						icon: /* @__PURE__ */ w(I, {}),
						onClick: c,
						children: E("Delete")
					})
				] })
			})]
		}), /* @__PURE__ */ D(A, {
			label: "Fields",
			children: [Object.entries(r.equipmentCategories[e].fields).map(([t, n], r) => /* @__PURE__ */ w(ft, {
				fieldId: t,
				field: n,
				categoryId: e,
				idx: r
			}, t)), /* @__PURE__ */ D(k, {
				onClick: a,
				children: [/* @__PURE__ */ w("i", { className: "fas fa-plus" }), /* @__PURE__ */ w(p, { children: "Add Field" })]
			})]
		})]
	}), /* @__PURE__ */ w("hr", { css: { margin: "1em 0 2em 0" } })] });
};
pt.displayName = "Category";
//#endregion
//#region src/components/settings/Equipment/EquipmentSettings.tsx
var mt = () => {
	r(game);
	let e = (0, B.useContext)(H), t = (0, B.useCallback)(() => {
		e(G.creators.addCategory());
	}, [e]), { settings: n } = (0, B.useContext)(U);
	return /* @__PURE__ */ D(f, { children: [Object.entries(n.equipmentCategories).map(([e, { name: t, fields: n }], r) => /* @__PURE__ */ w(pt, {
		id: e,
		idx: r
	}, e)), /* @__PURE__ */ w(y, {
		css: {
			flex: 1,
			overflow: "auto"
		},
		children: /* @__PURE__ */ w(Ie, { children: /* @__PURE__ */ D(k, {
			onClick: t,
			children: [/* @__PURE__ */ w("i", { className: "fas fa-plus" }), /* @__PURE__ */ w(p, { children: "Add Category" })]
		}) })
	})] });
};
mt.displayName = "EquipmentSettings";
//#endregion
//#region src/settings/getExportableSettingsDict.ts
function ht(e) {
	let t = Object.entries(e).filter(([e]) => u[e]?.exportable ?? !1);
	return Object.fromEntries(t);
}
//#endregion
//#region node_modules/.pnpm/zod-validation-error@5.0.0_zod@4.3.6/node_modules/zod-validation-error/v4/index.mjs
function Y(e) {
	return e instanceof Object && "name" in e && (e.name === "ZodError" || e.name === "$ZodError") && "issues" in e && Array.isArray(e.issues);
}
var gt = "ZodValidationError", X = class extends Error {
	name;
	details;
	constructor(e, t) {
		super(e, t), this.name = gt, this.details = _t(t);
	}
	toString() {
		return this.message;
	}
};
function _t(e) {
	if (e) {
		let t = e.cause;
		if (Y(t)) return t.issues;
	}
	return [];
}
function vt(e) {
	return e.description ?? "";
}
function Z(e) {
	return e.length !== 0;
}
var yt = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
function bt(e) {
	if (e.length === 1) {
		let t = e[0];
		return typeof t == "symbol" && (t = vt(t)), t.toString() || "\"\"";
	}
	return e.reduce((e, t) => typeof t == "number" ? e + "[" + t.toString() + "]" : (typeof t == "symbol" && (t = vt(t)), t.includes("\"") ? e + "[\"" + xt(t) + "\"]" : yt.test(t) ? e + (e.length === 0 ? "" : ".") + t : e + "[\"" + t + "\"]"), "");
}
function xt(e) {
	return e.replace(/"/g, "\\\"");
}
function St(e) {
	return e.length === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1);
}
var Ct = {
	prefix: "Validation error",
	prefixSeparator: ": ",
	maxIssuesInMessage: 99,
	unionSeparator: " or ",
	issueSeparator: "; ",
	includePath: !0,
	forceTitleCase: !0
};
function wt(e = {}) {
	let t = {
		...Ct,
		...e
	};
	return function(e) {
		return Et(e.slice(0, t.maxIssuesInMessage).map((e) => Tt(e, t)).join(t.issueSeparator), t);
	};
}
function Tt(e, t) {
	if (e.code === "invalid_union" && Z(e.errors)) {
		let n = e.errors.map((n) => n.map((n) => Tt({
			...n,
			path: e.path.concat(n.path)
		}, t)).join(t.issueSeparator));
		return Array.from(new Set(n)).join(t.unionSeparator);
	}
	let n = [];
	t.forceTitleCase ? n.push(St(e.message)) : n.push(e.message);
	pathCondition: if (t.includePath && e.path !== void 0 && Z(e.path)) {
		if (e.path.length === 1) {
			let t = e.path[0];
			if (typeof t == "number") {
				n.push(` at index ${t}`);
				break pathCondition;
			}
		}
		n.push(` at "${bt(e.path)}"`);
	}
	return n.join("");
}
function Et(e, t) {
	return t.prefix == null ? e.length > 0 ? e : Ct.prefix : e.length > 0 ? [t.prefix, e].join(t.prefixSeparator) : t.prefix;
}
function Dt(e, t = {}) {
	if (!Y(e)) throw TypeError(`Invalid zodError param; expected instance of ZodError. Did you mean to use the "${At.name}" method instead?`);
	return Q(e, t);
}
function Q(e, t = {}) {
	let n = e.issues, r;
	return r = Z(n) ? Ot(t)(n) : e.message, new X(r, { cause: e });
}
function Ot(e) {
	return "messageBuilder" in e ? e.messageBuilder : wt(e);
}
var kt = (e = {}) => (t) => Y(t) ? Q(t, e) : t instanceof Error ? new X(t.message, { cause: t }) : new X("Unknown error");
function At(e, t = {}) {
	return kt(t)(e);
}
//#endregion
//#region src/settings/validateImportedSettings.ts
function jt(e) {
	let t = JSON.parse(e);
	try {
		return i.parse(t);
	} catch (e) {
		throw Dt(e);
	}
}
//#endregion
//#region src/components/settings/ImportExport.tsx
var Mt = () => {
	let e = 0, t = (0, B.useContext)(H), { settings: r } = (0, B.useContext)(U), i = (0, B.useContext)(Le), [a, o] = (0, B.useState)("settings");
	return /* @__PURE__ */ D(f, { children: [
		/* @__PURE__ */ w("hr", { css: { gridColumn: "label / end" } }),
		/* @__PURE__ */ D("h2", {
			css: { gridColumn: "label / end" },
			children: [/* @__PURE__ */ w(p, { children: "Import/Export" }), " (BETA - please report bugs!)"]
		}),
		/* @__PURE__ */ D(W, {
			label: "Export settings to file",
			index: e++,
			children: [
				/* @__PURE__ */ w(p, { children: "ItemName" }),
				/* @__PURE__ */ w(ee, {
					value: a,
					onChange: o
				}),
				/* @__PURE__ */ w(k, {
					onClick: () => {
						Ee(ht(r), a), ui.notifications?.info("Settings exported to file");
					},
					children: /* @__PURE__ */ w(p, { children: "Export" })
				})
			]
		}),
		/* @__PURE__ */ w(W, {
			label: "Import settings from file",
			index: e++,
			children: /* @__PURE__ */ w(k, {
				onClick: async () => {
					if (!(!i() || await m({
						message: "You have unsaved changes. Are you sure you want to overwrite them?",
						confirmText: "Yes, discard my changes",
						cancelText: "Whoops, No!",
						confirmIconClass: "fas fa-times",
						resolveFalseOnCancel: !0
					}))) return;
					let e = await n("json");
					try {
						let n = jt(e);
						t(G.creators.setSome({ newSettings: n })), ui.notifications?.info("Successfully imported settings");
					} catch (e) {
						ui.notifications?.error(`Error importing settings: ${e.message ?? e}`);
					}
				},
				children: /* @__PURE__ */ w(p, { children: "Import" })
			})
		})
	] });
};
Mt.displayName = "ImportExport";
//#endregion
//#region src/components/settings/MiscSettings.tsx
var Nt = ({ setters: e }) => {
	let t = l(), n = 0, { settings: r } = (0, B.useContext)(U);
	return /* @__PURE__ */ D(y, {
		css: {
			flex: 1,
			overflow: "auto"
		},
		children: [
			/* @__PURE__ */ w(W, {
				label: "Custom themes path",
				index: n++,
				children: /* @__PURE__ */ w(S, {
					onChange: e.customThemePath,
					value: r.customThemePath
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Use turn-passing initiative?",
				index: n++,
				children: /* @__PURE__ */ w(N, {
					checked: r.useTurnPassingInitiative,
					onChange: e.useTurnPassingInitiative
				})
			}),
			t && /* @__PURE__ */ w(W, {
				label: "Debug translations?",
				index: n++,
				children: /* @__PURE__ */ w(N, {
					checked: r.debugTranslations,
					onChange: e.debugTranslations
				})
			}),
			/* @__PURE__ */ w("hr", { css: { gridColumn: "label / end" } }),
			/* @__PURE__ */ w("h2", {
				css: { gridColumn: "label / end" },
				children: /* @__PURE__ */ w(p, { children: "Settings for Moribund World users" })
			}),
			/* @__PURE__ */ w(W, {
				label: "Use Moribund World-style abilities",
				index: n++,
				children: /* @__PURE__ */ w(N, {
					checked: r.useMwStyleAbilities,
					onChange: e.useMwStyleAbilities
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Use alternative item types",
				index: n++,
				children: /* @__PURE__ */ w(N, {
					checked: r.mwUseAlternativeItemTypes,
					onChange: e.mwUseAlternativeItemTypes
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Hidden Short Notes Fields",
				index: n++,
				children: /* @__PURE__ */ w(V, {
					value: r.mwHiddenShortNotes,
					onChange: e.mwHiddenShortNotes
				})
			}),
			/* @__PURE__ */ w(W, {
				label: "Use injury status",
				index: n++,
				children: /* @__PURE__ */ w(N, {
					checked: r.useMwInjuryStatus,
					onChange: e.useMwInjuryStatus
				})
			}),
			/* @__PURE__ */ w(Mt, {})
		]
	});
};
Nt.displayName = "MiscSettings";
//#endregion
//#region src/components/settings/Stats/StatSettingsRow.tsx
var Pt = ({ id: e, stat: t, index: n, which: r }) => {
	let i = (0, B.useContext)(H), a = n % 2 == 0, o = (0, B.useContext)(C), s = O(t), c = O(e), l = (0, B.useCallback)((e) => {
		let t = e ? Math.min(s.current.default, s.current.max ?? 0) : void 0;
		i(G.creators.setStatMin({
			which: r,
			statId: c.current,
			newMin: t
		}));
	}, [
		i,
		r,
		c,
		s
	]), u = (0, B.useCallback)((e) => {
		let t = e ? Math.max(s.current.default, s.current.min ?? 0) : void 0;
		i(G.creators.setStatMax({
			which: r,
			statId: c.current,
			newMax: t
		}));
	}, [
		s,
		i,
		r,
		c
	]), d = (0, B.useCallback)((e) => {
		i(G.creators.setStatDefault({
			which: r,
			statId: c.current,
			newDefault: e
		}));
	}, [
		i,
		r,
		c
	]), f = (0, B.useCallback)((e) => {
		i(G.creators.setStatMin({
			which: r,
			statId: c.current,
			newMin: e
		}));
	}, [
		i,
		r,
		c
	]), m = (0, B.useCallback)((e) => {
		i(G.creators.setStatMax({
			which: r,
			statId: c.current,
			newMax: e
		}));
	}, [
		i,
		r,
		c
	]), h = (0, B.useCallback)((e) => {
		i(G.creators.setStatId({
			which: r,
			oldStatId: c.current,
			newStatId: e
		}));
	}, [
		i,
		c,
		r
	]), g = (0, B.useCallback)((e) => {
		i(G.creators.setStatName({
			which: r,
			statId: c.current,
			newName: e
		}));
	}, [
		i,
		c,
		r
	]), _ = (0, B.useCallback)(() => {
		i(G.creators.deleteStat({
			which: r,
			statId: c.current
		}));
	}, [
		i,
		r,
		c
	]);
	return /* @__PURE__ */ D("div", {
		css: {
			backgroundColor: a ? o.colors.backgroundPrimary : void 0,
			display: "grid",
			gridTemplateRows: "max-content",
			gridTemplateColumns: "1fr    1fr    1fr    1fr     1fr     1fr     2em",
			gridTemplateAreas: "\n          \"idLbl  idLbl  idLbl  nameLbl nameLbl nameLbl delete\"\n          \"id     id     id     name    name    name    delete\"\n          \"defLbl defLbl minLbl minLbl  maxLbl  maxLbl  delete\"\n          \"def    def    min    min     max     max     delete\"\n        ",
			gap: "0.3em",
			padding: "0.5em"
		},
		children: [
			/* @__PURE__ */ w("span", {
				css: { gridArea: "idLbl" },
				children: "id"
			}),
			/* @__PURE__ */ w("span", {
				css: { gridArea: "nameLbl" },
				children: /* @__PURE__ */ w(p, { children: "Item Name" })
			}),
			/* @__PURE__ */ w(S, {
				css: { gridArea: "id" },
				onChange: h,
				value: e
			}),
			/* @__PURE__ */ w(S, {
				css: { gridArea: "name" },
				onChange: g,
				value: t.name
			}),
			/* @__PURE__ */ w("span", {
				css: { gridArea: "defLbl" },
				children: /* @__PURE__ */ w(p, { children: "Default" })
			}),
			/* @__PURE__ */ D("span", {
				css: { gridArea: "minLbl" },
				children: [
					/* @__PURE__ */ w(p, { children: "Min" }),
					" ",
					/* @__PURE__ */ w(N, {
						checked: t.min !== void 0,
						onChange: l
					})
				]
			}),
			/* @__PURE__ */ D("span", {
				css: { gridArea: "maxLbl" },
				children: [
					/* @__PURE__ */ w(p, { children: "Max" }),
					" ",
					/* @__PURE__ */ w(N, {
						checked: t.max !== void 0,
						onChange: u
					})
				]
			}),
			t.default !== void 0 && /* @__PURE__ */ w(j, {
				onChange: d,
				value: t.default,
				min: t.min,
				max: t.max,
				css: { gridArea: "def" }
			}),
			t.min === void 0 ? /* @__PURE__ */ w("span", { css: { gridArea: "min" } }) : /* @__PURE__ */ w(j, {
				onChange: f,
				value: t.min,
				max: t.max,
				css: { gridArea: "min" }
			}),
			t.max === void 0 ? /* @__PURE__ */ w("span", { css: { gridArea: "max" } }) : /* @__PURE__ */ w(j, {
				onChange: m,
				value: t.max,
				min: t.min,
				css: { gridArea: "max" }
			}),
			/* @__PURE__ */ w(k, {
				css: { gridArea: "delete" },
				onClick: _,
				children: /* @__PURE__ */ w("i", { className: "fas fa-trash" })
			})
		]
	});
};
Pt.displayName = "StatSettingsRow";
//#endregion
//#region src/components/settings/Stats/StatsSettingsEditor.tsx
var $ = ({ which: e }) => {
	let t = (0, B.useContext)(U).settings[e], n = (0, B.useContext)(H), r = (0, B.useCallback)(() => {
		n(G.creators.addStat({ which: e }));
	}, [n, e]);
	return /* @__PURE__ */ D("div", { children: [Object.keys(t).map((n, r) => /* @__PURE__ */ w(Pt, {
		stat: t[n],
		id: n,
		index: r + 2,
		which: e
	}, r)), /* @__PURE__ */ D(k, {
		onClick: r,
		children: [/* @__PURE__ */ w("i", { className: "fas fa-plus" }), /* @__PURE__ */ w(p, { children: "Add Stat" })]
	})] });
};
$.displayName = "StatsSettingsEditor";
//#endregion
//#region src/components/settings/Stats/StatsSettings.tsx
var Ft = () => /* @__PURE__ */ w("div", {
	css: {
		..._,
		margin: "1em"
	},
	children: /* @__PURE__ */ w(M, {
		defaultTab: "pcStats",
		tabs: [{
			id: "pcStats",
			label: "PC Stats",
			content: /* @__PURE__ */ w($, { which: "pcStats" })
		}, {
			id: "npcStats",
			label: "NPC Stats",
			content: /* @__PURE__ */ w($, { which: "npcStats" })
		}]
	})
});
Ft.displayName = "StatsSettings";
//#endregion
//#region src/components/settings/Settings.tsx
var It = () => {
	r(game);
	let e = (0, B.useContext)(g);
	if (e === null) throw Error("Settings must be used within a FoundryAppContext");
	let { tempState: t, setters: n, tempStateRef: i, dispatch: a, isDirty: o, modify: s } = Xe(), c = oe(t.settings.defaultThemeName), l = (0, B.useCallback)(async () => {
		let t = !o();
		t ||= await m({
			message: "You have unsaved changes. Are you sure you want to close?",
			confirmText: "Yes, discard my changes",
			cancelText: "Whoops, No!",
			confirmIconClass: "fas fa-times",
			resolveFalseOnCancel: !0
		}), t && await e.close({ submitted: !0 });
	}, [e, o]), d = (0, B.useCallback)(() => l(), [l]), f = (0, B.useCallback)(async () => {
		let t = Object.keys(u).map(async (e) => {
			await u[e].set(i.current.settings[e]);
		});
		await Promise.all(t), Hooks.call(v), await e.close({ submitted: !0 });
	}, [e, i]);
	return (0, B.useEffect)(() => {
		let e = Hooks.on(b, l);
		return () => {
			Hooks.off(b, e);
		};
	}, [l]), /* @__PURE__ */ w(H.Provider, {
		value: a,
		children: /* @__PURE__ */ w(Re.Provider, {
			value: s,
			children: /* @__PURE__ */ w(U.Provider, {
				value: t,
				children: /* @__PURE__ */ w(Le.Provider, {
					value: o,
					children: /* @__PURE__ */ D(h, {
						mode: "small",
						theme: c,
						css: {
							..._,
							display: "flex",
							flexDirection: "column",
							padding: "0.5em"
						},
						children: [/* @__PURE__ */ w("div", {
							css: {
								flex: 1,
								overflow: "auto",
								position: "relative"
							},
							children: /* @__PURE__ */ w(M, {
								defaultTab: "core",
								tabs: [
									{
										id: "core",
										label: "Core",
										content: /* @__PURE__ */ w(rt, { setters: n })
									},
									{
										id: "abilities",
										label: "Abilities",
										content: /* @__PURE__ */ w(Be, { setters: n })
									},
									{
										id: "equipment",
										label: "Equipment",
										content: /* @__PURE__ */ w(mt, {})
									},
									{
										id: "stats",
										label: "Stats",
										content: /* @__PURE__ */ w(Ft, {})
									},
									{
										id: "cards",
										label: "Cards",
										content: /* @__PURE__ */ w(tt, { setters: n })
									},
									{
										id: "misc",
										label: "Misc",
										content: /* @__PURE__ */ w(Nt, { setters: n })
									}
								]
							})
						}), /* @__PURE__ */ D("div", {
							css: {
								display: "flex",
								flexDirection: "row",
								padding: "0.5em",
								background: c.colors.backgroundSecondary
							},
							children: [/* @__PURE__ */ D(k, {
								css: {
									flex: 1,
									paddingTop: "0.5em",
									paddingBottom: "0.5em"
								},
								onClick: d,
								children: [
									/* @__PURE__ */ w("i", { className: "fas fa-times" }),
									" ",
									/* @__PURE__ */ w(p, { children: "Cancel" })
								]
							}), /* @__PURE__ */ D(k, {
								css: {
									flex: 1,
									paddingTop: "0.5em",
									paddingBottom: "0.5em"
								},
								onClick: f,
								children: [
									/* @__PURE__ */ w("i", { className: "fas fa-save" }),
									" ",
									/* @__PURE__ */ w(p, { children: "Save Changes" })
								]
							})]
						})]
					})
				})
			})
		})
	});
};
It.displayName = "Settings";
//#endregion
export { It as Settings };
