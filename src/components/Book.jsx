/* eslint-disable no-var */
import React from 'react'

const ListOfTenThings = () => {

  const a = true
  return (
    <div>
      {a && <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list. a is {String(a)}</div>}
      </Repeat>
      }
    </div>
  )
};
// Calls the children callback numTimes to produce a repeated component
const Repeat = ({numTimes, children}) => {
  let items = [];
  for (let i = 0; i < numTimes; i++) {
    items.push(children(i));
  }
  return <div>{items}</div>;
}

export default ListOfTenThings
