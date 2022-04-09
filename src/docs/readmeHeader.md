# css-fabric-helper

## Features

css-fabric-helper is a shorthand css builder for css-fabric or others css frameworks. 


## Installation


```
$ npm i @medyll/css-fabric-helper
# or
$ yarn @medyll/css-fabric-helper
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

```

## Examples
