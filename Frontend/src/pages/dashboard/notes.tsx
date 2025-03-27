import { useState, useEffect } from "react";
import Header from "../../components/header";
import NoteModal from "../../components/noteModal";
import NotesCard from "../../components/notesCard";

function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [wormPosition, setWormPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    if (notes.length === 0) {
      const interval = setInterval(() => {
        setWormPosition((prev) => {
          if (prev >= 80) setDirection(-1);
          if (prev <= 0) setDirection(1);
          return prev + direction * 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [notes, direction]);

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

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Notes" />

      {notes.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <p className="text-lg font-semibold">Add a note</p>
          <div className="relative w-full h-10">
            <div
              className="absolute w-10 h-3 bg-green-500 rounded-full"
              style={{
                left: `${wormPosition}%`,
                transition: "left 2s linear",
              }}
            />
          </div>
          <button
            onClick={() => {
              setNewNote("");
              setEditIndex(null);
              setIsModalOpen(true);
            }}
            className="mt-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
          >
            +
          </button>
        </div>
      )}

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

      {notes.length > 0 && (
        <button
          onClick={() => {
            setNewNote("");
            setEditIndex(null);
            setIsModalOpen(true);
          }}
          className="absolute bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        >
          +
        </button>
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
