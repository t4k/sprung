/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
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
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            s = this;
        t(this).one("bsTransitionEnd", (function() {
            i = !0
        }));
        return setTimeout((function() {
            i || t(s).trigger(t.support.transition.end)
        }), e), this
    }, t((function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.4.1", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        var s = t(this),
            a = s.attr("data-target");
        a || (a = (a = s.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, "")), a = "#" === a ? [] : a;
        var n = t(document).find(a);

        function r() {
            n.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(), n.length || (n = s.closest(".alert")), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r())
    };
    var s = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.alert");
            a || s.data("bs.alert", a = new i(this)), "string" == typeof e && a[e].call(s)
        }))
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, s) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, s), this.isLoading = !1
    };

    function i(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.button"),
                n = "object" == typeof i && i;
            a || s.data("bs.button", a = new e(this, n)), "toggle" == i ? a.toggle() : i && a.setState(i)
        }))
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(e) {
        var i = "disabled",
            s = this.$element,
            a = s.is("input") ? "val" : "html",
            n = s.data();
        e += "Text", null == n.resetText && s.data("resetText", s[a]()), setTimeout(t.proxy((function() {
            s[a](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i).prop(i, !1))
        }), this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = i, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        var s = t(e.target).closest(".btn");
        i.call(s, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), s.is("input,button") ? s.trigger("focus") : s.find("input:visible,button:visible").first().trigger("focus"))
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };

    function i(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.carousel"),
                n = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i),
                r = "string" == typeof i ? i : n.slide;
            a || s.data("bs.carousel", a = new e(this, n)), "number" == typeof i ? a.to(i) : r ? a[r]() : n.interval && a.pause().cycle()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, e.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var s = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(s)
    }, e.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
            e.to(t)
        })) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, e.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, e.prototype.slide = function(i, s) {
        var a = this.$element.find(".item.active"),
            n = s || this.getItemForDirection(i, a),
            r = this.interval,
            o = "next" == i ? "left" : "right",
            l = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var c = n[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: o
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(n)]);
                u && u.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: o
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(i), "object" == typeof n && n.length && n[0].offsetWidth, a.addClass(o), n.addClass(o), a.one("bsTransitionEnd", (function() {
                n.removeClass([i, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout((function() {
                    l.$element.trigger(h)
                }), 0)
            })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (a.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = i, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this
    };
    var a = function(e) {
        var s = t(this),
            a = s.attr("href");
        a && (a = a.replace(/.*(?=#[^\s]+$)/, ""));
        var n = s.attr("data-target") || a,
            r = t(document).find(n);
        if (r.hasClass("carousel")) {
            var o = t.extend({}, r.data(), s.data()),
                l = s.attr("data-slide-to");
            l && (o.interval = !1), i.call(r, o), l && r.data("bs.carousel").to(l), e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", (function() {
        t('[data-ride="carousel"]').each((function() {
            var e = t(this);
            i.call(e, e.data())
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, s) {
        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, s), this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function i(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(s)
    }

    function s(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.collapse"),
                n = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i);
            !a && n.toggle && /show|hide/.test(i) && (n.toggle = !1), a || s.data("bs.collapse", a = new e(this, n)), "string" == typeof i && a[i]()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var i, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (i = a.data("bs.collapse")) && i.transitioning)) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    a && a.length && (s.call(a, "hide"), i || a.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return o.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var i = t.Event("hide.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                var s = this.dimension();
                this.$element[s](this.$element[s]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return a.call(this);
                this.$element[s](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, e.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, s) {
            var a = t(s);
            this.addAriaAndCollapsedClass(i(a), a)
        }), this)).end()
    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var a = t.fn.collapse;
    t.fn.collapse = s, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = a, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
        var a = t(this);
        a.attr("data-target") || e.preventDefault();
        var n = i(a),
            r = n.data("bs.collapse") ? "toggle" : a.data();
        s.call(n, r)
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]',
        i = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

    function s(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = "#" !== i ? t(document).find(i) : null;
        return s && s.length ? s : e.parent()
    }

    function a(i) {
        i && 3 === i.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
            var e = t(this),
                a = s(e),
                n = {
                    relatedTarget: this
                };
            a.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(a[0], i.target) || (a.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", n)))))
        })))
    }
    i.VERSION = "3.4.1", i.prototype.toggle = function(e) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var n = s(i),
                r = n.hasClass("open");
            if (a(), !r) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", a);
                var o = {
                    relatedTarget: this
                };
                if (n.trigger(e = t.Event("show.bs.dropdown", o)), e.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", o))
            }
            return !1
        }
    }, i.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var a = t(this);
            if (i.preventDefault(), i.stopPropagation(), !a.is(".disabled, :disabled")) {
                var n = s(a),
                    r = n.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && n.find(e).trigger("focus"), a.trigger("click");
                var o = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (o.length) {
                    var l = o.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).trigger("focus")
                }
            }
        }
    };
    var n = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.dropdown");
            a || s.data("bs.dropdown", a = new i(this)), "string" == typeof e && a[e].call(s)
        }))
    }, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = n, this
    }, t(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        t.stopPropagation()
    })).on("click.bs.dropdown.data-api", e, i.prototype.toggle).on("keydown.bs.dropdown.data-api", e, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
            this.$element.trigger("loaded.bs.modal")
        }), this))
    };

    function i(i, s) {
        return this.each((function() {
            var a = t(this),
                n = a.data("bs.modal"),
                r = t.extend({}, e.DEFAULTS, a.data(), "object" == typeof i && i);
            n || a.data("bs.modal", n = new e(this, r)), "string" == typeof i ? n[i](s) : r.show && n.show(s)
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(i) {
        var s = this,
            a = t.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
            s.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
            }))
        })), this.backdrop((function() {
            var a = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), a && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: i
            });
            a ? s.$dialog.one("bsTransitionEnd", (function() {
                s.$element.trigger("focus").trigger(n)
            })).emulateTransitionEnd(e.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(n)
        })))
    }, e.prototype.hide = function(i) {
        i && i.preventDefault(), i = t.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }), this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
            27 == t.which && this.hide()
        }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop((function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        }))
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(i) {
        var s = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && a;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }), this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            n ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                s.removeBackdrop(), i && i()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r()
        } else i && i()
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
        var i = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + i), t(this.fixedContent).each((function(e, s) {
            var a = s.style.paddingRight,
                n = t(s).css("padding-right");
            t(s).data("padding-right", a).css("padding-right", parseFloat(n) + i + "px")
        })))
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function(e, i) {
            var s = t(i).data("padding-right");
            t(i).removeData("padding-right"), i.style.paddingRight = s || ""
        }))
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = i, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var s = t(this),
            a = s.attr("href"),
            n = s.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, ""),
            r = t(document).find(n),
            o = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(a) && a
            }, r.data(), s.data());
        s.is("a") && e.preventDefault(), r.one("show.bs.modal", (function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", (function() {
                s.is(":visible") && s.trigger("focus")
            }))
        })), i.call(r, o, this)
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"],
        i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        s = {
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
        a = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        n = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function r(e, s) {
        var r = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(r, s)) return -1 === t.inArray(r, i) || Boolean(e.nodeValue.match(a) || e.nodeValue.match(n));
        for (var o = t(s).filter((function(t, e) {
                return e instanceof RegExp
            })), l = 0, c = o.length; l < c; l++)
            if (r.match(o[l])) return !0;
        return !1
    }

    function o(e, i, s) {
        if (0 === e.length) return e;
        if (s && "function" == typeof s) return s(e);
        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
        var a = document.implementation.createHTMLDocument("sanitization");
        a.body.innerHTML = e;
        for (var n = t.map(i, (function(t, e) {
                return e
            })), o = t(a.body).find("*"), l = 0, c = o.length; l < c; l++) {
            var d = o[l],
                u = d.nodeName.toLowerCase();
            if (-1 !== t.inArray(u, n))
                for (var h = t.map(d.attributes, (function(t) {
                        return t
                    })), p = [].concat(i["*"] || [], i[u] || []), f = 0, g = h.length; f < g; f++) r(h[f], p) || d.removeAttribute(h[f].nodeName);
            else d.parentNode.removeChild(d)
        }
        return a.body.innerHTML
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
        whiteList: s
    }, l.prototype.init = function(e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var a = this.options.trigger.split(" "), n = a.length; n--;) {
            var r = a[n];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var o = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, l.prototype.getDefaults = function() {
        return l.DEFAULTS
    }, l.prototype.getOptions = function(i) {
        var s = this.$element.data();
        for (var a in s) s.hasOwnProperty(a) && -1 !== t.inArray(a, e) && delete s[a];
        return (i = t.extend({}, this.getDefaults(), s, i)).delay && "number" == typeof i.delay && (i.delay = {
            show: i.delay,
            hide: i.delay
        }), i.sanitize && (i.template = o(i.template, i.whiteList, i.sanitizeFn)), i
    }, l.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, (function(t, s) {
            i[t] != s && (e[t] = s)
        })), e
    }, l.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout((function() {
                "in" == i.hoverState && i.show()
            }), i.options.delay.show)
        }
    }, l.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, l.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout((function() {
                "out" == i.hoverState && i.hide()
            }), i.options.delay.hide)
        }
    }, l.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var s = this,
                a = this.tip(),
                n = this.getUID(this.type);
            this.setContent(), a.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && a.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                c = o.test(r);
            c && (r = r.replace(o, "") || "top"), a.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? a.appendTo(t(document).find(this.options.container)) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                u = a[0].offsetWidth,
                h = a[0].offsetHeight;
            if (c) {
                var p = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + h > f.bottom ? "top" : "top" == r && d.top - h < f.top ? "bottom" : "right" == r && d.right + u > f.width ? "left" : "left" == r && d.left - u < f.left ? "right" : r, a.removeClass(p).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, u, h);
            this.applyPlacement(g, r);
            var m = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", m).emulateTransitionEnd(l.TRANSITION_DURATION) : m()
        }
    }, l.prototype.applyPlacement = function(e, i) {
        var s = this.tip(),
            a = s[0].offsetWidth,
            n = s[0].offsetHeight,
            r = parseInt(s.css("margin-top"), 10),
            o = parseInt(s.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(o) && (o = 0), e.top += r, e.left += o, t.offset.setOffset(s[0], t.extend({
            using: function(t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), s.addClass("in");
        var l = s[0].offsetWidth,
            c = s[0].offsetHeight;
        "top" == i && c != n && (e.top = e.top + n - c);
        var d = this.getViewportAdjustedDelta(i, e, l, c);
        d.left ? e.left += d.left : e.top += d.top;
        var u = /top|bottom/.test(i),
            h = u ? 2 * d.left - a + l : 2 * d.top - n + c,
            p = u ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(h, s[0][p], u)
    }, l.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, l.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = o(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, l.prototype.hide = function(e) {
        var i = this,
            s = t(this.$tip),
            a = t.Event("hide.bs." + this.type);

        function n() {
            "in" != i.hoverState && s.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(l.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, l.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, l.prototype.hasContent = function() {
        return this.getTitle()
    }, l.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            s = "BODY" == i.tagName,
            a = i.getBoundingClientRect();
        null == a.width && (a = t.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var n = window.SVGElement && i instanceof window.SVGElement,
            r = s ? {
                top: 0,
                left: 0
            } : n ? null : e.offset(),
            o = {
                scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = s ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, a, o, l, r)
    }, l.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - s,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - s / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - s / 2,
            left: e.left + e.width
        }
    }, l.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return a;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var o = e.top - n - r.scroll,
                l = e.top + n - r.scroll + s;
            o < r.top ? a.top = r.top - o : l > r.top + r.height && (a.top = r.top + r.height - l)
        } else {
            var c = e.left - n,
                d = e.left + n + i;
            c < r.left ? a.left = r.left - c : d > r.right && (a.left = r.left + r.width - d)
        }
        return a
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
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, l.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide((function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        }))
    }, l.prototype.sanitizeHtml = function(t) {
        return o(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var c = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each((function() {
            var i = t(this),
                s = i.data("bs.tooltip"),
                a = "object" == typeof e && e;
            !s && /destroy|hide/.test(e) || (s || i.data("bs.tooltip", s = new l(this, a)), "string" == typeof e && s[e]())
        }))
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
            i = this.getContent();
        if (this.options.html) {
            var s = typeof i;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === s && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === s ? "html" : "append"](i)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);
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
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.popover"),
                n = "object" == typeof i && i;
            !a && /destroy|hide/.test(i) || (a || s.data("bs.popover", a = new e(this, n)), "string" == typeof i && a[i]())
        }))
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(i).is(document.body) ? t(window) : t(i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            a || s.data("bs.scrollspy", a = new e(this, n)), "string" == typeof i && a[i]()
        }))
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
            var e = t(this),
                a = e.data("target") || e.attr("href"),
                n = /^#./.test(a) && t(a);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + s, a]
            ] || null
        })).sort((function(t, e) {
            return t[0] - e[0]
        })).each((function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        }))
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            s = this.options.offset + i - this.$scrollElement.height(),
            a = this.offsets,
            n = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return r != (t = n[n.length - 1]) && this.activate(t);
        if (r && e < a[0]) return this.activeTarget = null, this.clear();
        for (t = a.length; t--;) r != n[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", (function() {
        t('[data-spy="scroll"]').each((function() {
            var e = t(this);
            i.call(e, e.data())
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };

    function i(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.tab");
            a || s.data("bs.tab", a = new e(this)), "string" == typeof i && a[i]()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            s = e.data("target");
        if (s || (s = (s = e.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var a = i.find(".active:last a"),
                n = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(n), e.trigger(r), !r.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var o = t(document).find(s);
                this.activate(e.closest("li"), i), this.activate(o, o.parent(), (function() {
                    a.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a[0]
                    })
                }))
            }
        }
    }, e.prototype.activate = function(i, s, a) {
        var n = s.find("> .active"),
            r = a && t.support.transition && (n.length && n.hasClass("fade") || !!s.find("> .fade").length);

        function o() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        n.length && r ? n.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), n.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = i, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this
    };
    var a = function(e) {
        e.preventDefault(), i.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery),
function(t) {
    "use strict";
    var e = function(i, s) {
        this.options = t.extend({}, e.DEFAULTS, s);
        var a = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = a.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function i(i) {
        return this.each((function() {
            var s = t(this),
                a = s.data("bs.affix"),
                n = "object" == typeof i && i;
            a || s.data("bs.affix", a = new e(this, n)), "string" == typeof i && a[i]()
        }))
    }
    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function(t, e, i, s) {
        var a = this.$target.scrollTop(),
            n = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return a < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(a + this.unpin <= n.top) && "bottom" : !(a + r <= t - s) && "bottom";
        var o = null == this.affixed,
            l = o ? a : n.top;
        return null != i && a <= i ? "top" : null != s && l + (o ? r : e) >= t - s && "bottom"
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var i = this.$element.height(),
                s = this.options.offset,
                a = s.top,
                n = s.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof s && (n = a = s), "function" == typeof a && (a = s.top(this.$element)), "function" == typeof n && (n = s.bottom(this.$element));
            var o = this.getState(r, i, a, n);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (o ? "-" + o : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: r - i - n
            })
        }
    };
    var s = t.fn.affix;
    t.fn.affix = i, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this
    }, t(window).on("load", (function() {
        t('[data-spy="affix"]').each((function() {
            var e = t(this),
                s = e.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), i.call(e, s)
        }))
    }))
}(jQuery),
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
                    const i = new RegExp(`(${this.escapeRegExp(this.typedQuery)})`, "ig");
                    e = t.label.replace(i, "<strong>$1</strong>")
                }
                if (!e) return null;
                const i = document.createElement("li");
                return i.setAttribute("aria-selected", !1), i.setAttribute("role", "option"), Object.keys(t).forEach((e => {
                    "label" !== e && "display" !== e && (i.dataset[e] = t[e])
                })), i.innerHTML = e, i
            },
            displayResults: function(t) {
                if (0 === t.length) return void this.closeList();
                let e = t.map(this.formatOption, this);
                e.length > this.resultLimit && !this.allowEmptySearch && (e = e.slice(0, this.resultLimit)), this.list.innerHTML = "";
                const i = document.createDocumentFragment();
                e.forEach((t => {
                    t && i.appendChild(t)
                })), this.list.appendChild(i), this.updateInstructions(e.length), this.openList()
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
                this.input.value = t.textContent, null !== this.selectCallback && this.selectCallback(t), this.closeList()
            },
            processData: function(t) {
                return null !== this.dataProcessor ? this.dataProcessor(t) : t
            },
            buildQueryString: function() {
                const t = this.input.value,
                    e = null !== this.queryProcessor ? this.queryProcessor(t) : t,
                    i = new URLSearchParams;
                i.append(this.queryName, e), i.append("limit", this.resultLimit);
                return Object.keys(this.queryData).forEach((function(t) {
                    const e = this.queryData[t];
                    "function" != typeof e ? i.append(t, e) : i.append(t, e())
                }), this), `?${i.toString()}`
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
                const i = this.staticData.filter((t => -1 !== t.label.toLowerCase().indexOf(e)));
                this.displayResults(i)
            },
            getExactMatch: function() {
                const t = this.input.value.trim().toLowerCase();
                if ("" === t) return null;
                const e = this.staticData.find((e => e.label.toLowerCase() === t));
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
                this.input.addEventListener("keydown", this.handleTypingDown.bind(this)), this.input.addEventListener("keyup", this.handleTypingUp.bind(this)), this.list.addEventListener("click", this.handleClick.bind(this)), document.body.addEventListener("click", this.handleOutsideClick.bind(this)), this.showAllOnFocus && this.input.addEventListener("focus", (() => {
                    "" === this.input.value && this.query()
                }))
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
                Object.keys(t).forEach((function(i) {
                    -1 !== e.indexOf(i) && (this[i] = t[i])
                }), this), this.showAllOnFocus && (this.allowEmptySearch = !0)
            },
            init: function(t) {
                this.setConfig(t), this.validateConfig(t), this.formatInput(), this.createList(), this.addInstructions(), this.attachEvents()
            }
        },
        i = function(t) {
            const i = Object.create(e);
            return i.init(t), i
        };
    "undefined" != typeof module ? module.exports = e : (t.springSpace = t.springSpace || {}, t.springSpace.sui = t.springSpace.sui || {}, t.springSpace.sui.initAutocomplete = t.springSpace.sui.initAutocomplete || i)
}(this),
function(t) {
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
                var i = JSON.parse(t.responseText);
                i.error && (e = i.error)
            } catch (t) {
                e = this.transText.invalidResponse
            }
            this.content = this.transText.error + ": " + e, this.modal_buttons = [{
                label: this.transText.close,
                callback: "e.data.modal.close();"
            }], this.draw()
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
            "" !== this.title && (t += '<div class="modal-header"><button id="s-sui-modal-close" type="button" class="close" data-dismiss="modal" aria-label="&times; ' + this.transText.close + '">&times;</button><h4 class="modal-title" id="s-sui-modal-header">' + this.title + "</h4></div>");
            var e = "";
            "string" == typeof this.content && (e = this.content), t += '<div class="modal-body">' + e + "</div>", (this.footer || this.modal_buttons.length > 0) && (this.btn_callbacks = {}, t += '<div class="modal-footer">', 0 === this.modal_buttons.length ? t += '<button type="button" class="btn btn-default" data-dismiss="modal">' + this.transText.close + "</button>" : this.modal_buttons.forEach((function(e, i) {
                e.links && e.links.length > 0 ? (e.gclass = e.gclass ? e.gclass : "", t += '<div class="btn-group ' + e.gclass + '">', e.bclass = e.bclass ? e.bclass : "btn-default", e.label = e.label ? e.label : "", "" !== e.label && (t += '<button type="button" class="btn ' + e.bclass + " btn-modal-" + i + '" >' + e.label + "</button>", e.callback && (this.btn_callbacks["btn-modal-" + i] = e.callback)), t += '<button type="button" class="btn ' + e.bclass + ' dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span><span class="sr-only">' + this.transText.toggle + "</span></button>", t += '<ul class="dropdown-menu">', e.links.forEach((function(e, i) {
                    if (e.label = e.label ? e.label : "", "" !== e.label) {
                        var s = e.url ? e.url : "#";
                        t += '<li><a href="' + s + '" class="link-modal-' + i + '">' + e.label + "</a></li>", e.callback && (this.btn_callbacks["link-modal-" + i] = e.callback)
                    }
                }), this), t += "</ul>", t += "</div>") : (e.bclass = e.bclass ? e.bclass : "btn-default", e.label = e.label ? e.label : "", "" !== e.label && (t += '<button type="button" class="btn ' + e.bclass + " btn-modal-" + i + '" >' + e.label + "</button>", e.callback && (this.btn_callbacks["btn-modal-" + i] = e.callback)))
            }), this), t += "</div>"), t += "</div>";
            var i = jQuery(t);
            if ("string" != typeof this.content && i.find(".modal-body").html(this.content), this.$el.find(".modal-content").replaceWith(i), this.modal_buttons.length > 0)
                for (var s in this.btn_callbacks)
                    if (this.btn_callbacks.hasOwnProperty(s)) {
                        if ("string" == typeof this.btn_callbacks[s]) {
                            var a = new Function("e", this.btn_callbacks[s]);
                            this.btn_callbacks[s] = a
                        }
                        "function" == typeof this.btn_callbacks[s] && this.$el.find("." + s).on("click", {
                            modal: this
                        }, this.btn_callbacks[s])
                    } this.$el.on("show.bs.modal", this.handleShowEvent.bind(this)), this.$el.modal({
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
springSpace.sui = springSpace.sui || {}, springSpace.sui.notify_ = function() {
    this.parent_id = "s-ui-alertarea", this.html_id = "s-ui-notification", this.className = "s-ui-notification", this.timeout = null, this.error = function(t) {
        void 0 !== t && "" !== t || (t = "Error: Please try again.");
        var e = {
            className: "s-ui-notification-error",
            duration: 5e3,
            msg: t
        };
        this.show(e)
    }, this.success = function(t) {
        void 0 !== t && "" !== t || (t = "Success.");
        var e = {
            className: "s-ui-notification-success",
            duration: 5e3,
            msg: t
        };
        this.show(e)
    }, this.working = function(t) {
        void 0 !== t && "" !== t || (t = ' <i class="fa fa-spinner fa-3x fa-pulse"></i><span class="sr-only">Working...</span> '), settings = {
            msg: t,
            duration: 3e4
        }, this.show(settings)
    }, this.show = function(t) {
        var e = this;
        if (void 0 !== t && t.msg && "" !== t.msg && null !== t.msg) {
            t.duration || 0 === t.duration || (t.duration = 5e3);
            var i = jQuery("#" + this.html_id);
            if (i.length > 0 && i.remove(), i = jQuery("<div></div>").attr({
                    id: this.html_id
                }), 0 == (s = jQuery("#" + this.parent_id)).length) var s = jQuery("<div></div>").attr({
                id: this.parent_id,
                role: "alert"
            }).appendTo(jQuery("body"));
            i.appendTo(s);
            var a = {};
            t.bgcolor && (a.backgroundColor = t.bgcolor), t.fgcolor && (a.color = t.fgcolor), i.addClass(t.className ? t.className : this.className).html(t.msg).css(a).on("mouseover", (function() {
                clearTimeout(e.timeout)
            })).on("mouseout", (function() {
                t.duration > 0 && (e.timeout = setTimeout(e.hide.bind(e), t.duration))
            })).on("click", e.hide.bind(e)).wrapInner('<div class="s-ui-notification-message" />');
            var n = jQuery(window).width(),
                r = jQuery(window).height(),
                o = i.outerWidth(),
                l = r / 2 - i.outerHeight() / 2,
                c = n / 2 - o / 2;
            i.css({
                top: l,
                left: c
            }).fadeIn(200, (function() {
                t.duration > 0 && (e.timeout = setTimeout(e.hide.bind(e), t.duration))
            }))
        }
    }, this.hide = function() {
        jQuery("#" + this.html_id).off("mouseover mouseout").fadeOut(200, (function() {
            jQuery(this).empty()
        })), clearTimeout(this.timeout)
    }
}, springSpace.sui.notify = new springSpace.sui.notify_;
var springSpace = springSpace || {};
springSpace.sui = springSpace.sui || {}, springSpace.sui.helptip = function(t) {
    void 0 === t && (t = {});
    if (this.parent = t.parent ? t.parent : "", this.selector = t.selector ? t.selector : "button.btn-help-popover", "" != this.selector) {
        this.placement = t.placement ? t.placement : "bottom", -1 == ["bottom", "top", "right", "left"].indexOf(this.placement) && (this.placement = "bottom"), this.$el = null, "" !== this.parent ? this.$el = jQuery(this.parent + " " + this.selector) : this.$el = jQuery(this.selector), this.ajcontent = {};
        var e = this;
        this.$el.popover({
            placement: this.placement,
            html: !0,
            content: function() {
                var t = $(this).attr("data-ajload");
                if (t) {
                    if (void 0 === $(this).attr("data-loaded")) {
                        $(this).attr("data-loaded", "true");
                        return jQuery.ajax({
                            url: t,
                            type: "get",
                            dataType: "json",
                            async: !1,
                            success: function(i) {
                                i.data && i.data.content ? e.ajcontent[t] = i.data.content : i.content && (e.ajcontent[t] = i.content)
                            }
                        }).fail((function() {
                            e.ajcontent[t] = "Sorry, an error occurred."
                        })), e.ajcontent[t]
                    }
                    return e.ajcontent[t]
                }
                var i = $(this).attr("data-popover-text") ? "<p>" + $(this).attr("data-popover-text") + "</p>" : $("#" + $(this).attr("data-popover-id")).html();
                return i += '<button type="button" class="btn btn-xs btn-link btn-close pull-right">close</button>'
            },
            title: function() {
                var t = $(this).attr("data-title");
                return t ? t += '<button type="button" class="btn btn-link btn-close pull-right" aria-label="Close"><i class="fa fa-close"></i></button>' : ""
            }
        }).on("shown.bs.popover", (function(t) {
            var e = jQuery(this);
            jQuery(this).attr("aria-pressed", !0).parent().find("div.popover button.btn-close").on("click keydown", (function(t) {
                ("click" === t.type || "keydown" === t.type && 27 === t.which) && e.popover("hide")
            })).attr("aria-controls", e.parent().find("div.popover").attr("id"))
        })).on("hidden.bs.popover", (function(t) {
            void 0 !== $(t.target).data("bs.popover").inState && ($(t.target).data("bs.popover").inState.click = !1), jQuery(this).attr("aria-pressed", !1)
        })).on("keydown.dismiss.bs.popover", (function(t) {
            27 == t.which && jQuery(this).popover("hide")
        }))
    }
};
var springSpace = springSpace || {};
springSpace.sui = springSpace.sui || {}, springSpace.sui.filedrop = function(t) {
    if (void 0 === t) return !1;
    if (!t.selector || "" === t.selector) return !1;
    var e;
    if (this.callback = t.callback ? t.callback : function() {}, this.error_callback = t.error_callback ? t.error_callback : function() {}, this.validate = t.validate ? t.validate : function() {
            return !0
        }, this.max_files = t.max_files ? parseInt(t.max_files, 10) : 0, this.max_upload_size = t.max_upload_size ? parseInt(t.max_upload_size, 10) : 0, this.max_file_size = t.max_file_size ? parseInt(t.max_file_size, 10) : 0, this.batch_files = void 0 !== t.batch_files && !!t.batch_files, this.autoupload = void 0 === t.autoupload || !!t.autoupload, this.translations = t.translations ? t.translations : {
            max_file_size: "Maximum file size"
        }, this.allowedMimeTypes = t.allowedMimeTypes ? t.allowedMimeTypes : [], this.isAdvancedUpload = ("draggable" in (e = document.createElement("div")) || "ondragstart" in e && "ondrop" in e) && "FormData" in window && "FileReader" in window, this.$form = jQuery(t.selector), 0 === this.$form.length) return !1;
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
                    var s = [],
                        a = 0;
                    this.droppedFiles.forEach((function(t) {
                        var e = document.createElement("li");
                        e.innerText = t.name, s.push(e), a += t.size
                    })), e.innerHTML = "", 0 === s.length ? t.classList.add("hidden") : (t.classList.remove("hidden"), s.forEach((function(t) {
                        e.appendChild(t)
                    }))), this.max_files > 0 && s.length > this.max_files && this.showError(i.max_files + " file uploads maximum."), !1 === this.batch_files && this.max_upload_size > 0 && a > this.max_upload_size && this.showError("Files total " + i.bytesToMB(a) + " MB which exceeds the maximum of " + i.bytesToMB(this.max_upload_size) + " MB at a time.")
                } else {
                    if ("" === this.$input.val()) return t.classList.add("hidden"), void(e.innerHTML = "");
                    t.classList.remove("hidden");
                    var n = document.createElement("li");
                    n.innerText = this.$input.val().split("\\").slice(-1).pop(), e.appendChild(n), this.$label.find(".filetext").addClass("hidden")
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
                    var i = document.createElement("div");
                    i.classList.add("alert"), i.classList.add("alert-danger"), i.classList.add("s-ui-filedrop-error"), i.setAttribute("role", "alert"), i.appendChild(e), this.$droparea.prepend(i)
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
                    i = jQuery("<div></div>").addClass("s-ui-filedrop-progbar").attr({
                        role: "progressbar",
                        "aria-valuenow": "0",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-labelledby": "s-ui-filedrop-progresslabel"
                    });
                i.append(document.createElement("span")), this.$progress.append([e, i]), t || this.$droparea.prepend(this.$progress)
            }
        }, this.updateProgress = function(t, e) {
            var i = Math.round(t / e * 100);
            (this.$progress.find("span:first").css("width", i + "%"), this.$progress.find(".s-ui-filedrop-progbar").attr("aria-valuenow", i), this.batch.total > 1 && i < 50) && this.$progress.find("div:first").html("Uploading file batch (" + this.batch.current + "/" + this.batch.total + ")")
        }, this.stopProgress = function() {
            null !== this.$progress && this.$progress.empty()
        }, this.bytesToMB = function(t) {
            return (parseInt(t, 10) / 1048576).toFixed(1)
        }, this.addFiles = function(t) {
            if (i.max_files > 0 && i.countFiles() + t.length > i.max_files) return i.showError(i.max_files + " file uploads maximum."), !1;
            var e = 0;
            i.droppedFiles.forEach((function(t) {
                e += t.size
            }));
            for (var s = [], a = 0; a < t.length; a++) {
                var n = t[a];
                if (i.droppedFiles.length > 0) {
                    var r = !1;
                    if (i.droppedFiles.forEach((function(t) {
                            t.name === n.name && (r = !0)
                        })), r) {
                        s.push(a);
                        continue
                    }
                }
                this.allowedMimeTypes.length > 0 && -1 === this.allowedMimeTypes.indexOf(n.type) ? (i.showError("File: " + n.name + " is not an allowed file type."), s.push(a)) : i.max_file_size > 0 && n.size > i.max_file_size ? (i.showError("File: " + n.name + " is greater than allowed file size of " + i.bytesToMB(i.max_file_size) + " MB."), s.push(a)) : !1 === i.batch_files && e + n.size > i.max_upload_size ? (i.showError("File: " + n.name + " causes files to go over maximum upload size of " + i.bytesToMB(i.max_upload_size) + " MB at a time."), s.push(a)) : e += n.size
            }
            if (!1 === i.batch_files && i.max_upload_size > 0 && e > i.max_upload_size) return i.showError("Files total " + e + " bytes which exceeds the maximum of " + i.bytesToMB(i.max_upload_size) + " MB at a time."), !1;
            for (var o = 0; o < t.length; o++) - 1 === s.indexOf(o) && i.droppedFiles.push(t[o]);
            return 0 !== i.droppedFiles.length
        }, this.batchFiles = function() {
            var t = [],
                e = [];
            if (!this.batch_files) return t.push(this.droppedFiles), t;
            var s = 1;
            return t.push([]), e.push(0), this.droppedFiles.forEach((function(a) {
                var n = !1;
                if (e.forEach((function(s, r) {
                        !n && s + a.size < i.max_upload_size && (e[r] = s + a.size, t[r].push(a), n = !0)
                    })), !n) {
                    e.push(0), s++, t.push([]);
                    var r = s - 1;
                    e[r] = a.size, t[r].push(a)
                }
            })), t
        }, this.isLastBatch = function() {
            return this.batch.current >= this.batch.total
        }, this.ajaxUpload = function() {
            i.$form.find('input[name="batch_current"]').val(i.batch.current);
            var t = new FormData(i.$form[0]);
            "function" == typeof t.delete && t.delete(i.$input.attr("name")), i.batchedFiles[i.batch.current - 1].forEach((function(e) {
                t.append(i.$input.attr("name"), e)
            })), jQuery.ajax({
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
            }).fail((function(t) {
                i.error_callback(t, i)
            }))
        }, this.isAdvancedUpload && this.$input.length > 0) {
        if (this.$droparea.addClass("has-advanced-upload"), this.batch_files) {
            var s = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_current"
                }).val("0"),
                a = jQuery("<input />").attr({
                    type: "hidden",
                    name: "batch_total"
                }).val("0");
            this.$form.prepend([s, a])
        }
        this.$droparea.on("drag dragstart dragend dragover dragenter dragleave drop", (function(t) {
            t.preventDefault(), t.stopPropagation()
        })).on("dragover dragenter", (function() {
            i.$droparea.addClass("is-dragover")
        })).on("dragleave dragend drop", (function() {
            i.$droparea.removeClass("is-dragover")
        })).on("drop", (function(t) {
            var e = i.addFiles(t.originalEvent.dataTransfer.files);
            i.showFiles(), !0 === e && i.autoupload && i.$form.submit()
        })).on("click", (function(t) {
            var e = t.target.tagName; - 1 !== ["A", "I", "SPAN", "B", "STRONG", "BUTTON"].indexOf(e) && (jQuery(t.target).closest("a, button").hasClass("s-ui-filedrop-clear") && (i.clearFiles(), i.removeError()))
        }))
    }
    if (this.isAdvancedUpload || (this.$input.remove(), this.$droparea.remove()), this.$input.length > 0 && (this.$input.on("change", (function(t) {
            if (t.target.files) {
                if (i.isAdvancedUpload) {
                    var e = i.addFiles(t.target.files);
                    i.resetFileInput(), !0 === e && i.autoupload && i.$form.submit()
                }
                i.$input.removeClass("has-focus"), i.showFiles()
            }
        })).on("focus", (function(t) {
            t.target.classList.add("has-focus")
        })).on("blur", (function(t) {
            t.target.classList.remove("has-focus")
        })), this.translations.max_file_size)) {
        var n = document.createElement("p");
        n.innerHTML = this.translations.max_file_size + ": " + this.bytesToMB(this.max_file_size) + " MB", this.$label.append(n)
    }
    this.$form.on("submit", (function(t) {
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
            }).fail((function(t) {
                i.error_callback(t, i)
            })))
        }
    }))
};
var springSpace = springSpace || {};
springSpace.cookieConsent = springSpace.cookieConsent || {}, springSpace.cookieConsent.alert = function(t) {
    this.setConfig = function(t) {
        void 0 === t && (t = {});
        var e = t.okay ? t.okay : "OK";
        this.placement_opts = ["bottom", "top"], this.placement = -1 !== this.placement_opts.indexOf(t.placement) ? t.placement : "bottom", this.cookie_name = "springy_cookie_consent", this.cookie_notice_accepted = "ok", this.cookie_exp_days = t.cookie_exp_days ? t.cookie_exp_days : 180, this.read_more_callback = t.read_more_callback ? t.read_more_callback : function() {}, this.aria_label = t.aria_label || "User Privacy Alert", this.fade_in = 500, this.fade_out = 200, this.container_id = "s-ui-cc-container", this.close_button_id = "s-ui-cc-close-btn", this.read_more_elt_id = "s-ui-cc-read-more-link", this.consent_message = t.consent_message ? t.consent_message : "By using our website you are consenting to our use of cookies in accordance with our cookie policy.", this.content = '<div id="' + this.container_id + '" class="container" style="display: none;">    <aside class="navbar navbar-default navbar-fixed-' + this.placement + " fixed-" + this.placement + '" id="s-ui-cc-navbar" aria-label="' + this.aria_label + '">        <div id="s-ui-cc-main" class="container">            <div class="navbar-inner navbar-content-center" id="s-ui-cc-msg-container">                <div id="s-ui-cc-msg">' + this.consent_message + '<button id="' + this.close_button_id + '" type="button" class="btn btn-sm btn-default btn-light" data-dismiss="alert" aria-label="Close">' + e + "</button></div>            </div>        </div>    </aside></div>"
    }, this.consentCookieAccepted = function() {
        return this.getCookie(this.cookie_name) === this.cookie_notice_accepted
    }, this.setCookie = function(t, e, i) {
        var s = new Date;
        s.setDate(s.getDate() + i);
        var a = encodeURI(e) + (null === i ? "" : "; expires=" + s.toUTCString()),
            n = "https:" === location.protocol ? "; secure" : "";
        document.cookie = t + "=" + a + "; path=/; samesite=lax;" + n, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(t) {
        var e, i, s, a = document.cookie.split(";");
        for (e = 0; e < a.length; e++)
            if (i = a[e].indexOf("="), a[e].substr(0, i).replace(/^\s+|\s+$/g, "") === t) return s = a[e].substr(i + 1), decodeURI(s);
        return null
    }, this.handleClose = function() {
        this.setCookie(this.cookie_name, this.cookie_notice_accepted, this.cookie_exp_days), jQuery("#" + this.container_id).fadeOut(this.fade_out)
    }, this.handleAlert = function() {
        this.consentCookieAccepted() || (jQuery("body").prepend(this.content), jQuery("#" + this.container_id).fadeIn(this.fade_in), jQuery("#" + this.close_button_id).on("click", this.handleClose.bind(this)), jQuery("#" + this.read_more_elt_id).attr("href", "#"), jQuery("#" + this.read_more_elt_id).on("click", this.read_more_callback.bind(this)))
    }, this.setConfig(t), jQuery(document).ready(this.handleAlert.bind(this))
};
var springSpace = springSpace || {};

function closeModal(t) {
    var e = null;
    void 0 === t ? jQuery(".modal").each((function(t, i) {
        "none" !== jQuery(i).css("display") && (e = jQuery(i))
    })) : e = jQuery("#" + t), null !== e && e.modal("hide").removeData("bs.modal").find(".modal-content").html("")
}

function disableButton(t) {
    t && (-1 === ["#", "."].indexOf(t.charAt(0)) && (t = "#" + t), jQuery(t).prop("disabled", !0))
}

function enableButton(t) {
    t && (-1 === ["#", "."].indexOf(t.charAt(0)) && (t = "#" + t), jQuery(t).prop("disabled", !1))
}

function errorAlert(t) {
    void 0 !== t && "" !== t || (t = "Error: Please try again."), t = '<i class="fa fa-exclamation-triangle"></i> ' + t, springSpace.sui.notify.error(t)
}

function successAlert(t) {
    void 0 !== t && "" !== t || (t = "Success."), t = '<i class="fa fa-check-circle"></i> ' + t, springSpace.sui.notify.success(t)
}

function workingAlert(t) {
    springSpace.sui.notify.working(t)
}

function longWorkingAlert(t) {
    springSpace.sui.notify.working(t)
}

function stopAlert() {
    springSpace.sui.notify.hide()
}
springSpace.la = springSpace.la || {}, springSpace.util = {}, springSpace.ui = {}, springSpace.util._construct = function() {
    function t() {}
    t.prototype.stringFormat = function(t, e) {
        return t.replace(/%(\d+)/g, (function(t, i) {
            return e[--i]
        }))
    }, t.prototype.selectText = function(t) {
        var e, i, s = t;
        document.body.createTextRange ? ((e = document.body.createTextRange()).moveToElementText(s), e.select()) : window.getSelection && (i = window.getSelection(), (e = document.createRange()).selectNodeContents(s), i.removeAllRanges(), i.addRange(e))
    }, t.prototype.rePopForm = function(t, e) {
        t = t.replace(/^\?/, "");
        for (var i = (t = decodeURIComponent(t)).split("&"), s = jQuery("#" + e), a = 0; a < i.length; a++) {
            var n = decodeURIComponent(i[a]).split("="),
                r = n[0],
                o = n[1];
            if (void 0 !== o)
                if (o = o.replace(/\+/g, " "), r.match(/\[.*?\]/)) {
                    var l = r.replace(/\[.*?\]/, "[]"),
                        c = s.find('select[name="' + l + '"]');
                    void 0 === c.data("multiselect") ? c.find("option[value=" + o + "]").prop("selected", !0) : c.multiselect("select", o)
                } else {
                    var d = s.find('*[name="' + r + '"]');
                    void 0 === d.data("multiselect") ? d.val(o) : d.multiselect("select", o)
                }
        }
    }, this.Util = t
}, springSpace.util._construct(), springSpace.Util = new springSpace.util.Util;
var jqGetAjaxError = function(t) {
        var e = "";
        if (t.responseText) try {
            var i = JSON.parse(t.responseText);
            i.error && (e = i.error)
        } catch (t) {
            e = "Invalid response received"
        }
        return e
    },
    jqAjaxFailCallback = function(t) {
        errorAlert(jqGetAjaxError(t))
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
    createDismissableAlert = function(t, e, i = "") {
        var s = document.createElement("div");
        "" !== i && (s.id = i), s.classList.add("alert", "alert-" + e, "alert-dismissable", "mg-top"), s.setAttribute("role", "alert");
        var a = document.createElement("button");
        return a.classList.add("close"), a.setAttribute("data-dismiss", "alert"), a.setAttribute("aria-label", "close"), a.innerHTML = '<span aria-hidden="true">&times;</span>', s.appendChild(a), s.insertAdjacentHTML("beforeend", t), s
    },
    enableMultiSelect = function(t, e) {
        if (0 !== t.length) {
            var i = {};
            springyText && springyText.bsMultiselect && Object.keys(springyText.bsMultiselect).forEach((function(t) {
                i[t] = springyText.bsMultiselect[t]
            })), Object.keys(e).forEach((function(t) {
                i[t] = e[t]
            })), t.multiselect(i)
        }
    };
const resetMultiSelect = function(t, e) {
    const i = jQuery(t);
    i.multiselect("deselectAll"), i.multiselect("select", e), i.multiselect("refresh")
};
var springSpace = springSpace || {};
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
                end: i = null,
                offhours: s = null,
                captchaAlwaysOn: a = !1
            }) {
                this.type = t, this.start = e, this.end = i, this.offhours = s, this.captchaAlwaysOn = a
            }
            enableCaptcha() {
                return !!this.captchaAlwaysOn || 0 !== this.type && (1 === this.type || (3 === this.type ? this._isBetweenDates() : 2 === this.type && this._isNowOffHours()))
            }
            _isBetweenDates() {
                if (!this.end || !this.start) return !1;
                const t = Math.floor(Date.now() / 1e3);
                return t >= this.start && t <= this.end
            }
            _isNowOffHours() {
                return !0
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
                operator: i = e.RULE_OPERATOR_EQUALS,
                value: s = [],
                field2: a = 0,
                action: n = e.RULE_ACTION_SHOW
            }) {
                this.field1 = t, this.operator = i, this.value = Array.isArray(s) ? s : [], this.field2 = a, this.action = n
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
                        return Array.isArray(t) ? t.filter((t => this.value.includes(t))).length > 0 ? this.action : this.oppositeAction : e.RULE_ACTION_NONE;
                    case e.RULE_OPERATOR_INCLUDES_ALL:
                        return Array.isArray(t) ? t.filter((t => this.value.includes(t))).length === this.value.length ? this.action : this.oppositeAction : e.RULE_ACTION_NONE
                }
                return e.RULE_ACTION_NONE
            }
        }
    }(window),
    //!Idea Form
    springSpace.la.ideaform = function(t) {
        this.$form = jQuery("#ideaform"), this.errormsg = t.errormsg;
        var e = this;
        this.$form.on("submit", (function(t) {
            t.preventDefault(), e.$form.find("label .error-message").remove(), e.$form.find(".form-group").removeClass("has-error"), e.$form.find(".form-control").attr("aria-invalid", !1);
            var i = e.$form.find("input[name=title]");
            "" == i.val() && e.markError(i, e.errormsg.reqfields);
            var s = e.$form.find("textarea[name=body]");
            "" == s.val() && e.markError(s, e.errormsg.reqfields);
            var a = e.$form.find("input[name=email]");
            if (a.val().trim().match(springSpace.regex.email) || e.markError(a, e.errormsg.emailaddress), e.$form.find(".has-error").length > 0) return errorAlert(), e.$form.find("*[aria-invalid=true]:first").focus(), !1;
            jQuery.ajax({
                url: e.$form.attr("action"),
                method: e.$form.attr("method"),
                data: e.$form.serialize()
            }).done((function() {
                successAlert()
            })).fail(jqAjaxFailCallback).always((function() {
                closeModal()
            }))
        })), this.markError = function(t, e) {
            var i = jQuery('<div class="error-message"></div>').html(e);
            t.attr("aria-invalid", !0).parent().addClass("has-error").find("label").append(i)
        }
    }
    //!Idea Comment Form
    , springSpace.la.ideacommentform = function(t) {
        this.$form = jQuery("#ideacommentform"), this.errormsg = t.errormsg;
        var e = this;
        this.$form.on("submit", (function(t) {
            t.preventDefault(), e.$form.find("label .error-message").remove(), e.$form.find(".form-group").removeClass("has-error"), e.$form.find(".form-control").attr("aria-invalid", !1);
            var i = e.$form.find("input[name=email]");
            if (jQuery.trim(i.val()).match(springSpace.regex.email) || e.markError(i, e.errormsg.emailaddress), e.$form.find(".has-error").length > 0) return errorAlert(), e.$form.find("*[aria-invalid=true]:first").focus(), !1;
            jQuery.ajax({
                url: e.$form.attr("action"),
                data: e.$form.serialize(),
                method: e.$form.attr("method")
            }).done((function(t) {
                if (successAlert(), 1 == t.upvote) {
                    var e = jQuery("#product_idea_" + t.idea_id + " .s-la-idea-upvotes"),
                        i = parseInt(e.text(), 10) + 1;
                    e.text(i)
                } else if (1 == t.downvote) {
                    e = jQuery("#product_idea_" + t.idea_id + " .s-la-idea-downvotes"), i = parseInt(e.text(), 10) + 1;
                    e.text(i)
                }
                closeModal()
            })).fail(jqAjaxFailCallback)
        })), this.markError = function(t, e) {
            var i = jQuery('<div class="error-message"></div>').html(e);
            t.attr("aria-invalid", !0).parent().addClass("has-error").find("label").append(i)
        }, this.$form.find(".btn-cancel").on("click", (function(t) {
            closeModal()
        }))
    };
