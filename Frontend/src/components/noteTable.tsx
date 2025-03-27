import React from "react";
import "./noteTable.css"; // Import CSS for styling

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteTableProps {
  notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
  return (
    <table className="note-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            <td>{note.id}</td>
            <td>{note.title}</td>
            <td>{note.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NoteTable;
