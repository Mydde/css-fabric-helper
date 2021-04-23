 

export interface FabricFn{
    (testString: string) : boolean;
}

type PicomatchOptions = {dot: boolean};

declare const fabric: {
    FabricFn
}

export default fabric
