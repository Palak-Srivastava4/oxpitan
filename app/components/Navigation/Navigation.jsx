import * as Styled from "./style";
import Image from "next/image";
import React, { useStateuseState } from "react";
import logo1 from "../../assets/image/logo1.svg";
import { GrMail } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaPinterest } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
    <Styled.SocialLinks>
    <div className="flex">
              <div className="left">
                <h3><GrMail />   needhelp@oxpitan.com</h3> 
                <h3 className="number"><IoCallSharp />   666 888 0000</h3>
              </div>
             
              <div className="right">
        <div className="sLinks">
<ul>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
                <li><a href=""><i><AiOutlineTwitter /></i></a></li>
                <li><a href=""><i><BiLogoFacebook /></i></a></li>
                <li><a href=""><i><FaPinterest /></i></a></li>
                <li><a href=""><i><BiLogoInstagram /></i></a></li>
</ul>
              </div>
              </div>
            </div>
    </Styled.SocialLinks>
      <Styled.DataNav>
        <Styled.NavLinks className="container">
          <Styled.Image>
            <div className="imgLogo">
              <Image src={logo1} alt="logo" className="img" />

              <div className="BtnDonate">
                <span className="btn">Donate Now</span>
              </div>
            </div>
          </Styled.Image>
          <Styled.Nav>
            <Styled.NavItem>
              <Styled.NavLink href="#">Home</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.NavLink href="/">Home 1</Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem>
                  <Styled.NavLink href="/system">Home 2</Styled.NavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>

            <Styled.NavItem className="dropdown">
              <Styled.NavLink href="#">Causes</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.NavLink href="#">Causes</Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem>
                  <Styled.NavLink href="causesDetail">
                    Causes Detail
                  </Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem>
                  <Styled.NavLink href="donate">Donate Now</Styled.NavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>

            <Styled.NavItem className="dropdown">
              <Styled.NavLink href="#">Events</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="events">Events </Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="eventsDetail">
                    Events Detail
                  </Styled.NavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink href="#">News</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="news">News </Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="singleNews">News Detail</Styled.NavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink href="#">Pages</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="aboutPage">About </Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="galleryPage">Gallery</Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="volunteer">
                    Become a Volunteer{" "}
                  </Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="team">Our Team</Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem className="dropdown">
                  <Styled.NavLink href="sponsors">Sponsors</Styled.NavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink href="contact">Contact</Styled.NavLink>
            </Styled.NavItem>
          </Styled.Nav>
        </Styled.NavLinks>
      </Styled.DataNav>
    </>
  );
};

export default Navbar;

// const Navigation = () => {
//   return (
//     <>
//       <Styled.NavLinks>
//         <Styled.NavBar className="container">
//
//           <Styled.NavItems>
//             <a href="">Home</a>
//             <a href="donate">Causes</a>
//             <a href="events">Events</a>
//             <a href="news">News</a>
//             <a href="aboutPage">Pages</a>
//             <a href="contact">Contact</a>
//           </Styled.NavItems>
//         </Styled.NavBar>
//
//     </>
//   );
// };
// export default Navigation;
