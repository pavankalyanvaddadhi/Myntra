import React from "react";
import CustomButton from "../ReusuableComponents/CustomButton";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffe5ee", // Set the full page background color to pink
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "30%",
          height: "500px",
          position: "relative",
          padding: 0,
        }}
      >
        {/* Image placed outside the main container */}
        <img
          className="loginimage"
          style={{ width: "100%", margin: 0 }} // Ensure no margin
          src="https://assets.myntassets.com/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
          alt="Login Banner"
        />
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-5px", // Adjust this value to overlap slightly if needed
            padding: "30px",
            border: "0px",
          }}
        >
          <div
            className="container-fluid"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4 style={{ fontSize: "16px" }}>Login or Signup</h4> {/* Reduced font size */}
            <input
              type="search"
              placeholder="+91 | Mobile Number"
              style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
            />
            <div
              className="colorforlogin"
              style={{
                marginBottom: "20px",
                display: "flex",
                fontSize: "12px", // Reduced font size for the entire line
              }}
            >
              <p style={{ margin: 0 }}>By continuing, I agree to the</p>
              <p className="p-edit" style={{ color: "#F13AB1", margin: "0 5px", fontSize: "12px" }}>
                Terms of Use
              </p>
              <p style={{ margin: 0 }}>&</p>
              <p className="p-edit" style={{ color: "#F13AB1", margin: "0 5px", fontSize: "12px" }}>
                Privacy Policy
              </p>
            </div>
            <CustomButton
              variant="contained"
              text="Continue"
              className="button-continue"
              backgroundColor="#E72744"
              width="100%"
              height="40px"
            />
            <div className="b-trouble d-flex" style={{ marginTop: "20px", fontSize: "12px" }}>
              <p style={{ margin: 0 }}>Have Trouble Logging in?</p>
              <p style={{ color: "#F13AB1", marginLeft: "5px" }}>Get help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;