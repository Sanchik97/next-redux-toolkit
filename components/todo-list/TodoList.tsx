import React from 'react'
import {ITodo} from "../../interfaces"
import {useSelector} from "react-redux"
import {todoSelector} from "../../slices/todo"
import TodoItem from "../todo-item/TodoItem"

interface props {
	todos: ITodo[],
}

const TodoList: React.FC<props> = ({todos}) => {

	const {search, error, errorMsg} = useSelector(todoSelector)

	if (error) {
		return <p>{errorMsg}</p>
	}

	const renderTodos = todos.map((todo: ITodo) => {
		if (todo.title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
			return <TodoItem todo={todo} key={todo.id} />
		}
	})

	return (
		<ul>
			{renderTodos}
		</ul>
	)
}

export default TodoList
