(function(i) {
    i.notification = function(n, o) {
        if (n === "" || n === void 0 || n === null) return;
        o = i.extend(!0, {
            className: "jquery-notification",
            duration: 2e3,
            freezeOnHover: !0,
            hideSpeed: 200,
            position: "center",
            showSpeed: 150,
            zIndex: 99999
        }, o), i("#jquery-notification").length > 0 && (o.showSpeed = 0), i("#jquery-notification").remove();
        var f, p, m, d, y = i(window).width(),
            M = i(window).height(),
            P, R = i('<div id="jquery-notification" />');

        function L() {
            clearTimeout(P), R.fadeOut(o.hideSpeed, function() {
                i(this).remove()
            })
        }
        switch (R.appendTo(i("BODY")).addClass(o.className).html(n).css({
                position: "fixed",
                display: "none",
                zIndex: o.zIndex
            }).mouseover(function() {
                o.freezeOnHover && clearTimeout(P), i(this).addClass(o.className + "-hover")
            }).mouseout(function() {
                i(this).removeClass(o.className + "-hover"), o.freezeOnHover && (P = setTimeout(L, o.duration))
            }).click(L).wrapInner('<div id="jquery-notification-message" />'), f = R.outerWidth(), p = R.outerHeight(), o.position) {
            case "top":
                m = 0, d = y / 2 - f / 2;
                break;
            case "top-left":
                m = 0, d = 0;
                break;
            case "top-right":
                m = 0, d = y - f;
                break;
            case "bottom":
                m = M - p, d = y / 2 - f / 2;
                break;
            case "bottom-left":
                m = M - p, d = 0;
                break;
            case "bottom-right":
                m = M - p, d = y - f;
                break;
            case "left":
                m = M / 2 - p / 2, d = 0;
                break;
            case "right":
                m = M / 2 - p / 2, d = y - f;
                break;
            default:
            case "center":
                m = M / 2 - p / 2, d = y / 2 - f / 2;
                break
        }
        R.css({
            top: m,
            left: d
        }).fadeIn(o.showSpeed, function() {
            P = setTimeout(L, o.duration)
        })
    }
})(jQuery); //! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(i, n) {
    typeof exports == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : i.moment = n()
})(this, (function() {
    "use strict";
    var i;

    function n() {
        return i.apply(null, arguments)
    }

    function o(e) {
        i = e
    }

    function f(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
    }

    function p(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]"
    }

    function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function d(e) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
        var t;
        for (t in e)
            if (m(e, t)) return !1;
        return !0
    }

    function y(e) {
        return e === void 0
    }

    function M(e) {
        return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
    }

    function P(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    }

    function R(e, t) {
        var r = [],
            a, s = e.length;
        for (a = 0; a < s; ++a) r.push(t(e[a], a));
        return r
    }

    function L(e, t) {
        for (var r in t) m(t, r) && (e[r] = t[r]);
        return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function Q(e, t, r, a) {
        return hr(e, t, r, a, !0).utc()
    }

    function ie() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function x(e) {
        return e._pf == null && (e._pf = ie()), e._pf
    }
    var Ce;
    Array.prototype.some ? Ce = Array.prototype.some : Ce = function(e) {
        var t = Object(this),
            r = t.length >>> 0,
            a;
        for (a = 0; a < r; a++)
            if (a in t && e.call(this, t[a], a, t)) return !0;
        return !1
    };

    function He(e) {
        var t = null,
            r = !1,
            a = e._d && !isNaN(e._d.getTime());
        if (a && (t = x(e), r = Ce.call(t.parsedDateParts, function(s) {
                return s != null
            }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = a;
        else return a;
        return e._isValid
    }

    function Ee(e) {
        var t = Q(NaN);
        return e != null ? L(x(t), e) : x(t).userInvalidated = !0, t
    }
    var rt = n.momentProperties = [],
        Qe = !1;

    function ze(e, t) {
        var r, a, s, l = rt.length;
        if (y(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), y(t._i) || (e._i = t._i), y(t._f) || (e._f = t._f), y(t._l) || (e._l = t._l), y(t._strict) || (e._strict = t._strict), y(t._tzm) || (e._tzm = t._tzm), y(t._isUTC) || (e._isUTC = t._isUTC), y(t._offset) || (e._offset = t._offset), y(t._pf) || (e._pf = x(t)), y(t._locale) || (e._locale = t._locale), l > 0)
            for (r = 0; r < l; r++) a = rt[r], s = t[a], y(s) || (e[a] = s);
        return e
    }

    function ue(e) {
        ze(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Qe === !1 && (Qe = !0, n.updateOffset(this), Qe = !1)
    }

    function Z(e) {
        return e instanceof ue || e != null && e._isAMomentObject != null
    }

    function J(e) {
        n.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
    }

    function I(e, t) {
        var r = !0;
        return L(function() {
            if (n.deprecationHandler != null && n.deprecationHandler(null, e), r) {
                var a = [],
                    s, l, u, v = arguments.length;
                for (l = 0; l < v; l++) {
                    if (s = "", typeof arguments[l] == "object") {
                        s += `
[` + l + "] ";
                        for (u in arguments[0]) m(arguments[0], u) && (s += u + ": " + arguments[0][u] + ", ");
                        s = s.slice(0, -2)
                    } else s = arguments[l];
                    a.push(s)
                }
                J(e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack), r = !1
            }
            return t.apply(this, arguments)
        }, t)
    }
    var Me = {};

    function b(e, t) {
        n.deprecationHandler != null && n.deprecationHandler(e, t), Me[e] || (J(t), Me[e] = !0)
    }
    n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;

    function c(e) {
        return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
    }

    function _(e) {
        var t, r;
        for (r in e) m(e, r) && (t = e[r], c(t) ? this[r] = t : this["_" + r] = t);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function g(e, t) {
        var r = L({}, e),
            a;
        for (a in t) m(t, a) && (p(e[a]) && p(t[a]) ? (r[a] = {}, L(r[a], e[a]), L(r[a], t[a])) : t[a] != null ? r[a] = t[a] : delete r[a]);
        for (a in e) m(e, a) && !m(t, a) && p(e[a]) && (r[a] = L({}, r[a]));
        return r
    }

    function S(e) {
        e != null && this.set(e)
    }
    var D;
    Object.keys ? D = Object.keys : D = function(e) {
        var t, r = [];
        for (t in e) m(e, t) && r.push(t);
        return r
    };
    var Y = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };

    function E(e, t, r) {
        var a = this._calendar[e] || this._calendar.sameElse;
        return c(a) ? a.call(t, r) : a
    }

    function O(e, t, r) {
        var a = "" + Math.abs(e),
            s = t - a.length,
            l = e >= 0;
        return (l ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
    }
    var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        ae = {},
        te = {};

    function k(e, t, r, a) {
        var s = a;
        typeof a == "string" && (s = function() {
            return this[a]()
        }), e && (te[e] = s), t && (te[t[0]] = function() {
            return O(s.apply(this, arguments), t[1], t[2])
        }), r && (te[r] = function() {
            return this.localeData().ordinal(s.apply(this, arguments), e)
        })
    }

    function at(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function G(e) {
        var t = e.match(z),
            r, a;
        for (r = 0, a = t.length; r < a; r++) te[t[r]] ? t[r] = te[t[r]] : t[r] = at(t[r]);
        return function(s) {
            var l = "",
                u;
            for (u = 0; u < a; u++) l += c(t[u]) ? t[u].call(s, e) : t[u];
            return l
        }
    }

    function se(e, t) {
        return e.isValid() ? (t = K(t, e.localeData()), ae[t] = ae[t] || G(t), ae[t](e)) : e.localeData().invalidDate()
    }

    function K(e, t) {
        var r = 5;

        function a(s) {
            return t.longDateFormat(s) || s
        }
        for (q.lastIndex = 0; r >= 0 && q.test(e);) e = e.replace(q, a), q.lastIndex = 0, r -= 1;
        return e
    }
    var re = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };

    function Ye(e) {
        var t = this._longDateFormat[e],
            r = this._longDateFormat[e.toUpperCase()];
        return t || !r ? t : (this._longDateFormat[e] = r.match(z).map(function(a) {
            return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a
        }).join(""), this._longDateFormat[e])
    }
    var je = "Invalid date";

    function me() {
        return this._invalidDate
    }
    var Ve = "%d",
        kt = /\d{1,2}/;

    function de(e) {
        return this._ordinal.replace("%d", e)
    }
    var Rr = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };

    function Wr(e, t, r, a) {
        var s = this._relativeTime[r];
        return c(s) ? s(e, t, r, a) : s.replace(/%d/i, e)
    }

    function Lr(e, t) {
        var r = this._relativeTime[e > 0 ? "future" : "past"];
        return c(r) ? r(t) : r.replace(/%s/i, t)
    }
    var Vt = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
    };

    function oe(e) {
        return typeof e == "string" ? Vt[e] || Vt[e.toLowerCase()] : void 0
    }

    function St(e) {
        var t = {},
            r, a;
        for (a in e) m(e, a) && (r = oe(a), r && (t[r] = e[a]));
        return t
    }
    var Ir = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
    };

    function Ar(e) {
        var t = [],
            r;
        for (r in e) m(e, r) && t.push({
            unit: r,
            priority: Ir[r]
        });
        return t.sort(function(a, s) {
            return a.priority - s.priority
        }), t
    }
    var Gt = /\d/,
        ne = /\d\d/,
        qt = /\d{3}/,
        Mt = /\d{4}/,
        st = /[+-]?\d{6}/,
        A = /\d\d?/,
        Bt = /\d\d\d\d?/,
        Zt = /\d\d\d\d\d\d?/,
        nt = /\d{1,3}/,
        Dt = /\d{1,4}/,
        it = /[+-]?\d{1,6}/,
        Ne = /\d+/,
        ot = /[+-]?\d+/,
        Ur = /Z|[+-]\d\d:?\d\d/gi,
        lt = /Z|[+-]\d\d(?::?\d\d)?/gi,
        $r = /[+-]?\d+(\.\d{1,3})?/,
        Ge = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        Re = /^[1-9]\d?/,
        Tt = /^([1-9]\d|\d)/,
        ut;
    ut = {};

    function w(e, t, r) {
        ut[e] = c(t) ? t : function(a, s) {
            return a && r ? r : t
        }
    }

    function Hr(e, t) {
        return m(ut, e) ? ut[e](t._strict, t._locale) : new RegExp(Qr(e))
    }

    function Qr(e) {
        return pe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, r, a, s, l) {
            return r || a || s || l
        }))
    }

    function pe(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function le(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function F(e) {
        var t = +e,
            r = 0;
        return t !== 0 && isFinite(t) && (r = le(t)), r
    }
    var xt = {};

    function W(e, t) {
        var r, a = t,
            s;
        for (typeof e == "string" && (e = [e]), M(t) && (a = function(l, u) {
                u[t] = F(l)
            }), s = e.length, r = 0; r < s; r++) xt[e[r]] = a
    }

    function qe(e, t) {
        W(e, function(r, a, s, l) {
            s._w = s._w || {}, t(r, s._w, s, l)
        })
    }

    function zr(e, t, r) {
        t != null && m(xt, e) && xt[e](t, r._a, r, e)
    }

    function dt(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    var X = 0,
        ye = 1,
        he = 2,
        B = 3,
        fe = 4,
        _e = 5,
        Oe = 6,
        Vr = 7,
        Gr = 8;
    k("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? O(e, 4) : "+" + e
    }), k(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), k(0, ["YYYY", 4], 0, "year"), k(0, ["YYYYY", 5], 0, "year"), k(0, ["YYYYYY", 6, !0], 0, "year"), w("Y", ot), w("YY", A, ne), w("YYYY", Dt, Mt), w("YYYYY", it, st), w("YYYYYY", it, st), W(["YYYYY", "YYYYYY"], X), W("YYYY", function(e, t) {
        t[X] = e.length === 2 ? n.parseTwoDigitYear(e) : F(e)
    }), W("YY", function(e, t) {
        t[X] = n.parseTwoDigitYear(e)
    }), W("Y", function(e, t) {
        t[X] = parseInt(e, 10)
    });

    function Be(e) {
        return dt(e) ? 366 : 365
    }
    n.parseTwoDigitYear = function(e) {
        return F(e) + (F(e) > 68 ? 1900 : 2e3)
    };
    var Jt = We("FullYear", !0);

    function qr() {
        return dt(this.year())
    }

    function We(e, t) {
        return function(r) {
            return r != null ? (Kt(this, e, r), n.updateOffset(this, t), this) : Ze(this, e)
        }
    }

    function Ze(e, t) {
        if (!e.isValid()) return NaN;
        var r = e._d,
            a = e._isUTC;
        switch (t) {
            case "Milliseconds":
                return a ? r.getUTCMilliseconds() : r.getMilliseconds();
            case "Seconds":
                return a ? r.getUTCSeconds() : r.getSeconds();
            case "Minutes":
                return a ? r.getUTCMinutes() : r.getMinutes();
            case "Hours":
                return a ? r.getUTCHours() : r.getHours();
            case "Date":
                return a ? r.getUTCDate() : r.getDate();
            case "Day":
                return a ? r.getUTCDay() : r.getDay();
            case "Month":
                return a ? r.getUTCMonth() : r.getMonth();
            case "FullYear":
                return a ? r.getUTCFullYear() : r.getFullYear();
            default:
                return NaN
        }
    }

    function Kt(e, t, r) {
        var a, s, l, u, v;
        if (!(!e.isValid() || isNaN(r))) {
            switch (a = e._d, s = e._isUTC, t) {
                case "Milliseconds":
                    return void(s ? a.setUTCMilliseconds(r) : a.setMilliseconds(r));
                case "Seconds":
                    return void(s ? a.setUTCSeconds(r) : a.setSeconds(r));
                case "Minutes":
                    return void(s ? a.setUTCMinutes(r) : a.setMinutes(r));
                case "Hours":
                    return void(s ? a.setUTCHours(r) : a.setHours(r));
                case "Date":
                    return void(s ? a.setUTCDate(r) : a.setDate(r));
                case "FullYear":
                    break;
                default:
                    return
            }
            l = r, u = e.month(), v = e.date(), v = v === 29 && u === 1 && !dt(l) ? 28 : v, s ? a.setUTCFullYear(l, u, v) : a.setFullYear(l, u, v)
        }
    }

    function Br(e) {
        return e = oe(e), c(this[e]) ? this[e]() : this
    }

    function Zr(e, t) {
        if (typeof e == "object") {
            e = St(e);
            var r = Ar(e),
                a, s = r.length;
            for (a = 0; a < s; a++) this[r[a].unit](e[r[a].unit])
        } else if (e = oe(e), c(this[e])) return this[e](t);
        return this
    }

    function Jr(e, t) {
        return (e % t + t) % t
    }
    var V;
    Array.prototype.indexOf ? V = Array.prototype.indexOf : V = function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1
    };

    function Yt(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var r = Jr(t, 12);
        return e += (t - r) / 12, r === 1 ? dt(e) ? 29 : 28 : 31 - r % 7 % 2
    }
    k("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), k("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), k("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), w("M", A, Re), w("MM", A, ne), w("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }), w("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }), W(["M", "MM"], function(e, t) {
        t[ye] = F(e) - 1
    }), W(["MMM", "MMMM"], function(e, t, r, a) {
        var s = r._locale.monthsParse(e, a, r._strict);
        s != null ? t[ye] = s : x(r).invalidMonth = e
    });
    var Kr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Xt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        er = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Xr = Ge,
        ea = Ge;

    function ta(e, t) {
        return e ? f(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || er).test(t) ? "format" : "standalone"][e.month()] : f(this._months) ? this._months : this._months.standalone
    }

    function ra(e, t) {
        return e ? f(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[er.test(t) ? "format" : "standalone"][e.month()] : f(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function aa(e, t, r) {
        var a, s, l, u = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) l = Q([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(l, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(l, "").toLocaleLowerCase();
        return r ? t === "MMM" ? (s = V.call(this._shortMonthsParse, u), s !== -1 ? s : null) : (s = V.call(this._longMonthsParse, u), s !== -1 ? s : null) : t === "MMM" ? (s = V.call(this._shortMonthsParse, u), s !== -1 ? s : (s = V.call(this._longMonthsParse, u), s !== -1 ? s : null)) : (s = V.call(this._longMonthsParse, u), s !== -1 ? s : (s = V.call(this._shortMonthsParse, u), s !== -1 ? s : null))
    }

    function sa(e, t, r) {
        var a, s, l;
        if (this._monthsParseExact) return aa.call(this, e, t, r);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
            if (s = Q([2e3, a]), r && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), !r && !this._monthsParse[a] && (l = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(l.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[a].test(e)) return a;
            if (r && t === "MMM" && this._shortMonthsParse[a].test(e)) return a;
            if (!r && this._monthsParse[a].test(e)) return a
        }
    }

    function tr(e, t) {
        if (!e.isValid()) return e;
        if (typeof t == "string") {
            if (/^\d+$/.test(t)) t = F(t);
            else if (t = e.localeData().monthsParse(t), !M(t)) return e
        }
        var r = t,
            a = e.date();
        return a = a < 29 ? a : Math.min(a, Yt(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, a) : e._d.setMonth(r, a), e
    }

    function rr(e) {
        return e != null ? (tr(this, e), n.updateOffset(this, !0), this) : Ze(this, "Month")
    }

    function na() {
        return Yt(this.year(), this.month())
    }

    function ia(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || ar.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Xr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function oa(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || ar.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = ea), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }

    function ar() {
        function e(T, C) {
            return C.length - T.length
        }
        var t = [],
            r = [],
            a = [],
            s, l, u, v;
        for (s = 0; s < 12; s++) l = Q([2e3, s]), u = pe(this.monthsShort(l, "")), v = pe(this.months(l, "")), t.push(u), r.push(v), a.push(v), a.push(u);
        t.sort(e), r.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
    }

    function la(e, t, r, a, s, l, u) {
        var v;
        return e < 100 && e >= 0 ? (v = new Date(e + 400, t, r, a, s, l, u), isFinite(v.getFullYear()) && v.setFullYear(e)) : v = new Date(e, t, r, a, s, l, u), v
    }

    function Je(e) {
        var t, r;
        return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function ft(e, t, r) {
        var a = 7 + t - r,
            s = (7 + Je(e, 0, a).getUTCDay() - t) % 7;
        return -s + a - 1
    }

    function sr(e, t, r, a, s) {
        var l = (7 + r - a) % 7,
            u = ft(e, a, s),
            v = 1 + 7 * (t - 1) + l + u,
            T, C;
        return v <= 0 ? (T = e - 1, C = Be(T) + v) : v > Be(e) ? (T = e + 1, C = v - Be(e)) : (T = e, C = v), {
            year: T,
            dayOfYear: C
        }
    }

    function Ke(e, t, r) {
        var a = ft(e.year(), t, r),
            s = Math.floor((e.dayOfYear() - a - 1) / 7) + 1,
            l, u;
        return s < 1 ? (u = e.year() - 1, l = s + ge(u, t, r)) : s > ge(e.year(), t, r) ? (l = s - ge(e.year(), t, r), u = e.year() + 1) : (u = e.year(), l = s), {
            week: l,
            year: u
        }
    }

    function ge(e, t, r) {
        var a = ft(e, t, r),
            s = ft(e + 1, t, r);
        return (Be(e) - a + s) / 7
    }
    k("w", ["ww", 2], "wo", "week"), k("W", ["WW", 2], "Wo", "isoWeek"), w("w", A, Re), w("ww", A, ne), w("W", A, Re), w("WW", A, ne), qe(["w", "ww", "W", "WW"], function(e, t, r, a) {
        t[a.substr(0, 1)] = F(e)
    });

    function ua(e) {
        return Ke(e, this._week.dow, this._week.doy).week
    }
    var da = {
        dow: 0,
        doy: 6
    };

    function fa() {
        return this._week.dow
    }

    function ca() {
        return this._week.doy
    }

    function ha(e) {
        var t = this.localeData().week(this);
        return e == null ? t : this.add((e - t) * 7, "d")
    }

    function ma(e) {
        var t = Ke(this, 1, 4).week;
        return e == null ? t : this.add((e - t) * 7, "d")
    }
    k("d", 0, "do", "day"), k("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), k("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), k("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), k("e", 0, 0, "weekday"), k("E", 0, 0, "isoWeekday"), w("d", A), w("e", A), w("E", A), w("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }), w("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }), w("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }), qe(["dd", "ddd", "dddd"], function(e, t, r, a) {
        var s = r._locale.weekdaysParse(e, a, r._strict);
        s != null ? t.d = s : x(r).invalidWeekday = e
    }), qe(["d", "e", "E"], function(e, t, r, a) {
        t[a] = F(e)
    });

    function pa(e, t) {
        return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10)
    }

    function ya(e, t) {
        return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }

    function Ot(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    var _a = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        nr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ga = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        va = Ge,
        wa = Ge,
        ba = Ge;

    function ka(e, t) {
        var r = f(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return e === !0 ? Ot(r, this._week.dow) : e ? r[e.day()] : r
    }

    function Sa(e) {
        return e === !0 ? Ot(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }

    function Ma(e) {
        return e === !0 ? Ot(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }

    function Da(e, t, r) {
        var a, s, l, u = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) l = Q([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(l, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(l, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(l, "").toLocaleLowerCase();
        return r ? t === "dddd" ? (s = V.call(this._weekdaysParse, u), s !== -1 ? s : null) : t === "ddd" ? (s = V.call(this._shortWeekdaysParse, u), s !== -1 ? s : null) : (s = V.call(this._minWeekdaysParse, u), s !== -1 ? s : null) : t === "dddd" ? (s = V.call(this._weekdaysParse, u), s !== -1 || (s = V.call(this._shortWeekdaysParse, u), s !== -1) ? s : (s = V.call(this._minWeekdaysParse, u), s !== -1 ? s : null)) : t === "ddd" ? (s = V.call(this._shortWeekdaysParse, u), s !== -1 || (s = V.call(this._weekdaysParse, u), s !== -1) ? s : (s = V.call(this._minWeekdaysParse, u), s !== -1 ? s : null)) : (s = V.call(this._minWeekdaysParse, u), s !== -1 || (s = V.call(this._weekdaysParse, u), s !== -1) ? s : (s = V.call(this._shortWeekdaysParse, u), s !== -1 ? s : null))
    }

    function Ta(e, t, r) {
        var a, s, l;
        if (this._weekdaysParseExact) return Da.call(this, e, t, r);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
            if (s = Q([2e3, 1]).day(a), r && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (l = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(l.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[a].test(e)) return a;
            if (r && t === "ddd" && this._shortWeekdaysParse[a].test(e)) return a;
            if (r && t === "dd" && this._minWeekdaysParse[a].test(e)) return a;
            if (!r && this._weekdaysParse[a].test(e)) return a
        }
    }

    function xa(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        var t = Ze(this, "Day");
        return e != null ? (e = pa(e, this.localeData()), this.add(e - t, "d")) : t
    }

    function Ya(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? t : this.add(e - t, "d")
    }

    function Oa(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        if (e != null) {
            var t = ya(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        } else return this.day() || 7
    }

    function Fa(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Ft.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = va), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Pa(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Ft.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = wa), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Ca(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Ft.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ba), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Ft() {
        function e(ee, Se) {
            return Se.length - ee.length
        }
        var t = [],
            r = [],
            a = [],
            s = [],
            l, u, v, T, C;
        for (l = 0; l < 7; l++) u = Q([2e3, 1]).day(l), v = pe(this.weekdaysMin(u, "")), T = pe(this.weekdaysShort(u, "")), C = pe(this.weekdays(u, "")), t.push(v), r.push(T), a.push(C), s.push(v), s.push(T), s.push(C);
        t.sort(e), r.sort(e), a.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
    }

    function Pt() {
        return this.hours() % 12 || 12
    }

    function Ea() {
        return this.hours() || 24
    }
    k("H", ["HH", 2], 0, "hour"), k("h", ["hh", 2], 0, Pt), k("k", ["kk", 2], 0, Ea), k("hmm", 0, 0, function() {
        return "" + Pt.apply(this) + O(this.minutes(), 2)
    }), k("hmmss", 0, 0, function() {
        return "" + Pt.apply(this) + O(this.minutes(), 2) + O(this.seconds(), 2)
    }), k("Hmm", 0, 0, function() {
        return "" + this.hours() + O(this.minutes(), 2)
    }), k("Hmmss", 0, 0, function() {
        return "" + this.hours() + O(this.minutes(), 2) + O(this.seconds(), 2)
    });

    function ir(e, t) {
        k(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    ir("a", !0), ir("A", !1);

    function or(e, t) {
        return t._meridiemParse
    }
    w("a", or), w("A", or), w("H", A, Tt), w("h", A, Re), w("k", A, Re), w("HH", A, ne), w("hh", A, ne), w("kk", A, ne), w("hmm", Bt), w("hmmss", Zt), w("Hmm", Bt), w("Hmmss", Zt), W(["H", "HH"], B), W(["k", "kk"], function(e, t, r) {
        var a = F(e);
        t[B] = a === 24 ? 0 : a
    }), W(["a", "A"], function(e, t, r) {
        r._isPm = r._locale.isPM(e), r._meridiem = e
    }), W(["h", "hh"], function(e, t, r) {
        t[B] = F(e), x(r).bigHour = !0
    }), W("hmm", function(e, t, r) {
        var a = e.length - 2;
        t[B] = F(e.substr(0, a)), t[fe] = F(e.substr(a)), x(r).bigHour = !0
    }), W("hmmss", function(e, t, r) {
        var a = e.length - 4,
            s = e.length - 2;
        t[B] = F(e.substr(0, a)), t[fe] = F(e.substr(a, 2)), t[_e] = F(e.substr(s)), x(r).bigHour = !0
    }), W("Hmm", function(e, t, r) {
        var a = e.length - 2;
        t[B] = F(e.substr(0, a)), t[fe] = F(e.substr(a))
    }), W("Hmmss", function(e, t, r) {
        var a = e.length - 4,
            s = e.length - 2;
        t[B] = F(e.substr(0, a)), t[fe] = F(e.substr(a, 2)), t[_e] = F(e.substr(s))
    });

    function ja(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    }
    var Na = /[ap]\.?m?\.?/i,
        Ra = We("Hours", !0);

    function Wa(e, t, r) {
        return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM"
    }
    var lr = {
            calendar: Y,
            longDateFormat: re,
            invalidDate: je,
            ordinal: Ve,
            dayOfMonthOrdinalParse: kt,
            relativeTime: Rr,
            months: Kr,
            monthsShort: Xt,
            week: da,
            weekdays: _a,
            weekdaysMin: ga,
            weekdaysShort: nr,
            meridiemParse: Na
        },
        H = {},
        Xe = {},
        et;

    function La(e, t) {
        var r, a = Math.min(e.length, t.length);
        for (r = 0; r < a; r += 1)
            if (e[r] !== t[r]) return r;
        return a
    }

    function ur(e) {
        return e && e.toLowerCase().replace("_", "-")
    }

    function Ia(e) {
        for (var t = 0, r, a, s, l; t < e.length;) {
            for (l = ur(e[t]).split("-"), r = l.length, a = ur(e[t + 1]), a = a ? a.split("-") : null; r > 0;) {
                if (s = ct(l.slice(0, r).join("-")), s) return s;
                if (a && a.length >= r && La(l, a) >= r - 1) break;
                r--
            }
            t++
        }
        return et
    }

    function Aa(e) {
        return !!(e && e.match("^[^/\\\\]*$"))
    }

    function ct(e) {
        var t = null,
            r;
        if (H[e] === void 0 && typeof module < "u" && module && module.exports && Aa(e)) try {
            t = et._abbr, r = require, r("./locale/" + e), De(t)
        } catch {
            H[e] = null
        }
        return H[e]
    }

    function De(e, t) {
        var r;
        return e && (y(t) ? r = ve(e) : r = Ct(e, t), r ? et = r : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr
    }

    function Ct(e, t) {
        if (t !== null) {
            var r, a = lr;
            if (t.abbr = e, H[e] != null) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = H[e]._config;
            else if (t.parentLocale != null)
                if (H[t.parentLocale] != null) a = H[t.parentLocale]._config;
                else if (r = ct(t.parentLocale), r != null) a = r._config;
            else return Xe[t.parentLocale] || (Xe[t.parentLocale] = []), Xe[t.parentLocale].push({
                name: e,
                config: t
            }), null;
            return H[e] = new S(g(a, t)), Xe[e] && Xe[e].forEach(function(s) {
                Ct(s.name, s.config)
            }), De(e), H[e]
        } else return delete H[e], null
    }

    function Ua(e, t) {
        if (t != null) {
            var r, a, s = lr;
            H[e] != null && H[e].parentLocale != null ? H[e].set(g(H[e]._config, t)) : (a = ct(e), a != null && (s = a._config), t = g(s, t), a == null && (t.abbr = e), r = new S(t), r.parentLocale = H[e], H[e] = r), De(e)
        } else H[e] != null && (H[e].parentLocale != null ? (H[e] = H[e].parentLocale, e === De() && De(e)) : H[e] != null && delete H[e]);
        return H[e]
    }

    function ve(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;
        if (!f(e)) {
            if (t = ct(e), t) return t;
            e = [e]
        }
        return Ia(e)
    }

    function $a() {
        return D(H)
    }

    function Et(e) {
        var t, r = e._a;
        return r && x(e).overflow === -2 && (t = r[ye] < 0 || r[ye] > 11 ? ye : r[he] < 1 || r[he] > Yt(r[X], r[ye]) ? he : r[B] < 0 || r[B] > 24 || r[B] === 24 && (r[fe] !== 0 || r[_e] !== 0 || r[Oe] !== 0) ? B : r[fe] < 0 || r[fe] > 59 ? fe : r[_e] < 0 || r[_e] > 59 ? _e : r[Oe] < 0 || r[Oe] > 999 ? Oe : -1, x(e)._overflowDayOfYear && (t < X || t > he) && (t = he), x(e)._overflowWeeks && t === -1 && (t = Vr), x(e)._overflowWeekday && t === -1 && (t = Gr), x(e).overflow = t), e
    }
    var Ha = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Qa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        za = /Z|[+-]\d\d(?::?\d\d)?/,
        ht = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1]
        ],
        jt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Va = /^\/?Date\((-?\d+)/i,
        Ga = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        qa = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };

    function dr(e) {
        var t, r, a = e._i,
            s = Ha.exec(a) || Qa.exec(a),
            l, u, v, T, C = ht.length,
            ee = jt.length;
        if (s) {
            for (x(e).iso = !0, t = 0, r = C; t < r; t++)
                if (ht[t][1].exec(s[1])) {
                    u = ht[t][0], l = ht[t][2] !== !1;
                    break
                } if (u == null) {
                e._isValid = !1;
                return
            }
            if (s[3]) {
                for (t = 0, r = ee; t < r; t++)
                    if (jt[t][1].exec(s[3])) {
                        v = (s[2] || " ") + jt[t][0];
                        break
                    } if (v == null) {
                    e._isValid = !1;
                    return
                }
            }
            if (!l && v != null) {
                e._isValid = !1;
                return
            }
            if (s[4])
                if (za.exec(s[4])) T = "Z";
                else {
                    e._isValid = !1;
                    return
                } e._f = u + (v || "") + (T || ""), Rt(e)
        } else e._isValid = !1
    }

    function Ba(e, t, r, a, s, l) {
        var u = [Za(e), Xt.indexOf(t), parseInt(r, 10), parseInt(a, 10), parseInt(s, 10)];
        return l && u.push(parseInt(l, 10)), u
    }

    function Za(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }

    function Ja(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function Ka(e, t, r) {
        if (e) {
            var a = nr.indexOf(e),
                s = new Date(t[0], t[1], t[2]).getDay();
            if (a !== s) return x(r).weekdayMismatch = !0, r._isValid = !1, !1
        }
        return !0
    }

    function Xa(e, t, r) {
        if (e) return qa[e];
        if (t) return 0;
        var a = parseInt(r, 10),
            s = a % 100,
            l = (a - s) / 100;
        return l * 60 + s
    }

    function fr(e) {
        var t = Ga.exec(Ja(e._i)),
            r;
        if (t) {
            if (r = Ba(t[4], t[3], t[2], t[5], t[6], t[7]), !Ka(t[1], r, e)) return;
            e._a = r, e._tzm = Xa(t[8], t[9], t[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), x(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function es(e) {
        var t = Va.exec(e._i);
        if (t !== null) {
            e._d = new Date(+t[1]);
            return
        }
        if (dr(e), e._isValid === !1) delete e._isValid;
        else return;
        if (fr(e), e._isValid === !1) delete e._isValid;
        else return;
        e._strict ? e._isValid = !1 : n.createFromInputFallback(e)
    }
    n.createFromInputFallback = I("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    });

    function Le(e, t, r) {
        return e ?? t ?? r
    }

    function ts(e) {
        var t = new Date(n.now());
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function Nt(e) {
        var t, r, a = [],
            s, l, u;
        if (!e._d) {
            for (s = ts(e), e._w && e._a[he] == null && e._a[ye] == null && rs(e), e._dayOfYear != null && (u = Le(e._a[X], s[X]), (e._dayOfYear > Be(u) || e._dayOfYear === 0) && (x(e)._overflowDayOfYear = !0), r = Je(u, 0, e._dayOfYear), e._a[ye] = r.getUTCMonth(), e._a[he] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = a[t] = s[t];
            for (; t < 7; t++) e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
            e._a[B] === 24 && e._a[fe] === 0 && e._a[_e] === 0 && e._a[Oe] === 0 && (e._nextDay = !0, e._a[B] = 0), e._d = (e._useUTC ? Je : la).apply(null, a), l = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[B] = 24), e._w && typeof e._w.d < "u" && e._w.d !== l && (x(e).weekdayMismatch = !0)
        }
    }

    function rs(e) {
        var t, r, a, s, l, u, v, T, C;
        t = e._w, t.GG != null || t.W != null || t.E != null ? (l = 1, u = 4, r = Le(t.GG, e._a[X], Ke(U(), 1, 4).year), a = Le(t.W, 1), s = Le(t.E, 1), (s < 1 || s > 7) && (T = !0)) : (l = e._locale._week.dow, u = e._locale._week.doy, C = Ke(U(), l, u), r = Le(t.gg, e._a[X], C.year), a = Le(t.w, C.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (T = !0)) : t.e != null ? (s = t.e + l, (t.e < 0 || t.e > 6) && (T = !0)) : s = l), a < 1 || a > ge(r, l, u) ? x(e)._overflowWeeks = !0 : T != null ? x(e)._overflowWeekday = !0 : (v = sr(r, a, s, l, u), e._a[X] = v.year, e._dayOfYear = v.dayOfYear)
    }
    n.ISO_8601 = function() {}, n.RFC_2822 = function() {};

    function Rt(e) {
        if (e._f === n.ISO_8601) {
            dr(e);
            return
        }
        if (e._f === n.RFC_2822) {
            fr(e);
            return
        }
        e._a = [], x(e).empty = !0;
        var t = "" + e._i,
            r, a, s, l, u, v = t.length,
            T = 0,
            C, ee;
        for (s = K(e._f, e._locale).match(z) || [], ee = s.length, r = 0; r < ee; r++) l = s[r], a = (t.match(Hr(l, e)) || [])[0], a && (u = t.substr(0, t.indexOf(a)), u.length > 0 && x(e).unusedInput.push(u), t = t.slice(t.indexOf(a) + a.length), T += a.length), te[l] ? (a ? x(e).empty = !1 : x(e).unusedTokens.push(l), zr(l, a, e)) : e._strict && !a && x(e).unusedTokens.push(l);
        x(e).charsLeftOver = v - T, t.length > 0 && x(e).unusedInput.push(t), e._a[B] <= 12 && x(e).bigHour === !0 && e._a[B] > 0 && (x(e).bigHour = void 0), x(e).parsedDateParts = e._a.slice(0), x(e).meridiem = e._meridiem, e._a[B] = as(e._locale, e._a[B], e._meridiem), C = x(e).era, C !== null && (e._a[X] = e._locale.erasConvertYear(C, e._a[X])), Nt(e), Et(e)
    }

    function as(e, t, r) {
        var a;
        return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (a = e.isPM(r), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t)
    }

    function ss(e) {
        var t, r, a, s, l, u, v = !1,
            T = e._f.length;
        if (T === 0) {
            x(e).invalidFormat = !0, e._d = new Date(NaN);
            return
        }
        for (s = 0; s < T; s++) l = 0, u = !1, t = ze({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Rt(t), He(t) && (u = !0), l += x(t).charsLeftOver, l += x(t).unusedTokens.length * 10, x(t).score = l, v ? l < a && (a = l, r = t) : (a == null || l < a || u) && (a = l, r = t, u && (v = !0));
        L(e, r || t)
    }

    function ns(e) {
        if (!e._d) {
            var t = St(e._i),
                r = t.day === void 0 ? t.date : t.day;
            e._a = R([t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), Nt(e)
        }
    }

    function is(e) {
        var t = new ue(Et(cr(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function cr(e) {
        var t = e._i,
            r = e._f;
        return e._locale = e._locale || ve(e._l), t === null || r === void 0 && t === "" ? Ee({
            nullInput: !0
        }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Z(t) ? new ue(Et(t)) : (P(t) ? e._d = t : f(r) ? ss(e) : r ? Rt(e) : os(e), He(e) || (e._d = null), e))
    }

    function os(e) {
        var t = e._i;
        y(t) ? e._d = new Date(n.now()) : P(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? es(e) : f(t) ? (e._a = R(t.slice(0), function(r) {
            return parseInt(r, 10)
        }), Nt(e)) : p(t) ? ns(e) : M(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
    }

    function hr(e, t, r, a, s) {
        var l = {};
        return (t === !0 || t === !1) && (a = t, t = void 0), (r === !0 || r === !1) && (a = r, r = void 0), (p(e) && d(e) || f(e) && e.length === 0) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = r, l._i = e, l._f = t, l._strict = a, is(l)
    }

    function U(e, t, r, a) {
        return hr(e, t, r, a, !1)
    }
    var ls = I("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = U.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : Ee()
        }),
        us = I("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = U.apply(null, arguments);
            return this.isValid() && e.isValid() ? e > this ? this : e : Ee()
        });

    function mr(e, t) {
        var r, a;
        if (t.length === 1 && f(t[0]) && (t = t[0]), !t.length) return U();
        for (r = t[0], a = 1; a < t.length; ++a)(!t[a].isValid() || t[a][e](r)) && (r = t[a]);
        return r
    }

    function ds() {
        var e = [].slice.call(arguments, 0);
        return mr("isBefore", e)
    }

    function fs() {
        var e = [].slice.call(arguments, 0);
        return mr("isAfter", e)
    }
    var cs = function() {
            return Date.now ? Date.now() : +new Date
        },
        tt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function hs(e) {
        var t, r = !1,
            a, s = tt.length;
        for (t in e)
            if (m(e, t) && !(V.call(tt, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
        for (a = 0; a < s; ++a)
            if (e[tt[a]]) {
                if (r) return !1;
                parseFloat(e[tt[a]]) !== F(e[tt[a]]) && (r = !0)
            } return !0
    }

    function ms() {
        return this._isValid
    }

    function ps() {
        return ce(NaN)
    }

    function mt(e) {
        var t = St(e),
            r = t.year || 0,
            a = t.quarter || 0,
            s = t.month || 0,
            l = t.week || t.isoWeek || 0,
            u = t.day || 0,
            v = t.hour || 0,
            T = t.minute || 0,
            C = t.second || 0,
            ee = t.millisecond || 0;
        this._isValid = hs(t), this._milliseconds = +ee + C * 1e3 + T * 6e4 + v * 1e3 * 60 * 60, this._days = +u + l * 7, this._months = +s + a * 3 + r * 12, this._data = {}, this._locale = ve(), this._bubble()
    }

    function pt(e) {
        return e instanceof mt
    }

    function Wt(e) {
        return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
    }

    function ys(e, t, r) {
        var a = Math.min(e.length, t.length),
            s = Math.abs(e.length - t.length),
            l = 0,
            u;
        for (u = 0; u < a; u++)(r && e[u] !== t[u] || !r && F(e[u]) !== F(t[u])) && l++;
        return l + s
    }

    function pr(e, t) {
        k(e, 0, 0, function() {
            var r = this.utcOffset(),
                a = "+";
            return r < 0 && (r = -r, a = "-"), a + O(~~(r / 60), 2) + t + O(~~r % 60, 2)
        })
    }
    pr("Z", ":"), pr("ZZ", ""), w("Z", lt), w("ZZ", lt), W(["Z", "ZZ"], function(e, t, r) {
        r._useUTC = !0, r._tzm = Lt(lt, e)
    });
    var _s = /([\+\-]|\d\d)/gi;

    function Lt(e, t) {
        var r = (t || "").match(e),
            a, s, l;
        return r === null ? null : (a = r[r.length - 1] || [], s = (a + "").match(_s) || ["-", 0, 0], l = +(s[1] * 60) + F(s[2]), l === 0 ? 0 : s[0] === "+" ? l : -l)
    }

    function It(e, t) {
        var r, a;
        return t._isUTC ? (r = t.clone(), a = (Z(e) || P(e) ? e.valueOf() : U(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + a), n.updateOffset(r, !1), r) : U(e).local()
    }

    function At(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    n.updateOffset = function() {};

    function gs(e, t, r) {
        var a = this._offset || 0,
            s;
        if (!this.isValid()) return e != null ? this : NaN;
        if (e != null) {
            if (typeof e == "string") {
                if (e = Lt(lt, e), e === null) return this
            } else Math.abs(e) < 16 && !r && (e = e * 60);
            return !this._isUTC && t && (s = At(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), a !== e && (!t || this._changeInProgress ? vr(this, ce(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
        } else return this._isUTC ? a : At(this)
    }

    function vs(e, t) {
        return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }

    function ws(e) {
        return this.utcOffset(0, e)
    }

    function bs(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(At(this), "m")), this
    }

    function ks() {
        if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var e = Lt(Ur, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }

    function Ss(e) {
        return this.isValid() ? (e = e ? U(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
    }

    function Ms() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ds() {
        if (!y(this._isDSTShifted)) return this._isDSTShifted;
        var e = {},
            t;
        return ze(e, this), e = cr(e), e._a ? (t = e._isUTC ? Q(e._a) : U(e._a), this._isDSTShifted = this.isValid() && ys(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
    }

    function Ts() {
        return this.isValid() ? !this._isUTC : !1
    }

    function xs() {
        return this.isValid() ? this._isUTC : !1
    }

    function yr() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1
    }
    var Ys = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Os = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function ce(e, t) {
        var r = e,
            a = null,
            s, l, u;
        return pt(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : M(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (a = Ys.exec(e)) ? (s = a[1] === "-" ? -1 : 1, r = {
            y: 0,
            d: F(a[he]) * s,
            h: F(a[B]) * s,
            m: F(a[fe]) * s,
            s: F(a[_e]) * s,
            ms: F(Wt(a[Oe] * 1e3)) * s
        }) : (a = Os.exec(e)) ? (s = a[1] === "-" ? -1 : 1, r = {
            y: Fe(a[2], s),
            M: Fe(a[3], s),
            w: Fe(a[4], s),
            d: Fe(a[5], s),
            h: Fe(a[6], s),
            m: Fe(a[7], s),
            s: Fe(a[8], s)
        }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (u = Fs(U(r.from), U(r.to)), r = {}, r.ms = u.milliseconds, r.M = u.months), l = new mt(r), pt(e) && m(e, "_locale") && (l._locale = e._locale), pt(e) && m(e, "_isValid") && (l._isValid = e._isValid), l
    }
    ce.fn = mt.prototype, ce.invalid = ps;

    function Fe(e, t) {
        var r = e && parseFloat(e.replace(",", "."));
        return (isNaN(r) ? 0 : r) * t
    }

    function _r(e, t) {
        var r = {};
        return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r
    }

    function Fs(e, t) {
        var r;
        return e.isValid() && t.isValid() ? (t = It(t, e), e.isBefore(t) ? r = _r(e, t) : (r = _r(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : {
            milliseconds: 0,
            months: 0
        }
    }

    function gr(e, t) {
        return function(r, a) {
            var s, l;
            return a !== null && !isNaN(+a) && (b(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), l = r, r = a, a = l), s = ce(r, a), vr(this, s, e), this
        }
    }

    function vr(e, t, r, a) {
        var s = t._milliseconds,
            l = Wt(t._days),
            u = Wt(t._months);
        e.isValid() && (a = a ?? !0, u && tr(e, Ze(e, "Month") + u * r), l && Kt(e, "Date", Ze(e, "Date") + l * r), s && e._d.setTime(e._d.valueOf() + s * r), a && n.updateOffset(e, l || u))
    }
    var Ps = gr(1, "add"),
        Cs = gr(-1, "subtract");

    function wr(e) {
        return typeof e == "string" || e instanceof String
    }

    function Es(e) {
        return Z(e) || P(e) || wr(e) || M(e) || Ns(e) || js(e) || e === null || e === void 0
    }

    function js(e) {
        var t = p(e) && !d(e),
            r = !1,
            a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
            s, l, u = a.length;
        for (s = 0; s < u; s += 1) l = a[s], r = r || m(e, l);
        return t && r
    }

    function Ns(e) {
        var t = f(e),
            r = !1;
        return t && (r = e.filter(function(a) {
            return !M(a) && wr(e)
        }).length === 0), t && r
    }

    function Rs(e) {
        var t = p(e) && !d(e),
            r = !1,
            a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
            s, l;
        for (s = 0; s < a.length; s += 1) l = a[s], r = r || m(e, l);
        return t && r
    }

    function Ws(e, t) {
        var r = e.diff(t, "days", !0);
        return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse"
    }

    function Ls(e, t) {
        arguments.length === 1 && (arguments[0] ? Es(arguments[0]) ? (e = arguments[0], t = void 0) : Rs(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
        var r = e || U(),
            a = It(r, this).startOf("day"),
            s = n.calendarFormat(this, a) || "sameElse",
            l = t && (c(t[s]) ? t[s].call(this, r) : t[s]);
        return this.format(l || this.localeData().calendar(s, this, U(r)))
    }

    function Is() {
        return new ue(this)
    }

    function As(e, t) {
        var r = Z(e) ? e : U(e);
        return this.isValid() && r.isValid() ? (t = oe(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1
    }

    function Us(e, t) {
        var r = Z(e) ? e : U(e);
        return this.isValid() && r.isValid() ? (t = oe(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1
    }

    function $s(e, t, r, a) {
        var s = Z(e) ? e : U(e),
            l = Z(t) ? t : U(t);
        return this.isValid() && s.isValid() && l.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (a[1] === ")" ? this.isBefore(l, r) : !this.isAfter(l, r))) : !1
    }

    function Hs(e, t) {
        var r = Z(e) ? e : U(e),
            a;
        return this.isValid() && r.isValid() ? (t = oe(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (a = r.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1
    }

    function Qs(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }

    function zs(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }

    function Vs(e, t, r) {
        var a, s, l;
        if (!this.isValid()) return NaN;
        if (a = It(e, this), !a.isValid()) return NaN;
        switch (s = (a.utcOffset() - this.utcOffset()) * 6e4, t = oe(t), t) {
            case "year":
                l = yt(this, a) / 12;
                break;
            case "month":
                l = yt(this, a);
                break;
            case "quarter":
                l = yt(this, a) / 3;
                break;
            case "second":
                l = (this - a) / 1e3;
                break;
            case "minute":
                l = (this - a) / 6e4;
                break;
            case "hour":
                l = (this - a) / 36e5;
                break;
            case "day":
                l = (this - a - s) / 864e5;
                break;
            case "week":
                l = (this - a - s) / 6048e5;
                break;
            default:
                l = this - a
        }
        return r ? l : le(l)
    }

    function yt(e, t) {
        if (e.date() < t.date()) return -yt(t, e);
        var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
            a = e.clone().add(r, "months"),
            s, l;
        return t - a < 0 ? (s = e.clone().add(r - 1, "months"), l = (t - a) / (a - s)) : (s = e.clone().add(r + 1, "months"), l = (t - a) / (s - a)), -(r + l) || 0
    }
    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function Gs() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function qs(e) {
        if (!this.isValid()) return null;
        var t = e !== !0,
            r = t ? this.clone().utc() : this;
        return r.year() < 0 || r.year() > 9999 ? se(r, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : c(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", se(r, "Z")) : se(r, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }

    function Bs() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            t = "",
            r, a, s, l;
        return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", l = t + '[")]', this.format(r + a + s + l)
    }

    function Zs(e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var t = se(this, e);
        return this.localeData().postformat(t)
    }

    function Js(e, t) {
        return this.isValid() && (Z(e) && e.isValid() || U(e).isValid()) ? ce({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function Ks(e) {
        return this.from(U(), e)
    }

    function Xs(e, t) {
        return this.isValid() && (Z(e) && e.isValid() || U(e).isValid()) ? ce({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function en(e) {
        return this.to(U(), e)
    }

    function br(e) {
        var t;
        return e === void 0 ? this._locale._abbr : (t = ve(e), t != null && (this._locale = t), this)
    }
    var kr = I("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return e === void 0 ? this.localeData() : this.locale(e)
    });

    function Sr() {
        return this._locale
    }
    var _t = 1e3,
        Ie = 60 * _t,
        gt = 60 * Ie,
        Mr = (365 * 400 + 97) * 24 * gt;

    function Ae(e, t) {
        return (e % t + t) % t
    }

    function Dr(e, t, r) {
        return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Mr : new Date(e, t, r).valueOf()
    }

    function Tr(e, t, r) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Mr : Date.UTC(e, t, r)
    }

    function tn(e) {
        var t, r;
        if (e = oe(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (r = this._isUTC ? Tr : Dr, e) {
            case "year":
                t = r(this.year(), 0, 1);
                break;
            case "quarter":
                t = r(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                t = r(this.year(), this.month(), 1);
                break;
            case "week":
                t = r(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                t = r(this.year(), this.month(), this.date());
                break;
            case "hour":
                t = this._d.valueOf(), t -= Ae(t + (this._isUTC ? 0 : this.utcOffset() * Ie), gt);
                break;
            case "minute":
                t = this._d.valueOf(), t -= Ae(t, Ie);
                break;
            case "second":
                t = this._d.valueOf(), t -= Ae(t, _t);
                break
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
    }

    function rn(e) {
        var t, r;
        if (e = oe(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (r = this._isUTC ? Tr : Dr, e) {
            case "year":
                t = r(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                t = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                t = r(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                t = r(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                t = this._d.valueOf(), t += gt - Ae(t + (this._isUTC ? 0 : this.utcOffset() * Ie), gt) - 1;
                break;
            case "minute":
                t = this._d.valueOf(), t += Ie - Ae(t, Ie) - 1;
                break;
            case "second":
                t = this._d.valueOf(), t += _t - Ae(t, _t) - 1;
                break
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
    }

    function an() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
    }

    function sn() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function nn() {
        return new Date(this.valueOf())
    }

    function on() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }

    function ln() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }

    function un() {
        return this.isValid() ? this.toISOString() : null
    }

    function dn() {
        return He(this)
    }

    function fn() {
        return L({}, x(this))
    }

    function cn() {
        return x(this).overflow
    }

    function hn() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    k("N", 0, 0, "eraAbbr"), k("NN", 0, 0, "eraAbbr"), k("NNN", 0, 0, "eraAbbr"), k("NNNN", 0, 0, "eraName"), k("NNNNN", 0, 0, "eraNarrow"), k("y", ["y", 1], "yo", "eraYear"), k("y", ["yy", 2], 0, "eraYear"), k("y", ["yyy", 3], 0, "eraYear"), k("y", ["yyyy", 4], 0, "eraYear"), w("N", Ut), w("NN", Ut), w("NNN", Ut), w("NNNN", Mn), w("NNNNN", Dn), W(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, r, a) {
        var s = r._locale.erasParse(e, a, r._strict);
        s ? x(r).era = s : x(r).invalidEra = e
    }), w("y", Ne), w("yy", Ne), w("yyy", Ne), w("yyyy", Ne), w("yo", Tn), W(["y", "yy", "yyy", "yyyy"], X), W(["yo"], function(e, t, r, a) {
        var s;
        r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[X] = r._locale.eraYearOrdinalParse(e, s) : t[X] = parseInt(e, 10)
    });

    function mn(e, t) {
        var r, a, s, l = this._eras || ve("en")._eras;
        for (r = 0, a = l.length; r < a; ++r) switch (typeof l[r].since === "string" && (s = n(l[r].since).startOf("day"), l[r].since = s.valueOf()), typeof l[r].until) {
            case "undefined":
                l[r].until = 1 / 0;
                break;
            case "string":
                s = n(l[r].until).startOf("day").valueOf(), l[r].until = s.valueOf();
                break
        }
        return l
    }

    function pn(e, t, r) {
        var a, s, l = this.eras(),
            u, v, T;
        for (e = e.toUpperCase(), a = 0, s = l.length; a < s; ++a)
            if (u = l[a].name.toUpperCase(), v = l[a].abbr.toUpperCase(), T = l[a].narrow.toUpperCase(), r) switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (v === e) return l[a];
                    break;
                case "NNNN":
                    if (u === e) return l[a];
                    break;
                case "NNNNN":
                    if (T === e) return l[a];
                    break
            } else if ([u, v, T].indexOf(e) >= 0) return l[a]
    }

    function yn(e, t) {
        var r = e.since <= e.until ? 1 : -1;
        return t === void 0 ? n(e.since).year() : n(e.since).year() + (t - e.offset) * r
    }

    function _n() {
        var e, t, r, a = this.localeData().eras();
        for (e = 0, t = a.length; e < t; ++e)
            if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return a[e].name;
        return ""
    }

    function gn() {
        var e, t, r, a = this.localeData().eras();
        for (e = 0, t = a.length; e < t; ++e)
            if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return a[e].narrow;
        return ""
    }

    function vn() {
        var e, t, r, a = this.localeData().eras();
        for (e = 0, t = a.length; e < t; ++e)
            if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return a[e].abbr;
        return ""
    }

    function wn() {
        var e, t, r, a, s = this.localeData().eras();
        for (e = 0, t = s.length; e < t; ++e)
            if (r = s[e].since <= s[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), s[e].since <= a && a <= s[e].until || s[e].until <= a && a <= s[e].since) return (this.year() - n(s[e].since).year()) * r + s[e].offset;
        return this.year()
    }

    function bn(e) {
        return m(this, "_erasNameRegex") || $t.call(this), e ? this._erasNameRegex : this._erasRegex
    }

    function kn(e) {
        return m(this, "_erasAbbrRegex") || $t.call(this), e ? this._erasAbbrRegex : this._erasRegex
    }

    function Sn(e) {
        return m(this, "_erasNarrowRegex") || $t.call(this), e ? this._erasNarrowRegex : this._erasRegex
    }

    function Ut(e, t) {
        return t.erasAbbrRegex(e)
    }

    function Mn(e, t) {
        return t.erasNameRegex(e)
    }

    function Dn(e, t) {
        return t.erasNarrowRegex(e)
    }

    function Tn(e, t) {
        return t._eraYearOrdinalRegex || Ne
    }

    function $t() {
        var e = [],
            t = [],
            r = [],
            a = [],
            s, l, u, v, T, C = this.eras();
        for (s = 0, l = C.length; s < l; ++s) u = pe(C[s].name), v = pe(C[s].abbr), T = pe(C[s].narrow), t.push(u), e.push(v), r.push(T), a.push(u), a.push(v), a.push(T);
        this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }
    k(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), k(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });

    function vt(e, t) {
        k(0, [e, e.length], 0, t)
    }
    vt("gggg", "weekYear"), vt("ggggg", "weekYear"), vt("GGGG", "isoWeekYear"), vt("GGGGG", "isoWeekYear"), w("G", ot), w("g", ot), w("GG", A, ne), w("gg", A, ne), w("GGGG", Dt, Mt), w("gggg", Dt, Mt), w("GGGGG", it, st), w("ggggg", it, st), qe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, r, a) {
        t[a.substr(0, 2)] = F(e)
    }), qe(["gg", "GG"], function(e, t, r, a) {
        t[a] = n.parseTwoDigitYear(e)
    });

    function xn(e) {
        return xr.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Yn(e) {
        return xr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function On() {
        return ge(this.year(), 1, 4)
    }

    function Fn() {
        return ge(this.isoWeekYear(), 1, 4)
    }

    function Pn() {
        var e = this.localeData()._week;
        return ge(this.year(), e.dow, e.doy)
    }

    function Cn() {
        var e = this.localeData()._week;
        return ge(this.weekYear(), e.dow, e.doy)
    }

    function xr(e, t, r, a, s) {
        var l;
        return e == null ? Ke(this, a, s).year : (l = ge(e, a, s), t > l && (t = l), En.call(this, e, t, r, a, s))
    }

    function En(e, t, r, a, s) {
        var l = sr(e, t, r, a, s),
            u = Je(l.year, 0, l.dayOfYear);
        return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this
    }
    k("Q", 0, "Qo", "quarter"), w("Q", Gt), W("Q", function(e, t) {
        t[ye] = (F(e) - 1) * 3
    });

    function jn(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
    }
    k("D", ["DD", 2], "Do", "date"), w("D", A, Re), w("DD", A, ne), w("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), W(["D", "DD"], he), W("Do", function(e, t) {
        t[he] = F(e.match(A)[0])
    });
    var Yr = We("Date", !0);
    k("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), w("DDD", nt), w("DDDD", qt), W(["DDD", "DDDD"], function(e, t, r) {
        r._dayOfYear = F(e)
    });

    function Nn(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? t : this.add(e - t, "d")
    }
    k("m", ["mm", 2], 0, "minute"), w("m", A, Tt), w("mm", A, ne), W(["m", "mm"], fe);
    var Rn = We("Minutes", !1);
    k("s", ["ss", 2], 0, "second"), w("s", A, Tt), w("ss", A, ne), W(["s", "ss"], _e);
    var Wn = We("Seconds", !1);
    k("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), k(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), k(0, ["SSS", 3], 0, "millisecond"), k(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10
    }), k(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100
    }), k(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3
    }), k(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4
    }), k(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5
    }), k(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6
    }), w("S", nt, Gt), w("SS", nt, ne), w("SSS", nt, qt);
    var Te, Or;
    for (Te = "SSSS"; Te.length <= 9; Te += "S") w(Te, Ne);

    function Ln(e, t) {
        t[Oe] = F(("0." + e) * 1e3)
    }
    for (Te = "S"; Te.length <= 9; Te += "S") W(Te, Ln);
    Or = We("Milliseconds", !1), k("z", 0, 0, "zoneAbbr"), k("zz", 0, 0, "zoneName");

    function In() {
        return this._isUTC ? "UTC" : ""
    }

    function An() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    var h = ue.prototype;
    h.add = Ps, h.calendar = Ls, h.clone = Is, h.diff = Vs, h.endOf = rn, h.format = Zs, h.from = Js, h.fromNow = Ks, h.to = Xs, h.toNow = en, h.get = Br, h.invalidAt = cn, h.isAfter = As, h.isBefore = Us, h.isBetween = $s, h.isSame = Hs, h.isSameOrAfter = Qs, h.isSameOrBefore = zs, h.isValid = dn, h.lang = kr, h.locale = br, h.localeData = Sr, h.max = us, h.min = ls, h.parsingFlags = fn, h.set = Zr, h.startOf = tn, h.subtract = Cs, h.toArray = on, h.toObject = ln, h.toDate = nn, h.toISOString = qs, h.inspect = Bs, typeof Symbol < "u" && Symbol.for != null && (h[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }), h.toJSON = un, h.toString = Gs, h.unix = sn, h.valueOf = an, h.creationData = hn, h.eraName = _n, h.eraNarrow = gn, h.eraAbbr = vn, h.eraYear = wn, h.year = Jt, h.isLeapYear = qr, h.weekYear = xn, h.isoWeekYear = Yn, h.quarter = h.quarters = jn, h.month = rr, h.daysInMonth = na, h.week = h.weeks = ha, h.isoWeek = h.isoWeeks = ma, h.weeksInYear = Pn, h.weeksInWeekYear = Cn, h.isoWeeksInYear = On, h.isoWeeksInISOWeekYear = Fn, h.date = Yr, h.day = h.days = xa, h.weekday = Ya, h.isoWeekday = Oa, h.dayOfYear = Nn, h.hour = h.hours = Ra, h.minute = h.minutes = Rn, h.second = h.seconds = Wn, h.millisecond = h.milliseconds = Or, h.utcOffset = gs, h.utc = ws, h.local = bs, h.parseZone = ks, h.hasAlignedHourOffset = Ss, h.isDST = Ms, h.isLocal = Ts, h.isUtcOffset = xs, h.isUtc = yr, h.isUTC = yr, h.zoneAbbr = In, h.zoneName = An, h.dates = I("dates accessor is deprecated. Use date instead.", Yr), h.months = I("months accessor is deprecated. Use month instead", rr), h.years = I("years accessor is deprecated. Use year instead", Jt), h.zone = I("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", vs), h.isDSTShifted = I("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ds);

    function Un(e) {
        return U(e * 1e3)
    }

    function $n() {
        return U.apply(null, arguments).parseZone()
    }

    function Fr(e) {
        return e
    }
    var N = S.prototype;
    N.calendar = E, N.longDateFormat = Ye, N.invalidDate = me, N.ordinal = de, N.preparse = Fr, N.postformat = Fr, N.relativeTime = Wr, N.pastFuture = Lr, N.set = _, N.eras = mn, N.erasParse = pn, N.erasConvertYear = yn, N.erasAbbrRegex = kn, N.erasNameRegex = bn, N.erasNarrowRegex = Sn, N.months = ta, N.monthsShort = ra, N.monthsParse = sa, N.monthsRegex = oa, N.monthsShortRegex = ia, N.week = ua, N.firstDayOfYear = ca, N.firstDayOfWeek = fa, N.weekdays = ka, N.weekdaysMin = Ma, N.weekdaysShort = Sa, N.weekdaysParse = Ta, N.weekdaysRegex = Fa, N.weekdaysShortRegex = Pa, N.weekdaysMinRegex = Ca, N.isPM = ja, N.meridiem = Wa;

    function wt(e, t, r, a) {
        var s = ve(),
            l = Q().set(a, t);
        return s[r](l, e)
    }

    function Pr(e, t, r) {
        if (M(e) && (t = e, e = void 0), e = e || "", t != null) return wt(e, t, r, "month");
        var a, s = [];
        for (a = 0; a < 12; a++) s[a] = wt(e, a, r, "month");
        return s
    }

    function Ht(e, t, r, a) {
        typeof e == "boolean" ? (M(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, M(t) && (r = t, t = void 0), t = t || "");
        var s = ve(),
            l = e ? s._week.dow : 0,
            u, v = [];
        if (r != null) return wt(t, (r + l) % 7, a, "day");
        for (u = 0; u < 7; u++) v[u] = wt(t, (u + l) % 7, a, "day");
        return v
    }

    function Hn(e, t) {
        return Pr(e, t, "months")
    }

    function Qn(e, t) {
        return Pr(e, t, "monthsShort")
    }

    function zn(e, t, r) {
        return Ht(e, t, r, "weekdays")
    }

    function Vn(e, t, r) {
        return Ht(e, t, r, "weekdaysShort")
    }

    function Gn(e, t, r) {
        return Ht(e, t, r, "weekdaysMin")
    }
    De("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10,
                r = F(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + r
        }
    }), n.lang = I("moment.lang is deprecated. Use moment.locale instead.", De), n.langData = I("moment.langData is deprecated. Use moment.localeData instead.", ve);
    var we = Math.abs;

    function qn() {
        var e = this._data;
        return this._milliseconds = we(this._milliseconds), this._days = we(this._days), this._months = we(this._months), e.milliseconds = we(e.milliseconds), e.seconds = we(e.seconds), e.minutes = we(e.minutes), e.hours = we(e.hours), e.months = we(e.months), e.years = we(e.years), this
    }

    function Cr(e, t, r, a) {
        var s = ce(t, r);
        return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
    }

    function Bn(e, t) {
        return Cr(this, e, t, 1)
    }

    function Zn(e, t) {
        return Cr(this, e, t, -1)
    }

    function Er(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function Jn() {
        var e = this._milliseconds,
            t = this._days,
            r = this._months,
            a = this._data,
            s, l, u, v, T;
        return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Er(Qt(r) + t) * 864e5, t = 0, r = 0), a.milliseconds = e % 1e3, s = le(e / 1e3), a.seconds = s % 60, l = le(s / 60), a.minutes = l % 60, u = le(l / 60), a.hours = u % 24, t += le(u / 24), T = le(jr(t)), r += T, t -= Er(Qt(T)), v = le(r / 12), r %= 12, a.days = t, a.months = r, a.years = v, this
    }

    function jr(e) {
        return e * 4800 / 146097
    }

    function Qt(e) {
        return e * 146097 / 4800
    }

    function Kn(e) {
        if (!this.isValid()) return NaN;
        var t, r, a = this._milliseconds;
        if (e = oe(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + a / 864e5, r = this._months + jr(t), e) {
            case "month":
                return r;
            case "quarter":
                return r / 3;
            case "year":
                return r / 12
        } else switch (t = this._days + Math.round(Qt(this._months)), e) {
            case "week":
                return t / 7 + a / 6048e5;
            case "day":
                return t + a / 864e5;
            case "hour":
                return t * 24 + a / 36e5;
            case "minute":
                return t * 1440 + a / 6e4;
            case "second":
                return t * 86400 + a / 1e3;
            case "millisecond":
                return Math.floor(t * 864e5) + a;
            default:
                throw new Error("Unknown unit " + e)
        }
    }

    function be(e) {
        return function() {
            return this.as(e)
        }
    }
    var Nr = be("ms"),
        Xn = be("s"),
        ei = be("m"),
        ti = be("h"),
        ri = be("d"),
        ai = be("w"),
        si = be("M"),
        ni = be("Q"),
        ii = be("y"),
        oi = Nr;

    function li() {
        return ce(this)
    }

    function ui(e) {
        return e = oe(e), this.isValid() ? this[e + "s"]() : NaN
    }

    function Pe(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var di = Pe("milliseconds"),
        fi = Pe("seconds"),
        ci = Pe("minutes"),
        hi = Pe("hours"),
        mi = Pe("days"),
        pi = Pe("months"),
        yi = Pe("years");

    function _i() {
        return le(this.days() / 7)
    }
    var ke = Math.round,
        Ue = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };

    function gi(e, t, r, a, s) {
        return s.relativeTime(t || 1, !!r, e, a)
    }

    function vi(e, t, r, a) {
        var s = ce(e).abs(),
            l = ke(s.as("s")),
            u = ke(s.as("m")),
            v = ke(s.as("h")),
            T = ke(s.as("d")),
            C = ke(s.as("M")),
            ee = ke(s.as("w")),
            Se = ke(s.as("y")),
            xe = l <= r.ss && ["s", l] || l < r.s && ["ss", l] || u <= 1 && ["m"] || u < r.m && ["mm", u] || v <= 1 && ["h"] || v < r.h && ["hh", v] || T <= 1 && ["d"] || T < r.d && ["dd", T];
        return r.w != null && (xe = xe || ee <= 1 && ["w"] || ee < r.w && ["ww", ee]), xe = xe || C <= 1 && ["M"] || C < r.M && ["MM", C] || Se <= 1 && ["y"] || ["yy", Se], xe[2] = t, xe[3] = +e > 0, xe[4] = a, gi.apply(null, xe)
    }

    function wi(e) {
        return e === void 0 ? ke : typeof e == "function" ? (ke = e, !0) : !1
    }

    function bi(e, t) {
        return Ue[e] === void 0 ? !1 : t === void 0 ? Ue[e] : (Ue[e] = t, e === "s" && (Ue.ss = t - 1), !0)
    }

    function ki(e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var r = !1,
            a = Ue,
            s, l;
        return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (a = Object.assign({}, Ue, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), s = this.localeData(), l = vi(this, !r, a, s), r && (l = s.pastFuture(+this, l)), s.postformat(l)
    }
    var zt = Math.abs;

    function $e(e) {
        return (e > 0) - (e < 0) || +e
    }

    function bt() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = zt(this._milliseconds) / 1e3,
            t = zt(this._days),
            r = zt(this._months),
            a, s, l, u, v = this.asSeconds(),
            T, C, ee, Se;
        return v ? (a = le(e / 60), s = le(a / 60), e %= 60, a %= 60, l = le(r / 12), r %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", T = v < 0 ? "-" : "", C = $e(this._months) !== $e(v) ? "-" : "", ee = $e(this._days) !== $e(v) ? "-" : "", Se = $e(this._milliseconds) !== $e(v) ? "-" : "", T + "P" + (l ? C + l + "Y" : "") + (r ? C + r + "M" : "") + (t ? ee + t + "D" : "") + (s || a || e ? "T" : "") + (s ? Se + s + "H" : "") + (a ? Se + a + "M" : "") + (e ? Se + u + "S" : "")) : "P0D"
    }
    var j = mt.prototype;
    j.isValid = ms, j.abs = qn, j.add = Bn, j.subtract = Zn, j.as = Kn, j.asMilliseconds = Nr, j.asSeconds = Xn, j.asMinutes = ei, j.asHours = ti, j.asDays = ri, j.asWeeks = ai, j.asMonths = si, j.asQuarters = ni, j.asYears = ii, j.valueOf = oi, j._bubble = Jn, j.clone = li, j.get = ui, j.milliseconds = di, j.seconds = fi, j.minutes = ci, j.hours = hi, j.days = mi, j.weeks = _i, j.months = pi, j.years = yi, j.humanize = ki, j.toISOString = bt, j.toString = bt, j.toJSON = bt, j.locale = br, j.localeData = Sr, j.toIsoString = I("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", bt), j.lang = kr, k("X", 0, 0, "unix"), k("x", 0, 0, "valueOf"), w("x", ot), w("X", $r), W("X", function(e, t, r) {
        r._d = new Date(parseFloat(e) * 1e3)
    }), W("x", function(e, t, r) {
        r._d = new Date(F(e))
    }); //! moment.js
    return n.version = "2.30.1", o(U), n.fn = h, n.min = ds, n.max = fs, n.now = cs, n.utc = Q, n.unix = Un, n.months = Hn, n.isDate = P, n.locale = De, n.invalid = Ee, n.duration = ce, n.isMoment = Z, n.weekdays = zn, n.parseZone = $n, n.localeData = ve, n.isDuration = pt, n.monthsShort = Qn, n.weekdaysMin = Gn, n.defineLocale = Ct, n.updateLocale = Ua, n.locales = $a, n.weekdaysShort = Vn, n.normalizeUnits = oe, n.relativeTimeRounding = wi, n.relativeTimeThreshold = bi, n.calendarFormat = Ws, n.prototype = h, n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, n
})), (function(i, n) {
    typeof exports == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : (i = i || self, i.Mustache = n())
})(this, (function() {
    "use strict";
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    var i = Object.prototype.toString,
        n = Array.isArray || function(c) {
            return i.call(c) === "[object Array]"
        };

    function o(b) {
        return typeof b == "function"
    }

    function f(b) {
        return n(b) ? "array" : typeof b
    }

    function p(b) {
        return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function m(b, c) {
        return b != null && typeof b == "object" && c in b
    }

    function d(b, c) {
        return b != null && typeof b != "object" && b.hasOwnProperty && b.hasOwnProperty(c)
    }
    var y = RegExp.prototype.test;

    function M(b, c) {
        return y.call(b, c)
    }
    var P = /\S/;

    function R(b) {
        return !M(P, b)
    }
    var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };

    function Q(b) {
        return String(b).replace(/[&<>"'`=\/]/g, function(_) {
            return L[_]
        })
    }
    var ie = /\s*/,
        x = /\s+/,
        Ce = /\s*=/,
        He = /\s*\}/,
        Ee = /#|\^|\/|>|\{|&|=|!/;

    function rt(b, c) {
        if (!b) return [];
        var _ = !1,
            g = [],
            S = [],
            D = [],
            Y = !1,
            E = !1,
            O = "",
            z = 0;

        function q() {
            if (Y && !E)
                for (; D.length;) delete S[D.pop()];
            else D = [];
            Y = !1, E = !1
        }
        var ae, te, k;

        function at(de) {
            if (typeof de == "string" && (de = de.split(x, 2)), !n(de) || de.length !== 2) throw new Error("Invalid tags: " + de);
            ae = new RegExp(p(de[0]) + "\\s*"), te = new RegExp("\\s*" + p(de[1])), k = new RegExp("\\s*" + p("}" + de[1]))
        }
        at(c || I.tags);
        for (var G = new ue(b), se, K, re, Ye, je, me; !G.eos();) {
            if (se = G.pos, re = G.scanUntil(ae), re)
                for (var Ve = 0, kt = re.length; Ve < kt; ++Ve) Ye = re.charAt(Ve), R(Ye) ? (D.push(S.length), O += Ye) : (E = !0, _ = !0, O += " "), S.push(["text", Ye, se, se + 1]), se += 1, Ye === `
` && (q(), O = "", z = 0, _ = !1);
            if (!G.scan(ae)) break;
            if (Y = !0, K = G.scan(Ee) || "name", G.scan(ie), K === "=" ? (re = G.scanUntil(Ce), G.scan(Ce), G.scanUntil(te)) : K === "{" ? (re = G.scanUntil(k), G.scan(He), G.scanUntil(te), K = "&") : re = G.scanUntil(te), !G.scan(te)) throw new Error("Unclosed tag at " + G.pos);
            if (K == ">" ? je = [K, re, se, G.pos, O, z, _] : je = [K, re, se, G.pos], z++, S.push(je), K === "#" || K === "^") g.push(je);
            else if (K === "/") {
                if (me = g.pop(), !me) throw new Error('Unopened section "' + re + '" at ' + se);
                if (me[1] !== re) throw new Error('Unclosed section "' + me[1] + '" at ' + se)
            } else K === "name" || K === "{" || K === "&" ? E = !0 : K === "=" && at(re)
        }
        if (q(), me = g.pop(), me) throw new Error('Unclosed section "' + me[1] + '" at ' + G.pos);
        return ze(Qe(S))
    }

    function Qe(b) {
        for (var c = [], _, g, S = 0, D = b.length; S < D; ++S) _ = b[S], _ && (_[0] === "text" && g && g[0] === "text" ? (g[1] += _[1], g[3] = _[3]) : (c.push(_), g = _));
        return c
    }

    function ze(b) {
        for (var c = [], _ = c, g = [], S, D, Y = 0, E = b.length; Y < E; ++Y) switch (S = b[Y], S[0]) {
            case "#":
            case "^":
                _.push(S), g.push(S), _ = S[4] = [];
                break;
            case "/":
                D = g.pop(), D[5] = S[2], _ = g.length > 0 ? g[g.length - 1][4] : c;
                break;
            default:
                _.push(S)
        }
        return c
    }

    function ue(b) {
        this.string = b, this.tail = b, this.pos = 0
    }
    ue.prototype.eos = function() {
        return this.tail === ""
    }, ue.prototype.scan = function(c) {
        var _ = this.tail.match(c);
        if (!_ || _.index !== 0) return "";
        var g = _[0];
        return this.tail = this.tail.substring(g.length), this.pos += g.length, g
    }, ue.prototype.scanUntil = function(c) {
        var _ = this.tail.search(c),
            g;
        switch (_) {
            case -1:
                g = this.tail, this.tail = "";
                break;
            case 0:
                g = "";
                break;
            default:
                g = this.tail.substring(0, _), this.tail = this.tail.substring(_)
        }
        return this.pos += g.length, g
    };

    function Z(b, c) {
        this.view = b, this.cache = {
            ".": this.view
        }, this.parent = c
    }
    Z.prototype.push = function(c) {
        return new Z(c, this)
    }, Z.prototype.lookup = function(c) {
        var _ = this.cache,
            g;
        if (_.hasOwnProperty(c)) g = _[c];
        else {
            for (var S = this, D, Y, E, O = !1; S;) {
                if (c.indexOf(".") > 0)
                    for (D = S.view, Y = c.split("."), E = 0; D != null && E < Y.length;) E === Y.length - 1 && (O = m(D, Y[E]) || d(D, Y[E])), D = D[Y[E++]];
                else D = S.view[c], O = m(S.view, c);
                if (O) {
                    g = D;
                    break
                }
                S = S.parent
            }
            _[c] = g
        }
        return o(g) && (g = g.call(this.view)), g
    };

    function J() {
        this.templateCache = {
            _cache: {},
            set: function(c, _) {
                this._cache[c] = _
            },
            get: function(c) {
                return this._cache[c]
            },
            clear: function() {
                this._cache = {}
            }
        }
    }
    J.prototype.clearCache = function() {
        typeof this.templateCache < "u" && this.templateCache.clear()
    }, J.prototype.parse = function(c, _) {
        var g = this.templateCache,
            S = c + ":" + (_ || I.tags).join(":"),
            D = typeof g < "u",
            Y = D ? g.get(S) : void 0;
        return Y == null && (Y = rt(c, _), D && g.set(S, Y)), Y
    }, J.prototype.render = function(c, _, g, S) {
        var D = this.getConfigTags(S),
            Y = this.parse(c, D),
            E = _ instanceof Z ? _ : new Z(_, void 0);
        return this.renderTokens(Y, E, g, c, S)
    }, J.prototype.renderTokens = function(c, _, g, S, D) {
        for (var Y = "", E, O, z, q = 0, ae = c.length; q < ae; ++q) z = void 0, E = c[q], O = E[0], O === "#" ? z = this.renderSection(E, _, g, S, D) : O === "^" ? z = this.renderInverted(E, _, g, S, D) : O === ">" ? z = this.renderPartial(E, _, g, D) : O === "&" ? z = this.unescapedValue(E, _) : O === "name" ? z = this.escapedValue(E, _, D) : O === "text" && (z = this.rawValue(E)), z !== void 0 && (Y += z);
        return Y
    }, J.prototype.renderSection = function(c, _, g, S, D) {
        var Y = this,
            E = "",
            O = _.lookup(c[1]);

        function z(te) {
            return Y.render(te, _, g, D)
        }
        if (O) {
            if (n(O))
                for (var q = 0, ae = O.length; q < ae; ++q) E += this.renderTokens(c[4], _.push(O[q]), g, S, D);
            else if (typeof O == "object" || typeof O == "string" || typeof O == "number") E += this.renderTokens(c[4], _.push(O), g, S, D);
            else if (o(O)) {
                if (typeof S != "string") throw new Error("Cannot use higher-order sections without the original template");
                O = O.call(_.view, S.slice(c[3], c[5]), z), O != null && (E += O)
            } else E += this.renderTokens(c[4], _, g, S, D);
            return E
        }
    }, J.prototype.renderInverted = function(c, _, g, S, D) {
        var Y = _.lookup(c[1]);
        if (!Y || n(Y) && Y.length === 0) return this.renderTokens(c[4], _, g, S, D)
    }, J.prototype.indentPartial = function(c, _, g) {
        for (var S = _.replace(/[^ \t]/g, ""), D = c.split(`
`), Y = 0; Y < D.length; Y++) D[Y].length && (Y > 0 || !g) && (D[Y] = S + D[Y]);
        return D.join(`
`)
    }, J.prototype.renderPartial = function(c, _, g, S) {
        if (g) {
            var D = this.getConfigTags(S),
                Y = o(g) ? g(c[1]) : g[c[1]];
            if (Y != null) {
                var E = c[6],
                    O = c[5],
                    z = c[4],
                    q = Y;
                O == 0 && z && (q = this.indentPartial(Y, z, E));
                var ae = this.parse(q, D);
                return this.renderTokens(ae, _, g, q, S)
            }
        }
    }, J.prototype.unescapedValue = function(c, _) {
        var g = _.lookup(c[1]);
        if (g != null) return g
    }, J.prototype.escapedValue = function(c, _, g) {
        var S = this.getConfigEscape(g) || I.escape,
            D = _.lookup(c[1]);
        if (D != null) return typeof D == "number" && S === I.escape ? String(D) : S(D)
    }, J.prototype.rawValue = function(c) {
        return c[1]
    }, J.prototype.getConfigTags = function(c) {
        return n(c) ? c : c && typeof c == "object" ? c.tags : void 0
    }, J.prototype.getConfigEscape = function(c) {
        if (c && typeof c == "object" && !n(c)) return c.escape
    };
    var I = {
            name: "mustache.js",
            version: "4.2.0",
            tags: ["{{", "}}"],
            clearCache: void 0,
            escape: void 0,
            parse: void 0,
            render: void 0,
            Scanner: void 0,
            Context: void 0,
            Writer: void 0,
            set templateCache(b) {
                Me.templateCache = b
            },
            get templateCache() {
                return Me.templateCache
            }
        },
        Me = new J;
    return I.clearCache = function() {
        return Me.clearCache()
    }, I.parse = function(c, _) {
        return Me.parse(c, _)
    }, I.render = function(c, _, g, S) {
        if (typeof c != "string") throw new TypeError('Invalid template! Template should be a "string" but "' + f(c) + '" was given as the first argument for mustache#render(template, view, partials)');
        return Me.render(c, _, g, S)
    }, I.escape = Q, I.Scanner = ue, I.Context = Z, I.Writer = J, I
}));
var $tablist = $(".nav-tabs, .nav-pills"),
    $lis = $tablist.children("li"),
    $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]');
$tabs && ($tablist.attr("role", "tablist"), $lis.attr("role", "presentation"), $tabs.attr("role", "tab")), $tabs.each(function(i) {
    var n = $($(this).attr("href")),
        o = $(this),
        f = o.attr("id") || uniqueId("ui-tab");
    o.attr("id", f), o.parent().hasClass("active") ? (o.attr({
        tabIndex: "0",
        "aria-selected": "true",
        "aria-controls": o.attr("href").substr(1)
    }), n.attr({
        role: "tabpanel",
        tabIndex: "0",
        "aria-hidden": "false",
        "aria-labelledby": f
    })) : (o.attr({
        tabIndex: "-1",
        "aria-selected": "false",
        "aria-controls": o.attr("href").substr(1)
    }), n.attr({
        role: "tabpanel",
        tabIndex: "-1",
        "aria-hidden": "true",
        "aria-labelledby": f
    }))
}), $.fn.tab.Constructor.prototype.keydown = function(i) {
    var n = $(this),
        o, f = n.closest("ul[role=tablist] "),
        p, m = i.which || i.keyCode;
    if (n = $(this), !!/(37|38|39|40)/.test(m)) {
        o = f.find("[role=tab]:visible"), p = o.index(o.filter(":focus")), (m == 38 || m == 37) && p--, (m == 39 || m == 40) && p++, p < 0 && (p = o.length - 1), p == o.length && (p = 0);
        var d = o.eq(p);
        d.attr("role") === "tab" && d.tab("show").focus(), i.preventDefault(), i.stopPropagation()
    }
}, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
var tabactivate = $.fn.tab.Constructor.prototype.activate;
$.fn.tab.Constructor.prototype.activate = function(i, n, o) {
    var f = n.find("> .active");
    f.find("[data-toggle=tab], [data-toggle=pill]").attr({
        tabIndex: "-1",
        "aria-selected": !1
    }), f.filter(".tab-pane").attr({
        "aria-hidden": !0,
        tabIndex: "-1"
    }), tabactivate.apply(this, arguments), i.addClass("active"), i.find("[data-toggle=tab], [data-toggle=pill]").attr({
        tabIndex: "0",
        "aria-selected": !0
    }), i.filter(".tab-pane").attr({
        "aria-hidden": !1,
        tabIndex: "0"
    })
};
var springSpace = {
        timeFormat: "h:mma",
        dateFormat: "dddd MMM Do",
        dateShortFormat: "ddd MMM Do YYYY",
        locale: "en-us",
        language: "en",
        currency: "USD",
        defaultTimeFormat: "h:mm A",
        nativeTimeFormat: "HH:mm",
        phpDateFormat: "YYYY-MM-DD",
        phpTimeFormat: "HH:mm",
        phpDateTimeFormat: "YYYY-MM-DD HH:mm",
        googleDateFormat: "YYYY/MM/DD",
        smallScreenSize: 480,
        modalSizeSmall: "s-lc-modal-small",
        modalSizeMedium: "s-lc-modal-medium",
        modalSizeLarge: "s-lc-modal-large",
        successLong: 5e3,
        fadeOutDuration: 3e3,
        nbspRegex: new RegExp("\xA0", "g"),
        getDateTimeFormat: function() {
            return this.timeFormat + " " + this.dateFormat
        },
        getShortDateTimeFormat: function() {
            return this.timeFormat + " " + this.dateShortFormat
        },
        formatNumber: function(i, n) {
            let o = {
                style: "currency",
                currency: this.currency,
                currencyDisplay: "code"
            };
            return n === !1 && (o.minimumFractionDigits = 0, o.maximumFractionDigits = 0), Number(i).toLocaleString(this.locale, o).replace(this.nbspRegex, "").replace(this.currency, "")
        },
        formatCurrency: function(i) {
            let n = {
                style: "currency",
                currency: this.currency
            };
            return Number(i).toLocaleString(this.locale, n)
        },
        formatDateTimePair: function(i, n) {
            var o = springSpace.getDateTimeFormat();
            return i.isSame(n, "day") ? i.format(springSpace.timeFormat) + " - " + n.format(o) : i.format(o) + " - " + n.format(o)
        },
        formatDateTime: function(i, n) {
            n = typeof n < "u" ? n : null;
            var o = moment(i);
            return o.isValid() ? o.format(this.getDateTimeFormat()) : n
        },
        formatTime: function(i, n) {
            n = typeof n < "u" ? n : null;
            var o = new moment().format(springSpace.phpDateFormat),
                f = moment(o + " " + i);
            return f.isValid() ? f.format(springSpace.timeFormat) : n
        },
        formatDate: function(i, n) {
            var o = moment(i);
            return o.isValid() ? o.format(this.dateFormat) : typeof n < "u" ? n : null
        },
        createDateTimeMoment: function(i, n) {
            (typeof n > "u" || n === "") && (n = moment().startOf("day").format(springSpace.timeFormat));
            var o = i + " " + n,
                f = springSpace.dateFormat + " " + springSpace.timeFormat;
            return moment(o, f)
        },
        createLocalMomentFromUtcDate: function(i) {
            return moment.utc(i).tz(springSpace.timezone)
        },
        setupLanguage: function() {
            moment.locale(springSpace.locale), setupDatePickerLanguage()
        }
    },
    springSpace = springSpace || {};
springSpace.cookieConsent = springSpace.cookieConsent || {}, springSpace.cookieConsent.alert = function(i) {
    this.setConfig = function(n) {
        typeof n > "u" && (n = {});
        var o = n.okay ? n.okay : "OK";
        this.placement_opts = ["bottom", "top"], this.placement = this.placement_opts.indexOf(n.placement) !== -1 ? n.placement : "bottom", this.cookie_name = "springy_cookie_consent", this.cookie_notice_accepted = "ok", this.cookie_exp_days = n.cookie_exp_days ? n.cookie_exp_days : 180, this.read_more_callback = n.read_more_callback ? n.read_more_callback : function() {}, this.aria_label = n.aria_label || "User Privacy Alert", this.fade_in = 500, this.fade_out = 200, this.container_id = "s-ui-cc-container", this.close_button_id = "s-ui-cc-close-btn", this.read_more_elt_id = "s-ui-cc-read-more-link", this.consent_message = n.consent_message ? n.consent_message : "By using our website you are consenting to our use of cookies in accordance with our cookie policy.", this.content = '<div id="' + this.container_id + '" class="container" style="display: none;">    <aside class="navbar navbar-default navbar-fixed-' + this.placement + " fixed-" + this.placement + '" id="s-ui-cc-navbar" aria-label="' + this.aria_label + '">        <div id="s-ui-cc-main" class="container">            <div class="navbar-inner navbar-content-center" id="s-ui-cc-msg-container">                <div id="s-ui-cc-msg">' + this.consent_message + '<button id="' + this.close_button_id + '" type="button" class="btn btn-sm btn-default btn-light" data-dismiss="alert">' + o + "</button></div>            </div>        </div>    </aside></div>"
    }, this.consentCookieAccepted = function() {
        var n = this.getCookie(this.cookie_name);
        return n === this.cookie_notice_accepted
    }, this.setCookie = function(n, o, f) {
        var p = new Date;
        p.setDate(p.getDate() + f);
        var m = encodeURI(o) + (f === null ? "" : "; expires=" + p.toUTCString()),
            d = location.protocol === "https:" ? "; secure" : "";
        document.cookie = n + "=" + m + "; path=/; samesite=lax;" + d, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(n) {
        var o, f, p, m, d = document.cookie.split(";");
        for (o = 0; o < d.length; o++)
            if (f = d[o].indexOf("="), p = d[o].substr(0, f).replace(/^\s+|\s+$/g, ""), p === n) return m = d[o].substr(f + 1), decodeURI(m);
        return null
    }, this.handleClose = function() {
        this.setCookie(this.cookie_name, this.cookie_notice_accepted, this.cookie_exp_days), jQuery("#" + this.container_id).fadeOut(this.fade_out)
    }, this.handleAlert = function() {
        this.consentCookieAccepted() || (jQuery("body").prepend(this.content), jQuery("#" + this.container_id).fadeIn(this.fade_in), jQuery("#" + this.close_button_id).on("click", this.handleClose.bind(this)), jQuery("#" + this.read_more_elt_id).attr("href", "#"), jQuery("#" + this.read_more_elt_id).on("click", this.read_more_callback.bind(this)))
    }, this.setConfig(i), jQuery(document).ready(this.handleAlert.bind(this))
};
var springSpace = springSpace || {};
springSpace.sui = springSpace.sui || {}, springSpace.sui.filedrop = function(i) {
    if (typeof i > "u" || !i.selector || i.selector === "") return !1;
    let n = {
        max_file_size: "Maximum file size",
        invalidExtension: "File is not an allowed file type: "
    };
    if (this.callback = i.callback ? i.callback : function() {}, this.error_callback = i.error_callback ? i.error_callback : function() {}, this.validate = i.validate ? i.validate : function() {
            return !0
        }, this.max_files = i.max_files ? parseInt(i.max_files, 10) : 0, this.max_upload_size = i.max_upload_size ? parseInt(i.max_upload_size, 10) : 0, this.max_file_size = i.max_file_size ? parseInt(i.max_file_size, 10) : 0, this.batch_files = typeof i.batch_files < "u" ? !!i.batch_files : !1, this.autoupload = typeof i.autoupload < "u" ? !!i.autoupload : !0, this.translations = i.translations ? Object.assign(n, i.translations) : n, this.allowedMimeTypes = i.allowedMimeTypes ? i.allowedMimeTypes : [], this.allowedFileExtensions = i.allowedFileExtensions ? i.allowedFileExtensions : [], this.isAdvancedUpload = (function() {
            var d = document.createElement("div");
            return ("draggable" in d || "ondragstart" in d && "ondrop" in d) && "FormData" in window && "FileReader" in window
        })(), this.$form = jQuery(i.selector), this.$form.length === 0) return !1;
    this.$droparea = this.$form.find(".s-ui-filedrop"), this.droppedFiles = [], this.batchedFiles = [], this.batch = {
        current: 0,
        total: 0
    };
    var o = this;
    if (this.$input = this.$droparea.find('input[type="file"]'), this.$label = this.$droparea.find("label"), this.$submitbutton = this.$form.find('button[type="submit"]'), this.$progress = null, this.showFiles = function() {
            if (this.$input.length !== 0) {
                var d = this.$droparea[0].querySelector(".s-ui-filedrop-filenames"),
                    y = d.querySelector("ul");
                if (this.isAdvancedUpload) {
                    var M = [],
                        P = 0;
                    this.droppedFiles.forEach(function(L) {
                        var Q = document.createElement("li");
                        Q.innerText = L.name, M.push(Q), P += L.size
                    }), y.innerHTML = "", M.length === 0 ? d.classList.add("hidden") : (d.classList.remove("hidden"), M.forEach(function(L) {
                        y.appendChild(L)
                    })), this.max_files > 0 && M.length > this.max_files && this.showError(o.max_files + " file uploads maximum."), this.batch_files === !1 && this.max_upload_size > 0 && P > this.max_upload_size && this.showError("Files total " + o.bytesToMB(P) + " MB which exceeds the maximum of " + o.bytesToMB(this.max_upload_size) + " MB at a time.")
                } else {
                    if (this.$input.val() === "") {
                        d.classList.add("hidden"), y.innerHTML = "";
                        return
                    }
                    d.classList.remove("hidden");
                    var R = document.createElement("li");
                    R.innerText = this.$input.val().split("\\").slice(-1).pop(), y.appendChild(R), this.$label.find(".filetext").addClass("hidden")
                }
            }
        }, this.reset = function() {
            o.$form[0].reset(), o.removeError(), o.droppedFiles = [], o.batch.current = 0, o.batch.total = 0, o.stopProgress(), o.showFiles(), o.$input.removeClass("has-focus")
        }, this.clearFiles = function() {
            o.resetFileInput(), o.droppedFiles = [], o.batch.current = 0, o.batch.total = 0, o.showFiles()
        }, this.resetFileInput = function() {
            if (this.$input.length !== 0) {
                var d = jQuery("<form>"),
                    y = this.$input.clone(!0).appendTo(d);
                d[0].reset(), this.$input.replaceWith(y), this.$input = y
            }
        }, this.showError = function(d) {
            if (this.$droparea.length !== 0) {
                var y = document.createElement("p");
                if (y.innerText = d, this.$form.find("div.s-ui-filedrop-error").length > 0) {
                    this.$form.find("div.s-ui-filedrop-error").append(y);
                    return
                }
                var M = document.createElement("div");
                M.classList.add("alert"), M.classList.add("alert-danger"), M.classList.add("s-ui-filedrop-error"), M.setAttribute("role", "alert"), M.appendChild(y), this.$droparea.prepend(M)
            }
        }, this.removeError = function() {
            this.$form.find("div.s-ui-filedrop-error").empty()
        }, this.countFiles = function() {
            return this.$input.length === 0 ? 0 : this.isAdvancedUpload ? this.droppedFiles.length : this.$input.val() !== "" ? 1 : 0
        }, this.startProgress = function() {
            if (this.$progress === null || this.$progress.length === 1 && this.$progress.html() === "") {
                var d = !0;
                this.$progress = this.$form.find("div.s-ui-filedrop-progress"), this.$progress.length === 0 && (d = !1, this.$progress = jQuery("<div></div>").addClass("s-ui-filedrop-progress"));
                var y = jQuery("<div></div>").attr({
                        id: "s-ui-filedrop-progresslabel"
                    }).text("Uploading files"),
                    M = jQuery("<div></div>").addClass("s-ui-filedrop-progbar").attr({
                        role: "progressbar",
                        "aria-valuenow": "0",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-labelledby": "s-ui-filedrop-progresslabel"
                    });
                M.append(document.createElement("span")), this.$progress.append([y, M]), d || this.$droparea.prepend(this.$progress)
            }
        }, this.updateProgress = function(d, y) {
            var M = Math.round(d / y * 100);
            if (this.$progress.find("span:first").css("width", M + "%"), this.$progress.find(".s-ui-filedrop-progbar").attr("aria-valuenow", M), this.batch.total > 1 && M < 50) {
                var P = this.$progress.find("div:first");
                P.html("Uploading file batch (" + this.batch.current + "/" + this.batch.total + ")")
            }
        }, this.stopProgress = function() {
            this.$progress !== null && this.$progress.empty()
        }, this.bytesToMB = function(d) {
            return (parseInt(d, 10) / (1024 * 1024)).toFixed(1)
        }, this.addFiles = function(d) {
            if (o.max_files > 0 && o.countFiles() + d.length > o.max_files) return o.showError(o.max_files + " file uploads maximum."), !1;
            var y = 0;
            o.droppedFiles.forEach(function(ie) {
                y += ie.size
            });
            for (var M = [], P = 0; P < d.length; P++) {
                var R = d[P];
                if (o.droppedFiles.length > 0) {
                    var L = !1;
                    if (o.droppedFiles.forEach(function(ie) {
                            ie.name === R.name && (L = !0)
                        }), L) {
                        M.push(P);
                        continue
                    }
                }
                if (this.allowedFileExtensions.length > 0) {
                    let ie = R.name.split(".").pop().toLowerCase();
                    if (this.allowedFileExtensions.indexOf(ie) === -1) {
                        o.showError(this.translations.invalidExtension + R.name), M.push(P);
                        continue
                    }
                }
                if (this.allowedMimeTypes.length > 0 && this.allowedMimeTypes.indexOf(R.type) === -1) {
                    o.showError("File: " + R.name + " is not an allowed file type."), M.push(P);
                    continue
                }
                o.max_file_size > 0 && R.size > o.max_file_size ? (o.showError("File: " + R.name + " is greater than allowed file size of " + o.bytesToMB(o.max_file_size) + " MB."), M.push(P)) : o.batch_files === !1 && y + R.size > o.max_upload_size ? (o.showError("File: " + R.name + " causes files to go over maximum upload size of " + o.bytesToMB(o.max_upload_size) + " MB at a time."), M.push(P)) : y += R.size
            }
            if (o.batch_files === !1 && o.max_upload_size > 0 && y > o.max_upload_size) return o.showError("Files total " + y + " bytes which exceeds the maximum of " + o.bytesToMB(o.max_upload_size) + " MB at a time."), !1;
            for (var Q = 0; Q < d.length; Q++) M.indexOf(Q) === -1 && o.droppedFiles.push(d[Q]);
            return o.droppedFiles.length !== 0
        }, this.batchFiles = function() {
            var d = [],
                y = [];
            if (!this.batch_files) return d.push(this.droppedFiles), d;
            var M = 1;
            return d.push([]), y.push(0), this.droppedFiles.forEach(function(P) {
                var R = !1;
                if (y.forEach(function(Q, ie) {
                        !R && Q + P.size < o.max_upload_size && (y[ie] = Q + P.size, d[ie].push(P), R = !0)
                    }), !R) {
                    y.push(0), M++, d.push([]);
                    var L = M - 1;
                    y[L] = P.size, d[L].push(P)
                }
            }), d
        }, this.isLastBatch = function() {
            return this.batch.current >= this.batch.total
        }, this.ajaxUpload = function() {
            o.$form.find('input[name="batch_current"]').val(o.batch.current);
            var d = new FormData(o.$form[0]);
            typeof d.delete == "function" && d.delete(o.$input.attr("name")), o.batchedFiles[o.batch.current - 1].forEach(function(y) {
                d.append(o.$input.attr("name"), y)
            }), jQuery.ajax({
                url: o.$form.attr("action"),
                type: o.$form.attr("method"),
                data: d,
                dataType: "json",
                cache: !1,
                crossDomain: !0,
                contentType: !1,
                processData: !1,
                beforeSend: function() {
                    o.countFiles() > 0 && o.startProgress()
                },
                complete: function() {
                    o.isLastBatch() ? (o.$form.removeClass("is-uploading"), o.$submitbutton.prop("disabled", !1), o.stopProgress()) : (o.batch.current++, o.ajaxUpload())
                },
                success: function(y) {
                    o.callback(y, o)
                },
                xhr: function() {
                    var y = jQuery.ajaxSettings.xhr();
                    return o.countFiles() > 0 && (y.upload.onprogress = function(M) {
                        o.updateProgress(M.loaded, M.total)
                    }), y
                }
            }).fail(function(y) {
                o.error_callback(y, o)
            })
        }, this.isAdvancedUpload && this.$input.length > 0) {
        if (this.$droparea.addClass("has-advanced-upload"), this.batch_files) {
            var f = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_current"
                }).val("0"),
                p = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_total"
                }).val("0");
            this.$form.prepend([f, p])
        }
        this.$droparea.on("drag dragstart dragend dragover dragenter dragleave drop", function(d) {
            d.preventDefault(), d.stopPropagation()
        }).on("dragover dragenter", function() {
            o.$droparea.addClass("is-dragover")
        }).on("dragleave dragend drop", function() {
            o.$droparea.removeClass("is-dragover")
        }).on("drop", function(d) {
            var y = o.addFiles(d.originalEvent.dataTransfer.files);
            o.showFiles(), y === !0 && o.autoupload && o.$form.submit()
        }).on("click", function(d) {
            var y = ["A", "I", "SPAN", "B", "STRONG", "BUTTON"],
                M = d.target.tagName;
            if (y.indexOf(M) !== -1) {
                var P = jQuery(d.target).closest("a, button");
                P.hasClass("s-ui-filedrop-clear") && (o.clearFiles(), o.removeError())
            }
        })
    }
    if (this.isAdvancedUpload || (this.$input.remove(), this.$droparea.remove()), this.$input.length > 0 && (this.$input.on("change", function(d) {
            if (d.target.files) {
                if (o.isAdvancedUpload) {
                    var y = o.addFiles(d.target.files);
                    o.resetFileInput(), y === !0 && o.autoupload && o.$form.submit()
                }
                o.$input.removeClass("has-focus"), o.showFiles()
            }
        }).on("focus", function(d) {
            d.target.classList.add("has-focus")
        }).on("blur", function(d) {
            d.target.classList.remove("has-focus")
        }), this.translations.max_file_size)) {
        var m = document.createElement("p");
        m.innerHTML = this.translations.max_file_size + ": " + this.bytesToMB(this.max_file_size) + " MB", this.$label.append(m)
    }
    this.$form.on("submit", function(d) {
        if (o.$form.hasClass("is-uploading")) {
            d.preventDefault();
            return
        }
        if (o.$form.removeClass("is-error"), o.removeError(), o.max_files > 0 && o.countFiles() > o.max_files) {
            o.showError(o.max_files + " file uploads maximum."), d.preventDefault();
            return
        }
        if (o.validate(o) === !1) {
            o.$form.addClass("is-error"), d.preventDefault();
            return
        }
        o.$form.addClass("is-uploading"), o.$submitbutton.prop("disabled", !0), o.isAdvancedUpload ? (d.preventDefault(), o.batch.current = 1, o.batchedFiles = o.batchFiles(), o.batch.total = o.batchedFiles.length, o.$form.find('input[name="batch_total"]').val(o.batch.total), o.ajaxUpload()) : (d.preventDefault(), jQuery.ajax({
            url: o.$form.attr("action"),
            type: o.$form.attr("method"),
            data: o.$form.serialize(),
            dataType: "json",
            complete: function() {
                o.$form.removeClass("is-uploading"), o.$submitbutton.prop("disabled", !1)
            },
            success: function(y) {
                o.callback(y, o)
            }
        }).fail(function(y) {
            o.error_callback(y, o)
        }))
    })
};

function disableButton(i, n) {
    typeof n > "u" && (n = ""), n == "" ? jQuery("#" + i).prop("disabled", !0) : jQuery("#" + i).html(n).prop("disabled", !0)
}

function enableButton(i, n) {
    typeof n > "u" && (n = ""), n == "" ? jQuery("#" + i).prop("disabled", !1) : jQuery("#" + i).html(n).prop("disabled", !1)
}

function ajaxDialog(i, n, o, f, p) {
    p = typeof p < "u" ? p : "Save", jQuery("#dialog").remove(), typeof f != "string" && (f = "");
    var m = "s-lc-ajax-modal";
    return jQuery('<div class="modal fade" id="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog ' + f + '"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button><h2 class="modal-title" id="myModalLabel">' + o + '</h2></div><div class="modal-body" id="' + m + '"></div><div class="modal-footer"><button type="button" id="modalbtn" class="btn btn-primary pull-left">' + p + '</button> <button type="button" id="modalbtnc" class="btn btn-default pull-left" data-dismiss="modal">Close</button></div></div></div></div>').appendTo("body"), jQuery("#" + m).load(i + "?" + n, function() {
        springyCommon.showModal(jQuery("#dialog"))
    }), !1
}

function ajaxModal(i, n) {
    return closeDialog(), workingAlert(), jQuery.ajax({
        url: i,
        type: "get",
        dataType: "html"
    }).always(stopAlert).done(function(o) {
        springyPublic.createModal(o, n)
    }).fail(ajaxErrorHandler), !1
}

function closeDialog(i) {
    return springyCommon.closeDialog(i)
}

function hit(i, n, o) {
    return jQuery.post("/recordhit.php?id=" + i + "&table=" + n + "&src=" + o, function() {}), !1
}

function loadBrowse(i, n) {
    return jQuery("#" + n + "-cont").html('<br/><p class="text-center"><i class="fa fa-spinner fa-spin fa-lg"></i></p>'), jQuery.get("/ajax/calendar/list/" + i + "?id=" + n, function(o) {
        jQuery("#" + n + "-cont").hide().html(o).fadeIn("fast")
    }), !1
}

function datePickerAccessibilityFix(i) {
    i.find(".datepicker-title").remove(), i.find("th.dow, th.next, th.prev, th.datepicker-switch").attr("scope", "col"), i.find("table").attr("aria-label", "Date Picker"), i.find("td.disabled").attr("aria-disabled", "true")
}

function addslashes(i) {
    return i.replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0")
}

function setupLanguageDropdown() {
    jQuery("#s-lc-language-selector").on("change", function() {
        window.location.href = window.location.origin + "/language/change?lang=" + jQuery(this).val() + "&url=" + encodeURIComponent(window.location.href)
    })
}
var springyPublic = {
    onTimezoneChangedFn: null,
    showTimezoneModal: function() {
        return ajaxModal("/timezone/list", 0)
    },
    createModal: function(i, n) {
        typeof n != "string" && (n = ""), jQuery("#dialog").remove();
        let o = jQuery('<div class="modal fade" id="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-describedby="myModalDescription"><div class="modal-dialog ' + n + '"><div class="modal-content s-lc-public-modal-content">' + i + "</div></div></div>").appendTo("body");
        return springyCommon.showModal(o), o
    },
    getFutureEventDates: function(i) {
        return jQuery("#future_" + i).html().trim().length > 0 || (jQuery("#future_loading_" + i).show(), jQuery.ajax({
            url: "/ajax/event/future/" + i,
            type: "get",
            dataType: "html"
        }).always(function() {
            jQuery("#future_loading_" + i).hide()
        }).done(function(n) {
            jQuery("#future_" + i).html(n).show()
        }).fail(ajaxErrorHandler)), !1
    },
    registerClearBackForwardCache: function() {
        window.addEventListener("unload", function() {})
    },
    goToSelectedUrl: function() {
        var i = jQuery(this).val();
        return window.location = i + "#s-lc-public-pt", !1
    },
    setSearchResultPageTitle: function(i) {
        var n = jQuery(i);
        n.length && (n.focus(), document.title = n.text().trim() + " - " + document.title)
    },
    customValidateTime: function(i, n, o) {
        const f = i.validity;
        if (i.setCustomValidity(""), f.rangeUnderflow) {
            let p = i.getAttribute("min");
            i.setCustomValidity(n.replace("%time%", springSpace.formatTime(p)))
        }
        if (f.rangeOverflow) {
            let p = i.getAttribute("max");
            i.setCustomValidity(o.replace("%time%", springSpace.formatTime(p)))
        }
        return !0
    }
};
jQuery(function() {
    springSpace.setupLanguage(), setupBrowserDefaults(), setupLanguageDropdown(), springyCommon.setupCustomRequiredValidation()
});

function getCurrentTimelineInstance(i) {
    return typeof timelineInstance < "u" ? timelineInstance : typeof timelineInFocus < "u" && timelineInFocus !== null ? timelineInFocus : timelineLocationMap[i]
}

function tgSetupDateManipulationVisuals() {
    springyDatepicker.setupBasic(".fc-goToDate-button", {
        startDate: new Date
    }), jQuery(".fc-goToNextAvailable-button").hide(), jQuery(".fc-button").prop("disabled", !0)
}

function tgSetupDateManipulationChangeHandler(i, n, o) {
    jQuery("#" + n).find(".fc-goToDate-button").on("changeDate", function() {
        var f = getCurrentTimelineInstance(o),
            p = springyDatepicker.getDate(this);
        springyFullCalendar.goToDate(f, p)
    }), i && jQuery(".fc-goToNextAvailable-button").on("click", function() {
        return timeGridOnClickGoToNextAvailable(jQuery(this), springyPage.locationId, springyPage.groupId, springyPage.itemId, !0)
    })
}

function timeGridOnClickGoToNextAvailable(i, n, o, f, p) {
    i.prop("disabled", !0);
    var m = jQuery("#s-lc-timegrid-loading");
    return m.show(), jQuery.ajax({
        type: "get",
        url: "/equipment/availability/nextdate",
        data: {
            lid: n,
            gid: o,
            eid: f,
            seatId: springyPage.seatId,
            zone: springyPage.zoneId,
            capacity: springyCommon.parseInt(jQuery("#capacity").val()),
            accessible: springyPage.isAccessible,
            powered: springyPage.isPowered,
            isEquipment: p,
            isSeatBooking: springyPage.isSeatBooking,
            pageIndex: springyPage.pageIndex,
            pageSize: springyPage.pageSize
        },
        dataType: "json"
    }).always(function() {
        i.prop("disabled", !1), m.hide()
    }).done(function(d) {
        var y = jQuery("#s-lc-timegrid-loading").length > 0;
        p || springySpaces.setPageIndex(d.page), getCurrentTimelineInstance(n).gotoDate(d.date), tgSetupDateManipulationVisuals(), y && springySpaces.createLoadingIndicator(), tgSetupDateManipulationChangeHandler(p, "eq-time-grid")
    }).fail(ajaxErrorHandler), !1
}

function getTimelineCustomButtons(i, n, o) {
    return {
        goToNextAvailable: {
            click: function() {
                return timeGridOnClickGoToNextAvailable(jQuery(this), i, n, o, !1)
            }
        },
        goToDate: {}
    }
}

function timelineLoading(i) {
    !i && springyPage.wantAlternatingBackground && timegridAlternateHeaderBackgrounds(), jQuery("#s-lc-timegrid-loading").toggle(i), jQuery(".fc-button").prop("disabled", i)
}

function getFixedSlotWidth() {
    return jQuery(window).width() < 768 ? 70 : null
}
$.fn.tooltip.Constructor.DEFAULTS.whiteList.dl = [], $.fn.tooltip.Constructor.DEFAULTS.whiteList.dt = [], $.fn.tooltip.Constructor.DEFAULTS.whiteList.dd = [], $.fn.tooltip.Constructor.DEFAULTS.whiteList.span = ["style"];

function errorAlert(i) {
    (typeof i > "u" || i.length === 0) && (i = typeof springyText > "u" ? "Error: Please try again." : springyText.messages.errorDefault), jQuery.notification(i, {
        className: "jquery-notification-error",
        duration: 1e4
    });
    var n = $("#jquery-notification");
    return n.attr("role", "alert"), n.attr("aria-live", "assertive"), !1
}

function successAlert(i, n) {
    (typeof i > "u" || i.length === 0) && (i = typeof springyText > "u" ? "Success." : springyText.messages.success), typeof n > "u" && (n = 2e3), jQuery.notification(i, {
        duration: n
    });
    var o = $("#jquery-notification");
    o.attr("role", "alert"), o.attr("aria-live", "assertive")
}

function workingAlert(i) {
    (typeof i > "u" || i == "") && (i = ' <i class="fa fa-spinner fa-pulse fa-4x"></i> '), jQuery.notification(i, {
        duration: 6e4
    })
}

function stopAlert() {
    jQuery("#jquery-notification").hide()
}

function getAccessibleLabel(i) {
    var n = i.find(".icon-label.sr-only").html() || "";
    return n.length > 0 ? n : i.attr("aria-label") || ""
}

function createAccessibleTooltip(i) {
    var n = getAccessibleLabel(i);
    n.length !== 0 && i.tooltip({
        title: n,
        html: !0,
        container: "body",
        trigger: "hover"
    })
}

function accessibleIcons() {
    jQuery("a > .fa").each(function(i, n) {
        var o = jQuery(n).parent("a");
        createAccessibleTooltip(o)
    }), jQuery("button > .fa").each(function(i, n) {
        var o = jQuery(n).parent("button");
        createAccessibleTooltip(o)
    }), jQuery('[data-toggle="tooltip"]').tooltip({
        trigger: "hover"
    }), jQuery('[data-toggle="popover"]').popover(), jQuery(".selectpicker").on("loaded.bs.select", function() {
        var i = jQuery(this),
            n = i.parent(),
            o = jQuery('label[for="' + i.attr("id") + '"]'),
            f = o.contents().not(o.children()).text().trim(),
            p = n.find(".inner").attr("id");
        n.append('<label class="sr-only" for="' + p + '">' + f + "</label>"), n.find('[role="combobox"]').each(function() {
            var m = jQuery(this),
                d = m.attr("aria-owns");
            m.attr("aria-controls", d)
        })
    })
}

function accessibleTables(i) {
    var n = jQuery(i);
    n.find("th, td").attr("tabindex", 0), n.find("th").attr("scope", "col"), n.find("tr").attr("scope", "row")
}

function timegridAlternateHeaderBackgrounds() {
    var i = jQuery(".fc-time-area.fc-widget-header .fc-content > table > tbody > tr").first()[0];
    if (i)
        for (var n = 0; n < i.children.length; n++) {
            var o = jQuery(i.children[n]),
                f = n % 2 === 1 ? "s-lc-eq-timegrid-even" : "s-lc-eq-timegrid-odd";
            o.addClass(f)
        }
}

function validateEmailAddress(i) {
    var n = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return n.test(i)
}

function escapeHtml(i) {
    var n = document.createElement("textarea");
    return n.textContent = i, n.innerHTML
}

function unEscapeHtml(i) {
    var n = document.createElement("textarea");
    return n.innerHTML = i, n.textContent
}

function pageBusyBegin(i) {
    workingAlert(), jQuery(i).prop("disabled", !0)
}

function pageBusyEnd(i) {
    stopAlert(), jQuery(i).prop("disabled", !1)
}

function ajaxErrorGetText(i) {
    return i.responseText !== null && i.responseText.length > 0 ? i.responseText : i.status === 403 ? typeof springyText > "u" ? "Permission denied." : springyText.messages.permissionDenied : typeof springyText > "u" ? "Error: Please try again." : springyText.messages.errorDefault
}

function ajaxErrorHandler(i) {
    errorAlert(ajaxErrorGetText(i))
}

function setupBrowserDefaults() {
    var i = !!window.MSInputMethodContext && !!document.documentMode;
    i && jQuery.ajaxSetup({
        cache: !1
    })
}

function setupDatePickerLanguage() {
    $.fn.datepicker !== void 0 && $.fn.datepicker.defaults !== void 0 && ($.fn.datepicker.defaults.language = springSpace.language), jQuery.datepicker !== void 0 && (springSpace.language in jQuery.datepicker.regional ? jQuery.datepicker.setDefaults(jQuery.datepicker.regional[springSpace.language]) : jQuery.datepicker.setDefaults(jQuery.datepicker.regional[springSpace.locale]))
}

function createHiddenInput(i, n) {
    var o = document.createElement("input");
    return o.setAttribute("type", "hidden"), o.setAttribute("name", i), o.setAttribute("value", n), o
}

function decodeEscapedJavascriptString(i) {
    return i.replace(/&#(\d+);/g, function(n, o) {
        return String.fromCharCode(o)
    })
}

function convertStringToFloat(i) {
    var n = parseFloat(i);
    return isNaN(n) ? 0 : n
}

function scrollAndFocusOnElement(i) {
    var n = document.querySelector(i);
    return n.scrollIntoView(), n.focus(), n
}
var springyCommon = {
    lastFocusElement: null,
    isModalLoadedAlready: !1,
    setLastFocusElement: function() {
        springyCommon.lastFocusElement = document.activeElement
    },
    restoreLastFocusElement: function() {
        springyCommon.lastFocusElement !== null && springyCommon.lastFocusElement.focus({
            preventScroll: !0,
            focusVisible: !1
        }), springyCommon.lastFocusElement = null
    },
    onModalLoadedEarly: function() {
        springyCommon.isModalLoadedAlready = !0
    },
    onModalLoaded: function(i) {
        if (springyCommon.isModalLoadedAlready) {
            i();
            return
        }
        jQuery("#dialog").on("shown.bs.modal", i)
    },
    onModalClosed: function(i) {
        jQuery(document).on("hidden.bs.modal", i)
    },
    showModal: function(i) {
        springyCommon.setLastFocusElement();
        let n = jQuery("div, button").addClass("s-lc-do-not-print");
        i.removeClass("s-lc-do-not-print"), i.find("div").removeClass("s-lc-do-not-print"), i.springshareModal({
            backdrop: "static"
        }), i.on("shown.bs.modal", springyCommon.onModalLoadedEarly), i.on("hidden.bs.modal", function() {
            closeDialog(), n.removeClass("s-lc-do-not-print"), springyCommon.restoreLastFocusElement()
        })
    },
    closeDialog: function(i) {
        typeof i > "u" && (i = "dialog");
        let n = jQuery("#" + i);
        try {
            n.dialog("close")
        } catch {}
        try {
            n.remove()
        } catch {}
        return jQuery(".modal-backdrop").remove(), jQuery("body").removeClass("modal-open"), springyCommon.closeAllPopups(), springyCommon.isModalLoadedAlready = !1, !1
    },
    wrapText: function(i, n) {
        var o = 0,
            f = "",
            p = i.split(" ");
        for (p.forEach(function(m) {
                var d = m.length;
                if (d !== 0) {
                    if (f.length === 0) {
                        f = m, o = d;
                        return
                    }
                    if (n === void 0 || o + d > n) {
                        f += "<br>" + m, o = d;
                        return
                    }
                    f += m, o += d
                }
            }); i.indexOf("  ") >= 0;) i = i.replace("  ", " ");
        return i.replace(" ", "<br>").replace(`
`, "<br>")
    },
    accessibleStatusUpdate: function(i, n) {
        i.text(""), i.text(n)
    },
    bindAccessibleKeyPress: function(i, n) {
        var o = ["Enter", " ", "Space", "Spacebar"];
        i.off("keydown"), i.on("keydown", function(f) {
            var p = f.key ? f.key : f.code ? f.code : 0;
            o.indexOf(p) !== -1 && n(this)
        })
    },
    parseInt: function(i, n) {
        var o = parseInt(i);
        return isNaN(o) ? typeof n > "u" ? 0 : n : o
    },
    getElement: function(i) {
        var n = document.querySelectorAll(i);
        return n.length === 0 ? null : n[0]
    },
    getValue: function(i) {
        var n = springyCommon.getElement(i);
        return n === null ? null : n.value
    },
    getIntValue: function(i) {
        return springyCommon.parseInt(springyCommon.getValue(i))
    },
    addEventListener: function(i, n, o) {
        for (var f = document.querySelectorAll(i), p = 0; p < f.length; p++) f[p].addEventListener(n, o)
    },
    addIdNameModelsToSelect: function(i, n, o) {
        for (var f = 0; f < n.length; f++) {
            var p = n[f],
                m = p.id === o,
                d = m ? ' selected="selected"' : "";
            i.append('<option value="' + p.id + '"' + d + ">" + p.name + "</option>")
        }
    },
    safeGet: function(i, n, o) {
        for (var f = i, p = 0; p < n.length; p++) {
            var m = n[p];
            if (!(m in f)) return o;
            f = f[m]
        }
        return f
    },
    getDateTimePickerMoment: function(i) {
        var n = i.data("DateTimePicker");
        if (!n) return null;
        var o = n.date();
        return o ? moment(o) : null
    },
    getDateTimePickerValue: function(i) {
        var n = springyCommon.getDateTimePickerMoment(i);
        return n === null ? null : n.format(springSpace.phpDateTimeFormat)
    },
    sanitizeDateTimeValues: function(i, n, o, f) {
        for (let p = 0; p < n.length; p++) {
            let m = n[p],
                d = i.get(m);
            if (d === null || d === "") continue;
            let y = jQuery("input[name=" + m + "]"),
                M = o(y).format(f);
            i.set(m, M)
        }
    },
    getFormSearchParams: function(i, n) {
        var o = jQuery(i);
        if (o.length === 0) return new URLSearchParams;
        typeof springyCkEditor < "u" && springyCkEditor.updateParentElements();
        var f = new URLSearchParams(new FormData(o[0]));
        return n !== void 0 && (n.dates !== void 0 && springyCommon.sanitizeDateTimeValues(f, n.dates, springyDatepicker.getMoment, springSpace.phpDateFormat), n.times !== void 0 && springyCommon.sanitizeDateTimeValues(f, n.times, springyTimepicker.getMoment, springSpace.nativeTimeFormat)), f
    },
    createArrayFromSearchParams: function(i) {
        var n = {};
        for (const [p, m] of i.entries()) {
            var o = p.endsWith("[]"),
                f = p.replace("[]", "");
            if (!n.hasOwnProperty(f)) {
                if (o) {
                    n[f] = [m];
                    continue
                }
                n[f] = m;
                continue
            }
            if (!Array.isArray(n[f])) {
                n[f] = [n[f], m];
                continue
            }
            n[f].push(m)
        }
        return n
    },
    serializeFormAsArray: function(i, n) {
        var o = springyCommon.getFormSearchParams(i, n);
        return springyCommon.createArrayFromSearchParams(o)
    },
    serializeForm: function(i, n) {
        return springyCommon.getFormSearchParams(i, n).toString()
    },
    closeAllPopups: function() {
        jQuery(".tooltip, .popover").hide()
    },
    removeAllPopups: function() {
        jQuery(".popover").remove()
    },
    appendHiddenInput: function(i, n, o) {
        jQuery("<input />").attr("type", "hidden").attr("name", i).attr("value", n).appendTo(o)
    },
    isArraysEqual: function(i, n) {
        return i.length === n.length && i.every((o, f) => o === n[f])
    },
    getTrimmedValue: function(i) {
        var n = jQuery(i).val() || "";
        return n.trim()
    },
    focusOnElement: function(i) {
        i !== null && i.focus()
    },
    focusPreventScroll: function(i) {
        i[0] && i[0].focus({
            preventScroll: !0
        })
    },
    customInputRequired: function(i) {
        const n = i.validity;
        return i.setCustomValidity(""), n.valueMissing && i.setCustomValidity(jQuery(i).data("custom-required-msg")), !0
    },
    setupCustomRequiredValidation: function() {
        let i = jQuery("input[data-custom-required-msg]");
        i.each(function(n, o) {
            springyCommon.customInputRequired(o)
        }), i.on("change", function() {
            return springyCommon.customInputRequired(this)
        })
    }
};