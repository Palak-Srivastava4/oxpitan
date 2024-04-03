import styled from "styled-components";

export const BreadCrumb = styled.div`
  background-color: #f2f0ec;
  position: relative;
  z-index: 1;
  color: #424242;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
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
export const Events = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;
export const Card = styled.div`
  flex: 0.3;
  .heading {
    height: 162px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f2f0ec;
  }
  .anchor {
    color: #424242;
    font-size: 26px;
    font-weight: 900;
  }
  .data {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    margin-top: 10px;
  }
  .imgDate {
    position: relative;
  }
  .date {
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
  }
  .today {
    font-size: 40px;
    line-height: 35px;
  }
  .month {
    font-size: 12px;
    line-height: 30px;
  }
`;

export const Img = styled.div`
  position: relative;
  .date {
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
  }
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
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .donateBtn {
    background: #f1ae44;
    position: relative;
  }
  .BtnDonate:hover {
    background-color: #e36955;
    cursor: pointer;
  }
  .BtnDonate {
    background: #f1ae44;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 21%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const EventDetail = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const Play = styled.div`
  flex: 0.3;
`;
