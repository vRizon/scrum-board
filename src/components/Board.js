import Column from "./Column";
import Note from "./Note";
import AddNote from "./AddNote";

import { useState } from "react";
const notesArr = [
  {
    text: "Create wireframes",
    category: "ice-box",
    color: "#FF8BE6",
  },
  {
    text: "Create UI design",
    category: "ice-box",
    color: "#5BFD5B",
  },
  {
    text: "Design the character",
    category: "ice-box",
    color: "#F8FD5B",
  },
];
export default function Board() {
  const [notes, setNotes] = useState(notesArr);

  function filterByCategory(category) {
    return notes.filter((note) => note.category === category);
  }

  function handleDrop(noteText, targetCategory) {
    setNotes((prev) =>
      prev.map((note) =>
        note.text === noteText ? { ...note, category: targetCategory } : note,
      ),
    );
  }

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
  }

  return (
    <div className="board">
      <AddNote onAddNewNotes={handleAddNote} />
      <Column add onDrop={handleDrop} />
      <Column
        title="ice-box"
        notes={filterByCategory("ice-box")}
        onDrop={handleDrop}
      />
      <Column
        title="emergency"
        emergency
        notes={filterByCategory("emergency")}
        onDrop={handleDrop}
      />
      <Column
        title="in progress"
        notes={filterByCategory("in progress")}
        onDrop={handleDrop}
      />
      <Column
        title="testing"
        notes={filterByCategory("testing")}
        onDrop={handleDrop}
      />
      <Column
        title="done"
        notes={filterByCategory("done")}
        onDrop={handleDrop}
      />
    </div>
  );
}
