"use strict";
// tslint:disable:max-file-line-count
// // todo del this file
// class Docs {
//     public static pages<PAGES extends object>(pagesObj: PAGES): PAGES {
//         return pagesObj
//     }
// }
// import {CODE_BLOCK} 
// const CODE_BLOCK = Docs.insertions. // codeBlock, linkToArticle
// const pages = Docs.pages({
//     "some section/category": section({
//         "some page": {
//             // ...
//         },
//     }),
//     "foo bar": {
//         "baz as": "qqq",
//     },
//     "some page": `some content here
//     ${
//         CODE_BLOCK(() => {
//             const LINK = (title: keyof typeof pages) => {
//             }
//             LINK("some page") // deep-nested stuff is hard to access with keyof
//             pages["foo bar"]["baz as"]
//             // todo this means that pages must be proxy object
//         })
//         }
//     `
// })
// pages
//     .alias("alias name", "existing page title")
//     .alias("alias name", "existing page title")
// const Some_page = `
// bar baz
// # Foo Bar
// ${codeBlock(() => {
//         const some = {
//             code: "here",
//         }
//         someFunc()
//         new SomeClass()
//         return some
//     })}
// qqq
// `
// /**
//  * QurDocs adds const value{n} or _value{n} (if value{n} name is already taken)
//  * or __value{n} (if __value{n} name is already taken) etc.
//  *  before someFunc() and new SomeClass(),
//  * or maybe those tmp variables value{n} are not required
//  * executes script
//  * and gets values of said expressions.
//  * That values as well as value of "const some"
//  * are written to test case
//  * e.g:
//  */
// /**
//  * value1 holds value of following expression:
//  * {
//       code: "here",
//   }
//  */
// expect(stringify(value1)).to.equal(stringify({
//     code: "here"
// })) // stringify only if object
// /**
//  * value2 holds value of following expression:
//  * someFunc()
//  */
// expect(value2).to.equal(...) // no stringify, because not object (we suppose someFunc() returns not object)
// /**
//  * value3 holds value of following expression:
//  * new SomeClass()
//  */
// expect(value3).to.equal(...)
// /**
//  * 
//  */
// if (0) {
//     type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
//     const array = [{ foo: 'val1' }, { bar: 'val2' }]
//     function flatten<T>(array: T[]): T {
//         // implementation here, does not matter, all that matter is that it returns following:
//         return { foo: 'val1', bar: 'val2' } as any
//     }
//     // at this point IDE suggests two values: "foo" and "bar"
//     console.log(flatten(array)) // TODO DELETE
// }
// else {
//     const section: {
//         <TITLE extends string = "_none_">(content: string): TSection<TITLE>;
//         // tslint:disable:unified-signatures
//         <TITLE extends string>(title: TITLE, content: string): TSection<TITLE>;
//     } = (first: string, second?: string) => {
//         let title: string
//         let content: string
//         if (second) {
//             title = first
//             content = second
//         } else {
//             title = "_none_"
//             content = first
//         }
//         return {
//             [title]: content,
//         }
//     }
//     type TSection<TITLE extends string = string> = {
//         [K in TITLE]: string
//     }
//     // T = TSection ({foo: 'val'})
//     // tslint:disable
//     const page = <T>(sections: T[]): T => {
//         // console.log(sections) // TODO DELETE
//         return { foo: 'val1', bar: 'val2' } as any
//     }
//     const array = [{ foo: 'val1' }, { bar: 'val2' }]
//     // const thepage = page(section(`content 1`), section("some title", `content 2`), section("fo"))
//     const thepage = page([
//         section("some title", "hgfhg"),
//         section("some title 2", `test content`)
//     ]
//     ).
//     // console.log(thepage.) // TODO DELETE
// }
// TRANSLATIONS (low pr):
// interface ITemplate {
//     foo: string
// }
// const original = {
//     foo: {
//         bar: "baz",
//     },
//     qqq: {
//         eee: {
//             "some title": 111,
//         },
//         222: {
//             "uuu aaa": 222,
//         },
//     },
// }
// function translate<TEMPLATE>(lang: string, trans: TEMPLATE): void {
//     // todo
// }
