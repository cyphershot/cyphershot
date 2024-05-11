import React from 'react';
import {useStep} from "../../StepContext";

const Step4 = ({ errors, formData, handleSubmit, handleInput}) => {
	const isExtraServicesChecked = formData.onlineServices || formData.largerStorage || formData.customizableProfile;
	const {activeStep, setActiveStep} = useStep();

	return (
		<div className={`summary step-container ${activeStep === 4 ? 'show-step' : ''}`}>
			<h1 className="form-title">Finishing up</h1>
			<p className="form-desc">Double-check everything looks ok before confirming.</p>

			<div className="table">
				<div className="selected-item">
					<div className="row-table">
						<div className="item-name">{formData.selectedName} ({formData.selectedPlan})</div>
						<button className="change-action" onClick={() => setActiveStep(2)}>change</button>
					</div>
					<span
						className="item-price">${formData.selectedPrice}/{formData.selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
				</div>
				{/*	extra services*/}
				{isExtraServicesChecked && (
					<ul className='extra-services-list'>
						{formData.onlineServices && <li className='item'>
							<span>online service</span>
							<span>+${formData.selectedPlan === 'monthly' ? 1 : 10}/{formData.selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
						</li>}
						{formData.largerStorage && <li className='item'>
							<span>Larger storage</span>
							<span>+${formData.selectedPlan === 'monthly' ? 2 : 20}/{formData.selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
						</li>}
						{formData.customizableProfile && <li className='item'>
							<span>Customizable profile</span>
							<span>+${formData.selectedPlan === 'monthly' ? 2 : 20}/{formData.selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
						</li>}
					</ul>
				)}
			</div>
			<div className="total-price">
				<span>Total (per month)</span>
				<span>+${formData.selectedPrice + formData.extraPrice}/{formData.selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
			</div>
		</div>
	);
};

export default Step4;
