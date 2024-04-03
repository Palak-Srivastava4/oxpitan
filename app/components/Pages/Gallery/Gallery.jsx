import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import { ImageData, ImageData1, ImageData2 } from "../data";

const Gallery = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Gallery</div>
        </Styled.Contact>
      </Styled.BreadCrumb>
      <div className="container" style={{marginTop:"70px"}}>
        <Styled.Pictures>
          {ImageData?.map((item, index) => {
            return (
              <Styled.Images>
                <Image src={item.img} />
              </Styled.Images>
            );
          })}
        </Styled.Pictures>
        <Styled.Pictures>
          {ImageData1?.map((item, index) => {
            return (
              <Styled.Images>
                <Image src={item.img} />
              </Styled.Images>
            );
          })}
        </Styled.Pictures>
        <Styled.Pictures>
          {ImageData2?.map((item, index) => {
            return (
              <Styled.Images>
                <Image src={item.img} />
              </Styled.Images>
            );
          })}
        </Styled.Pictures>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
