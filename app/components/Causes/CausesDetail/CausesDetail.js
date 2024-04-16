import * as Styled from "./style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import caueBaby from "../../../assets/image/caueBaby.svg";
import causedetaill from "../../../assets/image/causedetaill.svg";
import causesDetail from "../../../assets/image/causesDetail.svg";
import kevinImage from "../../../assets/image/kevinImage.svg";
import postLogo3 from "../../../assets/image/postLogo3.svg";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";
import { icons } from "../../Footer/data";
import { comment, postData } from "./data";

const CausesDetail = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Causes Details</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .causes details</Styled.BtnDark>
      </Styled.BreadCrumb>
      <Styled.Category className="container">
        <Styled.Search>
          <Image src={causesDetail} />
          <Styled.Children>
            <div>
              <div className="poor">Save Poor Childrens</div>
              <div className="children">
                <div className="target">
                  <PiTarget className="pi" />

                  <div className="raise">
                    Goal:<span className="no">$30,000</span>
                  </div>
                </div>
                <div className="target">
                  <FaChartLine className="pi" />
                  <div className="raise">
                    Raised:<span className="no">$25,270</span>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </Styled.Children>

          <Styled.BlogData>
            <div>
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
                publishing software like.
              </p>
            </div>
            <div className="imageDetail">
              <Image src={causedetaill} />
              <Image src={caueBaby} />
            </div>
            <p className="para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div className="pdfFile">
              <div className="present">
                <BsFileEarmarkPdf className="pdf" /> Our Presentation
              </div>
            </div>
          </Styled.BlogData>

          <Styled.Comments>
            <div className="comment">Comments</div>

            {comment?.map((item, index) => {
              return (
                <Styled.CommentData>
                  <div className="martin">
                    <div className="first">
                      <Image src={item.img} />
                    </div>
                    <div className="second">
                      <div className="kevin">
                        <span> {item.marks}</span>
                        <span className="hour">{item.time}</span>
                      </div>

                      <p className="curse">{item.para}</p>
                    </div>
                  </div>
                </Styled.CommentData>
              );
            })}
          </Styled.Comments>
          <Styled.Form>
            <div className="leave">Leave a Comment</div>

            <div className="firstLast">
              <Styled.Input type="text" placeholder="First Name" />
              <Styled.Input type="text" placeholder="Last Name" />
            </div>
            <Styled.TextArea type="text" placeholder="Leave a Comment" />
            <div className="BtnDonate">
              <span className="btn">Submit Now</span>
            </div>
          </Styled.Form>
        </Styled.Search>
        <Styled.Crazy>
          <div className="posts">
            <div className="postData">
              <Image src={postLogo3} />
              <div>
                <div className="create">created april 11, 2018</div>

                <div className="nameTime">
                  Organizer:{" "}
                  <a href="#" className="time">
                    Jessica Smith
                  </a>
                </div>
                <div> Education</div>
                <div> Wrightwood, Canada</div>
              </div>
            </div>
          </div>
          <div className="posts">
            <div className="recent">Recent Donations</div>
            {postData?.map((item, index) => {
              return (
                <>
                  <div className="postData">
                    <Image src={item.post} />
                    <div>
                      <span className="amountdata">{item.amount}</span>
                      <div className="nameTime">
                        {item.name}
                        <span className="time">{item.time}</span>
                      </div>
                      <div className="data">{item.data}</div>
                    </div>
                  </div>
                  <Styled.Line />
                </>
              );
            })}
          </div>
          <div className="posts">
            <div className="recent">Share Cause</div>

            <div className="itemStyle">
              {icons?.map((item, index) => {
                return (
                  <div style={{ background: item.color }} className="colorChng">
                    <div className="icon"> {item.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Styled.Crazy>
      </Styled.Category>
      <Footer />
    </div>
  );
};

export default CausesDetail;
