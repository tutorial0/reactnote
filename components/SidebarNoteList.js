export default async function NoteList({ notes }) {
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="note-empty">No notes found</div>;
  }

  return (
    <ul className="note-list">
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(note);
        return (
          <li key={noteId}>
            <header className="sidebar-note-header">
              <strong>{title}</strong>
              <small>{updateTime}</small>
            </header>
          </li>
        );
      })}
    </ul>
  );
}
