import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Card,
  TextField,
  CardActions,
  CardContent,
  CssBaseline,
  CardMedia,
  useTheme,
} from "@mui/material";
import { ReactComponent as LoginSvg } from "../assets/login.svg";

const Login = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="md">
      <Card
        sx={{ paddingBottom: 2, marginTop: 4 }}
        variant="outlined"
        component="form"
      >
        <CardMedia>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <LoginSvg height={300} fill={theme.palette.secondary.main} />
          </Box>
        </CardMedia>
        <CardContent>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
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
