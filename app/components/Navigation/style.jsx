import styled from "styled-components";
import { color } from "@/app/Theme/color";

export const NavBtn = styled.div`
  cursor: pointer;
`;

export const Nav = styled.ul`
  background: white;
  list-style: none;
  display: flex;
`;

export const SocialLinks = styled.div`
.flex{
  display:flex;
  justify-content:center;
    background-color:rgb(242, 240, 236);
}
.left{
  display:flex;
}
    .left h3{
    font-size:16px;
    font-weight:400;
    padding:20px;
    text-align:center;
  }
  h3 span{
    color:#f1ae44;
  }
  .right{
    display:flex;
    width:100%;
    color:black;
    align-items: end;
    justify-content: right;
    padding-top:20px;
    padding-right:100px;
    flex-wrap: wrap;
    background-color: rgb(242, 240, 236);
  }
  .right  ul li{
    display: inline-block;
    list-style: none;
    margin: 8px 12px;
}
.right ul li a{
    color: rgb(87, 86, 86);
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    position: relative;
    font-family: "DM Sans", sans-serif;
}
`;

export const Btn = styled.div`
  font-size: 12px;
  width:75%;
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
  padding: 30px 0px;
`;
export const DataNav = styled.div`
  position: sticky;
  top: 0;
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
export const BtnDark=styled.a`
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
  -webkit-transform: skew(-12deg,0deg);
  -moz-transform: skew(-12deg,0deg);
  -ms-transform: skew(-12deg,0deg);
  -o-transform: skew(-12deg,0deg);
  transform: skew(-12deg,0deg);
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
`
