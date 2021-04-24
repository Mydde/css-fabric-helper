export interface ICssObjectLine  {
  any,
  [key: string]: any;
}

export interface ICssObject {
  [key: string]: ICssObjectLine; 
} 

interface FabricFn {
  (fabricObject: ICssObject): boolean;
}

declare const fabric: {
  process: FabricFn;
};

export default fabric;
