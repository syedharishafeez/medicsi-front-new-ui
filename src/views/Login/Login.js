import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from '@material-ui/core/Container';
import LoginFullPage from 'assets/img/image_4.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundImage:
      `url(${LoginFullPage})`,
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundRepeat:"repeat",
    backgroundPosition: "center",
    border:"1px solid",
    height:"100vh",
    overflowY:"hidden"
  },
  input: {
    color: 'white'
  },
  paper: {
    marginTop: theme.spacing(8),
    padding:theme.spacing(5,5,5,5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: `rgb(0,0,0,0)`, /* Fallback color */
  backgroundColor: `rgba(0,0,0, 0.7)`, /* Black w/opacity/see-through */
  color: "white",
  // fontWeight: "bold",
  border: "3px solid #f1f1f1",
  zIndex: 2,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (username && userPassword) {

        // Uncomment the LOGIN BLOCK code once you integrate the LOGIN API


        // START LOGIN BLOCK

        // let currentDataJSON = await fetch(url.LOGIN, {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ username, userPassword }),
        // });
        // let currentData = await currentDataJSON.json();
        
        // END LOGIN BLOCK


        // Delete the below code once you integrate the frontend with the backend

        // START ALTERNATE LOGIN BLOCK

        let currentData = { body: { message: "Login Successful" }, statusCode: 200 }

        // END ALTERNATE LOGIN BLOCK

        if (currentData.statusCode === 200) {
          history.push("/admin/dashboard");
          enqueueSnackbar("Login Successful", { variant: "success" });
        } else {
          enqueueSnackbar("Invalid Credentials", { variant: "error" });
        }


      } else {
        enqueueSnackbar("All fields are required", { variant: "error" });
      }
    } catch (ex) {
      enqueueSnackbar("Invalid Credentials", { variant: "error" });
    }
    setLoading(false);
  }

  return (
    <div className={classes.root}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} style={{...classes.image}}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="username"
              autoComplete="name"
              onInput={(e) => setUsername(e.target.value)}
              autoFocus
              required={true}
              InputLabelProps={{
                style: { color: '#f50057' },
              }}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onInput={(e) => setUserPassword(e.target.value)}
              required={true}
              InputLabelProps={{
                style: { color: '#f50057' },
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />

            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleLogin}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  style={{
                    fontWeight: 800,
                    color: "white",
                    marginRight: "10px",
                  }}
                />
              ) : null}
              {"  "}
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link style={{color: "#000000", opacity: 0.5}} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style={{color: "#000000", opacity: 0.5}} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
       </div>
      
    </Container>
  </div>
  );
}