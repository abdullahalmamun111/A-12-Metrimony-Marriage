
import img_1 from "../assets/slider1.jpg";
import img_2 from "../assets/slider2.jpg";
import img_3 from "../assets/slider3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Slider = () => {

	const slides = [
		{
		  image: img_1,
		  title: "Find Your Perfect Match, Start Your Journey",
		  description:
			"Every click brings you closer to your soulmate. Join today and take the first step toward a lifetime of happiness.",
		},
		{
		  image: img_2,
		  title: "Love Knows No Limits, Discover Yours",
		  description:
			"Explore endless possibilities and meet like-minded individuals who share your values and dreams.",
	
		},
		{
		  image: img_3,
		  title: "Together, We Create Forever",
		  description:
			"From heartfelt connections to lifelong commitments, find your happily ever after with us.",
		  
		},
	  ];
	  
  

    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-[400px] md:h-[500px] bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 ">
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-base md:text-lg mb-6">
                    {slide.description}
                  </p>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  
};

export default Slider;
