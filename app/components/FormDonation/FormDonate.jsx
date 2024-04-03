import * as Styled from "./style";
import React from "react";
import { Button } from "@/app/Atoms/Button/Button";

const FormDonate = () => {
  return (
    <Styled.Form className="container">
      <div>
        <Styled.FormHead>
          <div className="donation">
            <h2 className="donate">Make a Donation</h2>
            <p className="donateNow">Donate us now</p>
          </div>
        </Styled.FormHead>
        <Styled.FormDetails>
          <Styled.Input placeholder="Insert Custom Value" />
          <Styled.Input placeholder="Full Name" />
          <Styled.Input placeholder="Email Address" />
          <Styled.Input placeholder="Location" />
          <Styled.TextArea placeholder="Leave a comment" />

          <div className="BtnDonate">
            <span className="btn">Continue Now</span>
          </div>
        </Styled.FormDetails>
      </div>
    </Styled.Form>
  );
};

export default FormDonate;
