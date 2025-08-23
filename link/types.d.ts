import { NewObj } from "@core-shared/express/types";

export declare interface ILink {
    id: string;
    text: string;
    url: string;
    order: number;
}

export declare type NewLink = NewObj<ILink>;

export declare interface ILinkList {
    id: string;
    name: string;
    key: string;
}

export declare type NewLinkList = NewObj<ILinkList>;