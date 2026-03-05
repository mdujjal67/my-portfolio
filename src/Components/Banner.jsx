import SliderContent from "./BannerContent";

const Banner = () => {
    return (
        <div className="container mx-auto poppins" id="banner">
            <div className='relative overflow-hidden rounded-2xl group'>
                {/* Background Image with subtle hover zoom */}
                <img 
                    className='h-[400px] lg:h-[560px] object-cover rounded-2xl w-full transition-transform duration-700 group-hover:scale-105' 
                    src="https://i.ibb.co/wQKPB4q/pexels-goumbik-574071.jpg" 
                    alt="Md Ujjal Hossain Portfolio" 
                />
                
                {/* Improved Gradient Overlay for better text contrast */}
                <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center rounded-2xl'>
                    <SliderContent />
                </div>
            </div>
        </div>
    );
};

export default Banner;