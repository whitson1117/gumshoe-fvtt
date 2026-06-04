import { o as e } from "./chunk-BQCxAhux.js";
import { _t as t, dt as n, et as r, g as i, mt as a, nt as o, ut as s } from "./AsyncTextInput-DMwutQQ3.js";
import { t as c } from "./react-Cajsgul7.js";
//#region src/hooks/useSheetContexts.ts
var l = /* @__PURE__ */ e(c(), 1), u = () => {
	let e = (0, l.useContext)(i);
	if (e === null) throw Error("useItemSheetContext must be used within a FoundryAppContext");
	if (!(e instanceof a)) throw Error("useItemSheetContext must be used within an ItemSheetV2");
	return {
		app: e,
		item: e.item
	};
}, d = () => {
	let e = (0, l.useContext)(i);
	if (e === null) throw Error("useActorSheetContext must be used within a FoundryAppContext");
	if (!(e instanceof r)) throw Error("useActorSheetContext must be used within an ActorSheetV2");
	return {
		app: e,
		actor: e.document
	};
}, f = () => {
	let e = (0, l.useContext)(i);
	if (e === null) throw Error("useJournalEntrySheetContext must be used within a FoundryAppContext");
	if (!(e instanceof t)) throw Error("useJournalSheetContext must be used within a JournalSheet");
	return {
		app: e,
		journalEntry: e.document
	};
}, p = () => {
	let e = (0, l.useContext)(i);
	if (e === null) throw Error("useDocumentSheetContext must be used within a FoundryAppContext");
	if (!(e instanceof n) || !(e.document instanceof s)) throw Error("useDocumentSheetContext must be used within a DocumentSheetV2");
	return {
		app: e,
		doc: e.document
	};
};
//#endregion
//#region src/functions/assertApplicationV2.ts
function m(e) {
	if (!(e instanceof o)) throw Error("App is not an ApplicationV2");
}
//#endregion
export { f as a, u as i, d as n, p as r, m as t };
