import { useRouter } from 'next/router';
import { Users } from '../../../../utils';
import axios from 'axios';
import ShowUserDetails from '../../../../components/ShowUserDetails';

const UserDetails = (props) => {
	const { id, avatar, email, first_name, last_name } = props.users.data;

	let payload = {
		id,
		avatar,
		email,
		first_name,
		last_name,
	};
	const router = useRouter();

	let users = Users.filter((user) => user.id === router.query.id);

	console.log(users);
	return (
		<div className='userParentDiv'>
			<ShowUserDetails key={id} payload={payload} />
		</div>
	);
};

export const getStaticPaths = async () => {
	const {
		data: { data },
	} = await axios.get(`https://reqres.in/api/users?page=1`);

	const paths = data.map((user) => ({
		params: { id: String(user.id) },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const { data: users } = await axios.get(`https://reqres.in/api/users/${id}`);
	return {
		props: {
			users,
		},
	};
};

// export const getServerSideProps = async ({ query: { id } }) => {
// 	const {
// 		data: { data },
// 	} = await axios.get(`https://reqres.in/api/users/${id}`);
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };
export default UserDetails;
