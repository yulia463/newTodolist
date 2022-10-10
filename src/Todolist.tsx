import React from "react";

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function TodoList(props: TodoListPropsType) {
}

export default TodoList;