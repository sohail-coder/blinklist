import { Grid } from "@mui/material";
import { useEffect, useRef } from "react";
import React from "react";
import Card from "../../molecules/NewCard";

interface Props {
  id: number;
  image: string;
  title: string;
  author: string;
  time: string;
  read: string;
  isExplore: string;
}

interface Prop {
  page: string;
  lib: Props[];
  handlelib: (lib: Props[]) => any;
}

interface Id {
  id: number;
}

export default function FinishedGrid({ page, lib, handlelib }: Prop) {
  const Finished = ({ id }: Id) => {
    var newState: Props[];
    newState = lib.map((e) => {
      if (e.id === id) {
        return { ...e, isExplore: "3" };
      }

      return e;
    });

    handlelib(newState);
  };

  const ReadAgain = ({ id }: Id) => {
    var newState: Props[];
    newState = lib.map((e) => {
      if (e.id === id) {
        return { ...e, isExplore: "2" };
      }

      return e;
    });

    handlelib(newState);
  };

  var p = { page };

  console.log(lib);
  return p.page === "3" ? (
    <Grid container direction="row" spacing={2} style={{ width: "1100px" }}>
      {lib.map((l: Props, id) => {
        if (l.isExplore === "3") {
          return (
            <Grid item lg={4}>
              <Card
                title={l.title}
                id={l.id}
                author={l.author}
                read={l.read}
                time={l.time}
                image={l.image}
                isExplore={l.isExplore}
                key={l.id}
                func={ReadAgain}
              />
            </Grid>
          );
        }
      })}
    </Grid>
  ) : (
    <Grid container direction="row" spacing={2} style={{ width: "1100px" }}>
      {lib.map((l: Props, id) => {
        if (l.isExplore === "2") {
          return (
            <Grid item lg={4}>
              <Card
                title={l.title}
                id={l.id}
                author={l.author}
                read={l.read}
                time={l.time}
                image={l.image}
                isExplore={l.isExplore}
                key={l.id}
                func={Finished}
              />
            </Grid>
          );
        }
      })}
    </Grid>
  );
}
