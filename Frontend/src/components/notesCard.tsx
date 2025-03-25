import { Trash } from "lucide-react";

interface NotesCardProps {
  note: string;
  removeNote: () => void;
}

function NotesCard({ note, removeNote }: NotesCardProps) {
  return (
    <div className="flex border p-4 rounded shadow-sm mb-2 items-center">
      <div>
        <p>{note}</p>
      </div>
      <div className="ml-auto">
        <Trash color="red" onClick={removeNote} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default NotesCard;
