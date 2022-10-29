import React, {useState} from "react";
import {FilterValuesType} from "./App";
import {v1} from "uuid";

export type TodoListType = {
    id: string
    filter: string
    title: string
}

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    setTasks: (tasks: Array<TaskType>) => void
    id: string
    filter:string
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function TodoList(props: TodoListPropsType) {

    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    function addTask() {

        props.setTasks([
            {
                id: v1(),
                title: text,
                isDone: false
            },
            ...props.tasks,
        ])
        setText('')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={text} onChange={onChange}/>
                <button disabled={text === ''} onClick={addTask}>+</button>
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