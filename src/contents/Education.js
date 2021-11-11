// import React, { Component } from 'react';
// import Widecard from '../components/Widecard';

// class Education extends Component {
//     render() {
//         return (
//             <div className="condiv">
//                 <h1 className="subtopic">My Education</h1>
//                 <Widecard title="Bachelor of Computer Application" where="JG College of Computer Application" from="2018" to="Present" />
//                 <Widecard title="HSC" where="Uma School of Commerce" from="2017" to="2018" />
//             </div>
//         )
//     }
// }

// export default Education
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         // backgroundColor: "#f4f5f9"
//     },
//     button: {
//         marginTop: theme.spacing(1),
//         marginRight: theme.spacing(1),
//     },
//     actionsContainer: {
//         marginBottom: theme.spacing(2),
//     },
//     resetContainer: {
//         padding: theme.spacing(3),
//     },
// }));

// function getSteps() {
//     return ['Bachelor of Computer Application', 'HSC', 'SSC'];
// }

// function getStepContent(step) {
//     switch (step) {
//         case 0:
//             return `JG College of Computer Application     
//             2018 - Present`;
//         case 1:
//             return 'Uma Vidhyalaya';
//             return '2017-2018';
//             return 'Percentage: 68%';
//         case 2:
//             return 'H.B.Mehta Vallabhanagar Highschool';
//             return '2015-2016';
//             return 'Percentage: 63%';
//         default:
//             return 'Unknown step';
//     }
// }

// export default function VerticalLinearStepper() {
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
//         <div className="condiv">
//             <h1 className="subtopic">My Education</h1>
//             <div className={classes.root}>
//                 <Stepper activeStep={activeStep} orientation="vertical">
//                     {steps.map((label, index) => (
//                         <Step key={label}>
//                             <StepLabel>{label}</StepLabel>
//                             <StepContent>
//                                 <Typography>{getStepContent(index)}</Typography>
//                                 <div className={classes.actionsContainer}>
//                                     <div>
//                                         <Button
//                                             disabled={activeStep === 0}
//                                             onClick={handleBack}
//                                             className={classes.button}
//                                         >
//                                             Back
//                   </Button>
//                                         <Button
//                                             variant="contained"
//                                             color="primary"
//                                             onClick={handleNext}
//                                             className={classes.button}
//                                         >
//                                             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </StepContent>
//                         </Step>
//                     ))}
//                 </Stepper>
//                 {activeStep === steps.length && (
//                     <Paper square elevation={0} className={classes.resetContainer}>
//                         <Typography>All steps completed - you&apos;re finished</Typography>
//                         <Button onClick={handleReset} className={classes.button}>
//                             Reset
//           </Button>
//                     </Paper>
//                 )}
//             </div>
//         </div>
//     );
// }




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import MouseIcon from '@material-ui/icons/Mouse';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                SSC
            </Typography>
                            <Typography>H.B.Mehta Vallabhanagar Highschool</Typography>
                            <Typography>2015-2016</Typography>

                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <HomeIcon color="white" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                HSC
            </Typography>
                            <Typography>Uma Vidhyalaya</Typography>
                            <Typography>2017-2018</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>

                        <TimelineDot color="secondary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Bachelor of Computer Application(BCA)
            </Typography>
                            <Typography>JG College of Computer Application</Typography>
                            <Typography>2018-Present</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <RepeatIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                TRIRID Technologies
            </Typography>
                            <Typography>Work as a Junior Software Developer</Typography>
                            <Typography>Work Experience <b>6 Months</b> at TRIRID Technologies</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <MouseIcon style={{ color: "white" }} />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Current Position
            </Typography>
                            <Typography>Work in <b>Artoon Solutions PVT. LTD.</b></Typography>
                            <Typography>Software Developer</Typography>
                            <Typography>April 2021-Present</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
