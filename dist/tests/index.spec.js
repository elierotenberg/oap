'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    before = _global.before,
    after = _global.after,
    it = _global.it;

var readFile = _util2.default.promisify(_fs2.default.readFile);

var TEST_PORT = 8080;

describe('transformHtml', function () {
  var app = null;
  var server = null;
  before(function (done) {
    app = (0, _express2.default)().use(_express2.default.static('static'));
    server = app.listen(TEST_PORT, done);
  });

  after(function () {
    return server.close();
  });

  it('should transform basic HTML file', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var config, originalHtml, transformedHtml;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = {
              fetch: {
                baseURL: 'http://localhost:8080/static/'
              }
            };
            _context.next = 3;
            return readFile(_path2.default.join(__dirname, 'static', 'test.html'), 'utf-8');

          case 3:
            originalHtml = _context.sent;
            _context.next = 6;
            return (0, _2.default)(originalHtml, config);

          case 6:
            transformedHtml = _context.sent;

            console.log({ transformedHtml: transformedHtml });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});
//# sourceMappingURL=index.spec.js.map