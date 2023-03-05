import { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex flex-col justify-center">
      <div className='py-52'>
        <h1 className='p-5 text-4xl text-indigo-300 text-center'>Increment and Decrement by React Redux</h1>
        <div className='flex flex-row justify-center'>
          <div className='w-fit flex '>
            <button className='text-3xl text-black rounded-xl bg-indigo-300 hover:bg-indigo-500 hover:text-white  px-10'>
              <FaMinus />
            </button>
            <p className='bg-white text-4xl text-justify p-10 font-bold'>0</p>
            <button className='text-3xl text-black rounded-xl bg-indigo-300 hover:bg-indigo-500 hover:text-white px-10'>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
