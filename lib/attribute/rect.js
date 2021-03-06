"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _path = _interopRequireDefault(require("./path"));

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  var x = attr.x,
      y = attr.y,
      width = attr.width,
      height = attr.height;
  return "M".concat(x, " ").concat(y, "L").concat(x + width, " ").concat(y, "L").concat(x + width, " ").concat(y + height, "L").concat(x, " ").concat(y + height, "Z");
}

var Rect =
/*#__PURE__*/
function (_Path) {
  (0, _inherits2.default)(Rect, _Path);

  function Rect(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Rect);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Rect).call(this, subject));

    _this[setDefault]({
      width: 0,
      height: 0
      /* size */

    });

    _this[declareAlias]('size');

    return _this;
  } // readonly


  (0, _createClass2.default)(Rect, [{
    key: "d",
    get: function get() {
      return this[getAttribute]('d');
    },
    set: function set(value) {} // eslint-disable-line no-empty-function

  }, {
    key: "width",
    get: function get() {
      return this[getAttribute]('width');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('width', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('height', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "size",
    get: function get() {
      return [this.width, this.height];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = [value, value];
      this.width = value[0];
      this.height = value[1];
    }
  }]);
  return Rect;
}(_path.default);

exports.default = Rect;