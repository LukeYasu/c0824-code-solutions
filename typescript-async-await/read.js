'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.read = void 0;
/**
 * Simulates a network call by delaying for one second and returning a message.
 * If `doReject` is truthy, it will reject the Promise, otherwise it will resolve.
 * Uses `setTimeout` to mimic a slow network connection.
 */
function read(url, doResolve) {
  if (doResolve === void 0) {
    doResolve = true;
  }
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      return doResolve
        ? resolve('read '.concat(url))
        : reject(new Error('rejected '.concat(url)));
    }, 1000);
  });
}
exports.read = read;
