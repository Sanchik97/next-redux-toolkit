import {ParsedUrlQuery} from "querystring"

export const fetchTodos = async(params: ParsedUrlQuery) => {
	const qs = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

	return await fetch(`https://jsonplaceholder.typicode.com/posts?${qs}`)
}

export const getTodoById = async (id: string) => {
	return await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
}
