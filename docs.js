"use strict";
// tslint:disable:object-literal-sort-keys
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:ordered-imports
const api_1 = require("./api");
const insertions_1 = require("./api/insertions");
function link(fpp) {
    // ...
}
// INTERNATIONALIZATION????????????????????????????????
translation("ru-RU", docs2, {
// this obj MUST be compatiable with orig
});
const docs2 = create({
    "foo": {
        bar: `baz`,
    },
    "Tutorials ee": {
        "tutorial 1": {
            "1": "intro",
            "2": "intro",
            "headed section": `some text ${link(() => docs2)}`,
        },
    },
});
const docs = {
    "Table of contents": api_1.tableOfContents(),
    "Tutorials"() {
        return {
            "tutorial 1": {
                "1": "intro",
                "headed section": "foo text",
            },
        };
    },
    "Overview"() {
        this.Tutorials()["tutorial 1"]["headed section"];
        return api_1.page({
            "1": api_1.section(`QurDocs is a revolution of a software documentation making.
            Yes, you are at the very moment are meeting the revolution, because
            FINALLY we have an ability to create docs that are both human-friendly
            and absolutely, 100% relevant, guaranteed.`),
            "2": api_1.section({
                "some subsection": api_1.section(`text`)
            })
        }),
        ;
    },
    "Advantages"() {
        return `
      * 100% relevant code in examples / code blocks ${insertions_1.LINK(docs.Features) /* todo */}
      * 100% working (not-broken) internal links both to articles and to
        paragraphs (anchors)
      * 100% Code completion for article and paragraph titles (e.g. when making links)
        How cool is that?
      * 0% boilerplate and bullshit. Yes, there is no boilerplate, zero of it.
        You just do \`npm install\` and start writing your futuristic docs
      * Instant publishing. You may get docs worldwide accessible in seconds.
      * And many more! Continue reading for eyegasm / braingasm!
      `;
    },
    "Who can use it": `QurDocs is perfect for apps and for libraries.
        Currently supporting JS and TS, but looking forward to cover other languages as well.`,
    "How it works": `You just write documentation as a code,
        in the same repo as your app or library, importing
        every piece of code, that you want to describe, from actual codebase.
        Language parser makes all of the remaining job.`,
    "Install": ``,
    "foo"() {
        return this["Who can use it"];
    },
    "Features": new Page({
        "Up-to-date": new Section( /* `foo bar` */),
    })
};
const foo = {
    "bar q": "baz",
    "qqq"() {
        // return this.
    },
};
// todo
