'use strict';

exports.__esModule = true;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _uglifyJs = require('uglify-js');

var _uglifyJs2 = _interopRequireDefault(_uglifyJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toBase64 = function toBase64(data, encoding) {
  return Buffer.from(data, encoding).toString('base64');
};

var inlineScript = function inlineScript($, fetch, config) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(el) {
      var src, contents, _UglifyJS$minify, code;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              src = $(el).attr(src);

              if (!(!src || !config.inlineResource(el))) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              _context.next = 5;
              return fetch(src, { encoding: 'utf8' });

            case 5:
              contents = _context.sent;
              _UglifyJS$minify = _uglifyJs2.default.minify(contents), code = _UglifyJS$minify.code;

              $(el).attr('src', 'data:text/javascript;charset=utf-8;base64,' + toBase64(code, 'utf8'));
              $(el).attr('charset', 'utf-8');

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var transform = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2($, config) {
    var fetcher, fetch, scripts;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fetcher = _axios2.default.create(config.fetch);
            fetch = fetcher.get.bind(fetcher);
            scripts = $('script[src]').toArray().map(inlineScript($, fetch, config));
            _context2.next = 5;
            return _promise2.default.all([].concat(scripts));

          case 5:
            return _context2.abrupt('return', $);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function transform(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = transform;
//# sourceMappingURL=transform.js.map