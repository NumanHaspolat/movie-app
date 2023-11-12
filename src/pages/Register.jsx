import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Register() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="login-parent">
      <div className="login-div">
        {" "}
        <span onClick={handleGoBack}>
          <ArrowBackIcon className="go-back" />
        </span>
        <h2 className="login-header">REGISTER</h2>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#124E73",
              },
              "&:hover fieldset": {
                borderColor: "#0b324b",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#124E73",
              },
            },
            "& label.Mui-focused": {
              color: "#031a29",
            },
            "& .MuiInputLabel-root": {
              color: "#09344d",
            },
          }}
          label="Email"
          variant="outlined"
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#124E73",
              },
              "&:hover fieldset": {
                borderColor: "#0b324b",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#124E73",
              },
            },
            "& label.Mui-focused": {
              color: "#031a29",
            },
            "& .MuiInputLabel-root": {
              color: "#09344d",
            },
          }}
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button
          variant="outlined"
          sx={{
            borderColor: "#124E73",
            color: "#124E73",
            "&:hover": {
              borderColor: "#0b324b",
              color: "#0b324b",
            },
          }}
        >
          REGISTER
        </Button>
        <div className="bottom-login">
          <span className="forgot">
            Forgot <span className="bold">Password</span>?
          </span>
          <span className="login-google">
            Login With
            <span className="bold">Google</span>
            <GoogleIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
