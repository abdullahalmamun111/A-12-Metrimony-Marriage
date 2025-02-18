import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import PremiumMember from './PremiumMember';
import HowItWorks from './HowItWorks';
import SuccessCounter from './SuccessCounter';
import OurSuccesStory from './OurSuccesStory';
import { Helmet } from 'react-helmet-async';
import WhyChoose from './WhyChoose';
import Faq from './Faq';

  
const Home = () => {


	return (
		<div>
			<Helmet>
                <title>Home || MetrimonyHub</title>
            </Helmet>
			<div className='mt-16'><Slider></Slider></div>
			<PremiumMember></PremiumMember>
			<HowItWorks></HowItWorks>
			<SuccessCounter></SuccessCounter>
			<OurSuccesStory></OurSuccesStory>
			<WhyChoose></WhyChoose>
			<Faq></Faq>
		</div>
	);
};

export default Home;