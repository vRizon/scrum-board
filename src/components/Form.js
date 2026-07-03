export default function Form() {
  const [note, setNote] = useState("");
  return (
    <div className="form">
      <span>Write Note</span>
      <input
        type="text"
        placeholder="Write here"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      <span>Choose color</span>
      <select>
        <option value="pink">Pink</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select>
      <button>Add Note</button>
    </div>
  );
}
