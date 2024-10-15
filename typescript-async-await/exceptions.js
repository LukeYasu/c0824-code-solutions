'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
var read_js_1 = require('./read.js');
// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
var startTime = Date.now();
var elapsed = function () {
  return ''.concat(Math.round((Date.now() - startTime) / 1000), 's -');
};
function throwOnce() {
  return __awaiter(this, void 0, void 0, function () {
    var msg, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4 /*yield*/, (0, read_js_1.read)('foo', false)];
        case 1:
          msg = _a.sent();
          console.log(elapsed(), 'throwOnce:', msg);
          return [3 /*break*/, 3];
        case 2:
          error_1 = _a.sent();
          console.log(elapsed(), 'throwOnce Error:', error_1);
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
}
function throwSeveral() {
  return __awaiter(this, void 0, void 0, function () {
    var msg, msg2, msg3, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 4, , 5]);
          return [4 /*yield*/, (0, read_js_1.read)('foo1', true)];
        case 1:
          msg = _a.sent();
          console.log(elapsed(), 'throwSeveral1:', msg);
          return [4 /*yield*/, (0, read_js_1.read)('foo2', true)];
        case 2:
          msg2 = _a.sent();
          console.log(elapsed(), 'throwSeveral1:', msg2);
          return [4 /*yield*/, (0, read_js_1.read)('foo3', true)];
        case 3:
          msg3 = _a.sent();
          console.log(elapsed(), 'throwSeveral3:', msg3);
          return [3 /*break*/, 5];
        case 4:
          error_2 = _a.sent();
          console.log(elapsed(), 'throwSeveral Error:', error_2);
          return [2 /*return*/];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
function throwChained() {
  return __awaiter(this, void 0, void 0, function () {
    var msg1, error_3, msg2, error_4, msg3, error_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4 /*yield*/, (0, read_js_1.read)('foo-chain', true)];
        case 1:
          msg1 = _a.sent();
          console.log(elapsed(), 'throwChained1:', msg1);
          return [3 /*break*/, 3];
        case 2:
          error_3 = _a.sent();
          console.log(elapsed(), 'throwChained Error:', error_3);
          return [2 /*return*/];
        case 3:
          _a.trys.push([3, 5, , 6]);
          return [4 /*yield*/, (0, read_js_1.read)('foo-chain', false)];
        case 4:
          msg2 = _a.sent();
          console.log(elapsed(), 'throwChained1:', msg2);
          return [3 /*break*/, 6];
        case 5:
          error_4 = _a.sent();
          console.log(elapsed(), 'throwChained Error:', error_4);
          return [2 /*return*/];
        case 6:
          _a.trys.push([6, 8, , 9]);
          return [4 /*yield*/, (0, read_js_1.read)('foo-chain', false)];
        case 7:
          msg3 = _a.sent();
          console.log(elapsed(), 'throwChained1:', msg3);
          return [3 /*break*/, 9];
        case 8:
          error_5 = _a.sent();
          console.log(elapsed(), 'throwChained Error:', error_5);
          return [2 /*return*/];
        case 9:
          return [2 /*return*/];
      }
    });
  });
}
throwOnce()
  .then(function () {
    return throwSeveral();
  })
  .then(function () {
    return throwChained();
  });
try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'thrown Error:', error);
}
