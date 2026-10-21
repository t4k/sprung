/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
 */
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2024 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function(n) {
            t(n).on("click", e, this.close)
        };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        var i = t(this),
            r = i.attr("data-target");
        r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), r = "#" === r ? [] : r;
        var a = t(document).find(r);

        function o() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]',
        n = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

    function i(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? t(document).find(n) : null;
        return i && i.length ? i : e.parent()
    }

    function r(n) {
        n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each(function() {
            var e = t(this),
                r = i(e),
                a = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", a)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
        }))
    }
    n.VERSION = "3.4.1", n.prototype.toggle = function(e) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var a = i(n),
                o = a.hasClass("open");
            if (r(), !o) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", r);
                var s = {
                    relatedTarget: this
                };
                if (a.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, n.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = t(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var a = i(r),
                    o = a.hasClass("open");
                if (!o && 27 != n.which || o && 27 == n.which) return 27 == n.which && a.find(e).trigger("focus"), r.trigger("click");
                var s = a.find(".dropdown-menu li:not(.disabled):visible a");
                if (s.length) {
                    var l = s.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.dropdown");
            r || i.data("bs.dropdown", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };

    function n(n, i) {
        return this.each(function() {
            var r = t(this),
                a = r.data("bs.modal"),
                o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
            a || r.data("bs.modal", a = new e(this, o)), "string" == typeof n ? a[n](i) : o.show && a.show(i)
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(n) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: n
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var a = t.Event("shown.bs.modal", {
                relatedTarget: n
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(a)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
        }))
    }, e.prototype.hide = function(n) {
        n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(n) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
            a ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                i.removeBackdrop(), n && n()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : o()
        } else n && n()
    }, e.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, e.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function(e, i) {
            var r = i.style.paddingRight,
                a = t(i).css("padding-right");
            t(i).data("padding-right", r).css("padding-right", parseFloat(a) + n + "px")
        }))
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each(function(e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
        })
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this),
            r = i.attr("href"),
            a = i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(document).find(a),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && e.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), n.call(o, s, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"],
        n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        i = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function o(e, i) {
        var o = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(o, i)) return -1 === t.inArray(o, n) || Boolean(e.nodeValue.match(r) || e.nodeValue.match(a));
        for (var s = t(i).filter(function(t, e) {
                return e instanceof RegExp
            }), l = 0, c = s.length; l < c; l++)
            if (o.match(s[l])) return !0;
        return !1
    }

    function s(e, n, i) {
        if (0 === e.length) return e;
        if (i && "function" == typeof i) return i(e);
        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
        var r = document.implementation.createHTMLDocument("sanitization");
        r.body.innerHTML = e;
        for (var a = t.map(n, function(t, e) {
                return e
            }), s = t(r.body).find("*"), l = 0, c = s.length; l < c; l++) {
            var u = s[l],
                d = u.nodeName.toLowerCase();
            if (-1 !== t.inArray(d, a))
                for (var h = t.map(u.attributes, function(t) {
                        return t
                    }), f = [].concat(n["*"] || [], n[d] || []), p = 0, g = h.length; p < g; p++) o(h[p], f) || u.removeAttribute(h[p].nodeName);
            else u.parentNode.removeChild(u)
        }
        return r.body.innerHTML
    }
    var l = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    l.VERSION = "3.4.1", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: i
    }, l.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), a = r.length; a--;) {
            var o = r[a];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var s = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, l.prototype.getDefaults = function() {
        return l.DEFAULTS
    }, l.prototype.getOptions = function(n) {
        var i = this.$element.data();
        for (var r in i) i.hasOwnProperty(r) && -1 !== t.inArray(r, e) && delete i[r];
        return (n = t.extend({}, this.getDefaults(), i, n)).delay && "number" == typeof n.delay && (n.delay = {
            show: n.delay,
            hide: n.delay
        }), n.sanitize && (n.template = s(n.template, n.whiteList, n.sanitizeFn)), n
    }, l.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, l.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
            n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)
        }
    }, l.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, l.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }, l.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                c = s.test(o);
            c && (o = o.replace(s, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(t(document).find(this.options.container)) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (c) {
                var f = o,
                    p = this.getPosition(this.$viewport);
                o = "bottom" == o && u.bottom + h > p.bottom ? "top" : "top" == o && u.top - h < p.top ? "bottom" : "right" == o && u.right + d > p.width ? "left" : "left" == o && u.left - d < p.left ? "right" : o, r.removeClass(f).addClass(o)
            }
            var g = this.getCalculatedOffset(o, u, d, h);
            this.applyPlacement(g, o);
            var v = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(l.TRANSITION_DURATION) : v()
        }
    }, l.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            a = i[0].offsetHeight,
            o = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), e.top += o, e.left += s, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != a && (e.top = e.top + a - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * u.left - r + l : 2 * u.top - a + c,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][f], d)
    }, l.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, l.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = s(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, l.prototype.hide = function(e) {
        var n = this,
            i = t(this.$tip),
            r = t.Event("hide.bs." + this.type);

        function a() {
            "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", a).emulateTransitionEnd(l.TRANSITION_DURATION) : a(), this.hoverState = null, this
    }, l.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, l.prototype.hasContent = function() {
        return this.getTitle()
    }, l.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var a = window.SVGElement && n instanceof window.SVGElement,
            o = i ? {
                top: 0,
                left: 0
            } : a ? null : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, s, l, o)
    }, l.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, l.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var a = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - a - o.scroll,
                l = e.top + a - o.scroll + i;
            s < o.top ? r.top = o.top - s : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var c = e.left - a,
                u = e.left + a + n;
            c < o.left ? r.left = o.left - c : u > o.right && (r.left = o.left + o.width - u)
        }
        return r
    }, l.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, l.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, l.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, l.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, l.prototype.enable = function() {
        this.enabled = !0
    }, l.prototype.disable = function() {
        this.enabled = !1
    }, l.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, l.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, l.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    }, l.prototype.sanitizeHtml = function(t) {
        return s(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var c = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new l(this, r)), "string" == typeof e && i[e]())
        })
    }, t.fn.tooltip.Constructor = l, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = c, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        if (this.options.html) {
            var i = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.popover"),
                a = "object" == typeof n && n;
            !r && /destroy|hide/.test(n) || (r || i.data("bs.popover", r = new e(this, a)), "string" == typeof n && r[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                a = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(a), e.trigger(o), !o.isDefaultPrevented() && !a.isDefaultPrevented()) {
                var s = t(document).find(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, e.prototype.activate = function(n, i, r) {
        var a = i.find("> .active"),
            o = r && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);

        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        a.length && o ? a.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var r = function(e) {
        e.preventDefault(), n.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.options = t.extend({}, e.DEFAULTS, i);
        var r = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = r.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.affix"),
                a = "object" == typeof n && n;
            r || i.data("bs.affix", r = new e(this, a)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop(),
            a = this.$element.offset(),
            o = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= a.top) && "bottom" : !(r + o <= t - i) && "bottom";
        var s = null == this.affixed,
            l = s ? r : a.top;
        return null != n && r <= n ? "top" : null != i && l + (s ? o : e) >= t - i && "bottom"
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                a = i.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (a = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof a && (a = i.bottom(this.$element));
            var s = this.getState(o, n, r, a);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: o - n - a
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(e, i)
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function n(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(i)
    }

    function i(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.collapse"),
                a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            !r && a.toggle && /show|hide/.test(n) && (a.toggle = !1), r || i.data("bs.collapse", r = new e(this, a)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (n = r.data("bs.collapse")) && n.transitioning)) {
                var a = t.Event("show.bs.collapse");
                if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), n || r.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var n = t.Event("hide.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return r.call(this);
                this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, e.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(n(r), r)
        }, this)).end()
    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var r = t(this);
        r.attr("data-target") || e.preventDefault();
        var a = n(r),
            o = a.data("bs.collapse") ? "toggle" : r.data();
        i.call(a, o)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                a = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, a)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                a = /^#./.test(r) && t(r);
            return a && a.length && a.is(":visible") && [
                [a[n]().top + i, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            a = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return o != (t = a[a.length - 1]) && this.activate(t);
        if (o && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) o != a[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(a[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        return setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(t) : t()
}(function() {
    "use strict";
    var t = document.createElement("style");
    t.textContent = ':root {\n  --altcha-border-color: var(--altcha-color-neutral);\n  --altcha-border-width: 1px;\n  --altcha-border-radius: 6px;\n  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));\n  --altcha-color-base-content: light-dark(\n  \toklch(20.904% 0.00002 271.152),\n  \toklch(100% 0.00011 271.152)\n  );\n  --altcha-color-error: oklch(51.284% 0.20527 28.678);\n  --altcha-color-error-content: oklch(100% 0.00011 271.152);\n  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));\n  --altcha-color-neutral-content: light-dark(\n  \toklch(46.76% 0.00005 271.152),\n  \toklch(100% 0.00011 271.152)\n  );\n  --altcha-color-primary: oklch(40.279% 0.2449 268.131);\n  --altcha-color-primary-content: oklch(100% 0.00011 271.152);\n  --altcha-color-success: oklch(55.748% 0.18968 142.511);\n  --altcha-color-success-content: oklch(100% 0.00011 271.152);\n  --altcha-checkbox-border-color: light-dark(\n  \toklch(66.494% 0.00233 15.434),\n  \toklch(51.028% 0.00006 271.152)\n  );\n  --altcha-checkbox-border-radius: 5px;\n  --altcha-checkbox-border-width: var(--altcha-border-width);\n  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);\n  --altcha-checkbox-outline-color: -webkit-focus-ring-color;\n  --altcha-checkbox-outline-offset: 2px;\n  --altcha-checkbox-size: 22px;\n  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);\n  --altcha-input-background-color: var(--altcha-color-base);\n  --altcha-input-border-radius: 3px;\n  --altcha-input-border-width: 1px;\n  --altcha-input-color: var(--altcha-color-base-content);\n  --altcha-max-width: 320px;\n  --altcha-padding: 0.75rem;\n  --altcha-popover-arrow-size: 6px;\n  --altcha-popover-color: var(--altcha-border-color);\n  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));\n  --altcha-spinner-color: var(--altcha-color-base-content);\n  --altcha-switch-background-color: var(--altcha-color-neutral);\n  --altcha-switch-border-radius: calc(infinity * 1px);\n  --altcha-switch-height: var(--altcha-checkbox-size);\n  --altcha-switch-padding: 0.25rem;\n  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);\n  --altcha-switch-toggle-border-radius: 100%;\n  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);\n  --altcha-switch-toggle-size: calc(\n  \tvar(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)\n  );\n  --altcha-transition-duration: 0.6s;\n  --altcha-z-index: 99999999;\n  --altcha-z-index-popover: 999999999;\n}\n\n@supports (-moz-appearance: none) {\n  :root {\n    --altcha-checkbox-outline-color: var(--altcha-color-primary);\n  }\n}\n.altcha {\n  all: revert-layer;\n  display: none;\n  font-family: inherit;\n  font-size: inherit;\n  position: relative;\n}\n.altcha[data-visible] {\n  display: block;\n}\n.altcha-popover, .altcha-popover * {\n  all: revert-layer;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1.25;\n}\n.altcha * {\n  all: revert-layer;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1.25;\n}\n.altcha a, .altcha-popover a {\n  color: currentColor;\n  text-decoration: none;\n}\n.altcha a:hover, .altcha-popover a:hover {\n  color: currentColor;\n}\n.altcha-main {\n  align-items: start;\n  background-color: var(--altcha-color-base);\n  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);\n  border-radius: var(--altcha-border-radius, 0);\n  color: var(--altcha-color-base-content);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: space-between;\n  padding: var(--altcha-padding);\n  max-width: var(--altcha-max-width, 100%);\n}\n.altcha-main > * {\n  display: flex;\n  width: 100%;\n}\n.altcha-main > *:first-child {\n  flex-grow: 1;\n}\n.altcha-checkbox-wrap {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  gap: 0.5rem;\n}\n.altcha-checkbox-wrap > * {\n  display: flex;\n}\n.altcha-logo {\n  opacity: 0.7;\n}\n.altcha-footer {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  font-size: 0.7rem;\n  opacity: 0.7;\n}\n.altcha-footer p {\n  margin: 0;\n  padding: 0;\n}\n.altcha-error {\n  font-size: 0.85rem;\n}\n.altcha-button {\n  align-items: center;\n  background: var(--altcha-color-primary);\n  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);\n  border-radius: var(--altcha-input-border-radius);\n  color: var(--altcha-color-primary-content);\n  cursor: pointer;\n  display: flex;\n  font-size: 0.9rem;\n  gap: 0.5rem;\n  padding: 0.35rem;\n}\n.altcha-button:focus {\n  border-color: var(--altcha-color-primary);\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-button > .altcha-spinner, .altcha-button > svg {\n  height: 20px;\n  width: 20px;\n}\n.altcha-button-secondary {\n  background: transparent;\n  border-color: var(--altcha-color-neutral);\n  color: var(--altcha-color-neutral-content);\n}\n.altcha-input {\n  background: var(--altcha-input-background-color);\n  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);\n  border-radius: var(--altcha-input-border-radius);\n  color: var(--altcha-input-color);\n  flex-grow: 1;\n  font-size: 1rem;\n  min-width: 0;\n  padding: 0.25rem;\n  width: auto;\n}\n.altcha-input:focus {\n  border-color: var(--altcha-color-primary);\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-spinner {\n  animation: altcha-rotate 0.6s linear infinite;\n  border-radius: 100%;\n  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  opacity: 0.7;\n}\n.altcha-popover {\n  background-color: var(--altcha-color-base);\n  border: var(--altcha-border-width) solid var(--altcha-border-color);\n  border-radius: var(--altcha-border-radius);\n  color: var(--altcha-color-base-content);\n  filter: var(--altcha-shadow);\n  position: absolute;\n  left: calc(var(--altcha-padding) / 2);\n  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));\n  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));\n  z-index: var(--altcha-z-index-popover);\n}\n.altcha-popover-arrow {\n  border: var(--altcha-popover-arrow-size) solid transparent;\n  border-bottom-color: var(--altcha-popover-color);\n  content: "";\n  height: 0;\n  left: calc(var(--altcha-checkbox-size) / 2);\n  position: absolute;\n  top: calc(var(--altcha-popover-arrow-size) * -2);\n  width: 0;\n}\n.altcha-popover-content {\n  max-height: 100dvh;\n  overflow: auto;\n  padding: var(--altcha-padding);\n}\n.altcha-popover[data-top=true][data-display=standard] {\n  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));\n  top: auto;\n}\n.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {\n  border-bottom-color: transparent;\n  border-top-color: var(--altcha-popover-color);\n  bottom: calc(var(--altcha-popover-arrow-size) * -2);\n  top: auto;\n}\n.altcha-popover[data-variant=error] {\n  --altcha-popover-color: var(--altcha-color-error);\n  background-color: var(--altcha-color-error);\n  border-color: var(--altcha-color-error);\n  color: var(--altcha-color-error-content);\n}\n.altcha-popover[data-variant=error] .altcha-popover-content {\n  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);\n}\n.altcha-popover[data-display=overlay] {\n  animation: altcha-overlay-slidein 0.5s forwards;\n  left: 50%;\n  position: fixed;\n  top: 45%;\n  transform: translate(-50%, -50%);\n  width: var(--altcha-max-width);\n  z-index: var(--altcha-z-index);\n}\n.altcha-popover[data-display=bottomsheet] {\n  animation: altcha-bottomsheet-slideup 0.5s forwards;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom: 0;\n  bottom: -100%;\n  left: 50%;\n  position: fixed;\n  top: auto;\n  transform: translate(-50%, 0);\n  width: var(--altcha-max-width);\n  z-index: var(--altcha-z-index);\n}\n.altcha-popover[data-display=bottomsheet] .altcha-popover-content {\n  padding-bottom: calc(var(--altcha-padding) * 2);\n}\n.altcha-popover-backdrop {\n  background: var(--altcha-color-base-content);\n  bottom: 0;\n  left: 0;\n  opacity: 0.1;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity 0.5s;\n  z-index: var(--altcha-z-index);\n}\n.altcha-popover-close {\n  color: var(--altcha-color-base-content);\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1rem;\n  height: 1.25rem;\n  line-height: 0.95;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-shadow: 0 0 1px var(--altcha-color-base);\n  top: -1.5rem;\n  width: 1.25rem;\n  z-index: var(--altcha-z-index);\n}\n[dir=rtl] .altcha-popover {\n  left: auto;\n  right: calc(var(--altcha-padding) / 2);\n}\n[dir=rtl] .altcha-popover-arrow {\n  left: auto;\n  right: calc(var(--altcha-checkbox-size) / 2);\n}\n[dir=rtl] .altcha-popover-close {\n  left: 0;\n  right: auto;\n}\n.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {\n  align-items: center;\n  justify-content: center;\n  padding-top: 1rem;\n  gap: 0.5rem;\n}\n.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {\n  height: 18px;\n  width: 18px;\n  vertical-align: middle;\n}\n.altcha-code-challenge > form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.altcha-code-challenge-title {\n  font-weight: 600;\n}\n.altcha-code-challenge-text {\n  font-size: 0.85rem;\n}\n.altcha-code-challenge-image {\n  background: white;\n  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);\n  border-radius: var(--altcha-input-border-radius);\n  object-fit: contain;\n  height: 50px;\n}\n.altcha-code-challenge-row {\n  display: flex;\n  gap: 0.5rem;\n}\n.altcha-code-challenge-buttons {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: var(--altcha-padding);\n  justify-content: space-between;\n}\n.altcha-code-challenge-buttons button {\n  justify-content: center;\n  width: 100%;\n}\n.altcha-checkbox {\n  cursor: pointer;\n  height: var(--altcha-checkbox-size);\n  position: relative;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox input {\n  appearance: none;\n  background: var(--altcha-input-background-color);\n  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);\n  border-radius: var(--altcha-checkbox-border-radius);\n  cursor: pointer;\n  height: var(--altcha-checkbox-size);\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  width: var(--altcha-checkbox-size);\n}\n@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {\n  .altcha-checkbox input {\n    /* Safari-only: fixes focus outline */\n  }\n  .altcha-checkbox input:focus {\n    outline-width: 2px;\n    outline-style: solid;\n  }\n}\n.altcha-checkbox input:before {\n  border-radius: var(--altcha-checkbox-border-radius);\n  content: "";\n  width: 100%;\n  height: 100%;\n  background: var(--altcha-color-neutral);\n  display: block;\n  transform: scale(0);\n}\n.altcha-checkbox input:checked {\n  background-color: var(--altcha-color-success);\n  border-color: var(--altcha-color-success);\n}\n.altcha-checkbox input:checked::before {\n  background-color: var(--altcha-color-success);\n  opacity: 0;\n  transform: scale(2.2);\n  transition: all var(--altcha-checkbox-transition-duration) ease;\n  transition-delay: 0.1s;\n}\n.altcha-checkbox svg {\n  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);\n  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);\n  fill: none;\n  left: var(--altcha-radio-svg-offset);\n  height: var(--altcha-radio-svg-size);\n  opacity: 0;\n  position: absolute;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  top: var(--altcha-radio-svg-offset);\n  transform: translate3d(0, 0, 0);\n  width: var(--altcha-radio-svg-size);\n}\n.altcha-checkbox input:checked + svg {\n  color: var(--altcha-color-success-content);\n  opacity: 1;\n  stroke-dashoffset: 0;\n  transition: all var(--altcha-checkbox-transition-duration) ease;\n  transition-delay: 0.1s;\n}\n.altcha-checkbox-spinner {\n  display: none;\n  left: 0;\n  height: var(--altcha-checkbox-size);\n  position: absolute;\n  top: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox[data-loading=true] input {\n  appearance: none;\n  opacity: 0;\n  pointer-events: none;\n}\n.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {\n  display: block;\n}\n.altcha-checkbox-native {\n  height: var(--altcha-checkbox-size);\n  position: relative;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox-native input {\n  height: var(--altcha-checkbox-size);\n  margin: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox-native-spinner {\n  display: none;\n  left: 0;\n  height: var(--altcha-checkbox-size);\n  position: absolute;\n  top: 0;\n  width: var(--altcha-checkbox-size);\n}\n.altcha-checkbox-native[data-loading=true] input {\n  appearance: none;\n  opacity: 0;\n  pointer-events: none;\n}\n.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {\n  display: block;\n}\n.altcha-switch {\n  align-items: center;\n  border-radius: var(--altcha-switch-border-radius);\n  background-color: var(--altcha-switch-background-color);\n  display: flex;\n  height: var(--altcha-switch-height);\n  padding: var(--altcha-switch-padding);\n  position: relative;\n  width: var(--altcha-switch-width);\n}\n.altcha-switch:focus-within {\n  outline: var(--altcha-checkbox-outline);\n  outline-offset: var(--altcha-checkbox-outline-offset);\n}\n.altcha-switch input {\n  appearance: none;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.altcha-switch-toggle {\n  align-items: center;\n  background-color: var(--altcha-switch-toggle-color);\n  border-radius: var(--altcha-switch-toggle-border-radius);\n  cursor: pointer;\n  display: flex;\n  height: var(--altcha-switch-toggle-size);\n  justify-content: center;\n  left: var(--altcha-switch-padding);\n  position: absolute;\n  transition: width 150ms ease-out, left 150ms ease-out;\n  width: var(--altcha-switch-toggle-size);\n}\n.altcha-switch-spinner {\n  display: none;\n  height: var(--altcha-switch-toggle-size);\n  width: var(--altcha-switch-toggle-size);\n}\n.altcha-switch[data-loading=true] {\n  pointer-events: none;\n}\n.altcha-switch[data-loading=true] .altcha-switch-spinner {\n  display: block;\n}\n.altcha-switch[data-loading=true] .altcha-switch-toggle {\n  background-color: transparent;\n  left: calc(50% - var(--altcha-switch-toggle-size) / 2);\n}\n[data-state=verified] .altcha-switch {\n  --altcha-switch-background-color: var(--altcha-color-success);\n}\n[data-state=verified] .altcha-switch-toggle {\n  background-color: var(--altcha-color-success-content);\n  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));\n}\n[dir=rtl] .altcha-switch-toggle {\n  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));\n}\n[dir=rtl][data-state=verified] .altcha-switch-toggle {\n  left: var(--altcha-switch-padding);\n}\n.altcha-floating-arrow {\n  border: 6px solid transparent;\n  border-bottom-color: var(--altcha-border-color);\n  content: "";\n  height: 0;\n  left: 12px;\n  position: absolute;\n  top: -12px;\n  width: 0;\n}\n.altcha-overlay-backdrop {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: opacity var(--altcha-transition-duration);\n  z-index: var(--altcha-z-index);\n}\n.altcha-overlay-close {\n  display: inline-block;\n  color: currentColor;\n  cursor: pointer;\n  font-size: 1rem;\n  height: 1rem;\n  line-height: 0.85;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-shadow: 0 0 1px var(--altcha-color-base);\n  top: -1.5rem;\n  width: 1rem;\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=overlay] {\n  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;\n  filter: var(--altcha-shadow);\n  left: 50%;\n  opacity: 0;\n  position: fixed;\n  top: 45%;\n  transform: translate(-50%, -50%);\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=overlay] .altcha-main {\n  width: var(--altcha-max-width);\n}\n.altcha[data-display=floating] {\n  display: none;\n  filter: var(--altcha-shadow);\n  left: var(--altcha-floating-left, -100%);\n  position: fixed;\n  top: var(--altcha-floating-top, -100%);\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=floating] .altcha-main {\n  width: var(--altcha-max-width);\n}\n.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {\n  border-bottom-color: transparent;\n  border-top-color: var(--altcha-border-color);\n  bottom: -12px;\n  top: auto;\n}\n.altcha[data-display=floating][data-visible] {\n  display: flex;\n}\n.altcha[data-display=bar] {\n  bottom: -100%;\n  filter: var(--altcha-shadow);\n  left: 0;\n  position: fixed;\n  right: 0;\n  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);\n  z-index: var(--altcha-z-index);\n}\n.altcha[data-display=bar] .altcha-main {\n  align-items: center;\n  border-radius: 0;\n  border-width: var(--altcha-border-width) 0 0 0;\n  flex-direction: row;\n  max-width: 100% !important;\n}\n.altcha[data-display=bar] .altcha-main > * {\n  width: auto;\n}\n.altcha[data-display=bar][data-placement=top] {\n  bottom: auto;\n  top: -100%;\n}\n.altcha[data-display=bar][data-placement=top] .altcha-main {\n  border-width: 0 0 var(--altcha-border-width) 0;\n}\n.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {\n  bottom: 0;\n}\n.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {\n  top: 0;\n}\n.altcha[data-display=invisible] {\n  display: none;\n}\n\n@keyframes altcha-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes altcha-bottomsheet-slideup {\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes altcha-overlay-slidein {\n  100% {\n    opacity: 1;\n    top: 50%;\n  }\n}/*$vite$:1*/', document.head.appendChild(t);
    const e = !1;
    var n = Array.isArray,
        i = Array.prototype.indexOf,
        r = Array.prototype.includes,
        a = Array.from,
        o = Object.keys,
        s = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        c = Object.getOwnPropertyDescriptors,
        u = Object.prototype,
        d = Array.prototype,
        h = Object.getPrototypeOf,
        f = Object.isExtensible;
    const p = () => {};

    function g() {
        var t, e;
        return {
            promise: new Promise((n, i) => {
                t = n, e = i
            }),
            resolve: t,
            reject: e
        }
    }
    const v = 1 << 24,
        m = 16,
        b = 32,
        y = 64,
        w = 512,
        S = 1024,
        x = 2048,
        $ = 4096,
        _ = 8192,
        k = 16384,
        E = 32768,
        C = 1 << 25,
        T = 65536,
        A = 1 << 17,
        I = 1 << 19,
        O = 65536,
        L = 1 << 21,
        D = 1 << 23,
        R = Symbol("$state"),
        j = Symbol("component"),
        N = Symbol("legacy props"),
        U = Symbol(""),
        P = Symbol("attributes"),
        q = Symbol("class"),
        H = Symbol("style"),
        F = Symbol("text"),
        M = Symbol("form reset"),
        z = new class extends Error {
            name = "StaleReactionError";
            message = "The reaction that called `getAbortSignal()` was re-run or destroyed"
        },
        B = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");

    function V(t) {
        return t === this.v
    }

    function Q(t, e) {
        return t != t ? e == e : t !== e || null !== t && "object" == typeof t || "function" == typeof t
    }

    function W(t) {
        return !Q(t, this.v)
    }
    const J = {},
        G = Symbol("uninitialized"),
        K = "http://www.w3.org/1999/xhtml";
    let Z = null;

    function Y(t) {
        Z = t
    }

    function X(t, e = !1, n) {
        Z = {
            p: Z,
            i: !1,
            c: null,
            e: null,
            s: t,
            x: null,
            r: ze,
            l: null
        }
    }

    function tt(t) {
        var e = Z,
            n = e.e;
        if (null !== n)
            for (var i of (e.e = null, n)) yn(i);
        return void 0 !== t && (e.x = t), e.i = !0, Z = e.p, et(t)
    }

    function et(t = {}) {
        return s(t, j, {
            value: !0
        }), t
    }
    let nt = [];

    function it() {
        var t = nt;
        nt = [],
            function(t) {
                for (var e = 0; e < t.length; e++) t[e]()
            }(t)
    }

    function rt(t) {
        if (0 === nt.length && !he) {
            var e = nt;
            queueMicrotask(() => {
                e === nt && it()
            })
        }
        nt.push(t)
    }

    function at() {
        for (; nt.length > 0;) it()
    }

    function ot(t) {
        console.warn("https://svelte.dev/e/hydration_mismatch")
    }
    let st, lt = !1;

    function ct(t) {
        lt = t
    }

    function ut(t) {
        if (null === t) throw ot(), J;
        return st = t
    }

    function dt() {
        return ut(Ct(st))
    }

    function ht(t) {
        if (lt) {
            if (null !== Ct(st)) throw ot(), J;
            st = t
        }
    }

    function ft(t = 1) {
        if (lt) {
            for (var e = t, n = st; e--;) n = Ct(n);
            st = n
        }
    }

    function pt(t = !0) {
        for (var e = 0, n = st;;) {
            if (8 === n.nodeType) {
                var i = n.data;
                if ("]" === i) {
                    if (0 === e) return n;
                    e -= 1
                } else("[" === i || "[!" === i || "[" === i[0] && !isNaN(Number(i.slice(1)))) && (e += 1)
            }
            var r = Ct(n);
            t && n.remove(), n = r
        }
    }

    function gt(t) {
        if (!t || 8 !== t.nodeType) throw ot(), J;
        return t.data
    }

    function vt(t) {
        if ("object" != typeof t || null === t || R in t || j in t) return t;
        const e = h(t);
        if (e !== u && e !== d) return t;
        var i = new Map,
            r = n(t),
            a = Oe(0),
            o = Ye,
            s = t => {
                if (Ye === o) return t();
                var e = He,
                    n = Ye;
                Me(null), Xe(o);
                var i = t();
                return Me(e), Xe(n), i
            };
        return r && i.set("length", Oe(t.length)), new Proxy(t, {
            defineProperty(t, e, n) {
                "value" in n && !1 !== n.configurable && !1 !== n.enumerable && !1 !== n.writable || function() {
                    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
                }();
                var r = i.get(e);
                return void 0 === r ? s(() => {
                    var t = Oe(n.value);
                    return i.set(e, t), t
                }) : De(r, n.value, !0), !0
            },
            deleteProperty(t, e) {
                var n = i.get(e);
                if (void 0 === n) {
                    if (e in t) {
                        const t = s(() => Oe(G));
                        i.set(e, t), je(a)
                    }
                } else De(n, G), je(a);
                return !0
            },
            get(e, n, r) {
                if (n === R) return t;
                var a = i.get(n),
                    o = n in e;
                if (void 0 !== a || o && !l(e, n)?.writable || (a = s(() => Oe(vt(o ? e[n] : G))), i.set(n, a)), void 0 !== a) {
                    var c = un(a);
                    return c === G ? void 0 : c
                }
                return Reflect.get(e, n, r)
            },
            getOwnPropertyDescriptor(t, e) {
                var n = Reflect.getOwnPropertyDescriptor(t, e);
                if (n && "value" in n) {
                    var r = i.get(e);
                    r && (n.value = un(r))
                } else if (void 0 === n) {
                    var a = i.get(e),
                        o = a?.v;
                    if (void 0 !== a && o !== G) return {
                        enumerable: !0,
                        configurable: !0,
                        value: o,
                        writable: !0
                    }
                }
                return n
            },
            has(t, e) {
                if (e === R) return !0;
                var n = i.get(e),
                    r = void 0 !== n && n.v !== G || Reflect.has(t, e);
                if ((void 0 !== n || null !== ze && (!r || l(t, e)?.writable)) && (void 0 === n && (n = s(() => Oe(r ? vt(t[e]) : G)), i.set(e, n)), un(n) === G)) return !1;
                return r
            },
            set(t, e, n, o) {
                var c = i.get(e),
                    u = e in t;
                if (r && "length" === e)
                    for (var d = n; d < c.v; d += 1) {
                        var h = i.get(d + "");
                        void 0 !== h ? De(h, G) : d in t && (h = s(() => Oe(G)), i.set(d + "", h))
                    }
                void 0 === c ? u && !l(t, e)?.writable || (De(c = s(() => Oe(void 0)), vt(n)), i.set(e, c)) : (u = c.v !== G, De(c, s(() => vt(n))));
                var f = Reflect.getOwnPropertyDescriptor(t, e);
                if (f?.set && f.set.call(o, n), !u) {
                    if (r && "string" == typeof e) {
                        var p = i.get("length"),
                            g = Number(e);
                        Number.isInteger(g) && g >= p.v && De(p, g + 1)
                    }
                    je(a)
                }
                return !0
            },
            ownKeys(t) {
                un(a);
                var e = Reflect.ownKeys(t).filter(t => {
                    var e = i.get(t);
                    return void 0 === e || e.v !== G
                });
                for (var [n, r] of i) r.v === G || n in t || e.push(n);
                return e
            },
            setPrototypeOf() {
                ! function() {
                    throw new Error("https://svelte.dev/e/state_prototype_fixed")
                }()
            }
        })
    }

    function mt(t) {
        try {
            if (null !== t && "object" == typeof t && R in t) return t[R]
        } catch {}
        return t
    }

    function bt(t, e) {
        return Object.is(mt(t), mt(e))
    }
    var yt, wt, St, xt, $t;

    function _t() {
        if (void 0 === yt) {
            yt = window, wt = document, St = /Firefox/.test(navigator.userAgent);
            var t = Element.prototype,
                e = Node.prototype,
                n = Text.prototype;
            xt = l(e, "firstChild").get, $t = l(e, "nextSibling").get, f(t) && (t[q] = void 0, t[P] = null, t[H] = void 0, t.__e = void 0), f(n) && (n[F] = void 0)
        }
    }

    function kt(t = "") {
        return document.createTextNode(t)
    }

    function Et(t) {
        return xt.call(t)
    }

    function Ct(t) {
        return $t.call(t)
    }

    function Tt(t, e) {
        if (!lt) return Et(t);
        var n = Et(st);
        if (null === n) n = st.appendChild(kt());
        else if (e && 3 !== n.nodeType) {
            var i = kt();
            return n?.before(i), ut(i), i
        }
        return e && Dt(n), ut(n), n
    }

    function At(t, e = !1) {
        if (!lt) {
            var n = Et(t);
            return n instanceof Comment && "" === n.data ? Ct(n) : n
        }
        if (e) {
            if (3 !== st?.nodeType) {
                var i = kt();
                return st?.before(i), ut(i), i
            }
            Dt(st)
        }
        return st
    }

    function It(t, e = !1) {
        if (!lt) return Et(t);
        var n = Tt(t, e);
        return ht(t), n
    }

    function Ot(t, e = 1, n = !1) {
        let i = lt ? st : t;
        for (var r; e--;) r = i, i = Ct(i);
        if (!lt) return i;
        if (n) {
            if (3 !== i?.nodeType) {
                var a = kt();
                return null === i ? r?.after(a) : i.before(a), ut(a), a
            }
            Dt(i)
        }
        return ut(i), i
    }

    function Lt(t, e, n) {
        return null == e || e === K ? n ? document.createElement(t, {
            is: n
        }) : document.createElement(t) : n ? document.createElementNS(e, t, {
            is: n
        }) : document.createElementNS(e, t)
    }

    function Dt(t) {
        if (t.nodeValue.length < 65536) return;
        let e = t.nextSibling;
        for (; null !== e && 3 === e.nodeType;) e.remove(), t.nodeValue += e.nodeValue, e = t.nextSibling
    }

    function Rt(t, e) {
        if (null === e || 0 === (e.f & k)) {
            for (; null !== e;) {
                if (128 & e.f && !(33570816 & e.f)) {
                    if (0 === (e.f & E)) throw t;
                    try {
                        return void e.b.error(t)
                    } catch (e) {
                        t = e
                    }
                }
                e = e.parent
            }
            throw t
        }
    }
    const jt = -7169;

    function Nt(t, e) {
        t.f = t.f & jt | e
    }

    function Ut(t) {
        0 !== (t.f & w) || null === t.deps ? Nt(t, S) : Nt(t, $)
    }

    function Pt(t) {
        if (null !== t)
            for (const e of t) 2 & e.f && 0 !== (e.f & O) && (e.f ^= O, Pt(e.deps))
    }

    function qt(t, e, n) {
        0 !== (t.f & x) ? e.add(t) : 0 !== (t.f & $) && n.add(t), Pt(t.deps), Nt(t, S)
    }

    function Ht(t, e, n) {
        if (null == t) return e(void 0), p;
        const i = fn(() => t.subscribe(e, n));
        return i.unsubscribe ? () => i.unsubscribe() : i
    }
    const Ft = [];

    function Mt(t, e = p) {
        let n = null;
        const i = new Set;

        function r(e) {
            if (Q(t, e) && (t = e, n)) {
                const e = !Ft.length;
                for (const e of i) e[1](), Ft.push(e, t);
                if (e) {
                    for (let t = 0; t < Ft.length; t += 2) Ft[t][0](Ft[t + 1]);
                    Ft.length = 0
                }
            }
        }

        function a(e) {
            r(e(t))
        }
        return {
            set: r,
            update: a,
            subscribe: function(o, s = p) {
                const l = [o, s];
                return i.add(l), 1 === i.size && (n = e(r, a) || p), o(t), () => {
                    i.delete(l), 0 === i.size && n && (n(), n = null)
                }
            }
        }
    }

    function zt(t) {
        let e;
        return Ht(t, t => e = t)(), e
    }
    let Bt = Symbol("unmounted");

    function Vt(t, e, n) {
        const i = n[e] ??= {
            store: null,
            source: Le(void 0),
            unsubscribe: p
        };
        if (i.store !== t && !(Bt in n))
            if (i.unsubscribe(), i.store = t ?? null, null == t) i.source.v = void 0, i.unsubscribe = p;
            else {
                var r = !0;
                i.unsubscribe = Ht(t, t => {
                    r ? i.source.v = t : De(i.source, t)
                }), r = !1
            } return t && Bt in n ? zt(t) : un(i.source)
    }

    function Qt(t, e) {
        if (e) {
            const e = document.body;
            t.autofocus = !0, rt(() => {
                document.activeElement === e && t.focus()
            })
        }
    }
    let Wt = !1;

    function Jt() {
        Wt || (Wt = !0, document.addEventListener("reset", t => {
            Promise.resolve().then(() => {
                if (!t.defaultPrevented)
                    for (const e of t.target.elements) e[M]?.()
            })
        }, {
            capture: !0
        }))
    }

    function Gt(t) {
        var e = He,
            n = ze;
        Me(null), Be(null);
        try {
            return t()
        } finally {
            Me(e), Be(n)
        }
    }

    function Kt(t, e, n, i) {
        const r = Xt;
        var a = t.filter(t => !t.settled),
            o = e.map(r);
        if (0 !== n.length || 0 !== a.length) {
            var s, l, c, u, d = ze,
                h = (s = ze, l = He, c = Z, u = le, function(t = !0) {
                    Be(s), Me(l), Y(c), t && 0 === (s.f & k) && (u?.activate(), u?.apply())
                }),
                f = 1 === a.length ? a[0].promise : a.length > 1 ? Promise.all(a.map(t => t.promise)) : null,
                p = Yt();
            0 !== n.length ? f ? f.then(() => {
                h(), v(), Zt()
            }) : v() : f.then(() => g([])).finally(p)
        } else i(o);

        function g(t) {
            if (0 === (d.f & k)) {
                h();
                try {
                    i([...o, ...t])
                } catch (t) {
                    Rt(t, d)
                }
                Zt()
            }
        }

        function v() {
            Promise.all(n.map(t => ee(t))).then(g).catch(t => Rt(t, d)).finally(p)
        }
    }

    function Zt(t = !0) {
        Be(null), Me(null), Y(null), t && le?.deactivate()
    }

    function Yt() {
        var t = ze,
            e = t.b,
            n = le,
            i = !!e?.is_rendered();
        return e?.update_pending_count(1, n), n.increment(i, t), () => {
            e?.update_pending_count(-1, n), n.decrement(i, t)
        }
    }

    function Xt(t) {
        null !== ze && (ze.f |= I);
        return {
            ctx: Z,
            deps: null,
            effects: null,
            equals: V,
            f: 2050,
            fn: t,
            reactions: null,
            rv: 0,
            v: G,
            wv: 0,
            parent: ze,
            ac: null
        }
    }
    const te = Symbol("obsolete");

    function ee(t, e, n) {
        let i = ze;
        null === i && function() {
            throw new Error("https://svelte.dev/e/async_derived_orphan")
        }();
        var r = void 0,
            a = Ie(G),
            o = !He,
            s = new Set;
        return function(t) {
            gn(4718592, t)
        }(() => {
            var e = ze,
                n = g();
            r = n.promise;
            try {
                Promise.resolve(t()).then(n.resolve, t => {
                    t !== z && n.reject(t)
                }).finally(Zt)
            } catch (t) {
                n.reject(t), Zt()
            }
            var l = le;
            if (o) {
                if (0 !== (e.f & E)) var c = Yt();
                if (i.b?.is_rendered()) l.async_deriveds.get(e)?.reject(te);
                else
                    for (const t of s.values()) t.reject(te);
                s.add(n), l.async_deriveds.set(e, n)
            }
            const u = (t, e = void 0) => {
                c?.(), s.delete(n), e !== te && (l.activate(), e ? (a.f |= D, Re(a, e)) : (0 !== (a.f & D) && (a.f ^= D), Re(a, t)), l.deactivate())
            };
            n.promise.then(u, t => u(null, t || "unknown"))
        }), mn(() => {
            for (const t of s) t.reject(te)
        }), new Promise(t => {
            ! function e(n) {
                function i() {
                    n === r ? t(a) : e(r)
                }
                n.then(i, i)
            }(r)
        })
    }

    function ne(t) {
        const e = Xt(t);
        return Qe(e), e
    }

    function ie(t) {
        var e, n = ze,
            i = t.parent;
        if (!Pe && null !== i && t.v !== G && 24576 & i.f) return console.warn("https://svelte.dev/e/derived_inert"), t.v;
        Be(i);
        try {
            t.f &= -65537,
                function(t) {
                    var e = t.effects;
                    if (null !== e) {
                        t.effects = null;
                        for (var n = 0; n < e.length; n += 1) Tn(e[n])
                    }
                }(t), e = rn(t)
        } finally {
            Be(n)
        }
        return e
    }

    function re(t) {
        var e = ie(t);
        t.equals(e) || (t.wv = tn(), le?.is_fork && null !== t.deps || (null !== le ? (le.capture(t, e, !0), ce?.capture(t, e, !0)) : t.v = e, null !== t.deps)) ? Pe || (null !== ue ? (vn() || le?.is_fork) && ue.set(t, e) : Ut(t)) : Nt(t, S)
    }

    function ae(t) {
        if (null !== t.effects)
            for (const e of t.effects) e.teardown && null !== e.fn && ln(e)
    }
    let oe = null,
        se = null,
        le = null,
        ce = null,
        ue = null,
        de = null,
        he = !1,
        fe = !1,
        pe = null,
        ge = null;
    var ve = 0;
    let me = 1;
    class be {
        id = me++;
        #t = !1;
        linked = !0;
        #e = null;
        #n = null;
        async_deriveds = new Map;
        current = new Map;
        previous = new Map;
        #i = new Set;
        #r = new Set;
        #a = 0;
        #o = new Map;
        #s = null;
        #l = [];
        #c = [];
        #u = new Set;
        #d = new Set;
        #h = new Map;
        #f = new Set;
        is_fork = !1;
        #p = !1;
        constructor() {
            null === se ? oe = se = this : (se.#n = this, this.#e = se), se = this
        }
        #g() {
            if (this.is_fork) return !0;
            for (const n of this.#o.keys()) {
                for (var t = n, e = !1; null !== t.parent;) {
                    if (this.#h.has(t)) {
                        e = !0;
                        break
                    }
                    t = t.parent
                }
                if (!e) return !0
            }
            return !1
        }
        skip_effect(t) {
            this.#h.has(t) || this.#h.set(t, {
                d: [],
                m: []
            }), this.#f.delete(t)
        }
        unskip_effect(t, e = t => this.schedule(t)) {
            var n = this.#h.get(t);
            if (n) {
                for (var i of (this.#h.delete(t), n.d)) Nt(i, x), e(i);
                for (i of n.m) Nt(i, $), e(i)
            }
            this.#f.add(t)
        }
        #v() {
            this.#t = !0, ve++ > 1e3 && (this.#m(), function() {
                try {
                    ! function() {
                        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
                    }()
                } catch (t) {
                    Rt(t, de)
                }
            }());
            for (const t of this.#u) this.#d.delete(t), Nt(t, x), this.schedule(t);
            for (const t of this.#d) Nt(t, $), this.schedule(t);
            const t = this.#l;
            this.#l = [], this.apply();
            var e = pe = [],
                n = [],
                i = ge = [];
            for (const i of t) try {
                this.#b(i, e, n)
            } catch (t) {
                throw Ee(i), this.#g() || this.discard(), t
            }
            if (le = null, i.length > 0) {
                var r = be.ensure();
                for (const t of i) r.schedule(t)
            }
            if (pe = null, ge = null, this.#g()) {
                this.#y(n), this.#y(e);
                for (const [t, e] of this.#h) ke(t, e);
                return void(i.length > 0 && le.#v())
            }
            const a = this.#w();
            if (a) return this.#y(n), this.#y(e), void a.#S(this);
            this.#u.clear(), this.#d.clear();
            for (const t of this.#i) t(this);
            this.#i.clear(), ce = this, Se(n), Se(e), ce = null, this.#s?.resolve();
            var o = le;
            if (0 !== this.#a || 0 !== this.#l.length && null === o || this.#m(), this.#l.length > 0)
                if (null !== o) {
                    const t = o;
                    t.#l.push(...this.#l.filter(e => !t.#l.includes(e)))
                } else o = this;
            null !== o && (Te.clear(), o.#v())
        }
        #b(t, e, n) {
            t.f ^= S;
            for (var i = t.first; null !== i;) {
                var r = i.f,
                    a = !!(96 & r);
                if (!(a && 0 !== (r & S) || 0 !== (r & _) || this.#h.has(i)) && null !== i.fn) {
                    a ? i.f ^= S : 4 & r ? e.push(i) : en(i) && (0 !== (r & m) && this.#d.add(i), ln(i));
                    var o = i.first;
                    if (null !== o) {
                        i = o;
                        continue
                    }
                }
                for (; null !== i;) {
                    var s = i.next;
                    if (null !== s) {
                        i = s;
                        break
                    }
                    i = i.parent
                }
            }
        }
        #w() {
            for (var t = this.#e; null !== t;) {
                if (!t.is_fork)
                    for (const [e, [, n]] of this.current)
                        if (t.current.has(e) && !n) return t;
                t = t.#e
            }
            return null
        }
        #S(t) {
            for (const [e, n] of t.current) !this.previous.has(e) && t.previous.has(e) && this.previous.set(e, t.previous.get(e)), this.current.set(e, n);
            for (const [e, n] of t.async_deriveds) {
                const t = this.async_deriveds.get(e);
                t && n.promise.then(t.resolve).catch(t.reject)
            }
            t.async_deriveds.clear(), this.transfer_effects(t.#u, t.#d);
            const e = t => {
                var n = t.reactions;
                if (null !== n && (!(2 & t.f) || 6144 & t.f))
                    for (const t of n) {
                        var i = t.f;
                        if (2 & i) e(t);
                        else {
                            var r = t;
                            4194320 & i && !this.async_deriveds.has(r) && (this.#d.delete(r), Nt(r, x), this.schedule(r))
                        }
                    }
            };
            for (const t of this.current.keys()) e(t);
            this.oncommit(() => t.discard()), t.#m(), le = this, this.#v()
        }
        #y(t) {
            for (var e = 0; e < t.length; e += 1) qt(t[e], this.#u, this.#d)
        }
        capture(t, e, n = !1) {
            t.v === G || this.previous.has(t) || this.previous.set(t, t.v), 0 === (t.f & D) && (this.current.set(t, [e, n]), ue?.set(t, e)), this.is_fork || (t.v = e)
        }
        activate() {
            le = this
        }
        deactivate() {
            le = null, ue = null
        }
        flush() {
            try {
                e,
                fe = !0,
                le = this,
                this.#v()
            }
            finally {
                ve = 0, de = null, pe = null, ge = null, fe = !1, le = null, ue = null, Te.clear()
            }
        }
        discard() {
            for (const t of this.#r) t(this);
            this.#r.clear();
            for (const t of this.async_deriveds.values()) t.reject(te);
            this.#m(), this.#s?.resolve()
        }
        register_created_effect(t) {
            this.#c.push(t)
        }
        #x() {
            for (let u = oe; null !== u; u = u.#n) {
                var t = u.id < this.id,
                    e = [];
                for (const [i, [r, a]] of this.current) {
                    if (u.current.has(i)) {
                        var n = u.current.get(i)[0];
                        if (!t || r === n) continue;
                        u.current.set(i, [r, a])
                    }
                    e.push(i)
                }
                if (t)
                    for (const [t, e] of this.async_deriveds) {
                        const n = u.async_deriveds.get(t);
                        n && e.promise.then(n.resolve).catch(n.reject)
                    }
                var i = [...u.current.keys()].filter(t => !u.current.get(t)[1]);
                if (u.#t && 0 !== i.length) {
                    var r = i.filter(t => !this.current.has(t));
                    if (0 === r.length) t && u.discard();
                    else if (e.length > 0) {
                        if (t)
                            for (const t of this.#f) u.unskip_effect(t, t => {
                                4194320 & t.f ? u.schedule(t) : u.#y([t])
                            });
                        u.activate();
                        var a = new Set,
                            o = new Map;
                        for (var s of e) xe(s, r, a, o);
                        o = new Map;
                        var l = [...u.current].filter(([t, e]) => {
                            const n = this.current.get(t);
                            return !n || (n[0] !== e[0] || n[1] !== e[1])
                        }).map(([t]) => t);
                        if (l.length > 0)
                            for (const t of this.#c) 155648 & t.f || !$e(t, l, o) || (4194320 & t.f ? (Nt(t, x), u.schedule(t)) : u.#u.add(t));
                        if (u.#l.length > 0 && !u.#p) {
                            for (var c of (u.apply(), u.#l)) u.#b(c, [], []);
                            u.#l = []
                        }
                        u.deactivate()
                    }
                }
            }
        }
        increment(t, e) {
            if (this.#a += 1, t) {
                let t = this.#o.get(e) ?? 0;
                this.#o.set(e, t + 1)
            }
        }
        decrement(t, e) {
            if (this.#a -= 1, t) {
                let t = this.#o.get(e) ?? 0;
                1 === t ? this.#o.delete(e) : this.#o.set(e, t - 1)
            }
            this.#p || (this.#p = !0, rt(() => {
                this.#p = !1, this.linked && this.flush()
            }))
        }
        transfer_effects(t, e) {
            for (const e of t) this.#u.add(e);
            for (const t of e) this.#d.add(t);
            t.clear(), e.clear()
        }
        oncommit(t) {
            this.#i.add(t)
        }
        ondiscard(t) {
            this.#r.add(t)
        }
        settled() {
            return (this.#s ??= g()).promise
        }
        static ensure() {
            if (null === le) {
                const t = le = new be;
                fe || he || rt(() => {
                    t.#t || t.flush()
                })
            }
            return le
        }
        apply() {
            ue = null
        }
        schedule(t) {
            if (de = t, t.b?.is_pending && 16777228 & t.f && 0 === (t.f & E)) t.b.defer_effect(t);
            else {
                for (var e = t; null !== e.parent;) {
                    var n = (e = e.parent).f;
                    if (!(null === pe || e !== ze || null !== He && 2 & He.f)) return;
                    if (96 & n) {
                        if (0 === (n & S)) return;
                        e.f ^= S
                    }
                }
                this.#l.push(e)
            }
        }
        #m() {
            if (this.linked) {
                var t = this.#e,
                    e = this.#n;
                null === t ? oe = e : t.#n = e, null === e ? se = t : e.#e = t, this.linked = !1
            }
        }
    }

    function ye(t) {
        var e = he;
        he = !0;
        try {
            for (;;) {
                if (at(), null === le) return;
                le.flush()
            }
        } finally {
            he = e
        }
    }
    let we = null;

    function Se(t) {
        var e = t.length;
        if (0 !== e) {
            for (var n = 0; n < e;) {
                var i = t[n++];
                if (!(24576 & i.f) && en(i) && (we = new Set, ln(i), null === i.deps && null === i.first && null === i.nodes && null === i.teardown && null === i.ac && In(i), we?.size > 0)) {
                    Te.clear();
                    for (const t of we) {
                        if (24576 & t.f) continue;
                        const e = [t];
                        let n = t.parent;
                        for (; null !== n;) we.has(n) && (we.delete(n), e.push(n)), n = n.parent;
                        for (let t = e.length - 1; t >= 0; t--) {
                            const n = e[t];
                            24576 & n.f || ln(n)
                        }
                    }
                    we.clear()
                }
            }
            we = null
        }
    }

    function xe(t, e, n, i) {
        if (!n.has(t) && (n.add(t), null !== t.reactions))
            for (const r of t.reactions) {
                const t = r.f;
                2 & t ? xe(r, e, n, i) : 4194320 & t && 0 === (t & x) && $e(r, e, i) && (Nt(r, x), _e(r))
            }
    }

    function $e(t, e, n) {
        const i = n.get(t);
        if (void 0 !== i) return i;
        if (null !== t.deps)
            for (const i of t.deps) {
                if (r.call(e, i)) return !0;
                if (2 & i.f && $e(i, e, n)) return n.set(i, !0), !0
            }
        return n.set(t, !1), !1
    }

    function _e(t) {
        le.schedule(t)
    }

    function ke(t, e) {
        if (0 === (t.f & b) || 0 === (t.f & S)) {
            0 !== (t.f & x) ? e.d.push(t) : 0 !== (t.f & $) && e.m.push(t), Nt(t, S);
            for (var n = t.first; null !== n;) ke(n, e), n = n.next
        }
    }

    function Ee(t) {
        Nt(t, S);
        for (var e = t.first; null !== e;) Ee(e), e = e.next
    }
    let Ce = new Set;
    const Te = new Map;
    let Ae = !1;

    function Ie(t, e) {
        return {
            f: 0,
            v: t,
            reactions: null,
            equals: V,
            rv: 0,
            wv: 0
        }
    }

    function Oe(t, e) {
        const n = Ie(t);
        return Qe(n), n
    }

    function Le(t, e = !1, n = !0) {
        const i = Ie(t);
        return e || (i.equals = W), i
    }

    function De(t, e, n = !1) {
        return null === He || Fe && 0 === (He.f & A) || !(4325394 & He.f) || null !== Ve && Ve.has(t) || function() {
            throw new Error("https://svelte.dev/e/state_unsafe_mutation")
        }(), Re(t, n ? vt(e) : e, ge)
    }

    function Re(t, e, n = null) {
        if (!t.equals(e)) {
            Pe ? Te.set(t, e) : Te.has(t) || Te.set(t, t.v);
            var i = be.ensure();
            if (i.capture(t, e), 2 & t.f) {
                const e = t;
                0 !== (t.f & x) && ie(e), null === ue && Ut(e)
            }
            t.wv = tn(), Ne(t, x, n), null === ze || 0 === (ze.f & S) || 96 & ze.f || (null === Ge ? function(t) {
                Ge = t
            }([t]) : Ge.push(t)), !i.is_fork && Ce.size > 0 && !Ae && function() {
                Ae = !1;
                for (const t of Ce) {
                    let e;
                    0 !== (t.f & S) && Nt(t, $);
                    try {
                        e = en(t)
                    } catch {
                        e = !0
                    }
                    e && ln(t)
                }
                Ce.clear()
            }()
        }
        return e
    }

    function je(t) {
        De(t, t.v + 1)
    }

    function Ne(t, e, n) {
        var i = t.reactions;
        if (null !== i)
            for (var r = i.length, a = 0; a < r; a++) {
                var o = i[a],
                    s = o.f,
                    l = 0 === (s & x);
                if (l && Nt(o, e), 0 !== (s & A)) Ce.add(o);
                else if (2 & s) {
                    var c = o;
                    ue?.delete(c), 0 === (s & O) && (s & w && (null === ze || 0 === (ze.f & L)) && (o.f |= O), Ne(c, $, n))
                } else if (l) {
                    var u = o;
                    0 !== (s & m) && null !== we && we.add(u), null !== n ? n.push(u) : _e(u)
                }
            }
    }
    let Ue = !1,
        Pe = !1;

    function qe(t) {
        Pe = t
    }
    let He = null,
        Fe = !1;

    function Me(t) {
        He = t
    }
    let ze = null;

    function Be(t) {
        ze = t
    }
    let Ve = null;

    function Qe(t) {
        null !== He && (Ve ??= new Set).add(t)
    }
    let We = null,
        Je = 0,
        Ge = null;
    let Ke = 1,
        Ze = 0,
        Ye = Ze;

    function Xe(t) {
        Ye = t
    }

    function tn() {
        return ++Ke
    }

    function en(t) {
        var e = t.f;
        if (0 !== (e & x)) return !0;
        if (2 & e && (t.f &= -65537), 0 !== (e & $)) {
            for (var n = t.deps, i = n.length, r = 0; r < i; r++) {
                var a = n[r];
                if (en(a) && re(a), a.wv > t.wv) return !0
            }
            0 !== (e & w) && null === ue && Nt(t, S)
        }
        return !1
    }

    function nn(t, e, n = !0) {
        var i = t.reactions;
        if (null !== i && (null === Ve || !Ve.has(t)))
            for (var r = 0; r < i.length; r++) {
                var a = i[r];
                2 & a.f ? nn(a, e, !1) : e === a && (n ? Nt(a, x) : 0 !== (a.f & S) && Nt(a, $), _e(a))
            }
    }

    function rn(t) {
        var e = We,
            n = Je,
            i = Ge,
            r = He,
            a = Ve,
            o = Z,
            s = Fe,
            l = Ye,
            c = t.f;
        We = null, Je = 0, Ge = null, He = 96 & c ? null : t, Ve = null, Y(t.ctx), Fe = !1, Ye = ++Ze, null !== t.ac && (Gt(() => {
            t.ac.abort(z)
        }), t.ac = null);
        try {
            t.f |= L;
            var u = (0, t.fn)();
            t.f |= E;
            var d = an(t);
            if (!(null === Ge || Fe || null === d || 6146 & t.f))
                for (var h = 0; h < Ge.length; h++) nn(Ge[h], t);
            if (null !== r && r !== t) {
                if (Ze++, null !== r.deps)
                    for (let t = 0; t < n; t += 1) r.deps[t].rv = Ze;
                if (null !== e)
                    for (const t of e) t.rv = Ze;
                null !== Ge && (null === i ? i = Ge : i.push(...Ge))
            }
            return 0 !== (t.f & D) && (t.f ^= D), u
        } catch (e) {
            return an(t),
                function(t) {
                    var e = ze;
                    if (null === e) return He.f |= D, t;
                    if (0 === (e.f & E) && !(4 & e.f)) throw t;
                    Rt(t, e)
                }(e)
        } finally {
            t.f ^= L, We = e, Je = n, Ge = i, He = r, Ve = a, Y(o), Fe = s, Ye = l
        }
    }

    function an(t) {
        var e = t.deps,
            n = le?.is_fork;
        if (null !== We) {
            var i;
            if (n || sn(t, Je), null !== e && Je > 0)
                for (e.length = Je + We.length, i = 0; i < We.length; i++) e[Je + i] = We[i];
            else t.deps = e = We;
            if (vn() && 0 !== (t.f & w))
                for (i = Je; i < e.length; i++)(e[i].reactions ??= []).push(t)
        } else !n && null !== e && Je < e.length && (sn(t, Je), e.length = Je);
        return e
    }

    function on(t, e) {
        let n = e.reactions;
        if (null !== n) {
            var a = i.call(n, t);
            if (-1 !== a) {
                var o = n.length - 1;
                0 === o ? n = e.reactions = null : (n[a] = n[o], n.pop())
            }
        }
        if (null === n && 2 & e.f && (null === We || !r.call(We, e))) {
            var s = e;
            0 !== (s.f & w) && (s.f ^= w, s.f &= -65537), s.v !== G && Ut(s), null !== s.ac && Gt(() => {
                    s.ac.abort(z), s.ac = null, Nt(s, x)
                }),
                function(t) {
                    if (null !== t.effects)
                        for (const e of t.effects)(e.teardown || e.ac) && (e.teardown?.(), null !== e.ac && Gt(() => {
                            e.ac.abort(z), e.ac = null
                        }), null !== e.fn && (e.teardown = p), sn(e, 0), Cn(e))
                }(s), sn(s, 0)
        }
    }

    function sn(t, e) {
        var n = t.deps;
        if (null !== n)
            for (var i = e; i < n.length; i++) on(t, n[i])
    }

    function ln(t) {
        var e = t.f;
        if (0 === (e & k)) {
            Nt(t, S);
            var n = ze,
                i = Ue;
            ze = t, Ue = !(96 & e);
            try {
                16777232 & e ? function(t) {
                    var e = t.first;
                    for (; null !== e;) {
                        var n = e.next;
                        0 === (e.f & b) && Tn(e), e = n
                    }
                }(t) : Cn(t), En(t);
                var r = rn(t);
                t.teardown = "function" == typeof r ? r : null, t.wv = Ke
            } finally {
                Ue = i, ze = n
            }
        }
    }
    async function cn() {
        await Promise.resolve(), ye()
    }

    function un(t) {
        var e = !!(2 & t.f);
        if (null !== He && !Fe && !(null !== ze && 0 !== (ze.f & k) || null !== Ve && Ve.has(t))) {
            var n = He.deps;
            if (0 !== (He.f & L)) t.rv < Ze && (t.rv = Ze, null === We && null !== n && n[Je] === t ? Je++ : null === We ? We = [t] : We.push(t));
            else {
                He.deps ??= [], r.call(He.deps, t) || He.deps.push(t);
                var i = t.reactions;
                null === i ? t.reactions = [He] : r.call(i, He) || i.push(He)
            }
        }
        if (Pe && Te.has(t)) return Te.get(t);
        if (e) {
            var a = t;
            if (Pe) {
                var o = a.v;
                return (0 === (a.f & S) && null !== a.reactions || hn(a)) && (o = ie(a)), Te.set(a, o), o
            }
            var s = 0 === (a.f & w) && !Fe && null !== He && (Ue || 0 !== (He.f & w)),
                l = 0 === (a.f & E);
            en(a) && (s && (a.f |= w), re(a)), s && !l && (ae(a), dn(a))
        }
        if (ue?.has(t)) return ue.get(t);
        if (0 !== (t.f & D)) throw t.v;
        return t.v
    }

    function dn(t) {
        if (t.f |= w, null !== t.deps)
            for (const e of t.deps)(e.reactions ??= []).push(t), 2 & e.f && 0 === (e.f & w) && (ae(e), dn(e))
    }

    function hn(t) {
        if (t.v === G) return !0;
        if (null === t.deps) return !1;
        for (const e of t.deps) {
            if (Te.has(e)) return !0;
            if (2 & e.f && hn(e)) return !0
        }
        return !1
    }

    function fn(t) {
        var e = Fe;
        try {
            return Fe = !0, t()
        } finally {
            Fe = e
        }
    }

    function pn(t) {
        null === ze && (null === He && function() {
            throw new Error("https://svelte.dev/e/effect_orphan")
        }(), function() {
            throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
        }()), Pe && function() {
            throw new Error("https://svelte.dev/e/effect_in_teardown")
        }()
    }

    function gn(t, e) {
        var n = ze;
        null !== n && 0 !== (n.f & _) && (t |= _);
        var i = {
            ctx: Z,
            deps: null,
            nodes: null,
            f: t | x | w,
            first: null,
            fn: e,
            last: null,
            next: null,
            parent: n,
            b: n && n.b,
            prev: null,
            teardown: null,
            wv: 0,
            ac: null
        };
        le?.register_created_effect(i);
        var r = i;
        if (4 & t) null !== pe ? pe.push(i) : be.ensure().schedule(i);
        else if (null !== e) {
            try {
                ln(i)
            } catch (t) {
                throw Tn(i), t
            }
            null === r.deps && null === r.teardown && null === r.nodes && r.first === r.last && 0 === (r.f & I) && (r = r.first, 0 !== (t & m) && 0 !== (t & T) && null !== r && (r.f |= T))
        }
        if (null !== r && (r.parent = n, null !== n && function(t, e) {
                var n = e.last;
                null === n ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t)
            }(r, n), null !== He && 2 & He.f && 0 === (t & y))) {
            var a = He;
            (a.effects ??= []).push(r)
        }
        return i
    }

    function vn() {
        return null !== He && !Fe
    }

    function mn(t) {
        const e = gn(8, null);
        return Nt(e, S), e.teardown = t, e
    }

    function bn(t) {
        pn();
        var e = ze.f;
        if (!(!He && 0 !== (e & b) && null !== Z && !Z.i)) return yn(t);
        var n = Z;
        (n.e ??= []).push(t)
    }

    function yn(t) {
        return gn(1048580, t)
    }

    function wn(t) {
        return gn(4, t)
    }

    function Sn(t, e = 0) {
        return gn(8 | e, t)
    }

    function xn(t, e = [], n = [], i = []) {
        Kt(i, e, n, e => {
            gn(8, () => {
                t(...e.map(un))
            })
        })
    }

    function $n(t, e = 0) {
        return gn(m | e, t)
    }

    function _n(t, e = 0) {
        return gn(v | e, t)
    }

    function kn(t) {
        return gn(524320, t)
    }

    function En(t) {
        var e = t.teardown;
        if (null !== e) {
            const n = Pe,
                i = He;
            qe(!0), Me(null);
            try {
                e.call(null)
            } catch (e) {
                Rt(e, t.parent)
            } finally {
                qe(n), Me(i)
            }
        }
    }

    function Cn(t, e = !1) {
        var n = t.first;
        for (t.first = t.last = null; null !== n;) {
            const t = n.ac;
            null !== t && Gt(() => {
                t.abort(z)
            });
            var i = n.next;
            0 !== (n.f & y) ? n.parent = null : Tn(n, e), n = i
        }
    }

    function Tn(t, e = !0) {
        var n = !1;
        (e || 262144 & t.f) && null !== t.nodes && null !== t.nodes.end && (An(t.nodes.start, t.nodes.end), n = !0), t.f |= C, Cn(t, e && !n), sn(t, 0);
        var i = t.nodes && t.nodes.t;
        if (null !== i)
            for (const t of i) t.stop();
        En(t), t.f ^= C, t.f |= k;
        var r = t.parent;
        null !== r && null !== r.first && In(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null
    }

    function An(t, e) {
        for (; null !== t;) {
            var n = t === e ? null : Ct(t);
            t.remove(), t = n
        }
    }

    function In(t) {
        var e = t.parent,
            n = t.prev,
            i = t.next;
        null !== n && (n.next = i), null !== i && (i.prev = n), null !== e && (e.first === t && (e.first = i), e.last === t && (e.last = n))
    }

    function On(t, e, n = !0) {
        var i = [];
        t.f |= 256, Ln(t, i, !0);
        var r = () => {
                n && Tn(t), e && e()
            },
            a = i.length;
        if (a > 0) {
            var o = () => --a || r();
            for (var s of i) s.out(o)
        } else r()
    }

    function Ln(t, e, n) {
        if (0 === (t.f & _)) {
            t.f ^= _;
            var i = t.nodes && t.nodes.t;
            if (null !== i)
                for (const t of i)(t.is_global || n) && e.push(t);
            for (var r = t.first; null !== r;) {
                var a = r.next;
                if (0 === (r.f & y)) Ln(r, e, !!(0 !== (r.f & T) || 0 !== (r.f & b) && 0 !== (t.f & m)) && n);
                r = a
            }
        }
    }

    function Dn(t) {
        t.f &= -257, Rn(t, !0)
    }

    function Rn(t, e) {
        if (!(256 & t.f) && 0 !== (t.f & _)) {
            t.f ^= _, 0 === (t.f & S) && (Nt(t, x), be.ensure().schedule(t));
            for (var n = t.first; null !== n;) {
                var i = n.next;
                Rn(n, !!(0 !== (n.f & T) || 0 !== (n.f & b)) && e), n = i
            }
            var r = t.nodes && t.nodes.t;
            if (null !== r)
                for (const t of r)(t.is_global || e) && t.in()
        }
    }

    function jn(t, e) {
        if (t.nodes)
            for (var n = t.nodes.start, i = t.nodes.end; null !== n;) {
                var r = n === i ? null : Ct(n);
                e.append(n), n = r
            }
    }

    function Nn(t) {
        const e = {
            get: t => zt(e.store)[t],
            set: (t, n) => {
                "string" == typeof t ? Object.assign(zt(e.store), {
                    [t]: n
                }) : Object.assign(zt(e.store), t), e.store.set(zt(e.store))
            },
            store: Mt(t)
        };
        return e
    }
    globalThis.$altcha = globalThis.$altcha || {
        algorithms: new Map,
        defaults: Nn({}),
        i18n: Nn({}),
        instances: new Set,
        plugins: new Set
    };
    globalThis.$altcha.i18n.set("en", {
        ariaLinkLabel: "Altcha (official website)",
        cancel: "Cancel",
        enterCode: "Enter code",
        enterCodeAria: "Enter code you hear. Press Space to play audio.",
        enterCodeFromImage: "To proceed, please enter the code from the image below.",
        error: "Verification failed. Try again later.",
        expired: "Verification expired. Try again.",
        footer: 'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>',
        getAudioChallenge: "Get an audio challenge",
        label: "I'm not a robot",
        loading: "Loading...",
        reload: "Reload",
        verify: "Verify",
        verificationRequired: "Verification required!",
        verified: "Verified",
        verifying: "Verifying...",
        waitAlert: "Verifying... please wait."
    });
    "undefined" != typeof window && ((window.__svelte ??= {}).v ??= new Set).add("5");
    const Un = Symbol("events"),
        Pn = new Set,
        qn = new Set;

    function Hn(t, e, n, i = {}) {
        function r(t) {
            if (i.capture || Qn.call(e, t), !t.cancelBubble) return Gt(() => n?.call(this, t))
        }
        return t.startsWith("pointer") || t.startsWith("touch") || "wheel" === t ? rt(() => {
            e.addEventListener(t, r, i)
        }) : e.addEventListener(t, r, i), r
    }

    function Fn(t, e, n, i, r) {
        var a = {
                capture: i,
                passive: r
            },
            o = Hn(t, e, n, a);
        (e === document.body || e === window || e === document || e instanceof HTMLMediaElement) && mn(() => {
            e.removeEventListener(t, o, a)
        })
    }

    function Mn(t, e, n) {
        (e[Un] ??= {})[t] = n
    }

    function zn(t) {
        for (var e = 0; e < t.length; e++) Pn.add(t[e]);
        for (var n of qn) n(t)
    }
    let Bn = null,
        Vn = !1;

    function Qn(t) {
        var e = this,
            n = e.ownerDocument,
            i = t.type,
            r = t.composedPath?.() || [],
            a = r[0] || t.target;
        Bn = t, Vn || (Vn = !0, setTimeout(() => {
            Vn = !1, Bn = null
        }));
        var o = 0,
            l = Bn === t && t[Un];
        if (l) {
            var c = r.indexOf(l);
            if (-1 !== c && (e === document || e === window)) return void(t[Un] = e);
            var u = r.indexOf(e);
            if (-1 === u) return;
            c <= u && (o = c)
        }
        if ((a = r[o] || t.target) !== e) {
            s(t, "currentTarget", {
                configurable: !0,
                get: () => a || n
            });
            var d = He,
                h = ze;
            Me(null), Be(null);
            try {
                for (var f, p = []; null !== a && a !== e;) {
                    try {
                        var g = a[Un]?.[i];
                        null == g || a.disabled && t.target !== a || g.call(a, t)
                    } catch (t) {
                        f ? p.push(t) : f = t
                    }
                    if (t.cancelBubble) break;
                    o++, a = o < r.length ? r[o] : null
                }
                if (f) {
                    for (let t of p) queueMicrotask(() => {
                        throw t
                    });
                    throw f
                }
            } finally {
                t[Un] = e, delete t.currentTarget, Me(d), Be(h)
            }
        }
    }
    const Wn = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
        createHTML: t => t
    });

    function Jn(t) {
        var e = Lt("template");
        return e.innerHTML = function(t) {
            return Wn?.createHTML(t) ?? t
        }(t.replaceAll("<!>", "\x3c!----\x3e")), e.content
    }

    function Gn(t, e) {
        var n = ze;
        null === n.nodes && (n.nodes = {
            start: t,
            end: e,
            a: null,
            t: null
        })
    }

    function Kn(t, e) {
        var n, i = !!(1 & e),
            r = !!(2 & e),
            a = !t.startsWith("<!>");
        return () => {
            if (lt) return Gn(st, null), st;
            void 0 === n && (n = Jn(a ? t : "<!>" + t), i || (n = Et(n)));
            var e = r || St ? document.importNode(n, !0) : n.cloneNode(!0);
            i ? Gn(Et(e), e.lastChild) : Gn(e, e);
            return e
        }
    }

    function Zn(t, e, n = "svg") {
        var i, r = `<${n}>${!t.startsWith("<!>")?t:"<!>"+t}</${n}>`;
        return () => {
            if (lt) return Gn(st, null), st;
            if (!i) {
                var t = Jn(r);
                i = Et(Et(t))
            }
            var e = i.cloneNode(!0);
            return Gn(e, e), e
        }
    }

    function Yn(t, e) {
        return Zn(t, 0, "svg")
    }

    function Xn(t = "") {
        if (!lt) {
            var e = kt(t + "");
            return Gn(e, e), e
        }
        var n = st;
        return 3 !== n.nodeType ? (n.before(n = kt()), ut(n)) : Dt(n), Gn(n, n), n
    }

    function ti() {
        if (lt) return Gn(st, null), st;
        var t = document.createDocumentFragment(),
            e = document.createComment(""),
            n = kt();
        return t.append(e, n), Gn(e, n), t
    }

    function ei(t, e) {
        if (lt) {
            var n = ze;
            return 0 !== (n.f & E) && null !== n.nodes.end || (n.nodes.end = st), void dt()
        }
        null !== t && t.before(e)
    }

    function ni(t) {
        return t.endsWith("capture") && "gotpointercapture" !== t && "lostpointercapture" !== t
    }
    const ii = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

    function ri(t) {
        return ii.includes(t)
    }
    const ai = {
        formnovalidate: "formNoValidate",
        ismap: "isMap",
        nomodule: "noModule",
        playsinline: "playsInline",
        readonly: "readOnly",
        defaultvalue: "defaultValue",
        defaultchecked: "defaultChecked",
        srcobject: "srcObject",
        novalidate: "noValidate",
        allowfullscreen: "allowFullscreen",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback"
    };

    function oi(t) {
        return t = t.toLowerCase(), ai[t] ?? t
    }
    const si = ["touchstart", "touchmove"];

    function li(t) {
        return si.includes(t)
    }
    class ci {
        parent;
        is_pending = !1;
        transform_error;
        #$;
        #_ = lt ? st : null;
        #k;
        #E;
        #C;
        #T = null;
        #A = null;
        #I = null;
        #O = null;
        #L = 0;
        #D = 0;
        #R = !1;
        #u = new Set;
        #d = new Set;
        #j = null;
        #N = function(t) {
            let e, n = 0,
                i = Ie(0);
            return () => {
                vn() && (un(i), Sn(() => (0 === n && (e = fn(() => t(() => je(i)))), n += 1, () => {
                    rt(() => {
                        n -= 1, 0 === n && (e?.(), e = void 0, je(i))
                    })
                })))
            }
        }(() => (this.#j = Ie(this.#L), () => {
            this.#j = null
        }));
        constructor(t, e, n, i) {
            this.#$ = t, this.#k = e, this.#E = t => {
                var e = ze;
                e.b = this, e.f |= 128, n(t)
            }, this.parent = ze.b, this.transform_error = i ?? this.parent?.transform_error ?? (t => t), this.#C = $n(() => {
                if (lt) {
                    const t = this.#_;
                    dt();
                    const e = "[!" === t.data;
                    if (t.data.startsWith("[?")) {
                        const e = JSON.parse(t.data.slice(2));
                        this.#U(e)
                    } else e ? this.#P() : this.#q()
                } else this.#H()
            }, 589824), lt && (this.#$ = st)
        }
        #q() {
            try {
                this.#T = kn(() => this.#E(this.#$))
            } catch (t) {
                this.error(t)
            }
        }
        #U(t) {
            const e = this.#k.failed,
                {
                    reset: n,
                    invoke_onerror: i
                } = this.#F(t);
            rt(i), e && (this.#I = kn(() => {
                e(this.#$, () => t, () => n)
            }))
        }
        #F(t) {
            var e = !1,
                n = !1;
            const i = () => {
                e ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (e = !0, n && function() {
                    throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
                }(), null !== this.#I && On(this.#I, () => {
                    this.#I = null
                }), this.#M(() => {
                    this.#H()
                }))
            };
            return {
                reset: i,
                invoke_onerror: () => {
                    try {
                        n = !0, this.#k.onerror?.(t, i), n = !1
                    } catch (t) {
                        Rt(t, this.#C && this.#C.parent)
                    }
                }
            }
        }
        #P() {
            const t = this.#k.pending;
            t && (this.is_pending = !0, this.#A = kn(() => t(this.#$)), rt(() => {
                var t = this.#O = document.createDocumentFragment(),
                    e = kt(),
                    n = !1;
                if (t.append(e), this.#T = this.#M(() => {
                        try {
                            return kn(() => this.#E(e))
                        } catch (t) {
                            try {
                                this.error(t), n = !0
                            } catch (t) {
                                Rt(t, this.#C.parent)
                            }
                            return null
                        }
                    }), null === this.#T) return this.#O = null, void(n && this.#z(le));
                0 === this.#D && (this.#$.before(t), this.#O = null, On(this.#A, () => {
                    this.#A = null
                }), this.#z(le))
            }))
        }
        #H() {
            try {
                if (this.is_pending = this.has_pending_snippet(), this.#D = 0, this.#L = 0, this.#T = kn(() => {
                        this.#E(this.#$)
                    }), this.#D > 0) {
                    var t = this.#O = document.createDocumentFragment();
                    jn(this.#T, t);
                    const e = this.#k.pending;
                    this.#A = kn(() => e(this.#$))
                } else this.#z(le)
            } catch (t) {
                this.error(t)
            }
        }
        #z(t) {
            this.is_pending = !1, t.transfer_effects(this.#u, this.#d)
        }
        defer_effect(t) {
            qt(t, this.#u, this.#d)
        }
        is_rendered() {
            return !this.is_pending && (!this.parent || this.parent.is_rendered())
        }
        has_pending_snippet() {
            return !!this.#k.pending
        }
        #M(t) {
            var e = ze,
                n = He,
                i = Z;
            Be(this.#C), Me(this.#C), Y(this.#C.ctx);
            try {
                return be.ensure(), t()
            } finally {
                Be(e), Me(n), Y(i)
            }
        }
        #B(t, e) {
            this.has_pending_snippet() ? (this.#D += t, 0 === this.#D && (this.#z(e), this.#A && On(this.#A, () => {
                this.#A = null
            }), this.#O && (this.#$.before(this.#O), this.#O = null))) : this.parent && this.parent.#B(t, e)
        }
        update_pending_count(t, e) {
            this.#B(t, e), this.#L += t, this.#j && !this.#R && (this.#R = !0, rt(() => {
                this.#R = !1, this.#j && Re(this.#j, this.#L)
            }))
        }
        get_effect_pending() {
            return this.#N(), un(this.#j)
        }
        error(t) {
            if (!this.#k.onerror && !this.#k.failed) throw t;
            le?.is_fork ? (this.#T && le.skip_effect(this.#T), this.#A && le.skip_effect(this.#A), this.#I && le.skip_effect(this.#I), le.oncommit(() => {
                this.#V(t)
            })) : this.#V(t)
        }
        #V(t) {
            this.#T && (Tn(this.#T), this.#T = null), this.#A && (Tn(this.#A), this.#A = null), this.#I && (Tn(this.#I), this.#I = null), lt && (ut(this.#_), ft(), ut(pt()));
            let e = this.#k.failed;
            const n = t => {
                const {
                    reset: n,
                    invoke_onerror: i
                } = this.#F(t);
                i(), e && (this.#I = this.#M(() => {
                    try {
                        return kn(() => {
                            var i = ze;
                            i.b = this, i.f |= 128, e(this.#$, () => t, () => n)
                        })
                    } catch (t) {
                        return Rt(t, this.#C.parent), null
                    }
                }))
            };
            rt(() => {
                var e;
                try {
                    e = this.transform_error(t)
                } catch (t) {
                    return void Rt(t, this.#C && this.#C.parent)
                }
                null !== e && "object" == typeof e && "function" == typeof e.then ? e.then(n, t => Rt(t, this.#C && this.#C.parent)) : n(e)
            })
        }
    }

    function ui(t, e) {
        var n = null == e ? "" : "object" == typeof e ? `${e}` : e;
        n !== (t[F] ??= t.nodeValue) && (t[F] = n, t.nodeValue = `${n}`)
    }

    function di(t, e) {
        return pi(t, e)
    }

    function hi(t, e) {
        _t(), e.intro = e.intro ?? !1;
        const n = e.target,
            i = lt,
            r = st;
        try {
            for (var a = Et(n); a && (8 !== a.nodeType || "[" !== a.data);) a = Ct(a);
            if (!a) throw J;
            ct(!0), ut(a);
            const i = pi(t, {
                ...e,
                anchor: a
            });
            return ct(!1), i
        } catch (i) {
            if (i instanceof Error && i.message.split("\n").some(t => t.startsWith("https://svelte.dev/e/"))) throw i;
            return i !== J && console.warn("Failed to hydrate: ", i), !1 === e.recover && function() {
                throw new Error("https://svelte.dev/e/hydration_failed")
            }(), _t(), n.textContent = "", ct(!1), di(t, e)
        } finally {
            ct(i), ut(r)
        }
    }
    const fi = new Map;

    function pi(t, {
        target: e,
        anchor: n,
        props: i = {},
        events: r,
        context: o,
        intro: s = !0,
        transformError: l
    }) {
        _t();
        var c = void 0,
            u = function(t) {
                be.ensure();
                const e = gn(524352, t);
                return (t = {}) => new Promise(n => {
                    t.outro ? On(e, () => {
                        Tn(e), n(void 0)
                    }) : (Tn(e), n(void 0))
                })
            }(() => {
                var s = n ?? e.appendChild(kt());
                ! function(t, e, n, i) {
                    new ci(t, e, n, i)
                }(s, {
                    pending: () => {}
                }, e => {
                    if (X({}), o && (Z.c = o), r && (i.$$events = r), lt && Gn(e, null), c = t(e, i) || et(), lt && (ze.nodes.end = st, null === st || 8 !== st.nodeType || "]" !== st.data)) throw ot(), J;
                    tt()
                }, l);
                var u = new Set,
                    d = t => {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (!u.has(i)) {
                                u.add(i);
                                var r = li(i);
                                for (const t of [e, document]) {
                                    var a = fi.get(t);
                                    void 0 === a && (a = new Map, fi.set(t, a));
                                    var o = a.get(i);
                                    void 0 === o ? (t.addEventListener(i, Qn, {
                                        passive: r
                                    }), a.set(i, 1)) : a.set(i, o + 1)
                                }
                            }
                        }
                    };
                return d(a(Pn)), qn.add(d), () => {
                    for (var t of u)
                        for (const n of [e, document]) {
                            var i = fi.get(n),
                                r = i.get(t);
                            0 == --r ? (n.removeEventListener(t, Qn), i.delete(t), 0 === i.size && fi.delete(n)) : i.set(t, r)
                        }
                    qn.delete(d), s !== n && s.parentNode?.removeChild(s)
                }
            });
        return gi.set(c, u), c
    }
    let gi = new WeakMap;
    class vi {
        anchor;
        #Q = new Map;
        #W = new Map;
        #J = new Map;
        #G = new Set;
        #K = !0;
        constructor(t, e = !0) {
            this.anchor = t, this.#K = e
        }
        #x = t => {
            if (this.#Q.has(t)) {
                var e = this.#Q.get(t),
                    n = this.#W.get(e);
                if (n) Dn(n), this.#G.delete(e);
                else {
                    var i = this.#J.get(e);
                    i && (Dn(i.effect), this.#W.set(e, i.effect), this.#J.delete(e), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect)
                }
                for (const [e, n] of this.#Q) {
                    if (this.#Q.delete(e), e === t) break;
                    const i = this.#J.get(n);
                    i && (Tn(i.effect), this.#J.delete(n))
                }
                for (const [t, i] of this.#W) {
                    if (t === e || this.#G.has(t)) continue;
                    const r = () => {
                        if (Array.from(this.#Q.values()).includes(t)) {
                            var e = document.createDocumentFragment();
                            jn(i, e), e.append(kt()), this.#J.set(t, {
                                effect: i,
                                fragment: e
                            })
                        } else Tn(i);
                        this.#G.delete(t), this.#W.delete(t)
                    };
                    this.#K || !n ? (this.#G.add(t), On(i, r, !1)) : r()
                }
            }
        };
        #Z = t => {
            this.#Q.delete(t);
            const e = Array.from(this.#Q.values());
            for (const [t, n] of this.#J) e.includes(t) || (Tn(n.effect), this.#J.delete(t))
        };
        ensure(t, e) {
            var n = le;
            !e || this.#W.has(t) || this.#J.has(t) || this.#W.set(t, kn(() => e(this.anchor)));
            this.#Q.set(n, t), lt && (this.anchor = st), this.#x(n)
        }
    }

    function mi(t) {
        null === Z && function() {
            throw new Error("https://svelte.dev/e/lifecycle_outside_component")
        }(), bn(() => {
            const e = fn(t);
            if ("function" == typeof e) return e
        })
    }

    function bi(t, e, n = !1) {
        var i;
        lt && (i = st, dt());
        var r = new vi(t);

        function a(t, e) {
            if (lt) {
                var n = gt(i);
                if (t !== parseInt(n.substring(1))) {
                    var a = pt();
                    return ut(a), r.anchor = a, ct(!1), r.ensure(t, e), void ct(!0)
                }
            }
            r.ensure(t, e)
        }
        $n(() => {
            var t = !1;
            e((e, n = 0) => {
                t = !0, a(n, e)
            }), t || a(-1, null)
        }, n ? T : 0)
    }
    const yi = Symbol("NaN");

    function wi(t, e, n = !1, i = !1, r = !1, a = !1) {
        var o = t,
            s = "";
        if (n) {
            var l = t;
            lt && (o = ut(Et(l)))
        }
        xn(() => {
            var t = ze;
            if (s !== (s = e() ?? "")) {
                if (n && !lt) return t.nodes = null, l.innerHTML = s, void("" !== s && Gn(Et(l), l.lastChild));
                if (null !== t.nodes && (An(t.nodes.start, t.nodes.end), t.nodes = null), "" !== s) {
                    if (lt) {
                        st.data;
                        for (var a = dt(), c = a; null !== a && (8 !== a.nodeType || "" !== a.data);) c = a, a = Ct(a);
                        if (null === a) throw ot(), J;
                        return Gn(st, c), void(o = ut(a))
                    }
                    var u = Lt(i ? "svg" : r ? "math" : "template", i ? "http://www.w3.org/2000/svg" : r ? "http://www.w3.org/1998/Math/MathML" : void 0);
                    u.innerHTML = s;
                    var d = i || r ? u : u.content;
                    if (Gn(Et(d), d.lastChild), i || r)
                        for (; Et(d);) o.before(Et(d));
                    else o.before(d)
                }
            } else lt && dt()
        })
    }

    function Si(t, e) {
        var n, i = void 0;
        _n(() => {
            i !== (i = e()) && (n && (Tn(n), n = null), i && (n = kn(() => {
                wn(() => i(t))
            })))
        })
    }

    function xi(t) {
        var e, n, i = "";
        if ("string" == typeof t || "number" == typeof t) i += t;
        else if ("object" == typeof t)
            if (Array.isArray(t)) {
                var r = t.length;
                for (e = 0; e < r; e++) t[e] && (n = xi(t[e])) && (i && (i += " "), i += n)
            } else
                for (n in t) t[n] && (i && (i += " "), i += n);
        return i
    }

    function $i(t) {
        return "object" == typeof t ? function() {
            for (var t, e, n = 0, i = "", r = arguments.length; n < r; n++)(t = arguments[n]) && (e = xi(t)) && (i && (i += " "), i += e);
            return i
        }(t) : t ?? ""
    }
    const _i = [..." \t\n\r\f \v\ufeff"];

    function ki(t, e = !1) {
        var n = e ? " !important;" : ";",
            i = "";
        for (var r of Object.keys(t)) {
            var a = t[r];
            null != a && "" !== a && (i += " " + r + ": " + a + n)
        }
        return i
    }

    function Ei(t) {
        return "-" !== t[0] || "-" !== t[1] ? t.toLowerCase() : t
    }

    function Ci(t, e, n, i, r, a) {
        var o = t[q];
        if (lt || o !== n || void 0 === o) {
            var s = function(t, e, n) {
                var i = null == t ? "" : "" + t;
                if (n)
                    for (var r of Object.keys(n))
                        if (n[r]) i = i ? i + " " + r : r;
                        else if (i.length)
                    for (var a = r.length, o = 0;
                        (o = i.indexOf(r, o)) >= 0;) {
                        var s = o + a;
                        0 !== o && !_i.includes(i[o - 1]) || s !== i.length && !_i.includes(i[s]) ? o = s : i = (0 === o ? "" : i.substring(0, o)) + i.substring(s + 1)
                    }
                return "" === i ? null : i
            }(n, 0, a);
            lt && s === t.getAttribute("class") || (null == s ? t.removeAttribute("class") : e ? t.className = s : t.setAttribute("class", s)), t[q] = n
        } else if (a && r !== a)
            for (var l in a) {
                var c = !!a[l];
                null != r && c === !!r[l] || t.classList.toggle(l, c)
            }
        return a
    }

    function Ti(t, e = {}, n, i) {
        for (var r in n) {
            var a = n[r];
            e[r] !== a && (null == n[r] ? t.style.removeProperty(r) : t.style.setProperty(r, a, i))
        }
    }

    function Ai(t, e, n, i) {
        var r = t[H];
        if (lt || r !== e) {
            var a = function(t, e) {
                if (e) {
                    var n, i, r = "";
                    if (Array.isArray(e) ? (n = e[0], i = e[1]) : n = e, t) {
                        t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
                        var a = !1,
                            o = 0,
                            s = !1,
                            l = [];
                        n && l.push(...Object.keys(n).map(Ei)), i && l.push(...Object.keys(i).map(Ei));
                        var c = 0,
                            u = -1;
                        const e = t.length;
                        for (var d = 0; d < e; d++) {
                            var h = t[d];
                            if (s ? "/" === h && "*" === t[d - 1] && (s = !1) : a ? a === h && (a = !1) : "/" === h && "*" === t[d + 1] ? s = !0 : '"' === h || "'" === h ? a = h : "(" === h ? o++ : ")" === h && o--, !s && !1 === a && 0 === o)
                                if (":" === h && -1 === u) u = d;
                                else if (";" === h || d === e - 1) {
                                if (-1 !== u) {
                                    var f = Ei(t.substring(c, u).trim());
                                    l.includes(f) || (";" !== h && d++, r += " " + t.substring(c, d).trim() + ";")
                                }
                                c = d + 1, u = -1
                            }
                        }
                    }
                    return n && (r += ki(n)), i && (r += ki(i, !0)), "" === (r = r.trim()) ? null : r
                }
                return null == t ? null : String(t)
            }(e, i);
            lt && a === t.getAttribute("style") || (null == a ? t.removeAttribute("style") : t.style.cssText = a), t[H] = e
        } else i && (Array.isArray(i) ? (Ti(t, n?.[0], i[0]), Ti(t, n?.[1], i[1], "important")) : Ti(t, n, i));
        return i
    }

    function Ii(t, e) {
        e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected")
    }

    function Oi(t, e) {
        var n = !("__defaultValue" in t);
        (n || t.__defaultValue !== e) && (t.__defaultValue = e, Li(t, !n || "__value" in t))
    }

    function Li(t, e) {
        var i = t.__defaultValue,
            r = t.multiple,
            a = r ? i ?? [] : null;
        if (!r || n(a)) {
            var o = t.selectedIndex,
                s = e && r ? new Set(t.selectedOptions) : null;
            for (var l of t.options) {
                var c = Ri(l);
                Ii(l, r ? a.includes(c) : bt(c, i))
            }
            if (e)
                if (null !== s)
                    for (l of t.options) {
                        var u = s.has(l);
                        l.selected !== u && (l.selected = u)
                    } else t.selectedIndex !== o && (t.selectedIndex = o)
        }
    }

    function Di(t, e, i = !1) {
        if (t.multiple) {
            if (null == e) return;
            if (!n(e)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
            for (var r of t.options) r.selected = e.includes(Ri(r))
        } else {
            for (r of t.options) {
                if (bt(Ri(r), e)) return void(r.selected = !0)
            }
            i && void 0 === e || (t.selectedIndex = -1)
        }
    }

    function Ri(t) {
        return "__value" in t ? t.__value : t.value
    }

    function ji(t) {
        if (null !== t.target.closest("selectedcontent")) return !0;
        if ("childList" === t.type) {
            var e = [...t.addedNodes, ...t.removedNodes];
            return e.length > 0 && e.every(t => "SELECTEDCONTENT" === t.nodeName)
        }
        return !1
    }
    const Ni = Symbol("class"),
        Ui = Symbol("style"),
        Pi = Symbol("is custom element"),
        qi = Symbol("is html"),
        Hi = B ? "link" : "LINK",
        Fi = B ? "input" : "INPUT",
        Mi = B ? "option" : "OPTION",
        zi = B ? "select" : "SELECT",
        Bi = B ? "progress" : "PROGRESS";

    function Vi(t) {
        if (lt) {
            var e = !1,
                n = () => {
                    if (!e) {
                        if (e = !0, t.hasAttribute("value")) {
                            var n = t.value;
                            Qi(t, "value", null), t.value = n
                        }
                        if (t.hasAttribute("checked")) {
                            var i = t.checked;
                            Qi(t, "checked", null), t.checked = i
                        }
                    }
                };
            t[M] = n, rt(n), Jt()
        }
    }

    function Qi(t, e, n, i) {
        var r = Ji(t);
        lt && (r[e] = t.getAttribute(e), "src" === e || "srcset" === e || "href" === e && t.nodeName === Hi) || r[e] !== (r[e] = n) && ("loading" === e && (t[U] = n), null == n ? t.removeAttribute(e) : "string" != typeof n && Ki(t).has(e) ? t[e] = n : t.setAttribute(e, n))
    }

    function Wi(t, e, n = [], i = [], r = [], a, o = !1, s = !1) {
        Kt(r, n, i, n => {
            var i = void 0,
                r = {},
                a = t.nodeName === zi,
                l = !1;
            if (_n(() => {
                    var c = e(...n.map(un)),
                        u = function(t, e, n, i, r = !1) {
                            lt && r && t.nodeName === Fi && ("defaultValue" in n || "defaultChecked" in n || Vi(t));
                            var a = Ji(t),
                                o = a[Pi],
                                s = !a[qi];
                            let l = lt && o;
                            l && ct(!1);
                            var c = e || {},
                                u = t.nodeName === Mi,
                                d = t.nodeName === zi;
                            for (var h in e) h in n || h[0] + h[1] === "$$" || (n[h] = null);
                            n.class ? n.class = $i(n.class) : n[Ni] && (n.class = null), n[Ui] && (n.style ??= null);
                            var f = Ki(t);
                            if (t.nodeName === Fi && "type" in n && ("value" in n || "__value" in n)) {
                                var p = n.type;
                                (p !== c.type || void 0 === p && t.hasAttribute("type")) && (c.type = p, Qi(t, "type", p))
                            }
                            for (const i in n) {
                                let r = n[i];
                                if (u && "value" === i && null == r) t.value = t.__value = "", c[i] = r;
                                else if ("class" !== i)
                                    if ("style" !== i) {
                                        var g = c[i];
                                        if (r !== g || void 0 === r && t.hasAttribute(i)) {
                                            c[i] = r;
                                            var v = i[0] + i[1];
                                            if ("$$" !== v)
                                                if ("on" === v) {
                                                    const e = {},
                                                        n = "$$" + i;
                                                    let a = i.slice(2);
                                                    var m = ri(a);
                                                    if (ni(a) && (a = a.slice(0, -7), e.capture = !0), !m && g) {
                                                        if (null != r) continue;
                                                        t.removeEventListener(a, c[n], e), c[n] = null
                                                    }
                                                    if (m) Mn(a, t, r), zn([a]);
                                                    else if (null != r) {
                                                        let r = function(t) {
                                                            c[i].call(this, t)
                                                        };
                                                        c[n] = Hn(a, t, r, e)
                                                    }
                                                } else if ("style" === i) Qi(t, i, r);
                                            else if ("autofocus" === i) Qt(t, Boolean(r));
                                            else if (o || "__value" !== i && ("value" !== i || null == r))
                                                if ("selected" === i && u) Ii(t, r);
                                                else {
                                                    var b = i;
                                                    s || (b = oi(b));
                                                    var y = "defaultValue" === b || "defaultChecked" === b;
                                                    if (d && "defaultValue" === b) continue;
                                                    if (null != r || o || y) y || (o || "string" != typeof r) && f.has(b) ? (t[b] = r, b in a && (a[b] = G)) : "function" != typeof r && Qi(t, b, r);
                                                    else if (a[i] = null, "value" === b || "checked" === b) {
                                                        let n = t;
                                                        const i = void 0 === e;
                                                        if ("value" === b) {
                                                            let t = n.defaultValue;
                                                            n.removeAttribute(b), n.defaultValue = t, n.value = n.__value = i ? t : null
                                                        } else {
                                                            let t = n.defaultChecked;
                                                            n.removeAttribute(b), n.defaultChecked = t, n.checked = !!i && t
                                                        }
                                                    } else t.removeAttribute(i)
                                                }
                                            else t.value = t.__value = r
                                        }
                                    } else Ai(t, r, e?.[Ui], n[Ui]), c[i] = r, c[Ui] = n[Ui];
                                else Ci(t, "http://www.w3.org/1999/xhtml" === t.namespaceURI, r, 0, e?.[Ni], n[Ni]), c[i] = r, c[Ni] = n[Ni]
                            }
                            return l && ct(!0), c
                        }(t, i, c, 0, o, s);
                    if (l && a) {
                        var d = t;
                        "defaultValue" in c && Oi(d, c.defaultValue), "value" in c && Di(d, c.value)
                    }
                    for (let t of Object.getOwnPropertySymbols(r)) c[t] || Tn(r[t]);
                    for (let e of Object.getOwnPropertySymbols(c)) {
                        var h = c[e];
                        "@attach" !== e.description || i && h === i[e] || (r[e] && Tn(r[e]), r[e] = kn(() => Si(t, () => h))), u[e] = h
                    }
                    i = u
                }), a) {
                var c = t;
                wn(() => {
                    var t = i;
                    "defaultValue" in t && Oi(c, t.defaultValue), Di(c, t.value, !0),
                        function(t) {
                            var e = new MutationObserver(e => {
                                e.every(ji) || ("__defaultValue" in t && Li(t, !1), "__value" in t && Di(t, t.__value))
                            });
                            e.observe(t, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                attributeFilter: ["value"]
                            }), mn(() => {
                                e.disconnect()
                            })
                        }(c)
                })
            }
            l = !0
        })
    }

    function Ji(t) {
        return t[P] ??= {
            [Pi]: t.nodeName.includes("-"),
            [qi]: t.namespaceURI === K
        }
    }
    var Gi = new Map;

    function Ki(t) {
        var e, n = t.getAttribute("is") || t.nodeName,
            i = Gi.get(n);
        if (i) return i;
        Gi.set(n, i = new Set);
        for (var r = t, a = Element.prototype; a !== r;) {
            for (var o in e = c(r)) e[o].set && "innerHTML" !== o && "textContent" !== o && "innerText" !== o && i.add(o);
            r = h(r)
        }
        return i
    }

    function Zi(t, e, n = e) {
        var i = new WeakSet;
        ! function(t, e, n, i = n) {
            t.addEventListener(e, () => Gt(n));
            const r = t[M];
            t[M] = r ? () => {
                r(), i(!0)
            } : () => i(!0), Jt()
        }(t, "input", async r => {
            var a = r ? t.defaultValue : t.value;
            if (a = Yi(t) ? Xi(a) : a, n(a), null !== le && i.add(le), await cn(), a !== (a = e())) {
                var o = t.selectionStart,
                    s = t.selectionEnd,
                    l = t.value.length;
                if (t.value = a ?? "", null !== s) {
                    var c = t.value.length;
                    o === s && s === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(s, c))
                }
            }
        }), (lt && t.defaultValue !== t.value || null == fn(e) && t.value) && (n(Yi(t) ? Xi(t.value) : t.value), null !== le && i.add(le)), Sn(() => {
            var n = e();
            if (t === document.activeElement) {
                var r = le;
                if (i.has(r)) return
            }
            Yi(t) && n === Xi(t.value) || ("date" !== t.type || n || t.value) && n !== t.value && (t.value = n ?? "")
        })
    }

    function Yi(t) {
        var e = t.type;
        return "number" === e || "range" === e
    }

    function Xi(t) {
        return "" === t ? null : +t
    }

    function tr(t, e) {
        return t === e || t?.[R] === e
    }

    function er(t = et(), e, n, i) {
        var r = Z.r,
            a = ze;
        return wn(() => {
            var i, o;
            return Sn(() => {
                i = o, o = [], fn(() => {
                    tr(n(...o), t) || (e(t, ...o), i && tr(n(...i), t) && e(null, ...i))
                })
            }), () => {
                let i = a;
                for (; i !== r && null !== i.parent && i.parent.f & C;) i = i.parent;
                const s = i.teardown;
                i.teardown = () => {
                    o && tr(n(...o), t) && e(null, ...o), s?.()
                }
            }
        }), t
    }
    const nr = {
        get(t, e) {
            if (!t.exclude.has(e)) return t.props[e]
        },
        set: (t, e) => !1,
        getOwnPropertyDescriptor(t, e) {
            if (!t.exclude.has(e)) return e in t.props ? {
                enumerable: !0,
                configurable: !0,
                value: t.props[e]
            } : void 0
        },
        has: (t, e) => !t.exclude.has(e) && e in t.props,
        ownKeys: t => Reflect.ownKeys(t.props).filter(e => !t.exclude.has(e))
    };

    function ir(t, e, n) {
        return new Proxy({
            props: t,
            exclude: e
        }, nr)
    }

    function rr(t, e, n, i) {
        var r, a = i,
            o = !0,
            s = () => (o && (o = !1, a = i), a);
        void 0 === t[e] && void 0 !== i && s(), r = () => {
            var n = t[e];
            return void 0 === n ? s() : (o = !0, n)
        };
        var l = !1,
            c = Xt(() => (l = !1, r())),
            u = ze;
        return function(t, e) {
            if (arguments.length > 0) {
                const n = e ? un(c) : t;
                return De(c, n), l = !0, void 0 !== a && (a = n), t
            }
            return Pe && l || 0 !== (u.f & k) ? c.v : un(c)
        }
    }
    class ar {
        #Y;
        #X;
        constructor(t) {
            var e = new Map,
                n = (t, n) => {
                    var i = Le(n, !1, !1);
                    return e.set(t, i), i
                };
            const i = new Proxy({
                ...t.props || {},
                $$events: {}
            }, {
                get: (t, i) => un(e.get(i) ?? n(i, Reflect.get(t, i))),
                has: (t, i) => i === N || (un(e.get(i) ?? n(i, Reflect.get(t, i))), Reflect.has(t, i)),
                set: (t, i, r) => (De(e.get(i) ?? n(i, r), r), Reflect.set(t, i, r))
            });
            this.#X = (t.hydrate ? hi : di)(t.component, {
                target: t.target,
                anchor: t.anchor,
                props: i,
                context: t.context,
                intro: t.intro ?? !1,
                recover: t.recover,
                transformError: t.transformError
            }), t?.props?.$$host && !1 !== t.sync || ye(), this.#Y = i.$$events;
            for (const t of Object.keys(this.#X)) "$set" !== t && "$destroy" !== t && "$on" !== t && s(this, t, {
                get() {
                    return this.#X[t]
                },
                set(e) {
                    this.#X[t] = e
                },
                enumerable: !0
            });
            this.#X.$set = t => {
                Object.assign(i, t)
            }, this.#X.$destroy = () => {
                ! function(t, e) {
                    const n = gi.get(t);
                    n ? (gi.delete(t), n(e)) : Promise.resolve()
                }(this.#X)
            }
        }
        $set(t) {
            this.#X.$set(t)
        }
        $on(t, e) {
            this.#Y[t] = this.#Y[t] || [];
            const n = (...t) => e.call(this, ...t);
            return this.#Y[t].push(n), () => {
                this.#Y[t] = this.#Y[t].filter(t => t !== n)
            }
        }
        $destroy() {
            this.#X.$destroy()
        }
    }
    let or = class {};

    function sr(t, e, n, i) {
        const r = n[t]?.type;
        if (e = "Boolean" === r && "boolean" != typeof e ? null != e : e, !i || !n[t]) return e;
        if ("toAttribute" === i) switch (r) {
            case "Object":
            case "Array":
                return null == e ? null : JSON.stringify(e);
            case "Boolean":
                return e ? "" : null;
            case "Number":
                return null == e ? null : e;
            default:
                return e
        } else switch (r) {
            case "Object":
            case "Array":
                return e && JSON.parse(e);
            case "Boolean":
            default:
                return e;
            case "Number":
                return null != e ? +e : e
        }
    }

    function lr(t, e, n, i, r, a) {
        let c = class extends or {
            constructor() {
                super(t, n, r), this.$$p_d = e
            }
            static get observedAttributes() {
                return o(e).map(t => (e[t].attribute || t).toLowerCase())
            }
        };
        return o(e).forEach(t => {
            s(c.prototype, t, {
                get() {
                    return this.$$c && t in this.$$c ? this.$$c[t] : this.$$d[t]
                },
                set(n) {
                    n = sr(t, n, e), this.$$d[t] = n;
                    var i = this.$$c;
                    if (i) {
                        var r = l(i, t)?.get;
                        r ? i[t] = n : i.$set({
                            [t]: n
                        })
                    }
                }
            })
        }), i.forEach(t => {
            s(c.prototype, t, {
                get() {
                    return this.$$c?.[t]
                }
            })
        }), t.element = c, c
    }
    "function" == typeof HTMLElement && (or = class extends HTMLElement {
        $$ctor;
        $$s;
        $$c;
        $$cn = !1;
        $$d = {};
        $$r = !1;
        $$p_d = {};
        $$l = {};
        $$l_u = new Map;
        $$me;
        $$shadowRoot = null;
        constructor(t, e, n) {
            super(), this.$$ctor = t, this.$$s = e, n && (this.$$shadowRoot = this.attachShadow(n))
        }
        addEventListener(t, e, n) {
            if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
                const n = this.$$c.$on(t, e);
                this.$$l_u.set(e, n)
            }
            super.addEventListener(t, e, n)
        }
        removeEventListener(t, e, n) {
            if (super.removeEventListener(t, e, n), this.$$c) {
                const t = this.$$l_u.get(e);
                t && (t(), this.$$l_u.delete(e))
            }
        }
        async connectedCallback() {
            if (this.$$cn = !0, !this.$$c) {
                let e = function(t) {
                    return e => {
                        const n = Lt("slot");
                        "default" !== t && (n.name = t), ei(e, n)
                    }
                };
                if (await Promise.resolve(), !this.$$cn || this.$$c) return;
                const n = {},
                    i = function(t) {
                        const e = {};
                        return t.childNodes.forEach(t => {
                            e[t.slot || "default"] = !0
                        }), e
                    }(this);
                for (const t of this.$$s) t in i && ("default" !== t || this.$$d.children ? n[t] = e(t) : (this.$$d.children = e(t), n.default = !0));
                for (const t of this.attributes) {
                    const e = this.$$g_p(t.name);
                    e in this.$$d || (this.$$d[e] = sr(e, t.value, this.$$p_d, "toProp"))
                }
                for (const t in this.$$p_d) t in this.$$d || void 0 === this[t] || (this.$$d[t] = this[t], delete this[t]);
                this.$$c = (t = {
                    component: this.$$ctor,
                    target: this.$$shadowRoot || this,
                    props: {
                        ...this.$$d,
                        $$slots: n,
                        $$host: this
                    }
                }, new ar(t)), this.$$me = function(t) {
                    be.ensure();
                    const e = gn(524352, t);
                    return () => {
                        Tn(e)
                    }
                }(() => {
                    Sn(() => {
                        this.$$r = !0;
                        for (const t of o(this.$$c)) {
                            if (!this.$$p_d[t]?.reflect) continue;
                            this.$$d[t] = this.$$c[t];
                            const e = sr(t, this.$$d[t], this.$$p_d, "toAttribute");
                            null == e ? this.removeAttribute(this.$$p_d[t].attribute || t) : this.setAttribute(this.$$p_d[t].attribute || t, e)
                        }
                        this.$$r = !1
                    })
                });
                for (const t in this.$$l)
                    for (const e of this.$$l[t]) {
                        const n = this.$$c.$on(t, e);
                        this.$$l_u.set(e, n)
                    }
                this.$$l = {}
            }
            var t
        }
        attributeChangedCallback(t, e, n) {
            this.$$r || (t = this.$$g_p(t), this.$$d[t] = sr(t, n, this.$$p_d, "toProp"), this.$$c?.$set({
                [t]: this.$$d[t]
            }))
        }
        disconnectedCallback() {
            this.$$cn = !1, Promise.resolve().then(() => {
                !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0)
            })
        }
        $$g_p(t) {
            return o(this.$$p_d).find(e => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t) || t
        }
    });
    var cr = new Set(["$$slots", "$$events", "$$legacy", "$$host", "loading"]),
        ur = Kn('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');

    function dr(t, e) {
        X(e, !0);
        let n, i = rr(e, "loading"),
            r = ir(e, cr);
        var a = {
                get loading() {
                    return i()
                },
                set loading(t) {
                    i(t), ye()
                }
            },
            o = ur(),
            s = Tt(o);
        Wi(s, () => ({
            type: "checkbox",
            ...r
        }), void 0, void 0, void 0, 0, !0), er(s, t => n = t, () => n);
        var l = Ot(s, 2);
        return ft(2), ht(o), xn(() => Qi(o, "data-loading", i())), Mn("click", l, function() {
            n?.click()
        }), ei(t, o), tt(a)
    }
    zn(["click"]), lr(dr, {
        loading: {}
    }, [], [], {
        mode: "open"
    });
    var hr = new Set(["$$slots", "$$events", "$$legacy", "$$host", "loading"]),
        fr = Kn('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');

    function pr(t, e) {
        X(e, !0);
        let n = rr(e, "loading"),
            i = ir(e, hr);
        var r = {
                get loading() {
                    return n()
                },
                set loading(t) {
                    n(t), ye()
                }
            },
            a = fr();
        return Wi(Tt(a), () => ({
            type: "checkbox",
            ...i
        }), void 0, void 0, void 0, 0, !0), ft(2), ht(a), xn(() => Qi(a, "data-loading", n())), ei(t, a), tt(r)
    }
    lr(pr, {
        loading: {}
    }, [], [], {
        mode: "open"
    });
    var gr = Kn('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');

    function vr(t, e) {
        X(e, !0);
        let n = rr(e, "strings");
        var i = {
                get strings() {
                    return n()
                },
                set strings(t) {
                    n(t), ye()
                }
            },
            r = gr(),
            a = Tt(r);
        return Qi(a, "href", "https://altcha.org"), ht(r), xn(() => Qi(a, "aria-label", n().ariaLinkLabel)), ei(t, r), tt(i)
    }
    lr(vr, {
        strings: {}
    }, [], [], {
        mode: "open"
    });
    var mr = Kn('<div class="altcha-footer"><p></p> <!></div>');

    function br(t, e) {
        X(e, !0);
        let n = rr(e, "logo"),
            i = rr(e, "strings");
        var r = {
                get logo() {
                    return n()
                },
                set logo(t) {
                    n(t), ye()
                },
                get strings() {
                    return i()
                },
                set strings(t) {
                    i(t), ye()
                }
            },
            a = mr(),
            o = Tt(a);
        wi(o, () => i().footer, !0), ht(o);
        var s = Ot(o, 2),
            l = t => {
                vr(t, {
                    get strings() {
                        return i()
                    }
                })
            };
        return bi(s, t => {
            n() && t(l)
        }), ht(a), ei(t, a), tt(r)
    }
    lr(br, {
        logo: {},
        strings: {}
    }, [], [], {
        mode: "open"
    });
    var yr = new Set(["$$slots", "$$events", "$$legacy", "$$host", "loading"]),
        wr = Kn('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');

    function Sr(t, e) {
        X(e, !0);
        let n, i = rr(e, "loading"),
            r = ir(e, yr);
        var a = {
                get loading() {
                    return i()
                },
                set loading(t) {
                    i(t), ye()
                }
            },
            o = wr(),
            s = Tt(o);
        Wi(s, () => ({
            type: "checkbox",
            ...r
        }), void 0, void 0, void 0, 0, !0), er(s, t => n = t, () => n);
        var l = Ot(s, 2);
        return ht(o), xn(() => Qi(o, "data-loading", i())), Mn("click", l, function() {
            n?.click()
        }), ei(t, o), tt(a)
    }
    zn(["click"]), lr(Sr, {
        loading: {}
    }, [], [], {
        mode: "open"
    });
    var xr = (t => (t.ERROR = "error", t.LOADING = "loading", t.PLAYING = "playing", t.PAUSED = "paused", t.READY = "ready", t))(xr || {}),
        $r = (t => (t.CODE = "code", t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))($r || {}),
        _r = Kn('<div class="altcha-code-challenge-title"> </div>'),
        kr = Kn('<div class="altcha-spinner"></div>'),
        Er = Yn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),
        Cr = Yn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),
        Tr = Yn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),
        Ar = Kn('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),
        Ir = Kn('<audio hidden="" autoplay=""></audio>'),
        Or = Kn('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');

    function Lr(t, e) {
        X(e, !0);
        let n = rr(e, "audioUrl"),
            i = rr(e, "codeChallenge"),
            r = rr(e, "config"),
            a = rr(e, "imageUrl"),
            o = rr(e, "onCancel"),
            s = rr(e, "onReload"),
            l = rr(e, "onSubmit"),
            c = rr(e, "strings"),
            u = Oe(void 0),
            d = Oe(void 0),
            h = Oe(void 0),
            f = Oe(!1),
            p = Oe(""),
            g = Oe(!1);

        function v() {
            De(u, xr.PAUSED, !0)
        }

        function m(t) {
            De(u, xr.ERROR, !0)
        }

        function b() {
            De(u, xr.READY, !0)
        }

        function y() {
            De(u, xr.LOADING, !0)
        }

        function w() {
            De(u, xr.PLAYING, !0)
        }

        function S() {
            De(u, xr.PAUSED, !0)
        }

        function x() {
            un(d) ? un(u) === xr.LOADING || (un(d).paused ? (n() && un(d).src !== n() && (un(d).src = n()), un(d).currentTime = 0, un(d).play()) : un(d).pause()) : (De(g, !0), requestAnimationFrame(() => {
                un(d) && n() && (un(d).src = n(), un(d).play())
            }))
        }
        mi(() => (r().disableAutoFocus || cn().then(() => {
            un(h)?.focus()
        }), () => {
            un(d) && (un(d).pause(), De(d, void 0))
        }));
        var $ = {
                get audioUrl() {
                    return n()
                },
                set audioUrl(t) {
                    n(t), ye()
                },
                get codeChallenge() {
                    return i()
                },
                set codeChallenge(t) {
                    i(t), ye()
                },
                get config() {
                    return r()
                },
                set config(t) {
                    r(t), ye()
                },
                get imageUrl() {
                    return a()
                },
                set imageUrl(t) {
                    a(t), ye()
                },
                get onCancel() {
                    return o()
                },
                set onCancel(t) {
                    o(t), ye()
                },
                get onReload() {
                    return s()
                },
                set onReload(t) {
                    s(t), ye()
                },
                get onSubmit() {
                    return l()
                },
                set onSubmit(t) {
                    l(t), ye()
                },
                get strings() {
                    return c()
                },
                set strings(t) {
                    c(t), ye()
                }
            },
            _ = Or(),
            k = Tt(_),
            E = Tt(k),
            C = t => {
                var e = _r(),
                    n = It(e, !0);
                xn(() => ui(n, c().verificationRequired)), ei(t, e)
            };
        bi(E, t => {
            "standard" !== r().codeChallengeDisplay && t(C)
        });
        var T = Ot(E, 2),
            A = It(T, !0),
            I = Ot(T, 2),
            O = Ot(I, 2),
            L = Tt(O);
        Vi(L), L.disabled = un(f), er(L, t => De(h, t), () => un(h));
        var D = Ot(L, 2),
            R = t => {
                var e = Ar(),
                    n = Tt(e),
                    i = t => {
                        ei(t, kr())
                    },
                    r = t => {
                        ei(t, Er())
                    },
                    a = t => {
                        ei(t, Cr())
                    },
                    o = t => {
                        ei(t, Tr())
                    };
                bi(n, t => {
                    un(u) === xr.LOADING ? t(i) : un(u) === xr.ERROR ? t(r, 1) : un(u) === xr.PLAYING ? t(a, 2) : t(o, -1)
                }), ht(e), xn(() => {
                    Qi(e, "title", c().getAudioChallenge), e.disabled = un(u) === xr.LOADING || un(u) === xr.ERROR, Qi(e, "aria-label", un(u) === xr.LOADING ? c().loading : c().getAudioChallenge)
                }), Fn("click", e, () => x(), !0), ei(t, e)
            };
        bi(D, t => {
            i().audio && t(R)
        });
        var j = Ot(D, 2);
        ht(O);
        var N = Ot(O, 2),
            U = Tt(N),
            P = It(U, !0),
            q = Ot(U, 2),
            H = It(q, !0);
        ht(N), ht(k);
        var F = Ot(k, 2),
            M = t => {
                var e = Ir();
                er(e, t => De(d, t), () => un(d)), Fn("error", e, m), Fn("loadstart", e, y), Fn("canplay", e, b), Fn("pause", e, S), Fn("playing", e, w), Fn("ended", e, v), ei(t, e)
            };
        return bi(F, t => {
            un(g) && t(M)
        }), ht(_), xn(() => {
            ui(A, c().enterCodeFromImage), Qi(I, "src", a()), Qi(L, "minlength", i().length || 1), Qi(L, "maxlength", i().length), Qi(L, "placeholder", c().enterCode), Qi(L, "aria-label", un(u) === xr.LOADING ? c().loading : un(u) === xr.PLAYING ? "" : c().enterCodeAria), Qi(L, "aria-live", un(u) ? "assertive" : "polite"), Qi(L, "aria-busy", un(u) === xr.LOADING), Qi(j, "title", c().reload), Qi(j, "aria-label", c().reload), Qi(U, "aria-label", c().verify), ui(P, c().verify), Qi(q, "aria-label", c().cancel), ui(H, c().cancel)
        }), Fn("submit", k, function(t) {
            t.preventDefault(), t.stopPropagation(), l()?.(un(p))
        }, !0), Mn("keydown", L, function(t) {
            "Space" === t.code ? (t.preventDefault(), t.stopPropagation(), x()) : "Escape" === t.code && (t.preventDefault(), t.stopPropagation(), o()?.())
        }), Zi(L, () => un(p), t => De(p, t)), Fn("click", j, () => s()?.(), !0), Fn("click", q, () => o()?.(), !0), ei(t, _), tt($)
    }
    zn(["keydown"]), lr(Lr, {
        audioUrl: {},
        codeChallenge: {},
        config: {},
        imageUrl: {},
        onCancel: {},
        onReload: {},
        onSubmit: {},
        strings: {}
    }, [], [], {
        mode: "open"
    });
    var Dr = new Set(["$$slots", "$$events", "$$legacy", "$$host", "anchor", "children", "display", "backdrop", "onClickOutside", "onClickOutsideDelay", "onClose", "placement", "updateUISignal", "variant"]),
        Rr = Kn('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),
        jr = Kn('<div class="altcha-popover-arrow"></div>'),
        Nr = Kn('<div role="button" class="altcha-popover-close">&times;</div>'),
        Ur = Kn('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>', 1);

    function Pr(t, e) {
        X(e, !0);
        let n = rr(e, "anchor"),
            i = rr(e, "children"),
            r = rr(e, "display", 0, "standard"),
            a = rr(e, "backdrop", 0, !1),
            o = rr(e, "onClickOutside"),
            s = rr(e, "onClickOutsideDelay", 0, 600),
            l = rr(e, "onClose"),
            c = rr(e, "placement", 0, "auto"),
            u = rr(e, "updateUISignal"),
            d = rr(e, "variant", 0, "neutral"),
            h = ir(e, Dr),
            f = Oe(void 0),
            g = Oe(void 0),
            v = Oe(!1),
            m = Oe(0);

        function b() {
            l()?.()
        }

        function y() {
            if (n() && "auto" === c() && un(f)) {
                const t = n().getBoundingClientRect(),
                    e = document.documentElement.clientHeight - (t.top + t.height) < un(f).clientHeight;
                un(v) !== e && De(v, e)
            }
        }
        bn(() => {
            "auto" !== c() && De(v, "top" === c())
        }), bn(() => {
            u() && y()
        }), mi(() => {
            const t = "bottomsheet" === r() || "overlay" === r();
            return t && (un(g) && document.body.append(un(g)), un(f) && document.body.append(un(f))), y(), cn().then(() => {
                De(m, Date.now(), !0)
            }), () => {
                t && (un(g) && document.body.removeChild(un(g)), un(f) && document.body.removeChild(un(f)))
            }
        });
        var w = {
                get anchor() {
                    return n()
                },
                set anchor(t) {
                    n(t), ye()
                },
                get children() {
                    return i()
                },
                set children(t) {
                    i(t), ye()
                },
                get display() {
                    return r()
                },
                set display(t = "standard") {
                    r(t), ye()
                },
                get backdrop() {
                    return a()
                },
                set backdrop(t = !1) {
                    a(t), ye()
                },
                get onClickOutside() {
                    return o()
                },
                set onClickOutside(t) {
                    o(t), ye()
                },
                get onClickOutsideDelay() {
                    return s()
                },
                set onClickOutsideDelay(t = 600) {
                    s(t), ye()
                },
                get onClose() {
                    return l()
                },
                set onClose(t) {
                    l(t), ye()
                },
                get placement() {
                    return c()
                },
                set placement(t = "auto") {
                    c(t), ye()
                },
                get updateUISignal() {
                    return u()
                },
                set updateUISignal(t) {
                    u(t), ye()
                },
                get variant() {
                    return d()
                },
                set variant(t = "neutral") {
                    d(t), ye()
                }
            },
            S = Ur();
        Fn("click", yt, function(t) {
            const e = t.target;
            un(f)?.contains(e) || s() && !(un(m) + s() < Date.now()) || o()?.()
        }, !0), Fn("resize", yt, function() {
            y()
        }), Fn("scroll", yt, function() {
            y()
        });
        var x = At(S),
            $ = t => {
                var e = Rr();
                er(e, t => De(g, t), () => un(g)), ei(t, e)
            };
        bi(x, t => {
            a() && t($)
        });
        var _ = Ot(x, 2);
        Wi(_, () => ({
            ...h,
            class: `altcha-popover ${(e.class||"")??""}`,
            "data-popover": !0,
            "data-variant": d(),
            "data-top": un(v),
            "data-display": r()
        }));
        var k = Tt(_),
            E = t => {
                ei(t, jr())
            };
        bi(k, t => {
            "standard" === r() && t(E)
        });
        var C = Ot(k, 2),
            A = t => {
                var e = Nr();
                Fn("click", e, b, !0), ei(t, e)
            };
        bi(C, t => {
            "standard" !== r() && t(A)
        });
        var I = Ot(C, 2);
        return function(t, e, ...n) {
            var i = new vi(t);
            $n(() => {
                const t = e() ?? null;
                i.ensure(t, t && (e => t(e, ...n)))
            }, T)
        }(Tt(I), () => i() ?? p), ht(I), ht(_), er(_, t => De(f, t), () => un(f)), ei(t, S), tt(w)
    }
    async function qr(t) {
        const {
            challenge: e,
            concurrency: n = navigator.hardwareConcurrency,
            controller: i = new AbortController,
            createWorker: r,
            onOutOfMemory: a = t => t > 1 ? Math.floor(t / 2) : 0,
            counterMode: o,
            timeout: s = 9e4
        } = t, l = Math.min(16, Math.max(1, n)), c = [], u = () => {
            for (const t of c) t.terminate()
        };
        for (let t = 0; t < l; t++) c.push(await r(e.parameters.algorithm));
        let d = null;
        try {
            d = await Promise.race(c.map((t, n) => (i.signal.addEventListener("abort", () => {
                t.postMessage({
                    type: "abort"
                })
            }), new Promise((i, r) => {
                t.addEventListener("error", t => {
                    r(t)
                }), t.addEventListener("message", e => {
                    if (e.data) {
                        for (const e of c) e !== t && e.postMessage({
                            type: "abort"
                        });
                        if (e.data.error) return r(new Error(e.data.error))
                    }
                    i(e.data)
                }), t.postMessage({
                    challenge: e,
                    counterMode: o,
                    counterStart: n,
                    counterStep: l,
                    timeout: s,
                    type: "work"
                })
            }))))
        } catch (n) {
            if (n instanceof Error && !!n?.message?.includes("Out of memory") && a) {
                u();
                const n = a(l);
                if (n) return qr({
                    ...t,
                    challenge: e,
                    controller: i,
                    concurrency: n,
                    createWorker: r
                })
            }
            throw n
        } finally {
            u()
        }
        return i.signal.aborted ? null : d || null
    }
    lr(Pr, {
        anchor: {},
        children: {},
        display: {},
        backdrop: {},
        onClickOutside: {},
        onClickOutsideDelay: {},
        onClose: {},
        placement: {},
        updateUISignal: {},
        variant: {}
    }, [], [], {
        mode: "open"
    });
    class Hr {
        TAG_CODES = {
            INPUT: 1,
            TEXTAREA: 2,
            SELECT: 3,
            BUTTON: 4,
            A: 5,
            DETAILS: 6,
            SUMMARY: 7,
            IFRAME: 8,
            VIDEO: 9,
            AUDIO: 10
        };
        maxSamples;
        sampleInterval;
        target;
        focusStartTime = 0;
        focusInteraction = 0;
        focusInteractionTimer = null;
        lastPointerSample = 0;
        lastTouchSample = 0;
        lastScrollSample = 0;
        pendingPointer = null;
        pendingTouch = null;
        focus = [];
        pointer = [];
        scroll = [];
        touch = [];
        constructor(t = {}) {
            const {
                maxSamples: e = 60,
                sampleInterval: n = 50,
                target: i = window
            } = t;
            this.maxSamples = e, this.sampleInterval = n, this.target = i, this.attach()
        }
        destroy() {
            const t = {
                capture: !0
            };
            this.target.removeEventListener("focusin", this.onFocus, t), this.target.removeEventListener("keydown", this.onInteraction, t), this.target.removeEventListener("pointerdown", this.onInteraction, t), this.target.removeEventListener("pointermove", this.onPointer, t), this.target.removeEventListener("scroll", this.onScroll, t), this.target.removeEventListener("touchmove", this.onTouchMove, t)
        }
        export () {
            return {
                focus: this.focus,
                maxTouchPoints: navigator.maxTouchPoints || 0,
                pointer: this.pointer,
                scroll: this.scroll,
                time: Date.now(),
                touch: this.touch
            }
        }
        attach() {
            const t = {
                passive: !0,
                capture: !0
            };
            this.target.addEventListener("focusin", this.onFocus, t), this.target.addEventListener("keydown", this.onInteraction, t), this.target.addEventListener("pointerdown", this.onInteraction, t), this.target.addEventListener("pointermove", this.onPointer, t), this.target.addEventListener("scroll", this.onScroll, t), this.target.addEventListener("touchmove", this.onTouchMove, t)
        }
        evict(t) {
            t.length > this.maxSamples && t.splice(0, t.length - this.maxSamples)
        }
        onFocus = t => {
            if (2 === this.focusInteraction) return;
            const e = t.target;
            if (!(e instanceof Element)) return;
            const n = performance.now();
            0 === this.focusStartTime && (this.focusStartTime = n), this.focus.push([Math.round(n - this.focusStartTime), e.tabIndex, this.TAG_CODES[e.tagName] ?? 0, this.focusInteraction ? 1 : 0]), this.evict(this.focus)
        };
        onInteraction = t => {
            this.focusInteraction = "keyCode" in t ? 1 : 2, this.focusInteractionTimer && clearTimeout(this.focusInteractionTimer), this.focusInteractionTimer = setTimeout(() => {
                this.focusInteraction = 0
            }, 100)
        };
        onPointer = t => {
            if ("touch" === t.pointerType) return;
            const e = t.timeStamp || performance.now();
            this.pendingPointer = [Math.round(t.clientX), Math.round(t.clientY), Math.round(e)], e - this.lastPointerSample >= this.sampleInterval && (this.pointer.push(this.pendingPointer), this.lastPointerSample = e, this.pendingPointer = null, this.evict(this.pointer))
        };
        onScroll = () => {
            const t = performance.now();
            t - this.lastScrollSample < this.sampleInterval || (this.scroll.push([Math.round(window.scrollY), Math.round(t)]), this.lastScrollSample = t, this.evict(this.scroll))
        };
        onTouchMove = t => {
            const e = t.timeStamp || performance.now(),
                n = t.touches[0];
            n && (this.pendingTouch = [Math.round(n.clientX), Math.round(n.clientY), Math.round(e), Math.round(1e3 * n.force) / 1e3, Math.round(n.radiusX || 0), Math.round(n.radiusY || 0)], e - this.lastTouchSample >= this.sampleInterval && (this.touch.push(this.pendingTouch), this.lastTouchSample = e, this.pendingTouch = null, this.evict(this.touch)))
        }
    }
    var Fr = Kn('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),
        Mr = Kn('<div class="altcha-overlay-content"></div>'),
        zr = Kn('<div role="button" class="altcha-overlay-close">&times;</div> <!>', 1),
        Br = Kn('<div class="altcha-floating-arrow"></div>'),
        Vr = Kn('<input type="hidden"/>'),
        Qr = Kn('<div class="altcha-error">Secure context (HTTPS) required.</div>'),
        Wr = Kn('<div class="altcha-error"> </div>'),
        Jr = Kn("<!> <!>", 1),
        Gr = Kn('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>', 1);
    "undefined" != typeof window && window.customElements && !customElements.get("altcha-widget") && customElements.define("altcha-widget", lr(function(t, e) {
        X(e, !0);
        const [n, i] = function() {
            const t = {};
            return [t, function() {
                mn(() => {
                    for (var e in t) t[e].unsubscribe();
                    s(t, Bt, {
                        enumerable: !1,
                        value: !0
                    })
                })
            }]
        }(), r = ["ar", "fa", "he", "ur"], {
            isSecureContext: a
        } = globalThis, {
            store: o
        } = globalThis.$altcha.defaults, l = navigator.hardwareConcurrency || 2, c = navigator.deviceMemory || 0, u = c && c <= 4 ? Math.min(4, l) : l, d = globalThis.$altcha.i18n.store, h = e.$$host, f = (t, e) => {
            cn().then(() => {
                h?.dispatchEvent(new CustomEvent(t, {
                    detail: e
                }))
            })
        };
        let p = null,
            g = Oe(vt(new URL(location.origin))),
            v = Oe(!1),
            m = Oe(null),
            b = Oe(null),
            y = Oe(null),
            w = Oe(vt($r.UNVERIFIED)),
            S = Oe(void 0),
            x = Oe(void 0),
            $ = Oe(null),
            _ = Oe(void 0),
            k = Oe(null),
            E = Oe(null),
            C = Oe(null),
            A = Oe(null),
            I = Oe(vt([])),
            O = Oe(0),
            L = Oe(vt({})),
            D = Oe(!0);
        const R = ne(() => ({
                fetch: (t, e) => fetch(t, e),
                audioChallengeLanguage: "",
                auto: "off",
                barPlacement: "bottom",
                challenge: "",
                codeChallenge: null,
                codeChallengeDisplay: "standard",
                credentials: null,
                debug: !1,
                disableAutoFocus: !1,
                display: "standard",
                floatingAnchor: "",
                floatingOffset: 8,
                floatingPersist: !1,
                floatingPlacement: "auto",
                hideFooter: !1,
                hideLogo: !1,
                humanInteractionSignature: !0,
                language: "",
                mockError: !1,
                minDuration: 500,
                overlayContent: "",
                name: "altcha",
                popoverPlacement: "auto",
                retryOnOutOfMemoryError: !0,
                setCookie: null,
                serverVerificationFields: !1,
                serverVerificationTimeZone: !1,
                test: !1,
                timeout: 9e4,
                type: "checkbox",
                validationMessage: "",
                verifyFunction: null,
                verifyUrl: "",
                workers: u,
                ...Vt(o, "$altchaDefaults", n),
                ...un(L)
            })),
            j = ne(() => `altcha-checkbox-${e.id||Math.floor(1e12*Math.random()).toString(16)}`),
            N = ne(() => function(t) {
                switch (t) {
                    case "checkbox":
                        return dr;
                    case "switch":
                        return Sr;
                    default:
                        return pr
                }
            }(un(R).type)),
            U = ne(() => un(R).auto),
            P = ne(() => un(w) === $r.VERIFYING),
            q = ne(() => !un(R).hideFooter),
            H = ne(() => !un(R).hideLogo && "bar" !== un(R).display),
            F = ne(() => function(t, e) {
                const n = Object.keys(t).map(t => t.toLowerCase());
                let i = e.reduce((e, i) => (i = i.toLowerCase(), e || (t[i] ? i : null) || n.find(t => i.split("-")[0] === t.split("-")[0]) || null), null);
                t[i || ""] || (i = "en");
                return {
                    language: i,
                    strings: t[i]
                }
            }(Vt(d, "$altchaI18nStore", n), [un(R).language, document.documentElement.lang, ...navigator.languages])),
            M = ne(() => r.includes(un(F).language) ? "rtl" : void 0),
            z = ne(() => ({
                ...un(F).strings
            })),
            B = ne(() => un(m)?.audio?.match(/^(https?:)?\//) ? Z(un(m).audio, un(g), {
                language: un(R).audioChallengeLanguage || un(F).language
            }).toString() : un(m)?.audio),
            V = ne(() => un(m)?.image?.match(/^(https?:)?\//) ? Z(un(m).image, un(g)) : un(m)?.image);
        async function Q(t, ...e) {
            let n;
            for (const i of un(I)) n = await i[t].call(i, ...e);
            return n
        }
        async function W(t) {
            await new Promise(e => setTimeout(e, t))
        }
        async function J(t = un(R).challenge, e) {
            const n = await Q("onFetchChallenge", t);
            let i = null;
            if (void 0 !== n) return n;
            if ("string" == typeof t)
                if (t.startsWith("{")) {
                    $t("parsing JSON challenge");
                    try {
                        i = JSON.parse(t)
                    } catch {
                        throw new Error("Unable to parse JSON challenge.")
                    }
                } else {
                    $t("fetching challenge from", e?.method || "GET", t), De(g, new URL(t, location.origin), !0);
                    const n = await un(R).fetch(t, {
                        credentials: un(R).credentials || void 0,
                        ...e
                    });
                    await mt(n);
                    const r = n.headers.get("x-altcha-config");
                    r && function(t) {
                        try {
                            const e = JSON.parse(t);
                            e && "object" == typeof e && St({
                                serverVerificationFields: e?.sentinel?.fields,
                                serverVerificationTimeZone: e?.sentinel?.timeZone,
                                verifyUrl: e.verifyurl,
                                ...e
                            })
                        } catch (t) {
                            $t("unable to configure from x-altcha-config header", t)
                        }
                    }(r);
                    const a = await n.json();
                    if (a && "his" in a && a.his) {
                        if ($t("requested HIS"), !p) throw new Error("Server requested HIS data but collector is disabled.");
                        return J(Z(a.his.url, un(g)), {
                            body: JSON.stringify({
                                his: p.export()
                            }),
                            headers: {
                                "content-type": "application/json"
                            },
                            method: "POST"
                        })
                    }
                    a && "hisResult" in a && a.hisResult && $t("HIS result", a.hisResult), i = a
                }
            else if (t && "object" == typeof t) try {
                i = JSON.parse(JSON.stringify(t))
            } catch {
                throw new Error("Unable to parse JSON challenge.")
            }
            if (function(t) {
                    return "object" == typeof t && "challenge" in t
                }(i) && (i = function(t) {
                    const [e, n] = t.salt.split("?"), i = {};
                    if (n) try {
                        Object.assign(i, Object.fromEntries(new URLSearchParams(n).entries()))
                    } catch {}
                    const r = {
                        codeChallenge: t.codeChallenge,
                        parameters: {
                            algorithm: t.algorithm,
                            cost: 1,
                            data: i,
                            expiresAt: i?.expires ? parseInt(i.expires, 10) : void 0,
                            keyLength: "SHA-512" === t.algorithm ? 64 : "SHA-384" === t.algorithm ? 48 : 32,
                            nonce: (a = (new TextEncoder).encode(t.salt), Array.from(new Uint8Array(a)).map(t => t.toString(16).padStart(2, "0")).join("")),
                            keyPrefix: t.challenge,
                            salt: ""
                        },
                        signature: t.signature
                    };
                    var a;
                    return Object.defineProperties(r, {
                        _originalSalt: {
                            enumerable: !1,
                            value: t.salt,
                            writable: !1
                        },
                        _version: {
                            enumerable: !1,
                            value: 1,
                            writable: !1
                        }
                    }), r
                }(i)), ! function(t) {
                    return !!t && "object" == typeof t && "parameters" in t && !!t.parameters && "object" == typeof t.parameters && "algorithm" in t.parameters && "nonce" in t.parameters && "salt" in t.parameters && "keyPrefix" in t.parameters
                }(i)) throw new Error("Challenge validation failed.");
            return i
        }

        function G() {
            return document.getElementById(un(j))
        }

        function K() {
            try {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch {}
        }

        function Z(t, e, n) {
            const i = new URL(t, e);
            if (i.search || (i.search = e.search), n)
                for (const t in n) void 0 !== n[t] && null !== n[t] && i.searchParams.set(t, n[t]);
            return i.toString()
        }

        function Y(t) {
            !un(v) && t.currentTarget.checked ? (t.preventDefault(), t.currentTarget.checked = !1, un(w) !== $r.VERIFYING && Lt()) : t.currentTarget.checked || (t.preventDefault(), _t())
        }

        function et(t) {
            un(w) === $r.VERIFYING ? t.currentTarget.setCustomValidity(un(z).waitAlert) : un(R).validationMessage && t.currentTarget.setCustomValidity(un(R).validationMessage)
        }

        function nt() {
            ft(un(R).display), _t()
        }

        function it(t) {
            "onfocus" === un(U) && un(w) === $r.UNVERIFIED && Lt()
        }

        function rt() {
            ft(un(R).display), _t()
        }

        function at(t) {
            const e = t.target;
            "true" !== e?.getAttribute("data-code-challenge") && "onsubmit" === un(U) && un(w) === $r.UNVERIFIED && (t.preventDefault(), t.stopPropagation(), De(k, t.submitter, !0), Et(), Lt().then(t => {
                t && !un(m) && cn().then(() => {
                    ot(un(k))
                })
            }))
        }

        function ot(t) {
            un($) && "requestSubmit" in un($) ? un($).requestSubmit(t) : un($)?.reportValidity() && (t ? t.click() : un($).submit())
        }

        function ft(t) {
            switch (t) {
                case "bar":
                case "floating":
                case "overlay":
                    xt(), un(U) && "off" !== un(U) || (un(L).auto = "onsubmit");
                    break;
                case "standard":
                    Et()
            }
            un(y) !== t && De(y, t, !0)
        }
        async function mt(t) {
            if (t.status >= 400) {
                if (t.headers.get("content-type")?.includes("/json")) {
                    let e;
                    try {
                        e = await t.json()
                    } catch {}
                    if (e && "error" in e) throw new Error(`Server responded with ${t.status} - ${e.error}`)
                }
                throw new Error(`Server responded with ${t.status}.`)
            }
            const e = t.headers.get("content-type");
            if (!e || !e.includes("/json")) throw new Error(`Server responded with invalid content-type. Expected application/json, received ${e}.`)
        }
        async function bt(t) {
            if (!un(A)) return void kt($r.ERROR, "Cannot verify code challenge without PoW payload.");
            kt($r.VERIFYING);
            let e = null;
            if (un(R).verifyUrl) e = await async function(t, e) {
                const n = await Q("onRequestServerVerification", t, e);
                if (void 0 !== n) return n;
                if ($t("requesting server verification from", un(R).verifyUrl), !un(R).verifyUrl) throw new Error("Parameter verifyUrl must be set for server verification.");
                const i = await un(R).fetch(Z(un(R).verifyUrl, un(g)), {
                    body: JSON.stringify({
                        code: e,
                        fields: un(R).serverVerificationFields ? [...un($)?.querySelectorAll('input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []].reduce((t, e) => {
                            const n = e.name,
                                i = e.value;
                            return n && i && (t[n] = /\n/.test(i) ? i.replace(new RegExp("(?<!\\r)\\n", "g"), "\r\n") : i), t
                        }, {}) : void 0,
                        payload: t,
                        timeZone: un(R).serverVerificationTimeZone ? K() : void 0
                    }),
                    credentials: un(R).credentials || void 0,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                await mt(i);
                const r = await i.json();
                return r && "object" == typeof r && "payload" in r && r.payload && f("serververification", r), r
            }(un(A), t);
            else {
                if (!un(R).verifyFunction) return void kt($r.ERROR, "Parameter verifyUrl is required for code challenge verification.");
                e = await un(R).verifyFunction(un(A), t)
            }
            e?.payload && (De(A, e.payload, !0), $t("server payload", un(A))), !0 === e?.verified ? ($t("verified"), kt($r.VERIFIED), f("verified", {
                payload: un(A)
            }), "onsubmit" === un(U) && cn().then(() => {
                ot(un(k))
            })) : kt($r.ERROR, e?.reason || "Verification failed."), un(R).disableAutoFocus || G()?.focus()
        }

        function St(t) {
            Object.assign(un(L), {
                ...Object.fromEntries(Object.entries(t).filter(([t, e]) => void 0 !== e))
            })
        }

        function xt() {
            De(D, !1)
        }

        function $t(...t) {
            (un(R).debug || t.some(t => t instanceof Error)) && console[t[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${un(R).name}]`, ...t)
        }

        function _t(t = $r.UNVERIFIED, e = null) {
            De(v, !1), De(E, e, !0), De(A, null), un(b) && un(b).abort(), un(C) && (clearTimeout(un(C)), De(C, null)), kt(t)
        }

        function kt(t, e = null) {
            De(w, t, !0), De(E, e, !0), f("statechange", {
                payload: un(A),
                state: un(w)
            })
        }

        function Et() {
            De(D, !0), cn().then(() => {
                Ct()
            })
        }

        function Ct() {
            if ("floating" === un(R).display) return function(t = 20) {
                if (!un(_)) return;
                const e = un(R).floatingPlacement;
                if (!un(x) && (De(x, (un(R).floatingAnchor instanceof HTMLElement ? un(R).floatingAnchor : un(R).floatingAnchor ? document.querySelector(un(R).floatingAnchor) : un($)?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || un($), !0), !un(x))) return void $t("unable to find floating anchor element");
                const n = parseInt(un(R).floatingOffset, 10) || 12,
                    i = un(x).getBoundingClientRect(),
                    r = un(_).getBoundingClientRect(),
                    a = document.documentElement.clientHeight,
                    o = document.documentElement.clientWidth,
                    s = e && "auto" !== e ? "top" === e : i.bottom + r.height + n + t > a,
                    l = Math.max(t, Math.min(o - t - r.width, i.left + i.width / 2 - r.width / 2));
                if (un(_).style.setProperty("--altcha-floating-left", `${l}px`), un(_).style.setProperty("--altcha-floating-top", s ? i.top - (r.height + n) + "px" : `${i.bottom+n}px`), un(_).setAttribute("data-floating-position", s ? "top" : "bottom"), un(S)) {
                    const t = un(S).getBoundingClientRect();
                    un(S).style.left = i.left - l + i.width / 2 - t.width / 2 + "px"
                }
            }();
            De(O, un(O) + 1)
        }
        async function Lt(t = {}) {
            const {
                concurrency: e = Math.max(1, un(R).workers),
                controller: n = new AbortController,
                minDuration: i = un(R).minDuration
            } = t, r = performance.now();
            let o = null,
                s = null,
                l = !1;
            const c = await Q("onVerify", t);
            if (void 0 !== c) return c;
            _t($r.VERIFYING), De(b, n, !0);
            try {
                if (!a) throw new Error("Secure context (HTTPS) required.");
                if (un(R).mockError) throw new Error("Mock error.");
                if (un(R).test) return $t("running test mode with null challenge"), await W(Math.max(0, i - (performance.now() - r))), un(b)?.signal.aborted ? (_t(), null) : (De(A, btoa(JSON.stringify({
                    challenge: null,
                    solution: null,
                    test: !0
                })), !0), $t("verified"), kt($r.VERIFIED), f("verified", {
                    payload: un(A)
                }), {
                    payload: un(A)
                });
                if (o = await J(), !o) throw new Error("Failed to fetch challenge.");
                $t("challenge", o), "configuration" in o && ($t("re-configuring from challenge", o.configuration), St(o.configuration)), o.parameters.expiresAt && function(t) {
                    un(C) && clearTimeout(un(C));
                    const e = () => {
                            un(w) !== $r.UNVERIFIED ? (De(v, !1), kt($r.EXPIRED)) : _t(), f("expired")
                        },
                        n = 1e3 * t - Date.now();
                    n >= 1 ? De(C, setTimeout(e, n), !0) : e()
                }(o.parameters.expiresAt), l = "_version" in o && 1 === o._version;
                const t = globalThis.$altcha.algorithms.get(o.parameters.algorithm);
                if (!t) throw new Error(`Unsupported algorithm ${o.parameters.algorithm}.`);
                if (s = await qr({
                        challenge: o,
                        concurrency: e,
                        controller: n,
                        createWorker: t,
                        counterMode: l ? "string" : "uint32",
                        onOutOfMemory: t => {
                            if ($t("out of memory error received"), f("outofmemory"), un(R).retryOnOutOfMemoryError && t > 1) {
                                const e = Math.floor(t / 2);
                                return $t(`retrying with ${e} workers...`), e
                            }
                        },
                        timeout: un(R).timeout
                    }), un(b)?.signal.aborted) return _t(), null;
                if (!s) throw new Error("Failed to find solution.");
                $t("solution", s), await W(Math.max(0, i - (performance.now() - r))), De(m, o.codeChallenge || un(R).codeChallenge || null, !0), De(A, l ? btoa(JSON.stringify(function(t, e) {
                    return {
                        algorithm: t.parameters.algorithm,
                        challenge: t.parameters.keyPrefix,
                        number: e.counter,
                        salt: "_originalSalt" in t ? t._originalSalt : t.parameters.nonce,
                        signature: t.signature,
                        took: e.time || 0
                    }
                }(o, s))) : btoa(JSON.stringify({
                    challenge: {
                        parameters: o.parameters,
                        signature: o.signature
                    },
                    solution: s
                })), !0), un(m) ? ($t("requesting code verification"), kt($r.CODE), f("codechallenge", {
                    codeChallenge: un(m)
                })) : un(R).verifyUrl ? await bt() : ($t("verified"), kt($r.VERIFIED), f("verified", {
                    payload: un(A)
                }))
            } catch (t) {
                return $t("verification failed", t), kt($r.ERROR, String(t)), null
            } finally {
                De(b, null)
            }
            return {
                challenge: o,
                payload: un(A),
                solution: s
            }
        }
        bn(() => {
            St({
                auto: e.auto,
                challenge: e.challenge,
                display: e.display,
                language: e.language,
                name: e.name,
                type: e.type,
                workers: e.workers
            })
        }), bn(() => {
            e.theme ? h?.setAttribute("theme", e.theme) : h?.removeAttribute("theme")
        }), bn(() => {
            if (e.configuration) try {
                St(JSON.parse(e.configuration))
            } catch {
                $t("unable to parse the `configuration` attribute (JSON expected)")
            }
        }), bn(() => {
            un(y) !== un(R).display && ft(un(R).display)
        }), bn(() => {
            un(v) && un(w) === $r.VERIFYING && De(v, !1)
        }), bn(() => {
            un(v) || un(w) !== $r.VERIFIED || De(v, !0)
        }), bn(() => {
            if (!un(v)) {
                const t = G();
                t && t.checked && (t.checked = !1)
            }
        }), bn(() => {
            un(w) === $r.VERIFIED && G()?.setCustomValidity("")
        }), bn(() => {
            if ("onload" === un(U)) {
                const t = setTimeout(() => {
                    Lt()
                }, 1);
                return () => {
                    t && clearTimeout(t)
                }
            }
        }), bn(() => {
            un(E) && $t("error:", un(E))
        }), bn(() => {
            un(A) && un(R).setCookie && function(t, e = {}) {
                const {
                    domain: n,
                    name: i = un(R).name,
                    maxAge: r,
                    path: a,
                    sameSite: o,
                    secure: s
                } = e;
                let l = `${encodeURIComponent(i)}=${encodeURIComponent(t)}`;
                n && (l += `; Domain=${n}`);
                null != r && (l += `; Max-Age=${r}`);
                a && (l += `; Path=${a}`);
                o && (l += `; SameSite=${o}`);
                s && (l += "; Secure");
                document.cookie = l
            }(un(A), un(R).setCookie)
        }), mi(() => ($t("mounted", "3.2.3"), h && globalThis.$altcha.instances.add(h), De($, un(_)?.closest("form"), !0), un($)?.addEventListener("reset", rt), un($)?.addEventListener("submit", at, {
            capture: !0
        }), un($)?.addEventListener("focusin", it), function() {
            De(I, [...globalThis.$altcha.plugins].map(t => new t(h)), !0), $t("activating plugins", un(I).map(t => t.constructor.name));
            for (const t of un(I)) t.activate()
        }(), un(R).humanInteractionSignature && ($t("human interaction signature enabled"), p = new Hr), f("load"), a || $t("secure context (HTTPS) required"), () => {
            ! function() {
                for (const t of un(I)) t.destroy()
            }(), h && globalThis.$altcha.instances.delete(h), un(C) && clearTimeout(un(C)), un($)?.removeEventListener("reset", rt), un($)?.removeEventListener("submit", at, {
                capture: !0
            }), un($)?.removeEventListener("focusin", it), p?.destroy()
        }));
        var Dt = {
                configure: St,
                getConfiguration: function() {
                    return {
                        ...un(R)
                    }
                },
                getState: function() {
                    return un(w)
                },
                hide: xt,
                log: $t,
                reset: _t,
                setState: kt,
                show: Et,
                updateUI: Ct,
                verify: Lt
            },
            Rt = Gr();
        Fn("scroll", wt, function() {
            Ct()
        }), Fn("click", wt, function(t) {
            const e = t.target;
            "floating" !== un(R).display || !e || h?.contains(e) || e.hasAttribute("data-backdrop") || e.closest("[data-popover]") || un(w) === $r.VERIFIED || un(R).floatingPersist || xt()
        }), Fn("pageshow", yt, function(t) {
            t.persisted && (ft(un(R).display), _t())
        }), Fn("resize", yt, function() {
            Ct()
        });
        var jt = At(Rt),
            Nt = t => {
                ei(t, Fr())
            };
        bi(jt, t => {
            "overlay" === un(R).display && un(D) && t(Nt)
        });
        var Ut = Ot(jt, 2),
            Pt = Tt(Ut),
            qt = t => {
                var e = zr(),
                    n = At(e),
                    i = Ot(n, 2),
                    r = t => {
                        var e = Mr();
                        wi(e, () => document.querySelector(un(R).overlayContent)?.innerHTML, !0), ht(e), ei(t, e)
                    };
                bi(i, t => {
                    un(R).overlayContent && t(r)
                }), Fn("click", n, nt, !0), ei(t, e)
            };
        bi(Pt, t => {
            "overlay" === un(R).display && un(D) && t(qt)
        });
        var Ht = Ot(Pt, 2),
            Ft = Tt(Ht),
            Mt = Tt(Ft),
            zt = Tt(Mt);
        {
            let t = ne(() => "standard" === un(R).display && "onsubmit" !== un(U) || un(w) === $r.VERIFYING);
            ! function(t, e, n) {
                var i;
                lt && (i = st, dt());
                var r = new vi(t);
                $n(() => {
                    var t = e() ?? null;
                    if (lt && "[" === gt(i) != (null !== t)) {
                        var a = pt();
                        return ut(a), r.anchor = a, ct(!1), r.ensure(t, t && (e => n(e, t))), void ct(!0)
                    }
                    r.ensure(t, t && (e => n(e, t)))
                }, T)
            }(zt, () => un(N), (e, n) => {
                n(e, {
                    get id() {
                        return un(j)
                    },
                    name: "",
                    get required() {
                        return un(t)
                    },
                    get loading() {
                        return un(P)
                    },
                    get checked() {
                        return un(v)
                    },
                    onchange: Y,
                    oninvalid: et
                })
            })
        }
        var Qt = Ot(zt, 2),
            Wt = Tt(Qt),
            Jt = t => {
                var e = Xn();
                xn(() => ui(e, un(z).verificationRequired)), ei(t, e)
            },
            Gt = t => {
                var e = Xn();
                xn(() => ui(e, un(z).verifying)), ei(t, e)
            },
            Kt = t => {
                var e = Xn();
                xn(() => ui(e, un(z).verified)), ei(t, e)
            },
            Zt = t => {
                var e = Xn();
                xn(() => ui(e, un(z).label)), ei(t, e)
            };
        bi(Wt, t => {
            un(w) === $r.CODE && un(m) ? t(Jt) : un(w) === $r.VERIFYING ? t(Gt, 1) : un(w) === $r.VERIFIED ? t(Kt, 2) : t(Zt, -1)
        }), ht(Qt), ht(Mt);
        var Yt = Ot(Mt, 2),
            Xt = t => {
                vr(t, {
                    get strings() {
                        return un(z)
                    }
                })
            };
        bi(Yt, t => {
            un(H) && t(Xt)
        }), ht(Ft);
        var te = Ot(Ft, 2),
            ee = t => {
                {
                    let e = ne(() => "bar" === un(R).display && un(H));
                    br(t, {
                        get logo() {
                            return un(e)
                        },
                        get strings() {
                            return un(z)
                        }
                    })
                }
            };
        bi(te, t => {
            un(q) && t(ee)
        });
        var ie = Ot(te, 2),
            re = t => {
                var e = Br();
                er(e, t => De(S, t), () => un(S)), ei(t, e)
            };
        bi(ie, t => {
            "floating" === un(R).display && t(re)
        });
        var ae = Ot(ie, 2),
            oe = t => {
                var e = Vr();
                Vi(e), xn(() => {
                    var t, n, i;
                    Qi(e, "name", un(R).name), t = e, n = un(A), (i = Ji(t)).value !== (i.value = n ?? void 0) && (t.value !== n || 0 === n && t.nodeName === Bi) && (t.value = n ?? "")
                }), ei(t, e)
            };
        bi(ae, t => {
            un(R).setCookie || t(oe)
        }), ht(Ht);
        var se = Ot(Ht, 2),
            le = t => {
                Pr(t, {
                    get anchor() {
                        return un(_)
                    },
                    onClickOutside: () => {
                        a && _t()
                    },
                    get placement() {
                        return un(R).popoverPlacement
                    },
                    role: "alert",
                    variant: "error",
                    get dir() {
                        return un(M)
                    },
                    get updateUISignal() {
                        return un(O)
                    },
                    children: (t, e) => {
                        var n = ti(),
                            i = At(n),
                            r = t => {
                                ei(t, Qr())
                            },
                            o = t => {
                                var e = Wr(),
                                    n = It(e, !0);
                                xn(() => ui(n, un(z).expired)), ei(t, e)
                            },
                            s = t => {
                                var e = Wr(),
                                    n = It(e, !0);
                                xn(() => {
                                    Qi(e, "title", un(E)), ui(n, un(z).error)
                                }), ei(t, e)
                            };
                        bi(i, t => {
                            un(E) || a ? un(E) || un(w) !== $r.EXPIRED ? t(s, -1) : t(o, 1) : t(r)
                        }), ei(t, n)
                    },
                    $$slots: {
                        default: !0
                    }
                })
            },
            ce = t => {
                var e = ti();
                ! function(t, e, n) {
                    lt && dt();
                    var i = new vi(t);
                    $n(() => {
                        var t = e();
                        t != t && (t = yi), i.ensure(t, n)
                    })
                }(At(e), () => un(m), t => {
                    {
                        let e = ne(() => "standard" !== un(R).codeChallengeDisplay);
                        Pr(t, {
                            get anchor() {
                                return un(_)
                            },
                            get backdrop() {
                                return un(e)
                            },
                            get display() {
                                return un(R).codeChallengeDisplay
                            },
                            onClose: () => {
                                _t()
                            },
                            get placement() {
                                return un(R).popoverPlacement
                            },
                            role: "dialog",
                            get "aria-label"() {
                                return un(z).verificationRequired
                            },
                            get dir() {
                                return un(M)
                            },
                            get updateUISignal() {
                                return un(O)
                            },
                            children: (t, e) => {
                                var n = Jr(),
                                    i = At(n);
                                Lr(i, {
                                    get audioUrl() {
                                        return un(B)
                                    },
                                    get imageUrl() {
                                        return un(V)
                                    },
                                    onCancel: () => _t(),
                                    onReload: () => Lt(),
                                    onSubmit: t => bt(t),
                                    get codeChallenge() {
                                        return un(m)
                                    },
                                    get config() {
                                        return un(R)
                                    },
                                    get strings() {
                                        return un(z)
                                    }
                                });
                                var r = Ot(i, 2),
                                    a = t => {
                                        br(t, {
                                            get logo() {
                                                return un(H)
                                            },
                                            get strings() {
                                                return un(z)
                                            }
                                        })
                                    };
                                bi(r, t => {
                                    un(q) && "standard" !== un(R).codeChallengeDisplay && t(a)
                                }), ei(t, n)
                            },
                            $$slots: {
                                default: !0
                            }
                        })
                    }
                }), ei(t, e)
            };
        bi(se, t => {
            un(E) || un(w) === $r.EXPIRED || !a ? t(le) : un(m) && un(w) === $r.CODE && t(ce, 1)
        }), ht(Ut), er(Ut, t => De(_, t), () => un(_)), xn(t => {
            Qi(Ut, "data-state", un(w)), Qi(Ut, "data-display", un(R).display || void 0), Qi(Ut, "data-placement", t), Qi(Ut, "data-visible", un(D) || void 0), Qi(Ut, "dir", un(M)), Qi(Qt, "for", un(j)), Ut.dir = Ut.dir
        }, [() => function(t) {
            switch (t) {
                case "bar":
                    return un(R).barPlacement || "bottom";
                case "floating":
                    return un(R).floatingPlacement || "auto";
                default:
                    return
            }
        }(un(R).display)]), ei(t, Rt);
        var ue = tt(Dt);
        return i(), ue
    }, {
        auto: {
            type: "String"
        },
        challenge: {
            type: "String"
        },
        configuration: {
            type: "String"
        },
        display: {
            type: "String"
        },
        language: {
            type: "String"
        },
        name: {
            type: "String"
        },
        theme: {
            type: "String"
        },
        type: {
            type: "String"
        },
        workers: {
            type: "Number"
        }
    }, [], ["configure", "getConfiguration", "getState", "hide", "log", "reset", "setState", "show", "updateUI", "verify"]))
}),
function(t) {
    const e = {
        input: null,
        list: null,
        listLabel: "Suggested results",
        instructions: null,
        throttle: null,
        xhrSearch: null,
        queryName: "",
        queryProcessor: null,
        dataProcessor: null,
        selectCallback: null,
        typedQuery: "",
        resultLimit: 10,
        queryData: {},
        staticData: [],
        preventSubmit: !1,
        instructionsText: "{{count}} options available. Use up and down arrows to browse available options and enter to select one.",
        showAllOnFocus: !1,
        allowEmptySearch: !1,
        selectNext: function() {
            const t = this.list.querySelector("li[aria-selected=true]");
            let e = null;
            if (null === t) {
                if (e = this.list.querySelector("li:first-of-type"), null === e) return
            } else {
                if (e = t.nextElementSibling, null === e) return;
                t.setAttribute("aria-selected", !1)
            }
            e.setAttribute("aria-selected", !0), this.input.value = e.textContent
        },
        selectPrevious: function() {
            const t = this.list.querySelector("li[aria-selected=true]");
            if (null === t) return;
            const e = t.previousElementSibling;
            null === e ? this.input.value = this.typedQuery : (e.setAttribute("aria-selected", !0), this.input.value = e.textContent), t.setAttribute("aria-selected", !1)
        },
        selectByClick: function(t) {
            const e = this.list.querySelector("li[aria-selected=true]");
            null !== e && e.setAttribute("aria-selected", !1), t.setAttribute("aria-selected", !0), this.selectOption(), this.showAllOnFocus || this.input.focus()
        },
        escapeRegExp: function(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        },
        formatOption: function(t) {
            let e = "";
            if (t.display) e = t.display;
            else {
                const n = new RegExp(`(${this.escapeRegExp(this.typedQuery)})`, "ig");
                e = t.label.replace(n, "<strong>$1</strong>")
            }
            if (!e) return null;
            const n = document.createElement("li");
            return n.setAttribute("aria-selected", !1), n.setAttribute("role", "option"), Object.keys(t).forEach(e => {
                "label" !== e && "display" !== e && (n.dataset[e] = t[e])
            }), n.innerHTML = e, n
        },
        displayResults: function(t) {
            if (0 === t.length) return void this.closeList();
            let e = t.map(this.formatOption, this);
            e.length > this.resultLimit && !this.allowEmptySearch && (e = e.slice(0, this.resultLimit)), this.list.innerHTML = "";
            const n = document.createDocumentFragment();
            e.forEach(t => {
                t && n.appendChild(t)
            }), this.list.appendChild(n), this.updateInstructions(e.length), this.openList()
        },
        isListOpen: function() {
            return !this.list.classList.contains("hidden")
        },
        isOptionSelected: function() {
            return null !== this.list.querySelector("li[aria-selected=true]")
        },
        openList: function() {
            this.list.style.left = `${this.input.offsetLeft}px`, this.list.style.top = `${this.input.offsetTop+this.input.offsetHeight}px`, this.list.style.minWidth = `${this.input.offsetWidth}px`, this.list.classList.remove("hidden"), this.input.setAttribute("aria-expanded", !0)
        },
        closeList: function() {
            this.list.classList.add("hidden"), this.list.innerHTML = "", this.input.setAttribute("aria-expanded", !1), this.updateInstructions(0)
        },
        selectOption: function() {
            const t = this.list.querySelector("li[aria-selected=true]");
            this.input.dataset.oldvalue = this.input.value, this.input.value = t.textContent, null !== this.selectCallback && this.selectCallback(t), this.closeList()
        },
        processData: function(t) {
            return null !== this.dataProcessor ? this.dataProcessor(t) : t
        },
        buildQueryString: function() {
            const t = this.input.value,
                e = null !== this.queryProcessor ? this.queryProcessor(t) : t,
                n = new URLSearchParams;
            n.append(this.queryName, e), n.append("limit", this.resultLimit);
            return Object.keys(this.queryData).forEach(function(t) {
                const e = this.queryData[t];
                "function" != typeof e ? n.append(t, e) : n.append(t, e())
            }, this), `?${n.toString()}`
        },
        xhrOnLoad: function() {
            if (this.xhrSearch.status >= 200 && this.xhrSearch.status < 400) {
                const t = JSON.parse(this.xhrSearch.responseText),
                    e = this.processData(t);
                this.displayResults(e)
            } else console.log(this.xhrSearch.statusText)
        },
        xhrOnError: function() {
            console.log(this.xhrSearch.statusText)
        },
        makeRequest: function() {
            const t = this.buildQueryString();
            this.xhrSearch = new XMLHttpRequest, this.xhrSearch.open("GET", this.queryUrl + t, !0), this.xhrSearch.setRequestHeader("Accept", "application/json"), this.xhrSearch.onload = this.xhrOnLoad.bind(this), this.xhrSearch.onerror = this.xhrOnError.bind(this), this.xhrSearch.send()
        },
        searchData: function() {
            const t = this.input.value;
            if ("" === t && !this.allowEmptySearch) return void this.closeList();
            let e = null !== this.queryProcessor ? this.queryProcessor(t) : t;
            if (e = e.toLowerCase(), "" === e) return void this.displayResults(this.staticData);
            const n = this.staticData.filter(t => -1 !== t.label.toLowerCase().indexOf(e));
            this.displayResults(n)
        },
        getExactMatch: function() {
            const t = this.input.value.trim().toLowerCase();
            if ("" === t) return null;
            const e = this.staticData.find(e => e.label.toLowerCase() === t);
            return e || null
        },
        query: function() {
            this.staticData.length > 0 ? this.searchData() : (this.throttle && clearTimeout(this.throttle), this.xhrSearch && this.xhrSearch.abort(), "" !== this.input.value || this.allowEmptySearch ? this.throttle = setTimeout(this.makeRequest.bind(this), 500) : this.closeList())
        },
        disable: function() {
            this.list.parentNode.removeChild(this.list)
        },
        createList: function() {
            this.list = document.createElement("ul"), this.list.id = this.getListId(), this.list.setAttribute("role", "listbox"), this.list.setAttribute("aria-label", this.listLabel), this.list.classList.add("s-ui-autocomplete-list"), this.list.classList.add("hidden"), this.input.parentNode.insertBefore(this.list, this.input.nextSibling)
        },
        getListId: function() {
            return `${this.input.id}_list`
        },
        getInstructionsId: function() {
            return `${this.input.id}_instructions`
        },
        formatInput: function() {
            this.input.setAttribute("role", "combobox"), this.input.setAttribute("aria-autocomplete", "list"), this.input.setAttribute("aria-expanded", "false"), this.input.setAttribute("aria-controls", this.getListId()), this.input.setAttribute("aria-describedby", this.getInstructionsId()), this.input.setAttribute("autocomplete", "off"), this.queryName = this.input.getAttribute("name")
        },
        updateInstructions: function(t) {
            this.instructions.innerHTML = this.instructionsText.replace("{{count}}", t)
        },
        handleTypingDown: function(t) {
            const e = this.isListOpen();
            switch (t.key) {
                case "Escape":
                    e && this.closeList();
                    break;
                case "ArrowDown":
                    e ? (t.preventDefault(), this.selectNext()) : this.showAllOnFocus && "" === this.input.value && this.query();
                    break;
                case "ArrowUp":
                    e && (t.preventDefault(), this.selectPrevious());
                    break;
                case "Enter":
                    e && this.isOptionSelected() ? (t.preventDefault(), this.selectOption()) : this.preventSubmit && t.preventDefault();
                    break;
                case "Tab":
                    e && this.isOptionSelected() ? this.selectOption() : e && this.closeList()
            }
        },
        handleTypingUp: function(t) {
            switch (t.key) {
                case "Escape":
                case "ArrowDown":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowRight":
                case "Enter":
                case "Tab":
                    break;
                default:
                    this.typedQuery = this.input.value, this.query()
            }
        },
        handleClick: function(t) {
            const e = t.target.closest("li[aria-selected=false]");
            null !== e && this.selectByClick(e)
        },
        handleOutsideClick: function(t) {
            const e = t.target;
            null !== e.closest(`#${this.list.id}`) || null !== e.closest(`#${this.input.id}`) || this.closeList()
        },
        attachEvents: function() {
            this.input.addEventListener("keydown", this.handleTypingDown.bind(this)), this.input.addEventListener("keyup", this.handleTypingUp.bind(this)), this.list.addEventListener("click", this.handleClick.bind(this)), document.body.addEventListener("click", this.handleOutsideClick.bind(this)), this.showAllOnFocus && this.input.addEventListener("focus", () => {
                "" === this.input.value && this.query()
            })
        },
        addInstructions: function() {
            this.instructions = document.createElement("div"), this.instructions.id = this.getInstructionsId(), this.instructions.setAttribute("aria-live", "polite"), this.instructions.classList.add("sr-only"), this.instructions.innerHTML = this.instructionsText.replace("{{count}}", 0), this.list.parentNode.insertBefore(this.instructions, this.list.nextSibling)
        },
        validateConfig: function(t) {
            if (!t.inputSelector) throw new Error("Must set inputSelector.");
            if (null === this.input) throw new Error(`${t.inputSelector} not found in the DOM.`);
            if (!this.queryUrl && 0 === this.staticData.length) throw new Error("Must set queryUrl or staticData.")
        },
        setConfig: function(t) {
            this.input = document.querySelector(t.inputSelector);
            const e = ["queryUrl", "staticData", "queryProcessor", "dataProcessor", "selectCallback", "resultLimit", "queryData", "instructionsText", "preventSubmit", "listLabel", "showAllOnFocus", "allowEmptySearch"];
            Object.keys(t).forEach(function(n) {
                -1 !== e.indexOf(n) && (this[n] = t[n])
            }, this), this.showAllOnFocus && (this.allowEmptySearch = !0)
        },
        init: function(t) {
            this.setConfig(t), this.validateConfig(t), this.formatInput(), this.createList(), this.addInstructions(), this.attachEvents()
        }
    };
    t.springSpace = t.springSpace || {}, t.springSpace.sui = t.springSpace.sui || {}, t.springSpace.sui.initAutocomplete = t.springSpace.sui.initAutocomplete || function(t) {
        const n = Object.create(e);
        return n.init(t), n
    }
}(this);
{
    class t {
        #tt = null;
        #et = "s-ui-notifyarea";
        #nt = "s-ui-notify";
        #it = "s-ui-notify";
        #rt = {
            msg: '<i class="fa fa-spinner fa-pulse mg-right" aria-hidden="true"></i> <span>Working...</span>',
            className: "s-ui-notify-working"
        };
        #at = {
            msg: "Success.",
            className: "s-ui-notify-success"
        };
        #ot = {
            msg: "Error: Please try again.",
            className: "s-ui-notify-error"
        };
        #st = 0;
        #lt = null;
        constructor({
            parent_id: t = null
        }) {
            t && (this.#et = t)
        }
        #ct() {
            let t = document.getElementById(this.#et);
            return t || (t = document.createElement("DIV"), t.id = this.#et, t.setAttribute("role", "alert"), t.setAttribute("aria-atomic", "true"), document.body.appendChild(t)), t
        }
        #ut() {
            return this.#tt || (this.#tt = this.#ct()), this.#tt
        }
        error(t = "", e = null) {
            const n = {
                ...this.#ot
            };
            t && (n.msg = t), n.msg = `<i class="fa fa-exclamation-triangle mg-right" aria-hidden="true"></i> ${n.msg}`, n.id = e, this.show(n)
        }
        success(t = "", e = null, n = 0) {
            const i = {
                ...this.#at
            };
            t && (i.msg = t), n > 0 && (i.ms = n), i.msg = `<i class="fa fa-check-circle mg-right" aria-hidden="true"></i> ${i.msg}`, i.id = e, this.show(i)
        }
        working(t = "", e = null) {
            const n = {
                ...this.#rt
            };
            t && (n.msg = t), n.id = e, this.show(n)
        }
        show({
            msg: t = "",
            className: e = null,
            id: n = null,
            ms: i = 0
        }) {
            if (!t) return null;
            let r = null;
            n ? (r = document.getElementById(n), r && r.remove()) : (this.#st++, n = `${this.#nt}-${this.#st}`), r = document.createElement("DIV"), r.id = n, r.classList.add(this.#it), e && r.classList.add(e), r.innerHTML = `<div class="s-ui-notification-message">${t}</div><button class="btn" aria-label="${window?.springyText?.modal?.close||"Close"}">&times;</button>`;
            return this.#ut().appendChild(r), r.addEventListener("click", t => {
                this.hide(t.currentTarget)
            }), i > 0 && setTimeout(() => {
                this.hide(r)
            }, i), null === this.#lt && (this.#lt = this.keyboardEvents.bind(this), document.addEventListener("keydown", this.#lt, !0)), n
        }
        hide(t = null) {
            t ? t.remove() : this.#tt && (this.#tt.innerHTML = ""), this.#dt()
        }
        hideWorking() {
            this.#tt && (this.#tt.querySelectorAll(`.${this.#rt.className}`).forEach(t => {
                t.remove()
            }), this.#dt())
        }
        #dt() {
            null === this.#lt || !this.#tt || this.#tt.children.length > 0 || (document.removeEventListener("keydown", this.#lt, !0), this.#lt = null)
        }
        keyboardEvents(t) {
            if ("Escape" !== t.key) return;
            const e = this.#tt.querySelector(`.${this.#it}`);
            e && e.remove(), this.#dt()
        }
    }
    window.suiNotify = new t({})
}! function(t) {
    var e = function(t) {
        if (void 0 === t && (t = {}), this.setConfig = function(t) {
                this.id = t.id ? t.id : "s-sui-modal", this.title = t.title ? t.title : "", this.content = t.content ? t.content : "", this.url = t.url ? t.url : null, this.fade = !!t.fade, this.callback = t.callback ? t.callback : null, this.closeCallback = t.closeCallback ? t.closeCallback : null, this.footer = !0 === t.footer && t.footer, this.size = t.size ? t.size : "", this.modal_buttons = t.buttons ? t.buttons : [], this.returnfocus = !1 !== t.returnfocus, this.opener = document.activeElement, this.btn_callbacks = {}, this.backdrop = void 0 === t.backdrop || ("static" === t.backdrop ? "static" : !!t.backdrop), this.keyboard = !1 !== t.keyboard;
                var e = void 0 !== t.transText;
                this.transText = {
                    close: e && t.transText.close ? t.transText.close : "Close",
                    error: e && t.transText.error ? t.transText.error : "Error",
                    unknown: e && t.transText.unknown ? t.transText.unknown : "Unknown",
                    invalidResponse: e && t.transText.invalidResponse ? t.transText.invalidResponse : "Invalid response received",
                    toggle: e && t.transText.toggle ? t.transText.toggle : "Toggle Dropdown"
                }
            }, this.setConfig(t), this.$el = jQuery("#" + this.id), 0 === jQuery("#" + this.id).length)
            if (this.$el = jQuery('<div class="modal ' + (this.fade ? "fade" : "") + '" tabindex="-1" role="dialog" aria-labelledby="s-sui-modal-header"></div>').attr("id", this.id).html('<div class="modal-dialog"><div class="modal-content"></div></div>'), "s-sui-modal" === this.id) jQuery("body").prepend(this.$el);
            else {
                var e = jQuery("div.modal");
                e.length > 0 ? e.filter(":last").after(this.$el) : jQuery("body").prepend(this.$el)
            }
        "large" === this.size && this.$el.find(".modal-dialog").addClass("modal-lg"), this.retrieveSuccess = function(t) {
            t.title && (this.title = t.title), t.content && (this.content = t.content), t.buttons && (this.modal_buttons = t.buttons), this.footer = !(!t.footer || !0 !== t.footer), this.draw()
        }, this.retrieveFail = function(t) {
            var e = this.transText.unknown;
            if (t.responseText) try {
                var n = JSON.parse(t.responseText);
                n.error && (e = n.error)
            } catch (t) {
                e = this.transText.invalidResponse
            }
            this.content = this.transText.error + ": " + e, this.footer = !0, this.draw()
        }, this.retrieve = function() {
            jQuery.ajax({
                url: this.url,
                cache: !1,
                method: "GET",
                dataType: "json"
            }).done(this.retrieveSuccess.bind(this)).fail(this.retrieveFail.bind(this))
        }, this.handleShowEvent = function() {
            null !== this.callback && this.callback(this)
        }, this.handleHideEvent = function() {
            this.returnfocus && void 0 !== this.opener && null !== this.opener && this.opener.focus(), null !== this.closeCallback && this.closeCallback(this), this.$el.off().removeData("bs.modal").find(".modal-content").html(""), jQuery("#" + this.id + " .modal-dialog").removeClass("modal-lg"), this.callback = null, this.closeCallback = null
        }, this.draw = function() {
            var t = '<div class="modal-content">';
            "" !== this.title && (t += '<div class="modal-header"><button id="s-sui-modal-close" type="button" class="close" data-dismiss="modal" aria-label="&times; ' + this.transText.close + '">&times;</button><h2 class="modal-title" id="s-sui-modal-header">' + this.title + "</h2></div>");
            var e = "";
            "string" == typeof this.content && (e = this.content), t += '<div class="modal-body">' + e + "</div>", (this.footer || this.modal_buttons.length > 0) && (this.btn_callbacks = {}, t += '<div class="modal-footer">', 0 === this.modal_buttons.length ? t += '<button type="button" class="btn btn-default" data-dismiss="modal">' + this.transText.close + "</button>" : this.modal_buttons.forEach(function(e, n) {
                e.links && e.links.length > 0 ? (e.gclass = e.gclass ? e.gclass : "", t += '<div class="btn-group ' + e.gclass + '">', e.bclass = e.bclass ? e.bclass : "btn-default", e.label = e.label ? e.label : "", "" !== e.label && (t += '<button type="button" class="btn ' + e.bclass + " btn-modal-" + n + '" >' + e.label + "</button>", e.callback && (this.btn_callbacks["btn-modal-" + n] = e.callback)), t += '<button type="button" class="btn ' + e.bclass + ' dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span><span class="sr-only">' + this.transText.toggle + "</span></button>", t += '<ul class="dropdown-menu">', e.links.forEach(function(e, n) {
                    if (e.label = e.label ? e.label : "", "" !== e.label) {
                        var i = e.url ? e.url : "#";
                        t += '<li><a href="' + i + '" class="link-modal-' + n + '">' + e.label + "</a></li>", e.callback && (this.btn_callbacks["link-modal-" + n] = e.callback)
                    }
                }, this), t += "</ul>", t += "</div>") : (e.bclass = e.bclass ? e.bclass : "btn-default", e.label = e.label ? e.label : "", "" !== e.label && (t += '<button type="button" class="btn ' + e.bclass + " btn-modal-" + n + '" >' + e.label + "</button>", e.callback && (this.btn_callbacks["btn-modal-" + n] = e.callback)))
            }, this), t += "</div>"), t += "</div>";
            var n = jQuery(t);
            if ("string" != typeof this.content && n.find(".modal-body").html(this.content), this.$el.find(".modal-content").replaceWith(n), this.modal_buttons.length > 0)
                for (var i in this.btn_callbacks) this.btn_callbacks.hasOwnProperty(i) && "function" == typeof this.btn_callbacks[i] && this.$el.find("." + i).on("click", {
                    modal: this
                }, this.btn_callbacks[i]);
            this.$el.on("show.bs.modal", this.handleShowEvent.bind(this)), this.$el.modal({
                backdrop: this.backdrop,
                keyboard: this.keyboard
            }, "show"), this.$el.on("hidden.bs.modal", this.handleHideEvent.bind(this))
        }, this.close = function() {
            jQuery("#" + this.id).modal("hide")
        }, this.redraw = function(t) {
            this.$el.unbind("show.bs.modal").unbind("hidden.bs.modal"), this.setConfig(t), null !== this.url ? this.retrieve() : this.draw()
        }, null !== this.url ? this.retrieve() : this.draw()
    };
    "undefined" != typeof module ? module.exports = e : (t.springSpace = t.springSpace || {}, t.springSpace.sui = t.springSpace.sui || {}, t.springSpace.sui.modal = t.springSpace.sui.modal || e)
}(this);
var springSpace = springSpace || {};
springSpace.sui = springSpace.sui || {}, springSpace.sui.filedrop = function(t) {
    if (void 0 === t) return !1;
    if (!t.selector || "" === t.selector) return !1;
    let e = {
        max_file_size: "Maximum file size",
        invalidExtension: "File is not an allowed file type: "
    };
    var n;
    if (this.callback = t.callback ? t.callback : function() {}, this.error_callback = t.error_callback ? t.error_callback : function() {}, this.validate = t.validate ? t.validate : function() {
            return !0
        }, this.max_files = t.max_files ? parseInt(t.max_files, 10) : 0, this.max_upload_size = t.max_upload_size ? parseInt(t.max_upload_size, 10) : 0, this.max_file_size = t.max_file_size ? parseInt(t.max_file_size, 10) : 0, this.batch_files = void 0 !== t.batch_files && !!t.batch_files, this.autoupload = void 0 === t.autoupload || !!t.autoupload, this.translations = t.translations ? Object.assign(e, t.translations) : e, this.allowedMimeTypes = t.allowedMimeTypes ? t.allowedMimeTypes : [], this.allowedFileExtensions = t.allowedFileExtensions ? t.allowedFileExtensions : [], this.isAdvancedUpload = ("draggable" in (n = document.createElement("div")) || "ondragstart" in n && "ondrop" in n) && "FormData" in window && "FileReader" in window, this.$form = jQuery(t.selector), 0 === this.$form.length) return !1;
    this.$droparea = this.$form.find(".s-ui-filedrop"), this.droppedFiles = [], this.batchedFiles = [], this.batch = {
        current: 0,
        total: 0
    };
    var i = this;
    if (this.$input = this.$droparea.find('input[type="file"]'), this.$label = this.$droparea.find("label"), this.$submitbutton = this.$form.find('button[type="submit"]'), this.$progress = null, this.showFiles = function() {
            if (0 !== this.$input.length) {
                var t = this.$droparea[0].querySelector(".s-ui-filedrop-filenames"),
                    e = t.querySelector("ul");
                if (this.isAdvancedUpload) {
                    var n = [],
                        r = 0;
                    this.droppedFiles.forEach(function(t) {
                        var e = document.createElement("li");
                        e.innerText = t.name, n.push(e), r += t.size
                    }), e.innerHTML = "", 0 === n.length ? t.classList.add("hidden") : (t.classList.remove("hidden"), n.forEach(function(t) {
                        e.appendChild(t)
                    })), this.max_files > 0 && n.length > this.max_files && this.showError(i.max_files + " file uploads maximum."), !1 === this.batch_files && this.max_upload_size > 0 && r > this.max_upload_size && this.showError("Files total " + i.bytesToMB(r) + " MB which exceeds the maximum of " + i.bytesToMB(this.max_upload_size) + " MB at a time.")
                } else {
                    if ("" === this.$input.val()) return t.classList.add("hidden"), void(e.innerHTML = "");
                    t.classList.remove("hidden");
                    var a = document.createElement("li");
                    a.innerText = this.$input.val().split("\\").slice(-1).pop(), e.appendChild(a), this.$label.find(".filetext").addClass("hidden")
                }
            }
        }, this.reset = function() {
            i.$form[0].reset(), i.removeError(), i.droppedFiles = [], i.batch.current = 0, i.batch.total = 0, i.stopProgress(), i.showFiles(), i.$input.removeClass("has-focus")
        }, this.clearFiles = function() {
            i.resetFileInput(), i.droppedFiles = [], i.batch.current = 0, i.batch.total = 0, i.showFiles()
        }, this.resetFileInput = function() {
            if (0 !== this.$input.length) {
                var t = jQuery("<form>"),
                    e = this.$input.clone(!0).appendTo(t);
                t[0].reset(), this.$input.replaceWith(e), this.$input = e
            }
        }, this.showError = function(t) {
            if (0 !== this.$droparea.length) {
                var e = document.createElement("p");
                if (e.innerText = t, this.$form.find("div.s-ui-filedrop-error").length > 0) this.$form.find("div.s-ui-filedrop-error").append(e);
                else {
                    var n = document.createElement("div");
                    n.classList.add("alert"), n.classList.add("alert-danger"), n.classList.add("s-ui-filedrop-error"), n.setAttribute("role", "alert"), n.appendChild(e), this.$droparea.prepend(n)
                }
            }
        }, this.removeError = function() {
            this.$form.find("div.s-ui-filedrop-error").empty()
        }, this.countFiles = function() {
            return 0 === this.$input.length ? 0 : this.isAdvancedUpload ? this.droppedFiles.length : "" !== this.$input.val() ? 1 : 0
        }, this.startProgress = function() {
            if (null === this.$progress || 1 === this.$progress.length && "" === this.$progress.html()) {
                var t = !0;
                this.$progress = this.$form.find("div.s-ui-filedrop-progress"), 0 === this.$progress.length && (t = !1, this.$progress = jQuery("<div></div>").addClass("s-ui-filedrop-progress"));
                var e = jQuery("<div></div>").attr({
                        id: "s-ui-filedrop-progresslabel"
                    }).text("Uploading files"),
                    n = jQuery("<div></div>").addClass("s-ui-filedrop-progbar").attr({
                        role: "progressbar",
                        "aria-valuenow": "0",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-labelledby": "s-ui-filedrop-progresslabel"
                    });
                n.append(document.createElement("span")), this.$progress.append([e, n]), t || this.$droparea.prepend(this.$progress)
            }
        }, this.updateProgress = function(t, e) {
            var n = Math.round(t / e * 100);
            (this.$progress.find("span:first").css("width", n + "%"), this.$progress.find(".s-ui-filedrop-progbar").attr("aria-valuenow", n), this.batch.total > 1 && n < 50) && this.$progress.find("div:first").html("Uploading file batch (" + this.batch.current + "/" + this.batch.total + ")")
        }, this.stopProgress = function() {
            null !== this.$progress && this.$progress.empty()
        }, this.bytesToMB = function(t) {
            return (parseInt(t, 10) / 1048576).toFixed(1)
        }, this.addFiles = function(t) {
            if (i.max_files > 0 && i.countFiles() + t.length > i.max_files) return i.showError(i.max_files + " file uploads maximum."), !1;
            var e = 0;
            i.droppedFiles.forEach(function(t) {
                e += t.size
            });
            for (var n = [], r = 0; r < t.length; r++) {
                var a = t[r];
                if (i.droppedFiles.length > 0) {
                    var o = !1;
                    if (i.droppedFiles.forEach(function(t) {
                            t.name === a.name && (o = !0)
                        }), o) {
                        n.push(r);
                        continue
                    }
                }
                if (this.allowedFileExtensions.length > 0) {
                    let t = a.name.split(".").pop().toLowerCase();
                    if (-1 === this.allowedFileExtensions.indexOf(t)) {
                        i.showError(this.translations.invalidExtension + a.name), n.push(r);
                        continue
                    }
                }
                this.allowedMimeTypes.length > 0 && -1 === this.allowedMimeTypes.indexOf(a.type) ? (i.showError("File: " + a.name + " is not an allowed file type."), n.push(r)) : i.max_file_size > 0 && a.size > i.max_file_size ? (i.showError("File: " + a.name + " is greater than allowed file size of " + i.bytesToMB(i.max_file_size) + " MB."), n.push(r)) : !1 === i.batch_files && e + a.size > i.max_upload_size ? (i.showError("File: " + a.name + " causes files to go over maximum upload size of " + i.bytesToMB(i.max_upload_size) + " MB at a time."), n.push(r)) : e += a.size
            }
            if (!1 === i.batch_files && i.max_upload_size > 0 && e > i.max_upload_size) return i.showError("Files total " + e + " bytes which exceeds the maximum of " + i.bytesToMB(i.max_upload_size) + " MB at a time."), !1;
            for (var s = 0; s < t.length; s++) - 1 === n.indexOf(s) && i.droppedFiles.push(t[s]);
            return 0 !== i.droppedFiles.length
        }, this.batchFiles = function() {
            var t = [],
                e = [];
            if (!this.batch_files) return t.push(this.droppedFiles), t;
            var n = 1;
            return t.push([]), e.push(0), this.droppedFiles.forEach(function(r) {
                var a = !1;
                if (e.forEach(function(n, o) {
                        !a && n + r.size < i.max_upload_size && (e[o] = n + r.size, t[o].push(r), a = !0)
                    }), !a) {
                    e.push(0), n++, t.push([]);
                    var o = n - 1;
                    e[o] = r.size, t[o].push(r)
                }
            }), t
        }, this.isLastBatch = function() {
            return this.batch.current >= this.batch.total
        }, this.ajaxUpload = function() {
            i.$form.find('input[name="batch_current"]').val(i.batch.current);
            var t = new FormData(i.$form[0]);
            "function" == typeof t.delete && t.delete(i.$input.attr("name")), i.batchedFiles[i.batch.current - 1].forEach(function(e) {
                t.append(i.$input.attr("name"), e)
            }), jQuery.ajax({
                url: i.$form.attr("action"),
                type: i.$form.attr("method"),
                data: t,
                dataType: "json",
                cache: !1,
                crossDomain: !0,
                contentType: !1,
                processData: !1,
                beforeSend: function() {
                    i.countFiles() > 0 && i.startProgress()
                },
                complete: function() {
                    i.isLastBatch() ? (i.$form.removeClass("is-uploading"), i.$submitbutton.prop("disabled", !1), i.stopProgress()) : (i.batch.current++, i.ajaxUpload())
                },
                success: function(t) {
                    i.callback(t, i)
                },
                xhr: function() {
                    var t = jQuery.ajaxSettings.xhr();
                    return i.countFiles() > 0 && (t.upload.onprogress = function(t) {
                        i.updateProgress(t.loaded, t.total)
                    }), t
                }
            }).fail(function(t) {
                i.error_callback(t, i)
            })
        }, this.isAdvancedUpload && this.$input.length > 0) {
        if (this.$droparea.addClass("has-advanced-upload"), this.batch_files) {
            var r = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_current"
                }).val("0"),
                a = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_total"
                }).val("0");
            this.$form.prepend([r, a])
        }
        this.$droparea.on("drag dragstart dragend dragover dragenter dragleave drop", function(t) {
            t.preventDefault(), t.stopPropagation()
        }).on("dragover dragenter", function() {
            i.$droparea.addClass("is-dragover")
        }).on("dragleave dragend drop", function() {
            i.$droparea.removeClass("is-dragover")
        }).on("drop", function(t) {
            var e = i.addFiles(t.originalEvent.dataTransfer.files);
            i.showFiles(), !0 === e && i.autoupload && i.$form.submit()
        }).on("click", function(t) {
            var e = t.target.tagName; - 1 !== ["A", "I", "SPAN", "B", "STRONG", "BUTTON"].indexOf(e) && (jQuery(t.target).closest("a, button").hasClass("s-ui-filedrop-clear") && (i.clearFiles(), i.removeError()))
        })
    }
    if (this.isAdvancedUpload || (this.$input.remove(), this.$droparea.remove()), this.$input.length > 0 && (this.$input.on("change", function(t) {
            if (t.target.files) {
                if (i.isAdvancedUpload) {
                    var e = i.addFiles(t.target.files);
                    i.resetFileInput(), !0 === e && i.autoupload && i.$form.submit()
                }
                i.$input.removeClass("has-focus"), i.showFiles()
            }
        }).on("focus", function(t) {
            t.target.classList.add("has-focus")
        }).on("blur", function(t) {
            t.target.classList.remove("has-focus")
        }), this.translations.max_file_size)) {
        var o = document.createElement("p");
        o.innerHTML = this.translations.max_file_size + ": " + this.bytesToMB(this.max_file_size) + " MB", this.$label.append(o)
    }
    this.$form.on("submit", function(t) {
        if (i.$form.hasClass("is-uploading")) t.preventDefault();
        else {
            if (i.$form.removeClass("is-error"), i.removeError(), i.max_files > 0 && i.countFiles() > i.max_files) return i.showError(i.max_files + " file uploads maximum."), void t.preventDefault();
            if (!1 === i.validate(i)) return i.$form.addClass("is-error"), void t.preventDefault();
            i.$form.addClass("is-uploading"), i.$submitbutton.prop("disabled", !0), i.isAdvancedUpload ? (t.preventDefault(), i.batch.current = 1, i.batchedFiles = i.batchFiles(), i.batch.total = i.batchedFiles.length, i.$form.find('input[name="batch_total"]').val(i.batch.total), i.ajaxUpload()) : (t.preventDefault(), jQuery.ajax({
                url: i.$form.attr("action"),
                type: i.$form.attr("method"),
                data: i.$form.serialize(),
                dataType: "json",
                complete: function() {
                    i.$form.removeClass("is-uploading"), i.$submitbutton.prop("disabled", !1)
                },
                success: function(t) {
                    i.callback(t, i)
                }
            }).fail(function(t) {
                i.error_callback(t, i)
            }))
        }
    })
};
var springSpace = springSpace || {};
springSpace.cookieConsent = springSpace.cookieConsent || {}, springSpace.cookieConsent.alert = function(t) {
    this.setConfig = function(t) {
        void 0 === t && (t = {});
        var e = t.okay ? t.okay : "OK";
        this.placement_opts = ["bottom", "top"], this.placement = -1 !== this.placement_opts.indexOf(t.placement) ? t.placement : "bottom", this.cookie_name = "springy_cookie_consent", this.cookie_notice_accepted = "ok", this.cookie_exp_days = t.cookie_exp_days ? t.cookie_exp_days : 180, this.read_more_callback = t.read_more_callback ? t.read_more_callback : function() {}, this.aria_label = t.aria_label || "User Privacy Alert", this.fade_in = 500, this.fade_out = 200, this.container_id = "s-ui-cc-container", this.close_button_id = "s-ui-cc-close-btn", this.read_more_elt_id = "s-ui-cc-read-more-link", this.consent_message = t.consent_message ? t.consent_message : "By using our website you are consenting to our use of cookies in accordance with our cookie policy.", this.content = '<div id="' + this.container_id + '" class="container" style="display: none;">    <aside class="navbar navbar-default navbar-fixed-' + this.placement + " fixed-" + this.placement + '" id="s-ui-cc-navbar" aria-label="' + this.aria_label + '">        <div id="s-ui-cc-main" class="container">            <div class="navbar-inner navbar-content-center" id="s-ui-cc-msg-container">                <div id="s-ui-cc-msg">' + this.consent_message + '<button id="' + this.close_button_id + '" type="button" class="btn btn-sm btn-default btn-light" data-dismiss="alert">' + e + "</button></div>            </div>        </div>    </aside></div>"
    }, this.consentCookieAccepted = function() {
        return this.getCookie(this.cookie_name) === this.cookie_notice_accepted
    }, this.setCookie = function(t, e, n) {
        var i = new Date;
        i.setDate(i.getDate() + n);
        var r = encodeURI(e) + (null === n ? "" : "; expires=" + i.toUTCString()),
            a = "https:" === location.protocol ? "; secure" : "";
        document.cookie = t + "=" + r + "; path=/; samesite=lax;" + a, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(t) {
        var e, n, i, r = document.cookie.split(";");
        for (e = 0; e < r.length; e++)
            if (n = r[e].indexOf("="), r[e].substr(0, n).replace(/^\s+|\s+$/g, "") === t) return i = r[e].substr(n + 1), decodeURI(i);
        return null
    }, this.handleClose = function() {
        this.setCookie(this.cookie_name, this.cookie_notice_accepted, this.cookie_exp_days), jQuery("#" + this.container_id).fadeOut(this.fade_out)
    }, this.handleAlert = function() {
        this.consentCookieAccepted() || (jQuery("body").prepend(this.content), jQuery("#" + this.container_id).fadeIn(this.fade_in), jQuery("#" + this.close_button_id).on("click", this.handleClose.bind(this)), jQuery("#" + this.read_more_elt_id).attr("href", "#"), jQuery("#" + this.read_more_elt_id).on("click", this.read_more_callback.bind(this)))
    }, this.setConfig(t), jQuery(document).ready(this.handleAlert.bind(this))
};
var springSpace = springSpace || {};
springSpace.la = springSpace.la || {}, springSpace.Util = {};
{
    const t = function(t) {
            const e = window.getSelection(),
                n = document.createRange();
            n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n)
        },
        e = function(t, e) {
            return t.replace(/%(\d+)/g, function(t, n) {
                return e[--n]
            })
        };
    springSpace.Util = {
        selectText: t,
        stringFormat: e
    }
}

