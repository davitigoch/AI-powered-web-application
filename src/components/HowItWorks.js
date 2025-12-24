import Card from "../components/Card.js";
import TestCard from "../components/TestCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function BookList() {
  return (
    <Box
      id="howItWorks"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "60px",
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
          HOW IT WORKS
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <img src="step1.png" style={{ width: 250, margin: 20 }} />
        <img src="step2.png" style={{ width: 250, margin: 20 }} />
        <img src="step3.png" style={{ width: 250, margin: 20 }} />
        <img src="step4.png" style={{ width: 250, margin: 20 }} />
      </Box>
    </Box>
  );
}

export default BookList;
