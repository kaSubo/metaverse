const MapPin = ({ imgUrl, blur }) => (
	<div className='absolute z-10 w-[70px] h-[70px] p-[8px] rounded-full bg-[#323844] backdrop-blur-[12px] shadow-map'>
		<img
			className='w-full h-full'
			src={imgUrl}
			alt='People'
		/>
		<img
			className={`absolute top-0 left-0 w-full h-full ${blur} z-[-1]`}
			src={imgUrl}
			alt='People'
		/>
		<div className='map-pin' />
	</div>
);

export default MapPin;
