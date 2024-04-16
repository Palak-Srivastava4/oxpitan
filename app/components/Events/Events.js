import * as Styled from "./style";
import Footer from "../Footer/Footer";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import React from "react";
import { eventData, eventData2 } from "./data";

const Events = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Events</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .events</Styled.BtnDark>
      </Styled.BreadCrumb>
        <Styled.EventList>
      <Styled.Events >
      {eventData?.map((item)=>{
        return <Styled.Card>
        <div className="imgDate">
        <Styled.BtnStatic backgroundColor={item.color}>
        <div className="date" >
        <span className="today">
        {item.today}
        </span>
        <span className="month">
        {item.month}
        </span>
      </div>
      </Styled.BtnStatic>
        <Image className="image" src={item.img}/>
        </div>
        <div className="heading">
        <a href="" className="anchor" >{item.head}</a>
        <p className="data" style={{color:item.color}}>{item.data}</p>
        </div>
  
        </Styled.Card>  
      })}
       
      </Styled.Events>
      <Styled.Events >
      {eventData2?.map((item, index)=>{
        return <Styled.Card>
        <div className="imgDate">
        <Styled.BtnStatic backgroundColor={item.color}>
        <div className="date" >
        <span className="today">
        {item.today}
        </span>
        <span className="month">
        {item.month}
        </span>
      </div>
      </Styled.BtnStatic>
        <Image className="image" src={item.img}/>
       
        </div>
        <div className="heading">
        <a href="" className="anchor" >{item.head}</a>
        <p className="data" style={{color:item.color}}>{item.data}</p>
        </div>
  
        </Styled.Card>  
      })}
      
      </Styled.Events>
      </Styled.EventList>
     
      <Footer />
    </div>
  );
};

export default Events;
