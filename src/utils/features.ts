export const saveTodos = (todos:TodoItemType[]):void =>{
     try {
        localStorage.setItem("mytodos", JSON.stringify(todos));
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
      }
}