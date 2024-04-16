import { color } from "@/app/Theme/color";
import styled from "styled-components";
export const HomePageContainer = styled.div`
@media (min-width: 1200px){
  .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1200px;
  }
}
`;
export const Container=styled.div.attrs({
  className: 'container',
  })``;
export const MainContainer = styled.div`
  overflow: hidden;
`;
export const Fund = styled.div`
  display: flex;
  background-color: #f2f0ec;
  margin-top: 70px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding-bottom: 98px;
  }
`;

export const Children = styled.div`
  flex: 0.6;
  .main {
    padding: 100px 41px;
    @media (max-width: 600px) {
      padding: 14px;
    }
  }
  .child {
    font-size: 54px;
    line-height: 70px;
    margin-bottom: 49px;
    font-weight: 900;
    color: #424242;
    font-family: "Playfair Display", serif;
  }
`;
export const Text = styled.div`
  flex: 0.6;
  position: relative;
`;
export const Education = styled.div``;
export const BlogImageContainer = styled.div``;
export const Welcome = styled.div`
  .width {
    width: 100%;
  }
  .image {
    padding: 0px;
    position: relative;
    z-index: 0;
    width: auto;
    height: auto;
    @media (max-width: 625px) {
      height: 651px;
    }
  }
  .heading {
    position: absolute;
    top: 280px;
    z-index: 2;
    @media(max-width:500px){
          top: 208px;
          left: -21px;
    }
  }
  .heading p {
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
    border-bottom: 1px solid #fff;
    display: inline-block;
    margin-bottom: 12px;
    margin-left: 35px;
  }
  .heading h3 {
    font-size: 100px;
    line-height: 107px;
    color: #fff;
    font-weight: 900;
    margin-left: 35px;
    margin-bottom: 47px;
    font-family: "Playfair Display", serif;
    @media (max-width: 650px) {
      font-size: 55px;
      line-height: 70px;
    }
  }
  .yellowBtn {
    margin-left: 35px;
    margin-top: 20px;
  }
`;

export const Bg = styled.div`
  @media (max-width: 625px) {
    width: 50%;
    height: 651px;
  }
  @media (max-width:1300px) and (min-width:1100px){
        width: 25%;
  }
  height: 848px;
  width: 29%;
  font-size: 12px;
  text-transform: uppercase;
  background: #863bae;
  opacity: 0.9;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 30px 0 35px;
  line-height: 49px;
  position: absolute;
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
    background: #863bae;
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
`;

export const Hunger = styled.div`
.video-item{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
  @media (max-width: 1200px) {
    .flex {
      flex-direction: column;
    }
  }
  .videoImage {
    width: 100%;
   @media (max-width:1300px) and (min-width:1100px){
      width: auto;
  }
  }
  .flex {
    display: flex;
    margin-bottom: 80px;
    gap: 7%;
     
  @media (max-width:1300px) and (min-width:1100px){
       gap:13%;
  }

  }
  .left h3 {
    color: #fff;
    font-size: 35px;
    line-height: 36px;
    font-weight: 800;
    padding-right: 50px;
    margin-top: 60px;
    font-family: "Playfair Display", serif;
    margin-left: 40px;
    width: 100%;
    @media (max-width: 600px) {
      margin: 0px;
      padding-right: 0px;
          margin-left: -39px;
    }
  }
  .right {
    display: flex;
    border-bottom: 1px solid lightgray;
    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }
  }
  .videoContainer {
    padding: 40px;
    margin-top: 30px;
    transform: translate(-90px, -40px);
    position: relative;
    z-index: 2;
    @media (max-width: 1200px) {
      position: relative;
      transform: none;
      padding: 0px;
      width: 100%;
      height: 100%;
    }
  }
  .yellowBtn {
    position: absolute;
    @media(max-width:1200px){
      position: absolute;
    }
  }
  .right h3 {
    text-align: left;
    padding-left: 0px;
    padding-bottom: 10px;
    margin-top: 66px;
    font-weight: 400;
    font-size: 38px;
    color: #4d4d4d;
    font-family: "Playfair Display", serif;
     @media(max-width:1200px){
      margin-left: 0px;
    }
    @media (max-width: 500px) {
      margin-left: 0px;
      color: #424242;
      padding-right: 0;
      font-weight: 400;
      margin-bottom: 15px;
      font-size: 30px;
    }
  }
  .right p {
    text-align: left;
    padding-left: 0px;
    color: #4d4d4d;
    font-size: 22px;
    font-weight: 400px;
    margin-left: -45px;
    @media(max-width:1200px){
      margin-left: 0px;
    }
    @media (max-width: 500px) {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      line-height: 26px;
      color: #818181;
      font-weight: 400;
      margin-left: 0px;
    }
  }
`;

