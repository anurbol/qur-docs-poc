"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE_BLOCK = (codeBlock) => {
    // nothing here, because this function is playng a role of a token for typescript parser
};
class TableOfContents {
}
exports.TableOfContents = TableOfContents;
// todo below
// tslint:disable
// todo above
class Section {
    constructor(text) {
        this.isSection = true;
    }
}
exports.Section = Section;
class Page {
    constructor(sections) {
        this.isPage = true;
    }
}
exports.Page = Page;
class Anchor {
    constructor() {
        this.isParagraph = true;
    }
}
exports.Anchor = Anchor;
exports.LINK = (target, text) => {
    // todo 
};
