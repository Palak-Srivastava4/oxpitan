import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import { sponsorsData } from "../data";

const Sponsors = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Sponsors</div>
        </Styled.Contact>
      </Styled.BreadCrumb>
      <Styled.Team className="container">
        {sponsorsData?.map((item, index) => {
          return (
            <>
              <Styled.SponsorsData>
                <Styled.Evanto>
                  <div className="maindiv" style={{ background: item.color }}>
                    <div
                      className="BtnDonate"
                      style={{ background: item.color }}
                    >
                      <Image src={item.img} className="btn" />
                    </div>
                  </div>
                </Styled.Evanto>
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
