!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("react"), require("axios"))
        : "function" == typeof define && define.amd
            ? define(["exports", "react", "axios"], t)
            : t(
                ((e = "undefined" != typeof globalThis ? globalThis : e || self)[
                    "fl-hooks"
                ] = {}),
                e.react,
                e.axios
            );
})(this, function (e, t, n) {
    "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var r =
        function () {
            return (
                (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }),
                r.apply(this, arguments)
            );
        };
    function o(e, t, n, r) {
        return new (n || (n = Promise))(function (o, a) {
            function c(e) {
                try {
                    u(r.next(e));
                } catch (e) {
                    a(e);
                }
            }
            function i(e) {
                try {
                    u(r.throw(e));
                } catch (e) {
                    a(e);
                }
            }
            function u(e) {
                var t;
                e.done
                    ? o(e.value)
                    : ((t = e.value),
                        t instanceof n
                            ? t
                            : new n(function (e) {
                                e(t);
                            })).then(c, i);
            }
            u((r = r.apply(e, t || [])).next());
        });
    }
    function a(e, t) {
        var n,
            r,
            o,
            a,
            c = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (a = { next: i(0), throw: i(1), return: i(2) }),
            "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
            a
        );
        function i(a) {
            return function (i) {
                return (function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;)
                        try {
                            if (
                                ((n = 1),
                                    r &&
                                    (o =
                                        2 & a[0]
                                            ? r.return
                                            : a[0]
                                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                                : r.next) &&
                                    !(o = o.call(r, a[1])).done)
                            )
                                return o;
                            switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return c.label++, { value: a[1], done: !1 };
                                case 5:
                                    c.label++, (r = a[1]), (a = [0]);
                                    continue;
                                case 7:
                                    (a = c.ops.pop()), c.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !((o = c.trys),
                                            (o = o.length > 0 && o[o.length - 1]) ||
                                            (6 !== a[0] && 2 !== a[0]))
                                    ) {
                                        c = 0;
                                        continue;
                                    }
                                    if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                                        c.label = a[1];
                                        break;
                                    }
                                    if (6 === a[0] && c.label < o[1]) {
                                        (c.label = o[1]), (o = a);
                                        break;
                                    }
                                    if (o && c.label < o[2]) {
                                        (c.label = o[2]), c.ops.push(a);
                                        break;
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue;
                            }
                            a = t.call(e, c);
                        } catch (e) {
                            (a = [6, e]), (r = 0);
                        } finally {
                            n = o = 0;
                        }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, i]);
            };
        }
    }
    var c = n,
        i = function (e, t) {
            switch (t.type) {
                case "FETCH_INIT":
                    return r(r({}, e), { loading: !0, error: !1 });
                case "FETCH_SUCCESS":
                    return r(r({}, e), { loading: !1, error: !1, data: t.payload });
                case "FETCH_FAILURE":
                    return r(r({}, e), { loading: !1, error: !0 });
                default:
                    throw new Error();
            }
        };
    function u(e) {
        var u = this,
            l = t.useState(e),
            s = l[0],
            f = l[1],
            p = t.useReducer(i, { loading: !1, error: !1, data: null }),
            d = p[0],
            y = p[1];
        t.useEffect(
            function () {
                var t = new AbortController();
                return (
                    o(u, void 0, void 0, function () {
                        var o, i;
                        return a(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    y({ type: "FETCH_INIT" }), (a.label = 1);
                                case 1:
                                    return (
                                        a.trys.push([1, 3, , 4]),
                                        [4, c(r(r({}, e), { cancelToken: void 0 }))]
                                    );
                                case 2:
                                    return (
                                        (o = a.sent()),
                                        t.signal.aborted ||
                                        y({ type: "FETCH_SUCCESS", payload: o.data }),
                                        [3, 4]
                                    );
                                case 3:
                                    return (
                                        (i = a.sent()),
                                        n.isCancel(i) || y({ type: "FETCH_FAILURE" }),
                                        [3, 4]
                                    );
                                case 4:
                                    return [2];
                            }
                        });
                    }),
                    function () { }
                );
            },
            [s]
        );
        return [
            d,
            function (e) {
                f(r(r({}, s), e));
            },
        ];
    }
    (u.extend = function (e) {
        c = e;
    }),
        (e.useAxios = u),
        (e.useLocalStorage = function (e, n) {
            var r = t.useState(function () {
                try {
                    var t = window.localStorage.getItem(e);
                    return t ? JSON.parse(t) : null != n ? n : "";
                } catch (e) {
                    return console.error(e), n;
                }
            }),
                o = r[0],
                a = r[1];
            return (
                t.useEffect(
                    function () {
                        try {
                            window.localStorage.setItem(e, JSON.stringify(o));
                        } catch (e) {
                            console.error(e);
                        }
                    },
                    [e, o]
                ),
                [
                    o,
                    a,
                    function () {
                        try {
                            window.localStorage.removeItem(e), a("");
                        } catch (e) {
                            console.error(e);
                        }
                    },
                ]
            );
        });
});
