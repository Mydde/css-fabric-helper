interface ICssObject {
    [key: string]: any;
}
declare class CssFabricHelper {
    fabricObject: ICssObject;
    fabricObjectTags: any[];
    private fabricDebug;
    private fabricTerminate;
    private activeFabricTag;
    private activeFabricTagValue;
    constructor(inputFabricObject?: ICssObject);
    private parseFabricObject;
    static process(inputFabricObject: ICssObject): string;
    private parseFabricObjectTag;
    private _finalize;
    private _terminate;
    private log;
    private getType;
}
declare const _default: {
    process: typeof CssFabricHelper.process;
};
export default _default;
