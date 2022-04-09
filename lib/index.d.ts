declare type TCssObjectValue = number | string | any[] | ICssFabricArgs;
export interface CssFabricHelperType<T = any> {
    [key: string]: TCssObjectValue;
}
interface ICssFabricArgs {
    [key: string]: TCssObjectValue;
}
declare class CssFabricHelper {
    fabricObject: CssFabricHelperType;
    fabricObjectTags: any[];
    fabricDebug: any;
    private fabricTerminate;
    private activeFabricTag;
    private activeFabricTagValue;
    constructor(inputFabricObject?: CssFabricHelperType);
    private parseFabricObject;
    static process(inputFabricObject: CssFabricHelperType): string;
    private parseFabricObjectTag;
    private finalize;
    private terminate;
    private unify;
    private log;
    private getType;
    private isEmpty;
}
declare const _default: {
    process: typeof CssFabricHelper.process;
};
export default _default;
