import { defineComponent } from "vue";

export const DefaultLayout = defineComponent({
  name: "DefaultLayout",

  setup: (_props, {slots}) => {
    return () => (
      <div class="h-screen w-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 class="mb-3 text-4xl font-black">Default Layout:</h1>

        {slots.default?.()}
      </div>
    );
  },
});

export default DefaultLayout;
