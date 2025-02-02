import { NewObj } from "../../core-shared/express/types";

export declare interface IBanner {
    id: string;
    tag: string;
    name: string;
    title: string;
    description: string;
    url: string;
    link: string;
    activeFrom: string;
    activeTo: string;

    buttonText?: string;
    buttonLink?: string;
    buttonLocation?: string;

    buttonTextAlt?: string;
    buttonLinkAlt?: string;
    buttonLocationAlt?: string;
}

export type NewBanner = NewObj<IBanner>;