function closeModal(t) {
    var e = null;
    void 0 === t ? jQuery(".modal").each(function(t, n) {
        "none" !== jQuery(n).css("display") && (e = jQuery(n))
    }) : e = jQuery("#" + t), null !== e && e.modal("hide").removeData("bs.modal").find(".modal-content").html("")
}

function disableButton(t) {
    t && (-1 === ["#", "."].indexOf(t.charAt(0)) && (t = "#" + t), jQuery(t).prop("disabled", !0))
}

function enableButton(t) {
    t && (-1 === ["#", "."].indexOf(t.charAt(0)) && (t = "#" + t), jQuery(t).prop("disabled", !1))
}
var errorAlert = function(t = "") {
        window.suiNotify.hideWorking(), window.suiNotify.error(t)
    },
    successAlert = function(t = "", e = 0) {
        window.suiNotify.hideWorking(), "" === t && (e = 5e3), window.suiNotify.success(t, null, e)
    },
    workingAlert = function(t = "") {
        window.suiNotify.working(t)
    },
    stopAlert = function() {
        window.suiNotify.hideWorking()
    },
    jqGetAjaxError = function(t) {
        let e = "";
        if (t.responseText) try {
            const n = JSON.parse(t.responseText);
            n.error && (e = n.error)
        } catch {
            e = "Invalid response received"
        }
        return e
    },
    jqAjaxFailCallback = function(t) {
        const e = jqGetAjaxError(t);
        errorAlert(e)
    },
    createDismissableErrorAlert = function(t = "", e = "") {
        return t || (t = "Error"), createDismissableAlert(t, "danger", e)
    },
    createDismissableSuccessAlert = function(t = "", e = "") {
        return t || (t = "Success"), createDismissableAlert(t, "success", e)
    },
    createDismissableJQAjaxFailAlert = function(t) {
        const e = jqGetAjaxError(t);
        return createDismissableErrorAlert(e)
    },
    createDismissableAlert = function(t, e, n = "") {
        var i = document.createElement("div");
        "" !== n && (i.id = n), i.classList.add("alert", "alert-" + e, "alert-dismissable", "mg-top"), i.setAttribute("role", "alert"), i.setAttribute("aria-atomic", "true");
        var r = document.createElement("button");
        return r.type = "button", r.classList.add("close"), r.setAttribute("aria-label", "close"), r.setAttribute("data-dismiss", "alert"), r.innerHTML = '<span aria-hidden="true">&times;</span>', i.appendChild(r), i.insertAdjacentHTML("beforeend", t), i
    },
    springSpace = springSpace || {};
