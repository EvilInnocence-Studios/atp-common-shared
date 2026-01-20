import { ILayoutComponent } from "@theming/lib/layout/layout";
import { NewObj } from "../../core-shared/express/types";

export declare interface ITheme {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    json: ILayoutComponent | null;
}

export type NewTheme = NewObj<ITheme>;
