import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../utils/store';

const Form = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const {firstName, secondName, username, email, phone} = e.target;
    
        dispatch(createUser({
            firstName: firstName.value,
            secondName: secondName.value,
            username: username.value,
            email: email.value,
            phone: phone.value
        }));
    }

    return (
        <form id = 'form' onSubmit = {handleSubmit}>
            <div id = 'names'>
                <label>
                    First Name
                    <input type = 'text' name = 'firstName' placeholder = 'Name' required />
                </label>
                <label>
                    Second Name
                    <input type = 'text' name = 'secondName' placeholder = 'Name' required />
                </label>
            </div>
            <label>
                Username
                <input type = 'text' name = 'username' required />
            </label>
            <label>
                Email
                <input type = 'email' name = 'email' required />
            </label>
            <label>
                Phone Number
                <input type = 'phone' name = 'phone' required />
            </label>
            <input type = 'submit' value = 'Register' />
        </form>
    )
}

export default Form;