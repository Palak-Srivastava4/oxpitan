import * as Styled from "./style";
import Footer from "../Footer/Footer";
import FormDonate from "../FormDonation/FormDonate";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import React from "react";
import blogimg1 from "../../assets/image/blogimg1.svg";
import blogimg2 from "../../assets/image/blogimg2.svg";
import blogimg3 from "../../assets/image/blogimg3.svg";
import blogimg4 from "../../assets/image/blogimg4.svg";
import charity from "../../assets/image/charity.svg";
import helpingImg from "../../assets/image/helpingImg.svg";
import hiw from "../../assets/image/hiw.svg";
import hiwImg from "../../assets/image/hiwImg.svg";
import huImg from "../../assets/image/huImg.svg";
import icoChar from "../../assets/image/icoChar.svg";
import mixerBg from "../../assets/image/mixerBg.svg";
import mixerBg2 from "../../assets/image/mixerBg2.svg";
import slider from "../../assets/image/slider.svg";
import videoImg from "../../assets/image/videoImg.svg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Volun, evanto, foodData, para } from "./data";
import { FaPlay } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import img1 from "../../assets/image/img1.svg";
import img2 from "../../assets/image/img2.svg";
import img3 from "../../assets/image/img3.svg";
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaHandsHoldingChild } from "react-icons/fa6";

