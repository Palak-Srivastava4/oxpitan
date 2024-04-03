import * as Styled from "./style";
import React from "react";
import footerBg from "../../assets/image/footerBg.svg";
import { Data, icons } from "./data";

const Footer = () => {
  return (
    <>
      <Styled.FooterBackground src={footerBg.src}>
        <Styled.NewsContainer className="container">
          <Styled.MainContainer>
            <div className="newsStay">
              <h2 className="news">Newsletter</h2>
              <span className="update">stay updated</span>
            </div>
            <div className="textItem">
              <input
                type="text"
                placeholder="Email address"
                className="input"
              />

              <div className="BtnDonate">
                <span className="btn">Subscribe</span>
              </div>
            </div>

            <Styled.Blogs>
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
            </Styled.Blogs>
            <div className="itemStyle">
              {icons?.map((item, index) => {
                return (
                  <div style={{ background: item.color }} className="colorChng">
                    <div> {item.icon}</div>
                  </div>
                );
              })}
            </div>
          </Styled.MainContainer>
        </Styled.NewsContainer>
        <Styled.Copy>
        <div>
        <div className="copy">© Copyright 2020 by <a href="">Layerdrops.com</a></div>
        </div>
        </Styled.Copy>
      </Styled.FooterBackground>
    </>
  );
};

export default Footer;
