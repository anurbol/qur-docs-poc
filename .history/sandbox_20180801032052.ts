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
 * QurDocs adds return before someFunc() and new SomeClass(),
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
}))

/**
 * value2 holds value of following expression:
 * someFunc()
 */
value2

new SomeClass()

return some
/**
 * 
 */
//generates to

const Some_page = `
bar baz
# Foo Bar
${codeBlock(() => {
  const some = {
      code: "here",
  }

  return {some} // all scope variables are returned
}, (some: object) => { //this should be saved to file e.g. Some_page_example1_test
    it("Some page example #1")
  expect(some).to.deepEqual({
      code: "here",
  }))
})}
qqq
`