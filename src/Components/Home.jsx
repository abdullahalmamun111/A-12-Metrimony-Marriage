import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import PremiumMember from './PremiumMember';
import HowItWorks from './HowItWorks';
import SuccessCounter from './SuccessCounter';
import OurSuccesStory from './OurSuccesStory';

  
const Home = () => {


	return (
		<div>
			<div className='mt-16'><Slider></Slider></div>
			<PremiumMember></PremiumMember>
			<HowItWorks></HowItWorks>
			<SuccessCounter></SuccessCounter>
			<OurSuccesStory></OurSuccesStory>
		</div>
	);
};

export default Home;