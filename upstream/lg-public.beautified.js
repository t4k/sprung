/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(n) {
    "use strict";
    n.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        n(this).one("bsTransitionEnd", function() {
            e = !0
        });
        return setTimeout(function() {
            e || n(i).trigger(n.support.transition.end)
        }, t), this
    }, n(function() {
        n.support.transition = function o() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (t.style[i] !== undefined) return {
                    end: e[i]
                };
            return !1
        }(), n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(s) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        a = function(t) {
            s(t).on("click", e, this.close)
        };
    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        var e = s(this),
            i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
        var o = s(document).find(i);

        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n())
    };
    var t = s.fn.alert;
    s.fn.alert = function o(i) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t)
        })
    }, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function() {
        return s.fn.alert = t, this
    }, s(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(s) {
    "use strict";
    var n = function(t, e) {
        this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1
    };

    function i(o) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.button"),
                i = "object" == typeof o && o;
            e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o)
        })
    }
    n.VERSION = "3.4.1", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            n = i.data();
        t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function() {
            i[o](null == n[t] ? this.options[t] : n[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var t = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function() {
        return s.fn.button = t, this
    }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = s(t.target).closest(".btn");
        i.call(e, "toggle"), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(p) {
    "use strict";
    var c = function(t, e) {
        this.$element = p(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this))
    };

    function r(n) {
        return this.each(function() {
            var t = p(this),
                e = t.data("bs.carousel"),
                i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : i.slide;
            e || t.data("bs.carousel", e = new c(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle()
        })
    }
    c.VERSION = "3.4.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(t) {
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
    }, c.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, c.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, c.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, c.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active"),
            o = e || this.getItemForDirection(t, i),
            n = this.interval,
            s = "next" == t ? "left" : "right",
            a = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var r = o[0],
            l = p.Event("slide.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = p(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var d = p.Event("slid.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
            return p.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), "object" == typeof o && o.length && o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function() {
                    a.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this
        }
    };
    var t = p.fn.carousel;
    p.fn.carousel = r, p.fn.carousel.Constructor = c, p.fn.carousel.noConflict = function() {
        return p.fn.carousel = t, this
    };
    var e = function(t) {
        var e = p(this),
            i = e.attr("href");
        i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
        var o = e.attr("data-target") || i,
            n = p(document).find(o);
        if (n.hasClass("carousel")) {
            var s = p.extend({}, n.data(), e.data()),
                a = e.attr("data-slide-to");
            a && (s.interval = !1), r.call(n, s), a && n.data("bs.carousel").to(a), t.preventDefault()
        }
    };
    p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), p(window).on("load", function() {
        p('[data-ride="carousel"]').each(function() {
            var t = p(this);
            r.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    var r = function(t, e) {
        this.$element = a(t), this.options = a.extend({}, r.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function n(t) {
        var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return a(document).find(i)
    }

    function l(o) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.collapse"),
                i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
            !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new r(this, i)), "string" == typeof o && e[o]()
        })
    }
    r.VERSION = "3.4.1", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
        toggle: !0
    }, r.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                var i = a.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var n = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return n.call(this);
                    var s = a.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = a.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!a.support.transition) return i.call(this);
                this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)
            }
        }
    }, r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function() {
        return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(t, e) {
            var i = a(e);
            this.addAriaAndCollapsedClass(n(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = a.fn.collapse;
    a.fn.collapse = l, a.fn.collapse.Constructor = r, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = t, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = a(this);
        e.attr("data-target") || t.preventDefault();
        var i = n(e),
            o = i.data("bs.collapse") ? "toggle" : e.data();
        l.call(i, o)
    })
}(jQuery),
function(a) {
    "use strict";
    var r = '[data-toggle="dropdown"]',
        o = function(t) {
            a(t).on("click.bs.dropdown", this.toggle)
        };

    function l(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== e ? a(document).find(e) : null;
        return i && i.length ? i : t.parent()
    }

    function s(o) {
        o && 3 === o.which || (a(".dropdown-backdrop").remove(), a(r).each(function() {
            var t = a(this),
                e = l(t),
                i = {
                    relatedTarget: this
                };
            e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && a.contains(e[0], o.target) || (e.trigger(o = a.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", i)))))
        }))
    }
    o.VERSION = "3.4.1", o.prototype.toggle = function(t) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var i = l(e),
                o = i.hasClass("open");
            if (s(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", s);
                var n = {
                    relatedTarget: this
                };
                if (i.trigger(t = a.Event("show.bs.dropdown", n)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(a.Event("shown.bs.dropdown", n))
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = a(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = l(e),
                    o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(r).trigger("focus"), e.trigger("click");
                var n = i.find(".dropdown-menu li:not(.disabled):visible a");
                if (n.length) {
                    var s = n.index(t.target);
                    38 == t.which && 0 < s && s--, 40 == t.which && s < n.length - 1 && s++, ~s || (s = 0), n.eq(s).trigger("focus")
                }
            }
        }
    };
    var t = a.fn.dropdown;
    a.fn.dropdown = function e(i) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t)
        })
    }, a.fn.dropdown.Constructor = o, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = t, this
    }, a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(a) {
    "use strict";
    var s = function(t, e) {
        this.options = e, this.$body = a(document.body), this.$element = a(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };

    function r(o, n) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.modal"),
                i = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new s(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n)
        })
    }
    s.VERSION = "3.4.1", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, s.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, s.prototype.show = function(i) {
        var o = this,
            t = a.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(t) {
                a(t.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var t = a.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(s.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }, s.prototype.hide = function(t) {
        t && t.preventDefault(), t = a.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal())
    }, s.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, s.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, s.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, s.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, s.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, s.prototype.backdrop = function(t) {
        var e = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = a.support.transition && i;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function() {
                e.removeBackdrop(), t && t()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : n()
        } else t && t()
    }, s.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, s.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, s.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, s.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, s.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", t + n), a(this.fixedContent).each(function(t, e) {
            var i = e.style.paddingRight,
                o = a(e).css("padding-right");
            a(e).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px")
        }))
    }, s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), a(this.fixedContent).each(function(t, e) {
            var i = a(e).data("padding-right");
            a(e).removeData("padding-right"), e.style.paddingRight = i || ""
        })
    }, s.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = a.fn.modal;
    a.fn.modal = r, a.fn.modal.Constructor = s, a.fn.modal.noConflict = function() {
        return a.fn.modal = t, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = a(this),
            i = e.attr("href"),
            o = e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
            n = a(document).find(o),
            s = n.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(i) && i
            }, n.data(), e.data());
        e.is("a") && t.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }), r.call(n, s, this)
    })
}(jQuery),
function(g) {
    "use strict";
    var o = ["sanitize", "whiteList", "sanitizeFn"],
        a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        t = {
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
        l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function u(t, e) {
        var i = t.nodeName.toLowerCase();
        if (-1 !== g.inArray(i, e)) return -1 === g.inArray(i, a) || Boolean(t.nodeValue.match(r) || t.nodeValue.match(l));
        for (var o = g(e).filter(function(t, e) {
                return e instanceof RegExp
            }), n = 0, s = o.length; n < s; n++)
            if (i.match(o[n])) return !0;
        return !1
    }

    function n(t, e, i) {
        if (0 === t.length) return t;
        if (i && "function" == typeof i) return i(t);
        if (!document.implementation || !document.implementation.createHTMLDocument) return t;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = t;
        for (var n = g.map(e, function(t, e) {
                return e
            }), s = g(o.body).find("*"), a = 0, r = s.length; a < r; a++) {
            var l = s[a],
                h = l.nodeName.toLowerCase();
            if (-1 !== g.inArray(h, n))
                for (var d = g.map(l.attributes, function(t) {
                        return t
                    }), p = [].concat(e["*"] || [], e[h] || []), c = 0, f = d.length; c < f; c++) u(d[c], p) || l.removeAttribute(d[c].nodeName);
            else l.parentNode.removeChild(l)
        }
        return o.body.innerHTML
    }
    var m = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    m.VERSION = "3.4.1", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
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
        whiteList: t
    }, m.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && g(document).find(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var s = o[n];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    r = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = g.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, m.prototype.getDefaults = function() {
        return m.DEFAULTS
    }, m.prototype.getOptions = function(t) {
        var e = this.$element.data();
        for (var i in e) e.hasOwnProperty(i) && -1 !== g.inArray(i, o) && delete e[i];
        return (t = g.extend({}, this.getDefaults(), e, t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t.sanitize && (t.template = n(t.template, t.whiteList, t.sanitizeFn)), t
    }, m.prototype.getDelegateOptions = function() {
        var i = {},
            o = this.getDefaults();
        return this._options && g.each(this._options, function(t, e) {
            o[t] != e && (i[t] = e)
        }), i
    }, m.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
        else {
            if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
            e.timeout = setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, e.options.delay.show)
        }
    }, m.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, m.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
            if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
            e.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, e.options.delay.hide)
        }
    }, m.prototype.show = function() {
        var t = g.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this,
                o = this.tip(),
                n = this.getUID(this.type);
            this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                r = a.test(s);
            r && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(g(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(),
                h = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (r) {
                var p = s,
                    c = this.getPosition(this.$viewport);
                s = "bottom" == s && l.bottom + d > c.bottom ? "top" : "top" == s && l.top - d < c.top ? "bottom" : "right" == s && l.right + h > c.width ? "left" : "left" == s && l.left - h < c.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var f = this.getCalculatedOffset(s, l, h, d);
            this.applyPlacement(f, s);
            var u = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            g.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(m.TRANSITION_DURATION) : u()
        }
    }, m.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            n = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, g.offset.setOffset(i[0], g.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != n && (t.top = t.top + n - l);
        var h = this.getViewportAdjustedDelta(e, t, r, l);
        h.left ? t.left += h.left : t.top += h.top;
        var d = /top|bottom/.test(e),
            p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
            c = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][c], d)
    }, m.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, m.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, m.prototype.hide = function(t) {
        var e = this,
            i = g(this.$tip),
            o = g.Event("hide.bs." + this.type);

        function n() {
            "in" != e.hoverState && i.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t()
        }
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(m.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, m.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, m.prototype.hasContent = function() {
        return this.getTitle()
    }, m.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            o = e.getBoundingClientRect();
        null == o.width && (o = g.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var n = window.SVGElement && e instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : n ? null : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            r = i ? {
                width: g(window).width(),
                height: g(window).height()
            } : null;
        return g.extend({}, o, a, r, s)
    }, m.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, m.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, m.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, m.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, m.prototype.tip = function() {
        if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, m.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, m.prototype.enable = function() {
        this.enabled = !0
    }, m.prototype.disable = function() {
        this.enabled = !1
    }, m.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, m.prototype.toggle = function(t) {
        var e = this;
        t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, m.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    }, m.prototype.sanitizeHtml = function(t) {
        return n(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var e = g.fn.tooltip;
    g.fn.tooltip = function i(o) {
        return this.each(function() {
            var t = g(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof o && e[o]())
        })
    }, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function() {
        return g.fn.tooltip = e, this
    }
}(jQuery),
function(n) {
    "use strict";
    var s = function(t, e) {
        this.init("popover", t, e)
    };
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.4.1", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
        return s.DEFAULTS
    }, s.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        if (this.options.html) {
            var o = typeof i;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === o && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === o ? "html" : "append"](i)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var t = n.fn.popover;
    n.fn.popover = function e(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.popover"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]())
        })
    }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function() {
        return n.fn.popover = t, this
    }
}(jQuery),
function(s) {
    "use strict";

    function n(t, e) {
        this.$body = s(document.body), this.$scrollElement = s(t).is(document.body) ? s(window) : s(t), this.options = s.extend({}, n.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(o) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new n(this, i)), "string" == typeof o && e[o]()
        })
    }
    n.VERSION = "3.4.1", n.DEFAULTS = {
        offset: 10
    }, n.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, n.prototype.refresh = function() {
        var t = this,
            o = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (o = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = s(this),
                e = t.data("target") || t.attr("href"),
                i = /^#./.test(e) && s(e);
            return i && i.length && i.is(":visible") && [
                [i[o]().top + n, e]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, n.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (n[t + 1] === undefined || e < n[t + 1]) && this.activate(s[t])
    }, n.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = s(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, n.prototype.clear = function() {
        s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = s.fn.scrollspy;
    s.fn.scrollspy = e, s.fn.scrollspy.Constructor = n, s.fn.scrollspy.noConflict = function() {
        return s.fn.scrollspy = t, this
    }, s(window).on("load.bs.scrollspy.data-api", function() {
        s('[data-spy="scroll"]').each(function() {
            var t = s(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(r) {
    "use strict";
    var a = function(t) {
        this.element = r(t)
    };

    function e(i) {
        return this.each(function() {
            var t = r(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new a(this)), "string" == typeof i && e[i]()
        })
    }
    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = e.find(".active:last a"),
                n = r.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = r.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var a = r(document).find(i);
                this.activate(t.closest("li"), e), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, a.prototype.activate = function(t, e, i) {
        var o = e.find("> .active"),
            n = i && r.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);

        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var t = r.fn.tab;
    r.fn.tab = e, r.fn.tab.Constructor = a, r.fn.tab.noConflict = function() {
        return r.fn.tab = t, this
    };
    var i = function(t) {
        t.preventDefault(), e.call(r(this), "show")
    };
    r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(l) {
    "use strict";
    var h = function(t, e) {
        this.options = l.extend({}, h.DEFAULTS, e);
        var i = this.options.target === h.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);
        this.$target = i.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function i(o) {
        return this.each(function() {
            var t = l(this),
                e = t.data("bs.affix"),
                i = "object" == typeof o && o;
            e || t.data("bs.affix", e = new h(this, i)), "string" == typeof o && e[o]()
        })
    }
    h.VERSION = "3.4.1", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top;
        return null != i && n <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom"
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(h.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, h.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                o = e.bottom,
                n = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
            var s = this.getState(n, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (s ? "-" + s : ""),
                    r = l.Event(a + ".bs.affix");
                if (this.$element.trigger(r), r.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: n - t - o
            })
        }
    };
    var t = l.fn.affix;
    l.fn.affix = i, l.fn.affix.Constructor = h, l.fn.affix.noConflict = function() {
        return l.fn.affix = t, this
    }, l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var t = l(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery);
/*! bootstrap-accessibility-plugin - v1.0.4 - 2014-11-03
 * https://github.com/paypal/bootstrap-accessibility-plugin
 * Copyright (c) 2014 PayPal Accessibility Team; Licensed BSD */
! function($) {
    "use strict";
    var uniqueId = function(prefix) {
            return (prefix || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1)
        },
        removeMultiValAttributes = function(el, attr, val) {
            var describedby = (el.attr(attr) || "").split(/\s+/),
                index = $.inArray(val, describedby); - 1 !== index && describedby.splice(index, 1), describedby = $.trim(describedby.join(" ")), describedby ? el.attr(attr, describedby) : el.removeAttr(attr)
        },
        focusable = function(element, isTabIndexNotNaN) {
            var map, mapName, img, nodeName = element.nodeName.toLowerCase();
            return "area" === nodeName ? (map = element.parentNode, mapName = map.name, element.href && mapName && "map" === map.nodeName.toLowerCase() ? (img = $("img[usemap='#" + mapName + "']")[0], !!img && visible(img)) : !1) : (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element)
        },
        visible = function(element) {
            return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function() {
                return "hidden" === $.css(this, "visibility")
            }).length
        };
    $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) {
            return function(elem) {
                return !!$.data(elem, dataName)
            }
        }) : function(elem, i, match) {
            return !!$.data(elem, match[3])
        },
        focusable: function(element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")))
        },
        tabbable: function(element) {
            var tabIndex = $.attr(element, "tabindex"),
                isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN)
        }
    }), $(".alert").attr("role", "alert"), $(".close").removeAttr("aria-hidden").wrapInner('<span aria-hidden="true"></span>').append('<span class="sr-only">Close</span>');
    var showTooltip = $.fn.tooltip.Constructor.prototype.show,
        hideTooltip = $.fn.tooltip.Constructor.prototype.hide;
    $.fn.tooltip.Constructor.prototype.show = function() {
        showTooltip.apply(this, arguments);
        var $tip = this.tip(),
            tooltipID = $tip.attr("id") || uniqueId("ui-tooltip");
        $tip.attr({
            role: "tooltip",
            id: tooltipID
        }), this.$element.attr("aria-describedby", tooltipID)
    }, $.fn.tooltip.Constructor.prototype.hide = function() {
        return hideTooltip.apply(this, arguments), removeMultiValAttributes(this.$element, "aria-describedby", this.tip().attr("id")), this
    };
    var showPopover = $.fn.popover.Constructor.prototype.setContent,
        hidePopover = $.fn.popover.Constructor.prototype.hide;
    $.fn.popover.Constructor.prototype.setContent = function() {
        showPopover.apply(this, arguments);
        var $tip = this.tip(),
            tooltipID = $tip.attr("id") || uniqueId("ui-tooltip");
        $tip.attr({
            role: "alert",
            id: tooltipID
        }), this.$element.attr("aria-describedby", tooltipID), this.$element.focus()
    }, $.fn.popover.Constructor.prototype.hide = function() {
        return hidePopover.apply(this, arguments), removeMultiValAttributes(this.$element, "aria-describedby", this.tip().attr("id")), this
    }, $(".modal-dialog").attr({
        role: "document"
    });
    var modalhide = $.fn.modal.Constructor.prototype.hide;
    $.fn.modal.Constructor.prototype.hide = function() {
        var modalOpener = this.$element.parent().find('[data-target="#' + this.$element.attr("id") + '"]');
        modalhide.apply(this, arguments), modalOpener.focus(), $(document).off("keydown.bs.modal")
    };
    var modalfocus = $.fn.modal.Constructor.prototype.enforceFocus;
    $.fn.modal.Constructor.prototype.enforceFocus = function() {
        var focEls = this.$element.find(":tabbable"),
            lastEl = focEls[focEls.length - 1];
        $(document).on("keydown.bs.modal", $.proxy(function(ev) {
            !this.$element.has(ev.target).length && ev.shiftKey && 9 === ev.keyCode && (lastEl.focus(), ev.preventDefault())
        }, this)), modalfocus.apply(this, arguments)
    };
    var $par, firstItem, toggle = "[data-toggle=dropdown]",
        focusDelay = 200,
        menus = $(toggle).parent().find("ul").attr("role", "menu"),
        lis = menus.find("li").attr("role", "presentation");
    lis.find("a").attr({
        role: "menuitem",
        tabIndex: "-1"
    }), $(toggle).attr({
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }), $(toggle).parent().on("shown.bs.dropdown", function() {
        $par = $(this);
        var $toggle = $par.find(toggle);
        $toggle.attr("aria-expanded", "true"), setTimeout(function() {
            firstItem = $(".dropdown-menu [role=menuitem]:visible", $par)[0];
            try {
                firstItem.focus()
            } catch (ex) {}
        }, focusDelay)
    }), $(toggle).parent().on("hidden.bs.dropdown", function() {
        $par = $(this);
        var $toggle = $par.find(toggle);
        $toggle.attr("aria-expanded", "false")
    }), $.fn.dropdown.Constructor.prototype.keydown = function(e) {
        var $par;
        /(32)/.test(e.keyCode) && ($par = $(this).parent(), $(this).trigger("click"), e.preventDefault() && e.stopPropagation())
    }, $(document).on("focusout.dropdown.data-api", ".dropdown-menu", function() {
        var $this = $(this),
            that = this;
        setTimeout(function() {
            $.contains(that, document.activeElement) || ($this.parent().removeClass("open"), $this.parent().find("[data-toggle=dropdown]").attr("aria-expanded", "false"))
        }, 150)
    }).on("keydown.bs.dropdown.data-api", toggle + ", [role=menu]", $.fn.dropdown.Constructor.prototype.keydown);
    var $tablist = $(".nav-tabs, .nav-pills"),
        $lis = $tablist.children("li"),
        $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]');
    $tablist.attr("role", "tablist"), $lis.attr("role", "presentation"), $tabs.attr("role", "tab"), $tabs.each(function() {
        var tabpanel = $($(this).attr("href")),
            tab = $(this),
            tabid = tab.attr("id") || uniqueId("ui-tab");
        tab.attr("id", tabid), tab.parent().hasClass("active") ? (tab.attr({
            tabIndex: "0",
            "aria-selected": "true",
            "aria-controls": tab.attr("href").substr(1)
        }), tabpanel.attr({
            role: "tabpanel",
            tabIndex: "0",
            "aria-hidden": "false",
            "aria-labelledby": tabid
        })) : (tab.attr({
            tabIndex: "-1",
            "aria-selected": "false",
            "aria-controls": tab.attr("href").substr(1)
        }), tabpanel.attr({
            role: "tabpanel",
            tabIndex: "-1",
            "aria-hidden": "true",
            "aria-labelledby": tabid
        }))
    }), $.fn.tab.Constructor.prototype.keydown = function(e) {
        var $items, index, $this = $(this),
            $ul = $this.closest("ul[role=tablist] "),
            k = e.which || e.keyCode;
        if ($this = $(this), /(37|38|39|40)/.test(k)) {
            $items = $ul.find("[role=tab]:visible"), index = $items.index($items.filter(":focus")), (38 == k || 37 == k) && index--, (39 == k || 40 == k) && index++, 0 > index && (index = $items.length - 1), index == $items.length && (index = 0);
            var nextTab = $items.eq(index);
            "tab" === nextTab.attr("role") && nextTab.tab("show").focus(), e.preventDefault(), e.stopPropagation()
        }
    }, $(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
    var tabactivate = $.fn.tab.Constructor.prototype.activate;
    $.fn.tab.Constructor.prototype.activate = function(element, container) {
        var $active = container.find("> .active");
        $active.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "-1",
            "aria-selected": !1
        }), $active.filter(".tab-pane").attr({
            "aria-hidden": !0,
            tabIndex: "-1"
        }), tabactivate.apply(this, arguments), element.addClass("active"), element.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "0",
            "aria-selected": !0
        }), element.filter(".tab-pane").attr({
            "aria-hidden": !1,
            tabIndex: "0"
        })
    };
    var $colltabs = $('[data-toggle="collapse"]');
    $colltabs.attr({
        role: "tab",
        "aria-selected": "false",
        "aria-expanded": "false"
    }), $colltabs.each(function() {
        var colltab = $(this),
            collpanel = $(colltab.attr("data-target") ? colltab.attr("data-target") : colltab.attr("href")),
            parent = colltab.attr("data-parent"),
            collparent = parent && $(parent),
            collid = colltab.attr("id") || uniqueId("ui-collapse");
        $(collparent).find("div:not(.collapse,.panel-body), h4").attr("role", "presentation"), colltab.attr("id", collid), collparent && (collparent.attr({
            role: "tablist",
            "aria-multiselectable": "true"
        }), collpanel.hasClass("in") ? (colltab.attr({
            "aria-controls": collpanel.attr("id"),
            "aria-selected": "true",
            "aria-expanded": "true",
            tabindex: "0"
        }), collpanel.attr({
            role: "tabpanel",
            tabindex: "0",
            "aria-labelledby": collid,
            "aria-hidden": "false"
        })) : (colltab.attr({
            "aria-controls": collpanel.attr("id"),
            tabindex: "-1"
        }), collpanel.attr({
            role: "tabpanel",
            tabindex: "-1",
            "aria-labelledby": collid,
            "aria-hidden": "true"
        })))
    });
    var collToggle = $.fn.collapse.Constructor.prototype.toggle;
    $.fn.collapse.Constructor.prototype.toggle = function() {
        var href, prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]');
        if (prevTab) {
            {
                var curTab, prevPanel = prevTab.attr("data-target") || (href = prevTab.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""),
                    $prevPanel = $(prevPanel),
                    $curPanel = this.$element;
                this.$parent
            }
            this.$parent && (curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr("id") + '"]')), collToggle.apply(this, arguments), $.support.transition && this.$element.one($.support.transition.end, function() {
                prevTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: "-1"
                }), $prevPanel.attr({
                    "aria-hidden": "true",
                    tabIndex: "-1"
                }), curTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: "0"
                }), $curPanel.hasClass("in") ? $curPanel.attr({
                    "aria-hidden": "false",
                    tabIndex: "0"
                }) : (curTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), $curPanel.attr({
                    "aria-hidden": "true",
                    tabIndex: "-1"
                }))
            })
        } else collToggle.apply(this, arguments)
    }, $.fn.collapse.Constructor.prototype.keydown = function(e) {
        var $items, index, $this = $(this),
            $tablist = $this.closest("div[role=tablist] "),
            k = e.which || e.keyCode;
        $this = $(this), /(32|37|38|39|40)/.test(k) && (32 == k && $this.click(), $items = $tablist.find("[role=tab]"), index = $items.index($items.filter(":focus")), (38 == k || 37 == k) && index--, (39 == k || 40 == k) && index++, 0 > index && (index = $items.length - 1), index == $items.length && (index = 0), $items.eq(index).focus(), e.preventDefault(), e.stopPropagation())
    }, $(document).on("keydown.collapse.data-api", '[data-toggle="collapse"]', $.fn.collapse.Constructor.prototype.keydown), $(".carousel").each(function() {
        var $this = $(this),
            prev = $this.find('[data-slide="prev"]'),
            next = $this.find('[data-slide="next"]'),
            $options = $this.find(".item"),
            $listbox = $options.parent();
        $this.attr({
            "data-interval": "false",
            "data-wrap": "false"
        }), $listbox.attr("role", "listbox"), $options.attr("role", "option");
        var spanPrev = document.createElement("span");
        spanPrev.setAttribute("class", "sr-only"), spanPrev.innerHTML = "Previous";
        var spanNext = document.createElement("span");
        spanNext.setAttribute("class", "sr-only"), spanNext.innerHTML = "Next", prev.attr("role", "button"), next.attr("role", "button"), prev.append(spanPrev), next.append(spanNext), $options.each(function() {
            var item = $(this);
            item.attr(item.hasClass("active") ? {
                "aria-selected": "true",
                tabindex: "0"
            } : {
                "aria-selected": "false",
                tabindex: "-1"
            })
        })
    });
    var slideCarousel = $.fn.carousel.Constructor.prototype.slide;
    $.fn.carousel.Constructor.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active"),
            $next = next || $active[type]();
        slideCarousel.apply(this, arguments), $active.one($.support.transition.end, function() {
            $active.attr({
                "aria-selected": !1,
                tabIndex: "-1"
            }), $next.attr({
                "aria-selected": !0,
                tabIndex: "0"
            })
        })
    }, $.fn.carousel.Constructor.prototype.keydown = function(e) {
        var index, $this = $(this),
            $ul = $this.closest("div[role=listbox]"),
            $items = $ul.find("[role=option]"),
            $parent = $ul.parent(),
            k = e.which || e.keyCode;
        /(37|38|39|40)/.test(k) && (index = $items.index($items.filter(".active")), (37 == k || 38 == k) && ($parent.carousel("prev"), index--, 0 > index ? index = $items.length - 1 : $this.prev().focus()), (39 == k || 40 == k) && ($parent.carousel("next"), index++, index == $items.length ? index = 0 : $this.one($.support.transition.end, function() {
            $this.next().focus()
        })), e.preventDefault(), e.stopPropagation())
    }, $(document).on("keydown.carousel.data-api", "div[role=option]", $.fn.carousel.Constructor.prototype.keydown)
}(jQuery);
/*! springshare 1.11.0 */

