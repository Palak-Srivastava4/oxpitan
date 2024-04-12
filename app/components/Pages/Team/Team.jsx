import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import { Volun, Volun2 } from "./data";

const Team = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Our Team</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .our team</Styled.BtnDark>
      </Styled.BreadCrumb>
      <Styled.Team className="container">

      <Styled.VolunteersCards >
            {Volun.map((item) => {
              return (
                <Styled.First backgroundColor={item.color}>
                  <div className="mainDiv">
                      <Image className="image" src={item.img} />           
                    <div style={{ width: "100%" }}>
                      <div className="brownBlock">
                        <div className="mid">
                          <h3 className="title">
                              {item.name}                           
                          </h3>
                          <span className="desig">{item.subName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Styled.First>
              );
            })}
          </Styled.VolunteersCards>         
          
           <Styled.VolunteersCards >
            {Volun2.map((item) => {
              return (
                <Styled.First backgroundColor={item.color}>
                  <div className="mainDiv">
                      <Image className="image" src={item.img} />
                    <div style={{ width: "100%" }}>
                      <div className="brownBlock">
                        <div className="mid">
                          <h3 className="title">
                              {item.name}
                          </h3>
                          <span className="desig">{item.subName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Styled.First>
              );
            })}
          </Styled.VolunteersCards>

      </Styled.Team>
      <Footer />
    </div>
  );
};

export default Team;
