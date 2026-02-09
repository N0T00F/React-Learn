// import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

function App() {
  // const listContent = list.map(item =>(
  //   <Fragment key={item.id}>
  //     <li>{item.name}</li>
  //     <li>-----------</li>
  //   </Fragment>
  // ))
  //const [content, setContent] = useState('Default Content inside the tag')
  const [data, setData] = useState([
      { id: 1, name: 'Wong' },
      { id: 2, name: 'Wang' },
      { id: 3, name: 'Zhang' },
      { id: 4, name: 'Li' },
      { id: 5, name: 'Liu' }
    ])
    const listData = data.map(item => (
      <li key={item.id}>{item.name}</li>
    ))
    let id = 3
  function handleClick() {
    setData([
      ...data,
      { id: id++, name: 'Zhao' }
    ])
  }
  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>Button</button>
    </>
  )
}

export default App;