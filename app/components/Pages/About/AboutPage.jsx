import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import about from "../../../assets/image/about.svg";
import aboutPage2 from "../../../assets/image/aboutPage2.svg";
import mixerBg2 from "../../../assets/image/mixerBg2.svg";
import { Volun, para } from "./data";

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">About</div>
        </Styled.Contact>
        <div>
        <Styled.BtnDark href="">home .about</Styled.BtnDark>
        </div>
      </Styled.BreadCrumb>
      <div className="container">
        <Styled.About>
          <Image src={about} />
        </Styled.About>
        <Styled.Discover>
          <Styled.Oxpitan>
            <div>
              {" "}
              <Image src={aboutPage2} />
            </div>
          </Styled.Oxpitan>
          <Styled.Agency>
            <div className="discover">Discover About Oxpitan</div>
            <div className="profit">learn about non profit agency</div>
            <p className="elit">
              Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien
              nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa
              fringilla leo orcium dolors sit amet elit magnis amet ultrices
              lorem ipsum is simply free text purusrfed aliquet. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus. penatibus et
              magnis dis parturient montes, nascetur ridiculus.
            </p>
          </Styled.Agency>
        </Styled.Discover>
      </div>

      
      <Styled.FingerPrints src={mixerBg2.src}>
            <Styled.Finger>
              <div className="lives">
                Our fingerprints on the lives we touch never fade
              </div>
              <Styled.DonationBtnCenter>
                <Styled.Btn href="">Start Donation</Styled.Btn>
              </Styled.DonationBtnCenter>
              {/* <span className="btn">Start Donation</span> */}

            </Styled.Finger>
          </Styled.FingerPrints>

          
          <Styled.Latest>
            <div className="container latest">
              <h2 className="cause">Our Volunteers</h2>
              <p className="help">meet profesionals</p>
            </div>
          </Styled.Latest>
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


<Styled.Latest>
            <div className="container latest">
              <div className="bgClr"></div>
              <h2 className="cause">
                We Believe that We can Save More Lifes with you
              </h2>
              <p className="help">help us now</p>
            </div>
          </Styled.Latest>
          <div className="beliveCards">
            <Styled.Cards>
              

              {para?.map((item, index) => {
                return (
                  <>
                  <div className="belive">
                  <div className="icon">{item.icons}</div>
                    <div key={index} className="headText">
                      <h5 className="head">{item.head}</h5>
                      <p className="textPara">{item.text}</p>
                    </div>
                    </div>
                  </>
                );
              })}
              
            </Styled.Cards>
            <Styled.BtnDark className="center" href="">donate now</Styled.BtnDark>
          </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
