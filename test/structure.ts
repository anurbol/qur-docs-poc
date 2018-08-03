import { create, PageMeta, RootMeta } from "../api";
import { expect } from "chai"

it("correctly determines a root", () => {
    const docs = create({})

    expect(docs.META instanceof RootMeta).to.equal(true)
    expect(docs.META.isRoot).to.equal(true)
})

it("correctly determines a root page", () => {
    const docs = create({
        "This is a page title": `some page content`,
    })

    expect(docs["This is a page title"].META instanceof PageMeta).to.equal(true, "META is not instance of PageMeta")
    expect(docs["This is a page title"].META.isPage).to.equal(true, "META.isPage is not true")
})

it("correctly determines a category", () => {
    
})

it("correctly determines a nested category", () => {
    
})

it("correctly determines a nested page", () => {
    
})

it("correctly determines a section", () => {
    
})

it("correctly determines a nested section", () => {
    
})
// etc
