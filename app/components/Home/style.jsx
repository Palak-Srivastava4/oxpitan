import { color } from "@/app/Theme/color";
import styled from "styled-components";

export const MainContainer = styled.div`
  // .btn {
  //   -ms-transform: skewX(20deg);
  //   -webkit-transform: skewX(20deg);
  //   transform: skewX(20deg);
  //   display: inline-block;
  //   color: #fff;
  // }
  // .itemCenter {
  //   display: flex;
  //   justify-content: center;
  //   margin-bottom: 40px;
  // }
  // .BtnDonate:hover {
  //   background: #f1ae44;
  //   cursor: pointer;
  // }
  // .BtnDonate {
  //   background-color: #e36955;
  //   font-size: 12px;
  //   text-transform: uppercase;
  //   text-align: center;
  //   color: #fff;
  //   font-weight: 600;
  //   letter-spacing: 1px;
  //   width: 15%;
  //   height: 49px;
  //   border: none;
  //   border-radius: 0;
  //   -ms-transform: skewX(-20deg);
  //   -webkit-transform: skewX(-20deg);
  //   transform: skewX(-20deg);
  //   cursor: pointer;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
`;
export const Fund = styled.div`
  display: flex;
  background-color: #f2f0ec;
  margin-top: 70px;
`;

export const Children = styled.div`
  flex: 0.6;
  .main {
    padding: 100px;
  }
  .child {
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 49px;
    font-weight: 600;
    color: #424242;
  }
`;
export const Text = styled.div`
  flex: 0.6;
  position: relative;
`;

export const Education = styled.div``;
export const Welcome = styled.div`
  .image {
    width: 100vw;
    padding: 0px;
    margin-left: -136px;
    position: relative;
    z-index: 0;
  }
  .heading {
    position: absolute;
    top: 280px;
    z-index: 2;
  }
  .bgColor {
    width: 75%;
    height: 122vh;
    background-color: #863bae;
    opacity: 0.9;
    padding: 0;
    margin-left: 0;
    transform: skewX(-15deg);
    margin-left: -548px;
    position: absolute;
    z-index: 1;
  }
  .heading p {
    color: white;
    padding-top: 100px;
    text-decoration: underline;
    font-size: 20px;
    font-weight: 600;
    margin-left: 60px;
  }
  .heading h3 {
    font-size: 96px;
    font-weight: 800;
    color: white;
    margin-left: 60px;
    font-family: "Playfair Display", serif;
  }
  .btn {
    @extend %transition;
    display: inline-block;
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
    text-align: center;
  }
  .BtnRead:hover {
    background: ${color._e36955};
    cursor: pointer;
  }
  .BtnRead {
    width: 160px;
    margin-left: 120px;
    margin-top: 40px;
    margin-bottom: 220px;
    transform: translate(0, -50px);
    background-color: #f1ae44;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const Hunger = styled.div`
  .flex {
    display: flex;
    margin-bottom: 80px;
  }
  .left {
    background-color: #424242;
    color: white;
    width: 75%;
    margin-left: -396px;
    transform: skewX(-15deg);
    font-family: "Playfair Display", serif;
  }
  .left h3 {
    font-size: 40px;
    font-weight: 900;
    padding: 20px;
    text-align: left;
    margin-left: 440px;
    margin-top: 60px;
    margin-bottom: 60px;
    transform: skewX(15deg);
  }
  .right {
    display: flex;
    margin-right: -110px;
    border-bottom: 1px solid lightgray;
  }
  .videoContainer {
    padding: 40px;
    margin-top: 30px;
    transform: translate(-90px, -40px);
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(0deg);
    color: #fff;
    text-align: center;
  }
  .BtnRead:hover {
    background: ${color._e36955};
    cursor: pointer;
  }
  .BtnRead {
    width: 40px;
    margin-left: 120px;
    background-color: #f1ae44;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg) !important;
    transform: translateY(100px) !important;
    cursor: pointer;
  }

  .right h3 {
    text-align: left;
    padding-left: 0px;
    padding-bottom: 10px;
    margin-top: 66px;
    margin-left: -50px;
    font-weight: 400;
    font-size: 38px;
    color: #4d4d4d;
  }
  .right p {
    text-align: left;
    padding-left: 0px;
    color: #4d4d4d;
    font-size: 22px;
    font-weight: 400px;
    margin-left: -50px;
  }
