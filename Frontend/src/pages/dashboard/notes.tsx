import { useState } from "react";
import Header from "../../components/header";
import NoteModal from "../../components/noteModal";
import NotesCard from "../../components/notesCard";

function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addOrUpdateNote = () => {
    if (newNote.trim()) {
      if (editIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = newNote;
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        setNotes([...notes, newNote]);
      }
      setNewNote("");
      setIsModalOpen(false);
    }
  };

  const removeNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleEditNote = (index: number) => {
    setNewNote(notes[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setNewNote("");
    setEditIndex(null);
    setIsModalOpen(true);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Notes" />

      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <p className="text-lg font-semibold">
            No notes yet. Add your first note!
          </p>
          <button
            onClick={openModal}
            className="mt-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            Add Note +
          </button>
        </div>
      ) : (
        <>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {notes.map((note, index) => (
              <NotesCard
                key={index}
                note={note}
                removeNote={() => removeNote(index)}
                editNote={() => handleEditNote(index)}
              />
            ))}
          </div>

          <button
            onClick={openModal}
            className="absolute bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            Add Note +
          </button>
        </>
      )}

      {isModalOpen && (
        <NoteModal
          addNote={addOrUpdateNote}
          newNote={newNote}
          setIsModalOpen={setIsModalOpen}
          setNewNote={setNewNote}
        />
      )}
    </div>
  );
}

export default Notes;
