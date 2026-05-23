import { TASK_CREATE, TASK_DELETE, TASK_LOAD } from "./types";

const initialState = {
  tasks: [],
};
export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_CREATE:
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };
    case TASK_DELETE:
      return (() => {
        const { id } = action;
        const { tasks } = state;
        const itemIndex = tasks.findIndex((res) => res.id === id);
        const nextTasks = [
          ...tasks.slice(0, itemIndex),
          ...tasks.slice(itemIndex + 1),
        ];
        return {
          ...state,
          tasks: nextTasks,
        };
      })();
    case TASK_LOAD:
      const tasksNew = action.data.map((res) => {
        return {
          title: res.title,
          id: res.id,
        };
      });
      return {
        ...state,
       tasks: tasksNew,
      };
    default:
      return state;
  }
}
