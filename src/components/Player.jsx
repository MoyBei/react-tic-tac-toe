import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={e => setPlayerName(e.target.value)}/>
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(isEditing => !isEditing)}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
