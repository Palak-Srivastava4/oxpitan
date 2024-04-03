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
export const Donation = styled.div`
  display: flex;
`;
export const Personal = styled.div`
  flex: 0.7;
  margin-top: 56px;
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }
  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnDonate {
    background-color: #e36955;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 0px 0 10px;
    line-height: 49px;
    border: none;
    width: 20%;
    margin-top: 20px;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }

  .donation {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 25px;
    color: #424242;
    margin-top: 45px;
  }
`;
export const Jassica = styled.div`
  flex: 0.3;
`;
export const InputName = styled.input`
  background-color: #f2f0ec;
  color: #818181;

  font-size: 16px;
  height: 70px;
  border: none;
  outline: none;
  margin-top: 20px;
  width: 50%;
  &::placeholder {
    color: #818181;
    padding: 19px 30px;
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
export const Input = styled.input`
  background-color: #f1ae44;
  padding: 50px;
  color: #fff;
  font-size: 50px;
  font-weight: 800px;
  outline: none;

  border: none;
  &::placeholder {
    color: white;
    font-size: 50px;
    font-weight: 800;
    font-size: 70px;
  }
`;
export const First = styled.div``;
export const PersonalInfo = styled.div`
  .firstLast {
    width: 93%;
  }
  .name {
    display: flex;
    gap: 20px;
  }
`;
export const PaymentInfo = styled.div`
  .firstLast {
    width: 93%;
  }
  .name {
    display: flex;
    gap: 20px;
  }
`;
