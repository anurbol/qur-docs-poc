import { pages } from "../../api"
import { section } from "../../api/sections"
import { LINK } from "./api/insertions"

pages({
    Overview: {
        "1": `QurDocs is a revolution of a software documentation making.
        Yes, you are at the very moment are meeting the revolution, because
        FINALLY we have an ability to create docs that are both human-friendly
        and absolutely, 100% relevant, guaranteed.`,

        "Advantages": `
        * 100% relevant code in examples / code blocks ${LINK("") /* todo */ }
        * 100% working (not-broken) internal links both to articles and to
          paragraphs (anchors)
        * 100% Code completion for article and paragraph titles (e.g. when making links)
          How cool is that?
        * 0% boilerplate and bullshit. Yes, there is no boilerplate, zero of it.
          You just do \`npm install\` and start writing your futuristic docs
        * Instant publishing. You may get docs worldwide accessible in seconds.
        * And many more! Continue reading for eyegasm / braingasm!
        `,

        "Who can use it": `QurDocs is perfect for apps and for libraries.
        Currently supporting JS and TS, but looking forward to cover other languages as well.`,

        "How it works": `You just write documentation as a code,
        in the same repo as your app or library, importing
        every piece of code, that you want to describe, from actual codebase.
        Language parser makes all of the remaining job.`,

        "Install": ``,
        
    },
    
})
