import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-silver-png.png';

const Navbar = () => {
	return (
		<nav className='w-full fixed top-0 bg-black bg-opacity-20 backdrop-blur-sm text-white'>
			<div className='max-w-[1280px] flex items-center justify-between mx-auto py-4 px-10'>
				<Link to='/'>
					<img src={Logo} alt='Mizule' className='w-28' />
				</Link>
				<ul className='flex uppercase items-center'>
					<li className='mx-1'>
						<Link href='/' className='p-1 walk-through relative active'>
							Walk through
						</Link>
					</li>
					<li className='mx-1'>
						<Link href='career' className='p-1'>
							Career
						</Link>
					</li>
					<li className='mx-1'>
						<Link href='Career' className='p-1'>
							Help
						</Link>
					</li>
					<li className='mx-1 p-1 bg-gradient-to-tr from-[#BF1363] to-[#0F62BA] rounded-md shadow-md'>
						<Link href='signup' className='p-1'>
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
