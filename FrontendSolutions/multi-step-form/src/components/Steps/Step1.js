import React from 'react';
import Input from "../Input/InputText/Input";
import {useStep} from "../../StepContext";

const Step1 = ({errors, formData, handleInput}) => {
	const {activeStep, setActiveStep} = useStep();

	return (
		<div className={`preview-form step-container ${activeStep === 1 ? 'show-step' : ''}`}>
			<h1 className="form-title">Personal info</h1>
			<p className="form-desc">Please provide your name, email address, and phone number.</p>
			<form className='form'>

				<div className={`step step-${activeStep}`}>
					<Input onChange={e => handleInput(e.target)} name='name' value={formData.name} type={'text'}
					       label='name' placeholder={'add your name'} error={errors.name}/>
					<Input onChange={e => handleInput(e.target)} name='email' value={formData.email} type={'email'}
					       label='email adress' placeholder={'add your name'} error={errors.email}/>
					<Input onChange={e => handleInput(e.target)} name='phone' value={formData.phone} type={'text'}
					       label='phone' placeholder={'add your name'} error={errors.phone}/>
				</div>

			</form>

		</div>
	);
};

export default Step1;
