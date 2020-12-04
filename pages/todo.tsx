import React, {useEffect} from 'react'
import TodoList from "../components/todo-list/TodoList"
import {useDispatch, useSelector} from "react-redux"
import {getTodos, todoSelector} from "../slices/todo"
import TodoFilter from "../components/todo-filter/TodoFilter"
import Layout from "../components/layout/Layout"
import {Skeleton} from "antd"
import Container from "../components/container/Container"

interface props {
}

const Todo: React.FC<props> = ({}) => {

	const dispatch = useDispatch()

	const {todos, loaded} = useSelector(todoSelector)

	useEffect(() => {
		dispatch(getTodos())

	}, [dispatch])

	return (
		<Layout title={'Todo Page'}>
				<Container>
					<h1 style={{marginTop: 35}}>Hello Todos</h1>

					<TodoFilter/>
					<Skeleton loading={!loaded} active>
						<TodoList todos={todos}/>
					</Skeleton>
				</Container>
		</Layout>
	)
}


// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// 	const todos: ITodo[] = await fetchTodos()
//
// 	return {
// 		props: {
// 			todos
// 		}
// 	}
// }

export default Todo
