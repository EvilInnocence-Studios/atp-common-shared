import { NewObj } from "../../core-shared/express/types";

export declare interface ITheme {
    id: string;
    name: string;
    json: string;
}

export type NewTheme = NewObj<ITheme>;
