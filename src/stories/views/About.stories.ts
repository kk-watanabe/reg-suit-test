import About from "@/views/About.vue";

export default {
  title: "views/About",
  component: About
};

const Template = () => ({
  components: { About },
  template: `<About />`
});

export const Default = Template.bind({});
