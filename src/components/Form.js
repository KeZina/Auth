import React from 'react';
import firebase from '../firebase';

const Form = () => {
    const db = firebase.firestore()

    const genPassword = () => Math.floor(Math.random() * 1e15).toString();

    const handleRegister = async e => {
        e.preventDefault();
        const {firstName, secondName, username, email, phone} = e.target;

        try {
            await firebase.auth().createUserWithEmailAndPassword(email.value, genPassword());

            await db.collection('users').add({
                firstName: firstName.value,
                secondName: secondName.value,
                username: username.value,
                email: email.value,
                phone: phone.value
            })
        } catch(e) {
            alert(e);
        }
    }

    return (
        <form id = 'form' onSubmit = {handleRegister}>
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