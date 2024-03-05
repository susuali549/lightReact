import {useState} from 'react'

function Index() {
    // waxa isticmale arraysz
     const [color, setColor] = useState("")
     const handleon = () =>{
        setColor("pink")
     }
    // function  leerka daminaayo //

const handleof = () =>{
        setColor("white")
     }

  return (
    <div className="flex justify-center mt-5">
        <div>
        <div style={{backgroundColor: color}} className="w-[300px] h-[300px] border-2 border-black rounded-full "></div>

            
                <button onClick={handleon} className="bg-orange-600 rounded ml-16  text-white text-3xl py-2 px-3 ">ON</button>
                <button onClick={handleof} className="bg-orange-600 rounded m-3  text-white text-3xl py-2 px-3 ">OF</button>
                
            </div>
            </div>

    
  )
}

export default Index