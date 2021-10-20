import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TaskContext } from '../../../context/Tasks';

const Update = () => {
	const [title, setTitle] = useState('');
	const [id, setId] = useState('');
	const [description, setDescription] = useState('');
	const [active, setActive] = useState(false);
	const { setIsLoading, updateTask, todo, setIsButtonShow } =
		useContext(TaskContext);

	const router = useRouter();
	const getTodo = () => {
		let currTodo = todo.filter((task) => task.id === router.query.id);
		setId(router.query.id);
		setTitle(currTodo[0].title);
		setDescription(currTodo[0].description);
		setActive(currTodo[0].active);
	};
	useEffect(() => {
		getTodo();
	}, []);

	const handleTodoUpdate = () => {
		setIsLoading(false);
		const payload = {
			title,
			description,
			active,
			id,
		};
		updateTask(payload);
		router.push('/tasks');
	};

	return (
		<div>
			<>
				<input
					type='text'
					value={title}
					name='title'
					placeholder='Enter todo name...'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type='text'
					value={description}
					name='description'
					placeholder='Enter todo description...'
					onChange={(e) => setDescription(e.target.value)}
				/>
				<input
					type='checkbox'
					checked={active}
					name='active'
					onChange={(e) => setActive(e.target.checked)}
				/>
				<button onClick={handleTodoUpdate}>Update Todo</button>
			</>
		</div>
	);
};

export default Update;
