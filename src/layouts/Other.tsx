import { defineComponent } from "vue";

export const OtherLayout = defineComponent({
  name: "OtherLayout",

  setup: (_props, {slots}) => {
    return () => (
      <div class="h-screen w-screen bg-lime-300 flex flex-col items-center justify-center">
        <h1 class="mb-3 text-4xl font-black text-purple-400">Other Layout:</h1>

        {slots.default?.()}
      </div>
    );
  },
});

export default OtherLayout;
