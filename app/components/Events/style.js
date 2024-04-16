import styled from "styled-components";


export const BreadCrumb = styled.div`
  background-color: #f2f0ec;
  position: relative;
  z-index: 1;
  color: #424242;
  height: 300px;
  @media (max-width: 991px){
    width:100%;
  }
  @media (min-width: 991px){
    width:100%;
  }
`;

export const Contact = styled.div`
display:inline-block;
  font-size: 74px;
  line-height: 60px;
  letter-spacing: 0;
  color: #424242;
  font-weight: 900;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
   font-family: "Playfair Display", serif;
  .head{
    margin-top:110px;
    margin-bottom:80px;
  }
`;

export const EventList = styled.div`
margin:8%;
  @media (max-width: 991px){
margin-left:3%;
margin-right:3%;
display:inline-block;
.image{
  width:100%;
  height:auto;
}
  }
  @media (min-width: 576px){
    margin: 5%;
    margin-top:0;
  }
  @media (min-width: 991px) {
    margin:0;
    margin-bottom:10%;
  }
`;

export const Events = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  gap: 20px;
  @media (max-width: 991px){
    display:inline-block;
    width:100%;
    height:auto;
  }

`;
export const Card = styled.div`
  flex: 0.3;
  .heading {
    text-decoration:none;
    height: 162px;
    padding: 10% ;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    background-color: #f2f0ec;
  }
  .anchor {
    color: #424242;
    font-size: 32px;
    font-weight: 900;
    text-decoration: none;
    font-family: "Playfair Display", serif;
  }
  .data {
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
  }
  .imgDate {
    position: relative;
  }
  .date {
    /* position: absolute; */
    top: 0px;
    color: #fff;
    font-weight: 800;
    letter-spacing: 1px;
    padding: 1% 5px 1% 10px;
    line-height: 49px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .today {
    font-size: 40px;
    font-weight:700;
    line-height: 45px;
  }
  .month {
    font-size: 16px;
    line-height: 28px;
    font-weight:500;
    margin-bottom:10px;
  }
  .image{
    width:100%;
    height:auto;
  }
`;

export const Img = styled.div`
  position: relative;
  /* .date {
    position: absolute;
    top: 0px;
    color: #fff;
    font-weight: 800;
    letter-spacing: 1px;
    padding: 0 25px 0 30px;
    line-height: 49px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #863bae;
  } */
  .today {
    font-size: 40px;
    line-height: 35px;
  }
  .month {
    font-size: 12px;
    line-height: 30px;
  }
`;
export const World = styled.div`
  flex: 0.7;
  .play {
    font-weight: 800;
    font-size: 36px;
    margin-bottom: 19px;
    color: #424242;
  }
  .para {
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 25px;
  }
  .event {
    font-size: 26px;
    font-weight: 600;
    color: #424242;
    margin: 22px 0px;
  }
`;
export const EventDetail = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const Play = styled.div`
  flex: 0.3;
`;

export const BtnDark = styled.div`
margin-left:100px;
margin-bottom:60x;
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
  @media (max-width: 995px){
    margin-left: 2%;
   margin-bottom:0px;

  }
`;
export const BtnStatic = styled.div`
transform:translateY(84px);
  /* margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 40px; */
  /* font-size: 12px;
  text-transform: uppercase; */
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
`;
