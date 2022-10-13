import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    const tasks1 =
        [
            {id: 1, title: 'Egg', isDone: true},
            {id: 2, title: 'Bacon', isDone: true},
            {id: 3, title: 'Burger', isDone: false}
        ]
    const tasks2 =
        [
            {id: 1, title: 'Ball', isDone: true},
            {id: 2, title: 'sneaker', isDone: false},
            {id: 3, title: 'rocket', isDone: false}
        ]
    return (
        <div className="App">
            <Todolist title={'Consumer basket'} tasks={tasks1}/>
            <Todolist title={'Sport goods'} tasks={tasks2}/>
        </div>
    );
}

export default App;
