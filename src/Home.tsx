import { useEffect, useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

import { StyledHome } from "./styles/Home.styles";

import { Entry } from "./types/types";

export default function Home() {
  const [entries, setEntries] = useState<Entry[]>(
    localStorage.entries ? JSON.parse(localStorage.entries) : []
  );
  const [activeEntry, setActiveEntry] = useState<boolean | string>(false);

  //store data in the localstorage
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const onAddEntry = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      title: "Untitled",
      body: "",
      created: Date.now(),
    };
    setActiveEntry(newEntry.id);
    setEntries([newEntry, ...entries]);
  };

  const onDeleteEntry = (idtoDelete: string) => {
    setEntries(entries.filter((entry) => entry.id !== idtoDelete));
  };

  const onUpdateEntry = (updatedEntry: Entry) => {
    const updatedEntriesArr = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }

      return entry;
    });

    setEntries(updatedEntriesArr);
  };

  const getActiveEntry = () => {
    return entries.find((entry) => entry.id === activeEntry);
  };

  return (
    <>
      <StyledHome>
        <Sidebar
          entries={entries}
          onAddEntry={onAddEntry}
          onDeleteEntry={onDeleteEntry}
          activeEntry={activeEntry}
          setActiveEntry={setActiveEntry}
        />
        <Content
          activeEntry={getActiveEntry() ?? null}
          onUpdateEntry={onUpdateEntry}
        />
      </StyledHome>
    </>
  );
}
