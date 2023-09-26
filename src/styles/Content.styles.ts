import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const Main = styled.div`
  width: 70%;
  height: 100vh;
  @media (max-width: 450px) {
    left: 13%;
    position: fixed;
    width: 90%;
  }
  @media (max-width: 768px) and (min-width: 451px) {
    position: relative;
    left: 13%;
    width: 90%;
  }
`;

export const NoActiveEntry = styled.div`
  width: 90%;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  font-size: 1.8rem;
  color: #999;
  @media (max-width: 768px) {
    left: 40px;
    position: relative;
  }
`;

export const MainEntryEdit = styled.div`
  height: 50vh;
  padding: 25px;

  input,
  textarea {
    display: block;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    width: 100%;
    height: calc(50vh - 130px);
    padding: 10px;
    resize: none;
    font-size: inherit;
    font-family: inherit;
  }

  input {
    height: 50px;
    font-size: 2rem;
  }
`;

export const MainEntryPreview = styled.div<{ $large?: boolean }>`
  height: ${(props) => (props.$large ? "100vh" : "50vh")};
  border-top: 1px solid #ddd;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.02);
`;

export const PreviewTitle = styled.h1`
  padding: 25px 25px 0 25px;
  margin: 0;
`;

export const MarkdownPreview = styled(ReactMarkdown)`
  padding: 0 25px 25px 25px;
  font-size: 1rem;
  line-height: 2rem;
`;
