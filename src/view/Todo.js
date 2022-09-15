const Todo=(props)=>{
    //let todos= props.todos;
    const {todos, title, handleDelete}= props;
    const handleClickDelete = (id) => {
       console.log("delete >>>>", id);
       handleDelete(id);
    }
    return(
        <div className="todos-container">
            <h4>{title}</h4>
          {todos.map ((item, index)=>{
             return <div key={item.id}> {index+1} { item.title} <span style={{color:'red', cursor:'pointer'}} 
             onClick={()=>handleClickDelete(item.id)}>x</span></div>}
           
          )}
          <hr></hr>
        </div>

    )
}

export default Todo;