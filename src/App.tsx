// import { useEffect, useState } from "react";
// import Todoitem from "./components/Todoitem"
// import { saveTodos } from "./utils/features";


// function App() {

//     const [todos, setTodos] = useState<TodoItemType[]>([]);
//     const [title, setTitle] = useState("")

//     const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault()

//       const todo: TodoItemType = {
//         id: String(Math.random() * 1000),
//         title: title,
//         isCompleted:false
//       }
//     setTodos((prev) => [...prev, todo]); 
//     setTitle("")
  


//   }


//   const deleteHandler = (id:TodoItemType["id"]):void=>{
     
//    const newTodos:TodoItemType[] =  todos.filter((todo)=>todo.id !== id)
    
//    setTodos(newTodos);

//   }

//   const completeHandler=(id:TodoItemType["id"])=>{
//    const newtodo:TodoItemType[] =  todos.map((todo)=>{
//       if(todo.id === id)todo.isCompleted = !todo.isCompleted
//       return todo
//     })

//     setTodos(newtodo)

//   };

//    const editHandler = (id:TodoItemType["id"],newTitle:TodoItemType["title"]):void=>{
        
//     const newtodos:TodoItemType[] = todos.map((todo)=>todo.id === id?{...todo,title:newTitle}:todo)
    
//     setTodos(newtodos)

//    };

//   useEffect(()=>{

//     saveTodos(todos)

//   },[todos])

  
   
   


  
//   return (
//     <>
//       <div className=" flex text-white w-full h-screen bg-black justify-center">
//         <div className="flex flex-col px-96 w-full">
//           <div className="w-full py-10 p-5 text-center">
//             <h1 className="text-5xl font-bold">Welcome To My Todo</h1>
//           </div>
//           <form action="" onSubmit={submitHandler}>
//             <div className="TodoForm py-10 w-full flex justify-center gap-8 ">
//               <input required value={title} onChange={(e) => setTitle(e.target.value)} className="bg-zinc-500 px-16  outline-none rounded-lg" placeholder="Title" type="text" />
//               <button type="submit" className="bg-blue-500 hover:bg-blue-700 hover:font-light px-4 py-2 rounded-xl">Add</button>
//             </div>
//           </form>
//           <div className="TodoContainer gap-4 flex items-center flex-col">
//             <h1 className="pb-2 font-semibold">TODOS</h1>
//              {
//               todos.length === 0?<p>No Todo Yet.</p>:""
//              }
//              {
//               todos.map((todo)=>(
//                 <Todoitem editHandler={editHandler} completeHandler={completeHandler} deleteHandler={deleteHandler} todo={todo} />
//               ))
//              }

//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import Todoitem from "./components/Todoitem";
import { saveTodos } from "./utils/features";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [title, setTitle] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: TodoItemType = {
      id: String(Math.random() * 1000),
      title: title,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, todo]);
    setTitle("");
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeHandler = (id: TodoItemType["id"]) => {
    const newtodo: TodoItemType[] = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newtodo);
  };

  const editHandler = (id: TodoItemType["id"], newTitle: TodoItemType["title"]): void => {
    const newtodos: TodoItemType[] = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(newtodos);
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    
      <>
      <div className="flex text-white w-full h-screen  sm:h-screen  bg-black justify-center">
        <div className="flex flex-col sm:pt-2 md:pt-2  sm:px-10 md:px-20 lg:px-32 w-full max-w-screen-lg">
          <div className="w-full py-6 flex justify-center sm:py-8 md:py-10 text-center">
            <h1 className="text-3xl sm:text-4xl text-center text-nowrap md:text-5xl font-bold">Welcome To My Todo</h1>
          </div>
          <form action=""  onSubmit={submitHandler}>
            <div className="TodoForm  py-6 sm:p-4 md:p-4 p-4  w-full  flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-zinc-500 w-full xl:px-14 sm:w-auto px-4 sm:px-8 py-2 outline-none rounded-lg"
                placeholder="Title"
                type="text"
              />
              <button
                type="submit"
                className="bg-blue-500 transition-all duration-200 ease-in-out transform hover:bg-blue-700 hover:font-light px-4 py-2 rounded-xl"
              >
                Add
              </button>
            </div>
          </form>
          <div className="TodoContainer  gap-4 max-w-full flex items-center flex-col overflow-y-auto max-h-[400px] p-4 w-full border rounded-lg">
            <h1 className="pb-2 font-semibold sticky text-lg sm:text-xl">TODOS</h1>
            {todos.length === 0 ? <p>No Todo Yet.</p> : ""}
            {todos.map((todo) => (
              <Todoitem
                key={todo.id}
                editHandler={editHandler}
                completeHandler={completeHandler}
                deleteHandler={deleteHandler}
                todo={todo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
