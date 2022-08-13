import { defineComponent, VNode } from "vue";
import OtherLayout from "../layouts/Other";

export const MyOtherPage = defineComponent({
  name: "MyOtherPage",

  setup: () => {
    return () => (
      <div>
        <h1>Other Page</h1>
      </div>
    );
  },
});

MyOtherPage.getLayout = (children: VNode) => (
  <OtherLayout>{children}</OtherLayout>
);

export default MyOtherPage;
