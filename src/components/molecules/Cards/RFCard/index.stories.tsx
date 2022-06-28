import SingleCard from "./index";
import bringyourhuman from "../../../../assets/BookCovers/beyondentrepreneurship.png";
import Person from "../../../../assets/person.jpg";
import Time from "../../../../assets/Time.png";

export default {
  title: "organisms/Card/SimpleCard",
  component: SingleCard,
};

export const card = () => {
  return (
    <SingleCard
      cat="Trending Blinks"
      handleClick={() => {
        console.log("Button Clicked");
      }}
      id={0}
      finished={false}
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
