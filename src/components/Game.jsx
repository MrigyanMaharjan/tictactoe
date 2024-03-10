import React, { useEffect, useState } from 'react';
import Turn from './Turn.jsx';
import { Conditions } from './Conditions.jsx';

const Game = () => {
    const [winner, setWinner] = useState('');
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('O');
    const [win, setWin] = useState(false);

    const handleClick = (index) => {
        if (board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
            Conditions.forEach((condition)=>{
                let pos1=condition[0];
                let pos2=condition[1];
                let pos3=condition[2];
                let pos1val=newBoard[pos1];
                let pos2val=newBoard[pos2];
                let pos3val=newBoard[pos3];
                if(pos1val!==null&&pos2val!==null&&pos3val!==null){
              if(pos1val==pos2val && pos2val==pos3val){
                setWin(true)
                setWinner(pos1val)
              }
                }
            })
            
    };

    }
    const renderBox = (index) => {
        return (
            <div
                key={index}
                className='box min-sm:h-[100px] min-sm:w-[100px] flex items-center justify-center text-2xl font-semibold bg-slate-500 h-[8rem] rounded-xl hover:scale-95 hover:cursor-pointer duration-150 w-[8rem]'
                onClick={() => handleClick(index)}
            >
                {board[index]}
            </div>
        );
    };
    
    const resetgame=()=>{
        setBoard(Array(9).fill(null));
        setTurn('O')
        setWin(false)
    }
    return (
<>
<Turn player={turn}/>
        <div className='bg-purple-400 h-[70vh] w-screen flex items-center justify-top flex-col overflow-hidden'>
            <section className='grid grid-cols-3 grid-row-3 h-[55vh] w-[55vh] place-items-center col  '>
                {[...Array(9)].map((_, index) => renderBox(index))}
            </section>
            {win?<>
            <div className=' absolute h-[60vh] w-[50vw] bg-transparent backdrop-blur-sm  flex items-top justify-center min-sm:w-screen'>    
                        <div className=' transition-transform absolute h-[30vh] w-[30vw] bg-teal-400 rounded-xl min-sm:w-screen flex items-center justify-center flex-col'> 
            <p className=' text-2xl '>Congratulations {winner} won</p>
            <button onClick={resetgame} className='border-2 p-2 mt-5 rounded-lg hover:bg-white hover:text-black duration-150'>Play Again</button>
            </div>
            </div>

            </>
            :
            <button onClick={resetgame} className='border-2 p-2 mt-5 rounded-lg hover:bg-white hover:text-black duration-150 min-sm:w-[10vh]'>Reset</button>
            }
        </div>
        </>

    );
};

export default Game;
