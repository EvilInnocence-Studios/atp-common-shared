import { NewObj } from "../../core-shared/express/types";

export declare interface ISynonym {
    id: string;
    canonical: string;
    synonym: string;
}

export type NewSynonym = NewObj<ISynonym>;