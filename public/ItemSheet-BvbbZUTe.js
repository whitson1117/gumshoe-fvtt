import { o as e } from "./chunk-BQCxAhux.js";
import { D as t, J as n, T as r, _ as i, a, b as o, c as s, h as c, i as l, n as u, r as d, t as f, u as p, v as m, x as h, y as g } from "./AsyncTextInput-DMwutQQ3.js";
import { S as _, T as v, c as y, d as b, f as x, g as S, l as C, m as w, o as T, p as E, t as D, v as O, w as k, x as A, y as j } from "./ImagePickle-CJmXJxfo.js";
import { t as ee } from "./react-Cajsgul7.js";
import { a as te, i as M, n as N, r as ne, t as P } from "./Button-wjG7vDMi.js";
import { i as F, t as I } from "./assertApplicationV2-BCfhKtnc.js";
import { i as L, o as R, s as re, t as ie } from "./SlideInNestedPanelRoute-KHou5B03.js";
import { t as z } from "./GridField-CzF2zV4m.js";
import { a as ae, i as B, n as oe, o as se, r as ce, s as le, t as V } from "./CheckButtons-jyaVJQGW.js";
import { a as H, n as U, o as ue, r as de, s as fe, u as pe } from "./weapon-avRdBZZ4.js";
import { f as W, p as me, t as G } from "./Toggle-BWVRHS3C.js";
import { t as K } from "./GridFieldStacked-CBtoiXE4.js";
//#region src/components/ItemSheetFramework/types.ts
var q = /* @__PURE__ */ e(ee(), 1), J = /* @__PURE__ */ function(e) {
	return e.Main = "main", e.Config = "config", e;
}({}), he = (0, q.createContext)(J.Main), Y = ({ mode: e, children: t }) => e === (0, q.useContext)(he) ? /* @__PURE__ */ m(i, { children: t }) : null;
Y.displayName = "ModeSelect";
//#endregion
//#region src/components/ItemSheetFramework/SheetFramework.tsx
var X = ({ supertitle: e, children: t }) => {
	let { item: n, app: r } = F(), { contentEditableRef: i, onBlur: a, onFocus: o, onInput: s } = d(n.name ?? "", n.setName), [c, l] = (0, q.useState)(!1);
	return I(r), (0, q.useEffect)(() => {
		r.render({ force: !0 });
	}, [r, c]), /* @__PURE__ */ m(he.Provider, {
		value: c ? J.Config : J.Main,
		children: /* @__PURE__ */ g("div", {
			css: {
				paddingBottom: "1em",
				display: "grid",
				gap: "0.3em",
				height: "100%",
				position: "relative",
				gridTemplateColumns: "auto 1fr auto",
				gridTemplateRows: "auto auto 1fr",
				gridTemplateAreas: "\"image slug     cog\" \"image headline headline\" \"body  body     body\" "
			},
			children: [
				/* @__PURE__ */ m("div", {
					css: { gridArea: "slug" },
					children: e
				}),
				/* @__PURE__ */ m("h1", {
					css: { gridArea: "headline" },
					children: /* @__PURE__ */ m("span", {
						contentEditable: !0,
						css: {
							minWidth: "1em",
							display: "inline-block"
						},
						ref: i,
						onInput: s,
						onBlur: a,
						onFocus: o
					})
				}),
				/* @__PURE__ */ m(D, { css: {
					gridArea: "image",
					transform: "rotateZ(-2deg)",
					width: "4em",
					height: "4em",
					margin: "0 1em 0.5em 0"
				} }),
				/* @__PURE__ */ m("a", {
					css: { gridArea: "cog" },
					onClick: () => {
						l((e) => !e);
					},
					children: /* @__PURE__ */ m("i", { className: `fa fa-${c ? "check" : "cog"}` })
				}),
				/* @__PURE__ */ m("div", {
					css: {
						gridArea: "body",
						display: "flex",
						flexDirection: "column",
						overflowY: "auto",
						position: "relative"
					},
					children: t
				})
			]
		})
	});
};
X.displayName = "SheetFramework";
//#endregion
//#region src/components/transitions/useListShowHideTransition.tsx
var ge = /* @__PURE__ */ e(te(), 1);
function _e(e, t, n, r = 0) {
	let [i, a] = (0, q.useState)(e.map((e) => ({
		item: e,
		isShowing: !0,
		isEntering: !0,
		key: t(e)
	}))), o = M(i), s = M(t), c = M(n), l = M(r);
	return (0, q.useEffect)(() => {
		let t = [...o.current], n = [], r = [], i = s.current;
		for (let [r, a] of t.entries()) {
			let o = e.find((e) => i(e) === a.key);
			o ? t[r] = {
				...a,
				item: o,
				isShowing: a.isEntering ? a.isShowing : !0,
				isEntering: !0
			} : (t[r] = {
				...a,
				isShowing: !1,
				isEntering: !1
			}, n.push(a.key));
		}
		let u = null;
		for (let n of e) {
			let e = i(n);
			if (!o.current.some((t) => t.key === e)) {
				r.push(e);
				let i = u === null ? -1 : t.findIndex(({ key: e }) => e === u), a = {
					item: n,
					isShowing: !1,
					isEntering: !0,
					key: e
				};
				t.splice(i + 1, 0, a);
			}
			u = e;
		}
		setTimeout(() => {
			(0, ge.flushSync)(() => {
				a(t);
			});
		}, 0), n.length > 0 && setTimeout(() => {
			a((e) => e.filter((e) => !(n.includes(e.key) && !e.isEntering)));
		}, c.current), r.length > 0 && setTimeout(() => {
			a((e) => e.map((e) => r.includes(e.key) ? {
				...e,
				isShowing: !0
			} : e));
		}, l.current);
	}, [
		e,
		s,
		o,
		c,
		l
	]), i;
}
//#endregion
//#region src/components/abilities/getListTransitionStyles.ts
function ve(e, t, n) {
	return {
		transition: `opacity ${n}ms ease-in-out, transform ${n}ms ease-in-out`,
		opacity: e ? 1 : 0,
		transform: e ? "none" : t ? "translateX(-40px)" : "translateX(40px)"
	};
}
//#endregion
//#region src/components/abilities/SituationalModifiersEditorRow.tsx
var ye = /* @__PURE__ */ (0, q.forwardRef)(({ situationalModifier: { modifier: e, situation: t }, index: n, onChangeModifier: r, onChangeSituation: i, onDelete: a }, o) => {
	let s = (0, q.useCallback)((e) => {
		r(n, e);
	}, [n, r]), c = (0, q.useCallback)((e) => {
		i(n, e);
	}, [n, i]);
	return /* @__PURE__ */ g("div", {
		ref: o,
		css: { marginBottom: "0.5em" },
		children: [/* @__PURE__ */ g("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ m(W, {
				css: { flex: 1 },
				value: e,
				onChange: s
			}), /* @__PURE__ */ m(P, {
				css: { flexBasis: "min-content" },
				onClick: () => {
					a(n);
				},
				children: /* @__PURE__ */ m("i", { className: "fas fa-trash" })
			})]
		}), /* @__PURE__ */ m(f, {
			value: t,
			onChange: c
		})]
	});
});
ye.displayName = "SituationalModifiersEditorRow";
//#endregion
//#region src/components/abilities/SituationalModifiersEditor.tsx
var be = 400, xe = () => {
	let { item: e } = F();
	return E(e), /* @__PURE__ */ g("div", {
		css: { marginBottom: "1em" },
		children: [_e(e.system.situationalModifiers, (e) => e.id, be).map(({ item: t, isShowing: n, isEntering: r, key: i }, a) => /* @__PURE__ */ m("div", {
			style: ve(n, r, be),
			children: /* @__PURE__ */ m(ye, {
				index: a,
				situationalModifier: t,
				onChangeSituation: e.system.setSituationalModifierSituation,
				onChangeModifier: e.system.setSituationalModifierModifier,
				onDelete: e.system.deleteSituationalModifier
			})
		}, i)), /* @__PURE__ */ g(P, {
			onClick: e.system.addSituationalModifier,
			css: { margin: 0 },
			children: [
				/* @__PURE__ */ m("i", { className: "fas fa-plus" }),
				" ",
				/* @__PURE__ */ m(a, { children: "Add item" })
			]
		})]
	});
}, Se = /* @__PURE__ */ (0, q.forwardRef)(({ unlock: { rating: e, description: t }, index: n, onChangeRating: r, onChangeDescription: i, onDelete: a }, o) => {
	let s = (0, q.useCallback)((e) => {
		r(n, e);
	}, [n, r]), c = (0, q.useCallback)((e) => {
		i(n, e);
	}, [n, i]);
	return /* @__PURE__ */ g("div", {
		ref: o,
		css: { marginBottom: "0.5em" },
		children: [/* @__PURE__ */ g("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ m(W, {
				css: { flex: 1 },
				value: e,
				onChange: s
			}), /* @__PURE__ */ m(P, {
				css: { flexBasis: "min-content" },
				onClick: () => {
					a(n);
				},
				children: /* @__PURE__ */ m("i", { className: "fas fa-trash" })
			})]
		}), /* @__PURE__ */ m(f, {
			value: t,
			onChange: c
		})]
	});
});
Se.displayName = "UnlocksEditorRow";
//#endregion
//#region src/components/abilities/UnlocksEditor.tsx
var Ce = 400, we = () => {
	let { item: e } = F();
	return E(e), /* @__PURE__ */ g("div", {
		css: { marginBottom: "1em" },
		children: [_e(e.system.unlocks, (e) => e.id, Ce).map(({ item: t, isShowing: n, isEntering: r, key: i }, a) => /* @__PURE__ */ m("div", {
			style: ve(n, r, Ce),
			children: /* @__PURE__ */ m(Se, {
				index: a,
				unlock: t,
				onChangeDescription: e.system.setUnlockDescription,
				onChangeRating: e.system.setUnlockRating,
				onDelete: e.system.deleteUnlock
			})
		}, i)), /* @__PURE__ */ g(P, {
			onClick: e.system.addUnlock,
			css: { margin: 0 },
			children: [
				/* @__PURE__ */ m("i", { className: "fas fa-plus" }),
				" ",
				/* @__PURE__ */ m(a, { children: "Add item" })
			]
		})]
	});
}, Te = r.useNpcCombatBonuses.get, Ee = r.useMwStyleAbilities.get, De = () => {
	let { item: e } = F();
	t(game), E(e);
	let n = j(e), s = (0, q.useCallback)(() => {
		o({
			message: e.actor ? "Delete {ActorName}'s \"{AbilityName}\" ability?" : "Delete the \"{AbilityName}\" ability?",
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			resolveFalseOnCancel: !0,
			values: {
				ActorName: e.actor?.name ?? "",
				AbilityName: e.name ?? ""
			}
		}).then((t) => {
			t && e.delete();
		});
	}, [e]), c = n ? r.generalAbilityCategories.get() : r.investigativeAbilityCategories.get(), u = c.includes(e.system.categoryId), [d, p] = (0, q.useState)(!u), [_, v] = (0, q.useState)(!u), y = (0, q.useCallback)((t) => {
		t.currentTarget.value === "" ? (p(!0), v(!0)) : (v(!1), e.system.setCategoryId(t.currentTarget.value));
	}, [e]), b = _ ? "" : e.system.categoryId;
	return /* @__PURE__ */ g(l, { children: [
		/* @__PURE__ */ m(z, {
			label: "Item Name",
			children: /* @__PURE__ */ m(f, {
				value: e.name ?? "",
				onChange: e.setName
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Category",
			children: /* @__PURE__ */ g("div", {
				css: {
					display: "flex",
					flexDirection: "row"
				},
				children: [/* @__PURE__ */ m("div", { children: /* @__PURE__ */ g("select", {
					value: b,
					onChange: y,
					css: {
						lineHeight: "inherit",
						height: "inherit"
					},
					children: [c.map((e) => /* @__PURE__ */ m("option", { children: e }, e)), /* @__PURE__ */ m("option", {
						value: "",
						children: "Custom"
					})]
				}) }), /* @__PURE__ */ m("div", {
					css: { flex: 1 },
					children: d && /* @__PURE__ */ m(f, {
						value: e.system.categoryId,
						onChange: e.system.setCategoryId
					})
				})]
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Min",
			children: /* @__PURE__ */ m(W, {
				max: e.system.max,
				value: e.system.min,
				onChange: e.system.setMin
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Max",
			children: /* @__PURE__ */ m(W, {
				min: e.system.min,
				value: e.system.max,
				onChange: e.system.setMax
			})
		}),
		Te() && j(e) && /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ m(z, {
			label: "Combat bonus",
			children: /* @__PURE__ */ m(W, {
				value: e.system.combatBonus,
				onChange: e.system.setCombatBonus
			})
		}), /* @__PURE__ */ m(z, {
			label: "Damage bonus",
			children: /* @__PURE__ */ m(W, {
				value: e.system.damageBonus,
				onChange: e.system.setDamageBonus
			})
		})] }),
		/* @__PURE__ */ m(z, {
			label: "Has Specialities?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.hasSpecialities,
				onChange: (t) => {
					e.system.setHasSpecialities(t);
				}
			})
		}),
		e.system.hasSpecialities && /* @__PURE__ */ m(z, {
			label: "Specialities Mode",
			children: /* @__PURE__ */ g("select", {
				value: e.system.specialitiesMode,
				onChange: (t) => {
					e.system.setSpecialitiesMode(t.currentTarget.value);
				},
				children: [/* @__PURE__ */ m("option", {
					value: "one",
					children: h("One per rank")
				}), /* @__PURE__ */ m("option", {
					value: "twoThreeFour",
					children: h("+2/+3/+4 per rank")
				})]
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Occupational?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.occupational,
				onChange: e.system.setOccupational
			})
		}),
		j(e) && /* @__PURE__ */ m(z, {
			label: "Can be investigative?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.canBeInvestigative,
				onChange: e.system.setCanBeInvestigative
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Show tracker?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.showTracker,
				onChange: e.system.setShowTracker
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Exclude from general refresh?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.excludeFromGeneralRefresh,
				onChange: e.system.setExcludeFromGeneralRefresh
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Include in 24h refresh?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.refreshesDaily,
				onChange: e.system.setRefreshesDaily
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Hide if zero-rated?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.hideIfZeroRated,
				onChange: e.system.setHideIfZeroRated
			})
		}),
		j(e) && /* @__PURE__ */ m(z, {
			label: "Goes first in combat?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.goesFirstInCombat,
				onChange: e.system.setGoesFirstInCombat
			})
		}),
		j(e) && /* @__PURE__ */ m(z, {
			label: "IsAPushPool",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.isPushPool,
				onChange: e.system.setIsPushPool
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "AllowPoolToExceedRating",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.allowPoolToExceedRating,
				onChange: e.system.setAllowPoolToExceedRating
			})
		}),
		j(e) && /* @__PURE__ */ g(z, {
			label: "Link to resource?",
			css: {
				display: "flex",
				flexDirection: "row",
				gap: "0.5em"
			},
			children: [/* @__PURE__ */ m(G, {
				checked: e.system.linkToResource,
				onChange: e.system.setLinkToResource
			}), e.system.linkToResource && /* @__PURE__ */ m(f, {
				value: e.system.resourceId ?? "",
				onChange: e.system.setResourceId
			})]
		}),
		S(e) && /* @__PURE__ */ m(z, {
			label: "IsQuickShock",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.isQuickShock,
				onChange: e.system.setIsQuickShock
			})
		}),
		Ee() && j(e) && /* @__PURE__ */ m(z, {
			label: "Refresh group",
			children: /* @__PURE__ */ g("select", {
				value: e.system.mwRefreshGroup,
				onChange: (t) => {
					e.system.setMwRefreshGroup(Number(t.currentTarget.value));
				},
				children: [
					/* @__PURE__ */ m("option", {
						value: "2",
						children: h("XHours", { x: "2" })
					}),
					/* @__PURE__ */ m("option", {
						value: "4",
						children: h("XHours", { x: "4" })
					}),
					/* @__PURE__ */ m("option", {
						value: "8",
						children: h("XHours", { x: "8" })
					})
				]
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Unlocks",
			children: /* @__PURE__ */ m(we, {})
		}),
		/* @__PURE__ */ m(z, {
			label: "Situational Modifiers",
			children: /* @__PURE__ */ m(xe, {})
		}),
		/* @__PURE__ */ m(z, {
			label: "Delete ability",
			children: /* @__PURE__ */ m(P, {
				onClick: s,
				css: { margin: 0 },
				children: /* @__PURE__ */ m(a, { children: "Delete" })
			})
		})
	] });
}, Oe = r.useBoost.get, ke = r.useMwStyleAbilities.get, Ae = () => {
	let { item: e } = F();
	E(e);
	let t = (0, q.useCallback)(() => {
		e.system.refreshPool();
	}, [e]), n = Oe(), o = r.combatAbilities.get().includes(e.name ?? ""), [s, c] = (0, q.useState)(v(e?.actor) && e?.actor?.system.initiativeAbility);
	(0, q.useEffect)(() => {
		let t = (t) => {
			t.id === e?.actor?.id && c(v(e?.actor) && e?.actor?.system.initiativeAbility);
		};
		return Hooks.on("updateActor", t), () => {
			Hooks.off("updateActor", t);
		};
	}, [e?.actor]);
	let u = e.actor, d = e.name ?? "", f = s === e.name, p = (0, q.useCallback)(() => {
		k(u), u?.update({ system: { initiativeAbility: d } });
	}, [u, d]), h = ke() ? void 0 : e.system.allowPoolToExceedRating ? e.system.max : e.system.rating, _ = S(e) && e.system.isQuickShock, y = (0, q.useCallback)((t) => {
		t ? e.system.setRatingAndRefreshPool(1) : e.system.setRatingAndRefreshPool(0);
	}, [e]);
	return /* @__PURE__ */ g(l, {
		css: {
			flex: 1,
			gridTemplateRows: `${_ ? "2em" : "2em 2em"} ${o ? "2em" : ""} [notes] 1fr`,
			rowGap: "0.3em"
		},
		children: [
			_ && /* @__PURE__ */ m(z, {
				label: "Enabled",
				children: /* @__PURE__ */ m(G, {
					checked: e.system.rating > 0,
					onChange: y
				})
			}),
			!_ && /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ m(z, {
				label: "Pool",
				children: /* @__PURE__ */ g("div", {
					css: {
						display: "flex",
						flexDirection: "row"
					},
					children: [/* @__PURE__ */ m(W, {
						min: e.system.min,
						max: h,
						value: e.system.pool,
						onChange: e.system.setPool,
						css: { flex: 1 }
					}), /* @__PURE__ */ m(P, {
						css: {
							flexBasis: "min-content",
							flex: 0,
							lineHeight: "inherit"
						},
						onClick: t,
						children: /* @__PURE__ */ m(a, { children: "Refresh" })
					})]
				})
			}), /* @__PURE__ */ g(z, {
				label: "Rating",
				children: [/* @__PURE__ */ m(W, {
					min: 0,
					value: e.system.rating,
					onChange: e.system.setRating
				}), /* @__PURE__ */ m(le, {
					css: {
						gridColumn: "1 / 4",
						justifyContent: "start",
						marginBottom: "0",
						marginTop: "0.2em"
					},
					ability: e
				})]
			})] }),
			o && /* @__PURE__ */ m(z, {
				label: "Initiative",
				children: f ? /* @__PURE__ */ g("span", {
					css: {
						display: "inline-block",
						paddingTop: "0.2em"
					},
					children: [/* @__PURE__ */ m(a, { children: "Active" }), " ✓"]
				}) : /* @__PURE__ */ m(N, {
					css: {
						display: "inline",
						marginLeft: "0.5em"
					},
					onClick: p,
					children: "Activate"
				})
			}),
			/* @__PURE__ */ m("div", {
				css: {
					flex: 1,
					position: "relative",
					gridColumn: "1/-1"
				},
				children: /* @__PURE__ */ m(B, {
					name: "notes",
					html: e.system.notes,
					onSave: e.system.setNotes,
					css: { gridRow: "notes" }
				})
			}),
			e.system.hasSpecialities && /* @__PURE__ */ m(K, {
				label: e.system.getSpecialities().length === 1 ? "Speciality" : "Specialities",
				children: /* @__PURE__ */ m("div", {
					css: {
						display: "flex",
						flexDirection: "row"
					},
					children: /* @__PURE__ */ m(se, { ability: e })
				})
			}),
			n && /* @__PURE__ */ m(z, {
				label: "Boost?",
				children: /* @__PURE__ */ m(G, {
					checked: e.system.boost,
					onChange: e.system.setBoost
				})
			})
		]
	});
};
Ae.displayName = "AbilityMainBits";
//#endregion
//#region src/components/abilities/AbilityMwExtraFields.tsx
var je = () => {
	let { item: e } = F();
	return O(e), /* @__PURE__ */ g(l, {
		css: { paddingTop: "0.5em" },
		children: [/* @__PURE__ */ m(z, {
			label: "Trumps",
			children: /* @__PURE__ */ m(f, {
				value: e.system.mwTrumps,
				onChange: e.system.setMwTrumps
			})
		}), /* @__PURE__ */ m(z, {
			label: "Trumped by",
			children: /* @__PURE__ */ m(f, {
				value: e.system.mwTrumpedBy,
				onChange: e.system.setMwTrumpedBy
			})
		})]
	});
}, Me = Array(8).fill(null).map((e, t) => {
	let n = t.toString();
	return {
		label: n,
		value: Number(n),
		enabled: !0
	};
}), Ne = () => {
	let { item: e } = F();
	E(e);
	let t = (0, q.useContext)(p), [n, r] = (0, q.useState)(0), i = (0, q.useCallback)(() => {
		e.system.testAbility(n), r(0);
	}, [e, n]), o = (0, q.useCallback)(() => {
		e.system.spendAbility(n), r(0);
	}, [e, n]), s = Me.map((t) => (E(e), {
		...t,
		enabled: t.value === 0 || t.value <= e.system.pool
	})), c = j(e);
	return /* @__PURE__ */ g(l, {
		className: t.panelClass,
		css: {
			padding: "0.5em",
			marginBottom: "0.5em",
			...t.panelStyleSecondary
		},
		children: [/* @__PURE__ */ m(z, {
			label: "Spend",
			children: /* @__PURE__ */ m(V, {
				onChange: r,
				selected: n,
				options: s
			})
		}), /* @__PURE__ */ m(K, { children: /* @__PURE__ */ g("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ m(P, {
				css: { flex: 1 },
				disabled: n === 0,
				onClick: o,
				children: /* @__PURE__ */ m(a, { children: c ? "Simple Spend" : "Spend" })
			}), c && /* @__PURE__ */ g(P, {
				css: { flex: 1 },
				onClick: i,
				children: [
					/* @__PURE__ */ m(a, { children: "Test" }),
					" ",
					/* @__PURE__ */ m("i", { className: "fa fa-dice" })
				]
			})]
		}) })]
	});
}, Pe = () => {
	let { item: e } = F();
	O(e);
	let t = (0, q.useContext)(p), [n, r] = (0, q.useState)(0), [i, o] = (0, q.useState)(0), s = (0, q.useCallback)(() => {
		e.system.mwTestAbility(n, i);
	}, [
		e,
		i,
		n
	]), c = (0, q.useCallback)(() => {
		e.system.mWWallop();
	}, [e]), u = (0, q.useCallback)(() => {
		e.system.mWNegateIllustrious();
	}, [e]);
	return /* @__PURE__ */ g("div", {
		css: {
			border: `1px solid ${t.colors.controlBorder}`,
			padding: "0.5em",
			marginBottom: "1em",
			background: t.colors.backgroundSecondary,
			display: "flex",
			flexDirection: "column",
			gap: "0.5em"
		},
		children: [/* @__PURE__ */ g(l, { children: [/* @__PURE__ */ m(z, {
			label: "Difficulty",
			children: /* @__PURE__ */ g("select", {
				css: {
					display: "block",
					width: "100%"
				},
				value: n,
				onChange: (e) => {
					let t = e.currentTarget.value;
					r(t === "easy" ? "easy" : Number(t));
				},
				children: [
					/* @__PURE__ */ m("option", {
						value: "easy",
						children: "Easy"
					}),
					/* @__PURE__ */ m("option", {
						value: 0,
						children: "Normal"
					}),
					/* @__PURE__ */ m("option", {
						value: -1,
						children: "Hard (-1)"
					}),
					/* @__PURE__ */ m("option", {
						value: -2,
						children: "Very Hard (-2)"
					})
				]
			})
		}), /* @__PURE__ */ m(z, {
			label: "Boon/levy",
			children: /* @__PURE__ */ m("div", {
				css: { position: "relative" },
				children: /* @__PURE__ */ g("select", {
					css: {
						display: "block",
						width: "100%"
					},
					value: i,
					onChange: (e) => {
						let t = e.currentTarget.value;
						o(Number(t));
					},
					children: [
						/* @__PURE__ */ m("option", {
							value: 2,
							children: "Boon +2"
						}),
						/* @__PURE__ */ m("option", {
							value: 1,
							children: "Boon +1"
						}),
						/* @__PURE__ */ m("option", {
							value: 0,
							children: "0"
						}),
						/* @__PURE__ */ m("option", {
							value: -1,
							children: "Levy (-1)"
						}),
						/* @__PURE__ */ m("option", {
							value: -2,
							children: "Levy (-2)"
						})
					]
				})
			})
		})] }), /* @__PURE__ */ g("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [
				/* @__PURE__ */ m(P, {
					disabled: e.system.pool < 3,
					css: { flex: "1" },
					onClick: u,
					children: /* @__PURE__ */ m(a, { children: "Negate" })
				}),
				/* @__PURE__ */ m(P, {
					disabled: e.system.pool < 5,
					css: { flex: "1" },
					onClick: c,
					children: /* @__PURE__ */ m(a, { children: "Wallop" })
				}),
				/* @__PURE__ */ m(P, {
					css: { flex: "2" },
					onClick: s,
					children: /* @__PURE__ */ m(a, { children: "Test" })
				})
			]
		})]
	});
}, Fe = () => {
	let { item: e } = F(), t = (0, q.useContext)(p);
	E(e);
	let n = (0, q.useCallback)(() => {
		e.system.push();
	}, [e]);
	return /* @__PURE__ */ m(l, {
		className: t.panelClass,
		css: {
			padding: "0.5em",
			marginBottom: "0.5em",
			...t.panelStyleSecondary
		},
		children: /* @__PURE__ */ m(K, { children: /* @__PURE__ */ m("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: /* @__PURE__ */ m(P, {
				css: { flex: 1 },
				onClick: n,
				children: /* @__PURE__ */ m(a, { children: "Push" })
			})
		}) })
	});
};
Fe.displayName = "PushPoolButton";
//#endregion
//#region src/components/abilities/AbilitySheet.tsx
var Ie = r.useMwStyleAbilities.get;
function Le(e) {
	return e.isOwned && Ie() ? /* @__PURE__ */ m(Pe, {}) : j(e) && e.system.isPushPool || S(e) && e.system.isQuickShock ? /* @__PURE__ */ m(Fe, {}) : /* @__PURE__ */ m(Ne, {});
}
var Re = () => {
	let { item: e } = F();
	return /* @__PURE__ */ g(X, {
		supertitle: /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ m(a, { children: j(e) ? "General ability" : "Investigative ability" }), e.actor && /* @__PURE__ */ g("span", { children: [
			" (",
			e.actor.name,
			")"
		] })] }),
		children: [/* @__PURE__ */ m(Y, {
			mode: J.Config,
			children: /* @__PURE__ */ m(De, {})
		}), /* @__PURE__ */ m(Y, {
			mode: J.Main,
			children: /* @__PURE__ */ g(i, { children: [
				Le(e),
				/* @__PURE__ */ m(Ae, {}),
				Ie() && /* @__PURE__ */ m(je, {})
			] })
		})]
	});
}, ze = R("edit"), Be = R("categoryEdit"), Ve = ({ category: e, card: t, index: n }) => {
	let r = t.system.cardCategoryMemberships.find((t) => t.categoryId === e.id), a = (0, q.useCallback)(async (n) => {
		n ? await t.system.addCardCategoryMembership(e.id) : await t.system.removeCardCategoryMembership(e.id);
	}, [t, e.id]), o = (0, q.useCallback)(async (n) => {
		await t.system.setCardCategoryMembershipNonlethal(e.id, n);
	}, [t, e.id]), s = (0, q.useCallback)(async (n) => {
		await t.system.setCardCategoryMembershipWorth(e.id, n);
	}, [t, e.id]);
	return /* @__PURE__ */ g(i, { children: [
		/* @__PURE__ */ g(K, { children: [n !== 0 && /* @__PURE__ */ m("hr", { css: { margin: "1em 0em" } }), /* @__PURE__ */ m("h2", { children: e.singleName })] }, e.id),
		/* @__PURE__ */ m(z, {
			label: "Active",
			children: /* @__PURE__ */ m(G, {
				checked: !!r,
				onChange: a
			})
		}),
		r && e.thresholdType !== "none" && /* @__PURE__ */ m(z, {
			label: "Worth",
			children: /* @__PURE__ */ m(W, {
				value: r.worth,
				onChange: s
			})
		}),
		r && e.thresholdType === "limit" && /* @__PURE__ */ m(z, {
			label: "Nonlethal",
			children: /* @__PURE__ */ m(G, {
				checked: r.nonlethal,
				onChange: o
			})
		})
	] });
};
Ve.displayName = "CategoryMembershipRow";
//#endregion
//#region src/components/cards/EditCategoryMemberships.tsx
var He = ({ card: e }) => {
	let t = r.cardCategories.get(), n = (0, q.useCallback)(async (t) => {
		let n = t.currentTarget.value === "" ? null : t.currentTarget.value;
		await e.system.setCardStyleKeyCategoryId(n);
	}, [e]);
	return /* @__PURE__ */ m(i, { children: /* @__PURE__ */ g(l, { children: [/* @__PURE__ */ m(z, {
		label: "Appearance",
		children: /* @__PURE__ */ g("select", {
			value: e.system.styleKeyCategoryId ?? "",
			onChange: n,
			children: [/* @__PURE__ */ m("option", {
				value: "",
				children: h("Uncategorized")
			}), t.filter((t) => e.system.cardCategoryMemberships.some((e) => e.categoryId === t.id)).map((e) => /* @__PURE__ */ m("option", {
				value: e.id,
				children: e.singleName
			}, e.id))]
		})
	}), t.map((t, n) => /* @__PURE__ */ m(Ve, {
		card: e,
		category: t,
		index: n
	}, t.id))] }) });
};
He.displayName = "EditCategoryMemberships";
//#endregion
//#region src/components/cards/CardMain.tsx
var Ue = () => {
	let { item: e } = F();
	A(e);
	let t = pe(e.system.cardCategoryMemberships);
	return /* @__PURE__ */ g(i, { children: [
		/* @__PURE__ */ g(l, { children: [
			/* @__PURE__ */ m(z, {
				label: "Categories",
				children: /* @__PURE__ */ g(L, {
					to: Be(),
					children: [t, "  "]
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Item Name",
				children: /* @__PURE__ */ m(f, {
					value: e.name ?? "",
					onChange: e.setName
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Supertitle",
				children: /* @__PURE__ */ m(f, {
					value: e.system.supertitle,
					onChange: e.system.setSupertitle
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Subtitle",
				children: /* @__PURE__ */ m(f, {
					value: e.system.subtitle,
					onChange: e.system.setSubtitle
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Continuity",
				children: /* @__PURE__ */ m(G, {
					checked: e.system.continuity,
					onChange: e.system.setContinuity
				})
			})
		] }),
		/* @__PURE__ */ m("div", {
			className: "notes-container",
			css: {
				flex: 1,
				position: "relative",
				marginTop: "0.5em"
			},
			children: /* @__PURE__ */ m(me, {
				defaultTab: "description",
				tabs: [{
					id: "description",
					label: "Description",
					content: /* @__PURE__ */ m(l, {
						css: {
							...c,
							gridTemplateRows: "1fr",
							margin: "0.5em"
						},
						children: /* @__PURE__ */ m(B, {
							name: "description",
							html: e.system.description,
							className: "",
							onSave: e.system.setDescription
						})
					})
				}, {
					id: "effects",
					label: "Effects",
					content: /* @__PURE__ */ m(l, {
						css: {
							...c,
							gridTemplateRows: "1fr",
							margin: "0.5em"
						},
						children: /* @__PURE__ */ m(B, {
							name: "effects",
							html: e.system.effects,
							className: "",
							onSave: e.system.setEffects
						})
					})
				}]
			})
		}),
		/* @__PURE__ */ m(ie, {
			direction: Be,
			children: /* @__PURE__ */ m(He, { card: e })
		})
	] });
}, We = () => {
	let { item: e } = F();
	A(e);
	let t = (0, q.useCallback)(async () => {
		await o({
			message: e.actor ? "DiscardActorNamesCardNameCard" : "DeleteCardName",
			confirmText: e.actor ? "Discard" : "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			resolveFalseOnCancel: !0,
			values: {
				ActorName: e.actor?.name ?? "",
				CardName: e.name ?? ""
			}
		}) && e.delete();
	}, [e]), n = (0, q.useCallback)(async () => {
		await e.update({ system: { active: !1 } });
	}, [e]), r = (0, q.useCallback)(async () => {
		await e.update({ system: { active: !0 } });
	}, [e]);
	return /* @__PURE__ */ g(re, { children: [/* @__PURE__ */ g("div", {
		css: {
			...c,
			margin: "0.5em",
			display: "flex",
			flexDirection: "column"
		},
		children: [/* @__PURE__ */ g("div", {
			css: {
				display: "flex",
				flexDirection: "row",
				paddingBottom: "0.5em"
			},
			children: [
				/* @__PURE__ */ m(N, {
					onClick: t,
					children: /* @__PURE__ */ m(a, { children: e.actor ? "Discard" : "Delete" })
				}),
				" ",
				e.system.active ? /* @__PURE__ */ m(N, {
					onClick: n,
					children: /* @__PURE__ */ m(a, { children: "Deactivate" })
				}) : /* @__PURE__ */ m(N, {
					onClick: r,
					children: /* @__PURE__ */ m(a, { children: "Activate" })
				}),
				/* @__PURE__ */ m("div", { css: { flex: 1 } }),
				/* @__PURE__ */ m(L, {
					to: ze(),
					children: "Edit"
				})
			]
		}), /* @__PURE__ */ m("div", {
			css: {
				flex: 1,
				opacity: e.system.active ? 1 : .5,
				transition: "opacity 200ms ease-in-out",
				display: "flex",
				flexDirection: "column",
				overflow: "auto",
				containerType: "inline-size"
			},
			children: /* @__PURE__ */ m(fe, {
				card: e,
				viewMode: "full"
			})
		})]
	}), /* @__PURE__ */ m(ie, {
		direction: ze,
		css: {
			display: "flex",
			flexDirection: "column"
		},
		children: /* @__PURE__ */ m("div", {
			className: "fooey",
			css: {
				height: "100%",
				display: "flex",
				flexDirection: "column"
			},
			children: /* @__PURE__ */ m(Ue, {})
		})
	})] });
}, Z = 3, Ge = ({ fieldId: e, index: t, fieldValue: n, onDelete: r }) => /* @__PURE__ */ g(q.Fragment, { children: [
	/* @__PURE__ */ m("b", {
		css: {
			gridColumn: "1",
			gridRow: t * Z + 1
		},
		children: "Id"
	}),
	/* @__PURE__ */ m("code", {
		css: {
			gridColumn: 2,
			gridRow: t * Z + 1,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		},
		children: e
	}),
	/* @__PURE__ */ m("a", {
		title: "Copy field ID to clipboard",
		css: {
			gridColumn: 3,
			gridRow: t * Z + 1
		},
		onClick: async () => {
			await navigator.clipboard.writeText(e), ui.notifications?.info(`Copied field ID "${e}" to clipboard`);
		},
		children: /* @__PURE__ */ m("i", { className: "fa fa-copy" })
	}),
	/* @__PURE__ */ m("b", {
		css: {
			gridColumn: "1",
			gridRow: t * Z + 2
		},
		children: "Value"
	}),
	/* @__PURE__ */ m("code", {
		css: {
			gridColumn: 2,
			gridRow: t * Z + 2,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		},
		children: n
	}),
	/* @__PURE__ */ m("a", {
		title: "Copy field value to clipboard",
		css: {
			gridColumn: 3,
			gridRow: t * Z + 2
		},
		onClick: async () => {
			await navigator.clipboard.writeText(String(n)), ui.notifications?.info("Copied value to clipboard");
		},
		children: /* @__PURE__ */ m("i", { className: "fa fa-copy" })
	}),
	/* @__PURE__ */ m(P, {
		css: {
			gridColumn: 4,
			gridRow: `${t * Z + 1} / ${t * Z + 3}`
		},
		onClick: () => {
			r(e);
		},
		children: /* @__PURE__ */ m(a, { children: "Delete" })
	}),
	/* @__PURE__ */ m("hr", { css: {
		gridColumn: "1 / -1",
		gridRow: t * Z + 3
	} })
] }, e);
Ge.displayName = "OrphanedField";
//#endregion
//#region src/components/equipment/EquipmentConfig.tsx
var Ke = () => {
	let { item: e } = F();
	H(e);
	let n = (0, q.useCallback)(async () => {
		t(game), await o({
			message: e.actor ? "DeleteActorNamesEquipmentName" : "DeleteEquipmentName",
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			resolveFalseOnCancel: !0,
			values: {
				ActorName: e.actor?.name ?? "",
				EquipmentName: e.name ?? ""
			}
		}) && await e.delete();
	}, [e]), s = e.system.fields, c = Object.keys(r.equipmentCategories.get()[e.system.categoryId]?.fields ?? {}), u = Object.keys(s).filter((e) => !c.includes(e));
	return /* @__PURE__ */ g(l, { children: [
		/* @__PURE__ */ m(z, {
			label: "Category Id",
			children: e.system.categoryId ? /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ m("code", {
				css: {
					display: "inline-block",
					margin: "0.3em 1em 0.3em 0"
				},
				children: e.system.categoryId
			}), /* @__PURE__ */ m("a", {
				css: { gridArea: "cog" },
				onClick: async () => {
					await navigator.clipboard.writeText(e.system.categoryId), ui.notifications?.info(`Copied category ID "${e.system.categoryId}" to clipboard`);
				},
				children: /* @__PURE__ */ m("i", { className: "fa fa-copy" })
			})] }) : /* @__PURE__ */ m("i", { children: "None set" })
		}),
		/* @__PURE__ */ g(K, {
			label: "Orphaned fields",
			css: {
				display: "grid",
				gridTemplateColumns: "auto auto auto auto",
				gridAutoRows: "auto",
				maxWidth: "100%",
				gap: "0.2em 2em"
			},
			children: [u.length === 0 && /* @__PURE__ */ m("i", {
				css: { margin: "1em" },
				children: /* @__PURE__ */ m(a, { children: "No Orphaned Fields" })
			}), u.map((t, n) => /* @__PURE__ */ m(Ge, {
				fieldId: t,
				fieldValue: s[t],
				index: n,
				onDelete: (t) => {
					e.system.deleteField(t);
				}
			}, n))]
		}),
		/* @__PURE__ */ m(K, {
			label: "Delete",
			children: /* @__PURE__ */ m(P, {
				onClick: n,
				children: /* @__PURE__ */ m(a, { children: "Delete Item" })
			})
		})
	] });
};
Ke.displayName = "EquipmentConfig";
//#endregion
//#region src/components/equipment/EquipmentField.tsx
var qe = ({ fieldId: e, fieldMetadata: t, value: n, equipment: r }) => {
	let i = (0, q.useCallback)((t) => {
		r.system.setField(e, t);
	}, [r, e]);
	return /* @__PURE__ */ g(z, {
		noTranslate: !0,
		label: t.name,
		labelTitle: t.name,
		children: [
			t.type === "string" && /* @__PURE__ */ m(f, {
				value: n,
				onChange: i
			}),
			t.type === "number" && /* @__PURE__ */ m(W, {
				value: n,
				onChange: i
			}),
			t.type === "checkbox" && /* @__PURE__ */ m(G, {
				checked: n,
				onChange: i
			})
		]
	}, e);
};
qe.displayName = "EquipmentField";
//#endregion
//#region src/components/equipment/EquipmentMain.tsx
var Je = ({ name: e, onChangeName: t }) => {
	let { item: n } = F();
	H(n);
	let i = r.equipmentCategories.get(), a = i[n.system.categoryId], o = a !== void 0, s = (0, q.useCallback)((e) => {
		n.system.setCategoryId(e.currentTarget.value);
	}, [n]), d = o ? n.system.categoryId : "";
	return /* @__PURE__ */ g(l, {
		css: {
			gridTemplateRows: `repeat(${Object.keys(a?.fields ?? {}).length + 2}, auto) 1fr`,
			...c
		},
		children: [
			/* @__PURE__ */ m(z, {
				label: "Item Name",
				children: /* @__PURE__ */ m(u, {
					value: e,
					onChange: t
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Category",
				children: /* @__PURE__ */ m("div", {
					css: {
						display: "flex",
						flexDirection: "row"
					},
					children: /* @__PURE__ */ m("div", { children: /* @__PURE__ */ g("select", {
						value: d,
						onChange: s,
						css: {
							lineHeight: "inherit",
							height: "inherit"
						},
						children: [Object.entries(i).map(([e, t]) => /* @__PURE__ */ m("option", {
							value: e,
							children: t.name
						}, e)), /* @__PURE__ */ m("option", {
							value: "",
							children: h("Uncategorized")
						})]
					}) })
				})
			}),
			Object.entries(a?.fields ?? {}).map(([e, t]) => /* @__PURE__ */ m(qe, {
				fieldId: e,
				fieldMetadata: t,
				value: n.system.fields?.[e],
				equipment: n
			}, e)),
			/* @__PURE__ */ m("div", {
				css: {
					flex: 1,
					position: "relative",
					gridColumn: "1/-1"
				},
				children: /* @__PURE__ */ m(B, {
					name: "notes",
					html: n.system.notes,
					onSave: n.system.setNotes
				})
			})
		]
	});
};
Je.displayName = "EquipmentMain";
//#endregion
//#region src/components/equipment/EquipmentSheet.tsx
var Ye = () => {
	let { item: e } = F();
	H(e);
	let t = d(e.name || "", e.setName);
	return /* @__PURE__ */ g(X, {
		supertitle: /* @__PURE__ */ m(a, { children: "Equipment" }),
		children: [/* @__PURE__ */ m(Y, {
			mode: J.Main,
			children: /* @__PURE__ */ m(Je, {
				name: t.display,
				onChangeName: t.onChange
			})
		}), /* @__PURE__ */ m(Y, {
			mode: J.Config,
			children: /* @__PURE__ */ m(Ke, {})
		})]
	});
}, Xe = () => {
	let { item: e } = F();
	b(e);
	let n = d(e.name || "", e.setName), r = d(e.name || "", e.setName), i = (0, q.useCallback)(async () => {
		t(game), await o({
			message: e.actor ? "DeleteActorNamesEquipmentName" : "DeleteEquipmentName",
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			resolveFalseOnCancel: !0,
			values: {
				ActorName: e.actor?.name ?? "",
				EquipmentName: e.name ?? ""
			}
		}) && await e.delete();
	}, [e]), s = (0, q.useCallback)((t) => {
		e.system.setMwType(t.currentTarget.value);
	}, [e]);
	return /* @__PURE__ */ g("div", {
		css: {
			...c,
			padding: "1em",
			display: "grid",
			gridTemplateColumns: "auto 1fr auto",
			gridTemplateRows: "auto auto 1fr",
			gridTemplateAreas: "\"image  slug      trash\" \"image  headline  headline\" \"body   body      body\" "
		},
		children: [
			/* @__PURE__ */ m("div", {
				css: { gridArea: "slug" },
				children: /* @__PURE__ */ m(a, { children: "MWItem" })
			}),
			/* @__PURE__ */ m("h1", {
				css: { gridArea: "headline" },
				contentEditable: !0,
				onInput: n.onInput,
				onFocus: n.onFocus,
				onBlur: n.onBlur,
				ref: n.contentEditableRef
			}),
			/* @__PURE__ */ m(D, { css: {
				gridArea: "image",
				transform: "rotateZ(-2deg)",
				width: "4em",
				height: "4em",
				margin: "0 1em 0.5em 0"
			} }),
			/* @__PURE__ */ m("a", {
				css: { gridArea: "trash" },
				onClick: () => {
					i();
				},
				children: /* @__PURE__ */ m("i", { className: "fa fa-trash" })
			}),
			/* @__PURE__ */ g(l, {
				css: {
					gridArea: "body",
					gridTemplateRows: "auto auto 1fr",
					gridAutoRows: "auto"
				},
				children: [
					/* @__PURE__ */ m(z, {
						label: "Item Name",
						children: /* @__PURE__ */ m(u, {
							value: r.display,
							onChange: r.onChange,
							onFocus: r.onFocus,
							onBlur: r.onBlur
						})
					}),
					/* @__PURE__ */ m(z, {
						label: "MwType",
						children: /* @__PURE__ */ g("select", {
							value: e.system.mwType,
							onChange: s,
							css: { width: "100%" },
							children: [
								/* @__PURE__ */ m("option", {
									value: "tweak",
									children: "Tweak"
								}),
								/* @__PURE__ */ m("option", {
									value: "spell",
									children: "Spell"
								}),
								/* @__PURE__ */ m("option", {
									value: "cantrap",
									children: "Cantrap"
								}),
								/* @__PURE__ */ m("option", {
									value: "enchantedItem",
									children: "Enchanted item"
								}),
								/* @__PURE__ */ m("option", {
									value: "meleeWeapon",
									children: "Melee weapon"
								}),
								/* @__PURE__ */ m("option", {
									value: "missileWeapon",
									children: "Missile weapon"
								}),
								/* @__PURE__ */ m("option", {
									value: "manse",
									children: "Manse"
								}),
								/* @__PURE__ */ m("option", {
									value: "sandestin",
									children: "Sandestin"
								}),
								/* @__PURE__ */ m("option", {
									value: "retainer",
									children: "Retainer"
								})
							]
						})
					}),
					/* @__PURE__ */ m("div", {
						css: {
							flex: 1,
							position: "relative",
							gridColumn: "1/-1"
						},
						children: /* @__PURE__ */ m(B, {
							name: "notes",
							html: e.system.notes,
							onSave: e.system.setNotes,
							css: {
								height: "100%",
								"&&": { resize: "none" }
							}
						})
					}),
					e.system.mwType === "enchantedItem" && /* @__PURE__ */ m(z, {
						label: "Charges",
						children: /* @__PURE__ */ m(W, {
							onChange: e.system.setCharges,
							value: e.system.charges,
							min: 0
						})
					}),
					e.system.mwType === "missileWeapon" && /* @__PURE__ */ g(K, {
						label: "Ranges",
						children: [/* @__PURE__ */ g("div", {
							css: {
								display: "flex",
								flexDirection: "row"
							},
							children: [/* @__PURE__ */ m(K, {
								label: "Short",
								css: { flex: 1 },
								children: /* @__PURE__ */ m(W, {
									onChange: e.system.setRange(0),
									value: e.system.getRange(0),
									min: 0
								})
							}), /* @__PURE__ */ m(K, {
								label: "Medium",
								css: { flex: 1 },
								children: /* @__PURE__ */ m(W, {
									onChange: e.system.setRange(1),
									value: e.system.getRange(1),
									min: 0
								})
							})]
						}), /* @__PURE__ */ g("div", {
							css: {
								display: "flex",
								flexDirection: "row"
							},
							children: [/* @__PURE__ */ m(K, {
								label: "Long",
								css: { flex: 1 },
								children: /* @__PURE__ */ m(W, {
									onChange: e.system.setRange(2),
									value: e.system.getRange(2),
									min: 0
								})
							}), /* @__PURE__ */ m(K, {
								label: "Extreme",
								css: { flex: 1 },
								children: /* @__PURE__ */ m(W, {
									onChange: e.system.setRange(3),
									value: e.system.getRange(3),
									min: 0
								})
							})]
						})]
					})
				]
			})
		]
	});
}, Q = ({ label: e, damage: t, enabled: n, setDamage: r, setEnabled: i }) => /* @__PURE__ */ m(z, {
	label: e,
	children: /* @__PURE__ */ g("div", {
		css: {
			display: "flex",
			gap: "0.5em",
			flexDirection: "row"
		},
		children: [/* @__PURE__ */ m(G, {
			checked: n,
			onChange: i
		}), /* @__PURE__ */ m(W, {
			css: { flex: 1 },
			disabled: !n,
			value: t,
			onChange: r
		})]
	})
}), Ze = () => {
	t(game);
	let { item: e } = F(), n = e.actor;
	n && k(n);
	let s = n?.system.getGeneralAbilityNames();
	U(e);
	let c = d(e.name || "", e.setName), f = (0, q.useCallback)(async () => {
		t(game), await o({
			message: e.actor ? "DeleteActorNamesEquipmentName" : "DeleteEquipmentName",
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			values: {
				ActorName: e.actor?.name ?? "",
				EquipmentName: e.name ?? ""
			},
			resolveFalseOnCancel: !0
		}) && await e.delete();
	}, [e]), p = r.combatAbilities.get();
	return /* @__PURE__ */ g(l, { children: [
		/* @__PURE__ */ m(z, {
			label: "Item Name",
			children: /* @__PURE__ */ m(u, {
				value: c.display,
				onChange: c.onChange
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Cost",
			children: /* @__PURE__ */ m(W, {
				min: 0,
				value: e.system.cost,
				onChange: e.system.setCost
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Initiative",
			children: /* @__PURE__ */ m(ae, {
				value: e.system.ability,
				onChange: e.system.setAbility,
				pickerValues: p,
				validValues: s,
				css: { marginBottom: "0.3em" }
			})
		}),
		/* @__PURE__ */ m(z, {
			label: "Base Damage",
			children: /* @__PURE__ */ m(W, {
				value: e.system.damage,
				onChange: e.system.setDamage
			})
		}),
		/* @__PURE__ */ m(Q, {
			label: "Point Blank",
			damage: e.system.pointBlankDamage ?? 0,
			enabled: e.system.isPointBlank,
			setDamage: e.system.setPointBlankDamage,
			setEnabled: e.system.setIsPointBlank
		}),
		/* @__PURE__ */ m(Q, {
			label: "Close range",
			damage: e.system.closeRangeDamage ?? 0,
			enabled: e.system.isCloseRange,
			setDamage: e.system.setCloseRangeDamage,
			setEnabled: e.system.setIsCloseRange
		}),
		/* @__PURE__ */ m(Q, {
			label: "Near range",
			damage: e.system.nearRangeDamage ?? 0,
			enabled: e.system.isNearRange,
			setDamage: e.system.setNearRangeDamage,
			setEnabled: e.system.setIsNearRange
		}),
		/* @__PURE__ */ m(Q, {
			label: "Long range",
			damage: e.system.longRangeDamage ?? 0,
			enabled: e.system.isLongRange,
			setDamage: e.system.setLongRangeDamage,
			setEnabled: e.system.setIsLongRange
		}),
		/* @__PURE__ */ m(z, {
			label: "Uses ammo?",
			children: /* @__PURE__ */ m(G, {
				checked: e.system.usesAmmo,
				onChange: e.system.setUsesAmmo
			})
		}),
		e.system.usesAmmo && /* @__PURE__ */ g(i, { children: [/* @__PURE__ */ m(z, {
			label: "Ammo capacity",
			children: /* @__PURE__ */ m(W, {
				min: 0,
				value: e.system.ammo.max,
				onChange: e.system.setAmmoMax
			})
		}), /* @__PURE__ */ m(z, {
			label: "Ammo per attack",
			children: /* @__PURE__ */ m(W, {
				min: 0,
				value: e.system.ammoPerShot,
				onChange: e.system.setAmmoPerShot
			})
		})] }),
		/* @__PURE__ */ m(z, {
			label: "Delete",
			children: /* @__PURE__ */ m(P, {
				onClick: f,
				children: /* @__PURE__ */ m(a, { children: "Delete" })
			})
		})
	] });
}, Qe = Array.from({ length: 8 }).fill(null).map((e, t) => {
	let n = t.toString();
	return {
		label: n,
		value: Number(n),
		enabled: !0
	};
}), $e = () => {
	let { item: e } = F();
	U(e);
	let [t, n] = (0, q.useState)(0), [r, o] = (0, q.useState)(0), s = (0, q.useContext)(p), u = e.system.ability, d = e.actor?.items.find((e) => e.type === "generalAbility" && e.name === u), f = d && w(d) ? d.system.pool : 0, _ = Qe.map((e) => ({
		...e,
		enabled: e.value <= f + r
	})), v = (0, q.useMemo)(() => oe({
		spend: t,
		bonusPool: r,
		setSpend: n,
		setBonusPool: o,
		ability: d,
		weapon: e
	}), [
		d,
		r,
		t,
		e
	]), y = (0, q.useCallback)(() => {
		v({
			rangeName: "point blank",
			rangeDamage: e.system.pointBlankDamage
		});
	}, [v, e]), b = (0, q.useCallback)(() => {
		v({
			rangeName: "close range",
			rangeDamage: e.system.closeRangeDamage
		});
	}, [v, e]), x = (0, q.useCallback)(() => {
		v({
			rangeName: "near range",
			rangeDamage: e.system.nearRangeDamage
		});
	}, [v, e]), S = (0, q.useCallback)(() => {
		v({
			rangeName: "long range",
			rangeDamage: e.system.longRangeDamage
		});
	}, [v, e]), C = e.actor, [E, D] = (0, q.useState)(C && T(C) ? C.system.initiativeAbility : "");
	(0, q.useEffect)(() => {
		let e = (e) => {
			e.id === C?.id && D(C && T(C) ? C.system.initiativeAbility : "");
		};
		return Hooks.on("updateActor", e), () => {
			Hooks.off("updateActor", e);
		};
	}, [C]);
	let O = E === u, k = (0, q.useCallback)(() => {
		e.actor?.update({ system: { initiativeAbility: u } });
	}, [u, e.actor]), A = e.system.usesAmmo && e.system.ammo.value <= 0, j = e.sheet;
	return I(j), /* @__PURE__ */ g("div", {
		css: {
			...c,
			display: "flex",
			flexDirection: "column"
		},
		children: [/* @__PURE__ */ g(l, {
			className: s.panelClass,
			css: {
				padding: "0.5em",
				marginBottom: "0.5em",
				...s.panelStyleSecondary
			},
			children: [/* @__PURE__ */ m(z, {
				label: "Spend",
				children: /* @__PURE__ */ m(V, {
					onChange: n,
					selected: t,
					options: _
				})
			}), /* @__PURE__ */ m(K, { children: /* @__PURE__ */ g("div", {
				css: {
					display: "flex",
					flexDirection: "row",
					position: "relative"
				},
				children: [
					A && /* @__PURE__ */ m("div", {
						css: {
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "1.2em",
							backgroundColor: s.colors.accentContrast,
							color: s.colors.accent,
							padding: "0 1em"
						},
						children: /* @__PURE__ */ m(a, { children: "Out of ammo" })
					}),
					/* @__PURE__ */ m(P, {
						css: {
							lineHeight: 1,
							flex: 1
						},
						disabled: A || !e.system.isPointBlank,
						onClick: y,
						children: /* @__PURE__ */ m(a, { children: "Point Blank" })
					}),
					/* @__PURE__ */ m(P, {
						css: {
							lineHeight: 1,
							flex: 1
						},
						disabled: A || !e.system.isCloseRange,
						onClick: b,
						children: /* @__PURE__ */ m(a, { children: "Close Range" })
					}),
					/* @__PURE__ */ m(P, {
						css: {
							lineHeight: 1,
							flex: 1
						},
						disabled: A || !e.system.isNearRange,
						onClick: x,
						children: /* @__PURE__ */ m(a, { children: "Near Range" })
					}),
					/* @__PURE__ */ m(P, {
						css: {
							lineHeight: 1,
							flex: 1
						},
						disabled: A || !e.system.isLongRange,
						onClick: S,
						children: /* @__PURE__ */ m(a, { children: "Long Range" })
					})
				]
			}) })]
		}), /* @__PURE__ */ g(l, {
			css: {
				flex: 1,
				rowGap: "0.3em",
				gridTemplateRows: `auto ${e.system.usesAmmo ? "auto " : ""} ${e.actor ? "auto " : ""} 1fr`
			},
			children: [
				/* @__PURE__ */ m(z, {
					label: "Bonus pool",
					children: /* @__PURE__ */ m(W, {
						onChange: o,
						value: r
					})
				}),
				e.system.usesAmmo && /* @__PURE__ */ m(z, {
					label: `${h("Ammo")}/${e.system.ammo.max}:`,
					noTranslate: !0,
					children: /* @__PURE__ */ g("div", {
						css: {
							display: "flex",
							flexDirection: "row"
						},
						children: [/* @__PURE__ */ m(W, {
							css: { flex: 1 },
							min: 0,
							max: e.system.ammo.max,
							value: e.system.ammo.value,
							onChange: e.system.setAmmo
						}), /* @__PURE__ */ m(P, {
							css: {
								flexBasis: "min-content",
								flex: 0,
								lineHeight: "inherit"
							},
							onClick: e.system.reload,
							children: /* @__PURE__ */ m(a, { children: "Reload" })
						})]
					})
				}),
				e.actor && /* @__PURE__ */ g(z, {
					label: "Initiative",
					children: [/* @__PURE__ */ g("span", {
						css: {
							display: "inline-block",
							paddingTop: "0.3em"
						},
						children: [
							d && /* @__PURE__ */ g("a", {
								onClick: () => j.render({ force: !0 }),
								children: [d?.name, " "]
							}),
							d === void 0 && /* @__PURE__ */ g(i, { children: [
								u,
								/* @__PURE__ */ m("span", {
									css: {
										background: s.colors.danger,
										color: s.colors.accentContrast,
										display: "inline-block",
										padding: "0 0.2em",
										margin: "0 0.2em",
										borderRadius: "0.2em"
									},
									children: /* @__PURE__ */ m(a, { children: "NotFound!" })
								}),
								" "
							] }),
							O && /* @__PURE__ */ g(i, { children: [
								"(",
								/* @__PURE__ */ m(a, { children: "Active" }),
								" ✓)",
								" "
							] })
						]
					}), O || /* @__PURE__ */ m(N, {
						css: {
							display: "inline",
							marginLeft: "0.5em"
						},
						onClick: k,
						children: "Activate"
					})]
				}),
				/* @__PURE__ */ m("div", {
					css: {
						flex: 1,
						position: "relative",
						gridColumn: "1/-1"
					},
					children: /* @__PURE__ */ m(B, {
						name: "notes",
						html: e.system.notes,
						onSave: e.system.setNotes
					})
				})
			]
		})]
	});
}, et = () => /* @__PURE__ */ g(X, {
	supertitle: /* @__PURE__ */ m(a, { children: "Weapon" }),
	children: [/* @__PURE__ */ m(Y, {
		mode: J.Main,
		children: /* @__PURE__ */ m($e, {})
	}), /* @__PURE__ */ m(Y, {
		mode: J.Config,
		children: /* @__PURE__ */ m(Ze, {})
	})]
}), tt = () => {
	let { item: e } = F();
	return /* @__PURE__ */ m(l, { children: /* @__PURE__ */ m(K, {
		label: "Delete",
		children: /* @__PURE__ */ m(P, {
			onClick: (0, q.useCallback)(async () => {
				t(game), await o({
					message: e.actor ? "DeleteActorNamesEquipmentName" : "DeleteEquipmentName",
					confirmText: "Delete",
					cancelText: "Cancel",
					confirmIconClass: "fa-trash",
					values: {
						ActorName: e.actor?.name ?? "",
						EquipmentName: e.name ?? ""
					},
					resolveFalseOnCancel: !0
				}) && await e.delete();
			}, [e]),
			children: /* @__PURE__ */ m(a, { children: "Delete Item" })
		})
	}) });
};
tt.displayName = "PersonaldetailConfig";
//#endregion
//#region src/components/personalDetails/PersonalDetailMain.tsx
var nt = () => {
	let { item: e } = F();
	t(game), y(e);
	let i = e.name, a = n(r.personalDetails.get().map((e) => e.name), e.system.slotIndex + 1, (e) => `Slot ${e + 1}`), o = game.packs.filter((e) => e.metadata.type === "Item");
	return /* @__PURE__ */ g(l, {
		css: {
			...c,
			gridTemplateRows: "auto auto auto 1fr"
		},
		children: [
			/* @__PURE__ */ m(z, {
				label: "Item Name",
				children: /* @__PURE__ */ m(f, {
					value: i || "",
					onChange: e.setName
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Slot",
				children: /* @__PURE__ */ g("select", {
					value: e.system.slotIndex,
					css: { width: "100%" },
					onChange: (t) => {
						e.system.setSlotIndex(+t.currentTarget.value);
					},
					children: [/* @__PURE__ */ m("option", {
						value: -1,
						children: r.occupationLabel.get()
					}), a.map((e, t) => /* @__PURE__ */ m("option", {
						value: t,
						children: e
					}, e))]
				})
			}),
			/* @__PURE__ */ m(z, {
				label: "Compendium Pack",
				children: /* @__PURE__ */ g("select", {
					value: e.system.compendiumPackId ?? "",
					css: { width: "100%" },
					onChange: (t) => {
						let n = t.currentTarget.value === "~~~NULL~~~" ? null : t.currentTarget.value;
						e.system.setCompendiumPack(n);
					},
					children: [/* @__PURE__ */ m("option", {
						value: "~~~NULL~~~",
						children: "None"
					}), o.map((e, t) => /* @__PURE__ */ m("option", {
						value: e.collection,
						children: e.metadata.label
					}, e.collection))]
				})
			}),
			/* @__PURE__ */ m("div", {
				css: {
					flex: 1,
					position: "relative",
					gridColumn: "1/-1"
				},
				children: /* @__PURE__ */ m(B, {
					html: e.system.notes,
					onSave: e.system.setNotes,
					name: "notes"
				})
			})
		]
	});
};
nt.displayName = "PersonalDetailMain";
//#endregion
//#region src/components/personalDetails/PersonalDetailSheet.tsx
var rt = () => {
	let { item: e } = F();
	return y(e), /* @__PURE__ */ g(X, { children: [/* @__PURE__ */ m(Y, {
		mode: J.Main,
		children: /* @__PURE__ */ m(nt, {})
	}), /* @__PURE__ */ m(Y, {
		mode: J.Config,
		children: /* @__PURE__ */ m(tt, {})
	})] });
};
rt.displayName = "PersonalDetailSheet";
//#endregion
//#region src/components/ThrowError.tsx
var $ = ({ message: e }) => {
	throw Error(e);
};
$.displayName = "ThrowError";
//#endregion
//#region src/components/ItemSheet.tsx
var it = () => {
	let { item: e } = F();
	return /* @__PURE__ */ m(s, {
		theme: ne(e.getThemeName()),
		mode: "small",
		css: w(e) || x(e) ? {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0
		} : { position: "relative" },
		children: /* @__PURE__ */ m(ce.Provider, {
			value: "itemNote",
			children: w(e) ? /* @__PURE__ */ m(Re, {}) : ue(e) ? /* @__PURE__ */ m(Ye, {}) : de(e) ? /* @__PURE__ */ m(et, {}) : x(e) ? /* @__PURE__ */ m(Xe, {}) : C(e) ? /* @__PURE__ */ m(rt, {}) : _(e) ? /* @__PURE__ */ m(We, {}) : /* @__PURE__ */ m($, { message: `No sheet defined for item type ${e.type}` })
		})
	});
};
//#endregion
export { it as ItemSheet };
