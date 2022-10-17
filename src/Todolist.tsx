import React from "react";
import {FilterValuesType} from "./App";


export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter:(value:FilterValuesType)=>void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function TodoList(props: TodoListPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input type={'checkbox'} checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => {
                                props.removeTask(task.id)
                            }}>
                                ✖
                                ️
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>
                    Active
                </button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed
                </button>
            </div>

        </div>
    )
}

export default TodoList;