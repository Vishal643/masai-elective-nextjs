import React from 'react';
import styled from 'styled-components';
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
const ShowUserDetails = (props) => {
	const { id, avatar, email, first_name, last_name } = props.payload;
	console.log(avatar);
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
					<h1>Email: </h1>
					<p>{email}</p>
				</div>
				<div>
					<Image src={avatar} alt='avatar' height={250} width={450} />
				</div>
			</User>
		</div>
	);
};

export default ShowUserDetails;
