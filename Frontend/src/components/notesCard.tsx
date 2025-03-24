interface NotesCardProps {
  note: string;
}

function NotesCard({ note }: NotesCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm mb-2">
      <p>{note}</p>
    </div>
  );
}

export default NotesCard;
