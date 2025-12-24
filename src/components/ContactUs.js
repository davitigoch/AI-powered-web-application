import Map from "./Map";
import { Box, Paper, Typography } from "@mui/material";

function BookList() {
  return (
    <Box
      id="contactUs"
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
          CONTACT US
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
        <Paper
          sx={{ width: 360, height: 360, margin: "0px 30px", padding: "20px" }}
        >
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Magicbook LLC
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            Phone: +995 995 995
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            E-mail: info@magicbook.com
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            Fax: +995 995 994
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            Address: Tbilisi, Georgia
          </Typography>
        </Paper>
        <Map />
      </Box>
    </Box>
  );
}

export default BookList;
