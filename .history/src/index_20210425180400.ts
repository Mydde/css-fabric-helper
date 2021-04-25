"use strict";

type ICssObjectValue   number | string | any[];
 
interface ICssObject {
  [key: string]: number | string | any [];
}

class CssFabricHelper {
  fabricObject: ICssObject;
  fabricObjectTags: any[];
  fabricDebug: any;
  private fabricTerminate: any;

  private activeFabricTag: any;
  private activeFabricTagValue: any;
 
  constructor(inputFabricObject: ICssObject={}) {
    this.fabricObject = inputFabricObject;
    this.fabricDebug = {};
    this.fabricTerminate = [];
    this.fabricObjectTags = Object.keys(this.fabricObject);
  }

  // step 1 : loop trough the object
  private parseFabricObject() {  
    //
    this.fabricObjectTags.forEach((fabricRule: string) => {
      // serve activeRule in an array for later join
      this.activeFabricTag = [fabricRule];
      this.activeFabricTagValue = this.fabricObject[fabricRule];

      this.parseFabricObjectTag(fabricRule, this.activeFabricTagValue);
    }); 
  }

  static process(inputFabricObject: ICssObject): string {
    const inst = new CssFabricHelper(inputFabricObject);

    // launch parse
    inst.parseFabricObject();
    return inst.finalize();
  }


  private parseFabricObjectTag(tagRule: string, tagValue: any) {     
    //
    this.fabricDebug[this.activeFabricTag] = []; 
    //
    const tagValueType = this.getType(tagValue);
    //
    switch (tagValueType) {
      case "string":
        this.terminate(tagRule, tagValue); 
        break;
      case "array":
        for (const tag of tagValue) {
          if (this.getType(tag) === "string") { 
            this.terminate(tagRule, tag);
          }
          if (this.getType(tag) === "array") {
            console.log(tag);
          }
          if (this.getType(tag) === "object") {
            for (const tagKey in tag) {
              let propertyValue = tag[tagKey];
              let newParentKey = tagRule + "-" + tagKey;

              this.parseFabricObjectTag(newParentKey, propertyValue);
            }
          }
        }
        break;

      case "object":
        for (const tagValueKey in tagValue) {
          let propertyValue = tagValue[tagValueKey];
          let newParentKey = tagRule + "-" + tagValueKey;

          this.parseFabricObjectTag(newParentKey, propertyValue);
        }
        break;
      default:
        break;
    }
  } 
  
  private finalize() {
    return this.fabricTerminate.join(" ");
  }

  private terminate(parentKey: string, val: string) {
    //
    this.fabricTerminate.push(`${parentKey}-${val}`);
  }
  
  private log(...content: any) {
    console.log(JSON.stringify(content, undefined, "\t")); 
  }

  private   getType = (val: any) => {
    if (typeof val === "string" || typeof val === "number") return "string";
    if (Array.isArray(val)) return "array";
    if (typeof val === "object") return "object";
    return "string";
  }
}

 

export default {process : CssFabricHelper.process} ;   
