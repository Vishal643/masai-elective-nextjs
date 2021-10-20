import { useRouter } from 'next/router';
import { Users } from '../../../../utils';
import ShowUserDetails from '../../../../components/ShowUserDetails';

const UserDetails = () => {
	const router = useRouter();

	let users = Users?.filter((user) => user.id === router.query.id);

	let payload = {
		id: users[0]?.id,
		avatar: users[0]?.avatar,
		email: users[0]?.email,
		first_name: users[0]?.first_name,
		last_name: users[0]?.last_name,
	};

	return (
		<div className='userParentDiv'>
			<ShowUserDetails key={users[0]?.id} payload={payload} />
		</div>
	);
};

export default UserDetails;
