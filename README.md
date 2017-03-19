# Stylord

[![npm (scoped)](https://img.shields.io/npm/v/stylord.svg)](https://www.npmjs.com/package/stylord)
[![Travis](https://img.shields.io/travis/thiamsantos/stylord.svg)](https://travis-ci.org/thiamsantos/stylord)
[![Coveralls](https://img.shields.io/coveralls/thiamsantos/stylord.svg)](https://coveralls.io/github/thiamsantos/stylord?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Javascript styles made easy.

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [API](#api)
-   [Contributing](#contributing)
-   [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save-dev stylord
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import stylord from 'stylord'

// using CommonJS modules
var stylord = require('stylord')
```

## Usage

```jsx
import stylord from 'stylord'
import React, {Component} from 'react'

const style = stylord({
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

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### stylord

Create a stylesheet and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS rules to be rendered.

**Examples**

```javascript
// returns {modal: 'modal_hgdfgf', button: 'button_guyhg'}
stylord({
  modal: {
    width: '100%'
  },
  button: {
    borderRadius: '2px'
  }
})
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the class names of the css modules created.

## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Thiago Santos](https://thiamsantos.github.io/)
