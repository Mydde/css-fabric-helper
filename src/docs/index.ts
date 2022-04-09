const fs = require("fs");
const stringify = require("json-stringify-pretty-compact")
import json2md from "json2md";
import cssFabricHelper, { CssFabricHelperType } from "../index";

const makeDocs = () => {
  const examples: { [key: string]: any } = {};
  const outFinal: any = [];
  const outFinalD: any = [];

  examples["- responsive first classnames"] = {
    sm: { col: 2, row: 1 },
    lg: { col: 4, row: 2 },
  };

  examples["- another responsive example"] = {
    col: { sm: [2, {bg:'red'}] },
    row: { lg: 3 },
  };

  examples["- a simple rule example"] = {
    padding: 2,
    border: { bottom: 2, top: 3 },
  };

  examples["- short classname"] = {
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
    
    let codeContent = stringify(cssObject2);
    let reds = cssFabricHelper.process(cssObject2);
    
    outFinal.push(
      { h3: cssObject2Key },
      {
        code: {
          language: "jsx",
          content: [codeContent,"// - outputs : " ,"// - "+ reds],
        },
      }
    );
    
  });

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
