import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "completed" | "active";


function App(): JSX.Element {

    // const tasks: Array<TaskType>
    let [tasks, setTasks] = useState<Array<TaskType>>( [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
        {id: 4, title: "Redux", isDone: true}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: number) {
       let filteredTasks = tasks.filter( ddd => ddd.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList = tasks;
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone);
    }
    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => !t.isDone);
    }

    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={tasksForTodoList}
                      removeTasks={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
