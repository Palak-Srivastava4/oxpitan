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
        <div>
        <Styled.BtnDark href="">home .our team</Styled.BtnDark>
        </div>
      </Styled.BreadCrumb>
      <Styled.Team className="container">

      <Styled.Cards >
            {Volun.map((item) => {
              return (
                <Styled.First backgroundColor={item.color}>
                  <div className="mainDiv">
                    <div>
                      <Image className="" src={item.img} />
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="brownBlock">
                        <div className="mid">
                          <h3>
                            <a href="" className="title">
                              {item.name}
                            </a>
                          </h3>
                          <span className="desig">{item.subName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Styled.First>
              );
            })}
          </Styled.Cards>         
          
           <Styled.Cards >
            {Volun2.map((item) => {
              return (
                <Styled.First backgroundColor={item.color}>
                  <div className="mainDiv">
                    <div>
                      <Image className="" src={item.img} />
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="brownBlock">
                        <div className="mid">
                          <h3>
                            <a href="" className="title">
                              {item.name}
                            </a>
                          </h3>
                          <span className="desig">{item.subName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Styled.First>
              );
            })}
          </Styled.Cards>

      </Styled.Team>
      <Footer />
    </div>
  );
};

export default Team;
