export declare interface ITagGroup {
    id: number;
    name: string;
}

export type NewTagGroup = Omit<ITagGroup, "id">;

export declare interface ITag {
    id: number;
    name: string;
    groupId: number;
}