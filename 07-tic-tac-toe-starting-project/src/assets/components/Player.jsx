//Player
import { useState } from "react";
export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState();
    // make a function that runs when we click edit
    function handleEditClick(){
        setIsEditing(editing=>!isEditing);
    }
    // track if we are editing or not already
    // have a variable represent the content we are seeing where the name is now 
    let playerName= <span className="player-name">{name}</span>;
    if(isEditing){
        playerName= <input type="text" required value={name}/>
    }
    return(
        <li>
            <span className="player">
                {playerName}
                <span className="player-name">{name}</span>
                <span id="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
