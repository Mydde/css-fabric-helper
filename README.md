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
import cssFabricHelper, { CssFabricHelperType } from "css-fabric-helper";

// declare your cssFabric object based on your framework rules
const cssObject: CssFabricHelperType = {
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
### - responsive first classnames

```jsx
{"sm": {"col": 2, "row": 1}, "lg": {"col": 4, "row": 2}}
// - outputs : 
// - sm-col-2 sm-row-1 lg-col-4 lg-row-2
```

### - another responsive example

```jsx
{"col": {"sm": [2, {"bg": "red"}]}, "row": {"lg": 3}}
// - outputs : 
// - col-sm-2 col-sm-bg-red row-lg-3
```

### - a simple rule example

```jsx
{"padding": 2, "border": {"bottom": 2, "top": 3}}
// - outputs : 
// - padding-2 border-bottom-2 border-top-3
```

### - short classname

```jsx
{"padding": "", "border": {"bottom": 2, "top": 3}}
// - outputs : 
// - padding border-bottom-2 border-top-3
```

### - more complex one

```jsx
{
  "grid": ["h", "wrap"],
  "border": {
    "grey": {"sm": {"bottom": 2, "top": 3}},
    "sm": {"bottom": 2, "top": 3},
    "xxl": {"bottom": 1, "left": 2}
  }
}
// - outputs : 
// - grid-h grid-wrap border-grey-sm-bottom-2 border-grey-sm-top-3 border-sm-bottom-2 border-sm-top-3 border-xxl-bottom-1 border-xxl-left-2
```
