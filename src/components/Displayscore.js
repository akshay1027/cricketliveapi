import React, { useState } from "react";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  fade,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { getMatchDetail } from "../Api/Api";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

const Displayscore = ({ match }) => {
  const [detail, setDatail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchCard = () => (
    <div>
      <Fade bottom cascade>
        <Card
          style={{
            background: match.matchStarted ? "#000000" : "",
            marginTop: 15,
          }}
        >
          <CardContent
            style={{
              marginTop: 17,
              backgroundColor: "#000000",
              color: "white",
            }}
          >
            <Fade>
              <Button
                onClick={() => {
                  showDetailBtnClicked(match["unique_id"]);
                }}
                variant="outlined"
                color="secondary"
              >
                Show match info
              </Button>
              <Grid
                container
                justify="center"
                alignItems="center"
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                }}
              >
                <Grid item>
                  <Typography variant="h5">{match["team-1"]}</Typography>
                </Grid>

                <Grid item>
                  <img
                    style={{
                      width: 85,
                      marginTop: 17,
                    }}
                    src={require("../img/vs1.jpg")}
                    alt="V/S-image"
                  />
                </Grid>

                <Grid item>
                  <Typography variant="h5">{match["team-2"]}</Typography>
                </Grid>
              </Grid>
            </Fade>
          </CardContent>

          <CardActions style={{ backgroundColor: "#000000", color: "white" }}>
            <Grid container justify="center">
              <Button
                style={{ marginRight: 17, backgroundColor: "#ff0055" }}
                variant="contained"
              >
                Match time {new Date(match.dateTimeGMT).toLocaleString()}
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Fade>
    </div>
  );

  const showDetailBtnClicked = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log(data);
        setDatail(data);
        handleClickOpen();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {match.type == "Twenty20" ? getMatchCard() : ""}
      <Fade left>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            style={{ backgroundColor: "black", color: "#ff0055", fontSize: 15 }}
            id="alert-dialog-title"
          >
            {"Match Details : "}
          </DialogTitle>
          <Fade left>
            <DialogContent
              style={{ backgroundColor: "black", fontWeight: "bold" }}
            >
              <DialogContentText id="alert-dialog-description">
                <Typography
                  style={{ color: "#ff0055", fontWeight: "bold", fontSize: 20 }}
                >
                  {detail.stat}
                </Typography>
                <Typography
                  style={{ color: "#ff0055", fontWeight: "bold", fontSize: 17 }}
                >
                  Match :
                  <span
                    style={{
                      color: "#ff0055",
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: 17,
                    }}
                  >
                    {detail.matchStarted ? " Started" : " Still not started"}
                  </span>
                </Typography>
                <Typography
                  style={{ color: "#ff0055", fontWeight: "bold", fontSize: 17 }}
                >
                  Score :
                  <span
                    style={{
                      color: "#ff0055",
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: 17,
                    }}
                  >
                    {" "}
                    {detail.score}
                  </span>
                </Typography>
              </DialogContentText>
            </DialogContent>
          </Fade>

          <DialogActions style={{ backgroundColor: "black" }}>
            <Button
              style={{ backgroundColor: "#ff0055" }}
              onClick={handleClose}
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fade>
    </>
  );
};

export default Displayscore;
