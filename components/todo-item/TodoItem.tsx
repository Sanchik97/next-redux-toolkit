import Link from 'next/link'
import React from 'react'
import {ITodo} from "../../interfaces"

interface props {
	todo: ITodo
}

const TodoItem: React.FC<props> = ({todo: {title,id, body}}) => {
	return (
		<li>
			<b>Title</b>: {title}
			<br/>
			<Link href={'/todo/[id]'} as={`/todo/${id}`}>
				<a>Details</a>
			</Link>
		</li>
	)
}

export default TodoItem
