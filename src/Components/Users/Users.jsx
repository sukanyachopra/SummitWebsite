import React, {useState} from 'react';
import './users.css'
const Users = ({users,fetchAllUsers}) => {
    const [flag,setFlag] = useState(false);

    console.log('users length:', users.length)
    if(users.length === 0) return null
    const UserRow = (user,index) => {
        return(
            <tr key = {index} className={index%2 === 0?'odd':'even'}>
                <td>{index + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }
    const userTable = users.map((user,index) => UserRow(user,index))
    const handleGetAllUsers = () =>{
        setFlag(true);
        fetchAllUsers();
    };
    return (
        <div className="users__container">
            <button onClick={handleGetAllUsers} className="btn">Get all Users</button>
            {flag && <div>
            <h2>Registrations</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {userTable}
                </tbody>
            </table>
            </div>}
        </div>
    );
}

export default Users;