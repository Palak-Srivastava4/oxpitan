import styled from "styled-components";


export const BreadCrumb = styled.div`
  background-color: #f2f0ec;
  position: relative;
  z-index: 1;
  color: #424242;
  height: 300px;
  @media (max-width: 991px){
    width:100%;
  }
  @media (min-width: 991px){
    width:100%;
  }
`;

export const Contact = styled.div`
display:inline-block;
  font-size: 74px;
  line-height: 60px;
  letter-spacing: 0;
  color: #424242;
  font-weight: 900;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
   font-family: "Playfair Display", serif;
  .head{
    margin-top:110px;
    margin-bottom:80px;
  }
    .headProg{
     margin-top:110px;
    margin-bottom:80px;
    text-align: center;
  }
.volHead{
    margin-top:110px;
    margin-bottom:80px;
    text-align: center;
}
@media (max-width: 767px){
  .volHead{
     margin-top:50px;
    margin-bottom:80px;
    font-size: 58px;
  }
    .headProg{
    font-size: 56px;
  }
  .head{
    font-size:64px;
  }
}
  /* @media (max-width: 991px){
    width:100%;
     font-size: 50px;
  } */
    /* @media (min-width: 991px){
    width:100%;
     font-size: 60px;
  } */
`;

export const About = styled.div`
  margin-top: 80px;
  width: 100%;
  height: auto;

  @media (max-width: 991px){
    width:100%;
    margin-top: 0;
    .aboutimg{
      width:100%;
      height: auto;
      margin-top:120px;
      margin-bottom: 14%;
    }
    .container{
      width:100%;
      padding:0;
      margin:0;
    }
  }
  @media (min-width: 991px){
    width:100%;
    margin-top:0;
     .aboutimg{
      width:100%;
      height: auto;
      margin-top:120px;
      margin-bottom: 14%;
    }
  }
`;
export const Discover = styled.div`
  display: flex;
  margin-top: 50px;
    @media (max-width: 991px){
    display: block;
    width:100%;
    margin-top: 0;
  }
  .container{
    padding:0;
    margin:0;
  }
`;
export const Oxpitan = styled.div`
  flex: 0.6;
@media (max-width: 991px){
/* width: 100%; */
.image{
  width: 100%;
  height:auto;
  padding:0;
  margin:0;
}
}
`;
export const Agency = styled.div`
  flex: 0.6;
  padding-top: 34px;
  .discover {
    font-size: 48px;
    line-height: 60px;
    font-weight: 700;
    font-family: "Playfair Display", serif;
  }
  .profit {
    color: #863bae;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
  }
  .elit {
    margin-top: 45px;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }

  @media (max-width: 991px){
 width: 100%;
 margin-top: 10%;
 padding:0;
 display:inline-block;
    }
    @media (min-width: 991px){
      width:100%;
      margin-left:4%;
    }
`;
export const Pictures = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  .spacing{
    display: flex;
     gap: 20px;
    margin-bottom: 100px;
  }
`;
export const Images = styled.div`
  flex: 0.4;
`;
export const Register = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;

  .register {
    font-size: 50px;
    line-height: 60px;
    font-weight: 600;
    text-align:center;
    color: #424242;
     font-family: "Playfair Display", serif;
  }
  .join {
    color: #863bae;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
  }
`;
export const FormData = styled.div`
.submit{
  margin-top:3%;
}
  flex: 0.6;
  padding-left: 46px;
  @media (max-width: 991px){
    padding:0px;
    padding-bottom:30%;
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }
  .BtnDonate:hover {
    background: #e36955;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: #f1ae44;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    width: 30%;
    height: 52px;
    margin-top: 20px;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 240px;
  resize: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  border: none;
  background-color: #f2f0ec;
  color: #818181;
  padding: 19px 30px;
  font-weight: 500;
  outline: none;
`;
export const Input = styled.input`
  width: 100%;
  height: auto;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  border: none;
  background-color: #f2f0ec;
  color: #818181;
  padding: 19px 30px;
  outline: none;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Form = styled.div`
  display: flex;
  padding-bottom: 12%;

