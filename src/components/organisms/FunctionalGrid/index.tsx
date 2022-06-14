import React from "react";
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
}

interface FunctionalGridProps {
  books: BookInfo[];
  // fetchRecords: () => void;
}

const Index = ({ books }: FunctionalGridProps) => {
  return <div></div>;
};

export default Index;
