import { NewObj } from "@core-shared/express/types";
import { ILayoutComponent } from "@theming/lib/layout/layout";

export declare interface IContent {
    id: string;
    slug: string;
    title?: string;
    type: "page" | "post";
    content: string;
    layout: ILayoutComponent | null;
    format: "markdown" | "layout";
    enabled: boolean;
    publishDate?: Date;
}

export type NewContent = NewObj<IContent>;
