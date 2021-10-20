import { useRouter } from 'next/router';
import styled from 'styled-components';
import React, { createContext, useState, Fragment } from 'react';

const Todo = styled.div`
	border: 1px solid black;
	width: fit-content;
	height: fit-content;
	margin: 20px auto;
	padding: 20px;
	text-align: center;
	border-radius: 5px;
`;
export const TaskContext = createContext();
const state = {
	id: '1',
	title: 'ABC',
	active: false,
	description: 'Description',
};
const TasksContextProvider = ({ children }) => {
	const router = useRouter();
	const [todo, setTodo] = useState([state]);
	const [isLoading, setIsLoading] = useState(true);
	const [isButtonShow, setIsButtonShow] = useState(true);

	const showTask = (todos) => {
		setIsLoading(false);
		return todos?.length ? (
			todos?.map((task) => (
				<Todo clasName='todoCard' key={task.id}>
					<h2>{task.title}</h2>
					<h3
						style={{
							textDecoration: task.active ? 'none' : 'line-through',
							color: task.active ? 'green' : 'red',
						}}>
						{task.active ? 'Active' : 'Completed'}
					</h3>
					<p>{task.description}</p>
					{isButtonShow && (
						<>
							<button onClick={() => router.push(`/tasks/${task.id}/update`)}>
								Update Todo
							</button>
							<button
								onClick={() => {
									router.push(`/tasks/${task.id}/delete`);
									setIsButtonShow(false);
								}}>
								Delete Todo
							</button>
						</>
					)}
				</Todo>
			))
		) : (
			<>
				<p
					style={{
						textAlign: 'center',
						fontWeight: '600',
						fontSize: '20px',
						color: 'indianred',
					}}>
					Oops.. no todo found!!! <br />
					Looks like you have nothing to do.
				</p>
				<button
					onClick={() => router.push('/tasks/id/create')}
					style={{
						marginLeft: '650px',
						height: '30px',
						width: '150px',
						backgroundColor: 'hotpink',
						borderRadius: '5px',
						cursor: 'pointer',
					}}>
					CREATE TODO
				</button>
			</>
		);
	};
	const createTask = ({ id, title, active, description }) => {
		setIsLoading(false);
		setIsButtonShow(true);
		let payload = {
			id,
			title,
			active,
			description,
		};
		setTodo((prev) => [...prev, payload]);
	};

	const updateTask = ({ id, title, active, description }) => {
		setIsButtonShow(true);
		setIsLoading(true);
		const newTodo = todo.map((item) =>
			item.id === id ? { ...item, active, title, description } : item,
		);
		setTodo(newTodo);
		setIsLoading(false);
	};
	const deleteTask = ({ id }) => {
		setIsLoading(true);
		const newTodo = todo.filter((item) => item.id !== id);
		setTodo(newTodo);
		setIsLoading(false);
		setIsButtonShow(true);
	};
	const value = {
		showTask,
		createTask,
		updateTask,
		deleteTask,
		isLoading,
		todo,
		setIsLoading,
		isButtonShow,
		setIsButtonShow,
	};
	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TasksContextProvider;
