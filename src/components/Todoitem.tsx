import { useState } from "react";

interface PropType {
  todo: TodoItemType;
  deleteHandler:(id:TodoItemType["id"])=>void;
  editHandler:(id:TodoItemType["id"],newTitle:TodoItemType["title"])=>void;
}


const Todoitem = ({ todo,deleteHandler,editHandler }: PropType) => {
    
  const [editActive,setEditActive] = useState<boolean>(false);
  const [textValue,setTextValue] = useState<string>(todo.title);
         
  return (
    <>
          <div key={todo.id} className=" TodoItem  bg-slate-700 w-full rounded-md flex items-center justify-between ">
            {
              editActive?<input value={textValue} onChange={(e)=>{setTextValue(e.target.value)}} onKeyDown={(e)=>{
                if(e.key === "Enter" && textValue !== ""){
                  
                  {
                    editHandler(todo.id,textValue)
                    setEditActive(false)
                  }
                }
              }} className="px-6 text-wrap font-semibold bg-zinc-500   outline-none 
              rounded-lg"/>:<p className="px-6 text-wrap font-semibold">{todo.title}</p>
      
            }
            
            <div className="flex items-center p-2 gap-5">
                <input className="w-4 h-4" type="checkbox" onClick={()=>{
                  todo.isCompleted = !todo.isCompleted
                }} />              
              <button onClick={()=>setEditActive((prev)=>!prev)} className="px-2 py2 rounded-xl">✏️</button>
              <button onClick={()=>deleteHandler(todo.id)} className="bg-red-500 hover:bg-red-700 hover:font-light px-4 py-2 rounded-xl">X</button>
            </div>
          </div>
        
    </>
    )
}

export default Todoitem
