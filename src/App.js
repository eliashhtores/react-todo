import './App.css'
import { Route } from 'react-router-dom'
import Todos from './Components/Todos'
import Todo from './Components/Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo List
      </header>
      <Route path='/' exact component={Todos} />
      <Route path='/todo/:id' exact component={Todo} />
    </div>
  );
}

export default App