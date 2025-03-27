import { Edit, Trash } from "lucide-react";

interface NotesCardProps {
  note: string;
  removeNote: () => void;
  editNote: () => void;
}

function NotesCard({ note, removeNote, editNote }: NotesCardProps) {
  return (
    <div className="flex border p-4 rounded shadow-sm mb-2 items-center">
      <div>
        <p>{note}</p>
      </div>
      <div className="ml-auto flex items-center">
        <Edit
          color="white"
          className="cursor-pointer mr-2"
          onClick={editNote}
        />
        <Trash color="red" onClick={removeNote} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default NotesCard;
