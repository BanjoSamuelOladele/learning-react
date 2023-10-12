import {
    FirstHeaderButton, FirstHeaderButtonHackShift,
    FirstHeaderDiv,
    FirstHeaderImages,
    FirstHeaderImagesText,
    FirstHeaderImgTextSpace,
    FirstHeaderSalem,
    FirstHeaderSider,
    FirstHeaderSpan,
    HorizontalLine,
    SubHeaderDiv
} from "./FirstHeader.styles";

import Business from "./../../assets/running/business.png"
import Personal from "../../assets/running/personal.svg"
import Telephone from "../../assets/running/phonie.svg"
import SignUp from "../../assets/running/signUpLogin.png"
import Salem from "../../assets/running/salemlogo.svg"

function FirstHeaderContainer(props){
    return(
      <FirstHeaderDiv>
          <SubHeaderDiv>
              <FirstHeaderImages src={Business} alt={"business logo"}/>
              <FirstHeaderImagesText>Business</FirstHeaderImagesText>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImages src={Personal} alt={"Personnel logo"}/>
              <FirstHeaderImagesText>Personal</FirstHeaderImagesText>
              <FirstHeaderSider/>
              <FirstHeaderImages src={Telephone} alt={"Personnel logo"}/>
              <FirstHeaderImagesText>+2348063587905</FirstHeaderImagesText>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImgTextSpace/>
              <FirstHeaderImages src={SignUp} alt={"Personnel logo"}/>
              <FirstHeaderImagesText large>SignUp/Login</FirstHeaderImagesText>
          </SubHeaderDiv>
          <HorizontalLine/>
          <SubHeaderDiv>
              <FirstHeaderSalem src={Salem} alt={"Salem"}/>
              <FirstHeaderSider>
                  <span>  </span><FirstHeaderSpan>Home</FirstHeaderSpan>
                  <FirstHeaderSpan>Loans</FirstHeaderSpan>
                  <FirstHeaderSpan>AboutUs </FirstHeaderSpan>
                  <FirstHeaderSpan>Services</FirstHeaderSpan>
                  <FirstHeaderSpan>Pages</FirstHeaderSpan>
                  <FirstHeaderSpan>Blog</FirstHeaderSpan>
              </FirstHeaderSider>
              <FirstHeaderButtonHackShift>
                  <FirstHeaderButton>Apply Now</FirstHeaderButton>
              </FirstHeaderButtonHackShift>
          </SubHeaderDiv>
      </FirstHeaderDiv>
    );
}
export default FirstHeaderContainer