@media (max-width: 600px){
  display: inline-block;
  .numEmail{
      flex-direction:column;
      /* align-items:center;
      justify-content: center; */
    }
    .num{
      flex-direction:column;
      justify-content:center;
      align-items: center;
    }
    .email{
      margin-top:8%;
      flex-direction:column;
      justify-content:center;
      align-items: center;
    }
     .container{
  padding:0;
  margin:0;
 }
}
@media (max-width: 991px){
  display: inline-block;
}
.num{
  display:flex;
  flex-direction:column;
}
.email{
  display:flex;
  flex-direction:column;
}
  .numEmail {
    display: flex;
    border-top: 2px solid #f2f0ec;
    border-bottom: 2px solid #f2f0ec;
    margin-top: 52px;
    padding-top: 40px;
    margin-bottom: 38px;
    justify-content: space-between;
  }
  .call {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 8px;
    color: #424242;
  }
  .no {
    color: #e36955;
    font-size: 18px;
  }
  #break{
    margin-bottom:12%;
  }
`;
export const Requirements = styled.div`
  flex: 0.6;
  .tick {
    color: #e36955;
    font-size: 14px;
  }
  .vixat {
    margin-top: 10px;
  }
  .para {
    font-size: 18px;
    line-height: 28px;
    color: #818181;
    font-weight: 400;
  }
  .require {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 25px;
    margin-top: 25px;
    color: #424242;
    font-family: "Playfair Display", serif;
  }
  @media (max-width: 991px){
    .image{
      height:auto;
      width:100%;
      padding-top:40px;
    }
  }
`;
export const Team = styled.div`
margin: 3% ;
@media (max-width: 991px){
  margin:2% 0;
}
  .abc {
    background: blue;
    position: relative;
    width: 5%;
  }
  .xyz {
    background: red;
    font-size: 12px;
    margin-left: 18px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    width: 30%;
    height: 52px;
    margin-top: 20px;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const First = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
     .container{
      margin:0;
      padding:0;
    }
  }
  .textContainer{
    @media (max-width:1300px) and (min-width:1100px){
      width:94%;
      .container{
      margin:0;
      padding:0;
    }
    }
    @media(max-width:1100px){
      width:100%!important;
        .container{
      margin:0;
      padding:0;
    }
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
  
  margin: 120px ;
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

export const SponsorsData = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
   margin:60px 0;
  gap: 9%;
    @media (max-width: 991px){
    display:inline-block;
  }
`;


export const Evanto = styled.div`
height:400px;
  display: flex;
  justify-content:flex-end;
  align-items:center;
  background-color: #f2f0ec;
 gap:60px;
`;

export const Line=styled.div`
height:2px;
background:lightgray;
margin:0 7%;
`
export const CompanyName = styled.div`
@media (max-width:991px){
  margin-top:4%;

}
  flex: 0.9;
   padding:0 2%;
  .name {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 6px;
    color: #424242;
  }
  .aut {
    font-size: 14px;
    color: #e36955;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .para {
    font-size: 16px;
    line-height: 30px;
    margin-top: 34px;
    color: #818181;
    font-weight: 400;
  }
`;

export const BtnDark = styled.div`
margin-left:7%;
  font-size: 12px;
  text-transform: uppercase;
  background: #E36955;
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
    background: #E36955;
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

`;

export const FingerPrints = styled.div`
  @media(max-width:1200px){
    height: auto;
  }
margin-top:80px;
margin-bottom:80px;
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
      @media(max-width:500px){
          word-wrap: break-word;
          font-size:59px;
    }
  }
`;
export const FAQ = styled.div`
background-color: #f2f0ec;
display:flex;
justify-content: center;
align-items:center;
@media (max-width: 991px){
display:inline-block;
width:100%;
padding-bottom:160px;
}
@media (min-width: 991px){
  display:flex;
}
`;
export const Heading = styled.div`
flex: 0.6;
margin:80px 40px 80px 40px;
.container{
  padding:0 0px 100px 110px;
}
.head {
  font-size: 54px;
  line-height: 66px;
  font-weight: 700;
  color: #424242;
  font-family: "Playfair Display", serif;
}
.subhead {
    color: #863bae;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom:60px;
  }
  @media (max-width: 991px){
    margin:40px 0 40px 0;
.head .subhead{
  margin:40px 10px 40px 10px;
}
    .faqimg{
      width: 100%;
  height:auto;
  padding:0;
  margin:0;
    }
    .container{
  padding:2%;
}
  }
  @media (min-width: 991px){
    flex:0.5;
    margin:0;
    margin-top:8%;
    padding:0;
  }
`;

export const Ques = styled.div`
width:100%;
margin-right: 100px;
@media (max-width: 991px){
  margin-bottom:0 40px 100px 40px;
}
  @media (min-width: 991px){
    flex:0.5;
    margin:0;
    margin-left:1%;
     margin-right:1%;
     align-items:center;
    padding:0;
  }
`;
export const Head = styled.div`
/* margin-top:20px; */
@media (max-width:991px){
  padding:0 2% 0 2%;
}
.icon-right{
    text-align: end;
    padding-right: 30px;
}
.headingChanges{
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
    align-items: center;
}
.headerBg:hover{
  background-color: #e95252!important;
  color: #fff!important;
  position: relative;
  box-shadow:none!important;

}
.header{
display: grid;
gap:40px;
}
.accordion-body{
  background-color: red;
  color:#ffffff;
}
h3{
  padding:20px;
  font-size:24px;
   width: 95%;
}
span{
  color: gray;
  text-align:right;
  justify-content:right;
}
`; 

export const para = styled.div`
@media (max-width:991px){
  padding:0 10px 0 10px;
}
p{
  padding:20px;
    font-size:18px;
  line-height: 28px;
  color: gray;
}`;
export const BtnDon = styled.div`
display:flex;
justify-content:center;
`;
export const BtnDarkCenter = styled.div`
margin-bottom:60px;
  font-size: 12px;
  text-transform: uppercase;
  background: #E36955;
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
    background: #E36955;
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
    background-color: #F1AE44;
    color: #fff;
  }
