import { TPage } from "../../lib/TYP";

export const CODE_BLOCK = (codeBlock: () => any) => {
    // nothing here, because this function is playng a role of a token for typescript parser
}

// todo below
// tslint:disable
// todo above
export class Section {
    private isSection = true
}
export class Page {
    private isPage = true
}
export class Paragraph {
    private isParagraph = true
}

export const LINK = (target: Section | Page | Paragraph, text?: string) => {
    // todo 
}
