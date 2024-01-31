import { useState } from "react";

function player({ name, symbol }) {
  const [editing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((check) => !check);
  }
  return (
    <li>
      <span className="player">
        {!editing && <span className="player-name">{name}</span>}
        {editing && <input type="text" required />}
        <span className="playe-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!editing ? "Edit" : "Save"}</button>
    </li>
  );
}

export default player;
