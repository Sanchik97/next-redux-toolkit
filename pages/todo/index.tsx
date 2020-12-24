import React from 'react'
import TodoList from "../../components/todo-list/TodoList"
import {useSelector} from "react-redux"
import {fetchTodosError, fetchTodosSuccess, todoSelector} from "../../slices/todo"
import TodoFilter from "../../components/todo-filter/TodoFilter"
import Layout from "../../components/layout/Layout"
import {Skeleton} from "antd"
import Container from "../../components/container/Container"
import {fetchTodos} from "../api/todos"
import {wrapper} from "../../store"
import {GetServerSideProps} from "next"
import {ITodo} from "../../interfaces"
import useTranslation from "next-translate/useTranslation"

interface props {
}

const Index = ({}: props) => {
	const {loaded, todos} = useSelector(todoSelector)
	const {t} = useTranslation()

	return (
		<Layout title={'Todo Page'}>
			<Container>
				<h1>{t('todo:title')}</h1>
				<TodoFilter/>
				<Skeleton active loading={!loaded}>
					<TodoList todos={todos}/>
				</Skeleton>
			</Container>
		</Layout>
	)
}


// SSR FETCHING DATA
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({store, query}) => {
	try {
		const data = await fetchTodos(query)
		const todos: ITodo[] = await data.json()
		store.dispatch(fetchTodosSuccess(todos))
	} catch (e) {
		store.dispatch(fetchTodosError('Ошибка! Что-то пошло не так, мы скоро все исправим'))
	}
})

export default Index
