//app
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((currentActivePLayer)=> currentActivePLayer==='X' ? 'O' :'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player initialName="Player 1" symbol="X"/>
         <Player initialName="Player 2" symbol="O"/>
        </ol>
      
        <GameBoard/>
      </div>
      LOG
    </main>
  )
}

export default App;