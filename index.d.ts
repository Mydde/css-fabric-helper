interface cssObjectKey {
  [key: string]: any;
}

interface cssObject {
  [key: string]: cssObjectKey; 
} 

export interface FabricFn {
  (cssObect: string): boolean;
}

declare const fabric: {
  FabricFn;
};

export default fabric;
