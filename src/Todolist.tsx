import React from "react";

export type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
}
export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

function TodoList(props: TodoListPropsType) {
}

export default TodoList;