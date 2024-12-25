;(function () {
  const x = document.createElement('link').relList
  if (x && x.supports && x.supports('modulepreload')) return
  for (const D of document.querySelectorAll('link[rel="modulepreload"]')) O(D)
  new MutationObserver((D) => {
    for (const $ of D)
      if ($.type === 'childList')
        for (const fe of $.addedNodes)
          fe.tagName === 'LINK' && fe.rel === 'modulepreload' && O(fe)
  }).observe(document, { childList: !0, subtree: !0 })
  function p(D) {
    const $ = {}
    return (
      D.integrity && ($.integrity = D.integrity),
      D.referrerPolicy && ($.referrerPolicy = D.referrerPolicy),
      D.crossOrigin === 'use-credentials'
        ? ($.credentials = 'include')
        : D.crossOrigin === 'anonymous'
        ? ($.credentials = 'omit')
        : ($.credentials = 'same-origin'),
      $
    )
  }
  function O(D) {
    if (D.ep) return
    D.ep = !0
    const $ = p(D)
    fetch(D.href, $)
  }
})()
function Vf(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, 'default')
    ? h.default
    : h
}
var Po = { exports: {} },
  wr = {},
  zo = { exports: {} },
  F = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa
function Hf() {
  if (Pa) return F
  Pa = 1
  var h = Symbol.for('react.element'),
    x = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    O = Symbol.for('react.strict_mode'),
    D = Symbol.for('react.profiler'),
    $ = Symbol.for('react.provider'),
    fe = Symbol.for('react.context'),
    ue = Symbol.for('react.forward_ref'),
    H = Symbol.for('react.suspense'),
    Ne = Symbol.for('react.memo'),
    ke = Symbol.for('react.lazy'),
    ne = Symbol.iterator
  function q(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (ne && c[ne]) || c['@@iterator']),
        typeof c == 'function' ? c : null)
  }
  var $e = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    b = {}
  function Z(c, g, I) {
    ;(this.props = c),
      (this.context = g),
      (this.refs = b),
      (this.updater = I || $e)
  }
  ;(Z.prototype.isReactComponent = {}),
    (Z.prototype.setState = function (c, g) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, c, g, 'setState')
    }),
    (Z.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate')
    })
  function gt() {}
  gt.prototype = Z.prototype
  function at(c, g, I) {
    ;(this.props = c),
      (this.context = g),
      (this.refs = b),
      (this.updater = I || $e)
  }
  var be = (at.prototype = new gt())
  ;(be.constructor = at), Qe(be, Z.prototype), (be.isPureReactComponent = !0)
  var Se = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Pe = { current: null },
    je = { key: !0, ref: !0, __self: !0, __source: !0 }
  function Ke(c, g, I) {
    var V,
      A = {},
      B = null,
      Y = null
    if (g != null)
      for (V in (g.ref !== void 0 && (Y = g.ref),
      g.key !== void 0 && (B = '' + g.key),
      g))
        et.call(g, V) && !je.hasOwnProperty(V) && (A[V] = g[V])
    var Q = arguments.length - 2
    if (Q === 1) A.children = I
    else if (1 < Q) {
      for (var ee = Array(Q), He = 0; He < Q; He++) ee[He] = arguments[He + 2]
      A.children = ee
    }
    if (c && c.defaultProps)
      for (V in ((Q = c.defaultProps), Q)) A[V] === void 0 && (A[V] = Q[V])
    return {
      $$typeof: h,
      type: c,
      key: B,
      ref: Y,
      props: A,
      _owner: Pe.current,
    }
  }
  function Pt(c, g) {
    return {
      $$typeof: h,
      type: c.type,
      key: g,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    }
  }
  function yt(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === h
  }
  function Zt(c) {
    var g = { '=': '=0', ':': '=2' }
    return (
      '$' +
      c.replace(/[=:]/g, function (I) {
        return g[I]
      })
    )
  }
  var ct = /\/+/g
  function Ve(c, g) {
    return typeof c == 'object' && c !== null && c.key != null
      ? Zt('' + c.key)
      : g.toString(36)
  }
  function tt(c, g, I, V, A) {
    var B = typeof c
    ;(B === 'undefined' || B === 'boolean') && (c = null)
    var Y = !1
    if (c === null) Y = !0
    else
      switch (B) {
        case 'string':
        case 'number':
          Y = !0
          break
        case 'object':
          switch (c.$$typeof) {
            case h:
            case x:
              Y = !0
          }
      }
    if (Y)
      return (
        (Y = c),
        (A = A(Y)),
        (c = V === '' ? '.' + Ve(Y, 0) : V),
        Se(A)
          ? ((I = ''),
            c != null && (I = c.replace(ct, '$&/') + '/'),
            tt(A, g, I, '', function (He) {
              return He
            }))
          : A != null &&
            (yt(A) &&
              (A = Pt(
                A,
                I +
                  (!A.key || (Y && Y.key === A.key)
                    ? ''
                    : ('' + A.key).replace(ct, '$&/') + '/') +
                  c
              )),
            g.push(A)),
        1
      )
    if (((Y = 0), (V = V === '' ? '.' : V + ':'), Se(c)))
      for (var Q = 0; Q < c.length; Q++) {
        B = c[Q]
        var ee = V + Ve(B, Q)
        Y += tt(B, g, I, ee, A)
      }
    else if (((ee = q(c)), typeof ee == 'function'))
      for (c = ee.call(c), Q = 0; !(B = c.next()).done; )
        (B = B.value), (ee = V + Ve(B, Q++)), (Y += tt(B, g, I, ee, A))
    else if (B === 'object')
      throw (
        ((g = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (g === '[object Object]'
              ? 'object with keys {' + Object.keys(c).join(', ') + '}'
              : g) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    return Y
  }
  function ft(c, g, I) {
    if (c == null) return c
    var V = [],
      A = 0
    return (
      tt(c, V, '', '', function (B) {
        return g.call(I, B, A++)
      }),
      V
    )
  }
  function Me(c) {
    if (c._status === -1) {
      var g = c._result
      ;(g = g()),
        g.then(
          function (I) {
            ;(c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = I))
          },
          function (I) {
            ;(c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = I))
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = g))
    }
    if (c._status === 1) return c._result.default
    throw c._result
  }
  var ie = { current: null },
    C = { transition: null },
    T = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: C,
      ReactCurrentOwner: Pe,
    }
  function N() {
    throw Error('act(...) is not supported in production builds of React.')
  }
  return (
    (F.Children = {
      map: ft,
      forEach: function (c, g, I) {
        ft(
          c,
          function () {
            g.apply(this, arguments)
          },
          I
        )
      },
      count: function (c) {
        var g = 0
        return (
          ft(c, function () {
            g++
          }),
          g
        )
      },
      toArray: function (c) {
        return (
          ft(c, function (g) {
            return g
          }) || []
        )
      },
      only: function (c) {
        if (!yt(c))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return c
      },
    }),
    (F.Component = Z),
    (F.Fragment = p),
    (F.Profiler = D),
    (F.PureComponent = at),
    (F.StrictMode = O),
    (F.Suspense = H),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (F.act = N),
    (F.cloneElement = function (c, g, I) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.'
        )
      var V = Qe({}, c.props),
        A = c.key,
        B = c.ref,
        Y = c._owner
      if (g != null) {
        if (
          (g.ref !== void 0 && ((B = g.ref), (Y = Pe.current)),
          g.key !== void 0 && (A = '' + g.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps
        for (ee in g)
          et.call(g, ee) &&
            !je.hasOwnProperty(ee) &&
            (V[ee] = g[ee] === void 0 && Q !== void 0 ? Q[ee] : g[ee])
      }
      var ee = arguments.length - 2
      if (ee === 1) V.children = I
      else if (1 < ee) {
        Q = Array(ee)
        for (var He = 0; He < ee; He++) Q[He] = arguments[He + 2]
        V.children = Q
      }
      return { $$typeof: h, type: c.type, key: A, ref: B, props: V, _owner: Y }
    }),
    (F.createContext = function (c) {
      return (
        (c = {
          $$typeof: fe,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: $, _context: c }),
        (c.Consumer = c)
      )
    }),
    (F.createElement = Ke),
    (F.createFactory = function (c) {
      var g = Ke.bind(null, c)
      return (g.type = c), g
    }),
    (F.createRef = function () {
      return { current: null }
    }),
    (F.forwardRef = function (c) {
      return { $$typeof: ue, render: c }
    }),
    (F.isValidElement = yt),
    (F.lazy = function (c) {
      return { $$typeof: ke, _payload: { _status: -1, _result: c }, _init: Me }
    }),
    (F.memo = function (c, g) {
      return { $$typeof: Ne, type: c, compare: g === void 0 ? null : g }
    }),
    (F.startTransition = function (c) {
      var g = C.transition
      C.transition = {}
      try {
        c()
      } finally {
        C.transition = g
      }
    }),
    (F.unstable_act = N),
    (F.useCallback = function (c, g) {
      return ie.current.useCallback(c, g)
    }),
    (F.useContext = function (c) {
      return ie.current.useContext(c)
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (c) {
      return ie.current.useDeferredValue(c)
    }),
    (F.useEffect = function (c, g) {
      return ie.current.useEffect(c, g)
    }),
    (F.useId = function () {
      return ie.current.useId()
    }),
    (F.useImperativeHandle = function (c, g, I) {
      return ie.current.useImperativeHandle(c, g, I)
    }),
    (F.useInsertionEffect = function (c, g) {
      return ie.current.useInsertionEffect(c, g)
    }),
    (F.useLayoutEffect = function (c, g) {
      return ie.current.useLayoutEffect(c, g)
    }),
    (F.useMemo = function (c, g) {
      return ie.current.useMemo(c, g)
    }),
    (F.useReducer = function (c, g, I) {
      return ie.current.useReducer(c, g, I)
    }),
    (F.useRef = function (c) {
      return ie.current.useRef(c)
    }),
    (F.useState = function (c) {
      return ie.current.useState(c)
    }),
    (F.useSyncExternalStore = function (c, g, I) {
      return ie.current.useSyncExternalStore(c, g, I)
    }),
    (F.useTransition = function () {
      return ie.current.useTransition()
    }),
    (F.version = '18.3.1'),
    F
  )
}
var za
function To() {
  return za || ((za = 1), (zo.exports = Hf())), zo.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La
function Uf() {
  if (La) return wr
  La = 1
  var h = To(),
    x = Symbol.for('react.element'),
    p = Symbol.for('react.fragment'),
    O = Object.prototype.hasOwnProperty,
    D = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $ = { key: !0, ref: !0, __self: !0, __source: !0 }
  function fe(ue, H, Ne) {
    var ke,
      ne = {},
      q = null,
      $e = null
    Ne !== void 0 && (q = '' + Ne),
      H.key !== void 0 && (q = '' + H.key),
      H.ref !== void 0 && ($e = H.ref)
    for (ke in H) O.call(H, ke) && !$.hasOwnProperty(ke) && (ne[ke] = H[ke])
    if (ue && ue.defaultProps)
      for (ke in ((H = ue.defaultProps), H))
        ne[ke] === void 0 && (ne[ke] = H[ke])
    return {
      $$typeof: x,
      type: ue,
      key: q,
      ref: $e,
      props: ne,
      _owner: D.current,
    }
  }
  return (wr.Fragment = p), (wr.jsx = fe), (wr.jsxs = fe), wr
}
var ja
function Af() {
  return ja || ((ja = 1), (Po.exports = Uf())), Po.exports
}
var S = Af(),
  Va = To()
const sn = Vf(Va)
var jl = {},
  Lo = { exports: {} },
  Fe = {},
  jo = { exports: {} },
  Mo = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma
function Bf() {
  return (
    Ma ||
      ((Ma = 1),
      (function (h) {
        function x(C, T) {
          var N = C.length
          C.push(T)
          e: for (; 0 < N; ) {
            var c = (N - 1) >>> 1,
              g = C[c]
            if (0 < D(g, T)) (C[c] = T), (C[N] = g), (N = c)
            else break e
          }
        }
        function p(C) {
          return C.length === 0 ? null : C[0]
        }
        function O(C) {
          if (C.length === 0) return null
          var T = C[0],
            N = C.pop()
          if (N !== T) {
            C[0] = N
            e: for (var c = 0, g = C.length, I = g >>> 1; c < I; ) {
              var V = 2 * (c + 1) - 1,
                A = C[V],
                B = V + 1,
                Y = C[B]
              if (0 > D(A, N))
                B < g && 0 > D(Y, A)
                  ? ((C[c] = Y), (C[B] = N), (c = B))
                  : ((C[c] = A), (C[V] = N), (c = V))
              else if (B < g && 0 > D(Y, N)) (C[c] = Y), (C[B] = N), (c = B)
              else break e
            }
          }
          return T
        }
        function D(C, T) {
          var N = C.sortIndex - T.sortIndex
          return N !== 0 ? N : C.id - T.id
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var $ = performance
          h.unstable_now = function () {
            return $.now()
          }
        } else {
          var fe = Date,
            ue = fe.now()
          h.unstable_now = function () {
            return fe.now() - ue
          }
        }
        var H = [],
          Ne = [],
          ke = 1,
          ne = null,
          q = 3,
          $e = !1,
          Qe = !1,
          b = !1,
          Z = typeof setTimeout == 'function' ? setTimeout : null,
          gt = typeof clearTimeout == 'function' ? clearTimeout : null,
          at = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function be(C) {
          for (var T = p(Ne); T !== null; ) {
            if (T.callback === null) O(Ne)
            else if (T.startTime <= C)
              O(Ne), (T.sortIndex = T.expirationTime), x(H, T)
            else break
            T = p(Ne)
          }
        }
        function Se(C) {
          if (((b = !1), be(C), !Qe))
            if (p(H) !== null) (Qe = !0), Me(et)
            else {
              var T = p(Ne)
              T !== null && ie(Se, T.startTime - C)
            }
        }
        function et(C, T) {
          ;(Qe = !1), b && ((b = !1), gt(Ke), (Ke = -1)), ($e = !0)
          var N = q
          try {
            for (
              be(T), ne = p(H);
              ne !== null && (!(ne.expirationTime > T) || (C && !Zt()));

            ) {
              var c = ne.callback
              if (typeof c == 'function') {
                ;(ne.callback = null), (q = ne.priorityLevel)
                var g = c(ne.expirationTime <= T)
                ;(T = h.unstable_now()),
                  typeof g == 'function'
                    ? (ne.callback = g)
                    : ne === p(H) && O(H),
                  be(T)
              } else O(H)
              ne = p(H)
            }
            if (ne !== null) var I = !0
            else {
              var V = p(Ne)
              V !== null && ie(Se, V.startTime - T), (I = !1)
            }
            return I
          } finally {
            ;(ne = null), (q = N), ($e = !1)
          }
        }
        var Pe = !1,
          je = null,
          Ke = -1,
          Pt = 5,
          yt = -1
        function Zt() {
          return !(h.unstable_now() - yt < Pt)
        }
        function ct() {
          if (je !== null) {
            var C = h.unstable_now()
            yt = C
            var T = !0
            try {
              T = je(!0, C)
            } finally {
              T ? Ve() : ((Pe = !1), (je = null))
            }
          } else Pe = !1
        }
        var Ve
        if (typeof at == 'function')
          Ve = function () {
            at(ct)
          }
        else if (typeof MessageChannel < 'u') {
          var tt = new MessageChannel(),
            ft = tt.port2
          ;(tt.port1.onmessage = ct),
            (Ve = function () {
              ft.postMessage(null)
            })
        } else
          Ve = function () {
            Z(ct, 0)
          }
        function Me(C) {
          ;(je = C), Pe || ((Pe = !0), Ve())
        }
        function ie(C, T) {
          Ke = Z(function () {
            C(h.unstable_now())
          }, T)
        }
        ;(h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (C) {
            C.callback = null
          }),
          (h.unstable_continueExecution = function () {
            Qe || $e || ((Qe = !0), Me(et))
          }),
          (h.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Pt = 0 < C ? Math.floor(1e3 / C) : 5)
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return q
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return p(H)
          }),
          (h.unstable_next = function (C) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var T = 3
                break
              default:
                T = q
            }
            var N = q
            q = T
            try {
              return C()
            } finally {
              q = N
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (C, T) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                C = 3
            }
            var N = q
            q = C
            try {
              return T()
            } finally {
              q = N
            }
          }),
          (h.unstable_scheduleCallback = function (C, T, N) {
            var c = h.unstable_now()
            switch (
              (typeof N == 'object' && N !== null
                ? ((N = N.delay),
                  (N = typeof N == 'number' && 0 < N ? c + N : c))
                : (N = c),
              C)
            ) {
              case 1:
                var g = -1
                break
              case 2:
                g = 250
                break
              case 5:
                g = 1073741823
                break
              case 4:
                g = 1e4
                break
              default:
                g = 5e3
            }
            return (
              (g = N + g),
              (C = {
                id: ke++,
                callback: T,
                priorityLevel: C,
                startTime: N,
                expirationTime: g,
                sortIndex: -1,
              }),
              N > c
                ? ((C.sortIndex = N),
                  x(Ne, C),
                  p(H) === null &&
                    C === p(Ne) &&
                    (b ? (gt(Ke), (Ke = -1)) : (b = !0), ie(Se, N - c)))
                : ((C.sortIndex = g), x(H, C), Qe || $e || ((Qe = !0), Me(et))),
              C
            )
          }),
          (h.unstable_shouldYield = Zt),
          (h.unstable_wrapCallback = function (C) {
            var T = q
            return function () {
              var N = q
              q = T
              try {
                return C.apply(this, arguments)
              } finally {
                q = N
              }
            }
          })
      })(Mo)),
    Mo
  )
}
var Ta
function Wf() {
  return Ta || ((Ta = 1), (jo.exports = Bf())), jo.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra
function $f() {
  if (Ra) return Fe
  Ra = 1
  var h = To(),
    x = Wf()
  function p(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var O = new Set(),
    D = {}
  function $(e, t) {
    fe(e, t), fe(e + 'Capture', t)
  }
  function fe(e, t) {
    for (D[e] = t, e = 0; e < t.length; e++) O.add(t[e])
  }
  var ue = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    H = Object.prototype.hasOwnProperty,
    Ne =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ke = {},
    ne = {}
  function q(e) {
    return H.call(ne, e)
      ? !0
      : H.call(ke, e)
      ? !1
      : Ne.test(e)
      ? (ne[e] = !0)
      : ((ke[e] = !0), !1)
  }
  function $e(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      default:
        return !1
    }
  }
  function Qe(e, t, n, r) {
    if (t === null || typeof t > 'u' || $e(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function b(e, t, n, r, l, i, o) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o)
  }
  var Z = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Z[e] = new b(e, 0, !1, e, null, !1, !1)
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0]
      Z[t] = new b(t, 1, !1, e[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      e
    ) {
      Z[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Z[e] = new b(e, 2, !1, e, null, !1, !1)
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        Z[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1)
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Z[e] = new b(e, 3, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      Z[e] = new b(e, 4, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Z[e] = new b(e, 6, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Z[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
  var gt = /[\-:]([a-z])/g
  function at(e) {
    return e[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(gt, at)
      Z[t] = new b(t, 1, !1, e, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(gt, at)
        Z[t] = new b(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(gt, at)
      Z[t] = new b(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Z[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (Z.xlinkHref = new b(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Z[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
  function be(e, t, n, r) {
    var l = Z.hasOwnProperty(t) ? Z[t] : null
    ;(l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (Qe(t, n, l, r) && (n = null),
      r || l === null
        ? q(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }
  var Se = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for('react.element'),
    Pe = Symbol.for('react.portal'),
    je = Symbol.for('react.fragment'),
    Ke = Symbol.for('react.strict_mode'),
    Pt = Symbol.for('react.profiler'),
    yt = Symbol.for('react.provider'),
    Zt = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    Ve = Symbol.for('react.suspense'),
    tt = Symbol.for('react.suspense_list'),
    ft = Symbol.for('react.memo'),
    Me = Symbol.for('react.lazy'),
    ie = Symbol.for('react.offscreen'),
    C = Symbol.iterator
  function T(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (C && e[C]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var N = Object.assign,
    c
  function g(e) {
    if (c === void 0)
      try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/)
        c = (t && t[1]) || ''
      }
    return (
      `
` +
      c +
      e
    )
  }
  var I = !1
  function V(e, t) {
    if (!e || I) return ''
    I = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (m) {
            var r = m
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (m) {
            r = m
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (m) {
          r = m
        }
        e()
      }
    } catch (m) {
      if (m && r && typeof m.stack == 'string') {
        for (
          var l = m.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];

        )
          u--
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var s =
                    `
` + l[o].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  )
                }
              while (1 <= o && 0 <= u)
            break
          }
      }
    } finally {
      ;(I = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : '') ? g(e) : ''
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return g(e.type)
      case 16:
        return g('Lazy')
      case 13:
        return g('Suspense')
      case 19:
        return g('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = V(e.type, !1)), e
      case 11:
        return (e = V(e.type.render, !1)), e
      case 1:
        return (e = V(e.type, !0)), e
      default:
        return ''
    }
  }
  function B(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case je:
        return 'Fragment'
      case Pe:
        return 'Portal'
      case Pt:
        return 'Profiler'
      case Ke:
        return 'StrictMode'
      case Ve:
        return 'Suspense'
      case tt:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Zt:
          return (e.displayName || 'Context') + '.Consumer'
        case yt:
          return (e._context.displayName || 'Context') + '.Provider'
        case ct:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case ft:
          return (
            (t = e.displayName || null), t !== null ? t : B(e.type) || 'Memo'
          )
        case Me:
          ;(t = e._payload), (e = e._init)
          try {
            return B(e(t))
          } catch {}
      }
    return null
  }
  function Y(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (t.displayName || 'Context') + '.Consumer'
      case 10:
        return (t._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return t
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return B(t)
      case 8:
        return t === Ke ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null
        if (typeof t == 'string') return t
    }
    return null
  }
  function Q(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function ee(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function He(e) {
    var t = ee(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        i = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this)
          },
          set: function (o) {
            ;(r = '' + o), i.call(this, o)
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r
          },
          setValue: function (o) {
            r = '' + o
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = He(e))
  }
  function Ro(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      r = ''
    return (
      e && (r = ee(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    )
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function Rl(e, t) {
    var n = t.checked
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    })
  }
  function Oo(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = Q(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      })
  }
  function Do(e, t) {
    ;(t = t.checked), t != null && be(e, 'checked', t, !1)
  }
  function Ol(e, t) {
    Do(e, t)
    var n = Q(t.value),
      r = t.type
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n)
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value')
      ? Dl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Dl(e, t.type, Q(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked)
  }
  function Io(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return
      ;(t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n)
  }
  function Dl(e, t, n) {
    ;(t !== 'number' || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
  }
  var On = Array.isArray
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {}
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0)
    } else {
      for (n = '' + Q(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
          return
        }
        t !== null || e[l].disabled || (t = e[l])
      }
      t !== null && (t.selected = !0)
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91))
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    })
  }
  function Fo(e, t) {
    var n = t.value
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92))
        if (On(n)) {
          if (1 < n.length) throw Error(p(93))
          n = n[0]
        }
        t = n
      }
      t == null && (t = ''), (n = t)
    }
    e._wrapperState = { initialValue: Q(n) }
  }
  function Vo(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue)
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r)
  }
  function Ho(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t)
  }
  function Uo(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function Fl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Uo(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
  }
  var xr,
    Ao = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t
      else {
        for (
          xr = xr || document.createElement('div'),
            xr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = xr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function Dn(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var In = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ba = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(In).forEach(function (e) {
    Ba.forEach(function (t) {
      ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e])
    })
  })
  function Bo(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (In.hasOwnProperty(e) && In[e])
      ? ('' + t).trim()
      : t + 'px'
  }
  function Wo(e, t) {
    e = e.style
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Bo(n, t[n], r)
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
      }
  }
  var Wa = N(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  )
  function Vl(e, t) {
    if (t) {
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60))
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61))
      }
      if (t.style != null && typeof t.style != 'object') throw Error(p(62))
    }
  }
  function Hl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Ul = null
  function Al(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Bl = null,
    cn = null,
    fn = null
  function $o(e) {
    if ((e = lr(e))) {
      if (typeof Bl != 'function') throw Error(p(280))
      var t = e.stateNode
      t && ((t = Qr(t)), Bl(e.stateNode, e.type, t))
    }
  }
  function Qo(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e)
  }
  function Ko() {
    if (cn) {
      var e = cn,
        t = fn
      if (((fn = cn = null), $o(e), t)) for (e = 0; e < t.length; e++) $o(t[e])
    }
  }
  function Zo(e, t) {
    return e(t)
  }
  function Yo() {}
  var Wl = !1
  function Go(e, t, n) {
    if (Wl) return e(t, n)
    Wl = !0
    try {
      return Zo(e, t, n)
    } finally {
      ;(Wl = !1), (cn !== null || fn !== null) && (Yo(), Ko())
    }
  }
  function Fn(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = Qr(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && typeof n != 'function') throw Error(p(231, t, typeof n))
    return n
  }
  var $l = !1
  if (ue)
    try {
      var Vn = {}
      Object.defineProperty(Vn, 'passive', {
        get: function () {
          $l = !0
        },
      }),
        window.addEventListener('test', Vn, Vn),
        window.removeEventListener('test', Vn, Vn)
    } catch {
      $l = !1
    }
  function $a(e, t, n, r, l, i, o, u, s) {
    var m = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, m)
    } catch (y) {
      this.onError(y)
    }
  }
  var Hn = !1,
    Cr = null,
    Er = !1,
    Ql = null,
    Qa = {
      onError: function (e) {
        ;(Hn = !0), (Cr = e)
      },
    }
  function Ka(e, t, n, r, l, i, o, u, s) {
    ;(Hn = !1), (Cr = null), $a.apply(Qa, arguments)
  }
  function Za(e, t, n, r, l, i, o, u, s) {
    if ((Ka.apply(this, arguments), Hn)) {
      if (Hn) {
        var m = Cr
        ;(Hn = !1), (Cr = null)
      } else throw Error(p(198))
      Er || ((Er = !0), (Ql = m))
    }
  }
  function Yt(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? n : null
  }
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function Jo(e) {
    if (Yt(e) !== e) throw Error(p(188))
  }
  function Ya(e) {
    var t = e.alternate
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(p(188))
      return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
      var l = n.return
      if (l === null) break
      var i = l.alternate
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r
          continue
        }
        break
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Jo(l), e
          if (i === r) return Jo(l), t
          i = i.sibling
        }
        throw Error(p(188))
      }
      if (n.return !== r.return) (n = l), (r = i)
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            ;(o = !0), (n = l), (r = i)
            break
          }
          if (u === r) {
            ;(o = !0), (r = l), (n = i)
            break
          }
          u = u.sibling
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              ;(o = !0), (n = i), (r = l)
              break
            }
            if (u === r) {
              ;(o = !0), (r = i), (n = l)
              break
            }
            u = u.sibling
          }
          if (!o) throw Error(p(189))
        }
      }
      if (n.alternate !== r) throw Error(p(190))
    }
    if (n.tag !== 3) throw Error(p(188))
    return n.stateNode.current === n ? e : t
  }
  function qo(e) {
    return (e = Ya(e)), e !== null ? bo(e) : null
  }
  function bo(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = bo(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var eu = x.unstable_scheduleCallback,
    tu = x.unstable_cancelCallback,
    Ga = x.unstable_shouldYield,
    Xa = x.unstable_requestPaint,
    se = x.unstable_now,
    Ja = x.unstable_getCurrentPriorityLevel,
    Kl = x.unstable_ImmediatePriority,
    nu = x.unstable_UserBlockingPriority,
    _r = x.unstable_NormalPriority,
    qa = x.unstable_LowPriority,
    ru = x.unstable_IdlePriority,
    Nr = null,
    dt = null
  function ba(e) {
    if (dt && typeof dt.onCommitFiberRoot == 'function')
      try {
        dt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : nc,
    ec = Math.log,
    tc = Math.LN2
  function nc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ec(e) / tc) | 0)) | 0
  }
  var Pr = 64,
    zr = 4194304
  function Un(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function Lr(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455
    if (o !== 0) {
      var u = o & ~l
      u !== 0 ? (r = Un(u)) : ((i &= o), i !== 0 && (r = Un(i)))
    } else (o = n & ~l), o !== 0 ? (r = Un(o)) : i !== 0 && (r = Un(i))
    if (r === 0) return 0
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
    return r
  }
  function rc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function lc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        s = l[o]
      s === -1
        ? (!(u & n) || u & r) && (l[o] = rc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u)
    }
  }
  function Zl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
  }
  function lu() {
    var e = Pr
    return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function An(e, t, n) {
    ;(e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n)
  }
  function ic(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - nt(n),
        i = 1 << l
      ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i)
    }
  }
  function Gl(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
      var r = 31 - nt(n),
        l = 1 << r
      ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
    }
  }
  var K = 0
  function iu(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var ou,
    Xl,
    uu,
    su,
    au,
    Jl = !1,
    jr = [],
    zt = null,
    Lt = null,
    jt = null,
    Bn = new Map(),
    Wn = new Map(),
    Mt = [],
    oc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function cu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        zt = null
        break
      case 'dragenter':
      case 'dragleave':
        Lt = null
        break
      case 'mouseover':
      case 'mouseout':
        jt = null
        break
      case 'pointerover':
      case 'pointerout':
        Bn.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        Wn.delete(t.pointerId)
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Xl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e)
  }
  function uc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (zt = $n(zt, e, t, n, r, l)), !0
      case 'dragenter':
        return (Lt = $n(Lt, e, t, n, r, l)), !0
      case 'mouseover':
        return (jt = $n(jt, e, t, n, r, l)), !0
      case 'pointerover':
        var i = l.pointerId
        return Bn.set(i, $n(Bn.get(i) || null, e, t, n, r, l)), !0
      case 'gotpointercapture':
        return (
          (i = l.pointerId), Wn.set(i, $n(Wn.get(i) || null, e, t, n, r, l)), !0
        )
    }
    return !1
  }
  function fu(e) {
    var t = Gt(e.target)
    if (t !== null) {
      var n = Yt(t)
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xo(n)), t !== null)) {
            ;(e.blockedOn = t),
              au(e.priority, function () {
                uu(n)
              })
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Mr(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (n === null) {
        n = e.nativeEvent
        var r = new n.constructor(n.type, n)
        ;(Ul = r), n.target.dispatchEvent(r), (Ul = null)
      } else return (t = lr(n)), t !== null && Xl(t), (e.blockedOn = n), !1
      t.shift()
    }
    return !0
  }
  function du(e, t, n) {
    Mr(e) && n.delete(t)
  }
  function sc() {
    ;(Jl = !1),
      zt !== null && Mr(zt) && (zt = null),
      Lt !== null && Mr(Lt) && (Lt = null),
      jt !== null && Mr(jt) && (jt = null),
      Bn.forEach(du),
      Wn.forEach(du)
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl ||
        ((Jl = !0), x.unstable_scheduleCallback(x.unstable_NormalPriority, sc)))
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e)
    }
    if (0 < jr.length) {
      Qn(jr[0], e)
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (
      zt !== null && Qn(zt, e),
        Lt !== null && Qn(Lt, e),
        jt !== null && Qn(jt, e),
        Bn.forEach(t),
        Wn.forEach(t),
        n = 0;
      n < Mt.length;
      n++
    )
      (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
      fu(n), n.blockedOn === null && Mt.shift()
  }
  var dn = Se.ReactCurrentBatchConfig,
    Tr = !0
  function ac(e, t, n, r) {
    var l = K,
      i = dn.transition
    dn.transition = null
    try {
      ;(K = 1), ql(e, t, n, r)
    } finally {
      ;(K = l), (dn.transition = i)
    }
  }
  function cc(e, t, n, r) {
    var l = K,
      i = dn.transition
    dn.transition = null
    try {
      ;(K = 4), ql(e, t, n, r)
    } finally {
      ;(K = l), (dn.transition = i)
    }
  }
  function ql(e, t, n, r) {
    if (Tr) {
      var l = bl(e, t, n, r)
      if (l === null) vi(e, t, r, Rr, n), cu(e, r)
      else if (uc(l, e, t, n, r)) r.stopPropagation()
      else if ((cu(e, r), t & 4 && -1 < oc.indexOf(e))) {
        for (; l !== null; ) {
          var i = lr(l)
          if (
            (i !== null && ou(i),
            (i = bl(e, t, n, r)),
            i === null && vi(e, t, r, Rr, n),
            i === l)
          )
            break
          l = i
        }
        l !== null && r.stopPropagation()
      } else vi(e, t, r, null, n)
    }
  }
  var Rr = null
  function bl(e, t, n, r) {
    if (((Rr = null), (e = Al(r)), (e = Gt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null
      else if (((n = t.tag), n === 13)) {
        if (((e = Xo(t)), e !== null)) return e
        e = null
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return (Rr = e), null
  }
  function pu(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (Ja()) {
          case Kl:
            return 1
          case nu:
            return 4
          case _r:
          case qa:
            return 16
          case ru:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var Tt = null,
    ei = null,
    Or = null
  function hu() {
    if (Or) return Or
    var e,
      t = ei,
      n = t.length,
      r,
      l = 'value' in Tt ? Tt.value : Tt.textContent,
      i = l.length
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0))
  }
  function Dr(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Ir() {
    return !0
  }
  function mu() {
    return !1
  }
  function Ue(e) {
    function t(n, r, l, i, o) {
      ;(this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null)
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Ir
          : mu),
        (this.isPropagationStopped = mu),
        this
      )
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Ir))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ir))
        },
        persist: function () {},
        isPersistent: Ir,
      }),
      t
    )
  }
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = Ue(pn),
    Zn = N({}, pn, { view: 0, detail: 0 }),
    fc = Ue(Zn),
    ni,
    ri,
    Yn,
    Fr = N({}, Zn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ii,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Yn &&
              (Yn && e.type === 'mousemove'
                ? ((ni = e.screenX - Yn.screenX), (ri = e.screenY - Yn.screenY))
                : (ri = ni = 0),
              (Yn = e)),
            ni)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ri
      },
    }),
    vu = Ue(Fr),
    dc = N({}, Fr, { dataTransfer: 0 }),
    pc = Ue(dc),
    hc = N({}, Zn, { relatedTarget: 0 }),
    li = Ue(hc),
    mc = N({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vc = Ue(mc),
    gc = N({}, pn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    yc = Ue(gc),
    wc = N({}, pn, { data: 0 }),
    gu = Ue(wc),
    kc = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Sc = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    xc = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function Cc(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = xc[e])
      ? !!t[e]
      : !1
  }
  function ii() {
    return Cc
  }
  var Ec = N({}, Zn, {
      key: function (e) {
        if (e.key) {
          var t = kc[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = Dr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? Sc[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ii,
      charCode: function (e) {
        return e.type === 'keypress' ? Dr(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Dr(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    _c = Ue(Ec),
    Nc = N({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yu = Ue(Nc),
    Pc = N({}, Zn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    zc = Ue(Pc),
    Lc = N({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jc = Ue(Lc),
    Mc = N({}, Fr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Tc = Ue(Mc),
    Rc = [9, 13, 27, 32],
    oi = ue && 'CompositionEvent' in window,
    Gn = null
  ue && 'documentMode' in document && (Gn = document.documentMode)
  var Oc = ue && 'TextEvent' in window && !Gn,
    wu = ue && (!oi || (Gn && 8 < Gn && 11 >= Gn)),
    ku = ' ',
    Su = !1
  function xu(e, t) {
    switch (e) {
      case 'keyup':
        return Rc.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Cu(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var hn = !1
  function Dc(e, t) {
    switch (e) {
      case 'compositionend':
        return Cu(t)
      case 'keypress':
        return t.which !== 32 ? null : ((Su = !0), ku)
      case 'textInput':
        return (e = t.data), e === ku && Su ? null : e
      default:
        return null
    }
  }
  function Ic(e, t) {
    if (hn)
      return e === 'compositionend' || (!oi && xu(e, t))
        ? ((e = hu()), (Or = ei = Tt = null), (hn = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return wu && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var Fc = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!Fc[e.type] : t === 'textarea'
  }
  function _u(e, t, n, r) {
    Qo(r),
      (t = Br(t, 'onChange')),
      0 < t.length &&
        ((n = new ti('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t }))
  }
  var Xn = null,
    Jn = null
  function Vc(e) {
    Wu(e, 0)
  }
  function Vr(e) {
    var t = wn(e)
    if (Ro(t)) return e
  }
  function Hc(e, t) {
    if (e === 'change') return t
  }
  var Nu = !1
  if (ue) {
    var ui
    if (ue) {
      var si = 'oninput' in document
      if (!si) {
        var Pu = document.createElement('div')
        Pu.setAttribute('oninput', 'return;'),
          (si = typeof Pu.oninput == 'function')
      }
      ui = si
    } else ui = !1
    Nu = ui && (!document.documentMode || 9 < document.documentMode)
  }
  function zu() {
    Xn && (Xn.detachEvent('onpropertychange', Lu), (Jn = Xn = null))
  }
  function Lu(e) {
    if (e.propertyName === 'value' && Vr(Jn)) {
      var t = []
      _u(t, Jn, e, Al(e)), Go(Vc, t)
    }
  }
  function Uc(e, t, n) {
    e === 'focusin'
      ? (zu(), (Xn = t), (Jn = n), Xn.attachEvent('onpropertychange', Lu))
      : e === 'focusout' && zu()
  }
  function Ac(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Vr(Jn)
  }
  function Bc(e, t) {
    if (e === 'click') return Vr(t)
  }
  function Wc(e, t) {
    if (e === 'input' || e === 'change') return Vr(t)
  }
  function $c(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var rt = typeof Object.is == 'function' ? Object.is : $c
  function qn(e, t) {
    if (rt(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var n = Object.keys(e),
      r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
      var l = n[r]
      if (!H.call(t, l) || !rt(e[l], t[l])) return !1
    }
    return !0
  }
  function ju(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Mu(e, t) {
    var n = ju(e)
    e = 0
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e }
        e = r
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = ju(n)
    }
  }
  function Tu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Tu(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function Ru() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string'
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow
      else break
      t = Sr(e.document)
    }
    return t
  }
  function ai(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  function Qc(e) {
    var t = Ru(),
      n = e.focusedElem,
      r = e.selectionRange
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Tu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ai(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          'selectionStart' in n)
        )
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection()
          var l = n.textContent.length,
            i = Math.min(r.start, l)
          ;(r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Mu(n, i))
          var o = Mu(n, r)
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)))
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top)
    }
  }
  var Kc = ue && 'documentMode' in document && 11 >= document.documentMode,
    mn = null,
    ci = null,
    bn = null,
    fi = !1
  function Ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    fi ||
      mn == null ||
      mn !== Sr(r) ||
      ((r = mn),
      'selectionStart' in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && qn(bn, r)) ||
        ((bn = r),
        (r = Br(ci, 'onSelect')),
        0 < r.length &&
          ((t = new ti('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))))
  }
  function Hr(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    )
  }
  var vn = {
      animationend: Hr('Animation', 'AnimationEnd'),
      animationiteration: Hr('Animation', 'AnimationIteration'),
      animationstart: Hr('Animation', 'AnimationStart'),
      transitionend: Hr('Transition', 'TransitionEnd'),
    },
    di = {},
    Du = {}
  ue &&
    ((Du = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    'TransitionEvent' in window || delete vn.transitionend.transition)
  function Ur(e) {
    if (di[e]) return di[e]
    if (!vn[e]) return e
    var t = vn[e],
      n
    for (n in t) if (t.hasOwnProperty(n) && n in Du) return (di[e] = t[n])
    return e
  }
  var Iu = Ur('animationend'),
    Fu = Ur('animationiteration'),
    Vu = Ur('animationstart'),
    Hu = Ur('transitionend'),
    Uu = new Map(),
    Au =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function Rt(e, t) {
    Uu.set(e, t), $(t, [e])
  }
  for (var pi = 0; pi < Au.length; pi++) {
    var hi = Au[pi],
      Zc = hi.toLowerCase(),
      Yc = hi[0].toUpperCase() + hi.slice(1)
    Rt(Zc, 'on' + Yc)
  }
  Rt(Iu, 'onAnimationEnd'),
    Rt(Fu, 'onAnimationIteration'),
    Rt(Vu, 'onAnimationStart'),
    Rt('dblclick', 'onDoubleClick'),
    Rt('focusin', 'onFocus'),
    Rt('focusout', 'onBlur'),
    Rt(Hu, 'onTransitionEnd'),
    fe('onMouseEnter', ['mouseout', 'mouseover']),
    fe('onMouseLeave', ['mouseout', 'mouseover']),
    fe('onPointerEnter', ['pointerout', 'pointerover']),
    fe('onPointerLeave', ['pointerout', 'pointerover']),
    $(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    $(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    $('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    $(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    $(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    $(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var er =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Gc = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(er)
    )
  function Bu(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), Za(r, t, void 0, e), (e.currentTarget = null)
  }
  function Wu(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event
      r = r.listeners
      e: {
        var i = void 0
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              m = u.currentTarget
            if (((u = u.listener), s !== i && l.isPropagationStopped())) break e
            Bu(l, u, m), (i = s)
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e
            Bu(l, u, m), (i = s)
          }
      }
    }
    if (Er) throw ((e = Ql), (Er = !1), (Ql = null), e)
  }
  function X(e, t) {
    var n = t[xi]
    n === void 0 && (n = t[xi] = new Set())
    var r = e + '__bubble'
    n.has(r) || ($u(t, e, 2, !1), n.add(r))
  }
  function mi(e, t, n) {
    var r = 0
    t && (r |= 4), $u(n, e, r, t)
  }
  var Ar = '_reactListening' + Math.random().toString(36).slice(2)
  function tr(e) {
    if (!e[Ar]) {
      ;(e[Ar] = !0),
        O.forEach(function (n) {
          n !== 'selectionchange' && (Gc.has(n) || mi(n, !1, e), mi(n, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Ar] || ((t[Ar] = !0), mi('selectionchange', !1, t))
    }
  }
  function $u(e, t, n, r) {
    switch (pu(t)) {
      case 1:
        var l = ac
        break
      case 4:
        l = cc
        break
      default:
        l = ql
    }
    ;(n = l.bind(null, t, n, e)),
      (l = void 0),
      !$l ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1)
  }
  function vi(e, t, n, r, l) {
    var i = r
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return
        var o = r.tag
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return
              o = o.return
            }
          for (; u !== null; ) {
            if (((o = Gt(u)), o === null)) return
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o
              continue e
            }
            u = u.parentNode
          }
        }
        r = r.return
      }
    Go(function () {
      var m = i,
        y = Al(n),
        w = []
      e: {
        var v = Uu.get(e)
        if (v !== void 0) {
          var E = ti,
            P = e
          switch (e) {
            case 'keypress':
              if (Dr(n) === 0) break e
            case 'keydown':
            case 'keyup':
              E = _c
              break
            case 'focusin':
              ;(P = 'focus'), (E = li)
              break
            case 'focusout':
              ;(P = 'blur'), (E = li)
              break
            case 'beforeblur':
            case 'afterblur':
              E = li
              break
            case 'click':
              if (n.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              E = vu
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              E = pc
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              E = zc
              break
            case Iu:
            case Fu:
            case Vu:
              E = vc
              break
            case Hu:
              E = jc
              break
            case 'scroll':
              E = fc
              break
            case 'wheel':
              E = Tc
              break
            case 'copy':
            case 'cut':
            case 'paste':
              E = yc
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              E = yu
          }
          var z = (t & 4) !== 0,
            ae = !z && e === 'scroll',
            f = z ? (v !== null ? v + 'Capture' : null) : v
          z = []
          for (var a = m, d; a !== null; ) {
            d = a
            var k = d.stateNode
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k),
                f !== null &&
                  ((k = Fn(a, f)), k != null && z.push(nr(a, k, d)))),
              ae)
            )
              break
            a = a.return
          }
          0 < z.length &&
            ((v = new E(v, P, null, n, y)), w.push({ event: v, listeners: z }))
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((v = e === 'mouseover' || e === 'pointerover'),
            (E = e === 'mouseout' || e === 'pointerout'),
            v &&
              n !== Ul &&
              (P = n.relatedTarget || n.fromElement) &&
              (Gt(P) || P[wt]))
          )
            break e
          if (
            (E || v) &&
            ((v =
              y.window === y
                ? y
                : (v = y.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            E
              ? ((P = n.relatedTarget || n.toElement),
                (E = m),
                (P = P ? Gt(P) : null),
                P !== null &&
                  ((ae = Yt(P)), P !== ae || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((E = null), (P = m)),
            E !== P)
          ) {
            if (
              ((z = vu),
              (k = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((z = yu),
                (k = 'onPointerLeave'),
                (f = 'onPointerEnter'),
                (a = 'pointer')),
              (ae = E == null ? v : wn(E)),
              (d = P == null ? v : wn(P)),
              (v = new z(k, a + 'leave', E, n, y)),
              (v.target = ae),
              (v.relatedTarget = d),
              (k = null),
              Gt(y) === m &&
                ((z = new z(f, a + 'enter', P, n, y)),
                (z.target = d),
                (z.relatedTarget = ae),
                (k = z)),
              (ae = k),
              E && P)
            )
              t: {
                for (z = E, f = P, a = 0, d = z; d; d = gn(d)) a++
                for (d = 0, k = f; k; k = gn(k)) d++
                for (; 0 < a - d; ) (z = gn(z)), a--
                for (; 0 < d - a; ) (f = gn(f)), d--
                for (; a--; ) {
                  if (z === f || (f !== null && z === f.alternate)) break t
                  ;(z = gn(z)), (f = gn(f))
                }
                z = null
              }
            else z = null
            E !== null && Qu(w, v, E, z, !1),
              P !== null && ae !== null && Qu(w, ae, P, z, !0)
          }
        }
        e: {
          if (
            ((v = m ? wn(m) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === 'select' || (E === 'input' && v.type === 'file'))
          )
            var L = Hc
          else if (Eu(v))
            if (Nu) L = Wc
            else {
              L = Ac
              var j = Uc
            }
          else
            (E = v.nodeName) &&
              E.toLowerCase() === 'input' &&
              (v.type === 'checkbox' || v.type === 'radio') &&
              (L = Bc)
          if (L && (L = L(e, m))) {
            _u(w, L, n, y)
            break e
          }
          j && j(e, v, m),
            e === 'focusout' &&
              (j = v._wrapperState) &&
              j.controlled &&
              v.type === 'number' &&
              Dl(v, 'number', v.value)
        }
        switch (((j = m ? wn(m) : window), e)) {
          case 'focusin':
            ;(Eu(j) || j.contentEditable === 'true') &&
              ((mn = j), (ci = m), (bn = null))
            break
          case 'focusout':
            bn = ci = mn = null
            break
          case 'mousedown':
            fi = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(fi = !1), Ou(w, n, y)
            break
          case 'selectionchange':
            if (Kc) break
          case 'keydown':
          case 'keyup':
            Ou(w, n, y)
        }
        var M
        if (oi)
          e: {
            switch (e) {
              case 'compositionstart':
                var R = 'onCompositionStart'
                break e
              case 'compositionend':
                R = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                R = 'onCompositionUpdate'
                break e
            }
            R = void 0
          }
        else
          hn
            ? xu(e, n) && (R = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart')
        R &&
          (wu &&
            n.locale !== 'ko' &&
            (hn || R !== 'onCompositionStart'
              ? R === 'onCompositionEnd' && hn && (M = hu())
              : ((Tt = y),
                (ei = 'value' in Tt ? Tt.value : Tt.textContent),
                (hn = !0))),
          (j = Br(m, R)),
          0 < j.length &&
            ((R = new gu(R, e, null, n, y)),
            w.push({ event: R, listeners: j }),
            M ? (R.data = M) : ((M = Cu(n)), M !== null && (R.data = M)))),
          (M = Oc ? Dc(e, n) : Ic(e, n)) &&
            ((m = Br(m, 'onBeforeInput')),
            0 < m.length &&
              ((y = new gu('onBeforeInput', 'beforeinput', null, n, y)),
              w.push({ event: y, listeners: m }),
              (y.data = M)))
      }
      Wu(w, t)
    })
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function Br(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        i = l.stateNode
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Fn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Fn(e, t)),
        i != null && r.push(nr(e, i, l))),
        (e = e.return)
    }
    return r
  }
  function gn(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Qu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        m = u.stateNode
      if (s !== null && s === r) break
      u.tag === 5 &&
        m !== null &&
        ((u = m),
        l
          ? ((s = Fn(n, i)), s != null && o.unshift(nr(n, s, u)))
          : l || ((s = Fn(n, i)), s != null && o.push(nr(n, s, u)))),
        (n = n.return)
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
  }
  var Xc = /\r\n?/g,
    Jc = /\u0000|\uFFFD/g
  function Ku(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Xc,
        `
`
      )
      .replace(Jc, '')
  }
  function Wr(e, t, n) {
    if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(p(425))
  }
  function $r() {}
  var gi = null,
    yi = null
  function wi(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var ki = typeof setTimeout == 'function' ? setTimeout : void 0,
    qc = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Zu = typeof Promise == 'function' ? Promise : void 0,
    bc =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Zu < 'u'
        ? function (e) {
            return Zu.resolve(null).then(e).catch(ef)
          }
        : ki
  function ef(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Si(e, t) {
    var n = t,
      r = 0
    do {
      var l = n.nextSibling
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), Kn(t)
            return
          }
          r--
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++
      n = l
    } while (n)
    Kn(t)
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
        if (t === '/$') return null
      }
    }
    return e
  }
  function Yu(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e
          t--
        } else n === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var yn = Math.random().toString(36).slice(2),
    pt = '__reactFiber$' + yn,
    rr = '__reactProps$' + yn,
    wt = '__reactContainer$' + yn,
    xi = '__reactEvents$' + yn,
    tf = '__reactListeners$' + yn,
    nf = '__reactHandles$' + yn
  function Gt(e) {
    var t = e[pt]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[wt] || n[pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Yu(e); e !== null; ) {
            if ((n = e[pt])) return n
            e = Yu(e)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function lr(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    )
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(p(33))
  }
  function Qr(e) {
    return e[rr] || null
  }
  var Ci = [],
    kn = -1
  function Dt(e) {
    return { current: e }
  }
  function J(e) {
    0 > kn || ((e.current = Ci[kn]), (Ci[kn] = null), kn--)
  }
  function G(e, t) {
    kn++, (Ci[kn] = e.current), (e.current = t)
  }
  var It = {},
    xe = Dt(It),
    Te = Dt(!1),
    Xt = It
  function Sn(e, t) {
    var n = e.type.contextTypes
    if (!n) return It
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext
    var l = {},
      i
    for (i in n) l[i] = t[i]
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    )
  }
  function Re(e) {
    return (e = e.childContextTypes), e != null
  }
  function Kr() {
    J(Te), J(xe)
  }
  function Gu(e, t, n) {
    if (xe.current !== It) throw Error(p(168))
    G(xe, t), G(Te, n)
  }
  function Xu(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n
    r = r.getChildContext()
    for (var l in r) if (!(l in t)) throw Error(p(108, Y(e) || 'Unknown', l))
    return N({}, n, r)
  }
  function Zr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        It),
      (Xt = xe.current),
      G(xe, e),
      G(Te, Te.current),
      !0
    )
  }
  function Ju(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(p(169))
    n
      ? ((e = Xu(e, t, Xt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(xe),
        G(xe, e))
      : J(Te),
      G(Te, n)
  }
  var kt = null,
    Yr = !1,
    Ei = !1
  function qu(e) {
    kt === null ? (kt = [e]) : kt.push(e)
  }
  function rf(e) {
    ;(Yr = !0), qu(e)
  }
  function Ft() {
    if (!Ei && kt !== null) {
      Ei = !0
      var e = 0,
        t = K
      try {
        var n = kt
        for (K = 1; e < n.length; e++) {
          var r = n[e]
          do r = r(!0)
          while (r !== null)
        }
        ;(kt = null), (Yr = !1)
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), eu(Kl, Ft), l)
      } finally {
        ;(K = t), (Ei = !1)
      }
    }
    return null
  }
  var xn = [],
    Cn = 0,
    Gr = null,
    Xr = 0,
    Ze = [],
    Ye = 0,
    Jt = null,
    St = 1,
    xt = ''
  function qt(e, t) {
    ;(xn[Cn++] = Xr), (xn[Cn++] = Gr), (Gr = e), (Xr = t)
  }
  function bu(e, t, n) {
    ;(Ze[Ye++] = St), (Ze[Ye++] = xt), (Ze[Ye++] = Jt), (Jt = e)
    var r = St
    e = xt
    var l = 32 - nt(r) - 1
    ;(r &= ~(1 << l)), (n += 1)
    var i = 32 - nt(t) + l
    if (30 < i) {
      var o = l - (l % 5)
      ;(i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (St = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (xt = i + e)
    } else (St = (1 << i) | (n << l) | r), (xt = e)
  }
  function _i(e) {
    e.return !== null && (qt(e, 1), bu(e, 1, 0))
  }
  function Ni(e) {
    for (; e === Gr; )
      (Gr = xn[--Cn]), (xn[Cn] = null), (Xr = xn[--Cn]), (xn[Cn] = null)
    for (; e === Jt; )
      (Jt = Ze[--Ye]),
        (Ze[Ye] = null),
        (xt = Ze[--Ye]),
        (Ze[Ye] = null),
        (St = Ze[--Ye]),
        (Ze[Ye] = null)
  }
  var Ae = null,
    Be = null,
    te = !1,
    lt = null
  function es(e, t) {
    var n = qe(5, null, null, 0)
    ;(n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ae = e), (Be = Ot(t.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ae = e), (Be = null), !0) : !1
        )
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: xt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ae = e),
              (Be = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Pi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function zi(e) {
    if (te) {
      var t = Be
      if (t) {
        var n = t
        if (!ts(e, t)) {
          if (Pi(e)) throw Error(p(418))
          t = Ot(n.nextSibling)
          var r = Ae
          t && ts(e, t)
            ? es(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ae = e))
        }
      } else {
        if (Pi(e)) throw Error(p(418))
        ;(e.flags = (e.flags & -4097) | 2), (te = !1), (Ae = e)
      }
    }
  }
  function ns(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return
    Ae = e
  }
  function Jr(e) {
    if (e !== Ae) return !1
    if (!te) return ns(e), (te = !0), !1
    var t
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !wi(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (Pi(e)) throw (rs(), Error(p(418)))
      for (; t; ) es(e, t), (t = Ot(t.nextSibling))
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(p(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data
            if (n === '/$') {
              if (t === 0) {
                Be = Ot(e.nextSibling)
                break e
              }
              t--
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++
          }
          e = e.nextSibling
        }
        Be = null
      }
    } else Be = Ae ? Ot(e.stateNode.nextSibling) : null
    return !0
  }
  function rs() {
    for (var e = Be; e; ) e = Ot(e.nextSibling)
  }
  function En() {
    ;(Be = Ae = null), (te = !1)
  }
  function Li(e) {
    lt === null ? (lt = [e]) : lt.push(e)
  }
  var lf = Se.ReactCurrentBatchConfig
  function ir(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309))
          var r = n.stateNode
        }
        if (!r) throw Error(p(147, e))
        var l = r,
          i = '' + e
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs
              o === null ? delete u[i] : (u[i] = o)
            }),
            (t._stringRef = i),
            t)
      }
      if (typeof e != 'string') throw Error(p(284))
      if (!n._owner) throw Error(p(290, e))
    }
    return e
  }
  function qr(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        p(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    )
  }
  function ls(e) {
    var t = e._init
    return t(e._payload)
  }
  function is(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a)
      }
    }
    function n(f, a) {
      if (!e) return null
      for (; a !== null; ) t(f, a), (a = a.sibling)
      return null
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling)
      return f
    }
    function l(f, a) {
      return (f = Qt(f, a)), (f.index = 0), (f.sibling = null), f
    }
    function i(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      )
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f
    }
    function u(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = So(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a)
    }
    function s(f, a, d, k) {
      var L = d.type
      return L === je
        ? y(f, a, d.props.children, k, d.key)
        : a !== null &&
          (a.elementType === L ||
            (typeof L == 'object' &&
              L !== null &&
              L.$$typeof === Me &&
              ls(L) === a.type))
        ? ((k = l(a, d.props)), (k.ref = ir(f, a, d)), (k.return = f), k)
        : ((k = xl(d.type, d.key, d.props, null, f.mode, k)),
          (k.ref = ir(f, a, d)),
          (k.return = f),
          k)
    }
    function m(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xo(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a)
    }
    function y(f, a, d, k, L) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, k, L)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a)
    }
    function w(f, a, d) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return (a = So('' + a, f.mode, d)), (a.return = f), a
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = xl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            )
          case Pe:
            return (a = xo(a, f.mode, d)), (a.return = f), a
          case Me:
            var k = a._init
            return w(f, k(a._payload), d)
        }
        if (On(a) || T(a))
          return (a = un(a, f.mode, d, null)), (a.return = f), a
        qr(f, a)
      }
      return null
    }
    function v(f, a, d, k) {
      var L = a !== null ? a.key : null
      if ((typeof d == 'string' && d !== '') || typeof d == 'number')
        return L !== null ? null : u(f, a, '' + d, k)
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === L ? s(f, a, d, k) : null
          case Pe:
            return d.key === L ? m(f, a, d, k) : null
          case Me:
            return (L = d._init), v(f, a, L(d._payload), k)
        }
        if (On(d) || T(d)) return L !== null ? null : y(f, a, d, k, null)
        qr(f, d)
      }
      return null
    }
    function E(f, a, d, k, L) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return (f = f.get(d) || null), u(a, f, '' + k, L)
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case et:
            return (
              (f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, L)
            )
          case Pe:
            return (
              (f = f.get(k.key === null ? d : k.key) || null), m(a, f, k, L)
            )
          case Me:
            var j = k._init
            return E(f, a, d, j(k._payload), L)
        }
        if (On(k) || T(k)) return (f = f.get(d) || null), y(a, f, k, L, null)
        qr(a, k)
      }
      return null
    }
    function P(f, a, d, k) {
      for (
        var L = null, j = null, M = a, R = (a = 0), ge = null;
        M !== null && R < d.length;
        R++
      ) {
        M.index > R ? ((ge = M), (M = null)) : (ge = M.sibling)
        var W = v(f, M, d[R], k)
        if (W === null) {
          M === null && (M = ge)
          break
        }
        e && M && W.alternate === null && t(f, M),
          (a = i(W, a, R)),
          j === null ? (L = W) : (j.sibling = W),
          (j = W),
          (M = ge)
      }
      if (R === d.length) return n(f, M), te && qt(f, R), L
      if (M === null) {
        for (; R < d.length; R++)
          (M = w(f, d[R], k)),
            M !== null &&
              ((a = i(M, a, R)),
              j === null ? (L = M) : (j.sibling = M),
              (j = M))
        return te && qt(f, R), L
      }
      for (M = r(f, M); R < d.length; R++)
        (ge = E(M, f, R, d[R], k)),
          ge !== null &&
            (e &&
              ge.alternate !== null &&
              M.delete(ge.key === null ? R : ge.key),
            (a = i(ge, a, R)),
            j === null ? (L = ge) : (j.sibling = ge),
            (j = ge))
      return (
        e &&
          M.forEach(function (Kt) {
            return t(f, Kt)
          }),
        te && qt(f, R),
        L
      )
    }
    function z(f, a, d, k) {
      var L = T(d)
      if (typeof L != 'function') throw Error(p(150))
      if (((d = L.call(d)), d == null)) throw Error(p(151))
      for (
        var j = (L = null), M = a, R = (a = 0), ge = null, W = d.next();
        M !== null && !W.done;
        R++, W = d.next()
      ) {
        M.index > R ? ((ge = M), (M = null)) : (ge = M.sibling)
        var Kt = v(f, M, W.value, k)
        if (Kt === null) {
          M === null && (M = ge)
          break
        }
        e && M && Kt.alternate === null && t(f, M),
          (a = i(Kt, a, R)),
          j === null ? (L = Kt) : (j.sibling = Kt),
          (j = Kt),
          (M = ge)
      }
      if (W.done) return n(f, M), te && qt(f, R), L
      if (M === null) {
        for (; !W.done; R++, W = d.next())
          (W = w(f, W.value, k)),
            W !== null &&
              ((a = i(W, a, R)),
              j === null ? (L = W) : (j.sibling = W),
              (j = W))
        return te && qt(f, R), L
      }
      for (M = r(f, M); !W.done; R++, W = d.next())
        (W = E(M, f, R, W.value, k)),
          W !== null &&
            (e && W.alternate !== null && M.delete(W.key === null ? R : W.key),
            (a = i(W, a, R)),
            j === null ? (L = W) : (j.sibling = W),
            (j = W))
      return (
        e &&
          M.forEach(function (Ff) {
            return t(f, Ff)
          }),
        te && qt(f, R),
        L
      )
    }
    function ae(f, a, d, k) {
      if (
        (typeof d == 'object' &&
          d !== null &&
          d.type === je &&
          d.key === null &&
          (d = d.props.children),
        typeof d == 'object' && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var L = d.key, j = a; j !== null; ) {
                if (j.key === L) {
                  if (((L = d.type), L === je)) {
                    if (j.tag === 7) {
                      n(f, j.sibling),
                        (a = l(j, d.props.children)),
                        (a.return = f),
                        (f = a)
                      break e
                    }
                  } else if (
                    j.elementType === L ||
                    (typeof L == 'object' &&
                      L !== null &&
                      L.$$typeof === Me &&
                      ls(L) === j.type)
                  ) {
                    n(f, j.sibling),
                      (a = l(j, d.props)),
                      (a.ref = ir(f, j, d)),
                      (a.return = f),
                      (f = a)
                    break e
                  }
                  n(f, j)
                  break
                } else t(f, j)
                j = j.sibling
              }
              d.type === je
                ? ((a = un(d.props.children, f.mode, k, d.key)),
                  (a.return = f),
                  (f = a))
                : ((k = xl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = ir(f, a, d)),
                  (k.return = f),
                  (f = k))
            }
            return o(f)
          case Pe:
            e: {
              for (j = d.key; a !== null; ) {
                if (a.key === j)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    n(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a)
                    break e
                  } else {
                    n(f, a)
                    break
                  }
                else t(f, a)
                a = a.sibling
              }
              ;(a = xo(d, f.mode, k)), (a.return = f), (f = a)
            }
            return o(f)
          case Me:
            return (j = d._init), ae(f, a, j(d._payload), k)
        }
        if (On(d)) return P(f, a, d, k)
        if (T(d)) return z(f, a, d, k)
        qr(f, d)
      }
      return (typeof d == 'string' && d !== '') || typeof d == 'number'
        ? ((d = '' + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = So(d, f.mode, k)), (a.return = f), (f = a)),
          o(f))
        : n(f, a)
    }
    return ae
  }
  var _n = is(!0),
    os = is(!1),
    br = Dt(null),
    el = null,
    Nn = null,
    ji = null
  function Mi() {
    ji = Nn = el = null
  }
  function Ti(e) {
    var t = br.current
    J(br), (e._currentValue = t)
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break
      e = e.return
    }
  }
  function Pn(e, t) {
    ;(el = e),
      (ji = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Oe = !0), (e.firstContext = null))
  }
  function Ge(e) {
    var t = e._currentValue
    if (ji !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (el === null) throw Error(p(308))
        ;(Nn = e), (el.dependencies = { lanes: 0, firstContext: e })
      } else Nn = Nn.next = e
    return t
  }
  var bt = null
  function Oi(e) {
    bt === null ? (bt = [e]) : bt.push(e)
  }
  function us(e, t, n, r) {
    var l = t.interleaved
    return (
      l === null ? ((n.next = n), Oi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ct(e, r)
    )
  }
  function Ct(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return)
    return n.tag === 3 ? n.stateNode : null
  }
  var Vt = !1
  function Di(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function ss(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function Et(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function Ht(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), U & 2)) {
      var l = r.pending
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ct(e, n)
      )
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Oi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    )
  }
  function tl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes
      ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n)
    }
  }
  function as(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          }
          i === null ? (l = i = o) : (i = i.next = o), (n = n.next)
        } while (n !== null)
        i === null ? (l = i = t) : (i = i.next = t)
      } else l = i = t
      ;(n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n)
      return
    }
    ;(e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t)
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue
    Vt = !1
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending
    if (u !== null) {
      l.shared.pending = null
      var s = u,
        m = s.next
      ;(s.next = null), o === null ? (i = m) : (o.next = m), (o = s)
      var y = e.alternate
      y !== null &&
        ((y = y.updateQueue),
        (u = y.lastBaseUpdate),
        u !== o &&
          (u === null ? (y.firstBaseUpdate = m) : (u.next = m),
          (y.lastBaseUpdate = s)))
    }
    if (i !== null) {
      var w = l.baseState
      ;(o = 0), (y = m = s = null), (u = i)
      do {
        var v = u.lane,
          E = u.eventTime
        if ((r & v) === v) {
          y !== null &&
            (y = y.next =
              {
                eventTime: E,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              })
          e: {
            var P = e,
              z = u
            switch (((v = t), (E = n), z.tag)) {
              case 1:
                if (((P = z.payload), typeof P == 'function')) {
                  w = P.call(E, w, v)
                  break e
                }
                w = P
                break e
              case 3:
                P.flags = (P.flags & -65537) | 128
              case 0:
                if (
                  ((P = z.payload),
                  (v = typeof P == 'function' ? P.call(E, w, v) : P),
                  v == null)
                )
                  break e
                w = N({}, w, v)
                break e
              case 2:
                Vt = !0
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [u]) : v.push(u))
        } else
          (E = {
            eventTime: E,
            lane: v,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            y === null ? ((m = y = E), (s = w)) : (y = y.next = E),
            (o |= v)
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break
          ;(v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null)
        }
      } while (!0)
      if (
        (y === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = y),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t
        do (o |= l.lane), (l = l.next)
        while (l !== t)
      } else i === null && (l.shared.lanes = 0)
      ;(nn |= o), (e.lanes = o), (e.memoizedState = w)
    }
  }
  function cs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function'))
            throw Error(p(191, l))
          l.call(r)
        }
      }
  }
  var or = {},
    ht = Dt(or),
    ur = Dt(or),
    sr = Dt(or)
  function en(e) {
    if (e === or) throw Error(p(174))
    return e
  }
  function Ii(e, t) {
    switch ((G(sr, t), G(ur, e), G(ht, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, '')
        break
      default:
        ;(e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fl(t, e))
    }
    J(ht), G(ht, t)
  }
  function zn() {
    J(ht), J(ur), J(sr)
  }
  function fs(e) {
    en(sr.current)
    var t = en(ht.current),
      n = Fl(t, e.type)
    t !== n && (G(ur, e), G(ht, n))
  }
  function Fi(e) {
    ur.current === e && (J(ht), J(ur))
  }
  var re = Dt(0)
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var Vi = []
  function Hi() {
    for (var e = 0; e < Vi.length; e++)
      Vi[e]._workInProgressVersionPrimary = null
    Vi.length = 0
  }
  var ll = Se.ReactCurrentDispatcher,
    Ui = Se.ReactCurrentBatchConfig,
    tn = 0,
    le = null,
    pe = null,
    me = null,
    il = !1,
    ar = !1,
    cr = 0,
    of = 0
  function Ce() {
    throw Error(p(321))
  }
  function Ai(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!rt(e[n], t[n])) return !1
    return !0
  }
  function Bi(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? cf : ff),
      (e = n(r, l)),
      ar)
    ) {
      i = 0
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(p(301))
        ;(i += 1),
          (me = pe = null),
          (t.updateQueue = null),
          (ll.current = df),
          (e = n(r, l))
      } while (ar)
    }
    if (
      ((ll.current = sl),
      (t = pe !== null && pe.next !== null),
      (tn = 0),
      (me = pe = le = null),
      (il = !1),
      t)
    )
      throw Error(p(300))
    return e
  }
  function Wi() {
    var e = cr !== 0
    return (cr = 0), e
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return me === null ? (le.memoizedState = me = e) : (me = me.next = e), me
  }
  function Xe() {
    if (pe === null) {
      var e = le.alternate
      e = e !== null ? e.memoizedState : null
    } else e = pe.next
    var t = me === null ? le.memoizedState : me.next
    if (t !== null) (me = t), (pe = e)
    else {
      if (e === null) throw Error(p(310))
      ;(pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        me === null ? (le.memoizedState = me = e) : (me = me.next = e)
    }
    return me
  }
  function fr(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function $i(e) {
    var t = Xe(),
      n = t.queue
    if (n === null) throw Error(p(311))
    n.lastRenderedReducer = e
    var r = pe,
      l = r.baseQueue,
      i = n.pending
    if (i !== null) {
      if (l !== null) {
        var o = l.next
        ;(l.next = i.next), (i.next = o)
      }
      ;(r.baseQueue = l = i), (n.pending = null)
    }
    if (l !== null) {
      ;(i = l.next), (r = r.baseState)
      var u = (o = null),
        s = null,
        m = i
      do {
        var y = m.lane
        if ((tn & y) === y)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action))
        else {
          var w = {
            lane: y,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }
          s === null ? ((u = s = w), (o = r)) : (s = s.next = w),
            (le.lanes |= y),
            (nn |= y)
        }
        m = m.next
      } while (m !== null && m !== i)
      s === null ? (o = r) : (s.next = u),
        rt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
      l = e
      do (i = l.lane), (le.lanes |= i), (nn |= i), (l = l.next)
      while (l !== e)
    } else l === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
  }
  function Qi(e) {
    var t = Xe(),
      n = t.queue
    if (n === null) throw Error(p(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState
    if (l !== null) {
      n.pending = null
      var o = (l = l.next)
      do (i = e(i, o.action)), (o = o.next)
      while (o !== l)
      rt(i, t.memoizedState) || (Oe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i)
    }
    return [i, r]
  }
  function ds() {}
  function ps(e, t) {
    var n = le,
      r = Xe(),
      l = t(),
      i = !rt(r.memoizedState, l)
    if (
      (i && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Ki(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        dr(9, ms.bind(null, n, r, l, t), void 0, null),
        ve === null)
      )
        throw Error(p(349))
      tn & 30 || hs(n, t, l)
    }
    return l
  }
  function hs(e, t, n) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
  }
  function ms(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), gs(t) && ys(e)
  }
  function vs(e, t, n) {
    return n(function () {
      gs(t) && ys(e)
    })
  }
  function gs(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var n = t()
      return !rt(e, n)
    } catch {
      return !0
    }
  }
  function ys(e) {
    var t = Ct(e, 1)
    t !== null && st(t, e, 1, -1)
  }
  function ws(e) {
    var t = mt()
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = af.bind(null, le, e)),
      [t.memoizedState, e]
    )
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    )
  }
  function ks() {
    return Xe().memoizedState
  }
  function ol(e, t, n, r) {
    var l = mt()
    ;(le.flags |= e),
      (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r))
  }
  function ul(e, t, n, r) {
    var l = Xe()
    r = r === void 0 ? null : r
    var i = void 0
    if (pe !== null) {
      var o = pe.memoizedState
      if (((i = o.destroy), r !== null && Ai(r, o.deps))) {
        l.memoizedState = dr(t, n, i, r)
        return
      }
    }
    ;(le.flags |= e), (l.memoizedState = dr(1 | t, n, i, r))
  }
  function Ss(e, t) {
    return ol(8390656, 8, e, t)
  }
  function Ki(e, t) {
    return ul(2048, 8, e, t)
  }
  function xs(e, t) {
    return ul(4, 2, e, t)
  }
  function Cs(e, t) {
    return ul(4, 4, e, t)
  }
  function Es(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function _s(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ul(4, 4, Es.bind(null, t, e), n)
    )
  }
  function Zi() {}
  function Ns(e, t) {
    var n = Xe()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Ai(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e)
  }
  function Ps(e, t) {
    var n = Xe()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Ai(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e)
  }
  function zs(e, t, n) {
    return tn & 21
      ? (rt(n, t) ||
          ((n = lu()), (le.lanes |= n), (nn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
  }
  function uf(e, t) {
    var n = K
    ;(K = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = Ui.transition
    Ui.transition = {}
    try {
      e(!1), t()
    } finally {
      ;(K = n), (Ui.transition = r)
    }
  }
  function Ls() {
    return Xe().memoizedState
  }
  function sf(e, t, n) {
    var r = Wt(e)
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      js(e))
    )
      Ms(t, n)
    else if (((n = us(e, t, n, r)), n !== null)) {
      var l = Le()
      st(n, e, r, l), Ts(n, t, r)
    }
  }
  function af(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (js(e)) Ms(t, l)
    else {
      var i = e.alternate
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n)
          if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, o))) {
            var s = t.interleaved
            s === null
              ? ((l.next = l), Oi(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l)
            return
          }
        } catch {
        } finally {
        }
      ;(n = us(e, t, l, r)),
        n !== null && ((l = Le()), st(n, e, r, l), Ts(n, t, r))
    }
  }
  function js(e) {
    var t = e.alternate
    return e === le || (t !== null && t === le)
  }
  function Ms(e, t) {
    ar = il = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t)
  }
  function Ts(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes
      ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n)
    }
  }
  var sl = {
      readContext: Ge,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    cf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return (mt().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: Ge,
      useEffect: Ss,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ol(4194308, 4, Es.bind(null, t, e), n)
        )
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var n = mt()
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        )
      },
      useReducer: function (e, t, n) {
        var r = mt()
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = sf.bind(null, le, e)),
          [r.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = mt()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: ws,
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e)
      },
      useTransition: function () {
        var e = ws(!1),
          t = e[0]
        return (e = uf.bind(null, e[1])), (mt().memoizedState = e), [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = mt()
        if (te) {
          if (n === void 0) throw Error(p(407))
          n = n()
        } else {
          if (((n = t()), ve === null)) throw Error(p(349))
          tn & 30 || hs(r, t, n)
        }
        l.memoizedState = n
        var i = { value: n, getSnapshot: t }
        return (
          (l.queue = i),
          Ss(vs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, ms.bind(null, r, i, n, t), void 0, null),
          n
        )
      },
      useId: function () {
        var e = mt(),
          t = ve.identifierPrefix
        if (te) {
          var n = xt,
            r = St
          ;(n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = cr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':')
        } else (n = of++), (t = ':' + t + 'r' + n.toString(32) + ':')
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    ff = {
      readContext: Ge,
      useCallback: Ns,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: _s,
      useInsertionEffect: xs,
      useLayoutEffect: Cs,
      useMemo: Ps,
      useReducer: $i,
      useRef: ks,
      useState: function () {
        return $i(fr)
      },
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        var t = Xe()
        return zs(t, pe.memoizedState, e)
      },
      useTransition: function () {
        var e = $i(fr)[0],
          t = Xe().memoizedState
        return [e, t]
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    },
    df = {
      readContext: Ge,
      useCallback: Ns,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: _s,
      useInsertionEffect: xs,
      useLayoutEffect: Cs,
      useMemo: Ps,
      useReducer: Qi,
      useRef: ks,
      useState: function () {
        return Qi(fr)
      },
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        var t = Xe()
        return pe === null ? (t.memoizedState = e) : zs(t, pe.memoizedState, e)
      },
      useTransition: function () {
        var e = Qi(fr)[0],
          t = Xe().memoizedState
        return [e, t]
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    }
  function it(e, t) {
    if (e && e.defaultProps) {
      ;(t = N({}, t)), (e = e.defaultProps)
      for (var n in e) t[n] === void 0 && (t[n] = e[n])
      return t
    }
    return t
  }
  function Yi(e, t, n, r) {
    ;(t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals
      var r = Le(),
        l = Wt(e),
        i = Et(r, l)
      ;(i.payload = t),
        n != null && (i.callback = n),
        (t = Ht(e, i, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l))
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals
      var r = Le(),
        l = Wt(e),
        i = Et(r, l)
      ;(i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ht(e, i, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var n = Le(),
        r = Wt(e),
        l = Et(n, r)
      ;(l.tag = 2),
        t != null && (l.callback = t),
        (t = Ht(e, l, r)),
        t !== null && (st(t, e, r, n), tl(t, e, r))
    },
  }
  function Rs(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !qn(n, r) || !qn(l, i)
        : !0
    )
  }
  function Os(e, t, n) {
    var r = !1,
      l = It,
      i = t.contextType
    return (
      typeof i == 'object' && i !== null
        ? (i = Ge(i))
        : ((l = Re(t) ? Xt : xe.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Sn(e, l) : It)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    )
  }
  function Ds(e, t, n, r) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null)
  }
  function Gi(e, t, n, r) {
    var l = e.stateNode
    ;(l.props = n), (l.state = e.memoizedState), (l.refs = {}), Di(e)
    var i = t.contextType
    typeof i == 'object' && i !== null
      ? (l.context = Ge(i))
      : ((i = Re(t) ? Xt : xe.current), (l.context = Sn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && (Yi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
  }
  function Ln(e, t) {
    try {
      var n = '',
        r = t
      do (n += A(r)), (r = r.return)
      while (r)
      var l = n
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
    }
    return { value: e, source: t, stack: l, digest: null }
  }
  function Xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
  }
  function Ji(e, t) {
    try {
      console.error(t.value)
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  var pf = typeof WeakMap == 'function' ? WeakMap : Map
  function Is(e, t, n) {
    ;(n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
      (n.callback = function () {
        vl || ((vl = !0), (po = r)), Ji(e, t)
      }),
      n
    )
  }
  function Fs(e, t, n) {
    ;(n = Et(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == 'function') {
      var l = t.value
      ;(n.payload = function () {
        return r(l)
      }),
        (n.callback = function () {
          Ji(e, t)
        })
    }
    var i = e.stateNode
    return (
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (n.callback = function () {
          Ji(e, t),
            typeof r != 'function' &&
              (At === null ? (At = new Set([this])) : At.add(this))
          var o = t.stack
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : '',
          })
        }),
      n
    )
  }
  function Vs(e, t, n) {
    var r = e.pingCache
    if (r === null) {
      r = e.pingCache = new pf()
      var l = new Set()
      r.set(t, l)
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
    l.has(n) || (l.add(n), (e = Pf.bind(null, e, t, n)), t.then(e, e))
  }
  function Hs(e) {
    do {
      var t
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Us(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Et(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
            (n.lanes |= 1)),
        e)
  }
  var hf = Se.ReactCurrentOwner,
    Oe = !1
  function ze(e, t, n, r) {
    t.child = e === null ? os(t, null, n, r) : _n(t, e.child, n, r)
  }
  function As(e, t, n, r, l) {
    n = n.render
    var i = t.ref
    return (
      Pn(t, l),
      (r = Bi(e, t, n, r, i, l)),
      (n = Wi()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (te && n && _i(t), (t.flags |= 1), ze(e, t, r, l), t.child)
    )
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type
      return typeof i == 'function' &&
        !ko(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ws(e, t, i, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((i = e.child), !(e.lanes & l))) {
      var o = i.memoizedProps
      if (
        ((n = n.compare), (n = n !== null ? n : qn), n(o, r) && e.ref === t.ref)
      )
        return _t(e, t, l)
    }
    return (
      (t.flags |= 1),
      (e = Qt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps
      if (qn(i, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Oe = !0)
        else return (t.lanes = e.lanes), _t(e, t, l)
    }
    return qi(e, t, n, r, l)
  }
  function $s(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          G(Mn, We),
          (We |= n)
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            G(Mn, We),
            (We |= e),
            null
          )
        ;(t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          G(Mn, We),
          (We |= r)
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Mn, We),
        (We |= r)
    return ze(e, t, l, n), t.child
  }
  function Qs(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152))
  }
  function qi(e, t, n, r, l) {
    var i = Re(n) ? Xt : xe.current
    return (
      (i = Sn(t, i)),
      Pn(t, l),
      (n = Bi(e, t, n, r, i, l)),
      (r = Wi()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (te && r && _i(t), (t.flags |= 1), ze(e, t, n, l), t.child)
    )
  }
  function Ks(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0
      Zr(t)
    } else i = !1
    if ((Pn(t, l), t.stateNode === null))
      fl(e, t), Os(t, n, r), Gi(t, n, r, l), (r = !0)
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps
      o.props = u
      var s = o.context,
        m = n.contextType
      typeof m == 'object' && m !== null
        ? (m = Ge(m))
        : ((m = Re(n) ? Xt : xe.current), (m = Sn(t, m)))
      var y = n.getDerivedStateFromProps,
        w =
          typeof y == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function'
      w ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== m) && Ds(t, o, r, m)),
        (Vt = !1)
      var v = t.memoizedState
      ;(o.state = v),
        nl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || v !== s || Te.current || Vt
          ? (typeof y == 'function' && (Yi(t, n, y, r), (s = t.memoizedState)),
            (u = Vt || Rs(t, n, u, r, v, s, m))
              ? (w ||
                  (typeof o.UNSAFE_componentWillMount != 'function' &&
                    typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = m),
            (r = u))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1))
    } else {
      ;(o = t.stateNode),
        ss(e, t),
        (u = t.memoizedProps),
        (m = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = m),
        (w = t.pendingProps),
        (v = o.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? Xt : xe.current), (s = Sn(t, s)))
      var E = n.getDerivedStateFromProps
      ;(y =
        typeof E == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((u !== w || v !== s) && Ds(t, o, r, s)),
        (Vt = !1),
        (v = t.memoizedState),
        (o.state = v),
        nl(t, r, o, l)
      var P = t.memoizedState
      u !== w || v !== P || Te.current || Vt
        ? (typeof E == 'function' && (Yi(t, n, E, r), (P = t.memoizedState)),
          (m = Vt || Rs(t, n, m, r, v, P, s) || !1)
            ? (y ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' &&
                  o.componentWillUpdate(r, P, s),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(r, P, s)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (o.props = r),
          (o.state = P),
          (o.context = s),
          (r = m))
        : (typeof o.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1))
    }
    return bi(e, t, n, r, i, l)
  }
  function bi(e, t, n, r, l, i) {
    Qs(e, t)
    var o = (t.flags & 128) !== 0
    if (!r && !o) return l && Ju(t, n, !1), _t(e, t, i)
    ;(r = t.stateNode), (hf.current = t)
    var u =
      o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = _n(t, e.child, null, i)), (t.child = _n(t, null, u, i)))
        : ze(e, t, u, i),
      (t.memoizedState = r.state),
      l && Ju(t, n, !0),
      t.child
    )
  }
  function Zs(e) {
    var t = e.stateNode
    t.pendingContext
      ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Gu(e, t.context, !1),
      Ii(e, t.containerInfo)
  }
  function Ys(e, t, n, r, l) {
    return En(), Li(l), (t.flags |= 256), ze(e, t, n, r), t.child
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 }
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      G(re, l & 1),
      e === null)
    )
      return (
        zi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: 'hidden', children: o }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = Cl(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = to(n)),
                (t.memoizedState = eo),
                e)
              : no(t, o))
      )
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return mf(e, t, o, r, u, l, n)
    if (i) {
      ;(i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling)
      var s = { mode: 'hidden', children: r.children }
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Qt(u, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? to(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = eo),
        r
      )
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Qt(i, { mode: 'visible', children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    )
  }
  function no(e, t) {
    return (
      (t = Cl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    )
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Li(r),
      _n(t, e.child, null, n),
      (e = no(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function mf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Xi(Error(p(422)))), cl(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Cl({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = un(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && _n(t, e.child, null, o),
          (t.child.memoizedState = to(o)),
          (t.memoizedState = eo),
          i)
    if (!(t.mode & 1)) return cl(e, t, o, null)
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst
      return (
        (r = u), (i = Error(p(419))), (r = Xi(i, r, void 0)), cl(e, t, o, r)
      )
    }
    if (((u = (o & e.childLanes) !== 0), Oe || u)) {
      if (((r = ve), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2
            break
          case 16:
            l = 8
            break
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32
            break
          case 536870912:
            l = 268435456
            break
          default:
            l = 0
        }
        ;(l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Ct(e, l), st(r, e, l, -1))
      }
      return wo(), (r = Xi(Error(p(421)))), cl(e, t, o, r)
    }
    return l.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = zf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Be = Ot(l.nextSibling)),
        (Ae = t),
        (te = !0),
        (lt = null),
        e !== null &&
          ((Ze[Ye++] = St),
          (Ze[Ye++] = xt),
          (Ze[Ye++] = Jt),
          (St = e.id),
          (xt = e.overflow),
          (Jt = t)),
        (t = no(t, r.children)),
        (t.flags |= 4096),
        t)
  }
  function Xs(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), Ri(e.return, t, n)
  }
  function ro(e, t, n, r, l) {
    var i = e.memoizedState
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l))
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail
    if ((ze(e, t, r.children, n), (r = re.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t)
          else if (e.tag === 19) Xs(e, n, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      r &= 1
    }
    if ((G(re, r), !(t.mode & 1))) t.memoizedState = null
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && rl(e) === null && (l = n),
              (n = n.sibling)
          ;(n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ro(t, !1, l, n, i)
          break
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l
              break
            }
            ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
          }
          ro(t, !0, n, null, i)
          break
        case 'together':
          ro(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function fl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      !(n & t.childLanes))
    )
      return null
    if (e !== null && t.child !== e.child) throw Error(p(153))
    if (t.child !== null) {
      for (
        e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t)
      n.sibling = null
    }
    return t.child
  }
  function vf(e, t, n) {
    switch (t.tag) {
      case 3:
        Zs(t), En()
        break
      case 5:
        fs(t)
        break
      case 1:
        Re(t.type) && Zr(t)
        break
      case 4:
        Ii(t, t.stateNode.containerInfo)
        break
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value
        G(br, r._currentValue), (r._currentValue = l)
        break
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(re, re.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Gs(e, t, n)
            : (G(re, re.current & 1),
              (e = _t(e, t, n)),
              e !== null ? e.sibling : null)
        G(re, re.current & 1)
        break
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Js(e, t, n)
          t.flags |= 128
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          G(re, re.current),
          r)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), $s(e, t, n)
    }
    return _t(e, t, n)
  }
  var qs, lo, bs, ea
  ;(qs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
      else if (n.tag !== 4 && n.child !== null) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === t) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
  }),
    (lo = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps
      if (l !== r) {
        ;(e = t.stateNode), en(ht.current)
        var i = null
        switch (n) {
          case 'input':
            ;(l = Rl(e, l)), (r = Rl(e, r)), (i = [])
            break
          case 'select':
            ;(l = N({}, l, { value: void 0 })),
              (r = N({}, r, { value: void 0 })),
              (i = [])
            break
          case 'textarea':
            ;(l = Il(e, l)), (r = Il(e, r)), (i = [])
            break
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = $r)
        }
        Vl(n, r)
        var o
        n = null
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === 'style') {
              var u = l[m]
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
            } else
              m !== 'dangerouslySetInnerHTML' &&
                m !== 'children' &&
                m !== 'suppressContentEditableWarning' &&
                m !== 'suppressHydrationWarning' &&
                m !== 'autoFocus' &&
                (D.hasOwnProperty(m)
                  ? i || (i = [])
                  : (i = i || []).push(m, null))
        for (m in r) {
          var s = r[m]
          if (
            ((u = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== u && (s != null || u != null))
          )
            if (m === 'style')
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ''))
                for (o in s)
                  s.hasOwnProperty(o) &&
                    u[o] !== s[o] &&
                    (n || (n = {}), (n[o] = s[o]))
              } else n || (i || (i = []), i.push(m, n)), (n = s)
            else
              m === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(m, s))
                : m === 'children'
                ? (typeof s != 'string' && typeof s != 'number') ||
                  (i = i || []).push(m, '' + s)
                : m !== 'suppressContentEditableWarning' &&
                  m !== 'suppressHydrationWarning' &&
                  (D.hasOwnProperty(m)
                    ? (s != null && m === 'onScroll' && X('scroll', e),
                      i || u === s || (i = []))
                    : (i = i || []).push(m, s))
        }
        n && (i = i || []).push('style', n)
        var m = i
        ;(t.updateQueue = m) && (t.flags |= 4)
      }
    }),
    (ea = function (e, t, n, r) {
      n !== r && (t.flags |= 4)
    })
  function pr(e, t) {
    if (!te)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling)
          n === null ? (e.tail = null) : (n.sibling = null)
          break
        case 'collapsed':
          n = e.tail
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling)
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null)
      }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling)
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
  }
  function gf(e, t, n) {
    var r = t.pendingProps
    switch ((Ni(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(t), null
      case 1:
        return Re(t.type) && Kr(), Ee(t), null
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          J(Te),
          J(xe),
          Hi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), lt !== null && (vo(lt), (lt = null)))),
          lo(e, t),
          Ee(t),
          null
        )
      case 5:
        Fi(t)
        var l = en(sr.current)
        if (((n = t.type), e !== null && t.stateNode != null))
          bs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166))
            return Ee(t), null
          }
          if (((e = en(ht.current)), Jr(t))) {
            ;(r = t.stateNode), (n = t.type)
            var i = t.memoizedProps
            switch (((r[pt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                X('cancel', r), X('close', r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                X('load', r)
                break
              case 'video':
              case 'audio':
                for (l = 0; l < er.length; l++) X(er[l], r)
                break
              case 'source':
                X('error', r)
                break
              case 'img':
              case 'image':
              case 'link':
                X('error', r), X('load', r)
                break
              case 'details':
                X('toggle', r)
                break
              case 'input':
                Oo(r, i), X('invalid', r)
                break
              case 'select':
                ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                  X('invalid', r)
                break
              case 'textarea':
                Fo(r, i), X('invalid', r)
            }
            Vl(n, i), (l = null)
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o]
                o === 'children'
                  ? typeof u == 'string'
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, u, e),
                      (l = ['children', u]))
                    : typeof u == 'number' &&
                      r.textContent !== '' + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, u, e),
                      (l = ['children', '' + u]))
                  : D.hasOwnProperty(o) &&
                    u != null &&
                    o === 'onScroll' &&
                    X('scroll', r)
              }
            switch (n) {
              case 'input':
                kr(r), Io(r, i, !0)
                break
              case 'textarea':
                kr(r), Ho(r)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof i.onClick == 'function' && (r.onclick = $r)
            }
            ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
          } else {
            ;(o = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Uo(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = o.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[pt] = t),
              (e[rr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e)
            e: {
              switch (((o = Hl(n, r)), n)) {
                case 'dialog':
                  X('cancel', e), X('close', e), (l = r)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  X('load', e), (l = r)
                  break
                case 'video':
                case 'audio':
                  for (l = 0; l < er.length; l++) X(er[l], e)
                  l = r
                  break
                case 'source':
                  X('error', e), (l = r)
                  break
                case 'img':
                case 'image':
                case 'link':
                  X('error', e), X('load', e), (l = r)
                  break
                case 'details':
                  X('toggle', e), (l = r)
                  break
                case 'input':
                  Oo(e, r), (l = Rl(e, r)), X('invalid', e)
                  break
                case 'option':
                  l = r
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    X('invalid', e)
                  break
                case 'textarea':
                  Fo(e, r), (l = Il(e, r)), X('invalid', e)
                  break
                default:
                  l = r
              }
              Vl(n, l), (u = l)
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i]
                  i === 'style'
                    ? Wo(e, s)
                    : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && Ao(e, s))
                    : i === 'children'
                    ? typeof s == 'string'
                      ? (n !== 'textarea' || s !== '') && Dn(e, s)
                      : typeof s == 'number' && Dn(e, '' + s)
                    : i !== 'suppressContentEditableWarning' &&
                      i !== 'suppressHydrationWarning' &&
                      i !== 'autoFocus' &&
                      (D.hasOwnProperty(i)
                        ? s != null && i === 'onScroll' && X('scroll', e)
                        : s != null && be(e, i, s, o))
                }
              switch (n) {
                case 'input':
                  kr(e), Io(e, r, !1)
                  break
                case 'textarea':
                  kr(e), Ho(e)
                  break
                case 'option':
                  r.value != null && e.setAttribute('value', '' + Q(r.value))
                  break
                case 'select':
                  ;(e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0)
                  break
                default:
                  typeof l.onClick == 'function' && (e.onclick = $r)
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus
                  break e
                case 'img':
                  r = !0
                  break e
                default:
                  r = !1
              }
            }
            r && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return Ee(t), null
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r)
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(p(166))
          if (((n = en(sr.current)), en(ht.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = Ae), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wr(r.nodeValue, n, (e.mode & 1) !== 0)
              }
            i && (t.flags |= 4)
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r)
        }
        return Ee(t), null
      case 13:
        if (
          (J(re),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Be !== null && t.mode & 1 && !(t.flags & 128))
            rs(), En(), (t.flags |= 98560), (i = !1)
          else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(p(318))
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(p(317))
              i[pt] = t
            } else
              En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
            Ee(t), (i = !1)
          } else lt !== null && (vo(lt), (lt = null)), (i = !0)
          if (!i) return t.flags & 65536 ? t : null
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || re.current & 1 ? he === 0 && (he = 3) : wo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ee(t),
            null)
      case 4:
        return (
          zn(),
          lo(e, t),
          e === null && tr(t.stateNode.containerInfo),
          Ee(t),
          null
        )
      case 10:
        return Ti(t.type._context), Ee(t), null
      case 17:
        return Re(t.type) && Kr(), Ee(t), null
      case 19:
        if ((J(re), (i = t.memoizedState), i === null)) return Ee(t), null
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) pr(i, !1)
          else {
            if (he !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = rl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling)
                  return G(re, (re.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            i.tail !== null &&
              se() > Tn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304))
          }
        else {
          if (!r)
            if (((e = rl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null &&
                  i.tailMode === 'hidden' &&
                  !o.alternate &&
                  !te)
              )
                return Ee(t), null
            } else
              2 * se() - i.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304))
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o))
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = se()),
            (t.sibling = null),
            (n = re.current),
            G(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ee(t), null)
      case 22:
      case 23:
        return (
          yo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? We & 1073741824 &&
              (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ee(t),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(p(156, t.tag))
  }
  function yf(e, t) {
    switch ((Ni(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          zn(),
          J(Te),
          J(xe),
          Hi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 5:
        return Fi(t), null
      case 13:
        if (
          (J(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(p(340))
          En()
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return J(re), null
      case 4:
        return zn(), null
      case 10:
        return Ti(t.type._context), null
      case 22:
      case 23:
        return yo(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var dl = !1,
    _e = !1,
    wf = typeof WeakSet == 'function' ? WeakSet : Set,
    _ = null
  function jn(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null)
        } catch (r) {
          oe(e, t, r)
        }
      else n.current = null
  }
  function io(e, t, n) {
    try {
      n()
    } catch (r) {
      oe(e, t, r)
    }
  }
  var ta = !1
  function kf(e, t) {
    if (((gi = Tr), (e = Ru()), ai(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window
          var r = n.getSelection && n.getSelection()
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode
            var l = r.anchorOffset,
              i = r.focusNode
            r = r.focusOffset
            try {
              n.nodeType, i.nodeType
            } catch {
              n = null
              break e
            }
            var o = 0,
              u = -1,
              s = -1,
              m = 0,
              y = 0,
              w = e,
              v = null
            t: for (;;) {
              for (
                var E;
                w !== n || (l !== 0 && w.nodeType !== 3) || (u = o + l),
                  w !== i || (r !== 0 && w.nodeType !== 3) || (s = o + r),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (E = w.firstChild) !== null;

              )
                (v = w), (w = E)
              for (;;) {
                if (w === e) break t
                if (
                  (v === n && ++m === l && (u = o),
                  v === i && ++y === r && (s = o),
                  (E = w.nextSibling) !== null)
                )
                  break
                ;(w = v), (v = w.parentNode)
              }
              w = E
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s }
          } else n = null
        }
      n = n || { start: 0, end: 0 }
    } else n = null
    for (
      yi = { focusedElem: e, selectionRange: n }, Tr = !1, _ = t;
      _ !== null;

    )
      if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (_ = e)
      else
        for (; _ !== null; ) {
          t = _
          try {
            var P = t.alternate
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (P !== null) {
                    var z = P.memoizedProps,
                      ae = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : it(t.type, z),
                        ae
                      )
                    f.__reactInternalSnapshotBeforeUpdate = a
                  }
                  break
                case 3:
                  var d = t.stateNode.containerInfo
                  d.nodeType === 1
                    ? (d.textContent = '')
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(p(163))
              }
          } catch (k) {
            oe(t, t.return, k)
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (_ = e)
            break
          }
          _ = t.return
        }
    return (P = ta), (ta = !1), P
  }
  function hr(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next)
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy
          ;(l.destroy = void 0), i !== void 0 && io(t, n, i)
        }
        l = l.next
      } while (l !== r)
    }
  }
  function pl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next)
      do {
        if ((n.tag & e) === e) {
          var r = n.create
          n.destroy = r()
        }
        n = n.next
      } while (n !== t)
    }
  }
  function oo(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode
      switch (e.tag) {
        case 5:
          e = n
          break
        default:
          e = n
      }
      typeof t == 'function' ? t(e) : (t.current = e)
    }
  }
  function na(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), na(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[pt],
          delete t[rr],
          delete t[xi],
          delete t[tf],
          delete t[nf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function la(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ra(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function uo(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = $r))
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uo(e, t, n), e = e.sibling; e !== null; )
        uo(e, t, n), (e = e.sibling)
  }
  function so(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null; )
        so(e, t, n), (e = e.sibling)
  }
  var ye = null,
    ot = !1
  function Ut(e, t, n) {
    for (n = n.child; n !== null; ) ia(e, t, n), (n = n.sibling)
  }
  function ia(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == 'function')
      try {
        dt.onCommitFiberUnmount(Nr, n)
      } catch {}
    switch (n.tag) {
      case 5:
        _e || jn(n, t)
      case 6:
        var r = ye,
          l = ot
        ;(ye = null),
          Ut(e, t, n),
          (ye = r),
          (ot = l),
          ye !== null &&
            (ot
              ? ((e = ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ye.removeChild(n.stateNode))
        break
      case 18:
        ye !== null &&
          (ot
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? Si(e.parentNode, n)
                : e.nodeType === 1 && Si(e, n),
              Kn(e))
            : Si(ye, n.stateNode))
        break
      case 4:
        ;(r = ye),
          (l = ot),
          (ye = n.stateNode.containerInfo),
          (ot = !0),
          Ut(e, t, n),
          (ye = r),
          (ot = l)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !_e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next
          do {
            var i = l,
              o = i.destroy
            ;(i = i.tag),
              o !== void 0 && (i & 2 || i & 4) && io(n, t, o),
              (l = l.next)
          } while (l !== r)
        }
        Ut(e, t, n)
        break
      case 1:
        if (
          !_e &&
          (jn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            ;(r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount()
          } catch (u) {
            oe(n, t, u)
          }
        Ut(e, t, n)
        break
      case 21:
        Ut(e, t, n)
        break
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), Ut(e, t, n), (_e = r))
          : Ut(e, t, n)
        break
      default:
        Ut(e, t, n)
    }
  }
  function oa(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      n === null && (n = e.stateNode = new wf()),
        t.forEach(function (r) {
          var l = Lf.bind(null, e, r)
          n.has(r) || (n.add(r), r.then(l, l))
        })
    }
  }
  function ut(e, t) {
    var n = t.deletions
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r]
        try {
          var i = e,
            o = t,
            u = o
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ;(ye = u.stateNode), (ot = !1)
                break e
              case 3:
                ;(ye = u.stateNode.containerInfo), (ot = !0)
                break e
              case 4:
                ;(ye = u.stateNode.containerInfo), (ot = !0)
                break e
            }
            u = u.return
          }
          if (ye === null) throw Error(p(160))
          ia(i, o, l), (ye = null), (ot = !1)
          var s = l.alternate
          s !== null && (s.return = null), (l.return = null)
        } catch (m) {
          oe(l, t, m)
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) ua(t, e), (t = t.sibling)
  }
  function ua(e, t) {
    var n = e.alternate,
      r = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            hr(3, e, e.return), pl(3, e)
          } catch (z) {
            oe(e, e.return, z)
          }
          try {
            hr(5, e, e.return)
          } catch (z) {
            oe(e, e.return, z)
          }
        }
        break
      case 1:
        ut(t, e), vt(e), r & 512 && n !== null && jn(n, n.return)
        break
      case 5:
        if (
          (ut(t, e),
          vt(e),
          r & 512 && n !== null && jn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode
          try {
            Dn(l, '')
          } catch (z) {
            oe(e, e.return, z)
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue
          if (((e.updateQueue = null), s !== null))
            try {
              u === 'input' && i.type === 'radio' && i.name != null && Do(l, i),
                Hl(u, o)
              var m = Hl(u, i)
              for (o = 0; o < s.length; o += 2) {
                var y = s[o],
                  w = s[o + 1]
                y === 'style'
                  ? Wo(l, w)
                  : y === 'dangerouslySetInnerHTML'
                  ? Ao(l, w)
                  : y === 'children'
                  ? Dn(l, w)
                  : be(l, y, w, m)
              }
              switch (u) {
                case 'input':
                  Ol(l, i)
                  break
                case 'textarea':
                  Vo(l, i)
                  break
                case 'select':
                  var v = l._wrapperState.wasMultiple
                  l._wrapperState.wasMultiple = !!i.multiple
                  var E = i.value
                  E != null
                    ? an(l, !!i.multiple, E, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : '', !1))
              }
              l[rr] = i
            } catch (z) {
              oe(e, e.return, z)
            }
        }
        break
      case 6:
        if ((ut(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162))
          ;(l = e.stateNode), (i = e.memoizedProps)
          try {
            l.nodeValue = i
          } catch (z) {
            oe(e, e.return, z)
          }
        }
        break
      case 3:
        if (
          (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Kn(t.containerInfo)
          } catch (z) {
            oe(e, e.return, z)
          }
        break
      case 4:
        ut(t, e), vt(e)
        break
      case 13:
        ut(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (fo = se())),
          r & 4 && oa(e)
        break
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (m = _e) || y), ut(t, e), (_e = m)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !y && e.mode & 1)
          )
            for (_ = e, y = e.child; y !== null; ) {
              for (w = _ = y; _ !== null; ) {
                switch (((v = _), (E = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hr(4, v, v.return)
                    break
                  case 1:
                    jn(v, v.return)
                    var P = v.stateNode
                    if (typeof P.componentWillUnmount == 'function') {
                      ;(r = v), (n = v.return)
                      try {
                        ;(t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount()
                      } catch (z) {
                        oe(r, n, z)
                      }
                    }
                    break
                  case 5:
                    jn(v, v.return)
                    break
                  case 22:
                    if (v.memoizedState !== null) {
                      ca(w)
                      continue
                    }
                }
                E !== null ? ((E.return = v), (_ = E)) : ca(w)
              }
              y = y.sibling
            }
          e: for (y = null, w = e; ; ) {
            if (w.tag === 5) {
              if (y === null) {
                y = w
                try {
                  ;(l = w.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == 'function'
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none'))
                      : ((u = w.stateNode),
                        (s = w.memoizedProps.style),
                        (o =
                          s != null && s.hasOwnProperty('display')
                            ? s.display
                            : null),
                        (u.style.display = Bo('display', o)))
                } catch (z) {
                  oe(e, e.return, z)
                }
              }
            } else if (w.tag === 6) {
              if (y === null)
                try {
                  w.stateNode.nodeValue = m ? '' : w.memoizedProps
                } catch (z) {
                  oe(e, e.return, z)
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              ;(w.child.return = w), (w = w.child)
              continue
            }
            if (w === e) break e
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e
              y === w && (y = null), (w = w.return)
            }
            y === w && (y = null),
              (w.sibling.return = w.return),
              (w = w.sibling)
          }
        }
        break
      case 19:
        ut(t, e), vt(e), r & 4 && oa(e)
        break
      case 21:
        break
      default:
        ut(t, e), vt(e)
    }
  }
  function vt(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ra(n)) {
              var r = n
              break e
            }
            n = n.return
          }
          throw Error(p(160))
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode
            r.flags & 32 && (Dn(l, ''), (r.flags &= -33))
            var i = la(e)
            so(e, i, l)
            break
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = la(e)
            uo(e, u, o)
            break
          default:
            throw Error(p(161))
        }
      } catch (s) {
        oe(e, e.return, s)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function Sf(e, t, n) {
    ;(_ = e), sa(e)
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _,
        i = l.child
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || _e
          u = dl
          var m = _e
          if (((dl = o), (_e = s) && !m))
            for (_ = l; _ !== null; )
              (o = _),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? fa(l)
                  : s !== null
                  ? ((s.return = o), (_ = s))
                  : fa(l)
          for (; i !== null; ) (_ = i), sa(i), (i = i.sibling)
          ;(_ = l), (dl = u), (_e = m)
        }
        aa(e)
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : aa(e)
    }
  }
  function aa(e) {
    for (; _ !== null; ) {
      var t = _
      if (t.flags & 8772) {
        var n = t.alternate
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                _e || pl(5, t)
                break
              case 1:
                var r = t.stateNode
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount()
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : it(t.type, n.memoizedProps)
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    )
                  }
                var i = t.updateQueue
                i !== null && cs(t, i, r)
                break
              case 3:
                var o = t.updateQueue
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode
                        break
                      case 1:
                        n = t.child.stateNode
                    }
                  cs(t, o, n)
                }
                break
              case 5:
                var u = t.stateNode
                if (n === null && t.flags & 4) {
                  n = u
                  var s = t.memoizedProps
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && n.focus()
                      break
                    case 'img':
                      s.src && (n.src = s.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var m = t.alternate
                  if (m !== null) {
                    var y = m.memoizedState
                    if (y !== null) {
                      var w = y.dehydrated
                      w !== null && Kn(w)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(p(163))
            }
          _e || (t.flags & 512 && oo(t))
        } catch (v) {
          oe(t, t.return, v)
        }
      }
      if (t === e) {
        _ = null
        break
      }
      if (((n = t.sibling), n !== null)) {
        ;(n.return = t.return), (_ = n)
        break
      }
      _ = t.return
    }
  }
  function ca(e) {
    for (; _ !== null; ) {
      var t = _
      if (t === e) {
        _ = null
        break
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (_ = n)
        break
      }
      _ = t.return
    }
  }
  function fa(e) {
    for (; _ !== null; ) {
      var t = _
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return
            try {
              pl(4, t)
            } catch (s) {
              oe(t, n, s)
            }
            break
          case 1:
            var r = t.stateNode
            if (typeof r.componentDidMount == 'function') {
              var l = t.return
              try {
                r.componentDidMount()
              } catch (s) {
                oe(t, l, s)
              }
            }
            var i = t.return
            try {
              oo(t)
            } catch (s) {
              oe(t, i, s)
            }
            break
          case 5:
            var o = t.return
            try {
              oo(t)
            } catch (s) {
              oe(t, o, s)
            }
        }
      } catch (s) {
        oe(t, t.return, s)
      }
      if (t === e) {
        _ = null
        break
      }
      var u = t.sibling
      if (u !== null) {
        ;(u.return = t.return), (_ = u)
        break
      }
      _ = t.return
    }
  }
  var xf = Math.ceil,
    hl = Se.ReactCurrentDispatcher,
    ao = Se.ReactCurrentOwner,
    Je = Se.ReactCurrentBatchConfig,
    U = 0,
    ve = null,
    de = null,
    we = 0,
    We = 0,
    Mn = Dt(0),
    he = 0,
    mr = null,
    nn = 0,
    ml = 0,
    co = 0,
    vr = null,
    De = null,
    fo = 0,
    Tn = 1 / 0,
    Nt = null,
    vl = !1,
    po = null,
    At = null,
    gl = !1,
    Bt = null,
    yl = 0,
    gr = 0,
    ho = null,
    wl = -1,
    kl = 0
  function Le() {
    return U & 6 ? se() : wl !== -1 ? wl : (wl = se())
  }
  function Wt(e) {
    return e.mode & 1
      ? U & 2 && we !== 0
        ? we & -we
        : lf.transition !== null
        ? (kl === 0 && (kl = lu()), kl)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pu(e.type))),
          e)
      : 1
  }
  function st(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (ho = null), Error(p(185)))
    An(e, n, r),
      (!(U & 2) || e !== ve) &&
        (e === ve && (!(U & 2) && (ml |= n), he === 4 && $t(e, we)),
        Ie(e, r),
        n === 1 && U === 0 && !(t.mode & 1) && ((Tn = se() + 500), Yr && Ft()))
  }
  function Ie(e, t) {
    var n = e.callbackNode
    lc(e, t)
    var r = Lr(e, e === ve ? we : 0)
    if (r === 0)
      n !== null && tu(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && tu(n), t === 1))
        e.tag === 0 ? rf(pa.bind(null, e)) : qu(pa.bind(null, e)),
          bc(function () {
            !(U & 6) && Ft()
          }),
          (n = null)
      else {
        switch (iu(r)) {
          case 1:
            n = Kl
            break
          case 4:
            n = nu
            break
          case 16:
            n = _r
            break
          case 536870912:
            n = ru
            break
          default:
            n = _r
        }
        n = Sa(n, da.bind(null, e))
      }
      ;(e.callbackPriority = t), (e.callbackNode = n)
    }
  }
  function da(e, t) {
    if (((wl = -1), (kl = 0), U & 6)) throw Error(p(327))
    var n = e.callbackNode
    if (Rn() && e.callbackNode !== n) return null
    var r = Lr(e, e === ve ? we : 0)
    if (r === 0) return null
    if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r)
    else {
      t = r
      var l = U
      U |= 2
      var i = ma()
      ;(ve !== e || we !== t) && ((Nt = null), (Tn = se() + 500), ln(e, t))
      do
        try {
          _f()
          break
        } catch (u) {
          ha(e, u)
        }
      while (!0)
      Mi(),
        (hl.current = i),
        (U = l),
        de !== null ? (t = 0) : ((ve = null), (we = 0), (t = he))
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Zl(e)), l !== 0 && ((r = l), (t = mo(e, l)))),
        t === 1)
      )
        throw ((n = mr), ln(e, 0), $t(e, r), Ie(e, se()), n)
      if (t === 6) $t(e, r)
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Cf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((i = Zl(e)), i !== 0 && ((r = i), (t = mo(e, i)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), $t(e, r), Ie(e, se()), n)
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345))
          case 2:
            on(e, De, Nt)
            break
          case 3:
            if (
              ($t(e, r),
              (r & 130023424) === r && ((t = fo + 500 - se()), 10 < t))
            ) {
              if (Lr(e, 0) !== 0) break
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Le(), (e.pingedLanes |= e.suspendedLanes & l)
                break
              }
              e.timeoutHandle = ki(on.bind(null, e, De, Nt), t)
              break
            }
            on(e, De, Nt)
            break
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - nt(r)
              ;(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i)
            }
            if (
              ((r = l),
              (r = se() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * xf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ki(on.bind(null, e, De, Nt), r)
              break
            }
            on(e, De, Nt)
            break
          case 5:
            on(e, De, Nt)
            break
          default:
            throw Error(p(329))
        }
      }
    }
    return Ie(e, se()), e.callbackNode === n ? da.bind(null, e) : null
  }
  function mo(e, t) {
    var n = vr
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && vo(t)),
      e
    )
  }
  function vo(e) {
    De === null ? (De = e) : De.push.apply(De, e)
  }
  function Cf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot
            l = l.value
            try {
              if (!rt(i(), l)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function $t(e, t) {
    for (
      t &= ~co,
        t &= ~ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - nt(t),
        r = 1 << n
      ;(e[n] = -1), (t &= ~r)
    }
  }
  function pa(e) {
    if (U & 6) throw Error(p(327))
    Rn()
    var t = Lr(e, 0)
    if (!(t & 1)) return Ie(e, se()), null
    var n = Sl(e, t)
    if (e.tag !== 0 && n === 2) {
      var r = Zl(e)
      r !== 0 && ((t = r), (n = mo(e, r)))
    }
    if (n === 1) throw ((n = mr), ln(e, 0), $t(e, t), Ie(e, se()), n)
    if (n === 6) throw Error(p(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, De, Nt),
      Ie(e, se()),
      null
    )
  }
  function go(e, t) {
    var n = U
    U |= 1
    try {
      return e(t)
    } finally {
      ;(U = n), U === 0 && ((Tn = se() + 500), Yr && Ft())
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && !(U & 6) && Rn()
    var t = U
    U |= 1
    var n = Je.transition,
      r = K
    try {
      if (((Je.transition = null), (K = 1), e)) return e()
    } finally {
      ;(K = r), (Je.transition = n), (U = t), !(U & 6) && Ft()
    }
  }
  function yo() {
    ;(We = Mn.current), J(Mn)
  }
  function ln(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), qc(n)), de !== null))
      for (n = de.return; n !== null; ) {
        var r = n
        switch ((Ni(r), r.tag)) {
          case 1:
            ;(r = r.type.childContextTypes), r != null && Kr()
            break
          case 3:
            zn(), J(Te), J(xe), Hi()
            break
          case 5:
            Fi(r)
            break
          case 4:
            zn()
            break
          case 13:
            J(re)
            break
          case 19:
            J(re)
            break
          case 10:
            Ti(r.type._context)
            break
          case 22:
          case 23:
            yo()
        }
        n = n.return
      }
    if (
      ((ve = e),
      (de = e = Qt(e.current, null)),
      (we = We = t),
      (he = 0),
      (mr = null),
      (co = ml = nn = 0),
      (De = vr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null
          var l = r.next,
            i = n.pending
          if (i !== null) {
            var o = i.next
            ;(i.next = l), (r.next = o)
          }
          n.pending = r
        }
      bt = null
    }
    return e
  }
  function ha(e, t) {
    do {
      var n = de
      try {
        if ((Mi(), (ll.current = sl), il)) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue
            l !== null && (l.pending = null), (r = r.next)
          }
          il = !1
        }
        if (
          ((tn = 0),
          (me = pe = le = null),
          (ar = !1),
          (cr = 0),
          (ao.current = null),
          n === null || n.return === null)
        ) {
          ;(he = 1), (mr = t), (de = null)
          break
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t
          if (
            ((t = we),
            (u.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var m = s,
              y = u,
              w = y.tag
            if (!(y.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var v = y.alternate
              v
                ? ((y.updateQueue = v.updateQueue),
                  (y.memoizedState = v.memoizedState),
                  (y.lanes = v.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null))
            }
            var E = Hs(o)
            if (E !== null) {
              ;(E.flags &= -257),
                Us(E, o, u, i, t),
                E.mode & 1 && Vs(i, m, t),
                (t = E),
                (s = m)
              var P = t.updateQueue
              if (P === null) {
                var z = new Set()
                z.add(s), (t.updateQueue = z)
              } else P.add(s)
              break e
            } else {
              if (!(t & 1)) {
                Vs(i, m, t), wo()
                break e
              }
              s = Error(p(426))
            }
          } else if (te && u.mode & 1) {
            var ae = Hs(o)
            if (ae !== null) {
              !(ae.flags & 65536) && (ae.flags |= 256),
                Us(ae, o, u, i, t),
                Li(Ln(s, u))
              break e
            }
          }
          ;(i = s = Ln(s, u)),
            he !== 4 && (he = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = o)
          do {
            switch (i.tag) {
              case 3:
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var f = Is(i, s, t)
                as(i, f)
                break e
              case 1:
                u = s
                var a = i.type,
                  d = i.stateNode
                if (
                  !(i.flags & 128) &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (d !== null &&
                      typeof d.componentDidCatch == 'function' &&
                      (At === null || !At.has(d))))
                ) {
                  ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                  var k = Fs(i, u, t)
                  as(i, k)
                  break e
                }
            }
            i = i.return
          } while (i !== null)
        }
        ga(n)
      } catch (L) {
        ;(t = L), de === n && n !== null && (de = n = n.return)
        continue
      }
      break
    } while (!0)
  }
  function ma() {
    var e = hl.current
    return (hl.current = sl), e === null ? sl : e
  }
  function wo() {
    ;(he === 0 || he === 3 || he === 2) && (he = 4),
      ve === null || (!(nn & 268435455) && !(ml & 268435455)) || $t(ve, we)
  }
  function Sl(e, t) {
    var n = U
    U |= 2
    var r = ma()
    ;(ve !== e || we !== t) && ((Nt = null), ln(e, t))
    do
      try {
        Ef()
        break
      } catch (l) {
        ha(e, l)
      }
    while (!0)
    if ((Mi(), (U = n), (hl.current = r), de !== null)) throw Error(p(261))
    return (ve = null), (we = 0), he
  }
  function Ef() {
    for (; de !== null; ) va(de)
  }
  function _f() {
    for (; de !== null && !Ga(); ) va(de)
  }
  function va(e) {
    var t = ka(e.alternate, e, We)
    ;(e.memoizedProps = e.pendingProps),
      t === null ? ga(e) : (de = t),
      (ao.current = null)
  }
  function ga(e) {
    var t = e
    do {
      var n = t.alternate
      if (((e = t.return), t.flags & 32768)) {
        if (((n = yf(n, t)), n !== null)) {
          ;(n.flags &= 32767), (de = n)
          return
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(he = 6), (de = null)
          return
        }
      } else if (((n = gf(n, t, We)), n !== null)) {
        de = n
        return
      }
      if (((t = t.sibling), t !== null)) {
        de = t
        return
      }
      de = t = e
    } while (t !== null)
    he === 0 && (he = 5)
  }
  function on(e, t, n) {
    var r = K,
      l = Je.transition
    try {
      ;(Je.transition = null), (K = 1), Nf(e, t, n, r)
    } finally {
      ;(Je.transition = l), (K = r)
    }
    return null
  }
  function Nf(e, t, n, r) {
    do Rn()
    while (Bt !== null)
    if (U & 6) throw Error(p(327))
    n = e.finishedWork
    var l = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(p(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var i = n.lanes | n.childLanes
    if (
      (ic(e, i),
      e === ve && ((de = ve = null), (we = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        gl ||
        ((gl = !0),
        Sa(_r, function () {
          return Rn(), null
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      ;(i = Je.transition), (Je.transition = null)
      var o = K
      K = 1
      var u = U
      ;(U |= 4),
        (ao.current = null),
        kf(e, n),
        ua(n, e),
        Qc(yi),
        (Tr = !!gi),
        (yi = gi = null),
        (e.current = n),
        Sf(n),
        Xa(),
        (U = u),
        (K = o),
        (Je.transition = i)
    } else e.current = n
    if (
      (gl && ((gl = !1), (Bt = e), (yl = l)),
      (i = e.pendingLanes),
      i === 0 && (At = null),
      ba(n.stateNode),
      Ie(e, se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
    if (vl) throw ((vl = !1), (e = po), (po = null), e)
    return (
      yl & 1 && e.tag !== 0 && Rn(),
      (i = e.pendingLanes),
      i & 1 ? (e === ho ? gr++ : ((gr = 0), (ho = e))) : (gr = 0),
      Ft(),
      null
    )
  }
  function Rn() {
    if (Bt !== null) {
      var e = iu(yl),
        t = Je.transition,
        n = K
      try {
        if (((Je.transition = null), (K = 16 > e ? 16 : e), Bt === null))
          var r = !1
        else {
          if (((e = Bt), (Bt = null), (yl = 0), U & 6)) throw Error(p(331))
          var l = U
          for (U |= 4, _ = e.current; _ !== null; ) {
            var i = _,
              o = i.child
            if (_.flags & 16) {
              var u = i.deletions
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var m = u[s]
                  for (_ = m; _ !== null; ) {
                    var y = _
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, y, i)
                    }
                    var w = y.child
                    if (w !== null) (w.return = y), (_ = w)
                    else
                      for (; _ !== null; ) {
                        y = _
                        var v = y.sibling,
                          E = y.return
                        if ((na(y), y === m)) {
                          _ = null
                          break
                        }
                        if (v !== null) {
                          ;(v.return = E), (_ = v)
                          break
                        }
                        _ = E
                      }
                  }
                }
                var P = i.alternate
                if (P !== null) {
                  var z = P.child
                  if (z !== null) {
                    P.child = null
                    do {
                      var ae = z.sibling
                      ;(z.sibling = null), (z = ae)
                    } while (z !== null)
                  }
                }
                _ = i
              }
            }
            if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o)
            else
              e: for (; _ !== null; ) {
                if (((i = _), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(9, i, i.return)
                  }
                var f = i.sibling
                if (f !== null) {
                  ;(f.return = i.return), (_ = f)
                  break e
                }
                _ = i.return
              }
          }
          var a = e.current
          for (_ = a; _ !== null; ) {
            o = _
            var d = o.child
            if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (_ = d)
            else
              e: for (o = a; _ !== null; ) {
                if (((u = _), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, u)
                    }
                  } catch (L) {
                    oe(u, u.return, L)
                  }
                if (u === o) {
                  _ = null
                  break e
                }
                var k = u.sibling
                if (k !== null) {
                  ;(k.return = u.return), (_ = k)
                  break e
                }
                _ = u.return
              }
          }
          if (
            ((U = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == 'function')
          )
            try {
              dt.onPostCommitFiberRoot(Nr, e)
            } catch {}
          r = !0
        }
        return r
      } finally {
        ;(K = n), (Je.transition = t)
      }
    }
    return !1
  }
  function ya(e, t, n) {
    ;(t = Ln(n, t)),
      (t = Is(e, t, 1)),
      (e = Ht(e, t, 1)),
      (t = Le()),
      e !== null && (An(e, 1, t), Ie(e, t))
  }
  function oe(e, t, n) {
    if (e.tag === 3) ya(e, e, n)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ya(t, e, n)
          break
        } else if (t.tag === 1) {
          var r = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (At === null || !At.has(r)))
          ) {
            ;(e = Ln(n, e)),
              (e = Fs(t, e, 1)),
              (t = Ht(t, e, 1)),
              (e = Le()),
              t !== null && (An(t, 1, e), Ie(t, e))
            break
          }
        }
        t = t.return
      }
  }
  function Pf(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t),
      (t = Le()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (we & n) === n &&
        (he === 4 || (he === 3 && (we & 130023424) === we && 500 > se() - fo)
          ? ln(e, 0)
          : (co |= n)),
      Ie(e, t)
  }
  function wa(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304))
        : (t = 1))
    var n = Le()
    ;(e = Ct(e, t)), e !== null && (An(e, t, n), Ie(e, n))
  }
  function zf(e) {
    var t = e.memoizedState,
      n = 0
    t !== null && (n = t.retryLane), wa(e, n)
  }
  function Lf(e, t) {
    var n = 0
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState
        l !== null && (n = l.retryLane)
        break
      case 19:
        r = e.stateNode
        break
      default:
        throw Error(p(314))
    }
    r !== null && r.delete(t), wa(e, n)
  }
  var ka
  ka = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Oe = !0
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), vf(e, t, n)
        Oe = !!(e.flags & 131072)
      }
    else (Oe = !1), te && t.flags & 1048576 && bu(t, Xr, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type
        fl(e, t), (e = t.pendingProps)
        var l = Sn(t, xe.current)
        Pn(t, n), (l = Bi(null, t, r, e, l, n))
        var i = Wi()
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((i = !0), Zr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Di(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Gi(t, r, e, n),
              (t = bi(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && _i(t), ze(null, t, l, n), (t = t.child)),
          t
        )
      case 16:
        r = t.elementType
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Mf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n)
              break e
            case 1:
              t = Ks(null, t, r, e, n)
              break e
            case 11:
              t = As(null, t, r, e, n)
              break e
            case 14:
              t = Bs(null, t, r, it(r.type, e), n)
              break e
          }
          throw Error(p(306, r, ''))
        }
        return t
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          qi(e, t, r, l, n)
        )
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Ks(e, t, r, l, n)
        )
      case 3:
        e: {
          if ((Zs(t), e === null)) throw Error(p(387))
          ;(r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            ss(e, t),
            nl(t, r, null, n)
          var o = t.memoizedState
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ;(l = Ln(Error(p(423)), t)), (t = Ys(e, t, r, n, l))
              break e
            } else if (r !== l) {
              ;(l = Ln(Error(p(424)), t)), (t = Ys(e, t, r, n, l))
              break e
            } else
              for (
                Be = Ot(t.stateNode.containerInfo.firstChild),
                  Ae = t,
                  te = !0,
                  lt = null,
                  n = os(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
          else {
            if ((En(), r === l)) {
              t = _t(e, t, n)
              break e
            }
            ze(e, t, r, n)
          }
          t = t.child
        }
        return t
      case 5:
        return (
          fs(t),
          e === null && zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
          Qs(e, t),
          ze(e, t, o, n),
          t.child
        )
      case 6:
        return e === null && zi(t), null
      case 13:
        return Gs(e, t, n)
      case 4:
        return (
          Ii(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : ze(e, t, r, n),
          t.child
        )
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          As(e, t, r, l, n)
        )
      case 7:
        return ze(e, t, t.pendingProps, n), t.child
      case 8:
        return ze(e, t, t.pendingProps.children, n), t.child
      case 12:
        return ze(e, t, t.pendingProps.children, n), t.child
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            G(br, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (rt(i.value, o)) {
              if (i.children === l.children && !Te.current) {
                t = _t(e, t, n)
                break e
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies
                if (u !== null) {
                  o = i.child
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ;(s = Et(-1, n & -n)), (s.tag = 2)
                        var m = i.updateQueue
                        if (m !== null) {
                          m = m.shared
                          var y = m.pending
                          y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (m.pending = s)
                        }
                      }
                      ;(i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ri(i.return, n, t),
                        (u.lanes |= n)
                      break
                    }
                    s = s.next
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(p(341))
                  ;(o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Ri(o, n, t),
                    (o = i.sibling)
                } else o = i.child
                if (o !== null) o.return = i
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null
                      break
                    }
                    if (((i = o.sibling), i !== null)) {
                      ;(i.return = o.return), (o = i)
                      break
                    }
                    o = o.return
                  }
                i = o
              }
          ze(e, t, l.children, n), (t = t.child)
        }
        return t
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        )
      case 14:
        return (
          (r = t.type),
          (l = it(r, t.pendingProps)),
          (l = it(r.type, l)),
          Bs(e, t, r, l, n)
        )
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n)
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          fl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Zr(t)) : (e = !1),
          Pn(t, n),
          Os(t, r, l),
          Gi(t, r, l, n),
          bi(null, t, r, !0, e, n)
        )
      case 19:
        return Js(e, t, n)
      case 22:
        return $s(e, t, n)
    }
    throw Error(p(156, t.tag))
  }
  function Sa(e, t) {
    return eu(e, t)
  }
  function jf(e, t, n, r) {
    ;(this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function qe(e, t, n, r) {
    return new jf(e, t, n, r)
  }
  function ko(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Mf(e) {
    if (typeof e == 'function') return ko(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11
      if (e === ft) return 14
    }
    return 2
  }
  function Qt(e, t) {
    var n = e.alternate
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    )
  }
  function xl(e, t, n, r, l, i) {
    var o = 2
    if (((r = e), typeof e == 'function')) ko(e) && (o = 1)
    else if (typeof e == 'string') o = 5
    else
      e: switch (e) {
        case je:
          return un(n.children, l, i, t)
        case Ke:
          ;(o = 8), (l |= 8)
          break
        case Pt:
          return (
            (e = qe(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = i), e
          )
        case Ve:
          return (e = qe(13, n, t, l)), (e.elementType = Ve), (e.lanes = i), e
        case tt:
          return (e = qe(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e
        case ie:
          return Cl(n, l, i, t)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case yt:
                o = 10
                break e
              case Zt:
                o = 9
                break e
              case ct:
                o = 11
                break e
              case ft:
                o = 14
                break e
              case Me:
                ;(o = 16), (r = null)
                break e
            }
          throw Error(p(130, e == null ? e : typeof e, ''))
      }
    return (
      (t = qe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    )
  }
  function un(e, t, n, r) {
    return (e = qe(7, e, r, t)), (e.lanes = n), e
  }
  function Cl(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function So(e, t, n) {
    return (e = qe(6, e, null, t)), (e.lanes = n), e
  }
  function xo(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function Tf(e, t, n, r, l) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null)
  }
  function Co(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new Tf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Di(i),
      e
    )
  }
  function Rf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: Pe,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    }
  }
  function xa(e) {
    if (!e) return It
    e = e._reactInternals
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(p(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (Re(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(p(171))
    }
    if (e.tag === 1) {
      var n = e.type
      if (Re(n)) return Xu(e, n, t)
    }
    return t
  }
  function Ca(e, t, n, r, l, i, o, u, s) {
    return (
      (e = Co(n, r, !0, e, l, i, o, u, s)),
      (e.context = xa(null)),
      (n = e.current),
      (r = Le()),
      (l = Wt(n)),
      (i = Et(r, l)),
      (i.callback = t ?? null),
      Ht(n, i, l),
      (e.current.lanes = l),
      An(e, l, r),
      Ie(e, r),
      e
    )
  }
  function El(e, t, n, r) {
    var l = t.current,
      i = Le(),
      o = Wt(l)
    return (
      (n = xa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ht(l, t, o)),
      e !== null && (st(e, l, o, i), tl(e, l, o)),
      o
    )
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function Ea(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }
  function Eo(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t)
  }
  var _a =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function _o(e) {
    this._internalRoot = e
  }
  ;(Nl.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(p(409))
      El(e, t, null, null)
    }),
    (Nl.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          rn(function () {
            El(null, e, null, null)
          }),
            (t[wt] = null)
        }
      })
  function Nl(e) {
    this._internalRoot = e
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = su()
      e = { blockedOn: null, target: e, priority: t }
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      Mt.splice(n, 0, e), n === 0 && fu(e)
    }
  }
  function No(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function Na() {}
  function Of(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var i = r
        r = function () {
          var m = _l(o)
          i.call(m)
        }
      }
      var o = Ca(t, r, e, 0, null, !1, !1, '', Na)
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        o
      )
    }
    for (; (l = e.lastChild); ) e.removeChild(l)
    if (typeof r == 'function') {
      var u = r
      r = function () {
        var m = _l(s)
        u.call(m)
      }
    }
    var s = Co(e, 0, !1, null, null, !1, !1, '', Na)
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        El(t, s, n, r)
      }),
      s
    )
  }
  function zl(e, t, n, r, l) {
    var i = n._reactRootContainer
    if (i) {
      var o = i
      if (typeof l == 'function') {
        var u = l
        l = function () {
          var s = _l(o)
          u.call(s)
        }
      }
      El(t, o, e, l)
    } else o = Of(n, t, e, l, r)
    return _l(o)
  }
  ;(ou = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var n = Un(t.pendingLanes)
          n !== 0 &&
            (Gl(t, n | 1), Ie(t, se()), !(U & 6) && ((Tn = se() + 500), Ft()))
        }
        break
      case 13:
        rn(function () {
          var r = Ct(e, 1)
          if (r !== null) {
            var l = Le()
            st(r, e, 1, l)
          }
        }),
          Eo(e, 1)
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728)
        if (t !== null) {
          var n = Le()
          st(t, e, 134217728, n)
        }
        Eo(e, 134217728)
      }
    }),
    (uu = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Ct(e, t)
        if (n !== null) {
          var r = Le()
          st(n, e, t, r)
        }
        Eo(e, t)
      }
    }),
    (su = function () {
      return K
    }),
    (au = function (e, t) {
      var n = K
      try {
        return (K = e), t()
      } finally {
        K = n
      }
    }),
    (Bl = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Ol(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t]
              if (r !== e && r.form === e.form) {
                var l = Qr(r)
                if (!l) throw Error(p(90))
                Ro(r), Ol(r, l)
              }
            }
          }
          break
        case 'textarea':
          Vo(e, n)
          break
        case 'select':
          ;(t = n.value), t != null && an(e, !!n.multiple, t, !1)
      }
    }),
    (Zo = go),
    (Yo = rn)
  var Df = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Qo, Ko, go] },
    yr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    If = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = qo(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: yr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ;(Nr = Ll.inject(If)), (dt = Ll)
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df),
    (Fe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!No(t)) throw Error(p(200))
      return Rf(e, t, null, n)
    }),
    (Fe.createRoot = function (e, t) {
      if (!No(e)) throw Error(p(299))
      var n = !1,
        r = '',
        l = _a
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Co(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new _o(t)
      )
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(p(188))
          : ((e = Object.keys(e).join(',')), Error(p(268, e)))
      return (e = qo(t)), (e = e === null ? null : e.stateNode), e
    }),
    (Fe.flushSync = function (e) {
      return rn(e)
    }),
    (Fe.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(p(200))
      return zl(null, e, t, !0, n)
    }),
    (Fe.hydrateRoot = function (e, t, n) {
      if (!No(e)) throw Error(p(405))
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = '',
        o = _a
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l)
      return new Nl(t)
    }),
    (Fe.render = function (e, t, n) {
      if (!Pl(t)) throw Error(p(200))
      return zl(null, e, t, !1, n)
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(p(40))
      return e._reactRootContainer
        ? (rn(function () {
            zl(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[wt] = null)
            })
          }),
          !0)
        : !1
    }),
    (Fe.unstable_batchedUpdates = go),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(p(200))
      if (e == null || e._reactInternals === void 0) throw Error(p(38))
      return zl(e, t, n, !1, r)
    }),
    (Fe.version = '18.3.1-next-f1338f8080-20240426'),
    Fe
  )
}
var Oa
function Qf() {
  if (Oa) return Lo.exports
  Oa = 1
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)
      } catch (x) {
        console.error(x)
      }
  }
  return h(), (Lo.exports = $f()), Lo.exports
}
var Da
function Kf() {
  if (Da) return jl
  Da = 1
  var h = Qf()
  return (jl.createRoot = h.createRoot), (jl.hydrateRoot = h.hydrateRoot), jl
}
var Zf = Kf(),
  Ha = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ia = sn.createContext && sn.createContext(Ha),
  Yf = ['attr', 'size', 'title']
