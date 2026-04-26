import { useState, useEffect } from 'react';
import './App.css';
import { CardVariant } from './components/Card';
import Card from './components/Card';
import List from './components/List';
import { User, Todo, Post } from './types/types';
import EventsExample from './components/EventsExample';
import UserItem from './components/UserItem';
import PostItem from './components/PostItem';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Post[]>([])
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
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=25")
    .then(response => response.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div className="App">
      <EventsExample />
      <Card onClick={() => console.log('Click')} width="340px" height="256px" variant={CardVariant.primary}>
      <button>Кнопка</button>
      </Card>
      <List items={users} renderItem={(user: User) => <UserItem user={user} key={user.id}/>}/>
      <List items={todos} renderItem={(todo: Todo) => <TodoItem todo={todo} key={todo.id}/>}/>
      <List items={posts} renderItem={(post: Post) => <PostItem post={post} key={post.id}/>}/>
    </div>
  );
}

export default App;
