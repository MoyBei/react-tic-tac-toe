import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let playerName = isEditing ? (
    <input type="text" />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
}
