const MapCard = ({ imgUrl, title, positioning }) => (
	<div
		className={`${positioning} absolute w-[217px] h-[167px] p-[8px] rounded-[24px] bg-[#323844] backdrop-blur-[12px] shadow-map`}>
		<img
			className='w-full h-full'
			src={imgUrl}
			alt='People'
		/>
		<img
			className='absolute top-0 left-0 w-full h-full blur-2xl z-[-1]'
			src={imgUrl}
			alt='People'
		/>
		<div className='absolute bottom-[16px] left-[26px] flex flex-col justify-center items-start gap-2'>
			<div className='flex flex-row items-center justify-between gap-2'>
				<div className='flex flex-row items-center justify-center w-[46px] h-[24px]'>
					<img
						className='absolute top-0 left-0 z-[3]'
						src='people-sm-01.png'
						alt='People'
					/>
					<img
						className='absolute top-0 left-[11px] z-[2]'
						src='people-sm-02.png'
						alt='People'
					/>
					<img
						className='absolute top-0 left-[21px] z-[1]'
						src='people-sm-03.png'
						alt='People'
					/>
				</div>
				<p className='font-thin text-[12px] text-white leading-[15px]'>
					+ 264 has joined
				</p>
			</div>
			<h4 className='font-semibold text-[18px] text-white'>{title}</h4>
		</div>
	</div>
);

export default MapCard;
