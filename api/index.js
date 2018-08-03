"use strict";
// todo enable
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class PageMeta {
    get isPage() { return true; }
    constructor(page) {
        this.$$ = { page };
    }
}
exports.PageMeta = PageMeta;
class RootMeta {
    constructor() {
        this.isRoot = true;
    }
}
exports.RootMeta = RootMeta;
function cloneToRoot(clone) {
    const root = clone;
    root.META = new RootMeta();
    return root;
}
exports.cloneToRoot = cloneToRoot;
class DocPage {
    constructor() {
        this.META = new PageMeta(this);
    }
}
function traverseRoot(root) {
    Object.keys(root).forEach((key) => {
        if (typeof root[key] === 'string') {
            return new DocPage();
        }
    });
    return root;
}
exports.traverseRoot = traverseRoot;
function docRoot(object) {
    const clone = lodash_1.cloneDeep(object);
    const root = cloneToRoot(clone);
    return traverseRoot(root);
}
exports.docRoot = docRoot;
function rootProxyHandler() {
    return {};
}
exports.rootProxyHandler = rootProxyHandler;
// tslint:disable-next-line:align
function create(object) {
    return docRoot(object);
}
exports.create = create;
create({});
create({ 11: "bar" }); // shld be correct
create({ 11: 1123 }); // shld be incorrect
create({ 11: {
        "ff": {}
    } }); // shld be incorrect
create({ 11: true }); // shld be incorrect (boolean)
create({ 11: () => {
    } }); // shld be incorrect (function)
