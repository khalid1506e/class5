import React from 'react';
import Child1 from './Child1'
import Child2 from './Child2';

function parent() {
  return (
    <div >
      Parent
      <Child1></Child1>
      <Child2></Child2>
    </div>
  );
}

export default parent;