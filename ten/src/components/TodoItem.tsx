import { Todo } from "../types/types"

function TodoItem({todo}: {todo: Todo}) {
  return <div>
    <input type="checkbox" checked={todo.completed} />
    {todo.id}. {todo.title}
  </div>
}
export default TodoItem
