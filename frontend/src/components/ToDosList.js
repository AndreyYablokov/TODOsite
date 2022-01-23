import React from 'react';
import { Link } from 'react-router-dom';

const ToDoItem = ({todo, deleteToDo}) => {
    return (
        <tr>
            <td>
                {todo.task}
            </td>
            <td>
                {todo.description}
            </td>
            <td>
                {todo.createdTimestamp}
            </td>
            <td>
                {todo.updatedTimestamp}
            </td>
            <td>
                {todo.isActive ? 'Нет': 'Да'}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {todo.isActive ? <button onClick={()=>deleteToDo(todo.id)} type='button'>Завершить</button>: ''}
            </td>
        </tr>
    )
}

const ToDosList = ({todos, deleteToDo}) => {
    return (
        <div>
            <table>
                <th>Задача</th>
                <th>Описание</th>
                <th>Время создания</th>
                <th>Время обновления</th>
                <th>Завершено</th>
                <th>Проект</th>
                <th>Пользователь</th>
                <th></th>

                {todos.map((todo) => <ToDoItem todo={todo} deleteToDo={deleteToDo} />)}
            </table>
            <Link to='/todos/create'>Создать</Link>
        </div>
    )
}

export default ToDosList;
