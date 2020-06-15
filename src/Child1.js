import React, { useContext } from 'react';
import valuecontext from './valuecontext';

function Child1() {
  let value = useContext(valuecontext);
  console.log("value ",value);
  let updateValue = value[1];
  return (
    <div >
      Child number {value[0]}
      <button onClick={()=> { updateValue(++value[0]) }}>Update value</button>
    </div>
  );
}

export default Child1;