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
import videoImg  from "../../assets/image/videoImg.svg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Volun, evanto, foodData, para } from "./data";
import { FaPlay } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const Home = () => {
  return (
    <div>
      <Navigation />

      <Styled.MainContainer>
        <Styled.Education className="container">
          <Styled.Welcome>
          <div>
            <div style={{background:"red"}}/>
            <div className="bgColor"></div>
              <Image className="image" src={slider}/>
              <div className="heading">
                <p>WELCOME TO OXPITAN</p>
                <h3>Lend the <br/>helping hand <br/>get involved</h3>
                <Styled.Btn href="">Discover More</Styled.Btn>
              </div>
            </div>
          </Styled.Welcome>
          <Styled.Hunger>
            <div className="flex">
              <div className="left">
                <h3>Hunger is <br/>stalking the <br/>globe</h3>
              </div>
             
              <div className="right">
                <div className="videoContainer">
              <a href="https://youtu.be/PbUxi2Lx8x8">
            <div class="video-item">
           
            <div className="BtnRead">
                <span className="btn"> <FaPlay /> </span>
              </div>
                <Image src={videoImg}>
                </Image>
            </div>
        </a>
        </div>
        <div>
                <h3>We are here to support you every step of the way.</h3>
                <p>Watch us how we take care of everyone</p>
              </div>
              </div>
            </div>
          </Styled.Hunger>
            <Styled.CharityPoor>
            <Styled.Lives>
              <div className="hiw">
                <div className="child-container">
                <div className="bg"> </div>
                <Image className="img" src={huImg} />
                </div>
               <div> <h3 className="hiwTitle">More <br/>charity <br/>better lives</h3> </div>
              </div>
            </Styled.Lives>
            <Styled.Volun>
              <div className="hiw">
              <div className="child-container">
                <div className="bg"> </div>
                <Image src={hiwImg} />
                </div>
                <h3 className="hiwTitle">How to <br/>become <br/> volunteer</h3>
              </div>
            </Styled.Volun>
            <Styled.Poor>
              <div className="hiw">
              <div className="child-container">
                <div className="bg"> </div>
                <Image src={hiw} />
                </div>
                <h3 className="hiwTitle">Poor <br/>children <br/>education</h3>
              </div>
            </Styled.Poor>
          </Styled.CharityPoor>
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
        <div className="container">
          <Styled.Cards>
            <div></div>

            {para?.map((item, index) => {
              return (
                <>
                  <div key={index} className="headText">
                    <h5 className="head">{item.head}</h5>
                    <p className="textPara">{item.text}</p>
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
        <Styled.About>
          <div className="lives">
          Fundraising for the<br/> people and causes you <br/>care about
          </div>
          <Styled.DonationBtnStart>
              <Styled.Btn href="">Start Donation</Styled.Btn>
              </Styled.DonationBtnStart>
            {/* <Styled.Btn href="">Start Donation</Styled.Btn> */}
              {/* <span className="btn">Start Donation</span> */}
           
        </Styled.About>
      </Styled.Fundraising>

        <Styled.Charity>
          <Styled.CharityData >
            <Styled.Raised >
              <div className="container">
              <div className="raised">
                <span>
                  <Image src={charity} className="charity" />
                </span>
                <div>
                  <span className="number">785000</span>
                  <p className="avail">raised by 6,388 people in 7 days</p>
                </div>
              </div>
              <div className="raised">
                <span>
                  <Image src={icoChar} className="charity" />
                </span>
                <div>
                  <span className="number">63000</span>
                  <p className="avail">volunteer are available to help you</p>
                </div>
              </div>
              </div>
            </Styled.Raised>
            <Styled.Darkness>
              <Styled.Content>
                <div className="darkness">
                <RiDoubleQuotesL className="icon"/>
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
        <Styled.Card className="container">
          <div className="cards">
            <Styled.Card1>
         <div className="card1">
          <h3>Save Poor Childrens</h3>
          <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
          <h6><TbTargetArrow />  Goal: <span>$30,000</span></h6>
          <h6>  Raised: <span>25,270</span></h6>
          <div className="BtnRead">
                <span className="btn"> Donate Now</span>
              </div>
         </div>
         </Styled.Card1>
         <Styled.Card2>
         <div className="card2">
          <h3>They Want to Study</h3>
          <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
          <h6><TbTargetArrow />  Goal: <span>$30,000</span></h6>
          <h6>  Raised: <span>25,270</span></h6>
          <div className="BtnRead">
                <span className="btn"> Donate Now</span>
              </div>
         </div>
         </Styled.Card2>
         <Styled.Card3>
         <div className="card3">
          <h3>Healthy Food for All</h3>
          <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
          <h6><TbTargetArrow />  Goal: <span>$30,000</span></h6>
          <h6>  Raised: <span>25,270</span></h6>
          <div className="BtnRead">
                <span className="btn"> Donate Now</span>
              </div>
         </div>
         </Styled.Card3>
         </div>
        </Styled.Card>

        <Styled.Evanto className="container">
          {evanto.map((item) => {
            return <Image src={item.imgs} />;
          })}
        </Styled.Evanto>
        <Styled.Fund>
          <Styled.Children>
            <div className="main">
              <div className="child">
                Give a helping hand for homeless childrens
              </div>
              <Styled.Child>
                {foodData.map((item, index) => {
                  return (
                    <div className="food" style={{ background: item.color }}>
                      <div>{item.icons}</div>
                      <div>{item.name}</div>
                    </div>
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
                suspendisse. Dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi labore et dolore magna aliqua enim ad
                minim veniam.
              </p>
            </Styled.TextData>
            <FormDonate className="formdonate" />
          </Styled.Text>
        </Styled.Fund>

        <Styled.Creative>
          <Styled.Charity>
            <div className="create">
              <Image src={helpingImg} />
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
        </Styled.Creative>

        <Styled.Latest>
          <div className="container latest">
            <div></div>
            <h2 className="cause">Our Volunteers</h2>
            <p className="help">meet profesionals</p>
          </div>
        </Styled.Latest>

        <Styled.Cards className="container">
          {Volun.map((item, index) => {
            return (
              <Styled.First backgroundColor={item.color}>
                <div className="mainDiv">
                <div>
                <Image className="" src={item.img} />
                </div>
                <div style={{width:"100%"}}>
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
        </Styled.Cards>
        <Styled.FingerPrints src={mixerBg2.src}>
          <Styled.Finger>
            <div className="lives">
              Our fingerprints on the lives we touch never fade
            </div>
           <Styled.DonationBtnCenter>
              <Styled.Btn href="">Start Donation</Styled.Btn>
              </Styled.DonationBtnCenter>
                {/* <span className="btn">Start Donation</span> */}
              
          </Styled.Finger>
        </Styled.FingerPrints>
        <Styled.Latest>
          <div className="container latest">
            <div></div>
            <h2 className="cause">Recent Blog Posts</h2>
            <p className="help">news and updates</p>
          </div>
        </Styled.Latest>
        <Styled.Blogs className="container">
          <Styled.News>
            <Image src={blogimg1} />
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
                  <Image src={blogimg2} />
                  <div>
                    <span className="date">07 mar, 2019</span>
                    <p className="food">
                      Let’s together provide them a healthy food
                    </p>
                  </div>
                </Styled.Food>
                <Styled.Food>
                  <Image src={blogimg3} />
                  <div>
                    <span className="date">04 mar, 2019</span>
                    <p className="food">Building clean water system for poor</p>
                  </div>
                </Styled.Food>

                <Styled.Food>
                  <Image src={blogimg4} />
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

        <Styled.Sponsor>
        <div className="flex">
              <div className="left">
                <h3>Sponsor an entire trending project</h3> 
                <div className="BtnRead">
                <span className="btn" id="btn1">BECOME AN SPONSOR</span>
              </div>
              </div>
             
              <div className="right">
              <h3>Take a look a the popular causes</h3> 
                <div className="BtnRead">
                <span className="btn" id="btn2">VIEW ALL CAUSES</span>
              </div>
              </div>
            </div>
        </Styled.Sponsor>
      </Styled.MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
