import { i as e, t } from "./chunk-BQCxAhux.js";
//#region node_modules/.pnpm/yamljs@0.3.0/node_modules/yamljs/lib/Pattern.js
var n = /* @__PURE__ */ t(((e, t) => {
	t.exports = (function() {
		e.prototype.regex = null, e.prototype.rawRegex = null, e.prototype.cleanedRegex = null, e.prototype.mapping = null;
		function e(e, t) {
			var n, r, i, a, o, s, c, l, u;
			for (t ??= "", i = "", o = e.length, s = null, r = 0, a = 0; a < o;) {
				if (n = e.charAt(a), n === "\\") i += e.slice(a, +(a + 1) + 1 || 9e9), a++;
				else if (n === "(") if (a < o - 2) if (l = e.slice(a, +(a + 2) + 1 || 9e9), l === "(?:") a += 2, i += l;
				else if (l === "(?<") for (r++, a += 2, c = ""; a + 1 < o;) {
					if (u = e.charAt(a + 1), u === ">") {
						i += "(", a++, c.length > 0 && (s ??= {}, s[c] = r);
						break;
					} else c += u;
					a++;
				}
				else i += n, r++;
				else i += n;
				else i += n;
				a++;
			}
			this.rawRegex = e, this.cleanedRegex = i, this.regex = new RegExp(this.cleanedRegex, "g" + t.replace("g", "")), this.mapping = s;
		}
		return e.prototype.exec = function(e) {
			var t, n, r, i;
			if (this.regex.lastIndex = 0, n = this.regex.exec(e), n == null) return null;
			if (this.mapping != null) for (r in i = this.mapping, i) t = i[r], n[r] = n[t];
			return n;
		}, e.prototype.test = function(e) {
			return this.regex.lastIndex = 0, this.regex.test(e);
		}, e.prototype.replace = function(e, t) {
			return this.regex.lastIndex = 0, e.replace(this.regex, t);
		}, e.prototype.replaceAll = function(e, t, n) {
			var r;
			for (n ??= 0, this.regex.lastIndex = 0, r = 0; this.regex.test(e) && (n === 0 || r < n);) this.regex.lastIndex = 0, e = e.replace(this.regex, t), r++;
			return [e, r];
		}, e;
	})();
})), r = /* @__PURE__ */ t(((t, r) => {
	var i, a, o = {}.hasOwnProperty;
	i = n(), a = (function() {
		function t() {}
		return t.REGEX_LEFT_TRIM_BY_CHAR = {}, t.REGEX_RIGHT_TRIM_BY_CHAR = {}, t.REGEX_SPACES = /\s+/g, t.REGEX_DIGITS = /^\d+$/, t.REGEX_OCTAL = /[^0-7]/gi, t.REGEX_HEXADECIMAL = /[^a-f0-9]/gi, t.PATTERN_DATE = new i("^(?<year>[0-9][0-9][0-9][0-9])-(?<month>[0-9][0-9]?)-(?<day>[0-9][0-9]?)(?:(?:[Tt]|[ 	]+)(?<hour>[0-9][0-9]?):(?<minute>[0-9][0-9]):(?<second>[0-9][0-9])(?:.(?<fraction>[0-9]*))?(?:[ 	]*(?<tz>Z|(?<tz_sign>[-+])(?<tz_hour>[0-9][0-9]?)(?::(?<tz_minute>[0-9][0-9]))?))?)?$", "i"), t.LOCAL_TIMEZONE_OFFSET = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3, t.trim = function(e, t) {
			var n, r;
			return t ??= "\\s", n = this.REGEX_LEFT_TRIM_BY_CHAR[t], n ?? (this.REGEX_LEFT_TRIM_BY_CHAR[t] = n = RegExp("^" + t + t + "*")), n.lastIndex = 0, r = this.REGEX_RIGHT_TRIM_BY_CHAR[t], r ?? (this.REGEX_RIGHT_TRIM_BY_CHAR[t] = r = RegExp(t + "" + t + "*$")), r.lastIndex = 0, e.replace(n, "").replace(r, "");
		}, t.ltrim = function(e, t) {
			var n;
			return t ??= "\\s", n = this.REGEX_LEFT_TRIM_BY_CHAR[t], n ?? (this.REGEX_LEFT_TRIM_BY_CHAR[t] = n = RegExp("^" + t + t + "*")), n.lastIndex = 0, e.replace(n, "");
		}, t.rtrim = function(e, t) {
			var n;
			return t ??= "\\s", n = this.REGEX_RIGHT_TRIM_BY_CHAR[t], n ?? (this.REGEX_RIGHT_TRIM_BY_CHAR[t] = n = RegExp(t + "" + t + "*$")), n.lastIndex = 0, e.replace(n, "");
		}, t.isEmpty = function(e) {
			return !e || e === "" || e === "0" || e instanceof Array && e.length === 0 || this.isEmptyObject(e);
		}, t.isEmptyObject = function(e) {
			var t;
			return e instanceof Object && (function() {
				var n = [];
				for (t in e) o.call(e, t) && n.push(t);
				return n;
			})().length === 0;
		}, t.subStrCount = function(e, t, n, r) {
			var i = 0, a, o, s, c, l;
			for (e = "" + e, t = "" + t, n != null && (e = e.slice(n)), r != null && (e = e.slice(0, r)), s = e.length, l = t.length, a = o = 0, c = s; 0 <= c ? o < c : o > c; a = 0 <= c ? ++o : --o) t === e.slice(a, l) && (i++, a += l - 1);
			return i;
		}, t.isDigits = function(e) {
			return this.REGEX_DIGITS.lastIndex = 0, this.REGEX_DIGITS.test(e);
		}, t.octDec = function(e) {
			return this.REGEX_OCTAL.lastIndex = 0, parseInt((e + "").replace(this.REGEX_OCTAL, ""), 8);
		}, t.hexDec = function(e) {
			return this.REGEX_HEXADECIMAL.lastIndex = 0, e = this.trim(e), (e + "").slice(0, 2) === "0x" && (e = (e + "").slice(2)), parseInt((e + "").replace(this.REGEX_HEXADECIMAL, ""), 16);
		}, t.utf8chr = function(e) {
			var t = String.fromCharCode;
			return 128 > (e %= 2097152) ? t(e) : 2048 > e ? t(192 | e >> 6) + t(128 | e & 63) : 65536 > e ? t(224 | e >> 12) + t(128 | e >> 6 & 63) + t(128 | e & 63) : t(240 | e >> 18) + t(128 | e >> 12 & 63) + t(128 | e >> 6 & 63) + t(128 | e & 63);
		}, t.parseBoolean = function(e, t) {
			var n;
			return t ??= !0, typeof e == "string" ? (n = e.toLowerCase(), !(!t && n === "no" || n === "0" || n === "false" || n === "")) : !!e;
		}, t.isNumeric = function(e) {
			return this.REGEX_SPACES.lastIndex = 0, typeof e == "number" || typeof e == "string" && !isNaN(e) && e.replace(this.REGEX_SPACES, "") !== "";
		}, t.stringToDate = function(e) {
			var t, n, r, i, a, o, s, c, l, u, d, f;
			if (!e?.length || (a = this.PATTERN_DATE.exec(e), !a)) return null;
			if (f = parseInt(a.year, 10), s = parseInt(a.month, 10) - 1, n = parseInt(a.day, 10), a.hour == null) return t = new Date(Date.UTC(f, s, n)), t;
			if (i = parseInt(a.hour, 10), o = parseInt(a.minute, 10), c = parseInt(a.second, 10), a.fraction != null) {
				for (r = a.fraction.slice(0, 3); r.length < 3;) r += "0";
				r = parseInt(r, 10);
			} else r = 0;
			return a.tz != null && (l = parseInt(a.tz_hour, 10), u = a.tz_minute == null ? 0 : parseInt(a.tz_minute, 10), d = (l * 60 + u) * 6e4, a.tz_sign === "-" && (d *= -1)), t = new Date(Date.UTC(f, s, n, i, o, c, r)), d && t.setTime(t.getTime() - d), t;
		}, t.strRepeat = function(e, t) {
			var n, r = "";
			for (n = 0; n < t;) r += e, n++;
			return r;
		}, t.getStringFromFile = function(t, n) {
			var r, i, a, o, s, c, l, u;
			if (n ??= null, u = null, typeof window < "u" && window !== null) {
				if (window.XMLHttpRequest) u = new XMLHttpRequest();
				else if (window.ActiveXObject) for (c = [
					"Msxml2.XMLHTTP.6.0",
					"Msxml2.XMLHTTP.3.0",
					"Msxml2.XMLHTTP",
					"Microsoft.XMLHTTP"
				], a = 0, o = c.length; a < o; a++) {
					s = c[a];
					try {
						u = new ActiveXObject(s);
					} catch {}
				}
			}
			return u == null ? (l = e, i = l("fs"), n == null ? (r = i.readFileSync(t), r == null ? null : String(r)) : i.readFile(t, function(e, t) {
				return n(e ? null : String(t));
			})) : n == null ? (u.open("GET", t, !1), u.send(null), u.status === 200 || u.status === 0 ? u.responseText : null) : (u.onreadystatechange = function() {
				if (u.readyState === 4) return u.status === 200 || u.status === 0 ? n(u.responseText) : n(null);
			}, u.open("GET", t, !0), u.send(null));
		}, t;
	})(), r.exports = a;
})), i = /* @__PURE__ */ t(((e, t) => {
	var i, a, o = r();
	i = n(), a = (function() {
		function e() {}
		return e.PATTERN_ESCAPED_CHARACTER = new i("\\\\([0abt	nvfre \"\\/\\\\N_LP]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})"), e.unescapeSingleQuotedString = function(e) {
			return e.replace(/\'\'/g, "'");
		}, e.unescapeDoubleQuotedString = function(e) {
			return this._unescapeCallback ??= (function(e) {
				return function(t) {
					return e.unescapeCharacter(t);
				};
			})(this), this.PATTERN_ESCAPED_CHARACTER.replace(e, this._unescapeCallback);
		}, e.unescapeCharacter = function(e) {
			var t = String.fromCharCode;
			switch (e.charAt(1)) {
				case "0": return t(0);
				case "a": return t(7);
				case "b": return t(8);
				case "t": return "	";
				case "	": return "	";
				case "n": return "\n";
				case "v": return t(11);
				case "f": return t(12);
				case "r": return t(13);
				case "e": return t(27);
				case " ": return " ";
				case "\"": return "\"";
				case "/": return "/";
				case "\\": return "\\";
				case "N": return t(133);
				case "_": return t(160);
				case "L": return t(8232);
				case "P": return t(8233);
				case "x": return o.utf8chr(o.hexDec(e.substr(2, 2)));
				case "u": return o.utf8chr(o.hexDec(e.substr(2, 4)));
				case "U": return o.utf8chr(o.hexDec(e.substr(2, 8)));
				default: return "";
			}
		}, e;
	})(), t.exports = a;
})), a = /* @__PURE__ */ t(((e, t) => {
	var r, i = n();
	r = (function() {
		var e;
		function t() {}
		return t.LIST_ESCAPEES = [
			"\\",
			"\\\\",
			"\\\"",
			"\"",
			"\0",
			"",
			"",
			"",
			"",
			"",
			"",
			"\x07",
			"\b",
			"	",
			"\n",
			"\v",
			"\f",
			"\r",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"\x1B",
			"",
			"",
			"",
			"",
			(e = String.fromCharCode)(133),
			e(160),
			e(8232),
			e(8233)
		], t.LIST_ESCAPED = /* @__PURE__ */ "\\\\.\\\".\\\".\\\".\\0.\\x01.\\x02.\\x03.\\x04.\\x05.\\x06.\\a.\\b.\\t.\\n.\\v.\\f.\\r.\\x0e.\\x0f.\\x10.\\x11.\\x12.\\x13.\\x14.\\x15.\\x16.\\x17.\\x18.\\x19.\\x1a.\\e.\\x1c.\\x1d.\\x1e.\\x1f.\\N.\\_.\\L.\\P".split("."), t.MAPPING_ESCAPEES_TO_ESCAPED = (function() {
			var e, n, r = {}, i;
			for (e = n = 0, i = t.LIST_ESCAPEES.length; 0 <= i ? n < i : n > i; e = 0 <= i ? ++n : --n) r[t.LIST_ESCAPEES[e]] = t.LIST_ESCAPED[e];
			return r;
		})(), t.PATTERN_CHARACTERS_TO_ESCAPE = new i("[\\x00-\\x1f]|Â|Â\xA0|â¨|â©"), t.PATTERN_MAPPING_ESCAPEES = new i(t.LIST_ESCAPEES.join("|").split("\\").join("\\\\")), t.PATTERN_SINGLE_QUOTING = new i("[\\s'\":{}[\\],&*#?]|^[-?|<>=!%@`]"), t.requiresDoubleQuoting = function(e) {
			return this.PATTERN_CHARACTERS_TO_ESCAPE.test(e);
		}, t.escapeWithDoubleQuotes = function(e) {
			return "\"" + this.PATTERN_MAPPING_ESCAPEES.replace(e, (function(e) {
				return function(t) {
					return e.MAPPING_ESCAPEES_TO_ESCAPED[t];
				};
			})(this)) + "\"";
		}, t.requiresSingleQuoting = function(e) {
			return this.PATTERN_SINGLE_QUOTING.test(e);
		}, t.escapeWithSingleQuotes = function(e) {
			return "'" + e.replace(/'/g, "''") + "'";
		}, t;
	})(), t.exports = r;
})), o = /* @__PURE__ */ t(((e, t) => {
	var n, r = function(e, t) {
		for (var n in t) i.call(t, n) && (e[n] = t[n]);
		function r() {
			this.constructor = e;
		}
		return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
	}, i = {}.hasOwnProperty;
	n = (function(e) {
		r(t, e);
		function t(e, t, n) {
			this.message = e, this.parsedLine = t, this.snippet = n;
		}
		return t.prototype.toString = function() {
			return this.parsedLine != null && this.snippet != null ? "<ParseException> " + this.message + " (line " + this.parsedLine + ": '" + this.snippet + "')" : "<ParseException> " + this.message;
		}, t;
	})(Error), t.exports = n;
})), s = /* @__PURE__ */ t(((e, t) => {
	var n, r = function(e, t) {
		for (var n in t) i.call(t, n) && (e[n] = t[n]);
		function r() {
			this.constructor = e;
		}
		return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
	}, i = {}.hasOwnProperty;
	n = (function(e) {
		r(t, e);
		function t(e, t, n) {
			this.message = e, this.parsedLine = t, this.snippet = n;
		}
		return t.prototype.toString = function() {
			return this.parsedLine != null && this.snippet != null ? "<ParseMore> " + this.message + " (line " + this.parsedLine + ": '" + this.snippet + "')" : "<ParseMore> " + this.message;
		}, t;
	})(Error), t.exports = n;
})), c = /* @__PURE__ */ t(((e, t) => {
	var n, r = function(e, t) {
		for (var n in t) i.call(t, n) && (e[n] = t[n]);
		function r() {
			this.constructor = e;
		}
		return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
	}, i = {}.hasOwnProperty;
	n = (function(e) {
		r(t, e);
		function t(e, t, n) {
			this.message = e, this.parsedLine = t, this.snippet = n;
		}
		return t.prototype.toString = function() {
			return this.parsedLine != null && this.snippet != null ? "<DumpException> " + this.message + " (line " + this.parsedLine + ": '" + this.snippet + "')" : "<DumpException> " + this.message;
		}, t;
	})(Error), t.exports = n;
})), l = /* @__PURE__ */ t(((e, t) => {
	var l, u, d, f, p, m, h, g = [].indexOf || function(e) {
		for (var t = 0, n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
		return -1;
	};
	p = n(), m = i(), l = a(), h = r(), d = o(), f = s(), c(), u = (function() {
		function e() {}
		return e.REGEX_QUOTED_STRING = "(?:\"(?:[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|'(?:[^']*(?:''[^']*)*)')", e.PATTERN_TRAILING_COMMENTS = new p("^\\s*#.*$"), e.PATTERN_QUOTED_SCALAR = new p("^" + e.REGEX_QUOTED_STRING), e.PATTERN_THOUSAND_NUMERIC_SCALAR = new p("^(-|\\+)?[0-9,]+(\\.[0-9]+)?$"), e.PATTERN_SCALAR_BY_DELIMITERS = {}, e.settings = {}, e.configure = function(e, t) {
			e ??= null, t ??= null, this.settings.exceptionOnInvalidType = e, this.settings.objectDecoder = t;
		}, e.parse = function(e, t, n) {
			var r, i;
			if (t ??= !1, n ??= null, this.settings.exceptionOnInvalidType = t, this.settings.objectDecoder = n, e == null || (e = h.trim(e), e.length === 0)) return "";
			switch (r = {
				exceptionOnInvalidType: t,
				objectDecoder: n,
				i: 0
			}, e.charAt(0)) {
				case "[":
					i = this.parseSequence(e, r), ++r.i;
					break;
				case "{":
					i = this.parseMapping(e, r), ++r.i;
					break;
				default: i = this.parseScalar(e, null, ["\"", "'"], r);
			}
			if (this.PATTERN_TRAILING_COMMENTS.replace(e.slice(r.i), "") !== "") throw new d("Unexpected characters near \"" + e.slice(r.i) + "\".");
			return i;
		}, e.dump = function(e, t, n) {
			var r, i, a;
			return t ??= !1, n ??= null, e == null ? "null" : (a = typeof e, a === "object" ? e instanceof Date ? e.toISOString() : n != null && (i = n(e), typeof i == "string" || i != null) ? i : this.dumpObject(e) : a === "boolean" ? e ? "true" : "false" : h.isDigits(e) ? a === "string" ? "'" + e + "'" : String(parseInt(e)) : h.isNumeric(e) ? a === "string" ? "'" + e + "'" : String(parseFloat(e)) : a === "number" ? e === Infinity ? ".Inf" : e === -Infinity ? "-.Inf" : isNaN(e) ? ".NaN" : e : l.requiresDoubleQuoting(e) ? l.escapeWithDoubleQuotes(e) : l.requiresSingleQuoting(e) ? l.escapeWithSingleQuotes(e) : e === "" ? "\"\"" : h.PATTERN_DATE.test(e) || (r = e.toLowerCase()) === "null" || r === "~" || r === "true" || r === "false" ? "'" + e + "'" : e);
		}, e.dumpObject = function(e, t, n) {
			var r, i, a, o, s;
			if (n ??= null, e instanceof Array) {
				for (o = [], r = 0, a = e.length; r < a; r++) s = e[r], o.push(this.dump(s));
				return "[" + o.join(", ") + "]";
			} else {
				for (i in o = [], e) s = e[i], o.push(this.dump(i) + ": " + this.dump(s));
				return "{" + o.join(", ") + "}";
			}
		}, e.parseScalar = function(e, t, n, r, i) {
			var a, o, s, c, l, u, f, m, _;
			if (t ??= null, n ??= ["\"", "'"], r ??= null, i ??= !0, r ??= {
				exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
				objectDecoder: this.settings.objectDecoder,
				i: 0
			}, a = r.i, u = e.charAt(a), g.call(n, u) >= 0) {
				if (c = this.parseQuotedScalar(e, r), a = r.i, t != null && (_ = h.ltrim(e.slice(a), " "), f = _.charAt(0), !(g.call(t, f) >= 0))) throw new d("Unexpected characters (" + e.slice(a) + ").");
			} else {
				if (!t) c = e.slice(a), a += c.length, m = c.indexOf(" #"), m !== -1 && (c = h.rtrim(c.slice(0, m)));
				else if (o = t.join("|"), l = this.PATTERN_SCALAR_BY_DELIMITERS[o], l ?? (l = new p("^(.+?)(" + o + ")"), this.PATTERN_SCALAR_BY_DELIMITERS[o] = l), s = l.exec(e.slice(a))) c = s[1], a += c.length;
				else throw new d("Malformed inline YAML string (" + e + ").");
				i && (c = this.evaluateScalar(c, r));
			}
			return r.i = a, c;
		}, e.parseQuotedScalar = function(e, t) {
			var n = t.i, r, i;
			if (!(r = this.PATTERN_QUOTED_SCALAR.exec(e.slice(n)))) throw new f("Malformed inline YAML string (" + e.slice(n) + ").");
			return i = r[0].substr(1, r[0].length - 2), i = e.charAt(n) === "\"" ? m.unescapeDoubleQuotedString(i) : m.unescapeSingleQuotedString(i), n += r[0].length, t.i = n, i;
		}, e.parseSequence = function(e, t) {
			var n, r, i, a = [], o, s;
			for (i = e.length, n = t.i, n += 1; n < i;) {
				switch (t.i = n, e.charAt(n)) {
					case "[":
						a.push(this.parseSequence(e, t)), n = t.i;
						break;
					case "{":
						a.push(this.parseMapping(e, t)), n = t.i;
						break;
					case "]": return a;
					case ",":
					case " ":
					case "\n": break;
					default:
						if (r = (o = e.charAt(n)) === "\"" || o === "'", s = this.parseScalar(e, [",", "]"], ["\"", "'"], t), n = t.i, !r && typeof s == "string" && (s.indexOf(": ") !== -1 || s.indexOf(":\n") !== -1)) try {
							s = this.parseMapping("{" + s + "}");
						} catch {}
						a.push(s), --n;
				}
				++n;
			}
			throw new f("Malformed inline YAML string " + e);
		}, e.parseMapping = function(e, t) {
			var n, r, i, a, o = {}, s, c;
			for (a = e.length, r = t.i, r += 1, s = !1; r < a;) {
				switch (t.i = r, e.charAt(r)) {
					case " ":
					case ",":
					case "\n":
						++r, t.i = r, s = !0;
						break;
					case "}": return o;
				}
				if (s) {
					s = !1;
					continue;
				}
				for (i = this.parseScalar(e, [
					":",
					" ",
					"\n"
				], ["\"", "'"], t, !1), r = t.i, n = !1; r < a;) {
					switch (t.i = r, e.charAt(r)) {
						case "[":
							c = this.parseSequence(e, t), r = t.i, o[i] === void 0 && (o[i] = c), n = !0;
							break;
						case "{":
							c = this.parseMapping(e, t), r = t.i, o[i] === void 0 && (o[i] = c), n = !0;
							break;
						case ":":
						case " ":
						case "\n": break;
						default: c = this.parseScalar(e, [",", "}"], ["\"", "'"], t), r = t.i, o[i] === void 0 && (o[i] = c), n = !0, --r;
					}
					if (++r, n) break;
				}
			}
			throw new f("Malformed inline YAML string " + e);
		}, e.evaluateScalar = function(e, t) {
			var n, r, i, a, o, s, c, l, u, f, p;
			switch (e = h.trim(e), u = e.toLowerCase(), u) {
				case "null":
				case "":
				case "~": return null;
				case "true": return !0;
				case "false": return !1;
				case ".inf": return Infinity;
				case ".nan": return NaN;
				case "-.inf": return Infinity;
				default: switch (a = u.charAt(0), a) {
					case "!":
						switch (o = e.indexOf(" "), s = o === -1 ? u : u.slice(0, o), s) {
							case "!": return o === -1 ? null : parseInt(this.parseScalar(e.slice(2)));
							case "!str": return h.ltrim(e.slice(4));
							case "!!str": return h.ltrim(e.slice(5));
							case "!!int": return parseInt(this.parseScalar(e.slice(5)));
							case "!!bool": return h.parseBoolean(this.parseScalar(e.slice(6)), !1);
							case "!!float": return parseFloat(this.parseScalar(e.slice(7)));
							case "!!timestamp": return h.stringToDate(h.ltrim(e.slice(11)));
							default:
								if (t ??= {
									exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
									objectDecoder: this.settings.objectDecoder,
									i: 0
								}, c = t.objectDecoder, i = t.exceptionOnInvalidType, c) return p = h.rtrim(e), o = p.indexOf(" "), o === -1 ? c(p, null) : (f = h.ltrim(p.slice(o + 1)), f.length > 0 || (f = null), c(p.slice(0, o), f));
								if (i) throw new d("Custom object support when parsing a YAML file has been disabled.");
								return null;
						}
						break;
					case "0": return e.slice(0, 2) === "0x" ? h.hexDec(e) : h.isDigits(e) ? h.octDec(e) : h.isNumeric(e) ? parseFloat(e) : e;
					case "+": return h.isDigits(e) ? (l = e, n = parseInt(l), l === String(n) ? n : l) : h.isNumeric(e) ? parseFloat(e) : this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(e) ? parseFloat(e.replace(",", "")) : e;
					case "-": return h.isDigits(e.slice(1)) ? e.charAt(1) === "0" ? -h.octDec(e.slice(1)) : (l = e.slice(1), n = parseInt(l), l === String(n) ? -n : -l) : h.isNumeric(e) ? parseFloat(e) : this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(e) ? parseFloat(e.replace(",", "")) : e;
					default: return (r = h.stringToDate(e)) ? r : h.isNumeric(e) ? parseFloat(e) : this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(e) ? parseFloat(e.replace(",", "")) : e;
				}
			}
		}, e;
	})(), t.exports = u;
})), u = /* @__PURE__ */ t(((e, t) => {
	var i = l(), a, c, u, d = n(), f = r();
	a = o(), c = s(), u = (function() {
		e.prototype.PATTERN_FOLDED_SCALAR_ALL = new d("^(?:(?<type>![^\\|>]*)\\s+)?(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$"), e.prototype.PATTERN_FOLDED_SCALAR_END = new d("(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$"), e.prototype.PATTERN_SEQUENCE_ITEM = new d("^\\-((?<leadspaces>\\s+)(?<value>.+?))?\\s*$"), e.prototype.PATTERN_ANCHOR_VALUE = new d("^&(?<ref>[^ ]+) *(?<value>.*)"), e.prototype.PATTERN_COMPACT_NOTATION = new d("^(?<key>" + i.REGEX_QUOTED_STRING + "|[^ '\"\\{\\[].*?) *\\:(\\s+(?<value>.+?))?\\s*$"), e.prototype.PATTERN_MAPPING_ITEM = new d("^(?<key>" + i.REGEX_QUOTED_STRING + "|[^ '\"\\[\\{].*?) *\\:(\\s+(?<value>.+?))?\\s*$"), e.prototype.PATTERN_DECIMAL = new d("\\d+"), e.prototype.PATTERN_INDENT_SPACES = new d("^ +"), e.prototype.PATTERN_TRAILING_LINES = new d("(\n*)$"), e.prototype.PATTERN_YAML_HEADER = new d("^\\%YAML[: ][\\d\\.]+.*\n", "m"), e.prototype.PATTERN_LEADING_COMMENTS = new d("^(\\#.*?\n)+", "m"), e.prototype.PATTERN_DOCUMENT_MARKER_START = new d("^\\-\\-\\-.*?\n", "m"), e.prototype.PATTERN_DOCUMENT_MARKER_END = new d("^\\.\\.\\.\\s*$", "m"), e.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION = {}, e.prototype.CONTEXT_NONE = 0, e.prototype.CONTEXT_SEQUENCE = 1, e.prototype.CONTEXT_MAPPING = 2;
		function e(e) {
			this.offset = e ?? 0, this.lines = [], this.currentLineNb = -1, this.currentLine = "", this.refs = {};
		}
		return e.prototype.parse = function(t, n, r) {
			var o, s, c, l, u, d, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B;
			for (n ??= !1, r ??= null, this.currentLineNb = -1, this.currentLine = "", this.lines = this.cleanup(t).split("\n"), d = null, u = this.CONTEXT_NONE, s = !1; this.moveToNextLine();) if (!this.isCurrentLineEmpty()) {
				if (this.currentLine[0] === "	") throw new a("A YAML file cannot contain tabs as indentation.", this.getRealCurrentLineNb() + 1, this.currentLine);
				if (_ = A = !1, B = this.PATTERN_SEQUENCE_ITEM.exec(this.currentLine)) {
					if (this.CONTEXT_MAPPING === u) throw new a("You cannot define a sequence item when in a mapping");
					u = this.CONTEXT_SEQUENCE, d ??= [], B.value != null && (k = this.PATTERN_ANCHOR_VALUE.exec(B.value)) && (_ = k.ref, B.value = k.value), B.value == null || f.trim(B.value, " ") === "" || f.ltrim(B.value, " ").indexOf("#") === 0 ? this.currentLineNb < this.lines.length - 1 && !this.isNextLineUnIndentedCollection() ? (l = this.getRealCurrentLineNb() + 1, F = new e(l), F.refs = this.refs, d.push(F.parse(this.getNextEmbedBlock(null, !0), n, r))) : d.push(null) : B.leadspaces?.length && (k = this.PATTERN_COMPACT_NOTATION.exec(B.value)) ? (l = this.getRealCurrentLineNb(), F = new e(l), F.refs = this.refs, c = B.value, g = this.getCurrentLineIndentation(), this.isNextLineIndented(!1) && (c += "\n" + this.getNextEmbedBlock(g + B.leadspaces.length + 1, !0)), d.push(F.parse(c, n, r))) : d.push(this.parseValue(B.value, n, r));
				} else if ((B = this.PATTERN_MAPPING_ITEM.exec(this.currentLine)) && B.key.indexOf(" #") === -1) {
					if (this.CONTEXT_SEQUENCE === u) throw new a("You cannot define a mapping item when in a sequence");
					u = this.CONTEXT_MAPPING, d ??= {}, i.configure(n, r);
					try {
						b = i.parseScalar(B.key);
					} catch (e) {
						throw p = e, p.parsedLine = this.getRealCurrentLineNb() + 1, p.snippet = this.currentLine, p;
					}
					if (b === "<<") if (A = !0, s = !0, B.value?.indexOf("*") === 0) {
						if (L = B.value.slice(1), this.refs[L] == null) throw new a("Reference \"" + L + "\" does not exist.", this.getRealCurrentLineNb() + 1, this.currentLine);
						if (R = this.refs[L], typeof R != "object") throw new a("YAML merge keys used with a scalar value instead of an object.", this.getRealCurrentLineNb() + 1, this.currentLine);
						if (R instanceof Array) for (h = v = 0, C = R.length; v < C; h = ++v) t = R[h], d[M = String(h)] ?? (d[M] = t);
						else for (b in R) t = R[b], d[b] ?? (d[b] = t);
					} else {
						if (t = B.value != null && B.value !== "" ? B.value : this.getNextEmbedBlock(), l = this.getRealCurrentLineNb() + 1, F = new e(l), F.refs = this.refs, N = F.parse(t, n), typeof N != "object") throw new a("YAML merge keys used with a scalar value instead of an object.", this.getRealCurrentLineNb() + 1, this.currentLine);
						if (N instanceof Array) for (x = 0, w = N.length; x < w; x++) {
							if (P = N[x], typeof P != "object") throw new a("Merge items must be objects.", this.getRealCurrentLineNb() + 1, P);
							if (P instanceof Array) for (h = O = 0, T = P.length; O < T; h = ++O) t = P[h], y = String(h), d.hasOwnProperty(y) || (d[y] = t);
							else for (b in P) t = P[b], d.hasOwnProperty(b) || (d[b] = t);
						}
						else for (b in N) t = N[b], d.hasOwnProperty(b) || (d[b] = t);
					}
					else B.value != null && (k = this.PATTERN_ANCHOR_VALUE.exec(B.value)) && (_ = k.ref, B.value = k.value);
					A || (B.value == null || f.trim(B.value, " ") === "" || f.ltrim(B.value, " ").indexOf("#") === 0 ? !this.isNextLineIndented() && !this.isNextLineUnIndentedCollection() ? (s || d[b] === void 0) && (d[b] = null) : (l = this.getRealCurrentLineNb() + 1, F = new e(l), F.refs = this.refs, z = F.parse(this.getNextEmbedBlock(), n, r), (s || d[b] === void 0) && (d[b] = z)) : (z = this.parseValue(B.value, n, r), (s || d[b] === void 0) && (d[b] = z)));
				} else {
					if (D = this.lines.length, D === 1 || D === 2 && f.isEmpty(this.lines[1])) {
						try {
							t = i.parse(this.lines[0], n, r);
						} catch (e) {
							throw p = e, p.parsedLine = this.getRealCurrentLineNb() + 1, p.snippet = this.currentLine, p;
						}
						if (typeof t == "object") {
							if (t instanceof Array) m = t[0];
							else for (b in t) {
								m = t[b];
								break;
							}
							if (typeof m == "string" && m.indexOf("*") === 0) {
								for (d = [], j = 0, E = t.length; j < E; j++) o = t[j], d.push(this.refs[o.slice(1)]);
								t = d;
							}
						}
						return t;
					} else if ((I = f.ltrim(t).charAt(0)) === "[" || I === "{") try {
						return i.parse(t, n, r);
					} catch (e) {
						throw p = e, p.parsedLine = this.getRealCurrentLineNb() + 1, p.snippet = this.currentLine, p;
					}
					throw new a("Unable to parse.", this.getRealCurrentLineNb() + 1, this.currentLine);
				}
				if (_) if (d instanceof Array) this.refs[_] = d[d.length - 1];
				else {
					for (b in S = null, d) S = b;
					this.refs[_] = d[S];
				}
			}
			return f.isEmpty(d) ? null : d;
		}, e.prototype.getRealCurrentLineNb = function() {
			return this.currentLineNb + this.offset;
		}, e.prototype.getCurrentLineIndentation = function() {
			return this.currentLine.length - f.ltrim(this.currentLine, " ").length;
		}, e.prototype.getNextEmbedBlock = function(e, t) {
			var n, r, i, o, s, c, l;
			if (e ??= null, t ??= !1, this.moveToNextLine(), e == null) {
				if (o = this.getCurrentLineIndentation(), l = this.isStringUnIndentedCollectionItem(this.currentLine), !this.isCurrentLineEmpty() && o === 0 && !l) throw new a("Indentation problem.", this.getRealCurrentLineNb() + 1, this.currentLine);
			} else o = e;
			for (n = [this.currentLine.slice(o)], t || (i = this.isStringUnIndentedCollectionItem(this.currentLine)), c = this.PATTERN_FOLDED_SCALAR_END, s = !c.test(this.currentLine); this.moveToNextLine();) if (r = this.getCurrentLineIndentation(), r === o && (s = !c.test(this.currentLine)), !(s && this.isCurrentLineComment())) {
				if (this.isCurrentLineBlank()) {
					n.push(this.currentLine.slice(o));
					continue;
				}
				if (i && !this.isStringUnIndentedCollectionItem(this.currentLine) && r === o) {
					this.moveToPreviousLine();
					break;
				}
				if (r >= o) n.push(this.currentLine.slice(o));
				else if (f.ltrim(this.currentLine).charAt(0) !== "#") if (r === 0) {
					this.moveToPreviousLine();
					break;
				} else throw new a("Indentation problem.", this.getRealCurrentLineNb() + 1, this.currentLine);
			}
			return n.join("\n");
		}, e.prototype.moveToNextLine = function() {
			return this.currentLineNb >= this.lines.length - 1 ? !1 : (this.currentLine = this.lines[++this.currentLineNb], !0);
		}, e.prototype.moveToPreviousLine = function() {
			this.currentLine = this.lines[--this.currentLineNb];
		}, e.prototype.parseValue = function(e, t, n) {
			var r, o, s, l, u, d, p;
			if (e.indexOf("*") === 0) {
				if (u = e.indexOf("#"), e = u === -1 ? e.slice(1) : e.substr(1, u - 2), this.refs[e] === void 0) throw new a("Reference \"" + e + "\" does not exist.", this.currentLine);
				return this.refs[e];
			}
			if (s = this.PATTERN_FOLDED_SCALAR_ALL.exec(e)) return l = s.modifiers ?? "", o = Math.abs(parseInt(l)), isNaN(o) && (o = 0), p = this.parseFoldedScalar(s.separator, this.PATTERN_DECIMAL.replace(l, ""), o), s.type == null ? p : (i.configure(t, n), i.parseScalar(s.type + " " + p));
			if ((d = e.charAt(0)) === "[" || d === "{" || d === "\"" || d === "'") for (;;) try {
				return i.parse(e, t, n);
			} catch (t) {
				if (r = t, r instanceof c && this.moveToNextLine()) e += "\n" + f.trim(this.currentLine, " ");
				else throw r.parsedLine = this.getRealCurrentLineNb() + 1, r.snippet = this.currentLine, r;
			}
			else return this.isNextLineIndented() && (e += "\n" + this.getNextEmbedBlock()), i.parse(e, t, n);
		}, e.prototype.parseFoldedScalar = function(t, n, r) {
			var i, a, o, s, c, l, u, p, m, h;
			if (n ??= "", r ??= 0, u = this.moveToNextLine(), !u) return "";
			for (i = this.isCurrentLineBlank(), h = ""; u && i;) (u = this.moveToNextLine()) && (h += "\n", i = this.isCurrentLineBlank());
			if (r === 0 && (c = this.PATTERN_INDENT_SPACES.exec(this.currentLine)) && (r = c[0].length), r > 0) for (p = this.PATTERN_FOLDED_SCALAR_BY_INDENTATION[r], p ?? (p = new d("^ {" + r + "}(.*)$"), e.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION[r] = p); u && (i || (c = p.exec(this.currentLine)));) i ? h += this.currentLine.slice(r) : h += c[1], (u = this.moveToNextLine()) && (h += "\n", i = this.isCurrentLineBlank());
			else u && (h += "\n");
			if (u && this.moveToPreviousLine(), t === ">") {
				for (l = "", m = h.split("\n"), a = 0, o = m.length; a < o; a++) s = m[a], s.length === 0 || s.charAt(0) === " " ? l = f.rtrim(l, " ") + s + "\n" : l += s + " ";
				h = l;
			}
			return n !== "+" && (h = f.rtrim(h)), n === "" ? h = this.PATTERN_TRAILING_LINES.replace(h, "\n") : n === "-" && (h = this.PATTERN_TRAILING_LINES.replace(h, "")), h;
		}, e.prototype.isNextLineIndented = function(e) {
			var t, n, r;
			if (e ??= !0, n = this.getCurrentLineIndentation(), t = !this.moveToNextLine(), e) for (; !t && this.isCurrentLineEmpty();) t = !this.moveToNextLine();
			else for (; !t && this.isCurrentLineBlank();) t = !this.moveToNextLine();
			return t ? !1 : (r = !1, this.getCurrentLineIndentation() > n && (r = !0), this.moveToPreviousLine(), r);
		}, e.prototype.isCurrentLineEmpty = function() {
			var e = f.trim(this.currentLine, " ");
			return e.length === 0 || e.charAt(0) === "#";
		}, e.prototype.isCurrentLineBlank = function() {
			return f.trim(this.currentLine, " ") === "";
		}, e.prototype.isCurrentLineComment = function() {
			return f.ltrim(this.currentLine, " ").charAt(0) === "#";
		}, e.prototype.cleanup = function(e) {
			var t, n, r, i, a, o, s, c, l, u, d, p, m, h;
			for (e.indexOf("\r") !== -1 && (e = e.split("\r\n").join("\n").split("\r").join("\n")), t = 0, u = this.PATTERN_YAML_HEADER.replaceAll(e, ""), e = u[0], t = u[1], this.offset += t, d = this.PATTERN_LEADING_COMMENTS.replaceAll(e, "", 1), h = d[0], t = d[1], t === 1 && (this.offset += f.subStrCount(e, "\n") - f.subStrCount(h, "\n"), e = h), p = this.PATTERN_DOCUMENT_MARKER_START.replaceAll(e, "", 1), h = p[0], t = p[1], t === 1 && (this.offset += f.subStrCount(e, "\n") - f.subStrCount(h, "\n"), e = h, e = this.PATTERN_DOCUMENT_MARKER_END.replace(e, "")), l = e.split("\n"), m = -1, i = 0, o = l.length; i < o; i++) c = l[i], f.trim(c, " ").length !== 0 && (r = c.length - f.ltrim(c).length, (m === -1 || r < m) && (m = r));
			if (m > 0) {
				for (n = a = 0, s = l.length; a < s; n = ++a) c = l[n], l[n] = c.slice(m);
				e = l.join("\n");
			}
			return e;
		}, e.prototype.isNextLineUnIndentedCollection = function(e) {
			var t, n;
			for (e ??= null, e ??= this.getCurrentLineIndentation(), t = this.moveToNextLine(); t && this.isCurrentLineEmpty();) t = this.moveToNextLine();
			return !1 === t ? !1 : (n = !1, this.getCurrentLineIndentation() === e && this.isStringUnIndentedCollectionItem(this.currentLine) && (n = !0), this.moveToPreviousLine(), n);
		}, e.prototype.isStringUnIndentedCollectionItem = function() {
			return this.currentLine === "-" || this.currentLine.slice(0, 2) === "- ";
		}, e;
	})(), t.exports = u;
})), d = /* @__PURE__ */ t(((e, t) => {
	var n, i, a = r();
	i = l(), n = (function() {
		function e() {}
		return e.indentation = 4, e.prototype.dump = function(e, t, n, r, o) {
			var s, c, l, u, d, f, p;
			if (t ??= 0, n ??= 0, r ??= !1, o ??= null, u = "", d = n ? a.strRepeat(" ", n) : "", t <= 0 || typeof e != "object" || e instanceof Date || a.isEmpty(e)) u += d + i.dump(e, r, o);
			else if (e instanceof Array) for (s = 0, l = e.length; s < l; s++) f = e[s], p = t - 1 <= 0 || typeof f != "object" || a.isEmpty(f), u += d + "-" + (p ? " " : "\n") + this.dump(f, t - 1, p ? 0 : n + this.indentation, r, o) + (p ? "\n" : "");
			else for (c in e) f = e[c], p = t - 1 <= 0 || typeof f != "object" || a.isEmpty(f), u += d + i.dump(c, r, o) + ":" + (p ? " " : "\n") + this.dump(f, t - 1, p ? 0 : n + this.indentation, r, o) + (p ? "\n" : "");
			return u;
		}, e;
	})(), t.exports = n;
})), f = /* @__PURE__ */ t(((e, t) => {
	var n, i = u(), a, o;
	n = d(), a = r(), o = (function() {
		function e() {}
		return e.parse = function(e, t, n) {
			return t ??= !1, n ??= null, new i().parse(e, t, n);
		}, e.parseFile = function(e, t, n, r) {
			var i;
			return t ??= null, n ??= !1, r ??= null, t == null ? (i = a.getStringFromFile(e), i == null ? null : this.parse(i, n, r)) : a.getStringFromFile(e, (function(e) {
				return function(i) {
					var a = null;
					i != null && (a = e.parse(i, n, r)), t(a);
				};
			})(this));
		}, e.dump = function(e, t, r, i, a) {
			var o;
			return t ??= 2, r ??= 4, i ??= !1, a ??= null, o = new n(), o.indentation = r, o.dump(e, t, 0, i, a);
		}, e.stringify = function(e, t, n, r, i) {
			return this.dump(e, t, n, r, i);
		}, e.load = function(e, t, n, r) {
			return this.parseFile(e, t, n, r);
		}, e;
	})(), typeof window < "u" && window !== null && (window.YAML = o), (typeof window > "u" || window === null) && (e.YAML = o), t.exports = o;
}));
//#endregion
export default f();
