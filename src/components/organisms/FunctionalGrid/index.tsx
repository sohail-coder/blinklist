import axios from "axios";
import CardGrid from "../CardsGrid";

export interface BookInfo {
  id: number;
  imgsrc: string;
  bookName: string;
  authorName: string;
  time: string;
  nReads: string;
  icon1: string;
  icon2: string;
  finished: boolean;
  cat: string;
}

interface FunctionalGridProps {
  books: BookInfo[];
  fetchRecords: () => void;
}

const Index = ({ books, fetchRecords }: FunctionalGridProps) => {
  const handleClick = async (id: number, finish: boolean) => {
    const response1 = await axios.patch(
      `http://localhost:8000/booklist/${id}`,
      {
        finished: !finish,
      }
    );
    if (response1.data) {
      fetchRecords();
    }
  };

  return (
    <>
      <CardGrid addtoLib={false} details={books} handleClick={handleClick} />
    </>
  );
};

export default Index;
