// todo del this file

import { codeBlock } from "utils" // todo

const Some_page = `
bar baz
# Foo Bar
${codeBlock(() => {
  const some = {
      code: "here",
  }
})}
qqq
`

//generates to

const Some_page = `
bar baz
# Foo Bar
${codeBlock(() => {
  const some = {
      code: "here",
  }

  return {some} // all scope variables are returned
}, (some: object) => { //this should be saved to file e.g. Som_page_example1_test
    it("Some page example #1")
  expect(some).to.deepEqual({
      code: "here",
  }))
})}
qqq
`