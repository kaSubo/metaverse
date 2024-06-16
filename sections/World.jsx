'use client';

import styles from '../styles';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, cardVariant } from '../utils/motion';

import { TypingText, TitleText, MapCard, MapPin } from '../components';

const World = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
			<TypingText
				title='| People on the World'
				textStyles='text-center'
			/>
			<TitleText
				title={
					<>
						Track friends around you and invite them to play together in the
						same world
					</>
				}
				textStyles='text-center'
			/>
			<motion.div
				className='relative mt-[64px] flex w-full h-[550px]'
				variants={fadeIn('up', 'tween', 0.3, 1)}>
				<img
					className='w-full h-full object-cover'
					src='/map.png'
					alt='Map'
				/>
				<motion.div className='absolute bottom-[30%] right-[20%]' variants={cardVariant(1)}>
					<MapPin
						imgUrl='people-01.png'
						blur='blur-2xl'
					/>
				</motion.div>

				<motion.div className='absolute top-10 left-28' variants={cardVariant(1.2)}>
					<MapPin
						imgUrl='people-02.png'
						blur='blur-[35px]'
					/>
				</motion.div>

				<motion.div className='absolute top-1/2 left-[45%]' variants={cardVariant(1.5)}>
					<MapPin
						imgUrl='people-03.png'
						blur='blur-[30px]'
					/>
				</motion.div>

				<MapCard
					positioning='top-[35%] left-[19%]'
					title='The Upside Down'
					imgUrl='/map-location-01.png'
				/>

				<MapCard
					positioning='top-[9%] right-[20%]'
					title='Hawkins Labs'
					imgUrl='/map-location-02.png'
				/>
			</motion.div>
		</motion.div>
	</section>
);

export default World;
