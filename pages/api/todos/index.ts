export const fetchTodos = async() => {
	return await fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.catch(e => console.error(e))
}


export const addNewTodo = async (title: string) => {
	return await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: "POST",
		body: JSON.stringify({
			title,
			completed: false
		}),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'}
	}).then(response => response.json()).catch(e => console.error(e))
}
