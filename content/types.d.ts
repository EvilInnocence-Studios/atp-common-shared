import { NewObj } from "@core-shared/express/types";

export declare interface IContent {
    id: string;
    slug: string;
    title?: string;
    type: "page" | "snippet";
    content: string;
    enabled: boolean;
    publishDate?: Date;
}

export type NewContent = NewObj<IContent>;
