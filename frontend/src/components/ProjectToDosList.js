import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
                {todo.user}
            </td>
            <td>
                {todo.isActive ? <button onClick={()=>deleteToDo(todo.id)} type='button'>Завершить</button>: ''}
            </td>
        </tr>
    )
}

const ProjectToDosList = ({todos, deleteToDo}) => {
    let { id } = useParams();
    let filteredTodos = todos.filter((todo) => todo.project === parseInt(id));
    return (
        <div>
            <table>
                <th>Задача</th>
                <th>Описание</th>
                <th>Время создания</th>
                <th>Время обновления</th>
                <th>Завершено</th>
                <th>Пользователь</th>

                {filteredTodos.map((todo) => <ToDoItem todo={todo} deleteToDo={deleteToDo} />)}
            </table>
            <Link to='/todos/create'>Создать</Link>
        </div>
    )
}

export default ProjectToDosList