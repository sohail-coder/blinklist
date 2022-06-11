import React from 'react'
import { Avatar } from '@mui/material';



interface letter{
  text:string
}

const index = (props:letter) => {
  return (
    <Avatar sx={{width:'40px', height:'40px',bgcolor:'#69A6E3'}}>
        {props.text}
    </Avatar>
  )
}

export default index