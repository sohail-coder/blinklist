import SingleLibCard from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import bringyourhuman from "../../../../assets/BookCovers/bringyourhumantowork.png";
import { customStyles } from "../../../../theme/mainTheme";
import Person from "../../../../assets/Image/Person.png";
import Time from "../../../../assets/Image/Time.png";

export default {
  title: "organisms/Card/LibCard",
  component: SingleLibCard,
};

export const card = () => {
  const classes = customStyles();
  return (
    <SingleLibCard
      handleClick={() => {}}
      id={0}
      imgsrc={bringyourhuman}
      bookName="Bring Your Human To Work"
      authorName="Eric Keswin"
      time="13-minute read"
      nReads="1.9k reads"
      icon1={Time}
      icon2={Person}
    />
  );
};
