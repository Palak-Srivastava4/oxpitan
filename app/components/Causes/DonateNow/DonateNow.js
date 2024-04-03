import * as Styled from "./style";
import Footer from "../../Footer/Footer";
import Navigation from "../../Navigation/Navigation";
import React from "react";

const DonateNow = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Donate</div>
        </Styled.Contact>
      </Styled.BreadCrumb>
      <Styled.Donation className="container">
        <Styled.Personal>
          <div>
            <Styled.First>
              <div className="donation">Enter Your Donation</div>
              <Styled.Input type="number" placeholder="$" />
            </Styled.First>
            <Styled.PersonalInfo>
              <div className="donation">Personal Info</div>
              <div className="firstLast">
                <div className="name">
                  <Styled.InputName type="text" placeholder="First Name" />
                  <Styled.InputName type="text" placeholder="Last Name" />
                </div>
                <div className="name">
                  <Styled.InputName type="email" placeholder="Email Address" />
                  <Styled.InputName type="number" placeholder="Phone Number" />
                </div>
                <div className="name">
                  <Styled.InputName type="text" placeholder="Address" />
                  <Styled.InputName type="text" placeholder="Country" />
                </div>
                <Styled.TextArea type="text" placeholder="Leave a Comment" />
              </div>
            </Styled.PersonalInfo>
            <Styled.PaymentInfo>
              <div className="donation">Payment Info</div>
              <div className="firstLast">
                <div className="name">
                  <Styled.InputName type="text" placeholder="Card Number" />
                  <Styled.InputName type="number" placeholder="MM/YY" />
                </div>
                <div className="name">
                  <Styled.InputName type="number" placeholder="Card Code (CVC)" />
                  <Styled.InputName type="text" placeholder="Billing Address" />
                </div>
                <div className="name">
                  <Styled.InputName type="text" placeholder="City" />
                  <Styled.InputName type="text" placeholder="Country" />
                </div>
              </div>
              <div className="BtnDonate">
              <span className="btn">Donate Now</span>
            </div>
            </Styled.PaymentInfo>
          </div>
       
        </Styled.Personal>
        <Styled.Jassica></Styled.Jassica>
      </Styled.Donation>
      <Footer />
    </div>
  );
};

export default DonateNow;
