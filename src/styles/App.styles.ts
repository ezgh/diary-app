import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body,
.App {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 16px;
  background: url(https://www.toptal.com/designers/subtlepatterns/patterns/lightpaperfibers.png);
}

button {
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  color: #08c;
}
button:hover {
  color: #04c;
}

.App {
  display: flex;
}
`;

export const SideBarStyle = styled.div`
  width: 30%;
  height: 100vh;
  border-right: 1px solid #ddd;

  .sidebarHeader {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }
  .sidebarHeader h1 {
    margin: 0;
  }

  .sidebarNotes {
    height: calc(
      100vh - 78px
    ); /* Use variables or calculations based on design */
    overflow-y: scroll;
  }
  .sidebarNote {
    padding: 25px;
    cursor: pointer;

    &:hover {
      background: #ddd;
    }

    &.active {
      background: #08c;
      color: white;

      small {
        background: #08c;
        color: white;
      }
    }
  }

  .sidebarNoteTitle {
    display: flex;
    justify-content: space-between;
  }
  .sidebarNote button {
    color: crimson;
  }
  .sidebarNote p {
    margin: 10px 0;
  }
  .sidebarNote small {
    display: block;
    color: #999;
  }
`;

export const ContentStyle = styled.div``;
