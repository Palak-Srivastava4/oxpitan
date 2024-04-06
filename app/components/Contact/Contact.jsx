import * as Styled from "./style";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import React from "react";
import { icons } from "../Footer/data";



const Contact = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Contact</div>
       
        </Styled.Contact>
       
        <div className="home">
        <Styled.BtnDark href="" backgroundColor={"#E36955"} hover={" #F1AE44"}>HOME . CONTACT</Styled.BtnDark>
        </div>
      </Styled.BreadCrumb>
      <div className="container">
        <Styled.FormSection>
          <Styled.Touch>
            <div className="touch">
              <div className="touchwith">Get in Touch With Us</div>
              <p className="message">Write a message</p>
              <p className="aliq">
                Aliq is notm hendr erit a augue insu image pellen tes que id
                erat quis sollicitud. Lorem ipsum is simply free text dolor sit
                amet, consectetur adipiscing ullam blandit hendrerit faucibus
                suspendisse.
              </p>
              <div className="itemStyle">
                {icons?.map((item, index) => {
                  return (
                    <>
                
                    <Styled.BtnBG className="icon" padding={"0 10px 0 10px"} backgroundColor={item.color}>
                    <div key={index}> {item.icon}</div>
                  </Styled.BtnBG>
                  </>
                  );
                })}
              </div>
            </div>
          </Styled.Touch>
          <Styled.Form>
            <div className="mainForm">
              <Styled.MainForm>
                <div className="nameAddress">
                  <Styled.Input placeholder="Full Name" type="text" />
                  <Styled.Input placeholder="Email Address" type="text" />
                </div>
                <Styled.InputLocation
                  placeholder="Phone Number"
                  type="number"
                />
                <Styled.TextArea placeholder="Write a message" type="text" />
                <Styled.BtnDark href="" backgroundColor={"#F1AE44"} hover={"#E36955"}>Send Message</Styled.BtnDark>
                {/*  #E36955 */}
              </Styled.MainForm>
            </div>
          </Styled.Form>
        </Styled.FormSection>
        <Styled.AboutSectionBox>
          <Styled.BtnBG className="about" padding={"0px 30px 0px 35px"} backgroundColor={"#50bac3"}>
            <div>About</div><br/>
            <div>
              Lorem ipsum is simply free<br/> text dolor sit amet, duise<br/> consectetur
              ullam blandit
            </div>
          </Styled.BtnBG>
          <Styled.BtnBG className="address" padding={"0px 30px 0px 35px"} backgroundColor={"#e36955"}>
            <div>Address</div><br/>
            <div>
              660 broklyn street , 88 new <br/>york, United states of <br/>america
            </div>
          </Styled.BtnBG>
          <Styled.BtnBG className="contact" padding={"0px 30px 0px 35px"} backgroundColor={"#f1ae44"}>
            <div>Contact</div><br/>
            <div>
              needhelp@oxpitan.com
              <br />
              666 888 000
            </div>
          </Styled.BtnBG>
        </Styled.AboutSectionBox>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
