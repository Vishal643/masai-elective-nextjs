// import { useRouter } from 'next/router';
// import { Users } from '../utils';
import styled from 'styled-components';
import axios from 'axios';
import Image from 'next/image';

const User = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	width: fit-content;
	height: 396px;
	> div {
		border: 1px solid black;
		background-color: skyblue;
		width: auto;
	}
	> div > h1,
	h2,
	p {
		text-align: center;
	}
	> div > p {
		width: 450px;
	}
	> div > h1 {
		color: red;
	}
	> div > Image {
		margin-left: 100px;
	}
`;
const UserDetails = (props) => {
	const { id, avatar, email, first_name, last_name } = props.data;

	// const router = useRouter();
	// let { id } = router.query;

	// let user = Users.filter((user) => user.id === id);

	return (
		<div className='userParentDiv'>
			<User>
				<div>
					<h1>Name: </h1>
					<h2>
						{first_name} {last_name}
					</h2>
				</div>

				<div>
					<h1>Id: </h1>
					<h2>{id}</h2>
				</div>
				<div>
					<h1>Role: </h1>
					<p>{email}</p>
				</div>
				<div>
					<Image src={avatar} alt='avatar' height={250} width={450} />
				</div>
			</User>
		</div>
	);
};

// export const getStaticPaths = async () => {
// 	const users = await axios.get(`https://reqres.in/api/users?page=1`);

// 	const paths = users.data.map((user) => ({
// 		params: { id: user.id },
// 	}));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps = async (context) => {
// 	const id = context.params.id;
// 	const users = await axios.get(`https://reqres.in/api/users/${id}`);
// 	return {
// 		props: {
// 			users,
// 		},
// 	};
// };

export const getServerSideProps = async ({ query: { id } }) => {
	const {
		data: { data },
	} = await axios.get(`https://reqres.in/api/users/${id}`);
	return {
		props: {
			data,
		},
	};
};
export default UserDetails;
