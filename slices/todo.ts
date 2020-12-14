import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ITodo, ITodoState} from "../interfaces"
import {HYDRATE} from "next-redux-wrapper"


// Initial State
const initialState: ITodoState = {
	todos: [],
	todo: {
		id:1,
		title: '',
		body: '',
		userId: 1
	},
	search: '',
	loaded: false,
	error: false,
	errorMsg: ''
}

// Selector
export const todoSelector = (state: { todo: ITodoState }) => state.todo

// Slice
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
		fetchTodoSuccess: (state, action) =>{
			state.todo = action.payload
			state.loaded = true
			state.error = false
		},
		fetchTodoError: (state, action) =>{
			state.error = true
			state.loaded = true
			state.errorMsg = action.payload
		},
		searchFilter: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(HYDRATE, (state, action: any) => {
			return state = {...state, ...action.payload.todo}
		})
	}
})

//Actions
export const {fetchTodosSuccess, fetchTodosError, fetchTodoError, fetchTodoSuccess, searchFilter} = todoSlice.actions

// Async Thunk
// export const getTodos = (): ThunkAction<void, ITodoState, unknown, Action<string>> => {
// 	return async dispatch => {
// 		try {
// 			const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
// 			const data = await todos.json()
// 			dispatch(fetchTodosSuccess(data))
// 		} catch (e) {
// 			console.error(e)
// 			dispatch(fetchTodosError('Ошибка! Что-то пошло не так! Мы скоро все исправим'))
// 		}
// 	}
// }

// Export reducer
export default todoSlice.reducer
