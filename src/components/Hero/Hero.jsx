import React from "react";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import img from "/Users/shamikaredkar/Documents/Projects/Portfolio-Website/src/assets/img.jpeg";
export default function Hero() {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id='Left'>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id='Right'>
            <Img src={img} alt='hero-image' />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}
