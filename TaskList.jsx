import React, { useState } from 'react';

const TaskList = ({ todos, onChangeTodo, onDeleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
                </li>
            ))}
        </ul>
    );
};

const Task = ({ todo, onChange, onDelete }) => {
    const [isEdit, setIsEditing] = useState(false);

    let todoContent;

    if (isEdit) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => onChange({ ...todo, title: e.target.value })}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
                <span>{todo.title}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                        onChange({ ...todo, completed: e.target.checked });
                    }}
                />
            </label>
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TaskList;
