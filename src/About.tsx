import { StyledAbout } from "./styles/About.styles";
import logo from "./assets/Logo.svg";
import screenshot2 from "./assets/screenshot.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <StyledAbout>
        <Link to="/Home">
          <img src={logo} width={180} alt="" />
        </Link>
        <h2>Welcome to Diary,</h2>
        <p>
          This is a simple journal app built with TypeScript and React, styled
          using Styled Components. The application uses local storage to store
          data on the device. With this app, you can add, delete and edit your
          diaries in Markdown format. Use the arrow to hide and show the text
          editor.
        </p>

        <p>
          See more projects on my{" "}
          <a target="_blank" href="https://github.com/ezgh">
            GitHub Profile
          </a>{" "}
        </p>
        <p>
          For Markdown Cheatsheet:{" "}
          <a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">
            Visit Here
          </a>{" "}
        </p>
        <br />
        <p>
          ©2023 <a href="https://ezgikaraca.com/">ezgikaraca.com</a>
        </p>
        <img src={screenshot2} width={700} alt="app screenshot" />
      </StyledAbout>
    </>
  );
}
