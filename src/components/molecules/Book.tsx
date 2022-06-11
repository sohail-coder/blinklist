import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import "./styles/Bookcard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Linear from "../atoms/ProgressBar/Linear";
import Box from "@mui/material/Box";
export type Typos = {
  // isExplore: boolean;
  // bookInfo: {
  id: number;
  title: string;
  author: string;
  read: string;
  time: string;
  readersCount?: string;
  url: string;
  isExplore: string;
  func: ({ id }: Id) => void;
  // };
};
interface Id {
  id: number;
}

const Book = ({
  id,
  title,
  author,
  read,
  time,
  readersCount,
  url,
}: // },

Typos) => {
  const [isExplore, setIsExplore] = React.useState(true);
  // const classes = useStyles();
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
              <Typography variant="subtitle1" component="div">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{author}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                position: "relative",
                top: "28px",
                height: "1px",
              }}
            >
              <AccessTimeIcon
                style={{ position: "absolute", height: "20px", top: "2px" }}
                className="icon"
              />
              <Typography variant="caption">{`${time}-mins read`}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="box">
          {/* <Box> */}
          <Button
            className="btn-box"
            variant="outlined"
            sx={{
              ":hover": {
                bgcolor: "#0365F2",
                color: "white",
              },
            }}
            // startIcon={isExplore && <AddIcon />}
            onClick={() => setIsExplore(!isExplore)}
          >
            {isExplore ? (
              <Typography variant="body2">{"Finished"}</Typography>
            ) : (
              <Typography variant="body2">{"Read Again"}</Typography>
            )}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Book;
