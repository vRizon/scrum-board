export default function Note({ text, color }) {
  return (
    <div
      className="note"
      style={{ backgroundColor: color }}
      draggable
      onDragStart={(e) => {
        console.log("dragging");
        e.dataTransfer.setData("text", text);
      }}
    >
      <span className="note-text">{text}</span>
    </div>
  );
}
