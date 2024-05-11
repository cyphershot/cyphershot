import React from 'react';
import "./styles.css"
const Input = ({name, label, placeholder, type = "text", tabIndex = 0, onChange = null, hint = "", error = "", value = ""}) => {

	return (
		<div className={`input-wrapper ${error ? 'has-error':''}`}>
			<div className="input-row">
				<label htmlFor={label}>{label}</label>
				{error && <span className='error'>{error}</span>}
			</div>
			<input name={name} type={type} id={label} placeholder={placeholder} value={value} onChange={onChange}/>
		</div>
	);
};

export default Input;
