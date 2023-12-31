import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

import {
  Main,
  SidebarHeader,
  SidebarEntries,
  SidebarEntry,
  SidebarEntryTitle,
  MobileMain,
  HamburgerButton,
} from "../styles/Sidebar.styles";
import { Button } from "../styles/Button";

import { Entry } from "../types/types";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <MobileMain $sidebarOpen style={{ width: sidebarOpen ? "90%" : "15%" }}>
        <HamburgerButton size={25} color={"#9acd32"} onClick={toggleSidebar} />{" "}
        {sidebarOpen && (
          <div>
            <SidebarHeader>
              <Link to="/About">
                <img src={logo} alt="logo" width={140} />
              </Link>
              <Button onClick={onAddEntry}>Add</Button>
            </SidebarHeader>
            <SidebarEntries>
              {entries.map((entry: Entry) => (
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
                  <p>{entry.body && entry.body.slice(0, 50) + "...."}</p>
                  <small>
                    {new Date(entry.created).toLocaleDateString("en-GB", {
                      weekday: "long",
                      month: "2-digit",
                      day: "2-digit",
                      year: "2-digit",
                    })}
                  </small>
                </SidebarEntry>
              ))}
            </SidebarEntries>
          </div>
        )}
      </MobileMain>

      {/* bigger screens */}
      <Main>
        <SidebarHeader>
          <Link to="/About">
            <img src={logo} alt="logo" width={140} />
          </Link>
          <Button onClick={onAddEntry}>Add</Button>
        </SidebarHeader>
        <SidebarEntries>
          {entries.map((entry: Entry) => (
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
              <p>{entry.body && entry.body.slice(0, 50) + "...."}</p>
              <small>
                {new Date(entry.created).toLocaleDateString("en-GB", {
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
    </>
  );
}
