import Book from "./Book";

export default {
  title: "Organism/Book",
  component: Book,
};
const Template = (args) => <Book {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // bookInfo: {
  title: "Intro to python",
  author: "Sohail Shaik",
  url: "./1.png",
  readTime: "15",
  // },
  isExplore: true,
};
