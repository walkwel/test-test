'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

var _mobx = require('mobx');

var _singlePlayerTwoWindowsConfig = require('../defaultConfigs/singlePlayerTwoWindowsConfig.json');

var _singlePlayerTwoWindowsConfig2 = _interopRequireDefault(_singlePlayerTwoWindowsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var singlePlayerTwoWindowsStore = (_class = function () {
  function singlePlayerTwoWindowsStore() {
    _classCallCheck(this, singlePlayerTwoWindowsStore);

    _initDefineProp(this, 'time', _descriptor, this);

    _initDefineProp(this, 'position', _descriptor2, this);

    _initDefineProp(this, 'direction', _descriptor3, this);

    _initDefineProp(this, 'collectives', _descriptor4, this);

    _initDefineProp(this, 'timeStampData', _descriptor5, this);

    _initDefineProp(this, 'score', _descriptor6, this);

    _initDefineProp(this, 'mode', _descriptor7, this);

    _initDefineProp(this, 'func', _descriptor8, this);

    _initDefineProp(this, 'funcNeedUpdate', _descriptor9, this);
  }

  _createClass(singlePlayerTwoWindowsStore, [{
    key: 'moveCharacter',
    value: function moveCharacter(gameId) {
      switch (this.direction[gameId]) {
        case 'up':
          this.position[gameId].y -= _singlePlayerTwoWindowsConfig2.default['game' + (gameId + 1)]['character'].speed;
          break;
        case 'down':
          this.position[gameId].y += _singlePlayerTwoWindowsConfig2.default['game' + (gameId + 1)]['character'].speed;
          break;
        case 'left':
          this.position[gameId].x -= _singlePlayerTwoWindowsConfig2.default['game' + (gameId + 1)]['character'].speed;
          break;
        case 'right':
          this.position[gameId].x += _singlePlayerTwoWindowsConfig2.default['game' + (gameId + 1)]['character'].speed;
          break;
        default:
          break;
      }
    }
  }, {
    key: 'restartCharacter',
    value: function restartCharacter(gameId) {
      this.position[gameId] = _singlePlayerTwoWindowsConfig2.default['game' + (gameId + 1)]['character'].startingPoint;
      this.direction = ['left', 'up'];
      this.time = _singlePlayerTwoWindowsConfig2.default.time;
      this.score = [0, 0];
    }
  }, {
    key: 'changeDirection',
    value: function changeDirection(gameId, direction) {
      this.direction[gameId] = direction;
    }
  }, {
    key: 'generateCollectives',
    value: function generateCollectives(gameId, min, max, size) {
      var gameWidth = document.getElementById('game' + gameId).childNodes[0].childNodes[0].offsetWidth;
      var gameHeight = document.getElementById('game' + gameId).childNodes[0].childNodes[0].offsetHeight;
      if (this.collectives[gameId].length > 0) return;
      var stonesQuant = Math.floor(Math.random() * (max - min + 1) + min);
      for (var i = 0; i < stonesQuant; i++) {
        var stoneObj = { x: 0, y: 0 };
        stoneObj.x = Math.floor(Math.random() * (gameWidth / size - 0) + 0) * size;
        stoneObj.y = Math.floor(Math.random() * (gameHeight / size - 0) + 0) * size;
        stoneObj.size = size;
        this.collectives[gameId].push(stoneObj);
      }
    }
  }, {
    key: 'removeCollective',
    value: function removeCollective(gameId, colId) {
      this.collectives[gameId].splice(colId, 1);
      this.score[gameId]++;
    }
  }, {
    key: 'updateCustomCode',
    value: function updateCustomCode(newText) {
      this.func = newText;
    }
  }]);

  return singlePlayerTwoWindowsStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'time', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return _singlePlayerTwoWindowsConfig2.default.time;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'position', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [_singlePlayerTwoWindowsConfig2.default.game1.character.startingPoint, _singlePlayerTwoWindowsConfig2.default.game2.character.startingPoint];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'direction', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return ['left', 'up'];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'collectives', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [[], []];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'timeStampData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return Date.now();
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'score', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [0, 0];
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'mode', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 'play';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'func', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'funcNeedUpdate', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
exports.default = new singlePlayerTwoWindowsStore();