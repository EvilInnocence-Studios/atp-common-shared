export declare interface ITagGroup {
    id: string;
    name: string;
    filterable: boolean;
}

export type NewTagGroup = Omit<ITagGroup, "id">;

export declare interface ITag {
    id: string;
    name: string;
    groupId: string;
}