# Stylord

[![npm (scoped)](https://img.shields.io/npm/v/stylord.svg)](https://www.npmjs.com/package/stylord)
[![Travis](https://img.shields.io/travis/thiamsantos/stylord.svg)](https://travis-ci.org/thiamsantos/stylord)
[![Coveralls](https://img.shields.io/coveralls/thiamsantos/stylord.svg)](https://coveralls.io/github/thiamsantos/stylord?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Javascript styles made easy.

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [Support](#support)
-   [API](#api)
-   [Contributing](#contributing)
-   [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save-dev stylord
```

## Usage

```jsx
import {createStyles} from 'stylord'
import React, {Component} from 'react'

const style = createStyles({
  app: {
    color: 'blue',
    fontSize: '20px'
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

## Support

[![Build Status](https://saucelabs.com/browser-matrix/stylord.svg)](https://saucelabs.com/u/stylord)

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### createStyles

Create a stylesheet and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS rules to be rendered.

**Examples**

```javascript
// returns {modal: 'modal_hgdfgf', button: 'button_guyhg'}
createStyles({
  modal: {
    width: '100%'
  },
  button: {
    borderRadius: '2px'
  }
})
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the class names of the css modules created.

### createKeyframes

Create a keyframe animation and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS keyframe to be create.

**Examples**

```javascript
// returns {fade: 'fade_hgdfgf'}
stylord({
  fade: {
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    }
  }
})
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the class names of the keyframes created.

### createFontFace

Create a font-face and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS font-face rules to be rendered.

**Examples**

```javascript
createFontFace({
  fontFamily: 'MyHelvetica',
  src: 'local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf)',
  fontWeight: 'bold'
})
```

## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Thiago Santos](https://thiamsantos.github.io/)
