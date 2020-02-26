! function () {
    function k(a) {
        var b, d;
        for (a = e(a), b = c(a.charCodeAt(0) - a.length), d = 1; d < a.length; d++) b += c(a.charCodeAt(d) - b.charCodeAt(
            d - 1));
        return b
    }
    var rb, sb, tb, ub, vb, wb, xb, yb, zb, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, a = Date,
        b = String,
        c = b.fromCharCode,
        e = unescape,
        f = clearTimeout,
        g = setTimeout,
        h = Math.random,
        i = Math.round,
        j = {},
        l = window,
        m = -1,
        n = k("j%C4%C6%C8%D8%E6%DE%D0%DE"),
        o = k("x%ED%E9%D5"),
        p = k("%7B%DD%D6%D2%D4%E4%E9"),
        q = k("G%A4%D7%DD%D8%DD"),
        r = k("t%CB%D7%D7%D4%D6%D5%DB%D9%E4"),
        s = k("%3Acie%5E%5E%5E%5E_"),
        t = k("l%CD%C6%C5"),
        u = k("/"),
        v = k("Y%C7%E6%D3%D5%E3"),
        w = k("a%BC%C7%B2%C2%DB%D7%E2%D9%D7"),
        x = k("_%C6%E1%DD%AC%B3%D7%C6"),
        y = v + u + w + u + x,
        z = k("y%D6%D5%DB%D9%E4"),
        A = k("o%CF%D8%D3%CE%D2"),
        B = k("%7E%E3%D2%C9%CB%CF%D7%D3%C9"),
        C = k("n%DB%E3%D1%D7%DD%D8%DD"),
        D = k("@"),
        E = k("%3E"),
        F = k("%27"),
        G = k("w%D7%D6%DA%CD"),
        H = k("i%C9%CB%CB%D7"),
        I = k("%83%D9%DD%EC%A3%99%CB%D7%D7%D4%D6%D5%DB%D9%E4"),
        J = k("d%B7%D8%E2%E4%E7%D5%C8%85n%BD%E3%94f%B5%E4%E3%D2"),
        K = k("v%E6%DA%D7%EB"),
        L = k("l%DC%E8%E4"),
        M = k("0"),
        N = k("%3B"),
        O = k("-"),
        P = k("l%CD%D7"),
        Q = k("L%92%9D%9C%93%88%97%99%89"),
        R = k("G%8D%9C") + Q,
        S = k("W%A6%9A%9A%9A%89"),
        T = k("N%8F%97%97%9C%9B%8D%89"),
        U = k("%5C%A8%97%8F%9A%96%9D%99%89"),
        V = k("J%97%A4%A1%A1"),
        W = k("K%84%8F%91%88%91%91%89"),
        X = k("n%D1%CD%C8%C9%D3"),
        Y = k("n%D7%DE%E5%E9"),
        Z = k("j%D5%E1%DF"),
        $ = k("r%CF%CE%D2"),
        _ = k("%7C%D9%DD%EC%D5%D3%D7%C6"),
        ab = k("t%DF%E2%E7"),
        bb = k("d%C4%CE"),
        cb = bb + k("%5C%C8%D7%CF%DA%D6%DD%D9%C9"),
        db = bb + k("W%C2%DB%D7%E2%D9%C9"),
        eb = k("%5D%A7%A6%93%95%A3%7D%85%A7%7E"),
        fb = k("%5B%AB%A5"),
        gb = k("X%95%94%9E"),
        hb = k("x%D5%D4%DE"),
        ib = k("r%DD%DD%D3"),
        jb = k("j%D2%DD%E2%D9%D3%E2"),
        kb = k("t%D7%E2%D9%D7%D3%C4%D7%DD%DF%DB"),
        lb = k("u%D3%DC%EB%D5%D4%DE"),
        mb = k("w%E2%DB%D7%E2%D9%D7"),
        nb = k("a%u6785%uDF0F%uCBF2%uCDFD%u7A4D"),
        ob = k("d%D1%D9"),
        pb = k("p%D5%DC%E7");
    k("i%C4%CF%D1%C8%D1"), rb = k("y%E7%D5%D5%E9%E8"), sb = k("%29"), tb = k("*"), ub = k("k%C9%CB%C7%D6%E1%E0"), vb =
        k("s%D5%CC%C8%D3%E1%D8"), wb = k("p%D7%E1%E7%D5%CD%D8"), xb = k("j%CC%D9"), yb = k("i%DB%D7%CD"), zb = k(
        "i%D2%DD%D4%CF%D0"), k("f%D3%E4%D3%DA"), Bb = k("y%E7%E6%DB%D7%D5"), Cb = k("u%D1%CC%CF%C8%D7"), Db = k(
        "q%CD%C3%C7%D1"), Eb = k("x%D9%DD%EC"), Fb = k("x%DF%E2%DC%DD%DD%D8%DD"), Gb = k("n%D5%DD%E2%C7%BC%E3%DF"),
        Hb = k("p%D5%DD%E2%BA%A7%CE%D6%D5%E5"), Ib = k("t%E3%E2%CF%C7%D7"), Jb = k("o%D5%DD%E2%B7%B2%DB%DB%E1"), Kb = k(
        "%7C%E8%E5%E0%DF%E1%E6%D9%C9"), Lb = k("v%D1%D1%D5%D7%E5"), Mb = k(
        "%7D%D4%CA%B8%B7%D3%D2%C9%D7%C6%CD%E9%D5"), Nb = 200, Ob = 2e3, Pb = 404, Qb = window[yb], typeof l[v] == B &&
    (l[v] = function () {}),
        function () {
            function c(a) {
                return Qb(sb + a + tb)
            }

            function d(a) {
                return b.createElement(a)
            }

            function e() {
                var a = b.getElementById(y);
                return a || (a = d(t), a.id = y, b.body.appendChild(a)), a
            }

            function Ab(a, b) {
                return typeof a == B ? b : a
            }
            var Tb, Ub, Vb, Wb, Xb, Yb, Zb, b = document,
                k = i(1e3 * h()),
                w = function () {
                    return (new a).getTime() + "" + k++
                },
                x = {},
                qb = {},
                yb = function (a, b, c) {
                    var k, l, h = w(),
                        i = d(z),
                        j = eb + fb + u + h;
                    a = a.indexOf(D) == m ? a + D + G + E + j : a + F + G + E + j, i.id = h, i.src = a, i.defer = H, i.type =
                        I, k = e(), k.appendChild(i), l = function (a) {
                        var e, g, h, j;
                        if (i.parentNode.removeChild(i), e = qb[a], e && (f(e), qb[a] = null, delete qb[a]), x[a] =
                            null, delete x[a], typeof b == C) {
                            if (g = [], h = arguments.length, h > 1)
                                for (j = 1; h > j; j++) g.push(arguments[j]);
                            b.apply({}, g)
                        }
                    }, x[j] = l, c && c > 0 && (qb[j] = g(function () {
                        l(j, Pb, J), x[j] = null, delete x[j]
                    }, c))
                },
                Rb = l[v].WebPrinter = function (a) {
                    a = a || {}, this.config = a;
                    var b = Ab(a.autoConnect, !0);
                    this.init(), b && this.connect(!0)
                },
                Sb = Rb.prototype;
            Sb._xsOK = function (a) {
                var d = x[a];
                typeof d == C && d.apply({}, arguments)
            }, Sb.url = function (a) {
                var g, b = this,
                    c = Ab(b.config.host, s),
                    d = Ab(b.config.port, 39898),
                    e = L + N + M + M + c + N + d + a,
                    f = b.config.accesskey;
                return f && (g = a.indexOf(D), e += g == m ? D + n + E + f : F + n + E + f), e
            }, Sb.query = function (a) {
                var b = this;
                yb(b.url(M + K), a, 3e3)
            }, Tb = {}, Sb.on = function (a, b) {
                var c = Tb[a];
                c || (c = [], Tb[a] = c), c.push(b)
            }, Sb.trigger = function (a, b) {
                var d, e, f, c = Tb[a];
                if (c)
                    for (d = 0, e = c.length; e > d; d++) f = c[d], f.apply({}, b || [])
            }, Ub = !1, Vb = !1, Sb.connect = function (a) {
                var b, c;
                a = Ab(a, !0), Ub = !0, b = this, c = function (d, e) {
                    var h, i, k, l, m, n, o, p, q, r, s, f = Ob;
                    if (d == Pb) h = Vb, Vb = !1, h && b.trigger(R), Ub = a, f = 1e3;
                    else if (d == Nb) {
                        if (h = !Vb, Vb = !0, h && b.trigger(Q), i = e.submittedTaskIds) {
                            for (k = [], l = 0, m = i.length; m > l; l++) n = i[l], j[n] && k.push(n);
                            b.ackSubmittedTaskIds(k)
                        }
                        if (o = e.printedTaskIds) {
                            for (p = [], l = 0, m = o.length; m > l; l++) n = o[l], j[n] && p.push(n);
                            b.ackPrintedTaskIds(p)
                        }
                        if (q = e.errorTasksIds) {
                            for (r = [], l = 0, m = q.length; m > l; l++) n = q[l], j[n] && r.push(n);
                            b.ackTaskIds(r, V)
                        }
                        if (s = e.canceledTaskIds) {
                            for (r = [], l = 0, m = s.length; m > l; l++) n = s[l], j[n] && r.push(n);
                            b.ackTaskIds(r, W)
                        }
                    }
                    Ub && g(function () {
                        b.query(c)
                    }, f)
                }, b.query(c)
            }, Sb.ackSubmittedTaskIds = function (a) {
                function c(a) {
                    var c = a.join(O);
                    yb(b.url(M + cb + D + P + E + c), function () {
                        var c, d, e;
                        for (c = 0, d = a.length; d > c; c++) e = a[c], j[e] && (j[e] = S, b.trigger(S, [e]))
                    }, 1e3)
                }
                var d, e, f, g, b = this;
                if (!(a.length <= 0)) {
                    for (d = 10, e = null, f = 0, g = a.length; g > f; f++) 0 == f % d && (e && c(e), e = []), e.push(
                        a[f]);
                    e && e.length > 0 && c(e)
                }
            }, Sb.ackPrintedTaskIds = function (a) {
                function c(a) {
                    var c = a.join(O);
                    yb(b.url(M + db + D + P + E + c), function () {
                        var c, d, e;
                        for (c = 0, d = a.length; d > c; c++) e = a[c], j[e] && (j[e] = T, b.trigger(T, [e]),
                            j[e] = null, delete j[e])
                    }, 1e3)
                }
                var d, e, f, g, b = this;
                if (!(a.length <= 0)) {
                    for (d = 10, e = null, f = 0, g = a.length; g > f; f++) 0 == f % d && (e && c(e), e = []), e.push(
                        a[f]);
                    e && e.length > 0 && c(e)
                }
            }, Sb.ackTaskIds = function (a, b) {
                function d(a) {
                    var d = a.join(O);
                    yb(c.url(M + bb + D + rb + E + b + F + P + E + d), function () {
                        var d, e, f;
                        for (d = 0, e = a.length; e > d; d++) f = a[d], j[f] && (j[f] = b, c.trigger(b, [f]),
                            j[f] = null, delete j[f])
                    }, 1e3)
                }
                var e, f, g, h, c = this;
                if (!(a.length <= 0)) {
                    for (e = 10, f = null, g = 0, h = a.length; h > g; g++) 0 == g % e && (f && d(f), f = []), f.push(
                        a[g]);
                    f && f.length > 0 && d(f)
                }
            }, Sb.disconnect = function () {
                Ub = !1, Vb = !1
            }, Sb.isConnected = function () {
                return Vb
            }, Wb = {}, Xb = {}, Sb.init = function () {
                var a = function (a) {
                    var b = Wb[a];
                    b && b(a, Nb)
                };
                this.on(S, function (b) {
                    a(b)
                }), this.on(T, function (b) {
                    a(b)
                }), this.on(V, function (b) {
                    a(b)
                }), this.on(W, function (b) {
                    a(b)
                })
            }, Sb.cancelTask = function (a, b, c) {
                var d = this.url(M + "cancelTask" + D + "taskId" + E + a);
                yb(d, function (a, d) {
                    a == Nb ? typeof b == C && b(d) : typeof c == C && c(a, d)
                }, Ob)
            }, Sb.newTask = function (a, b) {
                function K(a) {
                    return {
                        text: a
                    }
                }
                var F, H, I, J, L, N, O, P, Q, R, S, T, V, W, bb, cb, db, fb, c = w(),
                    h = eb + gb + u + c,
                    i = Ab(a.name, nb),
                    k = a.content,
                    l = a.type,
                    m = a.printer,
                    s = a.config,
                    t = a.labels,
                    v = a.javascript || !1,
                    x = a.interactive || !1,
                    y = this.accesskey,
                    z = a.timeout,
                    B = a.timeoutAction,
                    D = a[Mb],
                    E = d(Z);
                if (E.method = ab, E.action = this.url(M + lb), F = function (a, b) {
                    var c = d(Y);
                    c.name = a, c.type = X, c.value = b, E.appendChild(c)
                }, F(G, h), F($, i), F(r, v), F(kb, x), y && F(n, y), z && (F(p, z), B && F(p + q, B)), m && F(
                    mb, m), D && F(Mb, D), k && (H = d(_), H.style.display = ib, H.name = jb, H.value = k, E.appendChild(
                    H)), l && F(o, l), s)
                    for (I in s) J = s[I], H = d(_), H.style.display = ib, H.name = zb + u + I, H.value = J, E.appendChild(
                        H);
                if (t) {
                    if (L = [], typeof t == Cb && typeof t.length == Ib)
                        for (N = 0, O = t.length; O > N; N++) P = t[N], typeof P == Bb ? L.push(K(P)) : L.push(P);
                    else typeof t == Bb ? L.push(K(t)) : typeof t == Cb && L.push(t);
                    for (N = 0, O = L.length; O > N; N++)
                        if (Q = L[N], R = Db + u + N, S = Q[Eb])
                            for (T = [Eb, Fb, Gb, Hb, Jb], V = 0, W = T.length; W > V; V++) bb = T[V], cb = Q[bb],
                            cb && F(R + u + bb, cb)
                }
                return db = d(A), db.name = h, db.id = h, fb = e(), fb.appendChild(E), fb.appendChild(db), E.target =
                    h, j[h] = U, Wb[h] = function (a, c) {
                    Wb[a] = null;
                    var d = Xb[a];
                    f(d), delete Xb[a], E.parentNode.removeChild(E), db.parentNode.removeChild(db), typeof b ==
                    C && b(a, c)
                }, Xb[h] = g(function () {
                    var a = Wb[h];
                    a && a(h, Pb)
                }, 10 * Ob), E.submit(), h
            }, Sb.listTasks = function (a, b, c) {
                var d, e, f, g, h;
                for (a = a || [], d = [], e = 0, f = a.length; f > e; e++) g = a[e], d.push(rb + E + g);
                h = this.url(M + ob + M + hb + M + pb + D + d.join(F)), yb(h, function (a, d) {
                    a == Nb ? typeof b == C && b(d) : typeof c == C && c(a, d)
                }, Ob)
            }, Sb.listPrinters = function (a, b) {
                var c = this.url(M + ob + M + mb + M + pb);
                yb(c, function (c, d) {
                    c == Nb ? typeof a == C && a(d) : typeof b == C && b(c, d)
                })
            }, Sb.getDefaultPrinter = function (a, b) {
                var c = this.url(M + ob + M + mb + M + ub);
                yb(c, function (c, d) {
                    c == Nb ? typeof a == C && a(d) : typeof b == C && b(c, d)
                })
            }, Sb.listSupportedPapers = function (a, b, c) {
                var d = this.url(M + ob + M + mb + M + Kb + M + Lb + D + mb + E + encodeURIComponent(a));
                yb(d, function (a, d) {
                    a == Nb ? typeof b == C && b(d) : typeof c == C && c(a, d)
                })
            }, Sb.installLicense = function (a) {
                var b = this.url(M + vb + M + wb + D + vb + E + a);
                yb(b)
            }, Sb.getLicense = function (a) {
                var b = this.url(M + vb + M + xb);
                yb(b, function (b, d) {
                    b == Nb && typeof a == C && a(c(d))
                }, 1e3)
            }, Yb = null, Zb = null, Rb.setup = function (a) {
                Zb = a
            }, Rb.getInstance = function () {
                return null == Yb && (Yb = new Rb(Zb)), Yb
            }
        }()
}();
