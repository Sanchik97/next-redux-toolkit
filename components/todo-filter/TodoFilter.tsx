import React from 'react'
import {searchFilter, todoSelector} from "../../slices/todo"
import {useDispatch, useSelector} from "react-redux"
import {Form, Input} from "antd"
import useTranslation from "next-translate/useTranslation"

interface props {

}

const TodoFilter: React.FC<props> = () => {
	const {search} = useSelector(todoSelector)

	const dispatch = useDispatch()
	const {t} = useTranslation()
	return (

		<Form.Item label={t('todo:filter')}>
			<Input
				placeholder={t('todo:filter')}
				type="text"
				value={search}
				onChange={(e) => dispatch(searchFilter(e.target.value))}/>
		</Form.Item>
	)
}

export default TodoFilter
