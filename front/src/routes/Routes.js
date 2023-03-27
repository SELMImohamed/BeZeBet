import "../styles/Route.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Root() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');
      </style>

      <div className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </div>
<Box align="center">
<h1 className="titre">BE ZEBET</h1>
<h3>Paris entre amis ?</h3>
      <Button
        sx={{
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          color: "red",
        }}
        color="error"
        variant="outlined"
      >
        Get Start
      </Button>
</Box>

    </>
  );
}