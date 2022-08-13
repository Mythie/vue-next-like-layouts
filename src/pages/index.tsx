import { defineComponent, VNode } from "vue";
import DefaultLayout from "../layouts/Default";

export const IndexPage = defineComponent({
  name: "IndexPage",

  setup: () => {
    return () => (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  },
});

IndexPage.getLayout = (children: VNode) => (
  <DefaultLayout>{children}</DefaultLayout>
)

export default IndexPage;
