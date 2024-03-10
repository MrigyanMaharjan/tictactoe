import React, { useEffect, useState } from 'react'


const Turn = ({player}) => {
    console.log(player)

      const[turn,setTurn]=useState(player);
    
    // console.log(turn)
    useEffect(() => {
      setTurn(player);
    }, [player]);
  
  return (
    <div className='overflow-hidden'>
        <div className=' text-2xl h-[20vh] w-screen bg-purple-400 flex items-center justify-center gap-2'>
          {turn==='X'?
           <div className=' text-2xl h-[20vh] w-screen bg-purple-400 flex items-center justify-center gap-2'>
          <section id='x' className='bg-gray-500 h-[3rem] w-[5rem] flex items-center justify-center rounded-lg'>0</section>
            <section className='bg-blue-500 h-[3rem] w-[5rem] flex items-center justify-center rounded-lg'>X</section>
            </div>
           :
           <div className=' text-2xl h-[20vh] w-screen bg-purple-400 flex items-center justify-center gap-2'>
          <section id='x' className='bg-red-500 h-[3rem] w-[5rem] flex items-center justify-center rounded-lg'>0</section>
            <section className='bg-gray-500 h-[3rem] w-[5rem] flex items-center justify-center rounded-lg'>X</section>
            </div>
           
          } 
        </div>
    </div>
  )

}

export default Turn