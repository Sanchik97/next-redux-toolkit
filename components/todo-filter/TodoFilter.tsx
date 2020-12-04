import React from 'react'
import {searchFilter, todoSelector} from "../../slices/todo"
import {useDispatch, useSelector} from "react-redux"
import {Form, Input} from "antd"

interface props {

}

const TodoFilter: React.FC<props> = () => {
	const {search} = useSelector(todoSelector)

	const dispatch = useDispatch()

	return (

		<Form.Item label={'Filter todos'}>
			<Input
				placeholder={"Filter todos"}
				type="text"
				value={search}
				onChange={(e) => dispatch(searchFilter(e.target.value))}/>
		</Form.Item>
	)
}

export default TodoFilter
