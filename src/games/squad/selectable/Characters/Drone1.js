import React, { Component } from 'react';
import Sprite from './Sprite';
import { observer } from 'mobx-react';
import Image from '../../assets/characters/drone1.png';

@observer
export default class Drone1 extends Component {
  getAnimationState() {
    switch (this.props.direction) {
      case 'up':
        this.animState = 0;
        break;
      case 'down':
        this.animState = 2;
        break;
      case 'left':
        this.animState = 3;
        break;
      case 'right':
        this.animState = 1;
        break;
      default:
        this.animState = 1;
        break;
    }
  }
  getWrapperStyles() {
    this.getAnimationState();
    var targetX = this.props.position.x;
    var targetY = this.props.position.y;
    return {
      position: 'absolute',
      transform: `translate(${targetX}px, ${targetY}px)`,
      transformOrigin: 'left top',
      width: '64px',
      height: '64px',
    };
  }
  render() {
    return (
      <div id={'character'} style={this.getWrapperStyles()}>
        <Sprite
          repeat={true}
          tileWidth={224}
          tileHeight={224}
          src={Image}
          ticksPerFrame={4}
          state={this.animState}
          scale={0.4}
          steps={[0, 0, 0, 0]}
        />
      </div>
    );
  }
}
