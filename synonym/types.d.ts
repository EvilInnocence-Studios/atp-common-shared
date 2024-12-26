import { NewObj } from "../../core-shared/express/types";

export declare interface ISynonym {
    id: number;
    canonical: string;
    synonym: string;
}

export type NewSynonym = NewObj<ISynonym>;