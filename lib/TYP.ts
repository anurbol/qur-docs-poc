export interface ICategoryInput {

}

export interface TCategory<INPUT> {

}

export interface IPageInput {
    [key: string]: TSection
}

export type TPage<INPUT extends IPageInput> = {
    [K in keyof INPUT]: INPUT[K]
}

export type TSectionInput = string | ISubSections

export type TSection<INPUT extends TSectionInput = TSectionInput> = {
    [K in keyof INPUT]: INPUT[K]
} | string

export interface ISubSections {
    [key: string]: TSection
}
