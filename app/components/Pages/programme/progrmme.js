import React from "react";
import * as Styled from "../style";
import Footer from "../../Footer/Footer";
import Navigation from "../../Navigation/Navigation";
import Image from "next/image";
import program from "../../../assets/image/program.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import * as CommonStyled from "../../commonStyle"


const Programme = () =>{
    return(
        <>
        <Navigation />
        <Styled.BreadCrumb>
        <CommonStyled.Container>
        <Styled.Contact className="container">
          <div className="head">Programme</div>
        </Styled.Contact>
        <Styled.BtnDark href="">home .Programme</Styled.BtnDark>
        </CommonStyled.Container>
      </Styled.BreadCrumb>


<Styled.Unsolved >
    <Image className="image" src={program}/>
    <Styled.Details>
    <Styled.Latest>
            <div className="container latest">
              <h2 className="cause">The Unsolved Problem</h2>
              <p className="help"></p>
            </div>
          </Styled.Latest>
        <ul>
            <li> <FaRegDotCircle /> Around 6 in 10 students in Grade 5 can't read Grade-2 text, 8 out of 10 cannot do simple math.</li>
            <li><FaRegDotCircle /> 6 million children in the age group 6-14 are estimated to be out of school and 36% of the children drop out even before completing primary education.</li>
            <li><FaRegDotCircle /> Rural Government Schools Struggle with Limited Resources and Poor Infrastructure.</li>
            <li><FaRegDotCircle /> Challenges of Multi-Grade Classrooms and Low Teacher-Student Ratios.</li>
            <li><FaRegDotCircle /> Sporadic Attendance and High Non-Teaching Workloads Impact Learning.</li>
            <li><FaRegDotCircle />Declining Learning Levels Despite State Efforts in Education.</li>
        </ul>
    </Styled.Details>
</Styled.Unsolved>
        <Footer />
        </>
    );
};

export default Programme;