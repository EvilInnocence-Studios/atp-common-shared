import { NewObj } from "@core-shared/express/types";

export declare interface IMedia {
    id: string;
    url: string;
    altText: string;
    title: string;
    caption: string;
}

export type NewMedia = NewObj<IMedia>;
