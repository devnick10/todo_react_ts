import { useEffect, useState } from "react";
import Todoitem from "./components/Todoitem"
import { saveTodos } from "./utils/features";


function App() {

    const [todos, setTodos] = useState<TodoItemType[]>([]);
    const [title, setTitle] = useState("")

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const todo: TodoItemType = {
        id: String(Math.random() * 1000),
        title: title,
        isCompleted:false
      }
    setTodos((prev) => [...prev, todo]); 
    setTitle("")
  


  }


  const deleteHandler = (id:TodoItemType["id"]):void=>{
     
   const newTodos:TodoItemType[] =  todos.filter((todo)=>todo.id !== id)
    
   setTodos(newTodos);

  }

  const completeHandler=(id:TodoItemType["id"])=>{
   const newtodo:TodoItemType[] =  todos.map((todo)=>{
      if(todo.id === id)todo.isCompleted = !todo.isCompleted
      return todo
    })

    setTodos(newtodo)

  };

   const editHandler = (id:TodoItemType["id"],newTitle:TodoItemType["title"]):void=>{
        
    const newtodos:TodoItemType[] = todos.map((todo)=>todo.id === id?{...todo,title:newTitle}:todo)
    
    setTodos(newtodos)

   };

  useEffect(()=>{

    saveTodos(todos)

  },[todos])

  
   
   


  
  return (
    <>
      <div className=" flex text-white w-full h-screen bg-black justify-center">
        <div className="flex flex-col px-96 w-full">
          <div className="w-full py-10 p-5 text-center">
            <h1 className="text-5xl font-bold">Welcome To My Todo</h1>
          </div>
          <form action="" onSubmit={submitHandler}>
            <div className="TodoForm py-10 w-full flex justify-center gap-8 ">
              <input required value={title} onChange={(e) => setTitle(e.target.value)} className="bg-zinc-500 px-16  outline-none rounded-lg" placeholder="Title" type="text" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 hover:font-light px-4 py-2 rounded-xl">Add</button>
            </div>
          </form>
          <div className="TodoContainer gap-4 flex items-center flex-col">
            <h1 className="pb-2 font-semibold">TODOS</h1>
             {
              todos.length === 0?<p>No Todo Yet.</p>:""
             }
             {
              todos.map((todo)=>(
                <Todoitem editHandler={editHandler} completeHandler={completeHandler} deleteHandler={deleteHandler} todo={todo} />
              ))
             }

          </div>
        </div>
      </div>

    </>
  )
}

export default App
