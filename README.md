# css-fabric-helper

## Features

css-fabric-helper is a shorthand css builder for css-fabric or others css frameworks
It's intended to be used as a classnames builder by doing recursive concatenation at string array or object level from a provided object

## Installation

```
$ npm install css-fabric-helper
```

## Usage

```jsx
import cssFabricHelper, { ICssFabricProps } from "css-fabric-helper";

// declare your cssFabric object based on your framework rules
const cssObject: ICssFabricProps = {
  txt: "h6",
  padding: [
    "right", //  shorthand for {right:1} when .right,.right-1 {}
    {
      // responsive declarations
      sm: { bottom: 2, top: 2 },
      xxl: { bottom: 1, left: 2 },
    },
  ],
};

// generate classnames
cssFabricHelper.process(cssObject);

("txt-h6 padding-right padding-sm-bottom-2 padding-sm-top-2 padding-xxl-bottom-1 padding-xxl-left-2");
```

```jsx
const cssObject: ICssFabricProps = {
  grid: ["h", "wrap"],
  border: {
    grey: {
      sm: { bottom: 2, top: 3 },
    },
    sm: { bottom: 2, top: 3 },
    xxl: { bottom: 1, left: 2 },
  },
};
grid-h grid-wrap border-grey-sm-bottom-2 border-grey-sm-top-3 border-sm-bottom-2 border-sm-top-3 border-xxl-bottom-1 border-xxl-left-2

// generate classnames
cssFabricHelper.process(cssObject);
```
