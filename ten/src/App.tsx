import { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import UserItem from './components/UserItem';
import List from './components/List';
import { Todo, User } from './types/types'
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=25")
    .then(response => response.json())
    .then(data => setTodos(data))
  }, [])
  return (
    <div className="App">
      <Card onClick={() => console.log('Click')} width="340px" height="256px" variant={CardVariant.primary}>
        <button>Кнопка</button>
      </Card>
      <List items={users} renderItem={(user: User) => <UserItem user={user} key={user.id}/>}/>
      <List items={todos} renderItem={(todo: Todo) => <TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  );
}

export default App;
