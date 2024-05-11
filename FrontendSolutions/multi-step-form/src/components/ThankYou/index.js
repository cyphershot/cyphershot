import React from 'react';
import thanksImage from "../../assets/images/icon-thank-you.svg"
const ThankYouView = () => {
	return (
		<div className='thanks-view'>
			<div className="thanks-wrapper">
				<img className='thanks-image' src={thanksImage} alt="thanks image"/>
				<h1 className='thanks-title'>Thank you!</h1>
				<p className='thanks-description'>Thanks for confirming your subscription! We hope you have fun using our
					platform.
					If you ever need support, please feel free to email us at support@loremgaming.com.</p>
			</div>
		</div>
	);
};

export default ThankYouView;
