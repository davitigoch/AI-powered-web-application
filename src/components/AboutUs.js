import Card from "../components/Card.js";
import TestCard from "../components/TestCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function AboutUS() {
  return (
    <Box
      id="aboutUs"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          ABOUT US{" "}
        </Typography>
      </Box>
      <Container>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          color="#bb1f62"
          style={{ textShadow: "0px 0px 0px black" }}
        >
          Our website is dedicated to providing personalized children's books
          that are tailored to each child's unique interests and
          characteristics. We understand that every child is different and that
          finding engaging and meaningful reading materials can be challenging.
          That's why we've created a platform that allows parents, teachers, and
          anyone else to create customized stories that capture the imagination
          of children and inspire a love of reading. Our web app utilizes AI
          technology to create cartoonized images of children, which are then
          inserted into pre-written stories to create personalized tales. By
          incorporating this technology, we are able to offer a unique and
          engaging reading experience that children will love. Our goal is to
          provide parents and educators with a tool that can help foster a love
          of reading in children and inspire them to explore the world around
          them.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutUS;
