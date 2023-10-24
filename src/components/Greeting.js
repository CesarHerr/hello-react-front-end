import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingSlice';

function Greeting() {
  const { greetings } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchGreetings());
  };

  const styles = {
    backgroundColor: 'lightblue',
    fontSize: '8rem',
    color: 'darkblue',
    padding: '10px',
    borderRadius: '5px',
  };

  const styles2 = {
    backgroundColor: 'blue',
    padding: '4rem',
    border: 'none',
    color: 'white',
    fontSize: '4rem',
    borderRadius: '0.8rem',
    cursor: 'pointer',
  };

  return (
    <div style={styles}>
      <p>
        {' '}
        { greetings.greetings }
      </p>
      <button type="button" onClick={handleClick} style={styles2}>Random Greeting</button>
    </div>

  );
}

export default Greeting;
