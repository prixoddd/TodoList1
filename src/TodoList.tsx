import React from 'react';
import {FilterValuesType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}
// const TodoList: React.FC<TodoListPropsType> = () => {
const TodoList: React.FC<TodoListPropsType> = (props) => {
    // debugger


    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(ddd => <li><input type="checkbox" checked={ddd.isDone}/>
                    <span>{ddd.title}</span>
                    <button onClick={ () => { props.removeTasks(ddd.id) }}>+</button>
                    </li>

                )}
            </ul>

            <div>
                <button onClick={ () => {props.changeFilter("all")}} >All</button>
                <button onClick={ () => {props.changeFilter("active")} }>Active</button>
                <button onClick={ () => {props.changeFilter("completed")} }>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;