export const LeftHunger = styled.a`
  @media (max-width: 1200px) {
    width: 95%;
    padding: 30px 0px 30px 50px;
  }
  @media (max-width: 600px) {
    width: 84%;
    padding: 30px 0px 30px 50px;
  }
  
  @media (max-width:1300px) and (min-width:1100px){
           width: 326px;
  }
  width: 32%;
  background: #424242;
  color: #fff;
  position: relative;
  z-index: 1;
  display: inline-block;
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
    background: #424242;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-12deg, 0deg);
    -moz-transform: skew(-12deg, 0deg);
    -ms-transform: skew(-12deg, 0deg);
    -o-transform: skew(-12deg, 0deg);
    transform: skew(-12deg, 0deg);
  }
`;

export const CharityPoor = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Lives = styled.div`
width:100%;
  .hiw{
    position:relative;
    .heading-container{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
  .hiwTitle {
    color: white;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
  .bg {
    background-color: #00baa3;
    background-image: url(http://localhost:3000/_next/static/media/huImg.1ca04ec5.svg);
    opacity: 0.5;
    position: unset;
    z-index: 1;
    width: 100%;
    height: 482px;
    background-size: cover;
    @media (max-width: 380px) {
      background-color: #00baa3;
      background-image: url(http://localhost:3000/_next/static/media/huImg.1ca04ec5.svg);
      opacity: 0.5;
      position: unset;
      z-index: 1;
      width: 100%;
      height: 492px;
      background-size: cover;
    }
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
.image{
      width: 100%;
      height: 100%;
}
  .hiw{
    position:relative;
    .heading-container{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
  .hiwTitle {
    color: white;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
  position: relative;
  width:100%;
  z-index: 1;
  .bg {
    background-color: #e95252;
    opacity: 0.7;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
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
.hiw{
  position:relative;
  .heading-container{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
.hiwTitle {
  color: white;
  font-size: 50px;
  font-weight: 800;
  text-align: center;
}
  position: relative;
  width:100%;
  .image{
    width:100%;
    height: 100%;

  }
  z-index: 1;
  .bg {
    background-color: #f1ae44;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
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
  @media(max-width:1300px){
        gap: 56px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
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
  @media (max-width: 1200px) {
    width: 92%;
    padding: 0px 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0px;
  }
  .aliq {
    font-size: 18px;
    line-height: 32px;
    color: #818181;
    font-weight: 400;
    margin-right: 60px;
    padding: 57px 0px;
    text-align: justify;
    @media (max-width: 1200px) {
      font-family: "Poppins", sans-serif;
      padding: 0px 10px;
      font-size: 25px;
      text-align: justify;
      margin: 0px 20px;
    }
    @media (max-width: 600px) {
      margin: 0px 10px;
      padding: 0px;
      font-size: 17px;
      line-height: 27px;
    }
  }
`;
export const Evanto = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 90px;
`;
export const Latest = styled.div`
  margin: 60px 0px 60px 0px;
  @media (max-width: 600px) {
    margin: 60px 0px 0px 0px;
  }
  .latest {
    text-align: center;
    width: 57%;
    @media (max-width: 1200px) {
      font-size: 36px;
      line-height: 38px;
      width: auto;
    }
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
  margin-top: 106px;

  .image {
    @media (max-width: 1200px) {
      width: 100%;
      padding-right: 45px;
    }
    @media (max-width: 414px) {
      padding: 0px;
    }
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  .create {
    flex: 0.6;
    position: relative;
    padding-left: 45px;
    @media(max-width:1300px){
          padding-left: 28px;
    }
    @media (max-width: 414px) {
      padding: 12px;
    }
  }
  .form {
    flex: 1.5;
    position: relative;
    @media (max-width: 600px) {
      margin: 10px;
    }
  }
`;
export const Line = styled.div`
  width: 83%;
  height: 1px;
  background: #f2f0ec;
  margin-top: 40px;
  @media(max-width:1300px){
        margin-left: 28px;
  }
  @media (max-width: 414px) {
    margin: 1px 11px;
    width: 94%;
  }
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
  @media (max-width: 1200px) {
    height: auto;
  }
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
    @media (max-width: 500px) {
      word-wrap: break-word;
      font-size: 50px;
      line-height: 60px;
      padding: 0px 10px;
    }
  }
`;
export const Cards = styled.div`
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 60px;
  .icon {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 20px;
  }
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
export const VolunteersCards = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin: 10px !important
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 60px;
  @media(max-width:1300px){
        margin: 60px 35px;
  }
  .icon {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 20px;
  }
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
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
  .textContainer{
    @media (max-width:1300px) and (min-width:1100px){
      width:94%;
    }
    @media(max-width:1100px){
      width:100%!important;
    }
  }
  .image {
    @media (max-width: 600px) {
      width: 100%;
      height: auto;
    }
  }
  flex: 0.4;
  .mainDiv {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .brownBlock {
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
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
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
  margin: 66px;
@media(max-width:1300px){
      margin: 66px 32px;

}
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 12px!important;
  }
  .image {
    @media (max-width: 1200px) {
      width: 100%;
      height: auto;
    }
  }
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
    font-weight: 700;
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  h3 {
    margin-top: 30px;
  }
  a:hover {
    color: #f1ae44;
  }
  .para {
    font-size: 18px;
    line-height: 30px;
    color: #818181;
    font-weight: 400;
    text-align: justify;
    margin-right: 60px;
    @media (max-width: 600px) {
      margin-right: 0px;
    }
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
  @media (max-width: 600px) {
    padding: 10px;
  }
  .image {
    width: 100%;
    height: auto;
  }
`;

export const Charity = styled.div`
  flex: 0.6;
  width: 100%;
  padding-left: 45px;
  position: relative;
  @media(max-width:1300px){
        padding-left: 0px;
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
  }
  .create {
  }
  .charity {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 32px;
    padding-top: 30px;
    color: #424242;
    text-decoration: none;
    font-weight: 700;
    font-family: "Playfair Display", serif;
    @media (max-width: 600px) {
      font-size: 36px;
      line-height: 42px;
    }
  }

  .aliq {
    font-size: 22px;
    line-height: 32px;
    color: #818181;
    font-weight: 400;
    margin-right: 140px;
    text-align: justify;
    @media (max-width: 414px) {
      margin-right: 0px;
    }
    @media (max-width: 600px) {
      font-size: 17px;
      line-height: 27px;
    }
  }
`;

export const CharityData = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Raised = styled.div`
.icon{
      font-size: 77px;
}
  flex: 0.6;
  padding-left: 12px;
  padding-right: 151px;
     

  @media (max-width: 1200px) {
    padding-right: 0px;
  }
  .raised {
    border-bottom: 2px solid #f2f0ec;
   margin: 30px 0px 30px 18px;
    display: flex;
    gap: 27px;
    align-items: center;
    width: 90%;
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
  @media (max-width: 1200px) {
    position: unset;
    height: auto;
    width: 100%;
  }

  flex: 0.6;
  position: absolute;
  width: 50%;
  right: 0;
  top: -53%;
  z-index: 2;
  .darkness {
    padding: 75px 75px 25px 75px;
    @media (max-width: 600px) {
      padding: 20px;
    }
  }
`;
export const Content = styled.div`
  @media (max-width: 600px) {
    margin: 10px;
  }
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
    @media (max-width: 900px) {
      font-size: 36px;
      line-height: 45px;
    }
  }
`;
export const Donate = styled.div`
  flex: 0.6;
`;

export const Fundraising = styled.div`
  background-image: url(${(props) => props.src});
  height: 80%;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 120px 12px;
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
    width: 72%;
    font-size: 70px;
    line-height: 84px;
    margin-bottom: 48px;
    font-weight: 800;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: left;
    @media (max-width: 600px) {
      margin-left: 0px;
      font-size: 50px;
      line-height: 60px;
      margin-bottom: 44px;
      width: 100%;
    }
  }
`;

export const SponsorCause = styled.div`
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #863bae;
  }
  .left h3 {
    font-size: 34px;
    font-weight: 700;
    color: white;
    padding: 20px;
    text-align: left;
    margin-left: 20px;
    padding-left: 60px;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  .left {
    padding-top: 20px;
  }
  .right {
    width: 100%;
    padding-top: 20px;
  }
  .right h3 {
    padding-left: 60px;
    font-size: 34px;
    font-weight: 700;
    color: white;
    padding: 20px;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
`;

export const Sponsor = styled.div`
  width: 100%;
  background: #50bac3;
  color: black;
  position: relative;
  z-index: 1;
  display: inline-block;
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
    background: #50bac3;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-12deg, 0deg);
    -moz-transform: skew(-12deg, 0deg);
    -ms-transform: skew(-12deg, 0deg);
    -o-transform: skew(-12deg, 0deg);
    transform: skew(-12deg, 0deg);
  }
`;

export const Btn = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  background: #f1ae44;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 10px 0 15px;
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

export const BtnStatic = styled.a`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
  font-size: 12px;
  text-transform: uppercase;
  background: ${({ backgroundColor }) => backgroundColor};
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
  &:hover,
  &:hover:after {
    background-color: ${({ hoverBg }) => hoverBg};
    color: #fff;
  }
`;

export const Card = styled.div`
  @media (max-width: 1200px) {
    .cards {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 60px;
  @media (max-width: 600px) {
    margin: 10px;
  }
  .cards {
    display: flex;
    gap: 10px;
  }
  .image {
    padding: 0;
    @media (max-width: 1200px) {
      width: 100%;
      height: auto;
    }
  }
`;
export const Card1 = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
  }
  .cardImg {
       margin: 0px 0 20px 0px;
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  .card1 {
    width: 370px;
    background-color: #f2f0ec;
    @media (max-width: 1200px) {
      width: 98%;
    }
    @media only screen and (max-width: 900px) and (min-width: 700px) {
      width: 97%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  h3 {
    font-size: 36px;
    padding-left: 20px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
    padding-top: 40px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    padding-left: 20px;
    line-height: 32px;
    color: #818181;
    padding-top: 20px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }
  h6 span {
    color: #e36955;
    line-height: 24px;
  }
  h6 {
    padding-top: 20px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .BtnRead:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnRead {
    width: 160px;
    background-color: ${color._e36955};
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 10px 0 10px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }

  h6 {
    padding-left: 20px;
  }
`;
export const Card2 = styled.div`
  .red {
    background-color: ${color._e36955};
  }
  .cardImg {
    margin: 0 0 20px 20px;
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  .card2 {
    margin: 0 0 20px 20px;
    width: 370px;
    background-color: #f2f0ec;
    @media (max-width: 1200px) {
      width: 98%;
    }
    @media only screen and (max-width: 900px) and (min-width: 700px) {
      width: 97%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  h3 {
    font-size: 36px;
    padding-left: 20px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
    padding-top: 40px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    padding-left: 20px;
    color: #818181;
    padding-top: 20px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }
  h6 span {
    color: #e36955;
    line-height: 24px;
  }
  h6 {
    padding-top: 20px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .BtnRead:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnRead {
    width: 160px;
    background-color: ${color._e36955};
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 10px 0 10px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }

  h6 {
    padding-left: 20px;
  }
`;
export const Card3 = styled.div`
  .cardImg {
    margin: 0 0 20px 20px;
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  .card3 {
    margin: 0 0 20px 20px;
    width: 370px;
    background-color: #f2f0ec;
    @media (max-width: 1200px) {
      width: 98%;
    }
    @media only screen and (max-width: 900px) and (min-width: 700px) {
      width: 97%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  h3 {
    font-size: 36px;
    padding-left: 20px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
    padding-top: 40px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #818181;
    padding-top: 20px;
    padding-left: 20px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }
  h6 {
    padding-left: 20px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }
  h6 span {
    color: #e36955;
    line-height: 24px;
  }
  h6 {
    padding-top: 20px;
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }
  .BtnRead:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnRead {
    width: 160px;
    background-color: ${color._e36955};
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 10px 0 10px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
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
`;
export const DonationBtnCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const DonationBtnStart = styled.div`
  margin-left: 92px;
`;
export const DonationBtnCenterPadding = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 77px;
`;

export const BtnCenter = styled.div`
  margin-left: 320px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const BtnBg = styled.div`
  .icon {
    text-align: center;
    font-size: 50px;
    padding: 6px;
    margin-top: 10px;
  }
  .name {
    text-align: center;
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    margin-left: 0px;
  }
  @media(max-width:1300px){
      margin-left: 0px;
      width: 37%;
      padding:0px;
  }
  margin-left: 30px;
  width: 141px;
  height: 140px;
  text-transform: uppercase;
  background: ${({ backgroundColor }) => backgroundColor};
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
`;
export const BtnBottom = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;
export const FoorterSection = styled.div`
  .section-area {
    padding-top: 55px;
    padding-bottom: 60px;
    background-color: #50bac3;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .text-center {
    text-align: center !important;
  }
  .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    .col-sm-6 .col-lg-6 {
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
    }
    @media (min-width: 992px) {
      .col-lg-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
    @media (min-width: 576px) {
      .col-sm-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }
  .section-area .section-item .cta__title {
    font-size: 30px;
    color: #fff;
    font-weight: 800;
    margin-bottom: 30px;
    line-height: 34px;
  }
  .theme-btn {
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
  }
  .section-area:after {
    content: "";
    position: absolute;
    display: block;
    width: 51%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #863bae;
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-12deg, 0deg);
    -moz-transform: skew(-12deg, 0deg);
    -ms-transform: skew(-12deg, 0deg);
    -o-transform: skew(-12deg, 0deg);
    transform: skew(-12deg, 0deg);
  }
`;
