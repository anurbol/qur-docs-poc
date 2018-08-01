"use strict";
const State_Property_vs_State_Value = `
State Properties and State Values are slightly difference concepts
and they also behave a bit differently:
`;
// ??? concatenate
const state = {
    user: undefined,
    setUser(user) {
        this.user = user;
    },
    createUser() {
        return () => {
            this.setUser(new User());
        };
    }
};
!!!!;
if (you)
    are;
curious;
why;
above;
code;
is;
so;
weird;
and;
verbose, please;
!read;
about;
$;
{
    action;
}
and;
$;
{
    side_effect;
}
!!!
    ^  ^  ^ THERE;
MUST;
BE;
some;
syntax;
to;
make;
these;
fast;
notes;
how();
const State_Property = State_Property_vs_State_Value;
const StateValue = State_Property_vs_State_Value; // this is alias
// IMPORTANT: probably markdown-it should be the platform which 
// the doc tool will be based on. I'll have to write plugin to:
// 1. transform variables to constants
// 2. (probably, if markdown-it does not support .js extensions) use .js (.TS???) instead of .md
// - think about .TS extension, with it it can be possible to generate both JS and TS code blocks BUT!!!! JS code blocks will have 
// type hints (popovers)
// IDEA! With doc compiler, because it is written as scripts, we can
// import actual code pieces from actual library (which we document)
// And hence
// - increase actuality of code
// - insert API pieces to docs
// - infer types (probably only if code is in TS)
// - read types (only if code is in TS)
// example:
// on "Action" page, we not only describe Action concept, but also:
// - show "Action" type signature ( () => SideEffect )
// - show example of action from ../examples/Action.ts (or examples dir must be under docs/ ? YES, because examples are part of DOCS CONCERN, BUT BUT BUT opposite approach is also possible)
// NAME???
// 1 qur/docs => QurDocs
// 1 qur/state => QurState
// 1 qur/backend => QurBackend
// IDEA - sandbox, which ready solution to use? probably stackblitz (HAS API)
// use sandbox only in ADVANCED sections! (confuses newbies) (or not do so, bcs experienced devs also exist?)
