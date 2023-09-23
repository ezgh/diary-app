import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  color: ${(props) => (props.$primary ? "#DE3163" : "#9acd32")};

  &:hover {
    color: #893f45;
  }
`;

export const ToggleButton = styled(Button)`
  margin: 10px 0 10px 25px;
`;
