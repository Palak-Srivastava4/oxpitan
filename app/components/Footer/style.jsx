import styled from "styled-components";

export const FooterBackground = styled.div`
  background-image: url(${(props) => props.src});
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 30px 0px;
`;
export const Copy = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid #555555;
  margin-top: 45px;
  padding-top: 45px;
  padding-bottom: 45px;
  .copy {
    font-size: 16px;
    color: #bfbfbf;
  }
  a {
    font-size: 16px;
    color: #bfbfbf;
    text-decoration: none;
  }
`;
export const MainContainer = styled.div`
  .itemStyle {
    display: flex;
    justify-content: center;
    gap: 20px;
    @media (max-width: 1200px) {
      margin-top: 17px;
      justify-content: center;
    }
  }
  .colorChng {
    width: 43px;
    height: 43px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }

  .itemIcon {
    display: flex;
    gap: 10px;
    justify-content: end;
  }
  .textItem {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 31px;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: #e36955;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 14%;
    height: 63px;
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
  .newsStay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .input {
    width: 36%;
    height: 63px;
    background-color: #343434;
    color: #bfbfbf;
    outline: none;
    border: none;
    padding: 0px 20px;
    @media (max-width: 600px) {
      width: 100%;
      height: 48px;
    }
  }
`;

export const BtnBg = styled.a`
  font-size: 18px;
  text-transform: uppercase;
  background: ${({ backgroundColor }) => backgroundColor};
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
    background-color: #f1ae44;
    color: #fff;
  }
`;

export const NewsContainer = styled.div`
  padding-bottom: 45px;
  .news {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
  }
  .update {
    color: #f1ae44;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    display: block;
  }
`;
export const Blogs = styled.div`
  display: flex;
  margin-top: 80px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  .indexData {
    flex: 0.3;
  }
  .head {
    font-size: 24px;
    color: #fff;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 23px;
  }
  .sub {
    color: #bfbfbf;
    font-size: 16px;
    line-height: 38px;
    font-weight: 400;
  }
  .subData:hover {
    color: #f1ae44;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const BtnDark = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  background: #e36955;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 30px 0 35px;
  line-height: 58px;
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
export const Text = styled.div`
  color: #ffffff;
  margin: 30px 10px;
  text-align: center;
`;
