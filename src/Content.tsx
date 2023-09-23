import { useState } from "react";
import { Entry } from "./types/types";
import {
  Main,
  NoActiveEntry,
  MainEntryEdit,
  MainEntryPreview,
  PreviewTitle,
  MarkdownPreview,
} from "./styles/Content.styles";
import { ToggleButton } from "./styles/Button";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

type ContentProps = {
  activeEntry: Entry | null;
  onUpdateEntry: (updatedEntry: Entry) => void;
};

export default function Content({ activeEntry, onUpdateEntry }: ContentProps) {
  const [isEditVisible, setIsEditVisible] = useState(true);

  const onEditField = (key: keyof Entry, value: string) => {
    if (activeEntry) {
      onUpdateEntry({
        ...activeEntry,
        [key]: value,
      });
    }
  };

  const toggleEditVisibility = () => {
    setIsEditVisible((prevVisible) => !prevVisible);
  };

  if (!activeEntry) {
    return <NoActiveEntry>No diary selected</NoActiveEntry>;
  }

  return (
    <Main>
      <ToggleButton onClick={toggleEditVisibility}>
        {isEditVisible ? (
          <AiOutlineLine size={20} />
        ) : (
          <AiOutlinePlus size={20} />
        )}
      </ToggleButton>
      {isEditVisible && (
        <MainEntryEdit>
          <input
            type="text"
            id="title"
            autoFocus
            value={activeEntry.title}
            onChange={(e) => onEditField("title", e.target.value)}
          />
          <textarea
            id="body"
            value={activeEntry.body}
            onChange={(e) => onEditField("body", e.target.value)}
            placeholder="Dear Diary..."
          />
        </MainEntryEdit>
      )}
      <MainEntryPreview $large>
        <PreviewTitle>{activeEntry.title}</PreviewTitle>
        <MarkdownPreview>{activeEntry.body}</MarkdownPreview>
      </MainEntryPreview>
    </Main>
  );
}