function Gf(h, x) {
  if (h == null) return {}
  var p = Xf(h, x),
    O,
    D
  if (Object.getOwnPropertySymbols) {
    var $ = Object.getOwnPropertySymbols(h)
    for (D = 0; D < $.length; D++)
      (O = $[D]),
        !(x.indexOf(O) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(h, O) &&
          (p[O] = h[O])
  }
  return p
}
function Xf(h, x) {
  if (h == null) return {}
  var p = {}
  for (var O in h)
    if (Object.prototype.hasOwnProperty.call(h, O)) {
      if (x.indexOf(O) >= 0) continue
      p[O] = h[O]
    }
  return p
}
function Ml() {
  return (
    (Ml = Object.assign
      ? Object.assign.bind()
      : function (h) {
          for (var x = 1; x < arguments.length; x++) {
            var p = arguments[x]
            for (var O in p)
              Object.prototype.hasOwnProperty.call(p, O) && (h[O] = p[O])
          }
          return h
        }),
    Ml.apply(this, arguments)
  )
}
function Fa(h, x) {
  var p = Object.keys(h)
  if (Object.getOwnPropertySymbols) {
    var O = Object.getOwnPropertySymbols(h)
    x &&
      (O = O.filter(function (D) {
        return Object.getOwnPropertyDescriptor(h, D).enumerable
      })),
      p.push.apply(p, O)
  }
  return p
}
function Tl(h) {
  for (var x = 1; x < arguments.length; x++) {
    var p = arguments[x] != null ? arguments[x] : {}
    x % 2
      ? Fa(Object(p), !0).forEach(function (O) {
          Jf(h, O, p[O])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(p))
      : Fa(Object(p)).forEach(function (O) {
          Object.defineProperty(h, O, Object.getOwnPropertyDescriptor(p, O))
        })
  }
  return h
}
function Jf(h, x, p) {
  return (
    (x = qf(x)),
    x in h
      ? Object.defineProperty(h, x, {
          value: p,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (h[x] = p),
    h
  )
}
function qf(h) {
  var x = bf(h, 'string')
  return typeof x == 'symbol' ? x : x + ''
}
function bf(h, x) {
  if (typeof h != 'object' || !h) return h
  var p = h[Symbol.toPrimitive]
  if (p !== void 0) {
    var O = p.call(h, x || 'default')
    if (typeof O != 'object') return O
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (x === 'string' ? String : Number)(h)
}
function Ua(h) {
  return (
    h &&
    h.map((x, p) =>
      sn.createElement(x.tag, Tl({ key: p }, x.attr), Ua(x.child))
    )
  )
}
function ce(h) {
  return (x) =>
    sn.createElement(ed, Ml({ attr: Tl({}, h.attr) }, x), Ua(h.child))
}
function ed(h) {
  var x = (p) => {
    var { attr: O, size: D, title: $ } = h,
      fe = Gf(h, Yf),
      ue = D || p.size || '1em',
      H
    return (
      p.className && (H = p.className),
      h.className && (H = (H ? H + ' ' : '') + h.className),
      sn.createElement(
        'svg',
        Ml(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          p.attr,
          O,
          fe,
          {
            className: H,
            style: Tl(Tl({ color: h.color || p.color }, p.style), h.style),
            height: ue,
            width: ue,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        $ && sn.createElement('title', null, $),
        h.children
      )
    )
  }
  return Ia !== void 0
    ? sn.createElement(Ia.Consumer, null, (p) => x(p))
    : x(Ha)
}
function td(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      { tag: 'path', attr: { d: 'M12 3 4 9v12h5v-7h6v7h5V9z' }, child: [] },
    ],
  })(h)
}
function nd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z',
        },
        child: [],
      },
    ],
  })(h)
}
function rd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm4.026 2.879C5.356 7.65 5.72 7.5 6 7.5s.643.15.974.629a.75.75 0 0 0 1.234-.854C7.66 6.484 6.873 6 6 6c-.873 0-1.66.484-2.208 1.275C3.25 8.059 3 9.048 3 10c0 .952.25 1.941.792 2.725C4.34 13.516 5.127 14 6 14c.873 0 1.66-.484 2.208-1.275a.75.75 0 0 0 .133-.427V10a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h.591v1.295c-.293.342-.6.455-.841.455-.279 0-.643-.15-.974-.629C4.69 11.386 4.5 10.711 4.5 10c0-.711.19-1.386.526-1.871ZM10.75 6a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75Zm3 0h2.5a.75.75 0 0 1 0 1.5H14.5v1.75h.75a.75.75 0 0 1 0 1.5h-.75v2.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75Z',
          clipRule: 'evenodd',
        },
        child: [],
      },
    ],
  })(h)
}
function ld(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M7 1V3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H10.7546C9.65672 19.6304 9 17.8919 9 16C9 11.5817 12.5817 8 17 8C18.8919 8 20.6304 8.65672 22 9.75463V4C22 3.44772 21.5523 3 21 3H17V1H15V3H9V1H7ZM23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16ZM16 12V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V12H16Z',
        },
        child: [],
      },
    ],
  })(h)
}
function id(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM5.79993 16H7.95399L8.55399 14.5H11.4459L12.0459 16H14.1999L10.9999 8H8.99993L5.79993 16ZM9.99993 10.8852L10.6459 12.5H9.35399L9.99993 10.8852ZM15 16V8H17V16H15ZM3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V11H20V19H4V5H14V3H3Z',
        },
        child: [],
      },
    ],
  })(h)
}
function od(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 2.58582L18.2071 8.79292L16.7929 10.2071L13 6.41424V16H11V6.41424L7.20711 10.2071L5.79289 8.79292L12 2.58582ZM3 18V14H5V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14H21V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18Z',
        },
        child: [],
      },
    ],
  })(h)
}
function Aa(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
        },
        child: [],
      },
    ],
  })(h)
}
function ud(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 192c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192zM320 288c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z',
        },
        child: [],
      },
    ],
  })(h)
}
function sd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z',
        },
        child: [],
      },
      {
        tag: 'circle',
        attr: {
          cx: '256',
          cy: '192',
          r: '48',
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
        },
        child: [],
      },
    ],
  })(h)
}
function ad(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66zM256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480z',
        },
        child: [],
      },
    ],
  })(h)
}
function cd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154',
        },
        child: [],
      },
    ],
  })(h)
}
function fd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M338.29 338.29 448 448',
        },
        child: [],
      },
    ],
  })(h)
}
function dd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z',
        },
        child: [],
      },
    ],
  })(h)
}
function pd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z',
        },
        child: [],
      },
    ],
  })(h)
}
function hd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Bookmark' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M17.6,21.945a1.483,1.483,0,0,1-1.01-.4l-4.251-3.9a.5.5,0,0,0-.68,0L7.409,21.545a1.5,1.5,0,0,1-2.516-1.1V4.57a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.442a1.481,1.481,0,0,1-.9,1.374A1.507,1.507,0,0,1,17.6,21.945ZM12,16.51a1.5,1.5,0,0,1,1.018.395l4.251,3.9a.5.5,0,0,0,.839-.368V4.57a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.442a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.51Z',
            },
            child: [],
          },
        ],
      },
    ],
  })(h)
}
function md(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Circle_More' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'circle',
                attr: { cx: '12.001', cy: '12', r: '1' },
                child: [],
              },
              {
                tag: 'circle',
                attr: { cx: '16.001', cy: '12', r: '1' },
                child: [],
              },
              {
                tag: 'circle',
                attr: { cx: '8.001', cy: '12', r: '1' },
                child: [],
              },
              {
                tag: 'path',
                attr: {
                  d: 'M12,21.932A9.934,9.934,0,1,1,21.934,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.065Z',
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(h)
}
function vd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Heart' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z',
            },
            child: [],
          },
        ],
      },
    ],
  })(h)
}
function gd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'User' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'path',
                attr: {
                  d: 'M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z',
                },
                child: [],
              },
              {
                tag: 'path',
                attr: {
                  d: 'M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z',
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(h)
}
function yd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'View_Board' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'path',
                attr: {
                  d: 'M18.437,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.563,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z',
                },
                child: [],
              },
              {
                tag: 'path',
                attr: { d: 'M12.5,14.544a.5.5,0,0,1-1,0v-8h0a.5.5,0,0,1,1,0Z' },
                child: [],
              },
              {
                tag: 'path',
                attr: {
                  d: 'M16.717,12.453a.5.5,0,0,1-1,0V6.544h0a.5.5,0,0,1,1,0Z',
                },
                child: [],
              },
              {
                tag: 'path',
                attr: { d: 'M8.28,6.544a.5.5,0,0,0-1,0h0v4a.5.5,0,0,0,1,0Z' },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(h)
}
const wd = [
    { icons: S.jsx(nd, {}), title: 'Media' },
    { icons: S.jsx(rd, {}), title: 'GIF' },
    { icons: S.jsx(id, {}), title: 'Generate Image' },
    { icons: S.jsx(ud, {}), title: 'Poll' },
    { icons: '😄', title: 'Emoji' },
    { icons: S.jsx(ld, {}), title: 'Schedule' },
    { icons: S.jsx(sd, {}), title: 'Location' },
  ],
  kd = [
    { icons: S.jsx(dd, {}), title: 'Reply' },
    { icons: S.jsx(pd, {}), title: 'Repost' },
    { icons: S.jsx(vd, {}), title: 'Like' },
    { icons: S.jsx(yd, {}), title: 'View' },
    { icons: S.jsx(hd, {}), title: 'Bookmark' },
    { icons: S.jsx(od, {}), title: 'Share' },
  ],
  Sd = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]
