// @flow
import React, { Component, type ElementConfig } from 'react';
import { Text } from 'react-native';

type TextProp = ElementConfig<typeof Text>;

type Props = {|
  ...$Exact<$Diff<TextProp, { children: any }>>,
  delay: number,
  mask: string,
  symbol: string,
  isLast: boolean,
|};

type State = {|
  showSymbol: boolean,
|};

class MaskSymbol extends Component<Props, State> {
  timeout: TimeoutID;

  state = {
    showSymbol: true,
  };

  static getDerivedStateFromProps(props: Props) {
    if (!props.isLast) {
      return { showSymbol: false };
    }

    return null;
  }

  componentDidMount() {
    this.timeout = setTimeout(
      () => this.setState({ showSymbol: false }),
      this.props.delay,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { isLast, delay, mask, symbol, ...props } = this.props;
    const { showSymbol } = this.state;

    return <Text {...props}>{showSymbol ? symbol : mask}</Text>;
  }
}

export default MaskSymbol;
