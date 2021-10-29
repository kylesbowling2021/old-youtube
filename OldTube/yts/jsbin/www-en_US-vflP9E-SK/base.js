var _yt_www = {};
(function(g) {
    var window = this;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ca, aaa, fa, ha, ma, na, qa, baa, caa, daa, va, wa, ya, za, Aa, Ca, Da, gaa, haa, Pa, iaa, Fb, $b, ac, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, naa, Wc, ed, gd, hd, fd, id, jd, kd, ld, md, td, Bd, Cd, Dd, Ed, Hd, Md, Nd, paa, raa, taa, me, we, uaa, vaa, xe, ye, Ae, Be, yaa, xaa, Ce, De, Ee, Fe, Ge, Ie, Ke, Eaa, Caa, Daa, Haa, Faa, Gaa, Jaa, Qe, Se, Te, Xe, Kaa, $e, gf, ff, Maa, kf, lf, mf, nf, Naa, of , pf, tf, Oaa, uf, Cf, Mf, Kf, Af, Hf, Qaa, Pf, Nf, Of, Sf, Paa, Raa, Zf, Saa, Taa, dg, eg, fg, hg, Uaa, Vaa, Waa, qg, sg, Yaa, xg, yg, zg, Zaa, Cg, Hg, Ig, Jg, Kg, Lg, Ng, Qg, Rg, Sg, cba, bh, eh, eba, xh, sh, Ah, Eh, Oh, hba, gba, gi, ji, si, iba, jba,
        lba, mba, yi, zi, nba, Ei, Ci, Ai, oba, Gi, Hi, Ii, pba, Pi, qba, Qi, Ri, Si, Vi, Wi, $i, aj, bj, cj, dj, ej, fj, gj, hj, ij, jj, kj, lj, mj, nj, oj, rba, pj, qj, rj, tj, tba, uba, vj, xj, vba, yj, zj, wba, xba, Cj, Dj, Ej, Fj, Ij, yba, zba, Aba, Bba, Cba, Kj, Jj, Lj, Mj, Pj, Eba, Dba, Fba, Qj, Hba, Nj, Oj, Sj, Jba, Rj, ak, Xf, kk, Oba, Pba, Qba, nk, sk, tk, uk, vk, yk, Ck, Dk, Ek, Gk, Rba, Uba, Nk, Uk, Sba, Zk, gl, jl, ll, Vba, nl, Wba, sl, rl, ul, ql, tl, Cl, Al, Dl, Gl, Bl, El, Hl, Zba, Ll, zl, Ml, $ba, Il, Kl, Fl, Jl, aca, Sl, Tl, bca, Vl, Yl, Zl, Xl, $l, am, bm, dm, em, Ul, fm, cm, hm, dca, im, km, jm, lm, mm, om, pm, rm, um, qm, vm, wm, kca,
        zm, xm, Jm, Im, Hm, hca, Km, Lm, jca, Am, ica, rca, qca, pca, Pm, oca, mca, nca, sca, tca, vca, wca, $m, Ym, bn, xca, cn, en, yca, zca, fn, gn, mn, pn, qn, rn, vn, wn, xn, Fca, Gca, nn, ln, Eca, on, Hca, An, Bn, ea, da, eaa, Ea, Na, faa;
    g.ba = function(a) {
        return function() {
            return g.aa[a].apply(this, arguments)
        }
    };
    ca = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    aaa = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    fa = function(a, b) {
        if (b) a: {
            for (var c = da, d = a.split("."), e = 0; e < d.length - 1; e++) {
                var f = d[e];
                if (!(f in c)) break a;
                c = c[f]
            }
            d = d[d.length - 1];e = c[d];f = b(e);f != e && null != f && ea(c, d, {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
    };
    ha = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    };
    g.ia = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ca(a)
        }
    };
    g.ja = function(a) {
        if (!(a instanceof Array)) {
            a = g.ia(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    g.p = function(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Y = b.prototype
    };
    ma = function() {
        this.L = !1;
        this.G = null;
        this.F = void 0;
        this.C = 1;
        this.H = this.N = 0;
        this.X = this.D = null
    };
    na = function(a) {
        if (a.L) throw new TypeError("Generator is already running");
        a.L = !0
    };
    qa = function(a, b) {
        a.D = {
            exception: b,
            gp: !0
        };
        a.C = a.N || a.H
    };
    g.ra = function(a, b, c) {
        a.C = c;
        return {
            value: b
        }
    };
    g.sa = function(a, b) {
        a.N = 2;
        void 0 != b && (a.H = b)
    };
    g.ta = function(a) {
        a.N = 0;
        a.D = null
    };
    baa = function(a) {
        a.X = [a.D];
        a.N = 0;
        a.H = 0
    };
    caa = function(a) {
        var b = a.X.splice(0)[0];
        (b = a.D = a.D || b) ? b.gp ? a.C = a.N || a.H : void 0 != b.Pb && a.H < b.Pb ? (a.C = b.Pb, a.D = null) : a.C = a.H: a.C = 0
    };
    g.ua = function(a) {
        this.C = new ma;
        this.F = a
    };
    daa = function(a, b) {
        na(a.C);
        var c = a.C.G;
        if (c) return va(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.C["return"]);
        a.C["return"](b);
        return wa(a)
    };
    va = function(a, b, c, d) {
        try {
            var e = b.call(a.C.G, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.C.L = !1, e;
            var f = e.value
        } catch (k) {
            return a.C.G = null, qa(a.C, k), wa(a)
        }
        a.C.G = null;
        d.call(a.C, f);
        return wa(a)
    };
    wa = function(a) {
        for (; a.C.C;) try {
            var b = a.F(a.C);
            if (b) return a.C.L = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.C.F = void 0, qa(a.C, c)
        }
        a.C.L = !1;
        if (a.C.D) {
            b = a.C.D;
            a.C.D = null;
            if (b.gp) throw b.exception;
            return {
                value: b["return"],
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    g.xa = function(a) {
        this.next = function(b) {
            na(a.C);
            a.C.G ? b = va(a, a.C.G.next, b, a.C.J) : (a.C.J(b), b = wa(a));
            return b
        };
        this["throw"] = function(b) {
            na(a.C);
            a.C.G ? b = va(a, a.C.G["throw"], b, a.C.J) : (qa(a.C, b), b = wa(a));
            return b
        };
        this["return"] = function(b) {
            return daa(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    };
    ya = function(a, b) {
        var c = new g.xa(new g.ua(b));
        la && a.prototype && la(c, a.prototype);
        return c
    };
    za = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Aa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    };
    Ca = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    g.t = function(a, b, c) {
        a = a.split(".");
        c = c || g.q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    g.Fa = function(a) {
        if (a && a != g.q) return Da(a.document);
        null === Ea && (Ea = Da(g.q.document));
        return Ea
    };
    Da = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && eaa.test(a) ? a : ""
    };
    g.u = function(a, b) {
        for (var c = a.split("."), d = b || g.q, e = 0; e < c.length; e++)
            if (d = d[c[e]], null == d) return null;
        return d
    };
    g.Ga = function() {};
    g.Ia = function(a) {
        a.Cc = void 0;
        a.getInstance = function() {
            return a.Cc ? a.Cc : a.Cc = new a
        }
    };
    g.Ja = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    g.Ka = function(a) {
        var b = g.Ja(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    g.La = function(a) {
        return "function" == g.Ja(a)
    };
    g.Ma = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    g.Oa = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Na) && a[Na] || (a[Na] = ++faa)
    };
    gaa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    haa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    g.v = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.v = gaa : g.v = haa;
        return g.v.apply(null, arguments)
    };
    g.w = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    g.z = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Y = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    Pa = function(a) {
        return a
    };
    g.Qa = function(a) {
        var b = null,
            c = g.q.trustedTypes;
        if (!c || !c.createPolicy) return b;
        try {
            b = c.createPolicy(a, {
                createHTML: Pa,
                createScript: Pa,
                createScriptURL: Pa
            })
        } catch (d) {
            g.q.console && g.q.console.error(d.message)
        }
        return b
    };
    g.Ra = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, g.Ra);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    iaa = function(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.D = !b && /[?&]ae=1(&|$)/.test(a);
        this.G = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.C = /[?&]adurl=([^&]*)/.exec(a)) && this.C[1]) {
            try {
                var c = decodeURIComponent(this.C[1])
            } catch (d) {
                c = null
            }
            this.F = c
        }
    };
    g.Sa = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    g.Ua = function(a, b, c) {
        b = g.Ta(a, b, c);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    g.Ta = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    g.Wa = function(a, b) {
        return 0 <= (0, g.Va)(a, b)
    };
    g.Xa = function(a) {
        return 0 == a.length
    };
    g.Za = function(a, b) {
        var c = (0, g.Va)(a, b),
            d;
        (d = 0 <= c) && g.Ya(a, c);
        return d
    };
    g.Ya = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    g.$a = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    g.ab = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (g.Ka(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var k = 0; k < f; k++) a[e + k] = d[k]
            } else a.push(d)
        }
    };
    g.bb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    g.cb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    g.db = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    };
    g.eb = function(a) {
        for (var b in a) return !1;
        return !0
    };
    g.fb = function(a) {
        for (var b in a) delete a[b]
    };
    g.gb = function(a, b) {
        b in a && delete a[b]
    };
    g.hb = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    };
    g.ib = function(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    };
    g.jb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    g.kb = function(a) {
        var b = g.Ja(a);
        if ("object" == b || "array" == b) {
            if (g.La(a.clone)) return a.clone();
            b = "array" == b ? [] : {};
            for (var c in a) b[c] = g.kb(a[c]);
            return b
        }
        return a
    };
    g.mb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < lb.length; f++) c = lb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    g.ob = function() {
        void 0 === nb && (nb = g.Qa("goog#html"));
        return nb
    };
    g.rb = function(a, b) {
        this.C = a === pb && b || "";
        this.F = qb
    };
    g.sb = function(a) {
        return a instanceof g.rb && a.constructor === g.rb && a.F === qb ? a.C : "type_error:Const"
    };
    g.tb = function(a) {
        return new g.rb(pb, a)
    };
    g.ub = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    g.vb = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    g.wb = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    g.Db = function(a, b) {
        if (b) a = a.replace(xb, "&amp;").replace(yb, "&lt;").replace(zb, "&gt;").replace(Ab, "&quot;").replace(Bb, "&#39;").replace(Cb, "&#0;");
        else {
            if (!jaa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(xb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(yb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(zb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ab, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Bb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Cb, "&#0;"))
        }
        return a
    };
    g.Gb = function(a, b) {
        for (var c = 0, d = (0, g.Eb)(String(a)).split("."), e = (0, g.Eb)(String(b)).split("."), f = Math.max(d.length, e.length), k = 0; 0 == c && k < f; k++) {
            var l = d[k] || "",
                m = e[k] || "";
            do {
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                if (0 == l[0].length && 0 == m[0].length) break;
                c = Fb(0 == l[1].length ? 0 : parseInt(l[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || Fb(0 == l[2].length, 0 == m[2].length) || Fb(l[2], m[2]);
                l = l[3];
                m = m[3]
            } while (0 == c)
        }
        return c
    };
    Fb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.Jb = function(a, b) {
        this.F = a === Hb && b || "";
        this.D = Ib
    };
    g.Kb = function(a) {
        if (a instanceof g.Jb && a.constructor === g.Jb && a.D === Ib) return a.F;
        g.Ja(a);
        return "type_error:SafeUrl"
    };
    g.Mb = function(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(kaa);
        return b && laa.test(b[1]) ? g.Lb(a) : null
    };
    g.Pb = function(a) {
        a instanceof g.Jb || (a = "object" == typeof a && a.Nd ? a.Sc() : String(a), a = Nb.test(a) ? g.Lb(a) : null);
        return a || g.Ob
    };
    g.Qb = function(a, b) {
        if (a instanceof g.Jb) return a;
        a = "object" == typeof a && a.Nd ? a.Sc() : String(a);
        if (b && /^data:/i.test(a)) {
            var c = g.Mb(a) || g.Ob;
            if (c.Sc() == a) return c
        }
        Nb.test(a) || (a = "about:invalid#zClosurez");
        return g.Lb(a)
    };
    g.Lb = function(a) {
        return new g.Jb(Hb, a)
    };
    g.Sb = function() {
        this.C = "";
        this.F = g.Rb
    };
    g.Tb = function(a) {
        var b = new g.Sb;
        b.C = a;
        return b
    };
    g.Vb = function() {
        this.C = "";
        this.F = g.Ub
    };
    g.Wb = function(a) {
        var b = new g.Vb;
        b.C = a;
        return b
    };
    g.Yb = function(a) {
        return -1 != g.Xb.indexOf(a)
    };
    g.Zb = function() {
        return g.Yb("Trident") || g.Yb("MSIE")
    };
    $b = function() {
        return g.Yb("Firefox") || g.Yb("FxiOS")
    };
    g.bc = function() {
        return g.Yb("Safari") && !(ac() || g.Yb("Coast") || g.Yb("Opera") || g.Yb("Edge") || g.Yb("Edg/") || g.Yb("OPR") || $b() || g.Yb("Silk") || g.Yb("Android"))
    };
    ac = function() {
        return (g.Yb("Chrome") || g.Yb("CriOS")) && !g.Yb("Edge")
    };
    g.cc = function() {
        return g.Yb("Android") && !(ac() || $b() || g.Yb("Opera") || g.Yb("Silk"))
    };
    g.ec = function() {
        this.F = "";
        this.G = dc;
        this.D = null
    };
    g.gc = function(a) {
        return g.fc(a).toString()
    };
    g.fc = function(a) {
        if (a instanceof g.ec && a.constructor === g.ec && a.G === dc) return a.F;
        g.Ja(a);
        return "type_error:SafeHtml"
    };
    g.ic = function(a) {
        if (a instanceof g.ec) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Jk && (c = a.C());
        return g.hc(g.Db(b && a.Nd ? a.Sc() : String(a)), c)
    };
    g.hc = function(a, b) {
        return g.jc(a, b)
    };
    g.jc = function(a, b) {
        var c = new g.ec,
            d = g.ob();
        c.F = d ? d.createHTML(a) : a;
        c.D = b;
        return c
    };
    g.kc = function(a, b) {
        g.sb(a);
        g.sb(a);
        return g.jc(b, null)
    };
    g.lc = function(a, b) {
        var c = b instanceof g.Jb ? b : g.Qb(b);
        a.href = g.Kb(c)
    };
    g.mc = function(a, b) {
        var c = b instanceof g.Jb ? b : g.Qb(b);
        a.href = g.Kb(c)
    };
    g.nc = function(a) {
        return encodeURIComponent(String(a))
    };
    g.oc = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    };
    g.pc = function(a) {
        return a = g.Db(a, void 0)
    };
    g.rc = function(a, b, c) {
        a = void 0 !== c ? a.toFixed(c) : String(a);
        c = a.indexOf("."); - 1 == c && (c = a.length);
        return (0, g.qc)("0", Math.max(0, b - c)) + a
    };
    g.sc = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };
    g.tc = function(a, b, c, d, e, f, k) {
        var l = "";
        a && (l += a + ":");
        c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
        e && (l += e);
        f && (l += "?" + f);
        k && (l += "#" + k);
        return l
    };
    g.uc = function(a) {
        return a ? decodeURI(a) : a
    };
    g.xc = function(a, b) {
        return b.match(g.wc)[a] || null
    };
    g.yc = function(a) {
        return g.uc(g.xc(3, a))
    };
    g.zc = function(a) {
        a = a.match(g.wc);
        return g.tc(null, null, null, null, a[5], a[6], a[7])
    };
    g.Ac = function(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)]
    };
    g.Bc = function(a, b) {
        return b ? a ? a + "&" + b : b : a
    };
    g.Cc = function(a, b) {
        if (!b) return a;
        var c = g.Ac(a);
        c[1] = g.Bc(c[1], b);
        return c[0] + (c[1] ? "?" + c[1] : "") + c[2]
    };
    g.Dc = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) g.Dc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + g.nc(b)))
    };
    g.Ec = function(a) {
        var b = [],
            c;
        for (c in a) g.Dc(c, a[c], b);
        return b.join("&")
    };
    g.Fc = function(a, b) {
        var c = g.Ec(b);
        return g.Cc(a, c)
    };
    g.Gc = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    };
    g.Ic = function(a, b) {
        var c = a.search(g.Hc),
            d = g.Gc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return g.oc(a.substr(d, e - d))
    };
    Lc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        a >>>= 0;
        b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
        Jc = c;
        Kc = a
    };
    Mc = function(a) {
        var b = 0 > a ? 1 : 0;
        a = b ? -a : a;
        if (0 === a) Kc = 0 < 1 / a ? 0 : 2147483648, Jc = 0;
        else if (isNaN(a)) Kc = 2147483647, Jc = 4294967295;
        else if (1.7976931348623157E308 < a) Kc = (b << 31 | 2146435072) >>> 0, Jc = 0;
        else if (2.2250738585072014E-308 > a) a /= Math.pow(2, -1074), Kc = (b << 31 | a / 4294967296) >>> 0, Jc = a >>> 0;
        else {
            var c = a,
                d = 0;
            if (2 <= c)
                for (; 2 <= c && 1023 > d;) d++, c /= 2;
            else
                for (; 1 > c && -1022 < d;) c *= 2, d--;
            a *= Math.pow(2, -d);
            Kc = (b << 31 | d + 1023 << 20 | 1048576 * a & 1048575) >>> 0;
            Jc = 4503599627370496 * a >>> 0
        }
    };
    Nc = function() {
        this.C = []
    };
    Oc = function(a) {
        for (var b = Jc, c = Kc; 0 < c || 127 < b;) a.C.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.C.push(b)
    };
    Pc = function(a, b) {
        for (; 127 < b;) a.C.push(b & 127 | 128), b >>>= 7;
        a.C.push(b)
    };
    Qc = function(a, b) {
        if (0 <= b) Pc(a, b);
        else {
            for (var c = 0; 9 > c; c++) a.C.push(b & 127 | 128), b >>= 7;
            a.C.push(1)
        }
    };
    Rc = function(a, b) {
        a.C.push(b >>> 0 & 255);
        a.C.push(b >>> 8 & 255);
        a.C.push(b >>> 16 & 255);
        a.C.push(b >>> 24 & 255)
    };
    Sc = function() {
        return g.Yb("iPhone") && !g.Yb("iPod") && !g.Yb("iPad")
    };
    g.Tc = function() {
        return Sc() || g.Yb("iPad") || g.Yb("iPod")
    };
    g.Uc = function(a) {
        g.Uc[" "](a);
        return a
    };
    g.Vc = function(a, b) {
        try {
            return g.Uc(a[b]), !0
        } catch (c) {}
        return !1
    };
    naa = function(a, b) {
        var c = maa;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    Wc = function() {
        var a = g.q.document;
        return a ? a.documentMode : void 0
    };
    g.Yc = function(a) {
        return naa(a, function() {
            return 0 <= g.Gb(g.Xc, a)
        })
    };
    g.$c = function(a) {
        return Number(g.Zc) >= a
    };
    g.cd = function(a, b) {
        g.Ka(a);
        void 0 === b && (b = 0);
        g.ad();
        for (var c = bd[b], d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                k = e + 1 < a.length,
                l = k ? a[e + 1] : 0,
                m = e + 2 < a.length,
                n = m ? a[e + 2] : 0,
                r = f >> 2;
            f = (f & 3) << 4 | l >> 4;
            l = (l & 15) << 2 | n >> 6;
            n &= 63;
            m || (n = 64, k || (l = 64));
            d.push(c[r], c[f], c[l] || "", c[n] || "")
        }
        return d.join("")
    };
    g.ad = function() {
        if (!g.dd) {
            g.dd = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                bd[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === g.dd[f] && (g.dd[f] = e)
                }
            }
        }
    };
    ed = function() {
        this.D = [];
        this.F = 0;
        this.C = new Nc
    };
    gd = function(a, b) {
        fd(a, b, 2);
        var c = a.C.end();
        a.D.push(c);
        a.F += c.length;
        c.push(a.F);
        return c
    };
    hd = function(a, b) {
        var c = b.pop();
        for (c = a.F + a.C.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.F++;
        b.push(c);
        a.F++
    };
    fd = function(a, b, c) {
        Pc(a.C, 8 * b + c)
    };
    id = function(a, b, c) {
        null != c && (fd(a, b, 1), a = a.C, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, Jc = b, Kc = c, Rc(a, Jc), Rc(a, Kc))
    };
    jd = function(a, b, c) {
        null != c && (fd(a, b, 0), a.C.C.push(c ? 1 : 0))
    };
    kd = function(a, b, c) {
        if (null != c) {
            b = gd(a, b);
            for (var d = a.C, e = 0; e < c.length; e++) {
                var f = c.charCodeAt(e);
                if (128 > f) d.C.push(f);
                else if (2048 > f) d.C.push(f >> 6 | 192), d.C.push(f & 63 | 128);
                else if (65536 > f)
                    if (55296 <= f && 56319 >= f && e + 1 < c.length) {
                        var k = c.charCodeAt(e + 1);
                        56320 <= k && 57343 >= k && (f = 1024 * (f - 55296) + k - 56320 + 65536, d.C.push(f >> 18 | 240), d.C.push(f >> 12 & 63 | 128), d.C.push(f >> 6 & 63 | 128), d.C.push(f & 63 | 128), e++)
                    } else d.C.push(f >> 12 | 224), d.C.push(f >> 6 & 63 | 128), d.C.push(f & 63 | 128)
            }
            hd(a, b)
        }
    };
    ld = function(a, b, c, d) {
        null != c && (b = gd(a, b), d(c, a), hd(a, b))
    };
    md = function(a, b, c, d) {
        if (null != c)
            for (var e = 0; e < c.length; e++) {
                var f = gd(a, b);
                d(c[e], a);
                hd(a, f)
            }
    };
    g.od = function(a) {
        this.C = 0;
        this.F = a
    };
    g.pd = function() {};
    g.ud = function(a, b, c, d, e) {
        a.C = null;
        b || (b = c ? [c] : []);
        a.N = c ? String(c) : void 0;
        a.G = 0 === c ? -1 : 0;
        a.jc = b;
        a: {
            if (b = a.jc.length)
                if (--b, c = a.jc[b], !(null === c || "object" != typeof c || Array.isArray(c) || qd && c instanceof Uint8Array)) {
                    a.H = b - a.G;
                    a.D = c;
                    break a
                } a.H = Number.MAX_VALUE
        }
        a.L = {};
        if (d)
            for (b = 0; b < d.length; b++) c = d[b], c < a.H ? (c += a.G, a.jc[c] = a.jc[c] || rd) : (g.sd(a), a.D[c] = a.D[c] || rd);
        if (e && e.length)
            for (b = 0; b < e.length; b++) td(a, e[b])
    };
    g.sd = function(a) {
        var b = a.H + a.G;
        a.jc[b] || (a.D = a.jc[b] = {})
    };
    g.A = function(a, b) {
        if (b < a.H) {
            var c = b + a.G,
                d = a.jc[c];
            return d === rd ? a.jc[c] = [] : d
        }
        if (a.D) return d = a.D[b], d === rd ? a.D[b] = [] : d
    };
    g.B = function(a, b, c) {
        b < a.H ? a.jc[b + a.G] = c : (g.sd(a), a.D[b] = c);
        return a
    };
    g.vd = function(a, b, c, d) {
        (c = td(a, c)) && c !== b && void 0 !== d && (a.C && c in a.C && (a.C[c] = void 0), g.B(a, c, void 0));
        return g.B(a, b, d)
    };
    td = function(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                k = g.A(a, f);
            null != k && (c = f, d = k, g.B(a, f, void 0))
        }
        return c ? (g.B(a, c, d), c) : 0
    };
    g.wd = function(a, b, c) {
        a.C || (a.C = {});
        if (!a.C[c]) {
            var d = g.A(a, c);
            d && (a.C[c] = new b(d))
        }
        return a.C[c]
    };
    g.yd = function(a, b, c) {
        g.xd(a, b, c);
        b = a.C[c];
        b == rd && (b = a.C[c] = []);
        return b
    };
    g.xd = function(a, b, c) {
        a.C || (a.C = {});
        if (!a.C[c]) {
            for (var d = g.A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.C[c] = e
        }
    };
    g.zd = function(a, b, c) {
        a.C || (a.C = {});
        var d = c ? c.Yc() : c;
        a.C[b] = c;
        return g.B(a, b, d)
    };
    g.Ad = function(a, b, c) {
        a.C || (a.C = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].Yc();
        a.C[b] = c;
        return g.B(a, b, d)
    };
    Bd = function(a) {
        if (a.C)
            for (var b in a.C) {
                var c = a.C[b];
                if (Array.isArray(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].Yc();
                else c && c.Yc()
            }
    };
    Cd = function(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    };
    Dd = function(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Dd(d) : d)
            }
            return b
        }
        if (qd && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Dd(d) : d);
        return b
    };
    g.Gd = function(a) {
        var b = g.u("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (f) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || g.q.$googDebugFname || b
        } catch (f) {
            e = "Not available", c = !0
        }
        b = Ed(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) return c = a.message,
            null == c && (c = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : g.Fd(a.constructor)) + '"' : "Unknown Error of unknown type", "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())), {
                message: c,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: b || "Not available"
            };
        a.stack = b;
        return a
    };
    Ed = function(a, b) {
        b || (b = {});
        b[Hd(a)] = !0;
        var c = a.stack || "",
            d = a.mQ;
        d && !b[Hd(d)] && (c += "\nCaused by: ", d.stack && 0 == d.stack.indexOf(d.toString()) || (c += "string" === typeof d ? d : d.message + "\n"), c += Ed(d, b));
        return c
    };
    Hd = function(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    };
    g.Fd = function(a) {
        if (Id[a]) return Id[a];
        a = String(a);
        if (!Id[a]) {
            var b = /function\s+([^\(]+)/m.exec(a);
            Id[a] = b ? b[1] : "[Anonymous]"
        }
        return Id[a]
    };
    g.Jd = function(a) {
        this.C = a || {
            cookie: ""
        }
    };
    g.Kd = function(a) {
        a = (a.C.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, g.Eb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    g.Ld = function(a, b) {
        switch (b) {
            case 1:
                return 0 != a % 4 || 0 == a % 100 && 0 != a % 400 ? 28 : 29;
            case 5:
            case 8:
            case 10:
            case 3:
                return 30
        }
        return 31
    };
    g.Pd = function(a, b, c) {
        "number" === typeof a ? (this.date = Md(a, b || 0, c || 1), Nd(this, c || 1)) : g.Ma(a) ? (this.date = Md(a.getFullYear(), a.getMonth(), a.getDate()), Nd(this, a.getDate())) : (this.date = new Date((0, g.Od)()), a = this.date.getDate(), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0), Nd(this, a))
    };
    Md = function(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    };
    Nd = function(a, b) {
        if (a.getDate() != b) {
            var c = a.getDate() < b ? 1 : -1;
            a.date.setUTCHours(a.date.getUTCHours() + c)
        }
    };
    g.Qd = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    g.Rd = function(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    };
    g.Sd = function(a, b) {
        var c = a.x - b.x,
            d = a.y - b.y;
        return Math.sqrt(c * c + d * d)
    };
    g.Td = function(a, b) {
        this.width = a;
        this.height = b
    };
    g.D = function(a) {
        return g.Ud(document, a)
    };
    g.Ud = function(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    g.Vd = function(a) {
        return g.Ud(document, a)
    };
    g.Xd = function(a, b) {
        g.bb(b, function(c, d) {
            c && "object" == typeof c && c.Nd && (c = c.Sc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Wd.hasOwnProperty(d) ? a.setAttribute(Wd[d], c) : g.ub(d, "aria-") || g.ub(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    };
    g.Zd = function(a) {
        return g.Yd(a || window)
    };
    g.Yd = function(a) {
        a = a.document;
        a = g.$d(a) ? a.documentElement : a.body;
        return new g.Td(a.clientWidth, a.clientHeight)
    };
    g.be = function(a, b, c) {
        return g.ae(document, arguments)
    };
    g.ae = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!oaa && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', g.pc(d.name), '"');
            if (d.type) {
                c.push(' type="', g.pc(d.type), '"');
                var e = {};
                g.mb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = g.ce(a, c);
        d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : g.Xd(c, d));
        2 < b.length && g.de(a, c, b, 2);
        return c
    };
    g.de = function(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !g.Ka(f) || g.Ma(f) && 0 < f.nodeType ? e(f) : (0, g.E)(paa(f) ? g.$a(f) : f, e)
        }
    };
    g.ee = function(a) {
        return g.ce(document, a)
    };
    g.ce = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    g.$d = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    g.fe = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    g.ge = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    paa = function(a) {
        if (a && "number" == typeof a.length) {
            if (g.Ma(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (g.La(a)) return "function" == typeof a.item
        }
        return !1
    };
    g.he = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    g.ie = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };
    raa = function() {
        var a = [];
        g.ie(qaa, function(b) {
            a.push(b)
        });
        return a
    };
    taa = function() {
        var a = g.ee("IFRAME"),
            b = {};
        (0, g.E)(saa(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    g.F = function() {
        this.Qc = this.Qc;
        this.tf = this.tf
    };
    g.le = function(a, b) {
        g.je(a, g.w(g.ke, b))
    };
    g.je = function(a, b) {
        a.Qc ? b() : (a.tf || (a.tf = []), a.tf.push(b))
    };
    g.ke = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    me = function(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(m) {
                try {
                    l(b.next(m))
                } catch (n) {
                    e(n)
                }
            }

            function k(m) {
                try {
                    l(b["throw"](m))
                } catch (n) {
                    e(n)
                }
            }

            function l(m) {
                m.done ? d(m.value) : (new c(function(n) {
                    n(m.value)
                })).then(f, k)
            }
            l((b = b.apply(a, void 0)).next())
        })
    };
    g.ne = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    g.oe = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    g.pe = function(a, b) {
        a.style.width = g.oe(b, !0)
    };
    g.qe = function(a, b) {
        return typeof a === b
    };
    g.se = function() {
        var a = void 0 === a ? g.re : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    g.te = function(a) {
        a.u_tz = -(new Date).getTimezoneOffset();
        a.u_his = g.se();
        a.u_java = !!g.re.navigator && !g.qe(g.re.navigator.javaEnabled, "unknown") && !!g.re.navigator.javaEnabled && g.re.navigator.javaEnabled();
        g.re.screen && (a.u_h = g.re.screen.height, a.u_w = g.re.screen.width, a.u_ah = g.re.screen.availHeight, a.u_aw = g.re.screen.availWidth, a.u_cd = g.re.screen.colorDepth);
        g.re.navigator && g.re.navigator.plugins && (a.u_nplug = g.re.navigator.plugins.length);
        g.re.navigator && g.re.navigator.mimeTypes && (a.u_nmime = g.re.navigator.mimeTypes.length)
    };
    g.ue = function(a, b) {
        try {
            return (void 0 === b ? 0 : b) ? (new g.Td(a.innerWidth, a.innerHeight)).round() : g.Zd(a).round()
        } catch (c) {
            return new g.Td(-12245933, -12245933)
        }
    };
    g.ve = function(a) {
        try {
            var b = a.screenX;
            var c = a.screenY
        } catch (l) {}
        try {
            var d = a.outerWidth;
            var e = a.outerHeight
        } catch (l) {}
        try {
            var f = a.innerWidth;
            var k = a.innerHeight
        } catch (l) {}
        return [a.screenLeft, a.screenTop, b, c, a.screen ? a.screen.availWidth : void 0, a.screen ? a.screen.availTop : void 0, d, e, f, k]
    };
    we = function(a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "chrome-untrusted" !== a && "chrome" !== a && "app" !== a && "devtools" !== a) throw Error("Invalid URI scheme in origin: " +
            a);
        c = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };
    uaa = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            r = n = 0
        }

        function b(x) {
            for (var y = k, C = 0; 64 > C; C += 4) y[C / 4] = x[C] << 24 | x[C + 1] << 16 | x[C + 2] << 8 | x[C + 3];
            for (C = 16; 80 > C; C++) x = y[C - 3] ^ y[C - 8] ^ y[C - 14] ^ y[C - 16], y[C] = (x << 1 | x >>> 31) & 4294967295;
            x = e[0];
            var S = e[1],
                P = e[2],
                pa = e[3],
                Ba = e[4];
            for (C = 0; 80 > C; C++) {
                if (40 > C)
                    if (20 > C) {
                        var Ha = pa ^ S & (P ^ pa);
                        var vc = 1518500249
                    } else Ha = S ^ P ^ pa, vc = 1859775393;
                else 60 > C ? (Ha = S & P | pa & (S | P), vc = 2400959708) : (Ha = S ^ P ^ pa, vc = 3395469782);
                Ha = ((x << 5 | x >>> 27) & 4294967295) + Ha + Ba + vc + y[C] & 4294967295;
                Ba = pa;
                pa = P;
                P = (S << 30 | S >>> 2) & 4294967295;
                S = x;
                x = Ha
            }
            e[0] = e[0] + x & 4294967295;
            e[1] =
                e[1] + S & 4294967295;
            e[2] = e[2] + P & 4294967295;
            e[3] = e[3] + pa & 4294967295;
            e[4] = e[4] + Ba & 4294967295
        }

        function c(x, y) {
            if ("string" === typeof x) {
                x = unescape(encodeURIComponent(x));
                for (var C = [], S = 0, P = x.length; S < P; ++S) C.push(x.charCodeAt(S));
                x = C
            }
            y || (y = x.length);
            C = 0;
            if (0 == n)
                for (; C + 64 < y;) b(x.slice(C, C + 64)), C += 64, r += 64;
            for (; C < y;)
                if (f[n++] = x[C++], r++, 64 == n)
                    for (n = 0, b(f); C + 64 < y;) b(x.slice(C, C + 64)), C += 64, r += 64
        }

        function d() {
            var x = [],
                y = 8 * r;
            56 > n ? c(l, 56 - n) : c(l, 64 - (n - 56));
            for (var C = 63; 56 <= C; C--) f[C] = y & 255, y >>>= 8;
            b(f);
            for (C = y = 0; 5 > C; C++)
                for (var S = 24; 0 <= S; S -= 8) x[y++] = e[C] >> S & 255;
            return x
        }
        for (var e = [], f = [], k = [], l = [128], m = 1; 64 > m; ++m) l[m] = 0;
        var n, r;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            su: function() {
                for (var x = d(), y = "", C = 0; C < x.length; C++) y += "0123456789ABCDEF".charAt(Math.floor(x[C] / 16)) + "0123456789ABCDEF".charAt(x[C] % 16);
                return y
            }
        }
    };
    vaa = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], (0, g.E)(d, function(l) {
            e.push(l)
        }), xe(e.join(" "));
        var f = [],
            k = [];
        (0, g.E)(c, function(l) {
            k.push(l.key);
            f.push(l.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = g.Xa(f) ? [c, b, a] : [f.join(":"), c, b, a];
        (0, g.E)(d, function(l) {
            e.push(l)
        });
        a = xe(e.join(" "));
        a = [c, a];
        g.Xa(k) || a.push(k.join(""));
        return a.join("_")
    };
    xe = function(a) {
        var b = uaa();
        b.update(a);
        return b.su().toLowerCase()
    };
    ye = function(a) {
        var b = we(String(g.q.location.href)),
            c;
        (c = g.q.__SAPISID || g.q.__APISID || g.q.__OVERRIDE_SID) ? c = !0: (c = new g.Jd(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
        if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? g.q.__SAPISID : g.q.__APISID, c || (c = new g.Jd(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
            b = b ? "SAPISIDHASH" : "APISIDHASH";
            var d = String(g.q.location.href);
            return d && c && b ? [b, vaa(we(d), c, a || null)].join(" ") :
                null
        }
        return null
    };
    g.ze = function(a, b, c) {
        this.G = a;
        this.D = b;
        this.C = c || [];
        this.Kf = new Map
    };
    Ae = function(a) {
        g.ud(this, a, 0, waa, null)
    };
    Be = function(a) {
        g.ud(this, a, 0, null, null)
    };
    yaa = function(a, b) {
        var c = g.yd(a, Be, 1);
        0 < c.length && md(b, 1, c, xaa)
    };
    xaa = function(a, b) {
        var c = g.A(a, 1);
        if (null != c && null != c) {
            fd(b, 1, 1);
            var d = b.C;
            Mc(c);
            Rc(d, Jc);
            Rc(d, Kc)
        }
        c = g.A(a, 2);
        null != c && null != c && null != c && (fd(b, 2, 0), d = b.C, Lc(c), Oc(d))
    };
    Ce = function(a) {
        g.ud(this, a, 0, zaa, null)
    };
    De = function(a) {
        g.ud(this, a, 0, null, Aaa)
    };
    Ee = function(a) {
        g.ud(this, a, 0, null, null)
    };
    Fe = function(a) {
        g.ud(this, a, 0, null, null)
    };
    Ge = function(a) {
        g.ud(this, a, 0, Baa, null)
    };
    Ie = function(a) {
        g.ud(this, a, 0, null, He)
    };
    Ke = function(a) {
        g.ud(this, a, 0, null, Je)
    };
    Eaa = function(a, b) {
        var c = g.wd(a, Ee, 1);
        null != c && ld(b, 1, c, Caa);
        c = g.wd(a, Fe, 2);
        null != c && ld(b, 2, c, Daa)
    };
    Caa = function(a, b) {
        var c = g.A(a, 1);
        null != c && kd(b, 1, c);
        c = g.A(a, 2);
        null != c && kd(b, 2, c);
        c = g.A(a, 3);
        null != c && jd(b, 3, c)
    };
    Daa = function(a, b) {
        var c = g.A(a, 1);
        null != c && kd(b, 1, c);
        c = g.A(a, 2);
        null != c && kd(b, 2, c);
        c = g.A(a, 3);
        null != c && null != c && null != c && (fd(b, 3, 0), Qc(b.C, c));
        c = g.A(a, 4);
        null != c && jd(b, 4, c)
    };
    Haa = function(a, b) {
        var c = g.yd(a, Ie, 1);
        0 < c.length && md(b, 1, c, Faa);
        c = g.wd(a, Ke, 2);
        null != c && ld(b, 2, c, Gaa)
    };
    Faa = function(a, b) {
        var c = g.A(a, 1);
        null != c && kd(b, 1, c);
        c = g.A(a, 2);
        null != c && null != c && null != c && (fd(b, 2, 0), Qc(b.C, c));
        c = g.A(a, 3);
        null != c && jd(b, 3, c)
    };
    Gaa = function(a, b) {
        var c = g.A(a, 1);
        if (null != c && null != c && null != c) {
            fd(b, 1, 0);
            var d = b.C;
            Lc(c);
            Oc(d)
        }
        c = g.A(a, 2);
        null != c && null != c && (fd(b, 2, 1), d = b.C, Mc(c), Rc(d, Jc), Rc(d, Kc));
        c = g.wd(a, Ae, 3);
        null != c && ld(b, 3, c, yaa)
    };
    g.Le = function(a, b) {
        g.ze.call(this, a, 3, b)
    };
    g.Me = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.F = !1
    };
    g.Ne = function(a, b) {
        g.Me.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.G = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.yc = null;
        a && this.init(a, b)
    };
    g.Pe = function(a) {
        return !(!a || !a[Oe])
    };
    Jaa = function(a, b, c, d, e) {
        this.listener = a;
        this.C = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Wg = e;
        this.key = ++Iaa;
        this.gg = this.Kh = !1
    };
    Qe = function(a) {
        a.gg = !0;
        a.listener = null;
        a.C = null;
        a.src = null;
        a.Wg = null
    };
    g.Re = function(a) {
        this.src = a;
        this.listeners = {};
        this.C = 0
    };
    Se = function(a, b) {
        var c = b.type;
        if (!(c in a.listeners)) return !1;
        var d = g.Za(a.listeners[c], b);
        d && (Qe(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.C--));
        return d
    };
    Te = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.gg && f.listener == b && f.capture == !!c && f.Wg == d) return e
        }
        return -1
    };
    g.Ve = function(a, b, c, d, e) {
        if (d && d.once) return g.Ue(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) g.Ve(a, b[f], c, d, e);
            return null
        }
        c = g.We(c);
        return g.Pe(a) ? a.O(b, c, g.Ma(d) ? !!d.capture : !!d, e) : Xe(a, b, c, !1, d, e)
    };
    Xe = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var k = g.Ma(e) ? !!e.capture : !!e,
            l = g.Ye(a);
        l || (a[Ze] = l = new g.Re(a));
        c = l.add(b, c, d, k, f);
        if (c.C) return c;
        d = Kaa();
        c.C = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Laa || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent($e(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        af++;
        return c
    };
    Kaa = function() {
        var a = Maa,
            b = bf ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    g.Ue = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) g.Ue(a, b[f], c, d, e);
            return null
        }
        c = g.We(c);
        return g.Pe(a) ? a.ye(b, c, g.Ma(d) ? !!d.capture : !!d, e) : Xe(a, b, c, !0, d, e)
    };
    g.cf = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) g.cf(a, b[f], c, d, e);
        else d = g.Ma(d) ? !!d.capture : !!d, c = g.We(c), g.Pe(a) ? a.Va(b, c, d, e) : a && (a = g.Ye(a)) && (b = a.Re(b, c, d, e)) && g.df(b)
    };
    g.df = function(a) {
        if ("number" === typeof a || !a || a.gg) return !1;
        var b = a.src;
        if (g.Pe(b)) return Se(b.wd, a);
        var c = a.type,
            d = a.C;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent($e(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        af--;
        (c = g.Ye(b)) ? (Se(c, a), 0 == c.C && (c.src = null, b[Ze] = null)) : Qe(a);
        return !0
    };
    $e = function(a) {
        return a in ef ? ef[a] : ef[a] = "on" + a
    };
    gf = function(a, b, c, d) {
        var e = !0;
        if (a = g.Ye(a))
            if (b = a.listeners[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.gg && (f = ff(f, d), e = e && !1 !== f)
                }
        return e
    };
    ff = function(a, b) {
        var c = a.listener,
            d = a.Wg || a.src;
        a.Kh && g.df(a);
        return c.call(d, b)
    };
    Maa = function(a, b) {
        if (a.gg) return !0;
        if (!bf) {
            var c = b || g.u("window.event"),
                d = new g.Ne(c, this),
                e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (m) {
                        f = !0
                    }
                    if (f || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode) c.push(f);f = a.type;
                for (var k = c.length - 1; !d.F && 0 <= k; k--) {
                    d.currentTarget = c[k];
                    var l = gf(c[k], f, !0, d);
                    e = e && l
                }
                for (k = 0; !d.F && k < c.length; k++) d.currentTarget = c[k],
                l = gf(c[k], f, !1, d),
                e = e && l
            }
            return e
        }
        return ff(a, new g.Ne(b,
            this))
    };
    g.Ye = function(a) {
        a = a[Ze];
        return a instanceof g.Re ? a : null
    };
    g.We = function(a) {
        if (g.La(a)) return a;
        a[hf] || (a[hf] = function(b) {
            return a.handleEvent(b)
        });
        return a[hf]
    };
    g.jf = function() {
        g.F.call(this);
        this.wd = new g.Re(this);
        this.Ht = this;
        this.Fl = null
    };
    kf = function(a, b, c, d) {
        b = a.wd.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var k = b[f];
            if (k && !k.gg && k.capture == c) {
                var l = k.listener,
                    m = k.Wg || k.src;
                k.Kh && Se(a.wd, k);
                e = !1 !== l.call(m, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    lf = function(a, b) {
        this.D = a;
        this.G = b;
        this.F = 0;
        this.C = null
    };
    mf = function(a, b) {
        a.G(b);
        100 > a.F && (a.F++, b.next = a.C, a.C = b)
    };
    nf = function(a) {
        g.q.setTimeout(function() {
            throw a;
        }, 0)
    };
    Naa = function() {
        var a = g.q.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !g.Yb("Presto") && (a = function() {
            var e = g.ee("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var k = "callImmediate" + Math.random(),
                l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, g.v)(function(m) {
                    if (("*" == l || m.origin == l) && m.data == k) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(k, l)
                }
            }
        });
        if ("undefined" !== typeof a && !g.Zb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.an;
                    c.an = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    an: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            g.q.setTimeout(e, 0)
        }
    }; of = function() {
        this.F = this.C = null
    };
    pf = function() {
        this.next = this.scope = this.mc = null
    };
    tf = function(a, b) {
        qf || Oaa();
        rf || (qf(), rf = !0);
        sf.add(a, b)
    };
    Oaa = function() {
        if (g.q.Promise && g.q.Promise.resolve) {
            var a = g.q.Promise.resolve(void 0);
            qf = function() {
                a.then(uf)
            }
        } else qf = function() {
            var b = uf;
            !g.La(g.q.setImmediate) || g.q.Window && g.q.Window.prototype && !g.Yb("Edge") && g.q.Window.prototype.setImmediate == g.q.setImmediate ? (vf || (vf = Naa()), vf(b)) : g.q.setImmediate(b)
        }
    };
    uf = function() {
        for (var a; a = sf.remove();) {
            try {
                a.mc.call(a.scope)
            } catch (b) {
                nf(b)
            }
            mf(wf, a)
        }
        rf = !1
    };
    g.xf = function(a) {
        a.prototype.$goog_Thenable = !0
    };
    g.zf = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    g.Bf = function(a, b) {
        this.C = 0;
        this.N = void 0;
        this.G = this.F = this.D = null;
        this.H = this.L = !1;
        if (a != g.Ga) try {
            var c = this;
            a.call(b, function(d) {
                Af(c, 2, d)
            }, function(d) {
                Af(c, 3, d)
            })
        } catch (d) {
            Af(this, 3, d)
        }
    };
    Cf = function() {
        this.next = this.context = this.onRejected = this.D = this.C = null;
        this.F = !1
    };
    g.Ef = function(a, b, c) {
        var d = Df.get();
        d.D = a;
        d.onRejected = b;
        d.context = c;
        return d
    };
    g.Ff = function(a) {
        if (a instanceof g.Bf) return a;
        var b = new g.Bf(g.Ga);
        Af(b, 2, a);
        return b
    };
    g.Gf = function(a) {
        return new g.Bf(function(b, c) {
            c(a)
        })
    };
    g.If = function(a, b, c) {
        Hf(a, b, c, null) || tf(g.w(b, a))
    };
    g.Jf = function(a) {
        return new g.Bf(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(n, r) {
                        d--;
                        e[n] = r;
                        0 == d && b(e)
                    }, k = function(n) {
                        c(n)
                    }, l = 0, m; l < a.length; l++) m = a[l], g.If(m, g.w(f, l), k);
            else b(e)
        })
    };
    g.Lf = function(a, b) {
        return Kf(a, null, b, void 0)
    };
    Mf = function(a, b) {
        if (0 == a.C)
            if (a.D) {
                var c = a.D;
                if (c.F) {
                    for (var d = 0, e = null, f = null, k = c.F; k && (k.F || (d++, k.C == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
                    e && (0 == c.C && 1 == d ? Mf(c, b) : (f ? (d = f, d.next == c.G && (c.G = d), d.next = d.next.next) : Nf(c), Of(c, e, 3, b)))
                }
                a.D = null
            } else Af(a, 3, b)
    };
    g.Qf = function(a, b) {
        a.F || 2 != a.C && 3 != a.C || Pf(a);
        a.G ? a.G.next = b : a.F = b;
        a.G = b
    };
    Kf = function(a, b, c, d) {
        var e = g.Ef(null, null, null);
        e.C = new g.Bf(function(f, k) {
            e.D = b ? function(l) {
                try {
                    var m = b.call(d, l);
                    f(m)
                } catch (n) {
                    k(n)
                }
            } : f;
            e.onRejected = c ? function(l) {
                try {
                    var m = c.call(d, l);
                    void 0 === m && l instanceof g.Rf ? k(l) : f(m)
                } catch (n) {
                    k(n)
                }
            } : k
        });
        e.C.D = a;
        g.Qf(a, e);
        return e.C
    };
    Af = function(a, b, c) {
        0 == a.C && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.C = 1, Hf(c, a.X, a.M, a) || (a.N = c, a.C = b, a.D = null, Pf(a), 3 != b || c instanceof g.Rf || Paa(a, c)))
    };
    Hf = function(a, b, c, d) {
        if (a instanceof g.Bf) return g.Qf(a, g.Ef(b || g.Ga, c || null, d)), !0;
        if (g.zf(a)) return a.then(b, c, d), !0;
        if (g.Ma(a)) try {
            var e = a.then;
            if (g.La(e)) return Qaa(a, e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    };
    Qaa = function(a, b, c, d, e) {
        function f(m) {
            l || (l = !0, d.call(e, m))
        }

        function k(m) {
            l || (l = !0, c.call(e, m))
        }
        var l = !1;
        try {
            b.call(a, k, f)
        } catch (m) {
            f(m)
        }
    };
    Pf = function(a) {
        a.L || (a.L = !0, tf(a.J, a))
    };
    Nf = function(a) {
        var b = null;
        a.F && (b = a.F, a.F = b.next, b.next = null);
        a.F || (a.G = null);
        return b
    };
    Of = function(a, b, c, d) {
        if (3 == c && b.onRejected && !b.F)
            for (; a && a.H; a = a.D) a.H = !1;
        if (b.C) b.C.D = null, Sf(b, c, d);
        else try {
            b.F ? b.D.call(b.context) : Sf(b, c, d)
        } catch (e) {
            Tf.call(null, e)
        }
        mf(Df, b)
    };
    Sf = function(a, b, c) {
        2 == b ? a.D.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    };
    Paa = function(a, b) {
        a.H = !0;
        tf(function() {
            a.H && Tf.call(null, b)
        })
    };
    g.Rf = function(a) {
        g.Ra.call(this, a)
    };
    g.Uf = function(a, b) {
        g.jf.call(this);
        this.C = a || 1;
        this.F = b || g.q;
        this.D = (0, g.v)(this.vv, this);
        this.G = (0, g.Od)()
    };
    g.Vf = function(a, b, c) {
        if (g.La(a)) c && (a = (0, g.v)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, g.v)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : g.q.setTimeout(a, b || 0)
    };
    g.Wf = function(a) {
        g.q.clearTimeout(a)
    };
    g.Yf = function() {
        this.M = new Xf;
        this.G = new Map;
        this.X = new Set;
        this.H = 0;
        this.L = 100;
        this.flushInterval = 3E4;
        this.F = new g.Uf(this.flushInterval);
        this.F.O("tick", this.J, !1, this)
    };
    Raa = function(a) {
        for (var b = 0; b < a.length; b++) a[b].clear()
    };
    Zf = function() {
        this.C = [];
        this.F = -1
    };
    Saa = function(a) {
        -1 == a.F && (a.F = (0, g.$f)(a.C, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.F
    };
    g.ag = function() {
        var a = new Zf;
        g.q.SVGElement && g.q.document.createElementNS && a.set(0);
        var b = taa();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        g.q.crypto && g.q.crypto.subtle && a.set(3);
        g.q.TextDecoder && g.q.TextEncoder && a.set(4);
        return Saa(a)
    };
    g.bg = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    g.cg = function(a, b, c) {
        g.F.call(this);
        this.C = a;
        this.D = b || 0;
        this.F = c;
        this.ac = (0, g.v)(this.lk, this)
    };
    Taa = function() {
        this.F = -1
    };
    dg = function() {
        this.F = 64;
        this.C = [];
        this.L = [];
        this.N = [];
        this.G = [];
        this.G[0] = 128;
        for (var a = 1; a < this.F; ++a) this.G[a] = 0;
        this.H = this.D = 0;
        this.reset()
    };
    eg = function(a, b, c) {
        c || (c = 0);
        var d = a.N;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.C[0];
        c = a.C[1];
        var k = a.C[2],
            l = a.C[3],
            m = a.C[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = l ^ c & (k ^ l);
                    var n = 1518500249
                } else f = c ^ k ^ l, n = 1859775393;
            else 60 > e ? (f = c & k | l & (c | k), n = 2400959708) :
                (f = c ^ k ^ l, n = 3395469782);
            f = (b << 5 | b >>> 27) + f + m + n + d[e] & 4294967295;
            m = l;
            l = k;
            k = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.C[0] = a.C[0] + b & 4294967295;
        a.C[1] = a.C[1] + c & 4294967295;
        a.C[2] = a.C[2] + k & 4294967295;
        a.C[3] = a.C[3] + l & 4294967295;
        a.C[4] = a.C[4] + m & 4294967295
    };
    fg = function() {};
    hg = function(a) {
        if (a instanceof fg) return a;
        if ("function" == typeof a.bd) return a.bd(!1);
        if (g.Ka(a)) {
            var b = 0,
                c = new fg;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw gg;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    };
    g.jg = function(a, b, c) {
        if (g.Ka(a)) try {
            (0, g.E)(a, b, c)
        } catch (d) {
            if (d !== gg) throw d;
        } else {
            a = hg(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== gg) throw d;
            }
        }
    };
    Uaa = function(a) {
        if (g.Ka(a)) return g.$a(a);
        a = hg(a);
        var b = [];
        g.jg(a, function(c) {
            b.push(c)
        });
        return b
    };
    g.lg = function(a, b) {
        this.qa = {};
        this.C = [];
        this.Ge = this.F = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && g.kg(this, a)
    };
    Vaa = function(a, b) {
        return a === b
    };
    g.ng = function(a) {
        if (a.F != a.C.length) {
            for (var b = 0, c = 0; b < a.C.length;) {
                var d = a.C[b];
                g.mg(a.qa, d) && (a.C[c++] = d);
                b++
            }
            a.C.length = c
        }
        if (a.F != a.C.length) {
            var e = {};
            for (c = b = 0; b < a.C.length;) d = a.C[b], g.mg(e, d) || (a.C[c++] = d, e[d] = 1), b++;
            a.C.length = c
        }
    };
    g.kg = function(a, b) {
        if (b instanceof g.lg)
            for (var c = b.xc(), d = 0; d < c.length; d++) a.set(c[d], b.get(c[d]));
        else
            for (c in b) a.set(c, b[c])
    };
    g.mg = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    g.og = function(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    };
    g.pg = function(a) {
        return a.classList ? a.classList : g.og(a).match(/\S+/g) || []
    };
    g.G = function(a, b) {
        return a.classList ? a.classList.contains(b) : g.Wa(g.pg(a), b)
    };
    g.rg = function(a) {
        var b = [];
        qg(new Waa, a, b);
        return b.join("")
    };
    Waa = function() {};
    qg = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), qg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), sg(d, c), c.push(":"), qg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    sg(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) &&
                        !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    };
    sg = function(a, b) {
        b.push('"', a.replace(Xaa, function(c) {
            var d = tg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), tg[c] = d);
            return d
        }), '"')
    };
    g.ug = function(a) {
        g.F.call(this);
        this.H = 1;
        this.D = [];
        this.G = 0;
        this.C = [];
        this.F = {};
        this.L = !!a
    };
    g.vg = function(a, b, c, d) {
        if (b = a.F[b]) {
            var e = a.C;
            (b = g.Ua(b, function(f) {
                return e[f + 1] == c && e[f + 2] == d
            })) && a.qd(b)
        }
    };
    Yaa = function(a, b, c) {
        tf(function() {
            a.apply(b, c)
        })
    };
    g.wg = function(a) {
        this.C = a
    };
    xg = function(a) {
        this.C = a
    };
    yg = function(a) {
        this.data = a
    };
    zg = function(a) {
        return void 0 === a || a instanceof yg ? a : new yg(a)
    };
    g.Ag = function(a) {
        this.C = a
    };
    g.Bg = function(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < (0, g.Od)() || !!b && b > (0, g.Od)()
    };
    Zaa = function() {};
    Cg = function() {};
    g.Dg = function(a) {
        this.C = a
    };
    g.Eg = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.C = a
    };
    Hg = function(a, b) {
        this.F = a;
        this.C = null;
        if (g.Fg && !g.$c(9)) {
            Gg || (Gg = new g.lg);
            this.C = Gg.get(a);
            this.C || (b ? this.C = document.getElementById(b) : (this.C = document.createElement("userdata"), this.C.addBehavior("#default#userData"), document.body.appendChild(this.C)), Gg.set(a, this.C));
            try {
                this.C.load(this.F)
            } catch (c) {
                this.C = null
            }
        }
    };
    Ig = function(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return $aa[b]
        })
    };
    Jg = function(a) {
        try {
            a.C.save(a.F)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };
    Kg = function(a) {
        return a.C.XMLDocument.documentElement
    };
    Lg = function(a, b) {
        this.F = a;
        this.C = b + "::"
    };
    g.Mg = function(a) {
        var b = new g.Eg;
        return b.isAvailable() ? a ? new Lg(b, a) : b : null
    };
    Ng = function(a, b) {
        1 < b.length ? a[b[0]] = b[1] : 1 === b.length && Object.assign(a, b[0])
    };
    g.Pg = function(a) {
        Ng(g.Og, arguments)
    };
    Qg = function(a, b) {
        var c = g.H(a, void 0);
        c ? c.push(b) : g.Pg(a, [b])
    };
    g.H = function(a, b) {
        return a in g.Og ? g.Og[a] : b
    };
    Rg = function(a) {
        var b = g.Og.EXPERIMENT_FLAGS;
        return b ? b[a] : void 0
    };
    g.Tg = function(a) {
        a = Sg(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    };
    g.Ug = function(a, b) {
        var c = Sg(a);
        return void 0 === c && void 0 !== b ? b : Number(c || 0)
    };
    Sg = function(a) {
        var b = g.H("EXPERIMENTS_FORCED_FLAGS", {});
        return void 0 !== b[a] ? b[a] : g.H("EXPERIMENT_FLAGS", {})[a]
    };
    g.Xg = function() {
        var a = [],
            b = g.H("EXPERIMENTS_FORCED_FLAGS", {});
        for (c in b) a.push({
            key: c,
            value: String(b[c])
        });
        var c = g.H("EXPERIMENT_FLAGS", {});
        for (var d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };
    g.Zg = function(a) {
        var b = a.__yt_uid_key;
        b || (b = Yg(), a.__yt_uid_key = b);
        return b
    };
    g.$g = function() {
        var a = document;
        if ("visibilityState" in a) return a.visibilityState;
        var b = aba + "VisibilityState";
        if (b in a) return a[b]
    };
    cba = function(a) {
        bba.forEach(function(b) {
            return b(a)
        })
    };
    bh = function(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                g.ah(b), cba(b)
            }
        } : a
    };
    g.ah = function(a) {
        var b = g.u("yt.logging.errors.log");
        b ? b(a, "ERROR", void 0, void 0, void 0) : (b = g.H("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), g.Pg("ERRORS", b))
    };
    g.ch = function(a) {
        var b = g.u("yt.logging.errors.log");
        b ? b(a, "WARNING", void 0, void 0, void 0) : (b = g.H("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), g.Pg("ERRORS", b))
    };
    g.dh = function(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in dba || (this[b] = a[b]);
                this.rotation = a.rotation;
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ?
                        d : null
                } catch (e) {
                    d = null
                } else "mouseover" == this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.C = a.pageX;
                this.F = a.pageY
            }
        } catch (e) {}
    };
    eh = function(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.C = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.F = a.clientY + b
        }
    };
    g.fh = function(a) {
        void 0 === a.C && eh(a);
        return a.C
    };
    g.gh = function(a) {
        void 0 === a.F && eh(a);
        return a.F
    };
    g.ih = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return g.db(hh, function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                k = g.Ma(e[4]) && g.Ma(d) && g.ib(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || k)
        })
    };
    g.I = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = g.ih(a, b, c, d);
        if (e) return e;
        e = ++jh.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var k = f ? function(l) {
            l = new g.dh(l);
            if (!g.he(l.relatedTarget, function(m) {
                    return m == a
                }, !0)) return l.currentTarget = a, l.type = b, c.call(a, l)
        } : function(l) {
            l = new g.dh(l);
            l.currentTarget = a;
            return c.call(a, l)
        };
        k = bh(k);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), kh() || "boolean" === typeof d ? a.addEventListener(b, k, d) : a.addEventListener(b, k, !!d.capture)) : a.attachEvent("on" + b, k);
        hh[e] = [a, b, c, k, d];
        return e
    };
    g.lh = function(a) {
        a && ("string" == typeof a && (a = [a]), (0, g.E)(a, function(b) {
            if (b in hh) {
                var c = hh[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? kh() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete hh[b]
            }
        }))
    };
    g.mh = function(a) {
        for (var b in hh) hh[b][0] == a && g.lh(b)
    };
    g.nh = function(a, b) {
        "function" === typeof a && (a = bh(a));
        return window.setTimeout(a, b)
    };
    g.oh = function(a, b) {
        "function" === typeof a && (a = bh(a));
        return window.setInterval(a, b)
    };
    g.ph = function(a) {
        window.clearTimeout(a)
    };
    g.qh = function(a) {
        window.clearInterval(a)
    };
    g.rh = function(a) {
        this.ac = a;
        this.C = null;
        this.D = 0;
        this.L = null;
        this.G = 0;
        this.F = [];
        for (a = 0; 4 > a; a++) this.F.push(0);
        this.H = 0;
        this.J = g.I(window, "mousemove", (0, g.v)(this.X, this));
        this.M = g.oh((0, g.v)(this.N, this), 25)
    };
    eba = function() {};
    g.th = function(a, b) {
        return sh(a, 0, b)
    };
    g.uh = function(a, b) {
        return sh(a, 1, b)
    };
    g.wh = function(a) {
        for (var b = 0, c = a.length; b < c; b++) g.vh(a[b])
    };
    xh = function() {};
    g.yh = function() {
        return !!g.u("yt.scheduler.instance")
    };
    sh = function(a, b, c) {
        isNaN(c) && (c = void 0);
        var d = g.u("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : g.nh(a, c || 0)
    };
    g.vh = function(a) {
        if (!isNaN(a)) {
            var b = g.u("yt.scheduler.instance.cancelJob");
            b ? b(a) : g.ph(a)
        }
    };
    g.Bh = function(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.Ox ? !0 : b.Ox;
        b = void 0 === b.hF ? !1 : b.hF;
        if (null == g.u("_lact", window)) {
            var c = parseInt(g.H("LACT"), 10);
            c = isFinite(c) ? (0, g.Od)() - Math.max(c, 0) : -1;
            g.t("_lact", c, window);
            g.t("_fact", c, window); - 1 == c && g.zh();
            g.I(document, "keydown", g.zh);
            g.I(document, "keyup", g.zh);
            g.I(document, "mousedown", g.zh);
            g.I(document, "mouseup", g.zh);
            a && (b ? g.I(window, "touchmove", function() {
                Ah("touchmove", 200)
            }, {
                passive: !0
            }) : (g.I(window, "resize", function() {
                Ah("resize", 200)
            }), g.I(window,
                "scroll",
                function() {
                    Ah("scroll", 200)
                })));
            new g.rh(function() {
                Ah("mouse", 100)
            });
            g.I(document, "touchstart", g.zh, {
                passive: !0
            });
            g.I(document, "touchend", g.zh, {
                passive: !0
            })
        }
    };
    Ah = function(a, b) {
        Ch[a] || (Ch[a] = !0, g.uh(function() {
            g.zh();
            Ch[a] = !1
        }, b))
    };
    g.zh = function() {
        null == g.u("_lact", window) && g.Bh();
        var a = (0, g.Od)();
        g.t("_lact", a, window); - 1 == g.u("_fact", window) && g.t("_fact", a, window);
        (a = g.u("ytglobal.ytUtilActivityCallback_")) && a()
    };
    g.Dh = function() {
        var a = g.u("_lact", window);
        return null == a ? -1 : Math.max((0, g.Od)() - a, 0)
    };
    g.Ih = function(a, b, c) {
        var d = Eh();
        if (d) {
            var e = d.subscribe(a, function() {
                var f = arguments;
                var k = function() {
                    Fh[e] && b.apply && "function" == typeof b.apply && b.apply(c || window, f)
                };
                try {
                    Gh[a] ? k() : g.nh(k, 0)
                } catch (l) {
                    g.ah(l)
                }
            }, c);
            Fh[e] = !0;
            Hh[a] || (Hh[a] = []);
            Hh[a].push(e);
            return e
        }
        return 0
    };
    g.Jh = function(a) {
        var b = Eh();
        b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), (0, g.E)(a, function(c) {
            b.unsubscribeByKey(c);
            delete Fh[c]
        }))
    };
    g.J = function(a, b) {
        var c = Eh();
        return c ? c.publish.apply(c, arguments) : !1
    };
    g.Kh = function(a, b) {
        Gh[a] = !0;
        var c = Eh();
        c = c ? c.publish.apply(c, arguments) : !1;
        Gh[a] = !1;
        return c
    };
    Eh = function() {
        return g.q.ytPubsubPubsubInstance
    };
    g.Sh = function() {
        g.ph(g.Lh);
        g.ph(g.Mh);
        g.Mh = 0;
        Nh && Nh.isReady() ? (Oh(g.Ph), "log_event" in Qh && Oh(Object.entries(Qh.log_event)), g.Ph.clear(), delete Qh.log_event) : g.Rh()
    };
    g.Rh = function() {
        g.Tg("web_gel_timeout_cap") && !g.Mh && (g.Mh = g.nh(g.Sh, 6E4));
        g.ph(g.Lh);
        var a = g.Ug("web_gel_debounce_ms", 1E4);
        a = g.H("LOGGING_BATCH_TIMEOUT", g.Th || a);
        g.Tg("shorten_initial_gel_batch_timeout") && Uh && (a = fba);
        g.Lh = g.nh(g.Sh, a)
    };
    Oh = function(a) {
        var b = Nh,
            c = Math.round((0, g.Vh)());
        a = g.ia(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = g.ia(d.value);
            d = e.next().value;
            var f = e.next().value;
            e = g.kb({
                context: g.Wh(b.C || g.Xh())
            });
            e.events = f;
            (f = Yh[d]) && gba(e, d, f);
            delete Yh[d];
            hba(e, c);
            g.Zh(b, "log_event", e, {
                retry: !0,
                onSuccess: function() {
                    $h = Math.round((0, g.Vh)() - c)
                }
            });
            Uh = !1
        }
    };
    hba = function(a, b) {
        a.requestTimeMs = String(b);
        g.Tg("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        var c = g.H("EVENT_ID", void 0);
        if (c) {
            var d = g.H("BATCH_CLIENT_COUNTER", void 0) || 0;
            !d && g.Tg("web_client_counter_random_seed") && (d = Math.floor(Math.random() * ai / 2));
            d++;
            d > ai && (d = 1);
            g.Pg("BATCH_CLIENT_COUNTER", d);
            c = {
                serializedEventId: c,
                clientCounter: String(d)
            };
            a.serializedClientEventId = c;
            bi && $h && g.Tg("log_gel_rtt_web") && (a.previousBatchInfo = {
                serializedClientEventId: bi,
                roundtripMs: String($h)
            });
            bi = c;
            $h = 0
        }
    };
    gba = function(a, b, c) {
        if (c.videoId) var d = "VIDEO";
        else if (c.playlistId) d = "PLAYLIST";
        else return;
        a.credentialTransferTokenTargetId = c;
        a.context = a.context || {};
        a.context.user = a.context.user || {};
        a.context.user.credentialTransferTokens = [{
            token: b,
            scope: d
        }]
    };
    g.fi = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {};
        e.eventTimeMs = Math.round(d.timestamp || (0, g.Vh)());
        e[a] = b;
        e.context = {
            lastActivityMs: String(d.timestamp ? -1 : g.Dh())
        };
        g.Tg("log_sequence_info_on_gel_web") && d.Ce && (a = e.context, b = d.Ce, ci[b] = b in ci ? ci[b] + 1 : 0, a.sequence = {
            index: ci[b],
            groupKey: b
        }, d.Eu && delete ci[d.Ce]);
        d = d.Lf;
        a = "";
        d && (a = {}, d.videoId ? a.videoId = d.videoId : d.playlistId && (a.playlistId = d.playlistId), Yh[d.token] = a, a = d.token);
        d = g.Ph.get(a) || [];
        g.Ph.set(a, d);
        d.push(e);
        c && (Nh = new c);
        c = g.Ug("web_logging_max_batch") ||
            100;
        e = (0, g.Vh)();
        d.length >= c ? g.Sh() : e - g.di >= g.ei && (g.Rh(), g.di = e)
    };
    gi = function(a) {
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) try {
                var f = g.oc(e[0] || ""),
                    k = g.oc(e[1] || "");
                f in b ? Array.isArray(b[f]) ? g.ab(b[f], k) : b[f] = [b[f], k] : b[f] = k
            } catch (m) {
                if ("q" != e[0]) {
                    var l = Error("Error decoding URL component");
                    l.params = {
                        key: e[0],
                        value: e[1]
                    };
                    g.ah(l)
                }
            }
        }
        return b
    };
    g.hi = function(a) {
        var b = [];
        g.bb(a, function(c, d) {
            var e = g.nc(d),
                f;
            Array.isArray(c) ? f = c : f = [c];
            (0, g.E)(f, function(k) {
                "" == k ? b.push(e) : b.push(e + "=" + g.nc(k))
            })
        });
        return b.join("&")
    };
    g.ii = function(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return gi(a)
    };
    g.ki = function(a, b) {
        return ji(a, b || {}, !0)
    };
    g.li = function(a, b) {
        return ji(a, b || {}, !1)
    };
    ji = function(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = g.ii(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        return g.Fc(a, e) + d
    };
    g.mi = function(a) {
        if (!b) var b = window.location.href;
        var c = g.xc(1, a),
            d = g.yc(a);
        c && d ? (a = a.match(g.wc), b = b.match(g.wc), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? g.yc(b) == d && (Number(g.xc(4, b)) || null) == (Number(g.xc(4, a)) || null) : !0;
        return a
    };
    si = function(a) {
        var b = g.ni;
        a = void 0 === a ? g.u("yt.ads.biscotti.lastId_") || "" : a;
        b = Object.assign(g.oi(b), g.pi(b));
        b.ca_type = "image";
        a && (b.bid = a);
        return b
    };
    g.oi = function(a) {
        var b = {};
        b.dt = g.ti;
        b.flash = "0";
        a: {
            try {
                var c = a.C.top.location.href
            } catch (d) {
                a = 2;
                break a
            }
            a = c ? c === a.F.location.href ? 0 : 1 : 2
        }
        b = (b.frm = a, b);
        g.te(b);
        return b
    };
    g.pi = function(a) {
        var b = g.ve(a.C),
            c = g.ue(a.C.top),
            d = {};
        return d.bc = g.ag(), d.bih = c.height, d.biw = c.width, d.brdim = b.join(), d.vis = g.bg(a.F), d.wgl = !!g.re.WebGLRenderingContext, d
    };
    iba = function() {
        if (!ui) return null;
        var a = ui();
        return "open" in a ? a : null
    };
    g.wi = function(a) {
        switch (g.vi(a)) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
                return !0;
            default:
                return !1
        }
    };
    g.vi = function(a) {
        return a && "status" in a ? a.status : -1
    };
    jba = function(a, b) {
        b = void 0 === b ? {} : b;
        var c = g.mi(a),
            d = g.Tg("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in xi) {
            var f = g.H(xi[e]);
            !f || !c && g.yc(a) || d && void 0 !== b[e] || (b[e] = f)
        }
        if (c || !g.yc(a)) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        (c || !g.yc(a)) && (d = "undefined" != typeof Intl ? (new Intl.DateTimeFormat).resolvedOptions().timeZone : null) && (b["X-YouTube-Time-Zone"] = d);
        if (c || !g.yc(a)) b["X-YouTube-Ad-Signals"] = g.hi(si(void 0));
        return b
    };
    lba = function(a) {
        var b = window.location.search,
            c = g.yc(a),
            d = g.uc(g.xc(5, a));
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = g.ii(b),
            f = {};
        (0, g.E)(kba, function(k) {
            e[k] && (f[k] = e[k])
        });
        return g.li(a, f)
    };
    mba = function(a, b) {
        if (window.fetch && "XML" != b.format) {
            var c = {
                method: b.method || "GET",
                credentials: "same-origin"
            };
            b.headers && (c.headers = b.headers);
            a = yi(a, b);
            var d = zi(a, b);
            d && (c.body = d);
            b.withCredentials && (c.credentials = "include");
            var e = !1,
                f;
            fetch(a, c).then(function(k) {
                if (!e) {
                    e = !0;
                    f && g.ph(f);
                    var l = k.ok,
                        m = function(n) {
                            n = n || {};
                            var r = b.context || g.q;
                            l ? b.onSuccess && b.onSuccess.call(r, n, k) : b.onError && b.onError.call(r, n, k);
                            b.Ya && b.Ya.call(r, n, k)
                        };
                    "JSON" == (b.format || "JSON") && (l || 400 <= k.status && 500 > k.status) ? k.json().then(m, function() {
                        m(null)
                    }): m(null)
                }
            });
            b.mq && 0 < b.timeout && (f = g.nh(function() {
                e || (e = !0, g.ph(f), b.mq.call(b.context || g.q))
            }, b.timeout))
        } else g.K(a, b)
    };
    g.K = function(a, b) {
        var c = b.format || "JSON";
        a = yi(a, b);
        var d = zi(a, b),
            e = !1,
            f = Ai(a, function(m) {
                    if (!e) {
                        e = !0;
                        l && g.ph(l);
                        var n = g.wi(m),
                            r = null,
                            x = 400 <= m.status && 500 > m.status,
                            y = 500 <= m.status && 600 > m.status;
                        if (n || x || y) r = nba(a, c, m, b.ob);
                        if (n) a: if (m && 204 == m.status) n = !0;
                            else {
                                switch (c) {
                                    case "XML":
                                        n = 0 == parseInt(r && r.return_code, 10);
                                        break a;
                                    case "RAW":
                                        n = !0;
                                        break a
                                }
                                n = !!r
                            } r = r || {};
                        x = b.context || g.q;
                        n ? b.onSuccess && b.onSuccess.call(x, m, r) : b.onError && b.onError.call(x, m, r);
                        b.Ya && b.Ya.call(x, m, r)
                    }
                }, b.method, d, b.headers, b.responseType,
                b.withCredentials);
        if (b.Nc && 0 < b.timeout) {
            var k = b.Nc;
            var l = g.nh(function() {
                e || (e = !0, f.abort(), g.ph(l), k.call(b.context || g.q, f))
            }, b.timeout)
        }
        return f
    };
    yi = function(a, b) {
        b.zQ && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = g.H("XSRF_FIELD_NAME", void 0),
            d = b.Xa;
        d && (d[c] && delete d[c], a = g.ki(a, d));
        return a
    };
    zi = function(a, b) {
        var c = g.H("XSRF_FIELD_NAME", void 0),
            d = g.H("XSRF_TOKEN", void 0),
            e = b.postBody || "",
            f = b.ia,
            k = g.H("XSRF_FIELD_NAME", void 0),
            l;
        b.headers && (l = b.headers["Content-Type"]);
        b.tQ || g.yc(a) && !b.withCredentials && g.yc(a) != document.location.hostname || "POST" != b.method || l && "application/x-www-form-urlencoded" != l || b.ia && b.ia[k] || (f || (f = {}), f[c] = d);
        f && "string" === typeof e && (e = g.ii(e), g.mb(e, f), e = b.kr && "JSON" == b.kr ? JSON.stringify(e) : g.Ec(e));
        f = e || f && !g.eb(f);
        !Bi && f && "POST" != b.method && (Bi = !0, g.ah(Error("AJAX request with postData should use POST")));
        return e
    };
    nba = function(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = (c.fakeResponseText !== undefined) ? c.fakeResponseText : c.responseText;
                } catch (k) {
                    throw d = Error("Error reading responseText"), d.params = a, g.ch(d), k;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? Ci(a) : null) e = {}, (0, g.E)(a.getElementsByTagName("*"), function(k) {
                    e[k.tagName] = g.Di(k)
                })
        }
        d && Ei(e);
        return e
    };
    Ei = function(a) {
        if (g.Ma(a))
            for (var b in a) "html_content" == b || g.vb(b, "_html") ? a[b] = g.kc(g.tb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"), a[b]) : Ei(a[b])
    };
    Ci = function(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    };
    g.Di = function(a) {
        var b = "";
        (0, g.E)(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    };
    g.Fi = function(a, b) {
        b.method = "POST";
        b.ia || (b.ia = {});
        return g.K(a, b)
    };
    function sendToExtenssion(type, data, callback) {
        chrome.runtime.sendMessage(localStorage.getItem('oldTubeId'), {
            type: type,
            data: data
        }, callback);
    }
	
	function preRequest(method, url, postData, callback) {
        sendToExtenssion('spf-request', {method: method, url: url, postData: postData}, callback);
    }
	
	function onRequest(onCallback, xhr) {
		sendToExtenssion('spf-data', {url: xhr.responseURL, data: xhr.responseText}, (data) => {
				window.ytcsi.reference[""].span = {};
				xhr.fakeResponseText = data;
				onCallback(xhr);
		});
	}
	
    Ai = function(a, b, c, d, e, f, k) {
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var m = iba();
        if (!m) return null;
		preRequest(c, a, d, (info) => {
			
			function l() {
				4 == (m && "readyState" in m ? m.readyState : 0) && b && onRequest(bh(b), m)
			}
			
			a = info[1];
			"onloadend" in m ? m.addEventListener("loadend", l, !1) : m.onreadystatechange = l;
			g.Tg("debug_forward_web_query_parameters") && (a = lba(a));
			m.open(info[0], a, !0);
			f && (m.responseType = f);
			k && (m.withCredentials = !0);
			c = "POST" == info[0] && (void 0 === window.FormData || !(info[2] instanceof FormData));
			if (e = jba(a, e))
				for (var n in e) m.setRequestHeader(n, e[n]), "content-type" == n.toLowerCase() && (c = !1);
			c && m.setRequestHeader("Content-Type", info[3]);
			var visitorData = localStorage.getItem('visitorData');
			if (visitorData !== undefined && visitorData !== null)
				m.setRequestHeader("X-Goog-Visitor-Id", visitorData);
			m.send(info[2]);
		});
        return m
    };
    oba = function() {
        for (var a = {}, b = g.ia(Object.entries(g.ii(g.H("DEVICE", "")))), c = b.next(); !c.done; c = b.next()) {
            var d = g.ia(c.value);
            c = d.next().value;
            d = d.next().value;
            "cbrand" === c ? a.deviceMake = d : "cmodel" === c ? a.deviceModel = d : "cbr" === c ? a.browserName = d : "cbrver" === c ? a.browserVersion = d : "cos" === c ? a.osName = d : "cosver" === c ? a.osVersion = d : "cplatform" === c && (a.platform = d)
        }
        return a
    };
    Gi = function() {
        return "INNERTUBE_API_KEY" in g.Og && "INNERTUBE_API_VERSION" in g.Og
    };
    g.Xh = function() {
        return {
            innertubeApiKey: g.H("INNERTUBE_API_KEY", void 0),
            innertubeApiVersion: g.H("INNERTUBE_API_VERSION", void 0),
            Rx: g.H("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            Sx: g.H("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            innertubeContextClientVersion: g.H("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
            Ux: g.H("INNERTUBE_CONTEXT_HL", void 0),
            Tx: g.H("INNERTUBE_CONTEXT_GL", void 0),
            Vx: g.H("INNERTUBE_HOST_OVERRIDE", void 0) || "",
            Xx: !!g.H("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            Wx: !!g.H("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
                !1)
        }
    };
    g.Wh = function(a) {
        a = {
            client: {
                hl: a.Ux,
                gl: a.Tx,
                clientName: a.Sx,
                clientVersion: a.innertubeContextClientVersion,
                configInfo: a.Rx
            }
        };
        var b = window.devicePixelRatio;
        b && 1 != b && (a.client.screenDensityFloat = String(b));
        b = g.H("EXPERIMENTS_TOKEN", "");
        "" !== b && (a.client.experimentsToken = b);
        b = g.Xg();
        0 < b.length && (a.request = {
            internalExperimentFlags: b
        });
        g.H("DELEGATED_SESSION_ID") && !g.Tg("pageid_as_header_web") && (a.user = {
            onBehalfOfUser: g.H("DELEGATED_SESSION_ID")
        });
        a.client = Object.assign(a.client, oba());
        return a
    };
    Hi = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {
            "X-Goog-Visitor-Id": c.visitorData || g.H("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        (b = c.lQ || g.H("AUTHORIZATION")) || (a ? b = "Bearer " + g.u("gapi.auth.getToken")().jQ : b = ye([]));
        b && (d.Authorization = b, d["X-Goog-AuthUser"] = g.H("SESSION_INDEX", 0), g.Tg("pageid_as_header_web") && (d["X-Goog-PageId"] = g.H("DELEGATED_SESSION_ID")));
        return d
    };
    Ii = function(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = ye();
        if (b) {
            var c = new dg;
            c.update(g.H("INNERTUBE_API_KEY", void 0));
            c.update(b);
            a.hash = g.cd(c.digest(), 3)
        }
        return a
    };
    pba = function(a) {
        a = Ii(a);
        var b = new dg;
        b.update(JSON.stringify(a, Object.keys(a).sort()));
        a = b.digest();
        b = "";
        for (var c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    };
    g.Ki = function(a, b, c, d, e) {
        g.Ji.set("" + a, b, {
            yp: c,
            path: "/",
            domain: void 0 === d ? "youtube.com" : d,
            secure: void 0 === e ? !1 : e
        })
    };
    g.Li = function(a, b) {
        return g.Ji.get("" + a, b)
    };
    g.Mi = function(a, b, c) {
        g.Ji.remove("" + a, void 0 === b ? "/" : b, void 0 === c ? "youtube.com" : c)
    };
    g.Ni = function(a) {
        var b;
        (b = g.Mg(a)) || (a = new Hg(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.C = (a = b) ? new g.Ag(a) : null;
        this.F = document.domain || window.location.hostname
    };
    Pi = function() {
        Oi || (Oi = new g.Ni("yt.innertube"));
        return Oi
    };
    qba = function(a, b, c, d) {
        if (d) return null;
        d = Pi().get("nextId", !0) || 1;
        var e = Pi().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: Ii(c),
            requestTime: Math.round((0, g.Vh)())
        };
        Pi().set("nextId", d + 1, 86400, !0);
        Pi().set("requests", e, 86400, !0);
        return d
    };
    Qi = function(a) {
        var b = Pi().get("requests", !0) || {};
        delete b[a];
        Pi().set("requests", b, 86400, !0)
    };
    Ri = function(a) {
        var b = Pi().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round((0, g.Vh)()) - d.requestTime)) {
                    var e = d.authState,
                        f = Ii(Hi(!1));
                    g.ib(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round((0, g.Vh)())), g.Zh(a, d.method, e, {}));
                    delete b[c]
                }
            }
            Pi().set("requests", b, 86400, !0)
        }
    };
    Si = function() {};
    g.Ti = function() {
        Si.C || (Si.C = new Si);
        return Si.C
    };
    g.Ui = function() {
        var a = {},
            b = ye([]);
        b && (a.Authorization = b, a["X-Goog-AuthUser"] = g.H("SESSION_INDEX", 0), "INNERTUBE_HOST_OVERRIDE" in g.Og || (a["X-Origin"] = window.location.origin), g.Tg("pageid_as_header_web") && "DELEGATED_SESSION_ID" in g.Og && (a["X-Goog-PageId"] = g.H("DELEGATED_SESSION_ID")));
        return g.Ff(a)
    };
    Vi = function() {
        var a = Error.call(this, "No user identifier specified.");
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, Vi.prototype)
    };
    Wi = function() {
        var a = Error.call(this, "Transaction was aborted");
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, Wi.prototype)
    };
    $i = function(a) {
        return a instanceof DOMException ? "VersionError" === a.name : "DOMError" in self && a instanceof DOMError ? "VersionError" === a.name : a instanceof Object && "message" in a ? "An attempt was made to open a database using a lower version than the existing version." === a.message : !1
    };
    aj = function(a) {
        return new g.Bf(function(b, c) {
            function d() {
                c(a.error);
                f()
            }

            function e() {
                b(a.result);
                f()
            }

            function f() {
                a.removeEventListener("success", e);
                a.removeEventListener("error", d)
            }
            a.addEventListener("success", e);
            a.addEventListener("error", d)
        })
    };
    bj = function(a) {
        this.C = a
    };
    cj = function(a) {
        this.C = a
    };
    dj = function(a, b, c) {
        a = c ? a.C.put(b, c) : a.C.put(b);
        return aj(a)
    };
    ej = function(a) {
        var b = this;
        this.F = a;
        this.D = new Map;
        this.done = new g.Bf(function(c, d) {
            b.F.addEventListener("complete", function() {
                c()
            });
            b.F.addEventListener("error", function() {
                d(b.F.error)
            });
            b.F.addEventListener("abort", function() {
                d(new Wi)
            })
        })
    };
    fj = function(a) {
        this.C = a
    };
    gj = function(a, b) {
        this.request = a;
        this.C = b
    };
    hj = function(a) {
        return aj(a).then(function(b) {
            return null === b ? null : new gj(a, b)
        })
    };
    ij = function() {
        bj.apply(this, arguments)
    };
    jj = function() {
        cj.apply(this, arguments)
    };
    kj = function() {
        ej.apply(this, arguments);
        this.G = new Map
    };
    lj = function() {
        fj.apply(this, arguments)
    };
    mj = function() {
        gj.apply(this, arguments)
    };
    nj = function(a) {
        return aj(a).then(function(b) {
            return null === b ? null : new mj(a, b)
        })
    };
    oj = function(a, b) {
        this.request = a;
        this.C = b
    };
    rba = function(a) {
        return aj(a).then(function(b) {
            return null === b ? null : new oj(a, b)
        })
    };
    pj = function(a, b, c, d, e) {
        function f() {
            x || (x = new d(k.result));
            return x
        }
        var k = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        var l = c.blocked,
            m = c.blocking,
            n = c.C,
            r = c.upgrade,
            x;
        r && k.addEventListener("upgradeneeded", function(y) {
            if (null === y.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
            if (null === k.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
            var C = f(),
                S = new e(k.transaction);
            r(C, y.oldVersion, y.newVersion, S)
        });
        l && k.addEventListener("blocked", function() {
            l()
        });
        return aj(k).then(function(y) {
            m && y.addEventListener("versionchange", function() {
                m(f())
            });
            n && y.addEventListener("close", function() {
                n()
            });
            return f()
        })
    };
    qj = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return pj(a, b, c, bj, ej)
    };
    rj = function(a, b) {
        b = void 0 === b ? {} : b;
        var c = self.indexedDB.deleteDatabase(a),
            d = b.blocked;
        d && c.addEventListener("blocked", function() {
            d()
        });
        return aj(c).then(function() {})
    };
    tj = function() {
        var a;
        if (a = sj || sba) a = /WebKit\/([0-9]+)/.exec(g.Xb), a = !!(a && 600 <= parseInt(a[1], 10));
        a && (a = /WebKit\/([0-9]+)/.exec(g.Xb), a = !(a && 602 <= parseInt(a[1], 10)));
        return a && !g.Tg("ytidb_allow_on_ios_safari_v8_and_v9") ? !1 : !!self.indexedDB
    };
    tba = function() {
        return new Promise(function(a) {
            setTimeout(a, 50)
        })
    };
    uba = function() {
        return me(this, function b() {
            var c, d, e;
            return ya(b, function(f) {
                switch (f.C) {
                    case 1:
                        if (!tj()) return f["return"](!1);
                        g.sa(f, 3);
                        d = !1;
                        return g.ra(f, qj("yt-idb-test-do-not-use", void 0, {
                            blocking: function() {
                                d = !0;
                                c && (c.close(), c = void 0)
                            }
                        }), 5);
                    case 5:
                        return c = f.F, e = qj("yt-idb-test-do-not-use", c.getVersion() + 1).then(function(k) {
                            try {
                                k.close()
                            } catch (l) {}
                        }), g.ra(f, Promise.race([e,
                            tba()
                        ]), 6);
                    case 6:
                        return f["return"](d);
                    case 3:
                        baa(f);
                        if (c) try {
                            c.close()
                        } catch (k) {}
                        caa(f);
                        break;
                    case 2:
                        return g.ta(f), f["return"](!1)
                }
            })
        })
    };
    vj = function() {
        return void 0 !== uj ? g.Ff(uj) : new g.Bf(function(a) {
            uba().then(function(b) {
                uj = b;
                a(b)
            })
        })
    };
    xj = function() {
        function a(b) {
            b.close();
            wj = void 0
        }
        wj || (wj = g.Lf(qj("YtIdbMeta", 1, {
            blocking: a,
            upgrade: function(b, c) {
                1 > c && b.Qi("databases", {
                    keyPath: "actualName"
                })
            }
        }), function(b) {
            return $i(b) ? qj("YtIdbMeta", void 0, {
                blocking: a
            }) : g.Gf(b)
        }));
        return wj
    };
    vba = function(a) {
        return xj().then(function(b) {
            return b.get("databases", a.actualName).then(function(c) {
                if (c ? a.actualName !== c.actualName || a.publicName !== c.publicName || a.userIdentifier !== c.userIdentifier || a.signedIn !== c.signedIn : 1) return dj(b.Vc(["databases"], "readwrite").C("databases"), a, void 0)
            })
        })
    };
    yj = function(a) {
        return xj().then(function(b) {
            return b["delete"]("databases", a)
        })
    };
    zj = function(a) {
        return me(this, function c() {
            var d, e, f, k;
            return ya(c, function(l) {
                switch (l.C) {
                    case 1:
                        return d = [], g.ra(l, xj(), 2);
                    case 2:
                        return e = l.F, g.ra(l, e.Vc(["databases"], "readonly"), 3);
                    case 3:
                        return f = l.F, g.ra(l, f.C("databases").Kp(), 4);
                    case 4:
                        k = l.F;
                    case 5:
                        if (!k) {
                            l.Pb(6);
                            break
                        }
                        a(k.getValue()) && d.push(k.getValue());
                        return g.ra(l, k["continue"](), 7);
                    case 7:
                        k = l.F;
                        l.Pb(5);
                        break;
                    case 6:
                        return l["return"](d)
                }
            })
        })
    };
    wba = function(a) {
        return new g.Bf(function(b, c) {
            zj(function(d) {
                return d.publicName === a
            }).then(b)["catch"](c)
        })
    };
    xba = function(a) {
        return new g.Bf(function(b, c) {
            zj(function(d) {
                return d.userIdentifier === a
            }).then(b)["catch"](c)
        })
    };
    Cj = function(a) {
        if (!Aj) return {
            actualName: a,
            publicName: a,
            userIdentifier: void 0,
            signedIn: !1
        };
        var b = Bj;
        if (!b) throw new Vi;
        return {
            actualName: a + ":" + b.userIdentifier,
            publicName: a,
            userIdentifier: b.userIdentifier,
            signedIn: b.signedIn
        }
    };
    Dj = function(a, b) {
        try {
            var c = Cj(a)
        } catch (d) {
            return g.Gf(d)
        }
        return g.Lf(vba(c).then(function() {
            return b(c)
        }), function(d) {
            return g.Lf(yj(c.actualName), function() {}).then(function() {
                return g.Gf(d)
            })
        })
    };
    Ej = function(a, b) {
        b = void 0 === b ? {} : b;
        try {
            var c = Cj(a)
        } catch (d) {
            return g.Gf(d)
        }
        return rj(c.actualName, b).then(function() {
            return yj(c.actualName)
        })
    };
    Fj = function(a, b) {
        var c = a.map(function(d) {
            return rj(d.actualName, b).then(function() {
                return yj(d.actualName)
            })
        });
        return g.Jf(c).then(function() {})
    };
    Ij = function() {
        return me(this, function b() {
            return ya(b, function(c) {
                if (!Gj) try {
                    Gj = (0, g.Hj.gr)(1, {
                        upgrade: function(d, e) {
                            1 > e && (d.Qi("LogsRequestsStore", {
                                keyPath: "id",
                                autoIncrement: !0
                            }).C.createIndex("newRequest", ["status", "authHash", "timestamp"], {
                                unique: !1
                            }), d.Qi("sapisid"))
                        }
                    })
                } catch (d) {
                    if (!(0, g.Hj.dy)(d)) return g.ah(d), c["return"](Promise.reject(d));
                    Gj = (0, g.Hj.gr)()
                }
                return c["return"](Gj)
            })
        })
    };
    yba = function(a) {
        return me(this, function c() {
            var d, e, f, k, l;
            return ya(c, function(m) {
                switch (m.C) {
                    case 1:
                        return g.ra(m, Ij(), 2);
                    case 2:
                        return d = m.F, e = d.Vc(["LogsRequestsStore"], "readwrite").C("LogsRequestsStore"), g.ra(m, Jj(), 3);
                    case 3:
                        return f = m.F, k = Object.assign(Object.assign({}, a), {
                            options: JSON.parse(JSON.stringify(a.options)),
                            authHash: f
                        }), g.ra(m, e.add(k), 4);
                    case 4:
                        return l = m.F, m["return"](l)
                }
            })
        })
    };
    zba = function() {
        return me(this, function b() {
            var c, d, e, f, k, l, m, n;
            return ya(b, function(r) {
                switch (r.C) {
                    case 1:
                        return g.ra(r, Jj(), 2);
                    case 2:
                        return c = r.F, d = ["NEW", c, 0], e = ["NEW", c, (0, g.Vh)()], f = IDBKeyRange.bound(d, e), g.ra(r, Ij(), 3);
                    case 3:
                        return k = r.F, l = k.Vc(["LogsRequestsStore"], "readwrite"), g.ra(r, l.C("LogsRequestsStore").index("newRequest").F(f, "prev"), 4);
                    case 4:
                        m = r.F;
                        n = void 0;
                        if (null === m || void 0 === m || !m.getValue()) {
                            r.Pb(5);
                            break
                        }
                        n = m.getValue();
                        n.status = "QUEUED";
                        return g.ra(r, m.update(n), 5);
                    case 5:
                        return r["return"](n)
                }
            })
        })
    };
    Aba = function(a) {
        return me(this, function c() {
            var d, e, f;
            return ya(c, function(k) {
                switch (k.C) {
                    case 1:
                        return g.ra(k, Ij(), 2);
                    case 2:
                        return d = k.F, e = d.Vc(["LogsRequestsStore"], "readwrite").C("LogsRequestsStore"), g.ra(k, e.get(a), 3);
                    case 3:
                        return f = k.F, f.status = "QUEUED", g.ra(k, dj(e, f), 4);
                    case 4:
                        return k["return"](f)
                }
            })
        })
    };
    Bba = function(a) {
        return me(this, function c() {
            var d, e, f;
            return ya(c, function(k) {
                switch (k.C) {
                    case 1:
                        return g.ra(k, Ij(), 2);
                    case 2:
                        return d = k.F, e = d.Vc(["LogsRequestsStore"], "readwrite").C("LogsRequestsStore"), g.ra(k, e.get(a), 3);
                    case 3:
                        f = k.F;
                        if (!f) {
                            k.Pb(4);
                            break
                        }
                        f.status = "NEW";
                        f.sendCount += 1;
                        return g.ra(k, dj(e, f), 4);
                    case 4:
                        return k["return"](f)
                }
            })
        })
    };
    Cba = function() {
        return me(this, function b() {
            var c, d;
            return ya(b, function(e) {
                if (1 == e.C) return g.ra(e, Ij(), 2);
                if (3 != e.C) return c = e.F, g.ra(e, c.count("LogsRequestsStore"), 3);
                d = e.F;
                return e["return"](!d)
            })
        })
    };
    Kj = function(a) {
        return me(this, function c() {
            var d;
            return ya(c, function(e) {
                if (1 == e.C) return g.ra(e, Ij(), 2);
                d = e.F;
                return e["return"](d["delete"]("LogsRequestsStore", a))
            })
        })
    };
    Jj = function() {
        return me(this, function b() {
            var c;
            return ya(b, function(d) {
                if (1 == d.C) return g.ra(d, g.Ui(g.Ti()), 2);
                c = d.F;
                return d["return"](pba(c))
            })
        })
    };
    Lj = function() {
        this.G = 0;
        this.C = window.navigator.onLine;
        Dba(this);
        Eba(this)
    };
    Mj = function() {
        Lj.C || (Lj.C = new Lj);
        return Lj.C
    };
    Pj = function(a) {
        var b = Nj,
            c = Oj;
        Fba(a);
        (new g.Bf(function(d) {
            a.F = d
        })).then(function() {
            b();
            c && (a.D = c)
        })
    };
    Eba = function(a) {
        window.addEventListener("online", function() {
            a.C = !0;
            a.F && a.F()
        })
    };
    Dba = function(a) {
        window.addEventListener("offline", function() {
            a.C = !1;
            a.D && a.D()
        })
    };
    Fba = function(a) {
        a.G || (Qj(a), window.navigator.onLine && a.F && a.F())
    };
    Qj = function(a) {
        a.G = g.th(function() {
            window.navigator.onLine ? (!1 === a.C && g.ah(Error("NetworkStatusManager missed online event.")), a.C = !0, a.F && a.F()) : (!0 === a.C && g.ah(Error("NetworkStatusManager missed offline event.")), a.C = !1, a.D && a.D());
            Qj(a)
        }, Gba)
    };
    Hba = function(a, b) {
        b = void 0 === b ? {} : b;
        Rj().then(function(c) {
            if (c && !g.Tg("networkless_bypass_write")) {
                var d = {
                    url: a,
                    options: b,
                    timestamp: (0, g.Vh)(),
                    status: "NEW",
                    sendCount: 0
                };
                yba(d).then(function(e) {
                    d.id = e;
                    e = Mj();
                    e.C ? Sj(d) : Pj(e)
                })["catch"](function(e) {
                    Sj(d);
                    g.ah(e)
                })
            } else g.K(a, b)
        })
    };
    Nj = function() {
        Tj || (Tj = g.uh(function() {
            Sj();
            Tj = 0;
            Nj()
        }, Iba))
    };
    Oj = function() {
        g.vh(Tj);
        Tj = 0
    };
    Sj = function(a) {
        me(this, function c() {
            var d = this,
                e, f, k, l;
            return ya(c, function(m) {
                switch (m.C) {
                    case 1:
                        e = d;
                        if (!a) return g.ra(m, zba(), 6);
                        if (!a.id) {
                            m.Pb(3);
                            break
                        }
                        return g.ra(m, Aba(a.id), 5);
                    case 5:
                        a = m.F;
                        m.Pb(3);
                        break;
                    case 6:
                        if (a = m.F) {
                            m.Pb(3);
                            break
                        }
                        return g.ra(m, Cba(), 8);
                    case 8:
                        return (f = m.F) && Oj(), m["return"]();
                    case 3:
                        if (Jba(a)) k = a.options.onError ? a.options.onError : function() {}, l = a.options.onSuccess ? a.options.onSuccess : function() {}, a.options.onError = function(n, r) {
                            return me(e, function y() {
                                return ya(y, function(C) {
                                    if (1 ==
                                        C.C) return a && a.id ? a.sendCount < Kba ? g.ra(C, Bba(a.id), 6) : g.ra(C, Kj(a.id), 2) : C.Pb(2);
                                    2 != C.C && (Tj || Pj(Mj()), k(n, r));
                                    k(n, r);
                                    C.C = 0
                                })
                            })
                        }, a.options.onSuccess = function(n, r) {
                            return me(e, function y() {
                                return ya(y, function(C) {
                                    if (1 == C.C) return a && a.id ? g.ra(C, Kj(a.id), 2) : C.Pb(2);
                                    l(n, r);
                                    C.C = 0
                                })
                            })
                        }, g.K(a.url, a.options);
                        else if (g.ch(Error("Networkless Logging: Stored logs request expired age limit")), a.id) return g.ra(m, Kj(a.id), 0);
                        m.Pb(0)
                }
            })
        })
    };
    Jba = function(a) {
        a = a.timestamp;
        return 2592E6 <= (0, g.Vh)() - a ? !1 : !0
    };
    Rj = function() {
        return g.Tg("networkless_logging") ? 2 === g.Ug("networkless_ytidb_version") ? (0, g.Hj.jp)() : (0, g.Hj.cy)() : g.Ff(!1)
    };
    g.Uj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = Error.call(this, a);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.args = [].concat(g.ja(c))
    };
    g.Vj = function(a) {
        var b = this;
        this.C = null;
        a ? this.C = a : Gi() && (this.C = g.Xh());
        g.th(function() {
            Ri(b)
        }, 5E3)
    };
    g.Zh = function(a, b, c, d) {
        !g.H("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && g.ch(new g.Uj("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var e = new g.Uj("innertube xhrclient not ready", b, c, d);
            g.ah(e);
            e.C = 0;
            throw e;
        }
        var f = {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                ia: c,
                kr: "JSON",
                Nc: function() {
                    d.Nc()
                },
                mq: d.Nc,
                onSuccess: function(x, y) {
                    if (d.onSuccess) d.onSuccess(y)
                },
                lq: function(x) {
                    if (d.onSuccess) d.onSuccess(x)
                },
                onError: function(x, y) {
                    if (d.onError) d.onError(y)
                },
                FQ: function(x) {
                    if (d.onError) d.onError(x)
                },
                timeout: d.timeout,
                withCredentials: !0
            },
            k = "";
        (e = a.C.Vx) && (k = e);
        var l = a.C.Xx || !1,
            m = Hi(l, k, d);
        Object.assign(f.headers, m);
        f.headers.Authorization && !k && (f.headers["x-origin"] = window.location.origin);
        e = "/youtubei/" + a.C.innertubeApiVersion + "/" + b;
        var n = {
            alt: "json"
        };
        a.C.Wx && f.headers.Authorization || (n.key = a.C.innertubeApiKey);
        var r = g.ki("" + k + e, n);
        Rj().then(function(x) {
            if (d.retry && g.Tg("retry_web_logging_batches") && "www.youtube-nocookie.com" != k) {
                if (g.Tg("networkless_gel") && !x || !g.Tg("networkless_gel")) var y =
                    qba(b, c, m, l);
                if (y) {
                    var C = f.onSuccess,
                        S = f.lq;
                    f.onSuccess = function(P, pa) {
                        Qi(y);
                        C(P, pa)
                    };
                    c.lq = function(P, pa) {
                        Qi(y);
                        S(P, pa)
                    }
                }
            }
            try {
                g.Tg("use_fetch_for_op_xhr") ? mba(r, f) : g.Tg("networkless_gel") && d.retry ? (f.method = "POST", Hba(r, f)) : g.Fi(r, f)
            } catch (P) {
                if ("InvalidAccessError" == P.name) y && (Qi(y), y = 0), g.ch(Error("An extension is blocking network request."));
                else throw P;
            }
            y && g.th(function() {
                Ri(a)
            }, 5E3)
        })
    };
    g.Wj = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = g.Vj;
        g.H("ytLoggingEventsDefaultDisabled", !1) && g.Vj == g.Vj && (d = null);
        g.fi(a, b, d, c)
    };
    g.Yj = function(a) {
        g.Xj(a, "WARNING")
    };
    g.Xj = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        f.name = c || g.H("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
        f.version = d || g.H("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
        c = f || {};
        b = void 0 === b ? "ERROR" : b;
        b = void 0 === b ? "ERROR" : b;
        var k = void 0 === k ? !1 : k;
        if (a && (g.Tg("console_log_js_exceptions") && (d = [], d.push("Name: " + a.name), d.push("Message: " + a.message), a.hasOwnProperty("params") && d.push("Error Params: " + JSON.stringify(a.params)), d.push("File name: " + a.fileName), d.push("Stacktrace: " + a.stack), d = d.join("\n"), window.console.log(d,
                a)), (window && window.yterr || k) && !(5 <= Zj) && 0 !== a.C)) {
            var l = g.Gd(a);
            k = l.message || "Unknown Error";
            d = l.name || "UnknownError";
            e = l.lineNumber || "Not available";
            f = l.fileName || "Not available";
            l = l.stack || a.F || "Not available";
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var m = 0, n = 0; n < a.args.length; n++) {
                    var r = a.args[n],
                        x = "params." + n;
                    m += x.length;
                    if (r)
                        if (Array.isArray(r))
                            for (var y = c, C = 0; C < r.length && !(r[C] && (m += ak(C, r[C], x, y), 500 < m)); C++);
                        else if ("object" === typeof r)
                        for (y in y = void 0, C = c, r) {
                            if (r[y] && (m +=
                                    ak(y, r[y], x, C), 500 < m)) break
                        } else c[x] = String(JSON.stringify(r)).substring(0, 500), m += c[x].length;
                    else c[x] = String(JSON.stringify(r)).substring(0, 500), m += c[x].length;
                    if (500 <= m) break
                } else if (a.hasOwnProperty("params") && a.params)
                    if (r = a.params, "object" === typeof a.params)
                        for (n in x = 0, r) {
                            if (r[n] && (m = "params." + n, y = String(JSON.stringify(r[n])).substr(0, 500), c[m] = y, x += m.length + y.length, 500 < x)) break
                        } else c.params = String(JSON.stringify(r)).substr(0, 500);
            navigator.vendor && !c.hasOwnProperty("vendor") && (c.vendor =
                navigator.vendor);
            c = {
                message: k,
                name: d,
                lineNumber: e,
                fileName: f,
                stack: l,
                params: c
            };
            a = Number(a.columnNumber);
            isNaN(a) || (c.lineNumber = c.lineNumber + ":" + a);
            a = g.ia(Lba);
            for (k = a.next(); !k.done; k = a.next())
                if (k = k.value, k.Hl[c.name])
                    for (e = g.ia(k.Hl[c.name]), d = e.next(); !d.done; d = e.next())
                        if (f = d.value, d = c.message.match(f.regexp)) {
                            c.params["error.original"] = d[0];
                            e = f.groups;
                            f = {};
                            for (l = 0; l < e.length; l++) f[e[l]] = d[l + 1], c.params["error." + e[l]] = d[l + 1];
                            c.message = k.Bp(f);
                            break
                        } window.yterr && "function" === typeof window.yterr &&
                window.yterr(c);
            if (!(bk.has(c.message) || 0 <= c.stack.indexOf("/YouTubeCenter.js") || 0 <= c.stack.indexOf("/mytube.js"))) {
                if (g.Tg("kevlar_gel_error_routing")) {
                    k = b;
                    d = {
                        stackTrace: c.stack
                    };
                    c.fileName && (d.filename = c.fileName);
                    a = c.lineNumber && c.lineNumber.split ? c.lineNumber.split(":") : [];
                    0 !== a.length && (1 !== a.length || isNaN(Number(a[0])) ? 2 !== a.length || isNaN(Number(a[0])) || isNaN(Number(a[1])) || (d.lineNumber = Number(a[0]), d.columnNumber = Number(a[1])) : d.lineNumber = Number(a[0]));
                    a = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: c.message
                    };
                    "ERROR" === k ? a.level = "ERROR_LEVEL_ERROR" : "WARNING" === k && (a.level = "ERROR_LEVEL_WARNNING");
                    k = {
                        isObfuscated: !0,
                        browserStackInfo: d
                    };
                    d = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    if (e = c.params)
                        for (f = g.ia(Object.keys(e)), l = f.next(); !l.done; l = f.next()) l = l.value, d.kvPairs.push({
                            key: "client." + l,
                            value: String(e[l])
                        });
                    g.Wj("clientError", {
                        errorMetadata: d,
                        stackTrace: k,
                        logMessage: a
                    });
                    g.Sh()
                }
                a = c.params || {};
                b = {
                    Xa: {
                        a: "logerror",
                        t: "jserror",
                        type: c.name,
                        msg: c.message.substr(0, 250),
                        line: c.lineNumber,
                        level: b,
                        "client.name": a.name
                    },
                    ia: {
                        url: g.H("PAGE_NAME", window.location.href),
                        file: c.fileName
                    },
                    method: "POST"
                };
                a.version && (b["client.version"] = a.version);
                if (b.ia) {
                    c.stack && (b.ia.stack = c.stack);
                    k = g.ia(Object.keys(a));
                    for (d = k.next(); !d.done; d = k.next()) d = d.value, b.ia["client." + d] = a[d];
                    if (a = g.H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0))
                        for (k = g.ia(Object.keys(a)), d = k.next(); !d.done; d = k.next()) d = d.value, b.ia[d] = a[d];
                    a = g.H("SERVER_NAME", void 0);
                    k = g.H("SERVER_VERSION", void 0);
                    a && k && (b.ia["server.name"] = a, b.ia["server.version"] = k)
                }
                g.K(g.H("ECATCHER_REPORT_HOST",
                    "") + "/error_204", b);
                bk.add(c.message);
                Zj++
            }
        }
    };
    ak = function(a, b, c, d) {
        c += "." + a;
        a = String(JSON.stringify(b)).substr(0, 500);
        d[c] = a;
        return c.length + a.length
    };
    Xf = function() {};
    g.dk = function() {
        if (!ck) {
            ck = new g.Yf;
            var a = g.Ug("client_streamz_web_flush_count", -1); - 1 !== a && (ck.L = a)
        }
        return ck
    };
    g.L = function(a, b) {
        return a ? a.dataset ? a.dataset[g.ek(b)] : a.getAttribute("data-" + b) : null
    };
    g.ek = function(a) {
        return fk[a] || (fk[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    g.hk = function(a, b) {
        var c = g.gk(a);
        spf.script.load(a, c, b)
    };
    g.ik = function(a) {
        a = g.gk(a);
        spf.script.unload(a)
    };
    g.gk = function(a) {
        var b = "";
        if (a) {
            var c = a.indexOf("jsbin/"),
                d = a.lastIndexOf(".js"),
                e = c + 6; - 1 < c && -1 < d && d > e && (b = a.substring(e, d), b = b.replace(Mba, ""), b = b.replace(Nba, ""), b = b.replace("debug-", ""), b = b.replace("tracing-", ""))
        }
        return b
    };
    g.jk = function() {
        this.F = !1;
        this.C = null
    };
    kk = function(a, b, c, d) {
        if (d) try {
            a.C = new window.botguard.bg(b, c ? function() {
                return c(b)
            } : g.Ga)
        } catch (e) {
            g.Yj(e)
        } else {
            try {
                a.C = new window.botguard.bg(b)
            } catch (e) {
                g.Yj(e)
            }
            c && c(b)
        }
    };
    g.lk = function(a, b) {
        b = void 0 === b ? {} : b;
        return a.C ? a.C.invoke(void 0, void 0, b) : null
    };
    Oba = function() {
        return parseInt(g.H("DCLKSTAT", 0), 10)
    };
    Pba = function() {
        return mk.Od()
    };
    Qba = function(a) {
        a = void 0 === a ? {} : a;
        return g.lk(mk, a)
    };
    nk = function(a) {
        this.D = void 0 === a ? null : a;
        this.F = 0;
        this.C = null
    };
    g.ok = function(a) {
        var b = new nk;
        a = void 0 === a ? null : a;
        b.F = 2;
        b.C = void 0 === a ? null : a;
        return b
    };
    g.pk = function(a) {
        var b = new nk;
        a = void 0 === a ? null : a;
        b.F = 1;
        b.C = void 0 === a ? null : a;
        return b
    };
    g.rk = function() {
        this.C = g.H("ALT_PREF_COOKIE_NAME", "PREF");
        var a = g.Li(this.C);
        if (a) {
            a = decodeURIComponent(a).split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("="),
                    d = c[0];
                (c = c[1]) && (g.qk[d] = c.toString())
            }
        }
    };
    sk = function(a) {
        if (/^f([1-9][0-9]*)$/.test(a)) throw Error("ExpectedRegexMatch: " + a);
    };
    tk = function(a) {
        if (!/^\w+$/.test(a)) throw Error("ExpectedRegexMismatch: " + a);
    };
    uk = function() {
        g.F.call(this);
        this.C = []
    };
    vk = function(a) {
        a = a || {};
        var b = {},
            c = {};
        this.url = a.url || "";
        this.args = a.args || g.jb(b);
        this.assets = a.assets || {};
        this.attrs = a.attrs || g.jb(c);
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    };
    g.wk = function(a) {
        a instanceof vk || (a = new vk(a));
        return a
    };
    yk = function() {
        a: {
            if (window.crypto && window.crypto.getRandomValues) try {
                var a = Array(16),
                    b = new Uint8Array(16);
                window.crypto.getRandomValues(b);
                for (var c = 0; c < a.length; c++) a[c] = b[c];
                var d = a;
                break a
            } catch (e) {}
            d = Array(16);
            for (a = 0; 16 > a; a++) {
                b = (0, g.Od)();
                for (c = 0; c < b % 23; c++) d[a] = Math.random();
                d[a] = Math.floor(256 * Math.random())
            }
            if (xk)
                for (a = 1, b = 0; b < xk.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ xk.charCodeAt(b), a++
        }
        a = [];
        for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] &
            63));
        return a.join("")
    };
    g.Ak = function(a) {
        a && g.fi("foregroundHeartbeatScreenAssociated", {
            clientDocumentNonce: zk,
            clientScreenNonce: a
        }, g.Vj)
    };
    g.Bk = function(a) {
        this.C = a
    };
    Ck = function(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "client-screen-nonce" : "client-screen-nonce." + a
    };
    Dk = function(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
    };
    Ek = function(a) {
        return g.H(Dk(void 0 === a ? 0 : a), void 0)
    };
    g.Fk = function() {
        var a = Ek(0),
            b;
        a ? b = new g.Bk({
            veType: a,
            youtubeData: void 0
        }) : b = null;
        return b
    };
    Gk = function() {
        var a = g.H("csn-to-ctt-auth-info");
        a || (a = {}, g.Pg("csn-to-ctt-auth-info", a));
        return a
    };
    g.Hk = function(a) {
        a = void 0 === a ? 0 : a;
        var b = g.H(Ck(a));
        if (!b && !g.H("USE_CSN_FALLBACK", !0)) return null;
        b || 0 != a || (g.Tg("kevlar_client_side_screens") || g.Tg("c3_client_side_screens") ? b = "UNDEFINED_CSN" : b = g.H("EVENT_ID"));
        return b ? b : null
    };
    Rba = function(a, b, c) {
        var d = Gk();
        (c = g.Hk(c)) && delete d[c];
        b && (d[a] = b)
    };
    g.Ik = function(a) {
        return Gk()[a]
    };
    g.Kk = function(a, b, c, d) {
        c = void 0 === c ? 0 : c;
        if (a !== g.H(Ck(c)) || b !== g.H(Dk(c)))
            if (Rba(a, d, c), g.Pg(Ck(c), a), g.Pg(Dk(c), b), 0 == c || g.Tg("web_screen_associated_all_layers")) b = function() {
                setTimeout(function() {
                    g.Ak(a)
                }, 0)
            }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b()
    };
    g.Lk = function(a, b) {
        this.version = a;
        this.args = b
    };
    g.Mk = function(a, b) {
        this.topic = a;
        this.C = b
    };
    g.Ok = function(a, b) {
        var c = Nk();
        c && c.publish.call(c, a.toString(), a, b)
    };
    g.Sk = function(a, b, c) {
        var d = Nk();
        if (!d) return 0;
        var e = d.subscribe(a.toString(), function(f, k) {
            var l = g.u("ytPubsub2Pubsub2SkipSubKey");
            l && l == e || (l = function() {
                if (Pk[e]) try {
                    if (k && a instanceof g.Mk && a != f) try {
                        var m = a.C,
                            n = k;
                        if (!n.args || !n.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                        try {
                            if (!m.Ge) {
                                var r = new m;
                                m.Ge = r.version
                            }
                            var x = m.Ge
                        } catch (y) {}
                        if (!x || n.version != x) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                        try {
                            k = Reflect.construct(m,
                                g.$a(n.args))
                        } catch (y) {
                            throw y.message = "yt.pubsub2.Data.deserialize(): " + y.message, y;
                        }
                    } catch (y) {
                        throw y.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + a.toString() + ": " + y.message, y;
                    }
                    b.call(c || window, k)
                } catch (y) {
                    g.ah(y)
                }
            }, Qk[a.toString()] ? g.yh() ? g.uh(l) : g.nh(l, 0) : l())
        });
        Pk[e] = !0;
        Rk[a.toString()] || (Rk[a.toString()] = []);
        Rk[a.toString()].push(e);
        return e
    };
    Uba = function() {
        var a = Sba,
            b = g.Sk(Tba, function(c) {
                a.apply(void 0, arguments);
                g.Tk(b)
            }, void 0);
        return b
    };
    g.Tk = function(a) {
        var b = Nk();
        b && ("number" === typeof a && (a = [a]), (0, g.E)(a, function(c) {
            b.unsubscribeByKey(c);
            delete Pk[c]
        }))
    };
    Nk = function() {
        return g.u("ytPubsub2Pubsub2Instance")
    };
    Uk = function(a) {
        g.Lk.call(this, 1, arguments);
        this.csn = a
    };
    g.Xk = function(a, b, c) {
        Vk.push({
            payloadName: a,
            payload: b,
            options: c
        });
        Wk || (Wk = Uba())
    };
    Sba = function(a) {
        if (Vk) {
            for (var b = g.ia(Vk), c = b.next(); !c.done; c = b.next()) c = c.value, c.payload && (c.payload.csn = a.csn, g.fi(c.payloadName, c.payload, null, c.options));
            Vk.length = 0
        }
        Wk = 0
    };
    g.Yk = function(a, b, c) {
        var d = g.Tg("use_default_events_client") ? void 0 : g.Vj;
        (0, g.E)(b, function(e) {
            var f = c,
                k = (f = void 0 === f ? !1 : f) ? 16 : 8;
            e = {
                csn: a,
                ve: e.getAsJson(),
                eventType: k
            };
            f = {
                Lf: g.Ik(a),
                Ce: a,
                Eu: f
            };
            "UNDEFINED_CSN" == a ? g.Xk("visualElementHidden", e, f) : d ? g.fi("visualElementHidden", e, d, f) : g.Wj("visualElementHidden", e, f)
        })
    };
    Zk = function() {
        var a = g.Fk(),
            b = g.Hk();
        b && a && g.Yk(b, [a], !0)
    };
    g.cl = function(a) {
        if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND" == a || "FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND" == a) {
            if ($k == a) return;
            $k = a
        }
        var b = 9E4 + 2E3 * Math.random();
        if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL" != a || !(g.Dh() > b) && "visible" == g.$g()) {
            b = -1;
            g.al && (b = Math.round((0, g.Vh)() - g.al));
            var c = String;
            var d = g.u("_fact", window);
            d = null == d || -1 == d ? -1 : Math.max((0, g.Od)() - d, 0);
            a = {
                firstActivityMs: c(d),
                clientDocumentNonce: zk,
                index: String(bl),
                lastEventDeltaMs: String(b),
                trigger: a
            };
            g.fi("foregroundHeartbeat",
                a, g.Vj);
            g.t("_fact", -1, window);
            bl++;
            g.al = (0, g.Vh)()
        }
    };
    g.dl = function(a, b, c, d, e) {
        this.name = a;
        this.deps = b || [];
        this.page = c || "";
        this.L = d ? bh(d) : null;
        this.H = e ? bh(e) : null;
        this.G = [];
        this.C = this.F = 0
    };
    g.el = function(a) {
        g.vh(a.F);
        a.F = g.uh((0, g.v)(a.init, a))
    };
    g.hl = function(a) {
        a.name in fl && gl(a.name);
        fl[a.name] = {
            reqs: [],
            disable: (0, g.v)(a.disable, a)
        };
        (0, g.E)(a.deps, function(b) {
            if (!(b in fl)) throw Error("Module " + b + " required by " + a.name);
            fl[b].reqs.push(a.name)
        });
        a.enable()
    };
    gl = function(a) {
        if (a in fl) {
            var b = fl[a];
            (0, g.E)(b.reqs, function(c) {
                gl(c)
            });
            try {
                b.disable()
            } catch (c) {}
            delete fl[a]
        }
    };
    jl = function(a) {
        Ng(g.il, arguments)
    };
    g.kl = function(a) {
        return a in g.il
    };
    ll = function(a) {
        Ng(g.il, arguments)
    };
    g.ml = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        a && (c && (c = g.Xb, c = !(c && 0 <= c.toLowerCase().indexOf("cobalt"))), c ? a && (a = g.Kb(g.Pb(a)), "about:invalid#zClosurez" === a ? a = "" : (a = g.gc(g.ic(a)), a = g.nc(g.rg(a))), g.wb(a) || (a = g.be("IFRAME", {
            src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
            style: "display:none"
        }), g.ge(a).body.appendChild(a))) : e ? Ai(a, b, "POST", e, d) : g.H("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || d ? Ai(a, b, "GET", "", d) : Vba(a, b) || Wba(a, b))
    };
    Vba = function(a, b) {
        if (!Rg("web_use_beacon_api_for_ad_click_server_pings")) return !1;
        if (Rg("use_sonic_js_library_for_v4_support")) {
            a: {
                try {
                    var c = new iaa({
                        url: a
                    });
                    if (c.D && c.F || c.G) {
                        var d = g.uc(g.xc(5, a));
                        var e = !(!d || !d.endsWith("/aclk") || "1" !== g.Ic(a, "ri"));
                        break a
                    }
                } catch (f) {}
                e = !1
            }
            if (!e) return !1
        }
        else if (e = g.uc(g.xc(5, a)), !e || -1 == e.indexOf("/aclk") || "1" !== g.Ic(a, "ae") || "1" !== g.Ic(a, "act")) return !1;
        return nl(a) ? (b && b(), !0) : !1
    };
    nl = function(a, b) {
        try {
            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, void 0 === b ? "" : b)) return !0
        } catch (c) {}
        return !1
    };
    Wba = function(a, b) {
        var c = new Image,
            d = "" + Xba++;
        ol[d] = c;
        c.onload = c.onerror = function() {
            b && ol[d] && b();
            delete ol[d]
        };
        c.src = a
    };
    g.pl = function(a, b) {
        a = a || "";
        var c = a.match(Yba);
        spf.style.load(a, c ? c[1] : "", b)
    };
    sl = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!ql(a) || c.some(function(e) {
                return !ql(e)
            })) throw Error("Only objects may be merged.");
        c = g.ia(c);
        for (d = c.next(); !d.done; d = c.next()) rl(a, d.value);
        return a
    };
    rl = function(a, b) {
        for (var c in b)
            if (ql(b[c])) {
                if (c in a && !ql(a[c])) throw Error("Cannot merge an object into a non-object.");
                c in a || (a[c] = {});
                rl(a[c], b[c])
            } else if (tl(b[c])) {
            if (c in a && !tl(a[c])) throw Error("Cannot merge an array into a non-array.");
            c in a || (a[c] = []);
            ul(a[c], b[c])
        } else a[c] = b[c];
        return a
    };
    ul = function(a, b) {
        for (var c = g.ia(b), d = c.next(); !d.done; d = c.next()) d = d.value, ql(d) ? a.push(rl({}, d)) : tl(d) ? a.push(ul([], d)) : a.push(d);
        return a
    };
    ql = function(a) {
        return "object" === typeof a && !Array.isArray(a)
    };
    tl = function(a) {
        return "object" === typeof a && Array.isArray(a)
    };
    g.vl = function(a, b, c) {
        var d = void 0 === d ? !0 : d;
        var e = g.H("VALID_SESSION_TEMPDATA_DOMAINS", []),
            f = g.yc(window.location.href);
        f && e.push(f);
        f = g.yc(a);
        if (g.Wa(e, f) || !f && g.ub(a, "/"))
            if (g.Tg("autoescape_tempdata_url") && (e = document.createElement("a"), g.lc(e, a), a = e.href), a && (a = g.zc(a), e = a.indexOf("#"), a = 0 > e ? a : a.substr(0, e))) d && !b.csn && (b.itct || b.ved) && (b = Object.assign({
                csn: g.Hk()
            }, b)), c ? (c = parseInt(c, 10), isFinite(c) && 0 < c && (d = "ST-" + g.sc(a).toString(36), b = b ? g.Ec(b) : "", g.Ki(d, b, c || 5))) : (c = b, b = "ST-" + g.sc(a).toString(36),
                c = c ? g.Ec(c) : "", g.Ki(b, c, 5))
    };
    g.wl = function(a) {
        var b = void 0 === b ? {} : b;
        var c = void 0 === c ? "" : c;
        var d = void 0 === d ? window : d;
        g.mc(d.location, g.Fc(a, b) + c)
    };
    g.xl = function(a, b) {
        b && g.vl(a, b);
        (window.ytspf || {}).enabled ? spf.navigate(a) : g.wl(a)
    };
    g.yl = function(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? !1 : c;
        var d = g.H("EVENT_ID");
        d && (b.ei || (b.ei = d));
        b && g.vl(a, b);
        if (c) return !1;
        g.xl(a);
        return !0
    };
    Cl = function(a, b, c, d) {
        g.F.call(this);
        var e = this;
        this.L = this.Za = a;
        this.ha = b;
        this.N = !1;
        this.api = {};
        this.oa = this.M = null;
        this.X = new g.ug;
        g.le(this, this.X);
        this.G = {};
        this.la = this.Ga = this.F = this.rb = this.C = null;
        this.T = !1;
        this.H = this.J = null;
        this.kb = {};
        this.mf = ["onReady"];
        this.mb = null;
        this.yb = NaN;
        this.V = {};
        this.D = d;
        zl(this);
        this.Eh("WATCH_LATER_VIDEO_ADDED", this.JC.bind(this));
        this.Eh("WATCH_LATER_VIDEO_REMOVED", this.KC.bind(this));
        this.Eh("onAdAnnounce", this.Gt.bind(this));
        this.Lb = new uk(this);
        g.le(this, this.Lb);
        this.aa = 0;
        c ? this.aa = g.nh(function() {
            e.loadNewVideoConfig(c)
        }, 0) : d && (Al(this), Bl(this))
    };
    Al = function(a) {
        var b;
        a.D ? b = a.D.rootElementId : b = a.C.attrs.id;
        a.F = b || a.F;
        "video-player" == a.F && (a.F = a.ha, a.C.attrs.id = a.ha);
        a.L.id == a.F && (a.F += "-player", a.C.attrs.id = a.F)
    };
    Dl = function(a) {
        a.C && !a.C.loaded && (a.C.loaded = !0, "0" != a.C.args.autoplay ? a.api.loadVideoByPlayerVars(a.C.args) : a.api.cueVideoByPlayerVars(a.C.args))
    };
    Gl = function(a) {
        var b = !0,
            c = El(a);
        c && a.C && (a = Fl(a), b = g.L(c, "version") === a);
        return b && !!g.u("yt.player.Application.create")
    };
    Bl = function(a) {
        if (!a.ub() && !a.T) {
            var b = Gl(a);
            if (b && "html5" == (El(a) ? "html5" : null)) a.la = "html5", a.N || Hl(a);
            else if (Il(a), a.la = "html5", b && a.H) a.Za.appendChild(a.H), Hl(a);
            else {
                a.C && (a.C.loaded = !0);
                var c = !1;
                a.J = function() {
                    c = !0;
                    var d = Jl(a, "player_bootstrap_method") ? g.u("yt.player.Application.createAlternate") || g.u("yt.player.Application.create") : g.u("yt.player.Application.create");
                    var e = a.C ? a.C.clone() : void 0;
                    d(a.Za, e, a.D);
                    Hl(a)
                };
                a.T = !0;
                b ? a.J() : (g.hk(Fl(a), a.J), (b = a.D ? a.D.cssUrl : a.C.assets.css) && g.pl(b), Kl(a) && !c && g.t("yt.player.Application.create", null, void 0))
            }
        }
    };
    El = function(a) {
        var b = g.D(a.F);
        !b && a.L && a.L.querySelector && (b = a.L.querySelector("#" + a.F));
        return b
    };
    Hl = function(a) {
        if (!a.ub()) {
            var b = El(a),
                c = !1;
            b && b.getApiInterface && b.getApiInterface() && (c = !0);
            c ? (a.T = !1, !Jl(a, "html5_remove_not_servable_check_killswitch") && b.isNotServable && a.C && b.isNotServable(a.C.args.video_id) || Zba(a)) : a.yb = g.nh(function() {
                Hl(a)
            }, 50)
        }
    };
    Zba = function(a) {
        zl(a);
        a.N = !0;
        var b = El(a);
        b.addEventListener && (a.M = Ll(a, b, "addEventListener"));
        b.removeEventListener && (a.oa = Ll(a, b, "removeEventListener"));
        var c = b.getApiInterface();
        c = c.concat(b.getInternalApiInterface());
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            a.api[e] || (a.api[e] = Ll(a, b, e))
        }
        for (var f in a.G) a.M(f, a.G[f]);
        Dl(a);
        a.Ga && a.Ga(a.api);
        a.X.na("onReady", a.api)
    };
    Ll = function(a, b, c) {
        var d = b[c];
        return function() {
            try {
                return a.mb = null, d.apply(b, arguments)
            } catch (e) {
                "sendAbandonmentPing" != c && (e.params = c, a.mb = e, g.ch(e))
            }
        }
    };
    zl = function(a) {
        a.N = !1;
        if (a.oa)
            for (var b in a.G) a.oa(b, a.G[b]);
        for (var c in a.V) g.ph(parseInt(c, 10));
        a.V = {};
        a.M = null;
        a.oa = null;
        for (var d in a.api) a.api[d] = null;
        a.api.addEventListener = a.Eh.bind(a);
        a.api.removeEventListener = a.nF.bind(a);
        a.api.destroy = a.dispose.bind(a);
        a.api.getLastError = a.Xu.bind(a);
        a.api.getPlayerType = a.gv.bind(a);
        a.api.getCurrentVideoConfig = a.Tu.bind(a);
        a.api.loadNewVideoConfig = a.loadNewVideoConfig.bind(a);
        a.api.isReady = a.Ly.bind(a)
    };
    Ml = function(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.kb[b]) return a.kb[b];
            c = function() {
                var d = g.u(b);
                d && d.apply(g.q, arguments)
            };
            a.kb[b] = c
        }
        return c ? c : null
    };
    $ba = function(a, b) {
        var c = "ytPlayer" + b + a.ha;
        a.G[b] = c;
        g.q[c] = function(d) {
            var e = g.nh(function() {
                a.ub() || (a.X.na(b, d), g.gb(a.V, String(e)))
            }, 0);
            g.hb(a.V, String(e), !0)
        };
        return c
    };
    Il = function(a) {
        a.cancel();
        zl(a);
        a.la = null;
        a.C && (a.C.loaded = !1);
        var b = El(a);
        b && (Gl(a) || !Kl(a) ? a.H = b : (b && b.destroy && b.destroy(), a.H = null));
        g.fe(a.Za)
    };
    Kl = function(a) {
        return a.C && a.C.args && a.C.args.fflags ? -1 != a.C.args.fflags.indexOf("player_destroy_old_version=true") : !1
    };
    Fl = function(a) {
        return a.D ? a.D.jsUrl : a.C.assets.js
    };
    Jl = function(a, b) {
        if (a.D) var c = a.D.serializedExperimentFlags;
        else a.C && a.C.args && (c = a.C.args.fflags);
        return "true" == gi(c || "")[b]
    };
    g.Pl = function(a, b) {
        var c = void 0 === c ? !0 : c;
        a = "string" === typeof a ? g.Vd(a) : a;
        var d = g.Nl + "_" + g.Oa(a),
            e = g.Ol[d];
        if (e && c) return b && b.args && b.args.fflags && b.args.fflags.includes("web_player_remove_playerproxy=true") ? e.api.loadVideoByPlayerVars(b.args || null) : e.loadNewVideoConfig(b), e.api;
        e = new Cl(a, d, b, void 0);
        g.Ol[d] = e;
        g.J("player-added", e.api);
        g.je(e, g.w(aca, e));
        return e.api
    };
    aca = function(a) {
        delete g.Ol[a.getId()]
    };
    g.Ql = function(a) {
        if (!a) return null;
        var b = g.Nl + "_" + g.Oa(a),
            c = g.Ol[b];
        c || (c = new Cl(a, b), g.Ol[b] = c);
        return c.api
    };
    g.Rl = function(a) {
        return g.Ql(document.getElementById(a))
    };
    Sl = function(a, b) {
        g.Lk.call(this, 1, arguments)
    };
    Tl = function(a, b) {
        g.Lk.call(this, 1, arguments)
    };
    bca = function() {
        this.timing = {};
        this.clearResourceTimings = function() {};
        this.webkitClearResourceTimings = function() {};
        this.mozClearResourceTimings = function() {};
        this.msClearResourceTimings = function() {};
        this.oClearResourceTimings = function() {}
    };
    Vl = function(a) {
        var b = Ul(a);
        if (b.aft) return b.aft;
        a = g.H((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = a.length, d = 0; d < c; d++) {
            var e = b[a[d]];
            if (e) return e
        }
        return NaN
    };
    Yl = function() {
        var a;
        if (g.Tg("csi_use_performance_navigation_timing")) {
            var b, c, d, e = null === (d = null === (c = null === (b = null === (a = null === Wl || void 0 === Wl ? void 0 : Wl.getEntriesByType) || void 0 === a ? void 0 : a.call(Wl, "navigation")) || void 0 === b ? void 0 : b[0]) || void 0 === c ? void 0 : c.toJSON) || void 0 === d ? void 0 : d.call(c);
            e ? (e.requestStart = Xl(e.requestStart), e.responseEnd = Xl(e.responseEnd), e.redirectStart = Xl(e.redirectStart), e.redirectEnd = Xl(e.redirectEnd), e.domainLookupEnd = Xl(e.domainLookupEnd), e.connectStart = Xl(e.connectStart),
                e.connectEnd = Xl(e.connectEnd), e.responseStart = Xl(e.responseStart), e.secureConnectionStart = Xl(e.secureConnectionStart), e.domainLookupStart = Xl(e.domainLookupStart), e.isPerformanceNavigationTiming = !0, a = e) : a = Wl.timing
        } else a = Wl.timing;
        return a
    };
    Zl = function() {
        return g.Tg("csi_use_time_origin") && Wl.timeOrigin ? Math.floor(Wl.timeOrigin) : Wl.timing.navigationStart
    };
    Xl = function(a) {
        return Math.round(Zl() + a)
    };
    $l = function(a) {
        g.t("ytglobal.timingready_", a, void 0)
    };
    am = function(a) {
        return !!g.u("yt.timing." + (a || "") + "pingSent_")
    };
    bm = function(a, b) {
        g.t("yt.timing." + (b || "") + "pingSent_", a, void 0)
    };
    dm = function(a) {
        return g.u("ytcsi." + (a || "") + "data_") || cm(a)
    };
    em = function(a) {
        a = dm(a);
        a.info || (a.info = {});
        return a.info
    };
    Ul = function(a) {
        a = dm(a);
        a.tick || (a.tick = {});
        return a.tick
    };
    fm = function(a) {
        var b = dm(a).nonce;
        b || (b = yk(), dm(a).nonce = b);
        return b
    };
    cm = function(a) {
        var b = {
            tick: {},
            info: {}
        };
        g.t("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    };
    hm = function(a) {
        var b = Ul(a || ""),
            c = Vl(a);
        c && !gm && (g.Ok(cca, new Sl(Math.round(c - b._start), a)), gm = !0)
    };
    dca = function() {
        if (Wl.getEntriesByType) {
            var a = Wl.getEntriesByType("paint");
            if (a = g.Ua(a, function(b) {
                    return "first-paint" === b.name
                })) return Xl(a.startTime)
        }
        a = Wl.timing;
        return a.Ny ? Math.max(0, a.Ny) : 0
    };
    im = function() {
        var a = g.u("ytcsi.debug");
        a || (a = [], g.t("ytcsi.debug", a, void 0), g.t("ytcsi.reference", {}, void 0));
        return a
    };
    km = function(a) {
        a = a || "";
        var b = jm();
        if (b[a]) return b[a];
        var c = im(),
            d = {
                timerName: a,
                info: {},
                tick: {},
                span: {}
            };
        c.push(d);
        return b[a] = d
    };
    jm = function() {
        var a = g.u("ytcsi.reference");
        if (a) return a;
        im();
        return g.u("ytcsi.reference")
    };
    lm = function() {
        this.C = 0
    };
    mm = function() {
        lm.C || (lm.C = new lm);
        return lm.C
    };
    om = function(a, b) {
        nm[b] = nm[b] || {
            count: 0
        };
        var c = nm[b];
        c.count++;
        c.time = (0, g.Vh)();
        a.C || (a.C = g.th(function() {
            var d = (0, g.Vh)(),
                e;
            for (e in nm) nm[e] && 6E4 < d - nm[e].time && delete nm[e];
            a && (a.C = 0)
        }, 5E3));
        return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new g.Uj("CSI data exceeded logging limit with key", b.split("_")), 0 <= b.indexOf("plev") || g.Yj(c)), !0) : !1
    };
    pm = function(a) {
        return !!g.H("FORCE_CSI_ON_GEL", !1) || g.Tg("csi_on_gel") || !!dm(a).useGel
    };
    rm = function(a, b, c) {
        var d = qm(c);
        d.gelTicks && (d.gelTicks["tick_" + a] = !0);
        c || b || (0, g.Vh)();
        return pm(c) ? (km(c || "").tick[a] = b || (0, g.Vh)(), d = fm(c), "_start" === a ? (a = mm(), om(a, "baseline_" + d) || g.Wj("latencyActionBaselined", {
            clientActionNonce: d
        }, {
            timestamp: b
        })) : mm().tick(a, d, b), hm(c), !0) : !1
    };
    um = function(a, b, c) {
        c = qm(c);
        if (c.gelInfos) c.gelInfos["info_" + a] = !0;
        else {
            var d = {};
            c.gelInfos = (d["info_" + a] = !0, d)
        }
        if (a.match("_rid")) {
            var e = a.split("_rid")[0];
            a = "REQUEST_ID"
        }
        if (a in sm) {
            c = sm[a];
            g.Wa(eca, c) && (b = !!b);
            a in tm && "string" === typeof b && (b = tm[a] + b.toUpperCase());
            a = b;
            b = c.split(".");
            for (var f = d = {}, k = 0; k < b.length - 1; k++) {
                var l = b[k];
                f[l] = {};
                f = f[l]
            }
            f[b[b.length - 1]] = "requestIds" === c ? [{
                id: a,
                endpoint: e
            }] : a;
            return sl({}, d)
        }
        g.Wa(fca, a) || g.Yj(new g.Uj("Unknown label logged with GEL CSI", a))
    };
    qm = function(a) {
        a = dm(a);
        if (!("gel" in a)) a.gel = {
            gelTicks: {},
            gelInfos: {}
        };
        else if (a.gel) {
            var b = a.gel;
            b.gelInfos || (b.gelInfos = {});
            b.gelTicks || (b.gelTicks = {})
        }
        return a.gel
    };
    vm = function(a) {
        a = qm(a);
        "gelInfos" in a || (a.gelInfos = {});
        return a.gelInfos
    };
    wm = function() {
        cm(void 0);
        gca();
        bm(!1, void 0);
        g.H("TIMING_ACTION") && g.Pg("PREVIOUS_ACTION", g.H("TIMING_ACTION"));
        g.Pg("TIMING_ACTION", "")
    };
    kca = function() {
        var a = g.H("TIMING_ACTION", void 0),
            b = g.H("TIMING_AFT_KEYS");
        km("").info.actionType = a;
        b && g.Pg("TIMING_AFT_KEYS", b);
        g.Pg("TIMING_ACTION", a);
        a = g.H("TIMING_INFO", {});
        for (var c in a) a.hasOwnProperty(c) && xm(c, a[c]);
        xm("is_nav", 1);
        (c = g.Hk()) && xm("csn", c);
        (c = g.H("PREVIOUS_ACTION", void 0)) && !pm() && xm("pa", c);
        c = em();
        a = g.H("CLIENT_PROTOCOL");
        b = g.H("CLIENT_TRANSPORT");
        a && xm("p", a);
        b && xm("t", b);
        xm("yt_vis", hca());
        if ("cold" === c.yt_lt) {
            xm("yt_lt", "cold");
            a = Yl();
            if (b = Zl()) g.ym("srt", a.responseStart),
                1 !== c.prerender && zm("n", b);
            c = dca();
            0 < c && g.ym("fpt", c);
            Am();
            Wl && Wl.getEntriesByType && ica();
            c = [];
            if (document.querySelector && Wl && Wl.getEntriesByName)
                for (var d in Bm) Bm.hasOwnProperty(d) && (a = Bm[d], jca(d, a) && c.push(a));
            c.length && xm("rc", c.join(","))
        }
        if (pm(void 0)) {
            d = {
                actionType: Cm[g.H("TIMING_ACTION", void 0)] || "LATENCY_ACTION_UNKNOWN",
                previousAction: Cm[g.H("PREVIOUS_ACTION", void 0)] || "LATENCY_ACTION_UNKNOWN"
            };
            if (c = g.Hk()) d.clientScreenNonce = c;
            c = fm(void 0);
            mm().info(d, c)
        }
        d = em();
        a = Ul();
        if ("cold" === d.yt_lt &&
            (c = qm(), b = c.gelTicks ? c.gelTicks : c.gelTicks = {}, c = c.gelInfos ? c.gelInfos : c.gelInfos = {}, pm())) {
            for (var e in a) "tick_" + e in b || rm(e, a[e]);
            e = vm();
            a = fm();
            b = {};
            for (var f in d)
                if (!("info_" + f in c)) {
                    var k = um(f, d[f]);
                    k && (sl(e, k), sl(b, k))
                } mm().info(b, a)
        }
        $l(!0);
        g.Gm(!1)
    };
    zm = function(a, b) {
        xm("yt_sts", a, void 0);
        g.ym("_start", b, void 0)
    };
    xm = function(a, b, c) {
        null !== b && (em(c)[a] = b, pm(c) ? (a = um(a, b, c)) && pm(c) && (b = km(c || ""), sl(b.info, a), sl(vm(c), a), c = fm(c), mm().info(a, c)) : km(c || "").info[a] = b)
    };
    g.ym = function(a, b, c) {
        var d = Ul(c);
        if (g.Tg("use_first_tick") && Hm(a, c)) return d[a];
        b || "_" === a[0] || Im(a, c);
        var e = b || (0, g.Vh)();
        d[a] = e;
        rm(a, b, c) || (g.Gm(!1, c), km(c || "").tick[a] = b || (0, g.Vh)());
        return d[a]
    };
    Jm = function(a, b) {
        if (pm(void 0)) {
            var c = qm(void 0);
            if (c.gelSpans) c.gelSpans[a] = !0;
            else {
                var d = {};
                c.gelSpans = (d[a] = !0, d)
            }
            c = {
                spanName: a,
                spanLengthUsec: String(Math.round(1E3 * b))
            };
            km("").span[String(c.spanName)] = c;
            d = qm(void 0);
            "gelSpans" in d || (d.gelSpans = {});
            sl(d.gelSpans, c);
            d = fm(void 0);
            mm().span(c, d)
        }
    };
    Im = function(a, b) {
        Wl.mark && (g.ub(a, "mark_") || (a = "mark_" + a), b && (a += " (" + b + ")"), Wl.mark(a))
    };
    Hm = function(a, b) {
        var c = Ul(b);
        return a in c
    };
    g.Gm = function(a, b) {
        if (!am(b)) {
            var c = g.H((b || "") + "TIMING_ACTION", void 0),
                d = Ul(b);
            if (g.u("ytglobal.timing" + (b || "") + "ready_") && c && Hm("_start") && Vl(b))
                if (hm(b), a || b) Km(b);
                else {
                    c = !0;
                    var e = g.H("TIMING_WAIT", []);
                    if (e.length)
                        for (var f = 0, k = e.length; f < k; ++f)
                            if (!(e[f] in d)) {
                                c = !1;
                                break
                            } c && Km(b)
                }
        }
    };
    hca = function() {
        switch (g.$g()) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3;
            default:
                return -1
        }
    };
    Km = function(a) {
        if (!pm(a)) {
            var b = Ul(a),
                c = em(a),
                d = b._start,
                e = g.H("CSI_SERVICE_NAME", "youtube"),
                f = {
                    v: 2,
                    s: e,
                    action: g.H((a || "") + "TIMING_ACTION", void 0)
                },
                k = c.srt;
            void 0 !== b.srt && delete c.srt;
            b.aft = Vl(a);
            var l = Ul(a),
                m = l.pbr,
                n = l.vc;
            l = l.pbs;
            m && n && l && m < n && n < l && em(a).yt_pvis && "youtube" === e && (xm("yt_lt", "hot_bg", a), e = b.vc, m = b.pbs, delete b.aft, c.aft = Math.round(m - e));
            for (var r in c) "_" !== r.charAt(0) && (f[r] = c[r]);
            b.ps = (0, g.Vh)();
            r = {};
            e = [];
            for (var x in b) "_" !== x.charAt(0) && (m = Math.round(b[x] - d), r[x] = m, e.push(x + "." +
                m));
            f.rt = e.join(",");
            b = !!c.ap;
            g.Tg("debug_csi_data") && (c = g.u("yt.timing.csiData"), c || (c = [], g.t("yt.timing.csiData", c, void 0)), c.push({
                page: location.href,
                time: new Date,
                args: f
            }));
            c = "";
            for (var y in f) f.hasOwnProperty(y) && (c += "&" + y + "=" + f[y]);
            f = "/csi_204?" + c.substring(1);
            if (window.navigator && window.navigator.sendBeacon && b) {
                var C = void 0 === C ? "" : C;
                nl(f, C) || g.ml(f, void 0, void 0, void 0, C)
            } else g.ml(f);
            bm(!0, a);
            g.Ok(lca, new Tl(r.aft + (Number(k) || 0), a))
        }
    };
    Lm = function(a) {
        if (pm(void 0)) Hm("_start", void 0) && g.ym("aa", void 0, void 0);
        else if (!am(void 0)) {
            var b = g.H("CSI_SERVICE_NAME", "youtube");
            g.H("TIMING_ACTION", void 0) && b && (g.ym("aa", void 0, void 0), xm("ap", 1, void 0), xm("yt_fss", a, void 0), Km(void 0))
        }
    };
    jca = function(a, b) {
        var c = document.querySelector(a);
        if (!c) return !1;
        var d = "",
            e = c.nodeName;
        "SCRIPT" === e ? (d = c.src, d || (d = c.getAttribute("data-timing-href")) && (d = window.location.protocol + d)) : "LINK" === e && (d = c.href);
        g.Fa() && c.setAttribute("nonce", g.Fa());
        return d ? (c = Wl.getEntriesByName(d)) && c[0] && (c = c[0], d = Zl(), g.ym("rsf_" + b, d + Math.round(c.fetchStart)), g.ym("rse_" + b, d + Math.round(c.responseEnd)), void 0 !== c.transferSize && (d = em(void 0), e = vm(void 0), "rc" in d || "rc" in e || xm("rc", ""), 0 === c.transferSize)) ? !0 : !1 : !1
    };
    Am = function() {
        if (!g.Tg("log_deltas_killswitch")) {
            var a, b, c, d;
            if (Wl && Wl.timing) {
                Wl.timeOrigin && Wl.timing.navigationStart && Jm("startTimeDelta", Math.floor(Wl.timeOrigin) - Wl.timing.navigationStart);
                var e = null === (d = null === (c = null === (b = null === (a = Wl.getEntriesByType) || void 0 === a ? void 0 : a.call(Wl, "navigation")) || void 0 === b ? void 0 : b[0]) || void 0 === c ? void 0 : c.toJSON) || void 0 === d ? void 0 : d.call(c);
                e && e.responseEnd && Wl.timing.responseEnd && Jm("responseEndDelta", Xl(e.responseEnd) - Wl.timing.responseEnd)
            }
        }
        a = Yl();
        a.isPerformanceNavigationTiming &&
            xm("pnt", 1, void 0);
        g.ym("nreqs", a.requestStart, void 0);
        g.ym("nress", a.responseStart, void 0);
        g.ym("nrese", a.responseEnd, void 0);
        0 < a.redirectEnd - a.redirectStart && (g.ym("nrs", a.redirectStart, void 0), g.ym("nre", a.redirectEnd, void 0));
        0 < a.domainLookupEnd - a.domainLookupStart && (g.ym("ndnss", a.domainLookupStart, void 0), g.ym("ndnse", a.domainLookupEnd, void 0));
        0 < a.connectEnd - a.connectStart && (g.ym("ntcps", a.connectStart, void 0), g.ym("ntcpe", a.connectEnd, void 0));
        a.secureConnectionStart >= Zl() && 0 < a.connectEnd -
            a.secureConnectionStart && (g.ym("nstcps", a.secureConnectionStart, void 0), g.ym("ntcpe", a.connectEnd, void 0))
    };
    ica = function() {
        var a = window.location.protocol,
            b = Wl.getEntriesByType("resource");
        b = (0, g.Mm)(b, function(c) {
            return 0 === c.name.indexOf(a + "//fonts.gstatic.com/s/")
        });
        (b = (0, g.$f)(b, function(c, d) {
            return d.duration > c.duration ? d : c
        }, {
            duration: 0
        })) && 0 < b.startTime && 0 < b.responseEnd && (g.ym("wffs", Xl(b.startTime)), g.ym("wffe", Xl(b.responseEnd)))
    };
    rca = function() {
        Nm++;
        var a = g.Zd(),
            b = new g.ne(0, 0, a.width, a.height);
        xm("vph", a.height);
        xm("vpw", a.width);
        g.ym("vpc");
        a = document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");
        var c = a.length,
            d = [];
        Om.start();
        for (var e = 0; e < c; e++) {
            var f = a[e];
            Pm(f, b) && (f = mca(f), f.then(nca), d.push(f), Qm.push(f))
        }
        g.ym("vpcc");
        b = g.Jf(d).then(oca);
        g.Lf(b, pca);
        b.then(qca);
        Qm.push(b);
        return b
    };
    qca = function() {
        Om.stop()
    };
    pca = function() {
        g.ym("vpr")
    };
    Pm = function(a, b) {
        for (var c = a, d = []; c != document.body;) {
            var e = g.Zg(c);
            if (e in Rm) return !0;
            if (e in Sm) return !1;
            var f = window.getComputedStyle(c);
            if ("none" == f.display || "hidden" == f.visibility) return Sm[e] = !0, !1;
            f = c.getBoundingClientRect();
            if (!(b.left <= f.left + f.width && f.left <= b.left + b.width && b.top <= f.top + f.height && f.top <= b.top + b.height)) return Sm[e] = !0, !1;
            d.push(e);
            c = c.parentElement
        }
        for (c = 0; c < d.length; c++) Rm[d[c]] = !0;
        return !0
    };
    oca = function(a) {
        var b = g.Zd();
        b = new g.ne(0, 0, b.width, b.height);
        for (var c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d].time;
            Pm(a[d].Nx, b) && c < f && (c = f)
        }
        return c
    };
    mca = function(a) {
        var b = Nm;
        return new g.Bf(function(c, d) {
            var e = {
                Nx: a,
                time: 0
            };
            a.loadTime ? (e.time = parseInt(a.loadTime, 10), c(e)) : (a.slt = function() {
                Nm != b ? d() : (e.time = parseInt(a.loadTime, 10), c(e), a.slt = void 0)
            }, Tm.push(a))
        })
    };
    nca = function(a) {
        Om.start();
        a = a.time;
        Um < a && (Um = a, g.ym("lim", a))
    };
    sca = function() {
        g.ym("vptl", Um);
        g.ym("vpl", Um)
    };
    tca = function() {
        Qm.forEach(function(a) {
            a.cancel()
        });
        Um = Qm.length = 0;
        Rm = {};
        Sm = {};
        Tm.forEach(function(a) {
            a.slt = void 0
        });
        Tm.length = 0
    };
    g.Vm = function(a, b) {
        g.ml("/gen_204?" + a, b)
    };
    vca = function(a) {
        if (null == a) return [];
        var b = [];
        uca.forEach(function(c) {
            c in a && (delete a[c], b.push(c))
        });
        a.cached_load = "1";
        return b
    };
    g.Wm = function() {
        return g.G(g.D("page-container"), "remote-connected")
    };
    wca = function() {
        Xm = g.oh(Ym, 5E3);
        var a = g.Zm();
        a && (a.addEventListener("onReady", Ym), a.addEventListener("onStateChange", Ym))
    };
    $m = function(a) {
        for (var b in g.Ol) {
            var c = g.Ol[b];
            c && c.cancel()
        }
        if (a = a || null) g.Pl("player-api", a), a = g.wk(a), a.loaded = !0;
        Ym();
        g.t("ytplayer.config", a, void 0)
    };
    g.Zm = function() {
        return g.Rl("player-api")
    };
    Ym = function() {
        var a = g.Zm();
        if (a) {
            var b = 1 == (a && a.isReady() ? a.getPlayerState() : void 0),
                c = "watch" == g.H("PAGE_NAME"),
                d = g.Wm();
            !b || c || d || a.pauseVideo()
        }
    };
    bn = function() {
        g.ym("ol");
        window.requestAnimationFrame && !document.hidden ? window.requestAnimationFrame(function() {
            setTimeout(function() {
                g.ym("cpt");
                g.J("on_cpt_tick", (new Date).getTime())
            }, 0)
        }) : document.hidden ? (g.ym("cpt"), g.J("on_cpt_tick", (new Date).getTime())) : setTimeout(function() {
            g.ym("cpt");
            g.J("on_cpt_tick", (new Date).getTime())
        }, 0);
        xca();
        g.H("CSI_VIEWPORT") && (an = rca(), an.then(function(a) {
            g.ym("vpl", a);
            an = null
        }, function() {}))
    };
    xca = function() {
        cn("init");
        var a = g.H("PAGE_NAME", void 0);
        a && cn("init-" + a)
    };
    cn = function(a) {
        g.yh() ? dn.push(g.uh(g.w(g.Kh, a), 0)) : g.J(a)
    };
    en = function() {
        g.wh(dn);
        dn.length = 0;
        tca();
        an && (an.cancel(), an = null);
        var a = g.H("PAGE_NAME", void 0);
        a && g.Kh("dispose-" + a);
        g.Kh("dispose")
    };
    yca = function() {
        bn()
    };
    zca = function() {
        g.H("TIMING_REPORT_ON_UNLOAD") && g.Gm(!0);
        Lm("u");
        g.cl("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");
        Zk();
        g.Sh();
        en();
        g.Kh("pageunload")
    };
    fn = function() {
        g.zh()
    };
    gn = function() {
        window.yt_spf_loaded_history = !0;
        g.zh()
    };
    mn = function() {
        hn = 1;
        jn = kn = 0;
        g.H("TIMING_REPORT_ON_UNLOAD") && g.Gm(!0);
        if (g.Tg("warm_load_nav_start_web")) {
            Lm("n");
            var a = jm();
            a[""] && delete a[""];
            var b = {
                timerName: "",
                info: {},
                tick: {},
                span: {}
            };
            im().push(b);
            a[""] = b;
            wm();
            $l(!1);
            g.Pg("TIMING_AFT_KEYS", []);
            xm("yt_lt", "warm");
            g.Pg("TIMING_ACTION", "");
            g.Pg("TIMING_WAIT", []);
            delete g.H("TIMING_INFO", {}).yt_lt;
            zm("n", void 0)
        } else Lm("n"), wm(), zm("n");
        Im("nr");
        ln(Aca);
        Zk();
        g.Kh("navigate")
    };
    pn = function(a) {
        a = a.detail.part || a.detail.partial;
        g.ym("nc" + kn);
        ++kn;
        if (a && a.data && a.data.deferDispose) "watch" == a.name && g.ym("bc");
        else {
            var b = 1 == hn;
            hn = 2;
            b ? (ln(Bca), nn()) : ln(Cca);
            if (b = a && a.data && a.data.swfcfg) on(a.timing, b.args), Hm("cfg") || g.ym("cfg"), $m(b)
        }
    };
    qn = function() {
        g.ym("np" + jn);
        ++jn
    };
    rn = function(a) {
        a = a.detail.response;
        var b = 1 == hn;
        hn = 3;
        b && (ln(Dca), nn());
        if (b = a.data && a.data.swfcfg) on(a.timing, b.args), Hm("cfg") || g.ym("cfg"), $m(b)
    };
    vn = function(a) {
        g.ym("nd");
        a = a.detail.response;
        g.sn = a.cacheKey;
        a = a.timing;
        var b = window._spf_state;
        g.tn.navigationCount = b && b["nav-counter"] || 0;
        g.Tg("warm_load_nav_start_web") ? g.ym("srt", a.responseStart) : (zm("ne", a.responseStart), b = Yl().responseStart, xm("srt", Math.max(0, b - Zl())));
        xm("yt_lt", a.spfCached ? "hot" : "warm");
        g.ym("pfs", a.fetchStart);
        g.ym("pfrs", a.responseStart);
        "redirectStart" in a && Am();
        ln(un);
        document.getElementById("content").style.height = "";
        bn();
        hn = 0
    };
    wn = function(a) {
        var b = a.detail.url,
            c = a.detail.err;
        c && (a = a.detail.xhr, a && !a.responseText || a && a.responseText && a.responseText.startsWith("<") || (c.params = b, g.ch(c)))
    };
    xn = function(a) {
        g.Vm(g.Ec({
            spfreload: "1",
            url: a.detail.url,
            reason: a.detail.reason
        }))
    };
    Fca = function() {
        Eca();
        window.yt_spf_loaded_history = !1
    };
    Gca = function() {};
    nn = function() {
        var a = document.getElementById("content"); - 1 < a.className.indexOf("spf-animate") && (a.style.height = a.clientHeight + "px");
        en();
        a = g.H("PREVIOUS_ACTION");
        for (var b in g.Og) delete g.Og[b];
        g.Pg("PREVIOUS_ACTION", a);
        g.Pg("SERVED_VIA_SPF_HISTORY", !!window.yt_spf_loaded_history);
        g.t("ytplayer.config", null, void 0);
        (b = g.Zm()) && b.stopVideo && (b.stopVideo(), b.getLastError() && (b = document.getElementById("movie_player")) && b.stopVideo && b.stopVideo());
        Ym()
    };
    ln = function(a) {
        var b = document.getElementById("progress");
        b || (b = document.createElement("div"), b.id = "progress", b.appendChild(document.createElement("dt")), b.appendChild(document.createElement("dd")), document.body.appendChild(b));
        g.vh(yn);
        yn = g.uh(function() {
            var c = a[0],
                d = a[1],
                e = a[2];
            b.className = "";
            var f = b.style;
            f.transitionDuration = f.webkitTransitionDuration = c + "ms";
            f.width = d + "%";
            g.ph(zn);
            zn = g.nh(function() {
                b.className = e
            }, c)
        }, 0)
    };
    Eca = function() {
        var a = un[0] + 50;
        g.ph(zn);
        zn = g.nh(function() {
            var b = document.getElementById("progress");
            b && b.parentNode.removeChild(b)
        }, a)
    };
    on = function(a, b) {
        var c = a && a.spfCached,
            d = a && a.spfPrefetched,
            e = [];
        c && !d && null != b && (e = vca(b));
        g.H("EXP_DEBUG_PREFETCH") && (e.sort(), c = {
            a: "updatePlayerVarsForCachedLoad",
            cached: c,
            prefetched: d,
            deleted: e.join("")
        }, g.Vm(g.Ec(c)))
    };
    Hca = function(a, b, c, d, e) {
        b = void 0 === b ? "Unknown file" : b;
        c = void 0 === c ? 0 : c;
        var f = !1,
            k = Rg("log_window_onerror_fraction");
        if (k && Math.random() < k) f = !0;
        else {
            k = document.getElementsByTagName("script");
            for (var l = 0, m = k.length; l < m; l++)
                if (0 < k[l].src.indexOf("/debug-")) {
                    f = !0;
                    break
                }
        }
        f && (f = !1, e ? f = !0 : ("string" === typeof a ? k = a : ErrorEvent && a instanceof ErrorEvent ? (f = !0, k = a.message, b = a.filename, c = a.lineno, d = a.colno) : (k = "Unknown error", b = "Unknown file", c = 0), e = new g.Uj(k), e.name = "UnhandledWindowError", e.message = k, e.fileName =
            b, e.lineNumber = c, isNaN(d) ? delete e.columnNumber : e.columnNumber = d), f ? g.Xj(e) : g.Yj(e))
    };
    An = function() {
        g.dl.call(this, "www/base");
        this.D = 0
    };
    Bn = function(a) {
        (a = a.detail.name) && gl(a)
    };
    g.aa = [];
    ea = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    da = aaa(this);
    fa("Symbol", function(a) {
        function b(e) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c("jscomp_symbol_" + (e || "") + "_" + d++, e)
        }

        function c(e, f) {
            this.C = e;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.C
        };
        var d = 0;
        return b
    });
    fa("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ea(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(ca(this))
                }
            })
        }
        return a
    });
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        Ica = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ka(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Cn;
    if ("function" == typeof Object.setPrototypeOf) Cn = Object.setPrototypeOf;
    else {
        var Dn;
        a: {
            var Jca = {
                    a: !0
                },
                En = {};
            try {
                En.__proto__ = Jca;
                Dn = En.a;
                break a
            } catch (a) {}
            Dn = !1
        }
        Cn = Dn ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = Cn;
    ma.prototype.J = function(a) {
        this.F = a
    };
    ma.prototype["return"] = function(a) {
        this.D = {
            "return": a
        };
        this.C = this.H
    };
    ma.prototype.Pb = function(a) {
        this.C = a
    };
    fa("Reflect", function(a) {
        return a ? a : {}
    });
    fa("Reflect.construct", function() {
        return Ica
    });
    fa("Reflect.setPrototypeOf", function(a) {
        return a ? a : la ? function(b, c) {
            try {
                return la(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    fa("Promise", function(a) {
        function b(k) {
            this.F = 0;
            this.D = void 0;
            this.C = [];
            var l = this.H();
            try {
                k(l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        }

        function c() {
            this.C = null
        }

        function d(k) {
            return k instanceof b ? k : new b(function(l) {
                l(k)
            })
        }
        if (a) return a;
        c.prototype.F = function(k) {
            if (null == this.C) {
                this.C = [];
                var l = this;
                this.D(function() {
                    l.H()
                })
            }
            this.C.push(k)
        };
        var e = da.setTimeout;
        c.prototype.D = function(k) {
            e(k, 0)
        };
        c.prototype.H = function() {
            for (; this.C && this.C.length;) {
                var k = this.C;
                this.C = [];
                for (var l = 0; l < k.length; ++l) {
                    var m = k[l];
                    k[l] = null;
                    try {
                        m()
                    } catch (n) {
                        this.G(n)
                    }
                }
            }
            this.C = null
        };
        c.prototype.G = function(k) {
            this.D(function() {
                throw k;
            })
        };
        b.prototype.H = function() {
            function k(n) {
                return function(r) {
                    m || (m = !0, n.call(l, r))
                }
            }
            var l = this,
                m = !1;
            return {
                resolve: k(this.M),
                reject: k(this.G)
            }
        };
        b.prototype.M = function(k) {
            if (k === this) this.G(new TypeError("A Promise cannot resolve to itself"));
            else if (k instanceof b) this.T(k);
            else {
                a: switch (typeof k) {
                    case "object":
                        var l = null != k;
                        break a;
                    case "function":
                        l = !0;
                        break a;
                    default:
                        l = !1
                }
                l ? this.X(k) : this.L(k)
            }
        };
        b.prototype.X = function(k) {
            var l = void 0;
            try {
                l = k.then
            } catch (m) {
                this.G(m);
                return
            }
            "function" == typeof l ? this.la(l, k) : this.L(k)
        };
        b.prototype.G = function(k) {
            this.N(2, k)
        };
        b.prototype.L = function(k) {
            this.N(1, k)
        };
        b.prototype.N = function(k, l) {
            if (0 != this.F) throw Error("Cannot settle(" + k + ", " + l + "): Promise already settled in state" + this.F);
            this.F = k;
            this.D = l;
            this.J()
        };
        b.prototype.J = function() {
            if (null != this.C) {
                for (var k = 0; k < this.C.length; ++k) f.F(this.C[k]);
                this.C = null
            }
        };
        var f = new c;
        b.prototype.T = function(k) {
            var l = this.H();
            k.Lh(l.resolve, l.reject)
        };
        b.prototype.la = function(k, l) {
            var m = this.H();
            try {
                k.call(l, m.resolve, m.reject)
            } catch (n) {
                m.reject(n)
            }
        };
        b.prototype.then = function(k, l) {
            function m(y, C) {
                return "function" == typeof y ? function(S) {
                    try {
                        n(y(S))
                    } catch (P) {
                        r(P)
                    }
                } : C
            }
            var n, r, x = new b(function(y, C) {
                n = y;
                r = C
            });
            this.Lh(m(k, n), m(l, r));
            return x
        };
        b.prototype["catch"] = function(k) {
            return this.then(void 0, k)
        };
        b.prototype.Lh = function(k, l) {
            function m() {
                switch (n.F) {
                    case 1:
                        k(n.D);
                        break;
                    case 2:
                        l(n.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.F);
                }
            }
            var n = this;
            null == this.C ? f.F(m) : this.C.push(m)
        };
        b.resolve = d;
        b.reject = function(k) {
            return new b(function(l, m) {
                m(k)
            })
        };
        b.race = function(k) {
            return new b(function(l, m) {
                for (var n = g.ia(k), r = n.next(); !r.done; r = n.next()) d(r.value).Lh(l, m)
            })
        };
        b.all = function(k) {
            var l = g.ia(k),
                m = l.next();
            return m.done ? d([]) : new b(function(n, r) {
                function x(S) {
                    return function(P) {
                        y[S] = P;
                        C--;
                        0 == C && n(y)
                    }
                }
                var y = [],
                    C = 0;
                do y.push(void 0), C++, d(m.value).Lh(x(y.length - 1), r), m = l.next(); while (!m.done)
            })
        };
        return b
    });
    fa("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = za(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            for (var e = Math.max(0, Math.min(c | 0, d.length)), f = b.length; 0 < f && 0 < e;)
                if (d[--e] != b[--f]) return !1;
            return 0 >= f
        }
    });
    fa("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = za(this, b, "startsWith");
            b += "";
            for (var e = d.length, f = b.length, k = Math.max(0, Math.min(c | 0, d.length)), l = 0; l < f && k < e;)
                if (d[k++] != b[l++]) return !1;
            return l >= f
        }
    });
    fa("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Aa(this, function(b) {
                return b
            })
        }
    });
    fa("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Aa(this, function(b, c) {
                return c
            })
        }
    });
    var Kca = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Ca(d, e) && (a[e] = d[e])
        }
        return a
    };
    fa("Object.assign", function(a) {
        return a || Kca
    });
    fa("Object.setPrototypeOf", function(a) {
        return a || la
    });
    fa("WeakMap", function(a) {
        function b(m) {
            this.tb = (l += Math.random() + 1).toString();
            if (m) {
                m = g.ia(m);
                for (var n; !(n = m.next()).done;) n = n.value, this.set(n[0], n[1])
            }
        }

        function c() {}

        function d(m) {
            var n = typeof m;
            return "object" === n && null !== m || "function" === n
        }

        function e(m) {
            if (!Ca(m, k)) {
                var n = new c;
                ea(m, k, {
                    value: n
                })
            }
        }

        function f(m) {
            var n = Object[m];
            n && (Object[m] = function(r) {
                if (r instanceof c) return r;
                Object.isExtensible(r) && e(r);
                return n(r)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var m = Object.seal({}),
                        n = Object.seal({}),
                        r = new a([
                            [m, 2],
                            [n, 3]
                        ]);
                    if (2 != r.get(m) || 3 != r.get(n)) return !1;
                    r["delete"](m);
                    r.set(n, 4);
                    return !r.has(m) && 4 == r.get(n)
                } catch (x) {
                    return !1
                }
            }()) return a;
        var k = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var l = 0;
        b.prototype.set = function(m, n) {
            if (!d(m)) throw Error("Invalid WeakMap key");
            e(m);
            if (!Ca(m, k)) throw Error("WeakMap key fail: " + m);
            m[k][this.tb] = n;
            return this
        };
        b.prototype.get = function(m) {
            return d(m) && Ca(m, k) ? m[k][this.tb] : void 0
        };
        b.prototype.has = function(m) {
            return d(m) && Ca(m, k) && Ca(m[k], this.tb)
        };
        b.prototype["delete"] = function(m) {
            return d(m) && Ca(m, k) && Ca(m[k], this.tb) ? delete m[k][this.tb] : !1
        };
        return b
    });
    fa("Map", function(a) {
        function b() {
            var l = {};
            return l.previous = l.next = l.head = l
        }

        function c(l, m) {
            var n = l.F;
            return ha(function() {
                if (n) {
                    for (; n.head != l.F;) n = n.previous;
                    for (; n.next != n.head;) return n = n.next, {
                        done: !1,
                        value: m(n)
                    };
                    n = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(l, m) {
            var n = m && typeof m;
            "object" == n || "function" == n ? f.has(m) ? n = f.get(m) : (n = "" + ++k, f.set(m, n)) : n = "p_" + m;
            var r = l.C[n];
            if (r && Ca(l.C, n))
                for (var x = 0; x < r.length; x++) {
                    var y = r[x];
                    if (m !== m && y.key !== y.key || m === y.key) return {
                        id: n,
                        list: r,
                        index: x,
                        lc: y
                    }
                }
            return {
                id: n,
                list: r,
                index: -1,
                lc: void 0
            }
        }

        function e(l) {
            this.C = {};
            this.F = b();
            this.size = 0;
            if (l) {
                l = g.ia(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var l = Object.seal({
                            x: 4
                        }),
                        m = new a(g.ia([
                            [l, "s"]
                        ]));
                    if ("s" != m.get(l) || 1 != m.size || m.get({
                            x: 4
                        }) || m.set({
                            x: 4
                        }, "t") != m || 2 != m.size) return !1;
                    var n = m.entries(),
                        r = n.next();
                    if (r.done || r.value[0] != l || "s" != r.value[1]) return !1;
                    r = n.next();
                    return r.done || 4 != r.value[0].x || "t" != r.value[1] || !n.next().done ? !1 : !0
                } catch (x) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(l, m) {
            l = 0 === l ? 0 : l;
            var n = d(this, l);
            n.list || (n.list = this.C[n.id] = []);
            n.lc ? n.lc.value = m : (n.lc = {
                next: this.F,
                previous: this.F.previous,
                head: this.F,
                key: l,
                value: m
            }, n.list.push(n.lc), this.F.previous.next = n.lc, this.F.previous = n.lc, this.size++);
            return this
        };
        e.prototype["delete"] = function(l) {
            l = d(this, l);
            return l.lc && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.C[l.id], l.lc.previous.next = l.lc.next, l.lc.next.previous = l.lc.previous, l.lc.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.C = {};
            this.F = this.F.previous = b();
            this.size = 0
        };
        e.prototype.has = function(l) {
            return !!d(this, l).lc
        };
        e.prototype.get = function(l) {
            return (l = d(this, l).lc) && l.value
        };
        e.prototype.entries = function() {
            return c(this, function(l) {
                return [l.key, l.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(l) {
                return l.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(l) {
                return l.value
            })
        };
        e.prototype.forEach = function(l, m) {
            for (var n = this.entries(), r; !(r = n.next()).done;) r = r.value, l.call(m, r[1], r[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var k = 0;
        return e
    });
    fa("Set", function(a) {
        function b(c) {
            this.qa = new Map;
            if (c) {
                c = g.ia(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.qa.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(g.ia([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (k) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.qa.set(c, c);
            this.size = this.qa.size;
            return this
        };
        b.prototype["delete"] = function(c) {
            c = this.qa["delete"](c);
            this.size = this.qa.size;
            return c
        };
        b.prototype.clear = function() {
            this.qa.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.qa.has(c)
        };
        b.prototype.entries = function() {
            return this.qa.entries()
        };
        b.prototype.values = function() {
            return this.qa.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.qa.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    fa("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Aa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    fa("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ca(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    fa("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    fa("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length,
                f = c || 0;
            for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
                var k = d[f];
                if (k === b || Object.is(k, b)) return !0
            }
            return !1
        }
    });
    fa("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== za(this, b, "includes").indexOf(b, c || 0)
        }
    });
    fa("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(l) {
                return l
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var k = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, k++))
            } else
                for (f = b.length, k = 0; k < f; k++) e.push(c.call(d, b[k], k));
            return e
        }
    });
    fa("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    fa("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    fa("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    });
    fa("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ca(b, d) && c.push(b[d]);
            return c
        }
    });
    g.Fn = g.Fn || {};
    g.q = this || self;
    eaa = /^[\w+/_-]+[=]{0,2}$/;
    Ea = null;
    Na = "closure_uid_" + (1E9 * Math.random() >>> 0);
    faa = 0;
    g.Od = Date.now;
    g.z(g.Ra, Error);
    g.Ra.prototype.name = "CustomError";
    g.Va = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    g.Lca = Array.prototype.lastIndexOf ? function(a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    } : function(a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    };
    g.E = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    g.Mm = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, k = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var m = k[l];
                b.call(c, m, l, a) && (e[f++] = m)
            } return e
    };
    g.Gn = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
        return e
    };
    g.$f = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c) {
        var d = c;
        (0, g.E)(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    };
    g.Hn = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    };
    g.In = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };
    var lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var nb;
    g.rb.prototype.Nd = !0;
    g.rb.prototype.Sc = function() {
        return this.C
    };
    var qb = {},
        pb = {};
    g.Mca = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    g.Nca = RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    g.Jn = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");
    var xb, yb, zb, Ab, Bb, Cb, jaa;
    g.Eb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    xb = /&/g;
    yb = /</g;
    zb = />/g;
    Ab = /"/g;
    Bb = /'/g;
    Cb = /\x00/g;
    jaa = /[\x00&<>"']/;
    var laa, kaa, Nb, Ib, Hb;
    g.Jb.prototype.Nd = !0;
    g.Jb.prototype.Sc = function() {
        return this.F.toString()
    };
    g.Jb.prototype.Jk = !0;
    g.Jb.prototype.C = function() {
        return 1
    };
    laa = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
    kaa = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Nb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    Ib = {};
    g.Ob = g.Lb("about:invalid#zClosurez");
    Hb = {};
    g.Sb.prototype.Nd = !0;
    g.Rb = {};
    g.Sb.prototype.Sc = function() {
        return this.C
    };
    g.Kn = g.Tb("");
    g.Ln = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    g.Mn = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
    g.Vb.prototype.Nd = !0;
    g.Ub = {};
    g.Vb.prototype.Sc = function() {
        return this.C
    };
    g.Oca = g.Wb("");
    a: {
        var Nn = g.q.navigator;
        if (Nn) {
            var On = Nn.userAgent;
            if (On) {
                g.Xb = On;
                break a
            }
        }
        g.Xb = ""
    };
    var dc;
    g.ec.prototype.Jk = !0;
    g.ec.prototype.C = function() {
        return this.D
    };
    g.ec.prototype.Nd = !0;
    g.ec.prototype.Sc = function() {
        return this.F.toString()
    };
    dc = {};
    g.Pca = g.jc("<!DOCTYPE html>", 0);
    g.Pn = new g.ec;
    g.Pn.F = g.q.trustedTypes && g.q.trustedTypes.emptyHTML ? g.q.trustedTypes.emptyHTML : "";
    g.Pn.D = 0;
    g.Qn = g.jc("<br>", 0);
    g.Qca = g.Sa(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = g.fc(g.Pn);
        return !b.parentElement
    });
    g.qc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    g.wc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    g.Hc = /#|$/;
    var Jc = 0,
        Kc = 0;
    Nc.prototype.length = function() {
        return this.C.length
    };
    Nc.prototype.end = function() {
        var a = this.C;
        this.C = [];
        return a
    };
    g.Uc[" "] = g.Ga;
    var Yn, maa, bo;
    g.Rn = g.Yb("Opera");
    g.Fg = g.Zb();
    g.Sn = g.Yb("Edge");
    g.Tn = g.Sn || g.Fg;
    g.Un = g.Yb("Gecko") && !(-1 != g.Xb.toLowerCase().indexOf("webkit") && !g.Yb("Edge")) && !(g.Yb("Trident") || g.Yb("MSIE")) && !g.Yb("Edge");
    g.Vn = -1 != g.Xb.toLowerCase().indexOf("webkit") && !g.Yb("Edge");
    g.Wn = g.Yb("Macintosh");
    g.Xn = g.Yb("Windows");
    g.Rca = g.Yb("Linux") || g.Yb("CrOS");
    g.Sca = g.Yb("Android");
    g.Tca = Sc();
    g.Uca = g.Yb("iPad");
    g.Vca = g.Yb("iPod");
    g.Wca = g.Tc();
    a: {
        var Zn = "",
            $n = function() {
                var a = g.Xb;
                if (g.Un) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (g.Sn) return /Edge\/([\d\.]+)/.exec(a);
                if (g.Fg) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (g.Vn) return /WebKit\/(\S+)/.exec(a);
                if (g.Rn) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        $n && (Zn = $n ? $n[1] : "");
        if (g.Fg) {
            var ao = Wc();
            if (null != ao && ao > parseFloat(Zn)) {
                Yn = String(ao);
                break a
            }
        }
        Yn = Zn
    }
    g.Xc = Yn;
    maa = {};
    if (g.q.document && g.Fg) {
        var co = Wc();
        bo = co ? co : parseInt(g.Xc, 10) || void 0
    } else bo = void 0;
    g.Zc = bo;
    g.eo = $b();
    g.fo = Sc() || g.Yb("iPod");
    g.go = g.Yb("iPad");
    g.Xca = g.cc();
    g.ho = ac();
    g.io = g.bc() && !g.Tc();
    var bd;
    bd = {};
    g.dd = null;
    ed.prototype.reset = function() {
        this.D = [];
        this.C.end();
        this.F = 0
    };
    g.od.prototype.next = function() {
        return this.C < this.F.length ? {
            done: !1,
            value: this.F[this.C++]
        } : {
            done: !0,
            value: void 0
        }
    };
    "undefined" != typeof Symbol && "undefined" != typeof Symbol.iterator && (g.od.prototype[Symbol.iterator] = function() {
        return this
    });
    var qd = "function" == typeof Uint8Array,
        rd = [];
    g.pd.prototype.Yc = function() {
        Bd(this);
        return this.jc
    };
    g.pd.prototype.F = qd ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return g.cd(this)
        };
        try {
            return JSON.stringify(this.jc && this.Yc(), Cd)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.jc && this.Yc(), Cd)
    };
    g.pd.prototype.toString = function() {
        Bd(this);
        return this.jc.toString()
    };
    g.pd.prototype.clone = function() {
        return new this.constructor(Dd(this.Yc()))
    };
    g.jo = document;
    g.re = window;
    var Id = {};
    g.h = g.Jd.prototype;
    g.h.isEnabled = function() {
        return navigator.cookieEnabled
    };
    g.h.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.OQ;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var k = c.path || void 0;
            var l = c.yp
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === l && (l = -1);
        c = f ? ";domain=" + f : "";
        k = k ? ";path=" + k : "";
        d = d ? ";secure" : "";
        l = 0 > l ? "" : 0 == l ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, g.Od)() + 1E3 * l)).toUTCString();
        this.C.cookie = a + "=" + b + c + k + l + d + (null != e ? ";samesite=" +
            e : "")
    };
    g.h.get = function(a, b) {
        for (var c = a + "=", d = (this.C.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0, g.Eb)(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    g.h.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            yp: 0,
            path: b,
            domain: c
        });
        return d
    };
    g.h.xc = function() {
        return g.Kd(this).keys
    };
    g.h.Gb = g.ba(1);
    g.h.isEmpty = function() {
        return !this.C.cookie
    };
    g.h.Fb = function() {
        return this.C.cookie ? (this.C.cookie || "").split(";").length : 0
    };
    g.h.vd = g.ba(3);
    g.h.clear = function() {
        for (var a = g.Kd(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    g.Ji = new g.Jd("undefined" == typeof document ? null : document);
    g.ko = {
        Ia: ["BC", "AD"],
        Ma: ["Before Christ", "Anno Domini"],
        Na: "JFMAMJJASOND".split(""),
        Oa: "JFMAMJJASOND".split(""),
        wa: "January February March April May June July August September October November December".split(" "),
        sa: "January February March April May June July August September October November December".split(" "),
        xa: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Ca: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Ea: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        La: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Ba: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Da: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Qa: "SMTWTFS".split(""),
        Pa: "SMTWTFS".split(""),
        Ka: ["Q1", "Q2", "Q3", "Q4"],
        Ja: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        Aa: ["AM", "PM"],
        ra: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        za: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        Ha: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        ua: 6,
        Fa: [5, 6],
        va: 5
    };
    g.lo = g.ko;
    g.lo = g.ko;
    g.h = g.Pd.prototype;
    g.h.re = g.lo.ua;
    g.h.Ig = g.lo.va;
    g.h.clone = function() {
        var a = new g.Pd(this.date);
        a.re = this.re;
        a.Ig = this.Ig;
        return a
    };
    g.h.getFullYear = function() {
        return this.date.getFullYear()
    };
    g.h.getYear = function() {
        return this.getFullYear()
    };
    g.h.getMonth = function() {
        return this.date.getMonth()
    };
    g.h.getDate = function() {
        return this.date.getDate()
    };
    g.h.getTime = function() {
        return this.date.getTime()
    };
    g.h.getDay = function() {
        return this.date.getDay()
    };
    g.h.getUTCFullYear = function() {
        return this.date.getUTCFullYear()
    };
    g.h.getUTCMonth = function() {
        return this.date.getUTCMonth()
    };
    g.h.getUTCDate = function() {
        return this.date.getUTCDate()
    };
    g.h.getUTCDay = function() {
        return this.date.getDay()
    };
    g.h.getUTCHours = function() {
        return this.date.getUTCHours()
    };
    g.h.getUTCMinutes = function() {
        return this.date.getUTCMinutes()
    };
    g.h.getTimezoneOffset = function() {
        return this.date.getTimezoneOffset()
    };
    g.h.set = function(a) {
        this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    g.h.setFullYear = function(a) {
        this.date.setFullYear(a)
    };
    g.h.setYear = function(a) {
        this.setFullYear(a)
    };
    g.h.setMonth = function(a) {
        this.date.setMonth(a)
    };
    g.h.setDate = function(a) {
        this.date.setDate(a)
    };
    g.h.setTime = function(a) {
        this.date.setTime(a)
    };
    g.h.setUTCFullYear = function(a) {
        this.date.setUTCFullYear(a)
    };
    g.h.setUTCMonth = function(a) {
        this.date.setUTCMonth(a)
    };
    g.h.setUTCDate = function(a) {
        this.date.setUTCDate(a)
    };
    g.h.add = function(a) {
        if (a.C || a.months) {
            var b = this.getMonth() + a.months + 12 * a.C,
                c = this.getYear() + Math.floor(b / 12);
            b %= 12;
            0 > b && (b += 12);
            var d = Math.min(g.Ld(c, b), this.getDate());
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.days && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), Nd(this, a.getDate()))
    };
    g.h.Te = function(a) {
        return [this.getFullYear(), g.rc(this.getMonth() + 1, 2), g.rc(this.getDate(), 2)].join(a ? "-" : "") + ""
    };
    g.h.equals = function(a) {
        return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
    };
    g.h.toString = function() {
        return this.Te()
    };
    g.h.valueOf = function() {
        return this.date.valueOf()
    };
    var oaa;
    oaa = !g.Fg || g.$c(9);
    g.Yca = !g.Un && !g.Fg || g.Fg && g.$c(9) || g.Un && g.Yc("1.9.1");
    g.mo = g.Fg && !g.Yc("9");
    g.Zca = g.Fg || g.Rn || g.Vn;
    g.h = g.Qd.prototype;
    g.h.clone = function() {
        return new g.Qd(this.x, this.y)
    };
    g.h.equals = function(a) {
        return a instanceof g.Qd && g.Rd(this, a)
    };
    g.h.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    g.h.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    g.h.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    g.h = g.Td.prototype;
    g.h.clone = function() {
        return new g.Td(this.width, this.height)
    };
    g.h.aspectRatio = function() {
        return this.width / this.height
    };
    g.h.isEmpty = function() {
        return !(this.width * this.height)
    };
    g.h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Wd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    var qaa = {
            bJ: "allow-forms",
            cJ: "allow-modals",
            dJ: "allow-orientation-lock",
            eJ: "allow-pointer-lock",
            fJ: "allow-popups",
            gJ: "allow-popups-to-escape-sandbox",
            hJ: "allow-presentation",
            iJ: "allow-same-origin",
            jJ: "allow-scripts",
            kJ: "allow-top-navigation",
            lJ: "allow-top-navigation-by-user-activation"
        },
        saa = g.Sa(function() {
            return raa()
        });
    g.F.prototype.Qc = !1;
    g.F.prototype.ub = function() {
        return this.Qc
    };
    g.F.prototype.dispose = function() {
        this.Qc || (this.Qc = !0, this.W())
    };
    g.F.prototype.W = function() {
        if (this.tf)
            for (; this.tf.length;) this.tf.shift()()
    };
    g.h = g.ne.prototype;
    g.h.clone = function() {
        return new g.ne(this.left, this.top, this.width, this.height)
    };
    g.h.contains = function(a) {
        return a instanceof g.Qd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    g.h.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.h.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.h.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.no = g.Un ? "MozUserSelect" : g.Vn || g.Sn ? "WebkitUserSelect" : null;
    g.oo = !!window.google_async_iframe_id;
    g.po = g.oo && window.parent || window;
    g.ti = (new Date).getTime();
    g.h = g.ze.prototype;
    g.h.Jp = g.ba(4);
    g.h.Pn = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        b = this.Qn(b);
        return this.Kf.has(b) ? this.Kf.get(b) : void 0
    };
    g.h.On = g.ba(5);
    g.h.clear = function() {
        this.Kf.clear()
    };
    g.h.Qn = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return b ? b.join(",") : "key"
    };
    g.z(Ae, g.pd);
    g.z(Be, g.pd);
    var waa = [1];
    Be.prototype.Fb = function() {
        return g.A(this, 2)
    };
    g.z(Ce, g.pd);
    g.z(De, g.pd);
    g.z(Ee, g.pd);
    g.z(Fe, g.pd);
    g.z(Ge, g.pd);
    g.z(Ie, g.pd);
    g.z(Ke, g.pd);
    var zaa = [3, 6, 4],
        Aaa = [
            [1, 2]
        ],
        Baa = [1],
        He = [
            [1, 2, 3]
        ],
        Je = [
            [1, 2, 3]
        ];
    g.p(g.Le, g.ze);
    g.Le.prototype.F = g.ba(6);
    g.Me.prototype.stopPropagation = function() {
        this.F = !0
    };
    g.Me.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var bf, ada, Laa;
    g.$ca = !g.Fg || g.$c(9);
    bf = !g.Fg || g.$c(9);
    ada = g.Fg && !g.Yc("9");
    Laa = function() {
        if (!g.q.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            g.q.addEventListener("test", g.Ga, b), g.q.removeEventListener("test", g.Ga, b)
        } catch (c) {}
        return a
    }();
    g.qo = g.Vn ? "webkitTransitionEnd" : g.Rn ? "otransitionend" : "transitionend";
    g.z(g.Ne, g.Me);
    var bda = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    g.Ne.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        e ? g.Un && (g.Vc(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !==
            a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.G = g.Wn ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : bda[a.pointerType] || "";
        this.state =
            a.state;
        this.yc = a;
        a.defaultPrevented && this.preventDefault()
    };
    g.Ne.prototype.stopPropagation = function() {
        g.Ne.Y.stopPropagation.call(this);
        this.yc.stopPropagation ? this.yc.stopPropagation() : this.yc.cancelBubble = !0
    };
    g.Ne.prototype.preventDefault = function() {
        g.Ne.Y.preventDefault.call(this);
        var a = this.yc;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, ada) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Oe = "closure_listenable_" + (1E6 * Math.random() | 0),
        Iaa = 0;
    g.h = g.Re.prototype;
    g.h.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.C++);
        var k = Te(a, b, d, e); - 1 < k ? (b = a[k], c || (b.Kh = !1)) : (b = new Jaa(b, this.src, f, !!d, e), b.Kh = c, a.push(b));
        return b
    };
    g.h.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = Te(e, b, c, d);
        return -1 < b ? (Qe(e[b]), g.Ya(e, b), 0 == e.length && (delete this.listeners[a], this.C--), !0) : !1
    };
    g.h.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.listeners)
            if (!a || c == a) {
                for (var d = this.listeners[c], e = 0; e < d.length; e++) ++b, Qe(d[e]);
                delete this.listeners[c];
                this.C--
            } return b
    };
    g.h.Sf = g.ba(8);
    g.h.Re = function(a, b, c, d) {
        a = this.listeners[a.toString()];
        var e = -1;
        a && (e = Te(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    g.h.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return g.cb(this.listeners, function(f) {
            for (var k = 0; k < f.length; ++k)
                if (!(c && f[k].type != d || e && f[k].capture != b)) return !0;
            return !1
        })
    };
    var Ze = "closure_lm_" + (1E6 * Math.random() | 0),
        ef = {},
        af = 0,
        hf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    g.z(g.jf, g.F);
    g.jf.prototype[Oe] = !0;
    g.h = g.jf.prototype;
    g.h.bi = function() {
        return this.Fl
    };
    g.h.nh = g.ba(9);
    g.h.addEventListener = function(a, b, c, d) {
        g.Ve(this, a, b, c, d)
    };
    g.h.removeEventListener = function(a, b, c, d) {
        g.cf(this, a, b, c, d)
    };
    g.h.dispatchEvent = function(a) {
        var b = this.bi();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.bi()) c.push(b), ++d
        }
        b = this.Ht;
        d = a.type || a;
        if ("string" === typeof a) a = new g.Me(a, b);
        else if (a instanceof g.Me) a.target = a.target || b;
        else {
            var e = a;
            a = new g.Me(d, b);
            g.mb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.F && 0 <= f; f--) {
                var k = a.currentTarget = c[f];
                e = kf(k, d, !0, a) && e
            }
        a.F || (k = a.currentTarget = b, e = kf(k, d, !0, a) && e, a.F || (e = kf(k, d, !1, a) && e));
        if (c)
            for (f = 0; !a.F && f < c.length; f++) k = a.currentTarget = c[f], e = kf(k, d, !1, a) && e;
        return e
    };
    g.h.W = function() {
        g.jf.Y.W.call(this);
        this.removeAllListeners();
        this.Fl = null
    };
    g.h.O = function(a, b, c, d) {
        return this.wd.add(String(a), b, !1, c, d)
    };
    g.h.ye = function(a, b, c, d) {
        return this.wd.add(String(a), b, !0, c, d)
    };
    g.h.Va = function(a, b, c, d) {
        return this.wd.remove(String(a), b, c, d)
    };
    g.h.removeAllListeners = function(a) {
        return this.wd ? this.wd.removeAll(a) : 0
    };
    g.h.Sf = g.ba(7);
    g.h.Re = function(a, b, c, d) {
        return this.wd.Re(String(a), b, c, d)
    };
    g.h.hasListener = function(a, b) {
        return this.wd.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    lf.prototype.get = function() {
        if (0 < this.F) {
            this.F--;
            var a = this.C;
            this.C = a.next;
            a.next = null
        } else a = this.D();
        return a
    };
    var vf;
    var wf = new lf(function() {
        return new pf
    }, function(a) {
        a.reset()
    }); of .prototype.add = function(a, b) {
        var c = wf.get();
        c.set(a, b);
        this.F ? this.F.next = c : this.C = c;
        this.F = c
    }; of .prototype.remove = function() {
        var a = null;
        this.C && (a = this.C, this.C = this.C.next, this.C || (this.F = null), a.next = null);
        return a
    };
    pf.prototype.set = function(a, b) {
        this.mc = a;
        this.scope = b;
        this.next = null
    };
    pf.prototype.reset = function() {
        this.next = this.scope = this.mc = null
    };
    var qf, rf = !1,
        sf = new of ;
    Cf.prototype.reset = function() {
        this.context = this.onRejected = this.D = this.C = null;
        this.F = !1
    };
    var Df = new lf(function() {
        return new Cf
    }, function(a) {
        a.reset()
    });
    g.Bf.prototype.then = function(a, b, c) {
        return Kf(this, g.La(a) ? a : null, g.La(b) ? b : null, c)
    };
    g.xf(g.Bf);
    g.Bf.prototype.cancel = function(a) {
        if (0 == this.C) {
            var b = new g.Rf(a);
            tf(function() {
                Mf(this, b)
            }, this)
        }
    };
    g.Bf.prototype.X = function(a) {
        this.C = 0;
        Af(this, 2, a)
    };
    g.Bf.prototype.M = function(a) {
        this.C = 0;
        Af(this, 3, a)
    };
    g.Bf.prototype.J = function() {
        for (var a; a = Nf(this);) Of(this, a, this.C, this.N);
        this.L = !1
    };
    var Tf = nf;
    g.z(g.Rf, g.Ra);
    g.Rf.prototype.name = "cancel";
    g.z(g.Uf, g.jf);
    g.h = g.Uf.prototype;
    g.h.enabled = !1;
    g.h.xd = null;
    g.h.setInterval = function(a) {
        this.C = a;
        this.xd && this.enabled ? (this.stop(), this.start()) : this.xd && this.stop()
    };
    g.h.vv = function() {
        if (this.enabled) {
            var a = (0, g.Od)() - this.G;
            0 < a && a < .8 * this.C ? this.xd = this.F.setTimeout(this.D, this.C - a) : (this.xd && (this.F.clearTimeout(this.xd), this.xd = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    g.h.start = function() {
        this.enabled = !0;
        this.xd || (this.xd = this.F.setTimeout(this.D, this.C), this.G = (0, g.Od)())
    };
    g.h.stop = function() {
        this.enabled = !1;
        this.xd && (this.F.clearTimeout(this.xd), this.xd = null)
    };
    g.h.W = function() {
        g.Uf.Y.W.call(this);
        this.stop();
        delete this.F
    };
    g.Yf.prototype.J = function() {
        var a = this.G.values();
        a = [].concat(g.ja(a)).filter(function(b) {
            return b.Kf.size
        });
        a.length && this.M.flush(a);
        Raa(a);
        this.H = 0;
        this.F.enabled && this.F.stop()
    };
    g.Yf.prototype.C = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.G.has(a) || this.G.set(a, new g.Le(a, c))
    };
    g.Yf.prototype.D = g.ba(10);
    g.Yf.prototype.N = g.ba(11);
    Zf.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.C[a] != b && (this.C[a] = b, this.F = -1)
    };
    Zf.prototype.get = function(a) {
        return !!this.C[a]
    };
    g.z(g.cg, g.F);
    g.h = g.cg.prototype;
    g.h.tb = 0;
    g.h.W = function() {
        g.cg.Y.W.call(this);
        this.stop();
        delete this.C;
        delete this.F
    };
    g.h.start = function(a) {
        this.stop();
        this.tb = g.Vf(this.ac, void 0 !== a ? a : this.D)
    };
    g.h.stop = function() {
        this.isActive() && g.Wf(this.tb);
        this.tb = 0
    };
    g.h.isActive = function() {
        return 0 != this.tb
    };
    g.h.lk = function() {
        this.tb = 0;
        this.C && this.C.call(this.F)
    };
    g.z(dg, Taa);
    dg.prototype.reset = function() {
        this.C[0] = 1732584193;
        this.C[1] = 4023233417;
        this.C[2] = 2562383102;
        this.C[3] = 271733878;
        this.C[4] = 3285377520;
        this.H = this.D = 0
    };
    dg.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.F, d = 0, e = this.L, f = this.D; d < b;) {
                if (0 == f)
                    for (; d <= c;) eg(this, a, d), d += this.F;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.F) {
                            eg(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.F) {
                                eg(this, e);
                                f = 0;
                                break
                            }
            }
            this.D = f;
            this.H += b
        }
    };
    dg.prototype.digest = function() {
        var a = [],
            b = 8 * this.H;
        56 > this.D ? this.update(this.G, 56 - this.D) : this.update(this.G, this.F - (this.D - 56));
        for (var c = this.F - 1; 56 <= c; c--) this.L[c] = b & 255, b /= 256;
        eg(this, this.L);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.C[c] >> d & 255, ++b;
        return a
    };
    var gg = "StopIteration" in g.q ? g.q.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    fg.prototype.next = function() {
        throw gg;
    };
    fg.prototype.bd = function() {
        return this
    };
    g.h = g.lg.prototype;
    g.h.Fb = function() {
        return this.F
    };
    g.h.Gb = g.ba(0);
    g.h.xc = function() {
        g.ng(this);
        return this.C.concat()
    };
    g.h.vd = g.ba(2);
    g.h.equals = function(a, b) {
        if (this === a) return !0;
        if (this.F != a.Fb()) return !1;
        var c = b || Vaa;
        g.ng(this);
        for (var d, e = 0; d = this.C[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    g.h.isEmpty = function() {
        return 0 == this.F
    };
    g.h.clear = function() {
        this.qa = {};
        this.Ge = this.F = this.C.length = 0
    };
    g.h.remove = function(a) {
        return g.mg(this.qa, a) ? (delete this.qa[a], this.F--, this.Ge++, this.C.length > 2 * this.F && g.ng(this), !0) : !1
    };
    g.h.get = function(a, b) {
        return g.mg(this.qa, a) ? this.qa[a] : b
    };
    g.h.set = function(a, b) {
        g.mg(this.qa, a) || (this.F++, this.C.push(a), this.Ge++);
        this.qa[a] = b
    };
    g.h.forEach = function(a, b) {
        for (var c = this.xc(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.h.clone = function() {
        return new g.lg(this)
    };
    g.h.bd = function(a) {
        g.ng(this);
        var b = 0,
            c = this.Ge,
            d = this,
            e = new fg;
        e.next = function() {
            if (c != d.Ge) throw Error("The map has changed since the iterator was created");
            if (b >= d.C.length) throw gg;
            var f = d.C[b++];
            return a ? f : d.qa[f]
        };
        return e
    };
    var tg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Xaa = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    g.z(g.ug, g.F);
    g.h = g.ug.prototype;
    g.h.subscribe = function(a, b, c) {
        var d = this.F[a];
        d || (d = this.F[a] = []);
        var e = this.H;
        this.C[e] = a;
        this.C[e + 1] = b;
        this.C[e + 2] = c;
        this.H = e + 3;
        d.push(e);
        return e
    };
    g.h.qd = function(a) {
        var b = this.C[a];
        if (b) {
            var c = this.F[b];
            0 != this.G ? (this.D.push(a), this.C[a + 1] = g.Ga) : (c && g.Za(c, a), delete this.C[a], delete this.C[a + 1], delete this.C[a + 2])
        }
        return !!b
    };
    g.h.na = function(a, b) {
        var c = this.F[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.L)
                for (e = 0; e < c.length; e++) {
                    var k = c[e];
                    Yaa(this.C[k + 1], this.C[k + 2], d)
                } else {
                    this.G++;
                    try {
                        for (e = 0, f = c.length; e < f; e++) k = c[e], this.C[k + 1].apply(this.C[k + 2], d)
                    } finally {
                        if (this.G--, 0 < this.D.length && 0 == this.G)
                            for (; c = this.D.pop();) this.qd(c)
                    }
                }
            return 0 != e
        }
        return !1
    };
    g.h.clear = function(a) {
        if (a) {
            var b = this.F[a];
            b && ((0, g.E)(b, this.qd, this), delete this.F[a])
        } else this.C.length = 0, this.F = {}
    };
    g.h.Fb = function(a) {
        if (a) {
            var b = this.F[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.F) a += this.Fb(b);
        return a
    };
    g.h.W = function() {
        g.ug.Y.W.call(this);
        this.clear();
        this.D.length = 0
    };
    g.wg.prototype.set = function(a, b) {
        void 0 === b ? this.C.remove(a) : this.C.set(a, g.rg(b))
    };
    g.wg.prototype.get = function(a) {
        try {
            var b = this.C.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    g.wg.prototype.remove = function(a) {
        this.C.remove(a)
    };
    g.z(xg, g.wg);
    xg.prototype.set = function(a, b) {
        xg.Y.set.call(this, a, zg(b))
    };
    xg.prototype.F = function(a) {
        a = xg.Y.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    xg.prototype.get = function(a) {
        if (a = this.F(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };
    g.z(g.Ag, xg);
    g.Ag.prototype.set = function(a, b, c) {
        if (b = zg(b)) {
            if (c) {
                if (c < (0, g.Od)()) {
                    g.Ag.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = (0, g.Od)()
        }
        g.Ag.Y.set.call(this, a, b)
    };
    g.Ag.prototype.F = function(a, b) {
        var c = g.Ag.Y.F.call(this, a);
        if (c)
            if (!b && g.Bg(c)) g.Ag.prototype.remove.call(this, a);
            else return c
    };
    g.z(Cg, Zaa);
    Cg.prototype.Fb = function() {
        var a = 0;
        g.jg(this.bd(!0), function() {
            a++
        });
        return a
    };
    Cg.prototype.clear = function() {
        var a = Uaa(this.bd(!0)),
            b = this;
        (0, g.E)(a, function(c) {
            b.remove(c)
        })
    };
    g.z(g.Dg, Cg);
    g.h = g.Dg.prototype;
    g.h.isAvailable = function() {
        if (!this.C) return !1;
        try {
            return this.C.setItem("__sak", "1"), this.C.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    g.h.set = function(a, b) {
        try {
            this.C.setItem(a, b)
        } catch (c) {
            if (0 == this.C.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    g.h.get = function(a) {
        a = this.C.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    g.h.remove = function(a) {
        this.C.removeItem(a)
    };
    g.h.Fb = function() {
        return this.C.length
    };
    g.h.bd = function(a) {
        var b = 0,
            c = this.C,
            d = new fg;
        d.next = function() {
            if (b >= c.length) throw gg;
            var e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    g.h.clear = function() {
        this.C.clear()
    };
    g.h.key = function(a) {
        return this.C.key(a)
    };
    g.z(g.Eg, g.Dg);
    g.z(Hg, Cg);
    var $aa = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Gg = null;
    g.h = Hg.prototype;
    g.h.isAvailable = function() {
        return !!this.C
    };
    g.h.set = function(a, b) {
        this.C.setAttribute(Ig(a), b);
        Jg(this)
    };
    g.h.get = function(a) {
        a = this.C.getAttribute(Ig(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    g.h.remove = function(a) {
        this.C.removeAttribute(Ig(a));
        Jg(this)
    };
    g.h.Fb = function() {
        return Kg(this).attributes.length
    };
    g.h.bd = function(a) {
        var b = 0,
            c = Kg(this).attributes,
            d = new fg;
        d.next = function() {
            if (b >= c.length) throw gg;
            var e = c[b++];
            if (a) return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    g.h.clear = function() {
        for (var a = Kg(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Jg(this)
    };
    g.z(Lg, Cg);
    Lg.prototype.set = function(a, b) {
        this.F.set(this.C + a, b)
    };
    Lg.prototype.get = function(a) {
        return this.F.get(this.C + a)
    };
    Lg.prototype.remove = function(a) {
        this.F.remove(this.C + a)
    };
    Lg.prototype.bd = function(a) {
        var b = this.F.bd(!0),
            c = this,
            d = new fg;
        d.next = function() {
            for (var e = b.next(); e.substr(0, c.C.length) != c.C;) e = b.next();
            return a ? e.substr(c.C.length) : c.F.get(e)
        };
        return d
    };
    g.Og = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    g.t("yt.config_", g.Og, void 0);
    var cda = 0,
        aba = g.Vn ? "webkit" : g.Un ? "moz" : g.Fg ? "ms" : g.Rn ? "o" : "",
        Yg = g.u("ytDomDomGetNextId") || function() {
            return ++cda
        };
    g.t("ytDomDomGetNextId", Yg, void 0);
    var bba = [];
    var dba = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };
    g.dh.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    g.dh.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    g.dh.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var hh = g.q.ytEventsEventsListeners || {};
    g.t("ytEventsEventsListeners", hh, void 0);
    var jh = g.q.ytEventsEventsCounter || {
        count: 0
    };
    g.t("ytEventsEventsCounter", jh, void 0);
    var kh = g.Sa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    g.ro = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };
    g.so = "Microsoft Internet Explorer" == navigator.appName;
    g.z(g.rh, g.F);
    g.rh.prototype.X = function(a) {
        this.C = new g.Qd(g.fh(a), g.gh(a))
    };
    g.rh.prototype.N = function() {
        if (this.C) {
            var a = g.ro();
            if (0 != this.D) {
                var b = g.Sd(this.L, this.C) / (a - this.D);
                this.F[this.H] = .5 < Math.abs((b - this.G) / this.G) ? 1 : 0;
                for (var c = 0, d = 0; 4 > d; d++) c += this.F[d] || 0;
                3 <= c && this.ac();
                this.G = b
            }
            this.D = a;
            this.L = this.C;
            this.H = (this.H + 1) % 4
        }
    };
    g.rh.prototype.W = function() {
        g.qh(this.M);
        g.lh(this.J)
    };
    g.p(xh, eba);
    xh.prototype.start = function() {
        var a = g.u("yt.scheduler.instance.start");
        a && a()
    };
    xh.prototype.pause = function() {
        var a = g.u("yt.scheduler.instance.pause");
        a && a()
    };
    g.Ia(xh);
    xh.getInstance();
    var Ch = {};
    var dda = g.q.ytPubsubPubsubInstance || new g.ug,
        Fh = g.q.ytPubsubPubsubSubscribedKeys || {},
        Hh = g.q.ytPubsubPubsubTopicToKeys || {},
        Gh = g.q.ytPubsubPubsubIsSynchronous || {};
    g.ug.prototype.subscribe = g.ug.prototype.subscribe;
    g.ug.prototype.unsubscribeByKey = g.ug.prototype.qd;
    g.ug.prototype.publish = g.ug.prototype.na;
    g.ug.prototype.clear = g.ug.prototype.clear;
    g.t("ytPubsubPubsubInstance", dda, void 0);
    g.t("ytPubsubPubsubTopicToKeys", Hh, void 0);
    g.t("ytPubsubPubsubIsSynchronous", Gh, void 0);
    g.t("ytPubsubPubsubSubscribedKeys", Fh, void 0);
    var to;
    to = window;
    g.Vh = to.ytcsi && to.ytcsi.now ? to.ytcsi.now : to.performance && to.performance.timing && to.performance.now && to.performance.timing.navigationStart ? function() {
        return to.performance.timing.navigationStart + to.performance.now()
    } : function() {
        return (new Date).getTime()
    };
    var fba, ai, bi, $h, Nh, Uh, Qh;
    fba = g.Ug("initial_gel_batch_timeout", 1E3);
    ai = Math.pow(2, 16) - 1;
    g.ei = 10;
    bi = null;
    $h = 0;
    Nh = void 0;
    g.Lh = 0;
    g.Mh = 0;
    g.di = 0;
    Uh = !0;
    Qh = g.q.ytLoggingTransportLogPayloadsQueue_ || {};
    g.t("ytLoggingTransportLogPayloadsQueue_", Qh, void 0);
    g.Ph = g.q.ytLoggingTransportGELQueue_ || new Map;
    g.t("ytLoggingTransportGELQueue_", g.Ph, void 0);
    var Yh = g.q.ytLoggingTransportTokensToCttTargetIds_ || {};
    g.t("ytLoggingTransportTokensToCttTargetIds_", Yh, void 0);
    var ci = g.q.ytLoggingGelSequenceIdObj_ || {};
    g.t("ytLoggingGelSequenceIdObj_", ci, void 0);
    g.ni = new function() {
        var a = window.document;
        this.C = window;
        this.F = a
    };
    g.t("yt.ads_.signals_.getAdSignalsString", function(a) {
        return g.hi(si(a))
    }, void 0);
    (0, g.Od)();
    var ui = "XMLHttpRequest" in g.q ? function() {
        return new XMLHttpRequest
    } : null;
    var xi, kba, Bi;
    xi = {
        Authorization: "AUTHORIZATION",
        "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
        "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
        "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
        "X-YouTube-Device": "DEVICE",
        "X-Youtube-Identity-Token": "ID_TOKEN",
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    };
    kba = "app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
    Bi = !1;
    g.uo = Ci;
    g.Ni.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.C) try {
            this.C.set(a, b, (0, g.Od)() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(g.rg(b))
        } catch (f) {
            return
        } else e = escape(b);
        g.Ki(a, e, c, this.F)
    };
    g.Ni.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.C;
        if (!d) try {
            c = this.C.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = g.Li(a)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    g.Ni.prototype.remove = function(a) {
        this.C && this.C.remove(a);
        g.Mi(a, "/", this.F)
    };
    var Oi;
    var Aj = !1,
        Bj;
    g.p(Vi, Error);
    var sba = g.fo || g.go;
    g.p(Wi, Error);
    g.h = bj.prototype;
    g.h.add = function(a, b, c) {
        return this.Vc([a], "readwrite").C(a).add(b, c)
    };
    g.h.clear = function(a) {
        return this.Vc([a], "readwrite").C(a).clear()
    };
    g.h.close = function() {
        this.C.close()
    };
    g.h.count = function(a, b) {
        return this.Vc([a]).C(a).count(b)
    };
    g.h.Qi = function(a, b) {
        var c = this.C.createObjectStore(a, b);
        return new cj(c)
    };
    g.h["delete"] = function(a, b) {
        return this.Vc([a], "readwrite").C(a)["delete"](b)
    };
    g.h.get = function(a, b) {
        return this.Vc([a]).C(a).get(b)
    };
    g.h.Vc = function(a, b) {
        var c = this.C.transaction(a, void 0 === b ? "readonly" : b);
        return new ej(c, a)
    };
    g.h.getVersion = function() {
        return this.C.version
    };
    g.h = cj.prototype;
    g.h.add = function(a, b) {
        var c = b ? this.C.add(a, b) : this.C.add(a);
        return aj(c)
    };
    g.h.clear = function() {
        return aj(this.C.clear()).then(function() {})
    };
    g.h.count = function(a) {
        a = a ? this.C.count(a) : this.C.count();
        return aj(a)
    };
    g.h["delete"] = function(a) {
        return aj(this.C["delete"](a))
    };
    g.h.get = function(a) {
        return aj(this.C.get(a))
    };
    g.h.index = function(a) {
        return new fj(this.C.index(a))
    };
    g.h.getName = function() {
        return this.C.name
    };
    g.h.Kp = function() {
        var a = this.C.openCursor();
        return hj(a)
    };
    ej.prototype.abort = function() {
        this.F.abort();
        return this.done
    };
    ej.prototype.C = function(a) {
        a = this.F.objectStore(a);
        var b = this.D.get(a);
        b || (b = new cj(a), this.D.set(a, b));
        return b
    };
    fj.prototype.count = function(a) {
        a = a ? this.C.count(a) : this.C.count();
        return aj(a)
    };
    fj.prototype.get = function(a) {
        return aj(this.C.get(a))
    };
    fj.prototype.F = function(a, b) {
        var c = a && b ? this.C.openCursor(a, b) : a ? this.C.openCursor(a) : this.C.openCursor();
        return hj(c)
    };
    gj.prototype["continue"] = function(a) {
        a ? this.C["continue"](a) : this.C["continue"]();
        return hj(this.request)
    };
    gj.prototype["delete"] = function() {
        return aj(this.C["delete"]()).then(function() {})
    };
    gj.prototype.getValue = function() {
        return this.C.value
    };
    gj.prototype.update = function(a) {
        return aj(this.C.update(a))
    };
    g.p(ij, bj);
    ij.prototype.Qi = function(a, b) {
        var c = this.C.createObjectStore(a, b);
        return new jj(c)
    };
    ij.prototype["delete"] = function(a, b) {
        return this.Vc([a], "readwrite").C(a)["delete"](b)
    };
    ij.prototype.Vc = function(a, b) {
        var c = this.C.transaction(a, b);
        return new kj(c, a)
    };
    g.p(jj, cj);
    jj.prototype["delete"] = function(a) {
        return aj(this.C["delete"](a))
    };
    jj.prototype.index = function(a) {
        return new lj(this.C.index(a))
    };
    jj.prototype.Kp = function() {
        var a = this.C.openCursor(void 0, void 0);
        return nj(a)
    };
    g.p(kj, ej);
    kj.prototype.C = function(a) {
        a = this.F.objectStore(a);
        var b = this.G.get(a);
        b || (b = new jj(a), this.G.set(a, b));
        return b
    };
    g.p(lj, fj);
    lj.prototype.F = function(a, b) {
        var c = this.C.openCursor(a, b);
        return nj(c)
    };
    g.p(mj, gj);
    mj.prototype["continue"] = function(a) {
        this.C["continue"](a);
        return nj(this.request)
    };
    oj.prototype["continue"] = function(a) {
        this.C["continue"](a);
        return rba(this.request)
    };
    var uj, vo, eda = ["getAll", "getAllKeys", "getKey", "openKeyCursor"],
        fda = ["getAll", "getAllKeys", "getKey", "openKeyCursor"],
        sj = !1;
    var wj;
    g.Hj = {};
    g.Hj.BQ = tj;
    g.Hj.cy = vj;
    g.Hj.jp = function() {
        return void 0 !== vo ? g.Ff(vo) : vj().then(function(a) {
            if (!a) return !1;
            var b = g.ia(eda);
            for (a = b.next(); !a.done; a = b.next())
                if (!IDBObjectStore.prototype[a.value]) return !1;
            b = g.ia(fda);
            for (a = b.next(); !a.done; a = b.next())
                if (!IDBIndex.prototype[a.value]) return !1;
            return IDBObjectStore.prototype.getKey ? !0 : !1
        }).then(function(a) {
            return vo = a
        })
    };
    g.Hj.qJ = !1;
    g.Hj.fO = {
        QQ: function(a) {
            sj = a
        }
    };
    g.Hj.bQ = bj;
    g.Hj.fQ = cj;
    g.Hj.hQ = ej;
    g.Hj.dQ = fj;
    g.Hj.ZP = gj;
    g.Hj.cQ = ij;
    g.Hj.gQ = jj;
    g.Hj.iQ = kj;
    g.Hj.eQ = lj;
    g.Hj.aQ = mj;
    g.Hj.YP = oj;
    g.Hj.AQ = function(a) {
        return a instanceof Wi
    };
    g.Hj.dy = $i;
    g.Hj.gr = function(a, b) {
        b = void 0 === b ? {} : b;
        return Dj("LogsDataBase", function(c) {
            return qj(c.actualName, a, b)
        })
    };
    g.Hj.GQ = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return Dj(a, function(d) {
            var e = c;
            e = void 0 === e ? {} : e;
            return pj(d.actualName, b, e, ij, kj)
        })
    };
    g.Hj.sQ = Ej;
    g.Hj.rQ = function(a, b) {
        b = void 0 === b ? {} : b;
        return wba(a).then(function(c) {
            return Fj(c, b)
        })
    };
    g.Hj.pQ = function(a, b) {
        b = void 0 === b ? {} : b;
        return xba(a).then(function(c) {
            return Fj(c, b)
        })
    };
    g.Hj.qQ = Ej;
    g.Hj.RQ = function(a, b) {
        Aj = !0;
        Bj = {
            userIdentifier: a,
            signedIn: b
        }
    };
    g.Hj.nQ = function() {
        Aj = !0;
        Bj = void 0
    };
    g.Hj.vJ = Vi;
    var Gj;
    var Gba = g.Ug("network_polling_interval", 3E4);
    var Iba = g.Ug("networkless_throttle_timeout") || 100,
        Kba = g.Ug("networkless_retry_attempts") || 1,
        Tj = 0;
    g.p(g.Uj, Error);
    g.Vj.prototype.isReady = function() {
        !this.C && Gi() && (this.C = g.Xh());
        return !!this.C
    };
    var Lba = [{
        Bp: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        Hl: {
            TypeError: [{
                regexp: /Cannot read property '([^']+)' of (null|undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
                groups: ["value", "key"]
            }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, {
                regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
                groups: ["key"]
            }, {
                regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
                groups: ["key", "value"]
            }],
            Error: [{
                regexp: /(Permission denied) to access property "([^']+)"/,
                groups: ["reason", "key"]
            }]
        }
    }, {
        Bp: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        Hl: {
            TypeError: [{
                regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                regexp: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                regexp: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, {
                regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }]
        }
    }];
    var bk = new Set,
        Zj = 0;
    Xf.prototype.flush = function(a) {
        a = void 0 === a ? [] : a;
        if (g.Tg("enable_client_streamz_web")) {
            a = g.ia(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                var c = new Ce;
                c = g.B(c, 1, b.G);
                for (var d = b, e = [], f = 0; f < d.C.length; f++) e.push(d.C[f].pb);
                c = g.B(c, 3, e || []);
                d = [];
                e = [];
                f = g.ia(b.Kf.keys());
                for (var k = f.next(); !k.done; k = f.next()) e.push(k.value.split(","));
                for (f = 0; f < e.length; f++) {
                    k = e[f];
                    var l = b.D;
                    for (var m = b.Pn(k) || [], n = [], r = 0; r < m.length; r++) {
                        var x = m[r];
                        x = x && x.cn;
                        var y = new Ke;
                        switch (l) {
                            case 3:
                                g.vd(y, 1, Je[0], Number(x));
                                break;
                            case 2:
                                g.vd(y, 2, Je[0], Number(x))
                        }
                        n.push(y)
                    }
                    l = n;
                    for (m = 0; m < l.length; m++) {
                        n = l[m];
                        r = new Ge;
                        n = g.zd(r, 2, n);
                        r = k;
                        x = [];
                        y = b;
                        for (var C = [], S = 0; S < y.C.length; S++) C.push(y.C[S].qb);
                        y = C;
                        for (C = 0; C < y.length; C++) {
                            S = y[C];
                            var P = r[C],
                                pa = new Ie;
                            switch (S) {
                                case 3:
                                    g.vd(pa, 1, He[0], String(P));
                                    break;
                                case 2:
                                    g.vd(pa, 2, He[0], Number(P));
                                    break;
                                case 1:
                                    g.vd(pa, 3, He[0], "true" == P)
                            }
                            x.push(pa)
                        }
                        g.Ad(n, 1, x);
                        d.push(n)
                    }
                }
                g.Ad(c, 4, d);
                d = b = new ed;
                e = g.A(c, 1);
                null != e && kd(d, 1, e);
                e = g.A(c, 5);
                null != e && id(d, 5, e);
                e = g.wd(c, De, 2);
                null != e && ld(d, 2, e,
                    Eaa);
                e = g.A(c, 3);
                if (0 < e.length && null != e)
                    for (f = 0; f < e.length; f++) kd(d, 3, e[f]);
                e = g.A(c, 6);
                if (0 < e.length && null != e)
                    for (f = 0; f < e.length; f++) id(d, 6, e[f]);
                e = g.yd(c, Ge, 4);
                0 < e.length && md(d, 4, e, Haa);
                c = new Uint8Array(b.F + b.C.length());
                e = b.D;
                f = e.length;
                for (k = d = 0; k < f; k++) l = e[k], c.set(l, d), d += l.length;
                e = b.C.end();
                c.set(e, d);
                b.D = [c];
                b = {
                    serializedIncrementBatch: g.cd(c)
                };
                g.Wj("streamzIncremented", b)
            }
        }
    };
    var ck;
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/app_boots", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/app_boots_start", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/component_registration", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/component_registration_start", {
            qb: 3,
            pb: "browser"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/network_request", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/network_request_start", {
            qb: 3,
            pb: "browser"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/page_navigation", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/page_navigation_start", {
            qb: 3,
            pb: "browser"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/service_worker_registration", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/service_worker_registration_start", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/yt_initial_data_present", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/yt_initial_data_present_start", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/yt_guide_data_present", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        }, {
            qb: 3,
            pb: "status"
        })
    }(g.dk());
    new function(a) {
        this.C = a;
        this.C.C("/client_streamz/youtube/web_client_sli/youtube_web/yt_guide_data_present_start", {
            qb: 3,
            pb: "browser"
        }, {
            qb: 3,
            pb: "canary_state"
        })
    }(g.dk());
    var fk = {};
    var Mba = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        Nba = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    g.jk.prototype.initialize = function(a, b, c, d, e, f) {
        var k = this;
        f = void 0 === f ? !1 : f;
        b ? (this.F = !0, g.hk(b, function() {
            k.F = !1;
            window.botguard ? kk(k, c, d, f) : (g.ik(b), g.Yj(new g.Uj("Unable to load Botguard", "from " + b)))
        })) : a && (eval(a), window.botguard ? kk(this, c, d, f) : g.Yj(Error("Unable to load Botguard from JS")))
    };
    g.jk.prototype.Od = function() {
        return !!this.C
    };
    g.jk.prototype.dispose = function() {
        this.C = null
    };
    var mk = new g.jk;
    nk.prototype.then = function(a, b, c) {
        return this.D ? this.D.then(a, b, c) : 1 === this.F && a ? (a = a.call(c, this.C), g.zf(a) ? a : g.pk(a)) : 2 === this.F && b ? (a = b.call(c, this.C), g.zf(a) ? a : g.ok(a)) : this
    };
    nk.prototype.getValue = function() {
        return this.C
    };
    g.xf(nk);
    g.qk = g.u("ytglobal.prefsUserPrefsPrefs_") || {};
    g.t("ytglobal.prefsUserPrefsPrefs_", g.qk, void 0);
    g.h = g.rk.prototype;
    g.h.get = function(a, b) {
        tk(a);
        sk(a);
        var c = void 0 !== g.qk[a] ? g.qk[a].toString() : null;
        return null != c ? c : b ? b : ""
    };
    g.h.set = function(a, b) {
        tk(a);
        sk(a);
        if (null == b) throw Error("ExpectedNotNull");
        g.qk[a] = b.toString()
    };
    g.h.remove = function(a) {
        tk(a);
        sk(a);
        delete g.qk[a]
    };
    g.h.save = function() {
        g.Ki(this.C, this.dump(), 63072E3)
    };
    g.h.clear = function() {
        g.fb(g.qk)
    };
    g.h.dump = function() {
        var a = [],
            b;
        for (b in g.qk) a.push(b + "=" + encodeURIComponent(String(g.qk[b])));
        return a.join("&")
    };
    g.Ia(g.rk);
    g.gda = new Map([
        ["dark", "USER_INTERFACE_THEME_DARK"],
        ["light", "USER_INTERFACE_THEME_LIGHT"]
    ]);
    g.p(uk, g.F);
    uk.prototype.Va = function(a) {
        for (var b = 0; b < this.C.length; b++)
            if (this.C[b] == a) {
                this.C.splice(b, 1);
                a.target.removeEventListener(a.name, a.callback);
                break
            }
    };
    uk.prototype.W = function() {
        for (; this.C.length;) {
            var a = this.C.pop();
            a.target.removeEventListener(a.name, a.callback)
        }
        g.F.prototype.W.call(this)
    };
    vk.prototype.clone = function() {
        var a = new vk,
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "object" == g.Ja(c) ? a[b] = g.jb(c) : a[b] = c
            } return a
    };
    var xk = (0, g.Od)().toString();
    var zk = g.q.ytLoggingDocDocumentNonce_ || yk();
    g.t("ytLoggingDocDocumentNonce_", zk, void 0);
    g.Bk.prototype.getAsJson = function() {
        var a = {};
        void 0 !== this.C.trackingParams ? a.trackingParams = this.C.trackingParams : (a.veType = this.C.veType, void 0 !== this.C.veCounter && (a.veCounter = this.C.veCounter), void 0 !== this.C.elementIndex && (a.elementIndex = this.C.elementIndex));
        void 0 !== this.C.dataElement && (a.dataElement = this.C.dataElement.getAsJson());
        void 0 !== this.C.youtubeData && (a.youtubeData = this.C.youtubeData);
        return a
    };
    g.Bk.prototype.toString = function() {
        return JSON.stringify(this.getAsJson())
    };
    g.Bk.prototype.isClientVe = function() {
        return !this.C.trackingParams && !!this.C.veType
    };
    g.t("yt_logging_screen.getRootVeType", Ek, void 0);
    g.t("yt_logging_screen.getCurrentCsn", g.Hk, void 0);
    g.t("yt_logging_screen.getCttAuthInfo", g.Ik, void 0);
    g.t("yt_logging_screen.setCurrentScreen", g.Kk, void 0);
    g.Mk.prototype.toString = function() {
        return this.topic
    };
    var hda = g.u("ytPubsub2Pubsub2Instance") || new g.ug;
    g.ug.prototype.subscribe = g.ug.prototype.subscribe;
    g.ug.prototype.unsubscribeByKey = g.ug.prototype.qd;
    g.ug.prototype.publish = g.ug.prototype.na;
    g.ug.prototype.clear = g.ug.prototype.clear;
    g.t("ytPubsub2Pubsub2Instance", hda, void 0);
    var Pk = g.u("ytPubsub2Pubsub2SubscribedKeys") || {};
    g.t("ytPubsub2Pubsub2SubscribedKeys", Pk, void 0);
    var Rk = g.u("ytPubsub2Pubsub2TopicToKeys") || {};
    g.t("ytPubsub2Pubsub2TopicToKeys", Rk, void 0);
    var Qk = g.u("ytPubsub2Pubsub2IsAsync") || {};
    g.t("ytPubsub2Pubsub2IsAsync", Qk, void 0);
    g.t("ytPubsub2Pubsub2SkipSubKey", null, void 0);
    g.p(Uk, g.Lk);
    var Tba = new g.Mk("screen-created", Uk),
        Vk = [],
        Wk = 0;
    var bl, $k;
    bl = 0;
    g.al = null;
    $k = null;
    g.h = g.dl.prototype;
    g.h.yF = function() {
        this.Od() || this.init()
    };
    g.h.enable = function() {
        this.C = 1;
        (0, g.E)("string" == typeof this.page ? [this.page] : this.page, function(a) {
            a && (this.subscribe("init-" + a, this.yF, this), this.subscribe("dispose-" + a, this.dispose, this), g.H("PAGE_NAME") == a && g.el(this))
        }, this)
    };
    g.h.init = function() {
        g.vh(this.F);
        this.C = 2;
        this.L && this.L()
    };
    g.h.Od = function() {
        return 2 == this.C
    };
    g.h.dispose = function() {
        this.C = 3;
        g.vh(this.F);
        this.H && this.H()
    };
    g.h.disable = function() {
        this.C = 4;
        this.clear();
        try {
            this.dispose()
        } catch (a) {
            g.ah(a)
        }
    };
    g.h.subscribe = function(a, b, c) {
        a = g.Ih(a, b, c);
        this.G.push(a);
        return a
    };
    g.h.clear = function() {
        g.Jh(this.G);
        this.G = []
    };
    var fl = g.u("yt.modules.registry_") || {};
    g.t("yt.modules.registry_", fl, void 0);
    g.il = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    g.t("yt.msgs_", g.il, void 0);
    var ol = {},
        Xba = 0;
    var Yba = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    g.p(Cl, g.F);
    g.h = Cl.prototype;
    g.h.getId = function() {
        return this.ha
    };
    g.h.loadNewVideoConfig = function(a) {
        if (!this.ub()) {
            this.aa && (g.ph(this.aa), this.aa = 0);
            this.rb = a = g.wk(a);
            this.C = a.clone();
            Al(this);
            this.Ga || (this.Ga = Ml(this, this.C.args.jsapicallback || "onYouTubePlayerReady"));
            this.C.args.jsapicallback = null;
            (a = this.C.attrs.width) && g.pe(this.L, Number(a) || a);
            if (a = this.C.attrs.height) this.L.style.height = g.oe(Number(a) || a, !0);
            Bl(this);
            this.N && Dl(this)
        }
    };
    g.h.Tu = function() {
        return this.rb
    };
    g.h.Ly = function() {
        return this.N
    };
    g.h.Eh = function(a, b) {
        var c = this,
            d = Ml(this, b);
        if (d) {
            if (!g.Wa(this.mf, a) && !this.G[a]) {
                var e = $ba(this, a);
                this.M && this.M(a, e)
            }
            this.X.subscribe(a, d);
            "onReady" == a && this.N && g.nh(function() {
                d(c.api)
            }, 0)
        }
    };
    g.h.nF = function(a, b) {
        if (!this.ub()) {
            var c = Ml(this, b);
            c && g.vg(this.X, a, c)
        }
    };
    g.h.Gt = function(a) {
        g.J("a11y-announce", a)
    };
    g.h.JC = function(a) {
        g.J("WATCH_LATER_VIDEO_ADDED", a)
    };
    g.h.KC = function(a) {
        g.J("WATCH_LATER_VIDEO_REMOVED", a)
    };
    g.h.gv = function() {
        return this.la || (El(this) ? "html5" : null)
    };
    g.h.Xu = function() {
        return this.mb
    };
    g.h.cancel = function() {
        if (this.J) {
            var a = Fl(this),
                b = this.J;
            a = g.gk(a);
            spf.script.ignore(a, b)
        }
        g.ph(this.yb);
        this.T = !1
    };
    g.h.W = function() {
        Il(this);
        if (this.H && this.C && this.H.destroy) try {
            this.H.destroy()
        } catch (b) {
            g.ah(b)
        }
        this.kb = null;
        for (var a in this.G) g.q[this.G[a]] = null;
        this.rb = this.C = this.api = null;
        delete this.Za;
        delete this.L;
        g.F.prototype.W.call(this)
    };
    g.Ol = {};
    g.Nl = "player_uid_" + (1E9 * Math.random() >>> 0);
    g.wo = window.performance && window.performance.memory;
    g.tn = {};
    g.p(Sl, g.Lk);
    g.p(Tl, g.Lk);
    var cca = new g.Mk("aft-recorded", Sl),
        lca = new g.Mk("timing-sent", Tl);
    var xo = window,
        Wl = xo.performance || xo.mozPerformance || xo.msPerformance || xo.webkitPerformance || new bca;
    var gm = !1,
        Bm = {
            'script[name="scheduler/scheduler"]': "sj",
            'script[name="player/base"]': "pj",
            'link[rel="stylesheet"][name="www-player"]': "pc",
            'link[rel="stylesheet"][name="player/www-player"]': "pc",
            'script[name="desktop_polymer/desktop_polymer"]': "dpj",
            'link[rel="import"][name="desktop_polymer"]': "dph",
            'script[name="mobile-c3/mobile-c3"]': "mcj",
            'link[rel="stylesheet"][name="mobile-c3"]': "mcc",
            'script[name="player-plasma-ias-phone/base"]': "mcppj",
            'script[name="player-plasma-ias-tablet/base"]': "mcptj",
            'link[rel="stylesheet"][name="mobile-polymer-player-ias"]': "mcpc",
            'script[name="mobile_blazer_core_mod"]': "mbcj",
            'link[rel="stylesheet"][name="mobile_blazer_css"]': "mbc",
            'script[name="mobile_blazer_logged_in_users_mod"]': "mbliuj",
            'script[name="mobile_blazer_logged_out_users_mod"]': "mblouj",
            'script[name="mobile_blazer_noncore_mod"]': "mbnj",
            "#player_css": "mbpc",
            'script[name="mobile_blazer_desktopplayer_mod"]': "mbpj",
            'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]': "mbtc",
            'script[name="mobile_blazer_watch_mod"]': "mbwj"
        },
        gca = (0, g.v)(Wl.clearResourceTimings || Wl.webkitClearResourceTimings || Wl.mozClearResourceTimings || Wl.msClearResourceTimings || Wl.oClearResourceTimings || g.Ga, Wl);
    var nm = g.q.ytLoggingLatencyUsageStats_ || {};
    g.t("ytLoggingLatencyUsageStats_", nm, void 0);
    lm.prototype.tick = function(a, b, c) {
        om(this, "tick_" + a + "_" + b) || g.Wj("latencyActionTicked", {
            tickName: a,
            clientActionNonce: b
        }, {
            timestamp: c
        })
    };
    lm.prototype.info = function(a, b) {
        var c = Object.keys(a).join("");
        om(this, "info_" + c + "_" + b) || (c = Object.assign({}, a), c.clientActionNonce = b, g.Wj("latencyActionInfo", c))
    };
    lm.prototype.span = function(a, b) {
        var c = Object.keys(a).join("");
        om(this, "span_" + c + "_" + b) || (a.clientActionNonce = b, g.Wj("latencyActionSpan", a))
    };
    var yo = {},
        Cm = (yo.ad_to_ad = "LATENCY_ACTION_AD_TO_AD", yo.ad_to_video = "LATENCY_ACTION_AD_TO_VIDEO", yo.app_startup = "LATENCY_ACTION_APP_STARTUP", yo["artist.analytics"] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS", yo["artist.events"] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS", yo["artist.presskit"] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE", yo.browse = "LATENCY_ACTION_BROWSE", yo.channels = "LATENCY_ACTION_CHANNELS", yo.creator_channel_dashboard = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD", yo["channel.analytics"] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
            yo["channel.comments"] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS", yo["channel.content"] = "LATENCY_ACTION_CREATOR_POST_LIST", yo["channel.copyright"] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT", yo["channel.editing"] = "LATENCY_ACTION_CREATOR_CHANNEL_EDITING", yo["channel.monetization"] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION", yo["channel.music"] = "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC", yo["channel.translations"] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS", yo["channel.videos"] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
            yo["channel.live_streaming"] = "LATENCY_ACTION_CREATOR_LIVE_STREAMING", yo.chips = "LATENCY_ACTION_CHIPS", yo["dialog.copyright_strikes"] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES", yo["dialog.uploads"] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS", yo.embed = "LATENCY_ACTION_EMBED", yo.home = "LATENCY_ACTION_HOME", yo.library = "LATENCY_ACTION_LIBRARY", yo.live = "LATENCY_ACTION_LIVE", yo.live_pagination = "LATENCY_ACTION_LIVE_PAGINATION", yo.onboarding = "LATENCY_ACTION_KIDS_ONBOARDING", yo.parent_profile_settings = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
            yo.parent_tools_collection = "LATENCY_ACTION_PARENT_TOOLS_COLLECTION", yo.parent_tools_dashboard = "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD", yo["post.comments"] = "LATENCY_ACTION_CREATOR_POST_COMMENTS", yo["post.edit"] = "LATENCY_ACTION_CREATOR_POST_EDIT", yo.prebuffer = "LATENCY_ACTION_PREBUFFER", yo.prefetch = "LATENCY_ACTION_PREFETCH", yo.profile_settings = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS", yo.profile_switcher = "LATENCY_ACTION_KIDS_PROFILE_SWITCHER", yo.results = "LATENCY_ACTION_RESULTS", yo.search_ui = "LATENCY_ACTION_SEARCH_UI",
            yo.search_zero_state = "LATENCY_ACTION_SEARCH_ZERO_STATE", yo.secret_code = "LATENCY_ACTION_KIDS_SECRET_CODE", yo.settings = "LATENCY_ACTION_SETTINGS", yo.tenx = "LATENCY_ACTION_TENX", yo.video_to_ad = "LATENCY_ACTION_VIDEO_TO_AD", yo.watch = "LATENCY_ACTION_WATCH", yo.watch_it_again = "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN", yo["watch,watch7"] = "LATENCY_ACTION_WATCH", yo["watch,watch7_html5"] = "LATENCY_ACTION_WATCH", yo["watch,watch7ad"] = "LATENCY_ACTION_WATCH", yo["watch,watch7ad_html5"] = "LATENCY_ACTION_WATCH", yo.wn_comments =
            "LATENCY_ACTION_LOAD_COMMENTS", yo.ww_rqs = "LATENCY_ACTION_WHO_IS_WATCHING", yo["video.analytics"] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS", yo["video.comments"] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS", yo["video.edit"] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT", yo["video.translations"] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS", yo["video.video_editor"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR", yo["video.video_editor_async"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC", yo["video.monetization"] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
            yo.voice_assistant = "LATENCY_ACTION_VOICE_ASSISTANT", yo.cast_load_by_entity_to_watch = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH", yo),
        zo = {},
        sm = (zo.ad_allowed = "adTypesAllowed", zo.yt_abt = "adBreakType", zo.ad_cpn = "adClientPlaybackNonce", zo.ad_docid = "adVideoId", zo.yt_ad_an = "adNetworks", zo.ad_at = "adType", zo.browse_id = "browseId", zo.p = "httpProtocol", zo.t = "transportProtocol", zo.cpn = "clientPlaybackNonce", zo.ccs = "creatorInfo.creatorCanaryState", zo.cseg = "creatorInfo.creatorSegment", zo.csn = "clientScreenNonce",
            zo.docid = "videoId", zo.GetHome_rid = "requestIds", zo.GetSearch_rid = "requestIds", zo.GetPlayer_rid = "requestIds", zo.GetWatchNext_rid = "requestIds", zo.GetBrowse_rid = "requestIds", zo.GetLibrary_rid = "requestIds", zo.is_continuation = "isContinuation", zo.is_nav = "isNavigation", zo.b_p = "kabukiInfo.browseParams", zo.is_prefetch = "kabukiInfo.isPrefetch", zo.is_secondary_nav = "kabukiInfo.isSecondaryNav", zo.prev_browse_id = "kabukiInfo.prevBrowseId", zo.query_source = "kabukiInfo.querySource", zo.voz_type = "kabukiInfo.vozType", zo.yt_lt =
            "loadType", zo.mver = "creatorInfo.measurementVersion", zo.yt_ad = "isMonetized", zo.nr = "webInfo.navigationReason", zo.nrsu = "navigationRequestedSameUrl", zo.ncnp = "webInfo.nonPreloadedNodeCount", zo.pnt = "performanceNavigationTiming", zo.prt = "playbackRequiresTap", zo.plt = "playerInfo.playbackType", zo.pis = "playerInfo.playerInitializedState", zo.paused = "playerInfo.isPausedOnLoad", zo.yt_pt = "playerType", zo.fmt = "playerInfo.itag", zo.yt_pl = "watchInfo.isPlaylist", zo.yt_pre = "playerInfo.preloadType", zo.yt_ad_pr = "prerollAllowed",
            zo.pa = "previousAction", zo.yt_red = "isRedSubscriber", zo.rce = "mwebInfo.responseContentEncoding", zo.scrh = "screenHeight", zo.scrw = "screenWidth", zo.st = "serverTimeMs", zo.ssdm = "shellStartupDurationMs", zo.aq = "tvInfo.appQuality", zo.br_trs = "tvInfo.bedrockTriggerState", zo.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", zo.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", zo.label = "tvInfo.label", zo.is_mdx = "tvInfo.isMdx", zo.preloaded = "tvInfo.isPreloaded", zo.upg_player_vis = "playerInfo.visibilityState",
            zo.query = "unpluggedInfo.query", zo.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", zo.yt_vst = "videoStreamType", zo.vph = "viewportHeight", zo.vpw = "viewportWidth", zo.yt_vis = "isVisible", zo.rcl = "mwebInfo.responseContentLength", zo.GetSettings_rid = "requestIds", zo.GetTrending_rid = "requestIds", zo.GetMusicSearchSuggestions_rid = "requestIds", zo.REQUEST_ID = "requestIds", zo),
        eca = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        Ao = {},
        tm = (Ao.ccs = "CANARY_STATE_", Ao.mver = "MEASUREMENT_VERSION_", Ao.pis = "PLAYER_INITIALIZED_STATE_", Ao.yt_pt = "LATENCY_PLAYER_", Ao.pa = "LATENCY_ACTION_", Ao.yt_vst = "VIDEO_STREAM_TYPE_", Ao),
        fca = "all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
    if (g.Tg("overwrite_polyfill_on_logging_lib_loaded")) {
        var Bo = window;
        Bo.ytcsi && (Bo.ytcsi.info = xm, Bo.ytcsi.tick = g.ym)
    };
    var Um = 0,
        Qm = [],
        Tm = [],
        Nm = 0,
        Rm = {},
        Sm = {},
        Om = new g.cg(sca, 1E3);
    var uca = ["server_prefetched_vast", "vmap"];
    var Xm;
    var an = null,
        dn = [];
    var hn, zn, yn, kn, jn, Aca, Dca, Bca, Cca, un;
    kn = 0;
    jn = 0;
    Aca = [900, 60, "waiting"];
    Dca = [500, 99, "waiting"];
    Bca = [300, 60, "waiting"];
    Cca = [400, 99, "waiting"];
    un = [300, 101, "done"];
    window.yt = window.yt || {};
    g.t("yt.setConfig", g.Pg, void 0);
    g.t("yt.pushConfigArray", Qg, void 0);
    g.t("yt.getConfig", g.H, void 0);
    g.t("yt.config.set", g.Pg, void 0);
    g.t("yt.config.pushArray", Qg, void 0);
    g.t("yt.config.get", g.H, void 0);
    g.t("yt.hasMsg", g.kl, void 0);
    g.t("yt.setMsg", jl, void 0);
    g.t("yt.setGoogMsg", ll, void 0);
    g.t("yt.msgs.has", g.kl, void 0);
    g.t("yt.msgs.set", jl, void 0);
    g.t("yt.msgs.setGoog", ll, void 0);
    g.t("yt.pubsub.publish", g.J, void 0);
    g.t("yt.pubsub.subscribe", g.Ih, void 0);
    g.t("ytcsi.tick", g.ym, void 0);
    g.p(An, g.dl);
    An.prototype.enable = function() {
        window.onload = yca;
        window.onunload = zca;
        window.onerror = Hca;
        var a = window.ytspf || {};
        a.enabled ? (window.addEventListener && (window.addEventListener("spfclick", fn), window.addEventListener("spfhistory", gn), window.addEventListener("spfrequest", mn), window.addEventListener("spfpartprocess", pn), window.addEventListener("spfpartdone", qn), window.addEventListener("spfprocess", rn), window.addEventListener("spfdone", vn), window.addEventListener("spferror", wn), window.addEventListener("spfreload",
            xn), window.addEventListener("spfjsbeforeunload", Bn)), a.config = a.config || {}, window.ytdepmap ? spf.script.ready("spf", function() {
            a.enabled = spf.init(a.config)
        }) : a.enabled = spf.init(a.config), this.subscribe("init", Fca), this.subscribe("dispose", Gca)) : spf.dispose();
        this.subscribe("init", this.init, this);
        this.subscribe("dispose", this.dispose, this)
    };
    An.prototype.init = function() {
        g.dl.prototype.init.call(this);
        (window.ytspf || {}).enabled || spf.dispose();
        var a = window.ytPageFrameLoaded || !1;
        if (!a && g.H("PAGEFRAME_JS")) {
            var b = g.H("PAGEFRAME_JS", void 0);
            var c = function() {
                var e = g.u("ytbin.www.pageframe.setup");
                e && (window.ytPageFrameLoaded = !0, e())
            }
        } else a && (a = g.u("yt.www.masthead.loadSearchbox")) && a();
        a = g.H("JS_COMMON_MODULE");
        var d = g.H("JS_PAGE_MODULES");
        d || (d = [a]);
        a = g.H("JS_DELAY_LOAD", 0);
        0 < a ? (g.ph(this.D), this.D = g.nh(function() {
            b && g.hk(b, c);
            spf.script.require(d)
        }, a)) : (b && g.hk(b, c), spf.script.require(d));
        g.t("yt.abuse.player.botguardInitialized", Pba, void 0);
        g.t("yt.abuse.player.invokeBotguard", Qba, void 0);
        g.t("yt.abuse.dclkstatus.checkDclkStatus", Oba, void 0);
        g.t("yt.player.exports.navigate", g.yl, void 0);
        g.t("yt.util.activity.init", g.Bh, void 0);
        g.t("yt.util.activity.getTimeSinceActive", g.Dh, void 0);
        g.t("yt.util.activity.setTimestamp", g.zh, void 0);
        $m(g.u("ytplayer.config"));
        g.u("ytspf.enabled") && wca();
        kca()
    };
    An.prototype.dispose = function() {
        g.ph(this.D);
        var a = g.u("ytbin.www.pageframe.cancelSetup");
        a && a();
        g.qh(Xm);
        if (a = g.Zm()) a.removeEventListener("onReady", Ym), a.removeEventListener("onStateChange", Ym);
        $l(!1);
        (a = (a = (a = document.getElementById("ticker")) && "TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT" == g.L(a, "trigger-condition") ? a : null) ? a.querySelector(".yt-uix-button-alert-info") : null) && g.mh(a);
        g.dl.prototype.dispose.call(this)
    };
    An.prototype.disable = function() {
        g.dl.prototype.disable.call(this);
        window.removeEventListener && (window.removeEventListener("spfclick", fn), window.removeEventListener("spfhistory", gn), window.removeEventListener("spfrequest", mn), window.removeEventListener("spfpartprocess", pn), window.removeEventListener("spfpartdone", qn), window.removeEventListener("spfprocess", rn), window.removeEventListener("spfdone", vn), window.removeEventListener("spferror", wn), window.removeEventListener("spfreload", xn), window.removeEventListener("spfjsbeforeunload",
            Bn));
        window.onload = null;
        window.onunload = null;
        window.onerror = null
    };
    g.hl(new An);
})(_yt_www);