export interface IPageObject {
    [key: string]: object | string
}

export interface ISectionObject {
    [key: string]: object | string
}

export type TPage<PAGE extends IPageObject> = {
    [K in keyof PAGE]: PAGE[K]
}

export type TSection<SECTION extends ISectionObject> = {
    [K in keyof SECTION]: SECTION[K]
}
