import styled from "styled-components"
export const MainContainer=styled.div`
    background: black;
    color: white;
    position: absolute;
    width: 25%;
    z-index: 3;
    left: 75%;
    border-radius: 5px;
    opacity: 0.8;
`;
export const CrossIcon=styled.div`
    display: flex;
    justify-content: end;
    padding: 20px;
    .cross{
        color:#ffffff;
        font-size: 21px;
    }
`