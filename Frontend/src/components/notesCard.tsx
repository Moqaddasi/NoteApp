import { Edit, Trash } from "lucide-react";

interface NotesCardProps {
  note: string;
  removeNote: () => void;
  editNote: () => void;
}

function NotesCard({ note, removeNote, editNote }: NotesCardProps) {
  return (
    <div
      className="
      bg-white 
      rounded-xl 
      shadow-md 
      hover:shadow-lg 
      transition-all 
      duration-300 
      transform 
      hover:-translate-y-1 
      border 
      border-gray-200 
      overflow-hidden 
      flex 
      flex-col
    "
    >
      <div className="p-4 flex-grow">
        <p className="text-gray-800 text-sm line-clamp-3">{note}</p>
      </div>

      <div
        className="
        border-t 
        border-gray-200 
        flex 
        justify-between 
        items-center 
        p-3 
        bg-gray-50
      "
      >
        <div className="flex items-center space-x-3">
          <Edit
            size={20}
            className="
              text-gray-500 
              hover:text-blue-500 
              cursor-pointer 
              transition-colors
            "
            onClick={editNote}
          />
          <Trash
            size={20}
            className="
              text-red-500 
              hover:text-red-700 
              cursor-pointer 
              transition-colors
            "
            onClick={removeNote}
          />
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
