import Note from "./Note";

export default function Column({ title, add, emergency, notes = [], onDrop }) {
  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const noteText = e.dataTransfer.getData("text");
        onDrop(noteText, title);
      }}
    >
      <div
        className={`col-header ${emergency ? "col-header--emergency" : ""} ${add ? "col-header--add" : ""}`}
      >
        <span className="modal-title">{add ? "+" : title}</span>
      </div>
      <div className="column-body">
        {notes.map((el, i) => (
          <Note key={i} text={el.text} color={el.color} />
        ))}
      </div>
    </div>
  );
}
