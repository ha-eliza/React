import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENT_LOAD, TASK_CREATE, TASK_DELETE, TASK_LOAD } from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT
  }
}
export function decrementLikes() {
  return {
    type: DECREMENT
  }
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}
export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: {text, id}
  }
}
export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: {text, id}
  }
}
export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id // id: id
  }
}
export function commentsLoad() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const jsonData = await response.json();
    dispatch({
      type: COMMENT_LOAD,
      data: jsonData
    })
  }
}
export function taskCreate(title, id) {
  return {
    type: TASK_CREATE,
    data: {title, id}
  }
}
export function tasksLoad() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const jsonData = await response.json();
    dispatch({
      type: TASK_LOAD,
      data: jsonData
    })
  }
}
export function taskDelete(id) {
  return {
    type: TASK_DELETE,
    id // id: id
  }
}
