import { useDebugValue, useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions';

function App() {
  const [count, setCount] = useState(0)

  const num = useSelector((state) => state.updateNum);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col justify-center">
      <div className='py-52'>
        <h1 className='p-5 text-4xl text-indigo-300 text-center'>Increment and Decrement by React Redux</h1>
        <div className='flex flex-row justify-center'>
          <div className='w-fit flex '>
            <button
              onClick={() => dispatch(decNumber())}
              className='text-3xl text-black rounded-xl bg-indigo-300 hover:bg-indigo-500 hover:text-white  px-10 '>
              <FaMinus />
            </button>
            <p className='bg-white text-4xl text-justify p-10 font-bold'>{num}</p>
            <button
              onClick={() => dispatch(incNumber())}
              className='text-3xl text-black rounded-xl bg-indigo-300 hover:bg-indigo-500 hover:text-white px-10'>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
