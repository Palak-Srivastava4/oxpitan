import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import formImg from "../../../assets/image/formImg.svg";
import { TiTick } from "react-icons/ti";
import * as CommonStyled from "../../commonStyle"

const Volunteer = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
      <CommonStyled.Container>
        <Styled.Contact className="container">
          <div className="volHead">Become A Volunteer</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .become a Volunteer</Styled.BtnDark>
        </CommonStyled.Container>
      </Styled.BreadCrumb>
      <div className="container" style={{ marginTop: "70px" }}>
        <Styled.Register>
          <div className="register">Register Now</div>
          <div className="join">join us now</div>
        </Styled.Register>
        <Styled.Form>
          <Styled.Requirements>
            <Image className="image" src={formImg} />
            <div>
              <h3 className="require">Requirements</h3>
              <div className="para">
                <p>
                  Aliquam hendrerit a augue insu image pellentes que id erat
                  quis sollicitud null mattis Ipsum is simply dummy typesetting
                  industry. Alienum phaedrum torquatos nec eu, vis detraxit
                  periculis ex, nihil expetendis in meifn pericula euripidis,
                  hinc partem ei est. Eos ei nisl graecis, aperiri consequat
                  anlorem tincidunt vix at
                </p>
                <div><TiTick className="tick"/> Eos ei nisl graecis vix aperiri consequat</div>
                <div className="vixat"><TiTick className="tick"/> Alienum phaedrum torquatos</div>
                <div className="vixat"><TiTick className="tick"/> Dius lorem tincidunt vixat</div>
              </div>
              <div className="numEmail">
                <div className="num">
                  <h3 className="call">Call us</h3>
                  <span className="no">666 888 0000</span>
                </div>
                <div className="email">
                  <h3 className="call">Send email</h3>
                  <span className="no" id="break">needhelp@oxpitan.com</span>
                </div>
              </div>
            </div>
          </Styled.Requirements>
          <Styled.FormData>
            <Styled.Input type="text" placeholder="Full Name" />
            <Styled.Input type="text" placeholder="Email Address" />

            <Styled.Input type="number" placeholder="Phone Number" />
 
            <Styled.Input type="text" placeholder="Address" />
            <Styled.Input type="text" placeholder="Date of Birth" />
            <Styled.Input type="text" placeholder="Occupation" />
            <Styled.TextArea type="text" className="mess" placeholder="Write a Message" />
            <Styled.Btn className="submit" href="">send message</Styled.Btn> 

          </Styled.FormData>
        </Styled.Form>
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
