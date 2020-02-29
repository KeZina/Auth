import React, { useEffect } from 'react';
import Title from './Title';
import Form from './Form';
import firebase from '../firebase';

const App = () => {
  const db = firebase.firestore();

  // useEffect(() => {
  //   db.collection('first').add({hello: 'world'})
  // })

  return (
    <div id = 'general-container'>
      <Title />
      <Form />
    </div>
  )
}

export default App;
