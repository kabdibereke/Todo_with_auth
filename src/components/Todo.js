import {FiEdit3} from "react-icons/fi"
import {MdDeleteOutline} from 'react-icons/md'
import {useState} from 'react'
const Todo = (props) => {
    const [edit, setEdit]=useState(false)
    const [newText, setNewText]= useState('')

    const handleChange = ()=> {
      props.editText(props.id, newText)
      setEdit(false)
    }

  return (
    <div className="w-full py-4 px-5">
       <div className="flex gap-3 items-center">
            <input onChange={()=> props.completeHandler(props)} checked={props.completed} className="w-5 h-5" type="checkbox" />
            {edit?  <div>
                <input onChange={(e)=>setNewText(e.target.value)} value={newText} className="border-2 h-8 border-teal-900 border-solid rounded-md w-80 pl-2 focus:outline-none "  type="text" />
                <button onClick={handleChange} className="ml-2 w-14 h-8 bg-teal-900 text-white rounded-md" >Edit</button>
            </div>
             : <p className='text-teal-900 text-xl '>{props.text.length>=40?props.text.substring(0,40)+'...': props.text}</p>}
        </div> 
        <div className="flex justify-between" >
            <p className="text-gray text-lg">{props.date}</p>
            <div className="flex gap-3 ">
                <FiEdit3 onClick={()=> setEdit(true)}className="cursor-pointer" size="25px"/>
                <MdDeleteOutline onClick={()=>props.deleteItem(props.id)}  className="cursor-pointer" size="25px"/>
            </div>
        </div>
        <div className="w-full bg-teal-900 h-[2px] "></div>
    </div>
  )
}

export default Todo