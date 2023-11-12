import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
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
          LOGIN
        </h2>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#148BA6",
              },
              "&:hover fieldset": {
                borderColor: "#148BA6",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#148BA6",
              },
            },
            "& label.Mui-focused": {
              color: "#031a29",
            },
            "& .MuiInputLabel-root": {
              color: "#148BA6",
            },
          }}
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#148BA6",
              },
              "&:hover fieldset": {
                borderColor: "#148BA6",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#148BA6",
              },
            },
            "& label.Mui-focused": {
              color: "#0a4166",
            },
            "& .MuiInputLabel-root": {
              color: "#148BA6",
            },
          }}
          type={showPassword ? "text" : "password"}
          label="Password"
          className="pass"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        />
        <p className="redirect-reg" onClick={() => navigate("/register")}>
          Dont have account?
        </p>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#148BA6",
            color: "#148BA6",
            marginTop: 2,
            "&:hover": {
              borderColor: "#0b324b",
              color: "#0b324b",
            },
          }}
          onClick={() => signIn(email, password)}
        >
          Login
        </Button>
        <div className="bottom-login">
          <span className="forgot" onClick={() => forgotPassword(email)}>
            Forgot <span className="bold">Password</span> ?
          </span>
          <span className="login-google" onClick={() => signUpProvider()}>
            Login With
            <span className="bold">Google</span>
            <GoogleIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