function xd() {
  return S.jsxs('div', {
    className: '',
    children: [
      S.jsxs('div', {
        className:
          'flex items-center h-12 border-b border-gray-700 cursor-pointer',
        children: [
          S.jsx('div', {
            className:
              'font-bold hover:bg-slate-800 w-full h-full flex justify-center items-center',
            children: S.jsx('span', { children: 'For you' }),
          }),
          S.jsx('div', {
            className:
              'font-bold hover:bg-slate-800 w-full h-full flex justify-center items-center',
            children: S.jsx('span', { children: 'Following' }),
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'grid grid-cols-12 py-3 border-b border-gray-700',
        children: [
          S.jsx('div', {
            className: 'col-span-2 grid grid-rows-8',
            children: S.jsx('div', {
              className:
                'h-10 w-10 row-span-3 rounded-full overflow-hidden m-auto',
              children: S.jsx('img', {
                className: 'h-full w-full ',
                src: 'https://pbs.twimg.com/profile_images/1838314871961575424/FCDw4eKI_400x400.jpg',
                alt: '',
              }),
            }),
          }),
          S.jsxs('div', {
            className: 'col-span-10 grid grid-rows-4',
            children: [
              S.jsx('div', {
                className: 'row-span-2 w-full h-16 flex -mt-4',
                children: S.jsx('input', {
                  className:
                    'bg-transparent w-full placeholder:text-xl px-3 placeholder:text-gray-500 outline-none',
                  type: 'text',
                  placeholder: 'What is happening?!',
                }),
              }),
              S.jsxs('div', {
                className: 'row-span-2  grid grid-cols-12',
                children: [
                  S.jsx('div', {
                    className:
                      'col-span-6 flex flex-row justify-evenly gap-2 items-center',
                    children: wd.map((h, x) =>
                      S.jsx(
                        'div',
                        {
                          title: h.title,
                          className: 'text-xl',
                          children: h.icons,
                        },
                        x
                      )
                    ),
                  }),
                  S.jsx('div', {
                    className:
                      'col-span-6 flex justify-end overflow-hidden px-5',
                    children: S.jsx('button', {
                      className:
                        ' rounded-full px-6 my-2 outline-none border-none hover:bg-slate-900',
                      children: 'Post',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Sd.map((h, x) =>
        S.jsxs(
          'div',
          {
            className: 'grid grid-cols-12 py-3 border-b border-gray-700',
            children: [
              S.jsx('div', {
                className: 'col-span-2 grid grid-rows-8',
                children: S.jsx('div', {
                  className:
                    'h-10 w-10 row-span-3 rounded-full overflow-hidden ml-6',
                  children: S.jsx('img', {
                    className: 'h-full w-full ',
                    src: 'https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg',
                    alt: '',
                  }),
                }),
              }),
              S.jsxs('div', {
                className: 'col-span-10 flex flex-col px-4',
                children: [
                  S.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      S.jsx('span', {
                        className: 'font-bold text-lg',
                        children: 'Narendra Modi',
                      }),
                      S.jsx('span', {
                        children: S.jsx('img', {
                          className: 'w-5',
                          src: 'https://img.icons8.com/?size=256w&id=pmwTGmuQrtwg&format=png',
                        }),
                      }),
                    ],
                  }),
                  S.jsx('div', {
                    children: S.jsx('span', {
                      className: 'text-sm font-semibold',
                      children:
                        'पूर्व प्रधानमंत्री भारत रत्न अटल बिहारी वाजपेयी जी को उनकी 100वीं जन्म-जयंती पर आदरपूर्ण श्रद्धांजलि। उन्होंने सशक्त, समृद्ध और स्वावलंबी भारत के निर्माण के लिए अपना जीवन समर्पित कर दिया। उनका विजन और मिशन विकसित भारत के संकल्प में निरंतर शक्ति का संचार करता रहेगा।',
                    }),
                  }),
                  S.jsx('div', {
                    className: 'w-full rounded-2xl overflow-hidden mt-3',
                    children: S.jsx('img', {
                      src: 'https://images.unsplash.com/photo-1636777299552-4fbb482b9267?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }),
                  }),
                  S.jsx('div', {
                    className: 'flex justify-between px-3 mt-4',
                    children: kd.map((p, O) =>
                      S.jsx(
                        'div',
                        { className: 'text-xl', children: p.icons },
                        O
                      )
                    ),
                  }),
                ],
              }),
            ],
          },
          x
        )
      ),
    ],
  })
}
const Cd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function Ed() {
  return S.jsxs('div', {
    className: 'flex flex-col',
    children: [
      S.jsxs('div', {
        className:
          'flex items-center h-fit bg-gray-600 rounded-3xl mx-3 mr-8 px-3 mt-3 overflow-hidden',
        children: [
          S.jsx('span', { children: S.jsx(fd, {}) }),
          S.jsx('input', {
            className:
              'pl-4 placeholder:bg-transparent bg-transparent h-11 w-full outline-none',
            type: 'text',
            placeholder: 'Search',
          }),
        ],
      }),
      Cd.map((h, x) =>
        S.jsxs(
          'div',
          {
            className: 'mx-3 mr-7 border rounded-xl border-gray-600 mt-10 p-4',
            children: [
              S.jsx('div', {
                children: S.jsx('h1', {
                  className: 'text-3xl font-bold',
                  children: 'Live on X',
                }),
              }),
              S.jsxs('div', {
                className: 'flex items-center gap-1',
                children: [
                  S.jsx('img', {
                    className: 'w-5',
                    src: 'https://vignette.wikia.nocookie.net/logopedia/images/d/d0/ABPNews_2016.jpg/revision/latest?cb=20170818145530',
                  }),
                  S.jsx('h4', { children: 'ABP News' }),
                  S.jsx('img', {
                    className: 'w-5',
                    src: 'https://img.icons8.com/?size=256w&id=pmwTGmuQrtwg&format=png',
                  }),
                ],
              }),
              S.jsx('div', {
                children: S.jsx('p', {
                  children:
                    'देश-प्रदेश और राजनीति की बड़ी खबरें विस्तार से ABP NEWS पर LIVE more ...',
                }),
              }),
            ],
          },
          x
        )
      ),
    ],
  })
}
function _d(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z',
        },
        child: [],
      },
    ],
  })(h)
}
function Nd(h) {
  return ce({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z',
        },
        child: [],
      },
    ],
  })(h)
}
const Pd = [
  { name: 'Home', icon: S.jsx(td, {}) },
  { name: 'Explore', icon: S.jsx(_d, {}) },
  { name: 'Notifications', icon: S.jsx(ad, {}) },
  { name: 'Messages', icon: S.jsx(Nd, {}) },
  { name: 'Communities', icon: S.jsx(cd, {}) },
  { name: 'Premium', icon: S.jsx(Aa, {}) },
  { name: 'Profile', icon: S.jsx(gd, {}) },
  { name: 'More', icon: S.jsx(md, {}) },
]
function zd() {
  return S.jsxs('div', {
    className: 'grid grid-cols-12 w-screen h-screen',
    children: [
      S.jsxs('div', {
        className:
          'col-span-3 flex lg:justify-start flex-col lg:w-32 w-14 lg:ml-12 ml-auto mr-2 ',
        children: [
          S.jsx('div', {
            className:
              'h-12 w-12 flex items-center justify-center lg:-ml-3 ml-1 rounded-full hover:bg-gray-900',
            children: S.jsx(Aa, { className: 'text-[28px]' }),
          }),
          Pd.map((h, x) =>
            S.jsxs(
              'div',
              {
                className:
                  'text-xl flex mt-3 lg:ml-0 cursor-pointer rounded-full hover:bg-gray-900 w-fit px-4 py-2',
                children: [
                  S.jsx('span', { className: 'text-[26px]', children: h.icon }),
                  S.jsx('span', {
                    className: 'ml-4 font-semibold text-lg lg:block hidden',
                    children: h.name,
                  }),
                ],
              },
              x
            )
          ),
          S.jsx('div', {
            className:
              'px-20 py-2 rounded-full mt-4 bg-white text-black w-fit lg:block hidden',
            children: S.jsx('span', {
              className: 'text-md font-semibold',
              children: 'Post',
            }),
          }),
        ],
      }),
      S.jsx('div', {
        className:
          'xl:col-span-6 col-span-9 border-l-[.2px] border-r-[.2px] border-slate-600',
        children: S.jsx(xd, {}),
      }),
      S.jsx('div', {
        className: 'xl:col-span-3 col-span-1 mr-12 hidden xl:block',
        children: S.jsx(Ed, {}),
      }),
    ],
  })
}
function Ld() {
  return S.jsx(S.Fragment, { children: S.jsx(zd, {}) })
}
Zf.createRoot(document.getElementById('root')).render(
  S.jsx(Va.StrictMode, { children: S.jsx(Ld, {}) })
)
