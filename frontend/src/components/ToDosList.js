import React from 'react'


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
                {todo.isActive}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.user}
            </td>
        </tr>
    )
}

const ToDosList = ({todos}) => {
    return (
        <table>
            <th>Задача</th>
            <th>Описание</th>
            <th>Время создания</th>
            <th>Время обновления</th>
            <th>Активен</th>
            <th>Проект</th>
            <th>Пользователь</th>

            {todos.map((todo) => <ToDoItem todo={todo} />)}
        </table>
    )
}

export default ToDosList
