import React, { useEffect, useState } from 'react';

import Navbar from '../../components/navbar/Navbar.component';

import { getRandomZules } from '../../axios/zule.axios';
import { base_url } from '../../utils/constants.util';
import ZuleFeeds from '../../components/zulist/zuleFeeds/ZuleFeeds.component';

const Zules = () => {
	const [loading, setLoading] = useState(true);
	const [randomZules, setRandomZules] = useState([]);
	const [trendingZules, setTrendingZules] = useState([]);
	const [recommendedZules, setRecommendedZules] = useState([]);
	const [interestsZules, setInterestsZules] = useState([]);

	const fetchRandomZules = async (zuleOffset) => {
		// , user && user.token
		return await getRandomZules(zuleOffset).then(async (res) => {
			if (!res.data.length) return;
			const zules = res.data.map((zule) => {
				const zuleTeaser = `${base_url}/zules/${zule.id_zuleSpot}/g2pc28g0l9vgb/${zule.id_zule}-teaser.mp4`;
				const fullZule = `${base_url}/zules/${zule.id_zuleSpot}/g2pc28g0l9vgb/${zule.id_zule}-zule.mp4`;
				const zuleThumbnail = `${base_url}/zules/${zule.id_zuleSpot}/g2pc28g0l9vgb/${zule.id_zule}-thumbnail.jpg`;
				return { ...zule, zuleTeaser, fullZule, zuleThumbnail };
			});
			return zules;
		});
	};

	useEffect(() => {
		fetchRandomZules(0).then((zules) => {
			setLoading(false);
			setRandomZules(zules);
			setInterestsZules(zules);
			setRecommendedZules(zules);
			setTrendingZules(zules);
		});
	}, []);

	return (
		<>
			<Navbar />
			<div className='w-full h-screen pt-20 text-white flex p-3 pb-0 '>
				<div className='w-[calc(75%-4rem)] bg-white/10'>
					<div className='min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] overflow-y-scroll max-w-min flex flex-col justify-around scrollbar-hide'>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
						<span className='-rotate-90 w-10 text-center bg-white/30'>Hi</span>
					</div>
				</div>
				<div className='w-1/4 h-[calc(100vh-10rem)]'>
					<ZuleFeeds zules={randomZules} />
				</div>
			</div>
		</>
	);
};

export default Zules;
