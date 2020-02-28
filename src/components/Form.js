import React from 'react';

const Form = () => {
    return (
        <form id = 'form'>
            <div id = 'names'>
                <label>
                    First Name
                    <input type = 'text' placeholder = 'Name' />
                </label>
                <label>
                    Second Name
                    <input type = 'text' placeholder = 'Name' />
                </label>
            </div>
            <label>
                Username
                <input type = 'text' />
            </label>
            <label>
                Email
                <input type = 'email' />
            </label>
            <label>
                Phone Number
                <input type = 'phone' />
            </label>
            <input type = 'submit' value = 'Register' />
        </form>
    )
}

export default Form;