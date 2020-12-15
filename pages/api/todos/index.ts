export const fetchTodos = async() => {
	return await fetch('https://jsonplaceholder.typicode.com/posts')
}

export const getTodoById = async (id: string) => {
	return await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
}
