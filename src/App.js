import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import { getMatches } from "./Api/Api";
import Displayscore from "./components/Displayscore";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <div>
        <h1
          style={{
            color: "#ff0055",
          }}
        >
          T20 Live
        </h1>
        <h2> Get quick updates of upcoming matches</h2>
        <h3> Made with ❤ by Akshay after 27 cups of coffee ☕ </h3>
      </div>
      <Container> 
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <Displayscore match={match}></Displayscore>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
