import React from "react";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import {
  ButtonContainer,
  GitHubButton,
  MobileLink,
  MobileMenu,
  Nav,
  NavbarContainer,
  NavItems,
  NavLink,
  NavLogo,
} from "./NavbarStyledComponents";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { SocialMediaIcon } from "../About/AboutStyle";
import { GitHub } from "@mui/icons-material";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <SocialMediaIcon href={Bio.linkedin} target='display'>
          <LinkedInIcon />
        </SocialMediaIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target='_blank'>
            <GitHub style={{ marginRight: "8px" }} /> Github
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href='#about'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href='#skills'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href='#experience'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href='#projects'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href='#education'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target='_blank'
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}
