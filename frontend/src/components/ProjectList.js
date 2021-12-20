import React from 'react'
import { Link } from 'react-router-dom';


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                <Link to={`id/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                <ul>
                    {project.users.map(user => (<li>{user}</li>))}
                </ul>
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table>
            <th>Наименование</th>
            <th>Репозиторий</th>
            <th>Пользователи</th>
            {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default ProjectList
