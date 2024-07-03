import * as Styled from "./style";
import Footer from "../Footer/Footer";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import React from "react";
import kevinImage from "../../assets/image/kevinImage.svg";
import newsDetail from "../../assets/image/newsDetail.svg";
import { icons } from "../Footer/data";
import { categories, comment, postData } from "./data";

const SingleNews = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">Single News</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .Single news</Styled.BtnDark>
      </Styled.BreadCrumb>
      <Styled.Category className="container">
        <Styled.Search>
          <Image src={newsDetail} />
          <Styled.BlogData>
            <h3 className="some">
              <a href="">Do something crazy to raise money</a>
            </h3>
            <div className="son">
              <p>christine eve</p>
              <p>2 comments</p>
            </div>
            <div>
              <p className="para">
                Aliq is notm hendr erit a augue insu image pellen tes que id
                erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                adipiscing ullam blandit hendrerit faucibus suspendisse. There
                are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum,
                you need to be sure there isn't anything embarrassing hidden in
                the middle of text.
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
            </div>
            <Styled.TagsData>
              <div className="char">
                <div className="tags">Tags</div>
                <div className="charityTags">
                  <div className="charity">
                    <span className="charityBtn">Charity</span>
                  </div>
                  <div className="charity">
                    <span className="charityBtn">Poor</span>
                  </div>
                  <div className="charity">
                    <span className="charityBtn">Love</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="itemStyle">
                  {icons?.map((item, index) => {
                    return (
                      <div
                        style={{ background: item.color }}
                        className="colorChng"
                      >
                        <div> {item.icon}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Styled.TagsData>
          </Styled.BlogData>
          <Styled.Martin>
            <div className="martin">
              <div className="first">
                <Image src={kevinImage} />
              </div>
              <div className="second">
                <div className="kevin">kevin martin</div>
                <p className="curse">
                  "Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                  ultrs condmentum lightly believable. If you are going to use a
                  of you need to be sure there isn't anything embarrassing."
                </p>
              </div>
            </div>
          </Styled.Martin>
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
          <div className="search">Search</div>
          <div className="posts">
            <div className="recent">Recent Posts</div>
            {postData?.map((item, index) => {
              return (
                <>
                  <div className="postData">
                    <Image src={item.post} />
                    <div className="data">{item.data}</div>
                  </div>
                  <Styled.Line />
                </>
              );
            })}
          </div>
          <div className="posts">
            <div className="recent">Categories</div>
            {categories?.map((item, index) => {
              return (
                <div className="listData">
                  <a href="#">{item.category}</a>
                </div>
              );
            })}
          </div>
          <div className="posts">
            <div className="recent">Popular Tags</div>
            <div className="charityBtn">
              <div className="BtnDonate">
                <span className="btn">charity</span>
              </div>
              <div className="BtnDonate">
                <span className="btn">charity</span>
              </div>
              <div className="BtnDonate">
                <span className="btn">love</span>
              </div>
            </div>
            <div className="charityBtn">
              <div className="BtnDonate">
                <span className="btn">donations</span>
              </div>
              <div className="BtnDonate">
                <span className="btn">save</span>
              </div>
              <div className="BtnDonate">
                <span className="btn">health</span>
              </div>
            </div>
          </div>
        </Styled.Crazy>
      </Styled.Category>
      <Footer />
    </div>
  );
};

export default SingleNews;
