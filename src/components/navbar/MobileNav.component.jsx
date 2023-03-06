import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-silver-png.png';

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
				<ul class='flex flex-col pt-16 uppercase items-start p-6'>
					<li class='mb-3'>
						<Link
							to=''
							class='p-1 walk-through relative active text-2xl font-Righteous'
						>
							Walk through
						</Link>
					</li>
					<li class='mb-3'>
						<Link to='career' class='p-1 text-2xl font-Righteous'>
							Career
						</Link>
					</li>
					<li class='mb-3'>
						<Link to='help' class='p-1 text-2xl font-Righteous'>
							Help
						</Link>
					</li>
					<li class='mb-3 p-1 bg-gradient-to-tr from-[#BF1363] to-[#0F62BA] rounded-md shadow-md'>
						<Link to='signup' class='p-1 text-2xl font-Righteous'>
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default MobileNav;
