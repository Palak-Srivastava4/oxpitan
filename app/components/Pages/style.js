import styled from "styled-components";

export const BreadCrumb = styled.div`
  background-color: #f2f0ec;
  position: relative;
  z-index: 1;
  color: #424242;
  height: 300px;
`;
export const Contact = styled.div`
display:inline-block;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 0;
  color: #424242;
  font-weight: 800;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  .head{
    margin-top:80px;
    margin-bottom:110px;
  }
`;

export const About = styled.div`
  margin-top: 80px;
`;
export const Discover = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const Oxpitan = styled.div`
  flex: 0.6;
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
    line-height: 30px;
    margin-top: 45px;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;
export const Pictures = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
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
    font-weight: 700;
    color: #424242;
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
  flex: 0.6;
  padding-left: 46px;
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

  .numEmail {
    display: flex;
    border-top: 2px solid #f2f0ec;
    border-bottom: 2px solid #f2f0ec;
    margin-top: 52px;
    padding-top: 40px;
    padding-bottom: 38px;
    justify-content: space-between;
  }
  .call {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 8px;
    color: #424242;
  }
  .no {
    color: #e36955;
    font-size: 18px;
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
`;
export const Team = styled.div`
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
  flex: 0.4;
  .brownBlock {
    height: 100px;
    background-color: #50bac3;
    text-align: center;
    margin-top: 20px;
  }
  .title {
    font-size: 20px;
    text-transform: capitalize;
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
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin: 50px 0px;
    .icon{
  text-align:center;
  font-size:40px;
  font-weight:800;
  margin-bottom:20px;
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

  .headText {
    padding-right: 35px;
    padding-left: 35px;
    margin-bottom: 20px;
  }
`;

export const SponsorsData = styled.div`
  display: flex;
  gap: 9%;
  margin-top: 50px;
`;
export const Evanto = styled.div`
  flex: 0.3;
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
    position: relative;
    right: 57px;
    height: 32px;
  }
  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .maindiv:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: #e36955;
    height: 150px;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-15deg);
    -webkit-transform: skewX(-15deg);
    transform: skewX(-15deg);
    cursor: pointer;
    width: 72%;
    margin-left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .maindiv {
    width: 77%;
    position: relative;
    background-color: #e36955;
    height: 150px;
  }
`;
export const Line=styled.div`

height:2px;
background:#f2f0ec;
margin-top: 57px;
margin-bottom: 57px;

`
export const CompanyName = styled.div`
  flex: 0.9;
  .name {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 6px;
    margin-top: -6px;
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
margin-left:80px;
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
  
  .center{
    margin-left:800px;
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

export const FingerPrints = styled.div`
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
  }
`;
export const DonationBtnCenter = styled.div`
  display: flex;
  justify-content: center;
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