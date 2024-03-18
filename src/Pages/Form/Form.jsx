import React, { useState, useEffect } from 'react';
import './form.css';
import { Users , CreateUser} from '../../Components/index'
import { getAllUsers, createUser } from '../../services/UserService'

function Form() {

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });
    const [users, setUsers] = useState([])
    const [numberOfUsers, setNumberOfUsers] = useState(0)


    const userCreate = () => {

        createUser(user)
            .then(response => {
                console.log(response);
                setNumberOfUsers(numberOfUsers+1)
            });
    }

    const fetchAllUsers = () => {
        getAllUsers()
            .then(users => {
                console.log(users)
                setUsers(users);
                setNumberOfUsers(users.length)
            });
    }

    useEffect(() => {
        getAllUsers()
            .then(users => {
                console.log(users)
                setUsers(users);
                setNumberOfUsers(users.length)
            });
    }, [])

    const onChangeForm = (e) => {
        setUser(prevUser => ({
            ...prevUser,
            [e.target.name]: e.target.value
        }));
    }


    return (
        <div className="App">
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CreateUser
                            user={user}
                            onChangeForm={onChangeForm}
                            createUser={userCreate}
                        >
                        </CreateUser>
                    </div>
                </div>
            </div>
            <div className="row mrgnbtm">
                <Users
                    users={users}
                    fetchAllUsers={fetchAllUsers}
                >
                </Users>
            </div>
        </div>
    );
}

export default Form;