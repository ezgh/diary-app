import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  color: ${(props) => (props.$primary ? "crimson" : "#08c")};

  &:hover {
    color: #04c;
  }
`;

export const ToggleButton = styled(Button)`
  margin: 10px 0 10px 20px;
`;
