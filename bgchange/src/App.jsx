import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black");

  return (
  
      <div className='w-full h-screen ' style = {{backgroundColor : color}}  >

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-[white]'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg '>
                <div className='p-[5px]'>
                  <button onClick={() => setColor("red")} 
                  className='outline-none px-4 py-1 rounded-full shadow-lg bg-[red]' >red</button>

                  <button onClick={() => setColor("yellow")} 
                  className='outline-none px-4 py-1 rounded-full shadow-lg bg-[yellow]' >yellow</button>

<button onClick={() => setColor("blue")} 
                  className='outline-none px-4 py-1 rounded-full shadow-lg bg-[blue]' >blue</button>


<button onClick={() => setColor("green")} 
                  className='outline-none px-4 py-1 rounded-full shadow-lg bg-[green]' >green</button>

<button onClick={() => setColor("grey")} 
                  className='outline-none px-4 py-1 rounded-full shadow-lg bg-[grey]' >grey</button>

<button onClick={() => setColor("pink")} 
                  className='outline-none px-4 py-1 rounded-full shadow-lg bg-[pink]' >pink</button>

                  </div> 

              </div>

        </div>
      
      </div>
    
  )
}

export default App
