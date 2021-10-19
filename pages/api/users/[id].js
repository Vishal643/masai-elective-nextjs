import axios from 'axios';

const Index = async (req, res) => {
	const { id } = req.query;
	const {
		data: { data },
	} = await axios.get(`https://reqres.in/api/users/${id}`);

	const { avatar, email, first_name, last_name } = data;
	let html = `
		<h1>${first_name} ${last_name}</h1>
		<h2>${email}</h2>
		<img src=${avatar} />
	`;
	res.send(html);
};

export default Index;
