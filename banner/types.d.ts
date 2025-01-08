import { NewObj } from "../../core-shared/express/types";

export declare interface IBanner {
    id: number;
    tag: string;
    name: string;
    title: string;
    description: string;
    url: string;
    buttonText?: string;
    buttonLocation?: string;
}

export type NewBanner = NewObj<IBanner>;