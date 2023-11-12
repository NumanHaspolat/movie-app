import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

export default function Cards({ title, overview, bp, pp, voteAvg, id }) {
  const shortenedOverview =
    overview.length > 70 ? overview.slice(0, 70) + "..." : overview;

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    }
    if (vote >= 9.8) {
      return "blue";
    } else {
      return "red";
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "#124E73",
        color: "#1BDDF2",
        height: "100%",
        position: "relative",
      }}
    >
      <CardMedia
      className="card-img"
        sx={{
          color: "#1BDDF2",
          height: 0,
          paddingTop: "56%",
          md: { paddingTop: "0%" },
        }}
        image={pp ? IMG_API + pp : bp}
        title={title}
        onClick={() => navigate("/details/" + id)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#F2F2F2">
          {shortenedOverview}
        </Typography>
      </CardContent>
      <CardActions className="card-bottom">
        <Button
          size="small"
          color="inherit"
          onClick={() => navigate("/details/" + id)}
        >
          Learn More
        </Button>
      </CardActions>
      {currentUser && (
        <span
          className="vote-avg"
          style={{ position: "absolute", bottom: "5px", right: "5px" }}
        >
          {voteAvg.toFixed(1)}
        </span>
      )}
    </Card>
  );
}
