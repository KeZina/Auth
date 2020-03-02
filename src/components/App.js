import React, { useRef, useEffect, useState } from 'react';
import Title from './Title';
import Form from './Form';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const App = () => {
  const [isUserAuth, setIsUserAuth] = useState(false)
  const store = useSelector(state => state);

  console.log(store)
  useEffect(() => {
    if(store.email) setIsUserAuth(true)
  }, [store])

  return (
    <>
      <div className = 'general-container'>
        <Title />
        <Form />
      </div>
      {
        isUserAuth &&
        <Rocket />
      }

    </>
  )
}

export default App;
