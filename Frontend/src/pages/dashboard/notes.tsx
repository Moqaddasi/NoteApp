import Header from "../../components/header";
import NoteModal from "../../components/noteModal";
import NotesCard from "../../components/notesCard";
import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
      setIsModalOpen(false);
    }
  };

  const removeNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Notes" />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note, index) => (
          <NotesCard
            key={index}
            note={note}
            removeNote={() => removeNote(index)}
          />
        ))}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        +
      </button>
      {isModalOpen && (
        <NoteModal
          addNote={addNote}
          newNote={newNote}
          setIsModalOpen={setIsModalOpen}
          setNewNote={setNewNote}
        />
      )}
    </div>
  );
}

export default Notes;
