
import {FcList} from 'react-icons/fc'
import Todo from './Todo'

const TodoList = ({completeHandler,editText,filteredTodos,deleteItem}) => {
    

    
    const renderItems=()=> {
        return (
            filteredTodos.map((todo)=> {
                return <Todo key ={todo.id} 
                            text={todo.text} 
                            completed={todo.completed} 
                            id={todo.id} date={todo.date} 
                            deleteItem={deleteItem}  
                            completeHandler={completeHandler} 
                            editText={editText}/>
            })
           
        )
    }
   
  return (
    <div className='flex flex-col items-center w-full h-2/5 pl-3 border-2 border-teal-900 border-solid rounded-md mt-3  '>
        {filteredTodos.length? renderItems() :<div className='py-10 flex flex-col items-center'>
            <FcList  size="100px"/>
            <p className='text-teal-900 text-xl' >Not TODO yet</p>
        </div> }
        
    </div>
  )
}

export default TodoList