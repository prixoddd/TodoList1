import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

const TodoList: React.FC<TodoListPropsType> = (props) => {

    const [title, setTitle] = useState<string>("")

    const todoListItems: Array<JSX.Element> = props.tasks.map((ddd) => {
        const removeTaskHandler = () => props.removeTasks(ddd.id)

        return (
            <li>
                <input type="checkbox" checked={ddd.isDone}/>
                <span>{ddd.title}</span>
                <button onClick={removeTaskHandler}>delete
                </button>
            </li>
        )
    })
    const maxTitleLength = 20
    const recTitleLength = 10

    const AddTaskIsNotPossible = title.length === 0 || title.length > maxTitleLength

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }
    const setLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const onKeyDownAddTaskHandler = AddTaskIsNotPossible
        ? undefined  //если значение undefined, то нет обработчика
        : (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTaskHandler()
    const longTitleWarning = title.length > recTitleLength && <div style={{color: "pink"}}>Title should be shorter</div>
    const longTitleError = title.length > maxTitleLength && <div style={{color: "red"}}>Title is too long</div>

    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input
                    placeholder={"Enter the task title, please"}
                    value={title}
                    onChange={setLocalTitleHandler}
                    onKeyDown={onKeyDownAddTaskHandler}
                />
                <button
                    onClick={addTaskHandler}
                    disabled={AddTaskIsNotPossible}
                >+</button>
                {longTitleWarning}
                {longTitleError}
            </div>
            <ul>
                {todoListItems}
                {/*{props.tasks.map(ddd => <li><input type="checkbox" checked={ddd.isDone}/>*/}
                {/*        <span>{ddd.title}</span>*/}
                {/*        <button onClick={() => {*/}
                {/*            props.removeTasks(ddd.id)*/}
                {/*        }}>delete*/}
                {/*        </button>*/}
                {/*    </li>*/}
                {/*)}*/}
            </ul>

            <div>
                <button onClick={() => {
                    props.changeFilter("all")
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter("active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter("completed")
                }}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;