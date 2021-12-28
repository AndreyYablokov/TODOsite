import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import UserList from './components/UserList.js';
import ProjectList from './components/ProjectList.js';
import ToDosList from './components/ToDosList.js';
import ProjectToDosList from './components/ProjectToDosList.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import NoMatch from './components/NoMatch.js';
import LoginForm from './components/LoginForm.js';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token': '',
            'userFirstName': '',
            'userLastName': ''
        }
    }

    get_token(username, password) {
        axios.all([
            axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password}),
            axios.get(`http://127.0.0.1:8000/api/users/?username=${username}`)
        ])
            .then(axios.spread((response_token, response_user) => {
                this.set_person_data(response_token.data['token'],
                    response_user.data.results[0].firstName,
                    response_user.data.results[0].lastName)
            })).catch(error => console.log(error))
    }

    get_token_from_storage() {
        const token = localStorage.getItem('token');
        const userFirstName = localStorage.getItem('userFirstName');
        const userLastName = localStorage.getItem('userLastName');
        this.setState({'token': token,
            'userFirstName': userFirstName,
            'userLastName': userLastName}, ()=>this.load_data());
    }

    set_person_data(token, userFirstName, userLastName) {
        localStorage.setItem('token', token);
        localStorage.setItem('userFirstName', userFirstName);
        localStorage.setItem('userLastName', userLastName);
        this.setState({'token': token,
            'userFirstName': userFirstName,
            'userLastName': userLastName}, ()=>this.load_data());
    }

    is_authenticated() {
        return !!this.state.token
    }

    logout() {
        this.set_person_data('')
    }

    get_headers() {
        let headers = {
          'Content-Type': 'application/json'
        }
        if (this.is_authenticated())
        {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    load_data() {
        const headers = this.get_headers();
        axios.get('http://127.0.0.1:8000/api/users', {headers})
           .then(response => {
               const users = response.data.results
               this.setState(
               {
                   'users': users
               }
               )
           }).catch(error => {
                console.log(error);
                this.setState({users: []});
           })

       axios.get('http://127.0.0.1:8000/api/projects', {headers})
           .then(response => {
               const projects = response.data.results
               this.setState(
               {
                   'projects': projects
               }
               )
           }).catch(error => {
                console.log(error);
                this.setState({projects: []});
           })


       axios.get('http://127.0.0.1:8000/api/todos', {headers})
           .then(response => {
               const todos = response.data.results
               this.setState(
               {
                   'todos': todos
               }
               )
           }).catch(error => {
                console.log(error);
                this.setState({todos: []});
           })
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                    <Menu
                        is_authenticated={() => this.is_authenticated()}
                        logout={() => this.logout()}
                        userFirstName = {this.state.userFirstName}
                        userLastName = {this.state.userLastName}
                    />
                    <Routes>
                        <Route path='/' />
                        <Route path='/users' element={<UserList users={this.state.users} />}  />
                        <Route path='/projects' element={<ProjectList projects={this.state.projects} />}  />
                        <Route path='/todos' element={<ToDosList todos={this.state.todos} />}  />
                        <Route path="/projects/id/:id" element={<ProjectToDosList
                            todos={this.state.todos} projects = {this.state.projects} />} />
                        <Route path='/login' element={<LoginForm
                            get_token={(username, password) => this.get_token(username, password)} />}  />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }

}

export default App;
