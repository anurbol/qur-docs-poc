import { IPageInput, ISubSections, TPage, TSection, TSectionInput, ICategoryInput, TCategory } from "../lib/TYP";

export const category = <INPUT extends ICategoryInput>(input: INPUT): TCategory<INPUT> => {
  return input // todo 
}

export const page = <INPUT extends IPageInput>(input: INPUT): TPage<INPUT> => {
    return input // todo
}

export const section = <INPUT extends TSectionInput>(sectionInput: TSectionInput): TSection<INPUT> => {
    // return sectionInput // todo
}

export const tableOfContents = () => {
    
}
