import styled from "styled-components";
import { color } from "@/app/Theme/color";

export const NavBtn = styled.div`
  cursor: pointer;
`;

export const Nav = styled.ul`
  background: white;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0px;
`;
export const RightContainer = styled.div`
  display: flex;
  width: 100%;
  color: black;
  align-items: end;
  justify-content: right;
  // padding-top: 20px;
  padding-right: 100px;
  flex-wrap: wrap;
  background-color: rgb(242, 240, 236);
  @media (max-width: 1200px) {
    display: flex;
    background-color: rgb(242, 240, 236);
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
`;
export const SocialLinks = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  .flex {
    display: flex;
    justify-content: center;
    background-color: rgb(242, 240, 236);
    align-items: center;
  }
  @media (max-width: 1200px) {
    .flex {
      display: flex;
      flex-direction: column;
      background-color: rgb(242, 240, 236);
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0px;
    }
    .left h3 {
      font-size: 12px;
    }
  }
  @media (max-width: 1200) {
    .left {
      font-size: 10px;
    }
  }
  .left {
    display: flex;
  }
  .left h3 {
    font-size: 16px;
    font-weight: 400;
    padding: 20px;
    text-align: center;
    @media (max-width: 1200px) {
      font-size: 12px;
      padding: 14px;
    }
  }
  h3 span {
    color: #f1ae44;
  }

  .right ul li {
    display: inline-block;
    list-style: none;
    margin: 8px 12px;
  }
  .right ul li a {
    color: rgb(87, 86, 86);
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    position: relative;
    font-family: "DM Sans", sans-serif;
    @media (max-width: 1200px) {
      font-size: 12px;
    }
  }
`;

export const Btn = styled.div`
  @media (max-width: 1200px) {
    background: rgb(242, 240, 236);
    display: flex;
    justify-content: center;
    color: rgb(87, 86, 86);
    padding: 0px;
    line-height: 0px;
  }
  @media (max-width: 450px) {
    background: rgb(242, 240, 236);
    display: flex;
    flex-direction: coloum;
    justify-content: center;
    color: rgb(87, 86, 86);
    padding: 0px;
    line-height: 0px;
  }
  font-size: 12px;
  width: 75%;
  background: #424242;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 30px 0 35px;
  line-height: 19px;
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
    background: #424242;
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
    @media (max-width: 1200px) {
      background: rgb(242, 240, 236);
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  text-decoration: none;
`;

export const NavLink = styled.a`
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  padding: 15px 25px;
  background: white;
  color: black;
  display: block;
  display: flex;
  gap: 40px;
  color: #818181;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 17px;
  cursor: pointer;
  color: #818181;
  text-decoration: none;

  &:hover {
    color: #818181;
    text-decoration: none;
  }
`;

export const DropdownMenu = styled.ul`
  padding-left: 5px;
  position: absolute;
  width: 15em;
  display: none;
  list-style: none;
  ${NavItem}:hover & {
    display: block;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;

export const DropdownItem = styled.li``;

export const SubDropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  background: #555;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 10px 10px;
  }
`;
export const DataNav = styled.div`
  position: sticky;
  top: -1px;
  z-index: 999;
  background: white;
`;
export const Image = styled.div`
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .donateBtn {
    background-color: ${color._e36955};
    position: relative;
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
  width: 40%;
  .imgLogo {
    display: flex;
    justify-content: space-between;
  }
`;
export const NavItems = styled.div`
  display: flex;
  gap: 40px;
  color: #818181;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  margin: 0 22px;
  padding-bottom: 17px;
  cursor: pointer;
  a {
    color: #818181;
    text-decoration: none;
  }
  a:hover {
    color: #818181;
    text-decoration: none;
  }
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0px;
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
export const IconBox = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    .callIcon{
      font-size:21px;
       @media only screen and (max-width: 600px) {
    display: block;
  }
  display:none
    }
    .iconBox{
    display: flex;
    background-color: rgba(35, 35, 35, 0.1);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
      font-size:21px;
       @media only screen and (max-width: 600px) {
    display: flex;
  }
    display: none;

    }
}
`;
export const Icon = styled.div`
  @media only screen and (max-width: 1200px) {
    display: flex;
    background-color: rgba(35, 35, 35, 0.1);
    border-radius: 5px;
    align-items: center;
    text-align: center;
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    .icon {
      font-size: 21px;
    }
  }
  display: none;
`;
export const NavWidth = styled.div`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  display: block;
`;
export const BtnDarkWidth = styled.div`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  display: block;
`;
export const MainContainer = styled.div`
  background: black;
  color: white;
  position: absolute;
  width: 80%;
  z-index: 3;
  left: 20%;
  border-radius: 5px;
  .list {
    text-decoration: none;
    color: #ffff;
    list-style-type: none;
    @media (max-width: 1200px) and (min-width: 500px) {
      font-size: 25px;
    }
  }
  .heading {
    font-size: 25px;
    text-decoration: none;
    color: #ffff;
    padding-left: 13px;
    @media (max-width: 1200px) and (min-width: 500px) {
      font-size: 30px;
    }
  }
`;
export const CrossIcon = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px;
  .cross {
    color: #ffffff;
    font-size: 21px;
  }
`;
export const BtnCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const BtnDarkMedia = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  background: #e36955;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 6px;
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
export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  gap: 21px;
  margin-bottom: 23px;
  @media only screen and (max-width: 800px) and (min-width: 458px) {
    gap: 9px;
  }
  @media (max-width: 457px) {
    gap: 18px;
  }
`;
export const BtnBg = styled.a`
  font-size: 18px;
  background: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  font-weight: 600;
  padding: 0 5px 0 12px;
  line-height: 42px;
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
