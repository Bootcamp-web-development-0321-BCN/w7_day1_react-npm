import React from 'react';
import List from './List';

const App = () => {
  return (
    <div className="page-div">
      <h1>Hello React</h1>
      <p>WTF WHAT IS REACT 🤯</p>
      <List />
      <List />
      <List />
      <List>
        <p>Hola</p>
      </List>
    </div>
  )
}

// export { App, Component2, Component 3 }
export default App;