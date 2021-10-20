import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className={styles.nav} style={{ background: 'gray' }}>
			<li>
				<Link href='/tasks'>Todos</Link>
			</li>
			<li>
				<Link href='/tasks/id/create'>Create Todo</Link>
			</li>
		</nav>
	);
};

export default Navbar;
