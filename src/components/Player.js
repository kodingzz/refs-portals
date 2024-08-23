import { useState ,useRef} from 'react'


export default function Player(){
    const [playerName,setPlayerName]= useState('');
    // const [isClicked,setIsClicked]= useState(false);

    const enteredPlayerName= useRef();

    // function handleChangeName(e){
    //     setPlayerName(e.target.value);
    //     setIsClicked(false);
    // }
    function handleBtnClick(){
       setPlayerName(enteredPlayerName.current.value);
       enteredPlayerName.current.value='';
    }
    return (
    <div id='player'>
        <h2>{`Welcome ${playerName ?playerName : 'unknown entity'}`}</h2>
        <p>
            <input ref={enteredPlayerName} type='text'/>
            <button onClick={handleBtnClick}>Set Name</button>
        </p>
    </div>
    )
}