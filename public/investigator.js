import { o as e } from "./chunk-BQCxAhux.js";
import { $ as t, $t as n, A as r, B as i, Bt as a, C as o, D as s, Dt as c, Ft as l, H as u, Ht as d, It as f, L as p, Lt as m, Mt as h, N as g, Nt as _, O as v, Ot as y, P as b, Q as x, Qt as S, R as C, Rt as w, S as T, St as ee, T as E, Tt as D, U as O, W as k, Wt as te, X as A, Xt as j, Yt as M, Z as ne, Zt as re, _ as N, _n as P, a as F, at as ie, b as ae, bn as oe, c as se, cn as ce, ct as le, d as ue, dn as de, en as fe, et as pe, f as me, fn as he, ft as ge, g as _e, gn as ve, gt as ye, h as be, hn as xe, ht as Se, i as Ce, in as we, j as Te, kt as Ee, l as De, ln as Oe, lt as ke, m as Ae, mn as je, mt as Me, n as Ne, nn as Pe, nt as Fe, on as Ie, ot as Le, p as Re, pn as ze, rn as Be, rt as Ve, s as He, sn as Ue, st as We, t as Ge, tn as Ke, tt as qe, u as Je, un as Ye, v as I, vt as Xe, wt as Ze, x as L, xn as Qe, xt as $e, y as R, yn as et, z as tt, zt as nt } from "./AsyncTextInput-DMwutQQ3.js";
import { t as rt } from "./immer-DHo-sOgH.js";
import { C as it, E as at, M as ot, O as st, S as ct, T as lt, _ as ut, a as dt, b as ft, c as pt, h as mt, i as ht, l as gt, m as _t, o as vt, p as yt, r as bt, s as xt, t as St, u as Ct, v as wt, w as Tt, y as Et } from "./ImagePickle-CJmXJxfo.js";
import { n as Dt, t as Ot } from "./react-Cajsgul7.js";
import { a as kt, i as At, n as jt, r as Mt, t as Nt } from "./InvestigatorJournalSheet-7O-HVKoe.js";
import { a as Pt, i as Ft, n as It, r as Lt, t as z } from "./Button-wjG7vDMi.js";
import { r as Rt, t as zt } from "./party-CvVywrVv.js";
import { n as Bt, t as Vt } from "./assertApplicationV2-BCfhKtnc.js";
import { i as Ht, o as Ut, s as Wt, t as Gt } from "./SlideInNestedPanelRoute-KHou5B03.js";
import { s as Kt, t as qt } from "./fa6-VbZIMIgt.js";
import { t as B } from "./GridField-CzF2zV4m.js";
import { r as Jt } from "./CheckButtons-jyaVJQGW.js";
import { c as Yt, i as Xt, l as Zt, o as Qt, r as $t, s as en, t as tn } from "./weapon-avRdBZZ4.js";
import { a as nn, c as rn, d as V, f as an, i as on, l as sn, n as H, o as cn, p as ln, r as un, s as dn, u as U } from "./Toggle-BWVRHS3C.js";
import { a as fn, c as pn, i as mn, l as hn, n as gn, o as _n, r as vn, s as yn, t as bn, u as xn } from "./WeaponsArea-DZ_0r_0t.js";
import { A as Sn, D as Cn, F as wn, I as Tn, M as En, N as Dn, O as On, P as kn, T as An, _ as jn, a as Mn, b as Nn, c as Pn, d as Fn, f as In, g as Ln, h as Rn, i as zn, j as Bn, l as Vn, n as Hn, p as Un, r as Wn, s as Gn, u as Kn, v as qn, w as Jn, x as Yn, y as Xn } from "./typeAssertions-C9iS0jPm.js";
//#region packages/shared-fvtt-bits/src/OverrideAutoDisableMixin.tsx
function Zn(e) {
	class t extends e {
		_toggleDisabled(e) {}
	}
	return t;
}
//#endregion
//#region src/module/actors/NPCSheetClass.tsx
var W = /* @__PURE__ */ e(Ot(), 1), Qn = /* @__PURE__ */ W.lazy(() => import("./NPCSheet-CjF45y1t.js").then(({ NPCSheet: e }) => ({ default: e }))), $n = At("NPCSheetClass", Zn(class extends pe {
	static {
		this.DEFAULT_OPTIONS = {
			classes: [
				P,
				"sheet",
				"actor"
			],
			window: { resizable: !0 },
			position: {
				width: 700,
				height: 660
			}
		};
	}
}), () => /* @__PURE__ */ I(Mt, { children: /* @__PURE__ */ I(Qn, {}) })), er = /* @__PURE__ */ (0, W.lazy)(async () => {
	let { PartySheet: e } = await import("./PartySheet-B1kgBkeE.js");
	return { default: e };
}), tr = At("PartySheetClass", Zn(class extends pe {
	static {
		this.DEFAULT_OPTIONS = {
			classes: [
				P,
				"sheet",
				"actor"
			],
			window: { resizable: !0 },
			position: {
				width: 660,
				height: 900
			}
		};
	}
}), () => /* @__PURE__ */ I(Mt, { children: /* @__PURE__ */ I(er, {}) })), nr = ({ settings: e, onChangeSettings: t }) => /* @__PURE__ */ R(Ce, { children: [
	/* @__PURE__ */ I(B, {
		label: "Categories",
		children: /* @__PURE__ */ R("select", {
			value: e.category,
			onChange: (e) => {
				t({ category: e.currentTarget.value });
			},
			children: [/* @__PURE__ */ I("option", {
				value: "all",
				children: /* @__PURE__ */ I(F, { children: "Together" })
			}), /* @__PURE__ */ I("option", {
				value: "categorized",
				children: /* @__PURE__ */ I(F, { children: "Separate" })
			})]
		})
	}),
	/* @__PURE__ */ I(B, {
		label: "Sort order",
		children: /* @__PURE__ */ R("select", {
			value: e.sortOrder,
			onChange: (e) => {
				t({ sortOrder: e.currentTarget.value });
			},
			children: [
				/* @__PURE__ */ I("option", {
					value: "newest",
					children: /* @__PURE__ */ I(F, { children: "Newest First" })
				}),
				/* @__PURE__ */ I("option", {
					value: "oldest",
					children: /* @__PURE__ */ I(F, { children: "Oldest First" })
				}),
				/* @__PURE__ */ I("option", {
					value: "atoz",
					children: /* @__PURE__ */ I(F, { children: "A — Z" })
				}),
				/* @__PURE__ */ I("option", {
					value: "ztoa",
					children: /* @__PURE__ */ I(F, { children: "Z — A" })
				})
			]
		})
	}),
	/* @__PURE__ */ I(B, {
		label: "View mode",
		children: /* @__PURE__ */ R("select", {
			value: e.viewMode,
			onChange: (e) => {
				t({ viewMode: e.currentTarget.value });
			},
			children: [/* @__PURE__ */ I("option", {
				value: "short",
				children: /* @__PURE__ */ I(F, { children: "Short" })
			}), /* @__PURE__ */ I("option", {
				value: "full",
				children: /* @__PURE__ */ I(F, { children: "Full" })
			})]
		})
	}),
	/* @__PURE__ */ I(B, {
		label: "Column width",
		children: /* @__PURE__ */ R("select", {
			value: e.columnWidth,
			onChange: (e) => {
				t({ columnWidth: e.currentTarget.value });
			},
			children: [
				/* @__PURE__ */ I("option", {
					value: "narrow",
					children: /* @__PURE__ */ I(F, { children: "Narrow" })
				}),
				/* @__PURE__ */ I("option", {
					value: "wide",
					children: /* @__PURE__ */ I(F, { children: "Wide" })
				}),
				/* @__PURE__ */ R("option", {
					value: "full",
					children: [/* @__PURE__ */ I(F, { children: "Full" }), " width"]
				})
			]
		})
	})
] });
nr.displayName = "CardsAreaSettingsSheet";
//#endregion
//#region src/components/Masonry.tsx
var rr = /* @__PURE__ */ e(Pt(), 1), ir = "masonryHelper", ar = { "data-masonry-helper": !0 }, or = (e) => Number(e.replace("px", "")), sr = (e) => e instanceof HTMLElement ? !e.dataset[ir] : !1, cr = function({ children: e, minColumnWidth: t, columnGap: n = "0px", className: r }) {
	let i = (0, W.useRef)(null), a = (0, W.useRef)(null), [o, s] = (0, W.useState)(0), [c, l] = (0, W.useState)(1), u = (0, W.useCallback)(() => {
		if (!a.current || !i.current) return;
		let e = i.current.clientWidth, t = a.current.clientWidth;
		l(Math.max(1, Math.floor(e / t)));
	}, []);
	(0, W.useLayoutEffect)(() => {
		let e = new ResizeObserver((e) => {
			u();
		});
		return e.observe(i.current), e.observe(a.current), () => {
			e.disconnect();
		};
	}, [u]);
	let d = (0, W.useCallback)(() => {
		if (!i.current || i.current.clientWidth === 0 || c === 0) return;
		let e = Array(c).fill(0);
		i.current.childNodes.forEach((t) => {
			if (!sr(t)) return;
			let r = getComputedStyle(t), i = Math.ceil(or(r.height)) + or(r.marginTop) + or(r.marginBottom), a = e.indexOf(Math.min(...e));
			e[a] += i, t.style.order = `${a + 1}`, t.style.flexShrink = "0", t.style.marginRight = a === c - 1 ? "0px" : n;
		}), (0, rr.flushSync)(() => {
			s(Math.max(...e));
		});
	}, [n, c]);
	(0, W.useLayoutEffect)(() => {
		let e = new ResizeObserver((e) => {
			d();
		});
		return i.current && i.current.childNodes.forEach((t) => {
			e.observe(t);
		}), () => {
			e && e.disconnect();
		};
	}, [d, e]);
	let f = `calc(${c === 0 ? "100%" : `${100 / c}%`} - (${n} * ${c === 0 ? 0 : (c - 1) / c}))`, p = Array(c - 1).fill("").map((e, t) => /* @__PURE__ */ I("span", {
		...ar,
		style: {
			flexBasis: "100%",
			width: "0px",
			margin: "0px",
			padding: "0px",
			order: t + 1
		}
	}, t));
	return /* @__PURE__ */ R("div", {
		ref: i,
		className: r,
		css: {
			display: "flex",
			flexFlow: "column wrap",
			height: o === 0 ? "auto" : o + "px",
			alignContent: "flex-start",
			position: "relative",
			"> *": { width: f }
		},
		children: [
			/* @__PURE__ */ I("div", {
				...ar,
				ref: a,
				style: {
					width: t,
					visibility: "hidden",
					position: "absolute"
				}
			}),
			e,
			p
		]
	});
}, lr = (0, W.createContext)({
	category: "all",
	sortOrder: "newest",
	viewMode: "short",
	columnWidth: "narrow"
}), ur = ({ card: e, className: t }) => {
	let n = (0, W.useContext)(Je), r = (0, W.useContext)(_e), { viewMode: i } = (0, W.useContext)(lr), a = e.system.styleKeyCategoryId === null ? void 0 : p(E.cardCategories.get(), e.system.styleKeyCategoryId), o = (0, W.useCallback)((e) => {
		r !== null && r._onDragStart(e);
	}, [r]), s = a?.styleKey ? n.cards.categories[a?.styleKey] : null;
	return /* @__PURE__ */ I("div", {
		css: {
			opacity: e.system.active ? 1 : .5,
			transition: "opacity 0.2s ease-in-out",
			containerType: "inline-size"
		},
		children: /* @__PURE__ */ I(en, {
			draggable: !0,
			onDragStart: o,
			className: `investigator-card-array-card ${t}`,
			card: e,
			css: {
				cursor: "pointer",
				marginBottom: n.cards.area.verticalSpacing,
				":hover": {
					...n.cards.base.hoverStyle,
					...s?.hoverStyle
				}
			},
			viewMode: i
		}, e.id)
	});
};
ur.displayName = "CardArrayCard";
//#endregion
//#region src/components/cards/CardArray.tsx
var dr = {
	narrow: "11em",
	wide: "17em",
	full: "100%"
}, fr = ({ cards: e }) => {
	let t = (0, W.useContext)(Je), { columnWidth: n } = (0, W.useContext)(lr);
	return e.length === 0 ? /* @__PURE__ */ I("div", {
		css: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "start",
			alignItems: "center",
			fontSize: "1.5em",
			color: t.colors.text,
			opacity: .5,
			margin: "1em 0em"
		},
		children: /* @__PURE__ */ I(F, { children: "No cards" })
	}) : /* @__PURE__ */ I(cr, {
		minColumnWidth: dr[n],
		columnGap: t.cards.area.horizontalSpacing,
		css: {
			marginTop: t.cards.area.verticalSpacing,
			marginBottom: t.cards.area.verticalSpacing,
			marginLeft: t.cards.area.horizontalSpacing,
			marginRight: t.cards.area.horizontalSpacing
		},
		children: e.map((e) => /* @__PURE__ */ I(ur, { card: e }, e.id))
	});
};
fr.displayName = "CardArray";
//#endregion
//#region src/components/cards/CategorizedCardArrayCategory.tsx
var pr = ({ category: e, cards: t }) => {
	let n = (0, W.useContext)(Je), [r, i, a] = Zt(t, e);
	return /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ R("h2", {
		css: { color: i ? n.colors.success : a ? n.colors.danger : void 0 },
		children: [
			e?.pluralName ?? L("Uncategorized"),
			" (",
			r,
			")"
		]
	}), /* @__PURE__ */ I(fr, { cards: t })] });
};
pr.displayName = "CategorizedCardArrayCategory";
//#endregion
//#region src/components/cards/CategorizedCardArray.tsx
var mr = ({ cards: e }) => {
	let t = E.cardCategories.get(), [n, r] = Yt(e, t);
	return /* @__PURE__ */ R(N, { children: [t.map((e, t) => /* @__PURE__ */ R(W.Fragment, { children: [t !== 0 && /* @__PURE__ */ I("hr", { css: { margin: "2em 0em 0em" } }), /* @__PURE__ */ I(pr, {
		category: e,
		cards: n[e.id]
	})] }, e.id)), r.length > 0 && /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ I("hr", { css: { margin: "2em 0em 0em" } }), /* @__PURE__ */ I(pr, {
		category: null,
		cards: r
	})] })] });
};
mr.displayName = "CategorizedCardArray";
//#endregion
//#region src/components/cards/UncategorizedCardArray.tsx
var hr = ({ cards: e }) => {
	let t = E.cardCategories.get(), [n, r] = Yt(e, t), i = (0, W.useContext)(Je);
	return /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ R("div", {
		css: { marginTop: "0.5em" },
		children: [Object.entries(n).map(([e, n], r) => {
			let a = t.find((t) => t.id === e);
			if (!a) return "";
			let [o, s, c] = Zt(n, a);
			return /* @__PURE__ */ R("span", {
				css: {
					marginRight: "1em",
					color: s ? i.colors.success : c ? i.colors.danger : void 0
				},
				children: [
					o,
					" ",
					a.pluralName
				]
			}, e);
		}), r.length > 0 && Zt(r, null)[0] + " " + L("Uncategorized")]
	}), /* @__PURE__ */ I(fr, { cards: e })] });
};
hr.displayName = "UncategorizedCardArray";
//#endregion
//#region src/components/cards/CardsArea.tsx
var gr = Ut("settings"), _r = () => {
	let { actor: e } = Bt();
	dt(e);
	let t = e.items.filter((e) => ct(e)), [n, r] = (0, W.useState)(e.system.cardsAreaSettings);
	(0, W.useEffect)(() => {
		r({
			category: e.system.cardsAreaSettings.category,
			sortOrder: e.system.cardsAreaSettings.sortOrder,
			viewMode: e.system.cardsAreaSettings.viewMode,
			columnWidth: e.system.cardsAreaSettings.columnWidth
		});
	}, [
		e.system.cardsAreaSettings.category,
		e.system.cardsAreaSettings.sortOrder,
		e.system.cardsAreaSettings.viewMode,
		e.system.cardsAreaSettings.columnWidth
	]);
	let i = (0, W.useCallback)((t) => {
		r((n) => {
			let r = {
				...n,
				...t
			};
			return e.system.setCardsAreaSettings(r), r;
		});
	}, [e]), a = (0, W.useCallback)(() => {
		e.system.createCard();
	}, [e]), o = (0, W.useCallback)(async () => {
		let t = e.system.getNonContinuityCards().length;
		await ae({
			message: "EndScenarioDiscardCountNonContinuityCards",
			confirmText: "EndScenario",
			cancelText: "Cancel",
			confirmIconClass: "fa-fire",
			resolveFalseOnCancel: !0,
			values: {
				ActorName: e.name ?? "",
				Count: t.toString()
			}
		}) && e.system.endScenario();
	}, [e]), s = n.sortOrder === "atoz" || n.sortOrder === "ztoa" ? x(t) : t;
	(n.sortOrder === "newest" || n.sortOrder === "ztoa") && (s = s.reverse());
	let c = (0, W.useRef)(null);
	return /* @__PURE__ */ I(lr.Provider, {
		value: n,
		children: /* @__PURE__ */ R(Wt, { children: [/* @__PURE__ */ R("div", {
			css: {
				...be,
				display: "flex",
				flexDirection: "column",
				padding: "0.5em"
			},
			children: [/* @__PURE__ */ R("div", {
				css: {
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "end",
					flexDirection: "row",
					flexBasis: "",
					gap: "0.5em"
				},
				children: [
					/* @__PURE__ */ I(It, {
						onClick: a,
						children: L("Create card")
					}),
					/* @__PURE__ */ I(It, {
						onClick: o,
						children: L("End scenario")
					}),
					/* @__PURE__ */ I("div", { css: { flex: 1 } }),
					/* @__PURE__ */ I(Ht, {
						to: gr(),
						children: "Settings"
					})
				]
			}), /* @__PURE__ */ I("div", {
				className: "container-ref-haver",
				ref: c,
				css: {
					flex: 1,
					overflow: "auto"
				},
				children: n.category === "categorized" ? /* @__PURE__ */ I(mr, { cards: s }) : /* @__PURE__ */ I(hr, { cards: s })
			})]
		}), /* @__PURE__ */ I(Gt, {
			margin: "10em",
			direction: gr,
			css: {
				display: "flex",
				flexDirection: "column"
			},
			closeOnClickOutside: !0,
			children: /* @__PURE__ */ I(nr, {
				settings: n,
				onChangeSettings: i
			})
		})] })
	});
}, vr = ({ index: e, onChange: t, ...n }) => {
	let r = (0, W.useCallback)((n) => {
		t(n, e);
	}, [e, t]);
	return /* @__PURE__ */ I(Ge, {
		...n,
		onChange: r
	});
};
vr.displayName = "IndexedAsyncTextInput";
//#endregion
//#region src/components/characters/Equipment/CheckOrCross.tsx
var yr = ({ checked: e }) => I(e ? Jn : wn, {});
yr.displayName = "CheckOrCross";
//#endregion
//#region src/components/characters/Equipment/EquipmentItemRow.tsx
var br = ({ item: e, onDragStart: t, gridRow: n, fields: r }) => {
	let i = (0, W.useContext)(Je), [a, o] = (0, W.useState)(!1), s = (0, W.useCallback)((e) => {
		o(!0);
	}, []), c = (0, W.useCallback)((e) => {
		o(!1);
	}, []), l = e.sheet;
	return Vt(l), /* @__PURE__ */ R(N, { children: [
		/* @__PURE__ */ I("div", { css: {
			gridColumn: "1/-1",
			gridRow: n,
			backgroundColor: a ? i.colors.backgroundButton : void 0
		} }),
		/* @__PURE__ */ I("a", {
			css: {
				gridColumn: "1",
				gridRow: n,
				cursor: "pointer"
			},
			onClick: () => l.render({ force: !0 }),
			"data-item-id": e.id,
			onDragStart: t,
			draggable: "true",
			onMouseOver: s,
			onMouseOut: c,
			children: e.name
		}, e.id),
		Object.entries(r).map(([t, r], i) => /* @__PURE__ */ I("a", {
			css: {
				gridColumn: i + 2,
				gridRow: n,
				mouseEvents: "none"
			},
			onMouseOver: s,
			onMouseOut: c,
			onClick: () => l.render({ force: !0 }),
			children: r.type === "checkbox" ? /* @__PURE__ */ I(yr, { checked: !!e.system.fields?.[t] }) : /* @__PURE__ */ I("span", { children: e.system.fields?.[t] })
		}, t))
	] });
};
br.displayName = "EquipmentItemRow";
//#endregion
//#region src/components/characters/Equipment/EquipmentCategory.tsx
var xr = ({ categoryId: e, items: t, name: n, actor: r, fields: i }) => {
	let a = (0, W.useContext)(_e), o = (0, W.useCallback)((e) => {
		a !== null && a._onDragStart(e);
	}, [a]), s = (0, W.useContext)(Je);
	return /* @__PURE__ */ R("div", {
		css: {
			display: "grid",
			gridTemplateColumns: `1fr repeat(${Object.keys(i).length}, 1fr)`,
			gridTemplateRows: "[title] auto [headers] auto [items] auto"
		},
		children: [
			/* @__PURE__ */ R("div", {
				css: {
					gridColumn: "1/-1",
					gridRow: "title",
					display: "flex",
					flexDirection: "row",
					margin: "0 0 0 0"
				},
				children: [/* @__PURE__ */ I("h2", {
					css: { flex: 1 },
					children: n
				}), e !== void 0 && e !== "" && /* @__PURE__ */ R(z, {
					css: { flexBasis: "max-content" },
					onClick: async () => {
						await r.system.createEquipment(e);
					},
					children: [/* @__PURE__ */ I("i", { className: "fa fa-plus" }), /* @__PURE__ */ I(F, { children: "Add Equipment" })]
				})]
			}),
			/* @__PURE__ */ I("div", { css: {
				gridColumn: "1/-1",
				gridRow: "headers",
				borderBottom: `1px solid ${s.colors.controlBorder}`
			} }),
			/* @__PURE__ */ I("div", {
				css: {
					gridColumn: "1",
					gridRow: "headers"
				},
				children: /* @__PURE__ */ I(F, { children: "Item Name" })
			}),
			Object.entries(i).map(([e, t], n) => /* @__PURE__ */ I("div", {
				css: {
					gridColumn: n + 2,
					gridRow: "headers"
				},
				children: t.name
			}, e)),
			t.length === 0 && /* @__PURE__ */ I("i", {
				css: {
					gridColumn: "1 / -1",
					gridRow: "items",
					fontSize: "1.2em"
				},
				children: /* @__PURE__ */ I(F, { children: "No equipment yet." })
			}),
			x(t).map((e, t) => /* @__PURE__ */ I(br, {
				item: e,
				onDragStart: o,
				gridRow: t + 4,
				fields: i
			}, e.id)),
			/* @__PURE__ */ I("div", { css: {
				gridColumn: "1 / -1",
				gridRow: t.length + 4,
				height: "2em"
			} })
		]
	});
};
xr.displayName = "EquipmentCategory";
//#endregion
//#region src/components/characters/Equipment/EquipmentArea.tsx
var Sr = () => {
	let { actor: e } = Bt();
	dt(e);
	let t = e.system.getEquipment(), n = E.equipmentCategories.get(), r = t.filter((e) => Qt(e) && Object.keys(n).indexOf(e.system.categoryId) === -1);
	return /* @__PURE__ */ R("div", { children: [Object.entries(n).map(([n, r]) => /* @__PURE__ */ I(xr, {
		actor: e,
		categoryId: n,
		items: t.filter((e) => Qt(e) && e.system.categoryId === n),
		name: r.name,
		fields: r.fields
	}, n)), r.length > 0 && /* @__PURE__ */ I(xr, {
		actor: e,
		categoryId: "",
		items: r,
		name: L("Uncategorized"),
		fields: {}
	})] });
}, Cr = ({ ability: e }) => {
	yt(e);
	let t = (0, W.useContext)(_e), n = (0, W.useCallback)((e) => {
		t !== null && t._onDragStart(e);
	}, [t]), [r, i] = (0, W.useState)(0), a = (0, W.useCallback)(() => {
		e.system.mwTestAbility(0, r), i(0);
	}, [e, r]), o = (0, W.useCallback)(() => {
		i((e) => e + 1);
	}, []), s = (0, W.useCallback)(() => {
		i((e) => e - 1);
	}, []), c = e.sheet;
	return Vt(c), /* @__PURE__ */ R(W.Fragment, { children: [
		/* @__PURE__ */ I("a", {
			onClick: () => {
				c.render({ force: !0 });
			},
			"data-item-id": e.id,
			onDragStart: n,
			draggable: "true",
			css: {
				gridColumn: "ability",
				lineHeight: .9,
				textAlign: "end"
			},
			children: e.name
		}),
		/* @__PURE__ */ R("div", {
			css: {
				gridColumn: "rating",
				justifySelf: "right"
			},
			children: [
				e.system.pool,
				"/",
				e.system.rating
			]
		}),
		/* @__PURE__ */ R("div", {
			css: {
				gridColumn: "set",
				display: "grid",
				gridTemplateColumns: "1.6em 1.6em"
			},
			children: [/* @__PURE__ */ I(z, {
				css: { gridColumn: "1" },
				onClick: s,
				disabled: r <= -2,
				children: /* @__PURE__ */ I("i", {
					css: { fontSize: "x-small" },
					className: "fa fa-minus"
				})
			}), /* @__PURE__ */ I(z, {
				css: { gridColumn: "2" },
				onClick: o,
				disabled: r >= 2,
				children: /* @__PURE__ */ I("i", {
					css: { fontSize: "x-small" },
					className: "fa fa-plus"
				})
			})]
		}),
		/* @__PURE__ */ I("div", {
			css: { gridColumn: "spend" },
			children: Et(e) && /* @__PURE__ */ R(z, {
				css: { width: "4.1em" },
				onClick: a,
				children: [
					/* @__PURE__ */ I("i", {
						className: "fa fa-dice",
						title: "Test"
					}),
					"+",
					r
				]
			})
		}),
		e.system.hasSpecialities && /* @__PURE__ */ I("div", {
			css: {
				paddingLeft: "1em",
				gridColumn: "ability",
				width: "2em"
			},
			children: (e.system.specialities || []).map((e, t) => /* @__PURE__ */ I("div", { children: e.trim() }, t))
		})
	] }, e.id);
}, wr = ({ abilities: e }) => /* @__PURE__ */ R("div", {
	css: {
		display: "grid",
		gridTemplateColumns: "1fr max-content max-content max-content",
		gridTemplateAreas: "'ability rating set spend'",
		gridAutoRows: "min-content",
		columnGap: "0.2em",
		rowGap: "0.4em",
		alignItems: "center",
		gridColumn: "auto"
	},
	children: [e.map((e) => /* @__PURE__ */ I(Cr, { ability: e }, e.id)), e.length === 0 && /* @__PURE__ */ I(xn, {})]
}), Tr = () => {
	let { actor: e } = Bt();
	dt(e);
	let { generalAbilities: t } = e.system.getCategorizedAbilities(!0, !1);
	return /* @__PURE__ */ I("div", {
		css: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			columnGap: "1em",
			rowGap: "1em"
		},
		children: Object.keys(t).map((e) => {
			if (t[e].length >= 6) {
				let n = x(t[e]), r = n.slice(0, n.length >> 1), i = n.slice(n.length >> 1);
				return /* @__PURE__ */ R("div", {
					css: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridAutoRows: "min-content",
						columnGap: "1em",
						rowGap: "0.4em",
						alignItems: "center",
						gridColumn: "1/-1"
					},
					children: [
						/* @__PURE__ */ I("h2", {
							css: { gridColumn: "1 / -1" },
							children: e
						}),
						/* @__PURE__ */ I(wr, { abilities: r }),
						/* @__PURE__ */ I(wr, { abilities: i })
					]
				}, e);
			} else return /* @__PURE__ */ R("div", { children: [/* @__PURE__ */ I("h2", {
				css: { gridColumn: "1 / -1" },
				children: e
			}), /* @__PURE__ */ I(wr, { abilities: x(t[e]) })] }, e);
		})
	});
}, Er = ({ items: e, onDragStart: t, name: n, mwType: r }) => {
	let { actor: i } = Bt(), a = (0, W.useContext)(Je), o = i.sheet;
	return Vt(o), /* @__PURE__ */ R("div", {
		css: {
			marginBottom: "0.5em",
			paddingBottom: "0.5em",
			borderBottom: `1px solid ${a.colors.controlBorder}`
		},
		children: [
			/* @__PURE__ */ R("div", { children: [/* @__PURE__ */ I("h1", {
				css: { display: "inline" },
				children: /* @__PURE__ */ I(F, { children: n })
			}), /* @__PURE__ */ R(z, {
				css: {
					float: "right",
					width: "auto"
				},
				onClick: async () => {
					await i.createEmbeddedDocuments("Item", [{
						type: we,
						name: "New item",
						system: { mwType: r }
					}], { renderSheet: !0 });
				},
				children: [/* @__PURE__ */ I("i", { className: "fa fa-plus" }), /* @__PURE__ */ I(F, { children: "Add Item" })]
			})] }),
			e.length === 0 && /* @__PURE__ */ I("i", {
				css: {
					display: "block",
					fontSize: "1.2em"
				},
				children: /* @__PURE__ */ I(F, { children: "No items yet." })
			}),
			/* @__PURE__ */ I("div", {
				css: { columns: "auto 12em" },
				children: x(e).map((e) => /* @__PURE__ */ I("a", {
					css: {
						display: "block",
						position: "relative"
					},
					onClick: () => o.render({ force: !0 }),
					"data-item-id": e.id,
					onDragStart: t,
					draggable: "true",
					children: e.name
				}, e.id))
			})
		]
	});
}, Dr = () => {
	let { actor: e } = Bt();
	dt(e);
	let t = (0, W.useContext)(_e), n = (0, W.useCallback)((e) => {
		t !== null && t._onDragStart(e);
	}, [t]), r = e.system.getMwItems();
	return /* @__PURE__ */ R("div", { children: [
		/* @__PURE__ */ I(Er, {
			name: "Tweaks",
			mwType: "tweak",
			items: r.tweak,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Cantraps",
			mwType: "cantrap",
			items: r.cantrap,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Spells",
			mwType: "spell",
			items: r.spell,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "EnchantedItems",
			mwType: "enchantedItem",
			items: r.enchantedItem,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Melee Weapons",
			mwType: "meleeWeapon",
			items: r.meleeWeapon,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Missile Weapons",
			mwType: "missileWeapon",
			items: r.missileWeapon,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Manses",
			mwType: "manse",
			items: r.manse,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Sandestins",
			mwType: "sandestin",
			items: r.sandestin,
			onDragStart: n
		}),
		/* @__PURE__ */ I(Er, {
			name: "Retainers",
			mwType: "retainer",
			items: r.retainer,
			onDragStart: n
		})
	] });
}, Or = () => {
	let { actor: e } = Bt();
	dt(e);
	let t = E.longNotes.get(), n = (0, W.useCallback)((t, n) => {
		e.system.setLongNote(n, t);
	}, [e.system]);
	return /* @__PURE__ */ I("div", {
		css: {
			position: "absolute",
			inset: "0.5em",
			display: "flex",
			flexDirection: "column",
			gap: "0.5em"
		},
		children: t.map((t, r) => /* @__PURE__ */ R(Jt.Provider, {
			value: "pcNote",
			children: [/* @__PURE__ */ I("h3", { children: t }), /* @__PURE__ */ I("div", {
				css: {
					flex: 1,
					position: "relative",
					minHeight: "10em"
				},
				children: /* @__PURE__ */ I(mn, {
					name: "longNotes",
					index: r,
					html: e.system.longNotes[r] ?? "",
					onSave: n
				})
			})]
		}, `${t}--${r}`))
	});
}, kr = ({ onClick: e, item: t, children: n }) => {
	let r = (0, W.useContext)(_e), i = (0, W.useContext)(Je), a = (0, W.useCallback)((e) => {
		r !== null && r._onDragStart(e);
	}, [r]);
	return /* @__PURE__ */ R("a", {
		onClick: () => {
			e !== void 0 && e();
		},
		"data-item-id": t?.id,
		onDragStart: a,
		draggable: "true",
		css: {
			display: "block",
			borderRadius: "0.7em",
			padding: "0.1em 0.5em",
			margin: "0.1em 0.1em 0.1em 0",
			backgroundColor: i.colors.backgroundButton,
			color: i.colors.accent,
			lineHeight: "1em",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
			borderStyle: "solid",
			borderWidth: "1px",
			borderColor: i.colors.accent,
			flex: 1,
			minWidth: "max-content"
		},
		children: [t && /* @__PURE__ */ I("div", { css: {
			display: "inline-block",
			height: "1em",
			width: "1em",
			marginRight: "0.5em",
			backgroundImage: `url(${t.img})`,
			backgroundSize: "cover"
		} }), n]
	});
};
kr.displayName = "Slug";
//#endregion
//#region src/components/characters/PersonalDetailSlug.tsx
var Ar = ({ item: e }) => {
	pt(e);
	let t = e.sheet;
	return Vt(t), /* @__PURE__ */ I(kr, {
		item: e,
		onClick: () => {
			t.render({ force: !0 });
		},
		children: e.name
	}, e.id);
};
Ar.displayName = "PersonalDetailSlug";
//#endregion
//#region src/components/characters/PersonalDetailField.tsx
var jr = ({ actor: e, name: t, slotIndex: n }) => {
	let r = e.system.getPersonalDetailsInSlotIndex(n);
	return /* @__PURE__ */ R(B, {
		noTranslate: !0,
		label: t,
		css: {
			position: "relative",
			display: "flex",
			flexWrap: "wrap",
			flexDirection: "row"
		},
		children: [r.map((e) => /* @__PURE__ */ I(Ar, { item: e }, e.id)), r.length === 0 && /* @__PURE__ */ I(kr, {
			onClick: () => {
				e.system.createPersonalDetail(n);
			},
			children: "Create"
		})]
	});
};
jr.displayName = "ShortNotesField";
//#endregion
//#region src/components/characters/SettingsArea.tsx
var Mr = "PQkMK35MWjRI2", Nr = E.useTurnPassingInitiative.get, Pr = () => {
	let { actor: e } = Bt();
	s(game), dt(e);
	let t = (0, W.useCallback)((t) => {
		let n = t.currentTarget.value, r = n === Mr ? null : n;
		e.system.setSheetTheme(r);
	}, [e]), n = (0, W.useContext)(Je), r = C(), i = E.defaultThemeName.get(), a = v.themes[i]?.displayName;
	return /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ R(Ce, { children: [
		/* @__PURE__ */ I(B, {
			label: "Theme",
			children: /* @__PURE__ */ R("select", {
				onChange: t,
				value: e.system.sheetTheme || Mr,
				children: [Object.keys(v.themes).map((e) => /* @__PURE__ */ I("option", {
					value: e,
					children: v.themes[e].displayName
				}, e)), /* @__PURE__ */ R("option", {
					value: Mr,
					children: [
						L("Default"),
						" (",
						a,
						")"
					]
				})]
			})
		}),
		Nr() && /* @__PURE__ */ I(B, {
			label: "Number of turns",
			children: /* @__PURE__ */ I(an, {
				value: e.system.initiativePassingTurns,
				onChange: e.system.setPassingTurns
			})
		}),
		r && /* @__PURE__ */ I(B, {
			label: "Nuke",
			children: /* @__PURE__ */ I(z, {
				onClick: e.system.confirmNuke,
				children: /* @__PURE__ */ I(F, { children: "Nuke" })
			})
		})
	] }), /* @__PURE__ */ R("p", {
		css: {
			textTransform: "initial",
			border: "1px dashed currentColor",
			padding: "1em",
			margin: "2em 1em 1em 1em",
			backgroundColor: n.colors.backgroundSecondary
		},
		children: [
			/* @__PURE__ */ I("a", {
				target: "_new",
				href: "https://github.com/n3dst4/investigator-fvtt",
				children: "GUMSHOE for FoundryVTT (aka INVESTIGATOR)"
			}),
			" ",
			"is made by me, Neil de Carteret. Find all my non-work links and ways to contact me at my",
			" ",
			/* @__PURE__ */ I("a", {
				target: "_new",
				href: "https://lumphammer.net",
				children: "Lumphammer Projects"
			}),
			" ",
			"site."
		]
	})] });
}, Fr = E.useMwStyleAbilities.get, Ir = E.useMwInjuryStatus.get, Lr = E.useCards.get, Rr = () => {
	let { actor: e } = Bt();
	s(game), dt(e);
	let t = (0, W.useCallback)(async (t, n) => {
		await e.system.setShortNote(n, t);
	}, [e]), n = (0, W.useCallback)(async (t, n) => {
		await e.system.setMwHiddenShortNote(n, t);
	}, [e]), r = E.genericOccupation.get(), [i, a] = (0, W.useState)(e.system.getOccupations()[0]);
	(0, W.useEffect)(() => {
		let t = (t) => {
			t.isOwned && t.actor?.id === e.id && a(e.system.getOccupations()[0]);
		};
		return Hooks.on("createItem", t), Hooks.on("updateItem", t), Hooks.on("deleteItem", t), () => {
			Hooks.off("createItem", t), Hooks.off("updateItem", t), Hooks.off("deleteItem", t);
		};
	}, [e]);
	let o = Lt(e.system.getSheetThemeName()), c = E.personalDetails.get(), l = E.mwHiddenShortNotes.get(), u = E.occupationLabel.get(), d = E.pcStats.get();
	return /* @__PURE__ */ R(se, {
		theme: o,
		mode: "large",
		css: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: "grid",
			gridTemplateRows: "min-content max-content 1fr",
			gridTemplateColumns: "10em 1fr 10em",
			gap: "0.5em",
			gridTemplateAreas: "\"title title image\" \"pools stats image\" \"pools body  body\" "
		},
		children: [
			/* @__PURE__ */ I("div", {
				css: {
					gridArea: "title",
					textAlign: "center",
					position: "relative"
				},
				children: /* @__PURE__ */ I(_n, {
					mainText: e.name ?? "",
					subText: i?.name ?? r,
					onChangeMainText: e.setName,
					onChangeSubText: i?.setName
				})
			}),
			/* @__PURE__ */ I("div", {
				css: {
					gridArea: "title",
					textAlign: "center",
					position: "relative"
				},
				children: /* @__PURE__ */ I(_n, {
					mainText: e.name ?? "",
					subText: i?.name ?? r,
					defaultSubText: E.genericOccupation.get(),
					onChangeMainText: e.setName,
					onChangeSubText: i?.setName
				})
			}),
			/* @__PURE__ */ I(St, { css: {
				gridArea: "image",
				transform: "rotateZ(2deg)"
			} }),
			/* @__PURE__ */ I("div", {
				className: o.panelClass,
				css: {
					gridArea: "stats",
					padding: "0.5em",
					position: "relative",
					...o.panelStyleSecondary
				},
				children: /* @__PURE__ */ R(Ce, { children: [
					/* @__PURE__ */ I(B, {
						label: "Person Name",
						children: /* @__PURE__ */ I(Ge, {
							value: e.name ?? "",
							onChange: e.setName
						})
					}),
					/* @__PURE__ */ I(jr, {
						name: u,
						actor: e,
						slotIndex: -1
					}),
					c.map(({ name: n, type: r }, i) => r === "text" ? /* @__PURE__ */ I(B, {
						noTranslate: !0,
						label: n,
						children: /* @__PURE__ */ I(vr, {
							value: e.system.shortNotes[i],
							onChange: t,
							index: i
						})
					}, `${n}--${i}`) : /* @__PURE__ */ I(jr, {
						name: n,
						actor: e,
						slotIndex: i
					}, `${n}--${i}`)),
					game.user.isGM && l.map((t, r) => /* @__PURE__ */ I(B, {
						noTranslate: !0,
						label: t,
						children: /* @__PURE__ */ I(vr, {
							value: e.system.hiddenShortNotes[r],
							onChange: n,
							index: r
						})
					}, `${t}--${r}`))
				] })
			}),
			/* @__PURE__ */ R("div", {
				className: o.panelClass,
				css: {
					gridArea: "pools",
					position: "relative",
					overflowX: "visible",
					overflowY: "auto",
					padding: "0.5em",
					display: "flex",
					flexDirection: "column",
					gap: "0.5em",
					...o.panelStylePrimary
				},
				children: [
					Fr() && /* @__PURE__ */ R(N, { children: [
						/* @__PURE__ */ I(z, {
							onClick: e.system.confirmMw2Refresh,
							children: /* @__PURE__ */ I(F, { children: "2h Refresh" })
						}),
						/* @__PURE__ */ I(z, {
							onClick: e.system.confirmMw4Refresh,
							children: /* @__PURE__ */ I(F, { children: "4h Refresh" })
						}),
						/* @__PURE__ */ I(z, {
							onClick: e.system.confirmMw8Refresh,
							children: /* @__PURE__ */ I(F, { children: "8h Refresh" })
						})
					] }),
					/* @__PURE__ */ I(z, {
						onClick: e.system.confirmRefresh,
						children: /* @__PURE__ */ I(F, { children: "Full Refresh" })
					}),
					Fr() || /* @__PURE__ */ I(N, { children: /* @__PURE__ */ I(z, {
						onClick: e.system.confirm24hRefresh,
						children: /* @__PURE__ */ I(F, { children: "24h Refresh" })
					}) }),
					Ir() && /* @__PURE__ */ I(N, { children: /* @__PURE__ */ I(fn, {
						status: e.system.mwInjuryStatus,
						setStatus: e.system.setMwInjuryStatus
					}) }),
					/* @__PURE__ */ I(gn, {}),
					Object.keys(d).map((e) => /* @__PURE__ */ I(vn, {
						id: e,
						stat: d[e]
					}, e)),
					/* @__PURE__ */ I(yn, {})
				]
			}),
			/* @__PURE__ */ I("div", {
				css: {
					gridArea: "body",
					position: "relative",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ I(ln, {
					defaultTab: "abilities",
					tabs: [
						{
							id: "abilities",
							label: "Abilities",
							content: Fr() ? /* @__PURE__ */ I(Tr, {}) : /* @__PURE__ */ I(pn, {})
						},
						Lr() && {
							id: "cards",
							label: "Cards",
							content: /* @__PURE__ */ I(_r, {})
						},
						E.mwUseAlternativeItemTypes.get() ? {
							id: "items",
							label: "MWItems",
							content: /* @__PURE__ */ I(Dr, {})
						} : {
							id: "equipment",
							label: "Equipment",
							content: /* @__PURE__ */ R(N, { children: [
								/* @__PURE__ */ I(bn, {}),
								/* @__PURE__ */ I("div", { css: { height: "1em" } }),
								/* @__PURE__ */ I(Sr, {})
							] })
						},
						{
							id: "notes",
							label: "Notes",
							content: /* @__PURE__ */ I(Or, {})
						},
						{
							id: "abilities-edit",
							label: "Edit",
							content: /* @__PURE__ */ I(hn, {})
						},
						{
							id: "settings",
							label: /* @__PURE__ */ I("i", { className: "fa fa-cog" }),
							content: /* @__PURE__ */ I(Pr, {})
						}
					]
				})
			})
		]
	});
};
Rr.displayName = "PCSheet";
var zr = At("PCSheetClass", Zn(class extends pe {
	static {
		this.DEFAULT_OPTIONS = {
			classes: [
				P,
				"sheet",
				"actor"
			],
			position: {
				width: 777,
				height: 900
			},
			window: { resizable: !0 }
		};
	}
}), () => /* @__PURE__ */ I(Rr, {})), Br = class extends Combatant {
	constructor(...e) {
		super(...e), this.initiative = null, this._resourceHandlers = /* @__PURE__ */ new Set();
	}
	_preUpdate(e, t, n) {
		return super._preUpdate(e, t, n);
	}
	_onUpdate(e, t, n) {
		super._onUpdate(e, t, n);
	}
	static async _preUpdateOperation(e, t, n) {
		return super._preUpdateOperation(e, t, n);
	}
	static async _onUpdateOperation(e, t, n) {
		return super._onUpdateOperation(e, t, n);
	}
	registerResourceHandler(e) {
		return this._resourceHandlers.add(e), e(this.resource), () => this._resourceHandlers.delete(e);
	}
	updateResource() {
		let e = super.updateResource();
		for (let t of this._resourceHandlers.values()) t(e);
		return e;
	}
};
//#endregion
//#region src/module/combat/classicCombatant.ts
function Vr(e) {
	if (!lt(e)) return 0;
	let t = e.system.initiativeAbility || [...E.combatAbilities.get()].sort()[0] || "";
	return e && u(e.system.initiativeAbility) && e.update({ system: { initiativeAbility: t } }), e.items.find((e) => Et(e) && e.name === t)?.system.rating ?? 0;
}
var Hr = { initiative: new Xe({
	nullable: !1,
	required: !0,
	initial: 0
}) }, Ur = class extends D {
	static defineSchema() {
		return Hr;
	}
	_preCreate(...[e, t, n]) {
		s(game);
		let r = Vr(e.actorId && game.actors.get(e.actorId));
		return e.initiative === void 0 && this.updateSource({ initiative: r }), super._preCreate(e, t, n);
	}
	async _preUpdate(...[e, t, n]) {
		return super._preUpdate(e, t, n);
	}
	_onUpdate(...[e, t, n]) {
		return super._onUpdate(e, t, n);
	}
	async resetInitiative() {
		s(game);
		let e = this.parent.actor;
		Tt(e), await this.parent.update({ system: { initiative: Vr(e) } });
	}
};
function Wr(e) {
	return e instanceof Br && e.type === "classic";
}
function Gr(e) {
	if (!Wr(e)) throw Error("Expected combatant to be a ClassicCombatant");
}
//#endregion
//#region src/module/combat/turnPassingCombat.ts
var Kr = {}, qr = class extends D {
	static defineSchema() {
		return Kr;
	}
	_preUpdateDescendantDocuments(...[e, t, n, r, i]) {}
	async onCreateDescendantDocuments(...[e, t, n, r, i, a]) {
		if (t === "combatants") return Promise.resolve();
	}
	async onUpdateDescendantDocuments(...[e, t, n, r, i, a]) {
		return Promise.resolve();
	}
	onDeleteDescendantDocuments(...e) {
		return Promise.resolve();
	}
	getTurns() {
		return this.parent.combatants.contents.sort((e, t) => (e.name ?? "").localeCompare(t.name ?? "")).map((e) => e.id ?? "");
	}
	async startCombat() {
		await this.parent.update({ round: 1 });
	}
	async nextRound() {
		await this.parent.update({
			round: this.parent.round + 1,
			turn: null
		});
	}
	async previousRound() {
		await this.parent.update({ round: this.parent.round - 1 });
	}
	async nextTurn() {
		await this.parent.update({ turn: this.parent.turn === null ? 0 : this.parent.turn + 1 });
	}
	async previousTurn() {
		await this.parent.update({ turn: this.parent.turn === null || this.parent.turn <= 0 ? 0 : this.parent.turn - 1 });
	}
};
function Jr(e) {
	return e instanceof Xr && e.type === "turnPassing";
}
//#endregion
//#region src/module/combat/types.ts
function G(e) {
	return e === null || ei(e) || Jr(e);
}
function Yr(e) {
	if (!G(e)) throw Error("Combat is not a known combat type");
}
//#endregion
//#region src/module/combat/InvestigatorCombat.ts
var Xr = class extends Combat {
	constructor(...e) {
		super(...e), this._compareCombatants = (e, t) => E.useTurnPassingInitiative.get() ? e.name && t.name ? e.name.localeCompare(t.name) : 0 : (t.system.initiative ?? 0) - (e.system.initiative ?? 0);
	}
	async createEmbeddedDocuments(e, t, n) {
		let r = this.type, i = e === "Combatant" ? t?.map((e) => ({
			...e,
			type: ("type" in e ? e.type : null) ?? r
		})) : t;
		return super.createEmbeddedDocuments(e, i, n);
	}
	static create(e, t, ...n) {
		let r = E.useTurnPassingInitiative.get() ? "turnPassing" : "classic";
		if (e === void 0) e = { type: r };
		else if (Array.isArray(e)) for (let t of e) t.type = t.type === void 0 ? r : t.type;
		else e.type = e.type === void 0 ? r : e.type;
		return super.create(e, t);
	}
	_preUpdate(...[e, t, n]) {
		return super._preUpdate(e, t, n);
	}
	_onUpdate(...[e, n, r]) {
		t.log("Combat updated", e), super._onUpdate(e, n, r);
	}
	static async _preUpdateOperation(...[e, t, n]) {
		return super._preUpdateOperation(e, t, n);
	}
	static async _onUpdateOperation(...[e, t, n]) {
		return super._onUpdateOperation(e, t, n);
	}
	_preUpdateDescendantDocuments(...[e, t, n, r, i]) {
		s(game), super._preUpdateDescendantDocuments(e, t, n, r, i);
	}
	_preCreateDescendantDocuments(...e) {
		super._preCreateDescendantDocuments(...e);
	}
	_onCreateDescendantDocuments(...[e, t, n, r, i, a]) {
		return G(this) && a === game.userId && this.system.onCreateDescendantDocuments(e, t, n, r, i, a), super._onCreateDescendantDocuments(e, t, n, r, i, a);
	}
	_onUpdateDescendantDocuments(...e) {
		G(this) && this.system.onUpdateDescendantDocuments(...e), super._onUpdateDescendantDocuments(...e);
	}
	_onDeleteDescendantDocuments(...e) {
		G(this) && this.system.onDeleteDescendantDocuments(...e), super._onDeleteDescendantDocuments(...e);
	}
	setupTurns() {
		this.turns ||= [];
		let e = G(this) ? this.system.getTurns().map((e) => this.combatants.get(e)).filter((e) => e !== void 0) : [], t = this.turn === null ? void 0 : e[this.turn];
		return this.current = this._getCurrentState(t), this.previous ||= this.current, this.turns = e;
	}
	prepareDerivedData() {
		this.turns?.length !== 0 && this.setupTurns(), super.prepareDerivedData();
	}
	async startCombat() {
		return this._playCombatSound("startEncounter"), G(this) && await this.system.startCombat(), this;
	}
	async nextRound() {
		return G(this) && await this.system.nextRound(), this;
	}
	async previousRound() {
		return G(this) && await this.system.previousRound(), this;
	}
	async nextTurn() {
		return G(this) && await this.system.nextTurn(), this;
	}
	async previousTurn() {
		return G(this) && await this.system.previousTurn(), this;
	}
};
//#endregion
//#region src/module/combat/classicCombat.ts
function Zr(e, t) {
	return (t.system.initiative ?? 0) - (e.system.initiative ?? 0);
}
var Qr = { rounds: new Ve(new $e({
	turns: new Ve(new $e({ combatantId: new ee({
		nullable: !1,
		required: !0,
		initial: ""
	}) }, {
		nullable: !1,
		required: !0,
		initial: {}
	}), {
		nullable: !1,
		required: !0,
		initial: []
	}),
	turnIndex: new Xe({
		nullable: !0,
		required: !0,
		initial: null
	})
}, {
	nullable: !1,
	required: !1,
	initial: void 0
}), {
	nullable: !1,
	required: !0,
	initial: [{
		turns: [],
		turnIndex: null
	}]
}) }, $r = class extends D {
	constructor(...[e, t]) {
		super(e, t);
	}
	static defineSchema() {
		return Qr;
	}
	_preCreate(...[e, t, n]) {
		return super._preCreate(e, t, n);
	}
	async onCreateDescendantDocuments(...[e, n, r, i, a, o]) {
		if (n !== "combatants") return;
		t.log("ClassicCombatModel#onCreateDescendantDocuments called", r, i);
		let s = this.rounds[e.round];
		if (s === void 0) throw Error("Round not found");
		let c = r.filter(Wr), l;
		if (this.parent.round === 0) l = this.parent.combatants.contents.sort(Zr).flatMap((e) => e.id === null ? [] : { combatantId: e.id });
		else {
			let e = c.sort(Zr).flatMap((e) => e.id === null ? [] : { combatantId: e.id });
			l = [...s.turns, ...e];
		}
		let u = [...this.rounds];
		u[e.round] = {
			turnIndex: s.turnIndex,
			turns: l
		}, await this.parent.update({ system: { rounds: u } });
	}
	async onUpdateDescendantDocuments(...[e, t, n, r, i, a]) {
		return Promise.resolve();
	}
	async onDeleteDescendantDocuments(...[e, n, r, i, a, o]) {
		if (t.log("ClassicCombat#onDeleteDescendantDocuments called"), n !== "combatants") return;
		let s = this.rounds[e.round];
		if (s === void 0) return;
		let c = s.turns.filter((e) => !i.includes(e.combatantId)) ?? [], l = s.turnIndex === null || c.length === 0 ? null : Math.min(s.turnIndex, c.length - 1), u = [...this.rounds];
		return u[e.round] = {
			turnIndex: l,
			turns: c
		}, await this.parent.update({
			turn: l,
			system: { rounds: u }
		}), Promise.resolve();
	}
	getTurns() {
		return this.rounds[this.parent.round]?.turns.map((e) => e.combatantId) ?? [];
	}
	async startCombat() {
		if (t.log("ClassicCombatModel#startCombat called"), this.parent.combatants.size === 0) return;
		let e = this.rounds[0];
		if (e === void 0) return;
		let n = {
			turnIndex: 0,
			turns: e.turns
		}, r = [...this.rounds ?? []];
		r[1] = n;
		let i = {
			round: 1,
			turn: 0,
			system: { rounds: r }
		};
		Hooks.callAll("combatStart", this.parent, {
			round: 1,
			turn: 0
		}), await this.parent.update(i);
	}
	getNewRoundInfo() {
		return t.log("ClassicCombatModel#getNewRound called"), {
			turnIndex: 0,
			turns: this.parent.combatants.contents.sort(Zr).flatMap((e) => e.id === null ? [] : [{ combatantId: e.id }])
		};
	}
	getExistingRoundInfo(e) {
		let t = [...e.turns].filter((e) => this.parent.combatants.has(e.combatantId)), n = this.parent.combatants.contents.filter((e) => !t.some((t) => t.combatantId === e.id)).sort(Zr).flatMap((e) => e.id === null ? [] : [{ combatantId: e.id }]);
		t.push(...n);
		let r = e.turnIndex;
		if (r !== null) {
			let n = t.findIndex((t) => e.turnIndex !== null && t.combatantId === e.turns[e.turnIndex].combatantId);
			r = n === -1 ? Math.min(r, t.length - 1) : n;
		}
		return {
			turnIndex: r,
			turns: t
		};
	}
	async gotoRound(e, t = null) {
		let n = this.rounds[e], r = n ? this.getExistingRoundInfo(n) : this.getNewRoundInfo();
		t === "first" && r.turns.length > 0 ? this.parent.settings.skipDefeated ? (r.turnIndex = r.turns.findIndex((e) => !(this.parent.combatants.get(e.combatantId)?.isDefeated ?? !0)), r.turnIndex === -1 && (r.turnIndex = null)) : r.turnIndex = 0 : t === "last" && r.turns.length > 0 && (this.parent.settings.skipDefeated ? r.turnIndex = r.turns.findLastIndex((e) => !(this.parent.combatants.get(e.combatantId)?.isDefeated ?? !0)) : r.turnIndex = r.turns.length - 1), (r.turnIndex === null || r.turnIndex < 0 || r.turnIndex >= r.turns.length) && (r.turnIndex = null);
		let i = [...this.rounds ?? []];
		i[e] = r;
		let a = {
			round: e,
			turn: r.turnIndex,
			system: { rounds: i }
		}, o = this.parent.getTimeDelta(this.parent.round, this.parent.turn, e, r.turnIndex), s = {
			direction: e > this.parent.round ? 1 : -1,
			advanceTime: o,
			worldTime: { delta: o }
		};
		Hooks.callAll("combatRound", this.parent, a, s), await this.parent.update(a, s);
	}
	async nextRound(e = null) {
		t.log("ClassicCombatModel#nextRound called");
		let n = this.parent.round + 1;
		await this.gotoRound(n, e);
	}
	async previousRound(e = null) {
		if (t.log("ClassicCombatModel#previousRound called"), this.parent.round === 0) return;
		let n = this.parent.round - 1;
		await this.gotoRound(n, e);
	}
	async nextTurn() {
		if (t.log("ClassicCombatModel#nextTurn called"), s(game), !game.user.isGM) {
			A();
			return;
		}
		if (this.parent.round === 0) return await this.nextRound();
		let e = this.rounds[this.parent.round];
		if (e === void 0) return await this.gotoRound(this.parent.round);
		let n = e.turnIndex === null ? 0 : e.turnIndex + 1;
		if (this.parent.settings.skipDefeated) for (; this.parent.combatants.contents[n]?.isDefeated;) n++;
		if (n >= this.parent.combatants.contents.length) return await this.nextRound("first");
		e.turnIndex = n;
		let r = [...this.rounds];
		r[this.parent.round] = e;
		let i = {
			round: this.parent.round,
			turn: n,
			system: { rounds: r }
		}, a = this.parent.getTimeDelta(this.parent.round, this.parent.turn, this.parent.round, n), o = {
			direction: 1,
			advanceTime: a,
			worldTime: { delta: a }
		};
		Hooks.callAll("combatTurn", this.parent, i, o), await this.parent.update(i, o);
	}
	async previousTurn() {
		if (t.log("ClassicCombatModel#previousTurn called"), this.parent.round === 0) return;
		let e = this.rounds[this.parent.round];
		if (e === void 0) return await this.gotoRound(this.parent.round);
		let n = e.turnIndex === null ? 0 : e.turnIndex - 1;
		if (this.parent.settings.skipDefeated) for (; this.parent.combatants.contents[n]?.isDefeated;) n--;
		if (n < 0) return await this.previousRound("last");
		e.turnIndex = n;
		let r = [...this.rounds];
		r[this.parent.round] = e;
		let i = {
			round: this.parent.round,
			turn: n,
			system: { rounds: r }
		}, a = this.parent.getTimeDelta(this.parent.round, this.parent.turn, this.parent.round, n), o = {
			direction: -1,
			advanceTime: a,
			worldTime: { delta: a }
		};
		Hooks.callAll("combatTurn", this.parent, i, o), await this.parent.update(i, o);
	}
	async moveCombatant(e, t, n) {
		let r = this.rounds[this.parent.round];
		if (!r) return;
		let i = r.turns.find((t) => t.combatantId === e);
		if (!i) return;
		let a = r.turns.filter((t) => t.combatantId !== e), o = a.findIndex((e) => e.combatantId === t) + (n === "up" ? 0 : 1);
		a.splice(o, 0, i);
		let s = [...this.rounds];
		s[this.parent.round] = {
			...r,
			turns: a
		}, this.rounds = s, this.parent.setupTurns(), await this.parent.update({ system: { rounds: s } });
	}
	async sortCombatants() {
		let e = this.rounds[this.parent.round];
		if (!e) return;
		let t = e.turns.map(({ combatantId: e }) => this.parent.combatants.get(e)).filter((e) => e !== void 0).sort(Zr).flatMap((e) => e.id ? [{ combatantId: e.id }] : []), n = [...this.rounds];
		n[this.parent.round] = {
			...e,
			turns: t
		}, this.rounds = n, this.parent.setupTurns(), await this.parent.update({ system: { rounds: this.rounds } });
	}
};
function ei(e) {
	return e instanceof Xr && e.type === "classic";
}
//#endregion
//#region src/components/combat/functions.ts
var K = (e) => (s(game), game.i18n?.localize(e) ?? ""), ti = (e, t) => (s(game), game.i18n?.format(e, t) ?? "");
//#endregion
//#region src/components/combat/registerHookHandler.ts
function ni(e, n, r = !1) {
	return r && t.log(`Registering callback for ${e} hook`), Hooks.on(e, n), () => {
		r && t.log(`Unregistering callback for ${e} hook`), Hooks.off(e, n);
	};
}
//#endregion
//#region src/components/combat/TrackerContext.tsx
var ri = {
	combatState: null,
	combat: null,
	turnIds: [],
	isActiveUser: !1
}, ii = /* @__PURE__ */ (0, W.createContext)(ri), ai = () => (0, W.useContext)(ii), oi = () => {
	let e = (0, W.useContext)(ii);
	if (ei(e.combat)) return e;
	throw Error("useClassicTrackerContext used with non-classic combat");
}, si = () => {
	let e = (0, W.useContext)(ii);
	if (Jr(e.combat)) return e;
	throw Error("useTurnPassingTrackerContext used with non-turn-passing combat");
};
function ci(e) {
	return s(game), {
		combatState: e?.toJSON() ?? null,
		combat: e ?? null,
		turnIds: e?.turns.map((e) => e._id).filter((e) => e !== null) ?? [],
		isActiveUser: e?.combatant?.players?.includes(game.user) ?? !1
	};
}
function li(e, t) {
	let n = t.turns.map((e) => e._id).filter((e) => e !== null);
	return n.length === e.length && n.every((t, n) => t === e[n]) ? e : n;
}
var di = (e) => {
	let [n, r] = (0, W.useState)(() => ci(e)), i = Ft(e);
	(0, W.useEffect)(() => ni("updateCombat", (e, n) => {
		r((r) => (s(game), G(e) ? r.combatState?._id !== e._id && e.active ? (t.log("New combat activated"), ci(e)) : r.combatState && r.combatState._id === e._id ? {
			combatState: rt(r.combatState, (e) => {
				foundry.utils.mergeObject(e, n);
			}),
			combat: e,
			turnIds: li(r.turnIds, e),
			isActiveUser: e.combatant?.players?.includes(game.user) ?? !1
		} : r : r));
	}, !0), []);
	function a(e) {
		r((t) => e === null || e?.id !== t.combat?.id ? t : {
			...t,
			turnIds: li(t.turnIds, e)
		});
	}
	return (0, W.useEffect)(() => ni("createCombatant", (e) => {
		a(e.combat);
	}), []), (0, W.useEffect)(() => ni("deleteCombatant", (e) => {
		a(e.combat);
	}), [i]), (0, W.useEffect)(() => ni("createCombat", (e) => {
		e.active && G(e) && r(ci(e));
	}), []), (0, W.useEffect)(() => ni("deleteCombat", (t) => {
		t === e && r(() => ri);
	}), [e]), n;
}, fi = ii.Provider, pi = /* @__PURE__ */ (0, W.memo)(function() {
	let { combat: e, turnIds: t } = oi();
	if (e === null) throw Error("No active combat found");
	let n = (0, W.useCallback)(() => {
		e.system.sortCombatants();
	}, [e]);
	return /* @__PURE__ */ I("nav", {
		className: "combat-controls",
		css: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-end"
		},
		children: /* @__PURE__ */ I("button", {
			type: "button",
			disabled: t.length < 2,
			className: "",
			onClick: n,
			"data-tooltip": "",
			children: K("investigator.SortCombatants")
		})
	});
});
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/lu/index.mjs
function mi(e) {
	return Kt({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [
			{
				tag: "polyline",
				attr: { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" },
				child: []
			},
			{
				tag: "line",
				attr: {
					x1: "13",
					x2: "19",
					y1: "19",
					y2: "13"
				},
				child: []
			},
			{
				tag: "line",
				attr: {
					x1: "16",
					x2: "20",
					y1: "16",
					y2: "20"
				},
				child: []
			},
			{
				tag: "line",
				attr: {
					x1: "19",
					x2: "21",
					y1: "21",
					y2: "19"
				},
				child: []
			},
			{
				tag: "polyline",
				attr: { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" },
				child: []
			},
			{
				tag: "line",
				attr: {
					x1: "5",
					x2: "9",
					y1: "14",
					y2: "18"
				},
				child: []
			},
			{
				tag: "line",
				attr: {
					x1: "7",
					x2: "4",
					y1: "17",
					y2: "20"
				},
				child: []
			},
			{
				tag: "line",
				attr: {
					x1: "3",
					x2: "5",
					y1: "19",
					y2: "21"
				},
				child: []
			}
		]
	})(e);
}
function hi(e) {
	return Kt({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [
			{
				tag: "path",
				attr: { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M10 22 9 8" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "m14 22 1-14" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" },
				child: []
			}
		]
	})(e);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+r_161926fa2509d0b7370b60b8bb4eb8b0/node_modules/@radix-ui/react-collection/dist/index.mjs
var q = /* @__PURE__ */ e(Dt(), 1);
function gi(e) {
	let t = e + "CollectionProvider", [n, r] = rn(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = (e) => {
		let { scope: t, children: n } = e, r = W.useRef(null), a = W.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, q.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	o.displayName = t;
	let s = e + "CollectionSlot", c = on(s), l = W.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ (0, q.jsx)(c, {
			ref: U(t, a(s, n).collectionRef),
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = on(u), p = W.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = W.useRef(null), s = U(t, o), c = a(u, n);
		return W.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ (0, q.jsx)(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return W.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs
var _i = W.createContext(void 0);
function vi(e) {
	let t = W.useContext(_i);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function yi(e) {
	let t = W.useRef(e);
	return W.useEffect(() => {
		t.current = e;
	}), W.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function bi(e, t = globalThis?.document) {
	let n = yi(e);
	W.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14___3d3960154a4c07d09bb90cb341135fc5/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var xi = "DismissableLayer", Si = "dismissableLayer.update", Ci = "dismissableLayer.pointerDownOutside", wi = "dismissableLayer.focusOutside", Ti, Ei = W.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), Di = W.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = W.useContext(Ei), [u, d] = W.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = W.useState({}), m = U(t, (e) => d(e)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), _ = h.indexOf(g), v = u ? h.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, b = v >= _, x = Ai((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!b || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), S = ji((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return bi((e) => {
		v === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), W.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ti = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Mi(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Ti);
		};
	}, [
		u,
		f,
		n,
		l
	]), W.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Mi());
	}, [u, l]), W.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(Si, e), () => document.removeEventListener(Si, e);
	}, []), /* @__PURE__ */ (0, q.jsx)(H.div, {
		...c,
		ref: m,
		style: {
			pointerEvents: y ? b ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: V(e.onFocusCapture, S.onFocusCapture),
		onBlurCapture: V(e.onBlurCapture, S.onBlurCapture),
		onPointerDownCapture: V(e.onPointerDownCapture, x.onPointerDownCapture)
	});
});
Di.displayName = xi;
var Oi = "DismissableLayerBranch", ki = W.forwardRef((e, t) => {
	let n = W.useContext(Ei), r = W.useRef(null), i = U(t, r);
	return W.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ (0, q.jsx)(H.div, {
		...e,
		ref: i
	});
});
ki.displayName = Oi;
function Ai(e, t = globalThis?.document) {
	let n = yi(e), r = W.useRef(!1), i = W.useRef(() => {});
	return W.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					Ni(Ci, n, a, { discrete: !0 });
				}, a = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, { once: !0 })) : r();
			} else t.removeEventListener("click", i.current);
			r.current = !1;
		}, a = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
		};
	}, [t, n]), { onPointerDownCapture: () => r.current = !0 };
}
function ji(e, t = globalThis?.document) {
	let n = yi(e), r = W.useRef(!1);
	return W.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && Ni(wi, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function Mi() {
	let e = new CustomEvent(Si);
	document.dispatchEvent(e);
}
function Ni(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? un(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Pi = 0;
function Fi() {
	W.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ii()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ii()), Pi++, () => {
			Pi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Pi--;
		};
	}, []);
}
function Ii() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_f62f3af4ca2ba305a7aecf04c8534604/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Li = "focusScope.autoFocusOnMount", Ri = "focusScope.autoFocusOnUnmount", zi = {
	bubbles: !1,
	cancelable: !0
}, Bi = "FocusScope", Vi = W.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = W.useState(null), l = yi(i), u = yi(a), d = W.useRef(null), f = U(t, (e) => c(e)), p = W.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	W.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : Ji(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || Ji(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Ji(s);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		p.paused
	]), W.useEffect(() => {
		if (s) {
			Yi.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(Li, zi);
				s.addEventListener(Li, l), s.dispatchEvent(t), t.defaultPrevented || (Hi(Qi(Wi(s)), { select: !0 }), document.activeElement === e && Ji(s));
			}
			return () => {
				s.removeEventListener(Li, l), setTimeout(() => {
					let t = new CustomEvent(Ri, zi);
					s.addEventListener(Ri, u), s.dispatchEvent(t), t.defaultPrevented || Ji(e ?? document.body, { select: !0 }), s.removeEventListener(Ri, u), Yi.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = W.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = Ui(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && Ji(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && Ji(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ (0, q.jsx)(H.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
});
Vi.displayName = Bi;
function Hi(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Ji(r, { select: t }), document.activeElement !== n) return;
}
function Ui(e) {
	let t = Wi(e);
	return [Gi(t, e), Gi(t.reverse(), e)];
}
function Wi(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Gi(e, t) {
	for (let n of e) if (!Ki(n, { upTo: t })) return n;
}
function Ki(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function qi(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Ji(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && qi(e) && t && e.select();
	}
}
var Yi = Xi();
function Xi() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Zi(e, t), e.unshift(t);
		},
		remove(t) {
			e = Zi(e, t), e[0]?.resume();
		}
	};
}
function Zi(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Qi(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-id/dist/index.mjs
var $i = W.useId || (() => void 0), ea = 0;
function ta(e) {
	let [t, n] = W.useState($i());
	return dn(() => {
		e || n((e) => e ?? String(ea++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var na = [
	"top",
	"right",
	"bottom",
	"left"
], ra = Math.min, J = Math.max, ia = Math.round, aa = Math.floor, oa = (e) => ({
	x: e,
	y: e
}), sa = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, ca = {
	start: "end",
	end: "start"
};
function la(e, t, n) {
	return J(e, ra(t, n));
}
function ua(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function da(e) {
	return e.split("-")[0];
}
function fa(e) {
	return e.split("-")[1];
}
function pa(e) {
	return e === "x" ? "y" : "x";
}
function ma(e) {
	return e === "y" ? "height" : "width";
}
var ha = /* @__PURE__ */ new Set(["top", "bottom"]);
function ga(e) {
	return ha.has(da(e)) ? "y" : "x";
}
function _a(e) {
	return pa(ga(e));
}
function va(e, t, n) {
	n === void 0 && (n = !1);
	let r = fa(e), i = _a(e), a = ma(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Da(o)), [o, Da(o)];
}
function ya(e) {
	let t = Da(e);
	return [
		ba(e),
		t,
		ba(t)
	];
}
function ba(e) {
	return e.replace(/start|end/g, (e) => ca[e]);
}
var xa = ["left", "right"], Sa = ["right", "left"], Ca = ["top", "bottom"], wa = ["bottom", "top"];
function Ta(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Sa : xa : t ? xa : Sa;
		case "left":
		case "right": return t ? Ca : wa;
		default: return [];
	}
}
function Ea(e, t, n, r) {
	let i = fa(e), a = Ta(da(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ba)))), a;
}
function Da(e) {
	return e.replace(/left|right|bottom|top/g, (e) => sa[e]);
}
function Oa(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function ka(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Oa(e);
}
function Aa(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.7.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ja(e, t, n) {
	let { reference: r, floating: i } = e, a = ga(t), o = _a(t), s = ma(o), c = da(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (fa(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
var Ma = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ja(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = ja(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
};
async function Na(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ua(t, e), p = ka(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Aa(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Aa(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Pa = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ua(e, t) || {};
		if (l == null) return {};
		let d = ka(u), f = {
			x: n,
			y: r
		}, p = _a(i), m = ma(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, ee = ra(d[_], T), E = ra(d[v], T), D = ee, O = C - h[m] - E, k = C / 2 - h[m] / 2 + w, te = la(D, k, O), A = !c.arrow && fa(i) != null && k !== te && a.reference[m] / 2 - (k < D ? ee : E) - h[m] / 2 < 0, j = A ? k < D ? k - D : k - O : 0;
		return {
			[p]: f[p] + j,
			data: {
				[p]: te,
				centerOffset: k - te - j,
				...A && { alignmentOffset: j }
			},
			reset: A
		};
	}
}), Fa = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ua(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = da(r), _ = ga(o), v = da(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Da(o)] : ya(o)), x = p !== "none";
			!d && x && b.push(...Ea(o, m, p, y));
			let S = [o, ...b], C = await Na(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = va(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== ga(t)) || T.every((e) => e.overflows[0] > 0 && ga(e.placement) === _))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = ga(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Ia(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function La(e) {
	return na.some((t) => e[t] >= 0);
}
var Ra = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n } = t, { strategy: r = "referenceHidden", ...i } = ua(e, t);
			switch (r) {
				case "referenceHidden": {
					let e = Ia(await Na(t, {
						...i,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: La(e)
					} };
				}
				case "escaped": {
					let e = Ia(await Na(t, {
						...i,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: La(e)
					} };
				}
				default: return {};
			}
		}
	};
}, za = /* @__PURE__ */ new Set(["left", "top"]);
async function Ba(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = da(n), s = fa(n), c = ga(n) === "y", l = za.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ua(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Va = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Ba(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Ha = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: a = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...c } = ua(e, t), l = {
				x: n,
				y: r
			}, u = await Na(t, c), d = ga(da(i)), f = pa(d), p = l[f], m = l[d];
			if (a) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = p + u[e], r = p - u[t];
				p = la(n, p, r);
			}
			if (o) {
				let e = d === "y" ? "top" : "left", t = d === "y" ? "bottom" : "right", n = m + u[e], r = m - u[t];
				m = la(n, m, r);
			}
			let h = s.fn({
				...t,
				[f]: p,
				[d]: m
			});
			return {
				...h,
				data: {
					x: h.x - n,
					y: h.y - r,
					enabled: {
						[f]: a,
						[d]: o
					}
				}
			};
		}
	};
}, Ua = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = ua(e, t), u = {
				x: n,
				y: r
			}, d = ga(i), f = pa(d), p = u[f], m = u[d], h = ua(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = za.has(da(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Wa = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = ua(e, t), u = await Na(t, l), d = da(i), f = fa(i), p = ga(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = ra(h - u[g], v), x = ra(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = J(u.left, 0), t = J(u.right, 0), n = J(u.top, 0), r = J(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : J(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : J(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Ga() {
	return typeof window < "u";
}
function Ka(e) {
	return Ja(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Y(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qa(e) {
	return ((Ja(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Ja(e) {
	return Ga() ? e instanceof Node || e instanceof Y(e).Node : !1;
}
function Ya(e) {
	return Ga() ? e instanceof Element || e instanceof Y(e).Element : !1;
}
function Xa(e) {
	return Ga() ? e instanceof HTMLElement || e instanceof Y(e).HTMLElement : !1;
}
function Za(e) {
	return !Ga() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
var Qa = /* @__PURE__ */ new Set(["inline", "contents"]);
function $a(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = po(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Qa.has(i);
}
var eo = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function to(e) {
	return eo.has(Ka(e));
}
var no = [":popover-open", ":modal"];
function ro(e) {
	return no.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var io = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], ao = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], oo = [
	"paint",
	"layout",
	"strict",
	"content"
];
function so(e) {
	let t = lo(), n = Ya(e) ? po(e) : e;
	return io.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ao.some((e) => (n.willChange || "").includes(e)) || oo.some((e) => (n.contain || "").includes(e));
}
function co(e) {
	let t = ho(e);
	for (; Xa(t) && !fo(t);) {
		if (so(t)) return t;
		if (ro(t)) return null;
		t = ho(t);
	}
	return null;
}
function lo() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var uo = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function fo(e) {
	return uo.has(Ka(e));
}
function po(e) {
	return Y(e).getComputedStyle(e);
}
function mo(e) {
	return Ya(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ho(e) {
	if (Ka(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Za(e) && e.host || qa(e);
	return Za(t) ? t.host : t;
}
function go(e) {
	let t = ho(e);
	return fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xa(t) && $a(t) ? t : go(t);
}
function _o(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = go(e), i = r === e.ownerDocument?.body, a = Y(r);
	if (i) {
		let e = vo(a);
		return t.concat(a, a.visualViewport || [], $a(r) ? r : [], e && n ? _o(e) : []);
	}
	return t.concat(r, _o(r, [], n));
}
function vo(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.7.2/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function yo(e) {
	let t = po(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Xa(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ia(n) !== a || ia(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function bo(e) {
	return Ya(e) ? e : e.contextElement;
}
function xo(e) {
	let t = bo(e);
	if (!Xa(t)) return oa(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = yo(t), o = (a ? ia(n.width) : n.width) / r, s = (a ? ia(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var So = /* @__PURE__ */ oa(0);
function Co(e) {
	let t = Y(e);
	return !lo() || !t.visualViewport ? So : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function wo(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t;
}
function To(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = bo(e), o = oa(1);
	t && (r ? Ya(r) && (o = xo(r)) : o = xo(e));
	let s = wo(a, n, r) ? Co(a) : oa(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Y(a), t = r && Ya(r) ? Y(r) : r, n = e, i = vo(n);
		for (; i && r && t !== n;) {
			let e = xo(i), t = i.getBoundingClientRect(), r = po(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Y(i), i = vo(n);
		}
	}
	return Aa({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Eo(e, t) {
	let n = mo(e).scrollLeft;
	return t ? t.left + n : To(qa(e)).left + n;
}
function Do(e, t, n) {
	n === void 0 && (n = !1);
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - (n ? 0 : Eo(e, r)),
		y: r.top + t.scrollTop
	};
}
function Oo(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = qa(r), s = t ? ro(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = oa(1), u = oa(0), d = Xa(r);
	if ((d || !d && !a) && ((Ka(r) !== "body" || $a(o)) && (c = mo(r)), Xa(r))) {
		let e = To(r);
		l = xo(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Do(o, c, !0) : oa(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function ko(e) {
	return Array.from(e.getClientRects());
}
function Ao(e) {
	let t = qa(e), n = mo(e), r = e.ownerDocument.body, i = J(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = J(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Eo(e), s = -n.scrollTop;
	return po(r).direction === "rtl" && (o += J(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
function jo(e, t) {
	let n = Y(e), r = qa(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = lo();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var Mo = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function No(e, t) {
	let n = To(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Xa(e) ? xo(e) : oa(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Po(e, t, n) {
	let r;
	if (t === "viewport") r = jo(e, n);
	else if (t === "document") r = Ao(qa(e));
	else if (Ya(t)) r = No(t, n);
	else {
		let n = Co(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Aa(r);
}
function Fo(e, t) {
	let n = ho(e);
	return n === t || !Ya(n) || fo(n) ? !1 : po(n).position === "fixed" || Fo(n, t);
}
function Io(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = _o(e, [], !1).filter((e) => Ya(e) && Ka(e) !== "body"), i = null, a = po(e).position === "fixed", o = a ? ho(e) : e;
	for (; Ya(o) && !fo(o);) {
		let t = po(o), n = so(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && Mo.has(i.position) || $a(o) && !n && Fo(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = ho(o);
	}
	return t.set(e, r), r;
}
function Lo(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ro(t) ? [] : Io(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = Po(t, n, i);
		return e.top = J(r.top, e.top), e.right = ra(r.right, e.right), e.bottom = ra(r.bottom, e.bottom), e.left = J(r.left, e.left), e;
	}, Po(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Ro(e) {
	let { width: t, height: n } = yo(e);
	return {
		width: t,
		height: n
	};
}
function zo(e, t, n) {
	let r = Xa(t), i = qa(t), a = n === "fixed", o = To(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = oa(0);
	function l() {
		c.x = Eo(i);
	}
	if (r || !r && !a) if ((Ka(t) !== "body" || $a(i)) && (s = mo(t)), r) {
		let e = To(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Do(i, s) : oa(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Bo(e) {
	return po(e).position === "static";
}
function Vo(e, t) {
	if (!Xa(e) || po(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return qa(e) === n && (n = n.ownerDocument.body), n;
}
function Ho(e, t) {
	let n = Y(e);
	if (ro(e)) return n;
	if (!Xa(e)) {
		let t = ho(e);
		for (; t && !fo(t);) {
			if (Ya(t) && !Bo(t)) return t;
			t = ho(t);
		}
		return n;
	}
	let r = Vo(e, t);
	for (; r && to(r) && Bo(r);) r = Vo(r, t);
	return r && fo(r) && Bo(r) && !so(r) ? n : r || co(e) || n;
}
var Uo = async function(e) {
	let t = this.getOffsetParent || Ho, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: zo(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Wo(e) {
	return po(e).direction === "rtl";
}
var Go = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Oo,
	getDocumentElement: qa,
	getClippingRect: Lo,
	getOffsetParent: Ho,
	getElementRects: Uo,
	getClientRects: ko,
	getDimensions: Ro,
	getScale: xo,
	isElement: Ya,
	isRTL: Wo
};
function Ko(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qo(e, t) {
	let n = null, r, i = qa(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = aa(d), h = aa(i.clientWidth - (u + f)), g = aa(i.clientHeight - (d + p)), _ = aa(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: J(0, ra(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Ko(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Jo(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = bo(e), u = i || a ? [...l ? _o(l) : [], ..._o(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? qo(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? To(e) : null;
	c && g();
	function g() {
		let t = To(e);
		h && !Ko(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Yo = Va, Xo = Ha, Zo = Fa, Qo = Wa, $o = Ra, es = Pa, ts = Ua, ns = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Go,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Ma(e, t, {
		...i,
		platform: a
	});
}, rs = typeof document < "u" ? W.useLayoutEffect : function() {};
function is(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!is(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !is(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function as(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function os(e, t) {
	let n = as(e);
	return Math.round(t * n) / n;
}
function ss(e) {
	let t = W.useRef(e);
	return rs(() => {
		t.current = e;
	}), t;
}
function cs(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = W.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = W.useState(r);
	is(f, r) || p(r);
	let [m, h] = W.useState(null), [g, _] = W.useState(null), v = W.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = W.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = W.useRef(null), C = W.useRef(null), w = W.useRef(u), T = c != null, ee = ss(c), E = ss(i), D = ss(l), O = W.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		E.current && (e.platform = E.current), ns(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: D.current !== !1
			};
			k.current && !is(w.current, t) && (w.current = t, rr.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		E,
		D
	]);
	rs(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let k = W.useRef(!1);
	rs(() => (k.current = !0, () => {
		k.current = !1;
	}), []), rs(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (ee.current) return ee.current(b, x, O);
			O();
		}
	}, [
		b,
		x,
		O,
		ee,
		T
	]);
	let te = W.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), A = W.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), j = W.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!A.floating) return e;
		let t = os(A.floating, u.x), r = os(A.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...as(A.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		A.floating,
		u.x,
		u.y
	]);
	return W.useMemo(() => ({
		...u,
		update: O,
		refs: te,
		elements: A,
		floatingStyles: j
	}), [
		u,
		O,
		te,
		A,
		j
	]);
}
var ls = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : es({
				element: r.current,
				padding: i
			}).fn(n) : r ? es({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, us = (e, t) => ({
	...Yo(e),
	options: [e, t]
}), ds = (e, t) => ({
	...Xo(e),
	options: [e, t]
}), fs = (e, t) => ({
	...ts(e),
	options: [e, t]
}), ps = (e, t) => ({
	...Zo(e),
	options: [e, t]
}), ms = (e, t) => ({
	...Qo(e),
	options: [e, t]
}), hs = (e, t) => ({
	...$o(e),
	options: [e, t]
}), gs = (e, t) => ({
	...ls(e),
	options: [e, t]
}), _s = "Arrow", vs = W.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ (0, q.jsx)(H.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ (0, q.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
});
vs.displayName = _s;
var ys = vs, bs = "Popper", [xs, Ss] = rn(bs), [Cs, ws] = xs(bs), Ts = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = W.useState(null);
	return /* @__PURE__ */ (0, q.jsx)(Cs, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Ts.displayName = bs;
var Es = "PopperAnchor", Ds = W.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = ws(Es, n), o = W.useRef(null), s = U(t, o), c = W.useRef(null);
	return W.useEffect(() => {
		let e = c.current;
		c.current = r?.current || o.current, e !== c.current && a.onAnchorChange(c.current);
	}), r ? null : /* @__PURE__ */ (0, q.jsx)(H.div, {
		...i,
		ref: s
	});
});
Ds.displayName = Es;
var Os = "PopperContent", [ks, As] = xs(Os), js = W.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = "partial", hideWhenDetached: f = !1, updatePositionStrategy: p = "optimized", onPlaced: m, ...h } = e, g = ws(Os, n), [_, v] = W.useState(null), y = U(t, (e) => v(e)), [b, x] = W.useState(null), S = nn(b), C = S?.width ?? 0, w = S?.height ?? 0, T = r + (a === "center" ? "" : "-" + a), ee = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, E = Array.isArray(l) ? l : [l], D = E.length > 0, O = {
		padding: ee,
		boundary: E.filter(Fs),
		altBoundary: D
	}, { refs: k, floatingStyles: te, placement: A, isPositioned: j, middlewareData: M } = cs({
		strategy: "fixed",
		placement: T,
		whileElementsMounted: (...e) => Jo(...e, { animationFrame: p === "always" }),
		elements: { reference: g.anchor },
		middleware: [
			us({
				mainAxis: i + w,
				alignmentAxis: o
			}),
			c && ds({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === "partial" ? fs() : void 0,
				...O
			}),
			c && ps({ ...O }),
			ms({
				...O,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			b && gs({
				element: b,
				padding: s
			}),
			Is({
				arrowWidth: C,
				arrowHeight: w
			}),
			f && hs({
				strategy: "referenceHidden",
				...O
			})
		]
	}), [ne, re] = Ls(A), N = yi(m);
	dn(() => {
		j && N?.();
	}, [j, N]);
	let P = M.arrow?.x, F = M.arrow?.y, ie = M.arrow?.centerOffset !== 0, [ae, oe] = W.useState();
	return dn(() => {
		_ && oe(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ (0, q.jsx)("div", {
		ref: k.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...te,
			transform: j ? te.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ae,
			"--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
			...M.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, q.jsx)(ks, {
			scope: n,
			placedSide: ne,
			onArrowChange: x,
			arrowX: P,
			arrowY: F,
			shouldHideArrow: ie,
			children: /* @__PURE__ */ (0, q.jsx)(H.div, {
				"data-side": ne,
				"data-align": re,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: j ? void 0 : "none"
				}
			})
		})
	});
});
js.displayName = Os;
var Ms = "PopperArrow", Ns = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Ps = W.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = As(Ms, n), a = Ns[i.placedSide];
	return /* @__PURE__ */ (0, q.jsx)("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, q.jsx)(ys, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
Ps.displayName = Ms;
function Fs(e) {
	return e !== null;
}
var Is = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Ls(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function Ls(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Rs = Ts, zs = Ds, Bs = js, Vs = Ps, Hs = "Portal", Us = W.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = W.useState(!1);
	dn(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? rr.createPortal(/* @__PURE__ */ (0, q.jsx)(H.div, {
		...r,
		ref: t
	}), o) : null;
});
Us.displayName = Hs;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_c01c26c80b5ab5e3ecefbda6eca51ad1/node_modules/@radix-ui/react-presence/dist/index.mjs
function Ws(e, t) {
	return W.useReducer((e, n) => t[e][n] ?? e, e);
}
var Gs = (e) => {
	let { present: t, children: n } = e, r = Ks(t), i = typeof n == "function" ? n({ present: r.isPresent }) : W.Children.only(n), a = U(r.ref, Js(i));
	return typeof n == "function" || r.isPresent ? W.cloneElement(i, { ref: a }) : null;
};
Gs.displayName = "Presence";
function Ks(e) {
	let [t, n] = W.useState(), r = W.useRef(null), i = W.useRef(e), a = W.useRef("none"), [o, s] = Ws(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return W.useEffect(() => {
		let e = qs(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), dn(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = qs(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), dn(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = qs(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = qs(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: W.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function qs(e) {
	return e?.animationName || "none";
}
function Js(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14__@type_4eeb29c998b846c35358e2f929e7490e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var Ys = "rovingFocusGroup.onEntryFocus", Xs = {
	bubbles: !1,
	cancelable: !0
}, Zs = "RovingFocusGroup", [Qs, $s, ec] = gi(Zs), [tc, nc] = rn(Zs, [ec]), [rc, ic] = tc(Zs), ac = W.forwardRef((e, t) => /* @__PURE__ */ (0, q.jsx)(Qs.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, q.jsx)(Qs.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, q.jsx)(oc, {
			...e,
			ref: t
		})
	})
}));
ac.displayName = Zs;
var oc = W.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: i = !1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, preventScrollOnEntryFocus: u = !1, ...d } = e, f = W.useRef(null), p = U(t, f), m = vi(a), [h, g] = cn({
		prop: o,
		defaultProp: s ?? null,
		onChange: c,
		caller: Zs
	}), [_, v] = W.useState(!1), y = yi(l), b = $s(n), x = W.useRef(!1), [S, C] = W.useState(0);
	return W.useEffect(() => {
		let e = f.current;
		if (e) return e.addEventListener(Ys, y), () => e.removeEventListener(Ys, y);
	}, [y]), /* @__PURE__ */ (0, q.jsx)(rc, {
		scope: n,
		orientation: r,
		dir: m,
		loop: i,
		currentTabStopId: h,
		onItemFocus: W.useCallback((e) => g(e), [g]),
		onItemShiftTab: W.useCallback(() => v(!0), []),
		onFocusableItemAdd: W.useCallback(() => C((e) => e + 1), []),
		onFocusableItemRemove: W.useCallback(() => C((e) => e - 1), []),
		children: /* @__PURE__ */ (0, q.jsx)(H.div, {
			tabIndex: _ || S === 0 ? -1 : 0,
			"data-orientation": r,
			...d,
			ref: p,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: V(e.onMouseDown, () => {
				x.current = !0;
			}),
			onFocus: V(e.onFocus, (e) => {
				let t = !x.current;
				if (e.target === e.currentTarget && t && !_) {
					let t = new CustomEvent(Ys, Xs);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = b().filter((e) => e.focusable);
						fc([
							e.find((e) => e.active),
							e.find((e) => e.id === h),
							...e
						].filter(Boolean).map((e) => e.ref.current), u);
					}
				}
				x.current = !1;
			}),
			onBlur: V(e.onBlur, () => v(!1))
		})
	});
}), sc = "RovingFocusGroupItem", cc = W.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = ta(), l = a || c, u = ic(sc, n), d = u.currentTabStopId === l, f = $s(n), { onFocusableItemAdd: p, onFocusableItemRemove: m, currentTabStopId: h } = u;
	return W.useEffect(() => {
		if (r) return p(), () => m();
	}, [
		r,
		p,
		m
	]), /* @__PURE__ */ (0, q.jsx)(Qs.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, q.jsx)(H.span, {
			tabIndex: d ? 0 : -1,
			"data-orientation": u.orientation,
			...s,
			ref: t,
			onMouseDown: V(e.onMouseDown, (e) => {
				r ? u.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: V(e.onFocus, () => u.onItemFocus(l)),
			onKeyDown: V(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					u.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = dc(e, u.orientation, u.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = f().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = u.loop ? pc(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => fc(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: d,
				hasTabStop: h != null
			}) : o
		})
	});
});
cc.displayName = sc;
var lc = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function uc(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function dc(e, t, n) {
	let r = uc(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return lc[r];
}
function fc(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function pc(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var mc = ac, hc = cc, gc = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, _c = /* @__PURE__ */ new WeakMap(), vc = /* @__PURE__ */ new WeakMap(), yc = {}, bc = 0, xc = function(e) {
	return e && (e.host || xc(e.parentNode));
}, Sc = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = xc(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Cc = function(e, t, n, r) {
	var i = Sc(t, Array.isArray(e) ? e : [e]);
	yc[n] || (yc[n] = /* @__PURE__ */ new WeakMap());
	var a = yc[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (_c.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				_c.set(e, c), a.set(e, l), o.push(e), c === 1 && i && vc.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), bc++, function() {
		o.forEach(function(e) {
			var t = _c.get(e) - 1, i = a.get(e) - 1;
			_c.set(e, t), a.set(e, i), t || (vc.has(e) || e.removeAttribute(r), vc.delete(e)), i || e.removeAttribute(n);
		}), bc--, bc || (_c = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap(), vc = /* @__PURE__ */ new WeakMap(), yc = {});
	};
}, wc = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || gc(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Cc(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Tc = function() {
	return Tc = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Tc.apply(this, arguments);
};
function Ec(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Dc(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Oc = "right-scroll-bar-position", kc = "width-before-scroll-bar", Ac = "with-scroll-bars-hidden", jc = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Mc(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js
function Nc(e, t) {
	var n = (0, W.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Pc = typeof window < "u" ? W.useLayoutEffect : W.useEffect, Fc = /* @__PURE__ */ new WeakMap();
function Ic(e, t) {
	var n = Nc(t || null, function(t) {
		return e.forEach(function(e) {
			return Mc(e, t);
		});
	});
	return Pc(function() {
		var t = Fc.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Mc(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Mc(e, a);
			});
		}
		Fc.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js
function Lc(e) {
	return e;
}
function Rc(e, t) {
	t === void 0 && (t = Lc);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function zc(e) {
	e === void 0 && (e = {});
	var t = Rc(null);
	return t.options = Tc({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js
var Bc = function(e) {
	var t = e.sideCar, n = Ec(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return W.createElement(r, Tc({}, n));
};
Bc.isSideCarExport = !0;
function Vc(e, t) {
	return e.useMedium(t), Bc;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js
var Hc = zc(), Uc = function() {}, Wc = W.forwardRef(function(e, t) {
	var n = W.useRef(null), r = W.useState({
		onScrollCapture: Uc,
		onWheelCapture: Uc,
		onTouchMoveCapture: Uc
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = Ec(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = Ic([n, t]), C = Tc(Tc({}, b), i);
	return W.createElement(W.Fragment, null, u && W.createElement(x, {
		sideCar: Hc,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? W.cloneElement(W.Children.only(s), Tc(Tc({}, C), { ref: S })) : W.createElement(v, Tc({}, C, {
		className: c,
		ref: S
	}), s));
});
Wc.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Wc.classNames = {
	fullWidth: kc,
	zeroRight: Oc
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Gc, Kc = function() {
	if (Gc) return Gc;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/singleton.js
function qc() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Kc();
	return t && e.setAttribute("nonce", t), e;
}
function Jc(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Yc(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Xc = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = qc()) && (Jc(t, n), Yc(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Zc = function() {
	var e = Xc();
	return function(t, n) {
		W.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Qc = function() {
	var e = Zc();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, $c = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, el = function(e) {
	return parseInt(e || "", 10) || 0;
}, tl = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		el(n),
		el(r),
		el(i)
	];
}, nl = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return $c;
	var t = tl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, rl = Qc(), il = "data-scroll-locked", al = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Ac} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${il}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Oc} {
    right: ${s}px ${r};
  }
  
  .${kc} {
    margin-right: ${s}px ${r};
  }
  
  .${Oc} .${Oc} {
    right: 0 ${r};
  }
  
  .${kc} .${kc} {
    margin-right: 0 ${r};
  }
  
  body[${il}] {
    ${jc}: ${s}px;
  }
`;
}, ol = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, sl = function() {
	W.useEffect(function() {
		return document.body.setAttribute(il, (ol() + 1).toString()), function() {
			var e = ol() - 1;
			e <= 0 ? document.body.removeAttribute(il) : document.body.setAttribute(il, e.toString());
		};
	}, []);
}, cl = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	sl();
	var a = W.useMemo(function() {
		return nl(i);
	}, [i]);
	return W.createElement(rl, { styles: al(a, !t, i, n ? "" : "!important") });
}, ll = !1;
if (typeof window < "u") try {
	var ul = Object.defineProperty({}, "passive", { get: function() {
		return ll = !0, !0;
	} });
	window.addEventListener("test", ul, ul), window.removeEventListener("test", ul, ul);
} catch {
	ll = !1;
}
var dl = ll ? { passive: !1 } : !1, fl = function(e) {
	return e.tagName === "TEXTAREA";
}, pl = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !fl(e) && n[t] === "visible");
}, ml = function(e) {
	return pl(e, "overflowY");
}, hl = function(e) {
	return pl(e, "overflowX");
}, gl = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), yl(e, r)) {
			var i = bl(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, _l = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, vl = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, yl = function(e, t) {
	return e === "v" ? ml(t) : hl(t);
}, bl = function(e, t) {
	return e === "v" ? _l(t) : vl(t);
}, xl = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Sl = function(e, t, n, r, i) {
	var a = xl(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = bl(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && yl(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Cl = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, wl = function(e) {
	return [e.deltaX, e.deltaY];
}, Tl = function(e) {
	return e && "current" in e ? e.current : e;
}, El = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Dl = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ol = 0, kl = [];
function Al(e) {
	var t = W.useRef([]), n = W.useRef([0, 0]), r = W.useRef(), i = W.useState(Ol++)[0], a = W.useState(Qc)[0], o = W.useRef(e);
	W.useEffect(function() {
		o.current = e;
	}, [e]), W.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Dc([e.lockRef.current], (e.shards || []).map(Tl), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = W.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Cl(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = gl(d, u);
		if (!f) return !0;
		if (f ? l = d : (l = d === "v" ? "h" : "v", f = gl(d, u)), !f) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var p = r.current || l;
		return Sl(p, t, e, p === "h" ? s : c, !0);
	}, []), c = W.useCallback(function(e) {
		var n = e;
		if (!(!kl.length || kl[kl.length - 1] !== a)) {
			var r = "deltaY" in n ? wl(n) : Cl(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && El(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Tl).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = W.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: jl(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = W.useCallback(function(e) {
		n.current = Cl(e), r.current = void 0;
	}, []), d = W.useCallback(function(t) {
		l(t.type, wl(t), t.target, s(t, e.lockRef.current));
	}, []), f = W.useCallback(function(t) {
		l(t.type, Cl(t), t.target, s(t, e.lockRef.current));
	}, []);
	W.useEffect(function() {
		return kl.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, dl), document.addEventListener("touchmove", c, dl), document.addEventListener("touchstart", u, dl), function() {
			kl = kl.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, dl), document.removeEventListener("touchmove", c, dl), document.removeEventListener("touchstart", u, dl);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return W.createElement(W.Fragment, null, m ? W.createElement(a, { styles: Dl(i) }) : null, p ? W.createElement(cl, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function jl(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Ml = Vc(Hc, Al), Nl = W.forwardRef(function(e, t) {
	return W.createElement(Wc, Tc({}, e, {
		ref: t,
		sideCar: Ml
	}));
});
Nl.classNames = Wc.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.16_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_73ff7391b7be14d4dbff03af4dbac090/node_modules/@radix-ui/react-menu/dist/index.mjs
var Pl = ["Enter", " "], Fl = [
	"ArrowDown",
	"PageUp",
	"Home"
], Il = [
	"ArrowUp",
	"PageDown",
	"End"
], Ll = [...Fl, ...Il], Rl = {
	ltr: [...Pl, "ArrowRight"],
	rtl: [...Pl, "ArrowLeft"]
}, zl = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Bl = "Menu", [Vl, Hl, Ul] = gi(Bl), [Wl, Gl] = rn(Bl, [
	Ul,
	Ss,
	nc
]), Kl = Ss(), ql = nc(), [Jl, Yl] = Wl(Bl), [Xl, Zl] = Wl(Bl), Ql = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = Kl(t), [c, l] = W.useState(null), u = W.useRef(!1), d = yi(a), f = vi(i);
	return W.useEffect(() => {
		let e = () => {
			u.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => u.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ (0, q.jsx)(Rs, {
		...s,
		children: /* @__PURE__ */ (0, q.jsx)(Jl, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ (0, q.jsx)(Xl, {
				scope: t,
				onClose: W.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
};
Ql.displayName = Bl;
var $l = "MenuAnchor", eu = W.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Kl(n);
	return /* @__PURE__ */ (0, q.jsx)(zs, {
		...i,
		...r,
		ref: t
	});
});
eu.displayName = $l;
var tu = "MenuPortal", [nu, ru] = Wl(tu, { forceMount: void 0 }), iu = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = Yl(tu, t);
	return /* @__PURE__ */ (0, q.jsx)(nu, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, q.jsx)(Gs, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, q.jsx)(Us, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
iu.displayName = tu;
var X = "MenuContent", [au, ou] = Wl(X), su = W.forwardRef((e, t) => {
	let n = ru(X, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = Yl(X, e.__scopeMenu), o = Zl(X, e.__scopeMenu);
	return /* @__PURE__ */ (0, q.jsx)(Vl.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, q.jsx)(Gs, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, q.jsx)(Vl.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, q.jsx)(cu, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, q.jsx)(lu, {
					...i,
					ref: t
				})
			})
		})
	});
}), cu = W.forwardRef((e, t) => {
	let n = Yl(X, e.__scopeMenu), r = W.useRef(null), i = U(t, r);
	return W.useEffect(() => {
		let e = r.current;
		if (e) return wc(e);
	}, []), /* @__PURE__ */ (0, q.jsx)(du, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: V(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), lu = W.forwardRef((e, t) => {
	let n = Yl(X, e.__scopeMenu);
	return /* @__PURE__ */ (0, q.jsx)(du, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), uu = on("MenuContent.ScrollLock"), du = W.forwardRef((e, t) => {
	let { __scopeMenu: n, loop: r = !1, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...h } = e, g = Yl(X, n), _ = Zl(X, n), v = Kl(n), y = ql(n), b = Hl(n), [x, S] = W.useState(null), C = W.useRef(null), w = U(t, C, g.onContentChange), T = W.useRef(0), ee = W.useRef(""), E = W.useRef(0), D = W.useRef(null), O = W.useRef("right"), k = W.useRef(0), te = m ? Nl : W.Fragment, A = m ? {
		as: uu,
		allowPinchZoom: !0
	} : void 0, j = (e) => {
		let t = ee.current + e, n = b().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Yu(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			ee.current = t, window.clearTimeout(T.current), t !== "" && (T.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	W.useEffect(() => () => window.clearTimeout(T.current), []), Fi();
	let M = W.useCallback((e) => O.current === D.current?.side && Zu(e, D.current?.area), []);
	return /* @__PURE__ */ (0, q.jsx)(au, {
		scope: n,
		searchRef: ee,
		onItemEnter: W.useCallback((e) => {
			M(e) && e.preventDefault();
		}, [M]),
		onItemLeave: W.useCallback((e) => {
			M(e) || (C.current?.focus(), S(null));
		}, [M]),
		onTriggerLeave: W.useCallback((e) => {
			M(e) && e.preventDefault();
		}, [M]),
		pointerGraceTimerRef: E,
		onPointerGraceIntentChange: W.useCallback((e) => {
			D.current = e;
		}, []),
		children: /* @__PURE__ */ (0, q.jsx)(te, {
			...A,
			children: /* @__PURE__ */ (0, q.jsx)(Vi, {
				asChild: !0,
				trapped: i,
				onMountAutoFocus: V(a, (e) => {
					e.preventDefault(), C.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: o,
				children: /* @__PURE__ */ (0, q.jsx)(Di, {
					asChild: !0,
					disableOutsidePointerEvents: s,
					onEscapeKeyDown: l,
					onPointerDownOutside: u,
					onFocusOutside: d,
					onInteractOutside: f,
					onDismiss: p,
					children: /* @__PURE__ */ (0, q.jsx)(mc, {
						asChild: !0,
						...y,
						dir: _.dir,
						orientation: "vertical",
						loop: r,
						currentTabStopId: x,
						onCurrentTabStopIdChange: S,
						onEntryFocus: V(c, (e) => {
							_.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, q.jsx)(Bs, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": Wu(g.open),
							"data-radix-menu-content": "",
							dir: _.dir,
							...v,
							...h,
							ref: w,
							style: {
								outline: "none",
								...h.style
							},
							onKeyDown: V(h.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && j(e.key));
								let i = C.current;
								if (e.target !== i || !Ll.includes(e.key)) return;
								e.preventDefault();
								let a = b().filter((e) => !e.disabled).map((e) => e.ref.current);
								Il.includes(e.key) && a.reverse(), qu(a);
							}),
							onBlur: V(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(T.current), ee.current = "");
							}),
							onPointerMove: V(e.onPointerMove, Qu((e) => {
								let t = e.target, n = k.current !== e.clientX;
								e.currentTarget.contains(t) && n && (O.current = e.clientX > k.current ? "right" : "left", k.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
su.displayName = X;
var fu = "MenuGroup", pu = W.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, q.jsx)(H.div, {
		role: "group",
		...r,
		ref: t
	});
});
pu.displayName = fu;
var mu = "MenuLabel", hu = W.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, q.jsx)(H.div, {
		...r,
		ref: t
	});
});
hu.displayName = mu;
var gu = "MenuItem", _u = "menu.itemSelect", vu = W.forwardRef((e, t) => {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = W.useRef(null), o = Zl(gu, e.__scopeMenu), s = ou(gu, e.__scopeMenu), c = U(t, a), l = W.useRef(!1), u = () => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(_u, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(_u, (e) => r?.(e), { once: !0 }), un(e, t), t.defaultPrevented ? l.current = !1 : o.onClose();
		}
	};
	return /* @__PURE__ */ (0, q.jsx)(yu, {
		...i,
		ref: c,
		disabled: n,
		onClick: V(e.onClick, u),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), l.current = !0;
		},
		onPointerUp: V(e.onPointerUp, (e) => {
			l.current || e.currentTarget?.click();
		}),
		onKeyDown: V(e.onKeyDown, (e) => {
			let t = s.searchRef.current !== "";
			n || t && e.key === " " || Pl.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
vu.displayName = gu;
var yu = W.forwardRef((e, t) => {
	let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = ou(gu, n), s = ql(n), c = W.useRef(null), l = U(t, c), [u, d] = W.useState(!1), [f, p] = W.useState("");
	return W.useEffect(() => {
		let e = c.current;
		e && p((e.textContent ?? "").trim());
	}, [a.children]), /* @__PURE__ */ (0, q.jsx)(Vl.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: i ?? f,
		children: /* @__PURE__ */ (0, q.jsx)(hc, {
			asChild: !0,
			...s,
			focusable: !r,
			children: /* @__PURE__ */ (0, q.jsx)(H.div, {
				role: "menuitem",
				"data-highlighted": u ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...a,
				ref: l,
				onPointerMove: V(e.onPointerMove, Qu((e) => {
					r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: V(e.onPointerLeave, Qu((e) => o.onItemLeave(e))),
				onFocus: V(e.onFocus, () => d(!0)),
				onBlur: V(e.onBlur, () => d(!1))
			})
		})
	});
}), bu = "MenuCheckboxItem", xu = W.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, q.jsx)(ku, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, q.jsx)(vu, {
			role: "menuitemcheckbox",
			"aria-checked": Gu(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Ku(n),
			onSelect: V(i.onSelect, () => r?.(Gu(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
xu.displayName = bu;
var Su = "MenuRadioGroup", [Cu, wu] = Wl(Su, {
	value: void 0,
	onValueChange: () => {}
}), Tu = W.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = yi(r);
	return /* @__PURE__ */ (0, q.jsx)(Cu, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, q.jsx)(pu, {
			...i,
			ref: t
		})
	});
});
Tu.displayName = Su;
var Eu = "MenuRadioItem", Du = W.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = wu(Eu, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, q.jsx)(ku, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, q.jsx)(vu, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Ku(a),
			onSelect: V(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Du.displayName = Eu;
var Ou = "MenuItemIndicator", [ku, Au] = Wl(Ou, { checked: !1 }), ju = W.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Au(Ou, n);
	return /* @__PURE__ */ (0, q.jsx)(Gs, {
		present: r || Gu(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, q.jsx)(H.span, {
			...i,
			ref: t,
			"data-state": Ku(a.checked)
		})
	});
});
ju.displayName = Ou;
var Mu = "MenuSeparator", Nu = W.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, q.jsx)(H.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Nu.displayName = Mu;
var Pu = "MenuArrow", Fu = W.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Kl(n);
	return /* @__PURE__ */ (0, q.jsx)(Vs, {
		...i,
		...r,
		ref: t
	});
});
Fu.displayName = Pu;
var Iu = "MenuSub", [Lu, Ru] = Wl(Iu), zu = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = Yl(Iu, t), o = Kl(t), [s, c] = W.useState(null), [l, u] = W.useState(null), d = yi(i);
	return W.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ (0, q.jsx)(Rs, {
		...o,
		children: /* @__PURE__ */ (0, q.jsx)(Jl, {
			scope: t,
			open: r,
			onOpenChange: d,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ (0, q.jsx)(Lu, {
				scope: t,
				contentId: ta(),
				triggerId: ta(),
				trigger: s,
				onTriggerChange: c,
				children: n
			})
		})
	});
};
zu.displayName = Iu;
var Bu = "MenuSubTrigger", Vu = W.forwardRef((e, t) => {
	let n = Yl(Bu, e.__scopeMenu), r = Zl(Bu, e.__scopeMenu), i = Ru(Bu, e.__scopeMenu), a = ou(Bu, e.__scopeMenu), o = W.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = W.useCallback(() => {
		o.current && window.clearTimeout(o.current), o.current = null;
	}, []);
	return W.useEffect(() => u, [u]), W.useEffect(() => {
		let e = s.current;
		return () => {
			window.clearTimeout(e), c(null);
		};
	}, [s, c]), /* @__PURE__ */ (0, q.jsx)(eu, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ (0, q.jsx)(yu, {
			id: i.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": i.contentId,
			"data-state": Wu(n.open),
			...e,
			ref: sn(t, i.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: V(e.onPointerMove, Qu((t) => {
				a.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !o.current && (a.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
					n.onOpenChange(!0), u();
				}, 100));
			})),
			onPointerLeave: V(e.onPointerLeave, Qu((e) => {
				u();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", o = i ? -5 : 5, c = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					a.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + o,
								y: e.clientY
							},
							{
								x: c,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: c,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(s.current), s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300);
				} else {
					if (a.onTriggerLeave(e), e.defaultPrevented) return;
					a.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: V(e.onKeyDown, (t) => {
				let i = a.searchRef.current !== "";
				e.disabled || i && t.key === " " || Rl[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
Vu.displayName = Bu;
var Hu = "MenuSubContent", Uu = W.forwardRef((e, t) => {
	let n = ru(X, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = Yl(X, e.__scopeMenu), o = Zl(X, e.__scopeMenu), s = Ru(Hu, e.__scopeMenu), c = W.useRef(null), l = U(t, c);
	return /* @__PURE__ */ (0, q.jsx)(Vl.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, q.jsx)(Gs, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, q.jsx)(Vl.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, q.jsx)(du, {
					id: s.contentId,
					"aria-labelledby": s.triggerId,
					...i,
					ref: l,
					align: "start",
					side: o.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						o.isUsingKeyboardRef.current && c.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: V(e.onFocusOutside, (e) => {
						e.target !== s.trigger && a.onOpenChange(!1);
					}),
					onEscapeKeyDown: V(e.onEscapeKeyDown, (e) => {
						o.onClose(), e.preventDefault();
					}),
					onKeyDown: V(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = zl[o.dir].includes(e.key);
						t && n && (a.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
Uu.displayName = Hu;
function Wu(e) {
	return e ? "open" : "closed";
}
function Gu(e) {
	return e === "indeterminate";
}
function Ku(e) {
	return Gu(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function qu(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ju(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Yu(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Ju(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Xu(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Zu(e, t) {
	return t ? Xu({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Qu(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $u = Ql, ed = eu, td = iu, nd = su, rd = pu, id = hu, ad = vu, od = xu, sd = Tu, cd = Du, ld = ju, ud = Nu, dd = Fu, fd = zu, pd = Vu, md = Uu, hd = "ContextMenu", [gd, _d] = rn(hd, [Gl]), Z = Gl(), [vd, yd] = gd(hd), bd = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: a = !0 } = e, [o, s] = W.useState(!1), c = Z(t), l = yi(r), u = W.useCallback((e) => {
		s(e), l(e);
	}, [l]);
	return /* @__PURE__ */ (0, q.jsx)(vd, {
		scope: t,
		open: o,
		onOpenChange: u,
		modal: a,
		children: /* @__PURE__ */ (0, q.jsx)($u, {
			...c,
			dir: i,
			open: o,
			onOpenChange: u,
			modal: a,
			children: n
		})
	});
};
bd.displayName = hd;
var xd = "ContextMenuTrigger", Sd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, disabled: r = !1, ...i } = e, a = yd(xd, n), o = Z(n), s = W.useRef({
		x: 0,
		y: 0
	}), c = W.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...s.current
	}) }), l = W.useRef(0), u = W.useCallback(() => window.clearTimeout(l.current), []), d = (e) => {
		s.current = {
			x: e.clientX,
			y: e.clientY
		}, a.onOpenChange(!0);
	};
	return W.useEffect(() => u, [u]), W.useEffect(() => void (r && u()), [r, u]), /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [/* @__PURE__ */ (0, q.jsx)(ed, {
		...o,
		virtualRef: c
	}), /* @__PURE__ */ (0, q.jsx)(H.span, {
		"data-state": a.open ? "open" : "closed",
		"data-disabled": r ? "" : void 0,
		...i,
		ref: t,
		style: {
			WebkitTouchCallout: "none",
			...e.style
		},
		onContextMenu: r ? e.onContextMenu : V(e.onContextMenu, (e) => {
			u(), d(e), e.preventDefault();
		}),
		onPointerDown: r ? e.onPointerDown : V(e.onPointerDown, Zd((e) => {
			u(), l.current = window.setTimeout(() => d(e), 700);
		})),
		onPointerMove: r ? e.onPointerMove : V(e.onPointerMove, Zd(u)),
		onPointerCancel: r ? e.onPointerCancel : V(e.onPointerCancel, Zd(u)),
		onPointerUp: r ? e.onPointerUp : V(e.onPointerUp, Zd(u))
	})] });
});
Sd.displayName = xd;
var Cd = "ContextMenuPortal", wd = (e) => {
	let { __scopeContextMenu: t, ...n } = e, r = Z(t);
	return /* @__PURE__ */ (0, q.jsx)(td, {
		...r,
		...n
	});
};
wd.displayName = Cd;
var Td = "ContextMenuContent", Ed = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = yd(Td, n), a = Z(n), o = W.useRef(!1);
	return /* @__PURE__ */ (0, q.jsx)(nd, {
		...a,
		...r,
		ref: t,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), !t.defaultPrevented && o.current && t.preventDefault(), o.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), !t.defaultPrevented && !i.modal && (o.current = !0);
		},
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Ed.displayName = Td;
var Dd = "ContextMenuGroup", Od = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(rd, {
		...i,
		...r,
		ref: t
	});
});
Od.displayName = Dd;
var kd = "ContextMenuLabel", Ad = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(id, {
		...i,
		...r,
		ref: t
	});
});
Ad.displayName = kd;
var jd = "ContextMenuItem", Md = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(ad, {
		...i,
		...r,
		ref: t
	});
});
Md.displayName = jd;
var Nd = "ContextMenuCheckboxItem", Pd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(od, {
		...i,
		...r,
		ref: t
	});
});
Pd.displayName = Nd;
var Fd = "ContextMenuRadioGroup", Id = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(sd, {
		...i,
		...r,
		ref: t
	});
});
Id.displayName = Fd;
var Ld = "ContextMenuRadioItem", Rd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(cd, {
		...i,
		...r,
		ref: t
	});
});
Rd.displayName = Ld;
var zd = "ContextMenuItemIndicator", Bd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(ld, {
		...i,
		...r,
		ref: t
	});
});
Bd.displayName = zd;
var Vd = "ContextMenuSeparator", Hd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(ud, {
		...i,
		...r,
		ref: t
	});
});
Hd.displayName = Vd;
var Ud = "ContextMenuArrow", Wd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(dd, {
		...i,
		...r,
		ref: t
	});
});
Wd.displayName = Ud;
var Gd = "ContextMenuSub", Kd = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = Z(t), [s, c] = cn({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: Gd
	});
	return /* @__PURE__ */ (0, q.jsx)(fd, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
Kd.displayName = Gd;
var qd = "ContextMenuSubTrigger", Jd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(pd, {
		...i,
		...r,
		ref: t
	});
});
Jd.displayName = qd;
var Yd = "ContextMenuSubContent", Xd = W.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, q.jsx)(md, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Xd.displayName = Yd;
function Zd(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var Qd = bd, $d = Sd, ef = wd, tf = Ed, nf = Md;
//#endregion
//#region src/hooks/useLocalFoundryTheme.ts
function rf(e) {
	let t = e?.closest(".themed:is(.theme-dark, .theme-light)"), n = "theme-light";
	return t && t.classList.contains("theme-dark") && (n = "theme-dark"), [t instanceof HTMLElement ? t : null, n];
}
function af() {
	let e = (0, W.useRef)(null), [t, n] = (0, W.useState)("theme-light");
	return (0, W.useLayoutEffect)(() => {
		let [t, r] = rf(e.current);
		if (n(r), e.current === null || t === null) return;
		let i = new MutationObserver((t) => {
			let [r, i] = rf(e.current);
			n(i);
		});
		return i.observe(t, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => i.disconnect();
	}, [e]), [t, e];
}
//#endregion
//#region src/components/inputs/NativeMenu/nativeMenuContentStyles.ts
var of = Ae`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, sf = /* @__PURE__ */ me({
	"&.theme-dark": {
		"--background-color": "var(--color-cool-5)",
		"--border-color": "var(--color-cool-3)",
		"--text-color": "var(--color-text-secondary)",
		"--hover-text-color": "var(--color-text-emphatic)",
		"--group-separator": "var(--color-cool-4)",
		"--hover-entry-border": "var(--color-cool-4)",
		"--hover-entry-background": "var(--color-dark-1)"
	},
	"&.theme-light": {
		"--background-color": "#d9d8c8",
		"--border-color": "#999",
		"--text-color": "var(--color-text-secondary)",
		"--hover-text-color": "var(--color-text-emphatic)",
		"--group-separator": "#999",
		"--hover-entry-border": "#999",
		"--hover-entry-background": "#f0f0e0"
	},
	height: "max-content",
	minWidth: "150px",
	maxWidth: "360px",
	background: "var(--background-color)",
	border: "1px solid var(--border-color)",
	borderRadius: "5px",
	color: "var(--text-color)",
	width: "100%",
	zIndex: "calc(var(--z-index-app) + 1)",
	boxShadow: "0 3px 6px rgba(0, 0, 0, 0.45)",
	display: "grid",
	gridTemplateColumns: "max-content 1fr",
	transformOrigin: "var(--radix-context-menu-content-transform-origin,\n      var(--radix-dropdown-menu-content-transform-origin))",
	animation: `${of} 100ms ease-out`
}, "label:nativeMenuContentStyles"), cf = /* @__PURE__ */ (0, W.createContext)(null), lf = ({ children: e, kind: t }) => /* @__PURE__ */ I(cf.Provider, {
	value: t,
	children: e
}), uf = () => {
	let e = (0, W.useContext)(cf);
	if (!e) throw Error("NativeMenuKindContext not found");
	return e;
}, df = ({ children: e }) => {
	let [t, n] = af();
	return /* @__PURE__ */ R(lf, {
		kind: "context",
		children: [/* @__PURE__ */ I("span", {
			ref: n,
			css: { display: "none" }
		}), /* @__PURE__ */ I(ef, { children: /* @__PURE__ */ I(tf, {
			className: Re("themed", t, sf),
			children: e
		}) })]
	});
}, ff = "DropdownMenu", [pf, mf] = rn(ff, [Gl]), Q = Gl(), [hf, gf] = pf(ff), _f = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = Q(t), l = W.useRef(null), [u, d] = cn({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: ff
	});
	return /* @__PURE__ */ (0, q.jsx)(hf, {
		scope: t,
		triggerId: ta(),
		triggerRef: l,
		contentId: ta(),
		open: u,
		onOpenChange: d,
		onOpenToggle: W.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ (0, q.jsx)($u, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
};
_f.displayName = ff;
var vf = "DropdownMenuTrigger", yf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = gf(vf, n), o = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(ed, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, q.jsx)(H.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: sn(t, a.triggerRef),
			onPointerDown: V(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: V(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
yf.displayName = vf;
var bf = "DropdownMenuPortal", xf = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Q(t);
	return /* @__PURE__ */ (0, q.jsx)(td, {
		...r,
		...n
	});
};
xf.displayName = bf;
var Sf = "DropdownMenuContent", Cf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = gf(Sf, n), a = Q(n), o = W.useRef(!1);
	return /* @__PURE__ */ (0, q.jsx)(nd, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: V(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: V(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Cf.displayName = Sf;
var wf = "DropdownMenuGroup", Tf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(rd, {
		...i,
		...r,
		ref: t
	});
});
Tf.displayName = wf;
var Ef = "DropdownMenuLabel", Df = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(id, {
		...i,
		...r,
		ref: t
	});
});
Df.displayName = Ef;
var Of = "DropdownMenuItem", kf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(ad, {
		...i,
		...r,
		ref: t
	});
});
kf.displayName = Of;
var Af = "DropdownMenuCheckboxItem", jf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(od, {
		...i,
		...r,
		ref: t
	});
});
jf.displayName = Af;
var Mf = "DropdownMenuRadioGroup", Nf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(sd, {
		...i,
		...r,
		ref: t
	});
});
Nf.displayName = Mf;
var Pf = "DropdownMenuRadioItem", Ff = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(cd, {
		...i,
		...r,
		ref: t
	});
});
Ff.displayName = Pf;
var If = "DropdownMenuItemIndicator", Lf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(ld, {
		...i,
		...r,
		ref: t
	});
});
Lf.displayName = If;
var Rf = "DropdownMenuSeparator", zf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(ud, {
		...i,
		...r,
		ref: t
	});
});
zf.displayName = Rf;
var Bf = "DropdownMenuArrow", Vf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(dd, {
		...i,
		...r,
		ref: t
	});
});
Vf.displayName = Bf;
var Hf = "DropdownMenuSubTrigger", Uf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(pd, {
		...i,
		...r,
		ref: t
	});
});
Uf.displayName = Hf;
var Wf = "DropdownMenuSubContent", Gf = W.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Q(n);
	return /* @__PURE__ */ (0, q.jsx)(md, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Gf.displayName = Wf;
var Kf = _f, qf = yf, Jf = xf, Yf = Cf, Xf = Df, Zf = kf, Qf = Vf, $f = /* @__PURE__ */ (0, W.memo)(({ className: e, children: t, label: n }) => {
	let [r, i] = af();
	return /* @__PURE__ */ R(Kf, {
		modal: !1,
		children: [/* @__PURE__ */ I(qf, {
			className: Re("inline-control", e),
			children: n ?? /* @__PURE__ */ I(Sn, {})
		}), /* @__PURE__ */ R(lf, {
			kind: "dropdown",
			children: [/* @__PURE__ */ I("span", {
				ref: i,
				css: { display: "none" }
			}), /* @__PURE__ */ I(Jf, { children: /* @__PURE__ */ R(Yf, {
				avoidCollisions: !0,
				collisionBoundary: document.body,
				collisionPadding: 10,
				align: "center",
				side: "bottom",
				className: Re("themed", r, sf),
				children: [t, /* @__PURE__ */ I(Qf, {
					width: 10,
					height: 10,
					css: { fill: "var(--border-color)" }
				})]
			}) })]
		})]
	});
});
$f.displayName = "NativeDropdownMenu";
//#endregion
//#region src/components/inputs/NativeMenu/NativeDualFunctionMenu.tsx
var ep = ({ children: e, className: t, label: n }) => /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ I($f, {
	className: t,
	label: n,
	children: e
}), /* @__PURE__ */ I(df, { children: e })] }), $ = ({ children: e, onSelect: t, icon: n }) => /* @__PURE__ */ R(uf() === "dropdown" ? Zf : nf, {
	css: {
		border: "1px solid transparent",
		padding: "8px",
		lineHeight: "15px",
		fontSize: "var(--font-size-12)",
		cursor: "var(--cursor-pointer)",
		transition: "0.1s",
		display: "grid",
		gridTemplateColumns: "subgrid",
		gridColumn: "1/-1",
		columnGap: "0.5em",
		":hover": {
			border: "1px solid var(--hover-entry-border)",
			background: "var(--hover-entry-background)",
			color: "var(--hover-text-color)"
		}
	},
	onSelect: t,
	children: [/* @__PURE__ */ I("span", {
		css: { marginRight: "0.5em" },
		children: n
	}), e]
}), tp = ({ children: e }) => /* @__PURE__ */ I(Xf, {
	asChild: !0,
	children: /* @__PURE__ */ I("h3", {
		css: {
			padding: "0.5em 0.5em 0.5em 0.5em",
			gridColumn: "1 / -1",
			fontSize: "1.2em",
			fontWeight: "bold",
			margin: 0
		},
		children: e
	})
}), np = /* @__PURE__ */ (0, W.memo)(function() {
	s(game);
	let { combatState: e, turnIds: t, isActiveUser: n, combat: r } = oi(), i = (0, W.useCallback)(() => {
		r.nextRound();
	}, [r]), a = (0, W.useCallback)(() => {
		r.previousRound();
	}, [r]), o = (0, W.useCallback)(() => {
		r.nextTurn();
	}, [r]), c = (0, W.useCallback)(() => {
		r.previousTurn();
	}, [r]), l = (0, W.useCallback)(() => {
		r.startCombat();
	}, [r]);
	return /* @__PURE__ */ I("nav", {
		className: "combat-controls",
		children: game.user.isGM ? /* @__PURE__ */ I(N, { children: e?.round ? /* @__PURE__ */ R(N, { children: [
			/* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-chevrons-left",
				onClick: a,
				"data-tooltip": "",
				"aria-label": K("COMBAT.RoundPrev")
			}),
			/* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-arrow-left",
				onClick: c,
				"data-tooltip": "",
				"aria-label": K("COMBAT.TurnPrev")
			}),
			/* @__PURE__ */ I("strong", {
				css: {
					flex: 1,
					display: "flex",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ R($f, {
					css: {
						flex: 1,
						minHeight: "var(--button-size)"
					},
					label: /* @__PURE__ */ R(N, { children: [ti("COMBAT.Round", { round: e.round.toString() }), /* @__PURE__ */ I(An, {})] }),
					children: [
						/* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(Cn, {}),
							onSelect: () => new Le().render({ force: !0 }),
							children: K("COMBAT.Settings")
						}),
						/* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(kn, {}),
							onSelect: () => {
								r.clearMovementHistories();
							},
							children: K("COMBAT.ClearMovementHistories")
						}),
						/* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(Dn, {}),
							onSelect: () => {
								r.resetAll();
							},
							children: K("COMBAT.InitiativeReset")
						}),
						ei(r) && /* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(qt, {}),
							onSelect: () => {
								r.system.sortCombatants();
							},
							children: K("investigator.SortCombatants")
						})
					]
				})
			}),
			/* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-arrow-right",
				onClick: o,
				"data-tooltip": "",
				"aria-label": K("COMBAT.TurnNext")
			}),
			/* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-chevrons-right",
				onClick: i,
				"data-tooltip": "",
				"aria-label": K("COMBAT.RoundNext")
			})
		] }) : /* @__PURE__ */ R("button", {
			type: "button",
			className: "combat-control combat-control-lg",
			onClick: l,
			disabled: (t.length ?? 0) === 0,
			css: { cursor: (t.length ?? 0) === 0 ? "not-allowed" : "pointer" },
			children: [/* @__PURE__ */ I(mi, {}), /* @__PURE__ */ I("span", { children: K("COMBAT.Begin") })]
		}) }) : game.user && /* @__PURE__ */ R(N, { children: [
			n && /* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-arrow-left",
				onClick: c,
				"data-tooltip": "",
				"aria-label": K("COMBAT.TurnPrev")
			}),
			/* @__PURE__ */ I("strong", {
				css: {
					flex: 1,
					display: "flex",
					justifyContent: "center",
					color: "var(--color-text-primary)"
				},
				children: e?.round ? ti("COMBAT.Round", { round: e?.round.toString() }) : K("COMBAT.NotStarted")
			}),
			n && /* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-arrow-right",
				onClick: o,
				"data-tooltip": "",
				"aria-label": K("COMBAT.TurnNext")
			})
		] })
	});
}), rp = { turnInfo: new Ve(new $e({ turnsRemaining: new Xe({
	nullable: !1,
	required: !0,
	initial: 0
}) }, {
	initial: { turnsRemaining: 0 },
	nullable: !0,
	required: !1
}), {
	initial: [],
	nullable: !1,
	required: !0
}) }, ip = class extends D {
	static defineSchema() {
		return rp;
	}
	get combat() {
		if (!this.parent.parent) throw Error(`Tried to use combatant ${this.parent.name} (${this.parent.id}) outside a combat`);
		return this.parent.parent;
	}
	get defaultPassingTurns() {
		return this.parent.actor && lt(this.parent.actor) ? this.parent.actor.system.initiativePassingTurns ?? 1 : 1;
	}
	get passingTurnsRemaining() {
		let e = Math.max(0, this.combat.round - 1);
		return this.turnInfo[e] === void 0 ? (s(game), game.user.isActiveGM && this.resetPassingTurns(), this.defaultPassingTurns) : this.turnInfo[e]?.turnsRemaining ?? 0;
	}
	async resetPassingTurns() {
		let e = Math.max(0, this.combat.round - 1), t = [...this.turnInfo];
		t[e] = {
			...t[e],
			turnsRemaining: this.defaultPassingTurns
		}, await this.parent.update({ system: { turnInfo: t } });
	}
	async addPassingTurn() {
		let e = Math.max(0, this.combat.round - 1), t = (this.turnInfo[e]?.turnsRemaining ?? 0) + 1, n = [...this.turnInfo];
		n[e] = {
			...n[e],
			turnsRemaining: t
		}, await this.parent.update({ system: { turnInfo: n } });
	}
	async removePassingTurn() {
		let e = Math.max(0, this.combat.round - 1), t = Math.max(0, (this.turnInfo[e]?.turnsRemaining ?? 0) - 1), n = [...this.turnInfo];
		n[e] = {
			...n[e],
			turnsRemaining: t
		}, await this.parent.update({ system: { turnInfo: n } });
	}
};
function ap(e) {
	return e instanceof Br && e.type === "turnPassing";
}
function op(e) {
	if (!ap(e)) throw Error("Expected combatant to be a TurnPassingCombatant");
}
//#endregion
//#region src/components/inputs/NativeMenu/NativeContextMenuWrapper.tsx
var sp = /* @__PURE__ */ (0, W.memo)(function({ children: e }) {
	return /* @__PURE__ */ I(Qd, { children: /* @__PURE__ */ I($d, {
		asChild: !0,
		children: e
	}) });
}), cp = /* @__PURE__ */ (0, W.createContext)(null), lp = () => {
	let e = (0, W.useContext)(cp);
	if (!e) throw Error("useCombatantContext must be used within a CombatantProvider");
	return e;
};
function up() {
	let e = (0, W.useContext)(cp);
	if (ap(e?.combatant)) return e;
	throw Error("useTurnPassingCombatantContext used with non-turn-passing combat");
}
function dp({ children: e, value: t }) {
	return /* @__PURE__ */ I(cp.Provider, {
		value: t,
		children: e
	});
}
var fp = (e) => typeof e == "object" && e && "value" in e && typeof e.value == "number" ? e.value : typeof e == "number" ? e : 0;
function pp(e) {
	let [t, n] = (0, W.useState)(() => {
		let t = e.toJSON();
		return t.img = e.img, t.name = e.name, t;
	}), [r, i] = (0, W.useState)(() => fp(e.resource));
	(0, W.useEffect)(() => ni("updateCombatant", (t, r, a, o) => {
		t.id === e.id && (n((e) => rt(e, (e) => {
			foundry.utils.mergeObject(e, r), e.img = t.img, e.name = t.name;
		})), i(fp(t.resource)));
	}), [e]);
	let [a, o] = (0, W.useState)([]);
	return (0, W.useEffect)(() => e.actor?.registerCombatantEffectsHandler((e) => {
		o(e);
	}), [e]), (0, W.useEffect)(() => e.registerResourceHandler((e) => {
		i(fp(e));
	}), [e]), (0, W.useMemo)(() => ({
		combatant: e,
		combatantState: t,
		effects: a,
		resource: r
	}), [
		e,
		t,
		a,
		r
	]);
}
//#endregion
//#region src/components/combat/CombatantRow/BottomRow.tsx
var mp = /* @__PURE__ */ (0, W.memo)(function() {
	s(game);
	let e = game.i18n.localize.bind(game.i18n), { combatantState: t, resource: n, effects: r } = lp(), i = (0, W.useMemo)(() => {
		if (!r.length) return "";
		let e = document.createElement("ul");
		e.classList.add("effects-tooltip", "plain");
		for (let t of r) {
			let n = document.createElement("img");
			n.src = t.img ?? "", n.alt = t.name;
			let r = document.createElement("span");
			r.textContent = t.name;
			let i = document.createElement("li");
			i.append(n, r), e.append(i);
		}
		return e.outerHTML;
	}, [r]);
	return /* @__PURE__ */ R("div", {
		className: "combatant-controls",
		children: [
			n !== null && /* @__PURE__ */ I("div", {
				className: "token-resource",
				children: /* @__PURE__ */ I("span", {
					className: "resource",
					children: n
				})
			}),
			game.user.isGM && /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ I("button", {
				type: "button",
				className: Re("inline-control combatant-control icon fa-solid", {
					"fa-eye-slash active": t.hidden,
					"fa-eye": !t.hidden
				}),
				"data-action": "toggleHidden",
				"data-tooltip": "",
				"aria-label": e("COMBAT.ToggleVis")
			}), /* @__PURE__ */ I("button", {
				type: "button",
				className: Re("inline-control combatant-control icon fa-solid fa-skull", { active: t.defeated }),
				"data-action": "toggleDefeated",
				"data-tooltip": "",
				"aria-label": e("COMBAT.ToggleDead")
			})] }),
			/* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combatant-control icon fa-solid fa-bullseye-arrow",
				"data-action": "pingCombatant",
				"data-tooltip": "",
				"aria-label": e("COMBAT.PingCombatant")
			}),
			/* @__PURE__ */ I("div", {
				className: "token-effects",
				"data-tooltip-html": i,
				children: r.map((e, t) => e.img && /* @__PURE__ */ I("img", {
					alt: e.name,
					className: "token-effect",
					src: e.img
				}, t))
			})
		]
	});
});
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/tb/index.mjs
function hp(e) {
	return Kt({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [
			{
				tag: "path",
				attr: { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" },
				child: []
			},
			{
				tag: "path",
				attr: { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" },
				child: []
			}
		]
	})(e);
}
//#endregion
//#region src/components/combat/CombatantRow/Grip.tsx
var gp = /* @__PURE__ */ (0, W.memo)(({ listeners: e, setActivatorNodeRef: t }) => /* @__PURE__ */ I("div", {
	className: "drag-handle",
	ref: t,
	...e,
	css: { cursor: "row-resize" },
	children: /* @__PURE__ */ I(hp, { css: { marginTop: "calc(calc(var(--sidebar-item-height) / 2) - 6px)" } })
}));
gp.displayName = "Grip";
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/hi/index.mjs
function _p(e) {
	return Kt({
		tag: "svg",
		attr: {
			viewBox: "0 0 20 20",
			fill: "currentColor",
			"aria-hidden": "true"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
				clipRule: "evenodd"
			},
			child: []
		}]
	})(e);
}
//#endregion
//#region src/components/combat/CombatantRow/useInititative.ts
var vp = (e) => {
	s(game);
	let t = (0, W.useCallback)((t) => {
		if (!(t.currentTarget instanceof HTMLElement)) return;
		let n = t.currentTarget.getBoundingClientRect();
		new We({
			position: {
				top: Math.min(n.top, window.innerHeight - 350),
				left: window.innerWidth - 720,
				width: 400
			},
			document: e
		}).render({ force: !0 });
	}, [e]), n = (0, W.useCallback)(() => {
		e.delete();
	}, [e]), r = game.i18n.localize.bind(game.i18n);
	return {
		onConfigureCombatant: t,
		onRemoveCombatant: n,
		openSheet: (0, W.useCallback)(() => {
			let t = e.token?.actor?.sheet;
			Vt(t), t.render({ force: !0 });
		}, [e.token?.actor?.sheet]),
		localize: r
	};
}, yp = /* @__PURE__ */ (0, W.memo)(function() {
	s(game);
	let { combatant: e } = lp();
	Gr(e);
	let t = e.combat;
	if (t === null) throw Error("ClassicInitiative must be rendered with a combatant that is in combat.");
	let [n, r] = (0, W.useState)(e.system.toJSON());
	(0, W.useEffect)(() => ni("updateCombatant", (t, n) => {
		t === e && "system" in n && r((e) => {
			let t = n.system;
			return t ? rt(e, (e) => {
				foundry.utils.mergeObject(e, t);
			}) : e;
		});
	}), [e]);
	let { onConfigureCombatant: i, onRemoveCombatant: a, localize: o, openSheet: c } = vp(e), l = (0, W.useRef)(null), u = (n.initiative ?? 0).toString();
	(0, W.useEffect)(() => {
		l.current && document.activeElement !== l.current && (l.current.value = u);
	}, [u]);
	let d = (0, W.useCallback)(() => {
		e.system.resetInitiative();
	}, [e]), f = () => {
		let n = l.current?.value ?? "", r = parseInt(n, 10);
		isNaN(r) || t.updateEmbeddedDocuments("Combatant", [{
			_id: e.id,
			system: { initiative: r }
		}]);
	};
	return /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ I("form", {
		onSubmit: (e) => {
			e.preventDefault(), f();
		},
		children: /* @__PURE__ */ I("input", {
			ref: l,
			type: "text",
			inputMode: "numeric",
			pattern: "^[+=\\-]?\\d*",
			defaultValue: u,
			"aria-label": "Initiative Score",
			disabled: !game.user.isGM,
			onBlur: f,
			css: {
				width: "2em",
				padding: "0.1em 0.2em",
				height: "1.8em",
				textAlign: "center",
				marginLeft: "0.5em",
				marginRight: "0.5em"
			}
		})
	}), game.user.isGM && /* @__PURE__ */ I(N, { children: /* @__PURE__ */ R(ep, {
		css: {
			flex: 0,
			padding: "0 0.3em"
		},
		children: [
			/* @__PURE__ */ I(tp, { children: e.name }),
			/* @__PURE__ */ I($, {
				icon: /* @__PURE__ */ I(On, {}),
				onSelect: i,
				children: o("COMBAT.CombatantUpdate")
			}),
			/* @__PURE__ */ I($, {
				icon: /* @__PURE__ */ I(Dn, {}),
				onSelect: d,
				children: o("investigator.RefreshInitiative")
			}),
			/* @__PURE__ */ I($, {
				icon: /* @__PURE__ */ I(_p, {}),
				onSelect: c,
				children: o("investigator.OpenCharacterSheet")
			}),
			/* @__PURE__ */ I($, {
				icon: /* @__PURE__ */ I(Tn, {}),
				onSelect: a,
				children: o("COMBAT.CombatantRemove")
			})
		]
	}) })] });
});
yp.displayName = "ClassicInitiative";
//#endregion
//#region src/components/combat/CombatantRow/TurnPassingInitiative.tsx
var bp = "3em", xp = "oklch(0.2 0.3 130)", Sp = "oklch(0.8 0.3 130)", Cp = /* @__PURE__ */ ue({
	"0%": { backgroundPositionX: "0em" },
	"100%": { backgroundPositionX: bp }
}, "label:scrollBg"), wp = /* @__PURE__ */ (0, W.memo)(function() {
	s(game);
	let { combatant: e, combatantState: t } = up(), { combatState: n, turnIds: r } = si();
	if (e.combat === null || n === null || t === null) throw Error("TurnPassingInitiative must be rendered with a combatant that is in combat.");
	let { onConfigureCombatant: i, onRemoveCombatant: a, localize: o, openSheet: c } = vp(e), l = (0, W.useCallback)(() => {
		s(game), ne(e.id);
	}, [e.id]), u = (0, W.useCallback)(() => {
		op(e), e.system.addPassingTurn();
	}, [e]), d = (0, W.useCallback)(() => {
		op(e), e.system.removePassingTurn();
	}, [e]), f = (n.turn === null ? null : r[n.turn]) === e.id, p = e.system.passingTurnsRemaining <= 0;
	return /* @__PURE__ */ R(N, { children: [
		/* @__PURE__ */ R("div", {
			css: {
				flex: 0,
				padding: "0.3em 01em 0 0"
			},
			children: [
				e.system.passingTurnsRemaining,
				"/",
				e.system.defaultPassingTurns
			]
		}),
		/* @__PURE__ */ I("div", {
			css: { flex: 0 },
			children: /* @__PURE__ */ R("button", {
				className: "inline-control",
				css: {
					display: "block",
					fontSize: "1.4em",
					margin: 0,
					padding: "0 0.2em",
					color: "var(--color-text-secondary)",
					":hover": { color: "var(--button-hover-text-color)" }
				},
				title: L("Turn"),
				onClick: l,
				children: [
					f && /* @__PURE__ */ I("i", {
						className: "fas fa-play",
						css: {
							color: "transparent",
							backgroundImage: `repeating-linear-gradient(to right, ${xp}, ${Sp} 50%, ${xp} 100%)`,
							backgroundSize: bp,
							backgroundPositionX: 0,
							backgroundPositionY: 0,
							backgroundClip: "text",
							animation: `${Cp} 2000ms infinite`,
							animationTimingFunction: "linear"
						}
					}),
					!f && !p && /* @__PURE__ */ I("i", { className: "fas fa-pause" }),
					!f && p && /* @__PURE__ */ I("i", { className: "fas fa-check" })
				]
			})
		}),
		game.user.isGM && /* @__PURE__ */ R(ep, {
			css: {
				flex: 0,
				padding: "0 0.3em"
			},
			children: [
				/* @__PURE__ */ I(tp, { children: e.name }),
				/* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(On, {}),
					onSelect: i,
					children: o("COMBAT.CombatantUpdate")
				}),
				/* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(En, {}),
					onSelect: u,
					children: o("investigator.AddTurn")
				}),
				/* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(Bn, {}),
					onSelect: d,
					children: o("investigator.RemoveTurn")
				}),
				/* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(_p, {}),
					onSelect: c,
					children: o("investigator.OpenCharacterSheet")
				}),
				/* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(Tn, {}),
					onSelect: a,
					children: o("COMBAT.CombatantRemove")
				})
			]
		})
	] });
}), Tp = /* @__PURE__ */ (0, W.memo)(function() {
	let { combatant: e, combatantState: t } = lp();
	return /* @__PURE__ */ R("div", {
		className: "top-row",
		css: {
			display: "flex",
			alignItems: "start",
			justifyContent: "space-between"
		},
		children: [/* @__PURE__ */ I("strong", {
			className: "name",
			css: {
				flex: 1,
				overflow: "hidden",
				textOverflow: "ellipsis"
			},
			children: t.name
		}), ap(e) ? /* @__PURE__ */ I(wp, {}) : Wr(e) ? /* @__PURE__ */ I(yp, {}) : null]
	});
}), Ep = /* @__PURE__ */ (0, W.memo)(({ setActivatorNodeRef: e, listeners: t }) => {
	s(game);
	let { combatantState: n } = lp();
	return /* @__PURE__ */ R(N, { children: [
		n.type === "classic" && game.user.isGM && /* @__PURE__ */ I(gp, {
			listeners: t,
			setActivatorNodeRef: e
		}),
		/* @__PURE__ */ I("img", {
			className: "token-image",
			src: n.img || CONST.DEFAULT_TOKEN,
			alt: n.name,
			loading: "lazy"
		}),
		/* @__PURE__ */ R("div", {
			css: {
				overflow: "hidden",
				flex: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignSelf: "stretch"
			},
			children: [/* @__PURE__ */ I(Tp, {}), /* @__PURE__ */ I(mp, {})]
		})
	] });
});
Ep.displayName = "Content";
//#endregion
//#region src/components/combat/CombatantRow/CombatantRow.tsx
var Dp = (e) => Gn({
	...e,
	wasDragging: !0
}), Op = {
	duration: 400,
	easing: "linear"
}, kp = /* @__PURE__ */ (0, W.memo)(({ combatant: e, index: t }) => {
	let { attributes: n, listeners: r, setNodeRef: i, transform: a, transition: o, setActivatorNodeRef: c } = Vn({
		id: e.id ?? "",
		transition: Op,
		animateLayoutChanges: Dp
	});
	s(game);
	let l = e.combat;
	if (l === null) throw Error("CombatantRow must be rendered with a combatant that is in combat.");
	if (e.id === null) throw Error("CombatantRow must be rendered with a combatant that has an id.");
	let u = pp(e), d = (l.turn === null ? null : l.turns[l.turn]?.id ?? null) === e.id, f = ap(e) && e.system.passingTurnsRemaining <= 0;
	return /* @__PURE__ */ I(dp, {
		value: u,
		children: /* @__PURE__ */ I(sp, { children: /* @__PURE__ */ I("li", {
			ref: i,
			className: Re("combatant", {
				active: l.turn === t,
				hide: u.combatantState.hidden,
				defeated: u.combatantState.defeated
			}),
			...n,
			"data-combatant-id": e.id,
			style: {
				transform: Yn.Translate.toString(a),
				transition: o,
				opacity: f && !d ? .7 : 1
			},
			css: { alignItems: "start" },
			children: /* @__PURE__ */ I(Ep, {
				setActivatorNodeRef: c,
				listeners: r
			})
		}) })
	});
});
kp.displayName = "CombatantRow";
//#endregion
//#region src/components/combat/CombatantList.tsx
var Ap = { droppable: { strategy: Ln.Always } }, jp = /* @__PURE__ */ (0, W.memo)(function() {
	let { combat: e, turnIds: t } = ai();
	if (e === null) throw Error("No active combat found");
	let n = Nn(Xn(jn), Xn(Rn, { coordinateGetter: Pn })), [r, i] = (0, W.useState)([]);
	return (0, W.useEffect)(() => {
		i(t);
	}, [t]), /* @__PURE__ */ I(Un, {
		sensors: n,
		collisionDetection: qn,
		onDragEnd: (0, W.useCallback)((t) => {
			if (!ei(e)) return;
			let { active: n, over: a, delta: { y: o } } = t;
			if (a === null) return;
			n.id !== a.id && e?.system.moveCombatant(n.id.toString(), a.id.toString(), o < 0 ? "up" : "down");
			let s = r.filter((e) => e !== n.id), c = o < 0 ? 0 : 1, l = s.indexOf(a.id.toString()) + c;
			s.splice(l, 0, n.id.toString()), i(s);
		}, [e, r]),
		modifiers: [In, Fn],
		measuring: Ap,
		children: /* @__PURE__ */ I(Mn, {
			items: r,
			strategy: Kn,
			children: /* @__PURE__ */ I("div", {
				className: "combat-tracker",
				css: { flex: 1 },
				children: /* @__PURE__ */ I("ol", {
					className: "plain investigator-combatant-list",
					css: {
						position: "relative",
						flex: 1
					},
					children: r.map((t) => {
						let n = e.turns.find((e) => e.id === t);
						return n ? /* @__PURE__ */ I(kp, {
							index: e.turns.findIndex((e) => e.id === t),
							combatant: n
						}, t) : null;
					})
				})
			})
		})
	});
}), Mp = /* @__PURE__ */ (0, W.memo)(({ combatIndex: e, prevCombatId: t, nextCombatId: n }) => {
	s(game);
	let { combat: r } = ai(), i = Jr(r) ? hi : mi;
	return /* @__PURE__ */ R("nav", {
		className: "encounters tabbed",
		children: [
			game.user?.isGM && /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ I("button", {
				className: "inline-control icon fa-solid fa-plus",
				css: {
					minHeight: "var(--button-size)",
					paddingLeft: "1em",
					paddingRight: "1em"
				},
				"data-action": "createCombat",
				"data-tooltip": !0,
				"aria-label": "Create Encounter",
				title: K("COMBAT.Create")
			}), /* @__PURE__ */ R($f, {
				css: {
					minHeight: "var(--button-size)",
					paddingLeft: "0.1em",
					paddingRight: "0.1em"
				},
				label: /* @__PURE__ */ I(An, {}),
				children: [/* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(mi, {}),
					onSelect: async () => {
						await (await Combat.implementation.create({ type: "classic" }))?.activate({ render: !1 });
					},
					children: K("investigator.CreateClassicCombat")
				}), /* @__PURE__ */ I($, {
					icon: /* @__PURE__ */ I(hi, {}),
					onSelect: async () => {
						await (await Combat.implementation.create({ type: "turnPassing" }))?.activate({ render: !1 });
					},
					children: K("investigator.CreateTurnPassingCombat")
				})]
			})] }),
			/* @__PURE__ */ R("div", {
				className: "cycle-combats",
				children: [
					game.user?.isGM && /* @__PURE__ */ I("button", {
						type: "button",
						className: "inline-control icon fa-solid fa-caret-left",
						"data-action": "cycleCombat",
						"data-combat-id": t,
						"data-tooltip": "",
						"aria-label": "Activate Previous Encounter",
						disabled: !t
					}),
					/* @__PURE__ */ I("div", {
						className: "encounter-count",
						css: { color: "var(--color-text-secondary)" },
						children: /* @__PURE__ */ R("span", {
							className: "value",
							children: [
								/* @__PURE__ */ I(i, { css: { verticalAlign: "middle" } }),
								" ",
								(e + 1).toString()
							]
						})
					}),
					game.user?.isGM && /* @__PURE__ */ I("button", {
						type: "button",
						className: "inline-control icon fa-solid fa-caret-right",
						"data-action": "cycleCombat",
						"data-combat-id": n,
						disabled: !n,
						"data-tooltip": "",
						"aria-label": "Activate Next Encounter"
					})
				]
			}),
			" ",
			game.user?.isGM && /* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control icon fa-solid fa-trash",
				title: K("COMBAT.End"),
				onClick: () => {
					ke.confirm({
						window: { title: "COMBAT.EndTitle" },
						content: `<p>${game.i18n.localize("COMBAT.EndConfirmation")}</p>`,
						yes: { callback: () => {
							game?.combats.active?.delete();
						} },
						modal: !0
					});
				}
			})
		]
	});
});
Mp.displayName = "EncounterNav";
//#endregion
//#region node_modules/.pnpm/react-icons@5.6.0_react@19.2.4/node_modules/react-icons/pi/index.mjs
function Np(e) {
	return Kt({
		tag: "svg",
		attr: {
			viewBox: "0 0 256 256",
			fill: "currentColor"
		},
		child: [{
			tag: "path",
			attr: { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.44,89.44,0,0,1-13,46.58l-71-49.7V38.2A90.12,90.12,0,0,1,218,128ZM122,38.2v86.68l-71,49.7A90,90,0,0,1,122,38.2ZM57.92,184.4,122,139.53V217.8A89.93,89.93,0,0,1,57.92,184.4ZM134,217.8V139.53l64.08,44.87A89.93,89.93,0,0,1,134,217.8Z" },
			child: []
		}]
	})(e);
}
function Pp(e) {
	return Kt({
		tag: "svg",
		attr: {
			viewBox: "0 0 256 256",
			fill: "currentColor"
		},
		child: [{
			tag: "path",
			attr: { d: "M195.51,62.66,212.44,44A6,6,0,1,0,203.56,36L186.63,54.58A94,94,0,0,0,60.49,193.34L43.56,212A6,6,0,0,0,52.44,220l16.93-18.62A94,94,0,0,0,195.51,62.66ZM46,128A81.93,81.93,0,0,1,178.53,63.49L68.59,184.43A81.69,81.69,0,0,1,46,128Zm82,82a81.57,81.57,0,0,1-50.53-17.49L187.41,71.57A81.94,81.94,0,0,1,128,210Z" },
			child: []
		}]
	})(e);
}
//#endregion
//#region src/components/combat/NoCombatants.tsx
var Fp = /* @__PURE__ */ (0, W.memo)(function() {
	return /* @__PURE__ */ R("div", {
		css: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			width: "100%",
			flexDirection: "column",
			textAlign: "center",
			color: "var(--color-text-secondary)"
		},
		children: [/* @__PURE__ */ I(Pp, { size: 100 }), /* @__PURE__ */ I("p", {
			css: {
				fontSize: "1.4em",
				fontWeight: "300"
			},
			children: K("investigator.NoParticipants")
		})]
	});
}), Ip = /* @__PURE__ */ (0, W.memo)(function() {
	return s(game), /* @__PURE__ */ R("div", {
		css: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			width: "100%",
			flexDirection: "column",
			textAlign: "center",
			color: "var(--color-text-secondary)"
		},
		children: [
			/* @__PURE__ */ I(Np, { size: 100 }),
			/* @__PURE__ */ I("p", {
				css: {
					fontSize: "1.4em",
					fontWeight: "300"
				},
				children: K("investigator.NoCombat")
			}),
			game.user.isGM && /* @__PURE__ */ R("button", {
				type: "button",
				css: {
					justifySelf: "stretch",
					width: "auto"
				},
				"data-action": "createCombat",
				children: [/* @__PURE__ */ I("i", {
					className: "fa-solid fa-plus",
					inert: !0
				}), /* @__PURE__ */ I("span", { children: K("COMBAT.Create") })]
			})
		]
	});
}), Lp = /* @__PURE__ */ ue({
	"0%": { backgroundColor: "transparent" },
	"100%": { backgroundColor: "oklch(from var(--button-hover-background-color) l c h / 0.5)" }
}, "label:throbbingBg"), Rp = /* @__PURE__ */ (0, W.memo)(function() {
	s(game);
	let { combatState: e, turnIds: t, combat: n } = si();
	if (n === null || e === null) throw Error("TurnPassingTurnNav must be rendered with a combat.");
	let r = (0, W.useMemo)(() => (t.length ?? 0) > 0 && t.every((e) => {
		let t = n.turns.find((t) => t.id === e);
		return ap(t) ? t.system.passingTurnsRemaining <= 0 : !1;
	}), [n.turns, t]), i = (0, W.useCallback)(() => {
		n.nextRound();
	}, [n]), a = (0, W.useCallback)(() => {
		n.previousRound();
	}, [n]), o = (0, W.useCallback)(() => {
		n.startCombat();
	}, [n]);
	return /* @__PURE__ */ I("nav", {
		className: "combat-controls",
		children: game.user.isGM ? /* @__PURE__ */ I(N, { children: e?.round ? /* @__PURE__ */ R(N, { children: [
			/* @__PURE__ */ I("button", {
				type: "button",
				className: "inline-control combat-control icon fa-solid fa-chevrons-left",
				onClick: a,
				"data-tooltip": "",
				"aria-label": K("COMBAT.RoundPrev")
			}),
			/* @__PURE__ */ I("strong", {
				css: {
					flex: 1,
					display: "flex",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ R($f, {
					css: {
						flex: 1,
						minHeight: "var(--button-size)"
					},
					label: /* @__PURE__ */ R(N, { children: [ti("COMBAT.Round", { round: e.round.toString() }), /* @__PURE__ */ I(An, {})] }),
					children: [
						/* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(Cn, {}),
							onSelect: () => new Le().render({ force: !0 }),
							children: K("COMBAT.Settings")
						}),
						/* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(kn, {}),
							onSelect: () => {
								n.clearMovementHistories();
							},
							children: K("COMBAT.ClearMovementHistories")
						}),
						/* @__PURE__ */ I($, {
							icon: /* @__PURE__ */ I(Dn, {}),
							onSelect: () => {
								n.resetAll();
							},
							children: K("COMBAT.InitiativeReset")
						})
					]
				})
			}),
			/* @__PURE__ */ R("button", {
				type: "button",
				className: "inline-control combat-control",
				onClick: i,
				"data-tooltip": "",
				"aria-label": K("COMBAT.RoundNext"),
				css: {
					":not(:hover)": {
						animation: r ? `${Lp} 1000ms infinite` : "none",
						animationDirection: "alternate"
					},
					animationTimingFunction: "ease-in-out",
					color: r ? "var(--color-text-primary)" : "var(--color-text-secondary)",
					":hover": { color: "var(--button-hover-text-color)" }
				},
				children: [K("COMBAT.RoundNext"), /* @__PURE__ */ I("i", {
					className: "fa-solid fa-chevrons-right",
					inert: !0
				})]
			})
		] }) : /* @__PURE__ */ R("button", {
			type: "button",
			className: "combat-control combat-control-lg",
			onClick: o,
			disabled: (t.length ?? 0) === 0,
			css: { cursor: (t.length ?? 0) === 0 ? "not-allowed" : "pointer" },
			children: [/* @__PURE__ */ I(mi, {}), /* @__PURE__ */ I("span", { children: K("COMBAT.Begin") })]
		}) }) : game.user && /* @__PURE__ */ I("strong", {
			css: {
				flex: 1,
				display: "flex",
				justifyContent: "center",
				color: "var(--color-text-primary)"
			},
			children: e?.round ? ti("COMBAT.Round", { round: e?.round.toString() }) : K("COMBAT.NotStarted")
		})
	});
}), zp = () => {
	s(game), b(game.user);
	let e = game.combat;
	Yr(e);
	let t = di(e), n = e?._id, r = game.combats?.combats.findIndex((e) => e._id === n), i = game.combats?.combats[r - 1]?._id, a = game.combats?.combats[r + 1]?._id;
	return /* @__PURE__ */ R(fi, {
		value: t,
		children: [
			/* @__PURE__ */ R("header", {
				id: "combat-round",
				className: "combat-tracker-header",
				children: [
					t.combat && /* @__PURE__ */ I(Mp, {
						combatIndex: r,
						prevCombatId: i,
						nextCombatId: a
					}),
					Jr(t.combat) && /* @__PURE__ */ I(Rp, {}),
					ei(t.combat) && /* @__PURE__ */ R(N, { children: [/* @__PURE__ */ I(np, {}), game.user.isGM && /* @__PURE__ */ I(pi, {})] })
				]
			}),
			!t.combat && /* @__PURE__ */ I(Ip, {}),
			t.combat && t.combat.turns.length === 0 && /* @__PURE__ */ I(Fp, {}),
			t.combat && /* @__PURE__ */ I(jp, {})
		]
	});
}, Bp = At("InvestigatorCombatTracker", class extends ie {
	_getEntryContextOptions() {
		return [];
	}
}, () => /* @__PURE__ */ I(De, { children: /* @__PURE__ */ I(zp, {}) })), Vp = foundry.applications.sidebar.tabs.CompendiumDirectory, Hp = "fa-cloud-arrow-up", Up = ["fa-spinner", "fa-pulse"];
function Wp(e) {
	if (typeof e != "object" || !e) throw Error("Candidate compendium was not an object");
}
var Gp = class extends Vp {
	_replaceHTML(...e) {
		if (super._replaceHTML(...e), s(game), this.element.querySelector(".directory-header .import-file-picker") !== null) return;
		let t = `<div class="header-actions action-buttons flexrow import-file-picker">
        <button class="import-compendium" type="submit">
          <i class="fas ${Hp}"></i> ${game.i18n.localize("investigator.ImportFromFile")}
        </button>
    </div>`, n = document.createElement("div");
		n.innerHTML = t;
		let r = n.childNodes[0];
		if (!(r instanceof HTMLDivElement)) throw Error("wtf");
		let i = r.querySelector("i");
		if (i === null) throw Error("wtf");
		r.querySelector("button")?.addEventListener("click", this.#t.bind(this, i)), this.element.querySelector(".directory-header")?.append(r);
	}
	_getEntryContextOptions() {
		if (s(game), !game.user.isGM) return [];
		let e = super._getEntryContextOptions(), t = {
			name: "investigator.ExportToFile",
			icon: "<i class=\"fa-solid fa-cloud-arrow-down\"></i>",
			callback: this.#r.bind(this),
			condition: this.#n.bind(this)
		};
		return [...e, t];
	}
	#e(e) {
		s(game);
		let t = e.closest(".directory-item");
		if (!(t instanceof HTMLElement)) throw Error("directory item element not found or not an HTML element");
		let n = t.dataset.pack;
		if (n === void 0) throw Error("Entry ID not found on element");
		let r = game.packs.get(n);
		if (r === void 0) throw Error("Pack not found");
		return r;
	}
	async #t(e) {
		e.classList.remove(Hp), e.classList.add(...Up);
		try {
			let e = await i(".json");
			await this.#i(JSON.parse(e));
		} catch (e) {
			ui.notifications?.error(`Compendium pack import failed: ${e.message}`, { permanent: !0 });
		} finally {
			e.classList.remove(...Up), e.classList.add(Hp);
		}
	}
	#n(e) {
		let t = this.#e(e).metadata.type;
		return t === "Item" || t === "Actor" || t === "JournalEntry";
	}
	async #r(e) {
		s(game);
		let t = this.#e(e), n = t.metadata.type;
		if (n !== "Item" && n !== "Actor" && n !== "JournalEntry") throw Error("Pack type not supported");
		let r = (await t.getDocuments()).map((e) => ({
			name: e.name,
			type: "type" in e ? e.type : void 0,
			img: "img" in e ? e.img : void 0,
			system: e.system,
			pages: "pages" in e ? e.pages : void 0,
			flags: e.flags
		}));
		zn({
			label: t.metadata.label,
			name: t.metadata.name,
			entity: n,
			contents: r
		}, t.metadata.name);
	}
	async #i(e) {
		if (s(game), Wp(e), e.name === void 0) throw Error("Candidate compendium did not contain a name");
		if (e.label === void 0) throw Error("Candidate compendium did not contain a label");
		if (e.entity === void 0) throw Error("Candidate compendium did not contain an entity");
		if (e.contents === void 0 || e.contents.length === void 0) throw Error("Candidate compendium did not contain any contents");
		let n = e, r = `${n.name}-${He()}`;
		ui.notifications?.info(`Beginning import of compendium pack ${n.label}`);
		let i = await le.createCompendium({
			type: n.entity,
			label: n.label,
			name: r
		}), a = await {
			Actor,
			Item,
			JournalEntry
		}[n.entity].create(n.contents, { temporary: !0 });
		for (let e of a) await i.importDocument(e), t.log(`Imported ${n.entity} ${e.name} into Compendium pack ${i.collection}`);
		i.apps.forEach((e) => e instanceof foundry.appv1.api.Application ? e.render(!0) : e.render({ force: !0 })), ui.notifications?.info(`Finished importing compendium pack ${n.label}`);
	}
};
//#endregion
//#region src/module/InvestigatorTokenDocument.ts
function Kp(e) {
	let t = Object.keys(e.stats).map((e) => `stats.${e}`), n = Object.keys(e.resources).map((e) => `resources.${e}`);
	return [...t, ...n];
}
var qp = class extends TokenDocument {
	static getTrackedAttributes(e, t) {
		if (e === void 0 && (t?.length ?? 0) === 0) {
			let e = (game.actors?.contents ?? []).filter((e) => lt(e)).map((e) => e.system).flatMap(Kp);
			return {
				bar: [],
				value: Array.from(new Set(e)).map((e) => e.split("."))
			};
		} else if (e instanceof ht || e instanceof at) {
			let t = Object.keys(e.stats).map((e) => ["stats", e]);
			return {
				bar: Object.keys(e.resources).map((e) => ["resources", e]),
				value: t
			};
		} else return super.getTrackedAttributes(e, t);
	}
	getBarAttribute(e, t = {}) {
		let n = super.getBarAttribute(e, t);
		return n && !n.editable && (n.editable = !0), n;
	}
}, Jp = /* @__PURE__ */ W.lazy(() => import("./ItemSheet-BvbbZUTe.js").then(({ ItemSheet: e }) => ({ default: e }))), Yp = At("ItemSheetClass", Zn(class extends Me {
	static {
		this.DEFAULT_OPTIONS = {
			classes: ["investigator"],
			position: {
				width: 450,
				height: 600
			},
			window: { resizable: !0 }
		};
	}
}), () => /* @__PURE__ */ I(Mt, { children: /* @__PURE__ */ I(Jp, {}) }));
//#endregion
//#region src/configuration.ts
Hooks.once("init", function() {
	CONFIG.Actor.documentClass = ot, CONFIG.Item.documentClass = it, CONFIG.Combatant.documentClass = Br, CONFIG.Combat.documentClass = Xr, CONFIG.Token.documentClass = qp, CONFIG.ui.combat = Bp, CONFIG.ui.compendium = Gp, CONFIG.Actor.dataModels.pc = ht, CONFIG.Actor.dataModels.npc = at, CONFIG.Actor.dataModels.party = zt, CONFIG.Item.dataModels.equipment = Xt, CONFIG.Item.dataModels.generalAbility = ut, CONFIG.Item.dataModels.investigativeAbility = mt, CONFIG.Item.dataModels.weapon = tn, CONFIG.Item.dataModels.mwItem = Ct, CONFIG.Item.dataModels.personalDetail = xt, CONFIG.Item.dataModels.card = ft, CONFIG.Combat.dataModels.classic = $r, CONFIG.Combat.dataModels.turnPassing = qr, CONFIG.Combatant.dataModels.classic = Ur, CONFIG.Combatant.dataModels.turnPassing = ip, qe.registerSheet(P, $n, {
		makeDefault: !0,
		types: ["npc"]
	}), qe.registerSheet(P, zr, {
		makeDefault: !0,
		types: ["pc"]
	}), qe.registerSheet(P, tr, {
		makeDefault: !0,
		types: [ce]
	}), Se.registerSheet(P, Yp, {
		makeDefault: !1,
		types: [
			et,
			h,
			Pe,
			l,
			we,
			de,
			y
		]
	}), ye.registerSheet("investigator", jt, {
		types: ["base"],
		makeDefault: !1,
		label: "Investigator Journal HTML Editor"
	}), ye.registerSheet("investigator", Nt, {
		types: ["base"],
		makeDefault: !1,
		label: "Investigator Journal Sheet"
	});
});
//#endregion
//#region src/startup/disableMwItemType.ts
var Xp = null, Zp = null;
function Qp() {
	if (s(game), E.mwUseAlternativeItemTypes.get()) Xp !== null && Zp !== null && (CONFIG.Item.typeLabels.mwItem = Xp, game.documentTypes.Item.splice(Zp, 0, "mwItem"), Xp = null, Zp = null);
	else {
		let e = CONFIG.Item.typeLabels.mwItem, t = game.documentTypes.Item.indexOf("mwItem");
		t !== -1 && (Xp = e, delete CONFIG.Item.typeLabels.mwItem, Zp = t, game.documentTypes.Item.splice(t, 1));
	}
}
var $p = () => {
	Hooks.once("ready", () => {
		Qp();
	}), Hooks.on(xe, () => {
		Qp();
	});
}, em = () => {
	CONFIG.Investigator = {
		installTheme: (e, t) => {
			b(CONFIG.Investigator), v.themes[e] = Te(t);
		},
		installPreset: (e, t) => {
			b(CONFIG.Investigator), v.presets[e] = t;
		}
	};
}, tm = kt(), nm = () => {
	let [e, t] = (0, W.useState)(!1);
	return {
		hover: e,
		onMouseEnter: (0, W.useCallback)((e) => {
			t(!0);
		}, []),
		onMouseLeave: (0, W.useCallback)((e) => {
			t(!1);
		}, [])
	};
}, rm = "0 0 0.5em 0 #0007", im = ({ onClick: e, deets: t }) => {
	let { hover: n, onMouseEnter: r, onMouseLeave: i } = nm(), a = {
		textAlign: "center",
		padding: "0.2em",
		gridArea: "body",
		marginTop: "0.5em",
		borderRadius: "2em",
		borderStyle: "none",
		backgroundImage: [`radial-gradient(closest-side, ${t.color}77 0%, ${t.color}00 100%)`, "linear-gradient(to bottom, #999, #000)"].join(", "),
		boxShadow: rm,
		fontFamily: "'Longdon Decorative Regular', sans-serif",
		fontSize: "1.5em"
	}, { isShowing: o, shouldMount: s } = Wn(!n, 800), { isShowing: c, shouldMount: l } = Wn(n, 800), u = /* @__PURE__ */ I(N, { children: /* @__PURE__ */ R("div", {
		css: {
			color: "#fff",
			borderStyle: "solid",
			borderWidth: "2px",
			borderColor: "#fff",
			borderRadius: "1em",
			textShadow: [
				`0 0 0.5em ${t.color}`,
				`0 0 0.2em ${t.color}`,
				`0 0 1em ${t.color}`,
				`0 0 2em ${t.color}`
			].join(","),
			boxShadow: [`0 0 0.5em 0 inset ${t.color}`, `0 0 0.5em 0 ${t.color}`].join(","),
			display: "grid",
			gridTemplateColumns: "1fr",
			gridTemplateRows: "1fr",
			gridTemplateAreas: "'area'"
		},
		children: [s && /* @__PURE__ */ I("span", {
			css: { gridArea: "area" },
			style: {
				opacity: o ? 1 : 0,
				transition: o ? "opacity 400ms 400ms" : "opacity 400ms"
			},
			children: t.text
		}), l && /* @__PURE__ */ I("span", {
			css: { gridArea: "area" },
			style: {
				opacity: c ? 1 : 0,
				transition: c ? "opacity 400ms 400ms" : "opacity 400ms"
			},
			children: /* @__PURE__ */ I(F, { children: "Re-Roll" })
		})]
	}) });
	return e ? /* @__PURE__ */ I(z, {
		onMouseEnter: r,
		onMouseLeave: i,
		onClick: e,
		css: a,
		children: u
	}) : /* @__PURE__ */ I("div", {
		css: a,
		children: u
	});
}, am = ({ children: e }) => /* @__PURE__ */ I("span", {
	css: {
		backgroundColor: "#0007",
		color: "#fff",
		borderRadius: "2em",
		padding: "0 0.3em",
		fontSize: "0.9em",
		marginLeft: "0.5em"
	},
	children: e
}), om = {
	[d]: {
		color: "#7777ff",
		text: "Negate Illustrious"
	},
	[te]: {
		color: "#bbbbbb",
		text: "WALLOP"
	}
}, sm = /* @__PURE__ */ W.memo(({ msg: e, ability: t, pool: n, mode: r, name: i }) => {
	let a = t?.sheet;
	Vt(a);
	let o = (0, W.useCallback)(() => {
		a.render({ force: !0 });
	}, [a]), s = r === "mw-negate" ? /* @__PURE__ */ R("span", { children: [
		/* @__PURE__ */ I(F, { children: "Negate" }),
		": -",
		3
	] }) : /* @__PURE__ */ R("span", { children: [
		/* @__PURE__ */ I(F, { children: "Wallop" }),
		": -",
		5
	] });
	return /* @__PURE__ */ R("div", {
		className: "dice-roll",
		css: {
			position: "relative",
			display: "grid",
			gridTemplateColumns: "1fr",
			gridTemplateRows: "max-content minmax(0, max-content) max-content",
			gridTemplateAreas: "\"headline\" \"pool\" \"body\" ",
			alignItems: "center"
		},
		children: [
			/* @__PURE__ */ I("div", {
				css: { gridArea: "headline" },
				children: /* @__PURE__ */ I("b", { children: /* @__PURE__ */ I("a", {
					onClick: o,
					children: i ?? t?.name ?? "Missing"
				}) })
			}),
			/* @__PURE__ */ R("div", {
				css: { gridArea: "pool" },
				children: [
					/* @__PURE__ */ I(F, { children: "Pool" }),
					": ",
					n,
					/* @__PURE__ */ I(am, { children: s })
				]
			}),
			/* @__PURE__ */ I(im, { deets: om[r] })
		]
	});
});
sm.displayName = "AbilityNegateOrWallopMwCard";
//#endregion
//#region src/components/messageCards/DiceTerms.tsx
var cm = ({ terms: e = [], className: t }) => /* @__PURE__ */ I("span", {
	className: t,
	css: {
		display: "inline-block",
		paddingBottom: "0.3em"
	},
	children: e.map((e, t) => e.results ? e.results.map((e, t) => /* @__PURE__ */ I("span", {
		css: {
			width: "1.5em",
			display: "inline-block",
			height: "1.5em",
			textAlign: "center",
			background: "white",
			borderWidth: "3px",
			borderRadius: "0.2em",
			boxShadow: "0.2em 0.2em 0.2em #0007",
			borderStyle: "outset",
			borderColor: "#bbb",
			marginRight: "0.2em",
			transform: `rotate(${Math.random() * 12 - 6}deg)`
		},
		children: e.result
	}, t)) : e.operator ? /* @__PURE__ */ I("span", { children: e.operator }, t) : e.number === void 0 ? null : /* @__PURE__ */ I("span", { children: e.number }, t))
}), lm = /* @__PURE__ */ W.memo(({ msg: e, ability: t, mode: n, name: r, imageUrl: i }) => {
	let a = t?.sheet;
	Vt(a);
	let o = (0, W.useCallback)(() => {
		a.render({ force: !0 });
	}, [a]);
	return /* @__PURE__ */ R("div", {
		className: "dice-roll",
		css: {
			position: "relative",
			display: "grid",
			gridTemplateColumns: "max-content 1fr",
			gridTemplateRows: "max-content minmax(0, max-content) max-content",
			gridTemplateAreas: "\"image headline\" \"image terms\" \"image body\" ",
			alignItems: "center"
		},
		children: [
			/* @__PURE__ */ I("div", { css: {
				height: "4em",
				width: "4em",
				gridArea: "image",
				backgroundImage: `url(${t?.img ?? i})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				transform: "scale(0.9) rotate(-5deg)",
				boxShadow: "0 0 0.5em black",
				marginRight: "1em",
				alignSelf: "start"
			} }),
			/* @__PURE__ */ I("div", {
				css: { gridArea: "headline" },
				children: /* @__PURE__ */ I("b", { children: /* @__PURE__ */ I("a", {
					onClick: o,
					children: r ?? t?.name ?? "Missing"
				}) })
			}),
			/* @__PURE__ */ R("div", {
				css: { gridArea: "terms" },
				children: [n === "spend" && /* @__PURE__ */ I(F, { children: "PointSpend" }), n === "test" && /* @__PURE__ */ R(N, { children: [
					/* @__PURE__ */ I(F, { children: "AbilityTest" }),
					": ",
					/* @__PURE__ */ I(cm, { terms: e.rolls?.[0]?.terms }),
					" ="
				] })]
			}),
			/* @__PURE__ */ I("a", {
				className: "dice-total",
				css: {
					gridArea: "body",
					"&&": { marginTop: "0.5em" }
				},
				children: e.rolls?.[0]?.total
			})
		]
	});
});
lm.displayName = "AbilityTestCard";
//#endregion
//#region src/components/messageCards/AbilityTestMwCard.tsx
var um = {
	1: {
		text: "Dismal Failure",
		color: "#fe083f"
	},
	2: {
		text: "Quotidian Failure",
		color: "#fd5a00"
	},
	3: {
		text: "Exasperating Failure",
		color: "#eb8b00"
	},
	4: {
		text: "Hair’s-Breadth Success",
		color: "#c9b500"
	},
	5: {
		text: "Prosaic Success",
		color: "#94d900"
	},
	6: {
		text: "Illustrious Success",
		color: "#0cf850"
	}
}, dm = /* @__PURE__ */ W.memo(({ msg: e, ability: t, difficulty: n, boonLevy: r, reRoll: i, pool: a, name: o }) => {
	let s = t?.sheet;
	Vt(s);
	let c = (0, W.useCallback)(() => {
		s.render({ force: !0 });
	}, [s]), l = Math.max(Math.min(e.rolls?.[0]?.total ?? 1, 6), 1), u = n === "easy" && l === 3 ? 4 : l, d = um[u], f = (0, W.useCallback)(() => {
		t?.system.mwTestAbility(n, r, u);
	}, [
		t,
		r,
		n,
		u
	]), p = r < 0 ? /* @__PURE__ */ R(am, { children: [
		/* @__PURE__ */ I(F, { children: "Levy" }),
		": ",
		r
	] }) : r > 0 ? /* @__PURE__ */ R(am, { children: [
		/* @__PURE__ */ I(F, { children: "Boon" }),
		": +",
		r
	] }) : null, m = i && /* @__PURE__ */ R(am, { children: [
		/* @__PURE__ */ I(F, { children: "Re-roll" }),
		": ",
		i === 1 ? "-4" : "-1"
	] });
	return /* @__PURE__ */ R("div", {
		className: "dice-roll",
		css: {
			position: "relative",
			display: "grid",
			gridTemplateColumns: "1fr",
			gridTemplateRows: "max-content minmax(0, max-content) max-content",
			gridTemplateAreas: "\"headline\" \"pool\" \"body\" ",
			alignItems: "center"
		},
		children: [
			/* @__PURE__ */ R("div", {
				css: { gridArea: "headline" },
				children: [
					/* @__PURE__ */ I("b", { children: /* @__PURE__ */ I("a", {
						onClick: c,
						children: o ?? t?.name ?? "Missing"
					}) }),
					" ",
					/* @__PURE__ */ I(cm, { terms: e.rolls?.[0]?.terms }),
					n === "easy" && /* @__PURE__ */ R("span", { children: [
						"(",
						/* @__PURE__ */ I(F, { children: "Easy" }),
						")"
					] }),
					n === -1 && /* @__PURE__ */ R("span", { children: [
						"(",
						/* @__PURE__ */ I(F, { children: "Hard" }),
						")"
					] }),
					n !== "easy" && n < -1 && /* @__PURE__ */ R("span", { children: [
						"(",
						/* @__PURE__ */ I(F, { children: "Very Hard" }),
						")"
					] })
				]
			}),
			/* @__PURE__ */ R("div", {
				css: { gridArea: "pool" },
				children: [
					/* @__PURE__ */ I(F, { children: "Pool" }),
					": ",
					a,
					p,
					m
				]
			}),
			/* @__PURE__ */ I(im, {
				onClick: f,
				deets: d
			})
		]
	});
});
dm.displayName = "AbilityTestMwCard";
//#endregion
//#region src/components/messageCards/AttackCard.tsx
var fm = /* @__PURE__ */ W.memo(({ msg: e, rangeName: t, weapon: n, name: r, imageUrl: i }) => {
	let a = n?.sheet;
	Vt(a);
	let o = (0, W.useCallback)(() => {
		a.render({ force: !0 });
	}, [a]), s = n?.img ?? i, c = e.rolls?.[0]?.terms[0]?.rolls, l = c[0], u = c[1];
	return /* @__PURE__ */ R("div", {
		className: "dice-roll",
		css: {
			position: "relative",
			display: "grid",
			gridTemplateColumns: "max-content 1fr",
			gridTemplateRows: "max-content minmax(0, max-content) max-content",
			gridTemplateAreas: "\"image headline\" \"image hit-terms\" \"image hit-body\" \"image damage-terms\" \"image damage-body\" ",
			alignItems: "center"
		},
		children: [
			/* @__PURE__ */ I("div", { css: {
				height: "4em",
				width: "4em",
				gridArea: "image",
				backgroundImage: `url(${s})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				transform: "scale(0.9) rotate(-5deg)",
				boxShadow: "0 0 0.5em black",
				marginRight: "1em",
				alignSelf: "start"
			} }),
			/* @__PURE__ */ R("div", {
				css: { gridArea: "headline" },
				children: [
					/* @__PURE__ */ I("b", { children: /* @__PURE__ */ I("a", {
						onClick: o,
						children: r ?? n?.name
					}) }),
					" ",
					"(",
					/* @__PURE__ */ I(F, { children: t || "" }),
					")"
				]
			}),
			/* @__PURE__ */ R("div", {
				css: { gridArea: "hit-terms" },
				children: [
					/* @__PURE__ */ I(F, { children: "Hit roll" }),
					": ",
					/* @__PURE__ */ I(cm, { terms: l.terms }),
					" ="
				]
			}),
			/* @__PURE__ */ I("a", {
				className: "dice-total",
				css: { gridArea: "hit-body" },
				children: l.total
			}),
			/* @__PURE__ */ R("div", {
				css: { gridArea: "damage-terms" },
				children: [
					/* @__PURE__ */ I(F, { children: "Damage" }),
					": ",
					/* @__PURE__ */ I(cm, { terms: u.terms }),
					" ="
				]
			}),
			/* @__PURE__ */ I("a", {
				className: "dice-total",
				css: { gridArea: "damage-body" },
				children: u.total
			})
		]
	});
});
fm.displayName = "AttackCard";
//#endregion
//#region src/components/messageCards/PushCard.tsx
var pm = "1px", mm = "1px", hm = /* @__PURE__ */ W.memo(({ msg: e, ability: t, mode: n, name: r, imageUrl: i }) => {
	let a = Lt(), o = t?.sheet;
	Vt(o);
	let s = (0, W.useCallback)(() => {
		o.render({ force: !0 });
	}, [o]);
	return /* @__PURE__ */ R("div", {
		className: "dice-roll",
		css: {
			position: "relative",
			display: "grid",
			gridTemplateColumns: "max-content 1fr",
			gridTemplateRows: "auto",
			gridTemplateAreas: "\"image headline\"",
			alignItems: "center",
			justifyItems: "start"
		},
		children: [/* @__PURE__ */ I("div", { css: {
			height: "4em",
			width: "4em",
			gridArea: "image",
			backgroundImage: `url(${i})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			justifyItems: "center",
			transform: "scale(0.9) rotate(-5deg)",
			boxShadow: "0 0 0.5em black",
			marginRight: "1em"
		} }), /* @__PURE__ */ I("a", {
			onClick: s,
			css: {
				gridArea: "headline",
				fontSize: "1.5em",
				color: a.colors.accent,
				fontStyle: "italic",
				textShadow: `
            -${pm} -${pm} ${mm} #0007,
            ${pm} ${pm} ${mm} #fff
          `,
				":hover": { textShadow: `
              0 0 10px #fff,
              0 0 10px #fff,
              -${pm} -${pm} ${mm} #0007,
              ${pm} ${pm} ${mm} #fff
            ` }
			},
			children: /* @__PURE__ */ I(F, {
				values: { AbilityName: t?.name ?? "" },
				children: "AbilityNamePush"
			})
		})]
	});
});
hm.displayName = "AbilityTestCard";
//#endregion
//#region src/components/messageCards/types.ts
var gm = (e) => e === "test" || e === "spend" || e === "attack" || e === "mw-test" || e === "mw-negate" || e === "mw-wallop" || e === "push", _m = () => {
	Hooks.on("renderChatMessageHTML", (e, r, i) => {
		s(game);
		let o = r.querySelector(`.${c}`);
		if (o === null) return;
		let l = o.getAttribute(nt), u = o.getAttribute(m), d = o.getAttribute(fe), f = o.getAttribute(a), p = o.getAttribute(Ke), h = o.getAttribute(n), g = o.getAttribute(S), _ = o.getAttribute(w);
		if (u === null) {
			t.error(`Missing or invalid '${m}' attribute.`, o);
			return;
		}
		if (f === null || !gm(f)) {
			t.error(`Ability test chat message found without a valid '${a}' attribute. (Valid values are "test", "spend", "combat", "push"`, o);
			return;
		}
		let v = d ? canvas?.tokens?.get(d)?.actor : game.actors?.get(u);
		if (v == null) {
			t.error(`Could not find actor with id ${u}`, o);
			return;
		}
		let y = l ? v.items.get(l) : void 0;
		yt(y);
		let b;
		if (f === "attack") b = /* @__PURE__ */ I(fm, {
			msg: e,
			weapon: p ? v.items.get(p) : void 0,
			rangeName: h,
			imageUrl: _,
			name: g
		});
		else if (f === "mw-test") {
			let t = o.getAttribute(M), n = t === "easy" ? "easy" : Number(t ?? 0), r = Number(o.getAttribute("data-mw-boon-levy") ?? 0), i = o.getAttribute(re), a = Number(o.getAttribute(j));
			b = /* @__PURE__ */ I(dm, {
				msg: e,
				ability: y,
				difficulty: n,
				boonLevy: r,
				reRoll: i ? Number(i) : void 0,
				pool: a,
				name: g
			});
		} else b = f === "mw-wallop" || f === "mw-negate" ? /* @__PURE__ */ I(sm, {
			msg: e,
			ability: y,
			pool: Number(o.getAttribute(j)),
			mode: f,
			name: g
		}) : f === "push" ? /* @__PURE__ */ I(hm, {
			msg: e,
			ability: y,
			mode: f,
			imageUrl: _,
			name: g
		}) : /* @__PURE__ */ I(W.StrictMode, { children: /* @__PURE__ */ I(lm, {
			msg: e,
			ability: y,
			mode: f,
			imageUrl: _,
			name: g
		}) });
		(0, tm.createRoot)(o).render(b);
	});
}, vm = () => {
	Hooks.on("preCreateItem", (e, n, r, i) => {
		if (s(game), game.userId === i && _t(e)) {
			let r = Et(e);
			if (u(e.system.categoryId)) {
				let i = r ? T() : o();
				t.log(`found ability "${n.name}" with no category, updating to "${i}"`), e.updateSource({ system: { categoryId: i } });
			}
		}
	});
}, ym = () => {
	Hooks.on("preCreateActor", (e, t, n, r) => {
		if (s(game), game.userId !== r) return;
		let i = E.combatAbilities.get()[0];
		i !== void 0 && lt(e) && u(e.system.initiativeAbility) && e.updateSource({ system: { initiativeAbility: i } });
	});
}, bm = () => {
	Hooks.on("preCreateActor", (e, t, n, r) => {
		s(game), game.userId === r && (u(e.img) || e.img === "icons/svg/mystery-man.svg") && e.updateSource({ img: vt(e) ? Ye : st(e) ? Ue : Rt(e) ? Oe : void 0 });
	});
}, xm = () => {
	Hooks.on("preCreateItem", (e, t, n, r) => {
		s(game);
		let i = E.cardCategories.get()[0];
		if (!(game.userId !== r || i === void 0 || !ct(e)) && e.system.cardCategoryMemberships.length === 0) {
			let t = {
				cardCategoryMemberships: [{
					categoryId: i.id,
					nonlethal: !1,
					worth: 1
				}],
				styleKeyCategoryId: i.id
			};
			e.updateSource({ system: t });
		}
	});
};
//#endregion
//#region src/startup/installDropActorSheetDataHandler.ts
function Sm(e) {
	return "uuid" in e && typeof e.uuid == "string" ? e.uuid.replace(/^[\w]+\./, "") : void 0;
}
var Cm = () => {
	Hooks.on("dropActorSheetData", (e, t, n) => {
		if (s(game), !Rt(e) || n.type !== "Actor" && (n.type !== "Folder" || n.documentName !== "Actor") || !game.user.isGM) return;
		let r = Sm(n);
		if (r === void 0) return;
		let i = n.type === "Actor" ? [r] : tt(game.folders?.get(r)).filter((e) => vt(e)).map((e) => e.id);
		e.system.addActorIds(i);
	});
}, wm = async () => {
	s(game), game.settings.settings.has("dice-so-nice.enabledSimultaneousRollForMessage") && await game.settings.set("dice-so-nice", "enabledSimultaneousRollForMessage", !1), game.settings.settings.has("dice-so-nice.enabledSimultaneousRolls") && (await game.settings.set("dice-so-nice", "enabledSimultaneousRolls", !1), await game.settings.set("core", "animateRollTable", !0));
};
//#endregion
//#region src/startup/installEquipmentAddedNotifier.ts
function Tm() {
	Hooks.on("createItem", async (e, t, n) => {
		s(game);
		let r = !e.parent && vt(e.parent), i = !game.users, a = game.userId !== n, o = !E.notifyItemAddedToActor.get();
		if (r || i || a || o) return;
		let c = (game.users ?? []).filter((t) => {
			let n = e.testUserPermission(t, CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER, { exact: !1 }), r = t.id !== game.user.id;
			return n && r;
		}).map((e) => e.id).map((t) => ChatMessage.create({
			author: game.user.id,
			speaker: ChatMessage.getSpeaker({ alias: game.user.name }),
			content: L("ItemNameAddedToActorName", {
				ItemName: e.name,
				ActorName: e.parent?.name ?? ""
			}),
			whisper: [t]
		}, {}));
		await Promise.all(c);
	});
}
//#endregion
//#region src/startup/installEquipmentCategoryHookHandler.ts
var Em = () => {
	Hooks.on("preCreateItem", (e, t, n, r) => {
		if (s(game), game.userId === r && Qt(e)) {
			let t = E.equipmentCategories.get(), n = e.system.categoryId || Object.keys(t)[0], r = {
				categoryId: e.system.categoryId || n,
				fields: e.system.fields || {}
			}, i = t[n].fields;
			for (let e in i) r.fields[e] ||= i[e].default;
			e.updateSource({ system: r });
		}
	});
}, Dm = () => {
	Hooks.on("preCreateItem", (e, t, n, r) => {
		s(game);
		let i = E.combatAbilities.get(), a = E.combatAbilities.get()[0];
		if (game.userId !== r || !$t(e) || a === void 0 || i.includes(e.system.ability)) return;
		let o = { ability: a };
		e.updateSource({ system: o });
	});
}, Om = () => {
	Hooks.on("preCreateItem", (e, t, n, r) => {
		s(game), game.userId === r && (u(e.img) || e.img === "icons/svg/item-bag.svg") && e.updateSource({ img: $t(e) ? oe : Qt(e) ? _ : Et(e) ? f : gt(e) ? he : ct(e) ? Ee : Be });
	});
};
//#endregion
//#region src/startup/installKeepTokenImageInSyncWithActor.ts
function km() {
	Hooks.on("preUpdateActor", function(e, t, n, r) {
		s(game);
		let { tokenizerIsActive: i } = bt();
		if (i || game.userId !== r || t.img === void 0) return;
		let a = e.prototypeToken;
		["icons/svg/cowled.svg", e.img].includes(a.texture.src) && a.update({ texture: { src: t.img } }, {});
	});
}
//#endregion
//#region src/startup/installNewCharacterDefaultOccupationHookHandler.ts
function Am() {
	Hooks.on("createActor", async (e, t, n) => {
		s(game), game.userId === n && vt(e) && e.system.getOccupations().length === 0 && await e.system.createPersonalDetail(-1, !1);
	});
}
//#endregion
//#region src/startup/installNewCharacterPacksHookHandler.ts
function jm() {
	Hooks.on("createActor", async (e, n, r) => {
		if (s(game), game.userId === r && !(e.items.size > 0)) {
			if (vt(e)) for (let n of E.newPCPacks.get()) {
				s(game), t.log("PACK", n);
				let r = (await game.packs?.find((e) => e.collection === n)?.getDocuments())?.map((e) => {
					let { name: t, img: n, system: r, type: i } = e;
					return {
						name: t,
						img: n,
						system: r,
						type: i
					};
				});
				t.log("datas", r), await e.createEmbeddedDocuments("Item", r);
			}
			if (st(e)) for (let n of E.newNPCPacks.get()) {
				s(game), t.log("PACK", n);
				let r = (await game.packs?.find((e) => e.documentName === "Item" && e.collection === n)?.getDocuments())?.map(({ name: e, img: t, system: n, type: r }) => ({
					name: e,
					img: t,
					system: n,
					type: r
				}));
				t.log("datas", r), await e.createEmbeddedDocuments("Item", r);
			}
		}
	});
}
//#endregion
//#region src/startup/installNextTurnHandler.ts
function Mm() {
	Hooks.once("ready", () => {
		s(game), Hooks.on(Ie, () => {
			game.user.isActiveGM && (t.log("nextTurn"), s(game), game.combat?.nextTurn());
		});
	});
}
//#endregion
//#region src/startup/installPersonalDetailHookHandler.ts
function Nm(e) {
	return e && "type" in e && e.type === "personalDetail";
}
async function Pm(e, t) {
	let n = L("Replace existing {Thing} with {Name}?", {
		Thing: e.system?.slotIndex === -1 ? E.occupationLabel.get() : E.personalDetails.get()[e.system?.slotIndex ?? 0].name,
		Name: e.name
	}), r = L("Replace"), i = L("Add");
	await new Promise((e) => (new ke({
		content: `<p>${n}</p>`,
		window: { title: "Replace or add?" },
		buttons: [{
			icon: "<i class=\"fas fa-eraser\"></i>",
			label: r,
			callback: async () => {
				let n = t?.map((e) => e.id ?? "") ?? [];
				await t?.[0].actor?.deleteEmbeddedDocuments("Item", n), e(!0);
			},
			action: "replace"
		}, {
			icon: "<i class=\"fas fa-plus\"></i>",
			label: i,
			callback: () => {
				e(!0);
			},
			default: !0,
			action: "add"
		}]
	}).render({ force: !0 }), !1));
}
async function Fm(e, n) {
	if (await ae({
		message: "Add all items from pack {Name}?",
		cancelText: L("Cancel"),
		confirmText: L("Add"),
		confirmIconClass: "fas fa-plus",
		values: { Name: e.metadata.label }
	})) {
		let r = (await e.getDocuments())?.map((e) => {
			if (e.type === "generalAbility" || e.type === "investigativeAbility") {
				let t = n.actor?.items.find((t) => t.type === e.type && t.name === e.name);
				if (t) return {
					_id: t.id,
					type: t.type,
					name: t.name,
					img: t.img,
					system: {
						...t.system,
						rating: (t.system.rating ?? 0) + e.system.rating
					}
				};
			}
			return {
				name: e.name,
				type: e.type,
				img: e.img,
				system: e.system
			};
		});
		t.log("items", r), await n.actor.update({ items: r }), ui.notifications?.info(`Added or updated ${r.length === 1 ? "one item" : `${r.length} items`} from "${e.metadata.label}"`);
	}
}
async function Im(e, t, n) {
	if (s(game), !(game.userId === n && gt(e) && lt(e.actor) && e.actor && Nm(t))) return;
	let r = e.actor?.items.filter((e) => gt(e) && e.system.slotIndex === t.system?.slotIndex);
	if ((r?.length ?? 0) > 0 && await Pm(t, r), !u(t.system?.compendiumPackId)) {
		let n = game.packs?.find((e) => e.collection === t.system?.compendiumPackId);
		n && await Fm(n, e);
	}
}
function Lm() {
	Hooks.on("preCreateItem", (e, t, n, r) => {
		Im(e, t, r);
	});
}
//#endregion
//#region src/module/SettingsClass.tsx
var Rm = /* @__PURE__ */ W.lazy(() => import("./Settings-DooVOoX_.js").then(({ Settings: e }) => ({ default: e }))), zm = class extends Fe {
	static {
		this.DEFAULT_OPTIONS = {
			classes: [
				P,
				"sheet",
				"item",
				"dialog"
			],
			position: {
				width: 700,
				height: 800
			},
			window: {
				resizable: !0,
				title: "GUMSHOE Settings"
			}
		};
	}
	async close(e) {
		if (e?.submitted) return super.close(e);
		throw Hooks.call(je), Error("Settings won't close yet - not approved by user");
	}
}, Bm = () => /* @__PURE__ */ I(Mt, { children: /* @__PURE__ */ I(Rm, {}) }), Vm = class extends At("SettingsClass", zm, Bm) {}, Hm = new Vm(), Um = () => {
	Hooks.on("renderSettings", (e, t) => {
		if (s(game), !(game.user.can("SETTINGS_MODIFY") ?? !1)) return;
		let n = L("SystemNameSystemSettings", { SystemName: L("SystemName") }), r = document.createElement("button");
		r.innerHTML = `<i class="fas fa-search"></i>${n}`, t.querySelector("button[data-app=\"configure\"]")?.after(r), r.addEventListener("click", (e) => {
			e.preventDefault(), Hm.render({ force: !0 });
		});
	});
}, Wm = [
	"health",
	"sanity",
	"stability",
	"magic"
];
function Gm(e) {
	if (e.system.linkToResource) return e.system.resourceId;
	let t = e.name.trim().toLowerCase();
	return Wm.includes(t) ? t : null;
}
function Km() {
	Hooks.on("updateItem", (e, t, n, r) => {
		if (s(game), game.userId !== r || !e.actor || !Et(e) || t.system?.pool === void 0 && t.system?.rating === void 0) return;
		let i = Gm(e);
		i !== null && e.actor.update({ system: { resources: { [i]: {
			min: e.system.min,
			value: e.system.pool,
			max: e.system.rating
		} } } });
	}), Hooks.on("updateActor", (e, t, n, r) => {
		if (s(game), game.userId !== r || !lt(e) || !t.system || !("resources" in t.system)) return;
		let i = t.system, a = Object.entries(i.resources || {});
		for (let [t, n] of a) e.items.filter((e) => Et(e) && e.system.linkToResource && e.system.resourceId === t)?.forEach((e) => {
			wt(e);
			let t = n?.value;
			if (t == null) return;
			let r = Math.max(Math.min(t, e.system.rating), e.system.min);
			e.update({ system: { pool: r } });
		});
	}), Hooks.on("createItem", (e, t, n) => {
		if (game.userId !== n || !Et(e) || !e.parent) return;
		let r = Gm(e);
		r !== null && e.parent.update({ system: { resources: { [r]: {
			min: e.system.min,
			value: e.system.pool,
			max: e.system.rating
		} } } });
	});
}
//#endregion
//#region src/themes/components/TextInputTest.tsx
var qm = () => {
	let [e, t] = (0, W.useState)("foobar"), n = (0, W.useCallback)((e) => {
		t(e);
	}, []);
	return /* @__PURE__ */ R("div", { children: [
		"TextInput: ",
		/* @__PURE__ */ I("span", {
			"data-testid": "state",
			children: e
		}),
		/* @__PURE__ */ I(Ne, {
			value: e,
			onChange: n
		})
	] });
}, Jm = ({ theme: e }) => /* @__PURE__ */ I("div", {
	css: {
		display: "flex",
		flexDirection: "column",
		gap: "1em"
	},
	children: /* @__PURE__ */ R(se, {
		noStyleAppWindow: !0,
		mode: "small",
		theme: e,
		css: {
			display: "flex",
			flexDirection: "column",
			gap: "1em"
		},
		children: [
			/* @__PURE__ */ R("div", {
				css: {
					flex: 1,
					backgroundColor: "transparent"
				},
				children: [
					e.displayName,
					/* @__PURE__ */ I("br", {}),
					"transparent"
				]
			}),
			/* @__PURE__ */ R("div", {
				css: {
					flex: 1,
					backgroundColor: e.colors.backgroundPrimary
				},
				children: [
					e.displayName,
					/* @__PURE__ */ I("br", {}),
					"bgTransPrimary"
				]
			}),
			/* @__PURE__ */ R("div", {
				css: {
					flex: 1,
					backgroundColor: e.colors.backgroundSecondary
				},
				children: [
					e.displayName,
					/* @__PURE__ */ I("br", {}),
					"bgTransSecondary"
				]
			})
		]
	})
}), Ym = () => /* @__PURE__ */ R("div", {
	css: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#111",
		color: "#fff",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	children: [/* @__PURE__ */ I("div", {
		css: {
			flex: 1,
			position: "relative",
			display: "grid",
			gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
			gridAutoRows: "minmax(10em, max-content)",
			gap: "1em",
			padding: "1em"
		},
		children: Object.keys(v.themes).map((e) => /* @__PURE__ */ I(Jm, { theme: v.themes[e] }, e))
	}), /* @__PURE__ */ I("div", {
		css: { flex: 1 },
		children: /* @__PURE__ */ I(qm, {})
	})]
}), Xm = new (At("ThemeFarmClass", class extends Fe {
	static {
		this.DEFAULT_OPTIONS = {
			classes: [
				P,
				"sheet",
				"item",
				"dialog"
			],
			position: {
				width: window.innerWidth,
				height: window.innerHeight,
				top: 0,
				left: 0
			},
			window: {
				resizable: !0,
				title: "Theme Farm"
			}
		};
	}
}, () => /* @__PURE__ */ I(Ym, {})))();
//#endregion
//#region src/startup/installShowThemeFarmHack.tsx
function Zm() {
	window.showThemeFarm = function() {
		Xm.render({ force: !0 });
	};
}
//#endregion
//#region src/startup/installSocketActionHandler.ts
function Qm() {
	Hooks.on("ready", () => {
		s(game), game.socket?.on(ve, (e) => {
			Hn(e) && Hooks.call(e.hook, ...e.payload);
		});
	});
}
//#endregion
//#region src/startup/installTurnPassingHandler.ts
function $m() {
	Hooks.once("ready", () => {
		s(game), Hooks.on(ze, ({ combatantId: e }) => {
			if (!game.user.isActiveGM) return;
			t.log("requestTurnPass", e), s(game);
			let n = game.combat, r = game.combat?.combatants.get(e);
			if (!n || !r || !ap(r) || r.system.passingTurnsRemaining <= 0) return;
			let i = {};
			n.round === 0 && (i.round = 1);
			let a = n.turns.findIndex((t) => t.id === e);
			r.system.removePassingTurn(), a !== void 0 && a >= 0 && (i.turn = a), n.update(i);
		});
	});
}
//#endregion
//#region src/startup/loadCustomThemes.ts
function eh() {
	let n = /\.(?:json|json5)$/, i = /\.(?:yaml|yml)$/, a = /^v(?:1)/;
	Hooks.on("setup", async () => {
		s(game);
		let o = E.customThemePath.get();
		t.log({ customThemePath: o });
		let c = [];
		try {
			c = (await ge.browse("data", o, {})).files;
		} catch {
			if (o !== "investigator_themes") {
				game?.user?.isGM && ui.notifications?.error(`Custom theme path "${o}" does not exist.`, {});
				return;
			}
		}
		t.log({ files: c });
		for (let o of c) {
			let s = null;
			try {
				let c = async () => await (await fetch(o)).text();
				if (n.test(o)) {
					let [t, { default: n }] = await Promise.all([c(), import("./dist-BhsMkjwa.js").then((t) => /* @__PURE__ */ e(t.default, 1))]);
					s = n.parse(t);
				} else if (i.test(o)) {
					let [t, n] = await Promise.all([c(), import("./Yaml-ChKRLNxI.js").then((t) => /* @__PURE__ */ e(t.default, 1))]);
					s = n.parse(t);
				} else continue;
				if (!s) throw Error("Could not parse");
				if (!s.displayName) throw Error("No displayName");
				if (!s.schemaVersion) throw Error("No schemaVersion");
				if (!a.test(s.schemaVersion)) throw Error(`schemaVersion "${s.schemaVersion}" not recognised`);
				let l = {
					colors: {
						accent: r.colors.accent,
						accentContrast: r.colors.accentContrast,
						glow: r.colors.glow,
						wallpaper: r.colors.wallpaper,
						text: r.colors.text,
						backgroundButton: r.colors.backgroundButton,
						backgroundPrimary: r.colors.backgroundPrimary,
						backgroundSecondary: r.colors.backgroundSecondary,
						...s.colors
					},
					displayName: s.displayName,
					largeSheetRootStyle: s.largeSheetRootStyle ?? {},
					logo: {
						backdropStyle: s.logo?.backdropStyle ?? r.logo.backdropStyle,
						frontTextElementStyle: s.logo?.frontTextElementStyle ?? r.logo.frontTextElementStyle,
						rearTextElementStyle: s.logo?.rearTextElementStyle ?? r.logo.rearTextElementStyle,
						textElementsStyle: s.logo?.textElementsStyle ?? r.logo.textElementsStyle,
						fontScaleFactor: s.logo?.fontScaleFactor
					},
					schemaVersion: s.schemaVersion,
					appWindowStyle: s.appWindowStyle ?? {},
					bodyFont: s.bodyFont ?? r.bodyFont,
					displayFont: s.displayFont ?? r.displayFont,
					global: s.global ?? r.global,
					smallSheetRootStyle: s.smallSheetRootStyle ?? {}
				};
				t.log(`Loaded local theme ${o}`, l), CONFIG.Investigator?.installTheme(o, l);
			} catch (e) {
				game?.user?.isGM && ui.notifications?.error(`Problem with custom theme "${o}": ${e?.message}.`, {});
			}
		}
	});
}
//#endregion
//#region src/migrations/flaggedMigrations.ts
var th = {
	item: {
		setEquipmentCategory: (e, n) => (e.type === "equipment" && u(e.system.category) && (t.info(`Migrating item ${e.name} to set category`), n.system ||= {}, n.system.category = Object.keys(g.equipmentCategories)[0]), n),
		addIdtoUnlocks: (e, t) => {
			if (e.type === "equipment") {
				let n = (e.system?.unlocks ?? []).map((e) => e.id ? e : {
					...e,
					id: e.name
				});
				t.system = {
					...t.system,
					unlocks: n
				};
			}
		},
		switchCategoryToCategoryId: (e, n) => ((e.type === "generalAbility" || e.type === "investigativeAbility" || e.type === "equipment") && (t.info(`Migrating item ${e.name}. category: ${e.system.category}, categoryId: ${e.system.categoryId}`), n.system ||= {}, n.system.categoryId = e.system.category, delete n.system.category, t.info(`Done ${e.name}. updateData: ${JSON.stringify(n)}`)), n),
		addIdToCherries: (e, t) => {
			if (e.type === "generalAbility" && (e.system?.unlocks?.some((e) => e.id === void 0) ?? !1)) return t.system ||= {}, t.system.unlocks = e.system?.unlocks?.map((e) => (e.id === void 0 && (e.id = He()), e)) ?? [], t;
		},
		setResourceIdForAbilities: (e, t) => {
			let n = [
				"health",
				"stability",
				"sanity",
				"magic"
			], r = e.name.trim().toLowerCase(), i = n.includes(r);
			return e.type === "generalAbility" && i && (t.system ||= {}, t.system.resourceId = r, t.system.linkToResource = !0), t;
		}
	},
	actor: {
		turnShortNotesIntoPersonalDetails: (e, n) => {
			if (e.type === "pc" && e.system.shortNotes) {
				t.info(`Migrating actor ${e.name} to turn short notes into personal details`), n.system ||= {};
				let r = e.system.shortNotes.map((e, t) => ({
					type: de,
					img: he,
					name: e,
					system: { slotIndex: t }
				})).filter((e) => e.name !== null), i = u(e.system.occupation) ? [] : [{
					type: de,
					img: he,
					name: e.system.occupation,
					system: { slotIndex: -1 }
				}];
				n.items = (n.items ?? []).concat(r).concat(i);
			}
			return n;
		},
		setInitiativeAbilityWhereUndefined: (e, t) => {
			let n = E.combatAbilities.get()[0];
			!lt(e) || u(n) || !u(e.system.initiativeAbility) || (t.system ||= {}, t.system.initiativeAbility = n);
		}
	},
	world: {
		convertShortNotesToPersonalDetails: async () => {
			s(game);
			let e = game.settings.get("investigator", "shortNotes").map((e) => ({
				name: e,
				type: "item"
			}));
			await game.settings.set("investigator", "personalDetails", e);
		},
		convertCombats: async () => {
			s(game), ui.notifications?.info("Migrating combats");
			let e = game.combats.contents.filter((e) => e.type === "base"), n = E.useTurnPassingInitiative.get() ? "turnPassing" : "classic", r = null;
			for (let i of e) {
				t.log(`migrating combat ${i._id}`);
				let e = i.toObject(), a = await Xr.create({
					...e,
					combatants: e.combatants.map((e) => {
						let t = e.system;
						return n === "classic" && (t.initiative = e.initiative), {
							...e,
							type: n,
							system: t
						};
					}),
					type: n
				});
				a !== void 0 && (a.setupTurns(), i.active && (r = a), await i.delete());
			}
			r && await r.activate();
		}
	},
	compendium: {},
	journal: {},
	macro: {},
	scene: {},
	rollTable: {},
	playlist: {}
};
//#endregion
//#region src/migrations/getFlaggedMigrations.ts
function nh(e, t) {
	let n = k((t, n) => {
		let r = {};
		for (let [i, a] of Object.entries(t)) e[n][i] || (r[i] = a);
		return r;
	}, t);
	return [
		Object.values(n).flatMap(Object.values).length > 0,
		n,
		k((e) => k(() => !0, e), t)
	];
}
//#endregion
//#region src/migrations/migrateItemData.ts
var rh = function(e, t) {
	let n = {};
	for (let r in t.item) t.item[r](e, n);
	return n;
}, ih = function(e, t) {
	let n = {};
	for (let r in t.actor) t.actor[r](e, n);
	if (!e.items) return n;
	let r = Array.from(e.items.entries()).flatMap(([e, n]) => {
		let r = n instanceof CONFIG.Item.documentClass ? n.toObject() : n, i = rh(r, t);
		return foundry.utils.isEmpty(i) ? [] : [{
			_id: r._id,
			...i
		}];
	});
	return r.length > 0 && (n.items = [...n.items ?? [], ...r]), n;
}, ah = function(e, t) {
	return { tokens: foundry.utils.deepClone(e.tokens).map((e) => {
		if (!e.actorId || e.actorLink || !e.actorData) return e.actorData = {}, e;
		let n = new Ze(e);
		if (!n.actor) e.actorId = null, e.actorData = {};
		else if (!e.actorLink) {
			let r = ih(n.actor, t);
			e.actorData = foundry.utils.mergeObject(n.actor, r);
		}
		return e;
	}) };
}, oh = async function(e, n) {
	let r = e.metadata.type;
	for (let t in n.compendium) n.compendium[t](e, r);
	if (![
		"Actor",
		"Item",
		"Scene"
	].includes(r)) return;
	let i = e.locked;
	await e.configure({ locked: !1 }), await e.migrate();
	let a = await e.getDocuments();
	for (let i of a) {
		let a = {};
		try {
			switch (r) {
				case "Actor":
					a = ih(i, n);
					break;
				case "Item":
					a = rh(i, n);
					break;
				case "Scene":
					a = ah(i, n);
					break;
			}
			if (foundry.utils.isEmpty(a)) continue;
			a._id = i.id, await i.update(a), t.log(`Migrated ${r} entity ${i.name} in Compendium ${e.collection}`);
		} catch (n) {
			n.message = `Failed ${Qe.title} system migration for entity ${i.name} in pack ${e.collection}: ${n.message}`, t.error(n);
		}
	}
	e.configure({ locked: i }), t.log(`Migrated all ${r} entities from Compendium ${e.collection}`);
}, sh = Qe.title, ch = async function(e) {
	s(game), ui.notifications.info(`Applying ${sh} System Migration for version ${game.system.version}.
    Please be patient and do not close your game or shut down your server.`, { permanent: !0 });
	for (let t in e.world) await e.world[t](null, null);
	for (let n of game.actors?.contents ?? []) try {
		let t = ih(n, e);
		foundry.utils.isEmpty(t) || await n.update(t);
	} catch (e) {
		e.message = `Failed ${sh} system migration for Actor ${n.name}: ${e.message}`, t.error(e);
	}
	for (let n of game.items?.contents ?? []) try {
		let r = rh(n, e);
		foundry.utils.isEmpty(r) || (t.log(`Migrating Item entity ${n.name}`), await n.update(r));
	} catch (e) {
		e.message = `Failed ${sh} system migration for Item ${n.name}: ${e.message}`, t.error(e);
	}
	for (let n of game.scenes?.contents ?? []) try {
		let r = ah(n, e);
		foundry.utils.isEmpty(r) || (t.log(`Migrating Scene entity ${n.name}`), await n.update(r));
	} catch (e) {
		e.message = `Failed {title} system migration for Scene ${n.name}: ${e.message}`, t.error(e);
	}
	for (let n of game.packs) t.log(`Migrating Compendium pack ${n.metadata.label}`), !n.locked && [
		"Actor",
		"Item",
		"Scene"
	].includes(n.metadata.type) && await oh(n, e);
	await E.systemMigrationVersion.set(Qe.version), ui.notifications?.info(`${Qe.title} system migration to version ${Qe.version} completed!`, { permanent: !0 });
};
window.migrateSystemCompendiums = async () => {
	s(game);
	for (let e of game.packs) e.metadata.packageName === "investigator" && [
		"Actor",
		"Item",
		"Scene"
	].includes(e.metadata.type) && await oh(e, th);
};
//#endregion
//#region src/startup/migrateWorldIfNeeded.ts
var lh = async () => {
	if (s(game), !game.user.isGM) return;
	let e = E.firstRun.get();
	if (e && (e = game.actors?.size === 0 && game.scenes?.size === 0 && game.items?.size === 0, e || (t.log("Detected a non-first run - setting firstRun to false"), await E.firstRun.set(!1))), e) {
		t.log("Detected a first run - pre-flagging all migrations");
		let e = O((e) => O(() => !0)(e))(th);
		await E.migrationFlags.set(e), await E.firstRun.set(!1), await E.systemMigrationVersion.set(Qe.version);
	}
	let [n, r, i] = nh(E.migrationFlags.get(), th);
	n && (await ch(r), await E.migrationFlags.set(i));
}, uh = () => {
	Hooks.once("babele.init", (e) => {
		if (e.setSystemTranslationsDir) e.setSystemTranslationsDir("lang/babele");
		else {
			let e = "Please make sure you have installed the latest version of Babele (unable to set system translations path).";
			t.warn(e), Hooks.once("ready", () => {
				ui.notifications?.warn(e);
			});
		}
	});
}, dh = () => {
	Hooks.on("devModeReady", () => {
		s(game), game.modules.get("_dev-mode")?.api.registerPackageDebugFlag("investigator", "boolean", { default: !1 });
	});
}, fh = function() {
	s(game), game.settings.registerMenu(P, "investigatorSettingsMenu", {
		name: "GUMSHOE Settings",
		label: "Open GUMSHOE System Settings",
		icon: "fas fa-search",
		type: Vm,
		restricted: !0,
		hint: "Open GUMSHOE System Settings"
	});
};
window.EMOTION_RUNTIME_AUTO_LABEL = !0, em(), uh(), Hooks.once("init", function() {
	t.log(`Initializing ${P} system`), fh();
}), Hooks.once("setup", function() {
	Zm();
}), Hooks.once("ready", async () => {
	await lh(), await wm(), s(game);
	for (let e of game.combats?.values() ?? []) e.setupTurns();
}), vm(), Om(), Um(), Cm(), dh(), bm(), _m(), eh(), $p(), $m(), Qm(), Em(), Lm(), Km(), jm(), km(), Am(), Tm(), xm(), Dm(), ym(), Mm();
function ph(e) {
	if (e instanceof CSSLayerStatementRule) return Array.from(e.nameList);
	if (e instanceof CSSGroupingRule) {
		let t = Array.from(e.cssRules).flatMap((e) => ph(e));
		return e instanceof CSSLayerBlockRule && t.unshift(e.name), t;
	}
	return [];
}
function mh(e) {
	try {
		return Array.from(e.cssRules);
	} catch {
		return [];
	}
}
function hh() {
	let e = Array.from(document.styleSheets).flatMap((e) => mh(e)).flatMap(ph), t = new Set(e);
	return Array.from(t.values()).toReversed();
}
function gh(e) {
	let t = e.filter((e) => !e.includes(".")), n = e.filter((e) => e.includes("."));
	return t.flatMap((e) => [e, ...gh(n.filter((t) => t.startsWith(e)).map((t) => t.slice(e.length + 1))).map((t) => `${e}.${t}`)]).map((e) => {
		let t = e.split(".").length - 1;
		return `${" ".repeat(t * 2)}${e}`;
	});
}
Hooks.once("ready", () => {
	let e = gh(hh());
	t.log("All CSS Cascade Layers currently in document (highest priority first):\n======================================================================\n%s", e.join("\n"));
});
//#endregion
