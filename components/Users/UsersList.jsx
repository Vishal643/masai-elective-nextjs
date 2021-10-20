import { Users } from '../utils';
import Link from 'next/link';

const UsersList = () => {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Users</h1>

			{Users.map((user) => (
				<div key={user.id} className='userList'>
					<li>
						<Link href={`/userpage/${user.id}`}>{user.last_name}</Link>
					</li>
				</div>
			))}
		</>
	);
};

export default UsersList;
