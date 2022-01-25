import React from 'react';
import { Link } from 'react-router-dom';


const ProjectItem = ({project, deleteProject}) => {
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
            <td>
                <button onClick={()=>deleteProject(project.id)} type='button'>Удалить</button>
            </td>
        </tr>
    )
}

const ProjectList = ({projects, filteredProjects, deleteProject, searchProjects}) => {
    return (
        <div>
            <div>
                <label for="search">Поиск по проектам</label>
                <input type="text" className="form-control" name="search" placeholder="Название проекта"
                    onChange={(event)=>searchProjects(event)} />
            </div>
            <table>
                <th>Наименование</th>
                <th>Репозиторий</th>
                <th>Пользователи</th>
                <th></th>
                {filteredProjects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
            </table>
            <Link to='/projects/create'>Создать</Link>
        </div>
    )
}

export default ProjectList
