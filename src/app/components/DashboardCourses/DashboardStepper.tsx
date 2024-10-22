import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box, StepConnector } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const steps = ["", "", "", ""];

const CustomStepIcon = (props: any) => {
  const { active, completed, icon } = props;

  const whiteMedalStyle = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#0CB43F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: active ? "1px solid #2870ED" : "none",
  };

  const activeStepStyle = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#2870ED",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const defaultStepStyle = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #e0e0e0",
  };

  if (icon === 1) {
    return (
      <div style={whiteMedalStyle}>
        <Image
          src="/icons/whiteMedal.svg"
          alt="White Medal"
          width={20}
          height={20}
        />
      </div>
    );
  }

  if (completed) {
    return <CheckCircleIcon color="success" />;
  }

  return <div style={active ? activeStepStyle : defaultStepStyle}>{icon}</div>;
};

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(2);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setActiveStep(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <Stepper
          sx={{
            width: "100%",
          }}
          activeStep={activeStep}
          alternativeLabel
          connector={<StepConnector sx={{ backgroundColor: "#2870ED" }} />}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={(props) => (
                  <CustomStepIcon {...props} icon={index + 1} />
                )}
              />
            </Step>
          ))}
        </Stepper>

        <Box className="sliderContainer">
          <input
            type="range"
            min={0}
            max={steps.length - 1}
            value={activeStep}
            onChange={handleSliderChange}
            className="slider"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StepperComponent;
