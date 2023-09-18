// import { SideBarStyle } from "./styles/App.styles";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarHeader">
          <h1>Dear Diary</h1>
          <button>Add</button>
        </div>
        <div className="sidebarNotes">
          <div className="sidebarNote">
            <div className="sidebarNoteTitle">
              <strong>Title</strong>
              <button>Delete</button>
            </div>
            <p>Preview</p>
            <small className="noteMeta">Last Modified</small>
          </div>
        </div>
      </div>
    </>
  );
}
