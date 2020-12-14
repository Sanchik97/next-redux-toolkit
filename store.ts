import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './slices/todo'
import {createWrapper} from "next-redux-wrapper"


const initStore = () => {
	return configureStore({
		reducer: {
			todo: todoReducer
		},
		devTools: true,
	})
}

export const wrapper = createWrapper(initStore)
