'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      padding: '0px 10px'
    },
    paper: {
      textAlign: 'center',
      padding: '40px 40px',
      cursor: 'pointer'
    },
    control: {
      padding: theme.spacing.unit * 2
    }
  };
};

var SelectGame = function (_Component) {
  _inherits(SelectGame, _Component);

  function SelectGame() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectGame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectGame.__proto__ || Object.getPrototypeOf(SelectGame)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      spacing: '16'
    }, _this.handleChange = function (key) {
      return function (event, value) {
        _this.setState(_defineProperty({}, key, value));
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectGame, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          allGamesConfig = _props.allGamesConfig;
      var spacing = this.state.spacing;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'display1' },
          'Select Game'
        ),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, className: classes.root },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 12 },
            _react2.default.createElement(
              _Grid2.default,
              { container: true, className: classes.demo, justify: 'center', spacing: Number(spacing) },
              allGamesConfig.map(function (game) {
                return _react2.default.createElement(
                  _Grid2.default,
                  { key: game.id, item: true, onClick: function onClick() {
                      return _this2.props.nextPage('selectedGameId', game.id);
                    } },
                  _react2.default.createElement(
                    _Paper2.default,
                    { className: classes.paper },
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'headline', component: 'h3' },
                      game.name
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return SelectGame;
}(_react.Component);

SelectGame.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(SelectGame);