import * as React from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import { customStyles } from "./theme/index";
import timer from "../../assets/timer.jpg";
import person from "../../assets/person.jpg";

import "./styles/Bookcard.css";

interface Props {
  id: number;
  image: string;
  title: string;
  author: string;
  time: string;
  read: string;
  isExplore: string;
  func: ({ id }: Id) => void;
}

interface Id {
  id: number;
}

export default function Cardhook({
  id,
  title,
  author,
  image,
  time,
  read,
  isExplore,
  func,
}: Props) {
  // const classes = customStyles();

  return (
    <Card
      className="card"
      style={{
        width: "284px",
        height: "466px",
        // background: "#F1F6F4",
        border: "1px solid #E1ECFC",
        borderRadius: "8px",
      }}
    >
      <CardMedia
        className="image"
        component="img"
        height="292"
        image={image}
        alt="green iguana"
      />
      <CardContent className="content">
        <Typography
          variant="subtitle1"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "22.63px",
            color: "#03314B",
            marginBottom: "16px",
            fontFamily: "Cera Pro",
            fontStyle: "normal",
          }}
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontWeight: 500,
            color: "#6D787E",
            lineHeight: "20.11px",
            marginBottom: "16px",
          }}
          component="div"
        >
          {author}
        </Typography>
        <Grid container direction="row" spacing={4}>
          <Grid item direction="row" sx={{ display: "flex" }}>
            <Grid item direction="row" className="icon">
              <img src={timer} alt="timer" width="16.67px" height="16.67px" />
            </Grid>
            <Grid item direction="row">
              <Typography
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17.6px",
                  color: "#6D787E",
                }}
                component="div"
              >
                {time}
              </Typography>
            </Grid>
          </Grid>
          <Grid item direction="row" sx={{ display: "flex" }}>
            <Grid item direction="row">
              <img src={person} alt="timer" width="16.67px" height="16.67px" />
            </Grid>
            <Grid item direction="row">
              <Typography
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17.6px",
                  color: "#6D787E",
                }}
                component="div"
              >
                {read}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      {/* <CardActions className="box"> */}
      {/* <Typography>{`hello`}</Typography> */}

      {isExplore === "2" ? (
        <Button
          className="btn-box"
          variant="outlined"
          sx={{
            ":hover": {
              bgcolor: "#0365F2",
              color: "white",
            },
          }}
          onClick={() => func({ id })}
        >
          <Typography variant="body2">{"Finished"}</Typography>
        </Button>
      ) : (
        <Button
          className="btn-box"
          variant="outlined"
          sx={{
            ":hover": {
              bgcolor: "#0365F2",
              color: "white",
            },
          }}
          onClick={() => func({ id })}
        >
          <Typography variant="body2" component="div">
            {"Read Again"}
          </Typography>
        </Button>
      )}
      {/* </CardActions> */}
    </Card>
  );
}
