import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo'
import About from './components/pages/about'

function App() {

  const [todos, setTodo] = React.useState(
    [{
      id: 1,
      title: 'Learn React basics',
      completed: false
    },
    {
      id: 2,
      title: 'Make my first React app',
      completed: false
    },
    {
      id: 3,
      title: 'Push to GitHub',
      completed: false
    }
  ]);

  // Toggle completed item
  const markComplete = (id) => {
    setTodo(todos.map(td => {
      if (td.id === id) {
        td.completed = !td.completed
      }
      return td;
    }))
  }

  // Remove item from Todo list
  const delTodo = (id) => {
    setTodo(todos.filter(td => td.id !== id))
  }

  // Add item to Todo list
  const addTodo = (title) => {
    setTodo(
      [...todos, {
        id: todos.length > 0 ? todos[todos.length -1].id + 1 : 1,
        title: title,
        completed: false
      }]
    )
  }
  
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <AddTodo addTodo={ addTodo }/>
              <Todos todos={ todos } setTodo={ markComplete } delTodo={ delTodo }/>
            </React.Fragment>
          )} />
          <Route path="/about" component={ About }/>
        </div>
      </div>
    </Router>
  );
}

export default App;
