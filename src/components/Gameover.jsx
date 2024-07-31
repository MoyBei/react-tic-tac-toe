export default function Gameover({ winner, onRestart }) {
  return(
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner ? `${winner} won!` : "It's DRAW"}</p>
      <p><button onClick={onRestart}>Play Again!</button></p>
    </div>
  )
}