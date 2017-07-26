'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

var _defaultConfig = require('./defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformHtml = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(html) {
    var _config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var config, $;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = (0, _lodash2.default)(_config, _defaultConfig2.default);
            $ = _cheerio2.default.load(html);
            _context.next = 4;
            return (0, _transform2.default)($, config);

          case 4:
            return _context.abrupt('return', $.html());

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function transformHtml(_x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = transformHtml;
//# sourceMappingURL=index.js.map