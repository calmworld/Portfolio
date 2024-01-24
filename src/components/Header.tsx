import React from 'react'
import { Slide } from "@mui/material";

export default function Header() {
  return (
    <div className='header'>
      <div className='header-img'></div>
      <Slide direction='down' in={true} timeout={{ enter: 1000 }}>
        <div className='header-text'>
          <h1 className='fancy'>Sarah Alhuriz</h1>
          <h2>Full Stack Software Engineer</h2>
        </div>
      </Slide>
    </div>
  );
}
