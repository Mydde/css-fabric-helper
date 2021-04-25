interface ICssObject {
  [key: string]: any;
}

interface FabricFn {
  (fabricObject: ICssObject): boolean;
}

declare var window: any; 
declare var version: string;
 
 