import React, { useState } from "react";
import * as Styled from "./style"
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
    const[colse,setClose]=useState(false)
    const handleClose=()=>{
        setClose(true)
    }
  return (
    <>{colse?"":""}
      <Styled.MainContainer style={{background:"black",color:"white" ,width:"25%"}}>
      <Styled.CrossIcon ><RxCross2 className="cross" onClick={handleClose}/></Styled.CrossIcon>
        <ul style={{fontSize:"25px",textDecoration: "none"}}>
         Home
        </ul>
        <ul>
          <li>Home 1</li>
          <li>Home 2</li> 
        </ul>
        <ul style={{fontSize:"25px"}}>
          Causes
        </ul>
        <ul>
          <li>Causes Detail</li>
          <li>Donate Now</li>
        </ul>
        <ul style={{fontSize:"25px"}}>
         Event
        </ul>
        <ul>
          <li>Event</li>
          <li>Event Detail</li>
        </ul>
        <ul  style={{fontSize:"25px"}}>
          News
        </ul>
        <ul>
          <li>News</li>
          <li>News Detail</li>
        </ul>
        <ul style={{fontSize:"25px"}}>
          Pages
        </ul>
        <ul>
          <li>About</li>
          <li>Gallery</li>
          <li>Welcome to Volunteer</li>
          <li>Our Team</li>
          <li>Sponsors</li>
        </ul>
        <ul style={{fontSize:"25px"}}>Contact</ul>
      </Styled.MainContainer>
    </>
  );
};
export default Sidebar;