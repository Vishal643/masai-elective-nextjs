import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import { TaskContext } from '../../../context/Tasks';
import Navbar from '../../../components/Tasks/Navbar';

const CreateTodo = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [active, setActive] = useState(false);
	const { isLoading, setIsLoading, createTask, showTask } =
		useContext(TaskContext);

	const router = useRouter();
	const handleTodoCreate = () => {
		setIsLoading(false);
		const payload = {
			title,
			description,
			active,
			id: uuid(),
		};
		createTask(payload);
		router.push('/tasks');
	};

	return (
		<div>
			{isLoading ? (
				showTask()
			) : (
				<>
					<Navbar />
					<div className='parent'>
						<input
							className='inputBox1'
							type='text'
							value={title}
							name='title'
							placeholder='Enter todo name...'
							onChange={(e) => setTitle(e.target.value)}
						/>
						<br />
						<input
							className='inputBox2'
							type='text'
							value={description}
							name='description'
							placeholder='Enter todo description...'
							onChange={(e) => setDescription(e.target.value)}
						/>
						<br />

						<div className='input'>
							<span>Status</span>
							<input
								className='inputBox3'
								type='checkbox'
								checked={active}
								name='active'
								onChange={(e) => setActive(e.target.checked)}
							/>
						</div>
						<br />
						<button className='button' onClick={handleTodoCreate}>
							Create Todo
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default CreateTodo;
