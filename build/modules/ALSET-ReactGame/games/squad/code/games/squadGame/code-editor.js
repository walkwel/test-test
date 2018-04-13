'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _squadGame = require('../../store/squadGame');

var _squadGame2 = _interopRequireDefault(_squadGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeEditor = function (_Component) {
    _inherits(CodeEditor, _Component);

    function CodeEditor(props) {
        _classCallCheck(this, CodeEditor);

        var _this = _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).call(this, props));

        _this.updateCustomCode = _this.updateCustomCode.bind(_this);
        return _this;
    }

    _createClass(CodeEditor, [{
        key: 'updateCustomCode',
        value: function updateCustomCode() {
            _squadGame2.default.func = document.getElementById("codeEditor").value;
            //console.log(Store.func);
            //Store.funcNeedUpdate = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('textarea', { id: 'codeEditor', style: { width: "100%", height: "410px" }, defaultValue: 'var player = world.player;\nvar closestGem = false;\nworld.collectives.forEach(stone => {\n    if(closestGem==false)\n        closestGem = stone;\n    else if(\n        Math.sqrt(Math.pow((player.x-closestGem.x),2)+Math.pow((player.y-closestGem.y),2))>\n        Math.sqrt(Math.pow((player.x-stone.x),2)+Math.pow((player.y-stone.y),2))\n    ){\n        closestGem = stone;\n    }\n});\nif(closestGem){\n    if(closestGem.x-player.x>64){\n        var direction = {left:false, right:true, up:false, down:false};\n    }   \n    else if(closestGem.x-player.x<0){\n        var direction = {left:true, right:false, up:false, down:false};\n    }\n    else if(closestGem.y-player.y>64){\n        var direction = {left:false, right:false, up:false, down:true};\n    }\n    else if(closestGem.y-player.y<0){\n        var direction = {left:false, right:false, up:true, down:false};\n    }\n    return direction;\n}' }),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.updateCustomCode();
                        } },
                    'Update code'
                )
            );
        }
    }]);

    return CodeEditor;
}(_react.Component);

exports.default = CodeEditor;