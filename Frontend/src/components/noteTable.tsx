import React from "react";

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
    <div className="p-4min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="
              bg-white 
              rounded-xl 
              shadow-md 
              hover:shadow-lg 
              transition-all 
              duration-300 
              transform 
              hover:-translate-y-2 
              border 
              border-gray-200 
              overflow-hidden
            "
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-800 truncate">
                  {note.title}
                </h3>
                <span className="text-sm text-gray-500 opacity-70 ml-2">
                  #{note.id}
                </span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {note.content}
              </p>
            </div>
          </div>
        ))}

        {notes.length === 0 && (
          <div className="col-span-full flex items-center justify-center p-8 bg-white rounded-xl shadow-md">
            <p className="text-gray-500 text-center">
              No notes found. Start creating your first note!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteTable;
