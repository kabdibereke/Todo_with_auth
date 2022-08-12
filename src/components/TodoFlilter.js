import {useState} from 'react'

const TodoFlilter = ({setStatus, status}) => {
  const [active, setActive]= useState(false)
  const [all, setAll]= useState(true)
  const [completed, setCompleted]= useState(false)
    
  const onClickFilter = (filter)=> {
      if (filter == 'all') {
        setAll(true)
        setActive(false)
        setCompleted(false)
      }else if (filter == 'active') {
        setAll(false)
        setActive(true)
        setCompleted(false)
      }else if (filter == 'completed') {
        setAll(false)
        setActive(false)
        setCompleted(true)
      }
      setStatus(filter)
  } 
  const renderClass = (filter)=> {
      if (filter) {
        return "text-teal-900   ease-in duration-100 border-b-4 text-xl border-teal-900" 
      }else {
        return "text-teal-900 text-lg ease-in duration-100 hover:border-b-4 hover:text-xl hover: hover:border-teal-900"
      }
  }
  return (
    <div className="mt-5 w-[280px] sm:w-[350px] flex justify-between">
        <button  onClick={()=>onClickFilter('all')} className={renderClass(all)}  >All</button>
        <button onClick={()=>onClickFilter('active')} className={renderClass(active)}>Active</button>
        <button  onClick={()=>onClickFilter('completed')} className={renderClass(completed)}>Completed</button>
    </div>
  )
}

export default TodoFlilter