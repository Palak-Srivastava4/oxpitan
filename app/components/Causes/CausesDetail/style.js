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
export const Category = styled.div`
  display: flex;
  padding: 120px 0px;

  gap: 20px;
`;
export const Search = styled.div`
  flex: 0.6px;
`;
export const Crazy = styled.div`
  flex: 0.3px;
  .create{
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.1px;
  }
  .amountdata{
    color: #50bac3;
    font-weight: 600;
    font-size: 22px;
  }
  .nameTime{
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .time{
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    color: #e36955;
    margin-left: 5px;
  }
  .listData {
    margin-top: 10px;
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #818181;
  }

  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
    color: white;
  }
  .charityBtn {
    display: flex;
    gap: 9px;
    margin-bottom: 10px;
  }
  .BtnDonate {
    font-size: 12px;
    text-transform: uppercase;
    background: #fff;
    color: #818181;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 35px;
    width: 40%;
    display: flex;
    gap: 10px;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
  a {
    color: #818181;
    text-transform: capitalize;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
    text-decoration: none;
  }

  .search {
    background-color: #863bae;
    color: #fff;
    padding: 40px 40px;
    font-weight: 500;
    font-size: 16px;
  }
  .recent {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 25px;
  }
  .data {
    font-size: 18px;
    font-weight: 600;
    color: #818181;
    line-height: 28px;
  }
  .posts {
    background-color: #f2f0ec;
    padding: 40px 40px 40px 40px;
    margin: 30px 0px;
  }
  .postData {
    display: flex;
    gap: 26px;
  }
  .itemStyle{
    display: flex;
    gap: 12px;
  }
  .icon{
    width: 35px;
    height: 35px;
    font-size: 20px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`;

export const Line = styled.div`
  height: 2px;
  background: #fff;
  margin: 30px 0px;
`;

export const News = styled.div`
  flex: 0.6;
  height: fit-content;
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
  }
  .read {
    font-size: 12px;
    text-transform: uppercase;
    background: #f1ae44;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 30px 0 35px;
    line-height: 49px;
    outline: none;
    border: none;
    color: white;
  }
  .BtnBlog {
    background-color: #e36955;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 32%;
    height: 49px;
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
`;
export const BlogData = styled.div`
  margin-bottom: 30px;
  .firstLast {
    display: flex;
    gap: 30px;
  }
  .imageDetail{
    display:flex;
    justify-content: space-between;
    margin-bottom:30px;
  }
  .present{
    font-size: 26px;
    font-weight: 600;
    color: #424242;
  }
  .pdfFile{
    background-color: #f2f0ec;
    padding: 57px 67px 57px 58px;
    margin-top: 52px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
  }
  .pdf{
    color: #e36955;
    margin-right: 12px;
    font-size: 24px;
  }
  a {
    color: #424242;
  }
  .some {
    font-size: 36px;
    font-weight: 800;
    line-height: 30px;
    padding: 10px 0px;
  }
  .para {
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
    margin-bottom: 56px;
  }
  .son {
    display: flex;
    margin-bottom: 35px;
    color: #e36955;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    gap: 20px;
  }
`;
export const Comments = styled.div`
  .comment {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 51px;
    color: #424242;
  }
  .martin {
    display: flex;
  }
  .first {
    flex: 0.2;
  }
  .second {
    flex: 0.8;
  }
  .kevin {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 39px;
    text-transform: capitalize;
    color: #424242;
  }
  .hour {
    color: #e36955;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 10px;
  }
  .curse {
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;
export const CommentData = styled.div`
  border-bottom: 2px solid #f2f0ec;
  margin-bottom: 55px;
  padding-bottom: 55px;
`;
export const Martin = styled.div`
  background-color: #f2f0ec;
  justify-content: center;
  padding: 59px 60px 50px 60px;
  align-items: center;
  margin-bottom: 55px;
  .martin {
    display: flex;
  }
  .first {
    flex: 0.2;
  }
  .second {
    flex: 0.8;
  }
  .kevin {
    line-height: 24px;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 39px;
    text-transform: capitalize;
    color: #424242;
  }
  .curse {
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;
export const Sections = styled.div`
  display: flex;
  margin: 80px 0px;
  gap: 30px;
`;
export const NewsSections = styled.div`
  min-width: 1200px;
`;
export const Form = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 51px;
  .firstLast {
    display: flex;
    gap: 30px;
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

export const Input = styled.input`
  height: 72px;
  margin-top: 20px;
  width: 48%;
  background-color: #f2f0ec;
  outline: none;
  border: none;
  padding: 19px 30px;
  font-size: 16px;
  &::placeholder {
    color: #818181;

    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  background-color: #f2f0ec;
  color: #818181;
  padding: 19px 30px;
  font-size: 16px;
  border: none;
  outline: none;
  margin-top: 20px;
  height: 200px;
  width: 100%;
`;

export const TagsData = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #f2f0ec;
  border-bottom: 2px solid #f2f0ec;
  margin-top: 50px;
  padding-top: 45px;
  padding-bottom: 45px;
  .tags {
    font-size: 20px;
    font-weight: 600;
    margin-right: 6px;
    color: #424242;
  }
  .itemStyle {
    display: flex;
    gap: 20px;
  }
  .colorChng {
    width: 35px;
    height: 35px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }

  .char {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
  }
  .charityTags {
    display: flex;
    gap: 8px;
    width: 100%;
  }
  .charityBtn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .donateBtn {
    background: #f1ae44;
    position: relative;
  }
  .charity:hover {
    background-color: #e36955;
    cursor: pointer;
  }
  .charity {
    background: #f1ae44;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
`;
export const Children = styled.div`
  background-color: #f2f0ec;
  display: flex;
  align-items: center;
  padding: 50px 68px 55px 59px;
  margin-bottom: 45px;
  .poor {
    color: #424242;
    font-size: 26px;
    font-weight: 800;
    line-height: 30px;
  }
  .children {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  .target {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pi {
    font-size: 22px;
  }
  .raise {
    color: #424242;
    font-size: 15px;
    font-weight: 600;
  }
  .no {
    color: #e36955;
  }
`;
