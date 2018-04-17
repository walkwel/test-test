'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGameKit = require('react-game-kit');

var _matterJs = require('matter-js');

var _matterJs2 = _interopRequireDefault(_matterJs);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Character = (_temp = _class = function (_Component) {
  _inherits(Character, _Component);

  function Character(props, context) {
    _classCallCheck(this, Character);

    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, props));

    _this.update = function () {
      if (_this.props.store.mode === 'restart') {
        _this.props.store.characterPosition = [{ x: 100, y: 100 }, { x: 200, y: 200 }];
        _this.props.store.characterState = [11, 10];
        _this.body1.body.position = _this.props.store.characterPosition[_this.props.index];
        _this.props.store.stonesData = [];
        return;
      }
      var x = _this.props.store.characterPosition[_this.props.index].x;
      var y = _this.props.store.characterPosition[_this.props.index].y;
      if (_this.props.keys && _this.props.keys.status !== false) {
        var newState = void 0;
        if (_this.props.keys.isDown(_this.props.keys.RIGHT)) newState = 11;else if (_this.props.keys.isDown(_this.props.keys.LEFT)) newState = 9;else if (_this.props.keys.isDown(_this.props.keys.UP)) newState = 8;else if (_this.props.keys.isDown(_this.props.keys.DOWN)) newState = 10;
        if (newState) _this.props.store.characterState[_this.props.index] = newState;
      }
      _this.setState(function (prevState, props) {
        if (prevState.characterState !== _this.props.store.characterState[_this.props.index]) return {
          characterState: _this.props.store.characterState[_this.props.index]
        };else return { characterState: prevState.characterState };
      });
      if (_this.props.store.mode === 'pause') _matterJs2.default.Body.setVelocity(_this.body1.body, { x: 0, y: 0 });else if (_this.state.characterState === 8) _this.moveUp();else if (_this.state.characterState === 9) _this.moveLeft();else if (_this.state.characterState === 10) _this.moveDown();else if (_this.state.characterState === 11) _this.moveRight();
    };

    _this.x = 0;
    _this.y = 0;
    _this.controlChractors = _this.controlChractors.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.moveLeft = _this.moveLeft.bind(_this);
    _this.moveRight = _this.moveRight.bind(_this);
    _this.moveUp = _this.moveUp.bind(_this);
    _this.moveDown = _this.moveDown.bind(_this);
    //this.changeCharacterState = this.changeCharacterState.bind(this);
    _this.state = {
      characterState: 11,
      ticksPerFrame: 4
    };
    if (_this.props.keys) _this.charPhysicSize = 64;else _this.charPhysicSize = 12;
    return _this;
  }

  _createClass(Character, [{
    key: 'controlChractors',
    value: function controlChractors() {
      this.x = this.props.store.characterPosition[this.props.index].x;
      this.y = this.props.store.characterPosition[this.props.index].y;
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      var position = this.props.store.characterPosition[this.props.index];
      if (this.props.store.checkIfObjectInsideTheScreen(this.props.index, 'right', this.props.mode)) _matterJs2.default.Body.setVelocity(this.body1.body, {
        x: this.props.store.config.speed,
        y: 0
      });else _matterJs2.default.Body.setVelocity(this.body1.body, { x: 0, y: 0 });
      this.props.store.characterPosition[this.props.index] = this.body1.body.position;
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      var position = this.props.store.characterPosition[this.props.index];
      if (this.props.store.checkIfObjectInsideTheScreen(this.props.index, 'left', this.props.mode)) _matterJs2.default.Body.setVelocity(this.body1.body, {
        x: -this.props.store.config.speed,
        y: 0
      });else _matterJs2.default.Body.setVelocity(this.body1.body, { x: 0, y: 0 });
      this.props.store.characterPosition[this.props.index] = this.body1.body.position;
    }
  }, {
    key: 'moveUp',
    value: function moveUp() {
      var position = this.props.store.characterPosition[this.props.index];
      if (this.props.store.checkIfObjectInsideTheScreen(this.props.index, 'top', this.props.mode)) _matterJs2.default.Body.setVelocity(this.body1.body, {
        x: 0,
        y: -this.props.store.config.speed
      });else _matterJs2.default.Body.setVelocity(this.body1.body, { x: 0, y: 0 });
      this.props.store.characterPosition[this.props.index] = this.body1.body.position;
    }
  }, {
    key: 'moveDown',
    value: function moveDown() {
      var position = this.props.store.characterPosition[this.props.index];
      if (this.props.store.checkIfObjectInsideTheScreen(this.props.index, 'bottom', this.props.mode)) _matterJs2.default.Body.setVelocity(this.body1.body, {
        x: 0,
        y: this.props.store.config.speed
      });else _matterJs2.default.Body.setVelocity(this.body1.body, { x: 0, y: 0 });
      this.props.store.characterPosition[this.props.index] = this.body1.body.position;
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.controlChractors();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.controlChractors();
      return _react2.default.createElement(
        'div',
        {
          id: 'character-' + this.props.index + '-' + this.props.mode,
          style: {
            position: 'absolute',
            transform: 'translate(' + this.x * this.context.scale + 'px, ' + this.y * this.context.scale + 'px) translateZ(0)',
            transformOrigin: 'top left'
          }
        },
        _react2.default.createElement(
          _reactGameKit.Body,
          {
            args: [this.props.store.characterPosition[this.props.index].x, this.props.store.characterPosition[this.props.index].y, this.charPhysicSize, this.charPhysicSize],
            inertia: Infinity,
            customId: this.props.index,
            label: 'character',
            ref: function ref(b) {
              _this2.body1 = b;
            }
          },
          _react2.default.createElement(_reactGameKit.Sprite, {
            repeat: true,
            tileWidth: 64,
            tileHeight: 64,
            src: this.props.imgSrc,
            scale: this.context.scale * 2,
            ticksPerFrame: this.state.ticksPerFrame,
            state: this.state.characterState,
            steps: [6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 5, 5, 5, 5, 12, 12, 12, 12, 5]
          })
        )
      );
    }
  }]);

  return Character;
}(_react.Component), _class.propTypes = {
  store: _propTypes2.default.object,
  imgSrc: _propTypes2.default.string,
  index: _propTypes2.default.number,
  keys: _propTypes2.default.object
}, _class.contextTypes = {
  engine: _propTypes2.default.object,
  scale: _propTypes2.default.number
}, _temp);
exports.default = (0, _mobxReact.observer)(Character);