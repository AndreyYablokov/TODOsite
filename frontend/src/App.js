import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import UserList from './components/UserList.js';
import ProjectList from './components/ProjectList.js';
import ToDosList from './components/ToDosList.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/users')
           .then(response => {
               const users = response.data.results
               this.setState(
               {
                   'users': users
               }
               )
           }).catch(error => console.log(error))

       axios.get('http://127.0.0.1:8000/api/projects')
           .then(response => {
               const projects = response.data.results
               this.setState(
               {
                   'projects': projects
               }
               )
           }).catch(error => console.log(error))

       axios.get('http://127.0.0.1:8000/api/todos')
           .then(response => {
               const todos = response.data.results
               this.setState(
               {
                   'todos': todos
               }
               )
           }).catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <Menu />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<UserList users={this.state.users} />}  />
                        <Route path='/projects' element={<ProjectList projects={this.state.projects} />}  />
                        <Route path='/todos' element={<ToDosList todos={this.state.todos} />}  />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }

}

export default App;
