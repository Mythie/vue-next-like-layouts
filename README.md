# Layouts in a SFC project

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mythie/vue-next-like-layouts/tree/sfc)

When using Vue with SFC we are required to make a few changes from the code provided in the [Next layouts documentation](https://nextjs.org/docs/basic-features/layouts).

Notably, we use a `layout` property that references the layout component rather than a `getLayout` method which renders a set of `VNodes`. This is required to simplify things when using SFCs as we can't add SFC syntax as freely as we can add JSX syntax.

Using the code provided within this repository we can now create new pages which define their layouts by defining a static `layout` property on the page component which contains a reference to the desired layout component. 

This also gives us the benefit of lazy-loading layouts as we need them by chunking our import within the router as can be seen in `src/router/index.ts`.