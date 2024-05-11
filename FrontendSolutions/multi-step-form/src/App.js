import StepWrapper from "./components/StepWrapper";
import {StepProvider} from './StepContext';

import "./reset.css"
import './App.css';


function App() {
	return (
		<div className="App">
			<StepProvider>
				<StepWrapper/>
			</StepProvider>
			<div style={{position:"fixed",left:"50%", transform:"translate(-50%)", bottom:'20px'}} className="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
				Coded by <a target="_blank" href="https://amjadshadid.vercel.app/">Amjad Shadid</a>.
			</div>
		</div>
	);
}

export default App;
