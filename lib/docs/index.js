"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const stringify = require("json-stringify-pretty-compact");
const json2md_1 = __importDefault(require("json2md"));
const index_1 = __importDefault(require("../index"));
const makeDocs = () => {
    const examples = {};
    const outFinal = [];
    examples["- responsive first classnames"] = {
        sm: { col: 2, row: 1 },
        lg: { col: 4, row: 2 },
    };
    examples["- another responsive example"] = {
        col: { sm: [2, { bg: 'red' }] },
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
        // let red = JSON.stringify(cssObject2,null);
        let red = stringify(cssObject2);
        let reds = index_1.default.process(cssObject2);
        let codeContent = red;
        outFinal.push({ h3: cssObject2Key }, {
            code: {
                language: "json",
                content: [codeContent, "// - outputs : ", "// - " + reds],
            },
        });
    });
    return json2md_1.default(outFinal);
};
const generated = makeDocs();
fs.readFile("./src/docs/readmeHeader.md", function (err, buf) {
    if (err) {
        console.log("readmeHeader.md :", err);
    }
    else {
        fs.writeFile("README.md", buf + generated, (err) => {
            if (err) {
                console.log("write README.md", err);
            }
            else {
                console.log("Successfully Written to README.md");
            }
        });
    }
});
