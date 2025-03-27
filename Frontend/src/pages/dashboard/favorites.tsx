import { motion } from "framer-motion";
import Header from "../../components/header";
import NoteTable from "../../components/noteTable";

function Favorites() {
  const favoriteNotes = [
    { id: 1, title: "Favorite Note 1", content: "Content of favorite note 1" },
    { id: 2, title: "Favorite Note 2", content: "Content of favorite note 2" },
    { id: 3, title: "Favorite Note 3", content: "Content of favorite note 3" },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Favorites" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Add any InfoCards here if needed */}
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          <NoteTable notes={favoriteNotes} />
        </div>
      </main>
    </div>
  );
}

export default Favorites;
