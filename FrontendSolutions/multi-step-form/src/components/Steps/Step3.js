import React, {useState} from 'react';
import Checkbox from "../Checkbox";
import {useStep} from "../../StepContext";

const Step3 = ({handleExtraPriceChange, errors, formData, handleSubmit, handleInput}) => {
	const [isChecked, setIsChecked] = useState(false);

	const {activeStep, setActiveStep} = useStep();

	const handleCheckboxChange = (name, price) => (event) => {
		setIsChecked(event.target.checked);
		handleInput({name: name, value: event.target.checked})
		if (event.target.checked) {
			handleExtraPriceChange(price)
		}
		if (!event.target.checked) {
			handleExtraPriceChange(-price)
		}
	};

	return (
		<div className={`add-ons step-container ${activeStep === 3 ? 'show-step' : ''}`}>
			<h1 className="form-title">Pick add-ons</h1>
			<p className="form-desc">Add-ons help enhance your gaming experience</p>

			<div className="checkboxes-wrapper">
				<Checkbox
					label="onlineServices"
					title={'Online services'}
					desc={'Access to multiplayer games'}
					checked={formData.onlineServices}
					price={formData.selectedPlan === 'monthly' ? 1 : 10}
					selectedPlan={formData.selectedPlan}
					onChange={handleCheckboxChange("onlineServices", formData.selectedPlan === 'monthly' ? 1 : 10)}
				/>
				<Checkbox
					label="largerStorage"
					title={'Larger Storage'}
					desc={'Extra 1TB of cloud save'}
					checked={formData.largerStorage}
					price={formData.selectedPlan === 'monthly' ? 2 : 20}
					selectedPlan={formData.selectedPlan}
					onChange={handleCheckboxChange("largerStorage", formData.selectedPlan === 'monthly' ? 2 : 20)}
				/>
				<Checkbox
					label={"customizableProfile"}
					title={'Customizable profile'}
					desc={'Custom theme on your profile'}
					checked={formData.customizableProfile}
					price={formData.selectedPlan === 'monthly' ? 2 : 20}
					selectedPlan={formData.selectedPlan}
					onChange={handleCheckboxChange("customizableProfile", formData.selectedPlan === 'monthly' ? 2 : 20)}
				/>
			</div>

		</div>
	);
};

export default Step3;
