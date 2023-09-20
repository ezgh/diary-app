import { useState } from "react";
import Content from "./Content";
import Sidebar from "./SideBar";

type Entry = {
  id: string;
  title: string;
  body: string;
  created: Date;
};

export default function Home() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [activeEntry, setActiveEntry] = useState<boolean | string>(false);

  const onAddEntry = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      title: "Untitled",
      body: "",
      created: new Date(),
    };
    console.log(newEntry);
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  const onUpdateEntry = (updatedEntry: Entry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === activeEntry ? updatedEntry : entry
      )
    );
  };

  const onDeleteEntry = (idtoDelete: string) => {
    setEntries(entries.filter((entry) => entry.id !== idtoDelete));
  };

  const getActiveEntry = () => {
    return entries.find((entry) => entry.id === activeEntry);
  };

  return (
    <>
      <div className="App">
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
      </div>
    </>
  );
}
