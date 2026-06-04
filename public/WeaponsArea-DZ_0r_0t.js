import { o as e } from "./chunk-BQCxAhux.js";
import { D as t, Q as n, T as r, _ as i, a, g as o, o as s, r as c, u as l, v as u, x as d, y as f, yn as p } from "./AsyncTextInput-DMwutQQ3.js";
import { g as m, m as h, p as g, v as _, w as v, y } from "./ImagePickle-CJmXJxfo.js";
import { t as b } from "./react-Cajsgul7.js";
import { t as x } from "./Button-wjG7vDMi.js";
import { n as S, t as C } from "./assertApplicationV2-BCfhKtnc.js";
import { a as w, c as T, i as E, n as D, o as O, s as k, t as A } from "./CheckButtons-jyaVJQGW.js";
import { f as j, t as M } from "./Toggle-BWVRHS3C.js";
//#region src/components/inputs/Checkbox.tsx
var N = /* @__PURE__ */ e(b(), 1), P = /* @__PURE__ */ N.memo(({ checked: e, onChange: t, className: n, title: r }) => {
	let i = (0, N.useContext)(s), a = (0, N.useContext)(l);
	return /* @__PURE__ */ f("label", {
		title: r,
		css: {
			display: "inline-block",
			position: "relative"
		},
		children: [/* @__PURE__ */ u("input", {
			id: i,
			type: "checkbox",
			checked: e,
			css: {
				position: "absolute",
				opacity: 0,
				zIndex: -1
			},
			onChange: (e) => {
				t(e.currentTarget.checked);
			}
		}), /* @__PURE__ */ u("span", {
			className: n,
			css: {
				cursor: "pointer",
				font: "16px sans-serif",
				color: "black",
				":before": {
					content: "''",
					borderWidth: "2px",
					borderColor: "#ccc",
					borderStyle: "inset",
					borderRadius: "5px",
					display: "inline-block",
					width: "1.1em",
					height: "1.1em",
					aspectRatio: "1 / 1",
					verticalAlign: "-2px",
					backgroundColor: a.colors.accentContrast
				},
				"input[type=checkbox]:checked+&:before": {
					color: a.colors.accentContrast,
					textAlign: "center",
					verticalAlign: "middle"
				},
				"input[type=checkbox]:checked+&:after": {
					content: "'✓'",
					fontWeight: "bold",
					color: a.colors.accent,
					position: "absolute",
					top: "0em",
					left: "0.3em"
				},
				"input[type=checkbox]:focus+&:before, input[type=checkbox]:not(:disabled)+&:hover:before": {
					boxShadow: `0px 0px 0px 2px ${a.colors.glow}`,
					outlineColor: "transparent",
					outlineWidth: "2px",
					outlineStyle: "dotted"
				},
				"input[type=checkbox]:disabled+&": {
					cursor: "default",
					color: "black",
					opacity: "0.5"
				}
			}
		})]
	});
});
P.displayName = "Checkbox";
//#endregion
//#region src/components/inputs/AsyncCheckbox.tsx
var F = /* @__PURE__ */ N.memo(({ checked: e, onChange: t, className: n, title: r }) => {
	let [i, a] = (0, N.useState)(e);
	return (0, N.useEffect)(() => {
		a(e);
	}, [e]), /* @__PURE__ */ u(P, {
		title: r,
		checked: i,
		onChange: (0, N.useCallback)((e) => {
			t(e), a(e);
		}, [t]),
		className: n
	});
});
F.displayName = "AsyncCheckbox";
//#endregion
//#region src/components/characters/AbilitySlugEdit.tsx
var I = ({ ability: e, showOcc: t = !0 }) => {
	g(e);
	let n = (0, N.useContext)(o), r = (0, N.useCallback)((e) => {
		n !== null && n._onDragStart(e);
	}, [n]), i = (0, N.useCallback)((t) => {
		e.system.setRatingAndRefreshPool(t);
	}, [e]), a = e.sheet;
	return C(a), /* @__PURE__ */ f(N.Fragment, { children: [
		/* @__PURE__ */ u("a", {
			onClick: () => {
				a.render({ force: !0 });
			},
			"data-item-id": e.id,
			onDragStart: r,
			draggable: "true",
			css: {
				gridColumn: "ability",
				textAlign: "end",
				lineHeight: "1"
			},
			children: e.name
		}),
		/* @__PURE__ */ u("div", {
			css: {
				gridColumn: "rating",
				justifySelf: "center"
			},
			children: /* @__PURE__ */ u(j, {
				min: 0,
				max: e.system.max,
				value: e.system.rating,
				onChange: i,
				smallButtons: !0
			})
		}),
		t && /* @__PURE__ */ u("div", {
			css: {
				gridColumn: "isocc",
				justifySelf: "center"
			},
			children: /* @__PURE__ */ u(F, {
				checked: e.system.occupational,
				onChange: e.system.setOccupational,
				title: "Occupational Ability?"
			})
		}),
		/* @__PURE__ */ u(k, {
			ability: e,
			css: { gridColumn: "1/-1" }
		}),
		e.system.hasSpecialities && e.system.getSpecialitesCount() > 0 && /* @__PURE__ */ u("div", {
			css: {
				paddingLeft: "2em",
				gridColumn: "1/-1"
			},
			children: /* @__PURE__ */ u(O, { ability: e })
		})
	] }, e.id);
}, L = ({ ability: e }) => {
	g(e);
	let t = (0, N.useContext)(o), n = (0, N.useCallback)((e) => {
		t !== null && t._onDragStart(e);
	}, [t]), r = (0, N.useCallback)((t) => {
		t ? e.system.setRatingAndRefreshPool(1) : e.system.setRatingAndRefreshPool(0);
	}, [e]), i = e.sheet;
	return C(i), /* @__PURE__ */ f(N.Fragment, { children: [
		/* @__PURE__ */ u("a", {
			onClick: () => {
				i.render({ force: !0 });
			},
			"data-item-id": e.id,
			onDragStart: n,
			draggable: "true",
			css: {
				gridColumn: "ability",
				marginBottom: "0.5em",
				textAlign: "end"
			},
			children: e.name
		}),
		/* @__PURE__ */ u("div", {
			css: {
				gridColumn: "rating",
				justifySelf: "center"
			},
			children: /* @__PURE__ */ u(M, {
				checked: e.system.rating > 0,
				onChange: r
			})
		}),
		/* @__PURE__ */ u(k, {
			ability: e,
			css: { gridColumn: "1/-1" }
		}),
		e.system.hasSpecialities && e.system.getSpecialitesCount() > 0 && /* @__PURE__ */ u("div", {
			css: {
				paddingLeft: "2em",
				gridColumn: "1/-1"
			},
			children: /* @__PURE__ */ u(O, { ability: e })
		})
	] }, e.id);
}, R = () => /* @__PURE__ */ u("i", {
	style: { gridColumn: "1/-1" },
	children: /* @__PURE__ */ u(a, { children: "No abilities in this category" })
}), z = r.useMwStyleAbilities.get, B = ({ npcMode: e = !1 }) => {
	let { actor: t } = S();
	v(t);
	let r = (0, N.useContext)(l), { investigativeAbilities: a, generalAbilities: o } = t.system.getCategorizedAbilities(!1, !1), s = z(), c = e || s, d = t.items.some((e) => m(e) && !e.system.isQuickShock), p = !c && d, h = t.system.getPushPoolWarnings();
	return /* @__PURE__ */ u(i, { children: /* @__PURE__ */ f("div", {
		css: {
			display: "grid",
			gridTemplateColumns: "minmax(33%, auto) minmax(33%, auto)",
			gridTemplateAreas: "'warnings warnings'" + (c ? "'general investigative'" : "'investigative general'"),
			columnGap: "1em",
			marginBottom: "1em"
		},
		children: [
			/* @__PURE__ */ u("div", {
				css: { gridArea: "warnings" },
				children: h.map((e, t) => /* @__PURE__ */ f("div", {
					css: {
						background: r.colors.danger,
						color: r.colors.accentContrast,
						borderRadius: "0.5em",
						padding: "0.2em 0.7em",
						marginBottom: "0.5em"
					},
					children: ["⚠️", e]
				}, t))
			}),
			!s && /* @__PURE__ */ f("div", {
				css: {
					gridArea: "investigative",
					display: "grid",
					gridTemplateAreas: "'ability rating isocc'",
					gridTemplateColumns: p ? "1fr max-content auto" : "1fr max-content",
					columnGap: "0.5em",
					rowGap: "0.1em",
					alignItems: "center",
					alignContent: "start"
				},
				children: [
					c || /* @__PURE__ */ u("i", {
						css: {
							gridColumn: "rating",
							font: r.displayFont,
							fontSize: "smaller"
						},
						children: "Rating"
					}),
					p && /* @__PURE__ */ u("i", {
						css: {
							gridColumn: "isocc",
							font: r.displayFont,
							fontSize: "smaller"
						},
						title: "Occupational Ability",
						children: "Oc."
					}),
					Object.keys(a).map((e) => /* @__PURE__ */ f(N.Fragment, { children: [
						/* @__PURE__ */ u("h2", {
							css: {
								gridColumn: "1 / -1",
								borderWidth: "1px",
								borderStyle: "none none solid none",
								borderColor: r.colors.text
							},
							children: e
						}),
						n(a[e]).map((e) => e.system.isQuickShock ? /* @__PURE__ */ u(L, { ability: e }, e.id) : /* @__PURE__ */ u(I, {
							ability: e,
							showOcc: p
						}, e.id)),
						a[e].length === 0 && /* @__PURE__ */ u(R, {})
					] }, e))
				]
			}),
			/* @__PURE__ */ f("div", {
				css: {
					gridArea: "general",
					display: "grid",
					gridTemplateAreas: "'ability rating isocc'",
					gridTemplateColumns: c ? "1fr max-content" : "1fr max-content auto",
					columnGap: "0.5em",
					rowGap: "0.1em",
					alignItems: "center",
					alignContent: "start"
				},
				children: [
					c || /* @__PURE__ */ u("i", {
						css: {
							gridColumn: "rating",
							font: r.displayFont,
							fontSize: "smaller"
						},
						children: "Rating"
					}),
					c || /* @__PURE__ */ u("i", {
						css: {
							gridColumn: "isocc",
							font: r.displayFont,
							fontSize: "smaller"
						},
						title: "Occupational Ability",
						children: "Oc."
					}),
					Object.keys(o).map((e) => /* @__PURE__ */ f(N.Fragment, { children: [
						/* @__PURE__ */ u("h2", {
							css: {
								gridColumn: "1 / -1",
								borderWidth: "1px",
								borderStyle: "none none solid none",
								borderColor: r.colors.text
							},
							children: e
						}),
						n(o[e]).map((e) => /* @__PURE__ */ u(I, {
							ability: e,
							showOcc: !c
						}, e.id)),
						o[e].length === 0 && /* @__PURE__ */ u(R, {})
					] }, e))
				]
			})
		]
	}) });
}, V = ({ ability: e }) => {
	g(e);
	let t = (0, N.useContext)(o), n = (0, N.useCallback)((e) => {
		t !== null && t._onDragStart(e);
	}, [t]), [r, i] = (0, N.useState)(0), a = (0, N.useCallback)(() => {
		e.system.testAbility(r), i(0);
	}, [e, r]), s = (0, N.useCallback)(() => {
		e.system.spendAbility(r), i(0);
	}, [e, r]), c = (0, N.useCallback)(() => {
		i((e) => e + 1);
	}, []), l = (0, N.useCallback)(() => {
		i((e) => e - 1);
	}, []), d = e.sheet;
	return C(d), /* @__PURE__ */ f(N.Fragment, { children: [
		/* @__PURE__ */ u("a", {
			onClick: () => {
				d.render({ force: !0 });
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
		/* @__PURE__ */ f("div", {
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
		/* @__PURE__ */ f("div", {
			css: {
				gridColumn: "set",
				display: "grid",
				gridTemplateColumns: "1.6em 1.6em"
			},
			children: [/* @__PURE__ */ u(x, {
				css: { gridColumn: "1" },
				onClick: l,
				disabled: r <= 0,
				children: /* @__PURE__ */ u("i", {
					css: { fontSize: "x-small" },
					className: "fa fa-minus"
				})
			}), /* @__PURE__ */ u(x, {
				css: { gridColumn: "2" },
				onClick: c,
				disabled: r >= e.system.pool,
				children: /* @__PURE__ */ u("i", {
					css: { fontSize: "x-small" },
					className: "fa fa-plus"
				})
			})]
		}),
		/* @__PURE__ */ f("div", {
			css: { gridColumn: "spend" },
			children: [
				m(e) && /* @__PURE__ */ f(x, {
					disabled: r === 0,
					onClick: s,
					style: { whiteSpace: "nowrap" },
					children: [/* @__PURE__ */ u("i", {
						className: "fa fa-search",
						title: "Spend"
					}), r]
				}),
				y(e) && /* @__PURE__ */ f(x, {
					css: { width: "4.1em" },
					onClick: a,
					children: [
						/* @__PURE__ */ u("i", {
							className: "fa fa-dice",
							title: "Test"
						}),
						"+",
						r
					]
				}),
				y(e) && e.system.canBeInvestigative && /* @__PURE__ */ u(x, {
					css: { width: "2em" },
					disabled: r === 0,
					onClick: s,
					children: /* @__PURE__ */ u("i", {
						className: "fa fa-search",
						title: "Spend"
					})
				})
			]
		}),
		/* @__PURE__ */ u(k, {
			ability: e,
			css: { gridColumn: "1/-1" }
		}),
		e.system.hasSpecialities && /* @__PURE__ */ u("div", {
			css: {
				paddingLeft: "1em",
				gridColumn: "1/-1",
				textAlign: "right"
			},
			children: (e.system.specialities || []).map((t, n) => /* @__PURE__ */ f("span", { children: [t.trim(), n < e.system.specialities.length - 1 && ", "] }, n))
		})
	] }, e.id);
}, H = ({ ability: e, disabled: t }) => {
	g(e);
	let n = (0, N.useContext)(o), r = (0, N.useCallback)((e) => {
		n !== null && n._onDragStart(e);
	}, [n]), i = (0, N.useCallback)(() => {
		e.system.push();
	}, [e]), s = e.sheet;
	return C(s), /* @__PURE__ */ f(N.Fragment, { children: [
		/* @__PURE__ */ u("a", {
			onClick: () => {
				s.render({ force: !0 });
			},
			"data-item-id": e.id,
			onDragStart: r,
			draggable: "true",
			css: {
				gridColumn: "ability",
				lineHeight: .9,
				textAlign: "end"
			},
			children: e.name
		}),
		/* @__PURE__ */ u("div", {
			css: {
				gridColumn: "rating/-1",
				justifySelf: "right"
			},
			children: /* @__PURE__ */ u(x, {
				css: { width: "4.1em" },
				onClick: i,
				disabled: t,
				children: /* @__PURE__ */ u(a, { children: "Push" })
			})
		}),
		/* @__PURE__ */ u(k, {
			ability: e,
			css: { gridColumn: "1/-1" }
		}),
		e.system.hasSpecialities && /* @__PURE__ */ u("div", {
			css: {
				paddingLeft: "1em",
				gridColumn: "1/-1"
			},
			children: (e.system.specialities || []).map((e, t) => /* @__PURE__ */ u("div", { children: e.trim() }, t))
		})
	] }, e.id);
}, U = ({ flipLeftRight: e }) => {
	let { actor: t } = S();
	v(t);
	let { investigativeAbilities: a, generalAbilities: o } = t.system.getCategorizedAbilities(!0, !0), s = (0, N.useContext)(l), c = t.system.getPushPool(), d = c === void 0 || c.system.pool === 0, p = r.showEmptyInvestigativeCategories.get();
	return /* @__PURE__ */ u(i, { children: /* @__PURE__ */ f("div", {
		css: {
			display: "grid",
			gridTemplateColumns: "minmax(33%, auto) minmax(33%, auto)",
			gridTemplateAreas: e ? "'general investigative'" : "'investigative general'",
			columnGap: "1em",
			marginBottom: "1em"
		},
		children: [/* @__PURE__ */ u("div", {
			css: {
				gridArea: "investigative",
				display: "grid",
				gridTemplateAreas: "'ability rating set spend'",
				gridTemplateColumns: "1fr max-content max-content max-content",
				columnGap: "0.2em",
				rowGap: "0.4em",
				alignItems: "center",
				alignContent: "start"
			},
			children: Object.keys(a).map((e) => p || a[e].length > 0 ? /* @__PURE__ */ f(N.Fragment, { children: [
				/* @__PURE__ */ u("h2", {
					css: {
						gridColumn: "1 / -1",
						borderWidth: "1px",
						borderStyle: "none none solid none",
						borderColor: s.colors.text
					},
					children: e
				}),
				n(a[e]).map((e) => e.system.isQuickShock ? /* @__PURE__ */ u(H, {
					ability: e,
					disabled: d
				}, e.id) : /* @__PURE__ */ u(V, { ability: e }, e.id)),
				a[e].length === 0 && /* @__PURE__ */ u(R, {})
			] }, e) : /* @__PURE__ */ u("span", {}, e))
		}), /* @__PURE__ */ u("div", {
			css: {
				gridArea: "general",
				display: "grid",
				gridTemplateColumns: "1fr max-content max-content max-content",
				gridTemplateAreas: "'ability rating set spend'",
				columnGap: "0.2em",
				rowGap: "0.4em",
				alignItems: "center",
				alignContent: "start"
			},
			children: Object.keys(o).map((e) => /* @__PURE__ */ f(N.Fragment, { children: [
				/* @__PURE__ */ u("h2", {
					css: {
						gridColumn: "1 / -1",
						borderWidth: "1px",
						borderStyle: "none none solid none",
						borderColor: s.colors.text
					},
					children: e
				}),
				n(o[e]).map((e) => /* @__PURE__ */ u(V, { ability: e }, e.id)),
				o[e].length === 0 && /* @__PURE__ */ u(R, {})
			] }, e))
		})]
	}) });
}, W = () => {
	let { actor: e } = S();
	return v(e), /* @__PURE__ */ f("div", { children: [/* @__PURE__ */ u("h3", {
		css: { gridColumn: "start / end" },
		children: /* @__PURE__ */ u(a, { children: "Initiative" })
	}), /* @__PURE__ */ u(w, {
		value: e.system.initiativeAbility,
		onChange: e.system.setInitiativeAbility,
		pickerValues: r.combatAbilities.get().toSorted(),
		validValues: e.system.getGeneralAbilityNames()
	})] });
};
W.displayName = "CharacterCombatAbilityPicker";
//#endregion
//#region src/components/characters/LogoEditable.tsx
var G = {
	fontSize: "0.5em",
	padding: "0 1em",
	minHeight: "1em"
}, K = {
	color: "transparent",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)"
}, q = ({ className: e, mainText: t, subText: n, defaultSubText: r = "", onChangeMainText: i, onChangeSubText: a }) => {
	let o = (0, N.useContext)(l), s = {
		transition: "font-size 500ms",
		fontSize: `${Math.min(1, o.logo.fontScaleFactor / t.length)}em`,
		padding: "0 1em"
	}, { onInput: d, onFocus: p, onBlur: m, contentEditableRef: h, display: g } = c(t, i), _ = a !== void 0, { onInput: v, onFocus: y, onBlur: b, contentEditableRef: x, display: S } = c(n || r, a || (() => {}));
	return /* @__PURE__ */ f("div", {
		className: `logo ${e}`,
		css: {
			display: "block",
			position: "relative",
			height: "6em",
			width: "auto",
			perspective: "500px",
			perspectiveOrigin: "50% 50%"
		},
		children: [/* @__PURE__ */ u("div", {
			className: "backdrop",
			css: {
				...o.logo.backdropStyle,
				position: "absolute",
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		}), /* @__PURE__ */ f("div", {
			className: "text-elements-wrapper",
			css: {
				position: "absolute",
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				font: o.displayFont,
				fontSize: "4em",
				whiteSpace: "nowrap",
				caretColor: "black",
				border: "none",
				padding: 0,
				lineHeight: 1,
				...o.logo.textElementsStyle
			},
			children: [/* @__PURE__ */ f("div", {
				className: "rear-text-element shadow-bearer",
				css: {
					zIndex: -1,
					...K,
					...o.logo.rearTextElementWrapperStyle
				},
				children: [/* @__PURE__ */ u("div", {
					css: {
						...s,
						...o.logo.rearTextElementStyle
					},
					children: g
				}), _ && /* @__PURE__ */ u("div", {
					css: {
						...G,
						...o.logo.rearTextElementStyle
					},
					children: S
				})]
			}), /* @__PURE__ */ f("div", {
				css: {
					...K,
					...o.logo.frontTextElementWrapperStyle
				},
				className: "front-text-element gradient-bearer",
				children: [/* @__PURE__ */ u("div", {
					css: {
						...s,
						...o.logo.frontTextElementStyle
					},
					contentEditable: !0,
					ref: h,
					onInput: d,
					onFocus: p,
					onBlur: m
				}), _ && /* @__PURE__ */ u("div", {
					css: {
						...G,
						...o.logo.frontTextElementStyle
					},
					contentEditable: !0,
					ref: x,
					onInput: v,
					onFocus: y,
					onBlur: b
				})]
			})]
		})]
	});
}, J = ({ status: e, setStatus: n }) => {
	t(game);
	let [r, i] = (0, N.useState)(e);
	return (0, N.useEffect)(() => {
		n(r);
	}, [r, n]), /* @__PURE__ */ f("div", {
		css: {
			padding: "0.5em 0 1em 0",
			backgroundImage: `radial-gradient(closest-side, ${r === "uninjured" ? "#0f07" : r === "hurt" ? "#770f" : r === "down" || r === "unconscious" ? "#950f" : "#f00f"}, #0000)`
		},
		children: [/* @__PURE__ */ u("div", {
			css: { fontSize: "0.8em" },
			children: "Injury Status"
		}), /* @__PURE__ */ f("select", {
			css: { width: "100%" },
			value: r,
			onChange: (e) => {
				i(e.currentTarget.value);
			},
			children: [
				/* @__PURE__ */ u("option", {
					value: "uninjured",
					children: d("Uninjured")
				}),
				/* @__PURE__ */ u("option", {
					value: "hurt",
					children: d("Hurt")
				}),
				/* @__PURE__ */ u("option", {
					value: "down",
					children: d("Down")
				}),
				/* @__PURE__ */ u("option", {
					value: "unconscious",
					children: d("Unconscious")
				}),
				/* @__PURE__ */ u("option", {
					value: "dead",
					children: d("Dead")
				})
			]
		})]
	});
}, Y = ({ index: e, onSave: t, className: n, html: r, name: i }) => /* @__PURE__ */ u(E, {
	name: `${i}#${e}`,
	onSave: (0, N.useCallback)((n) => {
		t(n, e);
	}, [e, t]),
	className: n,
	html: r
});
Y.displayName = "IndexedRichTextEditor";
//#endregion
//#region src/components/characters/StatField.tsx
var X = ({ stat: e, id: t }) => {
	let { actor: n } = S();
	v(n);
	let r = (0, N.useCallback)((e) => {
		n.update({ system: { stats: {
			...n.system.stats,
			[t]: e
		} } });
	}, [n, t]);
	return /* @__PURE__ */ f("div", { children: [/* @__PURE__ */ u("h3", {
		css: { gridColumn: "start / end" },
		children: e.name
	}), /* @__PURE__ */ u(j, {
		min: e.min ?? 0,
		max: e.max,
		value: n.system.stats[t] ?? e.default,
		onChange: r
	})] });
}, Z = ({ value: e, selected: t, onClick: n }) => {
	let r = (0, N.useCallback)(() => {
		n(e);
	}, [n, e]), i = (0, N.useContext)(l);
	return /* @__PURE__ */ u("a", {
		tabIndex: 0,
		onClick: r,
		css: {
			width: "auto",
			height: "1.2em",
			background: t ? i.colors.accent : i.colors.backgroundPrimary,
			color: `${t ? i.colors.accentContrast : void 0} !important`,
			textAlign: "center",
			display: "inline-block",
			position: "relative"
		},
		children: e
	});
}, Q = (e, t) => t < e ? Q(t, e).reverse() : Array(t - e + 1).fill(null).map((t, n) => e + n), $ = ({ ability: e }) => {
	g(e);
	let t = Q(e?.system.min ?? 0, e.system.allowPoolToExceedRating ? e.system.max : e?.system.rating), n = (0, N.useCallback)(() => {
		_(e), e.system.push();
	}, [e]), r = e.sheet;
	return C(r), /* @__PURE__ */ f("div", {
		style: {
			width: "8em",
			height: "auto",
			display: "grid",
			position: "relative",
			gridTemplateColumns: "[start] 1fr 1fr 1fr 1fr [end]"
		},
		children: [
			/* @__PURE__ */ u("h2", {
				css: { gridColumn: "start / end" },
				children: /* @__PURE__ */ u("a", {
					onClick: () => r.render({ force: !0 }),
					children: e.name
				})
			}),
			t.map((t) => /* @__PURE__ */ u(Z, {
				value: t,
				onClick: e.system.setPool,
				selected: e && h(e) && t === e.system.pool
			}, t)),
			y(e) && e.system.isPushPool && /* @__PURE__ */ u(x, {
				css: {
					gridColumn: "start / end",
					width: "auto",
					marginTop: "0.5em"
				},
				disabled: e.system.pool === 0,
				onClick: n,
				children: /* @__PURE__ */ u(a, { children: "Push" })
			})
		]
	});
}, ee = () => {
	let { actor: e } = S();
	return v(e), /* @__PURE__ */ u(i, { children: e.system.getTrackerAbilities().toSorted((e, t) => {
		let n = y(e) && e.system.isPushPool, r = y(t) && t.system.isPushPool;
		return n && !r ? -1 : !n && r ? 1 : (e.name ?? "").localeCompare(t.name ?? "");
	}).map((e, t) => /* @__PURE__ */ u($, { ability: e }, `${e.name}-- ${t}`)) });
}, te = ({ weapon: e }) => {
	let t = (0, N.useContext)(o), n = (0, N.useCallback)((e) => {
		t !== null && t._onDragStart(e);
	}, [t]), [r, a] = (0, N.useState)(!1), s = (0, N.useCallback)(() => {
		a(!0);
	}, []), c = (0, N.useCallback)(() => {
		a(!1);
	}, []), l = (t, n, r, i) => {
		let a = e.system.damage + n;
		return {
			label: t ? (a >= 0 ? "+" : "") + a.toString() : "-",
			value: r,
			enabled: t,
			rangeDamage: n,
			hover: i
		};
	}, d = [
		l(e.system.isPointBlank, e.system.pointBlankDamage, 0, "Point Blank"),
		l(e.system.isCloseRange, e.system.closeRangeDamage, 1, "Close Range"),
		l(e.system.isNearRange, e.system.nearRangeDamage, 2, "Near Range"),
		l(e.system.isLongRange, e.system.longRangeDamage, 3, "Long Range")
	], [p, m] = (0, N.useState)(0), g = e.system.usesAmmo && e.system.ammo.value <= 0, _ = e.system.ability, v = e.actor?.items.find((e) => e.type === "generalAbility" && e.name === _), y = v && h(v) ? v.system.pool : 0, [b, S] = (0, N.useState)(0), [w, E] = (0, N.useState)(0), O = (0, N.useCallback)(() => {
		S((e) => e + 1);
	}, []), k = (0, N.useCallback)(() => {
		S((e) => e - 1);
	}, []), j = (0, N.useMemo)(() => D({
		spend: b,
		bonusPool: w,
		setSpend: S,
		setBonusPool: E,
		ability: v,
		weapon: e
	}), [
		v,
		w,
		b,
		e
	]), M = e.system.notes, [P, F] = (0, N.useState)("");
	(0, N.useEffect)(() => {
		T(M).then(F);
	}, [M]);
	let I = () => {
		j({
			rangeName: d[p].hover,
			rangeDamage: d[p].rangeDamage
		});
	}, L = e.sheet;
	return C(L), /* @__PURE__ */ f(i, { children: [
		/* @__PURE__ */ u("a", {
			css: {
				gridColumn: 1,
				overflow: "hidden",
				textOverflow: "ellipsis"
			},
			className: r ? "hover" : "",
			onClick: () => L.render({ force: !0 }),
			onMouseOver: s,
			onMouseOut: c,
			"data-item-id": e.id,
			onDragStart: n,
			draggable: "true",
			children: e.name
		}),
		e.system.usesAmmo ? /* @__PURE__ */ f("div", {
			css: { gridColumn: 2 },
			children: [
				/* @__PURE__ */ u(x, {
					css: {
						width: "1.5em",
						padding: "0"
					},
					onClick: e.system.reload,
					children: /* @__PURE__ */ u("i", { className: "fa fa-redo fa-xs" })
				}),
				"\xA0",
				e.system.ammo.value,
				"/",
				e.system.ammo.max
			]
		}) : /* @__PURE__ */ u("div", {
			css: {
				gridColumn: 2,
				textAlign: "center"
			},
			children: "—"
		}),
		/* @__PURE__ */ u("div", {
			css: { gridColumn: 3 },
			children: /* @__PURE__ */ u(A, {
				onChange: m,
				selected: p,
				options: d,
				size: 1
			})
		}),
		/* @__PURE__ */ f("div", {
			css: {
				gridColumn: 4,
				display: "grid",
				gridTemplateColumns: "1.6em 1.6em"
			},
			children: [
				/* @__PURE__ */ u(x, {
					css: { gridColumn: "1" },
					onClick: k,
					disabled: b <= 0,
					children: /* @__PURE__ */ u("i", {
						css: { fontSize: "x-small" },
						className: "fa fa-minus"
					})
				}),
				/* @__PURE__ */ u(x, {
					css: { gridColumn: "2" },
					onClick: O,
					disabled: b >= y,
					children: /* @__PURE__ */ u("i", {
						css: { fontSize: "x-small" },
						className: "fa fa-plus"
					})
				}),
				/* @__PURE__ */ f(x, {
					css: {
						gridColumn: 3,
						width: "4.1em"
					},
					onClick: I,
					disabled: g,
					children: [
						/* @__PURE__ */ u("i", {
							className: "fa fa-dice",
							title: "Test"
						}),
						"+",
						b
					]
				})
			]
		}),
		/* @__PURE__ */ u("div", {
			css: {
				gridColumn: "1 / -1",
				paddingLeft: "1em",
				whiteSpace: "normal",
				maxHeight: "8em",
				overflow: "auto",
				marginBottom: "1em"
			},
			children: /* @__PURE__ */ u("div", { dangerouslySetInnerHTML: { __html: P } })
		})
	] });
}, ne = () => {
	let { actor: e } = S();
	v(e);
	let t = e.system.getWeapons();
	return /* @__PURE__ */ f("div", { children: [
		/* @__PURE__ */ f("div", {
			css: {
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ u("h2", {
				css: {
					flex: 1,
					"&&": { margin: "0 0 0 0" }
				},
				children: /* @__PURE__ */ u(a, { children: "Weapons" })
			}), /* @__PURE__ */ f(x, {
				css: {
					flexBasis: "max-content",
					alignSelf: "flex-start"
				},
				onClick: async () => {
					await e.createEmbeddedDocuments("Item", [{
						type: p,
						name: "New weapon"
					}], { renderSheet: !0 });
				},
				children: [/* @__PURE__ */ u("i", { className: "fa fa-plus" }), /* @__PURE__ */ u(a, { children: "Add Weapon" })]
			})]
		}),
		t.length === 0 && /* @__PURE__ */ u("i", {
			css: {
				display: "block",
				fontSize: "1.2em"
			},
			children: /* @__PURE__ */ u(a, { children: "No weapons yet!" })
		}),
		t.length > 0 && /* @__PURE__ */ f("div", {
			css: {
				display: "grid",
				gridTemplateColumns: "1fr max-content max-content 1fr",
				gridAutoRows: "min-content",
				columnGap: "0.5em",
				whiteSpace: "nowrap",
				".header": { fontWeight: "bold" }
			},
			children: [
				/* @__PURE__ */ u("div", {
					className: "header",
					css: { gridColumn: 1 },
					children: /* @__PURE__ */ u(a, { children: "Weapon" })
				}),
				/* @__PURE__ */ u("div", {
					className: "header",
					css: { gridColumn: 2 },
					children: /* @__PURE__ */ u(a, { children: "Ammo" })
				}),
				/* @__PURE__ */ u("div", {
					className: "header",
					css: { gridColumn: 3 },
					children: /* @__PURE__ */ u(a, { children: "Damage" })
				}),
				n(t).map((e) => /* @__PURE__ */ u(te, { weapon: e }, e.id))
			]
		})
	] });
};
//#endregion
export { J as a, U as c, Y as i, B as l, ee as n, q as o, X as r, W as s, ne as t, R as u };
