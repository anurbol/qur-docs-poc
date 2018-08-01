// todo del this file

import { codeBlock } from "utils" // todo

const foo = `
bar baz
# Foo Bar
${codeBlock(() => {
  const some = {
      code: "here",
  }
})}
qqq
`
