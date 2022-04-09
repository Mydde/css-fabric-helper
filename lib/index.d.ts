declare type TCssObjectValue = number | string | any[] | ICssFabricArgs;
export interface ICssFabricProps<T = any> {
    [key: string]: TCssObjectValue;
}
interface ICssFabricArgs {
    [key: string]: TCssObjectValue;
}
declare class CssFabricHelper {
    fabricObject: ICssFabricProps;
    fabricObjectTags: any[];
    fabricDebug: any;
    private fabricTerminate;
    private activeFabricTag;
    private activeFabricTagValue;
    constructor(inputFabricObject?: ICssFabricProps);
    private parseFabricObject;
    static process(inputFabricObject: ICssFabricProps): string;
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
