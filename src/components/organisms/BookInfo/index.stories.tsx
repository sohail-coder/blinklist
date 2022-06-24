import BookInfo from ".";
import beyondEntrepreneur from "../../../assets/BookCovers/beyondentrepreneurship.png";

export default {
  title: "organisms/BookInfo",
  component: BookInfo,
};

export const card = () => {
  return (
    <BookInfo
      cat="TrendingBlinks"
      bookName="Beyond Entrepreneur 2.0"
      authorName="By Jim Collins and Bill Lazier"
      imgPath={beyondEntrepreneur}
      finish
      id={1}
    />
  );
};
