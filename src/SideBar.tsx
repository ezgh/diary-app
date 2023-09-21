// import { SideBarStyle } from "./styles/App.styles";
import { Entry } from "./types/types";

type SidebarProps = {
  entries: Entry[];
  onAddEntry: () => void;
  onDeleteEntry: (id: string) => void;
  setActiveEntry: (id: string) => void;
  activeEntry: boolean | string;
};

export default function Sidebar({
  entries,
  onAddEntry,
  onDeleteEntry,
  activeEntry,
  setActiveEntry,
}: SidebarProps) {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarHeader">
          <h1>Diary</h1>
          <button onClick={onAddEntry}>Add</button>
        </div>
        <div className="sidebarEntries">
          {entries.map((entry: Entry, created: number) => (
            <div
              key={entry.id}
              className={`sidebarEntry ${entry.id === activeEntry && "active"}`}
              onClick={() => setActiveEntry(entry.id)}
            >
              <div className="sidebarEntryTitle">
                <strong>{entry.title}</strong>
                <button onClick={() => onDeleteEntry(entry.id)}>Delete</button>
              </div>
              <p>{entry.body && entry.body.slice(0, 100) + "...."}</p>
              <small className="entryMeta">
                {new Date(created).toLocaleDateString("en-GB", {
                  weekday: "long",
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
