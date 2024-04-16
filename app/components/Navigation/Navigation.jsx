import * as Styled from "./style";
import Image from "next/image";
import React,{ useState} from "react";
import logo1 from "../../assets/image/logo1.svg";
import { GrMail } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaPinterest } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { HiOutlineViewList } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { icons } from "./data";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Styled.SocialLinks>
    <div className="flex">
<Styled.Btn>
<div className="left">
                <h3><span><GrMail /> </span>   needhelp@oxpitan.com</h3> 
                <h3 className="number"><span><IoCallSharp /> </span>   666 888 0000</h3>
              </div>
</Styled.Btn>            
              <Styled.RightContainer className="right">
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
              </Styled.RightContainer>
            </div>
    </Styled.SocialLinks>
   
      <Styled.DataNav>
        <Styled.NavLinks className="container">
          <Styled.Image>
            <div className="imgLogo">
              <Image src={logo1} alt="logo" className="img" />

              
              <Styled.BtnDarkWidth>
                <Styled.BtnDark href="">Donate Now</Styled.BtnDark>
              </Styled.BtnDarkWidth>
            </div>
          </Styled.Image>
          <Styled.Nav>
            {/* <Styled.NavItem>
              <Styled.NavLink href="#">Home</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.NavLink href="/">Home 1</Styled.NavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem>
                  <Styled.NavLink href="/system">Home 2</Styled.NavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem> */}
            <Styled.IconBox> <div className="iconBox" onClick={()=>window.open('tel:6668880000')}><MdCall className="callIcon" /></div>
            <Styled.Icon onClick={handleClick}>
            <HiOutlineViewList className="icon" />
          </Styled.Icon>
          </Styled.IconBox>
          <Styled.NavWidth>
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
                    <Styled.NavLink href="singleNews">
                      News Detail
                    </Styled.NavLink>
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

                  <Styled.DropdownItem className="dropdown">
                    <Styled.NavLink href="programme">Programme</Styled.NavLink>
                  </Styled.DropdownItem>

                </Styled.DropdownMenu>
              </Styled.NavItem>
              <Styled.NavItem>
                <Styled.NavLink href="contact">Contact</Styled.NavLink>
              </Styled.NavItem>
            </Styled.Nav>
          </Styled.NavWidth>
          </Styled.Nav>
        </Styled.NavLinks>
      </Styled.DataNav>
      {open ? (
        <>
          {" "}
          <Styled.MainContainer>
            <Styled.CrossIcon>
              <RxCross2 className="cross" onClick={handleClose} />
            </Styled.CrossIcon>
            <a className="heading" href="#">Home</a>
            <hr />
            <ul>
              <a className="list" href="/">Home 1</a>
              <hr />
              <a className="list" href="/system">Home 2</a>
              <hr />
            </ul>
            <a className="heading" href="#">Causes</a>
            <hr />
            <ul>
              <a className="list" href="causesDetail">Causes Detail</a>
              <hr />
              <a className="list" href="donate">Donate Now</a>
              <hr />
            </ul>
            <a className="heading" href="#">Event</a>
            <hr />
            <ul>
              <a className="list" href="events">Event</a>
              <hr />
              <a className="list" href="eventsDetail">Event Detail</a>
              <hr />
            </ul>
            <a className="heading" href="#">News</a>
            <hr />
            <ul>
              <a className="list" href="news">News</a>
              <hr />
              <a className="list" href="singleNews">News Detail</a>
              <hr />
            </ul>
            <a className="heading" href="#">Pages</a>
            <hr />
            <ul>
              <a className="list" href="aboutPage">About</a>
              <hr />
              <a className="list" href="galleryPage">Gallery</a>
              <hr />
              <a className="list" href="volunteer">Welcome to Volunteer</a>
              <hr />
              <a className="list" href="team">Our Team</a> <hr />
              <a className="list" href="sponsors">Sponsors</a> <hr />

              <a className="list" href="programme">Programme</a> <hr />

            </ul>
            <a className="heading" href="contact">Contact</a> <hr />
            <Styled.SocialIcon className="itemStyle">
              {icons?.map((item) => {
                return (
                  <Styled.BtnBg backgroundColor={item.color}>
                    <div className="icon"> {item.icon}</div>
                  </Styled.BtnBg>
                );
              })}
            </Styled.SocialIcon>
            <Styled.BtnCenter>
            <Styled.BtnDarkMedia href="">Donate Now</Styled.BtnDarkMedia>
            </Styled.BtnCenter>
          </Styled.MainContainer>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
