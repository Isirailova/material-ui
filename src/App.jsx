import Button from "@mui/material/Button";
import Face3Icon from "@mui/icons-material/Face3";
import FacebookIcon from "@mui/icons-material/Facebook";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./App.css";

const userList = ["Samsung", "Ihone", "Xiaomi"];

function App() {
  return (
    <Container>
      <Typography variant="h3" mb={5}>
        This is H1 Header
      </Typography>
      <Button variant="contained" color="secondary" fullWidth={true}>
        Hello World
      </Button>
      <Button
        href="#"
        size="large"
        variant="outlined"
        onClick={() => alert("This is Link")}
      >
        Link
      </Button>
      <Button variant="contained" endIcon={<Face3Icon />}>
        Janara{" "}
      </Button>
      <Button size="small" variant="contained" startIcon={<FacebookIcon />}>
        Facebook
      </Button>
      <br />
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
      <br />
      <Box sx={{ display: "flex", gap: 4 }}>
        {userList.map((el) => {
          return (
            <Paper
              elevation={3}
              sx={{ height: 100, p: 2, textAlign: "center" }}
            >
              <Typography variant="h6">{el}</Typography>
            </Paper>
          );
        })}
      </Box>
    </Container>
  );
}

export default App;
