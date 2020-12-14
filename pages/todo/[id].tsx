import React from 'react'
import Layout from "../../components/layout/Layout"
import {GetServerSideProps} from "next"
import {wrapper} from "../../store"
import {getTodoById} from "../api/todos"
import {fetchTodoError, fetchTodoSuccess, todoSelector} from '../../slices/todo'
import {useSelector} from "react-redux"
import Container from "../../components/container/Container"

interface props {

}

const Todo: React.FC<props> = () => {
	const {todo,error, errorMsg} = useSelector(todoSelector)

	if(error) {
		return <p>{errorMsg}</p>
	}

	return (
		<Layout title={todo.title}>
			<Container>
					<pre>UserID:{todo.userId}</pre>
					<h1>{todo.title}</h1>
					<p>{todo.body}</p>
			</Container>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async({store, params}) => {
	try {
		const id = params?.id
		const data = await getTodoById(id as string)
		const todo = await data.json()
		store.dispatch(fetchTodoSuccess(todo))
	} catch (e) {
		store.dispatch(fetchTodoError('Ошибка! Что-то пошло не так'))
	}
})

export default Todo
