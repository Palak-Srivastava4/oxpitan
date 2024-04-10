import * as Styled from "./style";
import Footer from "../Footer/Footer";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import React from "react";
import eventDetail from "../../assets/image/eventDetail.svg";

const EventsDetail = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Events Detail</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .event detail</Styled.BtnDark>
      </Styled.BreadCrumb>
      <div className="container">
        <Styled.Img>
          <Image src={eventDetail} />
          <div className="date">
            <span className="today">9</span>
            <span className="month">Mar</span>
          </div>
        </Styled.Img>
        <Styled.EventDetail>
          <Styled.World>
            <div>
              <div className="play">Play for the world</div>
              <p className="para">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p className="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum ley of type and scrambled it to make a type specimen
                book.
              </p>
              <div className="event">Event Requirements</div>
              <p className="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum ley of type and scrambled it to make a type specimen
                book.
              </p>

              <div className="BtnDonate">
              <span className="btn">Register Now</span>
            </div>
            </div>
          </Styled.World>
          <Styled.Play>
          
          </Styled.Play>
        </Styled.EventDetail>
      </div>
      <Footer />
    </div>
  );
};

export default EventsDetail;
