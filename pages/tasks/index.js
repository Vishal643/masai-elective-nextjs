import React, { useContext } from 'react';
import Navbar from '../../components/Tasks/Navbar';
import { TaskContext } from '../../context/Tasks';

const Todo = () => {
	const { showTask, todo } = useContext(TaskContext);

	return (
		<>
			<Navbar />
			<h1 style={{ textAlign: 'center' }}>Todos</h1>
			{showTask(todo)}
		</>
	);
};

export default Todo;
