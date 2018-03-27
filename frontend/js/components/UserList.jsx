import React, { Component } from 'react';
import axios from 'axios';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        }
    }

    render() {

        const{isLoading, users} = this.state;

        const loadUsers = () => {
            this.setState({...this.state, isLoading: true});
            axios.get('/api/users')
            .then(response => {
                console.log(response);
                this.setState({...this.state, users: response.data.users, isLoading: false});
            })
            .catch(error => {
                this.setState({...this.state, isLoading: false});
                console.error("Error loading users: ", error);
            });
        }

        const content = isLoading
        ? <div className="loader" style={{ marginLeft: '10px', marginTop: '10px' }}/>
        : (
            <div>
                <ul>
                    { users.map(u => <li key={u.id}>{u.name}</li>) }
                </ul>
            </div>
        );

        return(
            <div>
                <h2>User List</h2>
                <button onClick={loadUsers} disabled={isLoading}>Click me to load users from API</button>
                { content }
            </div>
        );

    }

}