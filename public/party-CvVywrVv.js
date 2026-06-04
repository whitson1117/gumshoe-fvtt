import { D as e, St as t, Tt as n, rt as r } from "./AsyncTextInput-DMwutQQ3.js";
import { M as i, o as a } from "./ImagePickle-CJmXJxfo.js";
//#region src/module/actors/party.ts
var o = {
	abilityNames: new r(new t({
		nullable: !1,
		required: !0
	}), {
		nullable: !1,
		required: !0
	}),
	actorIds: new r(new t({
		nullable: !1,
		required: !0
	}), {
		nullable: !1,
		required: !0
	})
}, s = class extends n {
	constructor(...t) {
		super(...t), this.getActorIds = () => this.actorIds, this.setActorIds = async (e) => {
			await this.parent.update({ system: { actorIds: e } });
		}, this.getActors = () => this.getActorIds().map((t) => (e(game), game.actors?.get(t))).filter((e) => e !== void 0), this.addActorIds = async (e) => {
			let t = this.getActorIds(), n = e.map((e) => game.actors?.get(e)).filter((e) => {
				let n = e?.id;
				return e !== void 0 && a(e) && n !== null && !t.includes(n);
			}).map((e) => e.id);
			return this.setActorIds([...t, ...n]);
		}, this.removeActorId = async (e) => {
			await this.setActorIds(this.getActorIds().filter((t) => t !== e));
		};
	}
	static defineSchema() {
		return o;
	}
};
function c(e) {
	return e instanceof i && e.type === "party";
}
function l(e) {
	if (!c(e)) throw Error("Expected a Party actor");
}
//#endregion
export { l as n, c as r, s as t };
