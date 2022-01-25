import React from 'react'


class ToDoForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          task: '',
          description: '',
          project: props.projects[0].id,
          user: props.users[0].id,
          isActive: true,
      }
    }

    handleChange(event)
    {
        this.setState(
                {
                    [event.target.name]: event.target.value
                }
            );
    }

    handleIsActiveChange(event)
    {
        this.setState(
                {
                    'isActive': event.target.checked
                }
            );
    }

    handleSubmit(event) {
        this.props.createToDo(this.state.task, this.state.description, this.state.project, this.state.user, this.isActive)
        event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-group">
                <label for="name">Задача</label>
                <input type="text" className="form-control" name="task" value={this.state.task}
                    onChange={(event)=>this.handleChange(event)} />
            </div>

            <div className="form-group">
                <label for="description">Описание</label>
                <input type="text" className="form-control" name="description" value={this.state.description}
                    onChange={(event)=>this.handleChange(event)} />
            </div>

            <div className="form-group">
                <label for="project">Проект</label>
                <select name="project" onChange={(event)=>this.handleChange(event)}>
                    {this.props.projects.map((project) => <option value={project.id}>{project.name}</option>)}
                </select>
            </div>

            <div className="form-group">
                <label for="user">Проект</label>
                <select name="user" onChange={(event)=>this.handleChange(event)}>
                    {this.props.users.map((user) => <option value={user.id}>{user.firstName} {user.lastName}</option>)}
                </select>
            </div>

            <div className="form-group">
                <label for="isActive">Активная задача</label>
                <input type="checkbox" className="form-control" name="isActive" onChange={(event)=>this.handleIsActiveChange(event)} />
            </div>
            <input type="submit" className="btn btn-primary" value="Сохранить" />
        </form>
      );
    }
  }

export default ToDoForm