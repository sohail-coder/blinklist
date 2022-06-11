import { Grid } from "@mui/material";
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

const LibraryGrid = () => {
  return (
    /*<Grid container direction='row'>
    {lib && lib.map((l:Props)=>{
        return <Cardhook title={l.title} id={l.id} author={l.author}
                  read={l.read} time={l.time} image={l.image} isExplore={l.isExplore} key={l.id}/>
    })}

 </Grid>
*/
    <></>
  );
};

export default LibraryGrid;
