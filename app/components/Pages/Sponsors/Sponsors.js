import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import { sponsorsData } from "../data";
import * as CommonStyled from "../../commonStyle"

const Sponsors = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
      <CommonStyled.Container>
        <Styled.Contact className="container">
          <div className="head">Sponsors</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .Sponsors</Styled.BtnDark>
        </CommonStyled.Container>
      </Styled.BreadCrumb>
      <Styled.Team>
        {sponsorsData?.map((item) => {
          return (
            <>
              <Styled.SponsorsData>
                <Styled.EvantoImg>
                  <Styled.BtnBg backgroundColor={item.color}>
                        <div className="img">  <Image src={item.img} /></div>
                  </Styled.BtnBg>
                </Styled.EvantoImg>
                <Styled.CompanyName>
                  <div className="name">{item.companyName}</div>
                  <div className="aut">{item.country}</div>
                  <p className="para">{item.para}</p>
                </Styled.CompanyName>
              </Styled.SponsorsData>
              <Styled.Line />
            </>
          );
        })}
      </Styled.Team>
      <Footer />
    </div>
  );
};

export default Sponsors;
