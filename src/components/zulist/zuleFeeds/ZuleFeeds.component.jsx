import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './zuleFeed.style.css';
import { EffectCards } from 'swiper';

const ZuleFeeds = ({ zules }) => {
	const [isZuleTeaserPaused, setIsZuleTeaserPaused] = useState(true);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Swiper
			effect={'cards'}
			grabCursor={true}
			modules={[EffectCards]}
			className='mySwiper'
			cardsEffect={{
				rotate: false,
				slideShadows: false
			}}
			onSlideChange={(e) => setActiveIndex(e.activeIndex)}
		>
			{zules.map((zule, i) => {
				return (
					<SwiperSlide key={i}>
						<div
							className='w-[calc(80vh/(16/9))] h-[calc(80vh)] rounded-lg overflow-hidden shadow-[inset_0_0_70px_rgba(0,0,0,1)] relative'
							style={{ background: `url(${zule.zuleThumbnail})` }}
							onClick={() => setIsZuleTeaserPaused(!isZuleTeaserPaused)}
						>
							{!isZuleTeaserPaused && i === activeIndex && (
								<video
									src={zule.zuleTeaser}
									className='w-full h-full'
								></video>
							)}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ZuleFeeds;
