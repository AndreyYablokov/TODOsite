import React from 'react';
import { useParams } from 'react-router-dom';

const ToDoItem = ({todo}) => {
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
        </tr>
    )
}

const ProjectToDosList = ({todos}) => {
    let { id } = useParams();
    let filteredTodos = todos.filter((todo) => todo.project == id);
    return (
        <table>
            <th>Задача</th>
            <th>Описание</th>
            <th>Время создания</th>
            <th>Время обновления</th>
            <th>Завершено</th>
            <th>Пользователь</th>

            {filteredTodos.map((todo) => <ToDoItem todo={todo} />)}
        </table>
    )
}

export default ProjectToDosList