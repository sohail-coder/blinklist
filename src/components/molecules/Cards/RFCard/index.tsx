import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import CustomTypo from "../../../atoms/CustomTypo";
import { customStyles } from "../../../../theme/mainTheme";
import IconWithText from "../../IconWithText/Index";
import Buttons from "../../../atoms/Buttons/Buttons";
import { BookInfo } from "../../../organisms/FunctionalGrid";

export interface CardsProps extends BookInfo {
  // cat: string;
  handleClick: (id: number, finish: boolean, cat: string) => void;
}

const index = (props: CardsProps) => {
  const classes = customStyles();
  return (
    <Card className={classes.CardHead} data-testid="RF-Card">
      <CardMedia
        component="img"
        alt="Card-image"
        height="292px"
        width="294.1px"
        image={props.imgsrc}
      />

      <CardContent>
        <CustomTypo
          variant="subtitle1"
          component="div"
          children={props.bookName}
          className={classes.bookTitle}
        />

        <CustomTypo
          variant="body1"
          component="div"
          children={props.authorName}
          className={classes.bookAuthor}
        />
        <div style={{ display: "flex", columnGap: "44px" }}>
          <IconWithText
            Path={props.icon1}
            text={props.time}
            ColGap="5.67px"
            className={classes.timerIcon}
          />

          <IconWithText
            Path={props.icon2}
            text={props.nReads}
            ColGap="5px"
            className={classes.personIcons}
          />
        </div>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "center",
          mb: "12px",
          padding: "0px",
          height: "20px",
        }}
      >
        <div>
          {props.finished ? (
            <Buttons
              variant="text"
              onClick={() =>
                props.handleClick(props.id, props.finished, props.cat)
              }
            >
              <CustomTypo
                variant="body1"
                component="div"
                children="Read again"
                className={classes.cardReadagain}
              />
            </Buttons>
          ) : (
            <Buttons
              variant="text"
              onClick={() =>
                props.handleClick(props.id, props.finished, props.cat)
              }
              role="Finished-button"
            >
              <CustomTypo
                variant="body1"
                component="div"
                children="Finished"
                className={classes.finished}
              />
            </Buttons>
          )}
        </div>
      </CardActions>
      <div>
        {props.finished ? (
          <>
            <Grid
              item
              xs={12}
              sx={{ backgroundColor: "#DFE8F6", height: "15px" }}
            />
          </>
        ) : (
          <Grid container direction="row">
            <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
            <Grid
              item
              xs={8}
              sx={{
                background: "#F1F6F4",
                border: "1px solid #E1ECFC",
                height: "15px",
              }}
            />
          </Grid>
        )}
      </div>
    </Card>
  );
};

export default index;