var total_db_count = 0,
    springSpace = springSpace || {};
springSpace.public = {}, springSpace.public._construct = function() {
    function e(e) {
        this.constant = springSpace.Util.setProp(e.constant, null), this.script_name = springSpace.Util.setProp(e.script_name, 0), this.guide_id = springSpace.Util.setProp(e.guide_id, 0), this.page_id = springSpace.Util.setProp(e.page_id, 0), this.guide_friendly_name = springSpace.Util.setProp(e.guide_friendly_name, ""), this.page_friendly_name = springSpace.Util.setProp(e.page_friendly_name, ""), this.system_name = springSpace.Util.setProp(e.system_name, ""), this.customer = springSpace.Util.setProp(e.customer, {
            name: ""
        }), this.login_status = null
    }
    e.prototype.loadHomepageList = function(e) {
        springSpace.Util.setObjProp("nav", "", e), key = springSpace.Util.setProp(e.key, 0), type_id = springSpace.Util.setProp(e.type_id, 0), group_id = springSpace.Util.setProp(e.group_id, 0), owner_id = springSpace.Util.setProp(e.owner_id, 0), type_label = springSpace.Util.setProp(e.type_label, "Guides"), num_cols = springSpace.Util.setProp(e.num_cols, ""), display_sort = springSpace.Util.setProp(e.display_sort, !1), jQuery(".s-lg-index-nav-btn.active > button").removeAttr("aria-pressed"), jQuery(".s-lg-index-nav-btn").removeClass("active"), jQuery("#" + e.button_id).addClass("active"), jQuery("#" + e.button_id + " > button").attr("aria-pressed", "true"), jQuery("#s-lg-guide-list-controls").hide(), jQuery("#" + e.elt_id).html('<div class="bold s-lib-color-lt-grey pad-top-med">Loading...</div>'), springSpace.homepage.current_list !== e.action && (springSpace.homepage.current_list = e.action, springSpace.homepage.current_btn_id = e.button_id, springSpace.homepage.current_button_code = springSpace.homepage.mapButtonEltIdToQSId(e.button_id), springSpace.homepage.current_num_cols = num_cols, springSpace.homepage.current_type_label = type_label || jQuery("#s-lg-index-label").html()), xhr = jQuery.ajax({
            url: "/index_process.php",
            data: {
                action: e.action,
                order: e.order,
                type_id: type_id,
                owner_id: owner_id,
                group_id: group_id,
                num_cols: springSpace.homepage.current_num_cols,
                search: jQuery("#s-lg-guide-search").val()
            },
            type: "GET",
            dataType: "json",
            success: function(t, s, r) {
                if (200 == t.errCode)
                    if (1 == t.data.reload_ui) top.window.document.location.reload();
                    else {
                        if (jQuery("#" + e.elt_id).html(t.data.content), jQuery("#s-lg-index-list-header").html(t.data.list_header), jQuery("#form-group-s-lg-guide-order").toggle(display_sort), jQuery("#s-lg-guide-list-controls").show(), top.window.helptips = new springSpace.sui.helptip({
                                placement: "right"
                            }), e.action == springSpace.publicObj.constant.PROCESSING.ACTION_LOAD_GUIDE_LIST) guide_text = springSpace.publicObj.homeNavButtons[e.action] + " " + jQuery("#s-lg-guide-order option:selected").text();
                        else {
                            var a = springSpace.publicObj.constant.CONTENT.HOME_GUIDES_TITLE || "Guides";
                            guide_text = a + " " + springSpace.publicObj.homeNavButtons[e.action]
                        }
                        document.title = guide_text + " - " + springSpace.publicObj.system_name + " at " + springSpace.publicObj.customer.name, springSpace.homepage.default_list_order = springSpace.homepage.mapGuideSortIdToQSId(e.order), jQuery("#s-lg-guide-order > option[value='" + e.order + "']").prop("selected", !0), springSpace.homepage.processPushState({
                            nav: e.nav
                        }), 172 === e.action && (jQuery(".panel-collapse").on("shown.bs.collapse", (function() {
                            jQuery(".panel-default .panel-heading a").removeAttr("tabindex")
                        })), jQuery(".panel-collapse").on("hidden.bs.collapse", (function() {
                            jQuery(".panel-default .panel-heading a").removeAttr("tabindex")
                        })))
                    }
                else jQuery("#" + e.elt_id).html('<div class="alert alert-danger"><div>Sorry, there was a problem loading the list. ' + errorThrown + "</div><div>Please try again. If the problem persists contact support@springshare.com.</div></div>")
            },
            error: function(t, s, r) {
                jQuery("#" + e.elt_id).html('<div class="alert alert-danger"><div>Sorry, there was a problem loading the list. ' + r + "</div><div>Please try again. If the problem persists contact support@springshare.com.</div></div>")
            }
        })
    }, e.prototype.getAzFilterValues = function(e) {
        return {
            search: e.search ?? this.getSearchTerm(),
            subject_id: e.subject_id ?? this.getSelectValues(".s-lg-sel-subjects"),
            type_id: e.type_id ?? this.getSelectValues(".s-lg-sel-az-types"),
            vendor_id: e.vendor_id ?? this.getSelectValues(".s-lg-sel-az-vendors"),
            access_mode_id: e.access_mode_id ?? this.getSelectValues(".s-lg-sel-az-access-modes"),
            first: e.first ?? "",
            page: e.page ?? 1,
            site_id: e.site_id
        }
    }, e.prototype.addMultiselectChangeListener = function(e) {
        jQuery(e).on("change", (function() {
            jQuery(e).val(jQuery(this).val())
        }))
    }, e.prototype.getSelectValues = function(e) {
        let t = jQuery(e).find(":selected").map((function() {
            return jQuery(this).val()
        })).get();
        return [...new Set(t)].toString()
    }, e.prototype.getSelectTexts = function(e) {
        let t = jQuery(e).find('option[value!=""]:selected').map((function() {
            return jQuery(this).text().replace(/ \(\d+\)/i, "")
        })).get();
        return [...new Set(t)].join("; ")
    }, e.prototype.filterAzByFirst = function(e, t, s) {
        this.quickFilterAzByFirst(e, t, s)
    }, e.prototype.quickFilterAzByFirstBS5 = function(e, t) {
        this.loadAzList(this.getAzFilterValues({
            first: e,
            site_id: t
        }))
    }, e.prototype.quickFilterAzByFirst = function(e, t, s = "") {
        if (springSpace.azList.letter_selected = e, jQuery(".s-lg-az-first").removeClass("bold"), "" === e || "all" === e) return jQuery("#s-lg-az-first-all").addClass("bold"), jQuery("#s-lg-az-results .s-lg-db-panel").toggle(!0), jQuery(".s-lg-az-result-featured").toggle(!0), jQuery("#s-lg-db-name-featured").toggle(jQuery(".s-lg-az-result-featured").length > 0), history.pushState({}, null, location.pathname + encodeURI(this.buildAzQs(this.getAzFilterValues({
            first: ""
        })))), void this.refreshResultCountNumeric(total_db_count);
        jQuery("#s-lg-az-first-" + e).addClass("bold"), jQuery("#s-lg-az-results .s-lg-db-panel").hide(), jQuery(".s-lg-az-result-featured").hide(), "pound" === e && (e = "other"), jQuery("#s-lg-az-name-" + e).show(), jQuery(".s-lg-az-result-featured-" + e).show(), jQuery("#s-lg-db-name-featured").toggle(jQuery(".s-lg-az-result-featured-" + e).length > 0), this.refreshResultCountNumeric(), history.pushState({}, null, location.pathname + encodeURI(this.buildAzQs(this.getAzFilterValues({
            first: e
        }))))
    }, e.prototype.refreshResultCountNumeric = function(e = 0) {
        let t = e;
        0 == t && jQuery("div.s-lg-db-panel:visible").each((function() {
            t += jQuery(this).find(".s-lg-az-result").length
        })), jQuery("#s-lg-az-result-count span.list_count").each((function() {
            jQuery(this).text(t)
        }))
    }, e.prototype.filterAzBySubject = function(e, t) {
        jQuery("#col1.d-none, #col2.d-none").removeClass("d-none"), jQuery(".view-all-databases").addClass("d-none"), jQuery("#az-public-mobile-filters").hide(), this.loadAzList(this.getAzFilterValues({
            subject_id: Array.isArray(e) ? e.join(",") : e,
            site_id: t
        })), this.recordAzSearchHit()
    }, e.prototype.filterAzBySubjectEdit = function(e, t) {
        let s = jQuery(".s-lg-sel-subjects").val().filter((function(t) {
            return t != e
        }));
        this.filterAzBySubject(s, t)
    }, e.prototype.filterAzByType = function(e, t) {
        jQuery("#col1.d-none, #col2.d-none").removeClass("d-none"), jQuery(".view-all-databases").addClass("d-none"), jQuery("#az-public-mobile-filters").hide(), this.loadAzList(this.getAzFilterValues({
            type_id: Array.isArray(e) ? e.join(",") : e,
            site_id: t
        })), this.recordAzSearchHit()
    }, e.prototype.filterAzByTypeEdit = function(e, t) {
        let s = jQuery(".s-lg-sel-az-types").val().filter((function(t) {
            return t != e
        }));
        this.filterAzByType(s, t)
    }, e.prototype.filterAzByVendor = function(e, t) {
        jQuery("#col1.d-none, #col2.d-none").removeClass("d-none"), jQuery(".view-all-databases").addClass("d-none"), jQuery("#az-public-mobile-filters").hide(), this.loadAzList(this.getAzFilterValues({
            vendor_id: Array.isArray(e) ? e.join(",") : e,
            site_id: t
        })), this.recordAzSearchHit()
    }, e.prototype.filterAzByVendorEdit = function(e, t) {
        let s = jQuery(".s-lg-sel-az-vendors").val().filter((function(t) {
            return t != e
        }));
        this.filterAzByVendor(s, t)
    }, e.prototype.filterAzByAccessMode = function(e, t) {
        jQuery("#col1.d-none, #col2.d-none").removeClass("d-none"), jQuery(".view-all-databases").addClass("d-none"), jQuery("#az-public-mobile-filters").hide(), this.loadAzList(this.getAzFilterValues({
            access_mode_id: Array.isArray(e) ? e.join(",") : e,
            site_id: t
        }))
    }, e.prototype.filterAzByAccessModeEdit = function(e, t) {
        let s = jQuery(".s-lg-sel-az-access-modes").val().filter((function(t) {
            return t != e
        }));
        this.filterAzByAccessMode(s, t)
    }, e.prototype.changeAzPage = function(e, t) {
        jQuery(".lazy-load-link").html('<div class="bold s-lib-color-lt-grey pad-top-med text-center">Loading...</div>'), this.loadAzList(this.getAzFilterValues({
            page: e,
            site_id: t
        }), !1, !0)
    }, e.prototype.recordAzSearchHit = function() {
        if (void 0 !== springSpace.springTrack) try {
            let e = this.getSearchTerm(),
                t = this.getSelectTexts(".s-lg-sel-subjects"),
                s = this.getSelectTexts(".s-lg-sel-az-types"),
                r = this.getSelectTexts(".s-lg-sel-az-vendors"),
                a = this.getSelectTexts(".s-lg-sel-az-access-modes"),
                i = e + t + s + r + a;
            if ("" === i || "*:*" === i) return;
            springSpace.springTrack.trackSearch({
                _st_group_id: 0,
                _st_guide_id: 0,
                _st_search_az_access_modes: a,
                _st_search_az_types: s,
                _st_search_az_vendors: r,
                _st_search_subjects: t,
                _st_search_terms: e,
                _st_type_id: "27"
            })
        } catch (e) {
            searchcontroller.debug(e)
        }
    }, e.prototype.filterAzBySearch = function(e) {
        jQuery("#col1.d-none, #col2.d-none").removeClass("d-none"), jQuery(".view-all-databases").addClass("d-none"), jQuery("#az-public-mobile-filters").hide(), this.loadAzList(this.getAzFilterValues({
            site_id: e
        })), this.recordAzSearchHit()
    }, e.prototype.filterAzBySearchEdit = function(e) {
        jQuery(".s-lg-az-search").val(""), this.filterAzBySearch(e)
    }, e.prototype.clearAzSelection = function(e) {
        jQuery("#" + e + ", ." + e).val("")
    }, e.prototype.toggleAzClearButton = function(e) {
        jQuery("#s-lg-az-reset").toggle("" !== e.subject_id || "" !== e.type_id || "" !== e.search || "" !== e.vendor_id)
    }, e.prototype.toggleAzClearButtonBS5 = function(e) {
        jQuery("#s-lg-az-reset").hide(), jQuery(".s-lg-az-reset").toggle("" !== e.subject_id || "" !== e.type_id || "" !== e.search || "" !== e.vendor_id || "" !== e.access_mode_id)
    }, e.prototype.toggleAzSubjectBoxes = function(e) {
        var t = "" != e.subject_id;
        jQuery("#s-lg-az-experts-div").html(""), jQuery("#s-lg-az-guides-div").html("");
        var s = this;
        t && (xhr = jQuery.ajax({
            url: "/az_process.php",
            type: "GET",
            dataType: "json",
            data: {
                action: e.action,
                subject_id: e.subject_id,
                site_id: e.site_id,
                is_widget: springSpace.azList.is_widget
            },
            success: function(e, t) {
                200 == e.errCode && (jQuery("#s-lg-az-experts-div").html(e.data.experts), jQuery("#s-lg-az-guides-div").html(e.data.guides)), 1 == springSpace.azList.is_widget && s.transformAzLinks()
            },
            error: function(e, t, s) {
                springSpace.UI.error(s)
            }
        })), jQuery("#s-lg-az-trials-div").toggle(!t), jQuery("#s-lg-az-popular-div").toggle(!t), jQuery("#s-lg-az-experts-div").toggle(t), jQuery("#s-lg-az-guides-div").toggle(t)
    }, e.prototype.toggleAzSubjectBoxesBS5 = function(e) {
        var t = "" != e;
        t && jQuery.ajax({
            url: "/process/az/subject_experts/" + e,
            type: "GET",
            dataType: "html",
            success: function(e, t) {
                jQuery("#s-lg-az-subject-resources").replaceWith(e)
            },
            error: function(e, t, s) {
                springSpace.UI.error(s)
            }
        }), jQuery("#s-lg-az-trials-div").toggle(!t), jQuery("#s-lg-az-popular-div").toggle(!t), jQuery("#s-lg-az-subject-resources").toggle(t)
    }, e.prototype.displayAzShareAlert = function(e) {
        btn_text = e.btn_text, xhr = jQuery.ajax({
            url: "/az_process.php",
            type: "POST",
            dataType: "json",
            data: {
                action: e.action,
                id: e.id,
                name: e.name,
                site_id: e.site_id
            },
            success: function(t, s) {
                200 == t.errCode ? (springSpace.UI.alert({
                    title: e.name,
                    width: "360",
                    height: "auto",
                    content: t.data.html,
                    buttons: {
                        btn_text: function() {
                            jQuery("#s-lib-alert").dialog("close"), jQuery("#s-lib-alert-content").html("")
                        }
                    }
                }), jQuery("#s-lib-alert-btn-first").html(e.btn_text)) : springSpace.UI.error(t.errText)
            },
            error: function(e, t, s) {
                springSpace.UI.error(s)
            }
        })
    }, e.prototype.loadAzList = function(e, t = !1, s = !1) {
        is_bootstrap || springSpace.UI.notify({
            mode: "load",
            duration: 3e4
        }), "undefined" != typeof Storage && (localStorage.loadAzListConfig = JSON.stringify(e)), e = void 0 === e ? {
            subject_id: "",
            search: ""
        } : e, jQuery.each(["search", "subject_id", "type_id", "first", "vendor_id", "access_mode_id", "page"], (function(t, s) {
            e[s] || (e[s] = "")
        })), is_bootstrap ? (this.toggleAzClearButtonBS5(e), jQuery(".s-lg-az-search").change((function() {
            jQuery(".s-lg-az-search").val(jQuery(this).val())
        }))) : this.toggleAzClearButton(e), is_bootstrap ? this.toggleAzSubjectBoxesBS5(e.subject_id) : this.toggleAzSubjectBoxes({
            subject_id: e.subject_id ? e.subject_id : "",
            action: 521,
            site_id: e.site_id
        });
        var r = this,
            a = function(e, t) {
                if (!t.length) return;
                let s = [];
                t.forEach((function(e, t) {
                    e = (e = e.replace(/ \(\d+\)/i, "")).replace("↳", "").trim(), s.push(springSpace.Util.escapeHtml(e))
                })), e.push(s.join(", "))
            },
            i = "" !== this.getSearchTerm(),
            l = i ? "/process/az/dbsearch" : "/process/az/dblist";
        let o = window.innerWidth <= 575.98 ? 10 : 0;
        xhr = jQuery.ajax({
            url: l,
            type: "GET",
            dataType: "json",
            data: {
                search: e.search,
                subject_id: e.subject_id,
                type_id: e.type_id,
                vendor_id: e.vendor_id,
                access_mode_id: e.access_mode_id,
                page: e.page ?? 1,
                site_id: e.site_id,
                content_id: e.content_id ? e.content_id : 0,
                is_widget: springSpace.azList.is_widget,
                bootstrap5: is_bootstrap,
                page_size: o,
                preview: springSpace.azList.az_preview,
                sublist_id: springSpace.azList.az_sublist_id,
                alpha: e.first
            },
            success: function(l, o) {
                if (is_bootstrap || springSpace.UI.notifyStop(), history.pushState && 0 == springSpace.azList.is_widget && "back" !== e.action && "init" !== e.action && history.pushState({}, null, location.pathname + encodeURI(r.buildAzQs(e))), springSpace.azList.historyEdited = !0, 200 == l.errCode)
                    if (s) jQuery(".lazy-load-link").remove(), jQuery("#s-lg-az-results").append(l.data.html), jQuery("#s-lg-az-content").append(l.data.az_pager_html ?? "");
                    else {
                        jQuery("#s-lg-az-content").html(l.data.html), jQuery("#s-lg-az-content").append(l.data.az_pager_html ?? ""), l.data.az_index_html && jQuery("#s-lg-az-index").html(l.data.az_index_html), l.data.subjects_html && jQuery(".col-subjects").html(l.data.subjects_html), is_bootstrap && jQuery("#s-lg-az-filter-cols .s-lg-sel-subjects").select2({
                            placeholder: l.data.label_all_subjects ?? "Subjects",
                            theme: "bootstrap5"
                        }), l.data.az_types_html && jQuery(".col-types").html(l.data.az_types_html), is_bootstrap && jQuery("#s-lg-az-filter-cols .s-lg-sel-az-types").select2({
                            placeholder: l.data.label_all_types ?? "Types",
                            theme: "bootstrap5"
                        }), l.data.az_vendors_html && jQuery(".col-vendors").html(l.data.az_vendors_html), is_bootstrap && (jQuery("#s-lg-az-filter-cols .s-lg-sel-az-vendors").select2({
                            placeholder: l.data.label_all_vendors ?? "Vendors",
                            theme: "bootstrap5"
                        }), jQuery("#s-lg-az-filter-cols .s-lg-sel-az-access-modes").select2({
                            placeholder: l.data.label_all_access_modes ?? "Access Modes",
                            theme: "bootstrap5"
                        })), jQuery("#s-lg-az-index").toggle(!i);
                        var n = [];
                        a(n, r.getAZFilterData("s-lg-sel-subjects")), a(n, r.getAZFilterData("s-lg-sel-az-types")), a(n, r.getAZFilterData("s-lg-sel-az-vendors")), a(n, i ? [r.getSearchTerm()] : []);
                        var c = (n.length > 0 ? ": " : "") + n.join("; "),
                            p = n.join("; ");
                        total_db_count = l.data.count ?? 0, is_bootstrap ? (r.writeMobileAzFilters(l.data), r.setMobileAzFormValues(l.data), 0 === (l.data.subjects ?? []).length && 0 === (l.data.types ?? []).length && 0 === (l.data.vendors ?? []).length && "" === (l.data.q ?? "") && (jQuery(".s-lg-az-search").val(""), jQuery(".s-lg-sel-subjects").val([]), jQuery(".s-lg-sel-az-types").val([]), jQuery(".s-lg-sel-az-vendors").val([]), jQuery("#az-public-mobile-filters").show())) : jQuery("#s-lg-az-result-count").html(l.data.list_count + (p.length > 0 ? " " + l.data.list_count_for + " " + p : "")), t && "" !== springSpace.azList.init_filters.alpha && r.quickFilterAzByFirst(springSpace.azList.init_filters.alpha, e.site_id), is_bootstrap || jQuery("#s-lib-public-header-title").html(title_base + c), jQuery("title").html(title_base + c)
                    }
                else jQuery("#s-lg-az-content").html('Something unexpected happened - please try again and if you continue to receive the error please let us know.<div class="s-ghost" style="margin-top:20px;">' + l.errText + "</div>");
                jQuery(".az-bs-tooltip").tooltip(), jQuery((function() {
                    jQuery('[data-toggle="popover"]').popover()
                })), is_bootstrap && (tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'), tooltipList = [...tooltipTriggerList].map((e => new bootstrap.Tooltip(e)))), 1 == springSpace.azList.is_widget && r.transformAzLinks(), is_bootstrap && (r.shortenAZBoxItems("s-lg-az-popular"), r.shortenAZBoxItems("s-lg-az-trials"), r.setReadMoreLink()), jQuery("#s-lg-az-trials-loading").toggle(!1), jQuery("#s-lg-az-trials").toggle(!0), jQuery("#s-lg-az-popular-loading").toggle(!1), jQuery("#s-lg-az-popular").toggle(!0)
            },
            error: function(e, t, s) {
                springSpace.UI.error(s)
            }
        })
    }, e.prototype.shortenAZBoxItems = function(e) {
        window.innerWidth <= 575.98 && jQuery("#" + e + " div.mb-4").each((function(t) {
            t > 2 && jQuery(this).detach().appendTo("#" + e + "-view-all")
        }))
    }, e.prototype.setMobileAzFormValues = function(e) {
        jQuery(".s-lg-az-search").val(e.q ?? ""), jQuery(".s-lg-sel-subjects").val(Object.keys(e.subjects ?? [])), jQuery(".s-lg-sel-az-types").val(Object.keys(e.types ?? [])), jQuery(".s-lg-sel-az-vendors").val(Object.keys(e.vendors ?? [])), jQuery(".s-lg-sel-az-access-modes").val(Object.keys(e.access_modes ?? []))
    }, e.prototype.writeMobileAzFilters = function(e) {
        jQuery(".az-filter-chip, #az-mobile-filter-edit").remove(), jQuery("#az-mobile-filter-edit-modal").modal("hide");
        const t = jQuery("#site_id").val();
        let s = Object.keys(e.subjects ?? []).length || Object.keys(e.types ?? []).length || Object.keys(e.vendors ?? []).length || e.q?.trim().length,
            r = mobileLabel = e.count + " " + (e.label_databases ?? "Database" + (1 == e.count ? "" : "s"));
        s && (e.label_databases_found_for ? r = e.label_databases_found_for.replace("{{list_count}}", e.count) : r += " Found for: ", mobileLabel = e.count + " Matching Result" + (1 == e.count ? "" : "s") + " for:"), jQuery("#s-lg-az-result-count").html('<span class="d-lg-none" aria-hidden="true">' + mobileLabel + '</span><span class="d-none d-lg-inline me-1">' + r + "</span>"), Object.keys(e.subjects ?? []).forEach((function(s) {
            jQuery("#s-lg-az-result-count").append("<span class='az-filter-chip' aria-hidden='true'>" + e.subjects[s] + "<a class='d-lg-none' onclick='springSpace.publicObj.filterAzBySubjectEdit(" + s + ", " + t + "); return false;'><img src='/web/assets/media/icons/duotune/arrows/arr097.svg' role='presentation'/></a></span>")
        })), Object.keys(e.types ?? []).forEach((function(s) {
            jQuery("#s-lg-az-result-count").append("<span class='az-filter-chip' aria-hidden='true'>" + e.types[s] + "<a class='d-lg-none' onclick='springSpace.publicObj.filterAzByTypeEdit(" + s + ", " + t + "); return false;'><img src='/web/assets/media/icons/duotune/arrows/arr097.svg' role='presentation'/></a></span>")
        })), Object.keys(e.vendors ?? []).forEach((function(s) {
            jQuery("#s-lg-az-result-count").append("<span class='az-filter-chip' aria-hidden='true'>" + e.vendors[s] + "<a class='d-lg-none' onclick='springSpace.publicObj.filterAzByVendorEdit(" + s + ", " + t + "); return false;'><img src='/web/assets/media/icons/duotune/arrows/arr097.svg' role='presentation'/></a></span>")
        })), Object.keys(e.access_modes ?? []).forEach((function(s) {
            jQuery("#s-lg-az-result-count").append("<span class='az-filter-chip' aria-hidden='true'>" + e.access_modes[s] + "<a class='d-lg-none' onclick='springSpace.publicObj.filterAzByAccessModeEdit(" + s + ", " + t + "); return false;'><img src='/web/assets/media/icons/duotune/arrows/arr097.svg' role='presentation'/></a></span>")
        })), e.q && (jQuery("#s-lg-az-result-count").append("<span class='az-filter-chip' aria-hidden='true'><span class='data-q-display'></span><a class='d-lg-none' onclick='springSpace.publicObj.filterAzBySearchEdit(" + t + "); return false;'><img src='/web/assets/media/icons/duotune/arrows/arr097.svg' role='presentation'/></a></span>"), jQuery(".data-q-display").text(e.q)), s && jQuery(".az-filter-chip:last-of-type").after("<a id='az-mobile-filter-edit' aria-hidden='true' class='d-lg-none' data-bs-toggle='modal' data-bs-target='#az-mobile-filter-edit-modal'><i class='fa fa-pencil' aria-hidden='true'></i>&nbsp;Edit Filters</a>")
    }, e.prototype.getSearchTerm = function() {
        var e = [];
        return jQuery(".s-lg-az-search").each((function() {
            "" !== jQuery(this).val() && (e[jQuery(this).val()] = "")
        })), Object.keys(e).join(" ")
    }, e.prototype.getDelimitedFilterSelections = function(e) {
        return [...new Set(jQuery(e).toArray().map((e => e.text)))].join("; ")
    }, e.prototype.getAZFilterData = function(e) {
        let t = [];
        return jQuery("#" + e + " > option:selected").each((function() {
            "" !== jQuery(this).val() && "0" !== jQuery(this).val() && "" !== jQuery(this).text() && t.push(jQuery(this).text())
        })), t
    }, e.prototype.buildAzQs = function(e) {
        var t = {
                q: springSpace.Util.setProp(e.search, ""),
                s: springSpace.Util.setProp(e.subject_id, ""),
                t: springSpace.Util.setProp(e.type_id, ""),
                a: springSpace.Util.setProp(e.first, ""),
                v: springSpace.Util.setProp(e.vendor_id, ""),
                am: springSpace.Util.setProp(e.access_mode_id, "")
            },
            s = [];
        return jQuery.each(t, (function(e, t) {
            "" !== t && "0" !== t && s.push(e + "=" + t)
        })), "" !== springSpace.azList.az_preview && s.push("preview=" + springSpace.azList.az_preview), 0 == s.length ? "" : "?" + s.join("&")
    }, e.prototype.transformAzLinks = function(e) {
        jQuery(".s-lg-az-result-title a, .s-lib-featured-profile-image a, .s-lib-profile-container a, .s-lib-featured-profile-container a, #s-lg-az-guides-div a").each((function() {
            jQuery(this).attr("target", "_blank")
        })), jQuery(".s-lg-az-result-title a, .s-lib-featured-profile-image a, .s-lib-profile-container a, .s-lib-featured-profile-container a").each((function() {
            var e = jQuery(this).attr("href");
            0 == /^https?:\/\/|^\/\//i.test(e) && jQuery(this).attr("href", "http://" + springSpace.azList.site_domain + e)
        }))
    }, e.prototype.setReadMoreLink = function() {
        jQuery(".az-description-short").each((function() {
            jQuery(this).hasClass("ddd-truncated") && jQuery(this).next(".az-description-view-more").removeClass("d-none")
        })), jQuery(".az-description-view-more-link").off("click").on("click", (function(e) {
            e.preventDefault(), jQuery(this).parent().prev().data("dotdotdot").restore(), jQuery(this).addClass("d-none")
        }))
    }, this.Public = e
}, springSpace.public._construct(), jQuery(document).ready((function() {
    jQuery(window).scroll((function() {
        jQuery(this).scrollTop() > 220 ? jQuery("#s-lib-scroll-top").fadeIn(750) : jQuery("#s-lib-scroll-top").fadeOut(750)
    })), jQuery("#s-lib-scroll-top").click((function(e) {
        return e.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, 750), jQuery("body").find("a:focusable:first").focus(), !1
    })), jQuery(".az-bs-tooltip").tooltip()
}));
/*! springshare 1.11.0 */

