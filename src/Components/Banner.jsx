import SliderContent from "./BannerContent";



const Banner = () => {
    return (
        <div className="container mx-auto poppins">
            <div className='mb-10 relative' id="banner">
                <img className='h-[380px] lg:h-[500px] object-cover  rounded-2xl w-full' src="https://i.ibb.co/wQKPB4q/pexels-goumbik-574071.jpg" alt="property-image" />
                <div className='absolute flex h-[380px] lg:h-[500px] items-center  left-0 top-0 bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)] w-full rounded-xl'>
                    <SliderContent></SliderContent>
                </div>
            </div>
        </div>
    );
};

export default Banner;