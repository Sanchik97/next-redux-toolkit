import {Action, createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit"
import {ITodo, ITodoState} from "../interfaces"

const initialState: ITodoState = {
	todos: [],
	search: '',
	loaded: false,
	error: false,
	errorMsg: ''
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		fetchTodosSuccess: (state, action: PayloadAction<ITodo[]>) => {
			state.loaded = true
			state.error = false
			state.todos = action.payload
		},
		fetchTodosError: (state, action: PayloadAction<string>) => {
			state.loaded = true
			state.error = true
			state.errorMsg = action.payload
		},
		searchFilter: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		}
	}
})

// export const todoSelector = createSelector((state: ITodoState) => ({
// 	todos: state.todos
// }), (state) => state)

export const {fetchTodosSuccess, fetchTodosError, searchFilter} = todoSlice.actions

export const todoSelector = (state: { todo: ITodoState }) => state.todo

export const getTodos = (): ThunkAction<void, ITodoState, unknown, Action<string>> => {
	return async dispatch => {
		try {
			const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
			const data = await todos.json()
			dispatch(fetchTodosSuccess(data))
		} catch (e) {
			console.error(e)
			dispatch(fetchTodosError('Ошибка! Что-то пошло не так! Мы скоро все исправим'))
		}
	}
}


export default todoSlice.reducer
