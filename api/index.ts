// todo enable
// tslint:disable

import { cloneDeep } from "lodash"

export interface AnyObject {
    [key: string]: any
}

export type ValidInputObject<INPUT extends AnyObject = AnyObject> = {
    [K in keyof INPUT]:
    INPUT[K] extends object ? ValidInputObject<INPUT[K]> :
    INPUT[K] extends string ? string :
    never
}

// todo 
// export class PageMeta {
//     public get isPage() { return true }

//     public $$: {
//         page: DocPage
//     }

//     constructor(page: DocPage) {
//         this.$$ = { page }
//     }
// }

// type DocObject<INPUT extends object> = INPUT & {
//     META: 
// }

// type DocSection<INPUT> = {

// }

// type Doc<INPUT extends object> = {
//     [K in keyof INPUT]: INPUT[K] extends string ?
//     INPUT[K] : INPUT[K]
// }

// type DocRootObjectValue<INPUT extends object> = {
//     [K in keyof INPUT]:
//     INPUT extends object
// }

// type DocRootPage<INPUT extends string> = INPUT & {
//     META: PageMeta,
// }

// type DocRoot<INPUT extends ValidInputObject> = {
//     [K in keyof INPUT]:
//     INPUT[K] extends object ? DocRootObjectValue<INPUT[K]> :
//     INPUT[K] extends string ? DocRootPage<INPUT[K]> :
//     never
// } & {
//     META: RootMeta
// }

// export class RootMeta {
//     public isRoot = true
// }

// export function cloneToRoot<CLONE extends object>(clone: CLONE) {
//     const root: DocRoot<CLONE> = clone as DocRoot<CLONE>
//     root.META = new RootMeta()
//     return root
// }

// class DocPage {
//     public META = new PageMeta(this)
// }

// export function traverseRoot(root: DocRoot) {
//     Object.keys(root).forEach((key: string) => {
//         if (typeof root[key] === 'string') {
//             return new DocPage()
//         }
//     })

//     return root
// }

// export function docRoot<INPUT extends ValidInputObject>(object: INPUT): DocRoot<INPUT> {
//     const clone = cloneDeep(object)
//     const root = cloneToRoot(clone)
//     return traverseRoot(root)
// }

// export function rootProxyHandler() {
//     return {
//         get()
//     }
// }

// // tslint:disable-next-line:align
// export function create<T extends ValidInputObject>(object: T): DocRoot<T> {
//     return docRoot(object)
// }

// create({})
// create({11: "bar"}) // shld be correct
// create({11: 1123}) // shld be incorrect
// create({11: {
//     "ff": {
        
//     }
// }}) // shld be incorrect
// create({11: true}) // shld be incorrect (boolean)
// create({11: () => {
  
// }}) // shld be incorrect (functiond)



const docs = 
{
    "section 1": {}, // h1 heading
    "##section 2": {} // h2 heading
}

const docs2 = 
{
    "##section 1": {}, // h2 heading
    "##section 2": {} // h2 heading
}

const docs3 = 
{
    "###section 1": {}, // h3 heading
    "##section 2": {} // h2 heading
}