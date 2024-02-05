import { useState } from "react";

function player({ initialName, symbol, isActive }) {
  const [editing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing((check) => !check);
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
    //
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!editing && <span className="player-name">{playerName}</span>}
        {editing && (
          <input
            type="text"
            required
            onChange={handleChange}
            value={playerName}
          />
        )}
        <span className="playe-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!editing ? "Edit" : "Save"}</button>
    </li>
  );
}

export default player;
