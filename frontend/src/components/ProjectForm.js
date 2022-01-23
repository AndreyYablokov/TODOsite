import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          name: '',
          repository: '',
          users: [],
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

    handleUsersChange(event)
    {
        if (!event.target.selectedOptions) {
            return;
        }

        let users = []
        for (let idx=0; idx<event.target.selectedOptions.length; idx++) {
            users.push(parseInt(event.target.selectedOptions.item(idx).value))
        }

        this.setState(
                {
                    'users': users
                }
            );
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.repository, this.state.users)
        event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-group">
                <label for="name">Наименование</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event)} />
            </div>

            <div className="form-group">
                <label for="repository">Репозиторий</label>
                <input type="text" className="form-control" name="repository" value={this.state.repository} onChange={(event)=>this.handleChange(event)} />
            </div>

            <div className="form-group">
                <label for="users">Пользователи</label>
                <select multiple name="users" onChange={(event)=>this.handleUsersChange(event)}>
                    {this.props.users.map((user) => <option value={user.id}>{user.firstName} {user.lastName}</option>)}
                </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Сохранить" />
        </form>
      );
    }
  }

export default ProjectForm