`;

export const CharityPoor = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Lives = styled.div`
  .hiwTitle {
    color: white;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    transform: translate(0px, -340px);
    position: absolute;
    z-index: 2;
    margin-left: 40px;
  }
  .bg {
    background-color: #00baa3;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
    width: 380px;
    height: 492px;
  }
  .hiw img {
    position: relative;
    z-index: 0;
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .BtnRead:hover {
    background: ${color._e36955};
    cursor: pointer;
  }
  .BtnRead {
    width: 120px;
    transform: translate(0, -50px);
    background-color: black;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: translate(0px, -50px);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;

export const Volun = styled.div`
  position: relative;
  z-index: 1;
  .hiwTitle {
    color: white;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    transform: translate(0px, -340px);
    position: absolute;
    z-index: 2;
    margin-left: 55px;
  }
  .bg {
    background-color: #e95252;
    opacity: 0.7;
    position: absolute;
    z-index: 1;
    width: 380px;
    height: 492px;
  }
  .hiw img {
    position: relative;
    z-index: 0;
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .BtnRead:hover {
    background: ${color._e36955};
    cursor: pointer;
  }
  .BtnRead {
    width: 120px;
    transform: translate(0, -50px);
    background-color: black;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const Poor = styled.div`
  position: relative;
  z-index: 1;
  .hiwTitle {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    padding-left: 10px;
    transform: translate(0px, -340px);
    position: absolute;
    z-index: 2;
    margin-left: 40px;
  }
  .bg {
    background-color: #f1ae44;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
    width: 380px;
    height: 492px;
  }
  .hiw img {
    position: relative;
    z-index: 0;
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .BtnRead:hover {
    background: ${color._e36955};
    cursor: pointer;
  }
  .BtnRead {
    width: 120px;
    transform: translate(0, -50px);
    background-color: black;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const Child = styled.div`
  display: flex;
  gap: 20px;
  .food {
    background: #50bac3;
    width: 141px;
    height: 140px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 9px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const TextData = styled.div`
  .aliq {
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
    padding: 100px 100px 44px 0px;
  }
`;
export const Evanto = styled.div`
  display: flex;
  gap: 90px;
  margin-top: 50px;
`;
export const Latest = styled.div`
  margin: 60px 0px 60px 0px;
  .latest {
    text-align: center;
    width: 57%;
  }
  .cause {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: #424242;
    font-family: "Playfair Display", serif;
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }
  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: ${color._e36955};
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 30px 0 35px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
  .help {
    color: #863bae;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    display: block;
  }
`;

export const Creative = styled.div`
  display: flex;
  padding: 100px;
`;
export const Line = styled.div`
  width: 83%;
  height: 1px;
  background: #6c757d;
  margin-top: 40px;
`;

export const PeopleCause = styled.div`
  background-image: url(${(props) => props.src});
  height: 525px;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 120px;
  padding-bottom: 120px;
  margin-top: 40px;
`;
export const Cause = styled.div`
  font-size: 70px;
  line-height: 84px;
  margin-bottom: 48px;
  font-weight: 800;
  color: #fff;
`;

export const FingerPrints = styled.div`
  background-image: url(${(props) => props.src});
  height: 525px;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 120px;
  padding-bottom: 120px;
`;
export const Finger = styled.div`
  .btnStart {
    display: flex;
    justify-content: center;
  }
  .lives {
    font-size: 70px;
    line-height: 84px;
    margin-bottom: 48px;
    font-weight: 800;
    color: #fff;
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  .head {
    font-size: 20px;
    line-height: 20px;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 23px;
    color: #424242;
    text-align: center;
  }
  .textPara {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: #424242;
  }
  .headText {
    padding-right: 35px;
    padding-left: 35px;
    margin-bottom: 20px;
  }
`;
export const First = styled.div`
  flex: 0.4;
  .mainDiv {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .brownBlock {
    // height: 100px;
    // width:270px;
    // background-color: #50bac3;
    // text-align: center;
    // margin-top: 20px;
    width: 93%;
    padding-top: 17px;
    font-size: 12px;
    text-transform: uppercase;
    background: ${({ backgroundColor }) => backgroundColor};
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    position: relative;
    z-index: 1;
    display: inline-block;
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -ms-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
    text-decoration: none;
    border: none;
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 1px;
      z-index: -1;
      background: ${({ backgroundColor }) => backgroundColor};
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transform: skew(-12deg, 0deg);
      -moz-transform: skew(-12deg, 0deg);
      -ms-transform: skew(-12deg, 0deg);
      -o-transform: skew(-12deg, 0deg);
      transform: skew(-12deg, 0deg);
      -webkit-transition: 0.3s ease-in;
      -moz-transition: 0.3s ease-in;
      -ms-transition: 0.3s ease-in;
      -o-transition: 0.3s ease-in;
      transition: 0.3s ease-in;
    }
  }
  .title {
    font-size: 20px;
    // text-transform: capitalize;
    font-weight: 800;
    margin-bottom: 2px;
    color: white;
  }
  .desig {
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .mid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    text-decoration: none;
  }
`;
export const Food = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
  .date {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #e36955;
  }
  .food {
    font-size: 22px;
    font-weight: 800;
    line-height: 32px;
    margin-top: 10px;
    color: #424242;
  }
`;
export const Blogs = styled.div`
  display: flex;
  gap: 20px;
`;

export const News = styled.div`
  flex: 0.6;
  height: fit-content;
  .read {
    font-size: 12px;
    text-transform: uppercase;
    background: #f1ae44;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 30px 0 35px;
    line-height: 49px;
    outline: none;
    border: none;
    color: white;
  }
  .BtnBlog {
    background-color: #e36955;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 32%;
    height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const BlogData = styled.div`
  margin-bottom: 30px;
  a {
    color: #424242;
    text-decoration: none;
  }
  h3 {
    margin-top: 30px;
  }
  .para {
    font-size: 18px;
    line-height: 30px;
    color: #818181;
    font-weight: 400;
  }
  .son {
    display: flex;
    margin-bottom: 10px;
    color: #e36955;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
    position: relative;
    gap: 20px;
  }
`;
export const Blog = styled.div`
  flex: 0.6;
  background-color: #f2f0ec;

  height: fit-content;
`;
export const Healthy = styled.div`
  padding: 60px 60px 0px 60px;
`;

export const Charity = styled.div`
  flex: 0.6;
  width: 86%;
  .create {
  }
  .charity {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 32px;
    color: #424242;
    padding-top: 30px;
  }
  .aliq {
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;

export const CharityData = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
`;
export const Raised = styled.div`
  flex: 0.6;
  padding-left: 12px;
  padding-right: 151px;
  .raised {
    border-bottom: 2px solid #f2f0ec;
    display: flex;
    gap: 27px;
    align-items: center;
    width: 90%;
    margin: 30px 0px;
    height: 156px;
    padding: 0px 0px 11px 0px;
    font-family: "Playfair Display", serif;
  }
  .charity {
    width: 80%;
  }
  .number {
    font-size: 50px;
    line-height: 55px;
    font-weight: 800;
    margin-bottom: 13px;
    color: #424242;
  }
  .avail {
    color: #e36955;
    font-size: 15px;
    margin-top: 10px;
  }
`;
export const Darkness = styled.div`
  flex: 0.6;
  position: absolute;
  width: 50%;
  left: 866px;
  top: -53%;
  z-index: 2;
  .darkness {
    padding: 75px 75px 25px 75px;
  }
`;
export const Content = styled.div`
  .icon {
    font-size: 43px;
    height: 50px;
    line-height: 110px;
    margin-bottom: 40px;
    color: #ffffff;
  }
  background-color: #e36955;
  .decide {
    font-size: 40px;
    line-height: 54px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 43px;
  }
`;
export const Donate = styled.div`
  flex: 0.6;
`;

export const Fundraising = styled.div`
  background-image: url(${(props) => props.src});
  height: 525px;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 120px;
  padding-bottom: 120px;
`;
export const About = styled.div`
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }
  .itemCenter {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  .BtnDonate:hover {
    background: #e36955;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: #f1ae44;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 15%;
    height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-10deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btnStart {
    display: flex;
    justify-content: left;
    margin-left: 85px;
  }
  .lives {
    font-size: 70px;
    line-height: 84px;
    margin-bottom: 48px;
    font-weight: 800;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 85px;
  }
`;

export const Sponsor = styled.div`
  .flex {
    display: flex;
    background-color: #863bae;
    margin-bottom: -40px;
  }
  .left {
    display: flex;
    width: 100%;
    color: black;
    align-items: end;
    justify-content: right;
    padding-top: 20px;
    padding-right: 100px;
    flex-wrap: wrap;
    background-color: #50bac3;
    transform: skewX(-20deg);
    margin-left: -38px;
  }
  .left h3 {
    font-size: 34px;
    font-weight: 700;
    color: white;
    padding: 20px;
    text-align: left;
    transform: skewX(20deg);
    margin-left: 20px;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
  }
  .right {
    display: flex;
    width: 100%;
    color: black;
    align-items: end;
    justify-content: right;
    padding-top: 20px;
    padding-right: 100px;
    flex-wrap: wrap;
  }
  .right h3 {
    font-size: 34px;
    font-weight: 700;
    color: white;
    padding: 20px;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
    text-align: start;
  }
  #btn1 {
    transform: skewX(40deg);
  }

  #btn2 {
    transform: skewX(20deg);
  }
  .BtnRead:hover {
    background: ${color._e36955};
    cursor: pointer;
  }
  .BtnRead {
    background-color: #f1ae44;
    margin-bottom: 40px;
    padding: 0 10px;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    transform: skewX(-20deg);
    margin-right: 140px;
    cursor: pointer;
  }
`;

export const Btn = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  background: #f1ae44;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 30px 0 35px;
  line-height: 49px;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  -ms-transition: 0.3s ease-in;
  -o-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
  text-decoration: none;
  border: none;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 1px;
    z-index: -1;
    background: #f1ae44;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-12deg, 0deg);
    -moz-transform: skew(-12deg, 0deg);
    -ms-transform: skew(-12deg, 0deg);
    -o-transform: skew(-12deg, 0deg);
    transform: skew(-12deg, 0deg);
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -ms-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
  }
  &:hover,
  &:hover:after {
    background-color: #e36955;
    color: #fff;
  }
`;
export const BtnDark = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  background: #e36955;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 30px 0 35px;
  line-height: 49px;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  -ms-transition: 0.3s ease-in;
  -o-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
  text-decoration: none;
  border: none;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 1px;
    z-index: -1;
    background: #e36955;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-12deg, 0deg);
    -moz-transform: skew(-12deg, 0deg);
    -ms-transform: skew(-12deg, 0deg);
    -o-transform: skew(-12deg, 0deg);
    transform: skew(-12deg, 0deg);
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -ms-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
  }
  &:hover,
  &:hover:after {
    background-color: #f1ae44;
    color: #fff;
  }
`;
export const DonationBtnCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const DonationBtnStart = styled.div`
  margin-left: 92px;
`;
export const DonationBtnCenterPadding=styled.div`
display: flex;
justify-content: center;
margin-bottom: 77px;
`