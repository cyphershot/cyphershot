import React, {useEffect, useState} from 'react';
import RadioButton from "../RadioButton";
import SwitchButton from "../SwitchButton";
import {PRICES_MONTHLY, PRICES_YEARLY} from "../../utils/constants";
import {useStep} from "../../StepContext";


const Step2 = ({formData, handleInput}) => {
	const [selectedPlan, setSelectedPlan] = useState(formData.selectedPlan);
	const [prices, setPrices] = useState([]);
	const [currentPlan, setCurrentPlan] = useState("monthly");
	const [selectedOption, setSelectedOption] = useState('');
	const {activeStep, setActiveStep} = useStep();




	useEffect(() => {
		if (currentPlan === 'monthly') {
			setPrices(PRICES_MONTHLY)
		} else {
			setPrices(PRICES_YEARLY)
		}
	}, [currentPlan])

	return (
		<div className={`preview-form step-container ${activeStep === 2 ? 'show-step' : ''}`}>
			<h1 className="form-title">Select your plan</h1>
			<p className="form-desc">you have the option of monthly or yearly billing</p>
			<form className='form'>
				<div className={`step step-${activeStep}`}>
					<div className="radio-group">
						{prices.map((item, index) => (
							<RadioButton
								key={index}
								label={item.name}
								price={item.price}
								icon={item.icon}
								currentPlan={currentPlan}
								value={selectedOption === item.price}
								onChange={() => {
									setSelectedOption(item.price)
									handleInput({ name: 'selectedPrice', value: item.price });
									handleInput({ name: 'selectedName', value: item.name });
								}}
							/>
						))}
					</div>
					{/*	switch button */}
					<SwitchButton handleInput={handleInput} currentPlan={currentPlan} setCurrentPlan={setCurrentPlan}/>
				</div>
			</form>
		</div>
	);
};

export default Step2;
