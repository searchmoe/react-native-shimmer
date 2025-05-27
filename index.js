import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

export default class Shimmer extends Component {
  static defaultProps = {
    animating: true,
    animationOpacity: 1,
    duration: 1000,
    opacity: 0.5,
    tilt: 0,
    pauseDuration: 400,
    beginFadeDuration: 0,
    endFadeDuration: 0,
  };

  render() {
    const { direction, opacity, ...props } = this.props;
    return (
      <RNShimmeringView
        shimmeringOpacity={opacity}
        shimmeringDirection={direction}
        {...props}
      />
    );
  }
}

const RNShimmeringView = requireNativeComponent('RNShimmeringView', Shimmer, {
  nativeOnly: {
    shimmeringDirection: true,
    shimmeringOpacity: true,
  },
});
