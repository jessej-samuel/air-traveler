import {
  Box,
  Button,
  Container,
  Card,
  TextField,
  CardActions,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { ReactComponent as LoginSvg } from "../assets/login.svg";
import "./Login.css";

const Login = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xs">
      <Card
        sx={{ paddingBottom: 2, marginTop: 4 }}
        variant="outlined"
        component="form"
      >
        <CardMedia>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <img src={"./logo.png"} alt="Login" width="60%" />
          </Box>
        </CardMedia>
        <CardContent className="text-fields-container">
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            className="text-fields"
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
            />
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "right" }}>
          <Button variant="text" type="reset">
            Clear
          </Button>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;
