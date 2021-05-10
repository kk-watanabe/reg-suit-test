import HelloWorld from "@/components/HelloWorld.vue";

export default {
  title: "components/HelloWorld",
  component: HelloWorld
};

const Template = () => ({
  components: { HelloWorld },
  template: `<HelloWorld />`
});

export const Default = Template.bind({});
