function player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="playe-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}

export default player;