`;


export const DonationBtnCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Latest = styled.div`
   @media(max-width:1200px){
          font-size: 36px;
    line-height: 38px;
    width:auto;
      .cause{
    text-align:left;
  }
    }

  margin: 60px 0px 60px 0px;
  .latest {
    text-align: center;
    width: 100%;
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
    background-color: #e36955;
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

// export const LatestCause = styled.div`
// .latest {
//     text-align: center;
//     width: 100%;
//   }
//   .cause {
//     font-size: 50px;
//     line-height: 60px;
//     font-weight: 700;
//     color: #424242;
//     font-family: "Playfair Display", serif;
//   }
//   .help {
//     color: #863bae;
//     font-size: 14px;
//     text-transform: uppercase;
//     font-weight: 500;
//     margin-top: 8px;
//     display: block;
//   }
// `;

export const BtnBg = styled.div`
.img{
  text-align:center;
  font-size:50px;
  padding:0 16px;
  margin-top:18px;
}
   margin-left:2%;
    width: 180px;
    height: 140px;
  text-transform: uppercase;
  background:${({ backgroundColor }) => backgroundColor};
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

export const Unsolved = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin: 80px;
.image{
  height:70%;
  width:50%;
}

@media (max-width: 576px){
  display:inline-block;
  margin:0;
  .image{
   margin-top:20%;
    height:100%;
    width:100%;
    padding:0 3%; 
  }
}
@media (max-width: 991px){
  display:inline-block;
  margin:0;
  .image{
    margin-top:20%;
    height:100%;
    width:100%;
    padding:0 3%;
  }
}

`;

export const Details = styled.div`
li{
font-size:18px;
line-height:24px;
color:gray;
padding:8px;
margin-left:40px;
list-style:none ;
text-align: justify;
}

@media (max-width: 991px){
  margin-bottom:10%;
   ul{
    margin:2%;
    padding:0;
  }
  li{
    margin:0;
    margin-right:4%;
  }
}`;
export const EvantoImg = styled.div`
@media (max-width: 991px){
  width:100%;
  height:auto;
}
`;
