import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme/mainTheme";
import IconWithText from "../../molecules/IconWithText/Index";
import Time from "../../../assets/timer.jpg";
import Buttons from "../../atoms/Buttons/Buttons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
interface BookInfoProps {
  imgPath: string;
  authorName: string;
  bookName: string;
  finish: boolean;
  id: number;
  cat: string;
}
const Index = (props: BookInfoProps) => {
  const classes = customStyles();
  const [click, setClicked] = useState<boolean>();

  useEffect(() => {
    setClicked(props.finish);
    finished();
  }, [props.finish]);

  const finished = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/booklist/${props.id}`
      );
      setClicked(response.data.finished);
    } catch (error) {
      console.clear();
    }
  };

  const handleClick = async () => {
    console.log("patch method into the cats directly");

    const response1 = await axios.patch(
      `http://localhost:8000/${props.cat}/${props.id}`,
      {
        finished: !click,
      }
    );
    console.log("patch method into the library directly");

    try {
      await axios.patch(`http://localhost:8000/booklist/${props.id}`, {
        finished: !click,
      });
      setClicked(response1.data.finished);
    } catch (error) {
      console.clear();
      const res = await axios.post(
        `http://localhost:8000/booklist/`,
        response1.data
      );
      setClicked(res.data.finished);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div role="bookInfo">
      <CustomTypo
        variant="body2"
        component="div"
        children="Get the key ideas from"
        className={classes.bookInfo}
      />

      <Grid
        container
        columnGap={"125px"}
        mt={"40px"}
        sx={{ alignItems: "flex-start" }}
        wrap="nowrap"
      >
        <Grid
          item
          container
          direction="column"
          rowGap={"19px"}
          sx={{ width: "509px" }}
        >
          <Grid item container direction="column" rowGap={"24px"}>
            <Grid item sx={{ height: "45px" }}>
              <CustomTypo
                variant="heading"
                component="div"
                children={props.bookName}
                className={classes.bookInfo}
              />
            </Grid>

            <Grid item sx={{ height: "25px" }}>
              <CustomTypo
                variant="subtitle5"
                component="div"
                children="Turning Your Business into an Enduring Great Company"
                className={classes.bookInfo}
              />
            </Grid>

            <Grid item sx={{ height: "20px" }}>
              <CustomTypo
                variant="body2"
                component="div"
                children={`By ${props.authorName}`}
                className={classes.iconText}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            rowGap={"80px"}
            sx={{ width: "509px" }}
          >
            <Grid item sx={{ height: "24px" }}>
              <IconWithText Path={Time} text="15-minute read" ColGap="7.33px" />
            </Grid>
            <Grid item container columnGap={"24px"}>
              <Grid item>
                <Buttons
                  variant="outlined"
                  className={`${classes.buttonstyle} ${classes.readNowButton}`}
                  onClick={handleClick}
                  disabled={!click ? true : false}
                >
                  Read now
                </Buttons>
              </Grid>

              <Grid item>
                <Buttons
                  variant="text"
                  className={`${classes.buttonstyle} ${classes.finishedReading}`}
                  onClick={handleClick}
                  disabled={click ? true : false}
                >
                  Finished Reading
                </Buttons>
              </Grid>
              <Grid item>
                <Buttons
                  variant="text"
                  className={`${classes.buttonstyle} ${classes.sendToKindle}`}
                  endIcon={<ArrowForwardIcon />}
                >
                  Send to Kindle
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ height: "304px", alignSelf: "stretch" }}>
          <img src={props.imgPath} alt="img" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
