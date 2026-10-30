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
        var h, w, m, d, _ = i(window).width(),
            S = i(window).height(),
            C, W = i('<div id="jquery-notification" />');

        function j() {
            clearTimeout(C), W.fadeOut(o.hideSpeed, function() {
                i(this).remove()
            })
        }
        switch (W.appendTo(i("BODY")).addClass(o.className).html(n).css({
                position: "fixed",
                display: "none",
                zIndex: o.zIndex
            }).mouseover(function() {
                o.freezeOnHover && clearTimeout(C), i(this).addClass(o.className + "-hover")
            }).mouseout(function() {
                i(this).removeClass(o.className + "-hover"), o.freezeOnHover && (C = setTimeout(j, o.duration))
            }).click(j).wrapInner('<div id="jquery-notification-message" />'), h = W.outerWidth(), w = W.outerHeight(), o.position) {
            case "top":
                m = 0, d = _ / 2 - h / 2;
                break;
            case "top-left":
                m = 0, d = 0;
                break;
            case "top-right":
                m = 0, d = _ - h;
                break;
            case "bottom":
                m = S - w, d = _ / 2 - h / 2;
                break;
            case "bottom-left":
                m = S - w, d = 0;
                break;
            case "bottom-right":
                m = S - w, d = _ - h;
                break;
            case "left":
                m = S / 2 - w / 2, d = 0;
                break;
            case "right":
                m = S / 2 - w / 2, d = _ - h;
                break;
            default:
            case "center":
                m = S / 2 - w / 2, d = _ / 2 - h / 2;
                break
        }
        W.css({
            top: m,
            left: d
        }).fadeIn(o.showSpeed, function() {
            C = setTimeout(j, o.duration)
        })
    }
})(jQuery); //! moment.js
//! version : 2.31.0
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

    function h(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
    }

    function w(e) {
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

    function _(e) {
        return e === void 0
    }

    function S(e) {
        return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
    }

    function C(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    }

    function W(e, t) {
        var r = [],
            a, s = e.length;
        for (a = 0; a < s; ++a) r.push(t(e[a], a));
        return r
    }

    function j(e, t) {
        for (var r in t) m(t, r) && (e[r] = t[r]);
        return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function H(e, t, r, a) {
        return cr(e, t, r, a, !0).utc()
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
            invalidOffset: null,
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

    function Y(e) {
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

    function Ue(e) {
        var t = null,
            r = !1,
            a = e._d && !isNaN(e._d.getTime());
        if (a && (t = Y(e), r = Ce.call(t.parsedDateParts, function(s) {
                return s != null
            }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidOffset && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = a;
        else return a;
        return e._isValid
    }

    function xe(e) {
        var t = H(NaN);
        return e != null ? j(Y(t), e) : Y(t).userInvalidated = !0, t
    }
    var Je = n.momentProperties = [],
        He = !1;

    function $e(e, t) {
        var r, a, s, l = Je.length;
        if (_(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), _(t._i) || (e._i = t._i), _(t._f) || (e._f = t._f), _(t._l) || (e._l = t._l), _(t._strict) || (e._strict = t._strict), _(t._tzm) || (e._tzm = t._tzm), _(t._isUTC) || (e._isUTC = t._isUTC), _(t._offset) || (e._offset = t._offset), _(t._pf) || (e._pf = Y(t)), _(t._locale) || (e._locale = t._locale), l > 0)
            for (r = 0; r < l; r++) a = Je[r], s = t[a], _(s) || (e[a] = s);
        return e
    }

    function de(e) {
        $e(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), He === !1 && (He = !0, n.updateOffset(this), He = !1)
    }

    function Z(e) {
        return e instanceof de || e != null && e._isAMomentObject != null
    }

    function X(e) {
        n.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
    }

    function z(e, t) {
        var r = !0;
        return j(function() {
            if (n.deprecationHandler != null && n.deprecationHandler(null, e), r) {
                var a = [],
                    s, l, u, p = arguments.length;
                for (l = 0; l < p; l++) {
                    if (s = "", typeof arguments[l] == "object") {
                        s += `
[` + l + "] ";
                        for (u in arguments[0]) m(arguments[0], u) && (s += u + ": " + arguments[0][u] + ", ");
                        s = s.slice(0, -2)
                    } else s = arguments[l];
                    a.push(s)
                }
                X(e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack), r = !1
            }
            return t.apply(this, arguments)
        }, t)
    }
    var ke = {};

    function k(e, t) {
        n.deprecationHandler != null && n.deprecationHandler(e, t), ke[e] || (X(t + `
` + new Error().stack), ke[e] = !0)
    }
    n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;

    function f(e) {
        return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
    }
    var v = {
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

    function y(e) {
        return typeof e == "string" ? v[e] || v[e.toLowerCase()] : void 0
    }

    function D(e) {
        var t = {},
            r, a;
        for (a in e) m(e, a) && (r = y(a), r && (t[r] = e[a]));
        return t
    }
    var M = {
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

    function O(e) {
        var t = [],
            r;
        for (r in e) m(e, r) && t.push({
            unit: r,
            priority: M[r]
        });
        return t.sort(function(a, s) {
            return a.priority - s.priority
        }), t
    }

    function x(e, t, r) {
        var a = "" + Math.abs(e),
            s = t - a.length,
            l = e >= 0;
        return (l ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
    }
    var R = /(\[[^\[]*\])|(\\e)|(\\)?(eHHmm|[Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        V = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        ee = {},
        re = {};

    function b(e, t, r, a) {
        var s = a;
        typeof a == "string" && (s = function() {
            return this[a]()
        }), e && (re[e] = s), t && (re[t[0]] = function() {
            return x(s.apply(this, arguments), t[1], t[2])
        }), r && (re[r] = function() {
            return this.localeData().ordinal(s.apply(this, arguments), e)
        })
    }

    function Ke(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function Xe(e) {
        var t = e.match(R),
            r, a;
        for (r = 0, a = t.length; r < a; r++) re[t[r]] ? t[r] = re[t[r]] : t[r] = Ke(t[r]);
        return function(s) {
            var l = "",
                u;
            for (u = 0; u < a; u++) l += f(t[u]) ? t[u].call(s, e) : t[u];
            return l
        }
    }

    function G(e, t) {
        if (!e.isValid()) return e.localeData().invalidDate();
        t = fe(t, e.localeData());
        var r = "$" + t;
        return m(ee, r) || (ee[r] = Xe(t)), ee[r](e)
    }

    function fe(e, t) {
        var r = 5;

        function a(s) {
            return t.longDateFormat(s) || s
        }
        for (V.lastIndex = 0; r >= 0 && V.test(e);) e = e.replace(V, a), V.lastIndex = 0, r -= 1;
        return e
    }
    var te = /\d/,
        U = /\d\d/,
        be = /\d{3}/,
        Se = /\d{4}/,
        oe = /[+-]?\d{6}/,
        L = /\d\d?/,
        et = /\d\d\d\d?/,
        se = /\d\d\d\d\d\d?/,
        tt = /\d{1,3}/,
        vt = /\d{1,4}/,
        rt = /[+-]?\d{1,6}/,
        Re = /\d+/,
        at = /[+-]?\d+/,
        Er = /Z|[+-]\d\d:?\d\d/gi,
        st = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Wr = /[+-]?\d+(\.\d{1,3})?/,
        ze = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        Ne = /^[1-9]\d?/,
        gt = /^([1-9]\d|\d)/,
        nt;
    nt = {};

    function g(e, t, r) {
        nt[e] = f(t) ? t : function(a, s) {
            return a && r ? r : t
        }
    }

    function jr(e, t) {
        return m(nt, e) ? nt[e](t._strict, t._locale) : new RegExp(Lr(e))
    }

    function Lr(e) {
        return he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, r, a, s, l) {
            return r || a || s || l
        }))
    }

    function he(e) {
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
    var wt = {};

    function I(e, t) {
        var r, a = t,
            s;
        for (typeof e == "string" && (e = [e]), S(t) && (a = function(l, u) {
                u[t] = F(l)
            }), s = e.length, r = 0; r < s; r++) wt[e[r]] = a
    }

    function Ee(e, t) {
        I(e, function(r, a, s, l) {
            s._w = s._w || {}, t(r, s._w, s, l)
        })
    }

    function Ir(e, t, r) {
        t != null && m(wt, e) && wt[e](t, r._a, r, e)
    }

    function it(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    var q = 0,
        ne = 1,
        ae = 2,
        J = 3,
        ue = 4,
        me = 5,
        Ye = 6,
        Ar = 7,
        Ur = 8;
    b("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? x(e, 4) : "+" + e
    }), b(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), b(0, ["YYYY", 4], 0, "year"), b(0, ["YYYYY", 5], 0, "year"), b(0, ["YYYYYY", 6, !0], 0, "year"), g("Y", at), g("YY", L, U), g("YYYY", vt, Se), g("YYYYY", rt, oe), g("YYYYYY", rt, oe), I(["YYYYY", "YYYYYY"], q), I("YYYY", function(e, t) {
        t[q] = e.length === 2 ? n.parseTwoDigitYear(e) : F(e)
    }), I("YY", function(e, t) {
        t[q] = n.parseTwoDigitYear(e)
    }), I("Y", function(e, t) {
        t[q] = parseInt(e, 10)
    });

    function Qe(e) {
        return it(e) ? 366 : 365
    }
    n.parseTwoDigitYear = function(e) {
        return F(e) + (F(e) > 68 ? 1900 : 2e3)
    };
    var zt = We("FullYear", !0);

    function Hr() {
        return it(this.year())
    }

    function We(e, t) {
        return function(r) {
            return r != null ? (Qt(this, e, r), n.updateOffset(this, t), this) : Ve(this, e)
        }
    }

    function Ve(e, t) {
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

    function Qt(e, t, r) {
        var a, s, l, u, p;
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
            l = r, u = e.month(), p = e.date(), p = p === 29 && u === 1 && !it(l) ? 28 : p, s ? a.setUTCFullYear(l, u, p) : a.setFullYear(l, u, p)
        }
    }

    function $r(e) {
        return e = y(e), f(this[e]) ? this[e]() : this
    }

    function zr(e, t) {
        if (typeof e == "object") {
            e = D(e);
            var r = O(e),
                a, s = r.length;
            for (a = 0; a < s; a++) this[r[a].unit](e[r[a].unit])
        } else if (e = y(e), f(this[e])) return this[e](t);
        return this
    }

    function Qr(e, t) {
        return (e % t + t) % t
    }
    var B;
    Array.prototype.indexOf ? B = Array.prototype.indexOf : B = function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1
    };

    function kt(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var r = Qr(t, 12);
        return e += (t - r) / 12, r === 1 ? it(e) ? 29 : 28 : 31 - r % 7 % 2
    }
    b("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), b("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), b("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), g("M", L, Ne), g("MM", L, U), g("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }), g("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }), I(["M", "MM"], function(e, t) {
        t[ne] = F(e) - 1
    }), I(["MMM", "MMMM"], function(e, t, r, a) {
        var s = r._locale.monthsParse(e, a, r._strict);
        s != null ? t[ne] = s : Y(r).invalidMonth = e
    });
    var Vr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Vt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Gt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Gr = ze,
        qr = ze,
        qt = ["monthsParse", "longMonthsParse", "shortMonthsParse", "monthsRegex", "monthsShortRegex", "monthsStrictRegex", "monthsShortStrictRegex"];

    function Br(e, t) {
        var r, a;
        for (r = 0; r < qt.length; r++) a = qt[r], m(t, a) || delete e["_" + a]
    }

    function Zr(e, t) {
        return e ? h(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Gt).test(t) ? "format" : "standalone"][e.month()] : h(this._months) ? this._months : this._months.standalone
    }

    function Jr(e, t) {
        return e ? h(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Gt.test(t) ? "format" : "standalone"][e.month()] : h(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function Kr(e, t, r) {
        var a, s, l, u = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) l = H([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(l, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(l, "").toLocaleLowerCase();
        return r ? t === "MMM" ? (s = B.call(this._shortMonthsParse, u), s !== -1 ? s : null) : (s = B.call(this._longMonthsParse, u), s !== -1 ? s : null) : t === "MMM" ? (s = B.call(this._shortMonthsParse, u), s !== -1 ? s : (s = B.call(this._longMonthsParse, u), s !== -1 ? s : null)) : (s = B.call(this._longMonthsParse, u), s !== -1 ? s : (s = B.call(this._shortMonthsParse, u), s !== -1 ? s : null))
    }

    function Xr(e, t, r) {
        var a, s, l;
        if (this._monthsParseExact) return Kr.call(this, e, t, r);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
            if (s = H([2e3, a]), r && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), !r && !this._monthsParse[a] && (l = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(l.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[a].test(e)) return a;
            if (r && t === "MMM" && this._shortMonthsParse[a].test(e)) return a;
            if (!r && this._monthsParse[a].test(e)) return a
        }
    }

    function Bt(e, t) {
        if (!e.isValid()) return e;
        if (typeof t == "string") {
            if (/^\d+$/.test(t)) t = F(t);
            else if (t = e.localeData().monthsParse(t), !S(t)) return e
        }
        var r = t,
            a = e.date();
        return a = a < 29 ? a : Math.min(a, kt(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, a) : e._d.setMonth(r, a), e
    }

    function Zt(e) {
        return e != null ? (Bt(this, e), n.updateOffset(this, !0), this) : Ve(this, "Month")
    }

    function ea() {
        return kt(this.year(), this.month())
    }

    function ta(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Jt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Gr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function ra(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Jt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = qr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }

    function Jt() {
        function e(T, P) {
            return P.length - T.length
        }
        var t = [],
            r = [],
            a = [],
            s, l, u, p;
        for (s = 0; s < 12; s++) l = H([2e3, s]), u = he(this.monthsShort(l, "")), p = he(this.months(l, "")), t.push(u), r.push(p), a.push(p), a.push(u);
        t.sort(e), r.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
    }
    b("d", 0, "do", "day"), b("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), b("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), b("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), b("e", 0, 0, "weekday"), b("E", 0, 0, "isoWeekday"), b("eHHmm", 0, 0, function() {
        return "" + this.weekday() + x(this.hours(), 2) + x(this.minutes(), 2)
    }), g("d", L), g("e", L), g("E", L), g("eHHmm", se), g("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }), g("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }), g("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }), Ee(["dd", "ddd", "dddd"], function(e, t, r, a) {
        var s = r._locale.weekdaysParse(e, a, r._strict);
        s != null ? t.d = s : Y(r).invalidWeekday = e
    }), Ee(["d", "e", "E"], function(e, t, r, a) {
        t[a] = F(e)
    }), Ee("eHHmm", function(e, t, r) {
        var a = e.length - 4;
        t.e = F(e.substr(0, a)), r._a[J] = F(e.substr(a, 2)), r._a[ue] = F(e.substr(a + 2))
    });

    function aa(e, t) {
        return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10)
    }

    function sa(e, t) {
        return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }

    function bt(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    var na = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ia = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        oa = ze,
        la = ze,
        ua = ze,
        Xt = ["weekdaysParse", "fullWeekdaysParse", "shortWeekdaysParse", "minWeekdaysParse", "weekdaysRegex", "weekdaysShortRegex", "weekdaysMinRegex", "weekdaysStrictRegex", "weekdaysShortStrictRegex", "weekdaysMinStrictRegex"];

    function da(e, t) {
        var r, a;
        for (r = 0; r < Xt.length; r++) a = Xt[r], m(t, a) || delete e["_" + a]
    }

    function fa(e, t) {
        var r = h(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return e === !0 ? bt(r, this._week.dow) : e ? r[e.day()] : r
    }

    function ca(e) {
        return e === !0 ? bt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }

    function ha(e) {
        return e === !0 ? bt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }

    function ma(e, t, r) {
        var a, s, l, u = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) l = H([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(l, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(l, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(l, "").toLocaleLowerCase();
        return r ? t === "dddd" ? (s = B.call(this._weekdaysParse, u), s !== -1 ? s : null) : t === "ddd" ? (s = B.call(this._shortWeekdaysParse, u), s !== -1 ? s : null) : (s = B.call(this._minWeekdaysParse, u), s !== -1 ? s : null) : t === "dddd" ? (s = B.call(this._weekdaysParse, u), s !== -1 || (s = B.call(this._shortWeekdaysParse, u), s !== -1) ? s : (s = B.call(this._minWeekdaysParse, u), s !== -1 ? s : null)) : t === "ddd" ? (s = B.call(this._shortWeekdaysParse, u), s !== -1 || (s = B.call(this._weekdaysParse, u), s !== -1) ? s : (s = B.call(this._minWeekdaysParse, u), s !== -1 ? s : null)) : (s = B.call(this._minWeekdaysParse, u), s !== -1 || (s = B.call(this._weekdaysParse, u), s !== -1) ? s : (s = B.call(this._shortWeekdaysParse, u), s !== -1 ? s : null))
    }

    function pa(e, t, r) {
        var a, s, l;
        if (this._weekdaysParseExact) return ma.call(this, e, t, r);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
            if (s = H([2e3, 1]).day(a), r && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (l = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(l.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[a].test(e)) return a;
            if (r && t === "ddd" && this._shortWeekdaysParse[a].test(e)) return a;
            if (r && t === "dd" && this._minWeekdaysParse[a].test(e)) return a;
            if (!r && this._weekdaysParse[a].test(e)) return a
        }
    }

    function ya(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        var t = Ve(this, "Day");
        return e != null ? (e = aa(e, this.localeData()), this.add(e - t, "d")) : t
    }

    function _a(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? t : this.add(e - t, "d")
    }

    function va(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        if (e != null) {
            var t = sa(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        } else return this.day() || 7
    }

    function ga(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || St.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = oa), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function wa(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || St.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = la), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function ka(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || St.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ua), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function St() {
        function e(K, we) {
            return we.length - K.length
        }
        var t = [],
            r = [],
            a = [],
            s = [],
            l, u, p, T, P;
        for (l = 0; l < 7; l++) u = H([2e3, 1]).day(l), p = he(this.weekdaysMin(u, "")), T = he(this.weekdaysShort(u, "")), P = he(this.weekdays(u, "")), t.push(p), r.push(T), a.push(P), s.push(p), s.push(T), s.push(P);
        t.sort(e), r.sort(e), a.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
    }

    function ba(e) {
        var t, r;
        Br(this, e), da(this, e);
        for (r in e) m(e, r) && (t = e[r], f(t) ? this[r] = t : this["_" + r] = t);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function Dt(e, t) {
        var r = j({}, e),
            a;
        for (a in t) m(t, a) && (w(e[a]) && w(t[a]) ? (r[a] = {}, j(r[a], e[a]), j(r[a], t[a])) : t[a] != null ? r[a] = t[a] : delete r[a]);
        for (a in e) m(e, a) && !m(t, a) && w(e[a]) && (r[a] = j({}, r[a]));
        return r
    }

    function Mt(e) {
        e != null && this.set(e)
    }
    var Tt;
    Object.keys ? Tt = Object.keys : Tt = function(e) {
        var t, r = [];
        for (t in e) m(e, t) && r.push(t);
        return r
    };
    var Sa = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };

    function Da(e, t, r) {
        var a = this._calendar[e] || this._calendar.sameElse;
        return f(a) ? a.call(t, r) : a
    }
    var Ma = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };

    function Ta(e) {
        var t = this._longDateFormat[e],
            r = this._longDateFormat[e.toUpperCase()],
            a = this._longDateFormatCache;
        return t || !r ? t : a && a[e] && a[e].formatUpper === r ? a[e].format : (t = r.match(R).map(function(s) {
            return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s
        }).join(""), a || (a = this._longDateFormatCache = {}), a[e] = {
            formatUpper: r,
            format: t
        }, t)
    }
    var xa = "Invalid date";

    function Ya() {
        return this._invalidDate
    }
    var Oa = "%d",
        Fa = /\d{1,2}/;

    function Pa(e) {
        return this._ordinal.replace("%d", e)
    }
    var Ca = {
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

    function er(e, t, r, a) {
        var s = this._relativeTime[r];
        return f(s) ? s(e, t, r, a) : s.replace(/%d/i, e)
    }

    function Ra(e, t, r, a) {
        return this.postformat(er.call(this, e, t, r, a))
    }

    function tr(e, t) {
        var r = this._relativeTime[e > 0 ? "future" : "past"];
        return f(r) ? r(t) : r.replace(/%s/i, t)
    }

    function Na(e, t) {
        return this.postformat(tr.call(this, e, t))
    }

    function Ea(e, t, r, a, s, l, u) {
        var p;
        return e < 100 && e >= 0 ? (p = new Date(e + 400, t, r, a, s, l, u), isFinite(p.getFullYear()) && p.setFullYear(e)) : p = new Date(e, t, r, a, s, l, u), p
    }

    function Oe(e) {
        var t, r;
        return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function ot(e, t, r) {
        var a = 7 + t - r,
            s = (7 + Oe(e, 0, a).getUTCDay() - t) % 7;
        return -s + a - 1
    }

    function rr(e, t, r, a, s) {
        var l = (7 + r - a) % 7,
            u = ot(e, a, s),
            p = 1 + 7 * (t - 1) + l + u,
            T, P;
        return p <= 0 ? (T = e - 1, P = Qe(T) + p) : p > Qe(e) ? (T = e + 1, P = p - Qe(e)) : (T = e, P = p), {
            year: T,
            dayOfYear: P
        }
    }

    function ar(e, t, r, a) {
        var s = ot(e, r, a),
            l = Math.floor((t - s - 1) / 7) + 1,
            u, p;
        return l < 1 ? (p = e - 1, u = l + pe(p, r, a)) : l > pe(e, r, a) ? (u = l - pe(e, r, a), p = e + 1) : (p = e, u = l), {
            week: u,
            year: p
        }
    }

    function xt(e, t, r) {
        return ar(e.year(), e.dayOfYear(), t, r)
    }

    function sr(e, t, r, a, s) {
        var l = Math.round((Oe(e, t, r) - Oe(e, 0, 1)) / 864e5) + 1;
        return ar(e, l, a, s)
    }

    function pe(e, t, r) {
        var a = ot(e, t, r),
            s = ot(e + 1, t, r);
        return (Qe(e) - a + s) / 7
    }
    b("w", ["ww", 2], "wo", "week"), b("W", ["WW", 2], "Wo", "isoWeek"), g("w", L, Ne), g("ww", L, U), g("W", L, Ne), g("WW", L, U), Ee(["w", "ww", "W", "WW"], function(e, t, r, a) {
        t[a.substr(0, 1)] = F(e)
    });

    function Wa(e) {
        return xt(e, this._week.dow, this._week.doy).week
    }
    var ja = {
        dow: 0,
        doy: 6
    };

    function La() {
        return this._week.dow
    }

    function Ia() {
        return this._week.doy
    }

    function Aa(e) {
        var t = this.localeData().week(this);
        return e == null ? t : this.add((e - t) * 7, "d")
    }

    function Ua(e) {
        var t = xt(this, 1, 4).week;
        return e == null ? t : this.add((e - t) * 7, "d")
    }

    function Yt() {
        return this.hours() % 12 || 12
    }

    function Ha() {
        return this.hours() || 24
    }
    b("H", ["HH", 2], 0, "hour"), b("h", ["hh", 2], 0, Yt), b("k", ["kk", 2], 0, Ha), b("hmm", 0, 0, function() {
        return "" + Yt.apply(this) + x(this.minutes(), 2)
    }), b("hmmss", 0, 0, function() {
        return "" + Yt.apply(this) + x(this.minutes(), 2) + x(this.seconds(), 2)
    }), b("Hmm", 0, 0, function() {
        return "" + this.hours() + x(this.minutes(), 2)
    }), b("Hmmss", 0, 0, function() {
        return "" + this.hours() + x(this.minutes(), 2) + x(this.seconds(), 2)
    });

    function nr(e, t) {
        b(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    nr("a", !0), nr("A", !1);

    function ir(e, t) {
        return t._meridiemParse
    }
    g("a", ir), g("A", ir), g("H", L, gt), g("h", L, Ne), g("k", L, Ne), g("HH", L, U), g("hh", L, U), g("kk", L, U), g("hmm", et), g("hmmss", se), g("Hmm", et), g("Hmmss", se), I(["H", "HH"], J), I(["k", "kk"], function(e, t, r) {
        var a = F(e);
        t[J] = a === 24 ? 0 : a
    }), I(["a", "A"], function(e, t, r) {
        r._isPm = r._locale.isPM(e), r._meridiem = e
    }), I(["h", "hh"], function(e, t, r) {
        t[J] = F(e), Y(r).bigHour = !0
    }), I("hmm", function(e, t, r) {
        var a = e.length - 2;
        t[J] = F(e.substr(0, a)), t[ue] = F(e.substr(a)), Y(r).bigHour = !0
    }), I("hmmss", function(e, t, r) {
        var a = e.length - 4,
            s = e.length - 2;
        t[J] = F(e.substr(0, a)), t[ue] = F(e.substr(a, 2)), t[me] = F(e.substr(s)), Y(r).bigHour = !0
    }), I("Hmm", function(e, t, r) {
        var a = e.length - 2;
        t[J] = F(e.substr(0, a)), t[ue] = F(e.substr(a))
    }), I("Hmmss", function(e, t, r) {
        var a = e.length - 4,
            s = e.length - 2;
        t[J] = F(e.substr(0, a)), t[ue] = F(e.substr(a, 2)), t[me] = F(e.substr(s))
    });

    function $a(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    }
    var za = /[ap]\.?m?\.?/i,
        Qa = We("Hours", !0);

    function Va(e, t, r) {
        return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM"
    }
    var or = {
            calendar: Sa,
            longDateFormat: Ma,
            invalidDate: xa,
            ordinal: Oa,
            dayOfMonthOrdinalParse: Fa,
            relativeTime: Ca,
            months: Vr,
            monthsShort: Vt,
            week: ja,
            weekdays: na,
            weekdaysMin: ia,
            weekdaysShort: Kt,
            meridiemParse: za
        },
        A = {},
        Ge = {},
        qe;

    function Ga(e, t) {
        var r, a = Math.min(e.length, t.length);
        for (r = 0; r < a; r += 1)
            if (e[r] !== t[r]) return r;
        return a
    }

    function Ot(e) {
        return e && e.toLowerCase().replace("_", "-")
    }

    function qa(e) {
        for (var t = 0, r, a, s, l; t < e.length;) {
            for (l = Ot(e[t]).split("-"), r = l.length, a = Ot(e[t + 1]), a = a ? a.split("-") : null; r > 0;) {
                if (s = lt(l.slice(0, r).join("-")), s) return s;
                if (a && a.length >= r && Ga(l, a) >= r - 1) break;
                r--
            }
            t++
        }
        return qe
    }

    function Ba(e) {
        return typeof e == "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e)
    }

    function lt(e) {
        var t = null,
            r, a;
        if (m(A, e)) return A[e];
        if (a = Ot(e), m(A, a)) return A[a];
        if (typeof module < "u" && module && module.exports && Ba(a)) try {
            t = qe._abbr, r = require, r("./locale/" + a), De(t)
        } catch {
            A[a] = null
        }
        if (m(A, a)) return A[a]
    }

    function De(e, t) {
        var r;
        return e && (_(t) ? r = ye(e) : r = Ft(e, t), r ? qe = r : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), qe._abbr
    }

    function Ft(e, t) {
        if (t !== null) {
            var r, a = or;
            if (t.abbr = e, A[e] != null) k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = A[e]._config;
            else if (t.parentLocale != null)
                if (A[t.parentLocale] != null) a = A[t.parentLocale]._config;
                else if (r = lt(t.parentLocale), r != null) a = r._config;
            else return Ge[t.parentLocale] || (Ge[t.parentLocale] = []), Ge[t.parentLocale].push({
                name: e,
                config: t
            }), null;
            return A[e] = new Mt(Dt(a, t)), Ge[e] && Ge[e].forEach(function(s) {
                Ft(s.name, s.config)
            }), De(e), A[e]
        } else return delete A[e], null
    }

    function Za(e, t) {
        var r, a = lt(e),
            s = or;
        return a != null && (e = a._abbr), t != null ? (A[e] != null && A[e].parentLocale != null ? A[e].set(Dt(A[e]._config, t)) : (a != null && (s = a._config), t = Dt(s, t), a == null && (t.abbr = e), r = new Mt(t), r.parentLocale = A[e], A[e] = r), De(e)) : A[e] != null && (A[e].parentLocale != null ? (A[e] = A[e].parentLocale, e === De() && De(e)) : A[e] != null && delete A[e]), A[e]
    }

    function ye(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return qe;
        if (!h(e)) {
            if (t = lt(e), t) return t;
            e = [e]
        }
        return qa(e)
    }

    function Ja() {
        return Tt(A)
    }

    function Pt(e) {
        var t, r = e._a;
        return r && Y(e).overflow === -2 && (t = r[ne] < 0 || r[ne] > 11 ? ne : r[ae] < 1 || r[ae] > kt(r[q], r[ne]) ? ae : r[J] < 0 || r[J] > 24 || r[J] === 24 && (r[ue] !== 0 || r[me] !== 0 || r[Ye] !== 0) ? J : r[ue] < 0 || r[ue] > 59 ? ue : r[me] < 0 || r[me] > 59 ? me : r[Ye] < 0 || r[Ye] > 999 ? Ye : -1, Y(e)._overflowDayOfYear && (t < q || t > ae) && (t = ae), Y(e)._overflowWeeks && t === -1 && (t = Ar), Y(e)._overflowWeekday && t === -1 && (t = Ur), Y(e).overflow = t), e
    }
    var Ka = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Xa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        es = /Z|[+-]\d\d(?::?\d\d)?/,
        ut = [
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
        Ct = [
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
        ts = /^\/?Date\((-?\d+)/i,
        rs = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        as = {
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

    function lr(e) {
        var t, r, a = e._i,
            s = Ka.exec(a) || Xa.exec(a),
            l, u, p, T, P = ut.length,
            K = Ct.length;
        if (s) {
            for (Y(e).iso = !0, t = 0, r = P; t < r; t++)
                if (ut[t][1].exec(s[1])) {
                    u = ut[t][0], l = ut[t][2] !== !1;
                    break
                } if (u == null) {
                e._isValid = !1;
                return
            }
            if (s[3]) {
                for (t = 0, r = K; t < r; t++)
                    if (Ct[t][1].exec(s[3])) {
                        p = (s[2] || " ") + Ct[t][0];
                        break
                    } if (p == null) {
                    e._isValid = !1;
                    return
                }
            }
            if (!l && p != null) {
                e._isValid = !1;
                return
            }
            if (s[4])
                if (es.exec(s[4])) T = "Z";
                else {
                    e._isValid = !1;
                    return
                } e._f = u + (p || "") + (T || ""), Nt(e)
        } else e._isValid = !1
    }

    function ss(e, t, r, a, s, l) {
        var u = [ns(e), Vt.indexOf(t), parseInt(r, 10), parseInt(a, 10), parseInt(s, 10)];
        return l && u.push(parseInt(l, 10)), u
    }

    function ns(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }

    function is(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function os(e, t, r) {
        if (e) {
            var a = Kt.indexOf(e),
                s = new Date(t[0], t[1], t[2]).getDay();
            if (a !== s) return Y(r).weekdayMismatch = !0, r._isValid = !1, !1
        }
        return !0
    }

    function ls(e, t, r) {
        if (e) return as[e];
        if (t) return 0;
        var a = parseInt(r, 10),
            s = a % 100,
            l = (a - s) / 100;
        return l * 60 + s
    }

    function ur(e) {
        var t = rs.exec(is(e._i)),
            r;
        if (t) {
            if (r = ss(t[4], t[3], t[2], t[5], t[6], t[7]), !os(t[1], r, e)) return;
            e._a = r, e._tzm = ls(t[8], t[9], t[10]), e._d = Oe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function us(e) {
        var t = ts.exec(e._i);
        if (t !== null) {
            e._d = new Date(+t[1]);
            return
        }
        if (lr(e), e._isValid === !1) delete e._isValid;
        else return;
        if (ur(e), e._isValid === !1) delete e._isValid;
        else return;
        e._strict ? e._isValid = !1 : n.createFromInputFallback(e)
    }
    n.createFromInputFallback = z("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    });

    function Be(e, t, r) {
        return e ?? t ?? r
    }

    function dr(e, t, r) {
        var a = Object.prototype.hasOwnProperty.call(e, "_isDefaultDatePartsForWeek"),
            s = e._isDefaultDatePartsForWeek;
        e._isDefaultDatePartsForWeek = !!r;
        try {
            return n._getDefaultDateParts(e, t, r)
        } finally {
            a ? e._isDefaultDatePartsForWeek = s : delete e._isDefaultDatePartsForWeek
        }
    }

    function ds(e) {
        var t = e._defaultDatePartsNow;
        return t ? (t.hasValue || (t.value = n.now(), t.hasValue = !0), t.value) : n.now()
    }

    function fs(e, t, r) {
        var a = r || e._isDefaultDatePartsForWeek,
            s = a ? Q(t) : new Date(t);
        return a ? [s.year(), s.month(), s.date()] : e._useUTC ? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()] : [s.getFullYear(), s.getMonth(), s.getDate()]
    }
    n._getDefaultDateParts = fs;

    function Rt(e) {
        var t, r, a = [],
            s, l, u, p, T;
        if (!e._d) {
            for ((e._a[q] == null || e._a[ne] == null || e._a[ae] == null) && (s = ds(e), l = dr(e, s)), e._w && e._a[ae] == null && e._a[ne] == null && cs(e, dr(e, s, !0)), e._dayOfYear != null && (p = e._a[q] != null ? e._a[q] : l[q], (e._dayOfYear > Qe(p) || e._dayOfYear === 0) && (Y(e)._overflowDayOfYear = !0), r = Oe(p, 0, e._dayOfYear), e._a[ne] = r.getUTCMonth(), e._a[ae] = r.getUTCDate()), T = e._a[q] == null || e._a[ne] == null || e._a[ae] == null, t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = a[t] = l[t];
            for (; t < 7; t++) e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
            e._a[J] === 24 && e._a[ue] === 0 && e._a[me] === 0 && e._a[Ye] === 0 && (e._nextDay = !0, e._a[J] = 0), e._d = (e._useUTC ? Oe : Ea).apply(null, a), u = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[J] = 24), e._w && typeof e._w.d < "u" && !T && e._w.d !== u && (Y(e).weekdayMismatch = !0)
        }
    }

    function cs(e, t) {
        var r, a, s, l, u, p, T, P, K;
        r = e._w, r.GG != null || r.W != null || r.E != null ? (u = 1, p = 4, a = Be(r.GG, e._a[q], sr(t[q], t[ne], t[ae], 1, 4).year), s = Be(r.W, 1), l = Be(r.E, 1), (l < 1 || l > 7) && (P = !0)) : (u = e._locale._week.dow, p = e._locale._week.doy, K = sr(t[q], t[ne], t[ae], u, p), a = Be(r.gg, e._a[q], K.year), s = Be(r.w, K.week), r.d != null ? (l = r.d, (l < 0 || l > 6) && (P = !0)) : r.e != null ? (l = r.e + u, (r.e < 0 || r.e > 6) && (P = !0)) : l = u), s < 1 || s > pe(a, u, p) ? Y(e)._overflowWeeks = !0 : P != null ? Y(e)._overflowWeekday = !0 : (T = rr(a, s, l, u, p), e._a[q] = T.year, e._dayOfYear = T.dayOfYear)
    }
    n.ISO_8601 = function() {}, n.RFC_2822 = function() {};

    function Nt(e) {
        if (e._f === n.ISO_8601) {
            lr(e);
            return
        }
        if (e._f === n.RFC_2822) {
            ur(e);
            return
        }
        e._a = [], Y(e).empty = !0;
        var t = "" + e._i,
            r, a, s, l, u, p = t.length,
            T = 0,
            P, K;
        for (s = fe(e._f, e._locale).match(R) || [], K = s.length, r = 0; r < K; r++) l = s[r], a = (t.match(jr(l, e)) || [])[0], a && (u = t.substr(0, t.indexOf(a)), u.length > 0 && Y(e).unusedInput.push(u), t = t.slice(t.indexOf(a) + a.length), T += a.length), re[l] ? (a ? Y(e).empty = !1 : Y(e).unusedTokens.push(l), Ir(l, a, e)) : e._strict && !a && Y(e).unusedTokens.push(l);
        Y(e).charsLeftOver = p - T, t.length > 0 && Y(e).unusedInput.push(t), e._a[J] <= 12 && Y(e).bigHour === !0 && e._a[J] > 0 && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[J] = hs(e._locale, e._a[J], e._meridiem), P = Y(e).era, P !== null && (e._a[q] = e._locale.erasConvertYear(P, e._a[q])), Rt(e), Pt(e)
    }

    function hs(e, t, r) {
        var a;
        return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (a = e.isPM(r), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t)
    }

    function ms(e) {
        var t, r, a, s, l, u, p = !1,
            T = {},
            P = e._f.length;
        if (P === 0) {
            Y(e).invalidFormat = !0, e._d = new Date(NaN);
            return
        }
        for (s = 0; s < P; s++) l = 0, u = !1, t = $e({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._defaultDatePartsNow = T, t._f = e._f[s], Nt(t), Ue(t) && (u = !0), l += Y(t).charsLeftOver, l += Y(t).unusedTokens.length * 10, Y(t).score = l, p ? l < a && (a = l, r = t) : (a == null || l < a || u) && (a = l, r = t, u && (p = !0));
        j(e, r || t)
    }

    function ps(e) {
        if (!e._d) {
            var t = D(e._i),
                r = t.day === void 0 ? t.date : t.day;
            e._a = W([t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), Rt(e)
        }
    }

    function ys(e) {
        var t = new de(Pt(fr(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function fr(e) {
        var t = e._i,
            r = e._f;
        return e._locale = e._locale || ye(e._l), t === null || r === void 0 && t === "" ? xe({
            nullInput: !0
        }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Z(t) ? new de(Pt(t)) : (C(t) ? e._d = t : h(r) ? ms(e) : r ? Nt(e) : _s(e), Ue(e) || (e._d = null), e))
    }

    function _s(e) {
        var t = e._i;
        _(t) ? e._d = new Date(n.now()) : C(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? us(e) : h(t) ? (e._a = W(t.slice(0), function(r) {
            return parseInt(r, 10)
        }), Rt(e)) : w(t) ? ps(e) : S(t) ? e._d = new Date(t) : n.createFromInputFallback(e)
    }

    function cr(e, t, r, a, s) {
        var l = {};
        return (t === !0 || t === !1) && (a = t, t = void 0), (r === !0 || r === !1) && (a = r, r = void 0), (w(e) && d(e) || h(e) && e.length === 0) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = r, l._i = e, l._f = t, l._strict = a, ys(l)
    }

    function Q(e, t, r, a) {
        return cr(e, t, r, a, !1)
    }
    var vs = z("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = Q.apply(null, arguments);
            return this.isValid() && e.isValid() ? e < this ? this : e : xe()
        }),
        gs = z("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var e = Q.apply(null, arguments);
            return this.isValid() && e.isValid() ? e > this ? this : e : xe()
        });

    function hr(e, t) {
        var r, a;
        if (t.length === 1 && h(t[0]) && (t = t[0]), !t.length) return Q();
        for (a = 0; a < t.length; ++a)
            if (Z(t[a])) {
                r = t[a];
                break
            } if (!r) return xe();
        for (++a; a < t.length; ++a) Z(t[a]) && (!t[a].isValid() || t[a][e](r)) && (r = t[a]);
        return r
    }

    function ws() {
        var e = [].slice.call(arguments, 0);
        return hr("isBefore", e)
    }

    function ks() {
        var e = [].slice.call(arguments, 0);
        return hr("isAfter", e)
    }
    var bs = function() {
            return Date.now ? Date.now() : +new Date
        },
        Ze = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ss(e) {
        var t, r = !1,
            a, s = Ze.length;
        for (t in e)
            if (m(e, t) && !(B.call(Ze, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
        for (a = 0; a < s; ++a)
            if (e[Ze[a]]) {
                if (r) return !1;
                parseFloat(e[Ze[a]]) !== F(e[Ze[a]]) && (r = !0)
            } return !0
    }

    function Ds() {
        return this._isValid
    }

    function Ms() {
        return ce(NaN)
    }

    function dt(e) {
        var t = D(e),
            r = t.year || 0,
            a = t.quarter || 0,
            s = t.month || 0,
            l = t.week || t.isoWeek || 0,
            u = t.day || 0,
            p = t.hour || 0,
            T = t.minute || 0,
            P = t.second || 0,
            K = t.millisecond || 0;
        this._isValid = Ss(t), this._milliseconds = +K + P * 1e3 + T * 6e4 + p * 1e3 * 60 * 60, this._days = +u + l * 7, this._months = +s + a * 3 + r * 12, this._data = {}, this._locale = ye(), this._bubble()
    }

    function ft(e) {
        return e instanceof dt
    }

    function Et(e) {
        return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
    }

    function Ts(e, t, r) {
        var a = Math.min(e.length, t.length),
            s = Math.abs(e.length - t.length),
            l = 0,
            u;
        for (u = 0; u < a; u++) F(e[u]) !== F(t[u]) && l++;
        return l + s
    }

    function mr(e, t) {
        b(e, 0, 0, function() {
            var r = this.utcOffset(),
                a = "+";
            return r < 0 && (r = -r, a = "-"), a + x(~~(r / 60), 2) + t + x(~~r % 60, 2)
        })
    }
    mr("Z", ":"), mr("ZZ", ""), g("Z", st), g("ZZ", st), I(["Z", "ZZ"], function(e, t, r) {
        var a = Wt(st, e);
        r._useUTC = !0, r._tzm = a, a === null && (Y(r).invalidOffset = e)
    });
    var xs = /([\+\-]|\d\d)/gi;

    function Wt(e, t) {
        var r = (t || "").match(e),
            a, s, l;
        return r === null || (a = r[r.length - 1] || [], s = (a + "").match(xs) || ["-", 0, 0], l = +(s[1] * 60) + F(s[2]), F(s[2]) > 59 || (s[0] === "+" ? l > 840 : l > 720)) ? null : l === 0 ? 0 : s[0] === "+" ? l : -l
    }

    function jt(e, t) {
        var r, a;
        return t._isUTC ? (r = t.clone(), a = (Z(e) || C(e) ? e.valueOf() : Q(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + a), n.updateOffset(r, !1), r) : Q(e).local()
    }

    function Lt(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    n.updateOffset = function() {};

    function Ys(e, t, r) {
        var a = this._offset || 0,
            s;
        if (!this.isValid()) return e != null ? this : NaN;
        if (e != null) {
            if (typeof e == "string") {
                if (e = Wt(st, e), e === null) return this
            } else Math.abs(e) < 16 && !r && (e = e * 60);
            return !this._isUTC && t && (s = Lt(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), a !== e && (!t || this._changeInProgress ? vr(this, ce(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
        } else return this._isUTC ? a : Lt(this)
    }

    function Os(e, t) {
        return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }

    function Fs(e) {
        return this.utcOffset(0, e)
    }

    function Ps(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Lt(this), "m")), this
    }

    function Cs() {
        if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var e = Wt(Er, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }

    function Rs(e) {
        return this.isValid() ? (e = e ? Q(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
    }

    function Ns() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Es() {
        if (!_(this._isDSTShifted)) return this._isDSTShifted;
        var e = {},
            t;
        return $e(e, this), e = fr(e), e._a ? (t = e._isUTC ? H(e._a) : Q(e._a), this._isDSTShifted = this.isValid() && Ts(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
    }

    function Ws() {
        return this.isValid() ? !this._isUTC : !1
    }

    function js() {
        return this.isValid() ? this._isUTC : !1
    }

    function pr() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1
    }
    var Ls = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Is = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function ce(e, t) {
        var r = e,
            a = null,
            s, l, u;
        return ft(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : S(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (a = Ls.exec(e)) ? (s = a[1] === "-" ? -1 : 1, r = {
            y: 0,
            d: F(a[ae]) * s,
            h: F(a[J]) * s,
            m: F(a[ue]) * s,
            s: F(a[me]) * s,
            ms: F(Et(a[Ye] * 1e3)) * s
        }) : (a = Is.exec(e)) ? (s = a[1] === "-" ? -1 : 1, r = {
            y: Fe(a[2], s),
            M: Fe(a[3], s),
            w: Fe(a[4], s),
            d: Fe(a[5], s),
            h: Fe(a[6], s),
            m: Fe(a[7], s),
            s: Fe(a[8], s)
        }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (u = As(Q(r.from), Q(r.to)), r = {}, r.ms = u.milliseconds, r.M = u.months), l = new dt(r), ft(e) && m(e, "_locale") && (l._locale = e._locale), ft(e) && m(e, "_isValid") && (l._isValid = e._isValid), l
    }
    ce.fn = dt.prototype, ce.invalid = Ms;

    function Fe(e, t) {
        var r = e && parseFloat(e.replace(",", "."));
        return (isNaN(r) ? 0 : r) * t
    }

    function yr(e, t) {
        var r = {};
        return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r
    }

    function As(e, t) {
        var r;
        return e.isValid() && t.isValid() ? (t = jt(t, e), e.isBefore(t) ? r = yr(e, t) : (r = yr(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : {
            milliseconds: 0,
            months: 0
        }
    }

    function _r(e, t) {
        return function(r, a) {
            var s, l;
            return a !== null && !isNaN(+a) && (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), l = r, r = a, a = l), s = ce(r, a), vr(this, s, e), this
        }
    }

    function vr(e, t, r, a) {
        var s = t._milliseconds,
            l = Et(t._days),
            u = Et(t._months);
        e.isValid() && (a = a ?? !0, u && Bt(e, Ve(e, "Month") + u * r), l && Qt(e, "Date", Ve(e, "Date") + l * r), s && e._d.setTime(e._d.valueOf() + s * r), a && n.updateOffset(e, l || u))
    }
    var Us = _r(1, "add"),
        Hs = _r(-1, "subtract");

    function gr(e) {
        return typeof e == "string" || e instanceof String
    }

    function $s(e) {
        return Z(e) || C(e) || gr(e) || S(e) || Qs(e) || zs(e) || e === null || e === void 0
    }

    function zs(e) {
        var t = w(e) && !d(e),
            r = !1,
            a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
            s, l, u = a.length;
        for (s = 0; s < u; s += 1) l = a[s], r = r || m(e, l);
        return t && r
    }

    function Qs(e) {
        var t = h(e),
            r = !1;
        return t && (r = e.filter(function(a) {
            return !S(a) && gr(e)
        }).length === 0), t && r
    }

    function Vs(e) {
        var t = w(e) && !d(e),
            r = !1,
            a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
            s, l;
        for (s = 0; s < a.length; s += 1) l = a[s], r = r || m(e, l);
        return t && r
    }

    function Gs(e, t) {
        var r = e.diff(t, "days", !0);
        return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse"
    }

    function qs(e, t) {
        arguments.length === 1 && (arguments[0] ? $s(arguments[0]) ? (e = arguments[0], t = void 0) : Vs(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
        var r = e || Q(),
            a = jt(r, this).startOf("day"),
            s = n.calendarFormat(this, a) || "sameElse",
            l = t && (f(t[s]) ? t[s].call(this, r) : t[s]);
        return this.format(l || this.localeData().calendar(s, this, Q(r)))
    }

    function Bs() {
        return new de(this)
    }

    function Zs(e, t) {
        var r = Z(e) ? e : Q(e);
        return this.isValid() && r.isValid() ? (t = y(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1
    }

    function Js(e, t) {
        var r = Z(e) ? e : Q(e);
        return this.isValid() && r.isValid() ? (t = y(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1
    }

    function Ks(e, t, r, a) {
        var s = Z(e) ? e : Q(e),
            l = Z(t) ? t : Q(t);
        return this.isValid() && s.isValid() && l.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (a[1] === ")" ? this.isBefore(l, r) : !this.isAfter(l, r))) : !1
    }

    function Xs(e, t) {
        var r = Z(e) ? e : Q(e),
            a;
        return this.isValid() && r.isValid() ? (t = y(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (a = r.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1
    }

    function en(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }

    function tn(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }

    function rn(e, t, r) {
        var a, s, l;
        if (!this.isValid()) return NaN;
        if (a = jt(e, this), !a.isValid()) return NaN;
        switch (s = (a.utcOffset() - this.utcOffset()) * 6e4, t = y(t), t) {
            case "year":
                l = ct(this, a) / 12;
                break;
            case "month":
                l = ct(this, a);
                break;
            case "quarter":
                l = ct(this, a) / 3;
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

    function ct(e, t) {
        if (e.date() < t.date()) return -ct(t, e);
        var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
            a = e.clone().add(r, "months"),
            s, l;
        return t - a < 0 ? (s = e.clone().add(r - 1, "months"), l = (t - a) / (a - s)) : (s = e.clone().add(r + 1, "months"), l = (t - a) / (s - a)), -(r + l) || 0
    }
    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function an() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function sn(e) {
        if (!this.isValid()) return null;
        var t = e !== !0,
            r = t ? this.clone().utc() : this;
        return r.year() < 0 || r.year() > 9999 ? G(r, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : f(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", G(r, "Z")) : G(r, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }

    function nn() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            t = "",
            r, a, s, l;
        return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", l = t + '[")]', this.format(r + a + s + l)
    }

    function on(e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var t = G(this, e);
        return this.localeData().postformat(t)
    }

    function ln(e, t) {
        return this.isValid() && (Z(e) && e.isValid() || Q(e).isValid()) ? ce({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function un(e) {
        return this.from(Q(), e)
    }

    function dn(e, t) {
        return this.isValid() && (Z(e) && e.isValid() || Q(e).isValid()) ? ce({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function fn(e) {
        return this.to(Q(), e)
    }

    function wr(e) {
        var t;
        return e === void 0 ? this._locale._abbr : (t = ye(e), t != null && (this._locale = t), this)
    }
    var kr = z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return e === void 0 ? this.localeData() : this.locale(e)
    });

    function br() {
        return this._locale
    }
    var ht = 1e3,
        je = 60 * ht,
        mt = 60 * je,
        Sr = (365 * 400 + 97) * 24 * mt;

    function Le(e, t) {
        return (e % t + t) % t
    }

    function Dr(e, t, r) {
        return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Sr : new Date(e, t, r).valueOf()
    }

    function Mr(e, t, r) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Sr : Date.UTC(e, t, r)
    }

    function cn(e) {
        var t, r;
        if (e = y(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (r = this._isUTC ? Mr : Dr, e) {
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
                t = this._d.valueOf(), t -= Le(t + (this._isUTC ? 0 : this.utcOffset() * je), mt);
                break;
            case "minute":
                t = this._d.valueOf(), t -= Le(t, je);
                break;
            case "second":
                t = this._d.valueOf(), t -= Le(t, ht);
                break
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
    }

    function hn(e) {
        var t, r;
        if (e = y(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (r = this._isUTC ? Mr : Dr, e) {
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
                t = this._d.valueOf(), t += mt - Le(t + (this._isUTC ? 0 : this.utcOffset() * je), mt) - 1;
                break;
            case "minute":
                t = this._d.valueOf(), t += je - Le(t, je) - 1;
                break;
            case "second":
                t = this._d.valueOf(), t += ht - Le(t, ht) - 1;
                break
        }
        return this._d.setTime(t), n.updateOffset(this, !0), this
    }

    function mn() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
    }

    function pn() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function yn() {
        return new Date(this.valueOf())
    }

    function _n() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }

    function vn() {
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

    function gn() {
        return this.isValid() ? this.toISOString() : null
    }

    function wn() {
        return Ue(this)
    }

    function kn() {
        return j({}, Y(this))
    }

    function bn() {
        return Y(this).overflow
    }

    function Sn() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    b("N", 0, 0, "eraAbbr"), b("NN", 0, 0, "eraAbbr"), b("NNN", 0, 0, "eraAbbr"), b("NNNN", 0, 0, "eraName"), b("NNNNN", 0, 0, "eraNarrow"), b("y", ["y", 1], "yo", "eraYear"), b("y", ["yy", 2], 0, "eraYear"), b("y", ["yyy", 3], 0, "eraYear"), b("y", ["yyyy", 4], 0, "eraYear"), g("N", It), g("NN", It), g("NNN", It), g("NNNN", Nn), g("NNNNN", En), I(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, r, a) {
        var s = r._locale.erasParse(e, a, r._strict);
        s ? Y(r).era = s : Y(r).invalidEra = e
    }), g("y", Re), g("yy", Re), g("yyy", Re), g("yyyy", Re), g("yo", Wn), I(["y", "yy", "yyy", "yyyy"], q), I(["yo"], function(e, t, r, a) {
        var s;
        r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[q] = r._locale.eraYearOrdinalParse(e, s) : t[q] = parseInt(e, 10)
    });

    function Dn(e, t) {
        var r, a, s, l = this._eras || ye("en")._eras;
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

    function Mn(e, t, r) {
        var a, s, l = this.eras(),
            u, p, T;
        for (e = e.toUpperCase(), a = 0, s = l.length; a < s; ++a)
            if (u = l[a].name.toUpperCase(), p = l[a].abbr.toUpperCase(), T = l[a].narrow.toUpperCase(), r) switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (p === e) return l[a];
                    break;
                case "NNNN":
                    if (u === e) return l[a];
                    break;
                case "NNNNN":
                    if (T === e) return l[a];
                    break
            } else if ([u, p, T].indexOf(e) >= 0) return l[a]
    }

    function Tn(e, t) {
        var r = e.since <= e.until ? 1 : -1;
        return t === void 0 ? n(e.since).year() : n(e.since).year() + (t - e.offset) * r
    }

    function xn() {
        var e, t, r, a = this.localeData().eras();
        for (e = 0, t = a.length; e < t; ++e)
            if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return a[e].name;
        return ""
    }

    function Yn() {
        var e, t, r, a = this.localeData().eras();
        for (e = 0, t = a.length; e < t; ++e)
            if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return a[e].narrow;
        return ""
    }

    function On() {
        var e, t, r, a = this.localeData().eras();
        for (e = 0, t = a.length; e < t; ++e)
            if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return a[e].abbr;
        return ""
    }

    function Fn() {
        var e, t, r, a, s = this.localeData().eras();
        for (e = 0, t = s.length; e < t; ++e)
            if (r = s[e].since <= s[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), s[e].since <= a && a <= s[e].until || s[e].until <= a && a <= s[e].since) return (this.year() - n(s[e].since).year()) * r + s[e].offset;
        return this.year()
    }

    function Pn(e) {
        return m(this, "_erasNameRegex") || At.call(this), e ? this._erasNameRegex : this._erasRegex
    }

    function Cn(e) {
        return m(this, "_erasAbbrRegex") || At.call(this), e ? this._erasAbbrRegex : this._erasRegex
    }

    function Rn(e) {
        return m(this, "_erasNarrowRegex") || At.call(this), e ? this._erasNarrowRegex : this._erasRegex
    }

    function It(e, t) {
        return t.erasAbbrRegex(e)
    }

    function Nn(e, t) {
        return t.erasNameRegex(e)
    }

    function En(e, t) {
        return t.erasNarrowRegex(e)
    }

    function Wn(e, t) {
        return t._eraYearOrdinalRegex || Re
    }

    function At() {
        var e = [],
            t = [],
            r = [],
            a = [],
            s, l, u, p, T, P = this.eras();
        for (s = 0, l = P.length; s < l; ++s) u = he(P[s].name), p = he(P[s].abbr), T = he(P[s].narrow), t.push(u), e.push(p), r.push(T), a.push(u), a.push(p), a.push(T);
        this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }
    b(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), b(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });

    function pt(e, t) {
        b(0, [e, e.length], 0, t)
    }
    pt("gggg", "weekYear"), pt("ggggg", "weekYear"), pt("GGGG", "isoWeekYear"), pt("GGGGG", "isoWeekYear"), g("G", at), g("g", at), g("GG", L, U), g("gg", L, U), g("GGGG", vt, Se), g("gggg", vt, Se), g("GGGGG", rt, oe), g("ggggg", rt, oe), Ee(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, r, a) {
        t[a.substr(0, 2)] = F(e)
    }), Ee(["gg", "GG"], function(e, t, r, a) {
        t[a] = n.parseTwoDigitYear(e)
    });

    function jn(e) {
        return Tr.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Ln(e) {
        return Tr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function In() {
        return pe(this.year(), 1, 4)
    }

    function An() {
        return pe(this.isoWeekYear(), 1, 4)
    }

    function Un() {
        var e = this.localeData()._week;
        return pe(this.year(), e.dow, e.doy)
    }

    function Hn() {
        var e = this.localeData()._week;
        return pe(this.weekYear(), e.dow, e.doy)
    }

    function Tr(e, t, r, a, s) {
        var l;
        return e == null ? xt(this, a, s).year : (l = pe(e, a, s), t > l && (t = l), $n.call(this, e, t, r, a, s))
    }

    function $n(e, t, r, a, s) {
        var l = rr(e, t, r, a, s),
            u = Oe(l.year, 0, l.dayOfYear);
        return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this
    }
    b("Q", 0, "Qo", "quarter"), g("Q", te), I("Q", function(e, t) {
        t[ne] = (F(e) - 1) * 3
    });

    function zn(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
    }
    b("D", ["DD", 2], "Do", "date"), g("D", L, Ne), g("DD", L, U), g("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), I(["D", "DD"], ae), I("Do", function(e, t) {
        t[ae] = F(e.match(L)[0])
    });
    var xr = We("Date", !0);
    b("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), g("DDD", tt), g("DDDD", be), I(["DDD", "DDDD"], function(e, t, r) {
        r._dayOfYear = F(e)
    });

    function Qn(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? t : this.add(e - t, "d")
    }
    b("m", ["mm", 2], 0, "minute"), g("m", L, gt), g("mm", L, U), I(["m", "mm"], ue);
    var Vn = We("Minutes", !1);
    b("s", ["ss", 2], 0, "second"), g("s", L, gt), g("ss", L, U), I(["s", "ss"], me);
    var Gn = We("Seconds", !1);
    b("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), b(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), b(0, ["SSS", 3], 0, "millisecond"), b(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10
    }), b(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100
    }), b(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3
    }), b(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4
    }), b(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5
    }), b(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6
    }), g("S", tt, te), g("SS", tt, U), g("SSS", tt, be);
    var Me, Yr;
    for (Me = "SSSS"; Me.length <= 9; Me += "S") g(Me, Re);

    function qn(e, t) {
        t[Ye] = F(("0." + e) * 1e3)
    }
    for (Me = "S"; Me.length <= 9; Me += "S") I(Me, qn);
    Yr = We("Milliseconds", !1), b("z", 0, 0, "zoneAbbr"), b("zz", 0, 0, "zoneName");

    function Bn() {
        return this._isUTC ? "UTC" : ""
    }

    function Zn() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    var c = de.prototype;
    c.add = Us, c.calendar = qs, c.clone = Bs, c.diff = rn, c.endOf = hn, c.format = on, c.from = ln, c.fromNow = un, c.to = dn, c.toNow = fn, c.get = $r, c.invalidAt = bn, c.isAfter = Zs, c.isBefore = Js, c.isBetween = Ks, c.isSame = Xs, c.isSameOrAfter = en, c.isSameOrBefore = tn, c.isValid = wn, c.lang = kr, c.locale = wr, c.localeData = br, c.max = gs, c.min = vs, c.parsingFlags = kn, c.set = zr, c.startOf = cn, c.subtract = Hs, c.toArray = _n, c.toObject = vn, c.toDate = yn, c.toISOString = sn, c.inspect = nn, typeof Symbol < "u" && Symbol.for != null && (c[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }), c.toJSON = gn, c.toString = an, c.unix = pn, c.valueOf = mn, c.creationData = Sn, c.eraName = xn, c.eraNarrow = Yn, c.eraAbbr = On, c.eraYear = Fn, c.year = zt, c.isLeapYear = Hr, c.weekYear = jn, c.isoWeekYear = Ln, c.quarter = c.quarters = zn, c.month = Zt, c.daysInMonth = ea, c.week = c.weeks = Aa, c.isoWeek = c.isoWeeks = Ua, c.weeksInYear = Un, c.weeksInWeekYear = Hn, c.isoWeeksInYear = In, c.isoWeeksInISOWeekYear = An, c.date = xr, c.day = c.days = ya, c.weekday = _a, c.isoWeekday = va, c.dayOfYear = Qn, c.hour = c.hours = Qa, c.minute = c.minutes = Vn, c.second = c.seconds = Gn, c.millisecond = c.milliseconds = Yr, c.utcOffset = Ys, c.utc = Fs, c.local = Ps, c.parseZone = Cs, c.hasAlignedHourOffset = Rs, c.isDST = Ns, c.isLocal = Ws, c.isUtcOffset = js, c.isUtc = pr, c.isUTC = pr, c.zoneAbbr = Bn, c.zoneName = Zn, c.dates = z("dates accessor is deprecated. Use date instead.", xr), c.months = z("months accessor is deprecated. Use month instead", Zt), c.years = z("years accessor is deprecated. Use year instead", zt), c.zone = z("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Os), c.isDSTShifted = z("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Es);

    function Jn(e) {
        return Q(e * 1e3)
    }

    function Kn() {
        return Q.apply(null, arguments).parseZone()
    }

    function Or(e) {
        return e
    }
    var E = Mt.prototype;
    E.calendar = Da, E.longDateFormat = Ta, E.invalidDate = Ya, E.ordinal = Pa, E.preparse = Or, E.postformat = Or, E.relativeTime = Ra, E.pastFuture = Na, E.set = ba, E.eras = Dn, E.erasParse = Mn, E.erasConvertYear = Tn, E.erasAbbrRegex = Cn, E.erasNameRegex = Pn, E.erasNarrowRegex = Rn, E.months = Zr, E.monthsShort = Jr, E.monthsParse = Xr, E.monthsRegex = ra, E.monthsShortRegex = ta, E.week = Wa, E.firstDayOfYear = Ia, E.firstDayOfWeek = La, E.weekdays = fa, E.weekdaysMin = ha, E.weekdaysShort = ca, E.weekdaysParse = pa, E.weekdaysRegex = ga, E.weekdaysShortRegex = wa, E.weekdaysMinRegex = ka, E.isPM = $a, E.meridiem = Va;

    function yt(e, t, r, a) {
        var s = ye(),
            l = H().set(a, t);
        return s[r](l, e)
    }

    function Fr(e, t, r) {
        if (S(e) && (t = e, e = void 0), e = e || "", t != null) return yt(e, t, r, "month");
        var a, s = [];
        for (a = 0; a < 12; a++) s[a] = yt(e, a, r, "month");
        return s
    }

    function Ut(e, t, r, a) {
        typeof e == "boolean" ? (S(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, S(t) && (r = t, t = void 0), t = t || "");
        var s = ye(),
            l = e ? s._week.dow : 0,
            u, p = [];
        if (r != null) return yt(t, (r + l) % 7, a, "day");
        for (u = 0; u < 7; u++) p[u] = yt(t, (u + l) % 7, a, "day");
        return p
    }

    function Xn(e, t) {
        return Fr(e, t, "months")
    }

    function ei(e, t) {
        return Fr(e, t, "monthsShort")
    }

    function ti(e, t, r) {
        return Ut(e, t, r, "weekdays")
    }

    function ri(e, t, r) {
        return Ut(e, t, r, "weekdaysShort")
    }

    function ai(e, t, r) {
        return Ut(e, t, r, "weekdaysMin")
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
    }), n.lang = z("moment.lang is deprecated. Use moment.locale instead.", De), n.langData = z("moment.langData is deprecated. Use moment.localeData instead.", ye);
    var _e = Math.abs;

    function si() {
        var e = this._data;
        return this._milliseconds = _e(this._milliseconds), this._days = _e(this._days), this._months = _e(this._months), e.milliseconds = _e(e.milliseconds), e.seconds = _e(e.seconds), e.minutes = _e(e.minutes), e.hours = _e(e.hours), e.months = _e(e.months), e.years = _e(e.years), this
    }

    function Pr(e, t, r, a) {
        var s = ce(t, r);
        return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
    }

    function ni(e, t) {
        return Pr(this, e, t, 1)
    }

    function ii(e, t) {
        return Pr(this, e, t, -1)
    }

    function Cr(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function oi() {
        var e = this._milliseconds,
            t = this._days,
            r = this._months,
            a = this._data,
            s, l, u, p, T;
        return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Cr(Ht(r) + t) * 864e5, t = 0, r = 0), a.milliseconds = e % 1e3, s = le(e / 1e3), a.seconds = s % 60, l = le(s / 60), a.minutes = l % 60, u = le(l / 60), a.hours = u % 24, t += le(u / 24), T = le(Rr(t)), r += T, t -= Cr(Ht(T)), p = le(r / 12), r %= 12, a.days = t, a.months = r, a.years = p, this
    }

    function Rr(e) {
        return e * 4800 / 146097
    }

    function Ht(e) {
        return e * 146097 / 4800
    }

    function li(e) {
        if (!this.isValid()) return NaN;
        var t, r, a = this._milliseconds;
        if (e = y(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + a / 864e5, r = this._months + Rr(t), e) {
            case "month":
                return r;
            case "quarter":
                return r / 3;
            case "year":
                return r / 12
        } else switch (t = this._days + Math.round(Ht(this._months)), e) {
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

    function ve(e) {
        return function() {
            return this.as(e)
        }
    }
    var Nr = ve("ms"),
        ui = ve("s"),
        di = ve("m"),
        fi = ve("h"),
        ci = ve("d"),
        hi = ve("w"),
        mi = ve("M"),
        pi = ve("Q"),
        yi = ve("y"),
        _i = Nr;

    function vi() {
        return ce(this)
    }

    function gi(e) {
        return e = y(e), this.isValid() ? this[e + "s"]() : NaN
    }

    function Pe(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var wi = Pe("milliseconds"),
        ki = Pe("seconds"),
        bi = Pe("minutes"),
        Si = Pe("hours"),
        Di = Pe("days"),
        Mi = Pe("months"),
        Ti = Pe("years");

    function xi() {
        return le(this.days() / 7)
    }
    var ge = Math.round,
        Ie = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };

    function Yi(e, t, r, a, s) {
        return er.call(s, t || 1, !!r, e, a)
    }

    function Oi(e, t, r, a) {
        var s = ce(e).abs(),
            l = ge(s.as("s")),
            u = ge(s.as("m")),
            p = ge(s.as("h")),
            T = ge(s.as("d")),
            P = ge(s.as("M")),
            K = ge(s.as("w")),
            we = ge(s.as("y")),
            Te = l <= r.ss && ["s", l] || l < r.s && ["ss", l] || u <= 1 && ["m"] || u < r.m && ["mm", u] || p <= 1 && ["h"] || p < r.h && ["hh", p] || T <= 1 && ["d"] || T < r.d && ["dd", T];
        return r.w != null && (Te = Te || K <= 1 && ["w"] || K < r.w && ["ww", K]), Te = Te || P <= 1 && ["M"] || P < r.M && ["MM", P] || we <= 1 && ["y"] || ["yy", we], Te[2] = t, Te[3] = +e > 0, Te[4] = a, Yi.apply(null, Te)
    }

    function Fi(e) {
        return e === void 0 ? ge : typeof e == "function" ? (ge = e, !0) : !1
    }

    function Pi(e, t) {
        return Ie[e] === void 0 ? !1 : t === void 0 ? Ie[e] : (Ie[e] = t, e === "s" && (Ie.ss = t - 1), !0)
    }

    function Ci(e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var r = !1,
            a = Ie,
            s, l;
        return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (a = j(j({}, Ie), t || {}), t.s != null && t.ss == null && (a.ss = t.s - 1)), s = this.localeData(), l = Oi(this, !r, a, s), r && (l = tr.call(s, +this, l)), s.postformat(l)
    }
    var $t = Math.abs;

    function Ae(e) {
        return (e > 0) - (e < 0) || +e
    }

    function _t() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = $t(this._milliseconds) / 1e3,
            t = $t(this._days),
            r = $t(this._months),
            a, s, l, u, p = this.asSeconds(),
            T, P, K, we;
        return p ? (a = le(e / 60), s = le(a / 60), e %= 60, a %= 60, l = le(r / 12), r %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", T = p < 0 ? "-" : "", P = Ae(this._months) !== Ae(p) ? "-" : "", K = Ae(this._days) !== Ae(p) ? "-" : "", we = Ae(this._milliseconds) !== Ae(p) ? "-" : "", T + "P" + (l ? P + l + "Y" : "") + (r ? P + r + "M" : "") + (t ? K + t + "D" : "") + (s || a || e ? "T" : "") + (s ? we + s + "H" : "") + (a ? we + a + "M" : "") + (e ? we + u + "S" : "")) : "P0D"
    }
    var N = dt.prototype;
    N.isValid = Ds, N.abs = si, N.add = ni, N.subtract = ii, N.as = li, N.asMilliseconds = Nr, N.asSeconds = ui, N.asMinutes = di, N.asHours = fi, N.asDays = ci, N.asWeeks = hi, N.asMonths = mi, N.asQuarters = pi, N.asYears = yi, N.valueOf = _i, N._bubble = oi, N.clone = vi, N.get = gi, N.milliseconds = wi, N.seconds = ki, N.minutes = bi, N.hours = Si, N.days = Di, N.weeks = xi, N.months = Mi, N.years = Ti, N.humanize = Ci, N.toISOString = _t, N.toString = _t, N.toJSON = _t, N.locale = wr, N.localeData = br, N.toIsoString = z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", _t), N.lang = kr, b("X", 0, 0, "unix"), b("x", 0, 0, "valueOf"), g("x", at), g("X", Wr), I("X", function(e, t, r) {
        r._d = new Date(parseFloat(e) * 1e3)
    }), I("x", function(e, t, r) {
        r._d = new Date(F(e))
    }); //! moment.js
    return n.version = "2.31.0", o(Q), n.fn = c, n.min = ws, n.max = ks, n.now = bs, n.utc = H, n.unix = Jn, n.months = Xn, n.isDate = C, n.locale = De, n.invalid = xe, n.duration = ce, n.isMoment = Z, n.weekdays = ti, n.parseZone = Kn, n.localeData = ye, n.isDuration = ft, n.monthsShort = ei, n.weekdaysMin = ai, n.defineLocale = Ft, n.updateLocale = Za, n.locales = Ja, n.weekdaysShort = ri, n.normalizeUnits = y, n.relativeTimeRounding = Fi, n.relativeTimeThreshold = Pi, n.calendarFormat = Gs, n.prototype = c, n.HTML5_FMT = {
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
        n = Array.isArray || function(f) {
            return i.call(f) === "[object Array]"
        };

    function o(k) {
        return typeof k == "function"
    }

    function h(k) {
        return n(k) ? "array" : typeof k
    }

    function w(k) {
        return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function m(k, f) {
        return k != null && typeof k == "object" && f in k
    }

    function d(k, f) {
        return k != null && typeof k != "object" && k.hasOwnProperty && k.hasOwnProperty(f)
    }
    var _ = RegExp.prototype.test;

    function S(k, f) {
        return _.call(k, f)
    }
    var C = /\S/;

    function W(k) {
        return !S(C, k)
    }
    var j = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };

    function H(k) {
        return String(k).replace(/[&<>"'`=\/]/g, function(v) {
            return j[v]
        })
    }
    var ie = /\s*/,
        Y = /\s+/,
        Ce = /\s*=/,
        Ue = /\s*\}/,
        xe = /#|\^|\/|>|\{|&|=|!/;

    function Je(k, f) {
        if (!k) return [];
        var v = !1,
            y = [],
            D = [],
            M = [],
            O = !1,
            x = !1,
            R = "",
            V = 0;

        function ee() {
            if (O && !x)
                for (; M.length;) delete D[M.pop()];
            else M = [];
            O = !1, x = !1
        }
        var re, b, Ke;

        function Xe(se) {
            if (typeof se == "string" && (se = se.split(Y, 2)), !n(se) || se.length !== 2) throw new Error("Invalid tags: " + se);
            re = new RegExp(w(se[0]) + "\\s*"), b = new RegExp("\\s*" + w(se[1])), Ke = new RegExp("\\s*" + w("}" + se[1]))
        }
        Xe(f || z.tags);
        for (var G = new de(k), fe, te, U, be, Se, oe; !G.eos();) {
            if (fe = G.pos, U = G.scanUntil(re), U)
                for (var L = 0, et = U.length; L < et; ++L) be = U.charAt(L), W(be) ? (M.push(D.length), R += be) : (x = !0, v = !0, R += " "), D.push(["text", be, fe, fe + 1]), fe += 1, be === `
` && (ee(), R = "", V = 0, v = !1);
            if (!G.scan(re)) break;
            if (O = !0, te = G.scan(xe) || "name", G.scan(ie), te === "=" ? (U = G.scanUntil(Ce), G.scan(Ce), G.scanUntil(b)) : te === "{" ? (U = G.scanUntil(Ke), G.scan(Ue), G.scanUntil(b), te = "&") : U = G.scanUntil(b), !G.scan(b)) throw new Error("Unclosed tag at " + G.pos);
            if (te == ">" ? Se = [te, U, fe, G.pos, R, V, v] : Se = [te, U, fe, G.pos], V++, D.push(Se), te === "#" || te === "^") y.push(Se);
            else if (te === "/") {
                if (oe = y.pop(), !oe) throw new Error('Unopened section "' + U + '" at ' + fe);
                if (oe[1] !== U) throw new Error('Unclosed section "' + oe[1] + '" at ' + fe)
            } else te === "name" || te === "{" || te === "&" ? x = !0 : te === "=" && Xe(U)
        }
        if (ee(), oe = y.pop(), oe) throw new Error('Unclosed section "' + oe[1] + '" at ' + G.pos);
        return $e(He(D))
    }

    function He(k) {
        for (var f = [], v, y, D = 0, M = k.length; D < M; ++D) v = k[D], v && (v[0] === "text" && y && y[0] === "text" ? (y[1] += v[1], y[3] = v[3]) : (f.push(v), y = v));
        return f
    }

    function $e(k) {
        for (var f = [], v = f, y = [], D, M, O = 0, x = k.length; O < x; ++O) switch (D = k[O], D[0]) {
            case "#":
            case "^":
                v.push(D), y.push(D), v = D[4] = [];
                break;
            case "/":
                M = y.pop(), M[5] = D[2], v = y.length > 0 ? y[y.length - 1][4] : f;
                break;
            default:
                v.push(D)
        }
        return f
    }

    function de(k) {
        this.string = k, this.tail = k, this.pos = 0
    }
    de.prototype.eos = function() {
        return this.tail === ""
    }, de.prototype.scan = function(f) {
        var v = this.tail.match(f);
        if (!v || v.index !== 0) return "";
        var y = v[0];
        return this.tail = this.tail.substring(y.length), this.pos += y.length, y
    }, de.prototype.scanUntil = function(f) {
        var v = this.tail.search(f),
            y;
        switch (v) {
            case -1:
                y = this.tail, this.tail = "";
                break;
            case 0:
                y = "";
                break;
            default:
                y = this.tail.substring(0, v), this.tail = this.tail.substring(v)
        }
        return this.pos += y.length, y
    };

    function Z(k, f) {
        this.view = k, this.cache = {
            ".": this.view
        }, this.parent = f
    }
    Z.prototype.push = function(f) {
        return new Z(f, this)
    }, Z.prototype.lookup = function(f) {
        var v = this.cache,
            y;
        if (v.hasOwnProperty(f)) y = v[f];
        else {
            for (var D = this, M, O, x, R = !1; D;) {
                if (f.indexOf(".") > 0)
                    for (M = D.view, O = f.split("."), x = 0; M != null && x < O.length;) x === O.length - 1 && (R = m(M, O[x]) || d(M, O[x])), M = M[O[x++]];
                else M = D.view[f], R = m(D.view, f);
                if (R) {
                    y = M;
                    break
                }
                D = D.parent
            }
            v[f] = y
        }
        return o(y) && (y = y.call(this.view)), y
    };

    function X() {
        this.templateCache = {
            _cache: {},
            set: function(f, v) {
                this._cache[f] = v
            },
            get: function(f) {
                return this._cache[f]
            },
            clear: function() {
                this._cache = {}
            }
        }
    }
    X.prototype.clearCache = function() {
        typeof this.templateCache < "u" && this.templateCache.clear()
    }, X.prototype.parse = function(f, v) {
        var y = this.templateCache,
            D = f + ":" + (v || z.tags).join(":"),
            M = typeof y < "u",
            O = M ? y.get(D) : void 0;
        return O == null && (O = Je(f, v), M && y.set(D, O)), O
    }, X.prototype.render = function(f, v, y, D) {
        var M = this.getConfigTags(D),
            O = this.parse(f, M),
            x = v instanceof Z ? v : new Z(v, void 0);
        return this.renderTokens(O, x, y, f, D)
    }, X.prototype.renderTokens = function(f, v, y, D, M) {
        for (var O = "", x, R, V, ee = 0, re = f.length; ee < re; ++ee) V = void 0, x = f[ee], R = x[0], R === "#" ? V = this.renderSection(x, v, y, D, M) : R === "^" ? V = this.renderInverted(x, v, y, D, M) : R === ">" ? V = this.renderPartial(x, v, y, M) : R === "&" ? V = this.unescapedValue(x, v) : R === "name" ? V = this.escapedValue(x, v, M) : R === "text" && (V = this.rawValue(x)), V !== void 0 && (O += V);
        return O
    }, X.prototype.renderSection = function(f, v, y, D, M) {
        var O = this,
            x = "",
            R = v.lookup(f[1]);

        function V(b) {
            return O.render(b, v, y, M)
        }
        if (R) {
            if (n(R))
                for (var ee = 0, re = R.length; ee < re; ++ee) x += this.renderTokens(f[4], v.push(R[ee]), y, D, M);
            else if (typeof R == "object" || typeof R == "string" || typeof R == "number") x += this.renderTokens(f[4], v.push(R), y, D, M);
            else if (o(R)) {
                if (typeof D != "string") throw new Error("Cannot use higher-order sections without the original template");
                R = R.call(v.view, D.slice(f[3], f[5]), V), R != null && (x += R)
            } else x += this.renderTokens(f[4], v, y, D, M);
            return x
        }
    }, X.prototype.renderInverted = function(f, v, y, D, M) {
        var O = v.lookup(f[1]);
        if (!O || n(O) && O.length === 0) return this.renderTokens(f[4], v, y, D, M)
    }, X.prototype.indentPartial = function(f, v, y) {
        for (var D = v.replace(/[^ \t]/g, ""), M = f.split(`
`), O = 0; O < M.length; O++) M[O].length && (O > 0 || !y) && (M[O] = D + M[O]);
        return M.join(`
`)
    }, X.prototype.renderPartial = function(f, v, y, D) {
        if (y) {
            var M = this.getConfigTags(D),
                O = o(y) ? y(f[1]) : y[f[1]];
            if (O != null) {
                var x = f[6],
                    R = f[5],
                    V = f[4],
                    ee = O;
                R == 0 && V && (ee = this.indentPartial(O, V, x));
                var re = this.parse(ee, M);
                return this.renderTokens(re, v, y, ee, D)
            }
        }
    }, X.prototype.unescapedValue = function(f, v) {
        var y = v.lookup(f[1]);
        if (y != null) return y
    }, X.prototype.escapedValue = function(f, v, y) {
        var D = this.getConfigEscape(y) || z.escape,
            M = v.lookup(f[1]);
        if (M != null) return typeof M == "number" && D === z.escape ? String(M) : D(M)
    }, X.prototype.rawValue = function(f) {
        return f[1]
    }, X.prototype.getConfigTags = function(f) {
        return n(f) ? f : f && typeof f == "object" ? f.tags : void 0
    }, X.prototype.getConfigEscape = function(f) {
        if (f && typeof f == "object" && !n(f)) return f.escape
    };
    var z = {
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
            set templateCache(k) {
                ke.templateCache = k
            },
            get templateCache() {
                return ke.templateCache
            }
        },
        ke = new X;
    return z.clearCache = function() {
        return ke.clearCache()
    }, z.parse = function(f, v) {
        return ke.parse(f, v)
    }, z.render = function(f, v, y, D) {
        if (typeof f != "string") throw new TypeError('Invalid template! Template should be a "string" but "' + h(f) + '" was given as the first argument for mustache#render(template, view, partials)');
        return ke.render(f, v, y, D)
    }, z.escape = H, z.Scanner = de, z.Context = Z, z.Writer = X, z
}));
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
                h = moment(o + " " + i);
            return h.isValid() ? h.format(springSpace.timeFormat) : n
        },
        formatDate: function(i, n) {
            var o = moment(i);
            return o.isValid() ? o.format(this.dateFormat) : typeof n < "u" ? n : null
        },
        createDateTimeMoment: function(i, n) {
            (typeof n > "u" || n === "") && (n = moment().startOf("day").format(springSpace.timeFormat));
            var o = i + " " + n,
                h = springSpace.dateFormat + " " + springSpace.timeFormat;
            return moment(o, h)
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
    }, this.setCookie = function(n, o, h) {
        var w = new Date;
        w.setDate(w.getDate() + h);
        var m = encodeURI(o) + (h === null ? "" : "; expires=" + w.toUTCString()),
            d = location.protocol === "https:" ? "; secure" : "";
        document.cookie = n + "=" + m + "; path=/; samesite=lax;" + d, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(n) {
        var o, h, w, m, d = document.cookie.split(";");
        for (o = 0; o < d.length; o++)
            if (h = d[o].indexOf("="), w = d[o].substr(0, h).replace(/^\s+|\s+$/g, ""), w === n) return m = d[o].substr(h + 1), decodeURI(m);
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
                    _ = d.querySelector("ul");
                if (this.isAdvancedUpload) {
                    var S = [],
                        C = 0;
                    this.droppedFiles.forEach(function(j) {
                        var H = document.createElement("li");
                        H.innerText = j.name, S.push(H), C += j.size
                    }), _.innerHTML = "", S.length === 0 ? d.classList.add("hidden") : (d.classList.remove("hidden"), S.forEach(function(j) {
                        _.appendChild(j)
                    })), this.max_files > 0 && S.length > this.max_files && this.showError(o.max_files + " file uploads maximum."), this.batch_files === !1 && this.max_upload_size > 0 && C > this.max_upload_size && this.showError("Files total " + o.bytesToMB(C) + " MB which exceeds the maximum of " + o.bytesToMB(this.max_upload_size) + " MB at a time.")
                } else {
                    if (this.$input.val() === "") {
                        d.classList.add("hidden"), _.innerHTML = "";
                        return
                    }
                    d.classList.remove("hidden");
                    var W = document.createElement("li");
                    W.innerText = this.$input.val().split("\\").slice(-1).pop(), _.appendChild(W), this.$label.find(".filetext").addClass("hidden")
                }
            }
        }, this.reset = function() {
            o.$form[0].reset(), o.removeError(), o.droppedFiles = [], o.batch.current = 0, o.batch.total = 0, o.stopProgress(), o.showFiles(), o.$input.removeClass("has-focus")
        }, this.clearFiles = function() {
            o.resetFileInput(), o.droppedFiles = [], o.batch.current = 0, o.batch.total = 0, o.showFiles()
        }, this.resetFileInput = function() {
            if (this.$input.length !== 0) {
                var d = jQuery("<form>"),
                    _ = this.$input.clone(!0).appendTo(d);
                d[0].reset(), this.$input.replaceWith(_), this.$input = _
            }
        }, this.showError = function(d) {
            if (this.$droparea.length !== 0) {
                var _ = document.createElement("p");
                if (_.innerText = d, this.$form.find("div.s-ui-filedrop-error").length > 0) {
                    this.$form.find("div.s-ui-filedrop-error").append(_);
                    return
                }
                var S = document.createElement("div");
                S.classList.add("alert"), S.classList.add("alert-danger"), S.classList.add("s-ui-filedrop-error"), S.setAttribute("role", "alert"), S.appendChild(_), this.$droparea.prepend(S)
            }
        }, this.removeError = function() {
            this.$form.find("div.s-ui-filedrop-error").empty()
        }, this.countFiles = function() {
            return this.$input.length === 0 ? 0 : this.isAdvancedUpload ? this.droppedFiles.length : this.$input.val() !== "" ? 1 : 0
        }, this.startProgress = function() {
            if (this.$progress === null || this.$progress.length === 1 && this.$progress.html() === "") {
                var d = !0;
                this.$progress = this.$form.find("div.s-ui-filedrop-progress"), this.$progress.length === 0 && (d = !1, this.$progress = jQuery("<div></div>").addClass("s-ui-filedrop-progress"));
                var _ = jQuery("<div></div>").attr({
                        id: "s-ui-filedrop-progresslabel"
                    }).text("Uploading files"),
                    S = jQuery("<div></div>").addClass("s-ui-filedrop-progbar").attr({
                        role: "progressbar",
                        "aria-valuenow": "0",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-labelledby": "s-ui-filedrop-progresslabel"
                    });
                S.append(document.createElement("span")), this.$progress.append([_, S]), d || this.$droparea.prepend(this.$progress)
            }
        }, this.updateProgress = function(d, _) {
            var S = Math.round(d / _ * 100);
            if (this.$progress.find("span:first").css("width", S + "%"), this.$progress.find(".s-ui-filedrop-progbar").attr("aria-valuenow", S), this.batch.total > 1 && S < 50) {
                var C = this.$progress.find("div:first");
                C.html("Uploading file batch (" + this.batch.current + "/" + this.batch.total + ")")
            }
        }, this.stopProgress = function() {
            this.$progress !== null && this.$progress.empty()
        }, this.bytesToMB = function(d) {
            return (parseInt(d, 10) / (1024 * 1024)).toFixed(1)
        }, this.addFiles = function(d) {
            if (o.max_files > 0 && o.countFiles() + d.length > o.max_files) return o.showError(o.max_files + " file uploads maximum."), !1;
            var _ = 0;
            o.droppedFiles.forEach(function(ie) {
                _ += ie.size
            });
            for (var S = [], C = 0; C < d.length; C++) {
                var W = d[C];
                if (o.droppedFiles.length > 0) {
                    var j = !1;
                    if (o.droppedFiles.forEach(function(ie) {
                            ie.name === W.name && (j = !0)
                        }), j) {
                        S.push(C);
                        continue
                    }
                }
                if (this.allowedFileExtensions.length > 0) {
                    let ie = W.name.split(".").pop().toLowerCase();
                    if (this.allowedFileExtensions.indexOf(ie) === -1) {
                        o.showError(this.translations.invalidExtension + W.name), S.push(C);
                        continue
                    }
                }
                if (this.allowedMimeTypes.length > 0 && this.allowedMimeTypes.indexOf(W.type) === -1) {
                    o.showError("File: " + W.name + " is not an allowed file type."), S.push(C);
                    continue
                }
                o.max_file_size > 0 && W.size > o.max_file_size ? (o.showError("File: " + W.name + " is greater than allowed file size of " + o.bytesToMB(o.max_file_size) + " MB."), S.push(C)) : o.batch_files === !1 && _ + W.size > o.max_upload_size ? (o.showError("File: " + W.name + " causes files to go over maximum upload size of " + o.bytesToMB(o.max_upload_size) + " MB at a time."), S.push(C)) : _ += W.size
            }
            if (o.batch_files === !1 && o.max_upload_size > 0 && _ > o.max_upload_size) return o.showError("Files total " + _ + " bytes which exceeds the maximum of " + o.bytesToMB(o.max_upload_size) + " MB at a time."), !1;
            for (var H = 0; H < d.length; H++) S.indexOf(H) === -1 && o.droppedFiles.push(d[H]);
            return o.droppedFiles.length !== 0
        }, this.batchFiles = function() {
            var d = [],
                _ = [];
            if (!this.batch_files) return d.push(this.droppedFiles), d;
            var S = 1;
            return d.push([]), _.push(0), this.droppedFiles.forEach(function(C) {
                var W = !1;
                if (_.forEach(function(H, ie) {
                        !W && H + C.size < o.max_upload_size && (_[ie] = H + C.size, d[ie].push(C), W = !0)
                    }), !W) {
                    _.push(0), S++, d.push([]);
                    var j = S - 1;
                    _[j] = C.size, d[j].push(C)
                }
            }), d
        }, this.isLastBatch = function() {
            return this.batch.current >= this.batch.total
        }, this.ajaxUpload = function() {
            o.$form.find('input[name="batch_current"]').val(o.batch.current);
            var d = new FormData(o.$form[0]);
            typeof d.delete == "function" && d.delete(o.$input.attr("name")), o.batchedFiles[o.batch.current - 1].forEach(function(_) {
                d.append(o.$input.attr("name"), _)
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
                success: function(_) {
                    o.callback(_, o)
                },
                xhr: function() {
                    var _ = jQuery.ajaxSettings.xhr();
                    return o.countFiles() > 0 && (_.upload.onprogress = function(S) {
                        o.updateProgress(S.loaded, S.total)
                    }), _
                }
            }).fail(function(_) {
                o.error_callback(_, o)
            })
        }, this.isAdvancedUpload && this.$input.length > 0) {
        if (this.$droparea.addClass("has-advanced-upload"), this.batch_files) {
            var h = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_current"
                }).val("0"),
                w = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_total"
                }).val("0");
            this.$form.prepend([h, w])
        }
        this.$droparea.on("drag dragstart dragend dragover dragenter dragleave drop", function(d) {
            d.preventDefault(), d.stopPropagation()
        }).on("dragover dragenter", function() {
            o.$droparea.addClass("is-dragover")
        }).on("dragleave dragend drop", function() {
            o.$droparea.removeClass("is-dragover")
        }).on("drop", function(d) {
            var _ = o.addFiles(d.originalEvent.dataTransfer.files);
            o.showFiles(), _ === !0 && o.autoupload && o.$form.submit()
        }).on("click", function(d) {
            var _ = ["A", "I", "SPAN", "B", "STRONG", "BUTTON"],
                S = d.target.tagName;
            if (_.indexOf(S) !== -1) {
                var C = jQuery(d.target).closest("a, button");
                C.hasClass("s-ui-filedrop-clear") && (o.clearFiles(), o.removeError())
            }
        })
    }
    if (this.isAdvancedUpload || (this.$input.remove(), this.$droparea.remove()), this.$input.length > 0 && (this.$input.on("change", function(d) {
            if (d.target.files) {
                if (o.isAdvancedUpload) {
                    var _ = o.addFiles(d.target.files);
                    o.resetFileInput(), _ === !0 && o.autoupload && o.$form.submit()
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
            success: function(_) {
                o.callback(_, o)
            }
        }).fail(function(_) {
            o.error_callback(_, o)
        }))
    })
};

function disableButton(i, n) {
    typeof n > "u" && (n = ""), n == "" ? jQuery("#" + i).prop("disabled", !0) : jQuery("#" + i).html(n).prop("disabled", !0)
}

function enableButton(i, n) {
    typeof n > "u" && (n = ""), n == "" ? jQuery("#" + i).prop("disabled", !1) : jQuery("#" + i).html(n).prop("disabled", !1)
}

function ajaxDialog(i, n, o, h, w) {
    w = typeof w < "u" ? w : "Save", jQuery("#dialog").remove(), typeof h != "string" && (h = "");
    var m = "s-lc-ajax-modal",
        d = typeof bootstrap < "u",
        _ = d ? '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' : '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>',
        S = d ? "modal-footer justify-content-start" : "modal-footer",
        C = d ? "" : " pull-left",
        W = d ? "data-bs-dismiss" : "data-dismiss",
        j = '<h2 class="modal-title" id="myModalLabel">' + o + "</h2>",
        H = d ? j + _ : _ + j;
    return jQuery('<div class="modal fade" id="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog ' + h + '"><div class="modal-content"><div class="modal-header">' + H + '</div><div class="modal-body" id="' + m + '"></div><div class="' + S + '"><button type="button" id="modalbtn" class="btn btn-primary' + C + '">' + w + '</button> <button type="button" id="modalbtnc" class="btn btn-default' + C + '" ' + W + '="modal">Close</button></div></div></div></div>').appendTo("body"), jQuery("#" + m).load(i + "?" + n, function() {
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
    customValidateTime: function(i, n, o) {
        const h = i.validity;
        if (i.setCustomValidity(""), h.rangeUnderflow) {
            let w = i.getAttribute("min");
            i.setCustomValidity(n.replace("%time%", springSpace.formatTime(w)))
        }
        if (h.rangeOverflow) {
            let w = i.getAttribute("max");
            i.setCustomValidity(o.replace("%time%", springSpace.formatTime(w)))
        }
        return !0
    }
};
jQuery(function() {
    springSpace.setupLanguage(), setupBrowserDefaults(), setupLanguageDropdown(), springyCommon.setupCustomRequiredValidation()
});

function getCurrentTimelineInstance(i) {
    return typeof timelineInstance < "u" ? timelineInstance : typeof timelineInFocus < "u" && timelineInFocus !== null ? timelineInFocus : typeof springyPage < "u" && springyPage.timelineInstance ? springyPage.timelineInstance : timelineLocationMap[i]
}

function tgSetupDateManipulationVisuals() {
    springyDatepicker.setupBasic(".fc-goToDate-button", {
        startDate: new Date
    }), jQuery(".fc-goToNextAvailable-button").hide(), jQuery(".fc-button").prop("disabled", !0)
}

function tgSetupDateManipulationChangeHandler(i, n, o) {
    jQuery("#" + n).find(".fc-goToDate-button").on("changeDate", function() {
        var h = getCurrentTimelineInstance(o),
            w = springyDatepicker.getDate(this);
        springyFullCalendar.goToDate(h, w)
    }), i && jQuery(".fc-goToNextAvailable-button").on("click", function() {
        return timeGridOnClickGoToNextAvailable(jQuery(this), springyPage.locationId, springyPage.groupId, springyPage.itemId, !0)
    })
}

function timeGridOnClickGoToNextAvailable(i, n, o, h, w) {
    i.prop("disabled", !0);
    var m = jQuery("#s-lc-timegrid-loading");
    return m.show(), jQuery.ajax({
        type: "get",
        url: "/equipment/availability/nextdate",
        data: {
            lid: n,
            gid: o,
            eid: h,
            seatId: springyPage.seatId,
            zone: springyPage.zoneId,
            capacity: springyCommon.parseInt(jQuery("#capacity").val()),
            accessible: springyPage.isAccessible,
            powered: springyPage.isPowered,
            isEquipment: w,
            isSeatBooking: springyPage.isSeatBooking,
            pageIndex: springyPage.pageIndex,
            pageSize: springyPage.pageSize
        },
        dataType: "json"
    }).always(function() {
        i.prop("disabled", !1), m.hide()
    }).done(function(d) {
        var _ = jQuery("#s-lc-timegrid-loading").length > 0;
        w || springySpaces.setPageIndex(d.page), getCurrentTimelineInstance(n).gotoDate(d.date), tgSetupDateManipulationVisuals(), _ && springySpaces.createLoadingIndicator(), tgSetupDateManipulationChangeHandler(w, "eq-time-grid")
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
    var n = i.find(".icon-label.sr-only, .icon-label.visually-hidden").html() || "";
    return n.length > 0 ? n : i.attr("aria-label") || ""
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
                h = n % 2 === 1 ? "s-lc-eq-timegrid-even" : "s-lc-eq-timegrid-odd";
            o.addClass(h)
        }
}

function validateEmailAddress(i) {
    var n = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return n.test(i)
}

function escapeHtml(i) {
    var n = document.createElement("textarea");
    return n.textContent = i, n.innerHTML.replace(/"/g, "&quot;").replace(/'/g, "&#039;")
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
    showModal: function(i, n) {
        springyCommon.setLastFocusElement();
        let o = jQuery("div, button").addClass("s-lc-do-not-print");
        i.removeClass("s-lc-do-not-print"), i.find("div").removeClass("s-lc-do-not-print"), i.springshareModal({
            backdrop: "static",
            focus: n ?? !0
        }), i.on("shown.bs.modal", springyCommon.onModalLoadedEarly), i.on("hidden.bs.modal", function() {
            closeDialog(), o.removeClass("s-lc-do-not-print"), springyCommon.restoreLastFocusElement()
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
            h = "",
            w = i.split(" ");
        for (w.forEach(function(m) {
                var d = m.length;
                if (d !== 0) {
                    if (h.length === 0) {
                        h = m, o = d;
                        return
                    }
                    if (n === void 0 || o + d > n) {
                        h += "<br>" + m, o = d;
                        return
                    }
                    h += m, o += d
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
        i.off("keydown"), i.on("keydown", function(h) {
            var w = h.key ? h.key : h.code ? h.code : 0;
            o.indexOf(w) !== -1 && n(this)
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
        for (var h = document.querySelectorAll(i), w = 0; w < h.length; w++) h[w].addEventListener(n, o)
    },
    addIdNameModelsToSelect: function(i, n, o) {
        for (var h = 0; h < n.length; h++) {
            var w = n[h],
                m = w.id === o,
                d = m ? ' selected="selected"' : "";
            i.append('<option value="' + w.id + '"' + d + ">" + w.name + "</option>")
        }
    },
    safeGet: function(i, n, o) {
        for (var h = i, w = 0; w < n.length; w++) {
            var m = n[w];
            if (!(m in h)) return o;
            h = h[m]
        }
        return h
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
    sanitizeDateTimeValues: function(i, n, o, h) {
        for (let w = 0; w < n.length; w++) {
            let m = n[w],
                d = i.get(m);
            if (d === null || d === "") continue;
            let _ = jQuery("input[name=" + m + "]"),
                S = o(_).format(h);
            i.set(m, S)
        }
    },
    getFormSearchParams: function(i, n) {
        var o = jQuery(i);
        if (o.length === 0) return new URLSearchParams;
        typeof springyCkEditor < "u" && springyCkEditor.updateParentElements();
        var h = new URLSearchParams(new FormData(o[0]));
        return n !== void 0 && (n.dates !== void 0 && springyCommon.sanitizeDateTimeValues(h, n.dates, springyDatepicker.getMoment, springSpace.phpDateFormat), n.times !== void 0 && springyCommon.sanitizeDateTimeValues(h, n.times, springyTimepicker.getMoment, springSpace.nativeTimeFormat)), h
    },
    createArrayFromSearchParams: function(i) {
        var n = {};
        for (const [w, m] of i.entries()) {
            var o = w.endsWith("[]"),
                h = w.replace("[]", "");
            if (!n.hasOwnProperty(h)) {
                if (o) {
                    n[h] = [m];
                    continue
                }
                n[h] = m;
                continue
            }
            if (!Array.isArray(n[h])) {
                n[h] = [n[h], m];
                continue
            }
            n[h].push(m)
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
        return i.length === n.length && i.every((o, h) => o === n[h])
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
    },
    setSearchResultPageTitle: function(i) {
        var n = jQuery(i);
        n.length && (n.focus(), document.title = n.text().trim() + " - " + document.title)
    },
    isInIframe: function() {
        try {
            return window.self !== window.top
        } catch {
            return !0
        }
    },
    requestStorageAccessIfNeeded: function() {
        return !springyCommon.isInIframe() || typeof document.requestStorageAccess != "function" ? Promise.resolve() : document.requestStorageAccess().catch(function() {})
    }
};