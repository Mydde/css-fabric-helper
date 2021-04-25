interface ICssObject {
    [key: string]: any;
}
declare class CssFabricHelper {
    fabricObject: ICssObject;
    fabricObjectTags: any[];
    fabricDebug: any;
    fabricTerminate: any;
    private activeFabricTag;
    private activeFabricTagValue;
    constructor(inputFabricObject?: ICssObject);
    parseFabricObject(): void;
    static process(inputFabricObject: ICssObject): any;
    parseFabricObjectTag(tagRule: string, tagValue: any): void;
    _finalize(): any;
    _terminate(parentKey: string, val: string): void;
    private log;
}
declare const _default: {
    process: typeof CssFabricHelper.process;
};
export default _default;