var springSpace = springSpace || {};
springSpace.util = {}, springSpace.common = {}, springSpace.validation = {}, springSpace.dynForm = {}, springSpace.lang = {}, springSpace.ui = {}, springSpace.googleSearch = {}, springSpace.session = {}, springSpace.dataTable = {}, springSpace.tagParser = {}, springSpace.util._construct = function() {
    function Util() {
        LOADING_DOTS = '<style>.loader-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.loader{height:1rem;line-height:1rem}.loader__dot{-webkit-animation:load 501ms alternate infinite;animation:load 501ms alternate infinite;background-color:#f7941d;border-radius:50%;display:inline-block;font-size:0;height:.5rem;margin:0 .25rem;width:.5rem}.loader__dot:nth-of-type(2){-webkit-animation-delay:.2s;animation-delay:.2s}.loader__dot:nth-of-type(3){-webkit-animation-delay:.4s;animation-delay:.4s}.loader__dot:nth-of-type(4){-webkit-animation-delay:.6s;animation-delay:.6s}.loader__dot:nth-of-type(5){-webkit-animation-delay:.8s;animation-delay:.8s}.loader__dot:nth-of-type(6){-webkit-animation-delay:1s;animation-delay:1s}.loader__dot:nth-of-type(7){-webkit-animation-delay:1.2s;animation-delay:1.2s}.loader__dot:nth-of-type(8){-webkit-animation-delay:1.4s;animation-delay:1.4s}.loader__dot:nth-of-type(9){-webkit-animation-delay:1.6s;animation-delay:1.6s}.loader__dot:nth-of-type(10){-webkit-animation-delay:1.8s;animation-delay:1.8s}@-webkit-keyframes load{0%{-webkit-transform:scale(0,0);transform:scale(0,0)}100%{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes load{0%{-webkit-transform:scale(0,0);transform:scale(0,0)}100%{-webkit-transform:scale(1,1);transform:scale(1,1)}}</style><div class="loader-container"><div aria-live="polite" class="loader" role="status"><span class="loader__text sr-only">Loading ... </span><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div><div class="loader__dot"></div></div></div>'
    }
    Util.prototype.safeFunctionCall = function(t) {
        "function" == typeof window[t] && window[t]()
    }, Util.prototype.loadJS = function(t, e, a, i) {
        var s, r = document,
            o = r.getElementsByTagName(t)[0];
        /^http:/.test(r.location);
        r.getElementById(a) || ((s = r.createElement(t)).id = a, s.src = e, s.onload = i, o.parentNode.insertBefore(s, o))
    }, Util.prototype.setProp = function(t, e) {
        return null != t ? t : e
    }, Util.prototype.setConfig = function(t) {
        return void 0 === t ? {} : t
    }, Util.prototype.setObjProp = function(t, e, a) {
        t in a || (a[t] = e)
    }, Util.prototype.replaceAll = function(config) {
        var ignore_case = this.setProp(config.ignoreCase, !1),
            regex = "/" + config.searchTerm + "/g";
        return ignore_case && (regex += "i"), config.str.replace(eval(regex), config.replaceWith)
    }, Util.prototype.parseQS = function(t) {
        var e = {},
            a = t.qs.replace("?", "").split("&");
        return jQuery.each(a, (function(t, a) {
            var i = a.split("=");
            e[i[0]] = i[1]
        })), e
    }, Util.prototype.getQSParam = function(t) {
        var e = this.parseQS(t),
            a = this.setProp(t.default, "");
        return void 0 !== e[t.name] ? e[t.name] : a
    }, Util.prototype.getScriptPathLeader = function(t) {
        var e = location.pathname;
        return "/" == e.charAt(e.length - 1) ? "/" : ""
    }, Util.prototype.stringFormat = function(t, e) {
        return t.replace(/%(\d+)/g, (function(t, a) {
            return e[--a]
        }))
    }, Util.prototype.escapeHtml = function(t) {
        var e = document.createElement("div");
        return e.appendChild(document.createTextNode(t)), e.innerHTML
    }, Util.prototype.toSeoUrl = function(t) {
        var e = t.toString();
        return (e = this.latinize(e)).replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/[^a-zA-Z0-9\-\_\/]/g, "").replace(/-+/g, "-").replace(/^-*/, "").replace(/-*$/, "").replace(/\/{2,}/g, "/").replace(/\/*$/, "").replace(/^\/*/, "")
    }, Util.prototype.strip_tags = function(t, e) {
        e = (((e || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
        var a = /<\/?([a-z0-9]*)\b[^>]*>?/gi,
            i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi,
            s = function(t) {
                switch (typeof t) {
                    case "boolean":
                        return t ? "1" : "";
                    case "string":
                        return t;
                    case "number":
                        return isNaN(t) ? "NAN" : isFinite(t) ? t + "" : (t < 0 ? "-" : "") + "INF";
                    case "undefined":
                        return "";
                    case "object":
                        return Array.isArray(t) ? "Array" : null !== t ? "Object" : "";
                    default:
                        throw new Error("Unsupported value type")
                }
            }(t);
        for (s = "<" === s.substring(s.length - 1) ? s.substring(0, s.length - 1) : s;;) {
            var r = s;
            if (s = r.replace(i, "").replace(a, (function(t, a) {
                    return e.indexOf("<" + a.toLowerCase() + ">") > -1 ? t : ""
                })), r === s) return s
        }
    }, Util.prototype.latinize = function(t) {
        var e = {
            "Á": "A",
            "Ă": "A",
            "Ắ": "A",
            "Ặ": "A",
            "Ằ": "A",
            "Ẳ": "A",
            "Ẵ": "A",
            "Ǎ": "A",
            "Â": "A",
            "Ấ": "A",
            "Ậ": "A",
            "Ầ": "A",
            "Ẩ": "A",
            "Ẫ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ạ": "A",
            "Ȁ": "A",
            "À": "A",
            "Ả": "A",
            "Ȃ": "A",
            "Ā": "A",
            "Ą": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ḁ": "A",
            "Ⱥ": "A",
            "Ã": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ɓ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ć": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ď": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḋ": "D",
            "Ḍ": "D",
            "Ɗ": "D",
            "Ḏ": "D",
            "ǲ": "D",
            "ǅ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "É": "E",
            "Ĕ": "E",
            "Ě": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ê": "E",
            "Ế": "E",
            "Ệ": "E",
            "Ề": "E",
            "Ể": "E",
            "Ễ": "E",
            "Ḙ": "E",
            "Ë": "E",
            "Ė": "E",
            "Ẹ": "E",
            "Ȅ": "E",
            "È": "E",
            "Ẻ": "E",
            "Ȇ": "E",
            "Ē": "E",
            "Ḗ": "E",
            "Ḕ": "E",
            "Ę": "E",
            "Ɇ": "E",
            "Ẽ": "E",
            "Ḛ": "E",
            "Ꝫ": "ET",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ǵ": "G",
            "Ğ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ĝ": "G",
            "Ġ": "G",
            "Ɠ": "G",
            "Ḡ": "G",
            "Ǥ": "G",
            "Ḫ": "H",
            "Ȟ": "H",
            "Ḩ": "H",
            "Ĥ": "H",
            "Ⱨ": "H",
            "Ḧ": "H",
            "Ḣ": "H",
            "Ḥ": "H",
            "Ħ": "H",
            "Í": "I",
            "Ĭ": "I",
            "Ǐ": "I",
            "Î": "I",
            "Ï": "I",
            "Ḯ": "I",
            "İ": "I",
            "Ị": "I",
            "Ȉ": "I",
            "Ì": "I",
            "Ỉ": "I",
            "Ȋ": "I",
            "Ī": "I",
            "Į": "I",
            "Ɨ": "I",
            "Ĩ": "I",
            "Ḭ": "I",
            "Ꝺ": "D",
            "Ꝼ": "F",
            "Ᵹ": "G",
            "Ꞃ": "R",
            "Ꞅ": "S",
            "Ꞇ": "T",
            "Ꝭ": "IS",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ķ": "K",
            "Ⱪ": "K",
            "Ꝃ": "K",
            "Ḳ": "K",
            "Ƙ": "K",
            "Ḵ": "K",
            "Ꝁ": "K",
            "Ꝅ": "K",
            "Ĺ": "L",
            "Ƚ": "L",
            "Ľ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ḻ": "L",
            "Ŀ": "L",
            "Ɫ": "L",
            "ǈ": "L",
            "Ł": "L",
            "Ǉ": "LJ",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ń": "N",
            "Ň": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṅ": "N",
            "Ṇ": "N",
            "Ǹ": "N",
            "Ɲ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "ǋ": "N",
            "Ñ": "N",
            "Ǌ": "NJ",
            "Ó": "O",
            "Ŏ": "O",
            "Ǒ": "O",
            "Ô": "O",
            "Ố": "O",
            "Ộ": "O",
            "Ồ": "O",
            "Ổ": "O",
            "Ỗ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ọ": "O",
            "Ő": "O",
            "Ȍ": "O",
            "Ò": "O",
            "Ỏ": "O",
            "Ơ": "O",
            "Ớ": "O",
            "Ợ": "O",
            "Ờ": "O",
            "Ở": "O",
            "Ỡ": "O",
            "Ȏ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ō": "O",
            "Ṓ": "O",
            "Ṑ": "O",
            "Ɵ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ṏ": "O",
            "Ȭ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ɛ": "E",
            "Ɔ": "O",
            "Ȣ": "OU",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ꝓ": "P",
            "Ƥ": "P",
            "Ꝕ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝙ": "Q",
            "Ꝗ": "Q",
            "Ŕ": "R",
            "Ř": "R",
            "Ŗ": "R",
            "Ṙ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꜿ": "C",
            "Ǝ": "E",
            "Ś": "S",
            "Ṥ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ş": "S",
            "Ŝ": "S",
            "Ș": "S",
            "Ṡ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ť": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ț": "T",
            "Ⱦ": "T",
            "Ṫ": "T",
            "Ṭ": "T",
            "Ƭ": "T",
            "Ṯ": "T",
            "Ʈ": "T",
            "Ŧ": "T",
            "Ɐ": "A",
            "Ꞁ": "L",
            "Ɯ": "M",
            "Ʌ": "V",
            "Ꜩ": "TZ",
            "Ú": "U",
            "Ŭ": "U",
            "Ǔ": "U",
            "Û": "U",
            "Ṷ": "U",
            "Ü": "U",
            "Ǘ": "U",
            "Ǚ": "U",
            "Ǜ": "U",
            "Ǖ": "U",
            "Ṳ": "U",
            "Ụ": "U",
            "Ű": "U",
            "Ȕ": "U",
            "Ù": "U",
            "Ủ": "U",
            "Ư": "U",
            "Ứ": "U",
            "Ự": "U",
            "Ừ": "U",
            "Ử": "U",
            "Ữ": "U",
            "Ȗ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ų": "U",
            "Ů": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ṵ": "U",
            "Ꝟ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ṽ": "V",
            "Ꝡ": "VY",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẅ": "W",
            "Ẇ": "W",
            "Ẉ": "W",
            "Ẁ": "W",
            "Ⱳ": "W",
            "Ẍ": "X",
            "Ẋ": "X",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ÿ": "Y",
            "Ẏ": "Y",
            "Ỵ": "Y",
            "Ỳ": "Y",
            "Ƴ": "Y",
            "Ỷ": "Y",
            "Ỿ": "Y",
            "Ȳ": "Y",
            "Ɏ": "Y",
            "Ỹ": "Y",
            "Ź": "Z",
            "Ž": "Z",
            "Ẑ": "Z",
            "Ⱬ": "Z",
            "Ż": "Z",
            "Ẓ": "Z",
            "Ȥ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ĳ": "IJ",
            "Œ": "OE",
            "ᴀ": "A",
            "ᴁ": "AE",
            "ʙ": "B",
            "ᴃ": "B",
            "ᴄ": "C",
            "ᴅ": "D",
            "ᴇ": "E",
            "ꜰ": "F",
            "ɢ": "G",
            "ʛ": "G",
            "ʜ": "H",
            "ɪ": "I",
            "ʁ": "R",
            "ᴊ": "J",
            "ᴋ": "K",
            "ʟ": "L",
            "ᴌ": "L",
            "ᴍ": "M",
            "ɴ": "N",
            "ᴏ": "O",
            "ɶ": "OE",
            "ᴐ": "O",
            "ᴕ": "OU",
            "ᴘ": "P",
            "ʀ": "R",
            "ᴎ": "N",
            "ᴙ": "R",
            "ꜱ": "S",
            "ᴛ": "T",
            "ⱻ": "E",
            "ᴚ": "R",
            "ᴜ": "U",
            "ᴠ": "V",
            "ᴡ": "W",
            "ʏ": "Y",
            "ᴢ": "Z",
            "á": "a",
            "ă": "a",
            "ắ": "a",
            "ặ": "a",
            "ằ": "a",
            "ẳ": "a",
            "ẵ": "a",
            "ǎ": "a",
            "â": "a",
            "ấ": "a",
            "ậ": "a",
            "ầ": "a",
            "ẩ": "a",
            "ẫ": "a",
            "ä": "a",
            "ǟ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ạ": "a",
            "ȁ": "a",
            "à": "a",
            "ả": "a",
            "ȃ": "a",
            "ā": "a",
            "ą": "a",
            "ᶏ": "a",
            "ẚ": "a",
            "å": "a",
            "ǻ": "a",
            "ḁ": "a",
            "ⱥ": "a",
            "ã": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ḃ": "b",
            "ḅ": "b",
            "ɓ": "b",
            "ḇ": "b",
            "ᵬ": "b",
            "ᶀ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɵ": "o",
            "ć": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ĉ": "c",
            "ɕ": "c",
            "ċ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ď": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ȡ": "d",
            "ḋ": "d",
            "ḍ": "d",
            "ɗ": "d",
            "ᶑ": "d",
            "ḏ": "d",
            "ᵭ": "d",
            "ᶁ": "d",
            "đ": "d",
            "ɖ": "d",
            "ƌ": "d",
            "ı": "i",
            "ȷ": "j",
            "ɟ": "j",
            "ʄ": "j",
            "ǳ": "dz",
            "ǆ": "dz",
            "é": "e",
            "ĕ": "e",
            "ě": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ê": "e",
            "ế": "e",
            "ệ": "e",
            "ề": "e",
            "ể": "e",
            "ễ": "e",
            "ḙ": "e",
            "ë": "e",
            "ė": "e",
            "ẹ": "e",
            "ȅ": "e",
            "è": "e",
            "ẻ": "e",
            "ȇ": "e",
            "ē": "e",
            "ḗ": "e",
            "ḕ": "e",
            "ⱸ": "e",
            "ę": "e",
            "ᶒ": "e",
            "ɇ": "e",
            "ẽ": "e",
            "ḛ": "e",
            "ꝫ": "et",
            "ḟ": "f",
            "ƒ": "f",
            "ᵮ": "f",
            "ᶂ": "f",
            "ǵ": "g",
            "ğ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ĝ": "g",
            "ġ": "g",
            "ɠ": "g",
            "ḡ": "g",
            "ᶃ": "g",
            "ǥ": "g",
            "ḫ": "h",
            "ȟ": "h",
            "ḩ": "h",
            "ĥ": "h",
            "ⱨ": "h",
            "ḧ": "h",
            "ḣ": "h",
            "ḥ": "h",
            "ɦ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ƕ": "hv",
            "í": "i",
            "ĭ": "i",
            "ǐ": "i",
            "î": "i",
            "ï": "i",
            "ḯ": "i",
            "ị": "i",
            "ȉ": "i",
            "ì": "i",
            "ỉ": "i",
            "ȋ": "i",
            "ī": "i",
            "į": "i",
            "ᶖ": "i",
            "ɨ": "i",
            "ĩ": "i",
            "ḭ": "i",
            "ꝺ": "d",
            "ꝼ": "f",
            "ᵹ": "g",
            "ꞃ": "r",
            "ꞅ": "s",
            "ꞇ": "t",
            "ꝭ": "is",
            "ǰ": "j",
            "ĵ": "j",
            "ʝ": "j",
            "ɉ": "j",
            "ḱ": "k",
            "ǩ": "k",
            "ķ": "k",
            "ⱪ": "k",
            "ꝃ": "k",
            "ḳ": "k",
            "ƙ": "k",
            "ḵ": "k",
            "ᶄ": "k",
            "ꝁ": "k",
            "ꝅ": "k",
            "ĺ": "l",
            "ƚ": "l",
            "ɬ": "l",
            "ľ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ȴ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ḻ": "l",
            "ŀ": "l",
            "ɫ": "l",
            "ᶅ": "l",
            "ɭ": "l",
            "ł": "l",
            "ǉ": "lj",
            "ſ": "s",
            "ẜ": "s",
            "ẛ": "s",
            "ẝ": "s",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ᵯ": "m",
            "ᶆ": "m",
            "ń": "n",
            "ň": "n",
            "ņ": "n",
            "ṋ": "n",
            "ȵ": "n",
            "ṅ": "n",
            "ṇ": "n",
            "ǹ": "n",
            "ɲ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ᵰ": "n",
            "ᶇ": "n",
            "ɳ": "n",
            "ñ": "n",
            "ǌ": "nj",
            "ó": "o",
            "ŏ": "o",
            "ǒ": "o",
            "ô": "o",
            "ố": "o",
            "ộ": "o",
            "ồ": "o",
            "ổ": "o",
            "ỗ": "o",
            "ö": "o",
            "ȫ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ọ": "o",
            "ő": "o",
            "ȍ": "o",
            "ò": "o",
            "ỏ": "o",
            "ơ": "o",
            "ớ": "o",
            "ợ": "o",
            "ờ": "o",
            "ở": "o",
            "ỡ": "o",
            "ȏ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ⱺ": "o",
            "ō": "o",
            "ṓ": "o",
            "ṑ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "õ": "o",
            "ṍ": "o",
            "ṏ": "o",
            "ȭ": "o",
            "ƣ": "oi",
            "ꝏ": "oo",
            "ɛ": "e",
            "ᶓ": "e",
            "ɔ": "o",
            "ᶗ": "o",
            "ȣ": "ou",
            "ṕ": "p",
            "ṗ": "p",
            "ꝓ": "p",
            "ƥ": "p",
            "ᵱ": "p",
            "ᶈ": "p",
            "ꝕ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝙ": "q",
            "ʠ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ŕ": "r",
            "ř": "r",
            "ŗ": "r",
            "ṙ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ȑ": "r",
            "ɾ": "r",
            "ᵳ": "r",
            "ȓ": "r",
            "ṟ": "r",
            "ɼ": "r",
            "ᵲ": "r",
            "ᶉ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ↄ": "c",
            "ꜿ": "c",
            "ɘ": "e",
            "ɿ": "r",
            "ś": "s",
            "ṥ": "s",
            "š": "s",
            "ṧ": "s",
            "ş": "s",
            "ŝ": "s",
            "ș": "s",
            "ṡ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ʂ": "s",
            "ᵴ": "s",
            "ᶊ": "s",
            "ȿ": "s",
            "ɡ": "g",
            "ᴑ": "o",
            "ᴓ": "o",
            "ᴝ": "u",
            "ť": "t",
            "ţ": "t",
            "ṱ": "t",
            "ț": "t",
            "ȶ": "t",
            "ẗ": "t",
            "ⱦ": "t",
            "ṫ": "t",
            "ṭ": "t",
            "ƭ": "t",
            "ṯ": "t",
            "ᵵ": "t",
            "ƫ": "t",
            "ʈ": "t",
            "ŧ": "t",
            "ᵺ": "th",
            "ɐ": "a",
            "ᴂ": "ae",
            "ǝ": "e",
            "ᵷ": "g",
            "ɥ": "h",
            "ʮ": "h",
            "ʯ": "h",
            "ᴉ": "i",
            "ʞ": "k",
            "ꞁ": "l",
            "ɯ": "m",
            "ɰ": "m",
            "ᴔ": "oe",
            "ɹ": "r",
            "ɻ": "r",
            "ɺ": "r",
            "ⱹ": "r",
            "ʇ": "t",
            "ʌ": "v",
            "ʍ": "w",
            "ʎ": "y",
            "ꜩ": "tz",
            "ú": "u",
            "ŭ": "u",
            "ǔ": "u",
            "û": "u",
            "ṷ": "u",
            "ü": "u",
            "ǘ": "u",
            "ǚ": "u",
            "ǜ": "u",
            "ǖ": "u",
            "ṳ": "u",
            "ụ": "u",
            "ű": "u",
            "ȕ": "u",
            "ù": "u",
            "ủ": "u",
            "ư": "u",
            "ứ": "u",
            "ự": "u",
            "ừ": "u",
            "ử": "u",
            "ữ": "u",
            "ȗ": "u",
            "ū": "u",
            "ṻ": "u",
            "ų": "u",
            "ᶙ": "u",
            "ů": "u",
            "ũ": "u",
            "ṹ": "u",
            "ṵ": "u",
            "ᵫ": "ue",
            "ꝸ": "um",
            "ⱴ": "v",
            "ꝟ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ᶌ": "v",
            "ⱱ": "v",
            "ṽ": "v",
            "ꝡ": "vy",
            "ẃ": "w",
            "ŵ": "w",
            "ẅ": "w",
            "ẇ": "w",
            "ẉ": "w",
            "ẁ": "w",
            "ⱳ": "w",
            "ẘ": "w",
            "ẍ": "x",
            "ẋ": "x",
            "ᶍ": "x",
            "ý": "y",
            "ŷ": "y",
            "ÿ": "y",
            "ẏ": "y",
            "ỵ": "y",
            "ỳ": "y",
            "ƴ": "y",
            "ỷ": "y",
            "ỿ": "y",
            "ȳ": "y",
            "ẙ": "y",
            "ɏ": "y",
            "ỹ": "y",
            "ź": "z",
            "ž": "z",
            "ẑ": "z",
            "ʑ": "z",
            "ⱬ": "z",
            "ż": "z",
            "ẓ": "z",
            "ȥ": "z",
            "ẕ": "z",
            "ᵶ": "z",
            "ᶎ": "z",
            "ʐ": "z",
            "ƶ": "z",
            "ɀ": "z",
            "ﬀ": "ff",
            "ﬃ": "ffi",
            "ﬄ": "ffl",
            "ﬁ": "fi",
            "ﬂ": "fl",
            "ĳ": "ij",
            "œ": "oe",
            "ﬆ": "st",
            "ₐ": "a",
            "ₑ": "e",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₒ": "o",
            "ᵣ": "r",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x"
        };
        return t.replace(/[^A-Za-z0-9\[\] ]/g, (function(t) {
            return e[t] || t
        }))
    }, Util.prototype.updateDataTableAriaLabelInFilterHeaders = function(t) {
        t = t || {}, this.setObjProp("id", "#s-lib-dt-filter-header", t);
        const e = "aria-label";
        jQuery(t.id + " > td").each(((t, a) => {
            const i = jQuery(a),
                s = i.attr(e);
            s && (i.find("> span.filter_column > input").each(((t, a) => {
                a.setAttribute(e, s)
            })), i.find("> span.filter_column > select").each(((t, a) => {
                a.setAttribute(e, s)
            })))
        }))
    }, this.Util = Util
}, springSpace.util._construct(), springSpace.Util = new springSpace.util.Util, springSpace.common._construct = function() {
    function t() {
        this.submit_button, this.baseURL = "", this.HTTP_STATUS_OK = 200
    }
    t.prototype.loadRemoteScript = function(t) {
        springSpace.Util.setObjProp("id", 0, t), springSpace.Util.setObjProp("action", "", t);
        var e = "#s-lg-rs-container-" + t.id;
        jQuery(e).html('<div class=""><i class="fa fa-spinner fa-spin fa-fw"></i> Loading Remote Script</div>'), jQuery.ajax({
            url: springSpace.Common.baseURL + "content_process.php",
            dataType: "json",
            data: {
                action: t.action,
                id: t.id
            },
            success: function(t) {
                200 == t.errCode ? jQuery(e).html(t.data.html).slideDown("fast") : jQuery(e).html("Sorry, there has been an error processing the request. Status: " + t.data.status)
            },
            error: function(t, a, i) {
                jQuery(e).html("Sorry, there has been an error processing the request.").slideDown("fast")
            }
        })
    }, t.prototype.getFeed = function(t, e) {
        var a = window.jQuery || $;
        a.get(t, (function(t) {
            a(".s-lg-rss-" + e).html(t), a("[data-toggle='popover']").popover()
        }))
    }, t.prototype.showEnhancedBookData = function(t) {
        springSpace.UI.alert({
            title: t.title,
            url: "content_process.php?action=" + t.action + "&content_id=" + t.content_id,
            width: "450",
            height: "250"
        })
    }, t.prototype.submitPoll = function(t) {
        var e = jQuery("#" + t.form_id);
        this.submit_button = t.button, null == jQuery("input:radio[name ='s-lg-poll-option-" + t.content_id + "']:checked").val() ? springSpace.UI.notify({
            msg: "<div>You must select a poll option</div>",
            duration: springSpace.UI.CONST.conf_close_delay
        }) : (springSpace.UI.changeButtonStatus({
            clicked_text: "Submitting...",
            status: "clicked",
            button: this.submit_button
        }), xhr = jQuery.ajax({
            url: t.url,
            dataType: "jsonp",
            jsonpCallback: "springSpace.Common.submitPollCallback",
            data: e.serialize()
        }))
    }, t.prototype.submitPollCallback = function(t) {
        var e = this;
        springSpace.Common.apiLoad ? jQuery.ajax({
            url: t.data.html.display_url,
            dataType: "jsonp",
            cache: !1,
            jsonpCallback: "springSpace.Common.submitApiPollCallback"
        }) : jQuery.ajax({
            url: springSpace.Common.baseURL + "content_process.php",
            dataType: "json",
            cache: !1,
            data: {
                action: springSpace.Common.constant.PROCESSING.ACTION_DISPLAY_POLL,
                content_id: t.data.html.content_id
            },
            success: function(t, a, i) {
                jQuery("#s-lg-content-votes-" + t.data.content_id).html(t.data.content), e.showPoll({
                    pane: "votes",
                    elt_id: t.data.content_id
                }), jQuery("#s-lg-content-votes-" + t.data.content_id + " div.s-lg-poll-toggle button").focus(), springSpace.UI.changeButtonStatus({
                    active_text: "Submit",
                    status: "active",
                    button: e.submit_button
                })
            },
            error: function(t, e, a) {
                alert("Oops, sorry! Something unexpected happened: " + a + " \n\nThat might not mean much to you, but it probably does to the Springy Techs...you can let them know at support@springshare.com.")
            }
        })
    }, t.prototype.submitApiPollCallback = function(t) {
        jQuery("#s-lg-content-votes-" + t.data.html.content_id).html(t.data.html.content), this.showPoll({
            pane: "votes",
            elt_id: t.data.html.content_id
        }), springSpace.UI.changeButtonStatus({
            active_text: "Submit",
            status: "active",
            button: this.submit_button
        })
    }, t.prototype.showPoll = function(t) {
        return "votes" == t.pane ? (jQuery("#s-lg-content-poll-" + t.elt_id).hide(), jQuery("#s-lg-content-votes-" + t.elt_id).show(), jQuery("#s-lg-show-votes-" + t.elt_id).hide()) : "poll" == t.pane && (jQuery("#s-lg-content-poll-" + t.elt_id).show(), jQuery("#s-lg-content-votes-" + t.elt_id).hide(), jQuery("#s-lg-show-votes-" + t.elt_id).show(), jQuery("#s-lg-show-votes-" + t.elt_id + " button").removeAttr("disabled")), !1
    }, this.Common = t
}, springSpace.common._construct(), springSpace.Common = new springSpace.common.Common, springSpace.ui._construct = function() {
    function t() {
        this.alertObj = null, this.alertConfig = null, this.alertTriggeredElt = null, this.CONST = {
            conf_close_delay: 2e3,
            load_img_notify: "//s3.amazonaws.com/libapps/apps/common/images/ajax-loader.gif",
            refresh_page_msg: '<i class="fa fa-refresh"></i> Refreshing page...'
        }
    }
    t.prototype.hoverColor = function(t) {
        jQuery(t.hoverEltSelector).hover((function() {
            jQuery(t.targetEltSelector).css("background", t.hoverColor)
        }), (function() {
            jQuery(t.targetEltSelector).css("background", "")
        }))
    }, t.prototype.focus = function(t) {
        t = springSpace.Util.setConfig(t);
        var e = springSpace.Util.setProp(t.id, ".s-lib-focus");
        jQuery(e).focus(), jQuery('a[data-toggle="tab"]').on("shown.bs.tab", (function(t) {
            jQuery(e).focus()
        }))
    }, t.prototype.popover = function(t) {
        jQuery("#" + t.elt_id).popover(t)
    }, t.prototype.showEditable = function(t) {
        var e = springSpace.Util.setProp(t.source_id, ""),
            a = springSpace.Util.setProp(t.id, "");
        a.length > 0 && jQuery("#" + e).click((function(t) {
            t.stopPropagation(), jQuery("#" + a).editable("toggle")
        }))
    }, t.prototype.initPopOvers = function() {
        jQuery("[data-toggle='popover']").popover()
    }, t.prototype.initHelpPopOvers = function() {
        jQuery("[data-toggle='help-popover-info']").popover({
            container: "body",
            placement: "auto right",
            trigger: "hover focus",
            html: !0,
            template: '<div class="popover s-lib-help-popover" role="tooltip"><div class="popover-content"></div></div>'
        }), springSpace.UI.escapeTooltips()
    }, t.prototype.escapeTooltips = function() {
        document.addEventListener("keydown", (function(t) {
            if ("Escape" === t.key) {
                document.querySelectorAll("a.help-icon-button[aria-describedby]").forEach((function(t) {
                    jQuery(t).popover("hide")
                }))
            }
        }))
    }, t.prototype.initChosen = function() {
        jQuery(".chosen-select").chosen(), jQuery(".chosen-select-deselect").chosen({
            allow_single_deselect: !0
        })
    }, t.prototype.setEltVal = function(t) {
        jQuery("#" + t.id).val(t.value), jQuery("#" + t.id).trigger("change")
    }, t.prototype.alert = function(t) {
        if (this.alertTriggeredElt = document.activeElement, !jQuery("#s-lib-alert-content").length) return console.log("API error: div #s-lib-alert-content not defined."), !1;
        jQuery("#s-lib-alert-content").html('<div class="s-lg-text-greyout bold text-center pad-med">Loading...</div>'), void 0 === t && (t = {}), this.alertConfig = t;
        var e = this,
            a = springSpace.Util.setProp(t.focus_on_close, !0),
            i = springSpace.Util.setProp(t.resizable, !0),
            s = springSpace.Util.setProp(t.async, !0),
            r = springSpace.Util.setProp(t.modal, !0),
            o = springSpace.Util.setProp(t.title, "[ADD TITLE]"),
            n = springSpace.Util.setProp(t.content, "[content]"),
            l = springSpace.Util.setProp(t.url, null),
            c = springSpace.Util.setProp(t.data, null),
            p = springSpace.Util.setProp(t.width, 400),
            u = springSpace.Util.setProp(t.height, 400),
            d = springSpace.Util.setProp(t.no_button, !1),
            h = springSpace.Util.setProp(t.button_class_ok, "btn-primary"),
            g = springSpace.Util.setProp(t.load_callback, null),
            m = springSpace.Util.setProp(t.error_callback, null),
            _ = springSpace.Util.setProp(t.close_callback, null),
            y = d ? {} : springSpace.Util.setProp(t.buttons, {
                OK: function() {
                    jQuery(this).dialog("close")
                }
            });
        return null !== l ? jQuery.ajax({
            url: l,
            cache: !1,
            data: c,
            async: s,
            type: t.type ?? "GET",
            success: function(t) {
                jQuery("#s-lib-alert-content").html(t), e.initPopOvers()
            },
            error: function(t, e, a) {
                null !== m && m(a)
            }
        }) : jQuery("#s-lib-alert-content").html(n), dialogConfig = {
            title: o,
            resizable: i,
            autoResize: !0,
            width: p,
            height: u,
            modal: r,
            buttons: y,
            open: function() {
                $buttonPane = jQuery(".ui-dialog-buttonset"), $buttonPane.children().addClass("btn").addClass("btn-sm").addClass("btn-default");
                var t = $buttonPane.find("button:first");
                t.attr("id", "s-lib-alert-btn-first"), h && t.addClass(h), $buttonPane.find("button").addClass("margin-right-med"), null !== g && g()
            },
            resize: function(t, e) {
                jQuery("#s-lib-alert").dialog("option", "position", "center")
            },
            create: function(t, e) {
                var a = jQuery(this).dialog("widget");
                jQuery(".ui-dialog-titlebar-close", a).replaceWith('<button class="btn btn-xs btn-default ui-dialog-titlebar-close"><i class="fa fa-close fa-fw" aria-hidden="true"></i><span class="sr-only">Closes the pop-up dialog</span></button>');
                var i = this;
                jQuery(".ui-dialog-titlebar-close").on("click", (function(t) {
                    jQuery(i).dialog("close")
                }))
            },
            beforeClose: function() {
                null !== _ && _()
            }
        }, jQuery.widget("ui.dialog", jQuery.ui.dialog, {
            _allowInteraction: function(t) {
                return !!this._super(t) || (t.target.ownerDocument != this.document[0] || (!!jQuery(t.target).closest(".cke_dialog").length || (!!jQuery(t.target).closest(".cke").length || void 0)))
            },
            _moveToTop: function(t, e) {
                t && this.options.modal || this._super(t, e)
            }
        }), this.alertObj = jQuery("#s-lib-alert"), this.alertObj.dialog(dialogConfig), a && this.alertObj.on("dialogclose", (function(t, a) {
            e.alertTriggeredElt.focus()
        })), !1
    }, t.prototype.setupAlertButtons = function(t, e) {
        let a = Object.keys(e);
        var i = [],
            s = "";
        for (let t = 0; t < a.length; t++) {
            const r = a[t],
                o = e[r];
            let n = "",
                l = "btn btn-sm margin-right-med ",
                c = "button",
                p = r,
                u = o;
            0 === t ? (n = "s-lib-alert-btn-first", l += "btn-primary") : (n = "s-lib-alert-btn-" + t, l += "btn-default"), "object" == typeof o && (c = o.type || "button", p = o.text, u = o.click), s += '<button type="' + c + '" class="' + l + '" id="' + n + '">' + p + "</button>", i.push([n, u])
        }
        t.html(s);
        for (let t = 0; t < i.length; t++) {
            var r = i[t];
            jQuery("#" + r[0]).on("click", r[1])
        }
    }, t.prototype.alertBS = function(t) {
        this.alertTriggeredElt = document.activeElement;
        let e = jQuery("#s-lib-alert");
        if (e.is(":visible")) return this.closeAlertBS(), void e.one("hidden.bs.modal", (function() {
            springSpace.UI.alertBS(t)
        }));
        let a = jQuery("#s-lib-alert-loading"),
            i = jQuery("#s-lib-alert-content"),
            s = jQuery("#s-lib-alert-buttons");
        if (0 === i.length) return console.log("API error: div #s-lib-alert-content not defined."), !1;
        void 0 === t && (t = {}), this.alertConfig = t;
        var r = this,
            o = springSpace.Util.setProp(t.focus_on_close, !0),
            n = springSpace.Util.setProp(t.async, !0),
            l = springSpace.Util.setProp(t.title, "[ADD TITLE]"),
            c = springSpace.Util.setProp(t.content, "[content]"),
            p = springSpace.Util.setProp(t.url, null),
            u = springSpace.Util.setProp(t.data, null),
            d = springSpace.Util.setProp(t.small, !1),
            h = springSpace.Util.setProp(t.load_callback, null),
            g = springSpace.Util.setProp(t.close_callback, null),
            m = springSpace.Util.setProp(t.buttons, {
                OK: springSpace.UI.closeAlertBS
            });
        jQuery("#s-lib-alert-title").text(l), jQuery("#s-lib-alert .modal-dialog").removeClass("modal-sm").removeClass("modal-lg").addClass(d ? "modal-sm" : "modal-lg"), null !== p ? (a.show(), i.hide(), s.html(""), jQuery.ajax({
            url: p,
            cache: !1,
            data: u,
            async: n,
            success: function(t) {
                a.hide(), springSpace.UI.setupAlertButtons(s, m), i.html(t).show(), null !== h && h(), r.initPopOvers()
            },
            error: function(t, e, r) {
                a.hide(), springSpace.UI.setupAlertButtons(s, m), i.html(r).show()
            }
        })) : (a.hide(), springSpace.UI.setupAlertButtons(s, m), i.html(c).show());
        return alertObj = new bootstrap.Modal("#s-lib-alert", {
            backdrop: "static"
        }), e.off("hidden.bs.modal").on("hidden.bs.modal", (function() {
            o && r.alertTriggeredElt.focus(), null !== g && g(), jQuery("#s-lib-alert-content, #s-lib-alert-buttons").empty()
        })), alertObj.show(), !1
    }, t.prototype.closeAlertBS = function() {
        jQuery("#s-lib-alert").modal("hide")
    }, t.prototype.getAlertButton = function(t) {
        return springSpace.Util.setObjProp("name", "", t), "" !== t.name ? jQuery(".ui-dialog-buttonset :button:contains('" + t.name + "')") : {}
    }, t.prototype.error = function(t) {
        springSpace.UI.alert({
            title: "Error",
            width: 800,
            height: 400,
            content: '<div class="alert alert-danger">Sorry, an error occurred while processing your request. If you continue to receive this error please contact us at https://ask.springshare.com/ask with the following error code along with a description of the action you were attempting.<BR><HR>' + t + "</div>"
        }), springSpace.UI.refreshAlert()
    }, t.prototype.errorBS = function(t) {
        springSpace.UI.alertBS({
            title: "Error",
            width: 800,
            height: 400,
            content: '<div class="alert alert-danger">Sorry, an error occurred while processing your request. If you continue to receive this error please contact us at https://ask.springshare.com/ask with the following error code along with a description of the action you were attempting.<BR><HR>' + t + "</div>"
        })
    }, t.prototype.refreshAlert = function() {
        this.closeAlert(), this.alert(this.alertConfig)
    }, t.prototype.closeAlert = function(t) {
        springSpace.UI.alertTriggeredElt && springSpace.UI.alertTriggeredElt.focus(), jQuery("#s-lib-alert-content").empty(), jQuery("#s-lib-alert").dialog("destroy")
    }, t.prototype.centerAlert = function(t) {
        jQuery("#s-lib-alert").dialog("option", "position", ["center", "center"])
    }, t.prototype.alertError = function(t) {
        springSpace.Util.setProp(t.error, "Undefined");
        var e = springSpace.Util.setProp(t.custom_msg, ""),
            a = springSpace.Util.setProp(t.title, "Error!"),
            i = "" !== e ? e : "<div class=\"alert alert-danger\">Yikes, looks like you've encountered an error. Please try again if you still get the error, please let us know what the issue is at <a href='https://ask.springshare.com/ask'>https://ask.springshare.com/ask</a></div>",
            s = springSpace.Util.setProp(t.width, 300),
            r = springSpace.Util.setProp(t.height, 250);
        springSpace.UI.alert({
            title: a,
            height: r,
            width: s,
            content: i
        })
    }, t.prototype.alertScrollToField = function(t) {
        if (springSpace.Util.setObjProp("main_tab_id", "s-lg-add-content-tab", t), springSpace.Util.setObjProp("scroll_to_id", "", t), jQuery("#" + t.main_tab_id).hasClass("active")) {
            var e = jQuery("#s-lib-alert");
            scrollTo = jQuery("#" + t.scroll_to_id), void 0 !== scrollTo.offset() && e.animate({
                scrollTop: scrollTo.offset().top - e.offset().top + e.scrollTop()
            })
        } else jQuery("#" + t.main_tab_id + " a").tab("show"), jQuery("#" + t.main_tab_id + " a").on("shown.bs.tab", (function(e) {
            var a = jQuery("#s-lib-alert");
            scrollTo = jQuery("#" + t.scroll_to_id), void 0 !== scrollTo.offset() && a.animate({
                scrollTop: scrollTo.offset().top - a.offset().top + a.scrollTop()
            })
        }))
    }, t.prototype.scrollToHashId = function(t) {
        springSpace.Util.setObjProp("scroll_to_id", "", t);
        var e = document.location.href.replace(location.hash, "");
        window.document.location.href = e + "#" + t.scroll_to_id
    }, t.prototype.changeButtonStatus = function(t) {
        var e = springSpace.Util.setProp(t.status, ""),
            a = springSpace.Util.setProp(t.disabled, jQuery(t.button).attr("disabled")),
            i = springSpace.Util.setProp(t.text, jQuery(t.button).html()),
            s = springSpace.Util.setProp(t.class, jQuery(t.button).attr("class")),
            r = springSpace.Util.setProp(t.active_text, "Save"),
            o = springSpace.Util.setProp(t.clicked_text, "Saving..."),
            n = springSpace.Util.setProp(t.conf_text, "Saved!"),
            l = springSpace.Util.setProp(t.active_class, "btn btn-primary"),
            c = (springSpace.Util.setProp(t.clicked_class, "btn btn-primary"), springSpace.Util.setProp(t.conf_class, "btn btn-success"));
        if ("" == e) jQuery(t.button).html(i), jQuery(t.button).attr("disabled", a), jQuery(t.button).attr("class", s);
        else if ("clicked" == e) jQuery(t.button).html(o), jQuery(t.button).attr("disabled", !0);
        else if ("conf" == e) {
            var p = springSpace.Util.setProp(t.timeout, 4e3);
            jQuery(t.button).removeClass(l), jQuery(t.button).addClass(c), jQuery(t.button).html(n), jQuery(t.button).attr("disabled", !1), setTimeout((function() {
                jQuery(t.button).removeClass(c), jQuery(t.button).addClass(l), jQuery(t.button).html(r)
            }), p)
        } else "active" == e && (jQuery(t.button).removeClass(c), jQuery(t.button).addClass(l), jQuery(t.button).attr("disabled", !1), jQuery(t.button).html(r))
    }, t.prototype.changeSaveButtonStatus = function(t) {
        var e = {
            save: "active",
            saving: "clicked",
            saved: "conf"
        };
        t.active_text || (t.active_text = "Save"), t.clicked_text || (t.clicked_text = "Saving..."), t.conf_text || (t.conf_text = "Saved"), this.changeButtonStatus({
            active_text: t.active_text,
            clicked_text: t.clicked_text,
            conf_text: t.conf_text,
            status: e[t.status],
            button: t.button
        })
    }, t.prototype.xhrPopover = function(t) {
        jQuery(".s-lib-popover").popover({
            container: "body",
            html: !0,
            content: function(t) {
                return jQuery.ajax({
                    url: jQuery(this).data("ajload"),
                    type: "get",
                    dataType: "json",
                    async: !1,
                    success: function(t) {
                        jQuery("#s-lib-popover-content").html(t.data.content)
                    }
                }), jQuery("#s-lib-popover-content").html()
            }
        }).click((function(t) {
            jQuery(".s-lib-popover").not(this).popover("hide"), jQuery(".popover-title").html(jQuery(this).data("original-title") + '<button type="button" class="close">&times;</button>'), jQuery(".close, .btn-close").click((function(t) {
                jQuery(".s-lib-popover").popover("hide")
            })), t.preventDefault()
        })), jQuery(".popclose").on("click", (function(t) {}))
    }, t.prototype.closeXhrPopover = function() {
        jQuery(".s-lib-popover").popover("hide")
    }, t.prototype.scrollToTop = function(t) {
        var e = springSpace.Util.setProp(t.scroll_time, 1500),
            a = springSpace.Util.setProp(t.position, 0);
        jQuery("html, body").animate({
            scrollTop: a
        }, e)
    }, t.prototype.clickOnEnter = function(t) {
        jQuery("." + t.class_name).keyup((function(e) {
            13 == e.keyCode && (e.preventDefault(), jQuery("#" + t.button_id).click())
        }))
    }, t.prototype.disableSubmitOnEnter = function(t) {
        jQuery("." + t.class_name).bind("keypress", (function(t) {
            if (13 == t.keyCode && "textarea" != t.target.tagName.toLowerCase()) return !1
        }))
    }, t.prototype.notifyInit = function() {
        jQuery.notification || (jQuery.notification = function(t, e) {
            if ("" !== t && null != t) {
                e = jQuery.extend(!0, {
                    className: "jquery-notification",
                    duration: 2e3,
                    freezeOnHover: !1,
                    hideSpeed: 250,
                    position: "center",
                    showSpeed: 250,
                    zIndex: 99999
                }, e), jQuery("#jquery-notification").length > 0 && (e.showSpeed = 0), jQuery("#jquery-notification").remove();
                var a, i, s, r, o, n = jQuery(window).width(),
                    l = jQuery(window).height(),
                    c = jQuery('<div id="jquery-notification" />');
                switch (c.appendTo(jQuery("BODY")).addClass(e.className).html(t).css({
                        position: "fixed",
                        display: "none",
                        zIndex: e.zIndex
                    }).mouseover((function() {
                        e.freezeOnHover && clearTimeout(o), jQuery(this).addClass(e.className + "-hover")
                    })).mouseout((function() {
                        jQuery(this).removeClass(e.className + "-hover"), e.freezeOnHover && (o = setTimeout(p, e.duration))
                    })).click(p).wrapInner('<div id="jquery-notification-message" />'), a = c.outerWidth(), i = c.outerHeight(), e.position) {
                    case "top":
                        s = 0, r = n / 2 - a / 2;
                        break;
                    case "top-left":
                        s = 0, r = 0;
                        break;
                    case "top-right":
                        s = 0, r = n - a;
                        break;
                    case "bottom":
                        s = l - i, r = n / 2 - a / 2;
                        break;
                    case "bottom-left":
                        s = l - i, r = 0;
                        break;
                    case "bottom-right":
                        s = l - i, r = n - a;
                        break;
                    case "left":
                        s = l / 2 - i / 2, r = 0;
                        break;
                    case "right":
                        s = l / 2 - i / 2, r = n - a;
                        break;
                    default:
                        s = l / 2 - i / 2, r = n / 2 - a / 2
                }
                c.css({
                    top: s,
                    left: r
                }).fadeIn(e.showSpeed, (function() {
                    o = setTimeout(p, e.duration)
                }))
            }

            function p() {
                clearTimeout(o), c.fadeOut(e.hideSpeed, (function() {
                    jQuery(this).remove()
                }))
            }
        })
    }, t.prototype.clearValidationErrors = function(t = !0) {
        jQuery(".s-lib-form-msg").html("").toggle(!1), t && springSpace.UI.notify({
            mode: "load",
            duration: 3e4
        })
    }, t.prototype.setValidationErrors = function(t, e = !1) {
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (jQuery("#form-msg-" + a).html(t[a]).toggle(!0), e && (jQuery(window).scrollTop(jQuery("#form-group-" + a).offset().top - 50), e = !1))
    }, t.prototype.notify = function(t) {
        switch (this.notifyInit(), springSpace.Util.setObjProp("msg", "", t), springSpace.Util.setObjProp("duration", 5e3, t), springSpace.Util.setObjProp("mode", "custom", t), settings = {
                duration: t.duration
            }, t.mode) {
            case "custom":
                break;
            case "load":
                t.msg = '<img src="' + springSpace.UI.CONST.load_img_notify + '" alt="Working..." />';
                break;
            case "success":
                t.msg = "Success.";
                break;
            case "error":
                t.msg = t.msg ? t.msg : "Error: Please try again.", settings = {
                    className: "jquery-notification-error",
                    duration: t.duration
                }
        }
        void 0 !== t.msg && "" != t.msg || (t.msg = "Error: Please try again."), jQuery.notification(t.msg, settings)
    }, t.prototype.notifyStop = function(t) {
        jQuery("#jquery-notification").hide()
    }, t.prototype.notifySuccessAndReloadPageBS = function() {
        springSpace.UI.closeAlertBS(), springSpace.UI.notify({
            mode: "success",
            duration: springSpace.UI.CONST.conf_close_delay
        }), setTimeout((function() {
            window.location.reload()
        }), springSpace.UI.CONST.conf_close_delay)
    }, t.prototype.loginRedirect = function(t) {
        t = t || {}, springSpace.Util.setObjProp("title", "Session Timeout", t), springSpace.Util.setObjProp("width", "400", t), springSpace.Util.setObjProp("height", "auto", t), springSpace.Util.setObjProp("content", "<p>Your session has timed out.</p><p>Refresh the page or click OK to be redirected to the login page.</p>", t), springSpace.UI.alert({
            title: t.title,
            width: t.width,
            height: t.height,
            content: t.content,
            buttons: {
                OK: function() {
                    jQuery("#s-lib-alert").dialog("close"), jQuery("#s-lib-alert-content").html(""), window.location.href = "/libapps/login.php"
                }
            }
        })
    }, t.prototype.disableButton = function(t) {
        springSpace.Util.setObjProp("btn_id", "s-lib-alert-btn-first", t), jQuery("#" + t.btn_id).addClass("disabled").prop("disabled", !0)
    }, t.prototype.enableButton = function(t) {
        springSpace.Util.setObjProp("btn_id", "s-lib-alert-btn-first", t), jQuery("#" + t.btn_id).removeClass("disabled").prop("disabled", !1)
    }, t.prototype.openTextEditorModal = function(t) {
        var e;
        if (springSpace.Util.setObjProp("content", "", t), jQuery.fn.modal.Constructor.prototype.enforceFocus = function() {}, !e) {
            '<div class="modal-dialog" role="document">',
            '<div class="modal-content">',
            '<div class="modal-header">',
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
            '<h4 class="modal-title" id="rte-validation-title">Validation Failed</h4>',
            "</div>",
            '<div class="modal-body">',
            "</div>",
            '<div class="modal-footer">',
            '<button id="s-lg-btn-save-code" type="button" class="btn btn-sm btn-default">Save Anyway</button>',
            '<button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Cancel - I\'ll fix my code</button>',
            "</div>",
            "</div>\x3c!-- /.modal-content --\x3e",
            "</div>\x3c!-- /.modal-dialog --\x3e",
            "</div>\x3c!-- /.modal --\x3e",
            (e = jQuery('<div id="s-lib-rte-validation-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="rte-validation-title"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="rte-validation-title">Validation Failed</h4></div><div class="modal-body"></div><div class="modal-footer"><button id="s-lg-btn-save-code" type="button" class="btn btn-sm btn-default">Save Anyway</button><button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Cancel - I\'ll fix my code</button></div></div>\x3c!-- /.modal-content --\x3e</div>\x3c!-- /.modal-dialog --\x3e</div>\x3c!-- /.modal --\x3e')).appendTo("body")
        }
        jQuery("#s-lib-rte-validation-modal .modal-body").html(t.content), jQuery("#s-lib-rte-validation-modal").modal()
    }, this.UI = t
}, springSpace.ui._construct(), springSpace.UI = new springSpace.ui.UI, springSpace.validation._construct = function() {
    function t() {}
    t.prototype.required = function(t) {
        var e = springSpace.Util.setProp(t.field_type, !1);
        return "checkbox" == e ? jQuery("#" + t.id).is(":checked") : "text" == e ? "" != jQuery("#" + t.id).val().trim() : void 0
    }, t.prototype.checkbox = function(t) {
        return this.require_checked = springSpace.Util.setProp(t.require_checked, !1), !this.require_checked || !!jQuery("#" + t.id).is(":checked")
    }, t.prototype.checkbox_group = function(t) {
        return this.require_checked = springSpace.Util.setProp(t.require_checked, !1), !this.require_checked || jQuery("input[name='" + t.group_name + "']:checked").length > 0
    }, t.prototype.email = function(t) {
        this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.val = springSpace.Util.setProp(jQuery.trim(t.val), "");
        return !(!this.allow_empty || "" != this.val) || !!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.val)
    }, t.prototype.email_list = function(t) {
        if (this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.val = springSpace.Util.setProp(jQuery.trim(t.val), ""), "" == this.val) return this.allow_empty;
        var e = this.val.replace(";", ",").split(","),
            a = this,
            i = !0;
        return jQuery.each(e, (function(t, e) {
            i = i && a.email({
                val: e,
                allow_empty: this.allow_empty
            })
        })), i
    }, t.prototype.url = function(t) {
        this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.allow_relative = springSpace.Util.setProp(t.allow_relative, !1), this.https_only = springSpace.Util.setProp(t.https_only, !1), this.val = springSpace.Util.setProp(jQuery.trim(t.val), "");
        var e = /^$|^https?:\/\/.+/gi;
        return "" == this.val ? this.allow_empty : this.allow_relative ? /^$|^\/.+/gi.test(this.val) || e.test(this.val) : this.https_only ? /^$|^https:\/\/.+/gi.test(this.val) : e.test(this.val)
    }, t.prototype.url_ldap = function(t) {
        this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.allow_relative = springSpace.Util.setProp(t.allow_relative, !1), this.val = springSpace.Util.setProp(jQuery.trim(t.val), "");
        var e = /^$|^ldaps?:\/\/.+/gi;
        return "" == this.val ? this.allow_empty : this.allow_relative && /^$|^\/.+/gi.test(this.val) || e.test(this.val)
    }, t.prototype.url_cas = function(t) {
        this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.allow_relative = springSpace.Util.setProp(t.allow_relative, !1), this.val = springSpace.Util.setProp(jQuery.trim(t.val), "");
        var e = /^$|^https:\/\/.+\/serviceValidate/gi;
        return "" == this.val ? this.allow_empty : this.allow_relative && /^$|^\/.+/gi.test(this.val) || e.test(this.val)
    }, t.prototype.slug = function(t) {
        if (this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.val = springSpace.Util.setProp(jQuery.trim(t.val), ""), this.allow_empty && "" == this.val) return !0;
        if (this.val.startsWith("go.php")) return !0;
        return /^[a-zA-Z0-9_\/-]+$/g.test(this.val)
    }, t.prototype.slug_unique = function(t) {
        this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.val = springSpace.Util.setProp(jQuery.trim(t.val), "");
        let e = springSpace.Util.setProp(jQuery.trim(t.friendly_id), 0),
            a = springSpace.Util.setProp(jQuery.trim(t.prefix), "");
        if (this.allow_empty && "" == this.val) return "";
        let i = "";
        return jQuery.ajax({
            url: "/libguides/friendly_urls/process/validate",
            type: "POST",
            async: !1,
            dataType: "json",
            data: {
                friendly_id: e,
                slug: this.val,
                prefix: a
            },
            success: function(t, e, a) {
                i = t.data.err_msg
            }
        }), i
    }, t.prototype.max_length = function(t) {
        this.val = jQuery("#" + t.id).val();
        var e = (this.val.match(/\n/g) || []).length,
            a = this.val.length + e,
            i = springSpace.Util.setProp(jQuery.trim(t.max_length), 0),
            s = springSpace.Util.setProp(t.use_form_msg, !0);
        if (jQuery("#" + t.id + "-counter").length && jQuery("#s-lg-guide-jscss-counter").html("Characters " + a + " / " + i), 0 == i || a <= i) return jQuery("#form-msg-" + t.id).html("").hide(), !0;
        var r = "You have reached the maximum length of this field - " + i + " characters.";
        return s ? jQuery("#form-msg-" + t.id).html(r).show() : alert(r), !1
    }, t.prototype.ip = function(t) {
        this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.val = springSpace.Util.setProp(jQuery.trim(t.val), "");
        var e = this.val.split(".");
        return "" == this.val ? this.allow_empty : 4 == e.length && (e[0] >= 0 && e[0] <= 255 && e[1] >= 0 && e[1] <= 255 && e[2] >= 0 && e[2] <= 255 && e[3] >= 0 && e[3] <= 255)
    }, t.prototype.number = function(t) {
        return this.allow_empty = springSpace.Util.setProp(t.allow_empty, !0), this.val = springSpace.Util.setProp(jQuery.trim(t.val), ""), "" == this.val || 0 == this.val ? this.allow_empty : jQuery.isNumeric(this.val) && this.val > 0
    }, this.Validation = t
}, springSpace.validation._construct(), springSpace.Validation = new springSpace.validation.Validation, springSpace.dynForm._construct = function() {
    function t(t) {
        this.elt_ref = springSpace.Util.setProp(t.elt_ref, ""), this.data_field = !1, this.fields = springSpace.Util.setProp(t.fields, {}), this.form_id = springSpace.Util.setProp(t.form_id, ""), this.url = springSpace.Util.setProp(t.url, ""), this.method = springSpace.Util.setProp(t.method, "POST"), this.button = springSpace.Util.setProp(t.button, null), this.form = jQuery("<form>"), this.msg_obj = springSpace.Util.setProp(t.msg_obj, null), this.msg_time = springSpace.Util.setProp(t.msg_time, 4e3), this.auto_submit = springSpace.Util.setProp(t.auto_submit, !0), this.return_type = springSpace.Util.setProp(t.return_type, "json"), this.callback = springSpace.Util.setProp(t.callback, null)
    }
    t.prototype.setProp = function(t, e) {
        return t || e
    }, t.prototype.build = function() {
        var t = this;
        jQuery(this.elt_ref).click((function() {
            if (t.form = jQuery("<form>"), jQuery(this).attr("data-field")) {
                var e = jQuery(this).attr("data-field");
                t.form.append(jQuery("<input>", {
                    name: "value",
                    value: jQuery("#" + e).val(),
                    type: "hidden"
                })), t.form.append(jQuery("<input>", {
                    name: "name",
                    value: e,
                    type: "hidden"
                }))
            } else t.form.append(jQuery("<input>", {
                name: "value",
                value: jQuery(this).val(),
                type: "hidden"
            })), t.form.append(jQuery("<input>", {
                name: "name",
                value: jQuery(this).attr("name"),
                type: "hidden"
            }));
            jQuery.each(t.fields, (function(e, a) {
                t.form.append(jQuery("<input>", {
                    name: a.name,
                    value: a.val,
                    type: a.type
                }))
            })), t.auto_submit && t.submit()
        }))
    }, t.prototype.buildStandard = function() {
        var t = this.elt_ref ? jQuery(this.elt_ref) : "";
        if (jQuery(t).attr("data-field")) {
            var e = jQuery(t).attr("data-field");
            this.form.append(jQuery("<input>", {
                name: "value",
                value: jQuery("#" + e).val(),
                type: "hidden"
            })), this.form.append(jQuery("<input>", {
                name: "name",
                value: e,
                type: "hidden"
            }))
        } else t && (this.form.append(jQuery("<input>", {
            name: "value",
            value: jQuery(t).val(),
            type: "hidden"
        })), this.form.append(jQuery("<input>", {
            name: "name",
            value: jQuery(t).attr("name"),
            type: "hidden"
        })));
        var a = this;
        jQuery.each(a.fields, (function(t, e) {
            a.form.append(jQuery("<input>", {
                name: e.name,
                value: e.val,
                type: e.type
            }))
        })), this.auto_submit && this.submit()
    }, t.prototype.submit = function() {
        var t = this;
        springSpace.UI.changeSaveButtonStatus({
            status: "saving",
            button: t.button
        }), xhr = jQuery.ajax({
            url: this.url,
            type: this.method,
            dataType: this.return_type,
            data: this.form.serialize(),
            success: function(e, a, i) {
                null !== t.callback ? t.callback(e, a) : t.msg_obj && t.button && (springSpace.UI.changeSaveButtonStatus({
                    status: "saved",
                    button: t.button
                }), setTimeout((function() {
                    springSpace.UI.changeSaveButtonStatus({
                        status: "save",
                        button: t.button
                    })
                }), t.msg_time))
            },
            error: function(t, e, a) {
                a && alert("Oops, sorry! Something unexpected happened: " + a + " \n\nThat might not mean much to you, but it probably does to the Springy Techs...you can let them know at support@springshare.com.")
            }
        })
    }, this.DynForm = t
}, springSpace.dynForm._construct(), springSpace.googleSearch._construct = function() {
    function t(t) {
        this.config = t, this.searchField = "", this.search_type = springSpace.Util.setProp(t.search_type, "web")
    }
    t.prototype.getSearchObj = function(t) {
        var e;
        return "web" == this.search_type ? e = new t.search.WebSearch : "patent" == this.search_type ? e = new t.search.PatentSearch : "books" == this.search_type ? e = new t.search.BookSearch : "scholar" == this.search_type && (e = new t.search.ScholarSearch), e
    }, t.prototype.Search = function(t) {
        this.googleSearch = this.getSearchObj(t), this.googleSearch.setSearchCompleteCallback(this, this.searchComplete, null);
        var e = document.forms[this.config.form_name];
        if (this.searchField = e[this.config.field_name], "" == this.searchField.value) return !1;
        document.getElementById("patent_search_content_" + this.config.content_id).innerHTML = springSpace.Util.LOADING_DOTS, this.googleSearch.setResultSetSize(this.config.num_results), this.googleSearch.execute(this.searchField.value), t.search.Search.getBranding("branding_" + this.config.content_id), document.getElementById("branding_" + this.config.content_id).style.display = "block"
    }, t.prototype.searchComplete = function() {
        if (document.getElementById("patent_search_content_" + this.config.content_id).innerHTML = "", this.googleSearch.results && this.googleSearch.results.length > 0) {
            for (var t = 0; t < this.googleSearch.results.length; t++) {
                var e = this.googleSearch.results[t].html.cloneNode(!0);
                document.getElementById("patent_search_content_" + this.config.content_id).appendChild(e)
            }
            var a = document.createElement("div");
            a.innerHTML = '<div style="padding: 10px 0 0 0;"><a href="http://www.google.com/search?tbm=pts&tbo=1&hl=en&q=' + escape(this.searchField.value) + '" target="_blank">View more results</a></div>', document.getElementById("patent_search_content_" + this.config.content_id).appendChild(a)
        }
    }, this.GoogleSearch = t
}, springSpace.googleSearch._construct(), springSpace.UI.imagePreview = function() {
    xOffset = 5, yOffset = 5, jQuery("a.preview").click((function(t) {
        var e = jQuery(this).data("title");
        "" == e && (e = "Image Preview"), springSpace.UI.alert({
            title: e,
            content: "<p id='preview'><img src='" + jQuery(this).data("src") + "' alt='Image preview' style='padding-right: 3px; max-width:100%; max-height:100%;' /></p>"
        }), springSpace.UI.centerAlert()
    }))
}, springSpace.UI.closeImagePreview = function(t) {
    t.title = t.t, jQuery("#preview").remove()
}, springSpace.UI.displayErItem = function(t) {
    springSpace.Util.setProp(t.processing_url, "/er_process.php"), springSpace.Util.setProp(t.site_id, 0), springSpace.Util.setProp(t.er_item_id, 0), springSpace.Util.setProp(t.er_course_id, 0), springSpace.Util.setProp(t.view_mode, 0), springSpace.Util.setProp(t.lti_id, 0), springSpace.Util.setProp(t.er_modal_title), springSpace.Util.setProp(t.er_modal_close_button), springSpace.Util.setProp(t.hit_refactored_api, !1);
    var e = t.hit_refactored_api ? "/ereserves/process/item" : t.processing_url + "?action=199";
    springSpace.UI.alert({
        title: t.er_modal_title,
        url: e,
        width: 800,
        height: 400,
        data: {
            site_id: t.site_id,
            er_item_id: t.er_item_id,
            er_course_id: t.er_course_id,
            view_mode: t.view_mode,
            lti_id: t.lti_id
        },
        type: "GET",
        buttons: {
            Close: function() {
                springSpace.UI.closeAlert()
            }
        }
    }), document.querySelector("#s-lib-alert-btn-first").textContent = t.er_modal_close_button
}, springSpace.UI.displayErSearchItem = function(t) {
    springSpace.Util.setProp(t.site_id, 0), springSpace.Util.setProp(t.er_item_id, 0), springSpace.Util.setProp(t.er_course_id, 0), springSpace.UI.alert({
        title: "View Item",
        url: "/ereserves/process/search_item",
        width: 800,
        height: 400,
        data: {
            site_id: t.site_id,
            er_item_id: t.er_item_id,
            er_course_id: t.er_course_id
        },
        type: "GET",
        buttons: {
            Close: function() {
                springSpace.UI.closeAlert()
            }
        }
    })
}, springSpace.session._construct = function() {
    function t() {
        this.CONST = {
            ACTION_SET_LG_SESSION_COOKIE: null
        }, this.auth_reload_script = ""
    }
    t.prototype.getLGSessionStatus = function(t) {
        return springSpace.Util.setObjProp("session_id", null, t), springSpace.Util.setObjProp("data", {}, t), jQuery.ajax({
            url: t.url,
            dataType: "jsonp",
            xhrFields: {
                withCredentials: !0
            },
            crossDomain: !0,
            cache: !1,
            jsonpCallback: "springSpace.Session.getLGSessionStatusCallback",
            data: t.data
        })
    }, t.prototype.getLGSessionStatusCallback = function(t) {
        t.data.session && !jQuery.isEmptyObject(t.data.session) && jQuery.ajax({
            url: "/auth_process.php",
            cache: !1,
            dataType: "json",
            data: {
                action: springSpace.Session.CONST.ACTION_AUTH_SET_LG_SESSION_COOKIE,
                account_id: t.data.session.account_id,
                site_id: t.data.session.site_id,
                customer_id: t.data.session.customer_id,
                account_level: t.data.session.level,
                acl: t.data.session.acl,
                auth_reload: t.data.auth_reload
            },
            success: function(t, e, a) {
                springSpace.UI.notifyStop(), 200 == t.errCode ? 1 == t.data.auth_reload && (springSpace.Session.auth_reload_script.length > 0 ? top.window.document.location.href = springSpace.Session.auth_reload_script : top.window.document.location.reload(!0)) : console.log("Error with LG session processing. " + t.errCode)
            },
            error: function(t, e, a) {
                springSpace.UI.notifyStop(), console.log("Error with LG session processing. " + a)
            }
        })
    }, t.prototype.imgReq = function(t) {
        return document.images ? (t.imgs[t.idx] = new Image, t.imgs[t.idx].src = t.src) : document.write('<img alt="Springshare session processing." src="' + t.src + '" style="height: 0px; width: 0px; display: none;" />'), !0
    }, this.Session = t
}, springSpace.session._construct(), springSpace.Session = new springSpace.session.Session, springSpace.dataTable._construct = function() {
    function t(t) {
        springSpace.Util.setObjProp("base_export_columns", [":visible"], t), springSpace.Util.setObjProp("table_selector", "#s-lg-admin-datatable", t);
        var e = this;
        this.id = (new Date).getTime().toString(36) + t.table_selector.replace("#", ""), this.proc_script = t.proc_script, springSpace.Util.setObjProp("proc_export_script", t.proc_script, t), this.proc_export_script = t.proc_export_script, this.proc_action = t.proc_action, this.button_defs = {
            copy: {
                extend: "copy",
                text: '<i class="fa fa-copy fa-fw"></i> Copy',
                exportOptions: {
                    columns: t.base_export_columns
                }
            },
            excel: {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel-o fa-fw"></i> Excel',
                exportOptions: {
                    columns: t.base_export_columns
                }
            },
            pdf: {
                extend: "pdf",
                text: '<i class="fa fa-file-pdf-o fa-fw"></i> PDF',
                exportOptions: {
                    columns: t.base_export_columns
                },
                orientation: "landscape"
            },
            export_all: {
                extend: "collection",
                text: '<i class="fa fa-database fa-fw"></i> Export All Records <span class="caret"></span>',
                buttons: [{
                    text: '<i class="fa fa-file-code-o fa-fw"></i> HTML',
                    action: function() {
                        window.open(e.proc_export_script + "?export=1&export_type=" + t.EXPORT_TYPES.html + "&" + jQuery.param(e.getAjaxParams()))
                    }
                }, {
                    text: '<i class="fa fa-file-excel-o fa-fw"></i> CSV',
                    action: function() {
                        window.location.href = e.proc_export_script + "?export=1&export_type=" + t.EXPORT_TYPES.excel + "&" + jQuery.param(e.getAjaxParams())
                    }
                }],
                autoClose: !0,
                fade: !0
            }
        }, this.defaults = {
            ajax: {
                url: this.proc_script,
                data: {
                    action: this.proc_action
                }
            },
            add_init_search: !1,
            qs_search_field: "id",
            dom: "<'row'<'col-sm-6'i><'col-sm-6'<'#s-lg-exp-btns-" + this.id + "'>B>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'l><'col-sm-7'p>>",
            pagingType: "full_numbers",
            lengthChange: !0,
            pageLength: 25,
            autoWidth: !0,
            serverSide: !0,
            stateSave: !0,
            stateDuration: -1,
            legacy: !0,
            order: [
                [1, "asc"]
            ],
            buttons: [this.button_defs.copy, this.button_defs.excel, this.button_defs.pdf, this.button_defs.export_all],
            scrollX: !1
        }, springSpace.Util.setObjProp("processing", !0, t), springSpace.Util.setObjProp("columnDefs", [], t), springSpace.Util.setObjProp("searchCols", [], t), springSpace.Util.setObjProp("column_filters", [], t), springSpace.Util.setObjProp("search_column_id", 0, t), this.table_selector = t.table_selector, this.EXPORT_TYPES = t.EXPORT_TYPES, this.table = {}, this.processing = t.processing, this.column_filters = t.column_filters, this.init_search_val = "", this.search_column_id = springSpace.Util.setProp(t.search_column_id, 0), this.serverSide = springSpace.Util.setProp(t.serverSide, this.defaults.serverSide), this.pagingType = springSpace.Util.setProp(t.pagingType, this.defaults.pagingType), this.pageLength = springSpace.Util.setProp(t.pageLength, this.defaults.pageLength), this.displayStart = springSpace.Util.setProp(t.displayStart, this.defaults.displayStart), this.lengthChange = springSpace.Util.setProp(t.lengthChange, this.defaults.lengthChange), this.legacy = springSpace.Util.setProp(t.legacy, this.defaults.legacy), this.dom = springSpace.Util.setProp(t.dom, this.defaults.dom), this.buttons = springSpace.Util.setProp(t.buttons, this.defaults.buttons), this.order = springSpace.Util.setProp(t.order, this.defaults.order), this.add_init_search = springSpace.Util.setProp(t.add_init_search, this.defaults.add_init_search), this.qs_search_field = springSpace.Util.setProp(t.qs_search_field, this.defaults.qs_search_field), this.ajax = springSpace.Util.setProp(t.ajax, this.defaults.ajax), this.autoWidth = springSpace.Util.setProp(t.autoWidth, this.defaults.autoWidth), this.columnDefs = t.columnDefs, this.searchCols = t.searchCols, this.stateSave = springSpace.Util.setProp(t.stateSave, this.defaults.stateSave), this.stateDuration = this.defaults.stateDuration, this.scrollX = springSpace.Util.setProp(t.scrollX, this.defaults.scrollX), this.customInitComplete = springSpace.Util.setProp(t.customInitComplete, (function() {})), this.drawCallback = springSpace.Util.setProp(t.drawCallback, (function() {})), this.initComplete = function(t, a) {
            e.table.buttons().container().appendTo(jQuery("#s-lg-exp-btns-" + e.id)), jQuery("#s-lg-exp-btns-" + e.id).addClass("pull-right"), jQuery("#s-lg-exp-btns-" + e.id + " a, #s-lg-exp-btns-" + e.id + " button").addClass("btn-sm"), stateData = jQuery(e.table_selector).DataTable().state.loaded(), jQuery(e.table_selector + " #s-lib-dt-filter-header td").each((function(t, a) {
                if (void 0 !== e.column_filters[t]) {
                    jQuery(a).html(""), stateData && (e.column_filters[t].stateData = stateData.columns[t].search);
                    var i = e.buildColumnFilter({
                        idx: t,
                        filter: e.column_filters[t],
                        aria_label: a.getAttribute("aria-label")
                    });
                    switch (jQuery(i).appendTo(jQuery(a)), e.column_filters[t].type) {
                        case "select":
                            jQuery(e.table_selector + " #s-lib-col-filter-" + t).on("change", (function() {
                                springSpace.Util.setObjProp("onchange", null, e.column_filters[t]), jQuery(e.table_selector).DataTable().state.save(), null !== e.column_filters[t].onchange ? e.column_filters[t].onchange(t, jQuery(this).val()) : e.table.columns(t).search(decodeURI(jQuery(this).val())).draw()
                            }));
                            break;
                        case "number":
                        case "text":
                            var s = (r = 0, function(t, e) {
                                clearTimeout(r), r = setTimeout(t, e)
                            });
                            springSpace.Util.setObjProp("delay", 500, e.column_filters[t]), jQuery(e.table_selector + " #s-lib-col-filter-" + t).on("keyup", (function() {
                                var a = jQuery(this).val();
                                a = "number" == e.column_filters[t].type && "" != a ? '"' + a.trim('"').trim("'") + '"' : decodeURI(a), s((function() {
                                    e.table.columns(t).search(a).draw(), jQuery(e.table_selector).DataTable().state.save()
                                }), e.column_filters[t].delay)
                            }));
                            break;
                        case "checkbox":
                            jQuery(e.table_selector + " #s-lib-col-filter-" + t).on("change", (function() {
                                jQuery(e.table_selector + " :checkbox").prop("checked", this.checked)
                            }))
                    }
                }
                var r
            })), jQuery(e.table_selector + " #s-lib-dt-filter-header").detach().appendTo(jQuery(e.table_selector + " thead")), e.customInitComplete(t, a)
        }, jQuery.fn.dataTable.ext.legacy.ajax = this.legacy
    }
    t.prototype.init = function(t) {
        t = springSpace.Util.setConfig(t), springSpace.Util.setObjProp("table_selector", this.table_selector, t), springSpace.Util.setObjProp("columnDefs", this.columnDefs, t), springSpace.Util.setObjProp("skip_load", !1, t), springSpace.Util.setObjProp("searchCols", this.searchCols, t), springSpace.Util.setObjProp("search", null, t), springSpace.Util.setObjProp("add_init_search", this.add_init_search, t), springSpace.Util.setObjProp("qs_search_field", this.qs_search_field, t), springSpace.Util.setObjProp("buttons", this.buttons, t);
        var e = {
            processing: this.processing,
            serverSide: this.serverSide,
            dom: this.dom,
            buttons: t.buttons,
            pagingType: this.pagingType,
            ajax: this.ajax,
            initComplete: this.initComplete,
            columnDefs: t.columnDefs,
            order: this.order,
            pageLength: this.pageLength,
            displayStart: this.displayStart,
            autoWidth: this.autoWidth,
            drawCallback: this.drawCallback,
            stateSave: this.stateSave,
            stateDuration: -1
        };
        t.skip_load && (e.deferLoading = 0), null !== t.search && (e.search = t.search), this.table = jQuery(t.table_selector).DataTable(e), t.add_init_search && (springSpace.Util.setObjProp("qs_search_field", "id", t), this.init_search_val = springSpace.Util.getQSParam({
            name: t.qs_search_field,
            qs: location.search
        }), this.init_search_val && this.table.columns(this.search_column_id).search('"' + this.init_search_val + '"').draw())
    }, t.prototype.getAjaxParams = function(t) {
        return this.table.ajax.params()
    }, t.prototype.addInitSearch = function(t) {
        var e = springSpace.Util.getQSParam({
            name: t.qs_search_field,
            qs: location.search
        });
        return e && (t.search = e), t
    }, t.prototype.buildColumnFilter = function(t) {
        springSpace.Util.setObjProp("filter", {}, t), springSpace.Util.setObjProp("idx", 0, t);
        const e = t.aria_label ? ' aria-label="' + t.aria_label + '" ' : "";
        switch (t.filter.type) {
            case "select":
                let i = "";
                return jQuery(t.filter.values).each((function(e, a) {
                    i += '<option value="' + encodeURI(a.value) + '"' + (t.filter.stateData && t.filter.stateData.search && a.value == t.filter.stateData.search ? " selected" : "") + ">" + a.label + "</option>"
                })), '<select id="s-lib-col-filter-' + t.idx + '" ' + e + ' class="form-control input-sm">' + i + "</select>";
            case "text":
            case "number":
                springSpace.Util.setObjProp("width", "100%", t.filter);
                var a = t.idx == this.search_column_id ? this.init_search_val : "";
                return t.filter.stateData && t.filter.stateData.search && (a = t.filter.stateData.search), '<input id="s-lib-col-filter-' + t.idx + '" ' + e + ' class="form-control input-sm" value="' + a + '" style="width: ' + t.filter.width + '" />';
            case "checkbox":
                return '<input id="s-lib-col-filter-' + t.idx + '" ' + e + ' type="checkbox" />';
            default:
                return ""
        }
    }, this.DataTable = t
}, springSpace.dataTable._construct(), springSpace.tagParser._construct = function() {
    function SpringshareTagParser(t) {
        this.CONST = {
            VALIDATION_TYPE_TAG: 1,
            VALIDATION_TYPE_ATTRIBUTE: 2,
            VALIDATION_TYPE_JQUERY_INCLUDE: 3,
            VALIDATION_TYPE_TAG_NOT_ALLOWED: 4,
            DISPLAY_TYPE_ALERT: "alert",
            DISPLAY_TYPE_HTML: "string",
            DISPLAY_TYPE_BS_MODAL: "bootstrap_modal"
        }, this.validation_url = "https://validator.w3.org/#validate_by_input+with_options", this.validation_msg = {
            text: '<i class="fa fa-code"></i> <a href="' + this.validation_url + '" target="_blank" title="Open the W3C Markup Validation Service in a new window">W3C Code Validation Service</a>. <i class="fa fa-fw fa-external-link" aria-hidden="true" title="This link opens in a new window"></i>'
        }, this.defaults = {
            tags: ["html", "head", "body", "script", "div", "style", "iframe", "object", "ul", "ol", "li", "span", "p", "b", "i", "a", "strong", "table", "tr", "td", "form", "h1", "h2", "h3"],
            tag_defs: {
                script: {
                    allow: !0
                },
                div: {
                    allow: !0
                },
                style: {
                    allow: !0
                },
                iframe: {
                    allow: !0
                },
                html: {
                    allow: !1
                },
                body: {
                    allow: !1
                },
                head: {
                    allow: !1
                }
            },
            message: '<div class="alert alert-danger"><i class="fa fa-exclamation-triangle"></i> <span class="bold">There are some problems with your HTML!</span><p>If you are confident that your code will work as-is, you can override by clicking Save Anyway, below. Otherwise, click Cancel to fix the issues reported below.</p><p class="pad-top-med">Properly formatted and structured HTML also helps with accessibility. For more information, visit the ' + this.validation_msg.text + "</p></div>",
            display_type: this.CONST.DISPLAY_TYPE_BS_MODAL,
            alert_height: 400,
            alert_width: 650
        }, this.enable = this.setProp(t.enable, !1), this.data = this.setProp(t.data, ""), this.elt_id = this.setProp(t.elt_id, ""), this.selector = this.setProp(t.selector, ""), this.tags = this.setProp(t.tags, this.defaults.tags), this.tag_defs = this.setProp(t.tag_defs, this.defaults.tag_defs), this.message = this.setProp(t.message, this.defaults.message), this.return_type = this.setProp(t.return_type, this.defaults.display_type), this.alert_height = this.setProp(t.height, this.defaults.alert_height), this.alert_width = this.setProp(t.width, this.defaults.alert_width), this.output = "", this.parseSuccess = !0, this.parseFailures = []
    }
    SpringshareTagParser.prototype.setProp = function(t, e) {
        return t || e
    }, SpringshareTagParser.prototype.validMatches = function(t) {
        return null !== t && t.length > 0
    }, SpringshareTagParser.prototype.getData = function() {
        var t = this.data.length > 0 ? this.data : null !== jQuery("#" + this.elt_id).length ? jQuery("#" + this.elt_id).val() : jQuery(this.selector).length ? jQuery(this.selector).val() : null;
        if (void 0 === t || null == t) {
            var e = {
                elt_id: this.elt_id,
                selector: this.selector,
                data_length: this.data.length
            };
            return console.log("There is no 'data'. It's undefined. Here is some data that may be of help:"), console.log(e), ""
        }
        return t
    }, SpringshareTagParser.prototype.parse = function() {
        if (!this.enable) return !0;
        var data = this.getData();
        if ("" == data) return !0;
        for (var that = this, tag_count = this.tags.length, i = 0; i < tag_count; i++) {
            var current_tag = this.tags[i];
            eval("var open_pattern=/<" + current_tag + "[^><]*>/gi"), eval("var close_pattern=/<\\/" + current_tag + "[ ]*>/gi");
            var open_matches = data.match(open_pattern),
                close_matches = data.match(close_pattern);
            if (this.validMatches(open_matches)) {
                var filter_matches = [];
                jQuery.each(open_matches, (function(t, e) {
                    var a = e.replace("<", "").replace(">", "").split(/\s/);
                    a.length > 0 && a[0] == current_tag && filter_matches.push(e)
                })), open_matches = filter_matches
            }
            this.validMatches(open_matches) && this.validMatches(close_matches) ? open_matches.length !== close_matches.length && this.setFailureData({
                tag: current_tag,
                type: this.CONST.VALIDATION_TYPE_TAG,
                data: {
                    open_count: open_matches.length,
                    close_count: close_matches.length
                }
            }) : (this.validMatches(open_matches) || this.validMatches(close_matches)) && (this.validMatches(close_matches) ? this.validMatches(open_matches) || this.setFailureData({
                tag: current_tag,
                type: this.CONST.VALIDATION_TYPE_TAG,
                data: {
                    open_count: 0,
                    close_count: close_matches.length
                }
            }) : this.setFailureData({
                tag: current_tag,
                type: this.CONST.VALIDATION_TYPE_TAG,
                data: {
                    open_count: open_matches.length,
                    close_count: 0
                }
            }));
            var check_allow_flags = void 0 !== this.tag_defs[current_tag] && (this.tag_defs[current_tag] && !this.tag_defs[current_tag].allow);
            this.validMatches(open_matches) && jQuery.each(open_matches, (function(t, e) {
                var a = e.split('"').length - 1,
                    i = e.split("'").length - 1;
                a % 2 == 1 && that.setFailureData({
                    tag: current_tag,
                    type: that.CONST.VALIDATION_TYPE_ATTRIBUTE,
                    data: {
                        quote_type: "double",
                        quote_count: a,
                        tag: e
                    }
                }), i % 2 == 1 && that.setFailureData({
                    tag: current_tag,
                    type: that.CONST.VALIDATION_TYPE_ATTRIBUTE,
                    data: {
                        quote_type: "single",
                        quote_count: i,
                        tag: e
                    }
                }), check_allow_flags && that.setFailureData({
                    tag: current_tag,
                    type: that.CONST.VALIDATION_TYPE_TAG_NOT_ALLOWED,
                    data: {
                        tag: e
                    }
                })
            })), this.validMatches(close_matches) && jQuery.each(close_matches, (function(t, e) {
                check_allow_flags && that.setFailureData({
                    tag: current_tag,
                    type: that.CONST.VALIDATION_TYPE_TAG_NOT_ALLOWED,
                    data: {
                        tag: e
                    }
                })
            }))
        }
        eval("var jq_pattern=/<script[\\s]*.+src=.+jquery.(min.js|js)[^><]*>/gi");
        var jq_matches = data.match(jq_pattern);
        return null !== jq_matches && jQuery.each(jq_matches, (function(t, e) {
            that.setFailureData({
                type: that.CONST.VALIDATION_TYPE_JQUERY_INCLUDE,
                data: {
                    tag: e
                }
            })
        })), this.displayFailure()
    }, SpringshareTagParser.prototype.displayFailure = function() {
        if (!this.parseSuccess) {
            switch (alert_message = this.displayAlert(), this.initData(), this.output = "<div>" + alert_message + "</div>", this.return_type) {
                case this.CONST.DISPLAY_TYPE_ALERT:
                    springSpace.UI.alert({
                        title: "Validation Error",
                        height: this.alert_height,
                        width: this.alert_width,
                        content: this.output
                    });
                    break;
                case this.CONST.DISPLAY_TYPE_HTML:
                    break;
                case this.CONST.DISPLAY_TYPE_BS_MODAL:
                    springSpace.UI.openTextEditorModal({
                        content: this.output
                    })
            }
            return !1
        }
        return this.initData(), !0
    }, SpringshareTagParser.prototype.initData = function() {
        this.parseSuccess = !0, this.parseFailures = []
    }, SpringshareTagParser.prototype.setFailureData = function(t) {
        springSpace.Util.setObjProp("tag", "", t), springSpace.Util.setObjProp("type", 0, t), springSpace.Util.setObjProp("data", {}, t), this.parseSuccess = !1, this.parseFailures.push({
            tag: t.tag,
            type: t.type,
            data: t.data
        })
    }, SpringshareTagParser.prototype.displayAlert = function() {
        var t = this.message;
        if (!this.parseSuccess) {
            var e = 1;
            for (var a in this.parseFailures) {
                switch (this.parseFailures[a].type) {
                    case this.CONST.VALIDATION_TYPE_TAG:
                        t = t + "<tr><td>" + e + "</td><td>The <code>" + this.parseFailures[a].tag + '</code> tag has <span class="label label-primary">' + this.parseFailures[a].data.open_count + '</span> opening tag(s) and <span class="label label-primary">' + this.parseFailures[a].data.close_count + "</span> closing tag(s)</td></tr>";
                        break;
                    case this.CONST.VALIDATION_TYPE_ATTRIBUTE:
                        t = t + "<tr><td>" + e + "</td><td>The <code>" + jQuery("<div/>").text(this.parseFailures[a].data.tag).html() + '</code> tag attribute has an odd number (<span class="label label-primary">' + this.parseFailures[a].data.quote_count + "</span>) of " + this.parseFailures[a].data.quote_type + " quotes</td></tr>";
                        break;
                    case this.CONST.VALIDATION_TYPE_JQUERY_INCLUDE:
                        t = t + "<tr><td>" + e + "</td><td>Please remove this jQuery include for LibGuides to function properly: <code>" + jQuery("<div/>").text(this.parseFailures[a].data.tag).html() + "</code></td></tr>";
                        break;
                    case this.CONST.VALIDATION_TYPE_TAG_NOT_ALLOWED:
                        t = t + "<tr><td>" + e + '</td><td>The following tag is <span class="label label-danger">not allowed</span> and should be removed: <code>' + jQuery("<div/>").text(this.parseFailures[a].data.tag).html() + "</code></td></tr>"
                }
                e++
            }
        }
        return '<table class="table table-striped table-compact table-hover table-bordered"><thead><tr><th>#</th><th>Details</th></tr></thead><tbody>' + t + "</tbody></table>"
    }, this.SpringshareTagParser = SpringshareTagParser
}, springSpace.tagParser._construct();
/*! springshare 1.11.0 */

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
                            success: function(n) {
                                n.data && n.data.content ? e.ajcontent[t] = n.data.content : n.content && (e.ajcontent[t] = n.content)
                            }
                        }).fail((function() {
                            e.ajcontent[t] = "Sorry, an error occurred."
                        })), e.ajcontent[t]
                    }
                    return e.ajcontent[t]
                }
                var n = $(this).attr("data-popover-text") ? "<p>" + $(this).attr("data-popover-text") + "</p>" : $("#" + $(this).attr("data-popover-id")).html();
                return n += '<button type="button" class="btn btn-xs btn-link btn-close pull-right">close</button>'
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
/*! springshare 1.11.0 */

