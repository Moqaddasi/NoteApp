interface Props {
  newNote: string;
  setNewNote: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
  addNote: () => void;
}

function NoteModal(props: Props) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Add Note</h2>
        <textarea
          value={props.newNote}
          onChange={(e) => props.setNewNote(e.target.value)}
          className="w-full border p-2 rounded mb-4 text-black"
          rows={4}
          placeholder="Write your note here..."
        />
        <div className="flex justify-end">
          <button
            onClick={() => props.setIsModalOpen(false)}
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={props.addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
