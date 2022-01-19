import React from 'react'
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    render () {
        return (
            <div>
                {this.props.is_authenticated() ?
                    <div>
                        Пользователь: {this.props.userFirstName + ' ' + this.props.userLastName}  <br />
                        <button onClick={()=>this.props.logout()}>Logout</button>
                    </div> :
                        <Link to='/login'>
                            <button>Login</button>
                        </Link>
                }
                <nav>
                    <ul>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/todos'>ToDo</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
        }
    }

export default Menu
