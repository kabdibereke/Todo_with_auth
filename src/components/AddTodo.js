import {useState} from 'react'

const AddTodo = ({writeUserData}) => {
    const [addText, setAddText]=useState('')
   
    const handleSubmit=()=> {
        if (addText) {
          writeUserData(addText)
        }
    }


  return (
    <div className="pt-5 w-[310px] sm:w-[450px]">
        <h1 className='text-teal-900 text-2xl'>Todos</h1>
        <div >
            <input onChange={(e)=>setAddText(e.target.value)} className='mt-5 border-2 h-8 border-teal-900 border-solid rounded-md w-[280px] sm:w-[450px] pl-2 focus:outline-none ' type="text" placeholder="Add a todo" />
            <button onClick={handleSubmit} className=" w-14 mt-5  h-8 bg-teal-900 text-white rounded-md">Add</button>
        </div>
    </div>
  )
}

export default AddTodo