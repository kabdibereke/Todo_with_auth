import AddTodo from "../components/AddTodo";
import Search from "../components/Search";
import TodoFlilter from "../components/TodoFlilter";
import TodoList from "../components/TodoList";
import {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import Logout from "../components/Logout";
import { ref, set,onValue,remove, update } from "firebase/database";
import {db} from '../firebase'
import { UserAuth } from "../context/AuthContext";
const  MainPage=  ()=> {
  const [todos, setTodos] =useState([])
  const [searchText, setSearchText]=useState('');
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])
  const {user}=  UserAuth()

  useEffect(()=> {
    filterHandler()
  }, [todos,status])

  useEffect( ()=> {
    onValue(ref(db), snapshot=> {
      setTodos([])
       const data =  snapshot.val();
       const email = user?.email
      if (data!==null ) {
        Object.values(data).map((todo)=> {
          if (email ===todo.user) {
            setTodos(oldArr=>[...oldArr,todo])
          }
        })
      }
    })
  }, [user])

  const writeUserData=(text)=> {
    const id= nanoid()
    const date = new Date()
    set(ref(db, `/${id}`), {
      text:text,
      completed:false,
      id,
      user:user?.email,
      date: date.toLocaleDateString()
    });
  }
  const deleteItem = (id)=> {
    remove(ref(db, `/${id}`))
  }

  const completeHandler=(todo)=> {
    update(ref(db, `/${todo.id}`), {
      completed:!todo.completed
    })
    
  }
  const editText = (id, text)=> {
    update(ref(db, `/${id}`), {
      text:text
    })
      
  }

  const filterHandler = ()=> {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(item=> item.completed===true))
        break;
      case 'active' :
        setFilteredTodos(todos.filter(item=> item.completed===false))

        break;
      default :
        setFilteredTodos(todos)
    } 

  }
  
  return (  
    <div className="flex justify-center items-center ">
        <div className="flex flex-col gap-3 justify-center items-center w-full sm:w-[700px] py-10 bg-white">
        <Logout/>
            <div className="w-full flex flex-wrap justify-center items-start">
            <Search setSearchText={setSearchText}/>
            <div className='mt-8 w-full h-1 bg-teal-900  border-solid border-2 '></div>
            </div>
            <div className="flex  flex-col gap-3  w-full items-start px-[10px] ">
            <AddTodo writeUserData={writeUserData} />
            <TodoFlilter setStatus={setStatus} status={status} />
            <TodoList deleteItem={deleteItem} 
                      editText={editText}  
                      filteredTodos ={filteredTodos.filter((todo)=> todo.text.toLowerCase().includes(searchText))} 
                      completeHandler={completeHandler}/>
            </div>
        </div>
    </div>    
  );
}

export default MainPage;
