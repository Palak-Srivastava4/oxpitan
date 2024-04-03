import styled from "styled-components";

export const FooterBackground = styled.div`
  background-image: url(${(props) => props.src});
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-top: 40px;
  padding:30px 0px;
`;
export const Copy = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid #555555;
  margin-top: 45px;
  padding-top: 45px;
  padding-bottom: 45px;
  .copy {
    font-size: 16px;
    color: #bfbfbf;
  }
  a {
    font-size: 16px;
    color: #bfbfbf;
    text-decoration: none;
  }
`;
export const MainContainer = styled.div`
  .itemStyle {
    display: flex;
    justify-content: end;
    gap: 20px;
  }
  .colorChng {
    width: 43px;
    height: 43px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }

  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }
  .itemIcon {
    display: flex;
    gap: 10px;
    justify-content: end;
  }
  .textItem {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 31px;
  }
  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: #e36955;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 14%;
    height: 63px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .newsStay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .input {
    width: 36%;
    height: 63px;
    background-color: #343434;
    color: #bfbfbf;
    outline: none;
    border: none;
    padding: 0px 20px;
  }
`;
export const NewsContainer = styled.div`
  padding-bottom: 45px;
  .news {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
  }
  .update {
    color: #f1ae44;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    display: block;
  }
`;
export const Blogs = styled.div`
  display: flex;
  margin-top: 80px;

  .indexData {
    flex: 0.3;
  }
  .head {
    font-size: 24px;
    color: #fff;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 23px;
  }
  .sub {
    color: #bfbfbf;
    font-size: 16px;
    line-height: 38px;
    font-weight: 400;
  }
  .subData:hover {
    color: #f1ae44;
    cursor: pointer;
    text-decoration: underline;
  }
`;
