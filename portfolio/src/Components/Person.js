import React from 'react';

const Person = props => {
  return(
    <div>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p>My Hobbies: {props.children}</p>
    </div>
  );
}

export default Person;