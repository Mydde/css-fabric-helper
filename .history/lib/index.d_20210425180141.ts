interface ICssObject {
    [key: string]: number | string | any [];
}
declare class CssFabricHelper {
    fabricObject: ICssObject;
    fabricObjectTags: any[];
    fabricDebug: any;
    private fabricTerminate;
    private activeFabricTag;
    private activeFabricTagValue;
    constructor(inputFabricObject?: ICssObject);
    private parseFabricObject;
    static process(inputFabricObject: ICssObject): string;
    private parseFabricObjectTag;
    private finalize;
    private terminate;
    private log;
    private getType;
}
declare const _default: {
    process: typeof CssFabricHelper.process;
};
export default _default;
