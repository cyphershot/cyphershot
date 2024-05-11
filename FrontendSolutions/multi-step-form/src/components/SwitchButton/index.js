import React, {useState} from 'react';
import "./style.css"

const SwitchButton = ({handleInput, currentPlan, setCurrentPlan}) => {

	const handleSwitchButton = (e) => {
		e.preventDefault()
		const newPlan = currentPlan === 'monthly' ? 'yearly' : 'monthly';
		setCurrentPlan(newPlan);
		handleInput({ name: 'selectedPlan', value: newPlan });
	}


	return (
		<div className={'switch-button'}>
			<p className={`plan ${currentPlan === 'monthly' && 'active-plan'}`}>Monthly</p>
			<button className={`button ${currentPlan}`} onClick={handleSwitchButton}>
				<span className="circle"></span>
			</button>
			<p className={`plan ${currentPlan === 'yearly' && 'active-plan'}`}>Yearly</p>
		</div>
	);
};

export default SwitchButton;
