'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGameKit = require('react-game-kit');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matterJs = require('matter-js');

var _matterJs2 = _interopRequireDefault(_matterJs);

var _gem = require('../assets/gem.png');

var _gem2 = _interopRequireDefault(_gem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stone = (_temp = _class = function (_Component) {
  _inherits(Stone, _Component);

  function Stone(props) {
    _classCallCheck(this, Stone);

    var _this = _possibleConstructorReturn(this, (Stone.__proto__ || Object.getPrototypeOf(Stone)).call(this, props));

    _this.update = _this.update.bind(_this);
    return _this;
  }

  _createClass(Stone, [{
    key: 'update',
    value: function update() {
      var player1 = document.getElementById('character-0-' + this.props.gameId).childNodes[0];
      var player2 = document.getElementById('character-1-' + this.props.gameId).childNodes[0];
      var gem = document.getElementById('stoneGem-' + this.props.index + '-' + this.props.gameId);
      if (player1 && player2 && gem) {
        if (this.props.store.rect2Rect(gem, player1)) {
          this.props.onGameEvent({
            type: 'score_update',
            scores: [this.props.store.score[0] + 1, this.props.store.score[1]]
          });
          this.scores = [this.props.store.score[0], this.props.store.score[1]];
          this.props.store.removeHittenGem(this.props.index, 0);
        } else if (this.props.store.rect2Rect(gem, player2)) {
          this.props.onGameEvent({
            type: 'score_update',
            scores: [this.props.store.score[0], this.props.store.score[1] + 1]
          });
          this.props.store.removeHittenGem(this.props.index, 1);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _matterJs2.default.Events.on(this.context.engine, 'afterUpdate', this.update);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _matterJs2.default.Events.off(this.context.engine, 'afterUpdate', this.update);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          id: 'stoneGem-' + this.props.index + '-' + this.props.gameId,
          'data-id': this.props.index,
          style: {
            position: 'absolute',
            transform: 'translate(' + this.props.store.stonesData[this.props.index].x * this.context.scale + 'px,\n            ' + this.props.store.stonesData[this.props.index].y * this.context.scale + 'px) translateZ(0)',
            transformOrigin: 'top left',
            width: 64 * this.context.scale + 'px',
            height: 64 * this.context.scale + 'px'
          }
        },
        _react2.default.createElement(_reactGameKit.TileMap, { className: 'stone-tilemap-style', src: _gem2.default, rows: 1, columns: 1, tileSize: 64, layers: [[1]] })
      );
    }
  }]);

  return Stone;
}(_react.Component), _class.propTypes = {
  store: _propTypes2.default.object,
  index: _propTypes2.default.number
}, _class.contextTypes = {
  engine: _propTypes2.default.object,
  scale: _propTypes2.default.number
}, _temp);
exports.default = Stone;