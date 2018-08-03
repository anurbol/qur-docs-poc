import { TPage } from "../../lib/TYP";

export const CODE_BLOCK = (codeBlock: () => any) => {
    // nothing here, because this function is playng a role of a token for typescript parser
}

export class TableOfContents {

}

// todo below
// tslint:disable
// todo above
export class Section {
    private isSection = true

    constructor(text: string) {

    }
}
export class Page {
    private isPage = true

    constructor(sections: object) {

    }
}
export class Anchor {
    private isParagraph = true
}

export const LINK = (target: Section | Page | Anchor, text?: string) => {
    // todo 
}
