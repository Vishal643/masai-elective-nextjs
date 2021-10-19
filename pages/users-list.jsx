import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const UsersList = ({ data }) => {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Users</h1>

			{data.map((user) => (
				<div key={user.id} className='userList'>
					<li>
						<Link href={`/${user.id}`}>{user.last_name}</Link>
					</li>
				</div>
			))}
		</>
	);
};

export const getStaticProps = async () => {
	const users = await axios.get(`https://reqres.in/api/users?page=1`);

	return {
		props: {
			...users.data,
		},
	};
};

export default UsersList;
