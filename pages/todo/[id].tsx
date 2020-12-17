import React from 'react'
import Layout from "../../components/layout/Layout"
import {GetServerSideProps} from "next"
import {wrapper} from "../../store"
import {getTodoById} from "../api/todos"
import {fetchTodoError, fetchTodoSuccess, todoSelector} from '../../slices/todo'
import {useSelector} from "react-redux"
import Container from "../../components/container/Container"
import {ITodo} from "../../interfaces"

interface props {

}

const Todo: React.FC<props> = () => {
	const {todo, error, errorMsg} = useSelector(todoSelector)

	if (error) {
		return <p>{errorMsg}</p>
	}

	return (
		<Layout title={todo.title}>
			<Container>
				<h1>{todo.title}</h1>
				<pre>UserID:{todo.userId}</pre>
				<p>{todo.body}</p>
			</Container>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({store ,params}) => {
	try {
		const id = params?.id
		const data = await getTodoById(id as string)
		const todo: ITodo = await data.json()

		if(!todo.id) {
			return {
				redirect: {
					destination: '/404',
					permanent: false
				}
			}
		}

		store.dispatch(fetchTodoSuccess(todo))
	} catch (e) {
		store.dispatch(fetchTodoError('Ошибка! Что-то пошло не так'))
	}
})

export default Todo
