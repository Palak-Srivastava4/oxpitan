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
  background-color:rgb(242, 240, 236);
}
@media (max-width: 360px){
  .flex{
display: inline-block;
background-color:rgb(242, 240, 236);
  }
  .left{
    background-color:rgb(242, 240, 236);
    margin:0px;
    display: inline-block;
  }
}
  .left{
    display:flex;
    align-items:end;
    justify-content:center;
background-color:#424242;
color:white;
width: 100%;
margin-left:-160px;
transform: skewX(-20deg);
font-family: "Playfair Display", serif;
  }
  .left h3{
    font-size:16px;
    font-weight:400;
    padding:20px;
    text-align:left;
    margin-left:200px;
    margin-top:10px;
    transform: skewX(20deg);
  }
    
  .number{
    transform: translateX(-100px);
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
