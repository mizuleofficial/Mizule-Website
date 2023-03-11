import React, { useState } from 'react';
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

const MobileNav = () => {
	const [active, setActive] = useState(false);

	return (
		<nav className='w-full z-10 fixed top-0 bg-white bg-opacity-10 backdrop-blur-sm text-white flex items-center justify-between px-6 py-3'>
			<Link to='/'>
				<img src={Logo} alt='Mizule' className='w-28' />
			</Link>
			<div>
				<img
					src='https://img.icons8.com/ios-filled/50/ffffff/menu-rounded.png'
					width='24'
					onClick={() => setActive(!active)}
					alt='menu'
				/>
			</div>
			<div
				className={`absolute -z-10 h-screen top-0 left-0 right-0 bottom-0 bg-[#191923] nav transition-all ${
					active ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<ul className='flex flex-col pt-16 uppercase items-start p-6'>
					<li className='mb-3'>
						<Link
							to=''
							className='p-1 walk-through relative active text-2xl font-Righteous'
						>
							Walk through
						</Link>
					</li>
					<li className='mb-3'>
						<Link to='career' className='p-1 text-2xl font-Righteous'>
							Career
						</Link>
					</li>
					<li className='mb-3'>
						<Link to='help' className='p-1 text-2xl font-Righteous'>
							Help
						</Link>
					</li>
					<li className='mb-3 p-1 bg-gradient-to-tr from-[#BF1363] to-[#0F62BA] rounded-md shadow-md'>
						<Link to='signup' className='p-1 text-2xl font-Righteous'>
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default window.innerWidth > 640 ? Navbar : MobileNav;
