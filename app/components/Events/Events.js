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
      </Styled.BreadCrumb>
      <div className="container">
      <Styled.Events >
      {eventData?.map((item, index)=>{
        return <Styled.Card>
        <div className="imgDate">
        <Image src={item.img}/>
        <div className="date" style={{ background: item.color }}>
        <span className="today">
        {item.today}
        </span>
        <span className="month">
        {item.month}
        </span>
      </div>
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
        <Image src={item.img}/>
        <div className="date" style={{ background: item.color }}>
        <span className="today">
        {item.today}
        </span>
        <span className="month">
        {item.month}
        </span>
      </div>
        </div>
        <div className="heading">
        <a href="" className="anchor" >{item.head}</a>
        <p className="data" style={{color:item.color}}>{item.data}</p>
        </div>
  
        </Styled.Card>  
      })}
      
      </Styled.Events>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
