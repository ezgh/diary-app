import {
  Main,
  SidebarHeader,
  SidebarEntries,
  SidebarEntry,
  SidebarEntryTitle,
} from "./styles/Sidebar.styles";
import { Button } from "./styles/Button";

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
    <Main>
      <SidebarHeader>
        <h1>Diary</h1>
        <Button onClick={onAddEntry}>Add</Button>
      </SidebarHeader>
      <SidebarEntries>
        {entries.map((entry: Entry, created: number) => (
          <SidebarEntry
            key={entry.id}
            className={entry.id === activeEntry ? "active" : ""}
            onClick={() => setActiveEntry(entry.id)}
          >
            <SidebarEntryTitle>
              <strong>{entry.title}</strong>
              <Button $primary onClick={() => onDeleteEntry(entry.id)}>
                Delete
              </Button>
            </SidebarEntryTitle>
            <p>{entry.body && entry.body.slice(0, 100) + "...."}</p>
            <small>
              {new Date(created).toLocaleDateString("en-GB", {
                weekday: "long",
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
              })}
            </small>
          </SidebarEntry>
        ))}
      </SidebarEntries>
    </Main>
  );
}
