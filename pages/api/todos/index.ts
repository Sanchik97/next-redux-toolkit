export const fetchTodos = async() => {
	return await fetch('https://jsonplaceholder.typicode.com/posts')
}

export const getTodoById = async (id: string) => {
	return await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
}


//
//
// export const addNewTodo = async (title: string) => {
// 	return await fetch('https://jsonplaceholder.typicode.com/posts', {
// 		method: "POST",
// 		body: JSON.stringify({
// 			title,
// 			completed: false
// 		}),
// 		headers: {
// 			'Content-Type': 'application/json; charset=UTF-8'}
// 	})
// }
