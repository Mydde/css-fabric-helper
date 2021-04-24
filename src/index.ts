"use strict";

import fabric from "./fabric-helper";

 
const cssObject: any = {
  txt: "h6",
  grid: ["h", "wrap"],
  border: {
    grey: {
      sm: { bottom: 2, top: 3 },
      xxl: { bottom: 1, left: 2 },
    },
    sm: { bottom: 2, top: 3 },
    xxl: { bottom: 1, left: 2 },
  },
  padding: [
    "right",
    { top: 4, bottom: 3 },
    {
      sm: { bottom: 2, top: 2 },
      xxl: { bottom: 1, left: 2 },
    },
  ],
};
 

let test = fabric.process(cssObject);
console.log({test});

export default fabric;

//
