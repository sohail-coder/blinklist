import React from "react";
import RFCard from "../../molecules/Cards/RFCard";
import AddLibCard from "../../molecules/Cards/AddLibCard";
import { Grid } from "@mui/material";

interface CardObjProps {
  handleClick:
    | ((id: number, finish: boolean) => void)
    // | ((id: number, cat: string) => void)
    | ((id: number, finish: boolean, cat: string) => void);
  addtoLib: boolean;
  details: {
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
  }[];
}

const Index = (props: CardObjProps) => {
  return (
    <Grid container spacing={"29px"} data-testid="Card-Grid">
      {props.details.map((cardObj, index) => {
        return (
          <Grid item key={index} lg={4}>
            {props.addtoLib ? (
              <AddLibCard
                handleClick={props.handleClick}
                {...cardObj}
                data-testid="AddLib-Card"
              />
            ) : (
              <RFCard
                handleClick={props.handleClick}
                {...cardObj}
                data-testid="RF-Card"
              />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Index;
