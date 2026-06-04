import { o as e } from "./chunk-BQCxAhux.js";
import { D as t, O as n, T as r, _ as i, a, an as o, b as s, c, i as l, t as u, v as d, y as f } from "./AsyncTextInput-DMwutQQ3.js";
import { m as p, o as m, t as h } from "./ImagePickle-CJmXJxfo.js";
import { t as g } from "./react-Cajsgul7.js";
import { n as _ } from "./party-CvVywrVv.js";
import { n as v, t as y } from "./assertApplicationV2-BCfhKtnc.js";
import { t as b } from "./GridField-CzF2zV4m.js";
//#region src/components/party/AbilityRow.tsx
var x = /* @__PURE__ */ e(g(), 1), S = ({ abilityRowData: e, index: t, actors: a }) => {
	let o = n.themes[r.defaultThemeName.get()] || n.themes.tealTheme, c = e.total === 0, l = t % 2 == 0, u = c ? l ? o.colors.bgTransDangerPrimary : o.colors.bgTransDangerSecondary : l ? o.colors.backgroundPrimary : o.colors.backgroundSecondary, m = c ? l ? o.colors.bgOpaqueDangerPrimary : o.colors.bgOpaqueDangerSecondary : l ? o.colors.bgOpaquePrimary : o.colors.bgOpaqueSecondary;
	return /* @__PURE__ */ f(i, { children: [
		/* @__PURE__ */ d("div", {
			css: {
				gridRow: t + 2,
				backgroundColor: m,
				padding: "0.5em",
				textAlign: "left",
				position: "sticky",
				left: 0
			},
			children: e.abilityItem.name
		}),
		a.map((n, r) => {
			if (n === void 0 || n.id === null) return null;
			let i = e.actorInfo[n.id];
			return /* @__PURE__ */ d("a", {
				onClick: async (t) => {
					t.preventDefault();
					let r = i.abilityId ? n.items.get(i.abilityId) : void 0;
					if (r) {
						let e = r.sheet;
						y(e), e.render({ force: !0 });
					} else {
						if (!await s({
							message: "{ActorName} does not have {AbilityName}. Add it now?",
							confirmText: "Yes please!",
							cancelText: "No thanks",
							confirmIconClass: "fa-check",
							resolveFalseOnCancel: !0,
							values: {
								ActorName: n.name ?? "",
								AbilityName: e.abilityItem.name ?? ""
							}
						})) return;
						let t = (await n.createEmbeddedDocuments("Item", [e.abilityItem.toJSON()]))?.[0];
						if (p(t)) {
							let e = t.sheet;
							y(e), e.render({ force: !0 });
						}
					}
				},
				css: {
					background: u,
					display: "block",
					gridRow: t + 2,
					gridColumn: r + 2,
					padding: "0.5em",
					textAlign: "center"
				},
				children: i?.rating ?? "—"
			}, n.id);
		}),
		/* @__PURE__ */ d("div", {
			css: {
				background: m,
				gridRow: t + 2,
				gridColumn: a.length + 2,
				position: "sticky",
				right: 0,
				padding: "0.5em",
				textAlign: "center"
			},
			children: e.total
		})
	] });
}, C = "typeHeader", w = "categoryHeader", T = "abilityRowString", E = (e) => e.rowType === C, D = (e) => e.rowType === w, O = async () => {
	let e = r.newPCPacks.get().map(async (e) => (t(game), (await game.packs.find((t) => t.metadata.type === "Item" && t.collection === e)?.getDocuments() ?? []).filter((e) => p(e))));
	return (await Promise.all(e)).flat();
}, k = (e, t) => e === "investigativeAbility" && t === "generalAbility" ? -1 : e === "generalAbility" && t === "investigativeAbility" ? 1 : 0, A = (e = "", t = "") => {
	let n = e.toLowerCase(), r = t.toLowerCase();
	return n < r ? -1 : n > r ? 1 : 0;
}, j = (e, t) => {
	let n = k(e.type, t.type);
	if (n !== 0) return n;
	let r = A(e.system.categoryId, t.system.categoryId);
	return r === 0 ? A(e.name ?? "", t.name ?? "") : r;
}, M = (e, t) => {
	let n = [], r = e.sort(j), i = null, a = null;
	for (let e of r) {
		let { type: r, name: o, system: { categoryId: s } } = e;
		r !== i && (n.push({
			rowType: C,
			abilityType: r
		}), i = r, a = null), s !== a && (n.push({
			rowType: w,
			category: s
		}), a = s);
		let c = {}, l = 0;
		for (let e of t) {
			if (e === void 0) continue;
			let t = e.system.getAbilityByName(o ?? "", r);
			if (e.id !== null) {
				let n = t?.system.rating ?? 0;
				c[e.id] = {
					abilityId: t?.id ?? void 0,
					actorId: e.id,
					rating: n
				}, l += n ?? 0;
			}
		}
		n.push({
			rowType: T,
			abilityItem: e,
			actorInfo: c,
			total: l
		});
	}
	return n;
}, N = () => {
	let { actor: e } = v();
	_(e);
	let t = n.themes[r.defaultThemeName.get()] || n.themes.tealTheme, [i, s] = (0, x.useState)([]), [g, C] = (0, x.useState)([]), w = e.system.getActorIds(), T = (0, x.useMemo)(() => w.map((e) => game.actors?.get(e)).filter(m), [w]);
	(0, x.useEffect)(() => {
		O().then(s);
		let t = async (e) => {
			s(await O());
		}, n = (t, n, r) => {
			let i = e.system.actorIds.filter((e) => e !== t.id);
			e.update({ system: { actorIds: i } });
		}, r = async (t) => {
			p(t) && t.isOwned && e.system.actorIds.includes(t.actor?.id ?? "") && s(await O());
		};
		return Hooks.on(o, t), Hooks.on("deleteActor", n), Hooks.on("updateItem", r), Hooks.on("deleteItem", r), Hooks.on("createItem", r), () => {
			Hooks.off(o, t), Hooks.off("deleteActor", n), Hooks.off("updateItem", r), Hooks.off("deleteItem", r), Hooks.off("createItem", r);
		};
	}, [e]), (0, x.useEffect)(() => {
		C(M(i, T));
	}, [i, T]);
	let k = (0, x.useCallback)((t) => {
		t.preventDefault();
		let n = t.currentTarget.dataset.actorId;
		n !== void 0 && e.system.removeActorId(n);
	}, [e]);
	return /* @__PURE__ */ f(c, {
		mode: "small",
		theme: t,
		css: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: "flex",
			flexDirection: "column"
		},
		children: [
			e.system.actorIds.length === 0 && /* @__PURE__ */ d("div", {
				style: {
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 100,
					padding: "1em",
					borderRadius: "0.5em",
					background: t.colors.bgOpaquePrimary,
					boxShadow: `0 0 1em 0em ${t.colors.text}`,
					fontSize: "1.4em",
					textAlign: "center"
				},
				children: /* @__PURE__ */ d(a, { children: "No actors in this party yet! Drag PC actors from the sidebar into this window to add them." })
			}),
			/* @__PURE__ */ d(l, {
				css: { paddingBottom: "0.5em" },
				children: /* @__PURE__ */ d(b, {
					label: "Party Name",
					children: /* @__PURE__ */ d(u, {
						value: e.name || "",
						onChange: e.setName
					})
				})
			}),
			/* @__PURE__ */ f("div", {
				css: {
					flex: 1,
					display: "grid",
					gridTemplateRows: "min-content",
					gridAutoRows: "auto",
					gridTemplateColumns: "max-content",
					gridAutoColumns: "minmax(min-content, auto)",
					overflow: "auto",
					position: "relative"
				},
				children: [
					/* @__PURE__ */ d("div", {
						css: {
							gridRow: 1,
							gridColumn: 1,
							position: "sticky",
							top: 0,
							left: 0,
							background: t.colors.bgOpaqueSecondary,
							padding: "0.5em",
							textAlign: "center",
							zIndex: 3
						},
						children: /* @__PURE__ */ d(h, { css: {
							height: "5em",
							width: "4em",
							transform: "rotateZ(-2deg)",
							margin: "0 auto"
						} })
					}),
					T.map((e, n) => /* @__PURE__ */ f("div", {
						css: {
							gridRow: 1,
							gridColumn: n + 2,
							position: "sticky",
							top: 0,
							backgroundColor: t.colors.bgOpaquePrimary,
							padding: "0.5em",
							zIndex: 2,
							lineHeight: 1,
							overflow: "hidden",
							textOverflow: "ellipsis",
							textAlign: "center"
						},
						children: [
							/* @__PURE__ */ f("a", {
								css: {
									textAlign: "center",
									display: "-webkit-box",
									"-webkit-line-clamp": "2",
									"-webkit-box-orient": "vertical",
									overflow: "hidden"
								},
								onClick: (t) => {
									t.preventDefault();
									let n = e.sheet;
									y(n), n.render({ force: !0 });
								},
								children: [/* @__PURE__ */ d("div", { css: {
									width: "3em",
									height: "3em",
									backgroundImage: `url("${e.img}")`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									margin: "0 auto"
								} }), e?.name ?? "Missing"]
							}),
							/* @__PURE__ */ d("div", { css: { height: "1.5em" } }),
							/* @__PURE__ */ d("div", {
								css: {
									position: "absolute",
									bottom: "0.5em",
									left: "50%",
									transform: "translateX(-50%)"
								},
								children: /* @__PURE__ */ d("button", {
									css: { "&&": {
										fontSize: "0.7em",
										padding: "0.1em 0.3em",
										border: `1px solid ${t.colors.text}`,
										width: "auto"
									} },
									"data-actor-id": e._id ?? "",
									onClick: k,
									children: /* @__PURE__ */ d(a, { children: "REMOVE" })
								})
							})
						]
					}, e?.id || `missing-${n}`)),
					/* @__PURE__ */ d("div", {
						css: {
							gridRow: 1,
							gridColumn: T.length + 2,
							position: "sticky",
							top: 0,
							right: 0,
							background: t.colors.bgOpaqueSecondary,
							padding: "0.5em",
							textAlign: "center",
							zIndex: 3,
							lineHeight: 1
						},
						children: /* @__PURE__ */ d(a, { children: "Total" })
					}),
					/* @__PURE__ */ d("div", {
						css: {
							visibility: "hidden",
							gridRow: 1,
							gridColumn: T.length + 2,
							top: 0,
							right: 0,
							background: t.colors.bgOpaquePrimary,
							padding: "0.5em",
							textAlign: "center",
							lineHeight: 1
						},
						children: /* @__PURE__ */ d(a, { children: "Total" })
					}),
					g.map((e, t) => E(e) ? /* @__PURE__ */ d("h1", {
						css: { "&&": {
							gridRow: t + 2,
							padding: "0.5em",
							textAlign: "left",
							position: "sticky",
							left: 0
						} },
						children: e.abilityType === "generalAbility" ? /* @__PURE__ */ d(a, { children: "General" }) : /* @__PURE__ */ d(a, { children: "Investigative" })
					}, e.abilityType) : D(e) ? /* @__PURE__ */ d("h2", {
						css: { "&&": {
							gridRow: t + 2,
							padding: "0.5em",
							textAlign: "left",
							position: "sticky",
							left: 0
						} },
						children: e.category
					}, e.category + t) : /* @__PURE__ */ d(S, {
						abilityRowData: e,
						index: t,
						actors: T
					}, e.abilityItem.id))
				]
			})
		]
	});
};
N.displayName = "PartySheet";
//#endregion
export { N as PartySheet };
