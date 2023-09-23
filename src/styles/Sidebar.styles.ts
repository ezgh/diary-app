import styled from "styled-components";

export const Main = styled.div`
  width: 30%;
  height: 100vh;
  border-right: 1px solid #ddd;
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