var springSpace = springSpace || {};
springSpace.cookieConsent = springSpace.cookieConsent || {}, springSpace.cookieConsent.alert = function(e) {
    this.setConfig = function(e) {
        void 0 === e && (e = {});
        var t = e.okay ? e.okay : "OK";
        this.placement_opts = ["bottom", "top"], this.placement = -1 !== this.placement_opts.indexOf(e.placement) ? e.placement : "bottom", this.cookie_name = "springy_cookie_consent", this.cookie_notice_accepted = "ok", this.cookie_exp_days = e.cookie_exp_days ? e.cookie_exp_days : 180, this.read_more_callback = e.read_more_callback ? e.read_more_callback : function() {}, this.aria_label = e.aria_label || "User Privacy Alert", this.fade_in = 500, this.fade_out = 200, this.container_id = "s-ui-cc-container", this.close_button_id = "s-ui-cc-close-btn", this.read_more_elt_id = "s-ui-cc-read-more-link", this.consent_message = e.consent_message ? e.consent_message : "By using our website you are consenting to our use of cookies in accordance with our cookie policy.", this.content = '<div id="' + this.container_id + '" class="container" style="display: none;">    <aside class="navbar navbar-default navbar-fixed-' + this.placement + " fixed-" + this.placement + '" id="s-ui-cc-navbar" aria-label="' + this.aria_label + '">        <div id="s-ui-cc-main" class="container">            <div class="navbar-inner navbar-content-center" id="s-ui-cc-msg-container">                <div id="s-ui-cc-msg">' + this.consent_message + '<button id="' + this.close_button_id + '" type="button" class="btn btn-sm btn-default btn-light" data-dismiss="alert" aria-label="Close">' + t + "</button></div>            </div>        </div>    </aside></div>"
    }, this.consentCookieAccepted = function() {
        return this.getCookie(this.cookie_name) === this.cookie_notice_accepted
    }, this.setCookie = function(e, t, i) {
        var o = new Date;
        o.setDate(o.getDate() + i);
        var n = encodeURI(t) + (null === i ? "" : "; expires=" + o.toUTCString()),
            s = "https:" === location.protocol ? "; secure" : "";
        document.cookie = e + "=" + n + "; path=/; samesite=lax;" + s, jQuery("#" + this.container_id).hide("slow")
    }, this.getCookie = function(e) {
        var t, i, o, n = document.cookie.split(";");
        for (t = 0; t < n.length; t++)
            if (i = n[t].indexOf("="), n[t].substr(0, i).replace(/^\s+|\s+$/g, "") === e) return o = n[t].substr(i + 1), decodeURI(o);
        return null
    }, this.handleClose = function() {
        this.setCookie(this.cookie_name, this.cookie_notice_accepted, this.cookie_exp_days), jQuery("#" + this.container_id).fadeOut(this.fade_out)
    }, this.handleAlert = function() {
        this.consentCookieAccepted() || (jQuery("body").prepend(this.content), jQuery("#" + this.container_id).fadeIn(this.fade_in), jQuery("#" + this.close_button_id).on("click", this.handleClose.bind(this)), jQuery("#" + this.read_more_elt_id).attr("href", "#"), jQuery("#" + this.read_more_elt_id).on("click", this.read_more_callback.bind(this)))
    }, this.setConfig(e), jQuery(document).ready(this.handleAlert.bind(this))
};