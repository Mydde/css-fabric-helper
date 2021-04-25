export interface ICssObject {
  [key: string]: any;
}

interface FabricFn {
  (fabricObject: ICssObject): boolean;
}
 
 