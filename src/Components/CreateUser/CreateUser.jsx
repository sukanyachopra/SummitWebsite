import React from 'react';
import './createuser.css'
const CreateUser = ({onChangeForm, createUser}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    };
    return (
        <div className="media__form-container">
            <div className="media__form-container-registration">
                <h2>Register Here</h2>
                <br/><br/>
                <form>
                    <label>First Name: <input type="text" onChange={(e) => onChangeForm(e)} name="first_name" required id="first_name"/></label>
                    <br/><br/>
                    <label>Last Name: <input type="text" onChange={(e) => onChangeForm(e)} name="last_name" id="last_name" required/></label>
                    <br/><br/>
                    <label>E-mail: <input type="email" onChange={(e) => onChangeForm(e)} name="email" id="email" required/></label>
                    <br/><br/>
                    <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
                </form>
                <br/>
            </div>
        </div>
    );
}

export default CreateUser;