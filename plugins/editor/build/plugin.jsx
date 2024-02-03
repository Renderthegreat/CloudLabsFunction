"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * @author renderlabs::cloud
 * @copyright (c) [2024] [RENDERLABS]
 * @license MIT
 *
 * You are required to keep this header intact.
 * You are permitted to use this code.
 */

var twoAuth = false; // WARNING KEEP THIS ENABLED FOR SECURITY

var _require = require("preact"),
  h = _require.h;
var _require2 = require("preact-render-to-string"),
  render = _require2.render;
var r = render;
var fs = require("fs");
var clicks = 0;
var jwt = require("jsonwebtoken");
var styles = "h1 {\n  color: red;\n}";
function main(Server, Content, Host, runtime) {
  var example = Server.create("get", "/editor/login", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
      var html, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            html = new Content("text/html");
            data = h("html", null, h("head", null, h("meta", {
              charset: "UTF-8"
            }), h("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            }), h("title", null, "Login Page")), h("body", null, h("form", {
              id: "loginForm",
              action: "/editor/login/api/"
            }, h("label", {
              "for": "username"
            }, "Username:"), h("input", {
              type: "text",
              id: "username",
              name: "username"
            }, h("br", null)), h("label", {
              "for": "password"
            }, "Password:"), h("input", {
              type: "password",
              id: "password",
              name: "password"
            }, h("br", null)), h("button", {
              type: "submit"
            }, "Login")), h("script", null)), h("style", null, "button{\n              background-color: #4CAF50;\n              border: none;\n              color: white;\n              padding: 15px 32px;\n              text-align: center;\n              text-decoration: none;\n              display: inline-block;\n              font-size: 16px;\n              margin: 4px 2px;\n              cursor: pointer;\n            }\n            textarea{\n                width: 100%;\n                height: 300px;\n                padding: 12px 20px;\n                box-sizing: border-box;\n                border: 2px solid #ccc;\n                border-radius: 4px;\n                background-color: #f8f8f8;\n                font-size: 16px;\n                resize: none;\n            }\n            body{\n                font-family: Arial, Helvetica, sans-serif;\n                background-color: #f1f1f1;\n            }\n            a{\n                text-decoration: none;\n                color: #4CAF50;\n            }\n            li{\n\n            }\n            h1 {\n\n                font-size: 2.5em;\n                margin: 0.67em 0;\n                font: 'Times New Roman', Times, serif;\n            }\n            #fileName {\n                height: 20px;\n                width: 200px;\n            }\n        "));
            html.contents(r(data));
            html.send(req, res);
            return _context.abrupt("return", {
              failSafe: true
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  var loginAPI = Server.create("get", "/editor/login/api/", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
      var creds, users, jwtSecret, i, user, username, password, power, key, html, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fs.promises.readFile(__dirname + "/../userCreds.json", "utf-8");
          case 2:
            creds = _context2.sent;
            creds = JSON.parse(creds);
            users = creds.users;
            _context2.next = 7;
            return fs.promises.readFile(__dirname + "/../jwt.secret", "utf-8");
          case 7:
            jwtSecret = _context2.sent;
            if (!(jwtSecret == "")) {
              _context2.next = 13;
              break;
            }
            jwtSecret = "KEEP-THIS-CODE-A-SECRET-DO-NOT-SHARE-THIS-CODE-WITH-ANYONE-YOU-COULD-GET-A-HACKER-TO-STEAL-YOUR-CREDENTIALS-AND-POSSIBLY-INSTALL-MALWARE-ON-YOUR-COMPUTER";
            for (i = 0; i < 256; i++) {
              jwtSecret += Math.random().toString(36).substr(2, 1);
            }
            _context2.next = 13;
            return fs.promises.writeFile(__dirname + "/../jwt.secret", jwtSecret);
          case 13:
            _context2.t0 = _regeneratorRuntime().keys(users);
          case 14:
            if ((_context2.t1 = _context2.t0()).done) {
              _context2.next = 28;
              break;
            }
            user = _context2.t1.value;
            username = users[user].username;
            password = users[user].password;
            power = users[user].power;
            if (!(username == req.query.username && password == req.query.password)) {
              _context2.next = 26;
              break;
            }
            key = jwt.sign({
              username: username,
              power: power
            }, jwtSecret, {
              expiresIn: "1h"
            });
            html = new Content("text/html");
            data = h("html", null, h("h1", null, "We need to make sure its really you"), h("a", {
              href: "/editor/validate/key?key=".concat(key)
            }, "Validate."), h("script", null, "\n          localStorage.setItem(\"token\",".concat(key, ")\n          ")));
            html.contents(r(data));
            html.send(req, res);
            return _context2.abrupt("return", {
              failSafe: true
            });
          case 26:
            _context2.next = 14;
            break;
          case 28:
            return _context2.abrupt("return", {
              failSafe: true
            });
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  var validate = Server.create("get", "/editor/validate/key", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
      var key, data, allTheGreatThings, host, html, editor;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            key = req.query.key;
            allTheGreatThings = false;
            host = new Host();
            _context3.prev = 3;
            jwt.decode(key);
            _context3.next = 7;
            return fs.promises.readFile(__dirname + "/../rsat.txt", "utf-8");
          case 7:
            if (!_context3.sent) {
              _context3.next = 24;
              break;
            }
            _context3.next = 10;
            return fs.promises.readFile(__dirname + "/../rsat.txt", "utf-8");
          case 10:
            _context3.t1 = _context3.sent;
            _context3.t2 = key.replace("/?key=", "");
            _context3.t0 = _context3.t1 == _context3.t2;
            if (_context3.t0) {
              _context3.next = 15;
              break;
            }
            _context3.t0 = !twoAuth;
          case 15:
            if (!_context3.t0) {
              _context3.next = 20;
              break;
            }
            data = h("html", null, h("h1", null, "Validation complete"), h("h2", null, "editor open at", " ", h("a", {
              href: "../../../../editor/pages/".concat(key, "/")
            }, "LINK")), h("style", null, "button{\n                      background-color: #4CAF50;\n                      border: none;\n                      color: white;\n                      padding: 15px 32px;\n                      text-align: center;\n                      text-decoration: none;\n                      display: inline-block;\n                      font-size: 16px;\n                      margin: 4px 2px;\n                      cursor: pointer;\n                    }\n                    textarea{\n                        width: 100%;\n                        height: 300px;\n                        padding: 12px 20px;\n                        box-sizing: border-box;\n                        border: 2px solid #ccc;\n                        border-radius: 4px;\n                        background-color: #f8f8f8;\n                        font-size: 16px;\n                        resize: none;\n                    }\n                    body{\n                        font-family: Arial, Helvetica, sans-serif;\n                        background-color: #f1f1f1;\n                    }\n                    a{\n                        text-decoration: none;\n                        color: #4CAF50;\n                    }\n                    li{\n\n                    }\n                    h1 {\n\n                        font-size: 2.5em;\n                        margin: 0.67em 0;\n                        font: 'Times New Roman', Times, serif;\n                    }\n                    #fileName {\n                        height: 20px;\n                        width: 200px;\n                    }\n                "));
            allTheGreatThings = true;
            _context3.next = 22;
            break;
          case 20:
            data = h("html", null, " ", h("h1", null, "Add the key ", key, " to /plugins/editor/rsat.txt "), h("a", {
              href: "".concat(req.url)
            }, "refresh"), h("style", null, "button{\n                      background-color: #4CAF50;\n                      border: none;\n                      color: white;\n                      padding: 15px 32px;\n                      text-align: center;\n                      text-decoration: none;\n                      display: inline-block;\n                      font-size: 16px;\n                      margin: 4px 2px;\n                      cursor: pointer;\n                    }\n                    textarea{\n                        width: 100%;\n                        height: 300px;\n                        padding: 12px 20px;\n                        box-sizing: border-box;\n                        border: 2px solid #ccc;\n                        border-radius: 4px;\n                        background-color: #f8f8f8;\n                        font-size: 16px;\n                        resize: none;\n                    }\n                    body{\n                        font-family: Arial, Helvetica, sans-serif;\n                        background-color: #f1f1f1;\n                    }\n                    a{\n                        text-decoration: none;\n                        color: #4CAF50;\n                    }\n                    li{\n\n                    }\n                    h1 {\n\n                        font-size: 2.5em;\n                        margin: 0.67em 0;\n                        font: 'Times New Roman', Times, serif;\n                    }\n                    #fileName {\n                        height: 20px;\n                        width: 200px;\n                    }\n                "));
            runtime.log("\x1b[31m", "key is not rsat key");
          case 22:
            _context3.next = 25;
            break;
          case 24:
            data = h("html", null, " ", h("h1", null, "Add the key ", key, " to /plugins/editor/rsat.txt "), h("a", {
              href: "".concat(req.url)
            }, "refresh"), h("style", null, "button{\n                    background-color: #4CAF50;\n                    border: none;\n                    color: white;\n                    padding: 15px 32px;\n                    text-align: center;\n                    text-decoration: none;\n                    display: inline-block;\n                    font-size: 16px;\n                    margin: 4px 2px;\n                    cursor: pointer;\n                  }\n                  textarea{\n                      width: 100%;\n                      height: 300px;\n                      padding: 12px 20px;\n                      box-sizing: border-box;\n                      border: 2px solid #ccc;\n                      border-radius: 4px;\n                      background-color: #f8f8f8;\n                      font-size: 16px;\n                      resize: none;\n                  }\n                  body{\n                      font-family: Arial, Helvetica, sans-serif;\n                      background-color: #f1f1f1;\n                  }\n                  a{\n                      text-decoration: none;\n                      color: #4CAF50;\n                  }\n                  li{\n\n                  }\n                  h1 {\n\n                      font-size: 2.5em;\n                      margin: 0.67em 0;\n                      font: 'Times New Roman', Times, serif;\n                  }\n                  #fileName {\n                      height: 20px;\n                      width: 200px;\n                  }\n              "));
          case 25:
            _context3.next = 30;
            break;
          case 27:
            _context3.prev = 27;
            _context3.t3 = _context3["catch"](3);
            data = h("html", null, " ", h("h1", null, "Add the key ", key, " to /plugins/editor/rsat.txt "), h("a", {
              href: "".concat(req.url)
            }, "retry"), h("style", null, "button{\n                  background-color: #4CAF50;\n                  border: none;\n                  color: white;\n                  padding: 15px 32px;\n                  text-align: center;\n                  text-decoration: none;\n                  display: inline-block;\n                  font-size: 16px;\n                  margin: 4px 2px;\n                  cursor: pointer;\n                }\n                textarea{\n                    width: 100%;\n                    height: 300px;\n                    padding: 12px 20px;\n                    box-sizing: border-box;\n                    border: 2px solid #ccc;\n                    border-radius: 4px;\n                    background-color: #f8f8f8;\n                    font-size: 16px;\n                    resize: none;\n                }\n                body{\n                    font-family: Arial, Helvetica, sans-serif;\n                    background-color: #f1f1f1;\n                }\n                a{\n                    text-decoration: none;\n                    color: #4CAF50;\n                }\n                li{\n\n                }\n                h1 {\n\n                    font-size: 2.5em;\n                    margin: 0.67em 0;\n                    font: 'Times New Roman', Times, serif;\n                }\n                #fileName {\n                    height: 20px;\n                    width: 200px;\n                }\n            "));
          case 30:
            html = new Content("text/html");
            html.contents(r(data));
            html.send(req, res);
            editor = require("./pages/editor.jsx");
            editor.main(key, Server, Content, Host, runtime);
            return _context3.abrupt("return", {
              failSafe: true
            });
          case 36:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 27]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
}
module.exports.main = main;