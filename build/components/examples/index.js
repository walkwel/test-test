'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gemCollectorBotvplayer = require('./gemCollector-botvplayer');

Object.defineProperty(exports, 'GemCollectorBotVSPlayer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gemCollectorBotvplayer).default;
  }
});

var _gemCollectorPlayervplayer = require('./gemCollector-playervplayer');

Object.defineProperty(exports, 'GemCollectorPlayerVSPlayer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gemCollectorPlayervplayer).default;
  }
});

var _gemCollectorBotvbot = require('./gemCollector-botvbot');

Object.defineProperty(exports, 'GemCollectorBotVSBot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gemCollectorBotvbot).default;
  }
});

var _gemCollectorBotvcustom = require('./gemCollector-botvcustom');

Object.defineProperty(exports, 'GemCollectorBotVSCustom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gemCollectorBotvcustom).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }