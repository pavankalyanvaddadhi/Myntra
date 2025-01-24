import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const CustomButton = ({
  variant,
  text,
  color,
  className,
  size,
  fontWeight,
  backgroundColor,
  width,
  height,
  onClick
}) => {
  return (
    <div>
      <Button
        variant={variant}
        color={color}
        size={size}
        className={className}
        fontWeight={fontWeight}
        onClick={onClick}
      
    
        sx={{
          justifyContent: "center",
          display: "flex",
        
          textTransform: "none", // Prevents uppercase transformation if needed
          backgroundColor:backgroundColor,
          width:width,
          height:height
       
        }}
      >
        <Typography
          variant="button" // You can specify a variant if needed
          sx={{ textAlign: "center", width: "100%" }} // Center text
        >
          {text}
        </Typography>
      </Button>
    </div>
  );
};

export default CustomButton;