// @flow
import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export const CURSOR_BLINKING_ANIMATION_SPEED = 500;
export const CURSOR_SYMBOL = '|';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#00000000',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecorationLine: 'none',
    // Fix for https://github.com/retyui/react-native-confirmation-code-field/issues/93
    ...(Platform.OS !== 'android' ? { textTransform: 'none' } : {}),
  },
});

export default class Cursor extends Component<
  {||},
  {| cursorSymbol: string |},
> {
  timeout: IntervalID;

  state = {
    cursorSymbol: CURSOR_SYMBOL,
  };

  componentDidMount() {
    // Simulate cursor blink animation
    this.timeout = setInterval(
      () =>
        this.setState(({ cursorSymbol }) => ({
          cursorSymbol: cursorSymbol ? '' : CURSOR_SYMBOL,
        })),
      CURSOR_BLINKING_ANIMATION_SPEED,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return <Text style={styles.root}>{this.state.cursorSymbol}</Text>;
  }
}
