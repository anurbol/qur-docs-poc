// tslint:disable:object-literal-sort-keys

// tslint:disable-next-line:ordered-imports
import {create} from "./api"
import { CODE_BLOCK, LINK, tableOfContents } from "./api/insertions"

// INTERNATIONALIZATION????????????????????????????????
translation("ru-RU", docs2, {
    // this obj MUST be compatiable with orig
})

const docs2 = create({
    "foo": {
        bar: `baz`,
    },
    "Tutorials ee": {
        "tutorial 1": {
            "1": "intro", // todo disallow accessing sections by numeric fields
            "2": "intro", // todo disallow accessing sections by numeric fields
            "headed section": `some text ${LINK(() => docs2)}`,
            // if key is only digits and dots then the section is not headed

            // if one of object values is string, then it is section and containing obj is either page (has at least 1 section) or parent section 
        },
    },
})

const docs0 = {
    "Table of contents": tableOfContents(),
    "Tutorials"() {
        return {
            "tutorial 1": {
                "1": "intro", // todo disallow accessing sections by numeric fields
                "headed section": "foo text",
            },
        }
    }
    "Overview"() {
        this.Tutorials()["tutorial 1"]["headed section"]
        return page({
            "1": section(`QurDocs is a revolution of a software documentation making.
            Yes, you are at the very moment are meeting the revolution, because
            FINALLY we have an ability to create docs that are both human-friendly
            and absolutely, 100% relevant, guaranteed.`),
            "2": section({
                "some subsection": section(`text`)
            })
        }),
    },
    "Advantages"() {
        return `
      * 100% relevant code in examples / code blocks ${LINK(docs.Features) /* todo */}
      * 100% working (not-broken) internal links both to articles and to
        paragraphs (anchors)
      * 100% Code completion for article and paragraph titles (e.g. when making links)
        How cool is that?
      * 0% boilerplate and bullshit. Yes, there is no boilerplate, zero of it.
        You just do \`npm install\` and start writing your futuristic docs
      * Instant publishing. You may get docs worldwide accessible in seconds.
      * And many more! Continue reading for eyegasm / braingasm!
      `
    },

    "Who can use it": `QurDocs is perfect for apps and for libraries.
        Currently supporting JS and TS, but looking forward to cover other languages as well.`,

    "How it works": `You just write documentation as a code,
        in the same repo as your app or library, importing
        every piece of code, that you want to describe, from actual codebase.
        Language parser makes all of the remaining job.`,

    "Install": ``,
    "foo"() {
        return this["Who can use it"]
    },
    "Features": new Page({
        "Up-to-date": new Section(/* `foo bar` */), // todo
        // todo paragraph option no-heading
        // todo sections are nested parts of one article, starting with heading h2,h3 etc
        // replace old section concept with "category"
    })
}

const foo = {
    "bar q": "baz",
    "qqq"() {
        // return this.
    },
}

// todo