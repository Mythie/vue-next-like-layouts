import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

import "./App.css";
import { AppView } from "./AppView";

export const App = defineComponent({
  name: "App",

  setup: () => {
    return () => (
      <div>
        <AppView />

        <div class="fixed bottom-0 left-0 w-full">
          <div class="flex w-full justify-center items-center gap-x-4 py-3">
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/my-other-page">Other Page</RouterLink> |
            <RouterLink to="/my-page-without-a-layout">
              Page Without Layout
            </RouterLink>
          </div>
        </div>
      </div>
    );
  },
});
