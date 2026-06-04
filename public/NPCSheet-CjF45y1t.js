import { o as e } from "./chunk-BQCxAhux.js";
import { $ as t, D as n, Q as r, T as i, _ as a, a as o, b as s, c, h as l, i as u, t as d, u as f, v as p, x as m, y as h, yn as g } from "./AsyncTextInput-DMwutQQ3.js";
import { D as _, n as v, t as y, w as b } from "./ImagePickle-CJmXJxfo.js";
import { t as ee } from "./react-Cajsgul7.js";
import { r as x, t as S } from "./Button-wjG7vDMi.js";
import { n as C, r as w } from "./assertApplicationV2-BCfhKtnc.js";
import { a as T, c as E, i as D, r as O } from "./CheckButtons-jyaVJQGW.js";
import { f as k, p as A, t as j } from "./Toggle-BWVRHS3C.js";
import { a as M, c as N, i as P, l as F, n as I, o as L, r as R, s as z, t as B } from "./WeaponsArea-DZ_0r_0t.js";
//#region src/hooks/useIsDocumentLimited.ts
var V = /* @__PURE__ */ e(ee(), 1);
function H() {
	n(game);
	let { doc: e } = w();
	return (0, V.useMemo)(() => e.testUserPermission(game.user, CONST.DOCUMENT_OWNERSHIP_LEVELS.LIMITED, { exact: !0 }), [e]);
}
//#endregion
//#region src/components/characters/Weapons/WeaponRowEdit.tsx
var U = ({ weapon: e, index: t }) => {
	let r = (0, V.useContext)(f), o = (0, V.useCallback)(async () => {
		e.system.isLongRange ? await e.system.setIsLongRange(!1) : e.system.isNearRange ? await e.system.setIsNearRange(!1) : e.system.isCloseRange && await e.system.setIsCloseRange(!1);
	}, [e]), c = (0, V.useCallback)(async () => {
		e.system.isCloseRange ? e.system.isNearRange ? e.system.isLongRange || await e.system.setIsLongRange(!0) : await e.system.setIsNearRange(!0) : await e.system.setIsCloseRange(!0);
	}, [e]), l = (0, V.useCallback)(async () => {
		n(game), await s({
			message: e.actor ? "DeleteActorNamesEquipmentName" : "DeleteEquipmentName",
			confirmText: "Delete",
			cancelText: "Cancel",
			confirmIconClass: "fa-trash",
			values: {
				ActorName: e.actor?.name ?? "",
				EquipmentName: e.name ?? ""
			}
		}) && await e.delete();
	}, [e]), u = t * 3 + 3;
	return /* @__PURE__ */ h(a, { children: [
		/* @__PURE__ */ p("div", { css: {
			gridColumn: "1/-1",
			gridRow: `${u}/${u + 2}`,
			background: r.colors.backgroundButton,
			margin: "-0.5em"
		} }),
		/* @__PURE__ */ p("div", { css: {
			gridColumn: "1/-1",
			gridRow: `${u + 2}/${u + 3}`,
			height: "0.5em"
		} }),
		/* @__PURE__ */ p(d, {
			css: {
				gridColumn: "name",
				gridRow: u
			},
			value: e.name ?? "",
			onChange: e.setName
		}),
		/* @__PURE__ */ p(k, {
			value: e.system.damage,
			onChange: e.system.setDamage,
			noPlusMinus: !0,
			css: {
				gridColumn: "base",
				gridRow: u
			}
		}),
		e.system.isPointBlank && /* @__PURE__ */ p(k, {
			value: e.system.pointBlankDamage,
			onChange: e.system.setPointBlankDamage,
			noPlusMinus: !0,
			css: {
				gridColumn: "pb",
				gridRow: u
			}
		}),
		e.system.isCloseRange && /* @__PURE__ */ p(k, {
			value: e.system.closeRangeDamage,
			onChange: e.system.setCloseRangeDamage,
			noPlusMinus: !0,
			css: {
				gridColumn: "cr",
				gridRow: u
			}
		}),
		e.system.isNearRange && /* @__PURE__ */ p(k, {
			value: e.system.nearRangeDamage,
			onChange: e.system.setNearRangeDamage,
			noPlusMinus: !0,
			css: {
				gridColumn: "nr",
				gridRow: u
			}
		}),
		e.system.isLongRange && /* @__PURE__ */ p(k, {
			value: e.system.longRangeDamage,
			onChange: e.system.setLongRangeDamage,
			noPlusMinus: !0,
			css: {
				gridColumn: "lr",
				gridRow: u
			}
		}),
		/* @__PURE__ */ h("div", {
			css: {
				gridColumn: e.system.isLongRange ? "back" : e.system.isNearRange ? "lr" : e.system.isCloseRange ? "nr" : e.system.isPointBlank ? "cr" : "pb",
				gridRow: u
			},
			children: [/* @__PURE__ */ p(S, {
				css: {
					width: "1em",
					padding: "0.2em 0.1em"
				},
				onClick: o,
				children: /* @__PURE__ */ p("i", { className: "fa fa-chevron-left" })
			}), e.system.isLongRange || /* @__PURE__ */ p(S, {
				css: {
					width: "1em",
					padding: "0.2em 0.1em"
				},
				onClick: c,
				children: /* @__PURE__ */ p("i", { className: "fa fa-chevron-right" })
			})]
		}),
		/* @__PURE__ */ p(S, {
			css: {
				gridColumn: "delete",
				gridRow: u,
				width: "1.6em",
				padding: "0.2em 0.1em"
			},
			onClick: l,
			children: /* @__PURE__ */ p("i", { className: "fa fa-trash" })
		}),
		/* @__PURE__ */ h("div", {
			css: {
				gridColumn: "ammo",
				gridRow: u + 1
			},
			children: [
				/* @__PURE__ */ p(T, {
					value: e.system.ability,
					onChange: (t) => e.system.setAbility(t),
					pickerValues: i.combatAbilities.get().toSorted()
				}),
				/* @__PURE__ */ p("div", {
					css: { marginTop: "0.5em" },
					children: /* @__PURE__ */ h("label", { children: [
						"Use ammo?",
						" ",
						/* @__PURE__ */ p(j, {
							checked: e.system.usesAmmo,
							onChange: e.system.setUsesAmmo
						})
					] })
				}),
				e.system.usesAmmo && /* @__PURE__ */ h(a, { children: [
					"Current",
					/* @__PURE__ */ p(k, {
						min: 0,
						value: e.system.ammo.value,
						onChange: e.system.setAmmo
					}),
					"Maximum",
					/* @__PURE__ */ p(k, {
						min: 0,
						value: e.system.ammo.max,
						onChange: e.system.setAmmoMax
					})
				] })
			]
		}),
		/* @__PURE__ */ p("div", {
			css: {
				position: "relative",
				gridColumn: "notes / -1",
				gridRow: u + 1,
				minHeight: "6em"
			},
			children: /* @__PURE__ */ p(P, {
				index: t,
				name: "weapon",
				html: e.system.notes,
				onSave: e.system.setNotes
			})
		})
	] });
}, W = () => {
	let { actor: e } = C();
	b(e);
	let t = e.system.getWeapons();
	return /* @__PURE__ */ h("div", { children: [
		/* @__PURE__ */ h("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ p("h1", {
				css: { flex: 1 },
				children: /* @__PURE__ */ p(o, { children: "Weapons" })
			}), /* @__PURE__ */ h(S, {
				css: {
					float: "right",
					width: "auto"
				},
				onClick: async () => {
					await e.createEmbeddedDocuments("Item", [{
						type: g,
						name: "A new weapon"
					}]);
				},
				children: [/* @__PURE__ */ p("i", { className: "fa fa-plus" }), /* @__PURE__ */ p(o, { children: "Add Weapon" })]
			})]
		}),
		t.length === 0 && /* @__PURE__ */ p("i", {
			css: {
				display: "block",
				fontSize: "1.2em"
			},
			children: /* @__PURE__ */ p(o, { children: "No weapons yet!" })
		}),
		t.length > 0 && /* @__PURE__ */ h("div", {
			css: {
				display: "grid",
				gridTemplateColumns: "10em repeat(5, 1fr) 2em 2em",
				gridTemplateAreas: "\"name base  pb    cr    nr    lr    back  delete\" \"ammo notes notes notes notes notes notes notes\"",
				gridAutoRows: "min-content",
				gap: "0.5em",
				whiteSpace: "nowrap",
				".header": { fontWeight: "bold" }
			},
			children: [
				/* @__PURE__ */ p("div", {
					className: "header",
					css: {
						gridColumn: "name",
						alignSelf: "end",
						gridRow: 2,
						textAlign: "center"
					},
					children: /* @__PURE__ */ p(o, { children: "Item Name" })
				}),
				/* @__PURE__ */ p("div", {
					className: "header",
					css: {
						gridColumn: "base / span 6",
						alignSelf: "end",
						gridRow: 1,
						borderBottom: "1px solid currentColor",
						textAlign: "center"
					},
					children: /* @__PURE__ */ p(o, { children: "Damage" })
				}),
				/* @__PURE__ */ p("div", {
					css: {
						gridColumn: "base",
						gridRow: 2
					},
					children: /* @__PURE__ */ p(o, { children: "Base " })
				}),
				/* @__PURE__ */ p("div", {
					css: {
						gridColumn: "pb",
						gridRow: 2
					},
					children: /* @__PURE__ */ p(o, { children: "PB" })
				}),
				/* @__PURE__ */ p("div", {
					css: {
						gridColumn: "cr",
						gridRow: 2
					},
					children: /* @__PURE__ */ p(o, { children: "CR" })
				}),
				/* @__PURE__ */ p("div", {
					css: {
						gridColumn: "nr",
						gridRow: 2
					},
					children: /* @__PURE__ */ p(o, { children: "NR" })
				}),
				/* @__PURE__ */ p("div", {
					css: {
						gridColumn: "lr",
						gridRow: 2
					},
					children: /* @__PURE__ */ p(o, { children: "LR" })
				}),
				r(t).map((e, t) => /* @__PURE__ */ p(U, {
					weapon: e,
					index: t
				}, e.id))
			]
		})
	] });
}, G = i.useMwInjuryStatus.get, K = i.useNpcCombatBonuses.get, q = i.useTurnPassingInitiative.get, J = i.npcStats.get, Y = () => {
	let { actor: e } = C();
	_(e);
	let t = x(e.system.getSheetThemeName()), n = J();
	return /* @__PURE__ */ h(c, {
		theme: t,
		mode: "large",
		css: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: "grid",
			gridTemplateRows: "min-content 1fr",
			gridTemplateColumns: "max-content 1fr 4em",
			gap: "0.5em",
			gridTemplateAreas: "\"sidebar title image\" \"sidebar main main\" "
		},
		children: [
			/* @__PURE__ */ p("div", {
				css: {
					gridArea: "title",
					textAlign: "center",
					position: "relative"
				},
				children: /* @__PURE__ */ p(L, {
					mainText: e.name ?? "",
					onChangeMainText: e.setName,
					css: { fontSize: "0.66em" }
				})
			}),
			/* @__PURE__ */ p(y, { css: {
				gridArea: "image",
				transform: "rotateZ(2deg)"
			} }),
			/* @__PURE__ */ h("div", {
				className: t.panelClass,
				css: {
					gridArea: "sidebar",
					position: "relative",
					padding: "0.5em",
					overflowX: "visible",
					overflowY: "auto",
					...t.panelStylePrimary
				},
				children: [
					/* @__PURE__ */ p(S, {
						onClick: e.system.confirmRefresh,
						css: { marginBottom: "0.5em" },
						children: /* @__PURE__ */ p(o, { children: "Full Refresh" })
					}),
					G() && /* @__PURE__ */ p("div", {
						css: { marginBottom: "0.5em" },
						children: /* @__PURE__ */ p(M, {
							status: e.system.mwInjuryStatus,
							setStatus: e.system.setMwInjuryStatus
						})
					}),
					/* @__PURE__ */ p("hr", {}),
					K() && /* @__PURE__ */ h(a, { children: [
						/* @__PURE__ */ p("h3", {
							css: { gridColumn: "start / end" },
							children: /* @__PURE__ */ p(o, { children: "Combat bonus" })
						}),
						/* @__PURE__ */ p(k, {
							value: e.system.combatBonus,
							onChange: e.system.setCombatBonus
						}),
						/* @__PURE__ */ p("h3", {
							css: { gridColumn: "start / end" },
							children: /* @__PURE__ */ p(o, { children: "Damage bonus" })
						}),
						/* @__PURE__ */ p(k, {
							value: e.system.damageBonus,
							onChange: e.system.setDamageBonus
						})
					] }),
					Object.keys(n).map((e) => /* @__PURE__ */ p(R, {
						id: e,
						stat: n[e]
					}, e)),
					/* @__PURE__ */ p("hr", {}),
					/* @__PURE__ */ p(I, {}),
					/* @__PURE__ */ p("hr", {}),
					/* @__PURE__ */ p(z, {}),
					q() && /* @__PURE__ */ h(a, { children: [/* @__PURE__ */ p("h4", {
						css: { width: "8em" },
						children: /* @__PURE__ */ p(o, { children: "Number of turns" })
					}), /* @__PURE__ */ p(k, {
						value: e.system.initiativePassingTurns,
						onChange: e.system.setPassingTurns
					})] })
				]
			}),
			/* @__PURE__ */ p("div", {
				css: {
					gridArea: "main",
					position: "relative",
					padding: "0.5em",
					overflow: "auto"
				},
				children: /* @__PURE__ */ p(A, {
					defaultTab: "play",
					tabs: [
						{
							id: "play",
							label: "Play",
							content: /* @__PURE__ */ h(a, { children: [
								/* @__PURE__ */ p(B, {}),
								/* @__PURE__ */ p("div", { css: { height: "1em" } }),
								/* @__PURE__ */ p(N, { flipLeftRight: !0 })
							] })
						},
						{
							id: "edit",
							label: "Edit",
							content: /* @__PURE__ */ h(a, { children: [
								/* @__PURE__ */ p(W, {}),
								/* @__PURE__ */ p("div", { css: { height: "1em" } }),
								/* @__PURE__ */ p(F, { npcMode: !0 })
							] })
						},
						{
							id: "notes",
							label: "Notes",
							content: /* @__PURE__ */ p(u, {
								css: {
									...l,
									gridTemplateRows: "1fr",
									padding: "0.5em"
								},
								children: /* @__PURE__ */ p(O.Provider, {
									value: "npcNote",
									children: /* @__PURE__ */ p(D, {
										name: "notes",
										html: e.system.notes,
										onSave: e.system.setNotes
									})
								})
							})
						},
						{
							id: "gmNotes",
							label: "GM Notes",
							content: /* @__PURE__ */ p(u, {
								css: {
									...l,
									gridTemplateRows: "1fr",
									padding: "0.5em"
								},
								children: /* @__PURE__ */ p(O.Provider, {
									value: "npcNote",
									children: /* @__PURE__ */ p(D, {
										name: "gmNotes",
										html: e.system.gmNotes,
										onSave: e.system.setGMNotes
									})
								})
							})
						}
					]
				})
			})
		]
	});
};
Y.displayName = "NPCSheetFull";
//#endregion
//#region src/components/inputs/NotesDisplay.tsx
var X = "investigator-secret-hide-reveal-button", Z = ({ className: e, html: r, toggleSecret: i }) => {
	n(game);
	let a = v(), o = (0, V.useRef)(null), [s, c] = (0, V.useState)("");
	return (0, V.useEffect)(() => {
		E(r).then(c);
	}, [r]), (0, V.useLayoutEffect)(() => {
		o.current && (o.current.innerHTML = s, !(!a || !i) && o.current.querySelectorAll("section.secret").forEach((e, n) => {
			t.log("Adding reveal button", n);
			let r = document.createElement("button");
			r.textContent = m(e.classList.contains("revealed") ? "Hide secret" : "Reveal secret"), r.classList.add(X), r.addEventListener("click", () => {
				i(n);
			}), e.append(r);
		}));
	}, [
		s,
		a,
		i
	]), /* @__PURE__ */ p("div", {
		ref: o,
		className: e,
		css: {
			minHeight: "100%",
			"section.secret": {
				display: a ? "block" : "none",
				"&.revealed": { display: "block" }
			}
		}
	});
};
Z.displayName = "NotesDisplay";
//#endregion
//#region src/components/characters/NPCSheetSimple.tsx
var Q = () => {
	let { actor: e } = C();
	_(e);
	let t = x(e.system.getSheetThemeName()), n = e.system.notes, r = n.length > 0;
	return /* @__PURE__ */ h(c, {
		theme: t,
		mode: "large",
		css: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: "flex",
			alignItems: "stretch",
			alignContent: "flex-start",
			flexWrap: "wrap",
			flexDirection: "column",
			justifyContent: "flex-start"
		},
		children: [/* @__PURE__ */ p(L, {
			mainText: e.name ?? "",
			onChangeMainText: e.setName,
			css: {
				fontSize: "0.66em",
				width: "100%"
			}
		}), /* @__PURE__ */ h("div", {
			css: {
				flex: 1,
				overflow: "auto",
				display: "flex",
				flexDirection: "row",
				gap: "1em"
			},
			children: [/* @__PURE__ */ p("div", {
				css: {
					containerType: "size",
					display: "flex",
					justifyContent: "center",
					alignItems: "start",
					flex: 1,
					padding: "1em"
				},
				children: /* @__PURE__ */ p(y, { css: {
					width: "100%",
					height: "auto",
					aspectRatio: "1/1",
					"@container (aspect-ratio > 1/1)": {
						width: "auto",
						height: "100%"
					},
					transform: "rotateZ(-1deg)"
				} })
			}), r && /* @__PURE__ */ p(Z, {
				css: {
					flex: 1,
					overflow: "auto",
					background: t.colors.backgroundPrimary,
					padding: "1em"
				},
				html: n
			})]
		})]
	});
};
Q.displayName = "NPCSheetSimple";
//#endregion
//#region src/components/characters/NPCSheet.tsx
var $ = () => {
	let { actor: e } = C();
	return _(e), n(game), H() ? /* @__PURE__ */ p(Q, {}) : /* @__PURE__ */ p(Y, {});
};
$.displayName = "NPCSheet";
//#endregion
export { $ as NPCSheet };
