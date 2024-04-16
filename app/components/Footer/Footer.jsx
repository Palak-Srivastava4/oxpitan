import * as Styled from "./style";
import React from "react";
import footerBg from "../../assets/image/footerBg.svg";
import { Data, icons } from "./data";
import logo1 from "../../assets/image/logo1.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Styled.FooterBackground src={footerBg.src}>
        <Styled.NewsContainer className="container">
          <Styled.MainContainer>
            <div className="newsStay">
              <Image
                src={logo1}
                alt="logo"
                className="img"
                style={{ background: "white" }}
              />
              <Styled.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Styled.Text>
              {/* <h2 className="news">Newsletter</h2>
              <span className="update">stay updated</span> */}
            </div>
            {/* <div className="textItem">
              <input
                type="text"
                placeholder="Email address"
                className="input"
              />
              <Styled.BtnDark href="">subscribe</Styled.BtnDark>

            </div> */}

            {/* <Styled.Blogs>
              {Data?.map((item, index) => {
                return (
                  <div className="indexData">
                    <div className="head">{item.heading}</div>
                    <div className="sub">
                      <div className="subData">{item.subData1}</div>
                      <div className="subData">{item.subData2}</div>
                      <div className="subData">{item.subData3}</div>
                      <div className="subData">{item.subData4}</div>
                      <div>{item.subData5}</div>
                    </div>
                  </div>
                );
              })}
            </Styled.Blogs> */}

            <div className="itemStyle">
              {icons?.map((item) => {
                return (
                  <Styled.BtnBg backgroundColor={item.color}>
                    <div> {item.icon}</div>
                  </Styled.BtnBg>
                );
              })}
            </div>
          </Styled.MainContainer>
        </Styled.NewsContainer>
        <Styled.Copy>
          <div>
            <div className="copy">
              © Copyright 2020 by <a href="">Layerdrops.com</a>
            </div>
          </div>
        </Styled.Copy>
      </Styled.FooterBackground>
    </>
  );
};

export default Footer;
