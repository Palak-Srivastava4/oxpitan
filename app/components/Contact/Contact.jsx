import * as Styled from "./style";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import React from "react";
import { icons } from "../Footer/data";
import { contactData } from "./data";
import { BreadCrumb } from "./style";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Contact</div>
        </Styled.Contact>
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
                    <div
                      style={{ background: item.color }}
                      className="colorChng"
                    >
                      <div key={index}> {item.icon}</div>
                    </div>
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

                <div className="BtnDonate">
                  <span className="btn">Send Message</span>
                </div>
              </Styled.MainForm>
            </div>
          </Styled.Form>
        </Styled.FormSection>
        <div>
          <Styled.About>
            {contactData?.map((item, index) => {
              return (
                <Styled.Lorem>
                  <div style={{ background: item.color }} className="detail">
                    <div className="name">{item.name}</div>
                    <div>{item.para}</div>
                    <div>{item.no}</div>
                  </div>
                </Styled.Lorem>
              );
            })}
          </Styled.About>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
