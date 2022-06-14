import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import Template from "../../templates/Template1";
import FunctionalGrid, { BookInfo } from "../../organisms/FunctionalGrid";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme/mainTheme";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const Index = () => {
  const classes = customStyles();
  // new
  const [value, setValue] = useState("1");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const fetchRecords = () => {
  //   axios.get("http://localhost:3001/booklist").then((res) => {
  //     const newBooks = res.data;
  //     setBooks(newBooks);
  //     console.log(books);
  //   });
  // };

  const [books, setBooks] = useState<BookInfo[]>([
    {
      id: 1,
      finished: true,
      imgsrc: "/BookCovers/bringyourhumantowork.png",
      bookName: "Bring Your Human To Work",
      authorName: "Eric Keswin",
      time: "13-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
    },
    {
      id: 2,
      finished: false,
      imgsrc: "/BookCovers/employee_to_entrepreneur.jpg",
      bookName: "Employee to Entrepreneur",
      authorName: "Steve Glaveski",
      time: "15-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
    },
  ]);
  // useEffect(() => {
  //   fetchRecords();
  // }, []);

  return (
    <Template
      Header={<Header />}
      Content={
        <>
          <CustomTypo
            variant="heading"
            component="div"
            children="My Library"
            className={classes.myLibrary}
          />

          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab
                    label="Currently reading"
                    value="1"
                    sx={{
                      width: "304px",
                      textTransform: "none",
                      alignItems: "flex-start",
                    }}
                  />
                  <Tab
                    label="Finished"
                    value="2"
                    sx={{
                      width: "304px",
                      textTransform: "none",
                      alignItems: "flex-start",
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ mt: "25px", p: "0" }}>
                <FunctionalGrid books={books.filter((x) => !x.finished)} />
              </TabPanel>
              <TabPanel value="2" sx={{ mt: "25px", p: "0" }}>
                <FunctionalGrid books={books.filter((x) => x.finished)} />
              </TabPanel>
            </TabContext>
          </Box>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Index;
