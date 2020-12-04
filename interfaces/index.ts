// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface ITodo {
  id: number,
  title: string,
  completed: boolean
}

export interface ITodoState {
  todos: ITodo[],
  search: string,
  loaded: boolean,
  error: boolean,
  errorMsg: string
}
