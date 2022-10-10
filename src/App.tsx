import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from "./Todolist";

function App() {
    let tasks =
        [
            {id: 1, title: 'Egg', isDone: true},
            {id: 2, title: 'Bacon', isDone: true},
            {id: 3, title: 'Burger', isDone: false}
        ]
    return (
        <div className="App">
            {/*<Todolist title={} tasks={}/>*/}
        </div>
    );
}

export default App;
