import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        "HTML",
        "CSS",
        "BOOTSTRAP",
        "JAVASCRIPT",
        "JQUERY",
        "GATSBY",
        "REACT JS",
        "MSSQL",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//     },
//     backButton: {
//         marginRight: theme.spacing(1),
//     },
//     instructions: {
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//     },
// }));

// function getSteps() {
//     return ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'REACT JS', 'ANGULAR', 'GATSBY', 'MSSQL'];
// }

// function getStepContent(stepIndex) {
//     switch (stepIndex) {
//         case 0:
//             return 'Select HTML';
//         case 1:
//             return 'Select CSS';
//         case 2:
//             return 'Select BOOTSTRAP';
//         case 3:
//             return 'Select JAVASCRIPT';
//         case 4:
//             return 'Select JQUERY';
//         case 5:
//             return 'Select REACT JS';
//         case 6:
//             return 'Select ANGULAR';
//         case 7:
//             return 'Select GATSBY';
//         case 8:
//             return 'Select MSSQL';
//         default:
//             return 'Unknown stepIndex';
//     }
// }

// export default function HorizontalLabelPositionBelowStepper() {
//     const classes = useStyles();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const steps = getSteps();

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//     };

//     return (
//         <div className="condiv skills">
//             <h1 className="subtopic">My Skills</h1>
//             <div className={classes.root}>
//                 <Stepper activeStep={activeStep} alternativeLabel>
//                     {steps.map((label) => (
//                         <Step key={label}>
//                             <StepLabel>{label}</StepLabel>
//                         </Step>
//                     ))}
//                 </Stepper>
//                 <div>
//                     {activeStep === steps.length ? (
//                         <div>
//                             <Typography className={classes.instructions}>All steps completed</Typography>
//                             <Button onClick={handleReset}>Reset</Button>
//                         </div>
//                     ) : (
//                             <div>
//                                 <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//                                 <div>
//                                     <Button
//                                         disabled={activeStep === 0}
//                                         onClick={handleBack}
//                                         className={classes.backButton}
//                                     >
//                                         Back
//               </Button>
//                                     <Button variant="contained" color="primary" onClick={handleNext}>
//                                         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                                     </Button>
//                                 </div>
//                             </div>
//                         )}
//                 </div>
//             </div>
//         </div>
//     );
// }
