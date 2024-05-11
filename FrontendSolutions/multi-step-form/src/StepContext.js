// StepContext.js
import React, { createContext, useState, useContext } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
	const [activeStep, setActiveStep] = useState(1);

	return (
		<StepContext.Provider value={{ activeStep, setActiveStep }}>
			{children}
		</StepContext.Provider>
	);
};

export const useStep = () => useContext(StepContext);
