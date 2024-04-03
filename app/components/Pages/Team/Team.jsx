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
      </Styled.BreadCrumb>
      <Styled.Team className="container">
        <Styled.Cards >
          {Volun.map((item, index) => {
            return (
              <Styled.First>
                <Image src={item.img} />
                <div className="brownBlock" style={{ background: item.color }}>
                  <div className="mid">
                    <h3>
                      <a href="" className="title">
                        {item.name}
                      </a>
                    </h3>
                    <span className="desig">{item.subName}</span>
                  </div>
                </div>
              </Styled.First>
            );
          })}
        </Styled.Cards>
        <Styled.Cards >
        {Volun2.map((item, index) => {
          return (
            <Styled.First>
              <Image src={item.img} />
              <div className="brownBlock" style={{ background: item.color }}>
                <div className="mid">
                  <h3>
                    <a href="" className="title">
                      {item.name}
                    </a>
                  </h3>
                  <span className="desig">{item.subName}</span>
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
