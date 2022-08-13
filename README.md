# Layouts in a JSX project

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mythie/vue-next-like-layouts/tree/jsx)

When using Vue with JSX we can almost use the code provided in the [Next layouts documentation](https://nextjs.org/docs/basic-features/layouts) verbatim with a few minor changes to support Vue concepts over React. 

Notably, we augment the `<RouterView />` component rather than create a `_app.js` file as that is Next specific.

Using the code provided within this repository we can now create new pages which define their layouts by defining a static `getLayout` method on the page component which returns a set of `VNodes`. 

This also gives us the benefit of lazy-loading layouts as we need them by chunking our import within the router as can be seen in `src/router/index.ts`.