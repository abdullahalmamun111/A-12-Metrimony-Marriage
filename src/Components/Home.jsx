import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import PremiumMember from './PremiumMember';
import HowItWorks from './HowItWorks';
import SuccessCounter from './SuccessCounter';

  
const Home = () => {


	return (
		<div>
			<Slider></Slider>
			<PremiumMember></PremiumMember>
			<HowItWorks></HowItWorks>
			<SuccessCounter></SuccessCounter>
		</div>
	);
};

export default Home;