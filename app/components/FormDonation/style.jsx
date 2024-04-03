import styled from "styled-components";

export const FormDetails = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
.continueBtn{

}
.btn {   
  -ms-transform: skewX(20deg);
  -webkit-transform: skewX(20deg);
  transform: skewX(20deg);  
  display: inline-block;
  color: #fff;

}
.BtnDonate:hover{
  background-color: #e36955;
  cursor:pointer;
}
.BtnDonate{
 margin-top:20px;
  background: #f1ae44;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 30px 0 35px;
  line-height: 49px;
  border: none;
  width:22%;
  border-radius: 0;
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  cursor:pointer;
}
`;
export const Input = styled.input`
height: 72px;
margin-top:20px;
width:59%;
background-color: #f2f0ec;
outline:none;
border:none;
padding: 19px 30px;
&::placeholder{
    color: #818181;
    font-weight: 500;
    font-size: 16px;
}
`;
export const TextArea=styled.textarea`
height: 110px;
margin-top:20px;
width:59%;
background-color: #f2f0ec;
outline:none;
border:none;
resize:none;
padding: 19px 30px;
&::placeholder{
    color: #818181;
    
    font-weight: 500;
    font-size: 16px;
}
`
export const FormHead=styled.div`
margin-top: 97px;
display: flex;
justify-content: center;
`
export const Form = styled.div`
position: absolute;
height: 159%;
background: #6610f2;
width: 100%;
.donation{
  margin-top: 50px;
}
  .donate {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: white;
  }
  .donateNow {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    color: white;
  }
  background: #6f42c1;
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
export const ContinueBtn =styled.div`
width: 100%;
margin-left: 236px;
margin-top: 15px;
`