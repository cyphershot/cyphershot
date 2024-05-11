import React, {useState} from 'react';
import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'
import bgMobile from '../assets/images/bg-sidebar-mobile.svg'

import Input from "./Input/InputText/Input";
import * as Yup from 'yup';
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import ThankYouView from "./ThankYou";
import {useStep} from "../StepContext";

const StepWrapper = () => {
	//const [activeStep, setActiveStep] = useState(1)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		selectedPlan: 'monthly', // Initial selected plan
		selectedPrice: 0,
		onlineServices: false,
		largerStorage: false,
		customizableProfile: false,
		selectedName: '',
		extraPrice: 0,
	})
	const [errors, setErrors] = useState({})
	const [showThanksView, setShowThanksView] = useState(false)
	const {activeStep, setActiveStep} = useStep();

	const handleInput = ({name, value}) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}

	const handleExtraPriceChange = (newExtraPrice) => {
		setFormData(prevState => ({
			...prevState,
			extraPrice: prevState.extraPrice + newExtraPrice
		}));
	};

	const isMobile = matchMedia("(max-width:767px)")
	const bgStyle = {backgroundImage: `url(${isMobile.matches ? bgMobile:bgDesktop})`}

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('The email address is not formatted correctly').required('Email is required'),
		phone: Yup.string().required('phone is required')
	});


	const handleSubmit = (e) => {
		e.preventDefault();
		validationSchema.validate(formData, {abortEarly: false})
			.then(() => {
				console.log('Form data:', formData, activeStep);
				setErrors({})
				setActiveStep(activeStep => activeStep + 1)
			})
			.catch((errors) => {
				if (errors && errors.inner && errors.inner.length > 0) {
					setErrors(
						errors.inner.reduce((acc, error) => {
							acc[error.path] = error.message;
							return acc;
						}, {})
					);
				}
			});
	};

	const Step = ({number, name, isActive}) => {
		return (
			<li className={`${isActive ? 'active-step' : ''} step-wrapper`}>
				<span className='step-number'>{number}</span>
				<div className="step-info">
					<p className="step-number">STEP {number}</p>
					<p className="step-name">{name}</p>
				</div>
			</li>
		)
	}

	return (
		<div className="form-wrapper">
			<div className="row">
				<ul className="steps" style={bgStyle}>
					<Step number={1} name={'your info'} isActive={activeStep === 1}/>
					<Step number={2} name={'select plan'} isActive={activeStep === 2}/>
					<Step number={3} name={'add-ons'} isActive={activeStep === 3}/>
					<Step number={4} name={'summary'} isActive={activeStep === 4}/>
				</ul>
				<div className={`steps-with-actions ${showThanksView ? 'thanks-page' : ''}`}>
					{!showThanksView && (
						<>
							{/*{activeStep === 1 &&*/
								<Step1 formData={formData} handleInput={handleInput} errors={errors}
								       handleSubmit={handleSubmit}/>}
							{/*{ activeStep === 2 &&*/
								<Step2 formData={formData} handleInput={handleInput} errors={errors}
								       handleSubmit={handleSubmit}/>}
							{/*{activeStep === 3 &&*/
								<Step3 formData={formData} handleInput={handleInput} errors={errors}
								       handleSubmit={handleSubmit} handleExtraPriceChange={handleExtraPriceChange}/>}
							{/*{activeStep === 4 &&*/
								<Step4 formData={formData} handleInput={handleInput} errors={errors} handleSubmit={handleSubmit}/>}
						</>
					)}

					{showThanksView && <ThankYouView/>}
					{!isMobile.matches && <div className="action-buttons">
						{!showThanksView &&
							<button style={activeStep === 1 ? {visibility: "hidden"} : {}} className='action-button back-button'
							        onClick={() => setActiveStep(current => current - 1)}>Go
								back
							</button>}
						{activeStep <= 3 && <button className='action-button next-button' onClick={handleSubmit}>Next step</button>}
						{activeStep === 4 && !showThanksView && <button className='action-button next-button' onClick={() => {
							//setActiveStep(5)
							setShowThanksView(true)
						}}>Confirm</button>}
					</div>}

				</div>
			</div>
			{isMobile.matches && <div className="action-buttons">
				{!showThanksView &&
					<button style={activeStep === 1 ? {visibility: "hidden"} : {}} className='action-button back-button'
					        onClick={() => setActiveStep(current => current - 1)}>Go
						back
					</button>}
				{activeStep <= 3 && <button className='action-button next-button' onClick={handleSubmit}>Next step</button>}
				{activeStep === 4 && !showThanksView && <button className={`action-button next-button confirm-button`} onClick={() => {
					//setActiveStep(5)
					setShowThanksView(true)
				}}>Confirm</button>}
			</div>}
		</div>
	);
};

export default StepWrapper;
