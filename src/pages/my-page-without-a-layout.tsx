import { defineComponent } from "vue";

export const MyPageWithoutALayoutPage = defineComponent({
  name: "MyPageWithoutALayoutPage",

  setup: () => {
    return () => (
      <div>
        <h1>My page without a layout</h1>
      </div>
    );
  },
});

export default MyPageWithoutALayoutPage;
