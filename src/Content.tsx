import { Entry } from "./types/types";

import {
  Main,
  NoActiveEntry,
  MainEntryEdit,
  MainEntryPreview,
  PreviewTitle,
  MarkdownPreview,
} from "./styles/Content.styles";

type ContentProps = {
  activeEntry: Entry | null;
  onUpdateEntry: (updatedEntry: Entry) => void;
};

export default function Content({ activeEntry, onUpdateEntry }: ContentProps) {
  const onEditField = (key: keyof Entry, value: string) => {
    if (activeEntry) {
      onUpdateEntry({
        ...activeEntry,
        [key]: value,
      });
    }
  };

  if (!activeEntry) {
    return <NoActiveEntry>No diary selected</NoActiveEntry>;
  }

  return (
    <Main>
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
      <MainEntryPreview>
        <PreviewTitle>{activeEntry.title}</PreviewTitle>
        <MarkdownPreview>{activeEntry.body}</MarkdownPreview>
      </MainEntryPreview>
    </Main>
  );
}
