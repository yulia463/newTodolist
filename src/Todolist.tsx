import React from "react";

type TodoListPropsType={
    title :string
   tasks:TaskType
}


export type TaskType = {
    id: string
    title: string
    isDone: boolean

}
function TodoList(props: TodoListPropsType) {

}







export default TodoList;