import { NewObj } from "../../core-shared/express/types";

export declare interface ILayout {
    id: string;
    name: string;
    json: string;
}

export type NewLayout = NewObj<ILayout>;
