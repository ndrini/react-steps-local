// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// import the possible steps
// const steps = require('./src/steps.json');

// import steps from './steps.json';

let steps = require('./steps');

// const steps = require('/home/an/workspace/react-steps/src/steps.json');
console.log("________________________________", steps);


/**
 * Provide the main page Component that shows
 * description and the choices
 *
 * "step" it actual step, and defines the page to show by the code (of type string)
 */
function Step() {
  const [step, setStep] = useState('0');
  console.log('_________ step', step);

  // obtain the full object for actual step
  let step_obj = steps.find(function (element) {
    return element.code === step;
  });

  console.log('_______________ step_obj', step_obj);

  function handleChoice(code) {
    // console.log('handleChoice code value: ', code);
    setStep(code);
  }

  function ChoiceButton(props) {
    return (
      <button className="button_green" onClick={() => handleChoice(props.code)}>
        {props.code} {props.text_button}
      </button>
    );
  }

  function BackButton(props) {
    return (
      <button className="button_blue" onClick={() => handleChoice(props.code)}>
        {props.code} {props.text_button}
      </button>
    );
  }

  return (
    <div>
      <h1>Title: {step_obj.title}</h1>
      <img src={step_obj.image_path} alt=""/>
      <p>Description: {step_obj.description}</p>

      {step_obj.choices.map((singleChoice) => (
        <ChoiceButton
          text_button={singleChoice.text_button}
          code={singleChoice.code}
        />
      ))}

      {step !== '0' ? <BackButton text_button="start again" code="0" /> : null}
    </div>
  );
}

const el = <Step />;
ReactDOM.render(el, document.getElementById('root'));
