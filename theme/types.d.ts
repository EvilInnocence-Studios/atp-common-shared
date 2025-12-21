import { ILayoutComponent, ITheme as IThemeDef } from "@core/lib/layout/layout";
import { NewObj } from "../../core-shared/express/types";

export declare interface ITheme {
    id: string;
    name: string;
    description: string;
    imageUrl: string | null;
    json: IThemeDef | null;
    enabled: boolean;
}

export type NewTheme = NewObj<ITheme>;
