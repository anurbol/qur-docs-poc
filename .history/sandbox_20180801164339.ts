// todo del this file

import { QurDocs } from "qur-docs" // todo

const codeBlock = QurDocs.

const pages = QurDocs.pages({
    "some page": `some content here
    ${
        codeBlock(() => {

        })
        }
    `
})

pages
    .alias("alias name", "existing page title")
    .alias("alias name", "existing page title")

const Some_page = `
bar baz
# Foo Bar
${codeBlock(() => {
        const some = {
            code: "here",
        }

        someFunc()

        new SomeClass()

        return some
    })}
qqq
`

/**
 * QurDocs adds const value{n} or _value{n} (if value{n} name is already taken)
 * or __value{n} (if __value{n} name is already taken) etc.
 *  before someFunc() and new SomeClass(),
 * or maybe those tmp variables value{n} are not required
 * executes script
 * and gets values of said expressions.
 * That values as well as value of "const some"
 * are written to test case
 * e.g:
 */
/**
 * value1 holds value of following expression:
 * {
      code: "here",
  }
 */
expect(stringify(value1)).to.equal(stringify({
    code: "here"
})) // stringify only if object

/**
 * value2 holds value of following expression:
 * someFunc()
 */
expect(value2).to.equal(...) // no stringify, because not object (we suppose someFunc() returns not object)

/**
 * value3 holds value of following expression:
 * new SomeClass()
 */
expect(value3).to.equal(...)
/**
 * 
 */