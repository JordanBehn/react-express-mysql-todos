import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header message="Todo List"/>
      <TodoForm />
      <TodoList/>
    </div>
  );
}

export default App;
