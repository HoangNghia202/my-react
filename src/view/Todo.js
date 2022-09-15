const Todo=(props)=>{
    let todos= props.todos;
    return(
        <div className="todos-container">
            <h2>{props.title}</h2>
          {todos.map ((item, index)=>{ return <div key={item.id}> {index+1} { item.title}</div>}
           
          )}
        </div>

    )
}

export default Todo;