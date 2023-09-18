export default function Content() {
  return (
    <>
      <div className="main">
        <div className="mainNoteEdit">
          <input type="text" id="title" autoFocus />
          <textarea id="body" placeholder="Dear Diary..." />
        </div>
        <div className="maimNotePreview">
          <h1 className="previewTitle">TITLE</h1>
          <div className="markdownPreview">note preview</div>
        </div>
      </div>
    </>
  );
}
