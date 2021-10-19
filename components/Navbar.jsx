import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className={styles.nav} style={{ background: 'gray' }}>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/users-list'>Users</Link>
			</li>
			<li>
				<Link href='/about'>About</Link>
			</li>

			<li>
				<Link href='/contact-us'>Contact Us</Link>
			</li>
			<li>
				<Link href='/others'>Others</Link>
			</li>
		</nav>
	);
};

export default Navbar;
