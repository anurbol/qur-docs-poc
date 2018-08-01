// todo del this file

import { codeBlock } from "utils" // todo

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
 * QurDocs adds const tmp_value{n} before someFunc() and new SomeClass(),
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