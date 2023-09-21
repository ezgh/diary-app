import ReactMarkdown from "react-markdown";
import { Entry } from "./types/types";

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
    return <div className="noActiveEntry">No diary selected</div>;
  }

  return (
    <>
      <div className="main">
        <div className="mainEntryEdit">
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
        </div>
        <div className="mainEntryPreview">
          <h1 className="previewTitle">{activeEntry.title}</h1>
          <ReactMarkdown className="markdownPreview">
            {activeEntry.body}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
