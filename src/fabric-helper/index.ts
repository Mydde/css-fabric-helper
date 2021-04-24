"use strict";

const playMap = function (arg: { tagRule: string; fabValue: any }) {
  const { tagRule, fabValue } = arg;

  let col = "";
  switch (typeof fabValue) {
    case "string":
    case "number":
      return (col = prefix(tagRule) + fabValue);
      break;
    default:
      return loop({ tagRule, Arr: fabValue });
      break;
  }
};

const loop = (arg: { tagRule: string; Arr: any }) => {
  const { tagRule, Arr } = arg;

  if (Array.isArray(Arr)) {
    return loopArray({ tagRule, Arr });
  } else {
    return loopObject({ tagRule, Obj: Arr });
  }
};

// if [] => use prefix
const loopArray = (arg: { tagRule: string; Arr: any }) => {
  const { tagRule, Arr } = arg;

  let red: any[] = [];

  for (const arr of Arr) {
    red.push(playMap({ tagRule, fabValue: arr }));
  }

  return red.join("   ,   ");
};

const loopObject = (arg: { tagRule: string; Obj: any }) => {
  const { tagRule, Obj } = arg;

  let red: any[] = [];
  // stick property and value
  for (const prop of Object.keys(Obj)) {
    let value = Obj[prop];
    red.push(tagRule + "-" + playMap({ tagRule: prop, fabValue: value }));
  }

  return red.join("    |    ");
  return "-object";
};

function prefix($prefix: any) {
  return !$prefix ? "" : $prefix + "-";
}

const fabric = function <cssObject, options>(
  cssObject: any,
  options?: any
): string {
  const cssOut: any = Object.keys(cssObject).map(
    (fabRule: string, index: number) => {
      const fabValue = cssObject[fabRule];
      return playMap({ tagRule: fabRule, fabValue });
    }
  );

  return cssOut;
};

export default fabric;
