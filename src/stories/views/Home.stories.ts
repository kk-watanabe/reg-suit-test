import Home from "@/views/Home.vue";

export default {
  title: "views/Home",
  component: Home
};

const Template = () => ({
  components: { Home },
  template: `<Home />`
});

export const Default = Template.bind({});
