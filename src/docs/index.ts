const fs = require("fs");
const prettyJs  = require("pretty-js");
const stringify = require("json-stringify-pretty-compact")
import json2md from "json2md";
import cssFabricHelper, { ICssFabricProps } from "../index";
/*  





console.log(json2md(exList)); */

const makeDocs = () => {
  const examples: { [key: string]: any } = {};
  const outFinal: any = [];

  examples["- responsive first classnames"] = {
    sm: { col: 2, row: 1 },
    lg: { col: 4, row: 2 },
  };

  examples["- another responsive example"] = {
    col: { sm: [2, {bg:'red'}] },
    row: { lg: 3 },
  };

  examples["test"] = {
    padding: 2,
    border: { bottom: 2, top: 3 },
  };

  examples["test2"] = {
    padding: "",
    border: { bottom: 2, top: 3 },
  };

  examples["- more complex one"] = {
    grid: ["h", "wrap"],
    border: {
      grey: {
        sm: { bottom: 2, top: 3 },
      },
      sm: { bottom: 2, top: 3 },
      xxl: { bottom: 1, left: 2 },
    },
  };

  Object.keys(examples).map((cssObject2Key, index) => {
    let cssObject2 = examples[cssObject2Key];

    // let red = JSON.stringify(cssObject2,null);
    let red = stringify(cssObject2);
    let reds = cssFabricHelper.process(cssObject2);

    let codeContent =
      red;
    outFinal.push(
      { h3: cssObject2Key },
      {
        code: {
          language: "json",
          content: [codeContent,"// - outputs : " ,"// - "+ reds],
        },
      }
    );
  });

  // console.log(json2md(outFinal));
  return json2md(outFinal);
};

const generated = makeDocs();

fs.readFile("./src/docs/readmeHeader.md", function (err: any, buf: any) {
  if (err) {
    console.log("readmeHeader.md :", err);
  } else {
    fs.writeFile("README.md", buf + generated, (err: any) => {
      if (err) {
        console.log("write README.md", err);
      } else {
        console.log("Successfully Written to README.md");
      }
    });
  }
});
