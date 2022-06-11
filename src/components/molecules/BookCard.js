import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import "./styles/Bookcard.css";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
// interface typos{
//   isExplore:boolean;
//   bookInfo:{
//     title:string;
//     author:string;
//     readTime:string;
//     readersCount:string;
//     url:string
//   }
// }

export default function BookCard({
  bookInfo: { title, author, readTime, readersCount, url },
  isExplore,
}) {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          image={url}
          alt="bring your human to work image"
        />
        <CardContent className="content">
          <Grid container>
            <Grid item xs={12}>
              <Typography
                varient="title"
                style={{
                  fontWeight: 700,
                  // fontFamily: "Cera Pro",
                  position: "relative",
                  width: "225px",
                  height: "23px",
                  left: "1px",

                  fontSize: "18px",
                  lineHeight: "23px",
                  color: "#03314b",

                  order: 0,
                  flexGrow: 0,
                }}
                component="div"
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                className="author"
                style={{ left: "1px" }}
              >
                {author}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                position: "relative",
                top: "28px",
                left: "-3.5px",
                height: "1px",
              }}
            >
              <AccessTimeIcon
                style={{ position: "absolute", height: "20px", top: "2px" }}
                className="icon"
              />
              <Typography
                style={{
                  position: "relative",
                  left: "26px",
                  fontFamily: "PT Sans",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "22px",
                  top: "1.5px",
                  color: "#3A4649",
                  flex: "none",
                  order: 1,
                  flexGrow: "0",
                }}
                // className="stat"
              >
                {`${readTime}-mins read`}
              </Typography>
            </Grid>

            {/* 
            <Grid
              container
              spacing={1}
              xs={6}
              direction="row"
              alignItems="center"
              justifyContent="center"
            > */}
            {/* <Grid container xs={6} direction="column"> */}
            {/* <Grid item xs={1}>
              <AccessTimeIcon />
            </Grid> */}
            {/* <Grid item style={{ display: "flex", flexDirection: "column" }}>
              <AccessTimeIcon />
              <Typography variant="body2" className="author" startI>
                10 min read
              </Typography>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid> */}
            {/* </Grid> */}
          </Grid>
        </CardContent>
        <div className="box">
          <Button
            className="btn-box"
            variant="outlined"
            sx={{
              ":hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
            startIcon={isExplore ? <AddIcon /> : <DoneIcon />}
            // style={{ width: "300px", height: "52px" }}
            onClick={() =>
              alert("Added to library\nRedirecting to My Library...")
            }
          >
            {isExplore ? `Add to library` : `Finished`}
          </Button>
        </div>

        {/* <CardActions className="btn-box"> */}
        {/* <span onClick={() => alert("hello")}>Hello</span> */}

        {/* </CardActions> */}
      </CardActionArea>
    </Card>
  );
}

// export default BookCard;