const Home = () => {
  return (
    <Styled.HomePageContainer>
      <Navigation />

      <Styled.MainContainer>
        <div className="content">
          <Styled.Education>
            <Styled.Welcome>
              <div className="width">
                <Styled.Bg>
                  <div className="bgColor"></div>
                </Styled.Bg>
                <div className="bgColor"></div>
                <Image className="image" src={slider} />
                <div className="heading">
                  <p>WELCOME TO OXPITAN</p>
                  <h3>
                    Lend the <br />
                    helping hand <br />
                    get involved
                  </h3>
                  <Styled.Btn className="yellowBtn" href="">
                    Discover More
                  </Styled.Btn>
                </div>
              </div>
            </Styled.Welcome>

            <Styled.Hunger>
              <div className="flex">
                <Styled.LeftHunger>
                  <div className="left">
                    <h3>Hunger is stalking the globe</h3>
                  </div>
                </Styled.LeftHunger>

                <div className="right">
                  <div className="videoContainer">
                    <a href="https://youtu.be/PbUxi2Lx8x8"> </a>
                    <div class="video-item">
                      <Styled.Btn className="yellowBtn" href="">
                        {" "}
                        <span>
                          {" "}
                          <FaPlay />
                        </span>
                      </Styled.Btn>

                      <Image className="videoImage" src={videoImg}></Image>
                    </div>
                  </div>
                  <div style={{ width: "100%" }}>
                    <h3>We are here to support you every step of the way.</h3>
                    <p>Watch us how we take care of everyone</p>
                  </div>
                </div>
              </div>
            </Styled.Hunger>
            <Styled.BlogImageContainer className="container">
              <Styled.CharityPoor>
                <Styled.Lives>
                  <div className="hiw">
                    <div className="child-container" style={{backgroundColor: "#00baa3"}}>
                      <div className="bg">  </div>
                    
                    </div>
                    <div className="heading-container">
                      {" "}
                      <h3 className="hiwTitle">
                        More <br />
                        charity <br />
                        better lives
                      </h3>{" "}
                    </div>
                  </div>
                </Styled.Lives>
                <Styled.Volun>
                  <div className="hiw">
                    <div className="child-container">
                      <div className="bg"> </div>
                      <Image className="image"src={hiwImg} />
                    </div>
                    <div className="heading-container">
                    <h3 className="hiwTitle">
                      How to <br />
                      become <br /> volunteer
                    </h3>
                    </div>
                  </div>
                </Styled.Volun>
                <Styled.Poor>
                  <div className="hiw">
                    <div className="child-container" id="child-container">
                      <div className="bg"  id="bg"> </div>
                      <Image className="image" id='image'  src={hiw} />
                    </div>
                    <div className="heading-container">
                    <h3 className="hiwTitle">
                      Poor <br />
                      children <br />
                      education
                    </h3>
                    </div>
                  </div>
                </Styled.Poor>
              </Styled.CharityPoor>
            </Styled.BlogImageContainer>
          </Styled.Education>
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
          </div>
          <Styled.DonationBtnCenterPadding>
            <Styled.BtnDark href="">Start Donation</Styled.BtnDark>
          </Styled.DonationBtnCenterPadding>
          
            <Styled.Fundraising src={mixerBg2.src}>
            <Styled.Container>
              <Styled.About>
                <div className="lives">
                  Fundraising for the people and causes you care about
                </div>
                <Styled.DonationBtnStart>
                  <Styled.Btn href="">Start Donation</Styled.Btn>
                </Styled.DonationBtnStart>
              </Styled.About>
              </Styled.Container>
            </Styled.Fundraising>
          

          <Styled.Charity>
            <Styled.CharityData>
              <Styled.Raised>
                <div className="container">
                  <div className="raised">
                    <span>
                      {/* <Image src={charity} className="charity" /> */}
                      <BsFillHeartPulseFill  className="icon"/>
                    </span>
                    <div>
                      <span className="number">785000</span>
                      <p className="avail">raised by 6,388 people in 7 days</p>
                    </div>
                  </div>
                  <div className="raised">
                    <span>
                      {/* <Image src={icoChar} className="charity" /> */}
                      <FaHandsHoldingChild className="icon"/>
                    </span>
                    <div>
                      <span className="number">63000</span>
                      <p className="avail">
                        volunteer are available to help you
                      </p>
                    </div>
                  </div>
                </div>
              </Styled.Raised>
              <Styled.Darkness>
                <Styled.Content>
                  <div className="darkness">
                    <RiDoubleQuotesL className="icon" />
                    <h3 className="decide">
                      Every man must decide whether he will walk in the light of
                      creative altruism or in the darkness of destructive
                      selfishness.
                    </h3>
                    <p>Martin Luther King, jr</p>
                  </div>
                </Styled.Content>
              </Styled.Darkness>
            </Styled.CharityData>
          </Styled.Charity>
          <Styled.Latest>
            <div className="container latest">
              <div></div>
              <h2 className="cause">Latest Causes</h2>
              <p className="help">HELP US NOW</p>
            </div>
          </Styled.Latest>
          <Styled.Card className="contents">
            <div className="cards">
              <Styled.Card1>
                <div className="cardImg">
                  <Image className="image" src={img1}></Image>
                </div>
                <div className="card1">
                  <h3>Save Poor Childrens</h3>
                  <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
                  <h6>
                    <TbTargetArrow /> Goal: <span>$30,000</span>
                  </h6>
                  <h6>
                    {" "}
                    <FontAwesomeIcon icon={faChartLine} /> Raised:{" "}
                    <span>25,270</span>
                  </h6>
                  <Styled.BtnStatic
                    hoverBg={"#424242"}
                    backgroundColor="#50bac3"
                    className="btnBlue"
                    href=""
                  >
                    donate now{" "}
                  </Styled.BtnStatic>
                </div>
              </Styled.Card1>
              <Styled.Card2>
                <div className="cardImg">
                  <Image className="image" src={img2}></Image>
                </div>
                <div className="card2">
                  <h3>They Want to Study</h3>
                  <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
                  <h6>
                    <TbTargetArrow /> Goal: <span>$30,000</span>
                  </h6>
                  <h6>
                    <FontAwesomeIcon icon={faChartLine} /> Raised:{" "}
                    <span>25,270</span>
                  </h6>
                  <Styled.BtnStatic
                    hoverBg={"#424242"}
                    backgroundColor="#e36955"
                    href=""
                  >
                    donate now
                  </Styled.BtnStatic>
                </div>
              </Styled.Card2>
              <Styled.Card3>
                <div className="cardImg">
                  <Image className="image" src={img3}></Image>
                </div>
                <div className="card3">
                  <h3>Healthy Food for All</h3>
                  <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
                  <h6>
                    <TbTargetArrow /> Goal: <span>$30,000</span>
                  </h6>
                  <h6>
                    {" "}
                    <FontAwesomeIcon icon={faChartLine} /> Raised:{" "}
                    <span>25,270</span>
                  </h6>
                  <Styled.BtnStatic
                    hoverBg={"#424242"}
                    backgroundColor="#f1ae44"
                    href=""
                  >
                    donate now
                  </Styled.BtnStatic>
                </div>
              </Styled.Card3>
            </div>
          </Styled.Card>
          <Styled.Container>
          <Styled.Evanto>
            {evanto.map((item) => {
              return <Image src={item.imgs} />;
            })}
          </Styled.Evanto>
          </Styled.Container>
          
          <Styled.Fund>
            <Styled.Children>
              <div className="main">
                <div className="child">
                  Give a helping hand for homeless childrens
                </div>
                <Styled.Child>
                  {foodData.map((item) => {
                    return (
                      <Styled.BtnBg
                        backgroundColor={item.color}
                        style={{ width: "100% " }}
                      >
                        <div className="icon">{item.icons}</div>
                        <div className="name">{item.name}</div>
                      </Styled.BtnBg>
                    );
                  })}
                </Styled.Child>
              </div>
            </Styled.Children>
            <Styled.Text>
              <Styled.TextData>
                <p className="aliq">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis simply free text sollicitud. Lorem ipsum dolor sit
                  amet, consectetur adipiscing ullam blandit hendrerit faucibus
                  suspendisse. Dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidi labore et dolore magna aliqua enim ad
                  minim veniam.
                </p>
              </Styled.TextData>
            </Styled.Text>
          </Styled.Fund>
         
          <Styled.Creative>
            <Styled.Charity>
              <div className="create">
                <Image className="image "src={helpingImg} />
                <div className="charity">
                  Charity activities are taken place around the world
                </div>
                <p className="aliq">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis simply free text sollicitud. Lorem ipsum dolor sit
                  amet, consectetur adipiscing ullam blandit hendrerit faucibus
                  suspendisse.
                </p>
              </div>
              <Styled.Line />
            </Styled.Charity>
            <Styled.Donate>
              <div className="donate"></div>
            </Styled.Donate>
            <div className="form">
              <FormDonate className="formdonate" />
            </div>
          </Styled.Creative>

          <Styled.Latest>
            <div className="container latest">
              <h2 className="cause">Our Volunteers</h2>
              <p className="help">meet profesionals</p>
            </div>
          </Styled.Latest>

          <Styled.VolunteersCards>
            {Volun.map((item) => {
              return (
                <Styled.First backgroundColor={item.color}>
                  <div className="mainDiv">
                    <div>
                      <Image className="image" src={item.img} />
                    </div>
                    <div className="textContainer" >
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
              <div></div>
              <h2 className="cause">Recent Blog Posts</h2>
              <p className="help">news and updates</p>
            </div>
          </Styled.Latest>
          <Styled.Blogs>
            <Styled.News>
              <Image className="image" src={blogimg1} />
              <Styled.BlogData>
                <h3>
                  <a href="">A place where start new life with peace</a>
                </h3>
                <div className="son">
                  <p>mike hardson</p>
                  <p>3 comments</p>
                </div>

                <p className="para">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
              </Styled.BlogData>

              <Styled.Btn href="">Read More</Styled.Btn>
            </Styled.News>

            <Styled.Blog>
              <Styled.Healthy>
                <div>
                  <Styled.Food>
                    <Image className="image" src={blogimg2} />
                    <div>
                      <span className="date">07 mar, 2019</span>
                      <p className="food">
                        Let’s together provide them a healthy food
                      </p>
                    </div>
                  </Styled.Food>
                  <Styled.Food>
                    <Image className="image" src={blogimg3} />
                    <div>
                      <span className="date">04 mar, 2019</span>
                      <p className="food">
                        Building clean water system for poor
                      </p>
                    </div>
                  </Styled.Food>

                  <Styled.Food>
                    <Image className="image" src={blogimg4} />
                    <div>
                      <span className="date">30 feb, 2019</span>
                      <p className="food">
                        Become a volunteer you will feel the benefits
                      </p>
                    </div>
                  </Styled.Food>
                </div>
              </Styled.Healthy>
            </Styled.Blog>
          </Styled.Blogs>

          <Styled.FoorterSection>
            <section class="section-area text-center">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <div class="section-item section-item1">
                      <h3 class="cta__title">
                        Sponsor an entire trending project
                      </h3>
                      <Styled.BtnBottom>
                      <Styled.Btn href="">become an sponsor</Styled.Btn>
                      </Styled.BtnBottom>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="section-item section-item2">
                      <h3 class="cta__title">
                        Take a look a the popular causes
                      </h3>
                      <Styled.Btn href="">view all causes</Styled.Btn>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Styled.FoorterSection>
        </div>
      </Styled.MainContainer>

      <Footer />
    </Styled.HomePageContainer>
  );
};

export default Home;
