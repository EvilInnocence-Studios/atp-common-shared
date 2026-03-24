import { NewObj } from "@core-shared/express/types";
import { ILayoutComponent } from "@theming/lib/layout/layout";

export declare interface IContent {
    id: string;
    slug: string;
    title?: string;
    type: "page" | "snippet";
    content: string;
    layout: ILayoutComponent;
    format: "markdown" | "layout";
    enabled: boolean;
    publishDate?: Date;
}

export type NewContent = NewObj<IContent>;
