import * as Styled from "./style";
import Footer from "../Footer/Footer";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import React from "react";
import blogimg1 from "../../assets/image/blogimg1.svg";
import { newsData, newsData1, newsData2 } from "./data";

const News = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">News</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .news</Styled.BtnDark>
      </Styled.BreadCrumb>
      <Styled.NewsSections className="container">
        <Styled.Sections>
          {newsData?.map((item) => {
            return (
              <Styled.News>
              <div className="imgDate">
              <Image src={item.img} />
              <div className="date" style={{ background: item.color }}>
                {item.date}
              </div>
              </div>
                <Styled.BlogData>
                  <h3>
                    <a href="">{item.refrence}</a>
                  </h3>
                  <div className="son">
                    <p>{item.name}</p>
                    <p>{item.comm}</p>
                  </div>

                  <p className="para">{item.para}</p>
                </Styled.BlogData>
                <div>
                  <div className="BtnBlog">
                    <span className="btn">{item.btn}</span>
                  </div>
                </div>
              </Styled.News>
            );
          })}
        </Styled.Sections>
        <Styled.Sections>
          {newsData1?.map((item) => {
            return (
              <Styled.News>
              <div className="imgDate">
              <Image src={item.img} />
              <div className="date" style={{ background: item.color }}>
                {item.date}
              </div>
              </div>
                <Styled.BlogData>
                  <h3>
                    <a href="">{item.refrence}</a>
                  </h3>
                  <div className="son">
                    <p>{item.name}</p>
                    <p>{item.comm}</p>
                  </div>

                  <p className="para">{item.para}</p>
                </Styled.BlogData>
                  <div className="BtnBlog">
                    <span className="btn">{item.btn}</span>
                  </div>
              </Styled.News>
            );
          })}
        </Styled.Sections>
        <Styled.Sections>
          {newsData2?.map((item) => {
            return (
              <Styled.News>
                <div className="imgDate">
                  <Image src={item.img} />
                  <div className="date" style={{ background: item.color }}>
                    {item.date}
                  </div>
                </div>
                <Styled.BlogData>
                  <h3>
                    <a href="">{item.refrence}</a>
                  </h3>
                  <div className="son">
                    <p>{item.name}</p>
                    <p>{item.comm}</p>
                  </div>

                  <p className="para">{item.para}</p>
                </Styled.BlogData>
                <div>
                  <div className="BtnBlog">
                    <span className="btn">{item.btn}</span>
                  </div>
                </div>
              </Styled.News>
            );
          })}
        </Styled.Sections>
      </Styled.NewsSections>
      <Footer />
    </div>
  );
};

export default News;
