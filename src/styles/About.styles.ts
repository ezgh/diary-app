import styled from "styled-components";

export const StyledAbout = styled.div`
  margin: 50px;
  padding: 20px;
  text-align: center;
  @media (max-width: 430px) {
    margin: 0;
    padding: 0;
  }

  h2 {
    color: #9acd32;
  }

  p {
    color: #8db600;
  }

  a {
    color: #568203;
    cursor: pointer;
  }

  .screenshot {
    @media (max-width: 430px) {
      width: 300px;
    }
  }
`;
