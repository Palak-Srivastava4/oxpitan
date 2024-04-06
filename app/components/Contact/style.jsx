import styled from "styled-components";

export const BreadCrumb = styled.div`
    flex-direction: column;
  background-color: #f2f0ec;
  position: relative;
  z-index: 1;
  color: #424242;
  height: 300px;
  display: flex;
  justify-content: center;
  .home{
        margin-left: 49px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const Contact = styled.div`
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 0;
  color: #424242;
  font-weight: 800;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const About=styled.div`
display:flex;
margin-top:50px;
gap:59px;
`
export const Lorem=styled.div`
flex:0.4;

.name{
    color: #fff;
    font-weight: 800;
    font-size: 26px;
    margin-bottom: 40px;
  
}
.detail{
    color: #fff;
    line-height: 30px;
    font-weight: 500;
    height: 270px;
    font-size: 16px;
 padding:70px;
}
`
export const Touch = styled.div`
  flex: 0.6;
  .touch {
    padding: 86px 20px 0px 0px;
}
  }
  .touchwith {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: #424242;
  }
  .message {
    color: #863bae;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    display: block;
  }
  .aliq {
    line-height: 30px;
    margin-top: 43px;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
  .itemStyle {
    display: flex;
    gap: 20px;
    margin-top: 39px;
  }
  .colorChng {
    width: 43px;
    height: 43px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  flex: 0.6;
  .mainForm {
    padding: 59px 20px 0px 47px;
  }
`;

export const FormSection = styled.div`
  display: flex;
`;

export const MainForm = styled.div`
  .nameAddress {
    display: flex;
    gap: 27px;
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
    width:43%;
    margin-top:10px;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const Input = styled.input`
  height: 60px;
  margin-top: 20px;
  background-color: #f2f0ec;
  outline: none;
  width: 48%;
  border: none;
  padding: 19px 30px;
  &::placeholder {
    color: #818181;
    font-weight: 500;
    font-size: 16px;
  }
`;
export const InputLocation = styled.input`
  height: 60px;
  margin-top: 20px;
  width: 100%;
  background-color: #f2f0ec;
  outline: none;
  border: none;
  padding: 19px 30px;
  &::placeholder {
    color: #818181;
    font-weight: 500;
    font-size: 16px;
  }
`;
export const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 130px;
  margin-top: 20px;
  width: 100%;
  background-color: #f2f0ec;
  outline: none;
  border: none;
  resize: none;
  padding: 19px 30px;
  &::placeholder {
    color: #818181;

    font-weight: 500;
    font-size: 16px;
  }
`;
export const BtnDark = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  background:${({ backgroundColor }) => backgroundColor};
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
    background-color: ${({ hover }) => hover};
    color: #fff;
  }
`;
export const AboutSectionBox=styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
        margin: 100px 0px 100px 0px;
`
export const BtnBG =styled.div`

  text-transform: uppercase;
  background:${({ backgroundColor }) => backgroundColor};
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1px;
  padding:${({padding})=>padding};
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
`
