# react-native-confirmation-code-field

[![npm](https://img.shields.io/npm/v/react-native-confirmation-code-field.svg)](https://www.npmjs.com/package/react-native-confirmation-code-field)
[![npm downloads](https://img.shields.io/npm/dm/react-native-confirmation-code-field.svg)](https://www.npmtrends.com/react-native-confirmation-code-field)
[![Travis](https://img.shields.io/travis/retyui/react-native-confirmation-code-field.svg?label=unix)](https://travis-ci.org/retyui/react-native-confirmation-code-field)

A react-native confirmation code field compatible with iOS, Android and Web Platforms (based on [this](https://github.com/ttdung11t2/react-native-confirmation-code-input) project [Migration Guide](docs/migration.md))

### Component features:

- 🔮 Simple. Easy to use;
- 🍎 Support "fast paste SMS-code" on iOS. And custom code paste for Android;
- 🚮 Clearing part of the code by clicking on the cell;
- ⚡ `blur()` and `focus()` methods;
- 🛠 Extendable and hackable;
- 🤓 Readable [changelog](CHANGELOG.md).

## Links

- [API documentation](docs/API.md)
- [Examples](examples/src/realDemo)
- Live demos [iOS / Android](https://snack.expo.io/@retyui/demo-for-react-native-confirmation-code-field), [react-native-web](https://react-native-confirmation-code-field.netlify.com/)

## Screenshots

<a href="https://github.com/retyui/react-native-confirmation-code-field/tree/master/examples/src/realDemo/AnimatedExample"><img width="250" src="https://raw.githubusercontent.com/retyui/react-native-confirmation-code-field/master/docs/img/animated.gif"/></a><a href="https://github.com/retyui/react-native-confirmation-code-field/tree/master/examples/src/realDemo/RedExample"><img width="250" src="https://raw.githubusercontent.com/retyui/react-native-confirmation-code-field/master/docs/img/red.gif"/></a><a href="https://github.com/retyui/react-native-confirmation-code-field/tree/master/examples/src/realDemo/DarkExample"><img width="250" src="https://raw.githubusercontent.com/retyui/react-native-confirmation-code-field/master/docs/img/dark.gif"/></a>

## Install

```sh
yarn add react-native-confirmation-code-field
# or
npm install react-native-confirmation-code-field
```

## Usage

```js
import React, { useCallback } from 'react';
import CodeInput from 'react-native-confirmation-code-field';

export const App = () => {
  const handlerOnFulfill = useCallback(code => console.log(code), []);

  return <CodeInput onFulfill={handlerOnFulfill} />;
};
```

## How paste or clear code

Paste code can helpful for Android platform when you can read SMS.

```js
import React, { Component, createRef } from 'react';
import CodeInput from 'react-native-confirmation-code-field';

class App extends Component {
  handlerOnFulfill = code => {
    if (isValidCode(code)) {
      console.log(code);
    } else {
      this.clearCode();
    }
  };

  field = createRef();

  clearCode() {
    const { current } = this.field;

    if (current) {
      current.clear();
    }
  }

  pasteCode() {
    const { current } = this.field;

    if (current) {
      current.handlerOnTextChange(value);
    }
  }

  render() {
    return <CodeInput ref={this.field} onFulfill={this.handlerOnFulfill} />;
  }
}
```

## Analogs

- [react-native-keycode](https://github.com/leanmotherfuckers/react-native-keycode)
- [react-native-otp-input](https://github.com/Twotalltotems/react-native-otp-input)
- [react-native-otp-inputs](https://github.com/dsznajder/react-native-otp-inputs)
- [react-native-otp](https://github.com/thuansb/react-native-otp)
- [react-native-pin-code](https://github.com/gkueny/react-native-pin-code)

## How it works?

This component consists of:

1. Container `<View {...containerProps}/>`;
2. Render the "Cells" for the text code inside the container ("Cells" is `<TextInput {...cellProps} />`);
3. And over this render invisible `<TextInput {...inputProps}/>`;
4. "Cursor" inside cell is [simulated component](src/components/Cursor.js)