const faqHit = function(t, e, i) {
        jQuery.ajax({
            method: "POST",
            url: `/faq/${t}/view`,
            data: {
                type: i
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
        }).done((t => {
            if (!t.success) return;
            let e = null;
            1 === t.vote ? (e = jQuery("#s-la-vote-yes-ct"), e.html(parseInt(e.text()) + 1), jQuery("#s-la-vote-yes").addClass("voted")) : 0 === t.vote && (e = jQuery("#s-la-vote-no-ct"), e.html(parseInt(e.text()) + 1), jQuery("s-la-vote-no").addClass("voted")), jQuery("#s-la-vote button").attr("disabled", "true")
        })).fail(jqAjaxFailCallback)
    },
    loadRelatedFAQs = function(t) {
        const e = document.getElementById("s-la-faq-relatedfaqs");
        e && $.ajax({
            method: "GET",
            url: `/faq/${t}/related`,
            dataType: "json"
        }).done((t => {
            t.content && (e.innerHTML = t.content)
        })).fail((() => {}))
    },
    fixMediaZindex = function() {
        document.querySelectorAll(".s-la-faq-media-wrapper iframe").forEach((t => {
            const e = t.getAttribute("src"),
                i = "wmode=transparent"; - 1 !== e.indexOf("?") ? t.setAttribute("src", `${e}&${i}`) : t.setAttribute("src", `${e}?${i}`)
        }))
    },
    faqVoteButtons = function(t) {
        document.querySelectorAll("#s-la-vote-no, #s-la-vote-yes").forEach((e => {
            e.addEventListener("click", (e => {
                e.preventDefault();
                const i = e.currentTarget,
                    s = i.dataset.warn;
                if ("" !== s) return void alert(s);
                const a = parseInt(i.dataset.vote, 10);
                faqVote(t, a)
            }))
        }))
    },
    setUpAnswerPage = function(t, e, i) {
        t <= 0 || (i || faqHit(t, e, 1), loadRelatedFAQs(t), fixMediaZindex(), faqVoteButtons(t))
    },
    setUpPublicPage = function() {
        const t = new URL(window.location);
        t.searchParams.has("token") && (t.searchParams.delete("token"), history.replaceState({}, "", t.toString())), document.body.addEventListener("click", (t => {
            const e = t.target.tagName;
            if (-1 === ["A", "I", "SPAN", "B", "STRONG"].indexOf(e)) return;
            const i = t.target.closest("a");
            if (!i) return;
            let s = null;
            i.classList.contains("imagepreviewlink") ? (t.preventDefault(), s = new springSpace.sui.modal({
                url: i.getAttribute("href"),
                size: "large"
            })) : i.classList.contains("modallink") && (t.preventDefault(), s = new springSpace.sui.modal({
                url: i.getAttribute("href")
            }))
        }))
    },
    getDocHeight = function() {
        return Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
    };
! function(t) {
    t.springSpace = t.springSpace || {}, t.springSpace.la = t.springSpace.la || {};
    t.springSpace.la.askform = function(e) {
        this.id = e.content_id, this.queue_id = e.queue_id, this.errormsg = e.errormsg, this.divselector = `#s-la-askform-${this.id}`, this.$form = jQuery(`${this.divselector} form`), this.translations = e.translations, this.form_action = e.form_action, this.libauth_enabled = e.libauth_enabled || !1, this.libauth_authed = e.libauth_authed || !1, this.autoReplySettings = new t.springSpace.la.FormAutoReply(e.autoReplySettings || {}), this.captcha_enabled = this.autoReplySettings.enableCaptcha(), this.captchaDiv = this.$form[0].querySelector(".formlibcpt"), this.captcha_enabled && this.captchaDiv.classList.remove("hidden"), Array.isArray(e.rules) ? this.rules = e.rules.map((e => new t.springSpace.la.FormFieldRule(e))) : this.rules = [], this.handleRequiredCheckBoxes = function(t) {
            const e = t.target.name;
            if (!0 === t.target.checked) {
                const t = this.$form[0].querySelectorAll(`input[type=checkbox][name="${e}"]`);
                return void(t.length > 0 && Array.prototype.forEach.call(t, (t => {
                    t.removeAttribute("required")
                }), this))
            }
            const i = t.target.closest("fieldset");
            if (null === i) return;
            i.querySelectorAll("input[type=checkbox]:checked").length > 0 || Array.prototype.forEach.call(i.querySelectorAll("input[type=checkbox]"), (t => {
                t.setAttribute("required", "")
            }), this)
        }, this.markError = function(t, e) {
            if (!t) return;
            const i = document.createElement("div");
            i.classList.add("error-message"), i.innerHTML = e;
            const s = t.closest("div.form-group");
            if (null === s) return;
            t.setAttribute("aria-invalid", "true"), s.classList.add("has-error");
            const a = s.querySelector("label");
            a && a.appendChild(i)
        }, this.loadCaptcha = function() {
            const t = new URL(this.form_action);
            jQuery.ajax({
                context: this,
                type: "GET",
                url: `https://${t.hostname}/form/libcpt`,
                data: {
                    queue_id: this.queue_id,
                    auto_type: this.autoReplySettings.type
                },
                dataType: "json"
            }).done((t => {
                if (!t.html) return void this.captchaDiv.classList.add("hidden");
                this.captchaDiv.innerHTML = t.html, this.captchaDiv.classList.add("active"), this.captchaDiv.classList.remove("hidden");
                const e = this.captchaDiv.querySelector(".btn-cptreload");
                e && e.addEventListener("click", this.loadCaptcha.bind(this)), this.$form[0].querySelector(".confem_wrap")?.remove()
            })).fail((() => {
                this.captchaDiv.classList.add("hidden")
            }))
        }, this.validateField = function(t) {
            if (!t || t.disabled) return;
            if ("SELECT" === t.tagName) {
                const e = t.options[t.selectedIndex] || null;
                if (!e) return;
                const i = e.value;
                return void("" !== i && "0" !== i || this.markError(t, this.errormsg.reqfields))
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
        }, this.validateFieldSet = function(t) {
            const e = t.querySelectorAll("input");
            let i = !0;
            if (e.forEach((t => {
                    t.checkValidity() || (i = !1, t.setAttribute("aria-invalid", "true"))
                })), i) return;
            const s = document.createElement("div");
            s.classList.add("error-message"), s.innerHTML = this.errormsg.reqfields, t.classList.add("has-error");
            const a = t.querySelector("legend");
            a && a.appendChild(s)
        }, this.validate = function() {
            if (this.libauth_enabled && !this.libauth_authed) return !1;
            if (this.$form.attr("action", this.form_action), this.$form.find("label .error-message, legend .error-message").remove(), this.$form.find(".form-group").removeClass("has-error"), this.$form.find(".form-control, input[type=radio], input[type=checkbox]").attr("aria-invalid", !1), Array.from(this.$form[0].querySelectorAll("[required]")).forEach((t => {
                    this.validateField(t)
                })), Array.from(this.$form[0].querySelectorAll("fieldset[data-required]")).forEach((t => {
                    this.validateFieldSet(t)
                })), this.$form.find(".has-error").length > 0) return this.$form.find("*[aria-invalid=true]:first").trigger("focus"), !1;
            let e = 0;
            return t.springSpace.queryAnalyzer ? e = t.springSpace.queryAnalyzer.qlog_id || 0 : t.springSpace.la.Page && t.springSpace.la.Page.qlog_id && (e = t.springSpace.la.Page.qlog_id), e > 0 && this.$form.find("input[name=qlog]").val(e), t.springSpace.sui.notify.working(), !0
        }, this.createDismissableAlert = function(t, e) {
            const i = document.createElement("div");
            i.classList.add("alert", `alert-${e}`, "alert-dismissable"), i.setAttribute("role", "alert");
            const s = document.createElement("button");
            return s.classList.add("close"), s.setAttribute("data-dismiss", "alert"), s.setAttribute("aria-label", "close"), s.innerHTML = '<span aria-hidden="true">&times;</span>', i.appendChild(s), i.insertAdjacentHTML("beforeend", t), i
        }, this.resetRules = function() {
            this.rules.forEach((t => {
                this.$form[0].querySelectorAll(`*[name^="${t.field1}"]`).forEach((t => {
                    t.dispatchEvent(new Event("change"))
                }))
            }))
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
                t.springSpace.sui.notify.hide();
                const i = this.createDismissableAlert(e.message, "success");
                this.$form[0].querySelector("#s-la-askform-buttons").insertAdjacentElement("beforebegin", i), this.questionform.reset(), this.resetRules(), this.captcha_enabled && this.loadCaptcha()
            },
            error_callback: e => {
                let i = "Error";
                const s = 449 === e.status;
                if (e.responseText) try {
                    const t = JSON.parse(e.responseText);
                    t.error && (i = t.error)
                } catch (t) {
                    i = "Invalid response received"
                }
                t.springSpace.sui.notify.hide();
                const a = this.createDismissableAlert(i, "danger");
                let n = null,
                    r = "beforebegin";
                s && (n = this.$form[0].querySelector(".formlibcpt"), n && (r = "afterbegin")), n || (n = this.$form[0].querySelector("#s-la-askform-buttons")), n.insertAdjacentElement(r, a)
            },
            validate: this.validate.bind(this)
        }), this.showField = function(t) {
            t.classList.remove("hidden"), t.querySelectorAll("select, input, textarea").forEach((t => {
                t.disabled = !1
            }))
        }, this.hideField = function(t) {
            t.classList.add("hidden"), t.querySelectorAll("select, input, textarea").forEach((t => {
                ["checkbox", "radio"].includes(t.type) ? t.checked = !1 : t.value = "", t.dispatchEvent(new Event("change")), t.disabled = !0
            }))
        }, this.getMultiCheckValue = function(t) {
            const e = new FormData(this.$form[0]);
            return Array.from(e.getAll(t)).map((t => Number(t)))
        }, this.getRadioValue = function(t) {
            const e = new FormData(this.$form[0]);
            return Number(e.get(t))
        }, this.setUpRules = function() {
            this.rules.forEach((t => {
                this.$form[0].querySelectorAll(`*[name^="${t.field1}"]`).forEach((e => {
                    const i = this.$form[0].querySelector(`.${t.field2}_wrap`);
                    i && e.addEventListener("change", (e => {
                        let s = Number(e.target.value);
                        "checkbox" === e.target.type ? s = this.getMultiCheckValue(e.target.name) : "radio" === e.target.type && (s = this.getRadioValue(e.target.name));
                        const a = t.getFieldAction(s);
                        0 === a ? this.showField(i) : 1 === a && this.hideField(i)
                    }))
                }))
            }))
        }, this.setUp = function() {
            if (this.libauth_enabled && !this.libauth_authed) {
                if (this.questionform.$form[0].querySelectorAll("input,select,button,textarea").forEach((t => {
                        t.disabled = !0
                    })), this.questionform.$form[0].querySelectorAll('[tabindex="0"],a').forEach((t => {
                        t.setAttribute("tabindex", "-1")
                    })), this.questionform.$form[0].setAttribute("aria-hidden", "true"), window !== window.top) {
                    const t = document.querySelector(`${this.divselector} .btn-libauth`);
                    t && t.setAttribute("target", "_blank")
                }
                return
            }
            this.setUpRules();
            const t = this.questionform.$form[0].querySelectorAll("input[type=checkbox][required]");
            t.length > 0 && Array.prototype.forEach.call(t, (function(t) {
                t.addEventListener("change", this.handleRequiredCheckBoxes.bind(this))
            }), this), this.captcha_enabled && this.loadCaptcha()
        }, this.setUp()
    }
}(window);
class QueryLog {
    constructor({
        qlog_id: t = 0,
        group_id: e = 0,
        query: i = ""
    }) {
        this.qlog_id = t, this.group_id = e, this.first_search_saved = this.qlog_id > 0, this.query = i
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
        }).done((t => {
            t.qlog_id && (this.qlog_id = t.qlog_id)
        })))
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
        i = {
            id: 0,
            iid: 0,
            apiDomain: "",
            groupId: 0,
            form: null,
            limit: 10,
            autocomplete: null,
            autcompleteDataFormatCb: function(t) {
                var e = [];
                return t.results.forEach((function(t) {
                    t.label = t.question, e.push(t)
                })), e
            },
            autocompleteSelectCb: function(t) {
                var e = this.form.querySelector("input[name=faqid]");
                null === e && ((e = document.createElement("input")).setAttribute("type", "hidden"), e.setAttribute("name", "faqid"), this.form.insertBefore(e, this.form.firstChild)), e.value = t.getAttribute("data-faqid"), this.form.submit()
            },
            enableAutocomplete: function() {
                try {
                    this.autocomplete = e({
                        inputSelector: "#s-la-content-search-query-" + this.id,
                        queryUrl: "https://" + this.apiDomain + "/1.0/faqsearch/",
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
        },
        s = function(t) {
            var e = Object.create(i);
            return e.init(t), e
        };
    "undefined" != typeof module ? module.exports = s : (t.springSpace = this.springSpace || {}, t.springSpace.la = this.springSpace.la || {}, t.springSpace.la.initFaqSearchForm = s)
}(this), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return t < 10 ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, (function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var i, s, a, n, r, o = gap,
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
                    if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (n = l.length, i = 0; i < n; i += 1) r[i] = str(i, l) || "null";
                        return a = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + o + "]" : "[" + r.join(",") + "]", gap = o, a
                    }
                    if (rep && "object" == typeof rep)
                        for (n = rep.length, i = 0; i < n; i += 1) "string" == typeof rep[i] && ((a = str(s = rep[i], l)) && r.push(quote(s) + (gap ? ": " : ":") + a));
                    else
                        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && ((a = str(s, l)) && r.push(quote(s) + (gap ? ": " : ":") + a));
                    return a = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + o + "}" : "{" + r.join(",") + "}", gap = o, a
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
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
            var s;
            if (gap = "", indent = "", "number" == typeof i)
                for (s = 0; s < i; s += 1) indent += " ";
            else "string" == typeof i && (indent = i);
            if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
                "": t
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var i, s, a = t[e];
                if (a && "object" == typeof a)
                    for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (s = walk(a, i)) ? a[i] = s : delete a[i]);
                return reviver.call(t, e, a)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(t, e) {
        "use strict";
        var i = t.History = t.History || {},
            s = t.jQuery;
        if (void 0 !== i.Adapter) throw new Error("History.js Adapter has already been loaded...");
        i.Adapter = {
            bind: function(t, e, i) {
                s(t).bind(e, i)
            },
            trigger: function(t, e, i) {
                s(t).trigger(e, i)
            },
            extractEventData: function(t, e, i) {
                return e && e.originalEvent && e.originalEvent[t] || i && i[t] || undefined
            },
            onDomLoad: function(t) {
                s(t)
            }
        }, void 0 !== i.init && i.init()
    }(window),
    function(t, e) {
        "use strict";
        var i = t.document,
            s = t.setTimeout || s,
            a = t.clearTimeout || a,
            n = t.setInterval || n,
            r = t.History = t.History || {};
        if (void 0 !== r.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        r.initHtml4 = function() {
            if (void 0 !== r.initHtml4.initialized) return !1;
            r.initHtml4.initialized = !0, r.enabled = !0, r.savedHashes = [], r.isLastHash = function(t) {
                return t === r.getHashByIndex()
            }, r.isHashEqual = function(t, e) {
                return (t = encodeURIComponent(t).replace(/%25/g, "%")) === (e = encodeURIComponent(e).replace(/%25/g, "%"))
            }, r.saveHash = function(t) {
                return !r.isLastHash(t) && (r.savedHashes.push(t), !0)
            }, r.getHashByIndex = function(t) {
                return void 0 === t ? r.savedHashes[r.savedHashes.length - 1] : t < 0 ? r.savedHashes[r.savedHashes.length + t] : r.savedHashes[t]
            }, r.discardedHashes = {}, r.discardedStates = {}, r.discardState = function(t, e, i) {
                var s, a = r.getHashByState(t);
                return s = {
                    discardedState: t,
                    backState: i,
                    forwardState: e
                }, r.discardedStates[a] = s, !0
            }, r.discardHash = function(t, e, i) {
                var s = {
                    discardedHash: t,
                    backState: i,
                    forwardState: e
                };
                return r.discardedHashes[t] = s, !0
            }, r.discardedState = function(t) {
                var e = r.getHashByState(t);
                return r.discardedStates[e] || !1
            }, r.discardedHash = function(t) {
                return r.discardedHashes[t] || !1
            }, r.recycleState = function(t) {
                var e = r.getHashByState(t);
                return r.discardedState(t) && delete r.discardedStates[e], !0
            }, r.emulated.hashChange && (r.hashChangeInit = function() {
                r.checkerFunction = null;
                var e, s, a, o = "",
                    l = Boolean(r.getHash());
                return r.isInternetExplorer() ? ("historyjs-iframe", (e = i.createElement("iframe")).setAttribute("id", "historyjs-iframe"), e.setAttribute("src", "#"), e.style.display = "none", i.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), s = "", a = !1, r.checkerFunction = function() {
                    if (a) return !1;
                    a = !0;
                    var i = r.getHash(),
                        n = r.getHash(e.contentWindow.document);
                    return i !== o ? (o = i, n !== i && (s = n = i, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = r.escapeHash(i)), r.Adapter.trigger(t, "hashchange")) : n !== s && (s = n, l && "" === n ? r.back() : r.setHash(n, !1)), a = !1, !0
                }) : r.checkerFunction = function() {
                    var e = r.getHash() || "";
                    return e !== o && (o = e, r.Adapter.trigger(t, "hashchange")), !0
                }, r.intervalList.push(n(r.checkerFunction, r.options.hashChangeInterval)), !0
            }, r.Adapter.onDomLoad(r.hashChangeInit)), r.emulated.pushState && (r.onHashChange = function(e) {
                var i, s = e && e.newURL || r.getLocationHref(),
                    a = r.getHashByUrl(s),
                    n = null;
                return r.isLastHash(a) ? (r.busy(!1), !1) : (r.doubleCheckComplete(), r.saveHash(a), a && r.isTraditionalAnchor(a) ? (r.Adapter.trigger(t, "anchorchange"), r.busy(!1), !1) : (n = r.extractState(r.getFullUrl(a || r.getLocationHref()), !0), r.isLastSavedState(n) ? (r.busy(!1), !1) : (r.getHashByState(n), (i = r.discardedState(n)) ? (r.getHashByIndex(-2) === r.getHashByState(i.forwardState) ? r.back(!1) : r.forward(!1), !1) : (r.pushState(n.data, n.title, encodeURI(n.url), !1), !0))))
            }, r.Adapter.bind(t, "hashchange", r.onHashChange), r.pushState = function(e, i, s, a) {
                if (s = encodeURI(s).replace(/%25/g, "%"), r.getHashByUrl(s)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== a && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.pushState,
                    args: arguments,
                    queue: a
                }), !1;
                r.busy(!0);
                var n = r.createStateObject(e, i, s),
                    o = r.getHashByState(n),
                    l = r.getState(!1),
                    c = r.getHashByState(l),
                    d = r.getHash(),
                    u = r.expectedStateId == n.id;
                return r.storeState(n), r.expectedStateId = n.id, r.recycleState(n), r.setTitle(n), o === c ? (r.busy(!1), !1) : (r.saveState(n), u || r.Adapter.trigger(t, "statechange"), !r.isHashEqual(o, d) && !r.isHashEqual(o, r.getShortUrl(r.getLocationHref())) && r.setHash(o, !1), r.busy(!1), !0)
            }, r.replaceState = function(e, i, s, a) {
                if (s = encodeURI(s).replace(/%25/g, "%"), r.getHashByUrl(s)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== a && r.busy()) return r.pushQueue({
                    scope: r,
                    callback: r.replaceState,
                    args: arguments,
                    queue: a
                }), !1;
                r.busy(!0);
                var n = r.createStateObject(e, i, s),
                    o = r.getHashByState(n),
                    l = r.getState(!1),
                    c = r.getHashByState(l),
                    d = r.getStateByIndex(-2);
                return r.discardState(l, n, d), o === c ? (r.storeState(n), r.expectedStateId = n.id, r.recycleState(n), r.setTitle(n), r.saveState(n), r.Adapter.trigger(t, "statechange"), r.busy(!1)) : r.pushState(n.data, n.title, n.url, !1), !0
            }), r.emulated.pushState && r.getHash() && !r.emulated.hashChange && r.Adapter.onDomLoad((function() {
                r.Adapter.trigger(t, "hashchange")
            }))
        }, void 0 !== r.init && r.init()
    }(window),
    function(t, e) {
        "use strict";
        var i = t.console || e,
            s = t.document,
            a = t.navigator,
            n = t.sessionStorage || !1,
            r = t.setTimeout,
            o = t.clearTimeout,
            l = t.setInterval,
            c = t.clearInterval,
            d = t.JSON,
            u = t.alert,
            h = t.History = t.History || {},
            p = t.history;
        try {
            n.setItem("TEST", "1"), n.removeItem("TEST")
        } catch (t) {
            n = !1
        }
        if (d.stringify = d.stringify || d.encode, d.parse = d.parse || d.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
        h.init = function(t) {
            return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
        }, h.initCore = function(f) {
            if (void 0 !== h.initCore.initialized) return !1;
            if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || s.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                    var t, e = h.intervalList;
                    if (null != e) {
                        for (t = 0; t < e.length; t++) c(e[t]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    h.options.debug && h.log.apply(h, arguments)
                }, h.log = function() {
                    var t, e, a, n, r, o = void 0 !== i && void 0 !== i.log && void 0 !== i.log.apply,
                        l = s.getElementById("log");
                    for (o ? (t = (n = Array.prototype.slice.call(arguments)).shift(), void 0 !== i.debug ? i.debug.apply(i, [t, n]) : i.log.apply(i, [t, n])) : t = "\n" + arguments[0] + "\n", e = 1, a = arguments.length; e < a; ++e) {
                        if ("object" == typeof(r = arguments[e]) && void 0 !== d) try {
                            r = d.stringify(r)
                        } catch (t) {}
                        t += "\n" + r + "\n"
                    }
                    return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : o || u(t), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    var t = h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                        for (var t = 3, e = s.createElement("div"), i = e.getElementsByTagName("i");
                            (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && i[0];);
                        return t > 4 && t
                    }();
                    return t
                }, h.isInternetExplorer = function() {
                    return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
                }, h.options.html4Mode ? h.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : h.emulated = {
                    pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(a.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(a.userAgent)),
                    hashChange: Boolean(!("onhashchange" in t || "onhashchange" in s) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === a.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)),
                    safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === a.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                }, h.isEmptyObject = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }, h.cloneObject = function(t) {
                    var e, i;
                    return t ? (e = d.stringify(t), i = d.parse(e)) : i = {}, i
                }, h.getRootUrl = function() {
                    var t = s.location.protocol + "//" + (s.location.hostname || s.location.host);
                    return s.location.port && (t += ":" + s.location.port), t += "/"
                }, h.getBaseHref = function() {
                    var t = s.getElementsByTagName("base"),
                        e = "";
                    return 1 === t.length && (e = t[0].href.replace(/[^\/]+$/, "")), (e = e.replace(/\/+$/, "")) && (e += "/"), e
                }, h.getBaseUrl = function() {
                    return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
                }, h.getPageUrl = function() {
                    var t;
                    return t = ((h.getState(!1, !1) || {}).url || h.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, (function(t, e, i) {
                        return /\./.test(t) ? t : t + "/"
                    })), t
                }, h.getBasePageUrl = function() {
                    return h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, (function(t, e, i) {
                        return /[^\/]$/.test(t) ? "" : t
                    })).replace(/\/+$/, "") + "/"
                }, h.getFullUrl = function(t, e) {
                    var i = t,
                        s = t.substring(0, 1);
                    return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (i = "/" === s ? h.getRootUrl() + t.replace(/^\/+/, "") : "#" === s ? h.getPageUrl().replace(/#.*/, "") + t : "?" === s ? h.getPageUrl().replace(/[\?#].*/, "") + t : e ? h.getBaseUrl() + t.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "")
                }, h.getShortUrl = function(t) {
                    var e = t,
                        i = h.getBaseUrl(),
                        s = h.getRootUrl();
                    return h.emulated.pushState && (e = e.replace(i, "")), e = e.replace(s, "/"), h.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, h.getLocationHref = function(t) {
                    return (t = t || s).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash || -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var i = h.getLastSavedState();
                    return !i && e && (i = h.createStateObject()), t && ((i = h.cloneObject(i)).url = i.cleanUrl || i.url), i
                }, h.getIdByState = function(t) {
                    var e, i = h.extractId(t.url);
                    if (!i)
                        if (e = h.getStateString(t), void 0 !== h.stateToId[e]) i = h.stateToId[e];
                        else if (void 0 !== h.store.stateToId[e]) i = h.store.stateToId[e];
                    else {
                        for (; i = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== h.idToState[i] || void 0 !== h.store.idToState[i];);
                        h.stateToId[e] = i, h.idToState[i] = t
                    }
                    return i
                }, h.normalizeState = function(t) {
                    var e, i;
                    return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = {}).normalized = !0, e.title = t.title || "", e.url = h.getFullUrl(t.url ? t.url : h.getLocationHref()), e.hash = h.getShortUrl(e.url), e.data = h.cloneObject(t.data), e.id = h.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !h.isEmptyObject(e.data), (e.title || i) && !0 !== h.options.disableSuid && (e.hash = h.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = h.getFullUrl(e.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                }, h.createStateObject = function(t, e, i) {
                    var s = {
                        data: t,
                        title: e,
                        url: i
                    };
                    return s = h.normalizeState(s)
                }, h.getStateById = function(t) {
                    return t = String(t), h.idToState[t] || h.store.idToState[t] || e
                }, h.getStateString = function(t) {
                    var e;
                    return e = {
                        data: h.normalizeState(t).data,
                        title: t.title,
                        url: t.url
                    }, d.stringify(e)
                }, h.getStateId = function(t) {
                    return h.normalizeState(t).id
                }, h.getHashByState = function(t) {
                    return h.normalizeState(t).hash
                }, h.extractId = function(t) {
                    var e, i;
                    return i = -1 != t.indexOf("#") ? t.split("#")[0] : t, (e = /(.*)\&_suid=([0-9]+)$/.exec(i)) && e[1] || t, (e ? String(e[2] || "") : "") || !1
                }, h.isTraditionalAnchor = function(t) {
                    return !/[\/\?\.]/.test(t)
                }, h.extractState = function(t, e) {
                    var i, s, a = null;
                    return e = e || !1, (i = h.extractId(t)) && (a = h.getStateById(i)), a || (s = h.getFullUrl(t), (i = h.getIdByUrl(s) || !1) && (a = h.getStateById(i)), !a && e && !h.isTraditionalAnchor(t) && (a = h.createStateObject(null, null, s))), a
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
                    var i, a;
                    return !1 !== e && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), (i = h.extractState(t, !0)) && !h.emulated.pushState ? h.pushState(i.data, i.title, i.url, !1) : h.getHash() !== t && (h.bugs.setHash ? (a = h.getPageUrl(), h.pushState(null, null, a + "#" + t, !1)) : s.location.hash = t), h)
                }, h.escapeHash = function(e) {
                    var i = h.normalizeHash(e);
                    return i = t.encodeURIComponent(i), h.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i
                }, h.getHashByUrl = function(t) {
                    var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return e = h.unescapeHash(e)
                }, h.setTitle = function(t) {
                    var e, i = t.title;
                    i || (e = h.getStateByIndex(0)) && e.url === t.url && (i = e.title || h.options.initialTitle);
                    try {
                        s.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (t) {}
                    return s.title = i, h
                }, h.queues = [], h.busy = function(t) {
                    if (void 0 !== t ? h.busy.flag = t : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                        o(h.busy.timeout);
                        var e = function() {
                            var t, i, s;
                            if (!h.busy.flag)
                                for (t = h.queues.length - 1; t >= 0; --t) 0 !== (i = h.queues[t]).length && (s = i.shift(), h.fireQueueItem(s), h.busy.timeout = r(e, h.options.busyDelay))
                        };
                        h.busy.timeout = r(e, h.options.busyDelay)
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
                    return h.doubleChecker && (o(h.doubleChecker), h.doubleChecker = !1), h
                }, h.doubleCheck = function(t) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = r((function() {
                        return h.doubleCheckClear(), h.stateChanged || t(), !0
                    }), h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var e = h.extractState(h.getLocationHref());
                    if (!h.isLastSavedState(e)) return e || h.createStateObject(), h.Adapter.trigger(t, "popstate"), h
                }, h.back = function(t) {
                    return !1 !== t && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), h.doubleCheck((function() {
                        h.back(!1)
                    })), p.go(-1), !0)
                }, h.forward = function(t) {
                    return !1 !== t && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), h.doubleCheck((function() {
                        h.forward(!1)
                    })), p.go(1), !0)
                }, h.go = function(t, e) {
                    var i;
                    if (t > 0)
                        for (i = 1; i <= t; ++i) h.forward(e);
                    else {
                        if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (i = -1; i >= t; --i) h.back(e)
                    }
                    return h
                }, h.emulated.pushState) {
                var g = function() {};
                h.pushState = h.pushState || g, h.replaceState = h.replaceState || g
            } else h.onPopState = function(e, i) {
                var s, a, n = !1,
                    r = !1;
                return h.doubleCheckComplete(), (s = h.getHash()) ? ((a = h.extractState(s || h.getLocationHref(), !0)) ? h.replaceState(a.data, a.title, a.url, !1) : (h.Adapter.trigger(t, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : ((r = (n = h.Adapter.extractEventData("state", e, i) || !1) ? h.getStateById(n) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref())) || (r = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(r) ? (h.busy(!1), !1) : (h.storeState(r), h.saveState(r), h.setTitle(r), h.Adapter.trigger(t, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(t, "popstate", h.onPopState), h.pushState = function(e, i, s, a) {
                if (h.getHashByUrl(s) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== a && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: a
                }), !1;
                h.busy(!0);
                var n = h.createStateObject(e, i, s);
                return h.isLastSavedState(n) ? h.busy(!1) : (h.storeState(n), h.expectedStateId = n.id, p.pushState(n.id, n.title, n.url), h.Adapter.trigger(t, "popstate")), !0
            }, h.replaceState = function(e, i, s, a) {
                if (h.getHashByUrl(s) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== a && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: a
                }), !1;
                h.busy(!0);
                var n = h.createStateObject(e, i, s);
                return h.isLastSavedState(n) ? h.busy(!1) : (h.storeState(n), h.expectedStateId = n.id, p.replaceState(n.id, n.title, n.url), h.Adapter.trigger(t, "popstate")), !0
            };
            if (n) {
                try {
                    h.store = d.parse(n.getItem("History.store")) || {}
                } catch (t) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(t, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), n && (h.onUnload = function() {
                var t, e, i;
                try {
                    t = d.parse(n.getItem("History.store")) || {}
                } catch (e) {
                    t = {}
                }
                for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
                for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
                for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
                h.store = t, h.normalizeStore(), i = d.stringify(t);
                try {
                    n.setItem("History.store", i)
                } catch (t) {
                    if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                    n.length && (n.removeItem("History.store"), n.setItem("History.store", i))
                }
            }, h.intervalList.push(l(h.onUnload, h.options.storeInterval)), h.Adapter.bind(t, "beforeunload", h.onUnload), h.Adapter.bind(t, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== a.vendor && "Mozilla" !== (a.appCodeName || "") || (h.Adapter.bind(t, "hashchange", (function() {
                h.Adapter.trigger(t, "popstate")
            })), h.getHash() && h.Adapter.onDomLoad((function() {
                h.Adapter.trigger(t, "hashchange")
            }))))
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window);
var springSpace = springSpace || {};

function accessibleIcons(t, e) {
    void 0 === e && (e = {}), void 0 !== t && (e.parent = t), springSpace.sui.icontip(e)
}
springSpace.sui = springSpace.sui || {}, springSpace.sui.icontip = function(t) {
    if (void 0 === t && (t = {}), t.parent) e = $(t.parent);
    else var e = $("body");
    t.placement = t.placement ? t.placement : "top", e.find(".fa + .icon-label").each((function(e, i) {
        var s = $(i),
            a = s.html();
        if ("" !== a) {
            if (0 == (n = s.parent("button, a")).length) var n = s.prev(".fa");
            if (1 == n.length) {
                if (n.data && n.data("bs.tooltip")) return;
                n.tooltip({
                    title: a,
                    html: !0,
                    placement: t.placement
                })
            }
        }
    }))
}, jQuery(document).ready((function() {
    var t, e = "[data-toggle=dropdown]";
    $(e).parent().find("ul").attr("role", "menu").find("li").attr("role", "presentation").find("a").attr({
        role: "menuitem",
        tabIndex: "-1"
    }), $(e).attr({
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }), $(e).parent().on("shown.bs.dropdown", (function(i) {
        (t = $(this)).find(e).attr("aria-expanded", "true"), t.children("ul").attr("aria-hidden", !1)
    })), $(e).parent().on("hidden.bs.dropdown", (function(i) {
        (t = $(this)).find(e).attr("aria-expanded", "false"), t.children("ul").attr("aria-hidden", !0)
    })), $.fn.dropdown.Constructor.prototype.keydown = function(t) {
        /(32)/.test(t.keyCode) && ($(this).parent(), $(this).trigger("click"), t.preventDefault() && t.stopPropagation())
    }, $(document).on("focusout.dropdown.data-api", ".dropdown-menu", (function(t) {
        var e = $(this),
            i = this;
        e.hasClass("multiselect-container") || setTimeout((function() {
            $.contains(i, document.activeElement) || (e.parent().removeClass("open"), e.parent().find("[data-toggle=dropdown]").attr("aria-expanded", "false"))
        }), 150)
    })).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", $.fn.dropdown.Constructor.prototype.keydown);
    var i = $(".nav-tabs"),
        s = i.children("li"),
        a = i.find('[data-toggle="tab"], [data-toggle="pill"]');
    a.length > 0 && (i.attr("role", "tablist"), s.attr("role", "presentation"), a.attr("role", "tab")), a.each((function(t) {
        var e = $(this).attr("href"),
            i = "#" === e ? null : $(e),
            s = $(this),
            a = s.attr("id") || ("ui-tab" || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1);
        s.attr("id", a), s.parent().hasClass("active") ? (s.attr({
            tabIndex: "0",
            "aria-selected": "true",
            "aria-controls": s.attr("href").substr(1)
        }), null !== i && i.attr({
            role: "tabpanel",
            tabIndex: "0",
            "aria-hidden": "false",
            "aria-labelledby": a
        })) : (s.attr({
            tabIndex: "-1",
            "aria-selected": "false",
            "aria-controls": s.attr("href").substr(1)
        }), null !== i && i.attr({
            role: "tabpanel",
            tabIndex: "-1",
            "aria-hidden": "true",
            "aria-labelledby": a
        }))
    })), $.fn.tab.Constructor.prototype.keydown = function(t) {
        var e, i, s = $(this),
            a = s.closest("ul[role=tablist] "),
            n = t.which || t.keyCode;
        if (s = $(this), /(37|38|39|40)/.test(n)) {
            i = (e = a.find("[role=tab]:visible")).index(e.filter(":focus")), 38 != n && 37 != n || i--, 39 != n && 40 != n || i++, i < 0 && (i = e.length - 1), i == e.length && (i = 0);
            var r = e.eq(i);
            "tab" === r.attr("role") && r.tab("show").focus(), t.preventDefault(), t.stopPropagation()
        }
    }, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
    var n = $.fn.tab.Constructor.prototype.activate;
    if ($.fn.tab.Constructor.prototype.activate = function(t, e, i) {
            var s = e.find("> .active");
            s.find("[data-toggle=tab]").attr({
                tabIndex: "-1",
                "aria-selected": !1
            }), s.filter(".tab-pane").attr({
                "aria-hidden": !0,
                tabIndex: "-1"
            }), n.apply(this, arguments), t.addClass("active"), t.find("[data-toggle=tab]").attr({
                tabIndex: "0",
                "aria-selected": !0
            }), t.filter(".tab-pane").attr({
                "aria-hidden": !1,
                tabIndex: "0"
            })
        }, springSpace.sui.icontip(), document.location.hash) {
        var r = document.location.hash;
        try {
            $(r).attr("tabindex", -1).on("blur focusout", (function() {
                $(this).removeAttr("tabindex")
            })).focus()
        } catch (t) {}
    }
    $(window).bind("hashchange", (function() {
        var t = "#" + window.location.hash.replace(/^#/, "");
        "#" != t ? $(t).attr("tabindex", -1).on("blur focusout", (function() {
            $(this).removeAttr("tabindex")
        })).focus() : $("body").attr("tabindex", -1).on("blur focusout", (function() {
            $(this).removeAttr("tabindex")
        })).focus()
    })), $.fn.modal.Constructor.prototype.enforceFocus = function() {
        modal_this = this, $(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(t) {
            modal_this.$element[0] === t.target || modal_this.$element.has(t.target).length || $(t.target).closest(".cke_dialog, .cke").length || modal_this.$element.focus()
        }))
    }
}));
//# sourceMappingURL=maps/LibAnswers_public.min.js.map