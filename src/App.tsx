import React, {useState} from 'react';
import './App.css';
import Todolist, {TodoListPropsType, TodoListType} from "./Todolist";
import {v1} from "uuid";
import todolist from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: 'Egg', isDone: true},
        {id: v1(), title: 'Bacon', isDone: true},
        {id: v1(), title: 'Burger', isDone: false}
    ])

    function changeFilter(value: FilterValuesType,todolistId:string) {
        let todoList=todoLists.find(tl=>tl.id===todolistId)
        if(todoList){
            todoList.filter=value
            setTodoLists([...todoLists])
            let tasksForTodoList = tasks

            if (filter === 'active') {
                tasksForTodoList = tasks.filter(task => task.isDone === false)
            }
            if (filter === 'completed') {
                tasksForTodoList = tasks.filter(task => task.isDone === true)
            }
            if (filter === 'completed') {
                tasksForTodoList = tasks.filter(task => task.isDone === true)
            }
        }}

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>(
        [
            {id: v1(), title: 'What to learn', filter: 'all'},
            {id: v1(), title: 'What to buy', filter: 'all'},
        ]
    )

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

}





    return (
        <div className="App">
            {
                todoLists.map(todolist => {
                    let tasksForTodolist=tasks
                    if(todolist.filter==='active'){
                        tasksForTodolist=tasks.filter(task=>task.isDone===false)
                    }
                    if(todolist.filter==='completed'){
                        tasksForTodolist=tasks.filter(task=>task.isDone===true)
                    }
                    return <Todolist
                        key={todolist.id}
                        id={todolist.id}
                        title={'Consumer basket'}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        setTasks={setTasks}
                        filter={todolist.filter}
                    />
                })
            }


        </div>
    );
}

export default App;
