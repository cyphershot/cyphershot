import React from 'react';
import "./style.css"

const RadioButton = ({price, label, value, onChange, icon, currentPlan}) => {
	const currentElement = `${label}-${Math.random().toString(16).slice(2)}`;
	const isMobile = matchMedia("(max-width: 767px)");
	return (
		<label htmlFor={currentElement} className={`radio-button ${value ? "focus" : ""}`}>
			{isMobile.matches && (
				<div className='radio-mobile'>
					<img src={icon} alt="image"/>
					<div className="mobile-wrapper">
						<p className='item-label'>{label}</p>
						<p className='item-price'>${price}/{currentPlan === "monthly" ? 'mo' : 'yr'}</p>
						{currentPlan === "yearly" && <p className='yearly-offer'>2 months free</p>}
						<input
							type="radio"
							onClick={e => e.target.blur()}
							id={currentElement}
							checked={value}
							onChange={onChange}
							className='sr-only'
						/>
					</div>
				</div>
			)}
			{!isMobile.matches &&
				<>
					<img src={icon} alt="image"/>
					<p className='item-label'>{label}</p>
					<p className='item-price'>${price}/{currentPlan === "monthly" ? 'mo' : 'yr'}</p>
					{currentPlan === "yearly" && <p className='yearly-offer'>2 months free</p>}
					<input
						type="radio"
						onClick={e => e.target.blur()}
						id={currentElement}
						checked={value}
						onChange={onChange}
						className='sr-only'
					/>
				</>}
		</label>
	);
};

export default RadioButton;
