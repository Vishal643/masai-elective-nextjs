import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TaskContext } from '../../../context/Tasks';
import Navbar from '../../../components/Tasks/Navbar';

const Delete = () => {
	const [currTodo, setCurrTodo] = useState([]);
	const [id, setId] = useState('');
	const { setIsButtonShow, deleteTask, todo, showTask } =
		useContext(TaskContext);

	const router = useRouter();
	const getTodo = () => {
		let currTodo = todo.filter((task) => task.id === router.query.id);
		setId(router.query.id);
		setCurrTodo(currTodo);
	};

	useEffect(() => {
		getTodo();
	}, []);

	const handleDeleteTodo = () => {
		deleteTask({ id });
		setIsButtonShow(false);
		router.push('/tasks');
	};

	return (
		<>
			<Navbar />
			<div>
				{showTask(currTodo)}
				<button
					style={{ marginLeft: '650px', height: '30px', width: '150px' }}
					onClick={handleDeleteTodo}>
					Delete Todo
				</button>
			</div>
		</>
	);
};

export default Delete;
