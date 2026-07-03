import { useState } from "react";

export default function AddNote({ onAddNewNotes }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#FF8BE6");
  const [category, setCategory] = useState("ice-box");

  function handleSubmit(e) {
    //1 prevent default
    e.preventDefault();

    //if no note do nothing
    if (!text) return;

    // create object with all the user input
    const newItem = { text, category, color };
    console.log(newItem);

    // call func to pass the new item to the array
    onAddNewNotes(newItem);
  }

  return (
    <div className="addnote-overlay">
      <form className="addnote-form" onSubmit={handleSubmit}>
        <h2 className="addnote-title">New Note</h2>

        <label className="addnote-label">Write on your sticky note</label>
        <input
          className="addnote-input"
          type="text"
          placeholder="Type your note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>

        <label className="addnote-label">Choose color</label>
        <select
          className="addnote-input"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="#FF8BE6">Pink</option>
          <option value="#5BFD5B">Green</option>
          <option value="#F8FD5B">Yellow</option>
          <option value="#FFA85B">Orange</option>
        </select>

        <label className="addnote-label">Choose Category</label>
        <select
          className="addnote-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="ice-box">Ice-box</option>
          <option value="emergency">Emergency</option>
          <option value="in progress">In Progress</option>
          <option value="testing">Testing</option>
          <option value="done">Done</option>
        </select>

        <button className="addnote-btn">Add Note</button>
      </form>
    </div>
  );
}
