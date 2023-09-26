import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const Main = styled.div`
  width: 30%;
  height: 100vh;
  border-right: 1px solid #ddd;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;

  h1 {
    margin: 0;
  }
`;

export const SidebarEntries = styled.div`
  height: calc(100vh - 78px);
  overflow-y: scroll;
`;

export const SidebarEntry = styled.div`
  padding: 25px;
  cursor: pointer;

  &:hover {
    background: #e3f988;
  }

  &.active {
    background: #9acd32;
    color: white;

    small {
      background: #9acd32;
      color: white;
    }
  }
`;

export const SidebarEntryTitle = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 10px 0;
  }
  small {
    display: block;
  }
`;

export const MobileMain = styled.div<{ $sidebarOpen?: boolean }>`
  height: 100vh;
  border-right: 1px solid #ddd;
  @media (min-width: 769px) {
    display: none;
  }
  position: fixed;
  left: ${(props) => (props.$sidebarOpen ? "0" : "-100%")};
  background-color: white;
  z-index: 2;
  transition: right 0.3s ease-in-out;
`;

export const HamburgerButton = styled(GiHamburgerMenu)`
  margin-top: 10px;
  font-size: 25px;
  color: #9acd32;
  width: 100%;

  &:hover {
    color: #893f45;
  }
`;
