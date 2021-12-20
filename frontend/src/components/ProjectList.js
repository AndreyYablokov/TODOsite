import React from 'react'
import { Link, useParams } from 'react-router-dom';


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                <Link to={`${project.id}`}>{project.name}</Link>
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
    let items;
    let { id } = useParams();
    if (id) {
        items = projects.filter((project) => project.id == id);
    } else {
        items = projects;
    };
    return (
        <table>
            <th>Наименование</th>
            <th>Репозиторий</th>
            <th>Пользователи</th>
            {items.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default ProjectList
