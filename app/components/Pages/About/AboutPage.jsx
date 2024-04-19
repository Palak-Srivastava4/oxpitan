import React from "react";
import * as Styled from "../style";
import * as CommonStyled from "../../commonStyle";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";

import about from "../../../assets/image/about.svg";
import aboutPage2 from "../../../assets/image/aboutPage2.svg";
import mixerBg2 from "../../../assets/image/mixerBg2.svg";
import { Volun, para, questions, evanto, Data } from "./data";
import faq from "../../../assets/image/faq.jpg";
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlinePlus } from "react-icons/ai";

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb >
        <CommonStyled.Container>
          <Styled.Contact >
            <div className="head">About</div>
          </Styled.Contact>
          <Styled.BtnDark href="">home .about</Styled.BtnDark>
        </CommonStyled.Container>
      </Styled.BreadCrumb>
      <div style={{width:"100%"}} >
        <Styled.About className="container">
          <Image className="aboutimg" src={about} />
        </Styled.About>
        <Styled.Discover className="container">
          <Styled.Oxpitan>
            <div>
              {" "}
              <Image className="image" src={aboutPage2} />
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
             

            </Styled.Finger>
          </Styled.FingerPrints>

          
          <Styled.Latest>
            <div className="container latest">
              <h2 className="cause">Our Volunteers</h2>
              <p className="help">meet profesionals</p>
            </div>
          </Styled.Latest>
          <Styled.VolunteersCards >
            {Volun.map((item) => {
              return (
                <Styled.First backgroundColor={item.color}>
                  <div className="mainDiv">
                    <div>
                      <Image className="image" src={item.img} />
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
          </Styled.VolunteersCards>

<Styled.FAQ >
<Styled.Heading>
            <div className="container latest">
              <h2 className="head">Have any Question?</h2>
              <p className="subhead">FREQUENTLY ASKED QUESTIONS</p>
              <Image className="faqimg" src={faq}></Image>
            </div>
          </Styled.Heading>
          <Styled.Ques>
          <Accordion defaultActiveKey="-1" bsPrefix="mt=3">
            {questions?.map((q)=>{
              return (<Accordion.Item eventKey={`${q.id}`}>
                <Styled.Head>
              <Accordion.Header className="headerBg" bsPrefix="mt=3 bg-white">
                <div className="headingChanges" style={{ display: "flex", width: "100%", textAlign: "left", alignItems: "center"}}><h3>{q.ques}</h3> 
                <div className="icon-right"> <AiOutlinePlus /></div>
                </div>
                </Accordion.Header>
              </Styled.Head>
              <Styled.para>
              <Accordion.Body bsPrefix="bg-white">
             <p className="accordion-body" > {q.ans} </p>
              </Accordion.Body> 
              </Styled.para>
            </Accordion.Item>)
            })}
            
        </Accordion>
          </Styled.Ques>
</Styled.FAQ>

<Styled.Latest>
            <div className="container latest">
              <div className="bgClr"></div>
              <h2 className="cause">
                We Believe that We can Save More Lifes with you
              </h2>
              <p className="help">help us now</p>
            </div>
          </Styled.Latest>
         
          <div>
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
            <Styled.BtnDon>
            <Styled.BtnDarkCenter className="btnCenter" href="">donate now</Styled.BtnDarkCenter>
            </Styled.BtnDon>
          </div>
        

          <Styled.Evanto>
            {evanto.map((item) => {
              return <Image src={item.imgs} />;
            })}
          </Styled.Evanto>


      <Footer />
    </div>


  );
};

export default AboutPage;
