import SingleLibCard from "./index";
import bringyourhuman from "../../../../assets/BookCovers/bringyourhumantowork.png";
import Person from "../../../../assets/Image/Person.png";
import Time from "../../../../assets/Image/Time.png";

export default {
  title: "organisms/Card/LibCard",
  component: SingleLibCard,
};

export const card = () => {
  return (
    <SingleLibCard
      cat="TrendingBlinks"
      handleClick={() => {
        console.log("Button clicked");
      }}
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
