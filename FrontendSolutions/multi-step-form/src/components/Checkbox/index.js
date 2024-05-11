import React from 'react';
import "./style.css"
const Checkbox = ({price, title, desc, label, checked, onChange, selectedPlan}) => {

	return (
		<label htmlFor={label} className={`checkbox ${checked ? 'checkbox-checked' : ''}`}>
			<input
				id={label}
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<div className="checkbox-info">
				<p className='title'>{title}</p>
				<p className='description'>{desc}</p>
			</div>

			<p className='selected-price'>+${price}/{selectedPlan === 'monthly' ? 'mo':'yr'}</p>
		</label>
	);
};

export default Checkbox;
