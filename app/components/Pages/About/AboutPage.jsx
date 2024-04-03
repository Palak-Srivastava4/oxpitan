import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import Navigation from "../../Navigation/Navigation";
import React from "react";
import about from "../../../assets/image/about.svg";
import aboutPage2 from "../../../assets/image/aboutPage2.svg";

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <Styled.BreadCrumb>
        <Styled.Contact className="container">
          <div className="head">About</div>
        </Styled.Contact>
      </Styled.BreadCrumb>
      <div className="container">
        <Styled.About>
          <Image src={about} />
        </Styled.About>
        <Styled.Discover>
          <Styled.Oxpitan>
            <div>
              {" "}
              <Image src={aboutPage2} />
            </div>
          </Styled.Oxpitan>
          <Styled.Agency>
            <div className="discover">Discover About Oxpitan</div>
            <div className="profit">learn about non profit agency</div>
            <p className="elit">
              Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien
              nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa
              fringilla leo orcium dolors sit amet elit magnis amet ultrices
              lorem ipsum is simply free text purusrfed aliquet. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus. penatibus et
              magnis dis parturient montes, nascetur ridiculus.
            </p>
          </Styled.Agency>
        </Styled.Discover>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
