import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionAreaCard(props) {
  const imageUrl = props.imageUrl;
  const name = props.name;
  const anotation = props.anotation;
  return (
    <>
      <Link
        to={`/createbook/${props.book}`}
        state={{ ...props }}
        style={{ textDecoration: "none" }}
      >
        <Card sx={{ width: 320, height: 300, m: "auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {anotation}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}
