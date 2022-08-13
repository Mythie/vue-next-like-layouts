# Next-like Layouts in Vue.js

This repository explores how to introduce [Next-like layouts](https://nextjs.org/docs/basic-features/layouts) into Vue.js avoiding the need for [Nuxt](https://nuxtjs.org) or [Vite Plugin Vue Layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts).

We explore the introduction of layouts in our two main branches:
- [JSX](https://github.com/Mythie/vue-next-like-layouts/tree/jsx) using `getLayout`
- [SFC](https://github.com/Mythie/vue-next-like-layouts/tree/sfc) using `layout`

Using the techniques shown within these branches, we intend to be able to define our layouts on a per route basis without the requirement of wrapping the page content in the layout itself which can be quite brittle.