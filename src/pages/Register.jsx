import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

function Register() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const displayName = `${fname} ${lname}`;

  const { createUser, signUpProvider } = useContext(AuthContext);

  const handleRegister = () => {
    createUser(email, pass, displayName);
  };

  return (
    <div className="login-parent">
      <div className="login-div">
        <span onClick={handleGoBack}>
          <ArrowBackIcon className="go-back" />
        </span>
        <h2
          className="login-header"
          style={{
            color: "#148BA6",
          }}
        >
          REGISTER
        </h2>
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
          label="First Name"
          onChange={(e) => setFname(e.target.value)}
          type="text"
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
          label="Last Name"
          type="text"
          variant="outlined"
          onChange={(e) => setLname(e.target.value)}
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
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPass(e.target.value)}
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
          onClick={handleRegister}
        >
          REGISTER
        </Button>
        <div className="bottom-login">
          <span className="login-google" onClick={()=>signUpProvider()}>
            Continue With
            <span className="bold">Google</span>
            <GoogleIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
