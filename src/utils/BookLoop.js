import { data } from "../data/data";
import Book from "../components/molecules/Book";
import { Grid } from "@mui/material";
function bookLoop() {
  return (
    <>
      {data.map((element) => {
        return (
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title={element.title}
              author={element.author}
              // isExplore={true}
              readTime={element.readTime}
              url={element.url}
            />
          </Grid>
        );
      })}
    </>
  );
}
export default bookLoop;