springSpace.regex = {
        email: /^<?(['a-zA-Z0-9_=\.\-\+&!#\$%\*\?\^\|\{\}\~])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+>?$/i,
        url: /^((mailto|https?):)*\/\/.+/i,
        phone: /^\+?[0-9]{10,}$/,
        date: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        datetime: /^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?$/,
        color: /^#([a-f0-9A-F]{6}|[a-f0-9A-F]{3})$/
    },
    function(t) {
        t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
        t.springSpace.la.FormAutoReply = class {
            constructor({
                type: t = 0,
                start: e = null,
                end: n = null,
                offhours: i = null,
                timezone: r = "",
                captchaAlwaysOn: a = !1,
                libauth_enabled: o = !1
            }) {
                this.type = t, this.start = e, this.end = n, this.offhours = i, this.timezone = r, this.captchaAlwaysOn = a, this.libauth_enabled = o
            }
            isCaptchaEnabled() {
                return !this.libauth_enabled && (!!this.captchaAlwaysOn || this.isAutoReplyEnabled())
            }
            isAutoReplyEnabled() {
                return 0 !== this.type && (1 === this.type || (3 === this.type ? this._isBetweenDates() : 2 === this.type && this._isNowOffHours()))
            }
            getAutoReplyType() {
                return this.type
            }
            _isBetweenDates() {
                if (!this.end || !this.start) return !1;
                const t = Math.floor(Date.now() / 1e3);
                return t >= this.start && t <= this.end
            }
            _isNowOffHours() {
                if (!this.offhours || !this.timezone) return !1;
                const t = new Intl.DateTimeFormat("en-US", {
                        timeZone: this.timezone,
                        weekday: "short",
                        hour: "numeric",
                        hour12: !1
                    }).formatToParts(new Date),
                    e = t.find(t => "weekday" === t.type)?.value,
                    n = parseInt(t.find(t => "hour" === t.type)?.value ?? "0", 10),
                    i = {
                        Mon: 0,
                        Tue: 1,
                        Wed: 2,
                        Thu: 3,
                        Fri: 4,
                        Sat: 5,
                        Sun: 6
                    } [e] ?? -1,
                    r = Object.values(this.offhours).find(t => t.day === i);
                return !!r && !this._isBetweenHours(r.start, r.end, n)
            }
            _isBetweenHours(t, e, n) {
                return (24 !== t || 24 !== e) && (t === e || (n === t || (t > e ? !(n < t && n > e) : n > t && n < e)))
            }
        }
    }(window),
    function(t) {
        t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
        const e = Object.freeze({
            RULE_OPERATOR_EQUALS: 0,
            RULE_OPERATOR_NOTEQUALS: 1,
            RULE_OPERATOR_INCLUDES: 2,
            RULE_OPERATOR_INCLUDES_ALL: 3,
            RULE_ACTION_SHOW: 0,
            RULE_ACTION_HIDE: 1,
            RULE_ACTION_NONE: -1
        });
        t.springSpace.la.FormFieldRule = class {
            constructor({
                field1: t = 0,
                operator: n = e.RULE_OPERATOR_EQUALS,
                value: i = [],
                field2: r = 0,
                action: a = e.RULE_ACTION_SHOW
            }) {
                this.field1 = t, this.operator = n, this.value = Array.isArray(i) ? i : [], this.field2 = r, this.action = a
            }
            get oppositeAction() {
                return this.action === e.RULE_ACTION_SHOW ? e.RULE_ACTION_HIDE : e.RULE_ACTION_SHOW
            }
            getFieldAction(t) {
                if (0 === t || 0 === t.length) return e.RULE_ACTION_HIDE;
                switch (this.operator) {
                    case e.RULE_OPERATOR_EQUALS:
                        return this.value.includes(t) ? this.action : this.oppositeAction;
                    case e.RULE_OPERATOR_NOTEQUALS:
                        return this.value.includes(t) ? this.oppositeAction : this.action;
                    case e.RULE_OPERATOR_INCLUDES:
                        return Array.isArray(t) || (t = [t]), t.filter(t => this.value.includes(t)).length > 0 ? this.action : this.oppositeAction;
                    case e.RULE_OPERATOR_INCLUDES_ALL:
                        return Array.isArray(t) ? t.filter(t => this.value.includes(t)).length === this.value.length ? this.action : this.oppositeAction : e.RULE_ACTION_NONE
                }
                return e.RULE_ACTION_NONE
            }
        }
    }(window), springSpace.la.ideaform = function(t) {
        this.$form = jQuery("#ideaform"), this.errormsg = t.errormsg;
        var e = this;
        this.$form.on("submit", function(t) {
            t.preventDefault(), e.$form.find("label .error-message").remove(), e.$form.find(".form-group").removeClass("has-error"), e.$form.find(".form-control").attr("aria-invalid", !1);
            var n = e.$form.find("input[name=title]");
            "" == n.val() && e.markError(n, e.errormsg.reqfields);
            var i = e.$form.find("textarea[name=body]");
            "" == i.val() && e.markError(i, e.errormsg.reqfields);
            var r = e.$form.find("input[name=email]");
            if (r.val().trim().match(springSpace.regex.email) || e.markError(r, e.errormsg.emailaddress), e.$form.find(".has-error").length > 0) return errorAlert(), e.$form.find("*[aria-invalid=true]:first").focus(), !1;
            jQuery.ajax({
                url: e.$form.attr("action"),
                method: e.$form.attr("method"),
                data: e.$form.serialize()
            }).done(function() {
                successAlert()
            }).fail(jqAjaxFailCallback).always(function() {
                closeModal()
            })
        }), this.markError = function(t, e) {
            var n = jQuery('<div class="error-message"></div>').html(e);
            t.attr("aria-invalid", !0).parent().addClass("has-error").find("label").append(n)
        }
    }, springSpace.la.ideacommentform = function(t) {
        this.$form = jQuery("#ideacommentform"), this.errormsg = t.errormsg;
        var e = this;
        this.$form.on("submit", function(t) {
            t.preventDefault(), e.$form.find("label .error-message").remove(), e.$form.find(".form-group").removeClass("has-error"), e.$form.find(".form-control").attr("aria-invalid", !1);
            var n = e.$form.find("input[name=email]");
            if (jQuery.trim(n.val()).match(springSpace.regex.email) || e.markError(n, e.errormsg.emailaddress), e.$form.find(".has-error").length > 0) return errorAlert(), e.$form.find("*[aria-invalid=true]:first").focus(), !1;
            jQuery.ajax({
                url: e.$form.attr("action"),
                data: e.$form.serialize(),
                method: e.$form.attr("method")
            }).done(function(t) {
                if (successAlert(), 1 == t.upvote) {
                    var e = jQuery("#product_idea_" + t.idea_id + " .s-la-idea-upvotes"),
                        n = parseInt(e.text(), 10) + 1;
                    e.text(n)
                } else if (1 == t.downvote) {
                    e = jQuery("#product_idea_" + t.idea_id + " .s-la-idea-downvotes"), n = parseInt(e.text(), 10) + 1;
                    e.text(n)
                }
                closeModal()
            }).fail(jqAjaxFailCallback)
        }), this.markError = function(t, e) {
            var n = jQuery('<div class="error-message"></div>').html(e);
            t.attr("aria-invalid", !0).parent().addClass("has-error").find("label").append(n)
        }, this.$form.find(".btn-cancel").on("click", function(t) {
            closeModal()
        })
    };
const faqHit = function(t, e, n) {
        jQuery.ajax({
            method: "POST",
            url: `/faq/${t}/view`,
            data: {
                type: n
            },
            dataType: "json"
        })
    },
    faqVote = function(t, e) {
        t && jQuery.ajax({
            method: "POST",
            url: `/faq/${t}/vote`,
            data: {
                v: e
            },
            dataType: "json"
        }).done(t => {
            if (!t.success) return;
            let e = null;
            1 === t.vote ? (e = jQuery("#s-la-vote-yes-ct"), e.html(parseInt(e.text()) + 1), jQuery("#s-la-vote-yes").addClass("voted")) : 0 === t.vote && (e = jQuery("#s-la-vote-no-ct"), e.html(parseInt(e.text()) + 1), jQuery("s-la-vote-no").addClass("voted")), jQuery("#s-la-vote button").attr("disabled", "true")
        }).fail(jqAjaxFailCallback)
    },
    loadRelatedFAQs = function(t) {
        const e = document.getElementById("s-la-faq-relatedfaqs");
        e && $.ajax({
            method: "GET",
            url: `/faq/${t}/related`,
            dataType: "json"
        }).done(t => {
            t.content && (e.innerHTML = t.content)
        }).fail(() => {})
    },
    fixMediaZindex = function() {
        document.querySelectorAll(".s-la-faq-media-wrapper iframe").forEach(t => {
            const e = t.getAttribute("src"),
                n = "wmode=transparent"; - 1 !== e.indexOf("?") ? t.setAttribute("src", `${e}&${n}`) : t.setAttribute("src", `${e}?${n}`)
        })
    },
    faqVoteButtons = function(t) {
        document.querySelectorAll("#s-la-vote-no, #s-la-vote-yes").forEach(e => {
            e.addEventListener("click", e => {
                e.preventDefault();
                const n = e.currentTarget,
                    i = n.dataset.warn;
                if ("" !== i) return void alert(i);
                const r = parseInt(n.dataset.vote, 10);
                faqVote(t, r)
            })
        })
    },
    setUpAnswerPage = function(t, e, n, i) {
        t <= 0 || (n || faqHit(t, e, 1), i && i !== document.referrer && (window.location.href = i), loadRelatedFAQs(t), fixMediaZindex(), faqVoteButtons(t))
    },
    setUpPublicPage = function() {
        const t = new URL(window.location);
        t.searchParams.has("token") && (t.searchParams.delete("token"), history.replaceState({}, "", t.toString())), document.body.addEventListener("click", t => {
            const e = t.target.tagName;
            if (-1 === ["A", "I", "SPAN", "B", "STRONG"].indexOf(e)) return;
            const n = t.target.closest("a");
            if (!n) return;
            let i = null;
            n.classList.contains("imagepreviewlink") ? (t.preventDefault(), i = new springSpace.sui.modal({
                url: n.getAttribute("href"),
                size: "large"
            })) : n.classList.contains("modallink") && (t.preventDefault(), i = new springSpace.sui.modal({
                url: n.getAttribute("href")
            }))
        })
    },
    getDocHeight = function() {
        return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
    };
! function(t) {
    t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
    const e = class {
        constructor(t) {
            if (new URL(t).origin === window.location.origin) return new Worker(new URL(t), {
                type: "module"
            });
            const e = new Blob([`importScripts(${JSON.stringify(t)})`], {
                    type: "text/javascript"
                }),
                n = URL.createObjectURL(e),
                i = new Worker(n);
            return URL.revokeObjectURL(n), i
        }
    };
    t.springSpace.la.askform = function(n) {
        this.id = n.content_id, this.queue_id = n.queue_id, this.errormsg = n.errormsg, this.divselector = `#s-la-askform-${this.id}`, this.$form = jQuery(`${this.divselector} form`), this.translations = n.translations, this.form_action = n.form_action, this.libauth_enabled = n.libauth_enabled || !1, this.libauth_authed = n.libauth_authed || !1, this.autoReplySettings = new t.springSpace.la.FormAutoReply(n.autoReplySettings || {}), this.captcha_enabled = this.autoReplySettings.isCaptchaEnabled(), this.autoreply_enabled = this.autoReplySettings.isAutoReplyEnabled(), this.captchaDiv = this.$form[0].querySelector(".formlibcpt"), this.confirmEmailDiv = this.$form[0].querySelector(".confem_wrap"), this.autoreply_type = this.autoReplySettings.getAutoReplyType(), this.captcha_enabled && this.captchaDiv.classList.remove("hidden"), Array.isArray(n.rules) ? this.rules = n.rules.map(e => new t.springSpace.la.FormFieldRule(e)) : this.rules = [], this.handleRequiredCheckBoxes = function(t) {
            const e = t.target.name;
            if (!0 === t.target.checked) {
                const t = this.$form[0].querySelectorAll(`input[type=checkbox][name="${e}"]`);
                return void(t.length > 0 && Array.prototype.forEach.call(t, t => {
                    t.removeAttribute("required")
                }, this))
            }
            const n = t.target.closest("fieldset");
            if (null === n) return;
            n.querySelectorAll("input[type=checkbox]:checked").length > 0 || Array.prototype.forEach.call(n.querySelectorAll("input[type=checkbox]"), t => {
                t.setAttribute("required", "")
            }, this)
        }, this.markError = function(t, e) {
            if (!t) return;
            const n = document.createElement("div");
            n.classList.add("error-message"), n.innerHTML = e;
            const i = t.closest("div.form-group");
            if (null === i) return;
            t.setAttribute("aria-invalid", "true"), i.classList.add("has-error");
            const r = i.querySelector("label");
            r && r.appendChild(n)
        }, this.loadCaptcha = function() {
            const t = new URL(this.form_action);
            globalThis.$altcha.algorithms.set("PBKDF2/SHA-256", () => new e(`https://${t.hostname}/altcha-worker.js`));
            const n = document.createElement("altcha-widget");
            n.setAttribute("challenge", `https://${t.hostname}/form/altcha-challenge`), n.setAttribute("name", "altcha"), n.setAttribute("type", "native"), this.captchaDiv.innerHTML = "", this.captchaDiv.appendChild(n), this.captchaDiv.classList.add("active"), this.captchaDiv.classList.remove("hidden"), n.addEventListener("statechange", t => {
                "error" === t.detail?.state && this.loadFallbackCaptcha()
            })
        }, this.loadFallbackCaptcha = function() {
            const t = new URL(this.form_action);
            jQuery.ajax({
                context: this,
                type: "GET",
                url: `https://${t.hostname}/form/captcha-fallback`,
                data: {
                    bs5: 0
                },
                dataType: "json"
            }).done(({
                html: t = ""
            }) => {
                if (!t) return;
                this.captchaDiv.innerHTML = t;
                const e = this.captchaDiv.querySelector(".btn-cptreload");
                e && e.addEventListener("click", this.loadFallbackCaptcha.bind(this)), this.captchaDiv.querySelector('input[type="text"]')?.focus()
            }).fail(() => {
                this.captchaDiv.classList.add("hidden")
            })
        }, this.validateField = function(t) {
            if (!t || t.disabled) return;
            if ("SELECT" === t.tagName) {
                const e = t.options[t.selectedIndex] || null;
                if (!e) return;
                const n = e.value;
                return void("" !== n && "0" !== n || this.markError(t, this.errormsg.reqfields))
            }
            if ("TEXTAREA" === t.tagName) return void("" === t.value.trim() && this.markError(t, this.errormsg.reqfields));
            if ("INPUT" !== t.tagName) return;
            const e = t.type;
            if ("radio" !== e && "checkbox" !== e)
                if ("email" !== e) "" === t.value.trim() && this.markError(t, this.errormsg.reqfields);
                else if (t.checkValidity() || this.markError(t, this.errormsg.emailaddress), "confirm_pemail" === t.name) {
                const e = this.$form[0].querySelector('input[name="pemail"]');
                t.value.trim() !== e.value.trim() && this.markError(t, this.errormsg.emailnotmatch)
            }
        }, this.validateURL = function(t) {
            t.reportValidity() || this.markError(t, t.validationMessage)
        }, this.validateFieldSet = function(t) {
            const e = t.querySelectorAll("input");
            let n = !0;
            if (e.forEach(t => {
                    t.checkValidity() || (n = !1, t.setAttribute("aria-invalid", "true"))
                }), n) return;
            const i = document.createElement("div");
            i.classList.add("error-message"), i.innerHTML = this.errormsg.reqfields, t.classList.add("has-error");
            const r = t.querySelector("legend");
            r && r.appendChild(i)
        }, this.validate = function() {
            if (this.libauth_enabled && !this.libauth_authed) return !1;
            if (this.$form.attr("action", this.form_action), this.$form.find("label .error-message, legend .error-message").remove(), this.$form.find(".form-group").removeClass("has-error"), this.$form.find(".form-control, input[type=radio], input[type=checkbox]").attr("aria-invalid", !1), Array.from(this.$form[0].querySelectorAll('[required]:not([type="url"])')).forEach(t => {
                    this.validateField(t)
                }), this.$form[0].querySelectorAll("input[type=url]").forEach(t => {
                    this.validateURL(t)
                }), Array.from(this.$form[0].querySelectorAll("fieldset[data-required]")).forEach(t => {
                    this.validateFieldSet(t)
                }), this.$form.find(".has-error").length > 0) return this.$form.find("*[aria-invalid=true]:first").trigger("focus"), !1;
            let e = 0;
            return t.springSpace.queryAnalyzer ? e = t.springSpace.queryAnalyzer.qlog_id || 0 : t.springSpace.la.Page && t.springSpace.la.Page.qlog_id && (e = t.springSpace.la.Page.qlog_id), e > 0 && this.$form.find("input[name=qlog]").val(e), t.suiNotify.working(), !0
        }, this.createDismissableAlert = function(t, e) {
            const n = document.createElement("div");
            n.classList.add("alert", `alert-${e}`, "alert-dismissable"), n.setAttribute("role", "alert"), n.setAttribute("aria-atomic", "true");
            const i = document.createElement("button");
            return i.type = "button", i.classList.add("close"), i.setAttribute("aria-label", "close"), i.innerHTML = '<span aria-hidden="true">&times;</span>', n.appendChild(i), n.insertAdjacentHTML("beforeend", t), i.addEventListener("click", t => {
                t.preventDefault(), n.remove()
            }), n
        }, this.resetRules = function() {
            this.rules.forEach(t => {
                this.$form[0].querySelectorAll(`*[name="${t.field1}"], *[name="${t.field1}[]"]`).forEach(t => {
                    t.dispatchEvent(new Event("change"))
                })
            })
        }, this.questionform = new t.springSpace.sui.filedrop({
            selector: `${this.divselector} form`,
            max_files: 5,
            max_upload_size: 20971520,
            max_file_size: 20971520,
            batch_files: !1,
            autoupload: !1,
            supportie9: !1,
            translations: this.translations,
            callback: e => {
                t.suiNotify.hide();
                const n = this.createDismissableAlert(e.message, "success");
                this.$form[0].querySelector("#s-la-askform-buttons").insertAdjacentElement("beforebegin", n), this.questionform.reset(), this.resetRules(), this.captcha_enabled && this.loadCaptcha(), this.autoreply_enabled && this.confirmEmailDiv && (this.confirmEmailDiv.querySelector('input[type="checkbox"]').disabled = !0, this.confirmEmailDiv.classList.add("hidden"))
            },
            error_callback: e => {
                let n = "Error";
                const i = 449 === e.status;
                if (e.responseText) try {
                    const t = JSON.parse(e.responseText);
                    t.error && (n = t.error)
                } catch {
                    n = "Invalid response received"
                }
                t.suiNotify.hide();
                const r = this.createDismissableAlert(n, "danger");
                let a = null,
                    o = "beforebegin";
                i && (a = this.$form[0].querySelector(".formlibcpt"), a && (o = "afterbegin")), a || (a = this.$form[0].querySelector("#s-la-askform-buttons")), a.insertAdjacentElement(o, r)
            },
            validate: this.validate.bind(this)
        }), this.showField = function(t) {
            t.classList.remove("hidden"), t.querySelectorAll("select, input, textarea").forEach(t => {
                t.disabled = !1
            })
        }, this.hideField = function(t) {
            t.classList.add("hidden"), t.querySelectorAll("select, input, textarea").forEach(t => {
                ["checkbox", "radio"].includes(t.type) ? t.checked = !1 : t.value = "", t.dispatchEvent(new Event("change")), t.disabled = !0
            })
        }, this.getMultiCheckValue = function(t) {
            const e = new FormData(this.$form[0]);
            return Array.from(e.getAll(t)).map(t => Number(t))
        }, this.getRadioValue = function(t) {
            const e = new FormData(this.$form[0]);
            return Number(e.get(t))
        }, this.setUpRules = function() {
            this.rules.forEach(t => {
                this.$form[0].querySelectorAll(`*[name="${t.field1}"], *[name="${t.field1}[]"]`).forEach(e => {
                    const n = this.$form[0].querySelector(`.${t.field2}_wrap`);
                    n && e.addEventListener("change", e => {
                        let i = Number(e.target.value);
                        "checkbox" === e.target.type ? i = this.getMultiCheckValue(e.target.name) : "radio" === e.target.type && (i = this.getRadioValue(e.target.name));
                        const r = t.getFieldAction(i);
                        0 === r ? this.showField(n) : 1 === r && this.hideField(n)
                    })
                })
            })
        }, this.setUp = function() {
            if (this.libauth_enabled && !this.libauth_authed) {
                if (this.questionform.$form[0].querySelectorAll("input,select,button,textarea").forEach(t => {
                        t.disabled = !0
                    }), this.questionform.$form[0].querySelectorAll('[tabindex="0"],a').forEach(t => {
                        t.setAttribute("tabindex", "-1")
                    }), this.questionform.$form[0].setAttribute("aria-hidden", "true"), window !== window.top) {
                    const t = document.querySelector(`${this.divselector} .btn-libauth`);
                    t && t.setAttribute("target", "_blank")
                }
                return
            }
            this.setUpRules();
            const t = this.questionform.$form[0].querySelectorAll("input[type=checkbox][required]");
            if (t.length > 0 && Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener("change", this.handleRequiredCheckBoxes.bind(this))
                }, this), this.captcha_enabled && this.loadCaptcha(), this.autoreply_enabled && this.confirmEmailDiv && (this.confirmEmailDiv.querySelector('input[type="checkbox"]').disabled = !0, this.confirmEmailDiv.classList.add("hidden")), !this.captcha_enabled && this.confirmEmailDiv) {
                const t = this.confirmEmailDiv.querySelector('input[type="checkbox"]');
                t && t.addEventListener("change", () => {
                    t.checked && !this.captcha_enabled && (this.captcha_enabled = !0, this.loadCaptcha())
                })
            }
        }, this.setUp()
    }
}(window);
class QueryLog {
    constructor({
        qlog_id: t = 0,
        group_id: e = 0,
        query: n = ""
    }) {
        this.qlog_id = t, this.group_id = e, this.first_search_saved = this.qlog_id > 0, this.query = n
    }
    record({
        query: t = "",
        refer: e = ""
    }) {
        this.first_search_saved && (this.first_search_saved = !1, this.query === t) || t && this.query !== t && (e || (e = location.href), jQuery.ajax({
            method: "POST",
            url: "/search/log",
            data: {
                qlog: this.qlog_id,
                refer: e,
                group_id: this.group_id,
                query: t
            },
            dataType: "json"
        }).done(t => {
            t.qlog_id && (this.qlog_id = t.qlog_id)
        }))
    }
    gotoFAQ({
        faqid: t = 0
    }) {
        t <= 0 || jQuery.ajax({
            method: "POST",
            url: "/search/log/clicked",
            data: {
                faqid: t,
                qlog: this.qlog_id
            }
        })
    }
}! function(t) {
    var e = t.springSpace.sui.initAutocomplete,
        n = {
            id: 0,
            iid: 0,
            apiDomain: "",
            groupId: 0,
            form: null,
            limit: 10,
            autocomplete: null,
            autcompleteDataFormatCb: function(t) {
                var e = [];
                return t.results.forEach(function(t) {
                    t.label = t.question, e.push(t)
                }), e
            },
            autocompleteSelectCb: function(t) {
                let e = this.form.querySelector("input[name=originalq]");
                null === e && (e = document.createElement("input"), e.setAttribute("type", "hidden"), e.setAttribute("name", "originalq"), this.form.insertBefore(e, this.form.firstChild));
                const n = this.form.querySelector("#s-la-content-search-query-" + this.id);
                e.value = n.dataset.oldvalue || "";
                var i = this.form.querySelector("input[name=faqid]");
                null === i && ((i = document.createElement("input")).setAttribute("type", "hidden"), i.setAttribute("name", "faqid"), this.form.insertBefore(i, this.form.firstChild)), i.value = t.getAttribute("data-faqid"), this.form.submit()
            },
            enableAutocomplete: function() {
                try {
                    this.autocomplete = e({
                        inputSelector: "#s-la-content-search-query-" + this.id,
                        queryUrl: "https://" + this.apiDomain + "/faq/searchpublic",
                        dataProcessor: this.autcompleteDataFormatCb.bind(this),
                        selectCallback: this.autocompleteSelectCb.bind(this),
                        queryData: {
                            rows: this.limit,
                            iid: this.iid,
                            group_ids: this.groupId
                        }
                    })
                } catch (t) {
                    console.log(t.message)
                }
            },
            init: function(t) {
                this.id = t.contentId, this.iid = t.iid, this.apiDomain = t.apiDomain, this.groupId = JSON.stringify(t.groupId), this.form = document.querySelector("#s-la-content-search-" + this.id + " form"), this.limit = t.limit ? t.limit : 10, this.enableAutocomplete()
            }
        };
    t.springSpace = this.springSpace || {}, t.springSpace.la = this.springSpace.la || {}, t.springSpace.la.initFaqSearchForm = function(t) {
        var e = Object.create(n);
        return e.init(t), e
    }
}(this), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return t < 10 ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var n, i, r, a, o, s = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (a = l.length, n = 0; n < a; n += 1) o[n] = str(n, l) || "null";
                        return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]", gap = s, r
                    }
                    if (rep && "object" == typeof rep)
                        for (a = rep.length, n = 0; n < a; n += 1) "string" == typeof rep[n] && ((r = str(i = rep[n], l)) && o.push(quote(i) + (gap ? ": " : ":") + r));
                    else
                        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && ((r = str(i, l)) && o.push(quote(i) + (gap ? ": " : ":") + r));
                    return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}", gap = s, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; i < n; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
                "": t
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var n, i, r = t[e];
                if (r && "object" == typeof r)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (void 0 !== (i = walk(r, n)) ? r[n] = i : delete r[n]);
                return reviver.call(t, e, r)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(t, e) {
        "use strict";
        var n = t.History = t.History || {},
            i = t.jQuery;
        if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(t, e, n) {
                i(t).bind(e, n)
            },
            trigger: function(t, e, n) {
                i(t).trigger(e, n)
            },
            extractEventData: function(t, e, n) {
                return e && e.originalEvent && e.originalEvent[t] || n && n[t] || void 0
            },
            onDomLoad: function(t) {
                i(t)
            }
        }, void 0 !== n.init && n.init()
    }(window),
    function(t, e) {
        "use strict";
        var n = t.document,
            i = t.setTimeout || i,
            r = t.clearTimeout || r,
            a = t.setInterval || a,
            o = t.History = t.History || {};
        if (void 0 !== o.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        o.initHtml4 = function() {
            if (void 0 !== o.initHtml4.initialized) return !1;
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(t) {
                return t === o.getHashByIndex()
            }, o.isHashEqual = function(t, e) {
                return (t = encodeURIComponent(t).replace(/%25/g, "%")) === (e = encodeURIComponent(e).replace(/%25/g, "%"))
            }, o.saveHash = function(t) {
                return !o.isLastHash(t) && (o.savedHashes.push(t), !0)
            }, o.getHashByIndex = function(t) {
                return void 0 === t ? o.savedHashes[o.savedHashes.length - 1] : t < 0 ? o.savedHashes[o.savedHashes.length + t] : o.savedHashes[t]
            }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(t, e, n) {
                var i, r = o.getHashByState(t);
                return i = {
                    discardedState: t,
                    backState: n,
                    forwardState: e
                }, o.discardedStates[r] = i, !0
            }, o.discardHash = function(t, e, n) {
                var i = {
                    discardedHash: t,
                    backState: n,
                    forwardState: e
                };
                return o.discardedHashes[t] = i, !0
            }, o.discardedState = function(t) {
                var e = o.getHashByState(t);
                return o.discardedStates[e] || !1
            }, o.discardedHash = function(t) {
                return o.discardedHashes[t] || !1
            }, o.recycleState = function(t) {
                var e = o.getHashByState(t);
                return o.discardedState(t) && delete o.discardedStates[e], !0
            }, o.emulated.hashChange && (o.hashChangeInit = function() {
                o.checkerFunction = null;
                var e, i, r, s = "",
                    l = Boolean(o.getHash());
                return o.isInternetExplorer() ? ((e = n.createElement("iframe")).setAttribute("id", "historyjs-iframe"), e.setAttribute("src", "#"), e.style.display = "none", n.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), i = "", r = !1, o.checkerFunction = function() {
                    if (r) return !1;
                    r = !0;
                    var n = o.getHash(),
                        a = o.getHash(e.contentWindow.document);
                    return n !== s ? (s = n, a !== n && (i = a = n, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(t, "hashchange")) : a !== i && (i = a, l && "" === a ? o.back() : o.setHash(a, !1)), r = !1, !0
                }) : o.checkerFunction = function() {
                    var e = o.getHash() || "";
                    return e !== s && (s = e, o.Adapter.trigger(t, "hashchange")), !0
                }, o.intervalList.push(a(o.checkerFunction, o.options.hashChangeInterval)), !0
            }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(e) {
                var n, i = e && e.newURL || o.getLocationHref(),
                    r = o.getHashByUrl(i),
                    a = null;
                return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(t, "anchorchange"), o.busy(!1), !1) : (a = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(a) ? (o.busy(!1), !1) : (o.getHashByState(a), (n = o.discardedState(a)) ? (o.getHashByIndex(-2) === o.getHashByState(n.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(a.data, a.title, encodeURI(a.url), !1), !0))))
            }, o.Adapter.bind(t, "hashchange", o.onHashChange), o.pushState = function(e, n, i, r) {
                if (i = encodeURI(i).replace(/%25/g, "%"), o.getHashByUrl(i)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== r && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.pushState,
                    args: arguments,
                    queue: r
                }), !1;
                o.busy(!0);
                var a = o.createStateObject(e, n, i),
                    s = o.getHashByState(a),
                    l = o.getState(!1),
                    c = o.getHashByState(l),
                    u = o.getHash(),
                    d = o.expectedStateId == a.id;
                return o.storeState(a), o.expectedStateId = a.id, o.recycleState(a), o.setTitle(a), s === c ? (o.busy(!1), !1) : (o.saveState(a), d || o.Adapter.trigger(t, "statechange"), !o.isHashEqual(s, u) && !o.isHashEqual(s, o.getShortUrl(o.getLocationHref())) && o.setHash(s, !1), o.busy(!1), !0)
            }, o.replaceState = function(e, n, i, r) {
                if (i = encodeURI(i).replace(/%25/g, "%"), o.getHashByUrl(i)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== r && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.replaceState,
                    args: arguments,
                    queue: r
                }), !1;
                o.busy(!0);
                var a = o.createStateObject(e, n, i),
                    s = o.getHashByState(a),
                    l = o.getState(!1),
                    c = o.getHashByState(l),
                    u = o.getStateByIndex(-2);
                return o.discardState(l, a, u), s === c ? (o.storeState(a), o.expectedStateId = a.id, o.recycleState(a), o.setTitle(a), o.saveState(a), o.Adapter.trigger(t, "statechange"), o.busy(!1)) : o.pushState(a.data, a.title, a.url, !1), !0
            }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
                o.Adapter.trigger(t, "hashchange")
            })
        }, void 0 !== o.init && o.init()
    }(window),
    function(t, e) {
        "use strict";
        var n = t.console || e,
            i = t.document,
            r = t.navigator,
            a = t.sessionStorage || !1,
            o = t.setTimeout,
            s = t.clearTimeout,
            l = t.setInterval,
            c = t.clearInterval,
            u = t.JSON,
            d = t.alert,
            h = t.History = t.History || {},
            f = t.history;
        try {
            a.setItem("TEST", "1"), a.removeItem("TEST")
        } catch (t) {
            a = !1
        }
        if (u.stringify = u.stringify || u.encode, u.parse = u.parse || u.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
        h.init = function(t) {
            return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
        }, h.initCore = function(p) {
            if (void 0 !== h.initCore.initialized) return !1;
            if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || i.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                    var t, e = h.intervalList;
                    if (null != e) {
                        for (t = 0; t < e.length; t++) c(e[t]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    h.options.debug && h.log.apply(h, arguments)
                }, h.log = function() {
                    var t, e, r, a, o, s = void 0 !== n && void 0 !== n.log && void 0 !== n.log.apply,
                        l = i.getElementById("log");
                    for (s ? (t = (a = Array.prototype.slice.call(arguments)).shift(), void 0 !== n.debug ? n.debug.apply(n, [t, a]) : n.log.apply(n, [t, a])) : t = "\n" + arguments[0] + "\n", e = 1, r = arguments.length; e < r; ++e) {
                        if ("object" == typeof(o = arguments[e]) && void 0 !== u) try {
                            o = u.stringify(o)
                        } catch (t) {}
                        t += "\n" + o + "\n"
                    }
                    return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : s || d(t), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    var t = h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                        for (var t = 3, e = i.createElement("div"), n = e.getElementsByTagName("i");
                            (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && n[0];);
                        return t > 4 && t
                    }();
                    return t
                }, h.isInternetExplorer = function() {
                    return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
                }, h.options.html4Mode ? h.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : h.emulated = {
                    pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                    hashChange: Boolean(!("onhashchange" in t || "onhashchange" in i) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                    safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                }, h.isEmptyObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }, h.cloneObject = function(t) {
                    var e, n;
                    return t ? (e = u.stringify(t), n = u.parse(e)) : n = {}, n
                }, h.getRootUrl = function() {
                    var t = i.location.protocol + "//" + (i.location.hostname || i.location.host);
                    return i.location.port && (t += ":" + i.location.port), t += "/"
                }, h.getBaseHref = function() {
                    var t = i.getElementsByTagName("base"),
                        e = "";
                    return 1 === t.length && (e = t[0].href.replace(/[^\/]+$/, "")), (e = e.replace(/\/+$/, "")) && (e += "/"), e
                }, h.getBaseUrl = function() {
                    return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
                }, h.getPageUrl = function() {
                    var t;
                    return t = ((h.getState(!1, !1) || {}).url || h.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, n) {
                        return /\./.test(t) ? t : t + "/"
                    }), t
                }, h.getBasePageUrl = function() {
                    return h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, n) {
                        return /[^\/]$/.test(t) ? "" : t
                    }).replace(/\/+$/, "") + "/"
                }, h.getFullUrl = function(t, e) {
                    var n = t,
                        i = t.substring(0, 1);
                    return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (n = "/" === i ? h.getRootUrl() + t.replace(/^\/+/, "") : "#" === i ? h.getPageUrl().replace(/#.*/, "") + t : "?" === i ? h.getPageUrl().replace(/[\?#].*/, "") + t : e ? h.getBaseUrl() + t.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, h.getShortUrl = function(t) {
                    var e = t,
                        n = h.getBaseUrl(),
                        i = h.getRootUrl();
                    return h.emulated.pushState && (e = e.replace(n, "")), e = e.replace(i, "/"), h.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, h.getLocationHref = function(t) {
                    return (t = t || i).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash || -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var n = h.getLastSavedState();
                    return !n && e && (n = h.createStateObject()), t && ((n = h.cloneObject(n)).url = n.cleanUrl || n.url), n
                }, h.getIdByState = function(t) {
                    var e, n = h.extractId(t.url);
                    if (!n)
                        if (e = h.getStateString(t), void 0 !== h.stateToId[e]) n = h.stateToId[e];
                        else if (void 0 !== h.store.stateToId[e]) n = h.store.stateToId[e];
                    else {
                        for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== h.idToState[n] || void 0 !== h.store.idToState[n];);
                        h.stateToId[e] = n, h.idToState[n] = t
                    }
                    return n
                }, h.normalizeState = function(t) {
                    var e, n;
                    return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = {}).normalized = !0, e.title = t.title || "", e.url = h.getFullUrl(t.url ? t.url : h.getLocationHref()), e.hash = h.getShortUrl(e.url), e.data = h.cloneObject(t.data), e.id = h.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, n = !h.isEmptyObject(e.data), (e.title || n) && !0 !== h.options.disableSuid && (e.hash = h.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = h.getFullUrl(e.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                }, h.createStateObject = function(t, e, n) {
                    var i = {
                        data: t,
                        title: e,
                        url: n
                    };
                    return i = h.normalizeState(i)
                }, h.getStateById = function(t) {
                    return t = String(t), h.idToState[t] || h.store.idToState[t] || e
                }, h.getStateString = function(t) {
                    var e;
                    return e = {
                        data: h.normalizeState(t).data,
                        title: t.title,
                        url: t.url
                    }, u.stringify(e)
                }, h.getStateId = function(t) {
                    return h.normalizeState(t).id
                }, h.getHashByState = function(t) {
                    return h.normalizeState(t).hash
                }, h.extractId = function(t) {
                    var e, n;
                    return n = -1 != t.indexOf("#") ? t.split("#")[0] : t, (e = /(.*)\&_suid=([0-9]+)$/.exec(n)) && e[1] || t, (e ? String(e[2] || "") : "") || !1
                }, h.isTraditionalAnchor = function(t) {
                    return !/[\/\?\.]/.test(t)
                }, h.extractState = function(t, e) {
                    var n, i, r = null;
                    return e = e || !1, (n = h.extractId(t)) && (r = h.getStateById(n)), r || (i = h.getFullUrl(t), (n = h.getIdByUrl(i) || !1) && (r = h.getStateById(n)), !r && e && !h.isTraditionalAnchor(t) && (r = h.createStateObject(null, null, i))), r
                }, h.getIdByUrl = function(t) {
                    return h.urlToId[t] || h.store.urlToId[t] || e
                }, h.getLastSavedState = function() {
                    return h.savedStates[h.savedStates.length - 1] || e
                }, h.getLastStoredState = function() {
                    return h.storedStates[h.storedStates.length - 1] || e
                }, h.hasUrlDuplicate = function(t) {
                    var e;
                    return (e = h.extractState(t.url)) && e.id !== t.id
                }, h.storeState = function(t) {
                    return h.urlToId[t.url] = t.id, h.storedStates.push(h.cloneObject(t)), t
                }, h.isLastSavedState = function(t) {
                    var e = !1;
                    return h.savedStates.length && (e = t.id === h.getLastSavedState().id), e
                }, h.saveState = function(t) {
                    return !h.isLastSavedState(t) && (h.savedStates.push(h.cloneObject(t)), !0)
                }, h.getStateByIndex = function(t) {
                    return void 0 === t ? h.savedStates[h.savedStates.length - 1] : t < 0 ? h.savedStates[h.savedStates.length + t] : h.savedStates[t]
                }, h.getCurrentIndex = function() {
                    return h.savedStates.length < 1 ? 0 : h.savedStates.length - 1
                }, h.getHash = function(t) {
                    var e = h.getLocationHref(t);
                    return h.getHashByUrl(e)
                }, h.unescapeHash = function(t) {
                    var e = h.normalizeHash(t);
                    return e = decodeURIComponent(e)
                }, h.normalizeHash = function(t) {
                    return t.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, h.setHash = function(t, e) {
                    var n, r;
                    return !1 !== e && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), (n = h.extractState(t, !0)) && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== t && (h.bugs.setHash ? (r = h.getPageUrl(), h.pushState(null, null, r + "#" + t, !1)) : i.location.hash = t), h)
                }, h.escapeHash = function(e) {
                    var n = h.normalizeHash(e);
                    return n = t.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, h.getHashByUrl = function(t) {
                    var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return e = h.unescapeHash(e)
                }, h.setTitle = function(t) {
                    var e, n = t.title;
                    n || (e = h.getStateByIndex(0)) && e.url === t.url && (n = e.title || h.options.initialTitle);
                    try {
                        i.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (t) {}
                    return i.title = n, h
                }, h.queues = [], h.busy = function(t) {
                    if (void 0 !== t ? h.busy.flag = t : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                        s(h.busy.timeout);
                        var e = function() {
                            var t, n, i;
                            if (!h.busy.flag)
                                for (t = h.queues.length - 1; t >= 0; --t) 0 !== (n = h.queues[t]).length && (i = n.shift(), h.fireQueueItem(i), h.busy.timeout = o(e, h.options.busyDelay))
                        };
                        h.busy.timeout = o(e, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function(t) {
                    return t.callback.apply(t.scope || h, t.args || [])
                }, h.pushQueue = function(t) {
                    return h.queues[t.queue || 0] = h.queues[t.queue || 0] || [], h.queues[t.queue || 0].push(t), h
                }, h.queue = function(t, e) {
                    return "function" == typeof t && (t = {
                        callback: t
                    }), void 0 !== e && (t.queue = e), h.busy() ? h.pushQueue(t) : h.fireQueueItem(t), h
                }, h.clearQueue = function() {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function() {
                    return h.doubleChecker && (s(h.doubleChecker), h.doubleChecker = !1), h
                }, h.doubleCheck = function(t) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                        return h.doubleCheckClear(), h.stateChanged || t(), !0
                    }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var e = h.extractState(h.getLocationHref());
                    if (!h.isLastSavedState(e)) return e || h.createStateObject(), h.Adapter.trigger(t, "popstate"), h
                }, h.back = function(t) {
                    return !1 !== t && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.back(!1)
                    }), f.go(-1), !0)
                }, h.forward = function(t) {
                    return !1 !== t && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.forward(!1)
                    }), f.go(1), !0)
                }, h.go = function(t, e) {
                    var n;
                    if (t > 0)
                        for (n = 1; n <= t; ++n) h.forward(e);
                    else {
                        if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; n >= t; --n) h.back(e)
                    }
                    return h
                }, h.emulated.pushState) {
                var g = function() {};
                h.pushState = h.pushState || g, h.replaceState = h.replaceState || g
            } else h.onPopState = function(e, n) {
                var i, r, a = !1,
                    o = !1;
                return h.doubleCheckComplete(), (i = h.getHash()) ? ((r = h.extractState(i || h.getLocationHref(), !0)) ? h.replaceState(r.data, r.title, r.url, !1) : (h.Adapter.trigger(t, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : ((o = (a = h.Adapter.extractEventData("state", e, n) || !1) ? h.getStateById(a) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref())) || (o = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(o) ? (h.busy(!1), !1) : (h.storeState(o), h.saveState(o), h.setTitle(o), h.Adapter.trigger(t, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(t, "popstate", h.onPopState), h.pushState = function(e, n, i, r) {
                if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== r && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: r
                }), !1;
                h.busy(!0);
                var a = h.createStateObject(e, n, i);
                return h.isLastSavedState(a) ? h.busy(!1) : (h.storeState(a), h.expectedStateId = a.id, f.pushState(a.id, a.title, a.url), h.Adapter.trigger(t, "popstate")), !0
            }, h.replaceState = function(e, n, i, r) {
                if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== r && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: r
                }), !1;
                h.busy(!0);
                var a = h.createStateObject(e, n, i);
                return h.isLastSavedState(a) ? h.busy(!1) : (h.storeState(a), h.expectedStateId = a.id, f.replaceState(a.id, a.title, a.url), h.Adapter.trigger(t, "popstate")), !0
            };
            if (a) {
                try {
                    h.store = u.parse(a.getItem("History.store")) || {}
                } catch (t) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(t, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), a && (h.onUnload = function() {
                var t, e, n;
                try {
                    t = u.parse(a.getItem("History.store")) || {}
                } catch (e) {
                    t = {}
                }
                for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
                for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
                for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
                h.store = t, h.normalizeStore(), n = u.stringify(t);
                try {
                    a.setItem("History.store", n)
                } catch (t) {
                    if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                    a.length && (a.removeItem("History.store"), a.setItem("History.store", n))
                }
            }, h.intervalList.push(l(h.onUnload, h.options.storeInterval)), h.Adapter.bind(t, "beforeunload", h.onUnload), h.Adapter.bind(t, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (h.Adapter.bind(t, "hashchange", function() {
                h.Adapter.trigger(t, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function() {
                h.Adapter.trigger(t, "hashchange")
            })))
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window);
var springSpace = springSpace || {};

function accessibleIcons(t, e) {
    void 0 === e && (e = {}), void 0 !== t && (e.parent = t), springSpace.sui.icontip(e)
}
springSpace.sui = springSpace.sui || {}, springSpace.sui.icontip = function(t) {
    if (void 0 === t && (t = {}), t.parent) e = $(t.parent);
    else var e = $("body");
    t.placement = t.placement ? t.placement : "top", e.find(".fa + .icon-label").each(function(e, n) {
        var i = $(n),
            r = i.html();
        if ("" !== r) {
            if (0 == (a = i.parent("button, a")).length) var a = i.prev(".fa");
            if (1 == a.length) {
                if (a.data && a.data("bs.tooltip")) return;
                a.tooltip({
                    title: r,
                    html: !0,
                    placement: t.placement
                })
            }
        }
    })
}, jQuery(document).ready(function() {
    var t, e = "[data-toggle=dropdown]";
    $(e).parent().find("ul").attr("role", "menu").find("li").attr("role", "presentation").find("a").attr({
        role: "menuitem",
        tabIndex: "-1"
    }), $(e).attr({
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }), $(e).parent().on("shown.bs.dropdown", function(n) {
        (t = $(this)).find(e).attr("aria-expanded", "true"), t.children("ul").attr("aria-hidden", !1)
    }), $(e).parent().on("hidden.bs.dropdown", function(n) {
        (t = $(this)).find(e).attr("aria-expanded", "false"), t.children("ul").attr("aria-hidden", !0)
    }), $.fn.dropdown.Constructor.prototype.keydown = function(t) {
        /(32)/.test(t.keyCode) && ($(this).parent(), $(this).trigger("click"), t.preventDefault() && t.stopPropagation())
    }, $(document).on("focusout.dropdown.data-api", ".dropdown-menu", function(t) {
        var e = $(this),
            n = this;
        e.hasClass("multiselect-container") || setTimeout(function() {
            $.contains(n, document.activeElement) || (e.parent().removeClass("open"), e.parent().find("[data-toggle=dropdown]").attr("aria-expanded", "false"))
        }, 150)
    }).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", $.fn.dropdown.Constructor.prototype.keydown);
    var n = $(".nav-tabs"),
        i = n.children("li"),
        r = n.find('[data-toggle="tab"], [data-toggle="pill"]');
    r.length > 0 && (n.attr("role", "tablist"), i.attr("role", "presentation"), r.attr("role", "tab")), r.each(function(t) {
        var e = $(this).attr("href"),
            n = "#" === e ? null : $(e),
            i = $(this),
            r = i.attr("id") || ("ui-tab" || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1);
        i.attr("id", r), i.parent().hasClass("active") ? (i.attr({
            tabIndex: "0",
            "aria-selected": "true",
            "aria-controls": i.attr("href").substring(1)
        }), null !== n && n.attr({
            role: "tabpanel",
            tabIndex: "0",
            "aria-hidden": "false",
            "aria-labelledby": r
        })) : (i.attr({
            tabIndex: "-1",
            "aria-selected": "false",
            "aria-controls": i.attr("href").substring(1)
        }), null !== n && n.attr({
            role: "tabpanel",
            tabIndex: "-1",
            "aria-hidden": "true",
            "aria-labelledby": r
        }))
    }), $.fn.tab.Constructor.prototype.keydown = function(t) {
        var e, n, i = $(this),
            r = i.closest("ul[role=tablist] "),
            a = t.which || t.keyCode;
        if (i = $(this), /(37|38|39|40)/.test(a)) {
            n = (e = r.find("[role=tab]:visible")).index(e.filter(":focus")), 38 != a && 37 != a || n--, 39 != a && 40 != a || n++, n < 0 && (n = e.length - 1), n == e.length && (n = 0);
            var o = e.eq(n);
            "tab" === o.attr("role") && o.tab("show").focus(), t.preventDefault(), t.stopPropagation()
        }
    }, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
    var a = $.fn.tab.Constructor.prototype.activate;
    if ($.fn.tab.Constructor.prototype.activate = function(t, e, n) {
            var i = e.find("> .active");
            i.find("[data-toggle=tab]").attr({
                tabIndex: "-1",
                "aria-selected": !1
            }), i.filter(".tab-pane").attr({
                "aria-hidden": !0,
                tabIndex: "-1"
            }), a.apply(this, arguments), t.addClass("active"), t.find("[data-toggle=tab]").attr({
                tabIndex: "0",
                "aria-selected": !0
            }), t.filter(".tab-pane").attr({
                "aria-hidden": !1,
                tabIndex: "0"
            })
        }, springSpace.sui.icontip(), document.location.hash) {
        var o = document.location.hash;
        try {
            $(o).attr("tabindex", -1).on("blur focusout", function() {
                $(this).removeAttr("tabindex")
            }).focus()
        } catch (t) {}
    }
    $(window).bind("hashchange", function() {
        var t = "#" + window.location.hash.replace(/^#/, "");
        "#" != t ? $(t).attr("tabindex", -1).on("blur focusout", function() {
            $(this).removeAttr("tabindex")
        }).focus() : $("body").attr("tabindex", -1).on("blur focusout", function() {
            $(this).removeAttr("tabindex")
        }).focus()
    }), $.fn.modal.Constructor.prototype.enforceFocus = function() {
        modal_this = this, $(document).off("focusin.bs.modal").on("focusin.bs.modal", function(t) {
            modal_this.$element[0] === t.target || modal_this.$element.has(t.target).length || $(t.target).closest(".cke_dialog, .cke").length || modal_this.$element.focus()
        })
    }
}); //# sourceMappingURL=maps/LibAnswers_public.min.js.map