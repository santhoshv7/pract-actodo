import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() {

    /**const [activityArr, setActivityArr] = useState([{ id: 1, activity: "Practice Swimming" }, { id: 2, activity: "Go for Cricket Coaching" }, { id: 3, activity: "Learn TypeScript" }, { id: 4, activity: "Learn NextJS and GraphQL" }])**/

    const [activityArr, setActivityArr] = useState([]); 


    return (
        <>
            
                <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr = {activityArr} setActivityArr = {setActivityArr}/>
                
                 </div>

        </>
    )

}
export default TodoContainer