"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
const chai_1 = require("chai");
it("correctly determines a root", () => {
    const docs = api_1.create({});
    chai_1.expect(docs.META instanceof api_1.RootMeta).to.equal(true);
    chai_1.expect(docs.META.isRoot).to.equal(true);
});
it("correctly determines a root page", () => {
    const docs = api_1.create({
        "This is a page title": `some page content`,
    });
    chai_1.expect(docs["This is a page title"].META instanceof api_1.PageMeta).to.equal(true, "META is not instance of PageMeta");
    chai_1.expect(docs["This is a page title"].META.isPage).to.equal(true, "META.isPage is not true");
});
it("correctly determines a category", () => {
});
it("correctly determines a nested category", () => {
});
it("correctly determines a nested page", () => {
});
it("correctly determines a section", () => {
});
it("correctly determines a nested section", () => {
});
// etc
