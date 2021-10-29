var _yt_www = {};
(function(g) {
    var window = this;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ca, aaa, da, ha, ia, pa, qa, sa, ta, ua, eaa, faa, gaa, zb, Tb, Ub, kaa, Bc, maa, Fc, Mc, naa, Kc, Rc, Sc, Tc, Yc, Zc, paa, raa, Md, saa, taa, Nd, Od, Pd, uaa, waa, Xd, Zd, $d, de, xaa, ge, ne, me, zaa, qe, re, se, te, Baa, ve, we, Ae, Caa, Be, Ie, Ke, Qe, Ue, Oe, Le, Eaa, Te, Re, Se, We, Daa, Faa, af, bf, gf, Gaa, Haa, Iaa, nf, pf, Kaa, uf, vf, wf, Laa, Af, Ff, Gf, Hf, If, Jf, Lf, Of, Pf, Qf, Uf, Rf, Oaa, Yf, Paa, dg, Vaa, vg, Uaa, Mg, Zaa, dh, Zg, gh, qh, yh, $aa, aba, cba, Eh, dba, Fh, Gh, eba, Lh, Jh, Hh, fba, Nh, Oh, Ph, Qh, gba, Wh, Xh, ei, hba, iba, jba, hi, ki, li, oi, ti, ui, vi, xi, kba, nba, Di, Ki, lba, Si, $i, cj, ej, oba, gj,
        pba, lj, kj, nj, jj, mj, vj, tj, wj, zj, uj, xj, Aj, sba, Dj, sj, Ej, tba, Bj, Cj, yj, uba, Kj, vba, Oj, Pj, wba, Rj, Uj, Vj, Tj, Wj, Xj, Yj, ak, bk, Qj, ck, Zj, ek, yba, fk, hk, gk, ik, jk, lk, mk, ok, rk, nk, sk, uk, tk, vk, Fba, xk, Ck, Dk, yk, Cba, Ek, Fk, Dba, Eba, Mba, Lba, Kba, Kk, Jba, Hba, Iba, Nba, Oba, Pba, Qba, Wk, Uk, Yk, Rba, Zk, al, Sba, Tba, bl, cl, hl, kl, ll, ml, ql, rl, sl, Zba, $ba, il, gl, Yba, jl, wl, yl, vl, aca, zl, xl, bca, fca, cca, ica, eca, dca, gca, hca, kca, Cl, jca, Al, lca, nca, pca, oca, mca, Dl, El, Fl, fa, ea, caa, va, Fa, daa;
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
        a = ["object" == typeof globalThis && globalThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    da = function() {
        da = function() {};
        ea.Symbol || (ea.Symbol = baa)
    };
    ha = function(a, b) {
        this.C = a;
        fa(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    g.ja = function() {
        da();
        var a = ea.Symbol.iterator;
        a || (a = ea.Symbol.iterator = ea.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && fa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ia(ca(this))
            }
        });
        g.ja = function() {}
    };
    ia = function(a) {
        g.ja();
        a = {
            next: a
        };
        a[ea.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    g.ka = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ca(a)
        }
    };
    g.la = function(a) {
        if (!(a instanceof Array)) {
            a = g.ka(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    g.n = function(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.V = b.prototype
    };
    pa = function(a, b) {
        if (b) {
            for (var c = ea, d = a.split("."), e = 0; e < d.length - 1; e++) {
                var f = d[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            e = c[d];
            f = b(e);
            f != e && null != f && fa(c, d, {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
    };
    qa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    sa = function(a, b) {
        g.ja();
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
    ta = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    g.r = function(a, b, c) {
        a = a.split(".");
        c = c || g.q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    g.wa = function(a) {
        if (a && a != g.q) return ua(a.document);
        null === va && (va = ua(g.q.document));
        return va
    };
    ua = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && caa.test(a) ? a : ""
    };
    g.u = function(a, b) {
        for (var c = a.split("."), d = b || g.q, e = 0; e < c.length; e++)
            if (d = d[c[e]], null == d) return null;
        return d
    };
    g.xa = function() {};
    g.ya = function(a) {
        a.Dc = void 0;
        a.getInstance = function() {
            return a.Dc ? a.Dc : a.Dc = new a
        }
    };
    g.za = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    g.Aa = function(a) {
        return "array" == g.za(a)
    };
    g.Ca = function(a) {
        var b = g.za(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    g.Da = function(a) {
        return "function" == g.za(a)
    };
    g.Ea = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    g.Ga = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa] || (a[Fa] = ++daa)
    };
    eaa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    faa = function(a, b, c) {
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
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.v = eaa : g.v = faa;
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
    g.x = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.V = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    gaa = function(a, b) {
        if (!a || /[?&]dsh=1(&|$)/.test(a)) return null;
        if (/[?&]ae=1(&|$)/.test(a)) {
            var c = /[?&]adurl=([^&]+)/.exec(a);
            if (!c) return null;
            var d = b ? c.index : a.length;
            try {
                return {
                    Pt: a.slice(0, d) + "&act=1" + a.slice(d),
                    Mu: decodeURIComponent(c[1])
                }
            } catch (f) {
                return null
            }
        }
        if (/[?&]ae=2(&|$)/.test(a)) {
            c = a;
            d = "";
            if (b) {
                var e = a.indexOf("&adurl=");
                0 < e && (c = a.slice(0, e), d = a.slice(e))
            }
            return {
                Pt: c + "&act=1" + d,
                Mu: c + "&dct=1" + d
            }
        }
        return null
    };
    g.Ia = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, g.Ia);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    g.Ka = function(a, b, c) {
        b = g.Ja(a, b, c);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    g.Ja = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    g.Ma = function(a, b) {
        return 0 <= (0, g.La)(a, b)
    };
    g.Na = function(a) {
        return 0 == a.length
    };
    g.Pa = function(a, b) {
        var c = (0, g.La)(a, b),
            d;
        (d = 0 <= c) && g.Oa(a, c);
        return d
    };
    g.Oa = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    g.Qa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    g.Ra = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (g.Ca(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var k = 0; k < f; k++) a[e + k] = d[k]
            } else a.push(d)
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
    g.Ta = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    g.Ua = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    g.Va = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    };
    g.Wa = function(a) {
        for (var b in a) return !1;
        return !0
    };
    g.Xa = function(a, b) {
        b in a && delete a[b]
    };
    g.Ya = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    };
    g.Za = function(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    };
    g.$a = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    g.ab = function(a) {
        var b = g.za(a);
        if ("object" == b || "array" == b) {
            if (g.Da(a.clone)) return a.clone();
            b = "array" == b ? [] : {};
            for (var c in a) b[c] = g.ab(a[c]);
            return b
        }
        return a
    };
    g.cb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < bb.length; f++) c = bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    g.fb = function(a, b) {
        this.C = a === db && b || "";
        this.F = eb
    };
    g.gb = function(a) {
        return a instanceof g.fb && a.constructor === g.fb && a.F === eb ? a.C : "type_error:Const"
    };
    g.hb = function(a) {
        return new g.fb(db, a)
    };
    g.kb = function(a, b) {
        this.F = a === g.ib && b || "";
        this.D = jb
    };
    g.lb = function(a) {
        if (a instanceof g.kb && a.constructor === g.kb && a.D === jb) return a.F;
        g.za(a);
        return "type_error:TrustedResourceUrl"
    };
    g.mb = function(a) {
        return new g.kb(g.ib, g.gb(a))
    };
    g.nb = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    g.ob = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    g.pb = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    g.wb = function(a, b) {
        if (b) a = a.replace(qb, "&amp;").replace(rb, "&lt;").replace(sb, "&gt;").replace(tb, "&quot;").replace(ub, "&#39;").replace(vb, "&#0;");
        else {
            if (!haa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(rb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(tb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ub, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(vb, "&#0;"))
        }
        return a
    };
    g.xb = function(a, b) {
        return -1 != a.indexOf(b)
    };
    g.Ab = function(a, b) {
        for (var c = 0, d = (0, g.yb)(String(a)).split("."), e = (0, g.yb)(String(b)).split("."), f = Math.max(d.length, e.length), k = 0; 0 == c && k < f; k++) {
            var l = d[k] || "",
                m = e[k] || "";
            do {
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                if (0 == l[0].length && 0 == m[0].length) break;
                c = zb(0 == l[1].length ? 0 : parseInt(l[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || zb(0 == l[2].length, 0 == m[2].length) || zb(l[2], m[2]);
                l = l[3];
                m = m[3]
            } while (0 == c)
        }
        return c
    };
    zb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.Db = function(a, b) {
        this.F = a === Bb && b || "";
        this.D = Cb
    };
    g.Eb = function(a) {
        if (a instanceof g.Db && a.constructor === g.Db && a.D === Cb) return a.F;
        g.za(a);
        return "type_error:SafeUrl"
    };
    g.Gb = function(a) {
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(iaa);
        b = b && jaa.test(b[1]);
        return g.Fb(b ? a : "about:invalid#zClosurez")
    };
    g.Ib = function(a) {
        if (a instanceof g.Db) return a;
        a = "object" == typeof a && a.Md ? a.Uc() : String(a);
        Hb.test(a) || (a = "about:invalid#zClosurez");
        return g.Fb(a)
    };
    g.Jb = function(a, b) {
        if (a instanceof g.Db) return a;
        a = "object" == typeof a && a.Md ? a.Uc() : String(a);
        if (b && /^data:/i.test(a)) {
            var c = g.Gb(a);
            if (c.Uc() == a) return c
        }
        Hb.test(a) || (a = "about:invalid#zClosurez");
        return g.Fb(a)
    };
    g.Fb = function(a) {
        return new g.Db(Bb, a)
    };
    g.Lb = function() {
        this.C = "";
        this.F = g.Kb
    };
    g.Mb = function(a) {
        var b = new g.Lb;
        b.C = a;
        return b
    };
    g.Ob = function() {
        this.C = "";
        this.F = g.Nb
    };
    g.Pb = function(a) {
        var b = new g.Ob;
        b.C = a;
        return b
    };
    g.Rb = function(a) {
        return g.xb(g.Qb, a)
    };
    g.Sb = function() {
        return g.Rb("Trident") || g.Rb("MSIE")
    };
    Tb = function() {
        return g.Rb("Firefox") || g.Rb("FxiOS")
    };
    g.Vb = function() {
        return g.Rb("Safari") && !(Ub() || g.Rb("Coast") || g.Rb("Opera") || g.Rb("Edge") || g.Rb("Edg/") || g.Rb("OPR") || Tb() || g.Rb("Silk") || g.Rb("Android"))
    };
    Ub = function() {
        return (g.Rb("Chrome") || g.Rb("CriOS")) && !g.Rb("Edge")
    };
    g.Wb = function() {
        return g.Rb("Android") && !(Ub() || Tb() || g.Rb("Opera") || g.Rb("Silk"))
    };
    g.Yb = function() {
        this.F = "";
        this.G = Xb;
        this.D = null
    };
    g.$b = function(a) {
        return g.Zb(a).toString()
    };
    g.Zb = function(a) {
        if (a instanceof g.Yb && a.constructor === g.Yb && a.G === Xb) return a.F;
        g.za(a);
        return "type_error:SafeHtml"
    };
    g.bc = function(a) {
        if (a instanceof g.Yb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Rk && (c = a.C());
        return g.ac(g.wb(b && a.Md ? a.Uc() : String(a)), c)
    };
    g.ac = function(a, b) {
        return g.cc(a, b)
    };
    g.cc = function(a, b) {
        var c = new g.Yb;
        c.F = a;
        c.D = b;
        return c
    };
    g.dc = function(a, b) {
        var c = b instanceof g.Db ? b : g.Jb(b);
        a.href = g.Eb(c)
    };
    g.ec = function(a, b) {
        a.src = g.lb(b).toString()
    };
    g.fc = function(a, b) {
        var c = b instanceof g.Db ? b : g.Jb(b);
        a.href = g.Eb(c)
    };
    g.gc = function(a) {
        return encodeURIComponent(String(a))
    };
    g.hc = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    };
    g.ic = function(a) {
        return a = g.wb(a, void 0)
    };
    g.kc = function(a, b, c) {
        a = void 0 !== c ? a.toFixed(c) : String(a);
        c = a.indexOf("."); - 1 == c && (c = a.length);
        return (0, g.jc)("0", Math.max(0, b - c)) + a
    };
    g.lc = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };
    g.mc = function(a, b, c, d, e, f, k) {
        var l = "";
        a && (l += a + ":");
        c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
        e && (l += e);
        f && (l += "?" + f);
        k && (l += "#" + k);
        return l
    };
    g.nc = function(a) {
        return a ? decodeURI(a) : a
    };
    g.pc = function(a, b) {
        return b.match(g.oc)[a] || null
    };
    g.qc = function(a) {
        return g.nc(g.pc(3, a))
    };
    g.rc = function(a) {
        a = a.match(g.oc);
        return g.mc(null, null, null, null, a[5], a[6], a[7])
    };
    g.sc = function(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)]
    };
    g.tc = function(a, b) {
        return b ? a ? a + "&" + b : b : a
    };
    g.uc = function(a, b) {
        if (!b) return a;
        var c = g.sc(a);
        c[1] = g.tc(c[1], b);
        return c[0] + (c[1] ? "?" + c[1] : "") + c[2]
    };
    g.vc = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) g.vc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + g.gc(b)))
    };
    g.wc = function(a) {
        var b = [],
            c;
        for (c in a) g.vc(c, a[c], b);
        return b.join("&")
    };
    g.xc = function(a, b) {
        var c = g.wc(b);
        return g.uc(a, c)
    };
    g.yc = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    };
    g.Ac = function(a, b) {
        var c = a.search(g.zc),
            d = g.yc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return g.hc(a.substr(d, e - d))
    };
    kaa = function(a) {
        var b = a.url,
            c = a.dR;
        this.H = !!a.mR;
        this.F = gaa(b, c);
        a = /[?&]dsh=1(&|$)/.test(b);
        this.D = !a && /[?&]ae=1(&|$)/.test(b);
        this.G = !a && /[?&]ae=2(&|$)/.test(b);
        this.C = /[?&]adurl=([^&]+)/.exec(b)
    };
    Bc = function() {
        return g.Rb("iPhone") && !g.Rb("iPod") && !g.Rb("iPad")
    };
    g.Cc = function() {
        return Bc() || g.Rb("iPad") || g.Rb("iPod")
    };
    g.Dc = function(a) {
        g.Dc[" "](a);
        return a
    };
    g.Ec = function(a, b) {
        try {
            return g.Dc(a[b]), !0
        } catch (c) {}
        return !1
    };
    maa = function(a, b) {
        var c = laa;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    Fc = function() {
        var a = g.q.document;
        return a ? a.documentMode : void 0
    };
    g.Hc = function(a) {
        return maa(a, function() {
            return 0 <= g.Ab(g.Gc, a)
        })
    };
    g.Jc = function(a) {
        return Number(g.Ic) >= a
    };
    Mc = function(a, b) {
        g.Ca(a);
        void 0 === b && (b = 0);
        Kc();
        for (var c = Lc[b], d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                k = e + 1 < a.length,
                l = k ? a[e + 1] : 0,
                m = e + 2 < a.length,
                p = m ? a[e + 2] : 0,
                t = f >> 2;
            f = (f & 3) << 4 | l >> 4;
            l = (l & 15) << 2 | p >> 6;
            p &= 63;
            m || (p = 64, k || (l = 64));
            d.push(c[t], c[f], c[l] || "", c[p] || "")
        }
        return d.join("")
    };
    naa = function() {
        var a = 65.25;
        a % 3 ? a = Math.floor(a) : g.xb("=.", "k") && (a = g.xb("=.", "1") ? a - 2 : a - 1);
        var b = new Uint8Array(a),
            c = 0;
        g.Nc("BPr83OIQ0ehMqbAUQWSaFHZOJeRvvXddR5EONgwwQcHR6FRe6G43LgD36pJq1IuGN10mmMv-V7IKSIZludF9G1k", function(d) {
            b[c++] = d
        });
        return b.subarray(0, c)
    };
    g.Nc = function(a, b) {
        function c(m) {
            for (; d < a.length;) {
                var p = a.charAt(d++),
                    t = Oc[p];
                if (null != t) return t;
                if (!g.pb(p)) throw Error("Unknown base64 encoding at char: " + p);
            }
            return m
        }
        Kc();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                k = c(64),
                l = c(64);
            if (64 === l && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != k && (b(f << 4 & 240 | k >> 2), 64 != l && b(k << 6 & 192 | l))
        }
    };
    Kc = function() {
        if (!Oc) {
            Oc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Lc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Oc[f] && (Oc[f] = e)
                }
            }
        }
    };
    g.Pc = function(a) {
        this.C = 0;
        this.F = a
    };
    g.Qc = function() {};
    Rc = function(a) {
        if (a.C)
            for (var b in a.C) {
                var c = a.C[b];
                if (g.Aa(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].Zc();
                else c && c.Zc()
            }
    };
    Sc = function(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    };
    Tc = function(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Tc(d) : d)
            }
            return b
        }
        if (g.Uc && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Tc(d) : d);
        return b
    };
    g.Vc = function(a) {
        this.C = a || {
            cookie: ""
        }
    };
    g.Wc = function(a) {
        a = (a.C.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, g.yb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    g.Xc = function(a, b) {
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
    g.ad = function(a, b, c) {
        "number" === typeof a ? (this.date = Yc(a, b || 0, c || 1), Zc(this, c || 1)) : g.Ea(a) ? (this.date = Yc(a.getFullYear(), a.getMonth(), a.getDate()), Zc(this, a.getDate())) : (this.date = new Date((0, g.$c)()), a = this.date.getDate(), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0), Zc(this, a))
    };
    Yc = function(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    };
    Zc = function(a, b) {
        if (a.getDate() != b) {
            var c = a.getDate() < b ? 1 : -1;
            a.date.setUTCHours(a.date.getUTCHours() + c)
        }
    };
    g.bd = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    g.cd = function(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    };
    g.dd = function(a, b) {
        var c = a.x - b.x,
            d = a.y - b.y;
        return Math.sqrt(c * c + d * d)
    };
    g.ed = function(a, b) {
        this.width = a;
        this.height = b
    };
    g.z = function(a) {
        return g.fd(document, a)
    };
    g.fd = function(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    g.gd = function(a) {
        return g.fd(document, a)
    };
    g.id = function(a, b) {
        g.Ta(b, function(c, d) {
            c && "object" == typeof c && c.Md && (c = c.Uc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : hd.hasOwnProperty(d) ? a.setAttribute(hd[d], c) : g.nb(d, "aria-") || g.nb(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    };
    g.kd = function(a) {
        return g.jd(a || window)
    };
    g.jd = function(a) {
        a = a.document;
        a = g.ld(a) ? a.documentElement : a.body;
        return new g.ed(a.clientWidth, a.clientHeight)
    };
    g.nd = function(a, b, c) {
        return g.md(document, arguments)
    };
    g.md = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!oaa && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', g.ic(d.name), '"');
            if (d.type) {
                c.push(' type="', g.ic(d.type), '"');
                var e = {};
                g.cb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = g.od(a, c);
        d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : g.id(c, d));
        2 < b.length && g.pd(a, c, b, 2);
        return c
    };
    g.pd = function(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !g.Ca(f) || g.Ea(f) && 0 < f.nodeType ? e(f) : (0, g.B)(paa(f) ? g.Qa(f) : f, e)
        }
    };
    g.qd = function(a) {
        return g.od(document, a)
    };
    g.od = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    g.ld = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    g.rd = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    g.sd = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    g.td = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    paa = function(a) {
        if (a && "number" == typeof a.length) {
            if (g.Ea(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (g.Da(a)) return "function" == typeof a.item
        }
        return !1
    };
    g.ud = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    g.wd = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };
    g.xd = function(a) {
        var b = [];
        g.wd(a, function(c) {
            b.push(c)
        });
        return b
    };
    raa = function() {
        var a = g.qd("IFRAME"),
            b = {};
        (0, g.B)(qaa(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    g.C = function() {
        this.Rc = this.Rc;
        this.wf = this.wf
    };
    g.Ad = function(a, b) {
        g.yd(a, g.w(g.zd, b))
    };
    g.yd = function(a, b) {
        a.Rc ? b() : (a.wf || (a.wf = []), a.wf.push(b))
    };
    g.zd = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    g.Bd = function() {
        this.C = function(a) {
            return void 0 === a ? !1 : a
        };
        this.F = function(a) {
            return void 0 === a ? 0 : a
        }
    };
    g.Cd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    g.Dd = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    g.Ed = function(a, b) {
        a.style.width = g.Dd(b, !0)
    };
    g.Gd = function(a, b) {
        return typeof a === b
    };
    g.Id = function() {
        var a = void 0 === a ? g.Hd : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    g.Jd = function(a) {
        a.u_tz = -(new Date).getTimezoneOffset();
        a.u_his = g.Id();
        a.u_java = !!g.Hd.navigator && !g.Gd(g.Hd.navigator.javaEnabled, "unknown") && !!g.Hd.navigator.javaEnabled && g.Hd.navigator.javaEnabled();
        g.Hd.screen && (a.u_h = g.Hd.screen.height, a.u_w = g.Hd.screen.width, a.u_ah = g.Hd.screen.availHeight, a.u_aw = g.Hd.screen.availWidth, a.u_cd = g.Hd.screen.colorDepth);
        g.Hd.navigator && g.Hd.navigator.plugins && (a.u_nplug = g.Hd.navigator.plugins.length);
        g.Hd.navigator && g.Hd.navigator.mimeTypes && (a.u_nmime = g.Hd.navigator.mimeTypes.length)
    };
    g.Kd = function(a, b) {
        try {
            return (void 0 === b ? 0 : b) ? (new g.ed(a.innerWidth, a.innerHeight)).round() : g.kd(a).round()
        } catch (c) {
            return new g.ed(-12245933, -12245933)
        }
    };
    g.Ld = function(a) {
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
    Md = function(a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "chrome-untrusted" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };
    saa = function() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            t = p = 0
        }

        function b(y) {
            for (var A = k, G = 0; 64 > G; G += 4) A[G / 4] = y[G] << 24 | y[G + 1] << 16 | y[G + 2] << 8 | y[G + 3];
            for (G = 16; 80 > G; G++) y = A[G - 3] ^ A[G - 8] ^ A[G - 14] ^ A[G - 16], A[G] = (y << 1 | y >>> 31) & 4294967295;
            y = e[0];
            var O = e[1],
                T = e[2],
                ra = e[3],
                Ba = e[4];
            for (G = 0; 80 > G; G++) {
                if (40 > G)
                    if (20 > G) {
                        var Ha = ra ^ O & (T ^ ra);
                        var vd = 1518500249
                    } else Ha = O ^ T ^ ra, vd = 1859775393;
                else 60 > G ? (Ha = O & T | ra & (O | T), vd = 2400959708) : (Ha = O ^ T ^ ra, vd = 3395469782);
                Ha = ((y << 5 | y >>> 27) & 4294967295) + Ha + Ba + vd + A[G] & 4294967295;
                Ba = ra;
                ra = T;
                T = (O << 30 | O >>> 2) & 4294967295;
                O = y;
                y = Ha
            }
            e[0] = e[0] + y & 4294967295;
            e[1] =
                e[1] + O & 4294967295;
            e[2] = e[2] + T & 4294967295;
            e[3] = e[3] + ra & 4294967295;
            e[4] = e[4] + Ba & 4294967295
        }

        function c(y, A) {
            if ("string" === typeof y) {
                y = unescape(encodeURIComponent(y));
                for (var G = [], O = 0, T = y.length; O < T; ++O) G.push(y.charCodeAt(O));
                y = G
            }
            A || (A = y.length);
            G = 0;
            if (0 == p)
                for (; G + 64 < A;) b(y.slice(G, G + 64)), G += 64, t += 64;
            for (; G < A;)
                if (f[p++] = y[G++], t++, 64 == p)
                    for (p = 0, b(f); G + 64 < A;) b(y.slice(G, G + 64)), G += 64, t += 64
        }

        function d() {
            var y = [],
                A = 8 * t;
            56 > p ? c(l, 56 - p) : c(l, 64 - (p - 56));
            for (var G = 63; 56 <= G; G--) f[G] = A & 255, A >>>= 8;
            b(f);
            for (G = A = 0; 5 > G; G++)
                for (var O = 24; 0 <= O; O -= 8) y[A++] = e[G] >> O & 255;
            return y
        }
        for (var e = [], f = [], k = [], l = [128], m = 1; 64 > m; ++m) l[m] = 0;
        var p, t;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            tu: function() {
                for (var y = d(), A = "", G = 0; G < y.length; G++) A += "0123456789ABCDEF".charAt(Math.floor(y[G] / 16)) + "0123456789ABCDEF".charAt(y[G] % 16);
                return A
            }
        }
    };
    taa = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (g.Aa(c) ? 2 : 1)) return e = [b, a], (0, g.B)(d, function(l) {
            e.push(l)
        }), Nd(e.join(" "));
        var f = [],
            k = [];
        (0, g.B)(c, function(l) {
            k.push(l.key);
            f.push(l.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = g.Na(f) ? [c, b, a] : [f.join(":"), c, b, a];
        (0, g.B)(d, function(l) {
            e.push(l)
        });
        a = Nd(e.join(" "));
        a = [c, a];
        g.Na(k) || a.push(k.join(""));
        return a.join("_")
    };
    Nd = function(a) {
        var b = saa();
        b.update(a);
        return b.tu().toLowerCase()
    };
    Od = function(a) {
        var b = Md(String(g.q.location.href)),
            c;
        (c = g.q.__SAPISID || g.q.__APISID || g.q.__OVERRIDE_SID) ? c = !0: (c = new g.Vc(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
        if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? g.q.__SAPISID : g.q.__APISID, c || (c = new g.Vc(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
            b = b ? "SAPISIDHASH" : "APISIDHASH";
            var d = String(g.q.location.href);
            return d && c && b ? [b, taa(Md(d), c, a || null)].join(" ") :
                null
        }
        return null
    };
    Pd = function() {
        this.C = [];
        this.F = -1
    };
    uaa = function(a) {
        -1 == a.F && (a.F = (0, g.Qd)(a.C, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.F
    };
    g.Rd = function() {
        var a = new Pd;
        g.q.SVGElement && g.q.document.createElementNS && a.set(0);
        var b = raa();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        g.q.crypto && g.q.crypto.subtle && a.set(3);
        g.q.TextDecoder && g.q.TextEncoder && a.set(4);
        return uaa(a)
    };
    g.Sd = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    g.Td = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.F = !1
    };
    g.Ud = function(a, b) {
        g.Td.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.G = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.zc = null;
        a && this.init(a, b)
    };
    g.Wd = function(a) {
        return !(!a || !a[Vd])
    };
    waa = function(a, b, c, d, e) {
        this.listener = a;
        this.C = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Zg = e;
        this.key = ++vaa;
        this.kg = this.Ph = !1
    };
    Xd = function(a) {
        a.kg = !0;
        a.listener = null;
        a.C = null;
        a.src = null;
        a.Zg = null
    };
    g.Yd = function(a) {
        this.src = a;
        this.listeners = {};
        this.C = 0
    };
    Zd = function(a, b) {
        var c = b.type;
        if (!(c in a.listeners)) return !1;
        var d = g.Pa(a.listeners[c], b);
        d && (Xd(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.C--));
        return d
    };
    $d = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.kg && f.listener == b && f.capture == !!c && f.Zg == d) return e
        }
        return -1
    };
    g.be = function(a, b, c, d, e) {
        if (d && d.once) return g.ae(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) g.be(a, b[f], c, d, e);
            return null
        }
        c = g.ce(c);
        return g.Wd(a) ? a.O(b, c, g.Ea(d) ? !!d.capture : !!d, e) : de(a, b, c, !1, d, e)
    };
    de = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var k = g.Ea(e) ? !!e.capture : !!e,
            l = g.ee(a);
        l || (a[fe] = l = new g.Yd(a));
        c = l.add(b, c, d, k, f);
        if (c.C) return c;
        d = xaa();
        c.C = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) yaa || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(ge(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        he++;
        return c
    };
    xaa = function() {
        var a = zaa,
            b = ie ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    g.ae = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) g.ae(a, b[f], c, d, e);
            return null
        }
        c = g.ce(c);
        return g.Wd(a) ? a.Be(b, c, g.Ea(d) ? !!d.capture : !!d, e) : de(a, b, c, !0, d, e)
    };
    g.je = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) g.je(a, b[f], c, d, e);
        else d = g.Ea(d) ? !!d.capture : !!d, c = g.ce(c), g.Wd(a) ? a.Va(b, c, d, e) : a && (a = g.ee(a)) && (b = a.We(b, c, d, e)) && g.ke(b)
    };
    g.ke = function(a) {
        if ("number" === typeof a || !a || a.kg) return !1;
        var b = a.src;
        if (g.Wd(b)) return Zd(b.vd, a);
        var c = a.type,
            d = a.C;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ge(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        he--;
        (c = g.ee(b)) ? (Zd(c, a), 0 == c.C && (c.src = null, b[fe] = null)) : Xd(a);
        return !0
    };
    ge = function(a) {
        return a in le ? le[a] : le[a] = "on" + a
    };
    ne = function(a, b, c, d) {
        var e = !0;
        if (a = g.ee(a))
            if (b = a.listeners[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.kg && (f = me(f, d), e = e && !1 !== f)
                }
        return e
    };
    me = function(a, b) {
        var c = a.listener,
            d = a.Zg || a.src;
        a.Ph && g.ke(a);
        return c.call(d, b)
    };
    zaa = function(a, b) {
        if (a.kg) return !0;
        if (!ie) {
            var c = b || g.u("window.event"),
                d = new g.Ud(c, this),
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
                    var l = ne(c[k], f, !0, d);
                    e = e && l
                }
                for (k = 0; !d.F && k < c.length; k++) d.currentTarget = c[k],
                l = ne(c[k], f, !1, d),
                e = e && l
            }
            return e
        }
        return me(a, new g.Ud(b,
            this))
    };
    g.ee = function(a) {
        a = a[fe];
        return a instanceof g.Yd ? a : null
    };
    g.ce = function(a) {
        if (g.Da(a)) return a;
        a[oe] || (a[oe] = function(b) {
            return a.handleEvent(b)
        });
        return a[oe]
    };
    g.pe = function() {
        g.C.call(this);
        this.vd = new g.Yd(this);
        this.Dt = this;
        this.Ol = null
    };
    qe = function(a, b, c, d) {
        b = a.vd.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var k = b[f];
            if (k && !k.kg && k.capture == c) {
                var l = k.listener,
                    m = k.Zg || k.src;
                k.Ph && Zd(a.vd, k);
                e = !1 !== l.call(m, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    re = function(a, b) {
        this.D = a;
        this.G = b;
        this.F = 0;
        this.C = null
    };
    se = function(a, b) {
        a.G(b);
        100 > a.F && (a.F++, b.next = a.C, a.C = b)
    };
    te = function(a) {
        g.q.setTimeout(function() {
            throw a;
        }, 0)
    };
    Baa = function() {
        var a = g.q.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !g.Rb("Presto") && (a = function() {
            var e = g.qd("IFRAME");
            e.style.display = "none";
            g.ec(e, g.mb(Aaa));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(g.Zb(g.ue));
            e.close();
            var k = "callImmediate" + Math.random(),
                l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, g.v)(function(m) {
                if (("*" == l || m.origin ==
                        l) && m.data == k) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(k, l)
                }
            }
        });
        if ("undefined" !== typeof a && !g.Sb()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.jn;
                    c.jn = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    jn: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            g.q.setTimeout(e, 0)
        }
    };
    ve = function() {
        this.F = this.C = null
    };
    we = function() {
        this.next = this.scope = this.mc = null
    };
    Ae = function(a, b) {
        xe || Caa();
        ye || (xe(), ye = !0);
        ze.add(a, b)
    };
    Caa = function() {
        if (g.q.Promise && g.q.Promise.resolve) {
            var a = g.q.Promise.resolve(void 0);
            xe = function() {
                a.then(Be)
            }
        } else xe = function() {
            var b = Be;
            !g.Da(g.q.setImmediate) || g.q.Window && g.q.Window.prototype && !g.Rb("Edge") && g.q.Window.prototype.setImmediate == g.q.setImmediate ? (Ce || (Ce = Baa()), Ce(b)) : g.q.setImmediate(b)
        }
    };
    Be = function() {
        for (var a; a = ze.remove();) {
            try {
                a.mc.call(a.scope)
            } catch (b) {
                te(b)
            }
            se(De, a)
        }
        ye = !1
    };
    g.Ee = function(a) {
        a.prototype.$goog_Thenable = !0
    };
    g.Fe = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    g.He = function(a, b) {
        this.C = 0;
        this.M = void 0;
        this.G = this.F = this.D = null;
        this.H = this.L = !1;
        if (a != g.xa) try {
            var c = this;
            a.call(b, function(d) {
                g.Ge(c, 2, d)
            }, function(d) {
                g.Ge(c, 3, d)
            })
        } catch (d) {
            g.Ge(this, 3, d)
        }
    };
    Ie = function() {
        this.next = this.context = this.onRejected = this.F = this.C = null;
        this.D = !1
    };
    Ke = function(a, b, c) {
        var d = Je.get();
        d.F = a;
        d.onRejected = b;
        d.context = c;
        return d
    };
    g.Me = function(a, b, c) {
        Le(a, b, c, null) || Ae(g.w(b, a))
    };
    g.Ne = function(a) {
        return new g.He(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(p, t) {
                        d--;
                        e[p] = t;
                        0 == d && b(e)
                    }, k = function(p) {
                        c(p)
                    }, l = 0, m; l < a.length; l++) m = a[l], g.Me(m, g.w(f, l), k);
            else b(e)
        })
    };
    g.Pe = function(a, b) {
        return Oe(a, null, b, void 0)
    };
    Qe = function(a, b) {
        if (0 == a.C)
            if (a.D) {
                var c = a.D;
                if (c.F) {
                    for (var d = 0, e = null, f = null, k = c.F; k && (k.D || (d++, k.C == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
                    e && (0 == c.C && 1 == d ? Qe(c, b) : (f ? (d = f, d.next == c.G && (c.G = d), d.next = d.next.next) : Re(c), Se(c, e, 3, b)))
                }
                a.D = null
            } else g.Ge(a, 3, b)
    };
    Ue = function(a, b) {
        a.F || 2 != a.C && 3 != a.C || Te(a);
        a.G ? a.G.next = b : a.F = b;
        a.G = b
    };
    Oe = function(a, b, c, d) {
        var e = Ke(null, null, null);
        e.C = new g.He(function(f, k) {
            e.F = b ? function(l) {
                try {
                    var m = b.call(d, l);
                    f(m)
                } catch (p) {
                    k(p)
                }
            } : f;
            e.onRejected = c ? function(l) {
                try {
                    var m = c.call(d, l);
                    void 0 === m && l instanceof g.Ve ? k(l) : f(m)
                } catch (p) {
                    k(p)
                }
            } : k
        });
        e.C.D = a;
        Ue(a, e);
        return e.C
    };
    g.Ge = function(a, b, c) {
        0 == a.C && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.C = 1, Le(c, a.Y, a.N, a) || (a.M = c, a.C = b, a.D = null, Te(a), 3 != b || c instanceof g.Ve || Daa(a, c)))
    };
    Le = function(a, b, c, d) {
        if (a instanceof g.He) return Ue(a, Ke(b || g.xa, c || null, d)), !0;
        if (g.Fe(a)) return a.then(b, c, d), !0;
        if (g.Ea(a)) try {
            var e = a.then;
            if (g.Da(e)) return Eaa(a, e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    };
    Eaa = function(a, b, c, d, e) {
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
    Te = function(a) {
        a.L || (a.L = !0, Ae(a.J, a))
    };
    Re = function(a) {
        var b = null;
        a.F && (b = a.F, a.F = b.next, b.next = null);
        a.F || (a.G = null);
        return b
    };
    Se = function(a, b, c, d) {
        if (3 == c && b.onRejected && !b.D)
            for (; a && a.H; a = a.D) a.H = !1;
        if (b.C) b.C.D = null, We(b, c, d);
        else try {
            b.D ? b.F.call(b.context) : We(b, c, d)
        } catch (e) {
            Xe.call(null, e)
        }
        se(Je, b)
    };
    We = function(a, b, c) {
        2 == b ? a.F.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
    };
    Daa = function(a, b) {
        a.H = !0;
        Ae(function() {
            a.H && Xe.call(null, b)
        })
    };
    g.Ve = function(a) {
        g.Ia.call(this, a)
    };
    g.Ye = function(a, b, c) {
        if (g.Da(a)) c && (a = (0, g.v)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, g.v)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : g.q.setTimeout(a, b || 0)
    };
    g.Ze = function(a) {
        g.q.clearTimeout(a)
    };
    g.$e = function(a, b, c) {
        g.C.call(this);
        this.C = a;
        this.D = b || 0;
        this.F = c;
        this.Pb = (0, g.v)(this.xk, this)
    };
    Faa = function() {
        this.F = -1
    };
    af = function() {
        this.F = 64;
        this.C = [];
        this.L = [];
        this.M = [];
        this.G = [];
        this.G[0] = 128;
        for (var a = 1; a < this.F; ++a) this.G[a] = 0;
        this.H = this.D = 0;
        this.reset()
    };
    bf = function(a, b, c) {
        c || (c = 0);
        var d = a.M;
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
                    var p = 1518500249
                } else f = c ^ k ^ l, p = 1859775393;
            else 60 > e ? (f = c & k | l & (c | k), p = 2400959708) :
                (f = c ^ k ^ l, p = 3395469782);
            f = (b << 5 | b >>> 27) + f + m + p + d[e] & 4294967295;
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
    g.cf = function(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    };
    g.df = function(a) {
        return a.classList ? a.classList : g.cf(a).match(/\S+/g) || []
    };
    g.D = function(a, b) {
        return a.classList ? a.classList.contains(b) : g.Ma(g.df(a), b)
    };
    g.ef = function() {};
    gf = function(a) {
        if (a instanceof g.ef) return a;
        if ("function" == typeof a.bd) return a.bd(!1);
        if (g.Ca(a)) {
            var b = 0,
                c = new g.ef;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw g.ff;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    };
    g.hf = function(a, b, c) {
        if (g.Ca(a)) try {
            (0, g.B)(a, b, c)
        } catch (d) {
            if (d !== g.ff) throw d;
        } else {
            a = gf(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== g.ff) throw d;
            }
        }
    };
    Gaa = function(a) {
        if (g.Ca(a)) return g.Qa(a);
        a = gf(a);
        var b = [];
        g.hf(a, function(c) {
            b.push(c)
        });
        return b
    };
    g.kf = function(a, b) {
        this.F = {};
        this.C = [];
        this.Je = this.D = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && g.jf(this, a)
    };
    Haa = function(a, b) {
        return a === b
    };
    g.mf = function(a) {
        if (a.D != a.C.length) {
            for (var b = 0, c = 0; b < a.C.length;) {
                var d = a.C[b];
                g.lf(a.F, d) && (a.C[c++] = d);
                b++
            }
            a.C.length = c
        }
        if (a.D != a.C.length) {
            var e = {};
            for (c = b = 0; b < a.C.length;) d = a.C[b], g.lf(e, d) || (a.C[c++] = d, e[d] = 1), b++;
            a.C.length = c
        }
    };
    g.jf = function(a, b) {
        if (b instanceof g.kf)
            for (var c = b.yc(), d = 0; d < c.length; d++) a.set(c[d], b.get(c[d]));
        else
            for (c in b) a.set(c, b[c])
    };
    g.lf = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    g.of = function(a) {
        var b = [];
        nf(new Iaa, a, b);
        return b.join("")
    };
    Iaa = function() {};
    nf = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), nf(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), pf(d, c), c.push(":"), nf(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    pf(b, c);
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
    pf = function(a, b) {
        b.push('"', a.replace(Jaa, function(c) {
            var d = qf[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), qf[c] = d);
            return d
        }), '"')
    };
    g.rf = function(a) {
        g.C.call(this);
        this.H = 1;
        this.D = [];
        this.G = 0;
        this.C = [];
        this.F = {};
        this.L = !!a
    };
    g.sf = function(a, b, c, d) {
        if (b = a.F[b]) {
            var e = a.C;
            (b = g.Ka(b, function(f) {
                return e[f + 1] == c && e[f + 2] == d
            })) && a.qd(b)
        }
    };
    Kaa = function(a, b, c) {
        Ae(function() {
            a.apply(b, c)
        })
    };
    g.tf = function(a) {
        this.C = a
    };
    uf = function(a) {
        this.C = a
    };
    vf = function(a) {
        this.data = a
    };
    wf = function(a) {
        return void 0 === a || a instanceof vf ? a : new vf(a)
    };
    g.yf = function(a) {
        this.C = a
    };
    g.zf = function(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < (0, g.$c)() || !!b && b > (0, g.$c)()
    };
    Laa = function() {};
    Af = function() {};
    g.Bf = function(a) {
        this.C = a
    };
    g.Cf = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.C = a
    };
    Ff = function(a, b) {
        this.F = a;
        this.C = null;
        if (g.Df && !g.Jc(9)) {
            Ef || (Ef = new g.kf);
            this.C = Ef.get(a);
            this.C || (b ? this.C = document.getElementById(b) : (this.C = document.createElement("userdata"), this.C.addBehavior("#default#userData"), document.body.appendChild(this.C)), Ef.set(a, this.C));
            try {
                this.C.load(this.F)
            } catch (c) {
                this.C = null
            }
        }
    };
    Gf = function(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return Maa[b]
        })
    };
    Hf = function(a) {
        try {
            a.C.save(a.F)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };
    If = function(a) {
        return a.C.XMLDocument.documentElement
    };
    Jf = function(a, b) {
        this.F = a;
        this.C = b + "::"
    };
    g.Kf = function(a) {
        var b = new g.Cf;
        return b.isAvailable() ? a ? new Jf(b, a) : b : null
    };
    Lf = function(a, b) {
        1 < b.length ? a[b[0]] = b[1] : 1 === b.length && Object.assign(a, b[0])
    };
    g.Nf = function(a) {
        Lf(g.Mf, arguments)
    };
    Of = function(a, b) {
        var c = g.E(a, void 0);
        c ? c.push(b) : g.Nf(a, [b])
    };
    g.E = function(a, b) {
        return a in g.Mf ? g.Mf[a] : b
    };
    Pf = function() {
        return g.E("ERRORS", [])
    };
    Qf = function(a) {
        var b = g.Mf.EXPERIMENT_FLAGS;
        return b ? b[a] : void 0
    };
    g.Sf = function(a) {
        a = Rf(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    };
    g.Tf = function(a, b) {
        var c = Rf(a);
        return void 0 === c && void 0 !== b ? b : Number(c || 0)
    };
    Uf = function(a) {
        a = Rf(a);
        return void 0 !== a ? String(a) : ""
    };
    Rf = function(a) {
        var b = g.E("EXPERIMENTS_FORCED_FLAGS", {});
        return void 0 !== b[a] ? b[a] : g.E("EXPERIMENT_FLAGS", {})[a]
    };
    g.F = function(a, b) {
        return a ? a.dataset ? a.dataset[g.Vf(b)] : a.getAttribute("data-" + b) : null
    };
    g.Vf = function(a) {
        return Wf[a] || (Wf[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    Oaa = function(a) {
        Naa.forEach(function(b) {
            return b(a)
        })
    };
    Yf = function(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                g.Xf(b), Oaa(b)
            }
        } : a
    };
    g.Xf = function(a) {
        var b = g.u("yt.logging.errors.log");
        b ? b(a, "ERROR", void 0, void 0, void 0) : (b = Pf(), b.push([a, "ERROR", void 0, void 0, void 0]), g.Nf("ERRORS", b))
    };
    g.Zf = function(a) {
        var b = g.u("yt.logging.errors.log");
        b ? b(a, "WARNING", void 0, void 0, void 0) : (b = Pf(), b.push([a, "WARNING", void 0, void 0, void 0]), g.Nf("ERRORS", b))
    };
    Paa = function(a, b, c, d, e) {
        b = void 0 === b ? "Unknown file" : b;
        c = void 0 === c ? 0 : c;
        var f = !1,
            k = Qf("log_window_onerror_fraction");
        if (k && Math.random() < k) f = !0;
        else {
            k = document.getElementsByTagName("script");
            for (var l = 0, m = k.length; l < m; l++)
                if (0 < k[l].src.indexOf("/debug-")) {
                    f = !0;
                    break
                }
        }
        f && (f = !1, e ? f = !0 : ("string" === typeof a ? k = a : ErrorEvent && a instanceof ErrorEvent ? (f = !0, k = a.message, b = a.filename, c = a.lineno, d = a.colno) : (k = "Unknown error", b = "Unknown file", c = 0), a = Error(k), a.name = "UnhandledWindowError", e = a, e.message = k, e.fileName =
            b, e.lineNumber = c, isNaN(d) ? delete e.columnNumber : e.columnNumber = d), f ? g.Xf(e) : g.Zf(e))
    };
    g.$f = function(a, b) {
        g.Da(a) && (a = Yf(a));
        return window.setTimeout(a, b)
    };
    g.ag = function(a, b) {
        g.Da(a) && (a = Yf(a));
        return window.setInterval(a, b)
    };
    g.bg = function(a) {
        window.clearTimeout(a)
    };
    g.cg = function(a) {
        window.clearInterval(a)
    };
    g.ig = function(a, b, c) {
        var d = dg();
        if (d) {
            var e = d.subscribe(a, function() {
                var f = arguments;
                var k = function() {
                    eg[e] && b.apply(c || window, f)
                };
                try {
                    fg[a] ? k() : g.$f(k, 0)
                } catch (l) {
                    g.Xf(l)
                }
            }, c);
            eg[e] = !0;
            hg[a] || (hg[a] = []);
            hg[a].push(e);
            return e
        }
        return 0
    };
    g.jg = function(a) {
        var b = dg();
        b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), (0, g.B)(a, function(c) {
            b.unsubscribeByKey(c);
            delete eg[c]
        }))
    };
    g.H = function(a, b) {
        var c = dg();
        return c ? c.publish.apply(c, arguments) : !1
    };
    g.kg = function(a, b) {
        fg[a] = !0;
        var c = dg();
        c = c ? c.publish.apply(c, arguments) : !1;
        fg[a] = !1;
        return c
    };
    dg = function() {
        return g.u("ytPubsubPubsubInstance")
    };
    g.mg = function(a, b) {
        var c = g.lg(a);
        spf.script.load(a, c, b)
    };
    g.ng = function(a) {
        a = g.lg(a);
        spf.script.unload(a)
    };
    g.lg = function(a) {
        var b = "";
        if (a) {
            var c = a.indexOf("jsbin/"),
                d = a.lastIndexOf(".js"),
                e = c + 6; - 1 < c && -1 < d && d > e && (b = a.substring(e, d), b = b.replace(Qaa, ""), b = b.replace(Raa, ""), b = b.replace("debug-", ""), b = b.replace("tracing-", ""))
        }
        return b
    };
    g.Dg = function() {
        g.bg(g.og);
        g.bg(g.pg);
        g.pg = 0;
        if (!g.Wa(g.qg)) {
            for (var a in g.qg) {
                var b = rg[a];
                if (b && b.isReady()) {
                    var c = void 0,
                        d = a,
                        e = b,
                        f = Saa[d],
                        k = sg[d] || {};
                    sg[d] = k;
                    b = Math.round((0, g.tg)());
                    for (c in g.qg[d]) {
                        var l = g.ab(g.ug(e));
                        l[f] = vg(d, c);
                        k.dispatchedEventCount = k.dispatchedEventCount || 0;
                        k.dispatchedEventCount += l[f].length;
                        var m = wg[c];
                        if (m) a: {
                            var p = l,
                                t = c;
                            if (m.videoId) var y = "VIDEO";
                            else if (m.playlistId) y = "PLAYLIST";
                            else break a;p.credentialTransferTokenTargetId = m;p.context = p.context || {};p.context.user =
                            p.context.user || {};p.context.user.credentialTransferTokens = [{
                                token: t,
                                scope: y
                            }]
                        }
                        delete wg[c];
                        m = l;
                        m.requestTimeMs = b;
                        g.Sf("unsplit_gel_payloads_in_logs") && (m.unsplitGelPayloadsInLogs = !0);
                        if (y = g.E("EVENT_ID", void 0)) p = g.E("BATCH_CLIENT_COUNTER", void 0) || 0, !p && g.Sf("web_client_counter_random_seed") && (p = Math.floor(Math.random() * xg / 2)), p++, p > xg && (p = 1), g.Nf("BATCH_CLIENT_COUNTER", p), y = {
                            serializedEventId: y,
                            clientCounter: p
                        }, m.serializedClientEventId = y, yg && zg && g.Sf("log_gel_rtt_web") && (m.previousBatchInfo = {
                            serializedClientEventId: yg,
                            roundtripMs: zg
                        }), yg = y, zg = 0;
                        g.Ag(e, d, l, {
                            retry: Taa.has(d),
                            onSuccess: g.w(Uaa, (0, g.tg)())
                        })
                    }
                    c = k;
                    d = b;
                    c.previousDispatchMs && (b = d - c.previousDispatchMs, e = c.diffCount || 0, c.averageTimeBetweenDispatchesMs = e ? ((c.averageTimeBetweenDispatchesMs || 0) * e + b) / (e + 1) : b, c.diffCount = e + 1);
                    c.previousDispatchMs = d;
                    delete g.qg[a];
                    Bg = !1
                }
            }
            g.Wa(g.qg) || g.Cg()
        }
    };
    Vaa = function() {
        var a = [];
        for (e in g.qg) {
            var b = sg[e] || {};
            sg[e] = b;
            for (var c in g.qg[e]) {
                var d = vg(e, c);
                b.storedEventsCount = b.storedEventsCount || 0;
                b.storedEventsCount += d.length
            }
        }
        var e = Math.round((0, g.tg)());
        for (var f in sg) b = sg[f], b.eventType = f in Eg ? Eg[f] : "UNKNOWN_TYPE", c = Fg[f], b.metricIntervalMs = c ? e - c : e - g.Gg, a.push(b), Fg[f] = e, delete sg[f];
        return a
    };
    g.Cg = function() {
        g.Sf("web_gel_timeout_cap") && !g.pg && (g.pg = g.$f(g.Dg, 6E4));
        g.bg(g.og);
        var a = g.Tf("web_gel_debounce_ms", 1E4);
        a = g.E("LOGGING_BATCH_TIMEOUT", g.Hg || a);
        g.Sf("shorten_initial_gel_batch_timeout") && Bg && (a = Waa);
        g.og = g.$f(g.Dg, a)
    };
    vg = function(a, b) {
        b = void 0 === b ? "" : b;
        g.qg[a] = g.qg[a] || {};
        g.qg[a][b] = g.qg[a][b] || [];
        return g.qg[a][b]
    };
    Uaa = function(a) {
        zg = Math.round((0, g.tg)() - a)
    };
    g.Jg = function(a) {
        var b = a.__yt_uid_key;
        b || (b = Ig(), a.__yt_uid_key = b);
        return b
    };
    g.Kg = function() {
        var a = document;
        if ("visibilityState" in a) return a.visibilityState;
        var b = Xaa + "VisibilityState";
        if (b in a) return a[b]
    };
    g.Lg = function(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in Yaa || (this[b] = a[b]);
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
    Mg = function(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.C = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.F = a.clientY + b
        }
    };
    g.Ng = function(a) {
        void 0 === a.C && Mg(a);
        return a.C
    };
    g.Og = function(a) {
        void 0 === a.F && Mg(a);
        return a.F
    };
    g.Qg = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return g.Va(Pg, function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                k = g.Ea(e[4]) && g.Ea(d) && g.Za(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || k)
        })
    };
    g.I = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = g.Qg(a, b, c, d);
        if (e) return e;
        e = ++Tg.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var k = f ? function(l) {
            l = new g.Lg(l);
            if (!g.ud(l.relatedTarget, function(m) {
                    return m == a
                }, !0)) return l.currentTarget = a, l.type = b, c.call(a, l)
        } : function(l) {
            l = new g.Lg(l);
            l.currentTarget = a;
            return c.call(a, l)
        };
        k = Yf(k);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), Ug() || "boolean" === typeof d ? a.addEventListener(b, k, d) : a.addEventListener(b, k, !!d.capture)) : a.attachEvent("on" + b, k);
        Pg[e] = [a, b, c, k, d];
        return e
    };
    g.Vg = function(a) {
        a && ("string" == typeof a && (a = [a]), (0, g.B)(a, function(b) {
            if (b in Pg) {
                var c = Pg[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? Ug() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete Pg[b]
            }
        }))
    };
    g.Wg = function(a, b, c) {
        var d = void 0 === d ? {} : d;
        var e;
        return e = g.I(a, b, function() {
            g.Vg(e);
            c.apply(a, arguments)
        }, d)
    };
    g.Xg = function(a) {
        for (var b in Pg) Pg[b][0] == a && g.Vg(b)
    };
    g.Yg = function(a) {
        this.Pb = a;
        this.C = null;
        this.D = 0;
        this.L = null;
        this.G = 0;
        this.F = [];
        for (a = 0; 4 > a; a++) this.F.push(0);
        this.H = 0;
        this.J = g.I(window, "mousemove", (0, g.v)(this.Y, this));
        this.N = g.ag((0, g.v)(this.M, this), 25)
    };
    Zaa = function() {};
    g.$g = function(a, b) {
        return Zg(a, 0, b)
    };
    g.ah = function(a, b) {
        return Zg(a, 1, b)
    };
    g.ch = function(a) {
        for (var b = 0, c = a.length; b < c; b++) g.bh(a[b])
    };
    dh = function() {};
    g.eh = function() {
        return !!g.u("yt.scheduler.instance")
    };
    Zg = function(a, b, c) {
        isNaN(c) && (c = void 0);
        var d = g.u("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : g.$f(a, c || 0)
    };
    g.bh = function(a) {
        if (!isNaN(a)) {
            var b = g.u("yt.scheduler.instance.cancelJob");
            b ? b(a) : g.bg(a)
        }
    };
    g.hh = function(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.dy ? !0 : b.dy;
        b = void 0 === b.LF ? !1 : b.LF;
        if (null == g.u("_lact", window)) {
            var c = parseInt(g.E("LACT"), 10);
            c = isFinite(c) ? (0, g.$c)() - Math.max(c, 0) : -1;
            g.r("_lact", c, window);
            g.r("_fact", c, window); - 1 == c && g.fh();
            g.I(document, "keydown", g.fh);
            g.I(document, "keyup", g.fh);
            g.I(document, "mousedown", g.fh);
            g.I(document, "mouseup", g.fh);
            a && (b ? g.I(window, "touchmove", function() {
                gh("touchmove", 200)
            }, {
                passive: !0
            }) : (g.I(window, "resize", function() {
                gh("resize", 200)
            }), g.I(window,
                "scroll",
                function() {
                    gh("scroll", 200)
                })));
            new g.Yg(function() {
                gh("mouse", 100)
            });
            g.I(document, "touchstart", g.fh, {
                passive: !0
            });
            g.I(document, "touchend", g.fh, {
                passive: !0
            })
        }
    };
    gh = function(a, b) {
        ih[a] || (ih[a] = !0, g.ah(function() {
            g.fh();
            ih[a] = !1
        }, b))
    };
    g.fh = function() {
        null == g.u("_lact", window) && g.hh();
        var a = (0, g.$c)();
        g.r("_lact", a, window); - 1 == g.u("_fact", window) && g.r("_fact", a, window);
        (a = g.u("ytglobal.ytUtilActivityCallback_")) && a()
    };
    g.jh = function() {
        var a = g.u("_lact", window);
        return null == a ? -1 : Math.max((0, g.$c)() - a, 0)
    };
    g.ph = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {};
        e.eventTimeMs = Math.round(d.timestamp || (0, g.tg)());
        e[a] = b;
        e.context = {
            lastActivityMs: String(d.timestamp ? -1 : g.jh())
        };
        g.Sf("log_sequence_info_on_gel_web") && d.Fe && (a = e.context, b = d.Fe, kh[b] = b in kh ? kh[b] + 1 : 0, a.sequence = {
            index: kh[b],
            groupKey: b
        }, d.Gu && delete kh[d.Fe]);
        (d = d.Of) ? (a = {}, d.videoId ? a.videoId = d.videoId : d.playlistId && (a.playlistId = d.playlistId), wg[d.token] = a, d = vg("log_event", d.token)) : d = vg("log_event");
        d.push(e);
        c && (rg.log_event = new c);
        c = g.Tf("web_logging_max_batch") ||
            100;
        e = (0, g.tg)();
        d.length >= c ? g.Dg() : e - g.lh >= g.mh && (g.Cg(), g.lh = e)
    };
    qh = function(a) {
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) try {
                var f = g.hc(e[0] || ""),
                    k = g.hc(e[1] || "");
                f in b ? g.Aa(b[f]) ? g.Ra(b[f], k) : b[f] = [b[f], k] : b[f] = k
            } catch (m) {
                if ("q" != e[0]) {
                    var l = Error("Error decoding URL component");
                    l.params = {
                        key: e[0],
                        value: e[1]
                    };
                    g.Xf(l)
                }
            }
        }
        return b
    };
    g.rh = function(a) {
        var b = [];
        g.Ta(a, function(c, d) {
            var e = g.gc(d),
                f;
            g.Aa(c) ? f = c : f = [c];
            (0, g.B)(f, function(k) {
                "" == k ? b.push(e) : b.push(e + "=" + g.gc(k))
            })
        });
        return b.join("&")
    };
    g.sh = function(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return qh(a)
    };
    g.uh = function(a, b) {
        return g.th(a, b || {}, !0)
    };
    g.th = function(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = g.sh(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        return g.xc(a, e) + d
    };
    yh = function(a) {
        var b = g.vh;
        a = void 0 === a ? g.u("yt.ads.biscotti.lastId_") || "" : a;
        b = Object.assign(g.wh(b), g.xh(b));
        b.ca_type = "image";
        a && (b.bid = a);
        return b
    };
    g.wh = function(a) {
        var b = {};
        b.dt = g.zh;
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
        g.Jd(b);
        return b
    };
    g.xh = function(a) {
        var b = g.Ld(a.C),
            c = g.Kd(a.C.top),
            d = {};
        return d.bc = g.Rd(), d.bih = c.height, d.biw = c.width, d.brdim = b.join(), d.vis = g.Sd(a.F), d.wgl = !!g.Hd.WebGLRenderingContext, d
    };
    $aa = function() {
        if (!Ah) return null;
        var a = Ah();
        return "open" in a ? a : null
    };
    g.Ch = function(a) {
        switch (g.Bh(a)) {
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
    g.Bh = function(a) {
        return a && "status" in a ? a.status : -1
    };
    aba = function(a, b) {
        b = void 0 === b ? {} : b;
        if (!c) var c = window.location.href;
        var d = g.pc(1, a),
            e = g.qc(a);
        d && e ? (d = c, c = a.match(g.oc), d = d.match(g.oc), c = c[3] == d[3] && c[1] == d[1] && c[4] == d[4]) : c = e ? g.qc(c) == e && (Number(g.pc(4, c)) || null) == (Number(g.pc(4, a)) || null) : !0;
        d = g.Sf("web_ajax_ignore_global_headers_if_set");
        for (var f in Dh) e = g.E(Dh[f]), !e || !c && !Eh(a, f) || d && void 0 !== b[f] || (b[f] = e);
        if (c || Eh(a, "X-YouTube-Utc-Offset")) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        (c || Eh(a, "X-YouTube-Time-Zone")) &&
        (f = "undefined" != typeof Intl ? (new Intl.DateTimeFormat).resolvedOptions().timeZone : null) && (b["X-YouTube-Time-Zone"] = f);
        if (c || Eh(a, "X-YouTube-Ad-Signals")) b["X-YouTube-Ad-Signals"] = g.rh(yh(void 0));
        return b
    };
    cba = function(a) {
        var b = window.location.search,
            c = g.qc(a),
            d = g.nc(g.pc(5, a));
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = g.sh(b),
            f = {};
        (0, g.B)(bba, function(k) {
            e[k] && (f[k] = e[k])
        });
        return g.th(a, f || {}, !1)
    };
    Eh = function(a, b) {
        var c = g.E("CORS_HEADER_WHITELIST") || {},
            d = g.qc(a);
        return d ? (c = c[d]) ? g.Ma(c, b) : !1 : !0
    };
    dba = function(a, b) {
        if (window.fetch && "XML" != b.format) {
            var c = {
                method: b.method || "GET",
                credentials: "same-origin"
            };
            b.headers && (c.headers = b.headers);
            a = Fh(a, b);
            var d = Gh(a, b);
            d && (c.body = d);
            b.withCredentials && (c.credentials = "include");
            var e = !1,
                f;
            fetch(a, c).then(function(k) {
                if (!e) {
                    e = !0;
                    f && g.bg(f);
                    var l = k.ok,
                        m = function(p) {
                            p = p || {};
                            var t = b.context || g.q;
                            l ? b.onSuccess && b.onSuccess.call(t, p, k) : b.onError && b.onError.call(t, p, k);
                            b.Xa && b.Xa.call(t, p, k)
                        };
                    "JSON" == (b.format || "JSON") && (l || 400 <= k.status && 500 > k.status) ? k.json().then(m, function() {
                        m(null)
                    }): m(null)
                }
            });
            b.hq && 0 < b.timeout && (f = g.$f(function() {
                e || (e = !0, g.bg(f), b.hq.call(b.context || g.q))
            }, b.timeout))
        } else g.J(a, b)
    };
    g.J = function(a, b) {
        var c = b.format || "JSON";
        a = Fh(a, b);
        var d = Gh(a, b),
            e = !1,
            f, k = Hh(a, function(l) {
                    if (!e) {
                        e = !0;
                        f && g.bg(f);
                        var m = g.Ch(l),
                            p = null,
                            t = 400 <= l.status && 500 > l.status,
                            y = 500 <= l.status && 600 > l.status;
                        if (m || t || y) p = eba(c, l, b.ob);
                        if (m) a: if (l && 204 == l.status) m = !0;
                            else {
                                switch (c) {
                                    case "XML":
                                        m = 0 == parseInt(p && p.return_code, 10);
                                        break a;
                                    case "RAW":
                                        m = !0;
                                        break a
                                }
                                m = !!p
                            } p = p || {};
                        t = b.context || g.q;
                        m ? b.onSuccess && b.onSuccess.call(t, l, p) : b.onError && b.onError.call(t, l, p);
                        b.Xa && b.Xa.call(t, l, p)
                    }
                }, b.method, d, b.headers, b.responseType,
                b.withCredentials);
        b.Oc && 0 < b.timeout && (f = g.$f(function() {
            e || (e = !0, k.abort(), g.bg(f), b.Oc.call(b.context || g.q, k))
        }, b.timeout));
        return k
    };
    Fh = function(a, b) {
        b.cR && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = g.E("XSRF_FIELD_NAME", void 0),
            d = b.Ta;
        d && (d[c] && delete d[c], a = g.uh(a, d));
        return a
    };
    Gh = function(a, b) {
        var c = g.E("XSRF_FIELD_NAME", void 0),
            d = g.E("XSRF_TOKEN", void 0),
            e = b.postBody || "",
            f = b.ia,
            k = g.E("XSRF_FIELD_NAME", void 0),
            l;
        b.headers && (l = b.headers["Content-Type"]);
        b.Ku || g.qc(a) && !b.withCredentials && g.qc(a) != document.location.hostname || "POST" != b.method || l && "application/x-www-form-urlencoded" != l || b.ia && b.ia[k] || (f || (f = {}), f[c] = d);
        f && "string" === typeof e && (e = g.sh(e), g.cb(e, f), e = b.er && "JSON" == b.er ? JSON.stringify(e) : g.wc(e));
        f = e || f && !g.Wa(f);
        !Ih && f && "POST" != b.method && (Ih = !0, g.Xf(Error("AJAX request with postData should use POST")));
        return e
    };
    eba = function(a, b, c) {
        var d = null;
        switch (a) {
            case "JSON":
                a = (b.fakeResponseText !== undefined) ? b.fakeResponseText : b.responseText;
                b = b.getResponseHeader("Content-Type") || "";
                a && 0 <= b.indexOf("json") && (d = JSON.parse(a));
                break;
            case "XML":
                if (b = (b = b.responseXML) ? Jh(b) : null) d = {}, (0, g.B)(b.getElementsByTagName("*"), function(e) {
                    d[e.tagName] = g.Kh(e)
                })
        }
        c && Lh(d);
        return d
    };
    Lh = function(a) {
        if (g.Ea(a))
            for (var b in a) "html_content" == b || g.ob(b, "_html") ? a[b] = g.cc(a[b], null) : Lh(a[b])
    };
    Jh = function(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    };
    g.Kh = function(a) {
        var b = "";
        (0, g.B)(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    };
    g.Mh = function(a, b) {
        b.method = "POST";
        b.ia || (b.ia = {});
        return g.J(a, b)
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
    Hh = function(a, b, c, d, e, f, k) {
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var m = $aa();
        if (!m) return null;
		preRequest(c, a, d, (info) => {
			function l() {
				4 == (m && "readyState" in m ? m.readyState : 0) && b && onRequest(Yf(b), m)
			}
			
			a = info[1];
			"onloadend" in m ? m.addEventListener("loadend", l, !1) : m.onreadystatechange = l;
			g.Sf("debug_forward_web_query_parameters") && (a = cba(a));
			m.open(info[0], a, !0);
			f && (m.responseType = f);
			k && (m.withCredentials = !0);
			c = "POST" == info[0] && (void 0 === window.FormData || !(info[2] instanceof FormData));
			if (e = aba(a, e))
				for (var p in e) m.setRequestHeader(p, e[p]), "content-type" == p.toLowerCase() && (c = !1);
			c && m.setRequestHeader("Content-Type", info[3]);
			var visitorData = localStorage.getItem('visitorData');
			if (visitorData !== undefined && visitorData !== null)
				m.setRequestHeader("X-Goog-Visitor-Id", visitorData);
			m.send(info[2]);
		});
        return m
    };
    fba = function() {
        for (var a = {}, b = g.ka(Object.entries(g.sh(g.E("DEVICE", "")))), c = b.next(); !c.done; c = b.next()) {
            var d = g.ka(c.value);
            c = d.next().value;
            d = d.next().value;
            "cbrand" === c ? a.deviceMake = d : "cmodel" === c ? a.deviceModel = d : "cbr" === c ? a.browserName = d : "cbrver" === c ? a.browserVersion = d : "cos" === c ? a.osName = d : "cosver" === c ? a.osVersion = d : "cplatform" === c && (a.platform = d)
        }
        return a
    };
    Nh = function() {
        return "INNERTUBE_API_KEY" in g.Mf && "INNERTUBE_API_VERSION" in g.Mf
    };
    Oh = function() {
        return {
            innertubeApiKey: g.E("INNERTUBE_API_KEY", void 0),
            innertubeApiVersion: g.E("INNERTUBE_API_VERSION", void 0),
            fy: g.E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            gy: g.E("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            innertubeContextClientVersion: g.E("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
            iy: g.E("INNERTUBE_CONTEXT_HL", void 0),
            hy: g.E("INNERTUBE_CONTEXT_GL", void 0),
            jy: g.E("INNERTUBE_HOST_OVERRIDE", void 0) || "",
            ky: !!g.E("INNERTUBE_USE_THIRD_PARTY_AUTH", !1)
        }
    };
    Ph = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {
            "X-Goog-Visitor-Id": c.visitorData || g.E("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        (b = c.WQ || g.E("AUTHORIZATION")) || (a ? b = "Bearer " + g.u("gapi.auth.getToken")().UQ : b = Od([]));
        b && (d.Authorization = b, d["X-Goog-AuthUser"] = g.E("SESSION_INDEX", 0), g.Sf("pageid_as_header_web") && (d["X-Goog-PageId"] = g.E("DELEGATED_SESSION_ID")));
        return d
    };
    Qh = function(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = Od();
        if (b) {
            var c = new af;
            c.update(g.E("INNERTUBE_API_KEY", void 0));
            c.update(b);
            a.hash = Mc(c.digest(), 3)
        }
        return a
    };
    g.Sh = function(a, b, c, d) {
        g.Rh.set("" + a, b, {
            wl: c,
            path: "/",
            domain: void 0 === d ? "youtube.com" : d,
            secure: !1
        })
    };
    g.Th = function(a, b, c) {
        g.Rh.remove("" + a, void 0 === b ? "/" : b, void 0 === c ? "youtube.com" : c)
    };
    g.Uh = function(a) {
        var b;
        (b = g.Kf(a)) || (a = new Ff(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null);
        this.C = (a = b) ? new g.yf(a) : null;
        this.F = document.domain || window.location.hostname
    };
    gba = function(a, b, c, d) {
        if (d) return null;
        d = Vh.get("nextId", !0) || 1;
        var e = Vh.get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: Qh(c),
            requestTime: Math.round((0, g.tg)())
        };
        Vh.set("nextId", d + 1, 86400, !0);
        Vh.set("requests", e, 86400, !0);
        return d
    };
    Wh = function(a) {
        var b = Vh.get("requests", !0) || {};
        delete b[a];
        Vh.set("requests", b, 86400, !0)
    };
    Xh = function(a) {
        var b = Vh.get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round((0, g.tg)()) - d.requestTime)) {
                    var e = d.authState,
                        f = Qh(Ph(!1));
                    g.Za(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round((0, g.tg)())), g.Ag(a, d.method, e, {}));
                    delete b[c]
                }
            }
            Vh.set("requests", b, 86400, !0)
        }
    };
    g.Yh = function(a) {
        var b = this;
        this.C = null;
        a ? this.C = a : Nh() && (this.C = Oh());
        g.$g(function() {
            Xh(b)
        }, 5E3)
    };
    g.ug = function(a) {
        a = a.C || Oh();
        a = {
            client: {
                hl: a.iy,
                gl: a.hy,
                clientName: a.gy,
                clientVersion: a.innertubeContextClientVersion,
                configInfo: a.fy
            }
        };
        var b = window.devicePixelRatio;
        b && 1 != b && (a.client.screenDensityFloat = String(b));
        b = g.E("EXPERIMENTS_TOKEN", "");
        "" !== b && (a.client.experimentsToken = b);
        b = [];
        var c = g.E("EXPERIMENTS_FORCED_FLAGS", {});
        for (d in c) b.push({
            key: d,
            value: String(c[d])
        });
        var d = g.E("EXPERIMENT_FLAGS", {});
        for (var e in d) e.startsWith("force_") && void 0 === c[e] && b.push({
            key: e,
            value: String(d[e])
        });
        0 < b.length &&
            (a.request = {
                internalExperimentFlags: b
            });
        g.E("DELEGATED_SESSION_ID") && !g.Sf("pageid_as_header_web") && (a.user = {
            onBehalfOfUser: g.E("DELEGATED_SESSION_ID")
        });
        g.Sf("enable_device_forwarding_from_xhr_client") && (a.client = Object.assign(a.client, fba()));
        return {
            context: a
        }
    };
    g.Ag = function(a, b, c, d) {
        !g.E("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && g.Zf(Error("Missing VISITOR_DATA when sending innertube request."));
        var e = {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                ia: c,
                er: "JSON",
                Oc: function() {
                    d.Oc()
                },
                hq: d.Oc,
                onSuccess: function(A, G) {
                    if (d.onSuccess) d.onSuccess(G)
                },
                Zi: function(A) {
                    if (d.onSuccess) d.onSuccess(A)
                },
                onError: function(A, G) {
                    if (d.onError) d.onError(G)
                },
                gq: function(A) {
                    if (d.onError) d.onError(A)
                },
                timeout: d.timeout,
                withCredentials: !0
            },
            f = "",
            k = a.C.jy;
        k && (f = k);
        k = a.C.ky || !1;
        var l = Ph(k, f, d);
        Object.assign(e.headers, l);
        e.headers.Authorization && !f && (e.headers["x-origin"] = window.location.origin);
        var m = g.uh("" + f + ("/youtubei/" + a.C.innertubeApiVersion + "/" + b), {
                alt: "json",
                key: a.C.innertubeApiKey
            }),
            p;
        if (d.retry && g.Sf("retry_web_logging_batches") && "www.youtube-nocookie.com" != f && (p = gba(b, c, l, k))) {
            var t = e.onSuccess,
                y = e.Zi;
            e.onSuccess = function(A, G) {
                Wh(p);
                t(A, G)
            };
            c.Zi = function(A, G) {
                Wh(p);
                y(A, G)
            }
        }
        try {
            g.Sf("use_fetch_for_op_xhr") ? dba(m, e) : g.Mh(m, e)
        } catch (A) {
            if ("InvalidAccessError" == A) p && (Wh(p), p = 0), g.Zf(Error("An extension is blocking network request."));
            else throw A;
        }
        p && g.$g(function() {
            Xh(a)
        }, 5E3)
    };
    g.Zh = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = g.Yh;
        g.E("ytLoggingEventsDefaultDisabled", !1) && g.Yh == g.Yh && (d = null);
        g.ph(a, b, d, c)
    };
    g.$h = function() {
        g.Sf("log_web_meta") && Vaa().forEach(function(a) {
            g.Zh("delayedEventMetricCaptured", a)
        })
    };
    g.ai = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = Error.call(this, a);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.args = [].concat(g.la(c))
    };
    g.bi = function(a) {
        var b = g.u("yt.logging.errors.log");
        b ? b(a, "ERROR", void 0, void 0, !1, void 0) : (b = Pf(), b.push([a, "ERROR", void 0, void 0, !1, void 0]), g.Nf("ERRORS", b))
    };
    g.ci = function(a) {
        var b = g.u("yt.logging.errors.log");
        b ? b(a, "WARNING", void 0, void 0, !1, void 0) : (b = Pf(), b.push([a, "WARNING", void 0, void 0, !1, void 0]), g.Nf("ERRORS", b))
    };
    g.di = function() {
        this.F = !1;
        this.C = null
    };
    ei = function(a, b, c, d) {
        if (d) try {
            a.C = new window.botguard.bg(b, c ? function() {
                return c(b)
            } : g.xa)
        } catch (e) {
            g.ci(e)
        } else {
            try {
                a.C = new window.botguard.bg(b)
            } catch (e) {
                g.ci(e)
            }
            c && c(b)
        }
    };
    g.fi = function(a, b) {
        b = void 0 === b ? {} : b;
        return a.C ? a.C.invoke(void 0, void 0, b) : null
    };
    hba = function() {
        return parseInt(g.E("DCLKSTAT", 0), 10)
    };
    iba = function() {
        return g.gi.Nd()
    };
    jba = function(a) {
        a = void 0 === a ? {} : a;
        return g.fi(g.gi, a)
    };
    hi = function(a) {
        this.D = void 0 === a ? null : a;
        this.F = 0;
        this.C = null
    };
    g.ii = function(a) {
        var b = new hi;
        a = void 0 === a ? null : a;
        b.F = 2;
        b.C = void 0 === a ? null : a;
        return b
    };
    g.ji = function(a) {
        var b = new hi;
        a = void 0 === a ? null : a;
        b.F = 1;
        b.C = void 0 === a ? null : a;
        return b
    };
    ki = function() {
        g.C.call(this);
        this.C = []
    };
    li = function(a) {
        a = a || {};
        var b = {},
            c = {};
        this.url = a.url || "";
        this.args = a.args || g.$a(b);
        this.assets = a.assets || {};
        this.attrs = a.attrs || g.$a(c);
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    };
    g.mi = function(a) {
        a instanceof li || (a = new li(a));
        return a
    };
    oi = function() {
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
                b = (0, g.$c)();
                for (c = 0; c < b % 23; c++) d[a] = Math.random();
                d[a] = Math.floor(256 * Math.random())
            }
            if (ni)
                for (a = 1, b = 0; b < ni.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ ni.charCodeAt(b), a++
        }
        a = [];
        for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] &
            63));
        return a.join("")
    };
    g.qi = function(a) {
        a && g.ph("foregroundHeartbeatScreenAssociated", {
            clientDocumentNonce: pi,
            clientScreenNonce: a
        }, g.Yh)
    };
    g.ri = function(a) {
        this.C = a
    };
    g.si = function(a) {
        var b = {};
        void 0 !== a.C.trackingParams ? b.trackingParams = a.C.trackingParams : (b.veType = a.C.veType, void 0 !== a.C.veCounter && (b.veCounter = a.C.veCounter), void 0 !== a.C.elementIndex && (b.elementIndex = a.C.elementIndex));
        void 0 !== a.C.dataElement && (b.dataElement = g.si(a.C.dataElement));
        void 0 !== a.C.youtubeData && (b.youtubeData = a.C.youtubeData);
        return b
    };
    ti = function(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "client-screen-nonce" : "client-screen-nonce." + a
    };
    ui = function(a) {
        a = void 0 === a ? 0 : a;
        return 0 == a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a
    };
    vi = function(a) {
        return g.E(ui(void 0 === a ? 0 : a), void 0)
    };
    g.wi = function() {
        var a = vi(0),
            b;
        a ? b = new g.ri({
            veType: a,
            youtubeData: void 0
        }) : b = null;
        return b
    };
    xi = function() {
        var a = g.E("csn-to-ctt-auth-info");
        a || (a = {}, g.Nf("csn-to-ctt-auth-info", a));
        return a
    };
    g.yi = function(a) {
        a = void 0 === a ? 0 : a;
        var b = g.E(ti(a));
        if (!b && !g.E("USE_CSN_FALLBACK", !0)) return null;
        b || 0 != a || (g.Sf("kevlar_client_side_screens") || g.Sf("c3_client_side_screens") ? b = "UNDEFINED_CSN" : b = g.E("EVENT_ID"));
        return b ? b : null
    };
    kba = function(a, b, c) {
        var d = xi();
        (c = g.yi(c)) && delete d[c];
        b && (d[a] = b)
    };
    g.zi = function(a) {
        return xi()[a]
    };
    g.Ai = function(a, b, c, d) {
        c = void 0 === c ? 0 : c;
        if (a !== g.E(ti(c)) || b !== g.E(ui(c)))
            if (kba(a, d, c), g.Nf(ti(c), a), g.Nf(ui(c), b), 0 == c || g.Sf("web_screen_associated_all_layers")) b = function() {
                setTimeout(function() {
                    g.qi(a)
                }, 0)
            }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b()
    };
    g.Bi = function(a, b) {
        this.version = a;
        this.args = b
    };
    g.Ci = function(a, b) {
        this.topic = a;
        this.C = b
    };
    g.Ei = function(a, b) {
        var c = Di();
        c && c.publish.call(c, a.toString(), a, b)
    };
    g.Ii = function(a, b, c) {
        var d = Di();
        if (!d) return 0;
        var e = d.subscribe(a.toString(), function(f, k) {
            var l = g.u("ytPubsub2Pubsub2SkipSubKey");
            l && l == e || (l = function() {
                if (Fi[e]) try {
                    if (k && a instanceof g.Ci && a != f) try {
                        var m = a.C,
                            p = k;
                        if (!p.args || !p.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                        try {
                            if (!m.Je) {
                                var t = new m;
                                m.Je = t.version
                            }
                            var y = m.Je
                        } catch (A) {}
                        if (!y || p.version != y) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                        try {
                            k = Reflect.construct(m,
                                g.Qa(p.args))
                        } catch (A) {
                            throw A.message = "yt.pubsub2.Data.deserialize(): " + A.message, A;
                        }
                    } catch (A) {
                        throw A.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + a.toString() + ": " + A.message, A;
                    }
                    b.call(c || window, k)
                } catch (A) {
                    g.Xf(A)
                }
            }, Gi[a.toString()] ? g.eh() ? g.ah(l) : g.$f(l, 0) : l())
        });
        Fi[e] = !0;
        Hi[a.toString()] || (Hi[a.toString()] = []);
        Hi[a.toString()].push(e);
        return e
    };
    nba = function() {
        var a = lba,
            b = g.Ii(mba, function(c) {
                a.apply(void 0, arguments);
                g.Ji(b)
            }, void 0);
        return b
    };
    g.Ji = function(a) {
        var b = Di();
        b && ("number" === typeof a && (a = [a]), (0, g.B)(a, function(c) {
            b.unsubscribeByKey(c);
            delete Fi[c]
        }))
    };
    Di = function() {
        return g.u("ytPubsub2Pubsub2Instance")
    };
    Ki = function(a) {
        g.Bi.call(this, 1, arguments);
        this.csn = a
    };
    g.Ni = function(a, b, c) {
        Li.push({
            payloadName: a,
            payload: b,
            options: c
        });
        Mi || (Mi = nba())
    };
    lba = function(a) {
        if (Li) {
            for (var b = g.ka(Li), c = b.next(); !c.done; c = b.next()) c = c.value, c.payload && (c.payload.csn = a.csn, g.ph(c.payloadName, c.payload, null, c.options));
            Li.length = 0
        }
        Mi = 0
    };
    g.Ri = function(a, b, c) {
        var d = g.Sf("use_default_events_client") ? void 0 : g.Yh;
        (0, g.B)(b, function(e) {
            var f = c;
            f = void 0 === f ? !1 : f;
            e = {
                csn: a,
                ve: g.si(e),
                eventType: f ? 16 : 8
            };
            f = {
                Of: g.zi(a),
                Fe: a,
                Gu: f
            };
            "UNDEFINED_CSN" == a ? g.Ni("visualElementHidden", e, f) : d ? g.ph("visualElementHidden", e, d, f) : g.Zh("visualElementHidden", e, f)
        })
    };
    Si = function() {
        var a = g.wi(),
            b = g.yi();
        b && a && g.Ri(b, [a], !0)
    };
    g.Wi = function(a) {
        if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND" == a || "FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND" == a) {
            if (Ti == a) return;
            Ti = a
        }
        var b = 9E4 + 2E3 * Math.random();
        if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL" != a || !(g.jh() > b) && "visible" == g.Kg()) {
            b = -1;
            g.Ui && (b = Math.round((0, g.tg)() - g.Ui));
            var c = String;
            var d = g.u("_fact", window);
            d = null == d || -1 == d ? -1 : Math.max((0, g.$c)() - d, 0);
            a = {
                firstActivityMs: c(d),
                clientDocumentNonce: pi,
                index: String(Vi),
                lastEventDeltaMs: String(b),
                trigger: a
            };
            g.ph("foregroundHeartbeat",
                a, g.Yh);
            g.r("_fact", -1, window);
            Vi++;
            g.Ui = (0, g.tg)()
        }
    };
    g.Xi = function(a, b, c, d, e) {
        this.name = a;
        this.deps = b || [];
        this.page = c || "";
        this.L = d ? Yf(d) : null;
        this.H = e ? Yf(e) : null;
        this.G = [];
        this.C = this.F = 0
    };
    g.Yi = function(a) {
        g.bh(a.F);
        a.F = g.ah((0, g.v)(a.init, a))
    };
    g.aj = function(a) {
        a.name in Zi && $i(a.name);
        Zi[a.name] = {
            reqs: [],
            disable: (0, g.v)(a.disable, a)
        };
        (0, g.B)(a.deps, function(b) {
            if (!(b in Zi)) throw Error("Module " + b + " required by " + a.name);
            Zi[b].reqs.push(a.name)
        });
        a.enable()
    };
    $i = function(a) {
        if (a in Zi) {
            var b = Zi[a];
            (0, g.B)(b.reqs, function(c) {
                $i(c)
            });
            try {
                b.disable()
            } catch (c) {}
            delete Zi[a]
        }
    };
    cj = function(a) {
        Lf(g.bj, arguments)
    };
    g.dj = function(a) {
        return a in g.bj
    };
    ej = function(a) {
        Lf(g.bj, arguments)
    };
    g.fj = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        a && (c && (c = g.Qb, c = !(c && 0 <= c.toLowerCase().indexOf("cobalt"))), c ? a && (a = g.Eb(g.Ib(a)), "about:invalid#zClosurez" === a ? a = "" : (a = g.$b(g.bc(a)), a = g.gc(g.of(a))), g.pb(a) || (a = g.nd("IFRAME", {
            src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
            style: "display:none"
        }), g.td(a).body.appendChild(a))) : e ? Hh(a, b, "POST", e, d) : g.E("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || d ? Hh(a, b, "GET", "", d) : oba(a, b) || pba(a, b))
    };
    oba = function(a, b) {
        if (!Qf("web_use_beacon_api_for_ad_click_server_pings")) return !1;
        if (Qf("use_sonic_library_for_v4_support")) try {
            var c, d = g.nc(g.pc(5, a));
            if (!(c = !(d && d.endsWith("/aclk")))) {
                var e = new kaa({
                    url: a
                });
                c = !(e.H ? e.D && e.C || e.G : e.F)
            }
            if (c) return !1
        } catch (f) {
            return g.Zf(Error("ClickUrl library throws error, url = " + a)), !1
        } else if (c = g.nc(g.pc(5, a)), !c || -1 == c.indexOf("/aclk") || "1" !== g.Ac(a, "ae") || "1" !== g.Ac(a, "act")) return !1;
        return gj(a) ? (b && b(), !0) : !1
    };
    gj = function(a, b) {
        try {
            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, void 0 === b ? "" : b)) return !0
        } catch (c) {}
        return !1
    };
    pba = function(a, b) {
        var c = new Image,
            d = "" + qba++;
        hj[d] = c;
        c.onload = c.onerror = function() {
            b && hj[d] && b();
            delete hj[d]
        };
        c.src = a
    };
    g.ij = function(a, b) {
        a = a || "";
        var c = a.match(rba);
        spf.style.load(a, c ? c[1] : "", b)
    };
    lj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!jj(a) || c.some(function(e) {
                return !jj(e)
            })) throw Error("Only objects may be merged.");
        c = g.ka(c);
        for (d = c.next(); !d.done; d = c.next()) kj(a, d.value);
        return a
    };
    kj = function(a, b) {
        for (var c in b)
            if (jj(b[c])) {
                if (c in a && !jj(a[c])) throw Error("Cannot merge an object into a non-object.");
                c in a || (a[c] = {});
                kj(a[c], b[c])
            } else if (mj(b[c])) {
            if (c in a && !mj(a[c])) throw Error("Cannot merge an array into a non-array.");
            c in a || (a[c] = []);
            nj(a[c], b[c])
        } else a[c] = b[c];
        return a
    };
    nj = function(a, b) {
        for (var c = g.ka(b), d = c.next(); !d.done; d = c.next()) d = d.value, jj(d) ? a.push(kj({}, d)) : mj(d) ? a.push(nj([], d)) : a.push(d);
        return a
    };
    jj = function(a) {
        return "object" === typeof a && !Array.isArray(a)
    };
    mj = function(a) {
        return "object" === typeof a && Array.isArray(a)
    };
    g.oj = function(a, b, c) {
        var d = void 0 === d ? !0 : d;
        var e = g.E("VALID_SESSION_TEMPDATA_DOMAINS", []),
            f = g.qc(window.location.href);
        f && e.push(f);
        f = g.qc(a);
        if (g.Ma(e, f) || !f && g.nb(a, "/"))
            if (g.Sf("autoescape_tempdata_url") && (e = document.createElement("a"), g.dc(e, a), a = e.href), a && (a = g.rc(a), e = a.indexOf("#"), a = 0 > e ? a : a.substr(0, e))) d && !b.csn && (b.itct || b.ved) && (b = Object.assign({
                csn: g.yi()
            }, b)), c ? (c = parseInt(c, 10), isFinite(c) && 0 < c && (d = "ST-" + g.lc(a).toString(36), b = b ? g.wc(b) : "", g.Sh(d, b, c || 5))) : (c = b, b = "ST-" + g.lc(a).toString(36),
                c = c ? g.wc(c) : "", g.Sh(b, c, 5))
    };
    g.pj = function(a) {
        var b = void 0 === b ? {} : b;
        var c = void 0 === c ? "" : c;
        var d = void 0 === d ? window : d;
        g.fc(d.location, g.xc(a, b) + c)
    };
    g.qj = function(a, b) {
        b && g.oj(a, b);
        (window.ytspf || {}).enabled ? spf.navigate(a) : g.pj(a)
    };
    g.rj = function(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? !1 : c;
        var d = g.E("EVENT_ID");
        d && (b.ei || (b.ei = d));
        b && g.oj(a, b);
        if (c) return !1;
        g.qj(a);
        return !0
    };
    vj = function(a, b, c, d) {
        g.C.call(this);
        var e = this;
        this.L = this.Ya = a;
        this.ha = b;
        this.M = !1;
        this.api = {};
        this.na = this.N = null;
        this.Y = new g.rf;
        g.Ad(this, this.Y);
        this.G = {};
        this.la = this.qa = this.F = this.nb = this.C = null;
        this.T = !1;
        this.H = this.J = null;
        this.ib = {};
        this.Pd = ["onReady"];
        this.kb = null;
        this.sb = NaN;
        this.W = {};
        this.D = d;
        sj(this);
        this.Jh("WATCH_LATER_VIDEO_ADDED", this.iD.bind(this));
        this.Jh("WATCH_LATER_VIDEO_REMOVED", this.jD.bind(this));
        this.Jh("onAdAnnounce", this.Ct.bind(this));
        this.Hb = new ki(this);
        g.Ad(this, this.Hb);
        this.aa = 0;
        c ? this.aa = g.$f(function() {
            e.loadNewVideoConfig(c)
        }, 0) : d && (tj(this), uj(this))
    };
    tj = function(a) {
        var b;
        a.D ? b = a.D.rootElementId : b = a.C.attrs.id;
        a.F = b || a.F;
        "video-player" == a.F && (a.F = a.ha, a.C.attrs.id = a.ha);
        a.L.id == a.F && (a.F += "-player", a.C.attrs.id = a.F)
    };
    wj = function(a) {
        a.C && !a.C.loaded && (a.C.loaded = !0, "0" != a.C.args.autoplay ? a.api.loadVideoByPlayerVars(a.C.args) : a.api.cueVideoByPlayerVars(a.C.args))
    };
    zj = function(a) {
        var b = !0,
            c = xj(a);
        c && a.C && (a = yj(a), b = g.F(c, "version") === a);
        return b && !!g.u("yt.player.Application.create")
    };
    uj = function(a) {
        if (!a.qb() && !a.T) {
            var b = zj(a);
            if (b && "html5" == (xj(a) ? "html5" : null)) a.la = "html5", a.M || Aj(a);
            else if (Bj(a), a.la = "html5", b && a.H) a.Ya.appendChild(a.H), Aj(a);
            else {
                a.C && (a.C.loaded = !0);
                var c = !1;
                a.J = function() {
                    c = !0;
                    if (a.D) var d = a.D.serializedExperimentFlags;
                    else a.C && a.C.args && (d = a.C.args.fflags);
                    d = "true" == qh(d || "").player_bootstrap_method ? g.u("yt.player.Application.createAlternate") || g.u("yt.player.Application.create") : g.u("yt.player.Application.create");
                    var e = a.C ? a.C.clone() : void 0;
                    d(a.Ya,
                        e, a.D);
                    Aj(a)
                };
                a.T = !0;
                b ? a.J() : (g.mg(yj(a), a.J), (b = a.D ? a.D.cssUrl : a.C.assets.css) && g.ij(b), Cj(a) && !c && g.r("yt.player.Application.create", null, void 0))
            }
        }
    };
    xj = function(a) {
        var b = g.z(a.F);
        !b && a.L && a.L.querySelector && (b = a.L.querySelector("#" + a.F));
        return b
    };
    Aj = function(a) {
        if (!a.qb()) {
            var b = xj(a),
                c = !1;
            b && b.getApiInterface && b.getApiInterface() && (c = !0);
            c ? (a.T = !1, b.isNotServable && a.C && b.isNotServable(a.C.args.video_id) || sba(a)) : a.sb = g.$f(function() {
                Aj(a)
            }, 50)
        }
    };
    sba = function(a) {
        sj(a);
        a.M = !0;
        var b = xj(a);
        b.addEventListener && (a.N = Dj(a, b, "addEventListener"));
        b.removeEventListener && (a.na = Dj(a, b, "removeEventListener"));
        var c = b.getApiInterface();
        c = c.concat(b.getInternalApiInterface());
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            a.api[e] || (a.api[e] = Dj(a, b, e))
        }
        for (var f in a.G) a.N(f, a.G[f]);
        wj(a);
        a.qa && a.qa(a.api);
        a.Y.oa("onReady", a.api)
    };
    Dj = function(a, b, c) {
        var d = b[c];
        return function() {
            try {
                return a.kb = null, d.apply(b, arguments)
            } catch (e) {
                "sendAbandonmentPing" != c && (e.params = c, a.kb = e, g.Zf(e))
            }
        }
    };
    sj = function(a) {
        a.M = !1;
        if (a.na)
            for (var b in a.G) a.na(b, a.G[b]);
        for (var c in a.W) g.bg(parseInt(c, 10));
        a.W = {};
        a.N = null;
        a.na = null;
        for (var d in a.api) a.api[d] = null;
        a.api.addEventListener = a.Jh.bind(a);
        a.api.removeEventListener = a.RF.bind(a);
        a.api.destroy = a.dispose.bind(a);
        a.api.getLastError = a.gv.bind(a);
        a.api.getPlayerType = a.tv.bind(a);
        a.api.getCurrentVideoConfig = a.Zu.bind(a);
        a.api.loadNewVideoConfig = a.loadNewVideoConfig.bind(a);
        a.api.isReady = a.dz.bind(a)
    };
    Ej = function(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.ib[b]) return a.ib[b];
            c = function() {
                var d = g.u(b);
                d && d.apply(g.q, arguments)
            };
            a.ib[b] = c
        }
        return c ? c : null
    };
    tba = function(a, b) {
        var c = "ytPlayer" + b + a.ha;
        a.G[b] = c;
        g.q[c] = function(d) {
            var e = g.$f(function() {
                a.qb() || (a.Y.oa(b, d), g.Xa(a.W, String(e)))
            }, 0);
            g.Ya(a.W, String(e), !0)
        };
        return c
    };
    Bj = function(a) {
        a.cancel();
        sj(a);
        a.la = null;
        a.C && (a.C.loaded = !1);
        var b = xj(a);
        b && (zj(a) || !Cj(a) ? a.H = b : (b && b.destroy && b.destroy(), a.H = null));
        g.rd(a.Ya)
    };
    Cj = function(a) {
        return a.C && a.C.args && a.C.args.fflags ? -1 != a.C.args.fflags.indexOf("player_destroy_old_version=true") : !1
    };
    yj = function(a) {
        return a.D ? a.D.jsUrl : a.C.assets.js
    };
    g.Hj = function(a, b) {
        var c = void 0 === c ? !0 : c;
        a = "string" === typeof a ? g.gd(a) : a;
        var d = g.Fj + "_" + g.Ga(a),
            e = g.Gj[d];
        if (e && c) return b && b.args && b.args.fflags && b.args.fflags.includes("web_player_remove_playerproxy=true") ? e.api.loadVideoByPlayerVars(b.args || null) : e.loadNewVideoConfig(b), e.api;
        e = new vj(a, d, b, void 0);
        g.Gj[d] = e;
        g.H("player-added", e.api);
        g.yd(e, g.w(uba, e));
        return e.api
    };
    uba = function(a) {
        delete g.Gj[a.getId()]
    };
    g.Ij = function(a) {
        if (!a) return null;
        var b = g.Fj + "_" + g.Ga(a),
            c = g.Gj[b];
        c || (c = new vj(a, b), g.Gj[b] = c);
        return c.api
    };
    g.Jj = function(a) {
        return g.Ij(document.getElementById(a))
    };
    g.Lj = function(a, b) {
        var c = {};
        c.key = a;
        c.value = b;
        return Kj().then(function(d) {
            return new Promise(function(e, f) {
                try {
                    var k = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
                    k.onsuccess = function() {
                        e()
                    };
                    k.onerror = function() {
                        f()
                    }
                } catch (l) {
                    f(l)
                }
            })
        })
    };
    g.Mj = function(a) {
        var b = new g.ai("Error accessing DB");
        return Kj().then(function(c) {
            return new Promise(function(d, e) {
                try {
                    var f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
                    f.onsuccess = function() {
                        var k = f.result;
                        d(k ? k.value : null)
                    };
                    f.onerror = function() {
                        b.params = {
                            key: a,
                            source: "onerror"
                        };
                        e(b)
                    }
                } catch (k) {
                    b.params = {
                        key: a,
                        thrownError: String(k)
                    }, e(b)
                }
            })
        }, function() {
            return null
        })
    };
    Kj = function() {
        return Nj ? Promise.resolve(Nj) : new Promise(function(a, b) {
            var c = self.indexedDB.open("swpushnotificationsdb");
            c.onerror = b;
            c.onsuccess = function() {
                var d = c.result;
                if (d.objectStoreNames.contains("swpushnotificationsstore")) Nj = d, a(Nj);
                else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Kj()
            };
            c.onupgradeneeded = vba
        })
    };
    vba = function(a) {
        a = a.target.result;
        a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
        a.createObjectStore("swpushnotificationsstore", {
            keyPath: "key"
        })
    };
    Oj = function(a, b) {
        g.Bi.call(this, 1, arguments)
    };
    Pj = function(a, b) {
        g.Bi.call(this, 1, arguments)
    };
    wba = function() {
        this.timing = {};
        this.clearResourceTimings = function() {};
        this.webkitClearResourceTimings = function() {};
        this.mozClearResourceTimings = function() {};
        this.msClearResourceTimings = function() {};
        this.oClearResourceTimings = function() {}
    };
    Rj = function(a) {
        var b = Qj(a);
        if (b.aft) return b.aft;
        a = g.E((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = a.length, d = 0; d < c; d++) {
            var e = b[a[d]];
            if (e) return e
        }
        return NaN
    };
    Uj = function() {
        var a;
        if (g.Sf("csi_use_performance_navigation_timing")) {
            var b, c, d, e = null === (d = null === (c = null === (b = null === (a = null === Sj || void 0 === Sj ? void 0 : Sj.getEntriesByType) || void 0 === a ? void 0 : a.call(Sj, "navigation")) || void 0 === b ? void 0 : b[0]) || void 0 === c ? void 0 : c.toJSON) || void 0 === d ? void 0 : d.call(c);
            e ? (e.requestStart = Tj(e.requestStart), e.responseEnd = Tj(e.responseEnd), e.redirectStart = Tj(e.redirectStart), e.redirectEnd = Tj(e.redirectEnd), e.domainLookupEnd = Tj(e.domainLookupEnd), e.connectStart = Tj(e.connectStart),
                e.connectEnd = Tj(e.connectEnd), e.responseStart = Tj(e.responseStart), e.secureConnectionStart = Tj(e.secureConnectionStart), e.domainLookupStart = Tj(e.domainLookupStart), e.isPerformanceNavigationTiming = !0, a = e) : a = Sj.timing
        } else a = Sj.timing;
        return a
    };
    Vj = function() {
        return g.Sf("csi_use_time_origin") && Sj.timeOrigin ? Math.floor(Sj.timeOrigin) : Sj.timing.navigationStart
    };
    Tj = function(a) {
        return Math.round(Vj() + a)
    };
    Wj = function(a) {
        g.r("ytglobal.timingready_", a, void 0)
    };
    Xj = function(a) {
        return !!g.u("yt.timing." + (a || "") + "pingSent_")
    };
    Yj = function(a, b) {
        g.r("yt.timing." + (b || "") + "pingSent_", a, void 0)
    };
    ak = function(a) {
        return g.u("ytcsi." + (a || "") + "data_") || Zj(a)
    };
    bk = function(a) {
        a = ak(a);
        a.info || (a.info = {});
        return a.info
    };
    Qj = function(a) {
        a = ak(a);
        a.tick || (a.tick = {});
        return a.tick
    };
    ck = function(a) {
        var b = ak(a).nonce;
        b || (b = oi(), ak(a).nonce = b);
        return b
    };
    Zj = function(a) {
        var b = {
            tick: {},
            info: {}
        };
        g.r("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    };
    ek = function(a) {
        var b = Qj(a || ""),
            c = Rj(a);
        c && !dk && (g.Ei(xba, new Oj(Math.round(c - b._start), a)), dk = !0)
    };
    yba = function() {
        if (Sj.getEntriesByType) {
            var a = Sj.getEntriesByType("paint");
            if (a = g.Ka(a, function(b) {
                    return "first-paint" === b.name
                })) return Tj(a.startTime)
        }
        a = Sj.timing;
        return a.fz ? Math.max(0, a.fz) : 0
    };
    fk = function() {
        var a = g.u("ytcsi.debug");
        a || (a = [], g.r("ytcsi.debug", a, void 0), g.r("ytcsi.reference", {}, void 0));
        return a
    };
    hk = function(a) {
        a = a || "";
        var b = gk();
        if (b[a]) return b[a];
        var c = fk(),
            d = {
                timerName: a,
                info: {},
                tick: {}
            };
        c.push(d);
        return b[a] = d
    };
    gk = function() {
        var a = g.u("ytcsi.reference");
        if (a) return a;
        fk();
        return g.u("ytcsi.reference")
    };
    ik = function() {
        this.C = 0
    };
    jk = function() {
        ik.instance || (ik.instance = new ik);
        return ik.instance
    };
    lk = function(a, b) {
        kk[b] = kk[b] || {
            count: 0
        };
        var c = kk[b];
        c.count++;
        c.time = (0, g.tg)();
        a.C || (a.C = g.$g(function() {
            var d = (0, g.tg)(),
                e;
            for (e in kk) kk[e] && 6E4 < d - kk[e].time && delete kk[e];
            a && (a.C = 0)
        }, 5E3));
        return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new g.ai("CSI data exceeded logging limit with key", b), 0 === b.indexOf("info") ? g.ci(c) : g.bi(c)), !0) : !1
    };
    mk = function(a) {
        return !!g.E("FORCE_CSI_ON_GEL", !1) || g.Sf("csi_on_gel") || !!ak(a).useGel
    };
    ok = function(a, b, c) {
        var d = nk(c);
        d.gelTicks && (d.gelTicks["tick_" + a] = !0);
        c || b || (0, g.tg)();
        return mk(c) ? (hk(c || "").tick[a] = b || (0, g.tg)(), d = ck(c), "_start" === a ? (a = jk(), lk(a, "baseline_" + d) || g.Zh("latencyActionBaselined", {
            clientActionNonce: d
        }, {
            timestamp: b
        })) : jk().tick(a, d, b), ek(c), !0) : !1
    };
    rk = function(a, b, c) {
        c = nk(c);
        if (c.gelInfos) c.gelInfos["info_" + a] = !0;
        else {
            var d = {};
            c.gelInfos = (d["info_" + a] = !0, d)
        }
        if (a in pk) {
            c = pk[a];
            g.Ma(zba, c) && (b = !!b);
            a in qk && "string" === typeof b && (b = qk[a] + b.toUpperCase());
            a = c.split(".");
            d = c = {};
            for (var e = 0; e < a.length - 1; e++) {
                var f = a[e];
                d[f] = {};
                d = d[f]
            }
            d[a[a.length - 1]] = b;
            return lj({}, c)
        }
        g.Ma(Aba, a) || g.ci(new g.ai("Unknown label logged with GEL CSI", a))
    };
    nk = function(a) {
        a = ak(a);
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
    sk = function(a) {
        a = nk(a);
        "gelInfos" in a || (a.gelInfos = {});
        return a.gelInfos
    };
    uk = function(a, b, c) {
        null !== b && (bk(c)[a] = b, mk(c) ? (a = rk(a, b, c)) && tk(a, c) : hk(c || "").info[a] = b)
    };
    tk = function(a, b) {
        if (mk(b)) {
            var c = hk(b || "");
            lj(c.info, a);
            lj(sk(b), a);
            c = ck(b);
            jk().info(a, c)
        }
    };
    vk = function() {
        Zj(void 0);
        Bba();
        Yj(!1, void 0);
        g.E("TIMING_ACTION") && g.Nf("PREVIOUS_ACTION", g.E("TIMING_ACTION"));
        g.Nf("TIMING_ACTION", "")
    };
    Fba = function() {
        var a = g.E("TIMING_ACTION", void 0),
            b = g.E("TIMING_AFT_KEYS");
        hk("").info.actionType = a;
        b && g.Nf("TIMING_AFT_KEYS", b);
        g.Nf("TIMING_ACTION", a);
        a = g.E("TIMING_INFO", {});
        for (var c in a) uk(c, a[c]);
        uk("is_nav", 1);
        (c = g.yi()) && uk("csn", c);
        (c = g.E("PREVIOUS_ACTION", void 0)) && !mk() && uk("pa", c);
        c = bk();
        a = g.E("CLIENT_PROTOCOL");
        b = g.E("CLIENT_TRANSPORT");
        a && uk("p", a);
        b && uk("t", b);
        uk("yt_vis", Cba());
        if ("cold" == c.yt_lt) {
            uk("yt_lt", "cold");
            a = Uj();
            if (b = Vj()) g.wk("srt", a.responseStart), 1 != c.prerender && xk("n",
                b);
            c = yba();
            0 < c && g.wk("fpt", c);
            yk();
            Sj.getEntriesByType && Dba();
            c = [];
            if (document.querySelector && Sj && Sj.getEntriesByName)
                for (var d in zk) a = zk[d], Eba(d, a) && c.push(a);
            c.length && uk("rc", c.join(","))
        }
        mk(void 0) && (d = {
            actionType: Ak[g.E("TIMING_ACTION", void 0)] || "LATENCY_ACTION_UNKNOWN",
            previousAction: Ak[g.E("PREVIOUS_ACTION", void 0)] || "LATENCY_ACTION_UNKNOWN"
        }, c = ck(void 0), jk().info(d, c));
        d = bk();
        a = Qj();
        if ("cold" === d.yt_lt && (c = nk(), b = c.gelTicks ? c.gelTicks : c.gelTicks = {}, c = c.gelInfos ? c.gelInfos : c.gelInfos = {},
                mk())) {
            for (var e in a) "tick_" + e in b || ok(e, a[e]);
            e = sk();
            a = ck();
            b = {};
            for (var f in d)
                if (!("info_" + f in c)) {
                    var k = rk(f, d[f]);
                    k && (lj(e, k), lj(b, k))
                } jk().info(b, a)
        }
        Wj(!0);
        g.Bk(!1)
    };
    g.wk = function(a, b, c) {
        var d = Qj(c);
        if (g.Sf("use_first_tick") && Ck(a, c)) return d[a];
        if (!b && "_" != a[0]) {
            var e = a;
            Sj.mark && (g.nb(e, "mark_") || (e = "mark_" + e), c && (e += " (" + c + ")"), Sj.mark(e))
        }
        e = b || (0, g.tg)();
        d[a] = e;
        ok(a, b, c) || (g.Bk(!1, c), hk(c || "").tick[a] = b || (0, g.tg)());
        return d[a]
    };
    xk = function(a, b) {
        uk("yt_sts", a, void 0);
        g.wk("_start", b, void 0)
    };
    Ck = function(a, b) {
        var c = Qj(b);
        return a in c
    };
    Dk = function(a, b) {
        if (null !== b)
            if (bk(void 0)[a] = b, mk(void 0)) {
                var c = rk(a, b, void 0);
                c && tk(c, void 0)
            } else hk("").info[a] = b
    };
    yk = function() {
        var a = Uj();
        a.isPerformanceNavigationTiming && uk("pnt", 1, void 0);
        g.wk("nreqs", a.requestStart, void 0);
        g.wk("nress", a.responseStart, void 0);
        g.wk("nrese", a.responseEnd, void 0);
        0 < a.redirectEnd - a.redirectStart && (g.wk("nrs", a.redirectStart, void 0), g.wk("nre", a.redirectEnd, void 0));
        0 < a.domainLookupEnd - a.domainLookupStart && (g.wk("ndnss", a.domainLookupStart, void 0), g.wk("ndnse", a.domainLookupEnd, void 0));
        0 < a.connectEnd - a.connectStart && (g.wk("ntcps", a.connectStart, void 0), g.wk("ntcpe", a.connectEnd,
            void 0));
        a.secureConnectionStart >= Vj() && 0 < a.connectEnd - a.secureConnectionStart && (g.wk("nstcps", a.secureConnectionStart, void 0), g.wk("ntcpe", a.connectEnd, void 0))
    };
    g.Bk = function(a, b) {
        if (!Xj(b)) {
            var c = g.E((b || "") + "TIMING_ACTION", void 0),
                d = Qj(b);
            if (g.u("ytglobal.timing" + (b || "") + "ready_") && c && d._start && Rj(b))
                if (ek(b), a || b) Ek(b);
                else {
                    c = !0;
                    var e = g.E("TIMING_WAIT", []);
                    if (e.length)
                        for (var f = 0, k = e.length; f < k; ++f)
                            if (!(e[f] in d)) {
                                c = !1;
                                break
                            } c && Ek(b)
                }
        }
    };
    Cba = function() {
        switch (g.Kg()) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3
        }
        return -1
    };
    Ek = function(a) {
        if (!mk(a)) {
            var b = Qj(a),
                c = bk(a),
                d = b._start,
                e = g.E("CSI_SERVICE_NAME", "youtube"),
                f = {
                    v: 2,
                    s: e,
                    action: g.E((a || "") + "TIMING_ACTION", void 0)
                },
                k = c.srt;
            void 0 !== b.srt && delete c.srt;
            if (c.h5jse) {
                var l = window.location.protocol + g.u("ytplayer.config.assets.js");
                (l = Sj.getEntriesByName ? Sj.getEntriesByName(l)[0] : void 0) ? c.h5jse = Math.round(c.h5jse - l.responseEnd): delete c.h5jse
            }
            b.aft = Rj(a);
            var m = Qj(a);
            l = m.pbr;
            var p = m.vc;
            m = m.pbs;
            l && p && m && l < p && p < m && bk(a).yt_pvis && "youtube" == e && (uk("yt_lt", "hot_bg", a), e = b.vc,
                l = b.pbs, delete b.aft, c.aft = Math.round(l - e));
            for (var t in c) "_" != t.charAt(0) && (f[t] = c[t]);
            b.ps = (0, g.tg)();
            t = {};
            e = [];
            for (var y in b) "_" != y.charAt(0) && (l = Math.round(b[y] - d), t[y] = l, e.push(y + "." + l));
            f.rt = e.join(",");
            (b = g.u("ytdebug.logTiming")) && b(f, t);
            c = !!c.ap;
            g.Sf("debug_csi_data") && (b = g.u("yt.timing.csiData"), b || (b = [], g.r("yt.timing.csiData", b, void 0)), b.push({
                page: location.href,
                time: new Date,
                args: f
            }));
            b = "";
            for (var A in f) f.hasOwnProperty(A) && (b += "&" + A + "=" + f[A]);
            f = "/csi_204?" + b.substring(1);
            if (window.navigator &&
                window.navigator.sendBeacon && c) {
                var G = void 0 === G ? "" : G;
                gj(f, G) || g.fj(f, void 0, void 0, void 0, G)
            } else g.fj(f);
            Yj(!0, a);
            g.Ei(Gba, new Pj(t.aft + (k || 0), a))
        }
    };
    Fk = function(a) {
        if (!mk(void 0) && !Xj(void 0)) {
            var b = g.E("CSI_SERVICE_NAME", "youtube");
            g.E("TIMING_ACTION", void 0) && b && (g.wk("aa", void 0, void 0), uk("ap", 1, void 0), uk("yt_fss", a, void 0), Ek(void 0))
        }
    };
    Dba = function() {
        var a = window.location.protocol,
            b = Sj.getEntriesByType("resource");
        b = (0, g.Gk)(b, function(c) {
            return 0 == c.name.indexOf(a + "//fonts.gstatic.com/s/")
        });
        (b = (0, g.Qd)(b, function(c, d) {
            return d.duration > c.duration ? d : c
        }, {
            duration: 0
        })) && 0 < b.startTime && 0 < b.responseEnd && (g.wk("wffs", Tj(b.startTime)), g.wk("wffe", Tj(b.responseEnd)))
    };
    Eba = function(a, b) {
        var c = document.querySelector(a);
        if (!c) return !1;
        var d = "",
            e = c.nodeName;
        "SCRIPT" == e ? (d = c.src, d || (d = c.getAttribute("data-timing-href")) && (d = window.location.protocol + d)) : "LINK" == e && (d = c.href);
        g.wa() && c.setAttribute("nonce", g.wa());
        return d ? (c = Sj.getEntriesByName(d)) && c[0] && (c = c[0], d = Vj(), g.wk("rsf_" + b, d + Math.round(c.fetchStart)), g.wk("rse_" + b, d + Math.round(c.responseEnd)), void 0 !== c.transferSize && (d = bk(void 0), e = sk(void 0), "rc" in d || "rc" in e || uk("rc", ""), 0 === c.transferSize)) ? !0 : !1 : !1
    };
    Mba = function() {
        Ik++;
        var a = g.kd(),
            b = new g.Cd(0, 0, a.width, a.height);
        Dk("vph", a.height);
        Dk("vpw", a.width);
        g.wk("vpc");
        a = document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");
        var c = a.length,
            d = [];
        Jk.start();
        for (var e = 0; e < c; e++) {
            var f = a[e];
            Kk(f, b) && (f = Hba(f), f.then(Iba), d.push(f), Lk.push(f))
        }
        g.wk("vpcc");
        b = g.Ne(d).then(Jba);
        g.Pe(b, Kba);
        b.then(Lba);
        Lk.push(b);
        return b
    };
    Lba = function() {
        Jk.stop()
    };
    Kba = function() {
        g.wk("vpr")
    };
    Kk = function(a, b) {
        for (var c = a, d = []; c != document.body;) {
            var e = g.Jg(c);
            if (e in Mk) return !0;
            if (e in Nk) return !1;
            var f = window.getComputedStyle(c);
            if ("none" == f.display || "hidden" == f.visibility) return Nk[e] = !0, !1;
            f = c.getBoundingClientRect();
            if (!(b.left <= f.left + f.width && f.left <= b.left + b.width && b.top <= f.top + f.height && f.top <= b.top + b.height)) return Nk[e] = !0, !1;
            d.push(e);
            c = c.parentElement
        }
        for (c = 0; c < d.length; c++) Mk[d[c]] = !0;
        return !0
    };
    Jba = function(a) {
        var b = g.kd();
        b = new g.Cd(0, 0, b.width, b.height);
        for (var c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d].time;
            Kk(a[d].cy, b) && c < f && (c = f)
        }
        return c
    };
    Hba = function(a) {
        var b = Ik;
        return new g.He(function(c, d) {
            var e = {
                cy: a,
                time: 0
            };
            a.loadTime ? (e.time = parseInt(a.loadTime, 10), c(e)) : (a.slt = function() {
                Ik != b ? d() : (e.time = parseInt(a.loadTime, 10), c(e), a.slt = void 0)
            }, Ok.push(a))
        })
    };
    Iba = function(a) {
        Jk.start();
        a = a.time;
        Pk < a && (Pk = a, g.wk("lim", a))
    };
    Nba = function() {
        g.wk("vptl", Pk);
        g.wk("vpl", Pk)
    };
    Oba = function() {
        Lk.forEach(function(a) {
            a.cancel()
        });
        Pk = Lk.length = 0;
        Mk = {};
        Nk = {};
        Ok.forEach(function(a) {
            a.slt = void 0
        });
        Ok.length = 0
    };
    g.Qk = function(a, b) {
        g.fj("/gen_204?" + a, b)
    };
    Pba = function(a) {
        if (null == a) return [];
        var b = [];
        g.Sf("ima_prevent_mpu_queries_on_cached_playback") && 0 > Rk.indexOf("ad3_module") && Rk.push("ad3_module");
        Rk.forEach(function(c) {
            c in a && (delete a[c], b.push(c))
        });
        a.cached_load = "1";
        return b
    };
    g.Sk = function() {
        return g.D(g.z("page-container"), "remote-connected")
    };
    Qba = function() {
        Tk = g.ag(Uk, 5E3);
        var a = g.Vk();
        a && (a.addEventListener("onReady", Uk), a.addEventListener("onStateChange", Uk))
    };
    Wk = function(a) {
        for (var b in g.Gj) {
            var c = g.Gj[b];
            c && c.cancel()
        }
        if (a = a || null) g.Hj("player-api", a), a = g.mi(a), a.loaded = !0;
        Uk();
        g.r("ytplayer.config", a, void 0)
    };
    g.Vk = function() {
        return g.Jj("player-api")
    };
    Uk = function() {
        var a = g.Vk();
        if (a) {
            var b = 1 == (a && a.isReady() ? a.getPlayerState() : void 0),
                c = "watch" == g.E("PAGE_NAME"),
                d = g.Sk();
            !b || c || d || a.pauseVideo()
        }
    };
    Yk = function() {
        g.wk("ol");
        window.requestAnimationFrame && !document.hidden ? window.requestAnimationFrame(function() {
            setTimeout(function() {
                g.wk("cpt");
                g.H("on_cpt_tick", (new Date).getTime())
            }, 0)
        }) : document.hidden ? (g.wk("cpt"), g.H("on_cpt_tick", (new Date).getTime())) : setTimeout(function() {
            g.wk("cpt");
            g.H("on_cpt_tick", (new Date).getTime())
        }, 0);
        Rba();
        g.E("CSI_VIEWPORT") && (Xk = Mba(), Xk.then(function(a) {
            g.wk("vpl", a);
            Xk = null
        }, function() {}))
    };
    Rba = function() {
        Zk("init");
        var a = g.E("PAGE_NAME", void 0);
        a && Zk("init-" + a)
    };
    Zk = function(a) {
        g.eh() ? $k.push(g.ah(g.w(g.kg, a), 0)) : g.H(a)
    };
    al = function() {
        g.ch($k);
        $k.length = 0;
        Oba();
        Xk && (Xk.cancel(), Xk = null);
        var a = g.E("PAGE_NAME", void 0);
        a && g.kg("dispose-" + a);
        g.kg("dispose")
    };
    Sba = function() {
        Yk()
    };
    Tba = function() {
        g.E("TIMING_REPORT_ON_UNLOAD") && g.Bk(!0);
        Fk("u");
        g.Wi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");
        Si();
        g.$h();
        g.Dg();
        al();
        g.kg("pageunload")
    };
    bl = function() {
        g.fh()
    };
    cl = function() {
        window.yt_spf_loaded_history = !0;
        g.fh()
    };
    hl = function() {
        dl = 1;
        el = fl = 0;
        g.E("TIMING_REPORT_ON_UNLOAD") && g.Bk(!0);
        if (g.Sf("warm_load_nav_start_web")) {
            var a = gk();
            a[""] && delete a[""];
            var b = {
                timerName: "",
                info: {},
                tick: {}
            };
            fk().push(b);
            a[""] = b;
            Fk("n");
            vk();
            Wj(!1);
            g.Nf("TIMING_AFT_KEYS", []);
            uk("yt_lt", "warm");
            g.Nf("TIMING_ACTION", "");
            g.Nf("TIMING_WAIT", []);
            delete g.E("TIMING_INFO", {}).yt_lt;
            xk("n")
        } else Fk("n"), vk(), xk("n");
        a = "nr";
        Sj.mark && (g.nb(a, "mark_") || (a = "mark_" + a), Sj.mark(a));
        gl(Uba);
        Si();
        g.kg("navigate")
    };
    kl = function(a) {
        a = a.detail.part || a.detail.partial;
        g.wk("nc" + fl);
        ++fl;
        if (a && a.data && a.data.deferDispose) "watch" == a.name && g.wk("bc");
        else {
            var b = 1 == dl;
            dl = 2;
            b ? (gl(Vba), il()) : gl(Wba);
            if (b = a && a.data && a.data.swfcfg) jl(a.timing, b.args), Ck("cfg") || g.wk("cfg"), Wk(b)
        }
    };
    ll = function() {
        g.wk("np" + el);
        ++el
    };
    ml = function(a) {
        a = a.detail.response;
        var b = 1 == dl;
        dl = 3;
        b && (gl(Xba), il());
        if (b = a.data && a.data.swfcfg) jl(a.timing, b.args), Ck("cfg") || g.wk("cfg"), Wk(b)
    };
    ql = function(a) {
        g.wk("nd");
        a = a.detail.response;
        g.nl = a.cacheKey;
        a = a.timing;
        var b = window._spf_state;
        g.ol.navigationCount = b && b["nav-counter"] || 0;
        g.Sf("warm_load_nav_start_web") ? g.wk("srt", a.responseStart) : (xk("ne", a.responseStart), b = Uj().responseStart, Dk("srt", Math.max(0, b - Vj())));
        Dk("yt_lt", a.spfCached ? "hot" : "warm");
        g.wk("pfs", a.fetchStart);
        g.wk("pfrs", a.responseStart);
        "redirectStart" in a && yk();
        gl(pl);
        document.getElementById("content").style.height = "";
        Yk();
        dl = 0
    };
    rl = function(a) {
        var b = a.detail.url,
            c = a.detail.err;
        c && (a = a.detail.xhr, a && !a.responseText || a && a.responseText && a.responseText.startsWith("<") || (c.params = b, g.Zf(c)))
    };
    sl = function(a) {
        g.Qk(g.wc({
            spfreload: "1",
            url: a.detail.url,
            reason: a.detail.reason
        }))
    };
    Zba = function() {
        Yba();
        window.yt_spf_loaded_history = !1
    };
    $ba = function() {};
    il = function() {
        var a = document.getElementById("content"); - 1 < a.className.indexOf("spf-animate") && (a.style.height = a.clientHeight + "px");
        al();
        a = g.E("PREVIOUS_ACTION");
        for (var b in g.Mf) delete g.Mf[b];
        g.Nf("PREVIOUS_ACTION", a);
        g.Nf("SERVED_VIA_SPF_HISTORY", !!window.yt_spf_loaded_history);
        g.r("ytplayer.config", null, void 0);
        (b = g.Vk()) && b.stopVideo && (b.stopVideo(), b.getLastError() && (b = document.getElementById("movie_player")) && b.stopVideo && b.stopVideo());
        Uk()
    };
    gl = function(a) {
        var b = document.getElementById("progress");
        b || (b = document.createElement("div"), b.id = "progress", b.appendChild(document.createElement("dt")), b.appendChild(document.createElement("dd")), document.body.appendChild(b));
        g.bh(tl);
        tl = g.ah(function() {
            var c = a[0],
                d = a[1],
                e = a[2];
            b.className = "";
            var f = b.style;
            f.transitionDuration = f.webkitTransitionDuration = c + "ms";
            f.width = d + "%";
            g.bg(ul);
            ul = g.$f(function() {
                b.className = e
            }, c)
        }, 0)
    };
    Yba = function() {
        var a = pl[0] + 50;
        g.bg(ul);
        ul = g.$f(function() {
            var b = document.getElementById("progress");
            b && b.parentNode.removeChild(b)
        }, a)
    };
    jl = function(a, b) {
        var c = a && a.spfCached,
            d = a && a.spfPrefetched,
            e = [];
        c && !d && null != b && (e = Pba(b));
        g.E("EXP_DEBUG_PREFETCH") && (e.sort(), c = {
            a: "updatePlayerVarsForCachedLoad",
            cached: c,
            prefetched: d,
            deleted: e.join("")
        }, g.Qk(g.wc(c)))
    };
    wl = function() {
        return "granted" != Notification.permission ? Promise.resolve() : vl().then(function(a) {
            return a ? a.pushManager.getSubscription().then(function(b) {
                if (b) return Promise.resolve();
                b = {
                    userVisibleOnly: !0,
                    applicationServerKey: naa()
                };
                return a.pushManager.subscribe(b).then(function() {
                    return Promise.resolve()
                }, function() {
                    return Promise.resolve()
                })
            }) : Promise.resolve()
        })["catch"](function() {})
    };
    yl = function() {
        xl({
            type: "notifications_register",
            data: g.E("ID_TOKEN")
        })
    };
    vl = function() {
        var a = Uf("service_worker_scope");
        try {
            return navigator.serviceWorker.getRegistration(a)
        } catch (b) {
            return Promise.reject(b)
        }
    };
    aca = function() {
        return vl().then(zl)["catch"](function() {
            return !1
        })
    };
    zl = function(a) {
        return !(!a || !a.pushManager)
    };
    xl = function(a) {
        return vl().then(function(b) {
            if (!b || !b.active) return Promise.reject("serviceworker.postMessage");
            b.active.postMessage(a);
            return Promise.resolve()
        })
    };
    bca = function() {
        if (!g.E("LOGGED_IN", void 0)) return Promise.resolve(!1);
        var a = Uf("service_worker_push_force_notification_prompt_tag");
        return a ? g.Mj("PromptTags").then(function(b) {
            if (!b) return !0;
            var c = [];
            try {
                c = JSON.parse(b)
            } catch (d) {
                return !1
            }
            return c && -1 == c.indexOf(a)
        }) : Promise.resolve(!1)
    };
    fca = function() {
        var a = void 0 === a ? !1 : a;
        return (navigator.serviceWorker && navigator.serviceWorker.getRegistration && window.Notification ? aca() : Promise.resolve(!1)).then(function(b) {
            if (!b) return Promise.resolve();
            b = wl().then(function() {
                return xl({
                    type: "notifications_check_registration",
                    data: g.E("ID_TOKEN")
                })
            });
            return "default" != Notification.permission ? b : b.then(function() {
                return cca(a)
            }).then(function(c) {
                if (c) return dca(), eca().then(function() {})
            })["catch"](function() {})
        })
    };
    cca = function(a) {
        return g.E("SERVICE_WORKER_PROMPT_NOTIFICATIONS", void 0) || g.E("LOGGED_IN", void 0) && (void 0 === a ? 0 : a) ? bca().then(function(b) {
            if (b) return !0;
            b = [gca(), hca()];
            g.E("LOGGED_IN", void 0) || b.push(ica());
            return Promise.all(b).then(function(c) {
                return c.every(function(d) {
                    return d
                })
            })
        }) : Promise.resolve(!1)
    };
    ica = function() {
        var a = g.Tf("service_worker_push_logged_out_prompt_watches");
        return -1 == a ? Promise.resolve(!1) : g.Mj("WatchCount").then(function(b) {
            return b >= a
        })
    };
    eca = function() {
        var a = arguments;
        g.Sf("service_worker_push_prompt_modal_enable") && jca();
        return Notification.requestPermission().then(function(b) {
            Al();
            var c = document.getElementById("ticker");
            c && (c.className = c.classList.remove("show"));
            if ("granted" == b) return wl().then(function() {
                g.Lj("NotificationsDisabled", !1);
                yl();
                return Promise.resolve(!0)
            });
            "denied" == b && yl();
            return Promise.resolve(!1)
        })["catch"](function() {
            Al();
            return Promise.reject.apply(Promise, g.la(a))
        })
    };
    dca = function() {
        g.Mj("PromptCount").then(function(a) {
            return g.Lj("PromptCount", a + 1)
        }).then(function() {
            return g.Lj("PromptTime", (0, g.$c)())
        }).then(function() {
            var a = Uf("service_worker_push_force_notification_prompt_tag");
            if (a) return g.Mj("PromptTags").then(function(b) {
                var c = [];
                if (b) try {
                    c = JSON.parse(b)
                } catch (d) {
                    return !1
                }
                c || (c = []);
                c.push(a);
                return g.Lj("PromptTags", JSON.stringify(c))
            })
        })
    };
    gca = function() {
        return -1 == g.Tf("service_worker_push_prompt_cap") ? Promise.resolve(!0) : g.Mj("PromptCount").then(function(a) {
            a || (a = 0);
            return Promise.resolve(a < g.Tf("service_worker_push_prompt_cap"))
        })
    };
    hca = function() {
        var a = g.Tf("service_worker_push_prompt_delay_microseconds");
        return a ? g.Mj("PromptTime").then(function(b) {
            return Promise.resolve((0, g.$c)() - a > (b || 0))
        }) : Promise.resolve(!0)
    };
    kca = function() {
        Bl || Al()
    };
    Cl = function(a) {
        a.style.zIndex = 2147483648;
        a.style.pointerEvents = "auto";
        a.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        a.style.width = "100%";
        a.style.height = "100vh";
        a.style.position = "absolute";
        a.style.top = "0";
        a.style.left = "0";
        a.style.border = "none"
    };
    jca = function() {
        var a = g.z("yt-push-prompt-modal-bg");
        Bl = g.Sf("service_worker_push_prompt_modal_ignore_click");
        a ? Cl(a) : (a = g.nd("div", {
            id: "yt-push-prompt-modal-bg"
        }), Cl(a), document.body.appendChild(a), g.Wg(document, "click", kca))
    };
    Al = function() {
        var a = g.z("yt-push-prompt-modal-bg");
        a && g.sd(a)
    };
    lca = function(a) {
        return zl(a) ? fca() : Promise.resolve()
    };
    nca = function() {
        navigator.serviceWorker.getRegistrations().then(function(a) {
            a.forEach(mca)
        })
    };
    pca = function() {
        var a = "/sw.js",
            b = g.E("SERVICE_WORKER_VFL", void 0);
        b && (a += "?vfl=" + b);
        try {
            var c = Dl(a)["catch"](function() {
                return new Promise(function() {})
            });
            g.Sf("service_worker_push_enabled") && c.then(oca).then(lca)
        } catch (d) {
            if ("SecurityError" != d.name) throw d;
        }
    };
    oca = function(a) {
        var b = a.installing || a.waiting;
        return a.active || !b ? Promise.resolve(a) : new Promise(function(c) {
            function d(e) {
                if ("activated" == e.target.state || "redundant" == e.target.state) b.removeEventListener("statechange", d), c(a)
            }
            b.addEventListener("statechange", d)
        })
    };
    mca = function(a) {
        a && Dl("/sw.js?0", a.scope)
    };
    Dl = function(a, b) {
        return navigator.serviceWorker.register(a, {
            scope: b || Uf("service_worker_scope") || "/"
        })
    };
    El = function() {
        g.Xi.call(this, "www/base");
        this.D = 0
    };
    Fl = function(a) {
        (a = a.detail.name) && $i(a)
    };
    g.aa = [];
    fa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    ea = aaa(this);
    ha.prototype.toString = function() {
        return this.C
    };
    var baa = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new ha("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        ma = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        Gl;
    if ("function" == typeof Object.setPrototypeOf) Gl = Object.setPrototypeOf;
    else {
        var Hl;
        a: {
            var qca = {
                    a: !0
                },
                Il = {};
            try {
                Il.__proto__ = qca;
                Hl = Il.a;
                break a
            } catch (a) {}
            Hl = !1
        }
        Gl = Hl ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = Gl;
    pa("Promise", function(a) {
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
        var e = ea.setTimeout;
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
                    } catch (p) {
                        this.G(p)
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
            function k(p) {
                return function(t) {
                    m || (m = !0, p.call(l, t))
                }
            }
            var l = this,
                m = !1;
            return {
                resolve: k(this.N),
                reject: k(this.G)
            }
        };
        b.prototype.N = function(k) {
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
                l ? this.Y(k) : this.L(k)
            }
        };
        b.prototype.Y = function(k) {
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
            this.M(2, k)
        };
        b.prototype.L = function(k) {
            this.M(1, k)
        };
        b.prototype.M = function(k, l) {
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
            k.Qh(l.resolve, l.reject)
        };
        b.prototype.la = function(k, l) {
            var m = this.H();
            try {
                k.call(l, m.resolve, m.reject)
            } catch (p) {
                m.reject(p)
            }
        };
        b.prototype.then = function(k, l) {
            function m(A, G) {
                return "function" == typeof A ? function(O) {
                    try {
                        p(A(O))
                    } catch (T) {
                        t(T)
                    }
                } : G
            }
            var p, t, y = new b(function(A, G) {
                p = A;
                t = G
            });
            this.Qh(m(k, p), m(l, t));
            return y
        };
        b.prototype["catch"] = function(k) {
            return this.then(void 0, k)
        };
        b.prototype.Qh = function(k, l) {
            function m() {
                switch (p.F) {
                    case 1:
                        k(p.D);
                        break;
                    case 2:
                        l(p.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + p.F);
                }
            }
            var p = this;
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
                for (var p = g.ka(k), t = p.next(); !t.done; t = p.next()) d(t.value).Qh(l, m)
            })
        };
        b.all = function(k) {
            var l = g.ka(k),
                m = l.next();
            return m.done ? d([]) : new b(function(p, t) {
                function y(O) {
                    return function(T) {
                        A[O] = T;
                        G--;
                        0 == G && p(A)
                    }
                }
                var A = [],
                    G = 0;
                do A.push(void 0), G++, d(m.value).Qh(y(A.length - 1), t), m = l.next(); while (!m.done)
            })
        };
        return b
    });
    pa("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = qa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            for (var e = Math.max(0, Math.min(c | 0, d.length)), f = b.length; 0 < f && 0 < e;)
                if (d[--e] != b[--f]) return !1;
            return 0 >= f
        }
    });
    pa("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = qa(this, b, "startsWith");
            b += "";
            for (var e = d.length, f = b.length, k = Math.max(0, Math.min(c | 0, d.length)), l = 0; l < f && k < e;)
                if (d[k++] != b[l++]) return !1;
            return l >= f
        }
    });
    pa("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = qa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    pa("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return sa(this, function(b) {
                return b
            })
        }
    });
    pa("Array.prototype.values", function(a) {
        return a ? a : function() {
            return sa(this, function(b, c) {
                return c
            })
        }
    });
    var rca = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ta(d, e) && (a[e] = d[e])
        }
        return a
    };
    pa("Object.assign", function(a) {
        return a || rca
    });
    pa("WeakMap", function(a) {
        function b(m) {
            this.pb = (l += Math.random() + 1).toString();
            if (m) {
                m = g.ka(m);
                for (var p; !(p = m.next()).done;) p = p.value, this.set(p[0], p[1])
            }
        }

        function c() {}

        function d(m) {
            var p = typeof m;
            return "object" === p && null !== m || "function" === p
        }

        function e(m) {
            if (!ta(m, k)) {
                var p = new c;
                fa(m, k, {
                    value: p
                })
            }
        }

        function f(m) {
            var p = Object[m];
            p && (Object[m] = function(t) {
                if (t instanceof c) return t;
                e(t);
                return p(t)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var m = Object.seal({}),
                        p = Object.seal({}),
                        t = new a([
                            [m, 2],
                            [p, 3]
                        ]);
                    if (2 != t.get(m) || 3 != t.get(p)) return !1;
                    t["delete"](m);
                    t.set(p, 4);
                    return !t.has(m) && 4 == t.get(p)
                } catch (y) {
                    return !1
                }
            }()) return a;
        var k = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var l = 0;
        b.prototype.set = function(m, p) {
            if (!d(m)) throw Error("Invalid WeakMap key");
            e(m);
            if (!ta(m, k)) throw Error("WeakMap key fail: " + m);
            m[k][this.pb] = p;
            return this
        };
        b.prototype.get = function(m) {
            return d(m) && ta(m, k) ? m[k][this.pb] : void 0
        };
        b.prototype.has = function(m) {
            return d(m) && ta(m, k) && ta(m[k], this.pb)
        };
        b.prototype["delete"] = function(m) {
            return d(m) && ta(m, k) && ta(m[k], this.pb) ? delete m[k][this.pb] : !1
        };
        return b
    });
    pa("Map", function(a) {
        function b() {
            var l = {};
            return l.previous = l.next = l.head = l
        }

        function c(l, m) {
            var p = l.F;
            return ia(function() {
                if (p) {
                    for (; p.head != l.F;) p = p.previous;
                    for (; p.next != p.head;) return p = p.next, {
                        done: !1,
                        value: m(p)
                    };
                    p = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(l, m) {
            var p = m && typeof m;
            "object" == p || "function" == p ? f.has(m) ? p = f.get(m) : (p = "" + ++k, f.set(m, p)) : p = "p_" + m;
            var t = l.C[p];
            if (t && ta(l.C, p))
                for (var y = 0; y < t.length; y++) {
                    var A = t[y];
                    if (m !== m && A.key !== A.key || m === A.key) return {
                        id: p,
                        list: t,
                        index: y,
                        lc: A
                    }
                }
            return {
                id: p,
                list: t,
                index: -1,
                lc: void 0
            }
        }

        function e(l) {
            this.C = {};
            this.F = b();
            this.size = 0;
            if (l) {
                l = g.ka(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var l = Object.seal({
                            x: 4
                        }),
                        m = new a(g.ka([
                            [l, "s"]
                        ]));
                    if ("s" != m.get(l) || 1 != m.size || m.get({
                            x: 4
                        }) || m.set({
                            x: 4
                        }, "t") != m || 2 != m.size) return !1;
                    var p = m.entries(),
                        t = p.next();
                    if (t.done || t.value[0] != l || "s" != t.value[1]) return !1;
                    t = p.next();
                    return t.done || 4 != t.value[0].x || "t" != t.value[1] || !p.next().done ? !1 : !0
                } catch (y) {
                    return !1
                }
            }()) return a;
        g.ja();
        var f = new WeakMap;
        e.prototype.set = function(l, m) {
            l = 0 === l ? 0 : l;
            var p = d(this, l);
            p.list || (p.list = this.C[p.id] = []);
            p.lc ? p.lc.value = m : (p.lc = {
                next: this.F,
                previous: this.F.previous,
                head: this.F,
                key: l,
                value: m
            }, p.list.push(p.lc), this.F.previous.next = p.lc, this.F.previous = p.lc, this.size++);
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
            for (var p = this.entries(), t; !(t = p.next()).done;) t = t.value, l.call(m, t[1], t[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var k = 0;
        return e
    });
    pa("Set", function(a) {
        function b(c) {
            this.C = new Map;
            if (c) {
                c = g.ka(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.C.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(g.ka([c]));
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
        g.ja();
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.C.set(c, c);
            this.size = this.C.size;
            return this
        };
        b.prototype["delete"] = function(c) {
            c = this.C["delete"](c);
            this.size = this.C.size;
            return c
        };
        b.prototype.clear = function() {
            this.C.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.C.has(c)
        };
        b.prototype.entries = function() {
            return this.C.entries()
        };
        b.prototype.values = function() {
            return this.C.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.C.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    pa("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ta(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    pa("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    pa("Array.prototype.includes", function(a) {
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
    pa("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== qa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    var sca = function() {
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
            e = ma(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }();
    pa("Reflect.construct", function() {
        return sca
    });
    pa("Array.from", function(a) {
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
    pa("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    pa("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    pa("Promise.prototype.finally", function(a) {
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
    pa("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ta(b, d) && c.push(b[d]);
            return c
        }
    });
    g.Jl = g.Jl || {};
    g.q = this || self;
    caa = /^[\w+/_-]+[=]{0,2}$/;
    va = null;
    Fa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    daa = 0;
    g.$c = Date.now || function() {
        return +new Date
    };
    g.x(g.Ia, Error);
    g.Ia.prototype.name = "CustomError";
    g.La = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    g.tca = Array.prototype.lastIndexOf ? function(a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    } : function(a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    };
    g.B = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    g.Gk = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, k = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var m = k[l];
                b.call(c, m, l, a) && (e[f++] = m)
            } return e
    };
    g.Kl = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
        return e
    };
    g.Qd = Array.prototype.reduce ? function(a, b, c, d) {
        d && (b = (0, g.v)(b, d));
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c, d) {
        var e = c;
        (0, g.B)(a, function(f, k) {
            e = b.call(d, e, f, k, a)
        });
        return e
    };
    g.Ll = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    };
    g.Ml = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };
    g.uca = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    g.vca = RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    g.Nl = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");
    var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    g.fb.prototype.Md = !0;
    g.fb.prototype.Uc = function() {
        return this.C
    };
    var eb = {},
        db = {},
        Aaa = g.hb("");
    var jb;
    g.kb.prototype.Md = !0;
    g.kb.prototype.Uc = function() {
        return this.F.toString()
    };
    g.kb.prototype.Rk = !0;
    g.kb.prototype.C = function() {
        return 1
    };
    jb = {};
    g.ib = {};
    var qb, rb, sb, tb, ub, vb, haa;
    g.yb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    qb = /&/g;
    rb = /</g;
    sb = />/g;
    tb = /"/g;
    ub = /'/g;
    vb = /\x00/g;
    haa = /[\x00&<>"']/;
    g.Db.prototype.Md = !0;
    g.Db.prototype.Uc = function() {
        return this.F.toString()
    };
    g.Db.prototype.Rk = !0;
    g.Db.prototype.C = function() {
        return 1
    };
    var jaa = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        iaa = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Cb = {},
        Bb = {};
    g.Lb.prototype.Md = !0;
    g.Kb = {};
    g.Lb.prototype.Uc = function() {
        return this.C
    };
    g.Ol = g.Mb("");
    g.Pl = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    g.Ql = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
    g.Ob.prototype.Md = !0;
    g.Nb = {};
    g.Ob.prototype.Uc = function() {
        return this.C
    };
    g.wca = g.Pb("");
    a: {
        var Rl = g.q.navigator;
        if (Rl) {
            var Sl = Rl.userAgent;
            if (Sl) {
                g.Qb = Sl;
                break a
            }
        }
        g.Qb = ""
    };
    g.Yb.prototype.Rk = !0;
    g.Yb.prototype.C = function() {
        return this.D
    };
    g.Yb.prototype.Md = !0;
    g.Yb.prototype.Uc = function() {
        return this.F.toString()
    };
    var Xb = {};
    g.cc("<!DOCTYPE html>", 0);
    g.ue = g.cc("", 0);
    g.Tl = g.cc("<br>", 0);
    g.xca = g.Sa(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = g.Zb(g.ue);
        return !b.parentElement
    });
    g.jc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    g.oc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    g.zc = /#|$/;
    g.Dc[" "] = g.xa;
    var am, laa, em;
    g.Ul = g.Rb("Opera");
    g.Df = g.Sb();
    g.Vl = g.Rb("Edge");
    g.Wl = g.Vl || g.Df;
    g.Xl = g.Rb("Gecko") && !(g.xb(g.Qb.toLowerCase(), "webkit") && !g.Rb("Edge")) && !(g.Rb("Trident") || g.Rb("MSIE")) && !g.Rb("Edge");
    g.Yl = g.xb(g.Qb.toLowerCase(), "webkit") && !g.Rb("Edge");
    g.Zl = g.Rb("Macintosh");
    g.$l = g.Rb("Windows");
    g.yca = g.Rb("Linux") || g.Rb("CrOS");
    g.zca = g.Rb("Android");
    g.Aca = Bc();
    g.Bca = g.Rb("iPad");
    g.Cca = g.Rb("iPod");
    g.Dca = g.Cc();
    a: {
        var bm = "",
            cm = function() {
                var a = g.Qb;
                if (g.Xl) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (g.Vl) return /Edge\/([\d\.]+)/.exec(a);
                if (g.Df) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (g.Yl) return /WebKit\/(\S+)/.exec(a);
                if (g.Ul) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        cm && (bm = cm ? cm[1] : "");
        if (g.Df) {
            var dm = Fc();
            if (null != dm && dm > parseFloat(bm)) {
                am = String(dm);
                break a
            }
        }
        am = bm
    }
    g.Gc = am;
    laa = {};
    if (g.q.document && g.Df) {
        var fm = Fc();
        em = fm ? fm : parseInt(g.Gc, 10) || void 0
    } else em = void 0;
    g.Ic = em;
    g.gm = Tb();
    g.hm = Bc() || g.Rb("iPod");
    g.im = g.Rb("iPad");
    g.Eca = g.Wb();
    g.jm = Ub();
    g.km = g.Vb() && !g.Cc();
    var Lc = {},
        Oc = null;
    g.Pc.prototype.next = function() {
        return this.C < this.F.length ? {
            done: !1,
            value: this.F[this.C++]
        } : {
            done: !0,
            value: void 0
        }
    };
    "undefined" != typeof Symbol && (g.Pc.prototype[Symbol.iterator] = function() {
        return this
    });
    g.Uc = "function" == typeof Uint8Array;
    g.Qc.prototype.Zc = function() {
        Rc(this);
        return this.ec
    };
    g.Qc.prototype.F = g.Uc ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Mc(this)
        };
        try {
            return JSON.stringify(this.ec && this.Zc(), Sc)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.ec && this.Zc(), Sc)
    };
    g.Qc.prototype.toString = function() {
        Rc(this);
        return this.ec.toString()
    };
    g.Qc.prototype.clone = function() {
        return new this.constructor(Tc(this.Zc()))
    };
    g.lm = document;
    g.Hd = window;
    g.h = g.Vc.prototype;
    g.h.isEnabled = function() {
        return navigator.cookieEnabled
    };
    g.h.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.lR;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var k = c.path || void 0;
            var l = c.wl
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === l && (l = -1);
        c = f ? ";domain=" + f : "";
        k = k ? ";path=" + k : "";
        d = d ? ";secure" : "";
        l = 0 > l ? "" : 0 == l ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, g.$c)() + 1E3 * l)).toUTCString();
        this.C.cookie = a + "=" + b + c + k + l + d + (null != e ? ";samesite=" +
            e : "")
    };
    g.h.get = function(a, b) {
        for (var c = a + "=", d = (this.C.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0, g.yb)(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    g.h.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            wl: 0,
            path: b,
            domain: c
        });
        return d
    };
    g.h.yc = function() {
        return g.Wc(this).keys
    };
    g.h.Db = g.ba(1);
    g.h.isEmpty = function() {
        return !this.C.cookie
    };
    g.h.Gb = function() {
        return this.C.cookie ? (this.C.cookie || "").split(";").length : 0
    };
    g.h.ud = g.ba(3);
    g.h.clear = function() {
        for (var a = g.Wc(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    g.Rh = new g.Vc("undefined" == typeof document ? null : document);
    g.mm = {
        Ha: ["BC", "AD"],
        La: ["Before Christ", "Anno Domini"],
        Ma: "JFMAMJJASOND".split(""),
        Na: "JFMAMJJASOND".split(""),
        wa: "January February March April May June July August September October November December".split(" "),
        sa: "January February March April May June July August September October November December".split(" "),
        xa: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Ca: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Ea: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Ka: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Ba: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Da: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Pa: "SMTWTFS".split(""),
        Oa: "SMTWTFS".split(""),
        Ja: ["Q1", "Q2", "Q3", "Q4"],
        Ia: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        Aa: ["AM", "PM"],
        ra: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        za: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        Ga: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        ua: 6,
        Fa: [5, 6],
        va: 5
    };
    g.nm = g.mm;
    g.nm = g.mm;
    g.h = g.ad.prototype;
    g.h.xe = g.nm.ua;
    g.h.Mg = g.nm.va;
    g.h.clone = function() {
        var a = new g.ad(this.date);
        a.xe = this.xe;
        a.Mg = this.Mg;
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
            var d = Math.min(g.Xc(c, b), this.getDate());
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.days && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), Zc(this, a.getDate()))
    };
    g.h.ce = function(a) {
        return [this.getFullYear(), g.kc(this.getMonth() + 1, 2), g.kc(this.getDate(), 2)].join(a ? "-" : "") + ""
    };
    g.h.equals = function(a) {
        return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
    };
    g.h.toString = function() {
        return this.ce()
    };
    g.h.valueOf = function() {
        return this.date.valueOf()
    };
    var oaa;
    oaa = !g.Df || g.Jc(9);
    g.Fca = !g.Xl && !g.Df || g.Df && g.Jc(9) || g.Xl && g.Hc("1.9.1");
    g.om = g.Df && !g.Hc("9");
    g.Gca = g.Df || g.Ul || g.Yl;
    g.h = g.bd.prototype;
    g.h.clone = function() {
        return new g.bd(this.x, this.y)
    };
    g.h.equals = function(a) {
        return a instanceof g.bd && g.cd(this, a)
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
    g.h = g.ed.prototype;
    g.h.clone = function() {
        return new g.ed(this.width, this.height)
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
    var hd = {
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
    var Hca = {
            KJ: "allow-forms",
            LJ: "allow-modals",
            MJ: "allow-orientation-lock",
            NJ: "allow-pointer-lock",
            OJ: "allow-popups",
            PJ: "allow-popups-to-escape-sandbox",
            QJ: "allow-presentation",
            RJ: "allow-same-origin",
            SJ: "allow-scripts",
            TJ: "allow-top-navigation",
            UJ: "allow-top-navigation-by-user-activation"
        },
        qaa = g.Sa(function() {
            return g.xd(Hca)
        });
    g.C.prototype.Rc = !1;
    g.C.prototype.qb = function() {
        return this.Rc
    };
    g.C.prototype.dispose = function() {
        this.Rc || (this.Rc = !0, this.X())
    };
    g.C.prototype.X = function() {
        if (this.wf)
            for (; this.wf.length;) this.wf.shift()()
    };
    /*
     Copyright (c) Microsoft Corporation. All rights reserved.
     Licensed under the Apache License, Version 2.0 (the "License"); you may not use
     this file except in compliance with the License. You may obtain a copy of the
     License at http://www.apache.org/licenses/LICENSE-2.0

     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
     WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
     MERCHANTABLITY OR NON-INFRINGEMENT.

     See the Apache Version 2.0 License for specific language governing permissions
     and limitations under the License.
    */
    g.ya(g.Bd);
    g.h = g.Cd.prototype;
    g.h.clone = function() {
        return new g.Cd(this.left, this.top, this.width, this.height)
    };
    g.h.contains = function(a) {
        return a instanceof g.bd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
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
    g.pm = g.Xl ? "MozUserSelect" : g.Yl || g.Vl ? "WebkitUserSelect" : null;
    g.qm = !!window.google_async_iframe_id;
    g.rm = g.qm && window.parent || window;
    g.mb(g.hb("//fonts.googleapis.com/css"));
    g.zh = (new Date).getTime();
    Pd.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.C[a] != b && (this.C[a] = b, this.F = -1)
    };
    Pd.prototype.get = function(a) {
        return !!this.C[a]
    };
    g.Td.prototype.stopPropagation = function() {
        this.F = !0
    };
    g.Td.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var ie, Jca, yaa;
    g.Ica = !g.Df || g.Jc(9);
    ie = !g.Df || g.Jc(9);
    Jca = g.Df && !g.Hc("9");
    yaa = function() {
        if (!g.q.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            g.q.addEventListener("test", g.xa, b), g.q.removeEventListener("test", g.xa, b)
        } catch (c) {}
        return a
    }();
    g.sm = g.Yl ? "webkitTransitionEnd" : g.Ul ? "otransitionend" : "transitionend";
    g.x(g.Ud, g.Td);
    var Kca = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    g.Ud.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        e ? g.Xl && (g.Ec(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
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
        this.G = g.Zl ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Kca[a.pointerType] || "";
        this.state =
            a.state;
        this.zc = a;
        a.defaultPrevented && this.preventDefault()
    };
    g.Ud.prototype.stopPropagation = function() {
        g.Ud.V.stopPropagation.call(this);
        this.zc.stopPropagation ? this.zc.stopPropagation() : this.zc.cancelBubble = !0
    };
    g.Ud.prototype.preventDefault = function() {
        g.Ud.V.preventDefault.call(this);
        var a = this.zc;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Jca) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Vd = "closure_listenable_" + (1E6 * Math.random() | 0),
        vaa = 0;
    g.h = g.Yd.prototype;
    g.h.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.C++);
        var k = $d(a, b, d, e); - 1 < k ? (b = a[k], c || (b.Ph = !1)) : (b = new waa(b, this.src, f, !!d, e), b.Ph = c, a.push(b));
        return b
    };
    g.h.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = $d(e, b, c, d);
        return -1 < b ? (Xd(e[b]), g.Oa(e, b), 0 == e.length && (delete this.listeners[a], this.C--), !0) : !1
    };
    g.h.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.listeners)
            if (!a || c == a) {
                for (var d = this.listeners[c], e = 0; e < d.length; e++) ++b, Xd(d[e]);
                delete this.listeners[c];
                this.C--
            } return b
    };
    g.h.Vf = g.ba(5);
    g.h.We = function(a, b, c, d) {
        a = this.listeners[a.toString()];
        var e = -1;
        a && (e = $d(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    g.h.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return g.Ua(this.listeners, function(f) {
            for (var k = 0; k < f.length; ++k)
                if (!(c && f[k].type != d || e && f[k].capture != b)) return !0;
            return !1
        })
    };
    var fe = "closure_lm_" + (1E6 * Math.random() | 0),
        le = {},
        he = 0,
        oe = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    g.x(g.pe, g.C);
    g.pe.prototype[Vd] = !0;
    g.h = g.pe.prototype;
    g.h.ni = function() {
        return this.Ol
    };
    g.h.sh = g.ba(6);
    g.h.addEventListener = function(a, b, c, d) {
        g.be(this, a, b, c, d)
    };
    g.h.removeEventListener = function(a, b, c, d) {
        g.je(this, a, b, c, d)
    };
    g.h.dispatchEvent = function(a) {
        var b = this.ni();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.ni()) c.push(b), ++d
        }
        b = this.Dt;
        d = a.type || a;
        if ("string" === typeof a) a = new g.Td(a, b);
        else if (a instanceof g.Td) a.target = a.target || b;
        else {
            var e = a;
            a = new g.Td(d, b);
            g.cb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.F && 0 <= f; f--) {
                var k = a.currentTarget = c[f];
                e = qe(k, d, !0, a) && e
            }
        a.F || (k = a.currentTarget = b, e = qe(k, d, !0, a) && e, a.F || (e = qe(k, d, !1, a) && e));
        if (c)
            for (f = 0; !a.F && f < c.length; f++) k = a.currentTarget = c[f], e = qe(k, d, !1, a) && e;
        return e
    };
    g.h.X = function() {
        g.pe.V.X.call(this);
        this.removeAllListeners();
        this.Ol = null
    };
    g.h.O = function(a, b, c, d) {
        return this.vd.add(String(a), b, !1, c, d)
    };
    g.h.Be = function(a, b, c, d) {
        return this.vd.add(String(a), b, !0, c, d)
    };
    g.h.Va = function(a, b, c, d) {
        return this.vd.remove(String(a), b, c, d)
    };
    g.h.removeAllListeners = function(a) {
        return this.vd ? this.vd.removeAll(a) : 0
    };
    g.h.Vf = g.ba(4);
    g.h.We = function(a, b, c, d) {
        return this.vd.We(String(a), b, c, d)
    };
    g.h.hasListener = function(a, b) {
        return this.vd.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    re.prototype.get = function() {
        if (0 < this.F) {
            this.F--;
            var a = this.C;
            this.C = a.next;
            a.next = null
        } else a = this.D();
        return a
    };
    var Ce;
    var De = new re(function() {
        return new we
    }, function(a) {
        a.reset()
    });
    ve.prototype.add = function(a, b) {
        var c = De.get();
        c.set(a, b);
        this.F ? this.F.next = c : this.C = c;
        this.F = c
    };
    ve.prototype.remove = function() {
        var a = null;
        this.C && (a = this.C, this.C = this.C.next, this.C || (this.F = null), a.next = null);
        return a
    };
    we.prototype.set = function(a, b) {
        this.mc = a;
        this.scope = b;
        this.next = null
    };
    we.prototype.reset = function() {
        this.next = this.scope = this.mc = null
    };
    var xe, ye = !1,
        ze = new ve;
    Ie.prototype.reset = function() {
        this.context = this.onRejected = this.F = this.C = null;
        this.D = !1
    };
    var Je = new re(function() {
        return new Ie
    }, function(a) {
        a.reset()
    });
    g.He.prototype.then = function(a, b, c) {
        return Oe(this, g.Da(a) ? a : null, g.Da(b) ? b : null, c)
    };
    g.Ee(g.He);
    g.He.prototype.cancel = function(a) {
        if (0 == this.C) {
            var b = new g.Ve(a);
            Ae(function() {
                Qe(this, b)
            }, this)
        }
    };
    g.He.prototype.Y = function(a) {
        this.C = 0;
        g.Ge(this, 2, a)
    };
    g.He.prototype.N = function(a) {
        this.C = 0;
        g.Ge(this, 3, a)
    };
    g.He.prototype.J = function() {
        for (var a; a = Re(this);) Se(this, a, this.C, this.M);
        this.L = !1
    };
    var Xe = te;
    g.x(g.Ve, g.Ia);
    g.Ve.prototype.name = "cancel";
    g.x(g.$e, g.C);
    g.h = g.$e.prototype;
    g.h.pb = 0;
    g.h.X = function() {
        g.$e.V.X.call(this);
        this.stop();
        delete this.C;
        delete this.F
    };
    g.h.start = function(a) {
        this.stop();
        this.pb = g.Ye(this.Pb, void 0 !== a ? a : this.D)
    };
    g.h.stop = function() {
        this.isActive() && g.Ze(this.pb);
        this.pb = 0
    };
    g.h.isActive = function() {
        return 0 != this.pb
    };
    g.h.xk = function() {
        this.pb = 0;
        this.C && this.C.call(this.F)
    };
    g.x(af, Faa);
    af.prototype.reset = function() {
        this.C[0] = 1732584193;
        this.C[1] = 4023233417;
        this.C[2] = 2562383102;
        this.C[3] = 271733878;
        this.C[4] = 3285377520;
        this.H = this.D = 0
    };
    af.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.F, d = 0, e = this.L, f = this.D; d < b;) {
                if (0 == f)
                    for (; d <= c;) bf(this, a, d), d += this.F;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.F) {
                            bf(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.F) {
                                bf(this, e);
                                f = 0;
                                break
                            }
            }
            this.D = f;
            this.H += b
        }
    };
    af.prototype.digest = function() {
        var a = [],
            b = 8 * this.H;
        56 > this.D ? this.update(this.G, 56 - this.D) : this.update(this.G, this.F - (this.D - 56));
        for (var c = this.F - 1; 56 <= c; c--) this.L[c] = b & 255, b /= 256;
        bf(this, this.L);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.C[c] >> d & 255, ++b;
        return a
    };
    g.ff = "StopIteration" in g.q ? g.q.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    g.ef.prototype.next = function() {
        throw g.ff;
    };
    g.ef.prototype.bd = function() {
        return this
    };
    g.h = g.kf.prototype;
    g.h.Gb = function() {
        return this.D
    };
    g.h.Db = g.ba(0);
    g.h.yc = function() {
        g.mf(this);
        return this.C.concat()
    };
    g.h.ud = g.ba(2);
    g.h.equals = function(a, b) {
        if (this === a) return !0;
        if (this.D != a.Gb()) return !1;
        var c = b || Haa;
        g.mf(this);
        for (var d, e = 0; d = this.C[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    g.h.isEmpty = function() {
        return 0 == this.D
    };
    g.h.clear = function() {
        this.F = {};
        this.Je = this.D = this.C.length = 0
    };
    g.h.remove = function(a) {
        return g.lf(this.F, a) ? (delete this.F[a], this.D--, this.Je++, this.C.length > 2 * this.D && g.mf(this), !0) : !1
    };
    g.h.get = function(a, b) {
        return g.lf(this.F, a) ? this.F[a] : b
    };
    g.h.set = function(a, b) {
        g.lf(this.F, a) || (this.D++, this.C.push(a), this.Je++);
        this.F[a] = b
    };
    g.h.forEach = function(a, b) {
        for (var c = this.yc(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.h.clone = function() {
        return new g.kf(this)
    };
    g.h.bd = function(a) {
        g.mf(this);
        var b = 0,
            c = this.Je,
            d = this,
            e = new g.ef;
        e.next = function() {
            if (c != d.Je) throw Error("The map has changed since the iterator was created");
            if (b >= d.C.length) throw g.ff;
            var f = d.C[b++];
            return a ? f : d.F[f]
        };
        return e
    };
    var qf = {
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
        Jaa = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    g.x(g.rf, g.C);
    g.h = g.rf.prototype;
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
            0 != this.G ? (this.D.push(a), this.C[a + 1] = g.xa) : (c && g.Pa(c, a), delete this.C[a], delete this.C[a + 1], delete this.C[a + 2])
        }
        return !!b
    };
    g.h.oa = function(a, b) {
        var c = this.F[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.L)
                for (e = 0; e < c.length; e++) {
                    var k = c[e];
                    Kaa(this.C[k + 1], this.C[k + 2], d)
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
            b && ((0, g.B)(b, this.qd, this), delete this.F[a])
        } else this.C.length = 0, this.F = {}
    };
    g.h.Gb = function(a) {
        if (a) {
            var b = this.F[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.F) a += this.Gb(b);
        return a
    };
    g.h.X = function() {
        g.rf.V.X.call(this);
        this.clear();
        this.D.length = 0
    };
    g.tf.prototype.set = function(a, b) {
        void 0 === b ? this.C.remove(a) : this.C.set(a, g.of(b))
    };
    g.tf.prototype.get = function(a) {
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
    g.tf.prototype.remove = function(a) {
        this.C.remove(a)
    };
    g.x(uf, g.tf);
    uf.prototype.set = function(a, b) {
        uf.V.set.call(this, a, wf(b))
    };
    uf.prototype.F = function(a) {
        a = uf.V.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    uf.prototype.get = function(a) {
        if (a = this.F(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };
    g.x(g.yf, uf);
    g.yf.prototype.set = function(a, b, c) {
        if (b = wf(b)) {
            if (c) {
                if (c < (0, g.$c)()) {
                    g.yf.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = (0, g.$c)()
        }
        g.yf.V.set.call(this, a, b)
    };
    g.yf.prototype.F = function(a, b) {
        var c = g.yf.V.F.call(this, a);
        if (c)
            if (!b && g.zf(c)) g.yf.prototype.remove.call(this, a);
            else return c
    };
    g.x(Af, Laa);
    Af.prototype.Gb = function() {
        var a = 0;
        g.hf(this.bd(!0), function() {
            a++
        });
        return a
    };
    Af.prototype.clear = function() {
        var a = Gaa(this.bd(!0)),
            b = this;
        (0, g.B)(a, function(c) {
            b.remove(c)
        })
    };
    g.x(g.Bf, Af);
    g.h = g.Bf.prototype;
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
    g.h.Gb = function() {
        return this.C.length
    };
    g.h.bd = function(a) {
        var b = 0,
            c = this.C,
            d = new g.ef;
        d.next = function() {
            if (b >= c.length) throw g.ff;
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
    g.x(g.Cf, g.Bf);
    g.x(Ff, Af);
    var Maa = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Ef = null;
    g.h = Ff.prototype;
    g.h.isAvailable = function() {
        return !!this.C
    };
    g.h.set = function(a, b) {
        this.C.setAttribute(Gf(a), b);
        Hf(this)
    };
    g.h.get = function(a) {
        a = this.C.getAttribute(Gf(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    g.h.remove = function(a) {
        this.C.removeAttribute(Gf(a));
        Hf(this)
    };
    g.h.Gb = function() {
        return If(this).attributes.length
    };
    g.h.bd = function(a) {
        var b = 0,
            c = If(this).attributes,
            d = new g.ef;
        d.next = function() {
            if (b >= c.length) throw g.ff;
            var e = c[b++];
            if (a) return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    g.h.clear = function() {
        for (var a = If(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Hf(this)
    };
    g.x(Jf, Af);
    Jf.prototype.set = function(a, b) {
        this.F.set(this.C + a, b)
    };
    Jf.prototype.get = function(a) {
        return this.F.get(this.C + a)
    };
    Jf.prototype.remove = function(a) {
        this.F.remove(this.C + a)
    };
    Jf.prototype.bd = function(a) {
        var b = this.F.bd(!0),
            c = this,
            d = new g.ef;
        d.next = function() {
            for (var e = b.next(); e.substr(0, c.C.length) != c.C;) e = b.next();
            return a ? e.substr(c.C.length) : c.F.get(e)
        };
        return d
    };
    g.Mf = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    g.r("yt.config_", g.Mf, void 0);
    var Wf = {};
    var Naa = [];
    var Lca = g.u("ytPubsubPubsubInstance") || new g.rf;
    g.rf.prototype.subscribe = g.rf.prototype.subscribe;
    g.rf.prototype.unsubscribeByKey = g.rf.prototype.qd;
    g.rf.prototype.publish = g.rf.prototype.oa;
    g.rf.prototype.clear = g.rf.prototype.clear;
    g.r("ytPubsubPubsubInstance", Lca, void 0);
    var eg = g.u("ytPubsubPubsubSubscribedKeys") || {};
    g.r("ytPubsubPubsubSubscribedKeys", eg, void 0);
    var hg = g.u("ytPubsubPubsubTopicToKeys") || {};
    g.r("ytPubsubPubsubTopicToKeys", hg, void 0);
    var fg = g.u("ytPubsubPubsubIsSynchronous") || {};
    g.r("ytPubsubPubsubIsSynchronous", fg, void 0);
    var Qaa = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        Raa = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    var tm;
    tm = window;
    g.tg = tm.ytcsi && tm.ytcsi.now ? tm.ytcsi.now : tm.performance && tm.performance.timing && tm.performance.now && tm.performance.timing.navigationStart ? function() {
        return tm.performance.timing.navigationStart + tm.performance.now()
    } : function() {
        return (new Date).getTime()
    };
    var Waa, xg, yg, zg, Saa, Eg, Taa, rg, Bg;
    Waa = g.Tf("initial_gel_batch_timeout", 1E3);
    xg = Math.pow(2, 16) - 1;
    g.mh = 10;
    yg = null;
    zg = 0;
    Saa = {
        log_event: "events",
        log_interaction: "interactions"
    };
    Eg = Object.create(null);
    Eg.log_event = "GENERIC_EVENT_LOGGING";
    Eg.log_interaction = "INTERACTION_LOGGING";
    Taa = new Set(["log_event"]);
    rg = {};
    g.og = 0;
    g.pg = 0;
    g.lh = 0;
    Bg = !0;
    g.qg = g.u("ytLoggingTransportLogPayloadsQueue_") || {};
    g.r("ytLoggingTransportLogPayloadsQueue_", g.qg, void 0);
    var wg = g.u("ytLoggingTransportTokensToCttTargetIds_") || {};
    g.r("ytLoggingTransportTokensToCttTargetIds_", wg, void 0);
    var sg = g.u("ytLoggingTransportDispatchedStats_") || {};
    g.r("ytLoggingTransportDispatchedStats_", sg, void 0);
    var Fg = g.u("ytLoggingTransportCapturedTime_") || {};
    g.r("ytytLoggingTransportCapturedTime_", Fg, void 0);
    var Mca = 0,
        Xaa = g.Yl ? "webkit" : g.Xl ? "moz" : g.Df ? "ms" : g.Ul ? "o" : "",
        Ig = g.u("ytDomDomGetNextId") || function() {
            return ++Mca
        };
    g.r("ytDomDomGetNextId", Ig, void 0);
    var Yaa = {
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
    g.Lg.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    g.Lg.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    g.Lg.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var Pg = g.u("ytEventsEventsListeners") || {};
    g.r("ytEventsEventsListeners", Pg, void 0);
    var Tg = g.u("ytEventsEventsCounter") || {
        count: 0
    };
    g.r("ytEventsEventsCounter", Tg, void 0);
    var Ug = g.Sa(function() {
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
    g.um = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };
    g.vm = "Microsoft Internet Explorer" == navigator.appName;
    g.x(g.Yg, g.C);
    g.Yg.prototype.Y = function(a) {
        this.C = new g.bd(g.Ng(a), g.Og(a))
    };
    g.Yg.prototype.M = function() {
        if (this.C) {
            var a = g.um();
            if (0 != this.D) {
                var b = g.dd(this.L, this.C) / (a - this.D);
                this.F[this.H] = .5 < Math.abs((b - this.G) / this.G) ? 1 : 0;
                for (var c = 0, d = 0; 4 > d; d++) c += this.F[d] || 0;
                3 <= c && this.Pb();
                this.G = b
            }
            this.D = a;
            this.L = this.C;
            this.H = (this.H + 1) % 4
        }
    };
    g.Yg.prototype.X = function() {
        g.cg(this.N);
        g.Vg(this.J)
    };
    g.n(dh, Zaa);
    dh.prototype.start = function() {
        var a = g.u("yt.scheduler.instance.start");
        a && a()
    };
    dh.prototype.pause = function() {
        var a = g.u("yt.scheduler.instance.pause");
        a && a()
    };
    g.ya(dh);
    dh.getInstance();
    var ih = {};
    var kh = g.u("ytLoggingGelSequenceIdObj_") || {};
    g.r("ytLoggingGelSequenceIdObj_", kh, void 0);
    g.vh = new function() {
        var a = window.document;
        this.C = window;
        this.F = a
    };
    g.r("yt.ads_.signals_.getAdSignalsString", function(a) {
        return g.rh(yh(a))
    }, void 0);
    (0, g.$c)();
    var Ah = void 0 !== XMLHttpRequest ? function() {
        return new XMLHttpRequest
    } : void 0 !== ActiveXObject ? function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    } : null;
    var Dh, bba, Ih;
    Dh = {
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
    bba = "app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
    Ih = !1;
    g.zm = Jh;
    g.Uh.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.C) try {
            this.C.set(a, b, (0, g.$c)() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(g.of(b))
        } catch (f) {
            return
        } else e = escape(b);
        g.Sh(a, e, c, this.F)
    };
    g.Uh.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.C;
        if (!d) try {
            c = this.C.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = g.Rh.get("" + a, void 0)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    g.Uh.prototype.remove = function(a) {
        this.C && this.C.remove(a);
        g.Th(a, "/", this.F)
    };
    var Vh = new g.Uh("yt.innertube");
    g.Yh.prototype.isReady = function() {
        !this.C && Nh() && (this.C = Oh());
        return !!this.C
    };
    g.n(g.ai, Error);
    g.Am = new Set;
    g.di.prototype.initialize = function(a, b, c, d, e, f) {
        var k = this;
        f = void 0 === f ? !1 : f;
        b ? (this.F = !0, g.mg(b, function() {
            k.F = !1;
            window.botguard ? ei(k, c, d, f) : (g.ng(b), g.ci(new g.ai("Unable to load Botguard", "from " + b)))
        })) : a && (eval(a), window.botguard ? ei(this, c, d, f) : g.ci(Error("Unable to load Botguard from JS")))
    };
    g.di.prototype.Nd = function() {
        return !!this.C
    };
    g.di.prototype.dispose = function() {
        this.C = null
    };
    g.gi = new g.di;
    hi.prototype.then = function(a, b, c) {
        return this.D ? this.D.then(a, b, c) : 1 === this.F && a ? (a = a.call(c, this.C), g.Fe(a) ? a : g.ji(a)) : 2 === this.F && b ? (a = b.call(c, this.C), g.Fe(a) ? a : g.ii(a)) : this
    };
    hi.prototype.getValue = function() {
        return this.C
    };
    g.Ee(hi);
    g.n(ki, g.C);
    ki.prototype.Va = function(a) {
        for (var b = 0; b < this.C.length; b++)
            if (this.C[b] == a) {
                this.C.splice(b, 1);
                a.target.removeEventListener(a.name, a.callback);
                break
            }
    };
    ki.prototype.X = function() {
        for (; this.C.length;) {
            var a = this.C.pop();
            a.target.removeEventListener(a.name, a.callback)
        }
        g.C.prototype.X.call(this)
    };
    li.prototype.clone = function() {
        var a = new li,
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "object" == g.za(c) ? a[b] = g.$a(c) : a[b] = c
            } return a
    };
    var ni = (0, g.$c)().toString();
    var pi = g.u("ytLoggingDocDocumentNonce_") || oi();
    g.r("ytLoggingDocDocumentNonce_", pi, void 0);
    g.ri.prototype.toString = function() {
        return JSON.stringify(g.si(this))
    };
    g.r("yt_logging_screen.getRootVeType", vi, void 0);
    g.r("yt_logging_screen.getCurrentCsn", g.yi, void 0);
    g.r("yt_logging_screen.getCttAuthInfo", g.zi, void 0);
    g.r("yt_logging_screen.setCurrentScreen", g.Ai, void 0);
    g.Ci.prototype.toString = function() {
        return this.topic
    };
    var Nca = g.u("ytPubsub2Pubsub2Instance") || new g.rf;
    g.rf.prototype.subscribe = g.rf.prototype.subscribe;
    g.rf.prototype.unsubscribeByKey = g.rf.prototype.qd;
    g.rf.prototype.publish = g.rf.prototype.oa;
    g.rf.prototype.clear = g.rf.prototype.clear;
    g.r("ytPubsub2Pubsub2Instance", Nca, void 0);
    var Fi = g.u("ytPubsub2Pubsub2SubscribedKeys") || {};
    g.r("ytPubsub2Pubsub2SubscribedKeys", Fi, void 0);
    var Hi = g.u("ytPubsub2Pubsub2TopicToKeys") || {};
    g.r("ytPubsub2Pubsub2TopicToKeys", Hi, void 0);
    var Gi = g.u("ytPubsub2Pubsub2IsAsync") || {};
    g.r("ytPubsub2Pubsub2IsAsync", Gi, void 0);
    g.r("ytPubsub2Pubsub2SkipSubKey", null, void 0);
    g.n(Ki, g.Bi);
    var mba = new g.Ci("screen-created", Ki),
        Li = [],
        Mi = 0;
    var Vi, Ti;
    Vi = 0;
    g.Ui = null;
    Ti = null;
    g.h = g.Xi.prototype;
    g.h.dG = function() {
        this.Nd() || this.init()
    };
    g.h.enable = function() {
        this.C = 1;
        (0, g.B)("string" == typeof this.page ? [this.page] : this.page, function(a) {
            a && (this.subscribe("init-" + a, this.dG, this), this.subscribe("dispose-" + a, this.dispose, this), g.E("PAGE_NAME") == a && g.Yi(this))
        }, this)
    };
    g.h.init = function() {
        g.bh(this.F);
        this.C = 2;
        this.L && this.L()
    };
    g.h.Nd = function() {
        return 2 == this.C
    };
    g.h.dispose = function() {
        this.C = 3;
        g.bh(this.F);
        this.H && this.H()
    };
    g.h.disable = function() {
        this.C = 4;
        this.clear();
        try {
            this.dispose()
        } catch (a) {
            g.Xf(a)
        }
    };
    g.h.subscribe = function(a, b, c) {
        a = g.ig(a, b, c);
        this.G.push(a);
        return a
    };
    g.h.clear = function() {
        g.jg(this.G);
        this.G = []
    };
    var Zi = g.u("yt.modules.registry_") || {};
    g.r("yt.modules.registry_", Zi, void 0);
    g.bj = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {};
    g.r("yt.msgs_", g.bj, void 0);
    var hj = {},
        qba = 0;
    var rba = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    g.n(vj, g.C);
    g.h = vj.prototype;
    g.h.getId = function() {
        return this.ha
    };
    g.h.loadNewVideoConfig = function(a) {
        if (!this.qb()) {
            this.aa && (g.bg(this.aa), this.aa = 0);
            this.nb = a = g.mi(a);
            this.C = a.clone();
            tj(this);
            this.qa || (this.qa = Ej(this, this.C.args.jsapicallback || "onYouTubePlayerReady"));
            this.C.args.jsapicallback = null;
            (a = this.C.attrs.width) && g.Ed(this.L, Number(a) || a);
            if (a = this.C.attrs.height) this.L.style.height = g.Dd(Number(a) || a, !0);
            uj(this);
            this.M && wj(this)
        }
    };
    g.h.Zu = function() {
        return this.nb
    };
    g.h.dz = function() {
        return this.M
    };
    g.h.Jh = function(a, b) {
        var c = this,
            d = Ej(this, b);
        if (d) {
            if (!g.Ma(this.Pd, a) && !this.G[a]) {
                var e = tba(this, a);
                this.N && this.N(a, e)
            }
            this.Y.subscribe(a, d);
            "onReady" == a && this.M && g.$f(function() {
                d(c.api)
            }, 0)
        }
    };
    g.h.RF = function(a, b) {
        if (!this.qb()) {
            var c = Ej(this, b);
            c && g.sf(this.Y, a, c)
        }
    };
    g.h.Ct = function(a) {
        g.H("a11y-announce", a)
    };
    g.h.iD = function(a) {
        g.H("WATCH_LATER_VIDEO_ADDED", a)
    };
    g.h.jD = function(a) {
        g.H("WATCH_LATER_VIDEO_REMOVED", a)
    };
    g.h.tv = function() {
        return this.la || (xj(this) ? "html5" : null)
    };
    g.h.gv = function() {
        return this.kb
    };
    g.h.cancel = function() {
        if (this.J) {
            var a = this.J,
                b = g.lg(yj(this));
            spf.script.ignore(b, a)
        }
        g.bg(this.sb);
        this.T = !1
    };
    g.h.X = function() {
        Bj(this);
        if (this.H && this.C && this.H.destroy) try {
            this.H.destroy()
        } catch (b) {
            g.Xf(b)
        }
        this.ib = null;
        for (var a in this.G) g.q[this.G[a]] = null;
        this.nb = this.C = this.api = null;
        delete this.Ya;
        delete this.L;
        g.C.prototype.X.call(this)
    };
    g.Gj = {};
    g.Fj = "player_uid_" + (1E9 * Math.random() >>> 0);
    var Nj = null;
    g.Bm = window.performance && window.performance.memory;
    g.ol = {};
    g.n(Oj, g.Bi);
    g.n(Pj, g.Bi);
    var xba = new g.Ci("aft-recorded", Oj),
        Gba = new g.Ci("timing-sent", Pj);
    var Cm = window,
        Sj = Cm.performance || Cm.mozPerformance || Cm.msPerformance || Cm.webkitPerformance || new wba;
    var dk = !1;
    var kk = g.u("ytLoggingLatencyUsageStats_") || {};
    g.r("ytLoggingLatencyUsageStats_", kk, void 0);
    ik.prototype.tick = function(a, b, c) {
        lk(this, "tick_" + a + "_" + b) || g.Zh("latencyActionTicked", {
            tickName: a,
            clientActionNonce: b
        }, {
            timestamp: c
        })
    };
    ik.prototype.info = function(a, b) {
        var c = Object.keys(a).join("");
        lk(this, "info_" + c + "_" + b) || (a.clientActionNonce = b, g.Zh("latencyActionInfo", a))
    };
    var Dm = {},
        Ak = (Dm.ad_to_ad = "LATENCY_ACTION_AD_TO_AD", Dm.ad_to_video = "LATENCY_ACTION_AD_TO_VIDEO", Dm.app_startup = "LATENCY_ACTION_APP_STARTUP", Dm["artist.analytics"] = "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS", Dm["artist.events"] = "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS", Dm["artist.presskit"] = "LATENCY_ACTION_CREATOR_ARTIST_PROFILE", Dm.browse = "LATENCY_ACTION_BROWSE", Dm.channels = "LATENCY_ACTION_CHANNELS", Dm.channel = "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD", Dm["channel.analytics"] = "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
            Dm["channel.comments"] = "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS", Dm["channel.copyright"] = "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT", Dm["channel.monetization"] = "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION", Dm["channel.translations"] = "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS", Dm["channel.videos"] = "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS", Dm.chips = "LATENCY_ACTION_CHIPS", Dm["dialog.copyright_strikes"] = "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES", Dm["dialog.uploads"] = "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
            Dm.embed = "LATENCY_ACTION_EMBED", Dm.home = "LATENCY_ACTION_HOME", Dm.library = "LATENCY_ACTION_LIBRARY", Dm.live = "LATENCY_ACTION_LIVE", Dm.onboarding = "LATENCY_ACTION_KIDS_ONBOARDING", Dm.parent_profile_settings = "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS", Dm.prebuffer = "LATENCY_ACTION_PREBUFFER", Dm.prefetch = "LATENCY_ACTION_PREFETCH", Dm.profile_settings = "LATENCY_ACTION_KIDS_PROFILE_SETTINGS", Dm.profile_switcher = "LATENCY_ACTION_KIDS_PROFILE_SWITCHER", Dm.results = "LATENCY_ACTION_RESULTS", Dm.search_ui = "LATENCY_ACTION_SEARCH_UI",
            Dm.search_zero_state = "LATENCY_ACTION_SEARCH_ZERO_STATE", Dm.secret_code = "LATENCY_ACTION_KIDS_SECRET_CODE", Dm.settings = "LATENCY_ACTION_SETTINGS", Dm.tenx = "LATENCY_ACTION_TENX", Dm.video_to_ad = "LATENCY_ACTION_VIDEO_TO_AD", Dm.watch = "LATENCY_ACTION_WATCH", Dm.watch_it_again = "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN", Dm["watch,watch7"] = "LATENCY_ACTION_WATCH", Dm["watch,watch7_html5"] = "LATENCY_ACTION_WATCH", Dm["watch,watch7ad"] = "LATENCY_ACTION_WATCH", Dm["watch,watch7ad_html5"] = "LATENCY_ACTION_WATCH", Dm.wn_comments =
            "LATENCY_ACTION_LOAD_COMMENTS", Dm.ww_rqs = "LATENCY_ACTION_WHO_IS_WATCHING", Dm["video.analytics"] = "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS", Dm["video.comments"] = "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS", Dm["video.edit"] = "LATENCY_ACTION_CREATOR_VIDEO_EDIT", Dm["video.translations"] = "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS", Dm["video.video_editor"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR", Dm["video.video_editor_async"] = "LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC", Dm["video.monetization"] = "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
            Dm.voice_assistant = "LATENCY_ACTION_VOICE_ASSISTANT", Dm.cast_load_by_entity_to_watch = "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH", Dm),
        Em = {},
        pk = (Em.ad_allowed = "adTypesAllowed", Em.yt_abt = "adBreakType", Em.ad_cpn = "adClientPlaybackNonce", Em.ad_docid = "adVideoId", Em.yt_ad_an = "adNetworks", Em.ad_at = "adType", Em.browse_id = "browseId", Em.p = "httpProtocol", Em.t = "transportProtocol", Em.cpn = "clientPlaybackNonce", Em.ccs = "creatorInfo.creatorCanaryState", Em.cseg = "creatorInfo.creatorSegment", Em.csn = "clientScreenNonce",
            Em.docid = "videoId", Em.GetHome_rid = "getHomeRequestId", Em.GetSearch_rid = "getSearchRequestId", Em.GetPlayer_rid = "getPlayerRequestId", Em.GetWatchNext_rid = "getWatchNextRequestId", Em.GetBrowse_rid = "getBrowseRequestId", Em.GetLibrary_rid = "getLibraryRequestId", Em.is_continuation = "isContinuation", Em.is_nav = "isNavigation", Em.b_p = "kabukiInfo.browseParams", Em.is_prefetch = "kabukiInfo.isPrefetch", Em.is_secondary_nav = "kabukiInfo.isSecondaryNav", Em.prev_browse_id = "kabukiInfo.prevBrowseId", Em.query_source = "kabukiInfo.querySource",
            Em.voz_type = "kabukiInfo.vozType", Em.yt_lt = "loadType", Em.mver = "creatorInfo.measurementVersion", Em.yt_ad = "isMonetized", Em.nr = "webInfo.navigationReason", Em.nrsu = "navigationRequestedSameUrl", Em.ncnp = "webInfo.nonPreloadedNodeCount", Em.pnt = "performanceNavigationTiming", Em.prt = "playbackRequiresTap", Em.plt = "playerInfo.playbackType", Em.pis = "playerInfo.playerInitializedState", Em.paused = "playerInfo.isPausedOnLoad", Em.yt_pt = "playerType", Em.fmt = "playerInfo.itag", Em.yt_pl = "watchInfo.isPlaylist", Em.yt_pre = "playerInfo.preloadType",
            Em.yt_ad_pr = "prerollAllowed", Em.pa = "previousAction", Em.yt_red = "isRedSubscriber", Em.rce = "mwebInfo.responseContentEncoding", Em.scrh = "screenHeight", Em.scrw = "screenWidth", Em.st = "serverTimeMs", Em.aq = "tvInfo.appQuality", Em.br_trs = "tvInfo.bedrockTriggerState", Em.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", Em.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", Em.label = "tvInfo.label", Em.is_mdx = "tvInfo.isMdx", Em.preloaded = "tvInfo.isPreloaded", Em.upg_player_vis = "playerInfo.visibilityState", Em.query =
            "unpluggedInfo.query", Em.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", Em.yt_vst = "videoStreamType", Em.vph = "viewportHeight", Em.vpw = "viewportWidth", Em.yt_vis = "isVisible", Em.rcl = "mwebInfo.responseContentLength", Em.GetSettings_rid = "mwebInfo.getSettingsRequestId", Em.GetTrending_rid = "mwebInfo.getTrendingRequestId", Em.GetMusicSearchSuggestions_rid = "musicInfo.getMusicSearchSuggestionsRequestId", Em),
        zba = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        Fm = {},
        qk = (Fm.ccs = "CANARY_STATE_", Fm.mver = "MEASUREMENT_VERSION_", Fm.pis = "PLAYER_INITIALIZED_STATE_", Fm.yt_pt = "LATENCY_PLAYER_", Fm.pa = "LATENCY_ACTION_", Fm.yt_vst = "VIDEO_STREAM_TYPE_", Fm),
        Aba = "all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
    if (g.Sf("overwrite_polyfill_on_logging_lib_loaded")) {
        var Gm = window;
        Gm.ytcsi && (Gm.ytcsi.info = uk)
    };
    var zk = {
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
        Bba = (0, g.v)(Sj.clearResourceTimings ||
            Sj.webkitClearResourceTimings || Sj.mozClearResourceTimings || Sj.msClearResourceTimings || Sj.oClearResourceTimings || g.xa, Sj),
        Hm = window;
    g.Sf("csi_on_gel") && Hm.ytcsi && (Hm.ytcsi.tick = g.wk);
    var Pk = 0,
        Lk = [],
        Ok = [],
        Ik = 0,
        Mk = {},
        Nk = {},
        Jk = new g.$e(Nba, 1E3);
    var Rk = ["server_prefetched_vast", "vmap"];
    var Tk;
    var Xk = null,
        $k = [];
    var dl, ul, tl, fl, el, Uba, Xba, Vba, Wba, pl;
    fl = 0;
    el = 0;
    Uba = [900, 60, "waiting"];
    Xba = [500, 99, "waiting"];
    Vba = [300, 60, "waiting"];
    Wba = [400, 99, "waiting"];
    pl = [300, 101, "done"];
    var Bl = !1;
    window.yt = window.yt || {};
    g.r("yt.setConfig", g.Nf, void 0);
    g.r("yt.pushConfigArray", Of, void 0);
    g.r("yt.getConfig", g.E, void 0);
    g.r("yt.config.set", g.Nf, void 0);
    g.r("yt.config.pushArray", Of, void 0);
    g.r("yt.config.get", g.E, void 0);
    g.r("yt.hasMsg", g.dj, void 0);
    g.r("yt.setMsg", cj, void 0);
    g.r("yt.setGoogMsg", ej, void 0);
    g.r("yt.msgs.has", g.dj, void 0);
    g.r("yt.msgs.set", cj, void 0);
    g.r("yt.msgs.setGoog", ej, void 0);
    g.r("yt.pubsub.publish", g.H, void 0);
    g.r("yt.pubsub.subscribe", g.ig, void 0);
    g.r("ytcsi.tick", g.wk, void 0);
    g.x(El, g.Xi);
    El.prototype.enable = function() {
        window.onload = Sba;
        window.onunload = Tba;
        window.onerror = Paa;
        var a = window.ytspf || {};
        a.enabled ? (window.addEventListener && (window.addEventListener("spfclick", bl), window.addEventListener("spfhistory", cl), window.addEventListener("spfrequest", hl), window.addEventListener("spfpartprocess", kl), window.addEventListener("spfpartdone", ll), window.addEventListener("spfprocess", ml), window.addEventListener("spfdone", ql), window.addEventListener("spferror", rl), window.addEventListener("spfreload",
            sl), window.addEventListener("spfjsbeforeunload", Fl)), a.config = a.config || {}, window.ytdepmap ? spf.script.ready("spf", function() {
            a.enabled = spf.init(a.config)
        }) : a.enabled = spf.init(a.config), this.subscribe("init", Zba), this.subscribe("dispose", $ba)) : spf.dispose();
        this.subscribe("init", this.init, this);
        this.subscribe("dispose", this.dispose, this)
    };
    El.prototype.init = function() {
        El.V.init.call(this);
        (window.ytspf || {}).enabled || spf.dispose();
        var a = window.ytPageFrameLoaded || !1;
        if (!a && g.E("PAGEFRAME_JS")) {
            var b = g.E("PAGEFRAME_JS", void 0);
            var c = function() {
                var e = g.u("ytbin.www.pageframe.setup");
                e && (window.ytPageFrameLoaded = !0, e())
            }
        } else a && (a = g.u("yt.www.masthead.loadSearchbox")) && a();
        a = g.E("JS_COMMON_MODULE");
        var d = g.E("JS_PAGE_MODULES");
        d || (d = [a]);
        a = g.E("JS_DELAY_LOAD", 0);
        0 < a ? (g.bg(this.D), this.D = g.$f(function() {
            b && g.mg(b, c);
            spf.script.require(d)
        }, a)) : (b && g.mg(b, c), spf.script.require(d));
        g.r("yt.abuse.player.botguardInitialized", iba, void 0);
        g.r("yt.abuse.player.invokeBotguard", jba, void 0);
        g.r("yt.abuse.dclkstatus.checkDclkStatus", hba, void 0);
        g.r("yt.player.exports.navigate", g.rj, void 0);
        g.r("yt.util.activity.init", g.hh, void 0);
        g.r("yt.util.activity.getTimeSinceActive", g.jh, void 0);
        g.r("yt.util.activity.setTimestamp", g.fh, void 0);
        Wk(g.u("ytplayer.config"));
        g.u("ytspf.enabled") && Qba();
        Fba();
        g.E("SERVICE_WORKER_KILLSWITCH", void 0) || navigator.serviceWorker && navigator.serviceWorker.getRegistrations &&
            "https:" == window.location.protocol && (g.Sf("service_worker_enabled") ? pca() : nca())
    };
    El.prototype.dispose = function() {
        g.bg(this.D);
        var a = g.u("ytbin.www.pageframe.cancelSetup");
        a && a();
        g.cg(Tk);
        if (a = g.Vk()) a.removeEventListener("onReady", Uk), a.removeEventListener("onStateChange", Uk);
        Wj(!1);
        (a = (a = (a = document.getElementById("ticker")) && "TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT" == g.F(a, "trigger-condition") ? a : null) ? a.querySelector(".yt-uix-button-alert-info") : null) && g.Xg(a);
        El.V.dispose.call(this)
    };
    El.prototype.disable = function() {
        El.V.disable.call(this);
        window.removeEventListener && (window.removeEventListener("spfclick", bl), window.removeEventListener("spfhistory", cl), window.removeEventListener("spfrequest", hl), window.removeEventListener("spfpartprocess", kl), window.removeEventListener("spfpartdone", ll), window.removeEventListener("spfprocess", ml), window.removeEventListener("spfdone", ql), window.removeEventListener("spferror", rl), window.removeEventListener("spfreload", sl), window.removeEventListener("spfjsbeforeunload",
            Fl));
        window.onload = null;
        window.onunload = null;
        window.onerror = null
    };
    g.aj(new El);
})(_yt_www);