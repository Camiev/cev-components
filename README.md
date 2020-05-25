# cev-components

> components by CEV to simple page

[![NPM](https://img.shields.io/npm/v/cev-components.svg)](https://www.npmjs.com/package/cev-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save https://github.com/Camiev/cev-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { Division, Presentation, Footer, Header } from 'cev-components';

class ExampleDivision extends Component {
  render() {
    return <Division
      title={title}
      description={description}
      image={image}
      youtubeId={youtubeId}
      instagramId={instagramId}
      key={key}
      isMain
    />
  }
}
```

## License

MIT © [Camiev](https://github.com/Camiev)
